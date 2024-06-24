import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {
  lessons: any[] = [
    {
      _id: '1',
      code: '1',
      name: 'Riyaziyyat',
      class: '11',
      teacherName: 'Abdulla',
      teacherSurname: 'Ismayilov',
    },
    {
      _id: '2',
      code: '2',
      name: 'Riyaziyyat',
      class: '11',
      teacherName: 'Rahman',
      teacherSurname: 'Ismayilov',
    }
  ];



  constructor(
    private router: Router,
    private modalServices: ModalService
  ) {
    modalServices.transferData.subscribe((data) => {
      console.log(data);
      const existingLesson = this.lessons.findIndex(lesson => lesson._id == data._id);
      console.log(existingLesson);
      if (existingLesson !== -1) {
        this.lessons[existingLesson] = data;
      } else {
        data._id = (this.lessons.length + 1).toString();
        this.lessons.push(data);
      }
    })
  }

  ngOnInit() {
  }


  openModal(e: any, type: string) {
    this.modalServices.openModal(true, e, type);
  }
  delete(e: any) {
    // this.modalServices.closeModal();
    const index = this.lessons.findIndex(lesson => lesson._id == e._id);
    if (index !== -1) {
      this.lessons.splice(index, 1);
    }
  }
}
