import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table';

// Material design
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

import { DeleteDialogComponent } from './shared/components/delete-dialog/delete-dialog.component';
import { AppointmentsComponent } from './screens/appointments/appointments.component';
import { DoctorsComponent } from './screens/doctors/doctors.component';
import { DoctorsViewComponent } from './screens/doctors-view/doctors-view.component';
import { DepartmentsComponent } from './screens/departments/departments.component';
import { DepartmentsViewComponent } from './screens/departments-view/departments-view.component';
import { StaffComponent } from './screens/staff/staff.component';
import { StaffViewComponent } from './screens/staff-view/staff-view.component';
import { RoomAllotmentViewComponent } from './screens/room-allotment-view/room-allotment-view.component';
import { RoomAllotmentComponent } from './screens/room-allotment/room-allotment.component';
import { PatientsViewComponent } from './screens/patients-view/patients-view.component';
import { PatientsComponent } from './screens/patients/patients.component';
import { PaymentsViewComponent } from './screens/payments-view/payments-view.component';
import { PaymentsComponent } from './screens/payments/payments.component';
import { AppointmentsViewComponent } from './screens/appointments-view/appointments-view.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { MaterialModule } from 'src/material.module';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteDialogComponent,
    AppointmentsComponent,
    DoctorsComponent,
    DoctorsViewComponent,
    DepartmentsComponent,
    DepartmentsViewComponent,
    StaffComponent,
    StaffViewComponent,
    RoomAllotmentViewComponent,
    RoomAllotmentComponent,
    PatientsViewComponent,
    PatientsComponent,
    PaymentsViewComponent,
    PaymentsComponent,
    AppointmentsViewComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CdkTableModule, MatTableModule]
})
export class AppModule {}
