import { Component, OnInit } from '@angular/core';
import { ListPeople } from '../../model/list-people';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css'],
})
export class PessoasComponent implements OnInit {

  public listPeople: Array<ListPeople> = [];
  constructor() { }

  public setEmitPeopleList(event: ListPeople) {
    this.listPeople.push({ nome: event.nome, idade: event.idade });
  }

  ngOnInit(): void {
  }

}
