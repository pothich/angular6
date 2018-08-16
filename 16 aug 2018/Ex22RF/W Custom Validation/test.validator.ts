import { FormControl } from '@angular/forms';
export class Test{
    static m1(control:FormControl){
        var value = control.value;
        var expression = /^[a-zA-Z0-9]{*}$/;
        var valid=    expression.test(value);

        return valid?null:{"alphanumeric":true};
    }
}