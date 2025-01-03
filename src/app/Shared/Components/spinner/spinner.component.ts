 import { Component, OnInit } from '@angular/core';
 import { ListService } from 'src/app/Services/list.service';
 import { Dog } from 'src/app/Models/dog.interface';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  loading: boolean = true;
  dogs: Dog[] = [];

  constructor(private listService: ListService) {}

  ngOnInit(): void {
      this.manageSpinner();
  }

  private manageSpinner(): void {
    this.listService.getAllDogs().subscribe(
      (data) => {
        this.dogs = data;
        this.loading = false;
      }
    );
  }
}
