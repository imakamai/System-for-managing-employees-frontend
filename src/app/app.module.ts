import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import {HttpClientModule} from "@angular/common/http";
import { DepartmentComponent } from './components/department/department.component';
import { LeaveComponent } from './components/leave/leave.component';
import { LeaveRequireComponent } from './components/leave-require/leave-require.component';
import {FormsModule} from "@angular/forms";
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    LeaveComponent,
    LeaveRequireComponent,
    EmployeeFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
