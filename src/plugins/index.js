import env from './env'
import http from './http'

var install = function(Vue){
    console.log('index...install')
    Vue.in = 123;
    Vue.use(env)
    Vue.use(http)

}

var a = {
    a:1
}
var b = {
    b:1,
    //install:install
}

export default {a,b,install};