import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from "../shared/components/delete-dialog/delete-dialog.component";
import { AppointmentsComponent } from "./appointments/appointments.component";
import { DoctorsComponent } from "./doctors/doctors.component";
import { DoctorsViewComponent } from "./doctors-view/doctors-view.component";
import { DepartmentsComponent } from "./departments/departments.component";
import { DepartmentsViewComponent } from "./departments-view/departments-view.component";
import { StaffComponent } from "./staff/staff.component";
import { StaffViewComponent } from "./staff-view/staff-view.component";
import { RoomAllotmentViewComponent } from "./room-allotment-view/room-allotment-view.component";
import { RoomAllotmentComponent } from "./room-allotment/room-allotment.component";
import { PatientsViewComponent } from "./patients-view/patients-view.component";
import { PatientsComponent } from "./patients/patients.component";
import { PaymentsViewComponent } from "./payments-view/payments-view.component";
import { PaymentsComponent } from "./payments/payments.component";
import { AppointmentsViewComponent } from "./appointments-view/appointments-view.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { ScreensRoutingModule } from "./screens-routing.module";

@NgModule({
  declarations: [
    //DeleteDialogComponent,
    //AppointmentsComponent,
    //DoctorsComponent,
    //DoctorsViewComponent,
    //DepartmentsComponent,
    //DepartmentsViewComponent,
    //StaffComponent,
    //StaffViewComponent,
    //RoomAllotmentViewComponent,
    //RoomAllotmentComponent,
    //PatientsViewComponent,
    //PatientsComponent,
    //PaymentsViewComponent,
    //PaymentsComponent,
    //AppointmentsViewComponent,
    //DashboardComponent
    //FooterComponent
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule
  ]
})
export class ScreensModule { }
