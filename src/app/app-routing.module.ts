import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { NovoClienteComponent } from './cliente/novo-cliente/novo-cliente.component';

const routes: Routes = [
  { path: 'lista-cliente', component: ListaClienteComponent },
  { path: 'novo-cliente', component: NovoClienteComponent }
];

@NgModule({
  declarations: [ListaClienteComponent,NovoClienteComponent],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
