"use strict";

let burgerButton = document.querySelector(".burger");
let menu = document.querySelector(".nav__menu");
let body = document.querySelector("body");
let navEl = document.querySelectorAll(".nav__lien");


if(burgerButton){
    burgerButton.addEventListener("click", () => {
        burgerButton.classList.toggle('active');
        menu.classList.toggle('switch');
        body.classList.toggle('overflow');
        

    })
    for (const el of navEl) {
    el.addEventListener("click", Switch )
    }
    function Switch(){
        menu.classList.remove("switch");
        burgerButton.classList.remove('active');
    }

};

// API pour les graph style google
google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(function() {
  drawChart1();
  drawChart2();
});

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

// premier Graphique
function drawChart1() {
  // Donnée du graph1
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Oui Beaucoup', 4],
    ['Oui', 2],
    ['Moyennement', 5],
    ['Non', 3],
  ]);

  // Titre et taille du graphique
  var options = {'title':'Votre cuisine vous satisfait-elle ?',
                 'width':400,
                 'height':300};

  var chart = new google.visualization.PieChart(document.getElementById('chart_div--1'));
  chart.draw(data, options);
}

// Second Graphique
function drawChart2() {
  // Donnée du graph2
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Le temps', 7],
    ['Le prix', 3],
    ['Le manque d\'\idées', 5],
    ['La vaisselles', 2],
  ]);

  // Titre et taille du graphique
  var options = {'title':'Quel est le point négatif que vous rencontrez le plus en cuisinant ?',
                 'width':400,
                 'height':300};

  var chart = new google.visualization.PieChart(document.getElementById('chart_div--2'));
  chart.draw(data, options);
}