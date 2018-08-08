import { SecurityGuard } from './security.guard';
import { CanActivate } from '@angular/router';
import { ErrorComponent } from './error.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
export const routes = [
    {path:'contact',component:ContactComponent},    
    {path:'home',component:HomeComponent,canActivate:[SecurityGuard]},
    {path:'about',component:AboutComponent},    
    {path:'',component:HomeComponent},
    {path:'*',component:ErrorComponent},
]