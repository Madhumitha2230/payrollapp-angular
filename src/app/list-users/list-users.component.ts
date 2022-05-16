import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private http: HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  users!:any;
  getAllUsers()
  {
    const url="http://localhost:8080/users/list";
    this.http.get(url).subscribe((res)=>{
      this.users=res;
  },
  err=>{
    console.log(err);
    this.toastr.error('cannot get details');
  })
  }

}
