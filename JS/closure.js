let x= 1;

const parentfun = () => {
    let myval = 2;
    console.log(x+1);
    console.log(myval+1);

    const childfun = () => {
        console.log(x+=2);
        console.log(myval+=2)
    }
    return childfun;
}

const res = parentfun();
console.log(res);

res();