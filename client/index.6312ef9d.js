import{i as t,c as e}from"./client.e81ef858.js";function o(o,r,n){const a=getComputedStyle(o),s="none"===a.transform?"":a.transform,i=r.from.width/o.clientWidth,f=r.from.height/o.clientHeight,m=(r.from.left-r.to.left)/i,l=(r.from.top-r.to.top)/f,c=Math.sqrt(m*m+l*l),{delay:d=0,duration:h=(t=>120*Math.sqrt(t)),easing:p=e}=n;return{delay:d,duration:t(h)?h(c):h,easing:p,css:(t,e)=>`transform: ${s} translate(${e*m}px, ${e*l}px);`}}export{o as f};
