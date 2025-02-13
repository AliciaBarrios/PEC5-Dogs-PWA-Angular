import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Components/list/list.component';
import { DetailComponent } from './Components/detail/detail.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'dog/:id', component: DetailComponent },
  { path: '**', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
