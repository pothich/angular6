import { UserRegisterComponent } from './components/user.register.component';
import { UserLoginComponent } from './components/user.login.component';
import { DashboardComponent } from '../dashboard/components/dashboard.component';
export const routes=[
    {path:"login",component:UserLoginComponent},
    {path:"",component:UserRegisterComponent},
    {path:"register",component:UserRegisterComponent},
    {path:"dashboard",component:DashboardComponent}
];