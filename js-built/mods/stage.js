define(["jquery"],function(a){var b={container:"#page",clearContainer:!1,makeFullScreen:!0,canvasWidth:"1000",canvaseHeight:"700"},c,d,e=function(e){var f=a.extend({},b,e);if(f.makeFullScreen){var g=a(f.container);f.canvasWidth=g.outerWidth(),f.canvaseHeight=g.outerHeight()}var h={};return h.settings=f,h.create=function(){return c=a('<canvas id="thecanvas" width="'+this.settings.canvasWidth+'" height="'+this.settings.canvaseHeight+'"></canvas>'),c.appendTo(this.settings.container),c},h.clear=function(){return this.$canvas[0].width=this.$canvas[0].width,this},h.$canvas=c||h.create(),h.ctx=d||h.$canvas[0].getContext("2d"),h};return e})