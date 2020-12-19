import {Pipe, PipeTransform} from '@angular/core';
import {stringify} from 'querystring';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string, keyword: string): unknown {
    // 如果没传过滤字段和关键字
    if (!filterField || !keyword) {
      return list;
    }
    return list.filter(value => {
      const fieldValue = value[filterField] as string;
      return fieldValue.indexOf(keyword) > 0;
    });
  }

}
