import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})

export class ReversePipe implements PipeTransform {
    transform(value: string) {

        var newString = "";

        var n = value.length;

        for(var i=0;i<value.length;i++){
            newString+=value[n-(i+1)];
        }

        return newString;
    }
}