import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccompaniedCardComponent } from './components/accompanied-card/accompanied-card.component';
import { AccompaniedFormComponent } from './components/accompanied-form/accompanied-form.component';
import { AccompaniedBoardComponent } from './components/accompanied-board/accompanied-board.component';



@NgModule({
  declarations: [
    AccompaniedCardComponent,
    AccompaniedFormComponent,
    AccompaniedBoardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccompaniedModule { }
