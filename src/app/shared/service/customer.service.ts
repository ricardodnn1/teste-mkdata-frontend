import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { CustomerModel } from "../model/customer.model"

@Injectable({ providedIn: 'root' })
export class CustomerService {

    api = "https://mkdata-customers-api.herokuapp.com/api/customers/"

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
    }

    constructor(private httpClient: HttpClient) {}

    public getCustomers() : Observable<any> {
        return this.httpClient.get(this.api + 'list')
    }

    public deleteCustomer(id: number) {
        return this.httpClient.get(this.api + 'delete/' + id)
    }

    public addCustomer(customer: CustomerModel) : Observable<any> {
        return this.httpClient.post(this.api + 'save', customer)
    }

    public updateCustomer(customer: CustomerModel) : Observable<any> {
        return this.httpClient.put(this.api + 'update', customer)
    }
    

}