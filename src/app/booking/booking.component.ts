import { Component, OnInit } from '@angular/core';
import arr from '../array';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  confirm(name,surname,idnumber,email,phonenumber,streetname,number,city){
  arr[0]=name;
 arr[1]= surname;
  arr[2]=idnumber;
 arr[3]=email;
arr[4] = phonenumber;
  arr[5]=streetname;
 arr[6]= number;
 arr[7]=city;

  alert(arr);
  console.log(arr);
  }
}
