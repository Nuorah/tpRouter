export default class User{
	id:number;
	login:string;
	type:string;
	company:string;
	bio:string;
	location:string;
	avatar:URL;

	constructor(id:number, login:string, type:string, company:string, bio:string, location:string, avatar:URL){
		this.id = id;
		this.login = login;
		this.type = type;
		this.company = company;
		this.bio = bio;
		this.location = location;
		this.avatar = avatar;
	}
}