import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'exam',
    loadChildren: () => import('./pages/exam/exam.module').then(m => m.ExamModule)
  },
  {
    path: 'lesson',
    loadChildren: () => import('./pages/lesson/lesson.module').then(m => m.LessonModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./pages/student/student.module').then(m => m.StudentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
