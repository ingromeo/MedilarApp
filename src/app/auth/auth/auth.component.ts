import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from "@angular/material/button";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  email: string = "";
  password: string = "";
  readonly dialog = inject(MatDialog);

  constructor( private router: Router) {}

  login() {
    this.router.navigateByUrl('/dashboard/screens/appointments');

    /*if (this.email === "firu") {
      this.router.navigateByUrl('/dashboard/screens/appointments');
    } else {
      this.dialog.open(DialogElementsExampleDialog);
    }*/

  }

  olvido() {
    this.router.navigateByUrl('/forgot');
  }

  register() {
    this.router.navigateByUrl('/register');
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: '../../shared/popups/dialog-error.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogElementsExampleDialog {}
