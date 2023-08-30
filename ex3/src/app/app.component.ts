import { Component } from '@angular/core';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex3';

  message: string | null = null;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.currentAlert.subscribe(message => this.message = message);
  }

  changeMessage(): void {
    this.alertService.changeAlert('Mensagem alterada!');
  }  
}
