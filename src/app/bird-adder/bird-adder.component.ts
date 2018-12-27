import { Component, OnInit } from '@angular/core';
declare var firebase: any;

@Component({
  selector: 'app-bird-adder',
  templateUrl: './bird-adder.component.html',
  styleUrls: ['./bird-adder.component.css']
})
export class BirdAdderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	fbPostData(name, color){
		firebase.database().ref('/birds').push({name: name, color: color})
	}

}
