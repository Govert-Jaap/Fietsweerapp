import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Rit } from '../rit'

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
    startPunt: new FormControl(''),
    eindPunt: new FormControl(''),
    afstand: new FormControl(''),
    datum: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    var nieuweRit = {startAdres: this.ritForm.controls.startPunt.value, eindAdres: this.ritForm.controls.eindPunt.value, afstand: this.ritForm.controls.afstand.value, datum: this.ritForm.controls.datum.value} as Rit
    this.alleRitten.push(nieuweRit);
    this.checkLaatsteVijfRitten();
  }

  checkLaatsteVijfRitten() {
    var laatsteRit = this.alleRitten[this.alleRitten.length - 1]
    this.laatsteVijfRitten.unshift(laatsteRit)
    if (this.laatsteVijfRitten.length > 5) {
      this.laatsteVijfRitten.pop()
    }

  }
}
