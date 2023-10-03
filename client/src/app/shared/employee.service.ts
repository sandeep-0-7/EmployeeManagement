import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Employee } from './empoyee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  readonly baseUrl = 'http://localhost:3000/api/employees/';
  list: Employee[] = [];

  employeeForm = this.fb.group({
    _id: [''],
    fullName: ['', Validators.required],
    position: [''],
    location: ['', Validators.required],
    salary: ['', Validators.required]
  })

  postEmployee() {
    return this.http.post(this.baseUrl + 'add', this.employeeForm.value)
  }

  fetchEmployeeList() {
    return this.http.get(this.baseUrl).subscribe(data => {
      this.list = data as Employee[];
    })
  }

  putEmployee() {
    return this.http.put(this.baseUrl + this.employeeForm.get('_id')?.value, this.employeeForm.value)
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.baseUrl + id)
  }
}
