import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import User from '../model/user'

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	user:User;

	constructor(private route:ActivatedRoute) { }

	ngOnInit() {
		console.log("init");
		this.route.data.subscribe(data => this.user = new User(data['user'].id,
								  data['user'].login, 
								  data['user'].type, 
								  data['user'].company, 
								  data['user'].bio, 
								  data['user'].location, 
								  new URL(data['user'].avatar_url))
			);
		console.log(this.user);
	}

}
