'use strict';

// GLOBAL VARIABLES AND CONSTRUCTOR FUNCTIONS
var storeTable = document.getElementById('store-data');
var newStoreForm = document.getElementById('cookie-form');

var hours = ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'];
var store = [
  new Store('1st and Pike', 23, 65, 6.3),
  new Store('SeaTac Airport', 3, 24, 1.2),
  new Store('Seattle Center', 11, 38, 3.7),
  new Store('Capitol Hill', 20, 38, 2.3),
  new Store('Alki', 2, 16, 4.6),
];

// variables for store totals
var totalHourlyCookies = [];
var totalOneHour = 0;

// Store constructor
function Store(storeName, minCustsPerHour, maxCustsPerHour, avgCookiePerCust){
  this.storeName = storeName;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiePerCust = avgCookiePerCust;
  this.totalDailySales = 0;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
};

// CACLULATE STORE TOTALS
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; // via MDN docs
};
// CALCULATE COOKIES BY LOCATION
Store.prototype.calcHourlyCookies = function() {
  for(var i = 0; i < hours.length; i++) {
    totalOneHour += this.cookiesEachHour[i];
  }
  totalHourlyCookies.push(totalOneHour);
};
Store.prototype.calcCustsEachHour = function() {
  this.calcHourlyCookies();
  for(var i = 0; i < hours.length; i++) {
    this.custsEachHour.push(getRandomIntInclusive(this.minCustsPerHour, this.maxCustsPerHour));
  }
};
Store.prototype.calcCookiesEachHour = function() {
  this.calcCustsEachHour();
  for(var i = 0; i < hours.length; i++) {
    var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiePerCust);
    this.cookiesEachHour.push(oneHour);
    this.totalDailySales += oneHour;
  };
};
Store.prototype.render = function() {
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

// CREATE & FILL TABLE - HOURLY COOKIES
function makeHeaderRow(id) {
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

  id.appendChild(trEl);
}
function renderStore() {
  makeHeaderRow(storeTable);

  for(var i = 0; i < store.length; i++) {
    store[i].render();
  }
}
function makeFooterRow() {
  renderStore();

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

  var total = 0;
  for(var k = 0; k < store.length; k++) {
    total += store[k].totalDailySales;
  }

  thEl.textContent = total;
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
};
makeFooterRow();

// CAPTURE NEW STORES
function newData(event) {
  event.preventDefault();

  var storeLocation = event.target.storeName.value;
  var minCusts = event.target.minCustsPerHour.value;
  var maxCusts = event.target.maxCustsPerHour.value;
  var avgCookies = event.target.avgCookiePerCust.value;

  var newStore = new Store(storeLocation, minCusts, maxCusts, avgCookies);
  store.push(newStore);
  var storeLength = store.length - 1;

  store[storeLength].render();

  console.log(store[storeLength]);

  newStoreForm.reset();
}









newStoreForm.addEventListener('submit', newData);
