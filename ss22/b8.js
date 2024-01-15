let a = +prompt('số thứ nhất')
let b = +prompt('số thứ hai')
if (!isNaN(a)&&!isNaN(b)) {
    var phepToan = prompt('nhập phép toán:')
    switch(phepToan){
        case  '+' :
            console.log(a+b);
            break;
        case  '-':
            console.log(a-b);
            break;
        case  '*':
            console.log(a*b);
            break;
        case '/':
            console.log(a/b);
            break;
            default: 
            console.log('nhập các phép + - * /');
        }
}else{
    console.log('không hợp lệ.vui lòng nhập lại phép toán.')
}