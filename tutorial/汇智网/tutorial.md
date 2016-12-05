[参考](http://www.hubwiz.com/class/569d92e3acf9a45a69b05154)

在RxJS中，一个观测者需要实现的接口扩展为三个：

1. onNext(data) - 可观测对象生成的正常数据，将调用这个接口
2. onError(error) - 可观测对象发生的错误，将调用这个接口
3. onCompleted() - 可观测对象正常结束数据生成流程，将调用这个接口



实例化一个可观测对象|实例化一个观测者
:----:|:-----:
`Rx.Observable.create()`|`Rx.Observer.create()`
数据提供者/Provider|数据消费者/Consumer
