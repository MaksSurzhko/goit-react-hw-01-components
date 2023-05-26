import PropTypes from 'prop-types';

import data from "../statistics/data.json"

 const Statistic = () =>{
 return data.map((items) => {
    return(
     <section class="statistics" key={items.id}> 
 <h2 class="title">Upload stats</h2>

 <ul class="stat-list">
   <li class="item">
     <span class="label">{items.label}</span>
    <span class="percentage">{items.percentage}</span>
   </li>
   <li class="item">
     <span class="label">{items.label}</span>
    <span class="percentage">{items.percentage}</span>
   </li>
  <li class="item">
    <span class="label">{items.label}</span>
     <span class="percentage">{items.percentage}</span>
   </li>
   <li class="item">
     <span class="label">{items.label}</span>
     <span class="percentage">{items.percentage}</span>
   </li>
 </ul>
 </section>
    ) 
 }

 )    
 }

 export default Statistic




 