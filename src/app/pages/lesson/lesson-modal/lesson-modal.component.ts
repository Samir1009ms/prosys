import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lesson-modal',
  templateUrl: './lesson-modal.component.html',
  styleUrl: './lesson-modal.component.scss'
})
export class LessonModalComponent implements OnInit {
  visible: boolean = false;
  formData!: FormGroup;
  data: any;
  name: string = '';
  constructor(
    private modalServices: ModalService
  ) {
    modalServices.modalName.subscribe((name) => {
      this.name = name
    })
    modalServices.modalData.subscribe((data) => {
      console.log(data);
      this.data = data
      this.formData = new FormGroup({
        '_id': new FormControl(this.data === null ? null : this.data._id),
        'code': new FormControl(this.data === null ? '' : this.data.code, [Validators.required]),
        'class': new FormControl(this.data === null ? null : this.data.class, [Validators.required]),
        'teacherName': new FormControl(this.data === null ? null : this.data.teacherName, [Validators.required]),
        'name': new FormControl(this.data === null ? null : this.data.name, [Validators.required]),
        'teacherSurname': new FormControl(this.data === null ? null : this.data.teacherSurname, [Validators.required])
      })
    })
  }

  ngOnInit() {
    this.modalServices.isModalOpen.subscribe((isOpen) => {
      this.visible = isOpen;
    })
  }
  closeModal() {
    this.modalServices.closeModal();
  }
  saveModal() {
    if (!this.formData.invalid) {
      this.modalServices.sendData(this.formData.value);
      this.closeModal();
    } else {
      this.formData.markAllAsTouched();
    }
  }
}
