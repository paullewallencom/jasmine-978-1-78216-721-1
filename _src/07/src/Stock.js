(function (Backbone) {

  var Stock = Backbone.Model.extend({
    idAttribute: 'symbol',
    urlRoot: '/stocks',

    defaults: {
      'sharePrice': 0
    }
  });

  this.Stock = Stock;

})(Backbone);
