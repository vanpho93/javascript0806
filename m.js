let dong = 5;
let cot = dong * 2 - 1;

for (let i = 1; i <= dong; i++) {
    let str = '';
    let num = 0;
    for (let j = 0; j <= cot; j++) {
        if (Math.abs(j - dong) < i) {
            str += ++num;
        } else {
            str += ' ';
        };
    }
    console.log(str);
}
