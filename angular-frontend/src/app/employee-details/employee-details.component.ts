import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id:number;
  employee:Employee=new Employee();
  constructor(private route:ActivatedRoute
    ,private employeeService:EmployeeService
    ) { 
    this.id=route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    },error=>console.log(error));
  }

}
