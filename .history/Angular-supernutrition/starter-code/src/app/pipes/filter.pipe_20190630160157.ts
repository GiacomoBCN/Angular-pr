import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
  const resultadoFoods=[];
for(const food of value ){
  if(food.name.indexOf(a))
}

  }

}
