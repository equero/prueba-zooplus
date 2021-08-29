import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/model/pet';

@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit {

  @Input() pet!: Pet;

  constructor() { 

  }

  ngOnInit(): void {
  }

}
