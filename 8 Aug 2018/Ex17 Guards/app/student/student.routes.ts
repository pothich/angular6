import { ProtectDataGuard } from './protectdata.guard';
import { StudentListResolver } from './student.resolve';
import { SecurityGuard } from './../security.guard';
import { CanActivate } from '@angular/router';
import { StudentListComponent } from './student-list.component';
import { StudentComponent } from './student.component';
export const routes = [
    {path:'student',component:StudentComponent,canDeactivate:[ProtectDataGuard]},    
    {path:'list',component:StudentListComponent,canActivate:[SecurityGuard]}
]