function celsiusToFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(12));

let celsius = celsiusToFahrenheit(0);

console.log(celsiusToFahrenheit(100));

console.log(celsius);


function sommeTroisNombres(a, b, c) {
    return a + b + c;
  }
  console.log(sommeTroisNombres(5, 10, 15));


function heuresEnSecondes(heures) {
    return heures * 3600;
  }
  console.log(heuresEnSecondes(2));


function peutVoter(age, nationalite) {
    if (age >= 18 && nationalite == "française"){
        return "Éligible";
        
    }else {
        return "Non éligible";
        
    }
  }
  console.log(peutVoter(20, "française"));
  console.log(peutVoter(16, "française"));
  console.log(peutVoter(20, "espagnole"));


function tarif(age) {
    if (age < 5) {
        return "Gratuit";
        
    }else if (age >= 5 && age <= 18) {
        return "Réduit"
    }else if (age > 18) {
        return "Plein tarif"
    }
  }
  console.log(tarif(3));
  console.log(tarif(15));
  console.log(tarif(25));