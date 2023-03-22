import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<string>, searchTerm: string): Array<string> {
    if (!items || !searchTerm) {
      return items;
    }
    return items.filter(
      item => item.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
