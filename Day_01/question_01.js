(function(){
    var a=b=3;
})();

console.log(typeof a);
console.log(typeof b);

/*Explanation
 
function(){
    b=3    ____________________b becomes as global scope
    var a=b____________________a becomes as local varaiable of function
}
 so b as a number and a cant access the outside of function so it has undefined
 */