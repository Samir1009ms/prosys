import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrl: './student-modal.component.scss'
})
export class StudentModalComponent implements OnInit {
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
        'number': new FormControl(this.data === null ? '' : this.data.number, [Validators.required]),
        'class': new FormControl(this.data === null ? null : this.data.class, [Validators.required]),
        'surname': new FormControl(this.data === null ? null : this.data.surname, [Validators.required]),
        'name': new FormControl(this.data === null ? null : this.data.name, [Validators.required]),
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
    this.modalServices.sendData(this.formData.value);
    this.closeModal();
  }
}
