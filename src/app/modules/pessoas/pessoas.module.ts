import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './components/lista/lista.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PessoasComponent,
    CadastroComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PessoasModule { }
