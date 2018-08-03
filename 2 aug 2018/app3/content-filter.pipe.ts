import {Pipe, PipeTransform} from '@angular/core';
import {Student} from './student';

@Pipe({name: 'contentFilter'})
export class ContentFilterPipe implements PipeTransform {
  transform(value: Student[], searchFor: string) : Student[] {
    if (!searchFor) return value;
    return value.filter(student => {
     
      var result = (student.id+"" == (searchFor))
      console.log(result);
      if(result)
        return result;
      else
      return  student.name.indexOf(searchFor) >= 0
    
    }
    );
  }
}
