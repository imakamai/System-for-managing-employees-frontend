import { Component } from '@angular/core';
import {Employee} from "../../moduls/Employee";
import {EmployeeService} from "../../services/employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import { MatDialog } from '@angular/material/dialog';
import {Router} from "express";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees: Employee[] = [];
  editingEmployee: Employee | null = null;


  constructor(
    private employeeService: EmployeeService
    // private router: Router,
    // private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data: Employee[]) => this.employees = data,
      error => console.error('Error fetching employees', error)
    );
  }

  editEmployee(employee: Employee): void {
    this.editingEmployee = { ...employee };
  }

  cancelEdit(): void {
    this.editingEmployee = null;
  }

  onSave(): void {
    if (this.editingEmployee) {
      this.employeeService.updateEmployee(this.editingEmployee).subscribe(
        (updatedEmployee: Employee) => {
          const index = this.employees.findIndex(e => e.id === updatedEmployee.id);
          if (index !== -1) {
            this.employees[index] = updatedEmployee;
            this.editingEmployee = null;
          }
          console.log('Employee updated successfully');
        },
        (error: HttpErrorResponse) => console.error('Error updating employee', error)
      );
    }
  }
  // onUpdate(employee: Employee): void {
  //   if (employee) {
  //     this.employeeService.updateEmployee(employee).subscribe(
  //       (updatedEmployee: Employee) => {
  //         const index = this.employees.findIndex(e => e.id === updatedEmployee.id);
  //         if (index !== -1) {
  //           this.employees[index] = updatedEmployee;
  //         }
  //         console.log('Employee updated successfully');
  //       },
  //       (error: HttpErrorResponse) => console.error('Error updating employee', error)
  //     );
  //   }
  // }

  // onEdit(employee: Employee): void {
  //   const dialogRef = this.dialog.open(EmployeeEditDialogComponent, {
  //     width: '400px',
  //     data: { employee }
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.loadEmployees(); // Refresh employee list if the edit was successful
  //     }
  //   });
  // }
  // onEdit(employee: Employee): void {
  //   const dialogRef = this.dialog.open(EmployeeEditDialogComponent, {
  //     width: '400px',
  //     data: { employee }
  //   });
  //
  //   dialogRef.afterClosed().subscribe((result: any) => {
  //     if (result) {
  //       this.loadEmployees(); // Refresh employee list if the edit was successful
  //     }
  //   });
  // }

  // onUpdate(employee: Employee): void {
  //   if (employee) {
  //     this.employeeService.updateEmployee(employee).subscribe(
  //       (updatedEmployee: Employee) => {
  //         // Update the employee in the list
  //         const index = this.employees.findIndex(e => e.id === updatedEmployee.id);
  //         if (index !== -1) {
  //           this.employees[index] = updatedEmployee;
  //         }
  //         console.log('Employee updated successfully');
  //       },
  //       error => console.error('Error updating employee', error)
  //     );
  //   }
  // }

  onDelete(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      () => {
        this.employees = this.employees.filter(e => e.id !== employeeId);
        console.log('Employee deleted successfully');
      },
      error => console.error('Error deleting employee', error)
    );
  }


  // public employees: Employee[];
  // public currentEmployee: Employee = {} as Employee;
  // public isEditMode: boolean = false;
  //
  // constructor(private employeeService: EmployeeService) { }

  // ngOnInit() {this.getAllEmployees()}


  // public getAllEmployees() {
  //   this.employeeService.getAllEmployees().subscribe(
  //     (response: Employee[]) => {this.employees = response;},(error: HttpErrorResponse) => {alert(error.message)}
  //   )
  //
  // }
  // public saveEmployee(): void {
  //   if (this.isEditMode) {
  //     this.updateEmployee(this.currentEmployee);
  //   } else {
  //     this.employeeService.saveEmployee(this.currentEmployee).subscribe(
  //       (response: Employee) => {
  //         this.getAllEmployees();
  //         this.resetForm();
  //       },
  //       (error: HttpErrorResponse) => {
  //         alert('Error saving employee: ' + error.message);
  //       }
  //     );
  //   }
  // }
  //
  // public updateEmployee(employee: Employee): void {
  //   this.employeeService.updateEmployee(employee).subscribe(
  //     (response: Employee) => {
  //       this.getAllEmployees();
  //       this.resetForm();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert('Error updating employee: ' + error.message);
  //     }
  //   );
  // }
  //
  // public deleteEmployee(id: number): void {
  //   this.employeeService.deleteEmployeeById(id).subscribe(
  //     () => {
  //       this.getAllEmployees();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert('Error deleting employee: ' + error.message);
  //     }
  //   );
  // }
  //
  // public editEmployee(employee: Employee): void {
  //   this.currentEmployee = { ...employee };
  //   this.isEditMode = true;
  // }
  //
  // public resetForm(): void {
  //   this.currentEmployee = {} as Employee;
  //   this.isEditMode = false;
  // }

  // public updateEmployee(employee: Employee): void {
  //   this.employeeService.updateEmployee(employee).subscribe(
  //     (response: Employee) => {this.getAllEmployees();}, (error: HttpErrorResponse) => {alert('Error updating employee: ' + error.message);}
  //   )
  // }
  //
  // public deleteEmployee(id: number): void {
  //   this.employeeService.deleteEmployeeById(id).subscribe(
  //     () => {this.getAllEmployees();}, (error: HttpErrorResponse) => {alert('Error deleting employee: ' + error.message);}
  //   )
  // }
  // public editEmployee(employee: Employee): void {
  //   this.currentEmployee = { ...employee };
  //   this.isEditMode = true;
  // }

  // goToForm() {
  //   this.router.link(['/employee-form']);
  // }
}
