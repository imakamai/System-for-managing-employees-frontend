import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Employee} from "../moduls/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServiceUrl = environment.apiURL;

  constructor(private  http: HttpClient) { }

  public getAllEmployees(): Observable<Employee[]>{
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('username:password')
    });
    return this.http.get<Employee[]>(environment.apiURL + '/employee/all');
  }

  public saveEmployee(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('username:password')
    });
    return this.http.post<Employee>(environment.apiURL + '/employee/save', employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('username:password')
    });
    return this.http.put<Employee>(`${this.apiServiceUrl}/employee/update`, employee);
  }
  // public updateEmployee(employee: Employee): Observable<Employee> {
  //   return this.http.put<Employee>(`${this.apiServiceUrl}/employee/update`, employee);
  // }

  // public updateEmployee(employee: Employee): Observable<Employee> {
  //   return  this.http.put<Employee>(environment.apiURL + '/employee/update', employee);
  // }

  public deleteEmployee(id: number): Observable<void> {
    console.log(`Deleting employee with URL: ${this.apiServiceUrl}/employee/delete-employee/${id}`);
    return this.http.delete<void>(`${this.apiServiceUrl}/employee/delete-employee/${id}`);

    // return this.http.delete<void>(environment.apiURL + '/employee/delete-employee/${id}' + id);
  }


  public getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(environment.apiURL + '/employee/{employeeId}' + id);
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     console.error(`Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   return throwError('Something went wrong; please try again later.');
  // }

}
