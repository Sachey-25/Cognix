// event  --> object --> emmit ---> event emmiter
// event emmiter objects event emmiter classess

//Imported event module
//var events = require ('events');

// Create an eventEmmiter object
//var eventEmitter = new events.EventEmitter();

/*1. adListener(event, listerner)
--> adds a listerner at the end of the listerner array.
for the specified event. 

2. on (event, listerner)
adds a listerner at the end of the listerner array.
for the specified event.

3. once(event , listerner)
adds a one time listerner to the event. thi listerner is 
invoked only the next time the event is triggered. aft
ewhich is removed. Returns Emitter 
4. removeListerner(event, listerner)
---> Removes all the listerners from the specified event.
5. setMaxListerners (n)
---> By defaut, Event emmiters will print a warning moe than
10 listeneres are added to a particular event

6. removeAllListerners ([event])
--> Removes all the listeners.
7. listeners [event]
-- Returns an array of listerners for the specified event.
8. emit (event , [arg1],[arg2])......
--> executes each of the listerners in order with supplied arguments.
clss methods
----> ListenerCount (emmiter, event)
--> Returns the number of listeners for agive event.*/
var events = require('events');
var eventEmitter = new events.EventEmitter();
// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}
// listener #2
var listner2 = function listner2() {
   console.log('listner2 executed.');
}
// Bind the connection event with the listner1 function
eventEmitter.addListener('Connection', listner1);
// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);
var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");
// Fire the connection event 
eventEmitter.emit('connection');

// Remove the biniding of listerner1
eventEmitter.removeListener('connection', listner2);
console.log("Listerner2 will not listen now.");







