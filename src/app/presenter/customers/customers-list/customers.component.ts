import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { CustomerModel } from 'src/app/shared/model/customer.model';
import { CustomerService } from 'src/app/shared/service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private rest: CustomerService) { } 

  dtOptions: DataTables.Settings = {}
  customers: CustomerModel[] = []

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getCustomers()
  }

  getCustomers() {
     this.rest.getCustomers().subscribe(data => { 
        this.customers = data;
     })
  }

  deleteCustomer(id: number) {
     this.rest.deleteCustomer(id).subscribe(data => {
        this.customers = this.customers.filter(u => u.id !== id);
     })
  }

}
