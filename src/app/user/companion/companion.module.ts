import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanionFormComponent } from './components/companion-form/companion-form.component';
import { CompanionBoardComponent } from './components/companion-board/companion-board.component';
import { CompanionCardComponent } from './components/companion-card/companion-card.component';



@NgModule({
  declarations: [
    CompanionFormComponent,
    CompanionBoardComponent,
    CompanionCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompanionModule { }
