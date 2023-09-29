// function declaration willbe Hoisted
test();

function test(){
    console.log("test function called");
}

// function expression will not be Hoisted

practice();

var practice = function(){
    console.log("Expression function not hoisted");
}