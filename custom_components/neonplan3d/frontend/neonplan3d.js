Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let n=Math.trunc(e)||0;return this[n<0?this.length+n:n]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=r=>r===void 0?r:JSON.parse(JSON.stringify(r)));var Rr=new URL(import.meta.url),zr=Rr.searchParams.get("v"),Er=r=>new URL(`./fonts/${r}${zr?`?v=${zr}`:""}`,Rr).href,Ar="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Tr(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let r=document.createElement("style");r.id="fp3d-fonts",r.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Er("figtree.woff2")}) format("woff2");unicode-range:${Ar}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Er("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Ar}}`,document.head.append(r)}var Bt=globalThis,Nt=Bt.ShadowRoot&&(Bt.ShadyCSS===void 0||Bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vn=Symbol(),Fr=new WeakMap,ft=class{constructor(e,n,t){if(this._$cssResult$=!0,t!==vn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(Nt&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=Fr.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&Fr.set(n,e))}return e}toString(){return this.cssText}},Pr=r=>new ft(typeof r=="string"?r:r+"",void 0,vn),he=(r,...e)=>{let n=r.length===1?r[0]:e.reduce((t,o,i)=>t+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1],r[0]);return new ft(n,r,vn)},Ir=(r,e)=>{if(Nt)r.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let t=document.createElement("style"),o=Bt.litNonce;o!==void 0&&t.setAttribute("nonce",o),t.textContent=n.cssText,r.appendChild(t)}},yn=Nt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let n="";for(let t of e.cssRules)n+=t.cssText;return Pr(n)})(r):r;var{is:Ji,defineProperty:es,getOwnPropertyDescriptor:ts,getOwnPropertyNames:ns,getOwnPropertySymbols:rs,getPrototypeOf:os}=Object,Vt=globalThis,Dr=Vt.trustedTypes,is=Dr?Dr.emptyScript:"",ss=Vt.reactiveElementPolyfillSupport,mt=(r,e)=>r,kn={toAttribute(r,e){switch(e){case Boolean:r=r?is:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let n=r;switch(e){case Boolean:n=r!==null;break;case Number:n=r===null?null:Number(r);break;case Object:case Array:try{n=JSON.parse(r)}catch{n=null}}return n}},Cr=(r,e)=>!Ji(r,e),Hr={attribute:!0,type:String,converter:kn,reflect:!1,useDefault:!1,hasChanged:Cr};Symbol.metadata??=Symbol("metadata"),Vt.litPropertyMetadata??=new WeakMap;var ye=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Hr){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let t=Symbol(),o=this.getPropertyDescriptor(e,t,n);o!==void 0&&es(this.prototype,e,o)}}static getPropertyDescriptor(e,n,t){let{get:o,set:i}=ts(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Hr}static _$Ei(){if(this.hasOwnProperty(mt("elementProperties")))return;let e=os(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(mt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mt("properties"))){let n=this.properties,t=[...ns(n),...rs(n)];for(let o of t)this.createProperty(o,n[o])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[t,o]of n)this.elementProperties.set(t,o)}this._$Eh=new Map;for(let[n,t]of this.elementProperties){let o=this._$Eu(n,t);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let t=new Set(e.flat(1/0).reverse());for(let o of t)n.unshift(yn(o))}else e!==void 0&&n.push(yn(e));return n}static _$Eu(e,n){let t=n.attribute;return t===!1?void 0:typeof t=="string"?t:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let t of n.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ir(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,t){this._$AK(e,t)}_$ET(e,n){let t=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,t);if(o!==void 0&&t.reflect===!0){let i=(t.converter?.toAttribute!==void 0?t.converter:kn).toAttribute(n,t.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,n){let t=this.constructor,o=t._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=t.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:kn;this._$Em=o;let a=s.fromAttribute(n,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,n,t,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),t??=s.getPropertyOptions(e),!((t.hasChanged??Cr)(i,n)||t.useDefault&&t.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,t))))return;this.C(e,n,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:t,reflect:o,wrapped:i},s){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??n??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||t||(n=void 0),this._$AL.set(e,n)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[o,i]of t){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(n)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};ye.elementStyles=[],ye.shadowRootOptions={mode:"open"},ye[mt("elementProperties")]=new Map,ye[mt("finalized")]=new Map,ss?.({ReactiveElement:ye}),(Vt.reactiveElementVersions??=[]).push("2.1.2");var An=globalThis,Wr=r=>r,Kt=An.trustedTypes,Lr=Kt?Kt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Gr="$lit$",Me=`lit$${Math.random().toFixed(9).slice(2)}$`,Ur="?"+Me,as=`<${Ur}>`,Oe=document,gt=()=>Oe.createComment(""),bt=r=>r===null||typeof r!="object"&&typeof r!="function",Rn=Array.isArray,ls=r=>Rn(r)||typeof r?.[Symbol.iterator]=="function",xn=`[ 	
\f\r]`,_t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Or=/-->/g,Br=/>/g,We=RegExp(`>|${xn}(?:([^\\s"'>=/]+)(${xn}*=${xn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nr=/'/g,Vr=/"/g,qr=/^(?:script|style|textarea|title)$/i,Tn=r=>(e,...n)=>({_$litType$:r,strings:e,values:n}),m=Tn(1),yt=Tn(2),Ya=Tn(3),Be=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Kr=new WeakMap,Le=Oe.createTreeWalker(Oe,129);function jr(r,e){if(!Rn(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Lr!==void 0?Lr.createHTML(e):e}var cs=(r,e)=>{let n=r.length-1,t=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=_t;for(let a=0;a<n;a++){let l=r[a],c,d,h=-1,u=0;for(;u<l.length&&(s.lastIndex=u,d=s.exec(l),d!==null);)u=s.lastIndex,s===_t?d[1]==="!--"?s=Or:d[1]!==void 0?s=Br:d[2]!==void 0?(qr.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=We):d[3]!==void 0&&(s=We):s===We?d[0]===">"?(s=o??_t,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?We:d[3]==='"'?Vr:Nr):s===Vr||s===Nr?s=We:s===Or||s===Br?s=_t:(s=We,o=void 0);let _=s===We&&r[a+1].startsWith("/>")?" ":"";i+=s===_t?l+as:h>=0?(t.push(c),l.slice(0,h)+Gr+l.slice(h)+Me+_):l+Me+(h===-2?a:_)}return[jr(r,i+(r[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),t]},wt=class r{constructor({strings:e,_$litType$:n},t){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,d]=cs(e,n);if(this.el=r.createElement(c,t),Le.currentNode=this.el.content,n===2||n===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Le.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(Gr)){let u=d[s++],_=o.getAttribute(h).split(Me),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:i,name:g[2],strings:_,ctor:g[1]==="."?$n:g[1]==="?"?Mn:g[1]==="@"?zn:Qe}),o.removeAttribute(h)}else h.startsWith(Me)&&(l.push({type:6,index:i}),o.removeAttribute(h));if(qr.test(o.tagName)){let h=o.textContent.split(Me),u=h.length-1;if(u>0){o.textContent=Kt?Kt.emptyScript:"";for(let _=0;_<u;_++)o.append(h[_],gt()),Le.nextNode(),l.push({type:2,index:++i});o.append(h[u],gt())}}}else if(o.nodeType===8)if(o.data===Ur)l.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(Me,h+1))!==-1;)l.push({type:7,index:i}),h+=Me.length-1}i++}}static createElement(e,n){let t=Oe.createElement("template");return t.innerHTML=e,t}};function Ye(r,e,n=r,t){if(e===Be)return e;let o=t!==void 0?n._$Co?.[t]:n._$Cl,i=bt(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,n,t)),t!==void 0?(n._$Co??=[])[t]=o:n._$Cl=o),o!==void 0&&(e=Ye(r,o._$AS(r,e.values),o,t)),e}var Sn=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:t}=this._$AD,o=(e?.creationScope??Oe).importNode(n,!0);Le.currentNode=o;let i=Le.nextNode(),s=0,a=0,l=t[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new vt(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new En(i,this,e)),this._$AV.push(c),l=t[++a]}s!==l?.index&&(i=Le.nextNode(),s++)}return Le.currentNode=Oe,o}p(e){let n=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(e,t,n),n+=t.strings.length-2):t._$AI(e[n])),n++}},vt=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,t,o){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=t,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Ye(this,e,n),bt(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==Be&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ls(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&bt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Oe.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:t}=e,o=typeof t=="number"?this._$AC(e):(t.el===void 0&&(t.el=wt.createElement(jr(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===o)this._$AH.p(n);else{let i=new Sn(o,this),s=i.u(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(e){let n=Kr.get(e.strings);return n===void 0&&Kr.set(e.strings,n=new wt(e)),n}k(e){Rn(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,t,o=0;for(let i of e)o===n.length?n.push(t=new r(this.O(gt()),this.O(gt()),this,this.options)):t=n[o],t._$AI(i),o++;o<n.length&&(this._$AR(t&&t._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let t=Wr(e).nextSibling;Wr(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Qe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,t,o,i){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=b}_$AI(e,n=this,t,o){let i=this.strings,s=!1;if(i===void 0)e=Ye(this,e,n,0),s=!bt(e)||e!==this._$AH&&e!==Be,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=Ye(this,a[t+l],n,l),c===Be&&(c=this._$AH[l]),s||=!bt(c)||c!==this._$AH[l],c===b?e=b:e!==b&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},$n=class extends Qe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},Mn=class extends Qe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}},zn=class extends Qe{constructor(e,n,t,o,i){super(e,n,t,o,i),this.type=5}_$AI(e,n=this){if((e=Ye(this,e,n,0)??b)===Be)return;let t=this._$AH,o=e===b&&t!==b||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,i=e!==b&&(t===b||o);o&&this.element.removeEventListener(this.name,this,t),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},En=class{constructor(e,n,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){Ye(this,e)}};var ds=An.litHtmlPolyfillSupport;ds?.(wt,vt),(An.litHtmlVersions??=[]).push("3.3.3");var Zr=(r,e,n)=>{let t=n?.renderBefore??e,o=t._$litPart$;if(o===void 0){let i=n?.renderBefore??null;t._$litPart$=o=new vt(e.insertBefore(gt(),i),i,void 0,n??{})}return o._$AI(r),o};var Fn=globalThis,le=class extends ye{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zr(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Be}};le._$litElement$=!0,le.finalized=!0,Fn.litElementHydrateSupport?.({LitElement:le});var us=Fn.litElementPolyfillSupport;us?.({LitElement:le});(Fn.litElementVersions??=[]).push("4.2.2");async function Xr(r){return r.callWS({type:"neonplan3d/building/get"})}async function Yr(r,e){return(await r.callWS({type:"neonplan3d/building/save",building:e})).revision}function Qr(r,e){return r.connection.subscribeMessage(n=>e(n.revision),{type:"neonplan3d/building/subscribe"})}async function Jr(r,e){return(await r.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function eo(r){return(await r.callWS({type:"neonplan3d/packs/list"})).packs}var to=[],Pn=new Map,no=0;function ro(r){to=r,Pn=new Map(r.flatMap(e=>e.items.map(n=>[hs(e.id,n.id),n]))),no++}function kt(){return to}function Gt(){return no}function hs(r,e){return`pack:${r}:${e}`}function In(r){return r.startsWith("pack:")}var ps={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function oo(r){return de(r)?.parts.find(e=>e.screen)}function de(r){if(!In(r))return;let e=Pn.get(r);if(e)return e;let[,n,...t]=r.split(":"),o=ps[n];return o?Pn.get(`pack:${o}:${t.join(":")}`):void 0}function io(r,e){let n=e.split("-")[0];return r.name[n]??r.name.en??Object.values(r.name)[0]??r.id}function ke(r,e){let n=de(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return so;if(e.type==="led_strip")return Math.max(0,r.height-.04-Math.max(.02,e.h));if(e.type==="fan_ceiling"||e.type==="fan_ceiling_light")return Math.max(0,r.height-Math.max(.05,e.h));if(e.type==="access_point"||e.type==="smoke_detector")return Math.max(0,r.height-Math.max(.02,e.h));if(e.type==="fan_wall")return 1.55;if(e.type==="altar_wall")return 1.45;if(e.type==="water_heater")return 1.7;if(e.type==="range_hood")return 1.35;if(e.type==="microwave")return Je(r,e.x,e.z);if(e.type==="modem_router"||e.type==="smart_display")return Je(r,e.x,e.z);if((e.type==="water_pump"||e.type==="heat_pump_outdoor")&&!r.rooms.some(t=>t.points.length>=3&&G([e.x,e.z],t.points)))return Ne(r,e.x,e.z);switch(n?.mount){case"surface":return Je(r,e.x,e.z);case"wall":return n.wall_y??1;case"ceiling":return Math.max(0,r.height-e.h);default:return n?0:ao(e)}}function lo(r){return r.kind==="veranda"||r.kind==="balcony"||r.kind==="canopy"}var Ut={field:null,size:1,right:0,up:0};var co=["rain","snow","clouds","lightning","sky"];var ms={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function _s(r){return r==="hedge"||r==="fence"||r==="pergola"}function gs(r,e,n){let t=r.slope??0;if(!t||r.type==="pool")return 0;let o=r.slope_dir??"x",i=(c,d)=>o==="x"?c:o==="-x"?-c:o==="z"?d:-d,s=1/0,a=-1/0;for(let[c,d]of r.points){let h=i(c,d);s=Math.min(s,h),a=Math.max(a,h)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,n)-s)/(a-s)));return t*l}function bs(r,e,n,t){return uo(r)+(e.offset??0)+ms[e.type]-gs(e,n,t)}function uo(r){return r.elevation>.3?0:-.2}function Ne(r,e,n){let t=(r.outdoor??[]).filter(i=>!_s(i.type)&&i.type!=="pool"&&G([e,n],i.points)),o=[...t].reverse().find(i=>i.cut)??t[0];return o?bs(r,o,e,n):uo(r)}var ws={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var ho={type:"none",pitch:35,overhang:.4},vs={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...ho}};var po=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),so=1.75;function fo(r){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","fan_ceiling","fan_ceiling_light","access_point","smoke_detector","stairs","stairs_landing","stairwell","parking"].includes(r.type)?!1:de(r.type)?.mount!=="ceiling"}function Hn(r){return po.has(r)||!!de(r)?.light}var ys=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function ao(r){switch(r.type){case"home_battery":return r.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"air_conditioner":return 1.9;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;case"security_camera":return 1.85;case"smart_lock":return .95;case"wall_thermostat":return 1.35;case"siren_alarm":return 1.85;case"electrical_panel":return .85;case"ventilation_fan":return 1.8;default:return 0}}function Je(r,e,n){let t=0;for(let o of r.furniture)!(ys.has(o.type)||de(o.type)?.surface)||!G([e,n],qt(o))||(t=Math.max(t,o.h));return t}var fs=new Set([...po,"radiator","air_conditioner","water_pump","fan_ceiling","fan_ceiling_light","fan_wall","fan_floor","water_heater","range_hood","microwave","water_purifier","air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","network_cabinet","nas_server","access_point","wall_thermostat","smoke_detector","siren_alarm","electrical_panel","ups_unit","modem_router","heat_pump_outdoor","hot_water_tank","ventilation_fan","humidifier","smart_display","robot_vacuum","robot_mower","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","kitchen_display","dishwasher","washer","dryer","kitchen","island","sink"]),Dn={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_landing:[2.1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],air_conditioner:[1,.22,.3],water_pump:[.55,.4,.45],altar:[1.27,.61,1.53],altar_wall:[.89,.48,.48],shoe_cabinet:[1,.35,1],motorbike:[.72,1.9,1.15],fan_ceiling:[1.4,1.4,.32],fan_ceiling_light:[1.4,1.4,.4],fan_wall:[.5,.3,.5],fan_floor:[.45,.45,1.25],water_heater:[.75,.35,.45],drying_rack:[1.6,.6,1.7],shoe_bench:[1,.38,.48],room_divider:[1.6,.3,2.1],range_hood:[.75,.5,.5],microwave:[.5,.4,.3],water_purifier:[.42,.38,1.2],air_purifier:[.32,.32,.65],smart_speaker:[.14,.14,.19],security_camera:[.2,.24,.22],smart_lock:[.1,.08,.32],smart_curtain:[2,.16,2.2],network_cabinet:[.6,.65,1.35],nas_server:[.42,.45,.34],access_point:[.24,.24,.055],wall_thermostat:[.18,.065,.24],smoke_detector:[.15,.15,.055],siren_alarm:[.22,.085,.28],electrical_panel:[.55,.14,.8],ups_unit:[.45,.5,.72],modem_router:[.34,.22,.12],heat_pump_outdoor:[1,.48,.86],hot_water_tank:[.55,.55,1.3],ventilation_fan:[.32,.14,.32],humidifier:[.38,.38,.8],smart_display:[.55,.16,.36],kitchen_corner:[1.25,1.25,.92],kitchen_display:[.8,.42,2.1],vanity:[1,.45,1.55],crib:[.75,1.25,.95],bed_single:[1,2.05,.9],bed_double:[1.8,2.05,.9],sofa_l:[2.5,1.7,.82],sofa_bed:[2,1.35,.78],shower_screen:[1,.08,1.9],hammock:[2.6,.9,1.2],stone_table_set:[2.2,2.2,.75],planter_large:[.8,.8,1.6],water_tank:[1.25,1.25,1.55],gate:[3.2,.18,1.8],fence:[2.4,.16,1.5],robot_vacuum:[.42,.62,.72],robot_mower:[.85,1.15,.48],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function Cn(r){r.energy={...ws,...r.energy??{}},r.presence=r.presence??[],r.settings={...vs,...r.settings,roof:{...ho,...r.settings?.roof??{}}};for(let e of r.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(t=>({...t,panel:t.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(t=>({...t,mount:t.mount??null,rotation:t.rotation??0})),e.furniture=e.furniture.map(t=>{let o={...t,entity:t.entity??null,power:t.power??null};if(t.type==="robot_vacuum"&&Math.abs(t.w-.36)<.001&&Math.abs(t.d-.5)<.001&&Math.abs(t.h-.1)<.001){let[i,s,a]=Dn.robot_vacuum;return{...o,w:i,d:s,h:a}}return o});let n=e.placements.filter(t=>t.entity_id.startsWith("light."));if(n.length){let t={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of n){let i=t[o.mount??"ceiling"],[s,a,l]=Dn[i];e.furniture.push({id:`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:i,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(t=>({...t,hinge:t.hinge??"left",leaves:t.leaves??1,swing:t.swing??"in",style:t.style??null,cover:t.cover??null,contact:t.contact??null,contact2:t.contact2??null,tilt:t.tilt??null}))}return r}function ze(r){let e=0;for(let n=0;n<r.length;n++){let[t,o]=r[n],[i,s]=r[(n+1)%r.length];e+=t*s-i*o}return e/2}function Ve(r){let e=ze(r);if(Math.abs(e)<1e-9){let o=r.length||1;return[r.reduce((i,s)=>i+s[0],0)/o,r.reduce((i,s)=>i+s[1],0)/o]}let n=0,t=0;for(let o=0;o<r.length;o++){let[i,s]=r[o],[a,l]=r[(o+1)%r.length],c=i*l-a*s;n+=(i+a)*c,t+=(s+l)*c}return[n/(6*e),t/(6*e)]}function qt(r){let e=r.rotation*Math.PI/180,n=Math.cos(e),t=Math.sin(e),o=r.w/2,i=r.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[r.x+s*n-a*t,r.z+s*t+a*n])}function G(r,e){let n=!1;for(let t=0,o=e.length-1;t<e.length;o=t++){let[i,s]=e[t],[a,l]=e[o];s>r[1]!=l>r[1]&&r[0]<(a-i)*(r[1]-s)/(l-s)+i&&(n=!n)}return n}var mo={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var ks=700,Ln="neonplan3d.unsaved",et="1.19.7",go="floorplan-3d.unsaved";function xs(){try{let r=localStorage.getItem(Ln)??localStorage.getItem(go);return r?JSON.parse(r):null}catch{return null}}function Wn(r){try{r?localStorage.setItem(Ln,JSON.stringify(r)):(localStorage.removeItem(Ln),localStorage.removeItem(go))}catch{}}var tt=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let n=this.hass===null;this.hass=e,n&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},ks),this.host.requestUpdate()}get frontendVersion(){return et}get versionGap(){return!this.backendVersion||et==="dev"||this.backendVersion===et?null:Ss(this.backendVersion,et)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&et!=="dev"&&this.backendVersion!==et}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Cn(e.building))}discardDraft(){this.draft=null,Wn(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;!e||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let n=await Yr(this.hass,e);this.ownRevisions.add(n),this.revision=n,this.saveState=this.pending?"saving":"saved",this.saveError=null,Wn(null)}catch(n){this.saveState="error",this.saveError=_o(n),Wn({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await Qr(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await eo(this.hass)}catch{this.packs=[]}ro(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await Xr(this.hass);this.building=Cn(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=xs()),this.revision=e.revision,this.error=null}catch(e){this.error=_o(e)}this.host.requestUpdate()}}};function _o(r){return r&&typeof r=="object"&&"message"in r?String(r.message):String(r)}function Ss(r,e){let n=r.split(/[.-]/).map(o=>Number.parseInt(o,10)||0),t=e.split(/[.-]/).map(o=>Number.parseInt(o,10)||0);for(let o=0;o<Math.max(n.length,t.length);o++){let i=(n[o]??0)-(t[o]??0);if(i)return i}return 0}var bo;function wo(){let r=new URL("./neonplan3d-editor.js?v=406729c7071f",new URL(import.meta.url)).href;return bo??=import(r),bo}var $s={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",water_heater:"switch",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Ms=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),zs=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Es=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),jt=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Mo=new Set(["light","switch"]);function Ke(r){return r.slice(0,r.indexOf("."))}function F(r){return $s[Ke(r)]??null}function vo(r){return r!==null&&r!=="scene"&&r!=="script"}function Bn(r,e){let n=r.entities?.[e];return n?n.area_id?n.area_id:n.device_id&&r.devices?.[n.device_id]?.area_id||null:null}function yo(r,e){let n=F(e);if(!n)return!1;let t=r.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let o=r.states[e];if(!o)return!1;let i=o.attributes.device_class;return n==="sensor"?i?Ms.has(i):zs.has(String(o.attributes.unit_of_measurement??"")):n==="binary"?!!i&&Es.has(i):!0}var As=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function ko(r,e){if(F(e)!=="sensor")return!1;let n=r.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let t=r.states[e];return!t||!t.attributes.unit_of_measurement||As.has(String(t.attributes.device_class??""))?!1:Number.isFinite(Number(t.state))||N(t)}var On=null;function Nn(r){let e=On;if(e&&e.entities===r.entities&&e.devices===r.devices&&(e.states===r.states||(e.states=r.states,Object.keys(r.states).length===e.stateCount)))return e;let n=new Map,t=new Map,o=[],i=new Map;for(let s of Object.keys(r.entities??{})){let a=r.entities[s],l=a.device_id;l&&qn(r,s)&&(t.get(l)??t.set(l,[]).get(l)).push(s),l&&!a.hidden&&!a.entity_category&&(i.get(l)??i.set(l,new Set).get(l)).add(Ke(s));let c=yo(r,s),d=Bn(r,s);if(!d){(c||ko(r,s))&&vo(F(s))&&o.push(s);continue}c&&(n.get(d)??n.set(d,[]).get(d)).push(s)}if(r.entities)for(let s of Object.keys(r.states))r.entities[s]||(yo(r,s)||ko(r,s))&&vo(F(s))&&o.push(s);o.sort((s,a)=>jt.indexOf(F(s))-jt.indexOf(F(a))||q(r,s).localeCompare(q(r,a)));for(let[s,a]of n){let l=r.areas?.[s]?.name;a.sort((c,d)=>{let h=jt.indexOf(F(c)),u=jt.indexOf(F(d));return h-u||q(r,c,l).localeCompare(q(r,d,l))})}return On={entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,areas:n,power:t,unassigned:o,domains:i},On}function ie(r,e){return!e||!r.entities?[]:Nn(r).areas.get(e)??[]}var Rs={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Ts=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Fs=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Ps(r,e){let n=r.entities?.[e]?.device_id,t=n?Nn(r).domains.get(n):void 0;return t&&[...t].some(o=>Ts.has(o))?!1:!Fs.test(`${e} ${r.states[e]?.attributes.friendly_name??""}`)}function Vn(r,e,n,t){let o=n.climate?.[t];if(o==="none")return[];if(o)return r.states[o]?[o]:[];let i=Rs[t],s=(h,u)=>G([h,u],n.points),a=e?.placements.filter(h=>h.entity_id.startsWith("sensor."))??[],l=a.filter(h=>s(h.x,h.z)).map(h=>h.entity_id),c=new Set(a.filter(h=>!s(h.x,h.z)).map(h=>h.entity_id));return[...new Set([...ie(r,n.area_id).filter(h=>!c.has(h)),...l])].filter(h=>h.startsWith("sensor.")&&r.states[h]?.attributes.device_class===i&&Ps(r,h))}function we(r){return r.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function Is(r,e){return e==="\xB0F"?(r-32)*5/9:e==="K"?r-273.15:r}function nt(r,e){return we(r)==="\xB0F"?e*9/5+32:e}function Ee(r,e,n,t){let o=Vn(r,e,n,t).map(i=>{let s=Number(r.states[i]?.state);return t==="temperature"?Is(s,r.states[i]?.attributes.unit_of_measurement):s}).filter(i=>Number.isFinite(i));return o.length?o.reduce((i,s)=>i+s,0)/o.length:null}function Kn(r,e){return r.entities?Nn(r).power.get(e)??[]:[]}function q(r,e,n){let o=r.states[e]?.attributes.friendly_name??r.entities?.[e]?.name??e;if(n&&o.length>n.length+1&&o.toLowerCase().startsWith(n.toLowerCase()+" ")){let i=o.slice(n.length+1);return i.charAt(0).toUpperCase()+i.slice(1)}return o}function N(r){return!r||r.state==="unavailable"||r.state==="unknown"}var Ds=new Set(["running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function Hs(r){return!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum"}function Ae(r){if(!r)return!1;if(Ke(r.entity_id)==="humidifier")return r.state==="on";if(Ke(r.entity_id)==="lawn_mower")return["mowing","starting","returning"].includes(r.state);if(Ke(r.entity_id)==="siren")return r.state==="on";if(Ke(r.entity_id)==="alarm_control_panel")return["triggered","pending","arming"].includes(r.state);switch(F(r.entity_id)){case"light":case"switch":case"fan":case"binary":return r.state==="on";case"cover":return r.state==="open"||r.state==="opening";case"climate":return r.attributes.hvac_action==="heating"||r.attributes.hvac_action==="cooling";case"media":return r.state==="playing";case"lock":return r.state==="unlocked"||r.state==="open";case"sensor":return Hs(r)&&Ds.has(String(r.state).toLowerCase());default:return!1}}function rt(r,e){if(!r||r.state!=="on")return null;let n=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:r.attributes,t=typeof n.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,n.brightness/255))):1,o=n.rgb_color,i;return o&&n.color_mode!=="color_temp"&&n.color_mode!=="brightness"&&n.color_mode!=="onoff"?i=[o[0]/255,o[1]/255,o[2]/255]:typeof n.color_temp_kelvin=="number"?i=Cs(n.color_temp_kelvin):i=[1,.71,.28],{color:i,level:t}}function Cs(r){let e=Math.min(1,Math.max(0,(r-2200)/4300)),n=[1,.66,.26],t=[.78,.9,1];return[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e]}function ot(r,e,n=null){if(r==="camera")return n==="ceiling"?Math.max(.5,e-.05):2.2;if(r==="light"&&n){if(n==="floor")return 1.95;if(n==="table")return 1.25;if(n==="wall")return 1.95}switch(r){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var Ws=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Ls=new Set(["garage","gate"]),Os=new Set(["window","opening"]);function xt(r,e,n=!1){let t=new Map;return e.length&&r.forEach((o,i)=>{let s=n&&e.length===1?e[0]:e[i];s&&t.set(o.id,s)}),t}function Zt(r,e){let n=new Map;for(let t of e)for(let o of t.rooms){let i=t.openings.filter(w=>w.room_id===o.id).sort((w,R)=>w.edge-R.edge||w.offset-R.offset);if(!i.length)continue;let s=ie(r,o.area_id),a=w=>r.states[w]?.attributes.device_class,l=s.filter(w=>F(w)==="cover"&&Ws.has(a(w))),c=i.filter(w=>w.type==="window"),d=i.filter(w=>w.type==="door"),h=i.filter(w=>w.type==="garage"),u=xt(c,l,!0),_=xt(c,s.filter(w=>F(w)==="binary"&&Os.has(a(w)))),g=xt(d,s.filter(w=>F(w)==="binary"&&a(w)==="door")),p=xt(h,s.filter(w=>F(w)==="cover"&&Ls.has(a(w)??""))),f=xt(h,s.filter(w=>F(w)==="binary"&&a(w)==="garage_door")),v=(w,R)=>w==="none"?null:w??R??null;for(let w of i){let R=w.type==="window"?u:w.type==="garage"?p:null,S=w.type==="window"?_:w.type==="garage"?f:g;n.set(w.id,{cover:v(w.cover,R?.get(w.id)),contact:w.sensor==="handle"&&w.contact==null?null:v(w.contact,S.get(w.id)),tilt:w.tilt==="none"?null:w.tilt,contact2:w.leaves===2&&w.contact2&&w.contact2!=="none"?w.contact2:null,tilt2:w.leaves===2&&w.tilt2&&w.tilt2!=="none"?w.tilt2:null,position:w.position&&w.position!=="none"?w.position:null,positionInverted:!!w.position_inverted,tiltAngle:w.tilt_angle&&w.tilt_angle!=="none"?w.tilt_angle:null,tiltMax:w.tilt_max??null,tiltOffset:w.tilt_offset??null,tiltInvert:!!w.tilt_invert,shut:!!w.shut})}}return n}var Bs=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Ns(r){if(!r||N(r))return null;let e=r.attributes.window_state;for(let n of[typeof e=="string"?e:null,r.state]){if(!n)continue;let t=Bs.find(([o])=>o.test(n.trim()));if(t)return t[1]}return null}var Vs=.5;function Re(r,e,n="window"){let t=p=>!!p&&r.states[p]?.state==="on",o=p=>!!p&&!!r.states[p]&&!N(r.states[p]),i=p=>p?Ns(r.states[p]):null,s=t(e.tilt2)||i(e.tilt2)==="tilted"||i(e.contact2)==="tilted",a=i(e.contact2)==="open"&&!s?1:0,l=t(e.tilt)||i(e.tilt)==="tilted"||i(e.contact)==="tilted",c=l?1:0,d=e.tiltAngle?Number(r.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(d)){let p=(d-(e.tiltOffset??0))*(e.tiltInvert?-1:1);c=Math.min(1,Math.max(0,p/(e.tiltMax||15))),c<.08&&(c=0),l=c>0}let h=i(e.contact)==="open"&&!l?1:0,u=null,_=e.cover?r.states[e.cover]:void 0,g=Ks(r,e.position);if(g!==null)u=e.positionInverted?g:1-g;else if(_&&!N(_)){let p=_.attributes.current_position;typeof p=="number"?u=1-Math.min(100,Math.max(0,p))/100:u=_.state==="closed"?1:_.state==="opening"||_.state==="closing"?.5:0}else e.cover&&(u=0);if(n==="door"){let p=i(e.contact);return{open:p===null?e.shut?0:Vs:p==="closed"?0:1,open2:i(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:u,sensed:p!==null||u!==null}}if(n==="garage"){let p=u!==null||o(e.contact);return u===null&&(u=o(e.contact)&&t(e.contact)?0:1),{open:0,open2:0,tilt:0,tilt2:0,cover:u,sensed:p}}return{open:h,open2:a,tilt:c,tilt2:s?1:0,cover:u,sensed:o(e.contact)||o(e.tilt)||Number.isFinite(d)}}function Ks(r,e){let n=e?r.states[e]:void 0;if(!n||N(n))return null;let t=Number(n.state);if(!Number.isFinite(t))return null;let o=n.attributes.unit_of_measurement==="%"||t>1;return Math.min(1,Math.max(0,o?t/100:t))}function Gn(r,e){let n=new Map,t=[];for(let s of e){let a=r.entities?.[s]?.device_id??`entity:${s}`,l=n.get(a);l||(n.set(a,l=[]),t.push(a)),l.push(s)}let o=t.map(s=>{let a=n.get(s),l=a.find(c=>!r.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),i=new Map(e.map((s,a)=>[s,a]));return o.sort((s,a)=>i.get(s.primary)-i.get(a.primary))}function Xt(r,e){return Gn(r,e).map(n=>n.primary)}var Gs={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,robot_mower:/(mähroboter|robot(?:ic)? ?mower|lawn ?mower|robot cắt cỏ|robot cat co|máy cắt cỏ|may cat co)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,air_conditioner:/(klima|air ?condition|aircon|airco|split|điều hòa|dieu hoa|máy lạnh|may lanh)/i,water_pump:/(wasserpumpe|gartenpumpe|brunnenpumpe|water ?pump|garden ?pump|well ?pump|pool ?pump|irrigation|máy bơm|may bom|bơm nước|bom nuoc|bơm giếng|bom gieng|bơm tưới|bom tuoi)/i,fan_ceiling:/(deckenventilator|ceiling ?fan|quạt trần|quat tran)/i,fan_ceiling_light:/(deckenventilator|ceiling ?fan|quạt trần|quat tran)/i,fan_wall:/(wandventilator|wall(?: mounted)? ?fan|quạt (?:treo )?tường|quat (?:treo )?tuong)/i,fan_floor:/(standventilator|standing ?fan|floor ?fan|quạt đứng|quat dung)/i,water_heater:/(warmwasser|water ?heater|boiler|bình nóng lạnh|binh nong lanh|máy nước nóng|may nuoc nong)/i,range_hood:/(dunstabzug|range ?hood|extractor|hút mùi|hut mui)/i,microwave:/(mikrowelle|microwave|lò vi sóng|lo vi song)/i,water_purifier:/(wasserfilter|water ?purifier|water ?dispenser|lọc nước|loc nuoc|cây nước|cay nuoc)/i,air_purifier:/(luftreiniger|air ?purifier|air ?cleaner|máy lọc không khí|may loc khong khi)/i,smart_speaker:/(smart ?speaker|lautsprecher|speaker|echo|alexa|homepod|google (home|nest)|loa thông minh|loa thong minh)/i,security_camera:/(security ?camera|surveillance|überwachung|camera|kamera|cctv|cam an ninh)/i,smart_lock:/(smart ?lock|türschloss|door ?lock|khóa cửa|khoa cua)/i,smart_curtain:/(curtain|blind|shade|vorhang|rollladen|rèm|rem)/i,network_cabinet:/(netzwerkschrank|network ?(cabinet|rack)|server ?rack|tủ mạng|tu mang)/i,nas_server:/\b(nas|network attached storage|homeserver|home server|server lưu trữ|may chu luu tru|máy chủ lưu trữ)\b/i,access_point:/(wlan|wi-?fi|access ?point|wireless ?ap|điểm truy cập|diem truy cap|bộ phát wifi|bo phat wifi)/i,wall_thermostat:/(wandthermostat|wall ?thermostat|thermostat|bộ điều nhiệt|bo dieu nhiet)/i,smoke_detector:/(rauchmelder|smoke ?(detector|alarm)|báo khói|bao khoi|cảm biến khói|cam bien khoi)/i,siren_alarm:/(sirene|siren|alarm|còi báo động|coi bao dong|đèn chớp|den chop)/i,electrical_panel:/(sicherungskasten|electrical ?panel|fuse ?box|tủ điện|tu dien)/i,ups_unit:/\b(ups|usv|bộ lưu điện|bo luu dien)\b/i,modem_router:/(modem|router|bộ định tuyến|bo dinh tuyen|bộ phát mạng|bo phat mang)/i,heat_pump_outdoor:/(wärmepumpe|heat ?pump|bơm nhiệt|bom nhiet)/i,hot_water_tank:/(warmwasserspeicher|hot ?water ?tank|bình tích nước nóng|binh tich nuoc nong)/i,ventilation_fan:/(lüfter|exhaust ?fan|ventilation ?fan|quạt thông gió|quat thong gio)/i,humidifier:/(luftbefeuchter|humidifier|máy tạo ẩm|may tao am)/i,smart_display:/(smart ?display|control ?panel|màn hình điều khiển|man hinh dieu khien)/i,kitchen_display:/(vitrine|display ?cabinet|cabinet ?light|schranklicht|tủ kính|tu kinh|tủ trưng bày|tu trung bay|đèn tủ|den tu|led tủ|led tu)/i},zo=new Set(["tv_board","tv_wall","smart_display"]);function Eo(r,e){let n=r.states[e.entity];if(!n)return!1;let t=e.attribute?n.attributes[e.attribute]:n.state;if(t==null)return!1;let o=String(t).toLowerCase(),i=e.state.trim().toLowerCase();return e.state.trim()==="*"||o===i||i.length>=3&&o.includes(i)}function Ao(r){return zo.has(r)||!!oo(r)}function Yt(r){return Ao(r)||r==="desk"||r==="fridge_smart"}function it(r,e){let n=new Set,t=st(r,e),o=e.some(i=>i.openings.some(s=>s.confirm))?Zt(r,e):null;for(let i of e){for(let s of i.placements)s.confirm&&n.add(s.entity_id);for(let s of i.openings){let a=s.confirm?o?.get(s.id)?.cover:null;a&&a!=="none"&&n.add(a)}for(let s of i.furniture){let a=s.confirm?t.get(s.id):null;a?.entity&&a.entity!=="none"&&n.add(a.entity),a?.light&&a.light!=="none"&&n.add(a.light)}}return n}function Un(r,e){let n=o=>{if(!o||o==="none")return!1;let i=r.states[o]?.state;return i==="on"||i==="open"},t=new Map;for(let o of e)for(let i of o.furniture)i.type==="fridge_smart"&&t.set(i.id,{left:n(i.door_left),right:n(i.door_right)});return t}var xo={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function qn(r,e){return e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power"}function Us(r,e){if(qn(r,e))return e;let n=r.entities?.[e]?.device_id;return n?Kn(r,n).find(t=>t!==e)??null:null}function st(r,e){let n=new Map;for(let t of e){let o=new Set([...t.furniture.flatMap(i=>[i.entity,i.light_entity,i.power]),...t.placements.map(i=>i.entity_id)].filter(i=>!!i&&i!=="none"));for(let i of t.furniture){let s=i.type in xo,a=s?xo[i.type]:Gs[i.type];if(!a&&i.entity==null&&i.light_entity==null&&i.power==null)continue;let l=t.rooms.find(g=>g.points.length>=3&&G([i.x,i.z],g.points)),c=l?Xt(r,ie(r,l.area_id)):[],d=g=>`${g} ${q(r,g)}`,h=i.entity==="none"?null:i.entity??null;if(i.entity==null){let g=c.filter(p=>!o.has(p));if(s){let p=g.filter(f=>F(f)==="light");h=p.find(f=>a.test(d(f)))??p[0]??null}else if(i.type==="robot_vacuum"){let p=l?.area_id??null;h=Object.keys(r.entities??{}).find(f=>f.startsWith("vacuum.")&&!o.has(f)&&Bn(r,f)===p)??null}else if(i.type==="robot_mower"){let p=Object.keys(r.states??{}).filter(v=>v.startsWith("lawn_mower.")&&!o.has(v)),f=p.filter(v=>a.test(d(v)));h=f.length===1?f[0]:p.length===1?p[0]:null}else if(i.type==="radiator"||i.type==="air_conditioner"||i.type==="wall_thermostat"||i.type==="heat_pump_outdoor"){let p=g.filter(f=>F(f)==="climate");h=p.find(f=>a.test(d(f)))??p[0]??null}else if(["network_cabinet","nas_server","access_point","smoke_detector","siren_alarm","electrical_panel","ups_unit","modem_router","hot_water_tank","ventilation_fan","humidifier"].includes(i.type)){let p=l?.area_id??null,f={network_cabinet:["switch","sensor","binary_sensor"],nas_server:["switch","sensor","binary_sensor"],access_point:["switch","sensor","binary_sensor","device_tracker"],smoke_detector:["binary_sensor"],siren_alarm:["siren","alarm_control_panel","switch","binary_sensor"],electrical_panel:["switch","sensor","binary_sensor"],ups_unit:["switch","sensor","binary_sensor"],modem_router:["switch","sensor","binary_sensor","device_tracker"],hot_water_tank:["water_heater","climate","switch"],ventilation_fan:["fan","switch"],humidifier:["humidifier","fan","switch"]},v=Object.keys(r.states??{}).filter(w=>o.has(w)||!f[i.type].includes(Ke(w))||p&&Bn(r,w)!==p||i.type==="smoke_detector"&&r.states[w]?.attributes.device_class!=="smoke"?!1:a.test(d(w)));h=l?v[0]??null:v.length===1?v[0]:null}else if(["air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain"].includes(i.type)){let p={air_purifier:"fan",smart_speaker:"media",security_camera:"camera",smart_lock:"lock",smart_curtain:"cover"}[i.type],f=g.filter(v=>F(v)===p);h=f.find(v=>a.test(d(v)))??f[0]??null}else if(i.type==="water_pump"){let f=(l?g:Object.keys(r.states??{}).filter(v=>!o.has(v))).filter(v=>["switch","fan"].includes(F(v)??"")&&a.test(d(v)));h=l?f[0]??null:f.length===1?f[0]:null}else if(i.type==="kitchen_display")h=g.filter(f=>["light","switch"].includes(F(f)??"")).find(f=>a.test(d(f)))??null;else if(Ao(i.type)){let p=g.filter(f=>F(f)==="media");h=p.find(f=>r.states[f]?.attributes.device_class==="tv")??p.find(f=>a?.test(d(f)))??(zo.has(i.type)?p[0]??null:null)}else a&&(h=g.find(p=>["switch","media","fan"].includes(F(p)??"")&&a.test(d(p)))??null);h&&o.add(h)}let u=i.light_entity==="none"?null:i.light_entity??null;if(i.type==="fan_ceiling_light"&&i.light_entity==null){let g=(l?ie(r,l.area_id):[]).filter(p=>!o.has(p)&&F(p)==="light");u=g.find(p=>/(fan|ceiling|decken|quạt|quat)/i.test(d(p)))??g[0]??null,u&&o.add(u)}let _=i.power==="none"?null:i.power??null;i.power==null&&(_=h?Us(r,h):null,!_&&a&&l&&!s&&(_=ie(r,l.area_id).find(p=>qn(r,p)&&!o.has(p)&&a.test(d(p)))??null),_&&o.add(_)),(h||u||_)&&n.set(i.id,{entity:h,power:_,...i.type==="fan_ceiling_light"||i.light_entity!=null?{light:u}:{}})}}return n}function Qt(r){if(!r||r.state==="off"||r.state==="standby"||N(r))return null;let e=r.attributes,n=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return n.includes("netflix")?[.9,.04,.08]:n.includes("youtube")?[1,.1,.15]:n.includes("prime")||n.includes("amazon")?[.1,.6,.95]:n.includes("disney")?[.2,.35,1]:n.includes("spotify")?[.12,.85,.4]:n.includes("zdf")||n.includes("ard")||n.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function Ro(r,e,n){let t=(d,h)=>G([d,h],n.points),o=st(r,[e]),i=Zt(r,[e]),s=[...e.placements.filter(d=>t(d.x,d.z)).map(d=>d.entity_id),...e.furniture.filter(d=>t(d.x,d.z)).flatMap(d=>[o.get(d.id)?.entity,o.get(d.id)?.light,o.get(d.id)?.power]),...e.openings.filter(d=>d.room_id===n.id).flatMap(d=>{let h=i.get(d.id);return h?[h.cover,h.contact,h.tilt,h.contact2]:[]}),...n.panel??[]].filter(d=>!!d&&!!r.states[d]),a=new Set(n.hidden??[]),l=[...new Set(s)].filter(d=>!a.has(d)),c=new Set(l);return{shown:l,more:ie(r,n.area_id).filter(d=>!c.has(d)&&!a.has(d))}}var So=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,qs={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function To(r,e){let n=e.car??{},t=h=>h&&h!=="none"?h:null,o=t(n.device)??t(e.entity),i=o?r.entities?.[o]?.device_id:null,s=i&&r.entities?Object.values(r.entities).filter(h=>h.device_id===i).map(h=>h.entity_id):[],a=h=>`${h} ${r.states[h]?.attributes.friendly_name??""} ${r.entities?.[h]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(h,u,_)=>s.find(g=>u.includes(g.split(".")[0])&&qs[h].test(a(g))&&(!_||_(g)))??null,c=h=>String(r.states[h]?.attributes.unit_of_measurement??""),d=h=>String(r.states[h]?.attributes.device_class??"");return{soc:t(n.soc)??s.find(h=>h.startsWith("sensor.")&&d(h)==="battery")??l("soc",["sensor"],h=>c(h)==="%"),range:t(n.range)??l("range",["sensor"],h=>/km|mi/.test(c(h)))??l("range",["sensor"]),charging:t(n.charging)??l("charging",["sensor"],h=>/^k?W$/.test(c(h)))??l("charging",["binary_sensor","switch"]),plugged:t(n.plugged)??s.find(h=>h.startsWith("binary_sensor.")&&d(h)==="plug")??l("plugged",["binary_sensor"]),lock:t(n.lock)??s.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:t(n.climate)??s.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:t(n.tracker)??s.find(h=>h.startsWith("device_tracker."))??null}}function Jt(r,e){let n=To(r,e),t=f=>f?r.states[f]:void 0,o=f=>{let v=Number(t(f)?.state);return f&&Number.isFinite(v)?v:null},i=o(n.soc),s=o(n.range),a=t(n.charging),l=String(a?.attributes.unit_of_measurement??""),c=a&&/^k?W$/.test(l)?(o(n.charging)??0)*(l==="kW"?1e3:1):null,d=c!==null?c>50:!!a&&["on","charging","laden"].includes(a.state.toLowerCase()),h=t(n.plugged),u=t(n.lock),_=t(n.climate),g=t(n.tracker),p=g?.state.toLowerCase()??"";return{entities:n,soc:i!==null?Math.max(0,Math.min(100,i)):null,range:s,rangeUnit:String(t(n.range)?.attributes.unit_of_measurement??"km"),chargingW:c,charging:d,plugged:h?h.state==="on":null,locked:u?u.entity_id.startsWith("lock.")?u.state==="locked":u.state==="on":null,climateOn:_?_.entity_id.startsWith("climate.")?_.state!=="off"&&_.state!=="unavailable":_.state==="on":null,away:g&&p!=="home"&&!N(g)?p==="not_home"?"":g.state:null}}function Fo(r,e){return e.flatMap(n=>n.furniture.filter(t=>t.type==="parking"&&t.car).flatMap(t=>Object.values(To(r,t)))).filter(n=>!!n)}function jn(r,e,n){if(n==="none")return null;if(n)return n;let t=e?r.entities?.[e]?.device_id:null;if(!t||!r.entities)return null;for(let o of Object.values(r.entities))if(!(o.device_id!==t||!o.entity_id.startsWith("sensor."))&&(So.test(o.translation_key??"")||So.test(o.entity_id.split(".")[1])))return o.entity_id;return null}function $o(r){return r.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Po(r,e,n,t){let o=t?r.states[t]?.state:n?r.states[n]?.attributes.current_room:void 0;if(typeof o!="string"||!o||o==="unknown"||o==="unavailable")return null;let i=$o(o);if(!i)return null;let s=a=>[a.name,a.area_id??"",a.area_id&&r.areas?.[a.area_id]?.name||""].map($o).filter(Boolean);return e.find(a=>s(a).includes(i))??e.find(a=>s(a).some(l=>l.length>=3&&(l.includes(i)||i.includes(l))))??null}var js=new Set(["garage","gate","door"]);function Zn(r,e){let n=new Set,t=new Set,o=i=>{if(!i||i==="none"||!r.states[i])return;let s=F(i);s==="light"?n.add(i):s==="cover"&&!js.has(String(r.states[i].attributes.device_class??""))&&t.add(i)};for(let i of e.rooms){let s=new Set(i.hidden??[]);for(let a of Xt(r,ie(r,i.area_id)))s.has(a)||o(a)}for(let i of e.placements)o(i.entity_id);for(let i of e.furniture)o(i.entity);return{lights:[...n],covers:[...t]}}function Io(r){let e=r.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function Do(r,e,n){let t=n.target?.trim()??"";if(n.action==="navigate"&&t)history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(n.action==="more_info"&&t)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}));else if(n.action==="service"&&t.includes(".")){let[o,i]=t.split(".",2);r.callService(o,i,n.data??{})}else n.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:n.data??{},bubbles:!0,composed:!0}))}var Ho={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"{n} R\xE4ume aus HA-Bereichen anlegen",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_group_room:"R\xE4ume",tool_group_structure:"Bauk\xF6rper",tool_group_energy:"Energie",tool_group_plan:"Grundriss",tool_group_layout:"Einrichten",tool_group_building:"Geb\xE4ude",tool_group_project:"Projekt",tool_group_actions:"Aktionen",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",tool_covered:"Veranda / \xFCberdachter Bereich",tool_settings:"Konfiguration",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",fan_blades:"Rotorbl\xE4tter",fan_blades_3:"3 Bl\xE4tter",fan_blades_4:"4 Bl\xE4tter",fan_blades_5:"5 Bl\xE4tter",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Im Plan verschieben und skalieren",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_covered:"Ziehen, um eine Veranda oder einen \xFCberdachten Bereich als Raum anzulegen",hint_settings:"Projekt-Einstellungen rechts \xB7 im Plan ziehen, um die Ansicht zu verschieben",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Sichtkegel in 3D zeigen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort stellst du auch Auto Pro ein (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang & Kino)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",media_play_head:"Abspielen",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind in diesem Fork standardm\xE4\xDFig aktiviert.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 schaltet {n} Pro-Funktionen frei",pack_needs_update:"Diese Erweiterung braucht eine neuere NeonPlan-Version \u2013 bitte NeonPlan 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie Pro",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_dot:"Neues im Shop",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"Die integrierten Zusatzfunktionen sind in diesem Fork aktiv. Optionale M\xF6bel-Packs installierst du hier mit deinem Lizenzschl\xFCssel.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",ext_active:"aktiv",ext_get:"Im Shop ansehen",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Optionale M\xF6bel-Packs",ext_teaser_text:"Die integrierten Funktionen sind bereits aktiv. Weitere M\xF6bel findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te \u2013 Gas, Wasser und W\xE4rme folgen als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",auto_pro_teaser:"Mit Auto Pro zeigt das Fahrzeug hier Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, und \u201Eunterwegs\u201C mit dem Standort, wenn es weg ist.",car_hint:"Eine Entit\xE4t des Autos reicht: Die \xFCbrigen findet NeonPlan am selben Ger\xE4t in Home Assistant (Ladestand, Reichweite, Laden, Kabel, Schloss, Klima, Standort). Was es nicht findet, w\xE4hlst du hier; \u201EKeine\u201C schaltet eine Rolle ab.",car_device:"Fahrzeug (eine Entit\xE4t des Autos)",car_soc:"Ladestand (%)",car_range:"Reichweite",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_plugged:"Kabel eingesteckt",car_lock:"Verriegelung",car_climate:"Klima / Vorheizen",car_tracker:"Standort (device_tracker)",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",chk_pro_active:"Energie Pro ist aktiv",chk_pro_get:"Energie Pro freischalten (Leitungen, Module, Hologramm)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",energy_pro_active:"Energie Pro ist aktiv",energy_pro_active_hint:"Leitungen, lebende Module und das Hologramm laufen. Gas, Wasser und W\xE4rme kommen als Updates in diesem Pack.",pro_unlock:"Freischalten",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_name:"Name",outdoor_roof_style:"Dachmaterial",outdoor_roof_solid:"Massiv",outdoor_roof_glass:"Glas / Polycarbonat",outdoor_roof_tile:"Dachziegel",outdoor_railing:"Gel\xE4nder an den freien Kanten",outdoor_yard_enclosure:"Hoher Zaun mit Tor um den Hof",outdoor_columns:"S\xE4ulen vorne",outdoor_column_size:"S\xE4ulenbreite (m)",insert_point:"Ecke danach einf\xFCgen",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",out_canopy:"Hof mit vorgezogenem Wellblechdach",out_veranda:"\xDCberdachte Veranda mit Gel\xE4nder und S\xE4ulen",out_balcony:"Veranda unter dem Hauptdach (ohne eigenes Dach)",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_library:"Bibliothek",furniture_properties:"Eigenschaften",project_settings:"Projekt konfigurieren",project_settings_hint:"Grundeinstellungen, Hintergrund, Startansicht, Favoriten und Sicherungen an einem Ort.",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_altar:"Hausaltar",furn_altar_wall:"Wandaltar",furn_shoe_cabinet:"Schuhschrank",furn_motorbike:"Motorroller",furn_fan_ceiling:"Deckenventilator",furn_fan_ceiling_light:"Deckenventilator mit Licht",furn_fan_wall:"Wandventilator",furn_fan_floor:"Standventilator",furn_water_heater:"Warmwasserspeicher",furn_drying_rack:"W\xE4schest\xE4nder",furn_shoe_bench:"Schuhbank",furn_room_divider:"Raumteiler",furn_range_hood:"Dunstabzugshaube",furn_microwave:"Mikrowelle",furn_water_purifier:"Wasserspender",furn_air_purifier:"Luftreiniger",furn_smart_speaker:"Smart-Lautsprecher",furn_security_camera:"\xDCberwachungskamera",furn_smart_lock:"Smartes T\xFCrschloss",furn_smart_curtain:"Smarter Vorhang",furn_network_cabinet:"Netzwerkschrank",furn_nas_server:"NAS-Server",furn_access_point:"WLAN-Access-Point (Decke)",furn_wall_thermostat:"Wandthermostat",furn_smoke_detector:"Rauchmelder",furn_siren_alarm:"Sirene mit Blitzlicht",furn_electrical_panel:"Sicherungskasten",furn_ups_unit:"USV-Anlage",furn_modem_router:"Modem/Router",furn_heat_pump_outdoor:"W\xE4rmepumpen-Au\xDFenger\xE4t",furn_hot_water_tank:"Warmwasserspeicher",furn_ventilation_fan:"L\xFCfter",furn_humidifier:"Luftbefeuchter",furn_smart_display:"Smartes Steuerdisplay",furn_kitchen_corner:"Eckk\xFCchenschrank",furn_kitchen_display:"LED-Vitrinenschrank",furn_vanity:"Schminktisch",furn_crib:"Babybett",furn_bed_single:"Einzelbett",furn_bed_double:"Doppelbett",furn_sofa_l:"Ecksofa",furn_sofa_bed:"Schlafsofa",furn_shower_screen:"Duschabtrennung",furn_hammock:"H\xE4ngematte",furn_stone_table_set:"Steintisch mit Hockern",furn_planter_large:"Gro\xDFer Pflanzk\xFCbel",furn_water_tank:"Wassertank",furn_gate:"Tor",furn_fence:"Zaun",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_landing:"U-Treppe mit Zwischenpodest",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_air_conditioner:"Klimaanlage (Wandger\xE4t)",furn_water_pump:"Au\xDFen-Wasserpumpe",furn_robot_vacuum:"Saugroboter",furn_robot_mower:"M\xE4hroboter mit Garage",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_entity_fan:"Ventilator oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Klima-Entit\xE4t",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_climate:"Heizen & K\xFChlen",furn_group_outdoor:"Au\xDFenbereich",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe und zoome das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stairs_landing_hint:"Zwei parallele L\xE4ufe mit einem Zwischenpodest: links nach hinten hinauf, um 180\xB0 wenden und rechts nach vorn bis zur oberen Etage. Die Treppe \xF6ffnet den Boden dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},Co={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add {n} rooms from HA areas",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_group_room:"Rooms",tool_group_structure:"Structure",tool_group_energy:"Energy",tool_group_plan:"Floor plan",tool_group_layout:"Layout",tool_group_building:"Building",tool_group_project:"Project",tool_group_actions:"Actions",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",tool_covered:"Veranda / covered area",tool_settings:"Configuration",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",fan_blades:"Blades",fan_blades_3:"3 blades",fan_blades_4:"4 blades",fan_blades_5:"5 blades",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move and scale in the plan",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_settings:"Project settings on the right \xB7 drag the plan to pan the view",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_covered:"Drag to create a veranda or covered area that behaves like a room",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Show the field of view in 3D",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are enabled by default in this fork.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 unlocks {n} Pro features",pack_needs_update:"This add-on needs a newer NeonPlan version \u2013 please update NeonPlan 3D (HACS) and reload the page.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_dot:"New in the shop",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"The bundled add-on features are active in this fork. Install optional furniture packs here with your licence key.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",ext_active:"active",ext_get:"See in the shop",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"Optional furniture packs",ext_teaser_text:'The bundled features are already active. Find additional furniture under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices \u2013 gas, water and heat follow as updates",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',auto_pro_teaser:'With Car Pro the vehicle here shows charge, range, charging, lock and climate from its integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, and "away" with its location when it is out.',car_hint:'One entity of the car is enough: NeonPlan finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",chk_pro_active:"Energy Pro is active",chk_pro_get:"Unlock Energy Pro (cables, modules, hologram)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",energy_pro_active:"Energy Pro is active",energy_pro_active_hint:"Cables, living modules and the hologram are running. Gas, water and heat come as updates of this pack.",pro_unlock:"Unlock",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_name:"Name",outdoor_roof_style:"Roof material",outdoor_roof_solid:"Solid",outdoor_roof_glass:"Glass / polycarbonate",outdoor_roof_tile:"Roof tiles",outdoor_railing:"Railing along free edges",outdoor_yard_enclosure:"High fence and gate around the yard",outdoor_columns:"Front columns",outdoor_column_size:"Column width (m)",insert_point:"Insert a corner after this one",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_canopy:"Yard with projecting corrugated metal roof",out_veranda:"Covered veranda with railing and columns",out_balcony:"Veranda under the main roof (no separate roof)",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_library:"Library",furniture_properties:"Properties",project_settings:"Configure project",project_settings_hint:"General settings, background, start view, favourites and backups in one place.",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_altar:"Standing altar",furn_altar_wall:"Wall-mounted altar",furn_shoe_cabinet:"Shoe cabinet",furn_motorbike:"Motorbike",furn_fan_ceiling:"Ceiling fan",furn_fan_ceiling_light:"Ceiling fan with light",furn_fan_wall:"Wall-mounted fan",furn_fan_floor:"Standing fan",furn_water_heater:"Water heater",furn_drying_rack:"Drying rack",furn_shoe_bench:"Shoe bench",furn_room_divider:"Room divider",furn_range_hood:"Range hood",furn_microwave:"Microwave",furn_water_purifier:"Water purifier",furn_air_purifier:"Air purifier",furn_smart_speaker:"Smart speaker",furn_security_camera:"Security camera",furn_smart_lock:"Smart door lock",furn_smart_curtain:"Smart curtain",furn_network_cabinet:"Network cabinet",furn_nas_server:"NAS server",furn_access_point:"Ceiling Wi-Fi access point",furn_wall_thermostat:"Wall thermostat",furn_smoke_detector:"Smoke detector",furn_siren_alarm:"Siren with strobe light",furn_electrical_panel:"Electrical panel",furn_ups_unit:"UPS unit",furn_modem_router:"Modem/router",furn_heat_pump_outdoor:"Heat pump outdoor unit",furn_hot_water_tank:"Hot-water storage tank",furn_ventilation_fan:"Ventilation fan",furn_humidifier:"Humidifier",furn_smart_display:"Smart control display",furn_kitchen_corner:"Corner kitchen unit",furn_kitchen_display:"LED display cabinet",furn_vanity:"Dressing table",furn_crib:"Baby crib",furn_bed_single:"Single bed",furn_bed_double:"Double bed",furn_sofa_l:"L-shaped sofa",furn_sofa_bed:"Sofa bed",furn_shower_screen:"Shower screen",furn_hammock:"Hammock",furn_stone_table_set:"Stone table set",furn_planter_large:"Large planter",furn_water_tank:"Water tank",furn_gate:"Gate",furn_fence:"Fence",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_landing:"U-shaped stairs with landing",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_air_conditioner:"Wall-mounted air conditioner",furn_water_pump:"Outdoor water pump",furn_robot_vacuum:"Robot vacuum",furn_robot_mower:"Robot mower with garage",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_entity_fan:"Fan or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Climate entity",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_climate:"Heating & cooling",furn_group_outdoor:"Outdoor",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn and zoom the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stairs_landing_hint:"Two parallel flights with a half-height landing: up the left side towards the back, turn 180\xB0, then up the right side towards the front. The stair opens the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},Zs=["fr","es","nl","it","hu","vi"],St=new Map,Xn=new Map;function Yn(r){let e=(r??navigator.language).toLowerCase().slice(0,2);return Zs.includes(e)?e:null}function at(r){let e=Yn(r);return!e||St.has(e)}function en(r){let e=Yn(r);if(!e||St.has(e))return Promise.resolve();let n=Xn.get(e);if(!n){let t=new URL(`./lang/${e}.json?v=e9442f52bedc`,import.meta.url).href;n=fetch(t).then(o=>o.ok?o.json():{}).then(o=>{St.set(e,o&&typeof o=="object"?o:{})}).catch(()=>{St.set(e,{})}).finally(()=>Xn.delete(e)),Xn.set(e,n)}return n}function A(r,e,n={}){let t=r?.language??navigator.language,o=t.startsWith("de")?null:Yn(t),s=(t.startsWith("de")?Ho:o&&St.get(o)||Co)[e]??Co[e]??Ho[e]??e;for(let[a,l]of Object.entries(n))s=s.replace(`{${a}}`,String(l));return s}function J(r,e,n=2){return e.toLocaleString(r?.language??void 0,{maximumFractionDigits:n})}var Wo=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro"],Xs=["fridge_smart"];var Lo=r=>(r??navigator.language).toLowerCase().startsWith("de");function Oo(r){return Lo(r)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var Ys={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Bo(r,e){let n=Lo(r),t=`https://github.com/PATCoder97/neonplan3d/blob/main/docs/${n?"anleitung.md":"manual.md"}`,o=e?Ys[e]:void 0,i=o?n?o.de:o.en:"",[,s]=i.split("#");return`${t}${s?`#${s}`:""}`}function Qs(r=kt()){let e=new Set(Wo);for(let n of r)for(let t of n.features??[])(Wo.includes(t)||Xs.includes(t))&&e.add(t);return e}function V(r,e){return Qs(e).has(r)}var No={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function tn(r){return No[r]}function nn(r){return`<ha-icon icon="mdi:${r.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function $t(r){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${No[r]}"/></svg>`}var Te=(r,e)=>A(r,e);function pe(r,e){if(!e||N(e))return Te(r,"state_unavailable");let n=e.attributes;switch(F(e.entity_id)){case"light":return e.state!=="on"?Te(r,"state_off"):typeof n.brightness=="number"?`${Math.round(n.brightness/255*100)} %`:Te(r,"state_on");case"switch":case"fan":return Te(r,e.state==="on"?"state_on":"state_off");case"cover":return typeof n.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${n.current_position} %`:rn(r,e.state);case"climate":{let t=typeof n.current_temperature=="number"?`${J(r,n.current_temperature,1)} ${r?we(r):"\xB0C"}`:null;return e.state==="off"?t?`${t} \xB7 ${Te(r,"state_off")}`:Te(r,"state_off"):t??rn(r,e.state)}case"media":{let t=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",o=[n.app_name,n.media_title,n.source].find(i=>typeof i=="string"&&i);return t&&o?o:rn(r,e.state)}case"lock":case"camera":return rn(r,e.state);case"binary":return["door","window","opening","garage_door"].includes(n.device_class)?Te(r,e.state==="on"?"state_open":"state_closed"):Te(r,e.state==="on"?"state_detected":"state_clear");case"sensor":{let t=Number(e.state),o=n.unit_of_measurement??"",i=r?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(t)?`${J(r,t,i)}${o?` ${o}`:""}`:e.state}default:return""}}function rn(r,e){let n=`state_${e}`,t=A(r,n);return t===n?e:t}function Vo(r,e){let n=[];for(let t of e.floors)for(let o of t.placements){let i=F(o.entity_id),s=r.states[o.entity_id];if(!i||!s)continue;let a=t.rooms.find(c=>c.points.length>=3&&G([o.x,o.z],c.points))??null,l=a?.area_id?r.areas?.[a.area_id]?.name:void 0;n.push({id:o.entity_id,floorId:t.id,roomId:a?.id??null,x:o.x,z:o.z,y:o.y??ot(i,t.height,o.mount??null),lamp:i==="light"?o.mount??"ceiling":null,model:i==="camera"?o.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:i==="camera"?Js(r,o.entity_id):void 0,fov:o.fov??void 0,reach:o.reach??void 0,tilt:o.tilt??void 0,rotation:o.rotation??0,icon:o.icon?nn(o.icon):$t(i),cone:i==="camera"&&o.cone===!1?!1:void 0,name:o.name||q(r,o.entity_id,l),ownName:o.name||void 0,showName:!!o.show_name,text:pe(r,s),active:Ae(s),unavailable:N(s),glow:i==="light"?rt(s):null,show:o.marker??void 0,fixed:!!o.locked})}return n}function Ko(r,e){let n=`${e} ${String(r.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(n)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(n)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(n)?"pet":"motion"}function Js(r,e){return Ge(r,e).some(n=>r.states[n]?.state==="on")}function Ge(r,e){let n=r.entities?.[e]?.device_id;return n?Object.values(r.entities??{}).filter(t=>t.device_id===n&&t.entity_id.startsWith("binary_sensor.")).map(t=>t.entity_id).filter(t=>["motion","occupancy","presence"].includes(String(r.states[t]?.attributes.device_class))):[]}function Go(r){return r.floors.flatMap(e=>e.placements.map(n=>n.entity_id))}function xe(r,e){r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function Uo(r,e){let n=e.slice(0,e.indexOf("."));return r.callService(n,"toggle",{entity_id:e})}var ve=he`
  :host {
    --fp3d-bg: #070b14;
    --fp3d-bg2: #0d1424;
    --fp3d-chrome: rgba(14, 21, 38, 0.86);
    --fp3d-chrome-solid: #0f1729;
    --fp3d-line: rgba(120, 170, 255, 0.16);
    --fp3d-text: #e6eefc;
    --fp3d-muted: #8a9bb8;
    --fp3d-accent: #37e0ff;
    --fp3d-accent-text: #041018;
    --fp3d-soft: #5b7cff;
    --fp3d-warm: #ffb547;
    --fp3d-danger: #ff6b8b;
    --fp3d-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: dark;
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
`,Fe=he`
  .fp3d-seg {
    display: inline-flex;
    padding: 3px;
    gap: 2px;
    border-radius: 999px;
    background: var(--fp3d-chrome);
    box-shadow: var(--fp3d-shadow);
  }
  .fp3d-seg button,
  .fp3d-chip {
    font: inherit;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--fp3d-muted);
    padding: 7px 13px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 34px;
  }
  .fp3d-seg button[aria-pressed="true"],
  .fp3d-chip[aria-pressed="true"] {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
  }
  .fp3d-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  .fp3d-chip {
    background: var(--fp3d-chrome);
    color: var(--fp3d-text);
    box-shadow: var(--fp3d-shadow);
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--fp3d-accent);
    outline-offset: 2px;
  }
  .fp3d-btn {
    font: inherit;
    font-weight: 600;
    border: 1px solid var(--fp3d-line);
    background: rgba(55, 224, 255, 0.06);
    color: var(--fp3d-text);
    border-radius: 10px;
    padding: 7px 12px;
    cursor: pointer;
    min-height: 34px;
  }
  .fp3d-btn:hover {
    border-color: var(--fp3d-accent);
  }
  .fp3d-btn.fp3d-danger {
    color: var(--fp3d-danger);
  }
  .fp3d-btn.fp3d-primary {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
    border-color: transparent;
  }
  .fp3d-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-field input,
  .fp3d-field select {
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
    min-width: 0;
  }
  .fp3d-field input[type="range"] {
    padding: 0;
    accent-color: var(--fp3d-accent);
  }
  .fp3d-field select option {
    background: var(--fp3d-chrome-solid);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var ea=4,ta=3e3,na=8,ra=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],lt=r=>m`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${tn(r)} />
  </svg>`,on={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},Qn=r=>m`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,Jn=class extends le{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},confirmEntities:{attribute:!1},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},ta)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,n){return A(this.hass,e,n)}call(e,n,t){this.hass.callService(e,n,t)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return q(this.hass,e,this.areaName)}nameButton(e){return m`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>xe(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,n,t){let o=()=>{this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||t()};return m`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${n?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${N(e)}
      @click=${o}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return b;let n=ie(this.hass,e.area_id),t=this.memo,{shown:o,more:i}=t&&t.entities===this.hass.entities&&t.floor===this.floor&&t.room===e?t:this.memo={entities:this.hass.entities,floor:this.floor,room:e,...this.floor?Ro(this.hass,this.floor,e):{shown:n,more:[]}},s=Gn(this.hass,i).map(S=>S.primary),a=s.length,l=this._showAll?[...o,...s]:o,c=S=>l.filter($=>S.includes(F($))).map($=>this.hass.states[$]),d=c(["light"]),h=c(["cover"]),u=c(["climate"]),_=c(["media"]),g=c(["switch","fan","lock"]),p=c(["sensor","binary"]),f=c(["camera"]);this.hasCameras=f.length>0;let v=c(["scene","script"]),w=this.facts(u),R=d.filter(S=>S.state==="on");return m`<section class="fp3d-rp" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${w.length?m`<p class="fp3d-rp-facts">${w.join(" \xB7 ")}</p>`:b}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?b:m`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:m`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${d.length?this.section("panel_lights",d.map(S=>this.lightRow(S)),m`${R.length<d.length?m`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:d.filter(S=>!N(S)).map(S=>S.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:b}${R.length?m`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:R.map(S=>S.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:b}`):b}
        ${h.length?this.section("panel_covers",h.map(S=>this.coverRow(S)),h.length>1?m`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:h.filter(S=>!N(S)).map(S=>S.entity_id)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:h.filter(S=>!N(S)).map(S=>S.entity_id)})}>
                      ${this.t("panel_all_close")}
                    </button>`:b):b}
        ${u.length?this.section("panel_climate",u.map(S=>this.climateRow(S))):b}
        ${_.length?this.section("panel_media",_.map(S=>this.mediaRow(S))):b}
        ${g.length?this.section("panel_switches",g.map(S=>this.switchRow(S))):b}
        ${f.length?this.section("panel_cameras",f.map(S=>this.cameraTile(S))):b}
        ${p.length?this.section("panel_sensors",p.map(S=>this.sensorRow(S))):b}
        ${v.length?this.section("panel_scenes",[m`<div class="fp3d-rp-scenes">
                  ${v.map(S=>m`<button
                      class="fp3d-btn"
                      ?disabled=${N(S)}
                      @click=${()=>this.call(F(S.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:S.entity_id})}
                    >
                      ${this.name(S.entity_id)}
                    </button>`)}
                </div>`]):b}
        ${a?m`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:b}
      </div>
    </section>`}facts(e){let n=[],t=this.room,o=(l,c)=>{let d=Ee(this.hass,this.floor,t,l);if(d===null)return null;if(l==="temperature")return`${J(this.hass,nt(this.hass,d),1)} ${we(this.hass)}`;let h=Vn(this.hass,this.floor,t,l)[0],u=this.hass.states[h]?.attributes.unit_of_measurement??c;return`${J(this.hass,d,1)} ${u}`},i=e.find(l=>typeof l.attributes.current_temperature=="number"),s=o("temperature","\xB0C");s?n.push(s):i&&t.climate?.temperature!=="none"&&n.push(`${J(this.hass,i.attributes.current_temperature,1)} ${we(this.hass)}`);let a=o("humidity","%");return a&&n.push(a),n}section(e,n,t=b){return m`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${t}</div>
      ${n}
    </div>`}lightRow(e){let n=e.attributes,t=e.state==="on",o=n.supported_color_modes??[],i=o.some(u=>u!=="onoff"),s=o.includes("color_temp"),a=o.some(u=>["hs","rgb","rgbw","rgbww","xy"].includes(u)),l=typeof n.brightness=="number"?Math.round(n.brightness/255*100):100,c=n.min_color_temp_kelvin??2200,d=n.max_color_temp_kelvin??6500,h=e.entity_id;return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t?"fp3d-rp-on":""}">${lt("light")}</span>
      ${this.nameButton(h)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,t,()=>this.call("light","toggle",{entity_id:h}))}
      ${t&&i?m`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${u=>this.call("light","turn_on",{entity_id:h,brightness_pct:Number(u.target.value)})}
          /></label>`:b}
      ${t&&s?m`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${d}
              step="50"
              .value=${String(n.color_temp_kelvin??c)}
              @change=${u=>this.call("light","turn_on",{entity_id:h,color_temp_kelvin:Number(u.target.value)})}
          /></label>`:b}
      ${t&&a?m`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${ra.map(u=>m`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${u.join(",")})"
                aria-label="rgb(${u.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:h,rgb_color:u})}
              ></button>`)}
          </div>`:b}
    </div>`}coverRow(e){let n=e.attributes,t=n.supported_features??0,o=e.entity_id,i=N(e);return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${lt("cover")}</span>
      ${this.nameButton(o)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(o)&&this.call("cover","open_cover",{entity_id:o})}>${this.t("cover_open")}</button>
        ${t&na?m`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","stop_cover",{entity_id:o})}>${this.t("cover_stop")}</button>`:b}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(o)&&this.call("cover","close_cover",{entity_id:o})}>${this.t("cover_close")}</button>
      </div>
      ${t&ea&&typeof n.current_position=="number"?m`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(n.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:o,position:Number(s.target.value)})}
          /></label>`:b}
      ${t&128&&typeof n.current_tilt_position=="number"?m`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(n.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:o,tilt_position:Number(s.target.value)})}
          /></label>`:t&48?m`<div class="fp3d-rp-buttons">
              ${t&16?m`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:o})}>${this.t("cover_tilt_open")}</button>`:b}
              ${t&32?m`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:o})}>${this.t("cover_tilt_close")}</button>`:b}
            </div>`:b}
    </div>`}climateRow(e){let n=e.attributes,t=e.entity_id,o=typeof n.temperature=="number"?n.temperature:null,i=n.target_temp_step??.5,s=n.min_temp??5,a=n.max_temp??30,l=n.hvac_modes??[],c=d=>this.call("climate","set_temperature",{entity_id:t,temperature:Math.min(a,Math.max(s,Math.round(d/i)*i))});return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n.hvac_action==="heating"?"fp3d-rp-on":""}">${lt("climate")}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${o!==null?m`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(o-i)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${J(this.hass,o,1)} ${we(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(o+i)}>+</button>
          </div>`:b}
      ${l.length>1?m`<div class="fp3d-rp-chips">
            ${l.map(d=>m`<button
                class="fp3d-chip"
                aria-pressed=${e.state===d}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:t,hvac_mode:d})}
              >
                ${this.stateLabel(d)}
              </button>`)}
          </div>`:b}
    </div>`}stateOf(e,n=pe(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let t=F(e.entity_id);return e.state==="unknown"&&t!=="sensor"&&t!=="binary"?"":n}stateLabel(e){let n=`state_${e}`,t=this.t(n);return t===n?e:t}mediaRow(e){let n=e.attributes,t=e.entity_id,o=N(e)||e.state==="off",i=[n.media_title,n.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${lt("media")}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${i?m`<p class="fp3d-rp-media fp3d-rp-wide">${i}</p>`:b}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${o} @click=${()=>this.call("media_player","media_previous_track",{entity_id:t})}>
          ${Qn(on.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${N(e)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:t})}>
          ${Qn(e.state==="playing"?on.pause:on.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${o} @click=${()=>this.call("media_player","media_next_track",{entity_id:t})}>
          ${Qn(on.next)}
        </button>
      </div>
      ${typeof n.volume_level=="number"?m`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(n.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:t,volume_level:Number(s.target.value)/100})}
          /></label>`:b}
    </div>`}switchRow(e){let n=e.entity_id,t=F(n),o=n.slice(0,n.indexOf(".")),i=t==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>t==="lock"?this.call("lock",i?"lock":"unlock",{entity_id:n}):this.call(o,"toggle",{entity_id:n});return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${lt(t)}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,i,s)}
    </div>`}cameraTile(e){let n=e.attributes.entity_picture,t=n&&!N(e)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this._tick}`:null,o=this.floor?.placements.some(i=>i.entity_id===e.entity_id);return m`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>xe(this,e.entity_id)}>
        ${t?m`<img src=${t} alt=${this.name(e.entity_id)} loading="lazy" />`:m`<span class="fp3d-rp-note">${pe(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${o?m`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${V("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:b}
    </div>`}sensorRow(e){let n=F(e.entity_id),t=n==="binary"&&e.state==="on";return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t?"fp3d-rp-on":""}">${lt(n)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[ve,Fe,he`
      :host {
        display: block;
      }
      .fp3d-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        box-shadow: var(--fp3d-shadow);
        overflow: hidden;
      }
      .fp3d-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      h2 {
        margin: 0;
        font: 700 21px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-rp-facts {
        margin: 2px 0 0;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      @media (pointer: coarse) {
        .fp3d-rp-close {
          width: 40px;
          height: 40px;
        }
        .fp3d-rp-swatch {
          width: 36px;
          height: 36px;
        }
        .fp3d-rp-small {
          min-height: 36px;
        }
      }
      .fp3d-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.06);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .fp3d-rp-note {
        color: var(--fp3d-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .fp3d-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-row:last-child {
        border-bottom: none;
      }
      .fp3d-rp-row > :nth-child(n + 5),
      .fp3d-rp-row > .fp3d-rp-wide {
        grid-column: 2 / -1;
      }
      .fp3d-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--fp3d-muted);
        background: rgba(91, 124, 255, 0.12);
      }
      .fp3d-rp-on {
        color: #2a1a00;
        background: var(--fp3d-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .fp3d-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--fp3d-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rp-state {
        font-size: 12.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-rp-row > .fp3d-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .fp3d-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      .fp3d-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .fp3d-switch[aria-checked="true"] {
        background: var(--fp3d-warm);
      }
      .fp3d-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .fp3d-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .fp3d-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-slider input {
        width: 100%;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-rp-ct input {
        accent-color: var(--fp3d-warm);
      }
      .fp3d-rp-swatches,
      .fp3d-rp-buttons,
      .fp3d-rp-chips,
      .fp3d-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .fp3d-rp-camera {
        position: relative;
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin: 6px 0;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        overflow: hidden;
        background: #05080f;
        cursor: pointer;
      }
      .fp3d-rp-camera img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fp3d-rp-camera-wrap {
        position: relative;
      }
      .fp3d-rp-look {
        position: absolute;
        right: 8px;
        bottom: 12px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        background: rgba(7, 11, 20, 0.8);
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-rp-camera-name {
        position: absolute;
        left: 8px;
        bottom: 6px;
        padding: 2px 8px;
        border-radius: 8px;
        background: rgba(7, 11, 20, 0.75);
        color: var(--fp3d-text);
        font-size: 12px;
        font-weight: 600;
      }
      .fp3d-rp-more {
        justify-self: start;
      }
      .fp3d-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .fp3d-rp-stepper small {
        color: var(--fp3d-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .fp3d-rp-stepper .fp3d-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .fp3d-rp-chips .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .fp3d-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",Jn);var oa={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function Mt(r,e){return e&&r.states[e]?e:Object.keys(r.states).filter(n=>n.startsWith("weather.")).sort()[0]??null}function qo(r,e){let n=e?r.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let t=oa[n.state];if(!t)return null;let o=n.attributes,i=t.cloud??0;typeof o.cloud_coverage=="number"&&(i=Math.min(1,Math.max(0,o.cloud_coverage/100)));let s=t.wind??0;if(typeof o.wind_speed=="number"){let a=o.wind_speed_unit==="m/s"?o.wind_speed*3.6:o.wind_speed_unit==="mph"?o.wind_speed*1.609:o.wind_speed;s=Math.max(s,Math.min(1,a/60))}return{entity:n.entity_id,condition:n.state,rain:t.rain??0,snow:t.snow??0,fog:t.fog??0,cloud:i,wind:s,lightning:!!t.lightning}}function jo(r,e){let n=new Set(e??co);return{...r,rain:n.has("rain")?r.rain:0,snow:n.has("snow")?r.snow:0,fog:n.has("fog")?r.fog:0,cloud:n.has("clouds")?r.cloud:0,lightning:n.has("lightning")&&r.lightning,sky:n.has("sky")}}var ia=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),Zo={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function Xo(r,e,n){let t=[];for(let s of e.floors)for(let a of s.rooms){let l=ie(r,a.area_id).filter(c=>c.startsWith("binary_sensor.")&&!!Zo[String(r.states[c]?.attributes.device_class)]);l.length&&t.push({floorId:s.id,roomId:a.id,sensors:l})}let o=Object.keys(r.states),i=e.settings.rain_warning===!1?null:Mt(r,n??e.settings.weather_entity);return{rooms:t,alarms:o.filter(s=>s.startsWith("alarm_control_panel.")),weather:i}}function Yo(r){return[...r.rooms.flatMap(e=>e.sensors),...r.alarms,...r.weather?[r.weather]:[]]}function Qo(r,e,n,t){let o=[];for(let s of n.rooms)for(let a of s.sensors){let l=r.states[a];l?.state==="on"&&o.push({kind:Zo[String(l.attributes.device_class)],entity:a,roomId:s.roomId,floorId:s.floorId})}if(!!n.weather&&ia.has(r.states[n.weather]?.state??""))for(let s of e.floors)for(let a of s.openings){if(a.type!=="window")continue;let l=t.get(a.id);if(!l)continue;let c=Re(r,l,"window");c.open<.5&&c.tilt<.5&&c.open2<.5&&c.tilt2<.5||o.push({kind:"window_rain",entity:l.contact??l.tilt??l.contact2??a.id,roomId:a.room_id,floorId:s.id})}for(let s of n.alarms){let a=r.states[s]?.state;a==="triggered"?o.push({kind:"alarm",entity:s,roomId:null,floorId:null}):a==="pending"&&o.push({kind:"alarm_pending",entity:s,roomId:null,floorId:null})}return o}function Jo(r){switch(r){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];default:return[1,.2,.25]}}function er(r,e,n){let t=n.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===n.roomId):null,o=r?q(r,n.entity):n.entity,i=A(r,`alert_${n.kind}`,{name:o});return t?`${t.name} \xB7 ${i}`:i}var _e=(r,e)=>[r[0]-e[0],r[1]-e[1]],ct=(r,e)=>[r[0]+e[0],r[1]+e[1]],Pe=(r,e)=>[r[0]*e,r[1]*e],tr=(r,e)=>r[0]*e[0]+r[1]*e[1],zt=(r,e)=>r[0]*e[1]-r[1]*e[0],Et=r=>Math.hypot(r[0],r[1]),At=r=>{let e=Et(r)||1;return[r[0]/e,r[1]/e]},ei=r=>[-r[1],r[0]],ti=r=>[r[1],-r[0]];function dt(r,e,n=[]){let t=e.eps??.005,o=[],i=r.filter(x=>!lo(x)),s=n.filter(x=>Math.hypot(x.b[0]-x.a[0],x.b[1]-x.a[1])>.05),a=[],l=x=>{for(let M=0;M<a.length;M++)if(Math.abs(a[M][0]-x[0])<=t&&Math.abs(a[M][1]-x[1])<=t)return M;return a.push([x[0],x[1]]),a.length-1},c=[];for(let x of i){let M=x.points;if(M.length<3||Math.abs(ze(M))<1e-6)continue;let k=ze(M)>0,E=M.map(l);for(let C=0;C<M.length;C++){let L=E[C],B=E[(C+1)%M.length];L!==B&&c.push(k?{u:L,v:B,room:x.id,edge:C,forward:!0}:{u:B,v:L,room:x.id,edge:C,forward:!1})}}let d=s.map(x=>[l(x.a),l(x.b)]),h=new Set;for(let x of i){let M=x.points;M.length<3||(x.wall_splits??[]).forEach((k,E)=>{if(!k||E>=M.length)return;let C=M[E],L=_e(M[(E+1)%M.length],C),B=Et(L);for(let P of k)P>t&&P<B-t&&h.add(l(ct(C,Pe(L,P/B))))})}let u=[];for(let x of c){let M=a[x.u],k=a[x.v],E=_e(k,M),C=Et(E),L=Pe(E,1/C),B=[];for(let O=0;O<a.length;O++){if(O===x.u||O===x.v)continue;let ee=_e(a[O],M),se=tr(ee,L);se<=t||se>=C-t||Math.abs(zt(L,ee))<=t&&B.push({t:se,id:O})}B.sort((O,ee)=>O.t-ee.t);let P=[{t:0,id:x.u},...B,{t:C,id:x.v}];for(let O=0;O+1<P.length;O++){let ee=P[O],se=P[O+1],ue=x.forward?ee.t:C-se.t,te=x.forward?se.t:C-ee.t;u.push({u:ee.id,v:se.id,room:x.room,edge:x.edge,t0:ue,t1:te})}}let _=new Map;for(let x of u){let M=x.u<x.v?`${x.u}-${x.v}`:`${x.v}-${x.u}`,k=_.get(M);k||_.set(M,k=[]),k.push(x)}let g=x=>({room_id:x.room,edge:x.edge,t0:x.t0,t1:x.t1}),p=new Map;for(let x of u){let M=`${x.room}:${x.edge}`;p.set(M,[...p.get(M)??[],x.t0].sort((k,E)=>k-E))}let f=x=>{let M=i.find(E=>E.id===x.room)?.wall_heights?.[x.edge];if(!Array.isArray(M))return M;let k=p.get(`${x.room}:${x.edge}`)??[];return M[k.indexOf(x.t0)]??null},v=x=>{let M=x.map(f).filter(k=>typeof k=="number"&&k>0);return M.length?Math.min(...M):void 0},w=x=>{let M=x.map(k=>i.find(E=>E.id===k.room)?.wall_thickness?.[k.edge]).filter(k=>typeof k=="number"&&k>0);return M.length?Math.max(...M):void 0},R=x=>x.some(M=>f(M)===0),S=[],$=[];for(let x of _.values()){let M=x[0],k=x.find(E=>E!==M&&E.u===M.v&&E.v===M.u&&E.room!==M.room);for(let E of x)E!==M&&E!==k&&E.room!==M.room&&o.push(`overlap:${M.room}:${E.room}`);if(R(k?[M,k]:[M])){k&&S.push([M.room,k.room]);continue}if(k){let E=w([M,k])??e.interior;$.push({a:M.u,b:M.v,left:E/2,right:E/2,exterior:!1,roomLeft:M.room,roomRight:k.room,sources:[g(M),g(k)],height:v([M,k])})}else $.push({a:M.u,b:M.v,left:0,right:w([M])??e.exterior,exterior:!0,roomLeft:M.room,roomRight:null,sources:[g(M)],height:v([M])})}s.forEach((x,M)=>{let[k,E]=d[M];if(k===E)return;let C=[(x.a[0]+x.b[0])/2,(x.a[1]+x.b[1])/2],L=r.find(O=>O.points.length>=3&&G(C,O.points))?.id??null,B=(x.thickness??e.interior)/2,P=typeof x.height=="number"&&x.height>0?x.height:void 0;$.push({free:x.id,a:k,b:E,left:B,right:B,exterior:!1,roomLeft:L,roomRight:L,sources:[],height:P})}),$=aa($,a,h);let U=ca($,a);return{walls:$.map((x,M)=>{let k=a[x.a],E=a[x.b],C=U.get(`${M}:a`),L=U.get(`${M}:b`),B=da([C.right,L.left,E,L.right,C.left,k],1e-6);return{id:sa(k,E),a:[k[0],k[1]],b:[E[0],E[1]],left:x.left,right:x.right,exterior:x.exterior,roomLeft:x.roomLeft,roomRight:x.roomRight,sources:x.sources,footprint:B,...x.free?{free:x.free}:{},...x.height!==void 0?{height:x.height}:{}}}),warnings:[...new Set(o)],open:S}}function sa(r,e){let n=i=>Math.round(i*100),[t,o]=r[0]<e[0]||r[0]===e[0]&&r[1]<=e[1]?[r,e]:[e,r];return`w_${n(t[0])}_${n(t[1])}_${n(o[0])}_${n(o[1])}`}function ni(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function aa(r,e,n=new Set){let t=r.slice(),o=!0;for(;o;){o=!1;let i=new Map;t.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=i.get(l);c||i.set(l,c=[]),c.push(a)}});for(let[s,a]of i){if(a.length!==2||n.has(s))continue;let l=t[a[0]],c=t[a[1]];if(l.b!==s&&(l=ni(l)),c.a!==s&&(c=ni(c)),l.a===c.b)continue;let d=At(_e(e[l.b],e[l.a])),h=At(_e(e[c.b],e[c.a]));if(Math.abs(zt(d,h))>1e-6||tr(d,h)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let u={...l,b:c.b,sources:la(l.sources,c.sources)},_=t.filter((g,p)=>p!==a[0]&&p!==a[1]);_.push(u),t.length=0,t.push(..._),o=!0;break}}return t}function la(r,e){let n=r.map(t=>({...t}));for(let t of e){let o=n.find(i=>i.room_id===t.room_id&&i.edge===t.edge&&(Math.abs(i.t1-t.t0)<1e-6||Math.abs(t.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,t.t0),o.t1=Math.max(o.t1,t.t1)):n.push({...t})}return n}function ca(r,e){let n=new Map;r.forEach((o,i)=>{let s=At(_e(e[o.b],e[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:Pe(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=n.get(l);d||n.set(l,d=[]),d.push(c)}});let t=new Map;for(let[o,i]of n){let s=e[o];i.sort((c,d)=>c.angle-d.angle);let a=c=>({left:ct(s,Pe(ei(c.d),c.left)),right:ct(s,Pe(ti(c.d),c.right))});for(let c of i)t.set(c.key,a(c));if(i.length<2)continue;let l=4*Math.max(...i.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<i.length;c++){let d=i[c],h=i[(c+1)%i.length],u=ct(s,Pe(ei(d.d),d.left)),_=ct(s,Pe(ti(h.d),h.right)),g=zt(d.d,h.d);if(Math.abs(g)<1e-4)continue;let p=zt(_e(_,u),h.d)/g,f=ct(u,Pe(d.d,p));Et(_e(f,s))>l||(t.get(d.key).left=f,t.get(h.key).right=f)}}return t}function da(r,e){let n=r.filter((o,i)=>Et(_e(o,r[(i+1)%r.length]))>e),t=!0;for(;t&&n.length>3;){t=!1;for(let o=0;o<n.length;o++){let i=n[(o+n.length-1)%n.length],s=n[o],a=n[(o+1)%n.length],l=_e(s,i),c=_e(a,s);if(Math.abs(zt(At(l),At(c)))<1e-7&&tr(l,c)>0){n=n.filter((d,h)=>h!==o),t=!0;break}}}return n}var nr=Math.PI/180;function sn(r){let e=Math.min(r.x0,r.x1),n=Math.max(r.x0,r.x1),t=Math.min(r.z0,r.z1),o=Math.max(r.z0,r.z1);return r.axis==="x"?{u0:e,u1:n,w:o-t,at:(i,s)=>[i,r.flip?o-s:t+s]}:{u0:t,u1:o,w:n-e,at:(i,s)=>[r.flip?n-s:e+s,i]}}function ri(r){let e=sn(r).w,n=r.eave_a,t=r.eave_b,o=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*nr),i=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*nr);if(r.shape==="flat"||r.shape==="parapet")return{vr:e/2,rh:n,y:()=>n};if(r.shape==="pent")return{vr:e,rh:n+e*o,y:l=>n+l*o};if(r.shape==="mansard"){let l=ua(e,n,t,o,i);return{vr:l.vr,rh:l.rh,y:l.y}}let s=o+i>1e-6?Math.min(e,Math.max(0,(t-n+e*i)/(o+i))):e/2,a=n+s*o;return{vr:s,rh:a,y:l=>l<=s?n+l*o:t+(e-l)*i}}var Rt=Math.tan(30*nr);function ua(r,e,n,t,o){let i=Math.min(r*.3,t>1e-6?2.4/t:r*.3),s=Math.min(r*.3,o>1e-6?2.4/o:r*.3),a=e+i*t,l=n+s*o,c=Math.min(r-s,Math.max(i,(l-a+Rt*(r-s+i))/(2*Rt))),d=a+(c-i)*Rt;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:d,y:u=>u<=i?e+u*t:u<=c?a+(u-i)*Rt:u<=r-s?l+(r-s-u)*Rt:n+(r-u)*o}}function oi(r,e,n){let t=sn(e),o=r.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>e.base+.05)),i=c=>c.some(d=>o.some(h=>G(d,h.points))),s=.35,a=[.15,.5,.85].map(c=>t.u0+(t.u1-t.u0)*c),l=[.15,.5,.85].map(c=>t.w*c);return{a:i(a.map(c=>t.at(c,-s)))?0:n,b:i(a.map(c=>t.at(c,t.w+s)))?0:n,u0:i(l.map(c=>t.at(t.u0-s,c)))?0:n,u1:i(l.map(c=>t.at(t.u1+s,c)))?0:n}}var ln=Math.PI/180,ha=1.13,pa=1.72,rr=.025;var ii=.25;function Ft(r,e){let n=[];for(let t of r.floors){if(e&&t.id!==e)continue;let{walls:o}=dt(t.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},t.walls??[]);for(let i of o){if(!i.exterior&&!i.free)continue;let s=i.b[0]-i.a[0],a=i.b[1]-i.a[1],l=Math.hypot(s,a);if(l<1.2)continue;let c=a/l,d=-s/l,h=Math.min(t.height,i.height??t.height),u=(_,g,p,f)=>n.push({key:_,section:null,side:"top",flat:!1,o:g,eu:p,es:[0,1,0],n:f,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[f[0],f[2]],wall:{floorId:t.id}});u(`wall:${t.id}:${i.id}`,[i.a[0]+c*i.right,t.elevation,i.a[1]+d*i.right],[s/l,0,a/l],[c,0,d]),i.free&&u(`wall:${t.id}:${i.id}:back`,[i.b[0]-c*i.left,t.elevation,i.b[1]-d*i.left],[-s/l,0,-a/l],[-c,0,-d])}}return n}var si="ground";function fa(r){return[...r.floors.filter(n=>n.rooms.some(t=>t.points.length>=3))].sort((n,t)=>n.elevation-t.elevation)[0]??r.floors[0]??null}function ma(r,e){let n=(e.rotation??0)*Math.PI/180,t=[Math.cos(n),0,Math.sin(n)],o=[-Math.sin(n),0,Math.cos(n)],i=fa(r),s=t[0]*e.u+o[0]*e.v,a=t[2]*e.u+o[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:Ne(i,s,a)):e.base??0;return{key:si,section:null,side:"top",flat:!0,o:[0,l,0],eu:t,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function qe(r,e,n=Pt(r)){return e.face===si?ma(r,e):e.face.startsWith("wall:")?Ft(r,e.face.split(":")[1]).find(t=>t.key===e.face)??null:n.find(t=>t.key===e.face)??null}function or(r){return r.floors.filter(n=>n.rooms.some(t=>t.points.length>=3)).sort((n,t)=>t.elevation-n.elevation)[0]??null}function Pt(r){let e=r.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>_a(w,oi(r,w,w.overhang??e.overhang)));let n=or(r);if(!n)return[];let t=n.rooms.flatMap(w=>w.points.map(R=>R[0])),o=n.rooms.flatMap(w=>w.points.map(R=>R[1])),i=r.settings.wall_exterior+e.overhang,s=Math.min(...t)-i,a=Math.max(...t)+i,l=Math.min(...o)-i,c=Math.max(...o)+i,d=n.elevation+n.height;if(e.type==="flat")return[ai("main",null,s,l,a,c,d+ii)];let h=a-s>=c-l,u=e.ridge==="short"?!h:h,_=(u?c-l:a-s)/2,g=_*Math.tan(e.pitch*ln),p=(w,R,S)=>u?[w,d+S,(l+c)/2+R]:[(s+a)/2+R,d+S,w],[f,v]=u?[s,a]:[l,c];return[-1,1].map(w=>an(`main:${w<0?"a":"b"}`,null,w<0?"a":"b",p(f,w*_,0),p(v,w*_,0),p(f,0,g),e.pitch,()=>[0,v-f]))}function _a(r,e){let n=sn(r),t=ri(r),o=(p,f,v)=>{let[w,R]=n.at(p,f);return[w,v,R]},i=Math.max(0,e.a),s=Math.max(0,e.b),a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),c=l-a;if(r.shape==="flat"||r.shape==="parapet"){let p=n.at(a,-i),f=n.at(l,n.w+s);return[ai(r.id,r.id,Math.min(p[0],f[0]),Math.min(p[1],f[1]),Math.max(p[0],f[0]),Math.max(p[1],f[1]),r.eave_a+ii)]}if(r.shape==="pent")return[an(`${r.id}:a`,r.id,"a",o(a,-i,t.y(-i)),o(l,-i,t.y(-i)),o(a,n.w+s,t.y(n.w+s)),r.pitch_a,()=>[0,c])];let d=r.shape==="hip"||r.shape==="pyramid",h=r.shape==="pyramid"?(n.u1-n.u0)/2:d?Math.min((n.u1-n.u0)/2,Math.min(t.vr,n.w-t.vr)||n.w/2):0,u=d?n.u0+h-a:0,_=d?l-(n.u1-h):0,g=[];if(t.vr>.3){let p=Math.hypot(t.vr+i,t.rh-t.y(-i));g.push(an(`${r.id}:a`,r.id,"a",o(a,-i,t.y(-i)),o(l,-i,t.y(-i)),o(a,t.vr,t.rh),r.pitch_a,f=>[u*(f/p),c-_*(f/p)]))}if(n.w-t.vr>.3){let p=Math.hypot(n.w+s-t.vr,t.rh-t.y(n.w+s));g.push(an(`${r.id}:b`,r.id,"b",o(l,n.w+s,t.y(n.w+s)),o(a,n.w+s,t.y(n.w+s)),o(l,t.vr,t.rh),r.pitch_b,f=>[_*(f/p),c-u*(f/p)]))}if(d){let p=t.y(-i),f=t.y(n.w+s),v=[[`${r.id}:c`,"c",o(a,n.w+s,f),o(a,-i,p),o(n.u0+h,t.vr,t.rh)],[`${r.id}:d`,"d",o(l,-i,p),o(l,n.w+s,f),o(n.u1-h,t.vr,t.rh)]];for(let[w,R,S,$,U]of v){let W=ga(w,r.id,R,S,$,U);W&&g.push(W)}}return g}function ga(r,e,n,t,o,i){let s=Tt(Ue(o,t));if(s<.3)return null;let a=Ie(Ue(o,t)),l=Ue(i,t),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=Tt(d);if(h<.3)return null;let u=Ie(d),_=Ie(di(a,u));_[1]<0&&(_=[-_[0],-_[1],-_[2]]);let g=Ie([-u[0],0,-u[2]]),p=Math.atan2(u[1],Math.hypot(u[0],u[2]))/ln;return{key:r,section:e,side:n,flat:!1,o:t,eu:a,es:u,n:_,lu:s,ls:h,pitch:p,span:v=>{let w=Math.min(1,Math.max(0,v/h));return[c*w,s-(s-c)*w]},facing:[g[0],g[2]]}}function an(r,e,n,t,o,i,s,a){let l=Ie(Ue(o,t)),c=Ie(Ue(i,t)),d=Ie(di(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let h=Ie([-c[0],0,-c[2]]);return{key:r,section:e,side:n,flat:!1,o:t,eu:l,es:c,n:d,lu:Tt(Ue(o,t)),ls:Tt(Ue(i,t)),pitch:s,span:a,facing:[h[0],h[2]]}}function ai(r,e,n,t,o,i,s){let a=o-n>=i-t,l=a?o-n:i-t,c=a?i-t:o-n;return{key:`${r}:top`,section:e,side:"top",flat:!0,o:[n,s,t],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function li(r){let e=r.module_w||ha,n=r.module_h||pa;return r.portrait===!1?[n,e]:[e,n]}function ba(r){return r.layout?.length?r.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function ci(r,e){return r.flat?Math.min(45,Math.max(0,e.tilt??15))*ln:r.wall?Math.min(90,Math.max(0,e.tilt??0))*ln:0}function je(r,e){let[n,t]=li(e),o=ba(e),i=Math.max(1,...o),a=(o.length-1)*wa(r,e)+t*Math.cos(ci(r,e));return[i*n+(i-1)*rr,a]}function wa(r,e){let[,n]=li(e),t=ci(r,e);return r.wall?n*Math.cos(t)+rr:r.flat?n*Math.cos(t)+Math.max(.3,2*n*Math.sin(t)):n+rr}function Ue(r,e){return[r[0]-e[0],r[1]-e[1],r[2]-e[2]]}function Tt(r){return Math.hypot(r[0],r[1],r[2])}function Ie(r){let e=Tt(r)||1;return[r[0]/e,r[1]/e,r[2]/e]}function di(r,e){return[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]]}function ui(r,e){let[n,t]=je(r,e);return[r.o[0]+r.eu[0]*(e.u+n/2)+r.es[0]*(e.v+t/2),r.o[2]+r.eu[2]*(e.u+n/2)+r.es[2]*(e.v+t/2)]}var me=.03,cn=r=>r&&r!=="none"?r:null;function un(r,e=n=>cn(n.power)){let n={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let t of r.floors)for(let o of t.furniture){let i=e(o);if(o.type==="meter")n.grid??=i,n.gridExport??=cn(o.export);else if(o.type==="inverter"&&i&&!n.solar.includes(i))n.solar.push(i);else if(o.type==="home_battery"){i&&!n.battery.includes(i)&&n.battery.push(i);let s=cn(o.charge);s&&!n.charge.includes(s)&&n.charge.push(s),(i||s)&&n.batteries.push({power:i,charge:s});let a=cn(o.soc);a&&!n.soc.includes(a)&&n.soc.push(a)}}return n}function sr(r){for(let e of r.floors){let n=e.furniture.find(t=>t.type==="meter");if(n)return{floor_id:e.id,x:n.x,z:n.z}}return r.energy.meter}var va=.07;function oe(r,e=!1){if(!r)return null;let n=Number(r.state);if(!Number.isFinite(n))return null;let t=String(r.attributes.unit_of_measurement??"W"),o=t==="kW"?n*1e3:t==="MW"?n*1e6:n;return e?-o:o}function ya(r,e){return e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power"}function ar(r,e){if(ya(r,e))return e;let n=r.entities?.[e]?.device_id;return n?Kn(r,n).find(t=>t!==e)??null:null}function _i(r,e){let n=e.energy,t=new Set([n.grid,n.solar,n.battery].filter(Boolean)),o=[],i=new Set;for(let s of e.floors)for(let a of s.placements){let l=ar(r,a.entity_id);!l||t.has(l)||i.has(l)||(i.add(l),o.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,oe(r.states[l])??0)}))}return o}function gi(r,e,n,t=un(e)){let o=e.energy,i=o.grid??t.grid,s=i?oe(r.states[i],o.grid_invert):null;if(!o.grid&&t.gridExport){let p=Math.max(0,oe(r.states[t.gridExport])??0);s=Math.max(0,s??0)-p}let a=o.solar?oe(r.states[o.solar]):null;if(!o.solar&&t.solar.length){let p=t.solar.map(f=>oe(r.states[f])).filter(f=>f!==null);a=p.length?p.reduce((f,v)=>f+v,0):null}let l=o.battery?oe(r.states[o.battery],o.battery_invert):null;if(!o.battery&&t.batteries.length){let p=t.batteries.map(f=>{if(f.charge){let v=f.power?Math.max(0,oe(r.states[f.power])??0):0,w=Math.max(0,oe(r.states[f.charge])??0);return v-w}return f.power?oe(r.states[f.power],o.battery_invert):null}).filter(f=>f!==null);l=p.length?p.reduce((f,v)=>f+v,0):null}let d=(o.battery_soc?[o.battery_soc]:t.soc).map(p=>Number(r.states[p]?.state)).filter(p=>Number.isFinite(p)),h=d.length?d.reduce((p,f)=>p+f,0)/d.length:NaN,u=o.tariff?r.states[o.tariff]:void 0,_=Number(u?.state),g=o.consumption?oe(r.states[o.consumption]):null;return g!==null?g=Math.max(0,g):s!==null||a!==null||l!==null?g=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):n.length&&(g=n.reduce((p,f)=>p+f.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(h)?h:null,tariff:u&&Number.isFinite(_)?{value:_,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:g}}function ut(r,e){return r.pos.push(e),r.adj.push([]),r.pos.length-1}function De(r,e,n){let t=Math.hypot(r.pos[e][0]-r.pos[n][0],r.pos[e][1]-r.pos[n][1]);r.adj[e].push({to:n,w:t}),r.adj[n].push({to:e,w:t})}function ka(r,e){let n=r.length,t=r.map((o,i)=>{let s=r[(i+1)%n],a=s[0]-o[0],l=s[1]-o[1],c=Math.hypot(a,l)||1,d=-l/c,h=a/c;return{p:[o[0]+d*e[i],o[1]+h*e[i]],d:[a/c,l/c],n:[d,h]}});return r.map((o,i)=>{let s=t[(i-1+n)%n],a=t[i],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[o[0]+a.n[0]*e[i],o[1]+a.n[1]*e[i]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function xa(r){return ze(r.points)>=0?{pts:r.points,flipped:!1}:{pts:[...r.points].reverse(),flipped:!0}}function lr(r,e,n){let t={pos:[],adj:[],rings:new Map},{walls:o}=dt(r.rooms,{exterior:e,interior:n},r.walls??[]);for(let i of r.rooms){if(i.points.length<3)continue;let{pts:s,flipped:a}=xa(i),l=s.length,c=s.map((u,_)=>{let g=a?(l-2-_+l)%l:_,p=o.some(f=>!f.exterior&&f.sources.some(v=>v.room_id===i.id&&v.edge===g));return va+(p?n/2:0)}),d=ka(s,c).map(u=>ut(t,u)),h=d.map((u,_)=>[u,d[(_+1)%l]]);for(let[u,_]of h)De(t,u,_);t.rings.set(i.id,h)}for(let i of o){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let s=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],a=Ze(t,i.roomLeft,s),l=Ze(t,i.roomRight,s);a!==null&&l!==null&&De(t,a,l)}return t}function Ze(r,e,n){let t=r.rings.get(e);if(!t)return null;let o=null;for(let s of t){let a=r.pos[s[0]],l=r.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],h=c*c+d*d||1,u=Math.min(1,Math.max(0,((n[0]-a[0])*c+(n[1]-a[1])*d)/h)),_=[a[0]+c*u,a[1]+d*u],g=Math.hypot(n[0]-_[0],n[1]-_[1]);(!o||g<o.d)&&(o={seg:s,q:_,d:g})}if(!o)return null;let i=ut(r,o.q);return De(r,i,o.seg[0]),De(r,i,o.seg[1]),i}function Dt(r,e){let n=r.rooms.filter(i=>i.points.length>=3),t=n.find(i=>G(e,i.points));if(t)return t;let o=null;for(let i of n)for(let s of i.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!o||a<o.d)&&(o={room:i,d:a})}return o?.room??null}function bi(r,e){let n=r.pos.map(()=>1/0),t=r.pos.map(()=>-1),o=r.pos.map(()=>!1);for(n[e]=0;;){let i=-1;for(let s=0;s<n.length;s++)!o[s]&&n[s]<1/0&&(i<0||n[s]<n[i])&&(i=s);if(i<0)break;o[i]=!0;for(let{to:s,w:a}of r.adj[i])n[i]+a<n[s]-1e-9&&(n[s]=n[i]+a,t[s]=i)}return{dist:n,prev:t}}function hi(r,e){return r.every(n=>e[n].kind==="battery")?"battery":r.every(n=>e[n].kind==="wallbox")?"wallbox":"consumer"}var pi=new WeakMap;function Sa(r,e){let n=sr(r),t=r.floors.find(d=>d.id===n.floor_id),o=[],{wall_exterior:i,wall_interior:s}=r.settings,a=new Map,l=new Map;e.forEach((d,h)=>l.set(d.floorId,[...l.get(d.floorId)??[],h]));let c=r.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===t.id)continue;let h=d.elevation>t.elevation,u=l.get(d.id),_=hi(u,e);o.push({floorId:t.id,a:[n.x,me,n.z],b:[n.x,h?t.height:-.2,n.z],dist:0,members:u,kind:_});let g=Math.abs(d.elevation-t.elevation);o.push({floorId:d.id,a:[n.x,h?-.2:d.height,n.z],b:[n.x,me,n.z],dist:g,members:u,kind:_}),a.set(d.id,g+.25)}for(let d of c){let h=lr(d,i,s),u=Dt(d,[n.x,n.z]);if(!u)continue;let _=ut(h,[n.x,n.z]),g=Ze(h,u.id,[n.x,n.z]);if(g===null)continue;De(h,_,g);let p=[];for(let S of l.get(d.id)){let $=e[S],U=Dt(d,[$.x,$.z]);if(!U)continue;let W=ut(h,[$.x,$.z]),x=Ze(h,U.id,[$.x,$.z]);x!==null&&(De(h,W,x),p.push({node:W,member:S}))}let{dist:f,prev:v}=bi(h,_),w=new Map;for(let S of p)if(Number.isFinite(f[S.node]))for(let $=S.node;v[$]>=0;$=v[$]){let U=v[$],W=`${U}>${$}`,x=w.get(W)??{a:U,b:$,members:[]};x.members.push(S.member),w.set(W,x)}let R=a.get(d.id)??0;for(let{a:S,b:$,members:U}of w.values()){let W=h.pos[S],x=h.pos[$],M=hi(U,e);o.push({floorId:d.id,a:[W[0],me,W[1]],b:[x[0],me,x[1]],dist:R+f[S],members:U,kind:M})}}return o}function wi({building:r,consumers:e,summary:n,battery:t,fieldPower:o,devicePower:i}){let s=sr(r);if(!s)return[];let a=r.floors.find(k=>k.id===s.floor_id);if(!a)return[];let l=k=>i?.get(k),c=ir(r,"inverter"),d=ir(r,"home_battery");!d.length&&t&&d.push({id:"battery",type:"home_battery",floorId:t.floorId,x:t.x,z:t.z,h:1.1,variant:null});let h=k=>{let E=null;for(let C of c)C.floorId===k.floorId&&(!E||Math.hypot(C.x-k.x,C.z-k.z)<Math.hypot(E.x-k.x,E.z-k.z))&&(E=C);return E},u=k=>l(k.id)??(d.length===1?n.battery??0:0),_=new Map;for(let k of d){let E=h(k);E&&_.set(k.id,E)}let g=e.map(k=>({floorId:k.floorId,x:k.x,z:k.z,kind:k.wallbox?"wallbox":"consumer",power:k.power}));for(let k of d)!_.has(k.id)&&n.battery!==null&&g.push({floorId:k.floorId,x:k.x,z:k.z,kind:"battery",power:Math.abs(u(k))});let p=`${s.floor_id}:${s.x},${s.z}|${g.map(k=>`${k.floorId}:${k.x},${k.z}:${k.kind}`).join(";")}`,f=pi.get(r);f||pi.set(r,f=new Map);let v=f.get(p);v||(v=Sa(r,g),f.clear(),f.set(p,v));let w=v.map(k=>({floorId:k.floorId,a:k.a,b:k.b,dist:k.dist,power:k.members.reduce((E,C)=>E+g[C].power,0),kind:k.kind})),R=n.grid!==null?cr(r):null,S=r.settings.roof.cables??[],$=k=>S.find(E=>E.id===k),U=(k,E)=>k.map(C=>({...C,key:E}));if(R){let k=n.grid>=0,E=$("grid"),C=E?dn(r,E,[R.end[0],a.elevation+me,R.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[[R.end[0],me,R.end[1]],[R.wall[0],me,R.wall[1]],[s.x,me,s.z]],L=E?It(r,k?C:[...C].reverse(),Math.abs(n.grid),k?"grid":"export",a):yi(a.id,k?C:[...C].reverse(),Math.abs(n.grid),k?"grid":"export",0);w.push(...U(L,"grid"))}if(n.battery!==null&&n.battery>0)for(let k of w)k.kind==="battery"&&([k.a,k.b]=[k.b,k.a]);let W=r.settings.roof.solar??[],x=r.settings.roof.strings??[],M=new Map;if(o&&W.length){let k=[...Pt(r),...Ft(r)];for(let E of W){let C=o.get(E.id)??0,L=E.string?x.find(te=>te.id===E.string)?.inverter:null,B=L?c.find(te=>te.id===L)??null:null;if(!B&&c.length){let te=qe(r,E,k),He=te?ui(te,E):[E.u,E.v];B=c.reduce((Xe,Se)=>!Xe||Math.hypot(Se.x-He[0],Se.z-He[1])<Math.hypot(Xe.x-He[0],Xe.z-He[1])?Se:Xe,null)}B&&M.set(B.id,(M.get(B.id)??0)+C);let P=B??{floorId:s.floor_id,x:s.x,z:s.z},O=B?1.1+B.h:1.5,ee=$(`solar:${E.id}`),se=ee?$a(r,E):null,ue=r.floors.find(te=>te.id===P.floorId);ee&&se&&ue?w.push(...U(It(r,dn(r,ee,se,[P.x,ue.elevation+O,P.z]),C,"solar",ue),`solar:${E.id}`)):w.push(...U(za(r,E,C,P,O),`solar:${E.id}`))}}else n.solar!==null&&!c.length&&w.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,me,s.z+.08],dist:0,power:n.solar,kind:"solar"});for(let k of c){let E=1.1+k.h,C=d.filter(P=>_.get(P.id)===k),L=l(k.id);if(L===void 0){L=M.get(k.id)??(c.length===1?n.solar??0:0);for(let P of C)L+=u(P)}let B=r.floors.find(P=>P.id===k.floorId);if(n.solar!==null||n.battery!==null){let P=$(`inv:${k.id}`),O=P&&B?It(r,dn(r,P,[k.x,B.elevation+E,k.z],[s.x,a.elevation+1.5,s.z]),Math.max(0,L),"inverter",B):mi(r,k,E,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,L),"inverter",0);w.push(...U(O,`inv:${k.id}`))}for(let P of C){let O=u(P);if(n.battery===null&&l(P.id)===void 0)continue;let ee=P.variant==="wall"?.5+P.h:.9,se=$(`bat:${P.id}`),ue=se&&B?It(r,dn(r,se,[k.x,B.elevation+E-.1,k.z],[P.x,B.elevation+ee,P.z]),Math.abs(O),"battery",B):mi(r,k,E-.1,P,ee,Math.abs(O),"battery",0);w.push(...U(O<=0?ue:ue.map(te=>({...te,a:te.b,b:te.a})).reverse(),`bat:${P.id}`))}}return w}function cr(r){let e=sr(r),n=e?r.floors.find(_=>_.id===e.floor_id):void 0;if(!e||!n)return null;let{wall_exterior:t,wall_interior:o}=r.settings,{walls:i}=dt(n.rooms,{exterior:t,interior:o},n.walls??[]),s=ir(r,"grid_point")[0],a=i.filter(_=>_.exterior);if(s){let _=null;for(let p of a){let f=p.b[0]-p.a[0],v=p.b[1]-p.a[1],w=s.x-e.x,R=s.z-e.z,S=w*v-R*f;if(Math.abs(S)<1e-9)continue;let $=((p.a[0]-e.x)*v-(p.a[1]-e.z)*f)/S,U=((p.a[0]-e.x)*R-(p.a[1]-e.z)*w)/S;if($<=0||$>1||U<0||U>1||_&&$>=_.t)continue;let W=Math.hypot(f,v)||1;_={q:[e.x+w*$,e.z+R*$],out:[v/W,-f/W],t:$}}let g=_?[_.q[0]+_.out[0]*(t/2+.05),_.q[1]+_.out[1]*(t/2+.05)]:[e.x,e.z];return{floorId:n.id,wall:g,end:[s.x,s.z]}}let l=null;for(let _ of a){let g=_.b[0]-_.a[0],p=_.b[1]-_.a[1],f=g*g+p*p||1,v=Math.min(1,Math.max(0,((e.x-_.a[0])*g+(e.z-_.a[1])*p)/f)),w=[_.a[0]+g*v,_.a[1]+p*v],R=Math.hypot(e.x-w[0],e.z-w[1]),S=Math.sqrt(f);(!l||R<l.d)&&(l={q:w,out:[p/S,-g/S],d:R})}if(!l)return null;let{q:c,out:d}=l,h=0;for(let _ of r.floors)for(let g of _.outdoor??[]){let p=g.points.length;for(let f=0;f<p;f++){let v=g.points[f],w=g.points[(f+1)%p],R=w[0]-v[0],S=w[1]-v[1],$=d[0]*S-d[1]*R;if(Math.abs($)<1e-9)continue;let U=((v[0]-c[0])*S-(v[1]-c[1])*R)/$,W=((v[0]-c[0])*d[1]-(v[1]-c[1])*d[0])/$;U>0&&W>=0&&W<=1&&(h=Math.max(h,Math.min(15,U)))}}let u=h>t+1?h:t+2.5;return{floorId:n.id,wall:[c[0]+d[0]*(t/2+.05),c[1]+d[1]*(t/2+.05)],end:[c[0]+d[0]*u,c[1]+d[1]*u]}}function ir(r,e){let n=[];for(let t of r.floors)for(let o of t.furniture)o.type===e&&n.push({id:o.id,type:o.type,floorId:t.id,x:o.x,z:o.z,h:o.h,variant:o.variant??null});return n}var fi=new WeakMap;function vi(r,e,n,t){let o=`${e.id}:${n.join(",")}>${t.join(",")}`,i=fi.get(r);i||fi.set(r,i=new Map);let s=i.get(o);if(s)return s;let{wall_exterior:a,wall_interior:l}=r.settings,c=lr(e,a,l),d=[n,t],h=Dt(e,n),u=Dt(e,t);if(h&&u){let _=ut(c,n),g=Ze(c,h.id,n),p=ut(c,t),f=Ze(c,u.id,t);if(g!==null&&f!==null){De(c,_,g),De(c,p,f);let{dist:v,prev:w}=bi(c,_);if(Number.isFinite(v[p])){d.length=0;for(let R=p;R>=0;R=w[R])d.unshift(c.pos[R])}}}return i.set(o,d),d}function mi(r,e,n,t,o,i,s,a){let l=r.floors.find(h=>h.id===e.floorId);if(!l||e.floorId!==t.floorId)return[];let c=vi(r,l,[e.x,e.z],[t.x,t.z]),d=[[e.x,n,e.z],...c.map(h=>[h[0],me,h[1]]),[t.x,o,t.z]];return yi(l.id,d,i,s,a)}function yi(r,e,n,t,o){let i=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(i.push({floorId:r,a,b:l,dist:o,power:n,kind:t}),o+=c)}return i}function dn(r,e,n,t){let i=(r.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(me,e.height);return[n,...e.points.map(s=>[s[0],i,s[1]]),t]}function $a(r,e){let n=qe(r,e,[...Pt(r),...Ft(r)]);if(!n)return null;let[t,o]=je(n,e),i=e.u+t/2,s=n.unbounded?e.v+o/2:e.v;return[n.o[0]+n.eu[0]*i+n.es[0]*s,n.o[1]+n.eu[1]*i+n.es[1]*s,n.o[2]+n.eu[2]*i+n.es[2]*s]}function Ma(r,e,n){let{wall_exterior:t,wall_interior:o}=r.settings,i=lr(e,t,o),s=Dt(e,n),a=s?Ze(i,s.id,n):null;return a===null?n:i.pos[a]}function It(r,e,n,t,o){let i=[...r.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=o;for(let h of i)c>=h.elevation-.01&&(d=h);return d},a=[],l=0;for(let c=0;c+1<e.length;c++){let d=e[c],h=e[c+1];if(Math.hypot(h[0]-d[0],h[1]-d[1],h[2]-d[2])<1e-4)continue;let _=[];if(Math.abs(h[1]-d[1])>.01){let g=Math.min(d[1],h[1]),p=Math.max(d[1],h[1]);for(let f of i)f.elevation>g+.01&&f.elevation<p-.01&&_.push(f.elevation);h[1]<d[1]&&_.reverse()}for(let g of[..._,h[1]]){let p=(g-d[1])/(h[1]-d[1]||1),f=Math.abs(h[1]-d[1])>.01?[d[0]+(h[0]-d[0])*p,g,d[2]+(h[2]-d[2])*p]:h,v=s((d[1]+f[1])/2),w=Math.hypot(f[0]-d[0],f[1]-d[1],f[2]-d[2]);w>1e-4&&a.push({floorId:v.id,a:[d[0],d[1]-v.elevation,d[2]],b:[f[0],f[1]-v.elevation,f[2]],dist:l,power:n,kind:t}),l+=w,d=f}}return a}function za(r,e,n,t,o){let i=[...Pt(r),...Ft(r)],s=qe(r,e,i),a=r.floors.find(f=>f.id===t.floorId);if(!s||!a)return[];let[l,c]=je(s,e),d=(f,v)=>[s.o[0]+s.eu[0]*f+s.es[0]*v,s.o[1]+s.eu[1]*f+s.es[1]*v,s.o[2]+s.eu[2]*f+s.es[2]*v],h=e.u+l/2,u=a.elevation+me,_=[],g;if(s.unbounded){let f=d(h,e.v+c/2);g=[f[0],u,f[2]],_.push(g)}else if(s.wall){let f=d(h,e.v);g=[f[0],u,f[2]],_.push(f,g)}else{let f=d(h,e.v),v=or(r)??a,w=Math.max(a.elevation+.5,Math.min(f[1]-.25,v.elevation+v.height-.12));g=[f[0],w,f[2]],_.push(f)}let p=Ma(r,a,[g[0],g[2]]);_.push([p[0],g[1],p[1]]),Math.abs(g[1]-u)>.05&&_.push([p[0],u,p[1]]);for(let f of vi(r,a,p,[t.x,t.z]).slice(1))_.push([f[0],u,f[1]]);return _.push([t.x,a.elevation+o,t.z]),It(r,_,n,"solar",a)}function ki(r,e=new Date){let n=new Date(e);n.setHours(0,0,0,0);let t=Math.max(1,Math.floor((e.getTime()-n.getTime())/3e5)+1),o=new Array(t).fill(0);for(let s of Object.values(r))for(let a of s){let l=typeof a.start=="number"?a.start:Date.parse(a.start),c=Math.floor((l-n.getTime())/3e5);c<0||c>=t||typeof a.mean!="number"||(o[c]+=Math.max(0,a.mean))}return{kwh:o.reduce((s,a)=>s+a*5/60/1e3,0),peak:Math.max(0,...o),curve:o}}async function xi(r,e){let n=new Date;n.setHours(0,0,0,0);try{return await r.callWS({type:"recorder/statistics_during_period",start_time:n.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function dr(r,e){let t=l=>42-(e>0?l/e*36:0),o=r.map((l,c)=>[c/288*220,t(l)]),i=o.map(([l,c],d)=>`${d?"L":"M"}${l.toFixed(1)} ${c.toFixed(1)}`).join(" "),[s,a]=o[o.length-1];return{line:i,area:`${i} L${s.toFixed(1)} 44 L0 44 Z`,endX:s,endY:a}}function Si(r){return Math.max(1,r.rows*r.cols-(r.skip?.length??0))}var Ea=400;function $i(r,e){let n=new Map;for(let t of r.settings.roof.solar??[]){let o=Math.min(1,(e.get(t.id)??0)/(Si(t)*(t.wp??Ea)));n.set(t.id,o>.003?Math.pow(o,.6):0)}return n}function Mi(r,e,n){let t=new Map,o=e.settings.roof.solar??[],i=e.settings.roof.strings??[],s=Si,a=[],l=0,c=new Map;for(let u of o){let _=u.entity&&u.entity!=="none"?oe(r.states[u.entity]):null;if(_!==null){t.set(u.id,Math.max(0,_)),l+=Math.max(0,_);continue}let g=u.string?i.find(f=>f.id===u.string):void 0,p=g?.entity&&g.entity!=="none"?oe(r.states[g.entity]):null;if(g&&p!==null){c.set(g.id,[...c.get(g.id)??[],u]);continue}a.push(u)}for(let[u,_]of c){let g=i.find(v=>v.id===u),p=Math.max(0,oe(r.states[g.entity])??0),f=_.reduce((v,w)=>v+s(w),0);for(let v of _)t.set(v.id,p*s(v)/f);l+=p}let d=Math.max(0,(n??0)-l),h=a.reduce((u,_)=>u+s(_),0);for(let u of a)t.set(u.id,h?d*s(u)/h:0);return t}var ge={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function zi(r,e){if(r==="grid")return ge.import;if(r==="export")return ge.export;if(r==="solar")return ge.solar;if(r==="battery")return ge.battery;if(r==="wallbox")return ge.wallbox;if(r==="inverter")return(e.solar??0)>5?ge.solar:ge.battery;let n=[[Math.max(0,e.grid??0),ge.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),ge.solar],[Math.max(0,e.battery??0),ge.battery]],[t]=n.reduce((o,i)=>i[0]>o[0]?i:o);return t>0?n.find(o=>o[0]===t)[1]:ge.house}var ur=["neon","blueprint","day"],Ht={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var hn={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[15,[.24,.48,1]],[23,[.2,.9,.7]],[30,[1,.75,.25]],[40,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Ei(r,e){let n=hn[r].stops;if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++){let[o,i]=n[t],[s,a]=n[t-1];if(e<=o){let l=(e-s)/(o-s);return[a[0]+(i[0]-a[0])*l,a[1]+(i[1]-a[1])*l,a[2]+(i[2]-a[2])*l]}}return n[n.length-1][1]}function Ai(r,e,n){let t=new Map;for(let o of e.floors)for(let i of o.rooms){let s=Ee(r,o,i,n);s!==null&&t.set(i.id,s)}return t}function Ri(r){let e=hn[r].stops,n=e[0][0],t=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([o,i])=>`rgb(${i.map(s=>Math.round(s*255)).join(",")}) ${Math.round((o-n)/(t-n)*100)}%`).join(", ")})`}function be(r,e){if(!In(e))return A(r,`furn_${e}`);let n=de(e);return n?io(n,r?.language??navigator.language):A(r,"pack_missing_item")}var hr=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function pn(r){return r&&r!=="none"?r:null}function Ct(r,e){if(e.type!=="parking")return null;let n=pn(e.entity);if(n){let i=r.states[n];if(!i||!hr.has(i.state.toLowerCase()))return null}let t=e.vehicle??null,o=pn(e.type_entity);if(o&&e.types?.length){let i=(r.states[o]?.state??"").trim().toLowerCase();if(i){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===i)??e.types.find(l=>s(l.state)&&i.includes(s(l.state)));a&&(t=a.vehicle)}}return t&&de(t)?t:null}function pr(r,e){let n=new Map;for(let t of e.floors)for(let o of t.furniture){let i=Ct(r,o);i&&n.set(o.id,i)}return n}function Ti(r){return r.flatMap(e=>e.furniture.filter(n=>n.type==="parking").flatMap(n=>[pn(n.entity),pn(n.type_entity)])).filter(e=>!!e)}function Fi(r,e){let n=de(e);if(!n)return null;let t=r.scale??1;return{id:`${r.id}:vehicle`,type:e,x:r.x,z:r.z,rotation:r.rotation,w:n.size[0]*t,d:n.size[1]*t,h:n.size[2]*t,variant:null,entity:null,power:null}}var fn=1800*1e3,Aa=new Set(["motion","occupancy","presence"]);function Pi(r,e){return e.startsWith("binary_sensor.")&&Aa.has(String(r.states[e]?.attributes.device_class))}function mn(r,e){let n=[],t=new Set,o=(i,s,a,l)=>{t.has(i)||(t.add(i),n.push({entity:i,floorId:s,x:a,z:l}))};for(let i of e.floors)for(let s of i.placements)if(Pi(r,s.entity_id))o(s.entity_id,i.id,s.x,s.z);else if(F(s.entity_id)==="camera")for(let a of Ge(r,s.entity_id))o(a,i.id,s.x,s.z);for(let i of e.floors)for(let s of i.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=Ve(s.points);for(let c of ie(r,s.area_id))Pi(r,c)&&o(c,i.id,a,l)}return n}function Ii(r,e,n,t=fn){let o=n-t,i=[];for(let[s,a]of Object.entries(r)){let l="";for(let c of a){let d=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&d>=o&&d<=n&&i.push({entity:s,time:d}),l=c.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=o&&a<=n)||i.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||i.push({entity:s.entity,time:a})}return i.sort((s,a)=>s.time-a.time)}function Di(r,e,n,t=fn){let o=new Map(r.map(s=>[s.entity,s])),i=[];for(let s of e){let a=o.get(s.entity);if(!a)continue;let l=i[i.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||i.push({...a,time:s.time,age:Math.min(1,Math.max(0,(n-s.time)/t))})}return i.slice(-40)}function fr(r,e){return new Date(e).toLocaleTimeString(r.language,{hour:"2-digit",minute:"2-digit"})}var Hi='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var _n=r=>r.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Ci(r,e){let n=[],t=st(r,e.floors),o=e.floors.length>1;for(let i of e.floors){let s=(d,h)=>i.rooms.find(u=>u.points.length>=3&&G([d,h],u.points))??null,a=(d,h)=>[s(d,h)?.name,o?i.name:null].filter(Boolean).join(" \xB7 ");for(let d of i.rooms){if(d.points.length<3)continue;let[h,u]=Ve(d.points);n.push({kind:"room",name:d.name,where:o?i.name:"",floorId:i.id,roomId:d.id,entity:null,icon:null,x:h,z:u,y:0})}let l=new Set,c=(d,h,u,_)=>{l.has(d)||!r.states[d]||(l.add(d),n.push({kind:"device",name:q(r,d),where:a(h,u),floorId:i.id,roomId:s(h,u)?.id??null,entity:d,icon:F(d),x:h,z:u,y:_}))};for(let d of i.placements)c(d.entity_id,d.x,d.z,d.y??ot(F(d.entity_id)??"sensor",i.height,d.mount));for(let d of i.furniture){let h=t.get(d.id),u=h?.entity??h?.power;u&&c(u,d.x,d.z,Math.min(i.height-.3,Math.max(.5,d.h)))}}return n}function Wi(r,e,n=8){let t=_n(e).split(/\s+/).filter(Boolean);if(!t.length)return[];let o=r.filter(a=>{let l=_n(`${a.name} ${a.where} ${a.entity??""}`);return t.every(c=>l.includes(c))}),i=_n(e.trim()),s=a=>(_n(a.name).startsWith(i)?0:2)+(a.kind==="room"?0:1);return o.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,n)}var Ra=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Ta=[2200,2700,3200,4e3,5e3,6500],Fa=["hs","rgb","rgbw","rgbww","xy"],Pa=4,Li=16,Oi=32,Ia=128;function _r(r){let e=r.attributes.supported_color_modes??[],n=e.some(t=>Fa.includes(t));return{dim:e.some(t=>t!=="onoff"),color:n,temp:e.includes("color_temp")}}function gr(r){return((r.attributes.supported_features??0)&Pa)!==0&&typeof r.attributes.current_position=="number"}var mr=class extends le{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{F(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let n=e.attributes.entity_picture,t=n?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return m`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${t?m`<img src=${t} alt=${q(this.hass,this.entity)} />`:m`<span class="qm-note">${pe(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,n){return A(this.hass,e,n)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:q(this.hass,this.entity)}))}call(e,n,t={}){this.hass.callService(e,n,{entity_id:this.entity,...t})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){xe(this,this.entity),this.close()}ring(e){let n=e.length;return e.map((t,o)=>{let i=o/n*Math.PI*2-Math.PI/2;return m`<div class="qm-at" style="left:${50+Math.cos(i)*39}%;top:${50+Math.sin(i)*39}%">${t}</div>`})}renderLight(e){let n=_r(e),t=e.state==="on",o=t&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):t?100:0,i=n.color?Ra.map(s=>m`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):n.temp?Ta.map(s=>m`<button class="qm-swatch" style="background:${Da(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return m`<div class="qm-ring ${i.length?"":"qm-ring-small"}">
        ${this.ring(i)}
        <button class="qm-power ${t?"qm-on":""}" aria-pressed=${t} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${t?`${o} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${n.dim?m`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,o))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:b}`}renderCover(e){let n=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,t=e.state==="opening"||e.state==="closing",o=gr(e),i=(c,d,h,u=!1)=>m`<button class="qm-swatch qm-slot ${u?"qm-slot-on":""}" aria-label=${d} @click=${h}>${c}</button>`,s=c=>n!==null&&Math.abs(n-c)<3,a=[i("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...o?[75,50].map(c=>i(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],i("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...o?[25].map(c=>i(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],i("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),t)],l=n===null?e.state==="closed"?100:0:100-n;return m`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${t?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>t?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${n!==null?`${n} %`:pe(this.hass,e)}</b>
        </button>
      </div>
      ${o?m`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(n??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:b}
      ${this.renderTilt(e)}`}renderTilt(e){let n=(e.attributes.supported_features??0)|0,t=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return n&Ia&&t!==null?m`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${t} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(t)}
          aria-label=${this.t("cover_tilt")}
          @change=${o=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(o.target.value)})}
      /></label>`:n&(Li|Oi)?m`<div class="qm-tilt-buttons">
        ${n&Li?m`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:b}
        ${n&Oi?m`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:b}
      </div>`:b}renderCar(e){let n=e.entities,t=(h,u,_,g={})=>{this.hass.callService(h,u,{entity_id:_,...g})},o=n.lock,i=!!o&&o.startsWith("lock."),s=h=>/^(switch|input_boolean|fan|light)\./.test(h),a=n.climate,l=!!a&&a.startsWith("climate."),c=n.charging&&s(n.charging)?n.charging:null,d=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return m`<p class="qm-car-line">${d||pe(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${i||o&&s(o)?m`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(i?t("lock","unlock",o):t("homeassistant","turn_off",o)):i?t("lock","lock",o):t("homeassistant","turn_on",o)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:b}
        ${a?m`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>t(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",a)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:b}
        ${c?m`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>t("homeassistant",e.charging?"turn_off":"turn_on",c)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:b}
        ${!i&&!a&&!c?m`<p class="qm-note">${this.t("car_no_controls")}</p>`:b}
      </div>`}renderMedia(e){let n=e.attributes,t=e.state==="playing",o=e.state==="off"||e.state==="standby",i=typeof n.volume_level=="number"?Math.round(n.volume_level*100):null,s=[n.media_title,n.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof n.entity_picture=="string"?n.entity_picture:null;return m`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${o} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${t?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",o?"turn_on":"media_play_pause")}>
          <span>${o?"\u23FB":t?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${o} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?m`<p class="qm-media-title">${s}</p>`:b}
      ${i!==null?m`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(i)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:b}
      ${this.renderPlay(e)}`}renderPlay(e){if(!V("sound"))return b;let n=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],t=this.presets??[];if(!n.length&&!t.length)return b;let o=e.attributes.source;return m`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${t.map(i=>m`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:i.type,media_content_id:i.content})}>
            ▶ ${i.label}
          </button>`)}
        ${n.map(i=>m`<button class="qm-chip ${i===o?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:i})}>${i}</button>`)}
      </div>`}renderToggle(e){let n=e.state==="on"||e.state==="unlocked"||e.state==="playing",t=e.entity_id.split(".")[0];return m`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${n?"qm-on":""}"
        aria-pressed=${n}
        @click=${()=>this.ask()&&(t==="lock"?this.call("lock",n?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${pe(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return b;let n=F(this.entity),t=this.car?this.renderCar(this.car):N(e)?m`<p class="qm-note">${pe(this.hass,e)}</p>`:n==="light"?this.renderLight(e):n==="cover"?this.renderCover(e):n==="camera"?this.renderCamera(e):n==="media"&&V("sound")?this.renderMedia(e):this.renderToggle(e);return m`<div class="qm" role="dialog" aria-label=${q(this.hass,this.entity)}>
      <div class="qm-title">${q(this.hass,this.entity)}</div>
      ${t}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[ve,he`
    .qm-play-head {
      margin: 10px 0 4px;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.7;
    }
    .qm-play {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      max-height: 110px;
      overflow-y: auto;
    }
    .qm-chip {
      border: 1px solid rgba(160, 240, 255, 0.35);
      border-radius: 999px;
      padding: 5px 10px;
      background: rgba(8, 16, 34, 0.55);
      color: inherit;
      font: inherit;
      font-size: 12.5px;
      cursor: pointer;
    }
    .qm-chip-on {
      border-color: var(--fp3d-accent, #37e0ff);
      color: var(--fp3d-accent, #37e0ff);
    }
      .qm-camera {
        display: block;
        width: 100%;
        padding: 0;
        margin: 6px 0 8px;
        border: 0;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
        cursor: pointer;
      }
      .qm-camera img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .qm:has(.qm-camera) {
        width: 300px;
      }
      .qm {
        width: 232px;
        padding: 12px 14px 10px;
        border-radius: 22px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        backdrop-filter: blur(10px);
      }
      :host([low]) .qm {
        backdrop-filter: none;
        box-shadow: 0 0 0 1px var(--fp3d-line);
        animation: none;
        color: var(--fp3d-text);
        text-align: center;
        animation: qm-in 140ms ease-out;
      }
      @keyframes qm-in {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      .qm-title {
        font: 700 14.5px var(--fp3d-title-font);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-ring {
        position: relative;
        width: 196px;
        height: 196px;
        margin: 6px auto 4px;
        display: grid;
        place-items: center;
      }
      .qm-ring-small {
        height: 110px;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 34px;
        height: 34px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
      }
      .qm-swatch:active {
        transform: scale(0.9);
      }
      .qm-power {
        display: grid;
        place-items: center;
        gap: 2px;
        width: 88px;
        height: 88px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-muted);
        box-shadow: inset 0 0 0 2px var(--fp3d-line);
        cursor: pointer;
        font: inherit;
      }
      .qm-power b {
        font: 700 15px var(--fp3d-title-font);
        color: var(--fp3d-text);
      }
      .qm-power small {
        font-size: 11px;
      }
      .qm-on {
        color: #1a1204;
        background: var(--fp3d-warm);
        box-shadow: 0 0 24px rgba(255, 181, 71, 0.55);
      }
      .qm-on b {
        color: #1a1204;
      }
      .qm-slot {
        display: grid;
        place-items: center;
        border-color: var(--fp3d-line);
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-text);
        font: 700 12px var(--fp3d-title-font);
      }
      .qm-slot-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 14px rgba(55, 224, 255, 0.45);
      }
      /* the blind: its closed part covers the circle from the top, the open part glows like daylight */
      .qm-blind.qm-on {
        background: linear-gradient(to bottom, #1e2c4c var(--closed), #9fd9ff var(--closed));
        box-shadow: 0 0 22px rgba(120, 200, 255, 0.4);
        color: #06101f;
      }
      .qm-blind b {
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        color: #fff;
      }
      .qm-round {
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 17px;
        cursor: pointer;
      }
      .qm-car-line {
        margin: 2px 0 8px;
        text-align: center;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .qm-car {
        display: grid;
        gap: 6px;
        justify-items: stretch;
      }
      .qm-car .qm-slot {
        width: auto;
        padding: 6px 10px;
        font-size: 13px;
      }
      .qm-media {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 6px 0;
      }
      .qm-media-main {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        position: relative;
      }
      .qm-media-main span {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font-size: 22px;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
        color: #fff;
      }
      .qm-media .qm-slot {
        width: auto;
        padding: 0 10px;
      }
      .qm-media-title {
        margin: 2px 0 4px;
        text-align: center;
        font-size: 12px;
        opacity: 0.85;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-tilt {
        display: grid;
        gap: 4px;
        margin-top: 8px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .qm-tilt-buttons {
        display: flex;
        gap: 6px;
        justify-content: center;
        margin-top: 8px;
      }
      .qm-tilt-buttons .qm-slot {
        width: auto;
        padding: 0 10px;
        font-size: 12px;
      }
      .qm-slider {
        width: 100%;
        margin: 4px 0 6px;
        accent-color: var(--fp3d-accent);
      }
      .qm-look {
        display: block;
        width: 100%;
        margin-top: -4px;
      }
      .qm-details {
        border: 0;
        background: none;
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 13px;
        padding: 6px;
        cursor: pointer;
      }
      .qm-note {
        color: var(--fp3d-muted);
      }
    `]};function Da(r){let e=Math.min(1,Math.max(0,(r-2200)/4300)),n=(t,o)=>Math.round(t+(o-t)*e);return`rgb(${n(255,200)},${n(170,225)},${n(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",mr);var Ha=new URL(import.meta.url),Ca=new URL("./neonplan3d-3d.js?v=06b449a8a81a",Ha).href,Bi;function Ni(){return Bi??=import(Ca),Bi}var Vi=r=>r.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function Wa(r,e,n){let t=Vi(n);if(!t||t==="unknown"||t==="unavailable"||t==="not home"||t==="away")return null;for(let o of e.floors)for(let i of o.rooms)if([i.name,i.area_id??"",i.area_id?r.areas?.[i.area_id]?.name??"":""].filter(Boolean).map(Vi).includes(t))return{floorId:o.id,room:i};return null}function La(r){let e=r.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function Ki(r,e){let n=[],t=new Map;for(let o of e.presence){let i=r.states[o.person];if(!i||!o.sensor||i.state!=="home"&&i.state!=="on")continue;let s=r.states[o.sensor];if(!s)continue;let a=Wa(r,e,s.state);if(!a)continue;let l=t.get(a.room.id)??0;t.set(a.room.id,l+1);let[c,d]=Ve(a.room.points),h=-Math.PI/2+.9+l*1.15,u=.75,_=i.attributes.friendly_name??o.person;n.push({id:o.person,name:_,initials:La(_),picture:i.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(h)*u,z:d+Math.sin(h)*u})}return n}function Gi(r,e,n,t){let o=new Map,i=s=>!!s&&r.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let c of s.rooms)for(let d of Xt(r,ie(r,c.area_id)))F(d)==="light"&&a.add(d);for(let c of s.placements)F(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let d=n.get(c.id);if(!d)return!1;if(c.type==="garage")return(Re(r,d,"garage").cover??1)<.95;if(c.type==="door")return i(d.contact)||i(d.contact2??null);let h=Re(r,d,"window");return h.open>.5||h.tilt>.5||h.open2>.5||h.tilt2>.5}).length;o.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>r.states[c]?.state==="on").length,open:l,persons:t.filter(c=>c.floorId===s.id).length})}return o}function Ui(r,e){let n=[e.rooms===1?A(r,"floor_rooms_one"):A(r,"floor_rooms",{n:e.rooms})];return e.lightsOn&&n.push(A(r,"floor_lights",{n:e.lightsOn})),e.open&&n.push(A(r,"floor_open",{n:e.open})),e.persons&&n.push(A(r,"floor_persons",{n:e.persons})),n.join(" \xB7 ")}var Ba=12e4,qi={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},Na='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',br=class extends le{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_central:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0}};flashTimer;cloud=0;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;volumeSent=0;holoIds="";shownStartView;throughWall=!1;live=null;resizeObs=null;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.heatMode="none",this.theme="neon",this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1,this._armed=null,this.central=!0,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearTimeout(this.flashTimer),this.flashTimer=void 0,this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(n=>{let t=(n[0]?.contentRect.width??1e3)<700;t!==this._narrowStage&&(this._narrowStage=t,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await Ni();if(!this.isConnected)return;let n=this.renderRoot.querySelector(".fp3d-stage");this.viewer=e.createViewer(n,{quality:this.quality,explode:this.explode,onRoomTap:(t,o)=>this.fire("room-tap",{floorId:t,roomId:o}),onOutdoorTap:(t,o)=>this.fire("outdoor-tap",{floorId:t,outdoorId:o}),onFloorTap:t=>this.fire("floor-tap",{floorId:t}),floorInfo:t=>t.rooms.length===1?A(this.hass,"floor_rooms_one"):A(this.hass,"floor_rooms",{n:t.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(t,o,i)=>this.onDeviceTap(t,o,i),onDeviceHold:(t,o,i)=>this.onDeviceHold(t,o,i),onRoomDoubleTap:(t,o)=>this.onRoomDoubleTap(t,o),onDeviceSwipe:(t,o,i,s,a)=>this.onDeviceSwipe(t,o,i,s,a),onFurnitureSelect:t=>this.fire("furniture-select",{id:t}),onFurnitureMove:(t,o,i)=>this.fire("furniture-move",{id:t,x:o,z:i}),onDeviceSelect:t=>this.fire("device-select",{id:t}),onDeviceMove:(t,o,i)=>this.fire("device-move",{id:t,x:o,z:i}),onStats:t=>{this.showStats&&(this._stats=t)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setTheme(this.theme),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((t,o,i,s,a,l)=>this.placeHolo(t,o,i,s,a,l)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this._low=this.viewer.low,this.viewer.setPacks([...kt()]),this.shownPacks=Gt(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.building)),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}updated(e){e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass);let n=this.viewer;if(!n)return;if(this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==Gt()&&(this.shownPacks=Gt(),n.setPacks([...kt()]),this.hass&&this.building&&n.setParked(pr(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let o=JSON.stringify(this.startViewOf()),i=this.shownStartView!==void 0&&this.shownStartView!==o;this.shownStartView=o,n.setStartView(this.startViewOf()),n.setBuilding(this.building),i&&this.floorId===null&&n.resetView()}e.has("startView")&&e.get("startView")!==void 0&&(n.setStartView(this.startViewOf()),this.floorId===null&&n.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let t=["building","markerMode","heatMode","flows","alerts","dimmed"].some(o=>e.has(o));(t||e.has("hass"))&&this.syncDevices(t),e.has("autoOrbit")&&n.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&n.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&n.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&n.selectRoom(this.roomId),e.has("wallMode")&&n.setWallMode(this.wallMode),e.has("explode")&&n.setExplode(this.explode),e.has("keepRoof")&&n.setKeepRoof(this.keepRoof),e.has("floorStack")&&n.setFloorStack(this.floorStack),e.has("theme")&&n.setTheme(this.theme),e.has("accent")&&n.setAccent(this.accent??null),e.has("surfaceGrab")&&n.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&n.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(n.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&n.selectFurniture(this.selectedFurniture),e.has("selectedDevice")&&n.setSelectedDevice(this.selectedDevice),e.has("trail")&&this.watchTrail(),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(n.setQuality(this.quality),this._low=n.low),e.has("showStats")&&n.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e){let n=this.viewer,t=this.building;if(!n||!t||!this.hass)return;let o=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==o.entities){this.openingLinks=Zt(o,t.floors),this.furnitureLinks=st(o,t.floors),this.linkedRegistry=o.entities,this.findIndex=null;let y=[...this.openingLinks.values()].flatMap(D=>[D.cover,D.contact,D.tilt,D.contact2??null,D.tilt2??null,D.position??null,D.tiltAngle??null]),z=Go(t),I=z.filter(D=>F(D)==="camera").flatMap(D=>Ge(o,D)),K=z.map(D=>ar(o,D)),T=t.energy,H=t.presence.flatMap(D=>[D.person,D.sensor]),X=t.floors.flatMap(D=>D.rooms.flatMap(Y=>ie(o,Y.area_id).filter(Ce=>F(Ce)==="light"))),j=[...this.furnitureLinks.values()].flatMap(D=>[D.entity,D.light,D.power]),ne=t.floors.flatMap(D=>D.furniture.flatMap(Y=>[Y.state_entity??null,Y.state_entity2??null,Y.color_entity??null])),ae=t.floors.flatMap(D=>D.furniture.flatMap(Y=>[Y.door_left??null,Y.door_right??null,Y.soc??null,Y.status??null,Y.charge??null,Y.export??null])),re=(t.settings.roof?.windows??[]).flatMap(D=>[D.cover,D.contact,D.tilt]).filter(D=>!!D&&D!=="none"),ce=[...(t.settings.roof?.solar??[]).map(D=>D.entity),...(t.settings.roof?.strings??[]).map(D=>D.entity)].filter(D=>!!D&&D!=="none"),$e=t.floors.flatMap(D=>D.furniture.filter(Y=>Y.type==="robot_vacuum").map(Y=>jn(o,this.furnitureLinks.get(Y.id)?.entity??null,Y.room_sensor))),Mr=t.floors.flatMap(D=>D.furniture.flatMap(Y=>(Y.pictures??[]).flatMap(Ce=>[Ce.entity,...Ce.image.startsWith("camera:")?[Ce.image.slice(7)]:[]]))),pt=this.heatMode==="none"&&!this.roomLabels?[]:t.floors.flatMap(D=>D.rooms.flatMap(Y=>ie(o,Y.area_id).filter(Ce=>Ce.startsWith("sensor."))));this.alertSrc=this.alerts?Xo(o,t,this.weatherEntityId):null;let fe=this.alertSrc?Yo(this.alertSrc):[],Lt=[...Ti(t.floors),...V("auto_pro")?Fo(o,t.floors):[]],bn=mn(o,t).map(D=>D.entity),wn=Mt(o,this.weatherEntityId??t.settings.weather_entity),Ot=[...z,...I,...y,...K,...j,...ne,...ae,...$e,...re,...ce,...Mr,T.grid,T.solar,T.battery,T.battery_soc,T.consumption,T.tariff,...H,...X,...pt,...fe,...Lt,...bn,wn,"sun.sun"];this.watched=[...new Set(Ot.filter(D=>!!D))],e=!0}if(!(e||this.watched.some(y=>this.shownStates.get(y)!==o.states[y])))return;this.shownStates=new Map(this.watched.map(y=>[y,o.states[y]]));let s=_i(o,t),a=Vo(o,t),l=this.furnitureMarkers(o,t,new Set(a.map(y=>y.id)),new Set(s.map(y=>y.powerEntity)));s.push(...l.consumers);let c=gi(o,t,s,un(t,y=>this.furnitureLinks?.get(y.id)?.power??null)),d=new Map(s.filter(y=>y.id!==y.powerEntity).map(y=>[y.id,y.power]));this.confirmSet=it(o,t.floors);let h=this.trail?this.trailNow(o,t):[],u=V("energy_pro"),_=new Set(V("auto_pro")?t.floors.flatMap(y=>y.furniture.filter(z=>z.type==="parking"&&z.car&&Ct(o,z)).map(z=>z.id)):[]);n.setDevices([...[...a,...l.markers].map(y=>{let z=y.show==="no_power"||"energyDevice"in y&&y.energyDevice?null:d.get(y.id)??null,I={...y,power:z,powerText:z===null?void 0:Q(o,z),effect:this.dimmed?!1:y.effect},K=y.ownName&&(y.showName||this.markerNames)?y.ownName:"",T=V("sound")&&this.mediaCardUp(o,y.id)||V("auto_pro")&&!!y.furnitureId&&_.has(y.furnitureId);return{...I,pin:this.showPin(I)&&!T,full:y.show==="always",caption:K}}),...(u&&(this.flows??this._flows)&&!this.dimmed&&c.grid!==null?[this.gridPin(o,t,c.grid)]:[]).filter(y=>!!y),...V("camera_cockpit")&&!this.dimmed?this.detectionPins(o,a):[],...h.map((y,z)=>({id:`trail:${z}`,floorId:y.floorId,roomId:null,x:y.x,z:y.z,y:.3+.4*h.slice(0,z).filter(I=>I.entity===y.entity).length,icon:Hi,name:q(o,y.entity),text:fr(o,y.time),active:!1,unavailable:!1,glow:null,pin:!0}))]),n.setTrail(h),n.setPickTargets(l.targets,this.openingTargets()),n.setScreens(l.screens),n.setFridgeDoors(Un(o,t.floors)),n.setRobots(this.robotInfos(o,t));let g=new Map;for(let y of t.settings.roof?.windows??[]){let z=H=>H&&H!=="none"?H:null,I=Re(o,{cover:z(y.cover),contact:z(y.contact),tilt:z(y.tilt)},"window"),K=z(y.window)?o.states[z(y.window)]:void 0,T=I.open;if(K&&!N(K)){let H=K.attributes.current_position;T=typeof H=="number"?Math.min(1,Math.max(0,H/100)):K.state==="open"||K.state==="opening"?1:0}g.set(y.id,{open:T,tilt:I.tilt,cover:I.cover??0})}n.setRoofWindows(g),n.setParked(pr(o,t));let p=new Map(t.floors.flatMap(y=>y.openings.map(z=>[z.id,z.type]))),f=new Map([...this.openingLinks].map(([y,z])=>[y,Re(o,z,p.get(y))]));n.setOpeningStates(f),this.setAlerts(this.alertSrc?Qo(o,t,this.alertSrc,this.openingLinks):[]);let v=[...a,...l.markers].map(y=>`${y.id}:${y.glow?`${y.glow.level.toFixed(1)}/${y.glow.color.map(z=>z.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...f].map(([y,z])=>`${y}:${z.open}:${z.cover===null?"-":z.cover.toFixed(1)}`).join(";");if(v!==this.thumbSig){let y=this.thumbSig==="";this.thumbSig=v,y||this.scheduleThumbs(1500)}let w=t.floors.flatMap(y=>y.furniture.filter(z=>z.type==="home_battery").map(z=>({floorId:y.id,x:z.x,z:z.z})))[0]??(t.energy.battery?t.floors.flatMap(y=>y.placements.filter(z=>z.entity_id===t.energy.battery).map(z=>({floorId:y.id,x:z.x,z:z.z})))[0]:null),R=u?Mi(o,t,c.solar):null,S=t.settings.roof.hologram??Ut,$=[...t.settings.roof.solar??[]].sort((y,z)=>z.rows*z.cols-y.rows*y.cols),U=t.settings.roof.strings??[],W=y=>(y.string?U.find(z=>z.id===y.string)?.inverter:null)??null,x=(y,z,I,K)=>{let T=qe(t,y);if(!T)return null;let[H,X]=je(T,y),j=y.u+H/2+z,ne=y.v+X/2+I,ae=[T.o[0]+T.eu[0]*j+T.es[0]*ne,T.o[1]+T.eu[1]*j+T.es[1]*ne,T.o[2]+T.eu[2]*j+T.es[2]*ne],re=T.wall?.floorId??(T.unbounded?t.floors.find(ce=>ce.elevation===Math.min(...t.floors.map($e=>$e.elevation)))?.id??t.floors[0].id:[...t.floors].sort((ce,$e)=>$e.elevation-ce.elevation)[0].id);return{p:[ae[0]+T.n[0]*.05,ae[1]+T.n[1]*.05,ae[2]+T.n[2]*.05],n:[T.n[0],T.n[1],T.n[2]],floorId:re,size:K,roof:!0,views:"house"}},M=[],k=[],E=c.grid!==null||c.battery!==null||c.solar!==null,C=S.place==="free"&&Number.isFinite(S.x)&&Number.isFinite(S.z),L=u&&c.solar!==null&&!C?$.find(y=>y.id===S.field)??$[0]:void 0,B=L?W(L):null,P=!!L&&!!B&&!$.some(y=>y.id!==L.id&&W(y)===B)&&S.right===0&&S.up===0,O=(()=>{if(!P||!L)return 0;let y=qe(t,L);return y?je(y,L)[0]/2+1.2:0})(),ee=L?x(L,S.right+O,S.up,S.size):null,se=this.devicePowers(o,t),ue=u&&c.solar!==null?t.energy.solar?[t.energy.solar]:un(t,y=>this.furnitureLinks?.get(y.id)?.power??null).solar:[];if(ee)M.push(ee),k.push({kind:"main",name:A(o,"holo_title"),w:null,dayIds:ue,battery:null});else if(u&&E&&C){let y=0,z=0,I=0,K=1/0,T=t.floors[0];for(let ne of t.floors){ne.rooms.length&&(K=Math.min(K,ne.elevation)),ne.rooms.length&&(!T.rooms.length||ne.elevation+ne.height>T.elevation+T.height)&&(T=ne);for(let ae of ne.rooms)for(let[re,ce]of ae.points)y+=re,z+=ce,I++}I&&(y/=I,z/=I);let H=S.x-y,X=S.z-z,j=Math.hypot(H,X);M.push({p:[S.x,(Number.isFinite(K)?K:0)+(S.height??3),S.z],n:j>.01?[H/j,0,X/j]:[1,0,0],floorId:T.id,size:S.size,roof:!0,views:"house"}),k.push({kind:"main",name:A(o,"holo_title"),w:null,dayIds:ue,battery:null})}else if(u&&E&&t.floors.some(y=>y.rooms.length)){let y=-1/0,z=1/0,I=-1/0,K=0,T=t.floors[0];for(let H of t.floors){for(let X of H.rooms)for(let[j,ne]of X.points)y=Math.max(y,j),z=Math.min(z,ne),I=Math.max(I,ne);H.rooms.length&&H.elevation+H.height>K&&(K=H.elevation+H.height,T=H)}M.push({p:[y+.6,K+.4,(z+I)/2],n:[1,0,0],floorId:T.id,size:S.size,roof:!0,views:"house"}),k.push({kind:"main",name:A(o,"holo_title"),w:null,dayIds:ue,battery:null})}if(u&&c.solar!==null){let y=new Set;for(let z of t.floors)for(let I of z.furniture.filter(K=>K.type==="inverter")){if(I.plant_card===!1||y.has(I.id))continue;y.add(I.id);let K=$.filter(ae=>W(ae)===I.id),T=(L&&I.id===B?K.find(ae=>ae.id!==L.id):null)??K[0],H=this.furnitureLinks?.get(I.id)?.power??null,X=T?x(T,0,0,S.size*.85):null;if(!X||!H)continue;let j=z.furniture.filter(ae=>ae.type==="home_battery").sort((ae,re)=>Math.hypot(ae.x-I.x,ae.z-I.z)-Math.hypot(re.x-I.x,re.z-I.z))[0],ne=j?.soc&&j.soc!=="none"?Number(o.states[j.soc]?.state):NaN;M.push(X),k.push({kind:"plant",name:I.name||be(o,I.type),w:Math.max(0,oe(o.states[H])??0),dayIds:[H],battery:j?{soc:Number.isFinite(ne)?ne:null,w:se.get(j.id)??null}:null})}}if(u)for(let y of t.floors)for(let z of y.furniture){if(!z.holo)continue;let I=this.furnitureLinks?.get(z.id)?.power??null,K=s.find(H=>H.id===z.id);if(!I&&!K)continue;let T=y.elevation+ke(y,z)+z.h;M.push({p:[z.x,T+.1,z.z],n:[0,1,0],floorId:y.id,size:S.size*.7,roof:!1,views:"all"}),k.push({kind:"device",name:z.name||be(o,z.type),w:K?.power??(I?oe(o.states[I]):null),dayIds:I?[I]:[],battery:null})}let te=[];if(V("sound")){let y=new Set,z=(t.settings.roof.hologram??Ut).size,I=(T,H,X,j,ne,ae)=>{let re=o.states[H];if(!re||F(H)!=="media"||y.has(H))return;y.add(H);let ce=this.mediaGrace.get(H),$e=[re.attributes.media_title,re.attributes.app_name,re.attributes.source].find(Y=>typeof Y=="string"&&!!Y.trim())??"";if(!(!N(re)&&(re.state==="playing"||re.state==="paused"&&!!$e||re.state==="on"&&!!re.attributes.source))){ce&&ce.until>Date.now()?(te.push({...ce.source,playing:!1,level:0}),M.push(ce.anchor),k.push({...ce.card,media:{...ce.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,ce.until-Date.now()+100))):N(re)||(this.mediaGrace.delete(H),te.push({id:H,floorId:T.id,x:X,z:j,level:0,playing:!1,members:[]}));return}let pt=re.state==="playing",fe=re.attributes,Lt=typeof fe.volume_level=="number"?Math.min(1,Math.max(0,fe.volume_level)):.5,bn=Array.isArray(fe.group_members)?fe.group_members.filter(Y=>Y!==H):[];te.push({id:H,floorId:T.id,x:X,z:j,level:pt?.3+.7*Lt:0,playing:pt,members:bn});let wn=$e||A(o,"holo_media_playing"),Ot={p:[X,T.elevation+ne+.12,j],n:[0,1,0],floorId:T.id,size:z*.7,roof:!1,views:"all"},D={kind:"media",name:ae,w:null,dayIds:[],battery:null,media:{id:H,title:wn,artist:typeof fe.media_artist=="string"?fe.media_artist:typeof fe.media_album_name=="string"?fe.media_album_name:"",picture:typeof fe.entity_picture=="string"?fe.entity_picture:null,volume:Math.round(Lt*100),playing:pt}};M.push(Ot),k.push(D),this.mediaGrace.set(H,{until:Date.now()+45e3,card:D,source:te[te.length-1],anchor:Ot})},K=(T,H)=>{for(let X of T.furniture){if((X.entity!=null&&X.entity!=="none")!==H)continue;let j=this.furnitureLinks?.get(X.id)?.entity;j&&I(T,j,X.x,X.z,ke(T,X)+X.h,X.name||be(o,X.type))}};for(let T of t.floors)K(T,!0);for(let T of t.floors)for(let H of T.placements)I(T,H.entity_id,H.x,H.z,H.y??1.1,H.name||q(o,H.entity_id));for(let T of t.floors)K(T,!1)}if(V("auto_pro")){let y=(t.settings.roof.hologram??Ut).size;for(let z of t.floors)for(let I of z.furniture){if(I.type!=="parking"||!I.car)continue;let K=Ct(o,I);if(!K)continue;let T=Jt(o,I);if(T.soc===null&&T.range===null&&T.locked===null&&T.climateOn===null)continue;let H=Fi(I,K),X=ke(z,I)+(H?.h??1.6);M.push({p:[I.x,z.elevation+X+.25,I.z],n:[0,1,0],floorId:z.id,size:y*.7,roof:!1,views:"all"});let j=T.entities;k.push({kind:"car",name:I.name||be(o,K),w:null,dayIds:[],battery:null,car:{spot:I.id,soc:T.soc,range:T.range,rangeUnit:T.rangeUnit,chargingW:T.chargingW,charging:T.charging,locked:T.locked,climateOn:T.climateOn,lock:j.lock,climate:j.climate,charge:j.charging&&/^(switch|input_boolean)\./.test(j.charging)?j.charging:null}})}}n.setSound(te),n.setAnchors(M),JSON.stringify(k)!==JSON.stringify(this._holos)&&(this._holos=k),n.setSolarLevels(R&&!this.dimmed?$i(t,R):new Map),n.setFlows(!u||!(this.flows??this._flows)||this.dimmed?[]:wi({building:t,consumers:s,summary:c,battery:w??null,fieldPower:R,devicePower:this.devicePowers(o,t)}).map(y=>({floorId:y.floorId,a:y.a,b:y.b,dist:y.dist,power:y.power,color:zi(y.kind,c)})));let He=[];n.setPersons(He);let Xe=Gi(o,t,this.openingLinks,He);n.setFloorInfo(new Map([...Xe].map(([y,z])=>[y,Ui(o,z)])));let Se=o.states["sun.sun"]?.attributes,Wt=typeof Se?.elevation=="number"?Se.elevation:null;n.setSun(Wt!==null&&typeof Se?.azimuth=="number"?{elevation:Wt,azimuth:Se.azimuth}:null);let kr=this.weather&&!this.dimmed&&V("weather")?qo(o,Mt(o,this.weatherEntityId??t.settings.weather_entity)):null,ht=kr?jo(kr,t.settings.weather_effects):null;this.cloud=ht?.cloud??0,this._sky=(Wt===null?0:Math.min(1,Math.max(0,(Wt+4)/16)))*(1-.45*this.cloud);let Qi=ht?ht.sky:(t.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed&&V("weather")?{...ht??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:Qi}:null),this.watchLightning(!!ht?.lightning),this.applyTint();let xr=c.grid!==null||c.solar!==null||c.battery!==null||c.tariff!==null?c:null;JSON.stringify(xr)!==JSON.stringify(this._energy)&&(this._energy=xr);let Sr=s.some(y=>y.wallbox)?s.filter(y=>y.wallbox).reduce((y,z)=>y+z.power,0):null,$r=t.floors.flatMap(y=>y.furniture.filter(z=>z.type==="inverter")).map(y=>{let z=this.furnitureLinks?.get(y.id)?.power,I=z?oe(o.states[z]):null;return I===null?null:{name:y.name||be(o,y.type),w:Math.max(0,I)}}).filter(y=>!!y);JSON.stringify($r)!==JSON.stringify(this._plants)&&(this._plants=$r),Sr!==this._wallboxW&&(this._wallboxW=Sr),this.watchSolarDay([...new Set(k.flatMap(y=>y.dayIds))])}devicePowers(e,n){let t=new Map;for(let o of n.floors)for(let i of o.furniture){if(i.type!=="inverter"&&i.type!=="home_battery")continue;let s=this.furnitureLinks?.get(i.id)?.power,a=i.type==="home_battery"&&i.charge&&i.charge!=="none"?oe(e.states[i.charge]):null,l=s?oe(e.states[s],i.type==="home_battery"&&n.energy.battery_invert&&a===null):null;l!==null&&a!==null?l=Math.max(0,l)-Math.max(0,a):l===null&&a!==null&&(l=-Math.max(0,a)),l!==null&&t.set(i.id,l)}return t}detectionPins(e,n){let t=[];for(let o of n){if(!o.model?.startsWith("camera"))continue;let i=Date.now(),s=Ge(e,o.id).filter(u=>{let _=e.states[u];return _?_.state==="on"?!0:_.state==="off"&&!!_.last_changed&&i-Date.parse(_.last_changed)<Ba:!1}),a=new Map;for(let u of s){let _=Ko(e,u);a.has(_)||a.set(_,u)}a.size>1&&a.delete("motion");let l=(o.rotation??0)*Math.PI/180,c=[-Math.sin(l),Math.cos(l)],d=o.model==="camera_ceiling",h=0;for(let[u,_]of a){let g=e.states[_],p=g?.last_changed?fr(e,Date.parse(g.last_changed)):"";t.push({id:`detect:${_}`,floorId:o.floorId,roomId:o.roomId,x:o.x+(d?0:c[0]*1.1),z:o.z+(d?0:c[1]*1.1),y:1.4+.4*h++,icon:qi[u]??qi.motion,name:q(e,_),text:`${A(e,`detect_${u}`)}${p?` \xB7 ${p}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return t}gridPin(e,n,t){let o=cr(n);if(!o)return null;let i=Math.abs(t)<5;return{id:"grid",floorId:o.floorId,roomId:null,x:o.end[0],z:o.end[1],y:.9,icon:Na,name:A(e,"holo_grid"),text:i?Q(e,0):`${A(e,t<0?"energy_grid_export":"energy_grid_import")} ${Q(e,Math.abs(t))}`,active:!i,unavailable:!1,glow:null,pin:!0}}watchSolarDay(e){let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let t=async()=>{if(!this.hass||document.hidden)return;let o=await xi(this.hass,e);this.holoIds===n&&(this._rows=o)};t(),this.holoTimer=setInterval(()=>{t()},3e5)}placeHolo(e,n,t,o,i,s){let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),c=this._holos[e]?.kind==="main";if(!a){c&&this._holoOn&&(this._holoOn=!1);return}c&&o!==this._holoOn&&(this._holoOn=o);let d=!o;if(a.hidden!==d&&(a.hidden=d),l&&l.hasAttribute("hidden")!==d&&l.toggleAttribute("hidden",d),!o)return;let h=i*.8,u=34*h,_=46*h,g=n+(s?u:-u),p=t-_;if(a.style.transform=`translate(${g.toFixed(1)}px, ${p.toFixed(1)}px) scale(${(s?h:-h).toFixed(3)}, ${h.toFixed(3)}) translate(0, -100%)`,l){let f=l.firstElementChild,v=l.lastElementChild;f?.setAttribute("x1",n.toFixed(1)),f?.setAttribute("y1",t.toFixed(1)),f?.setAttribute("x2",g.toFixed(1)),f?.setAttribute("y2",p.toFixed(1)),v?.setAttribute("cx",n.toFixed(1)),v?.setAttribute("cy",t.toFixed(1))}}renderHologram(){let e=this._energy;if(!(V("energy_pro")||V("sound")||V("auto_pro"))||this.roomId||!(this.showEnergy||this.holograms)||!this.holoVisible())return b;let n=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&this.floorId===null;return this._holos.map((t,o)=>t.kind==="car"?this.renderCarCard(t,o):t.kind==="media"?this.renderMediaCard(t,o):t.kind==="device"?this.renderDeviceCard(t,o):n?this.renderHoloCard(t,o,e):b)}renderCarCard(e,n){let t=this.hass,o=g=>A(t,g),i=e.car,s=!this.mediaFolded.has(i.spot),a=()=>{this.mediaFolded.has(i.spot)?this.mediaFolded.delete(i.spot):this.mediaFolded.add(i.spot),this.requestUpdate()},l=(g,p,f)=>{t.callService(g,p,{entity_id:f})},c=(g,p)=>g.startsWith("climate.")?l("climate",p?"turn_on":"turn_off",g):l("homeassistant",p?"turn_on":"turn_off",g),d=()=>{if(!i.lock)return;let g=i.lock.startsWith("lock.");if(i.locked){if(!confirm(o("car_unlock_confirm")))return;g?l("lock","unlock",i.lock):l("homeassistant","turn_off",i.lock)}else g?l("lock","lock",i.lock):l("homeassistant","turn_on",i.lock)},h=i.soc===null?"#37e0ff":i.soc>=50?"#4dff80":i.soc>=20?"#ffcc40":"#ff4d40",u=!!i.lock&&/^(lock|input_boolean|switch)\./.test(i.lock),_=!!i.climate&&/^(climate|switch|input_boolean)\./.test(i.climate);return m`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${i.charging?`\u26A1 ${o("car_charging_short")}`:i.locked===null?"":i.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${h}">${i.soc!==null?`${Math.round(i.soc)} %`:"\u2013"}</b>
            <span>${i.range!==null?`${J(t,i.range,0)} ${i.rangeUnit}`:""}${i.charging&&i.chargingW?` \xB7 ${Q(t,i.chargingW)}`:""}</span>
          </div>
          ${i.soc!==null?m`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,i.soc))}%;background:${h}"></i></div>`:b}
          ${s&&(u||_||i.charge)?m`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${u?m`<button title=${i.locked?o("car_unlock_btn"):o("car_lock_btn")} @click=${d}>${i.locked?"\u{1F512}":"\u{1F513}"}</button>`:b}
                ${_?m`<button class=${i.climateOn?"fp3d-holo-on":""} title=${o("car_climate")} @click=${()=>c(i.climate,!i.climateOn)}>❄</button>`:b}
                ${i.charge?m`<button class=${i.charging?"fp3d-holo-on":""} title=${o("car_charging")} @click=${()=>c(i.charge,!i.charging)}>⚡</button>`:b}
              </div>`:b}
        </div>
      </div>`}renderMediaCard(e,n){let t=this.hass,o=u=>A(t,u),i=e.media,s=!this.mediaFolded.has(i.id),a=()=>{this.mediaFolded.has(i.id)?this.mediaFolded.delete(i.id):this.mediaFolded.add(i.id),this.requestUpdate()},l=(u,_={})=>{t.callService("media_player",u,{entity_id:i.id,..._})},c=this.mediaVolume.get(i.id);c&&(Math.abs(c.v-i.volume)<=2||Date.now()-c.at>3e4)&&this.mediaVolume.delete(i.id);let d=this.mediaVolume.get(i.id)?.v??i.volume,h=(u,_)=>{this.mediaVolume.set(i.id,{v:u,at:Date.now()}),this.requestUpdate(),(_||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:u/100}))};return m`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${i.playing?`\u25CF ${o("holo_media_playing")}`:o("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${i.picture?m`<img class="fp3d-holo-cover" src=${i.picture} alt="" />`:m`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${i.title}</b>${i.artist?m`<span>${i.artist}</span>`:b}</div>
        </div>
        ${s?m`<div class="fp3d-holo-media-controls">
                <button aria-label=${o("previous")} @click=${()=>l("media_previous_track")}>⏮</button>
                <button aria-label=${o("play_pause")} @click=${()=>l("media_play_pause")}>${i.playing?"\u23F8":"\u25B6"}</button>
                <button aria-label=${o("next")} @click=${()=>l("media_next_track")}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(d)}
                  aria-label=${o("volume")}
                  @input=${u=>h(Number(u.target.value),!1)}
                  @change=${u=>h(Number(u.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${d} %</span>
              </div>`:b}
      </div>
    </div>`}renderDeviceCard(e,n){let t=this.hass,o=c=>A(t,c),i=!this.holoFolded.has(n),s=this.dayOf(e),a=s&&s.curve.length>1?dr(s.curve,s.peak):null,l=()=>{this.holoFolded.has(n)?this.holoFolded.delete(n):this.holoFolded.add(n),this.requestUpdate()};return m`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">● ${o("holo_live")}</span></div>
        <div class="fp3d-holo-big"><b>${Q(t,e.w??0)}</b><span>${o("holo_dev_now")}</span></div>
        ${i&&s?m`<div class="fp3d-holo-sub">${o("holo_today")} <b>${J(t,s.kwh,1)} kWh</b> · ${o("holo_peak")} <b>${Q(t,s.peak)}</b></div>`:b}
        ${i&&a?yt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${n}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${n})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:b}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let n=Object.fromEntries(e.dayIds.filter(t=>this._rows[t]).map(t=>[t,this._rows[t]]));return Object.keys(n).length?ki(n):null}renderHoloCard(e,n,t){let o=this.hass,i=p=>A(o,p),s=!this.holoFolded.has(n),a=this.dayOf(e),l=e.kind==="main",c=l&&t.consumption!==null&&t.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,t.grid??0)/t.consumption)*100))):null,d=a&&a.curve.length>1?dr(a.curve,a.peak):null,h=(new Date().getHours()+new Date().getMinutes()/60)/24*220,u=()=>{this.holoFolded.has(n)?this.holoFolded.delete(n):this.holoFolded.add(n),this.requestUpdate()},_=l?t.solar??t.consumption??0:e.w??0,g=l?t.battery!==null||t.soc!==null?{soc:t.soc,w:t.battery}:null:e.battery;return m`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="button" tabindex="0" aria-label=${e.name} @click=${u}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">● ${i("holo_live")}</span></div>
        <div class="fp3d-holo-big"><b>${Q(o,_)}</b><span>${i(l&&t.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${s?m`${l&&this._plants.length>1?m`<div class="fp3d-holo-plants">${this._plants.map(p=>m`<span>${p.name}</span><b>${Q(o,p.w)}</b>`)}</div>`:b}
              ${a?m`<div class="fp3d-holo-sub">${i("holo_today")} <b>${J(o,a.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${Q(o,a.peak)}</b></div>`:b}
              ${d?yt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${n}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${d.area}" fill="url(#fp3dHoloG${n})"/>
                    <path d="${d.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${d.endX}" cy="${d.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${h}" y1="2" x2="${h}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:b}
              <div class="fp3d-holo-grid">
                ${g?m`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${i("holo_battery")}<br /><b>${g.soc!==null?`${Math.round(g.soc)} %`:Q(o,Math.abs(g.w??0))}</b>
                      ${g.w!==null&&Math.abs(g.w)>=5?m`<span>${g.w<0?"\u25B2":"\u25BC"} ${Q(o,Math.abs(g.w))}</span>`:b}
                    </div>`:b}
                ${l&&t.grid!==null?m`<div class="fp3d-holo-cell ${t.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${i("holo_grid")}<br /><b>${Q(o,Math.abs(t.grid))}</b> <span>${Math.abs(t.grid)<5?"":i(t.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:b}
                ${l&&t.consumption!==null?m`<div class="fp3d-holo-cell fp3d-holo-house">${i("holo_house")}<br /><b>${Q(o,t.consumption)}</b></div>`:b}
                ${l&&this._wallboxW!==null?m`<div class="fp3d-holo-cell fp3d-holo-wb">${i("holo_wallbox")}<br /><b>${Q(o,this._wallboxW)}</b></div>`:b}
              </div>
              ${c!==null?m`<div class="fp3d-holo-bar"><div style="width:${c}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${i("holo_autarky")}</span><b>${c} %</b></div>`:b}`:b}
      </div>
    </div>`}setAlerts(e){let n=e.map(o=>`${o.kind}:${o.entity}`),t=e.filter((o,i)=>!this.seenAlerts.has(n[i]));this.seenAlerts=new Set(n),n.join()!==this._alerts.map(o=>`${o.kind}:${o.entity}`).join()&&(this._alerts=e),e.length&&!this.alertTimer&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),!e.length&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),t.length&&this.alertJump&&this.jumpTo(t[0])}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,n){let t=this.building,o=this.hass,i=t?.floors.find(d=>d.id===e),s=i?.rooms.find(d=>d.id===n);if(!t||!o||!i||!s)return;let a=new Set(ie(o,s.area_id).filter(d=>F(d)==="light"));for(let d of i.placements)F(d.entity_id)==="light"&&G([d.x,d.z],s.points)&&a.add(d.entity_id);for(let d of i.furniture){let h=this.furnitureLinks.get(d.id)?.entity;h&&Hn(d.type)&&G([d.x,d.z],s.points)&&a.add(h);let u=this.furnitureLinks.get(d.id)?.light;u&&G([d.x,d.z],s.points)&&a.add(u)}let l=[...a].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let c=l.some(d=>o.states[d]?.state==="on");o.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:n,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600)}applyTint(){let e=this.viewer,n=this.building,t=this.hass;if(!e||!n||!t)return;let o=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=Ai(t,n,a);this.heatValues=l,o=new Map([...l].map(([c,d])=>[c,Ei(a,d)]))}let i=new Map;if(this.heatMode==="values")for(let a of n.floors)for(let l of a.rooms){let c=Ee(t,a,l,"temperature"),d=Ee(t,a,l,"humidity"),h=Ee(t,a,l,"co2"),u=[c!==null?`${J(t,nt(t,c),1)} ${we(t)}`:null,d!==null?`${J(t,d,0)} %`:null,h!==null?`${J(t,h,0)} ppm`:null].filter(_=>!!_);u.length&&i.set(l.id,u.join(" \xB7 "))}if(e.setRoomInfo(i),this._alerts.length){o??=new Map;let a=.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){let c=Jo(l.kind).map(d=>d*a);if(l.roomId)o.set(l.roomId,c);else for(let d of n.floors)for(let h of d.rooms)o.set(h.id,c)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(o??=new Map,o.set(this.roomFlash.roomId,[.9,.95,1]));let s=o?[...o].map(([a,l])=>`${a}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(o))}furnitureMarkers(e,n,t,o){let i=[],s=[],a=new Map,l=new Map;for(let h of n.floors)for(let u of h.furniture){let _=this.furnitureLinks.get(u.id),g=this.stateFaces(e,u);if(g.length&&a.set(u.id,{color:g[0].color,level:g[0].level,faces:g}),u.type==="fan_ceiling_light"){let P=_?.light??null;i.push({...this.lampMarker(e,h,u,P,"fan"),id:P??`fan-light:${u.id}`,fanMotor:!1})}if(Hn(u.type)){i.push(this.lampMarker(e,h,u,_?.entity??null));continue}if(u.type==="kitchen_display"){i.push(this.cabinetLightMarker(e,h,u,_?.entity??null));continue}let f=u.type==="parking"&&V("auto_pro")&&!!u.car?Jt(e,u):null,v=u.type==="home_battery"?u.soc:u.type==="wallbox"?u.status:u.type==="parking"&&f?u.car?.device??f.entities.soc:null,w=v&&v!=="none"?v:null,R=_??(w?{entity:null,power:null}:void 0);if(!R)continue;let S=u.type==="home_battery"?w??R.entity??R.power:R.entity??R.power??w;if(!S)continue;l.set(u.id,S);let $=R.entity?e.states[R.entity]:void 0,U=u.type==="meter"?n.energy.grid_invert&&!u.export:u.type==="home_battery"?n.energy.battery_invert&&!u.charge:!1,W=R.power?oe(e.states[R.power],U):null,x=u.type==="home_battery"&&u.charge&&u.charge!=="none"?u.charge:u.type==="meter"&&u.export&&u.export!=="none"?u.export:null,M=x?oe(e.states[x]):null;M!==null&&(W=Math.max(0,W??0)-Math.max(0,M)),R.power&&W!==null&&!o.has(R.power)&&(o.add(R.power),s.push({id:S,powerEntity:R.power,floorId:h.id,x:u.x,z:u.z,power:Math.max(0,W),wallbox:u.type==="wallbox"||void 0}));let k=(W??0)>10||$?.state==="on"||$?.state==="running"||Ae($);if(f&&Ct(e,u)){let P=[];if(f.soc!==null){let O=f.soc>=50?[.3,1,.5]:f.soc>=20?[1,.8,.25]:[1,.3,.25];P.push({part:"band",color:O,level:f.charging?1:.6})}if(f.climateOn){let O=f.entities.climate?e.states[f.entities.climate]:void 0,ee=!!O&&(O.attributes.hvac_action==="cooling"||O.state==="cool");P.push({part:"cabin",color:ee?[.45,.8,1]:[1,.55,.22],level:.35})}P.length&&a.set(`${u.id}:vehicle`,{color:P[0].color,level:P[0].level,faces:P})}if(u.type==="radiator"&&$&&F($.entity_id)==="climate"){let P=$.attributes;if(P.hvac_action==="heating"){let O=typeof P.temperature=="number"&&typeof P.current_temperature=="number"?P.temperature-P.current_temperature:1;a.set(u.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,O))})}}else if((u.type==="air_conditioner"||u.type==="wall_thermostat"||u.type==="heat_pump_outdoor")&&$&&F($.entity_id)==="climate"){let P=String($.attributes.hvac_action??$.state);if(!["off","idle","unavailable","unknown"].includes(P)){let O=P==="heating"||P==="heat";a.set(u.id,{color:O?[1,.5,.18]:[.28,.8,1],level:P==="cooling"||O?.85:.55})}}else u.type==="water_pump"&&k?a.set(u.id,{color:[.2,.78,1],level:.85,plain:!0}):(u.type==="water_heater"||u.type==="hot_water_tank")&&k?a.set(u.id,{color:[.2,.78,1],level:.85,plain:!0}):["range_hood","microwave","water_purifier"].includes(u.type)&&k?a.set(u.id,{color:u.type==="microwave"?[1,.58,.2]:[.2,.78,1],level:.8,plain:!0}):u.type==="air_purifier"&&k?a.set(u.id,{color:[.2,.9,.72],level:.85,plain:!0}):(u.type==="ventilation_fan"||u.type==="humidifier")&&k?a.set(u.id,{color:[.2,.9,.72],level:.85,plain:!0}):u.type==="robot_mower"&&k?a.set(u.id,{color:$?.state==="returning"?[1,.7,.25]:[.2,.9,.72],level:.9,plain:!0}):["network_cabinet","nas_server","access_point","modem_router","electrical_panel","ups_unit"].includes(u.type)&&$&&!["off","disconnected","unavailable","unknown"].includes($.state)?a.set(u.id,{color:[.2,.86,1],level:.75,plain:!0}):u.type==="smoke_detector"&&k?a.set(u.id,{color:[1,.18,.12],level:1,plain:!0}):u.type==="siren_alarm"&&k?a.set(u.id,{color:[1,.12,.22],level:1,plain:!0}):u.type==="smart_speaker"&&$&&["playing","on","paused"].includes($.state)?a.set(u.id,{color:Qt($)??[.22,.88,1],level:$.state==="playing"?1:.55,ring:!0,plain:!0}):u.type==="security_camera"&&$&&!["off","idle","unavailable","unknown"].includes($.state)?a.set(u.id,{color:[.25,.82,1],level:.75,plain:!0}):u.type==="smart_lock"&&$?a.set(u.id,{color:$.state==="locked"?[.25,.9,.55]:[1,.45,.2],level:.8,plain:!0}):(u.type==="washer"||u.type==="dryer"||u.type==="dishwasher")&&k&&a.set(u.id,{color:[.3,.85,1],level:.8});let E=de(u.type),C=!!E&&!E.light&&E.parts.some(P=>P.glow);if($&&C&&V("sound")&&F($.entity_id)==="media"&&$.state==="playing"&&!Yt(u.type)){let P=typeof $.attributes.volume_level=="number"?$.attributes.volume_level:.5;a.set(u.id,{color:Qt($)??[.22,.88,1],level:.5+.5*P,ring:!0,plain:!0})}if($&&Yt(u.type)){let P=V("screens"),O=F($.entity_id)==="light"?rt($):null,ee=F($.entity_id)==="media"&&["playing","on","paused","idle"].includes($.state),se=P&&F($.entity_id)==="media"?Qt($):O?O.color:Ae($)||ee?[.22,.88,1]:null,ue=P&&F($.entity_id)==="media"?$.attributes.entity_picture??null:null;se&&a.set(u.id,{color:se,level:$.state==="playing"?1:.6,picture:ue,ring:C&&V("sound")&&$.state==="playing"})}if(t.has(S))continue;t.add(S);let L=R.entity?F(R.entity):null,B=h.rooms.find(P=>P.points.length>=3&&G([u.x,u.z],P.points));i.push({id:S,floorId:h.id,roomId:B?.id??null,x:u.x,z:u.z,y:Va(u)+ke(h,u),icon:u.icon?nn(u.icon):$t(L??"switch"),name:u.name||(R.entity?q(e,R.entity):be(e,u.type)),ownName:u.name||void 0,showName:!!u.show_name,text:f?this.carText(e,f,!!$&&!hr.has($.state.toLowerCase())):u.type==="home_battery"?this.batteryText(e,w,W):u.type==="wallbox"?this.wallboxText(e,w,W):u.type==="meter"?this.meterText(e,W):$?pe(e,$):W!==null?Q(e,Math.max(0,W)):"",active:f?f.charging:$?Ae($):(W??0)>5,unavailable:$?N($):!1,glow:null,furnitureId:u.id,energyDevice:u.type==="inverter"||u.type==="home_battery"||u.type==="wallbox"||u.type==="meter"||!!f,show:u.marker??(f?"always":void 0),fromFurniture:!0})}this.cameraScreens=0;let c=Un(e,n.floors),d=V("screens");for(let h of n.floors)for(let u of h.furniture){if(!d||!u.pictures?.length||!Yt(u.type)||u.type==="fridge_smart"&&c.get(u.id)?.right)continue;let _=u.pictures.find(f=>Eo(e,f));if(!_)continue;let g=this.pictureUrl(_.image),p=u.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];g&&a.set(u.id,{color:p,level:1,picture:g,plain:!0})}return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall),{markers:i,consumers:s,screens:a,targets:l}}trailNow(e,n){let t=Date.now(),o=mn(e,n),i=o.map(s=>{let a=e.states[s.entity];return{entity:s.entity,state:a?.state,lastChanged:a?.last_changed?Date.parse(a.last_changed):void 0}});return Di(o,Ii(this.trailRows,i,t),t)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!V("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!V("camera_cockpit")){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let n=this.hass,t=this.building;if(!n||!t||document.hidden)return;let o=mn(n,t).map(i=>i.entity);if(o.length){try{let i=await n.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-fn).toISOString(),entity_ids:o,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=i??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let n=this.hass.states[e.slice(7)],t=n?.attributes.entity_picture;return!t||N(n)?null:(this.cameraScreens++,t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),Jr(this.hass,e).then(n=>{this.pictureUrls.set(e,n),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,n){let t=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(o=>{if(t.has(o.type)||o.type.startsWith("lamp_")&&o.type!=="lamp_floor"&&o.type!=="lamp_uplight"||o.h<.04||ke(e,o)>.12)return!1;let i=de(o.type);return i&&(i.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(o.type))?!1:G([o.x,o.z],n)||qt(o).some(s=>G(s,n))}).map(o=>qt(o))}robotInfos(e,n){let t=[];for(let o of n.floors)for(let i of o.furniture){if(i.type!=="robot_vacuum")continue;let s=this.furnitureLinks.get(i.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=a==="cleaning"?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=i.rotation*Math.PI/180,d=i.d*.14,h=[i.x-Math.sin(c)*d,i.z+Math.cos(c)*d],u=o.rooms.filter(f=>f.points.length>=3),g=(l==="cleaning"?Po(e,u,s,jn(e,s,i.room_sensor)):null)??u.find(f=>G(h,f.points)),p=l==="cleaning"&&g?this.robotObstacles(o,g.points):[];t.push({id:i.id,floorId:o.id,rest:h,restHeading:-c,mode:l,room:g?.points??null,roomId:g?.id??null,obstacles:p})}return t}batteryText(e,n,t){let o=n?Number(e.states[n]?.state):Number.NaN,i=[];return Number.isFinite(o)&&i.push(`${J(e,o,0)} %`),t!==null&&Math.abs(t)>=10&&i.push(`${t<0?"\u25B2":"\u25BC"} ${Q(e,Math.abs(t))}`),i.join(" \xB7 ")}meterText(e,n){return n===null?"":Math.abs(n)<5?Q(e,0):`${A(e,n<0?"energy_grid_export":"energy_grid_import")} ${Q(e,Math.abs(n))}`}wallboxText(e,n,t){let o=n?e.states[n]:void 0,i=String(o?.state??"").toLowerCase(),s=(t??0)>50||/charg|laden|lädt/.test(i),a=o?.entity_id.startsWith("binary_sensor.")?i==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(i),l=s?A(e,"wallbox_charging"):a?A(e,"wallbox_plugged"):o&&!N(o)&&!o.entity_id.startsWith("binary_sensor.")?pe(e,o):"",c=t!==null&&t>50?Q(e,t):"";return[l,c].filter(Boolean).join(" \xB7 ")}stateFaces(e,n){let t=[],o=n.state_entity2&&n.state_entity2!=="none"?[[n.state_entity,n.state_split==="top_bottom"?"bottom":"left"],[n.state_entity2,n.state_split==="top_bottom"?"top":"right"]]:[[n.state_entity,"all"]];for(let[i,s]of o){if(!i||i==="none")continue;let a=e.states[i];if(!a||N(a)||!(Ae(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let c=F(i)==="light"?rt(a):null;t.push({part:s,color:c?c.color:[1,.71,.28],level:c?c.level:.85})}return t}carText(e,n,t){let o=s=>A(e,s);if(t||n.away!==null){let s=n.away?` \xB7 ${n.away}`:"";return`${o("car_away")}${s}`}let i=[];return n.soc!==null&&i.push(`${J(e,n.soc,0)} %`),n.range!==null&&i.push(`${J(e,n.range,0)} ${n.rangeUnit}`),n.charging?i.push(n.chargingW!==null?`\u26A1 ${Q(e,n.chargingW)}`:`\u26A1 ${o("car_charging_short")}`):n.plugged&&i.push("\u{1F50C}"),n.locked!==null&&i.push(n.locked?"\u{1F512}":"\u{1F513}"),i.join(" \xB7 ")}lampMarker(e,n,t,o,i){let s=o?e.states[o]:void 0,a=de(t.type),l=i??mo[t.type]??a?.light??"floor",c=n.rooms.some(g=>g.points.length>=3&&G([t.x,t.z],g.points)),d=l==="strip"&&!c?Ne(n,t.x,t.z)+(t.mount_y??0):t.mount_y!=null&&!a?t.mount_y:a||l==="wall"||l==="strip"||l==="fan"?ke(n,t):l==="table"?Je(n,t.x,t.z):l==="bollard"||l==="garden"?Ne(n,t.x,t.z):0,h=n.rooms.find(g=>g.points.length>=3&&G([t.x,t.z],g.points)),u=n.height,_=a?a.mount==="ceiling"?Math.max(.5,d-.15):d+t.h+.2:{ceiling:u-.3,downlight:u-.25,spot:u-.35,panel:u-.25,pendant:Math.max(.6,u-t.h-.25),floor:d+t.h+.25,uplight:d+t.h+.25,table:d+t.h+.2,wall:d+t.h+.2,strip:t.upright?d+t.w+.15:Math.max(.3,d-.2),bollard:d+t.h+.25,garden:d+t.h+.25,fan:Math.max(.3,d+t.h*.2)}[l];return{id:o??`lamp:${t.id}`,floorId:n.id,roomId:h?.id??null,x:t.x,z:t.z,y:_,icon:$t("light"),name:t.name||(o?q(e,o):be(e,t.type)),text:s?pe(e,s):"",active:s?Ae(s):!1,unavailable:s?N(s):!1,glow:s?rt(s,t.color_entity&&t.color_entity!=="none"?e.states[t.color_entity]:void 0):null,lamp:l,rotation:t.rotation,mirror:!!t.mirror,roll:t.tilt??0,upright:!!t.upright,size:[t.w,t.d,t.h],base:d,pickable:!!o,furnitureId:t.id,pack:a?t.type:null,lightY:a?a.mount==="ceiling"?d:d+t.h*.85:l==="fan"?d+t.h*.08:void 0,effect:!!s&&s.state==="on"&&typeof s.attributes.effect=="string"&&!/^(none|off|solid|static|normal)$/i.test(s.attributes.effect),variant:t.variant,show:t.marker??void 0,fromFurniture:!0}}cabinetLightMarker(e,n,t,o){let i=t.rotation*Math.PI/180,s=Math.max(0,t.d/2-.055),a={...t,type:"led_strip",x:t.x-Math.sin(i)*s,z:t.z+Math.cos(i)*s,w:Math.max(.18,t.w-.16),d:.025,h:.025,mount_y:Math.max(.3,t.h*.84),name:t.name||be(e,"kitchen_display")};return this.lampMarker(e,n,a,o)}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(e.lamp||e.model)return!1;let n=F(e.id);return n==="light"?!1:e.fromFurniture?(e.power??0)>=1||n==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[n,t]of this.openingLinks??[]){let o=t.cover??t.contact??t.tilt;o&&e.set(n,o)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let n=this.building?.floors.filter(o=>o.rooms.length).length??0;if(!this.floorThumbs||n<2){this._thumbs=[];return}let t=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},t)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return b;let e=new Map(this.building.floors.map(t=>[t.id,t.name])),n=[...this._thumbs].sort((t,o)=>(this.building.floors.find(i=>i.id===o.floorId)?.elevation??0)-(this.building.floors.find(i=>i.id===t.floorId)?.elevation??0));return m`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""}" aria-label=${A(this.hass,"floors")}>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${A(this.hass,"all_floors")}</span>
      </button>
      ${n.map(t=>m`<button class="fp3d-thumb" aria-pressed=${this.floorId===t.floorId} @click=${()=>this.fire("floor-tap",{floorId:t.floorId})}>
          <img src=${t.url} alt="" />
          <span>${e.get(t.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,n,t){if(V("auto_pro")&&this.hass&&this.building)for(let i of this.building.floors)for(let s of i.furniture){if(s.type!=="parking"||!s.car)continue;let a=Jt(this.hass,s);if([s.entity,s.car.device,...Object.values(a.entities)].filter(c=>!!c&&c!=="none").includes(e)){this._menu={entity:e,x:n,y:t,car:a};return}}let o=F(e);o==="light"||o==="cover"||o==="switch"||o==="fan"||o==="lock"||o==="camera"?this._menu={entity:e,x:n,y:t}:xe(this,e)}onDeviceSwipe(e,n,t,o,i){let s=this.hass?.states[e];if(n==="start"){if(!s||N(s)||this.confirmSet.has(e))return!1;let l=F(e);if(l==="light"&&_r(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:o,y:i},!0}if(l==="cover"&&gr(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:o,y:i},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(n==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-t/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return b;let n=this._alerts.slice(0,3);return m`<div class="fp3d-alert-banner" role="alert">
      ${n.map(t=>m`<button class="fp3d-alert fp3d-alert-${t.kind}" title=${er(this.hass,e,t)} @click=${()=>this.jumpTo(t)}>${er(this.hass,e,t)}</button>`)}
      ${this._alerts.length>3?m`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:b}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass)return b;let n=e.floors.flatMap(i=>i.rooms).find(i=>i.id===this.roomId),t=n?ie(this.hass,n.area_id).filter(i=>F(i)==="scene"||F(i)==="script").slice(0,6):[];if(!t.length)return b;let o=n?.area_id?this.hass.areas?.[n.area_id]?.name:void 0;return m`<div class="fp3d-scenes">
      ${t.map(i=>m`<button class="fp3d-chip" aria-pressed=${this._sceneFired===i} @click=${()=>this.runScene(i)}>${q(this.hass,i,o)}</button>`)}
    </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return b;if(this._find===null)return m`<button class="fp3d-find-btn" title=${A(this.hass,"find")} aria-label=${A(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let n=Wi(this.findIndex??=Ci(this.hass,e),this._find);return m`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${A(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${t=>this._find=t.target.value}
        @keydown=${t=>{t.key==="Escape"&&(this._find=null),t.key==="Enter"&&n[0]&&this.goTo(n[0])}}
      />
      <button class="fp3d-find-close" aria-label=${A(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?m`<div class="fp3d-find-list">
            ${n.length?n.map(t=>m`<button @click=${()=>this.goTo(t)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${t.icon?tn(t.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${t.name}</b>${t.where?m`<small>${t.where}</small>`:b}</span>
                  </button>`):m`<p>${A(this.hass,"find_none")}</p>`}
          </div>`:b}
    </div>`}renderCentral(){let e=this.building,n=this.hass;if(!e||!n||!this.central||this._find!==null)return b;let t=(p,f)=>A(n,p,f),o=m`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${t("central")}
      aria-label=${t("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return o;let i=this.floorId?e.floors.find(p=>p.id===this.floorId):void 0,s=i?[i]:e.floors,a=s.flatMap(p=>Zn(n,p).lights),l=s.flatMap(p=>Zn(n,p).covers),c=a.filter(p=>n.states[p]?.state==="on").length,d=!i,h=(p,f,v,w)=>{if(w.length){if(d&&this._armed!==p){this._armed=p,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,n.callService(f,v,{entity_id:w})}},u=(p,f,v,w,R)=>m`<button class="fp3d-btn ${this._armed===p?"fp3d-central-armed":""}" ?disabled=${!R.length} @click=${()=>h(p,v,w,R)}>
        ${this._armed===p?t("central_sure"):t(f)}
      </button>`,_=(e.settings.favorites??[]).filter(p=>n.states[p]),g=this.buttons??e.settings.buttons??[];return m`${o}
      <div class="fp3d-central" role="dialog" aria-label=${t("central")}>
        <b>${i?i.name:t("central_house")}</b>
        <div class="fp3d-central-row">
          <span>${t("central_lights")}${a.length?m` <small>${c}/${a.length}</small>`:b}</span>
          ${u("lights_on","central_on","light","turn_on",a.filter(p=>n.states[p]?.state==="off"))}
          ${u("lights_off","central_off","light","turn_off",a.filter(p=>n.states[p]?.state==="on"))}
        </div>
        ${l.length?m`<div class="fp3d-central-row">
              <span>${t("central_covers")} <small>${l.length}</small></span>
              ${u("covers_open","central_open","cover","open_cover",l)}
              ${u("covers_close","central_close","cover","close_cover",l)}
            </div>`:b}
        <b>${t("central_favorites")}</b>
        ${_.length?m`<div class="fp3d-central-favs">
              ${_.map(p=>{let[f,v]=Io(p),w=n.states[p],R=f==="homeassistant"&&w?.state==="on";return m`<button
                  class="fp3d-chip"
                  aria-pressed=${R||this._sceneFired===p}
                  ?disabled=${N(w)}
                  @click=${()=>{n.callService(f,v,{entity_id:p}),this._sceneFired=p,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${q(n,p)}
                </button>`})}
            </div>`:g.length?b:m`<p class="fp3d-central-hint">${t("central_no_favorites")}</p>`}
        ${g.length?m`<div class="fp3d-central-favs">
              ${g.map(p=>m`<button
                  class="fp3d-chip fp3d-own-btn"
                  @click=${f=>{Do(n,f.currentTarget,p),p.action!=="service"&&(this._central=!1)}}
                >
                  ${p.icon?m`<ha-icon .icon=${p.icon.startsWith("mdi:")?p.icon:`mdi:${p.icon}`}></ha-icon>`:b}${p.label}
                </button>`)}
            </div>`:b}
      </div>`}mediaCardUp(e,n){let t=e.states[n];if(!t||F(n)!=="media")return!1;if((this.mediaGrace.get(n)?.until??0)>Date.now()&&N(t))return!0;let o=[t.attributes.media_title,t.attributes.app_name,t.attributes.source].some(i=>typeof i=="string"&&!!i.trim());return!N(t)&&(t.state==="playing"||t.state==="paused"&&o)}renderEye(){if(!this.cleanButton||!this.hass)return b;let e=A(this.hass,this.clean?"controls_show":"controls_hide");return m`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?yt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:yt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return b;let n=e.kind==="light"&&e.value<=0;return m`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${q(this.hass,e.entity)}</span>
      <b>${n?A(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let n=this.viewer,t=this.building;if(!n||!t)return;if(!V("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let o=t.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!o)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:n.getView()},this.watchCameras(!0);let i=this.floorId===o?0:300;i&&(this.throughFloor=o,this.fire("floor-tap",{floorId:o})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},i)}endThrough(){let e=this._through;e&&(this._through=null,this.viewer?.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?b:m`<div class="fp3d-pro" role="dialog">
      <b>${A(this.hass,"pro_title")}</b>
      <span>${A(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${A(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip fp3d-chip-on" href=${Oo(this.hass.language)} target="_blank" rel="noopener">${A(this.hass,"pro_shop")}</a>
        <a class="fp3d-chip" href=${Bo(this.hass.language,this._proHint)} target="_blank" rel="noopener">${A(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${A(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building)return b;let e=this.hass,n=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!V("camera_cockpit"))return m`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${A(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${n}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${A(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let t=[...new Set(this.building.floors.flatMap(l=>l.placements.map(c=>c.entity_id)).filter(l=>F(l)==="camera"))];this.watchCameras(!0);let o=l=>{let c=e.states[l],d=c?.attributes.entity_picture;return d&&c&&!N(c)?d.startsWith("data:")?d:`${d}${d.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},i=l=>{let c=e.states[l];return m`${q(e,l)}${c?.state==="recording"?m` <b>● ${A(e,"state_recording")}</b>`:b}`},s=this._wallBig&&t.includes(this._wallBig)?this._wallBig:null;if(s){let l=o(s),c=this.liveFor(s),d=()=>{this.throughWall=!0,n(),this.lookThrough(s)};return m`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${A(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${i(s)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${d}>${A(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${c??(l?m`<img src=${l} alt="" />`:m`<div class="fp3d-wall-none">${A(e,"state_unavailable")}</div>`)}</div>
      </div>`}let a=t.length<=1?1:t.length<=4?2:t.length<=9?3:4;return m`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${A(e,"camera_wall_title")} · ${t.length} <span class="fp3d-still">${A(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${a}, minmax(0, 1fr))">
        ${t.map(l=>{let c=o(l),d=Ge(e,l).some(h=>e.states[h]?.state==="on");return m`<button class="fp3d-wall-cam ${d?"fp3d-wall-seen":""}" title=${A(e,"camera_wall_big")} @click=${()=>this._wallBig=l}>
            ${c?m`<img src=${c} alt="" />`:m`<div class="fp3d-wall-none">${A(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${i(l)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(e){if(this.live?.id!==e){let n={id:e,el:null,failed:!1};this.live=n;let t=window;t.loadCardHelpers?t.loadCardHelpers().then(o=>{if(this.live!==n)return;let i=o.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});i.hass=this.hass,n.el=i,this.requestUpdate()}).catch(()=>{n.failed=!0,this.requestUpdate()}):n.failed=!0}return this.live.el}renderThrough(){let e=this._through;if(!e||!this.hass)return b;let n=this.hass.states[e.entity],t=n?.attributes.entity_picture,o=t&&!N(n)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null;return m`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${o?m`<img class="fp3d-through-img" src=${o} alt="" />`:b}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${q(this.hass,e.entity)}</span>
        <span class="fp3d-still">${A(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${A(this.hass,"through_blend")}
          @input=${i=>this._blend=Number(i.target.value)/100}
        />
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${A(this.hass,"through_back")}</button>
      </div>
    </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass)return b;let n=this.renderRoot.querySelector(".fp3d-stage"),t=n?.clientWidth??800,o=n?.clientHeight??600,i=Math.max(8,Math.min(t-240,e.x-116)),s=Math.max(8,Math.min(o-360,e.y-170));return m`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${i}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        .presets=${V("sound")?this.building?.settings.media_presets??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${V("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}onDeviceTap(e,n=0,t=0){if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("detect:")){xe(this,e.slice(7));return}let o=F(e);if(o==="cover"||o==="camera"){this._menu={entity:e,x:n,y:t};return}if(o&&Mo.has(o)){if(this.confirmSet.has(e)&&!confirm(A(this.hass,"confirm_switch",{name:q(this.hass,e)})))return;Uo(this.hass,e)}else xe(this,e)}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!V("energy_pro")||!e||this.roomId||!this.showEnergy)return b;let n=o=>A(this.hass,o),t=[];if(e.consumption!==null&&t.push({cls:"total",label:n("energy_consumption"),value:Q(this.hass,e.consumption)}),e.grid!==null){let o=e.grid<0;t.push({cls:o?"export":"grid",label:n(o?"energy_grid_export":"energy_grid_import"),value:Q(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&t.push({cls:"solar",label:n("energy_solar"),value:Q(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let o=[e.battery!==null?Q(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);t.push({cls:"battery",label:n("energy_battery"),value:o.join(" \xB7 ")})}return e.tariff&&t.push({cls:"tariff",label:n("energy_tariff"),value:`${J(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),m`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?b:t.map(o=>m`<div class="fp3d-energy-item fp3d-energy-${o.cls}"><span>${o.label}</span><b>${o.value}</b></div>`)}
      ${this.flows!==null?b:m`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${n("flows_hint")} (${n(this._flows?"flow_on":"flow_off")})`} aria-label=${n("flows")} @click=${()=>this.toggleFlows()}>
        <span>${n("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?b:m`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${n("holos_hint")} aria-label=${n("holos")} @click=${()=>this.toggleHolos()}>
        <span>${n("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return b;let e=hn[this.heatMode],n=this.heatMode==="temperature",t=n?nt(this.hass,e.stops[0][0]):e.stops[0][0],o=n?nt(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],i=n?we(this.hass):e.unit,s=a=>A(this.hass,a);return m`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Ri(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${J(this.hass,t,0)} ${i}</span><span>${J(this.hass,o,0)} ${i}</span></span>
      ${this.heatValues.size?b:m`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=Ht[this.theme]??Ht.neon,n=this._sky;return e.night[0].map((t,o)=>Math.round(t+(e.day[0][o]-t)*n))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let n=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),n()},5e3+Math.random()*9e3)};n()}render(){let e=this._sky,n=(i,s)=>`rgb(${i.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,t=Ht[this.theme]??Ht.neon,o=`--fp3d-sky:${n(t.night[0],t.day[0])};--fp3d-ground:${n(t.night[1],t.day[1])}`;return m`<div
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""}"
      style=${o}
    >
      ${this._error?m`<p class="fp3d-error">${this._error}</p>`:b} ${this.clean?b:this.renderEnergy()} ${this.renderHologram()} ${this.clean?b:this.renderLegend()}
      ${this.renderAlerts()} ${this.clean?b:m`${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.renderSwipe()} ${this.renderThrough()} ${this.renderCameraWall()}
      ${this.clean?b:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.showStats&&this._stats?m`<span class="fp3d-stats"
            ><b>${this._stats.fps?A(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):A(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?m`(${this._stats.busy.map(i=>A(this.hass,`stats_busy_${i}`)).join(", ")})`:b} ·
            ${A(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${A(this.hass,this._stats.low?"stats_low":"stats_full",{r:J(this.hass,this._stats.pixelRatio,2)})}</span
          >`:b}
    </div>`}static styles=[ve,Fe,he`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .fp3d-alert-banner {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 6px;
        max-width: calc(100% - 24px);
        z-index: 4;
      }
      .fp3d-alert {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 7px 14px 7px 12px;
        border: 0;
        border-left: 4px solid #ff3b4f;
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        font: 600 13.5px var(--fp3d-font);
        box-shadow: 0 0 18px rgba(255, 59, 79, 0.35);
        cursor: pointer;
        animation: fp3d-alert-pulse 1.2s ease-in-out infinite;
      }
      .fp3d-alert-water,
      .fp3d-alert-window_rain {
        border-left-color: #4fb3ff;
        box-shadow: 0 0 18px rgba(79, 179, 255, 0.35);
      }
      .fp3d-alert-alarm_pending {
        border-left-color: #ffb547;
        box-shadow: 0 0 18px rgba(255, 181, 71, 0.35);
      }
      .fp3d-alert-more {
        align-self: center;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      @keyframes fp3d-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .fp3d-has-alerts .fp3d-energy {
        top: 58px;
      }
      .fp3d-scenes {
        position: absolute;
        left: 60px;
        right: 60px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
        z-index: 2;
        pointer-events: none;
      }
      .fp3d-scenes .fp3d-chip {
        pointer-events: auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-alert,
        .fp3d-dev-found {
          animation: none;
        }
      }
      .fp3d-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        container-name: fp3d;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-sky, var(--fp3d-bg2)), var(--fp3d-ground, var(--fp3d-bg)) 72%);
        transition: background 2s ease;
      }
      .fp3d-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-canvas:active {
        cursor: grabbing;
      }
      .fp3d-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .fp3d-pin-info {
        display: grid;
        gap: 1px;
        text-align: center;
      }
      .fp3d-pin-info small {
        font-size: 11px;
        font-weight: 500;
        opacity: 0.9;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--fp3d-title-font);
        color: var(--fp3d-text);
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 22px rgba(55, 224, 255, 0.28);
      }
      .fp3d-pin-floor b {
        font: 700 15px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-pin-floor span {
        font: 500 12px var(--fp3d-font);
        opacity: 0.78;
      }
      .fp3d-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        font: 600 12px var(--fp3d-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .fp3d-dev-icon {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
      }
      .fp3d-dev[data-entity^="trail:"] {
        padding: 2px 4px 2px 2px;
        font-size: 11px;
        border-color: rgba(55, 224, 255, 0.5);
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-icon {
        color: #37e0ff;
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--fp3d-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-watt:empty {
        display: none;
      }
      .fp3d-dev-watt {
        padding: 1px 6px 1px 0;
        color: #37e0ff;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .fp3d-dev-on .fp3d-dev-watt {
        color: #2a1a00;
      }
      .fp3d-person {
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        background: #ff5fd2;
        color: #fff;
        font: 700 12px var(--fp3d-font);
        box-shadow:
          0 0 0 2px rgba(255, 95, 210, 0.45),
          0 0 18px #ff5fd2;
        pointer-events: auto;
      }
      .fp3d-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .fp3d-person[hidden] {
        display: none;
      }
      .fp3d-no-room-names .fp3d-pin {
        display: none !important;
      }
      /* tablet level: blur over the canvas and glowing shadows are expensive on weak GPUs */
      .fp3d-stage.fp3d-low {
        transition: none;
      }
      .fp3d-low .fp3d-pin,
      .fp3d-low .fp3d-dev,
      .fp3d-low .fp3d-dev-on,
      .fp3d-low .fp3d-energy-item,
      .fp3d-low .fp3d-find input,
      .fp3d-low .fp3d-find-list,
      .fp3d-low .fp3d-find-btn,
      .fp3d-low .fp3d-swipe,
      .fp3d-low .fp3d-thumb {
        backdrop-filter: none;
        box-shadow: none;
        transition: none;
      }
      .fp3d-thumbs {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: calc(100% - 140px);
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 2;
      }
      .fp3d-thumb {
        position: relative;
        display: grid;
        padding: 0;
        width: 150px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: color-mix(in srgb, var(--fp3d-chrome) 70%, transparent);
        color: var(--fp3d-text);
        cursor: pointer;
        overflow: hidden;
        font: inherit;
        box-shadow: var(--fp3d-shadow);
        opacity: 0.72;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .fp3d-thumb:hover,
      .fp3d-thumb[aria-pressed="true"] {
        opacity: 1;
      }
      .fp3d-thumb[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-accent), 0 0 18px rgba(55, 224, 255, 0.25);
      }
      .fp3d-thumb img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
      }
      .fp3d-thumb span {
        position: absolute;
        left: 8px;
        bottom: 6px;
        font-size: 12px;
        font-weight: 600;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }
      .fp3d-thumb-house {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
      }
      .fp3d-thumb-house span {
        position: static;
        text-shadow: none;
      }
      .fp3d-thumbs-small .fp3d-thumb {
        width: 104px;
      }
      .fp3d-find-btn {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      /* the star sits above the search button, its menu opens above it */
      .fp3d-central-btn {
        position: absolute;
        left: 12px;
        bottom: calc(56px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
        z-index: 3;
      }
      .fp3d-central-on {
        color: var(--fp3d-accent);
      }
      .fp3d-central {
        position: absolute;
        left: 12px;
        bottom: calc(104px + var(--fp3d-bottom-inset, 0px));
        width: min(320px, calc(100% - 24px));
        max-height: calc(100% - 140px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 16px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(10px);
        z-index: 4;
      }
      .fp3d-central > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .fp3d-central-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-central-row small {
        opacity: 0.6;
      }
      .fp3d-central .fp3d-btn {
        min-width: 64px;
      }
      .fp3d-central-armed {
        background: #ff8a3d !important;
        color: #1a0d00 !important;
      }
      .fp3d-central-favs {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-own-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .fp3d-own-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .fp3d-central-hint {
        margin: 0;
        font-size: 13px;
        opacity: 0.7;
      }
      .fp3d-low .fp3d-central {
        backdrop-filter: none;
      }
      /* the eye sits beside the search button; alone in the corner once the view is clean */
      .fp3d-eye {
        position: absolute;
        left: 56px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--fp3d-text);
        cursor: pointer;
        z-index: 4;
      }
      .fp3d-eye-clean {
        left: 12px;
        opacity: 0.55;
      }
      .fp3d-eye:hover,
      .fp3d-eye-clean:hover {
        opacity: 1;
      }
      .fp3d-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      .fp3d-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .fp3d-find-list button:hover,
      .fp3d-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .fp3d-find-list b {
        display: block;
        font-weight: 600;
      }
      .fp3d-find-list small,
      .fp3d-find-list p {
        color: var(--fp3d-muted);
        font-size: 12px;
        margin: 0;
      }
      .fp3d-find-list p {
        padding: 8px 10px;
      }
      .fp3d-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .fp3d-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .fp3d-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      .fp3d-swipe span {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-swipe b {
        grid-row: 2;
        font: 700 22px var(--fp3d-title-font);
      }
      .fp3d-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .fp3d-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--fp3d-warm);
      }
      .fp3d-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      .fp3d-through {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }
      /* the camera wall: a glass sheet over the scene with every camera's picture */
      .fp3d-wall {
        position: absolute;
        inset: 56px 12px calc(var(--fp3d-bottom-inset, 0px) + 12px);
        z-index: 5;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 16px;
        background: rgba(8, 16, 34, 0.86);
        border: 1px solid rgba(160, 240, 255, 0.4);
        box-shadow: 0 0 28px rgba(55, 224, 255, 0.25);
        overflow: auto;
      }
      .fp3d-wall-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        color: #e6fbff;
      }
      .fp3d-wall-pro {
        margin: 0;
        color: #ffd75a;
      }
      .fp3d-wall-head .fp3d-wall-title {
        flex: 1;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 8px;
      }
      .fp3d-wall-title b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-wall-tools {
        display: flex;
        gap: 6px;
      }
      .fp3d-wall-big {
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
      }
      .fp3d-wall-big img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      /* the stream player: a bare card, as wide as the sheet allows for a 16:9 picture */
      .fp3d-wall-big > hui-picture-entity-card,
      .fp3d-wall-big > hui-error-card {
        width: min(100%, calc((100vh - 200px) * 16 / 9));
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .fp3d-wall-grid {
        flex: 1;
        display: grid;
        align-content: center;
        gap: 12px;
        min-height: 0;
      }
      .fp3d-wall-cam {
        position: relative;
        padding: 0;
        border: 1px solid rgba(160, 240, 255, 0.3);
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
        cursor: pointer;
        aspect-ratio: 16 / 9;
        width: 100%;
        max-height: calc(100vh - 160px);
      }
      .fp3d-wall-cam img,
      .fp3d-wall-none {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8aa;
      }
      .fp3d-wall-seen {
        border-color: rgba(255, 80, 90, 0.9);
        box-shadow: 0 0 14px rgba(255, 60, 70, 0.5);
      }
      .fp3d-wall-name {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px 8px;
        font-size: 12px;
        text-align: left;
        color: #e6fbff;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      }
      .fp3d-wall-name b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-pro {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 6;
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-width: 320px;
        padding: 16px 18px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-accent);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      }
      .fp3d-pro div {
        display: flex;
        gap: 8px;
      }
      .fp3d-pro a {
        text-decoration: none;
      }
      .fp3d-flash::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        background: rgba(225, 238, 255, 0.4);
        pointer-events: none;
      }
      .fp3d-through-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: var(--fp3d-blend);
      }
      .fp3d-through-bar {
        position: absolute;
        left: 50%;
        bottom: calc(var(--fp3d-bottom-inset, 0px) + 14px);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: calc(100% - 32px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        backdrop-filter: blur(12px);
        border: 1px solid var(--fp3d-line);
        pointer-events: auto;
      }
      .fp3d-through-name {
        font-weight: 600;
        white-space: nowrap;
      }
      /* a small note that the picture is a still, so nobody wonders why it does not move */
      .fp3d-still {
        font-size: 11px;
        font-weight: 400;
        opacity: 0.65;
        white-space: nowrap;
        margin-left: 6px;
      }
      .fp3d-through-bar input[type="range"] {
        width: 140px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-through-on :is(.fp3d-pin, .fp3d-dev, .fp3d-energy, .fp3d-legend, .fp3d-thumbs, .fp3d-scenes, .fp3d-find-btn, .fp3d-stats) {
        display: none;
      }
      fp3d-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .fp3d-dev-found {
        animation: fp3d-found 0.6s ease-in-out 4;
      }
      @keyframes fp3d-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--fp3d-accent));
        }
      }
      .fp3d-legend {
        position: absolute;
        left: 12px;
        bottom: calc(60px + var(--fp3d-bottom-inset, 0px));
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .fp3d-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .fp3d-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-legend-none {
        color: var(--fp3d-warm);
      }
      /* Energie Pro: the glass hologram beside the house */
      .fp3d-holo {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 4;
        width: 236px;
        padding: 12px 14px 11px;
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        background: linear-gradient(140deg, rgba(150, 235, 255, 0.2) 0%, rgba(70, 140, 230, 0.08) 45%, rgba(20, 60, 140, 0.05) 100%);
        backdrop-filter: blur(7px) saturate(150%);
        -webkit-backdrop-filter: blur(7px) saturate(150%);
        border: 1px solid rgba(160, 240, 255, 0.55);
        box-shadow:
          0 0 28px rgba(55, 224, 255, 0.35),
          0 0 2px rgba(200, 250, 255, 0.9),
          inset 0 1px 0 rgba(255, 255, 255, 0.45),
          inset 0 0 36px rgba(55, 224, 255, 0.14);
        color: #e6fbff;
        font-size: 12px;
        line-height: 1.35;
        text-shadow: 0 0 6px rgba(80, 220, 255, 0.55);
        will-change: transform;
        transform-origin: 0 0;
      }
      .fp3d-holo[hidden],
      .fp3d-holo-link[hidden] {
        display: none;
      }
      /* a device's card: smaller than the plant's */
      /* the now-playing card: cover, titles, transport and volume */
      .fp3d-holo-media .fp3d-holo-head {
        cursor: pointer;
      }
      .fp3d-holo-track {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 6px;
      }
      .fp3d-holo-cover {
        width: 46px;
        height: 46px;
        border-radius: 8px;
        object-fit: cover;
        flex: none;
        box-shadow: 0 0 12px rgba(55, 224, 255, 0.35);
      }
      .fp3d-holo-cover-none {
        display: grid;
        place-items: center;
        font-size: 22px;
        background: rgba(55, 224, 255, 0.15);
        color: #a8f0ff;
      }
      .fp3d-holo-titles {
        display: grid;
        gap: 2px;
        min-width: 0;
      }
      .fp3d-holo-titles b {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-titles span {
        font-size: 12px;
        opacity: 0.8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-media-controls {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-holo-media-controls button {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.4);
        background: rgba(8, 16, 34, 0.6);
        color: var(--fp3d-text);
        cursor: pointer;
        font-size: 12px;
      }
      .fp3d-holo-media-controls input[type="range"] {
        width: 70px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-holo-car-main {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-top: 4px;
      }
      .fp3d-holo-car-main b {
        font-size: 22px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-car-main span {
        font-size: 12px;
        opacity: 0.85;
      }
      .fp3d-holo-car-bar {
        height: 5px;
        margin-top: 6px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.15);
        overflow: hidden;
      }
      .fp3d-holo-car-bar i {
        display: block;
        height: 100%;
        border-radius: 3px;
        box-shadow: 0 0 8px currentColor;
      }
      .fp3d-holo-on {
        border-color: var(--fp3d-accent) !important;
        color: var(--fp3d-accent) !important;
      }
      .fp3d-holo-vol {
        font-size: 11px;
        opacity: 0.8;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-dev {
        width: 184px;
        padding: 10px 12px 9px;
      }
      /* tablet level: no blur and no sheen, the glass is painted */
      .fp3d-holo-plain {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        background: rgba(12, 26, 50, 0.9);
      }
      .fp3d-holo-plain .fp3d-holo-sheen,
      .fp3d-holo-plain .fp3d-holo-scan {
        display: none;
      }
      /* the thin line from the solar field up to the card, with a dot on the field */
      .fp3d-holo-link {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        pointer-events: none;
        overflow: visible;
      }
      .fp3d-holo-link line {
        stroke: rgba(160, 240, 255, 0.75);
        stroke-width: 1.2;
        filter: drop-shadow(0 0 3px rgba(55, 224, 255, 0.8));
      }
      .fp3d-holo-link circle {
        fill: #cffaff;
        stroke: rgba(55, 224, 255, 0.8);
        stroke-width: 2;
        filter: drop-shadow(0 0 4px rgba(55, 224, 255, 0.9));
      }
      .fp3d-holo-min {
        width: 150px;
      }
      .fp3d-holo-sheen {
        position: absolute;
        inset: 0;
        background: linear-gradient(115deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 32%, rgba(255, 255, 255, 0) 68%, rgba(255, 255, 255, 0.07) 100%);
        pointer-events: none;
      }
      .fp3d-holo-scan {
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(0deg, rgba(160, 240, 255, 0.06) 0 1px, transparent 1px 4px);
        pointer-events: none;
      }
      .fp3d-holo-body {
        position: relative;
      }
      .fp3d-holo-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 10px;
        letter-spacing: 0.14em;
        color: #8ff0ff;
        text-transform: uppercase;
      }
      .fp3d-holo-live {
        color: #5dffb0;
      }
      .fp3d-holo-big {
        display: flex;
        align-items: baseline;
        gap: 9px;
        margin: 6px 0 1px;
      }
      .fp3d-holo-big b {
        font-size: 26px;
        color: #ffe27a;
        text-shadow: 0 0 12px rgba(255, 210, 80, 0.85);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-big span,
      .fp3d-holo-sub {
        color: #aee9ff;
      }
      .fp3d-holo-sub {
        margin-bottom: 6px;
      }
      .fp3d-holo-plants {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        column-gap: 10px;
        margin: 0 0 5px;
        font-size: 11px;
        color: #aee9ff;
      }
      .fp3d-holo-plants b {
        color: #ffe27a;
        text-align: right;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-sub b,
      .fp3d-holo-cell b,
      .fp3d-holo-foot b {
        color: #fff;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-curve {
        display: block;
        margin-bottom: 7px;
        filter: drop-shadow(0 0 4px rgba(255, 215, 90, 0.7));
      }
      .fp3d-holo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-holo-cell {
        border-left: 2px solid #aee9ff;
        padding-left: 6px;
      }
      .fp3d-holo-cell span {
        font-size: 11px;
      }
      .fp3d-holo-bat {
        border-left-color: #5dffb0;
      }
      .fp3d-holo-bat span {
        color: #5dffb0;
      }
      .fp3d-holo-exp {
        border-left-color: #4ff6ff;
      }
      .fp3d-holo-exp span {
        color: #4ff6ff;
      }
      .fp3d-holo-imp {
        border-left-color: #ff6fb0;
      }
      .fp3d-holo-imp span {
        color: #ff8fc4;
      }
      .fp3d-holo-house {
        border-left-color: #a9c0ff;
      }
      .fp3d-holo-wb {
        border-left-color: #63c9ff;
      }
      .fp3d-holo-bar {
        margin-top: 8px;
        height: 5px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.16);
        overflow: hidden;
      }
      .fp3d-holo-bar div {
        height: 100%;
        background: linear-gradient(90deg, #5dffb0, #4ff6ff);
        box-shadow: 0 0 8px rgba(80, 240, 255, 0.8);
      }
      .fp3d-holo-foot {
        display: flex;
        justify-content: space-between;
        margin-top: 3px;
        font-size: 10px;
        color: #aee9ff;
      }
      .fp3d-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .fp3d-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        border-left: 3px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-energy-item span {
        font-size: 11px;
        color: var(--fp3d-muted);
      }
      .fp3d-energy-item b {
        font: 700 15px var(--fp3d-title-font);
      }
      .fp3d-energy-total {
        border-left-color: #6fd8ff;
      }
      .fp3d-energy-grid {
        border-left-color: #37e0ff;
      }
      .fp3d-energy-export,
      .fp3d-energy-solar {
        border-left-color: #ffc633;
      }
      .fp3d-energy-battery {
        border-left-color: #59ff8c;
      }
      .fp3d-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--fp3d-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .fp3d-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--fp3d-accent);
      }
      .fp3d-flow-toggle span {
        display: none;
      }
      .fp3d-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .fp3d-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .fp3d-energy-tariff {
        border-left-color: #b98cff;
      }
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container fp3d (max-width: 900px) {
        .fp3d-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
        }
        .fp3d-legend {
          bottom: auto;
          top: 62px;
        }
        .fp3d-has-alerts .fp3d-legend {
          top: 110px;
        }
      }
      /* a room sheet covers the lower half: the view's own controls step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-panel-open :is(.fp3d-find-btn, .fp3d-find, .fp3d-thumbs, .fp3d-legend, .fp3d-stats, .fp3d-scenes) {
          display: none;
        }
      }
      @media (pointer: coarse) {
        .fp3d-find-close {
          width: 40px;
          height: 40px;
          right: 1px;
          bottom: 1px;
        }
        .fp3d-dev {
          padding: 6px;
        }
        .fp3d-pin {
          padding: 8px 12px;
        }
      }
      .fp3d-dev-full .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-name:empty {
        display: none;
      }
      .fp3d-dev-name {
        position: absolute;
        top: calc(100% + 3px);
        left: 50%;
        transform: translateX(-50%);
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 1px 6px;
        border-radius: 6px;
        font-size: 10.5px;
        font-weight: 600;
        line-height: 1.35;
        color: var(--fp3d-text);
        background: rgba(10, 16, 32, 0.72);
        pointer-events: none;
      }
      .fp3d-dev-sel {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
      .fp3d-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--fp3d-glow, var(--fp3d-warm));
        box-shadow: 0 0 16px var(--fp3d-glow, var(--fp3d-warm));
      }
      .fp3d-dev-on .fp3d-dev-icon {
        background: rgba(255, 255, 255, 0.28);
      }
      .fp3d-dev-on .fp3d-dev-text {
        color: #2a1a00;
      }
      .fp3d-dev-na {
        opacity: 0.45;
      }
      .fp3d-dev-dim {
        opacity: 0.35;
      }
      .fp3d-dev[hidden],
      .fp3d-pin[hidden] {
        display: none;
      }
      .fp3d-pin-active {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.45);
      }
      .fp3d-stats b {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--fp3d-chrome);
        position: absolute;
        right: 10px;
        bottom: calc(8px + var(--fp3d-bottom-inset, 0px));
        font-size: 11.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .fp3d-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--fp3d-danger);
      }
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",br);function Q(r,e){return Math.abs(e)>=1e3?`${J(r,e/1e3,1)} kW`:`${Math.round(e)} W`}function Va(r){return r.type==="tv_board"?r.h+.9:r.type==="tv_wall"||r.type==="kitchen_wall"?r.h+.25:r.h+.35}var Ka=.25,ji=r=>Math.round(r*1e3)/1e3;function wr(r,e,n,t,o){let i=r.rooms.find(s=>s.points.length>=3&&G([e,n],s.points));return!i||G([t,o],i.points)?[t,o]:G([t,n],i.points)?[t,n]:G([e,o],i.points)?[e,o]:[e,n]}function Zi(r,e,n,t=Ka){let o=r.rooms.find(c=>c.points.length>=3&&G([e.x,e.z],c.points));if(!o)return null;let i=o.points,s=ze(i)>=0?1:-1,a=n/2,l=null;for(let c=0;c<i.length;c++){let d=i[c],h=i[(c+1)%i.length],u=Math.hypot(h[0]-d[0],h[1]-d[1]);if(u<.3)continue;let _=[(h[0]-d[0])/u,(h[1]-d[1])/u],g=[-_[1]*s,_[0]*s],p=(e.x-d[0])*_[0]+(e.z-d[1])*_[1];if(p<0||p>u)continue;let v=r.rooms.some(x=>x.id!==o.id&&x.points.some((M,k)=>{let E=x.points[(k+1)%x.points.length],C=Math.abs((M[0]-d[0])*g[0]+(M[1]-d[1])*g[1]),L=Math.abs((E[0]-d[0])*g[0]+(E[1]-d[1])*g[1]);return C<.02&&L<.02}))?a:0,w=(e.x-d[0])*g[0]+(e.z-d[1])*g[1]-v,R=Math.atan2(-g[0],g[1])*180/Math.PI,S=x=>Math.abs((e.rotation-x+540)%360-180),U=[{rotation:R,extent:e.d/2},{rotation:R+90,extent:e.w/2},{rotation:R-90,extent:e.w/2}].reduce((x,M)=>S(M.rotation)<S(x.rotation)?M:x);if(S(U.rotation)>50)continue;let W=w-U.extent;Math.abs(W)>t||l&&Math.abs(W)>=Math.abs(l.gap)||(l={x:ji(e.x-g[0]*W),z:ji(e.z-g[1]*W),rotation:(Math.round(U.rotation)%360+360)%360,gap:W})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}var Z={get(r){try{return localStorage.getItem(`neonplan3d.${r}`)}catch{return null}},set(r,e){try{localStorage.setItem(`neonplan3d.${r}`,e)}catch{}}},vr=class extends le{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_accent:{state:!0},_weather:{state:!0}};data=new tt(this);constructor(){super(),this.narrow=!1,this._mode="view",this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode="auto",this._explode=Z.get("explode")!=="0",this._keepRoof=Z.get("roof")==="1";let e=Z.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=Z.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let n=Z.get("markers");this._markers=n==="none"||n==="all"?n:"important";let t=Z.get("heat");this._heat=t==="temperature"||t==="humidity"||t==="co2"||t==="values"?t:"none";let o=Z.get("theme");this._theme=o&&ur.includes(o)?o:"neon";let i=Z.get("accent");this._accent=i&&/^#[0-9a-f]{6}$/i.test(i)?i:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let s=Z.get("floor_stack");this._floorStack=s==="stacked"||s==="single"?s:"dim",this._roomNames=Z.get("room_names")!=="0",this._trail=Z.get("trail")==="1",this._cameraWall=!1,this._clean=Z.get("clean")==="1",this._navWrap=Z.get("nav_wrap")==="1",this._optsOpen=!1,this._weather=Z.get("weather")!=="0"}t(e,n){return A(this.hass,e,n)}willUpdate(e){e.has("hass")&&this.hass&&this.data.setHass(this.hass),e.has("hass")&&this.hass&&!at(this.hass.language)&&en(this.hass.language).then(()=>this.requestUpdate());let n=this.data.building;n&&this._floorId&&!n.floors.some(t=>t.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){let{floorId:n,roomId:t}=e.detail;if((this.data.building?.floors.length??0)>1&&n&&this._floorId!==n){this._floorId=n,this._roomId=null;return}t&&(this._roomId=t===this._roomId?null:t)}setKeepRoof(e){this._keepRoof=e,Z.set("roof",e?"1":"0")}setExplode(e){this._explode=e,Z.set("explode",e?"1":"0")}setQuality(e){this._quality=e,Z.set("quality",e)}editFurniture(e,n){let t=this.data.building;if(!t)return;let o=structuredClone(t);for(let i of o.floors){let s=i.furniture.find(a=>a.id===e);s&&n(s,i)}this.data.edit(o)}editDevice(e,n){let t=this.data.building;if(!t)return;let o=structuredClone(t);for(let i of o.floors){let s=i.placements.find(a=>a.entity_id===e);s&&n(s,i)}this.data.edit(o)}moveDevice(e){let{id:n,x:t,z:o}=e.detail;this.editDevice(n,(i,s)=>{let[a,l]=wr(s,i.x,i.z,t,o);Object.assign(i,{x:a,z:l})})}turnStep(){return F(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,n=>n.rotation=(((n.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,n=this.data.building;if(!e||!n)return;let t=structuredClone(n);for(let o of t.floors)o.placements=o.placements.filter(i=>i.entity_id!==e);this.data.edit(t),this._selDevice=null}renderDeviceFields(e){let t=this.data.building?.floors.find(h=>h.placements.some(u=>u.entity_id===e)),o=t?.placements.find(h=>h.entity_id===e);if(!t||!o)return b;let i=F(e),s=i==="light",a=i==="camera",l=o.mount==="ceiling",c=i?ot(i,t.height,s||a?o.mount??(a?"wall":"ceiling"):null):1,d=(h,u,_,g,p,f)=>m`<label class="fp3d-size" title=${h}
        >${h}
        <input
          type="number"
          inputmode="decimal"
          step=${_}
          min=${g}
          max=${p}
          .value=${String(Math.round(u*100)/100)}
          @change=${v=>{let w=parseFloat(v.target.value.replace(",","."));Number.isFinite(w)&&f(Math.min(p,Math.max(g,w)))}}
        />
      </label>`;return m`${s?m`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${h=>this.editDevice(e,u=>Object.assign(u,{mount:h.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(h=>m`<option value=${h} ?selected=${h===(o.mount??"ceiling")}>${this.t(`lamp_${h}`)}</option>`)}
          </select>`:b}
      ${a?m`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${h=>this.editDevice(e,u=>Object.assign(u,{mount:h.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${d(this.t("camera_fov_short"),o.fov??(l?360:90),5,10,360,h=>this.editDevice(e,u=>u.fov=h))}
            ${d(this.t("camera_reach_short"),o.reach??(l?3:4.5),.5,.5,50,h=>this.editDevice(e,u=>u.reach=h))}
            ${d(this.t("camera_tilt_short"),o.tilt??(l?65:20),5,0,90,h=>this.editDevice(e,u=>u.tilt=h))}`:b}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((o.y??c)*100)/100)}
          @change=${h=>{let u=parseFloat(h.target.value.replace(",","."));Number.isFinite(u)&&u>=0&&this.editDevice(e,_=>_.y=Math.round(u*1e3)/1e3)}}
        />
      </label>
      ${o.y!==null?m`<button class="fp3d-chip" @click=${()=>this.editDevice(e,h=>h.y=null)}>${this.t("height_auto")}</button>`:b}`}furnitureName(e){let n=this.data.building?.floors.flatMap(t=>t.furniture).find(t=>t.id===e);return n?be(this.hass,n.type):""}moveFurniture(e){let{id:n,x:t,z:o}=e.detail,i=this.data.building?.settings.wall_interior??.12;this.editFurniture(n,(s,a)=>{let[l,c]=wr(a,s.x,s.z,t,o);Object.assign(s,{x:l,z:c});let d=Zi(a,s,i);d&&Object.assign(s,d)})}renderSizeFields(e){let n=this.data.building?.floors.flatMap(i=>i.furniture).find(i=>i.id===e);if(!n)return b;let t=(i,s)=>m`<label class="fp3d-size" title=${this.t(`size_${i}`)}
      >${s}
      <input
        type="number"
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${String(Math.round(n[i]*100)/100)}
        @change=${a=>{let l=parseFloat(a.target.value.replace(",","."));Number.isFinite(l)&&l>0&&this.editFurniture(e,c=>c[i]=Math.round(l*1e3)/1e3)}}
    /></label>`,o=this.data.building?.floors.find(i=>i.furniture.some(s=>s.id===e));return m`${t("w",this.t("size_short_w"))}${t("d",this.t("size_short_d"))}${t("h",this.t("size_short_h"))}
    ${o&&fo(n)?m`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type="number"
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${String(Math.round((n.mount_y??ke(o,n))*100)/100)}
              @change=${i=>{let s=parseFloat(i.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.editFurniture(e,a=>a.mount_y=Math.round(s*1e3)/1e3)}}
          /></label>
          ${n.mount_y!=null?m`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,i=>i.mount_y=null)}>${this.t("height_auto")}</button>`:b}`:b}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,n=>n.rotation=((n.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,n=this.data.building;if(!e||!n)return;let t=structuredClone(n);for(let o of t.floors)o.furniture=o.furniture.filter(i=>i.id!==e);this.data.edit(t),this._selFurniture=null}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){if(this.hass&&!at(this.hass.language))return b;let e=this.data.building,n=this.data.saveState;return m`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._clean&&this._mode==="view"?b:m`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonPlan 3D</h1>
          ${this.isAdmin?m`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
              </div>`:b}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(t=>t.rooms.length)?m`<button
                  class="fp3d-opts-btn"
                  aria-expanded=${this._optsOpen}
                  title=${this.t("view_options")}
                  aria-label=${this.t("view_options")}
                  @click=${()=>this._optsOpen=!this._optsOpen}
                >
                  ⚙
                </button>
                <div class="fp3d-view-opts ${this._optsOpen?"fp3d-opts-open":""}">
                <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(t=>m`<button aria-pressed=${this._quality===t} @click=${()=>this.setQuality(t)}>${this.t(`quality_${t}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${ur.map(t=>m`<button
                      aria-pressed=${this._theme===t}
                      @click=${()=>{this._theme=t,Z.set("theme",t)}}
                    >
                      ${this.t(`theme_${t}`)}
                    </button>`)}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${t=>{this._accent=t.target.value,Z.set("accent",this._accent)}}
                  />
                  ${this._accent?m`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,Z.set("accent","")}}
                      >
                        ↺
                      </button>`:b}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(t=>m`<button
                      aria-pressed=${this._markers===t}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=t,Z.set("markers",t)}}
                    >
                      ${this.t(`markers_${t}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality">
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,Z.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`:b}
          ${this._mode==="editor"&&n!=="idle"?m`<span class="fp3d-save fp3d-save-${n}">${this.t(n==="saving"?"saving":n==="saved"?"saved":"save_error")}</span>`:b}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?b:this.renderNotices()}
        ${this.data.error&&!e?m`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:b}
        ${!e&&!this.data.error?m`<p class="fp3d-message">${this.t("loading")}</p>`:b}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this.renderView(e):b}
      </div>
    `}renderNotices(){let e=this.data,n=[];if(e.needsRestart&&(e.versionGap==="frontend"?n.push(m`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):n.push(m`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&n.push(m`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let t=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);n.push(m`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:t})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return n.length?m`<div class="fp3d-notices">${n}</div>`:b}renderEditor(e){return this._editorReady?m`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @building-changed=${n=>this.data.edit(n.detail.building)}
    ></fp3d-editor>`:(wo().then(()=>this._editorReady=!0,n=>this.data.error=String(n)),m`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let n=e.currentTarget;n.scrollWidth<=n.clientWidth||(n.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){if(!e.floors.length||!e.floors.some(o=>o.rooms.length))return m`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:b}
      </div>`;let n=e.floors.find(o=>o.id===this._floorId),t=n?[n]:e.floors;return m`
      ${this._clean?b:m`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?m`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(o=>m`<button
                  class="fp3d-chip"
                  aria-pressed=${o.id===this._floorId}
                  @click=${()=>{this._floorId=o.id,this._roomId=null}}
                >
                  ${o.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:b}
        ${t.flatMap(o=>[t.length>1&&o.rooms.length?m`<span class="fp3d-nav-floor">${o.name}</span>`:b,...o.rooms.map(i=>m`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${i.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=o.id),this._roomId=i.id===this._roomId?null:i.id}}
            >
              ${i.name}
            </button>`)])}
        <button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,Z.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""}">
        <fp3d-view3d
          class="fp3d-body"
          .hass=${this.hass}
          .building=${e}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${this._clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>{this._clean=!this._clean,Z.set("clean",this._clean?"1":"0")}}
          ?weather=${this._weather}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .accent=${this._accent}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${o=>this._selFurniture=o.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${o=>this._selDevice=o.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @floor-tap=${o=>{this._floorId=o.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?m`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${o=>this.view3d()?.lookThrough(o.detail.entity)}
              .hass=${this.hass}
              .room=${e.floors.flatMap(o=>o.rooms).find(o=>o.id===this._roomId)??null}
              .floor=${e.floors.find(o=>o.rooms.some(i=>i.id===this._roomId))??null}
              .confirmEntities=${it(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:b}
        ${this._clean?b:m`<div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?m`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:b}
          ${!this._floorId&&e.settings.roof.type!=="none"?m`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:b}
          ${e.floors.length>1&&this._floorId?m`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(o=>m`<button
                      aria-pressed=${this._floorStack===o}
                      @click=${()=>{this._floorStack=o,Z.set("floor_stack",o)}}
                    >
                      ${this.t(`floor_stack_short_${o}`)}
                    </button>`)}
              </div>`:b}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(o=>m`<button
                  aria-pressed=${this._heat===o}
                  @click=${()=>{this._heat=o,Z.set("heat",o)}}
                >
                  ${this.t(o==="none"?"heat_off":`heat_short_${o}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,Z.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,Z.set("trail",this._trail?"1":"0")}}
          >
            ${V("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>this._cameraWall=!this._cameraWall}
          >
            ${V("camera_cockpit")?"":"\u{1F512} "}${this.t("cameras_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,Z.set("weather",this._weather?"1":"0")}}
          >
            ${V("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?m`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:b}
        </div>`}
        ${this._furnish?m`<div class="fp3d-furnish-bar">
              ${this._selFurniture?m`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,o=>o.mirror=!o.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?m`<span>${q(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:m`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:b}
      </div>
    `}static styles=[ve,Fe,he`
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. */
        height: 100vh;
        height: 100dvh;
        background: var(--fp3d-bg);
      }
      .fp3d-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .fp3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 52px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        flex-wrap: wrap;
      }
      ha-menu-button {
        color: var(--fp3d-text);
      }
      h1 {
        font-family: var(--fp3d-title-font);
        font-weight: 700;
        font-size: 19px;
        letter-spacing: -0.01em;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .fp3d-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .fp3d-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        font-size: 13.5px;
      }
      .fp3d-notice span {
        flex: 1;
        min-width: 200px;
      }
      .fp3d-notice-warn {
        border-color: rgba(255, 181, 71, 0.6);
        color: var(--fp3d-warm);
      }
      .fp3d-notice-error {
        border-color: rgba(255, 107, 139, 0.6);
        color: var(--fp3d-danger);
        word-break: break-word;
      }
      .fp3d-chip-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13.5px;
      }
      .fp3d-size-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger);
      }
      .fp3d-grow {
        flex: 1;
      }
      .fp3d-save {
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-view-opts {
        display: contents;
      }
      .fp3d-opts-btn {
        display: none;
      }
      /* phones: the view options fold behind ⚙ (one header row instead of three) */
      @media (max-width: 700px) {
        .fp3d-opts-btn {
          display: grid;
          place-items: center;
          order: 3;
          width: 36px;
          height: 36px;
          border: 1px solid var(--fp3d-line);
          border-radius: 10px;
          background: transparent;
          color: var(--fp3d-text);
          font-size: 17px;
          cursor: pointer;
        }
        .fp3d-opts-btn[aria-expanded="true"] {
          color: var(--fp3d-accent);
          border-color: var(--fp3d-accent);
        }
        .fp3d-view-opts {
          display: none;
        }
        .fp3d-view-opts.fp3d-opts-open {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          order: 5;
          width: 100%;
        }
        .fp3d-version {
          order: 4;
        }
        .fp3d-header .fp3d-grow {
          display: none;
        }
      }
      /* the installed version, at the far right of the header */
      .fp3d-version {
        margin-left: auto;
        font-size: 11.5px;
        color: var(--fp3d-muted);
        white-space: nowrap;
        opacity: 0.8;
      }
      .fp3d-save-error {
        color: var(--fp3d-danger);
      }
      .fp3d-body {
        flex: 1;
        min-height: 0;
      }
      /* the colour well beside the look: a small round swatch, the reset arrow next to it */
      .fp3d-accent-pick {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 0 4px;
      }
      .fp3d-accent-pick input[type="color"] {
        width: 22px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 50%;
        background: none;
        cursor: pointer;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
      }
      .fp3d-accent-reset {
        border: none;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
        font-size: 14px;
        padding: 0 2px;
      }
      .fp3d-nav {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      /* a desktop shows a thin scrollbar while the pointer rests on the bar */
      .fp3d-nav:hover {
        scrollbar-width: thin;
      }
      /* wrapped: several lines, at most about three before the bar itself scrolls */
      .fp3d-nav-wrap {
        flex-wrap: wrap;
        overflow-x: visible;
        overflow-y: auto;
        max-height: 132px;
      }
      .fp3d-nav-floor {
        flex: none;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-left: 6px;
      }
      .fp3d-nav-toggle {
        flex: none;
        margin-left: auto;
        position: sticky;
        right: 0;
        min-width: 34px;
        padding-left: 8px;
        padding-right: 8px;
      }
      .fp3d-nav .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--fp3d-line);
      }
      .fp3d-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-stage-wrap fp3d-view3d {
        flex: 1;
      }
      .fp3d-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      fp3d-view3d {
        --fp3d-bottom-inset: 52px;
      }
      .fp3d-clean fp3d-view3d {
        --fp3d-bottom-inset: 0px;
      }
      .fp3d-furnish-bar {
        bottom: 68px;
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .fp3d-room-open .fp3d-overlay {
          display: none;
        }
      }
      .fp3d-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        /* room for the search button and the eye beside it */
        left: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .fp3d-overlay > * {
        pointer-events: auto;
      }
      .fp3d-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-message,
      .fp3d-empty {
        padding: 32px 20px;
        color: var(--fp3d-muted);
        text-align: center;
      }
      .fp3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",vr);function gn(r,e,n=new Date){if(!r||r==="off")return!1;if(r==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let t=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(r.trim());if(!t)return!1;let o=Number(t[1])*60+Number(t[2]),i=Number(t[3])*60+Number(t[4]),s=n.getHours()*60+n.getMinutes();return o<=i?s>=o&&s<i:s>=o||s<i}var Xi;function Yi(){let r=new URL("./neonplan3d-card-editor.js?v=1bc99f8a5f99",new URL(import.meta.url)).href;return Xi??=import(r),Xi}var yr=class extends le{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new tt(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._fullscreen=!1,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){clearTimeout(this.cleanTimer);let n=this._config?.controls_hide_after??0;n>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,n*1e3))}armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}returnHome(){this._roomId=this._config?.room??null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0;connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),this.armIdle(),this.nightTimer=setInterval(()=>this._night=gn(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await Yi(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._orbit=!1,this._night=gn(e.night,this.hass),this._clean=e.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&this.hass){this.data.setHass(this.hass),at(this.hass.language)||en(this.hass.language).then(()=>this.requestUpdate());let n=gn(this._config?.night,this.hass);n!==this._night&&(this._night=n)}}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){if(this.hass&&!at(this.hass.language))return b;let e=this.data.building,n=this._config?.height??420,t=this._config;!this.roomApplied&&e&&t?.room&&(this.roomApplied=!0,e.floors.some(v=>v.rooms.some(w=>w.id===t.room))&&(this._roomId=t.room));let o=this._floorId===void 0?t?.floor??null:this._floorId,i=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(v=>v.id===o)?o:null,s=!!this._roomId&&t?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!i&&(e?.floors.length??0)>1,a=v=>t?.controls===!0||Array.isArray(t?.controls)&&t.controls.includes(v),l=["temperature","humidity","co2"].filter(v=>a(v)),c=this._walls??t?.walls??"auto",d=this._heat??t?.heatmap??"none",h=this._explode??t?.explode??!0,u=this._fullscreen?"100vh":t?.fill?"calc(100vh - var(--header-height, 56px) - 16px)":`${n}px`,_=!!e&&!this._clean&&(s||!!t?.controls&&!(this._roomId&&t.room_panel!==!1)),g=t?.controls_hidden!==void 0||(t?.controls_hide_after??0)>0,p=v=>A(this.hass,v),f=/^#[0-9a-f]{6}$/i.test(t?.accent??"")?t.accent:null;return m`<ha-card class=${this._night?"fp3d-night":""} style=${f?`--fp3d-accent:${f}`:""} @pointerdown=${this.touch} @keydown=${this.touch} @wheel=${this.touch}>
      <div class="fp3d-card-body" style="height:${u}">
        ${e&&e.floors.some(v=>v.rooms.length)?m`<fp3d-view3d
              .hass=${this.hass}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${i}
              .roomId=${this._roomId}
              .wallMode=${c}
              .explode=${h}
              .keepRoof=${t?.roof_fade===!1}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .markerNames=${this._config?.marker_names===!0}
              .central=${this._config?.central!==!1}
              .buttons=${this._config?.buttons?.map((v,w)=>({id:`card_${w}`,...v}))??null}
              .heatMode=${d}
              .theme=${this._config?.theme??"neon"}
              .accent=${this._config?.accent??null}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              .holograms=${this._config?.holograms??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${t?.room_names!==!1}
              .floorStack=${t?.floor_stack??"dim"}
              .panelOpen=${!!this._roomId&&t?.room_panel!==!1}
              .alerts=${t?.alerts!==!1}
              .alertJump=${!!t?.alert_jump}
              .scenes=${t?.scenes!==!1}
              ?trail=${!!t?.motion_trail}
              .cameraWall=${this._cameraWall}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${g}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              ?weather=${t?.weather!==!1}
              .weatherEntityId=${t?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${t?.start_view??null}
              style=${_?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${v=>{if(this.canSwitch&&(e?.floors.length??0)>1&&v.detail.floorId&&i!==v.detail.floorId){this._floorId=v.detail.floorId,this._roomId=null;return}v.detail.roomId&&(this._roomId=v.detail.roomId===this._roomId?null:v.detail.roomId)}}
              @floor-tap=${v=>{this._floorId=v.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:m`<p class="fp3d-card-msg">${this.data.error??(e?A(this.hass,"no_building"):A(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?m`<fp3d-room-panel
              @camera-look=${v=>this.view3d()?.lookThrough(v.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.hass}
              .room=${e.floors.flatMap(v=>v.rooms).find(v=>v.id===this._roomId)??null}
              .floor=${e.floors.find(v=>v.rooms.some(w=>w.id===this._roomId))??null}
              .confirmEntities=${it(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:b}
        ${_&&e?m`<div class="fp3d-card-controls">
              ${s?m`<button class="fp3d-chip" @click=${()=>this.back()}>${p("back")}</button>`:b}
              ${t?.camera_wall?m`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${p("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${p("cameras_short")}</button>`:b}
              ${a("walls")?m`<div class="fp3d-seg">
                    <button aria-pressed=${c==="auto"} @click=${()=>this._walls="auto"}>${p("walls_auto")}</button>
                    <button aria-pressed=${c==="cut"} @click=${()=>this._walls="cut"}>${p("walls_cut")}</button>
                  </div>`:b}
              ${a("floors")&&e.floors.length>1&&!i?m`<div class="fp3d-seg">
                    <button aria-pressed=${h} @click=${()=>this._explode=!0}>${p("floors_apart")}</button>
                    <button aria-pressed=${!h} @click=${()=>this._explode=!1}>${p("floors_stacked")}</button>
                  </div>`:b}
              ${l.length?m`<div class="fp3d-seg" role="group" aria-label=${p("heatmap")}>
                    ${["none",...l].map(v=>m`<button aria-pressed=${d===v} @click=${()=>this._heat=v}>
                          ${p(v==="none"?"heat_off":`heat_short_${v}`)}
                        </button>`)}
                  </div>`:b}
            </div>`:b}
        ${t?.fullscreen_button&&!this._clean&&!(this._roomId&&t.room_panel!==!1)?m`<button class="fp3d-card-full" title=${p(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${p(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:b}
        ${t?.dashboard&&!this._clean&&!(this._roomId&&t.room_panel!==!1)?m`<button class="fp3d-card-full fp3d-card-dash ${t.fullscreen_button?"fp3d-card-dash-2":""}" title=${t.dashboard_label||t.dashboard} aria-label=${t.dashboard_label||t.dashboard} @click=${()=>this.openDashboard(t.dashboard)}>
              ${t.dashboard_label?m`<span>${t.dashboard_label}</span>`:"\u2302"}
            </button>`:b}
      </div>
    </ha-card>`}static styles=[ve,Fe,he`
      .fp3d-card-controls {
        position: absolute;
        left: 60px;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        pointer-events: none;
      }
      .fp3d-card-controls > * {
        pointer-events: auto;
      }
      .fp3d-card-dash {
        width: auto;
        min-width: 38px;
        padding: 0 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .fp3d-card-dash-2 {
        right: 56px;
      }
      .fp3d-card-full {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font-size: 18px;
        cursor: pointer;
      }
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      /* night (kiosk): the whole card dimmed */
      ha-card.fp3d-night .fp3d-card-body {
        filter: brightness(0.55);
      }
      .fp3d-card-body {
        position: relative;
        display: flex;
        height: 100%;
        container-type: size;
        container-name: fp3d;
      }
      fp3d-view3d {
        flex: 1;
      }
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
      }
      .fp3d-card-panel {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: min(340px, calc(100% - 20px));
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-card-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
      }
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",yr);let r=window;r.customCards=r.customCards??[],r.customCards.push({type:"neonplan3d-card",name:A(void 0,"card_name"),description:A(void 0,"card_description"),preview:!1})}Tr();
