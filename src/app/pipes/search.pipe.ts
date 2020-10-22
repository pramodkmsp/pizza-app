import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    if (value && args && args.length > 0 && args[0]) {
      return value.filter(order => {
        return order.customerName.toLowerCase().includes(args[0].toLowerCase())
        || order.address.toLowerCase().includes(args[0].toLowerCase()) ? order : '';
      });
    }
    return value;
  }
}
