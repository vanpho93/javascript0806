const dong = 9;

for(let i = 1; i <= dong; i++) {
    let str = '';
    for(let j = 1; j <= dong; j++) {
        if (j < dong - i + 1) {
            str += ' ';
        } else{
            str += j - dong + i;        
        }
    }
    console.log(str);
}
