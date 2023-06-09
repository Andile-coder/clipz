import { Injectable } from '@angular/core';
interface IModel {
  id: string;
  visible: boolean;
}
@Injectable({ providedIn: 'root' })
export class ModalService {
  private modals: IModel[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }
  unregister(id: string) {
    this.modals = this.modals.filter((element) => element.id !== id);
  }
  isModalOpen(id: string): boolean {
    return !!this.modals.find((element) => element.id === id)?.visible;
  }
  public toggleModal(id: string): void {
    const modal = this.modals.find((element) => element.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
