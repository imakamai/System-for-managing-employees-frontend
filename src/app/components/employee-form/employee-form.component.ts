import { Component } from '@angular/core';
import {Employee} from "../../moduls/Employee";
import {EmployeeService} from "../../services/employee.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  public newEmployee: Employee = {} as Employee;

  constructor(private employeeService: EmployeeService) { }

  // ngOnInit() {this.getAllEmployees()}

  public saveEmployee(): void {
    this.employeeService.saveEmployee(this.newEmployee).subscribe(
      (response: Employee) => {
        alert('Employee added successfully!');
        this.resetForm();
      },
      (error: HttpErrorResponse) => {
        alert('Error adding employee: ' + error.message);
      }
    );
  }

  public resetForm(): void {
    this.newEmployee = {} as Employee;
  }
}
