// import { Observable } from 'rxjs/Observable';
// import { Observer } from 'rxjs/Observer';
import Rx = require('rxjs/Rx');


// var Rx = require('rxjs/Rx');


let tickStream = Rx.Observable.create(function (observer) {
        setInterval(function () {
            observer.onNext((new Date()).getTime());
        }, 1000)
});


tickStream.subscribe(
    x => console.log('Observer got a next value: ' + x),
    err => console.error('Observer got an error:'+err),
    () => console.log('Observer got a complete notification')
);
