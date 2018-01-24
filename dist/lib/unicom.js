"use strict";function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if("[object array]"==o.call(e).toLowerCase())for(var r=0;r<e.length;r+=1)t(e[r],n,i);else if(e){var a=String(e);n&&(c[a]||(c[a]=[]),c[a].push(n)),i.push(a)}return i}function e(t,e){return function(){var n=Array.prototype.slice.call(arguments),i=n.shift(),r=n.shift();i&&(r&&e[p]!=i||!r&&(!e[u]||e[u].indexOf(i)<0))||t.apply(e,n)}}function n(){var t=Array.prototype.slice.call(arguments),e="",n=!1,i=String(t[0]).replace(/([@#])([^@#]*)$/,function(t,i,r){return e=r,n="#"==i,""});t.splice(0,1,i,e,n,this),a.emit.apply(a,t)}function i(r){var h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},y=h.name,v=void 0===y?"unicom":y,d=h.sendName,m=h.groupName,_=h.idName;if(!i.installed){i.installed=!0,r.prototype["$"+(d||v+"Send")]=n,u=m||v+"Name",Object.defineProperty(r.prototype,"$"+(m||v+"VM"),{get:function(){return c}}),p=_||v+"Id",Object.defineProperty(r.prototype,"$"+p,{get:function(){return l}}),r.mixin({props:_defineProperty({},p,{type:String,default:""}),beforeCreate:function(){var n=this.$options,i=n[v];if(i){var r={};for(var c in i){r[c]=[],"[object array]"!=o.call(i[c]).toLowerCase()&&(i[c]=[i[c]]);for(var p=0;p<i[c].length;p+=1)if(i[c][p]){var h=e(i[c][p],this);r[c].push(h),a.on(c,h)}}s.push(r),f.push(this)}this[u]=t(n[u],this);var y=(this.$options.propsData||{}).unicomId;y&&(l[y]=this)},destroyed:function(){var t=this,e=f.indexOf(this);if(e>=0){var n=s[e];f.splice(e,1),s.splice(e,1);for(var i in n)!function(t){n[t].forEach(function(e){a.off(t,e)})}(i)}this[u].forEach(function(e){var n=c[e];if(n){var i=n.indexOf(t);i>-1&&n.splice(i,1),0==n.length&&delete c[e]}});var r=this.unicomId;r&&l[r]&&delete l[r]}});var g=r.config.optionMergeStrategies;g[v]=g.watch,g[u]=function(t,e){var n=[];return t&&n.push(t),e&&n.push(e),n}}}var r=(Array.prototype.slice,function(){function t(){_classCallCheck(this,t),this._monitor_=Object.assign({},this._monitor_||{})}return _createClass(t,[{key:"on",value:function(t,e){var n=this._monitor_||(this._monitor_={});return n[t]||(n[t]=[]),n[t].push(e),this}},{key:"hasEvent",value:function(t){return(this._monitor_&&this._monitor_[t]||[]).length>0||!!this["on"+t]}},{key:"onec",value:function(t,e){function n(){e.apply(this,arguments),this.off(t,n)}return this.on(t,n),this}},{key:"off",value:function(t,e){var n=this._monitor_;if(n)if(e){var i=n[t];if(i){var r=i.indexOf(e);r>-1&&i.splice(r,1)}}else t?delete n[t]:delete this._monitor_;return this}},{key:"emit",value:function(t){for(var e=this._monitor_&&this._monitor_[t]||[],n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];if(e.length)for(var o=0;o<e.length;o+=1)e[o].apply(this,i);var a=this["on"+t];return a&&a.apply(this,i),this}},{key:"assign",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return"string"==typeof e[0]?this.assign(_defineProperty({},e[0],e[1])):(e.unshift(this),Object.assign.apply(Object,e)),this}}]),t}()),o=Object.prototype.toString,a=new r,f=[],s=[],u="",c={},l={},p="";return window.Vue&&i(window.Vue),{EventEmitter:r,unicom:a,install:i}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi91bmljb20uanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJfdHlwZW9mIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwidW5kZWZpbmVkIiwiZ3JvdXBGb3JWbSIsInB1c2giLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ0b1N0cmluZyIsImNhbGwiLCJkYXRhIiwidG9Mb3dlckNhc2UiLCJhcnIiLCJrZXkiLCJpIiwidG9PbmVBcnJheSIsInRoYXQiLCJzZW5kU3dpdGNoIiwiZm4iLCJhcmciLCJBcnJheSIsInRvIiwic2hpZnQiLCJwcm90b3R5cGUiLCJzbGljZSIsIlN0cmluZyIsInJlcGxhY2UiLCJpc0lkIiwiczAiLCJzMSIsInVuaWNvbUdyb3VwTmFtZSIsImluZGV4T2YiLCJzcGxpY2UiLCJzZW5kIiwibmFtZSIsInNlbmROYW1lIiwiczIiLCJncm91cE5hbWUiLCJpZE5hbWUiLCJ0aGlzIiwiaW5zdGFsbCIsImluc3RhbGxlZCIsIl9yZWYiLCJfcmVmJG5hbWUiLCJPYmplY3QiLCJnZXQiLCJkZWZpbmVQcm9wZXJ0eSIsInZ1ZSIsInByb3BzIiwidW5pY29tSWROYW1lIiwiJG9wdGlvbnMiLCJpZEZvclZtIiwidXMiLCJ0eXBlIiwidW5pIiwiYmVmb3JlQ3JlYXRlIiwiZXZIb29rcyIsInZtSG9va3MiLCJuIiwiaWQiLCJ4Zm4iLCJpbmRleCIsIm9uIiwib3B0IiwidW5pY29tSWQiLCJkZXN0cm95ZWQiLCJfdGhpcyIsImdzIiwiZm9yRWFjaCIsIm1lcmdlIiwib3B0aW9uTWVyZ2VTdHJhdGVnaWVzIiwicGFyZW50VmFsIiwiVnVlIiwiY29uZmlnIiwid2F0Y2giLCJjaGlsZFZhbCIsIngiLCJFdmVudEVtaXR0ZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhc3NpZ24iLCJfbW9uaXRvcl8iLCJfY3JlYXRlQ2xhc3MiLCJ2YWx1ZSIsImZ1biIsIm1vbml0b3IiLCJmdW54IiwiYXBwbHkiLCJvZmYiLCJlcyIsIm9uRnVuIiwiX2xlbiIsImFnIiwiX2tleSIsImFyZ3MiLCJfZGVmaW5lUHJvcGVydHkiLCJ1bnNoaWZ0IiwidW5pY29tIiwid2luZG93Il0sIm1hcHBpbmdzIjoic3RCQUFDLFNBQVVBLEVBQVFDLEdBQ0MsWUFBbkIsbUJBQU9DLFNBQVAsWUFBQUMsUUFBT0QsV0FBMEMsbUJBQVhFLFFBQXlCQSxPQUFPRixRQUFVRCxJQUM5RCxrQkFBWEksU0FBeUJBLE9BQU9DLElBQU1ELE9BQU9KLEdBQVdBLEtBRi9ETSxFQUdRLFdBK0lHQyxRQUFBQSxHQUFBQSxFQUFBQSxHQUFBLEdBQWdCQyxHQUFoQkMsVUFBQUMsT0FBQSxPQUFBSixLQUFBRyxVQUFBLEdBQUFBLFVBQUEsS0FDSCxJQUFBLGtCQUFBRSxFQUFBQyxLQUFBQyxHQUFBQyxjQUNEQyxJQUFBQSxHQUFJUCxHQUFKLEVBQVNRLEVBQVRILEVBQUFILE9BQUFPLEdBQUEsRUFDSEMsRUFBQUwsRUFBQUksR0FBQUUsRUFBQUosT0FUSSxJQUFHRixFQUFLLENBY2pCLEdBQUFHLEdBQVNJLE9BQVdDLEVBQ2hCRixLQUNRRyxFQUFNQyxLQUNOQyxFQUFTQyxPQVhUbEIsRUFBV1MsR0FBS1IsS0FBS1csSUFnQnJCSixFQUFBUCxLQUFBUSxHQVpSLE1BQU9ELEdBSVgsUUFBU0ssR0FBV0MsRUFBSUYsR0FnQnhCLE1BQUEsWUFDSSxHQUFJRyxHQUFNQyxNQUFNRyxVQUFVQyxNQUFNZixLQUFLSCxXQWQ3QmUsRUFBS0YsRUFBSUcsUUFnQmJELEVBQUpGLEVBQUFHLE9BQ0lULEtBQU1ZLEdBQVdULEVBQUlVLElBQVFMLElBQW1CTSxLQUFTQyxFQUFJQyxJQUFPYixFQUFBYyxHQUFBQyxRQUFBVixHQUFBLEtBS3hFRixFQUFBQSxNQUFJYSxFQUFKYixJQU1KLFFBQUFjLEtBS1EsR0FBQWQsR0FBQUMsTUFBQUcsVUFBQUMsTUFBQWYsS0FBQUgsV0FBQWUsRUFKSmEsR0FJSVAsR0FBQSxFQUFBZCxFQUhKc0IsT0FHSWhCLEVBQUEsSUFISmdCLFFBR0ksa0JBQUEsU0FBQVAsRUFB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eEJBLE9BRENxQyxFQUFBcEYsVUFBQUMsT0FBQW9GLEVBQUF2RSxNQUFBc0UsRUFBQSxFQUFBQSxFQUFBLEVBQUEsR0FBQUUsRUFBQSxFQUFBQSxFQUFBRixFQUFBRSxJQUFBRCxFQUFBQyxFQUFBLEdBQUF0RixVQUFBc0YsRUFFREgsSUFBQUEsRUFBQUEsT0FDQSxJQUFBLEdBQUEzRSxHQUFPLEVBQVBBLEVBQUEwRSxFQUFBakYsT0FBQU8sR0FBQSxFQUNIMEUsRUFBQTFFLEdBQUF3RSxNQUFBL0MsS0FBQW9ELEVBekZnQixJQUFBRixHQUFBbEQsS0FBQSxLQUFBYyxFQThGUHdDLE9BQU1KLElBQUFBLEVBQUFILE1BQUEvQyxLQUFBb0QsR0FBTkUsUUE5Rk9oRixJQUFBLFNBQUFxRSxNQUFBLFdBbUdUVyxJQUFBQSxHQUFBQSxHQUFBQSxVQUFBQSxPQUFBQSxFQUFBQSxNQUFBQSxHQUFBQSxFQUFBQSxFQUFBQSxFQUFBQSxFQUFBQSxJQUFBQSxFQUFBQSxHQUFBQSxVQUFBQSxFQW5HUyxPQW9HRmQsZ0JBQVBuQyxHQUFBQSxHQUNITCxLQUFBd0MsT0FBQWUsbUJBQUFELEVBQUEsR0FBQUEsRUFBQSxNQXJHWUEsRUFBQUUsUUFBQXhELE1Bb0dUSyxPQUFPbUMsT0FBT08sTUFBTTFDLE9BQVFpRCxJQXBHbkJ0RCxTQUFBc0MsTUFnSGpCckUsRUFBV29DLE9BQU9yQixVQUFVZixTQWVoQ3dGLEVBQUk3QyxHQUFBQSxHQUlKTSxLQUFTMUMsS0FDTGUsRUFBWXJCLEdBR1BMLEtBSUQrQyxLQUNJRixFQUFBLEVBZ0xaLE9BSkdnRCxRQUFPekIsS0FDTmhDLEVBQVF5RCxPQUFPekIsTUFHWEssYUFBQUEsRUFBY21CLE9BQUFBLEVBQVF4RCxRQUFBQSIsImZpbGUiOiJsaWIvdW5pY29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOiBmYWN0b3J5KCk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuXG5jb25zdCBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbi8vIOiHquWumuS5ieS6i+S7tiDnsbvkvLwgbm9kZWpz5Lit55qEIEV2ZW50RW1pdHRlclxuY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvLyDlhYvpmobkuIDku70g5LqL5Lu2XG4gICAgICAgIHRoaXMuX21vbml0b3JfID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fbW9uaXRvcl8gfHwge30pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDnu5Hlrprkuovku7ZcbiAgICAgKiBAcGFyYW0gdHlwZSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0gZnVuIOS6i+S7tuaWueazlVxuICAgICAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9XG4gICAgICovXG4gICAgb24odHlwZSwgZnVuKSB7XG4gICAgICAgIGxldCBtb25pdG9yID0gdGhpcy5fbW9uaXRvcl8gfHwgKHRoaXMuX21vbml0b3JfID0ge30pO1xuICAgICAgICBtb25pdG9yW3R5cGVdIHx8IChtb25pdG9yW3R5cGVdID0gW10pO1xuICAgICAgICBtb25pdG9yW3R5cGVdLnB1c2goZnVuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yik5pat5piv5ZCm6L+Y5pyJ54m55a6a5LqL5Lu2XG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBoYXNFdmVudCh0eXBlKSB7XG4gICAgICAgIGxldCBtb25pdG9yID0gdGhpcy5fbW9uaXRvcl8gJiYgdGhpcy5fbW9uaXRvcl9bdHlwZV0gfHwgW107XG4gICAgICAgIHJldHVybiBtb25pdG9yLmxlbmd0aCA+IDAgfHwgISF0aGlzWydvbicgKyB0eXBlXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj6rmnInmiafooYzkuIDmrKHnmoTkuovku7ZcbiAgICAgKiBAcGFyYW0gdHlwZSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0gZnVuIOS6i+S7tuaWueazlVxuICAgICAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9XG4gICAgICovXG4gICAgb25lYyh0eXBlLCBmdW4pIHtcbiAgICAgICAgZnVuY3Rpb24gZnVueCgpIHtcbiAgICAgICAgICAgIGZ1bi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy5vZmYodHlwZSwgZnVueCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbih0eXBlLCBmdW54KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56e76Zmk5LqL5Lu2XG4gICAgICogQHBhcmFtIHR5cGUg5LqL5Lu25ZCN56ewXG4gICAgICogQHBhcmFtIGZ1biDkuovku7bmlrnms5VcbiAgICAgKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfVxuICAgICAqL1xuICAgIG9mZih0eXBlLCBmdW4pIHtcbiAgICAgICAgbGV0IG1vbml0b3IgPSB0aGlzLl9tb25pdG9yXztcbiAgICAgICAgaWYgKG1vbml0b3IpIHtcbiAgICAgICAgICAgIGlmIChmdW4pIHtcbiAgICAgICAgICAgICAgICBsZXQgZXMgPSBtb25pdG9yW3R5cGVdO1xuICAgICAgICAgICAgICAgIGlmIChlcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlcy5pbmRleE9mKGZ1bik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1vbml0b3JbdHlwZV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9tb25pdG9yXztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDop6blj5Hkuovku7ZcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0geyp9IGFnIOS8oOmAkueahOWPguaVsFxuICAgICAqL1xuICAgIGVtaXQodHlwZSwgLi4uYWcpIHtcbiAgICAgICAgbGV0IGVzID0gdGhpcy5fbW9uaXRvcl8gJiYgdGhpcy5fbW9uaXRvcl9bdHlwZV0gfHwgW107XG4gICAgICAgIGlmIChlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBlc1tpXS5hcHBseSh0aGlzLCBhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9uRnVuID0gdGhpc1snb24nICsgdHlwZV07XG4gICAgICAgIG9uRnVuICYmIG9uRnVuLmFwcGx5KHRoaXMsIGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5omp5bGV5pys6LqrXG4gICAgICovXG4gICAgYXNzaWduKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKXtcbiAgICAgICAgICAgIHRoaXMuYXNzaWduKHtbYXJnc1swXV06YXJnc1sxXX0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGFyZ3MudW5zaGlmdCh0aGlzKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24uYXBwbHkoT2JqZWN0LCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbi8qKlxuICogdW5pY29tIOiBlOmAmiDmg7PliLDkuK3lm73ogZTpgJrlsLHmg7PliLDkuobov5nkuKrlkI3lrZcgLV8tXG4gKiDnm67nmoTvvIzmj5Dkvpt2dWUg5YWo5bGA55qE6L2s5Y+R5py65Yi2XG4gKiBbMjAxOC0wMS0xOF0g5aKe5Yqg5YiG57uE77yMIOWPr+S7peebtOaOpeiOt+WPluWIhue7hOeahCB2bVxuICovXG5cbmxldCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuLy8g5LqL5Lu2XG5sZXQgdW5pY29tID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbi8vIHZt5a655ZmoXG5sZXQgdm1Ib29rcyA9IFtdLCBldkhvb2tzID0gW11cblxuLy8gZ3JvdXAgTmFtZVxubGV0IHVuaWNvbUdyb3VwTmFtZSA9ICcnXG5cbi8vIOWIhue7hFxubGV0IGdyb3VwRm9yVm0gPSB7fVxuXG4vLyDlkb3lkI0g5ZSv5LiAXG5sZXQgaWRGb3JWbSA9IHt9XG5sZXQgdW5pY29tSWROYW1lID0gJydcblxuLy8g6L2s5YyW5Li65LiA57u05pWw57uEXG5mdW5jdGlvbiB0b09uZUFycmF5KGRhdGEsIHRoYXQsIGFyciA9IFtdKXtcbiAgICBpZih0b1N0cmluZy5jYWxsKGRhdGEpLnRvTG93ZXJDYXNlKCkgPT0gJ1tvYmplY3QgYXJyYXldJyl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8IGRhdGEubGVuZ3RoOyBpKz0xKXtcbiAgICAgICAgICAgIHRvT25lQXJyYXkoZGF0YVtpXSwgdGhhdCwgYXJyKVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoZGF0YSl7XG4gICAgICAgIGxldCBrZXkgPSBTdHJpbmcoZGF0YSlcbiAgICAgICAgaWYodGhhdCl7XG4gICAgICAgICAgICBpZighZ3JvdXBGb3JWbVtrZXldKXtcbiAgICAgICAgICAgICAgICBncm91cEZvclZtW2tleV0gPSBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JvdXBGb3JWbVtrZXldLnB1c2godGhhdClcbiAgICAgICAgfVxuICAgICAgICBhcnIucHVzaChrZXkpXG4gICAgfVxuICAgIHJldHVybiBhcnJcbn1cblxuLy8g5Lqk5o2iIHRoaXMg55SoXG5mdW5jdGlvbiBzZW5kU3dpdGNoKGZuLCB0aGF0KXtcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGFyZyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgbGV0IHRvID0gYXJnLnNoaWZ0KClcbiAgICAgICAgbGV0IGlzSWQgPSBhcmcuc2hpZnQoKVxuICAgICAgICAvLyAj55uu5qCH5LiN5a2Y5ZyoICBA5YiG57uE5LiN5a2Y5ZyoXG4gICAgICAgIGlmKCEhdG8gJiYgKChpc0lkICYmIHRoYXRbdW5pY29tSWROYW1lXSAhPSB0bykgfHwgKCFpc0lkICYmICghdGhhdFt1bmljb21Hcm91cE5hbWVdIHx8IHRoYXRbdW5pY29tR3JvdXBOYW1lXS5pbmRleE9mKHRvKSA8IDApKSkpe1xuICAgICAgICAgICAgLy8g55uu5qCH5LiN5a2Y5ZyoXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvLyDmiafooYxmblxuICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmcpXG4gICAgfVxufVxuXG4vLyDlj5HpgIHlrrnlmahcbmZ1bmN0aW9uIHNlbmQoKSB7XG4gICAgbGV0IGFyZyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICBcbiAgICBsZXQgdG8gPSAnJywgaXNJZCA9IGZhbHNlXG4gICAgbGV0IGtleSA9IFN0cmluZyhhcmdbMF0pLnJlcGxhY2UoLyhbQCNdKShbXkAjXSopJC8sIGZ1bmN0aW9uKHMwLCBzMSwgczIpe1xuICAgICAgICB0byA9IHMyXG4gICAgICAgIGlzSWQgPSBzMSA9PSAnIydcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfSlcbiAgICBhcmcuc3BsaWNlKDAsIDEsIGtleSwgdG8sIGlzSWQsIHRoaXMpXG4gICAgLy9jb25zb2xlLmxvZygnYXJnOicsIGFyZylcbiAgICB1bmljb20uZW1pdC5hcHBseSh1bmljb20sIGFyZylcbn1cblxuLy8g5a6J6KOF6YWN572uIOWQjeensFxuZnVuY3Rpb24gaW5zdGFsbCh2dWUsIHtcbiAgICBuYW1lID0gJ3VuaWNvbScsXG4gICAgc2VuZE5hbWUsXG4gICAgZ3JvdXBOYW1lLFxuICAgIGlkTmFtZVxufSA9IHt9KSB7XG4gICAgaWYoaW5zdGFsbC5pbnN0YWxsZWQpe1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgaW5zdGFsbC5pbnN0YWxsZWQgPSB0cnVlXG4gICAgXG4gICAgdnVlLnByb3RvdHlwZVsnJCcgKyAoc2VuZE5hbWUgfHwgKG5hbWUgKyAnU2VuZCcpKV0gPSBzZW5kXG5cbiAgICB1bmljb21Hcm91cE5hbWUgPSBncm91cE5hbWUgfHwgKG5hbWUgKyAnTmFtZScpXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodnVlLnByb3RvdHlwZSwgJyQnICsgKGdyb3VwTmFtZSB8fCAobmFtZSArICdWTScpKSwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdyb3VwRm9yVm1cbiAgICAgICAgfVxuICAgIH0pXG4gICAgXG5cbiAgICB1bmljb21JZE5hbWUgPSBpZE5hbWUgfHwgKG5hbWUgKyAnSWQnKVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZ1ZS5wcm90b3R5cGUsICckJyArIHVuaWNvbUlkTmFtZSwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkRm9yVm1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB2dWUubWl4aW4oe1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgLy8g5ZG95ZCNXG4gICAgICAgICAgICBbdW5pY29tSWROYW1lXTp7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOWIm+W7uueahOaXtuWAme+8jOWKoOWFpeS6i+S7tuacuuWItlxuICAgICAgICBiZWZvcmVDcmVhdGUgKCkge1xuICAgICAgICAgICAgbGV0IG9wdCA9IHRoaXMuJG9wdGlvbnNcbiAgICAgICAgICAgIGxldCB1cyA9IG9wdFtuYW1lXVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh1cylcbiAgICAgICAgICAgIGlmKHVzKXtcbiAgICAgICAgICAgICAgICBsZXQgdW5pID0ge31cbiAgICAgICAgICAgICAgICBmb3IobGV0IG4gaW4gdXMpe1xuICAgICAgICAgICAgICAgICAgICB1bmlbbl0gPSBbXVxuICAgICAgICAgICAgICAgICAgICBpZih0b1N0cmluZy5jYWxsKHVzW25dKS50b0xvd2VyQ2FzZSgpICE9ICdbb2JqZWN0IGFycmF5XScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNbbl0gPSBbdXNbbl1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTx1c1tuXS5sZW5ndGg7IGkrPTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndXNbbl1baV0nLCB1c1tuXVtpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzW25dW2ldKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeGZuID0gc2VuZFN3aXRjaCh1c1tuXVtpXSwgdGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlbbl0ucHVzaCh4Zm4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pY29tLm9uKG4sIHhmbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldkhvb2tzLnB1c2godW5pKVxuICAgICAgICAgICAgICAgIHZtSG9va3MucHVzaCh0aGlzKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDlkb3lkI3liIbnu4RcbiAgICAgICAgICAgIHRoaXNbdW5pY29tR3JvdXBOYW1lXSA9IHRvT25lQXJyYXkob3B0W3VuaWNvbUdyb3VwTmFtZV0sIHRoaXMpXG5cbiAgICAgICAgICAgIC8vIOWunuS+i+WRveWQjSDllK/kuIBcbiAgICAgICAgICAgIGxldCBpZCA9ICh0aGlzLiRvcHRpb25zLnByb3BzRGF0YSB8fCB7fSkudW5pY29tSWRcbiAgICAgICAgICAgIGlmKGlkKXtcbiAgICAgICAgICAgICAgICBpZEZvclZtW2lkXSA9IHRoaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8g5YWo5bGA5re35ZCI77yMIOmUgOavgeWunuS+i+eahOaXtuWAme+8jOmUgOavgeS6i+S7tlxuICAgICAgICBkZXN0cm95ZWQgKCkge1xuICAgICAgICAgICAgLy8g6ZSA5q+B77yMIOmUgOavgSBob29rcyDkuK3nmoTlgLxcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHZtSG9va3MuaW5kZXhPZih0aGlzKVxuICAgICAgICAgICAgaWYoaW5kZXggPj0gMCl7XG4gICAgICAgICAgICAgICAgbGV0IHVuaSA9IGV2SG9va3NbaW5kZXhdXG5cbiAgICAgICAgICAgICAgICAvLyDnp7vpmaTnvJPlrZhcbiAgICAgICAgICAgICAgICB2bUhvb2tzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgICBldkhvb2tzLnNwbGljZShpbmRleCwgMSlcblxuICAgICAgICAgICAgICAgIC8vIOenu+mZpOS6i+S7tlxuICAgICAgICAgICAgICAgIGZvcihsZXQgbiBpbiB1bmkpe1xuICAgICAgICAgICAgICAgICAgICB1bmlbbl0uZm9yRWFjaChmdW5jdGlvbihmbil7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmljb20ub2ZmKG4sIGZuKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5YiG57uE77yM5LiA5a+55aSa77yMIOWNleS4qnZt5Y+v5Lul5aSa5Liq5YiG57uE5ZCN56ewXG4gICAgICAgICAgICB0aGlzW3VuaWNvbUdyb3VwTmFtZV0uZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBncyA9IGdyb3VwRm9yVm1bbmFtZV1cbiAgICAgICAgICAgICAgICBpZihncyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGdzLmluZGV4T2YodGhpcylcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPiAtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBncy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoZ3MubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGdyb3VwRm9yVm1bbmFtZV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIOenu+mZpOWUr+S4gElEXG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLnVuaWNvbUlkXG4gICAgICAgICAgICBpZihpZCAmJiBpZEZvclZtW2lkXSl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGlkRm9yVm1baWRdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5L2/55SoIOWSjCB3YXRjaCDkuIDmoLfnmoTmt7flkIjmnLrliLZcbiAgICBsZXQgbWVyZ2UgPSB2dWUuY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llc1xuICAgIG1lcmdlW25hbWVdID0gbWVyZ2Uud2F0Y2hcbiAgICAvLyBtZXJnZVt1bmljb21Hcm91cE5hbWVdID0gbWVyZ2UubWV0aG9kc1xuICAgIG1lcmdlW3VuaWNvbUdyb3VwTmFtZV0gPSBmdW5jdGlvbihwYXJlbnRWYWwsIGNoaWxkVmFsKXtcbiAgICAgICAgbGV0IHggPSBbXVxuICAgICAgICBpZihwYXJlbnRWYWwpe1xuICAgICAgICAgICAgeC5wdXNoKHBhcmVudFZhbClcbiAgICAgICAgfVxuICAgICAgICBpZihjaGlsZFZhbCl7XG4gICAgICAgICAgICB4LnB1c2goY2hpbGRWYWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHhcbiAgICB9XG59XG5cblxuaWYod2luZG93LlZ1ZSl7XG4gICAgaW5zdGFsbCh3aW5kb3cuVnVlKVxufVxuXG5yZXR1cm4ge0V2ZW50RW1pdHRlciwgdW5pY29tLCBpbnN0YWxsfVxuXG59KSkpIl19