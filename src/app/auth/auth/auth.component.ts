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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  //email: string = "";
  //password: string = "";

  private fb          = inject( FormBuilder );
  private authService = inject( AuthService );

  readonly dialog = inject(MatDialog);

  constructor( private router: Router) {}

  public  myForm: FormGroup = this.fb.group({
    email:    ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]]
  });

  login() {
    const {email, password} = this.myForm.value;
    this.router.navigateByUrl('/dashboard/screens/appointments');

    this.authService.login(email, password)
      .subscribe(success => {
        console.log(success)
      })

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
