import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name!:String;
  email!:String;
  password!:String;
  dob!:Date;
  designation!:String;
  dateOfJoining!:Date;
  dateOfReleiving!:Date;

  constructor(private http:HttpClient,private toastr:ToastrService) { }
  
  ngOnInit(): void {
  }
  register(){
    const userObj={
      "name":this.name,
      "email":this.email,
      "password":this.password,
      "dob":this.dob,
      "designation":this.designation,
      "dateOfJoining":this.dateOfJoining

    };
    
    const url="http://localhost:8080/users/save";
    this.http.post(url,userObj).subscribe((res:any)=>{
      console.log(res);
     
        this.toastr.success('successfully registered');
      
      
    },(err:any)=>{
      console.log(err);
     this.toastr.error('please re-enter your details');
    })
    
  }

}
