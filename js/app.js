var Cat = function () {
  this.name = ko.observable('Dragon Li');
  this.imgSrc = ko.observable('https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426');
  this.clickCount = ko.observable(0);
  this.visible = ko.observable(false);

  this.level = ko.computed(function() {
    switch (parseInt(this.clickCount() / 10)) {
      case 0:
        return 'NewBorn';
        break;
      case 1: return 'Infant'; break;
      case 2: return 'Teen'; break;
    
      default: return '';
        break;
    }
  }, this);

  this.nicknames = ko.observableArray(['Kiiten', 'Catty', 'Garfield']);

}

var ViewModel = function () {
  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    // using the with binding, you are within the binding context of the currentCat instead of the ViewModel !
    this.clickCount(this.clickCount() + 1);
  };

  /* // another more straight forward way
  var that = this;
  this.incrementCounter = function() {
    that.currentCat().clickCount(that.currentCat().clickCount() + 1);
  };
 */
};

ko.applyBindings(new ViewModel());
