import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { Index2Component } from './index2/index2.component';



@NgModule({
  declarations: [IndexComponent, Index2Component],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
