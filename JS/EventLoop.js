//Stack

function food(b)
{
    const a = 10;
    return a+b+11;
}

function bar(x)
{
    const y=3;
    return food(x * y);
}

const baz  = bar(7);
console.log(baz);

// Because first bar executed and after food executed.








function LevelTwo() {
    console.log("Inside Level Two!")
 }
   
 function LevelOne() {
    LevelTwo()
 }
   
 function main() {
    LevelOne()
 }
   
 main()










 //EventLoop : [setTimeout is event] [work as multithread illusion]
 // An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.


    console.log(1);
    setTimeout(function callback(){
        console.log(2);
    },0);
    console.log(3);







    const fun2 = () => {
        setTimeout( () => {
            console.log("Function2 is starting");
        },300);
    }

    const fun1 = () => {
        console.log("Function1 is starting");
        fun2();
        console.log("Function1 is Ending");
    }

    fun1();

















