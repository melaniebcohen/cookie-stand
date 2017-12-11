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

};

function makeHTML(store) {
  var container = document.getElementById(store.storeId);
  container.innerHTML = '<h2>' + store.storeName + '</h2>';
  document.body.appendChild(container);

  var storeHours = document.createElement('ul');
  var hourlyStats = [];

  for (var i = 0; i < store.hoursOpen.length; i++) {
    var hourlyCookies = Math.round(store.numCustPerHour() * store.avgCookiePerCust);
    console.log(store.hoursOpen[i] + ' - cookies per hour:',store.numCustPerHour());
    hourlyStats.push('<li>' + store.hoursOpen[i] + ': ' + hourlyCookies + ' cookies' + '</li>');
  }

  var fullStats = hourlyStats.join('');
  storeHours.innerHTML = fullStats;
  document.body.appendChild(storeHours);
};
makeHTML(firstAndPike);
