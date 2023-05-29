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


const color = d3.scaleOrdinal(['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f']);
const data = [50,50];
const radius = 125;
const g = d3.select('svg')
 .append('g')
 .attr('transform', `translate(${radius}, ${radius})`);

const arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius);

const arcs = d3.pie()(data);

g.selectAll('path')
  .data(arcs)
  .enter()
  .append('path')
  .attr('d', arc)
  .style('fill', (d, i) => color(i))
  .style('stroke', 'white')
  .style('stroke-width', 3);
