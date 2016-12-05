"use strict";
var Observable_1 = require("rxjs/Observable");
var tickStream = Observable_1.Observable.create(function (observer) {
    setInterval(function () {
        observer.onNext();
    }, 1000);
});
var uiRefresher = Observer.create(function () {
    function next(data) {
        console.log(data);
    }
});
tickStream.subscribe(uiRefresher);
