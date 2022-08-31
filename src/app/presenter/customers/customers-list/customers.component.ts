import { Component, OnInit } from '@angular/core'; 
import { CustomerModel } from 'src/app/shared/model/customer.model';
import { CustomerService } from 'src/app/shared/service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private rest: CustomerService) {
    this.ngOnInit();
  } 
 
  customers: CustomerModel[] = []
  name: any;

  ngOnInit(): void { 
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

  search() {
     if(this.name === "") {
        this.ngOnInit()
     } else {
        this.customers = this.customers.filter(c => {
            return c.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase()) && c.status === "A"
        });
     }
  }

}
