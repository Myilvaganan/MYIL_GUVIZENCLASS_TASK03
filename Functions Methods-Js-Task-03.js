// 1  - Get all the countries from Asia continent /region using Filter function


var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function (){
    var data= JSON.parse(this.response);
    var asianCountries= data.filter((item)=> item.region ==="Asia");
    console.log(asianCountries);
}

//  2  - Get all the countries with population of less than 2 lacs using Filter function

var request1 = new XMLHttpRequest();
request1.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request1.send();
request1.onload = function (){
    var data= JSON.parse(this.response);
    var countriesWithLessThan2LakhPopulation= data.filter((item)=> item.population < 200000);
    console.log(countriesWithLessThan2LakhPopulation);
}

//  3  - Print the following details name, capital, flag using forEach function

var request2 = new XMLHttpRequest();
request2.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request2.send();
request2.onload = function (){
    var data= JSON.parse(this.response);
    	data.forEach((item)=> {
      	console.log(item.name, item.capital, item.flag);
    });
}

// 4  - Print the total population of countries using reduce function 

var request3 = new XMLHttpRequest();
request3.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request3.send();
request3.onload = function (){
    var data= JSON.parse(this.response);
    var totalPopulation= data.reduce((accumulator,item)=> {
      	return accumulator+item.population
    },0);
  console.log(totalPopulation)
}


// 5  - Print the country which use US Dollars as currency.

var request4 = new XMLHttpRequest();
request4.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request4.send();
request4.onload = function (){
    var data= JSON.parse(this.response);
    var dollarAsCurrencyCountries= data.filter((item)=> {
      	return item.currencies[0]['symbol'] ==="$";
    });
    console.log(dollarAsCurrencyCountries);
}


//************************************************************TASK-03 COMPLETED**********************************************************






































