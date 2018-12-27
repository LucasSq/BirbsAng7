import { Component, OnInit } from '@angular/core';
import { BirdComponent } from '../bird/bird.component';

@Component({
  selector: 'app-bird-counter',
  templateUrl: './bird-counter.component.html',
  styleUrls: ['./bird-counter.component.css']
})
export class BirdCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() { 	
  }

}
