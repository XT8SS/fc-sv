var wt=Object.defineProperty;var kt=(t,e,n)=>e in t?wt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ee=(t,e,n)=>(kt(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function D(){}const ut=t=>t;function yt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function ft(t){return t()}function Xe(){return Object.create(null)}function V(t){t.forEach(ft)}function Fe(t){return typeof t=="function"}function M(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ke;function Y(t,e){return t===e?!0:(ke||(ke=document.createElement("a")),ke.href=e,t===ke.href)}function St(t){return Object.keys(t).length===0}function vt(t,...e){if(t==null){for(const l of e)l(void 0);return D}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function X(t,e,n){t.$$.on_destroy.push(vt(e,n))}function ge(t,e,n){return t.set(n),e}const ct=typeof window<"u";let Nt=ct?()=>window.performance.now():()=>Date.now(),He=ct?t=>requestAnimationFrame(t):D;const me=new Set;function dt(t){me.forEach(e=>{e.c(t)||(me.delete(e),e.f())}),me.size!==0&&He(dt)}function Ot(t){let e;return me.size===0&&He(dt),{promise:new Promise(n=>{me.add(e={c:t,f:n})}),abort(){me.delete(e)}}}function b(t,e){t.appendChild(e)}function mt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function qt(t){const e=k("style");return e.textContent="/* empty */",zt(mt(t),e),e.sheet}function zt(t,e){return b(t.head||t,e),e.sheet}function L(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function ze(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function T(){return G(" ")}function pt(){return G("")}function E(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function _(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Qe(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:_(t,e,n)}function Dt(t){return Array.from(t.childNodes)}function J(t,e){e=""+e,t.data!==e&&(t.data=e)}function R(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}let ye;function Ct(){if(ye===void 0){ye=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{ye=!0}}return ye}function we(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const l=k("iframe");l.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),l.setAttribute("aria-hidden","true"),l.tabIndex=-1;const s=Ct();let a;return s?(l.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",a=E(window,"message",o=>{o.source===l.contentWindow&&e()})):(l.src="about:blank",l.onload=()=>{a=E(l.contentWindow,"resize",e),e()}),b(t,l),()=>{(s||a&&l.contentWindow)&&a(),C(l)}}function B(t,e,n){t.classList.toggle(e,!!n)}function _t(t,e,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:l})}const ve=new Map;let Ne=0;function Et(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Bt(t,e){const n={stylesheet:qt(e),rules:{}};return ve.set(t,n),n}function Ye(t,e,n,l,s,a,o,r=0){const i=16.666/l;let u=`{
`;for(let h=0;h<=1;h+=i){const N=e+(n-e)*a(h);u+=h*100+`%{${o(N,1-N)}}
`}const f=u+`100% {${o(n,1-n)}}
}`,c=`__svelte_${Et(f)}_${r}`,m=mt(t),{stylesheet:d,rules:p}=ve.get(m)||Bt(m,t);p[c]||(p[c]=!0,d.insertRule(`@keyframes ${c} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${c} ${l}ms linear ${s}ms 1 both`,Ne+=1,c}function It(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),s=n.length-l.length;s&&(t.style.animation=l.join(", "),Ne-=s,Ne||Lt())}function Lt(){He(()=>{Ne||(ve.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&C(e)}),ve.clear())})}let be;function ee(t){be=t}function je(){if(!be)throw new Error("Function called outside component initialization");return be}function Ge(t){je().$$.on_mount.push(t)}function Me(){const t=je();return(e,n,{cancelable:l=!1}={})=>{const s=t.$$.callbacks[e];if(s){const a=_t(e,n,{cancelable:l});return s.slice().forEach(o=>{o.call(t,a)}),!a.defaultPrevented}return!0}}const ce=[],F=[];let pe=[];const Le=[],Pt=Promise.resolve();let Pe=!1;function At(){Pe||(Pe=!0,Pt.then(We))}function W(t){pe.push(t)}function le(t){Le.push(t)}const Be=new Set;let ue=0;function We(){if(ue!==0)return;const t=be;do{try{for(;ue<ce.length;){const e=ce[ue];ue++,ee(e),Tt(e.$$)}}catch(e){throw ce.length=0,ue=0,e}for(ee(null),ce.length=0,ue=0;F.length;)F.pop()();for(let e=0;e<pe.length;e+=1){const n=pe[e];Be.has(n)||(Be.add(n),n())}pe.length=0}while(ce.length);for(;Le.length;)Le.pop()();Pe=!1,Be.clear(),ee(t)}function Tt(t){if(t.fragment!==null){t.update(),V(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}function Rt(t){const e=[],n=[];pe.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),pe=e}let he;function Ft(){return he||(he=Promise.resolve(),he.then(()=>{he=null})),he}function Ie(t,e,n){t.dispatchEvent(_t(`${e?"intro":"outro"}${n}`))}const Se=new Set;let te;function ie(){te={r:0,c:[],p:te}}function re(){te.r||V(te.c),te=te.p}function z(t,e){t&&t.i&&(Se.delete(t),t.i(e))}function I(t,e,n,l){if(t&&t.o){if(Se.has(t))return;Se.add(t),te.c.push(()=>{Se.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}const Ht={duration:0};function Oe(t,e,n,l){let a=e(t,n,{direction:"both"}),o=l?0:1,r=null,i=null,u=null,f;function c(){u&&It(t,u)}function m(p,g){const h=p.b-o;return g*=Math.abs(h),{a:o,b:p.b,d:h,duration:g,start:p.start,end:p.start+g,group:p.group}}function d(p){const{delay:g=0,duration:h=300,easing:N=ut,tick:O=D,css:P}=a||Ht,j={start:Nt()+g,b:p};p||(j.group=te,te.r+=1),"inert"in t&&(p?f!==void 0&&(t.inert=f):(f=t.inert,t.inert=!0)),r||i?i=j:(P&&(c(),u=Ye(t,o,p,h,g,N,P)),p&&O(0,1),r=m(j,h),W(()=>Ie(t,p,"start")),Ot(v=>{if(i&&v>i.start&&(r=m(i,h),i=null,Ie(t,r.b,"start"),P&&(c(),u=Ye(t,o,r.b,r.duration,0,N,a.css))),r){if(v>=r.end)O(o=r.b,1-o),Ie(t,r.b,"end"),i||(r.b?c():--r.group.r||V(r.group.c)),r=null;else if(v>=r.start){const S=v-r.start;o=r.a+r.d*N(S/r.duration),O(o,1-o)}}return!!(r||i)}))}return{run(p){Fe(a)?Ft().then(()=>{a=a({direction:p?"in":"out"}),d(p)}):d(p)},end(){c(),r=i=null}}}function jt(t,e){const n=e.token={};function l(s,a,o,r){if(e.token!==n)return;e.resolved=r;let i=e.ctx;o!==void 0&&(i=i.slice(),i[o]=r);const u=s&&(e.current=s)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((c,m)=>{m!==a&&c&&(ie(),I(c,1,1,()=>{e.blocks[m]===c&&(e.blocks[m]=null)}),re())}):e.block.d(1),u.c(),z(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[a]=u),f&&We()}if(yt(t)){const s=je();if(t.then(a=>{ee(s),l(e.then,1,e.value,a),ee(null)},a=>{if(ee(s),l(e.catch,2,e.error,a),ee(null),!e.hasCatch)throw a}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,t),!0;e.resolved=t}}function Gt(t,e,n){const l=e.slice(),{resolved:s}=t;t.current===t.then&&(l[t.value]=s),t.current===t.catch&&(l[t.error]=s),t.block.p(l,n)}function se(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function oe(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function Q(t){t&&t.c()}function K(t,e,n){const{fragment:l,after_update:s}=t.$$;l&&l.m(e,n),W(()=>{const a=t.$$.on_mount.map(ft).filter(Fe);t.$$.on_destroy?t.$$.on_destroy.push(...a):V(a),t.$$.on_mount=[]}),s.forEach(W)}function U(t,e){const n=t.$$;n.fragment!==null&&(Rt(n.after_update),V(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mt(t,e){t.$$.dirty[0]===-1&&(ce.push(t),At(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,e,n,l,s,a,o=null,r=[-1]){const i=be;ee(t);const u=t.$$={fragment:null,ctx:[],props:a,update:D,not_equal:s,bound:Xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:Xe(),dirty:r,skip_bound:!1,root:e.target||i.$$.root};o&&o(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(c,m,...d)=>{const p=d.length?d[0]:m;return u.ctx&&s(u.ctx[c],u.ctx[c]=p)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](p),f&&Mt(t,c)),m}):[],u.update(),f=!0,V(u.before_update),u.fragment=l?l(u.ctx):!1,e.target){if(e.hydrate){const c=Dt(e.target);u.fragment&&u.fragment.l(c),c.forEach(C)}else u.fragment&&u.fragment.c();e.intro&&z(t.$$.fragment),K(t,e.target,e.anchor),We()}ee(i)}class ${constructor(){Ee(this,"$$");Ee(this,"$$set")}$destroy(){U(this,1),this.$destroy=D}$on(e,n){if(!Fe(n))return D;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!St(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Wt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Wt);const fe=[];function De(t,e=D){let n;const l=new Set;function s(r){if(M(t,r)&&(t=r,n)){const i=!fe.length;for(const u of l)u[1](),fe.push(u,t);if(i){for(let u=0;u<fe.length;u+=2)fe[u][0](fe[u+1]);fe.length=0}}}function a(r){s(r(t))}function o(r,i=D){const u=[r,i];return l.add(u),l.size===1&&(n=e(s,a)||D),r(t),()=>{l.delete(u),l.size===0&&n&&(n(),n=null)}}return{set:s,update:a,subscribe:o}}let Ae=De({}),de=De({}),Te=De({}),Ve=De([]),Re={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},Ze=["head","body","legs","feet","neck","back","ring","misc"],ht={name:"",stats:{armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0},image:"",link:""},gt={name:"",info:{type:"",special:"",default:{type:"",baseDmg:0,multiplier:0},preview:{}},advanced:{},image:"",link:""};function Ke(t,e){let n=2.8,l=e.split(" ").length,s=t.querySelector("span");if(s.style.removeProperty("font-size"),l>2&&e.length/l>=5){for(;s.offsetHeight>t.offsetHeight/3*2;)n-=.05,s.style.fontSize=`calc(var(--u) * ${n})`;return n<2.8}}function Vt(t){let e=2.35,n=t.querySelector(".tooltip");for(n.style.removeProperty("font-size");n.offsetHeight>t.offsetHeight*1.125;)e-=.02,n.style.fontSize=`calc(var(--u) * ${e})`}function Kt(t){let e,n,l,s,a,o,r,i;return{c(){e=k("li"),n=k("button"),l=k("img"),a=T(),o=k("span"),o.textContent=`${t[3]}`,Y(l.src,s=t[0].image)||_(l,"src",s),_(l,"alt",""),B(e,"selectedItem",t[2])},m(u,f){L(u,e,f),b(e,n),b(n,l),b(n,a),b(n,o),t[7](e),r||(i=E(n,"click",t[4]),r=!0)},p(u,[f]){f&1&&!Y(l.src,s=u[0].image)&&_(l,"src",s),f&4&&B(e,"selectedItem",u[2])},i:D,o:D,d(u){u&&C(e),t[7](null),r=!1,i()}}}function Ut(t,e,n){let l,s,a;X(t,de,g=>n(8,l=g)),X(t,Ae,g=>n(9,s=g)),X(t,Ve,g=>n(10,a=g));let{itemData:o,slotOpen:r,eqSlotName:i}=e;const u=Me();let f,c=!1,m=o.name;Ge(()=>{Ke(f,m)&&a.push({node:f,itemName:m})});function d(g){if(r||!r&&g.isTrusted==!1){u("itemSelect",f),f.classList.contains("selectedItem")||n(2,c=!1),n(2,c=!c),n(5,r=!1),ge(Ae,s[i]=c?o:ht,s);for(let h of Object.keys(Re)){ge(de,l[h]=0,l);for(let N in s)ge(de,l[h]+=s[N].stats[h],l),ge(de,l[h]=Math.round(l[h]*10)/10,l)}}}function p(g){F[g?"unshift":"push"](()=>{f=g,n(1,f)})}return t.$$set=g=>{"itemData"in g&&n(0,o=g.itemData),"slotOpen"in g&&n(5,r=g.slotOpen),"eqSlotName"in g&&n(6,i=g.eqSlotName)},[o,f,c,m,d,r,i,p]}class Jt extends ${constructor(e){super(),Z(this,e,Ut,Kt,M,{itemData:0,slotOpen:5,eqSlotName:6})}}function Xt(t){let e,n,l,s,a,o,r,i,u;return{c(){e=k("li"),n=k("button"),l=k("img"),a=T(),o=k("span"),o.textContent=`${t[4]}`,Y(l.src,s=t[0].image)||_(l,"src",s),_(l,"alt",""),n.disabled=r=!t[3],B(e,"selectedItem",t[2]),B(e,"non-eligible",!t[3])},m(f,c){L(f,e,c),b(e,n),b(n,l),b(n,a),b(n,o),t[9](e),i||(u=E(n,"click",t[5]),i=!0)},p(f,[c]){c&1&&!Y(l.src,s=f[0].image)&&_(l,"src",s),c&8&&r!==(r=!f[3])&&(n.disabled=r),c&4&&B(e,"selectedItem",f[2]),c&8&&B(e,"non-eligible",!f[3])},i:D,o:D,d(f){f&&C(e),t[9](null),i=!1,u()}}}function Qt(t,e,n){let l,s;X(t,Te,h=>n(8,l=h)),X(t,Ve,h=>n(10,s=h));let{itemData:a,slotOpen:o,index:r}=e;const i=Me();let u,f=!1,c=!0,m=a.name,d={"Orange Salamander":["Green Salamander","Purple Salamander"],"Green Salamander":["Orange Salamander","Purple Salamander"],"Purple Salamander":["Orange Salamander","Green Salamander"],"White Salamander":["Black Salamander","Gold Salamander"],"Black Salamander":["White Salamander","Gold Salamander"],"Gold Salamander":["White Salamander","Black Salamander"]};Ge(()=>{Ke(u,m)&&s.push({node:u,itemName:m})});function p(h){c&&(o||!o&&h.isTrusted==!1)&&(i("itemSelect",u),u.classList.contains("selectedItem")||n(2,f=!1),n(2,f=!f),n(6,o=!1),ge(Te,l[r]=f?a:gt,l))}function g(h){F[h?"unshift":"push"](()=>{u=h,n(1,u)})}return t.$$set=h=>{"itemData"in h&&n(0,a=h.itemData),"slotOpen"in h&&n(6,o=h.slotOpen),"index"in h&&n(7,r=h.index)},t.$$.update=()=>{if(t.$$.dirty&384&&l)for(let h in l)if(h!=r&&(l[h].name==m||d[l[h].name]&&d[l[h].name].includes(m))){n(3,c=!1);break}else n(3,c=!0)},[a,u,f,c,m,p,o,r,l,g]}class Yt extends ${constructor(e){super(),Z(this,e,Qt,Xt,M,{itemData:0,slotOpen:6,index:7})}}function $e(t,e,n){const l=t.slice();return l[27]=e[n],l}function Zt(t){return{c:D,m:D,p:D,i:D,o:D,d:D}}function $t(t){let e,n,l,s,a,o,r,i=se(t[26]),u=[];for(let c=0;c<i.length;c+=1)u[c]=xe($e(t,i,c));const f=c=>I(u[c],1,1,()=>{u[c]=null});return{c(){e=k("div"),n=k("input"),l=T(),s=k("ul");for(let c=0;c<u.length;c+=1)u[c].c();_(n,"type","text"),_(n,"class","searchBarInput svelte-668kzw"),_(n,"placeholder","Search..."),_(e,"class","searchBarCont svelte-668kzw"),_(s,"class","svelte-668kzw")},m(c,m){L(c,e,m),b(e,n),t[12](n),L(c,l,m),L(c,s,m);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(s,null);t[15](s),a=!0,o||(r=[E(n,"keydown",t[8]),E(n,"input",t[9])],o=!0)},p(c,m){if(m&1159){i=se(c[26]);let d;for(d=0;d<i.length;d+=1){const p=$e(c,i,d);u[d]?(u[d].p(p,m),z(u[d],1)):(u[d]=xe(p),u[d].c(),z(u[d],1),u[d].m(s,null))}for(ie(),d=i.length;d<u.length;d+=1)f(d);re()}},i(c){if(!a){for(let m=0;m<i.length;m+=1)z(u[m]);a=!0}},o(c){u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)I(u[m]);a=!1},d(c){c&&(C(e),C(l),C(s)),t[12](null),ze(u,c),t[15](null),o=!1,V(r)}}}function xt(t){let e,n,l;function s(o){t[14](o)}let a={itemData:t[27],eqSlotName:t[1]};return t[0]!==void 0&&(a.slotOpen=t[0]),e=new Jt({props:a}),F.push(()=>oe(e,"slotOpen",s)),e.$on("itemSelect",t[10]),{c(){Q(e.$$.fragment)},m(o,r){K(e,o,r),l=!0},p(o,r){const i={};r&2&&(i.eqSlotName=o[1]),!n&&r&1&&(n=!0,i.slotOpen=o[0],le(()=>n=!1)),e.$set(i)},i(o){l||(z(e.$$.fragment,o),l=!0)},o(o){I(e.$$.fragment,o),l=!1},d(o){U(e,o)}}}function en(t){let e,n,l;function s(o){t[13](o)}let a={itemData:t[27],index:t[2]};return t[0]!==void 0&&(a.slotOpen=t[0]),e=new Yt({props:a}),F.push(()=>oe(e,"slotOpen",s)),e.$on("itemSelect",t[10]),{c(){Q(e.$$.fragment)},m(o,r){K(e,o,r),l=!0},p(o,r){const i={};r&4&&(i.index=o[2]),!n&&r&1&&(n=!0,i.slotOpen=o[0],le(()=>n=!1)),e.$set(i)},i(o){l||(z(e.$$.fragment,o),l=!0)},o(o){I(e.$$.fragment,o),l=!1},d(o){U(e,o)}}}function xe(t){let e,n,l,s;const a=[en,xt],o=[];function r(i,u){return i[2]?0:1}return e=r(t),n=o[e]=a[e](t),{c(){n.c(),l=pt()},m(i,u){o[e].m(i,u),L(i,l,u),s=!0},p(i,u){let f=e;e=r(i),e===f?o[e].p(i,u):(ie(),I(o[f],1,1,()=>{o[f]=null}),re(),n=o[e],n?n.p(i,u):(n=o[e]=a[e](i),n.c()),z(n,1),n.m(l.parentNode,l))},i(i){s||(z(n),s=!0)},o(i){I(n),s=!1},d(i){i&&C(l),o[e].d(i)}}}function tn(t){let e;return{c(){e=k("span"),e.textContent="Loading items...",_(e,"class","svelte-668kzw")},m(n,l){L(n,e,l)},p:D,i:D,o:D,d(n){n&&C(e)}}}function nn(t){let e,n,l,s,a,o={ctx:t,current:null,token:null,hasCatch:!1,pending:tn,then:$t,catch:Zt,value:26,blocks:[,,,]};return jt(t[7],o),{c(){e=k("div"),o.block.c(),_(e,"class","dropdown svelte-668kzw"),W(()=>t[16].call(e)),R(e,"height",`${t[4]*1.25}px`)},m(r,i){L(r,e,i),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null,n=we(e,t[16].bind(e)),l=!0,s||(a=[E(e,"transitionend",t[17]),E(e,"transitioncancel",t[18])],s=!0)},p(r,[i]){t=r,Gt(o,t,i),i&16&&R(e,"height",`${t[4]*1.25}px`)},i(r){l||(z(o.block),l=!0)},o(r){for(let i=0;i<3;i+=1){const u=o.blocks[i];I(u)}l=!1},d(r){r&&C(e),o.block.d(),o.token=null,o=null,n(),s=!1,V(a)}}}function ln(t,e,n){let{slotName:l,index:s,slotOpen:a}=e;const o=Me();let r,i,u,f,c=`https://raw.githubusercontent.com/XT8SS/fc-sv/gh-pages/ff-data/${l}.json`,m,d={},p=!1;const g=fetch(c).then(async w=>{if(w.status!=200){console.error(`Failed to fetch ${(s?"weapon #":"")+l} slot data from ${c}
Response status: ${w.status}`);return}return n(11,m=await w.json()),m}).catch(w=>{console.error(`Failed to initiate ${(s?"weapon #":"")+l} slot data fetch from ${c}
${w}`)});function h(){f&&f.classList.remove("lastItem"),u.classList.remove("no-scrollbar");let w=u.querySelectorAll("li:not(.hidden)");f=w[w.length-1],f&&f.classList.add("lastItem"),(!f||f.classList.contains("duplicate"))&&(f=i),w.length<=4&&u.classList.add("no-scrollbar")}function N(w){!w.shiftKey&&w.key=="Tab"&&setTimeout(()=>{i.focus()})}function O(){f&&f.removeEventListener("keydown",N),h(),f&&f.addEventListener("keydown",N)}function P(w){w.shiftKey&&w.key=="Tab"&&setTimeout(()=>{(f.querySelector("button")||f).focus()})}function j(){let w=i.value.toLowerCase();for(let H in d)H.toLowerCase().includes(w)?d[H].element.classList.remove("hidden"):d[H].element.classList.add("hidden");O()}function v(w){o("itemSelect",w.detail);let H=u.querySelector(".selectedItem");H&&H!=w.detail&&H.classList.remove("selectedItem"),n(6,p=!0)}function S(w){F[w?"unshift":"push"](()=>{i=w,n(5,i)})}function A(w){a=w,n(0,a)}function x(w){a=w,n(0,a)}function q(w){F[w?"unshift":"push"](()=>{u=w,n(3,u)})}function Ce(){r=this.offsetWidth,n(4,r)}const y=w=>{w.propertyName=="visibility"&&(p&&(n(6,p=!1),n(5,i.value="",i),j()),a&&setTimeout(()=>{i.click(),i.select()}))},ne=w=>{w.propertyName=="visibility"&&(n(6,p=!1),a&&setTimeout(()=>{i.click(),i.select()}))};return t.$$set=w=>{"slotName"in w&&n(1,l=w.slotName),"index"in w&&n(2,s=w.index),"slotOpen"in w&&n(0,a=w.slotOpen)},t.$$.update=()=>{if(t.$$.dirty&2056&&u){for(let w=0;w<u.childElementCount;w++)d[m[w].name]={element:u.children[w],data:m[w]};h(),O()}},[a,l,s,u,r,i,p,g,P,j,v,m,S,A,x,q,Ce,y,ne]}class bt extends ${constructor(e){super(),Z(this,e,ln,nn,M,{slotName:1,index:2,slotOpen:0})}}function qe(t,{delay:e=0,duration:n=400,easing:l=ut}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:l,css:a=>`opacity: ${a*s}`}}function et(t){let e,n,l,s,a,o,r=t[1].name+"",i,u,f,c,m,d;return{c(){e=k("a"),n=k("img"),a=T(),o=k("span"),i=G(r),Y(n.src,l=t[1].image)||_(n,"src",l),_(n,"alt",s=t[1].name),_(n,"draggable","false"),_(n,"class","svelte-183otrp"),_(o,"class","tooltip"),_(o,"id","left"),_(e,"href",u=t[1].link),_(e,"target","_blank"),_(e,"class","svelte-183otrp"),R(e,"display",t[1].link?"":"none")},m(p,g){L(p,e,g),b(e,n),b(e,a),b(e,o),b(o,i),c=!0,m||(d=E(e,"focusin",t[11]),m=!0)},p(p,g){(!c||g&2&&!Y(n.src,l=p[1].image))&&_(n,"src",l),(!c||g&2&&s!==(s=p[1].name))&&_(n,"alt",s),(!c||g&2)&&r!==(r=p[1].name+"")&&J(i,r),(!c||g&2&&u!==(u=p[1].link))&&_(e,"href",u),g&2&&R(e,"display",p[1].link?"":"none")},i(p){c||(p&&W(()=>{c&&(f||(f=Oe(e,qe,{duration:150},!0)),f.run(1))}),c=!0)},o(p){p&&(f||(f=Oe(e,qe,{duration:150},!1)),f.run(0)),c=!1},d(p){p&&C(e),p&&f&&f.end(),m=!1,d()}}}function sn(t){let e,n,l=t[1],s,a,o,r=t[0].charAt(0).toUpperCase()+t[0].slice(1)+"",i,u,f,c,m,d,p,g,h,N,O,P=et(t);function j(S){t[16](S)}let v={slotName:t[0],index:null};return t[5]!==void 0&&(v.slotOpen=t[5]),p=new bt({props:v}),F.push(()=>oe(p,"slotOpen",j)),p.$on("itemSelect",t[17]),{c(){e=k("div"),n=k("div"),P.c(),a=T(),o=k("button"),i=G(r),u=T(),f=k("iconify-icon"),c=T(),m=k("button"),m.innerHTML='<iconify-icon icon="maki:cross" class="svelte-183otrp"></iconify-icon> <span class="tooltip" id="top">Clear selection</span>',d=T(),Q(p.$$.fragment),_(n,"class","eqSlotIcon svelte-183otrp"),W(()=>t[13].call(n)),R(n,"min-width",`${t[4]}px`),Qe(f,"icon","iconamoon:arrow-down-2-fill"),Qe(f,"class","svelte-183otrp"),_(o,"class","ddButton svelte-183otrp"),_(m,"class","clearButton svelte-183otrp"),_(e,"class","eqSlotCont svelte-183otrp"),B(e,"slotOpen",t[5]),B(e,"clearAllowed",t[6]&&t[7])},m(S,A){L(S,e,A),b(e,n),P.m(n,null),t[12](n),s=we(n,t[13].bind(n)),b(e,a),b(e,o),b(o,i),b(o,u),b(o,f),b(e,c),b(e,m),b(e,d),K(p,e,null),t[18](e),h=!0,N||(O=[E(window,"mousedown",t[9]),E(window,"keydown",t[10]),E(o,"click",t[14]),E(m,"click",t[15]),E(e,"keydown",t[19]),E(e,"mouseenter",t[20]),E(e,"mouseleave",t[21])],N=!0)},p(S,[A]){A&2&&M(l,l=S[1])?(ie(),I(P,1,1,D),re(),P=et(S),P.c(),z(P,1),P.m(n,null)):P.p(S,A),A&16&&R(n,"min-width",`${S[4]}px`),(!h||A&1)&&r!==(r=S[0].charAt(0).toUpperCase()+S[0].slice(1)+"")&&J(i,r);const x={};A&1&&(x.slotName=S[0]),!g&&A&32&&(g=!0,x.slotOpen=S[5],le(()=>g=!1)),p.$set(x),(!h||A&32)&&B(e,"slotOpen",S[5]),(!h||A&192)&&B(e,"clearAllowed",S[6]&&S[7])},i(S){h||(z(P),z(p.$$.fragment,S),h=!0)},o(S){I(P),I(p.$$.fragment,S),h=!1},d(S){S&&C(e),P.d(S),t[12](null),s(),U(p),t[18](null),N=!1,V(O)}}}function on(t,e,n){let l;X(t,Ae,q=>n(8,l=q));let{eqSlotName:s}=e,a,o,r,i=ht,u,f,c;const m=q=>{(!a.contains(q.target)||q.target==a||q.target==o)&&(n(5,u=!1),q.target!=a&&q.target!=o&&n(6,f=!1))},d=q=>{q.key=="Tab"&&setTimeout(()=>{n(6,f=a.contains(document.activeElement))})},p=q=>{q.relatedTarget==null&&n(6,f=!0)};function g(q){F[q?"unshift":"push"](()=>{o=q,n(3,o)})}function h(){r=this.offsetHeight,n(4,r)}const N=()=>n(5,u=!u),O=()=>{n(6,f=!1),a.classList.contains("clearAllowed")&&c.querySelector("button").click()};function P(q){u=q,n(5,u)}const j=q=>{setTimeout(()=>{Vt(o),n(7,c=q.detail.classList.contains("selectedItem")?q.detail:null)})};function v(q){F[q?"unshift":"push"](()=>{a=q,n(2,a)})}const S=q=>{q.key=="Escape"&&n(5,u=!1)},A=()=>n(6,f=!0),x=()=>{a.contains(document.activeElement)||n(6,f=!1)};return t.$$set=q=>{"eqSlotName"in q&&n(0,s=q.eqSlotName)},t.$$.update=()=>{t.$$.dirty&259&&l[s]&&l[s].name!=i.name&&n(1,i=l[s])},[s,i,a,o,r,u,f,c,l,m,d,p,g,h,N,O,P,j,v,S,A,x]}class rn extends ${constructor(e){super(),Z(this,e,on,sn,M,{eqSlotName:0})}}function tt(t,e,n){const l=t.slice();return l[1]=e[n],l[2]=e,l[3]=n,l}function nt(t){let e,n,l;function s(o){t[0](o,t[1],t[2],t[3])}let a={};return t[1]!==void 0&&(a.eqSlotName=t[1]),e=new rn({props:a}),F.push(()=>oe(e,"eqSlotName",s)),{c(){Q(e.$$.fragment)},m(o,r){K(e,o,r),l=!0},p(o,r){t=o;const i={};!n&&r&0&&(n=!0,i.eqSlotName=t[1],le(()=>n=!1)),e.$set(i)},i(o){l||(z(e.$$.fragment,o),l=!0)},o(o){I(e.$$.fragment,o),l=!1},d(o){U(e,o)}}}function an(t){let e,n,l=se(Array(...Ze)),s=[];for(let o=0;o<l.length;o+=1)s[o]=nt(tt(t,l,o));const a=o=>I(s[o],1,1,()=>{s[o]=null});return{c(){e=k("div");for(let o=0;o<s.length;o+=1)s[o].c();_(e,"class","armorBox svelte-3p4tb9")},m(o,r){L(o,e,r);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(e,null);n=!0},p(o,[r]){if(r&0){l=se(Array(...Ze));let i;for(i=0;i<l.length;i+=1){const u=tt(o,l,i);s[i]?(s[i].p(u,r),z(s[i],1)):(s[i]=nt(u),s[i].c(),z(s[i],1),s[i].m(e,null))}for(ie(),i=l.length;i<s.length;i+=1)a(i);re()}},i(o){if(!n){for(let r=0;r<l.length;r+=1)z(s[r]);n=!0}},o(o){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)I(s[r]);n=!1},d(o){o&&C(e),ze(s,o)}}}function un(t,e,n){function l(s,a,o,r){o[r]=s}return[l]}class fn extends ${constructor(e){super(),Z(this,e,un,an,M,{})}}function cn(t){let e,n=(t[5]?`${Math.floor(t[2][t[0]]*.675+19.8)}% Reduction`:t[6])+"",l,s,a,o;return{c(){e=k("span"),l=G(n),_(e,"class","statValue svelte-16tz2kw"),_(e,"tabindex","0"),_(e,"style",s=t[5]?`font-size: ${t[3]*.7/6.85}px;`:""),B(e,"hidden",t[4]),B(e,"negative",t[6]<0),B(e,"reduction",t[5])},m(r,i){L(r,e,i),b(e,l),a||(o=[E(e,"mouseenter",t[10]),E(e,"mouseleave",t[11]),E(e,"focusin",t[12]),E(e,"focusout",t[13])],a=!0)},p(r,i){i&101&&n!==(n=(r[5]?`${Math.floor(r[2][r[0]]*.675+19.8)}% Reduction`:r[6])+"")&&J(l,n),i&40&&s!==(s=r[5]?`font-size: ${r[3]*.7/6.85}px;`:"")&&_(e,"style",s),i&16&&B(e,"hidden",r[4]),i&64&&B(e,"negative",r[6]<0),i&32&&B(e,"reduction",r[5])},d(r){r&&C(e),a=!1,V(o)}}}function dn(t){let e,n=(t[0]!="endurance"?t[6]:t[6].toFixed(2))+"",l;return{c(){e=k("span"),l=G(n),_(e,"class","statValue svelte-16tz2kw"),B(e,"hidden",t[4]),B(e,"negative",t[6]<0)},m(s,a){L(s,e,a),b(e,l)},p(s,a){a&65&&n!==(n=(s[0]!="endurance"?s[6]:s[6].toFixed(2))+"")&&J(l,n),a&16&&B(e,"hidden",s[4]),a&64&&B(e,"negative",s[6]<0)},d(s){s&&C(e)}}}function lt(t){let e,n=`${t[1]} Bonus`,l;return{c(){e=k("span"),l=G(n),R(e,"font-size",`${t[3]*.7/t[7][t[0]]}px`)},m(s,a){L(s,e,a),b(e,l)},p(s,a){a&2&&n!==(n=`${s[1]} Bonus`)&&J(l,n),a&9&&R(e,"font-size",`${s[3]*.7/s[7][s[0]]}px`)},d(s){s&&C(e)}}}function mn(t){let e,n,l,s,a,o,r,i;function u(d,p){return d[0]!="armor"?dn:cn}let f=u(t),c=f(t),m=t[4]&&lt(t);return{c(){e=k("div"),n=k("img"),s=T(),c.c(),a=T(),m&&m.c(),Y(n.src,l="stats/"+t[0]+".svg")||_(n,"src",l),_(n,"alt",t[1]),_(n,"class","svelte-16tz2kw"),_(e,"id",t[0]),_(e,"class","svelte-16tz2kw"),W(()=>t[14].call(e)),B(e,"hidden",t[6]==0)},m(d,p){L(d,e,p),b(e,n),b(e,s),c.m(e,null),b(e,a),m&&m.m(e,null),o=we(e,t[14].bind(e)),r||(i=[E(n,"mouseenter",t[8]),E(n,"mouseleave",t[9])],r=!0)},p(d,[p]){p&1&&!Y(n.src,l="stats/"+d[0]+".svg")&&_(n,"src",l),p&2&&_(n,"alt",d[1]),f===(f=u(d))&&c?c.p(d,p):(c.d(1),c=f(d),c&&(c.c(),c.m(e,a))),d[4]?m?m.p(d,p):(m=lt(d),m.c(),m.m(e,null)):m&&(m.d(1),m=null),p&1&&_(e,"id",d[0]),p&64&&B(e,"hidden",d[6]==0)},i:D,o:D,d(d){d&&C(e),c.d(),m&&m.d(),o(),r=!1,V(i)}}}function pn(t,e,n){let l,s;X(t,de,O=>n(2,s=O));let{codeName:a,formalName:o}=e,r,i,u,f={armor:5.9,magicDmg:5.65,meleeDmg:5.7,rangedDmg:6.45,hpRegen:7.35,endurance:7.85,sightRange:8.45,walkSpeed:8.3,jumpPower:8.7,ammoReturn:9.3,height:6.1};const c=()=>n(4,i=!0),m=()=>n(4,i=!1),d=()=>n(5,u=!0),p=()=>n(5,u=!1),g=()=>n(5,u=!0),h=()=>n(5,u=!1);function N(){r=this.offsetWidth,n(3,r)}return t.$$set=O=>{"codeName"in O&&n(0,a=O.codeName),"formalName"in O&&n(1,o=O.formalName)},t.$$.update=()=>{t.$$.dirty&5&&n(6,l=s[a]||0)},[a,o,s,r,i,u,l,f,c,m,d,p,g,h,N]}class _n extends ${constructor(e){super(),Z(this,e,pn,mn,M,{codeName:0,formalName:1})}}function st(t,e,n){const l=t.slice();return l[2]=e[n][0],l[3]=e[n][1],l[4]=e,l[5]=n,l}function ot(t){let e,n,l,s;function a(i){t[0](i,t[2],t[4],t[5])}function o(i){t[1](i,t[3],t[4],t[5])}let r={};return t[2]!==void 0&&(r.codeName=t[2]),t[3]!==void 0&&(r.formalName=t[3]),e=new _n({props:r}),F.push(()=>oe(e,"codeName",a)),F.push(()=>oe(e,"formalName",o)),{c(){Q(e.$$.fragment)},m(i,u){K(e,i,u),s=!0},p(i,u){t=i;const f={};!n&&u&0&&(n=!0,f.codeName=t[2],le(()=>n=!1)),!l&&u&0&&(l=!0,f.formalName=t[3],le(()=>l=!1)),e.$set(f)},i(i){s||(z(e.$$.fragment,i),s=!0)},o(i){I(e.$$.fragment,i),s=!1},d(i){U(e,i)}}}function hn(t){let e,n,l=se(Object.entries(Re)),s=[];for(let o=0;o<l.length;o+=1)s[o]=ot(st(t,l,o));const a=o=>I(s[o],1,1,()=>{s[o]=null});return{c(){e=k("div");for(let o=0;o<s.length;o+=1)s[o].c();_(e,"class","statBox svelte-lu37w6")},m(o,r){L(o,e,r);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(e,null);n=!0},p(o,[r]){if(r&0){l=se(Object.entries(Re));let i;for(i=0;i<l.length;i+=1){const u=st(o,l,i);s[i]?(s[i].p(u,r),z(s[i],1)):(s[i]=ot(u),s[i].c(),z(s[i],1),s[i].m(e,null))}for(ie(),i=l.length;i<s.length;i+=1)a(i);re()}},i(o){if(!n){for(let r=0;r<l.length;r+=1)z(s[r]);n=!0}},o(o){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)I(s[r]);n=!1},d(o){o&&C(e),ze(s,o)}}}function gn(t,e,n){function l(a,o,r,i){r[i][0]=a}function s(a,o,r,i){r[i][1]=a}return[l,s]}class bn extends ${constructor(e){super(),Z(this,e,gn,hn,M,{})}}function wn(t){let e,n,l=t[2].description+"",s,a;return{c(){e=k("span"),n=G('"'),s=G(l),a=G('"'),_(e,"class","svelte-1a5adtw")},m(o,r){L(o,e,r),b(e,n),b(e,s),b(e,a)},p(o,r){r&4&&l!==(l=o[2].description+"")&&J(s,l)},d(o){o&&C(e)}}}function kn(t){let e=t[12],n,l=rt(t);return{c(){l.c(),n=pt()},m(s,a){l.m(s,a),L(s,n,a)},p(s,a){a&4096&&M(e,e=s[12])?(l.d(1),l=rt(s),l.c(),l.m(n.parentNode,n)):l.p(s,a)},d(s){s&&C(n),l.d(s)}}}function it(t){let e,n,l=t[3].name.split(" (")[0]+":",s,a,o,r=t[10]+t[14](t[3])+"",i;return{c(){e=k("div"),n=k("span"),s=G(l),a=T(),o=k("span"),i=G(r),_(n,"class","svelte-1a5adtw"),R(n,"font-size",t[11].special?"calc(var(--u) * 2.5)":""),_(o,"class","svelte-1a5adtw"),_(e,"id","special"),_(e,"class","svelte-1a5adtw")},m(u,f){L(u,e,f),b(e,n),b(n,s),b(e,a),b(e,o),b(o,i)},p(u,f){f&8&&l!==(l=u[3].name.split(" (")[0]+":")&&J(s,l),f&2048&&R(n,"font-size",u[11].special?"calc(var(--u) * 2.5)":""),f&1032&&r!==(r=u[10]+u[14](u[3])+"")&&J(i,r)},d(u){u&&C(e)}}}function rt(t){let e,n,l,s=t[8].name+":",a,o,r,i=t[14](t[8])+"",u,f,c,m,d=t[3]&&it(t);return{c(){e=k("button"),n=k("div"),l=k("span"),a=G(s),o=T(),r=k("span"),u=G(i),f=T(),d&&d.c(),c=T(),m=k("span"),m.textContent="(Expand)",_(l,"class","svelte-1a5adtw"),_(r,"class","svelte-1a5adtw"),_(n,"id","basic"),_(n,"class","svelte-1a5adtw"),_(m,"class","tooltip"),_(m,"id","top"),_(e,"class","gearPreview svelte-1a5adtw")},m(p,g){L(p,e,g),b(e,n),b(n,l),b(l,a),b(n,o),b(n,r),b(r,u),b(e,f),d&&d.m(e,null),b(e,c),b(e,m),t[19](e)},p(p,g){g&256&&s!==(s=p[8].name+":")&&J(a,s),g&256&&i!==(i=p[14](p[8])+"")&&J(u,i),p[3]?d?d.p(p,g):(d=it(p),d.c(),d.m(e,c)):d&&(d.d(1),d=null)},d(p){p&&C(e),d&&d.d(),t[19](null)}}}function at(t){let e,n,l,s,a,o,r=t[2].name+"",i,u,f,c;return{c(){e=k("a"),n=k("img"),a=T(),o=k("span"),i=G(r),Y(n.src,l=t[2].image)||_(n,"src",l),_(n,"alt",s=t[2].name),_(n,"draggable","false"),_(n,"class","svelte-1a5adtw"),_(o,"class","tooltip"),_(o,"id","right"),_(e,"href",u=t[2].link),_(e,"target","_blank"),_(e,"class","svelte-1a5adtw"),R(e,"display",t[2].link?"":"none"),R(e,"border-radius",t[2].tool?"calc(var(--u))":"")},m(m,d){L(m,e,d),b(e,n),b(e,a),b(e,o),b(o,i),c=!0},p(m,d){(!c||d&4&&!Y(n.src,l=m[2].image))&&_(n,"src",l),(!c||d&4&&s!==(s=m[2].name))&&_(n,"alt",s),(!c||d&4)&&r!==(r=m[2].name+"")&&J(i,r),(!c||d&4&&u!==(u=m[2].link))&&_(e,"href",u),d&4&&R(e,"display",m[2].link?"":"none"),d&4&&R(e,"border-radius",m[2].tool?"calc(var(--u))":"")},i(m){c||(m&&W(()=>{c&&(f||(f=Oe(e,qe,{duration:150},!0)),f.run(1))}),c=!0)},o(m){m&&(f||(f=Oe(e,qe,{duration:150},!1)),f.run(0)),c=!1},d(m){m&&C(e),m&&f&&f.end()}}}function yn(t){let e,n,l,s,a,o,r=t[2],i,u,f,c,m,d,p;function g(v,S){if(v[2].name&&!v[2].tool)return kn;if(v[2].tool)return wn}let h=g(t),N=h&&h(t),O=at(t);function P(v){t[22](v)}let j={slotName:t[0],index:t[1]};return t[9]!==void 0&&(j.slotOpen=t[9]),f=new bt({props:j}),F.push(()=>oe(f,"slotOpen",P)),f.$on("itemSelect",t[13]),{c(){e=k("div"),n=k("button"),n.innerHTML=`<iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="90deg" class="svelte-1a5adtw"></iconify-icon>
        Gear`,l=T(),s=k("div"),N&&N.c(),a=T(),o=k("div"),O.c(),u=T(),Q(f.$$.fragment),_(n,"class","ddButton svelte-1a5adtw"),_(o,"class","gearSlotIcon svelte-1a5adtw"),W(()=>t[20].call(o)),R(o,"min-width",`${t[6]}px`),_(s,"class","gearInfoCont svelte-1a5adtw"),R(s,"justify-content",t[2].name?"":"flex-end"),_(e,"class","gearSlot svelte-1a5adtw"),B(e,"slotOpen",t[9])},m(v,S){L(v,e,S),b(e,n),b(e,l),b(e,s),N&&N.m(s,null),b(s,a),b(s,o),O.m(o,null),i=we(o,t[20].bind(o)),t[21](s),b(e,u),K(f,e,null),t[23](e),m=!0,d||(p=[E(window,"mousedown",t[16]),E(window,"keydown",t[17]),E(n,"click",t[18])],d=!0)},p(v,[S]){h===(h=g(v))&&N?N.p(v,S):(N&&N.d(1),N=h&&h(v),N&&(N.c(),N.m(s,a))),S&4&&M(r,r=v[2])?(ie(),I(O,1,1,D),re(),O=at(v),O.c(),z(O,1),O.m(o,null)):O.p(v,S),S&64&&R(o,"min-width",`${v[6]}px`),S&4&&R(s,"justify-content",v[2].name?"":"flex-end");const A={};S&1&&(A.slotName=v[0]),S&2&&(A.index=v[1]),!c&&S&512&&(c=!0,A.slotOpen=v[9],le(()=>c=!1)),f.$set(A),(!m||S&512)&&B(e,"slotOpen",v[9])},i(v){m||(z(O),z(f.$$.fragment,v),m=!0)},o(v){I(O),I(f.$$.fragment,v),m=!1},d(v){v&&C(e),N&&N.d(),O.d(v),i(),t[21](null),U(f),t[23](null),d=!1,V(p)}}}function Sn(t,e,n){let l,s;X(t,Te,y=>n(15,l=y)),X(t,de,y=>n(12,s=y));let{slotName:a,index:o}=e,r,i,u,f,c=gt,m,d,p,g="",h={basic:!1,special:!1};function N(){setTimeout(()=>{if(f)for(let y of f.querySelectorAll(".gearPreview > div"));})}function O(y){let ne;if(y.name=="Void Needle")ne=y.base+(s[y.type]||0)-(s.armor||0)*5.625;else if(c.name=="Pureblood Dagger"){let w,H={magicDmg:s.magicDmg||0,meleeDmg:s.meleeDmg||0,rangedDmg:s.rangedDmg||0},ae=Object.keys(H).reduce((_e,Je)=>H[_e]>H[Je]?_e:Je),Ue=0;for(let _e in H)_e!=ae&&(Ue+=H[_e]);w=(s[ae]||0)*2-Ue,ne=y.base+w,y.name=="HP restored per Blood Sap"&&(ne=y.base+w/2)}else if(y.type.includes("/")){let w=y.type.split("/"),H=0;for(let ae of w)H+=(s[ae]||0)*y[`${ae}Mult`];ne=y.base+H}else ne=y.base+(s[y.type]||0)*y.mult;return Math.floor(ne)}const P=y=>{(!r.contains(y.target)||r.contains(y.target)&&i.contains(y.target))&&n(9,p=!1)},j=y=>{y.key=="Escape"&&n(9,p=!1)},v=()=>n(9,p=!p);function S(y){F[y?"unshift":"push"](()=>{f=y,n(7,f)})}function A(){u=this.offsetHeight,n(6,u)}function x(y){F[y?"unshift":"push"](()=>{i=y,n(5,i)})}function q(y){p=y,n(9,p)}function Ce(y){F[y?"unshift":"push"](()=>{r=y,n(4,r)})}return t.$$set=y=>{"slotName"in y&&n(0,a=y.slotName),"index"in y&&n(1,o=y.index)},t.$$.update=()=>{t.$$.dirty&32782&&l[o]&&l[o].name!=c.name&&(n(2,c=l[o]),!c.tool&&c.name&&(n(8,m=c.moves.filter(y=>y.basic)[0]),n(3,d=c.moves.filter(y=>y.special)[0]),d&&d.name.includes("Fantastic Beamstorm")?n(10,g="~"):n(10,g=""),n(11,h.special=d&&["Fantastic Beamstorm","HP restored per Blood Sap"].includes(d.name.split(" (")[0]),h)))},[a,o,c,d,r,i,u,f,m,p,g,h,s,N,O,l,P,j,v,S,A,x,q,Ce]}class vn extends ${constructor(e){super(),Z(this,e,Sn,yn,M,{slotName:0,index:1})}}function Nn(t,e,n){const l=t.slice();return l[2]=e[n],l}function On(t){let e,n;return e=new vn({props:{slotName:"gear",index:t[2]}}),{c(){Q(e.$$.fragment)},m(l,s){K(e,l,s),n=!0},p:D,i(l){n||(z(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){U(e,l)}}}function qn(t){let e,n,l=se([1,2,3,4,5]),s=[];for(let a=0;a<5;a+=1)s[a]=On(Nn(t,l,a));return{c(){e=k("div");for(let a=0;a<5;a+=1)s[a].c();_(e,"class","gearBox svelte-ibag1e")},m(a,o){L(a,e,o);for(let r=0;r<5;r+=1)s[r]&&s[r].m(e,null);t[1](e),n=!0},p:D,i(a){if(!n){for(let o=0;o<5;o+=1)z(s[o]);n=!0}},o(a){s=s.filter(Boolean);for(let o=0;o<5;o+=1)I(s[o]);n=!1},d(a){a&&C(e),ze(s,a),t[1](null)}}}function zn(t,e,n){let l;function s(a){F[a?"unshift":"push"](()=>{l=a,n(0,l)})}return[l,s]}class Dn extends ${constructor(e){super(),Z(this,e,zn,qn,M,{})}}function Cn(t){let e,n,l,s,a,o,r,i,u,f,c,m;return W(t[5]),s=new fn({}),o=new bn({}),i=new Dn({}),{c(){e=k("main"),n=k("div"),l=k("div"),Q(s.$$.fragment),a=T(),Q(o.$$.fragment),r=T(),Q(i.$$.fragment),_(l,"class","eqCont svelte-13cummz"),_(n,"class","calcBox svelte-13cummz"),_(e,"class","svelte-13cummz"),W(()=>t[6].call(e)),B(e,"portrait-NOT",!t[2]),R(e,"width",t[2]?`${t[3]*1.56}px`:"")},m(d,p){L(d,e,p),b(e,n),b(n,l),K(s,l,null),b(l,a),K(o,l,null),b(n,r),K(i,n,null),u=we(e,t[6].bind(e)),f=!0,c||(m=E(window,"resize",t[5]),c=!0)},p(d,[p]){(!f||p&4)&&B(e,"portrait-NOT",!d[2]),p&12&&R(e,"width",d[2]?`${d[3]*1.56}px`:"")},i(d){f||(z(s.$$.fragment,d),z(o.$$.fragment,d),z(i.$$.fragment,d),f=!0)},o(d){I(s.$$.fragment,d),I(o.$$.fragment,d),I(i.$$.fragment,d),f=!1},d(d){d&&C(e),U(s),U(o),U(i),u(),c=!1,m()}}}function En(t,e,n){let l;X(t,Ve,f=>n(4,l=f));let s,a,o,r;Ge(()=>{n(2,r=o>a)});function i(){n(0,a=window.outerHeight),n(1,o=window.outerWidth)}function u(){s=this.offsetHeight,n(3,s)}return t.$$.update=()=>{if(t.$$.dirty&19&&(o||a)&&(n(2,r=o>a),l))for(let f of l)Ke(f.node,f.itemName);t.$$.dirty&4&&document.documentElement.style.setProperty("--u","0.75vh")},[a,o,r,s,l,i,u]}class Bn extends ${constructor(e){super(),Z(this,e,En,Cn,M,{})}}new Bn({target:document.body});
