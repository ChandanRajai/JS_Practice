console.log(!!10+20);

/*
!!10 is evaluated first. The double negation !! is a shorthand way of converting a value to a boolean. In this case, !10 is a truthy value return !1 , so !1 evaluates to true means 1.
The expression becomes 1 + 20. In JavaScript, when you use the + operator with a boolean and a number, the boolean is converted to a number first. true is converted to 1, so the expression becomes 1 + 20.
The final result is 21.
Therefore, console.log(!!10+20) will log 21 to the console. 
 */