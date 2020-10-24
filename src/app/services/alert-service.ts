import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { AlertType } from '../model/alert-type.enum';
import { AlertDuration } from '../model/alert-duration.enum';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private snackBar: MatSnackBar) { }

  success(message: string, action?: string, duration?: AlertDuration): MatSnackBarRef<SimpleSnackBar> {
    return this.open(message, AlertType.Success, action, duration);
  }

  error(message: string, action?: string, duration?: AlertDuration) {
    this.open(message, AlertType.Error, action, duration);
  }

  warn(message: string, action?: string) {
    this.open(message, AlertType.Warn, action);
  }

  info(message: string, action?: string, duration?: AlertDuration): MatSnackBarRef<SimpleSnackBar> {
    return this.open(message, AlertType.Info, action, duration);
  }

  private open(message: string, type?: AlertType, action?: string, duration?: AlertDuration): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
        duration: duration ? duration : AlertDuration.Standard,
      });
  }
}
