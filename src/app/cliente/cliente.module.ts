import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component'
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    ListaClienteComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ClienteModule { }
