function add(a,b,callback){
    return callback(a,b)
}

add(1,2,function(a,b){
    return a+b;
})


//The function which accepts the other function as an argument is called a higher-order function.