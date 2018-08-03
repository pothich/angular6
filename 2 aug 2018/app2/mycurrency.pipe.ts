import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mycurrency'
})

export class MyCurrencyPipe implements PipeTransform {
    transform(value: any, format:string = "Rs."): any {
        return format+value;
    }
}