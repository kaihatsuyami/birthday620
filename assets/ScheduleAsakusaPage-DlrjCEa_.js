import{a as e,g as t,h as n,o as r,p as i,u as a}from"./index-9BN0meNY.js";import{t as o}from"./AppHeader-DMhc91Y2.js";import{t as s}from"./ScheduleGroup-D2IsSvff.js";var c={class:`p-schedule`},l={__name:`ScheduleAsakusaPage`,setup(l){let u=[{date:`Day1`,items:[{time:`15:00`,event:`checkin
＠Richmond Hotel Premier Schole`},{time:`xx:xx`,event:`Dinner
＠Takeout or Delivery`},{time:`21:00`,event:`Nightcap
＠Lounge`},{time:`22:00`,event:`The illumination of Tokyo Skytree
＠Hotel 6th floor`}]},{date:`Day2`,items:[{time:`11:00`,event:`checkout`},{time:`11:30`,event:`Lunch
＠sorairo`},{time:`13:00`,event:`Asakusa Sightseeing`},{time:`18:00`,event:`Enter Skytree`},{time:`19:00`,event:`Sunset`},{time:`21:00`,event:`Exit Skytree`}]}],d=r(()=>{let e=100;return u.map(t=>{let n=e;return e+=(t.items.length+2)*100,n})});return(r,l)=>(n(),a(`div`,c,[i(o,{variant:`schedule`}),(n(),a(e,null,t(u,(e,t)=>i(s,{key:e.date,date:e.date,items:e.items,"start-delay":d.value[t]},null,8,[`date`,`items`,`start-delay`])),64))]))}};export{l as default};
