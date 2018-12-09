import { Pipe, PipeTransform } from '@angular/core';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { pureArrayDef } from '@angular/core/src/view';

@Pipe({
    name: 'keys',
    pure: false //--> atributo para que el pipe no genere error al borrar un elemento
})
export class KeysPipe implements PipeTransform
{

    transform(value: any): any
    {
        let keys = [];
        for (let key in value)
        {
            keys.push(key);
        }
        return keys;
    }

}
