// -------------------------
// document ready thrower
// -------------------------
$(document).ready(function(){
   switch(pageID){
      case 'prehome': set_prehome(); break;
   }
});

// -----------------
// prehome settings
// -----------------
function set_prehome(){
   // highlight products in mouse over/out
   $('.package-holder a').mouseover(function(e){ $(e.target).animate({top:-10, opacity:0.8}, 'fast'); });
   $('.package-holder a').mouseout(function(e){ $(e.target).animate({top:0, opacity:1}, 'fast'); });   
}