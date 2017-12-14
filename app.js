'use strict';

// GLOBAL VARIABLES AND CONSTRUCTOR FUNCTIONS
var hours = ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'];
var store = [];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; // via MDN docs
};
function Store(storeName, storeId, minCustsPerHour, maxCustsPerHour, avgCookiePerCust){
  this.storeName = storeName;
  this.storeId = storeId;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiePerCust = avgCookiePerCust;
  this.minCookieTosser = 2;
  this.tosserCanServe = 20;
  this.totalDailySales = 0;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  this.cookieTosserPerHour = [];
  store.push(this);
};

new Store('1st and Pike', 'pike', 23, 65, 6.3);
new Store('SeaTac Airport', 'seatac', 3, 24, 1.2);
new Store('Seattle Center', 'seattlecenter', 11, 38, 3.7);
new Store('Capitol Hill', 'capitolhill', 20, 38, 2.3);
new Store('Alki', 'alki', 2, 16, 4.6);

// CACLULATE STORE TOTALS
var totalHourlyCookies = [];
var totalOneHour = 0;

function calcHourlyCookies() {
  for(var i = 0; i < store.length; i++) {
    totalOneHour += store[i].cookiesEachHour[i];
  }
  totalHourlyCookies.push(totalOneHour);
}
calcHourlyCookies();

// COOKIES BY LOCATION FUNCTIONS
Store.prototype.calcCustsEachHour = function() {
  for(var i = 0; i < hours.length; i++) {
    this.custsEachHour.push(getRandomIntInclusive(this.minCustsPerHour, this.maxCustsPerHour));
  }
  console.log(this.storeName, this.custsEachHour);
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

// STAFFING BY LOCATION FUNCTIONS
Store.prototype.renderStaff = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);

  for(var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = '-';
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = '-';
  trEl.appendChild(tdEl);

  staffTable.appendChild(trEl);
};

// CREATE & FILL TABLE - HOURLY COOKIES
var storeTable = document.getElementById('storeData');

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

makeHeaderRow(storeTable);
renderStore();
makeFooterRow();

// CREATE & FILL TABLE - STAFFING
var staffTable = document.getElementById('storeStaffing');

function renderStaffing() {
  for(var i = 0; i < store.length; i++) {
    store[i].renderStaff();
  }
};
function makeStaffingFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    var sum = 0;
    for(var j = 0; j < store.length; j++) {
      sum = 'N/A';
    }
    thEl = document.createElement('th');
    thEl.textContent = sum;
    trEl.appendChild(thEl);
  };
  thEl = document.createElement('th');
  trEl.appendChild(thEl);

  var total = 0;
  for(var k = 0; k < store.length; k++) {
    total = 'N/A';
  }

  thEl.textContent = total;
  trEl.appendChild(thEl);

  staffTable.appendChild(trEl);
};

makeHeaderRow(staffTable);
renderStaffing();
makeStaffingFooterRow();
