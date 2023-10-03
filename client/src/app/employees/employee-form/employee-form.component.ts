import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/empoyee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styles: [
  ]
})
export class EmployeeFormComponent {
  submitted: boolean = false;

  constructor(public service: EmployeeService, private toastr: ToastrService) {}

  onSubmit() {
    this.submitted = true;    
    // console.log(this.service.employeeForm.value)
    if(this.service.employeeForm.valid) {
      if(this.service.employeeForm.get('_id')?.value == '') {
        this.service.postEmployee().subscribe((res) => {
          console.log(res);
          this.resetForm();
          this.service.fetchEmployeeList();
          this.toastr.success('Created Successfully', 'Employee Register')
        })
      }
      else {
        this.service.putEmployee().subscribe((res) => {
          console.log(res);
          this.resetForm();
          this.service.fetchEmployeeList();
          this.toastr.success('Updated Successfully', 'Employee Register')
        })
      }
      
    }
  }

  resetForm() {
    this.service.employeeForm.reset(new Employee());
    this.submitted = false;
  }

  
}
