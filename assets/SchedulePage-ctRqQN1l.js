import{a as e,g as t,h as n,n as r,o as i,p as a,s as o,u as s}from"./index-DDOxfLRp.js";import{t as c}from"./AppHeader-UqhgkkIz.js";import{t as l}from"./ScheduleGroup-BodTcaJN.js";var u={class:`p-schedule`},d={__name:`SchedulePage`,setup(d){let f=r(),p=e=>{f.push(e)},m=[{date:`Day1`,items:[{time:`15:00`,event:`start / checkin
＠Richmond Hotel Premier Schole`},{time:`xx:xx`,event:`Dinner
＠Takeout or Delivery`},{time:`21:00`,event:`Nightcap
＠Lounge`},{time:`22:00`,event:`The illumination of Tokyo Skytree
＠Hotel 6th floor`}]},{date:`Day2`,items:[{time:`11:00`,event:`checkout`},{time:`11:30`,event:`Lunch
＠secret...`}]}],h=i(()=>{let e=100;return m.map(t=>{let n=e;return e+=(t.items.length+2)*100,n})});return(r,i)=>(n(),s(`div`,u,[a(c,{variant:`schedule`}),(n(),s(e,null,t(m,(e,t)=>a(l,{key:e.date,date:e.date,items:e.items,"start-delay":h.value[t]},null,8,[`date`,`items`,`start-delay`])),64)),o(`p`,{class:`p-schedule__more`,onClick:i[0]||=e=>p(`/schedule/gate`)},`and more...`)]))}};export{d as default};
