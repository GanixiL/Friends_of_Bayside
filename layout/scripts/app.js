(function(){
  var app = angular.module('Event',[]);
  app.controller('UEventController',function(){
    this.uevent = uEvents;
  });
  app.controller('PEventController',function(){
    this.pevent = pEvents;
  });
  app.controller('TabController',function(){
    this.tab=1;
    this.setTab = function(newValue){
      this.tab=newValue;
    };
    this.isSet = function(tabName){
      return this.tab === tabName;
    }
  });
  var uEvents = [
  {
    eventname:'UEvent1',
    description:"This is Upcoming Event Number 1",
    date:'01',
    month:'Jan'
  },
  {
    eventname:'UEvent2',
    description:"This is Upcoming Event Number 2",
    date:'02',
    month:'Jan'
  },
  {
    eventname:'UEvent3',
    description:"This is Upcoming Event Number 3",
    date:'03',
    month:'Jan'
  }
  ]
  var pEvents =[
  {
    eventname:'PEvent1',
    description:"This is Past Event Number 1",
    date:'29',
    month:'Dec'
  },
  {
    eventname:'PEvent2',
    description:"This is Past Event Number 2",
    date:'30',
    month:'Dec'
  },
  {
    eventname:'PEvent3',
    description:"This is Past Event Number 3",
    date:'31',
    month:'Dec'
  }
  ]

})();
