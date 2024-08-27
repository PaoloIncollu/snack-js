/*
    Dare la possibilità di inserire due parole.
    Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
    Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
*/

const first = prompt('Inserisci prima parola');
const second = prompt('Inserisci seconda parola');

if(first.length == second.length)
{

    console.log ('Le parole inserite hanno la stessa lunghezza ','Prima parola:' + first , 'Seconda parola:' + second);
}

else if (first.length > second.length){

    console.log('La prima parola è più lunga :' + first);
}

else {

    console.log('La seconda parola è più lunga:' + second);
}