import { FormulariosComponent } from './components/formularios/formularios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FormulariosComponent,
    pathMatch: 'full'
  },
  {
    path: 'buscarposicao',
    component: FormulariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
