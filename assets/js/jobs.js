$("#entry-header").click(function(){
  $("#entry-footer").slideToggle();
  $("#entry-header i").toggleClass( "fa-plus" );
  $("#entry-header i").toggleClass( "fa-minus" );
});

$("#super-header").click(function(){
  $("#super-footer").slideToggle();
  $("#super-header i").toggleClass( "fa-plus" );
  $("#super-header i").toggleClass( "fa-minus" );
});

$("#lead-header").click(function(){
  $("#lead-footer").slideToggle();
  $("#lead-header i").toggleClass( "fa-plus" );
  $("#lead-header i").toggleClass( "fa-minus" );
});
