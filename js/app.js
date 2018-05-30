var initialCats = [
  {
    name: 'Tabby',
    imgSrc: 'https://c1.staticflickr.com/1/148/434164568_fea0ad4013_b.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    clickCount: 0,
    nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab  Tabby Catty Cat'],
  },
  {
    name: 'Dragon Li',
    imgSrc: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
    clickCount: 0,
    visible: false,
    nicknames: ['Kiiten', 'Catty', 'Garfield'],
  },
  {
    name: 'Calico cat',
    imgSrc: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
    clickCount: 0,
    visible: false,
    nicknames: ['Kiiten', 'Catty', 'Garfield'],
  },
  {
    name: 'Two kittens',
    imgSrc: 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',
    clickCount: 0,
    visible: false,
    nicknames: ['Kiiten', 'Catty', 'Garfield'],
  },
  {
    name: 'Happy orange tabby cat',
    imgSrc: 'https://lh4.ggpht.com/dUJNejPqb_qLsV1kfWcvviqc7adxsw02BSAm8YLWNklP4lI6fQCLKXd-28uKuchtjoEUpqFN0K6kkTSDHw=s0#w=588&h=640',
    clickCount: 0,
    visible: false,
    nicknames: ['Kiiten', 'Catty', 'Garfield'],
  },
  {
    name: 'Midge cat and computer',
    imgSrc: 'https://lh3.ggpht.com/cesD31eroFxIZ4IEeXPAJkx_8i5-haU3P9LQosGNfV-GfAPUh2bE4iw4zV6Mc9XobWOR70BQh2JAP57wZlM=s0#w=640&h=480',
    clickCount: 0,
    visible: false,
    nicknames: ['Kiiten', 'Catty', 'Garfield'],
  },
];

var Cat = function (data) {
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.clickCount = ko.observable(data.clickCount);
  this.visible = ko.observable(data.visible);

  this.level = ko.computed(function() {
    switch (Math.floor(this.clickCount() / 10)) {
      case 0: return 'NewBorn'; break;
      case 1: return 'Infant'; break;
      case 2: return 'Teen'; break;
    
      default: return 'Adult'; break;
    }
  }, this);

  this.nicknames = ko.observableArray(data.nicknames);

}

var ViewModel = function () {
  var self = this;
  this.catList = ko.observableArray([]);

  initialCats.forEach(el => {
    this.catList.push(new Cat(el));
  })

  this.switchCat = function(clickedCat) {
    self.currentCat(clickedCat);
  }

  this.currentCat = ko.observable(this.catList()[0]);

  // this.incrementCounter = function() {
  //   // using the with binding, you are within the binding context of the currentCat instead of the ViewModel !
  //   this.clickCount(this.clickCount() + 1);
  // };

  // another more straight forward way
  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

};

ko.applyBindings(new ViewModel());
