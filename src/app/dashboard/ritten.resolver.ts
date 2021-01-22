import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class RittenResolver implements Resolve<Object> {
  constructor(private httpClient: HttpClient, private userService: UserService ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let data = this.httpClient.get("assets/mockRitDBData.json").pipe(
      map(result => (result)));
    return data
    
  }
}
