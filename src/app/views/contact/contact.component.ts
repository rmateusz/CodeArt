import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/services/alert-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() form: FormGroup;
  name: '?';
  message: '';
  sent = false;
  toMail: '';
  topicChosen: {
    value: 1
  };

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit() { }

  verifyFormCorrectness = () => {
    if (!this.toMail) {
      this.alertService.error('Mail');
      return false;
    }

    if (!(this.topicChosen && this.topicChosen.value)) {
      this.alertService.error('Title');
      return false;
    }

    if (!this.message) {
      this.alertService.error('Message');
      return false;
    }
  }

  public sendEmail(e: Event) {
    if (this.verifyFormCorrectness()) {
      return;
    }

    e.preventDefault();
  }

  changeTopic(event: any) {
    console.log(event);
    this.topicChosen = event;
  }
}
