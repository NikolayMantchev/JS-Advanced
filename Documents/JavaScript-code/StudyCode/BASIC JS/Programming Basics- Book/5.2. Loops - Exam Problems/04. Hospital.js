function solve (args) {
    period = Number (args[0]);
    let doctors = 7;
    let treatetPatient = 0;
    let notTreatetPatient = 0;

    for (let day = 1;  day <= period; day++){
        let curentPatient = Number (args[day]);
        if ((day % 3 === 0) && (notTreatetPatient > treatetPatient)) { // Всеки 3/ти ден се увеличава с 1 доктор 
            doctors++;
        } 
        if (curentPatient > doctors){
            treatetPatient += doctors;
            notTreatetPatient += curentPatient - doctors;
        } else {
            treatetPatient += curentPatient;
        }
    }
    console.log(`Treated patients: ${treatetPatient}.`);
    console.log(`Untreated patients: ${notTreatetPatient}.`);

}
solve ([3, 7, 7, 7]);


/*Всеки трети ден болницата прави изчисления и ако броят на непрегледаните пациенти е по-голям от 
броя на прегледаните, се назначава още един лекар. Като назначаването става преди да започне 
приемът на пациенти за деня.
За даден период от време, всеки ден в болницата пристигат пациенти за преглед. 
Тя разполага първоначално със 7 лекари. Всеки лекар може да преглежда само по един пациент на ден, 
но понякога има недостиг на лекари, затова останалите пациенти се изпращат в други болници. 


Напишете програма, която изчислява за дадения период броя на прегледаните и непрегледаните пациенти. */