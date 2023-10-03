import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/empoyee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit{

  constructor(public service: EmployeeService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.service.fetchEmployeeList()
  }

  populateForm(selectedRecord: Employee) {
    this.service.employeeForm.setValue({
      _id: selectedRecord._id,
      fullName: selectedRecord.fullName,
      location: selectedRecord.location,
      position: selectedRecord.position,
      salary: selectedRecord.salary
    })
  }

  
  delete(_id: string) {
    if(confirm("Are you sure?")) {
      this.service.deleteEmployee(_id).subscribe((data) => {
        this.service.fetchEmployeeList()
        this.toastr.error('Deleted Successfully', 'Employee Register')
      })

    }
  }
}
