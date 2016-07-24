function () {
  var things = {
    things: ['thing1','thing2'];
    init: function(){
      //called from outside thing
      this.cacheDom();
      this.bindEvents();
      this.render();
    },
    cacheDom: function() {
      //example only
      this.$el = $("#thingsTemplateModule");
      this.$button = this.$el.find('button');
      this.$input = this.$el.find('input');
      this.$ul = this.$el.find('ul');
      this.$template = this.$el.find('#things-template').html();
    },
    bindEvents: function(){
      this.$button.on('click',this.addThing.bind(this));
    },
    render: function(){
      var data = {
        things: this.things,
      };
      //example only
      this.$ul.html(Mustache.render(this.template,data));
    },
    addThing: function() {
      this.things.push(this.$input.val());
      this.render();
    }
  }
  thing.init();
}()
