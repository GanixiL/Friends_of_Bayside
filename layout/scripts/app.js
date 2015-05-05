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
    date:'01/01/15'
  },
  {
    eventname:'UEvent2',
    description:"This is Upcoming Event Number 2",
    date:'01/02/15'
  },
  {
    eventname:'UEvent3',
    description:"This is Upcoming Event Number 3",
    date:'01/03/15'
  }
  ]
  var pEvents =[
  {
    eventname:'PEvent1',
    description:"This is Past Event Number 1",
    date:'01/01/14'
  },
  {
    eventname:'PEvent2',
    description:"This is Past Event Number 2",
    date:'01/02/14'
  },
  {
    eventname:'PEvent3',
    description:"This is Past Event Number 3",
    date:'01/03/14'
  }
  ]

})();
