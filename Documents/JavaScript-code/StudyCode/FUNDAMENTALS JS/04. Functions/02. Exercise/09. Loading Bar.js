function loadingBar(number) {
    if (number === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]')
    } else {
        console.log(persentBar(number));
        console.log('Still loading...')
    }
    function persentBar(num) {
        let digitPercent = `${num}` + '% ['
        let percentSimbol = '%'.repeat(num / 10);
        let rest = '.'.repeat(10 - (num / 10)) + ']';
        let toPrint = digitPercent+percentSimbol+rest;
        return toPrint;
    }
}
loadingBar(70)     