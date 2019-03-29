import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { PATH_HOME, PATH_DETAIL } from './app.routes.constantes';
import { UserResolver } from './services/user.resolver'

export const ROUTES: Routes = [ 
{ path: PATH_HOME, component: HomeComponent }, 
{ path: PATH_DETAIL + "/:login", component: DetailComponent,
	resolve:{
		user: UserResolver
	} 
}
];