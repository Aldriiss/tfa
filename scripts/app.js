"use strict";

let burgerButton = document.querySelector(".burger");
let menu = document.querySelector(".nav__menu");
let body = document.querySelector("body");
let navEl = document.querySelectorAll(".nav__lien");

if (burgerButton) {
  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle('active');
    menu.classList.toggle('switch');


  })
  for (const el of navEl) {
    el.addEventListener("click", Switch)
  }
  function Switch() {
    menu.classList.remove("switch");
    burgerButton.classList.remove('active');
  }

};

let menuItems = document.querySelectorAll('.nav__el');

function animateMenuItems() {
  menuItems.forEach(function (item, index) {
    setTimeout(function () {
      item.classList.add('slide-in');
    }, index * 100); // Ajoute un délai d'apparition progressif
  });
}

let googlegrap = document.querySelector('.dia');

if (googlegrap) {

  // API pour les graph style google
  google.charts.load('current', { 'packages': ['corechart'] });

  google.charts.setOnLoadCallback(function () {
    drawChart1();
    drawChart2();
  });

  // premier Graphique
  function drawChart1() {
    // Donnée du graph1
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Oui Beaucoup', 2],
      ['Oui', 6],
      ['Moyennement', 5],
      ['Non', 3],
    ]);

    var chart = new google.visualization.PieChart(document.getElementById('chart_div--1'));
    chart.draw(data);
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
      ['La vaisselles', 2],
      ['Le manque d\'\idées', 5],
    ]);

    var chart = new google.visualization.PieChart(document.getElementById('chart_div--2'));
    chart.draw(data);
  }
}