var ut=Object.defineProperty;var ft=(t,e,n)=>e in t?ut(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ne=(t,e,n)=>(ft(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function q(){}const Qe=t=>t;function ct(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Ye(t){return t()}function Te(){return Object.create(null)}function $(t){t.forEach(Ye)}function Ce(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let he;function V(t,e){return t===e?!0:(he||(he=document.createElement("a")),he.href=e,t===he.href)}function dt(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null){for(const l of e)l(void 0);return q}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ue(t,e,n){t.$$.on_destroy.push(mt(e,n))}function ce(t,e,n){return t.set(n),e}const Ze=typeof window<"u";let pt=Ze?()=>window.performance.now():()=>Date.now(),Ae=Ze?t=>requestAnimationFrame(t):q;const re=new Set;function xe(t){re.forEach(e=>{e.c(t)||(re.delete(e),e.f())}),re.size!==0&&Ae(xe)}function _t(t){let e;return re.size===0&&Ae(xe),{promise:new Promise(n=>{re.add(e={c:t,f:n})}),abort(){re.delete(e)}}}function k(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ht(t){const e=v("style");return e.textContent="/* empty */",gt(et(t),e),e.sheet}function gt(t,e){return k(t.head||t,e),e.sheet}function A(t,e,n){t.insertBefore(e,n||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function Se(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function te(t){return document.createTextNode(t)}function T(){return te(" ")}function bt(){return te("")}function z(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function je(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:h(t,e,n)}function wt(t){return Array.from(t.childNodes)}function pe(t,e){e=""+e,t.data!==e&&(t.data=e)}function B(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}let ge;function kt(){if(ge===void 0){ge=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{ge=!0}}return ge}function _e(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const l=v("iframe");l.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),l.setAttribute("aria-hidden","true"),l.tabIndex=-1;const s=kt();let a;return s?(l.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",a=z(window,"message",o=>{o.source===l.contentWindow&&e()})):(l.src="about:blank",l.onload=()=>{a=z(l.contentWindow,"resize",e),e()}),k(t,l),()=>{(s||a&&l.contentWindow)&&a(),I(l)}}function E(t,e,n){t.classList.toggle(e,!!n)}function tt(t,e,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:l})}const we=new Map;let ke=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function yt(t,e){const n={stylesheet:ht(e),rules:{}};return we.set(t,n),n}function He(t,e,n,l,s,a,o,r=0){const i=16.666/l;let u=`{
`;for(let b=0;b<=1;b+=i){const L=e+(n-e)*a(b);u+=b*100+`%{${o(L,1-L)}}
`}const f=u+`100% {${o(n,1-n)}}
}`,c=`__svelte_${vt(f)}_${r}`,p=et(t),{stylesheet:d,rules:m}=we.get(p)||yt(p,t);m[c]||(m[c]=!0,d.insertRule(`@keyframes ${c} ${f}`,d.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${c} ${l}ms linear ${s}ms 1 both`,ke+=1,c}function St(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),s=n.length-l.length;s&&(t.style.animation=l.join(", "),ke-=s,ke||Nt())}function Nt(){Ae(()=>{ke||(we.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&I(e)}),we.clear())})}let me;function J(t){me=t}function nt(){if(!me)throw new Error("Function called outside component initialization");return me}function Be(){const t=nt();return(e,n,{cancelable:l=!1}={})=>{const s=t.$$.callbacks[e];if(s){const a=tt(e,n,{cancelable:l});return s.slice().forEach(o=>{o.call(t,a)}),!a.defaultPrevented}return!0}}const ie=[],P=[];let ae=[];const ze=[],Ot=Promise.resolve();let Ee=!1;function qt(){Ee||(Ee=!0,Ot.then(Pe))}function F(t){ae.push(t)}function Z(t){ze.push(t)}const Oe=new Set;let se=0;function Pe(){if(se!==0)return;const t=me;do{try{for(;se<ie.length;){const e=ie[se];se++,J(e),zt(e.$$)}}catch(e){throw ie.length=0,se=0,e}for(J(null),ie.length=0,se=0;P.length;)P.pop()();for(let e=0;e<ae.length;e+=1){const n=ae[e];Oe.has(n)||(Oe.add(n),n())}ae.length=0}while(ie.length);for(;ze.length;)ze.pop()();Ee=!1,Oe.clear(),J(t)}function zt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}function Et(t){const e=[],n=[];ae.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),ae=e}let fe;function Dt(){return fe||(fe=Promise.resolve(),fe.then(()=>{fe=null})),fe}function qe(t,e,n){t.dispatchEvent(tt(`${e?"intro":"outro"}${n}`))}const be=new Set;let X;function ne(){X={r:0,c:[],p:X}}function le(){X.r||$(X.c),X=X.p}function N(t,e){t&&t.i&&(be.delete(t),t.i(e))}function D(t,e,n,l){if(t&&t.o){if(be.has(t))return;be.add(t),X.c.push(()=>{be.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}const Lt={duration:0};function ve(t,e,n,l){let a=e(t,n,{direction:"both"}),o=l?0:1,r=null,i=null,u=null,f;function c(){u&&St(t,u)}function p(m,_){const b=m.b-o;return _*=Math.abs(b),{a:o,b:m.b,d:b,duration:_,start:m.start,end:m.start+_,group:m.group}}function d(m){const{delay:_=0,duration:b=300,easing:L=Qe,tick:w=q,css:y}=a||Lt,C={start:pt()+_,b:m};m||(C.group=X,X.r+=1),"inert"in t&&(m?f!==void 0&&(t.inert=f):(f=t.inert,t.inert=!0)),r||i?i=C:(y&&(c(),u=He(t,o,m,b,_,L,y)),m&&w(0,1),r=p(C,b),F(()=>qe(t,m,"start")),_t(R=>{if(i&&R>i.start&&(r=p(i,b),i=null,qe(t,r.b,"start"),y&&(c(),u=He(t,o,r.b,r.duration,0,L,a.css))),r){if(R>=r.end)w(o=r.b,1-o),qe(t,r.b,"end"),i||(r.b?c():--r.group.r||$(r.group.c)),r=null;else if(R>=r.start){const O=R-r.start;o=r.a+r.d*L(O/r.duration),w(o,1-o)}}return!!(r||i)}))}return{run(m){Ce(a)?Dt().then(()=>{a=a({direction:m?"in":"out"}),d(m)}):d(m)},end(){c(),r=i=null}}}function It(t,e){const n=e.token={};function l(s,a,o,r){if(e.token!==n)return;e.resolved=r;let i=e.ctx;o!==void 0&&(i=i.slice(),i[o]=r);const u=s&&(e.current=s)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((c,p)=>{p!==a&&c&&(ne(),D(c,1,1,()=>{e.blocks[p]===c&&(e.blocks[p]=null)}),le())}):e.block.d(1),u.c(),N(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[a]=u),f&&Pe()}if(ct(t)){const s=nt();if(t.then(a=>{J(s),l(e.then,1,e.value,a),J(null)},a=>{if(J(s),l(e.catch,2,e.error,a),J(null),!e.hasCatch)throw a}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,t),!0;e.resolved=t}}function Ct(t,e,n){const l=e.slice(),{resolved:s}=t;t.current===t.then&&(l[t.value]=s),t.current===t.catch&&(l[t.error]=s),t.block.p(l,n)}function x(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ee(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function G(t){t&&t.c()}function M(t,e,n){const{fragment:l,after_update:s}=t.$$;l&&l.m(e,n),F(()=>{const a=t.$$.on_mount.map(Ye).filter(Ce);t.$$.on_destroy?t.$$.on_destroy.push(...a):$(a),t.$$.on_mount=[]}),s.forEach(F)}function W(t,e){const n=t.$$;n.fragment!==null&&(Et(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function At(t,e){t.$$.dirty[0]===-1&&(ie.push(t),qt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(t,e,n,l,s,a,o=null,r=[-1]){const i=me;J(t);const u=t.$$={fragment:null,ctx:[],props:a,update:q,not_equal:s,bound:Te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:Te(),dirty:r,skip_bound:!1,root:e.target||i.$$.root};o&&o(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(c,p,...d)=>{const m=d.length?d[0]:p;return u.ctx&&s(u.ctx[c],u.ctx[c]=m)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](m),f&&At(t,c)),p}):[],u.update(),f=!0,$(u.before_update),u.fragment=l?l(u.ctx):!1,e.target){if(e.hydrate){const c=wt(e.target);u.fragment&&u.fragment.l(c),c.forEach(I)}else u.fragment&&u.fragment.c();e.intro&&N(t.$$.fragment),M(t,e.target,e.anchor),Pe()}J(i)}class K{constructor(){Ne(this,"$$");Ne(this,"$$set")}$destroy(){W(this,1),this.$destroy=q}$on(e,n){if(!Ce(n))return q;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Bt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Bt);const oe=[];function Re(t,e=q){let n;const l=new Set;function s(r){if(H(t,r)&&(t=r,n)){const i=!oe.length;for(const u of l)u[1](),oe.push(u,t);if(i){for(let u=0;u<oe.length;u+=2)oe[u][0](oe[u+1]);oe.length=0}}}function a(r){s(r(t))}function o(r,i=q){const u=[r,i];return l.add(u),l.size===1&&(n=e(s,a)||q),r(t),()=>{l.delete(u),l.size===0&&n&&(n(),n=null)}}return{set:s,update:a,subscribe:o}}let De=Re({}),de=Re({}),Le=Re({}),Ie={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},Fe=["head","body","legs","feet","neck","back","ring","misc"],lt={name:"",stats:{armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0},image:"",link:""},st={name:"",info:{type:"",special:"",default:{type:"",baseDmg:0,multiplier:0},preview:{}},advanced:{},image:"",link:""};function Pt(t){let e,n,l,s,a,o,r,i;return{c(){e=v("li"),n=v("button"),l=v("img"),a=T(),o=v("span"),o.textContent=`${t[4]}`,V(l.src,s=t[0].image)||h(l,"src",s),h(l,"alt",""),B(o,"font-size",t[3]?`calc(var(--u) * ${t[3]})`:""),E(e,"selectedItem",t[2])},m(u,f){A(u,e,f),k(e,n),k(n,l),k(n,a),k(n,o),t[8](e),r||(i=z(n,"click",t[5]),r=!0)},p(u,[f]){f&1&&!V(l.src,s=u[0].image)&&h(l,"src",s),f&8&&B(o,"font-size",u[3]?`calc(var(--u) * ${u[3]})`:""),f&4&&E(e,"selectedItem",u[2])},i:q,o:q,d(u){u&&I(e),t[8](null),r=!1,i()}}}function Rt(t,e,n){let l,s;ue(t,de,_=>n(9,l=_)),ue(t,De,_=>n(10,s=_));let{itemData:a,slotOpen:o,eqSlotName:r}=e;const i=Be();let u,f=!1,c=a.name,p;c=="Woodwhack Legionnaire Helmet"?p=2.8:c=="Woodwhack Legionnaire Chestpiece"?p=2.25:c=="Broken Thumb Drillbit Emporium Chassis"?p=2.4:c.includes("Spectral Vanguard Platebody")||c=="Pettyganger's Parade Legwarmers"?p=2.65:c.includes("Spectral Vanguard Platelegs")&&(p=2.8);function d(_){if(o||!o&&_.isTrusted==!1){i("itemSelect",u),u.classList.contains("selectedItem")||n(2,f=!1),n(2,f=!f),n(6,o=!1),ce(De,s[r]=f?a:lt,s);for(let b of Object.keys(Ie)){ce(de,l[b]=0,l);for(let L in s)ce(de,l[b]+=s[L].stats[b],l),ce(de,l[b]=Math.round(l[b]*10)/10,l)}}}function m(_){P[_?"unshift":"push"](()=>{u=_,n(1,u)})}return t.$$set=_=>{"itemData"in _&&n(0,a=_.itemData),"slotOpen"in _&&n(6,o=_.slotOpen),"eqSlotName"in _&&n(7,r=_.eqSlotName)},[a,u,f,p,c,d,o,r,m]}class Tt extends K{constructor(e){super(),U(this,e,Rt,Pt,H,{itemData:0,slotOpen:6,eqSlotName:7})}}function jt(t){let e,n,l,s,a,o,r,i;return{c(){e=v("li"),n=v("button"),l=v("img"),a=T(),o=v("span"),o.textContent=`${t[5]}`,V(l.src,s=t[0].image)||h(l,"src",s),h(l,"alt",""),B(o,"font-size",t[4]?`calc(var(--u) * ${t[4]})`:""),n.disabled=t[3],E(e,"selectedItem",t[2]),E(e,"duplicate",t[3])},m(u,f){A(u,e,f),k(e,n),k(n,l),k(n,a),k(n,o),t[10](e),r||(i=z(n,"click",t[6]),r=!0)},p(u,[f]){f&1&&!V(l.src,s=u[0].image)&&h(l,"src",s),f&16&&B(o,"font-size",u[4]?`calc(var(--u) * ${u[4]})`:""),f&8&&(n.disabled=u[3]),f&4&&E(e,"selectedItem",u[2]),f&8&&E(e,"duplicate",u[3])},i:q,o:q,d(u){u&&I(e),t[10](null),r=!1,i()}}}function Ht(t,e,n){let l;ue(t,Le,_=>n(9,l=_));let{itemData:s,slotOpen:a,index:o}=e;const r=Be();let i,u=!1,f=!1,c=s.name,p;c=="Eyeball of Reckoning Ultradagger"&&(p=2.55);function d(_){!f&&(a||!a&&_.isTrusted==!1)&&(r("itemSelect",i),i.classList.contains("selectedItem")||n(2,u=!1),n(2,u=!u),n(7,a=!1),ce(Le,l[o]=u?s:st,l))}function m(_){P[_?"unshift":"push"](()=>{i=_,n(1,i)})}return t.$$set=_=>{"itemData"in _&&n(0,s=_.itemData),"slotOpen"in _&&n(7,a=_.slotOpen),"index"in _&&n(8,o=_.index)},t.$$.update=()=>{if(t.$$.dirty&768&&l)for(let _ in l)if(_!=o&&l[_].name==c){n(3,f=!0);break}else n(3,f=!1)},[s,i,u,f,p,c,d,a,o,l,m]}class Ft extends K{constructor(e){super(),U(this,e,Ht,jt,H,{itemData:0,slotOpen:7,index:8})}}function $e(t,e,n){const l=t.slice();return l[27]=e[n],l}function $t(t){return{c:q,m:q,p:q,i:q,o:q,d:q}}function Mt(t){let e,n,l,s,a,o,r,i=x(t[26]),u=[];for(let c=0;c<i.length;c+=1)u[c]=Me($e(t,i,c));const f=c=>D(u[c],1,1,()=>{u[c]=null});return{c(){e=v("div"),n=v("input"),l=T(),s=v("ul");for(let c=0;c<u.length;c+=1)u[c].c();h(n,"type","text"),h(n,"class","searchBarInput svelte-668kzw"),h(n,"placeholder","Search..."),h(e,"class","searchBarCont svelte-668kzw"),h(s,"class","svelte-668kzw")},m(c,p){A(c,e,p),k(e,n),t[12](n),A(c,l,p),A(c,s,p);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(s,null);t[15](s),a=!0,o||(r=[z(n,"keydown",t[8]),z(n,"input",t[9])],o=!0)},p(c,p){if(p&1159){i=x(c[26]);let d;for(d=0;d<i.length;d+=1){const m=$e(c,i,d);u[d]?(u[d].p(m,p),N(u[d],1)):(u[d]=Me(m),u[d].c(),N(u[d],1),u[d].m(s,null))}for(ne(),d=i.length;d<u.length;d+=1)f(d);le()}},i(c){if(!a){for(let p=0;p<i.length;p+=1)N(u[p]);a=!0}},o(c){u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)D(u[p]);a=!1},d(c){c&&(I(e),I(l),I(s)),t[12](null),Se(u,c),t[15](null),o=!1,$(r)}}}function Wt(t){let e,n,l;function s(o){t[14](o)}let a={itemData:t[27],eqSlotName:t[1]};return t[0]!==void 0&&(a.slotOpen=t[0]),e=new Tt({props:a}),P.push(()=>ee(e,"slotOpen",s)),e.$on("itemSelect",t[10]),{c(){G(e.$$.fragment)},m(o,r){M(e,o,r),l=!0},p(o,r){const i={};r&2&&(i.eqSlotName=o[1]),!n&&r&1&&(n=!0,i.slotOpen=o[0],Z(()=>n=!1)),e.$set(i)},i(o){l||(N(e.$$.fragment,o),l=!0)},o(o){D(e.$$.fragment,o),l=!1},d(o){W(e,o)}}}function Gt(t){let e,n,l;function s(o){t[13](o)}let a={itemData:t[27],index:t[2]};return t[0]!==void 0&&(a.slotOpen=t[0]),e=new Ft({props:a}),P.push(()=>ee(e,"slotOpen",s)),e.$on("itemSelect",t[10]),{c(){G(e.$$.fragment)},m(o,r){M(e,o,r),l=!0},p(o,r){const i={};r&4&&(i.index=o[2]),!n&&r&1&&(n=!0,i.slotOpen=o[0],Z(()=>n=!1)),e.$set(i)},i(o){l||(N(e.$$.fragment,o),l=!0)},o(o){D(e.$$.fragment,o),l=!1},d(o){W(e,o)}}}function Me(t){let e,n,l,s;const a=[Gt,Wt],o=[];function r(i,u){return i[2]?0:1}return e=r(t),n=o[e]=a[e](t),{c(){n.c(),l=bt()},m(i,u){o[e].m(i,u),A(i,l,u),s=!0},p(i,u){let f=e;e=r(i),e===f?o[e].p(i,u):(ne(),D(o[f],1,1,()=>{o[f]=null}),le(),n=o[e],n?n.p(i,u):(n=o[e]=a[e](i),n.c()),N(n,1),n.m(l.parentNode,l))},i(i){s||(N(n),s=!0)},o(i){D(n),s=!1},d(i){i&&I(l),o[e].d(i)}}}function Vt(t){let e;return{c(){e=v("span"),e.textContent="Loading items...",h(e,"class","svelte-668kzw")},m(n,l){A(n,e,l)},p:q,i:q,o:q,d(n){n&&I(e)}}}function Ut(t){let e,n,l,s,a,o={ctx:t,current:null,token:null,hasCatch:!1,pending:Vt,then:Mt,catch:$t,value:26,blocks:[,,,]};return It(t[7],o),{c(){e=v("div"),o.block.c(),h(e,"class","dropdown svelte-668kzw"),F(()=>t[16].call(e)),B(e,"height",`${t[4]*1.25}px`)},m(r,i){A(r,e,i),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null,n=_e(e,t[16].bind(e)),l=!0,s||(a=[z(e,"transitionend",t[17]),z(e,"transitioncancel",t[18])],s=!0)},p(r,[i]){t=r,Ct(o,t,i),i&16&&B(e,"height",`${t[4]*1.25}px`)},i(r){l||(N(o.block),l=!0)},o(r){for(let i=0;i<3;i+=1){const u=o.blocks[i];D(u)}l=!1},d(r){r&&I(e),o.block.d(),o.token=null,o=null,n(),s=!1,$(a)}}}function Kt(t,e,n){let{slotName:l,index:s,slotOpen:a}=e;const o=Be();let r,i,u,f,c=`https://raw.githubusercontent.com/XT8SS/fc-sv/main/src/assets/ff-data/${l}.json`,p,d={},m=!1;const _=fetch(c).then(async g=>{if(g.status!=200){console.error(`Failed to fetch ${(s?"weapon #":"")+l} slot data from ${c}
Response status: ${g.status}`);return}return n(11,p=await g.json()),p}).catch(g=>{console.error(`Failed to initiate ${(s?"weapon #":"")+l} slot data fetch from ${c}
${g}`)});function b(){f&&f.classList.remove("lastItem"),u.classList.remove("no-scrollbar");let g=u.querySelectorAll("li:not(.hidden)");f=g[g.length-1],f&&f.classList.add("lastItem"),(!f||f.classList.contains("duplicate"))&&(f=i),g.length<=4&&u.classList.add("no-scrollbar")}function L(g){!g.shiftKey&&g.key=="Tab"&&setTimeout(()=>{i.focus()})}function w(){f&&f.removeEventListener("keydown",L),b(),f&&f.addEventListener("keydown",L)}function y(g){g.shiftKey&&g.key=="Tab"&&setTimeout(()=>{(f.querySelector("button")||f).focus()})}function C(){let g=i.value.toLowerCase();for(let Y in d)Y.toLowerCase().includes(g)?d[Y].element.classList.remove("hidden"):d[Y].element.classList.add("hidden");w()}function R(g){o("itemSelect",g.detail);let Y=u.querySelector(".selectedItem");Y&&Y!=g.detail&&Y.classList.remove("selectedItem"),n(6,m=!0)}function O(g){P[g?"unshift":"push"](()=>{i=g,n(5,i)})}function j(g){a=g,n(0,a)}function Q(g){a=g,n(0,a)}function S(g){P[g?"unshift":"push"](()=>{u=g,n(3,u)})}function it(){r=this.offsetWidth,n(4,r)}const rt=g=>{g.propertyName=="visibility"&&(m&&(n(6,m=!1),n(5,i.value="",i),C()),a&&setTimeout(()=>{i.click(),i.focus(),i.select()}))},at=g=>{g.propertyName=="visibility"&&(n(6,m=!1),a&&setTimeout(()=>{i.click(),i.focus(),i.select()}))};return t.$$set=g=>{"slotName"in g&&n(1,l=g.slotName),"index"in g&&n(2,s=g.index),"slotOpen"in g&&n(0,a=g.slotOpen)},t.$$.update=()=>{if(t.$$.dirty&2056&&u){for(let g=0;g<u.childElementCount;g++)d[p[g].name]={element:u.children[g],data:p[g]};b(),w()}},[a,l,s,u,r,i,m,_,y,C,R,p,O,j,Q,S,it,rt,at]}class ot extends K{constructor(e){super(),U(this,e,Kt,Ut,H,{slotName:1,index:2,slotOpen:0})}}function ye(t,{delay:e=0,duration:n=400,easing:l=Qe}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:l,css:a=>`opacity: ${a*s}`}}function We(t){let e,n,l,s,a,o,r=t[1].name+"",i,u,f,c,p,d;return{c(){e=v("a"),n=v("img"),a=T(),o=v("span"),i=te(r),V(n.src,l=t[1].image)||h(n,"src",l),h(n,"alt",s=t[1].name),h(n,"draggable","false"),h(n,"class","svelte-183otrp"),h(o,"class","tooltip"),h(o,"id","left"),h(e,"href",u=t[1].link),h(e,"target","_blank"),h(e,"class","svelte-183otrp"),B(e,"display",t[1].link?"":"none")},m(m,_){A(m,e,_),k(e,n),k(e,a),k(e,o),k(o,i),c=!0,p||(d=z(e,"focusin",t[11]),p=!0)},p(m,_){(!c||_&2&&!V(n.src,l=m[1].image))&&h(n,"src",l),(!c||_&2&&s!==(s=m[1].name))&&h(n,"alt",s),(!c||_&2)&&r!==(r=m[1].name+"")&&pe(i,r),(!c||_&2&&u!==(u=m[1].link))&&h(e,"href",u),_&2&&B(e,"display",m[1].link?"":"none")},i(m){c||(m&&F(()=>{c&&(f||(f=ve(e,ye,{duration:150},!0)),f.run(1))}),c=!0)},o(m){m&&(f||(f=ve(e,ye,{duration:150},!1)),f.run(0)),c=!1},d(m){m&&I(e),m&&f&&f.end(),p=!1,d()}}}function Jt(t){let e,n,l=t[1],s,a,o,r=t[0].charAt(0).toUpperCase()+t[0].slice(1)+"",i,u,f,c,p,d,m,_,b,L,w,y=We(t);function C(O){t[16](O)}let R={slotName:t[0],index:null};return t[5]!==void 0&&(R.slotOpen=t[5]),m=new ot({props:R}),P.push(()=>ee(m,"slotOpen",C)),m.$on("itemSelect",t[17]),{c(){e=v("div"),n=v("div"),y.c(),a=T(),o=v("button"),i=te(r),u=T(),f=v("iconify-icon"),c=T(),p=v("button"),p.innerHTML='<iconify-icon icon="maki:cross" class="svelte-183otrp"></iconify-icon> <span class="tooltip" id="top">Clear selection</span>',d=T(),G(m.$$.fragment),h(n,"class","eqSlotIcon svelte-183otrp"),F(()=>t[13].call(n)),B(n,"width",`${t[4]}px`),je(f,"icon","iconamoon:arrow-down-2-fill"),je(f,"class","svelte-183otrp"),h(o,"class","ddButton svelte-183otrp"),h(p,"class","clearButton svelte-183otrp"),h(e,"class","eqSlotCont svelte-183otrp"),E(e,"slotOpen",t[5]),E(e,"clearAllowed",t[6]&&t[7])},m(O,j){A(O,e,j),k(e,n),y.m(n,null),t[12](n),s=_e(n,t[13].bind(n)),k(e,a),k(e,o),k(o,i),k(o,u),k(o,f),k(e,c),k(e,p),k(e,d),M(m,e,null),t[18](e),b=!0,L||(w=[z(window,"mousedown",t[9]),z(window,"keydown",t[10]),z(o,"click",t[14]),z(p,"click",t[15]),z(e,"keydown",t[19]),z(e,"mouseenter",t[20]),z(e,"mouseleave",t[21])],L=!0)},p(O,[j]){j&2&&H(l,l=O[1])?(ne(),D(y,1,1,q),le(),y=We(O),y.c(),N(y,1),y.m(n,null)):y.p(O,j),j&16&&B(n,"width",`${O[4]}px`),(!b||j&1)&&r!==(r=O[0].charAt(0).toUpperCase()+O[0].slice(1)+"")&&pe(i,r);const Q={};j&1&&(Q.slotName=O[0]),!_&&j&32&&(_=!0,Q.slotOpen=O[5],Z(()=>_=!1)),m.$set(Q),(!b||j&32)&&E(e,"slotOpen",O[5]),(!b||j&192)&&E(e,"clearAllowed",O[6]&&O[7])},i(O){b||(N(y),N(m.$$.fragment,O),b=!0)},o(O){D(y),D(m.$$.fragment,O),b=!1},d(O){O&&I(e),y.d(O),t[12](null),s(),W(m),t[18](null),L=!1,$(w)}}}function Xt(t,e,n){let l;ue(t,De,S=>n(8,l=S));let{eqSlotName:s}=e,a,o,r,i=lt,u,f,c;const p=S=>{(!a.contains(S.target)||S.target==a||S.target==o)&&(n(5,u=!1),S.target!=a&&S.target!=o&&n(6,f=!1))},d=S=>{S.key=="Tab"&&setTimeout(()=>{n(6,f=a.contains(document.activeElement))})},m=S=>{S.relatedTarget==null&&n(6,f=!0)};function _(S){P[S?"unshift":"push"](()=>{o=S,n(3,o)})}function b(){r=this.offsetHeight,n(4,r)}const L=()=>n(5,u=!u),w=()=>{n(6,f=!1),a.classList.contains("clearAllowed")&&c.querySelector("button").click()};function y(S){u=S,n(5,u)}const C=S=>{setTimeout(()=>{n(7,c=S.detail.classList.contains("selectedItem")?S.detail:null)})};function R(S){P[S?"unshift":"push"](()=>{a=S,n(2,a)})}const O=S=>{S.key=="Escape"&&n(5,u=!1)},j=()=>n(6,f=!0),Q=()=>{a.contains(document.activeElement)||n(6,f=!1)};return t.$$set=S=>{"eqSlotName"in S&&n(0,s=S.eqSlotName)},t.$$.update=()=>{t.$$.dirty&259&&l[s]&&l[s].name!=i.name&&n(1,i=l[s])},[s,i,a,o,r,u,f,c,l,p,d,m,_,b,L,w,y,C,R,O,j,Q]}class Qt extends K{constructor(e){super(),U(this,e,Xt,Jt,H,{eqSlotName:0})}}function Ge(t,e,n){const l=t.slice();return l[1]=e[n],l[2]=e,l[3]=n,l}function Ve(t){let e,n,l;function s(o){t[0](o,t[1],t[2],t[3])}let a={};return t[1]!==void 0&&(a.eqSlotName=t[1]),e=new Qt({props:a}),P.push(()=>ee(e,"eqSlotName",s)),{c(){G(e.$$.fragment)},m(o,r){M(e,o,r),l=!0},p(o,r){t=o;const i={};!n&&r&0&&(n=!0,i.eqSlotName=t[1],Z(()=>n=!1)),e.$set(i)},i(o){l||(N(e.$$.fragment,o),l=!0)},o(o){D(e.$$.fragment,o),l=!1},d(o){W(e,o)}}}function Yt(t){let e,n,l=x(Array(...Fe)),s=[];for(let o=0;o<l.length;o+=1)s[o]=Ve(Ge(t,l,o));const a=o=>D(s[o],1,1,()=>{s[o]=null});return{c(){e=v("div");for(let o=0;o<s.length;o+=1)s[o].c();h(e,"class","armorBox svelte-3p4tb9")},m(o,r){A(o,e,r);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(e,null);n=!0},p(o,[r]){if(r&0){l=x(Array(...Fe));let i;for(i=0;i<l.length;i+=1){const u=Ge(o,l,i);s[i]?(s[i].p(u,r),N(s[i],1)):(s[i]=Ve(u),s[i].c(),N(s[i],1),s[i].m(e,null))}for(ne(),i=l.length;i<s.length;i+=1)a(i);le()}},i(o){if(!n){for(let r=0;r<l.length;r+=1)N(s[r]);n=!0}},o(o){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)D(s[r]);n=!1},d(o){o&&I(e),Se(s,o)}}}function Zt(t,e,n){function l(s,a,o,r){o[r]=s}return[l]}class xt extends K{constructor(e){super(),U(this,e,Zt,Yt,H,{})}}function en(t){let e,n=(t[5]?`${Math.floor(t[2][t[0]]*.675+19.8)}% Reduction`:t[6])+"",l,s,a,o;return{c(){e=v("span"),l=te(n),h(e,"class","statValue svelte-16tz2kw"),h(e,"tabindex","0"),h(e,"style",s=t[5]?`font-size: ${t[3]*.7/6.85}px;`:""),E(e,"hidden",t[4]),E(e,"negative",t[6]<0),E(e,"reduction",t[5])},m(r,i){A(r,e,i),k(e,l),a||(o=[z(e,"mouseenter",t[10]),z(e,"mouseleave",t[11]),z(e,"focusin",t[12]),z(e,"focusout",t[13])],a=!0)},p(r,i){i&101&&n!==(n=(r[5]?`${Math.floor(r[2][r[0]]*.675+19.8)}% Reduction`:r[6])+"")&&pe(l,n),i&40&&s!==(s=r[5]?`font-size: ${r[3]*.7/6.85}px;`:"")&&h(e,"style",s),i&16&&E(e,"hidden",r[4]),i&64&&E(e,"negative",r[6]<0),i&32&&E(e,"reduction",r[5])},d(r){r&&I(e),a=!1,$(o)}}}function tn(t){let e,n=(t[0]!="endurance"?t[6]:t[6].toFixed(2))+"",l;return{c(){e=v("span"),l=te(n),h(e,"class","statValue svelte-16tz2kw"),E(e,"hidden",t[4]),E(e,"negative",t[6]<0)},m(s,a){A(s,e,a),k(e,l)},p(s,a){a&65&&n!==(n=(s[0]!="endurance"?s[6]:s[6].toFixed(2))+"")&&pe(l,n),a&16&&E(e,"hidden",s[4]),a&64&&E(e,"negative",s[6]<0)},d(s){s&&I(e)}}}function Ue(t){let e,n=`${t[1]} Bonus`,l;return{c(){e=v("span"),l=te(n),B(e,"font-size",`${t[3]*.7/t[7][t[0]]}px`)},m(s,a){A(s,e,a),k(e,l)},p(s,a){a&2&&n!==(n=`${s[1]} Bonus`)&&pe(l,n),a&9&&B(e,"font-size",`${s[3]*.7/s[7][s[0]]}px`)},d(s){s&&I(e)}}}function nn(t){let e,n,l,s,a,o,r,i;function u(d,m){return d[0]!="armor"?tn:en}let f=u(t),c=f(t),p=t[4]&&Ue(t);return{c(){e=v("div"),n=v("img"),s=T(),c.c(),a=T(),p&&p.c(),V(n.src,l="stats/"+t[0]+".svg")||h(n,"src",l),h(n,"alt",t[1]),h(n,"class","svelte-16tz2kw"),h(e,"id",t[0]),h(e,"class","svelte-16tz2kw"),F(()=>t[14].call(e)),E(e,"hidden",t[6]==0)},m(d,m){A(d,e,m),k(e,n),k(e,s),c.m(e,null),k(e,a),p&&p.m(e,null),o=_e(e,t[14].bind(e)),r||(i=[z(n,"mouseenter",t[8]),z(n,"mouseleave",t[9])],r=!0)},p(d,[m]){m&1&&!V(n.src,l="stats/"+d[0]+".svg")&&h(n,"src",l),m&2&&h(n,"alt",d[1]),f===(f=u(d))&&c?c.p(d,m):(c.d(1),c=f(d),c&&(c.c(),c.m(e,a))),d[4]?p?p.p(d,m):(p=Ue(d),p.c(),p.m(e,null)):p&&(p.d(1),p=null),m&1&&h(e,"id",d[0]),m&64&&E(e,"hidden",d[6]==0)},i:q,o:q,d(d){d&&I(e),c.d(),p&&p.d(),o(),r=!1,$(i)}}}function ln(t,e,n){let l,s;ue(t,de,w=>n(2,s=w));let{codeName:a,formalName:o}=e,r,i,u,f={armor:5.9,magicDmg:5.65,meleeDmg:5.7,rangedDmg:6.45,hpRegen:7.35,endurance:7.85,sightRange:8.45,walkSpeed:8.3,jumpPower:8.7,ammoReturn:9.3,height:6.1};const c=()=>n(4,i=!0),p=()=>n(4,i=!1),d=()=>n(5,u=!0),m=()=>n(5,u=!1),_=()=>n(5,u=!0),b=()=>n(5,u=!1);function L(){r=this.offsetWidth,n(3,r)}return t.$$set=w=>{"codeName"in w&&n(0,a=w.codeName),"formalName"in w&&n(1,o=w.formalName)},t.$$.update=()=>{t.$$.dirty&5&&n(6,l=s[a]||0)},[a,o,s,r,i,u,l,f,c,p,d,m,_,b,L]}class sn extends K{constructor(e){super(),U(this,e,ln,nn,H,{codeName:0,formalName:1})}}function Ke(t,e,n){const l=t.slice();return l[2]=e[n][0],l[3]=e[n][1],l[4]=e,l[5]=n,l}function Je(t){let e,n,l,s;function a(i){t[0](i,t[2],t[4],t[5])}function o(i){t[1](i,t[3],t[4],t[5])}let r={};return t[2]!==void 0&&(r.codeName=t[2]),t[3]!==void 0&&(r.formalName=t[3]),e=new sn({props:r}),P.push(()=>ee(e,"codeName",a)),P.push(()=>ee(e,"formalName",o)),{c(){G(e.$$.fragment)},m(i,u){M(e,i,u),s=!0},p(i,u){t=i;const f={};!n&&u&0&&(n=!0,f.codeName=t[2],Z(()=>n=!1)),!l&&u&0&&(l=!0,f.formalName=t[3],Z(()=>l=!1)),e.$set(f)},i(i){s||(N(e.$$.fragment,i),s=!0)},o(i){D(e.$$.fragment,i),s=!1},d(i){W(e,i)}}}function on(t){let e,n,l=x(Object.entries(Ie)),s=[];for(let o=0;o<l.length;o+=1)s[o]=Je(Ke(t,l,o));const a=o=>D(s[o],1,1,()=>{s[o]=null});return{c(){e=v("div");for(let o=0;o<s.length;o+=1)s[o].c();h(e,"class","statBox svelte-lu37w6")},m(o,r){A(o,e,r);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(e,null);n=!0},p(o,[r]){if(r&0){l=x(Object.entries(Ie));let i;for(i=0;i<l.length;i+=1){const u=Ke(o,l,i);s[i]?(s[i].p(u,r),N(s[i],1)):(s[i]=Je(u),s[i].c(),N(s[i],1),s[i].m(e,null))}for(ne(),i=l.length;i<s.length;i+=1)a(i);le()}},i(o){if(!n){for(let r=0;r<l.length;r+=1)N(s[r]);n=!0}},o(o){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)D(s[r]);n=!1},d(o){o&&I(e),Se(s,o)}}}function rn(t,e,n){function l(a,o,r,i){r[i][0]=a}function s(a,o,r,i){r[i][1]=a}return[l,s]}class an extends K{constructor(e){super(),U(this,e,rn,on,H,{})}}function Xe(t){let e,n,l,s,a,o,r;return{c(){e=v("a"),n=v("img"),V(n.src,l=t[2].image)||h(n,"src",l),h(n,"alt",s=t[2].name),h(n,"draggable","false"),h(n,"class","svelte-11f45wv"),h(e,"href",a=t[2].link),h(e,"target","_blank"),h(e,"class","svelte-11f45wv"),B(e,"display",t[2].link?"":"none")},m(i,u){A(i,e,u),k(e,n),r=!0},p(i,u){(!r||u&4&&!V(n.src,l=i[2].image))&&h(n,"src",l),(!r||u&4&&s!==(s=i[2].name))&&h(n,"alt",s),(!r||u&4&&a!==(a=i[2].link))&&h(e,"href",a),u&4&&B(e,"display",i[2].link?"":"none")},i(i){r||(i&&F(()=>{r&&(o||(o=ve(e,ye,{duration:150},!0)),o.run(1))}),r=!0)},o(i){i&&(o||(o=ve(e,ye,{duration:150},!1)),o.run(0)),r=!1},d(i){i&&I(e),i&&o&&o.end()}}}function un(t){let e,n,l,s,a,o,r,i=t[2],u,f,c,p,d,m,_,b=Xe(t);function L(y){t[13](y)}let w={slotName:t[0],index:t[1]};return t[6]!==void 0&&(w.slotOpen=t[6]),c=new ot({props:w}),P.push(()=>ee(c,"slotOpen",L)),{c(){e=v("div"),n=v("button"),n.innerHTML=`<iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="90deg" class="svelte-11f45wv"></iconify-icon>
        Gear`,l=T(),s=v("div"),a=v("div"),o=T(),r=v("div"),b.c(),f=T(),G(c.$$.fragment),h(n,"class","ddButton svelte-11f45wv"),h(a,"class","gearAtkPreviews svelte-11f45wv"),h(r,"class","gearSlotIcon svelte-11f45wv"),F(()=>t[11].call(r)),B(r,"width",`${t[5]}px`),h(s,"class","gearInfoCont svelte-11f45wv"),h(e,"class","gearSlot svelte-11f45wv"),E(e,"slotOpen",t[6])},m(y,C){A(y,e,C),k(e,n),k(e,l),k(e,s),k(s,a),k(s,o),k(s,r),b.m(r,null),u=_e(r,t[11].bind(r)),t[12](s),k(e,f),M(c,e,null),t[14](e),d=!0,m||(_=[z(window,"mousedown",t[8]),z(window,"keydown",t[9]),z(n,"click",t[10])],m=!0)},p(y,[C]){C&4&&H(i,i=y[2])?(ne(),D(b,1,1,q),le(),b=Xe(y),b.c(),N(b,1),b.m(r,null)):b.p(y,C),C&32&&B(r,"width",`${y[5]}px`);const R={};C&1&&(R.slotName=y[0]),C&2&&(R.index=y[1]),!p&&C&64&&(p=!0,R.slotOpen=y[6],Z(()=>p=!1)),c.$set(R),(!d||C&64)&&E(e,"slotOpen",y[6])},i(y){d||(N(b),N(c.$$.fragment,y),d=!0)},o(y){D(b),D(c.$$.fragment,y),d=!1},d(y){y&&I(e),b.d(y),u(),t[12](null),W(c),t[14](null),m=!1,$(_)}}}function fn(t,e,n){let l;ue(t,Le,w=>n(7,l=w));let{slotName:s,index:a}=e,o,r,i,u=st,f;const c=w=>{(!o.contains(w.target)||o.contains(w.target)&&r.contains(w.target))&&n(6,f=!1)},p=w=>{w.key=="Escape"&&n(6,f=!1)},d=()=>n(6,f=!f);function m(){i=this.offsetHeight,n(5,i)}function _(w){P[w?"unshift":"push"](()=>{r=w,n(4,r)})}function b(w){f=w,n(6,f)}function L(w){P[w?"unshift":"push"](()=>{o=w,n(3,o)})}return t.$$set=w=>{"slotName"in w&&n(0,s=w.slotName),"index"in w&&n(1,a=w.index)},t.$$.update=()=>{t.$$.dirty&134&&l[a]&&l[a].name!=u.name&&n(2,u=l[a])},[s,a,u,o,r,i,f,l,c,p,d,m,_,b,L]}class cn extends K{constructor(e){super(),U(this,e,fn,un,H,{slotName:0,index:1})}}function dn(t,e,n){const l=t.slice();return l[2]=e[n],l}function mn(t){let e,n;return e=new cn({props:{slotName:"weapons",index:t[2]}}),{c(){G(e.$$.fragment)},m(l,s){M(e,l,s),n=!0},p:q,i(l){n||(N(e.$$.fragment,l),n=!0)},o(l){D(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function pn(t){let e,n,l=x([1,2,3,4,5]),s=[];for(let a=0;a<5;a+=1)s[a]=mn(dn(t,l,a));return{c(){e=v("div");for(let a=0;a<5;a+=1)s[a].c();h(e,"class","gearBox svelte-qj7o0h")},m(a,o){A(a,e,o);for(let r=0;r<5;r+=1)s[r]&&s[r].m(e,null);t[1](e),n=!0},p:q,i(a){if(!n){for(let o=0;o<5;o+=1)N(s[o]);n=!0}},o(a){s=s.filter(Boolean);for(let o=0;o<5;o+=1)D(s[o]);n=!1},d(a){a&&I(e),Se(s,a),t[1](null)}}}function _n(t,e,n){let l;function s(a){P[a?"unshift":"push"](()=>{l=a,n(0,l)})}return[l,s]}class hn extends K{constructor(e){super(),U(this,e,_n,pn,H,{})}}function gn(t){let e,n,l,s,a,o,r,i,u,f,c,p;return F(t[4]),s=new xt({}),o=new an({}),i=new hn({}),{c(){e=v("main"),n=v("div"),l=v("div"),G(s.$$.fragment),a=T(),G(o.$$.fragment),r=T(),G(i.$$.fragment),h(l,"class","eqCont svelte-13cummz"),h(n,"class","calcBox svelte-13cummz"),h(e,"class","svelte-13cummz"),F(()=>t[5].call(e)),E(e,"portrait",!t[2]),B(e,"width",t[2]?`${t[3]*1.56}px`:"75%")},m(d,m){A(d,e,m),k(e,n),k(n,l),M(s,l,null),k(l,a),M(o,l,null),k(n,r),M(i,n,null),u=_e(e,t[5].bind(e)),f=!0,c||(p=z(window,"resize",t[4]),c=!0)},p(d,[m]){(!f||m&4)&&E(e,"portrait",!d[2]),m&12&&B(e,"width",d[2]?`${d[3]*1.56}px`:"75%")},i(d){f||(N(s.$$.fragment,d),N(o.$$.fragment,d),N(i.$$.fragment,d),f=!0)},o(d){D(s.$$.fragment,d),D(o.$$.fragment,d),D(i.$$.fragment,d),f=!1},d(d){d&&I(e),W(s),W(o),W(i),u(),c=!1,p()}}}function bn(t,e,n){let l,s,a,o;function r(){n(0,s=window.outerHeight),n(1,a=window.outerWidth)}function i(){l=this.offsetHeight,n(3,l)}return t.$$.update=()=>{t.$$.dirty&3&&n(2,o=a>s),t.$$.dirty&4&&(o?document.documentElement.style.setProperty("--u","0.75vh"):document.documentElement.style.setProperty("--u","0.75vw"))},[s,a,o,l,r,i]}class wn extends K{constructor(e){super(),U(this,e,bn,gn,H,{})}}new wn({target:document.body});
