import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PessoasComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PessoasModule { }
