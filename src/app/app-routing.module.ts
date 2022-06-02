import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {QualificationDetailsComponent} from './qualification-details/qualification-details.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
const routes: Routes = [
  {path: '', component:RegisterComponent},
  {path: 'navigationbar', component:NavigationBarComponent},
  // {path: '', component:QualificationDetailsComponent},
  {path: 'qualificationdetails', component:QualificationDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
