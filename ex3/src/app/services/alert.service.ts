import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSource = new BehaviorSubject<string | null>('Mensagem teste!');
  currentAlert = this.alertSource.asObservable();

  constructor() { }

  changeAlert(message: string) {
    this.alertSource.next(message);
  }
}