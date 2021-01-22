import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  

  constructor(private userService:UserService,
              private httpClient: HttpClient,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.httpClient.get("assets/mockUserDBData.json")
      .subscribe (
        result =>{
          for(let i = 0; i< result["users"].length; i++) {
            if (result["users"][i]["username"] == this.loginForm.controls.username.value && result["users"][i]["password"] == this.loginForm.controls.password.value ) {
              var activeUser = {username: result["users"][i]["username"], admin: result["users"][i]["admin"] } as User;
              this.userService.setCurrentUser(activeUser)
              this.router.navigate(["/dashboard"])
            }
          }
        }) 
  }

}
