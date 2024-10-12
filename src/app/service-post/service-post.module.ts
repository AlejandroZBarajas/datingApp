import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ServiceFormComponent } from './components/service-form/service-form.component';
import { ServiceBoardComponent } from './components/service-board/service-board.component';



@NgModule({
  declarations: [
    ServiceCardComponent,
    ServiceFormComponent,
    ServiceBoardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicePostModule { }
