
function trojkaPitagorejska(a,b,c){
	const aSquared = a**2;
	const bSquared = b**2;
	const cSquared = c**2;
	if(aSquared+bSquared==cSquared){
		return true;
	}
	else if(bSquared+aSquared==cSquared){
		return true;
	}
  else if(cSquared+aSquared==bSquared){
		return true;
	}
  else if(aSquared+cSquared==bSquared){
		return true;
	}
  else if(bSquared+cSquared==aSquared){
		return true;
	}
  else if(cSquared+bSquared==aSquared){
		return true;
	}
  else{
    return false;
  }
}

console.log(trojkaPitagorejska(12,5,13));

function przedzial(a, b, c) {
  for (let i = a; i <= b; i++) {
    if (i % c === 0) {
      console.log(i);
    }
  }
}
przedzial(1,10,2);

function tabliczka(bok) {
  for (let i = 1; i <= bok; i++) {
    let row = '';
    for (let j = 1; j <= bok; j++) {
      row += (i * j) + ' ';
    }
    console.log(row);
  }
}

tabliczka(4);

function fibonacci(dlugosc) {
  let a = 0, b = 1;
  console.log(a);
  
  for (let i = 1; i < dlugosc; i++) {
    console.log(b); 
    let temp = b;
    b = a + b;
    a = temp;
  }
}

fibonacci(10);

function choinka(wysokosc) {
  for (let i = 1; i <= wysokosc; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
}

choinka(4);
console.log("");
const range = (a, b) => [...Array(b - a + 1).keys()].map(num => num + a)
function choinkaNoc(x) {
  const drillInStars = (drillCnt, length) => {
      if (drillCnt === 0 || drillCnt === length) return "*".repeat(length)
      const emptySpace = " ".repeat(drillCnt);
      const cntOfAppend = (length - drillCnt) / 2
      return range(1, cntOfAppend).reduce((acc) => {
          return `*${acc}*`
      }, emptySpace)
  }

  const starsCnt = range(0, x * 2).filter(num => num % 2 === 1 || num === 0).splice(0, x)
  const width = starsCnt.slice(-1)[0]
  range(0, x - 1).forEach(num => {
      console.log(drillInStars(starsCnt[num], width))
  })
}
choinkaNoc(6);

function obliczPole(figura, ...parametry) {
  let pole;
  switch (figura) {
    case 'prostokat':
      pole = poleProstokata(...parametry);
      break;
    case 'trapez':
      pole = poleTrapezu(...parametry);
      break;
    case 'rownoleglobok':
      pole = poleRownolegloboka(...parametry);
      break;
    case 'trojkat':
      pole = poleTrojkata(...parametry);
      break;
    default:
      pole = 'Nieznana figura';
  }
  return pole;
}

function poleProstokata(a, b) {
  return a * b;
}

function poleTrapezu(a, b, h) {
  return ((a + b) / 2) * h;
}

function poleRownolegloboka(a, h) {
  return a * h;
}

function poleTrojkata(a, h) {
  return (a * h) / 2;
}

console.log(obliczPole('prostokat', 4, 6));
console.log(obliczPole('trapez', 3, 5, 4));
console.log(obliczPole('rownoleglobok', 4, 8));
console.log(obliczPole('trojkat', 5, 7));



const obliczPole_2 = {
prostokat: (a, b) => a * b,
trapez: (a, b, h) => ((a + b) * h) / 2,
rownoleglobok: (a, h) => a * h,
trojkat: (a, h) => (a * h) / 2,
};

function obliczPole2(nazwaFigury,...args) {
return obliczPole_2[nazwaFigury](...args);
}


console.log(obliczPole2("prostokat", 5, 10));
console.log(obliczPole2("trojkat", 4, 6));
console.log(obliczPole2("trapez", 3, 7, 5));
console.log(obliczPole2("rownoleglobok", 8, 12));


var MojaTablica = Array;

function wypiszTrojkatPascala(wysokosc) {
  function generujTrojkatPascala(wysokosc) {
      const trojkat = [];
      for (let i = 0; i < wysokosc; i++) {
          const wiersz = new MojaTablica(i + 1).fill(1);
          if (i >= 2) {
              for (let j = 1; j < i; j++) {
                  wiersz[j] = trojkat[i - 1][j - 1] + trojkat[i - 1][j];
              }
          }
          trojkat.push(wiersz);
      }
      return trojkat;
  }

  const trojkatPascala = generujTrojkatPascala(wysokosc);

  for (const wiersz of trojkatPascala) {
      console.log(wiersz.join(' ').padStart(wysokosc * 3 - wiersz.length,''));
  }
}

wypiszTrojkatPascala(8);

function cenzurujSlowa(niedozwolone, zdanie) {
const slowaZdania = zdanie.split(' ');

const zdanieCenzura = slowaZdania.map(slowo => {
    if (niedozwolone.includes(slowo.toLowerCase())) {
        return '*'.repeat(slowo.length);
    } else {
        return slowo;
    }
});

return zdanieCenzura.join(' ');
}


const niedozwoloneSlowa = ['jabłka', 'pomarańcze', 'gruszki'];
const zdanie = 'Lubię jabłka i gruszki ale nie pomarańcze';

const zdaniePoCenzurze = cenzurujSlowa(niedozwoloneSlowa, zdanie);
console.log(zdaniePoCenzurze);

