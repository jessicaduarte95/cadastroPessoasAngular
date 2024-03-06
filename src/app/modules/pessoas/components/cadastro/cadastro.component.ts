import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { ListPeople } from '../../model/list-people'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public emitItemPersonList = new EventEmitter<ListPeople>;
  @Input() public list: Array<ListPeople> = [];

  public addNomeList: string = "";
  public addIdadeList: number = 0;

  constructor() { }

  public submitItemPersonList() {

    if (this.addNomeList && this.addIdadeList) {
      this.emitItemPersonList.emit({ nome: this.addNomeList, idade: this.addIdadeList })
      this.addNomeList = "";
      this.addIdadeList = 0;
    }
  }

  ngOnInit(): void {
  }

}
