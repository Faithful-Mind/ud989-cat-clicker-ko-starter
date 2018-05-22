var ViewModel = function () {
  this.name = ko.observable('Dragon Li');
  this.imgSrc = ko.observable('https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426');
  this.clickCount = ko.observable(0);
  this.visible = ko.observable(false);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

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
};

ko.applyBindings(new ViewModel());
