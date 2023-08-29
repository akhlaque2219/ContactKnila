import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  @Input() cont: any;
  ContactId = "";
  FirstName = "";
  LastName = "";
  PhoneNumber = "";
  Address = "";
  City = "";
  State = "";
  Country = "";
  PostalCode = "";

  ngOnInit(): void {

    this.ContactId = this.cont.Id;
    this.FirstName = this.cont.FirstName;
    this.LastName = this.cont.LastName;
    this.PhoneNumber = this.cont.PhoneNumber;
    this.Address = this.cont.Address;
    this.City = this.cont.City;
    this.State = this.cont.State;
    this.Country = this.cont.Country;
    this.PostalCode = this.cont.PostalCode;
  }

  addContact() {
    var cont = {
      Id: this.ContactId,
      FirstName: this.FirstName,
      LastName: this.LastName,
      PhoneNumber: this.PhoneNumber,
      Address: this.Address,
      City: this.City,
      State: this.State,
      Country: this.Country,
      PostalCode: this.PostalCode
    };
    this.service.addContact(cont).subscribe(res => {
      alert(res.toString());
    });
  }

  updateContact() {
    var cont = {
      Id: this.ContactId,
      FirstName: this.FirstName,
      LastName: this.LastName,
      PhoneNumber: this.PhoneNumber,
      Address: this.Address,
      City: this.City,
      State: this.State,
      Country: this.Country,
      PostalCode: this.PostalCode
    };
    this.service.updateContact(cont.Id,cont).subscribe(res => {
      alert(res.toString());
    });
  }

}
