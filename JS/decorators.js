//Decorators.



// const add = (a,b) => {
//     console.log(a+b);
// }
// add(3,5);






//simply by calling on one function to wrap another:

function doSomething(name){
    console.log('Hello' +  name);
}

function loggingDecorator(abc){
    return function(){
        console.log('Starting');
        const res = abc.apply(this,arguments);
        console.log('finished')
    }
}

const wrapped = loggingDecorator(doSomething);  //here we wrap doSomething function into LoggingDecorator.


doSomething('Priyanka');
wrapped('Akshay');



