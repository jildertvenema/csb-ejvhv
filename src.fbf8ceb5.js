parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"zMvG":[function(require,module,exports) {
module.exports="/csb-ejvhv/xbox.9f71681f.png";
},{}],"H99C":[function(require,module,exports) {
require("./styles.css");var e=require("./xbox.png"),t=document.createElement("div");t.className="_jildert_achievement_wrapper",t.style.display="none";var i=function(e,i){var n=document.createElement(i||"div");return n.className=e,t.appendChild(n),n};i("_jildert_achievement_left"),i("_jildert_achievement_right"),i("_jildert_achievement_middle");var n=i("_jildert_achievement_image");n.style.backgroundImage="url("+e+")",i("_jildert_achievement_title","span"),i("_jildert_achievement_description","span"),document.body.appendChild(t);var a=function(e,t){t=t||"Achievement unlocked";var i=document.getElementsByClassName("_jildert_achievement_wrapper")[0].cloneNode(!0);i.getElementsByClassName("_jildert_achievement_title")[0].innerText=t,i.getElementsByClassName("_jildert_achievement_description")[0].innerText=e,i.style.display="block",document.body.appendChild(i)};a("Jammer ouwe"),module.exports=a;
},{"./styles.css":"D9Nj","./xbox.png":"zMvG"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-ejvhv/src.fbf8ceb5.js.map