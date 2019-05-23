import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  clientes: { id: number; nome: string; }[];
 

  constructor() { }

  ngOnInit() {


    this.clientes = [
      {id: 1,nome: "kelvin"},
      {id: 2,nome: "Luiz"},
      {id: 3,nome: "Fernando"},
    ];

  }

}
