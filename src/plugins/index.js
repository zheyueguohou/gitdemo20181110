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

// function initUse (Vue) {
//     Vue.use = function (plugin) {
//       var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
//       if (installedPlugins.indexOf(plugin) > -1) {
//         return this
//       }
  
//       // additional parameters
//       var args = toArray(arguments, 1);
//       args.unshift(this);
//       if (typeof plugin.install === 'function') {
//         plugin.install.apply(plugin, args);
//       } else if (typeof plugin === 'function') {
//         plugin.apply(null, args);
//       }
//       installedPlugins.push(plugin);
//       return this
//     };
//   }