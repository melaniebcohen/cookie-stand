'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

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
  this.callCookiesEachHour = function() {
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiePerCust);
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
    };
  };
  this.render = function() {
    this.callCookiesEachHour();

    var container = document.getElementById(this.storeId);
    container.innerHTML = '<h2>' + this.storeName + '</h2>';
    document.body.appendChild(container);

    var ulEl = document.getElementById(this.storeId);
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  };
  store.push(this);
};

new Store('1st and Pike', 'pike', 23, 65, 6.3);
new Store('SeaTac Airport', 'seatac', 3, 24, 1.2);
new Store('Seattle Center', 'seattlecenter', 11, 38, 3.7);
new Store('Capitol Hill', 'capitolhill', 20, 38, 2.3);
new Store('Alki', 'alki', 2, 16, 4.6);

function renderStore() {
  for(var i = 0; i < store.length; i++) {
    store[i].render();
  }
}
renderStore();
