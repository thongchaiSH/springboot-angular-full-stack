import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmploees();
    // this.employees=[{
    //   id:1,
    //   firstName:"Thongchai",
    //   lastName:"Sittikhoetkorn",
    //   emailId:"thongchai.sh@gmail.com"
    // },{
    //   id:2,
    //   firstName:"jane",
    //   lastName:"mind",
    //   emailId:"save.sh@gmail.com"
    // }]
  }
  private getEmploees() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  detailEmployee(id:number){
    this.router.navigate(['employee-details', id]);
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        console.log(data);
        this.getEmploees();
      },
      (error) => console.log(error)
    );
  }
}
