var oe=Object.defineProperty;var le=(e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var F=(e,t,n)=>(le(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function _(){}function Z(e){return e()}function K(){return Object.create(null)}function b(e){e.forEach(Z)}function ee(e){return typeof e=="function"}function C(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let j;function se(e,t){return e===t?!0:(j||(j=document.createElement("a")),j.href=t,e===j.href)}function ie(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function q(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode&&e.parentNode.removeChild(e)}function te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function ne(e){return document.createTextNode(e)}function O(){return ne(" ")}function H(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ue(e){return Array.from(e.childNodes)}function ce(e,t){t=""+t,e.data!==t&&(e.data=t)}function I(e,t,n){e.classList.toggle(t,!!n)}let W;function R(e){W=e}function fe(){if(!W)throw new Error("Function called outside component initialization");return W}function ae(e){fe().$$.on_mount.push(e)}const x=[],k=[];let E=[];const V=[],de=Promise.resolve();let J=!1;function pe(){J||(J=!0,de.then(re))}function M(e){E.push(e)}function he(e){V.push(e)}const T=new Set;let N=0;function re(){if(N!==0)return;const e=W;do{try{for(;N<x.length;){const t=x[N];N++,R(t),ge(t.$$)}}catch(t){throw x.length=0,N=0,t}for(R(null),x.length=0,N=0;k.length;)k.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];T.has(n)||(T.add(n),n())}E.length=0}while(x.length);for(;V.length;)V.pop()();J=!1,T.clear(),R(e)}function ge(e){if(e.fragment!==null){e.update(),b(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}function me(e){const t=[],n=[];E.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),E=t}const z=new Set;let y;function _e(){y={r:0,c:[],p:y}}function $e(){y.r||b(y.c),y=y.p}function $(e,t){e&&e.i&&(z.delete(e),e.i(t))}function S(e,t,n,r){if(e&&e.o){if(z.has(e))return;z.add(e),y.c.push(()=>{z.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function U(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ve(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function D(e){e&&e.c()}function A(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),M(()=>{const i=e.$$.on_mount.map(Z).filter(ee);e.$$.on_destroy?e.$$.on_destroy.push(...i):b(i),e.$$.on_mount=[]}),o.forEach(M)}function B(e,t){const n=e.$$;n.fragment!==null&&(me(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function we(e,t){e.$$.dirty[0]===-1&&(x.push(e),pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function P(e,t,n,r,o,i,l=null,u=[-1]){const s=W;R(e);const c=e.$$={fragment:null,ctx:[],props:i,update:_,not_equal:o,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:K(),dirty:u,skip_bound:!1,root:t.target||s.$$.root};l&&l(c.root);let h=!1;if(c.ctx=n?n(e,t.props||{},(f,d,...a)=>{const w=a.length?a[0]:d;return c.ctx&&o(c.ctx[f],c.ctx[f]=w)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](w),h&&we(e,f)),d}):[],c.update(),h=!0,b(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const f=ue(t.target);c.fragment&&c.fragment.l(f),f.forEach(v)}else c.fragment&&c.fragment.c();t.intro&&$(e.$$.fragment),A(e,t.target,t.anchor),re()}R(s)}class L{constructor(){F(this,"$$");F(this,"$$set")}$destroy(){B(this,1),this.$destroy=_}$on(t,n){if(!ee(n))return _;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ye="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ye);function Se(e){let t;return{c(){t=m("div"),p(t,"class","dropdown svelte-1f7kq4p")},m(n,r){q(n,t,r)},p:_,i:_,o:_,d(n){n&&v(t)}}}class be extends L{constructor(t){super(),P(this,t,null,Se,C,{})}}function qe(e){let t,n,r,o,i=e[0].charAt(0).toUpperCase()+e[0].slice(1)+"",l,u,s,c,h,f;return s=new be({}),{c(){t=m("div"),n=m("div"),r=O(),o=m("button"),l=ne(i),u=O(),D(s.$$.fragment),p(n,"class","eqSlotIcon svelte-1iiwxls"),p(o,"class","eqSlotDDButton svelte-1iiwxls"),p(t,"class","eqSlotCont svelte-1iiwxls"),p(t,"id",e[0]),I(t,"active",e[3])},m(d,a){q(d,t,a),g(t,n),e[5](n),g(t,r),g(t,o),g(o,l),g(t,u),A(s,t,null),e[7](t),c=!0,h||(f=[H(window,"click",e[4]),H(o,"click",e[6])],h=!0)},p(d,[a]){(!c||a&1)&&i!==(i=d[0].charAt(0).toUpperCase()+d[0].slice(1)+"")&&ce(l,i),(!c||a&1)&&p(t,"id",d[0]),(!c||a&8)&&I(t,"active",d[3])},i(d){c||($(s.$$.fragment,d),c=!0)},o(d){S(s.$$.fragment,d),c=!1},d(d){d&&v(t),e[5](null),B(s),e[7](null),h=!1,b(f)}}}function Ne(e,t,n){let{eqSlotName:r}=t,o,i,l;const u=f=>{o.contains(f.target)?f.target==i&&n(3,l=!1):n(3,l=!1)};function s(f){k[f?"unshift":"push"](()=>{i=f,n(2,i)})}const c=()=>n(3,l=!l);function h(f){k[f?"unshift":"push"](()=>{o=f,n(1,o)})}return e.$$set=f=>{"eqSlotName"in f&&n(0,r=f.eqSlotName)},[r,o,i,l,u,s,c,h]}class xe extends L{constructor(t){super(),P(this,t,Ne,qe,C,{eqSlotName:0})}}function G(e,t,n){const r=e.slice();return r[2]=t[n],r[3]=t,r[4]=n,r}function Q(e){let t,n,r;function o(l){e[1](l,e[2],e[3],e[4])}let i={};return e[2]!==void 0&&(i.eqSlotName=e[2]),t=new xe({props:i}),k.push(()=>ve(t,"eqSlotName",o)),{c(){D(t.$$.fragment)},m(l,u){A(t,l,u),r=!0},p(l,u){e=l;const s={};!n&&u&1&&(n=!0,s.eqSlotName=e[2],he(()=>n=!1)),t.$set(s)},i(l){r||($(t.$$.fragment,l),r=!0)},o(l){S(t.$$.fragment,l),r=!1},d(l){B(t,l)}}}function Ee(e){let t,n,r=U(e[0]),o=[];for(let l=0;l<r.length;l+=1)o[l]=Q(G(e,r,l));const i=l=>S(o[l],1,1,()=>{o[l]=null});return{c(){t=m("div");for(let l=0;l<o.length;l+=1)o[l].c();p(t,"class","armorBox svelte-vvg27w")},m(l,u){q(l,t,u);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(t,null);n=!0},p(l,[u]){if(u&1){r=U(l[0]);let s;for(s=0;s<r.length;s+=1){const c=G(l,r,s);o[s]?(o[s].p(c,u),$(o[s],1)):(o[s]=Q(c),o[s].c(),$(o[s],1),o[s].m(t,null))}for(_e(),s=r.length;s<o.length;s+=1)i(s);$e()}},i(l){if(!n){for(let u=0;u<r.length;u+=1)$(o[u]);n=!0}},o(l){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)S(o[u]);n=!1},d(l){l&&v(t),te(o,l)}}}function Ae(e,t,n){let r=["head","body","legs","feet","neck","back","ring","misc"];function o(i,l,u,s){u[s]=i,n(0,r)}return[r,o]}class Be extends L{constructor(t){super(),P(this,t,Ae,Ee,C,{})}}function X(e,t,n){const r=e.slice();return r[2]=t[n],r[4]=n,r}function Y(e){let t,n,r,o,i,l;return{c(){t=m("div"),n=m("img"),o=O(),i=m("span"),i.textContent="123",l=O(),se(n.src,r="public/stats/"+e[2]+".png")||p(n,"src",r),p(n,"alt",e[1][e[4]]),p(n,"class","svelte-1k685lv"),p(i,"class","statValue svelte-1k685lv"),p(t,"id",e[2]),p(t,"class","svelte-1k685lv")},m(u,s){q(u,t,s),g(t,n),g(t,o),g(t,i),g(t,l)},p:_,d(u){u&&v(t)}}}function Oe(e){let t,n=U(e[0]),r=[];for(let o=0;o<n.length;o+=1)r[o]=Y(X(e,n,o));return{c(){t=m("div");for(let o=0;o<r.length;o+=1)r[o].c();p(t,"class","statBox svelte-1k685lv")},m(o,i){q(o,t,i);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(t,null)},p(o,[i]){if(i&3){n=U(o[0]);let l;for(l=0;l<n.length;l+=1){const u=X(o,n,l);r[l]?r[l].p(u,i):(r[l]=Y(u),r[l].c(),r[l].m(t,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=n.length}},i:_,o:_,d(o){o&&v(t),te(r,o)}}}function ke(e){return[["armor","magicDmg","meleeDmg","rangedDmg","hpRegen","endurance","sightRange","walkSpeed","height","jumpPower","ammoReturn"],["Armor","Magic","Melee","Ranged","HP Regen","Endurance","Sight Range","Walk Speed","Height","Jump Power","Ammo Return"]]}class Ce extends L{constructor(t){super(),P(this,t,ke,Oe,C,{})}}function Pe(e){let t;return{c(){t=m("div"),p(t,"class","wpBox svelte-1p9qhs8")},m(n,r){q(n,t,r)},p:_,i:_,o:_,d(n){n&&v(t)}}}class Le extends L{constructor(t){super(),P(this,t,null,Pe,C,{})}}function Re(e){let t,n,r,o,i,l,u,s,c,h,f,d;return M(e[7]),o=new Be({}),l=new Ce({}),s=new Le({}),{c(){t=m("main"),n=m("div"),r=m("div"),D(o.$$.fragment),i=O(),D(l.$$.fragment),u=O(),D(s.$$.fragment),p(r,"class","eqCont svelte-rc6dro"),p(n,"class","calcBox svelte-rc6dro"),p(n,"style",c=e[2]?`height: ${e[2]}px`:`width: ${e[3]}px`),I(n,"portrait",e[4].includes("portrait")),p(t,"class","svelte-rc6dro")},m(a,w){q(a,t,w),g(t,n),g(n,r),A(o,r,null),g(r,i),A(l,r,null),g(n,u),A(s,n,null),e[8](n),h=!0,f||(d=[H(window,"resize",e[6]),H(window,"resize",e[7])],f=!0)},p(a,[w]){(!h||w&12&&c!==(c=a[2]?`height: ${a[2]}px`:`width: ${a[3]}px`))&&p(n,"style",c),(!h||w&16)&&I(n,"portrait",a[4].includes("portrait"))},i(a){h||($(o.$$.fragment,a),$(l.$$.fragment,a),$(s.$$.fragment,a),h=!0)},o(a){S(o.$$.fragment,a),S(l.$$.fragment,a),S(s.$$.fragment,a),h=!1},d(a){a&&v(t),B(o),B(l),B(s),e[8](null),f=!1,b(d)}}}function De(e,t,n){let r,o,i,l,u="",s;function c(){n(4,u=screen.orientation.type),setTimeout(()=>{n(2,[i,l]=[r*.75,o*.75],i,n(3,l)),u.includes("landscape")?n(3,l=null):n(2,i=null)})}ae(c);function h(){n(0,r=window.outerHeight),n(1,o=window.outerWidth)}function f(d){k[d?"unshift":"push"](()=>{s=d,n(5,s)})}return[r,o,i,l,u,s,c,h,f]}class We extends L{constructor(t){super(),P(this,t,De,Re,C,{})}}new We({target:document.body});
