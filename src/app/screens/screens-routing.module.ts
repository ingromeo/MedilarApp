import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentsViewComponent } from './appointments-view/appointments-view.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsViewComponent } from './doctors-view/doctors-view.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentsViewComponent } from './departments-view/departments-view.component';
import { StaffComponent } from './staff/staff.component';
import { StaffViewComponent } from './staff-view/staff-view.component';
import { RoomAllotmentComponent } from './room-allotment/room-allotment.component';
import { RoomAllotmentViewComponent } from './room-allotment-view/room-allotment-view.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsViewComponent } from './patients-view/patients-view.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentsViewComponent } from './payments-view/payments-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
    data: { title: 'Appointments' }
  },
  {
    path: 'appointments/new',
    component: AppointmentsViewComponent,
    data: { title: 'New appointment' }
  },
  {
    path: 'appointments/:id',
    component: AppointmentsViewComponent,
    data: { title: 'Update appointments' }
  },

  {
    path: 'doctors',
    component: DoctorsComponent,
    data: { title: 'Doctors' }
  },
  {
    path: 'doctors/new',
    component: DoctorsViewComponent,
    data: { title: 'New doctor' }
  },
  {
    path: 'doctors/:id',
    component: DoctorsViewComponent,
    data: { title: 'Update doctor' }
  },
  {
    path: 'departments',
    component: DepartmentsComponent,
    data: { title: 'Departments' }
  },
  {
    path: 'departments/new',
    component: DepartmentsViewComponent,
    data: { title: 'New Departments' }
  },
  {
    path: 'departments/:id',
    component: DepartmentsViewComponent,
    data: { title: 'Update Departments' }
  },
  {
    path: 'staff',
    component: StaffComponent,
    data: { title: 'Staff list' }
  },
  {
    path: 'staff/new',
    component: StaffViewComponent,
    data: { title: 'New staff' }
  },
  {
    path: 'staff/:id',
    component: StaffViewComponent,
    data: { title: 'Update staff' }
  },
  {
    path: 'room-allotment',
    component: RoomAllotmentComponent,
    data: { title: 'Room allotment' }
  },
  {
    path: 'room-allotment/new',
    component: RoomAllotmentViewComponent,
    data: { title: 'New room allotment' }
  },
  {
    path: 'room-allotment/:id',
    component: RoomAllotmentViewComponent,
    data: { title: 'Update room allotment' }
  },
  {
    path: 'patients',
    component: PatientsComponent,
    data: { title: 'Patients' }
  },
  {
    path: 'patients/new',
    component: PatientsViewComponent,
    data: { title: 'New patients' }
  },
  {
    path: 'patients/:id',
    component: PatientsViewComponent,
    data: { title: 'Update patients' }
  },
  {
    path: 'payments',
    component: PaymentsComponent,
    data: { title: 'Payments' }
  },
  {
    path: 'payments/new',
    component: PaymentsViewComponent,
    data: { title: 'New payments' }
  },
  {
    path: 'payments/:id',
    component: PaymentsViewComponent,
    data: { title: 'Update payments' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
