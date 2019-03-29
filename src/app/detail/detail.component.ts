import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PATH_DETAIL, PATH_HOME} from '../app.routes.constantes';


import User from '../model/user'

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	user:User;

	constructor(private route:ActivatedRoute, private router: Router) { }

	navigateToHome(){
		this.router.navigate([PATH_HOME]);
	}

	ngOnInit() {
		console.log("init");
		this.route.data.subscribe((data) => {this.user = new User(data['user'].id,
								  data['user'].login, 
								  data['user'].type, 
								  data['user'].company, 
								  data['user'].bio, 
								  data['user'].location, 
								  new URL(data['user'].avatar_url))},
		(err) => this.navigateToHome())
		console.log(this.user);
	}

}
