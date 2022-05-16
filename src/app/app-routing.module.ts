import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { AuthGuard } from './auth.guard';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'update-users/:id',component:UpdateUsersComponent},
  {path:'list-users',component:ListUsersComponent},
  {path:'view-users',component:ViewUserComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'add-salary',component:AddSalaryComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
