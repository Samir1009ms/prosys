import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss'
})
export class ExamComponent {
  exams: any[] = [
    {
      _id: '1',
      lessoncode: '1',
      studentnumber: '1234',
      examdate: '2024-06-13',
      price: '90',
    },
    {
      _id: '1',
      lessoncode: '1',
      studentnumber: '1234',
      examdate: '2024-06-13',
      price: '100',
    }
  ];



  constructor(
    private router: Router,
    private modalServices: ModalService
  ) {
    modalServices.transferData.subscribe((data) => {
      console.log(data);
      const existingLesson = this.exams.findIndex(exam => exam._id == data._id);
      console.log(existingLesson);
      if (existingLesson !== -1) {
        this.exams[existingLesson] = data;
      } else {
        data._id = (this.exams.length + 1).toString();
        this.exams.push(data);
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
    const index = this.exams.findIndex(exam => exam._id == e._id);
    if (index !== -1) {
      this.exams.splice(index, 1);
    }
  }
}
