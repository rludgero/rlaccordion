/*
*
* Author: Rodrigo Ludgero http://rodrigoludgero.com/
*
* Description: A jQuery accordion plugin
*
* License: MIT licensed
*
* Project: jQuery rlAccordion Plugin https://github.com/Rodrigo-Ludgero
*
*/

(function( $ ) {

$.fn.rlAccordion = function(method, options) {

  var $this = $(this);

  var settings = $.extend({

     minus: ".minus", // minus sign class
      plus: ".plus", // plus sign class
    titles: "h3", // html tag parent for minus and plus, this may replaced also for a class
     infos: ".info" // titles sibling container

  }, options);

  var fxs = {

    init : function() { // defaults settings
      return this.each(function() {

        $(settings.minus).click(function(e) {
          e.preventDefault(); // prevent the browser jump to the link anchor
            $this.find(settings.infos).slideUp(); // close all titles sibling
            $(settings.minus).hide(); // hidden all minus signs
            $(settings.plus).show(); // show plus signs
        });

        $(settings.plus).click(function(e) {
          e.preventDefault(); // prevent the browser jump to the link anchor
            $this.find(settings.infos).slideUp(); // close all titles sibling
            $(settings.minus).hide(); // hidden all minus signs
            $(settings.plus).show(); // show all plus signs
            $(this).parents(settings.titles).next().slideDown(); // show parent parent sibling "great uncle"
            $(this).siblings().show(); // show sibling minus sign
            $(this).hide(); // hidden plus sign
        });

      });
    },

    single : function() {
      return this.each(function() {

        $(settings.minus).click(function(e) {
          e.preventDefault(); // prevent the browser jump to the link anchor
            $(this).parents(settings.titles).next().slideToggle(); // show parent parent sibling "great uncle"
            $(this).hide(); // hidden minus signs
            $(this).siblings().show(); // show sibling plus signs
        });

        $(settings.plus).click(function(e) {
          e.preventDefault(); // prevent the browser jump to the link anchor
            $(this).parents(settings.titles).next().slideToggle(); // show parent parent sibling "great uncle"
            $(this).siblings().show(); // show sibling minus sign
            $(this).hide(); // hidden plus sign
        });

      });
    }
  };

  // Method calling logic
  if ( fxs[method] ) {
    return fxs[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
  } else if ( typeof method === 'object' || ! method ) {
    return fxs.init.apply( this, arguments );
  } else {
    $.error( 'Method ' +  method + ' does not exist on jQuery.rlAccordion ' );
  }

};

})( jQuery );
