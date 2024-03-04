import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PessoasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PessoasModule { }
