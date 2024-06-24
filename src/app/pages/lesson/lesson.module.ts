import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonComponent } from './lesson.component';
import { LessonModalComponent } from './lesson-modal/lesson-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LessonComponent,
    LessonModalComponent,
  ],
  imports: [
    CommonModule,
    LessonRoutingModule,
    ReactiveFormsModule
  ]
})
export class LessonModule { }
