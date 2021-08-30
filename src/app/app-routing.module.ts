import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PetEditComponent } from './component/pet-edit/pet-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: PetEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }