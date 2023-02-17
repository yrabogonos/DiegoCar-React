onmessage = function(e){
    console.log(e.data)
    let op = e.data[0];
    let num1 = e.data[1];
    let num2 = e.data[2];
    switch (op) {
        case '+':
            postMessage(num1+num2);
            break;
        case '-':
            postMessage(num1-num2);
            break;
        case '*':
            postMessage(num1*num2);
            break;
        case '/':
            postMessage(num1/num2);
            break;

    }
}