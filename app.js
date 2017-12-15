'use strict';

// Global variables
var storeTable = document.getElementById('store-data');
var newStoreForm = document.getElementById('cookie-form');

var totalHourlyCookies = [];
var totalOneHour = 0;

var hours = ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'];
var store = [
  new Store('1st and Pike', 23, 65, 6.3),
  new Store('SeaTac Airport', 3, 24, 1.2),
  new Store('Seattle Center', 11, 38, 3.7),
  new Store('Capitol Hill', 20, 38, 2.3),
  new Store('Alki', 2, 16, 4.6),
];

// Store constructor
function Store(storeName, minCustsPerHour, maxCustsPerHour, avgCookiePerCust){
  this.storeName = storeName;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiePerCust = avgCookiePerCust;
  this.totalDailySales = 0;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  this.calcHourlyCookies = function() {
    for(var i = 0; i < store.length; i++) {
      totalOneHour += store[i].cookiesEachHour[i];
    }
    totalHourlyCookies.push(totalOneHour);
    console.log(totalHourlyCookies);
  };
  this.calcCustsEachHour = function() {
    for(var i = 0; i < hours.length; i++) {
      var random = getRandomIntInclusive(this.minCustsPerHour, this.maxCustsPerHour);
      this.custsEachHour.push(random);
    }
  };
  this.calcCookiesEachHour = function() {
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiePerCust);
      this.cookiesEachHour.push(oneHour);
      console.log(oneHour);
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

    storeTable.insertBefore(trEl,storeTable.childNodes[(store.length)]);
    // found childNodes method on w3schools - it works!
  };
}

// Randomizer
function getRandomIntInclusive(min, max) { // from MDN
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create & fill table
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

renderStore();
makeFooterRow();

// Capture new stores
function newData(event) {
  event.preventDefault();

  var storeLocation = event.target.storeName.value;
  var minCusts = event.target.minCustsPerHour.value;
  var maxCusts = event.target.maxCustsPerHour.value;
  var avgCookies = event.target.avgCookiePerCust.value;

  var newStore = new Store(storeLocation, minCusts, maxCusts, avgCookies);
  store.push(newStore);
  var storeLength = store.length - 1;
  console.log(storeLength);

  store[storeLength].render();
  console.log(store[storeLength]);

  replaceFooterRow();
  newStoreForm.reset();
}
// Replace & recalculate footer row
function replaceFooterRow() {
  document.getElementById('store-data').deleteRow(-1); // w3schools again ftw

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

newStoreForm.addEventListener('submit', newData);
