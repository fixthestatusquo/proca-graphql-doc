import"./D8owG1S5.js";import{i as vt}from"./D1e-z2TN.js";import{U as we,Z as Br,Y as js,k as tn,y as Uf,a0 as HE,a1 as XE,a2 as tf,a3 as ur,a4 as lr,V as dt,aU as Mf,aV as KE,T as bi,X as ZE,N as eD,aW as $f,aw as Vf,R as Ko,m as Rr,ab as rf,aB as sf,O as Gf,Q as nD,aX as Ys,aY as Io,P as Si,aZ as Ws,a_ as tD,a$ as qf,b0 as rD,b1 as iD,b2 as sD,a9 as Zo,b3 as kr,b4 as jf,q as Yf,b5 as aD,t as Mr,b6 as oD,b7 as uD,b8 as lD,b9 as Bo,ba as cD,I as eu,bb as fD,_ as pD,bc as dD,bd as hD,be as bs,e as Wf,bf as gD,bg as mD,bh as vD,bi as yD,bj as ED,bk as DD,bl as TD,bm as _D,bn as AD,aF as bD,bo as SD,bp as ID,bq as wD,br as ND,bs as FD,bt as CD,a5 as OD,p as qe,f as rn,d as pn,g as Xe,u as We,o as _e,j as nu,b as Ae,c as je,v as Yn,n as Wn,H as xD,l as tu,s as yi,a as ru,i as kD,aq as RD}from"./C5qmwJW-.js";import{B as LD,p as Re,i as Po,c as BD}from"./D5U4kpk5.js";import{b as PD}from"./m4vJfwh5.js";function Ei(n,t){return t}function UD(n,t,r){for(var s=n.items,a=[],u=t.length,c=0;c<u;c++)rD(t[c].e,a,!0);var f=u>0&&a.length===0&&r!==null;if(f){var h=r.parentNode;iD(h),h.append(r),s.clear(),pt(n,t[0].prev,t[u-1].next)}sD(a,()=>{for(var m=0;m<u;m++){var v=t[m];f||(s.delete(v.k),pt(n,v.prev,v.next)),Si(v.e,!f)}})}function Di(n,t,r,s,a,u=null){var c=n,f={flags:t,items:new Map,first:null},h=(t&jf)!==0;if(h){var m=n;c=we?ur(kr(m)):m.appendChild(Ko())}we&&Br();var v=null,D=!1,b=new Map,k=Uf(()=>{var X=r();return Vf(X)?X:X==null?[]:$f(X)}),I,B;function U(){MD(B,I,f,b,c,a,t,s,r),u!==null&&(I.length===0?v?Gf(v):v=bi(()=>u(c)):v!==null&&nD(v,()=>{v=null}))}js(()=>{B??=Zo,I=tn(k);var X=I.length;if(D&&X===0)return;D=X===0;let he=!1;if(we){var K=HE(c)===XE;K!==(X===0)&&(c=tf(),ur(c),lr(!1),he=!0)}if(we){for(var Q=null,oe,P=0;P<X;P++){if(dt.nodeType===Mf&&dt.data===KE){c=dt,he=!0,lr(!1);break}var $=I[P],ue=s($,P);oe=Uo(dt,f,Q,null,$,ue,P,a,t,r),f.items.set(ue,oe),Q=oe}X>0&&ur(tf())}if(we)X===0&&u&&(v=bi(()=>u(c)));else if(ZE()){var F=new Set,q=eD;for(P=0;P<X;P+=1){$=I[P],ue=s($,P);var Oe=f.items.get(ue)??b.get(ue);Oe?(t&(Ws|Ys))!==0&&Jf(Oe,$,P,t):(oe=Uo(null,f,null,null,$,ue,P,a,t,r,!0),b.set(ue,oe)),F.add(ue)}for(const[Pe,Cn]of f.items)F.has(Pe)||q.skipped_effects.add(Cn.e);q.add_callback(U)}else U();he&&lr(!0),tn(k)}),we&&(c=dt)}function MD(n,t,r,s,a,u,c,f,h){var m=(c&aD)!==0,v=(c&(Ws|Ys))!==0,D=t.length,b=r.items,k=r.first,I=k,B,U=null,X,he=[],K=[],Q,oe,P,$;if(m)for($=0;$<D;$+=1)Q=t[$],oe=f(Q,$),P=b.get(oe),P!==void 0&&(P.a?.measure(),(X??=new Set).add(P));for($=0;$<D;$+=1){if(Q=t[$],oe=f(Q,$),P=b.get(oe),P===void 0){var ue=s.get(oe);if(ue!==void 0){s.delete(oe),b.set(oe,ue);var F=U?U.next:I;pt(r,U,ue),pt(r,ue,F),wo(ue,F,a),U=ue}else{var q=I?I.e.nodes_start:a;U=Uo(q,r,U,U===null?r.first:U.next,Q,oe,$,u,c,h)}b.set(oe,U),he=[],K=[],I=U.next;continue}if(v&&Jf(P,Q,$,c),(P.e.f&Io)!==0&&(Gf(P.e),m&&(P.a?.unfix(),(X??=new Set).delete(P))),P!==I){if(B!==void 0&&B.has(P)){if(he.length<K.length){var Oe=K[0],Pe;U=Oe.prev;var Cn=he[0],Lt=he[he.length-1];for(Pe=0;Pe<he.length;Pe+=1)wo(he[Pe],Oe,a);for(Pe=0;Pe<K.length;Pe+=1)B.delete(K[Pe]);pt(r,Cn.prev,Lt.next),pt(r,U,Cn),pt(r,Lt,Oe),I=Oe,U=Lt,$-=1,he=[],K=[]}else B.delete(P),wo(P,I,a),pt(r,P.prev,P.next),pt(r,P,U===null?r.first:U.next),pt(r,U,P),U=P;continue}for(he=[],K=[];I!==null&&I.k!==oe;)(I.e.f&Io)===0&&(B??=new Set).add(I),K.push(I),I=I.next;if(I===null)continue;P=I}he.push(P),U=P,I=P.next}if(I!==null||B!==void 0){for(var On=B===void 0?[]:$f(B);I!==null;)(I.e.f&Io)===0&&On.push(I),I=I.next;var Bt=On.length;if(Bt>0){var xn=(c&jf)!==0&&D===0?a:null;if(m){for($=0;$<Bt;$+=1)On[$].a?.measure();for($=0;$<Bt;$+=1)On[$].a?.fix()}UD(r,On,xn)}}m&&Yf(()=>{if(X!==void 0)for(P of X)P.a?.apply()}),n.first=r.first&&r.first.e,n.last=U&&U.e;for(var Tn of s.values())Si(Tn.e);s.clear()}function Jf(n,t,r,s){(s&Ws)!==0&&sf(n.v,t),(s&Ys)!==0?sf(n.i,r):n.i=r}function Uo(n,t,r,s,a,u,c,f,h,m,v){var D=(h&Ws)!==0,b=(h&tD)===0,k=D?b?Rr(a,!1,!1):rf(a):a,I=(h&Ys)===0?c:rf(c),B={i:I,v:k,k:u,a:null,e:null,prev:r,next:s};try{if(n===null){var U=document.createDocumentFragment();U.append(n=Ko())}return B.e=bi(()=>f(n,k,I,m),we),B.e.prev=r&&r.e,B.e.next=s&&s.e,r===null?v||(t.first=B):(r.next=B,r.e.next=B.e),s!==null&&(s.prev=B,s.e.prev=B.e),B}finally{}}function wo(n,t,r){for(var s=n.next?n.next.e.nodes_start:r,a=t?t.e.nodes_start:r,u=n.e.nodes_start;u!==null&&u!==s;){var c=qf(u);a.before(u),u=c}}function pt(n,t,r){t===null?n.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function $D(n,t,r=!1,s=!1,a=!1){var u=n,c="";Mr(()=>{var f=Zo;if(c===(c=t()??"")){we&&Br();return}if(f.nodes_start!==null&&(oD(f.nodes_start,f.nodes_end),f.nodes_start=f.nodes_end=null),c!==""){if(we){dt.data;for(var h=Br(),m=h;h!==null&&(h.nodeType!==Mf||h.data!=="");)m=h,h=qf(h);if(h===null)throw uD(),lD;Bo(dt,m),u=ur(h);return}var v=c+"";r?v=`<svg>${v}</svg>`:s&&(v=`<math>${v}</math>`);var D=cD(v);if((r||s)&&(D=kr(D)),Bo(kr(D),D.lastChild),r||s)for(;kr(D);)u.before(kr(D));else u.before(D)}})}function at(n,t,r,s,a){we&&Br();var u=t.$$slots?.[r],c=!1;u===!0&&(u=t[r==="default"?"children":r],c=!0),u===void 0?a!==null&&a(n):u(n,c?()=>s:s)}function SS(n){const t={};n.children&&(t.default=!0);for(const r in n.$$slots)t[r]=!0;return t}function zf(n,t,r,s,a,u){let c=we;we&&Br();var f=null;we&&dt.nodeType===fD&&(f=dt,Br());var h=we?dt:n,m=new LD(h,!1);js(()=>{const v=t()||null;var D=v==="svg"?dD:null;if(v===null){m.ensure(null,null),bs(!0);return}return m.ensure(v,b=>{if(v){if(f=we?f:D?document.createElementNS(D,v):document.createElement(v),Bo(f,f),s){we&&hD(v)&&f.append(document.createComment(""));var k=we?kr(f):f.appendChild(Ko());we&&(k===null?lr(!1):ur(k)),s(f,k)}Zo.nodes_end=f,b.before(f)}we&&ur(b)}),bs(!0),()=>{v&&bs(!1)}},pD),eu(()=>{bs(!0)}),c&&(lr(!0),ur(h))}function VD(n,t){var r=void 0,s;js(()=>{r!==(r=t())&&(s&&(Si(s),s=null),r&&(s=bi(()=>{Wf(()=>r(n))})))})}function Qf(n){var t,r,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var a=n.length;for(t=0;t<a;t++)n[t]&&(r=Qf(n[t]))&&(s&&(s+=" "),s+=r)}else for(r in n)n[r]&&(s&&(s+=" "),s+=r);return s}function GD(){for(var n,t,r=0,s="",a=arguments.length;r<a;r++)(n=arguments[r])&&(t=Qf(n))&&(s&&(s+=" "),s+=t);return s}function qD(n){return typeof n=="object"?GD(n):n??""}const af=[...` 	
\r\f \v\uFEFF`];function jD(n,t,r){var s=n==null?"":""+n;if(t&&(s=s?s+" "+t:t),r){for(var a in r)if(r[a])s=s?s+" "+a:a;else if(s.length)for(var u=a.length,c=0;(c=s.indexOf(a,c))>=0;){var f=c+u;(c===0||af.includes(s[c-1]))&&(f===s.length||af.includes(s[f]))?s=(c===0?"":s.substring(0,c))+s.substring(f+1):c=f}}return s===""?null:s}function of(n,t=!1){var r=t?" !important;":";",s="";for(var a in n){var u=n[a];u!=null&&u!==""&&(s+=" "+a+": "+u+r)}return s}function No(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function YD(n,t){if(t){var r="",s,a;if(Array.isArray(t)?(s=t[0],a=t[1]):s=t,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var u=!1,c=0,f=!1,h=[];s&&h.push(...Object.keys(s).map(No)),a&&h.push(...Object.keys(a).map(No));var m=0,v=-1;const B=n.length;for(var D=0;D<B;D++){var b=n[D];if(f?b==="/"&&n[D-1]==="*"&&(f=!1):u?u===b&&(u=!1):b==="/"&&n[D+1]==="*"?f=!0:b==='"'||b==="'"?u=b:b==="("?c++:b===")"&&c--,!f&&u===!1&&c===0){if(b===":"&&v===-1)v=D;else if(b===";"||D===B-1){if(v!==-1){var k=No(n.substring(m,v).trim());if(!h.includes(k)){b!==";"&&D++;var I=n.substring(m,D).trim();r+=" "+I+";"}}m=D+1,v=-1}}}}return s&&(r+=of(s)),a&&(r+=of(a,!0)),r=r.trim(),r===""?null:r}return n==null?null:String(n)}function Hf(n,t,r,s,a,u){var c=n.__className;if(we||c!==r||c===void 0){var f=jD(r,s,u);(!we||f!==n.getAttribute("class"))&&(f==null?n.removeAttribute("class"):t?n.className=f:n.setAttribute("class",f)),n.__className=r}else if(u&&a!==u)for(var h in u){var m=!!u[h];(a==null||m!==!!a[h])&&n.classList.toggle(h,m)}return u}function Fo(n,t={},r,s){for(var a in r){var u=r[a];t[a]!==u&&(r[a]==null?n.style.removeProperty(a):n.style.setProperty(a,u,s))}}function WD(n,t,r,s){var a=n.__style;if(we||a!==t){var u=YD(t,s);(!we||u!==n.getAttribute("style"))&&(u==null?n.removeAttribute("style"):n.style.cssText=u),n.__style=t}else s&&(Array.isArray(s)?(Fo(n,r?.[0],s[0]),Fo(n,r?.[1],s[1],"important")):Fo(n,r,s));return s}function Mo(n,t,r=!1){if(n.multiple){if(t==null)return;if(!Vf(t))return gD();for(var s of n.options)s.selected=t.includes(uf(s));return}for(s of n.options){var a=uf(s);if(mD(a,t)){s.selected=!0;return}}(!r||t!==void 0)&&(n.selectedIndex=-1)}function JD(n){var t=new MutationObserver(()=>{Mo(n,n.__value)});t.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),eu(()=>{t.disconnect()})}function uf(n){return"__value"in n?n.__value:n.value}const li=Symbol("class"),ci=Symbol("style"),Xf=Symbol("is custom element"),Kf=Symbol("is html");function zD(n){if(we){var t=!1,r=()=>{if(!t){if(t=!0,n.hasAttribute("value")){var s=n.value;Ct(n,"value",null),n.value=s}if(n.hasAttribute("checked")){var a=n.checked;Ct(n,"checked",null),n.checked=a}}};n.__on_r=r,Yf(r),SD()}}function QD(n,t){t?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Ct(n,t,r,s){var a=ep(n);we&&(a[t]=n.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&n.nodeName==="LINK")||a[t]!==(a[t]=r)&&(t==="loading"&&(n[ND]=r),r==null?n.removeAttribute(t):typeof r!="string"&&np(n).includes(t)?n[t]=r:n.setAttribute(t,r))}function HD(n,t,r,s,a=!1,u=!1){if(we&&a&&n.tagName==="INPUT"){var c=n,f=c.type==="checkbox"?"defaultChecked":"defaultValue";f in r||zD(c)}var h=ep(n),m=h[Xf],v=!h[Kf];let D=we&&m;D&&lr(!1);var b=t||{},k=n.tagName==="OPTION";for(var I in t)I in r||(r[I]=null);r.class?r.class=qD(r.class):(s||r[li])&&(r.class=null),r[ci]&&(r.style??=null);var B=np(n);for(const P in r){let $=r[P];if(k&&P==="value"&&$==null){n.value=n.__value="",b[P]=$;continue}if(P==="class"){var U=n.namespaceURI==="http://www.w3.org/1999/xhtml";Hf(n,U,$,s,t?.[li],r[li]),b[P]=$,b[li]=r[li];continue}if(P==="style"){WD(n,$,t?.[ci],r[ci]),b[P]=$,b[ci]=r[ci];continue}var X=b[P];if(!($===X&&!($===void 0&&n.hasAttribute(P)))){b[P]=$;var he=P[0]+P[1];if(he!=="$$")if(he==="on"){const ue={},F="$$"+P;let q=P.slice(2);var K=FD(q);if(ED(q)&&(q=q.slice(0,-7),ue.capture=!0),!K&&X){if($!=null)continue;n.removeEventListener(q,b[F],ue),b[F]=null}if($!=null)if(K)n[`__${q}`]=$,TD([q]);else{let Oe=function(Pe){b[P].call(this,Pe)};b[F]=DD(q,n,Oe,ue)}else K&&(n[`__${q}`]=void 0)}else if(P==="style")Ct(n,P,$);else if(P==="autofocus")_D(n,!!$);else if(!m&&(P==="__value"||P==="value"&&$!=null))n.value=n.__value=$;else if(P==="selected"&&k)QD(n,$);else{var Q=P;v||(Q=AD(Q));var oe=Q==="defaultValue"||Q==="defaultChecked";if($==null&&!m&&!oe)if(h[P]=null,Q==="value"||Q==="checked"){let ue=n;const F=t===void 0;if(Q==="value"){let q=ue.defaultValue;ue.removeAttribute(Q),ue.defaultValue=q,ue.value=ue.__value=F?q:null}else{let q=ue.defaultChecked;ue.removeAttribute(Q),ue.defaultChecked=q,ue.checked=F?q:!1}}else n.removeAttribute(P);else oe||B.includes(Q)&&(m||typeof $!="string")?(n[Q]=$,Q in h&&(h[Q]=bD)):typeof $!="function"&&Ct(n,Q,$)}}}return D&&lr(!0),b}function Zf(n,t,r=[],s=[],a,u=!1,c=!1){vD(r,s,f=>{var h=void 0,m={},v=n.nodeName==="SELECT",D=!1;if(js(()=>{var k=t(...f.map(tn)),I=HD(n,h,k,a,u,c);D&&v&&"value"in k&&Mo(n,k.value);for(let U of Object.getOwnPropertySymbols(m))k[U]||Si(m[U]);for(let U of Object.getOwnPropertySymbols(k)){var B=k[U];U.description===yD&&(!h||B!==h[U])&&(m[U]&&Si(m[U]),m[U]=bi(()=>VD(n,()=>B))),I[U]=B}h=I}),v){var b=n;Wf(()=>{Mo(b,h.value,!0),JD(b)})}D=!0})}function ep(n){return n.__attributes??={[Xf]:n.nodeName.includes("-"),[Kf]:n.namespaceURI===ID}}var lf=new Map;function np(n){var t=n.getAttribute("is")||n.nodeName,r=lf.get(t);if(r)return r;lf.set(t,r=[]);for(var s,a=n,u=Element.prototype;u!==a;){s=CD(a);for(var c in s)s[c].set&&r.push(c);a=wD(a)}return r}function ie(n,t,r){var s=OD(n,t);s&&s.set&&(n[t]=r,eu(()=>{n[t]=null}))}var XD=rn("<pre><code> </code></pre>");function KD(n,t){qe(t,!1);let r=Re(t,"token",8);const s=void 0,a=void 0;var u={options:s,renderers:a};vt();var c=XD(),f=pn(c),h=pn(f,!0);return Xe(f),Xe(c),Mr(()=>{Hf(f,1,(_e(r()),We(()=>`lang-${r().lang}`))),nu(h,(_e(r()),We(()=>r().text)))}),Ae(n,c),ie(t,"options",s),ie(t,"renderers",a),je(u)}var ZD=rn("<code> </code>");function eT(n,t){qe(t,!1);let r=Re(t,"token",8);const s=void 0,a=void 0;var u={options:s,renderers:a};vt();var c=ZD(),f=pn(c,!0);return Xe(c),Mr(h=>nu(f,h),[()=>(_e(r()),We(()=>r().raw.slice(1,r().raw.length-1)))]),Ae(n,c),ie(t,"options",s),ie(t,"renderers",a),je(u)}function Rs(n,t){let r=Re(t,"tokens",8),s=Re(t,"renderers",8),a=Re(t,"options",8);var u=Yn(),c=Wn(u);{var f=h=>{var m=Yn(),v=Wn(m);Di(v,1,r,Ei,(D,b)=>{tp(D,{get token(){return tn(b)},get renderers(){return s()},get options(){return a()}})}),Ae(h,m)};Po(c,h=>{r()&&h(f)})}Ae(n,u)}function tp(n,t){qe(t,!1);let r=Re(t,"token",8),s=Re(t,"renderers",8),a=Re(t,"options",8);vt();var u=Yn(),c=Wn(u);{var f=h=>{var m=Yn(),v=Wn(m);BD(v,()=>s()[r().type],(D,b)=>{b(D,{get token(){return r()},get options(){return a()},get renderers(){return s()},children:(k,I)=>{var B=Yn(),U=Wn(B);{var X=K=>{Rs(K,{get tokens(){return _e(r()),We(()=>r().tokens)},get renderers(){return s()},get options(){return a()}})},he=K=>{var Q=xD();Mr(()=>nu(Q,(_e(r()),We(()=>r().raw)))),Ae(K,Q)};Po(U,K=>{_e(r()),We(()=>"tokens"in r()&&r().tokens)?K(X):K(he,!1)})}Ae(k,B)},$$slots:{default:!0}})}),Ae(h,m)};Po(c,h=>{_e(s()),_e(r()),We(()=>s()[r().type])&&h(f)})}Ae(n,u),je()}function nT(n,t){qe(t,!1);let r=Re(t,"token",8),s=Re(t,"options",8),a=Re(t,"renderers",8),u=Rr();tu(()=>_e(r()),()=>{yi(u,r().ordered?"ol":"ul")}),ru(),vt();var c=Yn(),f=Wn(c);zf(f,()=>tn(u),!1,(h,m)=>{Zf(h,()=>({start:(_e(r()),We(()=>r().start||1))}));var v=Yn(),D=Wn(v);Di(D,1,()=>(_e(r()),We(()=>r().items)),Ei,(b,k)=>{{let I=Uf(()=>(tn(k),We(()=>({...tn(k)}))));tp(b,{get token(){return tn(I)},get options(){return s()},get renderers(){return a()}})}}),Ae(m,v)}),Ae(n,c),je()}var tT=rn("<li><!></li>");function rT(n,t){qe(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=tT(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),je(u)}var iT=rn("<blockquote><!></blockquote>");function sT(n,t){qe(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=iT(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),je(u)}var aT=rn("<br/>");function oT(n,t){qe(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=aT();return Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),je(u)}var uT=rn("<del><!></del>");function lT(n,t){qe(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=uT(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),je(u)}var cT=rn("<dfn><!></dfn>");function fT(n,t){qe(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=cT(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),je(u)}var pT=rn("<em><!></em>");function dT(n,t){qe(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=pT(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),je(u)}function Ii(...n){return`/${n.flatMap(t=>t.split("/")).filter(t=>!!t).join("/")}`}function wi(n){return n.startsWith("/")||n.startsWith("#")}function rp(n,t){return t.slug(n).replace(/--+/g,"-")}function hT(n,t){qe(t,!1);let r=Re(t,"token",8),s=Re(t,"options",8);const a=void 0;let u=Rr();tu(()=>(_e(r()),_e(s())),()=>{yi(u,rp(r().text,s().slugger))}),ru();var c={renderers:a};vt();var f=Yn(),h=Wn(f);return zf(h,()=>`h${r().depth}`,!1,(m,v)=>{Zf(m,()=>({id:tn(u)}));var D=Yn(),b=Wn(D);at(b,t,"default",{},null),Ae(v,D)}),Ae(n,f),ie(t,"renderers",a),je(c)}var gT=rn("<hr/>");function mT(n,t){qe(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=gT();return Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),je(u)}function vT(n,t){qe(t,!1);let r=Re(t,"token",8);const s=void 0,a=void 0;var u={options:s,renderers:a};vt();var c=Yn(),f=Wn(c);return $D(f,()=>(_e(r()),We(()=>r().text))),Ae(n,c),ie(t,"options",s),ie(t,"renderers",a),je(u)}var yT=rn('<img class="markdown-image svelte-1v4pgnj"/>');function ET(n,t){qe(t,!1);let r=Re(t,"token",8),s=Re(t,"options",8);const a=void 0;var u={renderers:a};vt();var c=yT();return Mr(f=>{Ct(c,"src",f),Ct(c,"title",(_e(r()),We(()=>r().title))),Ct(c,"alt",(_e(r()),We(()=>r().text)))},[()=>(_e(wi),_e(r()),_e(Ii),_e(s()),We(()=>wi(r().href)?Ii(s().baseUrl,r().href):r().href))]),Ae(n,c),ie(t,"renderers",a),je(u)}var DT=rn("<a><!></a>");function TT(n,t){qe(t,!1);let r=Re(t,"token",8),s=Re(t,"options",8);const a=void 0;var u={renderers:a};vt();var c=DT(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Mr(h=>{Ct(c,"href",h),Ct(c,"title",(_e(r()),We(()=>r().title)))},[()=>(_e(wi),_e(r()),_e(Ii),_e(s()),We(()=>wi(r().href)?Ii(s().baseUrl,r().href):r().href))]),Ae(n,c),ie(t,"renderers",a),je(u)}var _T=rn("<p><!></p>");function AT(n,t){qe(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=_T(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),je(u)}function cf(n,t){qe(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=Yn(),f=Wn(c);return at(f,t,"default",{},null),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),je(u)}var bT=rn("<strong><!></strong>");function ST(n,t){qe(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=bT(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),je(u)}function IT(n,t){qe(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=Yn(),f=Wn(c);return at(f,t,"default",{},null),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),je(u)}var wT=rn('<th scope="col"><!></th>'),NT=rn("<td><!></td>"),FT=rn("<tr></tr>"),CT=rn("<table><thead><tr></tr></thead><tbody></tbody></table>");function OT(n,t){qe(t,!1);let r=Re(t,"token",8),s=Re(t,"options",8),a=Re(t,"renderers",8);vt();var u=CT(),c=pn(u),f=pn(c);Di(f,5,()=>(_e(r()),We(()=>r().header)),Ei,(m,v)=>{var D=wT(),b=pn(D);Rs(b,{get tokens(){return tn(v),We(()=>tn(v).tokens)},get options(){return s()},get renderers(){return a()}}),Xe(D),Ae(m,D)}),Xe(f),Xe(c);var h=kD(c);Di(h,5,()=>(_e(r()),We(()=>r().rows)),Ei,(m,v)=>{var D=FT();Di(D,5,()=>tn(v),Ei,(b,k)=>{var I=NT(),B=pn(I);Rs(B,{get tokens(){return tn(k),We(()=>tn(k).tokens)},get options(){return s()},get renderers(){return a()}}),Xe(I),Ae(b,I)}),Xe(D),Ae(m,D)}),Xe(h),Xe(u),Ae(n,u),je()}const xT=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,kT=Object.hasOwnProperty;class ip{constructor(){this.occurrences,this.reset()}slug(t,r){const s=this;let a=RT(t,r===!0);const u=a;for(;kT.call(s.occurrences,a);)s.occurrences[u]++,a=u+"-"+s.occurrences[u];return s.occurrences[a]=0,a}reset(){this.occurrences=Object.create(null)}}function RT(n,t){return typeof n!="string"?"":(t||(n=n.toLowerCase()),n.replace(xT,"").replace(/ /g,"-"))}function iu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var gr=iu();function sp(n){gr=n}var Ti={exec:()=>null};function ve(n,t=""){let r=typeof n=="string"?n:n.source,s={replace:(a,u)=>{let c=typeof u=="string"?u:u.source;return c=c.replace(dn.caret,"$1"),r=r.replace(a,c),s},getRegex:()=>new RegExp(r,t)};return s}var dn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},LT=/^(?:[ \t]*(?:\n|$))+/,BT=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,PT=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Oi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,UT=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,su=/(?:[*+-]|\d{1,9}[.)])/,ap=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,op=ve(ap).replace(/bull/g,su).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),MT=ve(ap).replace(/bull/g,su).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),au=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,$T=/^[^\n]+/,ou=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,VT=ve(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ou).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),GT=ve(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,su).getRegex(),Js="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",uu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,qT=ve("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",uu).replace("tag",Js).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),up=ve(au).replace("hr",Oi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Js).getRegex(),jT=ve(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",up).getRegex(),lu={blockquote:jT,code:BT,def:VT,fences:PT,heading:UT,hr:Oi,html:qT,lheading:op,list:GT,newline:LT,paragraph:up,table:Ti,text:$T},ff=ve("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Oi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Js).getRegex(),YT={...lu,lheading:MT,table:ff,paragraph:ve(au).replace("hr",Oi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ff).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Js).getRegex()},WT={...lu,html:ve(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",uu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ti,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ve(au).replace("hr",Oi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",op).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},JT=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,zT=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,lp=/^( {2,}|\\)\n(?!\s*$)/,QT=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,zs=/[\p{P}\p{S}]/u,cu=/[\s\p{P}\p{S}]/u,cp=/[^\s\p{P}\p{S}]/u,HT=ve(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,cu).getRegex(),fp=/(?!~)[\p{P}\p{S}]/u,XT=/(?!~)[\s\p{P}\p{S}]/u,KT=/(?:[^\s\p{P}\p{S}]|~)/u,ZT=ve(/link|code|html/,"g").replace("link",new RegExp("\\[(?:[^\\[\\]`]|(?<!`)(?<a>`+)[^`]+\\k<a>(?!`))*?\\]\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)]|\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)])*\\))*\\)")).replace("code",new RegExp("(?<!`)(?<b>`+)[^`]+\\k<b>(?!`)")).replace("html",/<(?! )[^<>]*?>/).getRegex(),pp=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,e_=ve(pp,"u").replace(/punct/g,zs).getRegex(),n_=ve(pp,"u").replace(/punct/g,fp).getRegex(),dp="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",t_=ve(dp,"gu").replace(/notPunctSpace/g,cp).replace(/punctSpace/g,cu).replace(/punct/g,zs).getRegex(),r_=ve(dp,"gu").replace(/notPunctSpace/g,KT).replace(/punctSpace/g,XT).replace(/punct/g,fp).getRegex(),i_=ve("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,cp).replace(/punctSpace/g,cu).replace(/punct/g,zs).getRegex(),s_=ve(/\\(punct)/,"gu").replace(/punct/g,zs).getRegex(),a_=ve(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),o_=ve(uu).replace("(?:-->|$)","-->").getRegex(),u_=ve("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",o_).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ls=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,l_=ve(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Ls).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),hp=ve(/^!?\[(label)\]\[(ref)\]/).replace("label",Ls).replace("ref",ou).getRegex(),gp=ve(/^!?\[(ref)\](?:\[\])?/).replace("ref",ou).getRegex(),c_=ve("reflink|nolink(?!\\()","g").replace("reflink",hp).replace("nolink",gp).getRegex(),pf=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,fu={_backpedal:Ti,anyPunctuation:s_,autolink:a_,blockSkip:ZT,br:lp,code:zT,del:Ti,emStrongLDelim:e_,emStrongRDelimAst:t_,emStrongRDelimUnd:i_,escape:JT,link:l_,nolink:gp,punctuation:HT,reflink:hp,reflinkSearch:c_,tag:u_,text:QT,url:Ti},f_={...fu,link:ve(/^!?\[(label)\]\((.*?)\)/).replace("label",Ls).getRegex(),reflink:ve(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ls).getRegex()},$o={...fu,emStrongRDelimAst:r_,emStrongLDelim:n_,url:ve(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",pf).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ve(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",pf).getRegex()},p_={...$o,br:ve(lp).replace("{2,}","*").getRegex(),text:ve($o.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ss={normal:lu,gfm:YT,pedantic:WT},fi={normal:fu,gfm:$o,breaks:p_,pedantic:f_},d_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},df=n=>d_[n];function ft(n,t){if(t){if(dn.escapeTest.test(n))return n.replace(dn.escapeReplace,df)}else if(dn.escapeTestNoEncode.test(n))return n.replace(dn.escapeReplaceNoEncode,df);return n}function hf(n){try{n=encodeURI(n).replace(dn.percentDecode,"%")}catch{return null}return n}function gf(n,t){let r=n.replace(dn.findPipe,(u,c,f)=>{let h=!1,m=c;for(;--m>=0&&f[m]==="\\";)h=!h;return h?"|":" |"}),s=r.split(dn.splitPipe),a=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;a<s.length;a++)s[a]=s[a].trim().replace(dn.slashPipe,"|");return s}function pi(n,t,r){let s=n.length;if(s===0)return"";let a=0;for(;a<s&&n.charAt(s-a-1)===t;)a++;return n.slice(0,s-a)}function h_(n,t){if(n.indexOf(t[1])===-1)return-1;let r=0;for(let s=0;s<n.length;s++)if(n[s]==="\\")s++;else if(n[s]===t[0])r++;else if(n[s]===t[1]&&(r--,r<0))return s;return r>0?-2:-1}function mf(n,t,r,s,a){let u=t.href,c=t.title||null,f=n[1].replace(a.other.outputLinkReplace,"$1");s.state.inLink=!0;let h={type:n[0].charAt(0)==="!"?"image":"link",raw:r,href:u,title:c,text:f,tokens:s.inlineTokens(f)};return s.state.inLink=!1,h}function g_(n,t,r){let s=n.match(r.other.indentCodeCompensation);if(s===null)return t;let a=s[1];return t.split(`
`).map(u=>{let c=u.match(r.other.beginningSpace);if(c===null)return u;let[f]=c;return f.length>=a.length?u.slice(a.length):u}).join(`
`)}var Bs=class{options;rules;lexer;constructor(n){this.options=n||gr}space(n){let t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){let t=this.rules.block.code.exec(n);if(t){let r=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:pi(r,`
`)}}}fences(n){let t=this.rules.block.fences.exec(n);if(t){let r=t[0],s=g_(r,t[3]||"",this.rules);return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(n){let t=this.rules.block.heading.exec(n);if(t){let r=t[2].trim();if(this.rules.other.endingHash.test(r)){let s=pi(r,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(r=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(n){let t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:pi(t[0],`
`)}}blockquote(n){let t=this.rules.block.blockquote.exec(n);if(t){let r=pi(t[0],`
`).split(`
`),s="",a="",u=[];for(;r.length>0;){let c=!1,f=[],h;for(h=0;h<r.length;h++)if(this.rules.other.blockquoteStart.test(r[h]))f.push(r[h]),c=!0;else if(!c)f.push(r[h]);else break;r=r.slice(h);let m=f.join(`
`),v=m.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${m}`:m,a=a?`${a}
${v}`:v;let D=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(v,u,!0),this.lexer.state.top=D,r.length===0)break;let b=u.at(-1);if(b?.type==="code")break;if(b?.type==="blockquote"){let k=b,I=k.raw+`
`+r.join(`
`),B=this.blockquote(I);u[u.length-1]=B,s=s.substring(0,s.length-k.raw.length)+B.raw,a=a.substring(0,a.length-k.text.length)+B.text;break}else if(b?.type==="list"){let k=b,I=k.raw+`
`+r.join(`
`),B=this.list(I);u[u.length-1]=B,s=s.substring(0,s.length-b.raw.length)+B.raw,a=a.substring(0,a.length-k.raw.length)+B.raw,r=I.substring(u.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:u,text:a}}}list(n){let t=this.rules.block.list.exec(n);if(t){let r=t[1].trim(),s=r.length>1,a={type:"list",raw:"",ordered:s,start:s?+r.slice(0,-1):"",loose:!1,items:[]};r=s?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=s?r:"[*+-]");let u=this.rules.other.listItemRegex(r),c=!1;for(;n;){let h=!1,m="",v="";if(!(t=u.exec(n))||this.rules.block.hr.test(n))break;m=t[0],n=n.substring(m.length);let D=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,X=>" ".repeat(3*X.length)),b=n.split(`
`,1)[0],k=!D.trim(),I=0;if(this.options.pedantic?(I=2,v=D.trimStart()):k?I=t[1].length+1:(I=t[2].search(this.rules.other.nonSpaceChar),I=I>4?1:I,v=D.slice(I),I+=t[1].length),k&&this.rules.other.blankLine.test(b)&&(m+=b+`
`,n=n.substring(b.length+1),h=!0),!h){let X=this.rules.other.nextBulletRegex(I),he=this.rules.other.hrRegex(I),K=this.rules.other.fencesBeginRegex(I),Q=this.rules.other.headingBeginRegex(I),oe=this.rules.other.htmlBeginRegex(I);for(;n;){let P=n.split(`
`,1)[0],$;if(b=P,this.options.pedantic?(b=b.replace(this.rules.other.listReplaceNesting,"  "),$=b):$=b.replace(this.rules.other.tabCharGlobal,"    "),K.test(b)||Q.test(b)||oe.test(b)||X.test(b)||he.test(b))break;if($.search(this.rules.other.nonSpaceChar)>=I||!b.trim())v+=`
`+$.slice(I);else{if(k||D.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||K.test(D)||Q.test(D)||he.test(D))break;v+=`
`+b}!k&&!b.trim()&&(k=!0),m+=P+`
`,n=n.substring(P.length+1),D=$.slice(I)}}a.loose||(c?a.loose=!0:this.rules.other.doubleBlankLine.test(m)&&(c=!0));let B=null,U;this.options.gfm&&(B=this.rules.other.listIsTask.exec(v),B&&(U=B[0]!=="[ ] ",v=v.replace(this.rules.other.listReplaceTask,""))),a.items.push({type:"list_item",raw:m,task:!!B,checked:U,loose:!1,text:v,tokens:[]}),a.raw+=m}let f=a.items.at(-1);if(f)f.raw=f.raw.trimEnd(),f.text=f.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let h=0;h<a.items.length;h++)if(this.lexer.state.top=!1,a.items[h].tokens=this.lexer.blockTokens(a.items[h].text,[]),!a.loose){let m=a.items[h].tokens.filter(D=>D.type==="space"),v=m.length>0&&m.some(D=>this.rules.other.anyLine.test(D.raw));a.loose=v}if(a.loose)for(let h=0;h<a.items.length;h++)a.items[h].loose=!0;return a}}html(n){let t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){let t=this.rules.block.def.exec(n);if(t){let r=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:s,title:a}}}table(n){let t=this.rules.block.table.exec(n);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let r=gf(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],u={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===s.length){for(let c of s)this.rules.other.tableAlignRight.test(c)?u.align.push("right"):this.rules.other.tableAlignCenter.test(c)?u.align.push("center"):this.rules.other.tableAlignLeft.test(c)?u.align.push("left"):u.align.push(null);for(let c=0;c<r.length;c++)u.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:u.align[c]});for(let c of a)u.rows.push(gf(c,u.header.length).map((f,h)=>({text:f,tokens:this.lexer.inline(f),header:!1,align:u.align[h]})));return u}}lheading(n){let t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){let t=this.rules.block.paragraph.exec(n);if(t){let r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(n){let t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){let t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(n){let t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){let t=this.rules.inline.link.exec(n);if(t){let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let u=pi(r.slice(0,-1),"\\");if((r.length-u.length)%2===0)return}else{let u=h_(t[2],"()");if(u===-2)return;if(u>-1){let c=(t[0].indexOf("!")===0?5:4)+t[1].length+u;t[2]=t[2].substring(0,u),t[0]=t[0].substring(0,c).trim(),t[3]=""}}let s=t[2],a="";if(this.options.pedantic){let u=this.rules.other.pedanticHrefTitle.exec(s);u&&(s=u[1],a=u[3])}else a=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?s=s.slice(1):s=s.slice(1,-1)),mf(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(n,t){let r;if((r=this.rules.inline.reflink.exec(n))||(r=this.rules.inline.nolink.exec(n))){let s=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=t[s.toLowerCase()];if(!a){let u=r[0].charAt(0);return{type:"text",raw:u,text:u}}return mf(r,a,r[0],this.lexer,this.rules)}}emStrong(n,t,r=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!(!s||s[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!r||this.rules.inline.punctuation.exec(r))){let a=[...s[0]].length-1,u,c,f=a,h=0,m=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(m.lastIndex=0,t=t.slice(-1*n.length+a);(s=m.exec(t))!=null;){if(u=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!u)continue;if(c=[...u].length,s[3]||s[4]){f+=c;continue}else if((s[5]||s[6])&&a%3&&!((a+c)%3)){h+=c;continue}if(f-=c,f>0)continue;c=Math.min(c,c+f+h);let v=[...s[0]][0].length,D=n.slice(0,a+s.index+v+c);if(Math.min(a,c)%2){let k=D.slice(1,-1);return{type:"em",raw:D,text:k,tokens:this.lexer.inlineTokens(k)}}let b=D.slice(2,-2);return{type:"strong",raw:D,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(n){let t=this.rules.inline.code.exec(n);if(t){let r=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(r),a=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return s&&a&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:t[0],text:r}}}br(n){let t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){let t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){let t=this.rules.inline.autolink.exec(n);if(t){let r,s;return t[2]==="@"?(r=t[1],s="mailto:"+r):(r=t[1],s=r),{type:"link",raw:t[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(n){let t;if(t=this.rules.inline.url.exec(n)){let r,s;if(t[2]==="@")r=t[0],s="mailto:"+r;else{let a;do a=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(a!==t[0]);r=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(n){let t=this.rules.inline.text.exec(n);if(t){let r=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:r}}}},qn=class Vo{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||gr,this.options.tokenizer=this.options.tokenizer||new Bs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:dn,block:Ss.normal,inline:fi.normal};this.options.pedantic?(r.block=Ss.pedantic,r.inline=fi.pedantic):this.options.gfm&&(r.block=Ss.gfm,this.options.breaks?r.inline=fi.breaks:r.inline=fi.gfm),this.tokenizer.rules=r}static get rules(){return{block:Ss,inline:fi}}static lex(t,r){return new Vo(r).lex(t)}static lexInline(t,r){return new Vo(r).inlineTokens(t)}lex(t){t=t.replace(dn.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let s=this.inlineQueue[r];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,r=[],s=!1){for(this.options.pedantic&&(t=t.replace(dn.tabCharGlobal,"    ").replace(dn.spaceLine,""));t;){let a;if(this.options.extensions?.block?.some(c=>(a=c.call({lexer:this},t,r))?(t=t.substring(a.raw.length),r.push(a),!0):!1))continue;if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length);let c=r.at(-1);a.raw.length===1&&c!==void 0?c.raw+=`
`:r.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length);let c=r.at(-1);c?.type==="paragraph"||c?.type==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.text,this.inlineQueue.at(-1).src=c.text):r.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length);let c=r.at(-1);c?.type==="paragraph"||c?.type==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title},r.push(a));continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),r.push(a);continue}let u=t;if(this.options.extensions?.startBlock){let c=1/0,f=t.slice(1),h;this.options.extensions.startBlock.forEach(m=>{h=m.call({lexer:this},f),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(u=t.substring(0,c+1))}if(this.state.top&&(a=this.tokenizer.paragraph(u))){let c=r.at(-1);s&&c?.type==="paragraph"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):r.push(a),s=u.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length);let c=r.at(-1);c?.type==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):r.push(a);continue}if(t){let c="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,r}inline(t,r=[]){return this.inlineQueue.push({src:t,tokens:r}),r}inlineTokens(t,r=[]){let s=t,a=null;if(this.tokens.links){let f=Object.keys(this.tokens.links);if(f.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)f.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,a.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(a=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let u=!1,c="";for(;t;){u||(c=""),u=!1;let f;if(this.options.extensions?.inline?.some(m=>(f=m.call({lexer:this},t,r))?(t=t.substring(f.raw.length),r.push(f),!0):!1))continue;if(f=this.tokenizer.escape(t)){t=t.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.tag(t)){t=t.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.link(t)){t=t.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(f.raw.length);let m=r.at(-1);f.type==="text"&&m?.type==="text"?(m.raw+=f.raw,m.text+=f.text):r.push(f);continue}if(f=this.tokenizer.emStrong(t,s,c)){t=t.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.codespan(t)){t=t.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.br(t)){t=t.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.del(t)){t=t.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.autolink(t)){t=t.substring(f.raw.length),r.push(f);continue}if(!this.state.inLink&&(f=this.tokenizer.url(t))){t=t.substring(f.raw.length),r.push(f);continue}let h=t;if(this.options.extensions?.startInline){let m=1/0,v=t.slice(1),D;this.options.extensions.startInline.forEach(b=>{D=b.call({lexer:this},v),typeof D=="number"&&D>=0&&(m=Math.min(m,D))}),m<1/0&&m>=0&&(h=t.substring(0,m+1))}if(f=this.tokenizer.inlineText(h)){t=t.substring(f.raw.length),f.raw.slice(-1)!=="_"&&(c=f.raw.slice(-1)),u=!0;let m=r.at(-1);m?.type==="text"?(m.raw+=f.raw,m.text+=f.text):r.push(f);continue}if(t){let m="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return r}},Ps=class{options;parser;constructor(n){this.options=n||gr}space(n){return""}code({text:n,lang:t,escaped:r}){let s=(t||"").match(dn.notSpaceStart)?.[0],a=n.replace(dn.endingNewline,"")+`
`;return s?'<pre><code class="language-'+ft(s)+'">'+(r?a:ft(a,!0))+`</code></pre>
`:"<pre><code>"+(r?a:ft(a,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){let t=n.ordered,r=n.start,s="";for(let c=0;c<n.items.length;c++){let f=n.items[c];s+=this.listitem(f)}let a=t?"ol":"ul",u=t&&r!==1?' start="'+r+'"':"";return"<"+a+u+`>
`+s+"</"+a+`>
`}listitem(n){let t="";if(n.task){let r=this.checkbox({checked:!!n.checked});n.loose?n.tokens[0]?.type==="paragraph"?(n.tokens[0].text=r+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=r+" "+ft(n.tokens[0].tokens[0].text),n.tokens[0].tokens[0].escaped=!0)):n.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):t+=r+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",r="";for(let a=0;a<n.header.length;a++)r+=this.tablecell(n.header[a]);t+=this.tablerow({text:r});let s="";for(let a=0;a<n.rows.length;a++){let u=n.rows[a];r="";for(let c=0;c<u.length;c++)r+=this.tablecell(u[c]);s+=this.tablerow({text:r})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let t=this.parser.parseInline(n.tokens),r=n.header?"th":"td";return(n.align?`<${r} align="${n.align}">`:`<${r}>`)+t+`</${r}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${ft(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:r}){let s=this.parser.parseInline(r),a=hf(n);if(a===null)return s;n=a;let u='<a href="'+n+'"';return t&&(u+=' title="'+ft(t)+'"'),u+=">"+s+"</a>",u}image({href:n,title:t,text:r,tokens:s}){s&&(r=this.parser.parseInline(s,this.parser.textRenderer));let a=hf(n);if(a===null)return ft(r);n=a;let u=`<img src="${n}" alt="${r}"`;return t&&(u+=` title="${ft(t)}"`),u+=">",u}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:ft(n.text)}},pu=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}},tt=class Go{options;renderer;textRenderer;constructor(t){this.options=t||gr,this.options.renderer=this.options.renderer||new Ps,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new pu}static parse(t,r){return new Go(r).parse(t)}static parseInline(t,r){return new Go(r).parseInline(t)}parse(t,r=!0){let s="";for(let a=0;a<t.length;a++){let u=t[a];if(this.options.extensions?.renderers?.[u.type]){let f=u,h=this.options.extensions.renderers[f.type].call({parser:this},f);if(h!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(f.type)){s+=h||"";continue}}let c=u;switch(c.type){case"space":{s+=this.renderer.space(c);continue}case"hr":{s+=this.renderer.hr(c);continue}case"heading":{s+=this.renderer.heading(c);continue}case"code":{s+=this.renderer.code(c);continue}case"table":{s+=this.renderer.table(c);continue}case"blockquote":{s+=this.renderer.blockquote(c);continue}case"list":{s+=this.renderer.list(c);continue}case"html":{s+=this.renderer.html(c);continue}case"def":{s+=this.renderer.def(c);continue}case"paragraph":{s+=this.renderer.paragraph(c);continue}case"text":{let f=c,h=this.renderer.text(f);for(;a+1<t.length&&t[a+1].type==="text";)f=t[++a],h+=`
`+this.renderer.text(f);r?s+=this.renderer.paragraph({type:"paragraph",raw:h,text:h,tokens:[{type:"text",raw:h,text:h,escaped:!0}]}):s+=h;continue}default:{let f='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return s}parseInline(t,r=this.renderer){let s="";for(let a=0;a<t.length;a++){let u=t[a];if(this.options.extensions?.renderers?.[u.type]){let f=this.options.extensions.renderers[u.type].call({parser:this},u);if(f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(u.type)){s+=f||"";continue}}let c=u;switch(c.type){case"escape":{s+=r.text(c);break}case"html":{s+=r.html(c);break}case"link":{s+=r.link(c);break}case"image":{s+=r.image(c);break}case"strong":{s+=r.strong(c);break}case"em":{s+=r.em(c);break}case"codespan":{s+=r.codespan(c);break}case"br":{s+=r.br(c);break}case"del":{s+=r.del(c);break}case"text":{s+=r.text(c);break}default:{let f='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return s}},di=class{options;block;constructor(n){this.options=n||gr}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?qn.lex:qn.lexInline}provideParser(){return this.block?tt.parse:tt.parseInline}},m_=class{defaults=iu();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=tt;Renderer=Ps;TextRenderer=pu;Lexer=qn;Tokenizer=Bs;Hooks=di;constructor(...n){this.use(...n)}walkTokens(n,t){let r=[];for(let s of n)switch(r=r.concat(t.call(this,s)),s.type){case"table":{let a=s;for(let u of a.header)r=r.concat(this.walkTokens(u.tokens,t));for(let u of a.rows)for(let c of u)r=r.concat(this.walkTokens(c.tokens,t));break}case"list":{let a=s;r=r.concat(this.walkTokens(a.items,t));break}default:{let a=s;this.defaults.extensions?.childTokens?.[a.type]?this.defaults.extensions.childTokens[a.type].forEach(u=>{let c=a[u].flat(1/0);r=r.concat(this.walkTokens(c,t))}):a.tokens&&(r=r.concat(this.walkTokens(a.tokens,t)))}}return r}use(...n){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(r=>{let s={...r};if(s.async=this.defaults.async||s.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){let u=t.renderers[a.name];u?t.renderers[a.name]=function(...c){let f=a.renderer.apply(this,c);return f===!1&&(f=u.apply(this,c)),f}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let u=t[a.level];u?u.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),s.extensions=t),r.renderer){let a=this.defaults.renderer||new Ps(this.defaults);for(let u in r.renderer){if(!(u in a))throw new Error(`renderer '${u}' does not exist`);if(["options","parser"].includes(u))continue;let c=u,f=r.renderer[c],h=a[c];a[c]=(...m)=>{let v=f.apply(a,m);return v===!1&&(v=h.apply(a,m)),v||""}}s.renderer=a}if(r.tokenizer){let a=this.defaults.tokenizer||new Bs(this.defaults);for(let u in r.tokenizer){if(!(u in a))throw new Error(`tokenizer '${u}' does not exist`);if(["options","rules","lexer"].includes(u))continue;let c=u,f=r.tokenizer[c],h=a[c];a[c]=(...m)=>{let v=f.apply(a,m);return v===!1&&(v=h.apply(a,m)),v}}s.tokenizer=a}if(r.hooks){let a=this.defaults.hooks||new di;for(let u in r.hooks){if(!(u in a))throw new Error(`hook '${u}' does not exist`);if(["options","block"].includes(u))continue;let c=u,f=r.hooks[c],h=a[c];di.passThroughHooks.has(u)?a[c]=m=>{if(this.defaults.async&&di.passThroughHooksRespectAsync.has(u))return(async()=>{let D=await f.call(a,m);return h.call(a,D)})();let v=f.call(a,m);return h.call(a,v)}:a[c]=(...m)=>{if(this.defaults.async)return(async()=>{let D=await f.apply(a,m);return D===!1&&(D=await h.apply(a,m)),D})();let v=f.apply(a,m);return v===!1&&(v=h.apply(a,m)),v}}s.hooks=a}if(r.walkTokens){let a=this.defaults.walkTokens,u=r.walkTokens;s.walkTokens=function(c){let f=[];return f.push(u.call(this,c)),a&&(f=f.concat(a.call(this,c))),f}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return qn.lex(n,t??this.defaults)}parser(n,t){return tt.parse(n,t??this.defaults)}parseMarkdown(n){return(t,r)=>{let s={...r},a={...this.defaults,...s},u=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&s.async===!1)return u(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return u(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return u(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(a.hooks&&(a.hooks.options=a,a.hooks.block=n),a.async)return(async()=>{let c=a.hooks?await a.hooks.preprocess(t):t,f=await(a.hooks?await a.hooks.provideLexer():n?qn.lex:qn.lexInline)(c,a),h=a.hooks?await a.hooks.processAllTokens(f):f;a.walkTokens&&await Promise.all(this.walkTokens(h,a.walkTokens));let m=await(a.hooks?await a.hooks.provideParser():n?tt.parse:tt.parseInline)(h,a);return a.hooks?await a.hooks.postprocess(m):m})().catch(u);try{a.hooks&&(t=a.hooks.preprocess(t));let c=(a.hooks?a.hooks.provideLexer():n?qn.lex:qn.lexInline)(t,a);a.hooks&&(c=a.hooks.processAllTokens(c)),a.walkTokens&&this.walkTokens(c,a.walkTokens);let f=(a.hooks?a.hooks.provideParser():n?tt.parse:tt.parseInline)(c,a);return a.hooks&&(f=a.hooks.postprocess(f)),f}catch(c){return u(c)}}}onError(n,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let s="<p>An error occurred:</p><pre>"+ft(r.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(r);throw r}}},fr=new m_;function Se(n,t){return fr.parse(n,t)}Se.options=Se.setOptions=function(n){return fr.setOptions(n),Se.defaults=fr.defaults,sp(Se.defaults),Se};Se.getDefaults=iu;Se.defaults=gr;Se.use=function(...n){return fr.use(...n),Se.defaults=fr.defaults,sp(Se.defaults),Se};Se.walkTokens=function(n,t){return fr.walkTokens(n,t)};Se.parseInline=fr.parseInline;Se.Parser=tt;Se.parser=tt.parse;Se.Renderer=Ps;Se.TextRenderer=pu;Se.Lexer=qn;Se.lexer=qn.lex;Se.Tokenizer=Bs;Se.Hooks=di;Se.parse=Se;Se.options;Se.setOptions;Se.use;Se.walkTokens;Se.parseInline;tt.parse;qn.lex;function v_(n){return new qn().lex(n)}const y_=()=>({heading:hT,blockquote:sT,list:nT,list_item:rT,br:oT,code:KD,codespan:eT,table:OT,html:vT,paragraph:AT,link:TT,text:IT,def:fT,del:lT,em:dT,hr:mT,strong:ST,image:ET,space:cf,escape:cf}),E_=()=>({baseUrl:"/",slugger:new ip});function D_(){const n=console.warn;console.warn=t=>{t.includes("unknown prop")||t.includes("unexpected slot")||n(t)},RD(()=>{console.warn=n})}function IS(n,t){qe(t,!1),D_();let r=Re(t,"source",8),s=Re(t,"options",24,()=>({})),a=Re(t,"renderers",24,()=>({})),u=Rr(),c=Rr(),f=Rr();tu(()=>(_e(r()),_e(a()),_e(s())),()=>{yi(u,v_(r())),yi(c,{...y_(),...a()}),yi(f,{...E_(),...s()})}),ru(),vt(),Rs(n,{get tokens(){return tn(u)},get renderers(){return tn(c)},get options(){return tn(f)}}),je()}const xi={joinUrlPaths:Ii,isRelative:wi,generatePathSegment:rp};var Is=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function T_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var hi={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var __=hi.exports,vf;function A_(){return vf||(vf=1,(function(n,t){(function(){var r,s="4.17.21",a=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",f="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",m=500,v="__lodash_placeholder__",D=1,b=2,k=4,I=1,B=2,U=1,X=2,he=4,K=8,Q=16,oe=32,P=64,$=128,ue=256,F=512,q=30,Oe="...",Pe=800,Cn=16,Lt=1,On=2,Bt=3,xn=1/0,Tn=9007199254740991,vr=17976931348623157e292,Ht=NaN,kn=4294967295,w=kn-1,W=kn>>>1,V=[["ary",$],["bind",U],["bindKey",X],["curry",K],["curryRight",Q],["flip",F],["partial",oe],["partialRight",P],["rearg",ue]],j="[object Arguments]",Ee="[object Array]",Ue="[object AsyncFunction]",De="[object Boolean]",Rn="[object Date]",Gr="[object DOMException]",Pt="[object Error]",sn="[object Function]",Su="[object GeneratorFunction]",Qn="[object Map]",qr="[object Number]",dd="[object Null]",Et="[object Object]",Iu="[object Promise]",hd="[object Proxy]",jr="[object RegExp]",Hn="[object Set]",Yr="[object String]",Li="[object Symbol]",gd="[object Undefined]",Wr="[object WeakMap]",md="[object WeakSet]",Jr="[object ArrayBuffer]",yr="[object DataView]",ia="[object Float32Array]",sa="[object Float64Array]",aa="[object Int8Array]",oa="[object Int16Array]",ua="[object Int32Array]",la="[object Uint8Array]",ca="[object Uint8ClampedArray]",fa="[object Uint16Array]",pa="[object Uint32Array]",vd=/\b__p \+= '';/g,yd=/\b(__p \+=) '' \+/g,Ed=/(__e\(.*?\)|\b__t\)) \+\n'';/g,wu=/&(?:amp|lt|gt|quot|#39);/g,Nu=/[&<>"']/g,Dd=RegExp(wu.source),Td=RegExp(Nu.source),_d=/<%-([\s\S]+?)%>/g,Ad=/<%([\s\S]+?)%>/g,Fu=/<%=([\s\S]+?)%>/g,bd=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Sd=/^\w*$/,Id=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,da=/[\\^$.*+?()[\]{}|]/g,wd=RegExp(da.source),ha=/^\s+/,Nd=/\s/,Fd=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Cd=/\{\n\/\* \[wrapped with (.+)\] \*/,Od=/,? & /,xd=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,kd=/[()=,{}\[\]\/\s]/,Rd=/\\(\\)?/g,Ld=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Cu=/\w*$/,Bd=/^[-+]0x[0-9a-f]+$/i,Pd=/^0b[01]+$/i,Ud=/^\[object .+?Constructor\]$/,Md=/^0o[0-7]+$/i,$d=/^(?:0|[1-9]\d*)$/,Vd=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Bi=/($^)/,Gd=/['\n\r\u2028\u2029\\]/g,Pi="\\ud800-\\udfff",qd="\\u0300-\\u036f",jd="\\ufe20-\\ufe2f",Yd="\\u20d0-\\u20ff",Ou=qd+jd+Yd,xu="\\u2700-\\u27bf",ku="a-z\\xdf-\\xf6\\xf8-\\xff",Wd="\\xac\\xb1\\xd7\\xf7",Jd="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",zd="\\u2000-\\u206f",Qd=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ru="A-Z\\xc0-\\xd6\\xd8-\\xde",Lu="\\ufe0e\\ufe0f",Bu=Wd+Jd+zd+Qd,ga="['’]",Hd="["+Pi+"]",Pu="["+Bu+"]",Ui="["+Ou+"]",Uu="\\d+",Xd="["+xu+"]",Mu="["+ku+"]",$u="[^"+Pi+Bu+Uu+xu+ku+Ru+"]",ma="\\ud83c[\\udffb-\\udfff]",Kd="(?:"+Ui+"|"+ma+")",Vu="[^"+Pi+"]",va="(?:\\ud83c[\\udde6-\\uddff]){2}",ya="[\\ud800-\\udbff][\\udc00-\\udfff]",Er="["+Ru+"]",Gu="\\u200d",qu="(?:"+Mu+"|"+$u+")",Zd="(?:"+Er+"|"+$u+")",ju="(?:"+ga+"(?:d|ll|m|re|s|t|ve))?",Yu="(?:"+ga+"(?:D|LL|M|RE|S|T|VE))?",Wu=Kd+"?",Ju="["+Lu+"]?",eh="(?:"+Gu+"(?:"+[Vu,va,ya].join("|")+")"+Ju+Wu+")*",nh="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",th="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",zu=Ju+Wu+eh,rh="(?:"+[Xd,va,ya].join("|")+")"+zu,ih="(?:"+[Vu+Ui+"?",Ui,va,ya,Hd].join("|")+")",sh=RegExp(ga,"g"),ah=RegExp(Ui,"g"),Ea=RegExp(ma+"(?="+ma+")|"+ih+zu,"g"),oh=RegExp([Er+"?"+Mu+"+"+ju+"(?="+[Pu,Er,"$"].join("|")+")",Zd+"+"+Yu+"(?="+[Pu,Er+qu,"$"].join("|")+")",Er+"?"+qu+"+"+ju,Er+"+"+Yu,th,nh,Uu,rh].join("|"),"g"),uh=RegExp("["+Gu+Pi+Ou+Lu+"]"),lh=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ch=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],fh=-1,xe={};xe[ia]=xe[sa]=xe[aa]=xe[oa]=xe[ua]=xe[la]=xe[ca]=xe[fa]=xe[pa]=!0,xe[j]=xe[Ee]=xe[Jr]=xe[De]=xe[yr]=xe[Rn]=xe[Pt]=xe[sn]=xe[Qn]=xe[qr]=xe[Et]=xe[jr]=xe[Hn]=xe[Yr]=xe[Wr]=!1;var Fe={};Fe[j]=Fe[Ee]=Fe[Jr]=Fe[yr]=Fe[De]=Fe[Rn]=Fe[ia]=Fe[sa]=Fe[aa]=Fe[oa]=Fe[ua]=Fe[Qn]=Fe[qr]=Fe[Et]=Fe[jr]=Fe[Hn]=Fe[Yr]=Fe[Li]=Fe[la]=Fe[ca]=Fe[fa]=Fe[pa]=!0,Fe[Pt]=Fe[sn]=Fe[Wr]=!1;var ph={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},dh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},hh={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},gh={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},mh=parseFloat,vh=parseInt,Qu=typeof Is=="object"&&Is&&Is.Object===Object&&Is,yh=typeof self=="object"&&self&&self.Object===Object&&self,en=Qu||yh||Function("return this")(),Da=t&&!t.nodeType&&t,Xt=Da&&!0&&n&&!n.nodeType&&n,Hu=Xt&&Xt.exports===Da,Ta=Hu&&Qu.process,Ln=(function(){try{var _=Xt&&Xt.require&&Xt.require("util").types;return _||Ta&&Ta.binding&&Ta.binding("util")}catch{}})(),Xu=Ln&&Ln.isArrayBuffer,Ku=Ln&&Ln.isDate,Zu=Ln&&Ln.isMap,el=Ln&&Ln.isRegExp,nl=Ln&&Ln.isSet,tl=Ln&&Ln.isTypedArray;function _n(_,N,S){switch(S.length){case 0:return _.call(N);case 1:return _.call(N,S[0]);case 2:return _.call(N,S[0],S[1]);case 3:return _.call(N,S[0],S[1],S[2])}return _.apply(N,S)}function Eh(_,N,S,Y){for(var te=-1,ye=_==null?0:_.length;++te<ye;){var ze=_[te];N(Y,ze,S(ze),_)}return Y}function Bn(_,N){for(var S=-1,Y=_==null?0:_.length;++S<Y&&N(_[S],S,_)!==!1;);return _}function Dh(_,N){for(var S=_==null?0:_.length;S--&&N(_[S],S,_)!==!1;);return _}function rl(_,N){for(var S=-1,Y=_==null?0:_.length;++S<Y;)if(!N(_[S],S,_))return!1;return!0}function Ut(_,N){for(var S=-1,Y=_==null?0:_.length,te=0,ye=[];++S<Y;){var ze=_[S];N(ze,S,_)&&(ye[te++]=ze)}return ye}function Mi(_,N){var S=_==null?0:_.length;return!!S&&Dr(_,N,0)>-1}function _a(_,N,S){for(var Y=-1,te=_==null?0:_.length;++Y<te;)if(S(N,_[Y]))return!0;return!1}function ke(_,N){for(var S=-1,Y=_==null?0:_.length,te=Array(Y);++S<Y;)te[S]=N(_[S],S,_);return te}function Mt(_,N){for(var S=-1,Y=N.length,te=_.length;++S<Y;)_[te+S]=N[S];return _}function Aa(_,N,S,Y){var te=-1,ye=_==null?0:_.length;for(Y&&ye&&(S=_[++te]);++te<ye;)S=N(S,_[te],te,_);return S}function Th(_,N,S,Y){var te=_==null?0:_.length;for(Y&&te&&(S=_[--te]);te--;)S=N(S,_[te],te,_);return S}function ba(_,N){for(var S=-1,Y=_==null?0:_.length;++S<Y;)if(N(_[S],S,_))return!0;return!1}var _h=Sa("length");function Ah(_){return _.split("")}function bh(_){return _.match(xd)||[]}function il(_,N,S){var Y;return S(_,function(te,ye,ze){if(N(te,ye,ze))return Y=ye,!1}),Y}function $i(_,N,S,Y){for(var te=_.length,ye=S+(Y?1:-1);Y?ye--:++ye<te;)if(N(_[ye],ye,_))return ye;return-1}function Dr(_,N,S){return N===N?Bh(_,N,S):$i(_,sl,S)}function Sh(_,N,S,Y){for(var te=S-1,ye=_.length;++te<ye;)if(Y(_[te],N))return te;return-1}function sl(_){return _!==_}function al(_,N){var S=_==null?0:_.length;return S?wa(_,N)/S:Ht}function Sa(_){return function(N){return N==null?r:N[_]}}function Ia(_){return function(N){return _==null?r:_[N]}}function ol(_,N,S,Y,te){return te(_,function(ye,ze,Ie){S=Y?(Y=!1,ye):N(S,ye,ze,Ie)}),S}function Ih(_,N){var S=_.length;for(_.sort(N);S--;)_[S]=_[S].value;return _}function wa(_,N){for(var S,Y=-1,te=_.length;++Y<te;){var ye=N(_[Y]);ye!==r&&(S=S===r?ye:S+ye)}return S}function Na(_,N){for(var S=-1,Y=Array(_);++S<_;)Y[S]=N(S);return Y}function wh(_,N){return ke(N,function(S){return[S,_[S]]})}function ul(_){return _&&_.slice(0,pl(_)+1).replace(ha,"")}function An(_){return function(N){return _(N)}}function Fa(_,N){return ke(N,function(S){return _[S]})}function zr(_,N){return _.has(N)}function ll(_,N){for(var S=-1,Y=_.length;++S<Y&&Dr(N,_[S],0)>-1;);return S}function cl(_,N){for(var S=_.length;S--&&Dr(N,_[S],0)>-1;);return S}function Nh(_,N){for(var S=_.length,Y=0;S--;)_[S]===N&&++Y;return Y}var Fh=Ia(ph),Ch=Ia(dh);function Oh(_){return"\\"+gh[_]}function xh(_,N){return _==null?r:_[N]}function Tr(_){return uh.test(_)}function kh(_){return lh.test(_)}function Rh(_){for(var N,S=[];!(N=_.next()).done;)S.push(N.value);return S}function Ca(_){var N=-1,S=Array(_.size);return _.forEach(function(Y,te){S[++N]=[te,Y]}),S}function fl(_,N){return function(S){return _(N(S))}}function $t(_,N){for(var S=-1,Y=_.length,te=0,ye=[];++S<Y;){var ze=_[S];(ze===N||ze===v)&&(_[S]=v,ye[te++]=S)}return ye}function Vi(_){var N=-1,S=Array(_.size);return _.forEach(function(Y){S[++N]=Y}),S}function Lh(_){var N=-1,S=Array(_.size);return _.forEach(function(Y){S[++N]=[Y,Y]}),S}function Bh(_,N,S){for(var Y=S-1,te=_.length;++Y<te;)if(_[Y]===N)return Y;return-1}function Ph(_,N,S){for(var Y=S+1;Y--;)if(_[Y]===N)return Y;return Y}function _r(_){return Tr(_)?Mh(_):_h(_)}function Xn(_){return Tr(_)?$h(_):Ah(_)}function pl(_){for(var N=_.length;N--&&Nd.test(_.charAt(N)););return N}var Uh=Ia(hh);function Mh(_){for(var N=Ea.lastIndex=0;Ea.test(_);)++N;return N}function $h(_){return _.match(Ea)||[]}function Vh(_){return _.match(oh)||[]}var Gh=(function _(N){N=N==null?en:Ar.defaults(en.Object(),N,Ar.pick(en,ch));var S=N.Array,Y=N.Date,te=N.Error,ye=N.Function,ze=N.Math,Ie=N.Object,Oa=N.RegExp,qh=N.String,Pn=N.TypeError,Gi=S.prototype,jh=ye.prototype,br=Ie.prototype,qi=N["__core-js_shared__"],ji=jh.toString,be=br.hasOwnProperty,Yh=0,dl=(function(){var e=/[^.]+$/.exec(qi&&qi.keys&&qi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})(),Yi=br.toString,Wh=ji.call(Ie),Jh=en._,zh=Oa("^"+ji.call(be).replace(da,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Wi=Hu?N.Buffer:r,Vt=N.Symbol,Ji=N.Uint8Array,hl=Wi?Wi.allocUnsafe:r,zi=fl(Ie.getPrototypeOf,Ie),gl=Ie.create,ml=br.propertyIsEnumerable,Qi=Gi.splice,vl=Vt?Vt.isConcatSpreadable:r,Qr=Vt?Vt.iterator:r,Kt=Vt?Vt.toStringTag:r,Hi=(function(){try{var e=rr(Ie,"defineProperty");return e({},"",{}),e}catch{}})(),Qh=N.clearTimeout!==en.clearTimeout&&N.clearTimeout,Hh=Y&&Y.now!==en.Date.now&&Y.now,Xh=N.setTimeout!==en.setTimeout&&N.setTimeout,Xi=ze.ceil,Ki=ze.floor,xa=Ie.getOwnPropertySymbols,Kh=Wi?Wi.isBuffer:r,yl=N.isFinite,Zh=Gi.join,eg=fl(Ie.keys,Ie),Qe=ze.max,an=ze.min,ng=Y.now,tg=N.parseInt,El=ze.random,rg=Gi.reverse,ka=rr(N,"DataView"),Hr=rr(N,"Map"),Ra=rr(N,"Promise"),Sr=rr(N,"Set"),Xr=rr(N,"WeakMap"),Kr=rr(Ie,"create"),Zi=Xr&&new Xr,Ir={},ig=ir(ka),sg=ir(Hr),ag=ir(Ra),og=ir(Sr),ug=ir(Xr),es=Vt?Vt.prototype:r,Zr=es?es.valueOf:r,Dl=es?es.toString:r;function d(e){if(Be(e)&&!re(e)&&!(e instanceof pe)){if(e instanceof Un)return e;if(be.call(e,"__wrapped__"))return Tc(e)}return new Un(e)}var wr=(function(){function e(){}return function(i){if(!Le(i))return{};if(gl)return gl(i);e.prototype=i;var o=new e;return e.prototype=r,o}})();function ns(){}function Un(e,i){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}d.templateSettings={escape:_d,evaluate:Ad,interpolate:Fu,variable:"",imports:{_:d}},d.prototype=ns.prototype,d.prototype.constructor=d,Un.prototype=wr(ns.prototype),Un.prototype.constructor=Un;function pe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=kn,this.__views__=[]}function lg(){var e=new pe(this.__wrapped__);return e.__actions__=mn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=mn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=mn(this.__views__),e}function cg(){if(this.__filtered__){var e=new pe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function fg(){var e=this.__wrapped__.value(),i=this.__dir__,o=re(e),l=i<0,p=o?e.length:0,g=Am(0,p,this.__views__),y=g.start,E=g.end,A=E-y,C=l?E:y-1,O=this.__iteratees__,R=O.length,M=0,z=an(A,this.__takeCount__);if(!o||!l&&p==A&&z==A)return jl(e,this.__actions__);var ee=[];e:for(;A--&&M<z;){C+=i;for(var ae=-1,ne=e[C];++ae<R;){var fe=O[ae],ge=fe.iteratee,In=fe.type,cn=ge(ne);if(In==On)ne=cn;else if(!cn){if(In==Lt)continue e;break e}}ee[M++]=ne}return ee}pe.prototype=wr(ns.prototype),pe.prototype.constructor=pe;function Zt(e){var i=-1,o=e==null?0:e.length;for(this.clear();++i<o;){var l=e[i];this.set(l[0],l[1])}}function pg(){this.__data__=Kr?Kr(null):{},this.size=0}function dg(e){var i=this.has(e)&&delete this.__data__[e];return this.size-=i?1:0,i}function hg(e){var i=this.__data__;if(Kr){var o=i[e];return o===h?r:o}return be.call(i,e)?i[e]:r}function gg(e){var i=this.__data__;return Kr?i[e]!==r:be.call(i,e)}function mg(e,i){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=Kr&&i===r?h:i,this}Zt.prototype.clear=pg,Zt.prototype.delete=dg,Zt.prototype.get=hg,Zt.prototype.has=gg,Zt.prototype.set=mg;function Dt(e){var i=-1,o=e==null?0:e.length;for(this.clear();++i<o;){var l=e[i];this.set(l[0],l[1])}}function vg(){this.__data__=[],this.size=0}function yg(e){var i=this.__data__,o=ts(i,e);if(o<0)return!1;var l=i.length-1;return o==l?i.pop():Qi.call(i,o,1),--this.size,!0}function Eg(e){var i=this.__data__,o=ts(i,e);return o<0?r:i[o][1]}function Dg(e){return ts(this.__data__,e)>-1}function Tg(e,i){var o=this.__data__,l=ts(o,e);return l<0?(++this.size,o.push([e,i])):o[l][1]=i,this}Dt.prototype.clear=vg,Dt.prototype.delete=yg,Dt.prototype.get=Eg,Dt.prototype.has=Dg,Dt.prototype.set=Tg;function Tt(e){var i=-1,o=e==null?0:e.length;for(this.clear();++i<o;){var l=e[i];this.set(l[0],l[1])}}function _g(){this.size=0,this.__data__={hash:new Zt,map:new(Hr||Dt),string:new Zt}}function Ag(e){var i=hs(this,e).delete(e);return this.size-=i?1:0,i}function bg(e){return hs(this,e).get(e)}function Sg(e){return hs(this,e).has(e)}function Ig(e,i){var o=hs(this,e),l=o.size;return o.set(e,i),this.size+=o.size==l?0:1,this}Tt.prototype.clear=_g,Tt.prototype.delete=Ag,Tt.prototype.get=bg,Tt.prototype.has=Sg,Tt.prototype.set=Ig;function er(e){var i=-1,o=e==null?0:e.length;for(this.__data__=new Tt;++i<o;)this.add(e[i])}function wg(e){return this.__data__.set(e,h),this}function Ng(e){return this.__data__.has(e)}er.prototype.add=er.prototype.push=wg,er.prototype.has=Ng;function Kn(e){var i=this.__data__=new Dt(e);this.size=i.size}function Fg(){this.__data__=new Dt,this.size=0}function Cg(e){var i=this.__data__,o=i.delete(e);return this.size=i.size,o}function Og(e){return this.__data__.get(e)}function xg(e){return this.__data__.has(e)}function kg(e,i){var o=this.__data__;if(o instanceof Dt){var l=o.__data__;if(!Hr||l.length<a-1)return l.push([e,i]),this.size=++o.size,this;o=this.__data__=new Tt(l)}return o.set(e,i),this.size=o.size,this}Kn.prototype.clear=Fg,Kn.prototype.delete=Cg,Kn.prototype.get=Og,Kn.prototype.has=xg,Kn.prototype.set=kg;function Tl(e,i){var o=re(e),l=!o&&sr(e),p=!o&&!l&&Wt(e),g=!o&&!l&&!p&&Or(e),y=o||l||p||g,E=y?Na(e.length,qh):[],A=E.length;for(var C in e)(i||be.call(e,C))&&!(y&&(C=="length"||p&&(C=="offset"||C=="parent")||g&&(C=="buffer"||C=="byteLength"||C=="byteOffset")||St(C,A)))&&E.push(C);return E}function _l(e){var i=e.length;return i?e[Ya(0,i-1)]:r}function Rg(e,i){return gs(mn(e),nr(i,0,e.length))}function Lg(e){return gs(mn(e))}function La(e,i,o){(o!==r&&!Zn(e[i],o)||o===r&&!(i in e))&&_t(e,i,o)}function ei(e,i,o){var l=e[i];(!(be.call(e,i)&&Zn(l,o))||o===r&&!(i in e))&&_t(e,i,o)}function ts(e,i){for(var o=e.length;o--;)if(Zn(e[o][0],i))return o;return-1}function Bg(e,i,o,l){return Gt(e,function(p,g,y){i(l,p,o(p),y)}),l}function Al(e,i){return e&&lt(i,He(i),e)}function Pg(e,i){return e&&lt(i,yn(i),e)}function _t(e,i,o){i=="__proto__"&&Hi?Hi(e,i,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[i]=o}function Ba(e,i){for(var o=-1,l=i.length,p=S(l),g=e==null;++o<l;)p[o]=g?r:vo(e,i[o]);return p}function nr(e,i,o){return e===e&&(o!==r&&(e=e<=o?e:o),i!==r&&(e=e>=i?e:i)),e}function Mn(e,i,o,l,p,g){var y,E=i&D,A=i&b,C=i&k;if(o&&(y=p?o(e,l,p,g):o(e)),y!==r)return y;if(!Le(e))return e;var O=re(e);if(O){if(y=Sm(e),!E)return mn(e,y)}else{var R=on(e),M=R==sn||R==Su;if(Wt(e))return Jl(e,E);if(R==Et||R==j||M&&!p){if(y=A||M?{}:pc(e),!E)return A?hm(e,Pg(y,e)):dm(e,Al(y,e))}else{if(!Fe[R])return p?e:{};y=Im(e,R,E)}}g||(g=new Kn);var z=g.get(e);if(z)return z;g.set(e,y),Vc(e)?e.forEach(function(ne){y.add(Mn(ne,i,o,ne,e,g))}):Mc(e)&&e.forEach(function(ne,fe){y.set(fe,Mn(ne,i,o,fe,e,g))});var ee=C?A?to:no:A?yn:He,ae=O?r:ee(e);return Bn(ae||e,function(ne,fe){ae&&(fe=ne,ne=e[fe]),ei(y,fe,Mn(ne,i,o,fe,e,g))}),y}function Ug(e){var i=He(e);return function(o){return bl(o,e,i)}}function bl(e,i,o){var l=o.length;if(e==null)return!l;for(e=Ie(e);l--;){var p=o[l],g=i[p],y=e[p];if(y===r&&!(p in e)||!g(y))return!1}return!0}function Sl(e,i,o){if(typeof e!="function")throw new Pn(c);return oi(function(){e.apply(r,o)},i)}function ni(e,i,o,l){var p=-1,g=Mi,y=!0,E=e.length,A=[],C=i.length;if(!E)return A;o&&(i=ke(i,An(o))),l?(g=_a,y=!1):i.length>=a&&(g=zr,y=!1,i=new er(i));e:for(;++p<E;){var O=e[p],R=o==null?O:o(O);if(O=l||O!==0?O:0,y&&R===R){for(var M=C;M--;)if(i[M]===R)continue e;A.push(O)}else g(i,R,l)||A.push(O)}return A}var Gt=Kl(ut),Il=Kl(Ua,!0);function Mg(e,i){var o=!0;return Gt(e,function(l,p,g){return o=!!i(l,p,g),o}),o}function rs(e,i,o){for(var l=-1,p=e.length;++l<p;){var g=e[l],y=i(g);if(y!=null&&(E===r?y===y&&!Sn(y):o(y,E)))var E=y,A=g}return A}function $g(e,i,o,l){var p=e.length;for(o=se(o),o<0&&(o=-o>p?0:p+o),l=l===r||l>p?p:se(l),l<0&&(l+=p),l=o>l?0:qc(l);o<l;)e[o++]=i;return e}function wl(e,i){var o=[];return Gt(e,function(l,p,g){i(l,p,g)&&o.push(l)}),o}function nn(e,i,o,l,p){var g=-1,y=e.length;for(o||(o=Nm),p||(p=[]);++g<y;){var E=e[g];i>0&&o(E)?i>1?nn(E,i-1,o,l,p):Mt(p,E):l||(p[p.length]=E)}return p}var Pa=Zl(),Nl=Zl(!0);function ut(e,i){return e&&Pa(e,i,He)}function Ua(e,i){return e&&Nl(e,i,He)}function is(e,i){return Ut(i,function(o){return It(e[o])})}function tr(e,i){i=jt(i,e);for(var o=0,l=i.length;e!=null&&o<l;)e=e[ct(i[o++])];return o&&o==l?e:r}function Fl(e,i,o){var l=i(e);return re(e)?l:Mt(l,o(e))}function un(e){return e==null?e===r?gd:dd:Kt&&Kt in Ie(e)?_m(e):Lm(e)}function Ma(e,i){return e>i}function Vg(e,i){return e!=null&&be.call(e,i)}function Gg(e,i){return e!=null&&i in Ie(e)}function qg(e,i,o){return e>=an(i,o)&&e<Qe(i,o)}function $a(e,i,o){for(var l=o?_a:Mi,p=e[0].length,g=e.length,y=g,E=S(g),A=1/0,C=[];y--;){var O=e[y];y&&i&&(O=ke(O,An(i))),A=an(O.length,A),E[y]=!o&&(i||p>=120&&O.length>=120)?new er(y&&O):r}O=e[0];var R=-1,M=E[0];e:for(;++R<p&&C.length<A;){var z=O[R],ee=i?i(z):z;if(z=o||z!==0?z:0,!(M?zr(M,ee):l(C,ee,o))){for(y=g;--y;){var ae=E[y];if(!(ae?zr(ae,ee):l(e[y],ee,o)))continue e}M&&M.push(ee),C.push(z)}}return C}function jg(e,i,o,l){return ut(e,function(p,g,y){i(l,o(p),g,y)}),l}function ti(e,i,o){i=jt(i,e),e=mc(e,i);var l=e==null?e:e[ct(Vn(i))];return l==null?r:_n(l,e,o)}function Cl(e){return Be(e)&&un(e)==j}function Yg(e){return Be(e)&&un(e)==Jr}function Wg(e){return Be(e)&&un(e)==Rn}function ri(e,i,o,l,p){return e===i?!0:e==null||i==null||!Be(e)&&!Be(i)?e!==e&&i!==i:Jg(e,i,o,l,ri,p)}function Jg(e,i,o,l,p,g){var y=re(e),E=re(i),A=y?Ee:on(e),C=E?Ee:on(i);A=A==j?Et:A,C=C==j?Et:C;var O=A==Et,R=C==Et,M=A==C;if(M&&Wt(e)){if(!Wt(i))return!1;y=!0,O=!1}if(M&&!O)return g||(g=new Kn),y||Or(e)?lc(e,i,o,l,p,g):Dm(e,i,A,o,l,p,g);if(!(o&I)){var z=O&&be.call(e,"__wrapped__"),ee=R&&be.call(i,"__wrapped__");if(z||ee){var ae=z?e.value():e,ne=ee?i.value():i;return g||(g=new Kn),p(ae,ne,o,l,g)}}return M?(g||(g=new Kn),Tm(e,i,o,l,p,g)):!1}function zg(e){return Be(e)&&on(e)==Qn}function Va(e,i,o,l){var p=o.length,g=p,y=!l;if(e==null)return!g;for(e=Ie(e);p--;){var E=o[p];if(y&&E[2]?E[1]!==e[E[0]]:!(E[0]in e))return!1}for(;++p<g;){E=o[p];var A=E[0],C=e[A],O=E[1];if(y&&E[2]){if(C===r&&!(A in e))return!1}else{var R=new Kn;if(l)var M=l(C,O,A,e,i,R);if(!(M===r?ri(O,C,I|B,l,R):M))return!1}}return!0}function Ol(e){if(!Le(e)||Cm(e))return!1;var i=It(e)?zh:Ud;return i.test(ir(e))}function Qg(e){return Be(e)&&un(e)==jr}function Hg(e){return Be(e)&&on(e)==Hn}function Xg(e){return Be(e)&&Ts(e.length)&&!!xe[un(e)]}function xl(e){return typeof e=="function"?e:e==null?En:typeof e=="object"?re(e)?Ll(e[0],e[1]):Rl(e):ef(e)}function Ga(e){if(!ai(e))return eg(e);var i=[];for(var o in Ie(e))be.call(e,o)&&o!="constructor"&&i.push(o);return i}function Kg(e){if(!Le(e))return Rm(e);var i=ai(e),o=[];for(var l in e)l=="constructor"&&(i||!be.call(e,l))||o.push(l);return o}function qa(e,i){return e<i}function kl(e,i){var o=-1,l=vn(e)?S(e.length):[];return Gt(e,function(p,g,y){l[++o]=i(p,g,y)}),l}function Rl(e){var i=io(e);return i.length==1&&i[0][2]?hc(i[0][0],i[0][1]):function(o){return o===e||Va(o,e,i)}}function Ll(e,i){return ao(e)&&dc(i)?hc(ct(e),i):function(o){var l=vo(o,e);return l===r&&l===i?yo(o,e):ri(i,l,I|B)}}function ss(e,i,o,l,p){e!==i&&Pa(i,function(g,y){if(p||(p=new Kn),Le(g))Zg(e,i,y,o,ss,l,p);else{var E=l?l(uo(e,y),g,y+"",e,i,p):r;E===r&&(E=g),La(e,y,E)}},yn)}function Zg(e,i,o,l,p,g,y){var E=uo(e,o),A=uo(i,o),C=y.get(A);if(C){La(e,o,C);return}var O=g?g(E,A,o+"",e,i,y):r,R=O===r;if(R){var M=re(A),z=!M&&Wt(A),ee=!M&&!z&&Or(A);O=A,M||z||ee?re(E)?O=E:Me(E)?O=mn(E):z?(R=!1,O=Jl(A,!0)):ee?(R=!1,O=zl(A,!0)):O=[]:ui(A)||sr(A)?(O=E,sr(E)?O=jc(E):(!Le(E)||It(E))&&(O=pc(A))):R=!1}R&&(y.set(A,O),p(O,A,l,g,y),y.delete(A)),La(e,o,O)}function Bl(e,i){var o=e.length;if(o)return i+=i<0?o:0,St(i,o)?e[i]:r}function Pl(e,i,o){i.length?i=ke(i,function(g){return re(g)?function(y){return tr(y,g.length===1?g[0]:g)}:g}):i=[En];var l=-1;i=ke(i,An(Z()));var p=kl(e,function(g,y,E){var A=ke(i,function(C){return C(g)});return{criteria:A,index:++l,value:g}});return Ih(p,function(g,y){return pm(g,y,o)})}function em(e,i){return Ul(e,i,function(o,l){return yo(e,l)})}function Ul(e,i,o){for(var l=-1,p=i.length,g={};++l<p;){var y=i[l],E=tr(e,y);o(E,y)&&ii(g,jt(y,e),E)}return g}function nm(e){return function(i){return tr(i,e)}}function ja(e,i,o,l){var p=l?Sh:Dr,g=-1,y=i.length,E=e;for(e===i&&(i=mn(i)),o&&(E=ke(e,An(o)));++g<y;)for(var A=0,C=i[g],O=o?o(C):C;(A=p(E,O,A,l))>-1;)E!==e&&Qi.call(E,A,1),Qi.call(e,A,1);return e}function Ml(e,i){for(var o=e?i.length:0,l=o-1;o--;){var p=i[o];if(o==l||p!==g){var g=p;St(p)?Qi.call(e,p,1):za(e,p)}}return e}function Ya(e,i){return e+Ki(El()*(i-e+1))}function tm(e,i,o,l){for(var p=-1,g=Qe(Xi((i-e)/(o||1)),0),y=S(g);g--;)y[l?g:++p]=e,e+=o;return y}function Wa(e,i){var o="";if(!e||i<1||i>Tn)return o;do i%2&&(o+=e),i=Ki(i/2),i&&(e+=e);while(i);return o}function le(e,i){return lo(gc(e,i,En),e+"")}function rm(e){return _l(xr(e))}function im(e,i){var o=xr(e);return gs(o,nr(i,0,o.length))}function ii(e,i,o,l){if(!Le(e))return e;i=jt(i,e);for(var p=-1,g=i.length,y=g-1,E=e;E!=null&&++p<g;){var A=ct(i[p]),C=o;if(A==="__proto__"||A==="constructor"||A==="prototype")return e;if(p!=y){var O=E[A];C=l?l(O,A,E):r,C===r&&(C=Le(O)?O:St(i[p+1])?[]:{})}ei(E,A,C),E=E[A]}return e}var $l=Zi?function(e,i){return Zi.set(e,i),e}:En,sm=Hi?function(e,i){return Hi(e,"toString",{configurable:!0,enumerable:!1,value:Do(i),writable:!0})}:En;function am(e){return gs(xr(e))}function $n(e,i,o){var l=-1,p=e.length;i<0&&(i=-i>p?0:p+i),o=o>p?p:o,o<0&&(o+=p),p=i>o?0:o-i>>>0,i>>>=0;for(var g=S(p);++l<p;)g[l]=e[l+i];return g}function om(e,i){var o;return Gt(e,function(l,p,g){return o=i(l,p,g),!o}),!!o}function as(e,i,o){var l=0,p=e==null?l:e.length;if(typeof i=="number"&&i===i&&p<=W){for(;l<p;){var g=l+p>>>1,y=e[g];y!==null&&!Sn(y)&&(o?y<=i:y<i)?l=g+1:p=g}return p}return Ja(e,i,En,o)}function Ja(e,i,o,l){var p=0,g=e==null?0:e.length;if(g===0)return 0;i=o(i);for(var y=i!==i,E=i===null,A=Sn(i),C=i===r;p<g;){var O=Ki((p+g)/2),R=o(e[O]),M=R!==r,z=R===null,ee=R===R,ae=Sn(R);if(y)var ne=l||ee;else C?ne=ee&&(l||M):E?ne=ee&&M&&(l||!z):A?ne=ee&&M&&!z&&(l||!ae):z||ae?ne=!1:ne=l?R<=i:R<i;ne?p=O+1:g=O}return an(g,w)}function Vl(e,i){for(var o=-1,l=e.length,p=0,g=[];++o<l;){var y=e[o],E=i?i(y):y;if(!o||!Zn(E,A)){var A=E;g[p++]=y===0?0:y}}return g}function Gl(e){return typeof e=="number"?e:Sn(e)?Ht:+e}function bn(e){if(typeof e=="string")return e;if(re(e))return ke(e,bn)+"";if(Sn(e))return Dl?Dl.call(e):"";var i=e+"";return i=="0"&&1/e==-xn?"-0":i}function qt(e,i,o){var l=-1,p=Mi,g=e.length,y=!0,E=[],A=E;if(o)y=!1,p=_a;else if(g>=a){var C=i?null:ym(e);if(C)return Vi(C);y=!1,p=zr,A=new er}else A=i?[]:E;e:for(;++l<g;){var O=e[l],R=i?i(O):O;if(O=o||O!==0?O:0,y&&R===R){for(var M=A.length;M--;)if(A[M]===R)continue e;i&&A.push(R),E.push(O)}else p(A,R,o)||(A!==E&&A.push(R),E.push(O))}return E}function za(e,i){return i=jt(i,e),e=mc(e,i),e==null||delete e[ct(Vn(i))]}function ql(e,i,o,l){return ii(e,i,o(tr(e,i)),l)}function os(e,i,o,l){for(var p=e.length,g=l?p:-1;(l?g--:++g<p)&&i(e[g],g,e););return o?$n(e,l?0:g,l?g+1:p):$n(e,l?g+1:0,l?p:g)}function jl(e,i){var o=e;return o instanceof pe&&(o=o.value()),Aa(i,function(l,p){return p.func.apply(p.thisArg,Mt([l],p.args))},o)}function Qa(e,i,o){var l=e.length;if(l<2)return l?qt(e[0]):[];for(var p=-1,g=S(l);++p<l;)for(var y=e[p],E=-1;++E<l;)E!=p&&(g[p]=ni(g[p]||y,e[E],i,o));return qt(nn(g,1),i,o)}function Yl(e,i,o){for(var l=-1,p=e.length,g=i.length,y={};++l<p;){var E=l<g?i[l]:r;o(y,e[l],E)}return y}function Ha(e){return Me(e)?e:[]}function Xa(e){return typeof e=="function"?e:En}function jt(e,i){return re(e)?e:ao(e,i)?[e]:Dc(Te(e))}var um=le;function Yt(e,i,o){var l=e.length;return o=o===r?l:o,!i&&o>=l?e:$n(e,i,o)}var Wl=Qh||function(e){return en.clearTimeout(e)};function Jl(e,i){if(i)return e.slice();var o=e.length,l=hl?hl(o):new e.constructor(o);return e.copy(l),l}function Ka(e){var i=new e.constructor(e.byteLength);return new Ji(i).set(new Ji(e)),i}function lm(e,i){var o=i?Ka(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}function cm(e){var i=new e.constructor(e.source,Cu.exec(e));return i.lastIndex=e.lastIndex,i}function fm(e){return Zr?Ie(Zr.call(e)):{}}function zl(e,i){var o=i?Ka(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function Ql(e,i){if(e!==i){var o=e!==r,l=e===null,p=e===e,g=Sn(e),y=i!==r,E=i===null,A=i===i,C=Sn(i);if(!E&&!C&&!g&&e>i||g&&y&&A&&!E&&!C||l&&y&&A||!o&&A||!p)return 1;if(!l&&!g&&!C&&e<i||C&&o&&p&&!l&&!g||E&&o&&p||!y&&p||!A)return-1}return 0}function pm(e,i,o){for(var l=-1,p=e.criteria,g=i.criteria,y=p.length,E=o.length;++l<y;){var A=Ql(p[l],g[l]);if(A){if(l>=E)return A;var C=o[l];return A*(C=="desc"?-1:1)}}return e.index-i.index}function Hl(e,i,o,l){for(var p=-1,g=e.length,y=o.length,E=-1,A=i.length,C=Qe(g-y,0),O=S(A+C),R=!l;++E<A;)O[E]=i[E];for(;++p<y;)(R||p<g)&&(O[o[p]]=e[p]);for(;C--;)O[E++]=e[p++];return O}function Xl(e,i,o,l){for(var p=-1,g=e.length,y=-1,E=o.length,A=-1,C=i.length,O=Qe(g-E,0),R=S(O+C),M=!l;++p<O;)R[p]=e[p];for(var z=p;++A<C;)R[z+A]=i[A];for(;++y<E;)(M||p<g)&&(R[z+o[y]]=e[p++]);return R}function mn(e,i){var o=-1,l=e.length;for(i||(i=S(l));++o<l;)i[o]=e[o];return i}function lt(e,i,o,l){var p=!o;o||(o={});for(var g=-1,y=i.length;++g<y;){var E=i[g],A=l?l(o[E],e[E],E,o,e):r;A===r&&(A=e[E]),p?_t(o,E,A):ei(o,E,A)}return o}function dm(e,i){return lt(e,so(e),i)}function hm(e,i){return lt(e,cc(e),i)}function us(e,i){return function(o,l){var p=re(o)?Eh:Bg,g=i?i():{};return p(o,e,Z(l,2),g)}}function Nr(e){return le(function(i,o){var l=-1,p=o.length,g=p>1?o[p-1]:r,y=p>2?o[2]:r;for(g=e.length>3&&typeof g=="function"?(p--,g):r,y&&ln(o[0],o[1],y)&&(g=p<3?r:g,p=1),i=Ie(i);++l<p;){var E=o[l];E&&e(i,E,l,g)}return i})}function Kl(e,i){return function(o,l){if(o==null)return o;if(!vn(o))return e(o,l);for(var p=o.length,g=i?p:-1,y=Ie(o);(i?g--:++g<p)&&l(y[g],g,y)!==!1;);return o}}function Zl(e){return function(i,o,l){for(var p=-1,g=Ie(i),y=l(i),E=y.length;E--;){var A=y[e?E:++p];if(o(g[A],A,g)===!1)break}return i}}function gm(e,i,o){var l=i&U,p=si(e);function g(){var y=this&&this!==en&&this instanceof g?p:e;return y.apply(l?o:this,arguments)}return g}function ec(e){return function(i){i=Te(i);var o=Tr(i)?Xn(i):r,l=o?o[0]:i.charAt(0),p=o?Yt(o,1).join(""):i.slice(1);return l[e]()+p}}function Fr(e){return function(i){return Aa(Kc(Xc(i).replace(sh,"")),e,"")}}function si(e){return function(){var i=arguments;switch(i.length){case 0:return new e;case 1:return new e(i[0]);case 2:return new e(i[0],i[1]);case 3:return new e(i[0],i[1],i[2]);case 4:return new e(i[0],i[1],i[2],i[3]);case 5:return new e(i[0],i[1],i[2],i[3],i[4]);case 6:return new e(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var o=wr(e.prototype),l=e.apply(o,i);return Le(l)?l:o}}function mm(e,i,o){var l=si(e);function p(){for(var g=arguments.length,y=S(g),E=g,A=Cr(p);E--;)y[E]=arguments[E];var C=g<3&&y[0]!==A&&y[g-1]!==A?[]:$t(y,A);if(g-=C.length,g<o)return sc(e,i,ls,p.placeholder,r,y,C,r,r,o-g);var O=this&&this!==en&&this instanceof p?l:e;return _n(O,this,y)}return p}function nc(e){return function(i,o,l){var p=Ie(i);if(!vn(i)){var g=Z(o,3);i=He(i),o=function(E){return g(p[E],E,p)}}var y=e(i,o,l);return y>-1?p[g?i[y]:y]:r}}function tc(e){return bt(function(i){var o=i.length,l=o,p=Un.prototype.thru;for(e&&i.reverse();l--;){var g=i[l];if(typeof g!="function")throw new Pn(c);if(p&&!y&&ds(g)=="wrapper")var y=new Un([],!0)}for(l=y?l:o;++l<o;){g=i[l];var E=ds(g),A=E=="wrapper"?ro(g):r;A&&oo(A[0])&&A[1]==($|K|oe|ue)&&!A[4].length&&A[9]==1?y=y[ds(A[0])].apply(y,A[3]):y=g.length==1&&oo(g)?y[E]():y.thru(g)}return function(){var C=arguments,O=C[0];if(y&&C.length==1&&re(O))return y.plant(O).value();for(var R=0,M=o?i[R].apply(this,C):O;++R<o;)M=i[R].call(this,M);return M}})}function ls(e,i,o,l,p,g,y,E,A,C){var O=i&$,R=i&U,M=i&X,z=i&(K|Q),ee=i&F,ae=M?r:si(e);function ne(){for(var fe=arguments.length,ge=S(fe),In=fe;In--;)ge[In]=arguments[In];if(z)var cn=Cr(ne),wn=Nh(ge,cn);if(l&&(ge=Hl(ge,l,p,z)),g&&(ge=Xl(ge,g,y,z)),fe-=wn,z&&fe<C){var $e=$t(ge,cn);return sc(e,i,ls,ne.placeholder,o,ge,$e,E,A,C-fe)}var et=R?o:this,Nt=M?et[e]:e;return fe=ge.length,E?ge=Bm(ge,E):ee&&fe>1&&ge.reverse(),O&&A<fe&&(ge.length=A),this&&this!==en&&this instanceof ne&&(Nt=ae||si(Nt)),Nt.apply(et,ge)}return ne}function rc(e,i){return function(o,l){return jg(o,e,i(l),{})}}function cs(e,i){return function(o,l){var p;if(o===r&&l===r)return i;if(o!==r&&(p=o),l!==r){if(p===r)return l;typeof o=="string"||typeof l=="string"?(o=bn(o),l=bn(l)):(o=Gl(o),l=Gl(l)),p=e(o,l)}return p}}function Za(e){return bt(function(i){return i=ke(i,An(Z())),le(function(o){var l=this;return e(i,function(p){return _n(p,l,o)})})})}function fs(e,i){i=i===r?" ":bn(i);var o=i.length;if(o<2)return o?Wa(i,e):i;var l=Wa(i,Xi(e/_r(i)));return Tr(i)?Yt(Xn(l),0,e).join(""):l.slice(0,e)}function vm(e,i,o,l){var p=i&U,g=si(e);function y(){for(var E=-1,A=arguments.length,C=-1,O=l.length,R=S(O+A),M=this&&this!==en&&this instanceof y?g:e;++C<O;)R[C]=l[C];for(;A--;)R[C++]=arguments[++E];return _n(M,p?o:this,R)}return y}function ic(e){return function(i,o,l){return l&&typeof l!="number"&&ln(i,o,l)&&(o=l=r),i=wt(i),o===r?(o=i,i=0):o=wt(o),l=l===r?i<o?1:-1:wt(l),tm(i,o,l,e)}}function ps(e){return function(i,o){return typeof i=="string"&&typeof o=="string"||(i=Gn(i),o=Gn(o)),e(i,o)}}function sc(e,i,o,l,p,g,y,E,A,C){var O=i&K,R=O?y:r,M=O?r:y,z=O?g:r,ee=O?r:g;i|=O?oe:P,i&=~(O?P:oe),i&he||(i&=-4);var ae=[e,i,p,z,R,ee,M,E,A,C],ne=o.apply(r,ae);return oo(e)&&vc(ne,ae),ne.placeholder=l,yc(ne,e,i)}function eo(e){var i=ze[e];return function(o,l){if(o=Gn(o),l=l==null?0:an(se(l),292),l&&yl(o)){var p=(Te(o)+"e").split("e"),g=i(p[0]+"e"+(+p[1]+l));return p=(Te(g)+"e").split("e"),+(p[0]+"e"+(+p[1]-l))}return i(o)}}var ym=Sr&&1/Vi(new Sr([,-0]))[1]==xn?function(e){return new Sr(e)}:Ao;function ac(e){return function(i){var o=on(i);return o==Qn?Ca(i):o==Hn?Lh(i):wh(i,e(i))}}function At(e,i,o,l,p,g,y,E){var A=i&X;if(!A&&typeof e!="function")throw new Pn(c);var C=l?l.length:0;if(C||(i&=-97,l=p=r),y=y===r?y:Qe(se(y),0),E=E===r?E:se(E),C-=p?p.length:0,i&P){var O=l,R=p;l=p=r}var M=A?r:ro(e),z=[e,i,o,l,p,O,R,g,y,E];if(M&&km(z,M),e=z[0],i=z[1],o=z[2],l=z[3],p=z[4],E=z[9]=z[9]===r?A?0:e.length:Qe(z[9]-C,0),!E&&i&(K|Q)&&(i&=-25),!i||i==U)var ee=gm(e,i,o);else i==K||i==Q?ee=mm(e,i,E):(i==oe||i==(U|oe))&&!p.length?ee=vm(e,i,o,l):ee=ls.apply(r,z);var ae=M?$l:vc;return yc(ae(ee,z),e,i)}function oc(e,i,o,l){return e===r||Zn(e,br[o])&&!be.call(l,o)?i:e}function uc(e,i,o,l,p,g){return Le(e)&&Le(i)&&(g.set(i,e),ss(e,i,r,uc,g),g.delete(i)),e}function Em(e){return ui(e)?r:e}function lc(e,i,o,l,p,g){var y=o&I,E=e.length,A=i.length;if(E!=A&&!(y&&A>E))return!1;var C=g.get(e),O=g.get(i);if(C&&O)return C==i&&O==e;var R=-1,M=!0,z=o&B?new er:r;for(g.set(e,i),g.set(i,e);++R<E;){var ee=e[R],ae=i[R];if(l)var ne=y?l(ae,ee,R,i,e,g):l(ee,ae,R,e,i,g);if(ne!==r){if(ne)continue;M=!1;break}if(z){if(!ba(i,function(fe,ge){if(!zr(z,ge)&&(ee===fe||p(ee,fe,o,l,g)))return z.push(ge)})){M=!1;break}}else if(!(ee===ae||p(ee,ae,o,l,g))){M=!1;break}}return g.delete(e),g.delete(i),M}function Dm(e,i,o,l,p,g,y){switch(o){case yr:if(e.byteLength!=i.byteLength||e.byteOffset!=i.byteOffset)return!1;e=e.buffer,i=i.buffer;case Jr:return!(e.byteLength!=i.byteLength||!g(new Ji(e),new Ji(i)));case De:case Rn:case qr:return Zn(+e,+i);case Pt:return e.name==i.name&&e.message==i.message;case jr:case Yr:return e==i+"";case Qn:var E=Ca;case Hn:var A=l&I;if(E||(E=Vi),e.size!=i.size&&!A)return!1;var C=y.get(e);if(C)return C==i;l|=B,y.set(e,i);var O=lc(E(e),E(i),l,p,g,y);return y.delete(e),O;case Li:if(Zr)return Zr.call(e)==Zr.call(i)}return!1}function Tm(e,i,o,l,p,g){var y=o&I,E=no(e),A=E.length,C=no(i),O=C.length;if(A!=O&&!y)return!1;for(var R=A;R--;){var M=E[R];if(!(y?M in i:be.call(i,M)))return!1}var z=g.get(e),ee=g.get(i);if(z&&ee)return z==i&&ee==e;var ae=!0;g.set(e,i),g.set(i,e);for(var ne=y;++R<A;){M=E[R];var fe=e[M],ge=i[M];if(l)var In=y?l(ge,fe,M,i,e,g):l(fe,ge,M,e,i,g);if(!(In===r?fe===ge||p(fe,ge,o,l,g):In)){ae=!1;break}ne||(ne=M=="constructor")}if(ae&&!ne){var cn=e.constructor,wn=i.constructor;cn!=wn&&"constructor"in e&&"constructor"in i&&!(typeof cn=="function"&&cn instanceof cn&&typeof wn=="function"&&wn instanceof wn)&&(ae=!1)}return g.delete(e),g.delete(i),ae}function bt(e){return lo(gc(e,r,bc),e+"")}function no(e){return Fl(e,He,so)}function to(e){return Fl(e,yn,cc)}var ro=Zi?function(e){return Zi.get(e)}:Ao;function ds(e){for(var i=e.name+"",o=Ir[i],l=be.call(Ir,i)?o.length:0;l--;){var p=o[l],g=p.func;if(g==null||g==e)return p.name}return i}function Cr(e){var i=be.call(d,"placeholder")?d:e;return i.placeholder}function Z(){var e=d.iteratee||To;return e=e===To?xl:e,arguments.length?e(arguments[0],arguments[1]):e}function hs(e,i){var o=e.__data__;return Fm(i)?o[typeof i=="string"?"string":"hash"]:o.map}function io(e){for(var i=He(e),o=i.length;o--;){var l=i[o],p=e[l];i[o]=[l,p,dc(p)]}return i}function rr(e,i){var o=xh(e,i);return Ol(o)?o:r}function _m(e){var i=be.call(e,Kt),o=e[Kt];try{e[Kt]=r;var l=!0}catch{}var p=Yi.call(e);return l&&(i?e[Kt]=o:delete e[Kt]),p}var so=xa?function(e){return e==null?[]:(e=Ie(e),Ut(xa(e),function(i){return ml.call(e,i)}))}:bo,cc=xa?function(e){for(var i=[];e;)Mt(i,so(e)),e=zi(e);return i}:bo,on=un;(ka&&on(new ka(new ArrayBuffer(1)))!=yr||Hr&&on(new Hr)!=Qn||Ra&&on(Ra.resolve())!=Iu||Sr&&on(new Sr)!=Hn||Xr&&on(new Xr)!=Wr)&&(on=function(e){var i=un(e),o=i==Et?e.constructor:r,l=o?ir(o):"";if(l)switch(l){case ig:return yr;case sg:return Qn;case ag:return Iu;case og:return Hn;case ug:return Wr}return i});function Am(e,i,o){for(var l=-1,p=o.length;++l<p;){var g=o[l],y=g.size;switch(g.type){case"drop":e+=y;break;case"dropRight":i-=y;break;case"take":i=an(i,e+y);break;case"takeRight":e=Qe(e,i-y);break}}return{start:e,end:i}}function bm(e){var i=e.match(Cd);return i?i[1].split(Od):[]}function fc(e,i,o){i=jt(i,e);for(var l=-1,p=i.length,g=!1;++l<p;){var y=ct(i[l]);if(!(g=e!=null&&o(e,y)))break;e=e[y]}return g||++l!=p?g:(p=e==null?0:e.length,!!p&&Ts(p)&&St(y,p)&&(re(e)||sr(e)))}function Sm(e){var i=e.length,o=new e.constructor(i);return i&&typeof e[0]=="string"&&be.call(e,"index")&&(o.index=e.index,o.input=e.input),o}function pc(e){return typeof e.constructor=="function"&&!ai(e)?wr(zi(e)):{}}function Im(e,i,o){var l=e.constructor;switch(i){case Jr:return Ka(e);case De:case Rn:return new l(+e);case yr:return lm(e,o);case ia:case sa:case aa:case oa:case ua:case la:case ca:case fa:case pa:return zl(e,o);case Qn:return new l;case qr:case Yr:return new l(e);case jr:return cm(e);case Hn:return new l;case Li:return fm(e)}}function wm(e,i){var o=i.length;if(!o)return e;var l=o-1;return i[l]=(o>1?"& ":"")+i[l],i=i.join(o>2?", ":" "),e.replace(Fd,`{
/* [wrapped with `+i+`] */
`)}function Nm(e){return re(e)||sr(e)||!!(vl&&e&&e[vl])}function St(e,i){var o=typeof e;return i=i??Tn,!!i&&(o=="number"||o!="symbol"&&$d.test(e))&&e>-1&&e%1==0&&e<i}function ln(e,i,o){if(!Le(o))return!1;var l=typeof i;return(l=="number"?vn(o)&&St(i,o.length):l=="string"&&i in o)?Zn(o[i],e):!1}function ao(e,i){if(re(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||Sn(e)?!0:Sd.test(e)||!bd.test(e)||i!=null&&e in Ie(i)}function Fm(e){var i=typeof e;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?e!=="__proto__":e===null}function oo(e){var i=ds(e),o=d[i];if(typeof o!="function"||!(i in pe.prototype))return!1;if(e===o)return!0;var l=ro(o);return!!l&&e===l[0]}function Cm(e){return!!dl&&dl in e}var Om=qi?It:So;function ai(e){var i=e&&e.constructor,o=typeof i=="function"&&i.prototype||br;return e===o}function dc(e){return e===e&&!Le(e)}function hc(e,i){return function(o){return o==null?!1:o[e]===i&&(i!==r||e in Ie(o))}}function xm(e){var i=Es(e,function(l){return o.size===m&&o.clear(),l}),o=i.cache;return i}function km(e,i){var o=e[1],l=i[1],p=o|l,g=p<(U|X|$),y=l==$&&o==K||l==$&&o==ue&&e[7].length<=i[8]||l==($|ue)&&i[7].length<=i[8]&&o==K;if(!(g||y))return e;l&U&&(e[2]=i[2],p|=o&U?0:he);var E=i[3];if(E){var A=e[3];e[3]=A?Hl(A,E,i[4]):E,e[4]=A?$t(e[3],v):i[4]}return E=i[5],E&&(A=e[5],e[5]=A?Xl(A,E,i[6]):E,e[6]=A?$t(e[5],v):i[6]),E=i[7],E&&(e[7]=E),l&$&&(e[8]=e[8]==null?i[8]:an(e[8],i[8])),e[9]==null&&(e[9]=i[9]),e[0]=i[0],e[1]=p,e}function Rm(e){var i=[];if(e!=null)for(var o in Ie(e))i.push(o);return i}function Lm(e){return Yi.call(e)}function gc(e,i,o){return i=Qe(i===r?e.length-1:i,0),function(){for(var l=arguments,p=-1,g=Qe(l.length-i,0),y=S(g);++p<g;)y[p]=l[i+p];p=-1;for(var E=S(i+1);++p<i;)E[p]=l[p];return E[i]=o(y),_n(e,this,E)}}function mc(e,i){return i.length<2?e:tr(e,$n(i,0,-1))}function Bm(e,i){for(var o=e.length,l=an(i.length,o),p=mn(e);l--;){var g=i[l];e[l]=St(g,o)?p[g]:r}return e}function uo(e,i){if(!(i==="constructor"&&typeof e[i]=="function")&&i!="__proto__")return e[i]}var vc=Ec($l),oi=Xh||function(e,i){return en.setTimeout(e,i)},lo=Ec(sm);function yc(e,i,o){var l=i+"";return lo(e,wm(l,Pm(bm(l),o)))}function Ec(e){var i=0,o=0;return function(){var l=ng(),p=Cn-(l-o);if(o=l,p>0){if(++i>=Pe)return arguments[0]}else i=0;return e.apply(r,arguments)}}function gs(e,i){var o=-1,l=e.length,p=l-1;for(i=i===r?l:i;++o<i;){var g=Ya(o,p),y=e[g];e[g]=e[o],e[o]=y}return e.length=i,e}var Dc=xm(function(e){var i=[];return e.charCodeAt(0)===46&&i.push(""),e.replace(Id,function(o,l,p,g){i.push(p?g.replace(Rd,"$1"):l||o)}),i});function ct(e){if(typeof e=="string"||Sn(e))return e;var i=e+"";return i=="0"&&1/e==-xn?"-0":i}function ir(e){if(e!=null){try{return ji.call(e)}catch{}try{return e+""}catch{}}return""}function Pm(e,i){return Bn(V,function(o){var l="_."+o[0];i&o[1]&&!Mi(e,l)&&e.push(l)}),e.sort()}function Tc(e){if(e instanceof pe)return e.clone();var i=new Un(e.__wrapped__,e.__chain__);return i.__actions__=mn(e.__actions__),i.__index__=e.__index__,i.__values__=e.__values__,i}function Um(e,i,o){(o?ln(e,i,o):i===r)?i=1:i=Qe(se(i),0);var l=e==null?0:e.length;if(!l||i<1)return[];for(var p=0,g=0,y=S(Xi(l/i));p<l;)y[g++]=$n(e,p,p+=i);return y}function Mm(e){for(var i=-1,o=e==null?0:e.length,l=0,p=[];++i<o;){var g=e[i];g&&(p[l++]=g)}return p}function $m(){var e=arguments.length;if(!e)return[];for(var i=S(e-1),o=arguments[0],l=e;l--;)i[l-1]=arguments[l];return Mt(re(o)?mn(o):[o],nn(i,1))}var Vm=le(function(e,i){return Me(e)?ni(e,nn(i,1,Me,!0)):[]}),Gm=le(function(e,i){var o=Vn(i);return Me(o)&&(o=r),Me(e)?ni(e,nn(i,1,Me,!0),Z(o,2)):[]}),qm=le(function(e,i){var o=Vn(i);return Me(o)&&(o=r),Me(e)?ni(e,nn(i,1,Me,!0),r,o):[]});function jm(e,i,o){var l=e==null?0:e.length;return l?(i=o||i===r?1:se(i),$n(e,i<0?0:i,l)):[]}function Ym(e,i,o){var l=e==null?0:e.length;return l?(i=o||i===r?1:se(i),i=l-i,$n(e,0,i<0?0:i)):[]}function Wm(e,i){return e&&e.length?os(e,Z(i,3),!0,!0):[]}function Jm(e,i){return e&&e.length?os(e,Z(i,3),!0):[]}function zm(e,i,o,l){var p=e==null?0:e.length;return p?(o&&typeof o!="number"&&ln(e,i,o)&&(o=0,l=p),$g(e,i,o,l)):[]}function _c(e,i,o){var l=e==null?0:e.length;if(!l)return-1;var p=o==null?0:se(o);return p<0&&(p=Qe(l+p,0)),$i(e,Z(i,3),p)}function Ac(e,i,o){var l=e==null?0:e.length;if(!l)return-1;var p=l-1;return o!==r&&(p=se(o),p=o<0?Qe(l+p,0):an(p,l-1)),$i(e,Z(i,3),p,!0)}function bc(e){var i=e==null?0:e.length;return i?nn(e,1):[]}function Qm(e){var i=e==null?0:e.length;return i?nn(e,xn):[]}function Hm(e,i){var o=e==null?0:e.length;return o?(i=i===r?1:se(i),nn(e,i)):[]}function Xm(e){for(var i=-1,o=e==null?0:e.length,l={};++i<o;){var p=e[i];l[p[0]]=p[1]}return l}function Sc(e){return e&&e.length?e[0]:r}function Km(e,i,o){var l=e==null?0:e.length;if(!l)return-1;var p=o==null?0:se(o);return p<0&&(p=Qe(l+p,0)),Dr(e,i,p)}function Zm(e){var i=e==null?0:e.length;return i?$n(e,0,-1):[]}var e0=le(function(e){var i=ke(e,Ha);return i.length&&i[0]===e[0]?$a(i):[]}),n0=le(function(e){var i=Vn(e),o=ke(e,Ha);return i===Vn(o)?i=r:o.pop(),o.length&&o[0]===e[0]?$a(o,Z(i,2)):[]}),t0=le(function(e){var i=Vn(e),o=ke(e,Ha);return i=typeof i=="function"?i:r,i&&o.pop(),o.length&&o[0]===e[0]?$a(o,r,i):[]});function r0(e,i){return e==null?"":Zh.call(e,i)}function Vn(e){var i=e==null?0:e.length;return i?e[i-1]:r}function i0(e,i,o){var l=e==null?0:e.length;if(!l)return-1;var p=l;return o!==r&&(p=se(o),p=p<0?Qe(l+p,0):an(p,l-1)),i===i?Ph(e,i,p):$i(e,sl,p,!0)}function s0(e,i){return e&&e.length?Bl(e,se(i)):r}var a0=le(Ic);function Ic(e,i){return e&&e.length&&i&&i.length?ja(e,i):e}function o0(e,i,o){return e&&e.length&&i&&i.length?ja(e,i,Z(o,2)):e}function u0(e,i,o){return e&&e.length&&i&&i.length?ja(e,i,r,o):e}var l0=bt(function(e,i){var o=e==null?0:e.length,l=Ba(e,i);return Ml(e,ke(i,function(p){return St(p,o)?+p:p}).sort(Ql)),l});function c0(e,i){var o=[];if(!(e&&e.length))return o;var l=-1,p=[],g=e.length;for(i=Z(i,3);++l<g;){var y=e[l];i(y,l,e)&&(o.push(y),p.push(l))}return Ml(e,p),o}function co(e){return e==null?e:rg.call(e)}function f0(e,i,o){var l=e==null?0:e.length;return l?(o&&typeof o!="number"&&ln(e,i,o)?(i=0,o=l):(i=i==null?0:se(i),o=o===r?l:se(o)),$n(e,i,o)):[]}function p0(e,i){return as(e,i)}function d0(e,i,o){return Ja(e,i,Z(o,2))}function h0(e,i){var o=e==null?0:e.length;if(o){var l=as(e,i);if(l<o&&Zn(e[l],i))return l}return-1}function g0(e,i){return as(e,i,!0)}function m0(e,i,o){return Ja(e,i,Z(o,2),!0)}function v0(e,i){var o=e==null?0:e.length;if(o){var l=as(e,i,!0)-1;if(Zn(e[l],i))return l}return-1}function y0(e){return e&&e.length?Vl(e):[]}function E0(e,i){return e&&e.length?Vl(e,Z(i,2)):[]}function D0(e){var i=e==null?0:e.length;return i?$n(e,1,i):[]}function T0(e,i,o){return e&&e.length?(i=o||i===r?1:se(i),$n(e,0,i<0?0:i)):[]}function _0(e,i,o){var l=e==null?0:e.length;return l?(i=o||i===r?1:se(i),i=l-i,$n(e,i<0?0:i,l)):[]}function A0(e,i){return e&&e.length?os(e,Z(i,3),!1,!0):[]}function b0(e,i){return e&&e.length?os(e,Z(i,3)):[]}var S0=le(function(e){return qt(nn(e,1,Me,!0))}),I0=le(function(e){var i=Vn(e);return Me(i)&&(i=r),qt(nn(e,1,Me,!0),Z(i,2))}),w0=le(function(e){var i=Vn(e);return i=typeof i=="function"?i:r,qt(nn(e,1,Me,!0),r,i)});function N0(e){return e&&e.length?qt(e):[]}function F0(e,i){return e&&e.length?qt(e,Z(i,2)):[]}function C0(e,i){return i=typeof i=="function"?i:r,e&&e.length?qt(e,r,i):[]}function fo(e){if(!(e&&e.length))return[];var i=0;return e=Ut(e,function(o){if(Me(o))return i=Qe(o.length,i),!0}),Na(i,function(o){return ke(e,Sa(o))})}function wc(e,i){if(!(e&&e.length))return[];var o=fo(e);return i==null?o:ke(o,function(l){return _n(i,r,l)})}var O0=le(function(e,i){return Me(e)?ni(e,i):[]}),x0=le(function(e){return Qa(Ut(e,Me))}),k0=le(function(e){var i=Vn(e);return Me(i)&&(i=r),Qa(Ut(e,Me),Z(i,2))}),R0=le(function(e){var i=Vn(e);return i=typeof i=="function"?i:r,Qa(Ut(e,Me),r,i)}),L0=le(fo);function B0(e,i){return Yl(e||[],i||[],ei)}function P0(e,i){return Yl(e||[],i||[],ii)}var U0=le(function(e){var i=e.length,o=i>1?e[i-1]:r;return o=typeof o=="function"?(e.pop(),o):r,wc(e,o)});function Nc(e){var i=d(e);return i.__chain__=!0,i}function M0(e,i){return i(e),e}function ms(e,i){return i(e)}var $0=bt(function(e){var i=e.length,o=i?e[0]:0,l=this.__wrapped__,p=function(g){return Ba(g,e)};return i>1||this.__actions__.length||!(l instanceof pe)||!St(o)?this.thru(p):(l=l.slice(o,+o+(i?1:0)),l.__actions__.push({func:ms,args:[p],thisArg:r}),new Un(l,this.__chain__).thru(function(g){return i&&!g.length&&g.push(r),g}))});function V0(){return Nc(this)}function G0(){return new Un(this.value(),this.__chain__)}function q0(){this.__values__===r&&(this.__values__=Gc(this.value()));var e=this.__index__>=this.__values__.length,i=e?r:this.__values__[this.__index__++];return{done:e,value:i}}function j0(){return this}function Y0(e){for(var i,o=this;o instanceof ns;){var l=Tc(o);l.__index__=0,l.__values__=r,i?p.__wrapped__=l:i=l;var p=l;o=o.__wrapped__}return p.__wrapped__=e,i}function W0(){var e=this.__wrapped__;if(e instanceof pe){var i=e;return this.__actions__.length&&(i=new pe(this)),i=i.reverse(),i.__actions__.push({func:ms,args:[co],thisArg:r}),new Un(i,this.__chain__)}return this.thru(co)}function J0(){return jl(this.__wrapped__,this.__actions__)}var z0=us(function(e,i,o){be.call(e,o)?++e[o]:_t(e,o,1)});function Q0(e,i,o){var l=re(e)?rl:Mg;return o&&ln(e,i,o)&&(i=r),l(e,Z(i,3))}function H0(e,i){var o=re(e)?Ut:wl;return o(e,Z(i,3))}var X0=nc(_c),K0=nc(Ac);function Z0(e,i){return nn(vs(e,i),1)}function ev(e,i){return nn(vs(e,i),xn)}function nv(e,i,o){return o=o===r?1:se(o),nn(vs(e,i),o)}function Fc(e,i){var o=re(e)?Bn:Gt;return o(e,Z(i,3))}function Cc(e,i){var o=re(e)?Dh:Il;return o(e,Z(i,3))}var tv=us(function(e,i,o){be.call(e,o)?e[o].push(i):_t(e,o,[i])});function rv(e,i,o,l){e=vn(e)?e:xr(e),o=o&&!l?se(o):0;var p=e.length;return o<0&&(o=Qe(p+o,0)),_s(e)?o<=p&&e.indexOf(i,o)>-1:!!p&&Dr(e,i,o)>-1}var iv=le(function(e,i,o){var l=-1,p=typeof i=="function",g=vn(e)?S(e.length):[];return Gt(e,function(y){g[++l]=p?_n(i,y,o):ti(y,i,o)}),g}),sv=us(function(e,i,o){_t(e,o,i)});function vs(e,i){var o=re(e)?ke:kl;return o(e,Z(i,3))}function av(e,i,o,l){return e==null?[]:(re(i)||(i=i==null?[]:[i]),o=l?r:o,re(o)||(o=o==null?[]:[o]),Pl(e,i,o))}var ov=us(function(e,i,o){e[o?0:1].push(i)},function(){return[[],[]]});function uv(e,i,o){var l=re(e)?Aa:ol,p=arguments.length<3;return l(e,Z(i,4),o,p,Gt)}function lv(e,i,o){var l=re(e)?Th:ol,p=arguments.length<3;return l(e,Z(i,4),o,p,Il)}function cv(e,i){var o=re(e)?Ut:wl;return o(e,Ds(Z(i,3)))}function fv(e){var i=re(e)?_l:rm;return i(e)}function pv(e,i,o){(o?ln(e,i,o):i===r)?i=1:i=se(i);var l=re(e)?Rg:im;return l(e,i)}function dv(e){var i=re(e)?Lg:am;return i(e)}function hv(e){if(e==null)return 0;if(vn(e))return _s(e)?_r(e):e.length;var i=on(e);return i==Qn||i==Hn?e.size:Ga(e).length}function gv(e,i,o){var l=re(e)?ba:om;return o&&ln(e,i,o)&&(i=r),l(e,Z(i,3))}var mv=le(function(e,i){if(e==null)return[];var o=i.length;return o>1&&ln(e,i[0],i[1])?i=[]:o>2&&ln(i[0],i[1],i[2])&&(i=[i[0]]),Pl(e,nn(i,1),[])}),ys=Hh||function(){return en.Date.now()};function vv(e,i){if(typeof i!="function")throw new Pn(c);return e=se(e),function(){if(--e<1)return i.apply(this,arguments)}}function Oc(e,i,o){return i=o?r:i,i=e&&i==null?e.length:i,At(e,$,r,r,r,r,i)}function xc(e,i){var o;if(typeof i!="function")throw new Pn(c);return e=se(e),function(){return--e>0&&(o=i.apply(this,arguments)),e<=1&&(i=r),o}}var po=le(function(e,i,o){var l=U;if(o.length){var p=$t(o,Cr(po));l|=oe}return At(e,l,i,o,p)}),kc=le(function(e,i,o){var l=U|X;if(o.length){var p=$t(o,Cr(kc));l|=oe}return At(i,l,e,o,p)});function Rc(e,i,o){i=o?r:i;var l=At(e,K,r,r,r,r,r,i);return l.placeholder=Rc.placeholder,l}function Lc(e,i,o){i=o?r:i;var l=At(e,Q,r,r,r,r,r,i);return l.placeholder=Lc.placeholder,l}function Bc(e,i,o){var l,p,g,y,E,A,C=0,O=!1,R=!1,M=!0;if(typeof e!="function")throw new Pn(c);i=Gn(i)||0,Le(o)&&(O=!!o.leading,R="maxWait"in o,g=R?Qe(Gn(o.maxWait)||0,i):g,M="trailing"in o?!!o.trailing:M);function z($e){var et=l,Nt=p;return l=p=r,C=$e,y=e.apply(Nt,et),y}function ee($e){return C=$e,E=oi(fe,i),O?z($e):y}function ae($e){var et=$e-A,Nt=$e-C,nf=i-et;return R?an(nf,g-Nt):nf}function ne($e){var et=$e-A,Nt=$e-C;return A===r||et>=i||et<0||R&&Nt>=g}function fe(){var $e=ys();if(ne($e))return ge($e);E=oi(fe,ae($e))}function ge($e){return E=r,M&&l?z($e):(l=p=r,y)}function In(){E!==r&&Wl(E),C=0,l=A=p=E=r}function cn(){return E===r?y:ge(ys())}function wn(){var $e=ys(),et=ne($e);if(l=arguments,p=this,A=$e,et){if(E===r)return ee(A);if(R)return Wl(E),E=oi(fe,i),z(A)}return E===r&&(E=oi(fe,i)),y}return wn.cancel=In,wn.flush=cn,wn}var yv=le(function(e,i){return Sl(e,1,i)}),Ev=le(function(e,i,o){return Sl(e,Gn(i)||0,o)});function Dv(e){return At(e,F)}function Es(e,i){if(typeof e!="function"||i!=null&&typeof i!="function")throw new Pn(c);var o=function(){var l=arguments,p=i?i.apply(this,l):l[0],g=o.cache;if(g.has(p))return g.get(p);var y=e.apply(this,l);return o.cache=g.set(p,y)||g,y};return o.cache=new(Es.Cache||Tt),o}Es.Cache=Tt;function Ds(e){if(typeof e!="function")throw new Pn(c);return function(){var i=arguments;switch(i.length){case 0:return!e.call(this);case 1:return!e.call(this,i[0]);case 2:return!e.call(this,i[0],i[1]);case 3:return!e.call(this,i[0],i[1],i[2])}return!e.apply(this,i)}}function Tv(e){return xc(2,e)}var _v=um(function(e,i){i=i.length==1&&re(i[0])?ke(i[0],An(Z())):ke(nn(i,1),An(Z()));var o=i.length;return le(function(l){for(var p=-1,g=an(l.length,o);++p<g;)l[p]=i[p].call(this,l[p]);return _n(e,this,l)})}),ho=le(function(e,i){var o=$t(i,Cr(ho));return At(e,oe,r,i,o)}),Pc=le(function(e,i){var o=$t(i,Cr(Pc));return At(e,P,r,i,o)}),Av=bt(function(e,i){return At(e,ue,r,r,r,i)});function bv(e,i){if(typeof e!="function")throw new Pn(c);return i=i===r?i:se(i),le(e,i)}function Sv(e,i){if(typeof e!="function")throw new Pn(c);return i=i==null?0:Qe(se(i),0),le(function(o){var l=o[i],p=Yt(o,0,i);return l&&Mt(p,l),_n(e,this,p)})}function Iv(e,i,o){var l=!0,p=!0;if(typeof e!="function")throw new Pn(c);return Le(o)&&(l="leading"in o?!!o.leading:l,p="trailing"in o?!!o.trailing:p),Bc(e,i,{leading:l,maxWait:i,trailing:p})}function wv(e){return Oc(e,1)}function Nv(e,i){return ho(Xa(i),e)}function Fv(){if(!arguments.length)return[];var e=arguments[0];return re(e)?e:[e]}function Cv(e){return Mn(e,k)}function Ov(e,i){return i=typeof i=="function"?i:r,Mn(e,k,i)}function xv(e){return Mn(e,D|k)}function kv(e,i){return i=typeof i=="function"?i:r,Mn(e,D|k,i)}function Rv(e,i){return i==null||bl(e,i,He(i))}function Zn(e,i){return e===i||e!==e&&i!==i}var Lv=ps(Ma),Bv=ps(function(e,i){return e>=i}),sr=Cl((function(){return arguments})())?Cl:function(e){return Be(e)&&be.call(e,"callee")&&!ml.call(e,"callee")},re=S.isArray,Pv=Xu?An(Xu):Yg;function vn(e){return e!=null&&Ts(e.length)&&!It(e)}function Me(e){return Be(e)&&vn(e)}function Uv(e){return e===!0||e===!1||Be(e)&&un(e)==De}var Wt=Kh||So,Mv=Ku?An(Ku):Wg;function $v(e){return Be(e)&&e.nodeType===1&&!ui(e)}function Vv(e){if(e==null)return!0;if(vn(e)&&(re(e)||typeof e=="string"||typeof e.splice=="function"||Wt(e)||Or(e)||sr(e)))return!e.length;var i=on(e);if(i==Qn||i==Hn)return!e.size;if(ai(e))return!Ga(e).length;for(var o in e)if(be.call(e,o))return!1;return!0}function Gv(e,i){return ri(e,i)}function qv(e,i,o){o=typeof o=="function"?o:r;var l=o?o(e,i):r;return l===r?ri(e,i,r,o):!!l}function go(e){if(!Be(e))return!1;var i=un(e);return i==Pt||i==Gr||typeof e.message=="string"&&typeof e.name=="string"&&!ui(e)}function jv(e){return typeof e=="number"&&yl(e)}function It(e){if(!Le(e))return!1;var i=un(e);return i==sn||i==Su||i==Ue||i==hd}function Uc(e){return typeof e=="number"&&e==se(e)}function Ts(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Tn}function Le(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}function Be(e){return e!=null&&typeof e=="object"}var Mc=Zu?An(Zu):zg;function Yv(e,i){return e===i||Va(e,i,io(i))}function Wv(e,i,o){return o=typeof o=="function"?o:r,Va(e,i,io(i),o)}function Jv(e){return $c(e)&&e!=+e}function zv(e){if(Om(e))throw new te(u);return Ol(e)}function Qv(e){return e===null}function Hv(e){return e==null}function $c(e){return typeof e=="number"||Be(e)&&un(e)==qr}function ui(e){if(!Be(e)||un(e)!=Et)return!1;var i=zi(e);if(i===null)return!0;var o=be.call(i,"constructor")&&i.constructor;return typeof o=="function"&&o instanceof o&&ji.call(o)==Wh}var mo=el?An(el):Qg;function Xv(e){return Uc(e)&&e>=-Tn&&e<=Tn}var Vc=nl?An(nl):Hg;function _s(e){return typeof e=="string"||!re(e)&&Be(e)&&un(e)==Yr}function Sn(e){return typeof e=="symbol"||Be(e)&&un(e)==Li}var Or=tl?An(tl):Xg;function Kv(e){return e===r}function Zv(e){return Be(e)&&on(e)==Wr}function ey(e){return Be(e)&&un(e)==md}var ny=ps(qa),ty=ps(function(e,i){return e<=i});function Gc(e){if(!e)return[];if(vn(e))return _s(e)?Xn(e):mn(e);if(Qr&&e[Qr])return Rh(e[Qr]());var i=on(e),o=i==Qn?Ca:i==Hn?Vi:xr;return o(e)}function wt(e){if(!e)return e===0?e:0;if(e=Gn(e),e===xn||e===-xn){var i=e<0?-1:1;return i*vr}return e===e?e:0}function se(e){var i=wt(e),o=i%1;return i===i?o?i-o:i:0}function qc(e){return e?nr(se(e),0,kn):0}function Gn(e){if(typeof e=="number")return e;if(Sn(e))return Ht;if(Le(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=Le(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=ul(e);var o=Pd.test(e);return o||Md.test(e)?vh(e.slice(2),o?2:8):Bd.test(e)?Ht:+e}function jc(e){return lt(e,yn(e))}function ry(e){return e?nr(se(e),-Tn,Tn):e===0?e:0}function Te(e){return e==null?"":bn(e)}var iy=Nr(function(e,i){if(ai(i)||vn(i)){lt(i,He(i),e);return}for(var o in i)be.call(i,o)&&ei(e,o,i[o])}),Yc=Nr(function(e,i){lt(i,yn(i),e)}),As=Nr(function(e,i,o,l){lt(i,yn(i),e,l)}),sy=Nr(function(e,i,o,l){lt(i,He(i),e,l)}),ay=bt(Ba);function oy(e,i){var o=wr(e);return i==null?o:Al(o,i)}var uy=le(function(e,i){e=Ie(e);var o=-1,l=i.length,p=l>2?i[2]:r;for(p&&ln(i[0],i[1],p)&&(l=1);++o<l;)for(var g=i[o],y=yn(g),E=-1,A=y.length;++E<A;){var C=y[E],O=e[C];(O===r||Zn(O,br[C])&&!be.call(e,C))&&(e[C]=g[C])}return e}),ly=le(function(e){return e.push(r,uc),_n(Wc,r,e)});function cy(e,i){return il(e,Z(i,3),ut)}function fy(e,i){return il(e,Z(i,3),Ua)}function py(e,i){return e==null?e:Pa(e,Z(i,3),yn)}function dy(e,i){return e==null?e:Nl(e,Z(i,3),yn)}function hy(e,i){return e&&ut(e,Z(i,3))}function gy(e,i){return e&&Ua(e,Z(i,3))}function my(e){return e==null?[]:is(e,He(e))}function vy(e){return e==null?[]:is(e,yn(e))}function vo(e,i,o){var l=e==null?r:tr(e,i);return l===r?o:l}function yy(e,i){return e!=null&&fc(e,i,Vg)}function yo(e,i){return e!=null&&fc(e,i,Gg)}var Ey=rc(function(e,i,o){i!=null&&typeof i.toString!="function"&&(i=Yi.call(i)),e[i]=o},Do(En)),Dy=rc(function(e,i,o){i!=null&&typeof i.toString!="function"&&(i=Yi.call(i)),be.call(e,i)?e[i].push(o):e[i]=[o]},Z),Ty=le(ti);function He(e){return vn(e)?Tl(e):Ga(e)}function yn(e){return vn(e)?Tl(e,!0):Kg(e)}function _y(e,i){var o={};return i=Z(i,3),ut(e,function(l,p,g){_t(o,i(l,p,g),l)}),o}function Ay(e,i){var o={};return i=Z(i,3),ut(e,function(l,p,g){_t(o,p,i(l,p,g))}),o}var by=Nr(function(e,i,o){ss(e,i,o)}),Wc=Nr(function(e,i,o,l){ss(e,i,o,l)}),Sy=bt(function(e,i){var o={};if(e==null)return o;var l=!1;i=ke(i,function(g){return g=jt(g,e),l||(l=g.length>1),g}),lt(e,to(e),o),l&&(o=Mn(o,D|b|k,Em));for(var p=i.length;p--;)za(o,i[p]);return o});function Iy(e,i){return Jc(e,Ds(Z(i)))}var wy=bt(function(e,i){return e==null?{}:em(e,i)});function Jc(e,i){if(e==null)return{};var o=ke(to(e),function(l){return[l]});return i=Z(i),Ul(e,o,function(l,p){return i(l,p[0])})}function Ny(e,i,o){i=jt(i,e);var l=-1,p=i.length;for(p||(p=1,e=r);++l<p;){var g=e==null?r:e[ct(i[l])];g===r&&(l=p,g=o),e=It(g)?g.call(e):g}return e}function Fy(e,i,o){return e==null?e:ii(e,i,o)}function Cy(e,i,o,l){return l=typeof l=="function"?l:r,e==null?e:ii(e,i,o,l)}var zc=ac(He),Qc=ac(yn);function Oy(e,i,o){var l=re(e),p=l||Wt(e)||Or(e);if(i=Z(i,4),o==null){var g=e&&e.constructor;p?o=l?new g:[]:Le(e)?o=It(g)?wr(zi(e)):{}:o={}}return(p?Bn:ut)(e,function(y,E,A){return i(o,y,E,A)}),o}function xy(e,i){return e==null?!0:za(e,i)}function ky(e,i,o){return e==null?e:ql(e,i,Xa(o))}function Ry(e,i,o,l){return l=typeof l=="function"?l:r,e==null?e:ql(e,i,Xa(o),l)}function xr(e){return e==null?[]:Fa(e,He(e))}function Ly(e){return e==null?[]:Fa(e,yn(e))}function By(e,i,o){return o===r&&(o=i,i=r),o!==r&&(o=Gn(o),o=o===o?o:0),i!==r&&(i=Gn(i),i=i===i?i:0),nr(Gn(e),i,o)}function Py(e,i,o){return i=wt(i),o===r?(o=i,i=0):o=wt(o),e=Gn(e),qg(e,i,o)}function Uy(e,i,o){if(o&&typeof o!="boolean"&&ln(e,i,o)&&(i=o=r),o===r&&(typeof i=="boolean"?(o=i,i=r):typeof e=="boolean"&&(o=e,e=r)),e===r&&i===r?(e=0,i=1):(e=wt(e),i===r?(i=e,e=0):i=wt(i)),e>i){var l=e;e=i,i=l}if(o||e%1||i%1){var p=El();return an(e+p*(i-e+mh("1e-"+((p+"").length-1))),i)}return Ya(e,i)}var My=Fr(function(e,i,o){return i=i.toLowerCase(),e+(o?Hc(i):i)});function Hc(e){return Eo(Te(e).toLowerCase())}function Xc(e){return e=Te(e),e&&e.replace(Vd,Fh).replace(ah,"")}function $y(e,i,o){e=Te(e),i=bn(i);var l=e.length;o=o===r?l:nr(se(o),0,l);var p=o;return o-=i.length,o>=0&&e.slice(o,p)==i}function Vy(e){return e=Te(e),e&&Td.test(e)?e.replace(Nu,Ch):e}function Gy(e){return e=Te(e),e&&wd.test(e)?e.replace(da,"\\$&"):e}var qy=Fr(function(e,i,o){return e+(o?"-":"")+i.toLowerCase()}),jy=Fr(function(e,i,o){return e+(o?" ":"")+i.toLowerCase()}),Yy=ec("toLowerCase");function Wy(e,i,o){e=Te(e),i=se(i);var l=i?_r(e):0;if(!i||l>=i)return e;var p=(i-l)/2;return fs(Ki(p),o)+e+fs(Xi(p),o)}function Jy(e,i,o){e=Te(e),i=se(i);var l=i?_r(e):0;return i&&l<i?e+fs(i-l,o):e}function zy(e,i,o){e=Te(e),i=se(i);var l=i?_r(e):0;return i&&l<i?fs(i-l,o)+e:e}function Qy(e,i,o){return o||i==null?i=0:i&&(i=+i),tg(Te(e).replace(ha,""),i||0)}function Hy(e,i,o){return(o?ln(e,i,o):i===r)?i=1:i=se(i),Wa(Te(e),i)}function Xy(){var e=arguments,i=Te(e[0]);return e.length<3?i:i.replace(e[1],e[2])}var Ky=Fr(function(e,i,o){return e+(o?"_":"")+i.toLowerCase()});function Zy(e,i,o){return o&&typeof o!="number"&&ln(e,i,o)&&(i=o=r),o=o===r?kn:o>>>0,o?(e=Te(e),e&&(typeof i=="string"||i!=null&&!mo(i))&&(i=bn(i),!i&&Tr(e))?Yt(Xn(e),0,o):e.split(i,o)):[]}var eE=Fr(function(e,i,o){return e+(o?" ":"")+Eo(i)});function nE(e,i,o){return e=Te(e),o=o==null?0:nr(se(o),0,e.length),i=bn(i),e.slice(o,o+i.length)==i}function tE(e,i,o){var l=d.templateSettings;o&&ln(e,i,o)&&(i=r),e=Te(e),i=As({},i,l,oc);var p=As({},i.imports,l.imports,oc),g=He(p),y=Fa(p,g),E,A,C=0,O=i.interpolate||Bi,R="__p += '",M=Oa((i.escape||Bi).source+"|"+O.source+"|"+(O===Fu?Ld:Bi).source+"|"+(i.evaluate||Bi).source+"|$","g"),z="//# sourceURL="+(be.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++fh+"]")+`
`;e.replace(M,function(ne,fe,ge,In,cn,wn){return ge||(ge=In),R+=e.slice(C,wn).replace(Gd,Oh),fe&&(E=!0,R+=`' +
__e(`+fe+`) +
'`),cn&&(A=!0,R+=`';
`+cn+`;
__p += '`),ge&&(R+=`' +
((__t = (`+ge+`)) == null ? '' : __t) +
'`),C=wn+ne.length,ne}),R+=`';
`;var ee=be.call(i,"variable")&&i.variable;if(!ee)R=`with (obj) {
`+R+`
}
`;else if(kd.test(ee))throw new te(f);R=(A?R.replace(vd,""):R).replace(yd,"$1").replace(Ed,"$1;"),R="function("+(ee||"obj")+`) {
`+(ee?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(E?", __e = _.escape":"")+(A?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+R+`return __p
}`;var ae=Zc(function(){return ye(g,z+"return "+R).apply(r,y)});if(ae.source=R,go(ae))throw ae;return ae}function rE(e){return Te(e).toLowerCase()}function iE(e){return Te(e).toUpperCase()}function sE(e,i,o){if(e=Te(e),e&&(o||i===r))return ul(e);if(!e||!(i=bn(i)))return e;var l=Xn(e),p=Xn(i),g=ll(l,p),y=cl(l,p)+1;return Yt(l,g,y).join("")}function aE(e,i,o){if(e=Te(e),e&&(o||i===r))return e.slice(0,pl(e)+1);if(!e||!(i=bn(i)))return e;var l=Xn(e),p=cl(l,Xn(i))+1;return Yt(l,0,p).join("")}function oE(e,i,o){if(e=Te(e),e&&(o||i===r))return e.replace(ha,"");if(!e||!(i=bn(i)))return e;var l=Xn(e),p=ll(l,Xn(i));return Yt(l,p).join("")}function uE(e,i){var o=q,l=Oe;if(Le(i)){var p="separator"in i?i.separator:p;o="length"in i?se(i.length):o,l="omission"in i?bn(i.omission):l}e=Te(e);var g=e.length;if(Tr(e)){var y=Xn(e);g=y.length}if(o>=g)return e;var E=o-_r(l);if(E<1)return l;var A=y?Yt(y,0,E).join(""):e.slice(0,E);if(p===r)return A+l;if(y&&(E+=A.length-E),mo(p)){if(e.slice(E).search(p)){var C,O=A;for(p.global||(p=Oa(p.source,Te(Cu.exec(p))+"g")),p.lastIndex=0;C=p.exec(O);)var R=C.index;A=A.slice(0,R===r?E:R)}}else if(e.indexOf(bn(p),E)!=E){var M=A.lastIndexOf(p);M>-1&&(A=A.slice(0,M))}return A+l}function lE(e){return e=Te(e),e&&Dd.test(e)?e.replace(wu,Uh):e}var cE=Fr(function(e,i,o){return e+(o?" ":"")+i.toUpperCase()}),Eo=ec("toUpperCase");function Kc(e,i,o){return e=Te(e),i=o?r:i,i===r?kh(e)?Vh(e):bh(e):e.match(i)||[]}var Zc=le(function(e,i){try{return _n(e,r,i)}catch(o){return go(o)?o:new te(o)}}),fE=bt(function(e,i){return Bn(i,function(o){o=ct(o),_t(e,o,po(e[o],e))}),e});function pE(e){var i=e==null?0:e.length,o=Z();return e=i?ke(e,function(l){if(typeof l[1]!="function")throw new Pn(c);return[o(l[0]),l[1]]}):[],le(function(l){for(var p=-1;++p<i;){var g=e[p];if(_n(g[0],this,l))return _n(g[1],this,l)}})}function dE(e){return Ug(Mn(e,D))}function Do(e){return function(){return e}}function hE(e,i){return e==null||e!==e?i:e}var gE=tc(),mE=tc(!0);function En(e){return e}function To(e){return xl(typeof e=="function"?e:Mn(e,D))}function vE(e){return Rl(Mn(e,D))}function yE(e,i){return Ll(e,Mn(i,D))}var EE=le(function(e,i){return function(o){return ti(o,e,i)}}),DE=le(function(e,i){return function(o){return ti(e,o,i)}});function _o(e,i,o){var l=He(i),p=is(i,l);o==null&&!(Le(i)&&(p.length||!l.length))&&(o=i,i=e,e=this,p=is(i,He(i)));var g=!(Le(o)&&"chain"in o)||!!o.chain,y=It(e);return Bn(p,function(E){var A=i[E];e[E]=A,y&&(e.prototype[E]=function(){var C=this.__chain__;if(g||C){var O=e(this.__wrapped__),R=O.__actions__=mn(this.__actions__);return R.push({func:A,args:arguments,thisArg:e}),O.__chain__=C,O}return A.apply(e,Mt([this.value()],arguments))})}),e}function TE(){return en._===this&&(en._=Jh),this}function Ao(){}function _E(e){return e=se(e),le(function(i){return Bl(i,e)})}var AE=Za(ke),bE=Za(rl),SE=Za(ba);function ef(e){return ao(e)?Sa(ct(e)):nm(e)}function IE(e){return function(i){return e==null?r:tr(e,i)}}var wE=ic(),NE=ic(!0);function bo(){return[]}function So(){return!1}function FE(){return{}}function CE(){return""}function OE(){return!0}function xE(e,i){if(e=se(e),e<1||e>Tn)return[];var o=kn,l=an(e,kn);i=Z(i),e-=kn;for(var p=Na(l,i);++o<e;)i(o);return p}function kE(e){return re(e)?ke(e,ct):Sn(e)?[e]:mn(Dc(Te(e)))}function RE(e){var i=++Yh;return Te(e)+i}var LE=cs(function(e,i){return e+i},0),BE=eo("ceil"),PE=cs(function(e,i){return e/i},1),UE=eo("floor");function ME(e){return e&&e.length?rs(e,En,Ma):r}function $E(e,i){return e&&e.length?rs(e,Z(i,2),Ma):r}function VE(e){return al(e,En)}function GE(e,i){return al(e,Z(i,2))}function qE(e){return e&&e.length?rs(e,En,qa):r}function jE(e,i){return e&&e.length?rs(e,Z(i,2),qa):r}var YE=cs(function(e,i){return e*i},1),WE=eo("round"),JE=cs(function(e,i){return e-i},0);function zE(e){return e&&e.length?wa(e,En):0}function QE(e,i){return e&&e.length?wa(e,Z(i,2)):0}return d.after=vv,d.ary=Oc,d.assign=iy,d.assignIn=Yc,d.assignInWith=As,d.assignWith=sy,d.at=ay,d.before=xc,d.bind=po,d.bindAll=fE,d.bindKey=kc,d.castArray=Fv,d.chain=Nc,d.chunk=Um,d.compact=Mm,d.concat=$m,d.cond=pE,d.conforms=dE,d.constant=Do,d.countBy=z0,d.create=oy,d.curry=Rc,d.curryRight=Lc,d.debounce=Bc,d.defaults=uy,d.defaultsDeep=ly,d.defer=yv,d.delay=Ev,d.difference=Vm,d.differenceBy=Gm,d.differenceWith=qm,d.drop=jm,d.dropRight=Ym,d.dropRightWhile=Wm,d.dropWhile=Jm,d.fill=zm,d.filter=H0,d.flatMap=Z0,d.flatMapDeep=ev,d.flatMapDepth=nv,d.flatten=bc,d.flattenDeep=Qm,d.flattenDepth=Hm,d.flip=Dv,d.flow=gE,d.flowRight=mE,d.fromPairs=Xm,d.functions=my,d.functionsIn=vy,d.groupBy=tv,d.initial=Zm,d.intersection=e0,d.intersectionBy=n0,d.intersectionWith=t0,d.invert=Ey,d.invertBy=Dy,d.invokeMap=iv,d.iteratee=To,d.keyBy=sv,d.keys=He,d.keysIn=yn,d.map=vs,d.mapKeys=_y,d.mapValues=Ay,d.matches=vE,d.matchesProperty=yE,d.memoize=Es,d.merge=by,d.mergeWith=Wc,d.method=EE,d.methodOf=DE,d.mixin=_o,d.negate=Ds,d.nthArg=_E,d.omit=Sy,d.omitBy=Iy,d.once=Tv,d.orderBy=av,d.over=AE,d.overArgs=_v,d.overEvery=bE,d.overSome=SE,d.partial=ho,d.partialRight=Pc,d.partition=ov,d.pick=wy,d.pickBy=Jc,d.property=ef,d.propertyOf=IE,d.pull=a0,d.pullAll=Ic,d.pullAllBy=o0,d.pullAllWith=u0,d.pullAt=l0,d.range=wE,d.rangeRight=NE,d.rearg=Av,d.reject=cv,d.remove=c0,d.rest=bv,d.reverse=co,d.sampleSize=pv,d.set=Fy,d.setWith=Cy,d.shuffle=dv,d.slice=f0,d.sortBy=mv,d.sortedUniq=y0,d.sortedUniqBy=E0,d.split=Zy,d.spread=Sv,d.tail=D0,d.take=T0,d.takeRight=_0,d.takeRightWhile=A0,d.takeWhile=b0,d.tap=M0,d.throttle=Iv,d.thru=ms,d.toArray=Gc,d.toPairs=zc,d.toPairsIn=Qc,d.toPath=kE,d.toPlainObject=jc,d.transform=Oy,d.unary=wv,d.union=S0,d.unionBy=I0,d.unionWith=w0,d.uniq=N0,d.uniqBy=F0,d.uniqWith=C0,d.unset=xy,d.unzip=fo,d.unzipWith=wc,d.update=ky,d.updateWith=Ry,d.values=xr,d.valuesIn=Ly,d.without=O0,d.words=Kc,d.wrap=Nv,d.xor=x0,d.xorBy=k0,d.xorWith=R0,d.zip=L0,d.zipObject=B0,d.zipObjectDeep=P0,d.zipWith=U0,d.entries=zc,d.entriesIn=Qc,d.extend=Yc,d.extendWith=As,_o(d,d),d.add=LE,d.attempt=Zc,d.camelCase=My,d.capitalize=Hc,d.ceil=BE,d.clamp=By,d.clone=Cv,d.cloneDeep=xv,d.cloneDeepWith=kv,d.cloneWith=Ov,d.conformsTo=Rv,d.deburr=Xc,d.defaultTo=hE,d.divide=PE,d.endsWith=$y,d.eq=Zn,d.escape=Vy,d.escapeRegExp=Gy,d.every=Q0,d.find=X0,d.findIndex=_c,d.findKey=cy,d.findLast=K0,d.findLastIndex=Ac,d.findLastKey=fy,d.floor=UE,d.forEach=Fc,d.forEachRight=Cc,d.forIn=py,d.forInRight=dy,d.forOwn=hy,d.forOwnRight=gy,d.get=vo,d.gt=Lv,d.gte=Bv,d.has=yy,d.hasIn=yo,d.head=Sc,d.identity=En,d.includes=rv,d.indexOf=Km,d.inRange=Py,d.invoke=Ty,d.isArguments=sr,d.isArray=re,d.isArrayBuffer=Pv,d.isArrayLike=vn,d.isArrayLikeObject=Me,d.isBoolean=Uv,d.isBuffer=Wt,d.isDate=Mv,d.isElement=$v,d.isEmpty=Vv,d.isEqual=Gv,d.isEqualWith=qv,d.isError=go,d.isFinite=jv,d.isFunction=It,d.isInteger=Uc,d.isLength=Ts,d.isMap=Mc,d.isMatch=Yv,d.isMatchWith=Wv,d.isNaN=Jv,d.isNative=zv,d.isNil=Hv,d.isNull=Qv,d.isNumber=$c,d.isObject=Le,d.isObjectLike=Be,d.isPlainObject=ui,d.isRegExp=mo,d.isSafeInteger=Xv,d.isSet=Vc,d.isString=_s,d.isSymbol=Sn,d.isTypedArray=Or,d.isUndefined=Kv,d.isWeakMap=Zv,d.isWeakSet=ey,d.join=r0,d.kebabCase=qy,d.last=Vn,d.lastIndexOf=i0,d.lowerCase=jy,d.lowerFirst=Yy,d.lt=ny,d.lte=ty,d.max=ME,d.maxBy=$E,d.mean=VE,d.meanBy=GE,d.min=qE,d.minBy=jE,d.stubArray=bo,d.stubFalse=So,d.stubObject=FE,d.stubString=CE,d.stubTrue=OE,d.multiply=YE,d.nth=s0,d.noConflict=TE,d.noop=Ao,d.now=ys,d.pad=Wy,d.padEnd=Jy,d.padStart=zy,d.parseInt=Qy,d.random=Uy,d.reduce=uv,d.reduceRight=lv,d.repeat=Hy,d.replace=Xy,d.result=Ny,d.round=WE,d.runInContext=_,d.sample=fv,d.size=hv,d.snakeCase=Ky,d.some=gv,d.sortedIndex=p0,d.sortedIndexBy=d0,d.sortedIndexOf=h0,d.sortedLastIndex=g0,d.sortedLastIndexBy=m0,d.sortedLastIndexOf=v0,d.startCase=eE,d.startsWith=nE,d.subtract=JE,d.sum=zE,d.sumBy=QE,d.template=tE,d.times=xE,d.toFinite=wt,d.toInteger=se,d.toLength=qc,d.toLower=rE,d.toNumber=Gn,d.toSafeInteger=ry,d.toString=Te,d.toUpper=iE,d.trim=sE,d.trimEnd=aE,d.trimStart=oE,d.truncate=uE,d.unescape=lE,d.uniqueId=RE,d.upperCase=cE,d.upperFirst=Eo,d.each=Fc,d.eachRight=Cc,d.first=Sc,_o(d,(function(){var e={};return ut(d,function(i,o){be.call(d.prototype,o)||(e[o]=i)}),e})(),{chain:!1}),d.VERSION=s,Bn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){d[e].placeholder=d}),Bn(["drop","take"],function(e,i){pe.prototype[e]=function(o){o=o===r?1:Qe(se(o),0);var l=this.__filtered__&&!i?new pe(this):this.clone();return l.__filtered__?l.__takeCount__=an(o,l.__takeCount__):l.__views__.push({size:an(o,kn),type:e+(l.__dir__<0?"Right":"")}),l},pe.prototype[e+"Right"]=function(o){return this.reverse()[e](o).reverse()}}),Bn(["filter","map","takeWhile"],function(e,i){var o=i+1,l=o==Lt||o==Bt;pe.prototype[e]=function(p){var g=this.clone();return g.__iteratees__.push({iteratee:Z(p,3),type:o}),g.__filtered__=g.__filtered__||l,g}}),Bn(["head","last"],function(e,i){var o="take"+(i?"Right":"");pe.prototype[e]=function(){return this[o](1).value()[0]}}),Bn(["initial","tail"],function(e,i){var o="drop"+(i?"":"Right");pe.prototype[e]=function(){return this.__filtered__?new pe(this):this[o](1)}}),pe.prototype.compact=function(){return this.filter(En)},pe.prototype.find=function(e){return this.filter(e).head()},pe.prototype.findLast=function(e){return this.reverse().find(e)},pe.prototype.invokeMap=le(function(e,i){return typeof e=="function"?new pe(this):this.map(function(o){return ti(o,e,i)})}),pe.prototype.reject=function(e){return this.filter(Ds(Z(e)))},pe.prototype.slice=function(e,i){e=se(e);var o=this;return o.__filtered__&&(e>0||i<0)?new pe(o):(e<0?o=o.takeRight(-e):e&&(o=o.drop(e)),i!==r&&(i=se(i),o=i<0?o.dropRight(-i):o.take(i-e)),o)},pe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},pe.prototype.toArray=function(){return this.take(kn)},ut(pe.prototype,function(e,i){var o=/^(?:filter|find|map|reject)|While$/.test(i),l=/^(?:head|last)$/.test(i),p=d[l?"take"+(i=="last"?"Right":""):i],g=l||/^find/.test(i);p&&(d.prototype[i]=function(){var y=this.__wrapped__,E=l?[1]:arguments,A=y instanceof pe,C=E[0],O=A||re(y),R=function(fe){var ge=p.apply(d,Mt([fe],E));return l&&M?ge[0]:ge};O&&o&&typeof C=="function"&&C.length!=1&&(A=O=!1);var M=this.__chain__,z=!!this.__actions__.length,ee=g&&!M,ae=A&&!z;if(!g&&O){y=ae?y:new pe(this);var ne=e.apply(y,E);return ne.__actions__.push({func:ms,args:[R],thisArg:r}),new Un(ne,M)}return ee&&ae?e.apply(this,E):(ne=this.thru(R),ee?l?ne.value()[0]:ne.value():ne)})}),Bn(["pop","push","shift","sort","splice","unshift"],function(e){var i=Gi[e],o=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",l=/^(?:pop|shift)$/.test(e);d.prototype[e]=function(){var p=arguments;if(l&&!this.__chain__){var g=this.value();return i.apply(re(g)?g:[],p)}return this[o](function(y){return i.apply(re(y)?y:[],p)})}}),ut(pe.prototype,function(e,i){var o=d[i];if(o){var l=o.name+"";be.call(Ir,l)||(Ir[l]=[]),Ir[l].push({name:i,func:o})}}),Ir[ls(r,X).name]=[{name:"wrapper",func:r}],pe.prototype.clone=lg,pe.prototype.reverse=cg,pe.prototype.value=fg,d.prototype.at=$0,d.prototype.chain=V0,d.prototype.commit=G0,d.prototype.next=q0,d.prototype.plant=Y0,d.prototype.reverse=W0,d.prototype.toJSON=d.prototype.valueOf=d.prototype.value=J0,d.prototype.first=d.prototype.head,Qr&&(d.prototype[Qr]=j0),d}),Ar=Gh();Xt?((Xt.exports=Ar)._=Ar,Da._=Ar):en._=Ar}).call(__)})(hi,hi.exports)),hi.exports}var b_=A_();const Ot=T_(b_);function S_(){return{convert:n=>{if(n===null||n===void 0)return null;switch(typeof n){case"boolean":return n;case"string":{const t=n.toLowerCase().trim();return t==="true"||t==="t"||t==="1"}case"number":return n!==0;default:return null}},asString:n=>String(n),type:n=>n.boolean().optional()}}function Nn(n,t){const r=s=>t.convert(s[n]);return{name:I_(n),key:n,asEnv:s=>({[n]:t.asString(s)}),zod:{type:t.type},get:r,getOrDefault:(s,a)=>r(s)??a}}function I_(n){return n.toLowerCase().replace(/([-_][a-z])/gi,t=>t.toUpperCase().replace("-","").replace("_",""))}Nn("MAGIDOC_GENERATE",S_());function ws(n){return{convert:t=>{if(Array.isArray(t))return t;if(typeof t=="string"){const r=JSON.parse(t);return Array.isArray(r)?r:null}return null},asString:t=>JSON.stringify(t),type:t=>t.array(n(t)).optional()}}function yf(n){return{convert:t=>{if(typeof t=="object")return t;if(typeof t=="string"){const r=JSON.parse(t);return typeof r!="object"?null:r}return null},asString:t=>JSON.stringify(t),type:t=>t.record(t.string(),n(t).optional()).optional()}}function Ns(){return{convert:n=>n==null||n===""?null:String(n),asString:n=>String(n),type:n=>n.string().optional()}}function Ef(n){return{convert:t=>t==null||!n.find(r=>r===t)?null:t,asString:t=>String(t),type:t=>t.enum(n).optional()}}var Qs={APP_LOGO:Nn("APP_LOGO",Ns()),APP_TITLE:Nn("APP_TITLE",Ns()),APP_FAVICON:Nn("APP_FAVICON",Ns()),SITE_ROOT:Nn("SITE_ROOT",Ns()),SITE_META:Nn("SITE_META",yf(n=>n.string())),CUSTOM_STYLES:Nn("CUSTOM_STYLES",ws(n=>n.string())),FIELDS_SORTING:Nn("FIELDS_SORTING",Ef(["default","alphabetical"])),ARGUMENTS_SORTING:Nn("ARGUMENTS_SORTING",Ef(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:Nn("QUERY_GENERATION_FACTORIES",yf(n=>n.union([n.string(),n.boolean(),n.number(),n.null(),n.record(n.string(),n.unknown())]))),PAGES:Nn("PAGES",ws(n=>{const t=n.lazy(()=>n.object({title:n.string().min(1),content:n.union([n.array(t),n.string().min(1)])}));return t})),EXTERNAL_LINKS:Nn("EXTERNAL_LINKS",ws(n=>n.object({label:n.string().min(1),href:n.string().min(1),position:n.union([n.literal("header"),n.literal("navigation")]).optional(),kind:n.string().min(1).optional(),group:n.string().min(1).optional()}))),DIRECTIVES:Nn("DIRECTIVES",ws(n=>n.object({name:n.string().min(1),args:n.array(n.string())})))};const w_="Proca graphql API",N_="https://doc.proca.app/pics/proca-ftsql.png",F_="https://doc.proca.app/pics/favicon.png",C_='{"description":"Proca GraphQL API.","og:description":"Documentation for Proca GraphQL API."}',O_='[{"title":"Welcome","content":"\\nThis is the graphql API documentation for proca.\\n\\n## Where to go next\\ncheck the existing queries and mutations, with the types used.\\n\\n- Star the project on [GitHub](https://github.com/fixthestatusquo/proca) \\n- Star the backend on [GitHub](https://github.com/fixthestatusquo/proca-server) \\n- Check out the cli [that uses this API](https://github.com/fixthestatusquo/proca-cli)\\n\\n"}]',x_=`{"NaiveDateTime":"1999-12-31 23:59:59","Json":"'{\\"key\\":\\"value\\"}}"}`,k_="true",mp={APP_TITLE:w_,APP_LOGO:N_,APP_FAVICON:F_,SITE_META:C_,PAGES:O_,QUERY_GENERATION_FACTORIES:x_,MAGIDOC_GENERATE:k_};function wS(n){return n.get(mp)}function Hs(n,t){return n.getOrDefault(mp,t)}function Xs(){return Hs(Qs.SITE_ROOT,PD)}function me(n,t){if(!!!n)throw new Error(t)}function xt(n){return typeof n=="object"&&n!==null}function it(n,t){if(!!!n)throw new Error(t??"Unexpected invariant triggered.")}const R_=/\r\n|[\n\r]/g;function qo(n,t){let r=0,s=1;for(const a of n.body.matchAll(R_)){if(typeof a.index=="number"||it(!1),a.index>=t)break;r=a.index+a[0].length,s+=1}return{line:s,column:t+1-r}}function L_(n){return vp(n.source,qo(n.source,n.start))}function vp(n,t){const r=n.locationOffset.column-1,s="".padStart(r)+n.body,a=t.line-1,u=n.locationOffset.line-1,c=t.line+u,f=t.line===1?r:0,h=t.column+f,m=`${n.name}:${c}:${h}
`,v=s.split(/\r\n|[\n\r]/g),D=v[a];if(D.length>120){const b=Math.floor(h/80),k=h%80,I=[];for(let B=0;B<D.length;B+=80)I.push(D.slice(B,B+80));return m+Df([[`${c} |`,I[0]],...I.slice(1,b+1).map(B=>["|",B]),["|","^".padStart(k)],["|",I[b+1]]])}return m+Df([[`${c-1} |`,v[a-1]],[`${c} |`,D],["|","^".padStart(h)],[`${c+1} |`,v[a+1]]])}function Df(n){const t=n.filter(([s,a])=>a!==void 0),r=Math.max(...t.map(([s])=>s.length));return t.map(([s,a])=>s.padStart(r)+(a?" "+a:"")).join(`
`)}function B_(n){const t=n[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:n[1],positions:n[2],path:n[3],originalError:n[4],extensions:n[5]}:t}class L extends Error{constructor(t,...r){var s,a,u;const{nodes:c,source:f,positions:h,path:m,originalError:v,extensions:D}=B_(r);super(t),this.name="GraphQLError",this.path=m??void 0,this.originalError=v??void 0,this.nodes=Tf(Array.isArray(c)?c:c?[c]:void 0);const b=Tf((s=this.nodes)===null||s===void 0?void 0:s.map(I=>I.loc).filter(I=>I!=null));this.source=f??(b==null||(a=b[0])===null||a===void 0?void 0:a.source),this.positions=h??b?.map(I=>I.start),this.locations=h&&f?h.map(I=>qo(f,I)):b?.map(I=>qo(I.source,I.start));const k=xt(v?.extensions)?v?.extensions:void 0;this.extensions=(u=D??k)!==null&&u!==void 0?u:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),v!=null&&v.stack?Object.defineProperty(this,"stack",{value:v.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,L):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const r of this.nodes)r.loc&&(t+=`

`+L_(r.loc));else if(this.source&&this.locations)for(const r of this.locations)t+=`

`+vp(this.source,r);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function Tf(n){return n===void 0||n.length===0?void 0:n}function Ke(n,t,r){return new L(`Syntax Error: ${r}`,{source:n,positions:[t]})}class P_{constructor(t,r,s){this.start=t.start,this.end=r.end,this.startToken=t,this.endToken=r,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class yp{constructor(t,r,s,a,u,c){this.kind=t,this.start=r,this.end=s,this.line=a,this.column=u,this.value=c,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Ep={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},U_=new Set(Object.keys(Ep));function _f(n){const t=n?.kind;return typeof t=="string"&&U_.has(t)}var jn;(function(n){n.QUERY="query",n.MUTATION="mutation",n.SUBSCRIPTION="subscription"})(jn||(jn={}));var H;(function(n){n.QUERY="QUERY",n.MUTATION="MUTATION",n.SUBSCRIPTION="SUBSCRIPTION",n.FIELD="FIELD",n.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",n.FRAGMENT_SPREAD="FRAGMENT_SPREAD",n.INLINE_FRAGMENT="INLINE_FRAGMENT",n.VARIABLE_DEFINITION="VARIABLE_DEFINITION",n.SCHEMA="SCHEMA",n.SCALAR="SCALAR",n.OBJECT="OBJECT",n.FIELD_DEFINITION="FIELD_DEFINITION",n.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",n.INTERFACE="INTERFACE",n.UNION="UNION",n.ENUM="ENUM",n.ENUM_VALUE="ENUM_VALUE",n.INPUT_OBJECT="INPUT_OBJECT",n.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(H||(H={}));var T;(function(n){n.NAME="Name",n.DOCUMENT="Document",n.OPERATION_DEFINITION="OperationDefinition",n.VARIABLE_DEFINITION="VariableDefinition",n.SELECTION_SET="SelectionSet",n.FIELD="Field",n.ARGUMENT="Argument",n.FRAGMENT_SPREAD="FragmentSpread",n.INLINE_FRAGMENT="InlineFragment",n.FRAGMENT_DEFINITION="FragmentDefinition",n.VARIABLE="Variable",n.INT="IntValue",n.FLOAT="FloatValue",n.STRING="StringValue",n.BOOLEAN="BooleanValue",n.NULL="NullValue",n.ENUM="EnumValue",n.LIST="ListValue",n.OBJECT="ObjectValue",n.OBJECT_FIELD="ObjectField",n.DIRECTIVE="Directive",n.NAMED_TYPE="NamedType",n.LIST_TYPE="ListType",n.NON_NULL_TYPE="NonNullType",n.SCHEMA_DEFINITION="SchemaDefinition",n.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",n.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",n.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",n.FIELD_DEFINITION="FieldDefinition",n.INPUT_VALUE_DEFINITION="InputValueDefinition",n.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",n.UNION_TYPE_DEFINITION="UnionTypeDefinition",n.ENUM_TYPE_DEFINITION="EnumTypeDefinition",n.ENUM_VALUE_DEFINITION="EnumValueDefinition",n.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",n.DIRECTIVE_DEFINITION="DirectiveDefinition",n.SCHEMA_EXTENSION="SchemaExtension",n.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",n.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",n.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",n.UNION_TYPE_EXTENSION="UnionTypeExtension",n.ENUM_TYPE_EXTENSION="EnumTypeExtension",n.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(T||(T={}));function jo(n){return n===9||n===32}function Ni(n){return n>=48&&n<=57}function Dp(n){return n>=97&&n<=122||n>=65&&n<=90}function du(n){return Dp(n)||n===95}function Tp(n){return Dp(n)||Ni(n)||n===95}function M_(n){var t;let r=Number.MAX_SAFE_INTEGER,s=null,a=-1;for(let c=0;c<n.length;++c){var u;const f=n[c],h=$_(f);h!==f.length&&(s=(u=s)!==null&&u!==void 0?u:c,a=c,c!==0&&h<r&&(r=h))}return n.map((c,f)=>f===0?c:c.slice(r)).slice((t=s)!==null&&t!==void 0?t:0,a+1)}function $_(n){let t=0;for(;t<n.length&&jo(n.charCodeAt(t));)++t;return t}function V_(n,t){const r=n.replace(/"""/g,'\\"""'),s=r.split(/\r\n|[\n\r]/g),a=s.length===1,u=s.length>1&&s.slice(1).every(k=>k.length===0||jo(k.charCodeAt(0))),c=r.endsWith('\\"""'),f=n.endsWith('"')&&!c,h=n.endsWith("\\"),m=f||h,v=!a||n.length>70||m||u||c;let D="";const b=a&&jo(n.charCodeAt(0));return(v&&!b||u)&&(D+=`
`),D+=r,(v||m)&&(D+=`
`),'"""'+D+'"""'}var x;(function(n){n.SOF="<SOF>",n.EOF="<EOF>",n.BANG="!",n.DOLLAR="$",n.AMP="&",n.PAREN_L="(",n.PAREN_R=")",n.SPREAD="...",n.COLON=":",n.EQUALS="=",n.AT="@",n.BRACKET_L="[",n.BRACKET_R="]",n.BRACE_L="{",n.PIPE="|",n.BRACE_R="}",n.NAME="Name",n.INT="Int",n.FLOAT="Float",n.STRING="String",n.BLOCK_STRING="BlockString",n.COMMENT="Comment"})(x||(x={}));class G_{constructor(t){const r=new yp(x.SOF,0,0,0,0);this.source=t,this.lastToken=r,this.token=r,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==x.EOF)do if(t.next)t=t.next;else{const r=j_(this,t.end);t.next=r,r.prev=t,t=r}while(t.kind===x.COMMENT);return t}}function q_(n){return n===x.BANG||n===x.DOLLAR||n===x.AMP||n===x.PAREN_L||n===x.PAREN_R||n===x.SPREAD||n===x.COLON||n===x.EQUALS||n===x.AT||n===x.BRACKET_L||n===x.BRACKET_R||n===x.BRACE_L||n===x.PIPE||n===x.BRACE_R}function $r(n){return n>=0&&n<=55295||n>=57344&&n<=1114111}function Ks(n,t){return _p(n.charCodeAt(t))&&Ap(n.charCodeAt(t+1))}function _p(n){return n>=55296&&n<=56319}function Ap(n){return n>=56320&&n<=57343}function pr(n,t){const r=n.source.body.codePointAt(t);if(r===void 0)return x.EOF;if(r>=32&&r<=126){const s=String.fromCodePoint(r);return s==='"'?`'"'`:`"${s}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function Ye(n,t,r,s,a){const u=n.line,c=1+r-n.lineStart;return new yp(t,r,s,u,c,a)}function j_(n,t){const r=n.source.body,s=r.length;let a=t;for(;a<s;){const u=r.charCodeAt(a);switch(u){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++n.line,n.lineStart=a;continue;case 13:r.charCodeAt(a+1)===10?a+=2:++a,++n.line,n.lineStart=a;continue;case 35:return Y_(n,a);case 33:return Ye(n,x.BANG,a,a+1);case 36:return Ye(n,x.DOLLAR,a,a+1);case 38:return Ye(n,x.AMP,a,a+1);case 40:return Ye(n,x.PAREN_L,a,a+1);case 41:return Ye(n,x.PAREN_R,a,a+1);case 46:if(r.charCodeAt(a+1)===46&&r.charCodeAt(a+2)===46)return Ye(n,x.SPREAD,a,a+3);break;case 58:return Ye(n,x.COLON,a,a+1);case 61:return Ye(n,x.EQUALS,a,a+1);case 64:return Ye(n,x.AT,a,a+1);case 91:return Ye(n,x.BRACKET_L,a,a+1);case 93:return Ye(n,x.BRACKET_R,a,a+1);case 123:return Ye(n,x.BRACE_L,a,a+1);case 124:return Ye(n,x.PIPE,a,a+1);case 125:return Ye(n,x.BRACE_R,a,a+1);case 34:return r.charCodeAt(a+1)===34&&r.charCodeAt(a+2)===34?X_(n,a):J_(n,a)}if(Ni(u)||u===45)return W_(n,a,u);if(du(u))return K_(n,a);throw Ke(n.source,a,u===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:$r(u)||Ks(r,a)?`Unexpected character: ${pr(n,a)}.`:`Invalid character: ${pr(n,a)}.`)}return Ye(n,x.EOF,s,s)}function Y_(n,t){const r=n.source.body,s=r.length;let a=t+1;for(;a<s;){const u=r.charCodeAt(a);if(u===10||u===13)break;if($r(u))++a;else if(Ks(r,a))a+=2;else break}return Ye(n,x.COMMENT,t,a,r.slice(t+1,a))}function W_(n,t,r){const s=n.source.body;let a=t,u=r,c=!1;if(u===45&&(u=s.charCodeAt(++a)),u===48){if(u=s.charCodeAt(++a),Ni(u))throw Ke(n.source,a,`Invalid number, unexpected digit after 0: ${pr(n,a)}.`)}else a=Co(n,a,u),u=s.charCodeAt(a);if(u===46&&(c=!0,u=s.charCodeAt(++a),a=Co(n,a,u),u=s.charCodeAt(a)),(u===69||u===101)&&(c=!0,u=s.charCodeAt(++a),(u===43||u===45)&&(u=s.charCodeAt(++a)),a=Co(n,a,u),u=s.charCodeAt(a)),u===46||du(u))throw Ke(n.source,a,`Invalid number, expected digit but got: ${pr(n,a)}.`);return Ye(n,c?x.FLOAT:x.INT,t,a,s.slice(t,a))}function Co(n,t,r){if(!Ni(r))throw Ke(n.source,t,`Invalid number, expected digit but got: ${pr(n,t)}.`);const s=n.source.body;let a=t+1;for(;Ni(s.charCodeAt(a));)++a;return a}function J_(n,t){const r=n.source.body,s=r.length;let a=t+1,u=a,c="";for(;a<s;){const f=r.charCodeAt(a);if(f===34)return c+=r.slice(u,a),Ye(n,x.STRING,t,a+1,c);if(f===92){c+=r.slice(u,a);const h=r.charCodeAt(a+1)===117?r.charCodeAt(a+2)===123?z_(n,a):Q_(n,a):H_(n,a);c+=h.value,a+=h.size,u=a;continue}if(f===10||f===13)break;if($r(f))++a;else if(Ks(r,a))a+=2;else throw Ke(n.source,a,`Invalid character within String: ${pr(n,a)}.`)}throw Ke(n.source,a,"Unterminated string.")}function z_(n,t){const r=n.source.body;let s=0,a=3;for(;a<12;){const u=r.charCodeAt(t+a++);if(u===125){if(a<5||!$r(s))break;return{value:String.fromCodePoint(s),size:a}}if(s=s<<4|gi(u),s<0)break}throw Ke(n.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+a)}".`)}function Q_(n,t){const r=n.source.body,s=Af(r,t+2);if($r(s))return{value:String.fromCodePoint(s),size:6};if(_p(s)&&r.charCodeAt(t+6)===92&&r.charCodeAt(t+7)===117){const a=Af(r,t+8);if(Ap(a))return{value:String.fromCodePoint(s,a),size:12}}throw Ke(n.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)}function Af(n,t){return gi(n.charCodeAt(t))<<12|gi(n.charCodeAt(t+1))<<8|gi(n.charCodeAt(t+2))<<4|gi(n.charCodeAt(t+3))}function gi(n){return n>=48&&n<=57?n-48:n>=65&&n<=70?n-55:n>=97&&n<=102?n-87:-1}function H_(n,t){const r=n.source.body;switch(r.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Ke(n.source,t,`Invalid character escape sequence: "${r.slice(t,t+2)}".`)}function X_(n,t){const r=n.source.body,s=r.length;let a=n.lineStart,u=t+3,c=u,f="";const h=[];for(;u<s;){const m=r.charCodeAt(u);if(m===34&&r.charCodeAt(u+1)===34&&r.charCodeAt(u+2)===34){f+=r.slice(c,u),h.push(f);const v=Ye(n,x.BLOCK_STRING,t,u+3,M_(h).join(`
`));return n.line+=h.length-1,n.lineStart=a,v}if(m===92&&r.charCodeAt(u+1)===34&&r.charCodeAt(u+2)===34&&r.charCodeAt(u+3)===34){f+=r.slice(c,u),c=u+1,u+=4;continue}if(m===10||m===13){f+=r.slice(c,u),h.push(f),m===13&&r.charCodeAt(u+1)===10?u+=2:++u,f="",c=u,a=u;continue}if($r(m))++u;else if(Ks(r,u))u+=2;else throw Ke(n.source,u,`Invalid character within String: ${pr(n,u)}.`)}throw Ke(n.source,u,"Unterminated string.")}function K_(n,t){const r=n.source.body,s=r.length;let a=t+1;for(;a<s;){const u=r.charCodeAt(a);if(Tp(u))++a;else break}return Ye(n,x.NAME,t,a,r.slice(t,a))}const Z_=10,bp=2;function G(n){return Zs(n,[])}function Zs(n,t){switch(typeof n){case"string":return JSON.stringify(n);case"function":return n.name?`[function ${n.name}]`:"[function]";case"object":return eA(n,t);default:return String(n)}}function eA(n,t){if(n===null)return"null";if(t.includes(n))return"[Circular]";const r=[...t,n];if(nA(n)){const s=n.toJSON();if(s!==n)return typeof s=="string"?s:Zs(s,r)}else if(Array.isArray(n))return rA(n,r);return tA(n,r)}function nA(n){return typeof n.toJSON=="function"}function tA(n,t){const r=Object.entries(n);return r.length===0?"{}":t.length>bp?"["+iA(n)+"]":"{ "+r.map(([a,u])=>a+": "+Zs(u,t)).join(", ")+" }"}function rA(n,t){if(n.length===0)return"[]";if(t.length>bp)return"[Array]";const r=Math.min(Z_,n.length),s=n.length-r,a=[];for(let u=0;u<r;++u)a.push(Zs(n[u],t));return s===1?a.push("... 1 more item"):s>1&&a.push(`... ${s} more items`),"["+a.join(", ")+"]"}function iA(n){const t=Object.prototype.toString.call(n).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof n.constructor=="function"){const r=n.constructor.name;if(typeof r=="string"&&r!=="")return r}return t}const sA=globalThis.process&&!0,yt=sA?function(t,r){return t instanceof r}:function(t,r){if(t instanceof r)return!0;if(typeof t=="object"&&t!==null){var s;const a=r.prototype[Symbol.toStringTag],u=Symbol.toStringTag in t?t[Symbol.toStringTag]:(s=t.constructor)===null||s===void 0?void 0:s.name;if(a===u){const c=G(t);throw new Error(`Cannot use ${a} "${c}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class Sp{constructor(t,r="GraphQL request",s={line:1,column:1}){typeof t=="string"||me(!1,`Body must be a string. Received: ${G(t)}.`),this.body=t,this.name=r,this.locationOffset=s,this.locationOffset.line>0||me(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||me(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function aA(n){return yt(n,Sp)}function oA(n,t){const r=new Ip(n,t),s=r.parseDocument();return Object.defineProperty(s,"tokenCount",{enumerable:!1,value:r.tokenCount}),s}function uA(n,t){const r=new Ip(n,t);r.expectToken(x.SOF);const s=r.parseValueLiteral(!1);return r.expectToken(x.EOF),s}class Ip{constructor(t,r={}){const s=aA(t)?t:new Sp(t);this._lexer=new G_(s),this._options=r,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){const t=this.expectToken(x.NAME);return this.node(t,{kind:T.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:T.DOCUMENT,definitions:this.many(x.SOF,this.parseDefinition,x.EOF)})}parseDefinition(){if(this.peek(x.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),r=t?this._lexer.lookahead():this._lexer.token;if(r.kind===x.NAME){switch(r.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw Ke(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(r.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(r)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(x.BRACE_L))return this.node(t,{kind:T.OPERATION_DEFINITION,operation:jn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const r=this.parseOperationType();let s;return this.peek(x.NAME)&&(s=this.parseName()),this.node(t,{kind:T.OPERATION_DEFINITION,operation:r,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(x.NAME);switch(t.value){case"query":return jn.QUERY;case"mutation":return jn.MUTATION;case"subscription":return jn.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(x.PAREN_L,this.parseVariableDefinition,x.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:T.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(x.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(x.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(x.DOLLAR),this.node(t,{kind:T.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:T.SELECTION_SET,selections:this.many(x.BRACE_L,this.parseSelection,x.BRACE_R)})}parseSelection(){return this.peek(x.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,r=this.parseName();let s,a;return this.expectOptionalToken(x.COLON)?(s=r,a=this.parseName()):a=r,this.node(t,{kind:T.FIELD,alias:s,name:a,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(x.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const r=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(x.PAREN_L,r,x.PAREN_R)}parseArgument(t=!1){const r=this._lexer.token,s=this.parseName();return this.expectToken(x.COLON),this.node(r,{kind:T.ARGUMENT,name:s,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(x.SPREAD);const r=this.expectOptionalKeyword("on");return!r&&this.peek(x.NAME)?this.node(t,{kind:T.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:T.INLINE_FRAGMENT,typeCondition:r?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:T.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:T.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const r=this._lexer.token;switch(r.kind){case x.BRACKET_L:return this.parseList(t);case x.BRACE_L:return this.parseObject(t);case x.INT:return this.advanceLexer(),this.node(r,{kind:T.INT,value:r.value});case x.FLOAT:return this.advanceLexer(),this.node(r,{kind:T.FLOAT,value:r.value});case x.STRING:case x.BLOCK_STRING:return this.parseStringLiteral();case x.NAME:switch(this.advanceLexer(),r.value){case"true":return this.node(r,{kind:T.BOOLEAN,value:!0});case"false":return this.node(r,{kind:T.BOOLEAN,value:!1});case"null":return this.node(r,{kind:T.NULL});default:return this.node(r,{kind:T.ENUM,value:r.value})}case x.DOLLAR:if(t)if(this.expectToken(x.DOLLAR),this._lexer.token.kind===x.NAME){const s=this._lexer.token.value;throw Ke(this._lexer.source,r.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(r);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:T.STRING,value:t.value,block:t.kind===x.BLOCK_STRING})}parseList(t){const r=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:T.LIST,values:this.any(x.BRACKET_L,r,x.BRACKET_R)})}parseObject(t){const r=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:T.OBJECT,fields:this.any(x.BRACE_L,r,x.BRACE_R)})}parseObjectField(t){const r=this._lexer.token,s=this.parseName();return this.expectToken(x.COLON),this.node(r,{kind:T.OBJECT_FIELD,name:s,value:this.parseValueLiteral(t)})}parseDirectives(t){const r=[];for(;this.peek(x.AT);)r.push(this.parseDirective(t));return r}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const r=this._lexer.token;return this.expectToken(x.AT),this.node(r,{kind:T.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let r;if(this.expectOptionalToken(x.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(x.BRACKET_R),r=this.node(t,{kind:T.LIST_TYPE,type:s})}else r=this.parseNamedType();return this.expectOptionalToken(x.BANG)?this.node(t,{kind:T.NON_NULL_TYPE,type:r}):r}parseNamedType(){return this.node(this._lexer.token,{kind:T.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(x.STRING)||this.peek(x.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),a=this.many(x.BRACE_L,this.parseOperationTypeDefinition,x.BRACE_R);return this.node(t,{kind:T.SCHEMA_DEFINITION,description:r,directives:s,operationTypes:a})}parseOperationTypeDefinition(){const t=this._lexer.token,r=this.parseOperationType();this.expectToken(x.COLON);const s=this.parseNamedType();return this.node(t,{kind:T.OPERATION_TYPE_DEFINITION,operation:r,type:s})}parseScalarTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),a=this.parseConstDirectives();return this.node(t,{kind:T.SCALAR_TYPE_DEFINITION,description:r,name:s,directives:a})}parseObjectTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),a=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(t,{kind:T.OBJECT_TYPE_DEFINITION,description:r,name:s,interfaces:a,directives:u,fields:c})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(x.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(x.BRACE_L,this.parseFieldDefinition,x.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseName(),a=this.parseArgumentDefs();this.expectToken(x.COLON);const u=this.parseTypeReference(),c=this.parseConstDirectives();return this.node(t,{kind:T.FIELD_DEFINITION,description:r,name:s,arguments:a,type:u,directives:c})}parseArgumentDefs(){return this.optionalMany(x.PAREN_L,this.parseInputValueDef,x.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseName();this.expectToken(x.COLON);const a=this.parseTypeReference();let u;this.expectOptionalToken(x.EQUALS)&&(u=this.parseConstValueLiteral());const c=this.parseConstDirectives();return this.node(t,{kind:T.INPUT_VALUE_DEFINITION,description:r,name:s,type:a,defaultValue:u,directives:c})}parseInterfaceTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),a=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(t,{kind:T.INTERFACE_TYPE_DEFINITION,description:r,name:s,interfaces:a,directives:u,fields:c})}parseUnionTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),a=this.parseConstDirectives(),u=this.parseUnionMemberTypes();return this.node(t,{kind:T.UNION_TYPE_DEFINITION,description:r,name:s,directives:a,types:u})}parseUnionMemberTypes(){return this.expectOptionalToken(x.EQUALS)?this.delimitedMany(x.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),a=this.parseConstDirectives(),u=this.parseEnumValuesDefinition();return this.node(t,{kind:T.ENUM_TYPE_DEFINITION,description:r,name:s,directives:a,values:u})}parseEnumValuesDefinition(){return this.optionalMany(x.BRACE_L,this.parseEnumValueDefinition,x.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseEnumValueName(),a=this.parseConstDirectives();return this.node(t,{kind:T.ENUM_VALUE_DEFINITION,description:r,name:s,directives:a})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Ke(this._lexer.source,this._lexer.token.start,`${Fs(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),a=this.parseConstDirectives(),u=this.parseInputFieldsDefinition();return this.node(t,{kind:T.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:s,directives:a,fields:u})}parseInputFieldsDefinition(){return this.optionalMany(x.BRACE_L,this.parseInputValueDef,x.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===x.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const r=this.parseConstDirectives(),s=this.optionalMany(x.BRACE_L,this.parseOperationTypeDefinition,x.BRACE_R);if(r.length===0&&s.length===0)throw this.unexpected();return this.node(t,{kind:T.SCHEMA_EXTENSION,directives:r,operationTypes:s})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const r=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(t,{kind:T.SCALAR_TYPE_EXTENSION,name:r,directives:s})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const r=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&a.length===0&&u.length===0)throw this.unexpected();return this.node(t,{kind:T.OBJECT_TYPE_EXTENSION,name:r,interfaces:s,directives:a,fields:u})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const r=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&a.length===0&&u.length===0)throw this.unexpected();return this.node(t,{kind:T.INTERFACE_TYPE_EXTENSION,name:r,interfaces:s,directives:a,fields:u})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const r=this.parseName(),s=this.parseConstDirectives(),a=this.parseUnionMemberTypes();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:T.UNION_TYPE_EXTENSION,name:r,directives:s,types:a})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const r=this.parseName(),s=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:T.ENUM_TYPE_EXTENSION,name:r,directives:s,values:a})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const r=this.parseName(),s=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:T.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:s,fields:a})}parseDirectiveDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("directive"),this.expectToken(x.AT);const s=this.parseName(),a=this.parseArgumentDefs(),u=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const c=this.parseDirectiveLocations();return this.node(t,{kind:T.DIRECTIVE_DEFINITION,description:r,name:s,arguments:a,repeatable:u,locations:c})}parseDirectiveLocations(){return this.delimitedMany(x.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,r=this.parseName();if(Object.prototype.hasOwnProperty.call(H,r.value))return r;throw this.unexpected(t)}node(t,r){return this._options.noLocation!==!0&&(r.loc=new P_(t,this._lexer.lastToken,this._lexer.source)),r}peek(t){return this._lexer.token.kind===t}expectToken(t){const r=this._lexer.token;if(r.kind===t)return this.advanceLexer(),r;throw Ke(this._lexer.source,r.start,`Expected ${wp(t)}, found ${Fs(r)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const r=this._lexer.token;if(r.kind===x.NAME&&r.value===t)this.advanceLexer();else throw Ke(this._lexer.source,r.start,`Expected "${t}", found ${Fs(r)}.`)}expectOptionalKeyword(t){const r=this._lexer.token;return r.kind===x.NAME&&r.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const r=t??this._lexer.token;return Ke(this._lexer.source,r.start,`Unexpected ${Fs(r)}.`)}any(t,r,s){this.expectToken(t);const a=[];for(;!this.expectOptionalToken(s);)a.push(r.call(this));return a}optionalMany(t,r,s){if(this.expectOptionalToken(t)){const a=[];do a.push(r.call(this));while(!this.expectOptionalToken(s));return a}return[]}many(t,r,s){this.expectToken(t);const a=[];do a.push(r.call(this));while(!this.expectOptionalToken(s));return a}delimitedMany(t,r){this.expectOptionalToken(t);const s=[];do s.push(r.call(this));while(this.expectOptionalToken(t));return s}advanceLexer(){const{maxTokens:t}=this._options,r=this._lexer.advance();if(r.kind!==x.EOF&&(++this._tokenCounter,t!==void 0&&this._tokenCounter>t))throw Ke(this._lexer.source,r.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function Fs(n){const t=n.value;return wp(n.kind)+(t!=null?` "${t}"`:"")}function wp(n){return q_(n)?`"${n}"`:n}const lA=5;function zt(n,t){const[r,s]=t?[n,t]:[void 0,n];let a=" Did you mean ";r&&(a+=r+" ");const u=s.map(h=>`"${h}"`);switch(u.length){case 0:return"";case 1:return a+u[0]+"?";case 2:return a+u[0]+" or "+u[1]+"?"}const c=u.slice(0,lA),f=c.pop();return a+c.join(", ")+", or "+f+"?"}function bf(n){return n}function dr(n,t){const r=Object.create(null);for(const s of n)r[t(s)]=s;return r}function or(n,t,r){const s=Object.create(null);for(const a of n)s[t(a)]=r(a);return s}function Ft(n,t){const r=Object.create(null);for(const s of Object.keys(n))r[s]=t(n[s],s);return r}function hu(n,t){let r=0,s=0;for(;r<n.length&&s<t.length;){let a=n.charCodeAt(r),u=t.charCodeAt(s);if(Cs(a)&&Cs(u)){let c=0;do++r,c=c*10+a-Yo,a=n.charCodeAt(r);while(Cs(a)&&c>0);let f=0;do++s,f=f*10+u-Yo,u=t.charCodeAt(s);while(Cs(u)&&f>0);if(c<f)return-1;if(c>f)return 1}else{if(a<u)return-1;if(a>u)return 1;++r,++s}}return n.length-t.length}const Yo=48,cA=57;function Cs(n){return!isNaN(n)&&Yo<=n&&n<=cA}function mr(n,t){const r=Object.create(null),s=new fA(n),a=Math.floor(n.length*.4)+1;for(const u of t){const c=s.measure(u,a);c!==void 0&&(r[u]=c)}return Object.keys(r).sort((u,c)=>{const f=r[u]-r[c];return f!==0?f:hu(u,c)})}class fA{constructor(t){this._input=t,this._inputLowerCase=t.toLowerCase(),this._inputArray=Sf(this._inputLowerCase),this._rows=[new Array(t.length+1).fill(0),new Array(t.length+1).fill(0),new Array(t.length+1).fill(0)]}measure(t,r){if(this._input===t)return 0;const s=t.toLowerCase();if(this._inputLowerCase===s)return 1;let a=Sf(s),u=this._inputArray;if(a.length<u.length){const v=a;a=u,u=v}const c=a.length,f=u.length;if(c-f>r)return;const h=this._rows;for(let v=0;v<=f;v++)h[0][v]=v;for(let v=1;v<=c;v++){const D=h[(v-1)%3],b=h[v%3];let k=b[0]=v;for(let I=1;I<=f;I++){const B=a[v-1]===u[I-1]?0:1;let U=Math.min(D[I]+1,b[I-1]+1,D[I-1]+B);if(v>1&&I>1&&a[v-1]===u[I-2]&&a[v-2]===u[I-1]){const X=h[(v-2)%3][I-2];U=Math.min(U,X+1)}U<k&&(k=U),b[I]=U}if(k>r)return}const m=h[c%3][f];return m<=r?m:void 0}}function Sf(n){const t=n.length,r=new Array(t);for(let s=0;s<t;++s)r[s]=n.charCodeAt(s);return r}function zn(n){if(n==null)return Object.create(null);if(Object.getPrototypeOf(n)===null)return n;const t=Object.create(null);for(const[r,s]of Object.entries(n))t[r]=s;return t}function pA(n){return`"${n.replace(dA,hA)}"`}const dA=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function hA(n){return gA[n.charCodeAt(0)]}const gA=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],mi=Object.freeze({});function Np(n,t,r=Ep){const s=new Map;for(const X of Object.values(T))s.set(X,Fp(t,X));let a,u=Array.isArray(n),c=[n],f=-1,h=[],m=n,v,D;const b=[],k=[];do{f++;const X=f===c.length,he=X&&h.length!==0;if(X){if(v=k.length===0?void 0:b[b.length-1],m=D,D=k.pop(),he)if(u){m=m.slice();let Q=0;for(const[oe,P]of h){const $=oe-Q;P===null?(m.splice($,1),Q++):m[$]=P}}else{m={...m};for(const[Q,oe]of h)m[Q]=oe}f=a.index,c=a.keys,h=a.edits,u=a.inArray,a=a.prev}else if(D){if(v=u?f:c[f],m=D[v],m==null)continue;b.push(v)}let K;if(!Array.isArray(m)){var I,B;_f(m)||me(!1,`Invalid AST Node: ${G(m)}.`);const Q=X?(I=s.get(m.kind))===null||I===void 0?void 0:I.leave:(B=s.get(m.kind))===null||B===void 0?void 0:B.enter;if(K=Q?.call(t,m,v,D,b,k),K===mi)break;if(K===!1){if(!X){b.pop();continue}}else if(K!==void 0&&(h.push([v,K]),!X))if(_f(K))m=K;else{b.pop();continue}}if(K===void 0&&he&&h.push([v,m]),X)b.pop();else{var U;a={inArray:u,index:f,keys:c,edits:h,prev:a},u=Array.isArray(m),c=u?m:(U=r[m.kind])!==null&&U!==void 0?U:[],f=-1,h=[],D&&k.push(D),D=m}}while(a!==void 0);return h.length!==0?h[h.length-1][1]:n}function mA(n){const t=new Array(n.length).fill(null),r=Object.create(null);for(const s of Object.values(T)){let a=!1;const u=new Array(n.length).fill(void 0),c=new Array(n.length).fill(void 0);for(let h=0;h<n.length;++h){const{enter:m,leave:v}=Fp(n[h],s);a||(a=m!=null||v!=null),u[h]=m,c[h]=v}if(!a)continue;const f={enter(...h){const m=h[0];for(let D=0;D<n.length;D++)if(t[D]===null){var v;const b=(v=u[D])===null||v===void 0?void 0:v.apply(n[D],h);if(b===!1)t[D]=m;else if(b===mi)t[D]=mi;else if(b!==void 0)return b}},leave(...h){const m=h[0];for(let D=0;D<n.length;D++)if(t[D]===null){var v;const b=(v=c[D])===null||v===void 0?void 0:v.apply(n[D],h);if(b===mi)t[D]=mi;else if(b!==void 0&&b!==!1)return b}else t[D]===m&&(t[D]=null)}};r[s]=f}return r}function Fp(n,t){const r=n[t];return typeof r=="object"?r:typeof r=="function"?{enter:r,leave:void 0}:{enter:n.enter,leave:n.leave}}function Ze(n){return Np(n,yA)}const vA=80,yA={Name:{leave:n=>n.value},Variable:{leave:n=>"$"+n.name},Document:{leave:n=>J(n.definitions,`

`)},OperationDefinition:{leave(n){const t=de("(",J(n.variableDefinitions,", "),")"),r=J([n.operation,J([n.name,t]),J(n.directives," ")]," ");return(r==="query"?"":r+" ")+n.selectionSet}},VariableDefinition:{leave:({variable:n,type:t,defaultValue:r,directives:s})=>n+": "+t+de(" = ",r)+de(" ",J(s," "))},SelectionSet:{leave:({selections:n})=>nt(n)},Field:{leave({alias:n,name:t,arguments:r,directives:s,selectionSet:a}){const u=de("",n,": ")+t;let c=u+de("(",J(r,", "),")");return c.length>vA&&(c=u+de(`(
`,ks(J(r,`
`)),`
)`)),J([c,J(s," "),a]," ")}},Argument:{leave:({name:n,value:t})=>n+": "+t},FragmentSpread:{leave:({name:n,directives:t})=>"..."+n+de(" ",J(t," "))},InlineFragment:{leave:({typeCondition:n,directives:t,selectionSet:r})=>J(["...",de("on ",n),J(t," "),r]," ")},FragmentDefinition:{leave:({name:n,typeCondition:t,variableDefinitions:r,directives:s,selectionSet:a})=>`fragment ${n}${de("(",J(r,", "),")")} on ${t} ${de("",J(s," ")," ")}`+a},IntValue:{leave:({value:n})=>n},FloatValue:{leave:({value:n})=>n},StringValue:{leave:({value:n,block:t})=>t?V_(n):pA(n)},BooleanValue:{leave:({value:n})=>n?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:n})=>n},ListValue:{leave:({values:n})=>"["+J(n,", ")+"]"},ObjectValue:{leave:({fields:n})=>"{"+J(n,", ")+"}"},ObjectField:{leave:({name:n,value:t})=>n+": "+t},Directive:{leave:({name:n,arguments:t})=>"@"+n+de("(",J(t,", "),")")},NamedType:{leave:({name:n})=>n},ListType:{leave:({type:n})=>"["+n+"]"},NonNullType:{leave:({type:n})=>n+"!"},SchemaDefinition:{leave:({description:n,directives:t,operationTypes:r})=>de("",n,`
`)+J(["schema",J(t," "),nt(r)]," ")},OperationTypeDefinition:{leave:({operation:n,type:t})=>n+": "+t},ScalarTypeDefinition:{leave:({description:n,name:t,directives:r})=>de("",n,`
`)+J(["scalar",t,J(r," ")]," ")},ObjectTypeDefinition:{leave:({description:n,name:t,interfaces:r,directives:s,fields:a})=>de("",n,`
`)+J(["type",t,de("implements ",J(r," & ")),J(s," "),nt(a)]," ")},FieldDefinition:{leave:({description:n,name:t,arguments:r,type:s,directives:a})=>de("",n,`
`)+t+(If(r)?de(`(
`,ks(J(r,`
`)),`
)`):de("(",J(r,", "),")"))+": "+s+de(" ",J(a," "))},InputValueDefinition:{leave:({description:n,name:t,type:r,defaultValue:s,directives:a})=>de("",n,`
`)+J([t+": "+r,de("= ",s),J(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:n,name:t,interfaces:r,directives:s,fields:a})=>de("",n,`
`)+J(["interface",t,de("implements ",J(r," & ")),J(s," "),nt(a)]," ")},UnionTypeDefinition:{leave:({description:n,name:t,directives:r,types:s})=>de("",n,`
`)+J(["union",t,J(r," "),de("= ",J(s," | "))]," ")},EnumTypeDefinition:{leave:({description:n,name:t,directives:r,values:s})=>de("",n,`
`)+J(["enum",t,J(r," "),nt(s)]," ")},EnumValueDefinition:{leave:({description:n,name:t,directives:r})=>de("",n,`
`)+J([t,J(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:n,name:t,directives:r,fields:s})=>de("",n,`
`)+J(["input",t,J(r," "),nt(s)]," ")},DirectiveDefinition:{leave:({description:n,name:t,arguments:r,repeatable:s,locations:a})=>de("",n,`
`)+"directive @"+t+(If(r)?de(`(
`,ks(J(r,`
`)),`
)`):de("(",J(r,", "),")"))+(s?" repeatable":"")+" on "+J(a," | ")},SchemaExtension:{leave:({directives:n,operationTypes:t})=>J(["extend schema",J(n," "),nt(t)]," ")},ScalarTypeExtension:{leave:({name:n,directives:t})=>J(["extend scalar",n,J(t," ")]," ")},ObjectTypeExtension:{leave:({name:n,interfaces:t,directives:r,fields:s})=>J(["extend type",n,de("implements ",J(t," & ")),J(r," "),nt(s)]," ")},InterfaceTypeExtension:{leave:({name:n,interfaces:t,directives:r,fields:s})=>J(["extend interface",n,de("implements ",J(t," & ")),J(r," "),nt(s)]," ")},UnionTypeExtension:{leave:({name:n,directives:t,types:r})=>J(["extend union",n,J(t," "),de("= ",J(r," | "))]," ")},EnumTypeExtension:{leave:({name:n,directives:t,values:r})=>J(["extend enum",n,J(t," "),nt(r)]," ")},InputObjectTypeExtension:{leave:({name:n,directives:t,fields:r})=>J(["extend input",n,J(t," "),nt(r)]," ")}};function J(n,t=""){var r;return(r=n?.filter(s=>s).join(t))!==null&&r!==void 0?r:""}function nt(n){return de(`{
`,ks(J(n,`
`)),`
}`)}function de(n,t,r=""){return t!=null&&t!==""?n+t+r:""}function ks(n){return de("  ",n.replace(/\n/g,`
  `))}function If(n){var t;return(t=n?.some(r=>r.includes(`
`)))!==null&&t!==void 0?t:!1}function Wo(n,t){switch(n.kind){case T.NULL:return null;case T.INT:return parseInt(n.value,10);case T.FLOAT:return parseFloat(n.value);case T.STRING:case T.ENUM:case T.BOOLEAN:return n.value;case T.LIST:return n.values.map(r=>Wo(r,t));case T.OBJECT:return or(n.fields,r=>r.name.value,r=>Wo(r.value,t));case T.VARIABLE:return t?.[n.name.value]}}function ot(n){if(n!=null||me(!1,"Must provide name."),typeof n=="string"||me(!1,"Expected name to be a string."),n.length===0)throw new L("Expected name to be a non-empty string.");for(let t=1;t<n.length;++t)if(!Tp(n.charCodeAt(t)))throw new L(`Names must only contain [_a-zA-Z0-9] but "${n}" does not.`);if(!du(n.charCodeAt(0)))throw new L(`Names must start with [_a-zA-Z] but "${n}" does not.`);return n}function EA(n){if(n==="true"||n==="false"||n==="null")throw new L(`Enum values cannot be named: ${n}`);return ot(n)}function gu(n){return Qt(n)||Je(n)||Ge(n)||Jn(n)||st(n)||hn(n)||Dn(n)||Ce(n)}function Qt(n){return yt(n,kt)}function Je(n){return yt(n,gt)}function DA(n){if(!Je(n))throw new Error(`Expected ${G(n)} to be a GraphQL Object type.`);return n}function Ge(n){return yt(n,Us)}function TA(n){if(!Ge(n))throw new Error(`Expected ${G(n)} to be a GraphQL Interface type.`);return n}function Jn(n){return yt(n,Ms)}function st(n){return yt(n,Ur)}function hn(n){return yt(n,$s)}function Dn(n){return yt(n,fn)}function Ce(n){return yt(n,ce)}function mu(n){return Qt(n)||st(n)||hn(n)||vu(n)&&mu(n.ofType)}function Cp(n){return Qt(n)||Je(n)||Ge(n)||Jn(n)||st(n)||vu(n)&&Cp(n.ofType)}function Pr(n){return Qt(n)||st(n)}function Fi(n){return Je(n)||Ge(n)||Jn(n)}function cr(n){return Ge(n)||Jn(n)}class fn{constructor(t){gu(t)||me(!1,`Expected ${G(t)} to be a GraphQL type.`),this.ofType=t}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class ce{constructor(t){yu(t)||me(!1,`Expected ${G(t)} to be a GraphQL nullable type.`),this.ofType=t}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function vu(n){return Dn(n)||Ce(n)}function yu(n){return gu(n)&&!Ce(n)}function _A(n){if(!yu(n))throw new Error(`Expected ${G(n)} to be a GraphQL nullable type.`);return n}function AA(n){if(n)return Ce(n)?n.ofType:n}function NS(n){return Qt(n)||Je(n)||Ge(n)||Jn(n)||st(n)||hn(n)}function hr(n){if(n){let t=n;for(;vu(t);)t=t.ofType;return t}}function Op(n){return typeof n=="function"?n():n}function xp(n){return typeof n=="function"?n():n}class kt{constructor(t){var r,s,a,u;const c=(r=t.parseValue)!==null&&r!==void 0?r:bf;this.name=ot(t.name),this.description=t.description,this.specifiedByURL=t.specifiedByURL,this.serialize=(s=t.serialize)!==null&&s!==void 0?s:bf,this.parseValue=c,this.parseLiteral=(a=t.parseLiteral)!==null&&a!==void 0?a:(f,h)=>c(Wo(f,h)),this.extensions=zn(t.extensions),this.astNode=t.astNode,this.extensionASTNodes=(u=t.extensionASTNodes)!==null&&u!==void 0?u:[],t.specifiedByURL==null||typeof t.specifiedByURL=="string"||me(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${G(t.specifiedByURL)}.`),t.serialize==null||typeof t.serialize=="function"||me(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),t.parseLiteral&&(typeof t.parseValue=="function"&&typeof t.parseLiteral=="function"||me(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class gt{constructor(t){var r;this.name=ot(t.name),this.description=t.description,this.isTypeOf=t.isTypeOf,this.extensions=zn(t.extensions),this.astNode=t.astNode,this.extensionASTNodes=(r=t.extensionASTNodes)!==null&&r!==void 0?r:[],this._fields=()=>Rp(t),this._interfaces=()=>kp(t),t.isTypeOf==null||typeof t.isTypeOf=="function"||me(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${G(t.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Bp(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function kp(n){var t;const r=Op((t=n.interfaces)!==null&&t!==void 0?t:[]);return Array.isArray(r)||me(!1,`${n.name} interfaces must be an Array or a function which returns an Array.`),r}function Rp(n){const t=xp(n.fields);return Lr(t)||me(!1,`${n.name} fields must be an object with field names as keys or a function which returns such an object.`),Ft(t,(r,s)=>{var a;Lr(r)||me(!1,`${n.name}.${s} field config must be an object.`),r.resolve==null||typeof r.resolve=="function"||me(!1,`${n.name}.${s} field resolver must be a function if provided, but got: ${G(r.resolve)}.`);const u=(a=r.args)!==null&&a!==void 0?a:{};return Lr(u)||me(!1,`${n.name}.${s} args must be an object with argument names as keys.`),{name:ot(s),description:r.description,type:r.type,args:Lp(u),resolve:r.resolve,subscribe:r.subscribe,deprecationReason:r.deprecationReason,extensions:zn(r.extensions),astNode:r.astNode}})}function Lp(n){return Object.entries(n).map(([t,r])=>({name:ot(t),description:r.description,type:r.type,defaultValue:r.defaultValue,deprecationReason:r.deprecationReason,extensions:zn(r.extensions),astNode:r.astNode}))}function Lr(n){return xt(n)&&!Array.isArray(n)}function Bp(n){return Ft(n,t=>({description:t.description,type:t.type,args:Pp(t.args),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}))}function Pp(n){return or(n,t=>t.name,t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}))}function Up(n){return Ce(n.type)&&n.defaultValue===void 0}class Us{constructor(t){var r;this.name=ot(t.name),this.description=t.description,this.resolveType=t.resolveType,this.extensions=zn(t.extensions),this.astNode=t.astNode,this.extensionASTNodes=(r=t.extensionASTNodes)!==null&&r!==void 0?r:[],this._fields=Rp.bind(void 0,t),this._interfaces=kp.bind(void 0,t),t.resolveType==null||typeof t.resolveType=="function"||me(!1,`${this.name} must provide "resolveType" as a function, but got: ${G(t.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Bp(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Ms{constructor(t){var r;this.name=ot(t.name),this.description=t.description,this.resolveType=t.resolveType,this.extensions=zn(t.extensions),this.astNode=t.astNode,this.extensionASTNodes=(r=t.extensionASTNodes)!==null&&r!==void 0?r:[],this._types=bA.bind(void 0,t),t.resolveType==null||typeof t.resolveType=="function"||me(!1,`${this.name} must provide "resolveType" as a function, but got: ${G(t.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function bA(n){const t=Op(n.types);return Array.isArray(t)||me(!1,`Must provide Array of types or a function which returns such an array for Union ${n.name}.`),t}class Ur{constructor(t){var r;this.name=ot(t.name),this.description=t.description,this.extensions=zn(t.extensions),this.astNode=t.astNode,this.extensionASTNodes=(r=t.extensionASTNodes)!==null&&r!==void 0?r:[],this._values=typeof t.values=="function"?t.values:wf(this.name,t.values),this._valueLookup=null,this._nameLookup=null}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return typeof this._values=="function"&&(this._values=wf(this.name,this._values())),this._values}getValue(t){return this._nameLookup===null&&(this._nameLookup=dr(this.getValues(),r=>r.name)),this._nameLookup[t]}serialize(t){this._valueLookup===null&&(this._valueLookup=new Map(this.getValues().map(s=>[s.value,s])));const r=this._valueLookup.get(t);if(r===void 0)throw new L(`Enum "${this.name}" cannot represent value: ${G(t)}`);return r.name}parseValue(t){if(typeof t!="string"){const s=G(t);throw new L(`Enum "${this.name}" cannot represent non-string value: ${s}.`+Os(this,s))}const r=this.getValue(t);if(r==null)throw new L(`Value "${t}" does not exist in "${this.name}" enum.`+Os(this,t));return r.value}parseLiteral(t,r){if(t.kind!==T.ENUM){const a=Ze(t);throw new L(`Enum "${this.name}" cannot represent non-enum value: ${a}.`+Os(this,a),{nodes:t})}const s=this.getValue(t.value);if(s==null){const a=Ze(t);throw new L(`Value "${a}" does not exist in "${this.name}" enum.`+Os(this,a),{nodes:t})}return s.value}toConfig(){const t=or(this.getValues(),r=>r.name,r=>({description:r.description,value:r.value,deprecationReason:r.deprecationReason,extensions:r.extensions,astNode:r.astNode}));return{name:this.name,description:this.description,values:t,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Os(n,t){const r=n.getValues().map(a=>a.name),s=mr(t,r);return zt("the enum value",s)}function wf(n,t){return Lr(t)||me(!1,`${n} values must be an object with value names as keys.`),Object.entries(t).map(([r,s])=>(Lr(s)||me(!1,`${n}.${r} must refer to an object with a "value" key representing an internal value but got: ${G(s)}.`),{name:EA(r),description:s.description,value:s.value!==void 0?s.value:r,deprecationReason:s.deprecationReason,extensions:zn(s.extensions),astNode:s.astNode}))}class $s{constructor(t){var r,s;this.name=ot(t.name),this.description=t.description,this.extensions=zn(t.extensions),this.astNode=t.astNode,this.extensionASTNodes=(r=t.extensionASTNodes)!==null&&r!==void 0?r:[],this.isOneOf=(s=t.isOneOf)!==null&&s!==void 0?s:!1,this._fields=SA.bind(void 0,t)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const t=Ft(this.getFields(),r=>({description:r.description,type:r.type,defaultValue:r.defaultValue,deprecationReason:r.deprecationReason,extensions:r.extensions,astNode:r.astNode}));return{name:this.name,description:this.description,fields:t,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,isOneOf:this.isOneOf}}toString(){return this.name}toJSON(){return this.toString()}}function SA(n){const t=xp(n.fields);return Lr(t)||me(!1,`${n.name} fields must be an object with field names as keys or a function which returns such an object.`),Ft(t,(r,s)=>(!("resolve"in r)||me(!1,`${n.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:ot(s),description:r.description,type:r.type,defaultValue:r.defaultValue,deprecationReason:r.deprecationReason,extensions:zn(r.extensions),astNode:r.astNode}))}function IA(n){return Ce(n.type)&&n.defaultValue===void 0}function _i(n,t,r){return t===r?!0:Ce(r)?Ce(t)?_i(n,t.ofType,r.ofType):!1:Ce(t)?_i(n,t.ofType,r):Dn(r)?Dn(t)?_i(n,t.ofType,r.ofType):!1:Dn(t)?!1:cr(r)&&(Ge(t)||Je(t))&&n.isSubType(r,t)}function Nf(n,t,r){return t===r?!0:cr(t)?cr(r)?n.getPossibleTypes(t).some(s=>n.isSubType(r,s)):n.isSubType(t,r):cr(r)?n.isSubType(r,t):!1}const Oo=2147483647,xo=-2147483648,wA=new kt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(n){const t=ki(n);if(typeof t=="boolean")return t?1:0;let r=t;if(typeof t=="string"&&t!==""&&(r=Number(t)),typeof r!="number"||!Number.isInteger(r))throw new L(`Int cannot represent non-integer value: ${G(t)}`);if(r>Oo||r<xo)throw new L("Int cannot represent non 32-bit signed integer value: "+G(t));return r},parseValue(n){if(typeof n!="number"||!Number.isInteger(n))throw new L(`Int cannot represent non-integer value: ${G(n)}`);if(n>Oo||n<xo)throw new L(`Int cannot represent non 32-bit signed integer value: ${n}`);return n},parseLiteral(n){if(n.kind!==T.INT)throw new L(`Int cannot represent non-integer value: ${Ze(n)}`,{nodes:n});const t=parseInt(n.value,10);if(t>Oo||t<xo)throw new L(`Int cannot represent non 32-bit signed integer value: ${n.value}`,{nodes:n});return t}}),NA=new kt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(n){const t=ki(n);if(typeof t=="boolean")return t?1:0;let r=t;if(typeof t=="string"&&t!==""&&(r=Number(t)),typeof r!="number"||!Number.isFinite(r))throw new L(`Float cannot represent non numeric value: ${G(t)}`);return r},parseValue(n){if(typeof n!="number"||!Number.isFinite(n))throw new L(`Float cannot represent non numeric value: ${G(n)}`);return n},parseLiteral(n){if(n.kind!==T.FLOAT&&n.kind!==T.INT)throw new L(`Float cannot represent non numeric value: ${Ze(n)}`,n);return parseFloat(n.value)}}),Ve=new kt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(n){const t=ki(n);if(typeof t=="string")return t;if(typeof t=="boolean")return t?"true":"false";if(typeof t=="number"&&Number.isFinite(t))return t.toString();throw new L(`String cannot represent value: ${G(n)}`)},parseValue(n){if(typeof n!="string")throw new L(`String cannot represent a non string value: ${G(n)}`);return n},parseLiteral(n){if(n.kind!==T.STRING)throw new L(`String cannot represent a non string value: ${Ze(n)}`,{nodes:n});return n.value}}),Fn=new kt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(n){const t=ki(n);if(typeof t=="boolean")return t;if(Number.isFinite(t))return t!==0;throw new L(`Boolean cannot represent a non boolean value: ${G(t)}`)},parseValue(n){if(typeof n!="boolean")throw new L(`Boolean cannot represent a non boolean value: ${G(n)}`);return n},parseLiteral(n){if(n.kind!==T.BOOLEAN)throw new L(`Boolean cannot represent a non boolean value: ${Ze(n)}`,{nodes:n});return n.value}}),Mp=new kt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(n){const t=ki(n);if(typeof t=="string")return t;if(Number.isInteger(t))return String(t);throw new L(`ID cannot represent value: ${G(n)}`)},parseValue(n){if(typeof n=="string")return n;if(typeof n=="number"&&Number.isInteger(n))return n.toString();throw new L(`ID cannot represent value: ${G(n)}`)},parseLiteral(n){if(n.kind!==T.STRING&&n.kind!==T.INT)throw new L("ID cannot represent a non-string and non-integer value: "+Ze(n),{nodes:n});return n.value}}),ea=Object.freeze([Ve,wA,NA,Fn,Mp]);function FA(n){return ea.some(({name:t})=>n.name===t)}function ki(n){if(xt(n)){if(typeof n.valueOf=="function"){const t=n.valueOf();if(!xt(t))return t}if(typeof n.toJSON=="function")return n.toJSON()}return n}function CA(n){return yt(n,Rt)}class Rt{constructor(t){var r,s;this.name=ot(t.name),this.description=t.description,this.locations=t.locations,this.isRepeatable=(r=t.isRepeatable)!==null&&r!==void 0?r:!1,this.extensions=zn(t.extensions),this.astNode=t.astNode,Array.isArray(t.locations)||me(!1,`@${t.name} locations must be an Array.`);const a=(s=t.args)!==null&&s!==void 0?s:{};xt(a)&&!Array.isArray(a)||me(!1,`@${t.name} args must be an object with argument names as keys.`),this.args=Lp(a)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:Pp(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const $p=new Rt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[H.FIELD,H.FRAGMENT_SPREAD,H.INLINE_FRAGMENT],args:{if:{type:new ce(Fn),description:"Included when true."}}}),Vp=new Rt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[H.FIELD,H.FRAGMENT_SPREAD,H.INLINE_FRAGMENT],args:{if:{type:new ce(Fn),description:"Skipped when true."}}}),OA="No longer supported",Gp=new Rt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[H.FIELD_DEFINITION,H.ARGUMENT_DEFINITION,H.INPUT_FIELD_DEFINITION,H.ENUM_VALUE],args:{reason:{type:Ve,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:OA}}}),qp=new Rt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[H.SCALAR],args:{url:{type:new ce(Ve),description:"The URL that specifies the behavior of this scalar."}}}),jp=new Rt({name:"oneOf",description:"Indicates exactly one field must be supplied and this field must not be `null`.",locations:[H.INPUT_OBJECT],args:{}}),Vr=Object.freeze([$p,Vp,Gp,qp,jp]);function xA(n){return typeof n=="object"&&typeof n?.[Symbol.iterator]=="function"}function vi(n,t){if(Ce(t)){const r=vi(n,t.ofType);return r?.kind===T.NULL?null:r}if(n===null)return{kind:T.NULL};if(n===void 0)return null;if(Dn(t)){const r=t.ofType;if(xA(n)){const s=[];for(const a of n){const u=vi(a,r);u!=null&&s.push(u)}return{kind:T.LIST,values:s}}return vi(n,r)}if(hn(t)){if(!xt(n))return null;const r=[];for(const s of Object.values(t.getFields())){const a=vi(n[s.name],s.type);a&&r.push({kind:T.OBJECT_FIELD,name:{kind:T.NAME,value:s.name},value:a})}return{kind:T.OBJECT,fields:r}}if(Pr(t)){const r=t.serialize(n);if(r==null)return null;if(typeof r=="boolean")return{kind:T.BOOLEAN,value:r};if(typeof r=="number"&&Number.isFinite(r)){const s=String(r);return Ff.test(s)?{kind:T.INT,value:s}:{kind:T.FLOAT,value:s}}if(typeof r=="string")return st(t)?{kind:T.ENUM,value:r}:t===Mp&&Ff.test(r)?{kind:T.INT,value:r}:{kind:T.STRING,value:r};throw new TypeError(`Cannot convert value to AST: ${G(r)}.`)}it(!1,"Unexpected input type: "+G(t))}const Ff=/^-?(?:0|[1-9][0-9]*)$/,Eu=new gt({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Ve,resolve:n=>n.description},types:{description:"A list of all types supported by this server.",type:new ce(new fn(new ce(ht))),resolve(n){return Object.values(n.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new ce(ht),resolve:n=>n.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:ht,resolve:n=>n.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:ht,resolve:n=>n.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new ce(new fn(new ce(Yp))),resolve:n=>n.getDirectives()}})}),Yp=new gt({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new ce(Ve),resolve:n=>n.name},description:{type:Ve,resolve:n=>n.description},isRepeatable:{type:new ce(Fn),resolve:n=>n.isRepeatable},locations:{type:new ce(new fn(new ce(Wp))),resolve:n=>n.locations},args:{type:new ce(new fn(new ce(na))),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(n,{includeDeprecated:t}){return t?n.args:n.args.filter(r=>r.deprecationReason==null)}}})}),Wp=new Ur({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:H.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:H.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:H.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:H.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:H.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:H.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:H.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:H.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:H.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:H.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:H.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:H.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:H.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:H.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:H.UNION,description:"Location adjacent to a union definition."},ENUM:{value:H.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:H.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:H.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:H.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),ht=new gt({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new ce(Qp),resolve(n){if(Qt(n))return Ne.SCALAR;if(Je(n))return Ne.OBJECT;if(Ge(n))return Ne.INTERFACE;if(Jn(n))return Ne.UNION;if(st(n))return Ne.ENUM;if(hn(n))return Ne.INPUT_OBJECT;if(Dn(n))return Ne.LIST;if(Ce(n))return Ne.NON_NULL;it(!1,`Unexpected type: "${G(n)}".`)}},name:{type:Ve,resolve:n=>"name"in n?n.name:void 0},description:{type:Ve,resolve:n=>"description"in n?n.description:void 0},specifiedByURL:{type:Ve,resolve:n=>"specifiedByURL"in n?n.specifiedByURL:void 0},fields:{type:new fn(new ce(Jp)),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(n,{includeDeprecated:t}){if(Je(n)||Ge(n)){const r=Object.values(n.getFields());return t?r:r.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new fn(new ce(ht)),resolve(n){if(Je(n)||Ge(n))return n.getInterfaces()}},possibleTypes:{type:new fn(new ce(ht)),resolve(n,t,r,{schema:s}){if(cr(n))return s.getPossibleTypes(n)}},enumValues:{type:new fn(new ce(zp)),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(n,{includeDeprecated:t}){if(st(n)){const r=n.getValues();return t?r:r.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new fn(new ce(na)),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(n,{includeDeprecated:t}){if(hn(n)){const r=Object.values(n.getFields());return t?r:r.filter(s=>s.deprecationReason==null)}}},ofType:{type:ht,resolve:n=>"ofType"in n?n.ofType:void 0},isOneOf:{type:Fn,resolve:n=>{if(hn(n))return n.isOneOf}}})}),Jp=new gt({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new ce(Ve),resolve:n=>n.name},description:{type:Ve,resolve:n=>n.description},args:{type:new ce(new fn(new ce(na))),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(n,{includeDeprecated:t}){return t?n.args:n.args.filter(r=>r.deprecationReason==null)}},type:{type:new ce(ht),resolve:n=>n.type},isDeprecated:{type:new ce(Fn),resolve:n=>n.deprecationReason!=null},deprecationReason:{type:Ve,resolve:n=>n.deprecationReason}})}),na=new gt({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new ce(Ve),resolve:n=>n.name},description:{type:Ve,resolve:n=>n.description},type:{type:new ce(ht),resolve:n=>n.type},defaultValue:{type:Ve,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(n){const{type:t,defaultValue:r}=n,s=vi(r,t);return s?Ze(s):null}},isDeprecated:{type:new ce(Fn),resolve:n=>n.deprecationReason!=null},deprecationReason:{type:Ve,resolve:n=>n.deprecationReason}})}),zp=new gt({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new ce(Ve),resolve:n=>n.name},description:{type:Ve,resolve:n=>n.description},isDeprecated:{type:new ce(Fn),resolve:n=>n.deprecationReason!=null},deprecationReason:{type:Ve,resolve:n=>n.deprecationReason}})});var Ne;(function(n){n.SCALAR="SCALAR",n.OBJECT="OBJECT",n.INTERFACE="INTERFACE",n.UNION="UNION",n.ENUM="ENUM",n.INPUT_OBJECT="INPUT_OBJECT",n.LIST="LIST",n.NON_NULL="NON_NULL"})(Ne||(Ne={}));const Qp=new Ur({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:Ne.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:Ne.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:Ne.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:Ne.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:Ne.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:Ne.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:Ne.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:Ne.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new ce(Eu);new ce(Ve);new ce(Ve);const ta=Object.freeze([Eu,Yp,Wp,ht,Jp,na,zp,Qp]);function kA(n){return ta.some(({name:t})=>n.name===t)}class Hp{constructor(t){var r,s;this.__validationErrors=t.assumeValid===!0?[]:void 0,xt(t)||me(!1,"Must provide configuration object."),!t.types||Array.isArray(t.types)||me(!1,`"types" must be Array if provided but got: ${G(t.types)}.`),!t.directives||Array.isArray(t.directives)||me(!1,`"directives" must be Array if provided but got: ${G(t.directives)}.`),this.description=t.description,this.extensions=zn(t.extensions),this.astNode=t.astNode,this.extensionASTNodes=(r=t.extensionASTNodes)!==null&&r!==void 0?r:[],this._queryType=t.query,this._mutationType=t.mutation,this._subscriptionType=t.subscription,this._directives=(s=t.directives)!==null&&s!==void 0?s:Vr;const a=new Set(t.types);if(t.types!=null)for(const u of t.types)a.delete(u),rt(u,a);this._queryType!=null&&rt(this._queryType,a),this._mutationType!=null&&rt(this._mutationType,a),this._subscriptionType!=null&&rt(this._subscriptionType,a);for(const u of this._directives)if(CA(u))for(const c of u.args)rt(c.type,a);rt(Eu,a),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const u of a){if(u==null)continue;const c=u.name;if(c||me(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[c]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${c}".`);if(this._typeMap[c]=u,Ge(u)){for(const f of u.getInterfaces())if(Ge(f)){let h=this._implementationsMap[f.name];h===void 0&&(h=this._implementationsMap[f.name]={objects:[],interfaces:[]}),h.interfaces.push(u)}}else if(Je(u)){for(const f of u.getInterfaces())if(Ge(f)){let h=this._implementationsMap[f.name];h===void 0&&(h=this._implementationsMap[f.name]={objects:[],interfaces:[]}),h.objects.push(u)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(t){switch(t){case jn.QUERY:return this.getQueryType();case jn.MUTATION:return this.getMutationType();case jn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(t){return this.getTypeMap()[t]}getPossibleTypes(t){return Jn(t)?t.getTypes():this.getImplementations(t).objects}getImplementations(t){const r=this._implementationsMap[t.name];return r??{objects:[],interfaces:[]}}isSubType(t,r){let s=this._subTypeMap[t.name];if(s===void 0){if(s=Object.create(null),Jn(t))for(const a of t.getTypes())s[a.name]=!0;else{const a=this.getImplementations(t);for(const u of a.objects)s[u.name]=!0;for(const u of a.interfaces)s[u.name]=!0}this._subTypeMap[t.name]=s}return s[r.name]!==void 0}getDirectives(){return this._directives}getDirective(t){return this.getDirectives().find(r=>r.name===t)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function rt(n,t){const r=hr(n);if(!t.has(r)){if(t.add(r),Jn(r))for(const s of r.getTypes())rt(s,t);else if(Je(r)||Ge(r)){for(const s of r.getInterfaces())rt(s,t);for(const s of Object.values(r.getFields())){rt(s.type,t);for(const a of s.args)rt(a.type,t)}}else if(hn(r))for(const s of Object.values(r.getFields()))rt(s.type,t)}return t}function mt(n,t){switch(t.kind){case T.LIST_TYPE:{const r=mt(n,t.type);return r&&new fn(r)}case T.NON_NULL_TYPE:{const r=mt(n,t.type);return r&&new ce(r)}case T.NAMED_TYPE:return n.getType(t.name.value)}}function RA(n){return n.kind===T.OPERATION_DEFINITION||n.kind===T.FRAGMENT_DEFINITION}function LA(n){return n.kind===T.SCHEMA_DEFINITION||Ri(n)||n.kind===T.DIRECTIVE_DEFINITION}function Ri(n){return n.kind===T.SCALAR_TYPE_DEFINITION||n.kind===T.OBJECT_TYPE_DEFINITION||n.kind===T.INTERFACE_TYPE_DEFINITION||n.kind===T.UNION_TYPE_DEFINITION||n.kind===T.ENUM_TYPE_DEFINITION||n.kind===T.INPUT_OBJECT_TYPE_DEFINITION}function BA(n){return n.kind===T.SCHEMA_EXTENSION||Du(n)}function Du(n){return n.kind===T.SCALAR_TYPE_EXTENSION||n.kind===T.OBJECT_TYPE_EXTENSION||n.kind===T.INTERFACE_TYPE_EXTENSION||n.kind===T.UNION_TYPE_EXTENSION||n.kind===T.ENUM_TYPE_EXTENSION||n.kind===T.INPUT_OBJECT_TYPE_EXTENSION}function PA(n){return{Document(t){for(const r of t.definitions)if(!RA(r)){const s=r.kind===T.SCHEMA_DEFINITION||r.kind===T.SCHEMA_EXTENSION?"schema":'"'+r.name.value+'"';n.reportError(new L(`The ${s} definition is not executable.`,{nodes:r}))}return!1}}}function UA(n){return{Field(t){const r=n.getParentType();if(r&&!n.getFieldDef()){const a=n.getSchema(),u=t.name.value;let c=zt("to use an inline fragment on",MA(a,r,u));c===""&&(c=zt($A(r,u))),n.reportError(new L(`Cannot query field "${u}" on type "${r.name}".`+c,{nodes:t}))}}}}function MA(n,t,r){if(!cr(t))return[];const s=new Set,a=Object.create(null);for(const c of n.getPossibleTypes(t))if(c.getFields()[r]){s.add(c),a[c.name]=1;for(const f of c.getInterfaces()){var u;f.getFields()[r]&&(s.add(f),a[f.name]=((u=a[f.name])!==null&&u!==void 0?u:0)+1)}}return[...s].sort((c,f)=>{const h=a[f.name]-a[c.name];return h!==0?h:Ge(c)&&n.isSubType(c,f)?-1:Ge(f)&&n.isSubType(f,c)?1:hu(c.name,f.name)}).map(c=>c.name)}function $A(n,t){if(Je(n)||Ge(n)){const r=Object.keys(n.getFields());return mr(t,r)}return[]}function VA(n){return{InlineFragment(t){const r=t.typeCondition;if(r){const s=mt(n.getSchema(),r);if(s&&!Fi(s)){const a=Ze(r);n.reportError(new L(`Fragment cannot condition on non composite type "${a}".`,{nodes:r}))}}},FragmentDefinition(t){const r=mt(n.getSchema(),t.typeCondition);if(r&&!Fi(r)){const s=Ze(t.typeCondition);n.reportError(new L(`Fragment "${t.name.value}" cannot condition on non composite type "${s}".`,{nodes:t.typeCondition}))}}}}function GA(n){return{...Xp(n),Argument(t){const r=n.getArgument(),s=n.getFieldDef(),a=n.getParentType();if(!r&&s&&a){const u=t.name.value,c=s.args.map(h=>h.name),f=mr(u,c);n.reportError(new L(`Unknown argument "${u}" on field "${a.name}.${s.name}".`+zt(f),{nodes:t}))}}}}function Xp(n){const t=Object.create(null),r=n.getSchema(),s=r?r.getDirectives():Vr;for(const c of s)t[c.name]=c.args.map(f=>f.name);const a=n.getDocument().definitions;for(const c of a)if(c.kind===T.DIRECTIVE_DEFINITION){var u;const f=(u=c.arguments)!==null&&u!==void 0?u:[];t[c.name.value]=f.map(h=>h.name.value)}return{Directive(c){const f=c.name.value,h=t[f];if(c.arguments&&h)for(const m of c.arguments){const v=m.name.value;if(!h.includes(v)){const D=mr(v,h);n.reportError(new L(`Unknown argument "${v}" on directive "@${f}".`+zt(D),{nodes:m}))}}return!1}}}function Kp(n){const t=Object.create(null),r=n.getSchema(),s=r?r.getDirectives():Vr;for(const u of s)t[u.name]=u.locations;const a=n.getDocument().definitions;for(const u of a)u.kind===T.DIRECTIVE_DEFINITION&&(t[u.name.value]=u.locations.map(c=>c.value));return{Directive(u,c,f,h,m){const v=u.name.value,D=t[v];if(!D){n.reportError(new L(`Unknown directive "@${v}".`,{nodes:u}));return}const b=qA(m);b&&!D.includes(b)&&n.reportError(new L(`Directive "@${v}" may not be used on ${b}.`,{nodes:u}))}}}function qA(n){const t=n[n.length-1];switch("kind"in t||it(!1),t.kind){case T.OPERATION_DEFINITION:return jA(t.operation);case T.FIELD:return H.FIELD;case T.FRAGMENT_SPREAD:return H.FRAGMENT_SPREAD;case T.INLINE_FRAGMENT:return H.INLINE_FRAGMENT;case T.FRAGMENT_DEFINITION:return H.FRAGMENT_DEFINITION;case T.VARIABLE_DEFINITION:return H.VARIABLE_DEFINITION;case T.SCHEMA_DEFINITION:case T.SCHEMA_EXTENSION:return H.SCHEMA;case T.SCALAR_TYPE_DEFINITION:case T.SCALAR_TYPE_EXTENSION:return H.SCALAR;case T.OBJECT_TYPE_DEFINITION:case T.OBJECT_TYPE_EXTENSION:return H.OBJECT;case T.FIELD_DEFINITION:return H.FIELD_DEFINITION;case T.INTERFACE_TYPE_DEFINITION:case T.INTERFACE_TYPE_EXTENSION:return H.INTERFACE;case T.UNION_TYPE_DEFINITION:case T.UNION_TYPE_EXTENSION:return H.UNION;case T.ENUM_TYPE_DEFINITION:case T.ENUM_TYPE_EXTENSION:return H.ENUM;case T.ENUM_VALUE_DEFINITION:return H.ENUM_VALUE;case T.INPUT_OBJECT_TYPE_DEFINITION:case T.INPUT_OBJECT_TYPE_EXTENSION:return H.INPUT_OBJECT;case T.INPUT_VALUE_DEFINITION:{const r=n[n.length-3];return"kind"in r||it(!1),r.kind===T.INPUT_OBJECT_TYPE_DEFINITION?H.INPUT_FIELD_DEFINITION:H.ARGUMENT_DEFINITION}default:it(!1,"Unexpected kind: "+G(t.kind))}}function jA(n){switch(n){case jn.QUERY:return H.QUERY;case jn.MUTATION:return H.MUTATION;case jn.SUBSCRIPTION:return H.SUBSCRIPTION}}function YA(n){return{FragmentSpread(t){const r=t.name.value;n.getFragment(r)||n.reportError(new L(`Unknown fragment "${r}".`,{nodes:t.name}))}}}function Zp(n){const t=n.getSchema(),r=t?t.getTypeMap():Object.create(null),s=Object.create(null);for(const u of n.getDocument().definitions)Ri(u)&&(s[u.name.value]=!0);const a=[...Object.keys(r),...Object.keys(s)];return{NamedType(u,c,f,h,m){const v=u.name.value;if(!r[v]&&!s[v]){var D;const b=(D=m[2])!==null&&D!==void 0?D:f,k=b!=null&&WA(b);if(k&&Cf.includes(v))return;const I=mr(v,k?Cf.concat(a):a);n.reportError(new L(`Unknown type "${v}".`+zt(I),{nodes:u}))}}}}const Cf=[...ea,...ta].map(n=>n.name);function WA(n){return"kind"in n&&(LA(n)||BA(n))}function JA(n){let t=0;return{Document(r){t=r.definitions.filter(s=>s.kind===T.OPERATION_DEFINITION).length},OperationDefinition(r){!r.name&&t>1&&n.reportError(new L("This anonymous operation must be the only defined operation.",{nodes:r}))}}}function zA(n){var t,r,s;const a=n.getSchema(),u=(t=(r=(s=a?.astNode)!==null&&s!==void 0?s:a?.getQueryType())!==null&&r!==void 0?r:a?.getMutationType())!==null&&t!==void 0?t:a?.getSubscriptionType();let c=0;return{SchemaDefinition(f){if(u){n.reportError(new L("Cannot define a new schema within a schema extension.",{nodes:f}));return}c>0&&n.reportError(new L("Must provide only one schema definition.",{nodes:f})),++c}}}const QA=3;function HA(n){function t(r,s=Object.create(null),a=0){if(r.kind===T.FRAGMENT_SPREAD){const u=r.name.value;if(s[u]===!0)return!1;const c=n.getFragment(u);if(!c)return!1;try{return s[u]=!0,t(c,s,a)}finally{s[u]=void 0}}if(r.kind===T.FIELD&&(r.name.value==="fields"||r.name.value==="interfaces"||r.name.value==="possibleTypes"||r.name.value==="inputFields")&&(a++,a>=QA))return!0;if("selectionSet"in r&&r.selectionSet){for(const u of r.selectionSet.selections)if(t(u,s,a))return!0}return!1}return{Field(r){if((r.name.value==="__schema"||r.name.value==="__type")&&t(r))return n.reportError(new L("Maximum introspection depth exceeded",{nodes:[r]})),!1}}}function XA(n){const t=Object.create(null),r=[],s=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(u){return a(u),!1}};function a(u){if(t[u.name.value])return;const c=u.name.value;t[c]=!0;const f=n.getFragmentSpreads(u.selectionSet);if(f.length!==0){s[c]=r.length;for(const h of f){const m=h.name.value,v=s[m];if(r.push(h),v===void 0){const D=n.getFragment(m);D&&a(D)}else{const D=r.slice(v),b=D.slice(0,-1).map(k=>'"'+k.name.value+'"').join(", ");n.reportError(new L(`Cannot spread fragment "${m}" within itself`+(b!==""?` via ${b}.`:"."),{nodes:D}))}r.pop()}s[c]=void 0}}}function KA(n){let t=Object.create(null);return{OperationDefinition:{enter(){t=Object.create(null)},leave(r){const s=n.getRecursiveVariableUsages(r);for(const{node:a}of s){const u=a.name.value;t[u]!==!0&&n.reportError(new L(r.name?`Variable "$${u}" is not defined by operation "${r.name.value}".`:`Variable "$${u}" is not defined.`,{nodes:[a,r]}))}}},VariableDefinition(r){t[r.variable.name.value]=!0}}}function ZA(n){const t=[],r=[];return{OperationDefinition(s){return t.push(s),!1},FragmentDefinition(s){return r.push(s),!1},Document:{leave(){const s=Object.create(null);for(const a of t)for(const u of n.getRecursivelyReferencedFragments(a))s[u.name.value]=!0;for(const a of r){const u=a.name.value;s[u]!==!0&&n.reportError(new L(`Fragment "${u}" is never used.`,{nodes:a}))}}}}}function eb(n){let t=[];return{OperationDefinition:{enter(){t=[]},leave(r){const s=Object.create(null),a=n.getRecursiveVariableUsages(r);for(const{node:u}of a)s[u.name.value]=!0;for(const u of t){const c=u.variable.name.value;s[c]!==!0&&n.reportError(new L(r.name?`Variable "$${c}" is never used in operation "${r.name.value}".`:`Variable "$${c}" is never used.`,{nodes:u}))}}},VariableDefinition(r){t.push(r)}}}function Tu(n){switch(n.kind){case T.OBJECT:return{...n,fields:nb(n.fields)};case T.LIST:return{...n,values:n.values.map(Tu)};case T.INT:case T.FLOAT:case T.STRING:case T.BOOLEAN:case T.NULL:case T.ENUM:case T.VARIABLE:return n}}function nb(n){return n.map(t=>({...t,value:Tu(t.value)})).sort((t,r)=>hu(t.name.value,r.name.value))}function ed(n){return Array.isArray(n)?n.map(([t,r])=>`subfields "${t}" conflict because `+ed(r)).join(" and "):n}function tb(n){const t=new rd,r=new ub,s=new Map;return{SelectionSet(a){const u=rb(n,s,t,r,n.getParentType(),a);for(const[[c,f],h,m]of u){const v=ed(f);n.reportError(new L(`Fields "${c}" conflict because ${v}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:h.concat(m)}))}}}}function rb(n,t,r,s,a,u){const c=[],[f,h]=qs(n,t,a,u);if(sb(n,c,t,r,s,f),h.length!==0)for(let m=0;m<h.length;m++){Vs(n,c,t,r,s,!1,f,h[m]);for(let v=m+1;v<h.length;v++)Gs(n,c,t,r,s,!1,h[m],h[v])}return c}function Vs(n,t,r,s,a,u,c,f){if(s.has(c,f,u))return;s.add(c,f,u);const h=n.getFragment(f);if(!h)return;const[m,v]=zo(n,r,h);if(c!==m){_u(n,t,r,s,a,u,c,m);for(const D of v)Vs(n,t,r,s,a,u,c,D)}}function Gs(n,t,r,s,a,u,c,f){if(c===f||a.has(c,f,u))return;a.add(c,f,u);const h=n.getFragment(c),m=n.getFragment(f);if(!h||!m)return;const[v,D]=zo(n,r,h),[b,k]=zo(n,r,m);_u(n,t,r,s,a,u,v,b);for(const I of k)Gs(n,t,r,s,a,u,c,I);for(const I of D)Gs(n,t,r,s,a,u,I,f)}function ib(n,t,r,s,a,u,c,f,h){const m=[],[v,D]=qs(n,t,u,c),[b,k]=qs(n,t,f,h);_u(n,m,t,r,s,a,v,b);for(const I of k)Vs(n,m,t,r,s,a,v,I);for(const I of D)Vs(n,m,t,r,s,a,b,I);for(const I of D)for(const B of k)Gs(n,m,t,r,s,a,I,B);return m}function sb(n,t,r,s,a,u){for(const[c,f]of Object.entries(u))if(f.length>1)for(let h=0;h<f.length;h++)for(let m=h+1;m<f.length;m++){const v=nd(n,r,s,a,!1,c,f[h],f[m]);v&&t.push(v)}}function _u(n,t,r,s,a,u,c,f){for(const[h,m]of Object.entries(c)){const v=f[h];if(v)for(const D of m)for(const b of v){const k=nd(n,r,s,a,u,h,D,b);k&&t.push(k)}}}function nd(n,t,r,s,a,u,c,f){const[h,m,v]=c,[D,b,k]=f,I=a||h!==D&&Je(h)&&Je(D);if(!I){const K=m.name.value,Q=b.name.value;if(K!==Q)return[[u,`"${K}" and "${Q}" are different fields`],[m],[b]];if(!ab(m,b))return[[u,"they have differing arguments"],[m],[b]]}const B=v?.type,U=k?.type;if(B&&U&&Jo(B,U))return[[u,`they return conflicting types "${G(B)}" and "${G(U)}"`],[m],[b]];const X=m.selectionSet,he=b.selectionSet;if(X&&he){const K=ib(n,t,r,s,I,hr(B),X,hr(U),he);return ob(K,u,m,b)}}function ab(n,t){const r=n.arguments,s=t.arguments;if(r===void 0||r.length===0)return s===void 0||s.length===0;if(s===void 0||s.length===0||r.length!==s.length)return!1;const a=new Map(s.map(({name:u,value:c})=>[u.value,c]));return r.every(u=>{const c=u.value,f=a.get(u.name.value);return f===void 0?!1:Of(c)===Of(f)})}function Of(n){return Ze(Tu(n))}function Jo(n,t){return Dn(n)?Dn(t)?Jo(n.ofType,t.ofType):!0:Dn(t)?!0:Ce(n)?Ce(t)?Jo(n.ofType,t.ofType):!0:Ce(t)?!0:Pr(n)||Pr(t)?n!==t:!1}function qs(n,t,r,s){const a=t.get(s);if(a)return a;const u=Object.create(null),c=Object.create(null);td(n,r,s,u,c);const f=[u,Object.keys(c)];return t.set(s,f),f}function zo(n,t,r){const s=t.get(r.selectionSet);if(s)return s;const a=mt(n.getSchema(),r.typeCondition);return qs(n,t,a,r.selectionSet)}function td(n,t,r,s,a){for(const u of r.selections)switch(u.kind){case T.FIELD:{const c=u.name.value;let f;(Je(t)||Ge(t))&&(f=t.getFields()[c]);const h=u.alias?u.alias.value:c;s[h]||(s[h]=[]),s[h].push([t,u,f]);break}case T.FRAGMENT_SPREAD:a[u.name.value]=!0;break;case T.INLINE_FRAGMENT:{const c=u.typeCondition,f=c?mt(n.getSchema(),c):t;td(n,f,u.selectionSet,s,a);break}}}function ob(n,t,r,s){if(n.length>0)return[[t,n.map(([a])=>a)],[r,...n.map(([,a])=>a).flat()],[s,...n.map(([,,a])=>a).flat()]]}class rd{constructor(){this._data=new Map}has(t,r,s){var a;const u=(a=this._data.get(t))===null||a===void 0?void 0:a.get(r);return u===void 0?!1:s?!0:s===u}add(t,r,s){const a=this._data.get(t);a===void 0?this._data.set(t,new Map([[r,s]])):a.set(r,s)}}class ub{constructor(){this._orderedPairSet=new rd}has(t,r,s){return t<r?this._orderedPairSet.has(t,r,s):this._orderedPairSet.has(r,t,s)}add(t,r,s){t<r?this._orderedPairSet.add(t,r,s):this._orderedPairSet.add(r,t,s)}}function lb(n){return{InlineFragment(t){const r=n.getType(),s=n.getParentType();if(Fi(r)&&Fi(s)&&!Nf(n.getSchema(),r,s)){const a=G(s),u=G(r);n.reportError(new L(`Fragment cannot be spread here as objects of type "${a}" can never be of type "${u}".`,{nodes:t}))}},FragmentSpread(t){const r=t.name.value,s=cb(n,r),a=n.getParentType();if(s&&a&&!Nf(n.getSchema(),s,a)){const u=G(a),c=G(s);n.reportError(new L(`Fragment "${r}" cannot be spread here as objects of type "${u}" can never be of type "${c}".`,{nodes:t}))}}}}function cb(n,t){const r=n.getFragment(t);if(r){const s=mt(n.getSchema(),r.typeCondition);if(Fi(s))return s}}function fb(n){const t=n.getSchema(),r=Object.create(null);for(const a of n.getDocument().definitions)Ri(a)&&(r[a.name.value]=a);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(a){const u=a.name.value,c=r[u],f=t?.getType(u);let h;if(c?h=pb[c.kind]:f&&(h=db(f)),h){if(h!==a.kind){const m=hb(a.kind);n.reportError(new L(`Cannot extend non-${m} type "${u}".`,{nodes:c?[c,a]:a}))}}else{const m=Object.keys({...r,...t?.getTypeMap()}),v=mr(u,m);n.reportError(new L(`Cannot extend type "${u}" because it is not defined.`+zt(v),{nodes:a.name}))}}}const pb={[T.SCALAR_TYPE_DEFINITION]:T.SCALAR_TYPE_EXTENSION,[T.OBJECT_TYPE_DEFINITION]:T.OBJECT_TYPE_EXTENSION,[T.INTERFACE_TYPE_DEFINITION]:T.INTERFACE_TYPE_EXTENSION,[T.UNION_TYPE_DEFINITION]:T.UNION_TYPE_EXTENSION,[T.ENUM_TYPE_DEFINITION]:T.ENUM_TYPE_EXTENSION,[T.INPUT_OBJECT_TYPE_DEFINITION]:T.INPUT_OBJECT_TYPE_EXTENSION};function db(n){if(Qt(n))return T.SCALAR_TYPE_EXTENSION;if(Je(n))return T.OBJECT_TYPE_EXTENSION;if(Ge(n))return T.INTERFACE_TYPE_EXTENSION;if(Jn(n))return T.UNION_TYPE_EXTENSION;if(st(n))return T.ENUM_TYPE_EXTENSION;if(hn(n))return T.INPUT_OBJECT_TYPE_EXTENSION;it(!1,"Unexpected type: "+G(n))}function hb(n){switch(n){case T.SCALAR_TYPE_EXTENSION:return"scalar";case T.OBJECT_TYPE_EXTENSION:return"object";case T.INTERFACE_TYPE_EXTENSION:return"interface";case T.UNION_TYPE_EXTENSION:return"union";case T.ENUM_TYPE_EXTENSION:return"enum";case T.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:it(!1,"Unexpected kind: "+G(n))}}function gb(n){return{...id(n),Field:{leave(t){var r;const s=n.getFieldDef();if(!s)return!1;const a=new Set((r=t.arguments)===null||r===void 0?void 0:r.map(u=>u.name.value));for(const u of s.args)if(!a.has(u.name)&&Up(u)){const c=G(u.type);n.reportError(new L(`Field "${s.name}" argument "${u.name}" of type "${c}" is required, but it was not provided.`,{nodes:t}))}}}}}function id(n){var t;const r=Object.create(null),s=n.getSchema(),a=(t=s?.getDirectives())!==null&&t!==void 0?t:Vr;for(const f of a)r[f.name]=dr(f.args.filter(Up),h=>h.name);const u=n.getDocument().definitions;for(const f of u)if(f.kind===T.DIRECTIVE_DEFINITION){var c;const h=(c=f.arguments)!==null&&c!==void 0?c:[];r[f.name.value]=dr(h.filter(mb),m=>m.name.value)}return{Directive:{leave(f){const h=f.name.value,m=r[h];if(m){var v;const D=(v=f.arguments)!==null&&v!==void 0?v:[],b=new Set(D.map(k=>k.name.value));for(const[k,I]of Object.entries(m))if(!b.has(k)){const B=gu(I.type)?G(I.type):Ze(I.type);n.reportError(new L(`Directive "@${h}" argument "${k}" of type "${B}" is required, but it was not provided.`,{nodes:f}))}}}}}}function mb(n){return n.type.kind===T.NON_NULL_TYPE&&n.defaultValue==null}function vb(n){return{Field(t){const r=n.getType(),s=t.selectionSet;if(r)if(Pr(hr(r))){if(s){const a=t.name.value,u=G(r);n.reportError(new L(`Field "${a}" must not have a selection since type "${u}" has no subfields.`,{nodes:s}))}}else if(s){if(s.selections.length===0){const a=t.name.value,u=G(r);n.reportError(new L(`Field "${a}" of type "${u}" must have at least one field selected.`,{nodes:t}))}}else{const a=t.name.value,u=G(r);n.reportError(new L(`Field "${a}" of type "${u}" must have a selection of subfields. Did you mean "${a} { ... }"?`,{nodes:t}))}}}}function Jt(n,t,r){if(n){if(n.kind===T.VARIABLE){const s=n.name.value;if(r==null||r[s]===void 0)return;const a=r[s];return a===null&&Ce(t)?void 0:a}if(Ce(t))return n.kind===T.NULL?void 0:Jt(n,t.ofType,r);if(n.kind===T.NULL)return null;if(Dn(t)){const s=t.ofType;if(n.kind===T.LIST){const u=[];for(const c of n.values)if(xf(c,r)){if(Ce(s))return;u.push(null)}else{const f=Jt(c,s,r);if(f===void 0)return;u.push(f)}return u}const a=Jt(n,s,r);return a===void 0?void 0:[a]}if(hn(t)){if(n.kind!==T.OBJECT)return;const s=Object.create(null),a=dr(n.fields,u=>u.name.value);for(const u of Object.values(t.getFields())){const c=a[u.name];if(!c||xf(c.value,r)){if(u.defaultValue!==void 0)s[u.name]=u.defaultValue;else if(Ce(u.type))return;continue}const f=Jt(c.value,u.type,r);if(f===void 0)return;s[u.name]=f}if(t.isOneOf){const u=Object.keys(s);if(u.length!==1||s[u[0]]===null)return}return s}if(Pr(t)){let s;try{s=t.parseLiteral(n,r)}catch{return}return s===void 0?void 0:s}it(!1,"Unexpected input type: "+G(t))}}function xf(n,t){return n.kind===T.VARIABLE&&(t==null||t[n.name.value]===void 0)}function yb(n,t,r){var s;const a={},u=(s=t.arguments)!==null&&s!==void 0?s:[],c=dr(u,f=>f.name.value);for(const f of n.args){const h=f.name,m=f.type,v=c[h];if(!v){if(f.defaultValue!==void 0)a[h]=f.defaultValue;else if(Ce(m))throw new L(`Argument "${h}" of required type "${G(m)}" was not provided.`,{nodes:t});continue}const D=v.value;let b=D.kind===T.NULL;if(D.kind===T.VARIABLE){const I=D.name.value;if(r==null||!Eb(r,I)){if(f.defaultValue!==void 0)a[h]=f.defaultValue;else if(Ce(m))throw new L(`Argument "${h}" of required type "${G(m)}" was provided the variable "$${I}" which was not provided a runtime value.`,{nodes:D});continue}b=r[I]==null}if(b&&Ce(m))throw new L(`Argument "${h}" of non-null type "${G(m)}" must not be null.`,{nodes:D});const k=Jt(D,m,r);if(k===void 0)throw new L(`Argument "${h}" has invalid value ${Ze(D)}.`,{nodes:D});a[h]=k}return a}function Ci(n,t,r){var s;const a=(s=t.directives)===null||s===void 0?void 0:s.find(u=>u.name.value===n.name);if(a)return yb(n,a,r)}function Eb(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function Db(n,t,r,s,a){const u=new Map;return Qo(n,t,r,s,a,u,new Set),u}function Qo(n,t,r,s,a,u,c){for(const f of a.selections)switch(f.kind){case T.FIELD:{if(!ko(r,f))continue;const h=Tb(f),m=u.get(h);m!==void 0?m.push(f):u.set(h,[f]);break}case T.INLINE_FRAGMENT:{if(!ko(r,f)||!kf(n,f,s))continue;Qo(n,t,r,s,f.selectionSet,u,c);break}case T.FRAGMENT_SPREAD:{const h=f.name.value;if(c.has(h)||!ko(r,f))continue;c.add(h);const m=t[h];if(!m||!kf(n,m,s))continue;Qo(n,t,r,s,m.selectionSet,u,c);break}}}function ko(n,t){const r=Ci(Vp,t,n);if(r?.if===!0)return!1;const s=Ci($p,t,n);return s?.if!==!1}function kf(n,t,r){const s=t.typeCondition;if(!s)return!0;const a=mt(n,s);return a===r?!0:cr(a)?n.isSubType(a,r):!1}function Tb(n){return n.alias?n.alias.value:n.name.value}function _b(n){return{OperationDefinition(t){if(t.operation==="subscription"){const r=n.getSchema(),s=r.getSubscriptionType();if(s){const a=t.name?t.name.value:null,u=Object.create(null),c=n.getDocument(),f=Object.create(null);for(const m of c.definitions)m.kind===T.FRAGMENT_DEFINITION&&(f[m.name.value]=m);const h=Db(r,f,u,s,t.selectionSet);if(h.size>1){const D=[...h.values()].slice(1).flat();n.reportError(new L(a!=null?`Subscription "${a}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:D}))}for(const m of h.values())m[0].name.value.startsWith("__")&&n.reportError(new L(a!=null?`Subscription "${a}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:m}))}}}}}function Au(n,t){const r=new Map;for(const s of n){const a=t(s),u=r.get(a);u===void 0?r.set(a,[s]):u.push(s)}return r}function Ab(n){return{DirectiveDefinition(s){var a;const u=(a=s.arguments)!==null&&a!==void 0?a:[];return r(`@${s.name.value}`,u)},InterfaceTypeDefinition:t,InterfaceTypeExtension:t,ObjectTypeDefinition:t,ObjectTypeExtension:t};function t(s){var a;const u=s.name.value,c=(a=s.fields)!==null&&a!==void 0?a:[];for(const h of c){var f;const m=h.name.value,v=(f=h.arguments)!==null&&f!==void 0?f:[];r(`${u}.${m}`,v)}return!1}function r(s,a){const u=Au(a,c=>c.name.value);for(const[c,f]of u)f.length>1&&n.reportError(new L(`Argument "${s}(${c}:)" can only be defined once.`,{nodes:f.map(h=>h.name)}));return!1}}function sd(n){return{Field:t,Directive:t};function t(r){var s;const a=(s=r.arguments)!==null&&s!==void 0?s:[],u=Au(a,c=>c.name.value);for(const[c,f]of u)f.length>1&&n.reportError(new L(`There can be only one argument named "${c}".`,{nodes:f.map(h=>h.name)}))}}function bb(n){const t=Object.create(null),r=n.getSchema();return{DirectiveDefinition(s){const a=s.name.value;if(r!=null&&r.getDirective(a)){n.reportError(new L(`Directive "@${a}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return t[a]?n.reportError(new L(`There can be only one directive named "@${a}".`,{nodes:[t[a],s.name]})):t[a]=s.name,!1}}}function ad(n){const t=Object.create(null),r=n.getSchema(),s=r?r.getDirectives():Vr;for(const f of s)t[f.name]=!f.isRepeatable;const a=n.getDocument().definitions;for(const f of a)f.kind===T.DIRECTIVE_DEFINITION&&(t[f.name.value]=!f.repeatable);const u=Object.create(null),c=Object.create(null);return{enter(f){if(!("directives"in f)||!f.directives)return;let h;if(f.kind===T.SCHEMA_DEFINITION||f.kind===T.SCHEMA_EXTENSION)h=u;else if(Ri(f)||Du(f)){const m=f.name.value;h=c[m],h===void 0&&(c[m]=h=Object.create(null))}else h=Object.create(null);for(const m of f.directives){const v=m.name.value;t[v]&&(h[v]?n.reportError(new L(`The directive "@${v}" can only be used once at this location.`,{nodes:[h[v],m]})):h[v]=m)}}}}function Sb(n){const t=n.getSchema(),r=t?t.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:a,EnumTypeExtension:a};function a(u){var c;const f=u.name.value;s[f]||(s[f]=Object.create(null));const h=(c=u.values)!==null&&c!==void 0?c:[],m=s[f];for(const v of h){const D=v.name.value,b=r[f];st(b)&&b.getValue(D)?n.reportError(new L(`Enum value "${f}.${D}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:v.name})):m[D]?n.reportError(new L(`Enum value "${f}.${D}" can only be defined once.`,{nodes:[m[D],v.name]})):m[D]=v.name}return!1}}function Ib(n){const t=n.getSchema(),r=t?t.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:a,InputObjectTypeExtension:a,InterfaceTypeDefinition:a,InterfaceTypeExtension:a,ObjectTypeDefinition:a,ObjectTypeExtension:a};function a(u){var c;const f=u.name.value;s[f]||(s[f]=Object.create(null));const h=(c=u.fields)!==null&&c!==void 0?c:[],m=s[f];for(const v of h){const D=v.name.value;wb(r[f],D)?n.reportError(new L(`Field "${f}.${D}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:v.name})):m[D]?n.reportError(new L(`Field "${f}.${D}" can only be defined once.`,{nodes:[m[D],v.name]})):m[D]=v.name}return!1}}function wb(n,t){return Je(n)||Ge(n)||hn(n)?n.getFields()[t]!=null:!1}function Nb(n){const t=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(r){const s=r.name.value;return t[s]?n.reportError(new L(`There can be only one fragment named "${s}".`,{nodes:[t[s],r.name]})):t[s]=r.name,!1}}}function od(n){const t=[];let r=Object.create(null);return{ObjectValue:{enter(){t.push(r),r=Object.create(null)},leave(){const s=t.pop();s||it(!1),r=s}},ObjectField(s){const a=s.name.value;r[a]?n.reportError(new L(`There can be only one input field named "${a}".`,{nodes:[r[a],s.name]})):r[a]=s.name}}}function Fb(n){const t=Object.create(null);return{OperationDefinition(r){const s=r.name;return s&&(t[s.value]?n.reportError(new L(`There can be only one operation named "${s.value}".`,{nodes:[t[s.value],s]})):t[s.value]=s),!1},FragmentDefinition:()=>!1}}function Cb(n){const t=n.getSchema(),r=Object.create(null),s=t?{query:t.getQueryType(),mutation:t.getMutationType(),subscription:t.getSubscriptionType()}:{};return{SchemaDefinition:a,SchemaExtension:a};function a(u){var c;const f=(c=u.operationTypes)!==null&&c!==void 0?c:[];for(const h of f){const m=h.operation,v=r[m];s[m]?n.reportError(new L(`Type for ${m} already defined in the schema. It cannot be redefined.`,{nodes:h})):v?n.reportError(new L(`There can be only one ${m} type in schema.`,{nodes:[v,h]})):r[m]=h}return!1}}function Ob(n){const t=Object.create(null),r=n.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(a){const u=a.name.value;if(r!=null&&r.getType(u)){n.reportError(new L(`Type "${u}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:a.name}));return}return t[u]?n.reportError(new L(`There can be only one type named "${u}".`,{nodes:[t[u],a.name]})):t[u]=a.name,!1}}function xb(n){return{OperationDefinition(t){var r;const s=(r=t.variableDefinitions)!==null&&r!==void 0?r:[],a=Au(s,u=>u.variable.name.value);for(const[u,c]of a)c.length>1&&n.reportError(new L(`There can be only one variable named "$${u}".`,{nodes:c.map(f=>f.variable.name)}))}}}function kb(n){let t={};return{OperationDefinition:{enter(){t={}}},VariableDefinition(r){t[r.variable.name.value]=r},ListValue(r){const s=AA(n.getParentInputType());if(!Dn(s))return ar(n,r),!1},ObjectValue(r){const s=hr(n.getInputType());if(!hn(s))return ar(n,r),!1;const a=dr(r.fields,u=>u.name.value);for(const u of Object.values(s.getFields()))if(!a[u.name]&&IA(u)){const f=G(u.type);n.reportError(new L(`Field "${s.name}.${u.name}" of required type "${f}" was not provided.`,{nodes:r}))}s.isOneOf&&Rb(n,r,s,a,t)},ObjectField(r){const s=hr(n.getParentInputType());if(!n.getInputType()&&hn(s)){const u=mr(r.name.value,Object.keys(s.getFields()));n.reportError(new L(`Field "${r.name.value}" is not defined by type "${s.name}".`+zt(u),{nodes:r}))}},NullValue(r){const s=n.getInputType();Ce(s)&&n.reportError(new L(`Expected value of type "${G(s)}", found ${Ze(r)}.`,{nodes:r}))},EnumValue:r=>ar(n,r),IntValue:r=>ar(n,r),FloatValue:r=>ar(n,r),StringValue:r=>ar(n,r),BooleanValue:r=>ar(n,r)}}function ar(n,t){const r=n.getInputType();if(!r)return;const s=hr(r);if(!Pr(s)){const a=G(r);n.reportError(new L(`Expected value of type "${a}", found ${Ze(t)}.`,{nodes:t}));return}try{if(s.parseLiteral(t,void 0)===void 0){const u=G(r);n.reportError(new L(`Expected value of type "${u}", found ${Ze(t)}.`,{nodes:t}))}}catch(a){const u=G(r);a instanceof L?n.reportError(a):n.reportError(new L(`Expected value of type "${u}", found ${Ze(t)}; `+a.message,{nodes:t,originalError:a}))}}function Rb(n,t,r,s,a){var u;const c=Object.keys(s);if(c.length!==1){n.reportError(new L(`OneOf Input Object "${r.name}" must specify exactly one key.`,{nodes:[t]}));return}const h=(u=s[c[0]])===null||u===void 0?void 0:u.value,m=!h||h.kind===T.NULL,v=h?.kind===T.VARIABLE;if(m){n.reportError(new L(`Field "${r.name}.${c[0]}" must be non-null.`,{nodes:[t]}));return}if(v){const D=h.name.value;a[D].type.kind!==T.NON_NULL_TYPE&&n.reportError(new L(`Variable "${D}" must be non-nullable to be used for OneOf Input Object "${r.name}".`,{nodes:[t]}))}}function Lb(n){return{VariableDefinition(t){const r=mt(n.getSchema(),t.type);if(r!==void 0&&!mu(r)){const s=t.variable.name.value,a=Ze(t.type);n.reportError(new L(`Variable "$${s}" cannot be non-input type "${a}".`,{nodes:t.type}))}}}}function Bb(n){let t=Object.create(null);return{OperationDefinition:{enter(){t=Object.create(null)},leave(r){const s=n.getRecursiveVariableUsages(r);for(const{node:a,type:u,defaultValue:c,parentType:f}of s){const h=a.name.value,m=t[h];if(m&&u){const v=n.getSchema(),D=mt(v,m.type);if(D&&!Pb(v,D,m.defaultValue,u,c)){const b=G(D),k=G(u);n.reportError(new L(`Variable "$${h}" of type "${b}" used in position expecting type "${k}".`,{nodes:[m,a]}))}hn(f)&&f.isOneOf&&yu(D)&&n.reportError(new L(`Variable "$${h}" is of type "${D}" but must be non-nullable to be used for OneOf Input Object "${f}".`,{nodes:[m,a]}))}}}},VariableDefinition(r){t[r.variable.name.value]=r}}}function Pb(n,t,r,s,a){if(Ce(s)&&!Ce(t)){if(!(r!=null&&r.kind!==T.NULL)&&!(a!==void 0))return!1;const f=s.ofType;return _i(n,t,f)}return _i(n,t,s)}const Ub=Object.freeze([HA]);Object.freeze([PA,Fb,JA,_b,Zp,VA,Lb,vb,UA,Nb,YA,ZA,lb,XA,xb,KA,eb,Kp,ad,GA,sd,kb,gb,Bb,tb,od,...Ub]);const Mb=Object.freeze([zA,Cb,Ob,Sb,Ib,Ab,bb,Zp,Kp,ad,fb,Xp,sd,od,id]);class $b{constructor(t,r){this._ast=t,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=r}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(t){this._onError(t)}getDocument(){return this._ast}getFragment(t){let r;if(this._fragments)r=this._fragments;else{r=Object.create(null);for(const s of this.getDocument().definitions)s.kind===T.FRAGMENT_DEFINITION&&(r[s.name.value]=s);this._fragments=r}return r[t]}getFragmentSpreads(t){let r=this._fragmentSpreads.get(t);if(!r){r=[];const s=[t];let a;for(;a=s.pop();)for(const u of a.selections)u.kind===T.FRAGMENT_SPREAD?r.push(u):u.selectionSet&&s.push(u.selectionSet);this._fragmentSpreads.set(t,r)}return r}getRecursivelyReferencedFragments(t){let r=this._recursivelyReferencedFragments.get(t);if(!r){r=[];const s=Object.create(null),a=[t.selectionSet];let u;for(;u=a.pop();)for(const c of this.getFragmentSpreads(u)){const f=c.name.value;if(s[f]!==!0){s[f]=!0;const h=this.getFragment(f);h&&(r.push(h),a.push(h.selectionSet))}}this._recursivelyReferencedFragments.set(t,r)}return r}}class Vb extends $b{constructor(t,r,s){super(t,s),this._schema=r}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function Gb(n,t,r=Mb){const s=[],a=new Vb(n,t,c=>{s.push(c)}),u=r.map(c=>c(a));return Np(n,mA(u)),s}function qb(n){const t=Gb(n);if(t.length!==0)throw new Error(t.map(r=>r.message).join(`

`))}function jb(n,t){xt(n)&&xt(n.__schema)||me(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${G(n)}.`);const r=n.__schema,s=or(r.types,F=>F.name,F=>b(F));for(const F of[...ea,...ta])s[F.name]&&(s[F.name]=F);const a=r.queryType?v(r.queryType):null,u=r.mutationType?v(r.mutationType):null,c=r.subscriptionType?v(r.subscriptionType):null,f=r.directives?r.directives.map(ue):[];return new Hp({description:r.description,query:a,mutation:u,subscription:c,types:Object.values(s),directives:f,assumeValid:void 0});function h(F){if(F.kind===Ne.LIST){const q=F.ofType;if(!q)throw new Error("Decorated type deeper than introspection query.");return new fn(h(q))}if(F.kind===Ne.NON_NULL){const q=F.ofType;if(!q)throw new Error("Decorated type deeper than introspection query.");const Oe=h(q);return new ce(_A(Oe))}return m(F)}function m(F){const q=F.name;if(!q)throw new Error(`Unknown type reference: ${G(F)}.`);const Oe=s[q];if(!Oe)throw new Error(`Invalid or incomplete schema, unknown type: ${q}. Ensure that a full introspection query is used in order to build a client schema.`);return Oe}function v(F){return DA(m(F))}function D(F){return TA(m(F))}function b(F){if(F!=null&&F.name!=null&&F.kind!=null)switch(F.kind){case Ne.SCALAR:return k(F);case Ne.OBJECT:return B(F);case Ne.INTERFACE:return U(F);case Ne.UNION:return X(F);case Ne.ENUM:return he(F);case Ne.INPUT_OBJECT:return K(F)}const q=G(F);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${q}.`)}function k(F){return new kt({name:F.name,description:F.description,specifiedByURL:F.specifiedByURL})}function I(F){if(F.interfaces===null&&F.kind===Ne.INTERFACE)return[];if(!F.interfaces){const q=G(F);throw new Error(`Introspection result missing interfaces: ${q}.`)}return F.interfaces.map(D)}function B(F){return new gt({name:F.name,description:F.description,interfaces:()=>I(F),fields:()=>Q(F)})}function U(F){return new Us({name:F.name,description:F.description,interfaces:()=>I(F),fields:()=>Q(F)})}function X(F){if(!F.possibleTypes){const q=G(F);throw new Error(`Introspection result missing possibleTypes: ${q}.`)}return new Ms({name:F.name,description:F.description,types:()=>F.possibleTypes.map(v)})}function he(F){if(!F.enumValues){const q=G(F);throw new Error(`Introspection result missing enumValues: ${q}.`)}return new Ur({name:F.name,description:F.description,values:or(F.enumValues,q=>q.name,q=>({description:q.description,deprecationReason:q.deprecationReason}))})}function K(F){if(!F.inputFields){const q=G(F);throw new Error(`Introspection result missing inputFields: ${q}.`)}return new $s({name:F.name,description:F.description,fields:()=>P(F.inputFields),isOneOf:F.isOneOf})}function Q(F){if(!F.fields)throw new Error(`Introspection result missing fields: ${G(F)}.`);return or(F.fields,q=>q.name,oe)}function oe(F){const q=h(F.type);if(!Cp(q)){const Oe=G(q);throw new Error(`Introspection must provide output type for fields, but received: ${Oe}.`)}if(!F.args){const Oe=G(F);throw new Error(`Introspection result missing field args: ${Oe}.`)}return{description:F.description,deprecationReason:F.deprecationReason,type:q,args:P(F.args)}}function P(F){return or(F,q=>q.name,$)}function $(F){const q=h(F.type);if(!mu(q)){const Pe=G(q);throw new Error(`Introspection must provide input type for arguments, but received: ${Pe}.`)}const Oe=F.defaultValue!=null?Jt(uA(F.defaultValue),q):void 0;return{description:F.description,type:q,defaultValue:Oe,deprecationReason:F.deprecationReason}}function ue(F){if(!F.args){const q=G(F);throw new Error(`Introspection result missing directive args: ${q}.`)}if(!F.locations){const q=G(F);throw new Error(`Introspection result missing directive locations: ${q}.`)}return new Rt({name:F.name,description:F.description,isRepeatable:F.isRepeatable,locations:F.locations.slice(),args:P(F.args)})}}function Yb(n,t,r){var s,a,u,c;const f=[],h=Object.create(null),m=[];let v;const D=[];for(const w of t.definitions)if(w.kind===T.SCHEMA_DEFINITION)v=w;else if(w.kind===T.SCHEMA_EXTENSION)D.push(w);else if(Ri(w))f.push(w);else if(Du(w)){const W=w.name.value,V=h[W];h[W]=V?V.concat([w]):[w]}else w.kind===T.DIRECTIVE_DEFINITION&&m.push(w);if(Object.keys(h).length===0&&f.length===0&&m.length===0&&D.length===0&&v==null)return n;const b=Object.create(null);for(const w of n.types)b[w.name]=he(w);for(const w of f){var k;const W=w.name.value;b[W]=(k=Rf[W])!==null&&k!==void 0?k:kn(w)}const I={query:n.query&&U(n.query),mutation:n.mutation&&U(n.mutation),subscription:n.subscription&&U(n.subscription),...v&&Oe([v]),...Oe(D)};return{description:(s=v)===null||s===void 0||(a=s.description)===null||a===void 0?void 0:a.value,...I,types:Object.values(b),directives:[...n.directives.map(X),...m.map(Lt)],extensions:Object.create(null),astNode:(u=v)!==null&&u!==void 0?u:n.astNode,extensionASTNodes:n.extensionASTNodes.concat(D),assumeValid:(c=r?.assumeValid)!==null&&c!==void 0?c:!1};function B(w){return Dn(w)?new fn(B(w.ofType)):Ce(w)?new ce(B(w.ofType)):U(w)}function U(w){return b[w.name]}function X(w){const W=w.toConfig();return new Rt({...W,args:Ft(W.args,q)})}function he(w){if(kA(w)||FA(w))return w;if(Qt(w))return oe(w);if(Je(w))return P(w);if(Ge(w))return $(w);if(Jn(w))return ue(w);if(st(w))return Q(w);if(hn(w))return K(w);it(!1,"Unexpected type: "+G(w))}function K(w){var W;const V=w.toConfig(),j=(W=h[V.name])!==null&&W!==void 0?W:[];return new $s({...V,fields:()=>({...Ft(V.fields,Ee=>({...Ee,type:B(Ee.type)})),...xn(j)}),extensionASTNodes:V.extensionASTNodes.concat(j)})}function Q(w){var W;const V=w.toConfig(),j=(W=h[w.name])!==null&&W!==void 0?W:[];return new Ur({...V,values:{...V.values,...Tn(j)},extensionASTNodes:V.extensionASTNodes.concat(j)})}function oe(w){var W;const V=w.toConfig(),j=(W=h[V.name])!==null&&W!==void 0?W:[];let Ee=V.specifiedByURL;for(const De of j){var Ue;Ee=(Ue=Lf(De))!==null&&Ue!==void 0?Ue:Ee}return new kt({...V,specifiedByURL:Ee,extensionASTNodes:V.extensionASTNodes.concat(j)})}function P(w){var W;const V=w.toConfig(),j=(W=h[V.name])!==null&&W!==void 0?W:[];return new gt({...V,interfaces:()=>[...w.getInterfaces().map(U),...vr(j)],fields:()=>({...Ft(V.fields,F),...On(j)}),extensionASTNodes:V.extensionASTNodes.concat(j)})}function $(w){var W;const V=w.toConfig(),j=(W=h[V.name])!==null&&W!==void 0?W:[];return new Us({...V,interfaces:()=>[...w.getInterfaces().map(U),...vr(j)],fields:()=>({...Ft(V.fields,F),...On(j)}),extensionASTNodes:V.extensionASTNodes.concat(j)})}function ue(w){var W;const V=w.toConfig(),j=(W=h[V.name])!==null&&W!==void 0?W:[];return new Ms({...V,types:()=>[...w.getTypes().map(U),...Ht(j)],extensionASTNodes:V.extensionASTNodes.concat(j)})}function F(w){return{...w,type:B(w.type),args:w.args&&Ft(w.args,q)}}function q(w){return{...w,type:B(w.type)}}function Oe(w){const W={};for(const j of w){var V;const Ee=(V=j.operationTypes)!==null&&V!==void 0?V:[];for(const Ue of Ee)W[Ue.operation]=Pe(Ue.type)}return W}function Pe(w){var W;const V=w.name.value,j=(W=Rf[V])!==null&&W!==void 0?W:b[V];if(j===void 0)throw new Error(`Unknown type: "${V}".`);return j}function Cn(w){return w.kind===T.LIST_TYPE?new fn(Cn(w.type)):w.kind===T.NON_NULL_TYPE?new ce(Cn(w.type)):Pe(w)}function Lt(w){var W;return new Rt({name:w.name.value,description:(W=w.description)===null||W===void 0?void 0:W.value,locations:w.locations.map(({value:V})=>V),isRepeatable:w.repeatable,args:Bt(w.arguments),astNode:w})}function On(w){const W=Object.create(null);for(const Ee of w){var V;const Ue=(V=Ee.fields)!==null&&V!==void 0?V:[];for(const De of Ue){var j;W[De.name.value]={type:Cn(De.type),description:(j=De.description)===null||j===void 0?void 0:j.value,args:Bt(De.arguments),deprecationReason:xs(De),astNode:De}}}return W}function Bt(w){const W=w??[],V=Object.create(null);for(const Ee of W){var j;const Ue=Cn(Ee.type);V[Ee.name.value]={type:Ue,description:(j=Ee.description)===null||j===void 0?void 0:j.value,defaultValue:Jt(Ee.defaultValue,Ue),deprecationReason:xs(Ee),astNode:Ee}}return V}function xn(w){const W=Object.create(null);for(const Ee of w){var V;const Ue=(V=Ee.fields)!==null&&V!==void 0?V:[];for(const De of Ue){var j;const Rn=Cn(De.type);W[De.name.value]={type:Rn,description:(j=De.description)===null||j===void 0?void 0:j.value,defaultValue:Jt(De.defaultValue,Rn),deprecationReason:xs(De),astNode:De}}}return W}function Tn(w){const W=Object.create(null);for(const Ee of w){var V;const Ue=(V=Ee.values)!==null&&V!==void 0?V:[];for(const De of Ue){var j;W[De.name.value]={description:(j=De.description)===null||j===void 0?void 0:j.value,deprecationReason:xs(De),astNode:De}}}return W}function vr(w){return w.flatMap(W=>{var V,j;return(V=(j=W.interfaces)===null||j===void 0?void 0:j.map(Pe))!==null&&V!==void 0?V:[]})}function Ht(w){return w.flatMap(W=>{var V,j;return(V=(j=W.types)===null||j===void 0?void 0:j.map(Pe))!==null&&V!==void 0?V:[]})}function kn(w){var W;const V=w.name.value,j=(W=h[V])!==null&&W!==void 0?W:[];switch(w.kind){case T.OBJECT_TYPE_DEFINITION:{var Ee;const sn=[w,...j];return new gt({name:V,description:(Ee=w.description)===null||Ee===void 0?void 0:Ee.value,interfaces:()=>vr(sn),fields:()=>On(sn),astNode:w,extensionASTNodes:j})}case T.INTERFACE_TYPE_DEFINITION:{var Ue;const sn=[w,...j];return new Us({name:V,description:(Ue=w.description)===null||Ue===void 0?void 0:Ue.value,interfaces:()=>vr(sn),fields:()=>On(sn),astNode:w,extensionASTNodes:j})}case T.ENUM_TYPE_DEFINITION:{var De;const sn=[w,...j];return new Ur({name:V,description:(De=w.description)===null||De===void 0?void 0:De.value,values:Tn(sn),astNode:w,extensionASTNodes:j})}case T.UNION_TYPE_DEFINITION:{var Rn;const sn=[w,...j];return new Ms({name:V,description:(Rn=w.description)===null||Rn===void 0?void 0:Rn.value,types:()=>Ht(sn),astNode:w,extensionASTNodes:j})}case T.SCALAR_TYPE_DEFINITION:{var Gr;return new kt({name:V,description:(Gr=w.description)===null||Gr===void 0?void 0:Gr.value,specifiedByURL:Lf(w),astNode:w,extensionASTNodes:j})}case T.INPUT_OBJECT_TYPE_DEFINITION:{var Pt;const sn=[w,...j];return new $s({name:V,description:(Pt=w.description)===null||Pt===void 0?void 0:Pt.value,fields:()=>xn(sn),astNode:w,extensionASTNodes:j,isOneOf:Wb(w)})}}}}const Rf=dr([...ea,...ta],n=>n.name);function xs(n){const t=Ci(Gp,n);return t?.reason}function Lf(n){const t=Ci(qp,n);return t?.url}function Wb(n){return!!Ci(jp,n)}function Jb(n,t){n!=null&&n.kind===T.DOCUMENT||me(!1,"Must provide valid Document AST."),t?.assumeValid!==!0&&t?.assumeValidSDL!==!0&&qb(n);const s=Yb({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},n,t);if(s.astNode==null)for(const u of s.types)switch(u.name){case"Query":s.query=u;break;case"Mutation":s.mutation=u;break;case"Subscription":s.subscription=u;break}const a=[...s.directives,...Vr.filter(u=>s.directives.every(c=>c.name!==u.name))];return new Hp({...s,directives:a})}function zb(n,t){const r=oA(n,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return Jb(r,{assumeValidSDL:void 0,assumeValid:void 0})}class Qb{mapping;constructor(t){this.mapping=t}getFor(t){return this.mapping.get(t.name)}}var Ai;(function(n){n.UNION="union",n.ARGUMENT="argument",n.FIELD="field"})(Ai||(Ai={}));function Hb(n){const t=new Map;return Xb(n,r=>{Je(r)&&Kb(r,s=>{const a=Ho(s.type);Ro(t,a).references.push({kind:Ai.FIELD,parent:r,by:s}),Zb(s,c=>{const f=Ho(c.type);Ro(t,f).references.push({kind:Ai.ARGUMENT,field:s,type:r,by:c})})}),Jn(r)&&r.getTypes().forEach(s=>{Ro(t,s).references.push({kind:Ai.UNION,by:r})})}),new Qb(t)}function Xb(n,t){Object.entries(n.getTypeMap()).forEach(([,r])=>{r.name.startsWith("__")||t(r)})}function Kb(n,t){Object.entries(n.getFields()).forEach(([,r])=>{t(r)})}function Zb(n,t){Object.entries(n.args).forEach(([,r])=>{t(r)})}function Ro(n,t){let r=n.get(t.name);return r||(r={references:[]},n.set(t.name,r)),r}function Ho(n){return Ce(n)||Dn(n)?Ho(n.ofType):n}const Bf=`schema {
  query: RootQueryType
  mutation: RootMutationType
  subscription: RootSubscriptionType
}

type Action {
  """Id of action"""
  actionId: Int!

  """Action page this action was collected at"""
  actionPage: ActionPage!

  """Action type"""
  actionType: String!

  """Campaign this action was collected in"""
  campaign: Campaign!

  """supporter contact data"""
  contact: Contact!

  """Timestamp of creation"""
  createdAt: NaiveDateTime!

  """Action custom fields (as stringified JSON)"""
  customFields: Json!

  """Donation specific data"""
  donation: Donation

  """Deprecated, use customFields"""
  fields: [CustomField!]! @deprecated(reason: "use custom_fields")

  """Consents, privacy data of this action"""
  privacy: Consent!

  """UTM codes"""
  tracking: Tracking
}

type ActionCustomFields {
  """id of action"""
  actionId: Int!

  """type of action"""
  actionType: String!

  """area of supporter that did the action"""
  area: String

  """custom fields as stringified json"""
  customFields: Json!
  fields: [CustomField!]! @deprecated(reason: "use custom_fields")

  """creation timestamp"""
  insertedAt: NaiveDateTime!
}

"""
Custom field added to action. For signature it can be contact, for mail it can be subject and body
"""
input ActionInput {
  """Action Type"""
  actionType: String!

  """Custom fields added to action"""
  customFields: Json

  """Donation payload"""
  donation: DonationActionInput

  """MTT payload"""
  mtt: MttActionInput

  """Test mode"""
  testing: Boolean
}

interface ActionPage {
  """Campaign this action page belongs to."""
  campaign: Campaign!

  """Config JSON of this action page"""
  config: Json!

  """Id"""
  id: Int!

  """List of steps in journey"""
  journey: [String!]! @deprecated(reason: "moved under config")

  """Is live?"""
  live: Boolean!

  """Locale for the widget, in i18n format"""
  locale: String!

  """Name where the widget is hosted"""
  name: String!

  """Org the action page belongs to"""
  org: Org!

  """Thank you email templated of this Action Page"""
  thankYouTemplate: String

  """A reference to thank you email template of this ActionPage"""
  thankYouTemplateRef: String
}

"""ActionPage input"""
input ActionPageInput {
  """JSON string containing Action Page config"""
  config: Json

  """Collected PII is processed even with no opt-in"""
  delivery: Boolean

  """
  Extra supporter count. If you want to add a number of signatories you have offline or kept in another system, you can specify the number here.
  """
  extraSupporters: Int

  """2-letter, lowercase, code of ActionPage language"""
  locale: String

  """
  Unique NAME identifying ActionPage.
  
  Does not have to exist, must be unique. Can be a 'technical' identifier
  scoped to particular organization, so it does not have to change when the
  slugs/names change (eg. some.org/1234). However, frontend Widget can
  ask for ActionPage by it's current location.href (but without https://), in which case it is useful
  to make this url match the real widget location.
  """
  name: String

  """Supporter confirm email template of this ActionPage"""
  supporterConfirmTemplate: String

  """Thank you email template of this ActionPage"""
  thankYouTemplate: String
}

enum ActionPageStatus {
  """This action page received actions lately"""
  ACTIVE

  """This action page did not receive actions lately"""
  STALLED

  """
  This action page is ready to receive first action or is stalled for over 1 year
  """
  STANDBY
}

"""Count of actions for particular action type"""
type ActionTypeCount {
  """action type"""
  actionType: String!

  """count of actions of action type"""
  count: Int!
}

type ActivateKeyResult {
  status: Status!
}

input AddKeyInput {
  """Name of the key"""
  name: String!

  """Public part of the key (base64url)"""
  public: String!
}

"""Address type which can hold different addres fields."""
input AddressInput {
  """Country code (two-letter)."""
  country: String

  """Locality, which can be a city/town/village"""
  locality: String

  """Postcode, in format correct for country locale"""
  postcode: String

  """Region, being province, voyevodship, county"""
  region: String

  """Street name"""
  street: String

  """Street number"""
  streetNumber: String
}

"""Api token metadata"""
type ApiToken {
  expiresAt: NaiveDateTime!
}

type Application {
  logLevel: String
  name: String
  version: String
}

"""Count of actions for particular action type"""
type AreaCount {
  """area"""
  area: String!

  """count of supporters in this area"""
  count: Int!
}

interface Campaign {
  """
  Fetch public actions. Can be used to display recent comments for example.
  
  To allow-list action fields to be public, \`campaign.public_actions\` must be set to a list of strings in form
  action_type:custom_field_name, eg: \`["signature:comment"]\`. XXX this cannot be set in API, you need to set in backend.
  """
  actions(
    """Specify action type to return"""
    actionType: String!

    """Limit the number of returned actions, default is 10, max is 100)"""
    limit: Int! = 10
  ): PublicActionsResult!

  """Action processing settings for this campaign"""
  campaignProcessing: CampaignProcessing

  """Custom config map"""
  config: Json!

  """Schema for contact personal information"""
  contactSchema: ContactSchema!

  """External ID (if set)"""
  externalId: Int

  """Campaign id"""
  id: Int!

  """Internal name of the campaign"""
  name: String!

  """Lead org"""
  org: Org!

  """Statistics"""
  stats: CampaignStats!

  """Current status of the campaign"""
  status: CampaignStatus!

  """List MTT targets of this campaign"""
  targets: [Target]

  """Full, official name of the campaign"""
  title: String!
}

"""Campaign content changed in mutations"""
input CampaignInput {
  """Action pages of this campaign"""
  actionPages: [ActionPageInput!]

  """Custom config as stringified JSON map"""
  config: Json

  """Schema for contact personal information"""
  contactSchema: ContactSchema

  """
  Campaign external_id. If provided, it will be used to find campaign. Can be used to rename a campaign
  """
  externalId: Int

  """MTT configuration"""
  mtt: CampaignMttInput

  """Campaign short name"""
  name: String

  """Current status of the campaign"""
  status: CampaignStatus

  """Supporter confirmation enabled"""
  supporterConfirm: Boolean

  """Supporter confirmation template name"""
  supporterConfirmTemplate: String

  """Campaign human readable title"""
  title: String
}

type CampaignMtt {
  """List of additional contacts that will be added to CC."""
  ccContacts: [String]

  """If checked, the sender will be added to CC."""
  ccSender: Boolean

  """
  This is last day and end hour of the campaign. Note, every day of the campaign the end hour will be same.
  """
  endAt: DateTime!

  """
  If email templates are used to create MTT, use this template (works like thank you email templates).
  Otherwise, the raw text that is send with MTT action will make a plain text email.
  """
  messageTemplate: String

  """
  This is first day and start hour of the campaign. Note, every day of the campaign the start hour will be same.
  """
  startAt: DateTime!

  """
  A test target email (yourself) where test mtt actions will be sent (instead to real targets)
  """
  testEmail: String
}

input CampaignMttInput {
  """List of additional contacts that will be added to CC."""
  ccContacts: [String]

  """If checked, the sender will be added to CC."""
  ccSender: Boolean

  """
  This is last day and end hour of the campaign. Note, every day of the campaign the end hour will be same.
  """
  endAt: DateTime

  """
  If email templates are used to create MTT, use this template (works like thank you email templates).
  Otherwise, the raw text that is send with MTT action will make a plain text email.
  """
  messageTemplate: String

  """
  This is first day and start hour of the campaign. Note, every day of the campaign the start hour will be same.
  """
  startAt: DateTime

  """
  A test target email (yourself) where test mtt actions will be sent (instead to real targets)
  """
  testEmail: String
}

type CampaignProcessing {
  """Enable supporter confirmation"""
  supporterConfirm: Boolean

  """Supporter confirmation template name"""
  supporterConfirmTemplate: String
}

"""Campaign statistics"""
type CampaignStats {
  """Action counts per action types (with duplicates)"""
  actionCount: [ActionTypeCount!]!

  """Unique action tagers count"""
  supporterCount: Int!

  """Unique action takers by area"""
  supporterCountByArea: [AreaCount!]!

  """Unique action takers by org"""
  supporterCountByOrg: [OrgCount!]!

  """Unique supporter count not including the ones collected by org_name"""
  supporterCountByOthers(
    """Org name to exclude from counting supporters"""
    orgName: String!
  ): Int!
}

enum CampaignStatus {
  CLOSED
  DRAFT
  IGNORED
  LIVE
}

type ChangeUserStatus {
  status: Status!
}

type Confirm {
  """Secret code/PIN of the confirm"""
  code: String!

  """Who created the confirm"""
  creator: User

  """Email the confirm is sent to"""
  email: String

  """Message attached to the confirm"""
  message: String

  """Object id that confirmable action refers to"""
  objectId: Int
}

input ConfirmInput {
  """secret code of this confirm"""
  code: String!

  """email that confirm was assigned for"""
  email: String

  """object_id that this confirm refers to"""
  objectId: Int
}

type ConfirmResult {
  """Action page if its an object of confirm"""
  actionPage: ActionPage

  """Campaign page if its an object of confirm"""
  campaign: Campaign

  """A message attached to the confirm"""
  message: String

  """Org if its an object of confirm"""
  org: Org

  """
  Status of Confirm: Success, Confirming (waiting for confirmation), Noop
  """
  status: Status!
}

"""GDPR consent data for this org"""
type Consent {
  """Email status, whether it's normal, DOI, or bouncing"""
  emailStatus: EmailStatus!

  """When did the email status change last time"""
  emailStatusChanged: NaiveDateTime

  """Consent timestamp"""
  givenAt: NaiveDateTime!

  """communication (email) opt-in"""
  optIn: Boolean

  """
  This action contained consent (if false, it could be a share action that is attached to another action containing a consent)
  """
  withConsent: Boolean!
}

"""GDPR consent data structure"""
input ConsentInput {
  """Opt in to the campaign leader"""
  leadOptIn: Boolean

  """
  Has contact consented to receiving communication from widget owner? Null: not asked
  """
  optIn: Boolean
}

type Contact {
  """Contact ref (fingerprint) of supporter"""
  contactRef: ID!

  """Encryption nonce value"""
  nonce: String

  """Stringified json with PII optionally encrypted"""
  payload: String!

  """Public key used to encrypt this action"""
  publicKey: KeyIds

  """Signing key used to encrypt this action"""
  signKey: KeyIds
}

"""Contact information"""
input ContactInput {
  """Contacts address"""
  address: AddressInput

  """Date of birth in format YYYY-MM-DD"""
  birthDate: Date

  """Email"""
  email: String

  """First name (when you provide full name split into first and last)"""
  firstName: String

  """Last name (when you provide full name split into first and last)"""
  lastName: String

  """Full name"""
  name: String

  """Nationality information"""
  nationality: NationalityInput

  """Contacts phone number"""
  phone: String
}

type ContactReference {
  """Contact's reference"""
  contactRef: String!

  """Contacts first name"""
  firstName: String
}

enum ContactSchema {
  BASIC
  ECI
  IT_CI
  POPULAR_INITIATIVE
}

"""Custom field with a key and value."""
type CustomField {
  key: String!
  value: String!
}

"""Custom field with a key and value. Both are strings."""
input CustomFieldInput {
  key: String!

  """
  Unused. To mark action_type/key as transient, use campaign.transient_actions list
  """
  transient: Boolean
  value: String!
}

"""
The \`Date\` scalar type represents a date. The Date appears in a JSON
response as an ISO8601 formatted string, without a time component.
"""
scalar Date

"""
The \`DateTime\` scalar type represents a date and time in the UTC
timezone. The DateTime appears in a JSON response as an ISO8601 formatted
string, including UTC timezone ("Z"). The parsed date and time string will
be converted to UTC if there is an offset.
"""
scalar DateTime

type DeleteUserResult {
  status: Status!
}

type Donation {
  """Provide amount of this donation, in smallest units for currency"""
  amount: Int!

  """Provide currency of this donation"""
  currency: String!

  """Donation frequency unit"""
  frequencyUnit: DonationFrequencyUnit!

  """Donation data"""
  payload: Json!
  schema: DonationSchema
}

input DonationActionInput {
  """Provide amount of this donation, in smallest units for currency"""
  amount: Int

  """Provide currency of this donation"""
  currency: String

  """How often is the recurring donation collected"""
  frequencyUnit: DonationFrequencyUnit

  """Custom JSON data"""
  payload: Json!

  """Provide payload schema to validate, eg. stripe_payment_intent"""
  schema: DonationSchema
}

enum DonationFrequencyUnit {
  DAILY
  MONTHLY
  ONE_OFF
  WEEKLY
}

enum DonationSchema {
  STRIPE_PAYMENT_INTENT
}

enum EmailStatus {
  """This email was contacted before"""
  ACTIVE

  """This email was used and blocked"""
  BLOCKED

  """This email was used and bounced"""
  BOUNCE

  """The user has received a DOI on this email and accepted it"""
  DOUBLE_OPT_IN

  """This email was disabled and should not be contacted"""
  INACTIVE

  """An unused email"""
  NONE

  """This email was used and marked spam"""
  SPAM

  """This email was used and user unsubscribed"""
  UNSUB
}

input EmailTemplateInput {
  """Html part body"""
  html: String

  """template locale"""
  locale: String

  """template name"""
  name: String!

  """Subject text"""
  subject: String

  """Plaintext part body"""
  text: String
}

input GenKeyInput {
  """Name of the key"""
  name: String!
}

type JoinOrgResult {
  """Org that was joined"""
  org: Org!

  """Result of joining - succes or pending confirmation"""
  status: Status!
}

scalar Json

"""Encryption or sign key with integer id (database)"""
type Key {
  """Is it active?"""
  active: Boolean!

  """Is it expired?"""
  expired: Boolean!

  """When the key was expired, in UTC"""
  expiredAt: NaiveDateTime

  """Key id"""
  id: Int!

  """Name of the key (human readable)"""
  name: String!

  """Public part of the key (base64url)"""
  public: String!
}

type KeyIds {
  """Key id"""
  id: Int!

  """Public part of the key (base64url)"""
  public: String!
}

type KeyWithPrivate {
  """Is it active?"""
  active: Boolean!

  """Is it expired?"""
  expired: Boolean!

  """When the key was expired, in UTC"""
  expiredAt: NaiveDateTime

  """Key id"""
  id: Int!

  """Name of the key (human readable)"""
  name: String!

  """Private (Secret) part of the key (base64url)"""
  private: String!

  """Public part of the key (base64url)"""
  public: String!
}

type LaunchActionPageResult {
  status: Status!
}

input MttActionInput {
  """Body"""
  body: String

  """Files to attach (images allowed)"""
  files: [String!]

  """Subject line"""
  subject: String

  """Target ids"""
  targets: [String!]!
}

type RootMutationType {
  """Accept a confirm on behalf of organisation."""
  acceptOrgConfirm(
    """Confirm content"""
    confirm: ConfirmInput!

    """Org name"""
    name: String!
  ): ConfirmResult!

  """Accept a confirm by user"""
  acceptUserConfirm(
    """Confirm data"""
    confirm: ConfirmInput!
  ): ConfirmResult!

  """
  A separate key activate operation, because you also need to add the key to receiving system before it is used
  """
  activateKey(
    """Key id"""
    id: Int!
    orgName: String!
  ): ActivateKeyResult!

  """Adds an action referencing contact data via contactRef"""
  addAction(
    """Action data"""
    action: ActionInput!
    actionPageId: Int!

    """Contact reference"""
    contactRef: ID!

    """Tracking codes (UTM_*)"""
    tracking: TrackingInput
  ): ContactReference!

  """Adds an action with contact data"""
  addActionContact(
    """Action data"""
    action: ActionInput!
    actionPageId: Int!

    """GDPR communication opt"""
    contact: ContactInput!

    """Links previous actions with just reference to this supporter data"""
    contactRef: ID

    """Signature action data"""
    privacy: ConsentInput!

    """Tracking codes (UTM_*)"""
    tracking: TrackingInput
  ): ContactReference!
  addActionPage(
    """Name of campaign where page is created"""
    campaignName: String!

    """Action Page attributes"""
    input: ActionPageInput!

    """Org owner of new Action Page"""
    orgName: String!
  ): ActionPage!

  """Add a new campaign"""
  addCampaign(
    """Campaign content to be added"""
    input: CampaignInput!

    """Org that is lead of this campaign"""
    orgName: String!
  ): Campaign!

  """Add a key to encryption keys"""
  addKey(
    """key content"""
    input: AddKeyInput!

    """Name of organisation"""
    orgName: String!
  ): Key!

  """Add an org. Calling user  will become it's owner."""
  addOrg(
    """Contet of the org to be added"""
    input: OrgInput!
  ): Org!

  """Add user to org by email"""
  addOrgUser(
    """User content"""
    input: OrgUserInput!

    """Org name"""
    orgName: String!
  ): ChangeUserStatus!

  """
  Create stripe object using Stripe key associated with action page owning org.
  Pass any of paymentIntent, subscription, customer, price json params to be sent as-is to Stripe API. The result is a JSON returned by Stripe API or a GraphQL Error object.
  If you provide customer along payment intent or subscription, it will be first created, then their id will be added to params for the payment intent or subscription, so you can pack 2 Stripe API calls into one. You can do the same with price object in case of a subscription.
  """
  addStripeObject(
    actionPageId: Int!

    """Parameters for Stripe Customer creation"""
    customer: Json

    """Parameters for Stripe Payment Intent creation"""
    paymentIntent: Json

    """Parameters for Stripe Price creation"""
    price: Json

    """Parameters for Stripe Subscription creation"""
    subscription: Json

    """Use test stripe api keys"""
    testing: Boolean
  ): Json!

  """
  Stripe API - add a stripe payment intent, when donating to the action page specified by id
  """
  addStripePaymentIntent(
    """Donating to this page"""
    actionPageId: Int!

    """Contact reference of donating supporter"""
    contactRef: ID

    """payment intent content"""
    input: StripePaymentIntentInput!

    """Use test stripe api keys"""
    testing: Boolean
  ): Json!

  """
  Stripe API - add a stripe subscription, when donating to the action page specified by id
  """
  addStripeSubscription(
    """Donating to this page"""
    actionPageId: Int!

    """Contact reference of donating supporter"""
    contactRef: ID

    """subscription intent content"""
    input: StripeSubscriptionInput!

    """Use test stripe api keys"""
    testing: Boolean
  ): Json!

  """
  Adds a new Action Page based on another Action Page. Intended to be used to
  create a partner action page based off lead's one. Copies: campaign, locale, config, delivery flag
  """
  copyActionPage(
    """Name of Action Page this one is cloned from"""
    fromName: String!

    """New Action Page name"""
    name: String!

    """Org owner of new Action Page"""
    orgName: String!
  ): ActionPage!

  """
  Adds a new Action Page based on latest Action Page from campaign. Intended to be used to
  create a partner action page based off lead's one. Copies: campaign, locale, config, delivery flag
  """
  copyCampaignActionPage(
    """Name of Campaign from which the page is copied"""
    fromCampaignName: String!

    """New Action Page name"""
    name: String!

    """Org owner of new Action Page"""
    orgName: String!
  ): ActionPage!

  """Delete an action page"""
  deleteActionPage(
    """Action Page id"""
    id: Int

    """Action Page name"""
    name: String
  ): Status!

  """
  Delete a campaign.
  Deletion will be blocked if there are action pages with personal data (we never remove personal data unless via GDPR).
  """
  deleteCampaign(
    """by external_id"""
    externalId: Int

    """by id"""
    id: Int

    """by name"""
    name: String
  ): Status!

  """Delete an org"""
  deleteOrg(
    """Name of organisation to be deleted"""
    name: String!
  ): Status!
  deleteOrgUser(
    """users email"""
    email: String!

    """delete user from this org"""
    orgName: String!
  ): DeleteUserResult

  """Generate a new encryption key in org"""
  generateKey(
    input: GenKeyInput!

    """Name of organisation"""
    orgName: String!
  ): KeyWithPrivate!

  """Invite an user to org by email (can be not yet user!)"""
  inviteOrgUser(
    """user membership data"""
    input: OrgUserInput!

    """Optional message for invited user"""
    message: String

    """org name to invite to"""
    orgName: String!
  ): Confirm!

  """Try becoming a staffer of the org"""
  joinOrg(
    """Join the org of this name"""
    name: String!
  ): JoinOrgResult!

  """Sends a request to lead to set the page to live=true"""
  launchActionPage(
    """Optional message for approver"""
    message: String

    """Action Page name"""
    name: String!
  ): LaunchActionPageResult!

  """Link actions with refs to contact with contact reference"""
  linkActions(
    """Action Page id"""
    actionPageId: Int!

    """Contact reference"""
    contactRef: ID!

    """Link actions with these references (if unlinked to supporter)"""
    linkRefs: [String!]
  ): ContactReference!

  """Reject a confirm on behalf of organisation."""
  rejectOrgConfirm(
    """Confirm data"""
    confirm: ConfirmInput!

    """Org name"""
    name: String!
  ): ConfirmResult!

  """Reject a confirm by user"""
  rejectUserConfirm(
    """Confirm data"""
    confirm: ConfirmInput!
  ): ConfirmResult!

  """Requeue actions into one of processing destinations"""
  requeueActions(
    """Action Ids"""
    ids: [Int!]

    """Organization name"""
    orgName: String!

    """Destination queue"""
    queue: Queue!
  ): RequeueResult!
  resetApiToken: String!

  """Update an Action Page"""
  updateActionPage(
    """id of page to update"""
    id: Int

    """content of page to be update"""
    input: ActionPageInput!

    """name of page to update"""
    name: String
  ): ActionPage!

  """Updates an existing campaign."""
  updateCampaign(
    """Id of campaign to update"""
    id: Int

    """Campaign content to be updated"""
    input: CampaignInput!

    """Name of campaign to update (alterantive to id)"""
    name: String
  ): Campaign!

  """Updates an existing campaign."""
  updateCampaignProcessing(
    """Name of campaign to update"""
    name: String

    """Enable supporter confirmation"""
    supporterConfirm: Boolean

    """Supporter confirmation template name"""
    supporterConfirmTemplate: String
  ): Campaign!

  """Update an org"""
  updateOrg(
    """Content of org to be updated"""
    input: OrgInput!

    """
    Name of organisation, used for lookup, can't be used to change org name
    """
    name: String!
  ): PrivateOrg!

  """Update org processing settings"""
  updateOrgProcessing(
    """
    Should proca put action in a custom queue, so an external service can do this?
    """
    customActionConfirm: Boolean

    """
    Should proca put action in custom delivery queue, so an external service can sync it?
    """
    customActionDeliver: Boolean

    """
    Should proca put events in custom delivery queue, so an external service can sync it?
    """
    customEventDeliver: Boolean

    """
    Should proca put action in a custom queue, so an external service can do this?
    """
    customSupporterConfirm: Boolean

    """Use a particular owned service type for looking up supporters in CRM"""
    detailBackend: ServiceName

    """
    Should the thank you email be only send when email consent doi is required (and contain it)
    """
    doiThankYou: Boolean

    """Use a particular owned service type for sending emails"""
    emailBackend: ServiceName

    """Envelope FROM email when sending emails"""
    emailFrom: String

    """Use a particular owned service type for sending events"""
    eventBackend: ServiceName

    """Name of the org (to rename it)"""
    name: String!

    """Use a particular owned service type for sending actions"""
    pushBackend: ServiceName

    """Use a particular owned service type for uploading files"""
    storageBackend: ServiceName

    """
    Is the supporter required to double opt in their action (and associated personal data)?
    """
    supporterConfirm: Boolean

    """
    The email template name that will be used to send the action DOI request
    """
    supporterConfirmTemplate: String
  ): PrivateOrg!
  updateOrgUser(
    """user membership data"""
    input: OrgUserInput!

    """update user membership data"""
    orgName: String!
  ): ChangeUserStatus!

  """Update (current) user details"""
  updateUser(
    """Admin can use user email to specify user to update"""
    email: String

    """Admin can use user id to specify user to update"""
    id: Int

    """Input values to update in user"""
    input: UserDetailsInput!
  ): User!

  """
  Upserts a campaign.
  
  Creates or appends campaign and it's action pages. In case of append, it
  will change the campaign with the matching name, and action pages with
  matching names. It will create new action pages if you pass new names. No
  Action Pages will be removed (principle of not removing signature data).
  """
  upsertCampaign(
    """Campaign content to be upserted"""
    input: CampaignInput!

    """Org name"""
    orgName: String!
  ): Campaign!

  """
  Insert or update a service for an org, using id to to update a particular one
  """
  upsertService(
    """Id to select service to be updated"""
    id: Int

    """Content of service"""
    input: ServiceInput!

    """Owner org"""
    orgName: String!
  ): Service!

  """
  Upsert multiple targets at once.
  external_id is used to decide if new target record is added, or existing one is updated.
  """
  upsertTargets(
    """Id of campaign these targets are added to"""
    campaignId: Int!

    """Action to perform on targets missing in targets list"""
    outdatedTargets: OutdatedTargets

    """List of targets"""
    targets: [TargetInput!]!
  ): [PrivateTarget]!

  """
  Upsert an email tempalte to be used for sending various emails.
  It belongs to org and is identified by (name, locale), so you can have multiple "thank_you" templates for different languages.
  """
  upsertTemplate(
    """Email template content"""
    input: EmailTemplateInput!

    """Add email tempalte to which org"""
    orgName: String!
  ): Status
}

"""
The \`Naive DateTime\` scalar type represents a naive date and time without
timezone. The DateTime appears in a JSON response as an ISO8601 formatted
string.
"""
scalar NaiveDateTime

input NationalityInput {
  """Nationality / issuer of id document"""
  country: String!

  """Document serial id/number"""
  documentNumber: String

  """Document type"""
  documentType: String
}

interface Org {
  """config"""
  config: Json!

  """Organisation short name"""
  name: String!

  """Organisation title (human readable name)"""
  title: String!
}

"""Count of supporters for particular org"""
type OrgCount {
  """count of supporters registered by org"""
  count: Int!

  """org"""
  org: Org!
}

input OrgInput {
  """Config"""
  config: Json

  """Schema for contact personal information"""
  contactSchema: ContactSchema

  """Only send thank you emails to opt-ins"""
  doiThankYou: Boolean

  """Name used to rename"""
  name: String

  """Enable reply_to for emails"""
  replyEnabled: Boolean

  """Email opt in enabled"""
  supporterConfirm: Boolean

  """Email opt in template name"""
  supporterConfirmTemplate: String

  """Organisation title (human readable name)"""
  title: String
}

type OrgUser {
  """Date and time the user was created on this instance"""
  createdAt: NaiveDateTime!
  email: String!

  """Date and time when user joined org"""
  joinedAt: NaiveDateTime!

  """Will be removed"""
  lastSigninAt: NaiveDateTime

  """Role in an org"""
  role: String!
}

input OrgUserInput {
  """Email of user"""
  email: String!

  """Role name of user in this org"""
  role: String!
}

enum OutdatedTargets {
  """Delete outdated targets (only possible for targets without any action)"""
  DELETE

  """Disable emails for outdated targets"""
  DISABLE

  """Keep outdated targets"""
  KEEP
}

type Partnership {
  """
  Partner's pages that are part of this campaign (can be more, eg: multiple languages)
  """
  actionPages: [ActionPage!]!

  """The partner staffers who initiated a request"""
  launchRequesters: [User!]!

  """Join/Launch requests of this partner"""
  launchRequests: [Confirm!]!

  """Partner org"""
  org: Org!
}

type PersonalData {
  """Schema for contact personal information"""
  contactSchema: ContactSchema!

  """Only send thank you emails to opt-ins"""
  doiThankYou: Boolean!

  """High data security enabled"""
  highSecurity: Boolean!

  """Enable reply_to for emails"""
  replyEnabled: Boolean

  """Email opt in enabled"""
  supporterConfirm: Boolean!

  """Email opt in template name"""
  supporterConfirmTemplate: String
}

type PrivateActionPage implements ActionPage {
  """Campaign this action page belongs to."""
  campaign: Campaign!

  """Config JSON of this action page"""
  config: Json!

  """
  Action page collects also opt-out actions, to deliver them to authorities.
  If false, the opt-outs will fallback to lead (we never trash data with opt-outs)
  """
  delivery: Boolean!

  """
  Extra supporters, a number added to deduplicated supporter count. Cannot be added to per-area or per-action_type counts.
  """
  extraSupporters: Int!

  """Id"""
  id: Int!

  """List of steps in journey"""
  journey: [String!]! @deprecated(reason: "moved under config")

  """Is live?"""
  live: Boolean!

  """Locale for the widget, in i18n format"""
  locale: String!

  """Location of the widget as last seen in HTTP REFERER header"""
  location: String

  """Name where the widget is hosted"""
  name: String!

  """Org the action page belongs to"""
  org: Org!

  """
  Status of action page - STANDBY (ready to get actions), ACTIVE (collecting actions), STALLED (actions not coming any more)
  """
  status: ActionPageStatus

  """Email template to confirm supporter (DOI)"""
  supporterConfirmTemplate: String

  """Thank you email templated of this Action Page"""
  thankYouTemplate: String

  """A reference to thank you email template of this ActionPage"""
  thankYouTemplateRef: String
}

type PrivateCampaign implements Campaign {
  """Action Pages of this campaign that are accessible to current user"""
  actionPages: [PrivateActionPage!]!

  """
  Fetch public actions. Can be used to display recent comments for example.
  
  To allow-list action fields to be public, \`campaign.public_actions\` must be set to a list of strings in form
  action_type:custom_field_name, eg: \`["signature:comment"]\`. XXX this cannot be set in API, you need to set in backend.
  """
  actions(
    """Specify action type to return"""
    actionType: String!

    """Limit the number of returned actions, default is 10, max is 100)"""
    limit: Int! = 10
  ): PublicActionsResult!

  """Action processing settings for this campaign"""
  campaignProcessing: CampaignProcessing

  """Custom config map"""
  config: Json!

  """Schema for contact personal information"""
  contactSchema: ContactSchema!

  """External ID (if set)"""
  externalId: Int

  """
  Campaign onwer collects opt-out actions for delivery even if campaign partner is delivering
  """
  forceDelivery: Boolean!

  """Campaign id"""
  id: Int!

  """MTT configuration"""
  mtt: CampaignMtt

  """Internal name of the campaign"""
  name: String!

  """Lead org"""
  org: Org!

  """List of partnerships and requests to join partnership"""
  partnerships: [Partnership!]

  """Statistics"""
  stats: CampaignStats!

  """Current status of the campaign"""
  status: CampaignStatus!

  """List MTT targets of this campaign"""
  targets: [Target]

  """Full, official name of the campaign"""
  title: String!
}

type PrivateOrg implements Org {
  """Get one page belonging to this org"""
  actionPage(
    """Id of page"""
    id: Int

    """Name of page"""
    name: String
  ): ActionPage!

  """List action pages this org has"""
  actionPages(select: SelectActionPage): [ActionPage!]!

  """
  DEPRECATED: use campaign() in API root. Get campaign this org is leader or partner of by id
  """
  campaign(id: Int!): Campaign!

  """List campaigns this org is leader or partner of"""
  campaigns(select: SelectCampaign): [Campaign!]!

  """config"""
  config: Json!

  """Organization id"""
  id: Int!

  """Get encryption key"""
  key(
    """Parameters to select the key by"""
    select: SelectKey!
  ): Key!

  """Encryption keys"""
  keys(select: SelectKey): [Key!]!

  """Organisation short name"""
  name: String!

  """Personal data settings for this org"""
  personalData: PersonalData!

  """Action processing settings for this org"""
  processing: Processing!

  """Services of this org"""
  services(
    """Parameters to select the key by"""
    select: SelectService
  ): [Service]!

  """Organisation title (human readable name)"""
  title: String!

  """Users of this org"""
  users: [OrgUser]!
}

type PrivateTarget implements Target {
  """Area of the target"""
  area: String

  """Email list of this target"""
  emails: [TargetEmail]!

  """unique external_id of target, used to upsert target"""
  externalId: String!

  """Custom fields, stringified json"""
  fields: Json
  id: String!

  """Locale of this target (in which language do they read emails?)"""
  locale: String

  """Name of target"""
  name: String!
}

type Processing {
  """
  Should proca put action in a custom queue, so an external service can do this?
  """
  customActionConfirm: Boolean!

  """
  Should proca put action in custom delivery queue, so an external service can sync it?
  """
  customActionDeliver: Boolean!

  """
  Should proca put events in custom delivery queue, so an external service can sync it?
  """
  customEventDeliver: Boolean!

  """
  Should proca put action in a custom queue, so an external service can do this?
  """
  customSupporterConfirm: Boolean!

  """Use a particular owned service type for looking up supporters in CRM"""
  detailBackend: ServiceName

  """Only send thank you emails to opt-ins"""
  doiThankYou: Boolean!

  """Use a particular owned service type for sending emails"""
  emailBackend: ServiceName

  """Envelope FROM email when sending emails"""
  emailFrom: String

  """Email templates. (warn: contant is not available to fetch)"""
  emailTemplates: [String!]

  """Use a particular owned service type for sending events"""
  eventBackend: ServiceName

  """Use a particular owned service type for sending actions"""
  pushBackend: ServiceName

  """Use a particular owned service type for uploading files"""
  storageBackend: ServiceName

  """
  Is the supporter required to double opt in their action (and associated personal data)?
  """
  supporterConfirm: Boolean!

  """
  The email template name that will be used to send the action DOI request
  """
  supporterConfirmTemplate: String
}

type PublicActionPage implements ActionPage {
  """Campaign this action page belongs to."""
  campaign: Campaign!

  """Config JSON of this action page"""
  config: Json!

  """Id"""
  id: Int!

  """List of steps in journey"""
  journey: [String!]! @deprecated(reason: "moved under config")

  """Is live?"""
  live: Boolean!

  """Locale for the widget, in i18n format"""
  locale: String!

  """Name where the widget is hosted"""
  name: String!

  """Org the action page belongs to"""
  org: Org!

  """Thank you email templated of this Action Page"""
  thankYouTemplate: String

  """A reference to thank you email template of this ActionPage"""
  thankYouTemplateRef: String
}

"""Result of actions query"""
type PublicActionsResult {
  """Custom field keys which are public"""
  fieldKeys: [String!]

  """List of actions custom fields"""
  list: [ActionCustomFields]
}

type PublicCampaign implements Campaign {
  """
  Fetch public actions. Can be used to display recent comments for example.
  
  To allow-list action fields to be public, \`campaign.public_actions\` must be set to a list of strings in form
  action_type:custom_field_name, eg: \`["signature:comment"]\`. XXX this cannot be set in API, you need to set in backend.
  """
  actions(
    """Specify action type to return"""
    actionType: String!

    """Limit the number of returned actions, default is 10, max is 100)"""
    limit: Int! = 10
  ): PublicActionsResult!

  """Action processing settings for this campaign"""
  campaignProcessing: CampaignProcessing

  """Custom config map"""
  config: Json!

  """Schema for contact personal information"""
  contactSchema: ContactSchema!

  """External ID (if set)"""
  externalId: Int

  """Campaign id"""
  id: Int!

  """Internal name of the campaign"""
  name: String!

  """Lead org"""
  org: Org!

  """Statistics"""
  stats: CampaignStats!

  """Current status of the campaign"""
  status: CampaignStatus!

  """List MTT targets of this campaign"""
  targets: [Target]

  """Full, official name of the campaign"""
  title: String!
}

type PublicOrg implements Org {
  """config"""
  config: Json!

  """Organisation short name"""
  name: String!

  """Organisation title (human readable name)"""
  title: String!
}

type PublicTarget implements Target {
  """Area of the target"""
  area: String

  """unique external_id of target, used to upsert target"""
  externalId: String!

  """Custom fields, stringified json"""
  fields: Json
  id: String!

  """Locale of this target (in which language do they read emails?)"""
  locale: String

  """Name of target"""
  name: String!
}

type RootQueryType {
  """
  Get action page.
  Depending on your access (page owner, lead, instance admin),
  you will get private or public view of the page.
  """
  actionPage(
    """Get action page by id."""
    id: Int

    """Get action page by name the widget is displayed on"""
    name: String

    """
    Get action page by url the widget is displayed on (DEPRECATED, use name)
    """
    url: String
  ): ActionPage!

  """Get actions collected by org, optionally filtered by campaign"""
  actions(
    """
    return only actions created at date time from this argument (inclusive)
    """
    after: DateTime

    """Limit results to campaign id"""
    campaignId: Int

    """Limit results to campaign name"""
    campaignName: String

    """Also include testing actions"""
    includeTesting: Boolean

    """Limit the number of returned actions"""
    limit: Int

    """Only download double opted in contacts"""
    onlyDoubleOptIn: Boolean

    """Only download opted in contacts and actions (default true)"""
    onlyOptIn: Boolean

    """Organization name"""
    orgName: String!

    """return only actions with id starting from this argument (inclusive)"""
    start: Int
  ): [Action]!

  """Get application info"""
  application: Application

  """
  Get one campaign. If you have access to the campaign, as lead or
  partner, you will get a private view of the campaign, otherwise, a public
  view.
  """
  campaign(
    """Get by id"""
    id: Int

    """Get by name"""
    name: String
  ): Campaign

  """
  Returns a public list of campaigns, filtered by title. Can be used to implement a campaign search box on a website.
  """
  campaigns(
    """
    DEPRECATED: use campaign() to get one campaign. Select by id, Returns list of 1 result
    """
    id: Int

    """
    DEPRECATED: use campaign() to get one campaign. Filter campaigns by name (exact match). If found, returns list of 1 campaign, otherwise an empty list
    """
    name: String

    """
    Filter campaigns by title using LIKE format (% means any sequence of characters)
    """
    title: String
  ): [Campaign!]!

  """Get contacts collected by org, optionally filtered by campaign"""
  contacts(
    """
    return only actions created at date time from this argument (inclusive)
    """
    after: DateTime

    """Limit results to campaign id"""
    campaignId: Int

    """Limit results to campaign name"""
    campaignName: String

    """Also include testing actions"""
    includeTesting: Boolean

    """Limit the number of returned actions"""
    limit: Int

    """Only download double opted in contacts"""
    onlyDoubleOptIn: Boolean

    """Only download opted in contacts and actions (default true)"""
    onlyOptIn: Boolean

    """Organization name"""
    orgName: String!

    """return only actions with id starting from this argument (inclusive)"""
    start: Int
  ): [Action]!

  """Get the current user, as determined by Authorization header"""
  currentUser: User!

  """Export actions collected by org, optionally filtered by campaign"""
  exportActions(
    """
    return only actions created at date time from this argument (inclusive)
    """
    after: DateTime

    """Limit results to campaign id"""
    campaignId: Int

    """Limit results to campaign name"""
    campaignName: String

    """Also include testing actions"""
    includeTesting: Boolean

    """Limit the number of returned actions"""
    limit: Int

    """Only download double opted in contacts"""
    onlyDoubleOptIn: Boolean

    """Only download opted in contacts and actions (default true)"""
    onlyOptIn: Boolean

    """Organization name"""
    orgName: String!

    """return only actions with id starting from this argument (inclusive)"""
    start: Int
  ): [Action]! @deprecated(reason: "Renamed to \`actions\`, use \`actions\` or \`contacts\`")

  """Organization api (authenticated)"""
  org(
    """Name of organisation"""
    name: String!
  ): PrivateOrg!

  """
  Select users from this instnace. Requires a manage users admin permission.
  """
  users(
    """Filter users"""
    select: SelectUser
  ): [User!]!
}

enum Queue {
  """a custom queue of action that needs moderation"""
  CUSTOM_ACTION_CONFIRM

  """a custom queue of actions to sync to CRM"""
  CUSTOM_ACTION_DELIVER

  """a custom queue of action that needs DOI"""
  CUSTOM_SUPPORTER_CONFIRM

  """Queue of thank you email sender worker"""
  EMAIL_SUPPORTER

  """Queue of SQS sync worker"""
  SQS

  """Queue of webhook sync worker"""
  WEBHOOK
}

type RequeueResult {
  """Count of actions selected for requeueing"""
  count: Int!

  """Count of actions that could not be requeued"""
  failed: Int!
}

input SelectActionPage {
  """Filter by campaign Id"""
  campaignId: Int
}

input SelectCampaign {
  orgName: String
  titleLike: String
}

input SelectKey {
  """Only active"""
  active: Boolean

  """Key id"""
  id: Int

  """Key having this public part"""
  public: String
}

input SelectService {
  name: ServiceName
}

"""Criteria to filter users"""
input SelectUser {
  """Use % as wildcard"""
  email: String
  id: Int

  """Exact org name"""
  orgName: String
}

type Service {
  """
  Hostname of service, but can be used as any "container" of the service. For AWS, contains a region.
  """
  host: String

  """Id"""
  id: Int!

  """Service name (type)"""
  name: ServiceName!

  """
  A sub-selector of a resource. Can be url path, but can be something like AWS bucket name
  """
  path: String

  """User, Account id, client id, whatever your API has"""
  user: String
}

input ServiceInput {
  """
  Hostname of service, but can be used as any "container" of the service. For AWS, contains a region.
  """
  host: String

  """Service name (type)"""
  name: ServiceName!

  """Password, key, secret or whatever your API has as secret credential"""
  password: String

  """
  A sub-selector of a resource. Can be url path, but can be something like AWS bucket name
  """
  path: String

  """User, Account id, client id, whatever your API has"""
  user: String
}

enum ServiceName {
  """Mailjet to send emails"""
  MAILJET

  """Preview emails in /mailbox"""
  PREVIEW

  """AWS SES to send emails"""
  SES

  """SMTP to send emails"""
  SMTP

  """AWS SQS to process messages"""
  SQS

  """Stripe to process donations"""
  STRIPE

  """Supabase to store files"""
  SUPABASE

  """Use a service that instance org is using"""
  SYSTEM

  """Stripe test account to test donations"""
  TEST_STRIPE

  """HTTP POST webhook"""
  WEBHOOK

  """Wordpress HTTP API"""
  WORDPRESS
}

enum Status {
  """Operation awaiting confirmation"""
  CONFIRMING

  """Operation had no effect (already done)"""
  NOOP

  """Operation completed succesfully"""
  SUCCESS
}

input StripePaymentIntentInput {
  """Amount of payment"""
  amount: Int!

  """Currency ofo payment"""
  currency: String!

  """Stripe payment method type"""
  paymentMethodTypes: [String!]
}

input StripeSubscriptionInput {
  """Amount of payment"""
  amount: Int!

  """Currency ofo payment"""
  currency: String!

  """how often is recurrent payment made?"""
  frequencyUnit: DonationFrequencyUnit!
}

type RootSubscriptionType {
  actionPageUpserted(orgName: String): ActionPage!
}

interface Target {
  """Area of the target"""
  area: String

  """unique external_id of target, used to upsert target"""
  externalId: String!

  """Custom fields, stringified json"""
  fields: Json
  id: String!

  """Locale of this target (in which language do they read emails?)"""
  locale: String

  """Name of target"""
  name: String!
}

type TargetEmail {
  """Email of target"""
  email: String!

  """The status of email (normal or bouncing etc)"""
  emailStatus: EmailStatus!

  """An error received when bouncing email was reported"""
  error: String
}

input TargetEmailInput {
  """Email of target"""
  email: String!
}

input TargetInput {
  """Area of the target"""
  area: String

  """Email list of this target"""
  emails: [TargetEmailInput!]

  """unique external_id of target, used to upsert target"""
  externalId: String!

  """Custom fields, stringified json"""
  fields: Json

  """Locale of this target (in which language do they read emails?)"""
  locale: String

  """Name of target"""
  name: String
}

"""Tracking codes (UTM params)"""
type Tracking {
  campaign: String!
  content: String!
  medium: String!
  source: String!
}

"""
Tracking codes, utm medium/campaign/source default to 'unknown', content to empty string
"""
input TrackingInput {
  campaign: String
  content: String

  """
  Action page location. Url from which action is added. Must contain schema, domain, (port), pathname
  """
  location: String
  medium: String
  source: String
}

type User {
  """Users API token (to check expiry)"""
  apiToken: ApiToken

  """Email of user"""
  email: String!

  """Id of user"""
  id: Int!

  """Is user an admin?"""
  isAdmin: Boolean!

  """Job title"""
  jobTitle: String

  """Phone"""
  phone: String

  """Url to profile picture"""
  pictureUrl: String

  """user's roles in orgs"""
  roles: [UserRole!]!
}

input UserDetailsInput {
  """Job title"""
  jobTitle: String

  """Phone"""
  phone: String

  """Users profile pic url"""
  pictureUrl: String
}

type UserRole {
  """Org this role is in"""
  org: Org!

  """Role name"""
  role: String!
}`,gn=pS(),Xo=Hs(Qs.DIRECTIVES,[]),eS=ra(gn.getQueryType()?.getFields()),nS=ra(gn.getMutationType()?.getFields()),tS=ra(gn.getSubscriptionType()?.getFields()),bu=Ot.keyBy(ld(),n=>n.name.toLocaleLowerCase()),rS=Ot.mapValues(bu,n=>{const t=Xo.find(r=>r?.name===n.name||r?.name==="*");return t?t.args.some(r=>r==="*")?n.args:t.args.map(r=>n.args.find(s=>s.name===r)).filter(r=>!!r):[]}),iS=ra(gn.getTypeMap()),sS=Hb(gn);function ra(n){return Ot.mapKeys(n||{},(t,r)=>r.toLocaleLowerCase())}function aS(){return Ot.size(gn.getTypeMap())<=10}function oS(){return[Lo("Queries",gn.getQueryType()),Lo("Mutations",gn.getMutationType()),Lo("Subscriptions",gn.getSubscriptionType()),dS(),cS()].filter(n=>!!n)}function Lo(n,t){return lS(n,uS(t))}function uS(n){return Ot.sortBy(n?.getFields()||{},t=>t.name)}function lS(n,t){return t.length===0?null:{type:"menu",title:n,children:t.map(r=>({type:"page",title:r.name,section:n,deprecated:!!r.deprecationReason,href:xi.joinUrlPaths(Xs(),n.toLocaleLowerCase(),r.name)}))}}function cS(){return aS()?null:{type:"menu",title:"Types",children:Ot.sortBy(Ot.map(gn.getTypeMap()),t=>t.name).filter(t=>!t.name.startsWith("__")).map(t=>({type:"page",title:t.name,section:"Types",href:xi.joinUrlPaths(Xs(),"types",t.name)}))}}function FS(){return!!gn.getQueryType()}function CS(n){return eS[n.toLocaleLowerCase()]}function OS(){return!!gn.getMutationType()}function xS(n){return nS[n.toLocaleLowerCase()]}function kS(){return!!gn.getSubscriptionType()}function RS(n){return tS[n.toLocaleLowerCase()]}function LS(n){return iS[n.toLocaleLowerCase()]}function fS(n){return bu[n.toLocaleLowerCase()]}function BS(n){return fS(n.name)!==void 0}function PS(){return Ot.size(bu)>0}function US(n){return rS[n.name.toLocaleLowerCase()]||[]}function MS(n){if(n)return sS.getFor(n)}function $S(n){return Ot.flatMap(n.getFields(),t=>({field:t,possibleDescriptions:ud(t,n)}))}function ud(n,t){return n?n.description?[{description:n.description,from:t}]:Je(t)?t.getInterfaces().flatMap(r=>ud(r.getFields()[n.name],r)):[]:[]}function ld(){return Xo.some(n=>n?.name==="*")?gn.getDirectives().filter(n=>!["include","skip","deprecated","specifiedBy"].includes(n.name)):Xo.filter(n=>!!n?.name).map(({name:n})=>n?gn.getDirective(n):void 0).filter(n=>!!n)}function pS(){return Bf.trim().length===0?jb(JSON.parse(JSON.stringify({__schema:{types:[]}}))):zb(Bf)}function dS(){const n=ld();return n.length===0?null:{type:"menu",title:"Directives",children:n.map(t=>({type:"page",title:t.name,href:xi.joinUrlPaths(Xs(),"directives",t.name),section:"Directives"}))}}const VS=Hs(Qs.APP_TITLE,"GraphQL Documentation"),cd=gS().concat(oS());vS(cd);const hS=Object.freeze(cd),GS=mS();function gS(){return Hs(Qs.PAGES,ES()).filter(t=>!!t).map(t=>pd([],t))}function mS(){const n=yS();if(n)return n.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function vS(n){function t(s,a){for(const u of s){if(u.type==="page"){a(u);continue}u.type==="menu"&&t(u.children,a)}}let r;t(n,s=>{r&&(r.next={title:s.title,section:s.section,href:s.href},s.previous={title:r.title,section:r.section,href:r.href}),r=s})}function yS(){return fd(()=>!0)}function qS(n){return fd(t=>t.href.toLocaleLowerCase()===n.toLocaleLowerCase())}function fd(n){function t(r){for(const s of r){if(s.type==="page"&&n(s))return s;if(s.type==="menu"){const a=t(s.children);if(a)return a}}return null}return t(hS)}function pd(n,t){if(typeof t.content=="string")return{type:"page",title:t.title,content:t.content,href:xi.joinUrlPaths(Xs(),...n,Pf(t.title))};const r=n.concat([Pf(t.title)]);return{type:"menu",title:t.title,children:t.content.map(s=>({...pd(r,s),section:t.title}))}}function Pf(n){return xi.generatePathSegment(n,new ip)}function ES(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(n=>n.trim()).join(`
`)}]}]}export{ip as $,NS as A,Hs as B,li as C,Qs as D,Is as E,T_ as F,aS as G,LS as H,MS as I,Qt as J,T as K,st as L,Ge as M,Jn as N,Je as O,hn as P,$S as Q,Ai as R,hr as S,Pr as T,wS as U,WD as V,Rs as W,tp as X,zf as Y,IS as Z,Ot as _,OS as a,Se as a0,ci as a1,qD as a2,qn as a3,$D as a4,VS as a5,FS as b,CS as c,kS as d,RS as e,qS as f,xS as g,GS as h,Zf as i,at as j,Hf as k,PS as l,fS as m,US as n,Ct as o,hS as p,gn as q,BS as r,SS as s,Xs as t,xi as u,Di as v,Ei as w,yu as x,Dn as y,Ce as z};
