import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/model/pet';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  
  public petList: Pet[];

  constructor(private apiService: ApiService) { 
    this.petList = [];
  }

  ngOnInit(): void {
    this.apiService.getPets().subscribe((data: Pet[]) => { this.petList = data });
  }
  
}
