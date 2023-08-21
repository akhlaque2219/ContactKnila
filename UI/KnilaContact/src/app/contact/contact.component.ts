import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service:SharedService){}

  ContactList:any=[];

  //cont :any;
  
  ngOnInit():void{
    this.refreshContactList();
  }

  refreshContactList(){
    this.service.getContactList().subscribe(data=>{
      this.ContactList=data;
    })
  }

}
