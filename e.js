const mua = false;

if (mua) {
    console.log('Nghi hoc');
} else {
    console.log('Di hoc');
}

const maMonHoc = 1;

switch (maMonHoc) {
    case 1:
        console.log('NodeJS')
        break;
    case 2:
        console.log('ReactJS');
        break;
    case 3: 
        console.log('React Native');
        break;
    default:
        console.log('PHP');
        break;
}
