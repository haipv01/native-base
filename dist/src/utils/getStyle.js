var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}module.exports=function(style){if(_lodash2.default.isArray(style)){return _lodash2.default.reduce(style,function(merged,nextStyle){return _extends({},merged,nextStyle);},{});}return style;};
//# sourceMappingURL=getStyle.js.map