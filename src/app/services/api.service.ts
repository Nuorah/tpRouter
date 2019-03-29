import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class ApiService {

	get(login:string){
		return this.http.get(`https://api.github.com/users/${login}`);
	}

  constructor(private http:HttpClient) { }
}
