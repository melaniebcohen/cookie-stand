'use strict';

var hours = ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; // via MDN docs
};

var store = [];

function Store(storeName, storeId, minCustsPerHour, maxCustsPerHour, avgCookiePerCust){
  this.storeName = storeName;
  this.storeId = storeId;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiePerCust = avgCookiePerCust;
  this.totalDailySales = 0;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  this.calcCustsEachHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.custsEachHour.push(getRandomIntInclusive(this.minCustsPerHour, this.maxCustsPerHour));
    }
  };
  this.calcCookiesEachHour = function() {
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiePerCust);
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
    };
  };
  this.render = function() {
    this.calcCookiesEachHour();
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.storeName;
    trEl.appendChild(tdEl);

    for(var i = 0; i < hours.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesEachHour[i];
      trEl.appendChild(tdEl);
    }

    tdEl = document.createElement('td');
    tdEl.textContent = this.totalDailySales;
    trEl.appendChild(tdEl);

    storeTable.appendChild(trEl);
  };
  store.push(this);
};

new Store('1st and Pike', 'pike', 23, 65, 6.3);
new Store('SeaTac Airport', 'seatac', 3, 24, 1.2);
new Store('Seattle Center', 'seattlecenter', 11, 38, 3.7);
new Store('Capitol Hill', 'capitolhill', 20, 38, 2.3);
new Store('Alki', 'alki', 2, 16, 4.6);

var storeTable = document.getElementById('storeData');

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  };

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Totals';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}
makeHeaderRow();

function renderStore() {
  for(var i = 0; i < store.length; i++) {
    store[i].render();
  }
}
renderStore();

var totalHourlyCookies = [];
var totalOneHour = 0;

// I know I need to loop this somehow... worked on this for hours but could only figure out the first array item
function calcHourlyCookies() {
  for(var i = 0; i < store.length; i++) {
    // for each store, iterate through all hours
    console.log(store[i].storeName + ' ' + store[i].cookiesEachHour[0]);
    var oneHour = store[i].cookiesEachHour[0];
    totalOneHour += oneHour;
  }
  totalHourlyCookies.push(totalOneHour);
  console.log(totalHourlyCookies);
}
calcHourlyCookies();

function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    var sum = 0;
    for(var j = 0; j < store.length; j++) {
      sum += store[j].cookiesEachHour[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = sum;
    trEl.appendChild(thEl);
  };
  thEl = document.createElement('th');
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
};
makeFooterRow();
