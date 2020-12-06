import { RouterModule, Routes} from '@angular/router'
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard} from './auth.guard';
import { ForgotPasswordComponent} from './forgot-password/forgot-password.component'

const routes:Routes=[
    {
       path:'user',
       children:[
           {
               path:'register',
               component:SignUpComponent
           },
           {
                path:'login',
                component:SignInComponent
           },
           {
               path:'dashboard',
               component:DashboardComponent, canActivate:[AuthGuard]
           },
           {
               path:'fogot-password',
               component:ForgotPasswordComponent
           }
       ] 
    }

]

export const UserRoutingMoldule = RouterModule.forChild(routes);