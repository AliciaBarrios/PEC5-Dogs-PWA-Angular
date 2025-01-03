import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/Models/dog.interface';
import { ListService } from 'src/app/Services/list.service';
import {
  animate,
  query,
  style,
  transition,
  trigger,
  stagger
 } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('slideInList', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(100%)' }),
            stagger(300, [
              animate('800ms ease-out', style({ opacity: 1, transform: 'none' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ListComponent implements OnInit {
  dogs: Dog[] = [];
  currentView: 'cards' | 'list' = 'list';

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listService.getAllDogs().subscribe((data: Dog[]) => {
      this.dogs = data.map(dog => ({
        ...dog,
        image_url: dog.reference_image_id 
          ? `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`
          : '/assets/default-dog.jpg', // Imagen predeterminada si no hay referencia
      }));
    });
  }

  setView(view: 'cards' | 'list'): void {
    this.currentView = view;
  }
}
