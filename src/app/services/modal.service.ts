import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isModalOpen = new Subject<boolean>();
  modalData = new BehaviorSubject<any>(null);
  transferData = new Subject<any>();
  modalName = new Subject<string>();


  constructor() { }

  openModal(isOpen: boolean, data: null | any, type: string) {
    this.isModalOpen.next(isOpen);
    this.modalData.next(data);
    this.modalName.next(type);
  }

  closeModal() {
    this.isModalOpen.next(false);
    this.modalData.next(null);
    this.modalName.next('');
  }

  sendData(data: any) {
    console.log(data);
    this.transferData.next(data);
  }

}
