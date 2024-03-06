import { Component, OnInit, Input } from '@angular/core';
import { ListPeople } from '../../model/list-people'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() public listPeople: Array<ListPeople> = [];

  constructor() { } 

  public deletePerson(event: number) {
    this.listPeople.splice(event, 1);
  }

  ngOnInit(): void {
  }

}
