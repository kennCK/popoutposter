jQuery(document).ready(function($){


if (typeof valentineparticle === 'undefined' || valentineparticle === null) {
    valentineparticle = '42';
}	

if (typeof valentine_mainId === 'undefined' || valentine_mainId === null) {
    valentine_mainId = mainId;
}
	
(()=>{let h=valentineparticle;let d=(n)=>Math.floor(Math.random()*n);let k=(c)=>{let s=document.createElement('style');if(!!(window.attachEvent && !window.opera)){s.styleSheet.cssText=c;}else{s.appendChild(document.createTextNode(c));}document.getElementsByTagName('head')[0].appendChild(s);};k('@keyframes u{0%{transform:rotate(0deg);}25%{transform:rotate(10deg);}50%{transform:rotate(0deg);}75%{transform:rotate(-10deg);}100%{transform:rotate(0deg);}};');k('@keyframes m{0%{margin-top:2vh;opacity:0;}20%{opacity:1.0;margin-top:0vh;margin-left:0vw;transform:rotate('+d(90)+'deg);}100%{opacity:0.4;margin-top:100vh;margin-left:'+d(4)+'vw;transform:rotate(1080deg);}};');let w=document.createElement('div');w.id='daWorld';w.style='animation:u 60s ease-in infinite;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;';document.getElementById(valentine_mainId).appendChild(w);while(h--){let o=document.createElement('div');o.style=`pointer-events:none;opacity:0;animation:m ${d(14)+6}s ease-in ${d(4000)}ms infinite;z-index:1000;position:fixed;top:${d(40)}vh;left:${d(100)}vw;font-size:${d(40)+20}px;color:${['#d00','#e66','#fcc'][d(3)]};`;o.innerHTML=['♡','♥'][d(2)];w.appendChild(o);}})()
})