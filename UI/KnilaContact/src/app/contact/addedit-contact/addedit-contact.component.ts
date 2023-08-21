import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-addedit-contact',
  templateUrl: './addedit-contact.component.html',
  styleUrls: ['./addedit-contact.component.css']
})
export class AddeditContactComponent implements OnInit {

  constructor(public service:SharedService) { }

  ngOnInit(): void {
  }

}
