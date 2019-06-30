import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

transform(value: any, arg: any): any {
  if(arg.length<3)
  const resultadoFoods=[];
for(const food of value ){
  if(food.name.toLowerCase().indexOf(arg.toLowerCase())> -1){
   //console.log('mmm funziona?')
resultadoFoods.push(food);
  };
};
return resultadoFoods;
  }

}
