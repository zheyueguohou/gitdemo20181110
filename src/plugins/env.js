var baseUrl = function(){
    return 'http://www.baidu.com'
}()

var install = function(Vue){
    if(install.installed)return;
    Vue.prototype.env = {
        baseUrl:baseUrl
    }
}

export default install