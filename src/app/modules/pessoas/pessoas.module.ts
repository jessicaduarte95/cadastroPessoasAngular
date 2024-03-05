import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    PessoasComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PessoasModule { }
