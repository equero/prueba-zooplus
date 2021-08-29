import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PetCardComponent } from './component/pet-card/pet-card.component';
import { PetEditComponent } from './component/pet-edit/pet-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pet/:id', component: PetCardComponent },
  { path: 'pet/:id/edit', component: PetEditComponent },
  { path: 'pet/create', component: PetEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }