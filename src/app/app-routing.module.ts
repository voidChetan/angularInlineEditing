import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InlineEditingOneComponent } from './pages/inline-editing-one/inline-editing-one.component';
import { InlineEditingtwoComponent } from './pages/inline-editingtwo/inline-editingtwo.component';

const routes: Routes = [
  {
    path:'',
    component:InlineEditingOneComponent
  },
  {
    path:'way-1',
    component:InlineEditingOneComponent
  },
  {
    path:'way-2',
    component:InlineEditingtwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
