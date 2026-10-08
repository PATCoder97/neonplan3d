var Ot=globalThis,Lt=Ot.ShadowRoot&&(Ot.ShadyCSS===void 0||Ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pn=Symbol(),Ri=new WeakMap,rt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==pn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Lt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ri.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ri.set(t,e))}return e}toString(){return this.cssText}},Ai=s=>new rt(typeof s=="string"?s:s+"",void 0,pn),Ee=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((n,i,r)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[r+1],s[0]);return new rt(t,s,pn)},Fi=(s,e)=>{if(Lt)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=Ot.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,s.appendChild(n)}},fn=Lt?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Ai(t)})(s):s;var{is:us,defineProperty:hs,getOwnPropertyDescriptor:ps,getOwnPropertyNames:fs,getOwnPropertySymbols:_s,getPrototypeOf:ms}=Object,Dt=globalThis,Ii=Dt.trustedTypes,gs=Ii?Ii.emptyScript:"",bs=Dt.reactiveElementPolyfillSupport,ot=(s,e)=>s,_n={toAttribute(s,e){switch(e){case Boolean:s=s?gs:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Ti=(s,e)=>!us(s,e),Pi={attribute:!0,type:String,converter:_n,reflect:!1,useDefault:!1,hasChanged:Ti};Symbol.metadata??=Symbol("metadata"),Dt.litPropertyMetadata??=new WeakMap;var be=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Pi){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&hs(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:r}=ps(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){let a=i?.call(this);r?.call(this,o),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Pi}static _$Ei(){if(this.hasOwnProperty(ot("elementProperties")))return;let e=ms(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ot("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ot("properties"))){let t=this.properties,n=[...fs(t),..._s(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(fn(i))}else e!==void 0&&t.push(fn(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:_n).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let r=n.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:_n;this._$Em=i;let a=o.fromAttribute(t,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,r){if(e!==void 0){let o=this.constructor;if(i===!1&&(r=this[e]),n??=o.getPropertyOptions(e),!((n.hasChanged??Ti)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:r},o){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,r]of n){let{wrapped:o}=r,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};be.elementStyles=[],be.shadowRootOptions={mode:"open"},be[ot("elementProperties")]=new Map,be[ot("finalized")]=new Map,bs?.({ReactiveElement:be}),(Dt.reactiveElementVersions??=[]).push("2.1.2");var kn=globalThis,Oi=s=>s,Ht=kn.trustedTypes,Li=Ht?Ht.createPolicy("lit-html",{createHTML:s=>s}):void 0,Bi="$lit$",ze=`lit$${Math.random().toFixed(9).slice(2)}$`,Ni="?"+ze,ys=`<${Ni}>`,We=document,at=()=>We.createComment(""),lt=s=>s===null||typeof s!="object"&&typeof s!="function",$n=Array.isArray,vs=s=>$n(s)||typeof s?.[Symbol.iterator]=="function",mn=`[ 	
\f\r]`,st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Di=/-->/g,Hi=/>/g,De=RegExp(`>|${mn}(?:([^\\s"'>=/]+)(${mn}*=${mn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wi=/'/g,Ci=/"/g,Ki=/^(?:script|style|textarea|title)$/i,xn=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),b=xn(1),I=xn(2),Ja=xn(3),ye=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Vi=new WeakMap,He=We.createTreeWalker(We,129);function Ui(s,e){if(!$n(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Li!==void 0?Li.createHTML(e):e}var ws=(s,e)=>{let t=s.length-1,n=[],i,r=e===2?"<svg>":e===3?"<math>":"",o=st;for(let a=0;a<t;a++){let l=s[a],d,c,u=-1,h=0;for(;h<l.length&&(o.lastIndex=h,c=o.exec(l),c!==null);)h=o.lastIndex,o===st?c[1]==="!--"?o=Di:c[1]!==void 0?o=Hi:c[2]!==void 0?(Ki.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=De):c[3]!==void 0&&(o=De):o===De?c[0]===">"?(o=i??st,u=-1):c[1]===void 0?u=-2:(u=o.lastIndex-c[2].length,d=c[1],o=c[3]===void 0?De:c[3]==='"'?Ci:Wi):o===Ci||o===Wi?o=De:o===Di||o===Hi?o=st:(o=De,i=void 0);let p=o===De&&s[a+1].startsWith("/>")?" ":"";r+=o===st?l+ys:u>=0?(n.push(d),l.slice(0,u)+Bi+l.slice(u)+ze+p):l+ze+(u===-2?a:p)}return[Ui(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},ct=class s{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,o=0,a=e.length-1,l=this.parts,[d,c]=ws(e,t);if(this.el=s.createElement(d,n),He.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=He.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(Bi)){let h=c[o++],p=i.getAttribute(u).split(ze),_=/([.?@])?(.*)/.exec(h);l.push({type:1,index:r,name:_[2],strings:p,ctor:_[1]==="."?bn:_[1]==="?"?yn:_[1]==="@"?vn:Ze}),i.removeAttribute(u)}else u.startsWith(ze)&&(l.push({type:6,index:r}),i.removeAttribute(u));if(Ki.test(i.tagName)){let u=i.textContent.split(ze),h=u.length-1;if(h>0){i.textContent=Ht?Ht.emptyScript:"";for(let p=0;p<h;p++)i.append(u[p],at()),He.nextNode(),l.push({type:2,index:++r});i.append(u[h],at())}}}else if(i.nodeType===8)if(i.data===Ni)l.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(ze,u+1))!==-1;)l.push({type:7,index:r}),u+=ze.length-1}r++}}static createElement(e,t){let n=We.createElement("template");return n.innerHTML=e,n}};function je(s,e,t=s,n){if(e===ye)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,r=lt(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(s),i._$AT(s,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=je(s,i._$AS(s,e.values),i,n)),e}var gn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??We).importNode(t,!0);He.currentNode=i;let r=He.nextNode(),o=0,a=0,l=n[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new dt(r,r.nextSibling,this,e):l.type===1?d=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(d=new wn(r,this,e)),this._$AV.push(d),l=n[++a]}o!==l?.index&&(r=He.nextNode(),o++)}return He.currentNode=We,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},dt=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=je(this,e,t),lt(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==ye&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):vs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&lt(this._$AH)?this._$AA.nextSibling.data=e:this.T(We.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ct.createElement(Ui(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let r=new gn(i,this),o=r.u(this.options);r.p(t),this.T(o),this._$AH=r}}_$AC(e){let t=Vi.get(e.strings);return t===void 0&&Vi.set(e.strings,t=new ct(e)),t}k(e){$n(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let r of e)i===t.length?t.push(n=new s(this.O(at()),this.O(at()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Oi(e).nextSibling;Oi(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ze=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,i){let r=this.strings,o=!1;if(r===void 0)e=je(this,e,t,0),o=!lt(e)||e!==this._$AH&&e!==ye,o&&(this._$AH=e);else{let a=e,l,d;for(e=r[0],l=0;l<r.length-1;l++)d=je(this,a[n+l],t,l),d===ye&&(d=this._$AH[l]),o||=!lt(d)||d!==this._$AH[l],d===v?e=v:e!==v&&(e+=(d??"")+r[l+1]),this._$AH[l]=d}o&&!i&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},bn=class extends Ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},yn=class extends Ze{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},vn=class extends Ze{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=je(this,e,t,0)??v)===ye)return;let n=this._$AH,i=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==v&&(n===v||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},wn=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){je(this,e)}};var ks=kn.litHtmlPolyfillSupport;ks?.(ct,dt),(kn.litHtmlVersions??=[]).push("3.3.3");var Gi=(s,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let r=t?.renderBefore??null;n._$litPart$=i=new dt(e.insertBefore(at(),r),r,void 0,t??{})}return i._$AI(s),i};var Sn=globalThis,pe=class extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Gi(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ye}};pe._$litElement$=!0,pe.finalized=!0,Sn.litElementHydrateSupport?.({LitElement:pe});var $s=Sn.litElementPolyfillSupport;$s?.({LitElement:pe});(Sn.litElementVersions??=[]).push("4.2.2");var ji={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zi=s=>(...e)=>({_$litDirective$:s,values:e}),Wt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var ut=class extends Wt{constructor(e){if(super(e),this.it=v,e.type!==ji.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===v||e==null)return this._t=void 0,this.it=e;if(e===ye)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};ut.directiveName="unsafeHTML",ut.resultType=1;var qi=Zi(ut);async function Mn(s,e){return(await s.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function Ct(s,e,t){await s.callWS({type:"neonplan3d/image/set",image_id:e,data:t})}async function Yi(s){return(await s.callWS({type:"neonplan3d/history/list"})).snapshots}async function Xi(s){await s.callWS({type:"neonplan3d/history/snapshot"})}async function Qi(s,e){return(await s.callWS({type:"neonplan3d/history/restore",snapshot_id:e})).revision}function Ji(s){return s.callWS({type:"neonplan3d/backup/export"})}function er(s,e,t){return s.callWS({type:"neonplan3d/backup/import",building:e,packs:t})}var tr=[],En=new Map,xs=0;function nr(s){tr=s,En=new Map(s.flatMap(e=>e.items.map(t=>[qe(e.id,t.id),t]))),xs++}function ir(){return tr}function qe(s,e){return`pack:${s}:${e}`}function zn(s){return s.startsWith("pack:")}var Ss={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function rr(s){return te(s)?.parts.find(e=>e.screen)}function te(s){if(!zn(s))return;let e=En.get(s);if(e)return e;let[,t,...n]=s.split(":"),i=Ss[t];return i?En.get(`pack:${i}:${n.join(":")}`):void 0}function Ce(s){return ne[s]??te(s)?.size??[.6,.6,.8]}function ht(s){return An.has(s)||!!te(s)?.electric||!!te(s)?.light}function Re(s,e){let t=e.split("-")[0];return s.name[t]??s.name.en??Object.values(s.name)[0]??s.id}function Rn(s,e){let t=te(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall"||e.type==="lamp_wall_updown")return or;if(e.type==="led_strip")return Math.max(0,s.height-.04-Math.max(.02,e.h));if(e.type==="fan_ceiling"||e.type==="fan_ceiling_light")return Math.max(0,s.height-Math.max(.05,e.h));if(e.type==="access_point"||e.type==="smoke_detector")return Math.max(0,s.height-Math.max(.02,e.h));if(e.type==="fan_wall")return 1.55;if(e.type==="altar_wall")return 1.45;if(e.type==="floating_shelf")return 1.35;if(e.type==="water_heater")return 1.7;if(e.type==="range_hood")return 1.35;if(e.type==="microwave")return Vt(s,e.x,e.z);if(e.type==="modem_router"||e.type==="smart_display")return Vt(s,e.x,e.z);if((e.type==="water_pump"||e.type==="heat_pump_outdoor")&&!s.rooms.some(n=>n.points.length>=3&&C([e.x,e.z],n.points)))return Bt(s,e.x,e.z);switch(t?.mount){case"surface":return Vt(s,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,s.height-e.h);default:return t?0:sr(e)}}var Fn=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","lamp_column","lamp_tv_bars","lamp_orb_table","lamp_portable","lamp_ambient_spot","lamp_cube","lamp_panel_round","lamp_garden_spots","lamp_wall_updown","radiator","air_conditioner","water_pump","altar","altar_wall","shoe_cabinet","motorbike","fan_ceiling","fan_ceiling_light","fan_wall","fan_floor","water_heater","drying_rack","shoe_bench","room_divider","range_hood","microwave","water_purifier","air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","network_cabinet","nas_server","access_point","wall_thermostat","smoke_detector","siren_alarm","electrical_panel","ups_unit","modem_router","heat_pump_outdoor","hot_water_tank","ventilation_fan","humidifier","smart_display","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","temperature_humidity_sensor","video_doorbell","kitchen_corner","kitchen_display","vanity","crib","bed_single","bed_double","sofa_2","sofa_3","sofa_4","sofa_corner_left","sofa_corner_right","sofa_chesterfield","sofa_velvet_3","sofa_modular_5","sofa_armless","sofa_chaise","sofa_u","club_chair","wingback_chair","rocking_chair","chaise_longue","cocktail_chair","recliner","bean_bag","chair_upholstered","chair_shell","ottoman","tv_console","display_cabinet","sofa_l","sofa_bed","shower_screen","hammock","stone_table_set","planter_large","water_tank","gate","fence","sofa","armchair","stool","coffee_table","coffee_table_round","coffee_table_glass","nesting_tables","side_table_round","tv_board","tv_wall","sideboard","shelf","bookshelf_wide","cube_shelf_2x2","cube_shelf_4x2","cube_shelf_4x4","room_divider_shelf","floating_shelf","plant","rug","altar_table","altar_cabinet","console_table","lowboard_120","lowboard_160","lowboard_200","highboard","chest_drawers_3","tv_stand","wood_stove","table","table_120","table_160","table_200","table_solid_220","table_round","chair","bench","bench_dining_160","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","washer_dryer_tower","balcony_solar","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_landing","robot_vacuum","robot_mower","inverter","home_battery","wallbox","meter","grid_point","parking","fridge_smart","stairwell"],pt={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_panel_round","lamp_pendant","lamp_floor","lamp_uplight","lamp_column","lamp_tv_bars","lamp_table","lamp_orb_table","lamp_portable","lamp_ambient_spot","lamp_cube","lamp_wall","lamp_wall_updown","led_strip","lamp_bollard","lamp_garden","lamp_garden_spots"],living:["sofa","sofa_2","sofa_3","sofa_4","sofa_l","sofa_corner_left","sofa_corner_right","sofa_chesterfield","sofa_velvet_3","sofa_modular_5","sofa_armless","sofa_chaise","sofa_u","sofa_bed","chaise_longue","armchair","club_chair","cocktail_chair","wingback_chair","recliner","rocking_chair","bean_bag","ottoman","stool","chair_upholstered","chair_shell","coffee_table","coffee_table_round","coffee_table_glass","nesting_tables","side_table_round","console_table","tv_console","lowboard_120","lowboard_160","lowboard_200","tv_board","tv_wall","tv_stand","smart_display","smart_speaker","smart_curtain","sideboard","highboard","chest_drawers_3","display_cabinet","shelf","bookshelf_wide","cube_shelf_2x2","cube_shelf_4x2","cube_shelf_4x4","room_divider_shelf","floating_shelf","room_divider","wood_stove","altar","altar_table","altar_cabinet","altar_wall","plant","rug"],dining:["table","table_120","table_160","table_200","table_solid_220","table_round","chair","bench","bench_dining_160","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_corner","kitchen_wall","kitchen_tall","kitchen_display","island","worktop","sink","stove","range_hood","microwave","water_purifier","dishwasher","fridge"],sleeping:["bed","bed_single","bed_double","bunk_bed","crib","nightstand","wardrobe","dresser","vanity"],bath:["bathtub","shower","shower_screen","wc","washbasin","water_heater","hot_water_tank","washer","dryer","washer_dryer_tower","drying_rack"],climate:["air_conditioner","heat_pump_outdoor","air_purifier","humidifier","radiator","wall_thermostat","temperature_humidity_sensor","ventilation_fan","fan_ceiling","fan_ceiling_light","fan_wall","fan_floor"],outdoor:["security_camera","video_doorbell","smart_lock","water_pump","robot_mower","balcony_solar","hammock","stone_table_set","planter_large","water_tank","gate","fence"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","shoe_cabinet","shoe_bench","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","network_cabinet","nas_server","modem_router","electrical_panel","ups_unit","access_point","smoke_detector","siren_alarm","stairs","stairs_landing","robot_vacuum"],vehicles:["motorbike","parking"]},ve=["meter","inverter","home_battery","wallbox","grid_point"],In=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden","lamp_column","lamp_tv_bars","lamp_orb_table","lamp_portable","lamp_ambient_spot","lamp_cube","lamp_panel_round","lamp_garden_spots","lamp_wall_updown"]),An=new Set([...In,"radiator","air_conditioner","water_pump","fan_ceiling","fan_ceiling_light","fan_wall","fan_floor","water_heater","range_hood","microwave","water_purifier","air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","network_cabinet","nas_server","access_point","wall_thermostat","smoke_detector","siren_alarm","electrical_panel","ups_unit","modem_router","heat_pump_outdoor","hot_water_tank","ventilation_fan","humidifier","smart_display","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","temperature_humidity_sensor","video_doorbell","robot_vacuum","robot_mower","inverter","home_battery","wallbox","meter","tv_board","tv_wall","tv_stand","desk","fridge","fridge_smart","stove","kitchen_tall","kitchen_display","dishwasher","washer","dryer","washer_dryer_tower","balcony_solar","kitchen","island","sink"]),ne={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_landing:[2.1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],lamp_column:[.12,.12,1.45],lamp_tv_bars:[.65,.16,.38],lamp_orb_table:[.28,.28,.24],lamp_portable:[.24,.24,.26],lamp_ambient_spot:[.2,.2,.2],lamp_cube:[.26,.26,.24],lamp_panel_round:[.42,.42,.045],lamp_garden_spots:[.65,.18,.32],lamp_wall_updown:[.14,.12,.32],radiator:[1,.1,.6],air_conditioner:[1,.22,.3],water_pump:[.55,.4,.45],altar:[1.27,.61,1.53],altar_wall:[.89,.48,.48],shoe_cabinet:[1,.35,1],motorbike:[.72,1.9,1.15],fan_ceiling:[1.4,1.4,.32],fan_ceiling_light:[1.4,1.4,.4],fan_wall:[.5,.3,.5],fan_floor:[.45,.45,1.25],water_heater:[.75,.35,.45],drying_rack:[1.6,.6,1.7],shoe_bench:[1,.38,.48],room_divider:[1.6,.3,2.1],range_hood:[.75,.5,.5],microwave:[.5,.4,.3],water_purifier:[.42,.38,1.2],air_purifier:[.32,.32,.65],smart_speaker:[.14,.14,.19],security_camera:[.2,.24,.22],smart_lock:[.1,.08,.32],smart_curtain:[2,.16,2.2],network_cabinet:[.6,.65,1.35],nas_server:[.42,.45,.34],access_point:[.24,.24,.055],wall_thermostat:[.18,.065,.24],smoke_detector:[.15,.15,.055],siren_alarm:[.22,.085,.28],electrical_panel:[.55,.14,.8],ups_unit:[.45,.5,.72],modem_router:[.34,.22,.12],heat_pump_outdoor:[1,.48,.86],hot_water_tank:[.55,.55,1.3],ventilation_fan:[.32,.14,.32],humidifier:[.38,.38,.8],smart_display:[.55,.16,.36],wall_switch:[.09,.045,.09],wall_outlet:[.09,.045,.09],smart_plug:[.1,.08,.12],motion_sensor:[.11,.08,.11],contact_sensor:[.11,.04,.05],water_leak_sensor:[.09,.09,.035],temperature_humidity_sensor:[.1,.045,.1],video_doorbell:[.055,.045,.14],kitchen_corner:[1.25,1.25,.92],kitchen_display:[.8,.42,2.1],vanity:[1,.45,1.55],crib:[.75,1.25,.95],bed_single:[1,2.05,.9],bed_double:[1.8,2.05,.9],sofa_2:[1.65,.9,.82],sofa_3:[2.15,.92,.82],sofa_4:[2.75,.95,.84],sofa_corner_left:[2.5,1.7,.82],sofa_corner_right:[2.5,1.7,.82],sofa_chesterfield:[2.15,.92,.78],sofa_velvet_3:[2.1,.9,.8],sofa_modular_5:[2.8,1.5,.76],sofa_armless:[1.8,.82,.76],sofa_chaise:[2.35,1.55,.82],sofa_u:[3,1.8,.84],club_chair:[.82,.82,.78],wingback_chair:[.82,.9,1.12],rocking_chair:[.72,1,1.05],chaise_longue:[.82,1.75,.9],cocktail_chair:[.72,.72,.78],recliner:[.85,1.55,1.05],bean_bag:[.85,.85,.72],chair_upholstered:[.5,.56,.92],chair_shell:[.52,.56,.86],ottoman:[.75,.55,.43],tv_console:[1.8,.42,.55],display_cabinet:[1,.42,1.9],cube_shelf_4x4:[1.6,.35,1.6],room_divider_shelf:[1.6,.32,1.9],console_table:[1.2,.35,.78],lowboard_120:[1.2,.42,.5],lowboard_160:[1.6,.42,.5],lowboard_200:[2,.42,.5],highboard:[1.2,.42,1.25],chest_drawers_3:[.9,.45,.82],tv_stand:[1.4,.5,1.45],wood_stove:[.55,.5,1.05],table_120:[1.2,.9,.75],table_160:[1.6,.9,.75],table_200:[2,.9,.75],table_solid_220:[2.2,1,.76],bench_dining_160:[1.6,.42,.48],sofa_l:[2.5,1.7,.82],sofa_bed:[2,1.35,.78],shower_screen:[1,.08,1.9],hammock:[2.6,.9,1.2],stone_table_set:[2.2,2.2,.75],planter_large:[.8,.8,1.6],water_tank:[1.25,1.25,1.55],gate:[3.2,.18,1.8],fence:[2.4,.16,1.5],robot_vacuum:[.42,.62,.72],robot_mower:[.85,1.15,.48],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],coffee_table_round:[.9,.9,.42],coffee_table_glass:[1.1,.6,.42],nesting_tables:[1,.65,.46],side_table_round:[.55,.55,.55],bookshelf_wide:[1.6,.35,1.9],cube_shelf_2x2:[.82,.35,.82],cube_shelf_4x2:[1.6,.35,.82],floating_shelf:[1.2,.25,.08],altar_table:[1.07,.56,1.35],altar_cabinet:[1.53,.68,1.62],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],washer_dryer_tower:[.66,.68,1.75],balcony_solar:[1.65,.72,1.05],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function Ve(s){return s.kind==="veranda"||s.kind==="balcony"||s.kind==="canopy"}function ar(s,e){if(s.length<2)return 0;if(e<0){let u=0,h=-1;for(let p=0;p<s.length;p++){let _=s[p],f=s[(p+1)%s.length],m=Math.hypot(f[0]-_[0],f[1]-_[1]);m>h&&([u,h]=[p,m])}return u}let t=s[e],n=s[(e+1)%s.length],i=n[0]-t[0],r=n[1]-t[1],o=Math.hypot(i,r)||1,a=(t[0]+n[0])/2,l=(t[1]+n[1])/2,d=0,c=-1;for(let u=0;u<s.length;u++){if(u===e)continue;let h=s[u],p=s[(u+1)%s.length],_=p[0]-h[0],f=p[1]-h[1],m=Math.hypot(_,f)||1,y=Math.abs((_*i+f*r)/(m*o)),w=Math.abs(i*((h[1]+p[1])/2-l)-r*((h[0]+p[0])/2-a))/o*y;w>c&&([d,c]=[u,w])}return d}var lr=["always","no_power","never"],cr=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],Nt={field:null,size:1,right:0,up:0},dr=["navigate","more_info","service","fire_dom_event"];function Pn(s,e,t){return s?e?!!t.lock_plan:!!s.locked:!1}var ur=["rain","snow","fog","clouds","lightning","sky"],Tn=["rain","snow","clouds","lightning","sky"],hr=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola"],On={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Ln(s){return s==="hedge"||s==="fence"||s==="pergola"}var Dn=["x","-x","z","-z"];function Ms(s,e,t){let n=s.slope??0;if(!n||s.type==="pool")return 0;let i=s.slope_dir??"x",r=(d,c)=>i==="x"?d:i==="-x"?-d:i==="z"?c:-c,o=1/0,a=-1/0;for(let[d,c]of s.points){let u=r(d,c);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(e,t)-o)/(a-o)));return n*l}function Es(s,e,t,n){return pr(s)+(e.offset??0)+On[e.type]-Ms(e,t,n)}function pr(s){return s.elevation>.3?0:-.2}function Bt(s,e,t){let n=(s.outdoor??[]).filter(r=>!Ln(r.type)&&r.type!=="pool"&&C([e,t],r.points)),i=[...n].reverse().find(r=>r.cut)??n[0];return i?Es(s,i,e,t):pr(s)}var zs={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},fr=["wood","oak","tiles","carpet","stone","concrete"],_r={type:"none",pitch:35,overhang:.4},Rs={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{..._r}};function mr(s,e,t){return{id:s,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var As=2.75;function gr(s,e){if(e!=null&&Number.isFinite(e))return Math.round(e*As*100)/100;let t=s.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return t?Math.round((t.elevation+t.height+.25)*100)/100:0}function br(s,e,t){let n=s.rooms.flatMap(a=>a.points.map(l=>l[0])),i=s.rooms.flatMap(a=>a.points.map(l=>l[1])),r=n.length?Math.ceil(Math.max(...n))+1:0,o=i.length?Math.floor(Math.min(...i)):0;return e.map((a,l)=>{let d=r+l%3*4.5,c=o+Math.floor(l/3)*3.5;return{id:t(),name:a.name,area_id:a.area_id,points:[[d,c],[d+4,c],[d+4,c+3],[d,c+3]],floor_material:"wood"}})}function yr(s,e,t,n){let i=s.rotation*Math.PI/180,r=Math.cos(i),o=Math.sin(i),[a,l]=e,d=s.x-a*(s.w/2)*r+l*(s.d/2)*o,c=s.z-a*(s.w/2)*o-l*(s.d/2)*r,u=t[0]-d,h=t[1]-c,p=y=>Math.max(.1,Math.round(y/n)*n),_=p((u*r+h*o)*a),f=p((-u*o+h*r)*l),m=y=>Math.round(y*1e3)/1e3;return{x:m(d+a*(_/2)*r-l*(f/2)*o),z:m(c+a*(_/2)*o+l*(f/2)*r),w:m(_),d:m(f)}}function Hn(s,e){let t=s.rotation*Math.PI/180,n=Math.cos(t),i=Math.sin(t),[r,o]=e;return[s.x+r*(s.w/2)*n-o*(s.d/2)*i,s.z+r*(s.w/2)*i+o*(s.d/2)*n]}function Wn(s,e){return Math.atan2(-(e[0]-s.x),e[1]-s.z)*180/Math.PI}var or=1.75;function Cn(s){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_panel_round","lamp_pendant","fan_ceiling","fan_ceiling_light","access_point","smoke_detector","stairs","stairs_landing","stairwell","parking"].includes(s.type)?!1:te(s.type)?.mount!=="ceiling"}function se(s){return In.has(s)||!!te(s)?.light}var Fs=new Set(["table","table_round","coffee_table","coffee_table_round","coffee_table_glass","nesting_tables","side_table_round","console_table","lowboard_120","lowboard_160","lowboard_200","table_120","table_160","table_200","table_solid_220","tv_console","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Vn(s,e,t,n=0){let i=ae(s.points),r=i.x1-i.x0-2*n,o=i.z1-i.z0-2*n,a=[];for(let l=0;l<e;l++)for(let d=0;d<t;d++){let c=[Math.round((i.x0+n+r/t*(d+.5))*1e3)/1e3,Math.round((i.z0+n+o/e*(l+.5))*1e3)/1e3];C(c,s.points)&&a.push(c)}return a}function Ye(s,e,t){let n=o=>Math.round(o*1e3)/1e3,[i,r]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[t];return[n(s[0]+i*e),n(s[1]+r*e)]}function sr(s){switch(s.type){case"home_battery":return s.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"floating_shelf":return 1.35;case"tv_wall":return Math.max(0,1.3-s.h/2);case"radiator":return .12;case"air_conditioner":return 1.9;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;case"security_camera":return 1.85;case"smart_lock":return .95;case"wall_thermostat":return 1.35;case"siren_alarm":return 1.85;case"electrical_panel":return .85;case"ventilation_fan":return 1.8;case"wall_switch":return 1.05;case"wall_outlet":case"smart_plug":return .3;case"motion_sensor":return 1.9;case"contact_sensor":return 1.1;case"temperature_humidity_sensor":return 1.35;case"video_doorbell":return 1.25;default:return 0}}function Vt(s,e,t){let n=0;for(let i of s.furniture)!(Fs.has(i.type)||te(i.type)?.surface)||!C([e,t],Gn(i))||(n=Math.max(n,i.h));return n}var Bn=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Nn=["standard","bars","glass_wall"];function Kt(s,e){return s.type==="door"?s.style&&Bn.includes(s.style)?s.style:e?"front":"interior":s.style&&Nn.includes(s.style)?s.style:"standard"}function vr(s,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let i=e==="sidelights",r=s-.04,o=Math.min(1.05,Math.max(.6,r-(i?.6:.3))),a=(r-o)/(i?2:1),l=n.sidelight_width??a,d=i?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),d=i?Math.max(.1,d):0;let c=r-.5;if(l+d>c){let h=Math.max(0,c)/(l+d);l*=h,d*=h}return i?{panels:[[.02,.02+l],[s-.02-d,s-.02]],x0:.02+l,x1:s-.02-d}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:s-.02}:{panels:[[s-.02-l,s-.02]],x0:.02,x1:s-.02-l}}function Kn(s){return s==="front"||s==="front_glass"||s==="sidelight"||s==="sidelights"}var Ut={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function Un(s){if(s.type==="garage")return"garage";if(s.type==="window"&&s.style==="glass_wall")return"glass_wall";let e=s.leaves===2;return s.type==="door"?!e&&s.style&&Kn(s.style)?"front":e?"door_double":"door":s.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function Gt(s){s.energy={...zs,...s.energy??{}},s.presence=s.presence??[],s.settings={...Rs,...s.settings,roof:{..._r,...s.settings?.roof??{}}};for(let e of s.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>{let i={...n,entity:n.entity??null,power:n.power??null};if(n.type==="robot_vacuum"&&Math.abs(n.w-.36)<.001&&Math.abs(n.d-.5)<.001&&Math.abs(n.h-.1)<.001){let[r,o,a]=ne.robot_vacuum;return{...i,w:r,d:o,h:a}}return i});let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let r=n[i.mount??"ceiling"],[o,a,l]=ne[r];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:r,x:i.x,z:i.z,rotation:0,w:o,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return s}function U(s){return`${s}_${Math.random().toString(36).slice(2,10)}`}function J(s){let e=0;for(let t=0;t<s.length;t++){let[n,i]=s[t],[r,o]=s[(t+1)%s.length];e+=n*o-r*i}return e/2}function fe(s){return Math.abs(J(s))}function _e(s){let e=J(s);if(Math.abs(e)<1e-9){let i=s.length||1;return[s.reduce((r,o)=>r+o[0],0)/i,s.reduce((r,o)=>r+o[1],0)/i]}let t=0,n=0;for(let i=0;i<s.length;i++){let[r,o]=s[i],[a,l]=s[(i+1)%s.length],d=r*l-a*o;t+=(r+a)*d,n+=(o+l)*d}return[t/(6*e),n/(6*e)]}function jt(s){if(s.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=s[e],[i,r]=s[(e+1)%4];if(Math.abs(t-i)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function ae(s){let e=1/0,t=1/0,n=-1/0,i=-1/0;for(let[r,o]of s)e=Math.min(e,r),t=Math.min(t,o),n=Math.max(n,r),i=Math.max(i,o);return{x0:e,z0:t,x1:n,z1:i}}function Gn(s){let e=s.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=s.w/2,r=s.d/2;return[[-i,-r],[i,-r],[i,r],[-i,r]].map(([o,a])=>[s.x+o*t-a*n,s.z+o*n+a*t])}function C(s,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[r,o]=e[n],[a,l]=e[i];o>s[1]!=l>s[1]&&s[0]<(a-r)*(s[1]-o)/(l-o)+r&&(t=!t)}return t}var wr={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_column:"column",lamp_tv_bars:"tv_bars",lamp_orb_table:"orb_table",lamp_portable:"portable",lamp_ambient_spot:"ambient",lamp_cube:"cube",lamp_panel_round:"round_panel",lamp_garden_spots:"garden_set",lamp_wall_updown:"wall_updown",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var kr="neonplan3d";function Is(s){let e=structuredClone(s);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let t of e.floors)t.placements=[],t.background=null,t.rooms=t.rooms.map(n=>({...n,area_id:null})),t.furniture=t.furniture.map(n=>({...n,entity:null,power:null})),t.openings=t.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return e}function $r(s,e){return{format:kr,version:1,exported_at:new Date().toISOString(),building:e?Is(s):structuredClone(s)}}function xr(s){let e;try{e=JSON.parse(s)}catch{throw new Error("not_json")}let t=e,n=t?.format===kr?t.building:e;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return Gt(n)}function Sr(s){let e=new Set;for(let t of s.floors){t.background?.image_id&&e.add(t.background.image_id);for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&e.add(i.image)}return[...e]}function jn(s,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=t,n.download=s,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var Ps={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",water_heater:"switch",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Ts=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Os=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Ls=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Zt=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Ar=new Set(["light","switch"]);function qn(s){return s.slice(0,s.indexOf("."))}function B(s){return Ps[qn(s)]??null}function _t(s){return s!==null&&s!=="scene"&&s!=="script"}function mt(s,e){let t=s.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&s.devices?.[t.device_id]?.area_id||null:null}function Mr(s,e){let t=B(e);if(!t)return!1;let n=s.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let i=s.states[e];if(!i)return!1;let r=i.attributes.device_class;return t==="sensor"?r?Ts.has(r):Os.has(String(i.attributes.unit_of_measurement??"")):t==="binary"?!!r&&Ls.has(r):!0}var Ds=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Er(s,e){if(B(e)!=="sensor")return!1;let t=s.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=s.states[e];return!n||!n.attributes.unit_of_measurement||Ds.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Qn(n)}var Zn=null;function gt(s){let e=Zn;if(e&&e.entities===s.entities&&e.devices===s.devices&&(e.states===s.states||(e.states=s.states,Object.keys(s.states).length===e.stateCount)))return e;let t=new Map,n=new Map,i=[],r=new Map;for(let o of Object.keys(s.entities??{})){let a=s.entities[o],l=a.device_id;l&&ti(s,o)&&(n.get(l)??n.set(l,[]).get(l)).push(o),l&&!a.hidden&&!a.entity_category&&(r.get(l)??r.set(l,new Set).get(l)).add(qn(o));let d=Mr(s,o),c=mt(s,o);if(!c){(d||Er(s,o))&&_t(B(o))&&i.push(o);continue}d&&(t.get(c)??t.set(c,[]).get(c)).push(o)}if(s.entities)for(let o of Object.keys(s.states))s.entities[o]||(Mr(s,o)||Er(s,o))&&_t(B(o))&&i.push(o);i.sort((o,a)=>Zt.indexOf(B(o))-Zt.indexOf(B(a))||Y(s,o).localeCompare(Y(s,a)));for(let[o,a]of t){let l=s.areas?.[o]?.name;a.sort((d,c)=>{let u=Zt.indexOf(B(d)),h=Zt.indexOf(B(c));return u-h||Y(s,d,l).localeCompare(Y(s,c,l))})}return Zn={entities:s.entities,devices:s.devices,states:s.states,stateCount:Object.keys(s.states).length,areas:t,power:n,unassigned:i,domains:r},Zn}function Ae(s,e){return!e||!s.entities?[]:gt(s).areas.get(e)??[]}function Fr(s,e){return s.entities?[...gt(s).areas].filter(([t])=>t!==e).map(([t,n])=>({areaId:t,name:s.areas?.[t]?.name??t,ids:n.filter(i=>_t(B(i)))})).filter(t=>t.ids.length).sort((t,n)=>t.name.localeCompare(n.name)):[]}function Ir(s){return s.entities?gt(s).unassigned:[]}var Yn={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Hs=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Ws=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Xn(s,e){let t=s.entities?.[e]?.device_id,n=t?gt(s).domains.get(t):void 0;return n&&[...n].some(i=>Hs.has(i))?!1:!Ws.test(`${e} ${s.states[e]?.attributes.friendly_name??""}`)}function Pr(s,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return s.states[i]?[i]:[];let r=Yn[n],o=(u,h)=>C([u,h],t.points),a=e?.placements.filter(u=>u.entity_id.startsWith("sensor."))??[],l=a.filter(u=>o(u.x,u.z)).map(u=>u.entity_id),d=new Set(a.filter(u=>!o(u.x,u.z)).map(u=>u.entity_id));return[...new Set([...Ae(s,t.area_id).filter(u=>!d.has(u)),...l])].filter(u=>u.startsWith("sensor.")&&s.states[u]?.attributes.device_class===r&&Xn(s,u))}function Tr(s,e){return s.entities?gt(s).power.get(e)??[]:[]}function Y(s,e,t){let i=s.states[e]?.attributes.friendly_name??s.entities?.[e]?.name??e;if(t&&i.length>t.length+1&&i.toLowerCase().startsWith(t.toLowerCase()+" ")){let r=i.slice(t.length+1);return r.charAt(0).toUpperCase()+r.slice(1)}return i}function Qn(s){return!s||s.state==="unavailable"||s.state==="unknown"}function Or(s){return!!s&&s.entity_id.startsWith("sensor.")&&s.attributes.device_class==="enum"}function qt(s,e,t=null){if(s==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(s==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(s){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function Cs(s,e){let t=1/0;for(let n=0;n<e.length;n++){let i=e[n],r=e[(n+1)%e.length],o=r[0]-i[0],a=r[1]-i[1],l=o*o+a*a||1,d=Math.min(1,Math.max(0,((s[0]-i[0])*o+(s[1]-i[1])*a)/l));t=Math.min(t,Math.hypot(s[0]-i[0]-o*d,s[1]-i[1]-a*d))}return t}function Lr(s,e,t=[]){if(s.points.length<3||!e.length)return[];let n=s.points,i=n.map(g=>g[0]),r=n.map(g=>g[1]),o=Math.min(...i),a=Math.min(...r),l=Math.max(...i),d=Math.max(...r),c=Math.min(l-o,d-a),u=Math.max(.1,Math.min(.25,c/8)),h=Math.min(.35,c/5),p=_e(n),_=[];for(let g=o+u/2;g<l;g+=u)for(let w=a+u/2;w<d;w+=u){let x=[g,w];if(!C(x,n))continue;let k=Cs(x,n);k<h||_.push({p:x,wall:k})}_.length||_.push({p,wall:0});let f=[...t],m=[],y=Math.min(.7,c/4);for(let g of e){let w=B(g)==="light",x=_[0].p,k=-1/0;for(let{p:R,wall:$}of _){let F=f.length?Math.min(...f.map(T=>Math.hypot(R[0]-T[0],R[1]-T[1]))):3,S=Math.hypot(R[0]-p[0],R[1]-p[1]),E=Math.min(F,3)*2;S<y&&!w&&(E-=10),E-=w?S*.35:$*1.2,E>k+1e-9&&(k=E,x=R)}let z=[Math.round(x[0]*100)/100,Math.round(x[1]*100)/100];f.push(z),m.push({entity_id:g,x:z[0],z:z[1],y:null,mount:null})}return m}var Vs=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Bs=new Set(["garage","gate"]),Ns=new Set(["window","opening"]);function ft(s,e,t=!1){let n=new Map;return e.length&&s.forEach((i,r)=>{let o=t&&e.length===1?e[0]:e[r];o&&n.set(i.id,o)}),n}function Dr(s,e){let t=new Map;for(let n of e)for(let i of n.rooms){let r=n.openings.filter(g=>g.room_id===i.id).sort((g,w)=>g.edge-w.edge||g.offset-w.offset);if(!r.length)continue;let o=Ae(s,i.area_id),a=g=>s.states[g]?.attributes.device_class,l=o.filter(g=>B(g)==="cover"&&Vs.has(a(g))),d=r.filter(g=>g.type==="window"),c=r.filter(g=>g.type==="door"),u=r.filter(g=>g.type==="garage"),h=ft(d,l,!0),p=ft(d,o.filter(g=>B(g)==="binary"&&Ns.has(a(g)))),_=ft(c,o.filter(g=>B(g)==="binary"&&a(g)==="door")),f=ft(u,o.filter(g=>B(g)==="cover"&&Bs.has(a(g)??""))),m=ft(u,o.filter(g=>B(g)==="binary"&&a(g)==="garage_door")),y=(g,w)=>g==="none"?null:g??w??null;for(let g of r){let w=g.type==="window"?h:g.type==="garage"?f:null,x=g.type==="window"?p:g.type==="garage"?m:_;t.set(g.id,{cover:y(g.cover,w?.get(g.id)),contact:g.sensor==="handle"&&g.contact==null?null:y(g.contact,x.get(g.id)),tilt:g.tilt==="none"?null:g.tilt,contact2:g.leaves===2&&g.contact2&&g.contact2!=="none"?g.contact2:null,tilt2:g.leaves===2&&g.tilt2&&g.tilt2!=="none"?g.tilt2:null,position:g.position&&g.position!=="none"?g.position:null,positionInverted:!!g.position_inverted,tiltAngle:g.tilt_angle&&g.tilt_angle!=="none"?g.tilt_angle:null,tiltMax:g.tilt_max??null,tiltOffset:g.tilt_offset??null,tiltInvert:!!g.tilt_invert,shut:!!g.shut})}}return t}var Ks=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Jn(s){if(!s||Qn(s))return null;let e=s.attributes.window_state;for(let t of[typeof e=="string"?e:null,s.state]){if(!t)continue;let n=Ks.find(([i])=>i.test(t.trim()));if(n)return n[1]}return null}function ei(s,e){let t=new Map,n=[];for(let o of e){let a=s.entities?.[o]?.device_id??`entity:${o}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(o)}let i=n.map(o=>{let a=t.get(o),l=a.find(d=>!s.entities?.[d]?.name)??a[0];return{primary:l,others:a.filter(d=>d!==l)}}),r=new Map(e.map((o,a)=>[o,a]));return i.sort((o,a)=>r.get(o.primary)-r.get(a.primary))}function Us(s,e){return ei(s,e).map(t=>t.primary)}var Gs={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,robot_mower:/(mähroboter|robot(?:ic)? ?mower|lawn ?mower|robot cắt cỏ|robot cat co|máy cắt cỏ|may cat co)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_stand:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,washer_dryer_tower:/(wasch.*trock|trock.*wasch|washer.*dryer|dryer.*washer|giặt.*sấy|giat.*say)/i,balcony_solar:/(balkonkraftwerk|balcony.*solar|solar.*balcony|pin.*mặt trời.*ban công|pin.*mat troi.*ban cong)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,air_conditioner:/(klima|air ?condition|aircon|airco|split|điều hòa|dieu hoa|máy lạnh|may lanh)/i,water_pump:/(wasserpumpe|gartenpumpe|brunnenpumpe|water ?pump|garden ?pump|well ?pump|pool ?pump|irrigation|máy bơm|may bom|bơm nước|bom nuoc|bơm giếng|bom gieng|bơm tưới|bom tuoi)/i,fan_ceiling:/(deckenventilator|ceiling ?fan|quạt trần|quat tran)/i,fan_ceiling_light:/(deckenventilator|ceiling ?fan|quạt trần|quat tran)/i,fan_wall:/(wandventilator|wall(?: mounted)? ?fan|quạt (?:treo )?tường|quat (?:treo )?tuong)/i,fan_floor:/(standventilator|standing ?fan|floor ?fan|quạt đứng|quat dung)/i,water_heater:/(warmwasser|water ?heater|boiler|bình nóng lạnh|binh nong lanh|máy nước nóng|may nuoc nong)/i,range_hood:/(dunstabzug|range ?hood|extractor|hút mùi|hut mui)/i,microwave:/(mikrowelle|microwave|lò vi sóng|lo vi song)/i,water_purifier:/(wasserfilter|water ?purifier|water ?dispenser|lọc nước|loc nuoc|cây nước|cay nuoc)/i,air_purifier:/(luftreiniger|air ?purifier|air ?cleaner|máy lọc không khí|may loc khong khi)/i,smart_speaker:/(smart ?speaker|lautsprecher|speaker|echo|alexa|homepod|google (home|nest)|loa thông minh|loa thong minh)/i,security_camera:/(security ?camera|surveillance|überwachung|camera|kamera|cctv|cam an ninh)/i,smart_lock:/(smart ?lock|türschloss|door ?lock|khóa cửa|khoa cua)/i,smart_curtain:/(curtain|blind|shade|vorhang|rollladen|rèm|rem)/i,network_cabinet:/(netzwerkschrank|network ?(cabinet|rack)|server ?rack|tủ mạng|tu mang)/i,nas_server:/\b(nas|network attached storage|homeserver|home server|server lưu trữ|may chu luu tru|máy chủ lưu trữ)\b/i,access_point:/(wlan|wi-?fi|access ?point|wireless ?ap|điểm truy cập|diem truy cap|bộ phát wifi|bo phat wifi)/i,wall_thermostat:/(wandthermostat|wall ?thermostat|thermostat|bộ điều nhiệt|bo dieu nhiet)/i,smoke_detector:/(rauchmelder|smoke ?(detector|alarm)|báo khói|bao khoi|cảm biến khói|cam bien khoi)/i,siren_alarm:/(sirene|siren|alarm|còi báo động|coi bao dong|đèn chớp|den chop)/i,electrical_panel:/(sicherungskasten|electrical ?panel|fuse ?box|tủ điện|tu dien)/i,ups_unit:/\b(ups|usv|bộ lưu điện|bo luu dien)\b/i,modem_router:/(modem|router|bộ định tuyến|bo dinh tuyen|bộ phát mạng|bo phat mang)/i,heat_pump_outdoor:/(wärmepumpe|heat ?pump|bơm nhiệt|bom nhiet)/i,hot_water_tank:/(warmwasserspeicher|hot ?water ?tank|bình tích nước nóng|binh tich nuoc nong)/i,ventilation_fan:/(lüfter|exhaust ?fan|ventilation ?fan|quạt thông gió|quat thong gio)/i,humidifier:/(luftbefeuchter|humidifier|máy tạo ẩm|may tao am)/i,smart_display:/(smart ?display|control ?panel|màn hình điều khiển|man hinh dieu khien)/i,wall_switch:/(wall ?switch|light ?switch|wandschalter|lichtschalter|công tắc|cong tac)/i,wall_outlet:/(wall ?outlet|power ?outlet|socket|steckdose|ổ cắm|o cam)/i,smart_plug:/(smart ?plug|smart ?socket|zwischenstecker|ổ cắm thông minh|o cam thong minh)/i,motion_sensor:/(motion|occupancy|presence|bewegung|präsenz|cảm biến chuyển động|cam bien chuyen dong|hiện diện|hien dien)/i,contact_sensor:/(door|window|contact|öffnung|kontakt|cửa|cua|cảm biến cửa|cam bien cua)/i,water_leak_sensor:/(water ?leak|moisture|wassermelder|leck|rò nước|ro nuoc|ngập|ngap)/i,temperature_humidity_sensor:/(temperature|humidity|thermo|hygro|temperatur|feuchte|nhiệt độ|nhiet do|độ ẩm|do am)/i,video_doorbell:/(video ?doorbell|doorbell|klingel|chuông cửa|chuong cua)/i,kitchen_display:/(vitrine|display ?cabinet|cabinet ?light|schranklicht|tủ kính|tu kinh|tủ trưng bày|tu trung bay|đèn tủ|den tu|led tủ|led tu)/i},Hr=new Set(["tv_board","tv_wall","tv_stand","smart_display"]);function Wr(s,e){let t=s.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let i=String(n).toLowerCase(),r=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===r||r.length>=3&&i.includes(r)}function Yt(s){return Hr.has(s)||!!rr(s)}function Xt(s){return Yt(s)||s==="desk"||s==="fridge_smart"}var zr={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i,lamp_column:/(lichtsäule|light ?column|cột đèn|cot den)/i,lamp_tv_bars:/(tv.*(light|licht|đèn|den)|light ?bar|lichtleiste|thanh đèn|thanh den)/i,lamp_orb_table:/(kugel|orb|sphere|cầu|cau)/i,lamp_portable:/(akku|battery|portable|tragbar|xách tay|xac tay|đèn sạc|den sac)/i,lamp_ambient_spot:/(ambient|ambiente|mood|không gian|khong gian)/i,lamp_cube:/(würfel|cube|khối|khoi)/i,lamp_panel_round:/((rund|round|tròn|tron).*(panel|decke|ceiling|ốp trần|op tran)|(panel|decke|ceiling|ốp trần|op tran).*(rund|round|tròn|tron))/i,lamp_garden_spots:/((garten|garden|outdoor|sân vườn|san vuon).*(spot|rọi|roi)|(spot|rọi|roi).*(garten|garden|outdoor|sân vườn|san vuon))/i,lamp_wall_updown:/(up.*down|außenwand|outdoor wall|tường.*hai hướng|tuong.*hai huong)/i};function ti(s,e){return e.startsWith("sensor.")&&s.states[e]?.attributes.device_class==="power"}function js(s,e){if(ti(s,e))return e;let t=s.entities?.[e]?.device_id;return t?Tr(s,t).find(n=>n!==e)??null:null}function bt(s,e){let t=new Map;for(let n of e){let i=new Set([...n.furniture.flatMap(r=>[r.entity,r.light_entity,r.power]),...n.placements.map(r=>r.entity_id)].filter(r=>!!r&&r!=="none"));for(let r of n.furniture){let o=r.type in zr,a=o?zr[r.type]:Gs[r.type];if(!a&&r.entity==null&&r.light_entity==null&&r.power==null)continue;let l=n.rooms.find(_=>_.points.length>=3&&C([r.x,r.z],_.points)),d=l?Us(s,Ae(s,l.area_id)):[],c=_=>`${_} ${Y(s,_)}`,u=r.entity==="none"?null:r.entity??null;if(r.entity==null){let _=d.filter(f=>!i.has(f));if(o){let f=_.filter(m=>B(m)==="light");u=f.find(m=>a.test(c(m)))??f[0]??null}else if(r.type==="robot_vacuum"){let f=l?.area_id??null;u=Object.keys(s.entities??{}).find(m=>m.startsWith("vacuum.")&&!i.has(m)&&mt(s,m)===f)??null}else if(r.type==="robot_mower"){let f=Object.keys(s.states??{}).filter(y=>y.startsWith("lawn_mower.")&&!i.has(y)),m=f.filter(y=>a.test(c(y)));u=m.length===1?m[0]:f.length===1?f[0]:null}else if(r.type==="radiator"||r.type==="air_conditioner"||r.type==="wall_thermostat"||r.type==="heat_pump_outdoor"){let f=_.filter(m=>B(m)==="climate");u=f.find(m=>a.test(c(m)))??f[0]??null}else if(["network_cabinet","nas_server","access_point","smoke_detector","siren_alarm","electrical_panel","ups_unit","modem_router","hot_water_tank","ventilation_fan","humidifier","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","temperature_humidity_sensor","video_doorbell","washer_dryer_tower","balcony_solar"].includes(r.type)){let f=l?.area_id??null,m={network_cabinet:["switch","sensor","binary_sensor"],nas_server:["switch","sensor","binary_sensor"],access_point:["switch","sensor","binary_sensor","device_tracker"],smoke_detector:["binary_sensor"],siren_alarm:["siren","alarm_control_panel","switch","binary_sensor"],electrical_panel:["switch","sensor","binary_sensor"],ups_unit:["switch","sensor","binary_sensor"],modem_router:["switch","sensor","binary_sensor","device_tracker"],hot_water_tank:["water_heater","climate","switch"],ventilation_fan:["fan","switch"],humidifier:["humidifier","fan","switch"],wall_switch:["switch","input_boolean","light"],wall_outlet:["switch"],smart_plug:["switch"],motion_sensor:["binary_sensor"],contact_sensor:["binary_sensor"],water_leak_sensor:["binary_sensor"],temperature_humidity_sensor:["sensor"],video_doorbell:["camera","binary_sensor"],washer_dryer_tower:["switch","sensor"],balcony_solar:["sensor"]},y=Object.keys(s.states??{}).filter(g=>{if(i.has(g)||!m[r.type].includes(qn(g))||f&&mt(s,g)!==f||r.type==="smoke_detector"&&s.states[g]?.attributes.device_class!=="smoke")return!1;let w=String(s.states[g]?.attributes.device_class??"");return r.type==="motion_sensor"&&!["motion","occupancy","presence"].includes(w)||r.type==="contact_sensor"&&!["door","window","opening"].includes(w)||r.type==="water_leak_sensor"&&w!=="moisture"||r.type==="temperature_humidity_sensor"&&!["temperature","humidity"].includes(w)||r.type==="balcony_solar"&&w!=="power"?!1:a.test(c(g))});u=l?y[0]??null:y.length===1?y[0]:null}else if(["air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain"].includes(r.type)){let f={air_purifier:"fan",smart_speaker:"media",security_camera:"camera",smart_lock:"lock",smart_curtain:"cover"}[r.type],m=_.filter(y=>B(y)===f);u=m.find(y=>a.test(c(y)))??m[0]??null}else if(r.type==="water_pump"){let m=(l?_:Object.keys(s.states??{}).filter(y=>!i.has(y))).filter(y=>["switch","fan"].includes(B(y)??"")&&a.test(c(y)));u=l?m[0]??null:m.length===1?m[0]:null}else if(r.type==="kitchen_display")u=_.filter(m=>["light","switch"].includes(B(m)??"")).find(m=>a.test(c(m)))??null;else if(Yt(r.type)){let f=_.filter(m=>B(m)==="media");u=f.find(m=>s.states[m]?.attributes.device_class==="tv")??f.find(m=>a?.test(c(m)))??(Hr.has(r.type)?f[0]??null:null)}else a&&(u=_.find(f=>["switch","media","fan"].includes(B(f)??"")&&a.test(c(f)))??null);u&&i.add(u)}let h=r.light_entity==="none"?null:r.light_entity??null;if(r.type==="fan_ceiling_light"&&r.light_entity==null){let _=(l?Ae(s,l.area_id):[]).filter(f=>!i.has(f)&&B(f)==="light");h=_.find(f=>/(fan|ceiling|decken|quạt|quat)/i.test(c(f)))??_[0]??null,h&&i.add(h)}let p=r.power==="none"?null:r.power??null;r.power==null&&(p=u?js(s,u):null,!p&&a&&l&&!o&&(p=Ae(s,l.area_id).find(f=>ti(s,f)&&!i.has(f)&&a.test(c(f)))??null),p&&i.add(p)),(u||h||p)&&t.set(r.id,{entity:u,power:p,...r.type==="fan_ceiling_light"||r.light_entity!=null?{light:h}:{}})}}return t}var Rr=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,Zs={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Cr(s,e){let t=e.car??{},n=u=>u&&u!=="none"?u:null,i=n(t.device)??n(e.entity),r=i?s.entities?.[i]?.device_id:null,o=r&&s.entities?Object.values(s.entities).filter(u=>u.device_id===r).map(u=>u.entity_id):[],a=u=>`${u} ${s.states[u]?.attributes.friendly_name??""} ${s.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,h,p)=>o.find(_=>h.includes(_.split(".")[0])&&Zs[u].test(a(_))&&(!p||p(_)))??null,d=u=>String(s.states[u]?.attributes.unit_of_measurement??""),c=u=>String(s.states[u]?.attributes.device_class??"");return{soc:n(t.soc)??o.find(u=>u.startsWith("sensor.")&&c(u)==="battery")??l("soc",["sensor"],u=>d(u)==="%"),range:n(t.range)??l("range",["sensor"],u=>/km|mi/.test(d(u)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],u=>/^k?W$/.test(d(u)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??o.find(u=>u.startsWith("binary_sensor.")&&c(u)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??o.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??o.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??o.find(u=>u.startsWith("device_tracker."))??null}}function Vr(s,e,t){if(t==="none")return null;if(t)return t;let n=e?s.entities?.[e]?.device_id:null;if(!n||!s.entities)return null;for(let i of Object.values(s.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(Rr.test(i.translation_key??"")||Rr.test(i.entity_id.split(".")[1])))return i.entity_id;return null}var A=(s,e,t,n,i="")=>I`<rect class=${i} x=${Math.min(s,t)} y=${Math.min(e,n)} width=${Math.abs(t-s)} height=${Math.abs(n-e)} />`,P=(s,e,t,n,i="")=>I`<line class=${i} x1=${s} y1=${e} x2=${t} y2=${n} />`,O=(s,e,t,n="")=>I`<circle class=${n} cx=${s} cy=${e} r=${t} />`,X=(s,e,t,n,i="")=>I`<ellipse class=${i} cx=${s} cy=${e} rx=${t} ry=${n} />`;function we(s,e,t){let n=[];for(let i=1;i<t;i++){let r=-s/2+s/t*i;n.push(P(r,e/2,r,e/2-Math.min(.12,e*.3)))}return n}function Be(s,e,t,n){let i=Math.min(.24,e*.28),r=n?Math.min(.2,s*.12):0,o=[A(-s/2,-e/2,s/2,-e/2+i,"fp3d-sym-fill")];n&&o.push(A(-s/2,-e/2,-s/2+r,e/2,"fp3d-sym-fill"),A(s/2-r,-e/2,s/2,e/2,"fp3d-sym-fill"));let a=s-2*r;for(let l=1;l<t;l++){let d=-s/2+r+a/t*l;o.push(P(d,-e/2+i,d,e/2-.02))}return o}function le(s,e){return Object.fromEntries(s.map(t=>[t,(n,i)=>e(t,n,i)]))}var qs=["motorbike","hammock","stone_table_set","planter_large","water_tank","gate","fence","parking","stairs","stairs_landing"];function Ys(s,e,t){switch(s){case"motorbike":return[X(0,-t*.34,e*.24,t*.11),X(0,t*.34,e*.24,t*.11),P(0,-t*.28,0,t*.3,"fp3d-sym-strong"),X(0,0,e*.3,t*.2,"fp3d-sym-fill"),P(-e*.32,t*.23,e*.32,t*.23)];case"hammock":return[P(-e/2,0,-e*.32,0),P(e*.32,0,e/2,0),X(0,0,e*.32,t*.42,"fp3d-sym-fill")];case"stone_table_set":return[O(0,0,Math.min(e,t)*.22,"fp3d-sym-fill"),...[[0,-.38],[.38,0],[0,.38],[-.38,0]].map(([n,i])=>O(n*e,i*t,Math.min(e,t)*.1))];case"planter_large":return[O(0,0,Math.min(e,t)*.47),O(0,0,Math.min(e,t)*.33,"fp3d-sym-fill")];case"water_tank":return[O(0,0,Math.min(e,t)*.48),O(0,0,Math.min(e,t)*.12,"fp3d-sym-fill")];case"gate":return[P(-e/2,0,e/2,0,"fp3d-sym-strong"),P(0,-t/2,0,t/2)];case"fence":{let n=[P(-e/2,0,e/2,0,"fp3d-sym-strong")];for(let i=0;i<7;i++)n.push(P(-e/2+e*i/6,-t/2,-e/2+e*i/6,t/2));return n}case"parking":return[A(-e/2+.08,-t/2+.08,e/2-.08,t/2-.08),P(-e*.15,t/2-.5,0,t/2-.22,"fp3d-sym-strong"),P(0,t/2-.22,e*.15,t/2-.5,"fp3d-sym-strong")];case"stairs":{let n=Math.max(3,Math.round(t/.26)),i=[];for(let r=1;r<n;r++)i.push(P(-e/2,t/2-t/n*r,e/2,t/2-t/n*r));return i.push(P(0,t/2-.1,0,-t/2+.25,"fp3d-sym-strong"),P(-.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong"),P(.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong")),i}case"stairs_landing":{let n=Math.min(.16,e*.12),i=(e-n)/2,r=Math.min(t*.34,Math.max(t*.22,i)),o=-t/2+r,a=-e/2,l=-n/2,d=n/2,c=e/2,u=Math.max(3,Math.round((t-r)/.26)),h=[P(-e/2,o,e/2,o,"fp3d-sym-strong")];for(let f=1;f<u;f++){let m=t/2-(t-r)/u*f;h.push(P(a,m,l,m),P(d,m,c,m))}let p=(a+l)/2,_=(d+c)/2;return h.push(P(p,t/2-.1,p,o+.18,"fp3d-sym-strong"),P(p-.12,o+.36,p,o+.18,"fp3d-sym-strong"),P(p+.12,o+.36,p,o+.18,"fp3d-sym-strong"),P(_,o+.18,_,t/2-.1,"fp3d-sym-strong"),P(_-.12,t/2-.28,_,t/2-.1,"fp3d-sym-strong"),P(_+.12,t/2-.28,_,t/2-.1,"fp3d-sym-strong")),h}default:return[]}}var Br=le(qs,Ys);var Xs=["fan_ceiling","fan_ceiling_light","fan_floor","fan_wall","water_heater","drying_rack","radiator","air_conditioner","water_pump"];function Qs(s,e,t){switch(s){case"fan_ceiling":case"fan_ceiling_light":{let n=Math.min(e,t),i=[...Array.from({length:5},(r,o)=>I`<rect x=${n*.08} y=${-n*.055} width=${n*.4} height=${n*.11} rx=${n*.015} transform=${`rotate(${o*72})`} />`),O(0,0,n*.105,"fp3d-sym-fill")];return s==="fan_ceiling_light"&&i.push(O(0,0,n*.15),O(0,0,n*.105,"fp3d-sym-fill")),i}case"fan_floor":return[O(0,0,Math.min(e,t)*.46),O(0,0,Math.min(e,t)*.12,"fp3d-sym-fill")];case"fan_wall":return[A(-e*.16,-t/2,e*.16,-t*.2,"fp3d-sym-fill"),P(0,-t*.2,0,t*.08,"fp3d-sym-strong"),X(0,t*.15,e*.46,t*.3),O(0,t*.15,Math.min(e,t)*.13,"fp3d-sym-fill")];case"water_heater":return[A(-e/2,-t/2,e/2,t/2),O(e*.3,t*.18,Math.min(e,t)*.06,"fp3d-sym-fill")];case"drying_rack":{let n=[A(-e/2,-t/2,e/2,t/2)];for(let i=1;i<6;i++)n.push(P(-e/2,-t/2+t*i/6,e/2,-t/2+t*i/6));return n}case"radiator":{let n=[],i=Math.max(3,Math.round(e/.1));for(let r=1;r<i;r++)n.push(P(-e/2+e/i*r,-t/2,-e/2+e/i*r,t/2));return n}case"air_conditioner":{let n=[A(-e/2,-t/2,e/2,t/2),P(-e*.43,t*.28,e*.43,t*.28,"fp3d-sym-strong")];for(let i=1;i<6;i++){let r=-e*.4+e*.8*(i/6);n.push(P(r,t*.12,r+e*.025,t*.42))}return n}case"water_pump":return[A(-e*.42,-t*.42,e*.42,t*.42),A(-e*.25,-t*.38,e*.25,t*.05,"fp3d-sym-fill"),O(0,t*.15,Math.min(e,t)*.27,"fp3d-sym-strong"),P(0,t*.15,0,t/2),P(e*.18,t*.15,e*.42,t*.15)];default:return[]}}var Nr=le(Xs,Qs);var Js=["altar","altar_table","altar_cabinet","altar_wall","shoe_cabinet","shoe_bench","room_divider","vanity","crib","bed_single","bed_double","sofa_2","sofa_3","sofa_4","sofa_l","sofa_corner_left","sofa_corner_right","sofa_chesterfield","sofa_velvet_3","sofa_modular_5","sofa_armless","sofa_chaise","sofa_u","sofa_bed","sofa","chaise_longue","armchair","club_chair","cocktail_chair","wingback_chair","recliner","rocking_chair","bean_bag","ottoman","bench","bench_dining_160","corner_bench","chair","chair_upholstered","chair_shell","office_chair","bar_stool","table_round","stool","table","table_120","table_160","table_200","table_solid_220","coffee_table","coffee_table_round","coffee_table_glass","nesting_tables","side_table_round","console_table","desk","bed","bunk_bed","nightstand","wardrobe","dresser","chest_drawers_3","sideboard","highboard","display_cabinet","tall_cabinet","kitchen","kitchen_wall","kitchen_tall","shelf","bookshelf_wide","cube_shelf_2x2","cube_shelf_4x2","cube_shelf_4x4","room_divider_shelf","floating_shelf","coat_rack","tv_console","lowboard_120","lowboard_160","lowboard_200","tv_board","tv_stand","tv_wall","wood_stove","plant","rug"];function ea(s,e,t){switch(s){case"altar":return[A(-e/2,-t/2,e/2,t/2),A(-e*.42,t*.18,e*.42,t/2,"fp3d-sym-fill"),O(0,t*.05,Math.min(e,t)*.08)];case"altar_table":return[A(-e/2,-t/2,e/2,t/2),A(-e*.42,t*.2,e*.42,t/2,"fp3d-sym-fill"),O(0,t*.04,Math.min(e,t)*.08)];case"altar_cabinet":return[...we(e,t,3),O(0,t*.04,Math.min(e,t)*.07)];case"altar_wall":return[A(-e/2,-t/2,e/2,t/2),P(-e*.35,t*.15,e*.35,t*.15,"fp3d-sym-strong")];case"shoe_cabinet":return[...we(e,t,Math.max(2,Math.round(e/.45))),P(-e/2,t*.12,e/2,t*.12,"fp3d-sym-strong")];case"shoe_bench":return[A(-e/2,-t/2,e/2,t/2),P(-e/2,0,e/2,0),...we(e,t,Math.max(2,Math.round(e/.35)))];case"room_divider":{let n=[A(-e/2,-t/2,e/2,t/2)];for(let i=1;i<7;i++)n.push(P(-e/2+e*i/7,-t/2,-e/2+e*i/7,t/2));return n}case"vanity":return[A(-e/2,-t/2,e/2,t/2),X(0,-t*.28,e*.28,t*.12,"fp3d-sym-strong")];case"crib":{let n=[A(-e/2,-t/2,e/2,t/2)];for(let i=1;i<6;i++)n.push(P(-e/2+e*i/6,-t/2,-e/2+e*i/6,-t/2+t*.12));return n}case"bed_single":case"bed_double":{let n=s==="bed_double"?2:1,i=[A(-e/2,-t/2,e/2,-t/2+.07,"fp3d-sym-fill"),P(-e/2,-t*.12,e/2,-t*.12)];for(let r=0;r<n;r++)i.push(A(-e/2+e*r/n+.08,-t/2+.1,-e/2+e*(r+1)/n-.08,-t*.15));return i}case"sofa_l":case"sofa_corner_left":return[...Be(e,Math.min(t,.9),Math.max(2,Math.round(e/.65)),!0),A(-e/2,-t/2,-e/2+Math.min(.9,e*.36),t/2,"fp3d-sym-fill")];case"sofa_corner_right":return[...Be(e,Math.min(t,.9),Math.max(2,Math.round(e/.65)),!0),A(e/2-Math.min(.9,e*.36),-t/2,e/2,t/2,"fp3d-sym-fill")];case"sofa_chaise":return[...Be(e,Math.min(t,.82),3,!0),A(-e/2,-t/2,-e/2+Math.min(.88,e*.36),t/2,"fp3d-sym-fill")];case"sofa_u":{let n=Math.min(e*.27,.82);return[A(-e/2,-t/2,e/2,-t/2+Math.min(.82,t*.48),"fp3d-sym-fill"),A(-e/2,-t/2,-e/2+n,t/2,"fp3d-sym-fill"),A(e/2-n,-t/2,e/2,t/2,"fp3d-sym-fill")]}case"sofa_bed":return[A(-e/2,-t/2,e/2,t/2),A(-e/2,-t/2,e/2,-t/2+Math.min(.24,t*.22),"fp3d-sym-fill"),P(0,-t/2+Math.min(.24,t*.22),0,t/2)];case"sofa":case"sofa_2":case"sofa_3":case"sofa_4":case"sofa_chesterfield":case"sofa_velvet_3":case"sofa_armless":{let n=s==="sofa_2"?2:s==="sofa_3"?3:s==="sofa_4"?4:Math.max(1,Math.round((e-.4)/.62));return Be(e,t,n,!0)}case"sofa_modular_5":return[A(-e/2,-t/2,e/2,-t/2+t*.58,"fp3d-sym-fill"),A(-e/2,-t/2,-e/2+e/3,t/2,"fp3d-sym-fill"),A(e/2-e/3,-t/2,e/2,t/2,"fp3d-sym-fill"),P(-e/6,-t/2,-e/6,t*.08),P(e/6,-t/2,e/6,t*.08)];case"armchair":case"club_chair":case"cocktail_chair":case"wingback_chair":return Be(e,t,1,!0);case"chaise_longue":return[A(-e/2,-t/2,e/2,t/2),A(-e/2,-t/2,e/2,-t*.12,"fp3d-sym-fill"),P(-e/2,t*.22,-e*.28,t*.22,"fp3d-sym-strong")];case"recliner":return[...Be(e,t*.58,1,!0),A(-e*.4,t*.15,e*.4,t*.47,"fp3d-sym-fill")];case"rocking_chair":return[A(-e*.36,-t*.28,e*.36,t*.28),P(-e*.42,-t/2,-e*.42,t/2,"fp3d-sym-strong"),P(e*.42,-t/2,e*.42,t/2,"fp3d-sym-strong")];case"bean_bag":return[O(0,0,Math.min(e,t)*.45),O(0,0,Math.min(e,t)*.2,"fp3d-sym-fill")];case"ottoman":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),P(0,-t/2,0,t/2),P(-e/2,0,e/2,0)];case"bench":case"bench_dining_160":return[A(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,t*.4);return[A(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill"),A(-e/2,-t/2,-e/2+.08,t/2,"fp3d-sym-fill"),P(-e/2+n,-t/2+n,e/2,-t/2+n),P(-e/2+n,-t/2+n,-e/2+n,t/2)]}case"chair":return[A(-e/2,-t/2,e/2,-t/2+.06,"fp3d-sym-fill")];case"chair_upholstered":return[A(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill"),A(-e*.42,-t*.3,e*.42,t*.42)];case"chair_shell":return[X(0,0,e*.44,t*.43,"fp3d-sym-fill"),O(0,0,Math.min(e,t)*.1)];case"office_chair":return[O(0,.03,Math.min(e,t)*.36),A(-e*.35,-t/2+.02,e*.35,-t/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":case"coffee_table_round":case"side_table_round":return[O(0,0,Math.min(e,t)*.42)];case"stool":return[A(-e/2+.04,-t/2+.04,e/2-.04,t/2-.04)];case"table":case"table_120":case"table_160":case"table_200":case"table_solid_220":case"coffee_table":case"coffee_table_glass":case"console_table":case"desk":{let n=[A(-e/2+.05,-t/2+.05,e/2-.05,t/2-.05)];return s==="desk"&&n.push(P(-.3,-t/2+.1,.3,-t/2+.1,"fp3d-sym-strong")),n}case"nesting_tables":return[A(-e/2,-t/2,e*.08,t*.18),A(-e*.05,-t*.15,e/2,t/2,"fp3d-sym-fill")];case"bed":case"bunk_bed":{let n=e>1.2?2:1,i=(e-.2)/n,r=[A(-e/2,-t/2,e/2,-t/2+.07,"fp3d-sym-fill"),P(-e/2,-t/2+(t-.1)*.36,e/2,-t/2+(t-.1)*.36)];for(let o=0;o<n;o++)r.push(A(-e/2+.13+i*o,-t/2+.12,-e/2+.07+i*(o+1),-t/2+.12+Math.min(.4,t*.18)));return r}case"nightstand":case"wardrobe":case"dresser":case"chest_drawers_3":case"sideboard":case"highboard":case"display_cabinet":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":case"bookshelf_wide":return we(e,t,s==="nightstand"||s==="tall_cabinet"||s==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"cube_shelf_2x2":case"cube_shelf_4x2":case"cube_shelf_4x4":case"room_divider_shelf":{let n=s==="cube_shelf_2x2"?2:s==="room_divider_shelf"?5:4,i=[A(-e/2,-t/2,e/2,t/2)];for(let r=1;r<n;r++)i.push(P(-e/2+e*r/n,-t/2,-e/2+e*r/n,t/2));return i}case"floating_shelf":return[A(-e/2,-t/2,e/2,t/2),P(-e*.35,-t/2,-e*.35,t*.15),P(e*.35,-t/2,e*.35,t*.15)];case"coat_rack":return[A(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),...we(e,t,Math.max(2,Math.round(e/.5)))];case"tv_console":return[...we(e,t,3),A(-e*.19,t*.08,e*.19,t/2,"fp3d-sym-fill")];case"lowboard_120":case"lowboard_160":case"lowboard_200":return we(e,t,Math.max(2,Math.round(e/.55)));case"tv_board":return[P(-Math.min(e*.4,.72),-t/2+.14,Math.min(e*.4,.72),-t/2+.14,"fp3d-sym-strong"),...we(e,t,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[P(-e/2,0,e/2,0,"fp3d-sym-strong")];case"tv_stand":return[A(-e*.45,-t*.08,e*.45,t*.08,"fp3d-sym-fill"),A(-e*.32,-t*.34,e*.32,t*.34),O(0,0,Math.min(e,t)*.07)];case"wood_stove":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),A(-e*.32,t*.18,e*.32,t/2),O(0,-t*.1,Math.min(e,t)*.12)];case"plant":return[O(0,0,Math.min(e,t)*.46),O(0,0,Math.min(e,t)*.25)];case"rug":return[A(-e/2+.1,-t/2+.1,e/2-.1,t/2-.1)];default:return[]}}var Kr=le(Js,ea);var ta=["range_hood","microwave","water_purifier","kitchen_corner","kitchen_display","shower_screen","island","fridge","stove","sink","bathtub","shower","wc","washbasin"];function na(s,e,t){switch(s){case"range_hood":return[A(-e/2,-t/2,e/2,t/2),P(-e*.35,t*.28,e*.35,t*.28,"fp3d-sym-strong")];case"microwave":return[A(-e/2,-t/2,e/2,t/2),A(-e*.38,-t*.05,e*.2,t/2,"fp3d-sym-fill"),O(e*.34,t*.22,Math.min(e,t)*.06)];case"water_purifier":return[A(-e/2,-t/2,e/2,t/2),O(0,-t*.16,Math.min(e,t)*.065),P(0,-t*.16,0,t*.22,"fp3d-sym-strong"),O(0,t*.22,Math.min(e,t)*.045,"fp3d-sym-fill")];case"kitchen_corner":return[A(-e/2,-t/2,e/2,-t*.05),A(-e/2,-t*.05,-e*.05,t/2),P(-e*.05,-t*.05,e/2,-t*.05),P(-e*.05,-t*.05,-e*.05,t/2)];case"kitchen_display":return[A(-e/2,-t/2,e/2,t/2),P(0,-t/2,0,t/2,"fp3d-sym-strong"),P(-e*.38,t*.2,e*.38,t*.2),P(-e*.32,t*.34,e*.32,t*.34,"fp3d-sym-strong")];case"shower_screen":return[P(-e/2,0,e/2,0,"fp3d-sym-strong"),O(e*.34,0,Math.min(e,t)*.25)];case"island":return[P(-e/2,t/2-.3,e/2,t/2-.3)];case"fridge":return[P(-e/2+.06,t/2-.04,e/2-.06,t/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(e,t)*.14;return[O(-e*.22,-t*.2,n),O(e*.22,-t*.2,n*.8),O(-e*.22,t*.2,n*.8),O(e*.22,t*.2,n)]}case"sink":{let n=Math.min(.5,e-.2);return[A(-n/2,-t/2+.1,n/2,t/2-.08),O(0,-t/2+.06,.025,"fp3d-sym-fill")]}case"bathtub":return[A(-e/2+.07,-t/2+.07,e/2-.07,t/2-.07),O(-e/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[P(-e/2,-t/2,e/2,t/2),P(e/2,-t/2,-e/2,t/2),O(0,0,.04)];case"wc":return[A(-e/2,-t/2,e/2,-t/2+Math.min(.18,t*.3),"fp3d-sym-fill"),X(0,t*.1,e*.36,t*.3)];case"washbasin":return[X(0,.03,e*.34,t*.3)];default:return[]}}var Ur=le(ta,na);var ia=["lamp_downlight","lamp_spot","lamp_bollard","lamp_garden","lamp_column","lamp_tv_bars","lamp_orb_table","lamp_portable","lamp_ambient_spot","lamp_cube","lamp_panel_round","lamp_garden_spots","lamp_wall_updown","lamp_panel","lamp_uplight","lamp_ceiling","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip"];function ra(s,e,t){switch(s){case"lamp_downlight":case"lamp_spot":return[O(0,0,Math.min(e,t)*.45,"fp3d-sym-fill"),O(0,0,Math.min(e,t)*1.4)];case"lamp_bollard":case"lamp_garden":return[O(0,0,Math.min(e,t)*.5,"fp3d-sym-fill"),O(0,0,Math.min(e,t)*1.6)];case"lamp_column":return[A(-e*.42,-t*.42,e*.42,t*.42,"fp3d-sym-fill"),A(-e*.18,-t*.18,e*.18,t*.18),P(-e,0,e,0),P(0,-t,0,t)];case"lamp_tv_bars":return[A(-e*.44,-t*.42,-e*.18,t*.42,"fp3d-sym-fill"),A(e*.18,-t*.42,e*.44,t*.42,"fp3d-sym-fill")];case"lamp_orb_table":return[O(0,0,Math.min(e,t)*.47,"fp3d-sym-fill"),O(0,0,Math.min(e,t)*.24)];case"lamp_portable":return[I`<polygon class="fp3d-sym-fill" points=${`${-e*.42},${t*.42} ${e*.42},${t*.42} ${e*.28},${-t*.42} ${-e*.28},${-t*.42}`} />`,A(-e*.13,-t*.14,e*.13,t*.14)];case"lamp_ambient_spot":return[O(0,0,Math.min(e,t)*.47,"fp3d-sym-fill"),A(-e*.26,-t*.26,e*.26,t*.26,"fp3d-sym-strong")];case"lamp_cube":return[A(-e*.46,-t*.46,e*.46,t*.46,"fp3d-sym-fill"),A(-e*.3,-t*.3,e*.3,t*.3)];case"lamp_panel_round":{let n=Math.min(e,t)*.46;return[O(0,0,n,"fp3d-sym-fill"),...Array.from({length:8},(i,r)=>{let o=r*Math.PI/4;return P(Math.cos(o)*n*1.12,Math.sin(o)*n*1.12,Math.cos(o)*n*1.42,Math.sin(o)*n*1.42)})]}case"lamp_garden_spots":return[-.34,0,.34].flatMap(n=>[O(n*e,0,t*.28,"fp3d-sym-fill"),P(n*e,-t*.2,n*e,t*.46)]);case"lamp_wall_updown":return[A(-e/2,-t/2,e/2,-t*.28,"fp3d-sym-fill"),A(-e*.34,-t*.28,e*.34,t*.3),P(-e*.46,t*.42,e*.46,t*.42,"fp3d-sym-strong")];case"lamp_panel":return[A(-e/2+.03,-t/2+.03,e/2-.03,t/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(e,t)/2,i=[O(0,0,n*.9,"fp3d-sym-fill"),O(0,0,n*.3)];if(s==="lamp_ceiling"||s==="lamp_pendant")for(let r=0;r<8;r++){let o=r/8*Math.PI*2;i.push(P(Math.cos(o)*n*1.05,Math.sin(o)*n*1.05,Math.cos(o)*n*1.35,Math.sin(o)*n*1.35))}return i}case"lamp_wall":return[A(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),X(0,.01,e*.4,t*.4)];case"led_strip":return[P(-e/2,0,e/2,0,"fp3d-sym-strong")];default:return[]}}var Gr=le(ia,ra);var oa=["air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","network_cabinet","nas_server","access_point","wall_thermostat","smoke_detector","siren_alarm","electrical_panel","ups_unit","modem_router","heat_pump_outdoor","hot_water_tank","ventilation_fan","humidifier","smart_display","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","temperature_humidity_sensor","video_doorbell","robot_vacuum","robot_mower"];function sa(s,e,t){switch(s){case"air_purifier":return[A(-e/2,-t/2,e/2,t/2),O(0,t*.28,Math.min(e,t)*.1,"fp3d-sym-fill")];case"smart_speaker":return[O(0,0,Math.min(e,t)*.46,"fp3d-sym-fill"),O(0,0,Math.min(e,t)*.3)];case"security_camera":return[A(-e*.28,-t/2,e*.28,-t*.36,"fp3d-sym-fill"),A(-e*.38,-t*.28,e*.38,t*.36),O(0,t*.34,Math.min(e,t)*.12,"fp3d-sym-strong")];case"smart_lock":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),P(-e*.15,t*.18,e*.48,t*.18,"fp3d-sym-strong")];case"smart_curtain":{let n=[P(-e/2,-t*.32,e/2,-t*.32,"fp3d-sym-strong")];for(let i=0;i<=10;i++){let r=-e/2+e*i/10;Math.abs(r)>e*.1&&n.push(P(r,-t*.18,r,t*(i%2?.34:.12)))}return n}case"network_cabinet":{let n=[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill")];for(let i=1;i<6;i++)n.push(P(-e*.34,-t/2+t*i/6,e*.34,-t/2+t*i/6));return n}case"nas_server":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),...[-.27,-.09,.09,.27].map(n=>A(n*e-e*.065,-t*.38,n*e+e*.065,t*.35))];case"access_point":return[O(0,0,Math.min(e,t)*.47,"fp3d-sym-fill"),O(0,0,Math.min(e,t)*.3),P(-e*.16,t*.42,e*.16,t*.42,"fp3d-sym-strong")];case"wall_thermostat":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),A(-e*.36,t*.05,e*.36,t/2,"fp3d-sym-strong")];case"smoke_detector":{let n=Math.min(e,t)*.47;return[O(0,0,n,"fp3d-sym-fill"),O(0,0,n*.72),...Array.from({length:6},(i,r)=>O(Math.cos(r*Math.PI/3)*n*.58,Math.sin(r*Math.PI/3)*n*.58,n*.055))]}case"siren_alarm":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),A(-e*.3,t*.02,e*.3,t/2,"fp3d-sym-strong")];case"electrical_panel":{let n=[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill")];for(let i=0;i<2;i++)for(let r=0;r<4;r++)n.push(A(-e*.36+r*e*.18,-t*.25+i*t*.28,-e*.25+r*e*.18,-t*.08+i*t*.28));return n}case"ups_unit":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),A(-e*.22,t*.08,e*.22,t*.34,"fp3d-sym-strong"),...[-.22,0,.22].map(n=>P(n*e,-t*.35,n*e,-t*.12))];case"modem_router":return[A(-e/2,-t*.3,e/2,t*.35,"fp3d-sym-fill"),P(-e*.35,-t*.3,-e*.46,-t/2,"fp3d-sym-strong"),P(e*.35,-t*.3,e*.46,-t/2,"fp3d-sym-strong"),...[-.22,0,.22].map(n=>O(n*e,t*.18,Math.min(e,t)*.035))];case"heat_pump_outdoor":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),...Array.from({length:5},(n,i)=>P(-e*.4,-t*.24+i*t*.12,e*.18,-t*.24+i*t*.12)),A(e*.31,t*.08,e*.42,t*.28,"fp3d-sym-strong")];case"hot_water_tank":return[O(0,0,Math.min(e,t)*.48,"fp3d-sym-fill"),O(0,t*.34,Math.min(e,t)*.07,"fp3d-sym-strong")];case"ventilation_fan":{let n=Math.min(e,t)*.46;return[A(-e/2,-t/2,e/2,t/2),O(0,0,n,"fp3d-sym-fill"),...Array.from({length:4},(i,r)=>P(Math.cos(r*Math.PI/2)*n*.2,Math.sin(r*Math.PI/2)*n*.2,Math.cos(r*Math.PI/2)*n*.82,Math.sin(r*Math.PI/2)*n*.82))]}case"humidifier":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),A(-e*.34,-t*.3,e*.34,t*.12),P(-e*.35,t*.24,e*.35,t*.24,"fp3d-sym-strong")];case"smart_display":return[A(-e/2,-t*.18,e/2,t*.32,"fp3d-sym-fill"),P(-e*.16,t*.32,e*.16,t/2,"fp3d-sym-strong")];case"wall_switch":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),P(-e*.28,0,e*.28,0,"fp3d-sym-strong")];case"wall_outlet":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),O(-e*.17,0,e*.07),O(e*.17,0,e*.07)];case"smart_plug":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),O(0,0,Math.min(e,t)*.28),P(-e*.24,t*.32,e*.24,t*.32,"fp3d-sym-strong")];case"motion_sensor":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),X(0,t*.08,e*.3,t*.3,"fp3d-sym-strong")];case"contact_sensor":return[A(-e/2,-t/2,e*.12,t/2,"fp3d-sym-fill"),A(e*.24,-t*.36,e/2,t*.36)];case"water_leak_sensor":return[O(0,0,Math.min(e,t)*.47,"fp3d-sym-fill"),X(0,t*.06,e*.13,t*.2,"fp3d-sym-strong")];case"temperature_humidity_sensor":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),A(-e*.34,-t*.25,e*.34,t*.25,"fp3d-sym-strong")];case"video_doorbell":return[A(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),O(0,-t*.22,Math.min(e,t)*.16),O(0,t*.25,Math.min(e,t)*.13,"fp3d-sym-strong")];case"robot_vacuum":return[A(-e*.38,-t/2,e*.38,-t*.17,"fp3d-sym-fill"),A(-e*.22,-t*.17,e*.22,t*.17),O(0,t*.14,Math.min(e,t)*.4)];case"robot_mower":return[A(-e/2,-t/2,e/2,t*.42,"fp3d-sym-fill"),P(-e*.42,-t*.42,-e*.42,t*.28),P(e*.42,-t*.42,e*.42,t*.28),A(-e*.31,-t*.17,e*.31,t*.34),P(-e*.22,t*.34,e*.22,t*.34,"fp3d-sym-strong")];default:return[]}}var jr=le(oa,sa);var Zr=(s,e)=>[O(0,.05,Math.min(s,e)*.3),P(-s/2,-e/2+.1,s/2,-e/2+.1)],aa=(s,e)=>{let t=[A(-s/2,-e*.34,s/2,e*.34,"fp3d-sym-fill")];for(let n=1;n<6;n++)t.push(P(-s/2+s*n/6,-e*.34,-s/2+s*n/6,e*.34));for(let n=1;n<3;n++)t.push(P(-s/2,-e*.34+e*.68*n/3,s/2,-e*.34+e*.68*n/3));return t},qr={dishwasher:(s,e)=>[P(-s/2+.08,e/2-.05,s/2-.08,e/2-.05,"fp3d-sym-strong")],washer:Zr,dryer:Zr,washer_dryer_tower:(s,e)=>[A(-s/2,-e/2,s/2,e/2,"fp3d-sym-fill"),O(0,e*.08,Math.min(s,e)*.27),P(-s/2,-e*.27,s/2,-e*.27,"fp3d-sym-strong")],balcony_solar:aa};var la={...Kr,...Ur,...Br,...Nr,...jr,...Gr,...qr};function Yr(s,e,t){let n=la[s];return n?n(e,t):null}function Xr(s,e,t){let n=Yr(s,e,t);if(n)return n;let i=te(s);return i?ca(i,e,t):v}function ca(s,e,t){return s.symbol?.length?s.symbol.map(n=>n.shape==="rect"?A((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t,n.fill?"fp3d-sym-fill":""):n.shape==="circle"?O(n.x*e,n.z*t,n.r*Math.min(e,t)):P(n.x1*e,n.z1*t,n.x2*e,n.z2*t)):s.parts.filter(n=>n.w<.98||n.d<.98).map(n=>n.shape==="cyl"&&(n.axis??"y")==="y"?O(n.x*e,n.z*t,Math.min(n.w*e,n.d*t)/2):A((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t))}var da=.05,ua=.2,ha=.12;function pa(s){let e=[];return s.forEach((t,n)=>{let i=t.points;if(i.length<3)return;let r=J(i)>=0;for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],d=l[0]-a[0],c=l[1]-a[1],u=Math.hypot(d,c);if(u<.05)continue;let h=[d/u,c/u],p=r?[h[1],-h[0]]:[-h[1],h[0]];(h[1]<-1e-9||Math.abs(h[1])<=1e-9&&h[0]<0)&&(h=[-h[0],-h[1]]);let _=[-h[1],h[0]],f=a[0]*h[0]+a[1]*h[1],m=l[0]*h[0]+l[1]*h[1];e.push({room:n,index:o,dir:h,normal:_,offset:a[0]*_[0]+a[1]*_[1],outside:p[0]*_[0]+p[1]*_[1]>0?1:-1,t0:Math.min(f,m),t1:Math.max(f,m)})}}),e}function Qr(s,e=.6){let t=pa(s),n=t.map((c,u)=>u),i=c=>n[c]===c?c:n[c]=i(n[c]),r=[];for(let c=0;c<t.length;c++)for(let u=c+1;u<t.length;u++){let h=t[c],p=t[u];if(h.room===p.room||Math.abs(h.dir[0]*p.dir[1]-h.dir[1]*p.dir[0])>da||h.outside===p.outside)continue;let _=(p.offset-h.offset)*h.outside;_>e||_<-ha||Math.abs(_)<1e-4||Math.min(h.t1,p.t1)-Math.max(h.t0,p.t0)<ua||(r.push(Math.round(_*1e3)/1e3),n[i(c)]=i(u))}if(!r.length)return{rooms:s.map(c=>({...c,points:c.points.map(u=>[u[0],u[1]])})),gaps:r};let o=new Map;t.forEach((c,u)=>{let h=i(u);if(h===u&&!t.some((_,f)=>f!==u&&i(f)===u))return;let p=o.get(h)??[];p.push(u),o.set(h,p)});let a=s.map(c=>c.points.map(()=>new Map));for(let[c,u]of o){let h=u.reduce((p,_)=>p+t[_].offset,0)/u.length;for(let p of u){let _=t[p],f=h-_.offset,m=[_.normal[0]*f,_.normal[1]*f],y=s[_.room].points.length;a[_.room][_.index].set(c,m),a[_.room][(_.index+1)%y].set(c,m)}}let l=c=>Math.round(c*1e3)/1e3;return{rooms:s.map((c,u)=>({...c,points:c.points.map((h,p)=>{let _=h[0],f=h[1];for(let[m,y]of a[u][p].values())_+=m,f+=y;return[l(_),l(f)]})})),gaps:r}}function Jr(s){let e=s.filter(n=>n>.04).sort((n,i)=>n-i);if(!e.length)return null;let t=e[Math.floor(e.length/2)];return Math.min(.5,Math.max(.08,Math.round(t*100)/100))}var fa=.25,eo=s=>Math.round(s*1e3)/1e3;function ni(s,e,t,n,i){let r=s.rooms.find(o=>o.points.length>=3&&C([e,t],o.points));return!r||C([n,i],r.points)?[n,i]:C([n,t],r.points)?[n,t]:C([e,i],r.points)?[e,i]:[e,t]}function Qt(s,e,t,n=fa){let i=s.rooms.find(d=>d.points.length>=3&&C([e.x,e.z],d.points));if(!i)return null;let r=i.points,o=J(r)>=0?1:-1,a=t/2,l=null;for(let d=0;d<r.length;d++){let c=r[d],u=r[(d+1)%r.length],h=Math.hypot(u[0]-c[0],u[1]-c[1]);if(h<.3)continue;let p=[(u[0]-c[0])/h,(u[1]-c[1])/h],_=[-p[1]*o,p[0]*o],f=(e.x-c[0])*p[0]+(e.z-c[1])*p[1];if(f<0||f>h)continue;let y=s.rooms.some($=>$.id!==i.id&&$.points.some((F,S)=>{let E=$.points[(S+1)%$.points.length],T=Math.abs((F[0]-c[0])*_[0]+(F[1]-c[1])*_[1]),D=Math.abs((E[0]-c[0])*_[0]+(E[1]-c[1])*_[1]);return T<.02&&D<.02}))?a:0,g=(e.x-c[0])*_[0]+(e.z-c[1])*_[1]-y,w=Math.atan2(-_[0],_[1])*180/Math.PI,x=$=>Math.abs((e.rotation-$+540)%360-180),z=[{rotation:w,extent:e.d/2},{rotation:w+90,extent:e.w/2},{rotation:w-90,extent:e.w/2}].reduce(($,F)=>x(F.rotation)<x($.rotation)?F:$);if(x(z.rotation)>50)continue;let R=g-z.extent;Math.abs(R)>n||l&&Math.abs(R)>=Math.abs(l.gap)||(l={x:eo(e.x-_[0]*R),z:eo(e.z-_[1]*R),rotation:(Math.round(z.rotation)%360+360)%360,gap:R})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function _a(s,e,t){let n=t[0]-e[0],i=t[1]-e[1],r=n*n+i*i,o=r?Math.max(0,Math.min(1,((s[0]-e[0])*n+(s[1]-e[1])*i)/r)):0;return Math.hypot(s[0]-e[0]-n*o,s[1]-e[1]-i*o)}function to(s,e,t=.03){return s.every(n=>C(n,e)||e.some((i,r)=>_a(n,i,e[(r+1)%e.length])<=t))}function no(s,e){return e&&s.states[e]?e:Object.keys(s.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var io=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro"],ma=["fridge_smart"];var ro=s=>(s??navigator.language).toLowerCase().startsWith("de");function yt(s){return ro(s)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var ga={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Jt(s,e){let t=ro(s),n=`https://github.com/PATCoder97/neonplan3d/blob/main/docs/${t?"anleitung.md":"manual.md"}`,i=e?ga[e]:void 0,r=i?t?i.de:i.en:"",[,o]=r.split("#");return`${n}${o?`#${o}`:""}`}function ba(s=ir()){let e=new Set(io);for(let t of s)for(let n of t.features??[])(io.includes(n)||ma.includes(n))&&e.add(n);return e}function ce(s,e){return ba(e).has(s)}var oo={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"{n} R\xE4ume aus HA-Bereichen anlegen",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_group_room:"R\xE4ume",tool_group_structure:"Bauk\xF6rper",tool_group_energy:"Energie",tool_group_plan:"Grundriss",tool_group_layout:"Einrichten",tool_group_building:"Geb\xE4ude",tool_group_project:"Projekt",tool_group_actions:"Aktionen",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",tool_covered:"Veranda / \xFCberdachter Bereich",tool_settings:"Konfiguration",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",fan_blades:"Rotorbl\xE4tter",fan_blades_3:"3 Bl\xE4tter",fan_blades_4:"4 Bl\xE4tter",fan_blades_5:"5 Bl\xE4tter",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Im Plan verschieben und skalieren",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_covered:"Ziehen, um eine Veranda oder einen \xFCberdachten Bereich als Raum anzulegen",hint_settings:"Projekt-Einstellungen rechts \xB7 im Plan ziehen, um die Ansicht zu verschieben",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Sichtkegel in 3D zeigen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort stellst du auch Auto Pro ein (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang & Kino)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",media_play_head:"Abspielen",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind in diesem Fork standardm\xE4\xDFig aktiviert.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 schaltet {n} Pro-Funktionen frei",pack_needs_update:"Diese Erweiterung braucht eine neuere NeonPlan-Version \u2013 bitte NeonPlan 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie Pro",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_dot:"Neues im Shop",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"Die integrierten Zusatzfunktionen sind in diesem Fork aktiv. Optionale M\xF6bel-Packs installierst du hier mit deinem Lizenzschl\xFCssel.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",ext_active:"aktiv",ext_get:"Im Shop ansehen",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Optionale M\xF6bel-Packs",ext_teaser_text:"Die integrierten Funktionen sind bereits aktiv. Weitere M\xF6bel findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te \u2013 Gas, Wasser und W\xE4rme folgen als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",auto_pro_teaser:"Mit Auto Pro zeigt das Fahrzeug hier Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, und \u201Eunterwegs\u201C mit dem Standort, wenn es weg ist.",car_hint:"Eine Entit\xE4t des Autos reicht: Die \xFCbrigen findet NeonPlan am selben Ger\xE4t in Home Assistant (Ladestand, Reichweite, Laden, Kabel, Schloss, Klima, Standort). Was es nicht findet, w\xE4hlst du hier; \u201EKeine\u201C schaltet eine Rolle ab.",car_device:"Fahrzeug (eine Entit\xE4t des Autos)",car_soc:"Ladestand (%)",car_range:"Reichweite",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_plugged:"Kabel eingesteckt",car_lock:"Verriegelung",car_climate:"Klima / Vorheizen",car_tracker:"Standort (device_tracker)",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",chk_pro_active:"Energie Pro ist aktiv",chk_pro_get:"Energie Pro freischalten (Leitungen, Module, Hologramm)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",energy_pro_active:"Energie Pro ist aktiv",energy_pro_active_hint:"Leitungen, lebende Module und das Hologramm laufen. Gas, Wasser und W\xE4rme kommen als Updates in diesem Pack.",pro_unlock:"Freischalten",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_name:"Name",outdoor_roof_style:"Dachmaterial",outdoor_roof_solid:"Massiv",outdoor_roof_glass:"Glas / Polycarbonat",outdoor_roof_tile:"Dachziegel",outdoor_railing:"Gel\xE4nder an den freien Kanten",outdoor_yard_enclosure:"Hoher Zaun mit Tor um den Hof",outdoor_columns:"S\xE4ulen vorne",outdoor_column_size:"S\xE4ulenbreite (m)",insert_point:"Ecke danach einf\xFCgen",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",out_canopy:"Hof mit vorgezogenem Wellblechdach",out_veranda:"\xDCberdachte Veranda mit Gel\xE4nder und S\xE4ulen",out_balcony:"Veranda unter dem Hauptdach (ohne eigenes Dach)",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_library:"Bibliothek",furniture_properties:"Eigenschaften",project_settings:"Projekt konfigurieren",project_settings_hint:"Grundeinstellungen, Hintergrund, Startansicht, Favoriten und Sicherungen an einem Ort.",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_altar:"Hausaltar",furn_altar_table:"Altartisch",furn_altar_cabinet:"Altarschrank",furn_altar_wall:"Wandaltar",furn_shoe_cabinet:"Schuhschrank",furn_motorbike:"Motorroller",furn_fan_ceiling:"Deckenventilator",furn_fan_ceiling_light:"Deckenventilator mit Licht",furn_fan_wall:"Wandventilator",furn_fan_floor:"Standventilator",furn_lamp_column:"Lichts\xE4ule",furn_lamp_tv_bars:"Lichtleisten-Paar (TV)",furn_lamp_orb_table:"Kugelleuchte (Tisch)",furn_lamp_portable:"Tragbare Akku-Leuchte",furn_lamp_ambient_spot:"Ambiente-Spot (Tisch)",furn_lamp_cube:"W\xFCrfelleuchte",furn_lamp_panel_round:"Rundes Deckenpanel",furn_lamp_garden_spots:"Gartenspots (3er-Set)",furn_lamp_wall_updown:"Au\xDFenwandleuchte Up & Down",furn_water_heater:"Warmwasserspeicher",furn_drying_rack:"W\xE4schest\xE4nder",furn_shoe_bench:"Schuhbank",furn_room_divider:"Raumteiler",furn_range_hood:"Dunstabzugshaube",furn_microwave:"Mikrowelle",furn_water_purifier:"Wasserspender",furn_air_purifier:"Luftreiniger",furn_smart_speaker:"Smart-Lautsprecher",furn_security_camera:"\xDCberwachungskamera",furn_smart_lock:"Smartes T\xFCrschloss",furn_smart_curtain:"Smarter Vorhang",furn_network_cabinet:"Netzwerkschrank",furn_nas_server:"NAS-Server",furn_access_point:"WLAN-Access-Point (Decke)",furn_wall_thermostat:"Wandthermostat",furn_smoke_detector:"Rauchmelder",furn_siren_alarm:"Sirene mit Blitzlicht",furn_electrical_panel:"Sicherungskasten",furn_ups_unit:"USV-Anlage",furn_modem_router:"Modem/Router",furn_heat_pump_outdoor:"W\xE4rmepumpen-Au\xDFenger\xE4t",furn_hot_water_tank:"Warmwasserspeicher",furn_ventilation_fan:"L\xFCfter",furn_humidifier:"Luftbefeuchter",furn_smart_display:"Smartes Steuerdisplay",furn_wall_switch:"Wandschalter",furn_wall_outlet:"Wandsteckdose",furn_smart_plug:"Smarter Zwischenstecker",furn_motion_sensor:"Bewegungsmelder",furn_contact_sensor:"T\xFCr-/Fensterkontakt",furn_water_leak_sensor:"Wassermelder",furn_temperature_humidity_sensor:"Temperatur-/Feuchtesensor",furn_video_doorbell:"Video-T\xFCrklingel",furn_kitchen_corner:"Eckk\xFCchenschrank",furn_kitchen_display:"LED-Vitrinenschrank",furn_vanity:"Schminktisch",furn_crib:"Babybett",furn_bed_single:"Einzelbett",furn_bed_double:"Doppelbett",furn_sofa_2:"Sofa (2-Sitzer)",furn_sofa_3:"Sofa (3-Sitzer)",furn_sofa_4:"Sofa (4-Sitzer)",furn_sofa_corner_left:"Ecksofa links",furn_sofa_corner_right:"Ecksofa rechts",furn_ottoman:"Sitzpouf",furn_tv_console:"TV-Lowboard",furn_display_cabinet:"Vitrinenschrank",furn_sofa_chesterfield:"Chesterfield-Sofa",furn_sofa_velvet_3:"Samtsofa 3-Sitzer",furn_sofa_modular_5:"Modulsofa 5-teilig",furn_sofa_armless:"Sofa ohne Armlehnen",furn_sofa_chaise:"Sofa mit R\xE9camiere",furn_sofa_u:"U-Sofa",furn_club_chair:"Clubsessel",furn_wingback_chair:"Ohrensessel",furn_rocking_chair:"Schaukelstuhl",furn_chaise_longue:"Chaiselongue",furn_cocktail_chair:"Cocktailsessel",furn_recliner:"Relaxsessel mit Hocker",furn_bean_bag:"Sitzsack",furn_chair_upholstered:"Polsterstuhl",furn_chair_shell:"Schalenstuhl",furn_lowboard_120:"Lowboard 120",furn_lowboard_160:"Lowboard 160",furn_lowboard_200:"Lowboard 200",furn_highboard:"Highboard",furn_chest_drawers_3:"Kommode mit 3 Schubladen",furn_bookshelf_wide:"Breites B\xFCcherregal",furn_cube_shelf_2x2:"W\xFCrfelregal 2\xD72",furn_cube_shelf_4x2:"W\xFCrfelregal 4\xD72",furn_cube_shelf_4x4:"W\xFCrfelregal 4\xD74",furn_room_divider_shelf:"Raumteilerregal",furn_floating_shelf:"Wandboard",furn_tv_stand:"TV auf Standfu\xDF",furn_wood_stove:"Kaminofen",furn_table_120:"Esstisch 120 \xD7 90",furn_table_160:"Esstisch 160 \xD7 90",furn_table_200:"Esstisch 200 \xD7 90",furn_table_solid_220:"Massivholztisch 220 \xD7 100",furn_bench_dining_160:"Essbank 160",furn_sofa_l:"Ecksofa",furn_sofa_bed:"Schlafsofa",furn_shower_screen:"Duschabtrennung",furn_hammock:"H\xE4ngematte",furn_stone_table_set:"Steintisch mit Hockern",furn_planter_large:"Gro\xDFer Pflanzk\xFCbel",furn_water_tank:"Wassertank",furn_gate:"Tor",furn_fence:"Zaun",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_landing:"U-Treppe mit Zwischenpodest",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_air_conditioner:"Klimaanlage (Wandger\xE4t)",furn_water_pump:"Au\xDFen-Wasserpumpe",furn_robot_vacuum:"Saugroboter",furn_robot_mower:"M\xE4hroboter mit Garage",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_entity_fan:"Ventilator oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Klima-Entit\xE4t",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_console_table:"Konsolentisch",furn_coffee_table_round:"Runder Couchtisch",furn_coffee_table_glass:"Glas-Couchtisch",furn_nesting_tables:"Satztische",furn_side_table_round:"Runder Beistelltisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_washer_dryer_tower:"Wasch-Trockner-Turm",furn_balcony_solar:"Balkonkraftwerk",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_climate:"Heizen & K\xFChlen",furn_group_outdoor:"Au\xDFenbereich",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe und zoome das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stairs_landing_hint:"Zwei parallele L\xE4ufe mit einem Zwischenpodest: links nach hinten hinauf, um 180\xB0 wenden und rechts nach vorn bis zur oberen Etage. Die Treppe \xF6ffnet den Boden dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},so={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add {n} rooms from HA areas",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_group_room:"Rooms",tool_group_structure:"Structure",tool_group_energy:"Energy",tool_group_plan:"Floor plan",tool_group_layout:"Layout",tool_group_building:"Building",tool_group_project:"Project",tool_group_actions:"Actions",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",tool_covered:"Veranda / covered area",tool_settings:"Configuration",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",fan_blades:"Blades",fan_blades_3:"3 blades",fan_blades_4:"4 blades",fan_blades_5:"5 blades",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move and scale in the plan",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_settings:"Project settings on the right \xB7 drag the plan to pan the view",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_covered:"Drag to create a veranda or covered area that behaves like a room",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Show the field of view in 3D",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are enabled by default in this fork.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 unlocks {n} Pro features",pack_needs_update:"This add-on needs a newer NeonPlan version \u2013 please update NeonPlan 3D (HACS) and reload the page.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_dot:"New in the shop",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"The bundled add-on features are active in this fork. Install optional furniture packs here with your licence key.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",ext_active:"active",ext_get:"See in the shop",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"Optional furniture packs",ext_teaser_text:'The bundled features are already active. Find additional furniture under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices \u2013 gas, water and heat follow as updates",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',auto_pro_teaser:'With Car Pro the vehicle here shows charge, range, charging, lock and climate from its integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, and "away" with its location when it is out.',car_hint:'One entity of the car is enough: NeonPlan finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",chk_pro_active:"Energy Pro is active",chk_pro_get:"Unlock Energy Pro (cables, modules, hologram)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",energy_pro_active:"Energy Pro is active",energy_pro_active_hint:"Cables, living modules and the hologram are running. Gas, water and heat come as updates of this pack.",pro_unlock:"Unlock",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_name:"Name",outdoor_roof_style:"Roof material",outdoor_roof_solid:"Solid",outdoor_roof_glass:"Glass / polycarbonate",outdoor_roof_tile:"Roof tiles",outdoor_railing:"Railing along free edges",outdoor_yard_enclosure:"High fence and gate around the yard",outdoor_columns:"Front columns",outdoor_column_size:"Column width (m)",insert_point:"Insert a corner after this one",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_canopy:"Yard with projecting corrugated metal roof",out_veranda:"Covered veranda with railing and columns",out_balcony:"Veranda under the main roof (no separate roof)",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_library:"Library",furniture_properties:"Properties",project_settings:"Configure project",project_settings_hint:"General settings, background, start view, favourites and backups in one place.",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_altar:"Standing altar",furn_altar_table:"Altar table",furn_altar_cabinet:"Altar cabinet",furn_altar_wall:"Wall-mounted altar",furn_shoe_cabinet:"Shoe cabinet",furn_motorbike:"Motorbike",furn_fan_ceiling:"Ceiling fan",furn_fan_ceiling_light:"Ceiling fan with light",furn_fan_wall:"Wall-mounted fan",furn_fan_floor:"Standing fan",furn_lamp_column:"Light column",furn_lamp_tv_bars:"TV light bar pair",furn_lamp_orb_table:"Orb table lamp",furn_lamp_portable:"Portable battery lamp",furn_lamp_ambient_spot:"Ambient table spot",furn_lamp_cube:"Cube lamp",furn_lamp_panel_round:"Round ceiling panel",furn_lamp_garden_spots:"Garden spots (set of 3)",furn_lamp_wall_updown:"Up/down outdoor wall light",furn_water_heater:"Water heater",furn_drying_rack:"Drying rack",furn_shoe_bench:"Shoe bench",furn_room_divider:"Room divider",furn_range_hood:"Range hood",furn_microwave:"Microwave",furn_water_purifier:"Water purifier",furn_air_purifier:"Air purifier",furn_smart_speaker:"Smart speaker",furn_security_camera:"Security camera",furn_smart_lock:"Smart door lock",furn_smart_curtain:"Smart curtain",furn_network_cabinet:"Network cabinet",furn_nas_server:"NAS server",furn_access_point:"Ceiling Wi-Fi access point",furn_wall_thermostat:"Wall thermostat",furn_smoke_detector:"Smoke detector",furn_siren_alarm:"Siren with strobe light",furn_electrical_panel:"Electrical panel",furn_ups_unit:"UPS unit",furn_modem_router:"Modem/router",furn_heat_pump_outdoor:"Heat pump outdoor unit",furn_hot_water_tank:"Hot-water storage tank",furn_ventilation_fan:"Ventilation fan",furn_humidifier:"Humidifier",furn_smart_display:"Smart control display",furn_wall_switch:"Wall switch",furn_wall_outlet:"Wall outlet",furn_smart_plug:"Smart plug",furn_motion_sensor:"Motion sensor",furn_contact_sensor:"Door/window contact sensor",furn_water_leak_sensor:"Water leak sensor",furn_temperature_humidity_sensor:"Temperature/humidity sensor",furn_video_doorbell:"Video doorbell",furn_kitchen_corner:"Corner kitchen unit",furn_kitchen_display:"LED display cabinet",furn_vanity:"Dressing table",furn_crib:"Baby crib",furn_bed_single:"Single bed",furn_bed_double:"Double bed",furn_sofa_2:"2-seat sofa",furn_sofa_3:"3-seat sofa",furn_sofa_4:"4-seat sofa",furn_sofa_corner_left:"Left corner sofa",furn_sofa_corner_right:"Right corner sofa",furn_ottoman:"Pouf ottoman",furn_tv_console:"TV console",furn_display_cabinet:"Display cabinet",furn_sofa_chesterfield:"Chesterfield sofa",furn_sofa_velvet_3:"Velvet 3-seater sofa",furn_sofa_modular_5:"Modular sofa (5 parts)",furn_sofa_armless:"Armless sofa",furn_sofa_chaise:"Sofa with chaise",furn_sofa_u:"U-shaped sofa",furn_club_chair:"Club chair",furn_wingback_chair:"Wingback chair",furn_rocking_chair:"Rocking chair",furn_chaise_longue:"Chaise longue",furn_cocktail_chair:"Cocktail chair",furn_recliner:"Recliner with footstool",furn_bean_bag:"Bean bag",furn_chair_upholstered:"Upholstered chair",furn_chair_shell:"Shell chair",furn_lowboard_120:"Lowboard 120",furn_lowboard_160:"Lowboard 160",furn_lowboard_200:"Lowboard 200",furn_highboard:"Highboard",furn_chest_drawers_3:"Chest of 3 drawers",furn_bookshelf_wide:"Wide bookshelf",furn_cube_shelf_2x2:"Cube shelf 2\xD72",furn_cube_shelf_4x2:"Cube shelf 4\xD72",furn_cube_shelf_4x4:"Cube shelf 4\xD74",furn_room_divider_shelf:"Room divider shelf",furn_floating_shelf:"Floating wall shelf",furn_tv_stand:"TV on a stand",furn_wood_stove:"Wood stove",furn_table_120:"Dining table 120 \xD7 90",furn_table_160:"Dining table 160 \xD7 90",furn_table_200:"Dining table 200 \xD7 90",furn_table_solid_220:"Solid wood dining table 220 \xD7 100",furn_bench_dining_160:"Dining bench 160",furn_sofa_l:"L-shaped sofa",furn_sofa_bed:"Sofa bed",furn_shower_screen:"Shower screen",furn_hammock:"Hammock",furn_stone_table_set:"Stone table set",furn_planter_large:"Large planter",furn_water_tank:"Water tank",furn_gate:"Gate",furn_fence:"Fence",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_landing:"U-shaped stairs with landing",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_air_conditioner:"Wall-mounted air conditioner",furn_water_pump:"Outdoor water pump",furn_robot_vacuum:"Robot vacuum",furn_robot_mower:"Robot mower with garage",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_entity_fan:"Fan or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Climate entity",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_console_table:"Console table",furn_coffee_table_round:"Round coffee table",furn_coffee_table_glass:"Glass coffee table",furn_nesting_tables:"Nesting tables",furn_side_table_round:"Round side table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_washer_dryer_tower:"Washer-dryer tower",furn_balcony_solar:"Balcony solar kit",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_climate:"Heating & cooling",furn_group_outdoor:"Outdoor",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn and zoom the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stairs_landing_hint:"Two parallel flights with a half-height landing: up the left side towards the back, turn 180\xB0, then up the right side towards the front. The stair opens the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},ya=["fr","es","nl","it","hu","vi"],vt=new Map,ii=new Map;function ri(s){let e=(s??navigator.language).toLowerCase().slice(0,2);return ya.includes(e)?e:null}function ao(s){let e=ri(s);return!e||vt.has(e)}function lo(s){let e=ri(s);if(!e||vt.has(e))return Promise.resolve();let t=ii.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=da0c3b9eac8b`,import.meta.url).href;t=fetch(n).then(i=>i.ok?i.json():{}).then(i=>{vt.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{vt.set(e,{})}).finally(()=>ii.delete(e)),ii.set(e,t)}return t}function Fe(s,e,t={}){let n=s?.language??navigator.language,i=n.startsWith("de")?null:ri(n),o=(n.startsWith("de")?oo:i&&vt.get(i)||so)[e]??so[e]??oo[e]??e;for(let[a,l]of Object.entries(t))o=o.replace(`{${a}}`,String(l));return o}function j(s,e,t=2){return e.toLocaleString(s?.language??void 0,{maximumFractionDigits:t})}var va={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function wt(s){return va[s]}function co(s,e){let t=`${e} ${String(s.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function uo(s,e){let t=s.entities?.[e]?.device_id;return t?Object.values(s.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(s.states[n]?.attributes.device_class))):[]}var ee=(s,e)=>[s[0]-e[0],s[1]-e[1]],Ie=(s,e)=>[s[0]+e[0],s[1]+e[1]],ke=(s,e)=>[s[0]*e,s[1]*e],xt=(s,e)=>s[0]*e[0]+s[1]*e[1],kt=(s,e)=>s[0]*e[1]-s[1]*e[0],$t=s=>Math.hypot(s[0],s[1]),$e=s=>{let e=$t(s)||1;return[s[0]/e,s[1]/e]},ho=s=>[-s[1],s[0]],po=s=>[s[1],-s[0]];function oe(s,e,t=[]){let n=e.eps??.005,i=[],r=s.filter($=>!Ve($)),o=t.filter($=>Math.hypot($.b[0]-$.a[0],$.b[1]-$.a[1])>.05),a=[],l=$=>{for(let F=0;F<a.length;F++)if(Math.abs(a[F][0]-$[0])<=n&&Math.abs(a[F][1]-$[1])<=n)return F;return a.push([$[0],$[1]]),a.length-1},d=[];for(let $ of r){let F=$.points;if(F.length<3||Math.abs(J(F))<1e-6)continue;let S=J(F)>0,E=F.map(l);for(let T=0;T<F.length;T++){let D=E[T],L=E[(T+1)%F.length];D!==L&&d.push(S?{u:D,v:L,room:$.id,edge:T,forward:!0}:{u:L,v:D,room:$.id,edge:T,forward:!1})}}let c=o.map($=>[l($.a),l($.b)]),u=new Set;for(let $ of r){let F=$.points;F.length<3||($.wall_splits??[]).forEach((S,E)=>{if(!S||E>=F.length)return;let T=F[E],D=ee(F[(E+1)%F.length],T),L=$t(D);for(let H of S)H>n&&H<L-n&&u.add(l(Ie(T,ke(D,H/L))))})}let h=[];for(let $ of d){let F=a[$.u],S=a[$.v],E=ee(S,F),T=$t(E),D=ke(E,1/T),L=[];for(let W=0;W<a.length;W++){if(W===$.u||W===$.v)continue;let V=ee(a[W],F),N=xt(V,D);N<=n||N>=T-n||Math.abs(kt(D,V))<=n&&L.push({t:N,id:W})}L.sort((W,V)=>W.t-V.t);let H=[{t:0,id:$.u},...L,{t:T,id:$.v}];for(let W=0;W+1<H.length;W++){let V=H[W],N=H[W+1],K=$.forward?V.t:T-N.t,G=$.forward?N.t:T-V.t;h.push({u:V.id,v:N.id,room:$.room,edge:$.edge,t0:K,t1:G})}}let p=new Map;for(let $ of h){let F=$.u<$.v?`${$.u}-${$.v}`:`${$.v}-${$.u}`,S=p.get(F);S||p.set(F,S=[]),S.push($)}let _=$=>({room_id:$.room,edge:$.edge,t0:$.t0,t1:$.t1}),f=new Map;for(let $ of h){let F=`${$.room}:${$.edge}`;f.set(F,[...f.get(F)??[],$.t0].sort((S,E)=>S-E))}let m=$=>{let F=r.find(E=>E.id===$.room)?.wall_heights?.[$.edge];if(!Array.isArray(F))return F;let S=f.get(`${$.room}:${$.edge}`)??[];return F[S.indexOf($.t0)]??null},y=$=>{let F=$.map(m).filter(S=>typeof S=="number"&&S>0);return F.length?Math.min(...F):void 0},g=$=>{let F=$.map(S=>r.find(E=>E.id===S.room)?.wall_thickness?.[S.edge]).filter(S=>typeof S=="number"&&S>0);return F.length?Math.max(...F):void 0},w=$=>$.some(F=>m(F)===0),x=[],k=[];for(let $ of p.values()){let F=$[0],S=$.find(E=>E!==F&&E.u===F.v&&E.v===F.u&&E.room!==F.room);for(let E of $)E!==F&&E!==S&&E.room!==F.room&&i.push(`overlap:${F.room}:${E.room}`);if(w(S?[F,S]:[F])){S&&x.push([F.room,S.room]);continue}if(S){let E=g([F,S])??e.interior;k.push({a:F.u,b:F.v,left:E/2,right:E/2,exterior:!1,roomLeft:F.room,roomRight:S.room,sources:[_(F),_(S)],height:y([F,S])})}else k.push({a:F.u,b:F.v,left:0,right:g([F])??e.exterior,exterior:!0,roomLeft:F.room,roomRight:null,sources:[_(F)],height:y([F])})}o.forEach(($,F)=>{let[S,E]=c[F];if(S===E)return;let T=[($.a[0]+$.b[0])/2,($.a[1]+$.b[1])/2],D=s.find(W=>W.points.length>=3&&C(T,W.points))?.id??null,L=($.thickness??e.interior)/2,H=typeof $.height=="number"&&$.height>0?$.height:void 0;k.push({free:$.id,a:S,b:E,left:L,right:L,exterior:!1,roomLeft:D,roomRight:D,sources:[],height:H})}),k=ka(k,a,u);let z=xa(k,a);return{walls:k.map(($,F)=>{let S=a[$.a],E=a[$.b],T=z.get(`${F}:a`),D=z.get(`${F}:b`),L=Sa([T.right,D.left,E,D.right,T.left,S],1e-6);return{id:wa(S,E),a:[S[0],S[1]],b:[E[0],E[1]],left:$.left,right:$.right,exterior:$.exterior,roomLeft:$.roomLeft,roomRight:$.roomRight,sources:$.sources,footprint:L,...$.free?{free:$.free}:{},...$.height!==void 0?{height:$.height}:{}}}),warnings:[...new Set(i)],open:x}}function wa(s,e){let t=r=>Math.round(r*100),[n,i]=s[0]<e[0]||s[0]===e[0]&&s[1]<=e[1]?[s,e]:[e,s];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function fo(s){return{...s,a:s.b,b:s.a,left:s.right,right:s.left,roomLeft:s.roomRight,roomRight:s.roomLeft}}function ka(s,e,t=new Set){let n=s.slice(),i=!0;for(;i;){i=!1;let r=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let d=r.get(l);d||r.set(l,d=[]),d.push(a)}});for(let[o,a]of r){if(a.length!==2||t.has(o))continue;let l=n[a[0]],d=n[a[1]];if(l.b!==o&&(l=fo(l)),d.a!==o&&(d=fo(d)),l.a===d.b)continue;let c=$e(ee(e[l.b],e[l.a])),u=$e(ee(e[d.b],e[d.a]));if(Math.abs(kt(c,u))>1e-6||xt(c,u)<=0||l.free||d.free||l.height!==d.height||l.exterior!==d.exterior||l.roomLeft!==d.roomLeft||l.roomRight!==d.roomRight||Math.abs(l.left-d.left)>1e-9||Math.abs(l.right-d.right)>1e-9)continue;let h={...l,b:d.b,sources:$a(l.sources,d.sources)},p=n.filter((_,f)=>f!==a[0]&&f!==a[1]);p.push(h),n.length=0,n.push(...p),i=!0;break}}return n}function $a(s,e){let t=s.map(n=>({...n}));for(let n of e){let i=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function xa(s,e){let t=new Map;s.forEach((i,r)=>{let o=$e(ee(e[i.b],e[i.a])),a=[[i.a,{key:`${r}:a`,d:o,left:i.left,right:i.right,angle:Math.atan2(o[1],o[0])}],[i.b,{key:`${r}:b`,d:ke(o,-1),left:i.right,right:i.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,d]of a){let c=t.get(l);c||t.set(l,c=[]),c.push(d)}});let n=new Map;for(let[i,r]of t){let o=e[i];r.sort((d,c)=>d.angle-c.angle);let a=d=>({left:Ie(o,ke(ho(d.d),d.left)),right:Ie(o,ke(po(d.d),d.right))});for(let d of r)n.set(d.key,a(d));if(r.length<2)continue;let l=4*Math.max(...r.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<r.length;d++){let c=r[d],u=r[(d+1)%r.length],h=Ie(o,ke(ho(c.d),c.left)),p=Ie(o,ke(po(u.d),u.right)),_=kt(c.d,u.d);if(Math.abs(_)<1e-4)continue;let f=kt(ee(p,h),u.d)/_,m=Ie(h,ke(c.d,f));$t(ee(m,o))>l||(n.get(c.key).left=m,n.get(u.key).right=m)}}return n}function Sa(s,e){let t=s.filter((i,r)=>$t(ee(i,s[(r+1)%s.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let r=t[(i+t.length-1)%t.length],o=t[i],a=t[(i+1)%t.length],l=ee(o,r),d=ee(a,o);if(Math.abs(kt($e(l),$e(d)))<1e-7&&xt(l,d)>0){t=t.filter((c,u)=>u!==i),n=!0;break}}}return t}function Xe(s,e,t){let n=s.points[e],i=s.points[(e+1)%s.points.length],r=$e(ee(i,n));return Ie(n,ke(r,t))}function Qe(s,e,t){if(s.wall){let i=t.find(a=>a.id===s.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let r=$e(ee(i.b,i.a));return{room:{id:s.room_id,name:"",area_id:null,points:[i.a,i.b,Ie(i.a,[-r[1],r[0]])]},edge:0}}let n=e.find(i=>i.id===s.room_id);return n&&s.edge<n.points.length?{room:n,edge:s.edge}:null}function oi(s,e,t){if(!e.wall)return Ma(s,t.room,t.edge,e.offset);let n=s.find(r=>r.free===e.wall);if(!n)return null;let i=Xe(t.room,0,e.offset);return{wall:n,s:xt(ee(i,n.a),$e(ee(n.b,n.a)))}}function Ma(s,e,t,n){for(let i of s){if(!i.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Xe(e,t,n);return{wall:i,s:xt(ee(o,i.a),$e(ee(i.b,i.a)))}}return null}var xe=Math.PI/180;function he(s){let e=Math.min(s.x0,s.x1),t=Math.max(s.x0,s.x1),n=Math.min(s.z0,s.z1),i=Math.max(s.z0,s.z1);return s.axis==="x"?{u0:e,u1:t,w:i-n,at:(r,o)=>[r,s.flip?i-o:n+o]}:{u0:n,u1:i,w:t-e,at:(r,o)=>[s.flip?t-o:e+o,r]}}function Pe(s){let e=he(s).w,t=s.eave_a,n=s.eave_b,i=Math.tan(Math.min(80,Math.max(0,s.pitch_a))*xe),r=Math.tan(Math.min(80,Math.max(0,s.pitch_b))*xe);if(s.shape==="flat"||s.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(s.shape==="pent")return{vr:e,rh:t+e*i,y:l=>t+l*i};if(s.shape==="mansard"){let l=bo(e,t,n,i,r);return{vr:l.vr,rh:l.rh,y:l.y}}let o=i+r>1e-6?Math.min(e,Math.max(0,(n-t+e*r)/(i+r))):e/2,a=t+o*i;return{vr:o,rh:a,y:l=>l<=o?t+l*i:n+(e-l)*r}}var Ea=.14;function mo(s,e,t){let n=[];for(let i of s.settings.roof.sections??[]){if(i.open||i.shape==="flat"||i.shape==="parapet"||i.shape==="mansard")continue;let r=he(i),o=Pe(i),a=e+t+Ea,l=[],d=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*xe),c=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*xe);d>1e-6&&l.push((a-i.eave_a)/d),i.shape==="gable"&&c>1e-6&&l.push(r.w-(a-i.eave_b)/c);for(let u of l)u<=.01||u>=r.w-.01||i.shape==="gable"&&Math.abs(o.y(u)-a)>1e-6||n.push([r.at(r.u0,u),r.at(r.u1,u)])}return n}function za(s,e){let t=s.length;if(t<3||Math.abs(e)<1e-9)return s.map(r=>[r[0],r[1]]);let n=fe(s)>=0?1:-1,i=[];for(let r=0;r<t;r++){let o=s[(r+t-1)%t],a=s[r],l=s[(r+1)%t],d=_o([a[0]-o[0],a[1]-o[1]]),c=_o([l[0]-a[0],l[1]-a[1]]),u=[d[1]*n,-d[0]*n],h=[c[1]*n,-c[0]*n],p=u[0]+h[0],_=u[1]+h[1],f=Math.hypot(p,_);if(f<1e-6){i.push([a[0]+u[0]*e,a[1]+u[1]*e]);continue}let m=(p*u[0]+_*u[1])/f,y=Math.min(4,1/Math.max(.25,m));i.push([a[0]+p/f*e*y,a[1]+_/f*e*y])}return i}function _o(s){let e=Math.hypot(s[0],s[1])||1;return[s[0]/e,s[1]/e]}function si(s){let e=s.map(n=>n[0]),t=s.map(n=>n[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}function go(s,e,t,n){let i=oe(s,{exterior:t,interior:n},e).walls.filter(u=>u.exterior&&!u.free);if(!i.length)return null;let r=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,o=new Map,a=i.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let h of[u.a,u.b])o.set(r(h),[...o.get(r(h))??[],u]);let l=new Set,d=null;for(let u of a){if(l.has(u))continue;l.add(u);let h=[u.a,u.b],p=u.b;for(;;){let _=(o.get(r(p))??[]).find(f=>!l.has(f));if(!_||(l.add(_),p=r(_.a)===r(p)?_.b:_.a,r(p)===r(h[0])))break;h.push(p)}h.length>=3&&r(p)===r(h[0])&&(!d||Math.abs(fe(h))>Math.abs(fe(d)))&&(d=h)}if(!d)return null;let c=[];for(let u=0;u<d.length;u++){let h=d[(u+d.length-1)%d.length],p=d[u],_=d[(u+1)%d.length],f=(p[0]-h[0])*(_[1]-p[1])-(p[1]-h[1])*(_[0]-p[0]);Math.abs(f)>1e-6&&c.push(p)}return c.length>=3?za(c,t):null}var St=Math.tan(30*xe);function bo(s,e,t,n,i){let r=Math.min(s*.3,n>1e-6?2.4/n:s*.3),o=Math.min(s*.3,i>1e-6?2.4/i:s*.3),a=e+r*n,l=t+o*i,d=Math.min(s-o,Math.max(r,(l-a+St*(s-o+r))/(2*St))),c=a+(d-r)*St;return{vla:r,vlb:o,yla:a,ylb:l,vr:d,rh:c,y:h=>h<=r?e+h*n:h<=d?a+(h-r)*St:h<=s-o?l+(s-o-h)*St:t+(s-h)*i}}function ai(s,e){let t=he(s),n=Pe(s),i=t.w,r=Math.max(0,e.a),o=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=(g,w)=>[g,w,n.y(w)],c=d(a,-r),u=d(l,-r),h=d(l,i+o),p=d(a,i+o),_=Math.tan(Math.min(80,Math.max(0,s.pitch_a))*xe),f=Math.tan(Math.min(80,Math.max(0,s.pitch_b))*xe);if(s.shape==="pent"){let g=[c,u,h,p];return{faces:[g],rim:g,ridges:[[h,p]],gable:[[0,n.y(0)],[i,n.y(i)]]}}if(s.shape==="hip"||s.shape==="pyramid"){let g=s.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,i-n.vr)||i/2),w=[t.u0+g,n.vr,n.rh],x=[t.u1-g,n.vr,n.rh],k=s.shape==="pyramid"?[[c,u,w],[u,h,w],[h,p,w],[p,c,w]]:[[c,u,x,w],[w,x,h,p],[p,c,w],[u,h,x]],z=s.shape==="pyramid"?[[c,w],[p,w],[u,w],[h,w]]:[[w,x],[c,w],[p,w],[u,x],[h,x]];return{faces:k,rim:[c,u,h,p],ridges:z,gable:null}}if(s.shape==="halfhip"){let g=Math.min(n.y(0),n.y(i)),w=g+(n.rh-g)*.55,x=_>1e-6?Math.min(n.vr,(w-s.eave_a)/_):n.vr,k=f>1e-6?Math.max(n.vr,i-(w-s.eave_b)/f):n.vr,z=Math.min((t.u1-t.u0)/2-.1,(n.rh-w)/Math.max(.2,_)),R=[t.u0+z,n.vr,n.rh],$=[t.u1-z,n.vr,n.rh],F=[a,x,w],S=[a,k,w],E=[l,x,w],T=[l,k,w];return{faces:[[c,u,E,$,R,F],[R,$,T,h,p,S],[S,F,R],[E,T,$]],rim:[c,u,E,T,h,p,S,F],ridges:[[R,$],[F,R],[S,R],[E,$],[T,$]],gable:[[0,n.y(0)],[x,w],[k,w],[i,n.y(i)]]}}if(s.shape==="mansard"){let g=bo(i,s.eave_a,s.eave_b,_,f),w=[a,g.vla,g.yla],x=[l,g.vla,g.yla],k=[a,i-g.vlb,g.ylb],z=[l,i-g.vlb,g.ylb],R=[a,g.vr,g.rh],$=[l,g.vr,g.rh];return{faces:[[c,u,x,w],[w,x,$,R],[R,$,z,k],[k,z,h,p]],rim:[c,u,x,$,z,h,p,k,R,w],ridges:[[R,$],[w,x],[k,z]],gable:[[0,n.y(0)],[g.vla,g.yla],[g.vr,g.rh],[i-g.vlb,g.ylb],[i,n.y(i)]]}}let m=[a,n.vr,n.rh],y=[l,n.vr,n.rh];return{faces:[[c,u,y,m],[m,y,h,p]],rim:[c,u,y,h,p,m],ridges:[[m,y]],gable:[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]]}}function Ra(s,e,t){let n=null;for(let i of s.faces){if(!C([e,t],i.map(g=>[g[0],g[1]])))continue;let[r,o]=i,a=i.slice(2).find(g=>Math.abs((o[0]-r[0])*(g[1]-r[1])-(o[1]-r[1])*(g[0]-r[0]))>1e-9);if(!a)continue;let l=o[0]-r[0],d=o[2]-r[2],c=o[1]-r[1],u=a[0]-r[0],h=a[2]-r[2],p=a[1]-r[1],_=d*p-c*h,f=c*u-l*p,m=l*h-d*u;if(Math.abs(f)<1e-9)continue;let y=r[2]-(_*(e-r[0])+m*(t-r[1]))/f;n=n===null?y:Math.min(n,y)}return n}function Aa(s,e,t){let n=Math.min(s.x0,s.x1),i=Math.max(s.x0,s.x1),r=Math.min(s.z0,s.z1),o=Math.max(s.z0,s.z1);return s.axis==="x"?[e,s.flip?o-t:t-r]:[t,s.flip?i-e:e-n]}function Fa(s){return{x0:Math.min(s.x0,s.x1),x1:Math.max(s.x0,s.x1),z0:Math.min(s.z0,s.z1),z1:Math.max(s.z0,s.z1)}}function yo(s,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,i=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),r=null;for(let o of s){if(o===e||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||i(o)<i(e)*1.5)continue;let a=Fa(o);t<a.x0||t>a.x1||n<a.z0||n>a.z1||(!r||i(o)<i(r))&&(r=o)}return r}function vo(s,e,t,n){let i=he(s),r=Pe(s),o=2,a=Math.max(i.u0+.3,Math.min(i.u1-o-.3,(n??(i.u0+i.u1)/2)-o/2)),l=e==="a"?s.eave_a:s.eave_b,d=e==="a"?s.pitch_a:s.pitch_b,c=l+1.4,u=o/2*Math.tan(35*xe),h=c+u,p=Math.max(.8,Math.min(i.w/2-.2,(h-l)/Math.max(.15,Math.tan(Math.min(80,d)*xe)))),_=e==="a"?0:i.w-p,f=e==="a"?p:i.w,m=i.at(a,_),y=i.at(a+o,f);return{id:t,x0:Math.round(Math.min(m[0],y[0])*100)/100,z0:Math.round(Math.min(m[1],y[1])*100)/100,x1:Math.round(Math.max(m[0],y[0])*100)/100,z1:Math.round(Math.max(m[1],y[1])*100)/100,shape:"gable",axis:s.axis==="x"?"z":"x",eave_a:Math.round(c*100)/100,eave_b:Math.round(c*100)/100,pitch_a:35,pitch_b:35,base:Math.round(r.y(e==="a"?0:i.w)*100)/100,overhang:.15,dormer:!0}}function wo(s,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=he(e),n=Pe(e).rh,i=ai(s,{u0:0,u1:0,a:0,b:0}),r=Pe(s),o=_=>{let[f,m]=t.at(_,t.w/2),[y,g]=Aa(s,f,m);return Ra(i,y,g)??r.y(g)},a=o(t.u0)<=o(t.u1),l=a?t.u0:t.u1,d=a?t.u1:t.u0,c=a?1:-1,u=Math.abs(d-l),h=d;for(let _=.5;_<u;_+=.05)if(o(l+c*_)>=n-.02){h=l+c*_;break}if(Math.abs(h-d)<.05)return e;let p={...e};return e.axis==="x"?d===t.u1?p.x1=h:p.x0=h:d===t.u1?p.z1=h:p.z0=h,p}function ko(s,e,t){let n=he(e),i=s.floors.flatMap(d=>d.rooms.filter(c=>c.points.length>=3&&d.elevation+d.height>e.base+.05)),r=d=>d.some(c=>i.some(u=>C(c,u.points))),o=.35,a=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),l=[.15,.5,.85].map(d=>n.w*d);return{a:r(a.map(d=>n.at(d,-o)))?0:t,b:r(a.map(d=>n.at(d,n.w+o)))?0:t,u0:r(l.map(d=>n.at(n.u0-o,d)))?0:t,u1:r(l.map(d=>n.at(n.u1+o,d)))?0:t}}function $o(s,e,t,n,i){let r=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])r.push([e+(n-e)*a,t+(i-t)*l]);let o=s.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&r.some(d=>C(d,l.points)))).map(a=>a.elevation+a.height);return o.length?Math.max(...o):null}function xo(s,e){let t=s.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}function en(s){return Pe(s).rh}function So(s,e=t=>`roof_${t+1}`){let t=s.settings.roof?.pitch??35,n=s.settings.wall_exterior,i=s.floors.filter(l=>l.rooms.some(d=>d.points.length>=3)).sort((l,d)=>d.elevation-l.elevation),r=[],o=[],a=l=>Math.round(l*1e3)/1e3;for(let l of i){let d=l.rooms.filter(w=>w.points.length>=3),c=[...new Set(d.flatMap(w=>w.points.map(x=>a(x[0]))))].sort((w,x)=>w-x),u=[...new Set(d.flatMap(w=>w.points.map(x=>a(x[1]))))].sort((w,x)=>w-x),h=c.length-1,p=u.length-1,_=(w,x)=>w.some(k=>C(x,k.points)),f=[];for(let w=0;w<p;w++){f.push([]);for(let x=0;x<h;x++){let k=[(c[x]+c[x+1])/2,(u[w]+u[w+1])/2];f[w].push(_(d,k)&&!_(o,k))}}let m=f.map(w=>w.map(()=>!1)),y=(w,x)=>f[x][w]&&!m[x][w],g=l.elevation+l.height;for(let w=0;w<p;w++)for(let x=0;x<h;x++){if(!y(x,w))continue;let k=x;for(;k+1<h&&y(k+1,w);)k++;let z=w;for(;z+1<p&&Array.from({length:k-x+1},(E,T)=>y(x+T,z+1)).every(Boolean);)z++;for(let E=w;E<=z;E++)for(let T=x;T<=k;T++)m[E][T]=!0;let R=c[x]-n,$=c[k+1]+n,F=u[w]-n,S=u[z+1]+n;Math.min($-R,S-F)<.8||r.push({id:e(r.length),x0:a(R),z0:a(F),x1:a($),z1:a(S),shape:"gable",axis:$-R>=S-F?"x":"z",eave_a:a(g),eave_b:a(g),pitch_a:t,pitch_b:t,base:a(g),overhang:null})}o.push(...d)}return r}var Ue=Math.PI/180,Eo=1.13,li=1.72,me=.025,Ne=.07,zo=.25;function ge(s,e){let t=[];for(let n of s.floors){if(e&&n.id!==e)continue;let{walls:i}=oe(n.rooms,{exterior:s.settings.wall_exterior,interior:s.settings.wall_interior},n.walls??[]);for(let r of i){if(!r.exterior&&!r.free)continue;let o=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(o,a);if(l<1.2)continue;let d=a/l,c=-o/l,u=Math.min(n.height,r.height??n.height),h=(p,_,f,m)=>t.push({key:p,section:null,side:"top",flat:!1,o:_,eu:f,es:[0,1,0],n:m,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[m[0],m[2]],wall:{floorId:n.id}});h(`wall:${n.id}:${r.id}`,[r.a[0]+d*r.right,n.elevation,r.a[1]+c*r.right],[o/l,0,a/l],[d,0,c]),r.free&&h(`wall:${n.id}:${r.id}:back`,[r.b[0]-d*r.left,n.elevation,r.b[1]-c*r.left],[-o/l,0,-a/l],[-d,0,-c])}}return t}var Oe="ground";function Ia(s){return[...s.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation)[0]??s.floors[0]??null}function Ro(s,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],r=Ia(s),o=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:Bt(r,o,a)):e.base??0;return{key:Oe,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function ie(s,e,t=Z(s)){return e.face===Oe?Ro(s,e):e.face.startsWith("wall:")?ge(s,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function Ao(s,e,t){let n=ge(s,t),i=s.settings.north??0,r=l=>{let d=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((d-180)*Math.PI/180))},o=[...n].sort((l,d)=>r(d)-r(l))[0];if(!o)return null;let a={...et(o,e),portrait:!1,rows:1};return a.cols=Math.max(1,Math.floor((o.lu-.8+me)/(li+me))),a.u=Math.round((o.lu-(a.cols*li+(a.cols-1)*me))/2*100)/100,a.v=Math.round(Math.max(0,o.ls-Eo-.3)*100)/100,a}function ci(s,e){let t=s.floors.flatMap(r=>r.rooms.flatMap(o=>o.points)),n=t.length?Math.max(...t.map(r=>r[0]))+3:0,i=t.length?Math.min(...t.map(r=>r[1])):0;return{id:e,face:Oe,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(s.settings.north??0)||0,look:"black",entity:null}}function di(s){return s.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function Z(s){let e=s.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(g=>Pa(g,ko(s,g,g.overhang??e.overhang)));let t=di(s);if(!t)return[];let n=t.rooms.flatMap(g=>g.points.map(w=>w[0])),i=t.rooms.flatMap(g=>g.points.map(w=>w[1])),r=s.settings.wall_exterior+e.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...i)-r,d=Math.max(...i)+r,c=t.elevation+t.height;if(e.type==="flat")return[Fo("main",null,o,l,a,d,c+zo)];let u=a-o>=d-l,h=e.ridge==="short"?!u:u,p=(h?d-l:a-o)/2,_=p*Math.tan(e.pitch*Ue),f=(g,w,x)=>h?[g,c+x,(l+d)/2+w]:[(o+a)/2+w,c+x,g],[m,y]=h?[o,a]:[l,d];return[-1,1].map(g=>tn(`main:${g<0?"a":"b"}`,null,g<0?"a":"b",f(m,g*p,0),f(y,g*p,0),f(m,0,_),e.pitch,()=>[0,y-m]))}function Pa(s,e){let t=he(s),n=Pe(s),i=(f,m,y)=>{let[g,w]=t.at(f,m);return[g,y,w]},r=Math.max(0,e.a),o=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=l-a;if(s.shape==="flat"||s.shape==="parapet"){let f=t.at(a,-r),m=t.at(l,t.w+o);return[Fo(s.id,s.id,Math.min(f[0],m[0]),Math.min(f[1],m[1]),Math.max(f[0],m[0]),Math.max(f[1],m[1]),s.eave_a+zo)]}if(s.shape==="pent")return[tn(`${s.id}:a`,s.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,t.w+o,n.y(t.w+o)),s.pitch_a,()=>[0,d])];let c=s.shape==="hip"||s.shape==="pyramid",u=s.shape==="pyramid"?(t.u1-t.u0)/2:c?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,h=c?t.u0+u-a:0,p=c?l-(t.u1-u):0,_=[];if(n.vr>.3){let f=Math.hypot(n.vr+r,n.rh-n.y(-r));_.push(tn(`${s.id}:a`,s.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,n.vr,n.rh),s.pitch_a,m=>[h*(m/f),d-p*(m/f)]))}if(t.w-n.vr>.3){let f=Math.hypot(t.w+o-n.vr,n.rh-n.y(t.w+o));_.push(tn(`${s.id}:b`,s.id,"b",i(l,t.w+o,n.y(t.w+o)),i(a,t.w+o,n.y(t.w+o)),i(l,n.vr,n.rh),s.pitch_b,m=>[p*(m/f),d-h*(m/f)]))}if(c){let f=n.y(-r),m=n.y(t.w+o),y=[[`${s.id}:c`,"c",i(a,t.w+o,m),i(a,-r,f),i(t.u0+u,n.vr,n.rh)],[`${s.id}:d`,"d",i(l,-r,f),i(l,t.w+o,m),i(t.u1-u,n.vr,n.rh)]];for(let[g,w,x,k,z]of y){let R=Ta(g,s.id,w,x,k,z);R&&_.push(R)}}return _}function Ta(s,e,t,n,i,r){let o=Mt(Ke(i,n));if(o<.3)return null;let a=Te(Ke(i,n)),l=Ke(r,n),d=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],c=[l[0]-a[0]*d,l[1]-a[1]*d,l[2]-a[2]*d],u=Mt(c);if(u<.3)return null;let h=Te(c),p=Te(Po(a,h));p[1]<0&&(p=[-p[0],-p[1],-p[2]]);let _=Te([-h[0],0,-h[2]]),f=Math.atan2(h[1],Math.hypot(h[0],h[2]))/Ue;return{key:s,section:e,side:t,flat:!1,o:n,eu:a,es:h,n:p,lu:o,ls:u,pitch:f,span:y=>{let g=Math.min(1,Math.max(0,y/u));return[d*g,o-(o-d)*g]},facing:[_[0],_[2]]}}function tn(s,e,t,n,i,r,o,a){let l=Te(Ke(i,n)),d=Te(Ke(r,n)),c=Te(Po(l,d));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let u=Te([-d[0],0,-d[2]]);return{key:s,section:e,side:t,flat:!1,o:n,eu:l,es:d,n:c,lu:Mt(Ke(i,n)),ls:Mt(Ke(r,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function Fo(s,e,t,n,i,r,o){let a=i-t>=r-n,l=a?i-t:r-n,d=a?r-n:i-t;return{key:`${s}:top`,section:e,side:"top",flat:!0,o:[t,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:d,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Et(s){let e=s.module_w||Eo,t=s.module_h||li;return s.portrait===!1?[t,e]:[e,t]}function nn(s){return s.layout?.length?s.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,s.rows)},()=>Math.max(1,s.cols))}function ui(s,e){return s.flat?Math.min(45,Math.max(0,e.tilt??15))*Ue:s.wall?Math.min(90,Math.max(0,e.tilt??0))*Ue:0}function Je(s,e){let[t,n]=Et(e),i=nn(e),r=Math.max(1,...i),a=(i.length-1)*hi(s,e)+n*Math.cos(ui(s,e));return[r*t+(r-1)*me,a]}function hi(s,e){let[,t]=Et(e),n=ui(s,e);return s.wall?t*Math.cos(n)+me:s.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+me}function Se(s,e,t=!1){let[n,i]=Et(e),r=[],o=ui(s,e),a=i*Math.cos(o),l=hi(s,e),d=nn(e),c=Math.max(1,...d),u=new Set(e.skip??[]),h=(_,f,m)=>[s.o[0]+s.eu[0]*_+s.es[0]*f+s.n[0]*m,s.o[1]+s.eu[1]*_+s.es[1]*f+s.n[1]*m,s.o[2]+s.eu[2]*_+s.es[2]*f+s.n[2]*m],p=(_,f)=>{if(s.unbounded)return!0;if(f<-1e-6||f>s.ls+1e-6)return!1;let[m,y]=s.span(f);return _>=m-1e-6&&_<=y+1e-6};return d.forEach((_,f)=>{let m=e.align==="right"?c-_:e.align==="center"?(c-_)/2:0;for(let y=0;y<_;y++){let g=`${f}:${y}`,w=u.has(g);if(w&&!t)continue;let x=e.u+(y+m)*(n+me),k=e.v+f*l,z=x+n,R=k+(s.flat||s.wall?a:i);if(![[x,k],[z,k],[z,R],[x,R]].every(([D,L])=>p(D,L)))continue;if(s.wall&&o>.001){let D=Ne+i*Math.sin(o),[L,H]=e.flip?[D,Ne]:[Ne,D],W=[h(x,k,L),h(z,k,L),h(z,R,H),h(x,R,H)],V=e.flip?k:R,N=[x+.05,z-.05].map(K=>[h(K,V,0),h(K,V,D)]);r.push({corners:W,posts:N,cell:g,skipped:w});continue}if(!s.flat){r.push({corners:[h(x,k,Ne),h(z,k,Ne),h(z,R,Ne),h(x,R,Ne)],posts:[],cell:g,skipped:w});continue}let $=.15,F=$+i*Math.sin(o),[S,E]=e.flip?[R,k]:[k,R],T=[h(x,S,$),h(z,S,$),h(z,E,F),h(x,E,F)];r.push({corners:T,posts:[x+.05,z-.05].flatMap(D=>[[h(D,S,0),h(D,S,$)],[h(D,E,0),h(D,E,F)]]),cell:g,skipped:w})}}),r}function rn(s,e){let t=[s.eu[0],s.eu[2]],n=[s.es[0],s.es[2]],i=[e[0]-s.o[0],e[1]-s.o[2]],r=t[0]*n[1]-t[1]*n[0];if(Math.abs(r)<1e-9)return null;let o=(i[0]*n[1]-i[1]*n[0])/r,a=(t[0]*i[1]-t[1]*i[0])/r;if(a<0||a>s.ls)return null;let[l,d]=s.span(a);return o>=l&&o<=d?{u:o,s:a}:null}function Io(s,e){let t=null;for(let n of s){if(n.wall){let o=[e[0]-n.o[0],e[1]-n.o[2]],a=o[0]*n.eu[0]+o[1]*n.eu[2],l=o[0]*n.n[0]+o[1]*n.n[2];if(a>=0&&a<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:a,s:Number.NaN};a>=0&&a<=n.lu&&l>.35&&l<=.8&&!t&&(t={face:n,u:a,s:Number.NaN,y:-1/0});continue}let i=rn(n,e);if(!i)continue;let r=n.o[1]+n.es[1]*i.s;(!t||r>t.y)&&(t={face:n,...i,y:r})}return t?{face:t.face,u:t.u,s:t.s}:null}function zt(s,e){if(s.unbounded)return{u:e.u,v:e.v};let[t,n]=Je(s,e),i=r=>Math.floor(r*100+1e-6)/100;return{u:i(Math.min(Math.max(0,e.u),Math.max(0,s.lu-t))),v:i(Math.min(Math.max(0,e.v),Math.max(0,s.ls-n)))}}function et(s,e){let t={id:e,face:s.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:s.flat?15:null,flip:!1,entity:null,look:"black"},[n]=Et(t),i=.4,r=hi(s,t),[o,a]=s.span(s.ls/2);for(t.cols=Math.max(1,Math.floor((a-o-2*i+me)/(n+me))),t.rows=Math.max(1,Math.min(4,Math.floor((s.ls-2*i)/r)));t.cols>1&&Se(s,{...t,u:Mo(s,t),v:i}).length<t.rows*t.cols;)t.cols--;return t.u=Mo(s,t),t.v=i,t}function Mo(s,e){let[t]=Et(e),n=e.cols*t+(e.cols-1)*me;return Math.round((s.lu-n)/2*100)/100}function pi(s,e){let t=(Math.atan2(s.facing[0],-s.facing[1])/Ue-e+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(t/45)%8]}function on(s,e){let t=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/Ue-e+720)%360,r=Math.cos((i-180)*Ue);return n.lu*n.ls*(1.2+r)};return[...s].sort((n,i)=>t(i)-t(n))[0]??null}function Ke(s,e){return[s[0]-e[0],s[1]-e[1],s[2]-e[2]]}function Mt(s){return Math.hypot(s[0],s[1],s[2])}function Te(s){let e=Mt(s)||1;return[s[0]/e,s[1]/e,s[2]/e]}function Po(s,e){return[s[1]*e[2]-s[2]*e[1],s[2]*e[0]-s[0]*e[2],s[0]*e[1]-s[1]*e[0]]}var To=.78,Oo=1.18;function tt(s){return{id:s.id,face:s.face,u:s.u,v:s.v,rows:1,cols:1,portrait:!0,module_w:s.w||To,module_h:s.h||Oo}}function Lo(s,e){let t=Se(s,tt(e))[0];if(!t)return null;let n=i=>[i[0]-s.n[0]*.05,i[1]-s.n[1]*.05,i[2]-s.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function fi(s,e){let t=To,n=Oo,[i,r]=s.span(s.ls/2);return{id:e,face:s.key,u:Math.round((i+r-t)/2*100)/100,v:Math.round(Math.max(0,Math.min(s.ls-n,s.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function Rt(s,e,t){let n=Ro(s,e),[i,r]=Je(n,e),o=n.eu[0]*(e.u+i/2)+n.es[0]*(e.v+r/2),a=n.eu[2]*(e.u+i/2)+n.es[2]*(e.v+r/2),l=t*Math.PI/180,d=[Math.cos(l),Math.sin(l)],c=[-Math.sin(l),Math.cos(l)],u=o*d[0]+a*d[1]-i/2,h=o*c[0]+a*c[1]-r/2,p=_=>Math.round(_*100)/100;return{u:p(u),v:p(h),rotation:(Math.round(t)%360+360)%360}}function At(s,e){let[t,n]=Je(s,e);return[s.o[0]+s.eu[0]*(e.u+t/2)+s.es[0]*(e.v+n/2),s.o[2]+s.eu[2]*(e.u+t/2)+s.es[2]*(e.v+n/2)]}function _i(s,e,t){let n=t[0]*s.n[0]+t[1]*s.n[1]+t[2]*s.n[2];if(Math.abs(n)<1e-6)return null;let i=((s.o[0]-e[0])*s.n[0]+(s.o[1]-e[1])*s.n[1]+(s.o[2]-e[2])*s.n[2])/n;if(i<=0)return null;let r=[e[0]+t[0]*i-s.o[0],e[1]+t[1]*i-s.o[1],e[2]+t[2]*i-s.o[2]],o=r[0]*s.eu[0]+r[1]*s.eu[1]+r[2]*s.eu[2],a=r[0]*s.es[0]+r[1]*s.es[1]+r[2]*s.es[2];return{t:i,u:o,s:a}}function Do(s,e,t){if(s.unbounded)return!0;if(t<0||t>s.ls)return!1;let[n,i]=s.span(t);return e>=n&&e<=i}function Ho(s,e,t,n){for(let i of Se(s,e)){let r=i.corners.map(c=>{let u=[c[0]-s.o[0],c[1]-s.o[1],c[2]-s.o[2]];return[u[0]*s.eu[0]+u[1]*s.eu[1]+u[2]*s.eu[2],u[0]*s.es[0]+u[1]*s.es[1]+u[2]*s.es[2]]}),[o,a]=[Math.min(...r.map(c=>c[0])),Math.max(...r.map(c=>c[0]))],[l,d]=[Math.min(...r.map(c=>c[1])),Math.max(...r.map(c=>c[1]))];if(t>=o-.05&&t<=a+.05&&n>=l-.05&&n<=d+.05)return!0}return!1}var de=.03,sn=s=>s&&s!=="none"?s:null;function gi(s,e=t=>sn(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of s.floors)for(let i of n.furniture){let r=e(i);if(i.type==="meter")t.grid??=r,t.gridExport??=sn(i.export);else if(i.type==="inverter"&&r&&!t.solar.includes(r))t.solar.push(r);else if(i.type==="home_battery"){r&&!t.battery.includes(r)&&t.battery.push(r);let o=sn(i.charge);o&&!t.charge.includes(o)&&t.charge.push(o),(r||o)&&t.batteries.push({power:r,charge:o});let a=sn(i.soc);a&&!t.soc.includes(a)&&t.soc.push(a)}}return t}function bi(s){for(let e of s.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return s.energy.meter}function an(s,e,t="power"){if(!e)return null;let n=s.entities?.[e]?.device_id;if(!n)return null;let i=Object.keys(s.states).filter(a=>a.startsWith("sensor.")&&s.entities?.[a]?.device_id===n&&s.states[a]?.attributes.device_class===t);if(i.length<=1)return i[0]??null;let r=i.filter(a=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(a)),o=e.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return r.find(a=>o&&a.includes(o))??r[0]??i[0]}function No(s,e){let t={};for(let n of e.energy_sources??[])if(n.type==="grid"){let i=n.flow_from?.[0]?.stat_energy_from??n.flow_to?.[0]?.stat_energy_to,r=an(s,i);r&&!t.grid&&(t.grid=r)}else if(n.type==="solar"){let i=an(s,n.stat_energy_from);i&&!t.solar&&(t.solar=i)}else if(n.type==="battery"){let i=an(s,n.stat_energy_from??n.stat_energy_to);i&&!t.battery&&(t.battery=i);let r=an(s,n.stat_energy_from??n.stat_energy_to,"battery");r&&!t.battery_soc&&(t.battery_soc=r)}return t}var Oa=.07;function Me(s,e=!1){if(!s)return null;let t=Number(s.state);if(!Number.isFinite(t))return null;let n=String(s.attributes.unit_of_measurement??"W"),i=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-i:i}function Ko(s,e,t,n=gi(e)){let i=e.energy,r=i.grid??n.grid,o=r?Me(s.states[r],i.grid_invert):null;if(!i.grid&&n.gridExport){let f=Math.max(0,Me(s.states[n.gridExport])??0);o=Math.max(0,o??0)-f}let a=i.solar?Me(s.states[i.solar]):null;if(!i.solar&&n.solar.length){let f=n.solar.map(m=>Me(s.states[m])).filter(m=>m!==null);a=f.length?f.reduce((m,y)=>m+y,0):null}let l=i.battery?Me(s.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let f=n.batteries.map(m=>{if(m.charge){let y=m.power?Math.max(0,Me(s.states[m.power])??0):0,g=Math.max(0,Me(s.states[m.charge])??0);return y-g}return m.power?Me(s.states[m.power],i.battery_invert):null}).filter(m=>m!==null);l=f.length?f.reduce((m,y)=>m+y,0):null}let c=(i.battery_soc?[i.battery_soc]:n.soc).map(f=>Number(s.states[f]?.state)).filter(f=>Number.isFinite(f)),u=c.length?c.reduce((f,m)=>f+m,0)/c.length:NaN,h=i.tariff?s.states[i.tariff]:void 0,p=Number(h?.state),_=i.consumption?Me(s.states[i.consumption]):null;return _!==null?_=Math.max(0,_):o!==null||a!==null||l!==null?_=Math.max(0,(o??0)+Math.max(0,a??0)+(l??0)):t.length&&(_=t.reduce((f,m)=>f+m.power,0)),{grid:o,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:h&&Number.isFinite(p)?{value:p,unit:String(h.attributes.unit_of_measurement??"")}:null,consumption:_}}function nt(s,e){return s.pos.push(e),s.adj.push([]),s.pos.length-1}function Le(s,e,t){let n=Math.hypot(s.pos[e][0]-s.pos[t][0],s.pos[e][1]-s.pos[t][1]);s.adj[e].push({to:t,w:n}),s.adj[t].push({to:e,w:n})}function La(s,e){let t=s.length,n=s.map((i,r)=>{let o=s[(r+1)%t],a=o[0]-i[0],l=o[1]-i[1],d=Math.hypot(a,l)||1,c=-l/d,u=a/d;return{p:[i[0]+c*e[r],i[1]+u*e[r]],d:[a/d,l/d],n:[c,u]}});return s.map((i,r)=>{let o=n[(r-1+t)%t],a=n[r],l=o.d[0]*a.d[1]-o.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*e[r],i[1]+a.n[1]*e[r]];let d=((a.p[0]-o.p[0])*a.d[1]-(a.p[1]-o.p[1])*a.d[0])/l;return[o.p[0]+o.d[0]*d,o.p[1]+o.d[1]*d]})}function Da(s){return J(s.points)>=0?{pts:s.points,flipped:!1}:{pts:[...s.points].reverse(),flipped:!0}}function yi(s,e,t){let n={pos:[],adj:[],rings:new Map},{walls:i}=oe(s.rooms,{exterior:e,interior:t},s.walls??[]);for(let r of s.rooms){if(r.points.length<3)continue;let{pts:o,flipped:a}=Da(r),l=o.length,d=o.map((h,p)=>{let _=a?(l-2-p+l)%l:p,f=i.some(m=>!m.exterior&&m.sources.some(y=>y.room_id===r.id&&y.edge===_));return Oa+(f?t/2:0)}),c=La(o,d).map(h=>nt(n,h)),u=c.map((h,p)=>[h,c[(p+1)%l]]);for(let[h,p]of u)Le(n,h,p);n.rings.set(r.id,u)}for(let r of i){if(r.exterior||!r.roomLeft||!r.roomRight)continue;let o=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2],a=Ge(n,r.roomLeft,o),l=Ge(n,r.roomRight,o);a!==null&&l!==null&&Le(n,a,l)}return n}function Ge(s,e,t){let n=s.rings.get(e);if(!n)return null;let i=null;for(let o of n){let a=s.pos[o[0]],l=s.pos[o[1]],d=l[0]-a[0],c=l[1]-a[1],u=d*d+c*c||1,h=Math.min(1,Math.max(0,((t[0]-a[0])*d+(t[1]-a[1])*c)/u)),p=[a[0]+d*h,a[1]+c*h],_=Math.hypot(t[0]-p[0],t[1]-p[1]);(!i||_<i.d)&&(i={seg:o,q:p,d:_})}if(!i)return null;let r=nt(s,i.q);return Le(s,r,i.seg[0]),Le(s,r,i.seg[1]),r}function It(s,e){let t=s.rooms.filter(r=>r.points.length>=3),n=t.find(r=>C(e,r.points));if(n)return n;let i=null;for(let r of t)for(let o of r.points){let a=Math.hypot(e[0]-o[0],e[1]-o[1]);(!i||a<i.d)&&(i={room:r,d:a})}return i?.room??null}function Uo(s,e){let t=s.pos.map(()=>1/0),n=s.pos.map(()=>-1),i=s.pos.map(()=>!1);for(t[e]=0;;){let r=-1;for(let o=0;o<t.length;o++)!i[o]&&t[o]<1/0&&(r<0||t[o]<t[r])&&(r=o);if(r<0)break;i[r]=!0;for(let{to:o,w:a}of s.adj[r])t[r]+a<t[o]-1e-9&&(t[o]=t[r]+a,n[o]=r)}return{dist:t,prev:n}}function Wo(s,e){return s.every(t=>e[t].kind==="battery")?"battery":s.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var Co=new WeakMap;function Ha(s,e){let t=bi(s),n=s.floors.find(c=>c.id===t.floor_id),i=[],{wall_exterior:r,wall_interior:o}=s.settings,a=new Map,l=new Map;e.forEach((c,u)=>l.set(c.floorId,[...l.get(c.floorId)??[],u]));let d=s.floors.filter(c=>l.has(c.id));for(let c of d){if(c.id===n.id)continue;let u=c.elevation>n.elevation,h=l.get(c.id),p=Wo(h,e);i.push({floorId:n.id,a:[t.x,de,t.z],b:[t.x,u?n.height:-.2,t.z],dist:0,members:h,kind:p});let _=Math.abs(c.elevation-n.elevation);i.push({floorId:c.id,a:[t.x,u?-.2:c.height,t.z],b:[t.x,de,t.z],dist:_,members:h,kind:p}),a.set(c.id,_+.25)}for(let c of d){let u=yi(c,r,o),h=It(c,[t.x,t.z]);if(!h)continue;let p=nt(u,[t.x,t.z]),_=Ge(u,h.id,[t.x,t.z]);if(_===null)continue;Le(u,p,_);let f=[];for(let x of l.get(c.id)){let k=e[x],z=It(c,[k.x,k.z]);if(!z)continue;let R=nt(u,[k.x,k.z]),$=Ge(u,z.id,[k.x,k.z]);$!==null&&(Le(u,R,$),f.push({node:R,member:x}))}let{dist:m,prev:y}=Uo(u,p),g=new Map;for(let x of f)if(Number.isFinite(m[x.node]))for(let k=x.node;y[k]>=0;k=y[k]){let z=y[k],R=`${z}>${k}`,$=g.get(R)??{a:z,b:k,members:[]};$.members.push(x.member),g.set(R,$)}let w=a.get(c.id)??0;for(let{a:x,b:k,members:z}of g.values()){let R=u.pos[x],$=u.pos[k],F=Wo(z,e);i.push({floorId:c.id,a:[R[0],de,R[1]],b:[$[0],de,$[1]],dist:w+m[x],members:z,kind:F})}}return i}function Go({building:s,consumers:e,summary:t,battery:n,fieldPower:i,devicePower:r}){let o=bi(s);if(!o)return[];let a=s.floors.find(S=>S.id===o.floor_id);if(!a)return[];let l=S=>r?.get(S),d=mi(s,"inverter"),c=mi(s,"home_battery");!c.length&&n&&c.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=S=>{let E=null;for(let T of d)T.floorId===S.floorId&&(!E||Math.hypot(T.x-S.x,T.z-S.z)<Math.hypot(E.x-S.x,E.z-S.z))&&(E=T);return E},h=S=>l(S.id)??(c.length===1?t.battery??0:0),p=new Map;for(let S of c){let E=u(S);E&&p.set(S.id,E)}let _=e.map(S=>({floorId:S.floorId,x:S.x,z:S.z,kind:S.wallbox?"wallbox":"consumer",power:S.power}));for(let S of c)!p.has(S.id)&&t.battery!==null&&_.push({floorId:S.floorId,x:S.x,z:S.z,kind:"battery",power:Math.abs(h(S))});let f=`${o.floor_id}:${o.x},${o.z}|${_.map(S=>`${S.floorId}:${S.x},${S.z}:${S.kind}`).join(";")}`,m=Co.get(s);m||Co.set(s,m=new Map);let y=m.get(f);y||(y=Ha(s,_),m.clear(),m.set(f,y));let g=y.map(S=>({floorId:S.floorId,a:S.a,b:S.b,dist:S.dist,power:S.members.reduce((E,T)=>E+_[T].power,0),kind:S.kind})),w=t.grid!==null?vi(s):null,x=s.settings.roof.cables??[],k=S=>x.find(E=>E.id===S),z=(S,E)=>S.map(T=>({...T,key:E}));if(w){let S=t.grid>=0,E=k("grid"),T=E?ln(s,E,[w.end[0],a.elevation+de,w.end[1]],[o.x,a.elevation+.4+1.1,o.z]):[[w.end[0],de,w.end[1]],[w.wall[0],de,w.wall[1]],[o.x,de,o.z]],D=E?Ft(s,S?T:[...T].reverse(),Math.abs(t.grid),S?"grid":"export",a):Zo(a.id,S?T:[...T].reverse(),Math.abs(t.grid),S?"grid":"export",0);g.push(...z(D,"grid"))}if(t.battery!==null&&t.battery>0)for(let S of g)S.kind==="battery"&&([S.a,S.b]=[S.b,S.a]);let R=s.settings.roof.solar??[],$=s.settings.roof.strings??[],F=new Map;if(i&&R.length){let S=[...Z(s),...ge(s)];for(let E of R){let T=i.get(E.id)??0,D=E.string?$.find(G=>G.id===E.string)?.inverter:null,L=D?d.find(G=>G.id===D)??null:null;if(!L&&d.length){let G=ie(s,E,S),q=G?At(G,E):[E.u,E.v];L=d.reduce((Q,ue)=>!Q||Math.hypot(ue.x-q[0],ue.z-q[1])<Math.hypot(Q.x-q[0],Q.z-q[1])?ue:Q,null)}L&&F.set(L.id,(F.get(L.id)??0)+T);let H=L??{floorId:o.floor_id,x:o.x,z:o.z},W=L?1.1+L.h:1.5,V=k(`solar:${E.id}`),N=V?Wa(s,E):null,K=s.floors.find(G=>G.id===H.floorId);V&&N&&K?g.push(...z(Ft(s,ln(s,V,N,[H.x,K.elevation+W,H.z]),T,"solar",K),`solar:${E.id}`)):g.push(...z(Va(s,E,T,H,W),`solar:${E.id}`))}}else t.solar!==null&&!d.length&&g.push({floorId:a.id,a:[o.x+.08,a.height+.6,o.z+.08],b:[o.x+.08,de,o.z+.08],dist:0,power:t.solar,kind:"solar"});for(let S of d){let E=1.1+S.h,T=c.filter(H=>p.get(H.id)===S),D=l(S.id);if(D===void 0){D=F.get(S.id)??(d.length===1?t.solar??0:0);for(let H of T)D+=h(H)}let L=s.floors.find(H=>H.id===S.floorId);if(t.solar!==null||t.battery!==null){let H=k(`inv:${S.id}`),W=H&&L?Ft(s,ln(s,H,[S.x,L.elevation+E,S.z],[o.x,a.elevation+1.5,o.z]),Math.max(0,D),"inverter",L):Bo(s,S,E,{floorId:o.floor_id,x:o.x,z:o.z},1.5,Math.max(0,D),"inverter",0);g.push(...z(W,`inv:${S.id}`))}for(let H of T){let W=h(H);if(t.battery===null&&l(H.id)===void 0)continue;let V=H.variant==="wall"?.5+H.h:.9,N=k(`bat:${H.id}`),K=N&&L?Ft(s,ln(s,N,[S.x,L.elevation+E-.1,S.z],[H.x,L.elevation+V,H.z]),Math.abs(W),"battery",L):Bo(s,S,E-.1,H,V,Math.abs(W),"battery",0);g.push(...z(W<=0?K:K.map(G=>({...G,a:G.b,b:G.a})).reverse(),`bat:${H.id}`))}}return g}function vi(s){let e=bi(s),t=e?s.floors.find(p=>p.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:i}=s.settings,{walls:r}=oe(t.rooms,{exterior:n,interior:i},t.walls??[]),o=mi(s,"grid_point")[0],a=r.filter(p=>p.exterior);if(o){let p=null;for(let f of a){let m=f.b[0]-f.a[0],y=f.b[1]-f.a[1],g=o.x-e.x,w=o.z-e.z,x=g*y-w*m;if(Math.abs(x)<1e-9)continue;let k=((f.a[0]-e.x)*y-(f.a[1]-e.z)*m)/x,z=((f.a[0]-e.x)*w-(f.a[1]-e.z)*g)/x;if(k<=0||k>1||z<0||z>1||p&&k>=p.t)continue;let R=Math.hypot(m,y)||1;p={q:[e.x+g*k,e.z+w*k],out:[y/R,-m/R],t:k}}let _=p?[p.q[0]+p.out[0]*(n/2+.05),p.q[1]+p.out[1]*(n/2+.05)]:[e.x,e.z];return{floorId:t.id,wall:_,end:[o.x,o.z]}}let l=null;for(let p of a){let _=p.b[0]-p.a[0],f=p.b[1]-p.a[1],m=_*_+f*f||1,y=Math.min(1,Math.max(0,((e.x-p.a[0])*_+(e.z-p.a[1])*f)/m)),g=[p.a[0]+_*y,p.a[1]+f*y],w=Math.hypot(e.x-g[0],e.z-g[1]),x=Math.sqrt(m);(!l||w<l.d)&&(l={q:g,out:[f/x,-_/x],d:w})}if(!l)return null;let{q:d,out:c}=l,u=0;for(let p of s.floors)for(let _ of p.outdoor??[]){let f=_.points.length;for(let m=0;m<f;m++){let y=_.points[m],g=_.points[(m+1)%f],w=g[0]-y[0],x=g[1]-y[1],k=c[0]*x-c[1]*w;if(Math.abs(k)<1e-9)continue;let z=((y[0]-d[0])*x-(y[1]-d[1])*w)/k,R=((y[0]-d[0])*c[1]-(y[1]-d[1])*c[0])/k;z>0&&R>=0&&R<=1&&(u=Math.max(u,Math.min(15,z)))}}let h=u>n+1?u:n+2.5;return{floorId:t.id,wall:[d[0]+c[0]*(n/2+.05),d[1]+c[1]*(n/2+.05)],end:[d[0]+c[0]*h,d[1]+c[1]*h]}}function mi(s,e){let t=[];for(let n of s.floors)for(let i of n.furniture)i.type===e&&t.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return t}var Vo=new WeakMap;function jo(s,e,t,n){let i=`${e.id}:${t.join(",")}>${n.join(",")}`,r=Vo.get(s);r||Vo.set(s,r=new Map);let o=r.get(i);if(o)return o;let{wall_exterior:a,wall_interior:l}=s.settings,d=yi(e,a,l),c=[t,n],u=It(e,t),h=It(e,n);if(u&&h){let p=nt(d,t),_=Ge(d,u.id,t),f=nt(d,n),m=Ge(d,h.id,n);if(_!==null&&m!==null){Le(d,p,_),Le(d,f,m);let{dist:y,prev:g}=Uo(d,p);if(Number.isFinite(y[f])){c.length=0;for(let w=f;w>=0;w=g[w])c.unshift(d.pos[w])}}}return r.set(i,c),c}function Bo(s,e,t,n,i,r,o,a){let l=s.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let d=jo(s,l,[e.x,e.z],[n.x,n.z]),c=[[e.x,t,e.z],...d.map(u=>[u[0],de,u[1]]),[n.x,i,n.z]];return Zo(l.id,c,r,o,a)}function Zo(s,e,t,n,i){let r=[];for(let o=0;o+1<e.length;o++){let a=e[o],l=e[o+1],d=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);d<1e-4||(r.push({floorId:s,a,b:l,dist:i,power:t,kind:n}),i+=d)}return r}function ln(s,e,t,n){let r=(s.floors.find(o=>o.id===e.floor_id)?.elevation??0)+Math.max(de,e.height);return[t,...e.points.map(o=>[o[0],r,o[1]]),n]}function Wa(s,e){let t=ie(s,e,[...Z(s),...ge(s)]);if(!t)return null;let[n,i]=Je(t,e),r=e.u+n/2,o=t.unbounded?e.v+i/2:e.v;return[t.o[0]+t.eu[0]*r+t.es[0]*o,t.o[1]+t.eu[1]*r+t.es[1]*o,t.o[2]+t.eu[2]*r+t.es[2]*o]}function Ca(s,e,t){let{wall_exterior:n,wall_interior:i}=s.settings,r=yi(e,n,i),o=It(e,t),a=o?Ge(r,o.id,t):null;return a===null?t:r.pos[a]}function Ft(s,e,t,n,i){let r=[...s.floors].sort((d,c)=>d.elevation-c.elevation),o=d=>{let c=i;for(let u of r)d>=u.elevation-.01&&(c=u);return c},a=[],l=0;for(let d=0;d+1<e.length;d++){let c=e[d],u=e[d+1];if(Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])<1e-4)continue;let p=[];if(Math.abs(u[1]-c[1])>.01){let _=Math.min(c[1],u[1]),f=Math.max(c[1],u[1]);for(let m of r)m.elevation>_+.01&&m.elevation<f-.01&&p.push(m.elevation);u[1]<c[1]&&p.reverse()}for(let _ of[...p,u[1]]){let f=(_-c[1])/(u[1]-c[1]||1),m=Math.abs(u[1]-c[1])>.01?[c[0]+(u[0]-c[0])*f,_,c[2]+(u[2]-c[2])*f]:u,y=o((c[1]+m[1])/2),g=Math.hypot(m[0]-c[0],m[1]-c[1],m[2]-c[2]);g>1e-4&&a.push({floorId:y.id,a:[c[0],c[1]-y.elevation,c[2]],b:[m[0],m[1]-y.elevation,m[2]],dist:l,power:t,kind:n}),l+=g,c=m}}return a}function Va(s,e,t,n,i){let r=[...Z(s),...ge(s)],o=ie(s,e,r),a=s.floors.find(m=>m.id===n.floorId);if(!o||!a)return[];let[l,d]=Je(o,e),c=(m,y)=>[o.o[0]+o.eu[0]*m+o.es[0]*y,o.o[1]+o.eu[1]*m+o.es[1]*y,o.o[2]+o.eu[2]*m+o.es[2]*y],u=e.u+l/2,h=a.elevation+de,p=[],_;if(o.unbounded){let m=c(u,e.v+d/2);_=[m[0],h,m[2]],p.push(_)}else if(o.wall){let m=c(u,e.v);_=[m[0],h,m[2]],p.push(m,_)}else{let m=c(u,e.v),y=di(s)??a,g=Math.max(a.elevation+.5,Math.min(m[1]-.25,y.elevation+y.height-.12));_=[m[0],g,m[2]],p.push(m)}let f=Ca(s,a,[_[0],_[2]]);p.push([f[0],_[1],f[1]]),Math.abs(_[1]-h)>.05&&p.push([f[0],h,f[1]]);for(let m of jo(s,a,f,[n.x,n.z]).slice(1))p.push([m[0],h,m[1]]);return p.push([n.x,a.elevation+i,n.z]),Ft(s,p,t,"solar",a)}var Yo=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Ba={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},Na={back:0,right:90,front:180,left:270};function Xo(s,e,t){let n=ae(s.points),i=n.x1-n.x0,r=n.z1-n.z0,o=Ba[e],a=[],l=(c,u,h,p,_)=>{let[f,m,y]=_??ne[c];a.push({id:t(),type:c,x:qo(u),z:qo(h),rotation:p,w:f,d:m,h:y,variant:null,entity:null,power:null})},d=.02;for(let c of o.rows){let u=c.items.map(m=>({type:m.type,size:m.size??ne[m.type]})),h=c.wall==="back"||c.wall==="front"?i:r,p=[],_=0;for(let m of u){if(_+m.size[0]>h-.1)break;p.push(m),_+=m.size[0]}let f=c.align==="start"?.05:c.align==="end"?h-_-.05:(h-_)/2;for(let m of p){let[y,g]=m.size,w=f+y/2,x=g/2+d;c.wall==="back"?l(m.type,n.x0+w,n.z0+x,0,m.size):c.wall==="front"?l(m.type,n.x1-w,n.z1-x,180,m.size):c.wall==="right"?l(m.type,n.x1-x,n.z0+w,90,m.size):l(m.type,n.x0+x,n.z1-w,Na.left,m.size),f+=y}}for(let c of o.free){let[u,h]=c.size??ne[c.type],p=Math.min(n.x1-u/2-.05,Math.max(n.x0+u/2+.05,n.x0+i*c.at[0])),_=Math.min(n.z1-h/2-.05,Math.max(n.z0+h/2+.05,n.z0+r*c.at[1]));l(c.type,p,_,c.rotation,c.size)}return a}var qo=s=>Math.round(s*1e3)/1e3;function Qo(s){if(!Ve(s)||s.points.length<3)return null;let e=J(s.points)>=0?s.points:[...s.points].reverse(),t=s.open!==!1?e.length-1:-1,n=ar(e,t),i=[],r=[];if(s.railing!==!1)for(let o=0;o<e.length;o++){if(o===t)continue;let a=e[o],l=e[(o+1)%e.length];if(s.kind!=="canopy"||o!==n){i.push({a,b:l});continue}let d=Math.hypot(l[0]-a[0],l[1]-a[1]);if(d<.6){i.push({a,b:l});continue}let c=Math.min(2.4,Math.max(.9,d*.45),Math.max(.3,d-.3)),u=Math.max(0,(d-c)/(2*d)),h=Math.min(1,1-u);i.push({a,b:[a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u]},{a:[a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h],b:l})}if(s.kind==="canopy"){let o=s.column_size??.12;for(let a of e)r.push({at:a,size:o})}else{let o=e[n],a=e[(n+1)%e.length],l=Math.min(12,Math.max(0,Math.round(s.columns??2))),d=s.column_size??.32;for(let c=0;c<l;c++){let u=l===1?.5:c/(l-1);r.push({at:[o[0]+(a[0]-o[0])*u,o[1]+(a[1]-o[1])*u],size:d,baseSize:d*1.375})}}return{railings:i,columns:r}}var cn=Ee`
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
`,Jo=Ee`
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
`;var wi=40,ki=class extends pe{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=o=>{let a=`${o.label} ${o.id}`.toLowerCase();return t.every(l=>a.includes(l))},i=this.fixed.filter(o=>!e||n(o)),r=e?this.options.filter(n):this.options;return[...i,...r.slice(0,wi)]}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let t=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(t.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&t[this._cursor]&&this.choose(t[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,t=this._open?this.hits:[];return b`<div class="wrap">
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${e?e.label:this.placeholder}
        .value=${this._open?this._query:e?.label??""}
        @focus=${()=>{clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${n=>{this._query=n.target.value,this._cursor=0,this._open=!0}}
        @keydown=${this.onKey}
      />
      ${this._open?b`<ul class="list" role="listbox">
            ${t.length?v:b`<li class="empty">–</li>`}
            ${t.map((n,i)=>b`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${r=>r.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?b`<small>${n.id}</small>`:v}
              </li>`)}
            ${this._query&&this.options.length>wi&&t.length>=wi?b`<li class="empty">…</li>`:v}
          </ul>`:v}
    </div>`}static styles=[cn,Ee`
      :host {
        display: block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 8px 10px;
      }
      input::placeholder {
        color: var(--fp3d-text);
        opacity: 0.9;
      }
      input:focus::placeholder {
        color: var(--fp3d-muted);
      }
      input:focus {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: -1px;
      }
      .list {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 20;
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: 280px;
        overflow-y: auto;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        box-shadow: var(--fp3d-shadow);
      }
      li {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 6px 8px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13.5px;
      }
      li small {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      li.cursor,
      li:hover {
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
      }
      li.chosen {
        color: var(--fp3d-accent);
      }
      li.empty {
        color: var(--fp3d-muted);
        cursor: default;
      }
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",ki);var Ka=new URL(import.meta.url),Ua=new URL("./neonplan3d-3d.js?v=eb0e802c9c55",Ka).href,es;function ts(){return es??=import(Ua),es}function Pt(s,e){if(!zn(e))return Fe(s,`furn_${e}`);let t=te(e);return t?Re(t,s?.language??navigator.language):Fe(s,"pack_missing_item")}var $i=new Map;for(let[s,e]of Object.entries(pt))for(let t of e)$i.set(t,[...$i.get(t)??[],s]);var dn=Fn.map(s=>{let e=$i.get(s)??[];return Object.freeze({id:s,nameKey:`furn_${s}`,size:ne[s],groups:Object.freeze(e),library:e.length>0,renderer:s,symbol:s})}),Ga=new Map(dn.map(s=>[s.id,s])),xi=Object.freeze(Object.fromEntries(Object.keys(pt).map(s=>[s,Object.freeze(pt[s].filter(e=>Ga.get(e)?.groups.includes(s)))])));var Si=[{key:"room",tools:["rect","polygon","covered"]},{key:"structure",tools:["wall","opening","hole","roof"]},{key:"layout",tools:["furniture","outdoor"]},{key:"energy",tools:["energy"]}];function ns(s,e){return s==="properties"&&e?"properties":"library"}function is(s,e,t){return[e*s.scale+s.ox,t*s.scale+s.oy]}function rs(s,e,t){return[(e-s.ox)/s.scale,(t-s.oy)/s.scale]}function os(s,e,t,n){let i=Math.max(8,Math.min(600,s.scale*e)),r=i/s.scale;return{scale:i,ox:t-(t-s.ox)*r,oy:n-(n-s.oy)*r}}var ss=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","solarmove","solarturn","cablept","holopt","bgmove","bgscale"]),as=100,un=10,M=s=>Math.round(s*1e3)/1e3,ls={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},Ei=class extends pe{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_furnQuery:{state:!0},_furnPane:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;cableCache=null;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._furnQuery="",this._furnPane="library",this._libOpen=new Set(["group:lights","group:living"]);try{let n=localStorage.getItem("neonplan3d.library");n&&(this._libOpen=new Set(JSON.parse(n)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door";let e=!1;try{e=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let n=Number(localStorage.getItem("neonplan3d.editorSplit"));n>=20&&n<=80&&(this._splitRatio=n/100)}catch{}this._backupBusy=!1,this._wall3d="cut",this._doc3d=this._doc,this._sideOpen=!1;let t=!0;try{t=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=t,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(e,t){return Fe(this.hass,e,t)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&nr(this.packs??[]),e.has("hass")&&this.hass&&!ao(this.hass.language)&&lo(this.hass.language).then(()=>this.requestUpdate()),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(t=>t.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null))}firstUpdated(){let e=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let t=e.currentTarget.parentElement,n=e.currentTarget;n.setPointerCapture(e.pointerId);let i=t.getBoundingClientRect(),r=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-i.left)/i.width))},o=()=>{n.removeEventListener("pointermove",r),n.removeEventListener("pointerup",o),n.removeEventListener("pointercancel",o);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",r),n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:t,x:n,z:i}=e.detail,r=this._doc.settings.wall_interior;this.change(o=>{for(let a of o.floors){let l=a.furniture.find(h=>h.id===t);if(!l)continue;let[d,c]=ni(a,l.x,l.z,n,i);Object.assign(l,{x:d,z:c});let u=Qt(a,l,r);u&&Object.assign(l,u)}})}onDeviceMoved3d(e){let{id:t,x:n,z:i}=e.detail;this.change(r=>{for(let o of r.floors){let a=o.placements.find(c=>c.entity_id===t);if(!a)continue;let[l,d]=ni(o,a.x,a.z,n,i);Object.assign(a,{x:l,z:d})}})}render3dBar(){if(!this.isAdmin)return v;let e=this.furnitureItem,t=this.device;if(e){let n=Cn(e),i=(r,o,a=.05)=>b`<label class="fp3d-3d-size" title=${this.t(`size_${r}`)}
        >${o}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${String(Math.round(e[r]*100)/100)}
          @change=${l=>{let d=parseFloat(l.target.value.replace(",","."));Number.isFinite(d)&&d>=a&&this.updateFurniture({[r]:Math.round(d*1e3)/1e3})}}
        />
      </label>`;return b`<div class="fp3d-3d-bar">
        <span>${Pt(this.hass,e.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${n?b`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((e.mount_y??Rn(this.floor,e))*100)/100)}
                @change=${r=>{let o=parseFloat(r.target.value.replace(",","."));Number.isFinite(o)&&o>=0&&this.updateFurniture({mount_y:Math.round(o*1e3)/1e3})}}
              />
            </label>`:v}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(t){let n=B(t.entity_id),i=n==="light",r=n?qt(n,this.floor?.height??2.5,i?t.mount??"ceiling":null):1;return b`<div class="fp3d-3d-bar">
        <span>${Y(this.hass,t.entity_id)}</span>
        ${i?b`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${o=>this.updateDevice({mount:o.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(o=>b`<option value=${o} ?selected=${o===(t.mount??"ceiling")}>${this.t(`lamp_${o}`)}</option>`)}
            </select>`:v}
        <label class="fp3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((t.y??r)*100)/100)}
            @change=${o=>{let a=parseFloat(o.target.value.replace(",","."));Number.isFinite(a)&&a>=0&&this.updateDevice({y:Math.round(a*1e3)/1e3})}}
          />
        </label>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:(((t.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:((t.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",t.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteItem("device",t.entity_id)}>${this.t("delete")}</button>
      </div>`}return v}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};grab3dStart(e){let t=this._doc,n=Z(t),i=null,r=(a,l,d,c,u=!1)=>{if(!d||u)return;let h=_i(d,e.o,e.d);!h||!Ho(d,c,h.u,h.s)||i&&i.t<=h.t||(i={id:a,win:l,t:h.t,du:h.u-c.u,ds:h.s-c.v})};if(this._tool==="energy")for(let a of t.settings.roof.solar??[])r(a.id,!1,ie(t,a,n),a,!!a.locked);if(this._tool==="roof")for(let a of t.settings.roof.windows??[])r(a.id,!0,n.find(l=>l.key===a.face)??null,tt(a),!!a.locked);if(!i)return!1;let o=i;return this.grab3d={id:o.id,win:o.win,du:o.du,ds:o.ds,base:t,moved:!1},o.win?this._roofWinId=o.id:this.selectSolar(o.id),!0}grab3dMove(e){let t=this.grab3d;if(!t)return;let n=t.base,i=t.win?n.settings.roof.windows?.find(p=>p.id===t.id):void 0,r=t.win?i?tt(i):void 0:n.settings.roof.solar?.find(p=>p.id===t.id);if(!r)return;let o=ie(n,r),a=o?.unbounded?[o]:t.win?Z(n):[...Z(n),...ge(n)],l=null;for(let p of a){let _=_i(p,e.o,e.d);_&&Do(p,_.u,_.s)&&(!l||_.t<l.t)&&(l={face:p,..._})}if(!l)return;let d=l.face,c=.05,u=p=>M(Math.round(p/c)*c),h=zt(d,{...r,face:d.key,u:u(l.u-t.du),v:u(l.s-t.ds),tilt:d.flat?r.tilt??15:r.tilt});t.moved=!0,this.change(p=>{if(t.win){let f=p.settings.roof.windows?.find(m=>m.id===t.id);f&&Object.assign(f,{face:d.key,...h});return}let _=p.settings.roof.solar?.find(f=>f.id===t.id);_&&Object.assign(_,{face:d.key,...h},d.flat&&_.tilt==null?{tilt:15}:{})},t.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return b`<div class="fp3d-editor-3d">
      ${this.houseTool?v:b`<div class="fp3d-seg fp3d-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this._wall3d="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this._wall3d="cut"}>${this.t("walls_cut")}</button>
          </div>`}
      ${this.render3dBar()}
      <fp3d-view3d
        .hass=${this.hass}
        .building=${this._doc3d}
        .floorId=${this.houseTool?null:this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool?"auto":this._wall3d}
        .explode=${!1}
        .keepRoof=${this._tool==="roof"||this._tool==="energy"}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${!1}
        .holograms=${this._tool==="energy"?!0:null}
        .flows=${!1}
        ?furnish=${this.isAdmin}
        .surfaceGrab=${this.isAdmin&&this.houseTool?this.surfaceGrabber:null}
        .furnishTypes=${this._tool==="energy"?ve:this._tool==="roof"?[]:null}
        .selectedFurniture=${this._furnitureId}
        .selectedDevice=${this._deviceId}
        .quality=${"auto"}
        .floorThumbs=${!1}
        .roomLabels=${!0}
        .floorStack=${this.houseTool?"stacked":"single"}
        .panelOpen=${!1}
        .alerts=${!1}
        .scenes=${!1}
        @furniture-select=${e=>{e.detail.id?this.selectFrom3d("furniture",e.detail.id):this._furnitureId&&this.selectFrom3d("furniture",null)}}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${e=>{e.detail.id?this.selectFrom3d("device",e.detail.id):this._deviceId&&this.selectFrom3d("device",null)}}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),this._sideOpen=!1}}
        @room-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),e.detail.roomId?this.selectFrom3d("room",e.detail.roomId):this._sideOpen=!1}}
        @outdoor-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),this.selectFrom3d("outdoor",e.detail.outdoorId)}}
      ></fp3d-view3d>
    </div>`}updated(){this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("fp3d-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&!this._images[e.image_id]&&!this.loadingImages.has(e.image_id)&&this.loadImage(e.image_id),this.furnitureItem?.pictures)for(let t of this.storedPictures())!this._images[t]&&!this.loadingImages.has(t)&&this.loadImage(t)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,t=this._doc){t&&(this.past.push(JSON.stringify(t)),this.past.length>as&&this.past.shift(),this.future=[]),this._doc=e,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,t=this._doc,n=!0){let i=structuredClone(t),r=i.floors.find(o=>o.id===this._floorId);!r&&this._floorId||(e(i,r),this.setDoc(i,n?t:null))}undo(){let e=this.past.pop();e&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}redo(){let e=this.future.pop();e&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}restore(e){this._doc=e,e.floors.some(t=>t.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){return is(this._view,e[0],e[1])}toWorld(e,t){return rs(this._view,e,t)}localPoint(e){let t=e.currentTarget,i=(t?.classList.contains("fp3d-plan")?t:this.renderRoot.querySelector("svg.fp3d-plan")).getBoundingClientRect();return[e.clientX-i.left,e.clientY-i.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],t=e.length?ae(e):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=t.x1-t.x0+2*n,r=t.z1-t.z0+2*n,o=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/r)));this._view={scale:o,ox:this._size.w/2-(t.x0+t.x1)/2*o,oy:this._size.h/2-(t.z0+t.z1)/2*o}}showPoint(e,t){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-e*n,oy:this._size.h/2-t*n}}zoomAt(e,t,n){this._view=os(this._view,e,t,n)}snap(e,t,n=!1){if(this._guides={},n)return e;let i=un/this._view.scale,r=this.floor?.rooms??[],o=[];for(let _ of r)_.points.forEach((f,m)=>{t&&_.id===t.roomId&&(t.index===void 0||t.index===m)||o.push(f)});let a=null,l=i;for(let _ of o){let f=Math.hypot(_[0]-e[0],_[1]-e[1]);f<l&&(l=f,a=_)}if(a)return this._guides={point:a},[a[0],a[1]];for(let _ of r)if(!(t&&_.id===t.roomId))for(let f=0;f<_.points.length;f++){let m=_.points[f],y=_.points[(f+1)%_.points.length],g=y[0]-m[0],w=y[1]-m[1],x=g*g+w*w;if(x<1e-9)continue;let k=((e[0]-m[0])*g+(e[1]-m[1])*w)/x;if(k<=0||k>=1)continue;let z=[m[0]+k*g,m[1]+k*w],R=Math.hypot(z[0]-e[0],z[1]-e[1]),$=this._doc.settings.grid;Math.abs(w)<1e-9&&(z[0]=Math.min(Math.max(Math.round(z[0]/$)*$,Math.min(m[0],y[0])),Math.max(m[0],y[0]))),Math.abs(g)<1e-9&&(z[1]=Math.min(Math.max(Math.round(z[1]/$)*$,Math.min(m[1],y[1])),Math.max(m[1],y[1]))),R<l&&(l=R,a=z)}if(a)return this._guides={point:a},[M(a[0]),M(a[1])];let d=this._doc.settings.grid,c=[M(Math.round(e[0]/d)*d),M(Math.round(e[1]/d)*d)],u=i,h=i,p={};for(let _ of o)Math.abs(_[0]-e[0])<u&&(u=Math.abs(_[0]-e[0]),c[0]=_[0],p.x=_[0]),Math.abs(_[1]-e[1])<h&&(h=Math.abs(_[1]-e[1]),c[1]=_[1],p.z=_[1]);return this._guides=p,c}onPointerDown(e){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let t=this.localPoint(e),n=e.target;this.pressStart=t,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,t))},550)}}guardFixed(e){let t=this.drag;if(!t)return;let n=null;t.kind==="vertex"||t.kind==="room"?n=["room",t.roomId]:t.kind==="device"||t.kind==="aim"?n=["device",t.entityId]:t.kind==="opening"?n=["opening",t.id]:t.kind==="furniture"||t.kind==="rotate"||t.kind==="resize"?n=["furniture",t.id]:t.kind==="wallmove"?n=["wall",t.id]:t.kind==="outdoor"&&(n=["outdoor",t.id]),!(!n||!this.isFixedItem(...n))&&("moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){this.drag&&ss.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),r=e.target;if(this._bgEdit&&this.isAdmin&&this.floor?.background){let w=this.floor.background;if(r.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(r.closest("[data-bg]")){this.drag={kind:"bgmove",start:i,bx:w.x,bz:w.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let w=this.snap(i,void 0,e.altKey);this.drag={kind:"freewall",start:w,end:w};return}if(this._tool==="roof"||this._tool==="energy"){let w=r.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),x=r.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex"),k=r.closest("[data-roof]")?.getAttribute("data-roof"),z=this._tool==="energy"?r.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(z){this._solarId=null,this.selectItem("furniture",z),this.drag=this.isAdmin?{kind:"furniture",id:z,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&r.closest("[data-holo-pt]")){this.drag=this.isAdmin?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let E=r.closest("[data-cable-pt]")?.getAttribute("data-cable-pt"),T=H=>!!this._doc.settings.roof.cables?.find(W=>W.id===H)?.locked;if(E&&this.isAdmin&&!T(E.slice(0,E.lastIndexOf(":")))){let H=E.lastIndexOf(":"),W=E.slice(0,H),V=Number(E.slice(H+1));if(e.detail>=2){this.change(N=>{let K=N.settings.roof.cables?.find(G=>G.id===W);K&&K.points.length>1&&K.points.splice(V,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:W,index:V,base:this._doc,moved:!1};return}let D=r.closest("[data-cable-line]")?.getAttribute("data-cable-line");if(D&&this.isAdmin&&!T(D)){let H=Number(r.closest("[data-cable-line]")?.getAttribute("data-cable-seg")??0),W=this._doc;this.change(V=>{let N=V.settings.roof.cables?.find(K=>K.id===D);N&&N.points.splice(H,0,[M(i[0]),M(i[1])])}),this.drag={kind:"cablept",id:D,index:H,base:W,moved:!0};return}let L=r.closest("[data-cable]")?.getAttribute("data-cable");if(L){if(this._cableId=L,this.isAdmin&&this._floorId&&!this._doc.settings.roof.cables?.some(H=>H.id===L)){let H=this._doc;this.layCable(L);let W=this._doc.settings.roof.cables?.find(N=>N.id===L),V=this.cableSegments().filter(N=>N.key===L);if(W&&V.length){let N=[[V[0].a[0],V[0].a[2]],...W.points,[V[V.length-1].b[0],V[V.length-1].b[2]]],K=0,G=1/0;for(let q=0;q+1<N.length;q++){let Q=Za(i,N[q],N[q+1]);Q<G&&(G=Q,K=q)}this.change(q=>{let Q=q.settings.roof.cables?.find(ue=>ue.id===L);Q&&Q.points.splice(K,0,[M(i[0]),M(i[1])])}),this.drag={kind:"cablept",id:L,index:K,base:H,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let R=this._tool==="energy"?r.closest("[data-solar]")?.getAttribute("data-solar"):null,$=this._tool==="energy"?r.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if($&&this.isAdmin){this.drag={kind:"solarturn",id:$,base:this._doc,moved:!1};return}if(R){let E=r.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&R===this._solarId&&E&&this.isAdmin){this.toggleSolarCell(E),this.drag={kind:"pan",last:n};return}R!==this._solarId&&(this._solarPick=!1),this._solarId=R,this._roofId=null;let T=this._doc.settings.roof.solar?.find(W=>W.id===R),D=T?ie(this._doc,T)??void 0:void 0,L=D?this.faceHit(D,i):null,H=T&&L?{du:L.u-T.u,ds:Number.isNaN(L.s)?0:L.s-T.v}:null;this.drag=this.isAdmin&&!T?.locked?{kind:"solarmove",id:R,start:i,startScreen:n,base:this._doc,moved:!1,grab:H}:{kind:"pan",last:n};return}let F=this._tool==="roof"?r.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(F){this._roofWinId=F,this._roofId=null;let E=this._doc.settings.roof.windows?.find(H=>H.id===F),T=E?Z(this._doc).find(H=>H.key===E.face):void 0,D=T?rn(T,i):null,L=E&&D?{du:D.u-E.u,ds:D.s-E.v}:null;this.drag=this.isAdmin&&!E?.locked?{kind:"solarmove",id:F,start:i,startScreen:n,base:this._doc,moved:!1,grab:L,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let S=this._tool==="energy"?r.closest(".fp3d-energy-item")?.getAttribute("data-furniture"):null;if(S){this._solarId=null,this.selectItem("furniture",S),this.drag=this.isAdmin?{kind:"furniture",id:S,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(x&&this.isAdmin){let[E,T]=x.split(":");this.drag={kind:"roofvertex",id:E,index:Number(T),base:this._doc,moved:!1}}else if(w&&this.isAdmin){let[E,T,D]=w.split(":");this.drag={kind:"roofcorner",id:E,corner:[T==="1"?1:0,D==="1"?1:0],base:this._doc,moved:!1}}else if(k){let E=this.roofFixed(this._doc.settings.roof.sections?.find(T=>T.id===k));E&&this._roofId===k&&(this._fixedHint=!0),this._roofId=k,this.drag=this.isAdmin&&!E?{kind:"roofmove",id:k,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let E=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:E,end:E,roof:!0}}else this.drag={kind:"pan",last:n};return}if(this._tool==="settings"){this.drag={kind:"pan",last:n};return}if(this._tool==="rect"||this._tool==="covered"||this._tool==="outdoor"||this._tool==="hole"){let w=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:w,end:w,outdoor:this._tool==="outdoor",covered:this._tool==="covered",hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}let o=r.closest("[data-device]");if(o&&this.isAdmin){this.drag={kind:"device",entityId:o.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let a=r.closest("[data-opening]");if(a){let w=a.getAttribute("data-opening");this.selectItem("opening",w),this.drag=this.isAdmin?{kind:"opening",id:w,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let l=r.closest("[data-resize]");if(l&&this.isAdmin){let[w,x,k]=l.getAttribute("data-resize").split(":"),z=[x==="1"?1:-1,k==="1"?1:-1],R=this.floor.furniture.find(F=>F.id===w);if(!R)return;let $=Hn(R,z);this.drag={kind:"resize",id:w,corner:z,grabOffset:[i[0]-$[0],i[1]-$[1]],base:this._doc,moved:!1};return}let d=r.closest("[data-rotate]");if(d&&this.isAdmin){let w=d.getAttribute("data-rotate"),x=this.floor.furniture.find(k=>k.id===w);if(!x)return;this.drag={kind:"rotate",id:w,angleOffset:x.rotation-Wn(x,i),base:this._doc,moved:!1};return}let c=r.closest("[data-aim]");if(c&&this.isAdmin){this.drag={kind:"aim",entityId:c.getAttribute("data-aim"),base:this._doc,moved:!1};return}let u=r.closest("[data-furniture]");if(u&&!r.closest("[data-vertex], [data-mid]")){let w=u.getAttribute("data-furniture");this.selectItem("furniture",w),this.drag=this.isAdmin?{kind:"furniture",id:w,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let h=r.closest("[data-vertex]"),p=r.closest("[data-mid]");if(h&&this.room&&this.isAdmin){this._vertex=Number(h.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(p&&this.room&&this.isAdmin){let w=Number(p.getAttribute("data-mid")),x=this.room.points,k=x[w],z=x[(w+1)%x.length],R=[M((k[0]+z[0])/2),M((k[1]+z[1])/2)],$=this._doc,F=this.room.id;this.change((S,E)=>{let T=E.rooms.find(L=>L.id===F);T.points.splice(w+1,0,R),T.wall_heights&&T.wall_heights.splice(w+1,0,T.wall_heights[w]??null),T.wall_thickness&&T.wall_thickness.splice(w+1,0,T.wall_thickness[w]??null);let D=Math.hypot(R[0]-k[0],R[1]-k[1]);for(let L of E.openings)L.room_id!==F||L.wall||(L.edge>w?L.edge+=1:L.edge===w&&L.offset>D&&(L.edge=w+1,L.offset=M(L.offset-D)))},$,!1),this._vertex=w+1,this.drag={kind:"vertex",roomId:F,index:w+1,base:$,moved:!0};return}let _=r.closest("[data-wall-end]");if(_&&this.isAdmin){let[w,x]=_.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:w,end:x,start:i,startScreen:n,base:this._doc,moved:!1};return}let f=r.closest("[data-free-wall]");if(f){let w=f.getAttribute("data-free-wall");this.selectItem("wall",w),this.drag=this.isAdmin?{kind:"wallmove",id:w,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let m=r.closest("[data-out-vertex]");if(m&&this.isAdmin){let[w,x]=m.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:w,index:Number(x),base:this._doc,moved:!1};return}let y=r.closest("[data-outdoor]");if(y&&!r.closest("[data-room]")&&!this.roomAt(i)){let w=y.getAttribute("data-outdoor");this.selectItem("outdoor",w),this.drag=this.isAdmin?{kind:"outdoor",id:w,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let g=r.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(g){g!==this._roomId&&(this._vertex=null),this.selectItem("room",g),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:g,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(e){if(this.pressStart){let r=this.localPoint(e);Math.hypot(r[0]-this.pressStart[0],r[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let t=this.localPoint(e);if(this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.pinch){let r=this.pinchState();r&&(this.zoomAt(r.dist/Math.max(1,this.pinch.dist),...r.mid),this._view={...this._view,ox:this._view.ox+r.mid[0]-this.pinch.mid[0],oy:this._view.oy+r.mid[1]-this.pinch.mid[1]},this.pinch=r);return}let n=this.toWorld(...t),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this._tool!=="settings"&&this.floor&&(this._cursor=this.snap(n,void 0,e.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]},i.last=t;break;case"tap":(i.panning||Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]}),i.last=t;break;case"rect":i.end=this.snap(n,void 0,e.altKey),this.requestUpdate();break;case"freewall":{let r=this.snap(n,void 0,e.altKey);e.shiftKey&&(r=Math.abs(r[0]-i.start[0])>Math.abs(r[1]-i.start[1])?[r[0],i.start[1]]:[i.start[0],r[1]]),i.end=r,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=(i.base.floors.find(a=>a.id===this._floorId)?.walls??[]).find(a=>a.id===i.id);if(!r)return;let o;if(i.end){let a=this.snap(n,void 0,e.altKey);o=i.end==="a"?{a,b:r.b}:{a:r.a,b:a}}else{let a=e.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-i.start[0])/a)*a,d=Math.round((n[1]-i.start[1])/a)*a;o={a:[M(r.a[0]+l),M(r.a[1]+d)],b:[M(r.b[0]+l),M(r.b[1]+d)]}}this.change((a,l)=>Object.assign((l.walls??[]).find(d=>d.id===i.id),o),i.base,!1);break}case"vertex":{let r=this.snap(n,{roomId:i.roomId,index:i.index},e.altKey);i.moved=!0,this.change((o,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=r},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(d=>d.id===this._floorId)?.rooms.find(d=>d.id===i.roomId);if(!r)return;let o=this.roomDelta(r,[n[0]-i.start[0],n[1]-i.start[1]],e.altKey),a=i.base.floors.find(d=>d.id===this._floorId),l=new Set(a.placements.filter(d=>C([d.x,d.z],r.points)).map(d=>d.entity_id));this.change((d,c)=>{let u=c.rooms.find(h=>h.id===i.roomId);u.points=r.points.map(([h,p])=>[M(h+o[0]),M(p+o[1])]),c.placements=a.placements.map(h=>l.has(h.entity_id)?{...h,x:M(h.x+o[0]),z:M(h.z+o[1])}:h)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=e.altKey?.01:this._doc.settings.grid,o=M(Math.round((n[0]-i.start[0])/r)*r),a=M(Math.round((n[1]-i.start[1])/r)*r),l=i.base.settings.roof.sections?.find(d=>d.id===i.id);if(!l)return;this.change(d=>{let c=d.settings.roof.sections?.find(u=>u.id===i.id);c&&(Object.assign(c,{x0:M(l.x0+o),x1:M(l.x1+o),z0:M(l.z0+a),z1:M(l.z1+a)}),l.points&&(c.points=l.points.map(([u,h])=>[M(u+o),M(h+a)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let r=i.base.settings.roof.solar?.find(h=>h.id===i.id),o=r?ie(i.base,r):null;if(!r||!o)return;let[a,l]=At(o,r),d=Math.atan2(n[0]-a,-(n[1]-l))*180/Math.PI,c=e.altKey?1:15;d=Math.round(d/c)*c;let u=Rt(i.base,r,d);this.change(h=>{let p=h.settings.roof.solar?.find(_=>_.id===i.id);p&&Object.assign(p,u)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.win?i.base.settings.roof.windows?.find(m=>m.id===i.id):void 0,o=i.win?r?tt(r):void 0:i.base.settings.roof.solar?.find(m=>m.id===i.id),a=i.win?Z(i.base):[...Z(i.base),...this._floorId?ge(i.base,this._floorId):[]],l=o?ie(i.base,o,a):null;if(!o||!l)return;let d=e.altKey?.01:.05,c=m=>M(Math.round(m/d)*d),u=l.unbounded?null:Io(a,n),h=l,p,_;if(u&&i.grab)h=u.face,p=c(u.u-i.grab.du),_=Number.isNaN(u.s)?u.face.key===o.face?o.v:Math.max(0,u.face.ls-1.5):c(u.s-i.grab.ds);else{let m=n[0]-i.start[0],y=n[1]-i.start[1],g=[l.es[0],l.es[2]],w=g[0]*g[0]+g[1]*g[1]||1;p=c(o.u+m*l.eu[0]+y*l.eu[2]),_=c(o.v+(m*g[0]+y*g[1])/w)}let f=zt(h,{...o,face:h.key,u:p,v:_,tilt:h.flat?o.tilt??15:o.tilt});this.change(m=>{if(i.win){let g=m.settings.roof.windows?.find(w=>w.id===i.id);g&&Object.assign(g,{face:h.key,...f});return}let y=m.settings.roof.solar?.find(g=>g.id===i.id);y&&Object.assign(y,{face:h.key,...f},h.flat&&y.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outvertex":{i.moved=!0;let r=this.snap(n,void 0,e.altKey),o=i.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===i.id);if(!o)return;let a=jt(o.points);this.change((l,d)=>{let c=d.outdoor.find(_=>_.id===i.id);if(!c)return;let u=o.points.map(_=>[..._]),h=i.index,p=o.points[h];u[h]=[M(r[0]),M(r[1])],a&&o.points.forEach((_,f)=>{f!==h&&(Math.abs(_[0]-p[0])<1e-6&&(u[f][0]=M(r[0])),Math.abs(_[1]-p[1])<1e-6&&(u[f][1]=M(r[1])))}),c.points=u},i.base,!1);break}case"cablept":{i.moved=!0;let r=this.snap(n,void 0,e.altKey);this.change(o=>{let a=o.settings.roof.cables?.find(l=>l.id===i.id);a&&a.points[i.index]&&(a.points[i.index]=[M(r[0]),M(r[1])])},i.base,!1);break}case"holopt":{i.moved=!0;let r=this.snap(n,void 0,e.altKey);this.change(o=>o.settings.roof.hologram={...o.settings.roof.hologram??Nt,place:"free",x:M(r[0]),z:M(r[1])},i.base,!1);break}case"bgmove":{i.moved=!0;let r=n[0]-i.start[0],o=n[1]-i.start[1];this.change((a,l)=>{l.background&&(l.background.x=M(i.bx+r),l.background.z=M(i.bz+o))},i.base,!1);break}case"bgscale":{i.moved=!0;let r=this.floor?.background,o=r?this._images[r.image_id]:void 0;if(!r||!o)break;let[a]=this.bgLocal(r,n,o.aspect),l=Math.max(.5,M(a));this.change((d,c)=>{c.background&&(c.background.width=l)},i.base,!1);break}case"roofvertex":{i.moved=!0;let r=this.snap(n,void 0,e.altKey);this.change(o=>{let a=o.settings.roof.sections?.find(l=>l.id===i.id);!a?.points||i.index>=a.points.length||(a.points[i.index]=[M(r[0]),M(r[1])],Object.assign(a,si(a.points)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let r=this.snap(n,void 0,e.altKey);this.change(o=>{let a=o.settings.roof.sections?.find(l=>l.id===i.id);a&&(i.corner[0]?a.x1=M(r[0]):a.x0=M(r[0]),i.corner[1]?a.z1=M(r[1]):a.z0=M(r[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(d=>d.id===this._floorId),o=r?.openings.find(d=>d.id===i.id),a=o&&r?Qe(o,r.rooms,r.walls??[]):null;if(!o||!a)return;let l=this.offsetOnEdge(a.room,a.edge,n,o.width,e.altKey);this.change((d,c)=>Object.assign(c.openings.find(u=>u.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(u=>u.id===this._floorId)?.furniture.find(u=>u.id===i.id);if(!r)return;let o=e.altKey?.01:this._doc.settings.grid,a=M(Math.round((r.x+n[0]-i.start[0])/o)*o),l=M(Math.round((r.z+n[1]-i.start[1])/o)*o),d=r.rotation,c=e.altKey?null:this.snapToWall({...r,x:a,z:l});c&&({x:a,z:l,rotation:d}=c),this.change((u,h)=>Object.assign(h.furniture.find(p=>p.id===i.id),{x:a,z:l,rotation:d}),i.base,!1);break}case"outdoor":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(d=>d.id===this._floorId)?.outdoor.find(d=>d.id===i.id);if(!r)return;let o=e.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-i.start[0])/o)*o,l=Math.round((n[1]-i.start[1])/o)*o;this.change((d,c)=>c.outdoor.find(u=>u.id===i.id).points=r.points.map(([u,h])=>[M(u+a),M(h+l)]),i.base,!1);break}case"resize":{i.moved=!0;let r=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!r)return;let o=[n[0]-i.grabOffset[0],n[1]-i.grabOffset[1]],a=yr(r,i.corner,o,e.altKey?.01:this._doc.settings.grid);this.change((l,d)=>Object.assign(d.furniture.find(c=>c.id===i.id),a),i.base,!1);break}case"rotate":{i.moved=!0;let r=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!r)return;let o=Wn(r,n)+i.angleOffset,a=e.altKey?1:15;o=(Math.round(o/a)*a%360+360)%360,this.change((l,d)=>Object.assign(d.furniture.find(c=>c.id===i.id),{rotation:o}),i.base,!1);break}case"aim":{i.moved=!0;let r=i.base.floors.find(d=>d.id===this._floorId)?.placements.find(d=>d.entity_id===i.entityId);if(!r)return;let o=Math.atan2(-(n[0]-r.x),n[1]-r.z)*180/Math.PI,a=e.altKey?1:5;o=(Math.round(o/a)*a%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-r.x,n[1]-r.z)*10)/10));this.change((d,c)=>Object.assign(c.placements.find(u=>u.entity_id===i.entityId),{rotation:o,reach:l}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(d=>d.id===this._floorId)?.placements.find(d=>d.entity_id===i.entityId);if(!r)return;let o=e.altKey?.01:this._doc.settings.grid,a=M(Math.round((r.x+n[0]-i.start[0])/o)*o),l=M(Math.round((r.z+n[1]-i.start[1])/o)*o);this.change((d,c)=>Object.assign(c.placements.find(u=>u.entity_id===i.entityId),{x:a,z:l}),i.base,!1);break}}}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let t=this.drag;if(this.drag=null,!t||e.type==="pointercancel"){t&&ss.has(t.kind)&&"moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base);return}let n=this.localPoint(e);switch(t.kind){case"freewall":{Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1])>=.2&&this.addFreeWall(t.start,t.end),this._guides={};break}case"wallmove":t.moved&&this.pushHistory(t.base),this._guides={};break;case"rect":{let[i,r]=t.start,[o,a]=t.end;if(Math.abs(o-i)>=.2&&Math.abs(a-r)>=.2){let l=[Math.min(i,o),Math.min(r,a)],d=[Math.max(i,o),Math.max(r,a)],c=[l,[d[0],l[1]],d,[l[0],d[1]]];t.outdoor?this.addOutdoor(c):t.covered?this.addRoom([l,[l[0],d[1]],d,[d[0],l[1]]],"veranda"):t.hole?this.addHole(l,d):t.roof?this.addRoofSection(l,d):this.addRoom(c)}this._guides={};break}case"tap":if(t.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,e.altKey),n);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"holopt":case"bgmove":case"bgscale":t.moved&&this.pushHistory(t.base);break;case"device":t.moved?this.pushHistory(t.base):this.selectItem("device",t.entityId);break;case"vertex":case"room":t.moved&&this.pushHistory(t.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[t,n]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),t,n)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t[0]-n[0],t[1]-n[1]),mid:[(t[0]+n[0])/2,(t[1]+n[1])/2]}}pushHistory(e){this.past.push(JSON.stringify(e)),this.past.length>as&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,t,n){if(n)return t;let i=this._doc.settings.grid,r=[Math.round(t[0]/i)*i,Math.round(t[1]/i)*i],a=un/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let d of l.points)for(let c of e.points){let u=Math.hypot(c[0]+t[0]-d[0],c[1]+t[1]-d[1]);u<a&&(a=u,r=[d[0]-c[0],d[1]-c[1]],this._guides={point:d})}return r}roomAt(e){return(this.floor?.rooms??[]).filter(i=>C(e,i.points)).sort((i,r)=>fe(i.points)-fe(r.points))[0]?.id??null}addDraftPoint(e,t){let n=this._draft;if(n.length>=3){let[r,o]=this.toScreen(n[0]);if(Math.hypot(r-t[0],o-t[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-e[0],i[1]-e[1])<1e-6||(this._draft=[...n,e])}closeDraft(){this._draft.length>=3&&fe(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let t=this._draft[this._draft.length-1];if(!t||!(this._measureLen>0))return;let n=Ye(t,this._measureLen,e),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let e=this._draft[0]??[0,0],[t,n]=this._rectSize;t>.1&&n>.1&&(this.addRoom([e,Ye(e,t,"right"),Ye(Ye(e,t,"right"),n,"down"),Ye(e,n,"down")]),this._draft=[])}renderMeasureForm(){let e=this._draft,t=e[0],n=e[e.length-1],i=t&&n&&e.length>1?Math.hypot(n[0]-t[0],n[1]-t[1]):0,r=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],o=a=>j(this.hass,a,2);return b`<section>
      <h3>${this.t("measure")}</h3>
      ${t?b`<p class="fp3d-sub">${this.t("measure_from",{x:o(t[0]),z:o(t[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("measure_length")}
                <input
                  class="fp3d-measure-input"
                  type="number"
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${String(this._measureLen)}
                  @input=${a=>this._measureLen=parseFloat(a.target.value.replace(",","."))||0}
                  @keydown=${a=>{let l={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"}[a.key];l?(a.preventDefault(),this.measureStep(l)):a.key==="Enter"&&this.closeDraft()}}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${r.map(([a,l])=>b`<button class="fp3d-btn fp3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${e.length>1?b`<ol class="fp3d-measure-list">
                  ${e.slice(1).map((a,l)=>b`<li>${o(Math.hypot(a[0]-e[l][0],a[1]-e[l][1]))} m</li>`)}
                </ol>`:v}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${e.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${e.length<2} @click=${()=>this._draft=e.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${e.length>=3?b`<p class="fp3d-sub">${this.t("measure_gap",{gap:o(i)})}</p>`:v}`:b`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.num(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.num(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(e,t){if(!this.floor)return;let n={id:U("wall"),a:[M(e[0]),M(e[1])],b:[M(t[0]),M(t[1])],thickness:null};this.change((i,r)=>r.walls=[...r.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(e){let t=this._wallId;t&&this.change((n,i)=>Object.assign((i.walls??[]).find(r=>r.id===t),e))}deleteFreeWall(){let e=this._wallId;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((t,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==e),n.openings=n.openings.filter(i=>i.wall!==e)}),this._wallId=null)}renderFreeWalls(e){return I`<g>${(e.walls??[]).map(t=>{let[n,i]=this.toScreen(t.a),[r,o]=this.toScreen(t.b),a=t.id===this._wallId;return I`<g data-free-wall=${t.id} class=${`fp3d-free-wall${a?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${i} x2=${r} y2=${o} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${i} x2=${r} y2=${o} />
      </g>
      ${a&&this.isAdmin&&!Pn(t,!0,this._doc.settings)?I`<g class="fp3d-vertex" data-wall-end=${`${t.id}:a`}><circle cx=${n} cy=${i} r="16" class="fp3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${t.id}:b`}><circle cx=${r} cy=${o} r="16" class="fp3d-hit" /><circle cx=${r} cy=${o} r="6" /></g>`:v}`})}</g>`}renderFreeWallForm(e){let t=this.isAdmin,n=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]),i=r=>{let a=Math.max(.1,r)/(n||1);this.updateFreeWall({b:[M(e.a[0]+(e.b[0]-e.a[0])*a),M(e.a[1]+(e.b[1]-e.a[1])*a)]})};return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",e.id)}</div>
      <div class="fp3d-form">
        ${this.num(this.t("wall_length"),n,i,.01,.1)}
        ${this.num(this.t("wall_thickness"),e.thickness??this._doc.settings.wall_interior,r=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,r))}),.01,.02)}
        ${this.num(this.t("wall_height"),e.height??this.floor?.height??2.5,r=>this.updateFreeWall({height:r>=(this.floor?.height??2.5)-.005?null:Math.max(.05,r)}),.05,.05)}
      </div>
      ${t?b`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:v}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(e,t){if(!this.floor)return;let n={id:U("hole"),type:"stairwell",x:M((e[0]+t[0])/2),z:M((e[1]+t[1])/2),w:M(t[0]-e[0]),d:M(t[1]-e[1]),h:.02,rotation:0,variant:null};this.change((i,r)=>r.furniture.push(n)),this.selectItem("furniture",n.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let t={id:U("outdoor"),type:"lawn",points:e.map(([n,i])=>[M(n),M(i)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id),this._tool="select"}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(e){let t=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(r=>r.id===t),e))}setOutdoorPoint(e,t,n){let i=this.outdoorArea;if(!i||!Number.isFinite(n))return;let r=i.points.map(o=>[...o]);r[e][t]=M(n),this.updateOutdoor({points:r})}insertOutdoorPoint(e){let t=this.outdoorArea;if(!t||!this.isAdmin||t.points.length>=200)return;let n=t.points.map(o=>[...o]),i=n[e],r=n[(e+1)%n.length];n.splice(e+1,0,[M((i[0]+r[0])/2),M((i[1]+r[1])/2)]),this.updateOutdoor({points:n})}deleteOutdoorPoint(e){let t=this.outdoorArea;!t||!this.isAdmin||t.points.length<=3||this.updateOutdoor({points:t.points.filter((n,i)=>i!==e)})}deleteOutdoor(){let e=this._outdoorId;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((t,n)=>n.outdoor=n.outdoor.filter(i=>i.id!==e)),this._outdoorId=null)}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let t={...e,id:U("outdoor"),points:e.points.map(([n,i])=>[M(n+.5),M(i+.5)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id)}addRoom(e,t="room"){if(!this.floor)return;let n=U("room"),i=this.floor.rooms.length+1,r=t==="veranda"||t==="balcony"||t==="canopy";this.change((o,a)=>a.rooms.push({id:n,name:r?`${this.t("tool_covered")} ${i}`:this.t("new_room",{n:i}),area_id:null,points:e.map(([l,d])=>[M(l),M(d)]),floor_material:r?"tiles":"wood",...r?{kind:t,...t==="veranda"?{roof_style:"tile"}:{},railing:!0,columns:2,column_size:t==="canopy"?.12:.32,open:!0}:{}})),this._roomId=n,this._vertex=null,this._tool="select"}onKey=e=>{if(e.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=e.ctrlKey||e.metaKey;if(n&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(n&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(n&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(e.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.hasOwn(ls,e.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[r,o]=ls[e.key];this.nudge(r*i,o*i)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(e.key==="Escape"){if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};nudge(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.selectedFix;if(i&&this.isFixedItem(i.kind,i.id))return this._fixedHint=!0,!0;let r=o=>[M(o[0]+e),M(o[1]+t)];if(this._deviceId){let o=this._deviceId;if(!n.placements.some(a=>a.entity_id===o))return!1;this.change((a,l)=>{let d=l.placements.find(c=>c.entity_id===o);[d.x,d.z]=r([d.x,d.z])})}else if(this._furnitureId){let o=this._furnitureId;this.change((a,l)=>{let d=l.furniture.find(c=>c.id===o);d&&([d.x,d.z]=r([d.x,d.z]))})}else if(this._openingId){let o=this.opening,a=o?Qe(o,n.rooms,n.walls??[]):null;if(!o||!a)return!1;let l=a.room.points[a.edge],d=a.room.points[(a.edge+1)%a.room.points.length],c=Math.hypot(d[0]-l[0],d[1]-l[1])||1,u=(e*(d[0]-l[0])+t*(d[1]-l[1]))/c;if(Math.abs(u)<1e-9)return!0;let h=Math.min(o.width,c)/2;this.updateOpening({offset:M(Math.min(c-h,Math.max(h,o.offset+u)))})}else if(this._wallId){let o=this._wallId;this.change((a,l)=>{let d=(l.walls??[]).find(c=>c.id===o);d&&([d.a,d.b]=[r(d.a),r(d.b)])})}else if(this._outdoorId){let o=this._outdoorId;this.change((a,l)=>{let d=l.outdoor.find(c=>c.id===o);d&&(d.points=d.points.map(r))})}else if(this._roomId){let o=this._roomId,a=this._vertex,l=n.rooms.find(c=>c.id===o);if(!l)return!1;let d=new Set(n.placements.filter(c=>C([c.x,c.z],l.points)).map(c=>c.entity_id));this.change((c,u)=>{let h=u.rooms.find(p=>p.id===o);if(a!==null&&a<h.points.length){h.points[a]=r(h.points[a]);return}h.points=h.points.map(r);for(let p of u.placements)d.has(p.entity_id)&&([p.x,p.z]=r([p.x,p.z]))})}else return!1;return!0}get freeHaFloors(){let e=new Set(this._doc.floors.map(t=>t.ha_floor));return Object.values(this.hass?.floors??{}).filter(t=>!e.has(t.floor_id)).sort((t,n)=>(t.level??99)-(n.level??99)||t.name.localeCompare(n.name))}unplacedAreas(e){if(!e.ha_floor)return[];let t=new Set(this._doc.floors.flatMap(n=>n.rooms.map(i=>i.area_id)));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===e.ha_floor&&!t.has(n.area_id)).sort((n,i)=>n.name.localeCompare(i.name))}addFloor(e=null){let t=this._doc.floors,n=U("floor"),i=e?.name??(t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length})),r={...mr(n,i,gr(t,e?.level)),ha_floor:e?.floor_id??null},o=structuredClone(this._doc),a=o.floors.findIndex(l=>l.elevation>r.elevation);o.floors.splice(a<0?o.floors.length:a,0,r),this.setDoc(o),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(e){let t=this.unplacedAreas(e);if(!t.length)return;let n=br(e,t,()=>U("room"));this.change((i,r)=>r.rooms.push(...n)),this.fit()}moveFloor(e){let t=this._doc.floors.findIndex(r=>r.id===this._floorId),n=t+e;if(t<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[t],i.floors[n]]=[i.floors[n],i.floors[t]],this.setDoc(i)}deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let t=structuredClone(this._doc);t.floors=t.floors.filter(n=>n.id!==e.id),this.setDoc(t),this._floorId=t.floors[0]?.id??null,this._roomId=null}deleteRoom(){let e=this._roomId;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((t,n)=>{let i=n.rooms.find(r=>r.id===e);n.rooms=n.rooms.filter(r=>r.id!==e),n.openings=n.openings.filter(r=>r.room_id!==e||r.wall),i&&(n.placements=n.placements.filter(r=>!C([r.x,r.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let t=U("room");this.change((n,i)=>i.rooms.push({...structuredClone(e),id:t,points:e.points.map(([r,o])=>[M(r+.5),M(o+.5)])})),this._roomId=t}roofFixed(e){return!!e&&(!!e.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let e=[...this._doc.floors].sort((t,n)=>n.elevation-t.elevation);return e.length<2?v:b`<div class="fp3d-seg fp3d-dev-source">
      ${e.map(t=>b`<button aria-pressed=${t.id===this._floorId} @click=${()=>this._floorId=t.id}>${t.name}</button>`)}
    </div>`}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(e=>e.id===this._roofId):void 0}useRoofSections(e=!1){if(!this.isAdmin)return;let t=(this._doc.settings.roof.sections??[]).length>0;e&&t&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(e||!t)&&(n.settings.roof.sections=So(n,()=>U("roof")))}),this._roofId=null)}addRoofSection(e,t){if(!this.isAdmin)return;let n=$o(this._doc,e[0],e[1],t[0],t[1]),i=Math.min(...this._doc.floors.map(d=>d.elevation)),r=n===null,o=M(n??i+2.4),a=r?6:this._doc.settings.roof.pitch||35,l={id:U("roof"),x0:M(e[0]),z0:M(e[1]),x1:M(t[0]),z1:M(t[1]),shape:r?"pent":"gable",axis:t[0]-e[0]>=t[1]-e[1]?"x":"z",eave_a:o,eave_b:o,pitch_a:a,pitch_b:a,base:o,overhang:r?.15:null,...r?{open:!0}:{}};this.change(d=>{d.settings.roof.type="custom",d.settings.roof.sections=[...d.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let e=this.floor,t=this._roofId;if(!e||!t||!this.isAdmin)return;let n=go(e.rooms,e.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let i=n.map(([r,o])=>[M(r),M(o)]);this.updateRoofSection({shape:"flat",points:i,...si(i)})}addDormer(e){let t=this.roofSection;if(!t||!this.isAdmin)return;let n=vo(t,e,U("roof"));this.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(e){let t=this._roofId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.sections?.find(r=>r.id===t);i&&Object.assign(i,e)})}deleteRoofSection(){let e=this._roofId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.sections=(t.settings.roof.sections??[]).filter(n=>n.id!==e)),this._roofId=null)}duplicateRoofSection(){let e=this.roofSection;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:U("roof"),x0:M(e.x0+1),x1:M(e.x1+1),z0:M(e.z0+1),z1:M(e.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],t]),this._roofId=t.id}renderRoofSections(){let e=this._doc.settings.roof,t=e.type==="custom"?e.sections??[]:[];return I`<g class="fp3d-roof-layer">${t.map((n,i)=>{let r=n.id===this._roofId,o=he(n),a=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=yo(t,n),d=l?he(wo(l,n)):o,c=(a??[d.at(d.u0,0),d.at(d.u1,0),d.at(d.u1,d.w),d.at(d.u0,d.w)]).map(y=>this.toScreen(y)),u=(y,g)=>{let[w,x]=this.toScreen(y),[k,z]=this.toScreen(g);return I`<line x1=${w} y1=${x} x2=${k} y2=${z} />`},h=n.shape==="flat"||n.shape==="parapet"?null:ai(n,{u0:0,u1:0,a:0,b:0}),p=h?I`${h.ridges.map(([y,g])=>u(o.at(y[0],y[1]),o.at(g[0],g[1])))}`:v,[_,f]=this.toScreen(o.at((o.u0+o.u1)/2,o.w/2)),m=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${j(this.hass,en(n),1)} m`;return I`<g data-roof=${n.id} class=${`fp3d-roof-sec${r?" fp3d-roof-sel":""}`}>
          <polygon points=${c.map(y=>y.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${p}</g>
          <text x=${_} y=${f-14}>${m}</text>
        </g>
        ${r&&this.isAdmin&&!this.roofFixed(n)&&a?a.map((y,g)=>{let[w,x]=this.toScreen(y);return I`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${g}`}><circle cx=${w} cy=${x} r="16" class="fp3d-hit" /><circle cx=${w} cy=${x} r="6" /></g>`}):v}
        ${r&&this.isAdmin&&!this.roofFixed(n)&&!a?[[0,0],[1,0],[1,1],[0,1]].map(([y,g])=>{let[w,x]=this.toScreen([y?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),g?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return I`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${y}:${g}`}><circle cx=${w} cy=${x} r="16" class="fp3d-hit" /><circle cx=${w} cy=${x} r="6" /></g>`}):v}`})}</g>`}faceHit(e,t){return e.wall?{u:(t[0]-e.o[0])*e.eu[0]+(t[1]-e.o[2])*e.eu[2],s:Number.NaN}:rn(e,t)}renderSolarFields(){let e=this._doc.settings.roof.solar??[];if(!e.length)return v;let t=Z(this._doc);return I`<g class="fp3d-solar-layer">${e.map(n=>{let i=ie(this._doc,n,t);if(!i||i.wall&&i.wall.floorId!==this._floorId)return v;let r=n.id===this._solarId,o=v;if(r&&i.unbounded&&this.isAdmin&&!n.locked){let[a,l]=At(i,n),d=(n.rotation??0)*Math.PI/180,c=.9+Math.max(...Se(i,n,!0).flatMap(f=>f.corners.map(m=>Math.hypot(m[0]-a,m[2]-l))))*.5,[u,h]=this.toScreen([a,l]),[p,_]=this.toScreen([a+Math.sin(d)*c,l-Math.cos(d)*c]);o=I`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${u} y1=${h} x2=${p} y2=${_} />
          <circle cx=${p} cy=${_} r="16" class="fp3d-hit" />
          <circle cx=${p} cy=${_} r="8" />
          <path d="M${p-4} ${_-1}a4 4 0 1 1 2 3.5" />
        </g>`}return I`<g data-solar=${n.id} class=${`fp3d-solar${r?" fp3d-solar-sel":""}${r&&this._solarPick?" fp3d-solar-pick":""}`}>${Se(i,n,r).map(a=>{let l=i.wall?Math.max(.3,...a.corners.map(c=>(c[0]-i.o[0])*i.n[0]+(c[2]-i.o[2])*i.n[2])):0,d=i.wall?[a.corners[0],a.corners[1]].flatMap((c,u)=>{let h=[c[0],c[2]],p=[c[0]+i.n[0]*l,c[2]+i.n[2]*l];return u===0?[h,p]:[p,h]}):a.corners.map(c=>[c[0],c[2]]);return I`<polygon data-cell=${a.cell} class=${a.skipped?"fp3d-solar-off":""} points=${d.map(c=>this.toScreen(c).join(",")).join(" ")} />`})}</g>${o}`})}</g>`}renderRoofWindows(){let e=this._doc.settings.roof.windows??[];if(!e.length)return v;let t=new Map(Z(this._doc).map(n=>[n.key,n]));return I`<g class="fp3d-roofwin-layer">${e.map(n=>{let i=t.get(n.face),r=i?Lo(i,n):null;return r?I`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${r.map(o=>this.toScreen([o[0],o[2]]).join(",")).join(" ")} /></g>`:v})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let e=Z(this._doc).filter(i=>!i.flat),t=on(e,this._doc.settings.north??0)??Z(this._doc)[0];if(!t)return;let n=fi(t,U("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(e){let t=this._roofWinId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.windows?.find(o=>o.id===t);if(!i)return;Object.assign(i,e);let r=Z(n).find(o=>o.key===i.face);r&&Object.assign(i,zt(r,tt(i)))})}deleteRoofWindow(){let e=this._roofWinId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.windows=(t.settings.roof.windows??[]).filter(n=>n.id!==e)),this._roofWinId=null)}renderRoofWindowList(){let e=this._doc.settings.roof.windows??[],t=new Map(Z(this._doc).map(n=>[n.key,n]));return b`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(t.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${e.length?b`<div class="fp3d-room-list">
            ${e.map((n,i)=>{let r=t.get(n.face);return b`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${r?this.faceLabel(r):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:v}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin||!t.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(e){let t=this.isAdmin,n=Z(this._doc),i=l=>this.updateRoofWindow(l),r=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===e.id)+1,o=this.entityOptions(l=>l.startsWith("cover.")),a=this.entityOptions(l=>Mi(l)||re(l));return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${r}</h3>
          ${t?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:v}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!t} @change=${l=>{let d=n.find(c=>c.key===l.target.value);d&&i({...fi(d,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name})}}>
              ${n.map(l=>b`<option value=${l.key} ?selected=${l.key===e.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.num(this.t("width"),e.w??.78,l=>i({w:Math.max(.3,Math.min(4,M(l)))}),.01,.3)}
          ${this.num(this.t("height_m"),e.h??1.18,l=>i({h:Math.max(.3,Math.min(4,M(l)))}),.01,.3)}
          ${this.num(this.t("solar_u"),e.u,l=>i({u:M(l)}),.05)}
          ${this.num(this.t("solar_v"),e.v,l=>i({v:M(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),e.cover??null,void 0,o,l=>i({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),e.contact??null,void 0,a,l=>i({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),e.tilt??null,void 0,a,l=>i({tilt:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_motor"),e.window??null,void 0,o,l=>i({window:l==="none"?null:l}))}
          <label class="fp3d-field fp3d-wide"
            >${this.t("roof_window_name")}
            <input .value=${e.name??""} ?disabled=${!t} maxlength="64" @change=${l=>i({name:l.target.value.trim()||null})}
          /></label>
        </div>
        <p class="fp3d-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${t?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:v}
      </section>`}cableSegments(){if(this.cableCache?.doc===this._doc)return this.cableCache.segs;let e=this._doc,t=new Map((e.settings.roof.solar??[]).map(r=>[r.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},i=[];try{i=Go({building:e,consumers:[],summary:n,fieldPower:t}).filter(r=>r.key)}catch{i=[]}return this.cableCache={doc:e,segs:i},i}cableKeys(){let e=[...new Set(this.cableSegments().map(n=>n.key))],t=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return e.sort((n,i)=>t(n)-t(i)||n.localeCompare(i))}cableLabel(e){let t=a=>{let l=this._doc.floors.flatMap(d=>d.furniture).find(d=>d.id===a);return l?l.name||this.t(`furn_${l.type}`):"?"},n=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.type==="meter"),i=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(e==="grid")return`${i} \u2192 ${this.t("furn_grid_point")}`;let[r,o]=[e.slice(0,e.indexOf(":")),e.slice(e.indexOf(":")+1)];if(r==="solar"){let a=this._doc.settings.roof.solar??[],l=a.findIndex(c=>c.id===o);return`${a[l]?.name||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return r==="inv"?`${t(o)} \u2192 ${i}`:`${this.t("furn_inverter")} \u2194 ${t(o)}`}layCable(e){if(!this.isAdmin||!this._floorId)return;let t=[];for(let r of this.cableSegments().filter(o=>o.key===e))for(let o of[r.a,r.b]){let a=[M(o[0]),M(o[2])],l=t[t.length-1];(!l||Math.hypot(l[0]-a[0],l[1]-a[1])>.05)&&t.push(a)}let n=t.length>2?t.slice(1,-1):t,i=this._floorId;this.change(r=>{r.settings.roof.cables=[...(r.settings.roof.cables??[]).filter(o=>o.id!==e),{id:e,floor_id:i,points:n.length?n:[t[0]??[0,0]],height:.03}]}),this._cableId=e}renderCables(){if(!ce("energy_pro"))return v;let e=this.cableSegments();if(!e.length)return v;let t=e.filter(o=>o.floorId===this._floorId),n=this._doc.settings.roof.cables??[],i=this._cableId,r=[...new Set(e.map(o=>o.key))];return I`<g class="fp3d-cable-layer">${r.map(o=>{let a=n.find(m=>m.id===o),l=`fp3d-cable fp3d-cable-${o.split(":")[0]}${a?" fp3d-cable-laid":""}${o===i?" fp3d-cable-sel":""}`,d=e.filter(m=>m.key===o),c=t.filter(m=>m.key===o).map(m=>{let y=this.toScreen([m.a[0],m.a[2]]),g=this.toScreen([m.b[0],m.b[2]]);return I`<line x1=${y[0]} y1=${y[1]} x2=${g[0]} y2=${g[1]} />`});if(!(a&&o===i&&a.floor_id===this._floorId&&!a.locked))return c.length?I`<g class=${l} data-cable=${o}><g class="fp3d-cable-hit">${c}</g>${c}</g>`:v;let u=d[0],h=d[d.length-1],p=[this.toScreen([u.a[0],u.a[2]]),...a.points.map(m=>this.toScreen(m)),this.toScreen([h.b[0],h.b[2]])],_=p.slice(0,-1).map((m,y)=>I`<line class="fp3d-cable-piece" data-cable-line=${o} data-cable-seg=${y} x1=${m[0]} y1=${m[1]} x2=${p[y+1][0]} y2=${p[y+1][1]} />`),f=a.points.map((m,y)=>{let g=this.toScreen(m);return I`<g class="fp3d-vertex" data-cable-pt=${`${o}:${y}`}><circle cx=${g[0]} cy=${g[1]} r="16" class="fp3d-hit" /><circle cx=${g[0]} cy=${g[1]} r="6" /></g>`});return I`<g class=${l} data-cable=${o}>${c}${_}${f}</g>`})}</g>`}renderCableSettings(){let e=this.cableKeys();if(!e.length)return v;let t=this.isAdmin,n=this._doc.settings.roof.cables??[],i=this._cableId?n.find(r=>r.id===this._cableId):void 0;return b`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${e.map(r=>b`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${r===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=r===this._cableId?null:r;let o=n.find(a=>a.id===r);this._cableId&&o&&this._doc.floors.some(a=>a.id===o.floor_id)&&(this._floorId=o.floor_id)}}
            >
              <span>${this.cableLabel(r)}${n.some(o=>o.id===r)?b` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:v}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?b`<div class="fp3d-actions">
              ${i?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!i.locked} title=${this.t("fix_hint")} ?disabled=${!t} @click=${()=>this.change(r=>{let o=r.settings.roof.cables?.find(a=>a.id===i.id);o&&(o.locked=!o.locked)})}>
                      ${i.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(r=>r.settings.roof.cables=(r.settings.roof.cables??[]).filter(o=>o.id!==this._cableId))}>${this.t("cable_auto")}</button>`:b`<button class="fp3d-btn fp3d-primary" ?disabled=${!t||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${i?b`<div class="fp3d-form">
                    ${this.num(this.t("cable_height"),i.height,r=>this.change(o=>{let a=o.settings.roof.cables?.find(l=>l.id===i.id);a&&(a.height=Math.min(30,Math.max(0,M(r))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${i.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:this._doc.floors.find(r=>r.id===i.floor_id)?.name??""})}</p>`:v}`:v}
    </section>`}renderEnergyMarkers(){let e=this.floor;if(!e)return v;let t={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"},n=this._doc.settings.roof.hologram,i=ce("energy_pro")&&n?.place==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return I`<g class="fp3d-energy-markers">${i?I`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${i[0]} cy=${i[1]} r="17" />
          <text x=${i[0]} y=${i[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${i[0]} y=${i[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:v}${e.furniture.filter(r=>ve.includes(r.type)).map(r=>{let[o,a]=this.toScreen([r.x,r.z]),l=r.id===this._furnitureId;return I`<g data-energy-device=${r.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${o} cy=${a} r="17" />
          <text x=${o} y=${a+6} class="fp3d-energy-icon">${t[r.type]??"\u26A1"}</text>
          ${l?I`<text x=${o} y=${a+32} class="fp3d-energy-name">${this.t(`furn_${r.type}`)}</text>`:v}
          <title>${this.t(`furn_${r.type}`)}</title>
        </g>`})}</g>`}faceLabel(e){if(e.key===Oe)return this.t("solar_ground");if(e.wall){let i=this._doc.floors.find(r=>r.id===e.wall.floorId);return`${this.t("solar_wall")} ${i?.name??""} \xB7 ${this.t(`compass_${pi(e,this._doc.settings.north??0)}`)} \xB7 ${j(this.hass,e.lu,1)} m`}let t=this._doc.settings.roof.sections??[],n=e.section?this.t("solar_section",{n:t.findIndex(i=>i.id===e.section)+1}):this.t("solar_main");return e.flat?`${n} \xB7 ${this.t("solar_flat")}`:`${n} \xB7 ${this.t(`compass_${pi(e,this._doc.settings.north??0)}`)} \xB7 ${Math.round(e.pitch)}\xB0`}addSolarField(){if(!this.isAdmin)return;let e=Z(this._doc),t=new Set((this._doc.settings.roof.solar??[]).map(o=>o.face)),n=this._doc.settings.north??0,i=on(e.filter(o=>!t.has(o.key)),n)??on(e,n);if(!i)return;let r=et(i,U("pv"));this.change(o=>o.settings.roof.solar=[...o.settings.roof.solar??[],r]),this._solarId=r.id,this._roofId=null}selectSolar(e){this._solarId=e,this._roofId=null;let t=this._doc.settings.roof.solar?.find(n=>n.id===e);t?.face.startsWith("wall:")&&(this._floorId=t.face.split(":")[1])}addWallField(){if(!this.isAdmin)return;let e=this._floorId??this._doc.floors[0]?.id,t=e?Ao(this._doc,U("pv"),e):null;t&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],t]),this._solarId=t.id)}addGroundField(){if(!this.isAdmin)return;let e=ci(this._doc,U("pv"));this.change(t=>t.settings.roof.solar=[...t.settings.roof.solar??[],e]),this._solarId=e.id}updateSolar(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(o=>o.id===t);if(!i)return;Object.assign(i,e);let r=ie(n,i);r&&Object.assign(i,zt(r,i))})}setSolarString(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof,r=i.solar?.find(a=>a.id===t);if(!r)return;if(e==="new"){let a=i.strings??[],l={id:U("str"),name:this.t("solar_string_n",{n:a.length+1}),entity:r.entity??null,inverter:null};i.strings=[...a,l],r.string=l.id}else r.string=e;let o=new Set((i.solar??[]).map(a=>a.string).filter(Boolean));i.strings=(i.strings??[]).filter(a=>o.has(a.id))})}updateSolarString(e){let n=this._doc.settings.roof.solar?.find(i=>i.id===this._solarId)?.string;!n||!this.isAdmin||this.change(i=>{let r=i.settings.roof.strings?.find(o=>o.id===n);r&&Object.assign(r,e)})}toggleSolarCell(e){this.updateSolarField(t=>{let n=new Set(t.skip??[]);n.has(e)?n.delete(e):n.add(e),t.skip=n.size?[...n].sort():null})}updateSolarField(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(r=>r.id===t);i&&e(i)})}deleteSolar(){let e=this._solarId;!e||!this.isAdmin||(this.change(t=>{let n=t.settings.roof;n.solar=(n.solar??[]).filter(r=>r.id!==e);let i=new Set(n.solar.map(r=>r.string).filter(Boolean));n.strings=(n.strings??[]).filter(r=>i.has(r.id))}),this._solarId=null)}renderSolarList(){let e=this._doc.settings.roof.solar??[],t=Z(this._doc),n=new Map(e.map(r=>[r.id,ie(this._doc,r,t)])),i=this.isAdmin;return b`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(t.length?"solar_hint":"solar_no_roof")}</p>
      ${e.length?b`<div class="fp3d-room-list">
            ${e.map((r,o)=>{let a=n.get(r.id),l=a?Se(a,r).length:0;return b`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(r.id)}
                >
                  <span>${r.name||`${this.t("solar_field")} ${o+1}`} · ${a?this.faceLabel(a):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:j(this.hass,l*(r.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:v}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!i||!t.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?b`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(r=>{let o=e.filter(c=>c.string===r.id),a=o.map(c=>n.get(c.id)?Se(n.get(c.id),c).length:0),l=a.reduce((c,u)=>c+u,0),d=o.reduce((c,u,h)=>c+a[h]*(u.wp??400)/1e3,0);return b`<p class="fp3d-sub">🔗 <b>${r.name}</b> · ${this.t("solar_string_sum",{fields:o.length,n:l,kwp:j(this.hass,d,1)})}</p>`})}`:v}
    </section>`}renderSolarForm(e){let t=this.isAdmin,n=Z(this._doc),i=ge(this._doc),r=ie(this._doc,e,n),o=e.face===Oe,a=r?Se(r,e).length:0,l=nn(e),d=l.reduce((p,_)=>p+_,0)-(e.skip?.length??0),c=this.entityOptions(p=>this.isPowerSensor(p)),u=p=>this.updateSolar(p),h=(this._doc.settings.roof.solar??[]).findIndex(p=>p.id===e.id)+1;return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${e.name||`${this.t("solar_field")} ${h}`}</h3>
          ${t?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:v}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!t}
              .value=${e.name??""}
              placeholder=${this.t("solar_name_hint")}
              @change=${p=>u({name:p.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!t}
              @change=${p=>{let _=p.target.value,f={portrait:e.portrait,look:e.look,name:e.name,string:e.string,entity:e.entity,module_w:e.module_w,module_h:e.module_h,wp:e.wp};_===Oe&&u({...ci(this._doc,e.id),...f});let m=n.find(g=>g.key===_);m&&u({...et(m,e.id),...f,rotation:null,flip:!1});let y=i.find(g=>g.key===_);y&&u({...et(y,e.id),...f,rows:1,rotation:null,flip:!1})}}
            >
              ${r?v:b`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(p=>b`<option value=${p.key} ?selected=${p.key===e.face}>${this.faceLabel(p)}</option>`)}
              <option value=${Oe} ?selected=${o}>${this.t("solar_ground")}</option>
              ${i.map(p=>b`<option value=${p.key} ?selected=${p.key===e.face}>${this.faceLabel(p)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,p=>{let _=Math.max(1,Math.min(40,Math.round(p)));u(e.layout?.length?{layout:Array.from({length:_},(f,m)=>e.layout[m]??e.layout[e.layout.length-1]),rows:_}:{rows:_})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!t}
              .value=${e.layout?.length?e.layout.join(", "):String(e.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${p=>{let _=p.target.value.split(/[,;\s]+/).map(f=>parseInt(f,10)).filter(f=>Number.isFinite(f)&&f>=0);_.length&&(_.length===1?u({cols:Math.max(1,Math.min(60,_[0])),layout:null,skip:null}):u({layout:_.slice(0,40).map(f=>Math.min(60,f)),rows:Math.min(40,_.length),cols:Math.max(1,..._),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${r&&!r.unbounded?b`${this.t("solar_face_size",{w:j(this.hass,r.lu,1),h:j(this.hass,r.ls,1)})} · `:v}${this.t("solar_cols_hint")}
        </p>
        ${e.layout?.length&&new Set(e.layout).size>1?b`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(p=>b`<button aria-pressed=${(e.align??"left")===p} ?disabled=${!t} @click=${()=>u({align:p})}>${this.t(`solar_align_${p}`)}</button>`)}
            </div>`:v}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${e.portrait!==!1} ?disabled=${!t} @click=${()=>u({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${e.portrait===!1} ?disabled=${!t} @click=${()=>u({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${e.look!=="blue"} ?disabled=${!t} @click=${()=>u({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${e.look==="blue"} ?disabled=${!t} @click=${()=>u({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.num(this.t("solar_module_w"),e.module_w??1.13,p=>u({module_w:Math.max(.3,Math.min(3,M(p)))}),.01,.3)}
          ${this.num(this.t("solar_module_h"),e.module_h??1.72,p=>u({module_h:Math.max(.3,Math.min(3,M(p)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),e.wp??400,p=>u({wp:Math.max(50,Math.min(1500,Math.round(p)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!t} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${e.skip?.length?b`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>u({skip:null})}>${this.t("solar_pick_all")}</button>`:v}
        </div>
        ${this._solarPick?b`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:v}
        <div class="fp3d-form">
          ${o?b`${this.num(this.t("solar_base"),e.base??0,p=>u({base:p>.001?Math.min(60,M(p)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),e.rotation??0,p=>u(Rt(this._doc,e,p)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>u(Rt(this._doc,e,(e.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>u(Rt(this._doc,e,(e.rotation??0)+15))}>↻ 15°</button>
                </div>`:b`${this.num(this.t("solar_u"),e.u,p=>u({u:M(p)}),.05)} ${this.num(this.t(r?.wall?"solar_v_wall":"solar_v"),e.v,p=>u({v:M(p)}),.05)}`}
          ${r?.wall?b`${this.num(this.t("solar_tilt_wall"),e.tilt??0,p=>u({tilt:Math.max(0,Math.min(90,Math.round(p)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${p=>u({flip:p.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:v}
          ${r?.flat?b`${this.num(this.t("solar_tilt"),e.tilt??15,p=>u({tilt:Math.max(0,Math.min(45,Math.round(p)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${p=>u({flip:p.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:v}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:a,kwp:j(this.hass,a*(e.wp??400)/1e3,1)})}${a<d?b` · <b>${this.t("solar_partial",{n:a,total:d})}</b>`:v}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!t} @change=${p=>{let _=p.target.value;this.setSolarString(_===""?null:_)}}>
              <option value="" ?selected=${!e.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(p=>b`<option value=${p.id} ?selected=${p.id===e.string}>${p.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let p=this._doc.settings.roof.strings?.find(f=>f.id===e.string);if(!p)return this.entitySelect(this.t("solar_entity"),e.entity??null,void 0,c,f=>u({entity:f==="none"?null:f}));let _=this._doc.floors.flatMap(f=>f.furniture.filter(m=>m.type==="inverter").map((m,y)=>({id:m.id,label:`${this.t("furn_inverter")} ${y+1} \xB7 ${f.name}`})));return b`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!t} .value=${p.name} @change=${f=>this.updateSolarString({name:f.target.value.trim()||p.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),p.entity??null,void 0,c,f=>this.updateSolarString({entity:f==="none"?null:f}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!t} @change=${f=>this.updateSolarString({inverter:f.target.value||null})}>
                  <option value="" ?selected=${!p.inverter}>${this.t(_.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${_.map(f=>b`<option value=${f.id} ?selected=${f.id===p.inverter}>${f.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${t?b`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!r} @click=${()=>r&&u({...et(r,e.id),portrait:e.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:v}
      </section>`}renderRoofPanel(){let e=this._doc.settings.roof,t=this.isAdmin,n=e.type==="custom"?this.roofSection:void 0,i=this._roofWinId?e.windows?.find(o=>o.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let r=e.type==="custom"?e.sections??[]:[];return b`<section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${e.type!=="custom"?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!t} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:b`<div class="fp3d-room-list">
              ${r.map((o,a)=>b`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=o.id}>
                    <span>${a+1} · ${o.dormer?this.t("roof_dormer"):this.t(`roof_shape_${o.shape}`)} · ${j(this.hass,Math.abs(o.x1-o.x0),1)} × ${j(this.hass,Math.abs(o.z1-o.z0),1)} m · ${this.t("roof_ridge_height")} ${j(this.hass,en(o),1)} m</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(o=>o.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){let e=this._solarId?this._doc.settings.roof.solar?.find(i=>i.id===this._solarId):void 0;if(e)return this.renderSolarForm(e);let t=this._furnitureId?this.floor?.furniture.find(i=>i.id===this._furnitureId&&ve.includes(i.type)):void 0;if(t)return b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(t)}`;let n=ce("energy_pro");return b`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():v}${n?this.renderHologramSettings():v}${this.renderProCard()}`}renderHologramSettings(){let e=this._doc.settings.roof.solar??[],t=this.isAdmin,n=this._doc.settings.roof.hologram??Nt,i=n.place==="free";if(!e.length&&!i)return v;let r=l=>this.change(d=>d.settings.roof.hologram={...d.settings.roof.hologram??Nt,...l}),o=(l,d)=>l.name||`${this.t("solar_field")} ${d+1}`,a=()=>{let l=-1/0,d=1/0,c=-1/0;for(let h of this._doc.floors)for(let p of h.rooms)for(let[_,f]of p.points)l=Math.max(l,_),d=Math.min(d,f),c=Math.max(c,f);let u=Number.isFinite(l);r({place:"free",x:n.x??(u?M(l+2):0),z:n.z??(u?M((d+c)/2):0),height:n.height??3})};return b`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!t} @change=${l=>l.target.value==="free"?a():r({place:"field"})}>
            <option value="field" ?selected=${!i}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${i}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${i?b`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.num("X (m)",n.x??0,l=>r({x:M(l)}),.25)} ${this.num("Z (m)",n.z??0,l=>r({z:M(l)}),.25)}
              ${this.num(this.t("holo_height"),n.height??3,l=>r({height:Math.min(60,Math.max(0,M(l)))}),.25,0)}`:b`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!t} @change=${l=>r({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${e.map((l,d)=>b`<option value=${l.id} ?selected=${l.id===n.field}>${o(l,d)}</option>`)}
                </select>
              </label>
              ${this.num(this.t("holo_right"),n.right,l=>r({right:Math.min(30,Math.max(-30,M(l)))}),.25)}
              ${this.num(this.t("holo_up"),n.up,l=>r({up:Math.min(30,Math.max(-30,M(l)))}),.25)}`}
        ${this.num(this.t("holo_size"),n.size,l=>r({size:Math.min(3,Math.max(.3,M(l)))}),.1,.3)}
      </div>
    </section>`}isPowerSensor(e){if(!re(e))return!1;let t=this.hass?.states[e]?.attributes;return t?.device_class==="power"||t?.unit_of_measurement==="W"||t?.unit_of_measurement==="kW"}devicePower(e,t){return e.power&&e.power!=="none"?e.power:t.get(e.id)?.power??null}renderEnergyChecklist(){let e=this._doc,t=this.hass?bt(this.hass,e.floors):new Map,n=e.floors.flatMap(y=>y.furniture.map(g=>({m:g,fl:y}))),i=y=>n.filter(g=>g.m.type===y),r=y=>{this._floorId=y.fl.id,this._solarId=null,this.selectItem("furniture",y.m.id),this.showPoint(y.m.x,y.m.z)},o=e.settings.roof.solar??[],a=i("meter"),l=i("inverter"),d=i("home_battery"),c=i("grid_point"),u=!!e.energy.grid||a.some(y=>this.devicePower(y.m,t)),h=!!e.energy.solar||l.length>0&&l.every(y=>this.devicePower(y.m,t)),p=d.every(y=>this.devicePower(y.m,t)&&y.m.soc&&y.m.soc!=="none")||!!e.energy.battery,_=ce("energy_pro"),f=[{state:o.length?"ok":"todo",label:this.t(o.length?"chk_solar":"chk_solar_add"),action:o.length?()=>this._solarId=o[0].id:()=>this.addSolarField()},a.length?{state:u?"ok":"todo",label:this.t(u?"chk_meter":"chk_meter_sensor"),action:()=>r(a[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:h?"ok":"todo",label:this.t(h?"chk_inverter":"chk_inverter_sensor"),action:()=>r(l.find(y=>!this.devicePower(y.m,t))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},d.length?{state:p?"ok":"todo",label:this.t(p?"chk_battery":"chk_battery_sensor"),action:()=>r(d[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},c.length?{state:"ok",label:this.t("chk_grid"),action:()=>r(c[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")},_?{state:"ok",label:this.t("chk_pro_active")}:{state:"opt",label:this.t("chk_pro_get"),href:yt(this.hass?.language)}],m=f.filter(y=>y.state==="ok").length;return b`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${m}/${f.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${f.map(y=>y.href?b`<a class="fp3d-chk fp3d-chk-${y.state}" href=${y.href} target="_blank" rel="noopener"><span>${y.state==="ok"?"\u2713":y.state==="todo"?"\u25CB":"\xB7"}</span>${y.label}</a>`:b`<button class="fp3d-chk fp3d-chk-${y.state}" ?disabled=${!this.isAdmin&&!!y.action&&y.state!=="ok"} @click=${y.action}><span>${y.state==="ok"?"\u2713":y.state==="todo"?"\u25CB":"\xB7"}</span>${y.label}</button>`)}
    </section>`}renderProCard(){let e=this.hass?.language;if(ce("energy_pro"))return b`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${Jt(e,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
      </section>`;let t=new URL("./images/solar-pro.jpg",import.meta.url).href;return b`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>⚡ ${this.t("pro_name_energy_pro")}</b><a class="fp3d-btn fp3d-primary" href=${yt(e)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
      <img src=${t} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
      <div class="fp3d-actions"><a class="fp3d-btn" href=${Jt(e,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`}addEnergyDevice(e){let t=this.floor;if(!t||!this.isAdmin)return;if(e==="grid_point"){let g=vi(this._doc),[w,x,k]=Ce(e),[z,R]=g?g.end:this.toWorld(this._size.w/2,this._size.h/2),$={id:U("furniture"),type:e,x:M(z),z:M(R),rotation:0,w,d:x,h:k,variant:null};this.change((F,S)=>S.furniture.push($)),this.selectItem("furniture",$.id),this.showPoint($.x,$.z);return}let n=g=>`${g.name} ${g.area_id&&this.hass?.areas?.[g.area_id]?.name||""} ${g.area_id??""}`.toLowerCase(),i=t.rooms.filter(g=>g.points.length>=3),r=g=>i.find(w=>g.test(n(w))),o=i.find(g=>t.furniture.some(w=>w.type==="parking"&&C([w.x,w.z],g.points))),a=r(/garage|carport/)??o,l=r(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),d=r(/flur|diele|eingang|hall|entr|lobby/),c=(e==="wallbox"?a:e==="meter"?l??d??a:l??a)??this.room??i.sort((g,w)=>Math.abs(J(w.points))-Math.abs(J(g.points)))[0],[u,h,p]=Ce(e),[_,f]=c?_e(c.points):this.toWorld(this._size.w/2,this._size.h/2);if(c){let[g,w]=_e(c.points),x=null,k=new Set(t.openings.filter($=>$.room_id===c.id).map($=>$.edge)),z=c.points.some(($,F)=>!k.has(F));c.points.forEach(($,F)=>{if(z&&k.has(F))return;let S=c.points[(F+1)%c.points.length],E=Math.hypot(S[0]-$[0],S[1]-$[1]);if(x&&E<=x.l)return;let T=($[0]+S[0])/2,D=($[1]+S[1])/2,L=-(S[1]-$[1])/E,H=(S[0]-$[0])/E;(g-T)*L+(w-D)*H<0&&([L,H]=[-L,-H]),x={mx:T,mz:D,nx:L,nz:H,l:E}});let R=x;R&&([_,f]=[R.mx+R.nx*(h/2+.25),R.mz+R.nz*(h/2+.25)])}let m={id:U("furniture"),type:e,x:M(_),z:M(f),rotation:0,w:u,d:h,h:p,variant:null},y=c?Qt({...t,furniture:[...t.furniture,m]},m,this._doc.settings.wall_interior):null;y&&Object.assign(m,{x:M(y.x),z:M(y.z),rotation:y.rotation}),this.change((g,w)=>w.furniture.push(m)),this.selectItem("furniture",m.id),this.showPoint(m.x,m.z)}renderEnergyDevices(){let e=this.isAdmin,t=this._doc.floors.flatMap(n=>n.furniture.filter(i=>ve.includes(i.type)).map(i=>({fl:n,m:i})));return b`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${t.length?b`<div class="fp3d-room-list">
            ${t.map(({fl:n,m:i})=>b`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}}
                >
                  <span>${i.name||this.t(`furn_${i.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:v}
      <div class="fp3d-actions">
        ${ve.map(n=>b`<button
            class="fp3d-btn"
            ?disabled=${!e||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(e){let t=this.isAdmin,n=h=>this.updateRoofSection(h),i=e.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[r,o]=e.flip?[i[1],i[0]]:i,a=e.shape==="flat"||e.shape==="parapet",l=e.shape==="pent",d=h=>h.findIndex(p=>p.id===e.id)+1,c=(h,p,_,f=.05,m=0)=>this.num(h,p,y=>_(Math.max(m,M(y))),f,m),u=!!this._doc.settings.lock_plan;return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${e.dormer?this.t("roof_dormer"):this.t("roof_section")} ${d(this._doc.settings.roof.sections??[])}</h3>
          ${t?u?b`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!e.locked})}>
                  ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:v}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!t} @change=${h=>n({shape:h.target.value})}>
            ${cr.map(h=>b`<option value=${h} ?selected=${e.shape===h}>${this.t(`roof_shape_${h}`)}</option>`)}
          </select>
        </label>
        ${a?v:b`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${e.axis==="x"} ?disabled=${!t} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${e.axis==="z"} ?disabled=${!t} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${h=>n({open:h.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${a?c(this.t("roof_height"),e.eave_a,h=>n({eave_a:h,eave_b:h})):b`${c(`${this.t("roof_eave")} ${l?"":r}`,e.eave_a,h=>n({eave_a:h}))}
              ${l?v:c(`${this.t("roof_eave")} ${o}`,e.eave_b,h=>n({eave_b:h}))}
              ${c(`${this.t("roof_pitch_short")} ${l?"":r}`,e.pitch_a,h=>n({pitch_a:Math.min(75,h)}),1,0)}
              ${l?v:c(`${this.t("roof_pitch_short")} ${o}`,e.pitch_b,h=>n({pitch_b:Math.min(75,h)}),1,0)}`}
          ${c(this.t("roof_base"),e.base,h=>n({base:h}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!t}
              @change=${h=>{let p=this._doc.floors.find(m=>m.id===h.target.value);if(!p)return;let _=M(p.elevation+p.height),f=_-e.base;n({base:_,eave_a:M(e.eave_a+f),eave_b:M(e.eave_b+f)})}}
            >
              ${[...this._doc.floors].filter(h=>h.rooms.length).sort((h,p)=>p.elevation-h.elevation).map(h=>b`<option value=${h.id} ?selected=${xo(this._doc,e)?.id===h.id}>${h.name}</option>`)}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${c(this.t("roof_overhang"),e.overhang??this._doc.settings.roof.overhang,h=>n({overhang:Math.min(2,h)}),.05,0)}
        </div>
        ${a&&t?b`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${e.points?b`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:v}
            </div>
            <p class="fp3d-sub">${this.t(e.points?"roof_points_hint":"roof_outline_hint")}</p>`:v}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${j(this.hass,en(e),2)} m · ${this.t("roof_section_hint")}</p>
        ${t?b`<div class="fp3d-actions">
              ${a?v:b`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!e.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!a&&!e.dormer&&!e.open?b`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${r}</button>
                  ${l?v:b`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${o}</button>`}`:v}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:v}
      </section>`}fixItem(e,t,n){if(e)switch(t){case"room":return e.rooms.find(i=>i.id===n);case"opening":return e.openings.find(i=>i.id===n);case"furniture":return e.furniture.find(i=>i.id===n);case"device":return e.placements.find(i=>i.entity_id===n);case"wall":return(e.walls??[]).find(i=>i.id===n);case"outdoor":return e.outdoor.find(i=>i.id===n)}}isFixedItem(e,t){return Pn(this.fixItem(this.floor,e,t),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,t){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let n=!this.isFixedItem(e,t);this.change((i,r)=>{let o=this.fixItem(r,e,t);o&&(o.locked=n)})}toggleLockPlan(){this.isAdmin&&this.change(e=>e.settings.lock_plan=!e.settings.lock_plan)}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(e,t){return!this.isFixedItem(e,t)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,t){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...t),i=_=>e.closest(`[${_}]`)?.getAttribute(_)??null,r=null,o=i("data-device"),a=i("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),d=i("data-free-wall"),c=i("data-outdoor"),u=i("data-room")??this.roomAt(n);if(o?r=["device",o]:a?r=["opening",a]:l?r=["furniture",l]:d?r=["wall",d]:c&&!u?r=["outdoor",c]:u&&(r=["room",u]),!r){this._ctx=null;return}let[h,p]=r;this.selectItem(h,p),(h==="opening"||h==="furniture")&&(this._roomId=this._roomId??u),this._ctx={x:t[0],y:t[1],kind:h,id:p}}deleteItem(e,t){if(e==="device"){if(!this.confirmFixedDelete(e,t))return;this.removeDevice(t),this._deviceId=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return v;let t=this.isFixedItem(e.kind,e.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),i=Math.max(4,Math.min(e.x,(n?.clientWidth??800)-190)),r=Math.max(4,Math.min(e.y,(n?.clientHeight??600)-190)),o=a=>()=>{this._ctx=null,a()};return b`<div class="fp3d-ctx" style=${`left:${i}px;top:${r}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?b`<button title=${this.t("fix_hint")} @click=${o(()=>this.toggleFixed(e.kind,e.id))}>${t?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:b`<button title=${this.t("lock_plan_hint")} @click=${o(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?b`<button @click=${o(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:v}
      ${e.kind==="furniture"?b`<button @click=${o(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${t} @click=${o(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${t} @click=${o(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>`:v}
      <button class="fp3d-ctx-danger" @click=${o(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,t){if(!this.isAdmin)return v;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?b`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:v;let n=this.isFixedItem(e,t);return b`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,t)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(e,t){if(this._notice=null,t&&(this._sideOpen=!0),this._outdoorId=e==="outdoor"?t:null,this._wallId=e==="wall"?t:null,this._edgeHi=null,(e==="outdoor"||e==="wall")&&(this._roomId=null),(e!=="room"||t!==this._roomId)&&(this._vertex=null),this._roomId=e==="room"?t:this._roomId,this._openingId=e==="opening"?t:null,this._furnitureId=e==="furniture"?t:null,this._deviceId=e==="device"?t:null,e==="furniture"&&t&&this._tool==="furniture"&&(this._furnPane="properties"),e==="device"&&t){let n=this.floor?.placements.find(i=>i.entity_id===t);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}e==="opening"&&t&&(this._roomId=this.floor?.openings.find(n=>n.id===t)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(e,t,n,i,r){let o=e.points[t],a=e.points[(t+1)%e.points.length],l=Math.hypot(a[0]-o[0],a[1]-o[1])||1,d=((n[0]-o[0])*(a[0]-o[0])+(n[1]-o[1])*(a[1]-o[1]))/l,c=r?.01:this._doc.settings.grid,u=Math.min(i,l)/2;return M(Math.min(l-u,Math.max(u,Math.round(d/c)*c)))}placeOpening(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let f of n.walls??[]){let m=Qe({room_id:"",edge:0,wall:f.id},n.rooms,n.walls??[]);if(!m)continue;let[y,g]=this.toScreen(f.a),[w,x]=this.toScreen(f.b),k=(w-y)**2+(x-g)**2||1,z=Math.min(1,Math.max(0,((t[0]-y)*(w-y)+(t[1]-g)*(x-g))/k)),R=Math.hypot(t[0]-y-(w-y)*z,t[1]-g-(x-g)*z),$=[(f.a[0]+f.b[0])/2,(f.a[1]+f.b[1])/2],F=n.rooms.find(S=>S.points.length>=3&&C($,S.points));R<un*2.2&&(!i||R-1<i.d)&&(i={room:m.room,edge:0,d:R-1,wall:f.id,roomId:F?.id??f.id})}for(let f of n.rooms)for(let m=0;m<f.points.length;m++){let[y,g]=this.toScreen(f.points[m]),[w,x]=this.toScreen(f.points[(m+1)%f.points.length]),k=(w-y)**2+(x-g)**2||1,z=Math.min(1,Math.max(0,((t[0]-y)*(w-y)+(t[1]-g)*(x-g))/k)),R=Math.hypot(t[0]-y-(w-y)*z,t[1]-g-(x-g)*z),$=R-(f.id===this._roomId?.5:0);R<un*2.2&&(!i||$<i.d)&&(i={room:f,edge:m,d:$})}if(!i)return!1;let{room:r,edge:o,wall:a}=i,l=r.points[o],d=r.points[(o+1)%r.points.length],c=Math.hypot(d[0]-l[0],d[1]-l[1]),u=Ut[e],h=u.type,p=M(Math.min(u.width,Math.max(.3,c-.1))),_={id:U("opening"),room_id:i.roomId??r.id,edge:o,...a?{wall:a}:{},offset:this.offsetOnEdge(r,o,this.toWorld(...t),p,!1),width:p,type:h,sill:u.sill,height:u.height,hinge:"left",leaves:u.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((f,m)=>m.openings.push(_)),this._tool="select",this.selectItem("opening",_.id),!0}setOpeningPreset(e,t){let n=Ut[t];this._openingPreset=t;let i=Un(e)===t,r="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:r,...i?{}:{width:n.width}})}updateOpening(e){let t=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(r=>r.id===t),e))}deleteOpening(){let e=this._openingId;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((t,n)=>n.openings=n.openings.filter(i=>i.id!==e)),this._openingId=null)}furnitureFor(e){let t=B(e),n=this.hass?.language??"en",i=[...dn.map(a=>({type:a.id,label:this.t(a.nameKey)})),...(this.packs??[]).flatMap(a=>a.items.map(l=>({type:qe(a.id,l.id),label:`${Re(l,n)} \xB7 ${a.name}`})))],r=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,o=a=>t==="light"?se(a):t==="climate"?a==="radiator"||a==="air_conditioner"||a==="wall_thermostat"||a==="heat_pump_outdoor"||a==="hot_water_tank":e.startsWith("humidifier.")?a==="humidifier":e.startsWith("water_heater.")?a==="hot_water_tank"||a==="water_heater":e.startsWith("vacuum.")?a==="robot_vacuum":e.startsWith("lawn_mower.")?a==="robot_mower":e.startsWith("siren.")||e.startsWith("alarm_control_panel.")?a==="siren_alarm":t==="binary"&&this.hass?.states[e]?.attributes.device_class==="smoke"?a==="smoke_detector":t==="media"?Xt(a)||ht(a)&&r.test(a):ht(a)&&!se(a);return i.filter(a=>o(a.type)).sort((a,l)=>a.label.localeCompare(l.label))}vehicleToSpot(e){if(!this.isAdmin)return;let[t,n,i]=Ce("parking"),r={id:U("furniture"),type:"parking",x:e.x,z:e.z,rotation:e.rotation,w:Math.max(t,M(e.w+.5)),d:Math.max(n,M(e.d+.4)),h:i,variant:null,vehicle:e.type,...e.name?{name:e.name}:{}};this.change((o,a)=>{a.furniture=a.furniture.filter(l=>l.id!==e.id),a.furniture.push(r)}),this.selectItem("furniture",r.id)}deviceToFurniture(e,t){if(!this.isAdmin)return;let[n,i,r]=Ce(t),o={id:U("furniture"),type:t,x:e.x,z:e.z,rotation:e.rotation??0,w:n,d:i,h:r,variant:null,entity:e.entity_id,name:e.name??null,...e.locked?{locked:!0}:{}};this.change((a,l)=>{l.placements=l.placements.filter(d=>d.entity_id!==e.entity_id),l.furniture.push(o)}),this._deviceId=null,this.selectItem("furniture",o.id)}furnitureToDevice(e){let t=e.entity;if(!this.isAdmin||!t||t==="none")return;let n={entity_id:t,x:e.x,z:e.z,y:null,rotation:e.rotation,...e.name?{name:e.name}:{}};this.change((i,r)=>{r.furniture=r.furniture.filter(o=>o.id!==e.id),r.placements.some(o=>o.entity_id===t)||r.placements.push(n)}),this._furnitureId=null,this.selectItem("device",t)}renderAsFurniture(e){if(!this.isAdmin)return v;let t=this.furnitureFor(e.entity_id);return t.length?b`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${n=>{let i=n.target.value;i&&this.deviceToFurniture(e,i)}}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${t.map(n=>b`<option value=${n.type}>${n.label}</option>`)}
      </select></label
    >`:v}addFurniture(e){let t=this.floor;if(!t||!this.isAdmin)return;let[n,i,r]=Ce(e),o=this._doc.floors.filter(h=>h.elevation>t.elevation).sort((h,p)=>h.elevation-p.elevation)[0],a=e==="stairs"||e==="stairs_landing"?M(o?o.elevation-t.elevation:t.height+.25):r,l=this.room,[d,c]=l?_e(l.points):this.toWorld(this._size.w/2,this._size.h/2),u={id:U("furniture"),type:e,x:M(d),z:M(c),rotation:0,w:n,d:i,h:a,variant:null};this.change((h,p)=>p.furniture.push(u)),this.selectItem("furniture",u.id),this.showPoint(u.x,u.z)}snapToWall(e){return this.floor?Qt(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let t=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(r=>r.id===t),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}rotateFurniture(e){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({rotation:((t.rotation+e)%360+360)%360})}deleteFurniture(){let e=this._furnitureId;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((t,n)=>n.furniture=n.furniture.filter(i=>i.id!==e)),this._furnitureId=null)}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:U("furniture"),x:M(e.x+.3),z:M(e.z+.3)};this.change((n,i)=>i.furniture.push(t)),this.selectItem("furniture",t.id)}placeDevices(e){let t=this.room;if(!t||!e.length||!this.isAdmin)return;let n=new Set(e);this.change((i,r)=>{for(let a of i.floors)a.placements=a.placements.filter(l=>!n.has(l.entity_id)),a.furniture=a.furniture.filter(l=>!(se(l.type)&&l.entity&&n.has(l.entity)));let o=[...r.placements.map(a=>[a.x,a.z]),...r.furniture.filter(a=>se(a.type)).map(a=>[a.x,a.z])];for(let a of Lr(t,e,o)){if(!a.entity_id.startsWith("light.")){r.placements.push(a);continue}let[l,d,c]=ne.lamp_ceiling;r.furniture.push({id:U("furniture"),type:"lamp_ceiling",x:a.x,z:a.z,rotation:0,w:l,d,h:c,variant:null,entity:a.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(e){let t=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(r=>r.entity_id===t),e))}centreDevice(){let e=this.device,t=e?this.roomAt([e.x,e.z]):null,n=this.floor?.rooms.find(o=>o.id===t);if(!e||!n)return;let[i,r]=_e(n.points);this.updateDevice({x:M(i),z:M(r)})}spreadCeilingLights(e){let t=this.floor;if(!t)return;let n=t.placements.filter(u=>B(u.entity_id)==="light"&&(u.mount??"ceiling")==="ceiling"&&C([u.x,u.z],e.points));if(n.length<2)return;let i=ae(e.points),r=i.x1-i.x0,o=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*r/Math.max(.1,o)))),l=Math.ceil(n.length/a),d=n.map((u,h)=>{let p=Math.floor(h/a),_=p===l-1?n.length-a*(l-1):a,f=h-p*a;return[M(i.x0+r/_*(f+.5)),M(i.z0+o/l*(p+.5))]}),c=n.map(u=>u.entity_id);this.change((u,h)=>{c.forEach((p,_)=>Object.assign(h.placements.find(f=>f.entity_id===p),{x:d[_][0],z:d[_][1]}))})}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,gaps:n}=Qr(e.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=Jr(n);this.change((r,o)=>{o.rooms=t,i&&(r.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:j(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(e){this.change(t=>{for(let n of t.floors)n.placements=n.placements.filter(i=>i.entity_id!==e),n.furniture=n.furniture.filter(i=>!(se(i.type)&&i.entity===e))})}deleteVertex(e){let t=this.room;if(!t||t.points.length<=3)return;let n=t.points.length,i=(e-1+n)%n;this.change((r,o)=>{let a=o.rooms.find(l=>l.id===t.id);a.points.splice(e,1),a.wall_heights&&a.wall_heights.splice(e,1),a.wall_thickness&&a.wall_thickness.splice(e,1),o.openings=o.openings.filter(l=>l.room_id!==t.id||l.wall||l.edge!==e&&l.edge!==i).map(l=>l.room_id===t.id&&!l.wall&&l.edge>e?{...l,edge:l.edge-1}:l)}),this._vertex=null}shiftFloor(e,t){if(!this.isAdmin||!e&&!t)return;let n=r=>[M(r[0]+e),M(r[1]+t)],i=r=>{for(let o of r.rooms)o.points=o.points.map(n);for(let o of r.furniture)o.x=M(o.x+e),o.z=M(o.z+t);for(let o of r.placements)o.x=M(o.x+e),o.z=M(o.z+t);for(let o of r.outdoor)o.points=o.points.map(n);for(let o of r.walls??[])o.a=n(o.a),o.b=n(o.b);r.background&&(r.background.x=M(r.background.x+e),r.background.z=M(r.background.z+t))};this._shiftAll?this.change(r=>{for(let o of r.floors)i(o);this.moveHouseExtras(r,n)}):this.change((r,o)=>i(o)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(e,t){for(let i of e.settings.roof.sections??[]){let r=[t([i.x0,i.z0]),t([i.x1,i.z0]),t([i.x1,i.z1]),t([i.x0,i.z1])];i.x0=Math.min(...r.map(o=>o[0])),i.x1=Math.max(...r.map(o=>o[0])),i.z0=Math.min(...r.map(o=>o[1])),i.z1=Math.max(...r.map(o=>o[1])),i.points&&(i.points=i.points.map(t))}for(let i of e.settings.roof.cables??[])i.points=i.points.map(t);e.energy.meter&&([e.energy.meter.x,e.energy.meter.z]=t([e.energy.meter.x,e.energy.meter.z]));let n=e.settings.roof.hologram;n&&n.place==="free"&&n.x!=null&&n.z!=null&&([n.x,n.z]=t([n.x,n.z]))}turnFloor(){let e=this.floor;if(!e||!this.isAdmin)return;let t=(this._shiftAll?this._doc.floors:[e]).flatMap(d=>d.rooms.flatMap(c=>c.points));if(!t.length)return;let n=t.map(d=>d[0]),i=t.map(d=>d[1]),r=(Math.min(...n)+Math.max(...n))/2,o=(Math.min(...i)+Math.max(...i))/2,a=d=>[M(r-(d[1]-o)),M(o+(d[0]-r))],l=d=>{for(let c of d.rooms)c.points=c.points.map(a);for(let c of d.furniture)[c.x,c.z]=a([c.x,c.z]),c.rotation=(c.rotation+90)%360;for(let c of d.placements)[c.x,c.z]=a([c.x,c.z]),c.rotation=((c.rotation??0)+90)%360;for(let c of d.outdoor)c.points=c.points.map(a);for(let c of d.walls??[])c.a=a(c.a),c.b=a(c.b);d.background&&([d.background.x,d.background.z]=a([d.background.x,d.background.z]),d.background.rotation=((d.background.rotation??0)+90)%360)};this._shiftAll?this.change(d=>{for(let c of d.floors)l(c);this.moveHouseExtras(d,a)}):this.change((d,c)=>l(c))}updateFloor(e){this.change((t,n)=>Object.assign(n,e))}updateRoom(e){let t=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(r=>r.id===t),e))}setArea(e){let t=this.room;if(!t)return;let n=e?this.hass?.areas?.[e]:void 0,i=!t.name||/^(Raum|Room) \d+$/.test(t.name)||Object.values(this.hass?.areas??{}).some(r=>r.name===t.name);this.updateRoom({area_id:e||null,...n&&i?{name:n.name}:{}})}setRect(e,t){let n=this.room;if(!n||!Number.isFinite(t))return;let i=ae(n.points),{x0:r,z0:o,x1:a,z1:l}=i;e==="x"&&([r,a]=[t,t+(a-r)]),e==="z"&&([o,l]=[t,t+(l-o)]),e==="w"&&t>.05&&(a=r+t),e==="d"&&t>.05&&(l=o+t),this.updateRoom({points:[[M(r),M(o)],[M(a),M(o)],[M(a),M(l)],[M(r),M(l)]]})}setPoint(e,t,n){let i=this.room;if(!i||!Number.isFinite(n))return;let r=i.points.map(o=>[...o]);r[e][t]=M(n),this.updateRoom({points:r})}async loadImage(e){this.loadingImages.add(e);try{let t=await Mn(this.hass,e),n=new Image;n.src=t,await n.decode(),this._images={...this._images,[e]:{url:t,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(e){let t=e.target,n=t.files?.[0];if(t.value="",!n)return;let i=await createImageBitmap(n),r=Math.min(1,2048/Math.max(i.width,i.height)),o=document.createElement("canvas");o.width=Math.round(i.width*r),o.height=Math.round(i.height*r),o.getContext("2d").drawImage(i,0,0,o.width,o.height);let a=o.toDataURL("image/jpeg",.85),l=U("img");await Ct(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:o.height/o.width}};let d=this.floor?.rooms.length?ae(this.floor.rooms.flatMap(c=>c.points)):null;this.updateFloor({background:{image_id:l,x:d?d.x0:0,z:d?d.z0:0,width:d?Math.max(4,M(d.x1-d.x0)):12,opacity:.5}})}chooseTool(e){this._tool=e,this._draft=[],this._cursor=null,this._preview=null,this._sideOpen=e!=="select",e==="furniture"&&(this._furnPane="library"),e==="settings"&&this.selectItem("room",null),this.closeToolMenus()}closeToolMenus(e){for(let t of this.renderRoot.querySelectorAll(".fp3d-tool-menu[open], .fp3d-mobile-tools[open]"))t!==e&&(t.open=!1)}onToolMenuToggle(e){let t=e.currentTarget;t.open&&this.closeToolMenus(t)}render(){let e=this.floor,t=e?oe(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return b`
      ${this.renderPreview()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <button
              class="fp3d-toolbar-button fp3d-desktop-tool"
              aria-pressed=${this._tool==="select"}
              ?disabled=${!e}
              @click=${()=>this.chooseTool("select")}
            >
              ${this.t("tool_select")}
            </button>
            ${Si.map(n=>{let i=n.tools.includes(this._tool),r=i?this.t(`tool_${this._tool}`):this.t(`tool_group_${n.key}`);if(n.tools.length===1){let o=n.tools[0];return b`<button
                    class="fp3d-toolbar-button fp3d-desktop-tool"
                    aria-pressed=${this._tool===o}
                    ?disabled=${!e&&o!=="settings"||!this.isAdmin&&o!=="select"}
                    @click=${()=>this.chooseTool(o)}
                  >
                    ${r}
                  </button>`}return b`<details class="fp3d-tool-menu fp3d-desktop-tool" @toggle=${this.onToolMenuToggle}>
                  <summary class=${i?"fp3d-active":""} aria-current=${i?"true":v}>${r}<span aria-hidden="true">▾</span></summary>
                  <div class="fp3d-tool-popover" role="group" aria-label=${this.t(`tool_group_${n.key}`)}>
                  ${n.tools.map(o=>b`<button
                      aria-pressed=${this._tool===o}
                      ?disabled=${!e&&o!=="settings"||!this.isAdmin&&o!=="select"}
                      @click=${()=>this.chooseTool(o)}
                    >
                      ${this.t(`tool_${o}`)}
                    </button>`)}
                  </div>
                </details>`})}
            <details class="fp3d-mobile-tools" @toggle=${this.onToolMenuToggle}>
              <summary class="fp3d-toolbar-button fp3d-active">${this.t(`tool_${this._tool}`)}<span aria-hidden="true">▾</span></summary>
              <div class="fp3d-mobile-sheet">
                <div class="fp3d-mobile-sheet-handle" aria-hidden="true"></div>
                <button aria-pressed=${this._tool==="select"} ?disabled=${!e} @click=${()=>this.chooseTool("select")}>${this.t("tool_select")}</button>
                ${Si.map(n=>b`<section>
                    <h3>${this.t(`tool_group_${n.key}`)}</h3>
                    <div>
                      ${n.tools.map(i=>b`<button
                          aria-pressed=${this._tool===i}
                          ?disabled=${!e&&i!=="settings"||!this.isAdmin&&i!=="select"}
                          @click=${()=>this.chooseTool(i)}
                        >
                          ${this.t(`tool_${i}`)}
                        </button>`)}
                    </div>
                  </section>`)}
              </div>
            </details>
            <div class="fp3d-toolbar-actions" role="group" aria-label=${this.t("tool_group_actions")}>
              <button class="fp3d-icon-button" ?disabled=${!this._canUndo} @click=${()=>this.undo()} title=${`${this.t("undo")} \xB7 Ctrl+Z`} aria-label=${this.t("undo")}>↶</button>
              <button class="fp3d-icon-button" ?disabled=${!this._canRedo} @click=${()=>this.redo()} title=${`${this.t("redo")} \xB7 Ctrl+Y`} aria-label=${this.t("redo")}>↷</button>
              <button class="fp3d-icon-button fp3d-desktop-action" @click=${()=>this.fit()} title=${this.t("fit")} aria-label=${this.t("fit")}>⛶</button>
              <button class="fp3d-icon-button" aria-pressed=${this._split} title=${this.t("split_3d_hint")} aria-label=${this.t("split_3d")} @click=${()=>this.toggleSplit()}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="3.5" width="19" height="17" rx="2.5"></rect><path d="M12 4v16"></path></svg>
              </button>
              ${this.isAdmin?b`<button
                    class="fp3d-icon-button fp3d-desktop-action"
                    aria-pressed=${!!this._doc.settings.lock_plan}
                    title=${this._doc.settings.lock_plan?this.t("plan_unlock"):this.t("lock_plan_hint")}
                    aria-label=${this._doc.settings.lock_plan?this.t("plan_unlock"):this.t("plan_lock")}
                    @click=${()=>this.toggleLockPlan()}
                  >${this._doc.settings.lock_plan?"\u{1F513}":"\u{1F512}"}</button>`:v}
              <button
                class="fp3d-icon-button fp3d-settings-button"
                aria-pressed=${this._tool==="settings"}
                ?disabled=${!this.isAdmin}
                title=${this.t("project_settings")}
                aria-label=${this.t("project_settings")}
                @click=${()=>this.chooseTool("settings")}
              >⚙</button>
            </div>
            ${t?.warnings.length?b`<span class="fp3d-warn" title=${this.t("overlap_warning")} aria-label=${this.t("overlap_warning")}>⚠</span>`:v}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this.houseTool?b`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:v}
            <svg
              class="fp3d-plan fp3d-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${()=>{this.drag||(this._cursor=null)}}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
            >
              ${this.renderBackground(e)} ${this.renderGrid()} ${this.renderGhost()} ${t?this.renderWalls(t.walls):v}
              ${e?this.renderOutdoor(e):v} ${e?this.renderRooms(e):v} ${e?this.renderFurniture(e):v}
              ${e?this.renderFreeWalls(e):v}
              ${e&&t?this.renderOpenings(e,t.walls):v} ${e?this.renderMeter(e):v}
              ${e&&this._tool==="select"?this.renderDevices(e):v}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):v}
              ${e?this.renderOutdoorHandles(e):v}
              ${this.room&&this._tool==="select"?this.renderSplitMarks(this.room):v}
              ${e?this.renderHeadroom(e):v}
              ${this._tool==="roof"?I`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?I`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:v} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${e?this._fixedHint?this.t("fixed_drag_hint"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?b`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:v}
          ${this._split?this.render3d():v}
          </div>
        </div>
        ${this.renderAside(e)}
      </div>
    `}renderBackground(e){let t=e?.background,n=t?this._images[t.image_id]:void 0;if(!t||!n)return v;let[i,r]=this.toScreen([t.x,t.z]),o=t.width*this._view.scale,a=o*n.aspect,l=t.rotation??0,d=this._bgEdit&&this.isAdmin;return I`<g transform="rotate(${l} ${i+o/2} ${r+a/2})">
      <image href=${n.url} x=${i} y=${r} width=${o} height=${a} opacity=${t.opacity} preserveAspectRatio="none" pointer-events=${d?"auto":"none"} data-bg="1" style=${d?"cursor:move":""} />
      ${d?I`<rect class="fp3d-bg-frame" x=${i} y=${r} width=${o} height=${a} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${i+o} cy=${r+a} r="9" />`:v}
    </g>`}bgLocal(e,t,n){let i=e.width*n,r=e.x+e.width/2,o=e.z+i/2,a=-(e.rotation??0)*Math.PI/180,l=t[0]-r,d=t[1]-o;return[r+l*Math.cos(a)-d*Math.sin(a)-e.x,o+l*Math.sin(a)+d*Math.cos(a)-e.z]}renderGrid(){let{scale:e}=this._view,{w:t,h:n}=this._size,i=e>=90?.1:e>=30?.5:1,r=e>=20?1:5,[o,a]=this.toWorld(0,0),[l,d]=this.toWorld(t,n),c=[],u=(_,f)=>{for(let m=Math.ceil(o/_)*_;m<=l;m+=_){let y=this.toScreen([m,0])[0];c.push(I`<line class=${f} x1=${y} y1="0" x2=${y} y2=${n} />`)}for(let m=Math.ceil(a/_)*_;m<=d;m+=_){let y=this.toScreen([0,m])[1];c.push(I`<line class=${f} x1="0" y1=${y} x2=${t} y2=${y} />`)}};i<r&&u(i,"fp3d-grid-minor"),u(r,"fp3d-grid-major");let[h,p]=this.toScreen([0,0]);return c.push(I`<circle class="fp3d-origin" cx=${h} cy=${p} r="3" />`),I`<g pointer-events="none">${c}</g>`}renderGhost(){let e=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,t=e>0?this._doc.floors[e-1]:void 0;return t?I`<g pointer-events="none">${t.rooms.map(n=>I`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:v}renderWalls(e){let t=this.floor?.height??2.5;return I`<g pointer-events="none">${e.map(n=>{let i=n.height!==void 0&&n.height<t-.01,r=`fp3d-wall${n.exterior?" fp3d-wall-ext":""}${i?" fp3d-wall-low":""}`;return I`<polygon class=${r} points=${n.footprint.map(o=>this.toScreen(o).join(",")).join(" ")} />`})}</g>`}edgeParts(e,t){let n=this.floor;if(!n)return[0];let r=oe(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(o=>o.sources.filter(a=>a.room_id===e.id&&a.edge===t).map(a=>a.t0));return r.length?[...new Set(r)].sort((o,a)=>o-a):[0]}setEdgeHeight(e,t,n,i){let r=this.floor;if(!r||!this.isAdmin)return;if(i!==void 0){let l=this.edgeParts(e,t).length;this.change((d,c)=>{let u=c.rooms.find(f=>f.id===e.id);if(!u)return;let h=(u.wall_heights??[]).slice(0,u.points.length);for(;h.length<u.points.length;)h.push(null);let p=h[t],_=Array.isArray(p)?[...p]:new Array(l).fill(typeof p=="number"?p:null);for(;_.length<l;)_.push(null);_[i]=n,h[t]=_.every(f=>f===_[0])?_[0]:_,u.wall_heights=h.every(f=>f===null)?void 0:h});return}let a=oe(r.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},r.walls??[]).walls.filter(l=>l.sources.some(d=>d.room_id===e.id&&d.edge===t)).flatMap(l=>l.sources);a.some(l=>l.room_id===e.id&&l.edge===t)||a.push({room_id:e.id,edge:t,t0:0,t1:0}),this.change((l,d)=>{for(let c of a){let u=d.rooms.find(p=>p.id===c.room_id);if(!u)continue;let h=(u.wall_heights??[]).slice(0,u.points.length);for(;h.length<u.points.length;)h.push(null);h[c.edge]=n,u.wall_heights=h.every(p=>p===null)?void 0:h}})}renderCameraDetections(e){if(!this.hass)return v;let t=this.hass,n=uo(t,e),i=[...new Set(n.map(o=>co(t,o)))],r=ce("camera_cockpit");return b`<p class="fp3d-sub fp3d-wide">
      ${n.length?b`${r?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:i.map(o=>this.t(`detect_${o}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(e,t,n){if(!this.isAdmin)return;let i=e.points,r=Math.hypot(i[(t+1)%i.length][0]-i[t][0],i[(t+1)%i.length][1]-i[t][1]),o=this.edgeParts(e,t),a=n===void 0?0:o[n],l=n===void 0?r:o[n+1]??r;if(l-a<.4)return;let d=Math.round((a+l)/2*100)/100;this.change((c,u)=>{let h=u.rooms.find(f=>f.id===e.id);if(!h)return;let p=(h.wall_splits??[]).slice(0,h.points.length);for(;p.length<h.points.length;)p.push(null);p[t]=[...p[t]??[],d].sort((f,m)=>f-m),h.wall_splits=p;let _=h.wall_heights?.[t];if(Array.isArray(_)){let f=n??0;_.splice(f+1,0,_[f]??null)}})}moveSplit(e,t,n,i){let r=e.points,o=Math.hypot(r[(t+1)%r.length][0]-r[t][0],r[(t+1)%r.length][1]-r[t][1]),a=this.edgeParts(e,t).filter(d=>Math.abs(d-n)>.001&&d>0),l=Math.max(.1,Math.min(o-.1,Math.round(i*100)/100));a.some(d=>Math.abs(d-l)<.1)&&(l=n),this.change((d,c)=>{let h=c.rooms.find(_=>_.id===e.id)?.wall_splits?.[t];if(!h)return;let p=h.findIndex(_=>Math.abs(_-n)<.001);p>=0&&(h[p]=l),h.sort((_,f)=>_-f)})}joinSplit(e,t,n,i){this.change((r,o)=>{let a=o.rooms.find(c=>c.id===e.id);if(!a?.wall_splits?.[t])return;let l=a.wall_splits[t].filter(c=>Math.abs(c-n)>.001);a.wall_splits[t]=l.length?l:null,a.wall_splits.every(c=>!c)&&(a.wall_splits=void 0);let d=a.wall_heights?.[t];Array.isArray(d)&&(d.splice(i,1),d.every(c=>c===d[0])&&(a.wall_heights[t]=d[0]??null))})}renderSplitMarks(e){let t=e.points;return I`${(e.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=t.length)return[];let r=t[i],o=t[(i+1)%t.length],a=Math.hypot(o[0]-r[0],o[1]-r[1])||1,l=(o[0]-r[0])/a,d=(o[1]-r[1])/a;return n.map(c=>{let[u,h]=this.toScreen([r[0]+l*c,r[1]+d*c]);return I`<line class="fp3d-split-mark" x1=${u-d*7} y1=${h+l*7} x2=${u+d*7} y2=${h-l*7} />`})})}`}renderEdgeHeights(e){let t=this.floor.height,n=e.points.length,i=this._doc.settings,r=new Set;for(let a of oe(this.floor.rooms,{exterior:i.wall_exterior,interior:i.wall_interior},this.floor.walls??[]).walls)if(a.exterior)for(let l of a.sources)l.room_id===e.id&&r.add(l.edge);let o=(a,l)=>this.change((d,c)=>{let u=c.rooms.find(p=>p.id===e.id);if(!u)return;let h=(u.wall_thickness??[]).slice(0,u.points.length);for(;h.length<u.points.length;)h.push(null);h[a]=l,u.wall_thickness=h.every(p=>p===null)?void 0:h});return b`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${e.points.flatMap((a,l)=>{let d=e.points[(l+1)%n],c=Math.hypot(d[0]-a[0],d[1]-a[1]),u=e.wall_heights?.[l]??null,h=()=>this._edgeHi=l,p=()=>this._edgeHi=null,_=this.edgeParts(e,l);return(_.length>1?_.map((m,y)=>y):[void 0]).map(m=>{let y=m===void 0?Array.isArray(u)?u[0]??null:u:Array.isArray(u)?u[m]??null:u,g=m===void 0?c:(_[m+1]??c)-_[m],w=x=>this.setEdgeHeight(e,l,x,m);return b`<div
            class="fp3d-edge-height${l===this._edgeHi?" fp3d-edge-on":""}${y!==null?" fp3d-edge-low":""}"
            @mouseenter=${h}
            @mouseleave=${p}
            @focusin=${h}
            @focusout=${p}
          >
            <span
              ><b>${this.t("wall_n",{a:l+1,b:(l+1)%n+1})}${m===void 0?"":` \xB7 ${this.t("wall_part",{n:m+1})}`}</b><br /><span class="fp3d-muted"
                >${j(this.hass,g,2)} m</span
              ></span
            >
            ${y===0?b`<span class="fp3d-muted">${this.t("wall_none")}</span>`:this.num(this.t("wall_height"),y??t,x=>w(x>=t-.005?null:Math.max(.05,x)),.05,.05)}
            ${this.isAdmin&&y!==null?b`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>w(null)}>↥</button>`:v}
            ${this.isAdmin&&y!==0?b`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>w(0)}>${this.t("wall_none")}</button>`:v}
            ${this.isAdmin&&g>=.4?b`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(e,l,m)}>✂</button>`:v}
            ${(m===void 0||m===0)&&y!==0?b`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.num(this.t("edge_thickness"),e.wall_thickness?.[l]??(r.has(l)?i.wall_exterior:i.wall_interior),x=>{let k=r.has(l)?i.wall_exterior:i.wall_interior,z=Math.min(1.5,Math.max(.02,Math.round(x*1e3)/1e3));o(l,Math.abs(z-k)<5e-4?null:z)},.01,.02)}
                  ${this.isAdmin&&e.wall_thickness?.[l]!=null?b`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>o(l,null)}>↺</button>`:v}</span
                >`:v}
            ${m!==void 0&&m>0&&(e.wall_splits?.[l]??[]).some(x=>Math.abs(x-_[m])<.001)?b`<span class="fp3d-wide fp3d-split-row"
                  >${this.num(this.t("wall_split_at"),_[m],x=>this.moveSplit(e,l,_[m],x),.05,.1)}
                  ${this.isAdmin?b`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(e,l,_[m],m)}>⨉</button>`:v}</span
                >`:v}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(e){let t=this._outdoorId?e.outdoor.find(n=>n.id===this._outdoorId):void 0;return!t||!this.isAdmin||this._tool!=="select"||this._doc.settings.lock_plan?v:I`${t.points.map((n,i)=>{let[r,o]=this.toScreen(n);return I`<g class="fp3d-vertex" data-out-vertex=${`${t.id}:${i}`}><circle cx=${r} cy=${o} r="16" class="fp3d-hit" /><circle cx=${r} cy=${o} r="6" /></g>`})}`}renderOutdoor(e){return I`<g>${e.outdoor.map(t=>{let n=t.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,r]=this.toScreen(_e(t.points)),o=ae(t.points),a=Math.min(o.x1-o.x0,o.z1-o.z0)*this._view.scale>40;return I`<g data-outdoor=${t.id} class=${`fp3d-out fp3d-out-${t.type}${t.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?I`<text x=${i} y=${r+4}>${this.t(`out_${t.type}`)}</text>`:v}
      </g>`})}</g>`}renderOutdoorForm(e){let t=this.isAdmin,n=jt(e.points),i=ae(e.points),r=(o,a)=>{let{x0:l,z0:d,x1:c,z1:u}=i;o==="x"&&([l,c]=[a,a+(c-l)]),o==="z"&&([d,u]=[a,a+(u-d)]),o==="w"&&(c=l+Math.max(.1,a)),o==="d"&&(u=d+Math.max(.1,a)),this.updateOutdoor({points:[[l,d],[c,d],[c,u],[l,u]].map(([h,p])=>[M(h),M(p)])})};return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!t} @change=${o=>this.updateOutdoor({type:o.target.value})}>
            ${hr.map(o=>b`<option value=${o} ?selected=${o===e.type}>${this.t(`out_${o}`)}</option>`)}
          </select></label
        >
        ${n?b`${this.num(this.t("x"),i.x0,o=>r("x",o))} ${this.num(this.t("z"),i.z0,o=>r("z",o))}
            ${this.num(this.t("width"),i.x1-i.x0,o=>r("w",o),.01,.1)} ${this.num(this.t("depth"),i.z1-i.z0,o=>r("d",o),.01,.1)}`:v}
        ${Ln(e.type)?this.num(this.t("outdoor_height"),e.height??On[e.type],o=>this.updateOutdoor({height:Math.min(6,Math.max(.1,M(o)))}),.05,.1):v}
        ${this.num(this.t("outdoor_offset"),e.offset??0,o=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,M(o)))||null}),.05)}
        ${e.type!=="pool"?b`${this.num(this.t("outdoor_slope"),e.slope??0,o=>this.updateOutdoor({slope:Math.min(20,Math.max(0,M(o)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!t} @change=${o=>this.updateOutdoor({slope_dir:o.target.value})}>
                  ${Dn.map(o=>b`<option value=${o} ?selected=${o===(e.slope_dir??"x")}>${this.t(`slope_${o.replace("-","n")}`)}</option>`)}
                </select></label
              >`:v}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${e.outline!==!1} ?disabled=${!t} @change=${o=>this.updateOutdoor({outline:o.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${e.type==="fence"||e.type==="pergola"?b`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${o=>this.updateOutdoor({open:o.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:v}
        ${e.type==="pergola"?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.bracing} ?disabled=${!t} @change=${o=>this.updateOutdoor({bracing:o.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:v}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!e.cut} ?disabled=${!t} @change=${o=>this.updateOutdoor({cut:o.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${e.slope?b`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>`:v}
      <details class="fp3d-points" ?open=${!n}>
        <summary>${this.t("points")} (${e.points.length})</summary>
        ${e.points.map((o,a)=>b`<div class="fp3d-point">
            <span class="fp3d-muted">${a+1}</span>
            ${this.num(this.t("x"),o[0],l=>this.setOutdoorPoint(a,0,l))} ${this.num(this.t("z"),o[1],l=>this.setOutdoorPoint(a,1,l))}
            ${t?b`<button class="fp3d-btn" title=${this.t("insert_point")} @click=${()=>this.insertOutdoorPoint(a)}>＋</button>
                  <button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>this.deleteOutdoorPoint(a)}>×</button>`:v}
          </div>`)}
      </details>
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${t?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:v}
    </section>`}renderRooms(e){return I`
      <g>${e.rooms.map(t=>{let n=t.points.map(i=>this.toScreen(i).join(",")).join(" ");return I`<polygon data-room=${t.id} class=${`fp3d-room${Ve(t)?" fp3d-room-covered":""}${t.id===this._roomId?" fp3d-room-sel":""}`} points=${n} />`})}</g>
      <g class="fp3d-covered-structure" pointer-events="none">${e.rooms.map(t=>{let n=Qo(t);if(!n)return v;let i=Math.max(3,Math.min(8,this._view.scale*(t.kind==="canopy"?.08:.07)));return I`${n.railings.map(({a:r,b:o})=>{let[a,l]=this.toScreen(r),[d,c]=this.toScreen(o);return I`<line class="fp3d-covered-rail" x1=${a} y1=${l} x2=${d} y2=${c} stroke-width=${i} />
            <line class="fp3d-covered-rail-edge" x1=${a} y1=${l} x2=${d} y2=${c} />`})}${n.columns.map(r=>{let[o,a]=this.toScreen(r.at),l=Math.max(6,r.size*this._view.scale),d=Math.max(l,(r.baseSize??r.size)*this._view.scale);return I`<rect class="fp3d-covered-column-base" x=${o-d/2} y=${a-d/2} width=${d} height=${d} />
            <rect class="fp3d-covered-column" x=${o-l/2} y=${a-l/2} width=${l} height=${l} />`})}`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${e.rooms.map(t=>{let[n,i]=this.toScreen(_e(t.points));return I`<text class="fp3d-room-name" x=${n} y=${i-2}>${t.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.t("area_m2",{a:j(this.hass,fe(t.points),1)})}</text>`})}</g>
    `}renderEdgeHighlight(){let e=this.room,t=this._edgeHi;if(!e||t===null||t>=e.points.length)return v;let[n,i]=this.toScreen(e.points[t]),[r,o]=this.toScreen(e.points[(t+1)%e.points.length]);return I`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${r} y2=${o} />`}renderMeter(e){let t=this._doc.energy?.meter;if(!t||t.floor_id!==e.id)return v;let[n,i]=this.toScreen([t.x,t.z]);return I`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(e){let t=this._view.scale;return I`<g>${e.furniture.map(n=>{let i=n.id===this._furnitureId,[r,o]=this.toScreen([n.x,n.z]),a=Math.min(n.w,n.d)*t>44,l=n.rotation*Math.PI/180,d=n.d/2+Math.max(.3,26/t),[c,u]=this.toScreen([n.x-Math.sin(l)*d,n.z+Math.cos(l)*d]),[h,p]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),_=(se(n.type)||n.type==="kitchen_display")&&!!n.entity&&n.entity!=="none"&&this.hass?.states[n.entity]?.state==="on";return I`<g data-furniture=${n.id} class=${`fp3d-furn${i?" fp3d-furn-sel":""}${_?" fp3d-furn-lit":""}${ve.includes(n.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${r} ${o}) rotate(${n.rotation}) scale(${n.mirror?-t:t} ${t})">
          <rect class="fp3d-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="fp3d-furn-sym">${Xr(n.type,n.w,n.d)}</g>
          <line class="fp3d-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${a?I`<text x=${r} y=${o+4}>${Pt(this.hass,n.type)}</text>`:v}
      </g>
      ${i&&this.isAdmin&&!n.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([f,m])=>{let[y,g]=this.toScreen(Hn(n,[f,m]));return I`<g class="fp3d-resize" data-resize=${`${n.id}:${f}:${m}`}>
              <circle cx=${y} cy=${g} r="14" class="fp3d-hit" />
              <rect x=${y-5} y=${g-5} width="10" height="10" rx="2" />
            </g>`}):v}
      ${i?(()=>{let[f,m]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/t),n.z-Math.cos(l)*(n.d/2+18/t)]);return I`<text class="fp3d-dim" x=${f} y=${m+4}>${j(this.hass,n.w,2)} × ${j(this.hass,n.d,2)} m</text>`})():v}
      ${i&&n.locked?I`<text class="fp3d-lock" x=${c} y=${u+5}>🔒</text>`:v}
      ${i&&this.isAdmin&&!n.locked?I`<g class="fp3d-rotate" data-rotate=${n.id}>
            <line x1=${h} y1=${p} x2=${c} y2=${u} />
            <circle cx=${c} cy=${u} r="16" class="fp3d-hit" />
            <circle cx=${c} cy=${u} r="8" />
            <path d="M${c-4} ${u-1}a4 4 0 1 1 2 3.5" />
          </g>`:v}`})}</g>`}renderOpenings(e,t){return I`<g>${e.openings.map(n=>{let i=Qe(n,e.rooms,e.walls??[]);if(!i)return v;let{room:r,edge:o}=i,a=oi(t,n,i),l=Xe(r,o,n.offset-n.width/2),d=Xe(r,o,n.offset+n.width/2),c=(d[0]-l[0])/(n.width||1),u=(d[1]-l[1])/(n.width||1),h=J(r.points)>=0?1:-1,p=[-u*h,c*h],_=[.06,.06];a&&(_=a.wall.free||a.wall.roomLeft===r.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]);let f=(z,R)=>this.toScreen([z[0]+p[0]*R,z[1]+p[1]*R]),m=[f(l,_[0]+.01),f(d,_[0]+.01),f(d,-_[1]-.01),f(l,-_[1]-.01)],y=n.id===this._openingId,g=Kt(n,a?.wall.exterior??!1),w=n.type==="door"&&Kn(g),x=`fp3d-open fp3d-open-${n.type}${w?" fp3d-open-front":""}${y?" fp3d-open-sel":""}`,k;if(n.type==="garage"){let z=f(l,_[0]-.04),R=f(d,_[0]-.04),$=f(l,_[0]+Math.min(2,n.height)),F=f(d,_[0]+Math.min(2,n.height));k=I`<line x1=${z[0]} y1=${z[1]} x2=${R[0]} y2=${R[1]} />
          <path class="fp3d-open-track" d="M${z[0]} ${z[1]}L${$[0]} ${$[1]}M${R[0]} ${R[1]}L${F[0]} ${F[1]}" />`}else if(n.type==="door"){let z=n.swing==="out",R=z?-_[1]:_[0],$=n.hinge==="left"==h>0,F=n.leaves===2,S=l,E=d,T=[],D=vr(n.width,g,$,n);if(D){let K=G=>G<=.02?l:G>=n.width-.02?d:Xe(r,o,n.offset-n.width/2+G);S=K(D.x0),E=K(D.x1),T=D.panels.map(([G,q])=>[K(G),K(q)])}let L=[(S[0]+E[0])/2,(S[1]+E[1])/2],H=(F?.5:1)*Math.hypot(E[0]-S[0],E[1]-S[1]),W=(_[0]-_[1])/2,V=T.map(([K,G])=>{let q=f(K,W+.035),Q=f(G,W+.035),ue=f(K,W-.035),it=f(G,W-.035);return I`<line class="fp3d-open-pane" x1=${q[0]} y1=${q[1]} x2=${Q[0]} y2=${Q[1]} /><line class="fp3d-open-pane" x1=${ue[0]} y1=${ue[1]} x2=${it[0]} y2=${it[1]} />`}),N=(K,G)=>{let[q,Q]=f(K,R),[ue,it]=f(G,R),Tt=f(K,R+(z?-H:H)),zi=H*this._view.scale,ds=(Tt[0]-q)*(it-Q)-(Tt[1]-Q)*(ue-q);return I`<path d="M${q} ${Q}L${Tt[0]} ${Tt[1]}A${zi} ${zi} 0 0 ${ds>0?1:0} ${ue} ${it}" />`};k=I`${V}${g==="passage"?I`<line class="fp3d-open-passage" x1=${f(l,W)[0]} y1=${f(l,W)[1]} x2=${f(d,W)[0]} y2=${f(d,W)[1]} />`:g==="sliding"?I`<line x1=${f(S,R)[0]} y1=${f(S,R)[1]} x2=${f(E,R)[0]} y2=${f(E,R)[1]} />`:F?I`${N(S,L)}${N(E,L)}`:N($?S:E,$?E:S)}`}else{let z=(_[0]-_[1])/2,R=f(l,z+.035),$=f(d,z+.035),F=f(l,z-.035),S=f(d,z-.035),E=[(l[0]+d[0])/2,(l[1]+d[1])/2],T=f(E,_[0]),D=f(E,-_[1]);k=I`<line x1=${R[0]} y1=${R[1]} x2=${$[0]} y2=${$[1]} /><line x1=${F[0]} y1=${F[1]} x2=${S[0]} y2=${S[1]} />${n.leaves===2?I`<line x1=${T[0]} y1=${T[1]} x2=${D[0]} y2=${D[1]} />`:v}`}return I`<g data-opening=${n.id} class=${x}>
        <polygon class="fp3d-open-gap" points=${m.map(z=>z.join(",")).join(" ")} />
        ${k}
      </g>`})}</g>`}renderDevices(e){return I`<g>${e.placements.map(t=>{let n=B(t.entity_id);if(!n)return v;let[i,r]=this.toScreen([t.x,t.z]),o=this.hass?.states[t.entity_id]?.state==="on",a=t.entity_id===this._deviceId,l=`fp3d-device${o?" fp3d-device-on":""}${a?" fp3d-device-sel":""}`;return I`${n==="camera"?this.renderCameraWedge(t,a):v}<g data-device=${t.entity_id} class=${l} transform="translate(${i} ${r})">
        <title>${Y(this.hass,t.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${wt(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${a&&t.locked?I`<text class="fp3d-lock" x=${i+16} y=${r-12}>🔒</text>`:v}`})}</g>`}renderCameraWedge(e,t){let n=e.mount==="ceiling",i=e.fov??(n?360:90),r=e.reach??(n?3:4.5),o=(e.rotation??0)*Math.PI/180,a=(w,x)=>this.toScreen([e.x-Math.sin(o+w)*x,e.z+Math.cos(o+w)*x]),[l,d]=this.toScreen([e.x,e.z]),c=Math.min(i,359.9)*Math.PI/180/2,[u,h]=a(-c,r),[p,_]=a(c,r),f=r*this._view.scale,m=i>=360?"":`M${l} ${d}L${u} ${h}A${f} ${f} 0 ${c>Math.PI/2?1:0} 1 ${p} ${_}Z`,[y,g]=a(0,r);return I`<g class="fp3d-wedge ${t?"fp3d-wedge-sel":""}">
      ${i>=360?I`<circle cx=${l} cy=${d} r=${f} />`:I`<path d=${m} />`}
      ${t&&this.isAdmin&&!e.locked?I`<g class="fp3d-rotate" data-aim=${e.entity_id}>
            <line x1=${l} y1=${d} x2=${y} y2=${g} />
            <circle cx=${y} cy=${g} r="16" class="fp3d-hit" />
            <circle cx=${y} cy=${g} r="8" />
            <path d="M${y-4} ${g-1}a4 4 0 1 1 2 3.5" />
          </g>`:v}
    </g>`}renderHandles(e){let t=e.points,n=t.length,i=t.map((o,a)=>{let l=t[(a+1)%n],[d,c]=this.toScreen(o),[u,h]=this.toScreen(l),p=Math.hypot(l[0]-o[0],l[1]-o[1]),_=(d+u)/2,f=(c+h)/2,[m,y]=this.toScreen(_e(t)),g=-(h-c),w=u-d,x=Math.hypot(g,w)||1;g/=x,w/=x,g*(_-m)+w*(f-y)<0&&(g=-g,w=-w);let k=Math.hypot(u-d,h-c);return I`
        ${k>50?I`<text class="fp3d-dim" x=${_+g*16} y=${f+w*16+4}>${j(this.hass,p,2)} m</text>`:v}
        ${k>36?I`<g data-mid=${a} class="fp3d-mid"><circle cx=${_} cy=${f} r="14" class="fp3d-hit" /><circle cx=${_} cy=${f} r="6" /><path d="M${_-3} ${f}h6M${_} ${f-3}v6" /></g>`:v}
      `}),r=t.map((o,a)=>{let[l,d]=this.toScreen(o);return I`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${d} r="16" class="fp3d-hit" /><circle cx=${l} cy=${d} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${d-9}>${a+1}</text>`});return I`<g>${i}${r}</g>`}renderDraft(){let e=this.drag;if(e?.kind==="freewall"){let[n,i]=this.toScreen(e.start),[r,o]=this.toScreen(e.end),a=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return I`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${n} y1=${i} x2=${r} y2=${o} />
        <text class="fp3d-dim" x=${(n+r)/2} y=${(i+o)/2-10}>${j(this.hass,a,2)} m</text>
      </g>`}if(e?.kind==="rect"){let[n,i]=this.toScreen(e.start),[r,o]=this.toScreen(e.end),a=Math.abs(e.end[0]-e.start[0]),l=Math.abs(e.end[1]-e.start[1]);return I`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(n,r)} y=${Math.min(i,o)} width=${Math.abs(r-n)} height=${Math.abs(o-i)} />
        <text class="fp3d-dim" x=${(n+r)/2} y=${Math.min(i,o)-8}>${j(this.hass,a,2)} × ${j(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure")return v;let t=[...this._draft,...this._cursor?[this._cursor]:[]].map(n=>this.toScreen(n));return I`<g pointer-events="none">
      ${t.length>1?I`<polyline class="fp3d-draft" points=${t.map(n=>n.join(",")).join(" ")} />`:v}
      ${this._tool==="measure"?this._draft.slice(1).map((n,i)=>{let r=this.toScreen(this._draft[i]),o=this.toScreen(n);return I`<text class="fp3d-dim" x=${(r[0]+o[0])/2} y=${(r[1]+o[1])/2-6}>${j(this.hass,Math.hypot(n[0]-this._draft[i][0],n[1]-this._draft[i][1]),2)} m</text>`}):v}
      ${this._draft.map((n,i)=>{let[r,o]=this.toScreen(n);return I`<circle class=${i===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${r} cy=${o} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?I`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:v}
    </g>`}renderGuides(){let e=this._guides,{w:t,h:n}=this._size;return I`<g pointer-events="none">
      ${e.x!==void 0?I`<line class="fp3d-guide" x1=${this.toScreen([e.x,0])[0]} y1="0" x2=${this.toScreen([e.x,0])[0]} y2=${n} />`:v}
      ${e.z!==void 0?I`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,e.z])[1]} x2=${t} y2=${this.toScreen([0,e.z])[1]} />`:v}
      ${e.point?I`<circle class="fp3d-snap" cx=${this.toScreen(e.point)[0]} cy=${this.toScreen(e.point)[1]} r="9" />`:v}
    </g>`}num(e,t,n,i=.01,r){return b`<label class="fp3d-field"
      >${e}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${r??v}
        .value=${String(M(t))}
        ?disabled=${!this.isAdmin}
        @change=${o=>{let a=parseFloat(o.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
    /></label>`}selectFrom3d(e,t){this.selectItem(e,t),this._sideOpen=!1}setSidePinned(e){this._sidePinned=e,this._sideOpen=!1;try{localStorage.setItem("neonplan3d.sidePinned",e?"1":"0")}catch{}}renderAside(e){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?b`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(e)}
      </aside>`:b`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this._furnitureId||this._deviceId||this._openingId?b`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>✎</button>`:v}
        <button class="fp3d-strip-btn" title=${this.t("tool_furniture")} @click=${()=>this.chooseTool("furniture")}>🛋</button>
        <button class="fp3d-strip-btn" title=${this.t("tool_opening")} @click=${()=>this.chooseTool("opening")}>🚪</button>
        ${this.isAdmin?b`<button class="fp3d-strip-btn" title=${this.t("tool_settings")} @click=${()=>this.chooseTool("settings")}>⚙</button>`:v}
      </aside>`:b`<aside class="fp3d-side">${this.renderPinRow()}${this.renderSide(e)}</aside>`}renderPinRow(e=!1){return!this._split||this.narrow?v:b`<div class="fp3d-pin-row">
      ${e?b`<button class="fp3d-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:v}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(e){let t=this._doc?.floors??[],n=this.room,i=this.isAdmin,r=Object.values(this.hass?.areas??{}).sort((a,l)=>a.name.localeCompare(l.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="settings"&&i)return this.renderProjectPanel(e);if(this._tool==="furniture"&&e&&i)return this.renderFurniturePanel();let o=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return o?b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${o}`:n&&this._tool!=="measure"?b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,r)} ${this.renderDeviceList(n)}`:b`
      ${i?v:b`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...t].reverse().map(a=>b`<button
              class="fp3d-chip"
              aria-pressed=${a.id===this._floorId}
              @click=${()=>{this._floorId=a.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${a.name}
            </button>`)}
          ${i?b`<button
                class="fp3d-btn"
                aria-expanded=${this._floorMenu}
                @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:this.addFloor()}
              >
                + ${this.t("add_floor")}
              </button>`:v}
        </div>
        ${i&&this._floorMenu?b`<div class="fp3d-floor-menu">
              <p class="fp3d-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(a=>b`<button class="fp3d-btn" @click=${()=>this.addFloor(a)}>
                  ${a.name}${a.level!=null?b` <span class="fp3d-sub">· ${this.t("level",{n:a.level})}</span>`:v}
                </button>`)}
              <button class="fp3d-btn" @click=${()=>this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`:v}
        ${e?b`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${e.name} ?disabled=${!i} @change=${a=>this.updateFloor({name:a.target.value})}
              /></label>
              ${this.num(this.t("elevation"),e.elevation,a=>this.updateFloor({elevation:a}))}
              ${i?b`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${a=>this._shiftX=Number(a.target.value)||0} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${a=>this._shiftZ=Number(a.target.value)||0} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${a=>this._shiftAll=a.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:v}
              ${this.num(this.t("height"),e.height,a=>this.updateFloor({height:Math.max(1,a)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?b`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${a=>this.updateFloor({ha_floor:a.target.value||null})}>
                      <option value="" ?selected=${!e.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(a=>a.floor_id===e.ha_floor||!t.some(l=>l.ha_floor===a.floor_id)).map(a=>b`<option value=${a.floor_id} ?selected=${a.floor_id===e.ha_floor}>${a.name}</option>`)}
                    </select></label
                  >`:v}
              ${i&&this.unplacedAreas(e).length?b`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(e)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(e).length})}
                    </button>
                  </div>`:v}
              ${i?b`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${e.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                  </div>
                  ${this._notice?b`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:v}`:v}
            </div>`:v}
      </section>
      ${this._tool==="measure"&&e?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?b`${this.renderRoomForm(n,r)} ${this.renderDeviceList(n)}`:e?this.renderRoomList(e):v}
    `}renderFurniturePanel(){let e=this.furnitureItem,t=ns(this._furnPane,!!e);return b`
      <div class="fp3d-side-tabs fp3d-seg" role="tablist" aria-label=${this.t("furniture")}>
        <button role="tab" aria-selected=${t==="library"} aria-pressed=${t==="library"} @click=${()=>this._furnPane="library"}>
          ${this.t("furniture_library")}
        </button>
        <button
          role="tab"
          aria-selected=${t==="properties"}
          aria-pressed=${t==="properties"}
          ?disabled=${!e}
          @click=${()=>this._furnPane="properties"}
        >
          ${this.t("furniture_properties")}
        </button>
      </div>
      ${t==="properties"&&e?this.renderFurnitureForm(e):this.renderFurnitureLibrary()}
    `}renderProjectPanel(e){return b`
      <section class="fp3d-project-intro">
        <h3>${this.t("project_settings")}</h3>
        <p class="fp3d-sub">${this.t("project_settings_hint")}</p>
      </section>
      ${this.renderSettings()} ${e?this.renderBackgroundForm(e):v} ${this.renderStartView()} ${this.renderFavorites()}
      ${v} ${this.renderBackup()}
    `}renderRoomList(e){return e.rooms.length?b`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${e.rooms.map(t=>b`<button class="fp3d-row" @click=${()=>this.selectItem("room",t.id)}>
            <span>${t.name}</span><span class="fp3d-muted">${this.t("area_m2",{a:j(this.hass,fe(t.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:v}renderRoomForm(e,t){let n=this.isAdmin,i=Ve(e),r=jt(e.points),o=ae(e.points);return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${e.name} ?disabled=${!n} @change=${a=>this.updateRoom({name:a.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${a=>this.setArea(a.target.value)}>
            <option value="" ?selected=${!e.area_id}>${this.t("no_area")}</option>
            ${t.map(a=>b`<option value=${a.area_id} ?selected=${a.area_id===e.area_id}>${a.name}</option>`)}
          </select></label
        >
        ${i?b`<label class="fp3d-field fp3d-wide"
              >${this.t("outdoor_type")}
              <select ?disabled=${!n} @change=${a=>this.updateRoom({kind:a.target.value})}>
                ${["veranda","balcony","canopy"].map(a=>b`<option value=${a} ?selected=${a===e.kind}>${this.t(`out_${a}`)}</option>`)}
              </select></label
            >`:v}
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${a=>this.updateRoom({floor_material:a.target.value})}>
            ${fr.map(a=>b`<option value=${a} ?selected=${a===e.floor_material}>${this.t(`mat_${a}`)}</option>`)}
          </select></label
        >
        ${r?b`${this.num(this.t("x"),o.x0,a=>this.setRect("x",a))} ${this.num(this.t("z"),o.z0,a=>this.setRect("z",a))}
            ${this.num(this.t("width"),o.x1-o.x0,a=>this.setRect("w",a),.01,.05)}
            ${this.num(this.t("depth"),o.z1-o.z0,a=>this.setRect("d",a),.01,.05)}`:v}
        ${i?b`${e.kind==="veranda"?b`<label class="fp3d-field fp3d-wide"
                      >${this.t("outdoor_roof_style")}
                      <select ?disabled=${!n} @change=${a=>this.updateRoom({roof_style:a.target.value})}>
                        ${["solid","glass","tile"].map(a=>b`<option value=${a} ?selected=${a===(e.roof_style??"solid")}>${this.t(`outdoor_roof_${a}`)}</option>`)}
                      </select></label
                    >`:v}
              ${this.num(this.t("outdoor_height"),e.height??this.floor?.height??2.5,a=>this.updateRoom({height:Math.min(6,Math.max(.1,M(a)))}),.05,.1)}
              ${e.kind!=="balcony"?b`${this.num(this.t("outdoor_slope"),e.slope??0,a=>this.updateRoom({slope:Math.min(20,Math.max(0,M(a)))||null}),.05,0)}
                    <label class="fp3d-field"
                      >${this.t("outdoor_slope_dir")}
                      <select ?disabled=${!n} @change=${a=>this.updateRoom({slope_dir:a.target.value})}>
                        ${Dn.map(a=>b`<option value=${a} ?selected=${a===(e.slope_dir??"x")}>${this.t(`slope_${a.replace("-","n")}`)}</option>`)}
                      </select></label
                    >`:v}
              <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
                ><input type="checkbox" .checked=${e.open!==!1} ?disabled=${!n} @change=${a=>this.updateRoom({open:a.target.checked})} />
                ${this.t("outdoor_open")}</label
              >
              ${e.kind==="veranda"||e.kind==="balcony"||e.kind==="canopy"?b`<label class="fp3d-check fp3d-wide"
                      ><input type="checkbox" .checked=${e.railing!==!1} ?disabled=${!n} @change=${a=>this.updateRoom({railing:a.target.checked})} />
                      ${this.t(e.kind==="canopy"?"outdoor_yard_enclosure":"outdoor_railing")}</label
                    >
                    ${e.kind!=="canopy"?this.num(this.t("outdoor_columns"),e.columns??2,a=>this.updateRoom({columns:Math.min(12,Math.max(0,Math.round(a)))}),1,0):v}`:v}
              ${this.num(this.t("outdoor_column_size"),e.column_size??(e.kind==="canopy"?.12:.32),a=>this.updateRoom({column_size:Math.min(.8,Math.max(.08,M(a)))}),.02,.08)}`:v}
      </div>
      ${i?v:this.renderEdgeHeights(e)} ${this.renderRoomClimate(e)}
      <details class="fp3d-points" ?open=${!r}>
        <summary>${this.t("points")} (${e.points.length})</summary>
        ${e.points.map((a,l)=>b`<div class="fp3d-point ${l===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${l+1}</span>
            ${this.num(this.t("x"),a[0],d=>this.setPoint(l,0,d))} ${this.num(this.t("z"),a[1],d=>this.setPoint(l,1,d))}
            ${n?b`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>this.deleteVertex(l)}>
                  ×
                </button>`:v}
          </div>`)}
      </details>
      ${n?b`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(e)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:v}
      ${this._spots?this.renderSpotForm(e):v}
      ${this._packages?b`<div class="fp3d-packages">
            ${Yo.map(a=>b`<button class="fp3d-btn" @click=${()=>this.applyPackage(e,a)}>
                <b>${this.t(`pkg_${a}`)}</b><span>${this.t(`pkg_${a}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:v}
    </section>`}applyPackage(e,t){if(!this.isAdmin)return;let n=Xo(e,t,()=>U("furniture"));this.change((i,r)=>r.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(e){let t=ae(e.points),n=this.hass?Ae(this.hass,e.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((t.z1-t.z0)/1.2)),cols:Math.max(1,Math.round((t.x1-t.x0)/1.2)),entity:n[0]??null}}placeSpots(e){let t=this._spots;if(!t||!this.isAdmin)return;let[n,i,r]=ne[t.type],o=Vn(e,t.rows,t.cols).map(([a,l])=>({id:U("furniture"),type:t.type,x:a,z:l,rotation:0,w:n,d:i,h:r,variant:null,entity:t.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...o)),this._spots=null,this._notice=this.t("spots_placed",{n:o.length})}renderSpotForm(e){let t=this._spots,n=Vn(e,t.rows,t.cols).length,i=this.entityOptions(o=>/^(light|switch|input_boolean)\./.test(o)),r=o=>this._spots={...t,...o};return b`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${o=>r({type:o.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(o=>b`<option value=${o} ?selected=${o===t.type}>${this.t(`furn_${o}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),t.cols,o=>r({cols:Math.max(1,Math.min(12,Math.round(o)))}),1,1)}
      ${this.num(this.t("spots_rows"),t.rows,o=>r({rows:Math.max(1,Math.min(12,Math.round(o)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),t.entity,void 0,i,o=>r({entity:o==="none"?null:o}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(e)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}iconInput(e,t){let n=e?e.startsWith("mdi:")?e:`mdi:${e}`:"";return b`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!this.isAdmin} @change=${i=>t(i.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?qi(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):v}
      </span></label
    >`}markerSelect(e,t){return b`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>t(n.target.value||null)}>
        <option value="" ?selected=${!e}>${this.t("marker_show_auto")}</option>
        ${lr.map(n=>b`<option value=${n} ?selected=${n===e}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(e){let t=n=>{let i=this.hass?.entities?.[n],r=i?.area_id??(i?.device_id?this.hass?.devices?.[i.device_id]?.area_id:null);return r?this.hass?.areas?.[r]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(e).map(n=>({id:n,label:`${Y(this.hass,n)}${t(n)?` \xB7 ${t(n)}`:""}`})).sort((n,i)=>n.label.localeCompare(i.label))}entitySelect(e,t,n,i,r){let o=n===void 0?null:n?this.t("entity_auto",{name:Y(this.hass,n)}):this.t("entity_auto_none"),a=[...o!==null?[{id:"__auto",label:o}]:[],{id:"none",label:this.t("entity_none")}];return b`<label class="fp3d-field fp3d-wide"
      >${e}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${a}
        .value=${t===null?o!==null?"__auto":"none":t}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${d=>{d.stopPropagation(),r(d.detail.value==="__auto"?null:d.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(e){let t=this.floor,n=t?Qe(e,t.rooms,t.walls??[]):null;if(!t||!n)return!1;let i=oe(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]);return oi(i.walls,e,n)?.wall.exterior??!1}renderSidelightFields(e){if(e.type!=="door")return v;let t=Kt(e,this.openingIsExterior(e));if(t!=="sidelight"&&t!=="sidelights")return v;let n=this.isAdmin,i=(r,o)=>b`<label class="fp3d-field"
      >${this.t(o)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${e[r]==null?"":String(e[r])}
        ?disabled=${!n}
        @change=${a=>{let l=Number(a.target.value);this.updateOpening({[r]:Number.isFinite(l)&&l>0?Math.min(3,Math.max(.1,Math.round(l*100)/100)):null})}}
      />
    </label>`;return t==="sidelight"?b`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!e.sidelight_hinge} ?disabled=${!n} @change=${r=>this.updateOpening({sidelight_hinge:r.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${i("sidelight_width","sidelight_width")}`:b`${i("sidelight_width","sidelight_width_left")} ${i("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(e){let t=e.type==="door"?Bn:Nn,n=Kt({type:e.type,style:null},this.openingIsExterior(e)),i=e.style&&t.includes(e.style)?e.style:"";return b`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${r=>this.updateOpening({style:r.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${t.map(r=>b`<option value=${r} ?selected=${r===i}>${this.t(`style_${r}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(e){let t=this.isAdmin,n=e.type==="window",i=e.type==="garage",r=f=>{if(!this.hass)return null;let m=structuredClone(this._doc.floors);for(let y of m)for(let g of y.openings)g.id===e.id&&(g[f]=null);return Dr(this.hass,m).get(e.id)?.[f]??null},o=f=>this.hass?.states[f]?.attributes.device_class,a=this.entityOptions(f=>f.startsWith("cover.")),l=this.entityOptions(f=>/^(sensor|number|input_number)\./.test(f)&&Number.isFinite(Number(this.hass?.states[f]?.state))),d=this.entityOptions(f=>f.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(o(f)??"")||re(f)&&Jn(this.hass?.states[f])!==null),c=this.entityOptions(f=>{let m=this.hass?.states[f];return f.startsWith("binary_sensor.")?typeof m?.attributes.window_state=="string":re(f)&&(Jn(m)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${f} ${Y(this.hass,f)}`))}),u=this.entityOptions(f=>f.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(o(f)??"")),h=f=>{let m=f===1,y=m?e.tilt:e.tilt2??null,g=m?e.contact:e.contact2,w=(m?e.sensor:e.sensor2)??(y&&y!=="none"?"contact_tilt":"contact"),x=k=>this.updateOpening(m?{contact:k}:{contact2:k==="none"?null:k});return b`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!t}
            @change=${k=>{let z=k.target.value,R=z==="contact_tilt"?{}:m?{tilt:null}:{tilt2:null};this.updateOpening({...m?{sensor:z}:{sensor2:z},...R})}}
          >
            ${["contact","handle","contact_tilt"].map(k=>b`<option value=${k} ?selected=${k===w}>${this.t(`sensor_kind_${k}`)}</option>`)}
          </select></label
        >
        ${w==="handle"?this.entitySelect(this.t("handle_entity"),g,void 0,c,k=>x(k==="none"?m?"none":null:k)):this.entitySelect(this.t("contact_entity"),g,m?r("contact"):void 0,u,x)}
        ${w==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),y,void 0,d,k=>this.updateOpening(m?{tilt:k==="none"?null:k}:{tilt2:k==="none"?null:k})):v}
        ${m?b`${this.entitySelect(this.t("tilt_angle_entity"),e.tilt_angle??null,void 0,this.entityOptions(k=>re(k)),k=>this.updateOpening({tilt_angle:k==="none"?null:k}))}
            ${e.tilt_angle&&e.tilt_angle!=="none"?b`${this.num(this.t("tilt_angle_max"),e.tilt_max??15,k=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,k))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),e.tilt_offset??0,k=>this.updateOpening({tilt_offset:k}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!e.tilt_invert} ?disabled=${!t} @change=${k=>this.updateOpening({tilt_invert:k.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:v}`:v}`},p=Un(e),_=e.type==="door";return b`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${p}`)}</h3>${this.fixButton("opening",e.id)}</div>
      ${t?b`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(Ut).map(f=>b`<button class="fp3d-chip" aria-pressed=${f===p} @click=${()=>this.setOpeningPreset(e,f)}>${this.t(`preset_${f}`)}</button>`)}
          </div>`:v}
      ${t&&!i?b`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:e.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(e.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${_?b`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:e.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:v}
          </div>`:v}
      <div class="fp3d-form">
        ${this.num(this.t("width"),e.width,f=>this.updateOpening({width:Math.max(.3,f)}),.01,.3)}
        ${this.num(this.t("opening_position"),e.offset,f=>this.updateOpening({offset:Math.max(0,f)}),.01,0)}
        ${n?this.num(this.t("sill"),e.sill,f=>this.updateOpening({sill:Math.max(0,f)}),.01,0):v}
        ${this.num(this.t("opening_height"),e.height,f=>this.updateOpening({height:Math.max(.3,f)}),.01,.3)}
        ${i?v:this.renderStyleSelect(e)}
        ${this.renderSidelightFields(e)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${f=>this.updateOpening({mark:f.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${e.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${e.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?v:b`<label class="fp3d-field fp3d-wide"
          >${this.t(e.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!t} @change=${f=>this.updateOpening({hinge:f.target.value})}>
            <option value="left" ?selected=${e.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${e.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i||_?this.entitySelect(this.t(n?"cover_entity":"door_cover"),e.cover,r("cover"),a,f=>this.updateOpening({cover:f})):v}
        ${(n||i||_)&&e.cover!=="none"&&(e.cover||r("cover"))?b`${this.entitySelect(this.t("cover_position_entity"),e.position??null,void 0,l,f=>this.updateOpening({position:f==="none"?null:f}))}
              ${e.position?b`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!t}
                      .checked=${!!e.position_inverted}
                      @change=${f=>this.updateOpening({position_inverted:f.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:v}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!t} .checked=${!!e.confirm} @change=${f=>this.updateOpening({confirm:f.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:v}
        ${n?b`${e.leaves===2?b`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:v}
              ${h(1)} ${e.leaves===2?b`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${h(2)}`:v}`:b`${this.entitySelect(this.t(e.leaves===2?"contact_main":"contact_entity"),e.contact,r("contact"),d,f=>this.updateOpening({contact:f}))}
              ${e.leaves===2&&!i?this.entitySelect(this.t("contact_second"),e.contact2,void 0,d,f=>this.updateOpening({contact2:f==="none"?null:f})):v}
              ${_?b`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!e.shut} ?disabled=${!t} @change=${f=>this.updateOpening({shut:f.target.checked})} />
                    ${this.t("door_shut")}</label
                  >`:v}`}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${t?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:v}
    </section>`}renderFurnitureForm(e){let t=this.isAdmin;return b`<section>
      <div class="fp3d-h3row"><h3>${e.name||this.t("furniture")}</h3>${this.fixButton("furniture",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!t} placeholder=${this.t(`furn_${e.type}`)===`furn_${e.type}`?"":this.t(`furn_${e.type}`)} @change=${n=>this.updateFurniture({name:n.target.value.trim()||null})} />
        </label>
        ${e.name?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${n=>this.updateFurniture({show_name:n.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:v}
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!t} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${dn.map(n=>b`<option value=${n.id} ?selected=${n.id===e.type}>${this.t(n.nameKey)}</option>`)}
            ${(this.packs??[]).map(n=>b`<optgroup label=${n.name}>
                ${n.items.map(i=>{let r=qe(n.id,i.id);return b`<option value=${r} ?selected=${r===e.type}>${Re(i,this.hass?.language??"en")}</option>`})}
              </optgroup>`)}
            ${e.type.startsWith("pack:")&&!(this.packs??[]).some(n=>e.type.startsWith(`pack:${n.id}:`))?b`<option value=${e.type} selected>${Pt(this.hass,e.type)}</option>`:v}
          </select></label
        >
        ${this.num(this.t("x"),e.x,n=>this.updateFurniture({x:n}))} ${this.num(this.t("z"),e.z,n=>this.updateFurniture({z:n}))}
        ${this.num(this.t("width"),e.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("depth"),e.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("height_m"),e.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),e.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${se(e.type)?v:b`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!e.mirror} ?disabled=${!t} @change=${n=>this.updateFurniture({mirror:n.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${e.type==="led_strip"?b`${this.num(this.t("strip_tilt"),e.tilt??0,n=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(n)))}),5)}
              <label class="fp3d-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!e.upright} ?disabled=${!t} @change=${n=>this.updateFurniture({upright:n.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:v}
        ${Cn(e)&&this.floor?b`${this.num(this.t("mount_height"),e.mount_y??Rn(this.floor,e),n=>this.updateFurniture({mount_y:Math.max(0,n)}),.01,0)}
              ${e.mount_y!=null?b`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!t} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:v}`:v}
      </div>
      ${e.type==="stairs"?b`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:v}
      ${e.type==="stairs_landing"?b`<p class="fp3d-sub">${this.t("stairs_landing_hint")}</p>`:v}
      ${e.type==="stairwell"?b`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&to(Gn(e),n.points))?b`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:v}`:v}
      ${e.type==="inverter"||e.type==="home_battery"?b`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${(e.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(n=>b`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`${e.type==="inverter"?"inverter":"battery"}_${n||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:v}
      ${e.type==="lamp_pendant"?b`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>b`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:v}
      ${e.type==="fan_ceiling"||e.type==="fan_ceiling_light"?b`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("fan_blades")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["3","4","5"].map(n=>b`<option value=${n} ?selected=${(e.variant??"5")===n}>${this.t(`fan_blades_${n}`)}</option>`)}
              </select></label
            >
          </div>`:v}
      ${ht(e.type)?this.renderFurnitureLinks(e):v} ${e.type==="parking"?this.renderParkingForm(e):v}
      ${e.type.startsWith("pack:mastershort.vehicles:")&&this.isAdmin?b`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this.vehicleToSpot(e)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:v}
      ${t?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            ${e.entity&&e.entity!=="none"&&e.type!=="parking"?b`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(e)}>${this.t("as_device")}</button>`:v}
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:v}
    </section>`}setEnergy(e){let t=structuredClone(this._doc);t.energy={...t.energy,...e},this.setDoc(t)}async importEnergyPrefs(){if(!this.hass)return;let e;try{e=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let t=No(this.hass,e),n=0,i=o=>this._doc.floors.flatMap(a=>a.furniture).find(a=>a.type===o),r=(o,a,l)=>{if(!l)return;let d=i(o);if(!d&&this.floor&&(this.addEnergyDevice(o),d=i(o)),!d||d[a]&&d[a]!=="none")return;let c=d.id;this.change(u=>{let h=u.floors.flatMap(p=>p.furniture).find(p=>p.id===c);h&&(h[a]=l)}),n++};r("meter","power",t.grid),r("inverter","power",t.solar),r("home_battery","power",t.battery),r("home_battery","soc",t.battery_soc),this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let e=this._doc.energy,t=this.isAdmin,n=(_,f)=>this.hass?.states[_]?.attributes[f],i=this.entityOptions(_=>this.isPowerSensor(_)),r=this.entityOptions(_=>re(_)&&n(_,"device_class")==="battery"),o=this.entityOptions(_=>re(_)&&(n(_,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(_,"unit_of_measurement")??""))),a=_=>f=>this.setEnergy({[_]:f==="none"?null:f}),l=this.hass?bt(this.hass,this._doc.floors):new Map,d=gi(this._doc,_=>this.devicePower(_,l)),c=this.hass?Ko(this.hass,this._doc,[],d):null,u=!!c&&(c.solar??0)<20,h=u&&c.grid!==null&&c.grid<-50,p=u&&c.battery!==null&&c.battery<-50&&(c.grid??0)<=0;return b`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${h?b`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.setEnergy({grid_invert:!e.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:v}
      ${p?b`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.setEnergy({battery_invert:!e.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:v}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),e.grid,d.grid,i,a("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.grid_invert} ?disabled=${!t} @change=${_=>this.setEnergy({grid_invert:_.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),e.solar,d.solar[0]??null,i,a("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),e.battery,d.battery[0]??null,i,a("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.battery_invert} ?disabled=${!t} @change=${_=>this.setEnergy({battery_invert:_.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),e.battery_soc,d.soc[0]??null,r,a("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),e.consumption,null,i,a("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),e.tariff,void 0,o,a("tariff"))}
      </div>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!t||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?b`<p class="fp3d-sub">${this._energyNote}</p>`:v}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderHeadroom(e){let t=e.elevation+e.height;if(!(this._doc.settings.roof.sections??[]).some(r=>!r.open&&r.base<t-.05))return v;let i={settings:this._doc.settings};return I`${[1.5,2].map(r=>mo(i,e.elevation,r).map(([o,a])=>{let[l,d]=this.toScreen(o),[c,u]=this.toScreen(a);return I`<line class="fp3d-headroom" x1=${l} y1=${d} x2=${c} y2=${u} />
          <text class="fp3d-headroom-label" x=${(l+c)/2} y=${(d+u)/2-4}>${j(this.hass,r,1)} m</text>`}))}`}renderFavorites(){let e=this._doc.settings.favorites??[],t=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(o=>t.includes(o.split(".")[0])&&!e.includes(o)),i=o=>this.change(a=>a.settings.favorites=o.length?o:void 0),r=(o,a)=>{let l=[...e],[d]=l.splice(o,1);l.splice(Math.max(0,Math.min(l.length,o+a)),0,d),i(l)};return b`<details class="fp3d-section">
      <summary>${this.t("favorites")}${e.length?b` <span class="fp3d-lib-count">${e.length}</span>`:v}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${e.map((o,a)=>b`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${Y(this.hass,o)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${a===0} @click=${()=>r(a,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${a===e.length-1} @click=${()=>r(a,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>i(e.filter(l=>l!==o))}>✕</button>
        </div>`)}
      ${e.length<40?b`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,o=>{o&&o!=="none"&&!e.includes(o)&&i([...e,o])})}
          </div>`:v}
      ${this.renderOwnButtons()} ${this.renderMediaPresets()}
    </details>`}renderMediaPresets(){let e=this._doc.settings.media_presets??[],t=i=>this.change(r=>r.settings.media_presets=i.length?i:void 0),n=(i,r)=>t(e.map((o,a)=>a===i?{...o,...r}:o));return b`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"].map(i=>b`<option value=${i}></option>`)}
      </datalist>
      ${e.map((i,r)=>b`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${i.label} @change=${o=>n(r,{label:o.target.value.trim()||"Radio"})}
          /></label>
          <label class="fp3d-field" title=${this.t("preset_type_hint")}
            >${this.t("preset_type")}
            <input type="text" list="fp3d-preset-types" .value=${i.type} @change=${o=>n(r,{type:o.target.value.trim()||"music"})}
          /></label>
          <label class="fp3d-field fp3d-wide" title=${this.t("preset_content_hint")}
            >${this.t("preset_content")}
            <input type="text" .value=${i.content} placeholder="https://… · spotify:playlist:… · Rock Antenne" @change=${o=>n(r,{content:o.target.value.trim()})}
          /></label>
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn fp3d-danger" @click=${()=>t(e.filter((o,a)=>a!==r))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${e.length<30?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>t([...e,{id:U("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:v}`}renderOwnButtons(){let e=this._doc.settings.buttons??[],t=r=>this.change(o=>o.settings.buttons=r.length?r:void 0),n=(r,o)=>t(e.map((a,l)=>l===r?{...a,...o}:a)),i={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""};return b`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${e.map((r,o)=>b`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${r.label} @change=${a=>n(o,{label:a.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${a=>n(o,{action:a.target.value})}>
              ${dr.map(a=>b`<option value=${a} ?selected=${a===r.action}>${this.t(`own_action_${a}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(r.icon??null,a=>n(o,{icon:a}))}
          ${r.action!=="fire_dom_event"?b`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${r.action}`)}
                <input type="text" .value=${r.target??""} placeholder=${i[r.action]} @change=${a=>n(o,{target:a.target.value.trim()||null})}
              /></label>`:v}
          ${r.action==="service"||r.action==="fire_dom_event"?b`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${r.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${r.data?JSON.stringify(r.data,null,1):""}
                  @change=${a=>{a.target.setCustomValidity("");let l=a.target.value.trim();if(!l)return n(o,{data:null});try{let d=JSON.parse(l);d&&typeof d=="object"&&!Array.isArray(d)&&n(o,{data:d})}catch{a.target.setCustomValidity(this.t("own_data_bad")),a.target.reportValidity()}}}
                ></textarea></label
              >`:v}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${o===0} @click=${()=>t([...e.slice(0,o-1),r,e[o-1],...e.slice(o+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>t(e.filter((a,l)=>l!==o))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${e.length<20?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>t([...e,{id:U("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:v}`}renderStartView(){let e=this._doc.settings.start_view??null,t=()=>{let i=this.renderRoot.querySelector("fp3d-view3d")?.currentView();i&&this.change(r=>r.settings.start_view={theta:M(i.theta),phi:M(i.phi),radius:M(i.radius)})};return b`<details class="fp3d-section">
      <summary>${this.t("start_view")}</summary>
      <p class="fp3d-sub">${this.t("start_view_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" @click=${t}>${this.t("start_view_set")}</button>
        ${e?b`<button class="fp3d-btn" @click=${()=>this.change(n=>n.settings.start_view=null)}>${this.t("start_view_reset")}</button>`:v}
      </div>
      ${e?b`<p class="fp3d-sub">${this.t("start_view_saved")}</p>
            <p class="fp3d-sub">${this.t("start_view_card")}</p>
            <code class="fp3d-code">start_view: { theta: ${e.theta}, phi: ${e.phi}, radius: ${e.radius} }</code>`:v}
    </details>`}renderPresenceSettings(){let e=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),t=i=>{let r=i.slice(7),o=this.entityOptions(l=>re(l)),a=l=>l.includes(r)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...o.filter(l=>a(l.id)),...o.filter(l=>!a(l.id))]},n=(i,r)=>{let o=structuredClone(this._doc);o.presence=o.presence.filter(a=>a.person!==i),r&&r!=="none"&&o.presence.push({person:i,sensor:r}),this.setDoc(o)};return b`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${e.length?e.map(i=>this.entitySelect(`${Y(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(r=>r.person===i)?.sensor??null,void 0,t(i),r=>n(i,r))):b`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderFurnitureLinks(e){if(!this.hass)return v;let t=this.hass,n=c=>{let u=structuredClone(this._doc.floors);for(let h of u)for(let p of h.furniture)p.id===e.id&&(c==="light"?p.light_entity=null:p[c]=null);return bt(t,u).get(e.id)?.[c]??null},i=Yt(e.type),r=se(e.type),o=e.type==="kitchen_display",a=this.entityOptions(c=>e.type==="fan_ceiling_light"?/^(fan|switch|input_boolean)\./.test(c):r||o?/^(light|switch|input_boolean)\./.test(c):i?/^(media_player|switch|input_boolean|light)\./.test(c):e.type==="security_camera"?c.startsWith("camera."):e.type==="smart_lock"?c.startsWith("lock."):e.type==="smart_curtain"?c.startsWith("cover."):e.type==="smart_speaker"?c.startsWith("media_player."):e.type==="air_purifier"?/^(fan|switch)\./.test(c):e.type==="radiator"||e.type==="air_conditioner"||e.type==="wall_thermostat"||e.type==="heat_pump_outdoor"?c.startsWith("climate."):e.type==="smoke_detector"?c.startsWith("binary_sensor.")&&t.states[c]?.attributes.device_class==="smoke":e.type==="siren_alarm"?/^(siren|alarm_control_panel|switch|binary_sensor)\./.test(c):e.type==="access_point"?/^(switch|sensor|binary_sensor|device_tracker)\./.test(c):e.type==="network_cabinet"||e.type==="nas_server"?/^(switch|sensor|binary_sensor)\./.test(c):e.type==="electrical_panel"||e.type==="ups_unit"?/^(switch|sensor|binary_sensor)\./.test(c):e.type==="modem_router"?/^(switch|sensor|binary_sensor|device_tracker)\./.test(c):e.type==="hot_water_tank"?/^(water_heater|climate|switch)\./.test(c):e.type==="ventilation_fan"?/^(fan|switch)\./.test(c):e.type==="humidifier"?/^(humidifier|fan|switch)\./.test(c):e.type==="wall_switch"?/^(switch|input_boolean|light)\./.test(c):e.type==="wall_outlet"||e.type==="smart_plug"?c.startsWith("switch."):e.type==="motion_sensor"?c.startsWith("binary_sensor.")&&["motion","occupancy","presence"].includes(String(t.states[c]?.attributes.device_class??"")):e.type==="contact_sensor"?c.startsWith("binary_sensor.")&&["door","window","opening"].includes(String(t.states[c]?.attributes.device_class??"")):e.type==="water_leak_sensor"?c.startsWith("binary_sensor.")&&t.states[c]?.attributes.device_class==="moisture":e.type==="temperature_humidity_sensor"?c.startsWith("sensor.")&&["temperature","humidity"].includes(String(t.states[c]?.attributes.device_class??"")):e.type==="video_doorbell"?/^(camera|binary_sensor)\./.test(c):e.type==="robot_vacuum"?c.startsWith("vacuum."):e.type==="robot_mower"?c.startsWith("lawn_mower."):/^(switch|media_player|fan|water_heater|input_boolean|climate)\./.test(c)||Or(t.states[c])),l=this.entityOptions(c=>this.isPowerSensor(c)),d=e.type==="fridge_smart"?this.entityOptions(c=>c.startsWith("binary_sensor.")):[];return b`<div class="fp3d-form fp3d-links">
        ${e.type==="grid_point"?b`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(e.type==="fan_ceiling_light"?"furn_entity_fan":r||o?"furn_entity_light":i?"furn_entity_tv":e.type==="radiator"||e.type==="air_conditioner"||e.type==="wall_thermostat"||e.type==="heat_pump_outdoor"?"furn_entity_climate":e.type==="robot_vacuum"?"furn_entity_vacuum":"furn_entity"),e.entity??null,n("entity"),a,c=>this.updateFurniture({entity:c}))}
        ${e.type==="fan_ceiling_light"?this.entitySelect(this.t("furn_entity_light"),e.light_entity??null,n("light"),this.entityOptions(c=>c.startsWith("light.")),c=>this.updateFurniture({light_entity:c})):v}
        ${!r&&!ve.includes(e.type)&&!Xt(e.type)?b`${this.entitySelect(this.t("furn_state_entity"),e.state_entity??null,void 0,this.entityOptions(c=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(c)),c=>this.updateFurniture({state_entity:c==="none"?null:c}))}
              ${e.state_entity&&e.state_entity!=="none"?b`${this.entitySelect(this.t("furn_state_entity2"),e.state_entity2??null,void 0,this.entityOptions(c=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(c)),c=>this.updateFurniture({state_entity2:c==="none"?null:c}))}
                    ${e.state_entity2&&e.state_entity2!=="none"?b`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isAdmin} @change=${c=>this.updateFurniture({state_split:c.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${e.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${e.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:v}`:v}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`:v}
        ${r&&e.entity&&e.entity!=="none"?b`${this.entitySelect(this.t("furn_color_entity"),e.color_entity??null,void 0,this.entityOptions(c=>c.startsWith("light.")&&c!==e.entity),c=>this.updateFurniture({color_entity:c==="none"?null:c}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:v}
        ${r||e.type==="grid_point"?v:this.entitySelect(this.t(e.type==="meter"?"energy_grid":e.type==="inverter"?"energy_solar_sensor":e.type==="home_battery"?"energy_battery_sensor":"furn_power"),e.power??null,n("power"),l,c=>this.updateFurniture({power:c}))}
        ${ce("energy_pro")&&!r&&!["grid_point","meter","inverter","home_battery"].includes(e.type)?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!e.holo} ?disabled=${!this.isAdmin} @change=${c=>this.updateFurniture({holo:c.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:ce("energy_pro")&&e.type==="inverter"?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${e.plant_card!==!1} ?disabled=${!this.isAdmin} @change=${c=>this.updateFurniture({plant_card:c.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >`:v}
      </div>
      ${e.type==="meter"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),e.export??null,void 0,l,c=>this.updateFurniture({export:c==="none"?null:c}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:v}
      ${e.type==="home_battery"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),e.soc??null,void 0,this.entityOptions(c=>re(c)&&(t.states[c]?.attributes.device_class==="battery"||t.states[c]?.attributes.unit_of_measurement==="%")),c=>this.updateFurniture({soc:c==="none"?null:c}))}
            ${this.entitySelect(this.t("furn_charge"),e.charge??null,void 0,l,c=>this.updateFurniture({charge:c==="none"?null:c}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:v}
      ${e.type==="wallbox"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),e.status??null,void 0,this.entityOptions(c=>Mi(c)||re(c)),c=>this.updateFurniture({status:c==="none"?null:c}))}
          </div>`:v}
      ${!r||e.entity?b`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!this.isAdmin} @change=${c=>this.updateFurniture({confirm:c.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(e.marker??null,c=>this.updateFurniture({marker:c}))}${this.iconInput(e.icon,c=>this.updateFurniture({icon:c}))}</div>`:v}
      ${e.type==="robot_vacuum"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),e.room_sensor??null,Vr(t,bt(t,this._doc.floors).get(e.id)?.entity??null,null),this.entityOptions(c=>re(c)),c=>this.updateFurniture({room_sensor:c}))}
          </div>`:v}
      ${e.type==="fridge_smart"?b`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),e.door_left??null,void 0,d,c=>this.updateFurniture({door_left:c}))}
              ${this.entitySelect(this.t("furn_door_right"),e.door_right??null,void 0,d,c=>this.updateFurniture({door_right:c}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:v}
      ${Xt(e.type)?this.renderPictureRules(e):v}
      <p class="fp3d-sub">${this.t(r?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(e){let t=this.isAdmin,n=this.hass?.language??"en",i=(this.packs??[]).flatMap(y=>y.items.filter(g=>g.vehicle).map(g=>({id:qe(y.id,g.id),label:`${Re(g,n)} \xB7 ${y.name}`}))),r=this.entityOptions(y=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(y)),o=this.entityOptions(y=>/^(sensor|input_select|select|input_text)\./.test(y)),a=e.type_entity?this.hass?.states[e.type_entity]:void 0,l=Array.isArray(a?.attributes.options)?a.attributes.options:[],d=e.types??[],c=y=>this.updateFurniture({types:y}),u=(y,g)=>b`<select ?disabled=${!t} @change=${w=>g(w.target.value||null)}>
        <option value="" ?selected=${!y}>${this.t("parking_vehicle_none")}</option>
        ${i.map(w=>b`<option value=${w.id} ?selected=${w.id===y}>${w.label}</option>`)}
      </select>`,h=this.floor,p=h?.rooms.find(y=>y.points.length>=3&&C([e.x,e.z],y.points)),_=e.vehicle?te(e.vehicle):void 0,f=_?_.size[2]*(e.scale??1):0,m=!!p&&!!h&&f>h.height+1e-6;return b`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),e.entity??null,void 0,r,y=>this.updateFurniture({entity:y==="none"?null:y}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${u(e.vehicle??null,y=>this.updateFurniture({vehicle:y}))}</label>
        ${i.length?v:b`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((e.scale??1)*100),y=>this.updateFurniture({scale:Math.min(150,Math.max(30,y))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),e.type_entity??null,void 0,o,y=>this.updateFurniture({type_entity:y==="none"?null:y}))}
        ${e.type_entity?b`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${d.map((y,g)=>b`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${y.state}
                    ?disabled=${!t}
                    @change=${w=>c(d.map((x,k)=>k===g?{...x,state:w.target.value}:x))}
                  />
                  ${u(y.vehicle,w=>c(d.map((x,k)=>k===g?{...x,vehicle:w??""}:x)))}
                  <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>c(d.filter((w,x)=>x!==g))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${l.map(y=>b`<option value=${y}></option>`)}</datalist>
              ${t?b`<button class="fp3d-btn" @click=${()=>c([...d,{state:l[d.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:v}
            </div>`:v}
      </div>
      ${m?b`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:j(this.hass,f,2),room:j(this.hass,h.height,2)})}</p>`:v}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(e)}`}renderCarForm(e){let t=this.hass?.language;if(!ce("auto_pro"))return b`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🚗 ${this.t("pro_name_auto_pro")}</b><a class="fp3d-btn fp3d-primary" href=${yt(t)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
        <p class="fp3d-sub">${this.t("auto_pro_teaser")}</p>
      </section>`;if(!this.hass)return v;let n=this.hass,i=e.car??{},r=Cr(n,{entity:e.entity,car:{device:i.device}}),o=d=>this.updateFurniture({car:{...i,...d}}),a=this.entityOptions(d=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(d)),l=(d,c,u)=>this.entitySelect(this.t(c),i[d]??null,r[d],u,h=>o({[d]:h==="none"?"none":h}));return b`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),i.device??null,void 0,a,d=>o({device:d==="none"?null:d}))}
        ${l("soc","car_soc",this.entityOptions(d=>re(d)))}
        ${l("range","car_range",this.entityOptions(d=>re(d)))}
        ${l("charging","car_charging",this.entityOptions(d=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(d)))}
        ${l("plugged","car_plugged",this.entityOptions(d=>Mi(d)))}
        ${l("lock","car_lock",this.entityOptions(d=>/^(lock|binary_sensor|input_boolean|switch)\./.test(d)))}
        ${l("climate","car_climate",this.entityOptions(d=>/^(climate|switch|binary_sensor|input_boolean)\./.test(d)))}
        ${l("tracker","car_tracker",this.entityOptions(d=>d.startsWith("device_tracker.")))}
      </div>
    </section>`}toggleLibrary(e){let t=new Set(this._libOpen);t.has(e)?t.delete(e):t.add(e),this._libOpen=t;try{localStorage.setItem("neonplan3d.library",JSON.stringify([...t]))}catch{}}librarySection(e,t,n,i){let r=hn(i).split(/\s+/).filter(Boolean),o=r.length?n.filter(l=>{let d=hn(`${l.label} ${l.search??""} ${l.type.replace(/[_:.]/g," ")} ${t}`);return r.every(c=>d.includes(c))}):n;if(i&&!o.length)return v;let a=i?!0:this._libOpen.has(e);return b`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${a} @click=${()=>this.toggleLibrary(e)}>
        <span class="fp3d-lib-caret">${a?"\u25BE":"\u25B8"}</span>${t} <span class="fp3d-lib-count">${o.length}</span>
      </button>
      ${a?b`<div class="fp3d-library">${o.map(l=>this.libraryButton(l.type,l.label))}</div>`:v}`}libraryHasHits(e){let t=hn(e).split(/\s+/).filter(Boolean),n=this.hass?.language??"en";return[...Object.entries(xi).flatMap(([r,o])=>o.map(a=>`${this.t(`furn_${a}`)} ${Fe(cs,`furn_${a}`)} ${a.replace(/_/g," ")} ${this.t(`furn_group_${r}`)}`)),...(this.packs??[]).flatMap(r=>r.items.map(o=>`${Re(o,n)} ${Object.values(o.name).join(" ")} ${o.id.replace(/_/g," ")} ${r.name}`))].some(r=>{let o=hn(r);return t.every(a=>o.includes(a))})}storedPictures(){let e=[];for(let t of this._doc.floors)for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!e.includes(i.image)&&e.push(i.image);return e}renderPictureRules(e){let t=this.isAdmin,n=e.pictures??[];if(!ce("screens"))return b`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${yt(this.hass?.language)} target="_blank" rel="noopener">${this.t("pro_shop")}</a> · <a href=${Jt(this.hass?.language,"screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let i=y=>this.updateFurniture({pictures:y}),r=this.entityOptions(()=>!0),o=y=>["string","number","boolean"].includes(typeof y),a=y=>Object.entries(this.hass?.states[y]?.attributes??{}).filter(([g,w])=>o(w)&&g!=="friendly_name"&&g!=="icon").map(([g])=>g),l=(y,g)=>{let w=this.hass?.states[y];return w?String((g?w.attributes[g]:w.state)??""):""},d=(y,g)=>{let w=this.hass?.states[y],x=!g&&Array.isArray(w?.attributes.options)?w.attributes.options:[];return x.length?x:[l(y,g)]},c=y=>`${y.entity}\0${y.attribute??""}`,u=[];n.forEach((y,g)=>{let w=u.find(x=>c(x)===c(y));w?w.rows.push(g):u.push({entity:y.entity,attribute:y.attribute??null,rows:[g]})});let h=(y,g)=>i(n.map((w,x)=>y.rows.includes(x)?{...w,...g}:w)),p=(y,g)=>i(n.map((w,x)=>x===y?{...w,...g}:w)),_=this.storedPictures(),f=this.entityOptions(y=>y.startsWith("camera.")),m=y=>y.image.startsWith("camera:")?y.image.slice(7):null;return b`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?b`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!t} @change=${y=>this.updateFurniture({screen_bg:y.target.value})}>
              <option value="black" ?selected=${(e.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${e.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:v}
      ${u.map(y=>b`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${r}
            .value=${y.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!t}
            @change=${g=>{g.stopPropagation(),h(y,{entity:g.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!t}
            title=${this.t("picture_attribute")}
            @change=${g=>{let w=g.target.value||null,x=l(y.entity,w);i(n.map((k,z)=>y.rows.includes(z)?{...k,attribute:w,state:y.rows[0]===z?x:k.state}:k))}}
          >
            <option value="" ?selected=${!y.attribute}>${this.t("picture_state_of")}</option>
            ${a(y.entity).map(g=>b`<option value=${g} ?selected=${g===y.attribute}>${g}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(y.entity,y.attribute)||"\u2013"})}</span>
          ${y.rows.map(g=>{let w=n[g],x=!!this.hass&&Wr(this.hass,w);return b`<div class="fp3d-picture-row ${x?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${g}"
                placeholder=${this.t("picture_state")}
                .value=${w.state}
                ?disabled=${!t}
                @change=${k=>p(g,{state:k.target.value})}
              />
              <datalist id="fp3d-picture-states-${g}"><option value="*"></option>${d(y.entity,y.attribute).map(k=>b`<option value=${k}></option>`)}</datalist>
              ${this._images[w.image]?b`<img class="fp3d-picture-thumb" src=${this._images[w.image].url} alt="" /> `:v}
              ${m(w)&&this.hass?.states[m(w)]?.attributes.entity_picture?b`<img class="fp3d-picture-thumb" src=${String(this.hass.states[m(w)].attributes.entity_picture)} alt="" />`:v}
              <label class="fp3d-btn fp3d-picture-pick">
                ${w.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!t} @change=${k=>{this.uploadPicture(k,e,g)}} />
              </label>
              ${_.filter(k=>k!==w.image).length?b`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${_.filter(k=>k!==w.image&&this._images[k]).map(k=>b`<button class="fp3d-picture-reuse-btn" ?disabled=${!t} @click=${()=>p(g,{image:k})}><img src=${this._images[k].url} alt="" /></button>`)}
                  </div>`:v}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(w.image)?w.image:""}
                ?disabled=${!t}
                @change=${k=>{let z=k.target.value.trim();z&&p(g,{image:z})}}
              />
              ${f.length?b`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${f}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${m(w)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!t}
                    @change=${k=>{k.stopPropagation(),k.detail.value!=="none"?p(g,{image:`camera:${k.detail.value}`}):m(w)&&p(g,{image:""})}}
                  ></fp3d-entity-picker>`:v}
              <span class="fp3d-sub">${x?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>i(n.filter((k,z)=>z!==g))}>✕</button>
            </div>`})}
          ${t?b`<button class="fp3d-btn" @click=${()=>i([...n,{entity:y.entity,attribute:y.attribute,state:l(y.entity,y.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:v}
        </div>`)}
      ${t?b`<button class="fp3d-btn" @click=${()=>i([...n,{entity:r[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:v}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(e,t,n){let i=e.target,r=i.files?.[0];if(i.value="",!r)return;let o=await createImageBitmap(r),a=Math.min(1,512/Math.max(o.width,o.height)),l=document.createElement("canvas");l.width=Math.round(o.width*a),l.height=Math.round(o.height*a),l.getContext("2d").drawImage(o,0,0,l.width,l.height);let d=l.toDataURL(r.type==="image/png"?"image/png":"image/jpeg",.85),c=U("pic");await Ct(this.hass,c,d),this._images={...this._images,[c]:{url:d,aspect:l.height/l.width}};let u=this.furnitureItem?.id===t.id?this.furnitureItem.pictures??[]:t.pictures??[];this.updateFurniture({pictures:u.map((h,p)=>p===n?{...h,image:c}:h)})}renderFurnitureLibrary(){let e=this.room,t=this._furnQuery.trim().toLowerCase(),n=this.hass?.language??"en";return b`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${e?this.t("furniture_into",{room:e.name}):this.t("furniture_pick_room")}</p>
      <input
        class="fp3d-search"
        type="search"
        placeholder=${this.t("furniture_search")}
        .value=${this._furnQuery}
        @input=${i=>this._furnQuery=i.target.value}
        @keydown=${i=>{i.key==="Escape"&&(this._furnQuery="")}}
      />
      ${t&&!this.libraryHasHits(t)?b`<p class="fp3d-sub">${this.t("furniture_search_none")}</p>`:v}
      ${Object.entries(xi).map(([i,r])=>this.librarySection(`group:${i}`,this.t(`furn_group_${i}`),[...r,...i==="kitchen"&&ce("fridge_smart")?["fridge_smart"]:[]].map(o=>({type:o,label:this.t(`furn_${o}`),search:Fe(cs,`furn_${o}`)})),t))}
      ${(this.packs??[]).map(i=>this.librarySection(`pack:${i.id}`,i.name,i.items.map(r=>({type:qe(i.id,r.id),label:Re(r,n),search:Object.values(r.name).join(" ")})),t))}
    </section>`}libraryButton(e,t){let n=r=>{this.showPreview(e,r.currentTarget)},i=se(e)?"light":ht(e)?"switch":null;return b`<button
      class="fp3d-btn ${i?"fp3d-lib-electric":""}"
      title=${i?this.t(i==="light"?"lib_badge_light":"lib_badge_electric"):t}
      @click=${()=>this.addFurniture(e)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${t}
      ${i?b`<svg class="fp3d-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${wt(i)} />
          </svg>`:v}
    </button>`}async showPreview(e,t){let n=t.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:e,url:null,...i};try{let r=await ts(),[o,a,l]=Ce(e),d=r.furniturePreview({type:e,w:o,d:a,h:l,variant:null,lamp:wr[e]??null},180,this.packs??[]);this._preview?.type===e&&(this._preview={type:e,url:d,...i})}catch{this._preview=null}}renderPreview(){let e=this._preview;return e?b`<div class="fp3d-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
      ${e.url?b`<img src=${e.url} alt="" />`:b`<span class="fp3d-preview-wait"></span>`}
      <b>${Pt(this.hass,e.type)}</b>
    </div>`:v}renderDeviceForm(e){let t=this.isAdmin,n=B(e.entity_id),i=n==="light",r=e.mount??"ceiling",o=n?qt(n,this.floor?.height??2.5,i?r:null):1;return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",e.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?wt(n):""} />
        </svg>
        ${Y(this.hass,e.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?b`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>b`<option value=${a} ?selected=${a===r}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >`:n==="camera"?b`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                  <option value="wall" ?selected=${(e.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${e.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:v}
        ${this.num(this.t("x"),e.x,a=>this.updateDevice({x:a}))} ${this.num(this.t("z"),e.z,a=>this.updateDevice({z:a}))}
        ${this.num(this.t("marker_height"),e.y??o,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
        ${this.num(this.t("rotation"),e.rotation??0,a=>this.updateDevice({rotation:(a%360+360)%360}),1)}
        ${n==="camera"?b`${this.num(this.t("camera_fov"),e.fov??(e.mount==="ceiling"?360:90),a=>this.updateDevice({fov:Math.min(360,Math.max(10,a))}),5,10)}
            ${this.num(this.t("camera_reach"),e.reach??(e.mount==="ceiling"?3:4.5),a=>this.updateDevice({reach:Math.min(50,Math.max(.5,a))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),e.tilt??(e.mount==="ceiling"?65:20),a=>this.updateDevice({tilt:Math.min(90,Math.max(0,a))}),5,0)}
            <label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${e.cone!==!1} ?disabled=${!t} @change=${a=>this.updateDevice({cone:a.target.checked?null:!1})} />
              ${this.t("camera_cone")}</label
            >
            <p class="fp3d-sub fp3d-wide">${this.t("camera_aim_hint")}</p>
            ${this.renderCameraDetections(e.entity_id)}`:v}
        ${n&&Ar.has(n)?b`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!t} @change=${a=>this.updateDevice({confirm:a.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:v}
        ${this.markerSelect(e.marker??null,a=>this.updateDevice({marker:a}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${e.name??""} ?disabled=${!t} maxlength="60" placeholder=${Y(this.hass,e.entity_id)} @change=${a=>this.updateDevice({name:a.target.value.trim()||null})}
        /></label>
        ${e.name?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${a=>this.updateDevice({show_name:a.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:v}
        ${this.iconInput(e.icon,a=>this.updateDevice({icon:a}))}
      </div>
      ${t?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${e.y!==null?b`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:v}
            ${this.renderAsFurniture(e)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(e.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:v}
    </section>`}renderDeviceList(e){let t=this.isAdmin,n=this.hass,i=e.area_id?n?.areas?.[e.area_id]?.name:void 0,r=n?Ae(n,e.area_id).filter(k=>_t(B(k))):[],o=new Set([...this.floor?.placements.filter(k=>C([k.x,k.z],e.points)).map(k=>k.entity_id)??[],...this.floor?.furniture.filter(k=>se(k.type)&&k.entity&&C([k.x,k.z],e.points)).map(k=>k.entity)??[]]),a=n?ei(n,r):[],l=a.map(k=>k.primary).filter(k=>!o.has(k)),d=this._deviceQuery.trim().toLowerCase(),c=k=>!d||Y(n,k,i).toLowerCase().includes(d)||k.includes(d),u=this.floor?.placements.filter(k=>B(k.entity_id)==="light"&&(k.mount??"ceiling")==="ceiling"&&C([k.x,k.z],e.points)).length,h=new Set(e.panel??[]),p=new Set(e.hidden??[]),_=new Set(e.no_state??[]),f=new Map;for(let k of this._doc.floors)for(let z of[...k.placements.map(R=>[R.entity_id,R.x,R.z]),...k.furniture.filter(R=>se(R.type)&&R.entity).map(R=>[R.entity,R.x,R.z])]){let R=k.rooms.find($=>C([z[1],z[2]],$.points));R&&R.id!==e.id&&f.set(z[0],R.name)}let m=(k,z=!1,R=i)=>{let $=o.has(k),F=$?void 0:f.get(k);return b`<div class="fp3d-row fp3d-dev-row ${z?"fp3d-dev-extra":""} ${p.has(k)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${$?"":"fp3d-muted"}" ?disabled=${!$} @click=${()=>this.selectItem("device",k)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${wt(B(k))} />
          </svg>
          <span>${Y(n,k,R)}${F?b`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:F})}</small>`:v}</span>
        </button>
        ${t&&!z?b`<button
              class="fp3d-pin ${p.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${p.has(k)}
              title=${this.t(p.has(k)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:p.has(k)?[...p].filter(S=>S!==k):[...p,k]})}
            >
              ${p.has(k)?"\u{1F648}":"\u{1F441}"}
            </button>`:v}
        ${t&&!z&&!p.has(k)?b`<button
              class="fp3d-pin ${_.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${_.has(k)}
              title=${this.t(_.has(k)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:_.has(k)?[..._].filter(S=>S!==k):[..._,k]})}
            >
              ${_.has(k)?"\u2205":"Aa"}
            </button>`:v}
        ${t&&!$?b`<button
              class="fp3d-pin ${h.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${h.has(k)}
              title=${this.t(h.has(k)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:h.has(k)?[...h].filter(S=>S!==k):[...h,k]})}
            >
              ${h.has(k)?"\u2605":"\u2606"}
            </button>`:v}
        ${t?$?b`<button class="fp3d-link" @click=${()=>this.removeDevice(k)}>${this.t("devices_remove")}</button>`:b`<button class="fp3d-link" @click=${()=>this.placeDevices([k])}>${this.t("devices_place")}</button>`:v}
      </div>`},y=t?this._devSource:"area",g=k=>{this._devSource=k,this._deviceQuery=""},w=b`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${k=>this._deviceQuery=k.target.value}
    />`,x=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return b`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${t?b`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${y==="area"} @click=${()=>g("area")}>${this.t("devices_src_area")}${r.length?` (${a.length})`:""}</button>
            <button aria-pressed=${y==="other"} @click=${()=>g("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${y==="none"} @click=${()=>g("none")}>${this.t("devices_src_none")}</button>
          </div>`:v}
      ${y!=="area"?b`${w}${this.renderDeviceExtras(e,m,y)}`:e.area_id?r.length?b`${t&&(u??0)>=2?b`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(e)}>${this.t("lights_spread")}</button>`:v}
              ${r.length>8?w:v}
              <div class="fp3d-room-list">
                ${a.map(k=>{let z=k.others.filter(c),R=this._expanded.has(k.primary)||!!d&&z.length>0;return!c(k.primary)&&!z.length?v:b`${m(k.primary)}
                  ${k.others.length?b`<button
                        class="fp3d-more"
                        @click=${()=>{let $=new Set(this._expanded);$.has(k.primary)?$.delete(k.primary):$.add(k.primary),this._expanded=$}}
                      >
                        ${R?this.t("devices_less"):this.t("devices_more",{n:k.others.length})}
                      </button>`:v}
                  ${R?(d?z:k.others).map($=>m($,!0)):v}`})}
              </div>
              ${t&&l.length>1?b`<button class="fp3d-link fp3d-place-all" @click=${x}>${this.t("devices_place_all_n",{n:l.length})}</button>`:v}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`:b`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(e,t,n){let i=this.hass;if(!i)return v;let r=50,o=this._deviceQuery.trim().toLowerCase(),a=(c,u)=>!o||`${Y(i,c,u)} ${c} ${u??""}`.toLowerCase().includes(o),l=c=>c>0?b`<p class="fp3d-sub">${this.t("devices_narrow",{n:c})}</p>`:v;if(n==="other"){let c=0,u=0,h=Fr(i,e.area_id).map(p=>{let _=p.ids.filter(m=>a(m,p.name)),f=_.slice(0,Math.max(0,r-c));return c+=f.length,u+=_.length-f.length,f.length?b`<div class="fp3d-dev-area">${p.name}</div>${f.map(m=>t(m,!1,p.name))}`:v});return c?b`<div class="fp3d-room-list">${h}</div>${l(u)}`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let d=Ir(i).filter(c=>a(c));return d.length?b`<div class="fp3d-room-list">${d.slice(0,r).map(c=>t(c))}</div>${l(d.length-Math.min(d.length,r))}`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(e){let t=this.hass;if(!t)return v;let n=(o,a)=>{let l={...e.climate??{},[o]:a},d=Object.values(l).every(c=>c==null);this.updateRoom({climate:d?null:l})},i=!!e.climate&&Object.values(e.climate).some(o=>o!=null),r=(o,a)=>{let l=Yn[o],d=Pr(t,this.floor??null,{...e,climate:null},o),c=this.entityOptions(u=>re(u)&&t.states[u]?.attributes.device_class===l).map(u=>({...u,rank:(mt(t,u.id)===e.area_id?0:1)+(Xn(t,u.id)?0:2)})).sort((u,h)=>u.rank-h.rank).map(({id:u,label:h})=>({id:u,label:h}));return this.entitySelect(a,e.climate?.[o]??null,d[0]??null,c,u=>n(o,u))};return b`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${r("temperature",this.t("climate_temperature"))} ${r("humidity",this.t("climate_humidity"))} ${r("co2",this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(e){let t=e.background;return b`<details class="fp3d-section">
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${t?b`${this.num(this.t("x"),t.x,n=>this.updateFloor({background:{...t,x:n}}))}
              ${this.num(this.t("z"),t.z,n=>this.updateFloor({background:{...t,z:n}}))}
              ${this.num(this.t("background_width"),t.width,n=>this.updateFloor({background:{...t,width:Math.max(.1,n)}}),.01,.1)}
              ${this.num(this.t("background_rotation"),t.rotation??0,n=>this.updateFloor({background:{...t,rotation:Math.round(n*10)/10}}),.5)}
              ${this.isAdmin?b`<button class="fp3d-btn fp3d-wide ${this._bgEdit?"fp3d-primary":""}" aria-pressed=${this._bgEdit} @click=${()=>this._bgEdit=!this._bgEdit}>
                    ${this.t(this._bgEdit?"background_edit_done":"background_edit")}
                  </button>
                  <p class="fp3d-sub fp3d-wide">${this.t("background_edit_hint")}</p>`:v}
              <label class="fp3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(t.opacity)}
                  @change=${n=>this.updateFloor({background:{...t,opacity:parseFloat(n.target.value)}})}
              /></label>
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:v}
      </div>
    </details>`}async loadHistory(){if(this.hass)try{this._history=await Yi(this.hass)}catch{this._history=[]}}async restoreFromHistory(e){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(e)}))||(await Qi(this.hass,e.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let e=await Ji(this.hass),t={};for(let i of Sr(e.building))try{t[i]=await Mn(this.hass,i)}catch{}let n=new Date().toISOString().slice(0,10);jn(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...e,exported_at:new Date().toISOString(),images:t}))}catch(e){alert(this.t("backup_import_error",{error:String(e?.message??e)}))}finally{this._backupBusy=!1}}}async importBackup(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if(i?.format!=="neonplan3d-backup"||!i.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let r=await er(this.hass,i.building,i.packs??[]),o=0;for(let[l,d]of Object.entries(i.images??{}))try{await Ct(this.hass,l,d),o++}catch{}this.setDoc(Gt(r.building)),this._floorId=r.building.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let a=r.skipped.length?` ${this.t("backup_full_skipped",{packs:r.skipped.map(l=>l.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:r.packs,pictures:o})+a}catch(r){let{code:o,message:a}=r??{};alert(this.t("backup_import_error",{error:a??o??String(r)}))}finally{this._backupBusy=!1}}}exportPlan(e){let t=new Date().toISOString().slice(0,10);jn(`neonplan3d-${this.t(e?"export_name_template":"export_name_backup")}-${t}.json`,JSON.stringify($r(this._doc,e),null,2))}async importPlan(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=xr(await n.text())}catch(r){let o=r.message;alert(o==="not_json"?this.t("import_error_not_json"):o==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:o}));return}confirm(this.t("backup_import_confirm"))&&(await Xi(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(e){return new Date(e.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return b`<details
      class="fp3d-section"
      @toggle=${e=>{e.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?b`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?b`<div class="fp3d-room-list">
              ${this._history.map(e=>b`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(e)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:e.rooms,furniture:e.furniture})}</span></span>
                  <button class="fp3d-link" @click=${()=>this.restoreFromHistory(e)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:b`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("backup_file")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.exportPlan(!1)}>${this.t("backup_export")}</button>
        <button class="fp3d-btn" title=${this.t("backup_export_share_hint")} @click=${()=>this.exportPlan(!0)}>${this.t("backup_export_share")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_hint")}</p>
      <h4 class="fp3d-lib-head">${this.t("backup_full")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${this._backupBusy} @click=${()=>this.exportBackup()}>${this._backupBusy?"\u2026":this.t("backup_full_export")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_full_import")}<input type="file" accept="application/json,.json" @change=${this.importBackup}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_full_hint")}</p>
    </details>`}renderSettings(){let e=this._doc.settings,t=n=>{let i=structuredClone(this._doc);Object.assign(i.settings,n),this.setDoc(i)};return b`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.num(this.t("wall_exterior"),e.wall_exterior,n=>t({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("wall_interior"),e.wall_interior,n=>t({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("grid"),e.grid,n=>t({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        ${this.num(this.t("north"),e.north,n=>t({north:(Math.round(n)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select
            @change=${n=>{let i=n.target.value;i==="custom"?(this.useRoofSections(),this._tool="roof"):t({roof:{...e.roof,type:i}})}}
          >
            ${["none","flat","gable","custom"].map(n=>b`<option value=${n} ?selected=${n===e.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${e.roof.type==="gable"?b`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>t({roof:{...e.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${e.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${e.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:v}
        ${e.roof.type==="gable"?this.num(this.t("roof_pitch"),e.roof.pitch,n=>t({roof:{...e.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):v}
        ${e.roof.type!=="none"?this.num(this.t("roof_overhang"),e.roof.overhang,n=>t({roof:{...e.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):v}
        ${this.hass?this.entitySelect(this.t("weather_entity"),e.weather_entity??null,no(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>t({weather_entity:n})):v}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${ur.map(n=>{let i=e.weather_effects??Tn;return b`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${i.includes(n)}
              @change=${r=>{let o=r.target.checked;t({weather_effects:o?[...new Set([...i,n])]:i.filter(a=>a!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.rain_warning!==!1} @change=${n=>t({rain_warning:n.target.checked})} />
          ${this.t("rain_warning")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("north_hint")} ${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[cn,Jo,Ee`
      :host {
        display: block;
        height: 100%;
      }
      .fp3d-editor {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 320px;
        height: 100%;
        min-height: 0;
      }
      .fp3d-editor:has(> .fp3d-side-strip) {
        grid-template-columns: 1fr 52px;
      }
      .fp3d-side-strip {
        padding: 10px 6px;
        gap: 8px;
        align-items: center;
      }
      .fp3d-strip-btn {
        width: 40px;
        height: 40px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 18px;
        cursor: pointer;
      }
      .fp3d-strip-hot {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-side-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(340px, 60%);
        z-index: 6;
        box-shadow: -12px 0 32px rgba(0, 0, 0, 0.45);
      }
      .fp3d-pin-row {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }
      .fp3d-3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--fp3d-muted);
        font-size: 12px;
      }
      .fp3d-3d-size input {
        width: 58px;
        padding: 4px 6px;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-3d-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-editor.fp3d-narrow {
        grid-template-columns: 1fr;
        grid-template-rows: minmax(360px, 62vh) auto;
        height: auto;
      }
      .fp3d-main {
        display: grid;
        grid-template-rows: auto 1fr;
        min-height: 0;
        min-width: 0;
      }
      .fp3d-toolbar {
        display: flex;
        flex-wrap: nowrap;
        gap: 6px;
        align-items: center;
        min-width: 0;
        padding: 8px 12px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-bg2);
      }
      .fp3d-toolbar-button,
      .fp3d-tool-menu > summary,
      .fp3d-icon-button {
        box-sizing: border-box;
        min-height: 36px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-toolbar-button,
      .fp3d-tool-menu > summary {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        padding: 7px 11px;
        white-space: nowrap;
      }
      .fp3d-toolbar-button:hover,
      .fp3d-tool-menu > summary:hover,
      .fp3d-icon-button:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-toolbar-button[aria-pressed="true"],
      .fp3d-toolbar-button.fp3d-active,
      .fp3d-tool-menu > summary.fp3d-active,
      .fp3d-icon-button[aria-pressed="true"] {
        border-color: transparent;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-toolbar-button:disabled,
      .fp3d-icon-button:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .fp3d-tool-menu {
        position: relative;
        flex: 0 0 auto;
        block-size: 36px;
        min-width: 0;
      }
      .fp3d-tool-menu > summary {
        list-style: none;
      }
      .fp3d-tool-menu > summary > span {
        transition: transform 120ms ease-out;
      }
      .fp3d-tool-menu > summary::-webkit-details-marker,
      .fp3d-mobile-tools > summary::-webkit-details-marker {
        display: none;
      }
      .fp3d-tool-menu[open] > summary {
        border-color: var(--fp3d-accent);
      }
      .fp3d-tool-menu[open] > summary > span {
        transform: rotate(180deg);
      }
      .fp3d-tool-popover {
        position: absolute;
        z-index: 12;
        top: calc(100% + 7px);
        left: 0;
        display: grid;
        min-width: max-content;
        padding: 6px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        box-shadow: var(--fp3d-shadow);
        transform: translate3d(0, 0, 0);
        transform-origin: top left;
        will-change: transform, opacity;
        animation: fp3d-tool-menu-in 120ms cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      @keyframes fp3d-tool-menu-in {
        from {
          opacity: 0;
          transform: translate3d(0, -5px, 0) scale(0.985);
        }
      }
      .fp3d-tool-popover button,
      .fp3d-mobile-sheet button {
        min-height: 38px;
        padding: 8px 12px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: var(--fp3d-text);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-tool-popover button:hover,
      .fp3d-mobile-sheet button:hover {
        background: rgba(55, 224, 255, 0.09);
      }
      .fp3d-tool-popover button[aria-pressed="true"],
      .fp3d-mobile-sheet button[aria-pressed="true"] {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-tool-popover button:disabled,
      .fp3d-mobile-sheet button:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .fp3d-toolbar-actions {
        display: flex;
        flex: none;
        gap: 4px;
        margin-left: auto;
      }
      .fp3d-icon-button {
        display: inline-grid;
        width: 36px;
        padding: 0;
        place-items: center;
        font-size: 20px;
        line-height: 1;
      }
      .fp3d-icon-button svg {
        width: 20px;
        height: 20px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.8;
      }
      .fp3d-settings-button {
        margin-left: 3px;
      }
      .fp3d-mobile-tools {
        display: none;
      }
      .fp3d-side-tabs {
        position: sticky;
        top: -12px;
        z-index: 4;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 6px 0 10px;
        background: var(--fp3d-chrome-solid);
      }
      .fp3d-side-tabs button {
        justify-content: center;
      }
      .fp3d-project-intro {
        padding-bottom: 10px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-project-intro h3 {
        color: var(--fp3d-accent);
      }
      .fp3d-narrow .fp3d-toolbar {
        padding: 7px 8px;
      }
      .fp3d-narrow .fp3d-desktop-tool,
      .fp3d-narrow .fp3d-desktop-action {
        display: none;
      }
      .fp3d-narrow .fp3d-mobile-tools {
        display: block;
        min-width: 0;
      }
      .fp3d-narrow .fp3d-mobile-tools > summary {
        max-width: min(42vw, 190px);
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-mobile-tools[open]::before {
        position: fixed;
        z-index: 30;
        inset: 0;
        content: "";
        background: rgba(2, 6, 13, 0.66);
        backdrop-filter: blur(2px);
      }
      .fp3d-mobile-sheet {
        position: fixed;
        z-index: 31;
        right: 8px;
        bottom: 8px;
        left: 8px;
        display: grid;
        max-height: min(76vh, 620px);
        gap: 8px;
        overflow-y: auto;
        padding: 8px 14px max(16px, env(safe-area-inset-bottom));
        border: 1px solid var(--fp3d-line);
        border-radius: 20px 20px 14px 14px;
        background: var(--fp3d-chrome-solid);
        box-shadow: 0 -16px 50px rgba(0, 0, 0, 0.62);
        overscroll-behavior: contain;
      }
      .fp3d-mobile-sheet-handle {
        width: 44px;
        height: 4px;
        margin: 1px auto 5px;
        border-radius: 999px;
        background: var(--fp3d-muted);
        opacity: 0.65;
      }
      .fp3d-mobile-sheet > button,
      .fp3d-mobile-sheet section > div {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 7px;
      }
      .fp3d-mobile-sheet > button {
        display: block;
        width: 100%;
        min-height: 46px;
        text-align: center;
      }
      .fp3d-mobile-sheet section {
        display: grid;
        gap: 5px;
      }
      .fp3d-mobile-sheet h3 {
        margin: 3px 4px 0;
        color: var(--fp3d-muted);
        font-size: 11px;
        letter-spacing: 0.04em;
      }
      .fp3d-mobile-sheet section button {
        min-height: 46px;
        text-align: center;
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-tool-menu > summary > span {
          transition: none;
        }
        .fp3d-tool-popover {
          animation: none;
        }
      }
      .fp3d-warn {
        flex: none;
        color: var(--fp3d-warm);
        font-size: 18px;
      }
      .fp3d-picture-group {
        display: grid;
        gap: 6px;
        margin: 6px 0 10px;
        padding: 8px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
      }
      .fp3d-picture-group > select {
        min-width: 0;
      }
      .fp3d-picture-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
        padding: 6px;
        border-radius: 8px;
        background: color-mix(in srgb, var(--fp3d-line) 40%, transparent);
      }
      .fp3d-picture-row input[type="url"] {
        grid-column: 1 / -1;
        min-width: 0;
      }
      .fp3d-picture-row > .fp3d-sub,
      .fp3d-picture-row > .fp3d-picture-camera {
        grid-column: 1 / -1;
      }
      .fp3d-picture-row.fp3d-rule-hit {
        outline: 1px solid var(--fp3d-accent);
      }
      .fp3d-rule-now {
        grid-column: 1 / -1;
      }
      .fp3d-rule-hit {
        color: var(--fp3d-accent);
      }
      .fp3d-picture-reuse {
        grid-column: 1 / -1;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .fp3d-picture-reuse-btn {
        padding: 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 6px;
        background: var(--fp3d-chrome-solid);
        cursor: pointer;
      }
      .fp3d-picture-reuse-btn img {
        display: block;
        height: 28px;
        max-width: 60px;
        object-fit: contain;
      }
      .fp3d-picture-reuse-btn:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-picture-thumb {
        max-height: 60px;
        max-width: 100%;
        border-radius: 6px;
        justify-self: start;
      }
      .fp3d-picture-pick {
        justify-self: start;
      }
      .fp3d-parking-row {
        display: flex;
        gap: 6px;
        align-items: center;
        margin: 4px 0;
      }
      .fp3d-parking-row input,
      .fp3d-parking-row select {
        flex: 1;
        min-width: 0;
      }
      .fp3d-stage-pair {
        display: flex;
        min-height: 0;
        min-width: 0;
      }
      .fp3d-stage-pair > .fp3d-canvas-wrap {
        flex: 1 1 var(--fp3d-split, 55%);
        min-width: 0;
      }
      .fp3d-split > .fp3d-canvas-wrap {
        flex: 0 0 var(--fp3d-split, 55%);
      }
      .fp3d-split-handle {
        flex: 0 0 8px;
        cursor: col-resize;
        background: var(--fp3d-line);
        touch-action: none;
      }
      .fp3d-split-handle:hover {
        background: var(--fp3d-accent);
      }
      .fp3d-editor-3d {
        position: relative;
        flex: 1 1 0;
        min-width: 240px;
        min-height: 0;
        border-left: 1px solid var(--fp3d-line);
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-editor-3d fp3d-view3d {
        display: block;
        height: 100%;
      }
      .fp3d-3d-walls {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 3;
      }
      .fp3d-3d-bar {
        position: absolute;
        left: 50%;
        bottom: 12px;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 6px 8px 6px 14px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger, #ff6b7a);
      }
      .fp3d-narrow .fp3d-stage-pair.fp3d-split {
        flex-direction: column;
      }
      .fp3d-narrow .fp3d-split > .fp3d-canvas-wrap {
        flex: 1 1 auto;
      }
      .fp3d-narrow .fp3d-editor-3d {
        flex: 0 0 42%;
        min-width: 0;
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-canvas-wrap {
        position: relative;
        min-height: 0;
        overflow: hidden;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-bg2), var(--fp3d-bg) 75%);
      }
      svg.fp3d-plan {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        touch-action: none;
        user-select: none;
        -webkit-user-select: none;
        cursor: default;
      }
      svg.fp3d-tool-rect,
      svg.fp3d-tool-polygon {
        cursor: crosshair;
      }
      .fp3d-grid-minor {
        stroke: rgba(55, 224, 255, 0.05);
        stroke-width: 1;
      }
      .fp3d-grid-major {
        stroke: rgba(91, 124, 255, 0.16);
        stroke-width: 1;
      }
      .fp3d-origin {
        fill: rgba(91, 124, 255, 0.5);
      }
      .fp3d-ghost {
        fill: none;
        stroke: rgba(138, 155, 184, 0.35);
        stroke-dasharray: 4 4;
      }
      .fp3d-wall {
        fill: #1b2a47;
      }
      .fp3d-wall-ext {
        fill: #22345a;
      }
      .fp3d-room {
        fill: rgba(55, 224, 255, 0.05);
        stroke: rgba(55, 224, 255, 0.75);
        stroke-width: 1.5;
        stroke-linejoin: round;
        cursor: pointer;
      }
      .fp3d-room:hover {
        fill: rgba(55, 224, 255, 0.09);
      }
      .fp3d-room-covered {
        fill: rgba(91, 124, 255, 0.1);
        stroke-dasharray: 7 4;
      }
      .fp3d-covered-rail {
        stroke: #22345a;
        stroke-linecap: square;
      }
      .fp3d-covered-rail-edge {
        fill: none;
        stroke: rgba(55, 224, 255, 0.72);
        stroke-width: 1;
      }
      .fp3d-covered-column-base {
        fill: #22345a;
        stroke: rgba(55, 224, 255, 0.62);
        stroke-width: 1;
      }
      .fp3d-covered-column {
        fill: #1b2a47;
        stroke: rgba(55, 224, 255, 0.9);
        stroke-width: 1.2;
      }
      .fp3d-room-sel {
        fill: rgba(55, 224, 255, 0.14);
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
      }
      .fp3d-room-name {
        fill: var(--fp3d-text);
        font: 600 13px var(--fp3d-title-font);
        text-anchor: middle;
      }
      .fp3d-room-area {
        fill: var(--fp3d-muted);
        font: 500 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-dim {
        fill: var(--fp3d-accent);
        font: 600 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
        paint-order: stroke;
        stroke: var(--fp3d-bg);
        stroke-width: 3px;
      }
      .fp3d-vertex circle:not(.fp3d-hit) {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-vertex-sel circle:not(.fp3d-hit) {
        fill: var(--fp3d-accent);
      }
      .fp3d-vertex,
      .fp3d-mid {
        cursor: grab;
      }
      .fp3d-hit {
        fill: transparent;
      }
      .fp3d-mid circle:not(.fp3d-hit) {
        fill: rgba(91, 124, 255, 0.35);
        stroke: var(--fp3d-soft);
      }
      .fp3d-mid path {
        stroke: var(--fp3d-text);
        stroke-width: 1.5;
      }
      .fp3d-draft {
        fill: rgba(255, 181, 71, 0.08);
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      polyline.fp3d-draft {
        fill: none;
      }
      .fp3d-draft-pt {
        fill: var(--fp3d-warm);
      }
      .fp3d-draft-first {
        fill: transparent;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
      }
      .fp3d-cursor {
        fill: var(--fp3d-warm);
      }
      .fp3d-guide {
        stroke: rgba(255, 95, 210, 0.55);
        stroke-dasharray: 3 5;
      }
      .fp3d-snap {
        fill: none;
        stroke: #ff5fd2;
        stroke-width: 2;
      }
      .fp3d-hint {
        position: absolute;
        left: 12px;
        right: 12px;
        bottom: 8px;
        margin: 0;
        font-size: 12px;
        color: var(--fp3d-muted);
        pointer-events: none;
      }
      .fp3d-side {
        border-left: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        overflow-y: auto;
        padding: 12px 14px 24px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        min-height: 0;
      }
      .fp3d-narrow .fp3d-side {
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      h3,
      summary {
        margin: 0 0 8px;
        font-size: 11.5px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-muted);
        font-weight: 600;
      }
      summary {
        cursor: pointer;
        margin: 0;
      }
      details[open] > summary {
        margin-bottom: 8px;
      }
      .fp3d-floor-list,
      .fp3d-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-floor-list .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
      }
      .fp3d-wide {
        grid-column: 1 / -1;
      }
      .fp3d-room-list {
        display: grid;
        gap: 2px;
      }
      .fp3d-row {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: none;
        border-bottom: 1px solid var(--fp3d-line);
        padding: 9px 2px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-row:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-check input {
        accent-color: var(--fp3d-accent);
      }
      .fp3d-meter rect {
        fill: #2a2a10;
        stroke: #ffc633;
        stroke-width: 1.5;
      }
      .fp3d-meter path {
        fill: #ffc633;
      }
      .fp3d-packages {
        display: grid;
        gap: 6px;
        margin-top: 10px;
      }
      .fp3d-packages .fp3d-btn {
        display: grid;
        text-align: left;
        gap: 2px;
      }
      .fp3d-packages .fp3d-btn span {
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-arrows {
        display: grid;
        grid-template-columns: repeat(3, 52px);
        grid-template-areas: ". up ." "left . right" ". down .";
        gap: 6px;
        justify-content: center;
      }
      .fp3d-arrows .fp3d-btn {
        font-size: 20px;
        padding: 6px 0;
      }
      .fp3d-arrow-up {
        grid-area: up;
      }
      .fp3d-arrow-left {
        grid-area: left;
      }
      .fp3d-arrow-right {
        grid-area: right;
      }
      .fp3d-arrow-down {
        grid-area: down;
      }
      .fp3d-measure-list {
        margin: 8px 0;
        padding-left: 22px;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-library {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-library .fp3d-btn {
        font-weight: 500;
        font-size: 13px;
      }
      /* the background picture while it is edited: a dashed frame and a corner handle */
      .fp3d-bg-frame {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-bg-handle {
        fill: var(--fp3d-accent);
        stroke: #041018;
        stroke-width: 2;
        cursor: nwse-resize;
      }
      .fp3d-furn-body {
        fill: rgba(91, 124, 255, 0.1);
        stroke: rgba(91, 124, 255, 0.55);
        stroke-width: 1.2;
        vector-effect: non-scaling-stroke;
        cursor: grab;
      }
      .fp3d-furn-sym * {
        fill: none;
        stroke: rgba(150, 175, 255, 0.55);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
        pointer-events: none;
      }
      .fp3d-furn-sym .fp3d-sym-fill {
        fill: rgba(91, 124, 255, 0.28);
      }
      .fp3d-furn-sym .fp3d-sym-strong {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-out polygon {
        fill: rgba(91, 124, 255, 0.06);
        stroke: rgba(91, 124, 255, 0.4);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        cursor: grab;
      }
      .fp3d-out-lawn polygon,
      .fp3d-out-bed polygon,
      .fp3d-out-wild polygon,
      .fp3d-out-hedge polygon {
        fill: rgba(61, 224, 160, 0.1);
        stroke: rgba(61, 224, 160, 0.5);
      }
      .fp3d-out-pool polygon {
        fill: rgba(55, 224, 255, 0.18);
        stroke: var(--fp3d-accent);
      }
      .fp3d-out-terrace polygon {
        fill: rgba(150, 130, 255, 0.12);
      }
      .fp3d-free-wall {
        cursor: grab;
      }
      .fp3d-vertex-no {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 700;
        pointer-events: none;
      }
      .fp3d-edge-box {
        margin: 12px 0;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 45%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, var(--fp3d-accent) 6%, transparent);
      }
      .fp3d-edge-box h4 {
        margin: 0 0 4px;
        color: var(--fp3d-accent);
        font-size: 13px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      /* a wall row: name and length, the height, then the buttons (full height, no wall, cut) in one line;
         a split point gets a line of its own below */
      .fp3d-edge-height {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: end;
        padding: 4px 6px;
        margin: 0 -6px;
        border-radius: 8px;
      }
      .fp3d-edge-height > span:first-child {
        flex: 1 1 84px;
        min-width: 84px;
      }
      .fp3d-edge-height > .fp3d-field {
        flex: 1 1 90px;
        min-width: 0;
      }
      .fp3d-edge-height > .fp3d-muted {
        flex: 1 1 90px;
        align-self: center;
      }
      .fp3d-edge-height > .fp3d-btn {
        flex: 0 0 auto;
        white-space: nowrap;
        padding-left: 10px;
        padding-right: 10px;
      }
      .fp3d-edge-height > .fp3d-split-row {
        flex: 1 1 100%;
        display: flex;
        gap: 6px;
        align-items: end;
      }
      .fp3d-edge-height > .fp3d-split-row > .fp3d-field {
        flex: 1;
      }
      .fp3d-edge-on {
        background: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
      }
      .fp3d-edge-low b {
        color: var(--fp3d-accent);
      }
      .fp3d-wall-low {
        opacity: 0.55;
      }
      .fp3d-dev-source {
        display: flex;
        margin: 8px 0;
      }
      .fp3d-dev-source button {
        flex: 1 1 0;
        min-width: 0;
        padding: 6px 4px;
        font-size: 12px;
        line-height: 1.2;
        white-space: normal;
        text-align: center;
        border-radius: 10px;
      }
      .fp3d-place-all {
        margin: 10px 0 0;
      }
      .fp3d-roof-sec polygon {
        fill: color-mix(in srgb, #ffb547 10%, transparent);
        stroke: #ffb547;
        stroke-width: 2;
        stroke-dasharray: 8 6;
        cursor: move;
      }
      .fp3d-roof-sel polygon {
        fill: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      /* solar modules: dark blue panes with a light frame, so they do not look like a selected room */
      .fp3d-roofwin polygon {
        fill: color-mix(in srgb, #2b6b8f 70%, transparent);
        stroke: #e3e9f5;
        stroke-width: 2;
        cursor: move;
      }
      .fp3d-roofwin-sel polygon {
        stroke: #ffd75a;
      }
      .fp3d-tool-energy .fp3d-roof-layer {
        opacity: 0.45;
      }
      .fp3d-tool-energy .fp3d-energy-item {
        pointer-events: auto;
      }
      /* the cables in the energy tool: faint automatic ways, solid laid ones */
      .fp3d-cable line {
        stroke: #ffd75a;
        stroke-width: 2;
        stroke-dasharray: 5 4;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-cable-bat line {
        stroke: #5dffb0;
      }
      .fp3d-cable-grid line {
        stroke: #4ff6ff;
      }
      .fp3d-cable-hit line {
        stroke-width: 12;
        opacity: 0;
        pointer-events: stroke;
        cursor: pointer;
      }
      .fp3d-cable-laid line {
        stroke-dasharray: none;
        opacity: 0.9;
      }
      .fp3d-cable-sel line {
        stroke-width: 2.5;
        opacity: 1;
        filter: drop-shadow(0 0 4px currentColor);
      }
      .fp3d-cable-sel .fp3d-cable-piece {
        stroke-width: 14;
        opacity: 0;
        pointer-events: stroke;
        cursor: copy;
      }
      .fp3d-cable .fp3d-vertex circle {
        pointer-events: auto;
      }
      .fp3d-energy-marker {
        cursor: move;
      }
      .fp3d-checklist .fp3d-chk {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        margin: 2px 0;
        padding: 6px 8px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        text-align: left;
        text-decoration: none;
        cursor: pointer;
      }
      .fp3d-checklist .fp3d-chk:hover {
        background: rgba(127, 127, 127, 0.12);
      }
      .fp3d-checklist .fp3d-chk span {
        width: 18px;
        text-align: center;
        font-weight: 700;
      }
      .fp3d-chk-ok span {
        color: #59ff8c;
      }
      .fp3d-chk-todo span {
        color: #ffc633;
      }
      .fp3d-chk-opt {
        opacity: 0.75;
      }
      .fp3d-teaser-on {
        border-color: rgba(89, 255, 140, 0.5);
      }
      .fp3d-teaser {
        margin-top: 12px;
        padding: 12px;
        border-radius: 14px;
        border: 1px solid color-mix(in srgb, #ffd75a 45%, transparent);
        background: linear-gradient(160deg, color-mix(in srgb, #ffd75a 10%, transparent), transparent 60%);
      }
      .fp3d-teaser-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
      .fp3d-teaser-soon {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #0b1426;
        background: #ffd75a;
        border-radius: 999px;
        padding: 2px 8px;
        white-space: nowrap;
      }
      .fp3d-teaser img {
        display: block;
        width: 100%;
        border-radius: 10px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 40%, transparent);
      }
      .fp3d-teaser ul {
        margin: 8px 0 4px;
        padding-left: 18px;
        font-size: 13px;
      }
      /* the roof and energy tools say what can be moved there (everything else is locked) */
      .fp3d-tool-note {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        max-width: calc(100% - 24px);
        padding: 5px 12px;
        border-radius: 999px;
        background: color-mix(in srgb, #0b1426 85%, transparent);
        border: 1px solid color-mix(in srgb, #ffd75a 60%, transparent);
        color: #ffe7a3;
        font-size: 12px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-energy-marker circle {
        fill: color-mix(in srgb, #0b1426 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-holo-pt circle {
        stroke: #c9a4ff;
        cursor: grab;
      }
      .fp3d-holo-pt .fp3d-energy-name {
        fill: #c9a4ff;
      }
      .fp3d-energy-marker-sel circle {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
        fill: color-mix(in srgb, var(--fp3d-accent) 25%, #0b1426);
      }
      .fp3d-energy-marker text {
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-energy-icon {
        font-size: 17px;
      }
      .fp3d-energy-name {
        font-size: 11px;
        font-weight: 700;
        fill: #ffd75a;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.65);
        stroke-width: 3px;
      }
      .fp3d-solar polygon {
        fill: color-mix(in srgb, #1b3a8f 75%, transparent);
        stroke: #9fb8ff;
        stroke-width: 1.5;
        cursor: move;
      }
      .fp3d-solar-sel polygon {
        fill: color-mix(in srgb, #1b3a8f 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-solar polygon.fp3d-solar-off {
        fill: transparent;
        stroke-dasharray: 4 4;
        stroke-width: 1.5;
      }
      .fp3d-solar-pick polygon {
        cursor: pointer;
      }
      .fp3d-roof-ridge line {
        stroke: #ffb547;
        stroke-width: 2.5;
        pointer-events: none;
      }
      .fp3d-roof-sel .fp3d-roof-ridge line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-roof-sec text {
        fill: #ffd28a;
        font-size: 12px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.6);
        stroke-width: 3px;
        pointer-events: none;
      }
      .fp3d-tool-energy .fp3d-room,
      .fp3d-tool-energy [data-furniture],
      .fp3d-tool-energy [data-device],
      .fp3d-tool-energy [data-opening],
      .fp3d-tool-energy [data-free-wall],
      .fp3d-tool-energy [data-outdoor],
      .fp3d-tool-energy .fp3d-roof-layer,
      .fp3d-tool-roof .fp3d-room,
      .fp3d-tool-roof [data-furniture],
      .fp3d-tool-roof [data-device],
      .fp3d-tool-roof [data-opening],
      .fp3d-tool-roof [data-free-wall],
      .fp3d-tool-roof [data-outdoor] {
        pointer-events: none;
      }
      .fp3d-dev-area {
        margin: 10px 0 2px;
        color: var(--fp3d-muted);
        font-size: 12px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .fp3d-h3row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .fp3d-h3row h3 {
        margin-bottom: 0;
      }
      .fp3d-fix {
        min-height: 30px;
        padding: 4px 10px;
        font-size: 13px;
      }
      .fp3d-fix[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-lock {
        font-size: 13px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-hint-fixed {
        color: var(--fp3d-accent);
      }
      .fp3d-ctx {
        position: absolute;
        z-index: 5;
        display: flex;
        flex-direction: column;
        min-width: 170px;
        padding: 4px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: var(--fp3d-panel, #111a2e);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
      }
      .fp3d-ctx button {
        padding: 8px 12px;
        border: none;
        border-radius: 7px;
        background: none;
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-ctx button:hover:not(:disabled) {
        background: color-mix(in srgb, var(--fp3d-accent) 16%, transparent);
      }
      .fp3d-ctx button:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .fp3d-ctx-danger {
        color: var(--fp3d-danger, #ff6b7a) !important;
      }
      .fp3d-edge-hi {
        stroke: var(--fp3d-accent);
        stroke-width: 6;
        stroke-linecap: round;
        filter: drop-shadow(0 0 6px var(--fp3d-accent));
      }
      .fp3d-free-wall .fp3d-hit {
        stroke: transparent;
        stroke-width: 18;
      }
      .fp3d-free-wall-line {
        stroke: transparent;
        stroke-width: 1;
      }
      .fp3d-free-wall-sel .fp3d-free-wall-line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-draft-wall {
        stroke-width: 4;
      }
      .fp3d-open-passage {
        stroke-dasharray: 4 4;
      }
      .fp3d-out-sel polygon {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: none;
      }
      .fp3d-out text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-lit .fp3d-furn-body {
        fill: rgba(255, 181, 71, 0.35);
        stroke: var(--fp3d-warm);
      }
      .fp3d-rotate {
        cursor: grab;
      }
      .fp3d-preview {
        position: fixed;
        z-index: 20;
        width: 180px;
        padding: 8px 8px 10px;
        border-radius: 16px;
        background: radial-gradient(circle at 50% 40%, #1d2c4d, #0b1222 75%);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        text-align: center;
        pointer-events: none;
        animation: fp3d-pop 120ms ease-out;
      }
      @keyframes fp3d-pop {
        from {
          opacity: 0;
          transform: translateX(8px);
        }
      }
      .fp3d-preview img,
      .fp3d-preview-wait {
        display: block;
        width: 164px;
        height: 164px;
      }
      .fp3d-preview-wait {
        margin: 0 auto;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
      }
      .fp3d-preview b {
        display: block;
        margin-top: 2px;
        font-size: 13px;
        color: #e8eeff;
      }
      .fp3d-lib-badge {
        margin-left: 4px;
        color: #37e0ff;
        vertical-align: -2px;
      }
      .fp3d-pin {
        border: 0;
        background: none;
        padding: 2px 6px;
        font-size: 17px;
        line-height: 1;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-pin-on {
        color: var(--fp3d-warm);
      }
      .fp3d-back {
        margin-bottom: 12px;
      }
      .fp3d-presets {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
      }
      .fp3d-resize {
        cursor: nwse-resize;
      }
      .fp3d-resize rect {
        fill: var(--fp3d-accent);
        stroke: #0b1222;
        stroke-width: 1.5;
      }
      .fp3d-code {
        display: block;
        font: 12px/1.4 ui-monospace, Menlo, Consolas, monospace;
        padding: 6px 8px;
        border-radius: 8px;
        background: rgba(127, 127, 127, 0.12);
        user-select: all;
        word-break: break-all;
      }
      .fp3d-shift {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .fp3d-shift input {
        width: 5.5em;
      }
      .fp3d-headroom {
        stroke: rgba(255, 214, 90, 0.55);
        stroke-width: 1;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-headroom-label {
        font-size: 10px;
        fill: rgba(255, 214, 90, 0.75);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-split-mark {
        stroke: rgba(55, 224, 255, 0.9);
        stroke-width: 2;
        pointer-events: none;
      }
      .fp3d-floor-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 8px 0;
        padding: 10px;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
        max-width: 100%;
        box-sizing: border-box;
      }
      .fp3d-icon-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .fp3d-icon-row input {
        flex: 1;
        min-width: 0;
      }
      .fp3d-icon-row ha-icon {
        --mdc-icon-size: 22px;
        color: var(--fp3d-accent);
      }
      .fp3d-floor-menu .fp3d-btn {
        text-align: left;
        width: 100%;
        min-width: 0;
        white-space: normal;
        overflow-wrap: anywhere;
      }
      .fp3d-rotate line {
        stroke: var(--fp3d-accent);
        stroke-dasharray: 3 3;
      }
      .fp3d-rotate circle:not(.fp3d-hit) {
        fill: #0b1222;
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-rotate path {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-linecap: round;
      }
      .fp3d-lib-toggle {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 0;
        border: 0;
        background: none;
        font: inherit;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-lib-toggle:hover {
        color: var(--fp3d-text);
      }
      .fp3d-lib-caret {
        width: 12px;
        color: var(--fp3d-accent);
      }
      .fp3d-lib-count {
        margin-left: auto;
        font-weight: 500;
        letter-spacing: 0;
        text-transform: none;
        opacity: 0.7;
      }
      .fp3d-lib-head {
        margin: 10px 0 0;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-furn-front {
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
        vector-effect: non-scaling-stroke;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-furn text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-sel .fp3d-furn-body {
        fill: rgba(55, 224, 255, 0.16);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open {
        cursor: grab;
      }
      .fp3d-open-gap {
        fill: #0b1222;
        stroke: none;
      }
      .fp3d-open path,
      .fp3d-open line {
        fill: none;
        stroke-width: 1.6;
        stroke-linecap: round;
      }
      .fp3d-open-door path {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 3 3;
      }
      .fp3d-open-front path,
      .fp3d-open-door line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
        stroke-dasharray: none;
      }
      .fp3d-open-door line.fp3d-open-pane {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-garage line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
      }
      .fp3d-open-track {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 4 4;
        opacity: 0.6;
      }
      .fp3d-open-window line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-sel .fp3d-open-gap {
        fill: rgba(55, 224, 255, 0.25);
      }
      .fp3d-open-sel path,
      .fp3d-open-sel line {
        stroke-width: 2.4;
      }
      .fp3d-own-button {
        padding: 10px 0;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-own-button textarea {
        font: 12px/1.4 ui-monospace, monospace;
        width: 100%;
        box-sizing: border-box;
        padding: 6px 8px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-search {
        position: sticky;
        top: 0;
        z-index: 2;
        background-color: var(--fp3d-panel, #0d1424);
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 7px 9px;
        margin: 2px 0 6px;
      }
      .fp3d-more {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-muted);
        background: none;
        border: none;
        text-align: left;
        padding: 2px 26px 8px;
        cursor: pointer;
      }
      .fp3d-more:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-dev-hidden .fp3d-dev-name {
        opacity: 0.45;
        text-decoration: line-through;
      }
      .fp3d-dev-extra {
        padding-left: 18px;
        font-size: 13px;
      }
      .fp3d-dev-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 8px;
        font-weight: 600;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-device-sel circle:not(.fp3d-hit) {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
      }
      .fp3d-dev-row {
        align-items: center;
        cursor: default;
      }
      .fp3d-dev-row:hover {
        color: var(--fp3d-text);
      }
      .fp3d-dev-name {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-dev-name:disabled {
        cursor: default;
      }
      .fp3d-dev-name span {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-name svg {
        flex: none;
      }
      .fp3d-link {
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-accent);
        background: none;
        border: none;
        padding: 4px 2px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-wide-btn {
        width: 100%;
        margin-bottom: 6px;
      }
      .fp3d-device {
        cursor: grab;
      }
      .fp3d-wedge path,
      .fp3d-wedge circle:not(.fp3d-hit) {
        fill: rgba(55, 224, 255, 0.12);
        stroke: rgba(55, 224, 255, 0.45);
        stroke-width: 1;
        pointer-events: none;
      }
      .fp3d-wedge-sel path,
      .fp3d-wedge-sel > circle {
        fill: rgba(55, 224, 255, 0.2);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wedge .fp3d-rotate circle {
        pointer-events: auto;
      }
      .fp3d-device circle:not(.fp3d-hit) {
        fill: #111a2e;
        stroke: var(--fp3d-soft);
        stroke-width: 1.5;
        vector-effect: non-scaling-stroke;
      }
      .fp3d-device path {
        fill: none;
        stroke: var(--fp3d-text);
        stroke-width: 2.6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-device-on circle:not(.fp3d-hit) {
        fill: var(--fp3d-warm);
        stroke: var(--fp3d-warm);
      }
      .fp3d-device-on path {
        stroke: #2a1a00;
      }
      .fp3d-muted {
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-points {
        margin: 12px 0;
      }
      .fp3d-point {
        display: grid;
        grid-template-columns: 18px 1fr 1fr auto;
        gap: 6px;
        align-items: end;
        padding: 4px 0;
      }
      .fp3d-point-sel .fp3d-muted {
        color: var(--fp3d-accent);
      }
      .fp3d-point .fp3d-btn {
        min-height: 34px;
        padding: 4px 10px;
      }
      .fp3d-upload {
        position: relative;
        text-align: center;
        overflow: hidden;
      }
      .fp3d-upload input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
      }
      .fp3d-sub {
        margin: 8px 0 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-note {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-warm);
      }
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",Ei);function Za(s,e,t){let n=t[0]-e[0],i=t[1]-e[1],r=n*n+i*i||1,o=Math.min(1,Math.max(0,((s[0]-e[0])*n+(s[1]-e[1])*i)/r));return Math.hypot(s[0]-e[0]-n*o,s[1]-e[1]-i*o)}function hn(s){return s.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var cs={language:"en"};function re(s){return/^(sensor|input_number|number)\./.test(s)}function Mi(s){return/^(binary_sensor|input_boolean)\./.test(s)}export{Ei as Fp3dEditor};
