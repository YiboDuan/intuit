(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.Raw('<nav class="navbar navbar-default navbar-fixed-top">\n  <div class="container">\n    <div class="navbar-header">\n      <a class="navbar-brand" href="/">Intuitive</a>\n    </div>\n    <div class="navbar-right-container">\n    </div>\n  </div>\n</nav>\n \n<div class="h100">\n  <div ui-view="" class="ma-main-container container-fluid h100"></div>\n</div>');
}));
Meteor.startup(Template.body.renderToDocument);

})();
