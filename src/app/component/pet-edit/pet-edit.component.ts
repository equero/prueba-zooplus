import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import PetBreed from 'src/app/model/petBreed';
import PetType from 'src/app/model/petType';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss']
})
export class PetEditComponent implements OnInit {
  public petTypes: PetType;
  public petTypesList: string[];
  public petBreedList: string[];
  public petBreed: PetBreed;
  public petForm: FormGroup;

  constructor(private apiService: ApiService) {
    this.petTypesList = [];
    this.petTypes = {};
    this.petBreedList = [];
    this.petBreed = {};
    
    this.petForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      petType: new FormControl()
    })
  }

  ngOnInit(): void {
    this.apiService.getPetTypes().subscribe((types: PetType) => {
      this.petTypes = types;
      this.petTypesList = [...Object.values(types)];
    })
  }

}
