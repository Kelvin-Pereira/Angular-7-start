import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component'
import { AppRoutingModule } from '../app-routing.module';
import { TableModule } from 'primeng/table';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';


@NgModule({
  declarations: [
    ListaClienteComponent,
    NovoClienteComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    TableModule
  ]
})
export class ClienteModule { }
