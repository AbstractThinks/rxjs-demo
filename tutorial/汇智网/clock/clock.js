"use strict";
var Rx = require("rxjs/Rx");
var tickStream = Rx.Observable.create(function (observer) {
    setInterval(function () {
        observer.onNext((new Date()).getTime());
    }, 1000);
});
tickStream.subscribe(function (x) { return console.log('Observer got a next value: ' + x); }, function (err) { return console.error('Observer got an error:' + err); }, function () { return console.log('Observer got a complete notification'); });
