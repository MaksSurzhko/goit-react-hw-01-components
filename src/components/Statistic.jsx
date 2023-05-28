//import PropTypes from 'prop-types';

/*import data from "../statistics/data.json"

 const Statistic = () =>{
 return data.map((items) => {
    return(
     <section class="statistics" > 
 <h2 class="title">Upload stats</h2>

 <ul class="stat-list" >
   <li key={items.id[0]} class="item" >
     <span class="label">{items.label[0]}</span>
    <span class="percentage">{items.percentage[0]}</span>
   </li>
   <li class="item">
     <span class="label">{items.label[1]}</span>
    <span class="percentage">{items.percentage[1]}</span>
   </li>
  <li class="item">
    <span class="label">{items.label[2]}</span>
     <span class="percentage">{items.percentage[2]}</span>
   </li>
   <li class="item">
     <span class="label">{items.label[3]}</span>
     <span class="percentage">{items.percentage[3]}</span>
   </li>
 </ul>
 </section>
    ) 
 }

 )    
 }

 export default Statistic*/


/*import data from "../statistics/data.json";
import "../statistics/data.css"

const Statistic = () => (
  <section className="statistics">
    <h2 className="title">Upload Stats</h2>

    <ul className="stat-list">
      {data.map((item) => (
        <li key={item.id} className="item">
          <span className="labels">{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistic;*/

 

import React from "react";
import data from "../statistics/data.json";
import dcss from "../statistics/data.module.css";

const Statistic = ({ title }) => (
  <section className={dcss.statistics}>
    {title && <h2 className={dcss.title}>{title}</h2>}

    <ul className={dcss.statlist}>
      {data.map((item) => (
        <li key={item.id} className={dcss.item}>
          <span className={dcss.label}>{item.label}</span>
          <span className={dcss.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistic;