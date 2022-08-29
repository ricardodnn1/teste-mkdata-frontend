import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  form!: FormGroup;

  legalPerson: boolean = false
  
  contactInputs: any = [{}]; 

  get customer(): FormGroup {
    return this.form.controls['customer'] as FormGroup
  }

  get contacts(): FormArray {
    return this.form.controls['contacts'] as FormArray
  }

  constructor(private fb: FormBuilder) {
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

}
