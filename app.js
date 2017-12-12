'use strict';

// FIRST AND PIKE
var firstAndPike = {
  storeName: '1st and Pike',
  storeId: 'firstAndPike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiePerCust: 6.3,
  hoursOpen: ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
  hourlyCookieSales: [],
  hourlyCustomers: [],
  totalCookies: [],
  numCustPerHour: function getRandomIntInclusive(min,max) {
    min = Math.ceil(this.minHourlyCustomers);
    max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
    this.numCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
  },
  customersPerHour: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      //get random number of customers per hour
      var createRandom = this.numCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
      //push number of customers into hourlyCustomers array
      this.hourlyCustomers.push(createRandom);
    }
    console.log(this.storeName + ' hourly customers:',this.hourlyCustomers);
  },
  hourlyCookies: function() {
    for (var j = 0; j < this.hoursOpen.length; j++) {
      //get number of cookies per hour (rounded)
      var roundNum = Math.round(this.hourlyCustomers[j] * this.avgCookiePerCust);
      //push number of cookie sales into hourlyCookieSales array
      this.hourlyCookieSales.push(roundNum);
    }
    console.log(this.storeName + ' hourly cookies:',this.hourlyCookieSales);
  },
  cookieCount: function sum(arr) {
    var counter = 0;
    for(var l = 0; l < arr.length; l++) {
      counter = counter + arr[l];
    }
    this.totalCookies.push(counter);
  },
  displayDom: function() {
    var container = document.getElementById(this.storeId);
    container.innerHTML = '<h2>' + this.storeName + '</h2>';
    document.body.appendChild(container);

    var storeHours = document.createElement('ul');
    var hourlyStats = [];

    for(var k = 0; k < this.hoursOpen.length; k++) {
      hourlyStats.push('<li>' + this.hoursOpen[k] + ':  ' + this.hourlyCookieSales[k] + ' cookies' + '</li>');
    }

    hourlyStats.push('<li class="total">' + 'Total: ' + this.totalCookies[0] + ' cookies' + '</li>');

    var fullStats = hourlyStats.join('');
    storeHours.innerHTML = fullStats;
    document.body.appendChild(storeHours);
  },
  groupFunctions: function() {
    this.customersPerHour();
    this.hourlyCookies();
    this.cookieCount(this.hourlyCookieSales);
    this.displayDom();
  }
};
firstAndPike.groupFunctions();

// SEATAC AIRPORT
var seaTacAirport = {
  storeName: 'SeaTac Airport',
  storeId: 'seaTacAirport',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiePerCust: 1.2,
  hoursOpen: ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
  hourlyCookieSales: [],
  hourlyCustomers: [],
  totalCookies: [],
  numCustPerHour: function getRandomIntInclusive(min,max) {
    min = Math.ceil(this.minHourlyCustomers);
    max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
    this.numCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
  },
  customersPerHour: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      //get random number of customers per hour
      var createRandom = this.numCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
      //push number of customers into hourlyCustomers array
      this.hourlyCustomers.push(createRandom);
    }
    console.log(this.storeName + ' hourly customers:',this.hourlyCustomers);
  },
  hourlyCookies: function() {
    for (var j = 0; j < this.hoursOpen.length; j++) {
      //get number of cookies per hour (rounded)
      var roundNum = Math.round(this.hourlyCustomers[j] * this.avgCookiePerCust);
      //push number of cookie sales into hourlyCookieSales array
      this.hourlyCookieSales.push(roundNum);
    }
    console.log(this.storeName + ' hourly cookies:',this.hourlyCookieSales);
  },
  cookieCount: function sum(arr) {
    var counter = 0;
    for(var l = 0; l < arr.length; l++) {
      counter = counter + arr[l];
    }
    this.totalCookies.push(counter);
  },
  displayDom: function() {
    var container = document.getElementById(this.storeId);
    container.innerHTML = '<h2>' + this.storeName + '</h2>';
    document.body.appendChild(container);

    var storeHours = document.createElement('ul');
    var hourlyStats = [];

    for(var k = 0; k < this.hoursOpen.length; k++) {
      hourlyStats.push('<li>' + this.hoursOpen[k] + ':  ' + this.hourlyCookieSales[k] + ' cookies' + '</li>');
    }

    hourlyStats.push('<li class="total">' + 'Total: ' + this.totalCookies[0] + ' cookies' + '</li>');

    var fullStats = hourlyStats.join('');
    storeHours.innerHTML = fullStats;
    document.body.appendChild(storeHours);
  },
  groupFunctions: function() {
    this.customersPerHour();
    this.hourlyCookies();
    this.cookieCount(this.hourlyCookieSales);
    this.displayDom();
  }
};
seaTacAirport.groupFunctions();

// SEATTLE CENTER
var seattleCenter = {
  storeName: 'Seattle Center',
  storeId: 'seattleCenter',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiePerCust: 3.7,
  hoursOpen: ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
  hourlyCookieSales: [],
  hourlyCustomers: [],
  totalCookies: [],
  numCustPerHour: function getRandomIntInclusive(min,max) {
    min = Math.ceil(this.minHourlyCustomers);
    max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
    this.numCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
  },
  customersPerHour: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      //get random number of customers per hour
      var createRandom = this.numCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
      //push number of customers into hourlyCustomers array
      this.hourlyCustomers.push(createRandom);
    }
    console.log(this.storeName + ' hourly customers:',this.hourlyCustomers);
  },
  hourlyCookies: function() {
    for (var j = 0; j < this.hoursOpen.length; j++) {
      //get number of cookies per hour (rounded)
      var roundNum = Math.round(this.hourlyCustomers[j] * this.avgCookiePerCust);
      //push number of cookie sales into hourlyCookieSales array
      this.hourlyCookieSales.push(roundNum);
    }
    console.log(this.storeName + ' hourly cookies:',this.hourlyCookieSales);
  },
  cookieCount: function sum(arr) {
    var counter = 0;
    for(var l = 0; l < arr.length; l++) {
      counter = counter + arr[l];
    }
    this.totalCookies.push(counter);
  },
  displayDom: function() {
    var container = document.getElementById(this.storeId);
    container.innerHTML = '<h2>' + this.storeName + '</h2>';
    document.body.appendChild(container);

    var storeHours = document.createElement('ul');
    var hourlyStats = [];

    for(var k = 0; k < this.hoursOpen.length; k++) {
      hourlyStats.push('<li>' + this.hoursOpen[k] + ':  ' + this.hourlyCookieSales[k] + ' cookies' + '</li>');
    }

    hourlyStats.push('<li class="total">' + 'Total: ' + this.totalCookies[0] + ' cookies' + '</li>');

    var fullStats = hourlyStats.join('');
    storeHours.innerHTML = fullStats;
    document.body.appendChild(storeHours);
  },
  groupFunctions: function() {
    this.customersPerHour();
    this.hourlyCookies();
    this.cookieCount(this.hourlyCookieSales);
    this.displayDom();
  }
};
seattleCenter.groupFunctions();

// CAPITOL HILL
var capitolHill = {
  storeName: 'Capitol Hill',
  storeId: 'capitolHill',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiePerCust: 2.3,
  hoursOpen: ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
  hourlyCookieSales: [],
  hourlyCustomers: [],
  totalCookies: [],
  numCustPerHour: function getRandomIntInclusive(min,max) {
    min = Math.ceil(this.minHourlyCustomers);
    max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
    this.numCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
  },
  customersPerHour: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      //get random number of customers per hour
      var createRandom = this.numCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
      //push number of customers into hourlyCustomers array
      this.hourlyCustomers.push(createRandom);
    }
    console.log(this.storeName + ' hourly customers:',this.hourlyCustomers);
  },
  hourlyCookies: function() {
    for (var j = 0; j < this.hoursOpen.length; j++) {
      //get number of cookies per hour (rounded)
      var roundNum = Math.round(this.hourlyCustomers[j] * this.avgCookiePerCust);
      //push number of cookie sales into hourlyCookieSales array
      this.hourlyCookieSales.push(roundNum);
    }
    console.log(this.storeName + ' hourly cookies:',this.hourlyCookieSales);
  },
  cookieCount: function sum(arr) {
    var counter = 0;
    for(var l = 0; l < arr.length; l++) {
      counter = counter + arr[l];
    }
    this.totalCookies.push(counter);
  },
  displayDom: function() {
    var container = document.getElementById(this.storeId);
    container.innerHTML = '<h2>' + this.storeName + '</h2>';
    document.body.appendChild(container);

    var storeHours = document.createElement('ul');
    var hourlyStats = [];

    for(var k = 0; k < this.hoursOpen.length; k++) {
      hourlyStats.push('<li>' + this.hoursOpen[k] + ':  ' + this.hourlyCookieSales[k] + ' cookies' + '</li>');
    }

    hourlyStats.push('<li class="total">' + 'Total: ' + this.totalCookies[0] + ' cookies' + '</li>');

    var fullStats = hourlyStats.join('');
    storeHours.innerHTML = fullStats;
    document.body.appendChild(storeHours);
  },
  groupFunctions: function() {
    this.customersPerHour();
    this.hourlyCookies();
    this.cookieCount(this.hourlyCookieSales);
    this.displayDom();
  }
};
capitolHill.groupFunctions();

// SEATTLE CENTER
var alki = {
  storeName: 'Alki',
  storeId: 'alki',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiePerCust: 4.6,
  hoursOpen: ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
  hourlyCookieSales: [],
  hourlyCustomers: [],
  totalCookies: [],
  numCustPerHour: function getRandomIntInclusive(min,max) {
    min = Math.ceil(this.minHourlyCustomers);
    max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
    this.numCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
  },
  customersPerHour: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      //get random number of customers per hour
      var createRandom = this.numCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
      //push number of customers into hourlyCustomers array
      this.hourlyCustomers.push(createRandom);
    }
    console.log(this.storeName + ' hourly customers:',this.hourlyCustomers);
  },
  hourlyCookies: function() {
    for (var j = 0; j < this.hoursOpen.length; j++) {
      //get number of cookies per hour (rounded)
      var roundNum = Math.round(this.hourlyCustomers[j] * this.avgCookiePerCust);
      //push number of cookie sales into hourlyCookieSales array
      this.hourlyCookieSales.push(roundNum);
    }
    console.log(this.storeName + ' hourly cookies:',this.hourlyCookieSales);
  },
  cookieCount: function sum(arr) {
    var counter = 0;
    for(var l = 0; l < arr.length; l++) {
      counter = counter + arr[l];
    }
    this.totalCookies.push(counter);
  },
  displayDom: function() {
    var container = document.getElementById(this.storeId);
    container.innerHTML = '<h2>' + this.storeName + '</h2>';
    document.body.appendChild(container);

    var storeHours = document.createElement('ul');
    var hourlyStats = [];

    for(var k = 0; k < this.hoursOpen.length; k++) {
      hourlyStats.push('<li>' + this.hoursOpen[k] + ':  ' + this.hourlyCookieSales[k] + ' cookies' + '</li>');
    }

    hourlyStats.push('<li class="total">' + 'Total: ' + this.totalCookies[0] + ' cookies' + '</li>');

    var fullStats = hourlyStats.join('');
    storeHours.innerHTML = fullStats;
    document.body.appendChild(storeHours);
  },
  groupFunctions: function() {
    this.customersPerHour();
    this.hourlyCookies();
    this.cookieCount(this.hourlyCookieSales);
    this.displayDom();
  }
};
alki.groupFunctions();
