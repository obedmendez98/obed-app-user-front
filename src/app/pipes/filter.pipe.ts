import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(value: any, filterString:string) {
        if(!value) return ;
        if(value.length === 0 || filterString === ''){
            return value;
        }
        const users = []
        for ( const user of value){
            if(user['name'].toLowerCase().indexOf(filterString.toLowerCase()) === 0 || user['lastname'].toLowerCase().indexOf(filterString.toLowerCase()) === 0 || user['firstname'].toLowerCase().indexOf(filterString.toLowerCase()) === 0 ){
                users.push(user)
            }
        }
        return users
    }
}