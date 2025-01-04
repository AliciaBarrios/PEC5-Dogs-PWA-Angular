import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from 'src/app/Models/dog.interface';
import { ListService } from 'src/app/Services/list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  dog!: Dog;
  showDetails: boolean = false;

  constructor(
    private listService: ListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');  
    
    if (!identifier) {
      this.router.navigateByUrl('/');
      return;
    }
    this.listService.getDogById(identifier).subscribe((dog) => {
      if (!dog) {
        this.router.navigateByUrl('/');
        return;
      }

      this.dog = {
        ...dog,
        image_url: dog.reference_image_id 
          ? `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`
          : '/assets/default-dog.jpg', // Imagen predeterminada si no hay referencia
      }
    });
  }

  setDefaultImage(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = './assets/default-dog.jpg';
  }

  goBack(): void {
    this.router.navigateByUrl('/');
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
