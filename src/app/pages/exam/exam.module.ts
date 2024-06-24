import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import { ExamModalComponent } from './exam-modal/exam-modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExamComponent,
    ExamModalComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    ReactiveFormsModule
  ]
})
export class ExamModule { }
