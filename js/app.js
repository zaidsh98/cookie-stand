'use strict'

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let globVar = document.getElementById('cookiesSales');

let hoursArr = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'];
const seattle = {
    shopName : 'Seattle',
    minMaxCus : 0,
    avrgCookie : 6.3,
    cookiesPerHArr :[],
    total : 0,
    custPerHour : function(){
        let sumOf = 0;
        for (let i = 0; i < hoursArr.length; i++) {
        this.minMaxCus = randomValue(23,65);
        sumOf = this.minMaxCus * this.avrgCookie;
        let calc = Math.floor(sumOf);
          this.cookiesPerHArr.push(calc);
        this.total += calc
        }
        //console.log(this.cookiesPerHArr);
   },

   renderA : function(){
    let articleEl = document.createElement('article');
    globVar.appendChild(articleEl);

    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.shopName;

    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    let liEl = null;
    for (let v = 0; v < hoursArr.length; v++){
       liEl = document.createElement('li');
       ulEl.appendChild(liEl);
       liEl.textContent = `${hoursArr[v]} ${this.cookiesPerHArr[v]} Cookies`;
    
    }
let liE2 = document.createElement('li');
ulEl.appendChild(liE2);
liE2.textContent = `The Total is :${this.total}`
   }

    
}

seattle.custPerHour();
seattle.renderA();


const tokyo = {
    shopName : 'Tokyo',
    minMaxCus : 0,
    avrgCookie : 1.2,
    cookiesPerHArr :[],
    total : 0,
    custPerHour : function(){
        let sumOf = 0;
        for (let i = 0; i < hoursArr.length; i++) {
        this.minMaxCus = randomValue(3,24);
        sumOf = this.minMaxCus * this.avrgCookie;
        let calc = Math.floor(sumOf);
          this.cookiesPerHArr.push(calc);
        this.total += calc
        }
        //console.log(this.cookiesPerHArr);
   },

   renderA : function(){
    let articleEl = document.createElement('article');
    globVar.appendChild(articleEl);

    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.shopName;

    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    let liEl = null;
    for (let v = 0; v < hoursArr.length; v++){
       liEl = document.createElement('li');
       ulEl.appendChild(liEl);
       liEl.textContent = `${hoursArr[v]} ${this.cookiesPerHArr[v]} Cookies`;
       /*for (let z = 0; z < this.cookiesPerHArr.length; z++){
        liEl.textContent = this.cookiesPerHArr[v];

       }*/
    }
let liE2 = document.createElement('li');
ulEl.appendChild(liE2);
liE2.textContent = `The Total is :${this.total}`
   }

    
}

tokyo.custPerHour();
tokyo.renderA();


const dubai = {
    shopName : 'Dubai',
    minMaxCus : 0,
    avrgCookie : 3.7,
    cookiesPerHArr :[],
    total : 0,
    custPerHour : function(){
        let sumOf = 0;
        for (let i = 0; i < hoursArr.length; i++) {
        this.minMaxCus = randomValue(1,38);
        sumOf = this.minMaxCus * this.avrgCookie;
        let calc = Math.floor(sumOf);
          this.cookiesPerHArr.push(calc);
        this.total += calc
        }
        //console.log(this.cookiesPerHArr);
   },

   renderA : function(){
    let articleEl = document.createElement('article');
    globVar.appendChild(articleEl);

    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.shopName;

    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    let liEl = null;
    for (let v = 0; v < hoursArr.length; v++){
       liEl = document.createElement('li');
       ulEl.appendChild(liEl);
       liEl.textContent = `${hoursArr[v]} ${this.cookiesPerHArr[v]} Cookies`;
       /*for (let z = 0; z < this.cookiesPerHArr.length; z++){
        liEl.textContent = this.cookiesPerHArr[v];

       }*/
    }
let liE2 = document.createElement('li');
ulEl.appendChild(liE2);
liE2.textContent = `The Total is :${this.total}`
   }

    
}

dubai.custPerHour();
dubai.renderA();

const paris = {
    shopName : 'Paris',
    minMaxCus : 0,
    avrgCookie : 2.3,
    cookiesPerHArr :[],
    total : 0,
    custPerHour : function(){
        let sumOf = 0;
        for (let i = 0; i < hoursArr.length; i++) {
        this.minMaxCus = randomValue(20,38);
        sumOf = this.minMaxCus * this.avrgCookie;
        let calc = Math.floor(sumOf);
          this.cookiesPerHArr.push(calc);
        this.total += calc
        }
        //console.log(this.cookiesPerHArr);
   },

   renderA : function(){
    let articleEl = document.createElement('article');
    globVar.appendChild(articleEl);

    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.shopName;

    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    let liEl = null;
    for (let v = 0; v < hoursArr.length; v++){
       liEl = document.createElement('li');
       ulEl.appendChild(liEl);
       liEl.textContent = `${hoursArr[v]} ${this.cookiesPerHArr[v]} Cookies`;
       /*for (let z = 0; z < this.cookiesPerHArr.length; z++){
        liEl.textContent = this.cookiesPerHArr[v];

       }*/
    }
let liE2 = document.createElement('li');
ulEl.appendChild(liE2);
liE2.textContent = `The Total is :${this.total}`
   }

    
}

paris.custPerHour();
paris.renderA();

const lima = {
    shopName : 'Lima',
    minMaxCus : 0,
    avrgCookie : 4.6,
    cookiesPerHArr :[],
    total : 0,
    custPerHour : function(){
        let sumOf = 0;
        for (let i = 0; i < hoursArr.length; i++) {
        this.minMaxCus = randomValue(2,16);
        sumOf = this.minMaxCus * this.avrgCookie;
        let calc = Math.floor(sumOf);
          this.cookiesPerHArr.push(calc);
        this.total += calc
        }
        //console.log(this.cookiesPerHArr);
   },

   renderA : function(){
    let articleEl = document.createElement('article');
    globVar.appendChild(articleEl);

    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.shopName;

    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    let liEl = null;
    for (let v = 0; v < hoursArr.length; v++){
       liEl = document.createElement('li');
       ulEl.appendChild(liEl);
       liEl.textContent = `${hoursArr[v]} ${this.cookiesPerHArr[v]} Cookies`;
       /*for (let z = 0; z < this.cookiesPerHArr.length; z++){
        liEl.textContent = this.cookiesPerHArr[v];

       }*/
    }
let liE2 = document.createElement('li');
ulEl.appendChild(liE2);
liE2.textContent = `The Total is :${this.total}`
   }

    
}

lima.custPerHour();
lima.renderA();