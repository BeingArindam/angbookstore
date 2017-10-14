import { Pipe, PipeTransform } from '@angular/core';
import { Ibook } from '../booklist/ibook'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Ibook[], searchText: string): any[] {
    if(!searchText || !items){
      return items;
    }
    return items.filter(t => {
      console.log(searchText+"  - "+t);
      searchText = searchText.toLocaleLowerCase();
      return t.name.toLowerCase().includes(searchText);
    })
  }

}
