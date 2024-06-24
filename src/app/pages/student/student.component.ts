import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  students: any[] = [
    {
      _id: '1',
      number: '1',
      name: 'User',
      class: '11 a',
      surname: 'User',
    },
    {
      _id: '2',
      number: '1',
      name: 'User',
      class: '11 a',
      surname: 'User',
    }
  ];



  constructor(
    private router: Router,
    private modalServices: ModalService
  ) {
    modalServices.transferData.subscribe((data) => {
      console.log(data);
      const existingStudentİd = this.students.findIndex(student => student._id == data._id);
      console.log(existingStudentİd);
      if (existingStudentİd !== -1) {
        this.students[existingStudentİd] = data;
      } else {
        data._id = (this.students.length + 1).toString();
        this.students.push(data);
      }
    })
  }

  ngOnInit() {
  }


  openModal(e: any, type: string) {
    this.modalServices.openModal(true, e, type);
  }
  delete(e: any) {
    const index = this.students.findIndex(student => student._id == e._id);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }
}
