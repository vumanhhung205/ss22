let b = +prompt("nhập năm");
let a = +prompt("nhậptháng");
if (!isNaN(a) && a > 0&&!isNaN(b) && b > 0) {
    if (b % 400 == 0 || (b % 4 == 0 && b % 100 != 0)) {
        if(a==1||a==3||a==5||a==7||a==8||a==10||a==12){
            console.log('31 ngày')
        }else if(a==2){
            console.log('29 ngày')
        }else{
            console.log(' 30ngày')
        }
    } else {
        if(a==1||a==3||a==5||a==7||a==8||a==10||a==12){
            console.log('31 ngày')
        }else if(a==2){
            console.log('28 ngày')
        }else{
            console.log('30ngày')
        }
    }
} else {
    console.log("không hợp lệ.vui lòng nhập lại.");
}