(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function d(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(u){if(u.ep)return;u.ep=!0;const h=d(u);fetch(u.href,h)}})();function Mf(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Qc={exports:{}},ms={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function nv(){if(Gg)return ms;Gg=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function d(c,u,h){var g=null;if(h!==void 0&&(g=""+h),u.key!==void 0&&(g=""+u.key),"key"in u){h={};for(var x in u)x!=="key"&&(h[x]=u[x])}else h=u;return u=h.ref,{$$typeof:s,type:c,key:g,ref:u!==void 0?u:null,props:h}}return ms.Fragment=r,ms.jsx=d,ms.jsxs=d,ms}var Yg;function iv(){return Yg||(Yg=1,Qc.exports=nv()),Qc.exports}var i=iv(),Kc={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function av(){if(Vg)return le;Vg=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),g=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),_=Symbol.iterator;function V(w){return w===null||typeof w!="object"?null:(w=_&&w[_]||w["@@iterator"],typeof w=="function"?w:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,R={};function G(w,B,I){this.props=w,this.context=B,this.refs=R,this.updater=I||N}G.prototype.isReactComponent={},G.prototype.setState=function(w,B){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,B,"setState")},G.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function W(){}W.prototype=G.prototype;function O(w,B,I){this.props=w,this.context=B,this.refs=R,this.updater=I||N}var J=O.prototype=new W;J.constructor=O,q(J,G.prototype),J.isPureReactComponent=!0;var ee=Array.isArray;function oe(){}var K={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function ae(w,B,I){var Q=I.ref;return{$$typeof:s,type:w,key:B,ref:Q!==void 0?Q:null,props:I}}function Ue(w,B){return ae(w.type,B,w.props)}function Le(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function Be(w){var B={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(I){return B[I]})}var st=/\/+/g;function Xe(w,B){return typeof w=="object"&&w!==null&&w.key!=null?Be(""+w.key):B.toString(36)}function Me(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(oe,oe):(w.status="pending",w.then(function(B){w.status==="pending"&&(w.status="fulfilled",w.value=B)},function(B){w.status==="pending"&&(w.status="rejected",w.reason=B)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function D(w,B,I,Q,se){var ue=typeof w;(ue==="undefined"||ue==="boolean")&&(w=null);var je=!1;if(w===null)je=!0;else switch(ue){case"bigint":case"string":case"number":je=!0;break;case"object":switch(w.$$typeof){case s:case r:je=!0;break;case v:return je=w._init,D(je(w._payload),B,I,Q,se)}}if(je)return se=se(w),je=Q===""?"."+Xe(w,0):Q,ee(se)?(I="",je!=null&&(I=je.replace(st,"$&/")+"/"),D(se,B,I,"",function(Ea){return Ea})):se!=null&&(Le(se)&&(se=Ue(se,I+(se.key==null||w&&w.key===se.key?"":(""+se.key).replace(st,"$&/")+"/")+je)),B.push(se)),1;je=0;var ot=Q===""?".":Q+":";if(ee(w))for(var He=0;He<w.length;He++)Q=w[He],ue=ot+Xe(Q,He),je+=D(Q,B,I,ue,se);else if(He=V(w),typeof He=="function")for(w=He.call(w),He=0;!(Q=w.next()).done;)Q=Q.value,ue=ot+Xe(Q,He++),je+=D(Q,B,I,ue,se);else if(ue==="object"){if(typeof w.then=="function")return D(Me(w),B,I,Q,se);throw B=String(w),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return je}function X(w,B,I){if(w==null)return w;var Q=[],se=0;return D(w,Q,"","",function(ue){return B.call(I,ue,se++)}),Q}function F(w){if(w._status===-1){var B=w._result;B=B(),B.then(function(I){(w._status===0||w._status===-1)&&(w._status=1,w._result=I)},function(I){(w._status===0||w._status===-1)&&(w._status=2,w._result=I)}),w._status===-1&&(w._status=0,w._result=B)}if(w._status===1)return w._result.default;throw w._result}var ve=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},we={map:X,forEach:function(w,B,I){X(w,function(){B.apply(this,arguments)},I)},count:function(w){var B=0;return X(w,function(){B++}),B},toArray:function(w){return X(w,function(B){return B})||[]},only:function(w){if(!Le(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return le.Activity=j,le.Children=we,le.Component=G,le.Fragment=d,le.Profiler=u,le.PureComponent=O,le.StrictMode=c,le.Suspense=y,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,le.__COMPILER_RUNTIME={__proto__:null,c:function(w){return K.H.useMemoCache(w)}},le.cache=function(w){return function(){return w.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(w,B,I){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var Q=q({},w.props),se=w.key;if(B!=null)for(ue in B.key!==void 0&&(se=""+B.key),B)!Y.call(B,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&B.ref===void 0||(Q[ue]=B[ue]);var ue=arguments.length-2;if(ue===1)Q.children=I;else if(1<ue){for(var je=Array(ue),ot=0;ot<ue;ot++)je[ot]=arguments[ot+2];Q.children=je}return ae(w.type,se,Q)},le.createContext=function(w){return w={$$typeof:g,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:h,_context:w},w},le.createElement=function(w,B,I){var Q,se={},ue=null;if(B!=null)for(Q in B.key!==void 0&&(ue=""+B.key),B)Y.call(B,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(se[Q]=B[Q]);var je=arguments.length-2;if(je===1)se.children=I;else if(1<je){for(var ot=Array(je),He=0;He<je;He++)ot[He]=arguments[He+2];se.children=ot}if(w&&w.defaultProps)for(Q in je=w.defaultProps,je)se[Q]===void 0&&(se[Q]=je[Q]);return ae(w,ue,se)},le.createRef=function(){return{current:null}},le.forwardRef=function(w){return{$$typeof:x,render:w}},le.isValidElement=Le,le.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:F}},le.memo=function(w,B){return{$$typeof:m,type:w,compare:B===void 0?null:B}},le.startTransition=function(w){var B=K.T,I={};K.T=I;try{var Q=w(),se=K.S;se!==null&&se(I,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(oe,ve)}catch(ue){ve(ue)}finally{B!==null&&I.types!==null&&(B.types=I.types),K.T=B}},le.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},le.use=function(w){return K.H.use(w)},le.useActionState=function(w,B,I){return K.H.useActionState(w,B,I)},le.useCallback=function(w,B){return K.H.useCallback(w,B)},le.useContext=function(w){return K.H.useContext(w)},le.useDebugValue=function(){},le.useDeferredValue=function(w,B){return K.H.useDeferredValue(w,B)},le.useEffect=function(w,B){return K.H.useEffect(w,B)},le.useEffectEvent=function(w){return K.H.useEffectEvent(w)},le.useId=function(){return K.H.useId()},le.useImperativeHandle=function(w,B,I){return K.H.useImperativeHandle(w,B,I)},le.useInsertionEffect=function(w,B){return K.H.useInsertionEffect(w,B)},le.useLayoutEffect=function(w,B){return K.H.useLayoutEffect(w,B)},le.useMemo=function(w,B){return K.H.useMemo(w,B)},le.useOptimistic=function(w,B){return K.H.useOptimistic(w,B)},le.useReducer=function(w,B,I){return K.H.useReducer(w,B,I)},le.useRef=function(w){return K.H.useRef(w)},le.useState=function(w){return K.H.useState(w)},le.useSyncExternalStore=function(w,B,I){return K.H.useSyncExternalStore(w,B,I)},le.useTransition=function(){return K.H.useTransition()},le.version="19.2.5",le}var Xg;function jd(){return Xg||(Xg=1,Kc.exports=av()),Kc.exports}var k=jd();const sv=Mf(k);var Zc={exports:{}},xs={},Jc={exports:{}},$c={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function lv(){return Ig||(Ig=1,(function(s){function r(D,X){var F=D.length;D.push(X);e:for(;0<F;){var ve=F-1>>>1,we=D[ve];if(0<u(we,X))D[ve]=X,D[F]=we,F=ve;else break e}}function d(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var X=D[0],F=D.pop();if(F!==X){D[0]=F;e:for(var ve=0,we=D.length,w=we>>>1;ve<w;){var B=2*(ve+1)-1,I=D[B],Q=B+1,se=D[Q];if(0>u(I,F))Q<we&&0>u(se,I)?(D[ve]=se,D[Q]=F,ve=Q):(D[ve]=I,D[B]=F,ve=B);else if(Q<we&&0>u(se,F))D[ve]=se,D[Q]=F,ve=Q;else break e}}return X}function u(D,X){var F=D.sortIndex-X.sortIndex;return F!==0?F:D.id-X.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var g=Date,x=g.now();s.unstable_now=function(){return g.now()-x}}var y=[],m=[],v=1,j=null,_=3,V=!1,N=!1,q=!1,R=!1,G=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function J(D){for(var X=d(m);X!==null;){if(X.callback===null)c(m);else if(X.startTime<=D)c(m),X.sortIndex=X.expirationTime,r(y,X);else break;X=d(m)}}function ee(D){if(q=!1,J(D),!N)if(d(y)!==null)N=!0,oe||(oe=!0,Be());else{var X=d(m);X!==null&&Me(ee,X.startTime-D)}}var oe=!1,K=-1,Y=5,ae=-1;function Ue(){return R?!0:!(s.unstable_now()-ae<Y)}function Le(){if(R=!1,oe){var D=s.unstable_now();ae=D;var X=!0;try{e:{N=!1,q&&(q=!1,W(K),K=-1),V=!0;var F=_;try{t:{for(J(D),j=d(y);j!==null&&!(j.expirationTime>D&&Ue());){var ve=j.callback;if(typeof ve=="function"){j.callback=null,_=j.priorityLevel;var we=ve(j.expirationTime<=D);if(D=s.unstable_now(),typeof we=="function"){j.callback=we,J(D),X=!0;break t}j===d(y)&&c(y),J(D)}else c(y);j=d(y)}if(j!==null)X=!0;else{var w=d(m);w!==null&&Me(ee,w.startTime-D),X=!1}}break e}finally{j=null,_=F,V=!1}X=void 0}}finally{X?Be():oe=!1}}}var Be;if(typeof O=="function")Be=function(){O(Le)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,Xe=st.port2;st.port1.onmessage=Le,Be=function(){Xe.postMessage(null)}}else Be=function(){G(Le,0)};function Me(D,X){K=G(function(){D(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(D){switch(_){case 1:case 2:case 3:var X=3;break;default:X=_}var F=_;_=X;try{return D()}finally{_=F}},s.unstable_requestPaint=function(){R=!0},s.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var F=_;_=D;try{return X()}finally{_=F}},s.unstable_scheduleCallback=function(D,X,F){var ve=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ve+F:ve):F=ve,D){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=F+we,D={id:v++,callback:X,priorityLevel:D,startTime:F,expirationTime:we,sortIndex:-1},F>ve?(D.sortIndex=F,r(m,D),d(y)===null&&D===d(m)&&(q?(W(K),K=-1):q=!0,Me(ee,F-ve))):(D.sortIndex=we,r(y,D),N||V||(N=!0,oe||(oe=!0,Be()))),D},s.unstable_shouldYield=Ue,s.unstable_wrapCallback=function(D){var X=_;return function(){var F=_;_=X;try{return D.apply(this,arguments)}finally{_=F}}}})($c)),$c}var Wg;function rv(){return Wg||(Wg=1,Jc.exports=lv()),Jc.exports}var Pc={exports:{}},lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function ov(){if(Qg)return lt;Qg=1;var s=jd();function r(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(r(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},u=Symbol.for("react.portal");function h(y,m,v){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:j==null?null:""+j,children:y,containerInfo:m,implementation:v}}var g=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,lt.createPortal=function(y,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return h(y,m,null,v)},lt.flushSync=function(y){var m=g.T,v=c.p;try{if(g.T=null,c.p=2,y)return y()}finally{g.T=m,c.p=v,c.d.f()}},lt.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,c.d.C(y,m))},lt.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},lt.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var v=m.as,j=x(v,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,V=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?c.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:j,integrity:_,fetchPriority:V}):v==="script"&&c.d.X(y,{crossOrigin:j,integrity:_,fetchPriority:V,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},lt.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=x(m.as,m.crossOrigin);c.d.M(y,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&c.d.M(y)},lt.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,j=x(v,m.crossOrigin);c.d.L(y,v,{crossOrigin:j,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},lt.preloadModule=function(y,m){if(typeof y=="string")if(m){var v=x(m.as,m.crossOrigin);c.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else c.d.m(y)},lt.requestFormReset=function(y){c.d.r(y)},lt.unstable_batchedUpdates=function(y,m){return y(m)},lt.useFormState=function(y,m,v){return g.H.useFormState(y,m,v)},lt.useFormStatus=function(){return g.H.useHostTransitionStatus()},lt.version="19.2.5",lt}var Kg;function cv(){if(Kg)return Pc.exports;Kg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),Pc.exports=ov(),Pc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function dv(){if(Zg)return xs;Zg=1;var s=rv(),r=jd(),d=cv();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(h(e)!==e)throw Error(c(188))}function m(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return y(l),e;if(o===a)return y(l),t;o=o.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=o;else{for(var p=!1,f=l.child;f;){if(f===n){p=!0,n=l,a=o;break}if(f===a){p=!0,a=l,n=o;break}f=f.sibling}if(!p){for(f=o.child;f;){if(f===n){p=!0,n=o,a=l;break}if(f===a){p=!0,a=o,n=l;break}f=f.sibling}if(!p)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,_=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),O=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),Ue=Symbol.for("react.memo_cache_sentinel"),Le=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=Le&&e[Le]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function Xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case G:return"Profiler";case R:return"StrictMode";case ee:return"Suspense";case oe:return"SuspenseList";case ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case O:return e.displayName||"Context";case W:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:Xe(e.type)||"Memo";case Y:t=e._payload,e=e._init;try{return Xe(e(t))}catch{}}return null}var Me=Array.isArray,D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ve=[],we=-1;function w(e){return{current:e}}function B(e){0>we||(e.current=ve[we],ve[we]=null,we--)}function I(e,t){we++,ve[we]=e.current,e.current=t}var Q=w(null),se=w(null),ue=w(null),je=w(null);function ot(e,t){switch(I(ue,t),I(se,e),I(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?dg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=dg(t),e=ug(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(Q),I(Q,e)}function He(){B(Q),B(se),B(ue)}function Ea(e){e.memoizedState!==null&&I(je,e);var t=Q.current,n=ug(t,e.type);t!==n&&(I(se,e),I(Q,n))}function Gs(e){se.current===e&&(B(Q),B(se)),je.current===e&&(B(je),ps._currentValue=F)}var Tr,Hd;function ii(e){if(Tr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tr=t&&t[1]||"",Hd=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tr+e+Hd}var Cr=!1;function Rr(e,t){if(!e||Cr)return"";Cr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(M){var C=M}Reflect.construct(e,[],H)}else{try{H.call()}catch(M){C=M}e.call(H.prototype)}}else{try{throw Error()}catch(M){C=M}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(M){if(M&&C&&typeof M.stack=="string")return[M.stack,C.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),p=o[0],f=o[1];if(p&&f){var b=p.split(`
`),T=f.split(`
`);for(l=a=0;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;for(;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;if(a===b.length||l===T.length)for(a=b.length-1,l=T.length-1;1<=a&&0<=l&&b[a]!==T[l];)l--;for(;1<=a&&0<=l;a--,l--)if(b[a]!==T[l]){if(a!==1||l!==1)do if(a--,l--,0>l||b[a]!==T[l]){var U=`
`+b[a].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=a&&0<=l);break}}}finally{Cr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ii(n):""}function Mm(e,t){switch(e.tag){case 26:case 27:case 5:return ii(e.type);case 16:return ii("Lazy");case 13:return e.child!==t&&t!==null?ii("Suspense Fallback"):ii("Suspense");case 19:return ii("SuspenseList");case 0:case 15:return Rr(e.type,!1);case 11:return Rr(e.type.render,!1);case 1:return Rr(e.type,!0);case 31:return ii("Activity");default:return""}}function Gd(e){try{var t="",n=null;do t+=Mm(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var zr=Object.prototype.hasOwnProperty,Or=s.unstable_scheduleCallback,Mr=s.unstable_cancelCallback,Dm=s.unstable_shouldYield,qm=s.unstable_requestPaint,bt=s.unstable_now,_m=s.unstable_getCurrentPriorityLevel,Yd=s.unstable_ImmediatePriority,Vd=s.unstable_UserBlockingPriority,Ys=s.unstable_NormalPriority,Um=s.unstable_LowPriority,Xd=s.unstable_IdlePriority,Lm=s.log,Bm=s.unstable_setDisableYieldValue,Sa=null,jt=null;function zn(e){if(typeof Lm=="function"&&Bm(e),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(Sa,e)}catch{}}var wt=Math.clz32?Math.clz32:Ym,Hm=Math.log,Gm=Math.LN2;function Ym(e){return e>>>=0,e===0?32:31-(Hm(e)/Gm|0)|0}var Vs=256,Xs=262144,Is=4194304;function ai(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ws(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,o=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~o,a!==0?l=ai(a):(p&=f,p!==0?l=ai(p):n||(n=f&~e,n!==0&&(l=ai(n))))):(f=a&~o,f!==0?l=ai(f):p!==0?l=ai(p):n||(n=a&~e,n!==0&&(l=ai(n)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:l}function ka(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Vm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Id(){var e=Is;return Is<<=1,(Is&62914560)===0&&(Is=4194304),e}function Dr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Na(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xm(e,t,n,a,l,o){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var f=e.entanglements,b=e.expirationTimes,T=e.hiddenUpdates;for(n=p&~n;0<n;){var U=31-wt(n),H=1<<U;f[U]=0,b[U]=-1;var C=T[U];if(C!==null)for(T[U]=null,U=0;U<C.length;U++){var M=C[U];M!==null&&(M.lane&=-536870913)}n&=~H}a!==0&&Wd(e,a,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(p&~t))}function Wd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-wt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Qd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-wt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Kd(e,t){var n=t&-t;return n=(n&42)!==0?1:qr(n),(n&(e.suspendedLanes|t))!==0?0:n}function qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _r(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zd(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Dg(e.type))}function Jd(e,t){var n=X.p;try{return X.p=e,t()}finally{X.p=n}}var On=Math.random().toString(36).slice(2),et="__reactFiber$"+On,ut="__reactProps$"+On,Ti="__reactContainer$"+On,Ur="__reactEvents$"+On,Im="__reactListeners$"+On,Wm="__reactHandles$"+On,$d="__reactResources$"+On,Aa="__reactMarker$"+On;function Lr(e){delete e[et],delete e[ut],delete e[Ur],delete e[Im],delete e[Wm]}function Ci(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ti]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yg(e);e!==null;){if(n=e[et])return n;e=yg(e)}return t}e=n,n=e.parentNode}return null}function Ri(e){if(e=e[et]||e[Ti]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ta(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function zi(e){var t=e[$d];return t||(t=e[$d]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Pe(e){e[Aa]=!0}var Pd=new Set,Fd={};function si(e,t){Oi(e,t),Oi(e+"Capture",t)}function Oi(e,t){for(Fd[e]=t,e=0;e<t.length;e++)Pd.add(t[e])}var Qm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),eu={},tu={};function Km(e){return zr.call(tu,e)?!0:zr.call(eu,e)?!1:Qm.test(e)?tu[e]=!0:(eu[e]=!0,!1)}function Qs(e,t,n){if(Km(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ks(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function un(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zm(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(p){n=""+p,o.call(this,p)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){if(!e._valueTracker){var t=nu(e)?"checked":"value";e._valueTracker=Zm(e,t,""+e[t])}}function iu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=nu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Zs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jm=/[\n"\\]/g;function Mt(e){return e.replace(Jm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Hr(e,t,n,a,l,o,p,f){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ot(t)):e.value!==""+Ot(t)&&(e.value=""+Ot(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Gr(e,p,Ot(t)):n!=null?Gr(e,p,Ot(n)):a!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Ot(f):e.removeAttribute("name")}function au(e,t,n,a,l,o,p,f){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Br(e);return}n=n!=null?""+Ot(n):"",t=t!=null?""+Ot(t):n,f||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Br(e)}function Gr(e,t,n){t==="number"&&Zs(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Mi(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function su(e,t,n){if(t!=null&&(t=""+Ot(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ot(n):""}function lu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(Me(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Ot(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Br(e)}function Di(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $m=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ru(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||$m.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ou(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&ru(e,l,a)}else for(var o in t)t.hasOwnProperty(o)&&ru(e,o,t[o])}function Yr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Js(e){return Fm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pn(){}var Vr=null;function Xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qi=null,_i=null;function cu(e){var t=Ri(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;e:switch(e=t.stateNode,t.type){case"input":if(Hr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[ut]||null;if(!l)throw Error(c(90));Hr(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&iu(a)}break e;case"textarea":su(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Mi(e,!!n.multiple,t,!1)}}}var Ir=!1;function du(e,t,n){if(Ir)return e(t,n);Ir=!0;try{var a=e(t);return a}finally{if(Ir=!1,(qi!==null||_i!==null)&&(Ul(),qi&&(t=qi,e=_i,_i=qi=null,cu(t),e)))for(t=0;t<e.length;t++)cu(e[t])}}function Ca(e,t){var n=e.stateNode;if(n===null)return null;var a=n[ut]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wr=!1;if(hn)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){Wr=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{Wr=!1}var Mn=null,Qr=null,$s=null;function uu(){if($s)return $s;var e,t=Qr,n=t.length,a,l="value"in Mn?Mn.value:Mn.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var p=n-e;for(a=1;a<=p&&t[n-a]===l[o-a];a++);return $s=l.slice(e,1<a?1-a:void 0)}function Ps(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fs(){return!0}function pu(){return!1}function pt(e){function t(n,a,l,o,p){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=o,this.target=p,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(o):o[f]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Fs:pu,this.isPropagationStopped=pu,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fs)},persist:function(){},isPersistent:Fs}),t}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=pt(li),za=j({},li,{view:0,detail:0}),ex=pt(za),Kr,Zr,Oa,tl=j({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$r,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oa&&(Oa&&e.type==="mousemove"?(Kr=e.screenX-Oa.screenX,Zr=e.screenY-Oa.screenY):Zr=Kr=0,Oa=e),Kr)},movementY:function(e){return"movementY"in e?e.movementY:Zr}}),hu=pt(tl),tx=j({},tl,{dataTransfer:0}),nx=pt(tx),ix=j({},za,{relatedTarget:0}),Jr=pt(ix),ax=j({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),sx=pt(ax),lx=j({},li,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rx=pt(lx),ox=j({},li,{data:0}),gu=pt(ox),cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function px(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ux[e])?!!t[e]:!1}function $r(){return px}var hx=j({},za,{key:function(e){if(e.key){var t=cx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$r,charCode:function(e){return e.type==="keypress"?Ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gx=pt(hx),fx=j({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fu=pt(fx),mx=j({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$r}),xx=pt(mx),yx=j({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=pt(yx),bx=j({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jx=pt(bx),wx=j({},li,{newState:0,oldState:0}),Ex=pt(wx),Sx=[9,13,27,32],Pr=hn&&"CompositionEvent"in window,Ma=null;hn&&"documentMode"in document&&(Ma=document.documentMode);var kx=hn&&"TextEvent"in window&&!Ma,mu=hn&&(!Pr||Ma&&8<Ma&&11>=Ma),xu=" ",yu=!1;function vu(e,t){switch(e){case"keyup":return Sx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ui=!1;function Nx(e,t){switch(e){case"compositionend":return bu(t);case"keypress":return t.which!==32?null:(yu=!0,xu);case"textInput":return e=t.data,e===xu&&yu?null:e;default:return null}}function Ax(e,t){if(Ui)return e==="compositionend"||!Pr&&vu(e,t)?(e=uu(),$s=Qr=Mn=null,Ui=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mu&&t.locale!=="ko"?null:t.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tx[e.type]:t==="textarea"}function wu(e,t,n,a){qi?_i?_i.push(a):_i=[a]:qi=a,t=Xl(t,"onChange"),0<t.length&&(n=new el("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Da=null,qa=null;function Cx(e){ag(e,0)}function nl(e){var t=Ta(e);if(iu(t))return e}function Eu(e,t){if(e==="change")return t}var Su=!1;if(hn){var Fr;if(hn){var eo="oninput"in document;if(!eo){var ku=document.createElement("div");ku.setAttribute("oninput","return;"),eo=typeof ku.oninput=="function"}Fr=eo}else Fr=!1;Su=Fr&&(!document.documentMode||9<document.documentMode)}function Nu(){Da&&(Da.detachEvent("onpropertychange",Au),qa=Da=null)}function Au(e){if(e.propertyName==="value"&&nl(qa)){var t=[];wu(t,qa,e,Xr(e)),du(Cx,t)}}function Rx(e,t,n){e==="focusin"?(Nu(),Da=t,qa=n,Da.attachEvent("onpropertychange",Au)):e==="focusout"&&Nu()}function zx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(qa)}function Ox(e,t){if(e==="click")return nl(t)}function Mx(e,t){if(e==="input"||e==="change")return nl(t)}function Dx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Dx;function _a(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!zr.call(t,l)||!Et(e[l],t[l]))return!1}return!0}function Tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cu(e,t){var n=Tu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tu(n)}}function Ru(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ru(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zs(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zs(e.document)}return t}function to(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var qx=hn&&"documentMode"in document&&11>=document.documentMode,Li=null,no=null,Ua=null,io=!1;function Ou(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;io||Li==null||Li!==Zs(a)||(a=Li,"selectionStart"in a&&to(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ua&&_a(Ua,a)||(Ua=a,a=Xl(no,"onSelect"),0<a.length&&(t=new el("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Li)))}function ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bi={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionrun:ri("Transition","TransitionRun"),transitionstart:ri("Transition","TransitionStart"),transitioncancel:ri("Transition","TransitionCancel"),transitionend:ri("Transition","TransitionEnd")},ao={},Mu={};hn&&(Mu=document.createElement("div").style,"AnimationEvent"in window||(delete Bi.animationend.animation,delete Bi.animationiteration.animation,delete Bi.animationstart.animation),"TransitionEvent"in window||delete Bi.transitionend.transition);function oi(e){if(ao[e])return ao[e];if(!Bi[e])return e;var t=Bi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mu)return ao[e]=t[n];return e}var Du=oi("animationend"),qu=oi("animationiteration"),_u=oi("animationstart"),_x=oi("transitionrun"),Ux=oi("transitionstart"),Lx=oi("transitioncancel"),Uu=oi("transitionend"),Lu=new Map,so="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");so.push("scrollEnd");function Kt(e,t){Lu.set(e,t),si(t,[e])}var il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Dt=[],Hi=0,lo=0;function al(){for(var e=Hi,t=lo=Hi=0;t<e;){var n=Dt[t];Dt[t++]=null;var a=Dt[t];Dt[t++]=null;var l=Dt[t];Dt[t++]=null;var o=Dt[t];if(Dt[t++]=null,a!==null&&l!==null){var p=a.pending;p===null?l.next=l:(l.next=p.next,p.next=l),a.pending=l}o!==0&&Bu(n,l,o)}}function sl(e,t,n,a){Dt[Hi++]=e,Dt[Hi++]=t,Dt[Hi++]=n,Dt[Hi++]=a,lo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ro(e,t,n,a){return sl(e,t,n,a),ll(e)}function ci(e,t){return sl(e,null,null,t),ll(e)}function Bu(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,o=e.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-wt(n),e=o.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),o):null}function ll(e){if(50<ss)throw ss=0,xc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Gi={};function Bx(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,a){return new Bx(e,t,n,a)}function oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gn(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rl(e,t,n,a,l,o){var p=0;if(a=e,typeof e=="function")oo(e)&&(p=1);else if(typeof e=="string")p=Xy(e,n,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ae:return e=St(31,n,t,l),e.elementType=ae,e.lanes=o,e;case q:return di(n.children,l,o,t);case R:p=8,l|=24;break;case G:return e=St(12,n,t,l|2),e.elementType=G,e.lanes=o,e;case ee:return e=St(13,n,t,l),e.elementType=ee,e.lanes=o,e;case oe:return e=St(19,n,t,l),e.elementType=oe,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:p=10;break e;case W:p=9;break e;case J:p=11;break e;case K:p=14;break e;case Y:p=16,a=null;break e}p=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=St(p,n,t,l),t.elementType=e,t.type=a,t.lanes=o,t}function di(e,t,n,a){return e=St(7,e,a,t),e.lanes=n,e}function co(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function Gu(e){var t=St(18,null,null,0);return t.stateNode=e,t}function uo(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Yu=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var n=Yu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Gd(t)},Yu.set(e,t),t)}return{value:e,source:t,stack:Gd(t)}}var Yi=[],Vi=0,ol=null,La=0,_t=[],Ut=0,Dn=null,tn=1,nn="";function fn(e,t){Yi[Vi++]=La,Yi[Vi++]=ol,ol=e,La=t}function Vu(e,t,n){_t[Ut++]=tn,_t[Ut++]=nn,_t[Ut++]=Dn,Dn=e;var a=tn;e=nn;var l=32-wt(a)-1;a&=~(1<<l),n+=1;var o=32-wt(t)+l;if(30<o){var p=l-l%5;o=(a&(1<<p)-1).toString(32),a>>=p,l-=p,tn=1<<32-wt(t)+l|n<<l|a,nn=o+e}else tn=1<<o|n<<l|a,nn=e}function po(e){e.return!==null&&(fn(e,1),Vu(e,1,0))}function ho(e){for(;e===ol;)ol=Yi[--Vi],Yi[Vi]=null,La=Yi[--Vi],Yi[Vi]=null;for(;e===Dn;)Dn=_t[--Ut],_t[Ut]=null,nn=_t[--Ut],_t[Ut]=null,tn=_t[--Ut],_t[Ut]=null}function Xu(e,t){_t[Ut++]=tn,_t[Ut++]=nn,_t[Ut++]=Dn,tn=t.id,nn=t.overflow,Dn=e}var tt=null,Re=null,me=!1,qn=null,Lt=!1,go=Error(c(519));function _n(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ba(qt(t,e)),go}function Iu(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[et]=e,t[ut]=a,n){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(n=0;n<rs.length;n++)he(rs[n],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),au(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),lu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||og(t.textContent,n)?(a.popover!=null&&(he("beforetoggle",t),he("toggle",t)),a.onScroll!=null&&he("scroll",t),a.onScrollEnd!=null&&he("scrollend",t),a.onClick!=null&&(t.onclick=pn),t=!0):t=!1,t||_n(e,!0)}function Wu(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 31:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:tt=tt.return}}function Xi(e){if(e!==tt)return!1;if(!me)return Wu(e),me=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Oc(e.type,e.memoizedProps)),n=!n),n&&Re&&_n(e),Wu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Re=xg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Re=xg(e)}else t===27?(t=Re,Jn(e.type)?(e=Uc,Uc=null,Re=e):Re=t):Re=tt?Ht(e.stateNode.nextSibling):null;return!0}function ui(){Re=tt=null,me=!1}function fo(){var e=qn;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),qn=null),e}function Ba(e){qn===null?qn=[e]:qn.push(e)}var mo=w(null),pi=null,mn=null;function Un(e,t,n){I(mo,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=mo.current,B(mo)}function xo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function yo(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var p=l.child;o=o.firstContext;e:for(;o!==null;){var f=o;o=l;for(var b=0;b<t.length;b++)if(f.context===t[b]){o.lanes|=n,f=o.alternate,f!==null&&(f.lanes|=n),xo(o.return,n,e),a||(p=null);break e}o=f.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(c(341));p.lanes|=n,o=p.alternate,o!==null&&(o.lanes|=n),xo(p,n,e),p=null}else p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===e){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function Ii(e,t,n,a){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(c(387));if(p=p.memoizedProps,p!==null){var f=l.type;Et(l.pendingProps.value,p.value)||(e!==null?e.push(f):e=[f])}}else if(l===je.current){if(p=l.alternate,p===null)throw Error(c(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ps):e=[ps])}l=l.return}e!==null&&yo(t,e,n,a),t.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!Et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hi(e){pi=e,mn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return Qu(pi,e)}function dl(e,t){return pi===null&&hi(e),Qu(e,t)}function Qu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},mn===null){if(e===null)throw Error(c(308));mn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else mn=mn.next=t;return n}var Hx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Gx=s.unstable_scheduleCallback,Yx=s.unstable_NormalPriority,Ie={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vo(){return{controller:new Hx,data:new Map,refCount:0}}function Ha(e){e.refCount--,e.refCount===0&&Gx(Yx,function(){e.controller.abort()})}var Ga=null,bo=0,Wi=0,Qi=null;function Vx(e,t){if(Ga===null){var n=Ga=[];bo=0,Wi=Ec(),Qi={status:"pending",value:void 0,then:function(a){n.push(a)}}}return bo++,t.then(Ku,Ku),t}function Ku(){if(--bo===0&&Ga!==null){Qi!==null&&(Qi.status="fulfilled");var e=Ga;Ga=null,Wi=0,Qi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xx(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Zu=D.S;D.S=function(e,t){Oh=bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Vx(e,t),Zu!==null&&Zu(e,t)};var gi=w(null);function jo(){var e=gi.current;return e!==null?e:Te.pooledCache}function ul(e,t){t===null?I(gi,gi.current):I(gi,t.pool)}function Ju(){var e=jo();return e===null?null:{parent:Ie._currentValue,pool:e}}var Ki=Error(c(460)),wo=Error(c(474)),pl=Error(c(542)),hl={then:function(){}};function $u(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(pn,pn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ep(e),e;default:if(typeof t.status=="string")t.then(pn,pn);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ep(e),e}throw mi=t,Ki}}function fi(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(mi=n,Ki):n}}var mi=null;function Fu(){if(mi===null)throw Error(c(459));var e=mi;return mi=null,e}function ep(e){if(e===Ki||e===pl)throw Error(c(483))}var Zi=null,Ya=0;function gl(e){var t=Ya;return Ya+=1,Zi===null&&(Zi=[]),Pu(Zi,e,t)}function Va(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function fl(e,t){throw t.$$typeof===_?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function tp(e){function t(S,E){if(e){var A=S.deletions;A===null?(S.deletions=[E],S.flags|=16):A.push(E)}}function n(S,E){if(!e)return null;for(;E!==null;)t(S,E),E=E.sibling;return null}function a(S){for(var E=new Map;S!==null;)S.key!==null?E.set(S.key,S):E.set(S.index,S),S=S.sibling;return E}function l(S,E){return S=gn(S,E),S.index=0,S.sibling=null,S}function o(S,E,A){return S.index=A,e?(A=S.alternate,A!==null?(A=A.index,A<E?(S.flags|=67108866,E):A):(S.flags|=67108866,E)):(S.flags|=1048576,E)}function p(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function f(S,E,A,L){return E===null||E.tag!==6?(E=co(A,S.mode,L),E.return=S,E):(E=l(E,A),E.return=S,E)}function b(S,E,A,L){var te=A.type;return te===q?U(S,E,A.props.children,L,A.key):E!==null&&(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Y&&fi(te)===E.type)?(E=l(E,A.props),Va(E,A),E.return=S,E):(E=rl(A.type,A.key,A.props,null,S.mode,L),Va(E,A),E.return=S,E)}function T(S,E,A,L){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=uo(A,S.mode,L),E.return=S,E):(E=l(E,A.children||[]),E.return=S,E)}function U(S,E,A,L,te){return E===null||E.tag!==7?(E=di(A,S.mode,L,te),E.return=S,E):(E=l(E,A),E.return=S,E)}function H(S,E,A){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=co(""+E,S.mode,A),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case V:return A=rl(E.type,E.key,E.props,null,S.mode,A),Va(A,E),A.return=S,A;case N:return E=uo(E,S.mode,A),E.return=S,E;case Y:return E=fi(E),H(S,E,A)}if(Me(E)||Be(E))return E=di(E,S.mode,A,null),E.return=S,E;if(typeof E.then=="function")return H(S,gl(E),A);if(E.$$typeof===O)return H(S,dl(S,E),A);fl(S,E)}return null}function C(S,E,A,L){var te=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return te!==null?null:f(S,E,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case V:return A.key===te?b(S,E,A,L):null;case N:return A.key===te?T(S,E,A,L):null;case Y:return A=fi(A),C(S,E,A,L)}if(Me(A)||Be(A))return te!==null?null:U(S,E,A,L,null);if(typeof A.then=="function")return C(S,E,gl(A),L);if(A.$$typeof===O)return C(S,E,dl(S,A),L);fl(S,A)}return null}function M(S,E,A,L,te){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return S=S.get(A)||null,f(E,S,""+L,te);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case V:return S=S.get(L.key===null?A:L.key)||null,b(E,S,L,te);case N:return S=S.get(L.key===null?A:L.key)||null,T(E,S,L,te);case Y:return L=fi(L),M(S,E,A,L,te)}if(Me(L)||Be(L))return S=S.get(A)||null,U(E,S,L,te,null);if(typeof L.then=="function")return M(S,E,A,gl(L),te);if(L.$$typeof===O)return M(S,E,A,dl(E,L),te);fl(E,L)}return null}function Z(S,E,A,L){for(var te=null,xe=null,$=E,de=E=0,fe=null;$!==null&&de<A.length;de++){$.index>de?(fe=$,$=null):fe=$.sibling;var ye=C(S,$,A[de],L);if(ye===null){$===null&&($=fe);break}e&&$&&ye.alternate===null&&t(S,$),E=o(ye,E,de),xe===null?te=ye:xe.sibling=ye,xe=ye,$=fe}if(de===A.length)return n(S,$),me&&fn(S,de),te;if($===null){for(;de<A.length;de++)$=H(S,A[de],L),$!==null&&(E=o($,E,de),xe===null?te=$:xe.sibling=$,xe=$);return me&&fn(S,de),te}for($=a($);de<A.length;de++)fe=M($,S,de,A[de],L),fe!==null&&(e&&fe.alternate!==null&&$.delete(fe.key===null?de:fe.key),E=o(fe,E,de),xe===null?te=fe:xe.sibling=fe,xe=fe);return e&&$.forEach(function(ti){return t(S,ti)}),me&&fn(S,de),te}function ne(S,E,A,L){if(A==null)throw Error(c(151));for(var te=null,xe=null,$=E,de=E=0,fe=null,ye=A.next();$!==null&&!ye.done;de++,ye=A.next()){$.index>de?(fe=$,$=null):fe=$.sibling;var ti=C(S,$,ye.value,L);if(ti===null){$===null&&($=fe);break}e&&$&&ti.alternate===null&&t(S,$),E=o(ti,E,de),xe===null?te=ti:xe.sibling=ti,xe=ti,$=fe}if(ye.done)return n(S,$),me&&fn(S,de),te;if($===null){for(;!ye.done;de++,ye=A.next())ye=H(S,ye.value,L),ye!==null&&(E=o(ye,E,de),xe===null?te=ye:xe.sibling=ye,xe=ye);return me&&fn(S,de),te}for($=a($);!ye.done;de++,ye=A.next())ye=M($,S,de,ye.value,L),ye!==null&&(e&&ye.alternate!==null&&$.delete(ye.key===null?de:ye.key),E=o(ye,E,de),xe===null?te=ye:xe.sibling=ye,xe=ye);return e&&$.forEach(function(tv){return t(S,tv)}),me&&fn(S,de),te}function Ae(S,E,A,L){if(typeof A=="object"&&A!==null&&A.type===q&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case V:e:{for(var te=A.key;E!==null;){if(E.key===te){if(te=A.type,te===q){if(E.tag===7){n(S,E.sibling),L=l(E,A.props.children),L.return=S,S=L;break e}}else if(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Y&&fi(te)===E.type){n(S,E.sibling),L=l(E,A.props),Va(L,A),L.return=S,S=L;break e}n(S,E);break}else t(S,E);E=E.sibling}A.type===q?(L=di(A.props.children,S.mode,L,A.key),L.return=S,S=L):(L=rl(A.type,A.key,A.props,null,S.mode,L),Va(L,A),L.return=S,S=L)}return p(S);case N:e:{for(te=A.key;E!==null;){if(E.key===te)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){n(S,E.sibling),L=l(E,A.children||[]),L.return=S,S=L;break e}else{n(S,E);break}else t(S,E);E=E.sibling}L=uo(A,S.mode,L),L.return=S,S=L}return p(S);case Y:return A=fi(A),Ae(S,E,A,L)}if(Me(A))return Z(S,E,A,L);if(Be(A)){if(te=Be(A),typeof te!="function")throw Error(c(150));return A=te.call(A),ne(S,E,A,L)}if(typeof A.then=="function")return Ae(S,E,gl(A),L);if(A.$$typeof===O)return Ae(S,E,dl(S,A),L);fl(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,E!==null&&E.tag===6?(n(S,E.sibling),L=l(E,A),L.return=S,S=L):(n(S,E),L=co(A,S.mode,L),L.return=S,S=L),p(S)):n(S,E)}return function(S,E,A,L){try{Ya=0;var te=Ae(S,E,A,L);return Zi=null,te}catch($){if($===Ki||$===pl)throw $;var xe=St(29,$,null,S.mode);return xe.lanes=L,xe.return=S,xe}finally{}}}var xi=tp(!0),np=tp(!1),Ln=!1;function Eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function So(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Hn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(be&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=ll(e),Bu(e,null,n),t}return sl(e,a,t,n),ll(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Qd(e,n)}}function ko(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?l=o=p:o=o.next=p,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var No=!1;function Ia(){if(No){var e=Qi;if(e!==null)throw e}}function Wa(e,t,n,a){No=!1;var l=e.updateQueue;Ln=!1;var o=l.firstBaseUpdate,p=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var b=f,T=b.next;b.next=null,p===null?o=T:p.next=T,p=b;var U=e.alternate;U!==null&&(U=U.updateQueue,f=U.lastBaseUpdate,f!==p&&(f===null?U.firstBaseUpdate=T:f.next=T,U.lastBaseUpdate=b))}if(o!==null){var H=l.baseState;p=0,U=T=b=null,f=o;do{var C=f.lane&-536870913,M=C!==f.lane;if(M?(ge&C)===C:(a&C)===C){C!==0&&C===Wi&&(No=!0),U!==null&&(U=U.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var Z=e,ne=f;C=t;var Ae=n;switch(ne.tag){case 1:if(Z=ne.payload,typeof Z=="function"){H=Z.call(Ae,H,C);break e}H=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ne.payload,C=typeof Z=="function"?Z.call(Ae,H,C):Z,C==null)break e;H=j({},H,C);break e;case 2:Ln=!0}}C=f.callback,C!==null&&(e.flags|=64,M&&(e.flags|=8192),M=l.callbacks,M===null?l.callbacks=[C]:M.push(C))}else M={lane:C,tag:f.tag,payload:f.payload,callback:f.callback,next:null},U===null?(T=U=M,b=H):U=U.next=M,p|=C;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;M=f,f=M.next,M.next=null,l.lastBaseUpdate=M,l.shared.pending=null}}while(!0);U===null&&(b=H),l.baseState=b,l.firstBaseUpdate=T,l.lastBaseUpdate=U,o===null&&(l.shared.lanes=0),In|=p,e.lanes=p,e.memoizedState=H}}function ip(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function ap(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ip(n[e],t)}var Ji=w(null),ml=w(0);function sp(e,t){e=Nn,I(ml,e),I(Ji,t),Nn=e|t.baseLanes}function Ao(){I(ml,Nn),I(Ji,Ji.current)}function To(){Nn=ml.current,B(Ji),B(ml)}var kt=w(null),Bt=null;function Gn(e){var t=e.alternate;I(Ge,Ge.current&1),I(kt,e),Bt===null&&(t===null||Ji.current!==null||t.memoizedState!==null)&&(Bt=e)}function Co(e){I(Ge,Ge.current),I(kt,e),Bt===null&&(Bt=e)}function lp(e){e.tag===22?(I(Ge,Ge.current),I(kt,e),Bt===null&&(Bt=e)):Yn()}function Yn(){I(Ge,Ge.current),I(kt,kt.current)}function Nt(e){B(kt),Bt===e&&(Bt=null),B(Ge)}var Ge=w(0);function xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||qc(n)||_c(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yn=0,ce=null,ke=null,We=null,yl=!1,$i=!1,yi=!1,vl=0,Qa=0,Pi=null,Ix=0;function qe(){throw Error(c(321))}function Ro(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function zo(e,t,n,a,l,o){return yn=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Vp:Wo,yi=!1,o=n(a,l),yi=!1,$i&&(o=op(t,n,a,l)),rp(e),o}function rp(e){D.H=Ja;var t=ke!==null&&ke.next!==null;if(yn=0,We=ke=ce=null,yl=!1,Qa=0,Pi=null,t)throw Error(c(300));e===null||Qe||(e=e.dependencies,e!==null&&cl(e)&&(Qe=!0))}function op(e,t,n,a){ce=e;var l=0;do{if($i&&(Pi=null),Qa=0,$i=!1,25<=l)throw Error(c(301));if(l+=1,We=ke=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Xp,o=t(n,a)}while($i);return o}function Wx(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Ka(t):t,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(ce.flags|=1024),t}function Oo(){var e=vl!==0;return vl=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Do(e){if(yl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yl=!1}yn=0,We=ke=ce=null,$i=!1,Qa=vl=0,Pi=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ce.memoizedState=We=e:We=We.next=e,We}function Ye(){if(ke===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=We===null?ce.memoizedState:We.next;if(t!==null)We=t,ke=e;else{if(e===null)throw ce.alternate===null?Error(c(467)):Error(c(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},We===null?ce.memoizedState=We=e:We=We.next=e}return We}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ka(e){var t=Qa;return Qa+=1,Pi===null&&(Pi=[]),e=Pu(Pi,e,t),t=ce,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Vp:Wo),e}function jl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ka(e);if(e.$$typeof===O)return nt(e)}throw Error(c(438,String(e)))}function qo(e){var t=null,n=ce.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ce.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=bl(),ce.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Ue;return t.index++,n}function vn(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=Ye();return _o(t,ke,e)}function _o(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,o=a.pending;if(o!==null){if(l!==null){var p=l.next;l.next=o.next,o.next=p}t.baseQueue=l=o,a.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var f=p=null,b=null,T=t,U=!1;do{var H=T.lane&-536870913;if(H!==T.lane?(ge&H)===H:(yn&H)===H){var C=T.revertLane;if(C===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),H===Wi&&(U=!0);else if((yn&C)===C){T=T.next,C===Wi&&(U=!0);continue}else H={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},b===null?(f=b=H,p=o):b=b.next=H,ce.lanes|=C,In|=C;H=T.action,yi&&n(o,H),o=T.hasEagerState?T.eagerState:n(o,H)}else C={lane:H,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},b===null?(f=b=C,p=o):b=b.next=C,ce.lanes|=H,In|=H;T=T.next}while(T!==null&&T!==t);if(b===null?p=o:b.next=f,!Et(o,e.memoizedState)&&(Qe=!0,U&&(n=Qi,n!==null)))throw n;e.memoizedState=o,e.baseState=p,e.baseQueue=b,a.lastRenderedState=o}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Uo(e){var t=Ye(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var p=l=l.next;do o=e(o,p.action),p=p.next;while(p!==l);Et(o,t.memoizedState)||(Qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function cp(e,t,n){var a=ce,l=Ye(),o=me;if(o){if(n===void 0)throw Error(c(407));n=n()}else n=t();var p=!Et((ke||l).memoizedState,n);if(p&&(l.memoizedState=n,Qe=!0),l=l.queue,Ho(pp.bind(null,a,l,e),[e]),l.getSnapshot!==t||p||We!==null&&We.memoizedState.tag&1){if(a.flags|=2048,Fi(9,{destroy:void 0},up.bind(null,a,l,n,t),null),Te===null)throw Error(c(349));o||(yn&127)!==0||dp(a,t,n)}return n}function dp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t=bl(),ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function up(e,t,n,a){t.value=n,t.getSnapshot=a,hp(t)&&gp(e)}function pp(e,t,n){return n(function(){hp(t)&&gp(e)})}function hp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function gp(e){var t=ci(e,2);t!==null&&xt(t,e,2)}function Lo(e){var t=ct();if(typeof e=="function"){var n=e;if(e=n(),yi){zn(!0);try{n()}finally{zn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:e},t}function fp(e,t,n,a){return e.baseState=n,_o(e,ke,typeof a=="function"?a:vn)}function Qx(e,t,n,a,l){if(kl(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){o.listeners.push(p)}};D.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,mp(t,o)):(o.next=n.next,t.pending=n.next=o)}}function mp(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var o=D.T,p={};D.T=p;try{var f=n(l,a),b=D.S;b!==null&&b(p,f),xp(e,t,f)}catch(T){Bo(e,t,T)}finally{o!==null&&p.types!==null&&(o.types=p.types),D.T=o}}else try{o=n(l,a),xp(e,t,o)}catch(T){Bo(e,t,T)}}function xp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){yp(e,t,a)},function(a){return Bo(e,t,a)}):yp(e,t,n)}function yp(e,t,n){t.status="fulfilled",t.value=n,vp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,mp(e,n)))}function Bo(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,vp(t),t=t.next;while(t!==a)}e.action=null}function vp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function bp(e,t){return t}function jp(e,t){if(me){var n=Te.formState;if(n!==null){e:{var a=ce;if(me){if(Re){t:{for(var l=Re,o=Lt;l.nodeType!==8;){if(!o){l=null;break t}if(l=Ht(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){Re=Ht(l.nextSibling),a=l.data==="F!";break e}}_n(a)}a=!1}a&&(t=n[0])}}return n=ct(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bp,lastRenderedState:t},n.queue=a,n=Hp.bind(null,ce,a),a.dispatch=n,a=Lo(!1),o=Io.bind(null,ce,!1,a.queue),a=ct(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=Qx.bind(null,ce,l,o,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function wp(e){var t=Ye();return Ep(t,ke,e)}function Ep(e,t,n){if(t=_o(e,t,bp)[0],e=wl(vn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ka(t)}catch(p){throw p===Ki?pl:p}else a=t;t=Ye();var l=t.queue,o=l.dispatch;return n!==t.memoizedState&&(ce.flags|=2048,Fi(9,{destroy:void 0},Kx.bind(null,l,n),null)),[a,o,e]}function Kx(e,t){e.action=t}function Sp(e){var t=Ye(),n=ke;if(n!==null)return Ep(t,n,e);Ye(),t=t.memoizedState,n=Ye();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Fi(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ce.updateQueue,t===null&&(t=bl(),ce.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function kp(){return Ye().memoizedState}function El(e,t,n,a){var l=ct();ce.flags|=e,l.memoizedState=Fi(1|t,{destroy:void 0},n,a===void 0?null:a)}function Sl(e,t,n,a){var l=Ye();a=a===void 0?null:a;var o=l.memoizedState.inst;ke!==null&&a!==null&&Ro(a,ke.memoizedState.deps)?l.memoizedState=Fi(t,o,n,a):(ce.flags|=e,l.memoizedState=Fi(1|t,o,n,a))}function Np(e,t){El(8390656,8,e,t)}function Ho(e,t){Sl(2048,8,e,t)}function Zx(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=bl(),ce.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ap(e){var t=Ye().memoizedState;return Zx({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Tp(e,t){return Sl(4,2,e,t)}function Cp(e,t){return Sl(4,4,e,t)}function Rp(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zp(e,t,n){n=n!=null?n.concat([e]):null,Sl(4,4,Rp.bind(null,t,e),n)}function Go(){}function Op(e,t){var n=Ye();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ro(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Mp(e,t){var n=Ye();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ro(t,a[1]))return a[0];if(a=e(),yi){zn(!0);try{e()}finally{zn(!1)}}return n.memoizedState=[a,t],a}function Yo(e,t,n){return n===void 0||(yn&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Dh(),ce.lanes|=e,In|=e,n)}function Dp(e,t,n,a){return Et(n,t)?n:Ji.current!==null?(e=Yo(e,n,a),Et(e,t)||(Qe=!0),e):(yn&42)===0||(yn&1073741824)!==0&&(ge&261930)===0?(Qe=!0,e.memoizedState=n):(e=Dh(),ce.lanes|=e,In|=e,t)}function qp(e,t,n,a,l){var o=X.p;X.p=o!==0&&8>o?o:8;var p=D.T,f={};D.T=f,Io(e,!1,t,n);try{var b=l(),T=D.S;if(T!==null&&T(f,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var U=Xx(b,a);Za(e,t,U,Ct(e))}else Za(e,t,a,Ct(e))}catch(H){Za(e,t,{then:function(){},status:"rejected",reason:H},Ct())}finally{X.p=o,p!==null&&f.types!==null&&(p.types=f.types),D.T=p}}function Jx(){}function Vo(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=_p(e).queue;qp(e,l,t,F,n===null?Jx:function(){return Up(e),n(a)})}function _p(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:F},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Up(e){var t=_p(e);t.next===null&&(t=e.alternate.memoizedState),Za(e,t.next.queue,{},Ct())}function Xo(){return nt(ps)}function Lp(){return Ye().memoizedState}function Bp(){return Ye().memoizedState}function $x(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ct();e=Bn(n);var a=Hn(t,e,n);a!==null&&(xt(a,t,n),Xa(a,t,n)),t={cache:vo()},e.payload=t;return}t=t.return}}function Px(e,t,n){var a=Ct();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},kl(e)?Gp(t,n):(n=ro(e,t,n,a),n!==null&&(xt(n,e,a),Yp(n,t,a)))}function Hp(e,t,n){var a=Ct();Za(e,t,n,a)}function Za(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(kl(e))Gp(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var p=t.lastRenderedState,f=o(p,n);if(l.hasEagerState=!0,l.eagerState=f,Et(f,p))return sl(e,t,l,0),Te===null&&al(),!1}catch{}finally{}if(n=ro(e,t,l,a),n!==null)return xt(n,e,a),Yp(n,t,a),!0}return!1}function Io(e,t,n,a){if(a={lane:2,revertLane:Ec(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kl(e)){if(t)throw Error(c(479))}else t=ro(e,n,a,2),t!==null&&xt(t,e,2)}function kl(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Gp(e,t){$i=yl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yp(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Qd(e,n)}}var Ja={readContext:nt,use:jl,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};Ja.useEffectEvent=qe;var Vp={readContext:nt,use:jl,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Np,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,El(4194308,4,Rp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return El(4194308,4,e,t)},useInsertionEffect:function(e,t){El(4,2,e,t)},useMemo:function(e,t){var n=ct();t=t===void 0?null:t;var a=e();if(yi){zn(!0);try{e()}finally{zn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ct();if(n!==void 0){var l=n(t);if(yi){zn(!0);try{n(t)}finally{zn(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Px.bind(null,ce,e),[a.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Lo(e);var t=e.queue,n=Hp.bind(null,ce,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Go,useDeferredValue:function(e,t){var n=ct();return Yo(n,e,t)},useTransition:function(){var e=Lo(!1);return e=qp.bind(null,ce,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ce,l=ct();if(me){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Te===null)throw Error(c(349));(ge&127)!==0||dp(a,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Np(pp.bind(null,a,o,e),[e]),a.flags|=2048,Fi(9,{destroy:void 0},up.bind(null,a,o,n,t),null),n},useId:function(){var e=ct(),t=Te.identifierPrefix;if(me){var n=nn,a=tn;n=(a&~(1<<32-wt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=vl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Ix++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Xo,useFormState:jp,useActionState:jp,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Io.bind(null,ce,!0,n),n.dispatch=t,[e,t]},useMemoCache:qo,useCacheRefresh:function(){return ct().memoizedState=$x.bind(null,ce)},useEffectEvent:function(e){var t=ct(),n={impl:e};return t.memoizedState=n,function(){if((be&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Wo={readContext:nt,use:jl,useCallback:Op,useContext:nt,useEffect:Ho,useImperativeHandle:zp,useInsertionEffect:Tp,useLayoutEffect:Cp,useMemo:Mp,useReducer:wl,useRef:kp,useState:function(){return wl(vn)},useDebugValue:Go,useDeferredValue:function(e,t){var n=Ye();return Dp(n,ke.memoizedState,e,t)},useTransition:function(){var e=wl(vn)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:Ka(e),t]},useSyncExternalStore:cp,useId:Lp,useHostTransitionStatus:Xo,useFormState:wp,useActionState:wp,useOptimistic:function(e,t){var n=Ye();return fp(n,ke,e,t)},useMemoCache:qo,useCacheRefresh:Bp};Wo.useEffectEvent=Ap;var Xp={readContext:nt,use:jl,useCallback:Op,useContext:nt,useEffect:Ho,useImperativeHandle:zp,useInsertionEffect:Tp,useLayoutEffect:Cp,useMemo:Mp,useReducer:Uo,useRef:kp,useState:function(){return Uo(vn)},useDebugValue:Go,useDeferredValue:function(e,t){var n=Ye();return ke===null?Yo(n,e,t):Dp(n,ke.memoizedState,e,t)},useTransition:function(){var e=Uo(vn)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:Ka(e),t]},useSyncExternalStore:cp,useId:Lp,useHostTransitionStatus:Xo,useFormState:Sp,useActionState:Sp,useOptimistic:function(e,t){var n=Ye();return ke!==null?fp(n,ke,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:qo,useCacheRefresh:Bp};Xp.useEffectEvent=Ap;function Qo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ko={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ct(),l=Bn(a);l.payload=t,n!=null&&(l.callback=n),t=Hn(e,l,a),t!==null&&(xt(t,e,a),Xa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ct(),l=Bn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Hn(e,l,a),t!==null&&(xt(t,e,a),Xa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ct(),a=Bn(n);a.tag=2,t!=null&&(a.callback=t),t=Hn(e,a,n),t!==null&&(xt(t,e,n),Xa(t,e,n))}};function Ip(e,t,n,a,l,o,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,p):t.prototype&&t.prototype.isPureReactComponent?!_a(n,a)||!_a(l,o):!0}function Wp(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ko.enqueueReplaceState(t,t.state,null)}function vi(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=j({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Qp(e){il(e)}function Kp(e){console.error(e)}function Zp(e){il(e)}function Nl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Jp(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Zo(e,t,n){return n=Bn(n),n.tag=3,n.payload={element:null},n.callback=function(){Nl(e,t)},n}function $p(e){return e=Bn(e),e.tag=3,e}function Pp(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var o=a.value;e.payload=function(){return l(o)},e.callback=function(){Jp(t,n,a)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){Jp(t,n,a),typeof l!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function Fx(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ii(t,n,l,!0),n=kt.current,n!==null){switch(n.tag){case 31:case 13:return Bt===null?Ll():n.alternate===null&&_e===0&&(_e=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===hl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),bc(e,a,l)),!1;case 22:return n.flags|=65536,a===hl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),bc(e,a,l)),!1}throw Error(c(435,n.tag))}return bc(e,a,l),Ll(),!1}if(me)return t=kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==go&&(e=Error(c(422),{cause:a}),Ba(qt(e,n)))):(a!==go&&(t=Error(c(423),{cause:a}),Ba(qt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=qt(a,n),l=Zo(e.stateNode,a,l),ko(e,l),_e!==4&&(_e=2)),!1;var o=Error(c(520),{cause:a});if(o=qt(o,n),as===null?as=[o]:as.push(o),_e!==4&&(_e=2),t===null)return!0;a=qt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Zo(n.stateNode,a,e),ko(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Wn===null||!Wn.has(o))))return n.flags|=65536,l&=-l,n.lanes|=l,l=$p(l),Pp(l,e,n,a),ko(n,l),!1}n=n.return}while(n!==null);return!1}var Jo=Error(c(461)),Qe=!1;function it(e,t,n,a){t.child=e===null?np(t,null,n,a):xi(t,e.child,n,a)}function Fp(e,t,n,a,l){n=n.render;var o=t.ref;if("ref"in a){var p={};for(var f in a)f!=="ref"&&(p[f]=a[f])}else p=a;return hi(t),a=zo(e,t,n,p,o,l),f=Oo(),e!==null&&!Qe?(Mo(e,t,l),bn(e,t,l)):(me&&f&&po(t),t.flags|=1,it(e,t,a,l),t.child)}function eh(e,t,n,a,l){if(e===null){var o=n.type;return typeof o=="function"&&!oo(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,th(e,t,o,a,l)):(e=rl(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!ac(e,l)){var p=o.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(p,a)&&e.ref===t.ref)return bn(e,t,l)}return t.flags|=1,e=gn(o,a),e.ref=t.ref,e.return=t,t.child=e}function th(e,t,n,a,l){if(e!==null){var o=e.memoizedProps;if(_a(o,a)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=a=o,ac(e,l))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,bn(e,t,l)}return $o(e,t,n,a,l)}function nh(e,t,n,a){var l=a.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~o}else a=0,t.child=null;return ih(e,t,o,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ul(t,o!==null?o.cachePool:null),o!==null?sp(t,o):Ao(),lp(t);else return a=t.lanes=536870912,ih(e,t,o!==null?o.baseLanes|n:n,n,a)}else o!==null?(ul(t,o.cachePool),sp(t,o),Yn(),t.memoizedState=null):(e!==null&&ul(t,null),Ao(),Yn());return it(e,t,l,n),t.child}function $a(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ih(e,t,n,a,l){var o=jo();return o=o===null?null:{parent:Ie._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&ul(t,null),Ao(),lp(t),e!==null&&Ii(e,t,a,!0),t.childLanes=l,null}function Al(e,t){return t=Cl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ah(e,t,n){return xi(t,e.child,null,n),e=Al(t,t.pendingProps),e.flags|=2,Nt(t),t.memoizedState=null,e}function ey(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(me){if(a.mode==="hidden")return e=Al(t,a),t.lanes=536870912,$a(null,e);if(Co(t),(e=Re)?(e=mg(e,Lt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Dn!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},n=Gu(e),n.return=t,t.child=n,tt=t,Re=null)):e=null,e===null)throw _n(t);return t.lanes=536870912,null}return Al(t,a)}var o=e.memoizedState;if(o!==null){var p=o.dehydrated;if(Co(t),l)if(t.flags&256)t.flags&=-257,t=ah(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Qe||Ii(e,t,n,!1),l=(n&e.childLanes)!==0,Qe||l){if(a=Te,a!==null&&(p=Kd(a,n),p!==0&&p!==o.retryLane))throw o.retryLane=p,ci(e,p),xt(a,e,p),Jo;Ll(),t=ah(e,t,n)}else e=o.treeContext,Re=Ht(p.nextSibling),tt=t,me=!0,qn=null,Lt=!1,e!==null&&Xu(t,e),t=Al(t,a),t.flags|=4096;return t}return e=gn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Tl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function $o(e,t,n,a,l){return hi(t),n=zo(e,t,n,a,void 0,l),a=Oo(),e!==null&&!Qe?(Mo(e,t,l),bn(e,t,l)):(me&&a&&po(t),t.flags|=1,it(e,t,n,l),t.child)}function sh(e,t,n,a,l,o){return hi(t),t.updateQueue=null,n=op(t,a,n,l),rp(e),a=Oo(),e!==null&&!Qe?(Mo(e,t,o),bn(e,t,o)):(me&&a&&po(t),t.flags|=1,it(e,t,n,o),t.child)}function lh(e,t,n,a,l){if(hi(t),t.stateNode===null){var o=Gi,p=n.contextType;typeof p=="object"&&p!==null&&(o=nt(p)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ko,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},Eo(t),p=n.contextType,o.context=typeof p=="object"&&p!==null?nt(p):Gi,o.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Qo(t,n,p,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(p=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),p!==o.state&&Ko.enqueueReplaceState(o,o.state,null),Wa(t,a,o,l),Ia(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){o=t.stateNode;var f=t.memoizedProps,b=vi(n,f);o.props=b;var T=o.context,U=n.contextType;p=Gi,typeof U=="object"&&U!==null&&(p=nt(U));var H=n.getDerivedStateFromProps;U=typeof H=="function"||typeof o.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,U||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f||T!==p)&&Wp(t,o,a,p),Ln=!1;var C=t.memoizedState;o.state=C,Wa(t,a,o,l),Ia(),T=t.memoizedState,f||C!==T||Ln?(typeof H=="function"&&(Qo(t,n,H,a),T=t.memoizedState),(b=Ln||Ip(t,n,b,a,C,T,p))?(U||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=T),o.props=a,o.state=T,o.context=p,a=b):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,So(e,t),p=t.memoizedProps,U=vi(n,p),o.props=U,H=t.pendingProps,C=o.context,T=n.contextType,b=Gi,typeof T=="object"&&T!==null&&(b=nt(T)),f=n.getDerivedStateFromProps,(T=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p!==H||C!==b)&&Wp(t,o,a,b),Ln=!1,C=t.memoizedState,o.state=C,Wa(t,a,o,l),Ia();var M=t.memoizedState;p!==H||C!==M||Ln||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof f=="function"&&(Qo(t,n,f,a),M=t.memoizedState),(U=Ln||Ip(t,n,U,a,C,M,b)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?(T||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,M,b),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,M,b)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=M),o.props=a,o.state=M,o.context=b,a=U):(typeof o.componentDidUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,Tl(e,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&a?(t.child=xi(t,e.child,null,l),t.child=xi(t,null,n,l)):it(e,t,n,l),t.memoizedState=o.state,e=t.child):e=bn(e,t,l),e}function rh(e,t,n,a){return ui(),t.flags|=256,it(e,t,n,a),t.child}var Po={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fo(e){return{baseLanes:e,cachePool:Ju()}}function ec(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Tt),e}function oh(e,t,n){var a=t.pendingProps,l=!1,o=(t.flags&128)!==0,p;if((p=o)||(p=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),p&&(l=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(l?Gn(t):Yn(),(e=Re)?(e=mg(e,Lt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Dn!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},n=Gu(e),n.return=t,t.child=n,tt=t,Re=null)):e=null,e===null)throw _n(t);return _c(e)?t.lanes=32:t.lanes=536870912,null}var f=a.children;return a=a.fallback,l?(Yn(),l=t.mode,f=Cl({mode:"hidden",children:f},l),a=di(a,l,n,null),f.return=t,a.return=t,f.sibling=a,t.child=f,a=t.child,a.memoizedState=Fo(n),a.childLanes=ec(e,p,n),t.memoizedState=Po,$a(null,a)):(Gn(t),tc(t,f))}var b=e.memoizedState;if(b!==null&&(f=b.dehydrated,f!==null)){if(o)t.flags&256?(Gn(t),t.flags&=-257,t=nc(e,t,n)):t.memoizedState!==null?(Yn(),t.child=e.child,t.flags|=128,t=null):(Yn(),f=a.fallback,l=t.mode,a=Cl({mode:"visible",children:a.children},l),f=di(f,l,n,null),f.flags|=2,a.return=t,f.return=t,a.sibling=f,t.child=a,xi(t,e.child,null,n),a=t.child,a.memoizedState=Fo(n),a.childLanes=ec(e,p,n),t.memoizedState=Po,t=$a(null,a));else if(Gn(t),_c(f)){if(p=f.nextSibling&&f.nextSibling.dataset,p)var T=p.dgst;p=T,a=Error(c(419)),a.stack="",a.digest=p,Ba({value:a,source:null,stack:null}),t=nc(e,t,n)}else if(Qe||Ii(e,t,n,!1),p=(n&e.childLanes)!==0,Qe||p){if(p=Te,p!==null&&(a=Kd(p,n),a!==0&&a!==b.retryLane))throw b.retryLane=a,ci(e,a),xt(p,e,a),Jo;qc(f)||Ll(),t=nc(e,t,n)}else qc(f)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Re=Ht(f.nextSibling),tt=t,me=!0,qn=null,Lt=!1,e!==null&&Xu(t,e),t=tc(t,a.children),t.flags|=4096);return t}return l?(Yn(),f=a.fallback,l=t.mode,b=e.child,T=b.sibling,a=gn(b,{mode:"hidden",children:a.children}),a.subtreeFlags=b.subtreeFlags&65011712,T!==null?f=gn(T,f):(f=di(f,l,n,null),f.flags|=2),f.return=t,a.return=t,a.sibling=f,t.child=a,$a(null,a),a=t.child,f=e.child.memoizedState,f===null?f=Fo(n):(l=f.cachePool,l!==null?(b=Ie._currentValue,l=l.parent!==b?{parent:b,pool:b}:l):l=Ju(),f={baseLanes:f.baseLanes|n,cachePool:l}),a.memoizedState=f,a.childLanes=ec(e,p,n),t.memoizedState=Po,$a(e.child,a)):(Gn(t),n=e.child,e=n.sibling,n=gn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function tc(e,t){return t=Cl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Cl(e,t){return e=St(22,e,null,t),e.lanes=0,e}function nc(e,t,n){return xi(t,e.child,null,n),e=tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ch(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),xo(e.return,t,n)}function ic(e,t,n,a,l,o){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:o}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=a,p.tail=n,p.tailMode=l,p.treeForkCount=o)}function dh(e,t,n){var a=t.pendingProps,l=a.revealOrder,o=a.tail;a=a.children;var p=Ge.current,f=(p&2)!==0;if(f?(p=p&1|2,t.flags|=128):p&=1,I(Ge,p),it(e,t,a,n),a=me?La:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ch(e,n,t);else if(e.tag===19)ch(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&xl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ic(t,!1,l,n,o,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&xl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ic(t,!0,n,null,o,a);break;case"together":ic(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ii(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ac(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function ty(e,t,n){switch(t.tag){case 3:ot(t,t.stateNode.containerInfo),Un(t,Ie,e.memoizedState.cache),ui();break;case 27:case 5:Ea(t);break;case 4:ot(t,t.stateNode.containerInfo);break;case 10:Un(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Co(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?oh(e,t,n):(Gn(t),e=bn(e,t,n),e!==null?e.sibling:null);Gn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ii(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return dh(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(Ge,Ge.current),a)break;return null;case 22:return t.lanes=0,nh(e,t,n,t.pendingProps);case 24:Un(t,Ie,e.memoizedState.cache)}return bn(e,t,n)}function uh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!ac(e,n)&&(t.flags&128)===0)return Qe=!1,ty(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,me&&(t.flags&1048576)!==0&&Vu(t,La,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=fi(t.elementType),t.type=e,typeof e=="function")oo(e)?(a=vi(e,a),t.tag=1,t=lh(null,t,e,a,n)):(t.tag=0,t=$o(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===J){t.tag=11,t=Fp(null,t,e,a,n);break e}else if(l===K){t.tag=14,t=eh(null,t,e,a,n);break e}}throw t=Xe(e)||e,Error(c(306,t,""))}}return t;case 0:return $o(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=vi(a,t.pendingProps),lh(e,t,a,l,n);case 3:e:{if(ot(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var o=t.memoizedState;l=o.element,So(e,t),Wa(t,a,null,n);var p=t.memoizedState;if(a=p.cache,Un(t,Ie,a),a!==o.cache&&yo(t,[Ie],n,!0),Ia(),a=p.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=rh(e,t,a,n);break e}else if(a!==l){l=qt(Error(c(424)),t),Ba(l),t=rh(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=Ht(e.firstChild),tt=t,me=!0,qn=null,Lt=!0,n=np(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ui(),a===l){t=bn(e,t,n);break e}it(e,t,a,n)}t=t.child}return t;case 26:return Tl(e,t),e===null?(n=wg(t.type,null,t.pendingProps,null))?t.memoizedState=n:me||(n=t.type,e=t.pendingProps,a=Il(ue.current).createElement(n),a[et]=t,a[ut]=e,at(a,n,e),Pe(a),t.stateNode=a):t.memoizedState=wg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ea(t),e===null&&me&&(a=t.stateNode=vg(t.type,t.pendingProps,ue.current),tt=t,Lt=!0,l=Re,Jn(t.type)?(Uc=l,Re=Ht(a.firstChild)):Re=l),it(e,t,t.pendingProps.children,n),Tl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((l=a=Re)&&(a=zy(a,t.type,t.pendingProps,Lt),a!==null?(t.stateNode=a,tt=t,Re=Ht(a.firstChild),Lt=!1,l=!0):l=!1),l||_n(t)),Ea(t),l=t.type,o=t.pendingProps,p=e!==null?e.memoizedProps:null,a=o.children,Oc(l,o)?a=null:p!==null&&Oc(l,p)&&(t.flags|=32),t.memoizedState!==null&&(l=zo(e,t,Wx,null,null,n),ps._currentValue=l),Tl(e,t),it(e,t,a,n),t.child;case 6:return e===null&&me&&((e=n=Re)&&(n=Oy(n,t.pendingProps,Lt),n!==null?(t.stateNode=n,tt=t,Re=null,e=!0):e=!1),e||_n(t)),null;case 13:return oh(e,t,n);case 4:return ot(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=xi(t,null,a,n):it(e,t,a,n),t.child;case 11:return Fp(e,t,t.type,t.pendingProps,n);case 7:return it(e,t,t.pendingProps,n),t.child;case 8:return it(e,t,t.pendingProps.children,n),t.child;case 12:return it(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Un(t,t.type,a.value),it(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,hi(t),l=nt(l),a=a(l),t.flags|=1,it(e,t,a,n),t.child;case 14:return eh(e,t,t.type,t.pendingProps,n);case 15:return th(e,t,t.type,t.pendingProps,n);case 19:return dh(e,t,n);case 31:return ey(e,t,n);case 22:return nh(e,t,n,t.pendingProps);case 24:return hi(t),a=nt(Ie),e===null?(l=jo(),l===null&&(l=Te,o=vo(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=n),l=o),t.memoizedState={parent:a,cache:l},Eo(t),Un(t,Ie,l)):((e.lanes&n)!==0&&(So(e,t),Wa(t,null,null,n),Ia()),l=e.memoizedState,o=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Un(t,Ie,a)):(a=o.cache,Un(t,Ie,a),a!==l.cache&&yo(t,[Ie],n,!0))),it(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function jn(e){e.flags|=4}function sc(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Lh())e.flags|=8192;else throw mi=hl,wo}else e.flags&=-16777217}function ph(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ag(t))if(Lh())e.flags|=8192;else throw mi=hl,wo}function Rl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Id():536870912,e.lanes|=t,ia|=t)}function Pa(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function ny(e,t,n){var a=t.pendingProps;switch(ho(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),xn(Ie),He(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?jn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,fo())),ze(t),null;case 26:var l=t.type,o=t.memoizedState;return e===null?(jn(t),o!==null?(ze(t),ph(t,o)):(ze(t),sc(t,l,null,a,n))):o?o!==e.memoizedState?(jn(t),ze(t),ph(t,o)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&jn(t),ze(t),sc(t,l,e,a,n)),null;case 27:if(Gs(t),n=ue.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&jn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return ze(t),null}e=Q.current,Xi(t)?Iu(t):(e=vg(l,a,n),t.stateNode=e,jn(t))}return ze(t),null;case 5:if(Gs(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&jn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return ze(t),null}if(o=Q.current,Xi(t))Iu(t);else{var p=Il(ue.current);switch(o){case 1:o=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=p.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof a.is=="string"?p.createElement("select",{is:a.is}):p.createElement("select"),a.multiple?o.multiple=!0:a.size&&(o.size=a.size);break;default:o=typeof a.is=="string"?p.createElement(l,{is:a.is}):p.createElement(l)}}o[et]=t,o[ut]=a;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)o.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=o;e:switch(at(o,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&jn(t)}}return ze(t),sc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&jn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ue.current,Xi(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=tt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[et]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||og(e.nodeValue,n)),e||_n(t,!0)}else e=Il(e).createTextNode(a),e[et]=t,t.stateNode=e}return ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Xi(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[et]=t}else ui(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else n=fo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Nt(t),t):(Nt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Xi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[et]=t}else ui(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else l=fo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Nt(t),t):(Nt(t),null)}return Nt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rl(t,t.updateQueue),ze(t),null);case 4:return He(),e===null&&Ac(t.stateNode.containerInfo),ze(t),null;case 10:return xn(t.type),ze(t),null;case 19:if(B(Ge),a=t.memoizedState,a===null)return ze(t),null;if(l=(t.flags&128)!==0,o=a.rendering,o===null)if(l)Pa(a,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=xl(e),o!==null){for(t.flags|=128,Pa(a,!1),e=o.updateQueue,t.updateQueue=e,Rl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Hu(n,e),n=n.sibling;return I(Ge,Ge.current&1|2),me&&fn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&bt()>ql&&(t.flags|=128,l=!0,Pa(a,!1),t.lanes=4194304)}else{if(!l)if(e=xl(o),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Rl(t,e),Pa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!me)return ze(t),null}else 2*bt()-a.renderingStartTime>ql&&n!==536870912&&(t.flags|=128,l=!0,Pa(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(e=a.last,e!==null?e.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=bt(),e.sibling=null,n=Ge.current,I(Ge,l?n&1|2:n&1),me&&fn(t,a.treeForkCount),e):(ze(t),null);case 22:case 23:return Nt(t),To(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),n=t.updateQueue,n!==null&&Rl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&B(gi),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn(Ie),ze(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function iy(e,t){switch(ho(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(Ie),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Gs(t),null;case 31:if(t.memoizedState!==null){if(Nt(t),t.alternate===null)throw Error(c(340));ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Ge),null;case 4:return He(),null;case 10:return xn(t.type),null;case 22:case 23:return Nt(t),To(),e!==null&&B(gi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn(Ie),null;case 25:return null;default:return null}}function hh(e,t){switch(ho(t),t.tag){case 3:xn(Ie),He();break;case 26:case 27:case 5:Gs(t);break;case 4:He();break;case 31:t.memoizedState!==null&&Nt(t);break;case 13:Nt(t);break;case 19:B(Ge);break;case 10:xn(t.type);break;case 22:case 23:Nt(t),To(),e!==null&&B(gi);break;case 24:xn(Ie)}}function Fa(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var o=n.create,p=n.inst;a=o(),p.destroy=a}n=n.next}while(n!==l)}}catch(f){Se(t,t.return,f)}}function Vn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var o=l.next;a=o;do{if((a.tag&e)===e){var p=a.inst,f=p.destroy;if(f!==void 0){p.destroy=void 0,l=t;var b=n,T=f;try{T()}catch(U){Se(l,b,U)}}}a=a.next}while(a!==o)}}catch(U){Se(t,t.return,U)}}function gh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ap(t,n)}catch(a){Se(e,e.return,a)}}}function fh(e,t,n){n.props=vi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Se(e,t,a)}}function es(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){Se(e,t,l)}}function an(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Se(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Se(e,t,l)}else n.current=null}function mh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Se(e,e.return,l)}}function lc(e,t,n){try{var a=e.stateNode;ky(a,e.type,n,t),a[ut]=t}catch(l){Se(e,e.return,l)}}function xh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Jn(e.type)||e.tag===4}function rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pn));else if(a!==4&&(a===27&&Jn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(oc(e,t,n),e=e.sibling;e!==null;)oc(e,t,n),e=e.sibling}function zl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Jn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(zl(e,t,n),e=e.sibling;e!==null;)zl(e,t,n),e=e.sibling}function yh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);at(t,a,n),t[et]=e,t[ut]=n}catch(o){Se(e,e.return,o)}}var wn=!1,Ke=!1,cc=!1,vh=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function ay(e,t){if(e=e.containerInfo,Rc=Pl,e=zu(e),to(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var p=0,f=-1,b=-1,T=0,U=0,H=e,C=null;t:for(;;){for(var M;H!==n||l!==0&&H.nodeType!==3||(f=p+l),H!==o||a!==0&&H.nodeType!==3||(b=p+a),H.nodeType===3&&(p+=H.nodeValue.length),(M=H.firstChild)!==null;)C=H,H=M;for(;;){if(H===e)break t;if(C===n&&++T===l&&(f=p),C===o&&++U===a&&(b=p),(M=H.nextSibling)!==null)break;H=C,C=H.parentNode}H=M}n=f===-1||b===-1?null:{start:f,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(zc={focusedElem:e,selectionRange:n},Pl=!1,Fe=t;Fe!==null;)if(t=Fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Fe=e;else for(;Fe!==null;){switch(t=Fe,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,l=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var Z=vi(n.type,l);e=a.getSnapshotBeforeUpdate(Z,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Se(n,n.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Dc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Dc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Fe=e;break}Fe=t.return}}function bh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Sn(e,n),a&4&&Fa(5,n);break;case 1:if(Sn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Se(n,n.return,p)}else{var l=vi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Se(n,n.return,p)}}a&64&&gh(n),a&512&&es(n,n.return);break;case 3:if(Sn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ap(e,t)}catch(p){Se(n,n.return,p)}}break;case 27:t===null&&a&4&&yh(n);case 26:case 5:Sn(e,n),t===null&&a&4&&mh(n),a&512&&es(n,n.return);break;case 12:Sn(e,n);break;case 31:Sn(e,n),a&4&&Eh(e,n);break;case 13:Sn(e,n),a&4&&Sh(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=hy.bind(null,n),My(e,n))));break;case 22:if(a=n.memoizedState!==null||wn,!a){t=t!==null&&t.memoizedState!==null||Ke,l=wn;var o=Ke;wn=a,(Ke=t)&&!o?kn(e,n,(n.subtreeFlags&8772)!==0):Sn(e,n),wn=l,Ke=o}break;case 30:break;default:Sn(e,n)}}function jh(e){var t=e.alternate;t!==null&&(e.alternate=null,jh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,ht=!1;function En(e,t,n){for(n=n.child;n!==null;)wh(e,t,n),n=n.sibling}function wh(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Sa,n)}catch{}switch(n.tag){case 26:Ke||an(n,t),En(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ke||an(n,t);var a=Oe,l=ht;Jn(n.type)&&(Oe=n.stateNode,ht=!1),En(e,t,n),cs(n.stateNode),Oe=a,ht=l;break;case 5:Ke||an(n,t);case 6:if(a=Oe,l=ht,Oe=null,En(e,t,n),Oe=a,ht=l,Oe!==null)if(ht)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(n.stateNode)}catch(o){Se(n,t,o)}else try{Oe.removeChild(n.stateNode)}catch(o){Se(n,t,o)}break;case 18:Oe!==null&&(ht?(e=Oe,gg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ua(e)):gg(Oe,n.stateNode));break;case 4:a=Oe,l=ht,Oe=n.stateNode.containerInfo,ht=!0,En(e,t,n),Oe=a,ht=l;break;case 0:case 11:case 14:case 15:Vn(2,n,t),Ke||Vn(4,n,t),En(e,t,n);break;case 1:Ke||(an(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&fh(n,t,a)),En(e,t,n);break;case 21:En(e,t,n);break;case 22:Ke=(a=Ke)||n.memoizedState!==null,En(e,t,n),Ke=a;break;default:En(e,t,n)}}function Eh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ua(e)}catch(n){Se(t,t.return,n)}}}function Sh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ua(e)}catch(n){Se(t,t.return,n)}}function sy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vh),t;default:throw Error(c(435,e.tag))}}function Ol(e,t){var n=sy(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=gy.bind(null,e,a);a.then(l,l)}})}function gt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],o=e,p=t,f=p;e:for(;f!==null;){switch(f.tag){case 27:if(Jn(f.type)){Oe=f.stateNode,ht=!1;break e}break;case 5:Oe=f.stateNode,ht=!1;break e;case 3:case 4:Oe=f.stateNode.containerInfo,ht=!0;break e}f=f.return}if(Oe===null)throw Error(c(160));wh(o,p,l),Oe=null,ht=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)kh(t,e),t=t.sibling}var Zt=null;function kh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gt(t,e),ft(e),a&4&&(Vn(3,e,e.return),Fa(3,e),Vn(5,e,e.return));break;case 1:gt(t,e),ft(e),a&512&&(Ke||n===null||an(n,n.return)),a&64&&wn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Zt;if(gt(t,e),ft(e),a&512&&(Ke||n===null||an(n,n.return)),a&4){var o=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":o=l.getElementsByTagName("title")[0],(!o||o[Aa]||o[et]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(a),l.head.insertBefore(o,l.querySelector("head > title"))),at(o,a,n),o[et]=e,Pe(o),a=o;break e;case"link":var p=kg("link","href",l).get(a+(n.href||""));if(p){for(var f=0;f<p.length;f++)if(o=p[f],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(f,1);break t}}o=l.createElement(a),at(o,a,n),l.head.appendChild(o);break;case"meta":if(p=kg("meta","content",l).get(a+(n.content||""))){for(f=0;f<p.length;f++)if(o=p[f],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(f,1);break t}}o=l.createElement(a),at(o,a,n),l.head.appendChild(o);break;default:throw Error(c(468,a))}o[et]=e,Pe(o),a=o}e.stateNode=a}else Ng(l,e.type,e.stateNode);else e.stateNode=Sg(l,a,e.memoizedProps);else o!==a?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,a===null?Ng(l,e.type,e.stateNode):Sg(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&lc(e,e.memoizedProps,n.memoizedProps)}break;case 27:gt(t,e),ft(e),a&512&&(Ke||n===null||an(n,n.return)),n!==null&&a&4&&lc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gt(t,e),ft(e),a&512&&(Ke||n===null||an(n,n.return)),e.flags&32){l=e.stateNode;try{Di(l,"")}catch(Z){Se(e,e.return,Z)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,lc(e,l,n!==null?n.memoizedProps:l)),a&1024&&(cc=!0);break;case 6:if(gt(t,e),ft(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Z){Se(e,e.return,Z)}}break;case 3:if(Kl=null,l=Zt,Zt=Wl(t.containerInfo),gt(t,e),Zt=l,ft(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ua(t.containerInfo)}catch(Z){Se(e,e.return,Z)}cc&&(cc=!1,Nh(e));break;case 4:a=Zt,Zt=Wl(e.stateNode.containerInfo),gt(t,e),ft(e),Zt=a;break;case 12:gt(t,e),ft(e);break;case 31:gt(t,e),ft(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ol(e,a)));break;case 13:gt(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Dl=bt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ol(e,a)));break;case 22:l=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,T=wn,U=Ke;if(wn=T||l,Ke=U||b,gt(t,e),Ke=U,wn=T,ft(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||b||wn||Ke||bi(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(o=b.stateNode,l)p=o.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{f=b.stateNode;var H=b.memoizedProps.style,C=H!=null&&H.hasOwnProperty("display")?H.display:null;f.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(Z){Se(b,b.return,Z)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=l?"":b.memoizedProps}catch(Z){Se(b,b.return,Z)}}}else if(t.tag===18){if(n===null){b=t;try{var M=b.stateNode;l?fg(M,!0):fg(b.stateNode,!1)}catch(Z){Se(b,b.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ol(e,n))));break;case 19:gt(t,e),ft(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ol(e,a)));break;case 30:break;case 21:break;default:gt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(xh(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,o=rc(e);zl(e,o,l);break;case 5:var p=n.stateNode;n.flags&32&&(Di(p,""),n.flags&=-33);var f=rc(e);zl(e,f,p);break;case 3:case 4:var b=n.stateNode.containerInfo,T=rc(e);oc(e,T,b);break;default:throw Error(c(161))}}catch(U){Se(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bh(e,t.alternate,t),t=t.sibling}function bi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vn(4,t,t.return),bi(t);break;case 1:an(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&fh(t,t.return,n),bi(t);break;case 27:cs(t.stateNode);case 26:case 5:an(t,t.return),bi(t);break;case 22:t.memoizedState===null&&bi(t);break;case 30:bi(t);break;default:bi(t)}e=e.sibling}}function kn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,o=t,p=o.flags;switch(o.tag){case 0:case 11:case 15:kn(l,o,n),Fa(4,o);break;case 1:if(kn(l,o,n),a=o,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(T){Se(a,a.return,T)}if(a=o,l=a.updateQueue,l!==null){var f=a.stateNode;try{var b=l.shared.hiddenCallbacks;if(b!==null)for(l.shared.hiddenCallbacks=null,l=0;l<b.length;l++)ip(b[l],f)}catch(T){Se(a,a.return,T)}}n&&p&64&&gh(o),es(o,o.return);break;case 27:yh(o);case 26:case 5:kn(l,o,n),n&&a===null&&p&4&&mh(o),es(o,o.return);break;case 12:kn(l,o,n);break;case 31:kn(l,o,n),n&&p&4&&Eh(l,o);break;case 13:kn(l,o,n),n&&p&4&&Sh(l,o);break;case 22:o.memoizedState===null&&kn(l,o,n),es(o,o.return);break;case 30:break;default:kn(l,o,n)}t=t.sibling}}function dc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ha(n))}function uc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ha(e))}function Jt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ah(e,t,n,a),t=t.sibling}function Ah(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t,n,a),l&2048&&Fa(9,t);break;case 1:Jt(e,t,n,a);break;case 3:Jt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ha(e)));break;case 12:if(l&2048){Jt(e,t,n,a),e=t.stateNode;try{var o=t.memoizedProps,p=o.id,f=o.onPostCommit;typeof f=="function"&&f(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Se(t,t.return,b)}}else Jt(e,t,n,a);break;case 31:Jt(e,t,n,a);break;case 13:Jt(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,p=t.alternate,t.memoizedState!==null?o._visibility&2?Jt(e,t,n,a):ts(e,t):o._visibility&2?Jt(e,t,n,a):(o._visibility|=2,ea(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&dc(p,t);break;case 24:Jt(e,t,n,a),l&2048&&uc(t.alternate,t);break;default:Jt(e,t,n,a)}}function ea(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,p=t,f=n,b=a,T=p.flags;switch(p.tag){case 0:case 11:case 15:ea(o,p,f,b,l),Fa(8,p);break;case 23:break;case 22:var U=p.stateNode;p.memoizedState!==null?U._visibility&2?ea(o,p,f,b,l):ts(o,p):(U._visibility|=2,ea(o,p,f,b,l)),l&&T&2048&&dc(p.alternate,p);break;case 24:ea(o,p,f,b,l),l&&T&2048&&uc(p.alternate,p);break;default:ea(o,p,f,b,l)}t=t.sibling}}function ts(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:ts(n,a),l&2048&&dc(a.alternate,a);break;case 24:ts(n,a),l&2048&&uc(a.alternate,a);break;default:ts(n,a)}t=t.sibling}}var ns=8192;function ta(e,t,n){if(e.subtreeFlags&ns)for(e=e.child;e!==null;)Th(e,t,n),e=e.sibling}function Th(e,t,n){switch(e.tag){case 26:ta(e,t,n),e.flags&ns&&e.memoizedState!==null&&Iy(n,Zt,e.memoizedState,e.memoizedProps);break;case 5:ta(e,t,n);break;case 3:case 4:var a=Zt;Zt=Wl(e.stateNode.containerInfo),ta(e,t,n),Zt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ns,ns=16777216,ta(e,t,n),ns=a):ta(e,t,n));break;default:ta(e,t,n)}}function Ch(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function is(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Fe=a,zh(a,e)}Ch(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rh(e),e=e.sibling}function Rh(e){switch(e.tag){case 0:case 11:case 15:is(e),e.flags&2048&&Vn(9,e,e.return);break;case 3:is(e);break;case 12:is(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ml(e)):is(e);break;default:is(e)}}function Ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Fe=a,zh(a,e)}Ch(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vn(8,t,t.return),Ml(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ml(t));break;default:Ml(t)}e=e.sibling}}function zh(e,t){for(;Fe!==null;){var n=Fe;switch(n.tag){case 0:case 11:case 15:Vn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ha(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Fe=a;else e:for(n=e;Fe!==null;){a=Fe;var l=a.sibling,o=a.return;if(jh(a),a===n){Fe=null;break e}if(l!==null){l.return=o,Fe=l;break e}Fe=o}}}var ly={getCacheForType:function(e){var t=nt(Ie),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return nt(Ie).controller.signal}},ry=typeof WeakMap=="function"?WeakMap:Map,be=0,Te=null,pe=null,ge=0,Ee=0,At=null,Xn=!1,na=!1,pc=!1,Nn=0,_e=0,In=0,ji=0,hc=0,Tt=0,ia=0,as=null,mt=null,gc=!1,Dl=0,Oh=0,ql=1/0,_l=null,Wn=null,Je=0,Qn=null,aa=null,An=0,fc=0,mc=null,Mh=null,ss=0,xc=null;function Ct(){return(be&2)!==0&&ge!==0?ge&-ge:D.T!==null?Ec():Zd()}function Dh(){if(Tt===0)if((ge&536870912)===0||me){var e=Xs;Xs<<=1,(Xs&3932160)===0&&(Xs=262144),Tt=e}else Tt=536870912;return e=kt.current,e!==null&&(e.flags|=32),Tt}function xt(e,t,n){(e===Te&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(sa(e,0),Kn(e,ge,Tt,!1)),Na(e,n),((be&2)===0||e!==Te)&&(e===Te&&((be&2)===0&&(ji|=n),_e===4&&Kn(e,ge,Tt,!1)),sn(e))}function qh(e,t,n){if((be&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ka(e,t),l=a?dy(e,t):vc(e,t,!0),o=a;do{if(l===0){na&&!a&&Kn(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!oy(n)){l=vc(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var f=e;l=as;var b=f.current.memoizedState.isDehydrated;if(b&&(sa(f,p).flags|=256),p=vc(f,p,!1),p!==2){if(pc&&!b){f.errorRecoveryDisabledLanes|=o,ji|=o,l=4;break e}o=mt,mt=l,o!==null&&(mt===null?mt=o:mt.push.apply(mt,o))}l=p}if(o=!1,l!==2)continue}}if(l===1){sa(e,0),Kn(e,t,0,!0);break}e:{switch(a=e,o=l,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Kn(a,t,Tt,!Xn);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Dl+300-bt(),10<l)){if(Kn(a,t,Tt,!Xn),Ws(a,0,!0)!==0)break e;An=t,a.timeoutHandle=pg(_h.bind(null,a,n,mt,_l,gc,t,Tt,ji,ia,Xn,o,"Throttled",-0,0),l);break e}_h(a,n,mt,_l,gc,t,Tt,ji,ia,Xn,o,null,-0,0)}}break}while(!0);sn(e)}function _h(e,t,n,a,l,o,p,f,b,T,U,H,C,M){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pn},Th(t,o,H);var Z=(o&62914560)===o?Dl-bt():(o&4194048)===o?Oh-bt():0;if(Z=Wy(H,Z),Z!==null){An=o,e.cancelPendingCommit=Z(Xh.bind(null,e,t,o,n,a,l,p,f,b,U,H,null,C,M)),Kn(e,o,p,!T);return}}Xh(e,t,o,n,a,l,p,f,b)}function oy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],o=l.getSnapshot;l=l.value;try{if(!Et(o(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kn(e,t,n,a){t&=~hc,t&=~ji,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var o=31-wt(l),p=1<<o;a[o]=-1,l&=~p}n!==0&&Wd(e,n,t)}function Ul(){return(be&6)===0?(ls(0),!1):!0}function yc(){if(pe!==null){if(Ee===0)var e=pe.return;else e=pe,mn=pi=null,Do(e),Zi=null,Ya=0,e=pe;for(;e!==null;)hh(e.alternate,e),e=e.return;pe=null}}function sa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ty(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),An=0,yc(),Te=e,pe=n=gn(e.current,null),ge=t,Ee=0,At=null,Xn=!1,na=ka(e,t),pc=!1,ia=Tt=hc=ji=In=_e=0,mt=as=null,gc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-wt(a),o=1<<l;t|=e[l],a&=~o}return Nn=t,al(),n}function Uh(e,t){ce=null,D.H=Ja,t===Ki||t===pl?(t=Fu(),Ee=3):t===wo?(t=Fu(),Ee=4):Ee=t===Jo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,pe===null&&(_e=1,Nl(e,qt(t,e.current)))}function Lh(){var e=kt.current;return e===null?!0:(ge&4194048)===ge?Bt===null:(ge&62914560)===ge||(ge&536870912)!==0?e===Bt:!1}function Bh(){var e=D.H;return D.H=Ja,e===null?Ja:e}function Hh(){var e=D.A;return D.A=ly,e}function Ll(){_e=4,Xn||(ge&4194048)!==ge&&kt.current!==null||(na=!0),(In&134217727)===0&&(ji&134217727)===0||Te===null||Kn(Te,ge,Tt,!1)}function vc(e,t,n){var a=be;be|=2;var l=Bh(),o=Hh();(Te!==e||ge!==t)&&(_l=null,sa(e,t)),t=!1;var p=_e;e:do try{if(Ee!==0&&pe!==null){var f=pe,b=At;switch(Ee){case 8:yc(),p=6;break e;case 3:case 2:case 9:case 6:kt.current===null&&(t=!0);var T=Ee;if(Ee=0,At=null,la(e,f,b,T),n&&na){p=0;break e}break;default:T=Ee,Ee=0,At=null,la(e,f,b,T)}}cy(),p=_e;break}catch(U){Uh(e,U)}while(!0);return t&&e.shellSuspendCounter++,mn=pi=null,be=a,D.H=l,D.A=o,pe===null&&(Te=null,ge=0,al()),p}function cy(){for(;pe!==null;)Gh(pe)}function dy(e,t){var n=be;be|=2;var a=Bh(),l=Hh();Te!==e||ge!==t?(_l=null,ql=bt()+500,sa(e,t)):na=ka(e,t);e:do try{if(Ee!==0&&pe!==null){t=pe;var o=At;t:switch(Ee){case 1:Ee=0,At=null,la(e,t,o,1);break;case 2:case 9:if($u(o)){Ee=0,At=null,Yh(t);break}t=function(){Ee!==2&&Ee!==9||Te!==e||(Ee=7),sn(e)},o.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:$u(o)?(Ee=0,At=null,Yh(t)):(Ee=0,At=null,la(e,t,o,7));break;case 5:var p=null;switch(pe.tag){case 26:p=pe.memoizedState;case 5:case 27:var f=pe;if(p?Ag(p):f.stateNode.complete){Ee=0,At=null;var b=f.sibling;if(b!==null)pe=b;else{var T=f.return;T!==null?(pe=T,Bl(T)):pe=null}break t}}Ee=0,At=null,la(e,t,o,5);break;case 6:Ee=0,At=null,la(e,t,o,6);break;case 8:yc(),_e=6;break e;default:throw Error(c(462))}}uy();break}catch(U){Uh(e,U)}while(!0);return mn=pi=null,D.H=a,D.A=l,be=n,pe!==null?0:(Te=null,ge=0,al(),_e)}function uy(){for(;pe!==null&&!Dm();)Gh(pe)}function Gh(e){var t=uh(e.alternate,e,Nn);e.memoizedProps=e.pendingProps,t===null?Bl(e):pe=t}function Yh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=sh(n,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=sh(n,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:Do(t);default:hh(n,t),t=pe=Hu(t,Nn),t=uh(n,t,Nn)}e.memoizedProps=e.pendingProps,t===null?Bl(e):pe=t}function la(e,t,n,a){mn=pi=null,Do(t),Zi=null,Ya=0;var l=t.return;try{if(Fx(e,l,t,n,ge)){_e=1,Nl(e,qt(n,e.current)),pe=null;return}}catch(o){if(l!==null)throw pe=l,o;_e=1,Nl(e,qt(n,e.current)),pe=null;return}t.flags&32768?(me||a===1?e=!0:na||(ge&536870912)!==0?e=!1:(Xn=e=!0,(a===2||a===9||a===3||a===6)&&(a=kt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Vh(t,e)):Bl(t)}function Bl(e){var t=e;do{if((t.flags&32768)!==0){Vh(t,Xn);return}e=t.return;var n=ny(t.alternate,t,Nn);if(n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);_e===0&&(_e=5)}function Vh(e,t){do{var n=iy(e.alternate,e);if(n!==null){n.flags&=32767,pe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=n}while(e!==null);_e=6,pe=null}function Xh(e,t,n,a,l,o,p,f,b){e.cancelPendingCommit=null;do Hl();while(Je!==0);if((be&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=lo,Xm(e,n,o,p,f,b),e===Te&&(pe=Te=null,ge=0),aa=t,Qn=e,An=n,fc=o,mc=l,Mh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fy(Ys,function(){return Zh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null,l=X.p,X.p=2,p=be,be|=4;try{ay(e,t,n)}finally{be=p,X.p=l,D.T=a}}Je=1,Ih(),Wh(),Qh()}}function Ih(){if(Je===1){Je=0;var e=Qn,t=aa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var a=X.p;X.p=2;var l=be;be|=4;try{kh(t,e);var o=zc,p=zu(e.containerInfo),f=o.focusedElem,b=o.selectionRange;if(p!==f&&f&&f.ownerDocument&&Ru(f.ownerDocument.documentElement,f)){if(b!==null&&to(f)){var T=b.start,U=b.end;if(U===void 0&&(U=T),"selectionStart"in f)f.selectionStart=T,f.selectionEnd=Math.min(U,f.value.length);else{var H=f.ownerDocument||document,C=H&&H.defaultView||window;if(C.getSelection){var M=C.getSelection(),Z=f.textContent.length,ne=Math.min(b.start,Z),Ae=b.end===void 0?ne:Math.min(b.end,Z);!M.extend&&ne>Ae&&(p=Ae,Ae=ne,ne=p);var S=Cu(f,ne),E=Cu(f,Ae);if(S&&E&&(M.rangeCount!==1||M.anchorNode!==S.node||M.anchorOffset!==S.offset||M.focusNode!==E.node||M.focusOffset!==E.offset)){var A=H.createRange();A.setStart(S.node,S.offset),M.removeAllRanges(),ne>Ae?(M.addRange(A),M.extend(E.node,E.offset)):(A.setEnd(E.node,E.offset),M.addRange(A))}}}}for(H=[],M=f;M=M.parentNode;)M.nodeType===1&&H.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<H.length;f++){var L=H[f];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Pl=!!Rc,zc=Rc=null}finally{be=l,X.p=a,D.T=n}}e.current=t,Je=2}}function Wh(){if(Je===2){Je=0;var e=Qn,t=aa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var a=X.p;X.p=2;var l=be;be|=4;try{bh(e,t.alternate,t)}finally{be=l,X.p=a,D.T=n}}Je=3}}function Qh(){if(Je===4||Je===3){Je=0,qm();var e=Qn,t=aa,n=An,a=Mh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,aa=Qn=null,Kh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Wn=null),_r(n),t=t.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Sa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=D.T,l=X.p,X.p=2,D.T=null;try{for(var o=e.onRecoverableError,p=0;p<a.length;p++){var f=a[p];o(f.value,{componentStack:f.stack})}}finally{D.T=t,X.p=l}}(An&3)!==0&&Hl(),sn(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===xc?ss++:(ss=0,xc=e):ss=0,ls(0)}}function Kh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ha(t)))}function Hl(){return Ih(),Wh(),Qh(),Zh()}function Zh(){if(Je!==5)return!1;var e=Qn,t=fc;fc=0;var n=_r(An),a=D.T,l=X.p;try{X.p=32>n?32:n,D.T=null,n=mc,mc=null;var o=Qn,p=An;if(Je=0,aa=Qn=null,An=0,(be&6)!==0)throw Error(c(331));var f=be;if(be|=4,Rh(o.current),Ah(o,o.current,p,n),be=f,ls(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Sa,o)}catch{}return!0}finally{X.p=l,D.T=a,Kh(e,t)}}function Jh(e,t,n){t=qt(n,t),t=Zo(e.stateNode,t,2),e=Hn(e,t,2),e!==null&&(Na(e,2),sn(e))}function Se(e,t,n){if(e.tag===3)Jh(e,e,n);else for(;t!==null;){if(t.tag===3){Jh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Wn===null||!Wn.has(a))){e=qt(n,e),n=$p(2),a=Hn(t,n,2),a!==null&&(Pp(n,a,t,e),Na(a,2),sn(a));break}}t=t.return}}function bc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new ry;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(pc=!0,l.add(n),e=py.bind(null,e,t,n),t.then(e,e))}function py(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Te===e&&(ge&n)===n&&(_e===4||_e===3&&(ge&62914560)===ge&&300>bt()-Dl?(be&2)===0&&sa(e,0):hc|=n,ia===ge&&(ia=0)),sn(e)}function $h(e,t){t===0&&(t=Id()),e=ci(e,t),e!==null&&(Na(e,t),sn(e))}function hy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$h(e,n)}function gy(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),$h(e,n)}function fy(e,t){return Or(e,t)}var Gl=null,ra=null,jc=!1,Yl=!1,wc=!1,Zn=0;function sn(e){e!==ra&&e.next===null&&(ra===null?Gl=ra=e:ra=ra.next=e),Yl=!0,jc||(jc=!0,xy())}function ls(e,t){if(!wc&&Yl){wc=!0;do for(var n=!1,a=Gl;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var o=0;else{var p=a.suspendedLanes,f=a.pingedLanes;o=(1<<31-wt(42|e)+1)-1,o&=l&~(p&~f),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,tg(a,o))}else o=ge,o=Ws(a,a===Te?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||ka(a,o)||(n=!0,tg(a,o));a=a.next}while(n);wc=!1}}function my(){Ph()}function Ph(){Yl=jc=!1;var e=0;Zn!==0&&Ay()&&(e=Zn);for(var t=bt(),n=null,a=Gl;a!==null;){var l=a.next,o=Fh(a,t);o===0?(a.next=null,n===null?Gl=l:n.next=l,l===null&&(ra=n)):(n=a,(e!==0||(o&3)!==0)&&(Yl=!0)),a=l}Je!==0&&Je!==5||ls(e),Zn!==0&&(Zn=0)}function Fh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var p=31-wt(o),f=1<<p,b=l[p];b===-1?((f&n)===0||(f&a)!==0)&&(l[p]=Vm(f,t)):b<=t&&(e.expiredLanes|=f),o&=~f}if(t=Te,n=ge,n=Ws(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Mr(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ka(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Mr(a),_r(n)){case 2:case 8:n=Vd;break;case 32:n=Ys;break;case 268435456:n=Xd;break;default:n=Ys}return a=eg.bind(null,e),n=Or(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Mr(a),e.callbackPriority=2,e.callbackNode=null,2}function eg(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hl()&&e.callbackNode!==n)return null;var a=ge;return a=Ws(e,e===Te?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(qh(e,a,t),Fh(e,bt()),e.callbackNode!=null&&e.callbackNode===n?eg.bind(null,e):null)}function tg(e,t){if(Hl())return null;qh(e,t,!0)}function xy(){Cy(function(){(be&6)!==0?Or(Yd,my):Ph()})}function Ec(){if(Zn===0){var e=Wi;e===0&&(e=Vs,Vs<<=1,(Vs&261888)===0&&(Vs=256)),Zn=e}return Zn}function ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Js(""+e)}function ig(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function yy(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var o=ng((l[ut]||null).action),p=a.submitter;p&&(t=(t=p[ut]||null)?ng(t.formAction):p.getAttribute("formAction"),t!==null&&(o=t,p=null));var f=new el("action","action",null,a,l);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Zn!==0){var b=p?ig(l,p):new FormData(l);Vo(n,{pending:!0,data:b,method:l.method,action:o},null,b)}}else typeof o=="function"&&(f.preventDefault(),b=p?ig(l,p):new FormData(l),Vo(n,{pending:!0,data:b,method:l.method,action:o},o,b))},currentTarget:l}]})}}for(var Sc=0;Sc<so.length;Sc++){var kc=so[Sc],vy=kc.toLowerCase(),by=kc[0].toUpperCase()+kc.slice(1);Kt(vy,"on"+by)}Kt(Du,"onAnimationEnd"),Kt(qu,"onAnimationIteration"),Kt(_u,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(_x,"onTransitionRun"),Kt(Ux,"onTransitionStart"),Kt(Lx,"onTransitionCancel"),Kt(Uu,"onTransitionEnd"),Oi("onMouseEnter",["mouseout","mouseover"]),Oi("onMouseLeave",["mouseout","mouseover"]),Oi("onPointerEnter",["pointerout","pointerover"]),Oi("onPointerLeave",["pointerout","pointerover"]),si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),si("onBeforeInput",["compositionend","keypress","textInput","paste"]),si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rs));function ag(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var p=a.length-1;0<=p;p--){var f=a[p],b=f.instance,T=f.currentTarget;if(f=f.listener,b!==o&&l.isPropagationStopped())break e;o=f,l.currentTarget=T;try{o(l)}catch(U){il(U)}l.currentTarget=null,o=b}else for(p=0;p<a.length;p++){if(f=a[p],b=f.instance,T=f.currentTarget,f=f.listener,b!==o&&l.isPropagationStopped())break e;o=f,l.currentTarget=T;try{o(l)}catch(U){il(U)}l.currentTarget=null,o=b}}}}function he(e,t){var n=t[Ur];n===void 0&&(n=t[Ur]=new Set);var a=e+"__bubble";n.has(a)||(sg(t,e,2,!1),n.add(a))}function Nc(e,t,n){var a=0;t&&(a|=4),sg(n,e,a,t)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Ac(e){if(!e[Vl]){e[Vl]=!0,Pd.forEach(function(n){n!=="selectionchange"&&(jy.has(n)||Nc(n,!1,e),Nc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vl]||(t[Vl]=!0,Nc("selectionchange",!1,t))}}function sg(e,t,n,a){switch(Dg(t)){case 2:var l=Zy;break;case 8:l=Jy;break;default:l=Yc}n=l.bind(null,t,n,e),l=void 0,!Wr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Tc(e,t,n,a,l){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var f=a.stateNode.containerInfo;if(f===l)break;if(p===4)for(p=a.return;p!==null;){var b=p.tag;if((b===3||b===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;f!==null;){if(p=Ci(f),p===null)return;if(b=p.tag,b===5||b===6||b===26||b===27){a=o=p;continue e}f=f.parentNode}}a=a.return}du(function(){var T=o,U=Xr(n),H=[];e:{var C=Lu.get(e);if(C!==void 0){var M=el,Z=e;switch(e){case"keypress":if(Ps(n)===0)break e;case"keydown":case"keyup":M=gx;break;case"focusin":Z="focus",M=Jr;break;case"focusout":Z="blur",M=Jr;break;case"beforeblur":case"afterblur":M=Jr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=xx;break;case Du:case qu:case _u:M=sx;break;case Uu:M=vx;break;case"scroll":case"scrollend":M=ex;break;case"wheel":M=jx;break;case"copy":case"cut":case"paste":M=rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=fu;break;case"toggle":case"beforetoggle":M=Ex}var ne=(t&4)!==0,Ae=!ne&&(e==="scroll"||e==="scrollend"),S=ne?C!==null?C+"Capture":null:C;ne=[];for(var E=T,A;E!==null;){var L=E;if(A=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||A===null||S===null||(L=Ca(E,S),L!=null&&ne.push(os(E,L,A))),Ae)break;E=E.return}0<ne.length&&(C=new M(C,Z,null,n,U),H.push({event:C,listeners:ne}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",C&&n!==Vr&&(Z=n.relatedTarget||n.fromElement)&&(Ci(Z)||Z[Ti]))break e;if((M||C)&&(C=U.window===U?U:(C=U.ownerDocument)?C.defaultView||C.parentWindow:window,M?(Z=n.relatedTarget||n.toElement,M=T,Z=Z?Ci(Z):null,Z!==null&&(Ae=h(Z),ne=Z.tag,Z!==Ae||ne!==5&&ne!==27&&ne!==6)&&(Z=null)):(M=null,Z=T),M!==Z)){if(ne=hu,L="onMouseLeave",S="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ne=fu,L="onPointerLeave",S="onPointerEnter",E="pointer"),Ae=M==null?C:Ta(M),A=Z==null?C:Ta(Z),C=new ne(L,E+"leave",M,n,U),C.target=Ae,C.relatedTarget=A,L=null,Ci(U)===T&&(ne=new ne(S,E+"enter",Z,n,U),ne.target=A,ne.relatedTarget=Ae,L=ne),Ae=L,M&&Z)t:{for(ne=wy,S=M,E=Z,A=0,L=S;L;L=ne(L))A++;L=0;for(var te=E;te;te=ne(te))L++;for(;0<A-L;)S=ne(S),A--;for(;0<L-A;)E=ne(E),L--;for(;A--;){if(S===E||E!==null&&S===E.alternate){ne=S;break t}S=ne(S),E=ne(E)}ne=null}else ne=null;M!==null&&lg(H,C,M,ne,!1),Z!==null&&Ae!==null&&lg(H,Ae,Z,ne,!0)}}e:{if(C=T?Ta(T):window,M=C.nodeName&&C.nodeName.toLowerCase(),M==="select"||M==="input"&&C.type==="file")var xe=Eu;else if(ju(C))if(Su)xe=Mx;else{xe=zx;var $=Rx}else M=C.nodeName,!M||M.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?T&&Yr(T.elementType)&&(xe=Eu):xe=Ox;if(xe&&(xe=xe(e,T))){wu(H,xe,n,U);break e}$&&$(e,C,T),e==="focusout"&&T&&C.type==="number"&&T.memoizedProps.value!=null&&Gr(C,"number",C.value)}switch($=T?Ta(T):window,e){case"focusin":(ju($)||$.contentEditable==="true")&&(Li=$,no=T,Ua=null);break;case"focusout":Ua=no=Li=null;break;case"mousedown":io=!0;break;case"contextmenu":case"mouseup":case"dragend":io=!1,Ou(H,n,U);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":Ou(H,n,U)}var de;if(Pr)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ui?vu(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(mu&&n.locale!=="ko"&&(Ui||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ui&&(de=uu()):(Mn=U,Qr="value"in Mn?Mn.value:Mn.textContent,Ui=!0)),$=Xl(T,fe),0<$.length&&(fe=new gu(fe,e,null,n,U),H.push({event:fe,listeners:$}),de?fe.data=de:(de=bu(n),de!==null&&(fe.data=de)))),(de=kx?Nx(e,n):Ax(e,n))&&(fe=Xl(T,"onBeforeInput"),0<fe.length&&($=new gu("onBeforeInput","beforeinput",null,n,U),H.push({event:$,listeners:fe}),$.data=de)),yy(H,e,T,n,U)}ag(H,t)})}function os(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xl(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=Ca(e,n),l!=null&&a.unshift(os(e,l,o)),l=Ca(e,t),l!=null&&a.push(os(e,l,o))),e.tag===3)return a;e=e.return}return[]}function wy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function lg(e,t,n,a,l){for(var o=t._reactName,p=[];n!==null&&n!==a;){var f=n,b=f.alternate,T=f.stateNode;if(f=f.tag,b!==null&&b===a)break;f!==5&&f!==26&&f!==27||T===null||(b=T,l?(T=Ca(n,o),T!=null&&p.unshift(os(n,T,b))):l||(T=Ca(n,o),T!=null&&p.push(os(n,T,b)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var Ey=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function rg(e){return(typeof e=="string"?e:""+e).replace(Ey,`
`).replace(Sy,"")}function og(e,t){return t=rg(t),rg(e)===t}function Ne(e,t,n,a,l,o){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Di(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Di(e,""+a);break;case"className":Ks(e,"class",a);break;case"tabIndex":Ks(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ks(e,n,a);break;case"style":ou(e,a,o);break;case"data":if(t!=="object"){Ks(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Js(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Ne(e,t,"name",l.name,l,null),Ne(e,t,"formEncType",l.formEncType,l,null),Ne(e,t,"formMethod",l.formMethod,l,null),Ne(e,t,"formTarget",l.formTarget,l,null)):(Ne(e,t,"encType",l.encType,l,null),Ne(e,t,"method",l.method,l,null),Ne(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Js(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=pn);break;case"onScroll":a!=null&&he("scroll",e);break;case"onScrollEnd":a!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Js(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":he("beforetoggle",e),he("toggle",e),Qs(e,"popover",a);break;case"xlinkActuate":un(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":un(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":un(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":un(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":un(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":un(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":un(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":un(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":un(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Qs(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Pm.get(n)||n,Qs(e,n,a))}}function Cc(e,t,n,a,l,o){switch(n){case"style":ou(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Di(e,a):(typeof a=="number"||typeof a=="bigint")&&Di(e,""+a);break;case"onScroll":a!=null&&he("scroll",e);break;case"onScrollEnd":a!=null&&he("scrollend",e);break;case"onClick":a!=null&&(e.onclick=pn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),o=e[ut]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof a=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Qs(e,n,a)}}}function at(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var a=!1,l=!1,o;for(o in n)if(n.hasOwnProperty(o)){var p=n[o];if(p!=null)switch(o){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ne(e,t,o,p,n,null)}}l&&Ne(e,t,"srcSet",n.srcSet,n,null),a&&Ne(e,t,"src",n.src,n,null);return;case"input":he("invalid",e);var f=o=p=l=null,b=null,T=null;for(a in n)if(n.hasOwnProperty(a)){var U=n[a];if(U!=null)switch(a){case"name":l=U;break;case"type":p=U;break;case"checked":b=U;break;case"defaultChecked":T=U;break;case"value":o=U;break;case"defaultValue":f=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,t));break;default:Ne(e,t,a,U,n,null)}}au(e,o,f,b,T,p,l,!1);return;case"select":he("invalid",e),a=p=o=null;for(l in n)if(n.hasOwnProperty(l)&&(f=n[l],f!=null))switch(l){case"value":o=f;break;case"defaultValue":p=f;break;case"multiple":a=f;default:Ne(e,t,l,f,n,null)}t=o,n=p,e.multiple=!!a,t!=null?Mi(e,!!a,t,!1):n!=null&&Mi(e,!!a,n,!0);return;case"textarea":he("invalid",e),o=l=a=null;for(p in n)if(n.hasOwnProperty(p)&&(f=n[p],f!=null))switch(p){case"value":a=f;break;case"defaultValue":l=f;break;case"children":o=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(c(91));break;default:Ne(e,t,p,f,n,null)}lu(e,a,l,o);return;case"option":for(b in n)if(n.hasOwnProperty(b)&&(a=n[b],a!=null))switch(b){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ne(e,t,b,a,n,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(a=0;a<rs.length;a++)he(rs[a],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in n)if(n.hasOwnProperty(T)&&(a=n[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ne(e,t,T,a,n,null)}return;default:if(Yr(t)){for(U in n)n.hasOwnProperty(U)&&(a=n[U],a!==void 0&&Cc(e,t,U,a,n,void 0));return}}for(f in n)n.hasOwnProperty(f)&&(a=n[f],a!=null&&Ne(e,t,f,a,n,null))}function ky(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,p=null,f=null,b=null,T=null,U=null;for(M in n){var H=n[M];if(n.hasOwnProperty(M)&&H!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":b=H;default:a.hasOwnProperty(M)||Ne(e,t,M,null,a,H)}}for(var C in a){var M=a[C];if(H=n[C],a.hasOwnProperty(C)&&(M!=null||H!=null))switch(C){case"type":o=M;break;case"name":l=M;break;case"checked":T=M;break;case"defaultChecked":U=M;break;case"value":p=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:M!==H&&Ne(e,t,C,M,a,H)}}Hr(e,p,f,b,T,U,o,l);return;case"select":M=p=f=C=null;for(o in n)if(b=n[o],n.hasOwnProperty(o)&&b!=null)switch(o){case"value":break;case"multiple":M=b;default:a.hasOwnProperty(o)||Ne(e,t,o,null,a,b)}for(l in a)if(o=a[l],b=n[l],a.hasOwnProperty(l)&&(o!=null||b!=null))switch(l){case"value":C=o;break;case"defaultValue":f=o;break;case"multiple":p=o;default:o!==b&&Ne(e,t,l,o,a,b)}t=f,n=p,a=M,C!=null?Mi(e,!!n,C,!1):!!a!=!!n&&(t!=null?Mi(e,!!n,t,!0):Mi(e,!!n,n?[]:"",!1));return;case"textarea":M=C=null;for(f in n)if(l=n[f],n.hasOwnProperty(f)&&l!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ne(e,t,f,null,a,l)}for(p in a)if(l=a[p],o=n[p],a.hasOwnProperty(p)&&(l!=null||o!=null))switch(p){case"value":C=l;break;case"defaultValue":M=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==o&&Ne(e,t,p,l,a,o)}su(e,C,M);return;case"option":for(var Z in n)if(C=n[Z],n.hasOwnProperty(Z)&&C!=null&&!a.hasOwnProperty(Z))switch(Z){case"selected":e.selected=!1;break;default:Ne(e,t,Z,null,a,C)}for(b in a)if(C=a[b],M=n[b],a.hasOwnProperty(b)&&C!==M&&(C!=null||M!=null))switch(b){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Ne(e,t,b,C,a,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in n)C=n[ne],n.hasOwnProperty(ne)&&C!=null&&!a.hasOwnProperty(ne)&&Ne(e,t,ne,null,a,C);for(T in a)if(C=a[T],M=n[T],a.hasOwnProperty(T)&&C!==M&&(C!=null||M!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:Ne(e,t,T,C,a,M)}return;default:if(Yr(t)){for(var Ae in n)C=n[Ae],n.hasOwnProperty(Ae)&&C!==void 0&&!a.hasOwnProperty(Ae)&&Cc(e,t,Ae,void 0,a,C);for(U in a)C=a[U],M=n[U],!a.hasOwnProperty(U)||C===M||C===void 0&&M===void 0||Cc(e,t,U,C,a,M);return}}for(var S in n)C=n[S],n.hasOwnProperty(S)&&C!=null&&!a.hasOwnProperty(S)&&Ne(e,t,S,null,a,C);for(H in a)C=a[H],M=n[H],!a.hasOwnProperty(H)||C===M||C==null&&M==null||Ne(e,t,H,C,a,M)}function cg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ny(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],o=l.transferSize,p=l.initiatorType,f=l.duration;if(o&&f&&cg(p)){for(p=0,f=l.responseEnd,a+=1;a<n.length;a++){var b=n[a],T=b.startTime;if(T>f)break;var U=b.transferSize,H=b.initiatorType;U&&cg(H)&&(b=b.responseEnd,p+=U*(b<f?1:(f-T)/(b-T)))}if(--a,t+=8*(o+p)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Rc=null,zc=null;function Il(e){return e.nodeType===9?e:e.ownerDocument}function dg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ug(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Oc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mc=null;function Ay(){var e=window.event;return e&&e.type==="popstate"?e===Mc?!1:(Mc=e,!0):(Mc=null,!1)}var pg=typeof setTimeout=="function"?setTimeout:void 0,Ty=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(e){return hg.resolve(null).then(e).catch(Ry)}:pg;function Ry(e){setTimeout(function(){throw e})}function Jn(e){return e==="head"}function gg(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),ua(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")cs(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,cs(n);for(var o=n.firstChild;o;){var p=o.nextSibling,f=o.nodeName;o[Aa]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=p}}else n==="body"&&cs(e.ownerDocument.body);n=l}while(n);ua(t)}function fg(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Dc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Dc(n),Lr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function zy(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Aa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Ht(e.nextSibling),e===null)break}return null}function Oy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ht(e.nextSibling),e===null))return null;return e}function mg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ht(e.nextSibling),e===null))return null;return e}function qc(e){return e.data==="$?"||e.data==="$~"}function _c(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function My(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Uc=null;function xg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ht(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function yg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function vg(e,t,n){switch(t=Il(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function cs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lr(e)}var Gt=new Map,bg=new Set;function Wl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Tn=X.d;X.d={f:Dy,r:qy,D:_y,C:Uy,L:Ly,m:By,X:Gy,S:Hy,M:Yy};function Dy(){var e=Tn.f(),t=Ul();return e||t}function qy(e){var t=Ri(e);t!==null&&t.tag===5&&t.type==="form"?Up(t):Tn.r(e)}var oa=typeof document>"u"?null:document;function jg(e,t,n){var a=oa;if(a&&typeof t=="string"&&t){var l=Mt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),bg.has(l)||(bg.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),at(t,"link",e),Pe(t),a.head.appendChild(t)))}}function _y(e){Tn.D(e),jg("dns-prefetch",e,null)}function Uy(e,t){Tn.C(e,t),jg("preconnect",e,t)}function Ly(e,t,n){Tn.L(e,t,n);var a=oa;if(a&&e&&t){var l='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Mt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Mt(n.imageSizes)+'"]')):l+='[href="'+Mt(e)+'"]';var o=l;switch(t){case"style":o=ca(e);break;case"script":o=da(e)}Gt.has(o)||(e=j({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Gt.set(o,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(ds(o))||t==="script"&&a.querySelector(us(o))||(t=a.createElement("link"),at(t,"link",e),Pe(t),a.head.appendChild(t)))}}function By(e,t){Tn.m(e,t);var n=oa;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Mt(a)+'"][href="'+Mt(e)+'"]',o=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=da(e)}if(!Gt.has(o)&&(e=j({rel:"modulepreload",href:e},t),Gt.set(o,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(us(o)))return}a=n.createElement("link"),at(a,"link",e),Pe(a),n.head.appendChild(a)}}}function Hy(e,t,n){Tn.S(e,t,n);var a=oa;if(a&&e){var l=zi(a).hoistableStyles,o=ca(e);t=t||"default";var p=l.get(o);if(!p){var f={loading:0,preload:null};if(p=a.querySelector(ds(o)))f.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Gt.get(o))&&Lc(e,n);var b=p=a.createElement("link");Pe(b),at(b,"link",e),b._p=new Promise(function(T,U){b.onload=T,b.onerror=U}),b.addEventListener("load",function(){f.loading|=1}),b.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Ql(p,t,a)}p={type:"stylesheet",instance:p,count:1,state:f},l.set(o,p)}}}function Gy(e,t){Tn.X(e,t);var n=oa;if(n&&e){var a=zi(n).hoistableScripts,l=da(e),o=a.get(l);o||(o=n.querySelector(us(l)),o||(e=j({src:e,async:!0},t),(t=Gt.get(l))&&Bc(e,t),o=n.createElement("script"),Pe(o),at(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}function Yy(e,t){Tn.M(e,t);var n=oa;if(n&&e){var a=zi(n).hoistableScripts,l=da(e),o=a.get(l);o||(o=n.querySelector(us(l)),o||(e=j({src:e,async:!0,type:"module"},t),(t=Gt.get(l))&&Bc(e,t),o=n.createElement("script"),Pe(o),at(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}function wg(e,t,n,a){var l=(l=ue.current)?Wl(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ca(n.href),n=zi(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ca(n.href);var o=zi(l).hoistableStyles,p=o.get(e);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,p),(o=l.querySelector(ds(e)))&&!o._p&&(p.instance=o,p.state.loading=5),Gt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Gt.set(e,n),o||Vy(l,e,n,p.state))),t&&a===null)throw Error(c(528,""));return p}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=da(n),n=zi(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function ca(e){return'href="'+Mt(e)+'"'}function ds(e){return'link[rel="stylesheet"]['+e+"]"}function Eg(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function Vy(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),at(t,"link",n),Pe(t),e.head.appendChild(t))}function da(e){return'[src="'+Mt(e)+'"]'}function us(e){return"script[async]"+e}function Sg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Mt(n.href)+'"]');if(a)return t.instance=a,Pe(a),a;var l=j({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Pe(a),at(a,"style",l),Ql(a,n.precedence,e),t.instance=a;case"stylesheet":l=ca(n.href);var o=e.querySelector(ds(l));if(o)return t.state.loading|=4,t.instance=o,Pe(o),o;a=Eg(n),(l=Gt.get(l))&&Lc(a,l),o=(e.ownerDocument||e).createElement("link"),Pe(o);var p=o;return p._p=new Promise(function(f,b){p.onload=f,p.onerror=b}),at(o,"link",a),t.state.loading|=4,Ql(o,n.precedence,e),t.instance=o;case"script":return o=da(n.src),(l=e.querySelector(us(o)))?(t.instance=l,Pe(l),l):(a=n,(l=Gt.get(o))&&(a=j({},n),Bc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Pe(l),at(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ql(a,n.precedence,e));return t.instance}function Ql(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,o=l,p=0;p<a.length;p++){var f=a[p];if(f.dataset.precedence===t)o=f;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Lc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Kl=null;function kg(e,t,n){if(Kl===null){var a=new Map,l=Kl=new Map;l.set(n,a)}else l=Kl,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var o=n[l];if(!(o[Aa]||o[et]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var p=o.getAttribute(t)||"";p=e+p;var f=a.get(p);f?f.push(o):a.set(p,[o])}}return a}function Ng(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Xy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ag(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Iy(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=ca(a.href),o=t.querySelector(ds(l));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,Pe(o);return}o=t.ownerDocument||t,a=Eg(a),(l=Gt.get(l))&&Lc(a,l),o=o.createElement("link"),Pe(o);var p=o;p._p=new Promise(function(f,b){p.onload=f,p.onerror=b}),at(o,"link",a),n.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Zl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Hc=0;function Wy(e,t){return e.stylesheets&&e.count===0&&$l(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Hc===0&&(Hc=62500*Ny());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Hc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jl=null;function $l(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jl=new Map,t.forEach(Qy,e),Jl=null,Zl.call(e))}function Qy(e,t){if(!(t.state.loading&4)){var n=Jl.get(e);if(n)var a=n.get(null);else{n=new Map,Jl.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var p=l[o];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),a=p)}a&&n.set(null,a)}l=t.instance,p=l.getAttribute("data-precedence"),o=n.get(p)||a,o===a&&n.set(null,l),n.set(p,l),this.count++,a=Zl.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var ps={$$typeof:O,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Ky(e,t,n,a,l,o,p,f,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dr(0),this.hiddenUpdates=Dr(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Tg(e,t,n,a,l,o,p,f,b,T,U,H){return e=new Ky(e,t,n,p,b,T,U,H,f),t=1,o===!0&&(t|=24),o=St(3,null,null,t),e.current=o,o.stateNode=e,t=vo(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},Eo(o),e}function Cg(e){return e?(e=Gi,e):Gi}function Rg(e,t,n,a,l,o){l=Cg(l),a.context===null?a.context=l:a.pendingContext=l,a=Bn(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=Hn(e,a,t),n!==null&&(xt(n,e,t),Xa(n,e,t))}function zg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gc(e,t){zg(e,t),(e=e.alternate)&&zg(e,t)}function Og(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&xt(t,e,67108864),Gc(e,67108864)}}function Mg(e){if(e.tag===13||e.tag===31){var t=Ct();t=qr(t);var n=ci(e,t);n!==null&&xt(n,e,t),Gc(e,t)}}var Pl=!0;function Zy(e,t,n,a){var l=D.T;D.T=null;var o=X.p;try{X.p=2,Yc(e,t,n,a)}finally{X.p=o,D.T=l}}function Jy(e,t,n,a){var l=D.T;D.T=null;var o=X.p;try{X.p=8,Yc(e,t,n,a)}finally{X.p=o,D.T=l}}function Yc(e,t,n,a){if(Pl){var l=Vc(a);if(l===null)Tc(e,t,a,Fl,n),qg(e,a);else if(Py(l,e,t,n,a))a.stopPropagation();else if(qg(e,a),t&4&&-1<$y.indexOf(e)){for(;l!==null;){var o=Ri(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var p=ai(o.pendingLanes);if(p!==0){var f=o;for(f.pendingLanes|=2,f.entangledLanes|=2;p;){var b=1<<31-wt(p);f.entanglements[1]|=b,p&=~b}sn(o),(be&6)===0&&(ql=bt()+500,ls(0))}}break;case 31:case 13:f=ci(o,2),f!==null&&xt(f,o,2),Ul(),Gc(o,2)}if(o=Vc(a),o===null&&Tc(e,t,a,Fl,n),o===l)break;l=o}l!==null&&a.stopPropagation()}else Tc(e,t,a,null,n)}}function Vc(e){return e=Xr(e),Xc(e)}var Fl=null;function Xc(e){if(Fl=null,e=Ci(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===31){if(e=x(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fl=e,null}function Dg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_m()){case Yd:return 2;case Vd:return 8;case Ys:case Um:return 32;case Xd:return 268435456;default:return 32}default:return 32}}var Ic=!1,$n=null,Pn=null,Fn=null,hs=new Map,gs=new Map,ei=[],$y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qg(e,t){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":hs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gs.delete(t.pointerId)}}function fs(e,t,n,a,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Ri(t),t!==null&&Og(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Py(e,t,n,a,l){switch(t){case"focusin":return $n=fs($n,e,t,n,a,l),!0;case"dragenter":return Pn=fs(Pn,e,t,n,a,l),!0;case"mouseover":return Fn=fs(Fn,e,t,n,a,l),!0;case"pointerover":var o=l.pointerId;return hs.set(o,fs(hs.get(o)||null,e,t,n,a,l)),!0;case"gotpointercapture":return o=l.pointerId,gs.set(o,fs(gs.get(o)||null,e,t,n,a,l)),!0}return!1}function _g(e){var t=Ci(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,Jd(e.priority,function(){Mg(n)});return}}else if(t===31){if(t=x(n),t!==null){e.blockedOn=t,Jd(e.priority,function(){Mg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function er(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Vr=a,n.target.dispatchEvent(a),Vr=null}else return t=Ri(n),t!==null&&Og(t),e.blockedOn=n,!1;t.shift()}return!0}function Ug(e,t,n){er(e)&&n.delete(t)}function Fy(){Ic=!1,$n!==null&&er($n)&&($n=null),Pn!==null&&er(Pn)&&(Pn=null),Fn!==null&&er(Fn)&&(Fn=null),hs.forEach(Ug),gs.forEach(Ug)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ic||(Ic=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Fy)))}var nr=null;function Lg(e){nr!==e&&(nr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){nr===e&&(nr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Xc(a||n)===null)continue;break}var o=Ri(n);o!==null&&(e.splice(t,3),t-=3,Vo(o,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function ua(e){function t(b){return tr(b,e)}$n!==null&&tr($n,e),Pn!==null&&tr(Pn,e),Fn!==null&&tr(Fn,e),hs.forEach(t),gs.forEach(t);for(var n=0;n<ei.length;n++){var a=ei[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ei.length&&(n=ei[0],n.blockedOn===null);)_g(n),n.blockedOn===null&&ei.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],o=n[a+1],p=l[ut]||null;if(typeof o=="function")p||Lg(n);else if(p){var f=null;if(o&&o.hasAttribute("formAction")){if(l=o,p=o[ut]||null)f=p.formAction;else if(Xc(l)!==null)continue}else f=p.action;typeof f=="function"?n[a+1]=f:(n.splice(a,3),a-=3),Lg(n)}}}function Bg(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(p){return l=p})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Wc(e){this._internalRoot=e}ir.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=Ct();Rg(n,a,e,t,null,null)},ir.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rg(e.current,2,null,e,null,null),Ul(),t[Ti]=null}};function ir(e){this._internalRoot=e}ir.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ei.length&&t!==0&&t<ei[n].priority;n++);ei.splice(n,0,e),n===0&&_g(e)}};var Hg=r.version;if(Hg!=="19.2.5")throw Error(c(527,Hg,"19.2.5"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=m(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var ev={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ar.isDisabled&&ar.supportsFiber)try{Sa=ar.inject(ev),jt=ar}catch{}}return xs.createRoot=function(e,t){if(!u(e))throw Error(c(299));var n=!1,a="",l=Qp,o=Kp,p=Zp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=Tg(e,1,!1,null,null,n,a,null,l,o,p,Bg),e[Ti]=t.current,Ac(e),new Wc(t)},xs.hydrateRoot=function(e,t,n){if(!u(e))throw Error(c(299));var a=!1,l="",o=Qp,p=Kp,f=Zp,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(f=n.onRecoverableError),n.formState!==void 0&&(b=n.formState)),t=Tg(e,1,!0,t,n??null,a,l,b,o,p,f,Bg),t.context=Cg(null),n=t.current,a=Ct(),a=qr(a),l=Bn(a),l.callback=null,Hn(n,l,a),n=a,t.current.lanes=n,Na(t,n),sn(t),e[Ti]=t.current,Ac(e),new ir(t)},xs.version="19.2.5",xs}var Jg;function uv(){if(Jg)return Zc.exports;Jg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),Zc.exports=dv(),Zc.exports}var pv=uv();const hv=Mf(pv);/**
 * react-router v7.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $g="popstate";function Pg(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function gv(s={}){function r(c,u){var m;let h=(m=u.state)==null?void 0:m.masked,{pathname:g,search:x,hash:y}=h||c.location;return dd("",{pathname:g,search:x,hash:y},u.state&&u.state.usr||null,u.state&&u.state.key||"default",h?{pathname:c.location.pathname,search:c.location.search,hash:c.location.hash}:void 0)}function d(c,u){return typeof u=="string"?u:Rs(u)}return mv(r,d,null,s)}function De(s,r){if(s===!1||s===null||typeof s>"u")throw new Error(r)}function on(s,r){if(!s){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function fv(){return Math.random().toString(36).substring(2,10)}function Fg(s,r){return{usr:s.state,key:s.key,idx:r,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function dd(s,r,d=null,c,u){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof r=="string"?va(r):r,state:d,key:r&&r.key||c||fv(),unstable_mask:u}}function Rs({pathname:s="/",search:r="",hash:d=""}){return r&&r!=="?"&&(s+=r.charAt(0)==="?"?r:"?"+r),d&&d!=="#"&&(s+=d.charAt(0)==="#"?d:"#"+d),s}function va(s){let r={};if(s){let d=s.indexOf("#");d>=0&&(r.hash=s.substring(d),s=s.substring(0,d));let c=s.indexOf("?");c>=0&&(r.search=s.substring(c),s=s.substring(0,c)),s&&(r.pathname=s)}return r}function mv(s,r,d,c={}){let{window:u=document.defaultView,v5Compat:h=!1}=c,g=u.history,x="POP",y=null,m=v();m==null&&(m=0,g.replaceState({...g.state,idx:m},""));function v(){return(g.state||{idx:null}).idx}function j(){x="POP";let R=v(),G=R==null?null:R-m;m=R,y&&y({action:x,location:q.location,delta:G})}function _(R,G){x="PUSH";let W=Pg(R)?R:dd(q.location,R,G);m=v()+1;let O=Fg(W,m),J=q.createHref(W.unstable_mask||W);try{g.pushState(O,"",J)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;u.location.assign(J)}h&&y&&y({action:x,location:q.location,delta:1})}function V(R,G){x="REPLACE";let W=Pg(R)?R:dd(q.location,R,G);m=v();let O=Fg(W,m),J=q.createHref(W.unstable_mask||W);g.replaceState(O,"",J),h&&y&&y({action:x,location:q.location,delta:0})}function N(R){return xv(R)}let q={get action(){return x},get location(){return s(u,g)},listen(R){if(y)throw new Error("A history only accepts one active listener");return u.addEventListener($g,j),y=R,()=>{u.removeEventListener($g,j),y=null}},createHref(R){return r(u,R)},createURL:N,encodeLocation(R){let G=N(R);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:_,replace:V,go(R){return g.go(R)}};return q}function xv(s,r=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),De(d,"No window.location.(origin|href) available to create URL");let c=typeof s=="string"?s:Rs(s);return c=c.replace(/ $/,"%20"),!r&&c.startsWith("//")&&(c=d+c),new URL(c,d)}function Df(s,r,d="/"){return yv(s,r,d,!1)}function yv(s,r,d,c){let u=typeof r=="string"?va(r):r,h=Cn(u.pathname||"/",d);if(h==null)return null;let g=qf(s);vv(g);let x=null;for(let y=0;x==null&&y<g.length;++y){let m=Rv(h);x=Tv(g[y],m,c)}return x}function qf(s,r=[],d=[],c="",u=!1){let h=(g,x,y=u,m)=>{let v={relativePath:m===void 0?g.path||"":m,caseSensitive:g.caseSensitive===!0,childrenIndex:x,route:g};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(c)&&y)return;De(v.relativePath.startsWith(c),`Absolute route path "${v.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(c.length)}let j=rn([c,v.relativePath]),_=d.concat(v);g.children&&g.children.length>0&&(De(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),qf(g.children,r,_,j,y)),!(g.path==null&&!g.index)&&r.push({path:j,score:Nv(j,g.index),routesMeta:_})};return s.forEach((g,x)=>{var y;if(g.path===""||!((y=g.path)!=null&&y.includes("?")))h(g,x);else for(let m of _f(g.path))h(g,x,!0,m)}),r}function _f(s){let r=s.split("/");if(r.length===0)return[];let[d,...c]=r,u=d.endsWith("?"),h=d.replace(/\?$/,"");if(c.length===0)return u?[h,""]:[h];let g=_f(c.join("/")),x=[];return x.push(...g.map(y=>y===""?h:[h,y].join("/"))),u&&x.push(...g),x.map(y=>s.startsWith("/")&&y===""?"/":y)}function vv(s){s.sort((r,d)=>r.score!==d.score?d.score-r.score:Av(r.routesMeta.map(c=>c.childrenIndex),d.routesMeta.map(c=>c.childrenIndex)))}var bv=/^:[\w-]+$/,jv=3,wv=2,Ev=1,Sv=10,kv=-2,ef=s=>s==="*";function Nv(s,r){let d=s.split("/"),c=d.length;return d.some(ef)&&(c+=kv),r&&(c+=wv),d.filter(u=>!ef(u)).reduce((u,h)=>u+(bv.test(h)?jv:h===""?Ev:Sv),c)}function Av(s,r){return s.length===r.length&&s.slice(0,-1).every((c,u)=>c===r[u])?s[s.length-1]-r[r.length-1]:0}function Tv(s,r,d=!1){let{routesMeta:c}=s,u={},h="/",g=[];for(let x=0;x<c.length;++x){let y=c[x],m=x===c.length-1,v=h==="/"?r:r.slice(h.length)||"/",j=fr({path:y.relativePath,caseSensitive:y.caseSensitive,end:m},v),_=y.route;if(!j&&m&&d&&!c[c.length-1].route.index&&(j=fr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},v)),!j)return null;Object.assign(u,j.params),g.push({params:u,pathname:rn([h,j.pathname]),pathnameBase:Dv(rn([h,j.pathnameBase])),route:_}),j.pathnameBase!=="/"&&(h=rn([h,j.pathnameBase]))}return g}function fr(s,r){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[d,c]=Cv(s.path,s.caseSensitive,s.end),u=r.match(d);if(!u)return null;let h=u[0],g=h.replace(/(.)\/+$/,"$1"),x=u.slice(1);return{params:c.reduce((m,{paramName:v,isOptional:j},_)=>{if(v==="*"){let N=x[_]||"";g=h.slice(0,h.length-N.length).replace(/(.)\/+$/,"$1")}const V=x[_];return j&&!V?m[v]=void 0:m[v]=(V||"").replace(/%2F/g,"/"),m},{}),pathname:h,pathnameBase:g,pattern:s}}function Cv(s,r=!1,d=!0){on(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let c=[],u="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,x,y,m,v)=>{if(c.push({paramName:x,isOptional:y!=null}),y){let j=v.charAt(m+g.length);return j&&j!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(c.push({paramName:"*"}),u+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?u+="\\/*$":s!==""&&s!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,r?void 0:"i"),c]}function Rv(s){try{return s.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return on(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),s}}function Cn(s,r){if(r==="/")return s;if(!s.toLowerCase().startsWith(r.toLowerCase()))return null;let d=r.endsWith("/")?r.length-1:r.length,c=s.charAt(d);return c&&c!=="/"?null:s.slice(d)||"/"}var zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ov(s,r="/"){let{pathname:d,search:c="",hash:u=""}=typeof s=="string"?va(s):s,h;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?h=tf(d.substring(1),"/"):h=tf(d,r)):h=r,{pathname:h,search:qv(c),hash:_v(u)}}function tf(s,r){let d=r.replace(/\/+$/,"").split("/");return s.split("/").forEach(u=>{u===".."?d.length>1&&d.pop():u!=="."&&d.push(u)}),d.length>1?d.join("/"):"/"}function Fc(s,r,d,c){return`Cannot include a '${s}' character in a manually specified \`to.${r}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Mv(s){return s.filter((r,d)=>d===0||r.route.path&&r.route.path.length>0)}function Uf(s){let r=Mv(s);return r.map((d,c)=>c===r.length-1?d.pathname:d.pathnameBase)}function wd(s,r,d,c=!1){let u;typeof s=="string"?u=va(s):(u={...s},De(!u.pathname||!u.pathname.includes("?"),Fc("?","pathname","search",u)),De(!u.pathname||!u.pathname.includes("#"),Fc("#","pathname","hash",u)),De(!u.search||!u.search.includes("#"),Fc("#","search","hash",u)));let h=s===""||u.pathname==="",g=h?"/":u.pathname,x;if(g==null)x=d;else{let j=r.length-1;if(!c&&g.startsWith("..")){let _=g.split("/");for(;_[0]==="..";)_.shift(),j-=1;u.pathname=_.join("/")}x=j>=0?r[j]:"/"}let y=Ov(u,x),m=g&&g!=="/"&&g.endsWith("/"),v=(h||g===".")&&d.endsWith("/");return!y.pathname.endsWith("/")&&(m||v)&&(y.pathname+="/"),y}var rn=s=>s.join("/").replace(/\/\/+/g,"/"),Dv=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),qv=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,_v=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Uv=class{constructor(s,r,d,c=!1){this.status=s,this.statusText=r||"",this.internal=c,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function Lv(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function Bv(s){return s.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Lf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Bf(s,r){let d=s;if(typeof d!="string"||!zv.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let c=d,u=!1;if(Lf)try{let h=new URL(window.location.href),g=d.startsWith("//")?new URL(h.protocol+d):new URL(d),x=Cn(g.pathname,r);g.origin===h.origin&&x!=null?d=x+g.search+g.hash:u=!0}catch{on(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:u,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Hf=["POST","PUT","PATCH","DELETE"];new Set(Hf);var Hv=["GET",...Hf];new Set(Hv);var ba=k.createContext(null);ba.displayName="DataRouter";var vr=k.createContext(null);vr.displayName="DataRouterState";var Gf=k.createContext(!1);function Gv(){return k.useContext(Gf)}var Yf=k.createContext({isTransitioning:!1});Yf.displayName="ViewTransition";var Yv=k.createContext(new Map);Yv.displayName="Fetchers";var Vv=k.createContext(null);Vv.displayName="Await";var Wt=k.createContext(null);Wt.displayName="Navigation";var zs=k.createContext(null);zs.displayName="Location";var cn=k.createContext({outlet:null,matches:[],isDataRoute:!1});cn.displayName="Route";var Ed=k.createContext(null);Ed.displayName="RouteError";var Vf="REACT_ROUTER_ERROR",Xv="REDIRECT",Iv="ROUTE_ERROR_RESPONSE";function Wv(s){if(s.startsWith(`${Vf}:${Xv}:{`))try{let r=JSON.parse(s.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function Qv(s){if(s.startsWith(`${Vf}:${Iv}:{`))try{let r=JSON.parse(s.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Uv(r.status,r.statusText,r.data)}catch{}}function Kv(s,{relative:r}={}){De(Os(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:c}=k.useContext(Wt),{hash:u,pathname:h,search:g}=Ms(s,{relative:r}),x=h;return d!=="/"&&(x=h==="/"?d:rn([d,h])),c.createHref({pathname:x,search:g,hash:u})}function Os(){return k.useContext(zs)!=null}function Qt(){return De(Os(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(zs).location}var Xf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function If(s){k.useContext(Wt).static||k.useLayoutEffect(s)}function Wf(){let{isDataRoute:s}=k.useContext(cn);return s?cb():Zv()}function Zv(){De(Os(),"useNavigate() may be used only in the context of a <Router> component.");let s=k.useContext(ba),{basename:r,navigator:d}=k.useContext(Wt),{matches:c}=k.useContext(cn),{pathname:u}=Qt(),h=JSON.stringify(Uf(c)),g=k.useRef(!1);return If(()=>{g.current=!0}),k.useCallback((y,m={})=>{if(on(g.current,Xf),!g.current)return;if(typeof y=="number"){d.go(y);return}let v=wd(y,JSON.parse(h),u,m.relative==="path");s==null&&r!=="/"&&(v.pathname=v.pathname==="/"?r:rn([r,v.pathname])),(m.replace?d.replace:d.push)(v,m.state,m)},[r,d,h,u,s])}var Jv=k.createContext(null);function $v(s){let r=k.useContext(cn).outlet;return k.useMemo(()=>r&&k.createElement(Jv.Provider,{value:s},r),[r,s])}function Ms(s,{relative:r}={}){let{matches:d}=k.useContext(cn),{pathname:c}=Qt(),u=JSON.stringify(Uf(d));return k.useMemo(()=>wd(s,JSON.parse(u),c,r==="path"),[s,u,c,r])}function Pv(s,r){return Qf(s,r)}function Qf(s,r,d){var R;De(Os(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=k.useContext(Wt),{matches:u}=k.useContext(cn),h=u[u.length-1],g=h?h.params:{},x=h?h.pathname:"/",y=h?h.pathnameBase:"/",m=h&&h.route;{let G=m&&m.path||"";Zf(x,!m||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let v=Qt(),j;if(r){let G=typeof r=="string"?va(r):r;De(y==="/"||((R=G.pathname)==null?void 0:R.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${G.pathname}" was given in the \`location\` prop.`),j=G}else j=v;let _=j.pathname||"/",V=_;if(y!=="/"){let G=y.replace(/^\//,"").split("/");V="/"+_.replace(/^\//,"").split("/").slice(G.length).join("/")}let N=Df(s,{pathname:V});on(m||N!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),on(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=ib(N&&N.map(G=>Object.assign({},G,{params:Object.assign({},g,G.params),pathname:rn([y,c.encodeLocation?c.encodeLocation(G.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?y:rn([y,c.encodeLocation?c.encodeLocation(G.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),u,d);return r&&q?k.createElement(zs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...j},navigationType:"POP"}},q):q}function Fv(){let s=ob(),r=Lv(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),d=s instanceof Error?s.stack:null,c="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",s),g=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:h},"ErrorBoundary")," or"," ",k.createElement("code",{style:h},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},r),d?k.createElement("pre",{style:u},d):null,g)}var eb=k.createElement(Fv,null),Kf=class extends k.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,r){return r.location!==s.location||r.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:r.error,location:r.location,revalidation:s.revalidation||r.revalidation}}componentDidCatch(s,r){this.props.onError?this.props.onError(s,r):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const d=Qv(s.digest);d&&(s=d)}let r=s!==void 0?k.createElement(cn.Provider,{value:this.props.routeContext},k.createElement(Ed.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?k.createElement(tb,{error:s},r):r}};Kf.contextType=Gf;var ed=new WeakMap;function tb({children:s,error:r}){let{basename:d}=k.useContext(Wt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let c=Wv(r.digest);if(c){let u=ed.get(r);if(u)throw u;let h=Bf(c.location,d);if(Lf&&!ed.get(r))if(h.isExternal||c.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:c.replace}));throw ed.set(r,g),g}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return s}function nb({routeContext:s,match:r,children:d}){let c=k.useContext(ba);return c&&c.static&&c.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=r.route.id),k.createElement(cn.Provider,{value:s},d)}function ib(s,r=[],d){let c=d==null?void 0:d.state;if(s==null){if(!c)return null;if(c.errors)s=c.matches;else if(r.length===0&&!c.initialized&&c.matches.length>0)s=c.matches;else return null}let u=s,h=c==null?void 0:c.errors;if(h!=null){let v=u.findIndex(j=>j.route.id&&(h==null?void 0:h[j.route.id])!==void 0);De(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),u=u.slice(0,Math.min(u.length,v+1))}let g=!1,x=-1;if(d&&c){g=c.renderFallback;for(let v=0;v<u.length;v++){let j=u[v];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(x=v),j.route.id){let{loaderData:_,errors:V}=c,N=j.route.loader&&!_.hasOwnProperty(j.route.id)&&(!V||V[j.route.id]===void 0);if(j.route.lazy||N){d.isStatic&&(g=!0),x>=0?u=u.slice(0,x+1):u=[u[0]];break}}}}let y=d==null?void 0:d.onError,m=c&&y?(v,j)=>{var _,V;y(v,{location:c.location,params:((V=(_=c.matches)==null?void 0:_[0])==null?void 0:V.params)??{},unstable_pattern:Bv(c.matches),errorInfo:j})}:void 0;return u.reduceRight((v,j,_)=>{let V,N=!1,q=null,R=null;c&&(V=h&&j.route.id?h[j.route.id]:void 0,q=j.route.errorElement||eb,g&&(x<0&&_===0?(Zf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,R=null):x===_&&(N=!0,R=j.route.hydrateFallbackElement||null)));let G=r.concat(u.slice(0,_+1)),W=()=>{let O;return V?O=q:N?O=R:j.route.Component?O=k.createElement(j.route.Component,null):j.route.element?O=j.route.element:O=v,k.createElement(nb,{match:j,routeContext:{outlet:v,matches:G,isDataRoute:c!=null},children:O})};return c&&(j.route.ErrorBoundary||j.route.errorElement||_===0)?k.createElement(Kf,{location:c.location,revalidation:c.revalidation,component:q,error:V,children:W(),routeContext:{outlet:null,matches:G,isDataRoute:!0},onError:m}):W()},null)}function Sd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ab(s){let r=k.useContext(ba);return De(r,Sd(s)),r}function sb(s){let r=k.useContext(vr);return De(r,Sd(s)),r}function lb(s){let r=k.useContext(cn);return De(r,Sd(s)),r}function kd(s){let r=lb(s),d=r.matches[r.matches.length-1];return De(d.route.id,`${s} can only be used on routes that contain a unique "id"`),d.route.id}function rb(){return kd("useRouteId")}function ob(){var c;let s=k.useContext(Ed),r=sb("useRouteError"),d=kd("useRouteError");return s!==void 0?s:(c=r.errors)==null?void 0:c[d]}function cb(){let{router:s}=ab("useNavigate"),r=kd("useNavigate"),d=k.useRef(!1);return If(()=>{d.current=!0}),k.useCallback(async(u,h={})=>{on(d.current,Xf),d.current&&(typeof u=="number"?await s.navigate(u):await s.navigate(u,{fromRouteId:r,...h}))},[s,r])}var nf={};function Zf(s,r,d){!r&&!nf[s]&&(nf[s]=!0,on(!1,d))}k.memo(db);function db({routes:s,future:r,state:d,isStatic:c,onError:u}){return Qf(s,void 0,{state:d,isStatic:c,onError:u})}function ub(s){return $v(s.context)}function Rt(s){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function pb({basename:s="/",children:r=null,location:d,navigationType:c="POP",navigator:u,static:h=!1,unstable_useTransitions:g}){De(!Os(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=s.replace(/^\/*/,"/"),y=k.useMemo(()=>({basename:x,navigator:u,static:h,unstable_useTransitions:g,future:{}}),[x,u,h,g]);typeof d=="string"&&(d=va(d));let{pathname:m="/",search:v="",hash:j="",state:_=null,key:V="default",unstable_mask:N}=d,q=k.useMemo(()=>{let R=Cn(m,x);return R==null?null:{location:{pathname:R,search:v,hash:j,state:_,key:V,unstable_mask:N},navigationType:c}},[x,m,v,j,_,V,c,N]);return on(q!=null,`<Router basename="${x}"> is not able to match the URL "${m}${v}${j}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:k.createElement(Wt.Provider,{value:y},k.createElement(zs.Provider,{children:r,value:q}))}function hb({children:s,location:r}){return Pv(ud(s),r)}function ud(s,r=[]){let d=[];return k.Children.forEach(s,(c,u)=>{if(!k.isValidElement(c))return;let h=[...r,u];if(c.type===k.Fragment){d.push.apply(d,ud(c.props.children,h));return}De(c.type===Rt,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=ud(c.props.children,h)),d.push(g)}),d}var or="get",cr="application/x-www-form-urlencoded";function br(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function gb(s){return br(s)&&s.tagName.toLowerCase()==="button"}function fb(s){return br(s)&&s.tagName.toLowerCase()==="form"}function mb(s){return br(s)&&s.tagName.toLowerCase()==="input"}function xb(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function yb(s,r){return s.button===0&&(!r||r==="_self")&&!xb(s)}var sr=null;function vb(){if(sr===null)try{new FormData(document.createElement("form"),0),sr=!1}catch{sr=!0}return sr}var bb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function td(s){return s!=null&&!bb.has(s)?(on(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cr}"`),null):s}function jb(s,r){let d,c,u,h,g;if(fb(s)){let x=s.getAttribute("action");c=x?Cn(x,r):null,d=s.getAttribute("method")||or,u=td(s.getAttribute("enctype"))||cr,h=new FormData(s)}else if(gb(s)||mb(s)&&(s.type==="submit"||s.type==="image")){let x=s.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=s.getAttribute("formaction")||x.getAttribute("action");if(c=y?Cn(y,r):null,d=s.getAttribute("formmethod")||x.getAttribute("method")||or,u=td(s.getAttribute("formenctype"))||td(x.getAttribute("enctype"))||cr,h=new FormData(x,s),!vb()){let{name:m,type:v,value:j}=s;if(v==="image"){let _=m?`${m}.`:"";h.append(`${_}x`,"0"),h.append(`${_}y`,"0")}else m&&h.append(m,j)}}else{if(br(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=or,c=null,u=cr,g=s}return h&&u==="text/plain"&&(g=h,h=void 0),{action:c,method:d.toLowerCase(),encType:u,formData:h,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Nd(s,r){if(s===!1||s===null||typeof s>"u")throw new Error(r)}function Jf(s,r,d,c){let u=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return d?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${c}`:u.pathname=`${u.pathname}.${c}`:u.pathname==="/"?u.pathname=`_root.${c}`:r&&Cn(u.pathname,r)==="/"?u.pathname=`${r.replace(/\/$/,"")}/_root.${c}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${c}`,u}async function wb(s,r){if(s.id in r)return r[s.id];try{let d=await import(s.module);return r[s.id]=d,d}catch(d){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Eb(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Sb(s,r,d){let c=await Promise.all(s.map(async u=>{let h=r.routes[u.route.id];if(h){let g=await wb(h,d);return g.links?g.links():[]}return[]}));return Tb(c.flat(1).filter(Eb).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function af(s,r,d,c,u,h){let g=(y,m)=>d[m]?y.route.id!==d[m].route.id:!0,x=(y,m)=>{var v;return d[m].pathname!==y.pathname||((v=d[m].route.path)==null?void 0:v.endsWith("*"))&&d[m].params["*"]!==y.params["*"]};return h==="assets"?r.filter((y,m)=>g(y,m)||x(y,m)):h==="data"?r.filter((y,m)=>{var j;let v=c.routes[y.route.id];if(!v||!v.hasLoader)return!1;if(g(y,m)||x(y,m))return!0;if(y.route.shouldRevalidate){let _=y.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((j=d[0])==null?void 0:j.params)||{},nextUrl:new URL(s,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function kb(s,r,{includeHydrateFallback:d}={}){return Nb(s.map(c=>{let u=r.routes[c.route.id];if(!u)return[];let h=[u.module];return u.clientActionModule&&(h=h.concat(u.clientActionModule)),u.clientLoaderModule&&(h=h.concat(u.clientLoaderModule)),d&&u.hydrateFallbackModule&&(h=h.concat(u.hydrateFallbackModule)),u.imports&&(h=h.concat(u.imports)),h}).flat(1))}function Nb(s){return[...new Set(s)]}function Ab(s){let r={},d=Object.keys(s).sort();for(let c of d)r[c]=s[c];return r}function Tb(s,r){let d=new Set;return new Set(r),s.reduce((c,u)=>{let h=JSON.stringify(Ab(u));return d.has(h)||(d.add(h),c.push({key:h,link:u})),c},[])}function Ad(){let s=k.useContext(ba);return Nd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Cb(){let s=k.useContext(vr);return Nd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Td=k.createContext(void 0);Td.displayName="FrameworkContext";function Cd(){let s=k.useContext(Td);return Nd(s,"You must render this element inside a <HydratedRouter> element"),s}function Rb(s,r){let d=k.useContext(Td),[c,u]=k.useState(!1),[h,g]=k.useState(!1),{onFocus:x,onBlur:y,onMouseEnter:m,onMouseLeave:v,onTouchStart:j}=r,_=k.useRef(null);k.useEffect(()=>{if(s==="render"&&g(!0),s==="viewport"){let q=G=>{G.forEach(W=>{g(W.isIntersecting)})},R=new IntersectionObserver(q,{threshold:.5});return _.current&&R.observe(_.current),()=>{R.disconnect()}}},[s]),k.useEffect(()=>{if(c){let q=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(q)}}},[c]);let V=()=>{u(!0)},N=()=>{u(!1),g(!1)};return d?s!=="intent"?[h,_,{}]:[h,_,{onFocus:ys(x,V),onBlur:ys(y,N),onMouseEnter:ys(m,V),onMouseLeave:ys(v,N),onTouchStart:ys(j,V)}]:[!1,_,{}]}function ys(s,r){return d=>{s&&s(d),d.defaultPrevented||r(d)}}function zb({page:s,...r}){let d=Gv(),{router:c}=Ad(),u=k.useMemo(()=>Df(c.routes,s,c.basename),[c.routes,s,c.basename]);return u?d?k.createElement(Mb,{page:s,matches:u,...r}):k.createElement(Db,{page:s,matches:u,...r}):null}function Ob(s){let{manifest:r,routeModules:d}=Cd(),[c,u]=k.useState([]);return k.useEffect(()=>{let h=!1;return Sb(s,r,d).then(g=>{h||u(g)}),()=>{h=!0}},[s,r,d]),c}function Mb({page:s,matches:r,...d}){let c=Qt(),{future:u}=Cd(),{basename:h}=Ad(),g=k.useMemo(()=>{if(s===c.pathname+c.search+c.hash)return[];let x=Jf(s,h,u.unstable_trailingSlashAwareDataRequests,"rsc"),y=!1,m=[];for(let v of r)typeof v.route.shouldRevalidate=="function"?y=!0:m.push(v.route.id);return y&&m.length>0&&x.searchParams.set("_routes",m.join(",")),[x.pathname+x.search]},[h,u.unstable_trailingSlashAwareDataRequests,s,c,r]);return k.createElement(k.Fragment,null,g.map(x=>k.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...d})))}function Db({page:s,matches:r,...d}){let c=Qt(),{future:u,manifest:h,routeModules:g}=Cd(),{basename:x}=Ad(),{loaderData:y,matches:m}=Cb(),v=k.useMemo(()=>af(s,r,m,h,c,"data"),[s,r,m,h,c]),j=k.useMemo(()=>af(s,r,m,h,c,"assets"),[s,r,m,h,c]),_=k.useMemo(()=>{if(s===c.pathname+c.search+c.hash)return[];let q=new Set,R=!1;if(r.forEach(W=>{var J;let O=h.routes[W.route.id];!O||!O.hasLoader||(!v.some(ee=>ee.route.id===W.route.id)&&W.route.id in y&&((J=g[W.route.id])!=null&&J.shouldRevalidate)||O.hasClientLoader?R=!0:q.add(W.route.id))}),q.size===0)return[];let G=Jf(s,x,u.unstable_trailingSlashAwareDataRequests,"data");return R&&q.size>0&&G.searchParams.set("_routes",r.filter(W=>q.has(W.route.id)).map(W=>W.route.id).join(",")),[G.pathname+G.search]},[x,u.unstable_trailingSlashAwareDataRequests,y,c,h,v,r,s,g]),V=k.useMemo(()=>kb(j,h),[j,h]),N=Ob(j);return k.createElement(k.Fragment,null,_.map(q=>k.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...d})),V.map(q=>k.createElement("link",{key:q,rel:"modulepreload",href:q,...d})),N.map(({key:q,link:R})=>k.createElement("link",{key:q,nonce:d.nonce,...R,crossOrigin:R.crossOrigin??d.crossOrigin})))}function qb(...s){return r=>{s.forEach(d=>{typeof d=="function"?d(r):d!=null&&(d.current=r)})}}var _b=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_b&&(window.__reactRouterVersion="7.14.0")}catch{}function Ub({basename:s,children:r,unstable_useTransitions:d,window:c}){let u=k.useRef();u.current==null&&(u.current=gv({window:c,v5Compat:!0}));let h=u.current,[g,x]=k.useState({action:h.action,location:h.location}),y=k.useCallback(m=>{d===!1?x(m):k.startTransition(()=>x(m))},[d]);return k.useLayoutEffect(()=>h.listen(y),[h,y]),k.createElement(pb,{basename:s,children:r,location:g.location,navigationType:g.action,navigator:h,unstable_useTransitions:d})}var $f=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,re=k.forwardRef(function({onClick:r,discover:d="render",prefetch:c="none",relative:u,reloadDocument:h,replace:g,unstable_mask:x,state:y,target:m,to:v,preventScrollReset:j,viewTransition:_,unstable_defaultShouldRevalidate:V,...N},q){let{basename:R,navigator:G,unstable_useTransitions:W}=k.useContext(Wt),O=typeof v=="string"&&$f.test(v),J=Bf(v,R);v=J.to;let ee=Kv(v,{relative:u}),oe=Qt(),K=null;if(x){let Me=wd(x,[],oe.unstable_mask?oe.unstable_mask.pathname:"/",!0);R!=="/"&&(Me.pathname=Me.pathname==="/"?R:rn([R,Me.pathname])),K=G.createHref(Me)}let[Y,ae,Ue]=Rb(c,N),Le=Hb(v,{replace:g,unstable_mask:x,state:y,target:m,preventScrollReset:j,relative:u,viewTransition:_,unstable_defaultShouldRevalidate:V,unstable_useTransitions:W});function Be(Me){r&&r(Me),Me.defaultPrevented||Le(Me)}let st=!(J.isExternal||h),Xe=k.createElement("a",{...N,...Ue,href:(st?K:void 0)||J.absoluteURL||ee,onClick:st?Be:r,ref:qb(q,ae),target:m,"data-discover":!O&&d==="render"?"true":void 0});return Y&&!O?k.createElement(k.Fragment,null,Xe,k.createElement(zb,{page:ee})):Xe});re.displayName="Link";var pd=k.forwardRef(function({"aria-current":r="page",caseSensitive:d=!1,className:c="",end:u=!1,style:h,to:g,viewTransition:x,children:y,...m},v){let j=Ms(g,{relative:m.relative}),_=Qt(),V=k.useContext(vr),{navigator:N,basename:q}=k.useContext(Wt),R=V!=null&&Ib(j)&&x===!0,G=N.encodeLocation?N.encodeLocation(j).pathname:j.pathname,W=_.pathname,O=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;d||(W=W.toLowerCase(),O=O?O.toLowerCase():null,G=G.toLowerCase()),O&&q&&(O=Cn(O,q)||O);const J=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let ee=W===G||!u&&W.startsWith(G)&&W.charAt(J)==="/",oe=O!=null&&(O===G||!u&&O.startsWith(G)&&O.charAt(G.length)==="/"),K={isActive:ee,isPending:oe,isTransitioning:R},Y=ee?r:void 0,ae;typeof c=="function"?ae=c(K):ae=[c,ee?"active":null,oe?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let Ue=typeof h=="function"?h(K):h;return k.createElement(re,{...m,"aria-current":Y,className:ae,ref:v,style:Ue,to:g,viewTransition:x},typeof y=="function"?y(K):y)});pd.displayName="NavLink";var Lb=k.forwardRef(({discover:s="render",fetcherKey:r,navigate:d,reloadDocument:c,replace:u,state:h,method:g=or,action:x,onSubmit:y,relative:m,preventScrollReset:v,viewTransition:j,unstable_defaultShouldRevalidate:_,...V},N)=>{let{unstable_useTransitions:q}=k.useContext(Wt),R=Vb(),G=Xb(x,{relative:m}),W=g.toLowerCase()==="get"?"get":"post",O=typeof x=="string"&&$f.test(x),J=ee=>{if(y&&y(ee),ee.defaultPrevented)return;ee.preventDefault();let oe=ee.nativeEvent.submitter,K=(oe==null?void 0:oe.getAttribute("formmethod"))||g,Y=()=>R(oe||ee.currentTarget,{fetcherKey:r,method:K,navigate:d,replace:u,state:h,relative:m,preventScrollReset:v,viewTransition:j,unstable_defaultShouldRevalidate:_});q&&d!==!1?k.startTransition(()=>Y()):Y()};return k.createElement("form",{ref:N,method:W,action:G,onSubmit:c?y:J,...V,"data-discover":!O&&s==="render"?"true":void 0})});Lb.displayName="Form";function Bb(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pf(s){let r=k.useContext(ba);return De(r,Bb(s)),r}function Hb(s,{target:r,replace:d,unstable_mask:c,state:u,preventScrollReset:h,relative:g,viewTransition:x,unstable_defaultShouldRevalidate:y,unstable_useTransitions:m}={}){let v=Wf(),j=Qt(),_=Ms(s,{relative:g});return k.useCallback(V=>{if(yb(V,r)){V.preventDefault();let N=d!==void 0?d:Rs(j)===Rs(_),q=()=>v(s,{replace:N,unstable_mask:c,state:u,preventScrollReset:h,relative:g,viewTransition:x,unstable_defaultShouldRevalidate:y});m?k.startTransition(()=>q()):q()}},[j,v,_,d,c,u,r,s,h,g,x,y,m])}var Gb=0,Yb=()=>`__${String(++Gb)}__`;function Vb(){let{router:s}=Pf("useSubmit"),{basename:r}=k.useContext(Wt),d=rb(),c=s.fetch,u=s.navigate;return k.useCallback(async(h,g={})=>{let{action:x,method:y,encType:m,formData:v,body:j}=jb(h,r);if(g.navigate===!1){let _=g.fetcherKey||Yb();await c(_,d,g.action||x,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:v,body:j,formMethod:g.method||y,formEncType:g.encType||m,flushSync:g.flushSync})}else await u(g.action||x,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:v,body:j,formMethod:g.method||y,formEncType:g.encType||m,replace:g.replace,state:g.state,fromRouteId:d,flushSync:g.flushSync,viewTransition:g.viewTransition})},[c,u,r,d])}function Xb(s,{relative:r}={}){let{basename:d}=k.useContext(Wt),c=k.useContext(cn);De(c,"useFormAction must be used inside a RouteContext");let[u]=c.matches.slice(-1),h={...Ms(s||".",{relative:r})},g=Qt();if(s==null){h.search=g.search;let x=new URLSearchParams(h.search),y=x.getAll("index");if(y.some(v=>v==="")){x.delete("index"),y.filter(j=>j).forEach(j=>x.append("index",j));let v=x.toString();h.search=v?`?${v}`:""}}return(!s||s===".")&&u.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(h.pathname=h.pathname==="/"?d:rn([d,h.pathname])),Rs(h)}function Ib(s,{relative:r}={}){let d=k.useContext(Yf);De(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Pf("useViewTransitionState"),u=Ms(s,{relative:r});if(!d.isTransitioning)return!1;let h=Cn(d.currentLocation.pathname,c)||d.currentLocation.pathname,g=Cn(d.nextLocation.pathname,c)||d.nextLocation.pathname;return fr(u.pathname,g)!=null||fr(u.pathname,h)!=null}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qb=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,d,c)=>c?c.toUpperCase():d.toLowerCase()),sf=s=>{const r=Qb(s);return r.charAt(0).toUpperCase()+r.slice(1)},Ff=(...s)=>s.filter((r,d,c)=>!!r&&r.trim()!==""&&c.indexOf(r)===d).join(" ").trim(),Kb=s=>{for(const r in s)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=k.forwardRef(({color:s="currentColor",size:r=24,strokeWidth:d=2,absoluteStrokeWidth:c,className:u="",children:h,iconNode:g,...x},y)=>k.createElement("svg",{ref:y,...Zb,width:r,height:r,stroke:s,strokeWidth:c?Number(d)*24/Number(r):d,className:Ff("lucide",u),...!h&&!Kb(x)&&{"aria-hidden":"true"},...x},[...g.map(([m,v])=>k.createElement(m,v)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=(s,r)=>{const d=k.forwardRef(({className:c,...u},h)=>k.createElement(Jb,{ref:h,iconNode:r,className:Ff(`lucide-${Wb(sf(s))}`,`lucide-${s}`,c),...u}));return d.displayName=sf(s),d};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Pb=P("arrow-down",$b);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],e0=P("arrow-left",Fb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ln=P("arrow-right",t0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Ce=P("arrow-up-right",n0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],a0=P("book-open",i0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],l0=P("bot",s0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],ma=P("brain-circuit",r0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],em=P("briefcase-business",o0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],d0=P("briefcase",c0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],p0=P("building-2",u0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],tm=P("chart-column",h0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],As=P("check",g0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],m0=P("chevron-down",f0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],nm=P("circle-alert",x0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],$e=P("circle-check",y0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]],b0=P("clock-3",v0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["path",{d:"m10.852 19.772-.383.924",key:"r7sl7d"}],["path",{d:"m13.148 14.228.383-.923",key:"1d5zpm"}],["path",{d:"M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923",key:"1ydik7"}],["path",{d:"m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544",key:"1m1vsf"}],["path",{d:"m14.772 15.852.923-.383",key:"660p6e"}],["path",{d:"m14.772 18.148.923.383",key:"hrcpis"}],["path",{d:"M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"j2q98n"}],["path",{d:"m9.228 15.852-.923-.383",key:"1p9ong"}],["path",{d:"m9.228 18.148-.923.383",key:"6558rz"}]],Ds=P("cloud-cog",j0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Xt=P("code-xml",w0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],im=P("database",E0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],dt=P("earth",S0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",key:"1iv0i2"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],N0=P("factory",k0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],T0=P("file-check-2",A0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Rd=P("file-text",C0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]],lf=P("handshake",R0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],O0=P("headphones",z0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],dr=P("layers",M0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],xa=P("layout-dashboard",D0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],ur=P("lightbulb",q0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],rf=P("list-checks",_0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],am=P("loader-circle",U0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],sm=P("lock-keyhole",L0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],zt=P("mail",B0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],mr=P("map-pin",H0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]],qs=P("megaphone",G0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],V0=P("menu",Y0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Si=P("message-circle",X0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]],zd=P("message-square-text",I0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],Q0=P("mouse-pointer-click",W0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],ja=P("palette",K0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],lm=P("pen-tool",Z0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],It=P("phone",J0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],P0=P("quote",$0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],rm=P("refresh-cw",F0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Od=P("rocket",e1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],n1=P("rotate-ccw",t1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],a1=P("scale",i1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ni=P("search",s1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],r1=P("send",l1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"m10.852 14.772-.383.923",key:"11vil6"}],["path",{d:"M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923",key:"1v3clb"}],["path",{d:"m13.148 9.228.383-.923",key:"t2zzyc"}],["path",{d:"m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544",key:"1bxfiv"}],["path",{d:"m14.772 10.852.923-.383",key:"k9m8cz"}],["path",{d:"m14.772 13.148.923.383",key:"1xvhww"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"m9.228 10.852-.923-.383",key:"1wtb30"}],["path",{d:"m9.228 13.148-.923.383",key:"1a830x"}]],om=P("server-cog",o1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Pt=P("shield-check",c1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Md=P("shopping-cart",d1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],jr=P("smartphone",u1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],wr=P("sparkles",p1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],dn=P("target",h1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],hd=P("trending-up",g1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],m1=P("user-check",f1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Dd=P("users",x1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],v1=P("video",y1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],Rn=P("workflow",b1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xr=P("x",j1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],cm=P("wrench",w1),of=[{label:"Home",path:"/"},{label:"About Us",path:"/about"},{label:"Services",path:"/services"},{label:"Projects",path:"/portfolio"},{label:"Blog",path:"/blog"},{label:"Contact",path:"/contact"}];function E1(){const[s,r]=k.useState(!1),[d,c]=k.useState(!1);return k.useEffect(()=>{const u=()=>{c(window.scrollY>10)};return u(),window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}},[]),k.useEffect(()=>{const u=()=>{window.innerWidth>900&&r(!1)};return window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)}},[]),i.jsxs(i.Fragment,{children:[i.jsxs("header",{className:`engix-navbar ${d?"engix-navbar-scrolled":""}`,children:[i.jsxs("div",{className:"engix-navbar-container",children:[i.jsxs(re,{to:"/",className:"engix-navbar-logo",onClick:()=>r(!1),"aria-label":"Engix Home",children:[i.jsx("span",{className:"engix-navbar-logo-icon",children:i.jsx("img",{src:"/logo.png",alt:"Engix",className:"engix-navbar-logo-image"})}),i.jsx("strong",{className:"engix-navbar-logo-name",children:"Engix"})]}),i.jsx("nav",{className:"engix-navbar-desktop",children:of.map(u=>i.jsx(pd,{to:u.path,className:({isActive:h})=>h?"engix-navbar-link active":"engix-navbar-link",children:u.label},u.path))}),i.jsxs("div",{className:"engix-navbar-actions",children:[i.jsx(re,{to:"/contact",className:"engix-navbar-contact",children:"Contact Us"}),i.jsx("button",{type:"button",className:"engix-navbar-mobile-button",onClick:()=>r(u=>!u),"aria-label":"Toggle navigation","aria-expanded":s,children:s?i.jsx(xr,{size:29,strokeWidth:1.8}):i.jsx(V0,{size:29,strokeWidth:1.8})})]})]}),i.jsx("div",{className:`engix-mobile-navigation ${s?"engix-mobile-navigation-open":""}`,children:i.jsxs("div",{className:"engix-mobile-navigation-inner",children:[of.map(u=>i.jsxs(pd,{to:u.path,className:({isActive:h})=>h?"engix-mobile-navigation-link active":"engix-mobile-navigation-link",onClick:()=>r(!1),children:[i.jsx("span",{children:u.label}),i.jsx(Ce,{size:23,strokeWidth:1.7})]},u.path)),i.jsxs(re,{to:"/contact",className:"engix-mobile-contact",onClick:()=>r(!1),children:[i.jsx("span",{children:"Start a conversation"}),i.jsx(Ce,{size:23,strokeWidth:1.7})]})]})})]}),i.jsx("style",{children:`
        .engix-navbar {
          --nav-ink: #111318;
          --nav-muted: #565c63;
          --nav-line: #dedfe2;
          --nav-yellow: #fff14f;
          --nav-green: #dff5df;

          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          font-family: inherit;
          background: #ffffff;
          border-bottom: 1px solid var(--nav-line);
          transition:
            background .2s ease,
            box-shadow .2s ease;
        }

        .engix-navbar *,
        .engix-navbar *::before,
        .engix-navbar *::after {
          box-sizing: border-box;
        }

        .engix-navbar.engix-navbar-scrolled {
          background: rgba(255, 255, 255, .97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 6px 22px rgba(17, 19, 24, .06);
        }

        .engix-navbar .engix-navbar-container {
          width: min(1260px, calc(100% - 56px));
          min-height: 78px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: clamp(18px, 2.5vw, 34px);
        }

        .engix-navbar .engix-navbar-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: max-content;
          color: var(--nav-ink);
          text-decoration: none;
          white-space: nowrap;
        }

        .engix-navbar .engix-navbar-logo-icon {
          width: 46px;
          height: 46px;
          flex: 0 0 46px;
          display: grid;
          place-items: center;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: transparent;
          border: 0;
        }

        .engix-navbar .engix-navbar-logo-image {
          display: block;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          object-fit: contain;
          object-position: center;
        }

        .engix-navbar .engix-navbar-logo-name {
          margin: 0;
          padding: 0;
          color: var(--nav-ink);
          font-size: 27px;
          font-weight: 750;
          line-height: 1.1;
          letter-spacing: -.035em;
        }

        .engix-navbar .engix-navbar-desktop {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 1.6vw, 24px);
          min-width: 0;
        }

        .engix-navbar .engix-navbar-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          padding: 10px 8px;
          color: var(--nav-muted);
          text-decoration: none;
          white-space: nowrap;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          border-radius: 5px;
          transition:
            color .2s ease,
            background .2s ease;
        }

        .engix-navbar .engix-navbar-link:hover {
          color: var(--nav-ink);
          background: #f3faf1;
        }

        .engix-navbar .engix-navbar-link.active {
          color: var(--nav-ink);
          background: var(--nav-green);
        }

        .engix-navbar .engix-navbar-link.active::after {
          content: '';
          position: absolute;
          left: 8px;
          right: 8px;
          bottom: 4px;
          height: 2px;
          border-radius: 2px;
          background: #66845b;
        }

        .engix-navbar .engix-navbar-actions {
          display: flex;
          align-items: center;
          justify-self: end;
          gap: 12px;
        }

        .engix-navbar .engix-navbar-contact {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 10px 20px;
          border: 1px solid var(--nav-ink);
          border-radius: 6px;
          background: var(--nav-ink);
          color: #ffffff;
          text-decoration: none;
          white-space: nowrap;
          font-size: 16px;
          font-weight: 650;
          line-height: 1.5;
          transition:
            background .2s ease,
            color .2s ease;
        }

        .engix-navbar .engix-navbar-contact:hover {
          background: var(--nav-yellow);
          color: var(--nav-ink);
        }

        .engix-navbar .engix-navbar-mobile-button {
          display: none;
          width: 46px;
          height: 46px;
          padding: 0;
          border: 1px solid var(--nav-line);
          border-radius: 6px;
          background: #f3faf1;
          color: var(--nav-ink);
          cursor: pointer;
        }

        .engix-navbar .engix-navbar-mobile-button:hover {
          background: var(--nav-green);
        }

        .engix-navbar .engix-mobile-navigation {
          display: none;
        }

        .engix-navbar a:focus-visible,
        .engix-navbar button:focus-visible {
          outline: 3px solid #66845b;
          outline-offset: 3px;
        }

        .engix-navbar svg {
          flex-shrink: 0;
        }

        @media (min-width: 901px) and (max-width: 1050px) {
          .engix-navbar .engix-navbar-container {
            gap: 14px;
          }

          .engix-navbar .engix-navbar-desktop {
            gap: 6px;
          }

          .engix-navbar .engix-navbar-link {
            padding-inline: 6px;
          }

          .engix-navbar .engix-navbar-contact {
            padding-inline: 14px;
          }
        }

        @media (max-width: 900px) {
          .engix-navbar .engix-navbar-container {
            width: calc(100% - 40px);
            min-height: 72px;
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 16px;
          }

          .engix-navbar .engix-navbar-desktop,
          .engix-navbar .engix-navbar-contact {
            display: none;
          }

          .engix-navbar .engix-navbar-logo-icon {
            width: 43px;
            height: 43px;
            flex-basis: 43px;
          }

          .engix-navbar .engix-navbar-logo-name {
            font-size: 25px;
          }

          .engix-navbar .engix-navbar-mobile-button {
            display: grid;
            place-items: center;
          }

          .engix-navbar .engix-mobile-navigation {
            display: block;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            visibility: hidden;
            background: #ffffff;
            border-top: 1px solid transparent;
            transition:
              max-height .3s ease,
              opacity .2s ease,
              visibility .2s ease;
          }

          .engix-navbar .engix-mobile-navigation-open {
            max-height: calc(100vh - 73px);
            max-height: calc(100dvh - 73px);
            overflow-y: auto;
            overscroll-behavior: contain;
            opacity: 1;
            visibility: visible;
            border-color: var(--nav-line);
            box-shadow: 0 12px 22px rgba(17, 19, 24, .06);
          }

          .engix-navbar .engix-mobile-navigation-inner {
            width: calc(100% - 40px);
            margin: 0 auto;
            padding: 8px 0 20px;
          }

          .engix-navbar .engix-mobile-navigation-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            min-height: 54px;
            padding: 12px;
            color: var(--nav-ink);
            text-decoration: none;
            border-bottom: 1px solid var(--nav-line);
            font-size: 17px;
            font-weight: 600;
            line-height: 1.5;
            overflow-wrap: anywhere;
          }

          .engix-navbar .engix-mobile-navigation-link:hover {
            background: #f3faf1;
          }

          .engix-navbar .engix-mobile-navigation-link.active {
            background: var(--nav-green);
          }

          .engix-navbar .engix-mobile-contact {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            min-height: 50px;
            margin-top: 16px;
            padding: 12px 16px;
            background: var(--nav-yellow);
            color: var(--nav-ink);
            border: 1px solid var(--nav-yellow);
            border-radius: 6px;
            text-decoration: none;
            font-size: 16px;
            font-weight: 650;
            line-height: 1.5;
          }

          .engix-navbar .engix-mobile-contact:hover {
            background: #fff9ce;
          }
        }

        @media (max-width: 540px) {
          .engix-navbar .engix-navbar-container,
          .engix-navbar .engix-mobile-navigation-inner {
            width: calc(100% - 32px);
          }

          .engix-navbar .engix-navbar-container {
            min-height: 68px;
          }

          .engix-navbar .engix-navbar-logo {
            gap: 8px;
          }

          .engix-navbar .engix-navbar-logo-icon {
            width: 40px;
            height: 40px;
            flex-basis: 40px;
          }

          .engix-navbar .engix-navbar-logo-name {
            font-size: 24px;
          }

          .engix-navbar .engix-navbar-mobile-button {
            width: 44px;
            height: 44px;
          }

          .engix-navbar .engix-mobile-navigation-open {
            max-height: calc(100vh - 69px);
            max-height: calc(100dvh - 69px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .engix-navbar,
          .engix-navbar a,
          .engix-navbar button,
          .engix-navbar .engix-mobile-navigation {
            transition: none;
          }
        }
      `})]})}function S1({size:s=22,...r}){return i.jsxs("svg",{viewBox:"0 0 24 24",width:s,height:s,fill:"none",stroke:"currentColor",...r,children:[i.jsx("rect",{x:"3",y:"8",width:"4",height:"13",rx:".5"}),i.jsx("circle",{cx:"5",cy:"4",r:"2"}),i.jsx("path",{d:"M11 21V8h4v2c1-2 6-3 6 3v8h-4v-7c0-3-2-3-2 0v7Z"})]})}function k1({size:s=22,...r}){return i.jsxs("svg",{viewBox:"0 0 24 24",width:s,height:s,fill:"none",stroke:"currentColor",...r,children:[i.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"5"}),i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("circle",{cx:"17.5",cy:"6.5",r:".8",fill:"currentColor",stroke:"none"})]})}function N1({size:s=22,...r}){return i.jsx("svg",{viewBox:"0 0 24 24",width:s,height:s,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",...r,children:i.jsx("path",{d:"M9 21v-3c-4 1-4-2-6-3m12 6v-4c0-1-.3-1.6-.8-2 3-.3 5.8-1.4 5.8-6a5 5 0 0 0-1.4-3.5c.1-1 .1-2-.4-3.5 0 0-1.2-.3-3.8 1.4a13 13 0 0 0-6.8 0C5 1.7 3.8 2 3.8 2c-.5 1.5-.5 2.5-.4 3.5A5 5 0 0 0 2 9c0 4.6 2.8 5.7 5.8 6-.5.4-.8 1-.8 2v4"})})}const A1=[{label:"Home",path:"/"},{label:"About Us",path:"/about"},{label:"Services",path:"/services"},{label:"Projects",path:"/portfolio"},{label:"Blog & Resources",path:"/blog"},{label:"Contact",path:"/contact"}],T1=["Custom Software Development","Web & Mobile Development","UI/UX Design","AI & Workflow Automation","Backend & API Engineering","Cloud & DevOps"],C1=["Search Engine Optimisation","Paid Advertising","Social Media Marketing","Content & Email Marketing","Branding & Creative Design"],R1=[{id:"india",label:"Varanasi, India",address:"552 Sahityanaka Mod, Ramnagar, Varanasi"},{id:"usa-one",label:"Las Vegas, USA",address:"4617 Calderwood St, Las Vegas, NV 89103, USA"},{id:"usa-two",label:"Austin, USA",address:"223 TX-343 Loop, Austin, TX 78701, USA"},{id:"canada",label:"Calgary, Canada",address:"618-640 5 Ave SW, Calgary, AB, Canada"}],z1={linkedin:"",github:"",instagram:""},O1=[{key:"linkedin",label:"LinkedIn",icon:S1},{key:"github",label:"GitHub",icon:N1},{key:"instagram",label:"Instagram",icon:k1}];function M1(s){try{return["https:","http:"].includes(new URL(s).protocol)}catch{return!1}}function D1({locations:s=R1,socialLinks:r=z1}){const d=s.filter(u=>{var h;return(h=u.address)==null?void 0:h.trim()}),c=O1.filter(u=>M1(r[u.key]));return i.jsxs(i.Fragment,{children:[i.jsx("footer",{className:"engix-footer",children:i.jsxs("div",{className:"engix-footer-shell",children:[i.jsxs("div",{className:"engix-footer-top",children:[i.jsxs("div",{className:"engix-footer-brand",children:[i.jsxs(re,{to:"/",className:"engix-footer-logo","aria-label":"Engix Home",children:[i.jsx("span",{className:"engix-footer-logo-icon",children:i.jsx("img",{src:"/logo.png",alt:"Engix",className:"engix-footer-logo-image"})}),i.jsx("strong",{className:"engix-footer-logo-name",children:"Engix"})]}),i.jsx("p",{className:"engix-footer-description",children:"Engix Tech Private Limited provides IT services, custom software development and digital marketing for businesses in India and international markets."}),i.jsx("p",{className:"engix-footer-description",children:"From websites and applications to automation and marketing campaigns, we shape our work around your requirements, customers and business priorities."}),c.length>0&&i.jsx("div",{className:"engix-footer-socials","aria-label":"Engix social profiles",children:c.map(u=>{const h=u.icon;return i.jsx("a",{href:r[u.key],target:"_blank",rel:"noopener noreferrer","aria-label":`Engix on ${u.label} (opens in a new tab)`,children:i.jsx(h,{size:22,strokeWidth:1.7,"aria-hidden":"true"})},u.key)})})]}),i.jsxs("nav",{className:"engix-footer-column","aria-label":"Footer company navigation",children:[i.jsx("h3",{children:"Company"}),A1.map(u=>i.jsx(re,{to:u.path,children:u.label},u.path))]}),i.jsxs("nav",{className:"engix-footer-column","aria-label":"Footer IT services",children:[i.jsx("h3",{children:"IT Services"}),T1.map(u=>i.jsx(re,{to:"/services",children:u},u))]}),i.jsxs("nav",{className:"engix-footer-column","aria-label":"Footer digital marketing services",children:[i.jsx("h3",{children:"Digital Marketing"}),C1.map(u=>i.jsx(re,{to:"/services",children:u},u))]})]}),i.jsxs("section",{className:"engix-footer-connect","aria-labelledby":"engix-footer-connect-title",children:[i.jsx("h3",{id:"engix-footer-connect-title",children:"Connect with Engix"}),i.jsxs("div",{className:"engix-footer-contact-grid",children:[i.jsxs("a",{href:"mailto:hello@engix.world",className:"engix-footer-contact-item",children:[i.jsx(zt,{size:22,"aria-hidden":"true"}),i.jsxs("span",{children:[i.jsx("span",{className:"engix-footer-contact-label",children:"Email"}),i.jsx("strong",{children:"hello@engix.world"})]})]}),i.jsxs("a",{href:"tel:+917355985134",className:"engix-footer-contact-item",children:[i.jsx(It,{size:22,"aria-hidden":"true"}),i.jsxs("span",{children:[i.jsx("span",{className:"engix-footer-contact-label",children:"Phone"}),i.jsx("strong",{children:"+91 7355985134"})]})]}),i.jsxs("a",{href:"tel:+918960958818",className:"engix-footer-contact-item",children:[i.jsx(It,{size:22,"aria-hidden":"true"}),i.jsxs("span",{children:[i.jsx("span",{className:"engix-footer-contact-label",children:"Phone"}),i.jsx("strong",{children:"+91 8960958818"})]})]})]})]}),d.length>0&&i.jsxs("section",{className:"engix-footer-locations","aria-labelledby":"engix-footer-locations-title",children:[i.jsx("h3",{id:"engix-footer-locations-title",children:"Locations"}),i.jsx("div",{className:"engix-footer-location-grid",children:d.map(u=>i.jsxs("article",{className:"engix-footer-location-card",children:[i.jsx(mr,{size:23,"aria-hidden":"true"}),i.jsxs("div",{children:[i.jsx("h4",{children:u.label}),i.jsx("address",{children:u.address})]})]},u.id))})]}),i.jsxs("section",{className:"engix-footer-cta","aria-labelledby":"engix-footer-cta-title",children:[i.jsxs("div",{className:"engix-footer-cta-copy",children:[i.jsx("span",{children:"LET’S DISCUSS YOUR REQUIREMENTS"}),i.jsx("h2",{id:"engix-footer-cta-title",children:"Plan Your Next Digital Initiative with Engix."}),i.jsx("p",{children:"Tell us what you need to build, improve or promote. We will discuss the relevant services, scope and next steps."})]}),i.jsxs(re,{to:"/contact",className:"engix-footer-cta-button",children:["Discuss your project",i.jsx(Ce,{size:22,"aria-hidden":"true"})]})]}),i.jsxs("div",{className:"engix-footer-bottom",children:[i.jsxs("p",{children:["© ",new Date().getFullYear()," Engix Tech Private Limited. All rights reserved."]}),i.jsxs("nav",{className:"engix-footer-bottom-links","aria-label":"Legal information",children:[i.jsx(re,{to:"/privacy",children:"Privacy Policy"}),i.jsx(re,{to:"/terms",children:"Terms & Conditions"})]})]})]})}),i.jsx("style",{children:`
        .engix-footer {
          --ef-ink: #111318;
          --ef-muted: #c5c9cd;
          --ef-line: #34383d;
          --ef-yellow: #fff14f;
          --ef-green: #dff5df;

          padding: 48px 0 22px;
          background: var(--ef-ink);
          color: #ffffff;
          font-family: inherit;
          font-size: 16px;
          line-height: 1.7;
          overflow-wrap: anywhere;
          border-top: 4px solid var(--ef-yellow);
        }

        .engix-footer *,
        .engix-footer *::before,
        .engix-footer *::after {
          box-sizing: border-box;
        }

        .engix-footer .engix-footer-shell {
          width: min(1260px, calc(100% - 56px));
          margin: 0 auto;
        }

        .engix-footer .engix-footer-top {
          display: grid;
          grid-template-columns:
            minmax(0, 1.35fr)
            minmax(0, .65fr)
            repeat(2, minmax(0, 1fr));
          gap: 28px;
          padding-bottom: 32px;
        }

        .engix-footer .engix-footer-brand {
          min-width: 0;
        }

        .engix-footer .engix-footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #ffffff;
          text-decoration: none;
        }

        .engix-footer .engix-footer-logo-icon {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          flex: 0 0 46px;
          overflow: hidden;
          background: transparent;
          border: 0;
        }

        .engix-footer .engix-footer-logo-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: transparent;
          margin: 0;
          padding: 0;
        }

        .engix-footer .engix-footer-logo-name {
          color: #ffffff;
          font-size: 27px;
          font-weight: 750;
          line-height: 1.1;
          letter-spacing: -.035em;
        }

        .engix-footer .engix-footer-description {
          margin: 18px 0 0;
          color: var(--ef-muted);
          font-size: 16px;
          line-height: 1.75;
        }

        .engix-footer .engix-footer-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .engix-footer .engix-footer-socials a {
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          color: var(--ef-green);
          border: 1px solid var(--ef-line);
          border-radius: 6px;
          text-decoration: none;
        }

        .engix-footer .engix-footer-socials a:hover {
          background: var(--ef-yellow);
          color: var(--ef-ink);
          border-color: var(--ef-yellow);
        }

        .engix-footer h3 {
          margin: 0 0 16px;
          color: #ffffff;
          font-size: 21px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -.01em;
        }

        .engix-footer .engix-footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
        }

        .engix-footer .engix-footer-column > a {
          display: flex;
          align-items: center;
          min-height: 44px;
          padding: 8px 0;
          color: var(--ef-muted);
          font-size: 16px;
          line-height: 1.5;
          text-decoration: none;
        }

        .engix-footer a:hover {
          color: var(--ef-yellow);
        }

        .engix-footer .engix-footer-column > a:hover {
          text-decoration: underline;
          text-underline-offset: 5px;
        }

        .engix-footer .engix-footer-connect,
        .engix-footer .engix-footer-locations {
          padding: 28px 0;
          border-top: 1px solid var(--ef-line);
        }

        .engix-footer .engix-footer-contact-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .engix-footer .engix-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          min-height: 64px;
          padding: 14px 16px;
          background: #1b2025;
          border: 1px solid var(--ef-line);
          border-radius: 6px;
          color: #ffffff;
          text-decoration: none;
        }

        .engix-footer .engix-footer-contact-item svg {
          color: var(--ef-green);
          margin-top: 4px;
        }

        .engix-footer .engix-footer-contact-label {
          display: block;
          color: var(--ef-muted);
          font-size: 14px;
        }

        .engix-footer .engix-footer-contact-item strong {
          font-size: 17px;
          font-weight: 600;
        }

        .engix-footer .engix-footer-location-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .engix-footer .engix-footer-location-card {
          display: grid;
          grid-template-columns: 28px minmax(0, 1fr);
          align-items: start;
          gap: 12px;
          padding: 20px;
          border: 1px solid var(--ef-line);
          border-radius: 6px;
          background: #1b2025;
        }

        .engix-footer .engix-footer-location-card > svg {
          margin-top: 3px;
          color: var(--ef-yellow);
        }

        .engix-footer .engix-footer-location-card h4 {
          margin: 0 0 8px;
          color: #ffffff;
          font-size: 19px;
          font-weight: 650;
          line-height: 1.4;
        }

        .engix-footer .engix-footer-location-card address {
          color: var(--ef-muted);
          font-size: 16px;
          line-height: 1.65;
          font-style: normal;
        }

        .engix-footer .engix-footer-cta {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: 28px;
          padding: 32px 0;
          border-top: 1px solid var(--ef-line);
          border-bottom: 1px solid var(--ef-line);
        }

        .engix-footer .engix-footer-cta-copy > span {
          display: inline-block;
          padding: 6px 10px;
          background: var(--ef-green);
          color: #253c29;
          font-size: 13px;
          font-weight: 750;
          line-height: 1.5;
          letter-spacing: .065em;
        }

        .engix-footer .engix-footer-cta h2 {
          max-width: 830px;
          margin: 16px 0;
          color: #ffffff;
          font-size: clamp(29px, 2.85vw, 42px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -.025em;
          text-wrap: balance;
        }

        .engix-footer .engix-footer-cta p {
          max-width: 780px;
          margin: 0;
          color: var(--ef-muted);
          font-size: 17px;
          line-height: 1.7;
        }

        .engix-footer .engix-footer-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 50px;
          padding: 13px 18px;
          border-radius: 6px;
          background: var(--ef-yellow);
          color: var(--ef-ink);
          font-size: 16px;
          font-weight: 650;
          line-height: 1.5;
          text-decoration: none;
        }

        .engix-footer .engix-footer-cta-button:hover {
          background: var(--ef-green);
          color: var(--ef-ink);
        }

        .engix-footer .engix-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px 24px;
          padding-top: 20px;
        }

        .engix-footer .engix-footer-bottom p {
          margin: 0;
          color: var(--ef-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .engix-footer .engix-footer-bottom-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 24px;
        }

        .engix-footer .engix-footer-bottom-links a {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          color: var(--ef-muted);
          font-size: 14px;
          text-decoration: none;
        }

        .engix-footer .engix-footer-bottom-links a:hover {
          color: var(--ef-yellow);
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .engix-footer svg {
          flex-shrink: 0;
        }

        .engix-footer a:focus-visible {
          outline: 3px solid var(--ef-yellow);
          outline-offset: 4px;
        }

        @media (max-width: 1100px) {
          .engix-footer .engix-footer-top {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 24px;
          }

          .engix-footer .engix-footer-brand {
            grid-column: 1 / -1;
            max-width: 820px;
          }

          .engix-footer .engix-footer-location-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 820px) {
          .engix-footer .engix-footer-shell {
            width: calc(100% - 40px);
          }

          .engix-footer .engix-footer-contact-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .engix-footer .engix-footer-cta {
            grid-template-columns: minmax(0, 1fr);
            gap: 20px;
          }

          .engix-footer .engix-footer-cta-button {
            justify-self: start;
          }
        }

        @media (max-width: 540px) {
          .engix-footer {
            padding-top: 36px;
          }

          .engix-footer .engix-footer-shell {
            width: calc(100% - 32px);
          }

          .engix-footer .engix-footer-top,
          .engix-footer .engix-footer-location-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .engix-footer .engix-footer-brand {
            grid-column: auto;
          }

          .engix-footer .engix-footer-logo-icon {
            width: 40px;
            height: 40px;
            flex-basis: 40px;
          }

          .engix-footer .engix-footer-logo-name {
            font-size: 24px;
          }

          .engix-footer .engix-footer-cta-copy > span {
            font-size: 11px;
            letter-spacing: .045em;
          }

          .engix-footer .engix-footer-cta-button {
            width: 100%;
            justify-content: space-between;
          }

          .engix-footer .engix-footer-bottom {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `})]})}function q1(){const{pathname:s}=Qt();return k.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[s]),null}function _1(){return i.jsxs(i.Fragment,{children:[i.jsx(q1,{}),i.jsx(E1,{}),i.jsx("main",{children:i.jsx(ub,{})}),i.jsx(D1,{})]})}function Ft(s){k.useEffect(()=>{document.title=s?`${s} | Engix`:"Engix"},[s])}const U1={hero:{file:"knowledge-team.jpg",id:"photo-1522202176988-66273c2fd55f",alt:"Stock photograph of people collaborating with laptops around a table"},planning:{file:"business-planning.jpg",id:"photo-1551836022-4c4c79ecde51",alt:"Stock photograph of professionals discussing work in an office"},development:{file:"software-engineering.jpg",id:"photo-1555066931-4365d14bab8c",alt:"Stock photograph of programming code on a computer screen"},ai:{file:"ai-technology.jpg",id:"photo-1620712943543-bcc4688e7485",alt:"Stock photograph of a humanoid research robot"},marketing:{file:"marketing-research.jpg",id:"photo-1562577309-4932fdd64cd1",alt:"Stock photograph of decorative social media lettering"},design:{file:"digital-design.jpg",id:"photo-1507238691740-187a5b1d37b8",alt:"Stock photograph of a laptop used for digital work"},cloud:{file:"cloud-infrastructure.jpg",id:"photo-1484557052118-f32bd25b45b5",alt:"Stock photograph of server hardware and network cables"},data:{file:"business-data.jpg",id:"photo-1460925895917-afdab827c52f",alt:"Stock photograph of a laptop displaying business analytics"}},L1={SEO:{text:"Begin with a small set of commercially important pages. Agree on what needs improving, who will make the changes and how the findings will be reviewed. Keep the review connected to accurate service information and relevant customer actions.",checklist:["Identify priority pages and intended audiences","Document current issues and baseline measurements","Assign content and implementation responsibilities","Review enquiries alongside visibility"]},"AI & Automation":{text:"Start with a limited pilot and a clearly defined task. Review the quality of the complete workflow, including human checking and handling of exceptions, before expanding the integration.",checklist:["Define the task and approved information sources","Record permissions and review requirements","Test representative inputs and failure cases","Agree on ownership, cost reviews and a fallback"]},"Software Engineering":{text:"Turn the operational problem into a written scope with acceptance criteria. Review integrations, permissions and maintenance needs early so the first release supports a useful workflow.",checklist:["Map users, records and important operations","Agree on acceptance criteria and integration needs","Plan validation, permissions and error handling","Define deployment and maintenance responsibilities"]},"Web & Mobile":{text:"Validate the most important user journey before extending the interface. Review how people find the application, complete a task and recover from errors on the devices they actually use.",checklist:["Identify the primary user journey","Confirm necessary device and platform capabilities","Test forms, navigation and complete task flows","Plan ownership of releases and ongoing updates"]},"UI/UX Design":{text:"Use a representative task to evaluate the interface. Observe where users hesitate, clarify the information they need and revise the design before extending the same patterns across the experience.",checklist:["Map the task and information required","Review labels and interaction consistency","Check keyboard access and smaller screens","Record usability findings and design priorities"]},"Cloud & DevOps":{text:"Treat release preparation and operational ownership as part of delivery. A documented deployment process becomes more useful when the team also understands monitoring, recovery and its response responsibilities.",checklist:["Review production configuration and permissions","Document deployment and recovery steps","Check monitoring and backup restoration","Assign maintenance and incident ownership"]},"CRM & Data":{text:"Choose one workflow with clear ownership and useful records. Define reporting needs and data quality checks before migrating information or expanding the system to more teams.",checklist:["Map records, handoffs and approval responsibilities","Agree on data definitions and access roles","Verify migration and integration behaviour","Plan reporting, adoption and ongoing reviews"]},"Paid Ads":{text:"Review the offer, destination page and follow-up process together. Agree on budget limits and useful conversion definitions before comparing campaign activity with the quality of enquiries.",checklist:["Align the offer, audience and landing page","Confirm conversion tracking and follow-up ownership","Set the campaign budget and review schedule","Compare useful enquiries rather than clicks alone"]},"Digital Marketing":{text:"Connect communication with your audience’s questions and the way your business delivers its services. Set a realistic publishing process, review factual claims and measure the actions the engagement aims to support.",checklist:["Define audience questions and communication themes","Assign drafting, design and approval responsibilities","Keep service details and messaging consistent","Review engagement and relevant enquiries"]}};function Ze(s,r,d,c,u,h,g){return{id:s,category:r,title:d,excerpt:c,image:u,takeaway:h,sections:g.map(([x,y])=>({heading:x,text:y})),nextSteps:L1[r]}}const Cs=[Ze("email-marketing-planning","Digital Marketing","Email Marketing That Starts with Audience Relevance","Plan useful messages, clear next steps and a manageable review process before increasing email volume.","planning","A relevant message and a clear follow-up process matter more than sending more emails.",[["Define the purpose of the communication","Decide whether the message introduces a service, shares a useful resource or supports an existing customer relationship. Identify who should receive it and why it is relevant. Keep the content connected to a specific audience need rather than combining several unrelated offers."],["Make the message easy to act on","Use an accurate subject line and explain the purpose early. Keep the main action clear and test the destination page, layout and links. Respect audience preferences and provide a straightforward way to stop receiving marketing communication."],["Review the complete response journey","Assign responsibility for replies and follow-up. Review relevant responses and customer actions alongside email engagement. Use those findings to improve audience selection and messaging, while keeping contact information and campaign records organized."]]),Ze("brand-consistency-digital-channels","Digital Marketing","Build a Consistent Brand Across Your Digital Channels","Connect service messaging, visual design and customer information across your website and campaigns.","design","Consistency helps customers recognize your business and understand the same offer across channels.",[["Agree on the core message","Document who the business serves, what it provides and how an engagement begins. Use those points to guide website copy, social posts and advertising. Check that different teams describe the service accurately and avoid adding unsupported claims."],["Create practical visual guidelines","Define logo usage, colours, typography and reusable layouts. Include examples for the website, presentations and campaign creative. Guidelines should help people produce clear work efficiently, while allowing formats to adapt to the channel."],["Keep information current","Assign ownership for service descriptions, contact details and campaign updates. Review landing pages when offers change. A consistent brand experience depends on accurate information as well as recognizable design."]]),Ze("technical-seo-checklist","SEO","Technical SEO Checklist for a Business Website","Connect crawlability, page structure and performance with the information your customers need.","marketing","Technical improvements work best when they support useful pages and a clear customer journey.",[["Make important pages discoverable","Identify the service pages and resources that matter to your business. Connect them through descriptive internal links and clear URLs. Review sitemap, robots.txt and canonical settings against your intended page structure. Important content should be accessible without requiring visitors to complete a search form."],["Review the complete experience","Test service pages, articles and enquiry forms on mobile devices and slower connections. Resize images, reserve space for media and investigate unnecessary scripts. Check broken links, redirects and error pages alongside performance so visitors can complete their task."],["Measure useful outcomes","Give each page a descriptive title and a clear main heading. Use Search Console to investigate indexing and search performance. Connect those findings with relevant enquiries rather than treating traffic alone as the final measure of success."]]),Ze("local-seo-business","SEO","Local SEO: Help Nearby Customers Discover Your Business","Build local visibility around accurate information, relevant content and a straightforward enquiry process.","planning","Represent the locations and services your business genuinely provides.",[["Keep business information accurate","Review your business name, contact information, hours and service details across your website and relevant listings. If you are eligible for a Google Business Profile, maintain that information too. Avoid presenting unstaffed locations as offices customers can visit."],["Write useful location content","Explain how your service works in the locations you actually cover. Address availability, delivery and practical customer questions. Location pages should offer meaningful information instead of repeating identical copy with a different city name."],["Make contact easy","Test calls, directions and enquiry forms on mobile. Track qualified enquiries and the areas they come from. Use that information to improve the content and service coverage presented on your website."]]),Ze("seo-or-paid-ads","SEO","SEO or Paid Ads: Where Should Your Business Start?","Compare channel timing, customer intent and measurement before allocating your marketing budget.","marketing","Choose channels around your offer, goals and ability to measure lead quality.",[["Start with the business goal","Define the audience you want to reach and the action you want them to take. Review the offer and destination page before buying more traffic. Clear service information and a working enquiry process are foundations for either channel."],["Understand the tradeoffs","SEO involves sustained work on content and website quality. Paid campaigns provide distribution while they are funded, but results depend on market conditions, targeting and execution. Neither channel guarantees qualified leads or a particular return."],["Compare meaningful results","Review qualified enquiries, purchases and acquisition costs. A combined approach can use campaign findings to inform content priorities, while useful organic resources answer recurring customer questions over time."]]),Ze("ai-workflow-automation","AI & Automation","AI Workflow Automation: A Practical Starting Point","Choose a measurable task, define review rules and evaluate a pilot before connecting more workflows.","planning","Begin with one workflow and measure the full process, including human review.",[["Choose a specific task","Look for repeatable work such as preparing first drafts, extracting document fields or categorising requests. Record current effort and common errors. A narrow task with clear inputs and outputs is easier to evaluate than a broad instruction to automate a department."],["Define limits and permissions","Decide what may happen automatically and what requires approval. Review which data is shared with external providers. Plan for incorrect output, missing information and unavailable integrations before relying on the system."],["Evaluate before expanding","Test representative examples and measure quality, review effort, latency and operating cost. Include exception handling in the evaluation. Expand the pilot only when improvements are repeatable and ownership is clear."]]),Ze("business-ai-assistant","AI & Automation","What to Plan Before Building a Business AI Assistant","Create a useful assistant with maintained knowledge, appropriate permissions and a route to human support.","ai","An assistant needs reliable source information and clear boundaries.",[["Define the questions it should answer","Collect common customer or employee questions and identify approved sources. Decide which topics are outside scope. An assistant should communicate uncertainty instead of inventing prices, policies or commitments."],["Separate answers from actions","Answering a question and changing a business record have different consequences. Restrict integrations to the permissions needed for the task. Add review before consequential actions and maintain useful audit records."],["Maintain the knowledge source","Assign responsibility for keeping information current and reviewing failures. Test confusing questions and conflicting information. Provide an obvious way to reach a person when the assistant cannot resolve a request."]]),Ze("ai-integration-readiness","AI & Automation","Is Your Business Ready for an AI Integration?","Review data quality, workflow ownership and operational requirements before introducing AI.","planning","Readiness depends on the surrounding workflow as much as the model.",[["Review your information","Identify where relevant data lives, who may access it and whether it is sufficiently accurate for the task. Document missing fields and conflicting records. AI does not remove the need for reliable business information."],["Define a realistic success measure","Agree on what improvement means: less processing time, fewer manual steps or more consistent classification. Include the effort required to check output. A fast draft is useful only when the complete process improves."],["Plan operational ownership","Decide who handles failures, updates instructions and monitors usage costs. Keep a practical manual fallback. Introduce the integration gradually so the team can identify problems before wider adoption."]]),Ze("custom-software-or-existing-tools","Software Engineering","Custom Software or Existing Tools: Making the Right Choice","Compare workflow fit, integration requirements and the full cost of operating a solution.","development","Choose software around the workflow it needs to support.",[["Document the operational problem","Map how information moves between customers, teams and systems. Identify repeated data entry and approval delays. These findings provide a concrete basis for evaluating existing products and writing custom development requirements."],["Compare ownership costs","Consider subscriptions, migration, training, integrations and maintenance alongside development cost. Existing tools can suit standard workflows. Custom software becomes worth evaluating when important needs remain difficult to support through configuration."],["Deliver a focused first release","Define the smallest useful version and acceptance criteria. Agree on permissions, code ownership and ongoing support. Expand after users validate the core workflow rather than implementing every planned feature immediately."]]),Ze("backend-api-planning","Software Engineering","Planning APIs for Reliable Business Applications","Build clear contracts, appropriate access controls and predictable integration behaviour.","development","Reliable APIs need predictable behaviour and permission checks for each protected operation.",[["Define contracts and permissions","Document requests, responses and error behaviour. Authentication identifies a user, while authorisation determines which records and actions that user can access. Review both when designing protected endpoints."],["Handle integrations deliberately","Validate input and keep secrets outside client code. Define timeouts and retries. Ensure repeated requests cannot accidentally duplicate important actions such as bookings or transactions."],["Make failures observable","Record useful logs without exposing sensitive information. Monitor error rates and latency. Test critical operations and document recovery procedures so the team can investigate issues consistently."]]),Ze("web-or-mobile-application","Web & Mobile","Web App or Mobile App: What Should You Build First?","Match your platform to customer behaviour, device capabilities and essential workflows.","design","Platform decisions should follow user needs and required capabilities.",[["Understand the usage context","Consider whether people need occasional access through a link or repeated use while moving between locations. Desktop workflows may favour the web. Specific device capabilities and frequent mobile tasks may justify a dedicated application."],["List essential capabilities","Document needs for notifications, camera access, location, offline use and payments. Evaluate limitations and maintenance effort before choosing a framework. Validate important assumptions with prototypes."],["Plan shared foundations","Consistent APIs, authentication and data models can support multiple interfaces. Keep the first release focused and test complete user journeys on representative devices before extending to another platform."]]),Ze("business-website-launch","Web & Mobile","What a Professional Business Website Needs Before Launch","Connect clear content, responsive design and a reliable contact journey.","planning","A useful website explains your business and makes the next step clear.",[["Explain who you help","Describe your services, audience and delivery approach in direct language. Give important services their own space and answer common questions. Use real examples instead of unsupported performance claims."],["Design across devices","Use readable text, responsive layouts and accessible controls. Optimise images and check the experience on slower connections. Review keyboard navigation and mobile forms alongside visual appearance."],["Verify the visitor journey","Test enquiry delivery, links, redirects and error pages. Review page titles and sharing previews. Assign responsibility for updates and monitoring so the website remains useful after launch."]]),Ze("ux-design-business-products","UI/UX Design","Design Digital Experiences That Are Easier to Use","Use discovery, clear journeys and accessible interfaces to reduce friction.","design","Useful design helps people understand a product and complete their task.",[["Start with real tasks","Identify what users need to accomplish and where they struggle. Map the steps before designing screens. This separates essential information from features that add complexity without improving the task."],["Create consistent interactions","Use clear labels, predictable navigation and reusable patterns. Plan for readable contrast, keyboard access and smaller screens. Give forms useful validation and explain how to recover from errors."],["Test and refine","Observe people completing realistic tasks in a prototype. Review hesitation and misunderstandings. Improve those points before extending the design system across the product."]]),Ze("cloud-deployment-checklist","Cloud & DevOps","Cloud Deployment Essentials Before Your Product Launch","Prepare environments, releases, monitoring and recovery as part of delivery.","cloud","A launch plan should include operations and recovery, alongside deployment.",[["Prepare production configuration","Separate development and production settings. Review HTTPS, routing, network access and permissions. Use measured workloads to guide resource allocation and document environment changes."],["Make releases repeatable","Define build, verification and deployment steps. Plan database changes with application releases. Keep a rollback or recovery route and clarify who decides whether a release should proceed."],["Own ongoing operations","Monitor availability, errors and resource usage. Configure backups and test restoration. Assign responsibility for updates, incidents and costs so operations continue after launch."]]),Ze("crm-erp-workflows","CRM & Data","Connect Sales and Operations with Better CRM Workflows","Reduce fragmented information through clear roles, approvals and reporting.","planning","A business system should connect real workflows and preserve clear ownership.",[["Find the information gaps","Identify records and updates spread across spreadsheets and messages. Document duplicated work and missing handoffs. Use these findings to shape the system’s scope instead of copying a generic feature list."],["Define roles and reporting","Decide who can create, approve, view and edit records. Agree on reporting definitions before building dashboards. Integrations should include a way to investigate failed synchronisation."],["Plan adoption","Clean data before migration and verify imported records. Train users around their tasks. Introduce a manageable workflow first, then expand using feedback from the team."]]),Ze("database-architecture","CRM & Data","Database Architecture for Applications That Need to Grow","Plan relationships, query patterns and the data lifecycle before complexity increases.","data","Data structures should reflect consistency needs and real application queries.",[["Model business records","Identify your entities and relationships. Define which changes must remain consistent. Choose a database approach around these requirements rather than selecting technology only because it is familiar."],["Review actual queries","List searches, filters and reports the application needs. Evaluate indexes with representative workloads. Return only necessary data and introduce pagination for growing collections."],["Plan maintenance","Document schema changes, access and retention rules. Test backup restoration. Review whether reporting workloads affect customer-facing operations and adjust the architecture using measured evidence."]]),Ze("paid-campaign-planning","Paid Ads","Google and Meta Ads: Build Campaigns Around Better Enquiries","Align your audience, offer, landing page and measurement before spending.","marketing","Campaign reports should connect advertising activity with qualified business outcomes.",[["Define a useful conversion","Decide whether success means an enquiry, booking or purchase. Establish tracking and a process for reviewing quality. A submitted form is not automatically a qualified opportunity."],["Connect the advertisement and destination","Keep the message consistent from advertisement to landing page. Explain the offer and make the next action clear. Test the full experience on mobile before launching."],["Control spend and review quality","Set budget limits and compare focused variations. Review qualified outcomes and acquisition costs alongside clicks. Profitability should be measured against real results rather than promised in advance."]]),Ze("landing-page-campaign-checklist","Paid Ads","A Landing Page Checklist for Your Next Campaign","Give campaign visitors a focused page that answers questions and supports action.","marketing","The destination page should continue the promise made by your advertisement.",[["Keep the message focused","Match the page headline to the campaign’s offer and audience. Explain what is provided and who it helps. Remove unnecessary competing actions when they distract from the purpose of the page."],["Make the action easy","Use clear form labels and ask for information needed at the current stage. Add helpful error messages. Verify that submissions reach the responsible team and that follow-up ownership is clear."],["Measure the complete funnel","Test event tracking and review enquiries after submission. Check page performance across devices. Improve the page using demonstrated friction and lead quality, rather than appearance alone."]]),Ze("social-media-content-strategy","Digital Marketing","A Social Media Content Strategy Your Team Can Sustain","Build useful themes, a workable publishing process and meaningful reporting.","marketing","Consistent publishing needs clear ownership and topics your audience finds useful.",[["Begin with customer questions","Collect questions from sales and project conversations. Use them for service explanations, educational posts and practical examples. Choose topics your team can discuss with confidence."],["Create a realistic process","Assign drafting, design, approval and reply responsibilities. Choose a schedule the team can maintain. Adapt ideas to each platform instead of repeating identical posts without context."],["Review relevant outcomes","Use reach and engagement to understand distribution. Also examine useful conversations and qualified enquiries. Refine the content based on what helps your intended audience understand the business."]]),Ze("content-audit-business-website","Digital Marketing","How to Run a Useful Content Audit for Your Website","Find outdated, duplicated and incomplete content before adding more pages.","planning","Improve existing content around customer needs before expanding the website.",[["Build a page inventory","List important URLs, their purpose and intended audience. Review accuracy, duplication and missing information. Identify content that no longer reflects your services or delivery approach."],["Agree on improvement priorities","Decide which pages need updating, consolidation or removal. Preserve useful information and plan redirects when URLs change. Prioritise pages that support important customer questions and business tasks."],["Assign ownership and review","Give each update a responsible person and review process. Check factual claims and examples. Track the impact after publication and schedule future reviews so content remains accurate."]])],cf=["All",...new Set(Cs.map(s=>s.category))];function gd(s){const r=[s.title,s.excerpt,s.takeaway,...s.sections.flatMap(c=>[c.heading,c.text]),s.nextSteps.text,...s.nextSteps.checklist].join(" ");return`${Math.max(1,Math.ceil(r.trim().split(/\s+/).length/200))} min read`}function B1(s,r){const d=s.trim().toLowerCase();return Cs.filter(c=>{const u=r==="All"||c.category===r,h=[c.title,c.category,c.excerpt,c.takeaway,...c.sections.flatMap(g=>[g.heading,g.text]),c.nextSteps.text,...c.nextSteps.checklist].join(" ").toLowerCase();return u&&h.includes(d)})}const vs=6;function Ts({name:s,decorative:r=!1,priority:d=!1,className:c=""}){const[u,h]=k.useState(0),g=U1[s];if(u>1)return i.jsx("div",{className:`eb-image-fallback ${c}`,role:r?void 0:"img","aria-label":r?void 0:g.alt,"aria-hidden":r?!0:void 0,children:i.jsx(dt,{size:48,"aria-hidden":"true"})});const x=u===0?`/images/blog/${g.file}`:`https://images.unsplash.com/${g.id}?auto=format&fit=crop&w=1600&q=85`;return i.jsx("img",{src:x,alt:r?"":g.alt,className:c,width:"1600",height:"1067",loading:d?"eager":"lazy",fetchPriority:d?"high":"auto",decoding:"async",onError:()=>h(y=>y+1)})}function df({article:s,onRead:r}){return i.jsxs("article",{className:"eb-card",children:[i.jsx("button",{className:"eb-card-photo",type:"button","aria-label":`Read ${s.title}`,onClick:d=>r(s,d),children:i.jsx(Ts,{name:s.image})}),i.jsxs("div",{className:"eb-card-body",children:[i.jsxs("div",{className:"eb-meta",children:[i.jsx("span",{children:s.category}),i.jsx("span",{children:gd(s)})]}),i.jsx("h3",{children:i.jsx("button",{type:"button",onClick:d=>r(s,d),children:s.title})}),i.jsx("p",{children:s.excerpt}),i.jsxs("button",{className:"eb-text-button",type:"button",onClick:d=>r(s,d),children:["Read article",i.jsx(Ce,{size:19,"aria-hidden":"true"})]})]})]})}function H1(){Ft("Blogs & Resources");const[s,r]=k.useState(""),[d,c]=k.useState("All"),[u,h]=k.useState(1),[g,x]=k.useState(null),y=k.useRef(null),m=k.useRef(null),v=k.useRef(null),j=k.useRef(null);k.useEffect(()=>{var Ue;if(!g||!m.current)return;const Y=m.current,ae=document.body.style.overflow;return Y.open||Y.showModal(),Y.scrollTop=0,document.body.style.overflow="hidden",(Ue=v.current)==null||Ue.focus(),()=>{var Le;Y.open&&Y.close(),document.body.style.overflow=ae,(Le=j.current)!=null&&Le.isConnected&&j.current.focus()}},[g]);const _=k.useMemo(()=>B1(s,d),[s,d]),V=Math.max(1,Math.ceil(_.length/vs)),N=Math.min(u,V),q=_.slice((N-1)*vs,N*vs),R=Cs.find(Y=>Y.id==="technical-seo-checklist"),G=["ai-workflow-automation","custom-software-or-existing-tools","brand-consistency-digital-channels"].map(Y=>Cs.find(ae=>ae.id===Y));function W(){var ae;const Y=window.matchMedia("(prefers-reduced-motion: reduce)").matches;(ae=y.current)==null||ae.scrollIntoView({block:"start",behavior:Y?"auto":"smooth"})}function O(Y,ae=!1){c(Y),h(1),ae&&(r(""),W())}function J(){r(""),c("All"),h(1)}function ee(Y,ae){j.current=ae.currentTarget,x(Y)}function oe(){x(null)}function K(Y){h(Y),W()}return i.jsxs("div",{className:"engix-blog-page",children:[i.jsxs("section",{className:"eb-hero","aria-labelledby":"eb-title",children:[i.jsx(Ts,{name:"hero",decorative:!0,priority:!0,className:"eb-hero-background"}),i.jsxs("div",{className:"eb-shell eb-hero-content",children:[i.jsx("span",{className:"eb-eyebrow",children:"THE ENGIX KNOWLEDGE HUB"}),i.jsxs("h1",{id:"eb-title",children:["Technology Insights.",i.jsx("br",{}),"Marketing Perspectives.",i.jsx("br",{}),"Practical Business Decisions."]}),i.jsx("p",{children:"Explore guides on software development, AI, cloud, websites and digital marketing — written to help businesses clarify requirements and plan useful next steps."}),i.jsxs("div",{className:"eb-actions",children:[i.jsxs("a",{className:"eb-button eb-yellow",href:"#eb-articles",children:["Browse the insights",i.jsx(a0,{size:20,"aria-hidden":"true"})]}),i.jsxs(re,{className:"eb-button eb-outline",to:"/contact",children:["Discuss your requirements",i.jsx(Ce,{size:20,"aria-hidden":"true"})]})]})]})]}),i.jsx("section",{className:"eb-section","aria-labelledby":"eb-featured-title",children:i.jsxs("div",{className:"eb-shell eb-feature-layout",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"eb-heading",children:[i.jsx("span",{className:"eb-eyebrow",children:"FEATURED GUIDE"}),i.jsx("h2",{id:"eb-featured-title",children:"A Stronger Foundation for Your Website"}),i.jsx("p",{children:"Start with the pages, journeys and measurements that matter to your business."})]}),i.jsxs("article",{className:"eb-featured",children:[i.jsx("button",{className:"eb-featured-photo",type:"button","aria-label":`Read ${R.title}`,onClick:Y=>ee(R,Y),children:i.jsx(Ts,{name:R.image})}),i.jsxs("div",{className:"eb-featured-body",children:[i.jsxs("div",{className:"eb-meta",children:[i.jsx("span",{children:R.category}),i.jsx("span",{children:gd(R)})]}),i.jsx("h3",{children:R.title}),i.jsx("p",{children:R.excerpt}),i.jsxs("div",{className:"eb-takeaway",children:[i.jsx("strong",{children:"Key perspective"}),i.jsx("p",{children:R.takeaway})]}),i.jsxs("button",{className:"eb-button",type:"button",onClick:Y=>ee(R,Y),children:["Read the guide",i.jsx(Ce,{size:20,"aria-hidden":"true"})]})]})]})]}),i.jsxs("aside",{className:"eb-sidebar","aria-label":"Browse article topics",children:[i.jsx("h3",{children:"Explore Topics"}),i.jsx("p",{children:"Find relevant ideas across development, operations and marketing."}),i.jsx("div",{className:"eb-topic-list",children:cf.filter(Y=>Y!=="All").map(Y=>i.jsxs("button",{type:"button","aria-pressed":d===Y,onClick:()=>O(Y,!0),children:[i.jsx("span",{children:Y}),i.jsx("span",{className:"eb-count",children:Cs.filter(ae=>ae.category===Y).length})]},Y))}),i.jsxs("div",{className:"eb-sidebar-note",children:[i.jsx("h3",{children:"From Reading to Planning"}),i.jsx("p",{children:"Record your questions, current setup and priorities before deciding which services your business needs."})]})]})]})}),!s.trim()&&d==="All"&&i.jsx("section",{className:"eb-section eb-green","aria-labelledby":"eb-guides-title",children:i.jsxs("div",{className:"eb-shell",children:[i.jsxs("div",{className:"eb-heading",children:[i.jsx("span",{className:"eb-eyebrow",children:"SELECTED BUSINESS GUIDES"}),i.jsx("h2",{id:"eb-guides-title",children:"Connect Technology Choices with Business Context"}),i.jsx("p",{children:"Explore how a focused workflow, a clear software brief and consistent communication can shape a more useful engagement."})]}),i.jsx("div",{className:"eb-card-grid",children:G.map(Y=>i.jsx(df,{article:Y,onRead:ee},Y.id))})]})}),i.jsx("section",{id:"eb-articles",ref:y,className:"eb-section","aria-labelledby":"eb-articles-title",children:i.jsxs("div",{className:"eb-shell",children:[i.jsxs("div",{className:"eb-heading",children:[i.jsx("span",{className:"eb-eyebrow",children:"BLOGS & RESOURCES"}),i.jsx("h2",{id:"eb-articles-title",children:"Practical Guides for Your Digital Priorities"}),i.jsx("p",{children:"Browse engineering, design, AI, operations and digital marketing topics. Open a guide to read the full article and its practical checklist."})]}),i.jsx("div",{className:"eb-filters","aria-label":"Filter articles by topic",children:cf.map(Y=>i.jsx("button",{type:"button",className:d===Y?"is-active":"","aria-pressed":d===Y,onClick:()=>O(Y),children:Y},Y))}),i.jsxs("div",{className:"eb-results",children:[i.jsxs("p",{role:"status","aria-live":"polite","aria-atomic":"true",children:[_.length," ",_.length===1?"article":"articles"," ","found",d!=="All"?` in ${d}`:""]}),(s||d!=="All")&&i.jsx("button",{className:"eb-text-button",type:"button",onClick:J,children:"Clear filters"})]}),q.length?i.jsx("div",{className:"eb-card-grid",children:q.map(Y=>i.jsx(df,{article:Y,onRead:ee},Y.id))}):i.jsxs("div",{className:"eb-empty",children:[i.jsx(ni,{size:34,"aria-hidden":"true"}),i.jsx("h3",{children:"No Matching Articles"}),i.jsx("p",{children:"Try a different keyword or browse all topics."}),i.jsx("button",{className:"eb-button",type:"button",onClick:J,children:"View all articles"})]}),V>1&&i.jsxs("nav",{className:"eb-pagination","aria-label":"Article pagination",children:[i.jsx("button",{type:"button",disabled:N===1,onClick:()=>K(N-1),children:"Previous"}),Array.from({length:V},(Y,ae)=>ae+1).map(Y=>i.jsx("button",{type:"button","aria-label":`Page ${Y}`,"aria-current":N===Y?"page":void 0,className:N===Y?"is-active":"",onClick:()=>K(Y),children:Y},Y)),i.jsx("button",{type:"button",disabled:N===V,onClick:()=>K(N+1),children:"Next"})]}),_.length>0&&i.jsxs("p",{className:"eb-showing",children:["Showing"," ",(N-1)*vs+1,"–",Math.min(N*vs,_.length)," ","of ",_.length," articles"]})]})}),i.jsx("section",{className:"eb-section eb-soft","aria-labelledby":"eb-perspective-title",children:i.jsxs("div",{className:"eb-shell eb-split",children:[i.jsxs("figure",{className:"eb-photo",children:[i.jsx(Ts,{name:"planning"}),i.jsx("figcaption",{children:"Representative photograph of professional collaboration."})]}),i.jsxs("div",{children:[i.jsx("span",{className:"eb-eyebrow",children:"THE ENGIX PERSPECTIVE"}),i.jsx("h2",{id:"eb-perspective-title",children:"Good Decisions Connect the Technical and the Commercial"}),i.jsx("p",{children:"A website, application or campaign works within a wider business journey. Design, engineering, content and measurement should reflect the people using it and the team responsible for managing it."}),i.jsx("p",{children:"Engix Tech Private Limited brings IT services and digital marketing capabilities together around your requirements. We discuss your current setup, priorities and responsibilities before defining the engagement."}),i.jsxs(re,{className:"eb-text-button",to:"/services",children:["View our capabilities",i.jsx(Ce,{size:19,"aria-hidden":"true"})]})]})]})}),i.jsx("section",{className:"eb-section eb-contact","aria-labelledby":"eb-contact-title",children:i.jsxs("div",{className:"eb-shell eb-contact-grid",children:[i.jsxs("div",{children:[i.jsx("span",{className:"eb-eyebrow",children:"TURN INSIGHT INTO A PRACTICAL NEXT STEP"}),i.jsx("h2",{id:"eb-contact-title",children:"Let’s Discuss the Challenge Behind Your Next Project"}),i.jsx("p",{children:"Share your requirements, existing systems and business priorities. We will discuss the relevant services, proposed scope and next steps."})]}),i.jsxs(re,{className:"eb-button",to:"/contact",children:["Discuss your project",i.jsx(Ce,{size:20,"aria-hidden":"true"})]})]})}),i.jsx("dialog",{ref:m,className:"eb-reader","aria-labelledby":g?"eb-reader-title":void 0,onCancel:Y=>{Y.preventDefault(),oe()},onClick:Y=>{if(Y.target!==Y.currentTarget)return;const ae=Y.currentTarget.getBoundingClientRect();(Y.clientX<ae.left||Y.clientX>ae.right||Y.clientY<ae.top||Y.clientY>ae.bottom)&&oe()},children:g&&i.jsxs("article",{children:[i.jsxs("div",{className:"eb-reader-toolbar",children:[i.jsx("span",{children:"ENGIX INSIGHTS"}),i.jsxs("button",{ref:v,type:"button",onClick:oe,children:["Close article",i.jsx(xr,{size:20,"aria-hidden":"true"})]})]}),i.jsx(Ts,{name:g.image,priority:!0,className:"eb-reader-photo"},g.id),i.jsxs("div",{className:"eb-reader-body",children:[i.jsx("span",{className:"eb-eyebrow",children:g.category}),i.jsx("h2",{id:"eb-reader-title",children:g.title}),i.jsxs("div",{className:"eb-meta",children:[i.jsx("span",{children:"Engix Insights"}),i.jsx("span",{children:gd(g)})]}),i.jsx("p",{className:"eb-reader-intro",children:g.excerpt}),i.jsxs("aside",{className:"eb-takeaway",children:[i.jsx("strong",{children:"Key takeaway"}),i.jsx("p",{children:g.takeaway})]}),g.sections.map(Y=>i.jsxs("section",{className:"eb-reader-section",children:[i.jsx("h3",{children:Y.heading}),i.jsx("p",{children:Y.text})]},Y.heading)),i.jsxs("section",{className:"eb-reader-section",children:[i.jsx("h3",{children:"Put the Guide into Practice"}),i.jsx("p",{children:g.nextSteps.text}),i.jsx("ul",{className:"eb-checklist",children:g.nextSteps.checklist.map(Y=>i.jsxs("li",{children:[i.jsx($e,{size:18,"aria-hidden":"true"}),i.jsx("span",{children:Y})]},Y))})]}),i.jsxs("div",{className:"eb-reader-footer",children:[i.jsx("h3",{children:"Discuss Your Requirements with Engix"}),i.jsx("p",{children:"Share your current situation, questions and priorities so we can discuss a practical scope of work."}),i.jsxs(re,{className:"eb-button",to:"/contact",onClick:oe,children:["Contact Engix",i.jsx(Ce,{size:19,"aria-hidden":"true"})]})]})]})]})})]})}const bs={role:"assistant",content:"Hi! I’m Engix’s AI assistant. Ask me about software development, AI automation, or digital marketing. How can I help your business?"},G1=["What services do you offer?","I need a website for my business","How can AI help my business?","How do I request a quote?"],Y1="https://api.engix.world/api".replace(/\/+$/,"");function V1(){const[s,r]=k.useState(!1),[d,c]=k.useState([bs]),[u,h]=k.useState(""),[g,x]=k.useState(!1),[y,m]=k.useState(""),v=k.useRef(null),j=k.useRef(null),_=k.useRef(null),V=k.useRef(null),N=k.useRef(!1),q=k.useRef([]);k.useEffect(()=>()=>{var O;return(O=V.current)==null?void 0:O.abort()},[]),k.useEffect(()=>{var O;s&&((O=v.current)==null||O.focus())},[s]),k.useEffect(()=>{var O;s&&((O=_.current)==null||O.scrollIntoView({block:"nearest"}))},[d,g,s]);function R(){var O;r(!1),(O=j.current)==null||O.focus()}function G(){var O;N.current||(q.current=[],c([bs]),h(""),m(""),(O=v.current)==null||O.focus())}async function W(O=u){const J=O.trim();if(!J||J.length>1500||N.current)return;N.current=!0,x(!0),m(""),h("");const ee=q.current.slice(-14),oe={role:"user",content:J};c([bs,...ee,oe]);const K=new AbortController;V.current=K;const Y=setTimeout(()=>{K.abort()},4e4);try{const ae=await fetch(`${Y1}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[...ee,oe]}),signal:K.signal}),Ue=await ae.json().catch(()=>({}));if(!ae.ok)throw new Error(Ue.error||"The assistant is unavailable. Please try again.");if(typeof Ue.reply!="string"||!Ue.reply.trim())throw new Error("No answer received. Please try again.");const Le=[...ee,oe,{role:"assistant",content:Ue.reply}];q.current=Le,c([bs,...Le])}catch(ae){c([bs,...ee]),h(J),m(ae.name==="AbortError"?"The request timed out. Your message is ready to resend.":ae.message)}finally{clearTimeout(Y),N.current=!1,V.current=null,x(!1)}}return i.jsxs("div",{className:"engix-chat",children:[s&&i.jsxs("section",{className:"engix-chat-panel",role:"dialog","aria-modal":"false","aria-labelledby":"engix-chat-title",onKeyDown:O=>{O.key==="Escape"&&R()},children:[i.jsxs("header",{className:"engix-chat-header",children:[i.jsx("div",{className:"engix-chat-avatar",children:i.jsx(l0,{size:25,"aria-hidden":"true"})}),i.jsxs("div",{className:"engix-chat-heading",children:[i.jsx("h2",{id:"engix-chat-title",children:"Engix Assistant"}),i.jsx("p",{children:"AI help for your next project"})]}),i.jsx("button",{type:"button",className:"engix-chat-icon",onClick:G,disabled:g,"aria-label":"Start a new conversation",children:i.jsx(n1,{size:18})}),i.jsx("button",{type:"button",className:"engix-chat-icon",onClick:R,"aria-label":"Close chat",children:i.jsx(xr,{size:22})})]}),i.jsxs("div",{className:"engix-chat-messages",role:"log","aria-live":"polite","aria-relevant":"additions text","aria-label":"Conversation","aria-busy":g,children:[d.map((O,J)=>i.jsxs("div",{className:`engix-chat-message engix-chat-${O.role}`,children:[i.jsx("span",{className:"engix-chat-label",children:O.role==="user"?"You":"Engix AI"}),i.jsx("p",{children:O.content})]},J)),g&&i.jsxs("p",{className:"engix-chat-thinking",role:"status",children:[i.jsx(am,{size:16,className:"engix-chat-spin","aria-hidden":"true"}),"Preparing your answer…"]}),i.jsx("div",{ref:_})]}),d.length===1&&!g&&i.jsx("div",{className:"engix-chat-suggestions",children:G1.map(O=>i.jsx("button",{type:"button",onClick:()=>W(O),children:O},O))}),y&&i.jsx("p",{className:"engix-chat-error",role:"alert",children:y}),i.jsxs("form",{className:"engix-chat-form",onSubmit:O=>{O.preventDefault(),W()},children:[i.jsx("label",{htmlFor:"engix-chat-input",className:"engix-chat-sr",children:"Your message"}),i.jsx("textarea",{id:"engix-chat-input",ref:v,value:u,onChange:O=>h(O.target.value),placeholder:"Tell us what you need…",rows:2,maxLength:1500,disabled:g,onKeyDown:O=>{O.key==="Enter"&&!O.shiftKey&&!O.nativeEvent.isComposing&&(O.preventDefault(),W())}}),i.jsx("button",{type:"submit",disabled:g||!u.trim(),"aria-label":"Send message",children:i.jsx(r1,{size:19})})]}),i.jsxs("footer",{className:"engix-chat-footer",children:[i.jsx("p",{children:"AI can make mistakes. Messages are sent to OpenAI; avoid sensitive details."}),i.jsx(re,{to:"/contact",onClick:R,children:"Talk to the Engix team ↗"})]})]}),i.jsxs("button",{type:"button",ref:j,className:"engix-chat-launcher","aria-expanded":s,"aria-label":s?"Close Engix chat":"Open Engix AI chat",onClick:()=>{s?R():r(!0)},children:[s?i.jsx(xr,{size:23,"aria-hidden":"true"}):i.jsx(Si,{size:24,"aria-hidden":"true"}),i.jsx("span",{children:s?"Close":"Ask Engix AI"})]})]})}const uf=[{name:"Ethan Brooks",service:"Website Development",text:"The project felt organized from the first conversation. Our priorities were translated into a clear website structure, and feedback was handled thoughtfully throughout the process.",tone:"lavender",demo:!0},{name:"Olivia Bennett",service:"Digital Marketing",text:"We appreciated the clear campaign plan and understandable reporting. The discussions helped us connect our messaging, landing pages and marketing goals.",tone:"green",demo:!0},{name:"Lucas Morgan",service:"Custom Software",text:"Our daily workflow was understood before development began. Regular reviews made it easier to explain what the team needed and refine the application together.",tone:"yellow",demo:!0},{name:"Amelia Parker",service:"SEO & Content",text:"The recommendations were practical and clearly explained. We had a useful plan for improving site structure, updating content and reviewing search performance.",tone:"peach",demo:!0},{name:"Noah Mitchell",service:"Ecommerce Development",text:"The attention given to product pages and the shopping journey stood out. Each review gave us a clear view of progress and the decisions still needed.",tone:"green",demo:!0},{name:"Sophie Collins",service:"UI/UX Design",text:"The design discussions focused on the people using our platform. The prototypes helped us compare options and agree on a direction before implementation.",tone:"lavender",demo:!0},{name:"Daniel Reed",service:"AI & Automation",text:"The proposed automation was tied to a specific business task. We valued the discussion of limitations, testing and where a person should remain involved.",tone:"peach",demo:!0},{name:"Grace Turner",service:"Maintenance & Support",text:"Our questions were handled with clear explanations and sensible next steps. It helped us understand the maintenance priorities for our existing application.",tone:"yellow",demo:!0},{name:"Benjamin Scott",service:"Cloud & DevOps",text:"The deployment plan made responsibilities and dependencies easy to follow. Documentation gave our team a clearer understanding of the release process.",tone:"lavender",demo:!0}];function X1(){const s=uf.some(r=>r.demo);return i.jsx("section",{id:"client-reviews",className:"eg-section eg-reviews","aria-labelledby":"eg-reviews-title",children:i.jsxs("div",{className:"eg-container",children:[i.jsxs("header",{className:"eg-reviews-heading",children:[i.jsxs("div",{children:[i.jsx("span",{className:"eg-eyebrow",children:s?"TESTIMONIAL LAYOUT PREVIEW":"CLIENT FEEDBACK"}),i.jsx("h2",{id:"eg-reviews-title",children:s?"A space for your clients’ stories.":"What our clients say about working with Engix."})]}),i.jsx("p",{children:s?"Demo content: all names and quotes below are fictional examples, not verified Engix client reviews.":"Feedback shared by clients about their experience with our technology and digital marketing services."})]}),i.jsx("div",{className:"eg-reviews-grid",children:uf.map(r=>i.jsxs("article",{className:"eg-review-card",children:[i.jsxs("div",{className:"eg-review-top",children:[i.jsx("span",{className:`eg-review-service eg-review-${r.tone}`,children:r.service}),i.jsx(P0,{size:25,strokeWidth:1.5,"aria-hidden":"true"})]}),i.jsx("blockquote",{children:i.jsx("p",{children:r.text})}),i.jsxs("footer",{className:"eg-review-person",children:[i.jsx("div",{className:`eg-review-avatar eg-review-${r.tone}`,"aria-hidden":"true",children:r.name.split(" ").map(d=>d[0]).join("")}),i.jsx("div",{children:i.jsx("h3",{children:r.name})})]})]},r.name))}),i.jsxs("div",{className:"eg-reviews-bottom",children:[i.jsx("p",{children:"Have a project in mind? Tell us what you want to achieve."}),i.jsxs(re,{className:"eg-button eg-button-dark",to:"/contact",children:["Discuss your project",i.jsx(Ce,{size:19,"aria-hidden":"true"})]})]})]})})}const I1="/images/home/",W1={international:["international-collaboration.jpg","photo-1522071820081-009f0129c71c","Professionals collaborating around laptops in a shared workspace"],hero:["hero.jpg","photo-1563461660947-507ef49e9c47","People collaborating with laptops at a shared table"],marketing:["marketing.jpg","photo-1758691737124-05c5bffe46f0","A diverse professional team collaborating around a laptop"],collaboration:["collaboration.jpg","photo-1519389950473-47ba0277781c","People working together around a table with laptops"],development:["development.jpg","photo-1498050108023-c5249f4df085","A coding workspace with a laptop displaying source code"],seo:["seo.jpg","photo-1709281847802-9aef10b6d4bf","A digital marketing workspace with a laptop and SEO lettering"],review:["engineering-work.jpg","photo-1516321318423-f06f85e504b3","People reviewing digital work together"],strategy:["marketing-team.jpg","photo-1553877522-43269d4ea984","A team discussing business strategy"]};function wi({name:s,background:r=!1,eager:d=!1}){const[c,u]=k.useState(0),[h,g,x]=W1[s],y=`eg-photo ${r?"eg-background-photo":""}`;if(c===2)return i.jsx("div",{className:`${y} eg-photo-fallback`,role:"img","aria-label":"Photograph unavailable",children:i.jsx("span",{children:"Photograph unavailable"})});const m=c===0?`${I1}${h}`:`https://images.unsplash.com/${g}?auto=format&fit=crop&w=1800&q=85`;return i.jsx("div",{className:y,children:i.jsx("img",{src:m,alt:`Illustrative stock photograph: ${x}`,width:"1800",height:"1200",loading:d?"eager":"lazy",fetchPriority:d?"high":"auto",decoding:"async",onError:()=>u(v=>Math.min(v+1,2))},`${s}-${c}`)})}function Yt({children:s,to:r="/contact",variant:d="dark"}){return i.jsxs(re,{to:r,className:`eg-button eg-button-${d}`,children:[s,i.jsx(Ce,{size:19,"aria-hidden":"true"})]})}function pa({items:s}){return i.jsx("ul",{className:"eg-points",children:s.map(r=>i.jsxs("li",{children:[i.jsx($e,{size:19,"aria-hidden":"true"}),i.jsx("span",{children:r})]},r))})}function ga({id:s,eyebrow:r,title:d,text:c}){return i.jsxs("header",{className:"eg-heading",children:[i.jsx("span",{className:"eg-eyebrow",children:r}),i.jsx("h2",{id:s,children:d}),c&&i.jsx("p",{children:c})]})}function $t({id:s,eyebrow:r,title:d,text:c,tone:u="",children:h}){return i.jsx("section",{id:s,className:`eg-section ${u}`,"aria-labelledby":`${s}-title`,children:i.jsxs("div",{className:"eg-container",children:[i.jsx(ga,{id:`${s}-title`,eyebrow:r,title:d,text:c}),h]})})}function fa({icon:s,index:r=0}){return i.jsx("div",{className:`eg-icon eg-tone-${r%4}`,children:i.jsx(s,{size:27,strokeWidth:1.7,"aria-hidden":"true"})})}function js({items:s}){return i.jsx("div",{className:"eg-card-grid",children:s.map(([r,d,c],u)=>i.jsxs("article",{className:"eg-card",children:[i.jsx(fa,{icon:r,index:u}),i.jsx("h3",{children:d}),i.jsx("p",{children:c})]},d))})}function pf({id:s,photo:r,eyebrow:d,title:c,text:u,children:h}){return i.jsxs("section",{id:s,className:"eg-photo-banner","aria-labelledby":`${s}-title`,children:[i.jsx(wi,{name:r,background:!0}),i.jsx("div",{className:"eg-photo-shade"}),i.jsxs("div",{className:"eg-container eg-banner-content",children:[i.jsx("span",{className:"eg-eyebrow",children:d}),i.jsx("h2",{id:`${s}-title`,children:c}),i.jsx("p",{children:u}),h]})]})}function Q1(){return i.jsxs("div",{className:"eg-contact-card",children:[i.jsx("h3",{children:"Connect with Engix"}),i.jsx("div",{className:"eg-contact-row",children:i.jsx("a",{href:"mailto:hello@engix.world",children:i.jsxs("span",{children:[i.jsx("small",{children:"Email"}),i.jsx("strong",{children:"hello@engix.world"})]})})}),i.jsx("div",{className:"eg-contact-row",children:i.jsx("a",{href:"tel:+917355985134",children:i.jsxs("span",{children:[i.jsx("small",{children:"Phone"}),i.jsx("strong",{children:"+91 7355985134"})]})})}),i.jsx("p",{children:"Engix Tech Private Limited — IT services, custom development and digital marketing."})]})}const K1=[[Xt,"Custom Software Development","Custom business applications, internal tools and client portals developed around your requirements and workflows."],[ma,"AI & Intelligent Automation","Custom AI assistants, conversational interfaces and automation services integrated with your existing systems."],[jr,"Web & Mobile Applications","Customer websites, web platforms and mobile experiences designed for usability and performance."],[ja,"UI/UX Design & Project Discovery","Requirements analysis, user journeys, prototypes and interface design to establish a clear direction before development."],[om,"Backend & API Engineering","APIs, databases, authentication and integrations that connect your applications and information."],[Ds,"Cloud & DevOps","Deployment workflows, infrastructure, monitoring and environment management for ongoing operations."],[xa,"Enterprise Applications","CRM tools, administration portals, dashboards and operational software tailored to your teams."],[Rn,"Workflow Integrations","Connected tools and automated handoffs that reduce repetitive manual steps."],[rm,"Legacy Modernization","Review existing applications, reduce technical debt and plan phased upgrades that support business continuity."],[Pt,"Quality Assurance & Testing","Functional, integration and regression testing aligned with your critical user journeys and release requirements."],[Md,"Ecommerce Development","Storefronts, product catalogues, checkout journeys and payment or inventory integrations around your operating model."],[cm,"Maintenance & Support","Agreed maintenance, issue investigation and iterative enhancements for applications that need continued attention."]],Z1=[[ni,"SEO & Organic Visibility","Technical, on-page, local and ecommerce SEO to strengthen search discoverability."],[Q0,"Paid Ads & PPC","Google Ads, Meta and LinkedIn campaigns aligned with your audience, goals and budget."],[qs,"Social Media Marketing","Channel strategy, content planning, creative production and community management."],[Rd,"Content & Brand Strategy","Website copy, articles, landing pages and messaging that communicate your value clearly."],[zt,"Email & Lead Generation","Audience research, segmentation, email journeys and campaigns with clear next steps."],[tm,"Analytics & Conversion","GA4, event tracking, reporting and landing page improvements to inform decisions."],[dt,"Reputation & Digital PR","Reputation monitoring, review strategies, outreach and public-facing brand communication."],[wr,"AI Search & App Visibility","AEO, GEO and app store optimization supported by useful content and technical foundations."],[v1,"Creative & Video Content","Campaign concepts, social creatives, short-form video planning and visual content suited to each channel."],[Md,"Ecommerce Marketing","Product campaigns, shopping feeds, remarketing and customer journeys connected with your store experience."],[dn,"B2B Demand Generation","Audience definition, LinkedIn content, campaign landing pages and lead nurturing for considered purchases."],[Rn,"Marketing Automation","Connect lead capture, CRM handoffs, audience segmentation and reporting into a more consistent process."]],J1=[[dn,"Business-Focused Consulting","We examine your business needs, users and existing processes before recommending a technical or marketing approach."],[Dd,"Transparent Project Communication","Defined responsibilities, documented decisions and progress reviews help you stay informed throughout the engagement."],[dr,"Integrated Service Delivery","Coordinate consulting, design, development and digital marketing around a shared project scope and business priorities."],[Pt,"Maintainable Technical Foundations","Consider testing, access control, performance and maintainability throughout application development."]],$1=[["Discover","Understand your business, users, existing systems and desired outcomes."],["Define","Clarify scope, requirements, priorities and delivery responsibilities."],["Design","Shape user journeys, interfaces, content and campaign direction."],["Build","Develop in clear stages, sharing progress and reviewing decisions."],["Validate","Check functionality, experience, integrations and measurement."],["Launch & Improve","Deploy and plan the maintenance or enhancements agreed in the engagement."]],P1=[["Technology Companies","Custom application development, customer portals, integrations and digital marketing support."],["Service Businesses","Booking journeys, operational tools, local search and customer communication."],["Ecommerce & Consumer Brands","Shopping experiences, ecommerce SEO and campaign conversion journeys."],["Professional Services","Client portals, brand content and lead generation workflows."],["Enterprise & Operations","Internal applications, dashboards and business process automation."],["Startups & Growing Teams","Website development, application planning, process automation and digital marketing for growing teams."]],F1=[["Can you develop a custom application from scratch?","Yes. We scope custom development around your business requirements, user journeys, integrations and implementation priorities."],["Can AI be integrated into an existing application?","We can assess the intended use case, available information and integration requirements, then discuss a practical implementation and evaluation approach."],["How does an engagement begin?","The first conversation covers your business challenge, existing systems and required services. We then clarify scope, dependencies and the proposed next steps."],["What services does Engix provide?","Engix provides software development, AI and automation, web and mobile applications, UI/UX, backend engineering, cloud and DevOps, and digital marketing including SEO, ads, social media, content, email and analytics."],["Can you handle development and marketing together?","Yes. Website and application work can be planned alongside search visibility, content, campaign landing pages and measurement."],["Can you improve an existing website or application?","We can review your code, experience, integrations and requirements, then define a practical improvement plan."],["How do I get an estimate?","Share your goals, required features or services, existing systems and desired timeline through our contact page. We will discuss the scope and next steps."],["How long does a project take?","Timelines depend on scope, complexity, integrations, content readiness and review cycles. A delivery plan is agreed after the requirements are understood."],["Do you work with international businesses?","Engix collaborates with domestic and international businesses through clear requirements, documented decisions and regular progress reviews."],["Do you guarantee rankings or marketing results?","No. Rankings, AI visibility and campaign outcomes depend on many factors. We focus on strategy, implementation, measurement and improvement."]];function e2(){return Ft("IT Services & Digital Marketing"),k.useEffect(()=>{const s=document.querySelector('meta[name="description"]'),r=s||document.createElement("meta"),d=s==null?void 0:s.getAttribute("content");return s||(r.name="description",document.head.appendChild(r)),r.content="Engix Tech Private Limited provides custom software development, web and mobile development, AI integration, cloud services and digital marketing for businesses.",()=>{s?d===null?r.removeAttribute("content"):r.setAttribute("content",d):r.remove()}},[]),i.jsxs("div",{className:"engix-photo-home",children:[i.jsxs("section",{className:"eg-hero","aria-labelledby":"eg-home-title",children:[i.jsx(wi,{name:"hero",background:!0,eager:!0}),i.jsx("div",{className:"eg-photo-shade"}),i.jsxs("div",{className:"eg-container eg-hero-content",children:[i.jsx("span",{className:"eg-eyebrow",children:"SOFTWARE ENGINEERING · AI · DIGITAL MARKETING"}),i.jsxs("h1",{id:"eg-home-title",children:["Build Smarter.",i.jsx("br",{}),i.jsx("span",{children:"Scale with Confidence."})]}),i.jsx("p",{className:"eg-hero-lead",children:"Custom software, AI integration and digital marketing services built around your business goals."}),i.jsx("p",{className:"eg-hero-text",children:"Engix Tech Private Limited brings consulting, design and engineering together to address operational challenges, modernize business systems and strengthen your digital presence."}),i.jsxs("div",{className:"eg-actions",children:[i.jsx(Yt,{variant:"yellow",children:"Discuss your project"}),i.jsx(Yt,{to:"/services",variant:"glass",children:"Explore our services"})]}),i.jsx("div",{className:"eg-hero-check",children:"One technology partner. From planning to delivery and ongoing support."})]})]}),i.jsx("section",{className:"eg-value-strip","aria-label":"Our capabilities",children:i.jsx("div",{className:"eg-container eg-value-grid",children:[[Xt,"End-to-End Development","From requirements and design to deployment."],[ma,"AI & Automation","Integration services for everyday workflows."],[hd,"Ongoing Improvement","Development and marketing support as needs evolve."],[dt,"International Collaboration","Clear coordination across locations and markets."]].map(([s,r,d],c)=>i.jsxs("article",{children:[i.jsx(fa,{icon:s,index:c}),i.jsxs("div",{children:[i.jsx("h2",{children:r}),i.jsx("p",{children:d})]})]},r))})}),i.jsx("section",{id:"about-engix",className:"eg-section","aria-labelledby":"about-engix-title",children:i.jsxs("div",{className:"eg-container eg-split",children:[i.jsxs("div",{children:[i.jsx(wi,{name:"collaboration"}),i.jsxs("div",{className:"eg-caption",children:[i.jsx("strong",{children:"Consultation & Collaboration"}),i.jsx("span",{children:"Aligning your requirements with a practical delivery plan."})]})]}),i.jsxs("div",{className:"eg-copy",children:[i.jsx(ga,{id:"about-engix-title",eyebrow:"ABOUT ENGIX",title:"Your Business Is Growing. Your Technology Should Keep Up."}),i.jsx("p",{children:"Disconnected tools, manual processes and outdated systems can slow down a growing business. Engix Tech Private Limited provides IT and digital marketing services to help you address these challenges with a clear plan."}),i.jsx("p",{children:"We begin with your workflows, users and business priorities. Whether you need a custom application, improvements to existing software or a coordinated marketing campaign, we define the scope and delivery approach around your requirements."}),i.jsx(pa,{items:["Understand your business requirements and project priorities","Connect tools, data and business workflows","Build a clearer path from visibility to enquiry","Improve your platform as requirements evolve"]}),i.jsx("div",{className:"eg-actions",children:i.jsx(Yt,{to:"/about",variant:"outline",children:"Learn about Engix"})})]})]})}),i.jsx($t,{id:"business-challenges",eyebrow:"BUSINESS CHALLENGES WE ADDRESS",title:"Practical Solutions for Everyday Operational Challenges",text:"We help identify where technology or marketing can support your team, then define an achievable scope of work.",tone:"eg-soft",children:i.jsx(js,{items:[[Rn,"Repetitive Manual Work","Connect routine tasks and handoffs with workflows designed around the way your team operates."],[dr,"Disconnected Systems","Plan integrations that help applications and information work together across departments."],[ur,"An Idea That Needs Direction","Clarify requirements, user journeys and implementation priorities before committing to development."],[rm,"Software That Needs Improvement","Review architecture, usability, performance and maintainability to guide focused enhancements."]]})}),i.jsx(pf,{id:"technology-intro",photo:"development",eyebrow:"SOFTWARE DEVELOPMENT & IT SERVICES",title:"Custom Software and IT Solutions for Your Business",text:"We design and develop applications around your requirements, from customer-facing websites and mobile apps to internal systems, integrations and cloud environments.",children:i.jsxs("div",{className:"eg-banner-tags",children:[i.jsx("span",{children:"Custom software"}),i.jsx("span",{children:"Web & mobile"}),i.jsx("span",{children:"AI & automation"}),i.jsx("span",{children:"Cloud & APIs"})]})}),i.jsxs($t,{id:"technology-services",eyebrow:"OUR IT SERVICES",title:"Technology Services Built Around Your Business Goals",text:"Choose support for a specific technical requirement or engage us across planning, design, development, integration and ongoing improvement.",tone:"eg-soft",children:[i.jsx(js,{items:K1}),i.jsx("div",{className:"eg-actions",children:i.jsx(Yt,{to:"/services",variant:"outline",children:"Explore all services"})})]}),i.jsx(pf,{id:"marketing-intro",photo:"marketing",eyebrow:"DIGITAL MARKETING",title:"Digital Marketing Services to Strengthen Your Online Presence",text:"We plan and manage search, paid media, social, content and analytics activities around your audience, business priorities and available budget.",children:i.jsx("div",{className:"eg-actions",children:i.jsx(Yt,{variant:"yellow",children:"Discuss your marketing goals"})})}),i.jsx($t,{id:"marketing-services",eyebrow:"OUR DIGITAL MARKETING SERVICES",title:"Integrated Marketing Across Search, Social and Paid Media",text:"Build a consistent presence across channels with relevant messaging, clear customer journeys and reporting aligned with your goals.",tone:"eg-yellow-soft",children:i.jsx(js,{items:Z1})}),i.jsx("section",{id:"search-growth",className:"eg-section","aria-labelledby":"search-growth-title",children:i.jsxs("div",{className:"eg-container eg-split",children:[i.jsxs("div",{className:"eg-copy",children:[i.jsx(ga,{id:"search-growth-title",eyebrow:"SEARCH VISIBILITY & CONVERSION",title:"Connect Website Performance with Your Marketing Strategy"}),i.jsx("p",{children:"We review website structure, content and customer journeys alongside campaign tracking. The aim is to make your business easier to discover and help you understand how visitors engage with your website."}),i.jsx(pa,{items:["Search-friendly structure and relevant content","Campaign landing pages with clear calls to action","Event tracking and reporting aligned with your goals","Continued improvements informed by available data"]}),i.jsx("div",{className:"eg-actions",children:i.jsx(Yt,{variant:"outline",children:"Plan your digital growth"})})]}),i.jsx(wi,{name:"seo"})]})}),i.jsxs($t,{id:"applied-ai",eyebrow:"APPLIED AI & AUTOMATION",title:"AI Integration and Business Process Automation",text:"We provide custom implementation and integration services for selected AI use cases. Each engagement is scoped around your information, existing applications and operational requirements.",tone:"eg-green-soft",children:[i.jsx("div",{className:"eg-three-grid",children:[[ma,"Custom AI Assistant Integration","Conversational interfaces that help people find information and complete defined tasks."],[Rd,"Document Processing Workflows","Document workflows, summarization and structured information handling."],[Rn,"Application & Workflow Automation","AI-enabled steps integrated with your existing applications and processes."],[dr,"AI Integration with Existing Systems","Connect selected AI capabilities with your applications, approved information sources and business workflows."],[xa,"AI-Enabled Business Applications","Develop client-specific interfaces and workflows with defined AI tasks, evaluation criteria and user controls."]].map(([s,r,d],c)=>i.jsxs("article",{className:"eg-card",children:[i.jsx(fa,{icon:s,index:c}),i.jsx("h3",{children:r}),i.jsx("p",{children:d})]},r))}),i.jsx("p",{className:"eg-section-note",children:"AI solutions need use-case-specific testing, appropriate data handling and human oversight."}),i.jsx("div",{className:"eg-actions",children:i.jsx(Yt,{variant:"outline",children:"Discuss an AI project"})})]}),i.jsx("section",{id:"engineering-quality",className:"eg-section","aria-labelledby":"engineering-quality-title",children:i.jsxs("div",{className:"eg-container eg-split",children:[i.jsx(wi,{name:"review"}),i.jsxs("div",{className:"eg-copy",children:[i.jsx(ga,{id:"engineering-quality-title",eyebrow:"DEVELOPMENT QUALITY & SUPPORT",title:"Built for Today. Designed for Continued Improvement."}),i.jsx("p",{children:"Application development includes more than interface implementation. We consider the underlying architecture, integration requirements, permissions and release process alongside the user experience."}),i.jsx(pa,{items:["Requirements and acceptance criteria before implementation","Authentication and permissions suited to the application","Testing around critical workflows and integration points","Deployment, documentation and agreed maintenance planning"]}),i.jsx("div",{className:"eg-actions",children:i.jsx(Yt,{variant:"outline",children:"Discuss your platform"})})]})]})}),i.jsx("section",{id:"marketing-strategy",className:"eg-section eg-yellow-soft","aria-labelledby":"marketing-strategy-title",children:i.jsxs("div",{className:"eg-container eg-split",children:[i.jsxs("div",{className:"eg-copy",children:[i.jsx(ga,{id:"marketing-strategy-title",eyebrow:"MARKETING PLANNING & EXECUTION",title:"A Coordinated Approach to Digital Marketing"}),i.jsx("p",{children:"Your audience may discover you through search, compare you on social media and return through an email. Each touchpoint should communicate a consistent message and offer a clear next step."}),i.jsx(pa,{items:["Audit your website, audience and current channels","Define positioning, content themes and campaign priorities","Align creative, landing pages and lead capture","Review enquiries and conversion signals to guide improvements"]}),i.jsx("div",{className:"eg-actions",children:i.jsx(Yt,{variant:"outline",children:"Discuss a marketing plan"})})]}),i.jsx(wi,{name:"strategy"})]})}),i.jsx($t,{id:"business-solutions",eyebrow:"CUSTOM DEVELOPMENT USE CASES",title:"Applications Developed for Your Business Requirements",text:"The following are examples of custom development services we can scope for your business. Each solution is designed for the client's requirements, rather than offered as an existing Engix product.",tone:"eg-soft",children:i.jsx(js,{items:[[Dd,"Customer & Client Portals","Give customers a clear place to access information, submit requests and follow progress, with access controls suited to your service."],[rf,"Booking & Service Platforms","Connect service information, availability, bookings and operational handoffs into a more organized experience."],[xa,"Business Dashboards","Bring relevant operational information into understandable views that help teams review activity and identify next steps."],[dn,"Lead Capture & CRM Journeys","Connect campaign enquiries with qualification, follow-up and reporting so teams can manage the customer journey consistently."]]})}),i.jsx($t,{id:"why-engix",eyebrow:"WHY ENGIX",title:"A Technology Partner Focused on Your Business Priorities",text:"Our approach combines business understanding, defined project responsibilities and coordinated execution across technology and marketing.",children:i.jsx(js,{items:J1})}),i.jsx($t,{id:"how-we-work",eyebrow:"OUR PROCESS",title:"A Clear Path from First Conversation to Delivery",text:"We agree on scope and responsibilities, deliver work in planned stages and review progress with you as the engagement develops.",tone:"eg-soft",children:i.jsx("ul",{className:"eg-process",children:$1.map(([s,r],d)=>i.jsxs("li",{children:[i.jsx(fa,{icon:[ur,rf,lm,Xt,Pt,Od][d],index:d}),i.jsx("h3",{children:s}),i.jsx("p",{children:r})]},s))})}),i.jsx($t,{id:"industries",eyebrow:"WHO WE HELP",title:"Different Industries. Services Shaped Around Your Needs.",text:"We adapt the project scope to your workflows, customers and operating needs, whether you need a new application, improvements to an existing system or digital marketing support.",tone:"eg-green-soft",children:i.jsx("div",{className:"eg-three-grid",children:P1.map(([s,r],d)=>i.jsxs("article",{className:"eg-industry",children:[i.jsx(fa,{icon:[Xt,cm,Md,d0,N0,p0][d],index:d}),i.jsx("h3",{children:s}),i.jsx("p",{children:r})]},s))})}),i.jsx($t,{id:"international-delivery",eyebrow:"DOMESTIC & INTERNATIONAL COLLABORATION",title:"A Technology Partner That Works Beyond Borders",text:"Engix collaborates with businesses across locations through structured remote working practices. Project scope, dependencies and communication arrangements are agreed around the engagement.",tone:"eg-soft",children:i.jsxs("div",{className:"eg-delivery-grid",children:[i.jsxs("div",{className:"eg-copy",children:[i.jsx("h3",{children:"Clear Coordination Across Locations"}),i.jsx("p",{children:"Shared priorities and documented decisions help keep development and marketing activities organized. We discuss how your team wants to work and establish practical review points for the project."}),i.jsx(pa,{items:["Defined project scope, priorities and responsibilities","Documented requirements and key decisions","Agreed communication channels and progress reviews","Delivery stages that make dependencies visible","Continued collaboration based on the agreed scope"]})]}),i.jsxs("aside",{className:"eg-delivery-panel",children:[i.jsx(wi,{name:"international"}),i.jsx("h3",{children:"Start with Your Requirements"}),i.jsx("p",{children:"Tell us about your existing systems, stakeholders and business objectives. We will discuss how the engagement can be coordinated around your needs."}),i.jsx("div",{className:"eg-actions",children:i.jsx(Yt,{variant:"outline",children:"Work with Engix"})})]})]})}),i.jsx($t,{id:"engagement-options",eyebrow:"WAYS TO WORK TOGETHER",title:"Flexible Ways to Work with Engix",text:"The scope can be shaped around your existing systems, requirements and level of ongoing support.",children:i.jsx("div",{className:"eg-three-grid",children:[["Consulting & Project Planning","Assess your requirements, review existing systems and define an implementation plan.",["Business requirements and project scope","User journeys and prototypes","Implementation priorities and milestones"]],["Project Development & Delivery","Coordinate design, engineering, validation and launch.",["Website and application interface design","Frontend, backend and integrations","Testing and deployment planning"]],["Ongoing Support & Marketing","Improve an existing platform or strengthen your digital marketing.",["Platform enhancements","Content and campaign improvements","Reporting and next-step planning"]]].map(([s,r,d],c)=>i.jsxs("article",{className:"eg-engagement",children:[i.jsx(fa,{icon:[ur,dr,hd][c],index:c}),i.jsx("span",{className:`eg-step eg-tone-${c}`,children:String(c+1).padStart(2,"0")}),i.jsx("h3",{children:s}),i.jsx("p",{children:r}),i.jsx(pa,{items:d}),i.jsx("div",{className:"eg-actions",children:i.jsx(Yt,{variant:"outline",children:"Discuss this approach"})})]},s))})}),i.jsx(X1,{}),i.jsx($t,{id:"home-faq",eyebrow:"COMMON QUESTIONS",title:"Frequently Asked Questions",tone:"eg-soft",children:i.jsx("div",{className:"eg-faq",children:F1.map(([s,r])=>i.jsxs("details",{children:[i.jsxs("summary",{children:[i.jsx("span",{children:s}),i.jsx("span",{className:"eg-faq-symbol","aria-hidden":"true",children:"+"})]}),i.jsx("p",{children:r})]},s))})}),i.jsx("section",{id:"start-a-project",className:"eg-section eg-contact","aria-labelledby":"start-a-project-title",children:i.jsxs("div",{className:"eg-container eg-contact-grid",children:[i.jsxs("div",{className:"eg-copy",children:[i.jsx(ga,{id:"start-a-project-title",eyebrow:"CONTACT ENGIX",title:"Have a Challenge? Let’s Plan the Right Solution."}),i.jsx("p",{children:"Share your requirements, existing systems and business priorities. We will discuss the services you need, the proposed scope and the next steps."}),i.jsx("div",{className:"eg-actions",children:i.jsx(Yt,{children:"Discuss your project"})})]}),i.jsx(Q1,{})]})}),i.jsx(V1,{})]})}const t2={hero:["services-team.jpg","photo-1552664730-d307ca884978"],planning:["project-planning.jpg","photo-1542744173-8e7e53415bb0"],technology:["technology-foundations.jpg","photo-1518770660439-4636190af475"],marketing:["marketing-analytics.jpg","photo-1551288049-bebda4e38f71"],delivery:["delivery-collaboration.jpg","photo-1517245386807-bb43f82c33c4"]};function ws({name:s,alt:r="",priority:d=!1,className:c=""}){const[u,h]=k.useState(0),[g,x]=t2[s];if(u>1)return i.jsx("div",{className:`es-image-fallback ${c}`,role:r?"img":void 0,"aria-label":r||void 0,"aria-hidden":r?void 0:!0,children:i.jsx(dt,{size:48,"aria-hidden":"true"})});const y=u===0?`/images/services/${g}`:`https://images.unsplash.com/${x}?auto=format&fit=crop&w=1600&q=85`;return i.jsx("img",{src:y,alt:r,className:c,width:"1600",height:"1067",loading:d?"eager":"lazy",fetchPriority:d?"high":"auto",decoding:"async",onError:()=>h(m=>m+1)})}const n2=[{icon:Xt,title:"Custom Software Development",text:"Applications tailored to your business rules, users and operational workflows.",points:["Business applications and internal tools","Customer portals and dashboards","Workflow automation","Existing software improvements"]},{icon:jr,title:"Web & Mobile Applications",text:"Connected application experiences with clear user journeys and maintainable foundations.",points:["Responsive web applications","Mobile application development","Booking and service workflows","Authentication and user roles"]},{icon:dt,title:"Websites & Ecommerce",text:"Professional websites that explain your offer and make customer actions straightforward.",points:["Company and service websites","Ecommerce storefronts","Campaign landing pages","Website performance improvements"]},{icon:ja,title:"UI/UX & Interface Design",text:"Design that turns complex requirements into interfaces people can understand and use.",points:["User research and journey mapping","Wireframes and interactive prototypes","Interface and design systems","Accessibility considerations"]},{icon:ma,title:"AI & Intelligent Automation",text:"Practical AI integrations shaped around your information, workflows and review requirements.",points:["AI assistants and integrations","Document and data workflows","Process automation","Human review and exception handling"]},{icon:om,title:"Backend & API Engineering",text:"Server-side systems that connect applications, business data and third-party services.",points:["APIs and application architecture","Authentication and permissions","Payment and business integrations","Validation and error handling"]},{icon:Ds,title:"Cloud & DevOps",text:"Deployment foundations and release workflows planned around how your application operates.",points:["Cloud and server deployment","CI/CD and release planning","Environment configuration","Monitoring and maintenance scope"]},{icon:im,title:"Business Systems & Data",text:"Connected records, reporting and administration tools for everyday business operations.",points:["CRM and ERP workflows","Database design and integration","Administration dashboards","Operational reporting"]}],i2=[{icon:ni,title:"Search Engine Optimization",text:"Improve how search engines and visitors discover, understand and navigate your website.",points:["Technical and on-page SEO","Keyword and competitor research","Content and internal linking","Local search optimization"]},{icon:dn,title:"Paid Advertising",text:"Campaign planning and management aligned with your audience, offer and agreed budget.",points:["Google and Meta campaigns","Audience and keyword planning","Creative and landing page reviews","Tracking and campaign optimization"]},{icon:qs,title:"Social Media Marketing",text:"A coherent brand presence supported by useful content and planned communication.",points:["Channel and content planning","Publishing calendars","Campaign creative coordination","Engagement and reporting"]},{icon:lm,title:"Content Marketing",text:"Content that explains your expertise, answers relevant questions and supports customer decisions.",points:["Website and landing page copy","Articles and topic planning","Service and campaign messaging","Content review and refreshes"]},{icon:zt,title:"Email Marketing",text:"Relevant email communication designed around the audience and its relationship with your business.",points:["Campaign planning and copy","Audience segmentation","Email layouts and workflows","Engagement measurement"]},{icon:ja,title:"Branding & Creative Design",text:"Consistent visual communication across your website, campaigns and marketing materials.",points:["Brand identity and guidelines","Social and advertising creatives","Business presentation design","Campaign visual consistency"]},{icon:xa,title:"Analytics & Reporting",text:"Measurement that helps connect digital activity with the actions your business needs to understand.",points:["Measurement and event planning","Analytics and Search Console review","Campaign performance reporting","Enquiry and conversion analysis"]},{icon:Rn,title:"Conversion & Landing Pages",text:"Improve the journey between discovering your business and taking a meaningful next step.",points:["Landing page structure","Forms and enquiry journeys","Messaging and usability reviews","Testing recommendations"]}],nd=[{name:"Starter",price:350,text:"Focused SEO support for businesses establishing their search presence.",keywords:10,pages:5,articles:1,competitors:2,local:!1,advanced:!1,review:"Monthly report"},{name:"Growth",price:600,text:"Broader optimization and content support for expanding search visibility.",keywords:20,pages:10,articles:2,competitors:3,local:!0,advanced:!1,review:"Monthly review call",recommended:!0},{name:"Scale",price:900,text:"Deeper SEO coverage for larger websites and more competitive opportunities.",keywords:35,pages:15,articles:3,competitors:4,local:!0,advanced:!0,review:"Monthly review call"},{name:"Premium",price:1200,text:"Extended scope for broader website, content and search requirements.",keywords:50,pages:20,articles:4,competitors:5,local:!0,advanced:!0,review:"Fortnightly review call"}],a2=[["Tracked target keywords",s=>`Up to ${s.keywords}`],["Priority pages in agreed scope",s=>`Up to ${s.pages}`],["Content drafts per month",s=>s.articles],["Competitors reviewed",s=>s.competitors],["Initial technical SEO audit",()=>"Included"],["On-page optimization",()=>"Included"],["Search Console and analytics review",()=>"Included"],["Monthly performance report",()=>"Included"],["Eligible Google Business Profile review",s=>s.local?"Included":"Not included"],["Structured data and internal linking review",s=>s.advanced?"Included":"Not included"],["Progress reviews",s=>s.review]],s2=[{icon:ni,title:"Understand",text:"Review your objectives, users, existing systems and current digital activity."},{icon:dn,title:"Define",text:"Agree on priorities, scope, responsibilities and practical delivery stages."},{icon:Xt,title:"Deliver & Review",text:"Develop or prepare the agreed work, with checks and feedback at planned points."},{icon:Od,title:"Launch & Improve",text:"Launch, hand over the agreed information and plan support or next steps."}],l2=[{icon:Ds,title:"Deployment & Operations",text:"Release planning, environment configuration and operational checks appropriate to your application."},{icon:Pt,title:"Maintenance & Reliability",text:"Agreed updates, issue investigation and maintenance priorities for existing systems."},{icon:Rn,title:"Continued Improvement",text:"A practical plan for refining workflows, improving campaigns or extending functionality as needs change."}],r2=[["Growing Businesses","Company websites, enquiry management and internal tools that support the next stage of operations."],["Retail & Ecommerce","Storefront experiences, product information, order workflows and customer communication."],["Professional Services","Service websites, appointment workflows, client portals and useful business content."],["Real Estate","Property information, enquiry journeys, lead follow-up and team dashboards."],["Education & Training","Registration, course administration, learning portals and audience communication."],["Operations & Logistics","Task tracking, approvals, operational reporting and connected business records."]],o2=[["What do the starting prices cover?","The four packages describe monthly SEO services. Final pricing depends on your website, market, implementation requirements and agreed scope. A written proposal confirms deliverables and billing terms before work begins."],["Are software and AI projects included in these packages?","Software development, AI integrations, mobile applications, business systems and cloud projects are quoted separately after reviewing your requirements."],["Is advertising spend included?","Advertising spend, paid tools, hosting, domains and third-party fees are separate unless specifically included in your proposal. Applicable taxes are confirmed in the quote."],["How are SEO results measured?","We review search visibility, relevant traffic and agreed conversions or enquiries. Results depend on factors including competition and website condition; specific rankings or revenue are not guaranteed."],["Can you work with our existing website or application?","Yes. We can review your current setup and identify whether optimization, integration, maintenance or a larger rebuild is the appropriate next step."],["Can the scope be customized?","Yes. We discuss priorities around your website size, locations, audience, content needs and existing systems. Changes to deliverables and fees are confirmed in the proposal."],["Do you provide ongoing support?","Maintenance, marketing management and continued development can be scoped around your requirements. The proposal defines responsibilities, communication, response arrangements and fees."]];function c2(s,r){const d=new URLSearchParams({service:s});return r&&(d.set("plan",r.name),d.set("startingPrice",String(r.price))),`/contact?${d.toString()}`}function Ei({items:s}){return i.jsx("ul",{className:"es-checklist",children:s.map(r=>i.jsxs("li",{children:[i.jsx($e,{size:18,"aria-hidden":"true"}),i.jsx("span",{children:r})]},r))})}function ha({id:s,label:r,title:d,children:c}){return i.jsxs("div",{className:"es-heading",children:[i.jsx("span",{className:"es-eyebrow",children:r}),i.jsx("h2",{id:s,children:d}),c&&i.jsx("p",{children:c})]})}function lr({items:s,detailed:r=!1,className:d=""}){return i.jsx("div",{className:`es-card-grid ${d}`,children:s.map(({icon:c,title:u,text:h,points:g})=>i.jsxs("article",{className:"es-card",children:[i.jsx("span",{className:"es-icon",children:i.jsx(c,{size:26,strokeWidth:1.7,"aria-hidden":"true"})}),i.jsx("h3",{children:u}),i.jsx("p",{children:h}),r&&i.jsx(Ei,{items:g})]},u))})}function d2(){return Ft("Services & Pricing"),i.jsxs("div",{className:"engix-services-page",children:[i.jsxs("section",{className:"es-hero","aria-labelledby":"es-title",children:[i.jsx(ws,{name:"hero",priority:!0,className:"es-hero-background"}),i.jsxs("div",{className:"es-shell es-hero-content",children:[i.jsx("span",{className:"es-eyebrow",children:"ENGIX TECH PRIVATE LIMITED"}),i.jsxs("h1",{id:"es-title",children:["IT Expertise.",i.jsx("br",{}),"Digital Marketing.",i.jsx("br",{}),"Built Around Your Business."]}),i.jsx("p",{children:"Software development, websites, AI, cloud and digital marketing services connected by clear business objectives and a practical delivery approach."}),i.jsxs("div",{className:"es-actions",children:[i.jsxs(re,{className:"es-button es-yellow",to:"/contact",children:["Discuss your requirements",i.jsx(Ce,{size:20,"aria-hidden":"true"})]}),i.jsx("a",{className:"es-button es-outline",href:"#es-pricing",children:"View SEO packages"})]})]})]}),i.jsx("section",{className:"es-section","aria-labelledby":"es-intro-title",children:i.jsxs("div",{className:"es-shell es-split",children:[i.jsxs("div",{children:[i.jsx("span",{className:"es-eyebrow",children:"SERVICES THAT WORK TOGETHER"}),i.jsx("h2",{id:"es-intro-title",children:"From Business Requirements to Practical Digital Solutions"}),i.jsx("p",{children:"Engix Tech Private Limited helps organizations build useful systems, strengthen their online presence and coordinate digital marketing around their audience."}),i.jsx("p",{children:"Whether you need a focused project or ongoing support, we begin with your current situation, the work required and the responsibilities needed to deliver it."})]}),i.jsxs("div",{className:"es-intro-panel",children:[i.jsx("h3",{children:"Start with the outcome you need"}),i.jsx(Ei,{items:["A clearer website and customer journey","Software aligned with your business workflows","Connected systems and practical automation","Marketing activity with useful measurement"]}),i.jsx("p",{children:"Scope, deliverables and review arrangements are confirmed around the engagement."})]})]})}),i.jsx("section",{className:"es-section es-soft","aria-labelledby":"es-technology-title",children:i.jsxs("div",{className:"es-shell",children:[i.jsx(ha,{id:"es-technology-title",label:"IT & DEVELOPMENT SERVICES",title:"Engineering for the Way Your Business Works",children:"Design, development and infrastructure capabilities for customer-facing experiences and internal operations."}),i.jsx(lr,{items:n2,detailed:!0})]})}),i.jsx("section",{className:"es-section es-green","aria-labelledby":"es-marketing-title",children:i.jsxs("div",{className:"es-shell",children:[i.jsx(ha,{id:"es-marketing-title",label:"DIGITAL MARKETING SERVICES",title:"Connect Visibility, Communication and Customer Action",children:"Coordinate your website, search presence, campaigns and content around a consistent message and agreed marketing objectives."}),i.jsx(lr,{items:i2,detailed:!0})]})}),i.jsx("section",{className:"es-section","aria-labelledby":"es-planning-title",children:i.jsxs("div",{className:"es-shell es-split",children:[i.jsxs("figure",{className:"es-photo",children:[i.jsx(ws,{name:"planning",alt:"Stock photograph of professionals planning work around an office table"}),i.jsx("figcaption",{children:"Business context before delivery decisions."})]}),i.jsxs("div",{children:[i.jsx("span",{className:"es-eyebrow",children:"DISCOVERY & PLANNING"}),i.jsx("h2",{id:"es-planning-title",children:"Define the Right Work Before Delivery Begins"}),i.jsx("p",{children:"A clear scope helps everyone understand what is being delivered and why. We discuss your stakeholders, existing systems, audience and priorities before shaping a delivery plan."}),i.jsx("p",{children:"For technical work, this includes workflows, integrations, user roles and deployment needs. For marketing, it includes positioning, channel selection, content priorities and measurement."}),i.jsx(Ei,{items:["Agreed objectives and deliverables","Dependencies and access requirements identified","Responsibilities and review points documented","Changes discussed against the agreed scope"]})]})]})}),i.jsx("section",{className:"es-section es-soft","aria-labelledby":"es-engineering-title",children:i.jsxs("div",{className:"es-shell es-split",children:[i.jsxs("div",{children:[i.jsx("span",{className:"es-eyebrow",children:"TECHNICAL FOUNDATIONS"}),i.jsx("h2",{id:"es-engineering-title",children:"Build for Operation, Maintenance and Future Change"}),i.jsx("p",{children:"Reliable software depends on how its parts work together. We consider application structure, data flows and operational needs alongside the features people see."}),i.jsx("p",{children:"Technology decisions reflect your requirements and the resources available to manage the system. Testing, documentation and handover are planned according to the agreed work."}),i.jsx(Ei,{items:["Maintainable application architecture","Permissions, validation and integration checks","Performance and accessibility considerations","Release planning and useful handover information"]})]}),i.jsxs("figure",{className:"es-photo",children:[i.jsx(ws,{name:"technology",alt:"Stock photograph of electronic components on a circuit board"}),i.jsx("figcaption",{children:"Connected foundations for useful technology."})]})]})}),i.jsx("section",{className:"es-section","aria-labelledby":"es-measurement-title",children:i.jsxs("div",{className:"es-shell es-split",children:[i.jsxs("figure",{className:"es-photo",children:[i.jsx(ws,{name:"marketing",alt:"Stock photograph of a computer screen displaying analytics charts"}),i.jsx("figcaption",{children:"Clear measurement supports informed decisions."})]}),i.jsxs("div",{children:[i.jsx("span",{className:"es-eyebrow",children:"MARKETING STRATEGY & MEASUREMENT"}),i.jsx("h2",{id:"es-measurement-title",children:"Understand What Your Digital Activity Is Contributing"}),i.jsx("p",{children:"Marketing should make your offer easier to discover and understand. We connect research, content, creative work and measurement around the audience you want to reach."}),i.jsx("p",{children:"Reports focus on the metrics agreed for your engagement, such as search visibility, relevant visits, campaign engagement and enquiries. Reviews help identify what to refine next."}),i.jsx(Ei,{items:["Audience, offer and channel alignment","Consistent website and campaign messaging","Conversion tracking where appropriate","Reporting and improvement priorities"]})]})]})}),i.jsx("section",{id:"es-pricing",className:"es-section es-pricing","aria-labelledby":"es-pricing-title",children:i.jsxs("div",{className:"es-shell",children:[i.jsx(ha,{id:"es-pricing-title",label:"MONTHLY SEO PACKAGES",title:"A Defined Starting Point for Your SEO Engagement",children:"Starting prices in USD. We review your website and objectives before confirming the package scope and implementation responsibilities."}),i.jsx("div",{className:"es-pricing-grid",children:nd.map(s=>i.jsxs("article",{className:`es-plan ${s.recommended?"es-featured":""}`,"aria-labelledby":`es-plan-${s.name.toLowerCase()}`,children:[i.jsx("span",{className:"es-plan-tag",children:s.recommended?"RECOMMENDED":"MONTHLY SEO"}),i.jsx("h3",{id:`es-plan-${s.name.toLowerCase()}`,children:s.name}),i.jsx("p",{children:s.text}),i.jsxs("div",{className:"es-price",children:[i.jsx("span",{children:"Starting at"}),i.jsxs("div",{children:[i.jsxs("strong",{children:["$",s.price.toLocaleString("en-US")]}),i.jsx("span",{children:" / month"})]}),i.jsx("span",{children:"USD"})]}),i.jsx(Ei,{items:[`Up to ${s.keywords} tracked keywords`,`Up to ${s.pages} priority pages`,`${s.articles} content ${s.articles===1?"draft":"drafts"} per month`,`Review of ${s.competitors} competitors`,"Initial technical SEO audit","On-page optimization","Monthly performance report",s.local?"Eligible business profile review":"Search Console and analytics review",s.advanced?"Structured data and linking review":"Content and keyword planning",s.review]}),i.jsxs(re,{className:"es-button",to:c2("SEO",s),children:["Enquire about ",s.name,i.jsx(Ce,{size:18,"aria-hidden":"true"})]})]},s.name))}),i.jsxs("div",{className:"es-note",children:[i.jsx("strong",{children:"Clear scope before we begin."}),i.jsx("p",{children:"These prices cover SEO services. Software, AI, mobile, cloud and other marketing services are quoted separately. Advertising spend, paid tools, hosting, third-party charges and applicable taxes are separate unless included in the proposal."})]}),i.jsxs("details",{className:"es-details es-comparison",children:[i.jsx("summary",{children:"Compare SEO package inclusions"}),i.jsx("p",{className:"es-table-help",children:"On smaller screens, scroll across the table to compare all packages."}),i.jsx("div",{className:"es-table-scroll",role:"region","aria-label":"SEO package comparison",tabIndex:0,children:i.jsxs("table",{children:[i.jsx("caption",{children:"Monthly SEO package scope"}),i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{scope:"col",children:"Inclusions"}),nd.map(s=>i.jsx("th",{scope:"col",children:s.name},s.name))]})}),i.jsx("tbody",{children:a2.map(([s,r])=>i.jsxs("tr",{children:[i.jsx("th",{scope:"row",children:s}),nd.map(d=>i.jsx("td",{children:r(d)},d.name))]},s))})]})}),i.jsx("p",{className:"es-table-help",children:"Business profile work applies to eligible businesses and requires the necessary access."})]})]})}),i.jsx("section",{className:"es-section","aria-labelledby":"es-industries-title",children:i.jsxs("div",{className:"es-shell",children:[i.jsx(ha,{id:"es-industries-title",label:"BUSINESS APPLICATIONS",title:"Different Sectors. Requirements That Shape the Solution.",children:"These examples illustrate the workflows and digital needs we can discuss with your business."}),i.jsx("div",{className:"es-industry-grid",children:r2.map(([s,r])=>i.jsxs("article",{className:"es-card",children:[i.jsx("h3",{children:s}),i.jsx("p",{children:r})]},s))})]})}),i.jsx("section",{className:"es-section es-green","aria-labelledby":"es-process-title",children:i.jsxs("div",{className:"es-shell",children:[i.jsx(ha,{id:"es-process-title",label:"HOW WE DELIVER",title:"Clear Stages. Shared Priorities. Practical Reviews.",children:"We organize work around the engagement, with planned opportunities to check progress and clarify decisions."}),i.jsx(lr,{items:s2})]})}),i.jsx("section",{className:"es-section","aria-labelledby":"es-support-title",children:i.jsxs("div",{className:"es-shell",children:[i.jsxs("div",{className:"es-split",children:[i.jsxs("div",{children:[i.jsx("span",{className:"es-eyebrow",children:"SUPPORT & CONTINUED COLLABORATION"}),i.jsx("h2",{id:"es-support-title",children:"Plan What Happens After the Initial Delivery"}),i.jsx("p",{children:"Launch is one stage of an engagement. We discuss the access, documentation, reporting and support your team needs to manage the next stage."}),i.jsx("p",{children:"For domestic and international collaboration, communication channels, review arrangements and responsibilities are agreed around the scope. Ongoing work can include maintenance, campaign management or further development."}),i.jsx(Ei,{items:["Defined handover and ownership responsibilities","Documented decisions and next-step priorities","Support arrangements agreed in the proposal"]})]}),i.jsxs("figure",{className:"es-photo",children:[i.jsx(ws,{name:"delivery",alt:"Stock photograph of a group collaborating during a business meeting"}),i.jsx("figcaption",{children:"Organized collaboration from planning to handover."})]})]}),i.jsx(lr,{items:l2,className:"es-three-grid es-followup"})]})}),i.jsx("section",{className:"es-section es-soft","aria-labelledby":"es-faq-title",children:i.jsxs("div",{className:"es-shell es-faq-shell",children:[i.jsx(ha,{id:"es-faq-title",label:"COMMON QUESTIONS",title:"Before Your Engagement Begins",children:"Useful information about scope, packages and working with Engix."}),i.jsx("div",{className:"es-faq-list",children:o2.map(([s,r])=>i.jsxs("details",{className:"es-details",children:[i.jsx("summary",{children:s}),i.jsx("p",{children:r})]},s))})]})}),i.jsx("section",{className:"es-section es-contact","aria-labelledby":"es-contact-title",children:i.jsxs("div",{className:"es-shell es-contact-grid",children:[i.jsxs("div",{children:[i.jsx("span",{className:"es-eyebrow",children:"CONTACT ENGIX"}),i.jsx("h2",{id:"es-contact-title",children:"Let’s Define the Right Services for Your Business"}),i.jsx("p",{children:"Tell us about your requirements, existing systems and priorities. We will discuss the proposed scope, the services involved and the next steps."}),i.jsxs(re,{className:"es-button",to:"/contact",children:["Discuss your project",i.jsx(Ce,{size:20,"aria-hidden":"true"})]})]}),i.jsxs("div",{className:"es-contact-details",children:[i.jsx("h3",{children:"Connect with Engix"}),i.jsxs("a",{href:"mailto:hello@engix.world",children:[i.jsx(zt,{size:22,"aria-hidden":"true"}),i.jsxs("span",{children:["Email",i.jsx("strong",{children:"hello@engix.world"})]})]}),i.jsxs("a",{href:"tel:+917355985134",children:[i.jsx(It,{size:22,"aria-hidden":"true"}),i.jsxs("span",{children:["Phone",i.jsx("strong",{children:"+91 7355985134"})]})]}),i.jsx("p",{children:"Engix Tech Private Limited — IT services, custom development and digital marketing."})]})]})})]})}const u2={corporate:["corporate-websites.jpg","photo-1497366754035-f200968a6e72"],ai:["ai-conversations.jpg","photo-1531746790731-6c087fecd65a"],mobile:["mobile-services.jpg","photo-1551650975-87deedd944c3"],technology:["connected-technology.jpg","photo-1677442136019-21780ecad995"],reporting:["marketing-reporting.jpg","photo-1551288049-bebda4e38f71"],collaboration:["campaign-collaboration.jpg","photo-1552664730-d307ca884978"],global:["international-markets.jpg","photo-1521295121783-8a321d551ad2"]};function id({name:s,alt:r,className:d=""}){const[c,u]=k.useState(0),[h,g]=u2[s];if(c>1)return i.jsx("div",{className:`ep-image-fallback ${d}`,role:"img","aria-label":r,children:i.jsx(dt,{size:48,"aria-hidden":"true"})});const x=c===0?`/images/portfolio/${h}`:`https://images.unsplash.com/${g}?auto=format&fit=crop&w=1600&q=85`;return i.jsx("img",{src:x,alt:r,className:d,width:"1600",height:"1067",loading:"lazy",decoding:"async",onError:()=>u(y=>y+1)})}const p2=[{id:"spinnovate",icon:dt,tone:"lavender",category:"Corporate Website Development",title:"Spinnovate Digital Ecosystem",client:"Spinnovate Limited",location:"Durham, United Kingdom",status:"Delivered",description:"A multi-brand website engagement supporting Spinnovate Limited and its technology and innovation ventures. The work brought distinct business identities into clear, responsive corporate web experiences for international audiences.",detail:"The engagement covered information architecture, interface design, responsive frontend development and deployment across Palebluedot, Spinnovatech and Allotrope.",scope:["Corporate website structure and brand presentation","Responsive interface design and frontend development","Content organization and deployment"],deliverables:["Palebluedot","Spinnovatech","Allotrope"],image:"corporate",alt:"Representative stock photograph of a modern professional office"},{id:"conversational-ai",icon:ma,tone:"yellow",category:"AI Application Development",title:"Conversational AI & Interview Workflows",client:"Technology Client",location:"Singapore",status:"Delivered",description:"An AI application engagement for a Singapore-based client, combining conversational chatbot experiences with an AI interviewer system.",detail:"The work focused on structured digital conversations, application interfaces and connected interview workflows, with attention to clear interaction and accessible user journeys.",scope:["Conversational interfaces and application engineering","AI interviewer workflows","API integration and user experience"],deliverables:["AI Chatbots","AI Interviewer","Conversational Workflows"],image:"ai",alt:"Representative stock photograph of a humanoid robot hand"},{id:"mr-maintenance",icon:jr,tone:"green",category:"Mobile Application & Business Operations",title:"Mr Maintenance Service Platform",client:"Alind Gupta",location:"India",status:"In Development",description:"A service booking platform being developed to connect customers, administrators and field technicians through an organized digital workflow.",detail:"The planned platform covers service discovery, scheduling, booking, technician assignment, completion verification, payments and customer feedback. The project remains in development.",scope:["Customer application and service booking journeys","Backend APIs, OTP authentication and administration","Technician workflows and payment integration"],deliverables:["Customer Application","Admin Operations","Technician Workflow"],image:"mobile",alt:"Representative stock photograph of a mobile application interface"}],h2=[{icon:ni,title:"SEO & Website Visibility",text:"Search research, technical website reviews and on-page improvements organized around relevant audiences and business services.",points:["Keyword and competitor research","Website structure and content priorities","Search visibility and enquiry measurement"]},{icon:dn,title:"Paid Advertising & Campaigns",text:"Campaign direction that connects the offer, audience, creative message and landing page into a clearer customer journey.",points:["Audience and campaign planning","Advertising copy and creative coordination","Conversion tracking and campaign reviews"]},{icon:qs,title:"Social Media & Content",text:"Content and communication that explain the business consistently across its website, campaigns and social channels.",points:["Content calendars and brand messaging","Website, article and campaign content","Social creative and engagement reviews"]},{icon:xa,title:"Email, Analytics & Conversion",text:"Email communication and digital measurement that help teams understand engagement and identify practical improvements.",points:["Email copy, layouts and audience segments","Analytics and reporting arrangements","Landing page and enquiry journey reviews"]}],g2=[{image:"reporting",alt:"Representative stock photograph of an analytics dashboard",label:"SEARCH & PERFORMANCE",title:"A Clearer View of Digital Activity",text:"Measurement connects website and campaign activity with the actions that matter to the engagement. Reviews can cover visibility, relevant visits, engagement and enquiries, according to the agreed scope."},{image:"collaboration",alt:"Representative stock photograph of colleagues planning together",label:"CONTENT & CAMPAIGN COORDINATION",title:"One Message Across Digital Channels",text:"Website content, advertising and social communication work best when they explain the same offer clearly. We coordinate research, messaging and creative direction around the audience and business priorities."},{image:"technology",alt:"Representative technology illustration associated with artificial intelligence",label:"TECHNOLOGY & MARKETING",title:"Connect the Website with the Wider Journey",text:"Development and marketing decisions often meet at forms, landing pages, integrations and reporting. Our services bring these parts together so the technical experience supports the intended customer action."}],f2=["United States","Canada","United Kingdom","Australia","Singapore"],m2=[{icon:dn,title:"Business context first",text:"Understand the organization, audience and problem before recommending the work required."},{icon:ja,title:"Connected disciplines",text:"Keep design, engineering, content and marketing decisions aligned with the engagement."},{icon:zd,title:"Clear collaboration",text:"Document scope, dependencies and decisions, with review points that keep priorities visible."},{icon:Pt,title:"Practical next steps",text:"Plan handover, reporting, maintenance or further improvements according to the agreed responsibilities."}],x2=[{icon:ni,title:"Understand",text:"Review the business context, existing systems, audience and objectives."},{icon:Rn,title:"Define",text:"Agree on scope, responsibilities, dependencies and delivery priorities."},{icon:Xt,title:"Deliver & Review",text:"Build or prepare the work in stages, with appropriate checks and feedback."},{icon:$e,title:"Handover & Improve",text:"Complete the agreed handover and discuss support or next-step improvements."}],y2=["Corporate Websites","Custom Software","AI Integrations","Mobile Applications","Business Automation","Backend APIs","Cloud Deployment","UI/UX Design","SEO","Paid Advertising","Social Media","Content Marketing","Email Marketing","Analytics & Reporting"];function fd({items:s}){return i.jsx("ul",{className:"ep-checklist",children:s.map(r=>i.jsxs("li",{children:[i.jsx($e,{size:18,"aria-hidden":"true"}),i.jsx("span",{children:r})]},r))})}function Es({id:s,label:r,title:d,children:c}){return i.jsxs("div",{className:"ep-heading",children:[i.jsx("span",{className:"ep-eyebrow",children:r}),i.jsx("h2",{id:s,children:d}),c&&i.jsx("p",{children:c})]})}function ad({items:s}){return i.jsx("div",{className:"ep-card-grid",children:s.map(({icon:r,title:d,text:c,points:u})=>i.jsxs("article",{className:"ep-card",children:[i.jsx("span",{className:"ep-icon",children:i.jsx(r,{size:26,strokeWidth:1.7,"aria-hidden":"true"})}),i.jsx("h3",{children:d}),i.jsx("p",{children:c}),u&&i.jsx(fd,{items:u})]},d))})}function v2(){return Ft("Our Work"),i.jsxs("div",{className:"engix-portfolio-page",children:[i.jsx("section",{className:"ep-hero","aria-labelledby":"ep-title",children:i.jsxs("div",{className:"ep-shell",children:[i.jsx("span",{className:"ep-eyebrow",children:"ENGIX TECH PRIVATE LIMITED / OUR WORK"}),i.jsxs("h1",{id:"ep-title",children:["Client Projects.",i.jsx("br",{}),"Digital Expertise.",i.jsx("br",{}),"International Experience."]}),i.jsxs("div",{className:"ep-hero-grid",children:[i.jsx("p",{className:"ep-lead",children:"From corporate websites and AI applications to service platforms and digital marketing, Engix works with businesses on technology and communication challenges across domestic and international markets."}),i.jsxs("div",{className:"ep-hero-note",children:[i.jsx(dt,{size:28,"aria-hidden":"true"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Built in India. Working across markets."}),i.jsx("span",{children:"Project experience across the USA, Canada, UK, Australia and Singapore."})]})]})]}),i.jsxs("nav",{className:"ep-section-nav","aria-label":"Work page sections",children:[i.jsx("a",{href:"#ep-selected",children:"Selected projects"}),i.jsx("a",{href:"#ep-marketing",children:"Digital marketing"}),i.jsx("a",{href:"#ep-markets",children:"International experience"})]})]})}),i.jsx("section",{id:"ep-selected",className:"ep-section","aria-labelledby":"ep-projects-title",children:i.jsxs("div",{className:"ep-shell",children:[i.jsx(Es,{id:"ep-projects-title",label:"SELECTED CLIENT PROJECTS",title:"Technology Work Shaped Around Business Requirements",children:"A selection of client engagements, with their scope and current project status. The accompanying images are representative visuals."}),i.jsx("div",{className:"ep-project-list",children:p2.map(s=>{const r=s.icon;return i.jsxs("article",{className:`ep-project ep-tone-${s.tone}`,"aria-labelledby":`ep-${s.id}`,children:[i.jsxs("div",{className:"ep-project-copy",children:[i.jsxs("div",{className:"ep-project-top",children:[i.jsx("span",{className:"ep-icon",children:i.jsx(r,{size:26,strokeWidth:1.7,"aria-hidden":"true"})}),i.jsx("span",{className:`ep-status ${s.status==="Delivered"?"ep-delivered":""}`,children:s.status})]}),i.jsx("span",{className:"ep-category",children:s.category}),i.jsx("h3",{id:`ep-${s.id}`,children:s.title}),i.jsx("p",{children:s.description}),i.jsx("p",{children:s.detail}),i.jsxs("dl",{className:"ep-project-meta",children:[i.jsxs("div",{children:[i.jsx("dt",{children:"Client"}),i.jsx("dd",{children:s.client})]}),i.jsxs("div",{children:[i.jsx("dt",{children:"Location"}),i.jsx("dd",{children:s.location})]})]}),i.jsx("h4",{children:"Engagement scope"}),i.jsx(fd,{items:s.scope}),i.jsx("ul",{className:"ep-tags ep-project-tags","aria-label":"Project deliverables",children:s.deliverables.map(d=>i.jsx("li",{children:d},d))})]}),i.jsxs("figure",{className:"ep-project-photo",children:[i.jsx(id,{name:s.image,alt:s.alt}),i.jsxs("figcaption",{children:["Representative image · ",s.category]})]})]},s.id)})}),i.jsxs("div",{className:"ep-note",children:[i.jsx("strong",{children:"Have a related requirement?"}),i.jsx("p",{children:"Tell us about your business context, current systems and proposed scope. We can discuss which design, engineering or marketing services are relevant."}),i.jsxs(re,{className:"ep-text-link",to:"/contact",children:["Discuss your requirements",i.jsx(Ce,{size:19,"aria-hidden":"true"})]})]})]})}),i.jsx("section",{id:"ep-marketing",className:"ep-section ep-green","aria-labelledby":"ep-marketing-title",children:i.jsxs("div",{className:"ep-shell",children:[i.jsx(Es,{id:"ep-marketing-title",label:"DIGITAL MARKETING WORK",title:"Website Visibility, Campaigns and Content That Work Together",children:"Alongside technology engagements, Engix provides digital marketing services for businesses reaching domestic and international audiences. The areas below summarize our marketing capabilities and engagement approach."}),i.jsx(ad,{items:h2})]})}),i.jsx("section",{className:"ep-section","aria-labelledby":"ep-connected-title",children:i.jsxs("div",{className:"ep-shell",children:[i.jsx(Es,{id:"ep-connected-title",label:"CONNECTED DIGITAL DELIVERY",title:"From the First Impression to the Next Customer Action",children:"A professional digital presence brings technical experience, clear communication and useful measurement into the same plan."}),i.jsx("div",{className:"ep-feature-grid",children:g2.map(s=>i.jsxs("article",{className:"ep-feature",children:[i.jsxs("figure",{children:[i.jsx(id,{name:s.image,alt:s.alt}),i.jsx("figcaption",{children:"Representative visual"})]}),i.jsxs("div",{className:"ep-feature-copy",children:[i.jsx("span",{className:"ep-eyebrow",children:s.label}),i.jsx("h3",{children:s.title}),i.jsx("p",{children:s.text})]})]},s.title))})]})}),i.jsx("section",{id:"ep-markets",className:"ep-section ep-soft","aria-labelledby":"ep-markets-title",children:i.jsxs("div",{className:"ep-shell ep-split",children:[i.jsxs("figure",{className:"ep-photo",children:[i.jsx(id,{name:"global",alt:"Stock photograph of a globe representing international collaboration"}),i.jsx("figcaption",{children:"Domestic and international project collaboration."})]}),i.jsxs("div",{children:[i.jsx("span",{className:"ep-eyebrow",children:"INTERNATIONAL PROJECT EXPERIENCE"}),i.jsx("h2",{id:"ep-markets-title",children:"Experience Across Markets. A Shared Focus on Delivery."}),i.jsx("p",{children:"Engix has worked on various projects across the United States, Canada, the United Kingdom, Australia and Singapore, alongside engagements in India."}),i.jsx("p",{children:"Our approach connects business requirements with the audience, systems and communication needs of each engagement. Scope, responsibilities and review arrangements are agreed with the client."}),i.jsx("ul",{className:"ep-market-list","aria-label":"International markets",children:f2.map(s=>i.jsxs("li",{children:[i.jsx(dt,{size:18,"aria-hidden":"true"}),i.jsx("span",{children:s})]},s))}),i.jsx(fd,{items:["Clear coordination with client stakeholders","Documented priorities and project decisions","Design, development and marketing aligned to the scope","Review and handover arrangements agreed in advance"]})]})]})}),i.jsx("section",{className:"ep-section","aria-labelledby":"ep-capabilities-title",children:i.jsxs("div",{className:"ep-shell ep-split",children:[i.jsxs("div",{children:[i.jsx("span",{className:"ep-eyebrow",children:"BREADTH OF CAPABILITY"}),i.jsx("h2",{id:"ep-capabilities-title",children:"Services for Different Stages of Your Digital Journey"}),i.jsx("p",{children:"An engagement may begin with a website, an internal workflow or a marketing requirement. We discuss how the relevant services can connect around your priorities."})]}),i.jsx("div",{children:i.jsx("ul",{className:"ep-tags ep-capability-tags",children:y2.map(s=>i.jsx("li",{children:s},s))})})]})}),i.jsx("section",{className:"ep-section ep-green","aria-labelledby":"ep-values-title",children:i.jsxs("div",{className:"ep-shell",children:[i.jsx(Es,{id:"ep-values-title",label:"HOW WE CREATE VALUE",title:"Professional Work Starts with Clear Understanding",children:"We connect the business context with delivery decisions so the work remains understandable, relevant and aligned with its purpose."}),i.jsx(ad,{items:m2})]})}),i.jsx("section",{className:"ep-section","aria-labelledby":"ep-process-title",children:i.jsxs("div",{className:"ep-shell",children:[i.jsx(Es,{id:"ep-process-title",label:"OUR ENGAGEMENT APPROACH",title:"A Clear Path from Requirements to Handover",children:"Practical stages help organize technology and marketing work, with opportunities to review progress and clarify the next steps."}),i.jsx(ad,{items:x2})]})}),i.jsx("section",{className:"ep-section ep-contact","aria-labelledby":"ep-contact-title",children:i.jsxs("div",{className:"ep-shell ep-contact-grid",children:[i.jsxs("div",{children:[i.jsx("span",{className:"ep-eyebrow",children:"CONTACT ENGIX"}),i.jsx("h2",{id:"ep-contact-title",children:"Let’s Discuss Your Next Digital Initiative"}),i.jsx("p",{children:"Share your requirements, existing systems and business priorities. We will discuss the services involved, a practical scope and how the engagement can move forward."}),i.jsxs(re,{className:"ep-button",to:"/contact",children:["Discuss your project",i.jsx(Ce,{size:20,"aria-hidden":"true"})]})]}),i.jsxs("div",{className:"ep-contact-details",children:[i.jsx("h3",{children:"Connect with Engix"}),i.jsxs("a",{href:"mailto:hello@engix.world",children:[i.jsx(zt,{size:22,"aria-hidden":"true"}),i.jsxs("span",{children:["Email",i.jsx("strong",{children:"hello@engix.world"})]})]}),i.jsxs("a",{href:"tel:+917355985134",children:[i.jsx(It,{size:22,"aria-hidden":"true"}),i.jsxs("span",{children:["Phone",i.jsx("strong",{children:"+91 7355985134"})]})]}),i.jsx("p",{children:"Engix Tech Private Limited — IT services, custom development and digital marketing."})]})]})})]})}const b2={team:["team-collaboration.jpg","photo-1600880292203-757bb62b4baf"],office:["project-consultation.jpg","photo-1524758631624-e2822e304c36"],session:["working-session.jpg","photo-1531482615713-2afd69097998"],engineering:["software-engineering.jpg","photo-1461749280684-dccba630e2f6"],marketing:["marketing-research.jpg","photo-1454165804606-c3d57bc86b40"]};function Ss({name:s,alt:r,priority:d=!1}){const[c,u]=k.useState(0),[h,g]=b2[s],x=`/images/about/${h}`,y=`https://images.unsplash.com/${g}?auto=format&fit=crop&w=1600&q=85`;return c>1?i.jsxs("div",{className:"ea-image-fallback",role:"img","aria-label":r,children:[i.jsx(dt,{size:48,"aria-hidden":"true"}),i.jsx("span",{children:"Technology. Collaboration. Progress."})]}):i.jsx("img",{src:c===0?x:y,alt:r,width:"1600",height:"1067",loading:d?"eager":"lazy",fetchPriority:d?"high":"auto",decoding:"async",onError:()=>u(m=>m+1)})}const j2=[{icon:Xt,title:"Custom Software Development",text:"Business applications, internal tools and tailored software that connect your teams, information and day-to-day operations."},{icon:jr,title:"Website & Mobile Development",text:"Company websites, ecommerce experiences and web and mobile applications designed around usability and business requirements."},{icon:ja,title:"UI/UX & Experience Design",text:"Research, user journeys, wireframes and interface design that help people navigate your services and complete tasks with confidence."},{icon:ma,title:"AI & Intelligent Automation",text:"AI integrations, assistants and automated workflows shaped around practical use cases, data requirements and human oversight."},{icon:Ds,title:"Backend, APIs & Cloud",text:"Application backends, integrations, databases and deployment foundations, with attention to security, reliability and maintainability."},{icon:Rn,title:"Business Workflow Solutions",text:"Customer management, reporting and operational tools that reduce disconnected processes and improve access to useful information."},{icon:qs,title:"Digital Marketing & Content",text:"SEO, paid advertising, social media, content and email marketing planned around your audience, positioning and business objectives."},{icon:xa,title:"Analytics & Conversion",text:"Measurement planning, campaign reporting and website improvements that help you understand engagement and make informed decisions."}],w2=[{icon:dn,title:"Business understanding first",text:"We start with the problem, the people affected and the outcome you want before recommending a technical or marketing approach."},{icon:zd,title:"Clear communication",text:"Scope, responsibilities, decisions and progress reviews are discussed early so everyone understands how the engagement will work."},{icon:Pt,title:"Responsible execution",text:"We consider quality, access controls, maintainability and measurement as part of delivery, rather than leaving them until the end."},{icon:ur,title:"Practical improvement",text:"Recommendations reflect your current needs and constraints, with room to improve as requirements and business priorities change."}],E2=[{icon:ni,title:"Discover",text:"Understand your business, audience, existing systems and desired outcomes."},{icon:dn,title:"Define",text:"Agree on scope, priorities, requirements and delivery responsibilities."},{icon:ja,title:"Design",text:"Shape interfaces, workflows, content and campaign direction."},{icon:Xt,title:"Build",text:"Develop systems or prepare campaigns in planned, reviewable stages."},{icon:Pt,title:"Validate",text:"Review functionality, experience, integrations and measurement."},{icon:Od,title:"Launch & Improve",text:"Launch the agreed work and plan support or improvements within scope."}],S2=[{icon:Xt,title:"Maintainable foundations",text:"Clear application structure, reusable components and documented integrations help make future changes easier to understand and manage."},{icon:Pt,title:"Quality and security considerations",text:"Testing, permissions, validation and sensible access controls are considered alongside the features required for the engagement."},{icon:Ds,title:"Deployment and handover",text:"Environment configuration, release planning and useful handover information help your team prepare for the next stage of operation."}],k2=[{title:"Search visibility",text:"Technical SEO, on-page improvements and relevant content help organize your website around the searches that matter to your audience."},{title:"Paid campaigns",text:"Campaign structure, audience selection, creative messaging and landing pages are planned around agreed objectives and advertising budgets."},{title:"Social media and content",text:"Channel planning, brand messaging and useful content help maintain a coherent presence across the places your audience spends time."},{title:"Email and measurement",text:"Email communication, conversion tracking and reporting help connect marketing activity with observable engagement and enquiry data."}],N2=[{icon:dn,title:"Defined project delivery",text:"For a website, application or specific initiative with an agreed scope, delivery stages and review points."},{icon:Rn,title:"Ongoing collaboration",text:"For marketing activity, maintenance or improvements delivered through an agreed schedule and set of responsibilities."},{icon:zd,title:"Support for your existing team",text:"For businesses that need additional design, development or marketing capability alongside their internal stakeholders."}];function sd({items:s}){return i.jsx("ul",{className:"ea-checklist",children:s.map(r=>i.jsxs("li",{children:[i.jsx($e,{size:20,"aria-hidden":"true"}),i.jsx("span",{children:r})]},r))})}function ks({items:s,className:r=""}){return i.jsx("div",{className:`ea-card-grid ${r}`,children:s.map(({icon:d,title:c,text:u})=>i.jsxs("article",{className:"ea-card",children:[i.jsx("span",{className:"ea-icon",children:i.jsx(d,{size:26,strokeWidth:1.7,"aria-hidden":"true"})}),i.jsx("h3",{children:c}),i.jsx("p",{children:u})]},c))})}function A2(){return Ft("About"),i.jsxs("div",{className:"engix-about-page",children:[i.jsx("section",{className:"ea-hero","aria-labelledby":"ea-title",children:i.jsxs("div",{className:"ea-shell ea-split",children:[i.jsxs("div",{children:[i.jsx("span",{className:"ea-eyebrow",children:"ABOUT ENGIX TECH PRIVATE LIMITED"}),i.jsxs("h1",{id:"ea-title",children:["Technology Expertise.",i.jsx("br",{}),"Business Focus."]}),i.jsx("p",{className:"ea-lead",children:"IT services, custom development and digital marketing built around the way your business works."}),i.jsx("p",{children:"Engix helps businesses strengthen their digital presence, improve operations and develop the technology they need. We bring design, engineering and marketing capabilities together around clear objectives and a practical delivery approach."}),i.jsxs(re,{className:"ea-button",to:"/contact",children:["Discuss your requirements",i.jsx(Ce,{size:20,"aria-hidden":"true"})]})]}),i.jsxs("figure",{className:"ea-photo ea-hero-photo",children:[i.jsx(Ss,{name:"team",priority:!0,alt:"Stock photograph of two professionals celebrating progress at an office table"}),i.jsx("figcaption",{children:"Thoughtful collaboration. Clear direction."})]})]})}),i.jsx("section",{className:"ea-section","aria-labelledby":"ea-story",children:i.jsxs("div",{className:"ea-shell",children:[i.jsxs("div",{className:"ea-heading",children:[i.jsx("span",{className:"ea-eyebrow",children:"WHO WE ARE"}),i.jsx("h2",{id:"ea-story",children:"A Services Partner for Your Next Stage of Growth"}),i.jsx("p",{children:"Engix Tech Private Limited works with organizations that want technology and digital marketing to support real business priorities."})]}),i.jsxs("div",{className:"ea-story-grid",children:[i.jsxs("div",{children:[i.jsx("p",{children:"Your requirements may involve a new website, a custom application, connected business systems or a more coordinated marketing presence. We help clarify what is needed and turn that understanding into a defined scope of work."}),i.jsx("p",{children:"Our focus is service delivery: building and improving solutions for clients, with attention to the people who use them and the teams responsible for managing them."})]}),i.jsxs("div",{children:[i.jsx("p",{children:"We connect business context with technical decisions and creative execution. That means considering user experience, operational workflows, integrations and measurement alongside the visible design."}),i.jsx("p",{children:"From an initial conversation through delivery, our aim is to keep priorities clear, decisions understandable and the work aligned with the agreed objectives."})]})]}),i.jsxs("div",{className:"ea-purpose-grid",children:[i.jsxs("article",{children:[i.jsx("span",{className:"ea-eyebrow",children:"OUR MISSION"}),i.jsx("h3",{children:"Make Digital Work More Useful"}),i.jsx("p",{children:"Help businesses adopt practical technology and marketing solutions that improve how they operate, communicate and serve their customers."})]}),i.jsxs("article",{children:[i.jsx("span",{className:"ea-eyebrow",children:"OUR VISION"}),i.jsx("h3",{children:"Build Relationships Through Dependable Work"}),i.jsx("p",{children:"Become a trusted services partner by combining thoughtful advice, clear collaboration and consistent attention to delivery quality."})]})]})]})}),i.jsx("section",{className:"ea-section ea-soft","aria-labelledby":"ea-services",children:i.jsxs("div",{className:"ea-shell",children:[i.jsxs("div",{className:"ea-heading",children:[i.jsx("span",{className:"ea-eyebrow",children:"OUR EXPERTISE"}),i.jsx("h2",{id:"ea-services",children:"IT and Digital Marketing, Connected by Your Goals"}),i.jsx("p",{children:"Choose the capabilities your business needs. We discuss how development, design, automation and marketing can work together within the engagement."})]}),i.jsx(ks,{items:j2}),i.jsxs(re,{className:"ea-text-link",to:"/services",children:["View our services",i.jsx(Ce,{size:19,"aria-hidden":"true"})]})]})}),i.jsx("section",{className:"ea-section","aria-labelledby":"ea-approach",children:i.jsxs("div",{className:"ea-shell ea-split",children:[i.jsxs("figure",{className:"ea-photo",children:[i.jsx(Ss,{name:"office",alt:"Stock photograph of a bright office lounge with meeting tables and seating"}),i.jsx("figcaption",{children:"Space for clear thinking and organized work."})]}),i.jsxs("div",{children:[i.jsx("span",{className:"ea-eyebrow",children:"OUR DELIVERY APPROACH"}),i.jsx("h2",{id:"ea-approach",children:"Good Work Starts with a Shared Understanding"}),i.jsx("p",{children:"Before delivery begins, we discuss what success means for your business, what needs to be included and which dependencies could affect the work."}),i.jsx("p",{children:"For development, this may include existing systems, user roles, integrations and deployment requirements. For marketing, it may include audience research, messaging, channels, content and reporting."}),i.jsx(sd,{items:["Defined scope and practical priorities","Documented requirements and key decisions","Planned reviews and clear responsibilities","Quality checks appropriate to the work","Handover and support arrangements agreed in advance"]})]})]})}),i.jsx("section",{className:"ea-section ea-soft","aria-labelledby":"ea-engineering",children:i.jsxs("div",{className:"ea-shell",children:[i.jsxs("div",{className:"ea-split",children:[i.jsxs("div",{children:[i.jsx("span",{className:"ea-eyebrow",children:"ENGINEERING QUALITY"}),i.jsx("h2",{id:"ea-engineering",children:"Software Designed for Everyday Business Use"}),i.jsx("p",{children:"A useful business application needs more than an attractive interface. It needs to support real workflows, exchange information reliably and remain understandable when requirements change."}),i.jsx("p",{children:"We consider architecture, user experience, integrations and operational needs together. Technology choices are discussed around your requirements, existing systems and the resources available to maintain the solution."}),i.jsx(sd,{items:["User journeys connected to business workflows","Frontend, backend and integrations planned together","Performance and accessibility considered during development","Support and future enhancements defined within scope"]})]}),i.jsxs("figure",{className:"ea-photo",children:[i.jsx(Ss,{name:"engineering",alt:"Stock photograph of programming code displayed on a desktop monitor"}),i.jsx("figcaption",{children:"Engineering with the next stage in mind."})]})]}),i.jsx(ks,{items:S2,className:"ea-three-grid ea-followup-grid"})]})}),i.jsx("section",{className:"ea-section","aria-labelledby":"ea-marketing",children:i.jsxs("div",{className:"ea-shell",children:[i.jsxs("div",{className:"ea-split",children:[i.jsxs("figure",{className:"ea-photo",children:[i.jsx(Ss,{name:"marketing",alt:"Stock photograph of professionals reviewing documents and planning at a desk"}),i.jsx("figcaption",{children:"Research, communication and measurement."})]}),i.jsxs("div",{children:[i.jsx("span",{className:"ea-eyebrow",children:"DIGITAL MARKETING"}),i.jsx("h2",{id:"ea-marketing",children:"A Clearer Digital Presence. A More Coordinated Marketing Approach."}),i.jsx("p",{children:"Your website, content and campaigns should communicate a consistent message. We help connect the technical and creative work so your audience can understand your services and find a clear next step."}),i.jsx("p",{children:"Marketing engagements begin with your objectives, target audience, current channels and available budget. Reporting focuses on the measurements agreed for the work, helping you understand what to review and improve."}),i.jsxs("div",{className:"ea-note",children:[i.jsx("strong",{children:"Planned around your business"}),i.jsx("p",{children:"Channel selection, content priorities and campaign recommendations depend on your market, audience and engagement scope."})]})]})]}),i.jsx("div",{className:"ea-marketing-grid",children:k2.map(({title:s,text:r})=>i.jsxs("article",{children:[i.jsx("h3",{children:s}),i.jsx("p",{children:r})]},s))})]})}),i.jsx("section",{className:"ea-section ea-green","aria-labelledby":"ea-values",children:i.jsxs("div",{className:"ea-shell",children:[i.jsxs("div",{className:"ea-heading",children:[i.jsx("span",{className:"ea-eyebrow",children:"WHAT GUIDES US"}),i.jsx("h2",{id:"ea-values",children:"Professional Standards. Practical Decisions."}),i.jsx("p",{children:"These principles guide how we assess requirements, collaborate with clients and deliver the agreed work."})]}),i.jsx(ks,{items:w2})]})}),i.jsx("section",{className:"ea-section","aria-labelledby":"ea-process",children:i.jsxs("div",{className:"ea-shell",children:[i.jsxs("div",{className:"ea-heading",children:[i.jsx("span",{className:"ea-eyebrow",children:"HOW WE WORK"}),i.jsx("h2",{id:"ea-process",children:"A Clear Path from Conversation to Delivery"}),i.jsx("p",{children:"We organize the engagement into understandable stages, with review points that allow decisions to improve as the work develops."})]}),i.jsx(ks,{items:E2,className:"ea-process-grid"})]})}),i.jsx("section",{className:"ea-section ea-soft","aria-labelledby":"ea-global",children:i.jsxs("div",{className:"ea-shell ea-split",children:[i.jsxs("div",{children:[i.jsx("span",{className:"ea-eyebrow",children:"DOMESTIC & INTERNATIONAL COLLABORATION"}),i.jsx("h2",{id:"ea-global",children:"A Technology Partner That Works Beyond Borders"}),i.jsx("p",{children:"Engix collaborates with businesses across locations through structured remote working practices. Project scope, dependencies and communication arrangements are agreed around the engagement."}),i.jsx("h3",{children:"Clear Coordination Across Locations"}),i.jsx("p",{children:"Shared priorities and documented decisions help keep development and marketing activities organized. We discuss how your team wants to work and establish practical review points."}),i.jsx(sd,{items:["Agreed communication channels and progress reviews","Delivery stages that make dependencies visible","Continued collaboration based on the agreed scope"]})]}),i.jsxs("figure",{className:"ea-photo",children:[i.jsx(Ss,{name:"session",alt:"Stock photograph of colleagues reviewing code together at a computer"}),i.jsx("figcaption",{children:"Connected teams. Shared priorities."})]})]})}),i.jsx("section",{className:"ea-section ea-green","aria-labelledby":"ea-partnership",children:i.jsxs("div",{className:"ea-shell",children:[i.jsxs("div",{className:"ea-heading",children:[i.jsx("span",{className:"ea-eyebrow",children:"WORKING WITH ENGIX"}),i.jsx("h2",{id:"ea-partnership",children:"An Engagement Built Around Your Requirements"}),i.jsx("p",{children:"Different priorities call for different working arrangements. We discuss the scope, communication and review process before recommending how the engagement should be organized."})]}),i.jsx(ks,{items:N2,className:"ea-three-grid"}),i.jsxs("div",{className:"ea-handover",children:[i.jsx("h3",{children:"Clear Handover and Next Steps"}),i.jsx("p",{children:"At the relevant delivery stage, we agree on the documentation, access, training or reporting needed for your team. Any ongoing maintenance, campaign management or additional development is discussed as part of the scope."})]})]})}),i.jsx("section",{className:"ea-section","aria-labelledby":"ea-businesses",children:i.jsxs("div",{className:"ea-shell ea-audiences",children:[i.jsx("span",{className:"ea-eyebrow",children:"WHO WE WORK WITH"}),i.jsx("h2",{id:"ea-businesses",children:"Different Businesses. A Focus on Useful Outcomes."}),i.jsx("p",{children:"We discuss each engagement around its requirements, whether the priority is a stronger online presence, a custom business system or better coordinated digital marketing."}),i.jsx("ul",{className:"ea-tags",children:["Growing Businesses","Professional Services","Technology Companies","Ecommerce & Retail","Service Businesses","Enterprise Teams"].map(s=>i.jsx("li",{children:s},s))})]})}),i.jsx("section",{className:"ea-section ea-contact","aria-labelledby":"ea-contact-title",children:i.jsxs("div",{className:"ea-shell ea-contact-grid",children:[i.jsxs("div",{children:[i.jsx("span",{className:"ea-eyebrow",children:"CONTACT ENGIX"}),i.jsx("h2",{id:"ea-contact-title",children:"Have a Challenge? Let’s Plan the Right Solution."}),i.jsx("p",{children:"Share your requirements, existing systems and business priorities. We will discuss the services you need, the proposed scope and the next steps."}),i.jsxs(re,{className:"ea-button",to:"/contact",children:["Discuss your project",i.jsx(Ce,{size:20,"aria-hidden":"true"})]})]}),i.jsxs("div",{className:"ea-contact-details",children:[i.jsx("h3",{children:"Connect with Engix"}),i.jsxs("a",{href:"mailto:hello@engix.world",children:[i.jsx(zt,{size:22,"aria-hidden":"true"}),i.jsxs("span",{children:["Email",i.jsx("strong",{children:"hello@engix.world"})]})]}),i.jsxs("a",{href:"tel:+917355985134",children:[i.jsx(It,{size:22,"aria-hidden":"true"}),i.jsxs("span",{children:["Phone",i.jsx("strong",{children:"+91 7355985134"})]})]}),i.jsx("p",{children:"Engix Tech Private Limited — IT services, custom development and digital marketing."})]})]})})]})}function dm(s,r){return function(){return s.apply(r,arguments)}}const{toString:T2}=Object.prototype,{getPrototypeOf:qd}=Object,{iterator:Er,toStringTag:um}=Symbol,Sr=(s=>r=>{const d=T2.call(r);return s[d]||(s[d]=d.slice(8,-1).toLowerCase())})(Object.create(null)),en=s=>(s=s.toLowerCase(),r=>Sr(r)===s),kr=s=>r=>typeof r===s,{isArray:wa}=Array,ya=kr("undefined");function _s(s){return s!==null&&!ya(s)&&s.constructor!==null&&!ya(s.constructor)&&yt(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const pm=en("ArrayBuffer");function C2(s){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(s):r=s&&s.buffer&&pm(s.buffer),r}const R2=kr("string"),yt=kr("function"),hm=kr("number"),Us=s=>s!==null&&typeof s=="object",z2=s=>s===!0||s===!1,pr=s=>{if(Sr(s)!=="object")return!1;const r=qd(s);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(um in s)&&!(Er in s)},O2=s=>{if(!Us(s)||_s(s))return!1;try{return Object.keys(s).length===0&&Object.getPrototypeOf(s)===Object.prototype}catch{return!1}},M2=en("Date"),D2=en("File"),q2=s=>!!(s&&typeof s.uri<"u"),_2=s=>s&&typeof s.getParts<"u",U2=en("Blob"),L2=en("FileList"),B2=s=>Us(s)&&yt(s.pipe);function H2(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const hf=H2(),gf=typeof hf.FormData<"u"?hf.FormData:void 0,G2=s=>{let r;return s&&(gf&&s instanceof gf||yt(s.append)&&((r=Sr(s))==="formdata"||r==="object"&&yt(s.toString)&&s.toString()==="[object FormData]"))},Y2=en("URLSearchParams"),[V2,X2,I2,W2]=["ReadableStream","Request","Response","Headers"].map(en),Q2=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ls(s,r,{allOwnKeys:d=!1}={}){if(s===null||typeof s>"u")return;let c,u;if(typeof s!="object"&&(s=[s]),wa(s))for(c=0,u=s.length;c<u;c++)r.call(null,s[c],c,s);else{if(_s(s))return;const h=d?Object.getOwnPropertyNames(s):Object.keys(s),g=h.length;let x;for(c=0;c<g;c++)x=h[c],r.call(null,s[x],x,s)}}function gm(s,r){if(_s(s))return null;r=r.toLowerCase();const d=Object.keys(s);let c=d.length,u;for(;c-- >0;)if(u=d[c],r===u.toLowerCase())return u;return null}const ki=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,fm=s=>!ya(s)&&s!==ki;function md(){const{caseless:s,skipUndefined:r}=fm(this)&&this||{},d={},c=(u,h)=>{if(h==="__proto__"||h==="constructor"||h==="prototype")return;const g=s&&gm(d,h)||h;pr(d[g])&&pr(u)?d[g]=md(d[g],u):pr(u)?d[g]=md({},u):wa(u)?d[g]=u.slice():(!r||!ya(u))&&(d[g]=u)};for(let u=0,h=arguments.length;u<h;u++)arguments[u]&&Ls(arguments[u],c);return d}const K2=(s,r,d,{allOwnKeys:c}={})=>(Ls(r,(u,h)=>{d&&yt(u)?Object.defineProperty(s,h,{value:dm(u,d),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(s,h,{value:u,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:c}),s),Z2=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),J2=(s,r,d,c)=>{s.prototype=Object.create(r.prototype,c),Object.defineProperty(s.prototype,"constructor",{value:s,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(s,"super",{value:r.prototype}),d&&Object.assign(s.prototype,d)},$2=(s,r,d,c)=>{let u,h,g;const x={};if(r=r||{},s==null)return r;do{for(u=Object.getOwnPropertyNames(s),h=u.length;h-- >0;)g=u[h],(!c||c(g,s,r))&&!x[g]&&(r[g]=s[g],x[g]=!0);s=d!==!1&&qd(s)}while(s&&(!d||d(s,r))&&s!==Object.prototype);return r},P2=(s,r,d)=>{s=String(s),(d===void 0||d>s.length)&&(d=s.length),d-=r.length;const c=s.indexOf(r,d);return c!==-1&&c===d},F2=s=>{if(!s)return null;if(wa(s))return s;let r=s.length;if(!hm(r))return null;const d=new Array(r);for(;r-- >0;)d[r]=s[r];return d},ej=(s=>r=>s&&r instanceof s)(typeof Uint8Array<"u"&&qd(Uint8Array)),tj=(s,r)=>{const c=(s&&s[Er]).call(s);let u;for(;(u=c.next())&&!u.done;){const h=u.value;r.call(s,h[0],h[1])}},nj=(s,r)=>{let d;const c=[];for(;(d=s.exec(r))!==null;)c.push(d);return c},ij=en("HTMLFormElement"),aj=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(d,c,u){return c.toUpperCase()+u}),ff=(({hasOwnProperty:s})=>(r,d)=>s.call(r,d))(Object.prototype),sj=en("RegExp"),mm=(s,r)=>{const d=Object.getOwnPropertyDescriptors(s),c={};Ls(d,(u,h)=>{let g;(g=r(u,h,s))!==!1&&(c[h]=g||u)}),Object.defineProperties(s,c)},lj=s=>{mm(s,(r,d)=>{if(yt(s)&&["arguments","caller","callee"].indexOf(d)!==-1)return!1;const c=s[d];if(yt(c)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+d+"'")})}})},rj=(s,r)=>{const d={},c=u=>{u.forEach(h=>{d[h]=!0})};return wa(s)?c(s):c(String(s).split(r)),d},oj=()=>{},cj=(s,r)=>s!=null&&Number.isFinite(s=+s)?s:r;function dj(s){return!!(s&&yt(s.append)&&s[um]==="FormData"&&s[Er])}const uj=s=>{const r=new Array(10),d=(c,u)=>{if(Us(c)){if(r.indexOf(c)>=0)return;if(_s(c))return c;if(!("toJSON"in c)){r[u]=c;const h=wa(c)?[]:{};return Ls(c,(g,x)=>{const y=d(g,u+1);!ya(y)&&(h[x]=y)}),r[u]=void 0,h}}return c};return d(s,0)},pj=en("AsyncFunction"),hj=s=>s&&(Us(s)||yt(s))&&yt(s.then)&&yt(s.catch),xm=((s,r)=>s?setImmediate:r?((d,c)=>(ki.addEventListener("message",({source:u,data:h})=>{u===ki&&h===d&&c.length&&c.shift()()},!1),u=>{c.push(u),ki.postMessage(d,"*")}))(`axios@${Math.random()}`,[]):d=>setTimeout(d))(typeof setImmediate=="function",yt(ki.postMessage)),gj=typeof queueMicrotask<"u"?queueMicrotask.bind(ki):typeof process<"u"&&process.nextTick||xm,fj=s=>s!=null&&yt(s[Er]),z={isArray:wa,isArrayBuffer:pm,isBuffer:_s,isFormData:G2,isArrayBufferView:C2,isString:R2,isNumber:hm,isBoolean:z2,isObject:Us,isPlainObject:pr,isEmptyObject:O2,isReadableStream:V2,isRequest:X2,isResponse:I2,isHeaders:W2,isUndefined:ya,isDate:M2,isFile:D2,isReactNativeBlob:q2,isReactNative:_2,isBlob:U2,isRegExp:sj,isFunction:yt,isStream:B2,isURLSearchParams:Y2,isTypedArray:ej,isFileList:L2,forEach:Ls,merge:md,extend:K2,trim:Q2,stripBOM:Z2,inherits:J2,toFlatObject:$2,kindOf:Sr,kindOfTest:en,endsWith:P2,toArray:F2,forEachEntry:tj,matchAll:nj,isHTMLForm:ij,hasOwnProperty:ff,hasOwnProp:ff,reduceDescriptors:mm,freezeMethods:lj,toObjectSet:rj,toCamelCase:aj,noop:oj,toFiniteNumber:cj,findKey:gm,global:ki,isContextDefined:fm,isSpecCompliantForm:dj,toJSONObject:uj,isAsyncFn:pj,isThenable:hj,setImmediate:xm,asap:gj,isIterable:fj};let ie=class ym extends Error{static from(r,d,c,u,h,g){const x=new ym(r.message,d||r.code,c,u,h);return x.cause=r,x.name=r.name,r.status!=null&&x.status==null&&(x.status=r.status),g&&Object.assign(x,g),x}constructor(r,d,c,u,h){super(r),Object.defineProperty(this,"message",{value:r,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,d&&(this.code=d),c&&(this.config=c),u&&(this.request=u),h&&(this.response=h,this.status=h.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:z.toJSONObject(this.config),code:this.code,status:this.status}}};ie.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ie.ERR_BAD_OPTION="ERR_BAD_OPTION";ie.ECONNABORTED="ECONNABORTED";ie.ETIMEDOUT="ETIMEDOUT";ie.ERR_NETWORK="ERR_NETWORK";ie.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ie.ERR_DEPRECATED="ERR_DEPRECATED";ie.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ie.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ie.ERR_CANCELED="ERR_CANCELED";ie.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ie.ERR_INVALID_URL="ERR_INVALID_URL";const mj=null;function xd(s){return z.isPlainObject(s)||z.isArray(s)}function vm(s){return z.endsWith(s,"[]")?s.slice(0,-2):s}function ld(s,r,d){return s?s.concat(r).map(function(u,h){return u=vm(u),!d&&h?"["+u+"]":u}).join(d?".":""):r}function xj(s){return z.isArray(s)&&!s.some(xd)}const yj=z.toFlatObject(z,{},null,function(r){return/^is[A-Z]/.test(r)});function Nr(s,r,d){if(!z.isObject(s))throw new TypeError("target must be an object");r=r||new FormData,d=z.toFlatObject(d,{metaTokens:!0,dots:!1,indexes:!1},!1,function(q,R){return!z.isUndefined(R[q])});const c=d.metaTokens,u=d.visitor||v,h=d.dots,g=d.indexes,y=(d.Blob||typeof Blob<"u"&&Blob)&&z.isSpecCompliantForm(r);if(!z.isFunction(u))throw new TypeError("visitor must be a function");function m(N){if(N===null)return"";if(z.isDate(N))return N.toISOString();if(z.isBoolean(N))return N.toString();if(!y&&z.isBlob(N))throw new ie("Blob is not supported. Use a Buffer instead.");return z.isArrayBuffer(N)||z.isTypedArray(N)?y&&typeof Blob=="function"?new Blob([N]):Buffer.from(N):N}function v(N,q,R){let G=N;if(z.isReactNative(r)&&z.isReactNativeBlob(N))return r.append(ld(R,q,h),m(N)),!1;if(N&&!R&&typeof N=="object"){if(z.endsWith(q,"{}"))q=c?q:q.slice(0,-2),N=JSON.stringify(N);else if(z.isArray(N)&&xj(N)||(z.isFileList(N)||z.endsWith(q,"[]"))&&(G=z.toArray(N)))return q=vm(q),G.forEach(function(O,J){!(z.isUndefined(O)||O===null)&&r.append(g===!0?ld([q],J,h):g===null?q:q+"[]",m(O))}),!1}return xd(N)?!0:(r.append(ld(R,q,h),m(N)),!1)}const j=[],_=Object.assign(yj,{defaultVisitor:v,convertValue:m,isVisitable:xd});function V(N,q){if(!z.isUndefined(N)){if(j.indexOf(N)!==-1)throw Error("Circular reference detected in "+q.join("."));j.push(N),z.forEach(N,function(G,W){(!(z.isUndefined(G)||G===null)&&u.call(r,G,z.isString(W)?W.trim():W,q,_))===!0&&V(G,q?q.concat(W):[W])}),j.pop()}}if(!z.isObject(s))throw new TypeError("data must be an object");return V(s),r}function mf(s){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(c){return r[c]})}function _d(s,r){this._pairs=[],s&&Nr(s,this,r)}const bm=_d.prototype;bm.append=function(r,d){this._pairs.push([r,d])};bm.toString=function(r){const d=r?function(c){return r.call(this,c,mf)}:mf;return this._pairs.map(function(u){return d(u[0])+"="+d(u[1])},"").join("&")};function vj(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function jm(s,r,d){if(!r)return s;const c=d&&d.encode||vj,u=z.isFunction(d)?{serialize:d}:d,h=u&&u.serialize;let g;if(h?g=h(r,u):g=z.isURLSearchParams(r)?r.toString():new _d(r,u).toString(c),g){const x=s.indexOf("#");x!==-1&&(s=s.slice(0,x)),s+=(s.indexOf("?")===-1?"?":"&")+g}return s}class xf{constructor(){this.handlers=[]}use(r,d,c){return this.handlers.push({fulfilled:r,rejected:d,synchronous:c?c.synchronous:!1,runWhen:c?c.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){z.forEach(this.handlers,function(c){c!==null&&r(c)})}}const Ud={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},bj=typeof URLSearchParams<"u"?URLSearchParams:_d,jj=typeof FormData<"u"?FormData:null,wj=typeof Blob<"u"?Blob:null,Ej={isBrowser:!0,classes:{URLSearchParams:bj,FormData:jj,Blob:wj},protocols:["http","https","file","blob","url","data"]},Ld=typeof window<"u"&&typeof document<"u",yd=typeof navigator=="object"&&navigator||void 0,Sj=Ld&&(!yd||["ReactNative","NativeScript","NS"].indexOf(yd.product)<0),kj=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Nj=Ld&&window.location.href||"http://localhost",Aj=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ld,hasStandardBrowserEnv:Sj,hasStandardBrowserWebWorkerEnv:kj,navigator:yd,origin:Nj},Symbol.toStringTag,{value:"Module"})),rt={...Aj,...Ej};function Tj(s,r){return Nr(s,new rt.classes.URLSearchParams,{visitor:function(d,c,u,h){return rt.isNode&&z.isBuffer(d)?(this.append(c,d.toString("base64")),!1):h.defaultVisitor.apply(this,arguments)},...r})}function Cj(s){return z.matchAll(/\w+|\[(\w*)]/g,s).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Rj(s){const r={},d=Object.keys(s);let c;const u=d.length;let h;for(c=0;c<u;c++)h=d[c],r[h]=s[h];return r}function wm(s){function r(d,c,u,h){let g=d[h++];if(g==="__proto__")return!0;const x=Number.isFinite(+g),y=h>=d.length;return g=!g&&z.isArray(u)?u.length:g,y?(z.hasOwnProp(u,g)?u[g]=[u[g],c]:u[g]=c,!x):((!u[g]||!z.isObject(u[g]))&&(u[g]=[]),r(d,c,u[g],h)&&z.isArray(u[g])&&(u[g]=Rj(u[g])),!x)}if(z.isFormData(s)&&z.isFunction(s.entries)){const d={};return z.forEachEntry(s,(c,u)=>{r(Cj(c),u,d,0)}),d}return null}function zj(s,r,d){if(z.isString(s))try{return(r||JSON.parse)(s),z.trim(s)}catch(c){if(c.name!=="SyntaxError")throw c}return(d||JSON.stringify)(s)}const Bs={transitional:Ud,adapter:["xhr","http","fetch"],transformRequest:[function(r,d){const c=d.getContentType()||"",u=c.indexOf("application/json")>-1,h=z.isObject(r);if(h&&z.isHTMLForm(r)&&(r=new FormData(r)),z.isFormData(r))return u?JSON.stringify(wm(r)):r;if(z.isArrayBuffer(r)||z.isBuffer(r)||z.isStream(r)||z.isFile(r)||z.isBlob(r)||z.isReadableStream(r))return r;if(z.isArrayBufferView(r))return r.buffer;if(z.isURLSearchParams(r))return d.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let x;if(h){if(c.indexOf("application/x-www-form-urlencoded")>-1)return Tj(r,this.formSerializer).toString();if((x=z.isFileList(r))||c.indexOf("multipart/form-data")>-1){const y=this.env&&this.env.FormData;return Nr(x?{"files[]":r}:r,y&&new y,this.formSerializer)}}return h||u?(d.setContentType("application/json",!1),zj(r)):r}],transformResponse:[function(r){const d=this.transitional||Bs.transitional,c=d&&d.forcedJSONParsing,u=this.responseType==="json";if(z.isResponse(r)||z.isReadableStream(r))return r;if(r&&z.isString(r)&&(c&&!this.responseType||u)){const g=!(d&&d.silentJSONParsing)&&u;try{return JSON.parse(r,this.parseReviver)}catch(x){if(g)throw x.name==="SyntaxError"?ie.from(x,ie.ERR_BAD_RESPONSE,this,null,this.response):x}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rt.classes.FormData,Blob:rt.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(["delete","get","head","post","put","patch"],s=>{Bs.headers[s]={}});const Oj=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Mj=s=>{const r={};let d,c,u;return s&&s.split(`
`).forEach(function(g){u=g.indexOf(":"),d=g.substring(0,u).trim().toLowerCase(),c=g.substring(u+1).trim(),!(!d||r[d]&&Oj[d])&&(d==="set-cookie"?r[d]?r[d].push(c):r[d]=[c]:r[d]=r[d]?r[d]+", "+c:c)}),r},yf=Symbol("internals"),Dj=s=>!/[\r\n]/.test(s);function Em(s,r){if(!(s===!1||s==null)){if(z.isArray(s)){s.forEach(d=>Em(d,r));return}if(!Dj(String(s)))throw new Error(`Invalid character in header content ["${r}"]`)}}function Ns(s){return s&&String(s).trim().toLowerCase()}function qj(s){let r=s.length;for(;r>0;){const d=s.charCodeAt(r-1);if(d!==10&&d!==13)break;r-=1}return r===s.length?s:s.slice(0,r)}function hr(s){return s===!1||s==null?s:z.isArray(s)?s.map(hr):qj(String(s))}function _j(s){const r=Object.create(null),d=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let c;for(;c=d.exec(s);)r[c[1]]=c[2];return r}const Uj=s=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());function rd(s,r,d,c,u){if(z.isFunction(c))return c.call(this,r,d);if(u&&(r=d),!!z.isString(r)){if(z.isString(c))return r.indexOf(c)!==-1;if(z.isRegExp(c))return c.test(r)}}function Lj(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,d,c)=>d.toUpperCase()+c)}function Bj(s,r){const d=z.toCamelCase(" "+r);["get","set","has"].forEach(c=>{Object.defineProperty(s,c+d,{value:function(u,h,g){return this[c].call(this,r,u,h,g)},configurable:!0})})}let vt=class{constructor(r){r&&this.set(r)}set(r,d,c){const u=this;function h(x,y,m){const v=Ns(y);if(!v)throw new Error("header name must be a non-empty string");const j=z.findKey(u,v);(!j||u[j]===void 0||m===!0||m===void 0&&u[j]!==!1)&&(Em(x,y),u[j||y]=hr(x))}const g=(x,y)=>z.forEach(x,(m,v)=>h(m,v,y));if(z.isPlainObject(r)||r instanceof this.constructor)g(r,d);else if(z.isString(r)&&(r=r.trim())&&!Uj(r))g(Mj(r),d);else if(z.isObject(r)&&z.isIterable(r)){let x={},y,m;for(const v of r){if(!z.isArray(v))throw TypeError("Object iterator must return a key-value pair");x[m=v[0]]=(y=x[m])?z.isArray(y)?[...y,v[1]]:[y,v[1]]:v[1]}g(x,d)}else r!=null&&h(d,r,c);return this}get(r,d){if(r=Ns(r),r){const c=z.findKey(this,r);if(c){const u=this[c];if(!d)return u;if(d===!0)return _j(u);if(z.isFunction(d))return d.call(this,u,c);if(z.isRegExp(d))return d.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,d){if(r=Ns(r),r){const c=z.findKey(this,r);return!!(c&&this[c]!==void 0&&(!d||rd(this,this[c],c,d)))}return!1}delete(r,d){const c=this;let u=!1;function h(g){if(g=Ns(g),g){const x=z.findKey(c,g);x&&(!d||rd(c,c[x],x,d))&&(delete c[x],u=!0)}}return z.isArray(r)?r.forEach(h):h(r),u}clear(r){const d=Object.keys(this);let c=d.length,u=!1;for(;c--;){const h=d[c];(!r||rd(this,this[h],h,r,!0))&&(delete this[h],u=!0)}return u}normalize(r){const d=this,c={};return z.forEach(this,(u,h)=>{const g=z.findKey(c,h);if(g){d[g]=hr(u),delete d[h];return}const x=r?Lj(h):String(h).trim();x!==h&&delete d[h],d[x]=hr(u),c[x]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const d=Object.create(null);return z.forEach(this,(c,u)=>{c!=null&&c!==!1&&(d[u]=r&&z.isArray(c)?c.join(", "):c)}),d}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,d])=>r+": "+d).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...d){const c=new this(r);return d.forEach(u=>c.set(u)),c}static accessor(r){const c=(this[yf]=this[yf]={accessors:{}}).accessors,u=this.prototype;function h(g){const x=Ns(g);c[x]||(Bj(u,g),c[x]=!0)}return z.isArray(r)?r.forEach(h):h(r),this}};vt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);z.reduceDescriptors(vt.prototype,({value:s},r)=>{let d=r[0].toUpperCase()+r.slice(1);return{get:()=>s,set(c){this[d]=c}}});z.freezeMethods(vt);function od(s,r){const d=this||Bs,c=r||d,u=vt.from(c.headers);let h=c.data;return z.forEach(s,function(x){h=x.call(d,h,u.normalize(),r?r.status:void 0)}),u.normalize(),h}function Sm(s){return!!(s&&s.__CANCEL__)}let Hs=class extends ie{constructor(r,d,c){super(r??"canceled",ie.ERR_CANCELED,d,c),this.name="CanceledError",this.__CANCEL__=!0}};function km(s,r,d){const c=d.config.validateStatus;!d.status||!c||c(d.status)?s(d):r(new ie("Request failed with status code "+d.status,[ie.ERR_BAD_REQUEST,ie.ERR_BAD_RESPONSE][Math.floor(d.status/100)-4],d.config,d.request,d))}function Hj(s){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return r&&r[1]||""}function Gj(s,r){s=s||10;const d=new Array(s),c=new Array(s);let u=0,h=0,g;return r=r!==void 0?r:1e3,function(y){const m=Date.now(),v=c[h];g||(g=m),d[u]=y,c[u]=m;let j=h,_=0;for(;j!==u;)_+=d[j++],j=j%s;if(u=(u+1)%s,u===h&&(h=(h+1)%s),m-g<r)return;const V=v&&m-v;return V?Math.round(_*1e3/V):void 0}}function Yj(s,r){let d=0,c=1e3/r,u,h;const g=(m,v=Date.now())=>{d=v,u=null,h&&(clearTimeout(h),h=null),s(...m)};return[(...m)=>{const v=Date.now(),j=v-d;j>=c?g(m,v):(u=m,h||(h=setTimeout(()=>{h=null,g(u)},c-j)))},()=>u&&g(u)]}const yr=(s,r,d=3)=>{let c=0;const u=Gj(50,250);return Yj(h=>{const g=h.loaded,x=h.lengthComputable?h.total:void 0,y=g-c,m=u(y),v=g<=x;c=g;const j={loaded:g,total:x,progress:x?g/x:void 0,bytes:y,rate:m||void 0,estimated:m&&x&&v?(x-g)/m:void 0,event:h,lengthComputable:x!=null,[r?"download":"upload"]:!0};s(j)},d)},vf=(s,r)=>{const d=s!=null;return[c=>r[0]({lengthComputable:d,total:s,loaded:c}),r[1]]},bf=s=>(...r)=>z.asap(()=>s(...r)),Vj=rt.hasStandardBrowserEnv?((s,r)=>d=>(d=new URL(d,rt.origin),s.protocol===d.protocol&&s.host===d.host&&(r||s.port===d.port)))(new URL(rt.origin),rt.navigator&&/(msie|trident)/i.test(rt.navigator.userAgent)):()=>!0,Xj=rt.hasStandardBrowserEnv?{write(s,r,d,c,u,h,g){if(typeof document>"u")return;const x=[`${s}=${encodeURIComponent(r)}`];z.isNumber(d)&&x.push(`expires=${new Date(d).toUTCString()}`),z.isString(c)&&x.push(`path=${c}`),z.isString(u)&&x.push(`domain=${u}`),h===!0&&x.push("secure"),z.isString(g)&&x.push(`SameSite=${g}`),document.cookie=x.join("; ")},read(s){if(typeof document>"u")return null;const r=document.cookie.match(new RegExp("(?:^|; )"+s+"=([^;]*)"));return r?decodeURIComponent(r[1]):null},remove(s){this.write(s,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Ij(s){return typeof s!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function Wj(s,r){return r?s.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):s}function Nm(s,r,d){let c=!Ij(r);return s&&(c||d==!1)?Wj(s,r):r}const jf=s=>s instanceof vt?{...s}:s;function Ai(s,r){r=r||{};const d={};function c(m,v,j,_){return z.isPlainObject(m)&&z.isPlainObject(v)?z.merge.call({caseless:_},m,v):z.isPlainObject(v)?z.merge({},v):z.isArray(v)?v.slice():v}function u(m,v,j,_){if(z.isUndefined(v)){if(!z.isUndefined(m))return c(void 0,m,j,_)}else return c(m,v,j,_)}function h(m,v){if(!z.isUndefined(v))return c(void 0,v)}function g(m,v){if(z.isUndefined(v)){if(!z.isUndefined(m))return c(void 0,m)}else return c(void 0,v)}function x(m,v,j){if(j in r)return c(m,v);if(j in s)return c(void 0,m)}const y={url:h,method:h,data:h,baseURL:g,transformRequest:g,transformResponse:g,paramsSerializer:g,timeout:g,timeoutMessage:g,withCredentials:g,withXSRFToken:g,adapter:g,responseType:g,xsrfCookieName:g,xsrfHeaderName:g,onUploadProgress:g,onDownloadProgress:g,decompress:g,maxContentLength:g,maxBodyLength:g,beforeRedirect:g,transport:g,httpAgent:g,httpsAgent:g,cancelToken:g,socketPath:g,responseEncoding:g,validateStatus:x,headers:(m,v,j)=>u(jf(m),jf(v),j,!0)};return z.forEach(Object.keys({...s,...r}),function(v){if(v==="__proto__"||v==="constructor"||v==="prototype")return;const j=z.hasOwnProp(y,v)?y[v]:u,_=j(s[v],r[v],v);z.isUndefined(_)&&j!==x||(d[v]=_)}),d}const Am=s=>{const r=Ai({},s);let{data:d,withXSRFToken:c,xsrfHeaderName:u,xsrfCookieName:h,headers:g,auth:x}=r;if(r.headers=g=vt.from(g),r.url=jm(Nm(r.baseURL,r.url,r.allowAbsoluteUrls),s.params,s.paramsSerializer),x&&g.set("Authorization","Basic "+btoa((x.username||"")+":"+(x.password?unescape(encodeURIComponent(x.password)):""))),z.isFormData(d)){if(rt.hasStandardBrowserEnv||rt.hasStandardBrowserWebWorkerEnv)g.setContentType(void 0);else if(z.isFunction(d.getHeaders)){const y=d.getHeaders(),m=["content-type","content-length"];Object.entries(y).forEach(([v,j])=>{m.includes(v.toLowerCase())&&g.set(v,j)})}}if(rt.hasStandardBrowserEnv&&(c&&z.isFunction(c)&&(c=c(r)),c||c!==!1&&Vj(r.url))){const y=u&&h&&Xj.read(h);y&&g.set(u,y)}return r},Qj=typeof XMLHttpRequest<"u",Kj=Qj&&function(s){return new Promise(function(d,c){const u=Am(s);let h=u.data;const g=vt.from(u.headers).normalize();let{responseType:x,onUploadProgress:y,onDownloadProgress:m}=u,v,j,_,V,N;function q(){V&&V(),N&&N(),u.cancelToken&&u.cancelToken.unsubscribe(v),u.signal&&u.signal.removeEventListener("abort",v)}let R=new XMLHttpRequest;R.open(u.method.toUpperCase(),u.url,!0),R.timeout=u.timeout;function G(){if(!R)return;const O=vt.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),ee={data:!x||x==="text"||x==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:O,config:s,request:R};km(function(K){d(K),q()},function(K){c(K),q()},ee),R=null}"onloadend"in R?R.onloadend=G:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.indexOf("file:")===0)||setTimeout(G)},R.onabort=function(){R&&(c(new ie("Request aborted",ie.ECONNABORTED,s,R)),R=null)},R.onerror=function(J){const ee=J&&J.message?J.message:"Network Error",oe=new ie(ee,ie.ERR_NETWORK,s,R);oe.event=J||null,c(oe),R=null},R.ontimeout=function(){let J=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const ee=u.transitional||Ud;u.timeoutErrorMessage&&(J=u.timeoutErrorMessage),c(new ie(J,ee.clarifyTimeoutError?ie.ETIMEDOUT:ie.ECONNABORTED,s,R)),R=null},h===void 0&&g.setContentType(null),"setRequestHeader"in R&&z.forEach(g.toJSON(),function(J,ee){R.setRequestHeader(ee,J)}),z.isUndefined(u.withCredentials)||(R.withCredentials=!!u.withCredentials),x&&x!=="json"&&(R.responseType=u.responseType),m&&([_,N]=yr(m,!0),R.addEventListener("progress",_)),y&&R.upload&&([j,V]=yr(y),R.upload.addEventListener("progress",j),R.upload.addEventListener("loadend",V)),(u.cancelToken||u.signal)&&(v=O=>{R&&(c(!O||O.type?new Hs(null,s,R):O),R.abort(),R=null)},u.cancelToken&&u.cancelToken.subscribe(v),u.signal&&(u.signal.aborted?v():u.signal.addEventListener("abort",v)));const W=Hj(u.url);if(W&&rt.protocols.indexOf(W)===-1){c(new ie("Unsupported protocol "+W+":",ie.ERR_BAD_REQUEST,s));return}R.send(h||null)})},Zj=(s,r)=>{const{length:d}=s=s?s.filter(Boolean):[];if(r||d){let c=new AbortController,u;const h=function(m){if(!u){u=!0,x();const v=m instanceof Error?m:this.reason;c.abort(v instanceof ie?v:new Hs(v instanceof Error?v.message:v))}};let g=r&&setTimeout(()=>{g=null,h(new ie(`timeout of ${r}ms exceeded`,ie.ETIMEDOUT))},r);const x=()=>{s&&(g&&clearTimeout(g),g=null,s.forEach(m=>{m.unsubscribe?m.unsubscribe(h):m.removeEventListener("abort",h)}),s=null)};s.forEach(m=>m.addEventListener("abort",h));const{signal:y}=c;return y.unsubscribe=()=>z.asap(x),y}},Jj=function*(s,r){let d=s.byteLength;if(d<r){yield s;return}let c=0,u;for(;c<d;)u=c+r,yield s.slice(c,u),c=u},$j=async function*(s,r){for await(const d of Pj(s))yield*Jj(d,r)},Pj=async function*(s){if(s[Symbol.asyncIterator]){yield*s;return}const r=s.getReader();try{for(;;){const{done:d,value:c}=await r.read();if(d)break;yield c}}finally{await r.cancel()}},wf=(s,r,d,c)=>{const u=$j(s,r);let h=0,g,x=y=>{g||(g=!0,c&&c(y))};return new ReadableStream({async pull(y){try{const{done:m,value:v}=await u.next();if(m){x(),y.close();return}let j=v.byteLength;if(d){let _=h+=j;d(_)}y.enqueue(new Uint8Array(v))}catch(m){throw x(m),m}},cancel(y){return x(y),u.return()}},{highWaterMark:2})},Ef=64*1024,{isFunction:rr}=z,Fj=(({Request:s,Response:r})=>({Request:s,Response:r}))(z.global),{ReadableStream:Sf,TextEncoder:kf}=z.global,Nf=(s,...r)=>{try{return!!s(...r)}catch{return!1}},ew=s=>{s=z.merge.call({skipUndefined:!0},Fj,s);const{fetch:r,Request:d,Response:c}=s,u=r?rr(r):typeof fetch=="function",h=rr(d),g=rr(c);if(!u)return!1;const x=u&&rr(Sf),y=u&&(typeof kf=="function"?(N=>q=>N.encode(q))(new kf):async N=>new Uint8Array(await new d(N).arrayBuffer())),m=h&&x&&Nf(()=>{let N=!1;const q=new Sf,R=new d(rt.origin,{body:q,method:"POST",get duplex(){return N=!0,"half"}}).headers.has("Content-Type");return q.cancel(),N&&!R}),v=g&&x&&Nf(()=>z.isReadableStream(new c("").body)),j={stream:v&&(N=>N.body)};u&&["text","arrayBuffer","blob","formData","stream"].forEach(N=>{!j[N]&&(j[N]=(q,R)=>{let G=q&&q[N];if(G)return G.call(q);throw new ie(`Response type '${N}' is not supported`,ie.ERR_NOT_SUPPORT,R)})});const _=async N=>{if(N==null)return 0;if(z.isBlob(N))return N.size;if(z.isSpecCompliantForm(N))return(await new d(rt.origin,{method:"POST",body:N}).arrayBuffer()).byteLength;if(z.isArrayBufferView(N)||z.isArrayBuffer(N))return N.byteLength;if(z.isURLSearchParams(N)&&(N=N+""),z.isString(N))return(await y(N)).byteLength},V=async(N,q)=>{const R=z.toFiniteNumber(N.getContentLength());return R??_(q)};return async N=>{let{url:q,method:R,data:G,signal:W,cancelToken:O,timeout:J,onDownloadProgress:ee,onUploadProgress:oe,responseType:K,headers:Y,withCredentials:ae="same-origin",fetchOptions:Ue}=Am(N),Le=r||fetch;K=K?(K+"").toLowerCase():"text";let Be=Zj([W,O&&O.toAbortSignal()],J),st=null;const Xe=Be&&Be.unsubscribe&&(()=>{Be.unsubscribe()});let Me;try{if(oe&&m&&R!=="get"&&R!=="head"&&(Me=await V(Y,G))!==0){let w=new d(q,{method:"POST",body:G,duplex:"half"}),B;if(z.isFormData(G)&&(B=w.headers.get("content-type"))&&Y.setContentType(B),w.body){const[I,Q]=vf(Me,yr(bf(oe)));G=wf(w.body,Ef,I,Q)}}z.isString(ae)||(ae=ae?"include":"omit");const D=h&&"credentials"in d.prototype,X={...Ue,signal:Be,method:R.toUpperCase(),headers:Y.normalize().toJSON(),body:G,duplex:"half",credentials:D?ae:void 0};st=h&&new d(q,X);let F=await(h?Le(st,Ue):Le(q,X));const ve=v&&(K==="stream"||K==="response");if(v&&(ee||ve&&Xe)){const w={};["status","statusText","headers"].forEach(se=>{w[se]=F[se]});const B=z.toFiniteNumber(F.headers.get("content-length")),[I,Q]=ee&&vf(B,yr(bf(ee),!0))||[];F=new c(wf(F.body,Ef,I,()=>{Q&&Q(),Xe&&Xe()}),w)}K=K||"text";let we=await j[z.findKey(j,K)||"text"](F,N);return!ve&&Xe&&Xe(),await new Promise((w,B)=>{km(w,B,{data:we,headers:vt.from(F.headers),status:F.status,statusText:F.statusText,config:N,request:st})})}catch(D){throw Xe&&Xe(),D&&D.name==="TypeError"&&/Load failed|fetch/i.test(D.message)?Object.assign(new ie("Network Error",ie.ERR_NETWORK,N,st,D&&D.response),{cause:D.cause||D}):ie.from(D,D&&D.code,N,st,D&&D.response)}}},tw=new Map,Tm=s=>{let r=s&&s.env||{};const{fetch:d,Request:c,Response:u}=r,h=[c,u,d];let g=h.length,x=g,y,m,v=tw;for(;x--;)y=h[x],m=v.get(y),m===void 0&&v.set(y,m=x?new Map:ew(r)),v=m;return m};Tm();const Bd={http:mj,xhr:Kj,fetch:{get:Tm}};z.forEach(Bd,(s,r)=>{if(s){try{Object.defineProperty(s,"name",{value:r})}catch{}Object.defineProperty(s,"adapterName",{value:r})}});const Af=s=>`- ${s}`,nw=s=>z.isFunction(s)||s===null||s===!1;function iw(s,r){s=z.isArray(s)?s:[s];const{length:d}=s;let c,u;const h={};for(let g=0;g<d;g++){c=s[g];let x;if(u=c,!nw(c)&&(u=Bd[(x=String(c)).toLowerCase()],u===void 0))throw new ie(`Unknown adapter '${x}'`);if(u&&(z.isFunction(u)||(u=u.get(r))))break;h[x||"#"+g]=u}if(!u){const g=Object.entries(h).map(([y,m])=>`adapter ${y} `+(m===!1?"is not supported by the environment":"is not available in the build"));let x=d?g.length>1?`since :
`+g.map(Af).join(`
`):" "+Af(g[0]):"as no adapter specified";throw new ie("There is no suitable adapter to dispatch the request "+x,"ERR_NOT_SUPPORT")}return u}const Cm={getAdapter:iw,adapters:Bd};function cd(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new Hs(null,s)}function Tf(s){return cd(s),s.headers=vt.from(s.headers),s.data=od.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),Cm.getAdapter(s.adapter||Bs.adapter,s)(s).then(function(c){return cd(s),c.data=od.call(s,s.transformResponse,c),c.headers=vt.from(c.headers),c},function(c){return Sm(c)||(cd(s),c&&c.response&&(c.response.data=od.call(s,s.transformResponse,c.response),c.response.headers=vt.from(c.response.headers))),Promise.reject(c)})}const Rm="1.15.0",Ar={};["object","boolean","number","function","string","symbol"].forEach((s,r)=>{Ar[s]=function(c){return typeof c===s||"a"+(r<1?"n ":" ")+s}});const Cf={};Ar.transitional=function(r,d,c){function u(h,g){return"[Axios v"+Rm+"] Transitional option '"+h+"'"+g+(c?". "+c:"")}return(h,g,x)=>{if(r===!1)throw new ie(u(g," has been removed"+(d?" in "+d:"")),ie.ERR_DEPRECATED);return d&&!Cf[g]&&(Cf[g]=!0,console.warn(u(g," has been deprecated since v"+d+" and will be removed in the near future"))),r?r(h,g,x):!0}};Ar.spelling=function(r){return(d,c)=>(console.warn(`${c} is likely a misspelling of ${r}`),!0)};function aw(s,r,d){if(typeof s!="object")throw new ie("options must be an object",ie.ERR_BAD_OPTION_VALUE);const c=Object.keys(s);let u=c.length;for(;u-- >0;){const h=c[u],g=r[h];if(g){const x=s[h],y=x===void 0||g(x,h,s);if(y!==!0)throw new ie("option "+h+" must be "+y,ie.ERR_BAD_OPTION_VALUE);continue}if(d!==!0)throw new ie("Unknown option "+h,ie.ERR_BAD_OPTION)}}const gr={assertOptions:aw,validators:Ar},Vt=gr.validators;let Ni=class{constructor(r){this.defaults=r||{},this.interceptors={request:new xf,response:new xf}}async request(r,d){try{return await this._request(r,d)}catch(c){if(c instanceof Error){let u={};Error.captureStackTrace?Error.captureStackTrace(u):u=new Error;const h=(()=>{if(!u.stack)return"";const g=u.stack.indexOf(`
`);return g===-1?"":u.stack.slice(g+1)})();try{if(!c.stack)c.stack=h;else if(h){const g=h.indexOf(`
`),x=g===-1?-1:h.indexOf(`
`,g+1),y=x===-1?"":h.slice(x+1);String(c.stack).endsWith(y)||(c.stack+=`
`+h)}}catch{}}throw c}}_request(r,d){typeof r=="string"?(d=d||{},d.url=r):d=r||{},d=Ai(this.defaults,d);const{transitional:c,paramsSerializer:u,headers:h}=d;c!==void 0&&gr.assertOptions(c,{silentJSONParsing:Vt.transitional(Vt.boolean),forcedJSONParsing:Vt.transitional(Vt.boolean),clarifyTimeoutError:Vt.transitional(Vt.boolean),legacyInterceptorReqResOrdering:Vt.transitional(Vt.boolean)},!1),u!=null&&(z.isFunction(u)?d.paramsSerializer={serialize:u}:gr.assertOptions(u,{encode:Vt.function,serialize:Vt.function},!0)),d.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?d.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:d.allowAbsoluteUrls=!0),gr.assertOptions(d,{baseUrl:Vt.spelling("baseURL"),withXsrfToken:Vt.spelling("withXSRFToken")},!0),d.method=(d.method||this.defaults.method||"get").toLowerCase();let g=h&&z.merge(h.common,h[d.method]);h&&z.forEach(["delete","get","head","post","put","patch","common"],N=>{delete h[N]}),d.headers=vt.concat(g,h);const x=[];let y=!0;this.interceptors.request.forEach(function(q){if(typeof q.runWhen=="function"&&q.runWhen(d)===!1)return;y=y&&q.synchronous;const R=d.transitional||Ud;R&&R.legacyInterceptorReqResOrdering?x.unshift(q.fulfilled,q.rejected):x.push(q.fulfilled,q.rejected)});const m=[];this.interceptors.response.forEach(function(q){m.push(q.fulfilled,q.rejected)});let v,j=0,_;if(!y){const N=[Tf.bind(this),void 0];for(N.unshift(...x),N.push(...m),_=N.length,v=Promise.resolve(d);j<_;)v=v.then(N[j++],N[j++]);return v}_=x.length;let V=d;for(;j<_;){const N=x[j++],q=x[j++];try{V=N(V)}catch(R){q.call(this,R);break}}try{v=Tf.call(this,V)}catch(N){return Promise.reject(N)}for(j=0,_=m.length;j<_;)v=v.then(m[j++],m[j++]);return v}getUri(r){r=Ai(this.defaults,r);const d=Nm(r.baseURL,r.url,r.allowAbsoluteUrls);return jm(d,r.params,r.paramsSerializer)}};z.forEach(["delete","get","head","options"],function(r){Ni.prototype[r]=function(d,c){return this.request(Ai(c||{},{method:r,url:d,data:(c||{}).data}))}});z.forEach(["post","put","patch"],function(r){function d(c){return function(h,g,x){return this.request(Ai(x||{},{method:r,headers:c?{"Content-Type":"multipart/form-data"}:{},url:h,data:g}))}}Ni.prototype[r]=d(),Ni.prototype[r+"Form"]=d(!0)});let sw=class zm{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let d;this.promise=new Promise(function(h){d=h});const c=this;this.promise.then(u=>{if(!c._listeners)return;let h=c._listeners.length;for(;h-- >0;)c._listeners[h](u);c._listeners=null}),this.promise.then=u=>{let h;const g=new Promise(x=>{c.subscribe(x),h=x}).then(u);return g.cancel=function(){c.unsubscribe(h)},g},r(function(h,g,x){c.reason||(c.reason=new Hs(h,g,x),d(c.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const d=this._listeners.indexOf(r);d!==-1&&this._listeners.splice(d,1)}toAbortSignal(){const r=new AbortController,d=c=>{r.abort(c)};return this.subscribe(d),r.signal.unsubscribe=()=>this.unsubscribe(d),r.signal}static source(){let r;return{token:new zm(function(u){r=u}),cancel:r}}};function lw(s){return function(d){return s.apply(null,d)}}function rw(s){return z.isObject(s)&&s.isAxiosError===!0}const vd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(vd).forEach(([s,r])=>{vd[r]=s});function Om(s){const r=new Ni(s),d=dm(Ni.prototype.request,r);return z.extend(d,Ni.prototype,r,{allOwnKeys:!0}),z.extend(d,r,null,{allOwnKeys:!0}),d.create=function(u){return Om(Ai(s,u))},d}const Ve=Om(Bs);Ve.Axios=Ni;Ve.CanceledError=Hs;Ve.CancelToken=sw;Ve.isCancel=Sm;Ve.VERSION=Rm;Ve.toFormData=Nr;Ve.AxiosError=ie;Ve.Cancel=Ve.CanceledError;Ve.all=function(r){return Promise.all(r)};Ve.spread=lw;Ve.isAxiosError=rw;Ve.mergeConfig=Ai;Ve.AxiosHeaders=vt;Ve.formToJSON=s=>wm(z.isHTMLForm(s)?new FormData(s):s);Ve.getAdapter=Cm.getAdapter;Ve.HttpStatusCode=vd;Ve.default=Ve;const{Axios:Nw,AxiosError:Aw,CanceledError:Tw,isCancel:Cw,CancelToken:Rw,VERSION:zw,all:Ow,Cancel:Mw,isAxiosError:Dw,spread:qw,toFormData:_w,AxiosHeaders:Uw,HttpStatusCode:Lw,formToJSON:Bw,getAdapter:Hw,mergeConfig:Gw}=Ve,bd=Ve.create({baseURL:"https://api.engix.world/api",headers:{"Content-Type":"application/json"},timeout:3e4}),Rf={inquiryType:"",firstName:"",lastName:"",email:"",phone:"",company:"",role:"",country:"",service:"",budget:"",timeline:"",message:"",consent:!1};function ow(){const s=Qt(),[r,d]=k.useState(Rf),[c,u]=k.useState(!1),[h,g]=k.useState({type:"",message:""}),x=m=>{const{name:v,value:j,type:_,checked:V}=m.target;d(N=>({...N,[v]:_==="checkbox"?V:j}))},y=async m=>{var v,j,_,V,N,q,R,G,W;if(m.preventDefault(),!c){if(g({type:"",message:""}),!r.consent){g({type:"error",message:"Please confirm that Engix may use your information to respond to this enquiry."});return}if(!r.firstName||!r.lastName||!r.email||!r.company||!r.country||!r.inquiryType||!r.message){g({type:"error",message:"Please complete all required fields before submitting your enquiry."});return}u(!0);try{const J={name:`${r.firstName} ${r.lastName}`.trim(),firstName:r.firstName,lastName:r.lastName,email:r.email,phone:r.phone,company:r.company,role:r.role,country:r.country,inquiryType:r.inquiryType,service:r.service||r.inquiryType,budget:r.budget,timeline:r.timeline,message:r.message,source:s.pathname==="/solutions"?"Solutions Landing Page":"Contact Page",page:s.pathname};console.log("Submitting Engix enquiry:",J),console.log("API Base URL:",bd.defaults.baseURL);const ee=await bd.post("/leads",J);console.log("Engix enquiry response:",ee.data),g({type:"success",message:((v=ee==null?void 0:ee.data)==null?void 0:v.message)||"Thank you. Your enquiry has been sent successfully."}),typeof window<"u"&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"generate_lead",service:r.service||r.inquiryType,lead_source:s.pathname==="/solutions"?"solutions_landing_page":"contact_page"})),d(Rf)}catch(O){console.error("ENGIX FORM SUBMISSION ERROR:",O),console.error("Error message:",O==null?void 0:O.message),console.error("Backend status:",(j=O==null?void 0:O.response)==null?void 0:j.status),console.error("Backend response:",(_=O==null?void 0:O.response)==null?void 0:_.data),console.error("Request base URL:",(V=O==null?void 0:O.config)==null?void 0:V.baseURL),console.error("Request path:",(N=O==null?void 0:O.config)==null?void 0:N.url),console.error("Full request URL:",`${((q=O==null?void 0:O.config)==null?void 0:q.baseURL)||""}${((R=O==null?void 0:O.config)==null?void 0:R.url)||""}`);let J="We could not send your enquiry. Please try again or contact us by email.";(W=(G=O==null?void 0:O.response)==null?void 0:G.data)!=null&&W.message?J=O.response.data.message:(O==null?void 0:O.code)==="ERR_NETWORK"?J="The Engix server could not be reached. Please make sure the backend is running and try again.":O!=null&&O.message&&(J=O.message),g({type:"error",message:J})}finally{u(!1)}}};return i.jsxs(i.Fragment,{children:[i.jsxs("form",{className:"engix-enterprise-form",onSubmit:y,children:[i.jsxs("div",{className:"engix-form-section-heading",children:[i.jsx("span",{children:"01"}),i.jsxs("div",{children:[i.jsx("h3",{children:"Your enquiry"}),i.jsx("p",{children:"Tell us what you would like to discuss with Engix."})]})]}),i.jsxs("div",{className:"engix-form-field",children:[i.jsx("label",{htmlFor:"inquiryType",children:"Inquiry type *"}),i.jsxs("select",{id:"inquiryType",name:"inquiryType",value:r.inquiryType,onChange:x,required:!0,children:[i.jsx("option",{value:"",children:"Select an option"}),i.jsx("option",{value:"New Project",children:"New project / business opportunity"}),i.jsx("option",{value:"Existing Client",children:"Existing client support"}),i.jsx("option",{value:"Partnership",children:"Technology partnership"}),i.jsx("option",{value:"Careers",children:"Careers & opportunities"}),i.jsx("option",{value:"Vendor",children:"Vendor / service provider"}),i.jsx("option",{value:"General",children:"General enquiry"})]})]}),i.jsxs("div",{className:"engix-form-field",children:[i.jsx("label",{htmlFor:"service",children:"Service or capability"}),i.jsxs("select",{id:"service",name:"service",value:r.service,onChange:x,children:[i.jsx("option",{value:"",children:"Select a service"}),i.jsx("option",{value:"AI Solutions & Automation",children:"AI Solutions & Automation"}),i.jsx("option",{value:"Custom Software Development",children:"Custom Software Development"}),i.jsx("option",{value:"Enterprise CRM & ERP",children:"Enterprise CRM & ERP Solutions"}),i.jsx("option",{value:"Web Application Development",children:"Web Application Development"}),i.jsx("option",{value:"Mobile App Development",children:"Mobile App Development"}),i.jsx("option",{value:"Corporate Website Development",children:"Corporate Website Development"}),i.jsx("option",{value:"UI/UX Design",children:"UI/UX Design"}),i.jsx("option",{value:"Backend & API Development",children:"Backend & API Development"}),i.jsx("option",{value:"Database Engineering",children:"Database Engineering"}),i.jsx("option",{value:"API Integration",children:"API Integration Services"}),i.jsx("option",{value:"Cloud & DevOps",children:"Cloud & DevOps Solutions"}),i.jsx("option",{value:"Business Automation",children:"Business Automation"}),i.jsx("option",{value:"Maintenance & Support",children:"Application Maintenance & Support"}),i.jsx("option",{value:"Digital Transformation",children:"Digital Transformation"}),i.jsx("option",{value:"Other",children:"Other"})]})]}),i.jsxs("div",{className:"engix-form-section-heading engix-form-heading-gap",children:[i.jsx("span",{children:"02"}),i.jsxs("div",{children:[i.jsx("h3",{children:"About you"}),i.jsx("p",{children:"Your details help us route the enquiry to the right person."})]})]}),i.jsxs("div",{className:"engix-form-two",children:[i.jsxs("div",{className:"engix-form-field",children:[i.jsx("label",{htmlFor:"firstName",children:"First name *"}),i.jsx("input",{id:"firstName",type:"text",name:"firstName",value:r.firstName,onChange:x,autoComplete:"given-name",required:!0})]}),i.jsxs("div",{className:"engix-form-field",children:[i.jsx("label",{htmlFor:"lastName",children:"Last name *"}),i.jsx("input",{id:"lastName",type:"text",name:"lastName",value:r.lastName,onChange:x,autoComplete:"family-name",required:!0})]})]}),i.jsxs("div",{className:"engix-form-two",children:[i.jsxs("div",{className:"engix-form-field",children:[i.jsx("label",{htmlFor:"email",children:"Business email *"}),i.jsx("input",{id:"email",type:"email",name:"email",value:r.email,onChange:x,autoComplete:"email",placeholder:"you@company.com",required:!0})]}),i.jsxs("div",{className:"engix-form-field",children:[i.jsx("label",{htmlFor:"phone",children:"Phone number"}),i.jsx("input",{id:"phone",type:"tel",name:"phone",value:r.phone,onChange:x,placeholder:"+91 98765 43210",autoComplete:"tel"})]})]}),i.jsxs("div",{className:"engix-form-two",children:[i.jsxs("div",{className:"engix-form-field",children:[i.jsx("label",{htmlFor:"company",children:"Company / organization *"}),i.jsx("input",{id:"company",type:"text",name:"company",value:r.company,onChange:x,autoComplete:"organization",placeholder:"Company name",required:!0})]}),i.jsxs("div",{className:"engix-form-field",children:[i.jsx("label",{htmlFor:"role",children:"Your role / function"}),i.jsx("input",{id:"role",type:"text",name:"role",value:r.role,onChange:x,autoComplete:"organization-title",placeholder:"Founder, CTO, Manager..."})]})]}),i.jsxs("div",{className:"engix-form-field",children:[i.jsx("label",{htmlFor:"country",children:"Country / region *"}),i.jsxs("select",{id:"country",name:"country",value:r.country,onChange:x,required:!0,children:[i.jsx("option",{value:"",children:"Select country / region"}),i.jsx("option",{value:"India",children:"India"}),i.jsx("option",{value:"United Kingdom",children:"United Kingdom"}),i.jsx("option",{value:"United States",children:"United States"}),i.jsx("option",{value:"Canada",children:"Canada"}),i.jsx("option",{value:"United Arab Emirates",children:"United Arab Emirates"}),i.jsx("option",{value:"Singapore",children:"Singapore"}),i.jsx("option",{value:"Australia",children:"Australia"}),i.jsx("option",{value:"Germany",children:"Germany"}),i.jsx("option",{value:"France",children:"France"}),i.jsx("option",{value:"Other",children:"Other"})]})]}),i.jsxs("div",{className:"engix-form-section-heading engix-form-heading-gap",children:[i.jsx("span",{children:"03"}),i.jsxs("div",{children:[i.jsx("h3",{children:"Your message"}),i.jsx("p",{children:"Share the challenge, requirement or opportunity you would like to discuss."})]})]}),i.jsxs("div",{className:"engix-form-field",children:[i.jsx("label",{htmlFor:"message",children:"How can we help you? *"}),i.jsx("textarea",{id:"message",name:"message",rows:"8",maxLength:"5000",value:r.message,onChange:x,placeholder:"Tell us about your project, business challenge, goals, timeline or existing technology...",required:!0}),i.jsxs("small",{className:"engix-character-count",children:[r.message.length," / 5000"]})]}),i.jsxs("label",{className:"engix-consent",children:[i.jsx("input",{type:"checkbox",name:"consent",checked:r.consent,onChange:x}),i.jsx("span",{className:"engix-custom-checkbox",children:r.consent&&i.jsx(As,{size:14})}),i.jsx("p",{children:"I agree that Engix Tech Private Limited may use the information submitted in this form for the purpose of responding to my enquiry and related business communication."})]}),h.message&&i.jsxs("div",{className:`engix-form-status ${h.type}`,role:"status",children:[h.type==="success"?i.jsx($e,{size:20}):i.jsx(nm,{size:20}),i.jsx("span",{children:h.message})]}),i.jsx("button",{type:"submit",className:"engix-enterprise-submit",disabled:c,children:c?i.jsxs(i.Fragment,{children:[i.jsx(am,{size:19,className:"engix-form-loader"}),"Sending enquiry..."]}):i.jsxs(i.Fragment,{children:["Submit enquiry",i.jsx(ln,{size:19})]})})]}),i.jsx("style",{children:`

        .engix-enterprise-form {
          width: 100%;
        }

        .engix-form-section-heading {
          display: grid;

          grid-template-columns:
            40px 1fr;

          gap: 14px;

          padding-bottom: 22px;

          border-bottom:
            1px solid rgba(17,19,24,.12);
        }

        .engix-form-heading-gap {
          margin-top: 55px;
        }

        .engix-form-section-heading > span {
          color: #625b96;

          font-size: 12px;

          font-weight: 800;
        }

        .engix-form-section-heading h3 {
          margin: 0;

          color: #111318;

          font-size: 25px;

          letter-spacing: -.035em;
        }

        .engix-form-section-heading p {
          margin: 7px 0 0;

          color: #71727a;

          font-size: 12px;

          line-height: 1.6;
        }

        .engix-form-two {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 18px;
        }

        .engix-form-field {
          position: relative;

          margin-top: 26px;
        }

        .engix-form-field label {
          display: block;

          margin-bottom: 9px;

          color: #33343a;

          font-size: 12px;

          font-weight: 700;
        }

        .engix-form-field input,
        .engix-form-field select,
        .engix-form-field textarea {
          width: 100%;

          box-sizing: border-box;

          border: 0;

          border-bottom:
            1px solid #b7b7bd;

          border-radius: 0;

          outline: 0;

          background: transparent;

          color: #111318;

          font-family: inherit;

          padding:
            12px 0 14px;

          font-size: 15px;

          line-height: 1.5;

          transition:
            border-color .2s ease,
            box-shadow .2s ease;
        }

        .engix-form-field select {
          cursor: pointer;

          appearance: auto;
        }

        .engix-form-field textarea {
          min-height: 170px;

          resize: vertical;

          border:
            1px solid #c6c6cb;

          padding: 15px;

          margin-top: 2px;
        }

        .engix-form-field input:focus,
        .engix-form-field select:focus {
          border-bottom-color:
            #111318;
        }

        .engix-form-field textarea:focus {
          border-color:
            #111318;

          box-shadow:
            0 0 0 3px rgba(17,19,24,.04);
        }

        .engix-character-count {
          display: block;

          margin-top: 7px;

          color: #85858b;

          font-size: 10px;

          text-align: right;
        }


        /* CONSENT */

        .engix-consent {
          margin-top: 30px;

          display: grid;

          grid-template-columns:
            23px 1fr;

          gap: 12px;

          align-items: start;

          cursor: pointer;
        }

        .engix-consent > input {
          position: absolute;

          opacity: 0;

          pointer-events: none;
        }

        .engix-custom-checkbox {
          width: 21px;

          height: 21px;

          display: grid;

          place-items: center;

          border:
            1px solid #888891;

          background: white;

          color: white;
        }

        .engix-consent
        input:checked
        + .engix-custom-checkbox {
          background: #111318;

          border-color: #111318;
        }

        .engix-consent p {
          margin: 0;

          color: #6e6e75;

          font-size: 11px;

          line-height: 1.65;
        }


        /* STATUS */

        .engix-form-status {
          margin-top: 24px;

          padding: 15px 17px;

          display: flex;

          align-items: flex-start;

          gap: 9px;

          font-size: 12px;

          line-height: 1.6;
        }

        .engix-form-status svg {
          flex-shrink: 0;

          margin-top: 1px;
        }

        .engix-form-status.success {
          background: #dff5df;

          color: #234526;

          border:
            1px solid #bcdcbc;
        }

        .engix-form-status.error {
          background: #f4dfd2;

          color: #693726;

          border:
            1px solid #e3c0aa;
        }


        /* SUBMIT */

        .engix-enterprise-submit {
          min-height: 56px;

          margin-top: 32px;

          padding: 0 23px;

          border: 0;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 11px;

          background: #111318;

          color: white;

          font-family: inherit;

          font-size: 14px;

          font-weight: 750;

          cursor: pointer;

          transition:
            background .2s ease,
            transform .2s ease;
        }

        .engix-enterprise-submit:hover:not(:disabled) {
          background: #2b2b30;

          transform:
            translateY(-2px);
        }

        .engix-enterprise-submit:disabled {
          opacity: .6;

          cursor: not-allowed;
        }

        .engix-form-loader {
          animation:
            engix-form-spin .8s linear infinite;
        }

        @keyframes engix-form-spin {
          to {
            transform:
              rotate(360deg);
          }
        }


        /* MOBILE */

        @media (max-width: 650px) {

          .engix-form-two {
            grid-template-columns: 1fr;

            gap: 0;
          }

          .engix-form-heading-gap {
            margin-top: 45px;
          }

          .engix-enterprise-submit {
            width: 100%;

            justify-content: center;
          }

        }

      `})]})}const cw=[{city:"Varanasi",country:"India",address:"552 Sahityanaka Mod, Ramnagar, Varanasi",tone:"mint"},{city:"Las Vegas",country:"United States",address:"4617 Calderwood St, Las Vegas, NV 89103, USA",tone:"lavender"},{city:"Austin",country:"United States",address:"223 TX-343 Loop, Austin, TX 78701, USA",tone:"yellow"},{city:"Calgary",country:"Canada",address:"618-640 5 Ave SW, Calgary, AB, Canada",tone:"peach"}];function dw(){Ft("Contact");const s=[{number:"01",icon:em,title:"Start a new project",description:"Planning a new website, software platform, mobile application, AI product or digital marketing initiative? Tell us what you are trying to achieve.",action:"Discuss your project",tone:"lavender"},{number:"02",icon:O0,title:"Existing client support",description:"Already working with Engix? Connect with us for product improvements, maintenance, technical support or the next phase of your engagement.",action:"Contact our team",tone:"mint"},{number:"03",icon:lf,title:"Technology partnership",description:"We collaborate with technology businesses, consultants, agencies and delivery partners where our engineering capabilities can create shared value.",action:"Explore partnership",tone:"yellow"},{number:"04",icon:dt,title:"General business enquiry",description:"For corporate enquiries, collaboration opportunities or anything that does not fit the categories above, send us a message.",action:"Send an enquiry",tone:"peach"}],r=["Custom software and digital product development","AI-powered applications and workflow automation","Web and mobile application engineering","Corporate and technology website development","UI/UX and product experience design","Backend, APIs, cloud and DevOps engineering","SEO, paid advertising and digital marketing strategy"];return i.jsxs(i.Fragment,{children:[i.jsxs("main",{className:"engix-contact-page",children:[i.jsx("section",{className:"engix-contact-hero",children:i.jsx("div",{className:"engix-contact-shell",children:i.jsxs("div",{className:"engix-contact-hero-grid",children:[i.jsxs("div",{className:"engix-contact-hero-copy",children:[i.jsx("span",{className:"engix-contact-label",children:"CONTACT ENGIX"}),i.jsx("h1",{children:"Let’s talk about what you’re building."}),i.jsx("p",{className:"engix-contact-hero-lead",children:"Whether you are launching a new digital product, improving an existing platform, growing your digital presence or looking for a long-term technology partner, the right conversation is a good place to start."}),i.jsx("p",{className:"engix-contact-hero-secondary",children:"Share the business challenge, product idea or technical requirement with us. You do not need to have every detail figured out before getting in touch."}),i.jsxs("div",{className:"engix-contact-hero-actions",children:[i.jsxs("a",{href:"#engix-contact-form",className:"engix-contact-primary-btn",children:["Start a conversation",i.jsx(ln,{size:20,strokeWidth:1.8})]}),i.jsxs("a",{href:"mailto:hello@engix.world",className:"engix-contact-secondary-btn",children:["hello@engix.world",i.jsx(Ce,{size:19,strokeWidth:1.8})]})]})]}),i.jsxs("div",{className:"engix-contact-hero-image",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=90",alt:"Professional technology workspace"}),i.jsxs("div",{className:"engix-contact-image-overlay",children:[i.jsx("span",{children:"ENGIX TECH PRIVATE LIMITED"}),i.jsxs("strong",{children:["Business understanding.",i.jsx("br",{}),"Product thinking.",i.jsx("br",{}),"Reliable engineering."]})]})]})]})})}),i.jsx("section",{className:"engix-contact-strip",children:i.jsx("div",{className:"engix-contact-shell",children:i.jsxs("div",{className:"engix-contact-strip-grid",children:[i.jsxs("a",{href:"mailto:hello@engix.world",children:[i.jsx("div",{className:"engix-contact-strip-icon strip-lavender",children:i.jsx(zt,{size:25,strokeWidth:1.6})}),i.jsxs("div",{children:[i.jsx("span",{children:"Business email"}),i.jsx("strong",{children:"hello@engix.world"})]})]}),i.jsxs("a",{href:"tel:+917355985134",children:[i.jsx("div",{className:"engix-contact-strip-icon strip-yellow",children:i.jsx(It,{size:25,strokeWidth:1.6})}),i.jsxs("div",{children:[i.jsx("span",{children:"Talk to Engix"}),i.jsx("strong",{children:"+91 7355985134"})]})]}),i.jsxs("div",{children:[i.jsx("div",{className:"engix-contact-strip-icon strip-mint",children:i.jsx(mr,{size:25,strokeWidth:1.6})}),i.jsxs("div",{children:[i.jsx("span",{children:"Based in"}),i.jsx("strong",{children:"Varanasi, India"})]})]}),i.jsxs("div",{children:[i.jsx("div",{className:"engix-contact-strip-icon strip-peach",children:i.jsx(dt,{size:25,strokeWidth:1.6})}),i.jsxs("div",{children:[i.jsx("span",{children:"Delivery"}),i.jsx("strong",{children:"India & international markets"})]})]})]})})}),i.jsx("section",{className:"engix-contact-enquiries",children:i.jsxs("div",{className:"engix-contact-shell",children:[i.jsxs("div",{className:"engix-contact-heading-grid",children:[i.jsxs("div",{children:[i.jsx("span",{className:"engix-contact-label",children:"HOW CAN WE HELP?"}),i.jsx("h2",{children:"Start with what matters to you."})]}),i.jsx("p",{children:"Different conversations require different context. Choose the route closest to your requirement and share a few details with us."})]}),i.jsx("div",{className:"engix-contact-enquiry-grid",children:s.map(d=>{const c=d.icon;return i.jsxs("article",{className:`engix-contact-enquiry enquiry-${d.tone}`,children:[i.jsxs("div",{className:"engix-contact-enquiry-top",children:[i.jsx("span",{children:d.number}),i.jsx("div",{children:i.jsx(c,{size:31,strokeWidth:1.55})})]}),i.jsx("h3",{children:d.title}),i.jsx("p",{children:d.description}),i.jsxs("a",{href:"#engix-contact-form",children:[d.action,i.jsx(Ce,{size:18,strokeWidth:1.7})]})]},d.number)})})]})}),i.jsx("section",{className:"engix-contact-context",children:i.jsx("div",{className:"engix-contact-shell",children:i.jsxs("div",{className:"engix-contact-context-grid",children:[i.jsxs("div",{className:"engix-contact-context-image",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=90",alt:"Professionals discussing a digital product strategy",loading:"lazy",decoding:"async"}),i.jsxs("div",{children:[i.jsx("span",{children:"START WITH THE PROBLEM"}),i.jsx("strong",{children:"You don’t need a complete specification before talking to us."})]})]}),i.jsxs("div",{className:"engix-contact-context-copy",children:[i.jsx("span",{className:"engix-contact-label",children:"WORKING WITH ENGIX"}),i.jsx("h2",{children:"A useful conversation before a line of code."}),i.jsx("p",{children:"Many technology projects begin with an incomplete idea: a process that needs improving, software that no longer supports the business, an opportunity to automate work, or a new product that still needs definition."}),i.jsx("p",{children:"Our role is not simply to wait for a specification. We help understand the requirement, identify the important decisions and determine the right product and engineering path."}),i.jsxs("div",{className:"engix-contact-context-points",children:[i.jsxs("div",{children:[i.jsx($e,{size:20}),i.jsx("span",{children:"Product and technical discovery"})]}),i.jsxs("div",{children:[i.jsx($e,{size:20}),i.jsx("span",{children:"Clear scope and delivery priorities"})]}),i.jsxs("div",{children:[i.jsx($e,{size:20}),i.jsx("span",{children:"Design and engineering in one workflow"})]}),i.jsxs("div",{children:[i.jsx($e,{size:20}),i.jsx("span",{children:"Support from development through launch"})]})]})]})]})})}),i.jsx("section",{className:"engix-contact-form-section",id:"engix-contact-form",children:i.jsx("div",{className:"engix-contact-shell",children:i.jsxs("div",{className:"engix-contact-form-layout",children:[i.jsxs("div",{className:"engix-contact-form-intro",children:[i.jsx("span",{className:"engix-contact-label",children:"SEND US A MESSAGE"}),i.jsx("h2",{children:"Tell us what you’re trying to achieve."}),i.jsx("p",{children:"Give us some context about your organization, requirement and the outcome you are working toward. A short introduction is enough to begin."}),i.jsxs("div",{className:"engix-contact-response",children:[i.jsx(wr,{size:28,strokeWidth:1.5}),i.jsxs("div",{children:[i.jsx("strong",{children:"What happens next?"}),i.jsx("p",{children:"We review your enquiry, determine the right people to involve and respond with the most practical next step."})]})]}),i.jsxs("div",{className:"engix-contact-capability-list",children:[i.jsx("span",{children:"COMMON ENGAGEMENTS"}),r.map(d=>i.jsxs("div",{children:[i.jsx($e,{size:18,strokeWidth:1.7}),i.jsx("p",{children:d})]},d))]})]}),i.jsxs("div",{className:"engix-contact-form-card",children:[i.jsxs("div",{className:"engix-contact-form-card-head",children:[i.jsx("span",{children:"PROJECT ENQUIRY"}),i.jsx("h3",{children:"Start the conversation."}),i.jsx("p",{children:"Share as much or as little information as you currently have."})]}),i.jsx(ow,{})]})]})})}),i.jsx("section",{className:"engix-contact-direct",children:i.jsxs("div",{className:"engix-contact-shell",children:[i.jsxs("div",{className:"engix-contact-direct-heading",children:[i.jsx("span",{className:"engix-contact-label",children:"DIRECT CONTACT"}),i.jsx("h2",{children:"Prefer to reach us directly?"})]}),i.jsxs("div",{className:"engix-contact-direct-grid",children:[i.jsxs("article",{children:[i.jsx("div",{className:"engix-direct-icon direct-lavender",children:i.jsx(zt,{size:28,strokeWidth:1.5})}),i.jsx("span",{children:"BUSINESS EMAIL"}),i.jsx("h3",{children:"hello@engix.world"}),i.jsx("p",{children:"For project enquiries, corporate communication and technology partnerships."}),i.jsxs("a",{href:"mailto:hello@engix.world",children:["Send an email",i.jsx(Ce,{size:18})]})]}),i.jsxs("article",{children:[i.jsx("div",{className:"engix-direct-icon direct-yellow",children:i.jsx(It,{size:28,strokeWidth:1.5})}),i.jsx("span",{children:"CALL ENGIX"}),i.jsx("h3",{children:"+91 7355985134"}),i.jsx("p",{children:"Speak directly with us about a new requirement or an existing Engix engagement."}),i.jsxs("a",{href:"tel:+917355985134",children:["Call now",i.jsx(Ce,{size:18})]})]})]})]})}),i.jsx("section",{className:"engix-contact-locations","aria-labelledby":"engix-locations-title",children:i.jsxs("div",{className:"engix-contact-shell",children:[i.jsxs("div",{className:"engix-contact-direct-heading",children:[i.jsx("span",{className:"engix-contact-label",children:"LOCATIONS"}),i.jsx("h2",{id:"engix-locations-title",children:"Find the right location."})]}),i.jsx("div",{className:"engix-location-grid",children:cw.map((d,c)=>i.jsxs("article",{className:"engix-location-card",children:[i.jsxs("div",{className:"engix-location-top",children:[i.jsx("div",{className:`engix-direct-icon direct-${d.tone}`,children:i.jsx(mr,{size:26,strokeWidth:1.6,"aria-hidden":"true"})}),i.jsx("span",{children:String(c+1).padStart(2,"0")})]}),i.jsx("span",{className:"engix-location-country",children:d.country}),i.jsx("h3",{children:d.city}),i.jsx("address",{children:d.address})]},d.city))})]})}),i.jsx("section",{className:"engix-contact-delivery",children:i.jsx("div",{className:"engix-contact-shell",children:i.jsxs("div",{className:"engix-contact-delivery-grid",children:[i.jsxs("div",{children:[i.jsx("span",{className:"engix-contact-label",children:"HOW WE ENGAGE"}),i.jsx("h2",{children:"Professional delivery, wherever your business is."})]}),i.jsxs("div",{className:"engix-contact-delivery-content",children:[i.jsxs("article",{children:[i.jsx(dt,{size:29,strokeWidth:1.5}),i.jsxs("div",{children:[i.jsx("h3",{children:"International collaboration"}),i.jsx("p",{children:"Structured remote delivery enables Engix to work effectively with domestic and international businesses."})]})]}),i.jsxs("article",{children:[i.jsx(Pt,{size:29,strokeWidth:1.5}),i.jsxs("div",{children:[i.jsx("h3",{children:"Clear ownership"}),i.jsx("p",{children:"Requirements, priorities and responsibilities remain visible throughout the engagement."})]})]}),i.jsxs("article",{children:[i.jsx(lf,{size:29,strokeWidth:1.5}),i.jsxs("div",{children:[i.jsx("h3",{children:"Long-term thinking"}),i.jsx("p",{children:"We build relationships around continued product improvement rather than treating launch as the end."})]})]})]})]})})}),i.jsx("section",{className:"engix-contact-final",children:i.jsx("div",{className:"engix-contact-shell",children:i.jsxs("div",{className:"engix-contact-final-grid",children:[i.jsxs("div",{children:[i.jsx("span",{className:"engix-contact-label",children:"START SOMETHING"}),i.jsx("h2",{children:"Great technology starts with the right conversation."}),i.jsx("p",{children:"Tell us what is changing in your business and where technology needs to take you next."})]}),i.jsxs("a",{href:"#engix-contact-form",className:"engix-contact-final-btn",children:["Start yours",i.jsx("span",{children:i.jsx(Ce,{size:21,strokeWidth:1.8})})]})]})})})]}),i.jsx("style",{children:`
        .engix-contact-page {
          --ink: #111318;
          --gray: #565c63;
          --line: #dedfe2;
          --yellow: #fff14f;
          --mint: #dff5df;
          --lavender: #e9e6ff;
          --peach: #f4dfd2;
          --black: #111318;

          width: 100%;
          color: var(--ink);
          background: #fff;
          font-family: inherit;
          font-size: 17px;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .engix-contact-page *,
        .engix-contact-page *::before,
        .engix-contact-page *::after {
          box-sizing: border-box;
        }

        .engix-contact-page .engix-contact-shell {
          width: min(1260px, calc(100% - 56px));
          margin-inline: auto;
        }

        .engix-contact-page h1,
        .engix-contact-page h2,
        .engix-contact-page h3 {
          color: var(--ink);
          font-family: inherit;
          font-weight: 700;
          text-wrap: balance;
          text-transform: none;
        }

        .engix-contact-page h1 {
          font-size: clamp(39px, 4.5vw, 64px);
          line-height: 1.1;
          letter-spacing: -.035em;
          margin: 16px 0 20px;
        }

        .engix-contact-page h2 {
          font-size: clamp(29px, 2.85vw, 42px);
          line-height: 1.2;
          letter-spacing: -.025em;
          margin: 14px 0 18px;
        }

        .engix-contact-page h3 {
          font-size: 21px;
          line-height: 1.35;
          letter-spacing: -.01em;
          margin: 0 0 12px;
        }

        .engix-contact-page p {
          color: var(--gray);
          font-size: 17px;
          line-height: 1.7;
          margin: 0 0 16px;
        }

        .engix-contact-page p:last-child {
          margin-bottom: 0;
        }

        .engix-contact-page a {
          color: inherit;
        }

        .engix-contact-page svg {
          flex-shrink: 0;
        }

        .engix-contact-page a:focus-visible {
          outline: 3px solid #678650;
          outline-offset: 5px;
        }

        .engix-contact-page .engix-contact-label {
          display: inline-block;
          background: var(--lavender);
          color: #35304b;
          padding: 6px 11px;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 750;
          letter-spacing: .065em;
        }

        .engix-contact-page .engix-contact-hero {
          padding: 36px 0 44px;
          background: #fffdf0;
          border-bottom: 1px solid var(--line);
        }

        .engix-contact-page .engix-contact-enquiries,
        .engix-contact-page .engix-contact-context,
        .engix-contact-page .engix-contact-form-section,
        .engix-contact-page .engix-contact-direct,
        .engix-contact-page .engix-contact-locations,
        .engix-contact-page .engix-contact-delivery,
        .engix-contact-page .engix-contact-final {
          padding: clamp(36px, 4vw, 56px) 0;
          border-bottom: 1px solid var(--line);
        }

        .engix-contact-page .engix-contact-context,
        .engix-contact-page .engix-contact-locations {
          background: #fafaf8;
        }

        .engix-contact-page .engix-contact-form-section {
          background: #f3faf1;
          scroll-margin-top: 100px;
        }

        .engix-contact-page .engix-contact-final {
          background: #fffdf0;
        }

        .engix-contact-page .engix-contact-hero-grid,
        .engix-contact-page .engix-contact-context-grid,
        .engix-contact-page .engix-contact-form-layout,
        .engix-contact-page .engix-contact-delivery-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 34px;
          align-items: center;
        }

        .engix-contact-page .engix-contact-form-layout,
        .engix-contact-page .engix-contact-delivery-grid {
          align-items: start;
        }

        .engix-contact-page [class$="-grid"] > *,
        .engix-contact-page .engix-contact-form-layout > * {
          min-width: 0;
        }

        .engix-contact-page .engix-contact-hero-lead {
          font-size: 20px;
          line-height: 1.6;
          font-weight: 550;
          color: #353b41;
        }

        .engix-contact-page .engix-contact-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .engix-contact-page .engix-contact-primary-btn,
        .engix-contact-page .engix-contact-secondary-btn,
        .engix-contact-page .engix-contact-final-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
          max-width: 100%;
          padding: 12px 18px;
          border: 1px solid var(--ink);
          border-radius: 4px;
          font-size: 15px;
          line-height: 1.5;
          font-weight: 700;
          text-decoration: none;
          transition: background .2s ease, transform .2s ease;
        }

        .engix-contact-page .engix-contact-primary-btn {
          background: var(--yellow);
        }

        .engix-contact-page .engix-contact-secondary-btn {
          background: #fff;
        }

        .engix-contact-page .engix-contact-primary-btn:hover,
        .engix-contact-page .engix-contact-secondary-btn:hover,
        .engix-contact-page .engix-contact-final-btn:hover {
          transform: translateY(-2px);
        }

        .engix-contact-page .engix-contact-hero-image,
        .engix-contact-page .engix-contact-context-image {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          border-radius: 6px;
          background: #353b41;
          aspect-ratio: 4 / 3;
        }

        .engix-contact-page .engix-contact-hero-image img,
        .engix-contact-page .engix-contact-context-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .engix-contact-page .engix-contact-hero-image::after,
        .engix-contact-page .engix-contact-context-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            transparent 20%,
            rgba(17, 19, 24, .85)
          );
          pointer-events: none;
        }

        .engix-contact-page .engix-contact-image-overlay,
        .engix-contact-page .engix-contact-context-image > div {
          position: absolute;
          z-index: 1;
          inset: auto 26px 26px;
          color: #fff;
        }

        .engix-contact-page .engix-contact-image-overlay span,
        .engix-contact-page .engix-contact-context-image > div span {
          display: block;
          font-size: 12px;
          line-height: 1.5;
          font-weight: 700;
          letter-spacing: .06em;
          margin-bottom: 10px;
        }

        .engix-contact-page .engix-contact-image-overlay strong,
        .engix-contact-page .engix-contact-context-image > div strong {
          display: block;
          max-width: 420px;
          font-size: clamp(21px, 2.2vw, 29px);
          line-height: 1.3;
        }

        .engix-contact-page .engix-contact-strip {
          border-bottom: 1px solid var(--line);
        }

        .engix-contact-page .engix-contact-strip-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .engix-contact-page .engix-contact-strip-grid > * {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 24px 16px;
          border-right: 1px solid var(--line);
          text-decoration: none;
        }

        .engix-contact-page .engix-contact-strip-grid > :first-child {
          padding-left: 0;
        }

        .engix-contact-page .engix-contact-strip-grid > :last-child {
          border-right: 0;
        }

        .engix-contact-page .engix-contact-strip-grid span {
          display: block;
          color: var(--gray);
          font-size: 13px;
        }

        .engix-contact-page .engix-contact-strip-grid strong {
          display: block;
          font-size: 15px;
          line-height: 1.5;
        }

        .engix-contact-page .engix-contact-strip-icon,
        .engix-contact-page .engix-direct-icon {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          border-radius: 4px;
        }

        .engix-contact-page .strip-lavender,
        .engix-contact-page .direct-lavender {
          background: var(--lavender);
        }

        .engix-contact-page .strip-yellow,
        .engix-contact-page .direct-yellow {
          background: var(--yellow);
        }

        .engix-contact-page .strip-mint,
        .engix-contact-page .direct-mint {
          background: var(--mint);
        }

        .engix-contact-page .strip-peach,
        .engix-contact-page .direct-peach {
          background: var(--peach);
        }

        .engix-contact-page .engix-contact-heading-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 34px;
          align-items: end;
          margin-bottom: 28px;
        }

        .engix-contact-page .engix-contact-heading-grid h2 {
          margin-bottom: 0;
        }

        .engix-contact-page .engix-contact-enquiry-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .engix-contact-page .engix-contact-enquiry {
          display: flex;
          flex-direction: column;
          padding: 24px;
          border: 1px solid var(--line);
          border-radius: 6px;
        }

        .engix-contact-page .enquiry-lavender {
          background: #f3f1ff;
        }

        .engix-contact-page .enquiry-mint {
          background: #f3faf1;
        }

        .engix-contact-page .enquiry-yellow {
          background: #fffdf0;
        }

        .engix-contact-page .enquiry-peach {
          background: #fbf2ed;
        }

        .engix-contact-page .engix-contact-enquiry-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 24px;
        }

        .engix-contact-page .engix-contact-enquiry-top > span {
          font-size: 13px;
          font-weight: 700;
          color: var(--gray);
        }

        .engix-contact-page .engix-contact-enquiry-top > div {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          background: #ffffffb3;
          border-radius: 4px;
        }

        .engix-contact-page .engix-contact-enquiry a,
        .engix-contact-page .engix-contact-direct-grid a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          align-self: start;
          margin-top: auto;
          padding-top: 14px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 5px;
        }

        .engix-contact-page .engix-contact-context-points {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .engix-contact-page .engix-contact-context-points > div {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .engix-contact-page .engix-contact-context-points svg {
          margin-top: 4px;
          color: #3f6b3a;
        }

        .engix-contact-page .engix-contact-response {
          display: grid;
          grid-template-columns: 28px minmax(0, 1fr);
          gap: 14px;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 22px;
          margin: 24px 0;
        }

        .engix-contact-page .engix-contact-response strong {
          display: block;
          margin-bottom: 8px;
        }

        .engix-contact-page .engix-contact-capability-list > span,
        .engix-contact-page .engix-contact-form-card-head > span,
        .engix-contact-page .engix-contact-direct-grid article > span {
          display: block;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 750;
          letter-spacing: .055em;
          color: var(--gray);
          margin-bottom: 14px;
        }

        .engix-contact-page .engix-contact-capability-list > div {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
        }

        .engix-contact-page .engix-contact-capability-list svg {
          color: #3f6b3a;
          margin-top: 5px;
        }

        .engix-contact-page .engix-contact-capability-list p {
          margin: 0;
        }

        .engix-contact-page .engix-contact-form-card {
          min-width: 0;
          background: #fff;
          padding: clamp(22px, 3vw, 34px);
          border: 1px solid var(--line);
          border-radius: 6px;
          box-shadow: 0 12px 32px #11131808;
        }

        .engix-contact-page .engix-contact-form-card-head {
          padding-bottom: 24px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--line);
        }

        .engix-contact-page .engix-contact-form-card form {
          min-width: 0;
          max-width: 100%;
        }

        .engix-contact-page .engix-contact-form-card input:not([type="checkbox"]):not([type="radio"]):not([type="hidden"]):not([type="submit"]):not([type="button"]),
        .engix-contact-page .engix-contact-form-card select,
        .engix-contact-page .engix-contact-form-card textarea {
          max-width: 100%;
          min-width: 0;
          font-family: inherit;
          font-size: 16px;
        }

        .engix-contact-page .engix-contact-direct-heading {
          max-width: 850px;
          margin-bottom: 28px;
        }

        .engix-contact-page .engix-contact-direct-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .engix-contact-page .engix-contact-direct-grid article {
          display: flex;
          flex-direction: column;
          padding: 24px;
          border: 1px solid var(--line);
          border-radius: 6px;
        }

        .engix-contact-page .engix-direct-icon {
          margin-bottom: 22px;
        }

        /* FOUR LOCATION CARDS */

        .engix-contact-page .engix-location-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .engix-contact-page .engix-location-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          padding: 28px;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 6px;
        }

        .engix-contact-page .engix-location-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 22px;
        }

        .engix-contact-page .engix-location-top .engix-direct-icon {
          margin: 0;
        }

        .engix-contact-page .engix-location-top > span {
          color: var(--gray);
          font-size: 13px;
          font-weight: 700;
        }

        .engix-contact-page .engix-location-country {
          font-size: 12px;
          letter-spacing: .065em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--gray);
          margin-bottom: 8px;
        }

        .engix-contact-page .engix-location-card h3 {
          font-size: 25px;
        }

        .engix-contact-page .engix-location-card address {
          font-style: normal;
          font-size: 17px;
          line-height: 1.7;
          color: var(--gray);
          margin-bottom: 22px;
        }

        .engix-contact-page .engix-location-card a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          align-self: flex-start;
          font-size: 15px;
          font-weight: 700;
          text-underline-offset: 5px;
        }

        .engix-contact-page .engix-contact-delivery-content article {
          display: grid;
          grid-template-columns: 46px minmax(0, 1fr);
          gap: 16px;
          padding: 22px 0;
          border-top: 1px solid var(--line);
        }

        .engix-contact-page .engix-contact-delivery-content article:first-child {
          padding-top: 0;
          border-top: 0;
        }

        .engix-contact-page .engix-contact-delivery-content article > svg {
          width: 46px;
          height: 46px;
          padding: 10px;
          border-radius: 4px;
          background: var(--lavender);
        }

        .engix-contact-page .engix-contact-delivery-content article:nth-child(2) > svg {
          background: var(--yellow);
        }

        .engix-contact-page .engix-contact-delivery-content article:nth-child(3) > svg {
          background: var(--mint);
        }

        .engix-contact-page .engix-contact-final-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 34px;
          align-items: center;
        }

        .engix-contact-page .engix-contact-final-grid > div {
          max-width: 850px;
        }

        .engix-contact-page .engix-contact-final-btn {
          background: var(--black);
          color: #fff;
        }

        .engix-contact-page .engix-contact-final-btn > span {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--yellow);
          color: var(--ink);
        }

        @media (max-width: 1100px) {
          .engix-contact-page .engix-contact-enquiry-grid,
          .engix-contact-page .engix-contact-strip-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .engix-contact-page .engix-contact-strip-grid > * {
            padding: 20px 16px;
          }

          .engix-contact-page .engix-contact-strip-grid > :nth-child(odd) {
            padding-left: 0;
          }

          .engix-contact-page .engix-contact-strip-grid > :nth-child(even) {
            border-right: 0;
          }

          .engix-contact-page .engix-contact-strip-grid > :nth-child(-n+2) {
            border-bottom: 1px solid var(--line);
          }
        }

        @media (max-width: 850px) {
          .engix-contact-page .engix-contact-hero-grid,
          .engix-contact-page .engix-contact-context-grid,
          .engix-contact-page .engix-contact-form-layout,
          .engix-contact-page .engix-contact-delivery-grid,
          .engix-contact-page .engix-contact-heading-grid,
          .engix-contact-page .engix-contact-final-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 28px;
          }

          .engix-contact-page .engix-contact-hero-image,
          .engix-contact-page .engix-contact-context-image {
            aspect-ratio: 16 / 10;
          }

          .engix-contact-page .engix-contact-final-btn {
            justify-self: start;
          }
        }

        @media (max-width: 600px) {
          .engix-contact-page .engix-contact-shell {
            width: calc(100% - 32px);
          }

          .engix-contact-page .engix-contact-hero {
            padding: 32px 0 36px;
          }

          .engix-contact-page .engix-contact-enquiry-grid,
          .engix-contact-page .engix-contact-direct-grid,
          .engix-contact-page .engix-contact-strip-grid,
          .engix-contact-page .engix-location-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .engix-contact-page .engix-location-grid {
            gap: 16px;
          }

          .engix-contact-page .engix-contact-strip-grid > * {
            padding: 18px 0;
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .engix-contact-page .engix-contact-strip-grid > :last-child {
            border-bottom: 0;
          }

          .engix-contact-page .engix-contact-hero-actions {
            flex-direction: column;
          }

          .engix-contact-page .engix-contact-primary-btn,
          .engix-contact-page .engix-contact-secondary-btn,
          .engix-contact-page .engix-contact-final-btn {
            width: 100%;
          }

          .engix-contact-page .engix-contact-hero-image,
          .engix-contact-page .engix-contact-context-image {
            aspect-ratio: 4 / 3;
          }

          .engix-contact-page .engix-contact-image-overlay,
          .engix-contact-page .engix-contact-context-image > div {
            inset: auto 20px 20px;
          }

          .engix-contact-page .engix-contact-enquiry,
          .engix-contact-page .engix-contact-direct-grid article,
          .engix-contact-page .engix-location-card {
            padding: 22px;
          }

          .engix-contact-page .engix-contact-response {
            padding: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .engix-contact-page .engix-contact-primary-btn,
          .engix-contact-page .engix-contact-secondary-btn,
          .engix-contact-page .engix-contact-final-btn {
            transition: none;
            transform: none;
          }
        }
      `})]})}function uw({children:s,to:r,variant:d="primary",type:c="button",onClick:u,className:h=""}){const g=`btn btn-${d} ${h}`.trim();return r?i.jsx(re,{to:r,className:g,children:s}):i.jsx("button",{type:c,onClick:u,className:g,children:s})}function pw({children:s,className:r=""}){return i.jsx("div",{className:`container ${r}`,children:s})}function hw(){return Ft("Not Found"),i.jsx("section",{className:"section-space",children:i.jsx(pw,{children:i.jsxs("div",{className:"not-found-box",children:[i.jsx("h1",{children:"404"}),i.jsx("p",{children:"Page not found."}),i.jsx(uw,{to:"/",children:"Back to Home"})]})})})}const zf={name:"",company:"",email:"",phone:"",service:"",budget:"",message:"",consent:!1},gw=[{icon:ni,title:"SEO",description:"Rank on Google and get found by customers already searching for you.",details:["Search visibility","Technical SEO","On-page optimization","Local SEO"]},{icon:tm,title:"Paid ads (Meta / Google)",description:"Drive targeted leads fast with ad campaigns that pay for themselves.",details:["Google Search Ads","Meta Ads","Campaign optimization","Conversion tracking"]},{icon:qs,title:"Social media",description:"Consistent content, community management, and brand presence.",details:["Content strategy","Creative planning","Campaign support","Audience engagement"]},{icon:Xt,title:"Website Development",description:"High-converting landing pages & professional websites built to turn visitors into paying clients.",details:["Business websites","High-converting landing pages","Responsive development","Conversion-focused UX"]}],fw=[{number:"1",title:"Free audit call",description:"We review your current digital presence and find growth gaps — no cost, no obligation."},{number:"2",title:"Custom strategy",description:"A plan built for your business, budget, and target customers. Not a template."},{number:"3",title:"Launch & execute",description:"We handle everything — ads, content, SEO — so you can focus on running your business."},{number:"4",title:"Report & scale",description:"Weekly reports, monthly reviews, and continuous optimization to grow your results."}],mw=[{location:"Durham, United Kingdom",company:"Spinnovate Limited",title:"Professional digital platforms for an international technology business.",description:"Engix supported the development of multiple technology-focused websites and digital experiences, helping present complex scientific and technical businesses through clear, professional and modern web platforms.",tags:["Website Development","UI/UX","Digital Presence"]},{location:"Singapore",company:"International AI Engagement",title:"AI chatbot and intelligent interviewing experiences.",description:"Our team worked on conversational AI experiences and AI-supported interviewing workflows designed around practical business use cases and modern customer interaction.",tags:["Artificial Intelligence","Automation","Product Engineering"]},{location:"India",company:"Mr Maintenance",title:"A complete digital service-booking ecosystem.",description:"The platform connects customers, administrators and field technicians through booking, assignment, OTP verification, payments and customer feedback workflows.",tags:["Mobile Application","Backend","Digital Platform"]}],xw=[{question:"How soon will I see results?",answer:"Results depend on your existing digital presence, competition, advertising budget and selected channels. Our initial optimization approach is generally structured around a 60–90 day period so campaigns can collect meaningful data and improve systematically."},{question:"What is the minimum budget needed?",answer:"There is no single budget suitable for every business. We first understand your objectives, market and customer acquisition goals, then recommend an appropriate strategy and budget."},{question:"Do I need to sign a long contract?",answer:"Engagement terms depend on the scope of work. We explain the recommended strategy, deliverables and commercial structure clearly before an engagement begins."},{question:"What industries do you work with?",answer:"Engix can support startups, SMEs, professional service businesses, technology companies and established organizations looking to improve their digital presence and customer acquisition."},{question:"Can Engix handle both marketing and website development?",answer:"Yes. Engix combines digital marketing with website, landing-page and software development capabilities so campaigns and customer experiences can work together."}];function Of({source:s="Solutions Landing Page",title:r="Enquire now for free consultation",description:d="Tell us about your business, current marketing and what you would like to improve."}){const c=Wf(),[u,h]=k.useState(zf),[g,x]=k.useState(!1),[y,m]=k.useState({type:"",message:""}),v=_=>{const{name:V,value:N,type:q,checked:R}=_.target;h(G=>({...G,[V]:q==="checkbox"?R:N}))},j=async _=>{var V,N,q,R;if(_.preventDefault(),!g){if(m({type:"",message:""}),!u.name||!u.company||!u.email||!u.phone||!u.service||!u.message){m({type:"error",message:"Please complete all required fields before submitting your enquiry."});return}if(!u.consent){m({type:"error",message:"Please confirm that Engix may use your information to respond to your enquiry."});return}x(!0);try{const G={name:u.name.trim(),email:u.email.trim(),phone:u.phone.trim(),company:u.company.trim(),role:"",country:"",inquiryType:"New Project / Business Opportunity",service:u.service,budget:u.budget,timeline:"To be discussed",message:u.message.trim(),source:s,page:"/solutions"};console.log("Submitting Engix Solutions enquiry:",G);const W=await bd.post("/leads",G);console.log("Engix enquiry response:",W.data),typeof window<"u"&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"generate_lead",lead_source:s,service:u.service})),h(zf),c("/thank-you",{replace:!0,state:{from:"/solutions",service:u.service}})}catch(G){console.error("ENGIX SOLUTIONS FORM ERROR:",G),console.error("Backend response:",(V=G==null?void 0:G.response)==null?void 0:V.data),console.error("Status:",(N=G==null?void 0:G.response)==null?void 0:N.status),m({type:"error",message:((R=(q=G==null?void 0:G.response)==null?void 0:q.data)==null?void 0:R.message)||"We could not send your enquiry. Please try again or contact Engix by phone, WhatsApp or email."})}finally{x(!1)}}};return i.jsxs("div",{className:"engix-lead-card",children:[i.jsxs("div",{className:"engix-lead-heading",children:[i.jsx("span",{children:"GET STARTED"}),i.jsx("h2",{children:r}),i.jsx("p",{children:d})]}),i.jsxs("form",{className:"engix-lead-form",onSubmit:j,children:[i.jsxs("div",{className:"engix-lead-field",children:[i.jsx("label",{children:"Full name *"}),i.jsx("input",{type:"text",name:"name",value:u.name,onChange:v,placeholder:"Your full name",autoComplete:"name",required:!0})]}),i.jsxs("div",{className:"engix-lead-field",children:[i.jsx("label",{children:"Business website *"}),i.jsx("input",{type:"text",name:"company",value:u.company,onChange:v,placeholder:"Your business / company",autoComplete:"organization",required:!0})]}),i.jsxs("div",{className:"engix-lead-row",children:[i.jsxs("div",{className:"engix-lead-field",children:[i.jsx("label",{children:"Email *"}),i.jsx("input",{type:"email",name:"email",value:u.email,onChange:v,placeholder:"you@company.com",autoComplete:"email",required:!0})]}),i.jsxs("div",{className:"engix-lead-field",children:[i.jsx("label",{children:"Contact number *"}),i.jsx("input",{type:"tel",name:"phone",value:u.phone,onChange:v,placeholder:"+91 98765 43210",autoComplete:"tel",required:!0})]})]}),i.jsxs("div",{className:"engix-lead-field",children:[i.jsx("label",{children:"What do you need help with? *"}),i.jsxs("select",{name:"service",value:u.service,onChange:v,required:!0,children:[i.jsx("option",{value:"",children:"Select a service"}),i.jsx("option",{value:"SEO",children:"Search Engine Optimization"}),i.jsx("option",{value:"Google Ads",children:"Google Ads"}),i.jsx("option",{value:"Meta Ads",children:"Meta Ads"}),i.jsx("option",{value:"Social Media Marketing",children:"Social Media Marketing"}),i.jsx("option",{value:"Website Development",children:"Website Development"}),i.jsx("option",{value:"Landing Page Development",children:"High-Converting Landing Page"}),i.jsx("option",{value:"Complete Digital Marketing",children:"Complete Digital Marketing"})]})]}),i.jsxs("div",{className:"engix-lead-field",children:[i.jsx("label",{children:"Monthly budget"}),i.jsxs("select",{name:"budget",value:u.budget,onChange:v,children:[i.jsx("option",{value:"",children:"Select a range"}),i.jsx("option",{value:"Under ₹25,000",children:"Under ₹25,000"}),i.jsx("option",{value:"₹25,000 - ₹50,000",children:"₹25,000 – ₹50,000"}),i.jsx("option",{value:"₹50,000 - ₹1,00,000",children:"₹50,000 – ₹1,00,000"}),i.jsx("option",{value:"₹1,00,000+",children:"₹1,00,000+"}),i.jsx("option",{value:"Need Guidance",children:"Need guidance"})]})]}),i.jsxs("div",{className:"engix-lead-field",children:[i.jsx("label",{children:"Your Meassage *"}),i.jsx("textarea",{name:"message",value:u.message,onChange:v,rows:"4",maxLength:"2000",placeholder:"Not enough leads from Google...",required:!0})]}),i.jsxs("label",{className:"engix-lead-consent",children:[i.jsx("input",{type:"checkbox",name:"consent",checked:u.consent,onChange:v}),i.jsx("span",{children:"I agree that Engix Tech Private Limited may use the information submitted here to respond to my enquiry and related business communication."})]}),y.message&&i.jsxs("div",{className:`engix-lead-status ${y.type}`,children:[y.type==="success"&&i.jsx($e,{size:22}),i.jsx("span",{children:y.message})]}),i.jsxs("button",{type:"submit",className:"engix-lead-submit",disabled:g,children:[g?"Sending enquiry...":"Enquire now for free consultation",!g&&i.jsx(ln,{size:22})]}),i.jsxs("div",{className:"engix-lead-private",children:[i.jsx(sm,{size:18}),i.jsx("span",{children:"We never share your information. No spam."})]})]})]})}function yw(){return Ft("Digital Marketing & Growth Solutions"),i.jsxs(i.Fragment,{children:[i.jsxs("main",{className:"engix-ads-page",children:[i.jsx("header",{className:"engix-ads-header",children:i.jsxs("div",{className:"engix-ads-shell engix-ads-header-inner",children:[i.jsxs(re,{to:"/",className:"engix-ads-logo",children:[i.jsx("span",{className:"engix-navbar-logo-icon",children:i.jsx("img",{src:"/logo.png",alt:"Engix logo",className:"engix-navbar-logo-image"})}),i.jsx("strong",{children:"Engix"})]}),i.jsxs("nav",{className:"engix-ads-nav",children:[i.jsx("a",{href:"#services",children:"Services"}),i.jsx("a",{href:"#process",children:"How it works"}),i.jsx("a",{href:"#results",children:"Client results"}),i.jsx("a",{href:"#faq",children:"FAQ"})]}),i.jsxs("a",{href:"#hero-form",className:"engix-ads-header-button",children:["Free Consultation",i.jsx(Ce,{size:20})]})]})}),i.jsx("section",{className:"engix-ads-hero",children:i.jsx("div",{className:"engix-ads-shell",children:i.jsxs("div",{className:"engix-ads-hero-grid",children:[i.jsxs("div",{className:"engix-ads-hero-copy",children:[i.jsxs("div",{className:"engix-ads-audit-badge",children:[i.jsx(wr,{size:21}),i.jsx("span",{children:"Free audit — limited slots"})]}),i.jsxs("h1",{children:["Grow your business with",i.jsxs("span",{children:[" ","results-driven"," "]}),"digital marketing"]}),i.jsxs("p",{className:"engix-ads-hero-description",children:["We help local businesses get more leads, more calls, and more customers — with SEO, paid ads, social media that actually converts.",i.jsx("br",{}),i.jsx("span",{children:"From strategy to execution, we focus on measurable growth that turns your marketing investment into real business opportunities."})]}),i.jsx("div",{className:"engix-ads-hero-buttons",children:i.jsxs("a",{href:"#hero-form",className:"engix-ads-primary-button",children:["Get a free consultation",i.jsx(Pb,{size:23})]})}),i.jsxs("div",{className:"engix-ads-hero-points",children:[i.jsxs("div",{children:[i.jsx(As,{size:22}),i.jsx("span",{children:"No long-term contracts"})]}),i.jsxs("div",{children:[i.jsx(As,{size:22}),i.jsx("span",{children:"Results in 60–90 days"})]}),i.jsxs("div",{children:[i.jsx(As,{size:22}),i.jsx("span",{children:"100% transparent reporting"})]})]}),i.jsxs("div",{className:"engix-ads-direct-contact",children:[i.jsxs("a",{href:"tel:+917355985134",children:[i.jsx(It,{size:22}),"+91 7355985134"]}),i.jsxs("a",{href:"https://wa.me/917355985134",target:"_blank",rel:"noreferrer",children:[i.jsx(Si,{size:22}),"WhatsApp us"]})]})]}),i.jsx("div",{id:"hero-form",className:"engix-hero-form-wrap",children:i.jsx(Of,{source:"Solutions Hero Form",title:"Enquire now for free consultation",description:"Tell us about your business, current marketing and what you would like to improve."})})]})})}),i.jsx("section",{className:"engix-ads-proof",children:i.jsx("div",{className:"engix-ads-shell",children:i.jsxs("div",{className:"engix-ads-proof-grid",children:[i.jsxs("article",{children:[i.jsx("strong",{children:"Since 2019"}),i.jsx("span",{children:"Building digital solutions"})]}),i.jsxs("article",{children:[i.jsx("strong",{children:"300+"}),i.jsx("span",{children:"Projects delivered"})]}),i.jsxs("article",{children:[i.jsx("strong",{children:"Pan-India"}),i.jsx("span",{children:"Domestic project experience"})]}),i.jsxs("article",{children:[i.jsx("strong",{children:"Global"}),i.jsx("span",{children:"International project experience"})]})]})})}),i.jsx("section",{className:"engix-ads-intro-image",children:i.jsx("div",{className:"engix-ads-shell",children:i.jsxs("div",{className:"engix-ads-intro-image-wrap",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1900&q=90",alt:"Professional business strategy meeting"}),i.jsxs("div",{className:"engix-ads-intro-overlay",children:[i.jsx("span",{children:"STRATEGY + EXECUTION"}),i.jsx("strong",{children:"Built around your business and your customers."})]})]})})}),i.jsx("section",{className:"engix-ads-services",id:"services",children:i.jsxs("div",{className:"engix-ads-shell",children:[i.jsxs("div",{className:"engix-ads-heading",children:[i.jsx("span",{children:"WHAT WE DO"}),i.jsx("h2",{children:"Everything your brand needs to grow online"}),i.jsx("p",{children:"Pick one service or let us build the full stack for you."})]}),i.jsx("div",{className:"engix-ads-services-grid",children:gw.map(s=>{const r=s.icon;return i.jsxs("article",{children:[i.jsx("div",{className:"engix-ads-service-icon",children:i.jsx(r,{size:34,strokeWidth:1.8})}),i.jsx("h3",{children:s.title}),i.jsx("p",{className:"engix-service-description",children:s.description}),i.jsx("div",{className:"engix-ads-service-points",children:s.details.map(d=>i.jsxs("span",{children:[i.jsx(As,{size:20,strokeWidth:2}),d]},d))}),i.jsxs("a",{href:"#bottom-enquiry",children:["Enquire now",i.jsx(Ce,{size:20})]})]},s.title)})})]})}),i.jsx("section",{className:"engix-ads-web",children:i.jsx("div",{className:"engix-ads-shell",children:i.jsxs("div",{className:"engix-ads-web-grid",children:[i.jsx("div",{className:"engix-ads-web-image",children:i.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1900&q=90",alt:"Professional analytics and digital performance dashboard"})}),i.jsxs("div",{className:"engix-ads-web-copy",children:[i.jsx("span",{children:"WEBSITE DEVELOPMENT"}),i.jsx("h2",{children:"High-converting landing pages & websites"}),i.jsx("p",{children:"Your advertising can only perform as well as the experience customers reach after clicking an ad."}),i.jsx("p",{children:"Engix develops professional websites and high-converting landing pages designed around clear messaging, mobile usability, business credibility and conversion-focused customer journeys."}),i.jsxs("div",{children:[i.jsxs("span",{children:[i.jsx($e,{size:23}),"Mobile responsive"]}),i.jsxs("span",{children:[i.jsx($e,{size:23}),"Conversion focused"]}),i.jsxs("span",{children:[i.jsx($e,{size:23}),"Professional UI/UX"]}),i.jsxs("span",{children:[i.jsx($e,{size:23}),"Analytics ready"]})]}),i.jsxs("a",{href:"#bottom-enquiry",children:["Discuss your website",i.jsx(ln,{size:21})]})]})]})})}),i.jsx("section",{className:"engix-ads-process",id:"process",children:i.jsxs("div",{className:"engix-ads-shell",children:[i.jsxs("div",{className:"engix-ads-heading",children:[i.jsx("span",{children:"HOW IT WORKS"}),i.jsx("h2",{children:"Start getting leads in 4 simple steps"})]}),i.jsx("div",{className:"engix-ads-process-list",children:fw.map(s=>i.jsxs("article",{children:[i.jsx("span",{children:s.number}),i.jsxs("div",{children:[i.jsx("h3",{children:s.title}),i.jsx("p",{children:s.description})]})]},s.number))})]})}),i.jsx("section",{className:"engix-ads-results",id:"results",children:i.jsxs("div",{className:"engix-ads-shell",children:[i.jsxs("div",{className:"engix-ads-heading",children:[i.jsx("span",{children:"CLIENT RESULTS"}),i.jsx("h2",{children:"Real businesses, real digital work"}),i.jsx("p",{children:"Selected domestic and international technology engagements delivered by Engix."})]}),i.jsx("div",{className:"engix-ads-results-grid",children:mw.map(s=>i.jsxs("article",{children:[i.jsxs("div",{className:"engix-ads-result-location",children:[i.jsx(dt,{size:22}),s.location]}),i.jsx("span",{className:"engix-ads-result-company",children:s.company}),i.jsx("h3",{children:s.title}),i.jsx("p",{children:s.description}),i.jsx("div",{className:"engix-ads-result-tags",children:s.tags.map(r=>i.jsx("span",{children:r},r))})]},s.title))}),i.jsxs(re,{to:"/portfolio",className:"engix-ads-result-link",children:["Explore selected Engix work",i.jsx(Ce,{size:21})]})]})}),i.jsx("section",{className:"engix-ads-why",children:i.jsx("div",{className:"engix-ads-shell",children:i.jsxs("div",{className:"engix-ads-why-grid",children:[i.jsxs("div",{children:[i.jsx("span",{className:"engix-small-heading",children:"WHY ENGIX"}),i.jsx("h2",{children:"Built around trust, growth and real results."})]}),i.jsxs("div",{className:"engix-ads-why-list",children:[i.jsxs("article",{children:[i.jsx(hd,{size:33}),i.jsxs("div",{children:[i.jsx("h3",{children:"Result-Driven Approach"}),i.jsx("p",{children:"We focus on real, measurable outcomes that drive consistent business growth and long-term value."})]})]}),i.jsxs("article",{children:[i.jsx(Dd,{size:33}),i.jsxs("div",{children:[i.jsx("h3",{children:"Transparent Communication"}),i.jsx("p",{children:"We keep communication clear, honest, and frequent so you always know what is happening."})]})]}),i.jsxs("article",{children:[i.jsx(Xt,{size:33}),i.jsxs("div",{children:[i.jsx("h3",{children:"Marketing + Technology"}),i.jsx("p",{children:"Advertising, websites, landing pages, software and tracking can work together through one delivery team."})]})]})]})]})})}),i.jsx("section",{className:"engix-ads-partnership",children:i.jsx("div",{className:"engix-ads-shell",children:i.jsxs("div",{className:"engix-ads-partnership-grid",children:[i.jsxs("div",{className:"engix-ads-partnership-copy",children:[i.jsx("span",{className:"engix-small-heading",children:"A CONNECTED PARTNER"}),i.jsx("h2",{children:"Strategy, marketing and technology working together."}),i.jsx("p",{children:"Engix combines marketing thinking with design and technology execution so businesses do not have to coordinate separate teams for every part of their digital customer journey."}),i.jsxs("a",{href:"#bottom-enquiry",children:["Start a conversation",i.jsx(ln,{size:21})]})]}),i.jsx("div",{className:"engix-ads-partnership-image",children:i.jsx("img",{src:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1900&q=90",alt:"Professional technology team collaborating"})})]})})}),i.jsx("section",{className:"engix-ads-bottom-enquiry",id:"bottom-enquiry",children:i.jsx("div",{className:"engix-ads-shell",children:i.jsxs("div",{className:"engix-ads-bottom-grid",children:[i.jsxs("div",{className:"engix-ads-bottom-copy",children:[i.jsx("span",{className:"engix-small-heading",children:"GET STARTED"}),i.jsx("h2",{children:"Claim your free website audit"}),i.jsx("p",{children:"We'll review your site, ads, SEO and digital customer journey and help identify where you may be losing opportunities."}),i.jsx("p",{children:"Start with a straightforward conversation about your current position and what you want your business to achieve."}),i.jsxs("div",{className:"engix-ads-bottom-contact",children:[i.jsxs("a",{href:"tel:+917355985134",children:[i.jsx(It,{size:26}),i.jsxs("div",{children:[i.jsx("small",{children:"CALL US"}),i.jsx("strong",{children:"+91 7355985134"})]})]}),i.jsxs("a",{href:"https://wa.me/917355985134",target:"_blank",rel:"noreferrer",children:[i.jsx(Si,{size:26}),i.jsxs("div",{children:[i.jsx("small",{children:"WHATSAPP"}),i.jsx("strong",{children:"Start a conversation"})]})]}),i.jsxs("a",{href:"mailto:hello@engix.world",children:[i.jsx(zt,{size:26}),i.jsxs("div",{children:[i.jsx("small",{children:"EMAIL"}),i.jsx("strong",{children:"hello@engix.world"})]})]})]})]}),i.jsx(Of,{source:"Solutions Bottom Form",title:"Enquire now for free consultation",description:"Tell us what you want to improve and our team will help you understand the next practical step."})]})})}),i.jsx("section",{className:"engix-ads-faq",id:"faq",children:i.jsx("div",{className:"engix-ads-shell",children:i.jsxs("div",{className:"engix-ads-faq-grid",children:[i.jsxs("div",{children:[i.jsx("span",{className:"engix-small-heading",children:"COMMON QUESTIONS"}),i.jsx("h2",{children:"Things people usually ask"})]}),i.jsx("div",{className:"engix-ads-faq-list",children:xw.map(s=>i.jsxs("details",{children:[i.jsxs("summary",{children:[i.jsx("span",{children:s.question}),i.jsx(m0,{size:24})]}),i.jsx("p",{children:s.answer})]},s.question))})]})})}),i.jsx("section",{className:"engix-ads-final",children:i.jsx("div",{className:"engix-ads-shell",children:i.jsxs("div",{className:"engix-ads-final-inner",children:[i.jsx("span",{className:"engix-small-heading",children:"GET STARTED"}),i.jsx("h2",{children:"Ready to get more customers?"}),i.jsx("p",{children:"Book a free 15-min call or drop us a WhatsApp — no pressure, just clarity."}),i.jsxs("div",{children:[i.jsxs("a",{href:"#bottom-enquiry",className:"engix-ads-final-primary",children:["Book a free call",i.jsx(ln,{size:22})]}),i.jsxs("a",{href:"https://wa.me/917355985134",target:"_blank",rel:"noreferrer",className:"engix-ads-final-secondary",children:[i.jsx(Si,{size:22}),"WhatsApp us"]})]})]})})}),i.jsx("footer",{className:"engix-ads-footer",children:i.jsxs("div",{className:"engix-ads-shell",children:[i.jsxs("div",{className:"engix-ads-footer-main",children:[i.jsxs("div",{className:"engix-ads-footer-brand",children:[i.jsxs(re,{to:"/",className:"engix-ads-footer-logo","aria-label":"Engix Home",children:[i.jsx("span",{className:"engix-ads-footer-logo-icon",children:i.jsx("img",{src:"/logo.png",alt:"Engix",className:"engix-ads-footer-logo-image"})}),i.jsx("strong",{className:"engix-ads-footer-logo-name",children:"Engix"})]}),i.jsx("p",{className:"engix-ads-footer-description",children:"Engix Tech Private Limited is a digital technology company helping businesses strengthen their online presence through performance marketing, professional websites, software engineering, AI solutions and scalable digital products."}),i.jsxs("div",{className:"engix-ads-footer-trust",children:[i.jsxs("span",{children:[i.jsx(mr,{size:17,strokeWidth:1.8}),"India based"]}),i.jsxs("span",{children:[i.jsx(dt,{size:17,strokeWidth:1.8}),"Working globally"]}),i.jsxs("span",{children:[i.jsx($e,{size:17,strokeWidth:1.8}),"Business-focused delivery"]})]})]}),i.jsxs("div",{className:"engix-ads-footer-column",children:[i.jsx("span",{className:"engix-ads-footer-column-title",children:"Services"}),i.jsx("a",{href:"#services",children:"Search Engine Optimization"}),i.jsx("a",{href:"#services",children:"Google Ads"}),i.jsx("a",{href:"#services",children:"Meta Ads"}),i.jsx("a",{href:"#services",children:"Social Media Marketing"}),i.jsx("a",{href:"#services",children:"Website Development"}),i.jsx(re,{to:"/services",children:"Explore all services"})]}),i.jsxs("div",{className:"engix-ads-footer-column",children:[i.jsx("span",{className:"engix-ads-footer-column-title",children:"Company"}),i.jsx(re,{to:"/about",children:"About Engix"}),i.jsx(re,{to:"/portfolio",children:"Selected Projects"}),i.jsx(re,{to:"/contact",children:"Contact"}),i.jsx(re,{to:"/privacy",children:"Privacy Policy"}),i.jsx(re,{to:"/terms",children:"Terms & Conditions"})]}),i.jsxs("div",{className:"engix-ads-footer-column engix-ads-footer-contact",children:[i.jsx("span",{className:"engix-ads-footer-column-title",children:"Connect"}),i.jsxs("a",{href:"mailto:hello@engix.world",children:[i.jsx("span",{className:"engix-ads-footer-contact-icon",children:i.jsx(zt,{size:19,strokeWidth:1.8})}),i.jsxs("span",{className:"engix-ads-footer-contact-copy",children:[i.jsx("small",{children:"EMAIL"}),i.jsx("strong",{children:"hello@engix.world"})]})]}),i.jsxs("a",{href:"tel:+917355985134",children:[i.jsx("span",{className:"engix-ads-footer-contact-icon",children:i.jsx(It,{size:19,strokeWidth:1.8})}),i.jsxs("span",{className:"engix-ads-footer-contact-copy",children:[i.jsx("small",{children:"CALL"}),i.jsx("strong",{children:"+91 7355985134"})]})]}),i.jsxs("a",{href:"https://wa.me/917355985134",target:"_blank",rel:"noreferrer",children:[i.jsx("span",{className:"engix-ads-footer-contact-icon",children:i.jsx(Si,{size:19,strokeWidth:1.8})}),i.jsxs("span",{className:"engix-ads-footer-contact-copy",children:[i.jsx("small",{children:"WHATSAPP"}),i.jsx("strong",{children:"Start a conversation"})]})]})]})]}),i.jsxs("div",{className:"engix-ads-footer-bottom",children:[i.jsxs("p",{children:["© ",new Date().getFullYear()," Engix Tech Private Limited. All rights reserved."]}),i.jsxs("div",{className:"engix-ads-footer-availability",children:[i.jsx("span",{className:"engix-ads-footer-status-dot"}),i.jsx("span",{children:"Available for new business enquiries"})]}),i.jsxs("div",{className:"engix-ads-footer-bottom-links",children:[i.jsx(re,{to:"/privacy",children:"Privacy"}),i.jsx(re,{to:"/terms",children:"Terms"}),i.jsx("a",{href:"mailto:hello@engix.world",children:"Email"})]})]})]})})]}),i.jsx("style",{children:`

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 76px;
        }


        body {
          margin: 0;
        }


        .engix-ads-page {
          --ink: #101214;
          --text: #292d31;
          --muted: #5d636a;
          --line: #dedfe2;

          --blue: #dcecff;
          --blue-deep: #245986;

          --light: #fafaf8;
          --green: #177837;

          background: #ffffff;
          color: var(--ink);

          overflow-x: hidden;
        }


        .engix-ads-shell {
          width:
            min(
              1240px,
              calc(100% - 56px)
            );

          margin: 0 auto;
        }

        //logo
        .engix-navbar-logo {
  width: max-content;

  display: inline-flex;
  align-items: center;

  gap: 10px;

  text-decoration: none;

  flex-shrink: 0;
}


/* LOGO CONTAINER */

.engix-navbar-logo-icon {
  width: 52px;
  height: 52px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  overflow: hidden;

  box-sizing: border-box;

  border-radius: 10px;

  background: transparent;
}


/* ACTUAL LOGO */

.engix-navbar-logo-image {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: contain;
  object-position: center;

  max-width: 100%;
  max-height: 100%;
}


/* TABLET */

@media (max-width: 900px) {

  .engix-navbar-logo-icon {
    width: 48px;
    height: 48px;
  }

}


/* MOBILE */

@media (max-width: 600px) {

  .engix-navbar-logo {
    gap: 8px;
  }

  .engix-navbar-logo-icon {
    width: 44px;
    height: 44px;
  }

}


/* VERY SMALL MOBILE */

@media (max-width: 380px) {

  .engix-navbar-logo-icon {
    width: 40px;
    height: 40px;
  }

}



        /* =====================================================
           ALL SMALL SECTION LABELS
        ====================================================== */

        .engix-small-heading,
        .engix-ads-heading > span,
        .engix-lead-heading > span,
        .engix-ads-web-copy > span {

          display: inline-block;

          color: var(--blue-deep);

          font-size: 15px;

          line-height: 1.2;

          font-weight: 800;

          letter-spacing: .09em;

          text-transform: uppercase;
        }



        /* =====================================================
           HEADER
        ====================================================== */

        .engix-ads-header {
          position: fixed;

          top: 0;
          left: 0;
          right: 0;

          z-index: 9999;

          background:
            rgba(255,255,255,.97);

          border-bottom:
            1px solid var(--line);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          box-shadow:
            0 5px 20px rgba(0,0,0,.025);
        }


        .engix-ads-header-inner {
          min-height: 72px;

          display: grid;

          grid-template-columns:
            1fr auto 1fr;

          align-items: center;

          gap: 32px;
        }


        .engix-ads-logo {
          width: max-content;

          display: flex;

          align-items: center;

          gap: 10px;

          color: var(--ink);

          text-decoration: none;
        }


        .engix-ads-logo span {
          font-size: 39px;
          line-height: 1;
        }


        .engix-ads-logo strong {
          font-size: 25px;

          letter-spacing: -.045em;
        }


        .engix-ads-nav {
          display: flex;

          align-items: center;

          gap: 34px;
        }


        .engix-ads-nav a {
          color: #50555b;

          text-decoration: none;

          font-size: 15px;

          font-weight: 650;
        }


        .engix-ads-header-button {
          justify-self: end;

          min-height: 47px;

          padding: 0 20px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          border-radius: 999px;

          background: var(--ink);

          color: white;

          text-decoration: none;

          font-size: 14px;

          font-weight: 750;
        }



        /* =====================================================
           HERO
           
           HEADER = 72px
           HERO TOP = 82px
           ONLY ABOUT 10px EXTRA GAP
           
           IMPORTANT:
           THIS HERO BACKGROUND IMAGE SHOULD BE
           RESERVED ONLY FOR /solutions
        ====================================================== */

        .engix-ads-hero {
          position: relative;

          padding:
            82px 0 76px;

          background:

            linear-gradient(
              90deg,
              rgba(255,255,255,.97) 0%,
              rgba(255,255,255,.94) 40%,
              rgba(255,255,255,.88) 67%,
              rgba(255,255,255,.84) 100%
            ),

            url(
              'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2200&q=92'
            );

          background-size: cover;

          background-position: center;

          background-repeat: no-repeat;

          border-bottom:
            1px solid rgba(17,20,24,.06);
        }


        .engix-ads-hero::before {
          content: '';

          position: absolute;

          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,.15),
              rgba(250,250,247,.3)
            );
        }


        .engix-ads-hero > .engix-ads-shell {
          position: relative;

          z-index: 2;
        }


        .engix-ads-hero-grid {
          display: grid;

          grid-template-columns:
            minmax(0,1.04fr)
            minmax(430px,.76fr);

          gap: 68px;

          align-items: start;
        }


        .engix-ads-hero-copy {
          max-width: 790px;

          padding-top: 7px;
        }


        .engix-ads-audit-badge {
          width: max-content;

          max-width: 100%;

          padding:
            11px 18px;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          border:
            1px solid #91bee6;

          border-radius: 999px;

          background:
            rgba(220,236,255,.96);

          color: var(--blue-deep);

          font-size: 16px;

          line-height: 1.1;

          font-weight: 700;

          box-shadow:
            0 8px 28px
            rgba(36,89,134,.08);
        }


        .engix-ads-hero h1 {
          max-width: 870px;

          margin:
            80px 0 0;

          font-size:
            clamp(
              3.7rem,
              5.65vw,
              6rem
            );

          line-height: .99;

          letter-spacing: -.058em;

          font-weight: 560;
        }


        .engix-ads-hero h1 span {
          color: var(--blue-deep);
        }


        .engix-ads-hero-description {
          max-width: 760px;

          margin:
            62px 0 0;

          color: #454b52;

          font-size:
            clamp(
              1.3rem,
              1.7vw,
              1.55rem
            );

          line-height: 1.65;

          font-weight: 400;
        }


        .engix-ads-hero-buttons {
          display: flex;

          flex-wrap: wrap;

          gap: 13px;

          margin-top: 46px;
        }


        .engix-ads-primary-button,
        .engix-ads-secondary-button {
          min-height: 58px;

          padding:
            0 23px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          border-radius: 9px;

          text-decoration: none;

          font-size: 16px;

          font-weight: 720;

          transition:
            transform .2s ease,
            box-shadow .2s ease;
        }


        .engix-ads-primary-button {
          background: var(--ink);

          color: white;

          box-shadow:
            0 12px 26px
            rgba(16,18,20,.15);
        }


        .engix-ads-secondary-button {
          border:
            1px solid #c7cacf;

          background:
            rgba(255,255,255,.92);

          color: var(--ink);
        }


        .engix-ads-primary-button:hover,
        .engix-ads-secondary-button:hover {
          transform:
            translateY(-2px);
        }


        .engix-ads-hero-points {
          display: flex;

          flex-wrap: wrap;

          gap:
            16px 25px;

          margin-top: 44px;
        }


        .engix-ads-hero-points > div {
          display: flex;

          align-items: center;

          gap: 8px;

          color: #3f454b;

          font-size: 16px;

          font-weight: 500;
        }


        .engix-ads-hero-points svg {
          color: var(--green);

          flex-shrink: 0;
        }


        .engix-ads-direct-contact {
          display: flex;

          flex-wrap: wrap;

          gap:
            14px 23px;

          margin-top: 36px;
        }


        .engix-ads-direct-contact a {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: #454a51;

          text-decoration: none;

          font-size: 15px;

          font-weight: 650;
        }



        /* =====================================================
           HERO FORM
        ====================================================== */

        .engix-hero-form-wrap {
          scroll-margin-top: 95px;
        }


        .engix-lead-card {
          padding: 31px;

          border:
            1px solid rgba(199,202,207,.9);

          border-radius: 18px;

          background:
            rgba(255,255,255,.97);

          box-shadow:
            0 25px 70px
            rgba(18,24,30,.11);

          backdrop-filter:
            blur(12px);

          -webkit-backdrop-filter:
            blur(12px);
        }


        .engix-lead-heading > span {
          font-size: 14px;
        }


        .engix-lead-heading h2 {
          margin:
            10px 0 8px;

          font-size:
            clamp(
              2rem,
              2.7vw,
              2.75rem
            );

          line-height: 1.05;

          letter-spacing: -.045em;
        }


        .engix-lead-heading p {
          margin: 0;

          color: #5d6269;

          font-size: 16px;

          line-height: 1.65;
        }


        .engix-lead-row {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(0,1fr)
            );

          gap: 13px;
        }


        .engix-lead-field {
          margin-top: 17px;
        }


        .engix-lead-field label {
          display: block;

          margin-bottom: 7px;

          color: #353a40;

          font-size: 14px;

          font-weight: 700;
        }


        .engix-lead-field input,
        .engix-lead-field select,
        .engix-lead-field textarea {
          width: 100%;

          box-sizing: border-box;

          border:
            1px solid #cfd2d6;

          border-radius: 8px;

          outline: 0;

          background: #ffffff;

          color: var(--ink);

          font-family: inherit;

          font-size: 15px;

          transition:
            border-color .2s ease,
            box-shadow .2s ease;
        }


        .engix-lead-field input,
        .engix-lead-field select {
          min-height: 50px;

          padding:
            0 13px;
        }


        .engix-lead-field textarea {
          min-height: 108px;

          padding: 13px;

          resize: vertical;
        }


        .engix-lead-field input:focus,
        .engix-lead-field select:focus,
        .engix-lead-field textarea:focus {
          border-color:
            #72a6d7;

          box-shadow:
            0 0 0 3px
            rgba(50,112,170,.08);
        }


        .engix-lead-consent {
          margin-top: 16px;

          display: grid;

          grid-template-columns:
            18px 1fr;

          gap: 9px;

          align-items: start;

          color: #5f646b;

          font-size: 12px;

          line-height: 1.6;
        }


        .engix-lead-consent input {
          margin-top: 2px;
        }


        .engix-lead-status {
          margin-top: 15px;

          padding:
            13px 14px;

          display: flex;

          align-items: flex-start;

          gap: 8px;

          border-radius: 7px;

          font-size: 13px;

          line-height: 1.55;
        }


        .engix-lead-status.success {
          background:
            #e6f5e9;

          color:
            #235e2c;
        }


        .engix-lead-status.error {
          background:
            #fff0e9;

          color:
            #813e29;
        }


        .engix-lead-submit {
          width: 100%;

          min-height: 56px;

          margin-top: 20px;

          padding:
            0 15px;

          border: 0;

          border-radius: 8px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          background: var(--ink);

          color: white;

          font-family: inherit;

          font-size: 15px;

          font-weight: 750;

          cursor: pointer;
        }


        .engix-lead-submit:disabled {
          opacity: .6;

          cursor: not-allowed;
        }


        .engix-lead-private {
          margin-top: 13px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 7px;

          color: #686d74;

          font-size: 12px;
        }



        /* =====================================================
           PROOF
        ====================================================== */

        .engix-ads-proof {
          padding:
            0 0 75px;

          background:
            #fafaf7;
        }


        .engix-ads-proof-grid {
          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          border:
            1px solid var(--line);

          border-radius: 18px;

          background:
            white;

          overflow: hidden;
        }


        .engix-ads-proof-grid article {
          min-height: 155px;

          padding: 27px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;

          border-right:
            1px solid var(--line);
        }


        .engix-ads-proof-grid article:last-child {
          border-right: 0;
        }


        .engix-ads-proof-grid strong {
          font-size:
            clamp(
              2rem,
              3vw,
              3rem
            );

          line-height: 1;

          letter-spacing: -.04em;
        }


        .engix-ads-proof-grid span {
          margin-top: 10px;

          color: #4e545a;

          font-size: 16px;

          line-height: 1.4;
        }



        /* =====================================================
           PROFESSIONAL IMAGE
        ====================================================== */

        .engix-ads-intro-image {
          padding:
            25px 0 85px;

          background: white;
        }


        .engix-ads-intro-image-wrap {
          height: 520px;

          position: relative;

          overflow: hidden;

          border-radius: 20px;
        }


        .engix-ads-intro-image-wrap img {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;
        }


        .engix-ads-intro-image-wrap::after {
          content: '';

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(10,14,18,.72),
              rgba(10,14,18,.05)
            );
        }


        .engix-ads-intro-overlay {
          position: absolute;

          z-index: 2;

          left: 45px;

          bottom: 42px;

          max-width: 530px;

          color: white;
        }


        .engix-ads-intro-overlay span {
          display: block;

          margin-bottom: 13px;

          font-size: 15px;

          font-weight: 800;

          letter-spacing: .09em;
        }


        .engix-ads-intro-overlay strong {
          display: block;

          font-size:
            clamp(
              2.8rem,
              4.3vw,
              4.7rem
            );

          line-height: .98;

          letter-spacing: -.05em;

          font-weight: 560;
        }



        /* =====================================================
           SHARED SECTION HEADINGS
        ====================================================== */

        .engix-ads-heading {
          max-width: 880px;

          margin-bottom: 50px;
        }


        .engix-ads-heading h2 {
          margin:
            12px 0 11px;

          font-size:
            clamp(
              2.8rem,
              4.6vw,
              5rem
            );

          line-height: .98;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-ads-heading p {
          max-width: 760px;

          margin: 0;

          color: #565c63;

          font-size: 19px;

          line-height: 1.65;
        }



        /* =====================================================
           SERVICES
           
           THIS IS THE TYPOGRAPHY YOU WERE
           SPECIFICALLY TALKING ABOUT.
        ====================================================== */

        .engix-ads-services {
          padding:
            105px 0;

          background:
            white;
        }


        .engix-ads-services-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 18px;
        }


        .engix-ads-services-grid article {
          min-height: 410px;

          padding: 34px;

          display: flex;

          flex-direction: column;

          border:
            1px solid var(--line);

          border-radius: 18px;

          background: white;

          transition:
            transform .22s ease,
            box-shadow .22s ease;
        }


        .engix-ads-services-grid article:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 20px 50px
            rgba(0,0,0,.05);
        }


        .engix-ads-service-icon {
          width: 59px;

          height: 59px;

          display: grid;

          place-items: center;

          border-radius: 12px;

          background:
            var(--blue);

          color:
            var(--blue-deep);
        }


        .engix-ads-services-grid h3 {
          margin:
            28px 0 14px;

          font-size:
            clamp(
              2rem,
              2.7vw,
              2.8rem
            );

          line-height: 1.05;

          letter-spacing: -.04em;
        }


        /*
          MAIN SERVICE DESCRIPTION

          EXAMPLE:
          "Rank on Google and get found by
          customers already searching for you."
        */

        .engix-service-description,
        .engix-ads-services-grid article > p {
          max-width: 590px;

          margin: 0;

          color: #50565d;

          font-size: 20px;

          line-height: 1.62;

          font-weight: 400;
        }


        /*
          SMALL SERVICE BENEFITS

          EXAMPLES:
          Search visibility
          Technical SEO
          On-page optimization
          Local SEO
        */

        .engix-ads-service-points {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap:
            13px 18px;

          margin-top: 28px;
        }


        .engix-ads-service-points span {
          display: flex;

          align-items: center;

          gap: 9px;

          color: #444a50;

          font-size: 17px;

          line-height: 1.5;

          font-weight: 500;
        }


        .engix-ads-service-points svg {
          color: var(--green);

          flex-shrink: 0;
        }


        .engix-ads-services-grid article > a {
          width: max-content;

          margin-top: auto;

          padding-top: 31px;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: var(--ink);

          text-decoration: none;

          font-size: 15px;

          font-weight: 700;
        }



        /* =====================================================
           WEBSITE DEVELOPMENT
        ====================================================== */

        .engix-ads-web {
          padding:
            20px 0 105px;

          background:
            white;
        }


        .engix-ads-web-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          border:
            1px solid var(--line);

          border-radius: 20px;

          overflow: hidden;
        }


        .engix-ads-web-image {
          min-height: 570px;
        }


        .engix-ads-web-image img {
          width: 100%;

          height: 100%;

          min-height: 570px;

          display: block;

          object-fit: cover;
        }


        .engix-ads-web-copy {
          padding:
            59px 50px;

          background:
            var(--light);
        }


        .engix-ads-web-copy > span {
          font-size: 15px;
        }


        .engix-ads-web-copy h2 {
          margin:
            15px 0 22px;

          font-size:
            clamp(
              2.7rem,
              4vw,
              4.45rem
            );

          line-height: .98;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-ads-web-copy > p {
          color: #50565c;

          font-size: 19px;

          line-height: 1.7;

          font-weight: 400;
        }


        .engix-ads-web-copy > div {
          display: grid;

          gap: 14px;

          margin-top: 27px;
        }


        .engix-ads-web-copy > div span {
          display: flex;

          align-items: center;

          gap: 10px;

          color: #444a50;

          font-size: 17px;

          line-height: 1.5;

          font-weight: 500;
        }


        .engix-ads-web-copy > div svg {
          color: var(--green);

          flex-shrink: 0;
        }


        .engix-ads-web-copy > a {
          width: max-content;

          min-height: 54px;

          margin-top: 31px;

          padding:
            0 21px;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          border-radius: 8px;

          background: var(--ink);

          color: white;

          text-decoration: none;

          font-size: 15px;

          font-weight: 700;
        }



        /* =====================================================
           PROCESS
        ====================================================== */

        .engix-ads-process {
          padding:
            105px 0;

          background:
            var(--light);
        }


        .engix-ads-process-list {
          border-top:
            1px solid var(--line);
        }


        .engix-ads-process-list article {
          padding:
            31px 0;

          display: grid;

          grid-template-columns:
            64px 1fr;

          gap: 22px;

          align-items: start;

          border-bottom:
            1px solid var(--line);
        }


        .engix-ads-process-list article > span {
          width: 47px;

          height: 47px;

          display: grid;

          place-items: center;

          border-radius: 50%;

          background: var(--blue);

          color: var(--blue-deep);

          font-size: 17px;

          font-weight: 750;
        }


        .engix-ads-process-list h3 {
          margin: 0;

          font-size: 24px;

          line-height: 1.3;
        }


        .engix-ads-process-list p {
          max-width: 900px;

          margin:
            9px 0 0;

          color: #50565d;

          font-size: 19px;

          line-height: 1.65;

          font-weight: 400;
        }



        /* =====================================================
           CLIENT RESULTS
        ====================================================== */

        .engix-ads-results {
          padding:
            105px 0;

          background:
            white;
        }


        .engix-ads-results-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 18px;
        }


        .engix-ads-results-grid article {
          min-height: 430px;

          padding: 32px;

          display: flex;

          flex-direction: column;

          border:
            1px solid var(--line);

          border-radius: 18px;

          background: white;
        }


        .engix-ads-result-location {
          display: flex;

          align-items: center;

          gap: 8px;

          color: var(--blue-deep);

          font-size: 15px;

          font-weight: 700;
        }


        .engix-ads-result-company {
          margin-top: 31px;

          color: #676d73;

          font-size: 14px;

          line-height: 1.3;

          font-weight: 800;

          letter-spacing: .07em;

          text-transform: uppercase;
        }


        .engix-ads-results-grid h3 {
          margin:
            13px 0 16px;

          font-size: 29px;

          line-height: 1.08;

          letter-spacing: -.035em;
        }


        .engix-ads-results-grid p {
          margin: 0;

          color: #50565d;

          font-size: 18px;

          line-height: 1.68;

          font-weight: 400;
        }


        .engix-ads-result-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 8px;

          margin-top: auto;

          padding-top: 31px;
        }


        .engix-ads-result-tags span {
          padding:
            8px 11px;

          background:
            #f3f4f5;

          color: #4d5359;

          font-size: 14px;
        }


        .engix-ads-result-link {
          width: max-content;

          margin-top: 30px;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: var(--ink);

          text-decoration: none;

          font-size: 16px;

          font-weight: 700;
        }



        /* =====================================================
           WHY ENGIX
        ====================================================== */

        .engix-ads-why {
          padding:
            105px 0;

          background:
            var(--light);
        }


        .engix-ads-why-grid {
          display: grid;

          grid-template-columns:
            .9fr 1.1fr;

          gap: 86px;
        }


        .engix-ads-why-grid h2 {
          max-width: 610px;

          margin:
            15px 0 0;

          font-size:
            clamp(
              2.9rem,
              4.6vw,
              5rem
            );

          line-height: .98;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-ads-why-list {
          border-top:
            1px solid var(--line);
        }


        .engix-ads-why-list article {
          padding:
            29px 0;

          display: grid;

          grid-template-columns:
            54px 1fr;

          gap: 19px;

          border-bottom:
            1px solid var(--line);
        }


        .engix-ads-why-list svg {
          color:
            var(--blue-deep);
        }


        .engix-ads-why-list h3 {
          margin: 0;

          font-size: 24px;

          line-height: 1.3;
        }


        .engix-ads-why-list p {
          max-width: 650px;

          margin:
            9px 0 0;

          color: #50565d;

          font-size: 18px;

          line-height: 1.68;

          font-weight: 400;
        }



        /* =====================================================
           PARTNERSHIP
        ====================================================== */

        .engix-ads-partnership {
          padding:
            105px 0;

          background:
            white;
        }


        .engix-ads-partnership-grid {
          display: grid;

          grid-template-columns:
            .9fr 1.1fr;

          align-items: stretch;

          border:
            1px solid var(--line);

          border-radius: 20px;

          overflow: hidden;
        }


        .engix-ads-partnership-copy {
          padding:
            58px 50px;

          display: flex;

          flex-direction: column;

          justify-content: center;

          background:
            var(--light);
        }


        .engix-ads-partnership-copy h2 {
          margin:
            15px 0 21px;

          font-size:
            clamp(
              2.7rem,
              4vw,
              4.5rem
            );

          line-height: .98;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-ads-partnership-copy p {
          margin: 0;

          color: #50565d;

          font-size: 19px;

          line-height: 1.7;

          font-weight: 400;
        }


        .engix-ads-partnership-copy a {
          width: max-content;

          min-height: 54px;

          margin-top: 31px;

          padding:
            0 21px;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          border-radius: 8px;

          background: var(--ink);

          color: white;

          text-decoration: none;

          font-size: 15px;

          font-weight: 700;
        }


        .engix-ads-partnership-image {
          min-height: 540px;
        }


        .engix-ads-partnership-image img {
          width: 100%;

          height: 100%;

          min-height: 540px;

          display: block;

          object-fit: cover;
        }



        /* =====================================================
           BOTTOM ENQUIRY
        ====================================================== */

        .engix-ads-bottom-enquiry {
          padding:
            105px 0;

          background:
            white;
        }


        .engix-ads-bottom-grid {
          display: grid;

          grid-template-columns:
            .85fr 1.15fr;

          gap: 75px;

          align-items: start;
        }


        .engix-ads-bottom-copy {
          position: sticky;

          top: 105px;
        }


        .engix-ads-bottom-copy h2 {
          max-width: 600px;

          margin:
            15px 0 21px;

          font-size:
            clamp(
              3rem,
              4.65vw,
              5rem
            );

          line-height: .97;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-ads-bottom-copy > p {
          max-width: 610px;

          margin:
            0 0 17px;

          color: #50565d;

          font-size: 19px;

          line-height: 1.7;

          font-weight: 400;
        }


        .engix-ads-bottom-contact {
          display: grid;

          gap: 0;

          margin-top: 33px;
        }


        .engix-ads-bottom-contact > a {
          padding:
            18px 0;

          display: flex;

          align-items: center;

          gap: 14px;

          border-bottom:
            1px solid var(--line);

          color: var(--ink);

          text-decoration: none;
        }


        .engix-ads-bottom-contact svg {
          color:
            var(--blue-deep);

          flex-shrink: 0;
        }


        .engix-ads-bottom-contact small,
        .engix-ads-bottom-contact strong {
          display: block;
        }


        .engix-ads-bottom-contact small {
          color: #676d73;

          font-size: 13px;

          font-weight: 800;

          letter-spacing: .06em;
        }


        .engix-ads-bottom-contact strong {
          margin-top: 5px;

          font-size: 17px;
        }



        /* =====================================================
           FAQ
        ====================================================== */

        .engix-ads-faq {
          padding:
            105px 0;

          background:
            var(--light);
        }


        .engix-ads-faq-grid {
          display: grid;

          grid-template-columns:
            .7fr 1.3fr;

          gap: 90px;
        }


        .engix-ads-faq-grid h2 {
          margin:
            15px 0 0;

          font-size:
            clamp(
              2.8rem,
              4.4vw,
              4.7rem
            );

          line-height: .98;

          letter-spacing: -.05em;

          font-weight: 560;
        }


        .engix-ads-faq-list {
          border-top:
            1px solid var(--line);
        }


        .engix-ads-faq-list details {
          border-bottom:
            1px solid var(--line);
        }


        .engix-ads-faq-list summary {
          min-height: 82px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 20px;

          cursor: pointer;

          list-style: none;

          font-size: 20px;

          font-weight: 700;
        }


        .engix-ads-faq-list summary::-webkit-details-marker {
          display: none;
        }


        .engix-ads-faq-list details p {
          max-width: 760px;

          margin:
            0 0 29px;

          color: #50565d;

          font-size: 18px;

          line-height: 1.72;

          font-weight: 400;
        }


        .engix-ads-faq-list details[open] svg {
          transform:
            rotate(180deg);
        }



        /* =====================================================
           FINAL CTA
        ====================================================== */

        .engix-ads-final {
          padding:
            88px 0;

          background:
            white;
        }


        .engix-ads-final-inner {
          text-align: center;
        }


        .engix-ads-final h2 {
          max-width: 820px;

          margin:
            14px auto;

          font-size:
            clamp(
              3rem,
              4.5vw,
              5rem
            );

          line-height: .98;

          letter-spacing: -.05em;

          font-weight: 560;
        }


        .engix-ads-final p {
          max-width: 720px;

          margin: 0 auto;

          color: #50565d;

          font-size: 19px;

          line-height: 1.65;
        }


        .engix-ads-final-inner > div {
          margin-top: 29px;

          display: flex;

          justify-content: center;

          flex-wrap: wrap;

          gap: 11px;
        }


        .engix-ads-final-primary,
        .engix-ads-final-secondary {
          min-height: 55px;

          padding:
            0 22px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          border-radius: 8px;

          text-decoration: none;

          font-size: 15px;

          font-weight: 700;
        }


        .engix-ads-final-primary {
          background: var(--ink);

          color: white;
        }


        .engix-ads-final-secondary {
          border:
            1px solid var(--line);

          color:
            var(--ink);
        }



        /* =====================================================
           PREMIUM LANDING PAGE FOOTER
        ====================================================== */

        .engix-ads-footer {
          position: relative;

          overflow: hidden;

          padding:
            34px 0 28px;

          background:
            #050505;

          color:
            #ffffff;

          border-top:
            1px solid
            rgba(255,255,255,.08);
        }


        .engix-ads-footer::before {
          content: '';

          position: absolute;

          top: -320px;
          right: -180px;

          width: 560px;
          height: 560px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(250,199,31,.12),
              rgba(250,199,31,.025) 48%,
              transparent 70%
            );

          pointer-events: none;
        }


        .engix-ads-footer::after {
          content: '';

          position: absolute;

          bottom: -360px;
          left: -200px;

          width: 520px;
          height: 520px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(255,255,255,.045),
              transparent 67%
            );

          pointer-events: none;
        }


        .engix-ads-footer > .engix-ads-shell {
          position: relative;

          z-index: 2;
        }



        /* =====================================================
           FOOTER CTA
        ====================================================== */

        .engix-ads-footer-cta {
          padding:
            48px;

          display: grid;

          grid-template-columns:
            minmax(0,1fr)
            auto;

          align-items: center;

          gap: 55px;

          border:
            1px solid
            rgba(255,255,255,.11);

          border-radius:
            22px;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,.075),
              rgba(255,255,255,.022)
            );

          box-shadow:
            inset
            0 1px 0
            rgba(255,255,255,.06);
        }


        .engix-ads-footer-cta-copy {
          max-width:
            800px;
        }


        .engix-ads-footer-eyebrow {
          display: block;

          margin-bottom:
            15px;

          color:
            #f5ca2d;

          font-size:
            13px;

          line-height:
            1.2;

          font-weight:
            800;

          letter-spacing:
            .11em;
        }


        .engix-ads-footer-cta h2 {
          margin: 0;

          max-width:
            790px;

          color:
            #ffffff;

          font-size:
            clamp(
              2.6rem,
              4.2vw,
              4.75rem
            );

          line-height:
            .98;

          letter-spacing:
            -.055em;

          font-weight:
            560;
        }


        .engix-ads-footer-cta p {
          max-width:
            680px;

          margin:
            20px 0 0;

          color:
            rgba(255,255,255,.64);

          font-size:
            17px;

          line-height:
            1.72;
        }


        .engix-ads-footer-cta-actions {
          min-width:
            240px;

          display: flex;

          flex-direction:
            column;

          gap:
            11px;
        }


        .engix-ads-footer-primary,
        .engix-ads-footer-secondary {
          min-height:
            56px;

          padding:
            0 21px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            9px;

          border-radius:
            9px;

          text-decoration:
            none;

          font-size:
            14px;

          font-weight:
            750;

          transition:
            transform .2s ease,
            background .2s ease,
            border-color .2s ease,
            box-shadow .2s ease;
        }


        .engix-ads-footer-primary {
          background:
            #f5ca2d;

          color:
            #090a0c;
        }


        .engix-ads-footer-primary:hover {
          transform:
            translateY(-2px);

          background:
            #ffd840;

          box-shadow:
            0 13px 30px
            rgba(245,202,45,.15);
        }


        .engix-ads-footer-secondary {
          border:
            1px solid
            rgba(255,255,255,.18);

          background:
            rgba(255,255,255,.035);

          color:
            #ffffff;
        }


        .engix-ads-footer-secondary:hover {
          transform:
            translateY(-2px);

          border-color:
            rgba(255,255,255,.34);

          background:
            rgba(255,255,255,.07);
        }



        /* =====================================================
           MAIN FOOTER GRID
        ====================================================== */

        .engix-ads-footer-main {
          display: grid;

          grid-template-columns:
            1.45fr
            .72fr
            .72fr
            1.12fr;

          gap:
            50px;

          padding:
            72px 0 60px;
        }



        /* =====================================================
           BRAND
        ====================================================== */

        .engix-ads-footer-brand {
          max-width:
            440px;
        }


        .engix-ads-footer-logo {
          width:
            max-content;

          display:
            inline-flex;

          align-items:
            center;

          gap:
            11px;

          color:
            #ffffff;

          text-decoration:
            none;

          flex-shrink:
            0;

          white-space:
            nowrap;
        }


        .engix-ads-footer-logo-icon {
          width:
            54px;

          height:
            54px;

          min-width:
            54px;

          min-height:
            54px;

          max-width:
            54px;

          max-height:
            54px;

          flex:
            0 0 54px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          overflow:
            hidden;

          margin: 0;

          padding: 0;

          background:
            #050505;

          border:
            none;

          border-radius:
            0;

          box-shadow:
            none;
        }


        .engix-ads-footer-logo-image {
          width:
            100%;

          height:
            100%;

          max-width:
            54px;

          max-height:
            54px;

          display:
            block;

          object-fit:
            contain;

          object-position:
            center;

          margin: 0;

          padding: 0;

          border: 0;

          background:
            #050505;
        }


        .engix-ads-footer-logo-name {
          margin: 0;

          color:
            #ffffff;

          font-size:
            29px;

          line-height:
            1;

          font-weight:
            760;

          letter-spacing:
            -.045em;
        }


        .engix-ads-footer-description {
          max-width:
            420px;

          margin:
            27px 0 0;

          color:
            rgba(255,255,255,.62);

          font-size:
            16px;

          line-height:
            1.75;
        }



        /* =====================================================
           TRUST
        ====================================================== */

        .engix-ads-footer-trust {
          display: flex;

          flex-wrap:
            wrap;

          gap:
            11px 17px;

          margin-top:
            26px;
        }


        .engix-ads-footer-trust span {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          color:
            rgba(255,255,255,.7);

          font-size:
            13px;

          line-height:
            1.45;
        }


        .engix-ads-footer-trust svg {
          color:
            #f5ca2d;

          flex-shrink:
            0;
        }



        /* =====================================================
           FOOTER COLUMNS
        ====================================================== */

        .engix-ads-footer-column {
          display: flex;

          flex-direction:
            column;

          align-items:
            flex-start;

          gap:
            13px;
        }


        .engix-ads-footer-column-title {
          margin-bottom:
            10px;

          color:
            #ffffff;

          font-size:
            13px;

          line-height:
            1.2;

          font-weight:
            800;

          letter-spacing:
            .1em;

          text-transform:
            uppercase;
        }


        .engix-ads-footer-column > a {
          color:
            rgba(255,255,255,.61);

          text-decoration:
            none;

          font-size:
            15px;

          line-height:
            1.52;

          transition:
            color .2s ease,
            transform .2s ease;
        }


        .engix-ads-footer-column > a:hover {
          color:
            #ffffff;

          transform:
            translateX(3px);
        }



        /* =====================================================
           CONTACT
        ====================================================== */

        .engix-ads-footer-contact {
          gap:
            7px;
        }


        .engix-ads-footer-contact > a,
        .engix-ads-footer-location {
          width:
            100%;

          box-sizing:
            border-box;

          display:
            grid;

          grid-template-columns:
            39px
            minmax(0,1fr);

          align-items:
            center;

          gap:
            12px;

          padding:
            8px 0;

          color:
            rgba(255,255,255,.7);

          text-decoration:
            none;
        }


        .engix-ads-footer-contact > a:hover {
          color:
            #ffffff;

          transform:
            none;
        }


        .engix-ads-footer-contact-icon {
          width:
            37px;

          height:
            37px;

          display:
            grid;

          place-items:
            center;

          border:
            1px solid
            rgba(245,202,45,.2);

          border-radius:
            10px;

          background:
            rgba(245,202,45,.07);

          color:
            #f5ca2d;
        }


        .engix-ads-footer-contact-copy {
          display:
            flex;

          min-width:
            0;

          flex-direction:
            column;

          gap:
            3px;
        }


        .engix-ads-footer-contact-copy small {
          color:
            rgba(255,255,255,.38);

          font-size:
            10px;

          line-height:
            1.2;

          font-weight:
            800;

          letter-spacing:
            .09em;
        }


        .engix-ads-footer-contact-copy strong {
          color:
            rgba(255,255,255,.75);

          font-size:
            14px;

          line-height:
            1.45;

          font-weight:
            550;

          overflow-wrap:
            anywhere;
        }


        .engix-ads-footer-contact > a:hover
        .engix-ads-footer-contact-copy strong {
          color:
            #ffffff;
        }



        /* =====================================================
           CREDIBILITY STRIP
        ====================================================== */

        .engix-ads-footer-proof {
          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          border-top:
            1px solid
            rgba(255,255,255,.1);

          border-bottom:
            1px solid
            rgba(255,255,255,.1);
        }


        .engix-ads-footer-proof > div {
          min-height:
            112px;

          padding:
            21px;

          box-sizing:
            border-box;

          display:
            flex;

          flex-direction:
            column;

          align-items:
            center;

          justify-content:
            center;

          text-align:
            center;

          border-right:
            1px solid
            rgba(255,255,255,.1);
        }


        .engix-ads-footer-proof > div:last-child {
          border-right: 0;
        }


        .engix-ads-footer-proof strong {
          color:
            #ffffff;

          font-size:
            21px;

          line-height:
            1.25;

          font-weight:
            720;
        }


        .engix-ads-footer-proof span {
          margin-top:
            6px;

          color:
            rgba(255,255,255,.45);

          font-size:
            13px;

          line-height:
            1.4;
        }



        /* =====================================================
           BOTTOM
        ====================================================== */

        .engix-ads-footer-bottom {
          min-height:
            78px;

          display: grid;

          grid-template-columns:
            1fr
            auto
            1fr;

          align-items:
            center;

          gap:
            24px;
        }


        .engix-ads-footer-bottom p {
          margin: 0;

          color:
            rgba(255,255,255,.4);

          font-size:
            12px;

          line-height:
            1.5;
        }


        .engix-ads-footer-availability {
          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            9px;

          color:
            rgba(255,255,255,.52);

          font-size:
            12px;
        }


        .engix-ads-footer-status-dot {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            #55c66d;

          box-shadow:
            0 0 0 4px
            rgba(85,198,109,.09);
        }


        .engix-ads-footer-bottom-links {
          justify-self:
            end;

          display: flex;

          align-items:
            center;

          gap:
            19px;
        }


        .engix-ads-footer-bottom-links a {
          color:
            rgba(255,255,255,.48);

          text-decoration:
            none;

          font-size:
            12px;

          transition:
            color .2s ease;
        }


        .engix-ads-footer-bottom-links a:hover {
          color:
            #f5ca2d;
        }



        /* =====================================================
           FOOTER TABLET
        ====================================================== */

        @media (max-width: 1050px) {

          .engix-ads-footer-cta {
            grid-template-columns:
              1fr;

            gap:
              31px;
          }


          .engix-ads-footer-cta-actions {
            min-width:
              0;

            width:
              max-content;

            flex-direction:
              row;
          }


          .engix-ads-footer-main {
            grid-template-columns:
              repeat(2,1fr);

            gap:
              50px 42px;
          }


          .engix-ads-footer-brand {
            grid-column:
              1 / -1;

            max-width:
              650px;
          }


          .engix-ads-footer-proof {
            grid-template-columns:
              repeat(2,1fr);
          }


          .engix-ads-footer-proof > div:nth-child(2) {
            border-right:
              0;
          }


          .engix-ads-footer-proof > div:nth-child(-n+2) {
            border-bottom:
              1px solid
              rgba(255,255,255,.1);
          }


          .engix-ads-footer-bottom {
            grid-template-columns:
              1fr auto;
          }


          .engix-ads-footer-availability {
            display:
              none;
          }

        }



        /* =====================================================
           FOOTER MOBILE
        ====================================================== */

        @media (max-width: 650px) {

          .engix-ads-footer {
            padding:
              20px 0 23px;
          }


          .engix-ads-footer-cta {
            padding:
              31px 22px;

            gap:
              27px;

            border-radius:
              17px;
          }


          .engix-ads-footer-cta h2 {
            font-size:
              clamp(
                2.35rem,
                11vw,
                3.35rem
              );
          }


          .engix-ads-footer-cta p {
            font-size:
              16px;
          }


          .engix-ads-footer-cta-actions {
            width:
              100%;

            flex-direction:
              column;
          }


          .engix-ads-footer-primary,
          .engix-ads-footer-secondary {
            width:
              100%;

            box-sizing:
              border-box;
          }


          .engix-ads-footer-main {
            grid-template-columns:
              1fr;

            gap:
              41px;

            padding:
              55px 0 46px;
          }


          .engix-ads-footer-brand {
            grid-column:
              auto;

            max-width:
              100%;
          }


          .engix-ads-footer-logo {
            gap:
              8px;
          }


          .engix-ads-footer-logo-icon {
            width:
              45px;

            height:
              45px;

            min-width:
              45px;

            min-height:
              45px;

            max-width:
              45px;

            max-height:
              45px;

            flex-basis:
              45px;
          }


          .engix-ads-footer-logo-image {
            max-width:
              45px;

            max-height:
              45px;
          }


          .engix-ads-footer-logo-name {
            font-size:
              24px;
          }


          .engix-ads-footer-description {
            font-size:
              15px;
          }


          .engix-ads-footer-proof {
            grid-template-columns:
              1fr;
          }


          .engix-ads-footer-proof > div {
            min-height:
              94px;

            border-right:
              0;

            border-bottom:
              1px solid
              rgba(255,255,255,.1);
          }


          .engix-ads-footer-proof > div:nth-child(2) {
            border-bottom:
              1px solid
              rgba(255,255,255,.1);
          }


          .engix-ads-footer-proof > div:last-child {
            border-bottom:
              0;
          }


          .engix-ads-footer-bottom {
            min-height:
              auto;

            padding-top:
              28px;

            grid-template-columns:
              1fr;

            gap:
              15px;
          }


          .engix-ads-footer-bottom-links {
            justify-self:
              start;

            flex-wrap:
              wrap;
          }

        }



        /* =====================================================
           FOOTER VERY SMALL MOBILE
        ====================================================== */

        @media (max-width: 390px) {

          .engix-ads-footer-logo-icon {
            width:
              40px;

            height:
              40px;

            min-width:
              40px;

            min-height:
              40px;

            max-width:
              40px;

            max-height:
              40px;

            flex-basis:
              40px;
          }


          .engix-ads-footer-logo-image {
            max-width:
              40px;

            max-height:
              40px;
          }


          .engix-ads-footer-logo-name {
            font-size:
              22px;
          }


          .engix-ads-footer-contact > a,
          .engix-ads-footer-location {
            grid-template-columns:
              37px
              minmax(0,1fr);
          }

        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1050px) {

          .engix-ads-hero-grid {
            grid-template-columns:
              1fr;

            gap: 48px;
          }


          .engix-ads-hero-copy {
            max-width: 920px;
          }


          .engix-hero-form-wrap {
            max-width: 780px;
          }


          .engix-ads-proof-grid {
            grid-template-columns:
              repeat(2,1fr);
          }


          .engix-ads-proof-grid article:nth-child(2) {
            border-right: 0;
          }


          .engix-ads-proof-grid article:nth-child(-n+2) {
            border-bottom:
              1px solid var(--line);
          }


          .engix-ads-results-grid {
            grid-template-columns:
              1fr;
          }


          .engix-ads-results-grid article {
            min-height: auto;
          }


          .engix-ads-web-grid,
          .engix-ads-why-grid,
          .engix-ads-partnership-grid,
          .engix-ads-bottom-grid,
          .engix-ads-faq-grid {
            grid-template-columns:
              1fr;

            gap: 48px;
          }


          .engix-ads-bottom-copy {
            position: static;
          }


          .engix-ads-footer-main {
            grid-template-columns:
              1fr 1fr;
          }


          .engix-ads-footer-main > div:first-child {
            grid-column:
              1 / -1;
          }

        }



        /* =====================================================
           MOBILE HEADER
        ====================================================== */

        @media (max-width: 760px) {

          .engix-ads-shell {
            width:
              calc(100% - 32px);
          }


          .engix-ads-header-inner {
            min-height: 66px;

            grid-template-columns:
              1fr auto;
          }


          .engix-ads-nav {
            display: none;
          }


          .engix-ads-header-button {
            min-height: 42px;

            padding:
              0 12px;

            font-size: 11px;
          }


          .engix-ads-header-button svg {
            width: 16px;
          }


          .engix-small-heading,
          .engix-ads-heading > span,
          .engix-lead-heading > span,
          .engix-ads-web-copy > span {
            font-size: 13px;
          }

        }



        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 650px) {

          /*
            HEADER IS ABOUT 66PX.
            HERO STARTS AT 76PX.
            ONLY ABOUT 10PX EXTRA GAP.
          */

          .engix-ads-hero {
            padding:
              76px 0 58px;

            background:

              linear-gradient(
                180deg,
                rgba(255,255,255,.96),
                rgba(255,255,255,.91)
              ),

              url(
                'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=90'
              );

            background-size: cover;

            background-position: center;
          }


          .engix-ads-hero-copy {
            padding-top: 4px;
          }


          .engix-ads-audit-badge {
            padding:
              10px 14px;

            font-size: 13px;
          }


          .engix-ads-hero h1 {
            margin-top: 22px;

            font-size:
              clamp(
                3rem,
                13vw,
                4.6rem
              );
          }


          .engix-ads-hero-description {
            font-size: 18px;

            line-height: 1.65;
          }


          .engix-ads-hero-buttons {
            flex-direction:
              column;
          }


          .engix-ads-primary-button,
          .engix-ads-secondary-button {
            width: 100%;

            box-sizing:
              border-box;
          }


          .engix-ads-hero-points {
            flex-direction:
              column;

            gap: 13px;
          }


          .engix-ads-hero-points > div {
            font-size: 15px;
          }


          .engix-ads-direct-contact {
            flex-direction:
              column;
          }


          .engix-lead-card {
            padding:
              24px 18px;
          }


          .engix-lead-row {
            grid-template-columns:
              1fr;

            gap: 0;
          }


          .engix-lead-heading p {
            font-size: 15px;
          }


          .engix-ads-proof {
            padding-bottom:
              60px;
          }


          .engix-ads-proof-grid {
            grid-template-columns:
              1fr;
          }


          .engix-ads-proof-grid article {
            min-height: 125px;

            border-right: 0;

            border-bottom:
              1px solid var(--line);
          }


          .engix-ads-proof-grid article:last-child {
            border-bottom: 0;
          }


          .engix-ads-intro-image {
            padding:
              10px 0 70px;
          }


          .engix-ads-intro-image-wrap {
            height: 430px;
          }


          .engix-ads-intro-overlay {
            left: 24px;

            right: 24px;

            bottom: 28px;
          }


          .engix-ads-services,
          .engix-ads-process,
          .engix-ads-results,
          .engix-ads-why,
          .engix-ads-partnership,
          .engix-ads-bottom-enquiry,
          .engix-ads-faq {
            padding:
              78px 0;
          }


          .engix-ads-heading p {
            font-size: 17px;
          }


          .engix-ads-services-grid {
            grid-template-columns:
              1fr;
          }


          .engix-ads-services-grid article {
            min-height: auto;

            padding: 27px 22px;
          }


          /*
            KEEP THESE TEXTS LARGE
            EVEN ON MOBILE.
          */

          .engix-service-description,
          .engix-ads-services-grid article > p {
            font-size: 18px;

            line-height: 1.62;
          }


          .engix-ads-service-points {
            grid-template-columns:
              1fr;

            gap: 12px;
          }


          .engix-ads-service-points span {
            font-size: 16px;
          }


          .engix-ads-web {
            padding:
              0 0 78px;
          }


          .engix-ads-web-image,
          .engix-ads-web-image img {
            min-height: 340px;
          }


          .engix-ads-web-copy {
            padding:
              36px 22px;
          }


          .engix-ads-web-copy > p {
            font-size: 17px;
          }


          .engix-ads-web-copy > div span {
            font-size: 16px;
          }


          .engix-ads-process-list article {
            grid-template-columns:
              50px 1fr;

            gap: 14px;
          }


          .engix-ads-process-list h3 {
            font-size: 21px;
          }


          .engix-ads-process-list p {
            font-size: 17px;
          }


          .engix-ads-results-grid p {
            font-size: 17px;
          }


          .engix-ads-why-list h3 {
            font-size: 21px;
          }


          .engix-ads-why-list p {
            font-size: 17px;
          }


          .engix-ads-partnership-copy {
            padding:
              36px 22px;
          }


          .engix-ads-partnership-copy p {
            font-size: 17px;
          }


          .engix-ads-partnership-image,
          .engix-ads-partnership-image img {
            min-height: 350px;
          }


          .engix-ads-bottom-copy > p {
            font-size: 17px;
          }


          .engix-ads-faq-list summary {
            font-size: 17px;

            min-height: 76px;
          }


          .engix-ads-faq-list details p {
            font-size: 16px;
          }


          .engix-ads-final p {
            font-size: 17px;
          }


          .engix-ads-final-inner > div {
            flex-direction:
              column;
          }


          .engix-ads-final-primary,
          .engix-ads-final-secondary {
            width: 100%;

            box-sizing:
              border-box;
          }


          .engix-ads-footer-main {
            grid-template-columns:
              1fr;

            gap: 36px;
          }


          .engix-ads-footer-main > div:first-child {
            grid-column:
              auto;
          }


          .engix-ads-footer-bottom {
            flex-direction:
              column;

            align-items:
              flex-start;
          }

        }



        /* =====================================================
           VERY SMALL PHONES
        ====================================================== */

        @media (max-width: 400px) {

          .engix-ads-logo span {
            font-size: 31px;
          }


          .engix-ads-logo strong {
            font-size: 20px;
          }


          .engix-ads-header-button {
            padding:
              0 9px;
          }


          .engix-ads-header-button svg {
            display: none;
          }


          .engix-ads-audit-badge {
            font-size: 12px;
          }


          .engix-lead-submit {
            font-size: 13px;
          }

        }

      `})]})}function vw(){return Ft("Privacy Policy"),i.jsxs(i.Fragment,{children:[i.jsxs("main",{className:"engix-legal-page",children:[i.jsx("section",{className:"engix-legal-hero",children:i.jsxs("div",{className:"engix-legal-shell",children:[i.jsx("div",{className:"engix-legal-badge",children:"PRIVACY POLICY"}),i.jsx("h1",{children:"Your privacy matters to us."}),i.jsx("p",{className:"engix-legal-intro",children:"This Privacy Policy explains how Engix Tech Private Limited collects, uses, stores and protects personal information when you visit our website, contact our team, submit an enquiry or engage with our services."}),i.jsxs("div",{className:"engix-legal-meta",children:[i.jsx("span",{children:"Effective date: 22 August 2026"}),i.jsx("span",{children:"Last updated: 22 August 2026"})]})]})}),i.jsx("section",{className:"engix-legal-summary",children:i.jsx("div",{className:"engix-legal-shell",children:i.jsxs("div",{className:"engix-legal-summary-grid",children:[i.jsxs("article",{children:[i.jsx(m1,{size:32}),i.jsx("h3",{children:"Information you provide"}),i.jsx("p",{children:"Contact details, company information, project requirements and other information you choose to submit."})]}),i.jsxs("article",{children:[i.jsx(im,{size:32}),i.jsx("h3",{children:"How we use it"}),i.jsx("p",{children:"To respond to enquiries, provide services, communicate with clients and improve our website and business operations."})]}),i.jsxs("article",{children:[i.jsx(Pt,{size:32}),i.jsx("h3",{children:"How we protect it"}),i.jsx("p",{children:"We use reasonable technical and organizational safeguards intended to protect personal information from unauthorized access or misuse."})]})]})})}),i.jsx("section",{className:"engix-legal-content",children:i.jsx("div",{className:"engix-legal-shell",children:i.jsxs("div",{className:"engix-legal-layout",children:[i.jsxs("aside",{className:"engix-legal-sidebar",children:[i.jsx("span",{children:"ON THIS PAGE"}),i.jsx("a",{href:"#about",children:"About this policy"}),i.jsx("a",{href:"#collect",children:"Information we collect"}),i.jsx("a",{href:"#use",children:"How we use information"}),i.jsx("a",{href:"#legal",children:"Lawful processing"}),i.jsx("a",{href:"#cookies",children:"Cookies & analytics"}),i.jsx("a",{href:"#sharing",children:"Information sharing"}),i.jsx("a",{href:"#retention",children:"Data retention"}),i.jsx("a",{href:"#security",children:"Security"}),i.jsx("a",{href:"#rights",children:"Your choices & rights"}),i.jsx("a",{href:"#international",children:"International engagements"}),i.jsx("a",{href:"#children",children:"Children"}),i.jsx("a",{href:"#changes",children:"Policy updates"}),i.jsx("a",{href:"#contact",children:"Contact us"})]}),i.jsxs("div",{className:"engix-legal-article",children:[i.jsxs("section",{id:"about",children:[i.jsx("span",{className:"engix-legal-number",children:"01"}),i.jsx("h2",{children:"About this Privacy Policy"}),i.jsx("p",{children:"This Privacy Policy applies to the website operated by Engix Tech Private Limited (“Engix”, “we”, “our” or “us”), including engix.world and pages operated under that domain."}),i.jsx("p",{children:"It applies to personal information collected through website forms, email, telephone, WhatsApp, consultations and other business communications with Engix."}),i.jsx("p",{children:"By using our website or voluntarily providing information to us, you acknowledge the practices described in this Privacy Policy."})]}),i.jsxs("section",{id:"collect",children:[i.jsx("span",{className:"engix-legal-number",children:"02"}),i.jsx("h2",{children:"Information we may collect"}),i.jsx("p",{children:"The information we collect depends on how you interact with Engix."}),i.jsx("h3",{children:"Information you provide directly"}),i.jsxs("ul",{children:[i.jsx("li",{children:"First name and last name."}),i.jsx("li",{children:"Business email address."}),i.jsx("li",{children:"Telephone or WhatsApp number."}),i.jsx("li",{children:"Company or organization name."}),i.jsx("li",{children:"Job role or business function."}),i.jsx("li",{children:"Country or region."}),i.jsx("li",{children:"Services you are interested in."}),i.jsx("li",{children:"Project budget or expected timeline, where voluntarily provided."}),i.jsx("li",{children:"Messages, project requirements and business enquiries."}),i.jsx("li",{children:"Information included in emails, calls or other communication with us."})]}),i.jsx("h3",{children:"Information collected automatically"}),i.jsx("p",{children:"When analytics, advertising or similar technologies are enabled, we may receive technical information such as:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"IP address."}),i.jsx("li",{children:"Browser and device information."}),i.jsx("li",{children:"Pages viewed and approximate visit duration."}),i.jsx("li",{children:"Referring website or advertising source."}),i.jsx("li",{children:"Interactions with forms, buttons, calls or WhatsApp links."}),i.jsx("li",{children:"General geographic information derived from technical data."})]})]}),i.jsxs("section",{id:"use",children:[i.jsx("span",{className:"engix-legal-number",children:"03"}),i.jsx("h2",{children:"How we use your information"}),i.jsx("p",{children:"We may use personal information for legitimate business purposes including:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Responding to enquiries and consultation requests."}),i.jsx("li",{children:"Understanding your project or business requirements."}),i.jsx("li",{children:"Preparing proposals, estimates or commercial discussions."}),i.jsx("li",{children:"Providing software, marketing, website, AI, cloud and related technology services."}),i.jsx("li",{children:"Managing ongoing client relationships."}),i.jsx("li",{children:"Providing customer or technical support."}),i.jsx("li",{children:"Communicating about requested services."}),i.jsx("li",{children:"Improving our website, services and user experience."}),i.jsx("li",{children:"Measuring advertising and marketing performance."}),i.jsx("li",{children:"Detecting fraud, misuse or security issues."}),i.jsx("li",{children:"Meeting legal, regulatory, tax or accounting obligations."})]}),i.jsx("p",{children:"We do not sell your personal information to third parties."})]}),i.jsxs("section",{id:"legal",children:[i.jsx("span",{className:"engix-legal-number",children:"04"}),i.jsx("h2",{children:"Lawful processing"}),i.jsx("p",{children:"Engix processes personal information for lawful business purposes, including responding to requests initiated by you, providing requested services, administering business relationships, complying with legal obligations and, where applicable, processing information with your consent."}),i.jsx("p",{children:"Where consent is used as the basis for a particular activity, you may contact us to withdraw that consent for future processing, subject to applicable law and any information we are required to retain."})]}),i.jsxs("section",{id:"cookies",children:[i.jsx("span",{className:"engix-legal-number",children:"05"}),i.jsx("h2",{children:"Cookies, analytics and advertising"}),i.jsx("p",{children:"Our website may use cookies and similar technologies to support website functionality, understand visitor behavior and measure marketing performance."}),i.jsx("p",{children:"We may use services such as Google Analytics, Google Tag Manager and Google Ads measurement tools. These services may process technical information relating to website visits and interactions according to their own terms and privacy practices."}),i.jsx("p",{children:"If advertising conversion tracking is enabled, we may measure actions such as:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Enquiry form submissions."}),i.jsx("li",{children:"Telephone link clicks."}),i.jsx("li",{children:"WhatsApp link clicks."}),i.jsx("li",{children:"Consultation or project enquiry actions."})]}),i.jsx("p",{children:"You may control cookies through your browser settings and, where available, website cookie controls. Disabling certain technologies may affect some website functionality or measurement."})]}),i.jsxs("section",{id:"sharing",children:[i.jsx("span",{className:"engix-legal-number",children:"06"}),i.jsx("h2",{children:"When information may be shared"}),i.jsx("p",{children:"We may share information only where reasonably necessary for business operations, service delivery or legal compliance."}),i.jsxs("ul",{children:[i.jsx("li",{children:"Hosting and cloud infrastructure providers."}),i.jsx("li",{children:"Email and communication service providers."}),i.jsx("li",{children:"Website analytics and advertising platforms."}),i.jsx("li",{children:"Payment providers where payment services are involved."}),i.jsx("li",{children:"Professional advisers such as accountants, legal advisers or auditors where required."}),i.jsx("li",{children:"Contractors or service partners involved in delivering an agreed client engagement."}),i.jsx("li",{children:"Government, regulatory or law-enforcement authorities where disclosure is legally required."})]}),i.jsx("p",{children:"Service providers are expected to use information only for the purposes for which it is provided and subject to applicable contractual and legal requirements."})]}),i.jsxs("section",{id:"retention",children:[i.jsx("span",{className:"engix-legal-number",children:"07"}),i.jsx("h2",{children:"How long we retain information"}),i.jsx("p",{children:"We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, including business communication, service delivery, record keeping, dispute resolution and legal or regulatory requirements."}),i.jsx("p",{children:"Enquiries that do not result in a business engagement may be retained for a reasonable period so that we can manage follow-up communication and maintain appropriate business records."}),i.jsx("p",{children:"Client records may be retained for longer where reasonably necessary for contractual, accounting, legal, security or compliance purposes."})]}),i.jsxs("section",{id:"security",children:[i.jsx("span",{className:"engix-legal-number",children:"08"}),i.jsx("h2",{children:"Information security"}),i.jsx("p",{children:"We use reasonable administrative, organizational and technical safeguards designed to protect personal information against unauthorized access, loss, alteration, disclosure or misuse."}),i.jsx("p",{children:"These safeguards may include controlled access, secure server configurations, HTTPS encryption, authentication controls and appropriate access restrictions."}),i.jsx("p",{children:"No internet transmission or electronic storage method can be guaranteed to be completely secure, and therefore we cannot guarantee absolute security."})]}),i.jsxs("section",{id:"rights",children:[i.jsx("span",{className:"engix-legal-number",children:"09"}),i.jsx("h2",{children:"Your choices and rights"}),i.jsx("p",{children:"Subject to applicable law, you may contact Engix regarding personal information that we hold about you."}),i.jsxs("ul",{children:[i.jsx("li",{children:"Information about how your personal data is used."}),i.jsx("li",{children:"Correction of inaccurate or incomplete information."}),i.jsx("li",{children:"Deletion of information where appropriate."}),i.jsx("li",{children:"Withdrawal of consent for future processing where consent is the applicable basis."}),i.jsx("li",{children:"That we stop certain marketing communication."})]}),i.jsx("p",{children:"We may need to verify your identity before processing certain privacy-related requests."})]}),i.jsxs("section",{id:"international",children:[i.jsx("span",{className:"engix-legal-number",children:"10"}),i.jsx("h2",{children:"International engagements"}),i.jsx("p",{children:"Engix operates from India and may work with clients, technology providers and service providers located in other countries."}),i.jsx("p",{children:"As a result, information connected with an international engagement may be processed or stored in jurisdictions outside your country. Where applicable, we take reasonable steps to handle such information in accordance with applicable data-protection requirements and contractual obligations."})]}),i.jsxs("section",{id:"children",children:[i.jsx("span",{className:"engix-legal-number",children:"11"}),i.jsx("h2",{children:"Children's information"}),i.jsx("p",{children:"Engix's website and services are primarily intended for businesses and professional users."}),i.jsx("p",{children:"We do not knowingly seek to collect personal information from children through our business enquiry forms. If you believe a child has submitted personal information to us inappropriately, please contact us so that we can review the matter."})]}),i.jsxs("section",{id:"changes",children:[i.jsx("span",{className:"engix-legal-number",children:"12"}),i.jsx("h2",{children:"Changes to this policy"}),i.jsx("p",{children:"We may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices or legal requirements."}),i.jsx("p",{children:"The latest version will be published on this page with an updated effective or revision date."})]}),i.jsxs("section",{id:"contact",children:[i.jsx("span",{className:"engix-legal-number",children:"13"}),i.jsx("h2",{children:"Contact Engix"}),i.jsx("p",{children:"For questions about this Privacy Policy or requests relating to personal information, contact:"}),i.jsxs("div",{className:"engix-legal-contact-card",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Engix Tech Private Limited"}),i.jsx("span",{children:"Varanasi, Uttar Pradesh, India"})]}),i.jsxs("a",{href:"mailto:hello@engix.world",children:[i.jsx(zt,{size:21}),"hello@engix.world"]}),i.jsxs("a",{href:"tel:+917355985134",children:[i.jsx(Rd,{size:21}),"+91 7355985134"]})]})]})]})]})})}),i.jsx("section",{className:"engix-legal-bottom",children:i.jsxs("div",{className:"engix-legal-shell",children:[i.jsx(sm,{size:28}),i.jsxs("div",{children:[i.jsx("h3",{children:"Have a privacy question?"}),i.jsx("p",{children:"Contact our team at hello@engix.world and we will review your request."})]}),i.jsx("a",{href:"mailto:hello@engix.world",children:"Contact Engix"})]})})]}),i.jsx("style",{children:`

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 30px;
        }


        .engix-legal-page {
          --ink: #111318;
          --muted: #565c63;
          --line: #dedfe2;
          --soft: #fafaf8;
          --blue: #e3effc;
          --blue-deep: #285e8d;

          background: #ffffff;

          color: var(--ink);
        }


        .engix-legal-shell {
          width:
            min(
              1180px,
              calc(100% - 48px)
            );

          margin: 0 auto;
        }


        /* HERO */

        .engix-legal-hero {
          padding:
            90px 0 75px;

          background:
            linear-gradient(
              180deg,
              #ffffff,
              #fafaf8
            );

          border-bottom:
            1px solid var(--line);
        }


        .engix-legal-badge {
          width: max-content;

          padding:
            9px 13px;

          border-radius: 999px;

          background: var(--blue);

          color: var(--blue-deep);

          font-size: 14px;

          font-weight: 800;

          letter-spacing: .08em;
        }


        .engix-legal-hero h1 {
          max-width: 850px;

          margin:
            22px 0 0;

          font-size:
            clamp(
              3.4rem,
              6vw,
              6rem
            );

          line-height: .98;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-legal-intro {
          max-width: 850px;

          margin:
            25px 0 0;

          color: var(--muted);

          font-size:
            clamp(
              1.15rem,
              1.6vw,
              1.4rem
            );

          line-height: 1.7;
        }


        .engix-legal-meta {
          display: flex;

          flex-wrap: wrap;

          gap:
            10px 25px;

          margin-top: 30px;

          color: #747980;

          font-size: 14px;
        }


        /* SUMMARY */

        .engix-legal-summary {
          padding:
            55px 0;

          background: white;
        }


        .engix-legal-summary-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 14px;
        }


        .engix-legal-summary-grid article {
          padding: 28px;

          border:
            1px solid var(--line);

          border-radius: 15px;
        }


        .engix-legal-summary-grid svg {
          color: var(--blue-deep);
        }


        .engix-legal-summary-grid h3 {
          margin:
            20px 0 9px;

          font-size: 21px;
        }


        .engix-legal-summary-grid p {
          margin: 0;

          color: var(--muted);

          font-size: 16px;

          line-height: 1.65;
        }


        /* CONTENT */

        .engix-legal-content {
          padding:
            45px 0 100px;

          background: white;
        }


        .engix-legal-layout {
          display: grid;

          grid-template-columns:
            250px minmax(0,1fr);

          gap: 80px;

          align-items: start;
        }


        .engix-legal-sidebar {
          position: sticky;

          top: 30px;

          display: flex;

          flex-direction: column;

          gap: 11px;

          padding:
            24px 0;

          border-top:
            1px solid var(--line);

          border-bottom:
            1px solid var(--line);
        }


        .engix-legal-sidebar > span {
          margin-bottom: 8px;

          color: var(--blue-deep);

          font-size: 12px;

          font-weight: 800;

          letter-spacing: .08em;
        }


        .engix-legal-sidebar a {
          color: #62676e;

          text-decoration: none;

          font-size: 14px;

          line-height: 1.4;
        }


        .engix-legal-sidebar a:hover {
          color: var(--ink);
        }


        /* ARTICLE */

        .engix-legal-article {
          max-width: 790px;
        }


        .engix-legal-article section {
          padding:
            0 0 55px;

          margin-bottom: 55px;

          border-bottom:
            1px solid var(--line);
        }


        .engix-legal-number {
          display: block;

          margin-bottom: 12px;

          color: var(--blue-deep);

          font-size: 14px;

          font-weight: 800;
        }


        .engix-legal-article h2 {
          margin:
            0 0 22px;

          font-size:
            clamp(
              2rem,
              3.4vw,
              3.2rem
            );

          line-height: 1.05;

          letter-spacing: -.04em;
        }


        .engix-legal-article h3 {
          margin:
            28px 0 10px;

          font-size: 21px;

          line-height: 1.3;
        }


        .engix-legal-article p {
          margin:
            0 0 17px;

          color: #565c63;

          font-size: 17px;

          line-height: 1.78;
        }


        .engix-legal-article ul {
          margin:
            18px 0 25px;

          padding-left: 23px;
        }


        .engix-legal-article li {
          margin-bottom: 10px;

          color: #565c63;

          font-size: 17px;

          line-height: 1.65;
        }


        /* CONTACT */

        .engix-legal-contact-card {
          margin-top: 28px;

          padding: 28px;

          display: grid;

          gap: 18px;

          border:
            1px solid var(--line);

          border-radius: 15px;

          background: var(--soft);
        }


        .engix-legal-contact-card strong,
        .engix-legal-contact-card span {
          display: block;
        }


        .engix-legal-contact-card strong {
          font-size: 18px;
        }


        .engix-legal-contact-card span {
          margin-top: 5px;

          color: var(--muted);

          font-size: 15px;
        }


        .engix-legal-contact-card a {
          width: max-content;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          color: var(--ink);

          text-decoration: none;

          font-size: 16px;

          font-weight: 650;
        }


        /* BOTTOM */

        .engix-legal-bottom {
          padding:
            45px 0;

          background: var(--blue);
        }


        .engix-legal-bottom .engix-legal-shell {
          display: grid;

          grid-template-columns:
            auto 1fr auto;

          gap: 20px;

          align-items: center;
        }


        .engix-legal-bottom svg {
          color: var(--blue-deep);
        }


        .engix-legal-bottom h3 {
          margin: 0;

          font-size: 21px;
        }


        .engix-legal-bottom p {
          margin:
            5px 0 0;

          color: #526272;

          font-size: 15px;
        }


        .engix-legal-bottom a {
          min-height: 48px;

          padding:
            0 18px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          border-radius: 8px;

          background: var(--ink);

          color: white;

          text-decoration: none;

          font-size: 14px;

          font-weight: 700;
        }


        @media(max-width:900px) {

          .engix-legal-layout {
            grid-template-columns: 1fr;

            gap: 35px;
          }


          .engix-legal-sidebar {
            display: none;
          }


          .engix-legal-article {
            max-width: 100%;
          }

        }


        @media(max-width:650px) {

          .engix-legal-shell {
            width:
              calc(100% - 32px);
          }


          .engix-legal-hero {
            padding:
              55px 0 50px;
          }


          .engix-legal-summary-grid {
            grid-template-columns: 1fr;
          }


          .engix-legal-content {
            padding:
              30px 0 70px;
          }


          .engix-legal-article p,
          .engix-legal-article li {
            font-size: 16px;
          }


          .engix-legal-bottom .engix-legal-shell {
            grid-template-columns:
              1fr;

            align-items: start;
          }


          .engix-legal-bottom a {
            width: 100%;

            box-sizing: border-box;
          }

        }

      `})]})}function bw(){return Ft("Terms & Conditions"),i.jsxs(i.Fragment,{children:[i.jsxs("main",{className:"engix-terms-page",children:[i.jsx("section",{className:"engix-terms-hero",children:i.jsxs("div",{className:"engix-terms-shell",children:[i.jsx("span",{className:"engix-terms-badge",children:"TERMS & CONDITIONS"}),i.jsx("h1",{children:"Clear terms for using Engix digital services."}),i.jsx("p",{children:"These Terms & Conditions govern your use of the Engix website and establish general terms relating to enquiries, proposals and services offered by Engix Tech Private Limited."}),i.jsxs("div",{className:"engix-terms-meta",children:[i.jsx("span",{children:"Effective date: 22 August 2026"}),i.jsx("span",{children:"Last updated: 22 August 2026"})]})]})}),i.jsx("section",{className:"engix-terms-summary",children:i.jsx("div",{className:"engix-terms-shell",children:i.jsxs("div",{className:"engix-terms-summary-grid",children:[i.jsxs("article",{children:[i.jsx(T0,{size:32}),i.jsx("h3",{children:"Website use"}),i.jsx("p",{children:"You may use the Engix website for lawful informational and business purposes."})]}),i.jsxs("article",{children:[i.jsx(em,{size:32}),i.jsx("h3",{children:"Client engagements"}),i.jsx("p",{children:"Project-specific scope, fees and timelines are governed by the proposal, agreement or statement of work accepted by the client."})]}),i.jsxs("article",{children:[i.jsx(a1,{size:32}),i.jsx("h3",{children:"Fair commercial terms"}),i.jsx("p",{children:"Our general website terms do not replace written contractual terms agreed for a specific project or service."})]})]})})}),i.jsx("section",{className:"engix-terms-content",children:i.jsx("div",{className:"engix-terms-shell",children:i.jsxs("div",{className:"engix-terms-layout",children:[i.jsxs("aside",{className:"engix-terms-sidebar",children:[i.jsx("span",{children:"ON THIS PAGE"}),i.jsx("a",{href:"#acceptance",children:"Acceptance"}),i.jsx("a",{href:"#company",children:"About Engix"}),i.jsx("a",{href:"#website",children:"Website use"}),i.jsx("a",{href:"#services",children:"Services"}),i.jsx("a",{href:"#enquiries",children:"Enquiries & proposals"}),i.jsx("a",{href:"#payments",children:"Fees & payments"}),i.jsx("a",{href:"#client",children:"Client responsibilities"}),i.jsx("a",{href:"#ip",children:"Intellectual property"}),i.jsx("a",{href:"#thirdparty",children:"Third-party services"}),i.jsx("a",{href:"#marketing",children:"Marketing services"}),i.jsx("a",{href:"#warranties",children:"Warranties"}),i.jsx("a",{href:"#liability",children:"Liability"}),i.jsx("a",{href:"#termination",children:"Termination"}),i.jsx("a",{href:"#law",children:"Governing law"}),i.jsx("a",{href:"#changes",children:"Updates"}),i.jsx("a",{href:"#contact",children:"Contact"})]}),i.jsxs("div",{className:"engix-terms-article",children:[i.jsxs("section",{id:"acceptance",children:[i.jsx("span",{className:"engix-terms-number",children:"01"}),i.jsx("h2",{children:"Acceptance of these terms"}),i.jsx("p",{children:"These Terms & Conditions (“Terms”) apply to your use of the Engix Tech Private Limited website, including engix.world and related pages operated by Engix."}),i.jsx("p",{children:"By accessing or using this website, you agree to use it in accordance with these Terms and applicable law."}),i.jsx("p",{children:"If you do not agree with these Terms, you should discontinue use of the website."})]}),i.jsxs("section",{id:"company",children:[i.jsx("span",{className:"engix-terms-number",children:"02"}),i.jsx("h2",{children:"About Engix"}),i.jsx("p",{children:"Engix Tech Private Limited is a technology company providing services that may include software development, web application development, website development, mobile applications, artificial intelligence solutions, automation, cloud and DevOps services, UI/UX design, digital marketing and related technology services."}),i.jsx("p",{children:"Information published on the website is provided for general business and informational purposes."})]}),i.jsxs("section",{id:"website",children:[i.jsx("span",{className:"engix-terms-number",children:"03"}),i.jsx("h2",{children:"Permitted use of the website"}),i.jsx("p",{children:"You may access and use our website for lawful personal, professional and business purposes."}),i.jsx("p",{children:"You must not:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Attempt to gain unauthorized access to our systems, servers or accounts."}),i.jsx("li",{children:"Interfere with the security, integrity or operation of the website."}),i.jsx("li",{children:"Use automated tools in a way that causes unreasonable load or disruption."}),i.jsx("li",{children:"Upload or transmit malicious software, viruses or harmful code."}),i.jsx("li",{children:"Use the website for fraudulent, unlawful or abusive purposes."}),i.jsx("li",{children:"Copy, reproduce or commercially exploit Engix content without appropriate authorization."})]})]}),i.jsxs("section",{id:"services",children:[i.jsx("span",{className:"engix-terms-number",children:"04"}),i.jsx("h2",{children:"Services and project engagements"}),i.jsx("p",{children:"Website descriptions of Engix capabilities are general descriptions and do not constitute a binding commitment to provide any particular service, result, feature or timeline."}),i.jsx("p",{children:"Specific project work will normally be governed by a separate proposal, quotation, statement of work, service agreement, email confirmation or other written commercial arrangement."}),i.jsx("p",{children:"Where project-specific contractual terms conflict with these general website Terms, the project-specific written agreement will govern that engagement."})]}),i.jsxs("section",{id:"enquiries",children:[i.jsx("span",{className:"engix-terms-number",children:"05"}),i.jsx("h2",{children:"Enquiries, consultations and proposals"}),i.jsx("p",{children:"Submitting an enquiry or booking an initial consultation does not automatically create a client-service relationship or bind Engix to undertake a project."}),i.jsx("p",{children:"A business relationship is established only when the relevant scope, commercial terms and other required conditions have been mutually accepted."}),i.jsx("p",{children:"Proposals, estimates and quotations may be subject to validity periods and assumptions stated in the relevant communication."})]}),i.jsxs("section",{id:"payments",children:[i.jsx("span",{className:"engix-terms-number",children:"06"}),i.jsx("h2",{children:"Fees, invoices and payments"}),i.jsx("p",{children:"Fees for professional services are determined based on the project scope, engagement model and written commercial agreement."}),i.jsx("p",{children:"Payment schedules, deposits, milestones, taxes and due dates will be specified in the applicable proposal, invoice or agreement."}),i.jsx("p",{children:"Unless otherwise agreed in writing, work may be paused where invoices remain overdue or agreed payment requirements are not met."})]}),i.jsxs("section",{id:"client",children:[i.jsx("span",{className:"engix-terms-number",children:"07"}),i.jsx("h2",{children:"Client responsibilities"}),i.jsx("p",{children:"Successful delivery may depend on timely cooperation from the client."}),i.jsxs("ul",{children:[i.jsx("li",{children:"Providing accurate project requirements."}),i.jsx("li",{children:"Providing required content, branding, credentials and business information."}),i.jsx("li",{children:"Giving timely approvals and feedback."}),i.jsx("li",{children:"Ensuring they have rights to materials supplied to Engix."}),i.jsx("li",{children:"Ensuring business claims and supplied content comply with applicable law."}),i.jsx("li",{children:"Maintaining appropriate access to third-party platforms required for delivery."})]})]}),i.jsxs("section",{id:"ip",children:[i.jsx("span",{className:"engix-terms-number",children:"08"}),i.jsx("h2",{children:"Intellectual property"}),i.jsx("h3",{children:"Engix materials"}),i.jsx("p",{children:"The Engix name, branding, website design, website text, graphics, layouts, software, processes and other materials owned by Engix are protected by applicable intellectual property laws."}),i.jsx("h3",{children:"Client project work"}),i.jsx("p",{children:"Ownership and licensing of project deliverables will be determined by the applicable proposal or client agreement."}),i.jsx("p",{children:"Unless otherwise agreed, ownership transfer of specifically commissioned deliverables may be subject to full payment of all applicable fees."}),i.jsx("h3",{children:"Third-party components"}),i.jsx("p",{children:"Projects may include open-source software, third-party libraries, licensed assets, cloud services, APIs or other materials that remain subject to their respective licenses and terms."})]}),i.jsxs("section",{id:"thirdparty",children:[i.jsx("span",{className:"engix-terms-number",children:"09"}),i.jsx("h2",{children:"Third-party platforms and services"}),i.jsx("p",{children:"Engix projects may integrate or rely on third-party services such as hosting providers, cloud platforms, advertising networks, payment gateways, analytics platforms, domain registrars, messaging services, application stores and APIs."}),i.jsx("p",{children:"These third-party services operate under their own terms, pricing, availability and policies."}),i.jsx("p",{children:"Engix is not responsible for outages, account restrictions, pricing changes or service changes caused solely by third-party providers beyond our reasonable control."})]}),i.jsxs("section",{id:"marketing",children:[i.jsx("span",{className:"engix-terms-number",children:"10"}),i.jsx("h2",{children:"Digital marketing and advertising services"}),i.jsx("p",{children:"Where Engix provides SEO, advertising, social media or digital marketing services, performance can be influenced by many external factors including competition, market demand, advertising budgets, search-engine algorithms, platform policies, website quality and customer behavior."}),i.jsx("p",{children:"Statements about expected timelines, growth opportunities or campaign objectives represent planning expectations and should not be interpreted as guarantees of a specific ranking, revenue, number of leads, customer acquisition result or advertising return."}),i.jsx("p",{children:"Advertising expenditure paid to platforms such as Google or Meta may be separate from Engix professional service fees unless expressly stated otherwise."})]}),i.jsxs("section",{id:"warranties",children:[i.jsx("span",{className:"engix-terms-number",children:"11"}),i.jsx("h2",{children:"Website information and warranties"}),i.jsx("p",{children:"We aim to keep information on our website accurate and useful, but website content may occasionally contain errors, become outdated or require revision."}),i.jsx("p",{children:"The website is provided on an “as available” basis. To the extent permitted by applicable law, Engix does not make warranties that the website will always be uninterrupted, completely error-free or suitable for every particular purpose."})]}),i.jsxs("section",{id:"liability",children:[i.jsx("span",{className:"engix-terms-number",children:"12"}),i.jsx("h2",{children:"Limitation of liability"}),i.jsx("p",{children:"To the extent permitted by applicable law, Engix will not be liable for indirect, incidental, special or consequential loss arising solely from the use or inability to use this website."}),i.jsx("p",{children:"Liability relating to paid professional services will be governed by the applicable client agreement, proposal or statement of work."}),i.jsx("p",{children:"Nothing in these Terms is intended to exclude liability that cannot lawfully be excluded under applicable law."})]}),i.jsxs("section",{id:"termination",children:[i.jsx("span",{className:"engix-terms-number",children:"13"}),i.jsx("h2",{children:"Suspension or termination"}),i.jsx("p",{children:"We may restrict access to our website or services where reasonably necessary for security, misuse prevention, legal compliance or protection of Engix systems and users."}),i.jsx("p",{children:"Termination or suspension of individual client projects will be governed by the terms agreed for that engagement."})]}),i.jsxs("section",{id:"law",children:[i.jsx("span",{className:"engix-terms-number",children:"14"}),i.jsx("h2",{children:"Governing law"}),i.jsx("p",{children:"These general website Terms are governed by the laws of India, subject to any different jurisdiction or dispute-resolution provisions contained in a specific written client agreement."})]}),i.jsxs("section",{id:"changes",children:[i.jsx("span",{className:"engix-terms-number",children:"15"}),i.jsx("h2",{children:"Changes to these Terms"}),i.jsx("p",{children:"Engix may update these Terms to reflect changes in our services, website, business practices or applicable requirements."}),i.jsx("p",{children:"Updated Terms will be published on this page together with the applicable revision date."})]}),i.jsxs("section",{id:"contact",children:[i.jsx("span",{className:"engix-terms-number",children:"16"}),i.jsx("h2",{children:"Contact us"}),i.jsx("p",{children:"Questions regarding these Terms & Conditions may be directed to:"}),i.jsxs("div",{className:"engix-terms-contact",children:[i.jsx("strong",{children:"Engix Tech Private Limited"}),i.jsx("span",{children:"Varanasi, Uttar Pradesh, India"}),i.jsxs("a",{href:"mailto:hello@engix.world",children:[i.jsx(zt,{size:21}),"hello@engix.world"]}),i.jsxs("a",{href:"tel:+917355985134",children:[i.jsx(Pt,{size:21}),"+91 7355985134"]})]})]})]})]})})}),i.jsx("section",{className:"engix-terms-notice",children:i.jsxs("div",{className:"engix-terms-shell",children:[i.jsx(nm,{size:29}),i.jsxs("div",{children:[i.jsx("h3",{children:"Project agreements take priority"}),i.jsx("p",{children:"Specific Engix client engagements may have their own proposal, statement of work or service agreement. Those agreed terms govern the relevant project."})]})]})})]}),i.jsx("style",{children:`

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 30px;
        }


        .engix-terms-page {
          --ink: #111318;
          --muted: #575d64;
          --line: #dedfe2;
          --soft: #fafaf8;
          --blue: #e3effc;
          --blue-deep: #285e8d;

          background: #ffffff;

          color: var(--ink);
        }


        .engix-terms-shell {
          width:
            min(
              1180px,
              calc(100% - 48px)
            );

          margin: 0 auto;
        }


        /* HERO */

        .engix-terms-hero {
          padding:
            90px 0 75px;

          background:
            linear-gradient(
              180deg,
              #ffffff,
              #fafaf8
            );

          border-bottom:
            1px solid var(--line);
        }


        .engix-terms-badge {
          display: block;

          width: max-content;

          padding:
            9px 13px;

          border-radius: 999px;

          background: var(--blue);

          color: var(--blue-deep);

          font-size: 14px;

          font-weight: 800;

          letter-spacing: .08em;
        }


        .engix-terms-hero h1 {
          max-width: 900px;

          margin:
            22px 0 0;

          font-size:
            clamp(
              3.4rem,
              6vw,
              6rem
            );

          line-height: .98;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-terms-hero > .engix-terms-shell > p {
          max-width: 850px;

          margin:
            25px 0 0;

          color: var(--muted);

          font-size:
            clamp(
              1.15rem,
              1.6vw,
              1.4rem
            );

          line-height: 1.7;
        }


        .engix-terms-meta {
          display: flex;

          flex-wrap: wrap;

          gap:
            10px 25px;

          margin-top: 30px;

          color: #747980;

          font-size: 14px;
        }


        /* SUMMARY */

        .engix-terms-summary {
          padding:
            55px 0;

          background: white;
        }


        .engix-terms-summary-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 14px;
        }


        .engix-terms-summary-grid article {
          padding: 28px;

          border:
            1px solid var(--line);

          border-radius: 15px;
        }


        .engix-terms-summary-grid svg {
          color:
            var(--blue-deep);
        }


        .engix-terms-summary-grid h3 {
          margin:
            20px 0 9px;

          font-size: 21px;
        }


        .engix-terms-summary-grid p {
          margin: 0;

          color: var(--muted);

          font-size: 16px;

          line-height: 1.65;
        }


        /* LAYOUT */

        .engix-terms-content {
          padding:
            45px 0 100px;
        }


        .engix-terms-layout {
          display: grid;

          grid-template-columns:
            250px minmax(0,1fr);

          gap: 80px;

          align-items: start;
        }


        .engix-terms-sidebar {
          position: sticky;

          top: 30px;

          padding:
            24px 0;

          display: flex;

          flex-direction: column;

          gap: 11px;

          border-top:
            1px solid var(--line);

          border-bottom:
            1px solid var(--line);
        }


        .engix-terms-sidebar > span {
          margin-bottom: 8px;

          color: var(--blue-deep);

          font-size: 12px;

          font-weight: 800;

          letter-spacing: .08em;
        }


        .engix-terms-sidebar a {
          color: #62676e;

          text-decoration: none;

          font-size: 14px;

          line-height: 1.4;
        }


        .engix-terms-sidebar a:hover {
          color: var(--ink);
        }


        /* ARTICLE */

        .engix-terms-article {
          max-width: 790px;
        }


        .engix-terms-article section {
          padding-bottom: 55px;

          margin-bottom: 55px;

          border-bottom:
            1px solid var(--line);
        }


        .engix-terms-number {
          display: block;

          margin-bottom: 12px;

          color: var(--blue-deep);

          font-size: 14px;

          font-weight: 800;
        }


        .engix-terms-article h2 {
          margin:
            0 0 22px;

          font-size:
            clamp(
              2rem,
              3.4vw,
              3.2rem
            );

          line-height: 1.05;

          letter-spacing: -.04em;
        }


        .engix-terms-article h3 {
          margin:
            28px 0 10px;

          font-size: 21px;
        }


        .engix-terms-article p {
          margin:
            0 0 17px;

          color: var(--muted);

          font-size: 17px;

          line-height: 1.78;
        }


        .engix-terms-article ul {
          margin:
            18px 0 25px;

          padding-left: 23px;
        }


        .engix-terms-article li {
          margin-bottom: 10px;

          color: var(--muted);

          font-size: 17px;

          line-height: 1.65;
        }


        /* CONTACT */

        .engix-terms-contact {
          margin-top: 28px;

          padding: 28px;

          display: grid;

          gap: 14px;

          border:
            1px solid var(--line);

          border-radius: 15px;

          background: var(--soft);
        }


        .engix-terms-contact strong,
        .engix-terms-contact span {
          display: block;
        }


        .engix-terms-contact strong {
          font-size: 18px;
        }


        .engix-terms-contact span {
          color: var(--muted);

          font-size: 15px;
        }


        .engix-terms-contact a {
          width: max-content;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          color: var(--ink);

          text-decoration: none;

          font-size: 16px;

          font-weight: 650;
        }


        /* NOTICE */

        .engix-terms-notice {
          padding:
            42px 0;

          background:
            var(--blue);
        }


        .engix-terms-notice .engix-terms-shell {
          display: grid;

          grid-template-columns:
            auto 1fr;

          gap: 18px;

          align-items: start;
        }


        .engix-terms-notice svg {
          color:
            var(--blue-deep);
        }


        .engix-terms-notice h3 {
          margin: 0;

          font-size: 21px;
        }


        .engix-terms-notice p {
          max-width: 800px;

          margin:
            6px 0 0;

          color: #536372;

          font-size: 15px;

          line-height: 1.65;
        }


        @media(max-width:900px) {

          .engix-terms-layout {
            grid-template-columns: 1fr;

            gap: 35px;
          }


          .engix-terms-sidebar {
            display: none;
          }


          .engix-terms-article {
            max-width: 100%;
          }

        }


        @media(max-width:650px) {

          .engix-terms-shell {
            width:
              calc(100% - 32px);
          }


          .engix-terms-hero {
            padding:
              55px 0 50px;
          }


          .engix-terms-summary-grid {
            grid-template-columns: 1fr;
          }


          .engix-terms-content {
            padding:
              30px 0 70px;
          }


          .engix-terms-article p,
          .engix-terms-article li {
            font-size: 16px;
          }


          .engix-terms-notice .engix-terms-shell {
            grid-template-columns: 1fr;
          }

        }

      `})]})}function jw(){var d;Ft("Thank You | Engix");const r=((d=Qt().state)==null?void 0:d.service)||"your enquiry";return k.useEffect(()=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"thank_you_view",service:r})},[r]),i.jsxs("main",{className:"engix-thankyou-page",children:[i.jsx("header",{className:"engix-thankyou-header",children:i.jsxs("div",{className:"engix-thankyou-shell engix-thankyou-header-inner",children:[i.jsxs(re,{to:"/",className:"engix-thankyou-logo","aria-label":"Engix Home",children:[i.jsx("span",{className:"engix-thankyou-logo-icon",children:i.jsx("img",{src:"/logo.png",alt:"Engix logo"})}),i.jsx("strong",{children:"Engix"})]}),i.jsxs(re,{to:"/",className:"engix-thankyou-header-action",children:["Explore Engix",i.jsx(ln,{size:18})]})]})}),i.jsx("section",{className:"engix-thankyou-hero",children:i.jsx("div",{className:"engix-thankyou-shell",children:i.jsxs("div",{className:"engix-thankyou-hero-grid",children:[i.jsxs("div",{className:"engix-thankyou-copy",children:[i.jsxs("div",{className:"engix-thankyou-eyebrow",children:[i.jsx(wr,{size:17}),i.jsx("span",{children:"ENQUIRY RECEIVED"})]}),i.jsx("h1",{children:"Thank you for choosing to connect with Engix."}),i.jsx("p",{className:"engix-thankyou-intro",children:"Your enquiry has been received successfully. Our team will review your requirements and connect with you to understand your goals, priorities and the most practical way forward."}),i.jsxs("div",{className:"engix-thankyou-actions",children:[i.jsxs(re,{to:"/solutions",className:"engix-thankyou-primary",children:["Back to Previous Page",i.jsx(e0,{size:20})]}),i.jsxs(re,{to:"/",className:"engix-thankyou-secondary",children:["Explore Engix",i.jsx(ln,{size:20})]}),i.jsxs("a",{href:"https://wa.me/917355985134",target:"_blank",rel:"noreferrer",className:"engix-thankyou-secondary",children:[i.jsx(Si,{size:20}),"Speak with our team"]})]})]}),i.jsxs("div",{className:"engix-thankyou-visual",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1500&q=90",alt:"Professional team collaboration"}),i.jsxs("div",{className:"engix-thankyou-image-overlay",children:[i.jsx("span",{children:"ENGIX"}),i.jsx("strong",{children:"Strategy, technology and growth working together."})]})]})]})})}),i.jsx("section",{className:"engix-thankyou-next-section",children:i.jsxs("div",{className:"engix-thankyou-shell",children:[i.jsxs("div",{className:"engix-thankyou-next-heading",children:[i.jsx("span",{children:"WHAT HAPPENS NEXT"}),i.jsx("h2",{children:"A clear next step, without unnecessary complexity."}),i.jsx("p",{children:"Our team follows a simple process to understand your requirement and determine how Engix can support your business effectively."})]}),i.jsxs("div",{className:"engix-thankyou-steps",children:[i.jsxs("article",{children:[i.jsx("span",{className:"engix-thankyou-step-number",children:"01"}),i.jsx("div",{className:"engix-thankyou-step-icon",children:i.jsx($e,{size:24})}),i.jsx("h3",{children:"We review your enquiry"}),i.jsx("p",{children:"Our team reviews the information you submitted to understand your business, objectives and requirements."})]}),i.jsxs("article",{children:[i.jsx("span",{className:"engix-thankyou-step-number",children:"02"}),i.jsx("div",{className:"engix-thankyou-step-icon",children:i.jsx(It,{size:24})}),i.jsx("h3",{children:"We connect with you"}),i.jsx("p",{children:"An Engix team member will contact you using the details provided in your enquiry."})]}),i.jsxs("article",{children:[i.jsx("span",{className:"engix-thankyou-step-number",children:"03"}),i.jsx("div",{className:"engix-thankyou-step-icon",children:i.jsx(ln,{size:24})}),i.jsx("h3",{children:"We define the next step"}),i.jsx("p",{children:"We discuss your goals and recommend an appropriate strategy, scope and practical way forward."})]})]})]})}),i.jsx("section",{className:"engix-thankyou-partnership",children:i.jsx("div",{className:"engix-thankyou-shell",children:i.jsxs("div",{className:"engix-thankyou-partnership-grid",children:[i.jsx("div",{className:"engix-thankyou-partnership-image",children:i.jsx("img",{src:"https://plus.unsplash.com/premium_photo-1661274151793-173c09ced789?auto=format&fit=crop&w=1500&q=90",alt:"Business professionals shaking hands"})}),i.jsxs("div",{className:"engix-thankyou-partnership-copy",children:[i.jsx("span",{children:"A CONNECTED PARTNER"}),i.jsx("h2",{children:"More than a conversation — the beginning of a practical business relationship."}),i.jsx("p",{children:"Engix combines digital marketing, website development, software engineering and modern technology execution so businesses can work with one connected digital team."}),i.jsxs(re,{to:"/services",className:"engix-thankyou-services-link",children:["Explore our capabilities",i.jsx(ln,{size:20})]})]})]})})}),i.jsx("section",{className:"engix-thankyou-contact-section",children:i.jsx("div",{className:"engix-thankyou-shell",children:i.jsxs("div",{className:"engix-thankyou-contact-card",children:[i.jsxs("div",{className:"engix-thankyou-contact-copy",children:[i.jsxs("div",{className:"engix-thankyou-contact-label",children:[i.jsx(b0,{size:19}),"DIRECT CONTACT"]}),i.jsx("h2",{children:"Need to speak with our team directly?"}),i.jsx("p",{children:"You can reach Engix by phone, WhatsApp or email for immediate business communication."})]}),i.jsxs("div",{className:"engix-thankyou-contact-links",children:[i.jsxs("a",{href:"tel:+917355985134",children:[i.jsx("span",{className:"engix-thankyou-contact-icon",children:i.jsx(It,{size:21})}),i.jsxs("div",{children:[i.jsx("small",{children:"CALL"}),i.jsx("strong",{children:"+91 7355985134"})]})]}),i.jsxs("a",{href:"https://wa.me/917355985134",target:"_blank",rel:"noreferrer",children:[i.jsx("span",{className:"engix-thankyou-contact-icon",children:i.jsx(Si,{size:21})}),i.jsxs("div",{children:[i.jsx("small",{children:"WHATSAPP"}),i.jsx("strong",{children:"Start a conversation"})]})]}),i.jsxs("a",{href:"mailto:hello@engix.world",children:[i.jsx("span",{className:"engix-thankyou-contact-icon",children:i.jsx(zt,{size:21})}),i.jsxs("div",{children:[i.jsx("small",{children:"EMAIL"}),i.jsx("strong",{children:"hello@engix.world"})]})]})]})]})})}),i.jsx("footer",{className:"engix-thankyou-footer",children:i.jsxs("div",{className:"engix-thankyou-shell engix-thankyou-footer-inner",children:[i.jsxs("div",{className:"engix-thankyou-footer-brand",children:[i.jsx("img",{src:"/logo.png",alt:"Engix"}),i.jsx("strong",{children:"Engix"})]}),i.jsxs("p",{children:["© ",new Date().getFullYear()," Engix Tech Private Limited. All rights reserved."]})]})}),i.jsx("style",{children:`

        * {
          box-sizing: border-box;
        }


        body {
          margin: 0;
        }


        .engix-thankyou-page {
          --ink: #101214;
          --text: #292d31;
          --muted: #62686f;
          --line: #dedfe2;

          --blue: #dcecff;
          --blue-deep: #245986;

          --green: #177837;

          min-height: 100vh;

          background: #ffffff;

          color: var(--ink);

          overflow-x: hidden;
        }


        .engix-thankyou-shell {
          width:
            min(
              1180px,
              calc(100% - 56px)
            );

          margin: 0 auto;
        }



        /* =====================================================
           HEADER
        ====================================================== */

        .engix-thankyou-header {
          position: relative;

          z-index: 20;

          border-bottom:
            1px solid rgba(16,18,20,.08);

          background:
            rgba(255,255,255,.94);

          backdrop-filter:
            blur(18px);

          -webkit-backdrop-filter:
            blur(18px);
        }


        .engix-thankyou-header-inner {
          min-height: 78px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 24px;
        }


        .engix-thankyou-logo {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          color: var(--ink);

          text-decoration: none;
        }


        .engix-thankyou-logo-icon {
          width: 48px;
          height: 48px;

          display: inline-flex;

          align-items: center;

          justify-content: center;
        }


        .engix-thankyou-logo-icon img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: contain;
        }


        .engix-thankyou-logo strong {
          font-size: 25px;

          letter-spacing: -.045em;
        }


        .engix-thankyou-header-action {
          min-height: 44px;

          padding: 0 17px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          border:
            1px solid rgba(16,18,20,.11);

          border-radius: 999px;

          background: #ffffff;

          color: var(--ink);

          text-decoration: none;

          font-size: 14px;

          font-weight: 700;

          transition:
            transform .2s ease,
            border-color .2s ease;
        }


        .engix-thankyou-header-action:hover {
          transform:
            translateY(-1px);

          border-color:
            rgba(36,89,134,.4);
        }



        /* =====================================================
           HERO
        ====================================================== */

        .engix-thankyou-hero {
          padding:
            76px 0 92px;

          background:
            linear-gradient(
              135deg,
              #ffffff 0%,
              #f8fbff 55%,
              #eef6ff 100%
            );
        }


        .engix-thankyou-hero-grid {
          display: grid;

          grid-template-columns:
            minmax(0,1fr)
            minmax(410px,.82fr);

          align-items: center;

          gap: 68px;
        }


        .engix-thankyou-copy {
          max-width: 660px;
        }


        .engix-thankyou-success-icon {
          width: 74px;
          height: 74px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #e7f6ec;

          color: var(--green);

          box-shadow:
            0 13px 35px
            rgba(23,120,55,.1);
        }


        .engix-thankyou-eyebrow {
          margin-top: 28px;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: var(--blue-deep);

          font-size: 13px;

          font-weight: 800;

          letter-spacing: .1em;
        }


        .engix-thankyou-copy h1 {
          max-width: 650px;

          margin:
            18px 0 0;

          font-size:
            clamp(
              3.3rem,
              5.4vw,
              5.4rem
            );

          line-height: .98;

          letter-spacing: -.06em;

          font-weight: 560;
        }


        .engix-thankyou-intro {
          max-width: 625px;

          margin:
            28px 0 0;

          color: var(--muted);

          font-size:
            clamp(
              1.08rem,
              1.45vw,
              1.28rem
            );

          line-height: 1.7;
        }


        .engix-thankyou-confirmation {
          margin-top: 28px;

          padding:
            16px 18px;

          display: flex;

          align-items: flex-start;

          gap: 10px;

          border:
            1px solid #cce7d5;

          border-radius: 11px;

          background: #f1faf4;

          color: #275d38;

          font-size: 14px;

          line-height: 1.55;
        }


        .engix-thankyou-confirmation svg {
          margin-top: 1px;

          flex-shrink: 0;

          color: var(--green);
        }


        .engix-thankyou-actions {
          margin-top: 34px;

          display: flex;

          flex-wrap: wrap;

          gap: 12px;
        }


        .engix-thankyou-primary,
        .engix-thankyou-secondary {
          min-height: 54px;

          padding:
            0 21px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          border-radius: 9px;

          text-decoration: none;

          font-size: 15px;

          font-weight: 750;

          transition:
            transform .2s ease,
            box-shadow .2s ease;
        }


        .engix-thankyou-primary {
          background:
            var(--ink);

          color: #ffffff;

          box-shadow:
            0 12px 28px
            rgba(16,18,20,.15);
        }


        .engix-thankyou-secondary {
          border:
            1px solid #cdd0d4;

          background: white;

          color: var(--ink);
        }


        .engix-thankyou-primary:hover,
        .engix-thankyou-secondary:hover {
          transform:
            translateY(-2px);
        }



        /* =====================================================
           HERO IMAGE
        ====================================================== */

        .engix-thankyou-visual {
          position: relative;

          min-height: 610px;

          overflow: hidden;

          border-radius: 24px;

          background: #e8edf2;

          box-shadow:
            0 30px 80px
            rgba(20,35,50,.14);
        }


        .engix-thankyou-visual > img {
          width: 100%;
          height: 100%;

          position: absolute;

          inset: 0;

          display: block;

          object-fit: cover;

          object-position: center;
        }


        .engix-thankyou-visual::after {
          content: '';

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(10,13,16,.03) 20%,
              rgba(10,13,16,.68) 100%
            );
        }


        .engix-thankyou-image-overlay {
          position: absolute;

          z-index: 3;

          left: 30px;

          right: 30px;

          bottom: 30px;
        }


        .engix-thankyou-image-overlay > span {
          display: block;

          color:
            rgba(255,255,255,.72);

          font-size: 12px;

          font-weight: 800;

          letter-spacing: .12em;
        }


        .engix-thankyou-image-overlay strong {
          max-width: 390px;

          margin-top: 9px;

          display: block;

          color: #ffffff;

          font-size:
            clamp(
              1.8rem,
              2.8vw,
              2.7rem
            );

          line-height: 1.1;

          letter-spacing: -.04em;
        }


        .engix-thankyou-image-status {
          position: absolute;

          z-index: 4;

          top: 24px;

          right: 24px;

          padding:
            12px 15px;

          display: flex;

          align-items: center;

          gap: 10px;

          border:
            1px solid
            rgba(255,255,255,.38);

          border-radius: 12px;

          background:
            rgba(255,255,255,.91);

          box-shadow:
            0 10px 30px
            rgba(0,0,0,.09);

          backdrop-filter:
            blur(12px);
        }


        .engix-thankyou-status-dot {
          width: 9px;
          height: 9px;

          flex-shrink: 0;

          border-radius: 50%;

          background:
            var(--green);
        }


        .engix-thankyou-image-status small {
          display: block;

          color: #777d83;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: .08em;
        }


        .engix-thankyou-image-status strong {
          margin-top: 2px;

          display: block;

          color: var(--ink);

          font-size: 12px;
        }



        /* =====================================================
           NEXT STEPS
        ====================================================== */

        .engix-thankyou-next-section {
          padding:
            100px 0;

          background: #ffffff;
        }


        .engix-thankyou-next-heading {
          max-width: 760px;
        }


        .engix-thankyou-next-heading > span {
          color: var(--blue-deep);

          font-size: 13px;

          font-weight: 800;

          letter-spacing: .1em;
        }


        .engix-thankyou-next-heading h2 {
          margin:
            14px 0 0;

          font-size:
            clamp(
              2.5rem,
              4.3vw,
              4.2rem
            );

          line-height: 1.02;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-thankyou-next-heading p {
          max-width: 670px;

          margin:
            22px 0 0;

          color: var(--muted);

          font-size: 17px;

          line-height: 1.7;
        }


        .engix-thankyou-steps {
          margin-top: 48px;

          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0,1fr)
            );

          gap: 18px;
        }


        .engix-thankyou-steps article {
          min-height: 260px;

          padding: 28px;

          border:
            1px solid var(--line);

          border-radius: 16px;

          background:
            linear-gradient(
              180deg,
              #ffffff,
              #fafbfc
            );

          transition:
            transform .22s ease,
            box-shadow .22s ease;
        }


        .engix-thankyou-steps article:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 18px 46px
            rgba(20,35,50,.08);
        }


        .engix-thankyou-step-number {
          color: #92979c;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: .1em;
        }


        .engix-thankyou-step-icon {
          width: 46px;
          height: 46px;

          margin-top: 28px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 10px;

          background: var(--blue);

          color: var(--blue-deep);
        }


        .engix-thankyou-steps h3 {
          margin:
            20px 0 9px;

          font-size: 20px;

          line-height: 1.25;

          letter-spacing: -.025em;
        }


        .engix-thankyou-steps p {
          margin: 0;

          color: var(--muted);

          font-size: 15px;

          line-height: 1.65;
        }



        /* =====================================================
           PARTNERSHIP
        ====================================================== */

        .engix-thankyou-partnership {
          padding:
            100px 0;

          background:
            #f6f8fa;
        }


        .engix-thankyou-partnership-grid {
          display: grid;

          grid-template-columns:
            minmax(0,.9fr)
            minmax(0,1fr);

          align-items: center;

          gap: 70px;
        }


        .engix-thankyou-partnership-image {
          min-height: 490px;

          overflow: hidden;

          border-radius: 20px;

          box-shadow:
            0 25px 70px
            rgba(20,35,50,.1);
        }


        .engix-thankyou-partnership-image img {
          width: 100%;
          height: 100%;

          min-height: 490px;

          display: block;

          object-fit: cover;
        }


        .engix-thankyou-partnership-copy > span {
          color: var(--blue-deep);

          font-size: 13px;

          font-weight: 800;

          letter-spacing: .1em;
        }


        .engix-thankyou-partnership-copy h2 {
          max-width: 600px;

          margin:
            15px 0 0;

          font-size:
            clamp(
              2.5rem,
              4.2vw,
              4.1rem
            );

          line-height: 1.03;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-thankyou-partnership-copy p {
          max-width: 580px;

          margin:
            24px 0 0;

          color: var(--muted);

          font-size: 17px;

          line-height: 1.75;
        }


        .engix-thankyou-services-link {
          margin-top: 30px;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          color: var(--ink);

          text-decoration: none;

          font-size: 15px;

          font-weight: 750;
        }



        /* =====================================================
           CONTACT
        ====================================================== */

        .engix-thankyou-contact-section {
          padding:
            90px 0;

          background: #ffffff;
        }


        .engix-thankyou-contact-card {
          padding:
            42px;

          display: grid;

          grid-template-columns:
            minmax(0,.82fr)
            minmax(0,1.18fr);

          align-items: center;

          gap: 50px;

          border-radius: 22px;

          background: var(--ink);

          color: #ffffff;

          box-shadow:
            0 25px 70px
            rgba(16,18,20,.12);
        }


        .engix-thankyou-contact-label {
          display: flex;

          align-items: center;

          gap: 8px;

          color:
            rgba(255,255,255,.65);

          font-size: 12px;

          font-weight: 800;

          letter-spacing: .1em;
        }


        .engix-thankyou-contact-copy h2 {
          margin:
            13px 0 0;

          font-size:
            clamp(
              2rem,
              3.3vw,
              3.2rem
            );

          line-height: 1.05;

          letter-spacing: -.045em;
        }


        .engix-thankyou-contact-copy p {
          margin:
            16px 0 0;

          color:
            rgba(255,255,255,.66);

          font-size: 15px;

          line-height: 1.65;
        }


        .engix-thankyou-contact-links {
          display: grid;

          gap: 10px;
        }


        .engix-thankyou-contact-links > a {
          min-height: 72px;

          padding:
            12px 16px;

          display: flex;

          align-items: center;

          gap: 13px;

          border:
            1px solid
            rgba(255,255,255,.14);

          border-radius: 12px;

          background:
            rgba(255,255,255,.065);

          color: #ffffff;

          text-decoration: none;

          transition:
            background .2s ease,
            transform .2s ease;
        }


        .engix-thankyou-contact-links > a:hover {
          transform:
            translateX(3px);

          background:
            rgba(255,255,255,.1);
        }


        .engix-thankyou-contact-icon {
          width: 42px;
          height: 42px;

          display: flex;

          align-items: center;

          justify-content: center;

          flex-shrink: 0;

          border-radius: 10px;

          background:
            rgba(220,236,255,.12);

          color: #cfe4ff;
        }


        .engix-thankyou-contact-links small {
          display: block;

          color:
            rgba(255,255,255,.48);

          font-size: 10px;

          font-weight: 800;

          letter-spacing: .1em;
        }


        .engix-thankyou-contact-links strong {
          margin-top: 3px;

          display: block;

          color: #ffffff;

          font-size: 14px;
        }



        /* =====================================================
           FOOTER
        ====================================================== */

        .engix-thankyou-footer {
          padding:
            24px 0;

          border-top:
            1px solid
            rgba(16,18,20,.08);

          background:
            #ffffff;
        }


        .engix-thankyou-footer-inner {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 24px;
        }


        .engix-thankyou-footer-brand {
          display: flex;

          align-items: center;

          gap: 8px;
        }


        .engix-thankyou-footer-brand img {
          width: 34px;
          height: 34px;

          object-fit: contain;
        }


        .engix-thankyou-footer-brand strong {
          font-size: 18px;
        }


        .engix-thankyou-footer p {
          margin: 0;

          color: #73787e;

          font-size: 13px;
        }



        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 950px) {

          .engix-thankyou-hero-grid {
            grid-template-columns:
              1fr;

            gap: 48px;
          }


          .engix-thankyou-copy {
            max-width: 800px;
          }


          .engix-thankyou-visual {
            min-height: 520px;
          }


          .engix-thankyou-steps {
            grid-template-columns:
              1fr;
          }


          .engix-thankyou-steps article {
            min-height: auto;
          }


          .engix-thankyou-partnership-grid {
            grid-template-columns:
              1fr;

            gap: 45px;
          }


          .engix-thankyou-partnership-image {
            min-height: 450px;
          }


          .engix-thankyou-contact-card {
            grid-template-columns:
              1fr;

            gap: 35px;
          }

        }



        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 600px) {

          .engix-thankyou-shell {
            width:
              min(
                100% - 28px,
                1180px
              );
          }


          .engix-thankyou-header-inner {
            min-height: 70px;
          }


          .engix-thankyou-logo-icon {
            width: 42px;
            height: 42px;
          }


          .engix-thankyou-logo strong {
            font-size: 21px;
          }


          .engix-thankyou-header-action {
            min-height: 40px;

            padding:
              0 13px;

            font-size: 12px;
          }


          .engix-thankyou-hero {
            padding:
              45px 0 65px;
          }


          .engix-thankyou-copy h1 {
            font-size:
              clamp(
                2.8rem,
                13vw,
                4rem
              );
          }


          .engix-thankyou-intro {
            font-size: 16px;
          }


          .engix-thankyou-actions {
            flex-direction:
              column;
          }


          .engix-thankyou-primary,
          .engix-thankyou-secondary {
            width: 100%;
          }


          .engix-thankyou-visual {
            min-height: 430px;

            border-radius: 18px;
          }


          .engix-thankyou-image-overlay {
            left: 22px;

            right: 22px;

            bottom: 22px;
          }


          .engix-thankyou-image-status {
            top: 16px;

            right: 16px;
          }


          .engix-thankyou-next-section,
          .engix-thankyou-partnership {
            padding:
              70px 0;
          }


          .engix-thankyou-partnership-image,
          .engix-thankyou-partnership-image img {
            min-height: 350px;
          }


          .engix-thankyou-contact-section {
            padding:
              65px 0;
          }


          .engix-thankyou-contact-card {
            padding:
              28px 22px;

            border-radius: 18px;
          }


          .engix-thankyou-footer-inner {
            flex-direction:
              column;

            text-align: center;
          }

        }

      `})]})}function ww(){return i.jsxs(hb,{children:[i.jsxs(Rt,{element:i.jsx(_1,{}),children:[i.jsx(Rt,{path:"/",element:i.jsx(e2,{})}),i.jsx(Rt,{path:"/services",element:i.jsx(d2,{})}),i.jsx(Rt,{path:"/portfolio",element:i.jsx(v2,{})}),i.jsx(Rt,{path:"/about",element:i.jsx(A2,{})}),i.jsx(Rt,{path:"/contact",element:i.jsx(dw,{})}),i.jsx(Rt,{path:"/blog",element:i.jsx(H1,{})}),i.jsx(Rt,{path:"/privacy",element:i.jsx(vw,{})}),i.jsx(Rt,{path:"/terms",element:i.jsx(bw,{})})]}),i.jsx(Rt,{path:"/solutions",element:i.jsx(yw,{})}),i.jsx(Rt,{path:"/thank-you",element:i.jsx(jw,{})}),i.jsx(Rt,{path:"*",element:i.jsx(hw,{})})]})}hv.createRoot(document.getElementById("root")).render(i.jsx(sv.StrictMode,{children:i.jsx(Ub,{children:i.jsx(ww,{})})}));
