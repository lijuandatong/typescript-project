// class decorator -> modify or enhance the existing class
// 可以用继承的方式实现同样的问题
// 即使没有ProfileComponent的实例，这个函数也会调用，不论有0个或多个实例创建，这个方法只会调用一次
function component(constructor: Function){
    console.log('component decorator called')
    constructor.prototype.uniqueId = Date.now()
    constructor.prototype.insertInDom = () => {
        console.log('inserting the component in the DOM')
    }
}

@component
class ProfileComponent {

}