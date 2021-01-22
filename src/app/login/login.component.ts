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
          console.log(result); 
          for(let user in result["users"]) {
            console.log(user)
            console.log(user[0])
            console.log(user["password"])
            if (user["username"] == this.loginForm.controls.username.value && user["password"] == this.loginForm.controls.password.value ) {
              var activeUser: User;
              activeUser.username = user["username"];
              activeUser.admin = user["admin"];
              this.userService.setCurrentUser(activeUser)
              this.router.navigate["/dashboard"]
            }
          }
        }) 
  }

}
