import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Rit } from '../rit'
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  alleRitten: Rit[] = [];
  laatsteVijfRitten: Rit[] = []
  date: Date = new Date();

  ritForm = new FormGroup({
    startPunt: new FormControl('', Validators.required),
    eindPunt: new FormControl('', Validators.required),
    afstand: new FormControl('', Validators.required),
    datum: new FormControl('', Validators.required)
  })

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    var ritten = this.activatedRoute.snapshot.data["ritten"]
    var activeUser = this.userService.getCurrentUser();
    for(let i = 0; i < ritten["ritten"].length; i++) {
      if(ritten["ritten"][i]["gebruiker"]["username"] == activeUser.username) {
        this.alleRitten.push(ritten["ritten"][i]);
      }
    } 
  }

  ngOnInit(): void {
    this.checkLaatsteVijfRitten();
  }

  onSubmit() {
    var nieuweRit = {startAdres: this.ritForm.controls.startPunt.value, eindAdres: this.ritForm.controls.eindPunt.value, afstand: this.ritForm.controls.afstand.value, datum: this.ritForm.controls.datum.value} as Rit
    this.alleRitten.push(nieuweRit);
    this.checkLaatsteVijfRitten();
  }

  checkLaatsteVijfRitten() {
    var datumGesorteerdeRitten = this.alleRitten.sort( (a,b) => {return <any>new Date(b.datum) - <any>new Date(a.datum)})
    this.laatsteVijfRitten = datumGesorteerdeRitten.slice(0,5)
    
  }
}
