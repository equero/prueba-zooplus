import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/model/pet';
import PetBreed from 'src/app/model/petBreed';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit {

  @Input() pet!: Pet;
  public breedList: PetBreed = {};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const breedSessionItem: string | null = sessionStorage.getItem(`${this.pet.petType}_breed`);
    const breedAlreadyLoad: boolean = breedSessionItem ? true : false;
    if (breedAlreadyLoad) {
      this.breedList = JSON.parse(breedSessionItem || '{}') ;
    } else {
      this.apiService.getBreed(this.pet.petType).subscribe((breed: PetBreed) => {
        sessionStorage.setItem(`${this.pet.petType}_breed`, JSON.stringify(breed));
        this.breedList = breed;
      })
    }
    
  }

}
