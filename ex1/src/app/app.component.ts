import { Component } from '@angular/core';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
  
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [],
})
  
export class AppComponent {
  title = 'ex1';

  displayModal: boolean = false;
  input1: string = '';
  input2: string = '';
  textareaValue: string = '';

  filePath: string = '';

  showModal() {
    this.displayModal = true;
  }

  closeModal() {
    this.displayModal = false;
  }

  showFilePath(event: any) {
    if (event.target.files && event.target.files.length > 0) {
        this.filePath = event.target.files[0].name;  // Isso vai mostrar apenas o nome do arquivo. Se quiser o caminho completo, browsers modernos não permitem por questões de segurança.
    }
  }
}
