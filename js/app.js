'use strict'

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let hoursArr = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:',
'3pm:','4pm:','5pm:','6pm:','7pm:'];

let globVar = document.getElementById('cookiesSales');

let arrObj = [];

let table = document.createElement('table');


function headerRow (){
   let articleEl = document.createElement('article');
   globVar.appendChild(articleEl);
   articleEl.appendChild(table);



   let firstRow = document.createElement('tr');
   table.appendChild(firstRow);

   let th1 = ' ';
   th1 = document.createElement('th');
   firstRow.appendChild(th1);
   for (let v = 0; v < 15; v++){
            th1 = document.createElement('th');
            firstRow.appendChild(th1);
            th1.textContent = `${hoursArr[v]}  `;
   };

   th1.textContent = 'Daily Location Total';
}

function footerRow(){
   let lastRow = document.createElement('tr');
   table.appendChild(lastRow);

   let totaData = document.createElement('td');
   lastRow.appendChild(totaData);

   totaData.textContent = 'Total';
      
      for (let j = 0; j < 14; j++){
         let tdL = document.createElement('td');
         let totalB = 0;
         for (let x = 0; x < arrObj.length; x++){
            totalB += arrObj[x].cookiesPerHArr[j];
         }
         tdL.textContent = totalB;
         lastRow.appendChild(tdL);
      }
      let totalLastCell = 0;
      for (let y = 0; y <arrObj.length;y++){
         totalLastCell += arrObj[y].total;
      }
      let totaData1 = document.createElement('td');
        lastRow.appendChild(totaData1);
      totaData1.textContent = totalLastCell;
}



function Cookies(shopName,minCus,maxCus,avrgCookie,cookiesPerHArr,total){
   this.shopName = shopName;
   this.minCus = minCus;
   this.maxCus = maxCus;
   this.avrgCookie = avrgCookie;
   this.cookiesPerHArr = cookiesPerHArr;
   this.total = total;
   arrObj.push(this);
}

Cookies.prototype.custPerHour = function(){
   let sumOf = 0;
        for (let i = 0; i < hoursArr.length; i++) {
        sumOf = randomValue(this.minCus,this.maxCus);
        sumOf = randomValue(this.minCus,this.maxCus) * this.avrgCookie;
        let calc = Math.floor(sumOf);
          this.cookiesPerHArr.push(calc);
        this.total += calc
}
}
Cookies.prototype.renderA = function(){
         let secRow = document.createElement('tr');
         let tableData = document.createElement('td');
         table.appendChild(secRow);
         secRow.appendChild(tableData);
         tableData.textContent = this.shopName;
         let td2 = " ";
         for(let z = 0; z < 15; z++){
            td2 = document.createElement('td');
            secRow.appendChild(td2);
            td2.textContent = this.cookiesPerHArr[z]   ;
         }
         td2.textContent = this.total
}

let seattle = new Cookies('Seattle',23,65,6.3,[],0);
let tokyo = new Cookies('Tokyo',3,24,1.2,[],0);
let dubai = new Cookies('Dubai',11,38,3.7,[],0);
let paris = new Cookies('Paris',20,38,2.3,[],0);
let lima = new Cookies('Lima',2,16,4.6,[],0);


headerRow();
for (let i = 0; i < arrObj.length; i++){
   arrObj[i].custPerHour();
   arrObj[i].renderA();
}
footerRow();

















// const seattle = {
//     shopName : 'Seattle',
//     minMaxCus : 0,
//     avrgCookie : 6.3,
//     cookiesPerHArr :[],
//     total : 0,
//     custPerHour : function(){
//         let sumOf = 0;
//         for (let i = 0; i < hoursArr.length; i++) {
//         this.minMaxCus = randomValue(23,65);
//         sumOf = this.minMaxCus * this.avrgCookie;
//         let calc = Math.floor(sumOf);
//           this.cookiesPerHArr.push(calc);
//         this.total += calc
//         }
       
//    },

//    renderA : function(){
//     let articleEl = document.createElement('article');
//     globVar.appendChild(articleEl);

//     let h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.shopName;

//     let ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     let liEl = null;
//     for (let v = 0; v < hoursArr.length; v++){
//        liEl = document.createElement('li');
//        ulEl.appendChild(liEl);
//        liEl.textContent = `${hoursArr[v]} ${this.cookiesPerHArr[v]} Cookies`;
    
//     }
// let liE2 = document.createElement('li');
// ulEl.appendChild(liE2);
// liE2.textContent = `The Total is :${this.total}`
//    }

    
// }

// seattle.custPerHour();
// seattle.renderA();



// const tokyo = {
//     shopName : 'Tokyo',
//     minMaxCus : 0,
//     avrgCookie : 1.2,
//     cookiesPerHArr :[],
//     total : 0,
//     custPerHour : function(){
//         let sumOf = 0;
//         for (let i = 0; i < hoursArr.length; i++) {
//         this.minMaxCus = randomValue(3,24);
//         sumOf = this.minMaxCus * this.avrgCookie;
//         let calc = Math.floor(sumOf);
//           this.cookiesPerHArr.push(calc);
//         this.total += calc
//         }
      
//    },

//    renderA : function(){
//     let articleEl = document.createElement('article');
//     globVar.appendChild(articleEl);

//     let h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.shopName;

//     let ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     let liEl = null;
//     for (let v = 0; v < hoursArr.length; v++){
//        liEl = document.createElement('li');
//        ulEl.appendChild(liEl);
//        liEl.textContent = `${hoursArr[v]} ${this.cookiesPerHArr[v]} Cookies`;
      
//     }
// let liE2 = document.createElement('li');
// ulEl.appendChild(liE2);
// liE2.textContent = `The Total is :${this.total}`
//    }

    
// }

// tokyo.custPerHour();
// tokyo.renderA();



// const dubai = {
//     shopName : 'Dubai',
//     minMaxCus : 0,
//     avrgCookie : 3.7,
//     cookiesPerHArr :[],
//     total : 0,
//     custPerHour : function(){
//         let sumOf = 0;
//         for (let i = 0; i < hoursArr.length; i++) {
//         this.minMaxCus = randomValue(1,38);
//         sumOf = this.minMaxCus * this.avrgCookie;
//         let calc = Math.floor(sumOf);
//           this.cookiesPerHArr.push(calc);
//         this.total += calc
//         }
//    },

//    renderA : function(){
//     let articleEl = document.createElement('article');
//     globVar.appendChild(articleEl);

//     let h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.shopName;

//     let ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     let liEl = null;
//     for (let v = 0; v < hoursArr.length; v++){
//        liEl = document.createElement('li');
//        ulEl.appendChild(liEl);
//        liEl.textContent = `${hoursArr[v]} ${this.cookiesPerHArr[v]} Cookies`;
      
//     }
// let liE2 = document.createElement('li');
// ulEl.appendChild(liE2);
// liE2.textContent = `The Total is :${this.total}`
//    }

    
// }

// dubai.custPerHour();
// dubai.renderA();



// const paris = {
//     shopName : 'Paris',
//     minMaxCus : 0,
//     avrgCookie : 2.3,
//     cookiesPerHArr :[],
//     total : 0,
//     custPerHour : function(){
//         let sumOf = 0;
//         for (let i = 0; i < hoursArr.length; i++) {
//         this.minMaxCus = randomValue(20,38);
//         sumOf = this.minMaxCus * this.avrgCookie;
//         let calc = Math.floor(sumOf);
//           this.cookiesPerHArr.push(calc);
//         this.total += calc
//         }
        
//    },

//    renderA : function(){
//     let articleEl = document.createElement('article');
//     globVar.appendChild(articleEl);

//     let h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.shopName;

//     let ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     let liEl = null;
//     for (let v = 0; v < hoursArr.length; v++){
//        liEl = document.createElement('li');
//        ulEl.appendChild(liEl);
//        liEl.textContent = `${hoursArr[v]} ${this.cookiesPerHArr[v]} Cookies`;
       
//     }
// let liE2 = document.createElement('li');
// ulEl.appendChild(liE2);
// liE2.textContent = `The Total is :${this.total}`
//    }

    
// }
// paris.custPerHour();
// paris.renderA();



// const lima = {
//     shopName : 'Lima',
//     minMaxCus : 0,
//     avrgCookie : 4.6,
//     cookiesPerHArr :[],
//     total : 0,
//     custPerHour : function(){
//         let sumOf = 0;
//         for (let i = 0; i < hoursArr.length; i++) {
//         this.minMaxCus = randomValue(2,16);
//         sumOf = this.minMaxCus * this.avrgCookie;
//         let calc = Math.floor(sumOf);
//           this.cookiesPerHArr.push(calc);
//         this.total += calc
//         }
       
//    },

//    renderA : function(){
//     let articleEl = document.createElement('article');
//     globVar.appendChild(articleEl);

//     let h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.shopName;

//     let ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     let liEl = null;
//     for (let v = 0; v < hoursArr.length; v++){
//        liEl = document.createElement('li');
//        ulEl.appendChild(liEl);
//        liEl.textContent = `${hoursArr[v]} ${this.cookiesPerHArr[v]} Cookies`;
      
//     }
// let liE2 = document.createElement('li');
// ulEl.appendChild(liE2);
// liE2.textContent = `The Total is :${this.total}`
//    }

    
// }

// lima.custPerHour();
// lima.renderA(); 