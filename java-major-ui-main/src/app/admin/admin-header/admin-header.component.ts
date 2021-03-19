import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdminService } from 'src/app/admin.service';


@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  users: any="";
  len!: Observable<any>;
  len1!: number;

  constructor(private as: AdminService, private router: Router) {

    this.as.updateCartSizeData()
    this.as.lenupdate.subscribe((data: any)=>{
      this.len=data
      this.len1=data
      console.log(this.len+"<<<<<<<<<"+this.len1);
      
    })



   }
   
 

  ngOnInit(): void {
    this.as.getLockedUsers().subscribe((data: any) => {
      this.users = data;
      //console.log(this.users.length);
      this.len=this.users.length

   
    
    },
      (err: any) => {
        console.log('Error is:', err);

      })

  }

 

  


 




}