import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
// var Rx = require('rxjs/Rx');


let tickStream = Observable.create(function (observer) {
        setInterval(function () {
                observer.onNext();
        }, 1000)
});

let uiRefresher = Observer.create(function () {
        function next(data) {
                console.log(data);
        }
});

tickStream.subscribe(uiRefresher);
