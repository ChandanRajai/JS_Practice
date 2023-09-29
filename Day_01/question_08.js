let data = [3,1,7,12,23,45]

data.sort((a,b)=>a-b);// ascending order
console.log(`Ascending order:  ${data}`);


data.sort((a,b)=>b-a);// descending order
console.log(`Descending order:  ${data}`);