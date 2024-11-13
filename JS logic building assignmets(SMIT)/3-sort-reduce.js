//                    Assignment
// We sppose products of array is as 
let products = [
  {
    id: 101,
    title: "Sony LED 40 inch 101",
    quantity: 5,
    price: 35000,
    status: true,
    colors: ["red", "black", "green"]
  },
  {
    id: 102,
    title: "Sony LED 43 inch 102",
    quantity: 3,
    price: 40000,
    status: false,
    colors: ["red"]
  },
  {
    id: 103,
    title: "Sony LED 51 inch 103",
    quantity: 2,
    price: 45000,
    status: true,
    colors: ["red", "black"]
  },
  {
    id: 104,
    title: "Sony LED 55 inch 101",
    quantity: 5,
    price: 50003,
    status: true,
    colors: ["red", "black", "green"]
  },
  {
    id: 105,
    title: "Sony LED 27 inch 102",
    quantity: 3,
    price: 50000,
    status: false,
    colors: ["red"]
  },
  {
    id: 106,
    title: "Sony LED 40 inch 103",
    quantity: 2,
    price: 35001,
    status: true,
    colors: ["red", "black"]
  }
]

// 1- Add 16% tax on each product price and then offer 10% discount on price.
// products.map((m)=> console.log((m.price*16)/m.price)
// products.map((m)=>{
//   let a = (m.price*16)/100;
//   let total = a + m.price;
//   let dic = (total*10)/100;
//   let dicFinal = total - dic
//   let ans = `actual:${m.price} add tax:${total} offer 10%:${dicFinal}`
//   console.log(ans);
  
  
  
// })


// 2- Show all the LED whose price is in the range of 30K to 40K.
// let ans = products.filter((p)=> p.price >= 30000 && p.price <=40000)
// console.log(ans);



// 3- Find the sum of all products whose price is odd number using reduce function. 

// let ans = products.filter((p)=> p.price %3===0).reduce((acc, cur)=> acc+cur.price, 0)
// console.log(ans);


