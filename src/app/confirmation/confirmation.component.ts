import { Component, OnInit } from '@angular/core';
import arr from '../array';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  name=arr[0];
 surname=arr[1];
 idnumber=arr[2];
 email=arr[3];
 phonenumber=arr[4];
 streetname=arr[5];
 number=arr[6];
 city=arr[7];
 




}
