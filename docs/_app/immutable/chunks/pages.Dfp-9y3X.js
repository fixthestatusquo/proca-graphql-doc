var yD=Object.defineProperty;var _D=(i,n,t)=>n in i?yD(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var Ee=(i,n,t)=>_D(i,typeof n!="symbol"?n+"":n,t);import{s as Ne,q as on,l as _e,d as H,I as Lc,t as La,j as Ba,o as Pa,n as nn,a2 as vr,E as tt,v as bf,e as ke,f as xe,g as Ye,ae as ws,F as it,G as rt,H as st,k as vn,m as wt,b as $a,c as Ua,ah as TD,ai as AD,ak as Bc,K as ID}from"./scheduler.6x_t8-M_.js";import{S as Be,i as Pe,t as ee,g as Ft,b as oe,e as Nt,c as Wt,a as gi,m as Jt,d as zt}from"./index.DNIXW-5M.js";import{b as bD}from"./control.Dy4Ou1jf.js";function ft(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Sf(i,n){const t={},s={},o={$$scope:1};let a=i.length;for(;a--;){const l=i[a],f=n[a];if(f){for(const p in l)p in f||(s[p]=1);for(const p in f)o[p]||(t[p]=f[p],o[p]=1);i[a]=f}else for(const p in l)o[p]=1}for(const l in s)l in t||(t[l]=void 0);return t}function TI(i){return typeof i=="object"&&i!==null?i:{}}function Pc(i){let n,t,s;var o=i[1][i[0].type];function a(l,f){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[FD]},$$scope:{ctx:l}}}}return o&&(n=Lc(o,a(i))),{c(){n&&Wt(n.$$.fragment),t=on()},l(l){n&&gi(n.$$.fragment,l),t=on()},m(l,f){n&&Jt(n,l,f),_e(l,t,f),s=!0},p(l,f){if(f&3&&o!==(o=l[1][l[0].type])){if(n){Ft();const p=n;oe(p.$$.fragment,1,0,()=>{zt(p,1)}),Nt()}o?(n=Lc(o,a(l)),Wt(n.$$.fragment),ee(n.$$.fragment,1),Jt(n,t.parentNode,t)):n=null}else if(o){const p={};f&1&&(p.token=l[0]),f&4&&(p.options=l[2]),f&2&&(p.renderers=l[1]),f&15&&(p.$$scope={dirty:f,ctx:l}),n.$set(p)}},i(l){s||(n&&ee(n.$$.fragment,l),s=!0)},o(l){n&&oe(n.$$.fragment,l),s=!1},d(l){l&&H(t),n&&zt(n,l)}}}function SD(i){let n=i[0].raw+"",t;return{c(){t=La(n)},l(s){t=Ba(s,n)},m(s,o){_e(s,t,o)},p(s,o){o&1&&n!==(n=s[0].raw+"")&&Pa(t,n)},i:nn,o:nn,d(s){s&&H(t)}}}function wD(i){let n,t;return n=new $s({props:{tokens:i[0].tokens,renderers:i[1],options:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){gi(n.$$.fragment,s)},m(s,o){Jt(n,s,o),t=!0},p(s,o){const a={};o&1&&(a.tokens=s[0].tokens),o&2&&(a.renderers=s[1]),o&4&&(a.options=s[2]),n.$set(a)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){zt(n,s)}}}function FD(i){let n,t,s,o;const a=[wD,SD],l=[];function f(p,m){return"tokens"in p[0]&&p[0].tokens?0:1}return n=f(i),t=l[n]=a[n](i),{c(){t.c(),s=on()},l(p){t.l(p),s=on()},m(p,m){l[n].m(p,m),_e(p,s,m),o=!0},p(p,m){let v=n;n=f(p),n===v?l[n].p(p,m):(Ft(),oe(l[v],1,1,()=>{l[v]=null}),Nt(),t=l[n],t?t.p(p,m):(t=l[n]=a[n](p),t.c()),ee(t,1),t.m(s.parentNode,s))},i(p){o||(ee(t),o=!0)},o(p){oe(t),o=!1},d(p){p&&H(s),l[n].d(p)}}}function ND(i){let n,t,s=i[1][i[0].type]&&Pc(i);return{c(){s&&s.c(),n=on()},l(o){s&&s.l(o),n=on()},m(o,a){s&&s.m(o,a),_e(o,n,a),t=!0},p(o,[a]){o[1][o[0].type]?s?(s.p(o,a),a&3&&ee(s,1)):(s=Pc(o),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(Ft(),oe(s,1,1,()=>{s=null}),Nt())},i(o){t||(ee(s),t=!0)},o(o){oe(s),t=!1},d(o){o&&H(n),s&&s.d(o)}}}function CD(i,n,t){let{token:s}=n,{renderers:o}=n,{options:a}=n;return i.$$set=l=>{"token"in l&&t(0,s=l.token),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,a=l.options)},[s,o,a]}class wf extends Be{constructor(n){super(),Pe(this,n,CD,ND,Ne,{token:0,renderers:1,options:2})}}function $c(i,n,t){const s=i.slice();return s[3]=n[t],s}function Uc(i){let n,t,s=ft(i[0]),o=[];for(let l=0;l<s.length;l+=1)o[l]=Mc($c(i,s,l));const a=l=>oe(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();n=on()},l(l){for(let f=0;f<o.length;f+=1)o[f].l(l);n=on()},m(l,f){for(let p=0;p<o.length;p+=1)o[p]&&o[p].m(l,f);_e(l,n,f),t=!0},p(l,f){if(f&7){s=ft(l[0]);let p;for(p=0;p<s.length;p+=1){const m=$c(l,s,p);o[p]?(o[p].p(m,f),ee(o[p],1)):(o[p]=Mc(m),o[p].c(),ee(o[p],1),o[p].m(n.parentNode,n))}for(Ft(),p=s.length;p<o.length;p+=1)a(p);Nt()}},i(l){if(!t){for(let f=0;f<s.length;f+=1)ee(o[f]);t=!0}},o(l){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)oe(o[f]);t=!1},d(l){l&&H(n),vr(o,l)}}}function Mc(i){let n,t;return n=new wf({props:{token:i[3],renderers:i[1],options:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){gi(n.$$.fragment,s)},m(s,o){Jt(n,s,o),t=!0},p(s,o){const a={};o&1&&(a.token=s[3]),o&2&&(a.renderers=s[1]),o&4&&(a.options=s[2]),n.$set(a)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){zt(n,s)}}}function OD(i){let n,t,s=i[0]&&Uc(i);return{c(){s&&s.c(),n=on()},l(o){s&&s.l(o),n=on()},m(o,a){s&&s.m(o,a),_e(o,n,a),t=!0},p(o,[a]){o[0]?s?(s.p(o,a),a&1&&ee(s,1)):(s=Uc(o),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(Ft(),oe(s,1,1,()=>{s=null}),Nt())},i(o){t||(ee(s),t=!0)},o(o){oe(s),t=!1},d(o){o&&H(n),s&&s.d(o)}}}function kD(i,n,t){let{tokens:s}=n,{renderers:o}=n,{options:a}=n;return i.$$set=l=>{"tokens"in l&&t(0,s=l.tokens),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,a=l.options)},[s,o,a]}class $s extends Be{constructor(n){super(),Pe(this,n,kD,OD,Ne,{tokens:0,renderers:1,options:2})}}function Er(...i){return`/${i.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}`}function Dr(i){return i.startsWith("/")||i.startsWith("#")}function Ff(i,n){return n.slug(i).replace(/--+/g,"-")}function va(i){let n,t;const s=i[5].default,o=tt(s,i,i[4],null);let a=[{id:i[1]}],l={};for(let f=0;f<a.length;f+=1)l=bf(l,a[f]);return{c(){n=ke(`h${i[0].depth}`),o&&o.c(),this.h()},l(f){n=xe(f,(`h${i[0].depth}`||"null").toUpperCase(),{id:!0});var p=Ye(n);o&&o.l(p),p.forEach(H),this.h()},h(){ws(`h${i[0].depth}`)(n,l)},m(f,p){_e(f,n,p),o&&o.m(n,null),t=!0},p(f,p){o&&o.p&&(!t||p&16)&&it(o,s,f,f[4],t?st(s,f[4],p,null):rt(f[4]),null),ws(`h${f[0].depth}`)(n,l=Sf(a,[(!t||p&2)&&{id:f[1]}]))},i(f){t||(ee(o,f),t=!0)},o(f){oe(o,f),t=!1},d(f){f&&H(n),o&&o.d(f)}}}function xD(i){let n=`h${i[0].depth}`,t,s,o=`h${i[0].depth}`&&va(i);return{c(){o&&o.c(),t=on()},l(a){o&&o.l(a),t=on()},m(a,l){o&&o.m(a,l),_e(a,t,l),s=!0},p(a,[l]){`h${a[0].depth}`?n?Ne(n,`h${a[0].depth}`)?(o.d(1),o=va(a),n=`h${a[0].depth}`,o.c(),o.m(t.parentNode,t)):o.p(a,l):(o=va(a),n=`h${a[0].depth}`,o.c(),o.m(t.parentNode,t)):n&&(o.d(1),o=null,n=`h${a[0].depth}`)},i(a){s||(ee(o,a),s=!0)},o(a){oe(o,a),s=!1},d(a){a&&H(t),o&&o.d(a)}}}function RD(i,n,t){let{$$slots:s={},$$scope:o}=n,{token:a}=n,{options:l}=n;const f=void 0;let p;return i.$$set=m=>{"token"in m&&t(0,a=m.token),"options"in m&&t(2,l=m.options),"$$scope"in m&&t(4,o=m.$$scope)},i.$$.update=()=>{i.$$.dirty&5&&t(1,p=Ff(a.text,l.slugger))},[a,p,l,f,o,s]}class LD extends Be{constructor(n){super(),Pe(this,n,RD,xD,Ne,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function BD(i){let n,t;const s=i[4].default,o=tt(s,i,i[3],null);return{c(){n=ke("blockquote"),o&&o.c()},l(a){n=xe(a,"BLOCKQUOTE",{});var l=Ye(n);o&&o.l(l),l.forEach(H)},m(a,l){_e(a,n,l),o&&o.m(n,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&it(o,s,a,a[3],t?st(s,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(o,a),t=!0)},o(a){oe(o,a),t=!1},d(a){a&&H(n),o&&o.d(a)}}}function PD(i,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class $D extends Be{constructor(n){super(),Pe(this,n,PD,BD,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Vc(i,n,t){const s=i.slice();return s[4]=n[t],s}function Gc(i){let n,t;return n=new wf({props:{token:{...i[4]},options:i[1],renderers:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){gi(n.$$.fragment,s)},m(s,o){Jt(n,s,o),t=!0},p(s,o){const a={};o&1&&(a.token={...s[4]}),o&2&&(a.options=s[1]),o&4&&(a.renderers=s[2]),n.$set(a)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){zt(n,s)}}}function Ea(i){let n,t,s,o=ft(i[0].items),a=[];for(let m=0;m<o.length;m+=1)a[m]=Gc(Vc(i,o,m));const l=m=>oe(a[m],1,1,()=>{a[m]=null});let f=[{start:t=i[0].start||1}],p={};for(let m=0;m<f.length;m+=1)p=bf(p,f[m]);return{c(){n=ke(i[3]);for(let m=0;m<a.length;m+=1)a[m].c();this.h()},l(m){n=xe(m,(i[3]||"null").toUpperCase(),{start:!0});var v=Ye(n);for(let D=0;D<a.length;D+=1)a[D].l(v);v.forEach(H),this.h()},h(){ws(i[3])(n,p)},m(m,v){_e(m,n,v);for(let D=0;D<a.length;D+=1)a[D]&&a[D].m(n,null);s=!0},p(m,v){if(v&7){o=ft(m[0].items);let D;for(D=0;D<o.length;D+=1){const k=Vc(m,o,D);a[D]?(a[D].p(k,v),ee(a[D],1)):(a[D]=Gc(k),a[D].c(),ee(a[D],1),a[D].m(n,null))}for(Ft(),D=o.length;D<a.length;D+=1)l(D);Nt()}ws(m[3])(n,p=Sf(f,[(!s||v&1&&t!==(t=m[0].start||1))&&{start:t}]))},i(m){if(!s){for(let v=0;v<o.length;v+=1)ee(a[v]);s=!0}},o(m){a=a.filter(Boolean);for(let v=0;v<a.length;v+=1)oe(a[v]);s=!1},d(m){m&&H(n),vr(a,m)}}}function UD(i){let n=i[3],t,s=i[3]&&Ea(i);return{c(){s&&s.c(),t=on()},l(o){s&&s.l(o),t=on()},m(o,a){s&&s.m(o,a),_e(o,t,a)},p(o,[a]){o[3]?n?Ne(n,o[3])?(s.d(1),s=Ea(o),n=o[3],s.c(),s.m(t.parentNode,t)):s.p(o,a):(s=Ea(o),n=o[3],s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=o[3])},i:nn,o(o){oe(s,o)},d(o){o&&H(t),s&&s.d(o)}}}function MD(i,n,t){let{token:s}=n,{options:o}=n,{renderers:a}=n,l;return i.$$set=f=>{"token"in f&&t(0,s=f.token),"options"in f&&t(1,o=f.options),"renderers"in f&&t(2,a=f.renderers)},i.$$.update=()=>{i.$$.dirty&1&&t(3,l=s.ordered?"ol":"ul")},[s,o,a,l]}class VD extends Be{constructor(n){super(),Pe(this,n,MD,UD,Ne,{token:0,options:1,renderers:2})}}function GD(i){let n,t;const s=i[4].default,o=tt(s,i,i[3],null);return{c(){n=ke("li"),o&&o.c()},l(a){n=xe(a,"LI",{});var l=Ye(n);o&&o.l(l),l.forEach(H)},m(a,l){_e(a,n,l),o&&o.m(n,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&it(o,s,a,a[3],t?st(s,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(o,a),t=!0)},o(a){oe(o,a),t=!1},d(a){a&&H(n),o&&o.d(a)}}}function jD(i,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class qD extends Be{constructor(n){super(),Pe(this,n,jD,GD,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function YD(i){let n;return{c(){n=ke("br")},l(t){n=xe(t,"BR",{})},m(t,s){_e(t,n,s)},p:nn,i:nn,o:nn,d(t){t&&H(n)}}}function WD(i,n,t){return[void 0,void 0,void 0]}class JD extends Be{constructor(n){super(),Pe(this,n,WD,YD,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function zD(i){let n,t,s=i[0].text+"",o,a;return{c(){n=ke("pre"),t=ke("code"),o=La(s),this.h()},l(l){n=xe(l,"PRE",{});var f=Ye(n);t=xe(f,"CODE",{class:!0});var p=Ye(t);o=Ba(p,s),p.forEach(H),f.forEach(H),this.h()},h(){vn(t,"class",a=`lang-${i[0].lang}`)},m(l,f){_e(l,n,f),wt(n,t),wt(t,o)},p(l,[f]){f&1&&s!==(s=l[0].text+"")&&Pa(o,s),f&1&&a!==(a=`lang-${l[0].lang}`)&&vn(t,"class",a)},i:nn,o:nn,d(l){l&&H(n)}}}function QD(i,n,t){let{token:s}=n;const o=void 0,a=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,a]}class HD extends Be{constructor(n){super(),Pe(this,n,QD,zD,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function XD(i){let n,t=i[0].raw.slice(1,i[0].raw.length-1)+"",s;return{c(){n=ke("code"),s=La(t)},l(o){n=xe(o,"CODE",{});var a=Ye(n);s=Ba(a,t),a.forEach(H)},m(o,a){_e(o,n,a),wt(n,s)},p(o,[a]){a&1&&t!==(t=o[0].raw.slice(1,o[0].raw.length-1)+"")&&Pa(s,t)},i:nn,o:nn,d(o){o&&H(n)}}}function KD(i,n,t){let{token:s}=n;const o=void 0,a=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,a]}class ZD extends Be{constructor(n){super(),Pe(this,n,KD,XD,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function jc(i,n,t){const s=i.slice();return s[3]=n[t],s}function qc(i,n,t){const s=i.slice();return s[6]=n[t],s}function Yc(i,n,t){const s=i.slice();return s[9]=n[t],s}function Wc(i){let n,t,s,o;return t=new $s({props:{tokens:i[9].tokens,options:i[1],renderers:i[2]}}),{c(){n=ke("th"),Wt(t.$$.fragment),s=$a(),this.h()},l(a){n=xe(a,"TH",{scope:!0});var l=Ye(n);gi(t.$$.fragment,l),s=Ua(l),l.forEach(H),this.h()},h(){vn(n,"scope","col")},m(a,l){_e(a,n,l),Jt(t,n,null),wt(n,s),o=!0},p(a,l){const f={};l&1&&(f.tokens=a[9].tokens),l&2&&(f.options=a[1]),l&4&&(f.renderers=a[2]),t.$set(f)},i(a){o||(ee(t.$$.fragment,a),o=!0)},o(a){oe(t.$$.fragment,a),o=!1},d(a){a&&H(n),zt(t)}}}function Jc(i){let n,t,s;return t=new $s({props:{tokens:i[6].tokens,options:i[1],renderers:i[2]}}),{c(){n=ke("td"),Wt(t.$$.fragment)},l(o){n=xe(o,"TD",{});var a=Ye(n);gi(t.$$.fragment,a),a.forEach(H)},m(o,a){_e(o,n,a),Jt(t,n,null),s=!0},p(o,a){const l={};a&1&&(l.tokens=o[6].tokens),a&2&&(l.options=o[1]),a&4&&(l.renderers=o[2]),t.$set(l)},i(o){s||(ee(t.$$.fragment,o),s=!0)},o(o){oe(t.$$.fragment,o),s=!1},d(o){o&&H(n),zt(t)}}}function zc(i){let n,t,s,o=ft(i[3]),a=[];for(let f=0;f<o.length;f+=1)a[f]=Jc(qc(i,o,f));const l=f=>oe(a[f],1,1,()=>{a[f]=null});return{c(){n=ke("tr");for(let f=0;f<a.length;f+=1)a[f].c();t=$a()},l(f){n=xe(f,"TR",{});var p=Ye(n);for(let m=0;m<a.length;m+=1)a[m].l(p);t=Ua(p),p.forEach(H)},m(f,p){_e(f,n,p);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(n,null);wt(n,t),s=!0},p(f,p){if(p&7){o=ft(f[3]);let m;for(m=0;m<o.length;m+=1){const v=qc(f,o,m);a[m]?(a[m].p(v,p),ee(a[m],1)):(a[m]=Jc(v),a[m].c(),ee(a[m],1),a[m].m(n,t))}for(Ft(),m=o.length;m<a.length;m+=1)l(m);Nt()}},i(f){if(!s){for(let p=0;p<o.length;p+=1)ee(a[p]);s=!0}},o(f){a=a.filter(Boolean);for(let p=0;p<a.length;p+=1)oe(a[p]);s=!1},d(f){f&&H(n),vr(a,f)}}}function ey(i){let n,t,s,o,a,l,f=ft(i[0].header),p=[];for(let w=0;w<f.length;w+=1)p[w]=Wc(Yc(i,f,w));const m=w=>oe(p[w],1,1,()=>{p[w]=null});let v=ft(i[0].rows),D=[];for(let w=0;w<v.length;w+=1)D[w]=zc(jc(i,v,w));const k=w=>oe(D[w],1,1,()=>{D[w]=null});return{c(){n=ke("table"),t=ke("thead"),s=ke("tr");for(let w=0;w<p.length;w+=1)p[w].c();o=$a(),a=ke("tbody");for(let w=0;w<D.length;w+=1)D[w].c()},l(w){n=xe(w,"TABLE",{});var F=Ye(n);t=xe(F,"THEAD",{});var B=Ye(t);s=xe(B,"TR",{});var Y=Ye(s);for(let Se=0;Se<p.length;Se+=1)p[Se].l(Y);Y.forEach(H),B.forEach(H),o=Ua(F),a=xe(F,"TBODY",{});var ce=Ye(a);for(let Se=0;Se<D.length;Se+=1)D[Se].l(ce);ce.forEach(H),F.forEach(H)},m(w,F){_e(w,n,F),wt(n,t),wt(t,s);for(let B=0;B<p.length;B+=1)p[B]&&p[B].m(s,null);wt(n,o),wt(n,a);for(let B=0;B<D.length;B+=1)D[B]&&D[B].m(a,null);l=!0},p(w,[F]){if(F&7){f=ft(w[0].header);let B;for(B=0;B<f.length;B+=1){const Y=Yc(w,f,B);p[B]?(p[B].p(Y,F),ee(p[B],1)):(p[B]=Wc(Y),p[B].c(),ee(p[B],1),p[B].m(s,null))}for(Ft(),B=f.length;B<p.length;B+=1)m(B);Nt()}if(F&7){v=ft(w[0].rows);let B;for(B=0;B<v.length;B+=1){const Y=jc(w,v,B);D[B]?(D[B].p(Y,F),ee(D[B],1)):(D[B]=zc(Y),D[B].c(),ee(D[B],1),D[B].m(a,null))}for(Ft(),B=v.length;B<D.length;B+=1)k(B);Nt()}},i(w){if(!l){for(let F=0;F<f.length;F+=1)ee(p[F]);for(let F=0;F<v.length;F+=1)ee(D[F]);l=!0}},o(w){p=p.filter(Boolean);for(let F=0;F<p.length;F+=1)oe(p[F]);D=D.filter(Boolean);for(let F=0;F<D.length;F+=1)oe(D[F]);l=!1},d(w){w&&H(n),vr(p,w),vr(D,w)}}}function ny(i,n,t){let{token:s}=n,{options:o}=n,{renderers:a}=n;return i.$$set=l=>{"token"in l&&t(0,s=l.token),"options"in l&&t(1,o=l.options),"renderers"in l&&t(2,a=l.renderers)},[s,o,a]}class ty extends Be{constructor(n){super(),Pe(this,n,ny,ey,Ne,{token:0,options:1,renderers:2})}}function iy(i){let n,t=i[0].text+"",s;return{c(){n=new TD(!1),s=on(),this.h()},l(o){n=AD(o,!1),s=on(),this.h()},h(){n.a=s},m(o,a){n.m(t,o,a),_e(o,s,a)},p(o,[a]){a&1&&t!==(t=o[0].text+"")&&n.p(t)},i:nn,o:nn,d(o){o&&(H(s),n.d())}}}function ry(i,n,t){let{token:s}=n;const o=void 0,a=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,a]}class sy extends Be{constructor(n){super(),Pe(this,n,ry,iy,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function oy(i){let n,t;const s=i[4].default,o=tt(s,i,i[3],null);return{c(){n=ke("p"),o&&o.c()},l(a){n=xe(a,"P",{});var l=Ye(n);o&&o.l(l),l.forEach(H)},m(a,l){_e(a,n,l),o&&o.m(n,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&it(o,s,a,a[3],t?st(s,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(o,a),t=!0)},o(a){oe(o,a),t=!1},d(a){a&&H(n),o&&o.d(a)}}}function ay(i,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class uy extends Be{constructor(n){super(),Pe(this,n,ay,oy,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ly(i){let n,t,s,o;const a=i[4].default,l=tt(a,i,i[3],null);return{c(){n=ke("a"),l&&l.c(),this.h()},l(f){n=xe(f,"A",{href:!0,title:!0});var p=Ye(n);l&&l.l(p),p.forEach(H),this.h()},h(){vn(n,"href",t=Dr(i[0].href)?Er(i[1].baseUrl,i[0].href):i[0].href),vn(n,"title",s=i[0].title)},m(f,p){_e(f,n,p),l&&l.m(n,null),o=!0},p(f,[p]){l&&l.p&&(!o||p&8)&&it(l,a,f,f[3],o?st(a,f[3],p,null):rt(f[3]),null),(!o||p&3&&t!==(t=Dr(f[0].href)?Er(f[1].baseUrl,f[0].href):f[0].href))&&vn(n,"href",t),(!o||p&1&&s!==(s=f[0].title))&&vn(n,"title",s)},i(f){o||(ee(l,f),o=!0)},o(f){oe(l,f),o=!1},d(f){f&&H(n),l&&l.d(f)}}}function cy(i,n,t){let{$$slots:s={},$$scope:o}=n,{token:a}=n,{options:l}=n;const f=void 0;return i.$$set=p=>{"token"in p&&t(0,a=p.token),"options"in p&&t(1,l=p.options),"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class fy extends Be{constructor(n){super(),Pe(this,n,cy,ly,Ne,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function py(i){let n;const t=i[4].default,s=tt(t,i,i[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,a){s&&s.m(o,a),n=!0},p(o,[a]){s&&s.p&&(!n||a&8)&&it(s,t,o,o[3],n?st(t,o[3],a,null):rt(o[3]),null)},i(o){n||(ee(s,o),n=!0)},o(o){oe(s,o),n=!1},d(o){s&&s.d(o)}}}function dy(i,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class hy extends Be{constructor(n){super(),Pe(this,n,dy,py,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function gy(i){let n,t;const s=i[4].default,o=tt(s,i,i[3],null);return{c(){n=ke("dfn"),o&&o.c()},l(a){n=xe(a,"DFN",{});var l=Ye(n);o&&o.l(l),l.forEach(H)},m(a,l){_e(a,n,l),o&&o.m(n,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&it(o,s,a,a[3],t?st(s,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(o,a),t=!0)},o(a){oe(o,a),t=!1},d(a){a&&H(n),o&&o.d(a)}}}function my(i,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class vy extends Be{constructor(n){super(),Pe(this,n,my,gy,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Ey(i){let n,t;const s=i[4].default,o=tt(s,i,i[3],null);return{c(){n=ke("del"),o&&o.c()},l(a){n=xe(a,"DEL",{});var l=Ye(n);o&&o.l(l),l.forEach(H)},m(a,l){_e(a,n,l),o&&o.m(n,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&it(o,s,a,a[3],t?st(s,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(o,a),t=!0)},o(a){oe(o,a),t=!1},d(a){a&&H(n),o&&o.d(a)}}}function Dy(i,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class yy extends Be{constructor(n){super(),Pe(this,n,Dy,Ey,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function _y(i){let n,t;const s=i[4].default,o=tt(s,i,i[3],null);return{c(){n=ke("em"),o&&o.c()},l(a){n=xe(a,"EM",{});var l=Ye(n);o&&o.l(l),l.forEach(H)},m(a,l){_e(a,n,l),o&&o.m(n,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&it(o,s,a,a[3],t?st(s,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(o,a),t=!0)},o(a){oe(o,a),t=!1},d(a){a&&H(n),o&&o.d(a)}}}function Ty(i,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class Ay extends Be{constructor(n){super(),Pe(this,n,Ty,_y,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Iy(i){let n;return{c(){n=ke("hr")},l(t){n=xe(t,"HR",{})},m(t,s){_e(t,n,s)},p:nn,i:nn,o:nn,d(t){t&&H(n)}}}function by(i,n,t){return[void 0,void 0,void 0]}class Sy extends Be{constructor(n){super(),Pe(this,n,by,Iy,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function wy(i){let n,t;const s=i[4].default,o=tt(s,i,i[3],null);return{c(){n=ke("strong"),o&&o.c()},l(a){n=xe(a,"STRONG",{});var l=Ye(n);o&&o.l(l),l.forEach(H)},m(a,l){_e(a,n,l),o&&o.m(n,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&it(o,s,a,a[3],t?st(s,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(o,a),t=!0)},o(a){oe(o,a),t=!1},d(a){a&&H(n),o&&o.d(a)}}}function Fy(i,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class Ny extends Be{constructor(n){super(),Pe(this,n,Fy,wy,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Cy(i){let n,t,s,o;return{c(){n=ke("img"),this.h()},l(a){n=xe(a,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Bc(n.src,t=Dr(i[0].href)?Er(i[1].baseUrl,i[0].href):i[0].href)||vn(n,"src",t),vn(n,"title",s=i[0].title),vn(n,"alt",o=i[0].text),vn(n,"class","markdown-image svelte-z38cge")},m(a,l){_e(a,n,l)},p(a,[l]){l&3&&!Bc(n.src,t=Dr(a[0].href)?Er(a[1].baseUrl,a[0].href):a[0].href)&&vn(n,"src",t),l&1&&s!==(s=a[0].title)&&vn(n,"title",s),l&1&&o!==(o=a[0].text)&&vn(n,"alt",o)},i:nn,o:nn,d(a){a&&H(n)}}}function Oy(i,n,t){let{token:s}=n,{options:o}=n;const a=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token),"options"in l&&t(1,o=l.options)},[s,o,a]}class ky extends Be{constructor(n){super(),Pe(this,n,Oy,Cy,Ne,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function xy(i){let n;const t=i[4].default,s=tt(t,i,i[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,a){s&&s.m(o,a),n=!0},p(o,[a]){s&&s.p&&(!n||a&8)&&it(s,t,o,o[3],n?st(t,o[3],a,null):rt(o[3]),null)},i(o){n||(ee(s,o),n=!0)},o(o){oe(s,o),n=!1},d(o){s&&s.d(o)}}}function Ry(i,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class Qc extends Be{constructor(n){super(),Pe(this,n,Ry,xy,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}const Ly=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,By=Object.hasOwnProperty;class Nf{constructor(){this.occurrences,this.reset()}slug(n,t){const s=this;let o=Py(n,t===!0);const a=o;for(;By.call(s.occurrences,o);)s.occurrences[a]++,o=a+"-"+s.occurrences[a];return s.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function Py(i,n){return typeof i!="string"?"":(n||(i=i.toLowerCase()),i.replace(Ly,"").replace(/ /g,"-"))}function Ma(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let mi=Ma();function Cf(i){mi=i}const Of=/[&<>"']/,$y=new RegExp(Of.source,"g"),kf=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Uy=new RegExp(kf.source,"g"),My={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Hc=i=>My[i];function wn(i,n){if(n){if(Of.test(i))return i.replace($y,Hc)}else if(kf.test(i))return i.replace(Uy,Hc);return i}const Vy=/(^|[^\[])\^/g;function ye(i,n){let t=typeof i=="string"?i:i.source;n=n||"";const s={replace:(o,a)=>{let l=typeof a=="string"?a:a.source;return l=l.replace(Vy,"$1"),t=t.replace(o,l),s},getRegex:()=>new RegExp(t,n)};return s}function Xc(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const dr={exec:()=>null};function Kc(i,n){const t=i.replace(/\|/g,(a,l,f)=>{let p=!1,m=l;for(;--m>=0&&f[m]==="\\";)p=!p;return p?"|":" |"}),s=t.split(/ \|/);let o=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),n)if(s.length>n)s.splice(n);else for(;s.length<n;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(/\\\|/g,"|");return s}function ar(i,n,t){const s=i.length;if(s===0)return"";let o=0;for(;o<s;){const a=i.charAt(s-o-1);if(a===n&&!t)o++;else if(a!==n&&t)o++;else break}return i.slice(0,s-o)}function Gy(i,n){if(i.indexOf(n[1])===-1)return-1;let t=0;for(let s=0;s<i.length;s++)if(i[s]==="\\")s++;else if(i[s]===n[0])t++;else if(i[s]===n[1]&&(t--,t<0))return s;return-1}function Zc(i,n,t,s){const o=n.href,a=n.title?wn(n.title):null,l=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){s.state.inLink=!0;const f={type:"link",raw:t,href:o,title:a,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,f}return{type:"image",raw:t,href:o,title:a,text:wn(l)}}function jy(i,n){const t=i.match(/^(\s+)(?:```)/);if(t===null)return n;const s=t[1];return n.split(`
`).map(o=>{const a=o.match(/^\s+/);if(a===null)return o;const[l]=a;return l.length>=s.length?o.slice(s.length):o}).join(`
`)}class Fs{constructor(n){Ee(this,"options");Ee(this,"rules");Ee(this,"lexer");this.options=n||mi}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const s=t[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:ar(s,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const s=t[0],o=jy(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:o}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let s=t[2].trim();if(/#$/.test(s)){const o=ar(s,"#");(this.options.pedantic||!o||/ $/.test(o))&&(s=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:ar(t[0],`
`)}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let s=ar(t[0],`
`).split(`
`),o="",a="";const l=[];for(;s.length>0;){let f=!1;const p=[];let m;for(m=0;m<s.length;m++)if(/^ {0,3}>/.test(s[m]))p.push(s[m]),f=!0;else if(!f)p.push(s[m]);else break;s=s.slice(m);const v=p.join(`
`),D=v.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");o=o?`${o}
${v}`:v,a=a?`${a}
${D}`:D;const k=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(D,l,!0),this.lexer.state.top=k,s.length===0)break;const w=l[l.length-1];if((w==null?void 0:w.type)==="code")break;if((w==null?void 0:w.type)==="blockquote"){const F=w,B=F.raw+`
`+s.join(`
`),Y=this.blockquote(B);l[l.length-1]=Y,o=o.substring(0,o.length-F.raw.length)+Y.raw,a=a.substring(0,a.length-F.text.length)+Y.text;break}else if((w==null?void 0:w.type)==="list"){const F=w,B=F.raw+`
`+s.join(`
`),Y=this.list(B);l[l.length-1]=Y,o=o.substring(0,o.length-w.raw.length)+Y.raw,a=a.substring(0,a.length-F.raw.length)+Y.raw,s=B.substring(l[l.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:l,text:a}}}list(n){let t=this.rules.block.list.exec(n);if(t){let s=t[1].trim();const o=s.length>1,a={type:"list",raw:"",ordered:o,start:o?+s.slice(0,-1):"",loose:!1,items:[]};s=o?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=o?s:"[*+-]");const l=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let f=!1;for(;n;){let p=!1,m="",v="";if(!(t=l.exec(n))||this.rules.block.hr.test(n))break;m=t[0],n=n.substring(m.length);let D=t[2].split(`
`,1)[0].replace(/^\t+/,ce=>" ".repeat(3*ce.length)),k=n.split(`
`,1)[0],w=!D.trim(),F=0;if(this.options.pedantic?(F=2,v=D.trimStart()):w?F=t[1].length+1:(F=t[2].search(/[^ ]/),F=F>4?1:F,v=D.slice(F),F+=t[1].length),w&&/^[ \t]*$/.test(k)&&(m+=k+`
`,n=n.substring(k.length+1),p=!0),!p){const ce=new RegExp(`^ {0,${Math.min(3,F-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Se=new RegExp(`^ {0,${Math.min(3,F-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),me=new RegExp(`^ {0,${Math.min(3,F-1)}}(?:\`\`\`|~~~)`),Ce=new RegExp(`^ {0,${Math.min(3,F-1)}}#`),je=new RegExp(`^ {0,${Math.min(3,F-1)}}<[a-z].*>`,"i");for(;n;){const Je=n.split(`
`,1)[0];let Re;if(k=Je,this.options.pedantic?(k=k.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),Re=k):Re=k.replace(/\t/g,"    "),me.test(k)||Ce.test(k)||je.test(k)||ce.test(k)||Se.test(k))break;if(Re.search(/[^ ]/)>=F||!k.trim())v+=`
`+Re.slice(F);else{if(w||D.replace(/\t/g,"    ").search(/[^ ]/)>=4||me.test(D)||Ce.test(D)||Se.test(D))break;v+=`
`+k}!w&&!k.trim()&&(w=!0),m+=Je+`
`,n=n.substring(Je.length+1),D=Re.slice(F)}}a.loose||(f?a.loose=!0:/\n[ \t]*\n[ \t]*$/.test(m)&&(f=!0));let B=null,Y;this.options.gfm&&(B=/^\[[ xX]\] /.exec(v),B&&(Y=B[0]!=="[ ] ",v=v.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:m,task:!!B,checked:Y,loose:!1,text:v,tokens:[]}),a.raw+=m}a.items[a.items.length-1].raw=a.items[a.items.length-1].raw.trimEnd(),a.items[a.items.length-1].text=a.items[a.items.length-1].text.trimEnd(),a.raw=a.raw.trimEnd();for(let p=0;p<a.items.length;p++)if(this.lexer.state.top=!1,a.items[p].tokens=this.lexer.blockTokens(a.items[p].text,[]),!a.loose){const m=a.items[p].tokens.filter(D=>D.type==="space"),v=m.length>0&&m.some(D=>/\n.*\n/.test(D.raw));a.loose=v}if(a.loose)for(let p=0;p<a.items.length;p++)a.items[p].loose=!0;return a}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),o=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:o,title:a}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const s=Kc(t[1]),o=t[2].replace(/^\||\| *$/g,"").split("|"),a=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],l={type:"table",raw:t[0],header:[],align:[],rows:[]};if(s.length===o.length){for(const f of o)/^ *-+: *$/.test(f)?l.align.push("right"):/^ *:-+: *$/.test(f)?l.align.push("center"):/^ *:-+ *$/.test(f)?l.align.push("left"):l.align.push(null);for(let f=0;f<s.length;f++)l.header.push({text:s[f],tokens:this.lexer.inline(s[f]),header:!0,align:l.align[f]});for(const f of a)l.rows.push(Kc(f,l.header.length).map((p,m)=>({text:p,tokens:this.lexer.inline(p),header:!1,align:l.align[m]})));return l}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:wn(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const l=ar(s.slice(0,-1),"\\");if((s.length-l.length)%2===0)return}else{const l=Gy(t[2],"()");if(l>-1){const p=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,p).trim(),t[3]=""}}let o=t[2],a="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);l&&(o=l[1],a=l[3])}else a=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(s)?o=o.slice(1):o=o.slice(1,-1)),Zc(t,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let s;if((s=this.rules.inline.reflink.exec(n))||(s=this.rules.inline.nolink.exec(n))){const o=(s[2]||s[1]).replace(/\s+/g," "),a=t[o.toLowerCase()];if(!a){const l=s[0].charAt(0);return{type:"text",raw:l,text:l}}return Zc(s,a,s[0],this.lexer)}}emStrong(n,t,s=""){let o=this.rules.inline.emStrongLDelim.exec(n);if(!o||o[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const l=[...o[0]].length-1;let f,p,m=l,v=0;const D=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(D.lastIndex=0,t=t.slice(-1*n.length+l);(o=D.exec(t))!=null;){if(f=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!f)continue;if(p=[...f].length,o[3]||o[4]){m+=p;continue}else if((o[5]||o[6])&&l%3&&!((l+p)%3)){v+=p;continue}if(m-=p,m>0)continue;p=Math.min(p,p+m+v);const k=[...o[0]][0].length,w=n.slice(0,l+o.index+k+p);if(Math.min(l,p)%2){const B=w.slice(1,-1);return{type:"em",raw:w,text:B,tokens:this.lexer.inlineTokens(B)}}const F=w.slice(2,-2);return{type:"strong",raw:w,text:F,tokens:this.lexer.inlineTokens(F)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let s=t[2].replace(/\n/g," ");const o=/[^ ]/.test(s),a=/^ /.test(s)&&/ $/.test(s);return o&&a&&(s=s.substring(1,s.length-1)),s=wn(s,!0),{type:"codespan",raw:t[0],text:s}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let s,o;return t[2]==="@"?(s=wn(t[1]),o="mailto:"+s):(s=wn(t[1]),o=s),{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}url(n){var s;let t;if(t=this.rules.inline.url.exec(n)){let o,a;if(t[2]==="@")o=wn(t[0]),a="mailto:"+o;else{let l;do l=t[0],t[0]=((s=this.rules.inline._backpedal.exec(t[0]))==null?void 0:s[0])??"";while(l!==t[0]);o=wn(t[0]),t[1]==="www."?a="http://"+t[0]:a=t[0]}return{type:"link",raw:t[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let s;return this.lexer.state.inRawBlock?s=t[0]:s=wn(t[0]),{type:"text",raw:t[0],text:s}}}}const qy=/^(?:[ \t]*(?:\n|$))+/,Yy=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Wy=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ar=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Jy=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,xf=/(?:[*+-]|\d{1,9}[.)])/,Rf=ye(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,xf).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Va=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,zy=/^[^\n]+/,Ga=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Qy=ye(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ga).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Hy=ye(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,xf).getRegex(),Us="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ja=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Xy=ye("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ja).replace("tag",Us).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Lf=ye(Va).replace("hr",Ar).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Us).getRegex(),Ky=ye(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Lf).getRegex(),qa={blockquote:Ky,code:Yy,def:Qy,fences:Wy,heading:Jy,hr:Ar,html:Xy,lheading:Rf,list:Hy,newline:qy,paragraph:Lf,table:dr,text:zy},ef=ye("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ar).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Us).getRegex(),Zy={...qa,table:ef,paragraph:ye(Va).replace("hr",Ar).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ef).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Us).getRegex()},e_={...qa,html:ye(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ja).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:dr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ye(Va).replace("hr",Ar).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Rf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Bf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,n_=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Pf=/^( {2,}|\\)\n(?!\s*$)/,t_=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ir="\\p{P}\\p{S}",i_=ye(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ir).getRegex(),r_=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,s_=ye(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ir).getRegex(),o_=ye("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ir).getRegex(),a_=ye("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ir).getRegex(),u_=ye(/\\([punct])/,"gu").replace(/punct/g,Ir).getRegex(),l_=ye(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),c_=ye(ja).replace("(?:-->|$)","-->").getRegex(),f_=ye("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",c_).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ns=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,p_=ye(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ns).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),$f=ye(/^!?\[(label)\]\[(ref)\]/).replace("label",Ns).replace("ref",Ga).getRegex(),Uf=ye(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ga).getRegex(),d_=ye("reflink|nolink(?!\\()","g").replace("reflink",$f).replace("nolink",Uf).getRegex(),Ya={_backpedal:dr,anyPunctuation:u_,autolink:l_,blockSkip:r_,br:Pf,code:n_,del:dr,emStrongLDelim:s_,emStrongRDelimAst:o_,emStrongRDelimUnd:a_,escape:Bf,link:p_,nolink:Uf,punctuation:i_,reflink:$f,reflinkSearch:d_,tag:f_,text:t_,url:dr},h_={...Ya,link:ye(/^!?\[(label)\]\((.*?)\)/).replace("label",Ns).getRegex(),reflink:ye(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ns).getRegex()},ba={...Ya,escape:ye(Bf).replace("])","~|])").getRegex(),url:ye(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},g_={...ba,br:ye(Pf).replace("{2,}","*").getRegex(),text:ye(ba.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ds={normal:qa,gfm:Zy,pedantic:e_},ur={normal:Ya,gfm:ba,breaks:g_,pedantic:h_};class Fn{constructor(n){Ee(this,"tokens");Ee(this,"options");Ee(this,"state");Ee(this,"tokenizer");Ee(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||mi,this.options.tokenizer=this.options.tokenizer||new Fs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Ds.normal,inline:ur.normal};this.options.pedantic?(t.block=Ds.pedantic,t.inline=ur.pedantic):this.options.gfm&&(t.block=Ds.gfm,this.options.breaks?t.inline=ur.breaks:t.inline=ur.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ds,inline:ur}}static lex(n,t){return new Fn(t).lex(n)}static lexInline(n,t){return new Fn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],s=!1){this.options.pedantic&&(n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""));let o,a,l;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(f=>(o=f.call({lexer:this},n,t))?(n=n.substring(o.raw.length),t.push(o),!0):!1))){if(o=this.tokenizer.space(n)){n=n.substring(o.raw.length),o.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(o);continue}if(o=this.tokenizer.code(n)){n=n.substring(o.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(o);continue}if(o=this.tokenizer.fences(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.heading(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.hr(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.blockquote(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.list(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.html(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.def(n)){n=n.substring(o.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.lheading(n)){n=n.substring(o.raw.length),t.push(o);continue}if(l=n,this.options.extensions&&this.options.extensions.startBlock){let f=1/0;const p=n.slice(1);let m;this.options.extensions.startBlock.forEach(v=>{m=v.call({lexer:this},p),typeof m=="number"&&m>=0&&(f=Math.min(f,m))}),f<1/0&&f>=0&&(l=n.substring(0,f+1))}if(this.state.top&&(o=this.tokenizer.paragraph(l))){a=t[t.length-1],s&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(o),s=l.length!==n.length,n=n.substring(o.raw.length);continue}if(o=this.tokenizer.text(n)){n=n.substring(o.raw.length),a=t[t.length-1],a&&a.type==="text"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(o);continue}if(n){const f="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let s,o,a,l=n,f,p,m;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)v.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,f.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(p||(m=""),p=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(s=v.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(n,l,m)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(n)){n=n.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(n))){n=n.substring(s.raw.length),t.push(s);continue}if(a=n,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const D=n.slice(1);let k;this.options.extensions.startInline.forEach(w=>{k=w.call({lexer:this},D),typeof k=="number"&&k>=0&&(v=Math.min(v,k))}),v<1/0&&v>=0&&(a=n.substring(0,v+1))}if(s=this.tokenizer.inlineText(a)){n=n.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(m=s.raw.slice(-1)),p=!0,o=t[t.length-1],o&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(n){const v="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return t}}class Cs{constructor(n){Ee(this,"options");Ee(this,"parser");this.options=n||mi}space(n){return""}code({text:n,lang:t,escaped:s}){var l;const o=(l=(t||"").match(/^\S*/))==null?void 0:l[0],a=n.replace(/\n$/,"")+`
`;return o?'<pre><code class="language-'+wn(o)+'">'+(s?a:wn(a,!0))+`</code></pre>
`:"<pre><code>"+(s?a:wn(a,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){const t=n.ordered,s=n.start;let o="";for(let f=0;f<n.items.length;f++){const p=n.items[f];o+=this.listitem(p)}const a=t?"ol":"ul",l=t&&s!==1?' start="'+s+'"':"";return"<"+a+l+`>
`+o+"</"+a+`>
`}listitem(n){let t="";if(n.task){const s=this.checkbox({checked:!!n.checked});n.loose?n.tokens.length>0&&n.tokens[0].type==="paragraph"?(n.tokens[0].text=s+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=s+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",raw:s+" ",text:s+" "}):t+=s+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",s="";for(let a=0;a<n.header.length;a++)s+=this.tablecell(n.header[a]);t+=this.tablerow({text:s});let o="";for(let a=0;a<n.rows.length;a++){const l=n.rows[a];s="";for(let f=0;f<l.length;f++)s+=this.tablecell(l[f]);o+=this.tablerow({text:s})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+o+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const t=this.parser.parseInline(n.tokens),s=n.header?"th":"td";return(n.align?`<${s} align="${n.align}">`:`<${s}>`)+t+`</${s}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${n}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:s}){const o=this.parser.parseInline(s),a=Xc(n);if(a===null)return o;n=a;let l='<a href="'+n+'"';return t&&(l+=' title="'+t+'"'),l+=">"+o+"</a>",l}image({href:n,title:t,text:s}){const o=Xc(n);if(o===null)return s;n=o;let a=`<img src="${n}" alt="${s}"`;return t&&(a+=` title="${t}"`),a+=">",a}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}}class Wa{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}}class Mn{constructor(n){Ee(this,"options");Ee(this,"renderer");Ee(this,"textRenderer");this.options=n||mi,this.options.renderer=this.options.renderer||new Cs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Wa}static parse(n,t){return new Mn(t).parse(n)}static parseInline(n,t){return new Mn(t).parseInline(n)}parse(n,t=!0){let s="";for(let o=0;o<n.length;o++){const a=n[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const f=a,p=this.options.extensions.renderers[f.type].call({parser:this},f);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type)){s+=p||"";continue}}const l=a;switch(l.type){case"space":{s+=this.renderer.space(l);continue}case"hr":{s+=this.renderer.hr(l);continue}case"heading":{s+=this.renderer.heading(l);continue}case"code":{s+=this.renderer.code(l);continue}case"table":{s+=this.renderer.table(l);continue}case"blockquote":{s+=this.renderer.blockquote(l);continue}case"list":{s+=this.renderer.list(l);continue}case"html":{s+=this.renderer.html(l);continue}case"paragraph":{s+=this.renderer.paragraph(l);continue}case"text":{let f=l,p=this.renderer.text(f);for(;o+1<n.length&&n[o+1].type==="text";)f=n[++o],p+=`
`+this.renderer.text(f);t?s+=this.renderer.paragraph({type:"paragraph",raw:p,text:p,tokens:[{type:"text",raw:p,text:p}]}):s+=p;continue}default:{const f='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return s}parseInline(n,t){t=t||this.renderer;let s="";for(let o=0;o<n.length;o++){const a=n[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const f=this.options.extensions.renderers[a.type].call({parser:this},a);if(f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){s+=f||"";continue}}const l=a;switch(l.type){case"escape":{s+=t.text(l);break}case"html":{s+=t.html(l);break}case"link":{s+=t.link(l);break}case"image":{s+=t.image(l);break}case"strong":{s+=t.strong(l);break}case"em":{s+=t.em(l);break}case"codespan":{s+=t.codespan(l);break}case"br":{s+=t.br(l);break}case"del":{s+=t.del(l);break}case"text":{s+=t.text(l);break}default:{const f='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return s}}class hr{constructor(n){Ee(this,"options");Ee(this,"block");this.options=n||mi}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}provideLexer(){return this.block?Fn.lex:Fn.lexInline}provideParser(){return this.block?Mn.parse:Mn.parseInline}}Ee(hr,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class m_{constructor(...n){Ee(this,"defaults",Ma());Ee(this,"options",this.setOptions);Ee(this,"parse",this.parseMarkdown(!0));Ee(this,"parseInline",this.parseMarkdown(!1));Ee(this,"Parser",Mn);Ee(this,"Renderer",Cs);Ee(this,"TextRenderer",Wa);Ee(this,"Lexer",Fn);Ee(this,"Tokenizer",Fs);Ee(this,"Hooks",hr);this.use(...n)}walkTokens(n,t){var o,a;let s=[];for(const l of n)switch(s=s.concat(t.call(this,l)),l.type){case"table":{const f=l;for(const p of f.header)s=s.concat(this.walkTokens(p.tokens,t));for(const p of f.rows)for(const m of p)s=s.concat(this.walkTokens(m.tokens,t));break}case"list":{const f=l;s=s.concat(this.walkTokens(f.items,t));break}default:{const f=l;(a=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&a[f.type]?this.defaults.extensions.childTokens[f.type].forEach(p=>{const m=f[p].flat(1/0);s=s.concat(this.walkTokens(m,t))}):f.tokens&&(s=s.concat(this.walkTokens(f.tokens,t)))}}return s}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(s=>{const o={...s};if(o.async=this.defaults.async||o.async||!1,s.extensions&&(s.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const l=t.renderers[a.name];l?t.renderers[a.name]=function(...f){let p=a.renderer.apply(this,f);return p===!1&&(p=l.apply(this,f)),p}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[a.level];l?l.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),o.extensions=t),s.renderer){const a=this.defaults.renderer||new Cs(this.defaults);for(const l in s.renderer){if(!(l in a))throw new Error(`renderer '${l}' does not exist`);if(["options","parser"].includes(l))continue;const f=l,p=s.renderer[f],m=a[f];a[f]=(...v)=>{let D=p.apply(a,v);return D===!1&&(D=m.apply(a,v)),D||""}}o.renderer=a}if(s.tokenizer){const a=this.defaults.tokenizer||new Fs(this.defaults);for(const l in s.tokenizer){if(!(l in a))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;const f=l,p=s.tokenizer[f],m=a[f];a[f]=(...v)=>{let D=p.apply(a,v);return D===!1&&(D=m.apply(a,v)),D}}o.tokenizer=a}if(s.hooks){const a=this.defaults.hooks||new hr;for(const l in s.hooks){if(!(l in a))throw new Error(`hook '${l}' does not exist`);if(["options","block"].includes(l))continue;const f=l,p=s.hooks[f],m=a[f];hr.passThroughHooks.has(l)?a[f]=v=>{if(this.defaults.async)return Promise.resolve(p.call(a,v)).then(k=>m.call(a,k));const D=p.call(a,v);return m.call(a,D)}:a[f]=(...v)=>{let D=p.apply(a,v);return D===!1&&(D=m.apply(a,v)),D}}o.hooks=a}if(s.walkTokens){const a=this.defaults.walkTokens,l=s.walkTokens;o.walkTokens=function(f){let p=[];return p.push(l.call(this,f)),a&&(p=p.concat(a.call(this,f))),p}}this.defaults={...this.defaults,...o}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return Fn.lex(n,t??this.defaults)}parser(n,t){return Mn.parse(n,t??this.defaults)}parseMarkdown(n){return(s,o)=>{const a={...o},l={...this.defaults,...a},f=this.onError(!!l.silent,!!l.async);if(this.defaults.async===!0&&a.async===!1)return f(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof s>"u"||s===null)return f(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return f(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));l.hooks&&(l.hooks.options=l,l.hooks.block=n);const p=l.hooks?l.hooks.provideLexer():n?Fn.lex:Fn.lexInline,m=l.hooks?l.hooks.provideParser():n?Mn.parse:Mn.parseInline;if(l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(s):s).then(v=>p(v,l)).then(v=>l.hooks?l.hooks.processAllTokens(v):v).then(v=>l.walkTokens?Promise.all(this.walkTokens(v,l.walkTokens)).then(()=>v):v).then(v=>m(v,l)).then(v=>l.hooks?l.hooks.postprocess(v):v).catch(f);try{l.hooks&&(s=l.hooks.preprocess(s));let v=p(s,l);l.hooks&&(v=l.hooks.processAllTokens(v)),l.walkTokens&&this.walkTokens(v,l.walkTokens);let D=m(v,l);return l.hooks&&(D=l.hooks.postprocess(D)),D}catch(v){return f(v)}}}onError(n,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const o="<p>An error occurred:</p><pre>"+wn(s.message+"",!0)+"</pre>";return t?Promise.resolve(o):o}if(t)return Promise.reject(s);throw s}}}const fi=new m_;function De(i,n){return fi.parse(i,n)}De.options=De.setOptions=function(i){return fi.setOptions(i),De.defaults=fi.defaults,Cf(De.defaults),De};De.getDefaults=Ma;De.defaults=mi;De.use=function(...i){return fi.use(...i),De.defaults=fi.defaults,Cf(De.defaults),De};De.walkTokens=function(i,n){return fi.walkTokens(i,n)};De.parseInline=fi.parseInline;De.Parser=Mn;De.parser=Mn.parse;De.Renderer=Cs;De.TextRenderer=Wa;De.Lexer=Fn;De.lexer=Fn.lex;De.Tokenizer=Fs;De.Hooks=hr;De.parse=De;De.options;De.setOptions;De.use;De.walkTokens;De.parseInline;Mn.parse;Fn.lex;function v_(i){return new Fn().lex(i)}const E_=()=>({heading:LD,blockquote:$D,list:VD,list_item:qD,br:JD,code:HD,codespan:ZD,table:ty,html:sy,paragraph:uy,link:fy,text:hy,def:vy,del:yy,em:Ay,hr:Sy,strong:Ny,image:ky,space:Qc,escape:Qc}),D_=()=>({baseUrl:"/",slugger:new Nf});function y_(){const i=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||i(n)},ID(()=>{console.warn=i})}function __(i){let n,t;return n=new $s({props:{tokens:i[0],renderers:i[1],options:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){gi(n.$$.fragment,s)},m(s,o){Jt(n,s,o),t=!0},p(s,[o]){const a={};o&1&&(a.tokens=s[0]),o&2&&(a.renderers=s[1]),o&4&&(a.options=s[2]),n.$set(a)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){zt(n,s)}}}function T_(i,n,t){y_();let{source:s}=n,{options:o={}}=n,{renderers:a={}}=n,l,f,p;return i.$$set=m=>{"source"in m&&t(3,s=m.source),"options"in m&&t(4,o=m.options),"renderers"in m&&t(5,a=m.renderers)},i.$$.update=()=>{i.$$.dirty&56&&(t(0,l=v_(s)),t(1,f={...E_(),...a}),t(2,p={...D_(),...o}))},[l,f,p,s,o,a]}class AI extends Be{constructor(n){super(),Pe(this,n,T_,__,Ne,{source:3,options:4,renderers:5})}}const br={joinUrlPaths:Er,isRelative:Dr,generatePathSegment:Ff};var lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function A_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Os={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Os.exports;(function(i,n){(function(){var t,s="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",f="Invalid `variable` option passed into `_.template`",p="__lodash_hash_undefined__",m=500,v="__lodash_placeholder__",D=1,k=2,w=4,F=1,B=2,Y=1,ce=2,Se=4,me=8,Ce=16,je=32,Je=64,Re=128,gt=256,x=512,X=30,an="...",Rt=800,Xt=16,Fr=1,Ei=2,Nr=3,at=1/0,qn=9007199254740991,Di=17976931348623157e292,Kt=NaN,Cn=4294967295,b=Cn-1,G=Cn>>>1,$=[["ary",Re],["bind",Y],["bindKey",ce],["curry",me],["curryRight",Ce],["flip",x],["partial",je],["partialRight",Je],["rearg",gt]],M="[object Arguments]",de="[object Array]",$e="[object AsyncFunction]",he="[object Boolean]",On="[object Date]",Mi="[object DOMException]",Lt="[object Error]",tn="[object Function]",ru="[object GeneratorFunction]",Yn="[object Map]",Vi="[object Number]",Pp="[object Null]",mt="[object Object]",su="[object Promise]",$p="[object Proxy]",Gi="[object RegExp]",Wn="[object Set]",ji="[object String]",Cr="[object Symbol]",Up="[object Undefined]",qi="[object WeakMap]",Mp="[object WeakSet]",Yi="[object ArrayBuffer]",yi="[object DataView]",Qs="[object Float32Array]",Hs="[object Float64Array]",Xs="[object Int8Array]",Ks="[object Int16Array]",Zs="[object Int32Array]",eo="[object Uint8Array]",no="[object Uint8ClampedArray]",to="[object Uint16Array]",io="[object Uint32Array]",Vp=/\b__p \+= '';/g,Gp=/\b(__p \+=) '' \+/g,jp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ou=/&(?:amp|lt|gt|quot|#39);/g,au=/[&<>"']/g,qp=RegExp(ou.source),Yp=RegExp(au.source),Wp=/<%-([\s\S]+?)%>/g,Jp=/<%([\s\S]+?)%>/g,uu=/<%=([\s\S]+?)%>/g,zp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qp=/^\w*$/,Hp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ro=/[\\^$.*+?()[\]{}|]/g,Xp=RegExp(ro.source),so=/^\s+/,Kp=/\s/,Zp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ed=/\{\n\/\* \[wrapped with (.+)\] \*/,nd=/,? & /,td=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,id=/[()=,{}\[\]\/\s]/,rd=/\\(\\)?/g,sd=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,lu=/\w*$/,od=/^[-+]0x[0-9a-f]+$/i,ad=/^0b[01]+$/i,ud=/^\[object .+?Constructor\]$/,ld=/^0o[0-7]+$/i,cd=/^(?:0|[1-9]\d*)$/,fd=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Or=/($^)/,pd=/['\n\r\u2028\u2029\\]/g,kr="\\ud800-\\udfff",dd="\\u0300-\\u036f",hd="\\ufe20-\\ufe2f",gd="\\u20d0-\\u20ff",cu=dd+hd+gd,fu="\\u2700-\\u27bf",pu="a-z\\xdf-\\xf6\\xf8-\\xff",md="\\xac\\xb1\\xd7\\xf7",vd="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ed="\\u2000-\\u206f",Dd=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",du="A-Z\\xc0-\\xd6\\xd8-\\xde",hu="\\ufe0e\\ufe0f",gu=md+vd+Ed+Dd,oo="['’]",yd="["+kr+"]",mu="["+gu+"]",xr="["+cu+"]",vu="\\d+",_d="["+fu+"]",Eu="["+pu+"]",Du="[^"+kr+gu+vu+fu+pu+du+"]",ao="\\ud83c[\\udffb-\\udfff]",Td="(?:"+xr+"|"+ao+")",yu="[^"+kr+"]",uo="(?:\\ud83c[\\udde6-\\uddff]){2}",lo="[\\ud800-\\udbff][\\udc00-\\udfff]",_i="["+du+"]",_u="\\u200d",Tu="(?:"+Eu+"|"+Du+")",Ad="(?:"+_i+"|"+Du+")",Au="(?:"+oo+"(?:d|ll|m|re|s|t|ve))?",Iu="(?:"+oo+"(?:D|LL|M|RE|S|T|VE))?",bu=Td+"?",Su="["+hu+"]?",Id="(?:"+_u+"(?:"+[yu,uo,lo].join("|")+")"+Su+bu+")*",bd="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Sd="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",wu=Su+bu+Id,wd="(?:"+[_d,uo,lo].join("|")+")"+wu,Fd="(?:"+[yu+xr+"?",xr,uo,lo,yd].join("|")+")",Nd=RegExp(oo,"g"),Cd=RegExp(xr,"g"),co=RegExp(ao+"(?="+ao+")|"+Fd+wu,"g"),Od=RegExp([_i+"?"+Eu+"+"+Au+"(?="+[mu,_i,"$"].join("|")+")",Ad+"+"+Iu+"(?="+[mu,_i+Tu,"$"].join("|")+")",_i+"?"+Tu+"+"+Au,_i+"+"+Iu,Sd,bd,vu,wd].join("|"),"g"),kd=RegExp("["+_u+kr+cu+hu+"]"),xd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Rd=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ld=-1,we={};we[Qs]=we[Hs]=we[Xs]=we[Ks]=we[Zs]=we[eo]=we[no]=we[to]=we[io]=!0,we[M]=we[de]=we[Yi]=we[he]=we[yi]=we[On]=we[Lt]=we[tn]=we[Yn]=we[Vi]=we[mt]=we[Gi]=we[Wn]=we[ji]=we[qi]=!1;var Ie={};Ie[M]=Ie[de]=Ie[Yi]=Ie[yi]=Ie[he]=Ie[On]=Ie[Qs]=Ie[Hs]=Ie[Xs]=Ie[Ks]=Ie[Zs]=Ie[Yn]=Ie[Vi]=Ie[mt]=Ie[Gi]=Ie[Wn]=Ie[ji]=Ie[Cr]=Ie[eo]=Ie[no]=Ie[to]=Ie[io]=!0,Ie[Lt]=Ie[tn]=Ie[qi]=!1;var Bd={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Pd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$d={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Ud={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Md=parseFloat,Vd=parseInt,Fu=typeof lr=="object"&&lr&&lr.Object===Object&&lr,Gd=typeof self=="object"&&self&&self.Object===Object&&self,Ze=Fu||Gd||Function("return this")(),fo=n&&!n.nodeType&&n,Zt=fo&&!0&&i&&!i.nodeType&&i,Nu=Zt&&Zt.exports===fo,po=Nu&&Fu.process,kn=function(){try{var T=Zt&&Zt.require&&Zt.require("util").types;return T||po&&po.binding&&po.binding("util")}catch{}}(),Cu=kn&&kn.isArrayBuffer,Ou=kn&&kn.isDate,ku=kn&&kn.isMap,xu=kn&&kn.isRegExp,Ru=kn&&kn.isSet,Lu=kn&&kn.isTypedArray;function yn(T,S,I){switch(I.length){case 0:return T.call(S);case 1:return T.call(S,I[0]);case 2:return T.call(S,I[0],I[1]);case 3:return T.call(S,I[0],I[1],I[2])}return T.apply(S,I)}function jd(T,S,I,V){for(var K=-1,pe=T==null?0:T.length;++K<pe;){var ze=T[K];S(V,ze,I(ze),T)}return V}function xn(T,S){for(var I=-1,V=T==null?0:T.length;++I<V&&S(T[I],I,T)!==!1;);return T}function qd(T,S){for(var I=T==null?0:T.length;I--&&S(T[I],I,T)!==!1;);return T}function Bu(T,S){for(var I=-1,V=T==null?0:T.length;++I<V;)if(!S(T[I],I,T))return!1;return!0}function Bt(T,S){for(var I=-1,V=T==null?0:T.length,K=0,pe=[];++I<V;){var ze=T[I];S(ze,I,T)&&(pe[K++]=ze)}return pe}function Rr(T,S){var I=T==null?0:T.length;return!!I&&Ti(T,S,0)>-1}function ho(T,S,I){for(var V=-1,K=T==null?0:T.length;++V<K;)if(I(S,T[V]))return!0;return!1}function Fe(T,S){for(var I=-1,V=T==null?0:T.length,K=Array(V);++I<V;)K[I]=S(T[I],I,T);return K}function Pt(T,S){for(var I=-1,V=S.length,K=T.length;++I<V;)T[K+I]=S[I];return T}function go(T,S,I,V){var K=-1,pe=T==null?0:T.length;for(V&&pe&&(I=T[++K]);++K<pe;)I=S(I,T[K],K,T);return I}function Yd(T,S,I,V){var K=T==null?0:T.length;for(V&&K&&(I=T[--K]);K--;)I=S(I,T[K],K,T);return I}function mo(T,S){for(var I=-1,V=T==null?0:T.length;++I<V;)if(S(T[I],I,T))return!0;return!1}var Wd=vo("length");function Jd(T){return T.split("")}function zd(T){return T.match(td)||[]}function Pu(T,S,I){var V;return I(T,function(K,pe,ze){if(S(K,pe,ze))return V=pe,!1}),V}function Lr(T,S,I,V){for(var K=T.length,pe=I+(V?1:-1);V?pe--:++pe<K;)if(S(T[pe],pe,T))return pe;return-1}function Ti(T,S,I){return S===S?oh(T,S,I):Lr(T,$u,I)}function Qd(T,S,I,V){for(var K=I-1,pe=T.length;++K<pe;)if(V(T[K],S))return K;return-1}function $u(T){return T!==T}function Uu(T,S){var I=T==null?0:T.length;return I?Do(T,S)/I:Kt}function vo(T){return function(S){return S==null?t:S[T]}}function Eo(T){return function(S){return T==null?t:T[S]}}function Mu(T,S,I,V,K){return K(T,function(pe,ze,Te){I=V?(V=!1,pe):S(I,pe,ze,Te)}),I}function Hd(T,S){var I=T.length;for(T.sort(S);I--;)T[I]=T[I].value;return T}function Do(T,S){for(var I,V=-1,K=T.length;++V<K;){var pe=S(T[V]);pe!==t&&(I=I===t?pe:I+pe)}return I}function yo(T,S){for(var I=-1,V=Array(T);++I<T;)V[I]=S(I);return V}function Xd(T,S){return Fe(S,function(I){return[I,T[I]]})}function Vu(T){return T&&T.slice(0,Yu(T)+1).replace(so,"")}function _n(T){return function(S){return T(S)}}function _o(T,S){return Fe(S,function(I){return T[I]})}function Wi(T,S){return T.has(S)}function Gu(T,S){for(var I=-1,V=T.length;++I<V&&Ti(S,T[I],0)>-1;);return I}function ju(T,S){for(var I=T.length;I--&&Ti(S,T[I],0)>-1;);return I}function Kd(T,S){for(var I=T.length,V=0;I--;)T[I]===S&&++V;return V}var Zd=Eo(Bd),eh=Eo(Pd);function nh(T){return"\\"+Ud[T]}function th(T,S){return T==null?t:T[S]}function Ai(T){return kd.test(T)}function ih(T){return xd.test(T)}function rh(T){for(var S,I=[];!(S=T.next()).done;)I.push(S.value);return I}function To(T){var S=-1,I=Array(T.size);return T.forEach(function(V,K){I[++S]=[K,V]}),I}function qu(T,S){return function(I){return T(S(I))}}function $t(T,S){for(var I=-1,V=T.length,K=0,pe=[];++I<V;){var ze=T[I];(ze===S||ze===v)&&(T[I]=v,pe[K++]=I)}return pe}function Br(T){var S=-1,I=Array(T.size);return T.forEach(function(V){I[++S]=V}),I}function sh(T){var S=-1,I=Array(T.size);return T.forEach(function(V){I[++S]=[V,V]}),I}function oh(T,S,I){for(var V=I-1,K=T.length;++V<K;)if(T[V]===S)return V;return-1}function ah(T,S,I){for(var V=I+1;V--;)if(T[V]===S)return V;return V}function Ii(T){return Ai(T)?lh(T):Wd(T)}function Jn(T){return Ai(T)?ch(T):Jd(T)}function Yu(T){for(var S=T.length;S--&&Kp.test(T.charAt(S)););return S}var uh=Eo($d);function lh(T){for(var S=co.lastIndex=0;co.test(T);)++S;return S}function ch(T){return T.match(co)||[]}function fh(T){return T.match(Od)||[]}var ph=function T(S){S=S==null?Ze:bi.defaults(Ze.Object(),S,bi.pick(Ze,Rd));var I=S.Array,V=S.Date,K=S.Error,pe=S.Function,ze=S.Math,Te=S.Object,Ao=S.RegExp,dh=S.String,Rn=S.TypeError,Pr=I.prototype,hh=pe.prototype,Si=Te.prototype,$r=S["__core-js_shared__"],Ur=hh.toString,ve=Si.hasOwnProperty,gh=0,Wu=function(){var e=/[^.]+$/.exec($r&&$r.keys&&$r.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Mr=Si.toString,mh=Ur.call(Te),vh=Ze._,Eh=Ao("^"+Ur.call(ve).replace(ro,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Vr=Nu?S.Buffer:t,Ut=S.Symbol,Gr=S.Uint8Array,Ju=Vr?Vr.allocUnsafe:t,jr=qu(Te.getPrototypeOf,Te),zu=Te.create,Qu=Si.propertyIsEnumerable,qr=Pr.splice,Hu=Ut?Ut.isConcatSpreadable:t,Ji=Ut?Ut.iterator:t,ei=Ut?Ut.toStringTag:t,Yr=function(){try{var e=si(Te,"defineProperty");return e({},"",{}),e}catch{}}(),Dh=S.clearTimeout!==Ze.clearTimeout&&S.clearTimeout,yh=V&&V.now!==Ze.Date.now&&V.now,_h=S.setTimeout!==Ze.setTimeout&&S.setTimeout,Wr=ze.ceil,Jr=ze.floor,Io=Te.getOwnPropertySymbols,Th=Vr?Vr.isBuffer:t,Xu=S.isFinite,Ah=Pr.join,Ih=qu(Te.keys,Te),Qe=ze.max,rn=ze.min,bh=V.now,Sh=S.parseInt,Ku=ze.random,wh=Pr.reverse,bo=si(S,"DataView"),zi=si(S,"Map"),So=si(S,"Promise"),wi=si(S,"Set"),Qi=si(S,"WeakMap"),Hi=si(Te,"create"),zr=Qi&&new Qi,Fi={},Fh=oi(bo),Nh=oi(zi),Ch=oi(So),Oh=oi(wi),kh=oi(Qi),Qr=Ut?Ut.prototype:t,Xi=Qr?Qr.valueOf:t,Zu=Qr?Qr.toString:t;function h(e){if(Le(e)&&!Z(e)&&!(e instanceof ae)){if(e instanceof Ln)return e;if(ve.call(e,"__wrapped__"))return ec(e)}return new Ln(e)}var Ni=function(){function e(){}return function(r){if(!Oe(r))return{};if(zu)return zu(r);e.prototype=r;var u=new e;return e.prototype=t,u}}();function Hr(){}function Ln(e,r){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}h.templateSettings={escape:Wp,evaluate:Jp,interpolate:uu,variable:"",imports:{_:h}},h.prototype=Hr.prototype,h.prototype.constructor=h,Ln.prototype=Ni(Hr.prototype),Ln.prototype.constructor=Ln;function ae(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Cn,this.__views__=[]}function xh(){var e=new ae(this.__wrapped__);return e.__actions__=dn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=dn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=dn(this.__views__),e}function Rh(){if(this.__filtered__){var e=new ae(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Lh(){var e=this.__wrapped__.value(),r=this.__dir__,u=Z(e),c=r<0,d=u?e.length:0,g=Jg(0,d,this.__views__),E=g.start,y=g.end,A=y-E,N=c?y:E-1,C=this.__iteratees__,R=C.length,P=0,q=rn(A,this.__takeCount__);if(!u||!c&&d==A&&q==A)return Al(e,this.__actions__);var z=[];e:for(;A--&&P<q;){N+=r;for(var te=-1,Q=e[N];++te<R;){var se=C[te],le=se.iteratee,In=se.type,cn=le(Q);if(In==Ei)Q=cn;else if(!cn){if(In==Fr)continue e;break e}}z[P++]=Q}return z}ae.prototype=Ni(Hr.prototype),ae.prototype.constructor=ae;function ni(e){var r=-1,u=e==null?0:e.length;for(this.clear();++r<u;){var c=e[r];this.set(c[0],c[1])}}function Bh(){this.__data__=Hi?Hi(null):{},this.size=0}function Ph(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}function $h(e){var r=this.__data__;if(Hi){var u=r[e];return u===p?t:u}return ve.call(r,e)?r[e]:t}function Uh(e){var r=this.__data__;return Hi?r[e]!==t:ve.call(r,e)}function Mh(e,r){var u=this.__data__;return this.size+=this.has(e)?0:1,u[e]=Hi&&r===t?p:r,this}ni.prototype.clear=Bh,ni.prototype.delete=Ph,ni.prototype.get=$h,ni.prototype.has=Uh,ni.prototype.set=Mh;function vt(e){var r=-1,u=e==null?0:e.length;for(this.clear();++r<u;){var c=e[r];this.set(c[0],c[1])}}function Vh(){this.__data__=[],this.size=0}function Gh(e){var r=this.__data__,u=Xr(r,e);if(u<0)return!1;var c=r.length-1;return u==c?r.pop():qr.call(r,u,1),--this.size,!0}function jh(e){var r=this.__data__,u=Xr(r,e);return u<0?t:r[u][1]}function qh(e){return Xr(this.__data__,e)>-1}function Yh(e,r){var u=this.__data__,c=Xr(u,e);return c<0?(++this.size,u.push([e,r])):u[c][1]=r,this}vt.prototype.clear=Vh,vt.prototype.delete=Gh,vt.prototype.get=jh,vt.prototype.has=qh,vt.prototype.set=Yh;function Et(e){var r=-1,u=e==null?0:e.length;for(this.clear();++r<u;){var c=e[r];this.set(c[0],c[1])}}function Wh(){this.size=0,this.__data__={hash:new ni,map:new(zi||vt),string:new ni}}function Jh(e){var r=ls(this,e).delete(e);return this.size-=r?1:0,r}function zh(e){return ls(this,e).get(e)}function Qh(e){return ls(this,e).has(e)}function Hh(e,r){var u=ls(this,e),c=u.size;return u.set(e,r),this.size+=u.size==c?0:1,this}Et.prototype.clear=Wh,Et.prototype.delete=Jh,Et.prototype.get=zh,Et.prototype.has=Qh,Et.prototype.set=Hh;function ti(e){var r=-1,u=e==null?0:e.length;for(this.__data__=new Et;++r<u;)this.add(e[r])}function Xh(e){return this.__data__.set(e,p),this}function Kh(e){return this.__data__.has(e)}ti.prototype.add=ti.prototype.push=Xh,ti.prototype.has=Kh;function zn(e){var r=this.__data__=new vt(e);this.size=r.size}function Zh(){this.__data__=new vt,this.size=0}function eg(e){var r=this.__data__,u=r.delete(e);return this.size=r.size,u}function ng(e){return this.__data__.get(e)}function tg(e){return this.__data__.has(e)}function ig(e,r){var u=this.__data__;if(u instanceof vt){var c=u.__data__;if(!zi||c.length<o-1)return c.push([e,r]),this.size=++u.size,this;u=this.__data__=new Et(c)}return u.set(e,r),this.size=u.size,this}zn.prototype.clear=Zh,zn.prototype.delete=eg,zn.prototype.get=ng,zn.prototype.has=tg,zn.prototype.set=ig;function el(e,r){var u=Z(e),c=!u&&ai(e),d=!u&&!c&&qt(e),g=!u&&!c&&!d&&xi(e),E=u||c||d||g,y=E?yo(e.length,dh):[],A=y.length;for(var N in e)(r||ve.call(e,N))&&!(E&&(N=="length"||d&&(N=="offset"||N=="parent")||g&&(N=="buffer"||N=="byteLength"||N=="byteOffset")||Tt(N,A)))&&y.push(N);return y}function nl(e){var r=e.length;return r?e[Po(0,r-1)]:t}function rg(e,r){return cs(dn(e),ii(r,0,e.length))}function sg(e){return cs(dn(e))}function wo(e,r,u){(u!==t&&!Qn(e[r],u)||u===t&&!(r in e))&&Dt(e,r,u)}function Ki(e,r,u){var c=e[r];(!(ve.call(e,r)&&Qn(c,u))||u===t&&!(r in e))&&Dt(e,r,u)}function Xr(e,r){for(var u=e.length;u--;)if(Qn(e[u][0],r))return u;return-1}function og(e,r,u,c){return Mt(e,function(d,g,E){r(c,d,u(d),E)}),c}function tl(e,r){return e&&lt(r,He(r),e)}function ag(e,r){return e&&lt(r,gn(r),e)}function Dt(e,r,u){r=="__proto__"&&Yr?Yr(e,r,{configurable:!0,enumerable:!0,value:u,writable:!0}):e[r]=u}function Fo(e,r){for(var u=-1,c=r.length,d=I(c),g=e==null;++u<c;)d[u]=g?t:ua(e,r[u]);return d}function ii(e,r,u){return e===e&&(u!==t&&(e=e<=u?e:u),r!==t&&(e=e>=r?e:r)),e}function Bn(e,r,u,c,d,g){var E,y=r&D,A=r&k,N=r&w;if(u&&(E=d?u(e,c,d,g):u(e)),E!==t)return E;if(!Oe(e))return e;var C=Z(e);if(C){if(E=Qg(e),!y)return dn(e,E)}else{var R=sn(e),P=R==tn||R==ru;if(qt(e))return Sl(e,y);if(R==mt||R==M||P&&!d){if(E=A||P?{}:Yl(e),!y)return A?$g(e,ag(E,e)):Pg(e,tl(E,e))}else{if(!Ie[R])return d?e:{};E=Hg(e,R,y)}}g||(g=new zn);var q=g.get(e);if(q)return q;g.set(e,E),yc(e)?e.forEach(function(Q){E.add(Bn(Q,r,u,Q,e,g))}):Ec(e)&&e.forEach(function(Q,se){E.set(se,Bn(Q,r,u,se,e,g))});var z=N?A?zo:Jo:A?gn:He,te=C?t:z(e);return xn(te||e,function(Q,se){te&&(se=Q,Q=e[se]),Ki(E,se,Bn(Q,r,u,se,e,g))}),E}function ug(e){var r=He(e);return function(u){return il(u,e,r)}}function il(e,r,u){var c=u.length;if(e==null)return!c;for(e=Te(e);c--;){var d=u[c],g=r[d],E=e[d];if(E===t&&!(d in e)||!g(E))return!1}return!0}function rl(e,r,u){if(typeof e!="function")throw new Rn(l);return sr(function(){e.apply(t,u)},r)}function Zi(e,r,u,c){var d=-1,g=Rr,E=!0,y=e.length,A=[],N=r.length;if(!y)return A;u&&(r=Fe(r,_n(u))),c?(g=ho,E=!1):r.length>=o&&(g=Wi,E=!1,r=new ti(r));e:for(;++d<y;){var C=e[d],R=u==null?C:u(C);if(C=c||C!==0?C:0,E&&R===R){for(var P=N;P--;)if(r[P]===R)continue e;A.push(C)}else g(r,R,c)||A.push(C)}return A}var Mt=Ol(ut),sl=Ol(Co,!0);function lg(e,r){var u=!0;return Mt(e,function(c,d,g){return u=!!r(c,d,g),u}),u}function Kr(e,r,u){for(var c=-1,d=e.length;++c<d;){var g=e[c],E=r(g);if(E!=null&&(y===t?E===E&&!An(E):u(E,y)))var y=E,A=g}return A}function cg(e,r,u,c){var d=e.length;for(u=ne(u),u<0&&(u=-u>d?0:d+u),c=c===t||c>d?d:ne(c),c<0&&(c+=d),c=u>c?0:Tc(c);u<c;)e[u++]=r;return e}function ol(e,r){var u=[];return Mt(e,function(c,d,g){r(c,d,g)&&u.push(c)}),u}function en(e,r,u,c,d){var g=-1,E=e.length;for(u||(u=Kg),d||(d=[]);++g<E;){var y=e[g];r>0&&u(y)?r>1?en(y,r-1,u,c,d):Pt(d,y):c||(d[d.length]=y)}return d}var No=kl(),al=kl(!0);function ut(e,r){return e&&No(e,r,He)}function Co(e,r){return e&&al(e,r,He)}function Zr(e,r){return Bt(r,function(u){return At(e[u])})}function ri(e,r){r=Gt(r,e);for(var u=0,c=r.length;e!=null&&u<c;)e=e[ct(r[u++])];return u&&u==c?e:t}function ul(e,r,u){var c=r(e);return Z(e)?c:Pt(c,u(e))}function un(e){return e==null?e===t?Up:Pp:ei&&ei in Te(e)?Wg(e):sm(e)}function Oo(e,r){return e>r}function fg(e,r){return e!=null&&ve.call(e,r)}function pg(e,r){return e!=null&&r in Te(e)}function dg(e,r,u){return e>=rn(r,u)&&e<Qe(r,u)}function ko(e,r,u){for(var c=u?ho:Rr,d=e[0].length,g=e.length,E=g,y=I(g),A=1/0,N=[];E--;){var C=e[E];E&&r&&(C=Fe(C,_n(r))),A=rn(C.length,A),y[E]=!u&&(r||d>=120&&C.length>=120)?new ti(E&&C):t}C=e[0];var R=-1,P=y[0];e:for(;++R<d&&N.length<A;){var q=C[R],z=r?r(q):q;if(q=u||q!==0?q:0,!(P?Wi(P,z):c(N,z,u))){for(E=g;--E;){var te=y[E];if(!(te?Wi(te,z):c(e[E],z,u)))continue e}P&&P.push(z),N.push(q)}}return N}function hg(e,r,u,c){return ut(e,function(d,g,E){r(c,u(d),g,E)}),c}function er(e,r,u){r=Gt(r,e),e=Ql(e,r);var c=e==null?e:e[ct($n(r))];return c==null?t:yn(c,e,u)}function ll(e){return Le(e)&&un(e)==M}function gg(e){return Le(e)&&un(e)==Yi}function mg(e){return Le(e)&&un(e)==On}function nr(e,r,u,c,d){return e===r?!0:e==null||r==null||!Le(e)&&!Le(r)?e!==e&&r!==r:vg(e,r,u,c,nr,d)}function vg(e,r,u,c,d,g){var E=Z(e),y=Z(r),A=E?de:sn(e),N=y?de:sn(r);A=A==M?mt:A,N=N==M?mt:N;var C=A==mt,R=N==mt,P=A==N;if(P&&qt(e)){if(!qt(r))return!1;E=!0,C=!1}if(P&&!C)return g||(g=new zn),E||xi(e)?Gl(e,r,u,c,d,g):qg(e,r,A,u,c,d,g);if(!(u&F)){var q=C&&ve.call(e,"__wrapped__"),z=R&&ve.call(r,"__wrapped__");if(q||z){var te=q?e.value():e,Q=z?r.value():r;return g||(g=new zn),d(te,Q,u,c,g)}}return P?(g||(g=new zn),Yg(e,r,u,c,d,g)):!1}function Eg(e){return Le(e)&&sn(e)==Yn}function xo(e,r,u,c){var d=u.length,g=d,E=!c;if(e==null)return!g;for(e=Te(e);d--;){var y=u[d];if(E&&y[2]?y[1]!==e[y[0]]:!(y[0]in e))return!1}for(;++d<g;){y=u[d];var A=y[0],N=e[A],C=y[1];if(E&&y[2]){if(N===t&&!(A in e))return!1}else{var R=new zn;if(c)var P=c(N,C,A,e,r,R);if(!(P===t?nr(C,N,F|B,c,R):P))return!1}}return!0}function cl(e){if(!Oe(e)||em(e))return!1;var r=At(e)?Eh:ud;return r.test(oi(e))}function Dg(e){return Le(e)&&un(e)==Gi}function yg(e){return Le(e)&&sn(e)==Wn}function _g(e){return Le(e)&&ms(e.length)&&!!we[un(e)]}function fl(e){return typeof e=="function"?e:e==null?mn:typeof e=="object"?Z(e)?hl(e[0],e[1]):dl(e):xc(e)}function Ro(e){if(!rr(e))return Ih(e);var r=[];for(var u in Te(e))ve.call(e,u)&&u!="constructor"&&r.push(u);return r}function Tg(e){if(!Oe(e))return rm(e);var r=rr(e),u=[];for(var c in e)c=="constructor"&&(r||!ve.call(e,c))||u.push(c);return u}function Lo(e,r){return e<r}function pl(e,r){var u=-1,c=hn(e)?I(e.length):[];return Mt(e,function(d,g,E){c[++u]=r(d,g,E)}),c}function dl(e){var r=Ho(e);return r.length==1&&r[0][2]?Jl(r[0][0],r[0][1]):function(u){return u===e||xo(u,e,r)}}function hl(e,r){return Ko(e)&&Wl(r)?Jl(ct(e),r):function(u){var c=ua(u,e);return c===t&&c===r?la(u,e):nr(r,c,F|B)}}function es(e,r,u,c,d){e!==r&&No(r,function(g,E){if(d||(d=new zn),Oe(g))Ag(e,r,E,u,es,c,d);else{var y=c?c(ea(e,E),g,E+"",e,r,d):t;y===t&&(y=g),wo(e,E,y)}},gn)}function Ag(e,r,u,c,d,g,E){var y=ea(e,u),A=ea(r,u),N=E.get(A);if(N){wo(e,u,N);return}var C=g?g(y,A,u+"",e,r,E):t,R=C===t;if(R){var P=Z(A),q=!P&&qt(A),z=!P&&!q&&xi(A);C=A,P||q||z?Z(y)?C=y:Ue(y)?C=dn(y):q?(R=!1,C=Sl(A,!0)):z?(R=!1,C=wl(A,!0)):C=[]:or(A)||ai(A)?(C=y,ai(y)?C=Ac(y):(!Oe(y)||At(y))&&(C=Yl(A))):R=!1}R&&(E.set(A,C),d(C,A,c,g,E),E.delete(A)),wo(e,u,C)}function gl(e,r){var u=e.length;if(u)return r+=r<0?u:0,Tt(r,u)?e[r]:t}function ml(e,r,u){r.length?r=Fe(r,function(g){return Z(g)?function(E){return ri(E,g.length===1?g[0]:g)}:g}):r=[mn];var c=-1;r=Fe(r,_n(J()));var d=pl(e,function(g,E,y){var A=Fe(r,function(N){return N(g)});return{criteria:A,index:++c,value:g}});return Hd(d,function(g,E){return Bg(g,E,u)})}function Ig(e,r){return vl(e,r,function(u,c){return la(e,c)})}function vl(e,r,u){for(var c=-1,d=r.length,g={};++c<d;){var E=r[c],y=ri(e,E);u(y,E)&&tr(g,Gt(E,e),y)}return g}function bg(e){return function(r){return ri(r,e)}}function Bo(e,r,u,c){var d=c?Qd:Ti,g=-1,E=r.length,y=e;for(e===r&&(r=dn(r)),u&&(y=Fe(e,_n(u)));++g<E;)for(var A=0,N=r[g],C=u?u(N):N;(A=d(y,C,A,c))>-1;)y!==e&&qr.call(y,A,1),qr.call(e,A,1);return e}function El(e,r){for(var u=e?r.length:0,c=u-1;u--;){var d=r[u];if(u==c||d!==g){var g=d;Tt(d)?qr.call(e,d,1):Mo(e,d)}}return e}function Po(e,r){return e+Jr(Ku()*(r-e+1))}function Sg(e,r,u,c){for(var d=-1,g=Qe(Wr((r-e)/(u||1)),0),E=I(g);g--;)E[c?g:++d]=e,e+=u;return E}function $o(e,r){var u="";if(!e||r<1||r>qn)return u;do r%2&&(u+=e),r=Jr(r/2),r&&(e+=e);while(r);return u}function ie(e,r){return na(zl(e,r,mn),e+"")}function wg(e){return nl(Ri(e))}function Fg(e,r){var u=Ri(e);return cs(u,ii(r,0,u.length))}function tr(e,r,u,c){if(!Oe(e))return e;r=Gt(r,e);for(var d=-1,g=r.length,E=g-1,y=e;y!=null&&++d<g;){var A=ct(r[d]),N=u;if(A==="__proto__"||A==="constructor"||A==="prototype")return e;if(d!=E){var C=y[A];N=c?c(C,A,y):t,N===t&&(N=Oe(C)?C:Tt(r[d+1])?[]:{})}Ki(y,A,N),y=y[A]}return e}var Dl=zr?function(e,r){return zr.set(e,r),e}:mn,Ng=Yr?function(e,r){return Yr(e,"toString",{configurable:!0,enumerable:!1,value:fa(r),writable:!0})}:mn;function Cg(e){return cs(Ri(e))}function Pn(e,r,u){var c=-1,d=e.length;r<0&&(r=-r>d?0:d+r),u=u>d?d:u,u<0&&(u+=d),d=r>u?0:u-r>>>0,r>>>=0;for(var g=I(d);++c<d;)g[c]=e[c+r];return g}function Og(e,r){var u;return Mt(e,function(c,d,g){return u=r(c,d,g),!u}),!!u}function ns(e,r,u){var c=0,d=e==null?c:e.length;if(typeof r=="number"&&r===r&&d<=G){for(;c<d;){var g=c+d>>>1,E=e[g];E!==null&&!An(E)&&(u?E<=r:E<r)?c=g+1:d=g}return d}return Uo(e,r,mn,u)}function Uo(e,r,u,c){var d=0,g=e==null?0:e.length;if(g===0)return 0;r=u(r);for(var E=r!==r,y=r===null,A=An(r),N=r===t;d<g;){var C=Jr((d+g)/2),R=u(e[C]),P=R!==t,q=R===null,z=R===R,te=An(R);if(E)var Q=c||z;else N?Q=z&&(c||P):y?Q=z&&P&&(c||!q):A?Q=z&&P&&!q&&(c||!te):q||te?Q=!1:Q=c?R<=r:R<r;Q?d=C+1:g=C}return rn(g,b)}function yl(e,r){for(var u=-1,c=e.length,d=0,g=[];++u<c;){var E=e[u],y=r?r(E):E;if(!u||!Qn(y,A)){var A=y;g[d++]=E===0?0:E}}return g}function _l(e){return typeof e=="number"?e:An(e)?Kt:+e}function Tn(e){if(typeof e=="string")return e;if(Z(e))return Fe(e,Tn)+"";if(An(e))return Zu?Zu.call(e):"";var r=e+"";return r=="0"&&1/e==-at?"-0":r}function Vt(e,r,u){var c=-1,d=Rr,g=e.length,E=!0,y=[],A=y;if(u)E=!1,d=ho;else if(g>=o){var N=r?null:Gg(e);if(N)return Br(N);E=!1,d=Wi,A=new ti}else A=r?[]:y;e:for(;++c<g;){var C=e[c],R=r?r(C):C;if(C=u||C!==0?C:0,E&&R===R){for(var P=A.length;P--;)if(A[P]===R)continue e;r&&A.push(R),y.push(C)}else d(A,R,u)||(A!==y&&A.push(R),y.push(C))}return y}function Mo(e,r){return r=Gt(r,e),e=Ql(e,r),e==null||delete e[ct($n(r))]}function Tl(e,r,u,c){return tr(e,r,u(ri(e,r)),c)}function ts(e,r,u,c){for(var d=e.length,g=c?d:-1;(c?g--:++g<d)&&r(e[g],g,e););return u?Pn(e,c?0:g,c?g+1:d):Pn(e,c?g+1:0,c?d:g)}function Al(e,r){var u=e;return u instanceof ae&&(u=u.value()),go(r,function(c,d){return d.func.apply(d.thisArg,Pt([c],d.args))},u)}function Vo(e,r,u){var c=e.length;if(c<2)return c?Vt(e[0]):[];for(var d=-1,g=I(c);++d<c;)for(var E=e[d],y=-1;++y<c;)y!=d&&(g[d]=Zi(g[d]||E,e[y],r,u));return Vt(en(g,1),r,u)}function Il(e,r,u){for(var c=-1,d=e.length,g=r.length,E={};++c<d;){var y=c<g?r[c]:t;u(E,e[c],y)}return E}function Go(e){return Ue(e)?e:[]}function jo(e){return typeof e=="function"?e:mn}function Gt(e,r){return Z(e)?e:Ko(e,r)?[e]:Zl(ge(e))}var kg=ie;function jt(e,r,u){var c=e.length;return u=u===t?c:u,!r&&u>=c?e:Pn(e,r,u)}var bl=Dh||function(e){return Ze.clearTimeout(e)};function Sl(e,r){if(r)return e.slice();var u=e.length,c=Ju?Ju(u):new e.constructor(u);return e.copy(c),c}function qo(e){var r=new e.constructor(e.byteLength);return new Gr(r).set(new Gr(e)),r}function xg(e,r){var u=r?qo(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.byteLength)}function Rg(e){var r=new e.constructor(e.source,lu.exec(e));return r.lastIndex=e.lastIndex,r}function Lg(e){return Xi?Te(Xi.call(e)):{}}function wl(e,r){var u=r?qo(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.length)}function Fl(e,r){if(e!==r){var u=e!==t,c=e===null,d=e===e,g=An(e),E=r!==t,y=r===null,A=r===r,N=An(r);if(!y&&!N&&!g&&e>r||g&&E&&A&&!y&&!N||c&&E&&A||!u&&A||!d)return 1;if(!c&&!g&&!N&&e<r||N&&u&&d&&!c&&!g||y&&u&&d||!E&&d||!A)return-1}return 0}function Bg(e,r,u){for(var c=-1,d=e.criteria,g=r.criteria,E=d.length,y=u.length;++c<E;){var A=Fl(d[c],g[c]);if(A){if(c>=y)return A;var N=u[c];return A*(N=="desc"?-1:1)}}return e.index-r.index}function Nl(e,r,u,c){for(var d=-1,g=e.length,E=u.length,y=-1,A=r.length,N=Qe(g-E,0),C=I(A+N),R=!c;++y<A;)C[y]=r[y];for(;++d<E;)(R||d<g)&&(C[u[d]]=e[d]);for(;N--;)C[y++]=e[d++];return C}function Cl(e,r,u,c){for(var d=-1,g=e.length,E=-1,y=u.length,A=-1,N=r.length,C=Qe(g-y,0),R=I(C+N),P=!c;++d<C;)R[d]=e[d];for(var q=d;++A<N;)R[q+A]=r[A];for(;++E<y;)(P||d<g)&&(R[q+u[E]]=e[d++]);return R}function dn(e,r){var u=-1,c=e.length;for(r||(r=I(c));++u<c;)r[u]=e[u];return r}function lt(e,r,u,c){var d=!u;u||(u={});for(var g=-1,E=r.length;++g<E;){var y=r[g],A=c?c(u[y],e[y],y,u,e):t;A===t&&(A=e[y]),d?Dt(u,y,A):Ki(u,y,A)}return u}function Pg(e,r){return lt(e,Xo(e),r)}function $g(e,r){return lt(e,jl(e),r)}function is(e,r){return function(u,c){var d=Z(u)?jd:og,g=r?r():{};return d(u,e,J(c,2),g)}}function Ci(e){return ie(function(r,u){var c=-1,d=u.length,g=d>1?u[d-1]:t,E=d>2?u[2]:t;for(g=e.length>3&&typeof g=="function"?(d--,g):t,E&&ln(u[0],u[1],E)&&(g=d<3?t:g,d=1),r=Te(r);++c<d;){var y=u[c];y&&e(r,y,c,g)}return r})}function Ol(e,r){return function(u,c){if(u==null)return u;if(!hn(u))return e(u,c);for(var d=u.length,g=r?d:-1,E=Te(u);(r?g--:++g<d)&&c(E[g],g,E)!==!1;);return u}}function kl(e){return function(r,u,c){for(var d=-1,g=Te(r),E=c(r),y=E.length;y--;){var A=E[e?y:++d];if(u(g[A],A,g)===!1)break}return r}}function Ug(e,r,u){var c=r&Y,d=ir(e);function g(){var E=this&&this!==Ze&&this instanceof g?d:e;return E.apply(c?u:this,arguments)}return g}function xl(e){return function(r){r=ge(r);var u=Ai(r)?Jn(r):t,c=u?u[0]:r.charAt(0),d=u?jt(u,1).join(""):r.slice(1);return c[e]()+d}}function Oi(e){return function(r){return go(Oc(Cc(r).replace(Nd,"")),e,"")}}function ir(e){return function(){var r=arguments;switch(r.length){case 0:return new e;case 1:return new e(r[0]);case 2:return new e(r[0],r[1]);case 3:return new e(r[0],r[1],r[2]);case 4:return new e(r[0],r[1],r[2],r[3]);case 5:return new e(r[0],r[1],r[2],r[3],r[4]);case 6:return new e(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new e(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var u=Ni(e.prototype),c=e.apply(u,r);return Oe(c)?c:u}}function Mg(e,r,u){var c=ir(e);function d(){for(var g=arguments.length,E=I(g),y=g,A=ki(d);y--;)E[y]=arguments[y];var N=g<3&&E[0]!==A&&E[g-1]!==A?[]:$t(E,A);if(g-=N.length,g<u)return $l(e,r,rs,d.placeholder,t,E,N,t,t,u-g);var C=this&&this!==Ze&&this instanceof d?c:e;return yn(C,this,E)}return d}function Rl(e){return function(r,u,c){var d=Te(r);if(!hn(r)){var g=J(u,3);r=He(r),u=function(y){return g(d[y],y,d)}}var E=e(r,u,c);return E>-1?d[g?r[E]:E]:t}}function Ll(e){return _t(function(r){var u=r.length,c=u,d=Ln.prototype.thru;for(e&&r.reverse();c--;){var g=r[c];if(typeof g!="function")throw new Rn(l);if(d&&!E&&us(g)=="wrapper")var E=new Ln([],!0)}for(c=E?c:u;++c<u;){g=r[c];var y=us(g),A=y=="wrapper"?Qo(g):t;A&&Zo(A[0])&&A[1]==(Re|me|je|gt)&&!A[4].length&&A[9]==1?E=E[us(A[0])].apply(E,A[3]):E=g.length==1&&Zo(g)?E[y]():E.thru(g)}return function(){var N=arguments,C=N[0];if(E&&N.length==1&&Z(C))return E.plant(C).value();for(var R=0,P=u?r[R].apply(this,N):C;++R<u;)P=r[R].call(this,P);return P}})}function rs(e,r,u,c,d,g,E,y,A,N){var C=r&Re,R=r&Y,P=r&ce,q=r&(me|Ce),z=r&x,te=P?t:ir(e);function Q(){for(var se=arguments.length,le=I(se),In=se;In--;)le[In]=arguments[In];if(q)var cn=ki(Q),bn=Kd(le,cn);if(c&&(le=Nl(le,c,d,q)),g&&(le=Cl(le,g,E,q)),se-=bn,q&&se<N){var Me=$t(le,cn);return $l(e,r,rs,Q.placeholder,u,le,Me,y,A,N-se)}var Hn=R?u:this,bt=P?Hn[e]:e;return se=le.length,y?le=om(le,y):z&&se>1&&le.reverse(),C&&A<se&&(le.length=A),this&&this!==Ze&&this instanceof Q&&(bt=te||ir(bt)),bt.apply(Hn,le)}return Q}function Bl(e,r){return function(u,c){return hg(u,e,r(c),{})}}function ss(e,r){return function(u,c){var d;if(u===t&&c===t)return r;if(u!==t&&(d=u),c!==t){if(d===t)return c;typeof u=="string"||typeof c=="string"?(u=Tn(u),c=Tn(c)):(u=_l(u),c=_l(c)),d=e(u,c)}return d}}function Yo(e){return _t(function(r){return r=Fe(r,_n(J())),ie(function(u){var c=this;return e(r,function(d){return yn(d,c,u)})})})}function os(e,r){r=r===t?" ":Tn(r);var u=r.length;if(u<2)return u?$o(r,e):r;var c=$o(r,Wr(e/Ii(r)));return Ai(r)?jt(Jn(c),0,e).join(""):c.slice(0,e)}function Vg(e,r,u,c){var d=r&Y,g=ir(e);function E(){for(var y=-1,A=arguments.length,N=-1,C=c.length,R=I(C+A),P=this&&this!==Ze&&this instanceof E?g:e;++N<C;)R[N]=c[N];for(;A--;)R[N++]=arguments[++y];return yn(P,d?u:this,R)}return E}function Pl(e){return function(r,u,c){return c&&typeof c!="number"&&ln(r,u,c)&&(u=c=t),r=It(r),u===t?(u=r,r=0):u=It(u),c=c===t?r<u?1:-1:It(c),Sg(r,u,c,e)}}function as(e){return function(r,u){return typeof r=="string"&&typeof u=="string"||(r=Un(r),u=Un(u)),e(r,u)}}function $l(e,r,u,c,d,g,E,y,A,N){var C=r&me,R=C?E:t,P=C?t:E,q=C?g:t,z=C?t:g;r|=C?je:Je,r&=~(C?Je:je),r&Se||(r&=~(Y|ce));var te=[e,r,d,q,R,z,P,y,A,N],Q=u.apply(t,te);return Zo(e)&&Hl(Q,te),Q.placeholder=c,Xl(Q,e,r)}function Wo(e){var r=ze[e];return function(u,c){if(u=Un(u),c=c==null?0:rn(ne(c),292),c&&Xu(u)){var d=(ge(u)+"e").split("e"),g=r(d[0]+"e"+(+d[1]+c));return d=(ge(g)+"e").split("e"),+(d[0]+"e"+(+d[1]-c))}return r(u)}}var Gg=wi&&1/Br(new wi([,-0]))[1]==at?function(e){return new wi(e)}:ha;function Ul(e){return function(r){var u=sn(r);return u==Yn?To(r):u==Wn?sh(r):Xd(r,e(r))}}function yt(e,r,u,c,d,g,E,y){var A=r&ce;if(!A&&typeof e!="function")throw new Rn(l);var N=c?c.length:0;if(N||(r&=~(je|Je),c=d=t),E=E===t?E:Qe(ne(E),0),y=y===t?y:ne(y),N-=d?d.length:0,r&Je){var C=c,R=d;c=d=t}var P=A?t:Qo(e),q=[e,r,u,c,d,C,R,g,E,y];if(P&&im(q,P),e=q[0],r=q[1],u=q[2],c=q[3],d=q[4],y=q[9]=q[9]===t?A?0:e.length:Qe(q[9]-N,0),!y&&r&(me|Ce)&&(r&=~(me|Ce)),!r||r==Y)var z=Ug(e,r,u);else r==me||r==Ce?z=Mg(e,r,y):(r==je||r==(Y|je))&&!d.length?z=Vg(e,r,u,c):z=rs.apply(t,q);var te=P?Dl:Hl;return Xl(te(z,q),e,r)}function Ml(e,r,u,c){return e===t||Qn(e,Si[u])&&!ve.call(c,u)?r:e}function Vl(e,r,u,c,d,g){return Oe(e)&&Oe(r)&&(g.set(r,e),es(e,r,t,Vl,g),g.delete(r)),e}function jg(e){return or(e)?t:e}function Gl(e,r,u,c,d,g){var E=u&F,y=e.length,A=r.length;if(y!=A&&!(E&&A>y))return!1;var N=g.get(e),C=g.get(r);if(N&&C)return N==r&&C==e;var R=-1,P=!0,q=u&B?new ti:t;for(g.set(e,r),g.set(r,e);++R<y;){var z=e[R],te=r[R];if(c)var Q=E?c(te,z,R,r,e,g):c(z,te,R,e,r,g);if(Q!==t){if(Q)continue;P=!1;break}if(q){if(!mo(r,function(se,le){if(!Wi(q,le)&&(z===se||d(z,se,u,c,g)))return q.push(le)})){P=!1;break}}else if(!(z===te||d(z,te,u,c,g))){P=!1;break}}return g.delete(e),g.delete(r),P}function qg(e,r,u,c,d,g,E){switch(u){case yi:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Yi:return!(e.byteLength!=r.byteLength||!g(new Gr(e),new Gr(r)));case he:case On:case Vi:return Qn(+e,+r);case Lt:return e.name==r.name&&e.message==r.message;case Gi:case ji:return e==r+"";case Yn:var y=To;case Wn:var A=c&F;if(y||(y=Br),e.size!=r.size&&!A)return!1;var N=E.get(e);if(N)return N==r;c|=B,E.set(e,r);var C=Gl(y(e),y(r),c,d,g,E);return E.delete(e),C;case Cr:if(Xi)return Xi.call(e)==Xi.call(r)}return!1}function Yg(e,r,u,c,d,g){var E=u&F,y=Jo(e),A=y.length,N=Jo(r),C=N.length;if(A!=C&&!E)return!1;for(var R=A;R--;){var P=y[R];if(!(E?P in r:ve.call(r,P)))return!1}var q=g.get(e),z=g.get(r);if(q&&z)return q==r&&z==e;var te=!0;g.set(e,r),g.set(r,e);for(var Q=E;++R<A;){P=y[R];var se=e[P],le=r[P];if(c)var In=E?c(le,se,P,r,e,g):c(se,le,P,e,r,g);if(!(In===t?se===le||d(se,le,u,c,g):In)){te=!1;break}Q||(Q=P=="constructor")}if(te&&!Q){var cn=e.constructor,bn=r.constructor;cn!=bn&&"constructor"in e&&"constructor"in r&&!(typeof cn=="function"&&cn instanceof cn&&typeof bn=="function"&&bn instanceof bn)&&(te=!1)}return g.delete(e),g.delete(r),te}function _t(e){return na(zl(e,t,ic),e+"")}function Jo(e){return ul(e,He,Xo)}function zo(e){return ul(e,gn,jl)}var Qo=zr?function(e){return zr.get(e)}:ha;function us(e){for(var r=e.name+"",u=Fi[r],c=ve.call(Fi,r)?u.length:0;c--;){var d=u[c],g=d.func;if(g==null||g==e)return d.name}return r}function ki(e){var r=ve.call(h,"placeholder")?h:e;return r.placeholder}function J(){var e=h.iteratee||pa;return e=e===pa?fl:e,arguments.length?e(arguments[0],arguments[1]):e}function ls(e,r){var u=e.__data__;return Zg(r)?u[typeof r=="string"?"string":"hash"]:u.map}function Ho(e){for(var r=He(e),u=r.length;u--;){var c=r[u],d=e[c];r[u]=[c,d,Wl(d)]}return r}function si(e,r){var u=th(e,r);return cl(u)?u:t}function Wg(e){var r=ve.call(e,ei),u=e[ei];try{e[ei]=t;var c=!0}catch{}var d=Mr.call(e);return c&&(r?e[ei]=u:delete e[ei]),d}var Xo=Io?function(e){return e==null?[]:(e=Te(e),Bt(Io(e),function(r){return Qu.call(e,r)}))}:ga,jl=Io?function(e){for(var r=[];e;)Pt(r,Xo(e)),e=jr(e);return r}:ga,sn=un;(bo&&sn(new bo(new ArrayBuffer(1)))!=yi||zi&&sn(new zi)!=Yn||So&&sn(So.resolve())!=su||wi&&sn(new wi)!=Wn||Qi&&sn(new Qi)!=qi)&&(sn=function(e){var r=un(e),u=r==mt?e.constructor:t,c=u?oi(u):"";if(c)switch(c){case Fh:return yi;case Nh:return Yn;case Ch:return su;case Oh:return Wn;case kh:return qi}return r});function Jg(e,r,u){for(var c=-1,d=u.length;++c<d;){var g=u[c],E=g.size;switch(g.type){case"drop":e+=E;break;case"dropRight":r-=E;break;case"take":r=rn(r,e+E);break;case"takeRight":e=Qe(e,r-E);break}}return{start:e,end:r}}function zg(e){var r=e.match(ed);return r?r[1].split(nd):[]}function ql(e,r,u){r=Gt(r,e);for(var c=-1,d=r.length,g=!1;++c<d;){var E=ct(r[c]);if(!(g=e!=null&&u(e,E)))break;e=e[E]}return g||++c!=d?g:(d=e==null?0:e.length,!!d&&ms(d)&&Tt(E,d)&&(Z(e)||ai(e)))}function Qg(e){var r=e.length,u=new e.constructor(r);return r&&typeof e[0]=="string"&&ve.call(e,"index")&&(u.index=e.index,u.input=e.input),u}function Yl(e){return typeof e.constructor=="function"&&!rr(e)?Ni(jr(e)):{}}function Hg(e,r,u){var c=e.constructor;switch(r){case Yi:return qo(e);case he:case On:return new c(+e);case yi:return xg(e,u);case Qs:case Hs:case Xs:case Ks:case Zs:case eo:case no:case to:case io:return wl(e,u);case Yn:return new c;case Vi:case ji:return new c(e);case Gi:return Rg(e);case Wn:return new c;case Cr:return Lg(e)}}function Xg(e,r){var u=r.length;if(!u)return e;var c=u-1;return r[c]=(u>1?"& ":"")+r[c],r=r.join(u>2?", ":" "),e.replace(Zp,`{
/* [wrapped with `+r+`] */
`)}function Kg(e){return Z(e)||ai(e)||!!(Hu&&e&&e[Hu])}function Tt(e,r){var u=typeof e;return r=r??qn,!!r&&(u=="number"||u!="symbol"&&cd.test(e))&&e>-1&&e%1==0&&e<r}function ln(e,r,u){if(!Oe(u))return!1;var c=typeof r;return(c=="number"?hn(u)&&Tt(r,u.length):c=="string"&&r in u)?Qn(u[r],e):!1}function Ko(e,r){if(Z(e))return!1;var u=typeof e;return u=="number"||u=="symbol"||u=="boolean"||e==null||An(e)?!0:Qp.test(e)||!zp.test(e)||r!=null&&e in Te(r)}function Zg(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function Zo(e){var r=us(e),u=h[r];if(typeof u!="function"||!(r in ae.prototype))return!1;if(e===u)return!0;var c=Qo(u);return!!c&&e===c[0]}function em(e){return!!Wu&&Wu in e}var nm=$r?At:ma;function rr(e){var r=e&&e.constructor,u=typeof r=="function"&&r.prototype||Si;return e===u}function Wl(e){return e===e&&!Oe(e)}function Jl(e,r){return function(u){return u==null?!1:u[e]===r&&(r!==t||e in Te(u))}}function tm(e){var r=hs(e,function(c){return u.size===m&&u.clear(),c}),u=r.cache;return r}function im(e,r){var u=e[1],c=r[1],d=u|c,g=d<(Y|ce|Re),E=c==Re&&u==me||c==Re&&u==gt&&e[7].length<=r[8]||c==(Re|gt)&&r[7].length<=r[8]&&u==me;if(!(g||E))return e;c&Y&&(e[2]=r[2],d|=u&Y?0:Se);var y=r[3];if(y){var A=e[3];e[3]=A?Nl(A,y,r[4]):y,e[4]=A?$t(e[3],v):r[4]}return y=r[5],y&&(A=e[5],e[5]=A?Cl(A,y,r[6]):y,e[6]=A?$t(e[5],v):r[6]),y=r[7],y&&(e[7]=y),c&Re&&(e[8]=e[8]==null?r[8]:rn(e[8],r[8])),e[9]==null&&(e[9]=r[9]),e[0]=r[0],e[1]=d,e}function rm(e){var r=[];if(e!=null)for(var u in Te(e))r.push(u);return r}function sm(e){return Mr.call(e)}function zl(e,r,u){return r=Qe(r===t?e.length-1:r,0),function(){for(var c=arguments,d=-1,g=Qe(c.length-r,0),E=I(g);++d<g;)E[d]=c[r+d];d=-1;for(var y=I(r+1);++d<r;)y[d]=c[d];return y[r]=u(E),yn(e,this,y)}}function Ql(e,r){return r.length<2?e:ri(e,Pn(r,0,-1))}function om(e,r){for(var u=e.length,c=rn(r.length,u),d=dn(e);c--;){var g=r[c];e[c]=Tt(g,u)?d[g]:t}return e}function ea(e,r){if(!(r==="constructor"&&typeof e[r]=="function")&&r!="__proto__")return e[r]}var Hl=Kl(Dl),sr=_h||function(e,r){return Ze.setTimeout(e,r)},na=Kl(Ng);function Xl(e,r,u){var c=r+"";return na(e,Xg(c,am(zg(c),u)))}function Kl(e){var r=0,u=0;return function(){var c=bh(),d=Xt-(c-u);if(u=c,d>0){if(++r>=Rt)return arguments[0]}else r=0;return e.apply(t,arguments)}}function cs(e,r){var u=-1,c=e.length,d=c-1;for(r=r===t?c:r;++u<r;){var g=Po(u,d),E=e[g];e[g]=e[u],e[u]=E}return e.length=r,e}var Zl=tm(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Hp,function(u,c,d,g){r.push(d?g.replace(rd,"$1"):c||u)}),r});function ct(e){if(typeof e=="string"||An(e))return e;var r=e+"";return r=="0"&&1/e==-at?"-0":r}function oi(e){if(e!=null){try{return Ur.call(e)}catch{}try{return e+""}catch{}}return""}function am(e,r){return xn($,function(u){var c="_."+u[0];r&u[1]&&!Rr(e,c)&&e.push(c)}),e.sort()}function ec(e){if(e instanceof ae)return e.clone();var r=new Ln(e.__wrapped__,e.__chain__);return r.__actions__=dn(e.__actions__),r.__index__=e.__index__,r.__values__=e.__values__,r}function um(e,r,u){(u?ln(e,r,u):r===t)?r=1:r=Qe(ne(r),0);var c=e==null?0:e.length;if(!c||r<1)return[];for(var d=0,g=0,E=I(Wr(c/r));d<c;)E[g++]=Pn(e,d,d+=r);return E}function lm(e){for(var r=-1,u=e==null?0:e.length,c=0,d=[];++r<u;){var g=e[r];g&&(d[c++]=g)}return d}function cm(){var e=arguments.length;if(!e)return[];for(var r=I(e-1),u=arguments[0],c=e;c--;)r[c-1]=arguments[c];return Pt(Z(u)?dn(u):[u],en(r,1))}var fm=ie(function(e,r){return Ue(e)?Zi(e,en(r,1,Ue,!0)):[]}),pm=ie(function(e,r){var u=$n(r);return Ue(u)&&(u=t),Ue(e)?Zi(e,en(r,1,Ue,!0),J(u,2)):[]}),dm=ie(function(e,r){var u=$n(r);return Ue(u)&&(u=t),Ue(e)?Zi(e,en(r,1,Ue,!0),t,u):[]});function hm(e,r,u){var c=e==null?0:e.length;return c?(r=u||r===t?1:ne(r),Pn(e,r<0?0:r,c)):[]}function gm(e,r,u){var c=e==null?0:e.length;return c?(r=u||r===t?1:ne(r),r=c-r,Pn(e,0,r<0?0:r)):[]}function mm(e,r){return e&&e.length?ts(e,J(r,3),!0,!0):[]}function vm(e,r){return e&&e.length?ts(e,J(r,3),!0):[]}function Em(e,r,u,c){var d=e==null?0:e.length;return d?(u&&typeof u!="number"&&ln(e,r,u)&&(u=0,c=d),cg(e,r,u,c)):[]}function nc(e,r,u){var c=e==null?0:e.length;if(!c)return-1;var d=u==null?0:ne(u);return d<0&&(d=Qe(c+d,0)),Lr(e,J(r,3),d)}function tc(e,r,u){var c=e==null?0:e.length;if(!c)return-1;var d=c-1;return u!==t&&(d=ne(u),d=u<0?Qe(c+d,0):rn(d,c-1)),Lr(e,J(r,3),d,!0)}function ic(e){var r=e==null?0:e.length;return r?en(e,1):[]}function Dm(e){var r=e==null?0:e.length;return r?en(e,at):[]}function ym(e,r){var u=e==null?0:e.length;return u?(r=r===t?1:ne(r),en(e,r)):[]}function _m(e){for(var r=-1,u=e==null?0:e.length,c={};++r<u;){var d=e[r];c[d[0]]=d[1]}return c}function rc(e){return e&&e.length?e[0]:t}function Tm(e,r,u){var c=e==null?0:e.length;if(!c)return-1;var d=u==null?0:ne(u);return d<0&&(d=Qe(c+d,0)),Ti(e,r,d)}function Am(e){var r=e==null?0:e.length;return r?Pn(e,0,-1):[]}var Im=ie(function(e){var r=Fe(e,Go);return r.length&&r[0]===e[0]?ko(r):[]}),bm=ie(function(e){var r=$n(e),u=Fe(e,Go);return r===$n(u)?r=t:u.pop(),u.length&&u[0]===e[0]?ko(u,J(r,2)):[]}),Sm=ie(function(e){var r=$n(e),u=Fe(e,Go);return r=typeof r=="function"?r:t,r&&u.pop(),u.length&&u[0]===e[0]?ko(u,t,r):[]});function wm(e,r){return e==null?"":Ah.call(e,r)}function $n(e){var r=e==null?0:e.length;return r?e[r-1]:t}function Fm(e,r,u){var c=e==null?0:e.length;if(!c)return-1;var d=c;return u!==t&&(d=ne(u),d=d<0?Qe(c+d,0):rn(d,c-1)),r===r?ah(e,r,d):Lr(e,$u,d,!0)}function Nm(e,r){return e&&e.length?gl(e,ne(r)):t}var Cm=ie(sc);function sc(e,r){return e&&e.length&&r&&r.length?Bo(e,r):e}function Om(e,r,u){return e&&e.length&&r&&r.length?Bo(e,r,J(u,2)):e}function km(e,r,u){return e&&e.length&&r&&r.length?Bo(e,r,t,u):e}var xm=_t(function(e,r){var u=e==null?0:e.length,c=Fo(e,r);return El(e,Fe(r,function(d){return Tt(d,u)?+d:d}).sort(Fl)),c});function Rm(e,r){var u=[];if(!(e&&e.length))return u;var c=-1,d=[],g=e.length;for(r=J(r,3);++c<g;){var E=e[c];r(E,c,e)&&(u.push(E),d.push(c))}return El(e,d),u}function ta(e){return e==null?e:wh.call(e)}function Lm(e,r,u){var c=e==null?0:e.length;return c?(u&&typeof u!="number"&&ln(e,r,u)?(r=0,u=c):(r=r==null?0:ne(r),u=u===t?c:ne(u)),Pn(e,r,u)):[]}function Bm(e,r){return ns(e,r)}function Pm(e,r,u){return Uo(e,r,J(u,2))}function $m(e,r){var u=e==null?0:e.length;if(u){var c=ns(e,r);if(c<u&&Qn(e[c],r))return c}return-1}function Um(e,r){return ns(e,r,!0)}function Mm(e,r,u){return Uo(e,r,J(u,2),!0)}function Vm(e,r){var u=e==null?0:e.length;if(u){var c=ns(e,r,!0)-1;if(Qn(e[c],r))return c}return-1}function Gm(e){return e&&e.length?yl(e):[]}function jm(e,r){return e&&e.length?yl(e,J(r,2)):[]}function qm(e){var r=e==null?0:e.length;return r?Pn(e,1,r):[]}function Ym(e,r,u){return e&&e.length?(r=u||r===t?1:ne(r),Pn(e,0,r<0?0:r)):[]}function Wm(e,r,u){var c=e==null?0:e.length;return c?(r=u||r===t?1:ne(r),r=c-r,Pn(e,r<0?0:r,c)):[]}function Jm(e,r){return e&&e.length?ts(e,J(r,3),!1,!0):[]}function zm(e,r){return e&&e.length?ts(e,J(r,3)):[]}var Qm=ie(function(e){return Vt(en(e,1,Ue,!0))}),Hm=ie(function(e){var r=$n(e);return Ue(r)&&(r=t),Vt(en(e,1,Ue,!0),J(r,2))}),Xm=ie(function(e){var r=$n(e);return r=typeof r=="function"?r:t,Vt(en(e,1,Ue,!0),t,r)});function Km(e){return e&&e.length?Vt(e):[]}function Zm(e,r){return e&&e.length?Vt(e,J(r,2)):[]}function e0(e,r){return r=typeof r=="function"?r:t,e&&e.length?Vt(e,t,r):[]}function ia(e){if(!(e&&e.length))return[];var r=0;return e=Bt(e,function(u){if(Ue(u))return r=Qe(u.length,r),!0}),yo(r,function(u){return Fe(e,vo(u))})}function oc(e,r){if(!(e&&e.length))return[];var u=ia(e);return r==null?u:Fe(u,function(c){return yn(r,t,c)})}var n0=ie(function(e,r){return Ue(e)?Zi(e,r):[]}),t0=ie(function(e){return Vo(Bt(e,Ue))}),i0=ie(function(e){var r=$n(e);return Ue(r)&&(r=t),Vo(Bt(e,Ue),J(r,2))}),r0=ie(function(e){var r=$n(e);return r=typeof r=="function"?r:t,Vo(Bt(e,Ue),t,r)}),s0=ie(ia);function o0(e,r){return Il(e||[],r||[],Ki)}function a0(e,r){return Il(e||[],r||[],tr)}var u0=ie(function(e){var r=e.length,u=r>1?e[r-1]:t;return u=typeof u=="function"?(e.pop(),u):t,oc(e,u)});function ac(e){var r=h(e);return r.__chain__=!0,r}function l0(e,r){return r(e),e}function fs(e,r){return r(e)}var c0=_t(function(e){var r=e.length,u=r?e[0]:0,c=this.__wrapped__,d=function(g){return Fo(g,e)};return r>1||this.__actions__.length||!(c instanceof ae)||!Tt(u)?this.thru(d):(c=c.slice(u,+u+(r?1:0)),c.__actions__.push({func:fs,args:[d],thisArg:t}),new Ln(c,this.__chain__).thru(function(g){return r&&!g.length&&g.push(t),g}))});function f0(){return ac(this)}function p0(){return new Ln(this.value(),this.__chain__)}function d0(){this.__values__===t&&(this.__values__=_c(this.value()));var e=this.__index__>=this.__values__.length,r=e?t:this.__values__[this.__index__++];return{done:e,value:r}}function h0(){return this}function g0(e){for(var r,u=this;u instanceof Hr;){var c=ec(u);c.__index__=0,c.__values__=t,r?d.__wrapped__=c:r=c;var d=c;u=u.__wrapped__}return d.__wrapped__=e,r}function m0(){var e=this.__wrapped__;if(e instanceof ae){var r=e;return this.__actions__.length&&(r=new ae(this)),r=r.reverse(),r.__actions__.push({func:fs,args:[ta],thisArg:t}),new Ln(r,this.__chain__)}return this.thru(ta)}function v0(){return Al(this.__wrapped__,this.__actions__)}var E0=is(function(e,r,u){ve.call(e,u)?++e[u]:Dt(e,u,1)});function D0(e,r,u){var c=Z(e)?Bu:lg;return u&&ln(e,r,u)&&(r=t),c(e,J(r,3))}function y0(e,r){var u=Z(e)?Bt:ol;return u(e,J(r,3))}var _0=Rl(nc),T0=Rl(tc);function A0(e,r){return en(ps(e,r),1)}function I0(e,r){return en(ps(e,r),at)}function b0(e,r,u){return u=u===t?1:ne(u),en(ps(e,r),u)}function uc(e,r){var u=Z(e)?xn:Mt;return u(e,J(r,3))}function lc(e,r){var u=Z(e)?qd:sl;return u(e,J(r,3))}var S0=is(function(e,r,u){ve.call(e,u)?e[u].push(r):Dt(e,u,[r])});function w0(e,r,u,c){e=hn(e)?e:Ri(e),u=u&&!c?ne(u):0;var d=e.length;return u<0&&(u=Qe(d+u,0)),vs(e)?u<=d&&e.indexOf(r,u)>-1:!!d&&Ti(e,r,u)>-1}var F0=ie(function(e,r,u){var c=-1,d=typeof r=="function",g=hn(e)?I(e.length):[];return Mt(e,function(E){g[++c]=d?yn(r,E,u):er(E,r,u)}),g}),N0=is(function(e,r,u){Dt(e,u,r)});function ps(e,r){var u=Z(e)?Fe:pl;return u(e,J(r,3))}function C0(e,r,u,c){return e==null?[]:(Z(r)||(r=r==null?[]:[r]),u=c?t:u,Z(u)||(u=u==null?[]:[u]),ml(e,r,u))}var O0=is(function(e,r,u){e[u?0:1].push(r)},function(){return[[],[]]});function k0(e,r,u){var c=Z(e)?go:Mu,d=arguments.length<3;return c(e,J(r,4),u,d,Mt)}function x0(e,r,u){var c=Z(e)?Yd:Mu,d=arguments.length<3;return c(e,J(r,4),u,d,sl)}function R0(e,r){var u=Z(e)?Bt:ol;return u(e,gs(J(r,3)))}function L0(e){var r=Z(e)?nl:wg;return r(e)}function B0(e,r,u){(u?ln(e,r,u):r===t)?r=1:r=ne(r);var c=Z(e)?rg:Fg;return c(e,r)}function P0(e){var r=Z(e)?sg:Cg;return r(e)}function $0(e){if(e==null)return 0;if(hn(e))return vs(e)?Ii(e):e.length;var r=sn(e);return r==Yn||r==Wn?e.size:Ro(e).length}function U0(e,r,u){var c=Z(e)?mo:Og;return u&&ln(e,r,u)&&(r=t),c(e,J(r,3))}var M0=ie(function(e,r){if(e==null)return[];var u=r.length;return u>1&&ln(e,r[0],r[1])?r=[]:u>2&&ln(r[0],r[1],r[2])&&(r=[r[0]]),ml(e,en(r,1),[])}),ds=yh||function(){return Ze.Date.now()};function V0(e,r){if(typeof r!="function")throw new Rn(l);return e=ne(e),function(){if(--e<1)return r.apply(this,arguments)}}function cc(e,r,u){return r=u?t:r,r=e&&r==null?e.length:r,yt(e,Re,t,t,t,t,r)}function fc(e,r){var u;if(typeof r!="function")throw new Rn(l);return e=ne(e),function(){return--e>0&&(u=r.apply(this,arguments)),e<=1&&(r=t),u}}var ra=ie(function(e,r,u){var c=Y;if(u.length){var d=$t(u,ki(ra));c|=je}return yt(e,c,r,u,d)}),pc=ie(function(e,r,u){var c=Y|ce;if(u.length){var d=$t(u,ki(pc));c|=je}return yt(r,c,e,u,d)});function dc(e,r,u){r=u?t:r;var c=yt(e,me,t,t,t,t,t,r);return c.placeholder=dc.placeholder,c}function hc(e,r,u){r=u?t:r;var c=yt(e,Ce,t,t,t,t,t,r);return c.placeholder=hc.placeholder,c}function gc(e,r,u){var c,d,g,E,y,A,N=0,C=!1,R=!1,P=!0;if(typeof e!="function")throw new Rn(l);r=Un(r)||0,Oe(u)&&(C=!!u.leading,R="maxWait"in u,g=R?Qe(Un(u.maxWait)||0,r):g,P="trailing"in u?!!u.trailing:P);function q(Me){var Hn=c,bt=d;return c=d=t,N=Me,E=e.apply(bt,Hn),E}function z(Me){return N=Me,y=sr(se,r),C?q(Me):E}function te(Me){var Hn=Me-A,bt=Me-N,Rc=r-Hn;return R?rn(Rc,g-bt):Rc}function Q(Me){var Hn=Me-A,bt=Me-N;return A===t||Hn>=r||Hn<0||R&&bt>=g}function se(){var Me=ds();if(Q(Me))return le(Me);y=sr(se,te(Me))}function le(Me){return y=t,P&&c?q(Me):(c=d=t,E)}function In(){y!==t&&bl(y),N=0,c=A=d=y=t}function cn(){return y===t?E:le(ds())}function bn(){var Me=ds(),Hn=Q(Me);if(c=arguments,d=this,A=Me,Hn){if(y===t)return z(A);if(R)return bl(y),y=sr(se,r),q(A)}return y===t&&(y=sr(se,r)),E}return bn.cancel=In,bn.flush=cn,bn}var G0=ie(function(e,r){return rl(e,1,r)}),j0=ie(function(e,r,u){return rl(e,Un(r)||0,u)});function q0(e){return yt(e,x)}function hs(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new Rn(l);var u=function(){var c=arguments,d=r?r.apply(this,c):c[0],g=u.cache;if(g.has(d))return g.get(d);var E=e.apply(this,c);return u.cache=g.set(d,E)||g,E};return u.cache=new(hs.Cache||Et),u}hs.Cache=Et;function gs(e){if(typeof e!="function")throw new Rn(l);return function(){var r=arguments;switch(r.length){case 0:return!e.call(this);case 1:return!e.call(this,r[0]);case 2:return!e.call(this,r[0],r[1]);case 3:return!e.call(this,r[0],r[1],r[2])}return!e.apply(this,r)}}function Y0(e){return fc(2,e)}var W0=kg(function(e,r){r=r.length==1&&Z(r[0])?Fe(r[0],_n(J())):Fe(en(r,1),_n(J()));var u=r.length;return ie(function(c){for(var d=-1,g=rn(c.length,u);++d<g;)c[d]=r[d].call(this,c[d]);return yn(e,this,c)})}),sa=ie(function(e,r){var u=$t(r,ki(sa));return yt(e,je,t,r,u)}),mc=ie(function(e,r){var u=$t(r,ki(mc));return yt(e,Je,t,r,u)}),J0=_t(function(e,r){return yt(e,gt,t,t,t,r)});function z0(e,r){if(typeof e!="function")throw new Rn(l);return r=r===t?r:ne(r),ie(e,r)}function Q0(e,r){if(typeof e!="function")throw new Rn(l);return r=r==null?0:Qe(ne(r),0),ie(function(u){var c=u[r],d=jt(u,0,r);return c&&Pt(d,c),yn(e,this,d)})}function H0(e,r,u){var c=!0,d=!0;if(typeof e!="function")throw new Rn(l);return Oe(u)&&(c="leading"in u?!!u.leading:c,d="trailing"in u?!!u.trailing:d),gc(e,r,{leading:c,maxWait:r,trailing:d})}function X0(e){return cc(e,1)}function K0(e,r){return sa(jo(r),e)}function Z0(){if(!arguments.length)return[];var e=arguments[0];return Z(e)?e:[e]}function ev(e){return Bn(e,w)}function nv(e,r){return r=typeof r=="function"?r:t,Bn(e,w,r)}function tv(e){return Bn(e,D|w)}function iv(e,r){return r=typeof r=="function"?r:t,Bn(e,D|w,r)}function rv(e,r){return r==null||il(e,r,He(r))}function Qn(e,r){return e===r||e!==e&&r!==r}var sv=as(Oo),ov=as(function(e,r){return e>=r}),ai=ll(function(){return arguments}())?ll:function(e){return Le(e)&&ve.call(e,"callee")&&!Qu.call(e,"callee")},Z=I.isArray,av=Cu?_n(Cu):gg;function hn(e){return e!=null&&ms(e.length)&&!At(e)}function Ue(e){return Le(e)&&hn(e)}function uv(e){return e===!0||e===!1||Le(e)&&un(e)==he}var qt=Th||ma,lv=Ou?_n(Ou):mg;function cv(e){return Le(e)&&e.nodeType===1&&!or(e)}function fv(e){if(e==null)return!0;if(hn(e)&&(Z(e)||typeof e=="string"||typeof e.splice=="function"||qt(e)||xi(e)||ai(e)))return!e.length;var r=sn(e);if(r==Yn||r==Wn)return!e.size;if(rr(e))return!Ro(e).length;for(var u in e)if(ve.call(e,u))return!1;return!0}function pv(e,r){return nr(e,r)}function dv(e,r,u){u=typeof u=="function"?u:t;var c=u?u(e,r):t;return c===t?nr(e,r,t,u):!!c}function oa(e){if(!Le(e))return!1;var r=un(e);return r==Lt||r==Mi||typeof e.message=="string"&&typeof e.name=="string"&&!or(e)}function hv(e){return typeof e=="number"&&Xu(e)}function At(e){if(!Oe(e))return!1;var r=un(e);return r==tn||r==ru||r==$e||r==$p}function vc(e){return typeof e=="number"&&e==ne(e)}function ms(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=qn}function Oe(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}function Le(e){return e!=null&&typeof e=="object"}var Ec=ku?_n(ku):Eg;function gv(e,r){return e===r||xo(e,r,Ho(r))}function mv(e,r,u){return u=typeof u=="function"?u:t,xo(e,r,Ho(r),u)}function vv(e){return Dc(e)&&e!=+e}function Ev(e){if(nm(e))throw new K(a);return cl(e)}function Dv(e){return e===null}function yv(e){return e==null}function Dc(e){return typeof e=="number"||Le(e)&&un(e)==Vi}function or(e){if(!Le(e)||un(e)!=mt)return!1;var r=jr(e);if(r===null)return!0;var u=ve.call(r,"constructor")&&r.constructor;return typeof u=="function"&&u instanceof u&&Ur.call(u)==mh}var aa=xu?_n(xu):Dg;function _v(e){return vc(e)&&e>=-qn&&e<=qn}var yc=Ru?_n(Ru):yg;function vs(e){return typeof e=="string"||!Z(e)&&Le(e)&&un(e)==ji}function An(e){return typeof e=="symbol"||Le(e)&&un(e)==Cr}var xi=Lu?_n(Lu):_g;function Tv(e){return e===t}function Av(e){return Le(e)&&sn(e)==qi}function Iv(e){return Le(e)&&un(e)==Mp}var bv=as(Lo),Sv=as(function(e,r){return e<=r});function _c(e){if(!e)return[];if(hn(e))return vs(e)?Jn(e):dn(e);if(Ji&&e[Ji])return rh(e[Ji]());var r=sn(e),u=r==Yn?To:r==Wn?Br:Ri;return u(e)}function It(e){if(!e)return e===0?e:0;if(e=Un(e),e===at||e===-at){var r=e<0?-1:1;return r*Di}return e===e?e:0}function ne(e){var r=It(e),u=r%1;return r===r?u?r-u:r:0}function Tc(e){return e?ii(ne(e),0,Cn):0}function Un(e){if(typeof e=="number")return e;if(An(e))return Kt;if(Oe(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=Oe(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Vu(e);var u=ad.test(e);return u||ld.test(e)?Vd(e.slice(2),u?2:8):od.test(e)?Kt:+e}function Ac(e){return lt(e,gn(e))}function wv(e){return e?ii(ne(e),-qn,qn):e===0?e:0}function ge(e){return e==null?"":Tn(e)}var Fv=Ci(function(e,r){if(rr(r)||hn(r)){lt(r,He(r),e);return}for(var u in r)ve.call(r,u)&&Ki(e,u,r[u])}),Ic=Ci(function(e,r){lt(r,gn(r),e)}),Es=Ci(function(e,r,u,c){lt(r,gn(r),e,c)}),Nv=Ci(function(e,r,u,c){lt(r,He(r),e,c)}),Cv=_t(Fo);function Ov(e,r){var u=Ni(e);return r==null?u:tl(u,r)}var kv=ie(function(e,r){e=Te(e);var u=-1,c=r.length,d=c>2?r[2]:t;for(d&&ln(r[0],r[1],d)&&(c=1);++u<c;)for(var g=r[u],E=gn(g),y=-1,A=E.length;++y<A;){var N=E[y],C=e[N];(C===t||Qn(C,Si[N])&&!ve.call(e,N))&&(e[N]=g[N])}return e}),xv=ie(function(e){return e.push(t,Vl),yn(bc,t,e)});function Rv(e,r){return Pu(e,J(r,3),ut)}function Lv(e,r){return Pu(e,J(r,3),Co)}function Bv(e,r){return e==null?e:No(e,J(r,3),gn)}function Pv(e,r){return e==null?e:al(e,J(r,3),gn)}function $v(e,r){return e&&ut(e,J(r,3))}function Uv(e,r){return e&&Co(e,J(r,3))}function Mv(e){return e==null?[]:Zr(e,He(e))}function Vv(e){return e==null?[]:Zr(e,gn(e))}function ua(e,r,u){var c=e==null?t:ri(e,r);return c===t?u:c}function Gv(e,r){return e!=null&&ql(e,r,fg)}function la(e,r){return e!=null&&ql(e,r,pg)}var jv=Bl(function(e,r,u){r!=null&&typeof r.toString!="function"&&(r=Mr.call(r)),e[r]=u},fa(mn)),qv=Bl(function(e,r,u){r!=null&&typeof r.toString!="function"&&(r=Mr.call(r)),ve.call(e,r)?e[r].push(u):e[r]=[u]},J),Yv=ie(er);function He(e){return hn(e)?el(e):Ro(e)}function gn(e){return hn(e)?el(e,!0):Tg(e)}function Wv(e,r){var u={};return r=J(r,3),ut(e,function(c,d,g){Dt(u,r(c,d,g),c)}),u}function Jv(e,r){var u={};return r=J(r,3),ut(e,function(c,d,g){Dt(u,d,r(c,d,g))}),u}var zv=Ci(function(e,r,u){es(e,r,u)}),bc=Ci(function(e,r,u,c){es(e,r,u,c)}),Qv=_t(function(e,r){var u={};if(e==null)return u;var c=!1;r=Fe(r,function(g){return g=Gt(g,e),c||(c=g.length>1),g}),lt(e,zo(e),u),c&&(u=Bn(u,D|k|w,jg));for(var d=r.length;d--;)Mo(u,r[d]);return u});function Hv(e,r){return Sc(e,gs(J(r)))}var Xv=_t(function(e,r){return e==null?{}:Ig(e,r)});function Sc(e,r){if(e==null)return{};var u=Fe(zo(e),function(c){return[c]});return r=J(r),vl(e,u,function(c,d){return r(c,d[0])})}function Kv(e,r,u){r=Gt(r,e);var c=-1,d=r.length;for(d||(d=1,e=t);++c<d;){var g=e==null?t:e[ct(r[c])];g===t&&(c=d,g=u),e=At(g)?g.call(e):g}return e}function Zv(e,r,u){return e==null?e:tr(e,r,u)}function eE(e,r,u,c){return c=typeof c=="function"?c:t,e==null?e:tr(e,r,u,c)}var wc=Ul(He),Fc=Ul(gn);function nE(e,r,u){var c=Z(e),d=c||qt(e)||xi(e);if(r=J(r,4),u==null){var g=e&&e.constructor;d?u=c?new g:[]:Oe(e)?u=At(g)?Ni(jr(e)):{}:u={}}return(d?xn:ut)(e,function(E,y,A){return r(u,E,y,A)}),u}function tE(e,r){return e==null?!0:Mo(e,r)}function iE(e,r,u){return e==null?e:Tl(e,r,jo(u))}function rE(e,r,u,c){return c=typeof c=="function"?c:t,e==null?e:Tl(e,r,jo(u),c)}function Ri(e){return e==null?[]:_o(e,He(e))}function sE(e){return e==null?[]:_o(e,gn(e))}function oE(e,r,u){return u===t&&(u=r,r=t),u!==t&&(u=Un(u),u=u===u?u:0),r!==t&&(r=Un(r),r=r===r?r:0),ii(Un(e),r,u)}function aE(e,r,u){return r=It(r),u===t?(u=r,r=0):u=It(u),e=Un(e),dg(e,r,u)}function uE(e,r,u){if(u&&typeof u!="boolean"&&ln(e,r,u)&&(r=u=t),u===t&&(typeof r=="boolean"?(u=r,r=t):typeof e=="boolean"&&(u=e,e=t)),e===t&&r===t?(e=0,r=1):(e=It(e),r===t?(r=e,e=0):r=It(r)),e>r){var c=e;e=r,r=c}if(u||e%1||r%1){var d=Ku();return rn(e+d*(r-e+Md("1e-"+((d+"").length-1))),r)}return Po(e,r)}var lE=Oi(function(e,r,u){return r=r.toLowerCase(),e+(u?Nc(r):r)});function Nc(e){return ca(ge(e).toLowerCase())}function Cc(e){return e=ge(e),e&&e.replace(fd,Zd).replace(Cd,"")}function cE(e,r,u){e=ge(e),r=Tn(r);var c=e.length;u=u===t?c:ii(ne(u),0,c);var d=u;return u-=r.length,u>=0&&e.slice(u,d)==r}function fE(e){return e=ge(e),e&&Yp.test(e)?e.replace(au,eh):e}function pE(e){return e=ge(e),e&&Xp.test(e)?e.replace(ro,"\\$&"):e}var dE=Oi(function(e,r,u){return e+(u?"-":"")+r.toLowerCase()}),hE=Oi(function(e,r,u){return e+(u?" ":"")+r.toLowerCase()}),gE=xl("toLowerCase");function mE(e,r,u){e=ge(e),r=ne(r);var c=r?Ii(e):0;if(!r||c>=r)return e;var d=(r-c)/2;return os(Jr(d),u)+e+os(Wr(d),u)}function vE(e,r,u){e=ge(e),r=ne(r);var c=r?Ii(e):0;return r&&c<r?e+os(r-c,u):e}function EE(e,r,u){e=ge(e),r=ne(r);var c=r?Ii(e):0;return r&&c<r?os(r-c,u)+e:e}function DE(e,r,u){return u||r==null?r=0:r&&(r=+r),Sh(ge(e).replace(so,""),r||0)}function yE(e,r,u){return(u?ln(e,r,u):r===t)?r=1:r=ne(r),$o(ge(e),r)}function _E(){var e=arguments,r=ge(e[0]);return e.length<3?r:r.replace(e[1],e[2])}var TE=Oi(function(e,r,u){return e+(u?"_":"")+r.toLowerCase()});function AE(e,r,u){return u&&typeof u!="number"&&ln(e,r,u)&&(r=u=t),u=u===t?Cn:u>>>0,u?(e=ge(e),e&&(typeof r=="string"||r!=null&&!aa(r))&&(r=Tn(r),!r&&Ai(e))?jt(Jn(e),0,u):e.split(r,u)):[]}var IE=Oi(function(e,r,u){return e+(u?" ":"")+ca(r)});function bE(e,r,u){return e=ge(e),u=u==null?0:ii(ne(u),0,e.length),r=Tn(r),e.slice(u,u+r.length)==r}function SE(e,r,u){var c=h.templateSettings;u&&ln(e,r,u)&&(r=t),e=ge(e),r=Es({},r,c,Ml);var d=Es({},r.imports,c.imports,Ml),g=He(d),E=_o(d,g),y,A,N=0,C=r.interpolate||Or,R="__p += '",P=Ao((r.escape||Or).source+"|"+C.source+"|"+(C===uu?sd:Or).source+"|"+(r.evaluate||Or).source+"|$","g"),q="//# sourceURL="+(ve.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ld+"]")+`
`;e.replace(P,function(Q,se,le,In,cn,bn){return le||(le=In),R+=e.slice(N,bn).replace(pd,nh),se&&(y=!0,R+=`' +
__e(`+se+`) +
'`),cn&&(A=!0,R+=`';
`+cn+`;
__p += '`),le&&(R+=`' +
((__t = (`+le+`)) == null ? '' : __t) +
'`),N=bn+Q.length,Q}),R+=`';
`;var z=ve.call(r,"variable")&&r.variable;if(!z)R=`with (obj) {
`+R+`
}
`;else if(id.test(z))throw new K(f);R=(A?R.replace(Vp,""):R).replace(Gp,"$1").replace(jp,"$1;"),R="function("+(z||"obj")+`) {
`+(z?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(A?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+R+`return __p
}`;var te=kc(function(){return pe(g,q+"return "+R).apply(t,E)});if(te.source=R,oa(te))throw te;return te}function wE(e){return ge(e).toLowerCase()}function FE(e){return ge(e).toUpperCase()}function NE(e,r,u){if(e=ge(e),e&&(u||r===t))return Vu(e);if(!e||!(r=Tn(r)))return e;var c=Jn(e),d=Jn(r),g=Gu(c,d),E=ju(c,d)+1;return jt(c,g,E).join("")}function CE(e,r,u){if(e=ge(e),e&&(u||r===t))return e.slice(0,Yu(e)+1);if(!e||!(r=Tn(r)))return e;var c=Jn(e),d=ju(c,Jn(r))+1;return jt(c,0,d).join("")}function OE(e,r,u){if(e=ge(e),e&&(u||r===t))return e.replace(so,"");if(!e||!(r=Tn(r)))return e;var c=Jn(e),d=Gu(c,Jn(r));return jt(c,d).join("")}function kE(e,r){var u=X,c=an;if(Oe(r)){var d="separator"in r?r.separator:d;u="length"in r?ne(r.length):u,c="omission"in r?Tn(r.omission):c}e=ge(e);var g=e.length;if(Ai(e)){var E=Jn(e);g=E.length}if(u>=g)return e;var y=u-Ii(c);if(y<1)return c;var A=E?jt(E,0,y).join(""):e.slice(0,y);if(d===t)return A+c;if(E&&(y+=A.length-y),aa(d)){if(e.slice(y).search(d)){var N,C=A;for(d.global||(d=Ao(d.source,ge(lu.exec(d))+"g")),d.lastIndex=0;N=d.exec(C);)var R=N.index;A=A.slice(0,R===t?y:R)}}else if(e.indexOf(Tn(d),y)!=y){var P=A.lastIndexOf(d);P>-1&&(A=A.slice(0,P))}return A+c}function xE(e){return e=ge(e),e&&qp.test(e)?e.replace(ou,uh):e}var RE=Oi(function(e,r,u){return e+(u?" ":"")+r.toUpperCase()}),ca=xl("toUpperCase");function Oc(e,r,u){return e=ge(e),r=u?t:r,r===t?ih(e)?fh(e):zd(e):e.match(r)||[]}var kc=ie(function(e,r){try{return yn(e,t,r)}catch(u){return oa(u)?u:new K(u)}}),LE=_t(function(e,r){return xn(r,function(u){u=ct(u),Dt(e,u,ra(e[u],e))}),e});function BE(e){var r=e==null?0:e.length,u=J();return e=r?Fe(e,function(c){if(typeof c[1]!="function")throw new Rn(l);return[u(c[0]),c[1]]}):[],ie(function(c){for(var d=-1;++d<r;){var g=e[d];if(yn(g[0],this,c))return yn(g[1],this,c)}})}function PE(e){return ug(Bn(e,D))}function fa(e){return function(){return e}}function $E(e,r){return e==null||e!==e?r:e}var UE=Ll(),ME=Ll(!0);function mn(e){return e}function pa(e){return fl(typeof e=="function"?e:Bn(e,D))}function VE(e){return dl(Bn(e,D))}function GE(e,r){return hl(e,Bn(r,D))}var jE=ie(function(e,r){return function(u){return er(u,e,r)}}),qE=ie(function(e,r){return function(u){return er(e,u,r)}});function da(e,r,u){var c=He(r),d=Zr(r,c);u==null&&!(Oe(r)&&(d.length||!c.length))&&(u=r,r=e,e=this,d=Zr(r,He(r)));var g=!(Oe(u)&&"chain"in u)||!!u.chain,E=At(e);return xn(d,function(y){var A=r[y];e[y]=A,E&&(e.prototype[y]=function(){var N=this.__chain__;if(g||N){var C=e(this.__wrapped__),R=C.__actions__=dn(this.__actions__);return R.push({func:A,args:arguments,thisArg:e}),C.__chain__=N,C}return A.apply(e,Pt([this.value()],arguments))})}),e}function YE(){return Ze._===this&&(Ze._=vh),this}function ha(){}function WE(e){return e=ne(e),ie(function(r){return gl(r,e)})}var JE=Yo(Fe),zE=Yo(Bu),QE=Yo(mo);function xc(e){return Ko(e)?vo(ct(e)):bg(e)}function HE(e){return function(r){return e==null?t:ri(e,r)}}var XE=Pl(),KE=Pl(!0);function ga(){return[]}function ma(){return!1}function ZE(){return{}}function eD(){return""}function nD(){return!0}function tD(e,r){if(e=ne(e),e<1||e>qn)return[];var u=Cn,c=rn(e,Cn);r=J(r),e-=Cn;for(var d=yo(c,r);++u<e;)r(u);return d}function iD(e){return Z(e)?Fe(e,ct):An(e)?[e]:dn(Zl(ge(e)))}function rD(e){var r=++gh;return ge(e)+r}var sD=ss(function(e,r){return e+r},0),oD=Wo("ceil"),aD=ss(function(e,r){return e/r},1),uD=Wo("floor");function lD(e){return e&&e.length?Kr(e,mn,Oo):t}function cD(e,r){return e&&e.length?Kr(e,J(r,2),Oo):t}function fD(e){return Uu(e,mn)}function pD(e,r){return Uu(e,J(r,2))}function dD(e){return e&&e.length?Kr(e,mn,Lo):t}function hD(e,r){return e&&e.length?Kr(e,J(r,2),Lo):t}var gD=ss(function(e,r){return e*r},1),mD=Wo("round"),vD=ss(function(e,r){return e-r},0);function ED(e){return e&&e.length?Do(e,mn):0}function DD(e,r){return e&&e.length?Do(e,J(r,2)):0}return h.after=V0,h.ary=cc,h.assign=Fv,h.assignIn=Ic,h.assignInWith=Es,h.assignWith=Nv,h.at=Cv,h.before=fc,h.bind=ra,h.bindAll=LE,h.bindKey=pc,h.castArray=Z0,h.chain=ac,h.chunk=um,h.compact=lm,h.concat=cm,h.cond=BE,h.conforms=PE,h.constant=fa,h.countBy=E0,h.create=Ov,h.curry=dc,h.curryRight=hc,h.debounce=gc,h.defaults=kv,h.defaultsDeep=xv,h.defer=G0,h.delay=j0,h.difference=fm,h.differenceBy=pm,h.differenceWith=dm,h.drop=hm,h.dropRight=gm,h.dropRightWhile=mm,h.dropWhile=vm,h.fill=Em,h.filter=y0,h.flatMap=A0,h.flatMapDeep=I0,h.flatMapDepth=b0,h.flatten=ic,h.flattenDeep=Dm,h.flattenDepth=ym,h.flip=q0,h.flow=UE,h.flowRight=ME,h.fromPairs=_m,h.functions=Mv,h.functionsIn=Vv,h.groupBy=S0,h.initial=Am,h.intersection=Im,h.intersectionBy=bm,h.intersectionWith=Sm,h.invert=jv,h.invertBy=qv,h.invokeMap=F0,h.iteratee=pa,h.keyBy=N0,h.keys=He,h.keysIn=gn,h.map=ps,h.mapKeys=Wv,h.mapValues=Jv,h.matches=VE,h.matchesProperty=GE,h.memoize=hs,h.merge=zv,h.mergeWith=bc,h.method=jE,h.methodOf=qE,h.mixin=da,h.negate=gs,h.nthArg=WE,h.omit=Qv,h.omitBy=Hv,h.once=Y0,h.orderBy=C0,h.over=JE,h.overArgs=W0,h.overEvery=zE,h.overSome=QE,h.partial=sa,h.partialRight=mc,h.partition=O0,h.pick=Xv,h.pickBy=Sc,h.property=xc,h.propertyOf=HE,h.pull=Cm,h.pullAll=sc,h.pullAllBy=Om,h.pullAllWith=km,h.pullAt=xm,h.range=XE,h.rangeRight=KE,h.rearg=J0,h.reject=R0,h.remove=Rm,h.rest=z0,h.reverse=ta,h.sampleSize=B0,h.set=Zv,h.setWith=eE,h.shuffle=P0,h.slice=Lm,h.sortBy=M0,h.sortedUniq=Gm,h.sortedUniqBy=jm,h.split=AE,h.spread=Q0,h.tail=qm,h.take=Ym,h.takeRight=Wm,h.takeRightWhile=Jm,h.takeWhile=zm,h.tap=l0,h.throttle=H0,h.thru=fs,h.toArray=_c,h.toPairs=wc,h.toPairsIn=Fc,h.toPath=iD,h.toPlainObject=Ac,h.transform=nE,h.unary=X0,h.union=Qm,h.unionBy=Hm,h.unionWith=Xm,h.uniq=Km,h.uniqBy=Zm,h.uniqWith=e0,h.unset=tE,h.unzip=ia,h.unzipWith=oc,h.update=iE,h.updateWith=rE,h.values=Ri,h.valuesIn=sE,h.without=n0,h.words=Oc,h.wrap=K0,h.xor=t0,h.xorBy=i0,h.xorWith=r0,h.zip=s0,h.zipObject=o0,h.zipObjectDeep=a0,h.zipWith=u0,h.entries=wc,h.entriesIn=Fc,h.extend=Ic,h.extendWith=Es,da(h,h),h.add=sD,h.attempt=kc,h.camelCase=lE,h.capitalize=Nc,h.ceil=oD,h.clamp=oE,h.clone=ev,h.cloneDeep=tv,h.cloneDeepWith=iv,h.cloneWith=nv,h.conformsTo=rv,h.deburr=Cc,h.defaultTo=$E,h.divide=aD,h.endsWith=cE,h.eq=Qn,h.escape=fE,h.escapeRegExp=pE,h.every=D0,h.find=_0,h.findIndex=nc,h.findKey=Rv,h.findLast=T0,h.findLastIndex=tc,h.findLastKey=Lv,h.floor=uD,h.forEach=uc,h.forEachRight=lc,h.forIn=Bv,h.forInRight=Pv,h.forOwn=$v,h.forOwnRight=Uv,h.get=ua,h.gt=sv,h.gte=ov,h.has=Gv,h.hasIn=la,h.head=rc,h.identity=mn,h.includes=w0,h.indexOf=Tm,h.inRange=aE,h.invoke=Yv,h.isArguments=ai,h.isArray=Z,h.isArrayBuffer=av,h.isArrayLike=hn,h.isArrayLikeObject=Ue,h.isBoolean=uv,h.isBuffer=qt,h.isDate=lv,h.isElement=cv,h.isEmpty=fv,h.isEqual=pv,h.isEqualWith=dv,h.isError=oa,h.isFinite=hv,h.isFunction=At,h.isInteger=vc,h.isLength=ms,h.isMap=Ec,h.isMatch=gv,h.isMatchWith=mv,h.isNaN=vv,h.isNative=Ev,h.isNil=yv,h.isNull=Dv,h.isNumber=Dc,h.isObject=Oe,h.isObjectLike=Le,h.isPlainObject=or,h.isRegExp=aa,h.isSafeInteger=_v,h.isSet=yc,h.isString=vs,h.isSymbol=An,h.isTypedArray=xi,h.isUndefined=Tv,h.isWeakMap=Av,h.isWeakSet=Iv,h.join=wm,h.kebabCase=dE,h.last=$n,h.lastIndexOf=Fm,h.lowerCase=hE,h.lowerFirst=gE,h.lt=bv,h.lte=Sv,h.max=lD,h.maxBy=cD,h.mean=fD,h.meanBy=pD,h.min=dD,h.minBy=hD,h.stubArray=ga,h.stubFalse=ma,h.stubObject=ZE,h.stubString=eD,h.stubTrue=nD,h.multiply=gD,h.nth=Nm,h.noConflict=YE,h.noop=ha,h.now=ds,h.pad=mE,h.padEnd=vE,h.padStart=EE,h.parseInt=DE,h.random=uE,h.reduce=k0,h.reduceRight=x0,h.repeat=yE,h.replace=_E,h.result=Kv,h.round=mD,h.runInContext=T,h.sample=L0,h.size=$0,h.snakeCase=TE,h.some=U0,h.sortedIndex=Bm,h.sortedIndexBy=Pm,h.sortedIndexOf=$m,h.sortedLastIndex=Um,h.sortedLastIndexBy=Mm,h.sortedLastIndexOf=Vm,h.startCase=IE,h.startsWith=bE,h.subtract=vD,h.sum=ED,h.sumBy=DD,h.template=SE,h.times=tD,h.toFinite=It,h.toInteger=ne,h.toLength=Tc,h.toLower=wE,h.toNumber=Un,h.toSafeInteger=wv,h.toString=ge,h.toUpper=FE,h.trim=NE,h.trimEnd=CE,h.trimStart=OE,h.truncate=kE,h.unescape=xE,h.uniqueId=rD,h.upperCase=RE,h.upperFirst=ca,h.each=uc,h.eachRight=lc,h.first=rc,da(h,function(){var e={};return ut(h,function(r,u){ve.call(h.prototype,u)||(e[u]=r)}),e}(),{chain:!1}),h.VERSION=s,xn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){h[e].placeholder=h}),xn(["drop","take"],function(e,r){ae.prototype[e]=function(u){u=u===t?1:Qe(ne(u),0);var c=this.__filtered__&&!r?new ae(this):this.clone();return c.__filtered__?c.__takeCount__=rn(u,c.__takeCount__):c.__views__.push({size:rn(u,Cn),type:e+(c.__dir__<0?"Right":"")}),c},ae.prototype[e+"Right"]=function(u){return this.reverse()[e](u).reverse()}}),xn(["filter","map","takeWhile"],function(e,r){var u=r+1,c=u==Fr||u==Nr;ae.prototype[e]=function(d){var g=this.clone();return g.__iteratees__.push({iteratee:J(d,3),type:u}),g.__filtered__=g.__filtered__||c,g}}),xn(["head","last"],function(e,r){var u="take"+(r?"Right":"");ae.prototype[e]=function(){return this[u](1).value()[0]}}),xn(["initial","tail"],function(e,r){var u="drop"+(r?"":"Right");ae.prototype[e]=function(){return this.__filtered__?new ae(this):this[u](1)}}),ae.prototype.compact=function(){return this.filter(mn)},ae.prototype.find=function(e){return this.filter(e).head()},ae.prototype.findLast=function(e){return this.reverse().find(e)},ae.prototype.invokeMap=ie(function(e,r){return typeof e=="function"?new ae(this):this.map(function(u){return er(u,e,r)})}),ae.prototype.reject=function(e){return this.filter(gs(J(e)))},ae.prototype.slice=function(e,r){e=ne(e);var u=this;return u.__filtered__&&(e>0||r<0)?new ae(u):(e<0?u=u.takeRight(-e):e&&(u=u.drop(e)),r!==t&&(r=ne(r),u=r<0?u.dropRight(-r):u.take(r-e)),u)},ae.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},ae.prototype.toArray=function(){return this.take(Cn)},ut(ae.prototype,function(e,r){var u=/^(?:filter|find|map|reject)|While$/.test(r),c=/^(?:head|last)$/.test(r),d=h[c?"take"+(r=="last"?"Right":""):r],g=c||/^find/.test(r);d&&(h.prototype[r]=function(){var E=this.__wrapped__,y=c?[1]:arguments,A=E instanceof ae,N=y[0],C=A||Z(E),R=function(se){var le=d.apply(h,Pt([se],y));return c&&P?le[0]:le};C&&u&&typeof N=="function"&&N.length!=1&&(A=C=!1);var P=this.__chain__,q=!!this.__actions__.length,z=g&&!P,te=A&&!q;if(!g&&C){E=te?E:new ae(this);var Q=e.apply(E,y);return Q.__actions__.push({func:fs,args:[R],thisArg:t}),new Ln(Q,P)}return z&&te?e.apply(this,y):(Q=this.thru(R),z?c?Q.value()[0]:Q.value():Q)})}),xn(["pop","push","shift","sort","splice","unshift"],function(e){var r=Pr[e],u=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);h.prototype[e]=function(){var d=arguments;if(c&&!this.__chain__){var g=this.value();return r.apply(Z(g)?g:[],d)}return this[u](function(E){return r.apply(Z(E)?E:[],d)})}}),ut(ae.prototype,function(e,r){var u=h[r];if(u){var c=u.name+"";ve.call(Fi,c)||(Fi[c]=[]),Fi[c].push({name:r,func:u})}}),Fi[rs(t,ce).name]=[{name:"wrapper",func:t}],ae.prototype.clone=xh,ae.prototype.reverse=Rh,ae.prototype.value=Lh,h.prototype.at=c0,h.prototype.chain=f0,h.prototype.commit=p0,h.prototype.next=d0,h.prototype.plant=g0,h.prototype.reverse=m0,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=v0,h.prototype.first=h.prototype.head,Ji&&(h.prototype[Ji]=h0),h},bi=ph();Zt?((Zt.exports=bi)._=bi,fo._=bi):Ze._=bi}).call(lr)})(Os,Os.exports);var I_=Os.exports;const Ct=A_(I_);function b_(){return{convert:i=>{if(i===null||i===void 0)return null;switch(typeof i){case"boolean":return i;case"string":{const n=i.toLowerCase().trim();return n==="true"||n==="t"||n==="1"}case"number":return i!==0;default:return null}},asString:i=>String(i),type:i=>i.boolean().optional()}}function Sn(i,n){const t=s=>n.convert(s[i]);return{name:S_(i),key:i,asEnv:s=>({[i]:n.asString(s)}),zod:{type:n.type},get:t,getOrDefault:(s,o)=>t(s)??o}}function S_(i){return i.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}Sn("MAGIDOC_GENERATE",b_());function ys(i){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(i(n)).optional()}}function nf(i){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(i(n).optional()).optional()}}function _s(){return{convert:i=>i==null||i===""?null:String(i),asString:i=>String(i),type:i=>i.string().optional()}}function tf(i){return{convert:n=>n==null||!i.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(i).optional()}}var Ms={APP_LOGO:Sn("APP_LOGO",_s()),APP_TITLE:Sn("APP_TITLE",_s()),APP_FAVICON:Sn("APP_FAVICON",_s()),SITE_ROOT:Sn("SITE_ROOT",_s()),SITE_META:Sn("SITE_META",nf(i=>i.string())),CUSTOM_STYLES:Sn("CUSTOM_STYLES",ys(i=>i.string())),FIELDS_SORTING:Sn("FIELDS_SORTING",tf(["default","alphabetical"])),ARGUMENTS_SORTING:Sn("ARGUMENTS_SORTING",tf(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:Sn("QUERY_GENERATION_FACTORIES",nf(i=>i.union([i.string(),i.boolean(),i.number(),i.null(),i.record(i.unknown())]))),PAGES:Sn("PAGES",ys(i=>{const n=i.lazy(()=>i.object({title:i.string().min(1),content:i.union([i.array(n),i.string().min(1)])}));return n})),EXTERNAL_LINKS:Sn("EXTERNAL_LINKS",ys(i=>i.object({label:i.string().min(1),href:i.string().min(1),position:i.union([i.literal("header"),i.literal("navigation")]).optional(),kind:i.string().min(1).optional(),group:i.string().min(1).optional()}))),DIRECTIVES:Sn("DIRECTIVES",ys(i=>i.object({name:i.string().min(1),args:i.array(i.string())})))};const w_="Proca graphql API",F_='{"description":"Proca GraphQL API.","og:description":"Documentation for Proca GraphQL API."}',N_='[{"title":"Welcome","content":"\\nThis is the graphql API documentation for proca.\\n\\n## Where to go next\\n\\n- Star the project on [GitHub](https://github.com/fixthestatusquo/proca) \\n- Check out the cli [that uses this API] (https://github.com/fixthestatusquo/proca-cli)\\n\\n"},{"title":"Schema","content":"schema"},{"title":"Queries","content":"queries"},{"title":"Mutations","content":"mutations"}]',C_=`{"NaiveDateTime":"1999-12-31 23:59:59","Json":"'{\\"key\\":\\"value\\"}}"}`,O_="true",Mf={APP_TITLE:w_,SITE_META:F_,PAGES:N_,QUERY_GENERATION_FACTORIES:C_,MAGIDOC_GENERATE:O_};function II(i){return i.get(Mf)}function Vs(i,n){return i.getOrDefault(Mf,n)}function Gs(){return Vs(Ms.SITE_ROOT,bD)}class k_{constructor(n){Ee(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var gr;(function(i){i.UNION="union",i.ARGUMENT="argument",i.FIELD="field"})(gr||(gr={}));function fe(i,n){if(!!!i)throw new Error(n)}function Ot(i){return typeof i=="object"&&i!==null}function et(i,n){if(!!!i)throw new Error(n??"Unexpected invariant triggered.")}const x_=/\r\n|[\n\r]/g;function Sa(i,n){let t=0,s=1;for(const o of i.body.matchAll(x_)){if(typeof o.index=="number"||et(!1),o.index>=n)break;t=o.index+o[0].length,s+=1}return{line:s,column:n+1-t}}function R_(i){return Vf(i.source,Sa(i.source,i.start))}function Vf(i,n){const t=i.locationOffset.column-1,s="".padStart(t)+i.body,o=n.line-1,a=i.locationOffset.line-1,l=n.line+a,f=n.line===1?t:0,p=n.column+f,m=`${i.name}:${l}:${p}
`,v=s.split(/\r\n|[\n\r]/g),D=v[o];if(D.length>120){const k=Math.floor(p/80),w=p%80,F=[];for(let B=0;B<D.length;B+=80)F.push(D.slice(B,B+80));return m+rf([[`${l} |`,F[0]],...F.slice(1,k+1).map(B=>["|",B]),["|","^".padStart(w)],["|",F[k+1]]])}return m+rf([[`${l-1} |`,v[o-1]],[`${l} |`,D],["|","^".padStart(p)],[`${l+1} |`,v[o+1]]])}function rf(i){const n=i.filter(([s,o])=>o!==void 0),t=Math.max(...n.map(([s])=>s.length));return n.map(([s,o])=>s.padStart(t)+(o?" "+o:"")).join(`
`)}function L_(i){const n=i[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:i[1],positions:i[2],path:i[3],originalError:i[4],extensions:i[5]}:n}class L extends Error{constructor(n,...t){var s,o,a;const{nodes:l,source:f,positions:p,path:m,originalError:v,extensions:D}=L_(t);super(n),this.name="GraphQLError",this.path=m??void 0,this.originalError=v??void 0,this.nodes=sf(Array.isArray(l)?l:l?[l]:void 0);const k=sf((s=this.nodes)===null||s===void 0?void 0:s.map(F=>F.loc).filter(F=>F!=null));this.source=f??(k==null||(o=k[0])===null||o===void 0?void 0:o.source),this.positions=p??(k==null?void 0:k.map(F=>F.start)),this.locations=p&&f?p.map(F=>Sa(f,F)):k==null?void 0:k.map(F=>Sa(F.source,F.start));const w=Ot(v==null?void 0:v.extensions)?v==null?void 0:v.extensions:void 0;this.extensions=(a=D??w)!==null&&a!==void 0?a:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),v!=null&&v.stack?Object.defineProperty(this,"stack",{value:v.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,L):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+R_(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+Vf(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function sf(i){return i===void 0||i.length===0?void 0:i}function Xe(i,n,t){return new L(`Syntax Error: ${t}`,{source:i,positions:[n]})}class B_{constructor(n,t,s){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Gf{constructor(n,t,s,o,a,l){this.kind=n,this.start=t,this.end=s,this.line=o,this.column=a,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const jf={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},P_=new Set(Object.keys(jf));function of(i){const n=i==null?void 0:i.kind;return typeof n=="string"&&P_.has(n)}var Vn;(function(i){i.QUERY="query",i.MUTATION="mutation",i.SUBSCRIPTION="subscription"})(Vn||(Vn={}));var W;(function(i){i.QUERY="QUERY",i.MUTATION="MUTATION",i.SUBSCRIPTION="SUBSCRIPTION",i.FIELD="FIELD",i.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",i.FRAGMENT_SPREAD="FRAGMENT_SPREAD",i.INLINE_FRAGMENT="INLINE_FRAGMENT",i.VARIABLE_DEFINITION="VARIABLE_DEFINITION",i.SCHEMA="SCHEMA",i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.FIELD_DEFINITION="FIELD_DEFINITION",i.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.ENUM_VALUE="ENUM_VALUE",i.INPUT_OBJECT="INPUT_OBJECT",i.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(W||(W={}));var _;(function(i){i.NAME="Name",i.DOCUMENT="Document",i.OPERATION_DEFINITION="OperationDefinition",i.VARIABLE_DEFINITION="VariableDefinition",i.SELECTION_SET="SelectionSet",i.FIELD="Field",i.ARGUMENT="Argument",i.FRAGMENT_SPREAD="FragmentSpread",i.INLINE_FRAGMENT="InlineFragment",i.FRAGMENT_DEFINITION="FragmentDefinition",i.VARIABLE="Variable",i.INT="IntValue",i.FLOAT="FloatValue",i.STRING="StringValue",i.BOOLEAN="BooleanValue",i.NULL="NullValue",i.ENUM="EnumValue",i.LIST="ListValue",i.OBJECT="ObjectValue",i.OBJECT_FIELD="ObjectField",i.DIRECTIVE="Directive",i.NAMED_TYPE="NamedType",i.LIST_TYPE="ListType",i.NON_NULL_TYPE="NonNullType",i.SCHEMA_DEFINITION="SchemaDefinition",i.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",i.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",i.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",i.FIELD_DEFINITION="FieldDefinition",i.INPUT_VALUE_DEFINITION="InputValueDefinition",i.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",i.UNION_TYPE_DEFINITION="UnionTypeDefinition",i.ENUM_TYPE_DEFINITION="EnumTypeDefinition",i.ENUM_VALUE_DEFINITION="EnumValueDefinition",i.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",i.DIRECTIVE_DEFINITION="DirectiveDefinition",i.SCHEMA_EXTENSION="SchemaExtension",i.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",i.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",i.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",i.UNION_TYPE_EXTENSION="UnionTypeExtension",i.ENUM_TYPE_EXTENSION="EnumTypeExtension",i.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(_||(_={}));function wa(i){return i===9||i===32}function yr(i){return i>=48&&i<=57}function qf(i){return i>=97&&i<=122||i>=65&&i<=90}function Ja(i){return qf(i)||i===95}function Yf(i){return qf(i)||yr(i)||i===95}function $_(i){var n;let t=Number.MAX_SAFE_INTEGER,s=null,o=-1;for(let l=0;l<i.length;++l){var a;const f=i[l],p=U_(f);p!==f.length&&(s=(a=s)!==null&&a!==void 0?a:l,o=l,l!==0&&p<t&&(t=p))}return i.map((l,f)=>f===0?l:l.slice(t)).slice((n=s)!==null&&n!==void 0?n:0,o+1)}function U_(i){let n=0;for(;n<i.length&&wa(i.charCodeAt(n));)++n;return n}function M_(i,n){const t=i.replace(/"""/g,'\\"""'),s=t.split(/\r\n|[\n\r]/g),o=s.length===1,a=s.length>1&&s.slice(1).every(w=>w.length===0||wa(w.charCodeAt(0))),l=t.endsWith('\\"""'),f=i.endsWith('"')&&!l,p=i.endsWith("\\"),m=f||p,v=!o||i.length>70||m||a||l;let D="";const k=o&&wa(i.charCodeAt(0));return(v&&!k||a)&&(D+=`
`),D+=t,(v||m)&&(D+=`
`),'"""'+D+'"""'}var O;(function(i){i.SOF="<SOF>",i.EOF="<EOF>",i.BANG="!",i.DOLLAR="$",i.AMP="&",i.PAREN_L="(",i.PAREN_R=")",i.SPREAD="...",i.COLON=":",i.EQUALS="=",i.AT="@",i.BRACKET_L="[",i.BRACKET_R="]",i.BRACE_L="{",i.PIPE="|",i.BRACE_R="}",i.NAME="Name",i.INT="Int",i.FLOAT="Float",i.STRING="String",i.BLOCK_STRING="BlockString",i.COMMENT="Comment"})(O||(O={}));class V_{constructor(n){const t=new Gf(O.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==O.EOF)do if(n.next)n=n.next;else{const t=j_(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===O.COMMENT);return n}}function G_(i){return i===O.BANG||i===O.DOLLAR||i===O.AMP||i===O.PAREN_L||i===O.PAREN_R||i===O.SPREAD||i===O.COLON||i===O.EQUALS||i===O.AT||i===O.BRACKET_L||i===O.BRACKET_R||i===O.BRACE_L||i===O.PIPE||i===O.BRACE_R}function $i(i){return i>=0&&i<=55295||i>=57344&&i<=1114111}function js(i,n){return Wf(i.charCodeAt(n))&&Jf(i.charCodeAt(n+1))}function Wf(i){return i>=55296&&i<=56319}function Jf(i){return i>=56320&&i<=57343}function pi(i,n){const t=i.source.body.codePointAt(n);if(t===void 0)return O.EOF;if(t>=32&&t<=126){const s=String.fromCodePoint(t);return s==='"'?`'"'`:`"${s}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function qe(i,n,t,s,o){const a=i.line,l=1+t-i.lineStart;return new Gf(n,t,s,a,l,o)}function j_(i,n){const t=i.source.body,s=t.length;let o=n;for(;o<s;){const a=t.charCodeAt(o);switch(a){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++i.line,i.lineStart=o;continue;case 13:t.charCodeAt(o+1)===10?o+=2:++o,++i.line,i.lineStart=o;continue;case 35:return q_(i,o);case 33:return qe(i,O.BANG,o,o+1);case 36:return qe(i,O.DOLLAR,o,o+1);case 38:return qe(i,O.AMP,o,o+1);case 40:return qe(i,O.PAREN_L,o,o+1);case 41:return qe(i,O.PAREN_R,o,o+1);case 46:if(t.charCodeAt(o+1)===46&&t.charCodeAt(o+2)===46)return qe(i,O.SPREAD,o,o+3);break;case 58:return qe(i,O.COLON,o,o+1);case 61:return qe(i,O.EQUALS,o,o+1);case 64:return qe(i,O.AT,o,o+1);case 91:return qe(i,O.BRACKET_L,o,o+1);case 93:return qe(i,O.BRACKET_R,o,o+1);case 123:return qe(i,O.BRACE_L,o,o+1);case 124:return qe(i,O.PIPE,o,o+1);case 125:return qe(i,O.BRACE_R,o,o+1);case 34:return t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34?H_(i,o):W_(i,o)}if(yr(a)||a===45)return Y_(i,o,a);if(Ja(a))return X_(i,o);throw Xe(i.source,o,a===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:$i(a)||js(t,o)?`Unexpected character: ${pi(i,o)}.`:`Invalid character: ${pi(i,o)}.`)}return qe(i,O.EOF,s,s)}function q_(i,n){const t=i.source.body,s=t.length;let o=n+1;for(;o<s;){const a=t.charCodeAt(o);if(a===10||a===13)break;if($i(a))++o;else if(js(t,o))o+=2;else break}return qe(i,O.COMMENT,n,o,t.slice(n+1,o))}function Y_(i,n,t){const s=i.source.body;let o=n,a=t,l=!1;if(a===45&&(a=s.charCodeAt(++o)),a===48){if(a=s.charCodeAt(++o),yr(a))throw Xe(i.source,o,`Invalid number, unexpected digit after 0: ${pi(i,o)}.`)}else o=Da(i,o,a),a=s.charCodeAt(o);if(a===46&&(l=!0,a=s.charCodeAt(++o),o=Da(i,o,a),a=s.charCodeAt(o)),(a===69||a===101)&&(l=!0,a=s.charCodeAt(++o),(a===43||a===45)&&(a=s.charCodeAt(++o)),o=Da(i,o,a),a=s.charCodeAt(o)),a===46||Ja(a))throw Xe(i.source,o,`Invalid number, expected digit but got: ${pi(i,o)}.`);return qe(i,l?O.FLOAT:O.INT,n,o,s.slice(n,o))}function Da(i,n,t){if(!yr(t))throw Xe(i.source,n,`Invalid number, expected digit but got: ${pi(i,n)}.`);const s=i.source.body;let o=n+1;for(;yr(s.charCodeAt(o));)++o;return o}function W_(i,n){const t=i.source.body,s=t.length;let o=n+1,a=o,l="";for(;o<s;){const f=t.charCodeAt(o);if(f===34)return l+=t.slice(a,o),qe(i,O.STRING,n,o+1,l);if(f===92){l+=t.slice(a,o);const p=t.charCodeAt(o+1)===117?t.charCodeAt(o+2)===123?J_(i,o):z_(i,o):Q_(i,o);l+=p.value,o+=p.size,a=o;continue}if(f===10||f===13)break;if($i(f))++o;else if(js(t,o))o+=2;else throw Xe(i.source,o,`Invalid character within String: ${pi(i,o)}.`)}throw Xe(i.source,o,"Unterminated string.")}function J_(i,n){const t=i.source.body;let s=0,o=3;for(;o<12;){const a=t.charCodeAt(n+o++);if(a===125){if(o<5||!$i(s))break;return{value:String.fromCodePoint(s),size:o}}if(s=s<<4|cr(a),s<0)break}throw Xe(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+o)}".`)}function z_(i,n){const t=i.source.body,s=af(t,n+2);if($i(s))return{value:String.fromCodePoint(s),size:6};if(Wf(s)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const o=af(t,n+8);if(Jf(o))return{value:String.fromCodePoint(s,o),size:12}}throw Xe(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function af(i,n){return cr(i.charCodeAt(n))<<12|cr(i.charCodeAt(n+1))<<8|cr(i.charCodeAt(n+2))<<4|cr(i.charCodeAt(n+3))}function cr(i){return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:-1}function Q_(i,n){const t=i.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Xe(i.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function H_(i,n){const t=i.source.body,s=t.length;let o=i.lineStart,a=n+3,l=a,f="";const p=[];for(;a<s;){const m=t.charCodeAt(a);if(m===34&&t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34){f+=t.slice(l,a),p.push(f);const v=qe(i,O.BLOCK_STRING,n,a+3,$_(p).join(`
`));return i.line+=p.length-1,i.lineStart=o,v}if(m===92&&t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34&&t.charCodeAt(a+3)===34){f+=t.slice(l,a),l=a+1,a+=4;continue}if(m===10||m===13){f+=t.slice(l,a),p.push(f),m===13&&t.charCodeAt(a+1)===10?a+=2:++a,f="",l=a,o=a;continue}if($i(m))++a;else if(js(t,a))a+=2;else throw Xe(i.source,a,`Invalid character within String: ${pi(i,a)}.`)}throw Xe(i.source,a,"Unterminated string.")}function X_(i,n){const t=i.source.body,s=t.length;let o=n+1;for(;o<s;){const a=t.charCodeAt(o);if(Yf(a))++o;else break}return qe(i,O.NAME,n,o,t.slice(n,o))}const K_=10,zf=2;function U(i){return qs(i,[])}function qs(i,n){switch(typeof i){case"string":return JSON.stringify(i);case"function":return i.name?`[function ${i.name}]`:"[function]";case"object":return Z_(i,n);default:return String(i)}}function Z_(i,n){if(i===null)return"null";if(n.includes(i))return"[Circular]";const t=[...n,i];if(eT(i)){const s=i.toJSON();if(s!==i)return typeof s=="string"?s:qs(s,t)}else if(Array.isArray(i))return tT(i,t);return nT(i,t)}function eT(i){return typeof i.toJSON=="function"}function nT(i,n){const t=Object.entries(i);return t.length===0?"{}":n.length>zf?"["+iT(i)+"]":"{ "+t.map(([o,a])=>o+": "+qs(a,n)).join(", ")+" }"}function tT(i,n){if(i.length===0)return"[]";if(n.length>zf)return"[Array]";const t=Math.min(K_,i.length),s=i.length-t,o=[];for(let a=0;a<t;++a)o.push(qs(i[a],n));return s===1?o.push("... 1 more item"):s>1&&o.push(`... ${s} more items`),"["+o.join(", ")+"]"}function iT(i){const n=Object.prototype.toString.call(i).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof i.constructor=="function"){const t=i.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const rT=globalThis.process&&!0,ht=rT?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var s;const o=t.prototype[Symbol.toStringTag],a=Symbol.toStringTag in n?n[Symbol.toStringTag]:(s=n.constructor)===null||s===void 0?void 0:s.name;if(o===a){const l=U(n);throw new Error(`Cannot use ${o} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class Qf{constructor(n,t="GraphQL request",s={line:1,column:1}){typeof n=="string"||fe(!1,`Body must be a string. Received: ${U(n)}.`),this.body=n,this.name=t,this.locationOffset=s,this.locationOffset.line>0||fe(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||fe(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function sT(i){return ht(i,Qf)}function oT(i,n){return new Hf(i,n).parseDocument()}function aT(i,n){const t=new Hf(i,n);t.expectToken(O.SOF);const s=t.parseValueLiteral(!1);return t.expectToken(O.EOF),s}class Hf{constructor(n,t={}){const s=sT(n)?n:new Qf(n);this._lexer=new V_(s),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(O.NAME);return this.node(n,{kind:_.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:_.DOCUMENT,definitions:this.many(O.SOF,this.parseDefinition,O.EOF)})}parseDefinition(){if(this.peek(O.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===O.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Xe(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(O.BRACE_L))return this.node(n,{kind:_.OPERATION_DEFINITION,operation:Vn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let s;return this.peek(O.NAME)&&(s=this.parseName()),this.node(n,{kind:_.OPERATION_DEFINITION,operation:t,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(O.NAME);switch(n.value){case"query":return Vn.QUERY;case"mutation":return Vn.MUTATION;case"subscription":return Vn.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(O.PAREN_L,this.parseVariableDefinition,O.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:_.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(O.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(O.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(O.DOLLAR),this.node(n,{kind:_.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:_.SELECTION_SET,selections:this.many(O.BRACE_L,this.parseSelection,O.BRACE_R)})}parseSelection(){return this.peek(O.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let s,o;return this.expectOptionalToken(O.COLON)?(s=t,o=this.parseName()):o=t,this.node(n,{kind:_.FIELD,alias:s,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(O.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(O.PAREN_L,t,O.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,s=this.parseName();return this.expectToken(O.COLON),this.node(t,{kind:_.ARGUMENT,name:s,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(O.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(O.NAME)?this.node(n,{kind:_.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:_.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:_.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:_.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case O.BRACKET_L:return this.parseList(n);case O.BRACE_L:return this.parseObject(n);case O.INT:return this.advanceLexer(),this.node(t,{kind:_.INT,value:t.value});case O.FLOAT:return this.advanceLexer(),this.node(t,{kind:_.FLOAT,value:t.value});case O.STRING:case O.BLOCK_STRING:return this.parseStringLiteral();case O.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:_.BOOLEAN,value:!0});case"false":return this.node(t,{kind:_.BOOLEAN,value:!1});case"null":return this.node(t,{kind:_.NULL});default:return this.node(t,{kind:_.ENUM,value:t.value})}case O.DOLLAR:if(n)if(this.expectToken(O.DOLLAR),this._lexer.token.kind===O.NAME){const s=this._lexer.token.value;throw Xe(this._lexer.source,t.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:_.STRING,value:n.value,block:n.kind===O.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:_.LIST,values:this.any(O.BRACKET_L,t,O.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:_.OBJECT,fields:this.any(O.BRACE_L,t,O.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,s=this.parseName();return this.expectToken(O.COLON),this.node(t,{kind:_.OBJECT_FIELD,name:s,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(O.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(O.AT),this.node(t,{kind:_.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(O.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(O.BRACKET_R),t=this.node(n,{kind:_.LIST_TYPE,type:s})}else t=this.parseNamedType();return this.expectOptionalToken(O.BANG)?this.node(n,{kind:_.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:_.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(O.STRING)||this.peek(O.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),o=this.many(O.BRACE_L,this.parseOperationTypeDefinition,O.BRACE_R);return this.node(n,{kind:_.SCHEMA_DEFINITION,description:t,directives:s,operationTypes:o})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(O.COLON);const s=this.parseNamedType();return this.node(n,{kind:_.OPERATION_TYPE_DEFINITION,operation:t,type:s})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),o=this.parseConstDirectives();return this.node(n,{kind:_.SCALAR_TYPE_DEFINITION,description:t,name:s,directives:o})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),o=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:_.OBJECT_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:a,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(O.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(O.BRACE_L,this.parseFieldDefinition,O.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName(),o=this.parseArgumentDefs();this.expectToken(O.COLON);const a=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(n,{kind:_.FIELD_DEFINITION,description:t,name:s,arguments:o,type:a,directives:l})}parseArgumentDefs(){return this.optionalMany(O.PAREN_L,this.parseInputValueDef,O.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName();this.expectToken(O.COLON);const o=this.parseTypeReference();let a;this.expectOptionalToken(O.EQUALS)&&(a=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(n,{kind:_.INPUT_VALUE_DEFINITION,description:t,name:s,type:o,defaultValue:a,directives:l})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),o=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:_.INTERFACE_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:a,fields:l})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),o=this.parseConstDirectives(),a=this.parseUnionMemberTypes();return this.node(n,{kind:_.UNION_TYPE_DEFINITION,description:t,name:s,directives:o,types:a})}parseUnionMemberTypes(){return this.expectOptionalToken(O.EQUALS)?this.delimitedMany(O.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),o=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();return this.node(n,{kind:_.ENUM_TYPE_DEFINITION,description:t,name:s,directives:o,values:a})}parseEnumValuesDefinition(){return this.optionalMany(O.BRACE_L,this.parseEnumValueDefinition,O.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(n,{kind:_.ENUM_VALUE_DEFINITION,description:t,name:s,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Xe(this._lexer.source,this._lexer.token.start,`${Ts(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),o=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();return this.node(n,{kind:_.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:s,directives:o,fields:a})}parseInputFieldsDefinition(){return this.optionalMany(O.BRACE_L,this.parseInputValueDef,O.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===O.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),s=this.optionalMany(O.BRACE_L,this.parseOperationTypeDefinition,O.BRACE_R);if(t.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:_.SCHEMA_EXTENSION,directives:t,operationTypes:s})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(n,{kind:_.SCALAR_TYPE_EXTENSION,name:t,directives:s})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:_.OBJECT_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:a})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:_.INTERFACE_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:a})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:_.UNION_TYPE_EXTENSION,name:t,directives:s,types:o})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:_.ENUM_TYPE_EXTENSION,name:t,directives:s,values:o})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:_.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:s,fields:o})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(O.AT);const s=this.parseName(),o=this.parseArgumentDefs(),a=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(n,{kind:_.DIRECTIVE_DEFINITION,description:t,name:s,arguments:o,repeatable:a,locations:l})}parseDirectiveLocations(){return this.delimitedMany(O.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(W,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new B_(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Xe(this._lexer.source,t.start,`Expected ${Xf(n)}, found ${Ts(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===O.NAME&&t.value===n)this.advanceLexer();else throw Xe(this._lexer.source,t.start,`Expected "${n}", found ${Ts(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===O.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Xe(this._lexer.source,t.start,`Unexpected ${Ts(t)}.`)}any(n,t,s){this.expectToken(n);const o=[];for(;!this.expectOptionalToken(s);)o.push(t.call(this));return o}optionalMany(n,t,s){if(this.expectOptionalToken(n)){const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}return[]}many(n,t,s){this.expectToken(n);const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}delimitedMany(n,t){this.expectOptionalToken(n);const s=[];do s.push(t.call(this));while(this.expectOptionalToken(n));return s}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==O.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Xe(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function Ts(i){const n=i.value;return Xf(i.kind)+(n!=null?` "${n}"`:"")}function Xf(i){return G_(i)?`"${i}"`:i}const uT=5;function Qt(i,n){const[t,s]=n?[i,n]:[void 0,i];let o=" Did you mean ";t&&(o+=t+" ");const a=s.map(p=>`"${p}"`);switch(a.length){case 0:return"";case 1:return o+a[0]+"?";case 2:return o+a[0]+" or "+a[1]+"?"}const l=a.slice(0,uT),f=l.pop();return o+l.join(", ")+", or "+f+"?"}function uf(i){return i}function di(i,n){const t=Object.create(null);for(const s of i)t[n(s)]=s;return t}function li(i,n,t){const s=Object.create(null);for(const o of i)s[n(o)]=t(o);return s}function St(i,n){const t=Object.create(null);for(const s of Object.keys(i))t[s]=n(i[s],s);return t}function za(i,n){let t=0,s=0;for(;t<i.length&&s<n.length;){let o=i.charCodeAt(t),a=n.charCodeAt(s);if(As(o)&&As(a)){let l=0;do++t,l=l*10+o-Fa,o=i.charCodeAt(t);while(As(o)&&l>0);let f=0;do++s,f=f*10+a-Fa,a=n.charCodeAt(s);while(As(a)&&f>0);if(l<f)return-1;if(l>f)return 1}else{if(o<a)return-1;if(o>a)return 1;++t,++s}}return i.length-n.length}const Fa=48,lT=57;function As(i){return!isNaN(i)&&Fa<=i&&i<=lT}function vi(i,n){const t=Object.create(null),s=new cT(i),o=Math.floor(i.length*.4)+1;for(const a of n){const l=s.measure(a,o);l!==void 0&&(t[a]=l)}return Object.keys(t).sort((a,l)=>{const f=t[a]-t[l];return f!==0?f:za(a,l)})}class cT{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=lf(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const s=n.toLowerCase();if(this._inputLowerCase===s)return 1;let o=lf(s),a=this._inputArray;if(o.length<a.length){const v=o;o=a,a=v}const l=o.length,f=a.length;if(l-f>t)return;const p=this._rows;for(let v=0;v<=f;v++)p[0][v]=v;for(let v=1;v<=l;v++){const D=p[(v-1)%3],k=p[v%3];let w=k[0]=v;for(let F=1;F<=f;F++){const B=o[v-1]===a[F-1]?0:1;let Y=Math.min(D[F]+1,k[F-1]+1,D[F-1]+B);if(v>1&&F>1&&o[v-1]===a[F-2]&&o[v-2]===a[F-1]){const ce=p[(v-2)%3][F-2];Y=Math.min(Y,ce+1)}Y<w&&(w=Y),k[F]=Y}if(w>t)return}const m=p[l%3][f];return m<=t?m:void 0}}function lf(i){const n=i.length,t=new Array(n);for(let s=0;s<n;++s)t[s]=i.charCodeAt(s);return t}function jn(i){if(i==null)return Object.create(null);if(Object.getPrototypeOf(i)===null)return i;const n=Object.create(null);for(const[t,s]of Object.entries(i))n[t]=s;return n}function fT(i){return`"${i.replace(pT,dT)}"`}const pT=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function dT(i){return hT[i.charCodeAt(0)]}const hT=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],fr=Object.freeze({});function Kf(i,n,t=jf){const s=new Map;for(const ce of Object.values(_))s.set(ce,Zf(n,ce));let o,a=Array.isArray(i),l=[i],f=-1,p=[],m=i,v,D;const k=[],w=[];do{f++;const ce=f===l.length,Se=ce&&p.length!==0;if(ce){if(v=w.length===0?void 0:k[k.length-1],m=D,D=w.pop(),Se)if(a){m=m.slice();let Ce=0;for(const[je,Je]of p){const Re=je-Ce;Je===null?(m.splice(Re,1),Ce++):m[Re]=Je}}else{m=Object.defineProperties({},Object.getOwnPropertyDescriptors(m));for(const[Ce,je]of p)m[Ce]=je}f=o.index,l=o.keys,p=o.edits,a=o.inArray,o=o.prev}else if(D){if(v=a?f:l[f],m=D[v],m==null)continue;k.push(v)}let me;if(!Array.isArray(m)){var F,B;of(m)||fe(!1,`Invalid AST Node: ${U(m)}.`);const Ce=ce?(F=s.get(m.kind))===null||F===void 0?void 0:F.leave:(B=s.get(m.kind))===null||B===void 0?void 0:B.enter;if(me=Ce==null?void 0:Ce.call(n,m,v,D,k,w),me===fr)break;if(me===!1){if(!ce){k.pop();continue}}else if(me!==void 0&&(p.push([v,me]),!ce))if(of(me))m=me;else{k.pop();continue}}if(me===void 0&&Se&&p.push([v,m]),ce)k.pop();else{var Y;o={inArray:a,index:f,keys:l,edits:p,prev:o},a=Array.isArray(m),l=a?m:(Y=t[m.kind])!==null&&Y!==void 0?Y:[],f=-1,p=[],D&&w.push(D),D=m}}while(o!==void 0);return p.length!==0?p[p.length-1][1]:i}function gT(i){const n=new Array(i.length).fill(null),t=Object.create(null);for(const s of Object.values(_)){let o=!1;const a=new Array(i.length).fill(void 0),l=new Array(i.length).fill(void 0);for(let p=0;p<i.length;++p){const{enter:m,leave:v}=Zf(i[p],s);o||(o=m!=null||v!=null),a[p]=m,l[p]=v}if(!o)continue;const f={enter(...p){const m=p[0];for(let D=0;D<i.length;D++)if(n[D]===null){var v;const k=(v=a[D])===null||v===void 0?void 0:v.apply(i[D],p);if(k===!1)n[D]=m;else if(k===fr)n[D]=fr;else if(k!==void 0)return k}},leave(...p){const m=p[0];for(let D=0;D<i.length;D++)if(n[D]===null){var v;const k=(v=l[D])===null||v===void 0?void 0:v.apply(i[D],p);if(k===fr)n[D]=fr;else if(k!==void 0&&k!==!1)return k}else n[D]===m&&(n[D]=null)}};t[s]=f}return t}function Zf(i,n){const t=i[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:i.enter,leave:i.leave}}function Ke(i){return Kf(i,vT)}const mT=80,vT={Name:{leave:i=>i.value},Variable:{leave:i=>"$"+i.name},Document:{leave:i=>j(i.definitions,`

`)},OperationDefinition:{leave(i){const n=ue("(",j(i.variableDefinitions,", "),")"),t=j([i.operation,j([i.name,n]),j(i.directives," ")]," ");return(t==="query"?"":t+" ")+i.selectionSet}},VariableDefinition:{leave:({variable:i,type:n,defaultValue:t,directives:s})=>i+": "+n+ue(" = ",t)+ue(" ",j(s," "))},SelectionSet:{leave:({selections:i})=>Xn(i)},Field:{leave({alias:i,name:n,arguments:t,directives:s,selectionSet:o}){const a=ue("",i,": ")+n;let l=a+ue("(",j(t,", "),")");return l.length>mT&&(l=a+ue(`(
`,Ss(j(t,`
`)),`
)`)),j([l,j(s," "),o]," ")}},Argument:{leave:({name:i,value:n})=>i+": "+n},FragmentSpread:{leave:({name:i,directives:n})=>"..."+i+ue(" ",j(n," "))},InlineFragment:{leave:({typeCondition:i,directives:n,selectionSet:t})=>j(["...",ue("on ",i),j(n," "),t]," ")},FragmentDefinition:{leave:({name:i,typeCondition:n,variableDefinitions:t,directives:s,selectionSet:o})=>`fragment ${i}${ue("(",j(t,", "),")")} on ${n} ${ue("",j(s," ")," ")}`+o},IntValue:{leave:({value:i})=>i},FloatValue:{leave:({value:i})=>i},StringValue:{leave:({value:i,block:n})=>n?M_(i):fT(i)},BooleanValue:{leave:({value:i})=>i?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:i})=>i},ListValue:{leave:({values:i})=>"["+j(i,", ")+"]"},ObjectValue:{leave:({fields:i})=>"{"+j(i,", ")+"}"},ObjectField:{leave:({name:i,value:n})=>i+": "+n},Directive:{leave:({name:i,arguments:n})=>"@"+i+ue("(",j(n,", "),")")},NamedType:{leave:({name:i})=>i},ListType:{leave:({type:i})=>"["+i+"]"},NonNullType:{leave:({type:i})=>i+"!"},SchemaDefinition:{leave:({description:i,directives:n,operationTypes:t})=>ue("",i,`
`)+j(["schema",j(n," "),Xn(t)]," ")},OperationTypeDefinition:{leave:({operation:i,type:n})=>i+": "+n},ScalarTypeDefinition:{leave:({description:i,name:n,directives:t})=>ue("",i,`
`)+j(["scalar",n,j(t," ")]," ")},ObjectTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:o})=>ue("",i,`
`)+j(["type",n,ue("implements ",j(t," & ")),j(s," "),Xn(o)]," ")},FieldDefinition:{leave:({description:i,name:n,arguments:t,type:s,directives:o})=>ue("",i,`
`)+n+(cf(t)?ue(`(
`,Ss(j(t,`
`)),`
)`):ue("(",j(t,", "),")"))+": "+s+ue(" ",j(o," "))},InputValueDefinition:{leave:({description:i,name:n,type:t,defaultValue:s,directives:o})=>ue("",i,`
`)+j([n+": "+t,ue("= ",s),j(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:o})=>ue("",i,`
`)+j(["interface",n,ue("implements ",j(t," & ")),j(s," "),Xn(o)]," ")},UnionTypeDefinition:{leave:({description:i,name:n,directives:t,types:s})=>ue("",i,`
`)+j(["union",n,j(t," "),ue("= ",j(s," | "))]," ")},EnumTypeDefinition:{leave:({description:i,name:n,directives:t,values:s})=>ue("",i,`
`)+j(["enum",n,j(t," "),Xn(s)]," ")},EnumValueDefinition:{leave:({description:i,name:n,directives:t})=>ue("",i,`
`)+j([n,j(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:i,name:n,directives:t,fields:s})=>ue("",i,`
`)+j(["input",n,j(t," "),Xn(s)]," ")},DirectiveDefinition:{leave:({description:i,name:n,arguments:t,repeatable:s,locations:o})=>ue("",i,`
`)+"directive @"+n+(cf(t)?ue(`(
`,Ss(j(t,`
`)),`
)`):ue("(",j(t,", "),")"))+(s?" repeatable":"")+" on "+j(o," | ")},SchemaExtension:{leave:({directives:i,operationTypes:n})=>j(["extend schema",j(i," "),Xn(n)]," ")},ScalarTypeExtension:{leave:({name:i,directives:n})=>j(["extend scalar",i,j(n," ")]," ")},ObjectTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>j(["extend type",i,ue("implements ",j(n," & ")),j(t," "),Xn(s)]," ")},InterfaceTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>j(["extend interface",i,ue("implements ",j(n," & ")),j(t," "),Xn(s)]," ")},UnionTypeExtension:{leave:({name:i,directives:n,types:t})=>j(["extend union",i,j(n," "),ue("= ",j(t," | "))]," ")},EnumTypeExtension:{leave:({name:i,directives:n,values:t})=>j(["extend enum",i,j(n," "),Xn(t)]," ")},InputObjectTypeExtension:{leave:({name:i,directives:n,fields:t})=>j(["extend input",i,j(n," "),Xn(t)]," ")}};function j(i,n=""){var t;return(t=i==null?void 0:i.filter(s=>s).join(n))!==null&&t!==void 0?t:""}function Xn(i){return ue(`{
`,Ss(j(i,`
`)),`
}`)}function ue(i,n,t=""){return n!=null&&n!==""?i+n+t:""}function Ss(i){return ue("  ",i.replace(/\n/g,`
  `))}function cf(i){var n;return(n=i==null?void 0:i.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function Na(i,n){switch(i.kind){case _.NULL:return null;case _.INT:return parseInt(i.value,10);case _.FLOAT:return parseFloat(i.value);case _.STRING:case _.ENUM:case _.BOOLEAN:return i.value;case _.LIST:return i.values.map(t=>Na(t,n));case _.OBJECT:return li(i.fields,t=>t.name.value,t=>Na(t.value,n));case _.VARIABLE:return n==null?void 0:n[i.name.value]}}function ot(i){if(i!=null||fe(!1,"Must provide name."),typeof i=="string"||fe(!1,"Expected name to be a string."),i.length===0)throw new L("Expected name to be a non-empty string.");for(let n=1;n<i.length;++n)if(!Yf(i.charCodeAt(n)))throw new L(`Names must only contain [_a-zA-Z0-9] but "${i}" does not.`);if(!Ja(i.charCodeAt(0)))throw new L(`Names must start with [_a-zA-Z] but "${i}" does not.`);return i}function ET(i){if(i==="true"||i==="false"||i==="null")throw new L(`Enum values cannot be named: ${i}`);return ot(i)}function Qa(i){return Ht(i)||We(i)||Ge(i)||Gn(i)||nt(i)||En(i)||Dn(i)||be(i)}function Ht(i){return ht(i,kt)}function We(i){return ht(i,pt)}function DT(i){if(!We(i))throw new Error(`Expected ${U(i)} to be a GraphQL Object type.`);return i}function Ge(i){return ht(i,ks)}function yT(i){if(!Ge(i))throw new Error(`Expected ${U(i)} to be a GraphQL Interface type.`);return i}function Gn(i){return ht(i,xs)}function nt(i){return ht(i,Pi)}function En(i){return ht(i,Rs)}function Dn(i){return ht(i,fn)}function be(i){return ht(i,re)}function Ha(i){return Ht(i)||nt(i)||En(i)||Xa(i)&&Ha(i.ofType)}function ep(i){return Ht(i)||We(i)||Ge(i)||Gn(i)||nt(i)||Xa(i)&&ep(i.ofType)}function Bi(i){return Ht(i)||nt(i)}function _r(i){return We(i)||Ge(i)||Gn(i)}function ci(i){return Ge(i)||Gn(i)}class fn{constructor(n){Qa(n)||fe(!1,`Expected ${U(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class re{constructor(n){np(n)||fe(!1,`Expected ${U(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Xa(i){return Dn(i)||be(i)}function np(i){return Qa(i)&&!be(i)}function _T(i){if(!np(i))throw new Error(`Expected ${U(i)} to be a GraphQL nullable type.`);return i}function TT(i){if(i)return be(i)?i.ofType:i}function bI(i){return Ht(i)||We(i)||Ge(i)||Gn(i)||nt(i)||En(i)}function hi(i){if(i){let n=i;for(;Xa(n);)n=n.ofType;return n}}function tp(i){return typeof i=="function"?i():i}function ip(i){return typeof i=="function"?i():i}class kt{constructor(n){var t,s,o,a;const l=(t=n.parseValue)!==null&&t!==void 0?t:uf;this.name=ot(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(s=n.serialize)!==null&&s!==void 0?s:uf,this.parseValue=l,this.parseLiteral=(o=n.parseLiteral)!==null&&o!==void 0?o:(f,p)=>l(Na(f,p)),this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(a=n.extensionASTNodes)!==null&&a!==void 0?a:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||fe(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${U(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||fe(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||fe(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class pt{constructor(n){var t;this.name=ot(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>sp(n),this._interfaces=()=>rp(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||fe(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${U(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:ap(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function rp(i){var n;const t=tp((n=i.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||fe(!1,`${i.name} interfaces must be an Array or a function which returns an Array.`),t}function sp(i){const n=ip(i.fields);return Li(n)||fe(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),St(n,(t,s)=>{var o;Li(t)||fe(!1,`${i.name}.${s} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||fe(!1,`${i.name}.${s} field resolver must be a function if provided, but got: ${U(t.resolve)}.`);const a=(o=t.args)!==null&&o!==void 0?o:{};return Li(a)||fe(!1,`${i.name}.${s} args must be an object with argument names as keys.`),{name:ot(s),description:t.description,type:t.type,args:op(a),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:jn(t.extensions),astNode:t.astNode}})}function op(i){return Object.entries(i).map(([n,t])=>({name:ot(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:jn(t.extensions),astNode:t.astNode}))}function Li(i){return Ot(i)&&!Array.isArray(i)}function ap(i){return St(i,n=>({description:n.description,type:n.type,args:up(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function up(i){return li(i,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function lp(i){return be(i.type)&&i.defaultValue===void 0}class ks{constructor(n){var t;this.name=ot(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=sp.bind(void 0,n),this._interfaces=rp.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${U(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:ap(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class xs{constructor(n){var t;this.name=ot(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=AT.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${U(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function AT(i){const n=tp(i.types);return Array.isArray(n)||fe(!1,`Must provide Array of types or a function which returns such an array for Union ${i.name}.`),n}class Pi{constructor(n){var t;this.name=ot(n.name),this.description=n.description,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=typeof n.values=="function"?n.values:ff(this.name,n.values),this._valueLookup=null,this._nameLookup=null}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return typeof this._values=="function"&&(this._values=ff(this.name,this._values())),this._values}getValue(n){return this._nameLookup===null&&(this._nameLookup=di(this.getValues(),t=>t.name)),this._nameLookup[n]}serialize(n){this._valueLookup===null&&(this._valueLookup=new Map(this.getValues().map(s=>[s.value,s])));const t=this._valueLookup.get(n);if(t===void 0)throw new L(`Enum "${this.name}" cannot represent value: ${U(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const s=U(n);throw new L(`Enum "${this.name}" cannot represent non-string value: ${s}.`+Is(this,s))}const t=this.getValue(n);if(t==null)throw new L(`Value "${n}" does not exist in "${this.name}" enum.`+Is(this,n));return t.value}parseLiteral(n,t){if(n.kind!==_.ENUM){const o=Ke(n);throw new L(`Enum "${this.name}" cannot represent non-enum value: ${o}.`+Is(this,o),{nodes:n})}const s=this.getValue(n.value);if(s==null){const o=Ke(n);throw new L(`Value "${o}" does not exist in "${this.name}" enum.`+Is(this,o),{nodes:n})}return s.value}toConfig(){const n=li(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Is(i,n){const t=i.getValues().map(o=>o.name),s=vi(n,t);return Qt("the enum value",s)}function ff(i,n){return Li(n)||fe(!1,`${i} values must be an object with value names as keys.`),Object.entries(n).map(([t,s])=>(Li(s)||fe(!1,`${i}.${t} must refer to an object with a "value" key representing an internal value but got: ${U(s)}.`),{name:ET(t),description:s.description,value:s.value!==void 0?s.value:t,deprecationReason:s.deprecationReason,extensions:jn(s.extensions),astNode:s.astNode}))}class Rs{constructor(n){var t,s;this.name=ot(n.name),this.description=n.description,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this.isOneOf=(s=n.isOneOf)!==null&&s!==void 0?s:!1,this._fields=IT.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=St(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,isOneOf:this.isOneOf}}toString(){return this.name}toJSON(){return this.toString()}}function IT(i){const n=ip(i.fields);return Li(n)||fe(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),St(n,(t,s)=>(!("resolve"in t)||fe(!1,`${i.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:ot(s),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:jn(t.extensions),astNode:t.astNode}))}function bT(i){return be(i.type)&&i.defaultValue===void 0}function mr(i,n,t){return n===t?!0:be(t)?be(n)?mr(i,n.ofType,t.ofType):!1:be(n)?mr(i,n.ofType,t):Dn(t)?Dn(n)?mr(i,n.ofType,t.ofType):!1:Dn(n)?!1:ci(t)&&(Ge(n)||We(n))&&i.isSubType(t,n)}function pf(i,n,t){return n===t?!0:ci(n)?ci(t)?i.getPossibleTypes(n).some(s=>i.isSubType(t,s)):i.isSubType(n,t):ci(t)?i.isSubType(t,n):!1}const ya=2147483647,_a=-2147483648,ST=new kt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(i){const n=Sr(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new L(`Int cannot represent non-integer value: ${U(n)}`);if(t>ya||t<_a)throw new L("Int cannot represent non 32-bit signed integer value: "+U(n));return t},parseValue(i){if(typeof i!="number"||!Number.isInteger(i))throw new L(`Int cannot represent non-integer value: ${U(i)}`);if(i>ya||i<_a)throw new L(`Int cannot represent non 32-bit signed integer value: ${i}`);return i},parseLiteral(i){if(i.kind!==_.INT)throw new L(`Int cannot represent non-integer value: ${Ke(i)}`,{nodes:i});const n=parseInt(i.value,10);if(n>ya||n<_a)throw new L(`Int cannot represent non 32-bit signed integer value: ${i.value}`,{nodes:i});return n}}),wT=new kt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(i){const n=Sr(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new L(`Float cannot represent non numeric value: ${U(n)}`);return t},parseValue(i){if(typeof i!="number"||!Number.isFinite(i))throw new L(`Float cannot represent non numeric value: ${U(i)}`);return i},parseLiteral(i){if(i.kind!==_.FLOAT&&i.kind!==_.INT)throw new L(`Float cannot represent non numeric value: ${Ke(i)}`,i);return parseFloat(i.value)}}),Ve=new kt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(i){const n=Sr(i);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new L(`String cannot represent value: ${U(i)}`)},parseValue(i){if(typeof i!="string")throw new L(`String cannot represent a non string value: ${U(i)}`);return i},parseLiteral(i){if(i.kind!==_.STRING)throw new L(`String cannot represent a non string value: ${Ke(i)}`,{nodes:i});return i.value}}),Nn=new kt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(i){const n=Sr(i);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new L(`Boolean cannot represent a non boolean value: ${U(n)}`)},parseValue(i){if(typeof i!="boolean")throw new L(`Boolean cannot represent a non boolean value: ${U(i)}`);return i},parseLiteral(i){if(i.kind!==_.BOOLEAN)throw new L(`Boolean cannot represent a non boolean value: ${Ke(i)}`,{nodes:i});return i.value}}),cp=new kt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(i){const n=Sr(i);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new L(`ID cannot represent value: ${U(i)}`)},parseValue(i){if(typeof i=="string")return i;if(typeof i=="number"&&Number.isInteger(i))return i.toString();throw new L(`ID cannot represent value: ${U(i)}`)},parseLiteral(i){if(i.kind!==_.STRING&&i.kind!==_.INT)throw new L("ID cannot represent a non-string and non-integer value: "+Ke(i),{nodes:i});return i.value}}),Ys=Object.freeze([Ve,ST,wT,Nn,cp]);function FT(i){return Ys.some(({name:n})=>i.name===n)}function Sr(i){if(Ot(i)){if(typeof i.valueOf=="function"){const n=i.valueOf();if(!Ot(n))return n}if(typeof i.toJSON=="function")return i.toJSON()}return i}function NT(i){return ht(i,xt)}class xt{constructor(n){var t,s;this.name=ot(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=jn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||fe(!1,`@${n.name} locations must be an Array.`);const o=(s=n.args)!==null&&s!==void 0?s:{};Ot(o)&&!Array.isArray(o)||fe(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=op(o)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:up(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const fp=new xt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[W.FIELD,W.FRAGMENT_SPREAD,W.INLINE_FRAGMENT],args:{if:{type:new re(Nn),description:"Included when true."}}}),pp=new xt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[W.FIELD,W.FRAGMENT_SPREAD,W.INLINE_FRAGMENT],args:{if:{type:new re(Nn),description:"Skipped when true."}}}),CT="No longer supported",dp=new xt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[W.FIELD_DEFINITION,W.ARGUMENT_DEFINITION,W.INPUT_FIELD_DEFINITION,W.ENUM_VALUE],args:{reason:{type:Ve,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:CT}}}),hp=new xt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[W.SCALAR],args:{url:{type:new re(Ve),description:"The URL that specifies the behavior of this scalar."}}}),gp=new xt({name:"oneOf",description:"Indicates exactly one field must be supplied and this field must not be `null`.",locations:[W.INPUT_OBJECT],args:{}}),Ui=Object.freeze([fp,pp,dp,hp,gp]);function OT(i){return typeof i=="object"&&typeof(i==null?void 0:i[Symbol.iterator])=="function"}function pr(i,n){if(be(n)){const t=pr(i,n.ofType);return(t==null?void 0:t.kind)===_.NULL?null:t}if(i===null)return{kind:_.NULL};if(i===void 0)return null;if(Dn(n)){const t=n.ofType;if(OT(i)){const s=[];for(const o of i){const a=pr(o,t);a!=null&&s.push(a)}return{kind:_.LIST,values:s}}return pr(i,t)}if(En(n)){if(!Ot(i))return null;const t=[];for(const s of Object.values(n.getFields())){const o=pr(i[s.name],s.type);o&&t.push({kind:_.OBJECT_FIELD,name:{kind:_.NAME,value:s.name},value:o})}return{kind:_.OBJECT,fields:t}}if(Bi(n)){const t=n.serialize(i);if(t==null)return null;if(typeof t=="boolean")return{kind:_.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const s=String(t);return df.test(s)?{kind:_.INT,value:s}:{kind:_.FLOAT,value:s}}if(typeof t=="string")return nt(n)?{kind:_.ENUM,value:t}:n===cp&&df.test(t)?{kind:_.INT,value:t}:{kind:_.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${U(t)}.`)}et(!1,"Unexpected input type: "+U(n))}const df=/^-?(?:0|[1-9][0-9]*)$/,Ka=new pt({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Ve,resolve:i=>i.description},types:{description:"A list of all types supported by this server.",type:new re(new fn(new re(Zn))),resolve(i){return Object.values(i.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new re(Zn),resolve:i=>i.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Zn,resolve:i=>i.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Zn,resolve:i=>i.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new re(new fn(new re(mp))),resolve:i=>i.getDirectives()}})}),mp=new pt({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new re(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},isRepeatable:{type:new re(Nn),resolve:i=>i.isRepeatable},locations:{type:new re(new fn(new re(vp))),resolve:i=>i.locations},args:{type:new re(new fn(new re(Ws))),args:{includeDeprecated:{type:Nn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}}})}),vp=new Pi({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:W.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:W.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:W.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:W.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:W.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:W.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:W.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:W.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:W.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:W.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:W.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:W.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:W.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:W.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:W.UNION,description:"Location adjacent to a union definition."},ENUM:{value:W.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:W.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:W.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:W.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Zn=new pt({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new re(yp),resolve(i){if(Ht(i))return Ae.SCALAR;if(We(i))return Ae.OBJECT;if(Ge(i))return Ae.INTERFACE;if(Gn(i))return Ae.UNION;if(nt(i))return Ae.ENUM;if(En(i))return Ae.INPUT_OBJECT;if(Dn(i))return Ae.LIST;if(be(i))return Ae.NON_NULL;et(!1,`Unexpected type: "${U(i)}".`)}},name:{type:Ve,resolve:i=>"name"in i?i.name:void 0},description:{type:Ve,resolve:i=>"description"in i?i.description:void 0},specifiedByURL:{type:Ve,resolve:i=>"specifiedByURL"in i?i.specifiedByURL:void 0},fields:{type:new fn(new re(Ep)),args:{includeDeprecated:{type:Nn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(We(i)||Ge(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new fn(new re(Zn)),resolve(i){if(We(i)||Ge(i))return i.getInterfaces()}},possibleTypes:{type:new fn(new re(Zn)),resolve(i,n,t,{schema:s}){if(ci(i))return s.getPossibleTypes(i)}},enumValues:{type:new fn(new re(Dp)),args:{includeDeprecated:{type:Nn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(nt(i)){const t=i.getValues();return n?t:t.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new fn(new re(Ws)),args:{includeDeprecated:{type:Nn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(En(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},ofType:{type:Zn,resolve:i=>"ofType"in i?i.ofType:void 0},isOneOf:{type:Nn,resolve:i=>{if(En(i))return i.isOneOf}}})}),Ep=new pt({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new re(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},args:{type:new re(new fn(new re(Ws))),args:{includeDeprecated:{type:Nn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}},type:{type:new re(Zn),resolve:i=>i.type},isDeprecated:{type:new re(Nn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ve,resolve:i=>i.deprecationReason}})}),Ws=new pt({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new re(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},type:{type:new re(Zn),resolve:i=>i.type},defaultValue:{type:Ve,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(i){const{type:n,defaultValue:t}=i,s=pr(t,n);return s?Ke(s):null}},isDeprecated:{type:new re(Nn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ve,resolve:i=>i.deprecationReason}})}),Dp=new pt({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new re(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},isDeprecated:{type:new re(Nn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ve,resolve:i=>i.deprecationReason}})});var Ae;(function(i){i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.INPUT_OBJECT="INPUT_OBJECT",i.LIST="LIST",i.NON_NULL="NON_NULL"})(Ae||(Ae={}));const yp=new Pi({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:Ae.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:Ae.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:Ae.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:Ae.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:Ae.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:Ae.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:Ae.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:Ae.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new re(Ka);new re(Ve);new re(Ve);const Js=Object.freeze([Ka,mp,vp,Zn,Ep,Ws,Dp,yp]);function kT(i){return Js.some(({name:n})=>i.name===n)}class _p{constructor(n){var t,s;this.__validationErrors=n.assumeValid===!0?[]:void 0,Ot(n)||fe(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||fe(!1,`"types" must be Array if provided but got: ${U(n.types)}.`),!n.directives||Array.isArray(n.directives)||fe(!1,`"directives" must be Array if provided but got: ${U(n.directives)}.`),this.description=n.description,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(s=n.directives)!==null&&s!==void 0?s:Ui;const o=new Set(n.types);if(n.types!=null)for(const a of n.types)o.delete(a),Kn(a,o);this._queryType!=null&&Kn(this._queryType,o),this._mutationType!=null&&Kn(this._mutationType,o),this._subscriptionType!=null&&Kn(this._subscriptionType,o);for(const a of this._directives)if(NT(a))for(const l of a.args)Kn(l.type,o);Kn(Ka,o),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const a of o){if(a==null)continue;const l=a.name;if(l||fe(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=a,Ge(a)){for(const f of a.getInterfaces())if(Ge(f)){let p=this._implementationsMap[f.name];p===void 0&&(p=this._implementationsMap[f.name]={objects:[],interfaces:[]}),p.interfaces.push(a)}}else if(We(a)){for(const f of a.getInterfaces())if(Ge(f)){let p=this._implementationsMap[f.name];p===void 0&&(p=this._implementationsMap[f.name]={objects:[],interfaces:[]}),p.objects.push(a)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case Vn.QUERY:return this.getQueryType();case Vn.MUTATION:return this.getMutationType();case Vn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Gn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let s=this._subTypeMap[n.name];if(s===void 0){if(s=Object.create(null),Gn(n))for(const o of n.getTypes())s[o.name]=!0;else{const o=this.getImplementations(n);for(const a of o.objects)s[a.name]=!0;for(const a of o.interfaces)s[a.name]=!0}this._subTypeMap[n.name]=s}return s[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Kn(i,n){const t=hi(i);if(!n.has(t)){if(n.add(t),Gn(t))for(const s of t.getTypes())Kn(s,n);else if(We(t)||Ge(t)){for(const s of t.getInterfaces())Kn(s,n);for(const s of Object.values(t.getFields())){Kn(s.type,n);for(const o of s.args)Kn(o.type,n)}}else if(En(t))for(const s of Object.values(t.getFields()))Kn(s.type,n)}return n}function dt(i,n){switch(n.kind){case _.LIST_TYPE:{const t=dt(i,n.type);return t&&new fn(t)}case _.NON_NULL_TYPE:{const t=dt(i,n.type);return t&&new re(t)}case _.NAMED_TYPE:return i.getType(n.name.value)}}function xT(i){return i.kind===_.OPERATION_DEFINITION||i.kind===_.FRAGMENT_DEFINITION}function RT(i){return i.kind===_.SCHEMA_DEFINITION||wr(i)||i.kind===_.DIRECTIVE_DEFINITION}function wr(i){return i.kind===_.SCALAR_TYPE_DEFINITION||i.kind===_.OBJECT_TYPE_DEFINITION||i.kind===_.INTERFACE_TYPE_DEFINITION||i.kind===_.UNION_TYPE_DEFINITION||i.kind===_.ENUM_TYPE_DEFINITION||i.kind===_.INPUT_OBJECT_TYPE_DEFINITION}function LT(i){return i.kind===_.SCHEMA_EXTENSION||Za(i)}function Za(i){return i.kind===_.SCALAR_TYPE_EXTENSION||i.kind===_.OBJECT_TYPE_EXTENSION||i.kind===_.INTERFACE_TYPE_EXTENSION||i.kind===_.UNION_TYPE_EXTENSION||i.kind===_.ENUM_TYPE_EXTENSION||i.kind===_.INPUT_OBJECT_TYPE_EXTENSION}function BT(i){return{Document(n){for(const t of n.definitions)if(!xT(t)){const s=t.kind===_.SCHEMA_DEFINITION||t.kind===_.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';i.reportError(new L(`The ${s} definition is not executable.`,{nodes:t}))}return!1}}}function PT(i){return{Field(n){const t=i.getParentType();if(t&&!i.getFieldDef()){const o=i.getSchema(),a=n.name.value;let l=Qt("to use an inline fragment on",$T(o,t,a));l===""&&(l=Qt(UT(t,a))),i.reportError(new L(`Cannot query field "${a}" on type "${t.name}".`+l,{nodes:n}))}}}}function $T(i,n,t){if(!ci(n))return[];const s=new Set,o=Object.create(null);for(const l of i.getPossibleTypes(n))if(l.getFields()[t]){s.add(l),o[l.name]=1;for(const f of l.getInterfaces()){var a;f.getFields()[t]&&(s.add(f),o[f.name]=((a=o[f.name])!==null&&a!==void 0?a:0)+1)}}return[...s].sort((l,f)=>{const p=o[f.name]-o[l.name];return p!==0?p:Ge(l)&&i.isSubType(l,f)?-1:Ge(f)&&i.isSubType(f,l)?1:za(l.name,f.name)}).map(l=>l.name)}function UT(i,n){if(We(i)||Ge(i)){const t=Object.keys(i.getFields());return vi(n,t)}return[]}function MT(i){return{InlineFragment(n){const t=n.typeCondition;if(t){const s=dt(i.getSchema(),t);if(s&&!_r(s)){const o=Ke(t);i.reportError(new L(`Fragment cannot condition on non composite type "${o}".`,{nodes:t}))}}},FragmentDefinition(n){const t=dt(i.getSchema(),n.typeCondition);if(t&&!_r(t)){const s=Ke(n.typeCondition);i.reportError(new L(`Fragment "${n.name.value}" cannot condition on non composite type "${s}".`,{nodes:n.typeCondition}))}}}}function VT(i){return{...Tp(i),Argument(n){const t=i.getArgument(),s=i.getFieldDef(),o=i.getParentType();if(!t&&s&&o){const a=n.name.value,l=s.args.map(p=>p.name),f=vi(a,l);i.reportError(new L(`Unknown argument "${a}" on field "${o.name}.${s.name}".`+Qt(f),{nodes:n}))}}}}function Tp(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Ui;for(const l of s)n[l.name]=l.args.map(f=>f.name);const o=i.getDocument().definitions;for(const l of o)if(l.kind===_.DIRECTIVE_DEFINITION){var a;const f=(a=l.arguments)!==null&&a!==void 0?a:[];n[l.name.value]=f.map(p=>p.name.value)}return{Directive(l){const f=l.name.value,p=n[f];if(l.arguments&&p)for(const m of l.arguments){const v=m.name.value;if(!p.includes(v)){const D=vi(v,p);i.reportError(new L(`Unknown argument "${v}" on directive "@${f}".`+Qt(D),{nodes:m}))}}return!1}}}function Ap(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Ui;for(const a of s)n[a.name]=a.locations;const o=i.getDocument().definitions;for(const a of o)a.kind===_.DIRECTIVE_DEFINITION&&(n[a.name.value]=a.locations.map(l=>l.value));return{Directive(a,l,f,p,m){const v=a.name.value,D=n[v];if(!D){i.reportError(new L(`Unknown directive "@${v}".`,{nodes:a}));return}const k=GT(m);k&&!D.includes(k)&&i.reportError(new L(`Directive "@${v}" may not be used on ${k}.`,{nodes:a}))}}}function GT(i){const n=i[i.length-1];switch("kind"in n||et(!1),n.kind){case _.OPERATION_DEFINITION:return jT(n.operation);case _.FIELD:return W.FIELD;case _.FRAGMENT_SPREAD:return W.FRAGMENT_SPREAD;case _.INLINE_FRAGMENT:return W.INLINE_FRAGMENT;case _.FRAGMENT_DEFINITION:return W.FRAGMENT_DEFINITION;case _.VARIABLE_DEFINITION:return W.VARIABLE_DEFINITION;case _.SCHEMA_DEFINITION:case _.SCHEMA_EXTENSION:return W.SCHEMA;case _.SCALAR_TYPE_DEFINITION:case _.SCALAR_TYPE_EXTENSION:return W.SCALAR;case _.OBJECT_TYPE_DEFINITION:case _.OBJECT_TYPE_EXTENSION:return W.OBJECT;case _.FIELD_DEFINITION:return W.FIELD_DEFINITION;case _.INTERFACE_TYPE_DEFINITION:case _.INTERFACE_TYPE_EXTENSION:return W.INTERFACE;case _.UNION_TYPE_DEFINITION:case _.UNION_TYPE_EXTENSION:return W.UNION;case _.ENUM_TYPE_DEFINITION:case _.ENUM_TYPE_EXTENSION:return W.ENUM;case _.ENUM_VALUE_DEFINITION:return W.ENUM_VALUE;case _.INPUT_OBJECT_TYPE_DEFINITION:case _.INPUT_OBJECT_TYPE_EXTENSION:return W.INPUT_OBJECT;case _.INPUT_VALUE_DEFINITION:{const t=i[i.length-3];return"kind"in t||et(!1),t.kind===_.INPUT_OBJECT_TYPE_DEFINITION?W.INPUT_FIELD_DEFINITION:W.ARGUMENT_DEFINITION}default:et(!1,"Unexpected kind: "+U(n.kind))}}function jT(i){switch(i){case Vn.QUERY:return W.QUERY;case Vn.MUTATION:return W.MUTATION;case Vn.SUBSCRIPTION:return W.SUBSCRIPTION}}function qT(i){return{FragmentSpread(n){const t=n.name.value;i.getFragment(t)||i.reportError(new L(`Unknown fragment "${t}".`,{nodes:n.name}))}}}function Ip(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);for(const a of i.getDocument().definitions)wr(a)&&(s[a.name.value]=!0);const o=[...Object.keys(t),...Object.keys(s)];return{NamedType(a,l,f,p,m){const v=a.name.value;if(!t[v]&&!s[v]){var D;const k=(D=m[2])!==null&&D!==void 0?D:f,w=k!=null&&YT(k);if(w&&hf.includes(v))return;const F=vi(v,w?hf.concat(o):o);i.reportError(new L(`Unknown type "${v}".`+Qt(F),{nodes:a}))}}}}const hf=[...Ys,...Js].map(i=>i.name);function YT(i){return"kind"in i&&(RT(i)||LT(i))}function WT(i){let n=0;return{Document(t){n=t.definitions.filter(s=>s.kind===_.OPERATION_DEFINITION).length},OperationDefinition(t){!t.name&&n>1&&i.reportError(new L("This anonymous operation must be the only defined operation.",{nodes:t}))}}}function JT(i){var n,t,s;const o=i.getSchema(),a=(n=(t=(s=o==null?void 0:o.astNode)!==null&&s!==void 0?s:o==null?void 0:o.getQueryType())!==null&&t!==void 0?t:o==null?void 0:o.getMutationType())!==null&&n!==void 0?n:o==null?void 0:o.getSubscriptionType();let l=0;return{SchemaDefinition(f){if(a){i.reportError(new L("Cannot define a new schema within a schema extension.",{nodes:f}));return}l>0&&i.reportError(new L("Must provide only one schema definition.",{nodes:f})),++l}}}const zT=3;function QT(i){function n(t,s=Object.create(null),o=0){if(t.kind===_.FRAGMENT_SPREAD){const a=t.name.value;if(s[a]===!0)return!1;const l=i.getFragment(a);if(!l)return!1;try{return s[a]=!0,n(l,s,o)}finally{s[a]=void 0}}if(t.kind===_.FIELD&&(t.name.value==="fields"||t.name.value==="interfaces"||t.name.value==="possibleTypes"||t.name.value==="inputFields")&&(o++,o>=zT))return!0;if("selectionSet"in t&&t.selectionSet){for(const a of t.selectionSet.selections)if(n(a,s,o))return!0}return!1}return{Field(t){if((t.name.value==="__schema"||t.name.value==="__type")&&n(t))return i.reportError(new L("Maximum introspection depth exceeded",{nodes:[t]})),!1}}}function HT(i){const n=Object.create(null),t=[],s=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(a){return o(a),!1}};function o(a){if(n[a.name.value])return;const l=a.name.value;n[l]=!0;const f=i.getFragmentSpreads(a.selectionSet);if(f.length!==0){s[l]=t.length;for(const p of f){const m=p.name.value,v=s[m];if(t.push(p),v===void 0){const D=i.getFragment(m);D&&o(D)}else{const D=t.slice(v),k=D.slice(0,-1).map(w=>'"'+w.name.value+'"').join(", ");i.reportError(new L(`Cannot spread fragment "${m}" within itself`+(k!==""?` via ${k}.`:"."),{nodes:D}))}t.pop()}s[l]=void 0}}}function XT(i){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const s=i.getRecursiveVariableUsages(t);for(const{node:o}of s){const a=o.name.value;n[a]!==!0&&i.reportError(new L(t.name?`Variable "$${a}" is not defined by operation "${t.name.value}".`:`Variable "$${a}" is not defined.`,{nodes:[o,t]}))}}},VariableDefinition(t){n[t.variable.name.value]=!0}}}function KT(i){const n=[],t=[];return{OperationDefinition(s){return n.push(s),!1},FragmentDefinition(s){return t.push(s),!1},Document:{leave(){const s=Object.create(null);for(const o of n)for(const a of i.getRecursivelyReferencedFragments(o))s[a.name.value]=!0;for(const o of t){const a=o.name.value;s[a]!==!0&&i.reportError(new L(`Fragment "${a}" is never used.`,{nodes:o}))}}}}}function ZT(i){let n=[];return{OperationDefinition:{enter(){n=[]},leave(t){const s=Object.create(null),o=i.getRecursiveVariableUsages(t);for(const{node:a}of o)s[a.name.value]=!0;for(const a of n){const l=a.variable.name.value;s[l]!==!0&&i.reportError(new L(t.name?`Variable "$${l}" is never used in operation "${t.name.value}".`:`Variable "$${l}" is never used.`,{nodes:a}))}}},VariableDefinition(t){n.push(t)}}}function eu(i){switch(i.kind){case _.OBJECT:return{...i,fields:eA(i.fields)};case _.LIST:return{...i,values:i.values.map(eu)};case _.INT:case _.FLOAT:case _.STRING:case _.BOOLEAN:case _.NULL:case _.ENUM:case _.VARIABLE:return i}}function eA(i){return i.map(n=>({...n,value:eu(n.value)})).sort((n,t)=>za(n.name.value,t.name.value))}function bp(i){return Array.isArray(i)?i.map(([n,t])=>`subfields "${n}" conflict because `+bp(t)).join(" and "):i}function nA(i){const n=new aA,t=new Map;return{SelectionSet(s){const o=tA(i,t,n,i.getParentType(),s);for(const[[a,l],f,p]of o){const m=bp(l);i.reportError(new L(`Fields "${a}" conflict because ${m}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:f.concat(p)}))}}}}function tA(i,n,t,s,o){const a=[],[l,f]=Ps(i,n,s,o);if(rA(i,a,n,t,l),f.length!==0)for(let p=0;p<f.length;p++){Ls(i,a,n,t,!1,l,f[p]);for(let m=p+1;m<f.length;m++)Bs(i,a,n,t,!1,f[p],f[m])}return a}function Ls(i,n,t,s,o,a,l){const f=i.getFragment(l);if(!f)return;const[p,m]=Oa(i,t,f);if(a!==p){nu(i,n,t,s,o,a,p);for(const v of m)s.has(v,l,o)||(s.add(v,l,o),Ls(i,n,t,s,o,a,v))}}function Bs(i,n,t,s,o,a,l){if(a===l||s.has(a,l,o))return;s.add(a,l,o);const f=i.getFragment(a),p=i.getFragment(l);if(!f||!p)return;const[m,v]=Oa(i,t,f),[D,k]=Oa(i,t,p);nu(i,n,t,s,o,m,D);for(const w of k)Bs(i,n,t,s,o,a,w);for(const w of v)Bs(i,n,t,s,o,w,l)}function iA(i,n,t,s,o,a,l,f){const p=[],[m,v]=Ps(i,n,o,a),[D,k]=Ps(i,n,l,f);nu(i,p,n,t,s,m,D);for(const w of k)Ls(i,p,n,t,s,m,w);for(const w of v)Ls(i,p,n,t,s,D,w);for(const w of v)for(const F of k)Bs(i,p,n,t,s,w,F);return p}function rA(i,n,t,s,o){for(const[a,l]of Object.entries(o))if(l.length>1)for(let f=0;f<l.length;f++)for(let p=f+1;p<l.length;p++){const m=Sp(i,t,s,!1,a,l[f],l[p]);m&&n.push(m)}}function nu(i,n,t,s,o,a,l){for(const[f,p]of Object.entries(a)){const m=l[f];if(m)for(const v of p)for(const D of m){const k=Sp(i,t,s,o,f,v,D);k&&n.push(k)}}}function Sp(i,n,t,s,o,a,l){const[f,p,m]=a,[v,D,k]=l,w=s||f!==v&&We(f)&&We(v);if(!w){const Se=p.name.value,me=D.name.value;if(Se!==me)return[[o,`"${Se}" and "${me}" are different fields`],[p],[D]];if(!sA(p,D))return[[o,"they have differing arguments"],[p],[D]]}const F=m==null?void 0:m.type,B=k==null?void 0:k.type;if(F&&B&&Ca(F,B))return[[o,`they return conflicting types "${U(F)}" and "${U(B)}"`],[p],[D]];const Y=p.selectionSet,ce=D.selectionSet;if(Y&&ce){const Se=iA(i,n,t,w,hi(F),Y,hi(B),ce);return oA(Se,o,p,D)}}function sA(i,n){const t=i.arguments,s=n.arguments;if(t===void 0||t.length===0)return s===void 0||s.length===0;if(s===void 0||s.length===0||t.length!==s.length)return!1;const o=new Map(s.map(({name:a,value:l})=>[a.value,l]));return t.every(a=>{const l=a.value,f=o.get(a.name.value);return f===void 0?!1:gf(l)===gf(f)})}function gf(i){return Ke(eu(i))}function Ca(i,n){return Dn(i)?Dn(n)?Ca(i.ofType,n.ofType):!0:Dn(n)?!0:be(i)?be(n)?Ca(i.ofType,n.ofType):!0:be(n)?!0:Bi(i)||Bi(n)?i!==n:!1}function Ps(i,n,t,s){const o=n.get(s);if(o)return o;const a=Object.create(null),l=Object.create(null);wp(i,t,s,a,l);const f=[a,Object.keys(l)];return n.set(s,f),f}function Oa(i,n,t){const s=n.get(t.selectionSet);if(s)return s;const o=dt(i.getSchema(),t.typeCondition);return Ps(i,n,o,t.selectionSet)}function wp(i,n,t,s,o){for(const a of t.selections)switch(a.kind){case _.FIELD:{const l=a.name.value;let f;(We(n)||Ge(n))&&(f=n.getFields()[l]);const p=a.alias?a.alias.value:l;s[p]||(s[p]=[]),s[p].push([n,a,f]);break}case _.FRAGMENT_SPREAD:o[a.name.value]=!0;break;case _.INLINE_FRAGMENT:{const l=a.typeCondition,f=l?dt(i.getSchema(),l):n;wp(i,f,a.selectionSet,s,o);break}}}function oA(i,n,t,s){if(i.length>0)return[[n,i.map(([o])=>o)],[t,...i.map(([,o])=>o).flat()],[s,...i.map(([,,o])=>o).flat()]]}class aA{constructor(){this._data=new Map}has(n,t,s){var o;const[a,l]=n<t?[n,t]:[t,n],f=(o=this._data.get(a))===null||o===void 0?void 0:o.get(l);return f===void 0?!1:s?!0:s===f}add(n,t,s){const[o,a]=n<t?[n,t]:[t,n],l=this._data.get(o);l===void 0?this._data.set(o,new Map([[a,s]])):l.set(a,s)}}function uA(i){return{InlineFragment(n){const t=i.getType(),s=i.getParentType();if(_r(t)&&_r(s)&&!pf(i.getSchema(),t,s)){const o=U(s),a=U(t);i.reportError(new L(`Fragment cannot be spread here as objects of type "${o}" can never be of type "${a}".`,{nodes:n}))}},FragmentSpread(n){const t=n.name.value,s=lA(i,t),o=i.getParentType();if(s&&o&&!pf(i.getSchema(),s,o)){const a=U(o),l=U(s);i.reportError(new L(`Fragment "${t}" cannot be spread here as objects of type "${a}" can never be of type "${l}".`,{nodes:n}))}}}}function lA(i,n){const t=i.getFragment(n);if(t){const s=dt(i.getSchema(),t.typeCondition);if(_r(s))return s}}function cA(i){const n=i.getSchema(),t=Object.create(null);for(const o of i.getDocument().definitions)wr(o)&&(t[o.name.value]=o);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(o){const a=o.name.value,l=t[a],f=n==null?void 0:n.getType(a);let p;if(l?p=fA[l.kind]:f&&(p=pA(f)),p){if(p!==o.kind){const m=dA(o.kind);i.reportError(new L(`Cannot extend non-${m} type "${a}".`,{nodes:l?[l,o]:o}))}}else{const m=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),v=vi(a,m);i.reportError(new L(`Cannot extend type "${a}" because it is not defined.`+Qt(v),{nodes:o.name}))}}}const fA={[_.SCALAR_TYPE_DEFINITION]:_.SCALAR_TYPE_EXTENSION,[_.OBJECT_TYPE_DEFINITION]:_.OBJECT_TYPE_EXTENSION,[_.INTERFACE_TYPE_DEFINITION]:_.INTERFACE_TYPE_EXTENSION,[_.UNION_TYPE_DEFINITION]:_.UNION_TYPE_EXTENSION,[_.ENUM_TYPE_DEFINITION]:_.ENUM_TYPE_EXTENSION,[_.INPUT_OBJECT_TYPE_DEFINITION]:_.INPUT_OBJECT_TYPE_EXTENSION};function pA(i){if(Ht(i))return _.SCALAR_TYPE_EXTENSION;if(We(i))return _.OBJECT_TYPE_EXTENSION;if(Ge(i))return _.INTERFACE_TYPE_EXTENSION;if(Gn(i))return _.UNION_TYPE_EXTENSION;if(nt(i))return _.ENUM_TYPE_EXTENSION;if(En(i))return _.INPUT_OBJECT_TYPE_EXTENSION;et(!1,"Unexpected type: "+U(i))}function dA(i){switch(i){case _.SCALAR_TYPE_EXTENSION:return"scalar";case _.OBJECT_TYPE_EXTENSION:return"object";case _.INTERFACE_TYPE_EXTENSION:return"interface";case _.UNION_TYPE_EXTENSION:return"union";case _.ENUM_TYPE_EXTENSION:return"enum";case _.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:et(!1,"Unexpected kind: "+U(i))}}function hA(i){return{...Fp(i),Field:{leave(n){var t;const s=i.getFieldDef();if(!s)return!1;const o=new Set((t=n.arguments)===null||t===void 0?void 0:t.map(a=>a.name.value));for(const a of s.args)if(!o.has(a.name)&&lp(a)){const l=U(a.type);i.reportError(new L(`Field "${s.name}" argument "${a.name}" of type "${l}" is required, but it was not provided.`,{nodes:n}))}}}}}function Fp(i){var n;const t=Object.create(null),s=i.getSchema(),o=(n=s==null?void 0:s.getDirectives())!==null&&n!==void 0?n:Ui;for(const f of o)t[f.name]=di(f.args.filter(lp),p=>p.name);const a=i.getDocument().definitions;for(const f of a)if(f.kind===_.DIRECTIVE_DEFINITION){var l;const p=(l=f.arguments)!==null&&l!==void 0?l:[];t[f.name.value]=di(p.filter(gA),m=>m.name.value)}return{Directive:{leave(f){const p=f.name.value,m=t[p];if(m){var v;const D=(v=f.arguments)!==null&&v!==void 0?v:[],k=new Set(D.map(w=>w.name.value));for(const[w,F]of Object.entries(m))if(!k.has(w)){const B=Qa(F.type)?U(F.type):Ke(F.type);i.reportError(new L(`Directive "@${p}" argument "${w}" of type "${B}" is required, but it was not provided.`,{nodes:f}))}}}}}}function gA(i){return i.type.kind===_.NON_NULL_TYPE&&i.defaultValue==null}function mA(i){return{Field(n){const t=i.getType(),s=n.selectionSet;if(t){if(Bi(hi(t))){if(s){const o=n.name.value,a=U(t);i.reportError(new L(`Field "${o}" must not have a selection since type "${a}" has no subfields.`,{nodes:s}))}}else if(!s){const o=n.name.value,a=U(t);i.reportError(new L(`Field "${o}" of type "${a}" must have a selection of subfields. Did you mean "${o} { ... }"?`,{nodes:n}))}}}}}function Yt(i,n,t){if(i){if(i.kind===_.VARIABLE){const s=i.name.value;if(t==null||t[s]===void 0)return;const o=t[s];return o===null&&be(n)?void 0:o}if(be(n))return i.kind===_.NULL?void 0:Yt(i,n.ofType,t);if(i.kind===_.NULL)return null;if(Dn(n)){const s=n.ofType;if(i.kind===_.LIST){const a=[];for(const l of i.values)if(mf(l,t)){if(be(s))return;a.push(null)}else{const f=Yt(l,s,t);if(f===void 0)return;a.push(f)}return a}const o=Yt(i,s,t);return o===void 0?void 0:[o]}if(En(n)){if(i.kind!==_.OBJECT)return;const s=Object.create(null),o=di(i.fields,a=>a.name.value);for(const a of Object.values(n.getFields())){const l=o[a.name];if(!l||mf(l.value,t)){if(a.defaultValue!==void 0)s[a.name]=a.defaultValue;else if(be(a.type))return;continue}const f=Yt(l.value,a.type,t);if(f===void 0)return;s[a.name]=f}if(n.isOneOf){const a=Object.keys(s);if(a.length!==1||s[a[0]]===null)return}return s}if(Bi(n)){let s;try{s=n.parseLiteral(i,t)}catch{return}return s===void 0?void 0:s}et(!1,"Unexpected input type: "+U(n))}}function mf(i,n){return i.kind===_.VARIABLE&&(n==null||n[i.name.value]===void 0)}function vA(i,n,t){var s;const o={},a=(s=n.arguments)!==null&&s!==void 0?s:[],l=di(a,f=>f.name.value);for(const f of i.args){const p=f.name,m=f.type,v=l[p];if(!v){if(f.defaultValue!==void 0)o[p]=f.defaultValue;else if(be(m))throw new L(`Argument "${p}" of required type "${U(m)}" was not provided.`,{nodes:n});continue}const D=v.value;let k=D.kind===_.NULL;if(D.kind===_.VARIABLE){const F=D.name.value;if(t==null||!EA(t,F)){if(f.defaultValue!==void 0)o[p]=f.defaultValue;else if(be(m))throw new L(`Argument "${p}" of required type "${U(m)}" was provided the variable "$${F}" which was not provided a runtime value.`,{nodes:D});continue}k=t[F]==null}if(k&&be(m))throw new L(`Argument "${p}" of non-null type "${U(m)}" must not be null.`,{nodes:D});const w=Yt(D,m,t);if(w===void 0)throw new L(`Argument "${p}" has invalid value ${Ke(D)}.`,{nodes:D});o[p]=w}return o}function Tr(i,n,t){var s;const o=(s=n.directives)===null||s===void 0?void 0:s.find(a=>a.name.value===i.name);if(o)return vA(i,o,t)}function EA(i,n){return Object.prototype.hasOwnProperty.call(i,n)}function DA(i,n,t,s,o){const a=new Map;return ka(i,n,t,s,o,a,new Set),a}function ka(i,n,t,s,o,a,l){for(const f of o.selections)switch(f.kind){case _.FIELD:{if(!Ta(t,f))continue;const p=yA(f),m=a.get(p);m!==void 0?m.push(f):a.set(p,[f]);break}case _.INLINE_FRAGMENT:{if(!Ta(t,f)||!vf(i,f,s))continue;ka(i,n,t,s,f.selectionSet,a,l);break}case _.FRAGMENT_SPREAD:{const p=f.name.value;if(l.has(p)||!Ta(t,f))continue;l.add(p);const m=n[p];if(!m||!vf(i,m,s))continue;ka(i,n,t,s,m.selectionSet,a,l);break}}}function Ta(i,n){const t=Tr(pp,n,i);if((t==null?void 0:t.if)===!0)return!1;const s=Tr(fp,n,i);return(s==null?void 0:s.if)!==!1}function vf(i,n,t){const s=n.typeCondition;if(!s)return!0;const o=dt(i,s);return o===t?!0:ci(o)?i.isSubType(o,t):!1}function yA(i){return i.alias?i.alias.value:i.name.value}function _A(i){return{OperationDefinition(n){if(n.operation==="subscription"){const t=i.getSchema(),s=t.getSubscriptionType();if(s){const o=n.name?n.name.value:null,a=Object.create(null),l=i.getDocument(),f=Object.create(null);for(const m of l.definitions)m.kind===_.FRAGMENT_DEFINITION&&(f[m.name.value]=m);const p=DA(t,f,a,s,n.selectionSet);if(p.size>1){const D=[...p.values()].slice(1).flat();i.reportError(new L(o!=null?`Subscription "${o}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:D}))}for(const m of p.values())m[0].name.value.startsWith("__")&&i.reportError(new L(o!=null?`Subscription "${o}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:m}))}}}}}function tu(i,n){const t=new Map;for(const s of i){const o=n(s),a=t.get(o);a===void 0?t.set(o,[s]):a.push(s)}return t}function TA(i){return{DirectiveDefinition(s){var o;const a=(o=s.arguments)!==null&&o!==void 0?o:[];return t(`@${s.name.value}`,a)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(s){var o;const a=s.name.value,l=(o=s.fields)!==null&&o!==void 0?o:[];for(const p of l){var f;const m=p.name.value,v=(f=p.arguments)!==null&&f!==void 0?f:[];t(`${a}.${m}`,v)}return!1}function t(s,o){const a=tu(o,l=>l.name.value);for(const[l,f]of a)f.length>1&&i.reportError(new L(`Argument "${s}(${l}:)" can only be defined once.`,{nodes:f.map(p=>p.name)}));return!1}}function Np(i){return{Field:n,Directive:n};function n(t){var s;const o=(s=t.arguments)!==null&&s!==void 0?s:[],a=tu(o,l=>l.name.value);for(const[l,f]of a)f.length>1&&i.reportError(new L(`There can be only one argument named "${l}".`,{nodes:f.map(p=>p.name)}))}}function AA(i){const n=Object.create(null),t=i.getSchema();return{DirectiveDefinition(s){const o=s.name.value;if(t!=null&&t.getDirective(o)){i.reportError(new L(`Directive "@${o}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return n[o]?i.reportError(new L(`There can be only one directive named "@${o}".`,{nodes:[n[o],s.name]})):n[o]=s.name,!1}}}function Cp(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Ui;for(const f of s)n[f.name]=!f.isRepeatable;const o=i.getDocument().definitions;for(const f of o)f.kind===_.DIRECTIVE_DEFINITION&&(n[f.name.value]=!f.repeatable);const a=Object.create(null),l=Object.create(null);return{enter(f){if(!("directives"in f)||!f.directives)return;let p;if(f.kind===_.SCHEMA_DEFINITION||f.kind===_.SCHEMA_EXTENSION)p=a;else if(wr(f)||Za(f)){const m=f.name.value;p=l[m],p===void 0&&(l[m]=p=Object.create(null))}else p=Object.create(null);for(const m of f.directives){const v=m.name.value;n[v]&&(p[v]?i.reportError(new L(`The directive "@${v}" can only be used once at this location.`,{nodes:[p[v],m]})):p[v]=m)}}}}function IA(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:o,EnumTypeExtension:o};function o(a){var l;const f=a.name.value;s[f]||(s[f]=Object.create(null));const p=(l=a.values)!==null&&l!==void 0?l:[],m=s[f];for(const v of p){const D=v.name.value,k=t[f];nt(k)&&k.getValue(D)?i.reportError(new L(`Enum value "${f}.${D}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:v.name})):m[D]?i.reportError(new L(`Enum value "${f}.${D}" can only be defined once.`,{nodes:[m[D],v.name]})):m[D]=v.name}return!1}}function bA(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:o,InputObjectTypeExtension:o,InterfaceTypeDefinition:o,InterfaceTypeExtension:o,ObjectTypeDefinition:o,ObjectTypeExtension:o};function o(a){var l;const f=a.name.value;s[f]||(s[f]=Object.create(null));const p=(l=a.fields)!==null&&l!==void 0?l:[],m=s[f];for(const v of p){const D=v.name.value;SA(t[f],D)?i.reportError(new L(`Field "${f}.${D}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:v.name})):m[D]?i.reportError(new L(`Field "${f}.${D}" can only be defined once.`,{nodes:[m[D],v.name]})):m[D]=v.name}return!1}}function SA(i,n){return We(i)||Ge(i)||En(i)?i.getFields()[n]!=null:!1}function wA(i){const n=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const s=t.name.value;return n[s]?i.reportError(new L(`There can be only one fragment named "${s}".`,{nodes:[n[s],t.name]})):n[s]=t.name,!1}}}function Op(i){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const s=n.pop();s||et(!1),t=s}},ObjectField(s){const o=s.name.value;t[o]?i.reportError(new L(`There can be only one input field named "${o}".`,{nodes:[t[o],s.name]})):t[o]=s.name}}}function FA(i){const n=Object.create(null);return{OperationDefinition(t){const s=t.name;return s&&(n[s.value]?i.reportError(new L(`There can be only one operation named "${s.value}".`,{nodes:[n[s.value],s]})):n[s.value]=s),!1},FragmentDefinition:()=>!1}}function NA(i){const n=i.getSchema(),t=Object.create(null),s=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:o,SchemaExtension:o};function o(a){var l;const f=(l=a.operationTypes)!==null&&l!==void 0?l:[];for(const p of f){const m=p.operation,v=t[m];s[m]?i.reportError(new L(`Type for ${m} already defined in the schema. It cannot be redefined.`,{nodes:p})):v?i.reportError(new L(`There can be only one ${m} type in schema.`,{nodes:[v,p]})):t[m]=p}return!1}}function CA(i){const n=Object.create(null),t=i.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(o){const a=o.name.value;if(t!=null&&t.getType(a)){i.reportError(new L(`Type "${a}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:o.name}));return}return n[a]?i.reportError(new L(`There can be only one type named "${a}".`,{nodes:[n[a],o.name]})):n[a]=o.name,!1}}function OA(i){return{OperationDefinition(n){var t;const s=(t=n.variableDefinitions)!==null&&t!==void 0?t:[],o=tu(s,a=>a.variable.name.value);for(const[a,l]of o)l.length>1&&i.reportError(new L(`There can be only one variable named "$${a}".`,{nodes:l.map(f=>f.variable.name)}))}}}function kA(i){let n={};return{OperationDefinition:{enter(){n={}}},VariableDefinition(t){n[t.variable.name.value]=t},ListValue(t){const s=TT(i.getParentInputType());if(!Dn(s))return ui(i,t),!1},ObjectValue(t){const s=hi(i.getInputType());if(!En(s))return ui(i,t),!1;const o=di(t.fields,a=>a.name.value);for(const a of Object.values(s.getFields()))if(!o[a.name]&&bT(a)){const f=U(a.type);i.reportError(new L(`Field "${s.name}.${a.name}" of required type "${f}" was not provided.`,{nodes:t}))}s.isOneOf&&xA(i,t,s,o,n)},ObjectField(t){const s=hi(i.getParentInputType());if(!i.getInputType()&&En(s)){const a=vi(t.name.value,Object.keys(s.getFields()));i.reportError(new L(`Field "${t.name.value}" is not defined by type "${s.name}".`+Qt(a),{nodes:t}))}},NullValue(t){const s=i.getInputType();be(s)&&i.reportError(new L(`Expected value of type "${U(s)}", found ${Ke(t)}.`,{nodes:t}))},EnumValue:t=>ui(i,t),IntValue:t=>ui(i,t),FloatValue:t=>ui(i,t),StringValue:t=>ui(i,t),BooleanValue:t=>ui(i,t)}}function ui(i,n){const t=i.getInputType();if(!t)return;const s=hi(t);if(!Bi(s)){const o=U(t);i.reportError(new L(`Expected value of type "${o}", found ${Ke(n)}.`,{nodes:n}));return}try{if(s.parseLiteral(n,void 0)===void 0){const a=U(t);i.reportError(new L(`Expected value of type "${a}", found ${Ke(n)}.`,{nodes:n}))}}catch(o){const a=U(t);o instanceof L?i.reportError(o):i.reportError(new L(`Expected value of type "${a}", found ${Ke(n)}; `+o.message,{nodes:n,originalError:o}))}}function xA(i,n,t,s,o){var a;const l=Object.keys(s);if(l.length!==1){i.reportError(new L(`OneOf Input Object "${t.name}" must specify exactly one key.`,{nodes:[n]}));return}const p=(a=s[l[0]])===null||a===void 0?void 0:a.value,m=!p||p.kind===_.NULL,v=(p==null?void 0:p.kind)===_.VARIABLE;if(m){i.reportError(new L(`Field "${t.name}.${l[0]}" must be non-null.`,{nodes:[n]}));return}if(v){const D=p.name.value;o[D].type.kind!==_.NON_NULL_TYPE&&i.reportError(new L(`Variable "${D}" must be non-nullable to be used for OneOf Input Object "${t.name}".`,{nodes:[n]}))}}function RA(i){return{VariableDefinition(n){const t=dt(i.getSchema(),n.type);if(t!==void 0&&!Ha(t)){const s=n.variable.name.value,o=Ke(n.type);i.reportError(new L(`Variable "$${s}" cannot be non-input type "${o}".`,{nodes:n.type}))}}}}function LA(i){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const s=i.getRecursiveVariableUsages(t);for(const{node:o,type:a,defaultValue:l}of s){const f=o.name.value,p=n[f];if(p&&a){const m=i.getSchema(),v=dt(m,p.type);if(v&&!BA(m,v,p.defaultValue,a,l)){const D=U(v),k=U(a);i.reportError(new L(`Variable "$${f}" of type "${D}" used in position expecting type "${k}".`,{nodes:[p,o]}))}}}}},VariableDefinition(t){n[t.variable.name.value]=t}}}function BA(i,n,t,s,o){if(be(s)&&!be(n)){if(!(t!=null&&t.kind!==_.NULL)&&!(o!==void 0))return!1;const f=s.ofType;return mr(i,n,f)}return mr(i,n,s)}const PA=Object.freeze([QT]);Object.freeze([BT,FA,WT,_A,Ip,MT,RA,mA,PT,wA,qT,KT,uA,HT,OA,XT,ZT,Ap,Cp,VT,Np,kA,hA,LA,nA,Op,...PA]);const $A=Object.freeze([JT,NA,CA,IA,bA,TA,AA,Ip,Ap,Cp,cA,Tp,Np,Op,Fp]);class UA{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const s of this.getDocument().definitions)s.kind===_.FRAGMENT_DEFINITION&&(t[s.name.value]=s);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const s=[n];let o;for(;o=s.pop();)for(const a of o.selections)a.kind===_.FRAGMENT_SPREAD?t.push(a):a.selectionSet&&s.push(a.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const s=Object.create(null),o=[n.selectionSet];let a;for(;a=o.pop();)for(const l of this.getFragmentSpreads(a)){const f=l.name.value;if(s[f]!==!0){s[f]=!0;const p=this.getFragment(f);p&&(t.push(p),o.push(p.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class MA extends UA{constructor(n,t,s){super(n,s),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function VA(i,n,t=$A){const s=[],o=new MA(i,n,l=>{s.push(l)}),a=t.map(l=>l(o));return Kf(i,gT(a)),s}function GA(i){const n=VA(i);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function jA(i,n){Ot(i)&&Ot(i.__schema)||fe(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${U(i)}.`);const t=i.__schema,s=li(t.types,x=>x.name,x=>k(x));for(const x of[...Ys,...Js])s[x.name]&&(s[x.name]=x);const o=t.queryType?v(t.queryType):null,a=t.mutationType?v(t.mutationType):null,l=t.subscriptionType?v(t.subscriptionType):null,f=t.directives?t.directives.map(gt):[];return new _p({description:t.description,query:o,mutation:a,subscription:l,types:Object.values(s),directives:f,assumeValid:void 0});function p(x){if(x.kind===Ae.LIST){const X=x.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");return new fn(p(X))}if(x.kind===Ae.NON_NULL){const X=x.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");const an=p(X);return new re(_T(an))}return m(x)}function m(x){const X=x.name;if(!X)throw new Error(`Unknown type reference: ${U(x)}.`);const an=s[X];if(!an)throw new Error(`Invalid or incomplete schema, unknown type: ${X}. Ensure that a full introspection query is used in order to build a client schema.`);return an}function v(x){return DT(m(x))}function D(x){return yT(m(x))}function k(x){if(x!=null&&x.name!=null&&x.kind!=null)switch(x.kind){case Ae.SCALAR:return w(x);case Ae.OBJECT:return B(x);case Ae.INTERFACE:return Y(x);case Ae.UNION:return ce(x);case Ae.ENUM:return Se(x);case Ae.INPUT_OBJECT:return me(x)}const X=U(x);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${X}.`)}function w(x){return new kt({name:x.name,description:x.description,specifiedByURL:x.specifiedByURL})}function F(x){if(x.interfaces===null&&x.kind===Ae.INTERFACE)return[];if(!x.interfaces){const X=U(x);throw new Error(`Introspection result missing interfaces: ${X}.`)}return x.interfaces.map(D)}function B(x){return new pt({name:x.name,description:x.description,interfaces:()=>F(x),fields:()=>Ce(x)})}function Y(x){return new ks({name:x.name,description:x.description,interfaces:()=>F(x),fields:()=>Ce(x)})}function ce(x){if(!x.possibleTypes){const X=U(x);throw new Error(`Introspection result missing possibleTypes: ${X}.`)}return new xs({name:x.name,description:x.description,types:()=>x.possibleTypes.map(v)})}function Se(x){if(!x.enumValues){const X=U(x);throw new Error(`Introspection result missing enumValues: ${X}.`)}return new Pi({name:x.name,description:x.description,values:li(x.enumValues,X=>X.name,X=>({description:X.description,deprecationReason:X.deprecationReason}))})}function me(x){if(!x.inputFields){const X=U(x);throw new Error(`Introspection result missing inputFields: ${X}.`)}return new Rs({name:x.name,description:x.description,fields:()=>Je(x.inputFields),isOneOf:x.isOneOf})}function Ce(x){if(!x.fields)throw new Error(`Introspection result missing fields: ${U(x)}.`);return li(x.fields,X=>X.name,je)}function je(x){const X=p(x.type);if(!ep(X)){const an=U(X);throw new Error(`Introspection must provide output type for fields, but received: ${an}.`)}if(!x.args){const an=U(x);throw new Error(`Introspection result missing field args: ${an}.`)}return{description:x.description,deprecationReason:x.deprecationReason,type:X,args:Je(x.args)}}function Je(x){return li(x,X=>X.name,Re)}function Re(x){const X=p(x.type);if(!Ha(X)){const Rt=U(X);throw new Error(`Introspection must provide input type for arguments, but received: ${Rt}.`)}const an=x.defaultValue!=null?Yt(aT(x.defaultValue),X):void 0;return{description:x.description,type:X,defaultValue:an,deprecationReason:x.deprecationReason}}function gt(x){if(!x.args){const X=U(x);throw new Error(`Introspection result missing directive args: ${X}.`)}if(!x.locations){const X=U(x);throw new Error(`Introspection result missing directive locations: ${X}.`)}return new xt({name:x.name,description:x.description,isRepeatable:x.isRepeatable,locations:x.locations.slice(),args:Je(x.args)})}}function qA(i,n,t){var s,o,a,l;const f=[],p=Object.create(null),m=[];let v;const D=[];for(const b of n.definitions)if(b.kind===_.SCHEMA_DEFINITION)v=b;else if(b.kind===_.SCHEMA_EXTENSION)D.push(b);else if(wr(b))f.push(b);else if(Za(b)){const G=b.name.value,$=p[G];p[G]=$?$.concat([b]):[b]}else b.kind===_.DIRECTIVE_DEFINITION&&m.push(b);if(Object.keys(p).length===0&&f.length===0&&m.length===0&&D.length===0&&v==null)return i;const k=Object.create(null);for(const b of i.types)k[b.name]=Se(b);for(const b of f){var w;const G=b.name.value;k[G]=(w=Ef[G])!==null&&w!==void 0?w:Cn(b)}const F={query:i.query&&Y(i.query),mutation:i.mutation&&Y(i.mutation),subscription:i.subscription&&Y(i.subscription),...v&&an([v]),...an(D)};return{description:(s=v)===null||s===void 0||(o=s.description)===null||o===void 0?void 0:o.value,...F,types:Object.values(k),directives:[...i.directives.map(ce),...m.map(Fr)],extensions:Object.create(null),astNode:(a=v)!==null&&a!==void 0?a:i.astNode,extensionASTNodes:i.extensionASTNodes.concat(D),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function B(b){return Dn(b)?new fn(B(b.ofType)):be(b)?new re(B(b.ofType)):Y(b)}function Y(b){return k[b.name]}function ce(b){const G=b.toConfig();return new xt({...G,args:St(G.args,X)})}function Se(b){if(kT(b)||FT(b))return b;if(Ht(b))return je(b);if(We(b))return Je(b);if(Ge(b))return Re(b);if(Gn(b))return gt(b);if(nt(b))return Ce(b);if(En(b))return me(b);et(!1,"Unexpected type: "+U(b))}function me(b){var G;const $=b.toConfig(),M=(G=p[$.name])!==null&&G!==void 0?G:[];return new Rs({...$,fields:()=>({...St($.fields,de=>({...de,type:B(de.type)})),...at(M)}),extensionASTNodes:$.extensionASTNodes.concat(M)})}function Ce(b){var G;const $=b.toConfig(),M=(G=p[b.name])!==null&&G!==void 0?G:[];return new Pi({...$,values:{...$.values,...qn(M)},extensionASTNodes:$.extensionASTNodes.concat(M)})}function je(b){var G;const $=b.toConfig(),M=(G=p[$.name])!==null&&G!==void 0?G:[];let de=$.specifiedByURL;for(const he of M){var $e;de=($e=Df(he))!==null&&$e!==void 0?$e:de}return new kt({...$,specifiedByURL:de,extensionASTNodes:$.extensionASTNodes.concat(M)})}function Je(b){var G;const $=b.toConfig(),M=(G=p[$.name])!==null&&G!==void 0?G:[];return new pt({...$,interfaces:()=>[...b.getInterfaces().map(Y),...Di(M)],fields:()=>({...St($.fields,x),...Ei(M)}),extensionASTNodes:$.extensionASTNodes.concat(M)})}function Re(b){var G;const $=b.toConfig(),M=(G=p[$.name])!==null&&G!==void 0?G:[];return new ks({...$,interfaces:()=>[...b.getInterfaces().map(Y),...Di(M)],fields:()=>({...St($.fields,x),...Ei(M)}),extensionASTNodes:$.extensionASTNodes.concat(M)})}function gt(b){var G;const $=b.toConfig(),M=(G=p[$.name])!==null&&G!==void 0?G:[];return new xs({...$,types:()=>[...b.getTypes().map(Y),...Kt(M)],extensionASTNodes:$.extensionASTNodes.concat(M)})}function x(b){return{...b,type:B(b.type),args:b.args&&St(b.args,X)}}function X(b){return{...b,type:B(b.type)}}function an(b){const G={};for(const M of b){var $;const de=($=M.operationTypes)!==null&&$!==void 0?$:[];for(const $e of de)G[$e.operation]=Rt($e.type)}return G}function Rt(b){var G;const $=b.name.value,M=(G=Ef[$])!==null&&G!==void 0?G:k[$];if(M===void 0)throw new Error(`Unknown type: "${$}".`);return M}function Xt(b){return b.kind===_.LIST_TYPE?new fn(Xt(b.type)):b.kind===_.NON_NULL_TYPE?new re(Xt(b.type)):Rt(b)}function Fr(b){var G;return new xt({name:b.name.value,description:(G=b.description)===null||G===void 0?void 0:G.value,locations:b.locations.map(({value:$})=>$),isRepeatable:b.repeatable,args:Nr(b.arguments),astNode:b})}function Ei(b){const G=Object.create(null);for(const de of b){var $;const $e=($=de.fields)!==null&&$!==void 0?$:[];for(const he of $e){var M;G[he.name.value]={type:Xt(he.type),description:(M=he.description)===null||M===void 0?void 0:M.value,args:Nr(he.arguments),deprecationReason:bs(he),astNode:he}}}return G}function Nr(b){const G=b??[],$=Object.create(null);for(const de of G){var M;const $e=Xt(de.type);$[de.name.value]={type:$e,description:(M=de.description)===null||M===void 0?void 0:M.value,defaultValue:Yt(de.defaultValue,$e),deprecationReason:bs(de),astNode:de}}return $}function at(b){const G=Object.create(null);for(const de of b){var $;const $e=($=de.fields)!==null&&$!==void 0?$:[];for(const he of $e){var M;const On=Xt(he.type);G[he.name.value]={type:On,description:(M=he.description)===null||M===void 0?void 0:M.value,defaultValue:Yt(he.defaultValue,On),deprecationReason:bs(he),astNode:he}}}return G}function qn(b){const G=Object.create(null);for(const de of b){var $;const $e=($=de.values)!==null&&$!==void 0?$:[];for(const he of $e){var M;G[he.name.value]={description:(M=he.description)===null||M===void 0?void 0:M.value,deprecationReason:bs(he),astNode:he}}}return G}function Di(b){return b.flatMap(G=>{var $,M;return($=(M=G.interfaces)===null||M===void 0?void 0:M.map(Rt))!==null&&$!==void 0?$:[]})}function Kt(b){return b.flatMap(G=>{var $,M;return($=(M=G.types)===null||M===void 0?void 0:M.map(Rt))!==null&&$!==void 0?$:[]})}function Cn(b){var G;const $=b.name.value,M=(G=p[$])!==null&&G!==void 0?G:[];switch(b.kind){case _.OBJECT_TYPE_DEFINITION:{var de;const tn=[b,...M];return new pt({name:$,description:(de=b.description)===null||de===void 0?void 0:de.value,interfaces:()=>Di(tn),fields:()=>Ei(tn),astNode:b,extensionASTNodes:M})}case _.INTERFACE_TYPE_DEFINITION:{var $e;const tn=[b,...M];return new ks({name:$,description:($e=b.description)===null||$e===void 0?void 0:$e.value,interfaces:()=>Di(tn),fields:()=>Ei(tn),astNode:b,extensionASTNodes:M})}case _.ENUM_TYPE_DEFINITION:{var he;const tn=[b,...M];return new Pi({name:$,description:(he=b.description)===null||he===void 0?void 0:he.value,values:qn(tn),astNode:b,extensionASTNodes:M})}case _.UNION_TYPE_DEFINITION:{var On;const tn=[b,...M];return new xs({name:$,description:(On=b.description)===null||On===void 0?void 0:On.value,types:()=>Kt(tn),astNode:b,extensionASTNodes:M})}case _.SCALAR_TYPE_DEFINITION:{var Mi;return new kt({name:$,description:(Mi=b.description)===null||Mi===void 0?void 0:Mi.value,specifiedByURL:Df(b),astNode:b,extensionASTNodes:M})}case _.INPUT_OBJECT_TYPE_DEFINITION:{var Lt;const tn=[b,...M];return new Rs({name:$,description:(Lt=b.description)===null||Lt===void 0?void 0:Lt.value,fields:()=>at(tn),astNode:b,extensionASTNodes:M,isOneOf:YA(b)})}}}}const Ef=di([...Ys,...Js],i=>i.name);function bs(i){const n=Tr(dp,i);return n==null?void 0:n.reason}function Df(i){const n=Tr(hp,i);return n==null?void 0:n.url}function YA(i){return!!Tr(gp,i)}function WA(i,n){i!=null&&i.kind===_.DOCUMENT||fe(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&GA(i);const s=qA({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},i,n);if(s.astNode==null)for(const a of s.types)switch(a.name){case"Query":s.query=a;break;case"Mutation":s.mutation=a;break;case"Subscription":s.subscription=a;break}const o=[...s.directives,...Ui.filter(a=>s.directives.every(l=>l.name!==a.name))];return new _p({...s,directives:o})}function JA(i,n){const t=oT(i,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return WA(t,{assumeValidSDL:void 0,assumeValid:void 0})}function zA(i){const n=new Map;return QA(i,t=>{We(t)&&HA(t,s=>{const o=xa(s.type);Aa(n,o).references.push({kind:gr.FIELD,parent:t,by:s}),XA(s,l=>{const f=xa(l.type);Aa(n,f).references.push({kind:gr.ARGUMENT,field:s,type:t,by:l})})}),Gn(t)&&t.getTypes().forEach(s=>{Aa(n,s).references.push({kind:gr.UNION,by:t})})}),new k_(n)}function QA(i,n){Object.entries(i.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function HA(i,n){Object.entries(i.getFields()).forEach(([,t])=>{n(t)})}function XA(i,n){Object.entries(i.args).forEach(([,t])=>{n(t)})}function Aa(i,n){let t=i.get(n.name);return t||(t={references:[]},i.set(n.name,t)),t}function xa(i){return be(i)||Dn(i)?xa(i.ofType):i}const yf=`schema {
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

  """Deprecated format: Other fields added to action"""
  fields: [CustomFieldInput!]

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

  """Campaign human readable title"""
  title: String
}

type CampaignMtt {
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
  ): [Action]!

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
}`,pn=cI(),Ra=Vs(Ms.DIRECTIVES,[]);var Tf;const KA=zs((Tf=pn.getQueryType())==null?void 0:Tf.getFields());var Af;const ZA=zs((Af=pn.getMutationType())==null?void 0:Af.getFields());var If;const eI=zs((If=pn.getSubscriptionType())==null?void 0:If.getFields()),iu=Ct.keyBy(xp(),i=>i.name.toLocaleLowerCase()),nI=Ct.mapValues(iu,i=>{const n=Ra.find(t=>(t==null?void 0:t.name)===i.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?i.args:n.args.map(t=>i.args.find(s=>s.name===t)).filter(t=>!!t):[]}),tI=zs(pn.getTypeMap()),iI=zA(pn);function zs(i){return Ct.mapKeys(i||{},(n,t)=>t.toLocaleLowerCase())}function rI(){return Ct.size(pn.getTypeMap())<=10}function sI(){return[Ia("Queries",pn.getQueryType()),Ia("Mutations",pn.getMutationType()),Ia("Subscriptions",pn.getSubscriptionType()),fI(),uI()].filter(i=>!!i)}function Ia(i,n){return aI(i,oI(n))}function oI(i){return Ct.sortBy((i==null?void 0:i.getFields())||{},n=>n.name)}function aI(i,n){return n.length===0?null:{type:"menu",title:i,children:n.map(t=>({type:"page",title:t.name,section:i,deprecated:!!t.deprecationReason,href:br.joinUrlPaths(Gs(),i.toLocaleLowerCase(),t.name)}))}}function uI(){return rI()?null:{type:"menu",title:"Types",children:Ct.sortBy(Ct.map(pn.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:br.joinUrlPaths(Gs(),"types",n.name)}))}}function SI(){return!!pn.getQueryType()}function wI(i){return KA[i.toLocaleLowerCase()]}function FI(){return!!pn.getMutationType()}function NI(i){return ZA[i.toLocaleLowerCase()]}function CI(){return!!pn.getSubscriptionType()}function OI(i){return eI[i.toLocaleLowerCase()]}function kI(i){return tI[i.toLocaleLowerCase()]}function lI(i){return iu[i.toLocaleLowerCase()]}function xI(i){return lI(i.name)!==void 0}function RI(){return Ct.size(iu)>0}function LI(i){return nI[i.name.toLocaleLowerCase()]||[]}function BI(i){if(i)return iI.getFor(i)}function PI(i){return Ct.flatMap(i.getFields(),n=>({field:n,possibleDescriptions:kp(n,i)}))}function kp(i,n){return i?i.description?[{description:i.description,from:n}]:We(n)?n.getInterfaces().flatMap(t=>kp(t.getFields()[i.name],t)):[]:[]}function xp(){return Ra.some(i=>(i==null?void 0:i.name)==="*")?pn.getDirectives().filter(i=>!["include","skip","deprecated","specifiedBy"].includes(i.name)):Ra.filter(i=>!!(i!=null&&i.name)).map(({name:i})=>i?pn.getDirective(i):void 0).filter(i=>!!i)}function cI(){return yf.trim().length===0?jA(JSON.parse(JSON.stringify({__schema:{types:[]}}))):JA(yf)}function fI(){const i=xp();return i.length===0?null:{type:"menu",title:"Directives",children:i.map(n=>({type:"page",title:n.name,href:br.joinUrlPaths(Gs(),"directives",n.name),section:"Directives"}))}}const $I=Vs(Ms.APP_TITLE,"GraphQL Documentation"),Rp=dI().concat(sI());gI(Rp);const pI=Object.freeze(Rp),UI=hI();function dI(){return Vs(Ms.PAGES,vI()).filter(n=>!!n).map(n=>Bp([],n))}function hI(){const i=mI();if(i)return i.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function gI(i){function n(s,o){for(const a of s){if(a.type==="page"){o(a);continue}a.type==="menu"&&n(a.children,o)}}let t;n(i,s=>{t&&(t.next={title:s.title,section:s.section,href:s.href},s.previous={title:t.title,section:t.section,href:t.href}),t=s})}function mI(){return Lp(()=>!0)}function MI(i){return Lp(n=>n.href.toLocaleLowerCase()===i.toLocaleLowerCase())}function Lp(i){function n(t){for(const s of t){if(s.type==="page"&&i(s))return s;if(s.type==="menu"){const o=n(s.children);if(o)return o}}return null}return n(pI)}function Bp(i,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:br.joinUrlPaths(Gs(),...i,_f(n.title))};const t=i.concat([_f(n.title)]);return{type:"menu",title:n.title,children:n.content.map(s=>({...Bp(t,s),section:n.title}))}}function _f(i){return br.generatePathSegment(i,new Nf)}function vI(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(i=>i.trim()).join(`
`)}]}]}export{A_ as A,rI as B,kI as C,BI as D,Ht as E,nt as F,Ge as G,Gn as H,We as I,En as J,_ as K,PI as L,hi as M,Bi as N,II as O,$s as P,wf as Q,gr as R,AI as S,Nf as T,De as U,Fn as V,$I as W,Ct as _,FI as a,SI as b,wI as c,CI as d,OI as e,MI as f,NI as g,UI as h,Sf as i,TI as j,RI as k,lI as l,LI as m,Gs as n,xI as o,pI as p,ft as q,np as r,pn as s,Dn as t,br as u,be as v,bI as w,Vs as x,Ms as y,lr as z};
