/**
 * http://usejsdoc.org/
 */
var events  = require('events');

var eventEmitter = new events.EventEmitter();

var eventHandler = function eventFired() {
	console.log("Event fired...");
	eventEmitter.emit('mySecondEvent');
}

eventEmitter.on('myFirstEvent',eventHandler);

eventEmitter.on('mySecondEvent', function(){
	console.log("Anonymous function listened....");
});

eventEmitter.emit('myFirstEvent');

console.log("Prgram eded")