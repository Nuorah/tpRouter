import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PATH_DETAIL, PATH_HOME} from '../app.routes.constantes';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	login:string = '';

	constructor(private router: Router) { }

	changeValue(event){
		this.login = event.target.value;
	}


	navigateToDetail() {
		this.router.navigate([PATH_DETAIL, this.login]);
	}

	ngOnInit() {
	}

}
