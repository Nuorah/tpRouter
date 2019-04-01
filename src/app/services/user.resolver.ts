import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'

import User from '../model/user';
import ApiService from './api.service'

@Injectable({
	providedIn: 'root'
})
export class UserResolver implements Resolve<any> {

	

	constructor(private api:ApiService) { }


	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

		return this.api.get(route.paramMap.get('login')).pipe(catchError(() => of(new User(1, route.paramMap.get('login'), 'null', 'null', 'null', 'null', new URL('http://www.url.fr')))))
	}

	
}