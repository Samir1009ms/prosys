import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exam-modal',
  templateUrl: './exam-modal.component.html',
  styleUrl: './exam-modal.component.scss'
})
export class ExamModalComponent implements OnInit {
  visible: boolean = false;
  formData: FormGroup = new FormGroup({});
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
      this.initializeForm();
    })
  }

  initializeForm() {
    this.formData = new FormGroup({
      '_id': new FormControl(this.data ? this.data._id : null),
      'lessoncode': new FormControl(this.data ? this.data.lessoncode : '', [Validators.required]),
      'studentnumber': new FormControl(this.data ? this.data.studentnumber : null, [Validators.required]),
      'examdate': new FormControl(this.data ? this.data.examdate : null, [Validators.required]),
      'price': new FormControl(this.data ? this.data.price : null, [Validators.required]),
    });

    console.log(this.formData); // Formun doğru şekilde oluşturulduğunu kontrol edin
  }
  ngOnInit() {
    this.modalServices.isModalOpen.subscribe((isOpen) => {
      this.visible = isOpen;
    })
    this.initializeForm();
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
