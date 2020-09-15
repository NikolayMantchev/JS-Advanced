function solve(input) {
    let groups = Number(input.shift());
    
    let musala = 0;
    let montblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    for (let i = 0; i <= groups; i++) {
        let curentPeople = Number (input[i])
        if (curentPeople <= 5) {
            musala += curentPeople
        } else if (curentPeople > 5 && curentPeople <= 12) {
            montblan += curentPeople
        } else if (curentPeople > 12 && curentPeople <= 25) {
            kilimandjaro += curentPeople
        } else if (curentPeople > 25 && curentPeople <= 40) {
            k2 += curentPeople
        }  else if (curentPeople > 40) {
            everest += curentPeople;
        }
        
    }
    let totalcurentPeople = musala + montblan + kilimandjaro + k2 + everest;
    console.log(`${(musala / totalcurentPeople * 100).toFixed(2)}%`);
    console.log(`${(montblan / totalcurentPeople *100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / totalcurentPeople *100).toFixed(2)}%`);
    console.log(`${(k2 / totalcurentPeople *100).toFixed(2)}%`);
    console.log(`${(everest / totalcurentPeople *100).toFixed(2)}%`);
}
    solve(
        [
            '10', '10', '5',
            '1', '100', '12',
            '26', '17', '37',
            '40', '78'
        ]
    );
