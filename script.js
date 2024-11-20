const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let price = document.querySelectorAll('.price');
  let priceArray = [];
  
  price.forEach((price1) => {
      priceArray.push(Number(price1.innerHTML));
  });
  console.log(priceArray)

 let ans= priceArray.reduce((totalsum,item)=>{
return totalsum+item
  },0)

console.log(ans) 

let newrow=document.createElement('tr');
let newcell=document.createElement('td')
newcell.innerHTML=`${ans}`

let table=document.querySelector('table')
table.appendChild(newrow)
newrow.appendChild(newcell)
  
};

getSumBtn.addEventListener("click", getSum);

