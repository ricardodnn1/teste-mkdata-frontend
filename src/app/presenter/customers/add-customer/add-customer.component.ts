import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { CustomerService } from 'src/app/shared/service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  form!: FormGroup;

  legalPerson: boolean = false
  
  contactInputs: any = [{}]; 
  customers: any;
  message: string = "";
  invalidFeedback: boolean = false;

  get customer(): FormGroup {
    return this.form.controls['customer'] as FormGroup
  }

  get contacts(): FormArray {
    return this.form.controls['contacts'] as FormArray
  }

  constructor(private fb: FormBuilder, private rest: CustomerService) {
    this.form = this.fb.group({ 
       customer: this.fb.group({ 
            name: ['', Validators.required],
            cpfCnpj: ['', Validators.required],
            rgIe: ['', Validators.required],
            status: ['', Validators.required],
            typePerson: ['', Validators.required]
        }),
        contacts: this.fb.array([])
    })
   } 

  onSubmit() { 
 
  }

  onChange(deviceValue: any) {
    if(deviceValue === 'J') {
        this.legalPerson = true
    } else {
        this.legalPerson = false
    }
  } 

  ngOnInit(): void { 
    this.addPhoneLine()
  }

  addPhoneLine(): void {
    const contactDto = this.fb.group({
        phone: ['']
    })

    this.contacts.push(contactDto)
  }

  removePhoneNumber(i: any) {  
    this.contacts.removeAt(i)
  }

  saveCustomer() {     
    if (this.form.valid) {  
        this.customers = {
            name: this.form.value.customer.name,
            cpfCnpj: this.form.value.customer.cpfCnpj,
            rgIe: this.form.value.customer.rgIe,
            status: this.form.value.customer.status,
            typePerson: this.form.value.customer.typePerson,
            contacts: this.form.value.contacts
        };  
        this.rest.addCustomer(this.customers).subscribe((s) => {
            if(s !== "") {
                this.message = "Saved successfully"
            }
        })
    } else { 
      this.invalidFeedback = true
    }
  }

  get name() {
    return this.form.value.customer.name
  }
 
  get cpfCnpj() {
    return this.form.value.customer.cpfCnpj
  }
  
  get rgIe() {
    return this.form.value.customer.rgIe
  }
  
  get status() {
    return this.form.value.customer.status
  }
 
  get typePerson() {
    return this.form.value.customer.typePerson
  }
  

}
