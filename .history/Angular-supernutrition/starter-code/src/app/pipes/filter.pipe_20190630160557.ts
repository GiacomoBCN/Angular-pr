import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
  const resultadoFoods=[];
for(const food of value ){
  if(food.name.indexOf(arg)> -1){
   //console.log('mmm funziona?')
resultadoFoods.push(food);
  };
};
return r
  }

}
