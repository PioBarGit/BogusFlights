import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {
  flight = {
    departure: {code: 'AAA', city:'chicago', country: '', region: ''},
    arrival: {code: 'AAA', city:'toronto', country: '', region: ''},
    distance: 'local',
    date: '',
    class: '',
    tickets: 1,
    seats: Array(),
    luggage: {cabin: false, checkInSmall: false, checkInBig: false,},
    additions: {priority: false, VIP: false, instantCheckIn: false,},
  }

  calculateDistance(){
    if(this.flight.departure.region === this.flight.arrival.region){
      if(this.flight.departure.country === this.flight.arrival.country){
        this.flight.distance = 'local'
        return
      }
      this.flight.distance = 'long'
      return
    }
    this.flight.distance = 'continental'
  }

  constructor() { }
}