import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component'

const routes: Routes = [
  { path: 'lista-cliente', component: ListaClienteComponent },
];

@NgModule({
  declarations: [ListaClienteComponent,],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
