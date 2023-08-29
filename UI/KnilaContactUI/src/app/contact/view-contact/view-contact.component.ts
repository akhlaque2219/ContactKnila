import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  ContactList: any = [];
  ModalTitle = "";
  ActivateAddEditContactComp: boolean = false;
  cont: any;

  ContactIdFilter = "";
  FirstNameFilter = "";
  ContactListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshContactList();
  }

  addClick() {
    this.cont = {
      Id: "0",
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      Address: "",
      City: "",
      State: "",
      Country: "",
      PostalCode: "",
    }
    this.ModalTitle = "Add Contact";
    this.ActivateAddEditContactComp = true;
  }

  editClick(item: any) {
    this.cont = item;
    this.ModalTitle = "Edit Contact";
    this.ActivateAddEditContactComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteContact(item.Id).subscribe(data => {
        alert(data.toString());
        this.refreshContactList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditContactComp = false;
    this.refreshContactList();
  }


  refreshContactList() {
    this.service.getContactList().subscribe(data => {
      this.ContactList = data;
      this.ContactListWithoutFilter = data;
    });
  }

  sortResult(prop: any, asc: any) {
    this.ContactList = this.ContactListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      }
      else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

  FilterFn() {
    var IdFilter = this.ContactIdFilter;
    var FirstNameFilter = this.FirstNameFilter;

    this.ContactList = this.ContactListWithoutFilter.filter(
      function (el: any) {
        return el.Id.toString().toLowerCase().includes(
          IdFilter.toString().trim().toLowerCase()
        ) &&
          el.FirstName.toString().toLowerCase().includes(
            FirstNameFilter.toString().trim().toLowerCase())
      }
    );
  }

}
