'use strict';

var firstAndPike = {
  storeName: '1st and Pike',
  storeId: 'firstAndPike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiePerCust: 6.3,
  numCustPerHour: function getRandomIntInclusive(min,max) {
    min = Math.ceil(this.minHourlyCustomers);
    max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  hoursOpen: ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
  hourlyCookieSales: [],
  // hourlyCookieTotal: function () {
  //   var totalSales = 0;
  //
  //   for (var j = 0; j < this.hourlyCookieSales.length; j++) {
  //     var diffVariable = totalSales + this.hourlyCookieSales[j];
  //     console.log(diffVariable);
  //   }
  // },
};

var seaTacAirport = {
  storeName: 'SeaTac Airport',
  storeId: 'seaTacAirport',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiePerCust: 1.2,
  numCustPerHour: function getRandomIntInclusive(min,max) {
    min = Math.ceil(this.minHourlyCustomers);
    max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  hoursOpen: ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
  hourlyCookieSales: [],
};

var seattleCenter = {
  storeName: 'Seattle Center',
  storeId: 'seattleCenter',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiePerCust: 3.7,
  numCustPerHour: function getRandomIntInclusive(min,max) {
    min = Math.ceil(this.minHourlyCustomers);
    max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  hoursOpen: ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
  hourlyCookieSales: [],
};

var capitolHill = {
  storeName: 'Capitol Hill',
  storeId: 'capitolHill',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiePerCust: 2.3,
  numCustPerHour: function getRandomIntInclusive(min,max) {
    min = Math.ceil(this.minHourlyCustomers);
    max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  hoursOpen: ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
  hourlyCookieSales: [],
};

var alki = {
  storeName: 'Alki',
  storeId: 'alki',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiePerCust: 4.6,
  numCustPerHour: function getRandomIntInclusive(min,max) {
    min = Math.ceil(this.minHourlyCustomers);
    max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  hoursOpen: ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
  hourlyCookieSales: [],
};

function makeHTML(store) {
  var container = document.getElementById(store.storeId);
  container.innerHTML = '<h2>' + store.storeName + '</h2>';
  document.body.appendChild(container);

  var storeHours = document.createElement('ul');
  var hourlyStats = [];

  for (var i = 0; i < store.hoursOpen.length; i++) {
    var hourlyCustomers = store.numCustPerHour(store.minHourlyCustomers, store.maxHourlyCustomers);
    var hourlyCookies = Math.round(hourlyCustomers * store.avgCookiePerCust);

    console.log(store.storeName + ', ' + store.hoursOpen[i] + ' - customers per hour:',hourlyCustomers);

    store.hourlyCookieSales.push(hourlyCookies);
    console.log('Hourly cookies:',store.hourlyCookieSales);

    hourlyStats.push('<li>' + store.hoursOpen[i] + ':  ' + hourlyCookies + ' cookies' + '</li>');
  }

  console.log(store.hourlyCookieSales.length);
  var totalSales = 'N/A';

  hourlyStats.push('<li>' + 'Total: ' + totalSales + ' cookies' + '</li>');

  var fullStats = hourlyStats.join('');
  storeHours.innerHTML = fullStats;
  document.body.appendChild(storeHours);
};

// Call functions
makeHTML(firstAndPike);
makeHTML(seaTacAirport);
makeHTML(seattleCenter);
makeHTML(capitolHill);
makeHTML(alki);
