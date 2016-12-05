var $input = $("#test");

var search$ = Rx.Observable
    .fromEvent($input, 'input')  //监听 input 元素的 input 事件
    .map(function (e) { return $input.val(); })  //把事件对象 e 映射成 input 元素的值
    .filter(function (value) { return value.length >= 1; })  //接着过滤掉值长度小于 1 的
    .throttleTime(100) //并且还设置了一个 throttle (节流器)，两次输入间隔不超过 100 毫秒为有效输入
    .distinctUntilChanged() //如果该值和过去最新的值相等的话，忽略他
    .switchMap(function (term) { return Rx.Observable.fromPromise(wikiIt(term)); }) //调用 Wikipedia 的一个 API
    .subscribe(function (x) { return console.log(x); }, function (err) { return console.log(err); });  //拿到 API 返回的数据


function renderSearchResult(result) {
    document.querySelector('#result').innerHTML = result[1]
        .map(function (r) { return "<li>" + r + "</li>"; })
        .join('');
}
function wikiIt(term) {
    var url = 'http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + encodeURIComponent(term) + '&origin=*';
    return $.getJSON(url);
}
