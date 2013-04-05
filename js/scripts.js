$(function() {

  $("#first").rlAccordion();


// if you want have 2 or more accordions in the same page, you will have change the options minus and plus per other classes
  $("#second").rlAccordion('single',{
    minus: ".minusTwo",
    plus: ".plusTwo"
  });

});