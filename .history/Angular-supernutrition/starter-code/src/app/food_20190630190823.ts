export class Food {
  [x: string]: any;

  name: string;
  calories: number;

  image: string;

  quantity: number;

}

//vediamo se funziona
addFood(item: any){
  console.log("sto cazzo");
  this.food.push({name: item}, {calories: item}, {image: "https://img.lovepik.com/element/40033/0375.png_860.png"}, {quantity: item});

  }
