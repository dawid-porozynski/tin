class Auto {
    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
      
    }
    increasePrice() {
        this.cena_wyjsciowa += 10000;
    }

    lowerPrice() {
        this.cena_koncowa = this.cena_wyjsciowa - ((new Date().getFullYear() - this.rok) * 1000);
        this.cena_koncowa -= (Math.floor(this.przebieg / 1000000)) * 1000;
    }
    reduceFinalPriceByMileage() {
        const reduction = Math.floor(this.przebieg / 100000) * 10000;
        this.cena_koncowa -= reduction;
    }
    setMileageAndYear(przebieg, rok) {
        this.przebieg = przebieg;
        this.rok = rok;
        this.lowerPrice();
        this.reduceFinalPriceByMileage();
    }

    increaseYear(){
        this.rok+=1;
    }
}

let tablicaSamochodow = [];

function dopiszAuto(auto) {
    if (auto.cena_koncowa > 10000) {
        tablicaSamochodow.push(auto);
    }
}

function increaseYearForAllCars(tablicaSamochodow) {
    for (let i = 0; i < tablicaSamochodow.length; i++) {
        tablicaSamochodow[i].increaseYear();
    }
}

let samochod = new Auto(2012, 120000, 30000, 25000);

dopiszAuto(samochod);
console.log("Rok samochodu:",samochod.rok,",przebieg: ",samochod.przebieg,", cena wyjsciowa: ",samochod.cena_wyjsciowa,", cena koncowa: ",samochod.cena_koncowa);

samochod.increasePrice();
console.log("Nowa cena wyjściowa:", samochod.cena_wyjsciowa);


samochod.setMileageAndYear(150000, 2013);
console.log("Nowa cena końcowa po zmniejszeniu wg. przebiegu:", samochod.cena_koncowa);

console.log("rok poprzdnio:",samochod.rok);

increaseYearForAllCars(tablicaSamochodow);
console.log("rok teraz",samochod.rok);
//////////////////////////////////////////////12//////////////////////////////////////////////

class Ocena {
    constructor(nazwaPrzedmiotu, wartosc) {
        this.nazwaPrzedmiotu = nazwaPrzedmiotu;
        this.wartosc = wartosc;
    }
}

class Student {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.listaOcen = [];
        this.sredniaOcen = 0;
    }

    printStudent() {
        return `${this.imie} ${this.nazwisko}, średnia ocen to: ${this.sredniaOcen.toFixed()}.`;
    }

    dodajOcene(ocena) {
        if (ocena instanceof Ocena) {
            this.listaOcen.push(ocena);
            this.przeliczSredniaOcen();
        } else {
            console.log("Podana wartość nie jest obiektem klasy Ocena.");
        }
    }

    przeliczSredniaOcen() {
        let sumaOcen = 0;
        this.listaOcen.forEach(ocena => {
            sumaOcen += ocena.wartosc;
        });
        this.sredniaOcen = sumaOcen / this.listaOcen.length || 0;
    }

    set oceny(noweOceny) {
        this.listaOcen = noweOceny;
        this.przeliczSredniaOcen();
    }

    get oceny() {
        let tekst = '';
        this.listaOcen.forEach(ocena => {
            tekst += `Przedmiot: ${ocena.nazwaPrzedmiotu} - ocena ${ocena.wartosc}. `;
        });
        return tekst;
    }
}

let s = new Student('Jan', 'Kowalski');

let ocena1 = new Ocena('MPR', 4);
let ocena2 = new Ocena('TIN', 3);
let ocena3 = new Ocena('MAD', 2);

s.dodajOcene(ocena1);
s.dodajOcene(ocena2);
s.dodajOcene(ocena3);

console.log(s.oceny); 
console.log(s.printStudent()); 
