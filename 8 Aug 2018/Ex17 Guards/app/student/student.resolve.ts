import { Observable } from 'rxjs';
import { Router,Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { StudentService } from './student.service';
import { Student } from './student';
export class StudentListResolver implements Resolve<Student[]> {
    constructor(private cs: StudentService, private router: Router) {}
   
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Student[]> {
      
      return this.cs.getStudents();
      
    }
  }