//<![CDATA[
var rate = 50;
if (document.getElementById) 
window.onerror=new Function("return true")

var objActive; // The object which event occured in 
var act = 0; // Flag during the action 
var elmH = 0; // Hue 
var elmS = 128; // Saturation 
var elmV = 255; // Value 
var clrOrg; // A color before the change 
var TimerID; // Timer ID
if (document.all) { 
document.onmouseover = doRainbowAnchor; 
document.onmouseout = stopRainbowAnchor; 
} 
else if (document.getElementById) { 
document.captureEvents(Event.MOUSEOVER | Event.MOUSEOUT); 
document.onmouseover = Mozilla_doRainbowAnchor; 
document.onmouseout = Mozilla_stopRainbowAnchor; 
}
function doRainbow(obj) 
{ 
if (act == 0) { 
act = 1; 
if (obj) 
objActive = obj; 
else 
objActive = event.srcElement; 
clrOrg = objActive.style.color; 
TimerID = setInterval("ChangeColor()",100); 
} 
}
function stopRainbow() 
{ 
if (act) { 
objActive.style.color = clrOrg; 
clearInterval(TimerID); 
act = 0; 
} 
}
function doRainbowAnchor() 
{ 
if (act == 0) { 
var obj = event.srcElement; 
while (obj.tagName != 'A' && obj.tagName != 'BODY') { 
obj = obj.parentElement; 
if (obj.tagName == 'A' || obj.tagName == 'BODY') 
break; 
}
if (obj.tagName == 'A' && obj.href != '') { 
objActive = obj; 
act = 1; 
clrOrg = objActive.style.color; 
TimerID = setInterval("ChangeColor()",100); 
} 
} 
}
function stopRainbowAnchor() 
{ 
if (act) { 
if (objActive.tagName == 'A') { 
objActive.style.color = clrOrg; 
clearInterval(TimerID); 
act = 0; 
} 
} 
}
function Mozilla_doRainbowAnchor(e) 
{ 
if (act == 0) { 
obj = e.target; 
while (obj.nodeName != 'A' && obj.nodeName != 'BODY') { 
obj = obj.parentNode; 
if (obj.nodeName == 'A' || obj.nodeName == 'BODY') 
break; 
}
if (obj.nodeName == 'A' && obj.href != '') { 
objActive = obj; 
act = 1; 
clrOrg = obj.style.color; 
TimerID = setInterval("ChangeColor()",100); 
} 
} 
}
function Mozilla_stopRainbowAnchor(e) 
{ 
if (act) { 
if (objActive.nodeName == 'A') { 
objActive.style.color = clrOrg; 
clearInterval(TimerID); 
act = 0; 
} 
} 
}
function ChangeColor() 
{ 
objActive.style.color = makeColor(); 
}
function makeColor() 
{ 
// Don't you think Color Gamut to look like Rainbow?
// HSVtoRGB 
if (elmS == 0) { 
elmR = elmV; elmG = elmV; elmB = elmV; 
} 
else { 
t1 = elmV; 
t2 = (255 - elmS) * elmV / 255; 
t3 = elmH % 60; 
t3 = (t1 - t2) * t3 / 60;
if (elmH < 60) { 
elmR = t1; elmB = t2; elmG = t2 + t3; 
} 
else if (elmH < 120) { 
elmG = t1; elmB = t2; elmR = t1 - t3; 
} 
else if (elmH < 180) { 
elmG = t1; elmR = t2; elmB = t2 + t3; 
} 
else if (elmH < 240) { 
elmB = t1; elmR = t2; elmG = t1 - t3; 
} 
else if (elmH < 300) { 
elmB = t1; elmG = t2; elmR = t2 + t3; 
} 
else if (elmH < 360) { 
elmR = t1; elmG = t2; elmB = t1 - t3; 
} 
else { 
elmR = 0; elmG = 0; elmB = 0; 
} 
}
elmR = Math.floor(elmR).toString(16); 
elmG = Math.floor(elmG).toString(16); 
elmB = Math.floor(elmB).toString(16); 
if (elmR.length == 1) elmR = "0" + elmR; 
if (elmG.length == 1) elmG = "0" + elmG; 
if (elmB.length == 1) elmB = "0" + elmB
elmH = elmH + rate; 
if (elmH >= 360) 
elmH = 0;
return '#' + elmR + elmG + elmB; 
}
//]]>


// <![CDATA[
var colour="#FFFFFF";
var sparkles=120;

/****************************
*  Tinkerbell Magic Sparkle *
* (c) 2005 mf2fm web-design *
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();

window.onload=function() { if (document.getElementById) {
  var i, rats, rlef, rdow;
  for (var i=0; i<sparkles; i++) {
    var rats=createDiv(3, 3);
    rats.style.visibility="hidden";
    document.body.appendChild(tiny[i]=rats);
    starv[i]=0;
    tinyv[i]=0;
    var rats=createDiv(5, 5);
    rats.style.backgroundColor="transparent";
    rats.style.visibility="hidden";
    var rlef=createDiv(1, 5);
    var rdow=createDiv(5, 1);
    rats.appendChild(rlef);
    rats.appendChild(rdow);
    rlef.style.top="2px";
    rlef.style.left="0px";
    rdow.style.top="0px";
    rdow.style.left="2px";
    document.body.appendChild(star[i]=rats);
  }
  set_width();
  sparkle();
}}

function sparkle() {
  var c;
  if (x!=ox || y!=oy) {
    ox=x;
    oy=y;
    for (c=0; c<sparkles; c++) if (!starv[c]) {
      star[c].style.left=(starx[c]=x)+"px";
      star[c].style.top=(stary[c]=y)+"px";
      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
      star[c].style.visibility="visible";
      starv[c]=50;
      break;
    }
  }
  for (c=0; c<sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i]+=1+Math.random()*3;
    if (stary[i]<shigh+sdown) {
      star[i].style.top=stary[i]+"px";
      starx[i]+=(i%5-2)/5;
      star[i].style.left=starx[i]+"px";
    }
    else {
      star[i].style.visibility="hidden";
      starv[i]=0;
      return;
    }
  }
  else {
    tinyv[i]=50;
    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
    tiny[i].style.width="2px";
    tiny[i].style.height="2px";
    star[i].style.visibility="hidden";
    tiny[i].style.visibility="visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i]==25) {
    tiny[i].style.width="1px";
    tiny[i].style.height="1px";
  }
  if (tinyv[i]) {
    tinyy[i]+=1+Math.random()*3;
    if (tinyy[i]<shigh+sdown) {
      tiny[i].style.top=tinyy[i]+"px";
      tinyx[i]+=(i%5-2)/5;
      tiny[i].style.left=tinyx[i]+"px";
    }
    else {
      tiny[i].style.visibility="hidden";
      tinyv[i]=0;
      return;
    }
  }
  else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e) {
  set_scroll();
  y=(e)?e.pageY:event.y+sdown;
  x=(e)?e.pageX:event.x+sleft;
}

function set_scroll() {
  if (typeof(self.pageYOffset)=="number") {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body.scrollTop || document.body.scrollLeft) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
	sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

window.onresize=set_width;
function set_width() {
  if (typeof(self.innerWidth)=="number") {
    swide=self.innerWidth;
    shigh=self.innerHeight;
  }
  else if (document.documentElement && document.documentElement.clientWidth) {
    swide=document.documentElement.clientWidth;
    shigh=document.documentElement.clientHeight;
  }
  else if (document.body.clientWidth) {
    swide=document.body.clientWidth;
    shigh=document.body.clientHeight;
  }
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height+"px";
  div.style.width=width+"px";
  div.style.overflow="hidden";
  div.style.backgroundColor=colour;
  return (div);
}
// ]]>