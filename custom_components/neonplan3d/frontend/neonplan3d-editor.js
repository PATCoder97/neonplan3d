var Ht=globalThis,Bt=Ht.ShadowRoot&&(Ht.ShadyCSS===void 0||Ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mn=Symbol(),Ar=new WeakMap,st=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==mn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Bt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ar.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ar.set(t,e))}return e}toString(){return this.cssText}},Pr=o=>new st(typeof o=="string"?o:o+"",void 0,mn),Ee=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,r,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new st(t,o,mn)},Ir=(o,e)=>{if(Bt)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=Ht.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}},gn=Bt?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Pr(t)})(o):o;var{is:Ss,defineProperty:Ms,getOwnPropertyDescriptor:Es,getOwnPropertyNames:zs,getOwnPropertySymbols:Rs,getPrototypeOf:Fs}=Object,Ct=globalThis,Tr=Ct.trustedTypes,As=Tr?Tr.emptyScript:"",Ps=Ct.reactiveElementPolyfillSupport,at=(o,e)=>o,bn={toAttribute(o,e){switch(e){case Boolean:o=o?As:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Or=(o,e)=>!Ss(o,e),Lr={attribute:!0,type:String,converter:bn,reflect:!1,useDefault:!1,hasChanged:Or};Symbol.metadata??=Symbol("metadata"),Ct.litPropertyMetadata??=new WeakMap;var be=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Lr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Ms(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Es(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:r,set(s){let a=r?.call(this);i?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Lr}static _$Ei(){if(this.hasOwnProperty(at("elementProperties")))return;let e=Fs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(at("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(at("properties"))){let t=this.properties,n=[...zs(t),...Rs(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(gn(r))}else e!==void 0&&t.push(gn(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ir(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:bn).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let i=n.getPropertyOptions(r),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:bn;this._$Em=r;let a=s.fromAttribute(t,i.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let s=this.constructor;if(r===!1&&(i=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??Or)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,i]of n){let{wrapped:s}=i,a=this[r];s!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};be.elementStyles=[],be.shadowRootOptions={mode:"open"},be[at("elementProperties")]=new Map,be[at("finalized")]=new Map,Ps?.({ReactiveElement:be}),(Ct.reactiveElementVersions??=[]).push("2.1.2");var Sn=globalThis,Dr=o=>o,Vt=Sn.trustedTypes,Wr=Vt?Vt.createPolicy("lit-html",{createHTML:o=>o}):void 0,Kr="$lit$",ze=`lit$${Math.random().toFixed(9).slice(2)}$`,Ur="?"+ze,Is=`<${Ur}>`,He=document,ct=()=>He.createComment(""),dt=o=>o===null||typeof o!="object"&&typeof o!="function",Mn=Array.isArray,Ts=o=>Mn(o)||typeof o?.[Symbol.iterator]=="function",yn=`[ 	
\f\r]`,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hr=/-->/g,Br=/>/g,De=RegExp(`>|${yn}(?:([^\\s"'>=/]+)(${yn}*=${yn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Cr=/'/g,Vr=/"/g,Gr=/^(?:script|style|textarea|title)$/i,En=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),b=En(1),T=En(2),Ll=En(3),ye=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),Nr=new WeakMap,We=He.createTreeWalker(He,129);function jr(o,e){if(!Mn(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Wr!==void 0?Wr.createHTML(e):e}var Ls=(o,e)=>{let t=o.length-1,n=[],r,i=e===2?"<svg>":e===3?"<math>":"",s=lt;for(let a=0;a<t;a++){let l=o[a],c,d,u=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===lt?d[1]==="!--"?s=Hr:d[1]!==void 0?s=Br:d[2]!==void 0?(Gr.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=De):d[3]!==void 0&&(s=De):s===De?d[0]===">"?(s=r??lt,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?De:d[3]==='"'?Vr:Cr):s===Vr||s===Cr?s=De:s===Hr||s===Br?s=lt:(s=De,r=void 0);let p=s===De&&o[a+1].startsWith("/>")?" ":"";i+=s===lt?l+Is:u>=0?(n.push(c),l.slice(0,u)+Kr+l.slice(u)+ze+p):l+ze+(u===-2?a:p)}return[jr(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},ut=class o{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,d]=Ls(e,t);if(this.el=o.createElement(c,n),We.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=We.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let u of r.getAttributeNames())if(u.endsWith(Kr)){let h=d[s++],p=r.getAttribute(u).split(ze),f=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:f[2],strings:p,ctor:f[1]==="."?kn:f[1]==="?"?wn:f[1]==="@"?$n:Ze}),r.removeAttribute(u)}else u.startsWith(ze)&&(l.push({type:6,index:i}),r.removeAttribute(u));if(Gr.test(r.tagName)){let u=r.textContent.split(ze),h=u.length-1;if(h>0){r.textContent=Vt?Vt.emptyScript:"";for(let p=0;p<h;p++)r.append(u[p],ct()),We.nextNode(),l.push({type:2,index:++i});r.append(u[h],ct())}}}else if(r.nodeType===8)if(r.data===Ur)l.push({type:2,index:i});else{let u=-1;for(;(u=r.data.indexOf(ze,u+1))!==-1;)l.push({type:7,index:i}),u+=ze.length-1}i++}}static createElement(e,t){let n=He.createElement("template");return n.innerHTML=e,n}};function je(o,e,t=o,n){if(e===ye)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl,i=dt(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=je(o,r._$AS(o,e.values),r,n)),e}var vn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??He).importNode(t,!0);We.currentNode=r;let i=We.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new ht(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new xn(i,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(i=We.nextNode(),s++)}return We.currentNode=He,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},ht=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=je(this,e,t),dt(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==ye&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ts(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&dt(this._$AH)?this._$AA.nextSibling.data=e:this.T(He.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ut.createElement(jr(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let i=new vn(r,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=Nr.get(e.strings);return t===void 0&&Nr.set(e.strings,t=new ut(e)),t}k(e){Mn(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let i of e)r===t.length?t.push(n=new o(this.O(ct()),this.O(ct()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Dr(e).nextSibling;Dr(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ze=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(e,t=this,n,r){let i=this.strings,s=!1;if(i===void 0)e=je(this,e,t,0),s=!dt(e)||e!==this._$AH&&e!==ye,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=je(this,a[n+l],t,l),c===ye&&(c=this._$AH[l]),s||=!dt(c)||c!==this._$AH[l],c===k?e=k:e!==k&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!r&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},kn=class extends Ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},wn=class extends Ze{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},$n=class extends Ze{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=je(this,e,t,0)??k)===ye)return;let n=this._$AH,r=e===k&&n!==k||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==k&&(n===k||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},xn=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){je(this,e)}};var Os=Sn.litHtmlPolyfillSupport;Os?.(ut,ht),(Sn.litHtmlVersions??=[]).push("3.3.3");var Zr=(o,e,t)=>{let n=t?.renderBefore??e,r=n._$litPart$;if(r===void 0){let i=t?.renderBefore??null;n._$litPart$=r=new ht(e.insertBefore(ct(),i),i,void 0,t??{})}return r._$AI(o),r};var zn=globalThis,pe=class extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zr(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ye}};pe._$litElement$=!0,pe.finalized=!0,zn.litElementHydrateSupport?.({LitElement:pe});var Ds=zn.litElementPolyfillSupport;Ds?.({LitElement:pe});(zn.litElementVersions??=[]).push("4.2.2");var Yr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qr=o=>(...e)=>({_$litDirective$:o,values:e}),Nt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var pt=class extends Nt{constructor(e){if(super(e),this.it=k,e.type!==Yr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===k||e==null)return this._t=void 0,this.it=e;if(e===ye)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};pt.directiveName="unsafeHTML",pt.resultType=1;var Xr=qr(pt);async function Rn(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function Kt(o,e,t){await o.callWS({type:"neonplan3d/image/set",image_id:e,data:t})}async function Qr(o){return(await o.callWS({type:"neonplan3d/history/list"})).snapshots}async function Jr(o){await o.callWS({type:"neonplan3d/history/snapshot"})}async function ei(o,e){return(await o.callWS({type:"neonplan3d/history/restore",snapshot_id:e})).revision}function ti(o){return o.callWS({type:"neonplan3d/backup/export"})}function ni(o,e,t){return o.callWS({type:"neonplan3d/backup/import",building:e,packs:t})}var ri=[],Fn=new Map,Ws=0;function ii(o){ri=o,Fn=new Map(o.flatMap(e=>e.items.map(t=>[Ye(e.id,t.id),t]))),Ws++}function oi(){return ri}function Ye(o,e){return`pack:${o}:${e}`}function An(o){return o.startsWith("pack:")}var Hs={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function si(o){return ne(o)?.parts.find(e=>e.screen)}function ne(o){if(!An(o))return;let e=Fn.get(o);if(e)return e;let[,t,...n]=o.split(":"),r=Hs[t];return r?Fn.get(`pack:${r}:${n.join(":")}`):void 0}function Be(o){return re[o]??ne(o)?.size??[.6,.6,.8]}function _t(o){return In.has(o)||!!ne(o)?.electric||!!ne(o)?.light}function Re(o,e){let t=e.split("-")[0];return o.name[t]??o.name.en??Object.values(o.name)[0]??o.id}function Pn(o,e){let t=ne(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall"||e.type==="lamp_wall_updown")return ai;if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));if(e.type==="fan_ceiling"||e.type==="fan_ceiling_light")return Math.max(0,o.height-Math.max(.05,e.h));if(e.type==="access_point"||e.type==="smoke_detector")return Math.max(0,o.height-Math.max(.02,e.h));if(e.type==="fan_wall")return 1.55;if(e.type==="altar_wall")return 1.45;if(e.type==="floating_shelf")return 1.35;if(e.type==="nightstand_floating")return .48;if(e.type==="water_heater")return 1.7;if(e.type==="range_hood")return 1.35;if(e.type==="microwave")return Ut(o,e.x,e.z);if(["modem_router","smart_display","monitor_single","monitor_dual","monitor_triple","printer_3d_open","printer_3d_enclosed","laser_printer","baby_monitor","lamp_night_moon","lamp_star_projector"].includes(e.type))return Ut(o,e.x,e.z);if((e.type==="water_pump"||e.type==="heat_pump_outdoor")&&!o.rooms.some(n=>n.points.length>=3&&B([e.x,e.z],n.points)))return Gt(o,e.x,e.z);switch(t?.mount){case"surface":return Ut(o,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return t?0:li(e)}}var Tn=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","lamp_column","lamp_tv_bars","lamp_orb_table","lamp_portable","lamp_ambient_spot","lamp_cube","lamp_night_moon","lamp_star_projector","lamp_panel_round","lamp_garden_spots","lamp_wall_updown","radiator","air_conditioner","water_pump","altar","altar_wall","shoe_cabinet","motorbike","bicycle_city","bicycle_cargo","scooter","motorcycle_touring","car_sedan","car_hatchback","car_suv","car_pickup","car_van","car_wagon","car_compact","car_electric","car_minibus","fan_ceiling","fan_ceiling_light","fan_wall","fan_floor","water_heater","drying_rack","shoe_bench","room_divider","range_hood","microwave","water_purifier","air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","network_cabinet","nas_server","access_point","wall_thermostat","smoke_detector","siren_alarm","electrical_panel","ups_unit","modem_router","heat_pump_outdoor","hot_water_tank","ventilation_fan","humidifier","smart_display","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","temperature_humidity_sensor","video_doorbell","kitchen_corner","kitchen_display","vanity","crib","bed_single","bed_double","bed_90","bed_140","bed_160","bed_180","bed_200","bed_upholstered_180","bed_boxspring_180","bed_futon_160","wardrobe_2door","wardrobe_3door","wardrobe_4door","wardrobe_6door","wardrobe_mirror","wardrobe_corner","nightstand_drawer","nightstand_slim","nightstand_floating","dresser_80_3","dresser_140_6","chest_tall_5","clothes_rail","bed_canopy","wardrobe_sliding","closet_walkin","vanity_mirror","bed_bench","changing_table","mirror_floor","chest_tall","reading_nook","bed_ambient_180","wardrobe_light","alarm_sunrise","vanity_light","sofa_2","sofa_3","sofa_4","sofa_corner_left","sofa_corner_right","sofa_chesterfield","sofa_velvet_3","sofa_modular_5","sofa_armless","sofa_chaise","sofa_u","club_chair","wingback_chair","rocking_chair","chaise_longue","cocktail_chair","recliner","bean_bag","chair_upholstered","chair_shell","ottoman","tv_console","display_cabinet","sofa_l","sofa_bed","shower_screen","hammock","stone_table_set","planter_large","water_tank","gate","fence","gas_grill","lounge_set_outdoor","sun_lounger","parasol","pergola","raised_bed","greenhouse","hot_tub_outdoor","fire_bowl","garden_torch","play_tower_slide","garden_shed","trampoline","flower_pots_3","lawn_sprinkler","irrigation_valve_box","rain_barrel","garden_lantern","outdoor_kitchen","patio_heater","tree_oak","tree_lime","tree_birch","tree_maple","tree_fruit","tree_spruce","tree_pine","tree_thuja","shrub","shrub_flowering","brush_wild","trees_group_3","sofa","armchair","stool","coffee_table","coffee_table_round","coffee_table_glass","nesting_tables","side_table_round","tv_board","tv_wall","sideboard","shelf","bookshelf_wide","cube_shelf_2x2","cube_shelf_4x2","cube_shelf_4x4","room_divider_shelf","floating_shelf","plant","rug","altar_table","altar_cabinet","console_table","lowboard_120","lowboard_160","lowboard_200","highboard","chest_drawers_3","tv_stand","wood_stove","media_wall_tv","piano_upright","vase_pampas","plant_monstera","rug_round","fireplace_wall_electric","table","table_120","table_160","table_200","table_solid_220","table_round","chair","bench","bench_dining_160","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","vanity_60","vanity_80","vanity_100","double_vanity_120","pedestal_basin","bathtub_builtin","bathtub_corner","shower_corner_90","shower_niche_120","shower_walkin_140","toilet_close_coupled","toilet_wall_hung","bidet","bathroom_cabinet_tall","bathroom_cabinet_mid","mirror_round_light","mirror_80_light","bathroom_wall_shelf","towel_rail","bathtub_freestanding","sauna","towel_radiator","whirlpool_indoor","washing_machine_cabinet","laundry_basket","ladder_shelf_towels","mirror_cabinet_light","electric_towel_heater","bathroom_fan","washer_vanity","rain_shower_led","mirror_led_clock","laundry_cabinet_basket","column_round","column_square","column_steel","ceiling_beams","downstand_beam","chimney_inside","fireplace_builtin","sliding_wall","builtin_shelf_niche","led_niche","light_cove","platform_steps","gallery_railing_glass","window_seat","washer","dryer","washer_dryer_tower","balcony_solar","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_landing","stairs_landing_l","stairs_winder_l","stairs_spiral","stairs_open","stairs_concrete","stairs_compact","railing_glass","railing_metal","railing_wood","railing_cable","workbench","workbench_pegboard","tool_cabinet","tool_chest","storage_rack_garage","wall_shelf_garage","air_compressor","shop_vacuum","ladder_step","ladder_extension","storage_boxes","tire_stack","bike_rack","repair_stand","parts_bin","utility_sink_garage","charging_bay","desk_l","desk_corner","desk_sit_stand","chair_ergonomic","chair_visitor","filing_cabinet","drawer_unit_office","bookcase_office","monitor_single","monitor_dual","pc_tower","gaming_chair","sim_racing_cockpit","server_rack_42u","printer_3d_open","whiteboard_office","monitor_triple","arcade_cabinet","laser_printer","phone_booth_office","printer_3d_enclosed","filament_shelf_wall","tipi_kids","play_kitchen_kids","desk_kids","toy_shelf_boxes","cushion_corner_kids","rocking_horse","play_rug_road","table_chairs_kids","ball_pit","bed_house","baby_monitor","changing_dresser","wardrobe_kids","toy_boxes_3","cat_tree_large","cat_scratching_post","cat_scratch_board_wall","cat_cave","cat_bed_round","cat_wall_perch","cat_climbing_steps_wall","litter_box_hood","litter_box_self_cleaning","dog_bed","dog_basket","dog_house","robot_vacuum","robot_mower","inverter","home_battery","wallbox","meter","grid_point","parking","fridge_smart","stairwell"],ft=new Set(["stairs","stairs_landing","stairs_landing_l","stairs_winder_l","stairs_spiral","stairs_open","stairs_concrete","stairs_compact"]),qe=["motorbike","bicycle_city","bicycle_cargo","scooter","motorcycle_touring","car_sedan","car_hatchback","car_suv","car_pickup","car_van","car_wagon","car_compact","car_electric","car_minibus"],mt={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_panel_round","lamp_pendant","lamp_floor","lamp_uplight","lamp_column","lamp_tv_bars","lamp_table","lamp_orb_table","lamp_portable","lamp_ambient_spot","lamp_cube","lamp_night_moon","lamp_star_projector","lamp_wall","lamp_wall_updown","led_strip","lamp_bollard","lamp_garden","lamp_garden_spots"],living:["sofa","sofa_2","sofa_3","sofa_4","sofa_l","sofa_corner_left","sofa_corner_right","sofa_chesterfield","sofa_velvet_3","sofa_modular_5","sofa_armless","sofa_chaise","sofa_u","sofa_bed","chaise_longue","armchair","club_chair","cocktail_chair","wingback_chair","recliner","rocking_chair","bean_bag","ottoman","stool","chair_upholstered","chair_shell","coffee_table","coffee_table_round","coffee_table_glass","nesting_tables","side_table_round","console_table","tv_console","lowboard_120","lowboard_160","lowboard_200","tv_board","tv_wall","tv_stand","media_wall_tv","smart_display","smart_speaker","smart_curtain","sideboard","highboard","chest_drawers_3","display_cabinet","shelf","bookshelf_wide","cube_shelf_2x2","cube_shelf_4x2","cube_shelf_4x4","room_divider_shelf","floating_shelf","builtin_shelf_niche","window_seat","room_divider","sliding_wall","wood_stove","fireplace_builtin","fireplace_wall_electric","piano_upright","vase_pampas","plant","plant_monstera","rug","rug_round","altar","altar_table","altar_cabinet","altar_wall"],dining:["table","table_120","table_160","table_200","table_solid_220","table_round","chair","bench","bench_dining_160","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_corner","kitchen_wall","kitchen_tall","kitchen_display","island","worktop","sink","stove","range_hood","microwave","water_purifier","dishwasher","fridge"],sleeping:["bed","bed_single","bed_double","bed_90","bed_140","bed_160","bed_180","bed_200","bed_upholstered_180","bed_boxspring_180","bed_futon_160","bed_canopy","bed_ambient_180","bunk_bed","crib","tipi_kids","play_kitchen_kids","desk_kids","toy_shelf_boxes","cushion_corner_kids","rocking_horse","play_rug_road","table_chairs_kids","ball_pit","bed_house","baby_monitor","changing_dresser","wardrobe_kids","toy_boxes_3","nightstand","nightstand_drawer","nightstand_slim","nightstand_floating","wardrobe","wardrobe_2door","wardrobe_3door","wardrobe_4door","wardrobe_6door","wardrobe_mirror","wardrobe_corner","wardrobe_sliding","wardrobe_light","closet_walkin","dresser","dresser_80_3","dresser_140_6","chest_tall_5","chest_tall","clothes_rail","vanity","vanity_mirror","vanity_light","bed_bench","changing_table","mirror_floor","reading_nook","alarm_sunrise"],bath:["bathtub","bathtub_builtin","bathtub_corner","bathtub_freestanding","whirlpool_indoor","shower","shower_corner_90","shower_niche_120","shower_walkin_140","rain_shower_led","shower_screen","wc","toilet_close_coupled","toilet_wall_hung","bidet","washbasin","vanity_60","vanity_80","vanity_100","double_vanity_120","pedestal_basin","bathroom_cabinet_tall","bathroom_cabinet_mid","mirror_round_light","mirror_80_light","mirror_cabinet_light","mirror_led_clock","bathroom_wall_shelf","towel_rail","towel_radiator","electric_towel_heater","ladder_shelf_towels","sauna","bathroom_fan","washing_machine_cabinet","washer_vanity","laundry_basket","laundry_cabinet_basket","water_heater","hot_water_tank","washer","dryer","washer_dryer_tower","drying_rack"],climate:["air_conditioner","heat_pump_outdoor","air_purifier","humidifier","radiator","wall_thermostat","temperature_humidity_sensor","ventilation_fan","fan_ceiling","fan_ceiling_light","fan_wall","fan_floor"],outdoor:["security_camera","video_doorbell","smart_lock","water_pump","robot_mower","balcony_solar","hammock","stone_table_set","planter_large","water_tank","gate","fence","gas_grill","lounge_set_outdoor","sun_lounger","parasol","pergola","raised_bed","greenhouse","hot_tub_outdoor","fire_bowl","garden_torch","play_tower_slide","garden_shed","trampoline","flower_pots_3","lawn_sprinkler","irrigation_valve_box","rain_barrel","garden_lantern","outdoor_kitchen","patio_heater","tree_oak","tree_lime","tree_birch","tree_maple","tree_fruit","tree_spruce","tree_pine","tree_thuja","shrub","shrub_flowering","brush_wild","trees_group_3"],work:["desk","desk_l","desk_corner","desk_sit_stand","office_chair","chair_ergonomic","chair_visitor","gaming_chair","filing_cabinet","drawer_unit_office","bookcase_office","monitor_single","monitor_dual","monitor_triple","pc_tower","sim_racing_cockpit","server_rack_42u","printer_3d_open","printer_3d_enclosed","whiteboard_office","arcade_cabinet","laser_printer","phone_booth_office","filament_shelf_wall","worktop","tall_cabinet","coat_rack","shoe_cabinet","shoe_bench","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","network_cabinet","nas_server","modem_router","electrical_panel","ups_unit","access_point","smoke_detector","siren_alarm","stairs","stairs_landing","stairs_landing_l","stairs_winder_l","stairs_spiral","stairs_open","stairs_concrete","stairs_compact","railing_glass","railing_metal","railing_wood","railing_cable","workbench","workbench_pegboard","tool_cabinet","tool_chest","storage_rack_garage","wall_shelf_garage","air_compressor","shop_vacuum","ladder_step","ladder_extension","storage_boxes","tire_stack","bike_rack","repair_stand","parts_bin","utility_sink_garage","charging_bay","robot_vacuum","column_round","column_square","column_steel","ceiling_beams","downstand_beam","chimney_inside","led_niche","light_cove","platform_steps","gallery_railing_glass"],pets:["cat_tree_large","cat_scratching_post","cat_scratch_board_wall","cat_cave","cat_bed_round","cat_wall_perch","cat_climbing_steps_wall","litter_box_hood","litter_box_self_cleaning","dog_bed","dog_basket","dog_house"],vehicles:[...qe,"parking"]},ve=["meter","inverter","home_battery","wallbox","grid_point"],Ln=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden","lamp_column","lamp_tv_bars","lamp_orb_table","lamp_portable","lamp_ambient_spot","lamp_cube","lamp_night_moon","lamp_star_projector","lamp_panel_round","lamp_garden_spots","lamp_wall_updown"]),In=new Set([...Ln,"radiator","air_conditioner","water_pump","fan_ceiling","fan_ceiling_light","fan_wall","fan_floor","water_heater","range_hood","microwave","water_purifier","air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","network_cabinet","nas_server","access_point","wall_thermostat","smoke_detector","siren_alarm","electrical_panel","ups_unit","modem_router","heat_pump_outdoor","hot_water_tank","ventilation_fan","humidifier","smart_display","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","temperature_humidity_sensor","video_doorbell","robot_vacuum","robot_mower","inverter","home_battery","wallbox","meter","tv_board","tv_wall","tv_stand","media_wall_tv","fireplace_wall_electric","bed_ambient_180","wardrobe_light","alarm_sunrise","vanity_light","mirror_round_light","mirror_80_light","mirror_cabinet_light","electric_towel_heater","bathroom_fan","washer_vanity","rain_shower_led","mirror_led_clock","fireplace_builtin","led_niche","light_cove","desk","fridge","fridge_smart","stove","kitchen_tall","kitchen_display","dishwasher","washer","dryer","washer_dryer_tower","balcony_solar","kitchen","island","sink"]),re={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],vanity_60:[.6,.48,.86],vanity_80:[.8,.5,.86],vanity_100:[1,.52,.86],double_vanity_120:[1.2,.52,.86],pedestal_basin:[.58,.48,.86],bathtub_builtin:[1.7,.75,.58],bathtub_corner:[1.4,1.4,.6],shower_corner_90:[.9,.9,2.05],shower_niche_120:[1.2,.9,2.05],shower_walkin_140:[1.4,.9,2.05],toilet_close_coupled:[.38,.65,.78],toilet_wall_hung:[.38,.54,.42],bidet:[.38,.58,.42],bathroom_cabinet_tall:[.42,.36,1.8],bathroom_cabinet_mid:[.65,.36,1.15],mirror_round_light:[.7,.08,.7],mirror_80_light:[.8,.08,.6],bathroom_wall_shelf:[.7,.22,.5],towel_rail:[.65,.12,.75],bathtub_freestanding:[1.75,.8,.62],sauna:[1.8,1.5,2.1],towel_radiator:[.6,.12,1.2],whirlpool_indoor:[1.8,1.2,.68],washing_machine_cabinet:[.72,.72,2.1],laundry_basket:[.48,.4,.62],ladder_shelf_towels:[.62,.32,1.65],mirror_cabinet_light:[.8,.18,.72],electric_towel_heater:[.62,.12,1.25],bathroom_fan:[.24,.1,.24],washer_vanity:[1.25,.66,.92],rain_shower_led:[.45,.45,2.1],mirror_led_clock:[1,.08,.7],laundry_cabinet_basket:[.75,.58,1.9],column_round:[.3,.3,2.7],column_square:[.3,.3,2.7],column_steel:[.22,.22,2.7],ceiling_beams:[3.2,2.4,.2],downstand_beam:[3,.24,.35],chimney_inside:[.65,.55,2.7],fireplace_builtin:[1.2,.35,1.1],sliding_wall:[2.4,.18,2.35],builtin_shelf_niche:[1.2,.24,1.8],led_niche:[1.2,.16,.5],light_cove:[2.4,.4,.14],platform_steps:[1.8,1.2,.32],gallery_railing_glass:[2,.1,1.05],window_seat:[1.4,.55,.5],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_landing:[2.1,3.2,2.75],stairs_landing_l:[2.8,2.8,2.75],stairs_winder_l:[2.4,2.4,2.75],stairs_spiral:[1.8,1.8,2.75],stairs_open:[1,3.2,2.75],stairs_concrete:[1.1,3.4,2.75],stairs_compact:[.8,2.2,2.75],railing_glass:[2,.1,1.05],railing_metal:[2,.1,1.05],railing_wood:[2,.12,1],railing_cable:[2,.1,1.05],workbench:[1.8,.72,.92],workbench_pegboard:[1.8,.72,1.9],tool_cabinet:[.9,.5,1.9],tool_chest:[1.1,.55,1],storage_rack_garage:[1.8,.55,2],wall_shelf_garage:[1.4,.35,.7],air_compressor:[.9,.48,.75],shop_vacuum:[.5,.5,.75],ladder_step:[.65,1,1.6],ladder_extension:[.55,.18,2.4],storage_boxes:[1.2,.7,.9],tire_stack:[.75,.75,1.05],bike_rack:[1.8,.65,1.25],repair_stand:[.8,.8,1.8],parts_bin:[.8,.32,1.2],utility_sink_garage:[.7,.55,1.1],charging_bay:[1,.45,1.65],desk_l:[1.8,1.6,.75],desk_corner:[1.5,1.5,.75],desk_sit_stand:[1.6,.75,1.15],chair_ergonomic:[.68,.68,1.18],chair_visitor:[.58,.62,.9],filing_cabinet:[.48,.62,1.3],drawer_unit_office:[.45,.55,.65],bookcase_office:[1.2,.36,1.9],monitor_single:[.62,.22,.48],monitor_dual:[1.2,.28,.5],pc_tower:[.26,.48,.52],gaming_chair:[.7,.72,1.3],sim_racing_cockpit:[1.4,2,1.25],server_rack_42u:[.65,.9,2],printer_3d_open:[.55,.55,.75],whiteboard_office:[1.8,.08,1.05],monitor_triple:[1.65,.3,.52],arcade_cabinet:[.75,.85,1.8],laser_printer:[.55,.5,.35],phone_booth_office:[1.1,1.1,2.2],printer_3d_enclosed:[.62,.62,.68],filament_shelf_wall:[1.4,.32,.85],tipi_kids:[1.3,1.3,1.65],play_kitchen_kids:[1,.4,1.1],desk_kids:[.9,.55,.85],toy_shelf_boxes:[1.2,.38,1],cushion_corner_kids:[1.4,1.4,.5],rocking_horse:[.9,.35,.75],play_rug_road:[1.6,1.2,.02],table_chairs_kids:[1.4,1,.65],lamp_night_moon:[.22,.18,.42],ball_pit:[1.2,1.2,.42],bed_house:[1,2.1,1.65],baby_monitor:[.16,.16,.32],lamp_star_projector:[.22,.22,.22],changing_dresser:[.9,.6,1],wardrobe_kids:[.9,.5,1.6],toy_boxes_3:[1.2,.45,.5],cat_tree_large:[.8,.65,1.85],cat_scratching_post:[.55,.55,1],cat_scratch_board_wall:[.45,.08,.9],cat_cave:[.55,.55,.65],cat_bed_round:[.65,.65,.18],cat_wall_perch:[.75,.38,.12],cat_climbing_steps_wall:[.8,.32,1.05],litter_box_hood:[.55,.72,.62],litter_box_self_cleaning:[.62,.72,.78],dog_bed:[.9,.7,.18],dog_basket:[.85,.65,.3],dog_house:[1,1.25,1.05],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],lamp_column:[.12,.12,1.45],lamp_tv_bars:[.65,.16,.38],lamp_orb_table:[.28,.28,.24],lamp_portable:[.24,.24,.26],lamp_ambient_spot:[.2,.2,.2],lamp_cube:[.26,.26,.24],lamp_panel_round:[.42,.42,.045],lamp_garden_spots:[.65,.18,.32],lamp_wall_updown:[.14,.12,.32],radiator:[1,.1,.6],air_conditioner:[1,.22,.3],water_pump:[.55,.4,.45],altar:[1.27,.61,1.53],altar_wall:[.89,.48,.48],shoe_cabinet:[1,.35,1],motorbike:[.72,1.9,1.15],bicycle_city:[.65,1.8,1.15],bicycle_cargo:[.75,2.35,1.2],scooter:[.72,1.85,1.15],motorcycle_touring:[.9,2.25,1.4],car_sedan:[1.82,4.65,1.45],car_hatchback:[1.78,4.15,1.5],car_suv:[1.92,4.65,1.72],car_pickup:[1.95,5.25,1.78],car_van:[1.95,5.05,2.05],car_wagon:[1.84,4.75,1.5],car_compact:[1.7,3.75,1.48],car_electric:[1.86,4.55,1.48],car_minibus:[2,5.4,2.25],fan_ceiling:[1.4,1.4,.32],fan_ceiling_light:[1.4,1.4,.4],fan_wall:[.5,.3,.5],fan_floor:[.45,.45,1.25],water_heater:[.75,.35,.45],drying_rack:[1.6,.6,1.7],shoe_bench:[1,.38,.48],room_divider:[1.6,.3,2.1],range_hood:[.75,.5,.5],microwave:[.5,.4,.3],water_purifier:[.42,.38,1.2],air_purifier:[.32,.32,.65],smart_speaker:[.14,.14,.19],security_camera:[.2,.24,.22],smart_lock:[.1,.08,.32],smart_curtain:[2,.16,2.2],network_cabinet:[.6,.65,1.35],nas_server:[.42,.45,.34],access_point:[.24,.24,.055],wall_thermostat:[.18,.065,.24],smoke_detector:[.15,.15,.055],siren_alarm:[.22,.085,.28],electrical_panel:[.55,.14,.8],ups_unit:[.45,.5,.72],modem_router:[.34,.22,.12],heat_pump_outdoor:[1,.48,.86],hot_water_tank:[.55,.55,1.3],ventilation_fan:[.32,.14,.32],humidifier:[.38,.38,.8],smart_display:[.55,.16,.36],wall_switch:[.09,.045,.09],wall_outlet:[.09,.045,.09],smart_plug:[.1,.08,.12],motion_sensor:[.11,.08,.11],contact_sensor:[.11,.04,.05],water_leak_sensor:[.09,.09,.035],temperature_humidity_sensor:[.1,.045,.1],video_doorbell:[.055,.045,.14],kitchen_corner:[1.25,1.25,.92],kitchen_display:[.8,.42,2.1],vanity:[1,.45,1.55],crib:[.75,1.25,.95],bed_single:[1,2.05,.9],bed_double:[1.8,2.05,.9],bed_90:[.9,2,.88],bed_140:[1.4,2,.9],bed_160:[1.6,2,.92],bed_180:[1.8,2,.95],bed_200:[2,2,.95],bed_upholstered_180:[1.95,2.15,1.05],bed_boxspring_180:[1.9,2.1,1.1],bed_futon_160:[1.7,2.1,.65],wardrobe_2door:[1,.6,2.1],wardrobe_3door:[1.5,.6,2.1],wardrobe_4door:[2,.6,2.1],wardrobe_6door:[3,.6,2.1],wardrobe_mirror:[1.5,.6,2.1],wardrobe_corner:[1.25,1.25,2.1],nightstand_drawer:[.5,.42,.55],nightstand_slim:[.32,.38,.56],nightstand_floating:[.48,.34,.24],dresser_80_3:[.8,.45,.82],dresser_140_6:[1.4,.48,.86],chest_tall_5:[.65,.45,1.2],clothes_rail:[1.2,.5,1.65],bed_canopy:[1.8,2.1,2.15],wardrobe_sliding:[2,.65,2.15],closet_walkin:[2.2,1.4,2.2],vanity_mirror:[1.1,.48,1.55],bed_bench:[1.3,.45,.48],changing_table:[.95,.58,.95],mirror_floor:[.65,.45,1.75],chest_tall:[.75,.48,1.25],reading_nook:[1.2,1,1.15],bed_ambient_180:[1.9,2.1,1],wardrobe_light:[1.5,.62,2.15],alarm_sunrise:[.22,.16,.18],vanity_light:[1.1,.48,1.6],sofa_2:[1.65,.9,.82],sofa_3:[2.15,.92,.82],sofa_4:[2.75,.95,.84],sofa_corner_left:[2.5,1.7,.82],sofa_corner_right:[2.5,1.7,.82],sofa_chesterfield:[2.15,.92,.78],sofa_velvet_3:[2.1,.9,.8],sofa_modular_5:[2.8,1.5,.76],sofa_armless:[1.8,.82,.76],sofa_chaise:[2.35,1.55,.82],sofa_u:[3,1.8,.84],club_chair:[.82,.82,.78],wingback_chair:[.82,.9,1.12],rocking_chair:[.72,1,1.05],chaise_longue:[.82,1.75,.9],cocktail_chair:[.72,.72,.78],recliner:[.85,1.55,1.05],bean_bag:[.85,.85,.72],chair_upholstered:[.5,.56,.92],chair_shell:[.52,.56,.86],ottoman:[.75,.55,.43],tv_console:[1.8,.42,.55],display_cabinet:[1,.42,1.9],cube_shelf_4x4:[1.6,.35,1.6],room_divider_shelf:[1.6,.32,1.9],console_table:[1.2,.35,.78],lowboard_120:[1.2,.42,.5],lowboard_160:[1.6,.42,.5],lowboard_200:[2,.42,.5],highboard:[1.2,.42,1.25],chest_drawers_3:[.9,.45,.82],tv_stand:[1.4,.5,1.45],wood_stove:[.55,.5,1.05],media_wall_tv:[2.4,.42,2.1],piano_upright:[1.45,.62,1.25],vase_pampas:[.5,.5,1.35],plant_monstera:[.7,.7,1.55],rug_round:[1.8,1.8,.01],fireplace_wall_electric:[1.2,.18,.55],table_120:[1.2,.9,.75],table_160:[1.6,.9,.75],table_200:[2,.9,.75],table_solid_220:[2.2,1,.76],bench_dining_160:[1.6,.42,.48],sofa_l:[2.5,1.7,.82],sofa_bed:[2,1.35,.78],shower_screen:[1,.08,1.9],hammock:[2.6,.9,1.2],stone_table_set:[2.2,2.2,.75],planter_large:[.8,.8,1.6],water_tank:[1.25,1.25,1.55],gate:[3.2,.18,1.8],fence:[2.4,.16,1.5],gas_grill:[1.35,.72,1.2],lounge_set_outdoor:[3.2,2.6,.82],sun_lounger:[.76,2,.82],parasol:[2.6,2.6,2.35],pergola:[3.6,3,2.45],raised_bed:[1.8,.9,.72],greenhouse:[2.6,3.4,2.35],hot_tub_outdoor:[2.2,2.2,.9],fire_bowl:[.9,.9,.45],garden_torch:[.28,.28,1.25],play_tower_slide:[2.8,3.8,2.7],garden_shed:[2.4,2,2.35],trampoline:[3,3,2.1],flower_pots_3:[1.25,.6,.75],lawn_sprinkler:[.55,.55,.25],irrigation_valve_box:[.55,.4,.18],rain_barrel:[.75,.75,1.05],garden_lantern:[.32,.32,1],outdoor_kitchen:[2.4,.75,.95],patio_heater:[.82,.82,2.2],tree_oak:[4.2,4.2,6.5],tree_lime:[3.8,3.4,6],tree_birch:[2.4,2.4,6.8],tree_maple:[3.6,3.6,5.4],tree_fruit:[3.2,3.2,4.2],tree_spruce:[3,3,6.2],tree_pine:[3.6,3.6,6.5],tree_thuja:[1.4,1.4,3.2],shrub:[1.6,1.4,1.25],shrub_flowering:[1.5,1.4,1.2],brush_wild:[2.2,1.8,1.1],trees_group_3:[6.5,5.2,6.2],robot_vacuum:[.42,.62,.72],robot_mower:[.85,1.15,.48],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],coffee_table_round:[.9,.9,.42],coffee_table_glass:[1.1,.6,.42],nesting_tables:[1,.65,.46],side_table_round:[.55,.55,.55],bookshelf_wide:[1.6,.35,1.9],cube_shelf_2x2:[.82,.35,.82],cube_shelf_4x2:[1.6,.35,.82],floating_shelf:[1.2,.25,.08],altar_table:[1.07,.56,1.35],altar_cabinet:[1.53,.68,1.62],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],washer_dryer_tower:[.66,.68,1.75],balcony_solar:[1.65,.72,1.05],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function Ce(o){return o.kind==="veranda"||o.kind==="balcony"||o.kind==="canopy"}function ci(o,e){if(o.length<2)return 0;if(e<0){let u=0,h=-1;for(let p=0;p<o.length;p++){let f=o[p],_=o[(p+1)%o.length],g=Math.hypot(_[0]-f[0],_[1]-f[1]);g>h&&([u,h]=[p,g])}return u}let t=o[e],n=o[(e+1)%o.length],r=n[0]-t[0],i=n[1]-t[1],s=Math.hypot(r,i)||1,a=(t[0]+n[0])/2,l=(t[1]+n[1])/2,c=0,d=-1;for(let u=0;u<o.length;u++){if(u===e)continue;let h=o[u],p=o[(u+1)%o.length],f=p[0]-h[0],_=p[1]-h[1],g=Math.hypot(f,_)||1,y=Math.abs((f*r+_*i)/(g*s)),v=Math.abs(r*((h[1]+p[1])/2-l)-i*((h[0]+p[0])/2-a))/s*y;v>d&&([c,d]=[u,v])}return c}var di=["always","no_power","never"],ui=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],jt={field:null,size:1,right:0,up:0},hi=["navigate","more_info","service","fire_dom_event"];function On(o,e,t){return o?e?!!t.lock_plan:!!o.locked:!1}var pi=["rain","snow","fog","clouds","lightning","sky"],Dn=["rain","snow","clouds","lightning","sky"],_i=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola"],Wn={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Hn(o){return o==="hedge"||o==="fence"||o==="pergola"}var Bn=["x","-x","z","-z"];function Bs(o,e,t){let n=o.slope??0;if(!n||o.type==="pool")return 0;let r=o.slope_dir??"x",i=(c,d)=>r==="x"?c:r==="-x"?-c:r==="z"?d:-d,s=1/0,a=-1/0;for(let[c,d]of o.points){let u=i(c,d);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,t)-s)/(a-s)));return n*l}function Cs(o,e,t,n){return fi(o)+(e.offset??0)+Wn[e.type]-Bs(e,t,n)}function fi(o){return o.elevation>.3?0:-.2}function Gt(o,e,t){let n=(o.outdoor??[]).filter(i=>!Hn(i.type)&&i.type!=="pool"&&B([e,t],i.points)),r=[...n].reverse().find(i=>i.cut)??n[0];return r?Cs(o,r,e,t):fi(o)}var Vs={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},mi=["wood","oak","tiles","carpet","stone","concrete"],gi={type:"none",pitch:35,overhang:.4},Ns={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...gi}};function bi(o,e,t){return{id:o,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var Ks=2.75;function yi(o,e){if(e!=null&&Number.isFinite(e))return Math.round(e*Ks*100)/100;let t=o.reduce((n,r)=>!n||r.elevation>n.elevation?r:n,null);return t?Math.round((t.elevation+t.height+.25)*100)/100:0}function vi(o,e,t){let n=o.rooms.flatMap(a=>a.points.map(l=>l[0])),r=o.rooms.flatMap(a=>a.points.map(l=>l[1])),i=n.length?Math.ceil(Math.max(...n))+1:0,s=r.length?Math.floor(Math.min(...r)):0;return e.map((a,l)=>{let c=i+l%3*4.5,d=s+Math.floor(l/3)*3.5;return{id:t(),name:a.name,area_id:a.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function ki(o,e,t,n){let r=o.rotation*Math.PI/180,i=Math.cos(r),s=Math.sin(r),[a,l]=e,c=o.x-a*(o.w/2)*i+l*(o.d/2)*s,d=o.z-a*(o.w/2)*s-l*(o.d/2)*i,u=t[0]-c,h=t[1]-d,p=y=>Math.max(.1,Math.round(y/n)*n),f=p((u*i+h*s)*a),_=p((-u*s+h*i)*l),g=y=>Math.round(y*1e3)/1e3;return{x:g(c+a*(f/2)*i-l*(_/2)*s),z:g(d+a*(f/2)*s+l*(_/2)*i),w:g(f),d:g(_)}}function Cn(o,e){let t=o.rotation*Math.PI/180,n=Math.cos(t),r=Math.sin(t),[i,s]=e;return[o.x+i*(o.w/2)*n-s*(o.d/2)*r,o.z+i*(o.w/2)*r+s*(o.d/2)*n]}function Vn(o,e){return Math.atan2(-(e[0]-o.x),e[1]-o.z)*180/Math.PI}var ai=1.75;function Nn(o){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_panel_round","lamp_pendant","fan_ceiling","fan_ceiling_light","access_point","smoke_detector","stairwell","parking"].includes(o.type)||ft.has(o.type)?!1:ne(o.type)?.mount!=="ceiling"}function se(o){return Ln.has(o)||!!ne(o)?.light}var Us=new Set(["table","table_round","coffee_table","coffee_table_round","coffee_table_glass","nesting_tables","side_table_round","console_table","lowboard_120","lowboard_160","lowboard_200","table_120","table_160","table_200","table_solid_220","tv_console","desk","desk_l","desk_corner","desk_sit_stand","desk_kids","table_chairs_kids","changing_dresser","nightstand","nightstand_drawer","nightstand_slim","nightstand_floating","vanity_mirror","vanity_light","changing_table","vanity_60","vanity_80","vanity_100","double_vanity_120","bathroom_cabinet_mid","bathroom_wall_shelf","washer_vanity","builtin_shelf_niche","window_seat","platform_steps","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Kn(o,e,t,n=0){let r=le(o.points),i=r.x1-r.x0-2*n,s=r.z1-r.z0-2*n,a=[];for(let l=0;l<e;l++)for(let c=0;c<t;c++){let d=[Math.round((r.x0+n+i/t*(c+.5))*1e3)/1e3,Math.round((r.z0+n+s/e*(l+.5))*1e3)/1e3];B(d,o.points)&&a.push(d)}return a}function Xe(o,e,t){let n=s=>Math.round(s*1e3)/1e3,[r,i]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[t];return[n(o[0]+r*e),n(o[1]+i*e)]}function li(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"floating_shelf":return 1.35;case"wall_shelf_garage":return 1.25;case"whiteboard_office":return 1.2;case"filament_shelf_wall":return 1.1;case"cat_scratch_board_wall":return .65;case"cat_wall_perch":return 1.15;case"cat_climbing_steps_wall":return .55;case"nightstand_floating":return .48;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"air_conditioner":return 1.9;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;case"security_camera":return 1.85;case"smart_lock":return .95;case"wall_thermostat":return 1.35;case"siren_alarm":return 1.85;case"electrical_panel":return .85;case"ventilation_fan":return 1.8;case"wall_switch":return 1.05;case"wall_outlet":case"smart_plug":return .3;case"motion_sensor":return 1.9;case"contact_sensor":return 1.1;case"temperature_humidity_sensor":return 1.35;case"video_doorbell":return 1.25;default:return 0}}function Ut(o,e,t){let n=0;for(let r of o.furniture)!(Us.has(r.type)||ne(r.type)?.surface)||!B([e,t],gt(r))||(n=Math.max(n,r.h));return n}var Un=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Gn=["standard","bars","glass_wall"];function Zt(o,e){return o.type==="door"?o.style&&Un.includes(o.style)?o.style:e?"front":"interior":o.style&&Gn.includes(o.style)?o.style:"standard"}function wi(o,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",i=o-.04,s=Math.min(1.05,Math.max(.6,i-(r?.6:.3))),a=(i-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let d=i-.5;if(l+c>d){let h=Math.max(0,d)/(l+c);l*=h,c*=h}return r?{panels:[[.02,.02+l],[o-.02-c,o-.02]],x0:.02+l,x1:o-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:o-.02}:{panels:[[o-.02-l,o-.02]],x0:.02,x1:o-.02-l}}function jn(o){return o==="front"||o==="front_glass"||o==="sidelight"||o==="sidelights"}var Yt={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function Zn(o){if(o.type==="garage")return"garage";if(o.type==="window"&&o.style==="glass_wall")return"glass_wall";let e=o.leaves===2;return o.type==="door"?!e&&o.style&&jn(o.style)?"front":e?"door_double":"door":o.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function qt(o){o.energy={...Vs,...o.energy??{}},o.presence=o.presence??[],o.settings={...Ns,...o.settings,roof:{...gi,...o.settings?.roof??{}}};for(let e of o.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>{let r={...n,entity:n.entity??null,power:n.power??null};if(n.type==="robot_vacuum"&&Math.abs(n.w-.36)<.001&&Math.abs(n.d-.5)<.001&&Math.abs(n.h-.1)<.001){let[i,s,a]=re.robot_vacuum;return{...r,w:i,d:s,h:a}}return r});let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let r of t){let i=n[r.mount??"ceiling"],[s,a,l]=re[i];e.furniture.push({id:`lamp_${r.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:i,x:r.x,z:r.z,rotation:0,w:s,d:a,h:l,variant:null,entity:r.entity_id,power:null})}e.placements=e.placements.filter(r=>!r.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function G(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function ee(o){let e=0;for(let t=0;t<o.length;t++){let[n,r]=o[t],[i,s]=o[(t+1)%o.length];e+=n*s-i*r}return e/2}function _e(o){return Math.abs(ee(o))}function fe(o){let e=ee(o);if(Math.abs(e)<1e-9){let r=o.length||1;return[o.reduce((i,s)=>i+s[0],0)/r,o.reduce((i,s)=>i+s[1],0)/r]}let t=0,n=0;for(let r=0;r<o.length;r++){let[i,s]=o[r],[a,l]=o[(r+1)%o.length],c=i*l-a*s;t+=(i+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Xt(o){if(o.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=o[e],[r,i]=o[(e+1)%4];if(Math.abs(t-r)>1e-6&&Math.abs(n-i)>1e-6)return!1}return!0}function le(o){let e=1/0,t=1/0,n=-1/0,r=-1/0;for(let[i,s]of o)e=Math.min(e,i),t=Math.min(t,s),n=Math.max(n,i),r=Math.max(r,s);return{x0:e,z0:t,x1:n,z1:r}}function gt(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=o.w/2,i=o.d/2;return[[-r,-i],[r,-i],[r,i],[-r,i]].map(([s,a])=>[o.x+s*t-a*n,o.z+s*n+a*t])}function B(o,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[i,s]=e[n],[a,l]=e[r];s>o[1]!=l>o[1]&&o[0]<(a-i)*(o[1]-s)/(l-s)+i&&(t=!t)}return t}var $i={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_column:"column",lamp_tv_bars:"tv_bars",lamp_orb_table:"orb_table",lamp_portable:"portable",lamp_ambient_spot:"ambient",lamp_cube:"cube",lamp_panel_round:"round_panel",lamp_garden_spots:"garden_set",lamp_wall_updown:"wall_updown",lamp_night_moon:"kids_moon",lamp_star_projector:"star_projector",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var xi="neonplan3d";function Gs(o){let e=structuredClone(o);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let t of e.floors)t.placements=[],t.background=null,t.rooms=t.rooms.map(n=>({...n,area_id:null})),t.furniture=t.furniture.map(n=>({...n,entity:null,power:null})),t.openings=t.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return e}function Si(o,e){return{format:xi,version:1,exported_at:new Date().toISOString(),building:e?Gs(o):structuredClone(o)}}function Mi(o){let e;try{e=JSON.parse(o)}catch{throw new Error("not_json")}let t=e,n=t?.format===xi?t.building:e;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let r of n.floors)r.background=null;return qt(n)}function Ei(o){let e=new Set;for(let t of o.floors){t.background?.image_id&&e.add(t.background.image_id);for(let n of t.furniture)for(let r of n.pictures??[])r.image&&!/^https?:\/\//.test(r.image)&&!r.image.startsWith("camera:")&&e.add(r.image)}return[...e]}function Yn(o,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=t,n.download=o,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var js={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",water_heater:"switch",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Zs=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Ys=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),qs=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Qt=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Pi=new Set(["light","switch"]);function Xn(o){return o.slice(0,o.indexOf("."))}function N(o){return js[Xn(o)]??null}function yt(o){return o!==null&&o!=="scene"&&o!=="script"}function vt(o,e){let t=o.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&o.devices?.[t.device_id]?.area_id||null:null}function zi(o,e){let t=N(e);if(!t)return!1;let n=o.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let r=o.states[e];if(!r)return!1;let i=r.attributes.device_class;return t==="sensor"?i?Zs.has(i):Ys.has(String(r.attributes.unit_of_measurement??"")):t==="binary"?!!i&&qs.has(i):!0}var Xs=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Ri(o,e){if(N(e)!=="sensor")return!1;let t=o.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||Xs.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||er(n)}var qn=null;function kt(o){let e=qn;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,r=[],i=new Map;for(let s of Object.keys(o.entities??{})){let a=o.entities[s],l=a.device_id;l&&rr(o,s)&&(n.get(l)??n.set(l,[]).get(l)).push(s),l&&!a.hidden&&!a.entity_category&&(i.get(l)??i.set(l,new Set).get(l)).add(Xn(s));let c=zi(o,s),d=vt(o,s);if(!d){(c||Ri(o,s))&&yt(N(s))&&r.push(s);continue}c&&(t.get(d)??t.set(d,[]).get(d)).push(s)}if(o.entities)for(let s of Object.keys(o.states))o.entities[s]||(zi(o,s)||Ri(o,s))&&yt(N(s))&&r.push(s);r.sort((s,a)=>Qt.indexOf(N(s))-Qt.indexOf(N(a))||Q(o,s).localeCompare(Q(o,a)));for(let[s,a]of t){let l=o.areas?.[s]?.name;a.sort((c,d)=>{let u=Qt.indexOf(N(c)),h=Qt.indexOf(N(d));return u-h||Q(o,c,l).localeCompare(Q(o,d,l))})}return qn={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:r,domains:i},qn}function Fe(o,e){return!e||!o.entities?[]:kt(o).areas.get(e)??[]}function Ii(o,e){return o.entities?[...kt(o).areas].filter(([t])=>t!==e).map(([t,n])=>({areaId:t,name:o.areas?.[t]?.name??t,ids:n.filter(r=>yt(N(r)))})).filter(t=>t.ids.length).sort((t,n)=>t.name.localeCompare(n.name)):[]}function Ti(o){return o.entities?kt(o).unassigned:[]}var Qn={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Qs=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Js=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Jn(o,e){let t=o.entities?.[e]?.device_id,n=t?kt(o).domains.get(t):void 0;return n&&[...n].some(r=>Qs.has(r))?!1:!Js.test(`${e} ${o.states[e]?.attributes.friendly_name??""}`)}function Li(o,e,t,n){let r=t.climate?.[n];if(r==="none")return[];if(r)return o.states[r]?[r]:[];let i=Qn[n],s=(u,h)=>B([u,h],t.points),a=e?.placements.filter(u=>u.entity_id.startsWith("sensor."))??[],l=a.filter(u=>s(u.x,u.z)).map(u=>u.entity_id),c=new Set(a.filter(u=>!s(u.x,u.z)).map(u=>u.entity_id));return[...new Set([...Fe(o,t.area_id).filter(u=>!c.has(u)),...l])].filter(u=>u.startsWith("sensor.")&&o.states[u]?.attributes.device_class===i&&Jn(o,u))}function Oi(o,e){return o.entities?kt(o).power.get(e)??[]:[]}function Q(o,e,t){let r=o.states[e]?.attributes.friendly_name??o.entities?.[e]?.name??e;if(t&&r.length>t.length+1&&r.toLowerCase().startsWith(t.toLowerCase()+" ")){let i=r.slice(t.length+1);return i.charAt(0).toUpperCase()+i.slice(1)}return r}function er(o){return!o||o.state==="unavailable"||o.state==="unknown"}function Di(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function Jt(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function ea(o,e){let t=1/0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length],s=i[0]-r[0],a=i[1]-r[1],l=s*s+a*a||1,c=Math.min(1,Math.max(0,((o[0]-r[0])*s+(o[1]-r[1])*a)/l));t=Math.min(t,Math.hypot(o[0]-r[0]-s*c,o[1]-r[1]-a*c))}return t}function Wi(o,e,t=[]){if(o.points.length<3||!e.length)return[];let n=o.points,r=n.map(m=>m[0]),i=n.map(m=>m[1]),s=Math.min(...r),a=Math.min(...i),l=Math.max(...r),c=Math.max(...i),d=Math.min(l-s,c-a),u=Math.max(.1,Math.min(.25,d/8)),h=Math.min(.35,d/5),p=fe(n),f=[];for(let m=s+u/2;m<l;m+=u)for(let v=a+u/2;v<c;v+=u){let M=[m,v];if(!B(M,n))continue;let w=ea(M,n);w<h||f.push({p:M,wall:w})}f.length||f.push({p,wall:0});let _=[...t],g=[],y=Math.min(.7,d/4);for(let m of e){let v=N(m)==="light",M=f[0].p,w=-1/0;for(let{p:P,wall:S}of f){let I=_.length?Math.min(..._.map(L=>Math.hypot(P[0]-L[0],P[1]-L[1]))):3,E=Math.hypot(P[0]-p[0],P[1]-p[1]),R=Math.min(I,3)*2;E<y&&!v&&(R-=10),R-=v?E*.35:S*1.2,R>w+1e-9&&(w=R,M=P)}let A=[Math.round(M[0]*100)/100,Math.round(M[1]*100)/100];_.push(A),g.push({entity_id:m,x:A[0],z:A[1],y:null,mount:null})}return g}var ta=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),na=new Set(["garage","gate"]),ra=new Set(["window","opening"]);function bt(o,e,t=!1){let n=new Map;return e.length&&o.forEach((r,i)=>{let s=t&&e.length===1?e[0]:e[i];s&&n.set(r.id,s)}),n}function Hi(o,e){let t=new Map;for(let n of e)for(let r of n.rooms){let i=n.openings.filter(m=>m.room_id===r.id).sort((m,v)=>m.edge-v.edge||m.offset-v.offset);if(!i.length)continue;let s=Fe(o,r.area_id),a=m=>o.states[m]?.attributes.device_class,l=s.filter(m=>N(m)==="cover"&&ta.has(a(m))),c=i.filter(m=>m.type==="window"),d=i.filter(m=>m.type==="door"),u=i.filter(m=>m.type==="garage"),h=bt(c,l,!0),p=bt(c,s.filter(m=>N(m)==="binary"&&ra.has(a(m)))),f=bt(d,s.filter(m=>N(m)==="binary"&&a(m)==="door")),_=bt(u,s.filter(m=>N(m)==="cover"&&na.has(a(m)??""))),g=bt(u,s.filter(m=>N(m)==="binary"&&a(m)==="garage_door")),y=(m,v)=>m==="none"?null:m??v??null;for(let m of i){let v=m.type==="window"?h:m.type==="garage"?_:null,M=m.type==="window"?p:m.type==="garage"?g:f;t.set(m.id,{cover:y(m.cover,v?.get(m.id)),contact:m.sensor==="handle"&&m.contact==null?null:y(m.contact,M.get(m.id)),tilt:m.tilt==="none"?null:m.tilt,contact2:m.leaves===2&&m.contact2&&m.contact2!=="none"?m.contact2:null,tilt2:m.leaves===2&&m.tilt2&&m.tilt2!=="none"?m.tilt2:null,position:m.position&&m.position!=="none"?m.position:null,positionInverted:!!m.position_inverted,tiltAngle:m.tilt_angle&&m.tilt_angle!=="none"?m.tilt_angle:null,tiltMax:m.tilt_max??null,tiltOffset:m.tilt_offset??null,tiltInvert:!!m.tilt_invert,shut:!!m.shut})}}return t}var ia=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function tr(o){if(!o||er(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=ia.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}function nr(o,e){let t=new Map,n=[];for(let s of e){let a=o.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let r=n.map(s=>{let a=t.get(s),l=a.find(c=>!o.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),i=new Map(e.map((s,a)=>[s,a]));return r.sort((s,a)=>i.get(s.primary)-i.get(a.primary))}function oa(o,e){return nr(o,e).map(t=>t.primary)}var sa={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,robot_mower:/(mähroboter|robot(?:ic)? ?mower|lawn ?mower|robot cắt cỏ|robot cat co|máy cắt cỏ|may cat co)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_stand:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,washer_dryer_tower:/(wasch.*trock|trock.*wasch|washer.*dryer|dryer.*washer|giặt.*sấy|giat.*say)/i,balcony_solar:/(balkonkraftwerk|balcony.*solar|solar.*balcony|pin.*mặt trời.*ban công|pin.*mat troi.*ban cong)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,air_conditioner:/(klima|air ?condition|aircon|airco|split|điều hòa|dieu hoa|máy lạnh|may lanh)/i,water_pump:/(wasserpumpe|gartenpumpe|brunnenpumpe|water ?pump|garden ?pump|well ?pump|pool ?pump|irrigation|máy bơm|may bom|bơm nước|bom nuoc|bơm giếng|bom gieng|bơm tưới|bom tuoi)/i,fan_ceiling:/(deckenventilator|ceiling ?fan|quạt trần|quat tran)/i,fan_ceiling_light:/(deckenventilator|ceiling ?fan|quạt trần|quat tran)/i,fan_wall:/(wandventilator|wall(?: mounted)? ?fan|quạt (?:treo )?tường|quat (?:treo )?tuong)/i,fan_floor:/(standventilator|standing ?fan|floor ?fan|quạt đứng|quat dung)/i,water_heater:/(warmwasser|water ?heater|boiler|bình nóng lạnh|binh nong lanh|máy nước nóng|may nuoc nong)/i,range_hood:/(dunstabzug|range ?hood|extractor|hút mùi|hut mui)/i,microwave:/(mikrowelle|microwave|lò vi sóng|lo vi song)/i,water_purifier:/(wasserfilter|water ?purifier|water ?dispenser|lọc nước|loc nuoc|cây nước|cay nuoc)/i,air_purifier:/(luftreiniger|air ?purifier|air ?cleaner|máy lọc không khí|may loc khong khi)/i,smart_speaker:/(smart ?speaker|lautsprecher|speaker|echo|alexa|homepod|google (home|nest)|loa thông minh|loa thong minh)/i,security_camera:/(security ?camera|surveillance|überwachung|camera|kamera|cctv|cam an ninh)/i,smart_lock:/(smart ?lock|türschloss|door ?lock|khóa cửa|khoa cua)/i,smart_curtain:/(curtain|blind|shade|vorhang|rollladen|rèm|rem)/i,network_cabinet:/(netzwerkschrank|network ?(cabinet|rack)|server ?rack|tủ mạng|tu mang)/i,nas_server:/\b(nas|network attached storage|homeserver|home server|server lưu trữ|may chu luu tru|máy chủ lưu trữ)\b/i,access_point:/(wlan|wi-?fi|access ?point|wireless ?ap|điểm truy cập|diem truy cap|bộ phát wifi|bo phat wifi)/i,wall_thermostat:/(wandthermostat|wall ?thermostat|thermostat|bộ điều nhiệt|bo dieu nhiet)/i,smoke_detector:/(rauchmelder|smoke ?(detector|alarm)|báo khói|bao khoi|cảm biến khói|cam bien khoi)/i,siren_alarm:/(sirene|siren|alarm|còi báo động|coi bao dong|đèn chớp|den chop)/i,electrical_panel:/(sicherungskasten|electrical ?panel|fuse ?box|tủ điện|tu dien)/i,ups_unit:/\b(ups|usv|bộ lưu điện|bo luu dien)\b/i,modem_router:/(modem|router|bộ định tuyến|bo dinh tuyen|bộ phát mạng|bo phat mang)/i,heat_pump_outdoor:/(wärmepumpe|heat ?pump|bơm nhiệt|bom nhiet)/i,hot_water_tank:/(warmwasserspeicher|hot ?water ?tank|bình tích nước nóng|binh tich nuoc nong)/i,ventilation_fan:/(lüfter|exhaust ?fan|ventilation ?fan|quạt thông gió|quat thong gio)/i,humidifier:/(luftbefeuchter|humidifier|máy tạo ẩm|may tao am)/i,smart_display:/(smart ?display|control ?panel|màn hình điều khiển|man hinh dieu khien)/i,wall_switch:/(wall ?switch|light ?switch|wandschalter|lichtschalter|công tắc|cong tac)/i,wall_outlet:/(wall ?outlet|power ?outlet|socket|steckdose|ổ cắm|o cam)/i,smart_plug:/(smart ?plug|smart ?socket|zwischenstecker|ổ cắm thông minh|o cam thong minh)/i,motion_sensor:/(motion|occupancy|presence|bewegung|präsenz|cảm biến chuyển động|cam bien chuyen dong|hiện diện|hien dien)/i,contact_sensor:/(door|window|contact|öffnung|kontakt|cửa|cua|cảm biến cửa|cam bien cua)/i,water_leak_sensor:/(water ?leak|moisture|wassermelder|leck|rò nước|ro nuoc|ngập|ngap)/i,temperature_humidity_sensor:/(temperature|humidity|thermo|hygro|temperatur|feuchte|nhiệt độ|nhiet do|độ ẩm|do am)/i,video_doorbell:/(video ?doorbell|doorbell|klingel|chuông cửa|chuong cua)/i,kitchen_display:/(vitrine|display ?cabinet|cabinet ?light|schranklicht|tủ kính|tu kinh|tủ trưng bày|tu trung bay|đèn tủ|den tu|led tủ|led tu)/i,media_wall_tv:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,fireplace_wall_electric:/(fireplace|kamin|lò sưởi|lo suoi)/i,bed_ambient_180:/(bed|bett|giường|giuong).*(light|licht|đèn|den)|ambient/i,wardrobe_light:/(wardrobe|closet|kleiderschrank|tủ áo|tu ao).*(light|licht|đèn|den)/i,alarm_sunrise:/(sunrise|wake.?up|lichtwecker|báo thức|bao thuc)/i,vanity_light:/(vanity|dressing|schmink|trang điểm|trang diem).*(light|licht|đèn|den)/i,mirror_round_light:/(mirror|spiegel|gương|guong).*(round|rund|tròn|tron|light|licht|đèn|den)/i,mirror_80_light:/(mirror|spiegel|gương|guong).*(light|licht|đèn|den)/i,mirror_cabinet_light:/(mirror|spiegel|gương|guong).*(cabinet|schrank|tủ|tu).*(light|licht|đèn|den)/i,electric_towel_heater:/(towel|handtuch|khăn|khan).*(heater|wärm|sưởi|suoi)/i,bathroom_fan:/(bath|bad|toilet|wc|phòng tắm|phong tam).*(fan|lüfter|quạt|quat)/i,washer_vanity:/(washer|washing|wasch|máy giặt|may giat)/i,rain_shower_led:/(shower|dusche|sen).*(led|light|licht|đèn|den)/i,mirror_led_clock:/(mirror|spiegel|gương|guong).*(led|clock|uhr|đồng hồ|dong ho)/i,fireplace_builtin:/(fireplace|kamin|lò sưởi|lo suoi)/i,led_niche:/(niche|nische|hốc|hoc).*(led|light|licht|đèn|den)/i,light_cove:/(cove|voute|khe|hắt|hat).*(light|licht|đèn|den)/i},Bi=new Set(["tv_board","tv_wall","tv_stand","media_wall_tv","smart_display"]);function Ci(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let r=String(n).toLowerCase(),i=e.state.trim().toLowerCase();return e.state.trim()==="*"||r===i||i.length>=3&&r.includes(i)}function en(o){return Bi.has(o)||!!si(o)}function wt(o){return en(o)||o==="desk"||o==="fridge_smart"}var Fi={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i,lamp_column:/(lichtsäule|light ?column|cột đèn|cot den)/i,lamp_tv_bars:/(tv.*(light|licht|đèn|den)|light ?bar|lichtleiste|thanh đèn|thanh den)/i,lamp_orb_table:/(kugel|orb|sphere|cầu|cau)/i,lamp_portable:/(akku|battery|portable|tragbar|xách tay|xac tay|đèn sạc|den sac)/i,lamp_ambient_spot:/(ambient|ambiente|mood|không gian|khong gian)/i,lamp_cube:/(würfel|cube|khối|khoi)/i,lamp_panel_round:/((rund|round|tròn|tron).*(panel|decke|ceiling|ốp trần|op tran)|(panel|decke|ceiling|ốp trần|op tran).*(rund|round|tròn|tron))/i,lamp_garden_spots:/((garten|garden|outdoor|sân vườn|san vuon).*(spot|rọi|roi)|(spot|rọi|roi).*(garten|garden|outdoor|sân vườn|san vuon))/i,lamp_wall_updown:/(up.*down|außenwand|outdoor wall|tường.*hai hướng|tuong.*hai huong)/i};function rr(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function aa(o,e){if(rr(o,e))return e;let t=o.entities?.[e]?.device_id;return t?Oi(o,t).find(n=>n!==e)??null:null}function $t(o,e){let t=new Map;for(let n of e){let r=new Set([...n.furniture.flatMap(i=>[i.entity,i.light_entity,i.power]),...n.placements.map(i=>i.entity_id)].filter(i=>!!i&&i!=="none"));for(let i of n.furniture){let s=i.type in Fi,a=s?Fi[i.type]:sa[i.type];if(!a&&i.entity==null&&i.light_entity==null&&i.power==null)continue;let l=n.rooms.find(f=>f.points.length>=3&&B([i.x,i.z],f.points)),c=l?oa(o,Fe(o,l.area_id)):[],d=f=>`${f} ${Q(o,f)}`,u=i.entity==="none"?null:i.entity??null;if(i.entity==null){let f=c.filter(_=>!r.has(_));if(s){let _=f.filter(g=>N(g)==="light");u=_.find(g=>a.test(d(g)))??_[0]??null}else if(i.type==="robot_vacuum"){let _=l?.area_id??null;u=Object.keys(o.entities??{}).find(g=>g.startsWith("vacuum.")&&!r.has(g)&&vt(o,g)===_)??null}else if(i.type==="robot_mower"){let _=Object.keys(o.states??{}).filter(y=>y.startsWith("lawn_mower.")&&!r.has(y)),g=_.filter(y=>a.test(d(y)));u=g.length===1?g[0]:_.length===1?_[0]:null}else if(i.type==="radiator"||i.type==="air_conditioner"||i.type==="wall_thermostat"||i.type==="heat_pump_outdoor"){let _=f.filter(g=>N(g)==="climate");u=_.find(g=>a.test(d(g)))??_[0]??null}else if(["network_cabinet","nas_server","access_point","smoke_detector","siren_alarm","electrical_panel","ups_unit","modem_router","hot_water_tank","ventilation_fan","humidifier","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","temperature_humidity_sensor","video_doorbell","washer_dryer_tower","balcony_solar"].includes(i.type)){let _=l?.area_id??null,g={network_cabinet:["switch","sensor","binary_sensor"],nas_server:["switch","sensor","binary_sensor"],access_point:["switch","sensor","binary_sensor","device_tracker"],smoke_detector:["binary_sensor"],siren_alarm:["siren","alarm_control_panel","switch","binary_sensor"],electrical_panel:["switch","sensor","binary_sensor"],ups_unit:["switch","sensor","binary_sensor"],modem_router:["switch","sensor","binary_sensor","device_tracker"],hot_water_tank:["water_heater","climate","switch"],ventilation_fan:["fan","switch"],humidifier:["humidifier","fan","switch"],wall_switch:["switch","input_boolean","light"],wall_outlet:["switch"],smart_plug:["switch"],motion_sensor:["binary_sensor"],contact_sensor:["binary_sensor"],water_leak_sensor:["binary_sensor"],temperature_humidity_sensor:["sensor"],video_doorbell:["camera","binary_sensor"],washer_dryer_tower:["switch","sensor"],balcony_solar:["sensor"]},y=Object.keys(o.states??{}).filter(m=>{if(r.has(m)||!g[i.type].includes(Xn(m))||_&&vt(o,m)!==_||i.type==="smoke_detector"&&o.states[m]?.attributes.device_class!=="smoke")return!1;let v=String(o.states[m]?.attributes.device_class??"");return i.type==="motion_sensor"&&!["motion","occupancy","presence"].includes(v)||i.type==="contact_sensor"&&!["door","window","opening"].includes(v)||i.type==="water_leak_sensor"&&v!=="moisture"||i.type==="temperature_humidity_sensor"&&!["temperature","humidity"].includes(v)||i.type==="balcony_solar"&&v!=="power"?!1:a.test(d(m))});u=l?y[0]??null:y.length===1?y[0]:null}else if(["air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain"].includes(i.type)){let _={air_purifier:"fan",smart_speaker:"media",security_camera:"camera",smart_lock:"lock",smart_curtain:"cover"}[i.type],g=f.filter(y=>N(y)===_);u=g.find(y=>a.test(d(y)))??g[0]??null}else if(i.type==="water_pump"){let g=(l?f:Object.keys(o.states??{}).filter(y=>!r.has(y))).filter(y=>["switch","fan"].includes(N(y)??"")&&a.test(d(y)));u=l?g[0]??null:g.length===1?g[0]:null}else if(i.type==="kitchen_display")u=f.filter(g=>["light","switch"].includes(N(g)??"")).find(g=>a.test(d(g)))??null;else if(en(i.type)){let _=f.filter(g=>N(g)==="media");u=_.find(g=>o.states[g]?.attributes.device_class==="tv")??_.find(g=>a?.test(d(g)))??(Bi.has(i.type)?_[0]??null:null)}else a&&(u=f.find(_=>["switch","media","fan"].includes(N(_)??"")&&a.test(d(_)))??null);u&&r.add(u)}let h=i.light_entity==="none"?null:i.light_entity??null;if(i.type==="fan_ceiling_light"&&i.light_entity==null){let f=(l?Fe(o,l.area_id):[]).filter(_=>!r.has(_)&&N(_)==="light");h=f.find(_=>/(fan|ceiling|decken|quạt|quat)/i.test(d(_)))??f[0]??null,h&&r.add(h)}let p=i.power==="none"?null:i.power??null;i.power==null&&(p=u?aa(o,u):null,!p&&a&&l&&!s&&(p=Fe(o,l.area_id).find(_=>rr(o,_)&&!r.has(_)&&a.test(d(_)))??null),p&&r.add(p)),(u||h||p)&&t.set(i.id,{entity:u,power:p,...i.type==="fan_ceiling_light"||i.light_entity!=null?{light:h}:{}})}}return t}var Ai=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,la={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Vi(o,e){let t=e.car??{},n=u=>u&&u!=="none"?u:null,r=n(t.device)??n(e.entity),i=r?o.entities?.[r]?.device_id:null,s=i&&o.entities?Object.values(o.entities).filter(u=>u.device_id===i).map(u=>u.entity_id):[],a=u=>`${u} ${o.states[u]?.attributes.friendly_name??""} ${o.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,h,p)=>s.find(f=>h.includes(f.split(".")[0])&&la[u].test(a(f))&&(!p||p(f)))??null,c=u=>String(o.states[u]?.attributes.unit_of_measurement??""),d=u=>String(o.states[u]?.attributes.device_class??"");return{soc:n(t.soc)??s.find(u=>u.startsWith("sensor.")&&d(u)==="battery")??l("soc",["sensor"],u=>c(u)==="%"),range:n(t.range)??l("range",["sensor"],u=>/km|mi/.test(c(u)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],u=>/^k?W$/.test(c(u)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??s.find(u=>u.startsWith("binary_sensor.")&&d(u)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??s.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??s.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??s.find(u=>u.startsWith("device_tracker."))??null}}function Ni(o,e,t){if(t==="none")return null;if(t)return t;let n=e?o.entities?.[e]?.device_id:null;if(!n||!o.entities)return null;for(let r of Object.values(o.entities))if(!(r.device_id!==n||!r.entity_id.startsWith("sensor."))&&(Ai.test(r.translation_key??"")||Ai.test(r.entity_id.split(".")[1])))return r.entity_id;return null}var $=(o,e,t,n,r="")=>T`<rect class=${r} x=${Math.min(o,t)} y=${Math.min(e,n)} width=${Math.abs(t-o)} height=${Math.abs(n-e)} />`,x=(o,e,t,n,r="")=>T`<line class=${r} x1=${o} y1=${e} x2=${t} y2=${n} />`,F=(o,e,t,n="")=>T`<circle class=${n} cx=${o} cy=${e} r=${t} />`,Z=(o,e,t,n,r="")=>T`<ellipse class=${r} cx=${o} cy=${e} rx=${t} ry=${n} />`;function ke(o,e,t){let n=[];for(let r=1;r<t;r++){let i=-o/2+o/t*r;n.push(x(i,e/2,i,e/2-Math.min(.12,e*.3)))}return n}function Ve(o,e,t,n){let r=Math.min(.24,e*.28),i=n?Math.min(.2,o*.12):0,s=[$(-o/2,-e/2,o/2,-e/2+r,"fp3d-sym-fill")];n&&s.push($(-o/2,-e/2,-o/2+i,e/2,"fp3d-sym-fill"),$(o/2-i,-e/2,o/2,e/2,"fp3d-sym-fill"));let a=o-2*i;for(let l=1;l<t;l++){let c=-o/2+i+a/t*l;s.push(x(c,-e/2+r,c,e/2-.02))}return s}function C(o,e){return Object.fromEntries(o.map(t=>[t,(n,r)=>e(t,n,r)]))}var ca=["motorbike","hammock","stone_table_set","planter_large","water_tank","gate","fence","parking","stairs","stairs_landing"];function da(o,e,t){switch(o){case"motorbike":return[Z(0,-t*.34,e*.24,t*.11),Z(0,t*.34,e*.24,t*.11),x(0,-t*.28,0,t*.3,"fp3d-sym-strong"),Z(0,0,e*.3,t*.2,"fp3d-sym-fill"),x(-e*.32,t*.23,e*.32,t*.23)];case"hammock":return[x(-e/2,0,-e*.32,0),x(e*.32,0,e/2,0),Z(0,0,e*.32,t*.42,"fp3d-sym-fill")];case"stone_table_set":return[F(0,0,Math.min(e,t)*.22,"fp3d-sym-fill"),...[[0,-.38],[.38,0],[0,.38],[-.38,0]].map(([n,r])=>F(n*e,r*t,Math.min(e,t)*.1))];case"planter_large":return[F(0,0,Math.min(e,t)*.47),F(0,0,Math.min(e,t)*.33,"fp3d-sym-fill")];case"water_tank":return[F(0,0,Math.min(e,t)*.48),F(0,0,Math.min(e,t)*.12,"fp3d-sym-fill")];case"gate":return[x(-e/2,0,e/2,0,"fp3d-sym-strong"),x(0,-t/2,0,t/2)];case"fence":{let n=[x(-e/2,0,e/2,0,"fp3d-sym-strong")];for(let r=0;r<7;r++)n.push(x(-e/2+e*r/6,-t/2,-e/2+e*r/6,t/2));return n}case"parking":return[$(-e/2+.08,-t/2+.08,e/2-.08,t/2-.08),x(-e*.15,t/2-.5,0,t/2-.22,"fp3d-sym-strong"),x(0,t/2-.22,e*.15,t/2-.5,"fp3d-sym-strong")];case"stairs":{let n=Math.max(3,Math.round(t/.26)),r=[];for(let i=1;i<n;i++)r.push(x(-e/2,t/2-t/n*i,e/2,t/2-t/n*i));return r.push(x(0,t/2-.1,0,-t/2+.25,"fp3d-sym-strong"),x(-.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong"),x(.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong")),r}case"stairs_landing":{let n=Math.min(.16,e*.12),r=(e-n)/2,i=Math.min(t*.34,Math.max(t*.22,r)),s=-t/2+i,a=-e/2,l=-n/2,c=n/2,d=e/2,u=Math.max(3,Math.round((t-i)/.26)),h=[x(-e/2,s,e/2,s,"fp3d-sym-strong")];for(let _=1;_<u;_++){let g=t/2-(t-i)/u*_;h.push(x(a,g,l,g),x(c,g,d,g))}let p=(a+l)/2,f=(c+d)/2;return h.push(x(p,t/2-.1,p,s+.18,"fp3d-sym-strong"),x(p-.12,s+.36,p,s+.18,"fp3d-sym-strong"),x(p+.12,s+.36,p,s+.18,"fp3d-sym-strong"),x(f,s+.18,f,t/2-.1,"fp3d-sym-strong"),x(f-.12,t/2-.28,f,t/2-.1,"fp3d-sym-strong"),x(f+.12,t/2-.28,f,t/2-.1,"fp3d-sym-strong")),h}default:return[]}}var Ki=C(ca,da);var ua=["column_round","column_square","column_steel","ceiling_beams","downstand_beam","chimney_inside","fireplace_builtin","sliding_wall","builtin_shelf_niche","led_niche","light_cove","platform_steps","gallery_railing_glass","window_seat"];function ha(o,e,t){if(o==="column_round")return[F(0,0,Math.min(e,t)/2,"fp3d-sym-fill")];if(o==="column_square")return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill")];if(o==="column_steel")return[$(-e/2,-t*.12,e/2,t*.12,"fp3d-sym-fill"),$(-e*.12,-t/2,e*.12,t/2,"fp3d-sym-fill")];if(o==="ceiling_beams"){let n=[];for(let r=0;r<5;r++)n.push(x(-e/2,-t/2+t*r/4,e/2,-t/2+t*r/4,"fp3d-sym-strong"));return n}return o==="sliding_wall"?[$(-e/2,-t/2,e/2,t/2),x(-e/6,-t/2,-e/6,t/2),x(e/6,-t/2,e/6,t/2)]:o==="fireplace_builtin"?[$(-e/2,-t/2,e/2,t/2),$(-e*.35,t*.18,e*.35,t/2,"fp3d-sym-fill")]:o==="builtin_shelf_niche"||o==="led_niche"?[$(-e/2,-t/2,e/2,t/2),x(-e/2,0,e/2,0),x(0,-t/2,0,t/2)]:o==="light_cove"?[$(-e/2,-t/2,e/2,t/2),x(-e*.42,t*.25,e*.42,t*.25,"fp3d-sym-strong")]:o==="platform_steps"?[$(-e/2,-t/2,e/2,t/2),x(-e/2,t*.12,e/2,t*.12,"fp3d-sym-strong")]:o==="gallery_railing_glass"?[x(-e/2,0,e/2,0,"fp3d-sym-strong"),x(-e/2,-t/2,-e/2,t/2),x(0,-t/2,0,t/2),x(e/2,-t/2,e/2,t/2)]:o==="window_seat"?[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),x(0,-t/2,0,t/2)]:[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill")]}var Ui=C(ua,ha);var pa=["bed_90","bed_140","bed_160","bed_180","bed_200","bed_upholstered_180","bed_boxspring_180","bed_futon_160","wardrobe_2door","wardrobe_3door","wardrobe_4door","wardrobe_6door","wardrobe_mirror","wardrobe_corner","nightstand_drawer","nightstand_slim","nightstand_floating","dresser_80_3","dresser_140_6","chest_tall_5","clothes_rail","bed_canopy","wardrobe_sliding","closet_walkin","vanity_mirror","bed_bench","changing_table","mirror_floor","chest_tall","reading_nook","bed_ambient_180","wardrobe_light","alarm_sunrise","vanity_light"];function _a(o,e,t){if(o==="clothes_rail")return[$(-e/2,-t/2,e/2,t/2),x(-e*.44,0,e*.44,0,"fp3d-sym-strong")];if(o==="closet_walkin")return[$(-e/2,-t/2,-e*.2,t/2,"fp3d-sym-fill"),$(-e*.2,-t/2,e/2,-t*.2,"fp3d-sym-fill")];if(o==="vanity_mirror"||o==="vanity_light")return[$(-e/2,-t/2,e/2,t/2),$(-e*.3,-t/2,e*.3,-t*.32,"fp3d-sym-fill")];if(o==="bed_bench")return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),x(0,-t/2,0,t/2)];if(o==="changing_table")return[$(-e/2,-t/2,e/2,t/2),$(-e*.42,-t*.4,e*.42,t*.4,"fp3d-sym-fill")];if(o==="mirror_floor")return[$(-e/2,-t*.12,e/2,t*.12,"fp3d-sym-fill"),x(-e*.4,-t/2,e*.4,t/2)];if(o==="reading_nook")return[$(-e/2,-t/2,e*.3,t/2,"fp3d-sym-fill"),$(e*.32,-t/2,e/2,t/2)];if(o==="alarm_sunrise")return[F(0,0,Math.min(e,t)*.44,"fp3d-sym-fill"),x(-e*.25,0,e*.25,0,"fp3d-sym-strong")];if(o==="wardrobe_corner")return[$(-e/2,-t/2,-e*.08,t/2,"fp3d-sym-fill"),$(-e*.08,-t/2,e/2,-t*.08,"fp3d-sym-fill")];if(o.startsWith("wardrobe_")){let i=o==="wardrobe_2door"?2:o==="wardrobe_4door"?4:o==="wardrobe_6door"?6:3,s=[$(-e/2,-t/2,e/2,t/2)];for(let a=1;a<i;a++)s.push(x(-e/2+e*a/i,-t/2,-e/2+e*a/i,t/2));return o==="wardrobe_mirror"&&s.push($(-e*.13,-t*.42,e*.13,t*.42,"fp3d-sym-fill")),s}if(o.startsWith("nightstand_")||o.startsWith("dresser_")||o==="chest_tall_5"||o==="chest_tall"){let i=o==="dresser_80_3"||o==="dresser_140_6"?3:o==="chest_tall_5"?5:o==="chest_tall"?4:o==="nightstand_slim"?2:1,s=[$(-e/2,-t/2,e/2,t/2)];for(let a=1;a<i;a++)s.push(x(-e/2,-t/2+t*a/i,e/2,-t/2+t*a/i));return o==="dresser_140_6"&&s.push(x(0,-t/2,0,t/2)),s}let n=e<1.2?1:2,r=[$(-e/2,-t/2,e/2,t/2),$(-e/2,-t/2,e/2,-t/2+Math.min(.1,t*.06),"fp3d-sym-fill"),x(-e/2,-t*.12,e/2,-t*.12)];for(let i=0;i<n;i++)r.push($(-e/2+.08+e*i/n,-t*.43,-e/2-.08+e*(i+1)/n,-t*.18,"fp3d-sym-fill"));return o==="bed_upholstered_180"&&r.push(x(-e*.25,-t/2,-e*.25,-t*.12),x(e*.25,-t/2,e*.25,-t*.12)),r}var Gi=C(pa,_a);var fa=["bathtub","bathtub_builtin","bathtub_corner","bathtub_freestanding","whirlpool_indoor","shower","shower_corner_90","shower_niche_120","shower_walkin_140","rain_shower_led","shower_screen","wc","toilet_close_coupled","toilet_wall_hung","bidet","washbasin","vanity_60","vanity_80","vanity_100","double_vanity_120","pedestal_basin","bathroom_cabinet_tall","bathroom_cabinet_mid","mirror_round_light","mirror_80_light","mirror_cabinet_light","mirror_led_clock","bathroom_wall_shelf","towel_rail","towel_radiator","electric_towel_heater","ladder_shelf_towels","sauna","bathroom_fan","washing_machine_cabinet","washer_vanity","laundry_basket","laundry_cabinet_basket"];function ma(o,e,t){if(o==="shower_screen")return[x(-e/2,0,e/2,0,"fp3d-sym-strong"),F(e*.34,0,Math.min(e,t)*.25)];if(o==="rain_shower_led")return[$(-e*.36,-t*.36,e*.36,t*.36,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*.12)];if(o.startsWith("shower")){let n=[x(-e/2,-t/2,e/2,t/2),x(e/2,-t/2,-e/2,t/2),F(0,0,.04)];return o==="shower_niche_120"&&n.push(x(-e/2,t/2,e/2,t/2,"fp3d-sym-strong")),o==="shower_walkin_140"&&n.push(x(e*.12,-t/2,e*.12,t/2,"fp3d-sym-strong")),n}if(o==="wc"||o.startsWith("toilet_")||o==="bidet")return[$(-e/2,-t/2,e/2,-t/2+Math.min(.18,t*.3),"fp3d-sym-fill"),Z(0,t*.1,e*.36,t*.3)];if(o==="pedestal_basin")return[Z(0,.03,e*.42,t*.36),F(0,-t*.28,.025,"fp3d-sym-fill")];if(o==="washbasin"||o.startsWith("vanity_")||o==="double_vanity_120"){let n=o==="double_vanity_120"?2:1,r=[$(-e/2,-t/2,e/2,t/2)];for(let i=0;i<n;i++)r.push(Z(-e/2+e*(i+.5)/n,.03,e/n*.3,t*.3));return r}return o==="bathtub_corner"?[$(-e/2,-t/2,e/2,t/2),F(e*.08,t*.08,Math.min(e,t)*.36)]:o.startsWith("bathroom_cabinet")||o==="washing_machine_cabinet"||o==="laundry_cabinet_basket"?[$(-e/2,-t/2,e/2,t/2),x(0,-t/2,0,t/2)]:o.startsWith("mirror_")?[o==="mirror_round_light"?F(0,0,Math.min(e,t)*.46,"fp3d-sym-fill"):$(-e/2,-t*.16,e/2,t*.16,"fp3d-sym-fill")]:o==="bathroom_wall_shelf"?[$(-e/2,-t/2,e/2,t/2),x(-e/2,0,e/2,0)]:o==="towel_rail"?[x(-e/2,0,e/2,0,"fp3d-sym-strong"),x(-e*.35,-t/2,-e*.35,t/2),x(e*.35,-t/2,e*.35,t/2)]:o==="towel_radiator"||o==="electric_towel_heater"||o==="ladder_shelf_towels"?[$(-e/2,-t*.18,e/2,t*.18),x(-e*.42,0,e*.42,0,"fp3d-sym-strong")]:o==="sauna"?[$(-e/2,-t/2,e/2,t/2),$(-e*.38,-t*.3,e*.38,t*.12,"fp3d-sym-fill")]:o==="bathroom_fan"?[F(0,0,Math.min(e,t)*.42),x(-e*.3,0,e*.3,0),x(0,-t*.3,0,t*.3)]:o==="washer_vanity"?[$(-e/2,-t/2,e/2,t/2),F(-e*.25,0,Math.min(e,t)*.25),Z(e*.24,0,e*.18,t*.28)]:o==="laundry_basket"?[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),x(-e*.3,-t/2,-e*.3,t/2),x(0,-t/2,0,t/2),x(e*.3,-t/2,e*.3,t/2)]:[$(-e/2+.07,-t/2+.07,e/2-.07,t/2-.07),F(-e/2+.14,0,.03,"fp3d-sym-fill")]}var ji=C(fa,ma);var ga=["fan_ceiling","fan_ceiling_light","fan_floor","fan_wall","water_heater","drying_rack","radiator","air_conditioner","water_pump"];function ba(o,e,t){switch(o){case"fan_ceiling":case"fan_ceiling_light":{let n=Math.min(e,t),r=[...Array.from({length:5},(i,s)=>T`<rect x=${n*.08} y=${-n*.055} width=${n*.4} height=${n*.11} rx=${n*.015} transform=${`rotate(${s*72})`} />`),F(0,0,n*.105,"fp3d-sym-fill")];return o==="fan_ceiling_light"&&r.push(F(0,0,n*.15),F(0,0,n*.105,"fp3d-sym-fill")),r}case"fan_floor":return[F(0,0,Math.min(e,t)*.46),F(0,0,Math.min(e,t)*.12,"fp3d-sym-fill")];case"fan_wall":return[$(-e*.16,-t/2,e*.16,-t*.2,"fp3d-sym-fill"),x(0,-t*.2,0,t*.08,"fp3d-sym-strong"),Z(0,t*.15,e*.46,t*.3),F(0,t*.15,Math.min(e,t)*.13,"fp3d-sym-fill")];case"water_heater":return[$(-e/2,-t/2,e/2,t/2),F(e*.3,t*.18,Math.min(e,t)*.06,"fp3d-sym-fill")];case"drying_rack":{let n=[$(-e/2,-t/2,e/2,t/2)];for(let r=1;r<6;r++)n.push(x(-e/2,-t/2+t*r/6,e/2,-t/2+t*r/6));return n}case"radiator":{let n=[],r=Math.max(3,Math.round(e/.1));for(let i=1;i<r;i++)n.push(x(-e/2+e/r*i,-t/2,-e/2+e/r*i,t/2));return n}case"air_conditioner":{let n=[$(-e/2,-t/2,e/2,t/2),x(-e*.43,t*.28,e*.43,t*.28,"fp3d-sym-strong")];for(let r=1;r<6;r++){let i=-e*.4+e*.8*(r/6);n.push(x(i,t*.12,i+e*.025,t*.42))}return n}case"water_pump":return[$(-e*.42,-t*.42,e*.42,t*.42),$(-e*.25,-t*.38,e*.25,t*.05,"fp3d-sym-fill"),F(0,t*.15,Math.min(e,t)*.27,"fp3d-sym-strong"),x(0,t*.15,0,t/2),x(e*.18,t*.15,e*.42,t*.15)];default:return[]}}var Zi=C(ga,ba);var ya=["altar","altar_table","altar_cabinet","altar_wall","shoe_cabinet","shoe_bench","room_divider","vanity","crib","bed_single","bed_double","sofa_2","sofa_3","sofa_4","sofa_l","sofa_corner_left","sofa_corner_right","sofa_chesterfield","sofa_velvet_3","sofa_modular_5","sofa_armless","sofa_chaise","sofa_u","sofa_bed","sofa","chaise_longue","armchair","club_chair","cocktail_chair","wingback_chair","recliner","rocking_chair","bean_bag","ottoman","bench","bench_dining_160","corner_bench","chair","chair_upholstered","chair_shell","office_chair","bar_stool","table_round","stool","table","table_120","table_160","table_200","table_solid_220","coffee_table","coffee_table_round","coffee_table_glass","nesting_tables","side_table_round","console_table","desk","bed","bunk_bed","nightstand","wardrobe","dresser","chest_drawers_3","sideboard","highboard","display_cabinet","tall_cabinet","kitchen","kitchen_wall","kitchen_tall","shelf","bookshelf_wide","cube_shelf_2x2","cube_shelf_4x2","cube_shelf_4x4","room_divider_shelf","floating_shelf","coat_rack","tv_console","lowboard_120","lowboard_160","lowboard_200","tv_board","tv_stand","tv_wall","wood_stove","plant","rug"];function va(o,e,t){switch(o){case"altar":return[$(-e/2,-t/2,e/2,t/2),$(-e*.42,t*.18,e*.42,t/2,"fp3d-sym-fill"),F(0,t*.05,Math.min(e,t)*.08)];case"altar_table":return[$(-e/2,-t/2,e/2,t/2),$(-e*.42,t*.2,e*.42,t/2,"fp3d-sym-fill"),F(0,t*.04,Math.min(e,t)*.08)];case"altar_cabinet":return[...ke(e,t,3),F(0,t*.04,Math.min(e,t)*.07)];case"altar_wall":return[$(-e/2,-t/2,e/2,t/2),x(-e*.35,t*.15,e*.35,t*.15,"fp3d-sym-strong")];case"shoe_cabinet":return[...ke(e,t,Math.max(2,Math.round(e/.45))),x(-e/2,t*.12,e/2,t*.12,"fp3d-sym-strong")];case"shoe_bench":return[$(-e/2,-t/2,e/2,t/2),x(-e/2,0,e/2,0),...ke(e,t,Math.max(2,Math.round(e/.35)))];case"room_divider":{let n=[$(-e/2,-t/2,e/2,t/2)];for(let r=1;r<7;r++)n.push(x(-e/2+e*r/7,-t/2,-e/2+e*r/7,t/2));return n}case"vanity":return[$(-e/2,-t/2,e/2,t/2),Z(0,-t*.28,e*.28,t*.12,"fp3d-sym-strong")];case"crib":{let n=[$(-e/2,-t/2,e/2,t/2)];for(let r=1;r<6;r++)n.push(x(-e/2+e*r/6,-t/2,-e/2+e*r/6,-t/2+t*.12));return n}case"bed_single":case"bed_double":{let n=o==="bed_double"?2:1,r=[$(-e/2,-t/2,e/2,-t/2+.07,"fp3d-sym-fill"),x(-e/2,-t*.12,e/2,-t*.12)];for(let i=0;i<n;i++)r.push($(-e/2+e*i/n+.08,-t/2+.1,-e/2+e*(i+1)/n-.08,-t*.15));return r}case"sofa_l":case"sofa_corner_left":return[...Ve(e,Math.min(t,.9),Math.max(2,Math.round(e/.65)),!0),$(-e/2,-t/2,-e/2+Math.min(.9,e*.36),t/2,"fp3d-sym-fill")];case"sofa_corner_right":return[...Ve(e,Math.min(t,.9),Math.max(2,Math.round(e/.65)),!0),$(e/2-Math.min(.9,e*.36),-t/2,e/2,t/2,"fp3d-sym-fill")];case"sofa_chaise":return[...Ve(e,Math.min(t,.82),3,!0),$(-e/2,-t/2,-e/2+Math.min(.88,e*.36),t/2,"fp3d-sym-fill")];case"sofa_u":{let n=Math.min(e*.27,.82);return[$(-e/2,-t/2,e/2,-t/2+Math.min(.82,t*.48),"fp3d-sym-fill"),$(-e/2,-t/2,-e/2+n,t/2,"fp3d-sym-fill"),$(e/2-n,-t/2,e/2,t/2,"fp3d-sym-fill")]}case"sofa_bed":return[$(-e/2,-t/2,e/2,t/2),$(-e/2,-t/2,e/2,-t/2+Math.min(.24,t*.22),"fp3d-sym-fill"),x(0,-t/2+Math.min(.24,t*.22),0,t/2)];case"sofa":case"sofa_2":case"sofa_3":case"sofa_4":case"sofa_chesterfield":case"sofa_velvet_3":case"sofa_armless":{let n=o==="sofa_2"?2:o==="sofa_3"?3:o==="sofa_4"?4:Math.max(1,Math.round((e-.4)/.62));return Ve(e,t,n,!0)}case"sofa_modular_5":return[$(-e/2,-t/2,e/2,-t/2+t*.58,"fp3d-sym-fill"),$(-e/2,-t/2,-e/2+e/3,t/2,"fp3d-sym-fill"),$(e/2-e/3,-t/2,e/2,t/2,"fp3d-sym-fill"),x(-e/6,-t/2,-e/6,t*.08),x(e/6,-t/2,e/6,t*.08)];case"armchair":case"club_chair":case"cocktail_chair":case"wingback_chair":return Ve(e,t,1,!0);case"chaise_longue":return[$(-e/2,-t/2,e/2,t/2),$(-e/2,-t/2,e/2,-t*.12,"fp3d-sym-fill"),x(-e/2,t*.22,-e*.28,t*.22,"fp3d-sym-strong")];case"recliner":return[...Ve(e,t*.58,1,!0),$(-e*.4,t*.15,e*.4,t*.47,"fp3d-sym-fill")];case"rocking_chair":return[$(-e*.36,-t*.28,e*.36,t*.28),x(-e*.42,-t/2,-e*.42,t/2,"fp3d-sym-strong"),x(e*.42,-t/2,e*.42,t/2,"fp3d-sym-strong")];case"bean_bag":return[F(0,0,Math.min(e,t)*.45),F(0,0,Math.min(e,t)*.2,"fp3d-sym-fill")];case"ottoman":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),x(0,-t/2,0,t/2),x(-e/2,0,e/2,0)];case"bench":case"bench_dining_160":return[$(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,t*.4);return[$(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill"),$(-e/2,-t/2,-e/2+.08,t/2,"fp3d-sym-fill"),x(-e/2+n,-t/2+n,e/2,-t/2+n),x(-e/2+n,-t/2+n,-e/2+n,t/2)]}case"chair":return[$(-e/2,-t/2,e/2,-t/2+.06,"fp3d-sym-fill")];case"chair_upholstered":return[$(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill"),$(-e*.42,-t*.3,e*.42,t*.42)];case"chair_shell":return[Z(0,0,e*.44,t*.43,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*.1)];case"office_chair":return[F(0,.03,Math.min(e,t)*.36),$(-e*.35,-t/2+.02,e*.35,-t/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":case"coffee_table_round":case"side_table_round":return[F(0,0,Math.min(e,t)*.42)];case"stool":return[$(-e/2+.04,-t/2+.04,e/2-.04,t/2-.04)];case"table":case"table_120":case"table_160":case"table_200":case"table_solid_220":case"coffee_table":case"coffee_table_glass":case"console_table":case"desk":{let n=[$(-e/2+.05,-t/2+.05,e/2-.05,t/2-.05)];return o==="desk"&&n.push(x(-.3,-t/2+.1,.3,-t/2+.1,"fp3d-sym-strong")),n}case"nesting_tables":return[$(-e/2,-t/2,e*.08,t*.18),$(-e*.05,-t*.15,e/2,t/2,"fp3d-sym-fill")];case"bed":case"bunk_bed":{let n=e>1.2?2:1,r=(e-.2)/n,i=[$(-e/2,-t/2,e/2,-t/2+.07,"fp3d-sym-fill"),x(-e/2,-t/2+(t-.1)*.36,e/2,-t/2+(t-.1)*.36)];for(let s=0;s<n;s++)i.push($(-e/2+.13+r*s,-t/2+.12,-e/2+.07+r*(s+1),-t/2+.12+Math.min(.4,t*.18)));return i}case"nightstand":case"wardrobe":case"dresser":case"chest_drawers_3":case"sideboard":case"highboard":case"display_cabinet":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":case"bookshelf_wide":return ke(e,t,o==="nightstand"||o==="tall_cabinet"||o==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"cube_shelf_2x2":case"cube_shelf_4x2":case"cube_shelf_4x4":case"room_divider_shelf":{let n=o==="cube_shelf_2x2"?2:o==="room_divider_shelf"?5:4,r=[$(-e/2,-t/2,e/2,t/2)];for(let i=1;i<n;i++)r.push(x(-e/2+e*i/n,-t/2,-e/2+e*i/n,t/2));return r}case"floating_shelf":return[$(-e/2,-t/2,e/2,t/2),x(-e*.35,-t/2,-e*.35,t*.15),x(e*.35,-t/2,e*.35,t*.15)];case"coat_rack":return[$(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),...ke(e,t,Math.max(2,Math.round(e/.5)))];case"tv_console":return[...ke(e,t,3),$(-e*.19,t*.08,e*.19,t/2,"fp3d-sym-fill")];case"lowboard_120":case"lowboard_160":case"lowboard_200":return ke(e,t,Math.max(2,Math.round(e/.55)));case"tv_board":return[x(-Math.min(e*.4,.72),-t/2+.14,Math.min(e*.4,.72),-t/2+.14,"fp3d-sym-strong"),...ke(e,t,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[x(-e/2,0,e/2,0,"fp3d-sym-strong")];case"tv_stand":return[$(-e*.45,-t*.08,e*.45,t*.08,"fp3d-sym-fill"),$(-e*.32,-t*.34,e*.32,t*.34),F(0,0,Math.min(e,t)*.07)];case"wood_stove":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),$(-e*.32,t*.18,e*.32,t/2),F(0,-t*.1,Math.min(e,t)*.12)];case"plant":return[F(0,0,Math.min(e,t)*.46),F(0,0,Math.min(e,t)*.25)];case"rug":return[$(-e/2+.1,-t/2+.1,e/2-.1,t/2-.1)];default:return[]}}var Yi=C(ya,va);var ka=["gas_grill","lounge_set_outdoor","sun_lounger","parasol","pergola","raised_bed","greenhouse","hot_tub_outdoor","fire_bowl","garden_torch","play_tower_slide","garden_shed","trampoline","flower_pots_3","lawn_sprinkler","irrigation_valve_box","rain_barrel","garden_lantern","outdoor_kitchen","patio_heater","tree_oak","tree_lime","tree_birch","tree_maple","tree_fruit","tree_spruce","tree_pine","tree_thuja","shrub","shrub_flowering","brush_wild","trees_group_3"];function wa(o,e,t){if(o==="gas_grill")return[$(-e*.38,-t*.4,e*.38,t*.36,"fp3d-sym-fill"),x(-e*.48,-t*.3,e*.48,-t*.3)];if(o==="lounge_set_outdoor")return[$(-e*.3,-t*.46,e*.3,-t*.16,"fp3d-sym-fill"),$(-e*.48,t*.04,-e*.22,t*.38,"fp3d-sym-fill"),$(e*.22,t*.04,e*.48,t*.38,"fp3d-sym-fill"),$(-e*.2,t*.05,e*.2,t*.35)];if(o==="sun_lounger")return[$(-e*.42,-t*.46,e*.42,t*.46,"fp3d-sym-fill"),x(-e*.42,t*.18,e*.42,t*.18)];if(o==="parasol"){let n=[F(0,0,Math.min(e,t)/2,"fp3d-sym-fill")];for(let r=0;r<8;r++)n.push(x(0,0,Math.cos(r*Math.PI/4)*e/2,Math.sin(r*Math.PI/4)*t/2));return n}return o==="pergola"?[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),...Array.from({length:7},(n,r)=>x(-e/2+e*r/6,-t/2,-e/2+e*r/6,t/2))]:o==="raised_bed"?[$(-e/2,-t/2,e/2,t/2),$(-e*.42,-t*.36,e*.42,t*.36,"fp3d-sym-fill")]:o==="greenhouse"?[$(-e/2,-t/2,e/2,t/2),x(0,-t/2,0,t/2,"fp3d-sym-strong"),$(-e*.15,t*.44,e*.15,t/2)]:o==="hot_tub_outdoor"?[F(0,0,Math.min(e,t)/2),F(0,0,Math.min(e,t)*.4,"fp3d-sym-fill")]:o==="fire_bowl"?[F(0,0,Math.min(e,t)/2),F(0,0,Math.min(e,t)*.34,"fp3d-sym-fill")]:o==="garden_torch"?[F(0,0,Math.min(e,t)/2,"fp3d-sym-fill")]:o==="play_tower_slide"?[$(-e*.32,-t*.34,e*.32,t*.14,"fp3d-sym-fill"),$(-e*.32,t*.14,e*.32,t*.5),x(-e*.22,-t*.34,-e*.22,t*.14),x(e*.22,-t*.34,e*.22,t*.14)]:o==="garden_shed"?[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),$(-e*.2,t*.46,e*.2,t/2)]:o==="trampoline"?[F(0,0,Math.min(e,t)/2),F(0,0,Math.min(e,t)*.41,"fp3d-sym-fill")]:o==="flower_pots_3"?[F(-e*.28,0,Math.min(e,t)*.15,"fp3d-sym-fill"),F(0,t*.08,Math.min(e,t)*.2,"fp3d-sym-fill"),F(e*.3,-t*.05,Math.min(e,t)*.13,"fp3d-sym-fill")]:o==="lawn_sprinkler"?[F(0,0,Math.min(e,t)*.2,"fp3d-sym-fill"),x(-e*.4,0,e*.4,0,"fp3d-sym-strong")]:o==="irrigation_valve_box"?[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),F(-e*.18,0,Math.min(e,t)*.08),F(e*.18,0,Math.min(e,t)*.08)]:o==="rain_barrel"?[F(0,0,Math.min(e,t)*.46),F(0,0,Math.min(e,t)*.36,"fp3d-sym-fill")]:o==="garden_lantern"?[F(0,0,Math.min(e,t)*.46,"fp3d-sym-fill"),x(-e*.32,0,e*.32,0),x(0,-t*.32,0,t*.32)]:o==="outdoor_kitchen"?[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),$(-e*.38,-t*.32,-e*.05,t*.18),F(e*.24,-t*.05,Math.min(e,t)*.18)]:o==="patio_heater"?[F(0,0,Math.min(e,t)/2,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*.18)]:o==="trees_group_3"?[F(-e*.27,-t*.12,Math.min(e,t)*.16,"fp3d-sym-fill"),F(e*.22,-t*.2,Math.min(e,t)*.19,"fp3d-sym-fill"),F(e*.05,t*.28,Math.min(e,t)*.17,"fp3d-sym-fill")]:o==="brush_wild"?Array.from({length:8},(n,r)=>x(-e*.42+e*r/7,-t*.38+r%3*t*.3,-e*.36+e*r/7,-t*.22+r%3*t*.3)):o==="shrub"||o==="shrub_flowering"?[F(-e*.18,-t*.08,Math.min(e,t)*.3,"fp3d-sym-fill"),F(e*.2,t*.08,Math.min(e,t)*.34,"fp3d-sym-fill")]:o.startsWith("tree_")?[F(0,0,Math.min(e,t)/2,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*.1),x(-e*.34,0,e*.34,0),x(0,-t*.34,0,t*.34)]:[Z(0,0,e/2,t/2)]}var qi=C(ka,wa);var $a=["workbench","workbench_pegboard","tool_cabinet","tool_chest","storage_rack_garage","wall_shelf_garage","air_compressor","shop_vacuum","ladder_step","ladder_extension","storage_boxes","tire_stack","bike_rack","repair_stand","parts_bin","utility_sink_garage","charging_bay"];function xa(o,e,t){if(o==="tire_stack"||o==="shop_vacuum"||o==="air_compressor")return[F(0,0,Math.min(e,t)*.45,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*.18)];if(o.startsWith("ladder_")){let n=[x(-e*.4,t/2,e*.4,-t/2,"fp3d-sym-strong"),x(e*.4,t/2,-e*.4,-t/2,"fp3d-sym-strong")];for(let r=1;r<6;r++)n.push(x(-e*.32,t/2-t*r/6,e*.32,t/2-t*r/6));return n}return o==="bike_rack"?[x(-e/2,0,e/2,0,"fp3d-sym-strong"),...Array.from({length:4},(n,r)=>x(-e*.38+r*e*.25,-t/2,-e*.38+r*e*.25,t/2))]:o==="repair_stand"?[F(0,0,Math.min(e,t)*.12),x(-e*.4,0,e*.4,0,"fp3d-sym-strong"),x(0,-t*.4,0,t*.4,"fp3d-sym-strong")]:[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),x(-e*.42,0,e*.42,0)]}var Xi=C($a,xa);var Sa=["range_hood","microwave","water_purifier","kitchen_corner","kitchen_display","island","fridge","stove","sink"];function Ma(o,e,t){switch(o){case"range_hood":return[$(-e/2,-t/2,e/2,t/2),x(-e*.35,t*.28,e*.35,t*.28,"fp3d-sym-strong")];case"microwave":return[$(-e/2,-t/2,e/2,t/2),$(-e*.38,-t*.05,e*.2,t/2,"fp3d-sym-fill"),F(e*.34,t*.22,Math.min(e,t)*.06)];case"water_purifier":return[$(-e/2,-t/2,e/2,t/2),F(0,-t*.16,Math.min(e,t)*.065),x(0,-t*.16,0,t*.22,"fp3d-sym-strong"),F(0,t*.22,Math.min(e,t)*.045,"fp3d-sym-fill")];case"kitchen_corner":return[$(-e/2,-t/2,e/2,-t*.05),$(-e/2,-t*.05,-e*.05,t/2),x(-e*.05,-t*.05,e/2,-t*.05),x(-e*.05,-t*.05,-e*.05,t/2)];case"kitchen_display":return[$(-e/2,-t/2,e/2,t/2),x(0,-t/2,0,t/2,"fp3d-sym-strong"),x(-e*.38,t*.2,e*.38,t*.2),x(-e*.32,t*.34,e*.32,t*.34,"fp3d-sym-strong")];case"island":return[x(-e/2,t/2-.3,e/2,t/2-.3)];case"fridge":return[x(-e/2+.06,t/2-.04,e/2-.06,t/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(e,t)*.14;return[F(-e*.22,-t*.2,n),F(e*.22,-t*.2,n*.8),F(-e*.22,t*.2,n*.8),F(e*.22,t*.2,n)]}case"sink":{let n=Math.min(.5,e-.2);return[$(-n/2,-t/2+.1,n/2,t/2-.08),F(0,-t/2+.06,.025,"fp3d-sym-fill")]}default:return[]}}var Qi=C(Sa,Ma);var Ea=["tipi_kids","play_kitchen_kids","desk_kids","toy_shelf_boxes","cushion_corner_kids","rocking_horse","play_rug_road","table_chairs_kids","lamp_night_moon","ball_pit","bed_house","baby_monitor","lamp_star_projector","changing_dresser","wardrobe_kids","toy_boxes_3"];function za(o,e,t){return o==="tipi_kids"?[T`<polygon class="fp3d-sym-fill" points=${`0,${-t/2} ${e/2},${t/2} ${-e/2},${t/2}`} />`,x(0,-t/2,0,t/2)]:o==="play_rug_road"?[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),x(-e/2,0,e/2,0),x(0,-t/2,0,t/2)]:o==="table_chairs_kids"?[$(-e*.25,-t*.32,e*.25,t*.32,"fp3d-sym-fill"),$(-e*.5,-t*.18,-e*.3,t*.18),$(e*.3,-t*.18,e*.5,t*.18)]:o==="lamp_night_moon"?[T`<path class="fp3d-sym-fill" d=${`M ${e*.28} ${-t*.46} A ${e*.46} ${t*.46} 0 1 0 ${e*.28} ${t*.46} A ${e*.3} ${t*.3} 0 0 1 ${e*.28} ${-t*.46}`} />`]:o==="lamp_star_projector"||o==="ball_pit"||o==="baby_monitor"?[F(0,0,Math.min(e,t)*.47,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*.2)]:o==="bed_house"?[$(-e*.46,-t*.46,e*.46,t*.46,"fp3d-sym-fill"),x(-e*.46,0,0,-t*.46),x(0,-t*.46,e*.46,0)]:o==="toy_boxes_3"?[0,1,2].map(n=>$(-e/2+e*n/3+.01,-t/2,-e/2+e*(n+1)/3-.01,t/2,"fp3d-sym-fill")):o==="rocking_horse"?[$(-e*.3,-t*.3,e*.25,t*.3,"fp3d-sym-fill"),x(-e*.45,-t*.42,e*.45,-t*.42),x(-e*.45,t*.42,e*.45,t*.42)]:[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),x(-e*.38,0,e*.38,0)]}var Ji=C(Ea,za);var Ra=["lamp_downlight","lamp_spot","lamp_bollard","lamp_garden","lamp_column","lamp_tv_bars","lamp_orb_table","lamp_portable","lamp_ambient_spot","lamp_cube","lamp_panel_round","lamp_garden_spots","lamp_wall_updown","lamp_panel","lamp_uplight","lamp_ceiling","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip"];function Fa(o,e,t){switch(o){case"lamp_downlight":case"lamp_spot":return[F(0,0,Math.min(e,t)*.45,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*1.4)];case"lamp_bollard":case"lamp_garden":return[F(0,0,Math.min(e,t)*.5,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*1.6)];case"lamp_column":return[$(-e*.42,-t*.42,e*.42,t*.42,"fp3d-sym-fill"),$(-e*.18,-t*.18,e*.18,t*.18),x(-e,0,e,0),x(0,-t,0,t)];case"lamp_tv_bars":return[$(-e*.44,-t*.42,-e*.18,t*.42,"fp3d-sym-fill"),$(e*.18,-t*.42,e*.44,t*.42,"fp3d-sym-fill")];case"lamp_orb_table":return[F(0,0,Math.min(e,t)*.47,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*.24)];case"lamp_portable":return[T`<polygon class="fp3d-sym-fill" points=${`${-e*.42},${t*.42} ${e*.42},${t*.42} ${e*.28},${-t*.42} ${-e*.28},${-t*.42}`} />`,$(-e*.13,-t*.14,e*.13,t*.14)];case"lamp_ambient_spot":return[F(0,0,Math.min(e,t)*.47,"fp3d-sym-fill"),$(-e*.26,-t*.26,e*.26,t*.26,"fp3d-sym-strong")];case"lamp_cube":return[$(-e*.46,-t*.46,e*.46,t*.46,"fp3d-sym-fill"),$(-e*.3,-t*.3,e*.3,t*.3)];case"lamp_panel_round":{let n=Math.min(e,t)*.46;return[F(0,0,n,"fp3d-sym-fill"),...Array.from({length:8},(r,i)=>{let s=i*Math.PI/4;return x(Math.cos(s)*n*1.12,Math.sin(s)*n*1.12,Math.cos(s)*n*1.42,Math.sin(s)*n*1.42)})]}case"lamp_garden_spots":return[-.34,0,.34].flatMap(n=>[F(n*e,0,t*.28,"fp3d-sym-fill"),x(n*e,-t*.2,n*e,t*.46)]);case"lamp_wall_updown":return[$(-e/2,-t/2,e/2,-t*.28,"fp3d-sym-fill"),$(-e*.34,-t*.28,e*.34,t*.3),x(-e*.46,t*.42,e*.46,t*.42,"fp3d-sym-strong")];case"lamp_panel":return[$(-e/2+.03,-t/2+.03,e/2-.03,t/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(e,t)/2,r=[F(0,0,n*.9,"fp3d-sym-fill"),F(0,0,n*.3)];if(o==="lamp_ceiling"||o==="lamp_pendant")for(let i=0;i<8;i++){let s=i/8*Math.PI*2;r.push(x(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return r}case"lamp_wall":return[$(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),Z(0,.01,e*.4,t*.4)];case"led_strip":return[x(-e/2,0,e/2,0,"fp3d-sym-strong")];default:return[]}}var eo=C(Ra,Fa);var Aa=["desk_l","desk_corner","desk_sit_stand","chair_ergonomic","chair_visitor","filing_cabinet","drawer_unit_office","bookcase_office","monitor_single","monitor_dual","pc_tower","gaming_chair","sim_racing_cockpit","server_rack_42u","printer_3d_open","whiteboard_office","monitor_triple","arcade_cabinet","laser_printer","phone_booth_office","printer_3d_enclosed","filament_shelf_wall"];function Pa(o,e,t){if(o.startsWith("desk_")){if(o==="desk_sit_stand")return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),x(-e*.38,0,e*.38,0)];let n=o==="desk_corner"?e*.15:-e*.08;return[$(-e/2,-t/2,e/2,t*.05,"fp3d-sym-fill"),$(-e/2,t*.05,n,t/2,"fp3d-sym-fill")]}if(o.startsWith("monitor_")){let n=o==="monitor_triple"?3:o==="monitor_dual"?2:1;return Array.from({length:n},(r,i)=>$(-e/2+e*i/n+e*.04,-t*.18,-e/2+e*(i+1)/n-e*.04,t*.18,"fp3d-sym-fill"))}return o==="sim_racing_cockpit"?[x(-e*.42,-t/2,-e*.42,t/2),x(e*.42,-t/2,e*.42,t/2),$(-e*.3,t*.12,e*.3,t*.46,"fp3d-sym-fill"),F(0,-t*.05,e*.14)]:o==="whiteboard_office"?[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),x(-e*.3,0,e*.3,0)]:o==="filament_shelf_wall"?[$(-e/2,-t/2,e/2,t/2),...Array.from({length:4},(n,r)=>F(-e*.36+r*e*.24,0,e*.07,"fp3d-sym-fill"))]:o==="phone_booth_office"?[$(-e/2,-t/2,e/2,t/2),$(-e*.4,-t*.42,e*.4,-t*.12,"fp3d-sym-fill")]:o.startsWith("printer_3d")?[$(-e/2,-t/2,e/2,t/2),$(-e*.3,-t*.3,e*.3,t*.3,"fp3d-sym-fill")]:o==="arcade_cabinet"?[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),F(-e*.16,t*.25,e*.05),F(e*.16,t*.25,e*.04)]:[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),x(-e*.4,0,e*.4,0)]}var to=C(Aa,Pa);var Ia=["cat_tree_large","cat_scratching_post","cat_scratch_board_wall","cat_cave","cat_bed_round","cat_wall_perch","cat_climbing_steps_wall","litter_box_hood","litter_box_self_cleaning","dog_bed","dog_basket","dog_house"];function Ta(o,e,t){return o==="cat_bed_round"||o==="cat_scratching_post"||o==="litter_box_self_cleaning"?[F(0,0,Math.min(e,t)*.48,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*.3)]:o==="cat_climbing_steps_wall"?Array.from({length:4},(n,r)=>$(-e*.48+r*e*.25,-t/2,-e*.25+r*e*.25,t/2,"fp3d-sym-fill")):o==="cat_tree_large"?[$(-e/2,-t/2,e/2,t/2),F(-e*.22,-t*.12,e*.12,"fp3d-sym-fill"),F(e*.22,t*.12,e*.12,"fp3d-sym-fill")]:o==="dog_house"?[$(-e*.46,-t*.46,e*.46,t*.46,"fp3d-sym-fill"),x(-e*.46,0,0,-t*.46),x(0,-t*.46,e*.46,0)]:[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),$(-e*.3,-t*.3,e*.3,t*.3)]}var no=C(Ia,Ta);var La=["media_wall_tv","piano_upright","vase_pampas","plant_monstera","rug_round","fireplace_wall_electric"];function Oa(o,e,t){switch(o){case"media_wall_tv":return[$(-e/2,-t/2,e/2,t/2),$(-e*.28,-t*.12,e*.28,t*.12,"fp3d-sym-fill"),x(-e*.36,t*.28,e*.36,t*.28)];case"piano_upright":{let n=[$(-e/2,-t/2,e/2,t*.06,"fp3d-sym-fill"),$(-e*.32,t*.16,e*.32,t/2)];for(let r=1;r<8;r++)n.push(x(-e*.4+e*.8*r/8,t*.02,-e*.4+e*.8*r/8,t*.14));return n}case"vase_pampas":return[F(0,0,Math.min(e,t)*.28,"fp3d-sym-fill"),...Array.from({length:6},(n,r)=>x(0,0,Math.cos(r*Math.PI/3)*e*.42,Math.sin(r*Math.PI/3)*t*.42))];case"plant_monstera":return[F(0,0,Math.min(e,t)*.2,"fp3d-sym-fill"),...Array.from({length:8},(n,r)=>F(Math.cos(r*Math.PI/4)*e*.28,Math.sin(r*Math.PI/4)*t*.28,Math.min(e,t)*.16))];case"rug_round":return[F(0,0,Math.min(e,t)*.48),F(0,0,Math.min(e,t)*.4,"fp3d-sym-fill")];case"fireplace_wall_electric":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),x(-e*.36,0,e*.36,0,"fp3d-sym-strong")];default:return[]}}var ro=C(La,Oa);var Da=["air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","network_cabinet","nas_server","access_point","wall_thermostat","smoke_detector","siren_alarm","electrical_panel","ups_unit","modem_router","heat_pump_outdoor","hot_water_tank","ventilation_fan","humidifier","smart_display","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","temperature_humidity_sensor","video_doorbell","robot_vacuum","robot_mower"];function Wa(o,e,t){switch(o){case"air_purifier":return[$(-e/2,-t/2,e/2,t/2),F(0,t*.28,Math.min(e,t)*.1,"fp3d-sym-fill")];case"smart_speaker":return[F(0,0,Math.min(e,t)*.46,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*.3)];case"security_camera":return[$(-e*.28,-t/2,e*.28,-t*.36,"fp3d-sym-fill"),$(-e*.38,-t*.28,e*.38,t*.36),F(0,t*.34,Math.min(e,t)*.12,"fp3d-sym-strong")];case"smart_lock":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),x(-e*.15,t*.18,e*.48,t*.18,"fp3d-sym-strong")];case"smart_curtain":{let n=[x(-e/2,-t*.32,e/2,-t*.32,"fp3d-sym-strong")];for(let r=0;r<=10;r++){let i=-e/2+e*r/10;Math.abs(i)>e*.1&&n.push(x(i,-t*.18,i,t*(r%2?.34:.12)))}return n}case"network_cabinet":{let n=[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill")];for(let r=1;r<6;r++)n.push(x(-e*.34,-t/2+t*r/6,e*.34,-t/2+t*r/6));return n}case"nas_server":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),...[-.27,-.09,.09,.27].map(n=>$(n*e-e*.065,-t*.38,n*e+e*.065,t*.35))];case"access_point":return[F(0,0,Math.min(e,t)*.47,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*.3),x(-e*.16,t*.42,e*.16,t*.42,"fp3d-sym-strong")];case"wall_thermostat":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),$(-e*.36,t*.05,e*.36,t/2,"fp3d-sym-strong")];case"smoke_detector":{let n=Math.min(e,t)*.47;return[F(0,0,n,"fp3d-sym-fill"),F(0,0,n*.72),...Array.from({length:6},(r,i)=>F(Math.cos(i*Math.PI/3)*n*.58,Math.sin(i*Math.PI/3)*n*.58,n*.055))]}case"siren_alarm":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),$(-e*.3,t*.02,e*.3,t/2,"fp3d-sym-strong")];case"electrical_panel":{let n=[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill")];for(let r=0;r<2;r++)for(let i=0;i<4;i++)n.push($(-e*.36+i*e*.18,-t*.25+r*t*.28,-e*.25+i*e*.18,-t*.08+r*t*.28));return n}case"ups_unit":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),$(-e*.22,t*.08,e*.22,t*.34,"fp3d-sym-strong"),...[-.22,0,.22].map(n=>x(n*e,-t*.35,n*e,-t*.12))];case"modem_router":return[$(-e/2,-t*.3,e/2,t*.35,"fp3d-sym-fill"),x(-e*.35,-t*.3,-e*.46,-t/2,"fp3d-sym-strong"),x(e*.35,-t*.3,e*.46,-t/2,"fp3d-sym-strong"),...[-.22,0,.22].map(n=>F(n*e,t*.18,Math.min(e,t)*.035))];case"heat_pump_outdoor":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),...Array.from({length:5},(n,r)=>x(-e*.4,-t*.24+r*t*.12,e*.18,-t*.24+r*t*.12)),$(e*.31,t*.08,e*.42,t*.28,"fp3d-sym-strong")];case"hot_water_tank":return[F(0,0,Math.min(e,t)*.48,"fp3d-sym-fill"),F(0,t*.34,Math.min(e,t)*.07,"fp3d-sym-strong")];case"ventilation_fan":{let n=Math.min(e,t)*.46;return[$(-e/2,-t/2,e/2,t/2),F(0,0,n,"fp3d-sym-fill"),...Array.from({length:4},(r,i)=>x(Math.cos(i*Math.PI/2)*n*.2,Math.sin(i*Math.PI/2)*n*.2,Math.cos(i*Math.PI/2)*n*.82,Math.sin(i*Math.PI/2)*n*.82))]}case"humidifier":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),$(-e*.34,-t*.3,e*.34,t*.12),x(-e*.35,t*.24,e*.35,t*.24,"fp3d-sym-strong")];case"smart_display":return[$(-e/2,-t*.18,e/2,t*.32,"fp3d-sym-fill"),x(-e*.16,t*.32,e*.16,t/2,"fp3d-sym-strong")];case"wall_switch":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),x(-e*.28,0,e*.28,0,"fp3d-sym-strong")];case"wall_outlet":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),F(-e*.17,0,e*.07),F(e*.17,0,e*.07)];case"smart_plug":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*.28),x(-e*.24,t*.32,e*.24,t*.32,"fp3d-sym-strong")];case"motion_sensor":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),Z(0,t*.08,e*.3,t*.3,"fp3d-sym-strong")];case"contact_sensor":return[$(-e/2,-t/2,e*.12,t/2,"fp3d-sym-fill"),$(e*.24,-t*.36,e/2,t*.36)];case"water_leak_sensor":return[F(0,0,Math.min(e,t)*.47,"fp3d-sym-fill"),Z(0,t*.06,e*.13,t*.2,"fp3d-sym-strong")];case"temperature_humidity_sensor":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),$(-e*.34,-t*.25,e*.34,t*.25,"fp3d-sym-strong")];case"video_doorbell":return[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),F(0,-t*.22,Math.min(e,t)*.16),F(0,t*.25,Math.min(e,t)*.13,"fp3d-sym-strong")];case"robot_vacuum":return[$(-e*.38,-t/2,e*.38,-t*.17,"fp3d-sym-fill"),$(-e*.22,-t*.17,e*.22,t*.17),F(0,t*.14,Math.min(e,t)*.4)];case"robot_mower":return[$(-e/2,-t/2,e/2,t*.42,"fp3d-sym-fill"),x(-e*.42,-t*.42,-e*.42,t*.28),x(e*.42,-t*.42,e*.42,t*.28),$(-e*.31,-t*.17,e*.31,t*.34),x(-e*.22,t*.34,e*.22,t*.34,"fp3d-sym-strong")];default:return[]}}var io=C(Da,Wa);var Ha=["stairs_landing_l","stairs_winder_l","stairs_spiral","stairs_open","stairs_concrete","stairs_compact","railing_glass","railing_metal","railing_wood","railing_cable"];function Ba(o,e,t){if(o.startsWith("railing_")){let r=[x(-e/2,0,e/2,0,"fp3d-sym-strong")],i=o==="railing_wood"?5:3;for(let s=0;s<i;s++)r.push(x(-e/2+e*s/(i-1),-t/2,-e/2+e*s/(i-1),t/2));return r}if(o==="stairs_spiral")return[F(0,0,Math.min(e,t)/2,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*.08),...Array.from({length:10},(r,i)=>{let s=i*Math.PI*2/10;return x(0,0,Math.cos(s)*e*.46,Math.sin(s)*t*.46)})];if(o==="stairs_landing_l"||o==="stairs_winder_l"){let r=[$(-e/2,-t/2,e/2,t/2)];for(let i=1;i<7;i++)r.push(x(e*.1,t/2-t*i/10,e/2,t/2-t*i/10),x(-e/2+e*i/10,-t/2,-e/2+e*i/10,-t*.1));return r}let n=Math.max(5,Math.round(t/.28));return[$(-e/2,-t/2,e/2,t/2),...Array.from({length:n-1},(r,i)=>x(-e/2,t/2-t*(i+1)/n,e/2,t/2-t*(i+1)/n))]}var oo=C(Ha,Ba);var so=(o,e)=>[F(0,.05,Math.min(o,e)*.3),x(-o/2,-e/2+.1,o/2,-e/2+.1)],Ca=(o,e)=>{let t=[$(-o/2,-e*.34,o/2,e*.34,"fp3d-sym-fill")];for(let n=1;n<6;n++)t.push(x(-o/2+o*n/6,-e*.34,-o/2+o*n/6,e*.34));for(let n=1;n<3;n++)t.push(x(-o/2,-e*.34+e*.68*n/3,o/2,-e*.34+e*.68*n/3));return t},ao={dishwasher:(o,e)=>[x(-o/2+.08,e/2-.05,o/2-.08,e/2-.05,"fp3d-sym-strong")],washer:so,dryer:so,washer_dryer_tower:(o,e)=>[$(-o/2,-e/2,o/2,e/2,"fp3d-sym-fill"),F(0,e*.08,Math.min(o,e)*.27),x(-o/2,-e*.27,o/2,-e*.27,"fp3d-sym-strong")],balcony_solar:Ca};var Va=["bicycle_city","bicycle_cargo","scooter","motorcycle_touring","car_sedan","car_hatchback","car_suv","car_pickup","car_van","car_wagon","car_compact","car_electric","car_minibus"];function Na(o,e,t){return o.startsWith("bicycle_")||o==="scooter"||o==="motorcycle_touring"?[Z(0,-t*.34,e*.28,t*.12),Z(0,t*.34,e*.28,t*.12),x(0,-t*.28,0,t*.28,"fp3d-sym-strong"),$(-e*.3,-t*.12,e*.3,t*.12,"fp3d-sym-fill")]:[$(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),Z(-e*.43,-t*.3,e*.09,t*.12),Z(e*.43,-t*.3,e*.09,t*.12),Z(-e*.43,t*.3,e*.09,t*.12),Z(e*.43,t*.3,e*.09,t*.12),x(-e*.35,t*.18,e*.35,t*.18,"fp3d-sym-strong")]}var lo=C(Va,Na);var Ka={...Yi,...Gi,...ro,...Qi,...Ji,...ji,...Ki,...Ui,...qi,...Xi,...Zi,...io,...oo,...eo,...to,...no,...ao,...lo};function co(o,e,t){let n=Ka[o];return n?n(e,t):null}function uo(o,e,t){let n=co(o,e,t);if(n)return n;let r=ne(o);return r?Ua(r,e,t):k}function Ua(o,e,t){return o.symbol?.length?o.symbol.map(n=>n.shape==="rect"?$((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t,n.fill?"fp3d-sym-fill":""):n.shape==="circle"?F(n.x*e,n.z*t,n.r*Math.min(e,t)):x(n.x1*e,n.z1*t,n.x2*e,n.z2*t)):o.parts.filter(n=>n.w<.98||n.d<.98).map(n=>n.shape==="cyl"&&(n.axis??"y")==="y"?F(n.x*e,n.z*t,Math.min(n.w*e,n.d*t)/2):$((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t))}var Ga=.05,ja=.2,Za=.12;function Ya(o){let e=[];return o.forEach((t,n)=>{let r=t.points;if(r.length<3)return;let i=ee(r)>=0;for(let s=0;s<r.length;s++){let a=r[s],l=r[(s+1)%r.length],c=l[0]-a[0],d=l[1]-a[1],u=Math.hypot(c,d);if(u<.05)continue;let h=[c/u,d/u],p=i?[h[1],-h[0]]:[-h[1],h[0]];(h[1]<-1e-9||Math.abs(h[1])<=1e-9&&h[0]<0)&&(h=[-h[0],-h[1]]);let f=[-h[1],h[0]],_=a[0]*h[0]+a[1]*h[1],g=l[0]*h[0]+l[1]*h[1];e.push({room:n,index:s,dir:h,normal:f,offset:a[0]*f[0]+a[1]*f[1],outside:p[0]*f[0]+p[1]*f[1]>0?1:-1,t0:Math.min(_,g),t1:Math.max(_,g)})}}),e}function ho(o,e=.6){let t=Ya(o),n=t.map((d,u)=>u),r=d=>n[d]===d?d:n[d]=r(n[d]),i=[];for(let d=0;d<t.length;d++)for(let u=d+1;u<t.length;u++){let h=t[d],p=t[u];if(h.room===p.room||Math.abs(h.dir[0]*p.dir[1]-h.dir[1]*p.dir[0])>Ga||h.outside===p.outside)continue;let f=(p.offset-h.offset)*h.outside;f>e||f<-Za||Math.abs(f)<1e-4||Math.min(h.t1,p.t1)-Math.max(h.t0,p.t0)<ja||(i.push(Math.round(f*1e3)/1e3),n[r(d)]=r(u))}if(!i.length)return{rooms:o.map(d=>({...d,points:d.points.map(u=>[u[0],u[1]])})),gaps:i};let s=new Map;t.forEach((d,u)=>{let h=r(u);if(h===u&&!t.some((f,_)=>_!==u&&r(_)===u))return;let p=s.get(h)??[];p.push(u),s.set(h,p)});let a=o.map(d=>d.points.map(()=>new Map));for(let[d,u]of s){let h=u.reduce((p,f)=>p+t[f].offset,0)/u.length;for(let p of u){let f=t[p],_=h-f.offset,g=[f.normal[0]*_,f.normal[1]*_],y=o[f.room].points.length;a[f.room][f.index].set(d,g),a[f.room][(f.index+1)%y].set(d,g)}}let l=d=>Math.round(d*1e3)/1e3;return{rooms:o.map((d,u)=>({...d,points:d.points.map((h,p)=>{let f=h[0],_=h[1];for(let[g,y]of a[u][p].values())f+=g,_+=y;return[l(f),l(_)]})})),gaps:i}}function po(o){let e=o.filter(n=>n>.04).sort((n,r)=>n-r);if(!e.length)return null;let t=e[Math.floor(e.length/2)];return Math.min(.5,Math.max(.08,Math.round(t*100)/100))}var qa=.25,_o=o=>Math.round(o*1e3)/1e3;function ir(o,e,t,n,r){let i=o.rooms.find(s=>s.points.length>=3&&B([e,t],s.points));return!i||B([n,r],i.points)?[n,r]:B([n,t],i.points)?[n,t]:B([e,r],i.points)?[e,r]:[e,t]}function tn(o,e,t,n=qa){let r=o.rooms.find(c=>c.points.length>=3&&B([e.x,e.z],c.points));if(!r)return null;let i=r.points,s=ee(i)>=0?1:-1,a=t/2,l=null;for(let c=0;c<i.length;c++){let d=i[c],u=i[(c+1)%i.length],h=Math.hypot(u[0]-d[0],u[1]-d[1]);if(h<.3)continue;let p=[(u[0]-d[0])/h,(u[1]-d[1])/h],f=[-p[1]*s,p[0]*s],_=(e.x-d[0])*p[0]+(e.z-d[1])*p[1];if(_<0||_>h)continue;let y=o.rooms.some(S=>S.id!==r.id&&S.points.some((I,E)=>{let R=S.points[(E+1)%S.points.length],L=Math.abs((I[0]-d[0])*f[0]+(I[1]-d[1])*f[1]),D=Math.abs((R[0]-d[0])*f[0]+(R[1]-d[1])*f[1]);return L<.02&&D<.02}))?a:0,m=(e.x-d[0])*f[0]+(e.z-d[1])*f[1]-y,v=Math.atan2(-f[0],f[1])*180/Math.PI,M=S=>Math.abs((e.rotation-S+540)%360-180),A=[{rotation:v,extent:e.d/2},{rotation:v+90,extent:e.w/2},{rotation:v-90,extent:e.w/2}].reduce((S,I)=>M(I.rotation)<M(S.rotation)?I:S);if(M(A.rotation)>50)continue;let P=m-A.extent;Math.abs(P)>n||l&&Math.abs(P)>=Math.abs(l.gap)||(l={x:_o(e.x-f[0]*P),z:_o(e.z-f[1]*P),rotation:(Math.round(A.rotation)%360+360)%360,gap:P})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function Xa(o,e,t){let n=t[0]-e[0],r=t[1]-e[1],i=n*n+r*r,s=i?Math.max(0,Math.min(1,((o[0]-e[0])*n+(o[1]-e[1])*r)/i)):0;return Math.hypot(o[0]-e[0]-n*s,o[1]-e[1]-r*s)}function fo(o,e,t=.03){return o.every(n=>B(n,e)||e.some((r,i)=>Xa(n,r,e[(i+1)%e.length])<=t))}function mo(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var go=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro"],Qa=["fridge_smart"];var bo=o=>(o??navigator.language).toLowerCase().startsWith("de");function xt(o){return bo(o)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var Ja={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function nn(o,e){let t=bo(o),n=`https://github.com/PATCoder97/neonplan3d/blob/main/docs/${t?"anleitung.md":"manual.md"}`,r=e?Ja[e]:void 0,i=r?t?r.de:r.en:"",[,s]=i.split("#");return`${n}${s?`#${s}`:""}`}function el(o=oi()){let e=new Set(go);for(let t of o)for(let n of t.features??[])(go.includes(n)||Qa.includes(n))&&e.add(n);return e}function ce(o,e){return el(e).has(o)}var yo={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"{n} R\xE4ume aus HA-Bereichen anlegen",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_group_room:"R\xE4ume",tool_group_structure:"Bauk\xF6rper",tool_group_energy:"Energie",tool_group_plan:"Grundriss",tool_group_layout:"Einrichten",tool_group_building:"Geb\xE4ude",tool_group_project:"Projekt",tool_group_actions:"Aktionen",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",tool_covered:"Veranda / \xFCberdachter Bereich",tool_settings:"Konfiguration",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",fan_blades:"Rotorbl\xE4tter",fan_blades_3:"3 Bl\xE4tter",fan_blades_4:"4 Bl\xE4tter",fan_blades_5:"5 Bl\xE4tter",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_kitchen_small:"K\xFCche \xB7 klein",pkg_kitchen_small_desc:"Kompakte Zeile mit K\xFChlschrank, Sp\xFCle und Herd",pkg_kitchen_medium:"K\xFCche \xB7 mittel",pkg_kitchen_medium_desc:"Ger\xE4tezeile, runder Esstisch und Pendelleuchte",pkg_kitchen_large:"K\xFCche \xB7 gro\xDF",pkg_kitchen_large_desc:"Vollst\xE4ndige Zeile, Insel, Barhocker und Deckenleuchte",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bath_small:"Bad \xB7 klein",pkg_bath_small_desc:"Waschtisch 60, Wand-WC und Eckdusche",pkg_bath_medium:"Bad \xB7 mittel",pkg_bath_medium_desc:"Waschtisch 80, WC, Wanne und Waschmaschinenschrank",pkg_bath_large:"Bad \xB7 gro\xDF",pkg_bath_large_desc:"Doppelwaschtisch, Wanne, Walk-in-Dusche und Sauna",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_bedroom_small:"Schlafzimmer \xB7 klein",pkg_bedroom_small_desc:"Bett 140 und zweit\xFCriger Schrank",pkg_bedroom_medium:"Schlafzimmer \xB7 mittel",pkg_bedroom_medium_desc:"Bett 160, zwei Nachttische und dreit\xFCriger Schrank",pkg_bedroom_large:"Schlafzimmer \xB7 gro\xDF",pkg_bedroom_large_desc:"Bett 180, gro\xDFer Schrank, Bank und Schminktisch",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_living_small:"Wohnzimmer \xB7 klein",pkg_living_small_desc:"Zweisitzer, TV, runder Couchtisch und Deckenleuchte",pkg_living_medium:"Wohnzimmer \xB7 mittel",pkg_living_medium_desc:"Dreisitzer, Sessel, TV, Tisch und Teppich",pkg_living_large:"Wohnzimmer \xB7 gro\xDF",pkg_living_large_desc:"U-Sofa, Medienwand, Vitrine, Tische, Teppich und Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Im Plan verschieben und skalieren",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_covered:"Ziehen, um eine Veranda oder einen \xFCberdachten Bereich als Raum anzulegen",hint_settings:"Projekt-Einstellungen rechts \xB7 im Plan ziehen, um die Ansicht zu verschieben",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Sichtkegel in 3D zeigen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort stellst du auch Auto Pro ein (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang & Kino)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",media_play_head:"Abspielen",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind in diesem Fork standardm\xE4\xDFig aktiviert.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_screen:"Bildschirm: zeigt Live-Bilder oder zustandsabh\xE4ngige Bilder",lib_badge_motion:"Bewegung: zeigt den laufenden Zustand in 3D",lib_badge_power:"Leistung: l\xE4sst sich mit einer Entit\xE4t und einem Leistungssensor verkn\xFCpfen",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 schaltet {n} Pro-Funktionen frei",pack_needs_update:"Diese Erweiterung braucht eine neuere NeonPlan-Version \u2013 bitte NeonPlan 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie Pro",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_dot:"Neues im Shop",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"Die integrierten Zusatzfunktionen sind in diesem Fork aktiv. Optionale M\xF6bel-Packs installierst du hier mit deinem Lizenzschl\xFCssel.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",ext_active:"aktiv",ext_get:"Im Shop ansehen",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Optionale M\xF6bel-Packs",ext_teaser_text:"Die integrierten Funktionen sind bereits aktiv. Weitere M\xF6bel findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te \u2013 Gas, Wasser und W\xE4rme folgen als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",auto_pro_teaser:"Mit Auto Pro zeigt das Fahrzeug hier Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, und \u201Eunterwegs\u201C mit dem Standort, wenn es weg ist.",car_hint:"Eine Entit\xE4t des Autos reicht: Die \xFCbrigen findet NeonPlan am selben Ger\xE4t in Home Assistant (Ladestand, Reichweite, Laden, Kabel, Schloss, Klima, Standort). Was es nicht findet, w\xE4hlst du hier; \u201EKeine\u201C schaltet eine Rolle ab.",car_device:"Fahrzeug (eine Entit\xE4t des Autos)",car_soc:"Ladestand (%)",car_range:"Reichweite",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_plugged:"Kabel eingesteckt",car_lock:"Verriegelung",car_climate:"Klima / Vorheizen",car_tracker:"Standort (device_tracker)",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",chk_pro_active:"Energie Pro ist aktiv",chk_pro_get:"Energie Pro freischalten (Leitungen, Module, Hologramm)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",energy_pro_active:"Energie Pro ist aktiv",energy_pro_active_hint:"Leitungen, lebende Module und das Hologramm laufen. Gas, Wasser und W\xE4rme kommen als Updates in diesem Pack.",pro_unlock:"Freischalten",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_name:"Name",outdoor_roof_style:"Dachmaterial",outdoor_roof_solid:"Massiv",outdoor_roof_glass:"Glas / Polycarbonat",outdoor_roof_tile:"Dachziegel",outdoor_railing:"Gel\xE4nder an den freien Kanten",outdoor_yard_enclosure:"Hoher Zaun mit Tor um den Hof",outdoor_columns:"S\xE4ulen vorne",outdoor_column_size:"S\xE4ulenbreite (m)",insert_point:"Ecke danach einf\xFCgen",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",out_canopy:"Hof mit vorgezogenem Wellblechdach",out_veranda:"\xDCberdachte Veranda mit Gel\xE4nder und S\xE4ulen",out_balcony:"Veranda unter dem Hauptdach (ohne eigenes Dach)",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_library:"Bibliothek",furniture_properties:"Eigenschaften",project_settings:"Projekt konfigurieren",project_settings_hint:"Grundeinstellungen, Hintergrund, Startansicht, Favoriten und Sicherungen an einem Ort.",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_altar:"Hausaltar",furn_altar_table:"Altartisch",furn_altar_cabinet:"Altarschrank",furn_altar_wall:"Wandaltar",furn_shoe_cabinet:"Schuhschrank",furn_motorbike:"Motorroller",furn_bicycle_city:"Cityrad",furn_bicycle_cargo:"Lastenrad",furn_scooter:"Motorroller modern",furn_motorcycle_touring:"Tourenmotorrad",furn_car_sedan:"Limousine",furn_car_hatchback:"Schr\xE4gheck",furn_car_suv:"SUV",furn_car_pickup:"Pickup",furn_car_van:"Transporter",furn_car_wagon:"Kombi",furn_car_compact:"Kleinwagen",furn_car_electric:"Elektroauto",furn_car_minibus:"Kleinbus",furn_fan_ceiling:"Deckenventilator",furn_fan_ceiling_light:"Deckenventilator mit Licht",furn_fan_wall:"Wandventilator",furn_fan_floor:"Standventilator",furn_lamp_column:"Lichts\xE4ule",furn_lamp_tv_bars:"Lichtleisten-Paar (TV)",furn_lamp_orb_table:"Kugelleuchte (Tisch)",furn_lamp_portable:"Tragbare Akku-Leuchte",furn_lamp_ambient_spot:"Ambiente-Spot (Tisch)",furn_lamp_cube:"W\xFCrfelleuchte",furn_lamp_panel_round:"Rundes Deckenpanel",furn_lamp_garden_spots:"Gartenspots (3er-Set)",furn_lamp_wall_updown:"Au\xDFenwandleuchte Up & Down",furn_water_heater:"Warmwasserspeicher",furn_drying_rack:"W\xE4schest\xE4nder",furn_shoe_bench:"Schuhbank",furn_room_divider:"Raumteiler",furn_range_hood:"Dunstabzugshaube",furn_microwave:"Mikrowelle",furn_water_purifier:"Wasserspender",furn_air_purifier:"Luftreiniger",furn_smart_speaker:"Smart-Lautsprecher",furn_security_camera:"\xDCberwachungskamera",furn_smart_lock:"Smartes T\xFCrschloss",furn_smart_curtain:"Smarter Vorhang",furn_network_cabinet:"Netzwerkschrank",furn_nas_server:"NAS-Server",furn_access_point:"WLAN-Access-Point (Decke)",furn_wall_thermostat:"Wandthermostat",furn_smoke_detector:"Rauchmelder",furn_siren_alarm:"Sirene mit Blitzlicht",furn_electrical_panel:"Sicherungskasten",furn_ups_unit:"USV-Anlage",furn_modem_router:"Modem/Router",furn_heat_pump_outdoor:"W\xE4rmepumpen-Au\xDFenger\xE4t",furn_hot_water_tank:"Warmwasserspeicher",furn_ventilation_fan:"L\xFCfter",furn_humidifier:"Luftbefeuchter",furn_smart_display:"Smartes Steuerdisplay",furn_wall_switch:"Wandschalter",furn_wall_outlet:"Wandsteckdose",furn_smart_plug:"Smarter Zwischenstecker",furn_motion_sensor:"Bewegungsmelder",furn_contact_sensor:"T\xFCr-/Fensterkontakt",furn_water_leak_sensor:"Wassermelder",furn_temperature_humidity_sensor:"Temperatur-/Feuchtesensor",furn_video_doorbell:"Video-T\xFCrklingel",furn_kitchen_corner:"Eckk\xFCchenschrank",furn_kitchen_display:"LED-Vitrinenschrank",furn_vanity:"Schminktisch",furn_crib:"Babybett",furn_bed_single:"Einzelbett",furn_bed_double:"Doppelbett",furn_bed_90:"Bett 90 \xD7 200",furn_bed_140:"Bett 140 \xD7 200",furn_bed_160:"Bett 160 \xD7 200",furn_bed_180:"Bett 180 \xD7 200",furn_bed_200:"Bett 200 \xD7 200",furn_bed_upholstered_180:"Polsterbett 180 \xD7 200",furn_bed_boxspring_180:"Boxspringbett 180 \xD7 200",furn_bed_futon_160:"Futonbett 160 \xD7 200",furn_wardrobe_2door:"Kleiderschrank 2-t\xFCrig",furn_wardrobe_3door:"Kleiderschrank 3-t\xFCrig",furn_wardrobe_4door:"Kleiderschrank 4-t\xFCrig",furn_wardrobe_6door:"Kleiderschrank 6-t\xFCrig",furn_wardrobe_mirror:"Kleiderschrank mit Spiegelt\xFCr",furn_wardrobe_corner:"Eckkleiderschrank",furn_nightstand_drawer:"Nachttisch mit Schublade",furn_nightstand_slim:"Schmaler Nachttisch",furn_nightstand_floating:"Schwebender Nachttisch",furn_dresser_80_3:"Kommode 80 mit 3 Schubladen",furn_dresser_140_6:"Kommode 140 mit 6 Schubladen",furn_chest_tall_5:"Hochkommode mit 5 Schubladen",furn_clothes_rail:"Kleiderstange",furn_bed_canopy:"Himmelbett",furn_wardrobe_sliding:"Schwebet\xFCrenschrank",furn_closet_walkin:"Offene Ankleide",furn_vanity_mirror:"Schminktisch mit Spiegel",furn_bed_bench:"Bettbank",furn_changing_table:"Wickelkommode",furn_mirror_floor:"Standspiegel",furn_chest_tall:"Hochkommode",furn_reading_nook:"Leseecke mit Sessel",furn_bed_ambient_180:"Bett 180 mit Ambiente-Licht",furn_wardrobe_light:"Kleiderschrank mit Innenlicht",furn_alarm_sunrise:"Lichtwecker",furn_vanity_light:"Schminktisch mit Spiegel-Licht",furn_sofa_2:"Sofa (2-Sitzer)",furn_sofa_3:"Sofa (3-Sitzer)",furn_sofa_4:"Sofa (4-Sitzer)",furn_sofa_corner_left:"Ecksofa links",furn_sofa_corner_right:"Ecksofa rechts",furn_ottoman:"Sitzpouf",furn_tv_console:"TV-Lowboard",furn_display_cabinet:"Vitrinenschrank",furn_sofa_chesterfield:"Chesterfield-Sofa",furn_sofa_velvet_3:"Samtsofa 3-Sitzer",furn_sofa_modular_5:"Modulsofa 5-teilig",furn_sofa_armless:"Sofa ohne Armlehnen",furn_sofa_chaise:"Sofa mit R\xE9camiere",furn_sofa_u:"U-Sofa",furn_club_chair:"Clubsessel",furn_wingback_chair:"Ohrensessel",furn_rocking_chair:"Schaukelstuhl",furn_chaise_longue:"Chaiselongue",furn_cocktail_chair:"Cocktailsessel",furn_recliner:"Relaxsessel mit Hocker",furn_bean_bag:"Sitzsack",furn_chair_upholstered:"Polsterstuhl",furn_chair_shell:"Schalenstuhl",furn_lowboard_120:"Lowboard 120",furn_lowboard_160:"Lowboard 160",furn_lowboard_200:"Lowboard 200",furn_highboard:"Highboard",furn_chest_drawers_3:"Kommode mit 3 Schubladen",furn_bookshelf_wide:"Breites B\xFCcherregal",furn_cube_shelf_2x2:"W\xFCrfelregal 2\xD72",furn_cube_shelf_4x2:"W\xFCrfelregal 4\xD72",furn_cube_shelf_4x4:"W\xFCrfelregal 4\xD74",furn_room_divider_shelf:"Raumteilerregal",furn_floating_shelf:"Wandboard",furn_tv_stand:"TV auf Standfu\xDF",furn_wood_stove:"Kaminofen",furn_media_wall_tv:"Medienwand mit TV",furn_piano_upright:"Klavier mit Bank",furn_vase_pampas:"Bodenvase mit Pampasgras",furn_plant_monstera:"Gro\xDFe Monstera",furn_rug_round:"Runder Teppich",furn_fireplace_wall_electric:"Elektrischer Wandkamin",furn_table_120:"Esstisch 120 \xD7 90",furn_table_160:"Esstisch 160 \xD7 90",furn_table_200:"Esstisch 200 \xD7 90",furn_table_solid_220:"Massivholztisch 220 \xD7 100",furn_bench_dining_160:"Essbank 160",furn_sofa_l:"Ecksofa",furn_sofa_bed:"Schlafsofa",furn_shower_screen:"Duschabtrennung",furn_hammock:"H\xE4ngematte",furn_stone_table_set:"Steintisch mit Hockern",furn_planter_large:"Gro\xDFer Pflanzk\xFCbel",furn_water_tank:"Wassertank",furn_gate:"Tor",furn_fence:"Zaun",furn_gas_grill:"Gasgrill",furn_lounge_set_outdoor:"Lounge-Set (au\xDFen)",furn_sun_lounger:"Sonnenliege",furn_parasol:"Sonnenschirm",furn_pergola:"Pergola",furn_raised_bed:"Hochbeet",furn_greenhouse:"Gew\xE4chshaus",furn_hot_tub_outdoor:"Whirlpool (au\xDFen)",furn_fire_bowl:"Feuerschale",furn_garden_torch:"Gartenfackel",furn_play_tower_slide:"Spielturm mit Rutsche",furn_garden_shed:"Gartenhaus",furn_trampoline:"Trampolin",furn_flower_pots_3:"Blument\xF6pfe (3er-Set)",furn_lawn_sprinkler:"Rasensprenger",furn_irrigation_valve_box:"Bew\xE4sserungsventil-Box",furn_rain_barrel:"Regentonne",furn_garden_lantern:"Gartenlaterne",furn_outdoor_kitchen:"Outdoor-K\xFCche",furn_patio_heater:"Terrassenheizstrahler",furn_tree_oak:"Eiche",furn_tree_lime:"Linde",furn_tree_birch:"Birke",furn_tree_maple:"Ahorn",furn_tree_fruit:"Obstbaum",furn_tree_spruce:"Fichte",furn_tree_pine:"Kiefer",furn_tree_thuja:"Thuja",furn_shrub:"Strauch",furn_shrub_flowering:"Bl\xFChender Strauch",furn_brush_wild:"Wildgeh\xF6lz",furn_trees_group_3:"Baumgruppe (3)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_vanity_60:"Waschtisch 60 mit Unterschrank",furn_vanity_80:"Waschtisch 80 mit Unterschrank",furn_vanity_100:"Waschtisch 100 mit Unterschrank",furn_double_vanity_120:"Doppelwaschtisch 120",furn_pedestal_basin:"Standwaschbecken",furn_bathtub_builtin:"Einbaubadewanne",furn_bathtub_corner:"Eckbadewanne",furn_shower_corner_90:"Eckdusche 90 \xD7 90",furn_shower_niche_120:"Nischendusche 120 \xD7 90",furn_shower_walkin_140:"Walk-in-Dusche 140 \xD7 90",furn_toilet_close_coupled:"Stand-WC mit Sp\xFClkasten",furn_toilet_wall_hung:"Wand-WC",furn_bidet:"Bidet",furn_bathroom_cabinet_tall:"Bad-Hochschrank",furn_bathroom_cabinet_mid:"Bad-Halbhochschrank",furn_mirror_round_light:"Spiegel rund mit Licht",furn_mirror_80_light:"Spiegel 80 \xD7 60 mit Licht",furn_bathroom_wall_shelf:"Badregal (Wand)",furn_towel_rail:"Handtuchhalter mit Handtuch",furn_bathtub_freestanding:"Freistehende Badewanne",furn_sauna:"Sauna",furn_towel_radiator:"Handtuchheizk\xF6rper",furn_whirlpool_indoor:"Whirlpool (innen)",furn_washing_machine_cabinet:"Waschmaschinenschrank",furn_laundry_basket:"W\xE4schekorb",furn_ladder_shelf_towels:"Leiterregal mit Handt\xFCchern",furn_mirror_cabinet_light:"Spiegelschrank mit Licht",furn_electric_towel_heater:"Elektrischer Handtuchw\xE4rmer",furn_bathroom_fan:"Badl\xFCfter",furn_washer_vanity:"Waschmaschine unter Waschtisch",furn_rain_shower_led:"Regendusche mit LED",furn_mirror_led_clock:"LED-Spiegel 100 \xD7 70 mit Uhr",furn_laundry_cabinet_basket:"W\xE4scheschrank mit Korb",furn_column_round:"S\xE4ule rund",furn_column_square:"St\xFCtze eckig",furn_column_steel:"Stahlst\xFCtze",furn_ceiling_beams:"Holzbalkendecke (5 Balken)",furn_downstand_beam:"Unterzug",furn_chimney_inside:"Schornstein (innen)",furn_fireplace_builtin:"Kamin eingebaut",furn_sliding_wall:"Schiebewand",furn_builtin_shelf_niche:"Einbauregal (Wandnische)",furn_led_niche:"LED-Nische",furn_light_cove:"Lichtvoute (Decke)",furn_platform_steps:"Podest (2 Stufen)",furn_gallery_railing_glass:"Galeriegel\xE4nder (Glas)",furn_window_seat:"Fensterbank-Sitz",furn_desk:"Schreibtisch",furn_desk_l:"L-Schreibtisch",furn_desk_corner:"Eckschreibtisch",furn_desk_sit_stand:"Sitz-Steh-Schreibtisch",furn_chair_ergonomic:"Ergonomischer B\xFCrostuhl",furn_chair_visitor:"Besucherstuhl",furn_filing_cabinet:"Aktenschrank",furn_drawer_unit_office:"B\xFCro-Rollcontainer",furn_bookcase_office:"B\xFCro-B\xFCcherregal",furn_monitor_single:"Einzelmonitor",furn_monitor_dual:"Doppelmonitor",furn_pc_tower:"PC-Tower",furn_gaming_chair:"Gaming-Stuhl",furn_sim_racing_cockpit:"Sim-Racing-Cockpit",furn_server_rack_42u:"Serverschrank 42 HE",furn_printer_3d_open:"Offener 3D-Drucker",furn_whiteboard_office:"Whiteboard",furn_monitor_triple:"Dreifachmonitor",furn_arcade_cabinet:"Arcade-Automat",furn_laser_printer:"Laserdrucker",furn_phone_booth_office:"Telefonbox",furn_printer_3d_enclosed:"Geschlossener 3D-Drucker",furn_filament_shelf_wall:"Filament-Wandregal",furn_tipi_kids:"Kinder-Tipi",furn_play_kitchen_kids:"Spielk\xFCche",furn_desk_kids:"Kinderschreibtisch",furn_toy_shelf_boxes:"Spielzeugregal mit Boxen",furn_cushion_corner_kids:"Kuschelecke",furn_rocking_horse:"Schaukelpferd",furn_play_rug_road:"Stra\xDFenspielteppich",furn_table_chairs_kids:"Kindertisch mit zwei St\xFChlen",furn_lamp_night_moon:"Mond-Nachtlicht",furn_ball_pit:"B\xE4llebad",furn_bed_house:"Hausbett",furn_baby_monitor:"Babyphone mit Kamera",furn_lamp_star_projector:"Sternenprojektor",furn_changing_dresser:"Wickelkommode",furn_wardrobe_kids:"Kinderkleiderschrank",furn_toy_boxes_3:"Drei Spielzeugkisten",furn_cat_tree_large:"Gro\xDFer Kratzbaum",furn_cat_scratching_post:"Kratzs\xE4ule",furn_cat_scratch_board_wall:"Kratzbrett (Wand)",furn_cat_cave:"Katzenh\xF6hle",furn_cat_bed_round:"Katzenbett rund",furn_cat_wall_perch:"Katzen-Wandliege",furn_cat_climbing_steps_wall:"Katzen-Kletterstufen",furn_litter_box_hood:"Katzenklo mit Haube",furn_litter_box_self_cleaning:"Selbstreinigendes Katzenklo",furn_dog_bed:"Hundebett",furn_dog_basket:"Hundekorb",furn_dog_house:"Hundeh\xFCtte",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_landing:"U-Treppe mit Zwischenpodest",furn_stairs_landing_l:"L-Treppe mit Podest",furn_stairs_winder_l:"L-Treppe mit Wendelstufen",furn_stairs_spiral:"Spindeltreppe",furn_stairs_open:"Offene Treppe",furn_stairs_concrete:"Betontreppe",furn_stairs_compact:"Raumspartreppe",furn_railing_glass:"Glasgel\xE4nder",furn_railing_metal:"Metallgel\xE4nder",furn_railing_wood:"Holzgel\xE4nder",furn_railing_cable:"Seilgel\xE4nder",furn_workbench:"Werkbank",furn_workbench_pegboard:"Werkbank mit Lochwand",furn_tool_cabinet:"Werkzeugschrank",furn_tool_chest:"Werkzeugwagen",furn_storage_rack_garage:"Lagerregal",furn_wall_shelf_garage:"Garagen-Wandregal",furn_air_compressor:"Luftkompressor",furn_shop_vacuum:"Werkstattsauger",furn_ladder_step:"Stehleiter",furn_ladder_extension:"Anlegeleiter",furn_storage_boxes:"Stapelboxen",furn_tire_stack:"Reifenstapel",furn_bike_rack:"Fahrradst\xE4nder",furn_repair_stand:"Montagest\xE4nder",furn_parts_bin:"Kleinteilemagazin",furn_utility_sink_garage:"Werkstattbecken",furn_charging_bay:"Ladestation",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_air_conditioner:"Klimaanlage (Wandger\xE4t)",furn_water_pump:"Au\xDFen-Wasserpumpe",furn_robot_vacuum:"Saugroboter",furn_robot_mower:"M\xE4hroboter mit Garage",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_entity_fan:"Ventilator oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Klima-Entit\xE4t",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_console_table:"Konsolentisch",furn_coffee_table_round:"Runder Couchtisch",furn_coffee_table_glass:"Glas-Couchtisch",furn_nesting_tables:"Satztische",furn_side_table_round:"Runder Beistelltisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_washer_dryer_tower:"Wasch-Trockner-Turm",furn_balcony_solar:"Balkonkraftwerk",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_climate:"Heizen & K\xFChlen",furn_group_outdoor:"Au\xDFenbereich",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",furn_group_pets:"Haustiere",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe und zoome das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stairs_landing_hint:"Zwei parallele L\xE4ufe mit einem Zwischenpodest: links nach hinten hinauf, um 180\xB0 wenden und rechts nach vorn bis zur oberen Etage. Die Treppe \xF6ffnet den Boden dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},vo={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add {n} rooms from HA areas",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_group_room:"Rooms",tool_group_structure:"Structure",tool_group_energy:"Energy",tool_group_plan:"Floor plan",tool_group_layout:"Layout",tool_group_building:"Building",tool_group_project:"Project",tool_group_actions:"Actions",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",tool_covered:"Veranda / covered area",tool_settings:"Configuration",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",fan_blades:"Blades",fan_blades_3:"3 blades",fan_blades_4:"4 blades",fan_blades_5:"5 blades",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_kitchen_small:"Kitchen \xB7 small",pkg_kitchen_small_desc:"Compact row with fridge, sink and stove",pkg_kitchen_medium:"Kitchen \xB7 medium",pkg_kitchen_medium_desc:"Appliance row, round dining table and pendant",pkg_kitchen_large:"Kitchen \xB7 large",pkg_kitchen_large_desc:"Full appliance row, island, bar stools and ceiling light",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bath_small:"Bathroom \xB7 small",pkg_bath_small_desc:"60 cm vanity, wall-hung toilet and corner shower",pkg_bath_medium:"Bathroom \xB7 medium",pkg_bath_medium_desc:"80 cm vanity, toilet, tub and washing-machine cabinet",pkg_bath_large:"Bathroom \xB7 large",pkg_bath_large_desc:"Double vanity, tub, walk-in shower and sauna",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_bedroom_small:"Bedroom \xB7 small",pkg_bedroom_small_desc:"140 cm bed and two-door wardrobe",pkg_bedroom_medium:"Bedroom \xB7 medium",pkg_bedroom_medium_desc:"160 cm bed, two nightstands and three-door wardrobe",pkg_bedroom_large:"Bedroom \xB7 large",pkg_bedroom_large_desc:"180 cm bed, large wardrobe, bench and vanity",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_living_small:"Living room \xB7 small",pkg_living_small_desc:"Two-seat sofa, TV, round coffee table and ceiling light",pkg_living_medium:"Living room \xB7 medium",pkg_living_medium_desc:"Three-seat sofa, armchair, TV, table and rug",pkg_living_large:"Living room \xB7 large",pkg_living_large_desc:"U-shaped sofa, media wall, cabinet, tables, rug and plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move and scale in the plan",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_settings:"Project settings on the right \xB7 drag the plan to pan the view",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_covered:"Drag to create a veranda or covered area that behaves like a room",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Show the field of view in 3D",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are enabled by default in this fork.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_screen:"Screen: shows live or state-dependent pictures",lib_badge_motion:"Motion: shows its running state in 3D",lib_badge_power:"Power: links to an entity and a power sensor",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 unlocks {n} Pro features",pack_needs_update:"This add-on needs a newer NeonPlan version \u2013 please update NeonPlan 3D (HACS) and reload the page.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_dot:"New in the shop",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"The bundled add-on features are active in this fork. Install optional furniture packs here with your licence key.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",ext_active:"active",ext_get:"See in the shop",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"Optional furniture packs",ext_teaser_text:'The bundled features are already active. Find additional furniture under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices \u2013 gas, water and heat follow as updates",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',auto_pro_teaser:'With Car Pro the vehicle here shows charge, range, charging, lock and climate from its integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, and "away" with its location when it is out.',car_hint:'One entity of the car is enough: NeonPlan finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",chk_pro_active:"Energy Pro is active",chk_pro_get:"Unlock Energy Pro (cables, modules, hologram)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",energy_pro_active:"Energy Pro is active",energy_pro_active_hint:"Cables, living modules and the hologram are running. Gas, water and heat come as updates of this pack.",pro_unlock:"Unlock",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_name:"Name",outdoor_roof_style:"Roof material",outdoor_roof_solid:"Solid",outdoor_roof_glass:"Glass / polycarbonate",outdoor_roof_tile:"Roof tiles",outdoor_railing:"Railing along free edges",outdoor_yard_enclosure:"High fence and gate around the yard",outdoor_columns:"Front columns",outdoor_column_size:"Column width (m)",insert_point:"Insert a corner after this one",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_canopy:"Yard with projecting corrugated metal roof",out_veranda:"Covered veranda with railing and columns",out_balcony:"Veranda under the main roof (no separate roof)",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_library:"Library",furniture_properties:"Properties",project_settings:"Configure project",project_settings_hint:"General settings, background, start view, favourites and backups in one place.",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_altar:"Standing altar",furn_altar_table:"Altar table",furn_altar_cabinet:"Altar cabinet",furn_altar_wall:"Wall-mounted altar",furn_shoe_cabinet:"Shoe cabinet",furn_motorbike:"Motorbike",furn_bicycle_city:"City bicycle",furn_bicycle_cargo:"Cargo bicycle",furn_scooter:"Scooter",furn_motorcycle_touring:"Touring motorcycle",furn_car_sedan:"Sedan",furn_car_hatchback:"Hatchback",furn_car_suv:"SUV",furn_car_pickup:"Pickup truck",furn_car_van:"Van",furn_car_wagon:"Estate car",furn_car_compact:"Compact car",furn_car_electric:"Electric car",furn_car_minibus:"Minibus",furn_fan_ceiling:"Ceiling fan",furn_fan_ceiling_light:"Ceiling fan with light",furn_fan_wall:"Wall-mounted fan",furn_fan_floor:"Standing fan",furn_lamp_column:"Light column",furn_lamp_tv_bars:"TV light bar pair",furn_lamp_orb_table:"Orb table lamp",furn_lamp_portable:"Portable battery lamp",furn_lamp_ambient_spot:"Ambient table spot",furn_lamp_cube:"Cube lamp",furn_lamp_panel_round:"Round ceiling panel",furn_lamp_garden_spots:"Garden spots (set of 3)",furn_lamp_wall_updown:"Up/down outdoor wall light",furn_water_heater:"Water heater",furn_drying_rack:"Drying rack",furn_shoe_bench:"Shoe bench",furn_room_divider:"Room divider",furn_range_hood:"Range hood",furn_microwave:"Microwave",furn_water_purifier:"Water purifier",furn_air_purifier:"Air purifier",furn_smart_speaker:"Smart speaker",furn_security_camera:"Security camera",furn_smart_lock:"Smart door lock",furn_smart_curtain:"Smart curtain",furn_network_cabinet:"Network cabinet",furn_nas_server:"NAS server",furn_access_point:"Ceiling Wi-Fi access point",furn_wall_thermostat:"Wall thermostat",furn_smoke_detector:"Smoke detector",furn_siren_alarm:"Siren with strobe light",furn_electrical_panel:"Electrical panel",furn_ups_unit:"UPS unit",furn_modem_router:"Modem/router",furn_heat_pump_outdoor:"Heat pump outdoor unit",furn_hot_water_tank:"Hot-water storage tank",furn_ventilation_fan:"Ventilation fan",furn_humidifier:"Humidifier",furn_smart_display:"Smart control display",furn_wall_switch:"Wall switch",furn_wall_outlet:"Wall outlet",furn_smart_plug:"Smart plug",furn_motion_sensor:"Motion sensor",furn_contact_sensor:"Door/window contact sensor",furn_water_leak_sensor:"Water leak sensor",furn_temperature_humidity_sensor:"Temperature/humidity sensor",furn_video_doorbell:"Video doorbell",furn_kitchen_corner:"Corner kitchen unit",furn_kitchen_display:"LED display cabinet",furn_vanity:"Dressing table",furn_crib:"Baby crib",furn_bed_single:"Single bed",furn_bed_double:"Double bed",furn_bed_90:"Bed 90 \xD7 200",furn_bed_140:"Bed 140 \xD7 200",furn_bed_160:"Bed 160 \xD7 200",furn_bed_180:"Bed 180 \xD7 200",furn_bed_200:"Bed 200 \xD7 200",furn_bed_upholstered_180:"Upholstered bed 180 \xD7 200",furn_bed_boxspring_180:"Box-spring bed 180 \xD7 200",furn_bed_futon_160:"Futon bed 160 \xD7 200",furn_wardrobe_2door:"2-door wardrobe",furn_wardrobe_3door:"3-door wardrobe",furn_wardrobe_4door:"4-door wardrobe",furn_wardrobe_6door:"6-door wardrobe",furn_wardrobe_mirror:"Wardrobe with mirror door",furn_wardrobe_corner:"Corner wardrobe",furn_nightstand_drawer:"Nightstand with drawer",furn_nightstand_slim:"Slim nightstand",furn_nightstand_floating:"Floating nightstand",furn_dresser_80_3:"Chest of 3 drawers 80",furn_dresser_140_6:"6-drawer dresser 140",furn_chest_tall_5:"Tall 5-drawer chest",furn_clothes_rail:"Clothes rail",furn_bed_canopy:"Canopy bed",furn_wardrobe_sliding:"Sliding door wardrobe",furn_closet_walkin:"Open walk-in closet",furn_vanity_mirror:"Vanity with mirror",furn_bed_bench:"Bed bench",furn_changing_table:"Changing table",furn_mirror_floor:"Standing mirror",furn_chest_tall:"Tall chest of drawers",furn_reading_nook:"Reading nook with chair",furn_bed_ambient_180:"Bed 180 with ambient light",furn_wardrobe_light:"Wardrobe with inside light",furn_alarm_sunrise:"Sunrise alarm clock",furn_vanity_light:"Dressing table with mirror light",furn_sofa_2:"2-seat sofa",furn_sofa_3:"3-seat sofa",furn_sofa_4:"4-seat sofa",furn_sofa_corner_left:"Left corner sofa",furn_sofa_corner_right:"Right corner sofa",furn_ottoman:"Pouf ottoman",furn_tv_console:"TV console",furn_display_cabinet:"Display cabinet",furn_sofa_chesterfield:"Chesterfield sofa",furn_sofa_velvet_3:"Velvet 3-seater sofa",furn_sofa_modular_5:"Modular sofa (5 parts)",furn_sofa_armless:"Armless sofa",furn_sofa_chaise:"Sofa with chaise",furn_sofa_u:"U-shaped sofa",furn_club_chair:"Club chair",furn_wingback_chair:"Wingback chair",furn_rocking_chair:"Rocking chair",furn_chaise_longue:"Chaise longue",furn_cocktail_chair:"Cocktail chair",furn_recliner:"Recliner with footstool",furn_bean_bag:"Bean bag",furn_chair_upholstered:"Upholstered chair",furn_chair_shell:"Shell chair",furn_lowboard_120:"Lowboard 120",furn_lowboard_160:"Lowboard 160",furn_lowboard_200:"Lowboard 200",furn_highboard:"Highboard",furn_chest_drawers_3:"Chest of 3 drawers",furn_bookshelf_wide:"Wide bookshelf",furn_cube_shelf_2x2:"Cube shelf 2\xD72",furn_cube_shelf_4x2:"Cube shelf 4\xD72",furn_cube_shelf_4x4:"Cube shelf 4\xD74",furn_room_divider_shelf:"Room divider shelf",furn_floating_shelf:"Floating wall shelf",furn_tv_stand:"TV on a stand",furn_wood_stove:"Wood stove",furn_media_wall_tv:"Media wall with TV",furn_piano_upright:"Upright piano with bench",furn_vase_pampas:"Floor vase with pampas grass",furn_plant_monstera:"Large monstera",furn_rug_round:"Round rug",furn_fireplace_wall_electric:"Electric wall fireplace",furn_table_120:"Dining table 120 \xD7 90",furn_table_160:"Dining table 160 \xD7 90",furn_table_200:"Dining table 200 \xD7 90",furn_table_solid_220:"Solid wood dining table 220 \xD7 100",furn_bench_dining_160:"Dining bench 160",furn_sofa_l:"L-shaped sofa",furn_sofa_bed:"Sofa bed",furn_shower_screen:"Shower screen",furn_hammock:"Hammock",furn_stone_table_set:"Stone table set",furn_planter_large:"Large planter",furn_water_tank:"Water tank",furn_gate:"Gate",furn_fence:"Fence",furn_gas_grill:"Gas grill",furn_lounge_set_outdoor:"Outdoor lounge set",furn_sun_lounger:"Sun lounger",furn_parasol:"Parasol",furn_pergola:"Pergola",furn_raised_bed:"Raised bed",furn_greenhouse:"Greenhouse",furn_hot_tub_outdoor:"Outdoor hot tub",furn_fire_bowl:"Fire bowl",furn_garden_torch:"Garden torch",furn_play_tower_slide:"Play tower with slide",furn_garden_shed:"Garden shed",furn_trampoline:"Trampoline",furn_flower_pots_3:"Flower pots (set of 3)",furn_lawn_sprinkler:"Lawn sprinkler",furn_irrigation_valve_box:"Irrigation valve box",furn_rain_barrel:"Rain barrel",furn_garden_lantern:"Garden lantern",furn_outdoor_kitchen:"Outdoor kitchen",furn_patio_heater:"Patio heater",furn_tree_oak:"Oak tree",furn_tree_lime:"Lime tree",furn_tree_birch:"Birch tree",furn_tree_maple:"Maple tree",furn_tree_fruit:"Fruit tree",furn_tree_spruce:"Spruce tree",furn_tree_pine:"Pine tree",furn_tree_thuja:"Thuja tree",furn_shrub:"Shrub",furn_shrub_flowering:"Flowering shrub",furn_brush_wild:"Wild brush",furn_trees_group_3:"Tree group (3)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_vanity_60:"Vanity 60 with base cabinet",furn_vanity_80:"Vanity 80 with base cabinet",furn_vanity_100:"Vanity 100 with base cabinet",furn_double_vanity_120:"Double vanity 120",furn_pedestal_basin:"Pedestal basin",furn_bathtub_builtin:"Built-in bathtub",furn_bathtub_corner:"Corner bathtub",furn_shower_corner_90:"Corner shower 90 \xD7 90",furn_shower_niche_120:"Niche shower 120 \xD7 90",furn_shower_walkin_140:"Walk-in shower 140 \xD7 90",furn_toilet_close_coupled:"Close-coupled toilet",furn_toilet_wall_hung:"Wall-hung toilet",furn_bidet:"Bidet",furn_bathroom_cabinet_tall:"Tall bathroom cabinet",furn_bathroom_cabinet_mid:"Mid-height bathroom cabinet",furn_mirror_round_light:"Round mirror with light",furn_mirror_80_light:"Mirror 80 \xD7 60 with light",furn_bathroom_wall_shelf:"Bathroom wall shelf",furn_towel_rail:"Towel rail with towel",furn_bathtub_freestanding:"Freestanding bathtub",furn_sauna:"Sauna",furn_towel_radiator:"Towel radiator",furn_whirlpool_indoor:"Indoor whirlpool",furn_washing_machine_cabinet:"Washing machine cabinet",furn_laundry_basket:"Laundry basket",furn_ladder_shelf_towels:"Ladder shelf with towels",furn_mirror_cabinet_light:"Mirror cabinet with light",furn_electric_towel_heater:"Electric towel heater",furn_bathroom_fan:"Bathroom fan",furn_washer_vanity:"Washer under the vanity",furn_rain_shower_led:"Rain shower with LED",furn_mirror_led_clock:"LED mirror 100 \xD7 70 with clock",furn_laundry_cabinet_basket:"Laundry cabinet with basket",furn_column_round:"Round column",furn_column_square:"Square column",furn_column_steel:"Steel column",furn_ceiling_beams:"Wooden ceiling beams (5)",furn_downstand_beam:"Downstand beam",furn_chimney_inside:"Indoor chimney",furn_fireplace_builtin:"Built-in fireplace",furn_sliding_wall:"Sliding wall",furn_builtin_shelf_niche:"Built-in shelf (wall niche)",furn_led_niche:"LED niche",furn_light_cove:"Light cove (ceiling)",furn_platform_steps:"Platform (2 steps)",furn_gallery_railing_glass:"Gallery railing (glass)",furn_window_seat:"Window seat",furn_desk:"Desk",furn_desk_l:"L-shaped desk",furn_desk_corner:"Corner desk",furn_desk_sit_stand:"Sit-stand desk",furn_chair_ergonomic:"Ergonomic office chair",furn_chair_visitor:"Visitor chair",furn_filing_cabinet:"Filing cabinet",furn_drawer_unit_office:"Office drawer unit",furn_bookcase_office:"Office bookcase",furn_monitor_single:"Single monitor",furn_monitor_dual:"Dual monitors",furn_pc_tower:"PC tower",furn_gaming_chair:"Gaming chair",furn_sim_racing_cockpit:"Sim-racing cockpit",furn_server_rack_42u:"42U server rack",furn_printer_3d_open:"Open 3D printer",furn_whiteboard_office:"Whiteboard",furn_monitor_triple:"Triple monitors",furn_arcade_cabinet:"Arcade cabinet",furn_laser_printer:"Laser printer",furn_phone_booth_office:"Office phone booth",furn_printer_3d_enclosed:"Enclosed 3D printer",furn_filament_shelf_wall:"Wall filament shelf",furn_tipi_kids:"Kids' teepee",furn_play_kitchen_kids:"Play kitchen",furn_desk_kids:"Kids' desk",furn_toy_shelf_boxes:"Toy shelf with boxes",furn_cushion_corner_kids:"Cushion play corner",furn_rocking_horse:"Rocking horse",furn_play_rug_road:"Road play rug",furn_table_chairs_kids:"Kids' table with two chairs",furn_lamp_night_moon:"Moon night light",furn_ball_pit:"Ball pit",furn_bed_house:"House bed",furn_baby_monitor:"Video baby monitor",furn_lamp_star_projector:"Star projector",furn_changing_dresser:"Changing dresser",furn_wardrobe_kids:"Kids' wardrobe",furn_toy_boxes_3:"Three toy boxes",furn_cat_tree_large:"Large cat tree",furn_cat_scratching_post:"Scratching post",furn_cat_scratch_board_wall:"Wall scratch board",furn_cat_cave:"Cat cave",furn_cat_bed_round:"Round cat bed",furn_cat_wall_perch:"Cat wall perch",furn_cat_climbing_steps_wall:"Cat climbing steps",furn_litter_box_hood:"Hooded litter box",furn_litter_box_self_cleaning:"Self-cleaning litter box",furn_dog_bed:"Dog bed",furn_dog_basket:"Dog basket",furn_dog_house:"Dog house",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_landing:"U-shaped stairs with landing",furn_stairs_landing_l:"L-shaped stairs with landing",furn_stairs_winder_l:"L-shaped winder stairs",furn_stairs_spiral:"Spiral stairs",furn_stairs_open:"Open-riser stairs",furn_stairs_concrete:"Concrete stairs",furn_stairs_compact:"Compact stairs",furn_railing_glass:"Glass railing",furn_railing_metal:"Metal railing",furn_railing_wood:"Wood railing",furn_railing_cable:"Cable railing",furn_workbench:"Workbench",furn_workbench_pegboard:"Workbench with pegboard",furn_tool_cabinet:"Tool cabinet",furn_tool_chest:"Tool chest",furn_storage_rack_garage:"Storage rack",furn_wall_shelf_garage:"Garage wall shelf",furn_air_compressor:"Air compressor",furn_shop_vacuum:"Shop vacuum",furn_ladder_step:"Step ladder",furn_ladder_extension:"Extension ladder",furn_storage_boxes:"Storage boxes",furn_tire_stack:"Tyre stack",furn_bike_rack:"Bike rack",furn_repair_stand:"Repair stand",furn_parts_bin:"Parts bin",furn_utility_sink_garage:"Utility sink",furn_charging_bay:"Charging station",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_air_conditioner:"Wall-mounted air conditioner",furn_water_pump:"Outdoor water pump",furn_robot_vacuum:"Robot vacuum",furn_robot_mower:"Robot mower with garage",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_entity_fan:"Fan or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Climate entity",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_console_table:"Console table",furn_coffee_table_round:"Round coffee table",furn_coffee_table_glass:"Glass coffee table",furn_nesting_tables:"Nesting tables",furn_side_table_round:"Round side table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_washer_dryer_tower:"Washer-dryer tower",furn_balcony_solar:"Balcony solar kit",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",furn_group_pets:"Pets",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_climate:"Heating & cooling",furn_group_outdoor:"Outdoor",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn and zoom the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stairs_landing_hint:"Two parallel flights with a half-height landing: up the left side towards the back, turn 180\xB0, then up the right side towards the front. The stair opens the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},tl=["fr","es","nl","it","hu","vi"],St=new Map,or=new Map;function sr(o){let e=(o??navigator.language).toLowerCase().slice(0,2);return tl.includes(e)?e:null}function ko(o){let e=sr(o);return!e||St.has(e)}function wo(o){let e=sr(o);if(!e||St.has(e))return Promise.resolve();let t=or.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=0b6a600d869a`,import.meta.url).href;t=fetch(n).then(r=>r.ok?r.json():{}).then(r=>{St.set(e,r&&typeof r=="object"?r:{})}).catch(()=>{St.set(e,{})}).finally(()=>or.delete(e)),or.set(e,t)}return t}function Ae(o,e,t={}){let n=o?.language??navigator.language,r=n.startsWith("de")?null:sr(n),s=(n.startsWith("de")?yo:r&&St.get(r)||vo)[e]??vo[e]??yo[e]??e;for(let[a,l]of Object.entries(t))s=s.replace(`{${a}}`,String(l));return s}function Y(o,e,t=2){return e.toLocaleString(o?.language??void 0,{maximumFractionDigits:t})}var nl={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Mt(o){return nl[o]}function $o(o,e){let t=`${e} ${String(o.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function xo(o,e){let t=o.entities?.[e]?.device_id;return t?Object.values(o.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(o.states[n]?.attributes.device_class))):[]}var te=(o,e)=>[o[0]-e[0],o[1]-e[1]],Pe=(o,e)=>[o[0]+e[0],o[1]+e[1]],we=(o,e)=>[o[0]*e,o[1]*e],Rt=(o,e)=>o[0]*e[0]+o[1]*e[1],Et=(o,e)=>o[0]*e[1]-o[1]*e[0],zt=o=>Math.hypot(o[0],o[1]),$e=o=>{let e=zt(o)||1;return[o[0]/e,o[1]/e]},So=o=>[-o[1],o[0]],Mo=o=>[o[1],-o[0]];function ae(o,e,t=[]){let n=e.eps??.005,r=[],i=o.filter(S=>!Ce(S)),s=t.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),a=[],l=S=>{for(let I=0;I<a.length;I++)if(Math.abs(a[I][0]-S[0])<=n&&Math.abs(a[I][1]-S[1])<=n)return I;return a.push([S[0],S[1]]),a.length-1},c=[];for(let S of i){let I=S.points;if(I.length<3||Math.abs(ee(I))<1e-6)continue;let E=ee(I)>0,R=I.map(l);for(let L=0;L<I.length;L++){let D=R[L],O=R[(L+1)%I.length];D!==O&&c.push(E?{u:D,v:O,room:S.id,edge:L,forward:!0}:{u:O,v:D,room:S.id,edge:L,forward:!1})}}let d=s.map(S=>[l(S.a),l(S.b)]),u=new Set;for(let S of i){let I=S.points;I.length<3||(S.wall_splits??[]).forEach((E,R)=>{if(!E||R>=I.length)return;let L=I[R],D=te(I[(R+1)%I.length],L),O=zt(D);for(let W of E)W>n&&W<O-n&&u.add(l(Pe(L,we(D,W/O))))})}let h=[];for(let S of c){let I=a[S.u],E=a[S.v],R=te(E,I),L=zt(R),D=we(R,1/L),O=[];for(let H=0;H<a.length;H++){if(H===S.u||H===S.v)continue;let V=te(a[H],I),K=Rt(V,D);K<=n||K>=L-n||Math.abs(Et(D,V))<=n&&O.push({t:K,id:H})}O.sort((H,V)=>H.t-V.t);let W=[{t:0,id:S.u},...O,{t:L,id:S.v}];for(let H=0;H+1<W.length;H++){let V=W[H],K=W[H+1],U=S.forward?V.t:L-K.t,j=S.forward?K.t:L-V.t;h.push({u:V.id,v:K.id,room:S.room,edge:S.edge,t0:U,t1:j})}}let p=new Map;for(let S of h){let I=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,E=p.get(I);E||p.set(I,E=[]),E.push(S)}let f=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),_=new Map;for(let S of h){let I=`${S.room}:${S.edge}`;_.set(I,[..._.get(I)??[],S.t0].sort((E,R)=>E-R))}let g=S=>{let I=i.find(R=>R.id===S.room)?.wall_heights?.[S.edge];if(!Array.isArray(I))return I;let E=_.get(`${S.room}:${S.edge}`)??[];return I[E.indexOf(S.t0)]??null},y=S=>{let I=S.map(g).filter(E=>typeof E=="number"&&E>0);return I.length?Math.min(...I):void 0},m=S=>{let I=S.map(E=>i.find(R=>R.id===E.room)?.wall_thickness?.[E.edge]).filter(E=>typeof E=="number"&&E>0);return I.length?Math.max(...I):void 0},v=S=>S.some(I=>g(I)===0),M=[],w=[];for(let S of p.values()){let I=S[0],E=S.find(R=>R!==I&&R.u===I.v&&R.v===I.u&&R.room!==I.room);for(let R of S)R!==I&&R!==E&&R.room!==I.room&&r.push(`overlap:${I.room}:${R.room}`);if(v(E?[I,E]:[I])){E&&M.push([I.room,E.room]);continue}if(E){let R=m([I,E])??e.interior;w.push({a:I.u,b:I.v,left:R/2,right:R/2,exterior:!1,roomLeft:I.room,roomRight:E.room,sources:[f(I),f(E)],height:y([I,E])})}else w.push({a:I.u,b:I.v,left:0,right:m([I])??e.exterior,exterior:!0,roomLeft:I.room,roomRight:null,sources:[f(I)],height:y([I])})}s.forEach((S,I)=>{let[E,R]=d[I];if(E===R)return;let L=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],D=o.find(H=>H.points.length>=3&&B(L,H.points))?.id??null,O=(S.thickness??e.interior)/2,W=typeof S.height=="number"&&S.height>0?S.height:void 0;w.push({free:S.id,a:E,b:R,left:O,right:O,exterior:!1,roomLeft:D,roomRight:D,sources:[],height:W})}),w=il(w,a,u);let A=sl(w,a);return{walls:w.map((S,I)=>{let E=a[S.a],R=a[S.b],L=A.get(`${I}:a`),D=A.get(`${I}:b`),O=al([L.right,D.left,R,D.right,L.left,E],1e-6);return{id:rl(E,R),a:[E[0],E[1]],b:[R[0],R[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:O,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{}}}),warnings:[...new Set(r)],open:M}}function rl(o,e){let t=i=>Math.round(i*100),[n,r]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function Eo(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function il(o,e,t=new Set){let n=o.slice(),r=!0;for(;r;){r=!1;let i=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=i.get(l);c||i.set(l,c=[]),c.push(a)}});for(let[s,a]of i){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=Eo(l)),c.a!==s&&(c=Eo(c)),l.a===c.b)continue;let d=$e(te(e[l.b],e[l.a])),u=$e(te(e[c.b],e[c.a]));if(Math.abs(Et(d,u))>1e-6||Rt(d,u)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:ol(l.sources,c.sources)},p=n.filter((f,_)=>_!==a[0]&&_!==a[1]);p.push(h),n.length=0,n.push(...p),r=!0;break}}return n}function ol(o,e){let t=o.map(n=>({...n}));for(let n of e){let r=t.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function sl(o,e){let t=new Map;o.forEach((r,i)=>{let s=$e(te(e[r.b],e[r.a])),a=[[r.a,{key:`${i}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${i}:b`,d:we(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=t.get(l);d||t.set(l,d=[]),d.push(c)}});let n=new Map;for(let[r,i]of t){let s=e[r];i.sort((c,d)=>c.angle-d.angle);let a=c=>({left:Pe(s,we(So(c.d),c.left)),right:Pe(s,we(Mo(c.d),c.right))});for(let c of i)n.set(c.key,a(c));if(i.length<2)continue;let l=4*Math.max(...i.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<i.length;c++){let d=i[c],u=i[(c+1)%i.length],h=Pe(s,we(So(d.d),d.left)),p=Pe(s,we(Mo(u.d),u.right)),f=Et(d.d,u.d);if(Math.abs(f)<1e-4)continue;let _=Et(te(p,h),u.d)/f,g=Pe(h,we(d.d,_));zt(te(g,s))>l||(n.get(d.key).left=g,n.get(u.key).right=g)}}return n}function al(o,e){let t=o.filter((r,i)=>zt(te(r,o[(i+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let i=t[(r+t.length-1)%t.length],s=t[r],a=t[(r+1)%t.length],l=te(s,i),c=te(a,s);if(Math.abs(Et($e(l),$e(c)))<1e-7&&Rt(l,c)>0){t=t.filter((d,u)=>u!==r),n=!0;break}}}return t}function Qe(o,e,t){let n=o.points[e],r=o.points[(e+1)%o.points.length],i=$e(te(r,n));return Pe(n,we(i,t))}function Je(o,e,t){if(o.wall){let r=t.find(a=>a.id===o.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let i=$e(te(r.b,r.a));return{room:{id:o.room_id,name:"",area_id:null,points:[r.a,r.b,Pe(r.a,[-i[1],i[0]])]},edge:0}}let n=e.find(r=>r.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}function ar(o,e,t){if(!e.wall)return ll(o,t.room,t.edge,e.offset);let n=o.find(i=>i.free===e.wall);if(!n)return null;let r=Qe(t.room,0,e.offset);return{wall:n,s:Rt(te(r,n.a),$e(te(n.b,n.a)))}}function ll(o,e,t,n){for(let r of o){if(!r.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Qe(e,t,n);return{wall:r,s:Rt(te(s,r.a),$e(te(r.b,r.a)))}}return null}var xe=Math.PI/180;function he(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),r=Math.max(o.z0,o.z1);return o.axis==="x"?{u0:e,u1:t,w:r-n,at:(i,s)=>[i,o.flip?r-s:n+s]}:{u0:n,u1:r,w:t-e,at:(i,s)=>[o.flip?t-s:e+s,i]}}function Ie(o){let e=he(o).w,t=o.eave_a,n=o.eave_b,r=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*xe),i=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*xe);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(o.shape==="mansard"){let l=Ao(e,t,n,r,i);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+i>1e-6?Math.min(e,Math.max(0,(n-t+e*i)/(r+i))):e/2,a=t+s*r;return{vr:s,rh:a,y:l=>l<=s?t+l*r:n+(e-l)*i}}var cl=.14;function Ro(o,e,t){let n=[];for(let r of o.settings.roof.sections??[]){if(r.open||r.shape==="flat"||r.shape==="parapet"||r.shape==="mansard")continue;let i=he(r),s=Ie(r),a=e+t+cl,l=[],c=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*xe),d=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*xe);c>1e-6&&l.push((a-r.eave_a)/c),r.shape==="gable"&&d>1e-6&&l.push(i.w-(a-r.eave_b)/d);for(let u of l)u<=.01||u>=i.w-.01||r.shape==="gable"&&Math.abs(s.y(u)-a)>1e-6||n.push([i.at(i.u0,u),i.at(i.u1,u)])}return n}function dl(o,e){let t=o.length;if(t<3||Math.abs(e)<1e-9)return o.map(i=>[i[0],i[1]]);let n=_e(o)>=0?1:-1,r=[];for(let i=0;i<t;i++){let s=o[(i+t-1)%t],a=o[i],l=o[(i+1)%t],c=zo([a[0]-s[0],a[1]-s[1]]),d=zo([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],h=[d[1]*n,-d[0]*n],p=u[0]+h[0],f=u[1]+h[1],_=Math.hypot(p,f);if(_<1e-6){r.push([a[0]+u[0]*e,a[1]+u[1]*e]);continue}let g=(p*u[0]+f*u[1])/_,y=Math.min(4,1/Math.max(.25,g));r.push([a[0]+p/_*e*y,a[1]+f/_*e*y])}return r}function zo(o){let e=Math.hypot(o[0],o[1])||1;return[o[0]/e,o[1]/e]}function lr(o){let e=o.map(n=>n[0]),t=o.map(n=>n[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}function Fo(o,e,t,n){let r=ae(o,{exterior:t,interior:n},e).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let i=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,s=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let h of[u.a,u.b])s.set(i(h),[...s.get(i(h))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let h=[u.a,u.b],p=u.b;for(;;){let f=(s.get(i(p))??[]).find(_=>!l.has(_));if(!f||(l.add(f),p=i(f.a)===i(p)?f.b:f.a,i(p)===i(h[0])))break;h.push(p)}h.length>=3&&i(p)===i(h[0])&&(!c||Math.abs(_e(h))>Math.abs(_e(c)))&&(c=h)}if(!c)return null;let d=[];for(let u=0;u<c.length;u++){let h=c[(u+c.length-1)%c.length],p=c[u],f=c[(u+1)%c.length],_=(p[0]-h[0])*(f[1]-p[1])-(p[1]-h[1])*(f[0]-p[0]);Math.abs(_)>1e-6&&d.push(p)}return d.length>=3?dl(d,t):null}var Ft=Math.tan(30*xe);function Ao(o,e,t,n,r){let i=Math.min(o*.3,n>1e-6?2.4/n:o*.3),s=Math.min(o*.3,r>1e-6?2.4/r:o*.3),a=e+i*n,l=t+s*r,c=Math.min(o-s,Math.max(i,(l-a+Ft*(o-s+i))/(2*Ft))),d=a+(c-i)*Ft;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:d,y:h=>h<=i?e+h*n:h<=c?a+(h-i)*Ft:h<=o-s?l+(o-s-h)*Ft:t+(o-h)*r}}function cr(o,e){let t=he(o),n=Ie(o),r=t.w,i=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(m,v)=>[m,v,n.y(v)],d=c(a,-i),u=c(l,-i),h=c(l,r+s),p=c(a,r+s),f=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*xe),_=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*xe);if(o.shape==="pent"){let m=[d,u,h,p];return{faces:[m],rim:m,ridges:[[h,p]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(o.shape==="hip"||o.shape==="pyramid"){let m=o.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,r-n.vr)||r/2),v=[t.u0+m,n.vr,n.rh],M=[t.u1-m,n.vr,n.rh],w=o.shape==="pyramid"?[[d,u,v],[u,h,v],[h,p,v],[p,d,v]]:[[d,u,M,v],[v,M,h,p],[p,d,v],[u,h,M]],A=o.shape==="pyramid"?[[d,v],[p,v],[u,v],[h,v]]:[[v,M],[d,v],[p,v],[u,M],[h,M]];return{faces:w,rim:[d,u,h,p],ridges:A,gable:null}}if(o.shape==="halfhip"){let m=Math.min(n.y(0),n.y(r)),v=m+(n.rh-m)*.55,M=f>1e-6?Math.min(n.vr,(v-o.eave_a)/f):n.vr,w=_>1e-6?Math.max(n.vr,r-(v-o.eave_b)/_):n.vr,A=Math.min((t.u1-t.u0)/2-.1,(n.rh-v)/Math.max(.2,f)),P=[t.u0+A,n.vr,n.rh],S=[t.u1-A,n.vr,n.rh],I=[a,M,v],E=[a,w,v],R=[l,M,v],L=[l,w,v];return{faces:[[d,u,R,S,P,I],[P,S,L,h,p,E],[E,I,P],[R,L,S]],rim:[d,u,R,L,h,p,E,I],ridges:[[P,S],[I,P],[E,P],[R,S],[L,S]],gable:[[0,n.y(0)],[M,v],[w,v],[r,n.y(r)]]}}if(o.shape==="mansard"){let m=Ao(r,o.eave_a,o.eave_b,f,_),v=[a,m.vla,m.yla],M=[l,m.vla,m.yla],w=[a,r-m.vlb,m.ylb],A=[l,r-m.vlb,m.ylb],P=[a,m.vr,m.rh],S=[l,m.vr,m.rh];return{faces:[[d,u,M,v],[v,M,S,P],[P,S,A,w],[w,A,h,p]],rim:[d,u,M,S,A,h,p,w,P,v],ridges:[[P,S],[v,M],[w,A]],gable:[[0,n.y(0)],[m.vla,m.yla],[m.vr,m.rh],[r-m.vlb,m.ylb],[r,n.y(r)]]}}let g=[a,n.vr,n.rh],y=[l,n.vr,n.rh];return{faces:[[d,u,y,g],[g,y,h,p]],rim:[d,u,y,h,p,g],ridges:[[g,y]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function ul(o,e,t){let n=null;for(let r of o.faces){if(!B([e,t],r.map(m=>[m[0],m[1]])))continue;let[i,s]=r,a=r.slice(2).find(m=>Math.abs((s[0]-i[0])*(m[1]-i[1])-(s[1]-i[1])*(m[0]-i[0]))>1e-9);if(!a)continue;let l=s[0]-i[0],c=s[2]-i[2],d=s[1]-i[1],u=a[0]-i[0],h=a[2]-i[2],p=a[1]-i[1],f=c*p-d*h,_=d*u-l*p,g=l*h-c*u;if(Math.abs(_)<1e-9)continue;let y=i[2]-(f*(e-i[0])+g*(t-i[1]))/_;n=n===null?y:Math.min(n,y)}return n}function hl(o,e,t){let n=Math.min(o.x0,o.x1),r=Math.max(o.x0,o.x1),i=Math.min(o.z0,o.z1),s=Math.max(o.z0,o.z1);return o.axis==="x"?[e,o.flip?s-t:t-i]:[t,o.flip?r-e:e-n]}function pl(o){return{x0:Math.min(o.x0,o.x1),x1:Math.max(o.x0,o.x1),z0:Math.min(o.z0,o.z1),z1:Math.max(o.z0,o.z1)}}function Po(o,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),i=null;for(let s of o){if(s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(e)*1.5)continue;let a=pl(s);t<a.x0||t>a.x1||n<a.z0||n>a.z1||(!i||r(s)<r(i))&&(i=s)}return i}function Io(o,e,t,n){let r=he(o),i=Ie(o),s=2,a=Math.max(r.u0+.3,Math.min(r.u1-s-.3,(n??(r.u0+r.u1)/2)-s/2)),l=e==="a"?o.eave_a:o.eave_b,c=e==="a"?o.pitch_a:o.pitch_b,d=l+1.4,u=s/2*Math.tan(35*xe),h=d+u,p=Math.max(.8,Math.min(r.w/2-.2,(h-l)/Math.max(.15,Math.tan(Math.min(80,c)*xe)))),f=e==="a"?0:r.w-p,_=e==="a"?p:r.w,g=r.at(a,f),y=r.at(a+s,_);return{id:t,x0:Math.round(Math.min(g[0],y[0])*100)/100,z0:Math.round(Math.min(g[1],y[1])*100)/100,x1:Math.round(Math.max(g[0],y[0])*100)/100,z1:Math.round(Math.max(g[1],y[1])*100)/100,shape:"gable",axis:o.axis==="x"?"z":"x",eave_a:Math.round(d*100)/100,eave_b:Math.round(d*100)/100,pitch_a:35,pitch_b:35,base:Math.round(i.y(e==="a"?0:r.w)*100)/100,overhang:.15,dormer:!0}}function To(o,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=he(e),n=Ie(e).rh,r=cr(o,{u0:0,u1:0,a:0,b:0}),i=Ie(o),s=f=>{let[_,g]=t.at(f,t.w/2),[y,m]=hl(o,_,g);return ul(r,y,m)??i.y(m)},a=s(t.u0)<=s(t.u1),l=a?t.u0:t.u1,c=a?t.u1:t.u0,d=a?1:-1,u=Math.abs(c-l),h=c;for(let f=.5;f<u;f+=.05)if(s(l+d*f)>=n-.02){h=l+d*f;break}if(Math.abs(h-c)<.05)return e;let p={...e};return e.axis==="x"?c===t.u1?p.x1=h:p.x0=h:c===t.u1?p.z1=h:p.z0=h,p}function Lo(o,e,t){let n=he(e),r=o.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>e.base+.05)),i=c=>c.some(d=>r.some(u=>B(d,u.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:i(a.map(c=>n.at(c,-s)))?0:t,b:i(a.map(c=>n.at(c,n.w+s)))?0:t,u0:i(l.map(c=>n.at(n.u0-s,c)))?0:t,u1:i(l.map(c=>n.at(n.u1+s,c)))?0:t}}function Oo(o,e,t,n,r){let i=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])i.push([e+(n-e)*a,t+(r-t)*l]);let s=o.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&i.some(c=>B(c,l.points)))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function Do(o,e){let t=o.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}function rn(o){return Ie(o).rh}function Wo(o,e=t=>`roof_${t+1}`){let t=o.settings.roof?.pitch??35,n=o.settings.wall_exterior,r=o.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),i=[],s=[],a=l=>Math.round(l*1e3)/1e3;for(let l of r){let c=l.rooms.filter(v=>v.points.length>=3),d=[...new Set(c.flatMap(v=>v.points.map(M=>a(M[0]))))].sort((v,M)=>v-M),u=[...new Set(c.flatMap(v=>v.points.map(M=>a(M[1]))))].sort((v,M)=>v-M),h=d.length-1,p=u.length-1,f=(v,M)=>v.some(w=>B(M,w.points)),_=[];for(let v=0;v<p;v++){_.push([]);for(let M=0;M<h;M++){let w=[(d[M]+d[M+1])/2,(u[v]+u[v+1])/2];_[v].push(f(c,w)&&!f(s,w))}}let g=_.map(v=>v.map(()=>!1)),y=(v,M)=>_[M][v]&&!g[M][v],m=l.elevation+l.height;for(let v=0;v<p;v++)for(let M=0;M<h;M++){if(!y(M,v))continue;let w=M;for(;w+1<h&&y(w+1,v);)w++;let A=v;for(;A+1<p&&Array.from({length:w-M+1},(R,L)=>y(M+L,A+1)).every(Boolean);)A++;for(let R=v;R<=A;R++)for(let L=M;L<=w;L++)g[R][L]=!0;let P=d[M]-n,S=d[w+1]+n,I=u[v]-n,E=u[A+1]+n;Math.min(S-P,E-I)<.8||i.push({id:e(i.length),x0:a(P),z0:a(I),x1:a(S),z1:a(E),shape:"gable",axis:S-P>=E-I?"x":"z",eave_a:a(m),eave_b:a(m),pitch_a:t,pitch_b:t,base:a(m),overhang:null})}s.push(...c)}return i}var Ue=Math.PI/180,Bo=1.13,dr=1.72,me=.025,Ne=.07,Co=.25;function ge(o,e){let t=[];for(let n of o.floors){if(e&&n.id!==e)continue;let{walls:r}=ae(n.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},n.walls??[]);for(let i of r){if(!i.exterior&&!i.free)continue;let s=i.b[0]-i.a[0],a=i.b[1]-i.a[1],l=Math.hypot(s,a);if(l<1.2)continue;let c=a/l,d=-s/l,u=Math.min(n.height,i.height??n.height),h=(p,f,_,g)=>t.push({key:p,section:null,side:"top",flat:!1,o:f,eu:_,es:[0,1,0],n:g,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[g[0],g[2]],wall:{floorId:n.id}});h(`wall:${n.id}:${i.id}`,[i.a[0]+c*i.right,n.elevation,i.a[1]+d*i.right],[s/l,0,a/l],[c,0,d]),i.free&&h(`wall:${n.id}:${i.id}:back`,[i.b[0]-c*i.left,n.elevation,i.b[1]-d*i.left],[-s/l,0,-a/l],[-c,0,-d])}}return t}var Le="ground";function _l(o){return[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation)[0]??o.floors[0]??null}function Vo(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],i=_l(o),s=n[0]*e.u+r[0]*e.v,a=n[2]*e.u+r[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:Gt(i,s,a)):e.base??0;return{key:Le,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function ie(o,e,t=q(o)){return e.face===Le?Vo(o,e):e.face.startsWith("wall:")?ge(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function No(o,e,t){let n=ge(o,t),r=o.settings.north??0,i=l=>{let c=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-r;return l.lu*(1.3+Math.cos((c-180)*Math.PI/180))},s=[...n].sort((l,c)=>i(c)-i(l))[0];if(!s)return null;let a={...tt(s,e),portrait:!1,rows:1};return a.cols=Math.max(1,Math.floor((s.lu-.8+me)/(dr+me))),a.u=Math.round((s.lu-(a.cols*dr+(a.cols-1)*me))/2*100)/100,a.v=Math.round(Math.max(0,s.ls-Bo-.3)*100)/100,a}function ur(o,e){let t=o.floors.flatMap(i=>i.rooms.flatMap(s=>s.points)),n=t.length?Math.max(...t.map(i=>i[0]))+3:0,r=t.length?Math.min(...t.map(i=>i[1])):0;return{id:e,face:Le,u:Math.round(n*100)/100,v:Math.round(r*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(o.settings.north??0)||0,look:"black",entity:null}}function hr(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function q(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(m=>fl(m,Lo(o,m,m.overhang??e.overhang)));let t=hr(o);if(!t)return[];let n=t.rooms.flatMap(m=>m.points.map(v=>v[0])),r=t.rooms.flatMap(m=>m.points.map(v=>v[1])),i=o.settings.wall_exterior+e.overhang,s=Math.min(...n)-i,a=Math.max(...n)+i,l=Math.min(...r)-i,c=Math.max(...r)+i,d=t.elevation+t.height;if(e.type==="flat")return[Ko("main",null,s,l,a,c,d+Co)];let u=a-s>=c-l,h=e.ridge==="short"?!u:u,p=(h?c-l:a-s)/2,f=p*Math.tan(e.pitch*Ue),_=(m,v,M)=>h?[m,d+M,(l+c)/2+v]:[(s+a)/2+v,d+M,m],[g,y]=h?[s,a]:[l,c];return[-1,1].map(m=>on(`main:${m<0?"a":"b"}`,null,m<0?"a":"b",_(g,m*p,0),_(y,m*p,0),_(g,0,f),e.pitch,()=>[0,y-g]))}function fl(o,e){let t=he(o),n=Ie(o),r=(_,g,y)=>{let[m,v]=t.at(_,g);return[m,y,v]},i=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(o.shape==="flat"||o.shape==="parapet"){let _=t.at(a,-i),g=t.at(l,t.w+s);return[Ko(o.id,o.id,Math.min(_[0],g[0]),Math.min(_[1],g[1]),Math.max(_[0],g[0]),Math.max(_[1],g[1]),o.eave_a+Co)]}if(o.shape==="pent")return[on(`${o.id}:a`,o.id,"a",r(a,-i,n.y(-i)),r(l,-i,n.y(-i)),r(a,t.w+s,n.y(t.w+s)),o.pitch_a,()=>[0,c])];let d=o.shape==="hip"||o.shape==="pyramid",u=o.shape==="pyramid"?(t.u1-t.u0)/2:d?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,h=d?t.u0+u-a:0,p=d?l-(t.u1-u):0,f=[];if(n.vr>.3){let _=Math.hypot(n.vr+i,n.rh-n.y(-i));f.push(on(`${o.id}:a`,o.id,"a",r(a,-i,n.y(-i)),r(l,-i,n.y(-i)),r(a,n.vr,n.rh),o.pitch_a,g=>[h*(g/_),c-p*(g/_)]))}if(t.w-n.vr>.3){let _=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));f.push(on(`${o.id}:b`,o.id,"b",r(l,t.w+s,n.y(t.w+s)),r(a,t.w+s,n.y(t.w+s)),r(l,n.vr,n.rh),o.pitch_b,g=>[p*(g/_),c-h*(g/_)]))}if(d){let _=n.y(-i),g=n.y(t.w+s),y=[[`${o.id}:c`,"c",r(a,t.w+s,g),r(a,-i,_),r(t.u0+u,n.vr,n.rh)],[`${o.id}:d`,"d",r(l,-i,_),r(l,t.w+s,g),r(t.u1-u,n.vr,n.rh)]];for(let[m,v,M,w,A]of y){let P=ml(m,o.id,v,M,w,A);P&&f.push(P)}}return f}function ml(o,e,t,n,r,i){let s=At(Ke(r,n));if(s<.3)return null;let a=Te(Ke(r,n)),l=Ke(i,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=At(d);if(u<.3)return null;let h=Te(d),p=Te(Go(a,h));p[1]<0&&(p=[-p[0],-p[1],-p[2]]);let f=Te([-h[0],0,-h[2]]),_=Math.atan2(h[1],Math.hypot(h[0],h[2]))/Ue;return{key:o,section:e,side:t,flat:!1,o:n,eu:a,es:h,n:p,lu:s,ls:u,pitch:_,span:y=>{let m=Math.min(1,Math.max(0,y/u));return[c*m,s-(s-c)*m]},facing:[f[0],f[2]]}}function on(o,e,t,n,r,i,s,a){let l=Te(Ke(r,n)),c=Te(Ke(i,n)),d=Te(Go(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let u=Te([-c[0],0,-c[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:d,lu:At(Ke(r,n)),ls:At(Ke(i,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function Ko(o,e,t,n,r,i,s){let a=r-t>=i-n,l=a?r-t:i-n,c=a?i-n:r-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Pt(o){let e=o.module_w||Bo,t=o.module_h||dr;return o.portrait===!1?[t,e]:[e,t]}function sn(o){return o.layout?.length?o.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function pr(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*Ue:o.wall?Math.min(90,Math.max(0,e.tilt??0))*Ue:0}function et(o,e){let[t,n]=Pt(e),r=sn(e),i=Math.max(1,...r),a=(r.length-1)*_r(o,e)+n*Math.cos(pr(o,e));return[i*t+(i-1)*me,a]}function _r(o,e){let[,t]=Pt(e),n=pr(o,e);return o.wall?t*Math.cos(n)+me:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+me}function Se(o,e,t=!1){let[n,r]=Pt(e),i=[],s=pr(o,e),a=r*Math.cos(s),l=_r(o,e),c=sn(e),d=Math.max(1,...c),u=new Set(e.skip??[]),h=(f,_,g)=>[o.o[0]+o.eu[0]*f+o.es[0]*_+o.n[0]*g,o.o[1]+o.eu[1]*f+o.es[1]*_+o.n[1]*g,o.o[2]+o.eu[2]*f+o.es[2]*_+o.n[2]*g],p=(f,_)=>{if(o.unbounded)return!0;if(_<-1e-6||_>o.ls+1e-6)return!1;let[g,y]=o.span(_);return f>=g-1e-6&&f<=y+1e-6};return c.forEach((f,_)=>{let g=e.align==="right"?d-f:e.align==="center"?(d-f)/2:0;for(let y=0;y<f;y++){let m=`${_}:${y}`,v=u.has(m);if(v&&!t)continue;let M=e.u+(y+g)*(n+me),w=e.v+_*l,A=M+n,P=w+(o.flat||o.wall?a:r);if(![[M,w],[A,w],[A,P],[M,P]].every(([D,O])=>p(D,O)))continue;if(o.wall&&s>.001){let D=Ne+r*Math.sin(s),[O,W]=e.flip?[D,Ne]:[Ne,D],H=[h(M,w,O),h(A,w,O),h(A,P,W),h(M,P,W)],V=e.flip?w:P,K=[M+.05,A-.05].map(U=>[h(U,V,0),h(U,V,D)]);i.push({corners:H,posts:K,cell:m,skipped:v});continue}if(!o.flat){i.push({corners:[h(M,w,Ne),h(A,w,Ne),h(A,P,Ne),h(M,P,Ne)],posts:[],cell:m,skipped:v});continue}let S=.15,I=S+r*Math.sin(s),[E,R]=e.flip?[P,w]:[w,P],L=[h(M,E,S),h(A,E,S),h(A,R,I),h(M,R,I)];i.push({corners:L,posts:[M+.05,A-.05].flatMap(D=>[[h(D,E,0),h(D,E,S)],[h(D,R,0),h(D,R,I)]]),cell:m,skipped:v})}}),i}function an(o,e){let t=[o.eu[0],o.eu[2]],n=[o.es[0],o.es[2]],r=[e[0]-o.o[0],e[1]-o.o[2]],i=t[0]*n[1]-t[1]*n[0];if(Math.abs(i)<1e-9)return null;let s=(r[0]*n[1]-r[1]*n[0])/i,a=(t[0]*r[1]-t[1]*r[0])/i;if(a<0||a>o.ls)return null;let[l,c]=o.span(a);return s>=l&&s<=c?{u:s,s:a}:null}function Uo(o,e){let t=null;for(let n of o){if(n.wall){let s=[e[0]-n.o[0],e[1]-n.o[2]],a=s[0]*n.eu[0]+s[1]*n.eu[2],l=s[0]*n.n[0]+s[1]*n.n[2];if(a>=0&&a<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:a,s:Number.NaN};a>=0&&a<=n.lu&&l>.35&&l<=.8&&!t&&(t={face:n,u:a,s:Number.NaN,y:-1/0});continue}let r=an(n,e);if(!r)continue;let i=n.o[1]+n.es[1]*r.s;(!t||i>t.y)&&(t={face:n,...r,y:i})}return t?{face:t.face,u:t.u,s:t.s}:null}function It(o,e){if(o.unbounded)return{u:e.u,v:e.v};let[t,n]=et(o,e),r=i=>Math.floor(i*100+1e-6)/100;return{u:r(Math.min(Math.max(0,e.u),Math.max(0,o.lu-t))),v:r(Math.min(Math.max(0,e.v),Math.max(0,o.ls-n)))}}function tt(o,e){let t={id:e,face:o.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:o.flat?15:null,flip:!1,entity:null,look:"black"},[n]=Pt(t),r=.4,i=_r(o,t),[s,a]=o.span(o.ls/2);for(t.cols=Math.max(1,Math.floor((a-s-2*r+me)/(n+me))),t.rows=Math.max(1,Math.min(4,Math.floor((o.ls-2*r)/i)));t.cols>1&&Se(o,{...t,u:Ho(o,t),v:r}).length<t.rows*t.cols;)t.cols--;return t.u=Ho(o,t),t.v=r,t}function Ho(o,e){let[t]=Pt(e),n=e.cols*t+(e.cols-1)*me;return Math.round((o.lu-n)/2*100)/100}function fr(o,e){let t=(Math.atan2(o.facing[0],-o.facing[1])/Ue-e+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(t/45)%8]}function ln(o,e){let t=n=>{if(n.flat)return n.lu*n.ls*.8;let r=(Math.atan2(n.facing[0],-n.facing[1])/Ue-e+720)%360,i=Math.cos((r-180)*Ue);return n.lu*n.ls*(1.2+i)};return[...o].sort((n,r)=>t(r)-t(n))[0]??null}function Ke(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function At(o){return Math.hypot(o[0],o[1],o[2])}function Te(o){let e=At(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function Go(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var jo=.78,Zo=1.18;function nt(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||jo,module_h:o.h||Zo}}function Yo(o,e){let t=Se(o,nt(e))[0];if(!t)return null;let n=r=>[r[0]-o.n[0]*.05,r[1]-o.n[1]*.05,r[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function mr(o,e){let t=jo,n=Zo,[r,i]=o.span(o.ls/2);return{id:e,face:o.key,u:Math.round((r+i-t)/2*100)/100,v:Math.round(Math.max(0,Math.min(o.ls-n,o.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function Tt(o,e,t){let n=Vo(o,e),[r,i]=et(n,e),s=n.eu[0]*(e.u+r/2)+n.es[0]*(e.v+i/2),a=n.eu[2]*(e.u+r/2)+n.es[2]*(e.v+i/2),l=t*Math.PI/180,c=[Math.cos(l),Math.sin(l)],d=[-Math.sin(l),Math.cos(l)],u=s*c[0]+a*c[1]-r/2,h=s*d[0]+a*d[1]-i/2,p=f=>Math.round(f*100)/100;return{u:p(u),v:p(h),rotation:(Math.round(t)%360+360)%360}}function Lt(o,e){let[t,n]=et(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}function gr(o,e,t){let n=t[0]*o.n[0]+t[1]*o.n[1]+t[2]*o.n[2];if(Math.abs(n)<1e-6)return null;let r=((o.o[0]-e[0])*o.n[0]+(o.o[1]-e[1])*o.n[1]+(o.o[2]-e[2])*o.n[2])/n;if(r<=0)return null;let i=[e[0]+t[0]*r-o.o[0],e[1]+t[1]*r-o.o[1],e[2]+t[2]*r-o.o[2]],s=i[0]*o.eu[0]+i[1]*o.eu[1]+i[2]*o.eu[2],a=i[0]*o.es[0]+i[1]*o.es[1]+i[2]*o.es[2];return{t:r,u:s,s:a}}function qo(o,e,t){if(o.unbounded)return!0;if(t<0||t>o.ls)return!1;let[n,r]=o.span(t);return e>=n&&e<=r}function Xo(o,e,t,n){for(let r of Se(o,e)){let i=r.corners.map(d=>{let u=[d[0]-o.o[0],d[1]-o.o[1],d[2]-o.o[2]];return[u[0]*o.eu[0]+u[1]*o.eu[1]+u[2]*o.eu[2],u[0]*o.es[0]+u[1]*o.es[1]+u[2]*o.es[2]]}),[s,a]=[Math.min(...i.map(d=>d[0])),Math.max(...i.map(d=>d[0]))],[l,c]=[Math.min(...i.map(d=>d[1])),Math.max(...i.map(d=>d[1]))];if(t>=s-.05&&t<=a+.05&&n>=l-.05&&n<=c+.05)return!0}return!1}var de=.03,cn=o=>o&&o!=="none"?o:null;function yr(o,e=t=>cn(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let r of n.furniture){let i=e(r);if(r.type==="meter")t.grid??=i,t.gridExport??=cn(r.export);else if(r.type==="inverter"&&i&&!t.solar.includes(i))t.solar.push(i);else if(r.type==="home_battery"){i&&!t.battery.includes(i)&&t.battery.push(i);let s=cn(r.charge);s&&!t.charge.includes(s)&&t.charge.push(s),(i||s)&&t.batteries.push({power:i,charge:s});let a=cn(r.soc);a&&!t.soc.includes(a)&&t.soc.push(a)}}return t}function vr(o){for(let e of o.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}function dn(o,e,t="power"){if(!e)return null;let n=o.entities?.[e]?.device_id;if(!n)return null;let r=Object.keys(o.states).filter(a=>a.startsWith("sensor.")&&o.entities?.[a]?.device_id===n&&o.states[a]?.attributes.device_class===t);if(r.length<=1)return r[0]??null;let i=r.filter(a=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(a)),s=e.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return i.find(a=>s&&a.includes(s))??i[0]??r[0]}function ns(o,e){let t={};for(let n of e.energy_sources??[])if(n.type==="grid"){let r=n.flow_from?.[0]?.stat_energy_from??n.flow_to?.[0]?.stat_energy_to,i=dn(o,r);i&&!t.grid&&(t.grid=i)}else if(n.type==="solar"){let r=dn(o,n.stat_energy_from);r&&!t.solar&&(t.solar=r)}else if(n.type==="battery"){let r=dn(o,n.stat_energy_from??n.stat_energy_to);r&&!t.battery&&(t.battery=r);let i=dn(o,n.stat_energy_from??n.stat_energy_to,"battery");i&&!t.battery_soc&&(t.battery_soc=i)}return t}var gl=.07;function Me(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),r=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-r:r}function rs(o,e,t,n=yr(e)){let r=e.energy,i=r.grid??n.grid,s=i?Me(o.states[i],r.grid_invert):null;if(!r.grid&&n.gridExport){let _=Math.max(0,Me(o.states[n.gridExport])??0);s=Math.max(0,s??0)-_}let a=r.solar?Me(o.states[r.solar]):null;if(!r.solar&&n.solar.length){let _=n.solar.map(g=>Me(o.states[g])).filter(g=>g!==null);a=_.length?_.reduce((g,y)=>g+y,0):null}let l=r.battery?Me(o.states[r.battery],r.battery_invert):null;if(!r.battery&&n.batteries.length){let _=n.batteries.map(g=>{if(g.charge){let y=g.power?Math.max(0,Me(o.states[g.power])??0):0,m=Math.max(0,Me(o.states[g.charge])??0);return y-m}return g.power?Me(o.states[g.power],r.battery_invert):null}).filter(g=>g!==null);l=_.length?_.reduce((g,y)=>g+y,0):null}let d=(r.battery_soc?[r.battery_soc]:n.soc).map(_=>Number(o.states[_]?.state)).filter(_=>Number.isFinite(_)),u=d.length?d.reduce((_,g)=>_+g,0)/d.length:NaN,h=r.tariff?o.states[r.tariff]:void 0,p=Number(h?.state),f=r.consumption?Me(o.states[r.consumption]):null;return f!==null?f=Math.max(0,f):s!==null||a!==null||l!==null?f=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):t.length&&(f=t.reduce((_,g)=>_+g.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:h&&Number.isFinite(p)?{value:p,unit:String(h.attributes.unit_of_measurement??"")}:null,consumption:f}}function rt(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function Oe(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function bl(o,e){let t=o.length,n=o.map((r,i)=>{let s=o[(i+1)%t],a=s[0]-r[0],l=s[1]-r[1],c=Math.hypot(a,l)||1,d=-l/c,u=a/c;return{p:[r[0]+d*e[i],r[1]+u*e[i]],d:[a/c,l/c],n:[d,u]}});return o.map((r,i)=>{let s=n[(i-1+t)%t],a=n[i],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[r[0]+a.n[0]*e[i],r[1]+a.n[1]*e[i]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function yl(o){return ee(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function kr(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:r}=ae(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let i of o.rooms){if(i.points.length<3)continue;let{pts:s,flipped:a}=yl(i),l=s.length,c=s.map((h,p)=>{let f=a?(l-2-p+l)%l:p,_=r.some(g=>!g.exterior&&g.sources.some(y=>y.room_id===i.id&&y.edge===f));return gl+(_?t/2:0)}),d=bl(s,c).map(h=>rt(n,h)),u=d.map((h,p)=>[h,d[(p+1)%l]]);for(let[h,p]of u)Oe(n,h,p);n.rings.set(i.id,u)}for(let i of r){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let s=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],a=Ge(n,i.roomLeft,s),l=Ge(n,i.roomRight,s);a!==null&&l!==null&&Oe(n,a,l)}return n}function Ge(o,e,t){let n=o.rings.get(e);if(!n)return null;let r=null;for(let s of n){let a=o.pos[s[0]],l=o.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],u=c*c+d*d||1,h=Math.min(1,Math.max(0,((t[0]-a[0])*c+(t[1]-a[1])*d)/u)),p=[a[0]+c*h,a[1]+d*h],f=Math.hypot(t[0]-p[0],t[1]-p[1]);(!r||f<r.d)&&(r={seg:s,q:p,d:f})}if(!r)return null;let i=rt(o,r.q);return Oe(o,i,r.seg[0]),Oe(o,i,r.seg[1]),i}function Dt(o,e){let t=o.rooms.filter(i=>i.points.length>=3),n=t.find(i=>B(e,i.points));if(n)return n;let r=null;for(let i of t)for(let s of i.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!r||a<r.d)&&(r={room:i,d:a})}return r?.room??null}function is(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),r=o.pos.map(()=>!1);for(t[e]=0;;){let i=-1;for(let s=0;s<t.length;s++)!r[s]&&t[s]<1/0&&(i<0||t[s]<t[i])&&(i=s);if(i<0)break;r[i]=!0;for(let{to:s,w:a}of o.adj[i])t[i]+a<t[s]-1e-9&&(t[s]=t[i]+a,n[s]=i)}return{dist:t,prev:n}}function Qo(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var Jo=new WeakMap;function vl(o,e){let t=vr(o),n=o.floors.find(d=>d.id===t.floor_id),r=[],{wall_exterior:i,wall_interior:s}=o.settings,a=new Map,l=new Map;e.forEach((d,u)=>l.set(d.floorId,[...l.get(d.floorId)??[],u]));let c=o.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let u=d.elevation>n.elevation,h=l.get(d.id),p=Qo(h,e);r.push({floorId:n.id,a:[t.x,de,t.z],b:[t.x,u?n.height:-.2,t.z],dist:0,members:h,kind:p});let f=Math.abs(d.elevation-n.elevation);r.push({floorId:d.id,a:[t.x,u?-.2:d.height,t.z],b:[t.x,de,t.z],dist:f,members:h,kind:p}),a.set(d.id,f+.25)}for(let d of c){let u=kr(d,i,s),h=Dt(d,[t.x,t.z]);if(!h)continue;let p=rt(u,[t.x,t.z]),f=Ge(u,h.id,[t.x,t.z]);if(f===null)continue;Oe(u,p,f);let _=[];for(let M of l.get(d.id)){let w=e[M],A=Dt(d,[w.x,w.z]);if(!A)continue;let P=rt(u,[w.x,w.z]),S=Ge(u,A.id,[w.x,w.z]);S!==null&&(Oe(u,P,S),_.push({node:P,member:M}))}let{dist:g,prev:y}=is(u,p),m=new Map;for(let M of _)if(Number.isFinite(g[M.node]))for(let w=M.node;y[w]>=0;w=y[w]){let A=y[w],P=`${A}>${w}`,S=m.get(P)??{a:A,b:w,members:[]};S.members.push(M.member),m.set(P,S)}let v=a.get(d.id)??0;for(let{a:M,b:w,members:A}of m.values()){let P=u.pos[M],S=u.pos[w],I=Qo(A,e);r.push({floorId:d.id,a:[P[0],de,P[1]],b:[S[0],de,S[1]],dist:v+g[M],members:A,kind:I})}}return r}function os({building:o,consumers:e,summary:t,battery:n,fieldPower:r,devicePower:i}){let s=vr(o);if(!s)return[];let a=o.floors.find(E=>E.id===s.floor_id);if(!a)return[];let l=E=>i?.get(E),c=br(o,"inverter"),d=br(o,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=E=>{let R=null;for(let L of c)L.floorId===E.floorId&&(!R||Math.hypot(L.x-E.x,L.z-E.z)<Math.hypot(R.x-E.x,R.z-E.z))&&(R=L);return R},h=E=>l(E.id)??(d.length===1?t.battery??0:0),p=new Map;for(let E of d){let R=u(E);R&&p.set(E.id,R)}let f=e.map(E=>({floorId:E.floorId,x:E.x,z:E.z,kind:E.wallbox?"wallbox":"consumer",power:E.power}));for(let E of d)!p.has(E.id)&&t.battery!==null&&f.push({floorId:E.floorId,x:E.x,z:E.z,kind:"battery",power:Math.abs(h(E))});let _=`${s.floor_id}:${s.x},${s.z}|${f.map(E=>`${E.floorId}:${E.x},${E.z}:${E.kind}`).join(";")}`,g=Jo.get(o);g||Jo.set(o,g=new Map);let y=g.get(_);y||(y=vl(o,f),g.clear(),g.set(_,y));let m=y.map(E=>({floorId:E.floorId,a:E.a,b:E.b,dist:E.dist,power:E.members.reduce((R,L)=>R+f[L].power,0),kind:E.kind})),v=t.grid!==null?wr(o):null,M=o.settings.roof.cables??[],w=E=>M.find(R=>R.id===E),A=(E,R)=>E.map(L=>({...L,key:R}));if(v){let E=t.grid>=0,R=w("grid"),L=R?un(o,R,[v.end[0],a.elevation+de,v.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[[v.end[0],de,v.end[1]],[v.wall[0],de,v.wall[1]],[s.x,de,s.z]],D=R?Ot(o,E?L:[...L].reverse(),Math.abs(t.grid),E?"grid":"export",a):as(a.id,E?L:[...L].reverse(),Math.abs(t.grid),E?"grid":"export",0);m.push(...A(D,"grid"))}if(t.battery!==null&&t.battery>0)for(let E of m)E.kind==="battery"&&([E.a,E.b]=[E.b,E.a]);let P=o.settings.roof.solar??[],S=o.settings.roof.strings??[],I=new Map;if(r&&P.length){let E=[...q(o),...ge(o)];for(let R of P){let L=r.get(R.id)??0,D=R.string?S.find(j=>j.id===R.string)?.inverter:null,O=D?c.find(j=>j.id===D)??null:null;if(!O&&c.length){let j=ie(o,R,E),X=j?Lt(j,R):[R.u,R.v];O=c.reduce((J,ue)=>!J||Math.hypot(ue.x-X[0],ue.z-X[1])<Math.hypot(J.x-X[0],J.z-X[1])?ue:J,null)}O&&I.set(O.id,(I.get(O.id)??0)+L);let W=O??{floorId:s.floor_id,x:s.x,z:s.z},H=O?1.1+O.h:1.5,V=w(`solar:${R.id}`),K=V?kl(o,R):null,U=o.floors.find(j=>j.id===W.floorId);V&&K&&U?m.push(...A(Ot(o,un(o,V,K,[W.x,U.elevation+H,W.z]),L,"solar",U),`solar:${R.id}`)):m.push(...A($l(o,R,L,W,H),`solar:${R.id}`))}}else t.solar!==null&&!c.length&&m.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,de,s.z+.08],dist:0,power:t.solar,kind:"solar"});for(let E of c){let R=1.1+E.h,L=d.filter(W=>p.get(W.id)===E),D=l(E.id);if(D===void 0){D=I.get(E.id)??(c.length===1?t.solar??0:0);for(let W of L)D+=h(W)}let O=o.floors.find(W=>W.id===E.floorId);if(t.solar!==null||t.battery!==null){let W=w(`inv:${E.id}`),H=W&&O?Ot(o,un(o,W,[E.x,O.elevation+R,E.z],[s.x,a.elevation+1.5,s.z]),Math.max(0,D),"inverter",O):ts(o,E,R,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,D),"inverter",0);m.push(...A(H,`inv:${E.id}`))}for(let W of L){let H=h(W);if(t.battery===null&&l(W.id)===void 0)continue;let V=W.variant==="wall"?.5+W.h:.9,K=w(`bat:${W.id}`),U=K&&O?Ot(o,un(o,K,[E.x,O.elevation+R-.1,E.z],[W.x,O.elevation+V,W.z]),Math.abs(H),"battery",O):ts(o,E,R-.1,W,V,Math.abs(H),"battery",0);m.push(...A(H<=0?U:U.map(j=>({...j,a:j.b,b:j.a})).reverse(),`bat:${W.id}`))}}return m}function wr(o){let e=vr(o),t=e?o.floors.find(p=>p.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:r}=o.settings,{walls:i}=ae(t.rooms,{exterior:n,interior:r},t.walls??[]),s=br(o,"grid_point")[0],a=i.filter(p=>p.exterior);if(s){let p=null;for(let _ of a){let g=_.b[0]-_.a[0],y=_.b[1]-_.a[1],m=s.x-e.x,v=s.z-e.z,M=m*y-v*g;if(Math.abs(M)<1e-9)continue;let w=((_.a[0]-e.x)*y-(_.a[1]-e.z)*g)/M,A=((_.a[0]-e.x)*v-(_.a[1]-e.z)*m)/M;if(w<=0||w>1||A<0||A>1||p&&w>=p.t)continue;let P=Math.hypot(g,y)||1;p={q:[e.x+m*w,e.z+v*w],out:[y/P,-g/P],t:w}}let f=p?[p.q[0]+p.out[0]*(n/2+.05),p.q[1]+p.out[1]*(n/2+.05)]:[e.x,e.z];return{floorId:t.id,wall:f,end:[s.x,s.z]}}let l=null;for(let p of a){let f=p.b[0]-p.a[0],_=p.b[1]-p.a[1],g=f*f+_*_||1,y=Math.min(1,Math.max(0,((e.x-p.a[0])*f+(e.z-p.a[1])*_)/g)),m=[p.a[0]+f*y,p.a[1]+_*y],v=Math.hypot(e.x-m[0],e.z-m[1]),M=Math.sqrt(g);(!l||v<l.d)&&(l={q:m,out:[_/M,-f/M],d:v})}if(!l)return null;let{q:c,out:d}=l,u=0;for(let p of o.floors)for(let f of p.outdoor??[]){let _=f.points.length;for(let g=0;g<_;g++){let y=f.points[g],m=f.points[(g+1)%_],v=m[0]-y[0],M=m[1]-y[1],w=d[0]*M-d[1]*v;if(Math.abs(w)<1e-9)continue;let A=((y[0]-c[0])*M-(y[1]-c[1])*v)/w,P=((y[0]-c[0])*d[1]-(y[1]-c[1])*d[0])/w;A>0&&P>=0&&P<=1&&(u=Math.max(u,Math.min(15,A)))}}let h=u>n+1?u:n+2.5;return{floorId:t.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*h,c[1]+d[1]*h]}}function br(o,e){let t=[];for(let n of o.floors)for(let r of n.furniture)r.type===e&&t.push({id:r.id,type:r.type,floorId:n.id,x:r.x,z:r.z,h:r.h,variant:r.variant??null});return t}var es=new WeakMap;function ss(o,e,t,n){let r=`${e.id}:${t.join(",")}>${n.join(",")}`,i=es.get(o);i||es.set(o,i=new Map);let s=i.get(r);if(s)return s;let{wall_exterior:a,wall_interior:l}=o.settings,c=kr(e,a,l),d=[t,n],u=Dt(e,t),h=Dt(e,n);if(u&&h){let p=rt(c,t),f=Ge(c,u.id,t),_=rt(c,n),g=Ge(c,h.id,n);if(f!==null&&g!==null){Oe(c,p,f),Oe(c,_,g);let{dist:y,prev:m}=is(c,p);if(Number.isFinite(y[_])){d.length=0;for(let v=_;v>=0;v=m[v])d.unshift(c.pos[v])}}}return i.set(r,d),d}function ts(o,e,t,n,r,i,s,a){let l=o.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let c=ss(o,l,[e.x,e.z],[n.x,n.z]),d=[[e.x,t,e.z],...c.map(u=>[u[0],de,u[1]]),[n.x,r,n.z]];return as(l.id,d,i,s,a)}function as(o,e,t,n,r){let i=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(i.push({floorId:o,a,b:l,dist:r,power:t,kind:n}),r+=c)}return i}function un(o,e,t,n){let i=(o.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(de,e.height);return[t,...e.points.map(s=>[s[0],i,s[1]]),n]}function kl(o,e){let t=ie(o,e,[...q(o),...ge(o)]);if(!t)return null;let[n,r]=et(t,e),i=e.u+n/2,s=t.unbounded?e.v+r/2:e.v;return[t.o[0]+t.eu[0]*i+t.es[0]*s,t.o[1]+t.eu[1]*i+t.es[1]*s,t.o[2]+t.eu[2]*i+t.es[2]*s]}function wl(o,e,t){let{wall_exterior:n,wall_interior:r}=o.settings,i=kr(e,n,r),s=Dt(e,t),a=s?Ge(i,s.id,t):null;return a===null?t:i.pos[a]}function Ot(o,e,t,n,r){let i=[...o.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=r;for(let u of i)c>=u.elevation-.01&&(d=u);return d},a=[],l=0;for(let c=0;c+1<e.length;c++){let d=e[c],u=e[c+1];if(Math.hypot(u[0]-d[0],u[1]-d[1],u[2]-d[2])<1e-4)continue;let p=[];if(Math.abs(u[1]-d[1])>.01){let f=Math.min(d[1],u[1]),_=Math.max(d[1],u[1]);for(let g of i)g.elevation>f+.01&&g.elevation<_-.01&&p.push(g.elevation);u[1]<d[1]&&p.reverse()}for(let f of[...p,u[1]]){let _=(f-d[1])/(u[1]-d[1]||1),g=Math.abs(u[1]-d[1])>.01?[d[0]+(u[0]-d[0])*_,f,d[2]+(u[2]-d[2])*_]:u,y=s((d[1]+g[1])/2),m=Math.hypot(g[0]-d[0],g[1]-d[1],g[2]-d[2]);m>1e-4&&a.push({floorId:y.id,a:[d[0],d[1]-y.elevation,d[2]],b:[g[0],g[1]-y.elevation,g[2]],dist:l,power:t,kind:n}),l+=m,d=g}}return a}function $l(o,e,t,n,r){let i=[...q(o),...ge(o)],s=ie(o,e,i),a=o.floors.find(g=>g.id===n.floorId);if(!s||!a)return[];let[l,c]=et(s,e),d=(g,y)=>[s.o[0]+s.eu[0]*g+s.es[0]*y,s.o[1]+s.eu[1]*g+s.es[1]*y,s.o[2]+s.eu[2]*g+s.es[2]*y],u=e.u+l/2,h=a.elevation+de,p=[],f;if(s.unbounded){let g=d(u,e.v+c/2);f=[g[0],h,g[2]],p.push(f)}else if(s.wall){let g=d(u,e.v);f=[g[0],h,g[2]],p.push(g,f)}else{let g=d(u,e.v),y=hr(o)??a,m=Math.max(a.elevation+.5,Math.min(g[1]-.25,y.elevation+y.height-.12));f=[g[0],m,g[2]],p.push(g)}let _=wl(o,a,[f[0],f[2]]);p.push([_[0],f[1],_[1]]),Math.abs(f[1]-h)>.05&&p.push([_[0],h,_[1]]);for(let g of ss(o,a,_,[n.x,n.z]).slice(1))p.push([g[0],h,g[1]]);return p.push([n.x,a.elevation+r,n.z]),Ot(o,p,t,"solar",a)}var ds=["kitchen_row","kitchen_l","kitchen_small","kitchen_medium","kitchen_large","bath","bath_small","bath_medium","bath_large","bedroom","bedroom_small","bedroom_medium","bedroom_large","living","living_small","living_medium","living_large","dining","office","kids","hall"],xl={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},kitchen_small:{rows:[{wall:"back",align:"center",items:[{type:"fridge"},{type:"sink",size:[.7,.62,.92]},{type:"stove"}]}],free:[{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},kitchen_medium:{rows:[{wall:"back",align:"center",items:[{type:"fridge"},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]}],free:[{type:"table_round",at:[.5,.72],rotation:0},{type:"lamp_pendant",at:[.5,.72],rotation:0}]},kitchen_large:{rows:[{wall:"back",align:"center",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.5,.62],rotation:0},{type:"bar_stool",at:[.42,.84],rotation:180},{type:"bar_stool",at:[.58,.84],rotation:180},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bath_small:{rows:[{wall:"back",align:"start",items:[{type:"vanity_60"},{type:"toilet_wall_hung"}]},{wall:"front",align:"end",items:[{type:"shower_corner_90"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bath_medium:{rows:[{wall:"back",align:"center",items:[{type:"vanity_80"},{type:"toilet_close_coupled"}]},{wall:"front",align:"start",items:[{type:"bathtub_builtin"}]},{wall:"left",align:"end",items:[{type:"washing_machine_cabinet"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bath_large:{rows:[{wall:"back",align:"center",items:[{type:"double_vanity_120"},{type:"bathroom_cabinet_tall"}]},{wall:"front",align:"center",items:[{type:"bathtub_freestanding"}]},{wall:"left",align:"center",items:[{type:"shower_walkin_140"}]}],free:[{type:"sauna",at:[.82,.72],rotation:180},{type:"lamp_panel",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},bedroom_small:{rows:[{wall:"back",align:"center",items:[{type:"bed_140"}]},{wall:"left",align:"end",items:[{type:"wardrobe_2door"}]}],free:[{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},bedroom_medium:{rows:[{wall:"back",align:"center",items:[{type:"nightstand_slim"},{type:"bed_160"},{type:"nightstand_slim"}]},{wall:"left",align:"center",items:[{type:"wardrobe_3door"}]}],free:[{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},bedroom_large:{rows:[{wall:"back",align:"center",items:[{type:"nightstand_drawer"},{type:"bed_180"},{type:"nightstand_drawer"}]},{wall:"left",align:"center",items:[{type:"wardrobe_6door"}]},{wall:"front",align:"end",items:[{type:"vanity_mirror"}]}],free:[{type:"bed_bench",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},living_small:{rows:[{wall:"back",align:"center",items:[{type:"tv_stand"}]}],free:[{type:"sofa_2",at:[.5,.76],rotation:180},{type:"coffee_table_round",at:[.5,.52],rotation:0},{type:"lamp_ceiling",at:[.5,.4],rotation:0}]},living_medium:{rows:[{wall:"back",align:"center",items:[{type:"lowboard_160"},{type:"tv_stand"}]}],free:[{type:"sofa_3",at:[.5,.76],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"armchair",at:[.16,.55],rotation:270},{type:"rug",at:[.5,.58],rotation:0},{type:"lamp_ceiling",at:[.5,.38],rotation:0}]},living_large:{rows:[{wall:"back",align:"center",items:[{type:"media_wall_tv"}]},{wall:"right",align:"center",items:[{type:"display_cabinet"}]}],free:[{type:"sofa_u",at:[.5,.72],rotation:180},{type:"nesting_tables",at:[.5,.5],rotation:0},{type:"rug_round",at:[.5,.58],rotation:0},{type:"lamp_floor",at:[.86,.82],rotation:0},{type:"plant_monstera",at:[.1,.16],rotation:0},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},Sl={back:0,right:90,front:180,left:270};function us(o,e,t,n=[]){let r=le(o.points),i=r.x1-r.x0,s=r.z1-r.z0,a=xl[e],l=[],c=(h,p,f,_,g)=>{let[y,m,v]=g??re[h];l.push({id:t(),type:h,x:ls(p),z:ls(f),rotation:_,w:y,d:m,h:v,variant:null,entity:null,power:null})},d=.02;for(let h of a.rows){let p=h.items.map(m=>({type:m.type,size:m.size??re[m.type]})),f=h.wall==="back"||h.wall==="front"?i:s,_=[],g=0;for(let m of p){if(g+m.size[0]>f-.1)break;_.push(m),g+=m.size[0]}let y=h.align==="start"?.05:h.align==="end"?f-g-.05:(f-g)/2;for(let m of _){let[v,M]=m.size,w=y+v/2,A=M/2+d;h.wall==="back"?c(m.type,r.x0+w,r.z0+A,0,m.size):h.wall==="front"?c(m.type,r.x1-w,r.z1-A,180,m.size):h.wall==="right"?c(m.type,r.x1-A,r.z0+w,90,m.size):c(m.type,r.x0+A,r.z1-w,Sl.left,m.size),y+=v}}for(let h of a.free){let[p,f]=h.size??re[h.type],_=Math.min(r.x1-p/2-.05,Math.max(r.x0+p/2+.05,r.x0+i*h.at[0])),g=Math.min(r.z1-f/2-.05,Math.max(r.z0+f/2+.05,r.z0+s*h.at[1]));c(h.type,_,g,h.rotation,h.size)}if(!n.length)return l;let u=n.map(cs);return l.filter(h=>{let p=cs(h);return!u.some(f=>p.x0<f.x1&&p.x1>f.x0&&p.z0<f.z1&&p.z1>f.z0)})}var ls=o=>Math.round(o*1e3)/1e3;function cs(o){let e=gt(o);return{x0:Math.min(...e.map(t=>t[0])),x1:Math.max(...e.map(t=>t[0])),z0:Math.min(...e.map(t=>t[1])),z1:Math.max(...e.map(t=>t[1]))}}function hs(o){if(!Ce(o)||o.points.length<3)return null;let e=ee(o.points)>=0?o.points:[...o.points].reverse(),t=o.open!==!1?e.length-1:-1,n=ci(e,t),r=[],i=[];if(o.railing!==!1)for(let s=0;s<e.length;s++){if(s===t)continue;let a=e[s],l=e[(s+1)%e.length];if(o.kind!=="canopy"||s!==n){r.push({a,b:l});continue}let c=Math.hypot(l[0]-a[0],l[1]-a[1]);if(c<.6){r.push({a,b:l});continue}let d=Math.min(2.4,Math.max(.9,c*.45),Math.max(.3,c-.3)),u=Math.max(0,(c-d)/(2*c)),h=Math.min(1,1-u);r.push({a,b:[a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u]},{a:[a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h],b:l})}if(o.kind==="canopy"){let s=o.column_size??.12;for(let a of e)i.push({at:a,size:s})}else{let s=e[n],a=e[(n+1)%e.length],l=Math.min(12,Math.max(0,Math.round(o.columns??2))),c=o.column_size??.32;for(let d=0;d<l;d++){let u=l===1?.5:d/(l-1);i.push({at:[s[0]+(a[0]-s[0])*u,s[1]+(a[1]-s[1])*u],size:c,baseSize:c*1.375})}}return{railings:r,columns:i}}var hn=Ee`
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
`,ps=Ee`
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
`;var $r=40,xr=class extends pe{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return t.every(l=>a.includes(l))},r=this.fixed.filter(s=>!e||n(s)),i=e?this.options.filter(n):this.options;return[...r,...i.slice(0,$r)]}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let t=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(t.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&t[this._cursor]&&this.choose(t[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,t=this._open?this.hits:[];return b`<div class="wrap">
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
            ${t.length?k:b`<li class="empty">–</li>`}
            ${t.map((n,r)=>b`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${r===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${i=>i.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?b`<small>${n.id}</small>`:k}
              </li>`)}
            ${this._query&&this.options.length>$r&&t.length>=$r?b`<li class="empty">…</li>`:k}
          </ul>`:k}
    </div>`}static styles=[hn,Ee`
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
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",xr);var Ml=new URL(import.meta.url),El=new URL("./neonplan3d-3d.js?v=3ffc61af0584",Ml).href,_s;function fs(){return _s??=import(El),_s}function it(o,e){if(!An(e))return Ae(o,`furn_${e}`);let t=ne(e);return t?Re(t,o?.language??navigator.language):Ae(o,"pack_missing_item")}var Sr=new Map;for(let[o,e]of Object.entries(mt))for(let t of e)Sr.set(t,[...Sr.get(t)??[],o]);var pn=Tn.map(o=>{let e=Sr.get(o)??[];return Object.freeze({id:o,nameKey:`furn_${o}`,size:re[o],groups:Object.freeze(e),library:e.length>0,renderer:o,symbol:o})}),zl=new Map(pn.map(o=>[o.id,o])),Mr=Object.freeze(Object.fromEntries(Object.keys(mt).map(o=>[o,Object.freeze(mt[o].filter(e=>zl.get(e)?.groups.includes(o)))])));var Er=[{key:"room",tools:["rect","polygon","covered"]},{key:"structure",tools:["wall","opening","hole","roof"]},{key:"layout",tools:["furniture","outdoor"]},{key:"energy",tools:["energy"]}];function ms(o,e){return o==="properties"&&e?"properties":"library"}function gs(o,e,t){return[e*o.scale+o.ox,t*o.scale+o.oy]}function bs(o,e,t){return[(e-o.ox)/o.scale,(t-o.oy)/o.scale]}function ys(o,e,t,n){let r=Math.max(8,Math.min(600,o.scale*e)),i=r/o.scale;return{scale:r,ox:t-(t-o.ox)*i,oy:n-(n-o.oy)*i}}var vs=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","solarmove","solarturn","cablept","holopt","bgmove","bgscale"]),ks=100,_n=10,z=o=>Math.round(o*1e3)/1e3,ws={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},Rr=class extends pe{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_furnQuery:{state:!0},_furnPane:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;cableCache=null;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._furnQuery="",this._furnPane="library",this._libOpen=new Set(["group:lights","group:living"]);try{let n=localStorage.getItem("neonplan3d.library");n&&(this._libOpen=new Set(JSON.parse(n)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door";let e=!1;try{e=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let n=Number(localStorage.getItem("neonplan3d.editorSplit"));n>=20&&n<=80&&(this._splitRatio=n/100)}catch{}this._backupBusy=!1,this._wall3d="cut",this._doc3d=this._doc,this._sideOpen=!1;let t=!0;try{t=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=t,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(e,t){return Ae(this.hass,e,t)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&ii(this.packs??[]),e.has("hass")&&this.hass&&!ko(this.hass.language)&&wo(this.hass.language).then(()=>this.requestUpdate()),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(t=>t.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null))}firstUpdated(){let e=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let t=e.currentTarget.parentElement,n=e.currentTarget;n.setPointerCapture(e.pointerId);let r=t.getBoundingClientRect(),i=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-r.left)/r.width))},s=()=>{n.removeEventListener("pointermove",i),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",i),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:t,x:n,z:r}=e.detail,i=this._doc.settings.wall_interior;this.change(s=>{for(let a of s.floors){let l=a.furniture.find(h=>h.id===t);if(!l)continue;let[c,d]=ir(a,l.x,l.z,n,r);Object.assign(l,{x:c,z:d});let u=tn(a,l,i);u&&Object.assign(l,u)}})}onDeviceMoved3d(e){let{id:t,x:n,z:r}=e.detail;this.change(i=>{for(let s of i.floors){let a=s.placements.find(d=>d.entity_id===t);if(!a)continue;let[l,c]=ir(s,a.x,a.z,n,r);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return k;let e=this.furnitureItem,t=this.device;if(e){let n=Nn(e),r=(i,s,a=.05)=>b`<label class="fp3d-3d-size" title=${this.t(`size_${i}`)}
        >${s}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${String(Math.round(e[i]*100)/100)}
          @change=${l=>{let c=parseFloat(l.target.value.replace(",","."));Number.isFinite(c)&&c>=a&&this.updateFurniture({[i]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return b`<div class="fp3d-3d-bar">
        <span>${it(this.hass,e.type)}</span>
        ${r("w",this.t("size_short_w"))} ${r("d",this.t("size_short_d"))} ${r("h",this.t("size_short_h"))}
        ${n?b`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((e.mount_y??Pn(this.floor,e))*100)/100)}
                @change=${i=>{let s=parseFloat(i.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.updateFurniture({mount_y:Math.round(s*1e3)/1e3})}}
              />
            </label>`:k}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(t){let n=N(t.entity_id),r=n==="light",i=n?Jt(n,this.floor?.height??2.5,r?t.mount??"ceiling":null):1;return b`<div class="fp3d-3d-bar">
        <span>${Q(this.hass,t.entity_id)}</span>
        ${r?b`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(s=>b`<option value=${s} ?selected=${s===(t.mount??"ceiling")}>${this.t(`lamp_${s}`)}</option>`)}
            </select>`:k}
        <label class="fp3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((t.y??i)*100)/100)}
            @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&a>=0&&this.updateDevice({y:Math.round(a*1e3)/1e3})}}
          />
        </label>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:(((t.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:((t.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",t.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteItem("device",t.entity_id)}>${this.t("delete")}</button>
      </div>`}return k}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};grab3dStart(e){let t=this._doc,n=q(t),r=null,i=(a,l,c,d,u=!1)=>{if(!c||u)return;let h=gr(c,e.o,e.d);!h||!Xo(c,d,h.u,h.s)||r&&r.t<=h.t||(r={id:a,win:l,t:h.t,du:h.u-d.u,ds:h.s-d.v})};if(this._tool==="energy")for(let a of t.settings.roof.solar??[])i(a.id,!1,ie(t,a,n),a,!!a.locked);if(this._tool==="roof")for(let a of t.settings.roof.windows??[])i(a.id,!0,n.find(l=>l.key===a.face)??null,nt(a),!!a.locked);if(!r)return!1;let s=r;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:t,moved:!1},s.win?this._roofWinId=s.id:this.selectSolar(s.id),!0}grab3dMove(e){let t=this.grab3d;if(!t)return;let n=t.base,r=t.win?n.settings.roof.windows?.find(p=>p.id===t.id):void 0,i=t.win?r?nt(r):void 0:n.settings.roof.solar?.find(p=>p.id===t.id);if(!i)return;let s=ie(n,i),a=s?.unbounded?[s]:t.win?q(n):[...q(n),...ge(n)],l=null;for(let p of a){let f=gr(p,e.o,e.d);f&&qo(p,f.u,f.s)&&(!l||f.t<l.t)&&(l={face:p,...f})}if(!l)return;let c=l.face,d=.05,u=p=>z(Math.round(p/d)*d),h=It(c,{...i,face:c.key,u:u(l.u-t.du),v:u(l.s-t.ds),tilt:c.flat?i.tilt??15:i.tilt});t.moved=!0,this.change(p=>{if(t.win){let _=p.settings.roof.windows?.find(g=>g.id===t.id);_&&Object.assign(_,{face:c.key,...h});return}let f=p.settings.roof.solar?.find(_=>_.id===t.id);f&&Object.assign(f,{face:c.key,...h},c.flat&&f.tilt==null?{tilt:15}:{})},t.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return b`<div class="fp3d-editor-3d">
      ${this.houseTool?k:b`<div class="fp3d-seg fp3d-3d-walls">
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
    </div>`}updated(){this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("fp3d-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&!this._images[e.image_id]&&!this.loadingImages.has(e.image_id)&&this.loadImage(e.image_id),this.furnitureItem?.pictures)for(let t of this.storedPictures())!this._images[t]&&!this.loadingImages.has(t)&&this.loadImage(t)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,t=this._doc){t&&(this.past.push(JSON.stringify(t)),this.past.length>ks&&this.past.shift(),this.future=[]),this._doc=e,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,t=this._doc,n=!0){let r=structuredClone(t),i=r.floors.find(s=>s.id===this._floorId);!i&&this._floorId||(e(r,i),this.setDoc(r,n?t:null))}undo(){let e=this.past.pop();e&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}redo(){let e=this.future.pop();e&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}restore(e){this._doc=e,e.floors.some(t=>t.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){return gs(this._view,e[0],e[1])}toWorld(e,t){return bs(this._view,e,t)}localPoint(e){let t=e.currentTarget,r=(t?.classList.contains("fp3d-plan")?t:this.renderRoot.querySelector("svg.fp3d-plan")).getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],t=e.length?le(e):{x0:0,z0:0,x1:10,z1:8},n=1.5,r=t.x1-t.x0+2*n,i=t.z1-t.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/r,this._size.h/i)));this._view={scale:s,ox:this._size.w/2-(t.x0+t.x1)/2*s,oy:this._size.h/2-(t.z0+t.z1)/2*s}}showPoint(e,t){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-e*n,oy:this._size.h/2-t*n}}zoomAt(e,t,n){this._view=ys(this._view,e,t,n)}snap(e,t,n=!1){if(this._guides={},n)return e;let r=_n/this._view.scale,i=this.floor?.rooms??[],s=[];for(let f of i)f.points.forEach((_,g)=>{t&&f.id===t.roomId&&(t.index===void 0||t.index===g)||s.push(_)});let a=null,l=r;for(let f of s){let _=Math.hypot(f[0]-e[0],f[1]-e[1]);_<l&&(l=_,a=f)}if(a)return this._guides={point:a},[a[0],a[1]];for(let f of i)if(!(t&&f.id===t.roomId))for(let _=0;_<f.points.length;_++){let g=f.points[_],y=f.points[(_+1)%f.points.length],m=y[0]-g[0],v=y[1]-g[1],M=m*m+v*v;if(M<1e-9)continue;let w=((e[0]-g[0])*m+(e[1]-g[1])*v)/M;if(w<=0||w>=1)continue;let A=[g[0]+w*m,g[1]+w*v],P=Math.hypot(A[0]-e[0],A[1]-e[1]),S=this._doc.settings.grid;Math.abs(v)<1e-9&&(A[0]=Math.min(Math.max(Math.round(A[0]/S)*S,Math.min(g[0],y[0])),Math.max(g[0],y[0]))),Math.abs(m)<1e-9&&(A[1]=Math.min(Math.max(Math.round(A[1]/S)*S,Math.min(g[1],y[1])),Math.max(g[1],y[1]))),P<l&&(l=P,a=A)}if(a)return this._guides={point:a},[z(a[0]),z(a[1])];let c=this._doc.settings.grid,d=[z(Math.round(e[0]/c)*c),z(Math.round(e[1]/c)*c)],u=r,h=r,p={};for(let f of s)Math.abs(f[0]-e[0])<u&&(u=Math.abs(f[0]-e[0]),d[0]=f[0],p.x=f[0]),Math.abs(f[1]-e[1])<h&&(h=Math.abs(f[1]-e[1]),d[1]=f[1],p.z=f[1]);return this._guides=p,d}onPointerDown(e){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let t=this.localPoint(e),n=e.target;this.pressStart=t,this.pressTimer=window.setTimeout(()=>{let r=this.drag;r&&"moved"in r&&r.moved||(this.drag=null,this.openContext(n,t))},550)}}guardFixed(e){let t=this.drag;if(!t)return;let n=null;t.kind==="vertex"||t.kind==="room"?n=["room",t.roomId]:t.kind==="device"||t.kind==="aim"?n=["device",t.entityId]:t.kind==="opening"?n=["opening",t.id]:t.kind==="furniture"||t.kind==="rotate"||t.kind==="resize"?n=["furniture",t.id]:t.kind==="wallmove"?n=["wall",t.id]:t.kind==="outdoor"&&(n=["outdoor",t.id]),!(!n||!this.isFixedItem(...n))&&("moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){this.drag&&vs.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let r=this.toWorld(...n),i=e.target;if(this._bgEdit&&this.isAdmin&&this.floor?.background){let v=this.floor.background;if(i.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(i.closest("[data-bg]")){this.drag={kind:"bgmove",start:r,bx:v.x,bz:v.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let v=this.snap(r,void 0,e.altKey);this.drag={kind:"freewall",start:v,end:v};return}if(this._tool==="roof"||this._tool==="energy"){let v=i.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),M=i.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex"),w=i.closest("[data-roof]")?.getAttribute("data-roof"),A=this._tool==="energy"?i.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(A){this._solarId=null,this.selectItem("furniture",A),this.drag=this.isAdmin?{kind:"furniture",id:A,start:r,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&i.closest("[data-holo-pt]")){this.drag=this.isAdmin?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let R=i.closest("[data-cable-pt]")?.getAttribute("data-cable-pt"),L=W=>!!this._doc.settings.roof.cables?.find(H=>H.id===W)?.locked;if(R&&this.isAdmin&&!L(R.slice(0,R.lastIndexOf(":")))){let W=R.lastIndexOf(":"),H=R.slice(0,W),V=Number(R.slice(W+1));if(e.detail>=2){this.change(K=>{let U=K.settings.roof.cables?.find(j=>j.id===H);U&&U.points.length>1&&U.points.splice(V,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:H,index:V,base:this._doc,moved:!1};return}let D=i.closest("[data-cable-line]")?.getAttribute("data-cable-line");if(D&&this.isAdmin&&!L(D)){let W=Number(i.closest("[data-cable-line]")?.getAttribute("data-cable-seg")??0),H=this._doc;this.change(V=>{let K=V.settings.roof.cables?.find(U=>U.id===D);K&&K.points.splice(W,0,[z(r[0]),z(r[1])])}),this.drag={kind:"cablept",id:D,index:W,base:H,moved:!0};return}let O=i.closest("[data-cable]")?.getAttribute("data-cable");if(O){if(this._cableId=O,this.isAdmin&&this._floorId&&!this._doc.settings.roof.cables?.some(W=>W.id===O)){let W=this._doc;this.layCable(O);let H=this._doc.settings.roof.cables?.find(K=>K.id===O),V=this.cableSegments().filter(K=>K.key===O);if(H&&V.length){let K=[[V[0].a[0],V[0].a[2]],...H.points,[V[V.length-1].b[0],V[V.length-1].b[2]]],U=0,j=1/0;for(let X=0;X+1<K.length;X++){let J=Fl(r,K[X],K[X+1]);J<j&&(j=J,U=X)}this.change(X=>{let J=X.settings.roof.cables?.find(ue=>ue.id===O);J&&J.points.splice(U,0,[z(r[0]),z(r[1])])}),this.drag={kind:"cablept",id:O,index:U,base:W,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let P=this._tool==="energy"?i.closest("[data-solar]")?.getAttribute("data-solar"):null,S=this._tool==="energy"?i.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(S&&this.isAdmin){this.drag={kind:"solarturn",id:S,base:this._doc,moved:!1};return}if(P){let R=i.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&P===this._solarId&&R&&this.isAdmin){this.toggleSolarCell(R),this.drag={kind:"pan",last:n};return}P!==this._solarId&&(this._solarPick=!1),this._solarId=P,this._roofId=null;let L=this._doc.settings.roof.solar?.find(H=>H.id===P),D=L?ie(this._doc,L)??void 0:void 0,O=D?this.faceHit(D,r):null,W=L&&O?{du:O.u-L.u,ds:Number.isNaN(O.s)?0:O.s-L.v}:null;this.drag=this.isAdmin&&!L?.locked?{kind:"solarmove",id:P,start:r,startScreen:n,base:this._doc,moved:!1,grab:W}:{kind:"pan",last:n};return}let I=this._tool==="roof"?i.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(I){this._roofWinId=I,this._roofId=null;let R=this._doc.settings.roof.windows?.find(W=>W.id===I),L=R?q(this._doc).find(W=>W.key===R.face):void 0,D=L?an(L,r):null,O=R&&D?{du:D.u-R.u,ds:D.s-R.v}:null;this.drag=this.isAdmin&&!R?.locked?{kind:"solarmove",id:I,start:r,startScreen:n,base:this._doc,moved:!1,grab:O,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let E=this._tool==="energy"?i.closest(".fp3d-energy-item")?.getAttribute("data-furniture"):null;if(E){this._solarId=null,this.selectItem("furniture",E),this.drag=this.isAdmin?{kind:"furniture",id:E,start:r,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(M&&this.isAdmin){let[R,L]=M.split(":");this.drag={kind:"roofvertex",id:R,index:Number(L),base:this._doc,moved:!1}}else if(v&&this.isAdmin){let[R,L,D]=v.split(":");this.drag={kind:"roofcorner",id:R,corner:[L==="1"?1:0,D==="1"?1:0],base:this._doc,moved:!1}}else if(w){let R=this.roofFixed(this._doc.settings.roof.sections?.find(L=>L.id===w));R&&this._roofId===w&&(this._fixedHint=!0),this._roofId=w,this.drag=this.isAdmin&&!R?{kind:"roofmove",id:w,start:r,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let R=this.snap(r,void 0,e.altKey);this.drag={kind:"rect",start:R,end:R,roof:!0}}else this.drag={kind:"pan",last:n};return}if(this._tool==="settings"){this.drag={kind:"pan",last:n};return}if(this._tool==="rect"||this._tool==="covered"||this._tool==="outdoor"||this._tool==="hole"){let v=this.snap(r,void 0,e.altKey);this.drag={kind:"rect",start:v,end:v,outdoor:this._tool==="outdoor",covered:this._tool==="covered",hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}let s=i.closest("[data-device]");if(s&&this.isAdmin){this.drag={kind:"device",entityId:s.getAttribute("data-device"),start:r,startScreen:n,base:this._doc,moved:!1};return}let a=i.closest("[data-opening]");if(a){let v=a.getAttribute("data-opening");this.selectItem("opening",v),this.drag=this.isAdmin?{kind:"opening",id:v,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let l=i.closest("[data-resize]");if(l&&this.isAdmin){let[v,M,w]=l.getAttribute("data-resize").split(":"),A=[M==="1"?1:-1,w==="1"?1:-1],P=this.floor.furniture.find(I=>I.id===v);if(!P)return;let S=Cn(P,A);this.drag={kind:"resize",id:v,corner:A,grabOffset:[r[0]-S[0],r[1]-S[1]],base:this._doc,moved:!1};return}let c=i.closest("[data-rotate]");if(c&&this.isAdmin){let v=c.getAttribute("data-rotate"),M=this.floor.furniture.find(w=>w.id===v);if(!M)return;this.drag={kind:"rotate",id:v,angleOffset:M.rotation-Vn(M,r),base:this._doc,moved:!1};return}let d=i.closest("[data-aim]");if(d&&this.isAdmin){this.drag={kind:"aim",entityId:d.getAttribute("data-aim"),base:this._doc,moved:!1};return}let u=i.closest("[data-furniture]");if(u&&!i.closest("[data-vertex], [data-mid]")){let v=u.getAttribute("data-furniture");this.selectItem("furniture",v),this.drag=this.isAdmin?{kind:"furniture",id:v,start:r,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let h=i.closest("[data-vertex]"),p=i.closest("[data-mid]");if(h&&this.room&&this.isAdmin){this._vertex=Number(h.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(p&&this.room&&this.isAdmin){let v=Number(p.getAttribute("data-mid")),M=this.room.points,w=M[v],A=M[(v+1)%M.length],P=[z((w[0]+A[0])/2),z((w[1]+A[1])/2)],S=this._doc,I=this.room.id;this.change((E,R)=>{let L=R.rooms.find(O=>O.id===I);L.points.splice(v+1,0,P),L.wall_heights&&L.wall_heights.splice(v+1,0,L.wall_heights[v]??null),L.wall_thickness&&L.wall_thickness.splice(v+1,0,L.wall_thickness[v]??null);let D=Math.hypot(P[0]-w[0],P[1]-w[1]);for(let O of R.openings)O.room_id!==I||O.wall||(O.edge>v?O.edge+=1:O.edge===v&&O.offset>D&&(O.edge=v+1,O.offset=z(O.offset-D)))},S,!1),this._vertex=v+1,this.drag={kind:"vertex",roomId:I,index:v+1,base:S,moved:!0};return}let f=i.closest("[data-wall-end]");if(f&&this.isAdmin){let[v,M]=f.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:v,end:M,start:r,startScreen:n,base:this._doc,moved:!1};return}let _=i.closest("[data-free-wall]");if(_){let v=_.getAttribute("data-free-wall");this.selectItem("wall",v),this.drag=this.isAdmin?{kind:"wallmove",id:v,end:null,start:r,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let g=i.closest("[data-out-vertex]");if(g&&this.isAdmin){let[v,M]=g.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:v,index:Number(M),base:this._doc,moved:!1};return}let y=i.closest("[data-outdoor]");if(y&&!i.closest("[data-room]")&&!this.roomAt(r)){let v=y.getAttribute("data-outdoor");this.selectItem("outdoor",v),this.drag=this.isAdmin?{kind:"outdoor",id:v,start:r,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let m=i.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(r);if(m){m!==this._roomId&&(this._vertex=null),this.selectItem("room",m),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:m,start:r,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(e){if(this.pressStart){let i=this.localPoint(e);Math.hypot(i[0]-this.pressStart[0],i[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let t=this.localPoint(e);if(this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.pinch){let i=this.pinchState();i&&(this.zoomAt(i.dist/Math.max(1,this.pinch.dist),...i.mid),this._view={...this._view,ox:this._view.ox+i.mid[0]-this.pinch.mid[0],oy:this._view.oy+i.mid[1]-this.pinch.mid[1]},this.pinch=i);return}let n=this.toWorld(...t),r=this.drag;if(!r){this._tool!=="select"&&this._tool!=="furniture"&&this._tool!=="settings"&&this.floor&&(this._cursor=this.snap(n,void 0,e.altKey));return}switch(r.kind){case"pan":this._view={...this._view,ox:this._view.ox+t[0]-r.last[0],oy:this._view.oy+t[1]-r.last[1]},r.last=t;break;case"tap":(r.panning||Math.hypot(t[0]-r.startScreen[0],t[1]-r.startScreen[1])>6)&&(r.panning=!0,this._view={...this._view,ox:this._view.ox+t[0]-r.last[0],oy:this._view.oy+t[1]-r.last[1]}),r.last=t;break;case"rect":r.end=this.snap(n,void 0,e.altKey),this.requestUpdate();break;case"freewall":{let i=this.snap(n,void 0,e.altKey);e.shiftKey&&(i=Math.abs(i[0]-r.start[0])>Math.abs(i[1]-r.start[1])?[i[0],r.start[1]]:[r.start[0],i[1]]),r.end=i,this.requestUpdate();break}case"wallmove":{if(!r.moved&&Math.hypot(t[0]-r.startScreen[0],t[1]-r.startScreen[1])<5)return;r.moved=!0;let i=(r.base.floors.find(a=>a.id===this._floorId)?.walls??[]).find(a=>a.id===r.id);if(!i)return;let s;if(r.end){let a=this.snap(n,void 0,e.altKey);s=r.end==="a"?{a,b:i.b}:{a:i.a,b:a}}else{let a=e.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-r.start[0])/a)*a,c=Math.round((n[1]-r.start[1])/a)*a;s={a:[z(i.a[0]+l),z(i.a[1]+c)],b:[z(i.b[0]+l),z(i.b[1]+c)]}}this.change((a,l)=>Object.assign((l.walls??[]).find(c=>c.id===r.id),s),r.base,!1);break}case"vertex":{let i=this.snap(n,{roomId:r.roomId,index:r.index},e.altKey);r.moved=!0,this.change((s,a)=>{a.rooms.find(l=>l.id===r.roomId).points[r.index]=i},r.base,!1);break}case"room":{if(!r.moved&&Math.hypot(t[0]-r.startScreen[0],t[1]-r.startScreen[1])<5)return;r.moved=!0;let i=r.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===r.roomId);if(!i)return;let s=this.roomDelta(i,[n[0]-r.start[0],n[1]-r.start[1]],e.altKey),a=r.base.floors.find(c=>c.id===this._floorId),l=new Set(a.placements.filter(c=>B([c.x,c.z],i.points)).map(c=>c.entity_id));this.change((c,d)=>{let u=d.rooms.find(h=>h.id===r.roomId);u.points=i.points.map(([h,p])=>[z(h+s[0]),z(p+s[1])]),d.placements=a.placements.map(h=>l.has(h.entity_id)?{...h,x:z(h.x+s[0]),z:z(h.z+s[1])}:h)},r.base,!1);break}case"roofmove":{if(!r.moved&&Math.hypot(t[0]-r.startScreen[0],t[1]-r.startScreen[1])<5)return;r.moved=!0;let i=e.altKey?.01:this._doc.settings.grid,s=z(Math.round((n[0]-r.start[0])/i)*i),a=z(Math.round((n[1]-r.start[1])/i)*i),l=r.base.settings.roof.sections?.find(c=>c.id===r.id);if(!l)return;this.change(c=>{let d=c.settings.roof.sections?.find(u=>u.id===r.id);d&&(Object.assign(d,{x0:z(l.x0+s),x1:z(l.x1+s),z0:z(l.z0+a),z1:z(l.z1+a)}),l.points&&(d.points=l.points.map(([u,h])=>[z(u+s),z(h+a)])))},r.base,!1);break}case"solarturn":{r.moved=!0;let i=r.base.settings.roof.solar?.find(h=>h.id===r.id),s=i?ie(r.base,i):null;if(!i||!s)return;let[a,l]=Lt(s,i),c=Math.atan2(n[0]-a,-(n[1]-l))*180/Math.PI,d=e.altKey?1:15;c=Math.round(c/d)*d;let u=Tt(r.base,i,c);this.change(h=>{let p=h.settings.roof.solar?.find(f=>f.id===r.id);p&&Object.assign(p,u)},r.base,!1);break}case"solarmove":{if(!r.moved&&Math.hypot(t[0]-r.startScreen[0],t[1]-r.startScreen[1])<5)return;r.moved=!0;let i=r.win?r.base.settings.roof.windows?.find(g=>g.id===r.id):void 0,s=r.win?i?nt(i):void 0:r.base.settings.roof.solar?.find(g=>g.id===r.id),a=r.win?q(r.base):[...q(r.base),...this._floorId?ge(r.base,this._floorId):[]],l=s?ie(r.base,s,a):null;if(!s||!l)return;let c=e.altKey?.01:.05,d=g=>z(Math.round(g/c)*c),u=l.unbounded?null:Uo(a,n),h=l,p,f;if(u&&r.grab)h=u.face,p=d(u.u-r.grab.du),f=Number.isNaN(u.s)?u.face.key===s.face?s.v:Math.max(0,u.face.ls-1.5):d(u.s-r.grab.ds);else{let g=n[0]-r.start[0],y=n[1]-r.start[1],m=[l.es[0],l.es[2]],v=m[0]*m[0]+m[1]*m[1]||1;p=d(s.u+g*l.eu[0]+y*l.eu[2]),f=d(s.v+(g*m[0]+y*m[1])/v)}let _=It(h,{...s,face:h.key,u:p,v:f,tilt:h.flat?s.tilt??15:s.tilt});this.change(g=>{if(r.win){let m=g.settings.roof.windows?.find(v=>v.id===r.id);m&&Object.assign(m,{face:h.key,..._});return}let y=g.settings.roof.solar?.find(m=>m.id===r.id);y&&Object.assign(y,{face:h.key,..._},h.flat&&y.tilt==null?{tilt:15}:{})},r.base,!1);break}case"outvertex":{r.moved=!0;let i=this.snap(n,void 0,e.altKey),s=r.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===r.id);if(!s)return;let a=Xt(s.points);this.change((l,c)=>{let d=c.outdoor.find(f=>f.id===r.id);if(!d)return;let u=s.points.map(f=>[...f]),h=r.index,p=s.points[h];u[h]=[z(i[0]),z(i[1])],a&&s.points.forEach((f,_)=>{_!==h&&(Math.abs(f[0]-p[0])<1e-6&&(u[_][0]=z(i[0])),Math.abs(f[1]-p[1])<1e-6&&(u[_][1]=z(i[1])))}),d.points=u},r.base,!1);break}case"cablept":{r.moved=!0;let i=this.snap(n,void 0,e.altKey);this.change(s=>{let a=s.settings.roof.cables?.find(l=>l.id===r.id);a&&a.points[r.index]&&(a.points[r.index]=[z(i[0]),z(i[1])])},r.base,!1);break}case"holopt":{r.moved=!0;let i=this.snap(n,void 0,e.altKey);this.change(s=>s.settings.roof.hologram={...s.settings.roof.hologram??jt,place:"free",x:z(i[0]),z:z(i[1])},r.base,!1);break}case"bgmove":{r.moved=!0;let i=n[0]-r.start[0],s=n[1]-r.start[1];this.change((a,l)=>{l.background&&(l.background.x=z(r.bx+i),l.background.z=z(r.bz+s))},r.base,!1);break}case"bgscale":{r.moved=!0;let i=this.floor?.background,s=i?this._images[i.image_id]:void 0;if(!i||!s)break;let[a]=this.bgLocal(i,n,s.aspect),l=Math.max(.5,z(a));this.change((c,d)=>{d.background&&(d.background.width=l)},r.base,!1);break}case"roofvertex":{r.moved=!0;let i=this.snap(n,void 0,e.altKey);this.change(s=>{let a=s.settings.roof.sections?.find(l=>l.id===r.id);!a?.points||r.index>=a.points.length||(a.points[r.index]=[z(i[0]),z(i[1])],Object.assign(a,lr(a.points)))},r.base,!1);break}case"roofcorner":{r.moved=!0;let i=this.snap(n,void 0,e.altKey);this.change(s=>{let a=s.settings.roof.sections?.find(l=>l.id===r.id);a&&(r.corner[0]?a.x1=z(i[0]):a.x0=z(i[0]),r.corner[1]?a.z1=z(i[1]):a.z0=z(i[1]))},r.base,!1);break}case"opening":{if(!r.moved&&Math.hypot(t[0]-r.startScreen[0],t[1]-r.startScreen[1])<5)return;r.moved=!0;let i=r.base.floors.find(c=>c.id===this._floorId),s=i?.openings.find(c=>c.id===r.id),a=s&&i?Je(s,i.rooms,i.walls??[]):null;if(!s||!a)return;let l=this.offsetOnEdge(a.room,a.edge,n,s.width,e.altKey);this.change((c,d)=>Object.assign(d.openings.find(u=>u.id===r.id),{offset:l}),r.base,!1);break}case"furniture":{if(!r.moved&&Math.hypot(t[0]-r.startScreen[0],t[1]-r.startScreen[1])<5)return;r.moved=!0;let i=r.base.floors.find(u=>u.id===this._floorId)?.furniture.find(u=>u.id===r.id);if(!i)return;let s=e.altKey?.01:this._doc.settings.grid,a=z(Math.round((i.x+n[0]-r.start[0])/s)*s),l=z(Math.round((i.z+n[1]-r.start[1])/s)*s),c=i.rotation,d=e.altKey?null:this.snapToWall({...i,x:a,z:l});d&&({x:a,z:l,rotation:c}=d),this.change((u,h)=>Object.assign(h.furniture.find(p=>p.id===r.id),{x:a,z:l,rotation:c}),r.base,!1);break}case"outdoor":{if(!r.moved&&Math.hypot(t[0]-r.startScreen[0],t[1]-r.startScreen[1])<5)return;r.moved=!0;let i=r.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===r.id);if(!i)return;let s=e.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-r.start[0])/s)*s,l=Math.round((n[1]-r.start[1])/s)*s;this.change((c,d)=>d.outdoor.find(u=>u.id===r.id).points=i.points.map(([u,h])=>[z(u+a),z(h+l)]),r.base,!1);break}case"resize":{r.moved=!0;let i=r.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===r.id);if(!i)return;let s=[n[0]-r.grabOffset[0],n[1]-r.grabOffset[1]],a=ki(i,r.corner,s,e.altKey?.01:this._doc.settings.grid);this.change((l,c)=>Object.assign(c.furniture.find(d=>d.id===r.id),a),r.base,!1);break}case"rotate":{r.moved=!0;let i=r.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===r.id);if(!i)return;let s=Vn(i,n)+r.angleOffset,a=e.altKey?1:15;s=(Math.round(s/a)*a%360+360)%360,this.change((l,c)=>Object.assign(c.furniture.find(d=>d.id===r.id),{rotation:s}),r.base,!1);break}case"aim":{r.moved=!0;let i=r.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===r.entityId);if(!i)return;let s=Math.atan2(-(n[0]-i.x),n[1]-i.z)*180/Math.PI,a=e.altKey?1:5;s=(Math.round(s/a)*a%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-i.x,n[1]-i.z)*10)/10));this.change((c,d)=>Object.assign(d.placements.find(u=>u.entity_id===r.entityId),{rotation:s,reach:l}),r.base,!1);break}case"device":{if(!r.moved&&Math.hypot(t[0]-r.startScreen[0],t[1]-r.startScreen[1])<5)return;r.moved=!0;let i=r.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===r.entityId);if(!i)return;let s=e.altKey?.01:this._doc.settings.grid,a=z(Math.round((i.x+n[0]-r.start[0])/s)*s),l=z(Math.round((i.z+n[1]-r.start[1])/s)*s);this.change((c,d)=>Object.assign(d.placements.find(u=>u.entity_id===r.entityId),{x:a,z:l}),r.base,!1);break}}}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let t=this.drag;if(this.drag=null,!t||e.type==="pointercancel"){t&&vs.has(t.kind)&&"moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base);return}let n=this.localPoint(e);switch(t.kind){case"freewall":{Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1])>=.2&&this.addFreeWall(t.start,t.end),this._guides={};break}case"wallmove":t.moved&&this.pushHistory(t.base),this._guides={};break;case"rect":{let[r,i]=t.start,[s,a]=t.end;if(Math.abs(s-r)>=.2&&Math.abs(a-i)>=.2){let l=[Math.min(r,s),Math.min(i,a)],c=[Math.max(r,s),Math.max(i,a)],d=[l,[c[0],l[1]],c,[l[0],c[1]]];t.outdoor?this.addOutdoor(d):t.covered?this.addRoom([l,[l[0],c[1]],c,[c[0],l[1]]],"veranda"):t.hole?this.addHole(l,c):t.roof?this.addRoofSection(l,c):this.addRoom(d)}this._guides={};break}case"tap":if(t.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,e.altKey),n);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"holopt":case"bgmove":case"bgscale":t.moved&&this.pushHistory(t.base);break;case"device":t.moved?this.pushHistory(t.base):this.selectItem("device",t.entityId);break;case"vertex":case"room":t.moved&&this.pushHistory(t.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[t,n]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),t,n)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t[0]-n[0],t[1]-n[1]),mid:[(t[0]+n[0])/2,(t[1]+n[1])/2]}}pushHistory(e){this.past.push(JSON.stringify(e)),this.past.length>ks&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,t,n){if(n)return t;let r=this._doc.settings.grid,i=[Math.round(t[0]/r)*r,Math.round(t[1]/r)*r],a=_n/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let c of l.points)for(let d of e.points){let u=Math.hypot(d[0]+t[0]-c[0],d[1]+t[1]-c[1]);u<a&&(a=u,i=[c[0]-d[0],c[1]-d[1]],this._guides={point:c})}return i}roomAt(e){return(this.floor?.rooms??[]).filter(r=>B(e,r.points)).sort((r,i)=>_e(r.points)-_e(i.points))[0]?.id??null}addDraftPoint(e,t){let n=this._draft;if(n.length>=3){let[i,s]=this.toScreen(n[0]);if(Math.hypot(i-t[0],s-t[1])<14){this.closeDraft();return}}let r=n[n.length-1];r&&Math.hypot(r[0]-e[0],r[1]-e[1])<1e-6||(this._draft=[...n,e])}closeDraft(){this._draft.length>=3&&_e(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let t=this._draft[this._draft.length-1];if(!t||!(this._measureLen>0))return;let n=Xe(t,this._measureLen,e),r=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-r[0],n[1]-r[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let e=this._draft[0]??[0,0],[t,n]=this._rectSize;t>.1&&n>.1&&(this.addRoom([e,Xe(e,t,"right"),Xe(Xe(e,t,"right"),n,"down"),Xe(e,n,"down")]),this._draft=[])}renderMeasureForm(){let e=this._draft,t=e[0],n=e[e.length-1],r=t&&n&&e.length>1?Math.hypot(n[0]-t[0],n[1]-t[1]):0,i=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=a=>Y(this.hass,a,2);return b`<section>
      <h3>${this.t("measure")}</h3>
      ${t?b`<p class="fp3d-sub">${this.t("measure_from",{x:s(t[0]),z:s(t[1])})}</p>
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
                ${i.map(([a,l])=>b`<button class="fp3d-btn fp3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${e.length>1?b`<ol class="fp3d-measure-list">
                  ${e.slice(1).map((a,l)=>b`<li>${s(Math.hypot(a[0]-e[l][0],a[1]-e[l][1]))} m</li>`)}
                </ol>`:k}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${e.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${e.length<2} @click=${()=>this._draft=e.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${e.length>=3?b`<p class="fp3d-sub">${this.t("measure_gap",{gap:s(r)})}</p>`:k}`:b`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.num(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.num(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(e,t){if(!this.floor)return;let n={id:G("wall"),a:[z(e[0]),z(e[1])],b:[z(t[0]),z(t[1])],thickness:null};this.change((r,i)=>i.walls=[...i.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(e){let t=this._wallId;t&&this.change((n,r)=>Object.assign((r.walls??[]).find(i=>i.id===t),e))}deleteFreeWall(){let e=this._wallId;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((t,n)=>{n.walls=(n.walls??[]).filter(r=>r.id!==e),n.openings=n.openings.filter(r=>r.wall!==e)}),this._wallId=null)}renderFreeWalls(e){return T`<g>${(e.walls??[]).map(t=>{let[n,r]=this.toScreen(t.a),[i,s]=this.toScreen(t.b),a=t.id===this._wallId;return T`<g data-free-wall=${t.id} class=${`fp3d-free-wall${a?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${r} x2=${i} y2=${s} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${r} x2=${i} y2=${s} />
      </g>
      ${a&&this.isAdmin&&!On(t,!0,this._doc.settings)?T`<g class="fp3d-vertex" data-wall-end=${`${t.id}:a`}><circle cx=${n} cy=${r} r="16" class="fp3d-hit" /><circle cx=${n} cy=${r} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${t.id}:b`}><circle cx=${i} cy=${s} r="16" class="fp3d-hit" /><circle cx=${i} cy=${s} r="6" /></g>`:k}`})}</g>`}renderFreeWallForm(e){let t=this.isAdmin,n=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]),r=i=>{let a=Math.max(.1,i)/(n||1);this.updateFreeWall({b:[z(e.a[0]+(e.b[0]-e.a[0])*a),z(e.a[1]+(e.b[1]-e.a[1])*a)]})};return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",e.id)}</div>
      <div class="fp3d-form">
        ${this.num(this.t("wall_length"),n,r,.01,.1)}
        ${this.num(this.t("wall_thickness"),e.thickness??this._doc.settings.wall_interior,i=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,i))}),.01,.02)}
        ${this.num(this.t("wall_height"),e.height??this.floor?.height??2.5,i=>this.updateFreeWall({height:i>=(this.floor?.height??2.5)-.005?null:Math.max(.05,i)}),.05,.05)}
      </div>
      ${t?b`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:k}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(e,t){if(!this.floor)return;let n={id:G("hole"),type:"stairwell",x:z((e[0]+t[0])/2),z:z((e[1]+t[1])/2),w:z(t[0]-e[0]),d:z(t[1]-e[1]),h:.02,rotation:0,variant:null};this.change((r,i)=>i.furniture.push(n)),this.selectItem("furniture",n.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let t={id:G("outdoor"),type:"lawn",points:e.map(([n,r])=>[z(n),z(r)])};this.change((n,r)=>r.outdoor.push(t)),this.selectItem("outdoor",t.id),this._tool="select"}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(e){let t=this._outdoorId;this.change((n,r)=>Object.assign(r.outdoor.find(i=>i.id===t),e))}setOutdoorPoint(e,t,n){let r=this.outdoorArea;if(!r||!Number.isFinite(n))return;let i=r.points.map(s=>[...s]);i[e][t]=z(n),this.updateOutdoor({points:i})}insertOutdoorPoint(e){let t=this.outdoorArea;if(!t||!this.isAdmin||t.points.length>=200)return;let n=t.points.map(s=>[...s]),r=n[e],i=n[(e+1)%n.length];n.splice(e+1,0,[z((r[0]+i[0])/2),z((r[1]+i[1])/2)]),this.updateOutdoor({points:n})}deleteOutdoorPoint(e){let t=this.outdoorArea;!t||!this.isAdmin||t.points.length<=3||this.updateOutdoor({points:t.points.filter((n,r)=>r!==e)})}deleteOutdoor(){let e=this._outdoorId;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((t,n)=>n.outdoor=n.outdoor.filter(r=>r.id!==e)),this._outdoorId=null)}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let t={...e,id:G("outdoor"),points:e.points.map(([n,r])=>[z(n+.5),z(r+.5)])};this.change((n,r)=>r.outdoor.push(t)),this.selectItem("outdoor",t.id)}addRoom(e,t="room"){if(!this.floor)return;let n=G("room"),r=this.floor.rooms.length+1,i=t==="veranda"||t==="balcony"||t==="canopy";this.change((s,a)=>a.rooms.push({id:n,name:i?`${this.t("tool_covered")} ${r}`:this.t("new_room",{n:r}),area_id:null,points:e.map(([l,c])=>[z(l),z(c)]),floor_material:i?"tiles":"wood",...i?{kind:t,...t==="veranda"?{roof_style:"tile"}:{},railing:!0,columns:2,column_size:t==="canopy"?.12:.32,open:!0}:{}})),this._roomId=n,this._vertex=null,this._tool="select"}onKey=e=>{if(e.composedPath().some(r=>r instanceof HTMLInputElement||r instanceof HTMLSelectElement||r instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=e.ctrlKey||e.metaKey;if(n&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(n&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(n&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(e.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let r=this.selectedFix;this.toggleFixed(r.kind,r.id)}else if(Object.hasOwn(ws,e.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let r=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[i,s]=ws[e.key];this.nudge(i*r,s*r)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(e.key==="Escape"){if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};nudge(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let r=this.selectedFix;if(r&&this.isFixedItem(r.kind,r.id))return this._fixedHint=!0,!0;let i=s=>[z(s[0]+e),z(s[1]+t)];if(this._deviceId){let s=this._deviceId;if(!n.placements.some(a=>a.entity_id===s))return!1;this.change((a,l)=>{let c=l.placements.find(d=>d.entity_id===s);[c.x,c.z]=i([c.x,c.z])})}else if(this._furnitureId){let s=this._furnitureId;this.change((a,l)=>{let c=l.furniture.find(d=>d.id===s);c&&([c.x,c.z]=i([c.x,c.z]))})}else if(this._openingId){let s=this.opening,a=s?Je(s,n.rooms,n.walls??[]):null;if(!s||!a)return!1;let l=a.room.points[a.edge],c=a.room.points[(a.edge+1)%a.room.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=(e*(c[0]-l[0])+t*(c[1]-l[1]))/d;if(Math.abs(u)<1e-9)return!0;let h=Math.min(s.width,d)/2;this.updateOpening({offset:z(Math.min(d-h,Math.max(h,s.offset+u)))})}else if(this._wallId){let s=this._wallId;this.change((a,l)=>{let c=(l.walls??[]).find(d=>d.id===s);c&&([c.a,c.b]=[i(c.a),i(c.b)])})}else if(this._outdoorId){let s=this._outdoorId;this.change((a,l)=>{let c=l.outdoor.find(d=>d.id===s);c&&(c.points=c.points.map(i))})}else if(this._roomId){let s=this._roomId,a=this._vertex,l=n.rooms.find(d=>d.id===s);if(!l)return!1;let c=new Set(n.placements.filter(d=>B([d.x,d.z],l.points)).map(d=>d.entity_id));this.change((d,u)=>{let h=u.rooms.find(p=>p.id===s);if(a!==null&&a<h.points.length){h.points[a]=i(h.points[a]);return}h.points=h.points.map(i);for(let p of u.placements)c.has(p.entity_id)&&([p.x,p.z]=i([p.x,p.z]))})}else return!1;return!0}get freeHaFloors(){let e=new Set(this._doc.floors.map(t=>t.ha_floor));return Object.values(this.hass?.floors??{}).filter(t=>!e.has(t.floor_id)).sort((t,n)=>(t.level??99)-(n.level??99)||t.name.localeCompare(n.name))}unplacedAreas(e){if(!e.ha_floor)return[];let t=new Set(this._doc.floors.flatMap(n=>n.rooms.map(r=>r.area_id)));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===e.ha_floor&&!t.has(n.area_id)).sort((n,r)=>n.name.localeCompare(r.name))}addFloor(e=null){let t=this._doc.floors,n=G("floor"),r=e?.name??(t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length})),i={...bi(n,r,yi(t,e?.level)),ha_floor:e?.floor_id??null},s=structuredClone(this._doc),a=s.floors.findIndex(l=>l.elevation>i.elevation);s.floors.splice(a<0?s.floors.length:a,0,i),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(e){let t=this.unplacedAreas(e);if(!t.length)return;let n=vi(e,t,()=>G("room"));this.change((r,i)=>i.rooms.push(...n)),this.fit()}moveFloor(e){let t=this._doc.floors.findIndex(i=>i.id===this._floorId),n=t+e;if(t<0||n<0||n>=this._doc.floors.length)return;let r=structuredClone(this._doc);[r.floors[t],r.floors[n]]=[r.floors[n],r.floors[t]],this.setDoc(r)}deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let t=structuredClone(this._doc);t.floors=t.floors.filter(n=>n.id!==e.id),this.setDoc(t),this._floorId=t.floors[0]?.id??null,this._roomId=null}deleteRoom(){let e=this._roomId;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((t,n)=>{let r=n.rooms.find(i=>i.id===e);n.rooms=n.rooms.filter(i=>i.id!==e),n.openings=n.openings.filter(i=>i.room_id!==e||i.wall),r&&(n.placements=n.placements.filter(i=>!B([i.x,i.z],r.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let t=G("room");this.change((n,r)=>r.rooms.push({...structuredClone(e),id:t,points:e.points.map(([i,s])=>[z(i+.5),z(s+.5)])})),this._roomId=t}roofFixed(e){return!!e&&(!!e.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let e=[...this._doc.floors].sort((t,n)=>n.elevation-t.elevation);return e.length<2?k:b`<div class="fp3d-seg fp3d-dev-source">
      ${e.map(t=>b`<button aria-pressed=${t.id===this._floorId} @click=${()=>this._floorId=t.id}>${t.name}</button>`)}
    </div>`}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(e=>e.id===this._roofId):void 0}useRoofSections(e=!1){if(!this.isAdmin)return;let t=(this._doc.settings.roof.sections??[]).length>0;e&&t&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(e||!t)&&(n.settings.roof.sections=Wo(n,()=>G("roof")))}),this._roofId=null)}addRoofSection(e,t){if(!this.isAdmin)return;let n=Oo(this._doc,e[0],e[1],t[0],t[1]),r=Math.min(...this._doc.floors.map(c=>c.elevation)),i=n===null,s=z(n??r+2.4),a=i?6:this._doc.settings.roof.pitch||35,l={id:G("roof"),x0:z(e[0]),z0:z(e[1]),x1:z(t[0]),z1:z(t[1]),shape:i?"pent":"gable",axis:t[0]-e[0]>=t[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:i?.15:null,...i?{open:!0}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let e=this.floor,t=this._roofId;if(!e||!t||!this.isAdmin)return;let n=Fo(e.rooms,e.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let r=n.map(([i,s])=>[z(i),z(s)]);this.updateRoofSection({shape:"flat",points:r,...lr(r)})}addDormer(e){let t=this.roofSection;if(!t||!this.isAdmin)return;let n=Io(t,e,G("roof"));this.change(r=>{r.settings.roof.sections=[...r.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(e){let t=this._roofId;!t||!this.isAdmin||this.change(n=>{let r=n.settings.roof.sections?.find(i=>i.id===t);r&&Object.assign(r,e)})}deleteRoofSection(){let e=this._roofId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.sections=(t.settings.roof.sections??[]).filter(n=>n.id!==e)),this._roofId=null)}duplicateRoofSection(){let e=this.roofSection;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:G("roof"),x0:z(e.x0+1),x1:z(e.x1+1),z0:z(e.z0+1),z1:z(e.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],t]),this._roofId=t.id}renderRoofSections(){let e=this._doc.settings.roof,t=e.type==="custom"?e.sections??[]:[];return T`<g class="fp3d-roof-layer">${t.map((n,r)=>{let i=n.id===this._roofId,s=he(n),a=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=Po(t,n),c=l?he(To(l,n)):s,d=(a??[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,c.w),c.at(c.u0,c.w)]).map(y=>this.toScreen(y)),u=(y,m)=>{let[v,M]=this.toScreen(y),[w,A]=this.toScreen(m);return T`<line x1=${v} y1=${M} x2=${w} y2=${A} />`},h=n.shape==="flat"||n.shape==="parapet"?null:cr(n,{u0:0,u1:0,a:0,b:0}),p=h?T`${h.ridges.map(([y,m])=>u(s.at(y[0],y[1]),s.at(m[0],m[1])))}`:k,[f,_]=this.toScreen(s.at((s.u0+s.u1)/2,s.w/2)),g=`${this.roofFixed(n)?"\u{1F512} ":""}${r+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${Y(this.hass,rn(n),1)} m`;return T`<g data-roof=${n.id} class=${`fp3d-roof-sec${i?" fp3d-roof-sel":""}`}>
          <polygon points=${d.map(y=>y.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${p}</g>
          <text x=${f} y=${_-14}>${g}</text>
        </g>
        ${i&&this.isAdmin&&!this.roofFixed(n)&&a?a.map((y,m)=>{let[v,M]=this.toScreen(y);return T`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${m}`}><circle cx=${v} cy=${M} r="16" class="fp3d-hit" /><circle cx=${v} cy=${M} r="6" /></g>`}):k}
        ${i&&this.isAdmin&&!this.roofFixed(n)&&!a?[[0,0],[1,0],[1,1],[0,1]].map(([y,m])=>{let[v,M]=this.toScreen([y?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),m?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return T`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${y}:${m}`}><circle cx=${v} cy=${M} r="16" class="fp3d-hit" /><circle cx=${v} cy=${M} r="6" /></g>`}):k}`})}</g>`}faceHit(e,t){return e.wall?{u:(t[0]-e.o[0])*e.eu[0]+(t[1]-e.o[2])*e.eu[2],s:Number.NaN}:an(e,t)}renderSolarFields(){let e=this._doc.settings.roof.solar??[];if(!e.length)return k;let t=q(this._doc);return T`<g class="fp3d-solar-layer">${e.map(n=>{let r=ie(this._doc,n,t);if(!r||r.wall&&r.wall.floorId!==this._floorId)return k;let i=n.id===this._solarId,s=k;if(i&&r.unbounded&&this.isAdmin&&!n.locked){let[a,l]=Lt(r,n),c=(n.rotation??0)*Math.PI/180,d=.9+Math.max(...Se(r,n,!0).flatMap(_=>_.corners.map(g=>Math.hypot(g[0]-a,g[2]-l))))*.5,[u,h]=this.toScreen([a,l]),[p,f]=this.toScreen([a+Math.sin(c)*d,l-Math.cos(c)*d]);s=T`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${u} y1=${h} x2=${p} y2=${f} />
          <circle cx=${p} cy=${f} r="16" class="fp3d-hit" />
          <circle cx=${p} cy=${f} r="8" />
          <path d="M${p-4} ${f-1}a4 4 0 1 1 2 3.5" />
        </g>`}return T`<g data-solar=${n.id} class=${`fp3d-solar${i?" fp3d-solar-sel":""}${i&&this._solarPick?" fp3d-solar-pick":""}`}>${Se(r,n,i).map(a=>{let l=r.wall?Math.max(.3,...a.corners.map(d=>(d[0]-r.o[0])*r.n[0]+(d[2]-r.o[2])*r.n[2])):0,c=r.wall?[a.corners[0],a.corners[1]].flatMap((d,u)=>{let h=[d[0],d[2]],p=[d[0]+r.n[0]*l,d[2]+r.n[2]*l];return u===0?[h,p]:[p,h]}):a.corners.map(d=>[d[0],d[2]]);return T`<polygon data-cell=${a.cell} class=${a.skipped?"fp3d-solar-off":""} points=${c.map(d=>this.toScreen(d).join(",")).join(" ")} />`})}</g>${s}`})}</g>`}renderRoofWindows(){let e=this._doc.settings.roof.windows??[];if(!e.length)return k;let t=new Map(q(this._doc).map(n=>[n.key,n]));return T`<g class="fp3d-roofwin-layer">${e.map(n=>{let r=t.get(n.face),i=r?Yo(r,n):null;return i?T`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${i.map(s=>this.toScreen([s[0],s[2]]).join(",")).join(" ")} /></g>`:k})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let e=q(this._doc).filter(r=>!r.flat),t=ln(e,this._doc.settings.north??0)??q(this._doc)[0];if(!t)return;let n=mr(t,G("rwin"));this.change(r=>r.settings.roof.windows=[...r.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(e){let t=this._roofWinId;!t||!this.isAdmin||this.change(n=>{let r=n.settings.roof.windows?.find(s=>s.id===t);if(!r)return;Object.assign(r,e);let i=q(n).find(s=>s.key===r.face);i&&Object.assign(r,It(i,nt(r)))})}deleteRoofWindow(){let e=this._roofWinId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.windows=(t.settings.roof.windows??[]).filter(n=>n.id!==e)),this._roofWinId=null)}renderRoofWindowList(){let e=this._doc.settings.roof.windows??[],t=new Map(q(this._doc).map(n=>[n.key,n]));return b`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(t.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${e.length?b`<div class="fp3d-room-list">
            ${e.map((n,r)=>{let i=t.get(n.face);return b`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${r+1} · ${i?this.faceLabel(i):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:k}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin||!t.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(e){let t=this.isAdmin,n=q(this._doc),r=l=>this.updateRoofWindow(l),i=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===e.id)+1,s=this.entityOptions(l=>l.startsWith("cover.")),a=this.entityOptions(l=>zr(l)||oe(l));return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${i}</h3>
          ${t?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>r({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:k}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!t} @change=${l=>{let c=n.find(d=>d.key===l.target.value);c&&r({...mr(c,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name})}}>
              ${n.map(l=>b`<option value=${l.key} ?selected=${l.key===e.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.num(this.t("width"),e.w??.78,l=>r({w:Math.max(.3,Math.min(4,z(l)))}),.01,.3)}
          ${this.num(this.t("height_m"),e.h??1.18,l=>r({h:Math.max(.3,Math.min(4,z(l)))}),.01,.3)}
          ${this.num(this.t("solar_u"),e.u,l=>r({u:z(l)}),.05)}
          ${this.num(this.t("solar_v"),e.v,l=>r({v:z(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),e.cover??null,void 0,s,l=>r({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),e.contact??null,void 0,a,l=>r({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),e.tilt??null,void 0,a,l=>r({tilt:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_motor"),e.window??null,void 0,s,l=>r({window:l==="none"?null:l}))}
          <label class="fp3d-field fp3d-wide"
            >${this.t("roof_window_name")}
            <input .value=${e.name??""} ?disabled=${!t} maxlength="64" @change=${l=>r({name:l.target.value.trim()||null})}
          /></label>
        </div>
        <p class="fp3d-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${t?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:k}
      </section>`}cableSegments(){if(this.cableCache?.doc===this._doc)return this.cableCache.segs;let e=this._doc,t=new Map((e.settings.roof.solar??[]).map(i=>[i.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},r=[];try{r=os({building:e,consumers:[],summary:n,fieldPower:t}).filter(i=>i.key)}catch{r=[]}return this.cableCache={doc:e,segs:r},r}cableKeys(){let e=[...new Set(this.cableSegments().map(n=>n.key))],t=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return e.sort((n,r)=>t(n)-t(r)||n.localeCompare(r))}cableLabel(e){let t=a=>{let l=this._doc.floors.flatMap(c=>c.furniture).find(c=>c.id===a);return l?l.name||this.t(`furn_${l.type}`):"?"},n=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.type==="meter"),r=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(e==="grid")return`${r} \u2192 ${this.t("furn_grid_point")}`;let[i,s]=[e.slice(0,e.indexOf(":")),e.slice(e.indexOf(":")+1)];if(i==="solar"){let a=this._doc.settings.roof.solar??[],l=a.findIndex(d=>d.id===s);return`${a[l]?.name||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return i==="inv"?`${t(s)} \u2192 ${r}`:`${this.t("furn_inverter")} \u2194 ${t(s)}`}layCable(e){if(!this.isAdmin||!this._floorId)return;let t=[];for(let i of this.cableSegments().filter(s=>s.key===e))for(let s of[i.a,i.b]){let a=[z(s[0]),z(s[2])],l=t[t.length-1];(!l||Math.hypot(l[0]-a[0],l[1]-a[1])>.05)&&t.push(a)}let n=t.length>2?t.slice(1,-1):t,r=this._floorId;this.change(i=>{i.settings.roof.cables=[...(i.settings.roof.cables??[]).filter(s=>s.id!==e),{id:e,floor_id:r,points:n.length?n:[t[0]??[0,0]],height:.03}]}),this._cableId=e}renderCables(){if(!ce("energy_pro"))return k;let e=this.cableSegments();if(!e.length)return k;let t=e.filter(s=>s.floorId===this._floorId),n=this._doc.settings.roof.cables??[],r=this._cableId,i=[...new Set(e.map(s=>s.key))];return T`<g class="fp3d-cable-layer">${i.map(s=>{let a=n.find(g=>g.id===s),l=`fp3d-cable fp3d-cable-${s.split(":")[0]}${a?" fp3d-cable-laid":""}${s===r?" fp3d-cable-sel":""}`,c=e.filter(g=>g.key===s),d=t.filter(g=>g.key===s).map(g=>{let y=this.toScreen([g.a[0],g.a[2]]),m=this.toScreen([g.b[0],g.b[2]]);return T`<line x1=${y[0]} y1=${y[1]} x2=${m[0]} y2=${m[1]} />`});if(!(a&&s===r&&a.floor_id===this._floorId&&!a.locked))return d.length?T`<g class=${l} data-cable=${s}><g class="fp3d-cable-hit">${d}</g>${d}</g>`:k;let u=c[0],h=c[c.length-1],p=[this.toScreen([u.a[0],u.a[2]]),...a.points.map(g=>this.toScreen(g)),this.toScreen([h.b[0],h.b[2]])],f=p.slice(0,-1).map((g,y)=>T`<line class="fp3d-cable-piece" data-cable-line=${s} data-cable-seg=${y} x1=${g[0]} y1=${g[1]} x2=${p[y+1][0]} y2=${p[y+1][1]} />`),_=a.points.map((g,y)=>{let m=this.toScreen(g);return T`<g class="fp3d-vertex" data-cable-pt=${`${s}:${y}`}><circle cx=${m[0]} cy=${m[1]} r="16" class="fp3d-hit" /><circle cx=${m[0]} cy=${m[1]} r="6" /></g>`});return T`<g class=${l} data-cable=${s}>${d}${f}${_}</g>`})}</g>`}renderCableSettings(){let e=this.cableKeys();if(!e.length)return k;let t=this.isAdmin,n=this._doc.settings.roof.cables??[],r=this._cableId?n.find(i=>i.id===this._cableId):void 0;return b`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${e.map(i=>b`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${i===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=i===this._cableId?null:i;let s=n.find(a=>a.id===i);this._cableId&&s&&this._doc.floors.some(a=>a.id===s.floor_id)&&(this._floorId=s.floor_id)}}
            >
              <span>${this.cableLabel(i)}${n.some(s=>s.id===i)?b` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:k}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?b`<div class="fp3d-actions">
              ${r?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!r.locked} title=${this.t("fix_hint")} ?disabled=${!t} @click=${()=>this.change(i=>{let s=i.settings.roof.cables?.find(a=>a.id===r.id);s&&(s.locked=!s.locked)})}>
                      ${r.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(i=>i.settings.roof.cables=(i.settings.roof.cables??[]).filter(s=>s.id!==this._cableId))}>${this.t("cable_auto")}</button>`:b`<button class="fp3d-btn fp3d-primary" ?disabled=${!t||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${r?b`<div class="fp3d-form">
                    ${this.num(this.t("cable_height"),r.height,i=>this.change(s=>{let a=s.settings.roof.cables?.find(l=>l.id===r.id);a&&(a.height=Math.min(30,Math.max(0,z(i))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${r.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:this._doc.floors.find(i=>i.id===r.floor_id)?.name??""})}</p>`:k}`:k}
    </section>`}renderEnergyMarkers(){let e=this.floor;if(!e)return k;let t={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"},n=this._doc.settings.roof.hologram,r=ce("energy_pro")&&n?.place==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return T`<g class="fp3d-energy-markers">${r?T`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${r[0]} cy=${r[1]} r="17" />
          <text x=${r[0]} y=${r[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${r[0]} y=${r[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:k}${e.furniture.filter(i=>ve.includes(i.type)).map(i=>{let[s,a]=this.toScreen([i.x,i.z]),l=i.id===this._furnitureId;return T`<g data-energy-device=${i.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${s} cy=${a} r="17" />
          <text x=${s} y=${a+6} class="fp3d-energy-icon">${t[i.type]??"\u26A1"}</text>
          ${l?T`<text x=${s} y=${a+32} class="fp3d-energy-name">${this.t(`furn_${i.type}`)}</text>`:k}
          <title>${this.t(`furn_${i.type}`)}</title>
        </g>`})}</g>`}faceLabel(e){if(e.key===Le)return this.t("solar_ground");if(e.wall){let r=this._doc.floors.find(i=>i.id===e.wall.floorId);return`${this.t("solar_wall")} ${r?.name??""} \xB7 ${this.t(`compass_${fr(e,this._doc.settings.north??0)}`)} \xB7 ${Y(this.hass,e.lu,1)} m`}let t=this._doc.settings.roof.sections??[],n=e.section?this.t("solar_section",{n:t.findIndex(r=>r.id===e.section)+1}):this.t("solar_main");return e.flat?`${n} \xB7 ${this.t("solar_flat")}`:`${n} \xB7 ${this.t(`compass_${fr(e,this._doc.settings.north??0)}`)} \xB7 ${Math.round(e.pitch)}\xB0`}addSolarField(){if(!this.isAdmin)return;let e=q(this._doc),t=new Set((this._doc.settings.roof.solar??[]).map(s=>s.face)),n=this._doc.settings.north??0,r=ln(e.filter(s=>!t.has(s.key)),n)??ln(e,n);if(!r)return;let i=tt(r,G("pv"));this.change(s=>s.settings.roof.solar=[...s.settings.roof.solar??[],i]),this._solarId=i.id,this._roofId=null}selectSolar(e){this._solarId=e,this._roofId=null;let t=this._doc.settings.roof.solar?.find(n=>n.id===e);t?.face.startsWith("wall:")&&(this._floorId=t.face.split(":")[1])}addWallField(){if(!this.isAdmin)return;let e=this._floorId??this._doc.floors[0]?.id,t=e?No(this._doc,G("pv"),e):null;t&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],t]),this._solarId=t.id)}addGroundField(){if(!this.isAdmin)return;let e=ur(this._doc,G("pv"));this.change(t=>t.settings.roof.solar=[...t.settings.roof.solar??[],e]),this._solarId=e.id}updateSolar(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let r=n.settings.roof.solar?.find(s=>s.id===t);if(!r)return;Object.assign(r,e);let i=ie(n,r);i&&Object.assign(r,It(i,r))})}setSolarString(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let r=n.settings.roof,i=r.solar?.find(a=>a.id===t);if(!i)return;if(e==="new"){let a=r.strings??[],l={id:G("str"),name:this.t("solar_string_n",{n:a.length+1}),entity:i.entity??null,inverter:null};r.strings=[...a,l],i.string=l.id}else i.string=e;let s=new Set((r.solar??[]).map(a=>a.string).filter(Boolean));r.strings=(r.strings??[]).filter(a=>s.has(a.id))})}updateSolarString(e){let n=this._doc.settings.roof.solar?.find(r=>r.id===this._solarId)?.string;!n||!this.isAdmin||this.change(r=>{let i=r.settings.roof.strings?.find(s=>s.id===n);i&&Object.assign(i,e)})}toggleSolarCell(e){this.updateSolarField(t=>{let n=new Set(t.skip??[]);n.has(e)?n.delete(e):n.add(e),t.skip=n.size?[...n].sort():null})}updateSolarField(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let r=n.settings.roof.solar?.find(i=>i.id===t);r&&e(r)})}deleteSolar(){let e=this._solarId;!e||!this.isAdmin||(this.change(t=>{let n=t.settings.roof;n.solar=(n.solar??[]).filter(i=>i.id!==e);let r=new Set(n.solar.map(i=>i.string).filter(Boolean));n.strings=(n.strings??[]).filter(i=>r.has(i.id))}),this._solarId=null)}renderSolarList(){let e=this._doc.settings.roof.solar??[],t=q(this._doc),n=new Map(e.map(i=>[i.id,ie(this._doc,i,t)])),r=this.isAdmin;return b`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(t.length?"solar_hint":"solar_no_roof")}</p>
      ${e.length?b`<div class="fp3d-room-list">
            ${e.map((i,s)=>{let a=n.get(i.id),l=a?Se(a,i).length:0;return b`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(i.id)}
                >
                  <span>${i.name||`${this.t("solar_field")} ${s+1}`} · ${a?this.faceLabel(a):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:Y(this.hass,l*(i.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:k}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!r||!t.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!r} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!r||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?b`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(i=>{let s=e.filter(d=>d.string===i.id),a=s.map(d=>n.get(d.id)?Se(n.get(d.id),d).length:0),l=a.reduce((d,u)=>d+u,0),c=s.reduce((d,u,h)=>d+a[h]*(u.wp??400)/1e3,0);return b`<p class="fp3d-sub">🔗 <b>${i.name}</b> · ${this.t("solar_string_sum",{fields:s.length,n:l,kwp:Y(this.hass,c,1)})}</p>`})}`:k}
    </section>`}renderSolarForm(e){let t=this.isAdmin,n=q(this._doc),r=ge(this._doc),i=ie(this._doc,e,n),s=e.face===Le,a=i?Se(i,e).length:0,l=sn(e),c=l.reduce((p,f)=>p+f,0)-(e.skip?.length??0),d=this.entityOptions(p=>this.isPowerSensor(p)),u=p=>this.updateSolar(p),h=(this._doc.settings.roof.solar??[]).findIndex(p=>p.id===e.id)+1;return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${e.name||`${this.t("solar_field")} ${h}`}</h3>
          ${t?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:k}
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
              @change=${p=>{let f=p.target.value,_={portrait:e.portrait,look:e.look,name:e.name,string:e.string,entity:e.entity,module_w:e.module_w,module_h:e.module_h,wp:e.wp};f===Le&&u({...ur(this._doc,e.id),..._});let g=n.find(m=>m.key===f);g&&u({...tt(g,e.id),..._,rotation:null,flip:!1});let y=r.find(m=>m.key===f);y&&u({...tt(y,e.id),..._,rows:1,rotation:null,flip:!1})}}
            >
              ${i?k:b`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(p=>b`<option value=${p.key} ?selected=${p.key===e.face}>${this.faceLabel(p)}</option>`)}
              <option value=${Le} ?selected=${s}>${this.t("solar_ground")}</option>
              ${r.map(p=>b`<option value=${p.key} ?selected=${p.key===e.face}>${this.faceLabel(p)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,p=>{let f=Math.max(1,Math.min(40,Math.round(p)));u(e.layout?.length?{layout:Array.from({length:f},(_,g)=>e.layout[g]??e.layout[e.layout.length-1]),rows:f}:{rows:f})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!t}
              .value=${e.layout?.length?e.layout.join(", "):String(e.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${p=>{let f=p.target.value.split(/[,;\s]+/).map(_=>parseInt(_,10)).filter(_=>Number.isFinite(_)&&_>=0);f.length&&(f.length===1?u({cols:Math.max(1,Math.min(60,f[0])),layout:null,skip:null}):u({layout:f.slice(0,40).map(_=>Math.min(60,_)),rows:Math.min(40,f.length),cols:Math.max(1,...f),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${i&&!i.unbounded?b`${this.t("solar_face_size",{w:Y(this.hass,i.lu,1),h:Y(this.hass,i.ls,1)})} · `:k}${this.t("solar_cols_hint")}
        </p>
        ${e.layout?.length&&new Set(e.layout).size>1?b`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(p=>b`<button aria-pressed=${(e.align??"left")===p} ?disabled=${!t} @click=${()=>u({align:p})}>${this.t(`solar_align_${p}`)}</button>`)}
            </div>`:k}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${e.portrait!==!1} ?disabled=${!t} @click=${()=>u({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${e.portrait===!1} ?disabled=${!t} @click=${()=>u({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${e.look!=="blue"} ?disabled=${!t} @click=${()=>u({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${e.look==="blue"} ?disabled=${!t} @click=${()=>u({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.num(this.t("solar_module_w"),e.module_w??1.13,p=>u({module_w:Math.max(.3,Math.min(3,z(p)))}),.01,.3)}
          ${this.num(this.t("solar_module_h"),e.module_h??1.72,p=>u({module_h:Math.max(.3,Math.min(3,z(p)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),e.wp??400,p=>u({wp:Math.max(50,Math.min(1500,Math.round(p)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!t} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${e.skip?.length?b`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>u({skip:null})}>${this.t("solar_pick_all")}</button>`:k}
        </div>
        ${this._solarPick?b`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:k}
        <div class="fp3d-form">
          ${s?b`${this.num(this.t("solar_base"),e.base??0,p=>u({base:p>.001?Math.min(60,z(p)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),e.rotation??0,p=>u(Tt(this._doc,e,p)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>u(Tt(this._doc,e,(e.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>u(Tt(this._doc,e,(e.rotation??0)+15))}>↻ 15°</button>
                </div>`:b`${this.num(this.t("solar_u"),e.u,p=>u({u:z(p)}),.05)} ${this.num(this.t(i?.wall?"solar_v_wall":"solar_v"),e.v,p=>u({v:z(p)}),.05)}`}
          ${i?.wall?b`${this.num(this.t("solar_tilt_wall"),e.tilt??0,p=>u({tilt:Math.max(0,Math.min(90,Math.round(p)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${p=>u({flip:p.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:k}
          ${i?.flat?b`${this.num(this.t("solar_tilt"),e.tilt??15,p=>u({tilt:Math.max(0,Math.min(45,Math.round(p)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${p=>u({flip:p.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:k}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:a,kwp:Y(this.hass,a*(e.wp??400)/1e3,1)})}${a<c?b` · <b>${this.t("solar_partial",{n:a,total:c})}</b>`:k}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!t} @change=${p=>{let f=p.target.value;this.setSolarString(f===""?null:f)}}>
              <option value="" ?selected=${!e.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(p=>b`<option value=${p.id} ?selected=${p.id===e.string}>${p.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let p=this._doc.settings.roof.strings?.find(_=>_.id===e.string);if(!p)return this.entitySelect(this.t("solar_entity"),e.entity??null,void 0,d,_=>u({entity:_==="none"?null:_}));let f=this._doc.floors.flatMap(_=>_.furniture.filter(g=>g.type==="inverter").map((g,y)=>({id:g.id,label:`${this.t("furn_inverter")} ${y+1} \xB7 ${_.name}`})));return b`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!t} .value=${p.name} @change=${_=>this.updateSolarString({name:_.target.value.trim()||p.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),p.entity??null,void 0,d,_=>this.updateSolarString({entity:_==="none"?null:_}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!t} @change=${_=>this.updateSolarString({inverter:_.target.value||null})}>
                  <option value="" ?selected=${!p.inverter}>${this.t(f.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${f.map(_=>b`<option value=${_.id} ?selected=${_.id===p.inverter}>${_.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${t?b`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!i} @click=${()=>i&&u({...tt(i,e.id),portrait:e.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:k}
      </section>`}renderRoofPanel(){let e=this._doc.settings.roof,t=this.isAdmin,n=e.type==="custom"?this.roofSection:void 0,r=this._roofWinId?e.windows?.find(s=>s.id===this._roofWinId):void 0;if(r)return this.renderRoofWindowForm(r);if(n)return this.renderRoofSectionForm(n);let i=e.type==="custom"?e.sections??[]:[];return b`<section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${e.type!=="custom"?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!t} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:b`<div class="fp3d-room-list">
              ${i.map((s,a)=>b`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=s.id}>
                    <span>${a+1} · ${s.dormer?this.t("roof_dormer"):this.t(`roof_shape_${s.shape}`)} · ${Y(this.hass,Math.abs(s.x1-s.x0),1)} × ${Y(this.hass,Math.abs(s.z1-s.z0),1)} m · ${this.t("roof_ridge_height")} ${Y(this.hass,rn(s),1)} m</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(s=>s.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){let e=this._solarId?this._doc.settings.roof.solar?.find(r=>r.id===this._solarId):void 0;if(e)return this.renderSolarForm(e);let t=this._furnitureId?this.floor?.furniture.find(r=>r.id===this._furnitureId&&ve.includes(r.type)):void 0;if(t)return b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(t)}`;let n=ce("energy_pro");return b`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():k}${n?this.renderHologramSettings():k}${this.renderProCard()}`}renderHologramSettings(){let e=this._doc.settings.roof.solar??[],t=this.isAdmin,n=this._doc.settings.roof.hologram??jt,r=n.place==="free";if(!e.length&&!r)return k;let i=l=>this.change(c=>c.settings.roof.hologram={...c.settings.roof.hologram??jt,...l}),s=(l,c)=>l.name||`${this.t("solar_field")} ${c+1}`,a=()=>{let l=-1/0,c=1/0,d=-1/0;for(let h of this._doc.floors)for(let p of h.rooms)for(let[f,_]of p.points)l=Math.max(l,f),c=Math.min(c,_),d=Math.max(d,_);let u=Number.isFinite(l);i({place:"free",x:n.x??(u?z(l+2):0),z:n.z??(u?z((c+d)/2):0),height:n.height??3})};return b`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!t} @change=${l=>l.target.value==="free"?a():i({place:"field"})}>
            <option value="field" ?selected=${!r}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${r}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${r?b`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.num("X (m)",n.x??0,l=>i({x:z(l)}),.25)} ${this.num("Z (m)",n.z??0,l=>i({z:z(l)}),.25)}
              ${this.num(this.t("holo_height"),n.height??3,l=>i({height:Math.min(60,Math.max(0,z(l)))}),.25,0)}`:b`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!t} @change=${l=>i({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${e.map((l,c)=>b`<option value=${l.id} ?selected=${l.id===n.field}>${s(l,c)}</option>`)}
                </select>
              </label>
              ${this.num(this.t("holo_right"),n.right,l=>i({right:Math.min(30,Math.max(-30,z(l)))}),.25)}
              ${this.num(this.t("holo_up"),n.up,l=>i({up:Math.min(30,Math.max(-30,z(l)))}),.25)}`}
        ${this.num(this.t("holo_size"),n.size,l=>i({size:Math.min(3,Math.max(.3,z(l)))}),.1,.3)}
      </div>
    </section>`}isPowerSensor(e){if(!oe(e))return!1;let t=this.hass?.states[e]?.attributes;return t?.device_class==="power"||t?.unit_of_measurement==="W"||t?.unit_of_measurement==="kW"}devicePower(e,t){return e.power&&e.power!=="none"?e.power:t.get(e.id)?.power??null}renderEnergyChecklist(){let e=this._doc,t=this.hass?$t(this.hass,e.floors):new Map,n=e.floors.flatMap(y=>y.furniture.map(m=>({m,fl:y}))),r=y=>n.filter(m=>m.m.type===y),i=y=>{this._floorId=y.fl.id,this._solarId=null,this.selectItem("furniture",y.m.id),this.showPoint(y.m.x,y.m.z)},s=e.settings.roof.solar??[],a=r("meter"),l=r("inverter"),c=r("home_battery"),d=r("grid_point"),u=!!e.energy.grid||a.some(y=>this.devicePower(y.m,t)),h=!!e.energy.solar||l.length>0&&l.every(y=>this.devicePower(y.m,t)),p=c.every(y=>this.devicePower(y.m,t)&&y.m.soc&&y.m.soc!=="none")||!!e.energy.battery,f=ce("energy_pro"),_=[{state:s.length?"ok":"todo",label:this.t(s.length?"chk_solar":"chk_solar_add"),action:s.length?()=>this._solarId=s[0].id:()=>this.addSolarField()},a.length?{state:u?"ok":"todo",label:this.t(u?"chk_meter":"chk_meter_sensor"),action:()=>i(a[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:h?"ok":"todo",label:this.t(h?"chk_inverter":"chk_inverter_sensor"),action:()=>i(l.find(y=>!this.devicePower(y.m,t))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},c.length?{state:p?"ok":"todo",label:this.t(p?"chk_battery":"chk_battery_sensor"),action:()=>i(c[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},d.length?{state:"ok",label:this.t("chk_grid"),action:()=>i(d[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")},f?{state:"ok",label:this.t("chk_pro_active")}:{state:"opt",label:this.t("chk_pro_get"),href:xt(this.hass?.language)}],g=_.filter(y=>y.state==="ok").length;return b`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${g}/${_.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${_.map(y=>y.href?b`<a class="fp3d-chk fp3d-chk-${y.state}" href=${y.href} target="_blank" rel="noopener"><span>${y.state==="ok"?"\u2713":y.state==="todo"?"\u25CB":"\xB7"}</span>${y.label}</a>`:b`<button class="fp3d-chk fp3d-chk-${y.state}" ?disabled=${!this.isAdmin&&!!y.action&&y.state!=="ok"} @click=${y.action}><span>${y.state==="ok"?"\u2713":y.state==="todo"?"\u25CB":"\xB7"}</span>${y.label}</button>`)}
    </section>`}renderProCard(){let e=this.hass?.language;if(ce("energy_pro"))return b`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${nn(e,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
      </section>`;let t=new URL("./images/solar-pro.jpg",import.meta.url).href;return b`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>⚡ ${this.t("pro_name_energy_pro")}</b><a class="fp3d-btn fp3d-primary" href=${xt(e)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
      <img src=${t} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
      <div class="fp3d-actions"><a class="fp3d-btn" href=${nn(e,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`}addEnergyDevice(e){let t=this.floor;if(!t||!this.isAdmin)return;if(e==="grid_point"){let m=wr(this._doc),[v,M,w]=Be(e),[A,P]=m?m.end:this.toWorld(this._size.w/2,this._size.h/2),S={id:G("furniture"),type:e,x:z(A),z:z(P),rotation:0,w:v,d:M,h:w,variant:null};this.change((I,E)=>E.furniture.push(S)),this.selectItem("furniture",S.id),this.showPoint(S.x,S.z);return}let n=m=>`${m.name} ${m.area_id&&this.hass?.areas?.[m.area_id]?.name||""} ${m.area_id??""}`.toLowerCase(),r=t.rooms.filter(m=>m.points.length>=3),i=m=>r.find(v=>m.test(n(v))),s=r.find(m=>t.furniture.some(v=>v.type==="parking"&&B([v.x,v.z],m.points))),a=i(/garage|carport/)??s,l=i(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),c=i(/flur|diele|eingang|hall|entr|lobby/),d=(e==="wallbox"?a:e==="meter"?l??c??a:l??a)??this.room??r.sort((m,v)=>Math.abs(ee(v.points))-Math.abs(ee(m.points)))[0],[u,h,p]=Be(e),[f,_]=d?fe(d.points):this.toWorld(this._size.w/2,this._size.h/2);if(d){let[m,v]=fe(d.points),M=null,w=new Set(t.openings.filter(S=>S.room_id===d.id).map(S=>S.edge)),A=d.points.some((S,I)=>!w.has(I));d.points.forEach((S,I)=>{if(A&&w.has(I))return;let E=d.points[(I+1)%d.points.length],R=Math.hypot(E[0]-S[0],E[1]-S[1]);if(M&&R<=M.l)return;let L=(S[0]+E[0])/2,D=(S[1]+E[1])/2,O=-(E[1]-S[1])/R,W=(E[0]-S[0])/R;(m-L)*O+(v-D)*W<0&&([O,W]=[-O,-W]),M={mx:L,mz:D,nx:O,nz:W,l:R}});let P=M;P&&([f,_]=[P.mx+P.nx*(h/2+.25),P.mz+P.nz*(h/2+.25)])}let g={id:G("furniture"),type:e,x:z(f),z:z(_),rotation:0,w:u,d:h,h:p,variant:null},y=d?tn({...t,furniture:[...t.furniture,g]},g,this._doc.settings.wall_interior):null;y&&Object.assign(g,{x:z(y.x),z:z(y.z),rotation:y.rotation}),this.change((m,v)=>v.furniture.push(g)),this.selectItem("furniture",g.id),this.showPoint(g.x,g.z)}renderEnergyDevices(){let e=this.isAdmin,t=this._doc.floors.flatMap(n=>n.furniture.filter(r=>ve.includes(r.type)).map(r=>({fl:n,m:r})));return b`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${t.length?b`<div class="fp3d-room-list">
            ${t.map(({fl:n,m:r})=>b`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",r.id),this.showPoint(r.x,r.z)}}
                >
                  <span>${r.name||this.t(`furn_${r.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:k}
      <div class="fp3d-actions">
        ${ve.map(n=>b`<button
            class="fp3d-btn"
            ?disabled=${!e||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(e){let t=this.isAdmin,n=h=>this.updateRoofSection(h),r=e.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[i,s]=e.flip?[r[1],r[0]]:r,a=e.shape==="flat"||e.shape==="parapet",l=e.shape==="pent",c=h=>h.findIndex(p=>p.id===e.id)+1,d=(h,p,f,_=.05,g=0)=>this.num(h,p,y=>f(Math.max(g,z(y))),_,g),u=!!this._doc.settings.lock_plan;return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${e.dormer?this.t("roof_dormer"):this.t("roof_section")} ${c(this._doc.settings.roof.sections??[])}</h3>
          ${t?u?b`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!e.locked})}>
                  ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:k}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!t} @change=${h=>n({shape:h.target.value})}>
            ${ui.map(h=>b`<option value=${h} ?selected=${e.shape===h}>${this.t(`roof_shape_${h}`)}</option>`)}
          </select>
        </label>
        ${a?k:b`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${e.axis==="x"} ?disabled=${!t} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${e.axis==="z"} ?disabled=${!t} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${h=>n({open:h.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${a?d(this.t("roof_height"),e.eave_a,h=>n({eave_a:h,eave_b:h})):b`${d(`${this.t("roof_eave")} ${l?"":i}`,e.eave_a,h=>n({eave_a:h}))}
              ${l?k:d(`${this.t("roof_eave")} ${s}`,e.eave_b,h=>n({eave_b:h}))}
              ${d(`${this.t("roof_pitch_short")} ${l?"":i}`,e.pitch_a,h=>n({pitch_a:Math.min(75,h)}),1,0)}
              ${l?k:d(`${this.t("roof_pitch_short")} ${s}`,e.pitch_b,h=>n({pitch_b:Math.min(75,h)}),1,0)}`}
          ${d(this.t("roof_base"),e.base,h=>n({base:h}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!t}
              @change=${h=>{let p=this._doc.floors.find(g=>g.id===h.target.value);if(!p)return;let f=z(p.elevation+p.height),_=f-e.base;n({base:f,eave_a:z(e.eave_a+_),eave_b:z(e.eave_b+_)})}}
            >
              ${[...this._doc.floors].filter(h=>h.rooms.length).sort((h,p)=>p.elevation-h.elevation).map(h=>b`<option value=${h.id} ?selected=${Do(this._doc,e)?.id===h.id}>${h.name}</option>`)}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${d(this.t("roof_overhang"),e.overhang??this._doc.settings.roof.overhang,h=>n({overhang:Math.min(2,h)}),.05,0)}
        </div>
        ${a&&t?b`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${e.points?b`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:k}
            </div>
            <p class="fp3d-sub">${this.t(e.points?"roof_points_hint":"roof_outline_hint")}</p>`:k}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${Y(this.hass,rn(e),2)} m · ${this.t("roof_section_hint")}</p>
        ${t?b`<div class="fp3d-actions">
              ${a?k:b`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!e.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!a&&!e.dormer&&!e.open?b`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${i}</button>
                  ${l?k:b`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${s}</button>`}`:k}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:k}
      </section>`}fixItem(e,t,n){if(e)switch(t){case"room":return e.rooms.find(r=>r.id===n);case"opening":return e.openings.find(r=>r.id===n);case"furniture":return e.furniture.find(r=>r.id===n);case"device":return e.placements.find(r=>r.entity_id===n);case"wall":return(e.walls??[]).find(r=>r.id===n);case"outdoor":return e.outdoor.find(r=>r.id===n)}}isFixedItem(e,t){return On(this.fixItem(this.floor,e,t),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,t){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let n=!this.isFixedItem(e,t);this.change((r,i)=>{let s=this.fixItem(i,e,t);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&this.change(e=>e.settings.lock_plan=!e.settings.lock_plan)}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(e,t){return!this.isFixedItem(e,t)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,t){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...t),r=f=>e.closest(`[${f}]`)?.getAttribute(f)??null,i=null,s=r("data-device"),a=r("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:r("data-furniture"),c=r("data-free-wall"),d=r("data-outdoor"),u=r("data-room")??this.roomAt(n);if(s?i=["device",s]:a?i=["opening",a]:l?i=["furniture",l]:c?i=["wall",c]:d&&!u?i=["outdoor",d]:u&&(i=["room",u]),!i){this._ctx=null;return}let[h,p]=i;this.selectItem(h,p),(h==="opening"||h==="furniture")&&(this._roomId=this._roomId??u),this._ctx={x:t[0],y:t[1],kind:h,id:p}}deleteItem(e,t){if(e==="device"){if(!this.confirmFixedDelete(e,t))return;this.removeDevice(t),this._deviceId=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return k;let t=this.isFixedItem(e.kind,e.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),r=Math.max(4,Math.min(e.x,(n?.clientWidth??800)-190)),i=Math.max(4,Math.min(e.y,(n?.clientHeight??600)-190)),s=a=>()=>{this._ctx=null,a()};return b`<div class="fp3d-ctx" style=${`left:${r}px;top:${i}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?b`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(e.kind,e.id))}>${t?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:b`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?b`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:k}
      ${e.kind==="furniture"?b`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>`:k}
      <button class="fp3d-ctx-danger" @click=${s(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,t){if(!this.isAdmin)return k;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?b`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:k;let n=this.isFixedItem(e,t);return b`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,t)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(e,t){if(this._notice=null,t&&(this._sideOpen=!0),this._outdoorId=e==="outdoor"?t:null,this._wallId=e==="wall"?t:null,this._edgeHi=null,(e==="outdoor"||e==="wall")&&(this._roomId=null),(e!=="room"||t!==this._roomId)&&(this._vertex=null),this._roomId=e==="room"?t:this._roomId,this._openingId=e==="opening"?t:null,this._furnitureId=e==="furniture"?t:null,this._deviceId=e==="device"?t:null,e==="furniture"&&t&&this._tool==="furniture"&&(this._furnPane="properties"),e==="device"&&t){let n=this.floor?.placements.find(r=>r.entity_id===t);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}e==="opening"&&t&&(this._roomId=this.floor?.openings.find(n=>n.id===t)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(e,t,n,r,i){let s=e.points[t],a=e.points[(t+1)%e.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=((n[0]-s[0])*(a[0]-s[0])+(n[1]-s[1])*(a[1]-s[1]))/l,d=i?.01:this._doc.settings.grid,u=Math.min(r,l)/2;return z(Math.min(l-u,Math.max(u,Math.round(c/d)*d)))}placeOpening(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let r=null;for(let _ of n.walls??[]){let g=Je({room_id:"",edge:0,wall:_.id},n.rooms,n.walls??[]);if(!g)continue;let[y,m]=this.toScreen(_.a),[v,M]=this.toScreen(_.b),w=(v-y)**2+(M-m)**2||1,A=Math.min(1,Math.max(0,((t[0]-y)*(v-y)+(t[1]-m)*(M-m))/w)),P=Math.hypot(t[0]-y-(v-y)*A,t[1]-m-(M-m)*A),S=[(_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2],I=n.rooms.find(E=>E.points.length>=3&&B(S,E.points));P<_n*2.2&&(!r||P-1<r.d)&&(r={room:g.room,edge:0,d:P-1,wall:_.id,roomId:I?.id??_.id})}for(let _ of n.rooms)for(let g=0;g<_.points.length;g++){let[y,m]=this.toScreen(_.points[g]),[v,M]=this.toScreen(_.points[(g+1)%_.points.length]),w=(v-y)**2+(M-m)**2||1,A=Math.min(1,Math.max(0,((t[0]-y)*(v-y)+(t[1]-m)*(M-m))/w)),P=Math.hypot(t[0]-y-(v-y)*A,t[1]-m-(M-m)*A),S=P-(_.id===this._roomId?.5:0);P<_n*2.2&&(!r||S<r.d)&&(r={room:_,edge:g,d:S})}if(!r)return!1;let{room:i,edge:s,wall:a}=r,l=i.points[s],c=i.points[(s+1)%i.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1]),u=Yt[e],h=u.type,p=z(Math.min(u.width,Math.max(.3,d-.1))),f={id:G("opening"),room_id:r.roomId??i.id,edge:s,...a?{wall:a}:{},offset:this.offsetOnEdge(i,s,this.toWorld(...t),p,!1),width:p,type:h,sill:u.sill,height:u.height,hinge:"left",leaves:u.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((_,g)=>g.openings.push(f)),this._tool="select",this.selectItem("opening",f.id),!0}setOpeningPreset(e,t){let n=Yt[t];this._openingPreset=t;let r=Zn(e)===t,i="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:i,...r?{}:{width:n.width}})}updateOpening(e){let t=this._openingId;this.change((n,r)=>Object.assign(r.openings.find(i=>i.id===t),e))}deleteOpening(){let e=this._openingId;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((t,n)=>n.openings=n.openings.filter(r=>r.id!==e)),this._openingId=null)}furnitureFor(e){let t=N(e),n=this.hass?.language??"en",r=[...pn.map(a=>({type:a.id,label:this.t(a.nameKey)})),...(this.packs??[]).flatMap(a=>a.items.map(l=>({type:Ye(a.id,l.id),label:`${Re(l,n)} \xB7 ${a.name}`})))],i=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,s=a=>t==="light"?se(a):t==="climate"?a==="radiator"||a==="air_conditioner"||a==="wall_thermostat"||a==="heat_pump_outdoor"||a==="hot_water_tank":e.startsWith("humidifier.")?a==="humidifier":e.startsWith("water_heater.")?a==="hot_water_tank"||a==="water_heater":e.startsWith("vacuum.")?a==="robot_vacuum":e.startsWith("lawn_mower.")?a==="robot_mower":e.startsWith("siren.")||e.startsWith("alarm_control_panel.")?a==="siren_alarm":t==="binary"&&this.hass?.states[e]?.attributes.device_class==="smoke"?a==="smoke_detector":t==="media"?wt(a)||_t(a)&&i.test(a):_t(a)&&!se(a);return r.filter(a=>s(a.type)).sort((a,l)=>a.label.localeCompare(l.label))}vehicleToSpot(e){if(!this.isAdmin)return;let[t,n,r]=Be("parking"),i={id:G("furniture"),type:"parking",x:e.x,z:e.z,rotation:e.rotation,w:Math.max(t,z(e.w+.5)),d:Math.max(n,z(e.d+.4)),h:r,variant:null,vehicle:e.type,...e.name?{name:e.name}:{}};this.change((s,a)=>{a.furniture=a.furniture.filter(l=>l.id!==e.id),a.furniture.push(i)}),this.selectItem("furniture",i.id)}deviceToFurniture(e,t){if(!this.isAdmin)return;let[n,r,i]=Be(t),s={id:G("furniture"),type:t,x:e.x,z:e.z,rotation:e.rotation??0,w:n,d:r,h:i,variant:null,entity:e.entity_id,name:e.name??null,...e.locked?{locked:!0}:{}};this.change((a,l)=>{l.placements=l.placements.filter(c=>c.entity_id!==e.entity_id),l.furniture.push(s)}),this._deviceId=null,this.selectItem("furniture",s.id)}furnitureToDevice(e){let t=e.entity;if(!this.isAdmin||!t||t==="none")return;let n={entity_id:t,x:e.x,z:e.z,y:null,rotation:e.rotation,...e.name?{name:e.name}:{}};this.change((r,i)=>{i.furniture=i.furniture.filter(s=>s.id!==e.id),i.placements.some(s=>s.entity_id===t)||i.placements.push(n)}),this._furnitureId=null,this.selectItem("device",t)}renderAsFurniture(e){if(!this.isAdmin)return k;let t=this.furnitureFor(e.entity_id);return t.length?b`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${n=>{let r=n.target.value;r&&this.deviceToFurniture(e,r)}}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${t.map(n=>b`<option value=${n.type}>${n.label}</option>`)}
      </select></label
    >`:k}addFurniture(e){let t=this.floor;if(!t||!this.isAdmin)return;let[n,r,i]=Be(e),s=this._doc.floors.filter(h=>h.elevation>t.elevation).sort((h,p)=>h.elevation-p.elevation)[0],a=ft.has(e)?z(s?s.elevation-t.elevation:t.height+.25):i,l=this.room,[c,d]=l?fe(l.points):this.toWorld(this._size.w/2,this._size.h/2),u={id:G("furniture"),type:e,x:z(c),z:z(d),rotation:0,w:n,d:r,h:a,variant:null};this.change((h,p)=>p.furniture.push(u)),this.selectItem("furniture",u.id),this.showPoint(u.x,u.z)}snapToWall(e){return this.floor?tn(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let t=this._furnitureId;this.change((n,r)=>Object.assign(r.furniture.find(i=>i.id===t),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}rotateFurniture(e){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({rotation:((t.rotation+e)%360+360)%360})}deleteFurniture(){let e=this._furnitureId;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((t,n)=>n.furniture=n.furniture.filter(r=>r.id!==e)),this._furnitureId=null)}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:G("furniture"),x:z(e.x+.3),z:z(e.z+.3)};this.change((n,r)=>r.furniture.push(t)),this.selectItem("furniture",t.id)}placeDevices(e){let t=this.room;if(!t||!e.length||!this.isAdmin)return;let n=new Set(e);this.change((r,i)=>{for(let a of r.floors)a.placements=a.placements.filter(l=>!n.has(l.entity_id)),a.furniture=a.furniture.filter(l=>!(se(l.type)&&l.entity&&n.has(l.entity)));let s=[...i.placements.map(a=>[a.x,a.z]),...i.furniture.filter(a=>se(a.type)).map(a=>[a.x,a.z])];for(let a of Wi(t,e,s)){if(!a.entity_id.startsWith("light.")){i.placements.push(a);continue}let[l,c,d]=re.lamp_ceiling;i.furniture.push({id:G("furniture"),type:"lamp_ceiling",x:a.x,z:a.z,rotation:0,w:l,d:c,h:d,variant:null,entity:a.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(e){let t=this._deviceId;this.change((n,r)=>Object.assign(r.placements.find(i=>i.entity_id===t),e))}centreDevice(){let e=this.device,t=e?this.roomAt([e.x,e.z]):null,n=this.floor?.rooms.find(s=>s.id===t);if(!e||!n)return;let[r,i]=fe(n.points);this.updateDevice({x:z(r),z:z(i)})}spreadCeilingLights(e){let t=this.floor;if(!t)return;let n=t.placements.filter(u=>N(u.entity_id)==="light"&&(u.mount??"ceiling")==="ceiling"&&B([u.x,u.z],e.points));if(n.length<2)return;let r=le(e.points),i=r.x1-r.x0,s=r.z1-r.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*i/Math.max(.1,s)))),l=Math.ceil(n.length/a),c=n.map((u,h)=>{let p=Math.floor(h/a),f=p===l-1?n.length-a*(l-1):a,_=h-p*a;return[z(r.x0+i/f*(_+.5)),z(r.z0+s/l*(p+.5))]}),d=n.map(u=>u.entity_id);this.change((u,h)=>{d.forEach((p,f)=>Object.assign(h.placements.find(_=>_.entity_id===p),{x:c[f][0],z:c[f][1]}))})}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,gaps:n}=ho(e.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let r=po(n);this.change((i,s)=>{s.rooms=t,r&&(i.settings.wall_interior=r)}),this._notice=r?this.t("gaps_closed_wall",{n:n.length,t:Y(this.hass,r,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(e){this.change(t=>{for(let n of t.floors)n.placements=n.placements.filter(r=>r.entity_id!==e),n.furniture=n.furniture.filter(r=>!(se(r.type)&&r.entity===e))})}deleteVertex(e){let t=this.room;if(!t||t.points.length<=3)return;let n=t.points.length,r=(e-1+n)%n;this.change((i,s)=>{let a=s.rooms.find(l=>l.id===t.id);a.points.splice(e,1),a.wall_heights&&a.wall_heights.splice(e,1),a.wall_thickness&&a.wall_thickness.splice(e,1),s.openings=s.openings.filter(l=>l.room_id!==t.id||l.wall||l.edge!==e&&l.edge!==r).map(l=>l.room_id===t.id&&!l.wall&&l.edge>e?{...l,edge:l.edge-1}:l)}),this._vertex=null}shiftFloor(e,t){if(!this.isAdmin||!e&&!t)return;let n=i=>[z(i[0]+e),z(i[1]+t)],r=i=>{for(let s of i.rooms)s.points=s.points.map(n);for(let s of i.furniture)s.x=z(s.x+e),s.z=z(s.z+t);for(let s of i.placements)s.x=z(s.x+e),s.z=z(s.z+t);for(let s of i.outdoor)s.points=s.points.map(n);for(let s of i.walls??[])s.a=n(s.a),s.b=n(s.b);i.background&&(i.background.x=z(i.background.x+e),i.background.z=z(i.background.z+t))};this._shiftAll?this.change(i=>{for(let s of i.floors)r(s);this.moveHouseExtras(i,n)}):this.change((i,s)=>r(s)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(e,t){for(let r of e.settings.roof.sections??[]){let i=[t([r.x0,r.z0]),t([r.x1,r.z0]),t([r.x1,r.z1]),t([r.x0,r.z1])];r.x0=Math.min(...i.map(s=>s[0])),r.x1=Math.max(...i.map(s=>s[0])),r.z0=Math.min(...i.map(s=>s[1])),r.z1=Math.max(...i.map(s=>s[1])),r.points&&(r.points=r.points.map(t))}for(let r of e.settings.roof.cables??[])r.points=r.points.map(t);e.energy.meter&&([e.energy.meter.x,e.energy.meter.z]=t([e.energy.meter.x,e.energy.meter.z]));let n=e.settings.roof.hologram;n&&n.place==="free"&&n.x!=null&&n.z!=null&&([n.x,n.z]=t([n.x,n.z]))}turnFloor(){let e=this.floor;if(!e||!this.isAdmin)return;let t=(this._shiftAll?this._doc.floors:[e]).flatMap(c=>c.rooms.flatMap(d=>d.points));if(!t.length)return;let n=t.map(c=>c[0]),r=t.map(c=>c[1]),i=(Math.min(...n)+Math.max(...n))/2,s=(Math.min(...r)+Math.max(...r))/2,a=c=>[z(i-(c[1]-s)),z(s+(c[0]-i))],l=c=>{for(let d of c.rooms)d.points=d.points.map(a);for(let d of c.furniture)[d.x,d.z]=a([d.x,d.z]),d.rotation=(d.rotation+90)%360;for(let d of c.placements)[d.x,d.z]=a([d.x,d.z]),d.rotation=((d.rotation??0)+90)%360;for(let d of c.outdoor)d.points=d.points.map(a);for(let d of c.walls??[])d.a=a(d.a),d.b=a(d.b);c.background&&([c.background.x,c.background.z]=a([c.background.x,c.background.z]),c.background.rotation=((c.background.rotation??0)+90)%360)};this._shiftAll?this.change(c=>{for(let d of c.floors)l(d);this.moveHouseExtras(c,a)}):this.change((c,d)=>l(d))}updateFloor(e){this.change((t,n)=>Object.assign(n,e))}updateRoom(e){let t=this._roomId;this.change((n,r)=>Object.assign(r.rooms.find(i=>i.id===t),e))}setArea(e){let t=this.room;if(!t)return;let n=e?this.hass?.areas?.[e]:void 0,r=!t.name||/^(Raum|Room) \d+$/.test(t.name)||Object.values(this.hass?.areas??{}).some(i=>i.name===t.name);this.updateRoom({area_id:e||null,...n&&r?{name:n.name}:{}})}setRect(e,t){let n=this.room;if(!n||!Number.isFinite(t))return;let r=le(n.points),{x0:i,z0:s,x1:a,z1:l}=r;e==="x"&&([i,a]=[t,t+(a-i)]),e==="z"&&([s,l]=[t,t+(l-s)]),e==="w"&&t>.05&&(a=i+t),e==="d"&&t>.05&&(l=s+t),this.updateRoom({points:[[z(i),z(s)],[z(a),z(s)],[z(a),z(l)],[z(i),z(l)]]})}setPoint(e,t,n){let r=this.room;if(!r||!Number.isFinite(n))return;let i=r.points.map(s=>[...s]);i[e][t]=z(n),this.updateRoom({points:i})}async loadImage(e){this.loadingImages.add(e);try{let t=await Rn(this.hass,e),n=new Image;n.src=t,await n.decode(),this._images={...this._images,[e]:{url:t,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(e){let t=e.target,n=t.files?.[0];if(t.value="",!n)return;let r=await createImageBitmap(n),i=Math.min(1,2048/Math.max(r.width,r.height)),s=document.createElement("canvas");s.width=Math.round(r.width*i),s.height=Math.round(r.height*i),s.getContext("2d").drawImage(r,0,0,s.width,s.height);let a=s.toDataURL("image/jpeg",.85),l=G("img");await Kt(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:s.height/s.width}};let c=this.floor?.rooms.length?le(this.floor.rooms.flatMap(d=>d.points)):null;this.updateFloor({background:{image_id:l,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,z(c.x1-c.x0)):12,opacity:.5}})}chooseTool(e){this._tool=e,this._draft=[],this._cursor=null,this._preview=null,this._sideOpen=e!=="select",e==="furniture"&&(this._furnPane="library"),e==="settings"&&this.selectItem("room",null),this.closeToolMenus()}closeToolMenus(e){for(let t of this.renderRoot.querySelectorAll(".fp3d-tool-menu[open], .fp3d-mobile-tools[open]"))t!==e&&(t.open=!1)}onToolMenuToggle(e){let t=e.currentTarget;t.open&&this.closeToolMenus(t)}render(){let e=this.floor,t=e?ae(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return b`
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
            ${Er.map(n=>{let r=n.tools.includes(this._tool),i=r?this.t(`tool_${this._tool}`):this.t(`tool_group_${n.key}`);if(n.tools.length===1){let s=n.tools[0];return b`<button
                    class="fp3d-toolbar-button fp3d-desktop-tool"
                    aria-pressed=${this._tool===s}
                    ?disabled=${!e&&s!=="settings"||!this.isAdmin&&s!=="select"}
                    @click=${()=>this.chooseTool(s)}
                  >
                    ${i}
                  </button>`}return b`<details class="fp3d-tool-menu fp3d-desktop-tool" @toggle=${this.onToolMenuToggle}>
                  <summary class=${r?"fp3d-active":""} aria-current=${r?"true":k}>${i}<span aria-hidden="true">▾</span></summary>
                  <div class="fp3d-tool-popover" role="group" aria-label=${this.t(`tool_group_${n.key}`)}>
                  ${n.tools.map(s=>b`<button
                      aria-pressed=${this._tool===s}
                      ?disabled=${!e&&s!=="settings"||!this.isAdmin&&s!=="select"}
                      @click=${()=>this.chooseTool(s)}
                    >
                      ${this.t(`tool_${s}`)}
                    </button>`)}
                  </div>
                </details>`})}
            <details class="fp3d-mobile-tools" @toggle=${this.onToolMenuToggle}>
              <summary class="fp3d-toolbar-button fp3d-active">${this.t(`tool_${this._tool}`)}<span aria-hidden="true">▾</span></summary>
              <div class="fp3d-mobile-sheet">
                <div class="fp3d-mobile-sheet-handle" aria-hidden="true"></div>
                <button aria-pressed=${this._tool==="select"} ?disabled=${!e} @click=${()=>this.chooseTool("select")}>${this.t("tool_select")}</button>
                ${Er.map(n=>b`<section>
                    <h3>${this.t(`tool_group_${n.key}`)}</h3>
                    <div>
                      ${n.tools.map(r=>b`<button
                          aria-pressed=${this._tool===r}
                          ?disabled=${!e&&r!=="settings"||!this.isAdmin&&r!=="select"}
                          @click=${()=>this.chooseTool(r)}
                        >
                          ${this.t(`tool_${r}`)}
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
                  >${this._doc.settings.lock_plan?"\u{1F513}":"\u{1F512}"}</button>`:k}
              <button
                class="fp3d-icon-button fp3d-settings-button"
                aria-pressed=${this._tool==="settings"}
                ?disabled=${!this.isAdmin}
                title=${this.t("project_settings")}
                aria-label=${this.t("project_settings")}
                @click=${()=>this.chooseTool("settings")}
              >⚙</button>
            </div>
            ${t?.warnings.length?b`<span class="fp3d-warn" title=${this.t("overlap_warning")} aria-label=${this.t("overlap_warning")}>⚠</span>`:k}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this.houseTool?b`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:k}
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
              ${this.renderBackground(e)} ${this.renderGrid()} ${this.renderGhost()} ${t?this.renderWalls(t.walls):k}
              ${e?this.renderOutdoor(e):k} ${e?this.renderRooms(e):k} ${e?this.renderFurniture(e):k}
              ${e?this.renderFreeWalls(e):k}
              ${e&&t?this.renderOpenings(e,t.walls):k} ${e?this.renderMeter(e):k}
              ${e&&this._tool==="select"?this.renderDevices(e):k}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):k}
              ${e?this.renderOutdoorHandles(e):k}
              ${this.room&&this._tool==="select"?this.renderSplitMarks(this.room):k}
              ${e?this.renderHeadroom(e):k}
              ${this._tool==="roof"?T`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?T`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:k} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${e?this._fixedHint?this.t("fixed_drag_hint"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?b`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:k}
          ${this._split?this.render3d():k}
          </div>
        </div>
        ${this.renderAside(e)}
      </div>
    `}renderBackground(e){let t=e?.background,n=t?this._images[t.image_id]:void 0;if(!t||!n)return k;let[r,i]=this.toScreen([t.x,t.z]),s=t.width*this._view.scale,a=s*n.aspect,l=t.rotation??0,c=this._bgEdit&&this.isAdmin;return T`<g transform="rotate(${l} ${r+s/2} ${i+a/2})">
      <image href=${n.url} x=${r} y=${i} width=${s} height=${a} opacity=${t.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
      ${c?T`<rect class="fp3d-bg-frame" x=${r} y=${i} width=${s} height=${a} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${r+s} cy=${i+a} r="9" />`:k}
    </g>`}bgLocal(e,t,n){let r=e.width*n,i=e.x+e.width/2,s=e.z+r/2,a=-(e.rotation??0)*Math.PI/180,l=t[0]-i,c=t[1]-s;return[i+l*Math.cos(a)-c*Math.sin(a)-e.x,s+l*Math.sin(a)+c*Math.cos(a)-e.z]}renderGrid(){let{scale:e}=this._view,{w:t,h:n}=this._size,r=e>=90?.1:e>=30?.5:1,i=e>=20?1:5,[s,a]=this.toWorld(0,0),[l,c]=this.toWorld(t,n),d=[],u=(f,_)=>{for(let g=Math.ceil(s/f)*f;g<=l;g+=f){let y=this.toScreen([g,0])[0];d.push(T`<line class=${_} x1=${y} y1="0" x2=${y} y2=${n} />`)}for(let g=Math.ceil(a/f)*f;g<=c;g+=f){let y=this.toScreen([0,g])[1];d.push(T`<line class=${_} x1="0" y1=${y} x2=${t} y2=${y} />`)}};r<i&&u(r,"fp3d-grid-minor"),u(i,"fp3d-grid-major");let[h,p]=this.toScreen([0,0]);return d.push(T`<circle class="fp3d-origin" cx=${h} cy=${p} r="3" />`),T`<g pointer-events="none">${d}</g>`}renderGhost(){let e=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,t=e>0?this._doc.floors[e-1]:void 0;return t?T`<g pointer-events="none">${t.rooms.map(n=>T`<polygon class="fp3d-ghost" points=${n.points.map(r=>this.toScreen(r).join(",")).join(" ")} />`)}</g>`:k}renderWalls(e){let t=this.floor?.height??2.5;return T`<g pointer-events="none">${e.map(n=>{let r=n.height!==void 0&&n.height<t-.01,i=`fp3d-wall${n.exterior?" fp3d-wall-ext":""}${r?" fp3d-wall-low":""}`;return T`<polygon class=${i} points=${n.footprint.map(s=>this.toScreen(s).join(",")).join(" ")} />`})}</g>`}edgeParts(e,t){let n=this.floor;if(!n)return[0];let i=ae(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(s=>s.sources.filter(a=>a.room_id===e.id&&a.edge===t).map(a=>a.t0));return i.length?[...new Set(i)].sort((s,a)=>s-a):[0]}setEdgeHeight(e,t,n,r){let i=this.floor;if(!i||!this.isAdmin)return;if(r!==void 0){let l=this.edgeParts(e,t).length;this.change((c,d)=>{let u=d.rooms.find(_=>_.id===e.id);if(!u)return;let h=(u.wall_heights??[]).slice(0,u.points.length);for(;h.length<u.points.length;)h.push(null);let p=h[t],f=Array.isArray(p)?[...p]:new Array(l).fill(typeof p=="number"?p:null);for(;f.length<l;)f.push(null);f[r]=n,h[t]=f.every(_=>_===f[0])?f[0]:f,u.wall_heights=h.every(_=>_===null)?void 0:h});return}let a=ae(i.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},i.walls??[]).walls.filter(l=>l.sources.some(c=>c.room_id===e.id&&c.edge===t)).flatMap(l=>l.sources);a.some(l=>l.room_id===e.id&&l.edge===t)||a.push({room_id:e.id,edge:t,t0:0,t1:0}),this.change((l,c)=>{for(let d of a){let u=c.rooms.find(p=>p.id===d.room_id);if(!u)continue;let h=(u.wall_heights??[]).slice(0,u.points.length);for(;h.length<u.points.length;)h.push(null);h[d.edge]=n,u.wall_heights=h.every(p=>p===null)?void 0:h}})}renderCameraDetections(e){if(!this.hass)return k;let t=this.hass,n=xo(t,e),r=[...new Set(n.map(s=>$o(t,s)))],i=ce("camera_cockpit");return b`<p class="fp3d-sub fp3d-wide">
      ${n.length?b`${i?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:r.map(s=>this.t(`detect_${s}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(e,t,n){if(!this.isAdmin)return;let r=e.points,i=Math.hypot(r[(t+1)%r.length][0]-r[t][0],r[(t+1)%r.length][1]-r[t][1]),s=this.edgeParts(e,t),a=n===void 0?0:s[n],l=n===void 0?i:s[n+1]??i;if(l-a<.4)return;let c=Math.round((a+l)/2*100)/100;this.change((d,u)=>{let h=u.rooms.find(_=>_.id===e.id);if(!h)return;let p=(h.wall_splits??[]).slice(0,h.points.length);for(;p.length<h.points.length;)p.push(null);p[t]=[...p[t]??[],c].sort((_,g)=>_-g),h.wall_splits=p;let f=h.wall_heights?.[t];if(Array.isArray(f)){let _=n??0;f.splice(_+1,0,f[_]??null)}})}moveSplit(e,t,n,r){let i=e.points,s=Math.hypot(i[(t+1)%i.length][0]-i[t][0],i[(t+1)%i.length][1]-i[t][1]),a=this.edgeParts(e,t).filter(c=>Math.abs(c-n)>.001&&c>0),l=Math.max(.1,Math.min(s-.1,Math.round(r*100)/100));a.some(c=>Math.abs(c-l)<.1)&&(l=n),this.change((c,d)=>{let h=d.rooms.find(f=>f.id===e.id)?.wall_splits?.[t];if(!h)return;let p=h.findIndex(f=>Math.abs(f-n)<.001);p>=0&&(h[p]=l),h.sort((f,_)=>f-_)})}joinSplit(e,t,n,r){this.change((i,s)=>{let a=s.rooms.find(d=>d.id===e.id);if(!a?.wall_splits?.[t])return;let l=a.wall_splits[t].filter(d=>Math.abs(d-n)>.001);a.wall_splits[t]=l.length?l:null,a.wall_splits.every(d=>!d)&&(a.wall_splits=void 0);let c=a.wall_heights?.[t];Array.isArray(c)&&(c.splice(r,1),c.every(d=>d===c[0])&&(a.wall_heights[t]=c[0]??null))})}renderSplitMarks(e){let t=e.points;return T`${(e.wall_splits??[]).flatMap((n,r)=>{if(!n||r>=t.length)return[];let i=t[r],s=t[(r+1)%t.length],a=Math.hypot(s[0]-i[0],s[1]-i[1])||1,l=(s[0]-i[0])/a,c=(s[1]-i[1])/a;return n.map(d=>{let[u,h]=this.toScreen([i[0]+l*d,i[1]+c*d]);return T`<line class="fp3d-split-mark" x1=${u-c*7} y1=${h+l*7} x2=${u+c*7} y2=${h-l*7} />`})})}`}renderEdgeHeights(e){let t=this.floor.height,n=e.points.length,r=this._doc.settings,i=new Set;for(let a of ae(this.floor.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},this.floor.walls??[]).walls)if(a.exterior)for(let l of a.sources)l.room_id===e.id&&i.add(l.edge);let s=(a,l)=>this.change((c,d)=>{let u=d.rooms.find(p=>p.id===e.id);if(!u)return;let h=(u.wall_thickness??[]).slice(0,u.points.length);for(;h.length<u.points.length;)h.push(null);h[a]=l,u.wall_thickness=h.every(p=>p===null)?void 0:h});return b`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${e.points.flatMap((a,l)=>{let c=e.points[(l+1)%n],d=Math.hypot(c[0]-a[0],c[1]-a[1]),u=e.wall_heights?.[l]??null,h=()=>this._edgeHi=l,p=()=>this._edgeHi=null,f=this.edgeParts(e,l);return(f.length>1?f.map((g,y)=>y):[void 0]).map(g=>{let y=g===void 0?Array.isArray(u)?u[0]??null:u:Array.isArray(u)?u[g]??null:u,m=g===void 0?d:(f[g+1]??d)-f[g],v=M=>this.setEdgeHeight(e,l,M,g);return b`<div
            class="fp3d-edge-height${l===this._edgeHi?" fp3d-edge-on":""}${y!==null?" fp3d-edge-low":""}"
            @mouseenter=${h}
            @mouseleave=${p}
            @focusin=${h}
            @focusout=${p}
          >
            <span
              ><b>${this.t("wall_n",{a:l+1,b:(l+1)%n+1})}${g===void 0?"":` \xB7 ${this.t("wall_part",{n:g+1})}`}</b><br /><span class="fp3d-muted"
                >${Y(this.hass,m,2)} m</span
              ></span
            >
            ${y===0?b`<span class="fp3d-muted">${this.t("wall_none")}</span>`:this.num(this.t("wall_height"),y??t,M=>v(M>=t-.005?null:Math.max(.05,M)),.05,.05)}
            ${this.isAdmin&&y!==null?b`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>v(null)}>↥</button>`:k}
            ${this.isAdmin&&y!==0?b`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>v(0)}>${this.t("wall_none")}</button>`:k}
            ${this.isAdmin&&m>=.4?b`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(e,l,g)}>✂</button>`:k}
            ${(g===void 0||g===0)&&y!==0?b`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.num(this.t("edge_thickness"),e.wall_thickness?.[l]??(i.has(l)?r.wall_exterior:r.wall_interior),M=>{let w=i.has(l)?r.wall_exterior:r.wall_interior,A=Math.min(1.5,Math.max(.02,Math.round(M*1e3)/1e3));s(l,Math.abs(A-w)<5e-4?null:A)},.01,.02)}
                  ${this.isAdmin&&e.wall_thickness?.[l]!=null?b`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>s(l,null)}>↺</button>`:k}</span
                >`:k}
            ${g!==void 0&&g>0&&(e.wall_splits?.[l]??[]).some(M=>Math.abs(M-f[g])<.001)?b`<span class="fp3d-wide fp3d-split-row"
                  >${this.num(this.t("wall_split_at"),f[g],M=>this.moveSplit(e,l,f[g],M),.05,.1)}
                  ${this.isAdmin?b`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(e,l,f[g],g)}>⨉</button>`:k}</span
                >`:k}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(e){let t=this._outdoorId?e.outdoor.find(n=>n.id===this._outdoorId):void 0;return!t||!this.isAdmin||this._tool!=="select"||this._doc.settings.lock_plan?k:T`${t.points.map((n,r)=>{let[i,s]=this.toScreen(n);return T`<g class="fp3d-vertex" data-out-vertex=${`${t.id}:${r}`}><circle cx=${i} cy=${s} r="16" class="fp3d-hit" /><circle cx=${i} cy=${s} r="6" /></g>`})}`}renderOutdoor(e){return T`<g>${e.outdoor.map(t=>{let n=t.points.map(l=>this.toScreen(l).join(",")).join(" "),[r,i]=this.toScreen(fe(t.points)),s=le(t.points),a=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return T`<g data-outdoor=${t.id} class=${`fp3d-out fp3d-out-${t.type}${t.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?T`<text x=${r} y=${i+4}>${this.t(`out_${t.type}`)}</text>`:k}
      </g>`})}</g>`}renderOutdoorForm(e){let t=this.isAdmin,n=Xt(e.points),r=le(e.points),i=(s,a)=>{let{x0:l,z0:c,x1:d,z1:u}=r;s==="x"&&([l,d]=[a,a+(d-l)]),s==="z"&&([c,u]=[a,a+(u-c)]),s==="w"&&(d=l+Math.max(.1,a)),s==="d"&&(u=c+Math.max(.1,a)),this.updateOutdoor({points:[[l,c],[d,c],[d,u],[l,u]].map(([h,p])=>[z(h),z(p)])})};return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!t} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${_i.map(s=>b`<option value=${s} ?selected=${s===e.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${n?b`${this.num(this.t("x"),r.x0,s=>i("x",s))} ${this.num(this.t("z"),r.z0,s=>i("z",s))}
            ${this.num(this.t("width"),r.x1-r.x0,s=>i("w",s),.01,.1)} ${this.num(this.t("depth"),r.z1-r.z0,s=>i("d",s),.01,.1)}`:k}
        ${Hn(e.type)?this.num(this.t("outdoor_height"),e.height??Wn[e.type],s=>this.updateOutdoor({height:Math.min(6,Math.max(.1,z(s)))}),.05,.1):k}
        ${this.num(this.t("outdoor_offset"),e.offset??0,s=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,z(s)))||null}),.05)}
        ${e.type!=="pool"?b`${this.num(this.t("outdoor_slope"),e.slope??0,s=>this.updateOutdoor({slope:Math.min(20,Math.max(0,z(s)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!t} @change=${s=>this.updateOutdoor({slope_dir:s.target.value})}>
                  ${Bn.map(s=>b`<option value=${s} ?selected=${s===(e.slope_dir??"x")}>${this.t(`slope_${s.replace("-","n")}`)}</option>`)}
                </select></label
              >`:k}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${e.outline!==!1} ?disabled=${!t} @change=${s=>this.updateOutdoor({outline:s.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${e.type==="fence"||e.type==="pergola"?b`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${s=>this.updateOutdoor({open:s.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:k}
        ${e.type==="pergola"?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.bracing} ?disabled=${!t} @change=${s=>this.updateOutdoor({bracing:s.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:k}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!e.cut} ?disabled=${!t} @change=${s=>this.updateOutdoor({cut:s.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${e.slope?b`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>`:k}
      <details class="fp3d-points" ?open=${!n}>
        <summary>${this.t("points")} (${e.points.length})</summary>
        ${e.points.map((s,a)=>b`<div class="fp3d-point">
            <span class="fp3d-muted">${a+1}</span>
            ${this.num(this.t("x"),s[0],l=>this.setOutdoorPoint(a,0,l))} ${this.num(this.t("z"),s[1],l=>this.setOutdoorPoint(a,1,l))}
            ${t?b`<button class="fp3d-btn" title=${this.t("insert_point")} @click=${()=>this.insertOutdoorPoint(a)}>＋</button>
                  <button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>this.deleteOutdoorPoint(a)}>×</button>`:k}
          </div>`)}
      </details>
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${t?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:k}
    </section>`}renderRooms(e){return T`
      <g>${e.rooms.map(t=>{let n=t.points.map(r=>this.toScreen(r).join(",")).join(" ");return T`<polygon data-room=${t.id} class=${`fp3d-room${Ce(t)?" fp3d-room-covered":""}${t.id===this._roomId?" fp3d-room-sel":""}`} points=${n} />`})}</g>
      <g class="fp3d-covered-structure" pointer-events="none">${e.rooms.map(t=>{let n=hs(t);if(!n)return k;let r=Math.max(3,Math.min(8,this._view.scale*(t.kind==="canopy"?.08:.07)));return T`${n.railings.map(({a:i,b:s})=>{let[a,l]=this.toScreen(i),[c,d]=this.toScreen(s);return T`<line class="fp3d-covered-rail" x1=${a} y1=${l} x2=${c} y2=${d} stroke-width=${r} />
            <line class="fp3d-covered-rail-edge" x1=${a} y1=${l} x2=${c} y2=${d} />`})}${n.columns.map(i=>{let[s,a]=this.toScreen(i.at),l=Math.max(6,i.size*this._view.scale),c=Math.max(l,(i.baseSize??i.size)*this._view.scale);return T`<rect class="fp3d-covered-column-base" x=${s-c/2} y=${a-c/2} width=${c} height=${c} />
            <rect class="fp3d-covered-column" x=${s-l/2} y=${a-l/2} width=${l} height=${l} />`})}`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${e.rooms.map(t=>{let[n,r]=this.toScreen(fe(t.points));return T`<text class="fp3d-room-name" x=${n} y=${r-2}>${t.name}</text>
          <text class="fp3d-room-area" x=${n} y=${r+14}>${this.t("area_m2",{a:Y(this.hass,_e(t.points),1)})}</text>`})}</g>
    `}renderEdgeHighlight(){let e=this.room,t=this._edgeHi;if(!e||t===null||t>=e.points.length)return k;let[n,r]=this.toScreen(e.points[t]),[i,s]=this.toScreen(e.points[(t+1)%e.points.length]);return T`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${r} x2=${i} y2=${s} />`}renderMeter(e){let t=this._doc.energy?.meter;if(!t||t.floor_id!==e.id)return k;let[n,r]=this.toScreen([t.x,t.z]);return T`<g class="fp3d-meter" transform="translate(${n} ${r})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(e){let t=this._view.scale;return T`<g>${e.furniture.map(n=>{let r=n.id===this._furnitureId,[i,s]=this.toScreen([n.x,n.z]),a=Math.min(n.w,n.d)*t>44,l=n.rotation*Math.PI/180,c=n.d/2+Math.max(.3,26/t),[d,u]=this.toScreen([n.x-Math.sin(l)*c,n.z+Math.cos(l)*c]),[h,p]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),f=(se(n.type)||n.type==="kitchen_display")&&!!n.entity&&n.entity!=="none"&&this.hass?.states[n.entity]?.state==="on";return T`<g data-furniture=${n.id} class=${`fp3d-furn${r?" fp3d-furn-sel":""}${f?" fp3d-furn-lit":""}${ve.includes(n.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${i} ${s}) rotate(${n.rotation}) scale(${n.mirror?-t:t} ${t})">
          <rect class="fp3d-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="fp3d-furn-sym">${uo(n.type,n.w,n.d)}</g>
          <line class="fp3d-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${a?T`<text x=${i} y=${s+4}>${it(this.hass,n.type)}</text>`:k}
      </g>
      ${r&&this.isAdmin&&!n.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([_,g])=>{let[y,m]=this.toScreen(Cn(n,[_,g]));return T`<g class="fp3d-resize" data-resize=${`${n.id}:${_}:${g}`}>
              <circle cx=${y} cy=${m} r="14" class="fp3d-hit" />
              <rect x=${y-5} y=${m-5} width="10" height="10" rx="2" />
            </g>`}):k}
      ${r?(()=>{let[_,g]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/t),n.z-Math.cos(l)*(n.d/2+18/t)]);return T`<text class="fp3d-dim" x=${_} y=${g+4}>${Y(this.hass,n.w,2)} × ${Y(this.hass,n.d,2)} m</text>`})():k}
      ${r&&n.locked?T`<text class="fp3d-lock" x=${d} y=${u+5}>🔒</text>`:k}
      ${r&&this.isAdmin&&!n.locked?T`<g class="fp3d-rotate" data-rotate=${n.id}>
            <line x1=${h} y1=${p} x2=${d} y2=${u} />
            <circle cx=${d} cy=${u} r="16" class="fp3d-hit" />
            <circle cx=${d} cy=${u} r="8" />
            <path d="M${d-4} ${u-1}a4 4 0 1 1 2 3.5" />
          </g>`:k}`})}</g>`}renderOpenings(e,t){return T`<g>${e.openings.map(n=>{let r=Je(n,e.rooms,e.walls??[]);if(!r)return k;let{room:i,edge:s}=r,a=ar(t,n,r),l=Qe(i,s,n.offset-n.width/2),c=Qe(i,s,n.offset+n.width/2),d=(c[0]-l[0])/(n.width||1),u=(c[1]-l[1])/(n.width||1),h=ee(i.points)>=0?1:-1,p=[-u*h,d*h],f=[.06,.06];a&&(f=a.wall.free||a.wall.roomLeft===i.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]);let _=(A,P)=>this.toScreen([A[0]+p[0]*P,A[1]+p[1]*P]),g=[_(l,f[0]+.01),_(c,f[0]+.01),_(c,-f[1]-.01),_(l,-f[1]-.01)],y=n.id===this._openingId,m=Zt(n,a?.wall.exterior??!1),v=n.type==="door"&&jn(m),M=`fp3d-open fp3d-open-${n.type}${v?" fp3d-open-front":""}${y?" fp3d-open-sel":""}`,w;if(n.type==="garage"){let A=_(l,f[0]-.04),P=_(c,f[0]-.04),S=_(l,f[0]+Math.min(2,n.height)),I=_(c,f[0]+Math.min(2,n.height));w=T`<line x1=${A[0]} y1=${A[1]} x2=${P[0]} y2=${P[1]} />
          <path class="fp3d-open-track" d="M${A[0]} ${A[1]}L${S[0]} ${S[1]}M${P[0]} ${P[1]}L${I[0]} ${I[1]}" />`}else if(n.type==="door"){let A=n.swing==="out",P=A?-f[1]:f[0],S=n.hinge==="left"==h>0,I=n.leaves===2,E=l,R=c,L=[],D=wi(n.width,m,S,n);if(D){let U=j=>j<=.02?l:j>=n.width-.02?c:Qe(i,s,n.offset-n.width/2+j);E=U(D.x0),R=U(D.x1),L=D.panels.map(([j,X])=>[U(j),U(X)])}let O=[(E[0]+R[0])/2,(E[1]+R[1])/2],W=(I?.5:1)*Math.hypot(R[0]-E[0],R[1]-E[1]),H=(f[0]-f[1])/2,V=L.map(([U,j])=>{let X=_(U,H+.035),J=_(j,H+.035),ue=_(U,H-.035),ot=_(j,H-.035);return T`<line class="fp3d-open-pane" x1=${X[0]} y1=${X[1]} x2=${J[0]} y2=${J[1]} /><line class="fp3d-open-pane" x1=${ue[0]} y1=${ue[1]} x2=${ot[0]} y2=${ot[1]} />`}),K=(U,j)=>{let[X,J]=_(U,P),[ue,ot]=_(j,P),Wt=_(U,P+(A?-W:W)),Fr=W*this._view.scale,xs=(Wt[0]-X)*(ot-J)-(Wt[1]-J)*(ue-X);return T`<path d="M${X} ${J}L${Wt[0]} ${Wt[1]}A${Fr} ${Fr} 0 0 ${xs>0?1:0} ${ue} ${ot}" />`};w=T`${V}${m==="passage"?T`<line class="fp3d-open-passage" x1=${_(l,H)[0]} y1=${_(l,H)[1]} x2=${_(c,H)[0]} y2=${_(c,H)[1]} />`:m==="sliding"?T`<line x1=${_(E,P)[0]} y1=${_(E,P)[1]} x2=${_(R,P)[0]} y2=${_(R,P)[1]} />`:I?T`${K(E,O)}${K(R,O)}`:K(S?E:R,S?R:E)}`}else{let A=(f[0]-f[1])/2,P=_(l,A+.035),S=_(c,A+.035),I=_(l,A-.035),E=_(c,A-.035),R=[(l[0]+c[0])/2,(l[1]+c[1])/2],L=_(R,f[0]),D=_(R,-f[1]);w=T`<line x1=${P[0]} y1=${P[1]} x2=${S[0]} y2=${S[1]} /><line x1=${I[0]} y1=${I[1]} x2=${E[0]} y2=${E[1]} />${n.leaves===2?T`<line x1=${L[0]} y1=${L[1]} x2=${D[0]} y2=${D[1]} />`:k}`}return T`<g data-opening=${n.id} class=${M}>
        <polygon class="fp3d-open-gap" points=${g.map(A=>A.join(",")).join(" ")} />
        ${w}
      </g>`})}</g>`}renderDevices(e){return T`<g>${e.placements.map(t=>{let n=N(t.entity_id);if(!n)return k;let[r,i]=this.toScreen([t.x,t.z]),s=this.hass?.states[t.entity_id]?.state==="on",a=t.entity_id===this._deviceId,l=`fp3d-device${s?" fp3d-device-on":""}${a?" fp3d-device-sel":""}`;return T`${n==="camera"?this.renderCameraWedge(t,a):k}<g data-device=${t.entity_id} class=${l} transform="translate(${r} ${i})">
        <title>${Q(this.hass,t.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${Mt(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${a&&t.locked?T`<text class="fp3d-lock" x=${r+16} y=${i-12}>🔒</text>`:k}`})}</g>`}renderCameraWedge(e,t){let n=e.mount==="ceiling",r=e.fov??(n?360:90),i=e.reach??(n?3:4.5),s=(e.rotation??0)*Math.PI/180,a=(v,M)=>this.toScreen([e.x-Math.sin(s+v)*M,e.z+Math.cos(s+v)*M]),[l,c]=this.toScreen([e.x,e.z]),d=Math.min(r,359.9)*Math.PI/180/2,[u,h]=a(-d,i),[p,f]=a(d,i),_=i*this._view.scale,g=r>=360?"":`M${l} ${c}L${u} ${h}A${_} ${_} 0 ${d>Math.PI/2?1:0} 1 ${p} ${f}Z`,[y,m]=a(0,i);return T`<g class="fp3d-wedge ${t?"fp3d-wedge-sel":""}">
      ${r>=360?T`<circle cx=${l} cy=${c} r=${_} />`:T`<path d=${g} />`}
      ${t&&this.isAdmin&&!e.locked?T`<g class="fp3d-rotate" data-aim=${e.entity_id}>
            <line x1=${l} y1=${c} x2=${y} y2=${m} />
            <circle cx=${y} cy=${m} r="16" class="fp3d-hit" />
            <circle cx=${y} cy=${m} r="8" />
            <path d="M${y-4} ${m-1}a4 4 0 1 1 2 3.5" />
          </g>`:k}
    </g>`}renderHandles(e){let t=e.points,n=t.length,r=t.map((s,a)=>{let l=t[(a+1)%n],[c,d]=this.toScreen(s),[u,h]=this.toScreen(l),p=Math.hypot(l[0]-s[0],l[1]-s[1]),f=(c+u)/2,_=(d+h)/2,[g,y]=this.toScreen(fe(t)),m=-(h-d),v=u-c,M=Math.hypot(m,v)||1;m/=M,v/=M,m*(f-g)+v*(_-y)<0&&(m=-m,v=-v);let w=Math.hypot(u-c,h-d);return T`
        ${w>50?T`<text class="fp3d-dim" x=${f+m*16} y=${_+v*16+4}>${Y(this.hass,p,2)} m</text>`:k}
        ${w>36?T`<g data-mid=${a} class="fp3d-mid"><circle cx=${f} cy=${_} r="14" class="fp3d-hit" /><circle cx=${f} cy=${_} r="6" /><path d="M${f-3} ${_}h6M${f} ${_-3}v6" /></g>`:k}
      `}),i=t.map((s,a)=>{let[l,c]=this.toScreen(s);return T`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${c} r="16" class="fp3d-hit" /><circle cx=${l} cy=${c} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${c-9}>${a+1}</text>`});return T`<g>${r}${i}</g>`}renderDraft(){let e=this.drag;if(e?.kind==="freewall"){let[n,r]=this.toScreen(e.start),[i,s]=this.toScreen(e.end),a=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return T`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${n} y1=${r} x2=${i} y2=${s} />
        <text class="fp3d-dim" x=${(n+i)/2} y=${(r+s)/2-10}>${Y(this.hass,a,2)} m</text>
      </g>`}if(e?.kind==="rect"){let[n,r]=this.toScreen(e.start),[i,s]=this.toScreen(e.end),a=Math.abs(e.end[0]-e.start[0]),l=Math.abs(e.end[1]-e.start[1]);return T`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(n,i)} y=${Math.min(r,s)} width=${Math.abs(i-n)} height=${Math.abs(s-r)} />
        <text class="fp3d-dim" x=${(n+i)/2} y=${Math.min(r,s)-8}>${Y(this.hass,a,2)} × ${Y(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure")return k;let t=[...this._draft,...this._cursor?[this._cursor]:[]].map(n=>this.toScreen(n));return T`<g pointer-events="none">
      ${t.length>1?T`<polyline class="fp3d-draft" points=${t.map(n=>n.join(",")).join(" ")} />`:k}
      ${this._tool==="measure"?this._draft.slice(1).map((n,r)=>{let i=this.toScreen(this._draft[r]),s=this.toScreen(n);return T`<text class="fp3d-dim" x=${(i[0]+s[0])/2} y=${(i[1]+s[1])/2-6}>${Y(this.hass,Math.hypot(n[0]-this._draft[r][0],n[1]-this._draft[r][1]),2)} m</text>`}):k}
      ${this._draft.map((n,r)=>{let[i,s]=this.toScreen(n);return T`<circle class=${r===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${i} cy=${s} r=${r===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?T`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:k}
    </g>`}renderGuides(){let e=this._guides,{w:t,h:n}=this._size;return T`<g pointer-events="none">
      ${e.x!==void 0?T`<line class="fp3d-guide" x1=${this.toScreen([e.x,0])[0]} y1="0" x2=${this.toScreen([e.x,0])[0]} y2=${n} />`:k}
      ${e.z!==void 0?T`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,e.z])[1]} x2=${t} y2=${this.toScreen([0,e.z])[1]} />`:k}
      ${e.point?T`<circle class="fp3d-snap" cx=${this.toScreen(e.point)[0]} cy=${this.toScreen(e.point)[1]} r="9" />`:k}
    </g>`}num(e,t,n,r=.01,i){return b`<label class="fp3d-field"
      >${e}
      <input
        type="number"
        inputmode="decimal"
        step=${r}
        min=${i??k}
        .value=${String(z(t))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
    /></label>`}selectFrom3d(e,t){this.selectItem(e,t),this._sideOpen=!1}setSidePinned(e){this._sidePinned=e,this._sideOpen=!1;try{localStorage.setItem("neonplan3d.sidePinned",e?"1":"0")}catch{}}renderAside(e){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?b`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(e)}
      </aside>`:b`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this._furnitureId||this._deviceId||this._openingId?b`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>✎</button>`:k}
        <button class="fp3d-strip-btn" title=${this.t("tool_furniture")} @click=${()=>this.chooseTool("furniture")}>🛋</button>
        <button class="fp3d-strip-btn" title=${this.t("tool_opening")} @click=${()=>this.chooseTool("opening")}>🚪</button>
        ${this.isAdmin?b`<button class="fp3d-strip-btn" title=${this.t("tool_settings")} @click=${()=>this.chooseTool("settings")}>⚙</button>`:k}
      </aside>`:b`<aside class="fp3d-side">${this.renderPinRow()}${this.renderSide(e)}</aside>`}renderPinRow(e=!1){return!this._split||this.narrow?k:b`<div class="fp3d-pin-row">
      ${e?b`<button class="fp3d-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:k}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(e){let t=this._doc?.floors??[],n=this.room,r=this.isAdmin,i=Object.values(this.hass?.areas??{}).sort((a,l)=>a.name.localeCompare(l.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="settings"&&r)return this.renderProjectPanel(e);if(this._tool==="furniture"&&e&&r)return this.renderFurniturePanel();let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return s?b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${s}`:n&&this._tool!=="measure"?b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,i)} ${this.renderDeviceList(n)}`:b`
      ${r?k:b`<p class="fp3d-note">${this.t("read_only")}</p>`}
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
          ${r?b`<button
                class="fp3d-btn"
                aria-expanded=${this._floorMenu}
                @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:this.addFloor()}
              >
                + ${this.t("add_floor")}
              </button>`:k}
        </div>
        ${r&&this._floorMenu?b`<div class="fp3d-floor-menu">
              <p class="fp3d-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(a=>b`<button class="fp3d-btn" @click=${()=>this.addFloor(a)}>
                  ${a.name}${a.level!=null?b` <span class="fp3d-sub">· ${this.t("level",{n:a.level})}</span>`:k}
                </button>`)}
              <button class="fp3d-btn" @click=${()=>this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`:k}
        ${e?b`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${e.name} ?disabled=${!r} @change=${a=>this.updateFloor({name:a.target.value})}
              /></label>
              ${this.num(this.t("elevation"),e.elevation,a=>this.updateFloor({elevation:a}))}
              ${r?b`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${a=>this._shiftX=Number(a.target.value)||0} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${a=>this._shiftZ=Number(a.target.value)||0} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${a=>this._shiftAll=a.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:k}
              ${this.num(this.t("height"),e.height,a=>this.updateFloor({height:Math.max(1,a)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?b`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!r} @change=${a=>this.updateFloor({ha_floor:a.target.value||null})}>
                      <option value="" ?selected=${!e.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(a=>a.floor_id===e.ha_floor||!t.some(l=>l.ha_floor===a.floor_id)).map(a=>b`<option value=${a.floor_id} ?selected=${a.floor_id===e.ha_floor}>${a.name}</option>`)}
                    </select></label
                  >`:k}
              ${r&&this.unplacedAreas(e).length?b`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(e)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(e).length})}
                    </button>
                  </div>`:k}
              ${r?b`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${e.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                  </div>
                  ${this._notice?b`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:k}`:k}
            </div>`:k}
      </section>
      ${this._tool==="measure"&&e?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?b`${this.renderRoomForm(n,i)} ${this.renderDeviceList(n)}`:e?this.renderRoomList(e):k}
    `}renderFurniturePanel(){let e=this.furnitureItem,t=ms(this._furnPane,!!e);return b`
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
      ${this.renderSettings()} ${e?this.renderBackgroundForm(e):k} ${this.renderStartView()} ${this.renderFavorites()}
      ${k} ${this.renderBackup()}
    `}renderRoomList(e){return e.rooms.length?b`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${e.rooms.map(t=>b`<button class="fp3d-row" @click=${()=>this.selectItem("room",t.id)}>
            <span>${t.name}</span><span class="fp3d-muted">${this.t("area_m2",{a:Y(this.hass,_e(t.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:k}renderRoomForm(e,t){let n=this.isAdmin,r=Ce(e),i=Xt(e.points),s=le(e.points);return b`<section>
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
        ${r?b`<label class="fp3d-field fp3d-wide"
              >${this.t("outdoor_type")}
              <select ?disabled=${!n} @change=${a=>this.updateRoom({kind:a.target.value})}>
                ${["veranda","balcony","canopy"].map(a=>b`<option value=${a} ?selected=${a===e.kind}>${this.t(`out_${a}`)}</option>`)}
              </select></label
            >`:k}
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${a=>this.updateRoom({floor_material:a.target.value})}>
            ${mi.map(a=>b`<option value=${a} ?selected=${a===e.floor_material}>${this.t(`mat_${a}`)}</option>`)}
          </select></label
        >
        ${i?b`${this.num(this.t("x"),s.x0,a=>this.setRect("x",a))} ${this.num(this.t("z"),s.z0,a=>this.setRect("z",a))}
            ${this.num(this.t("width"),s.x1-s.x0,a=>this.setRect("w",a),.01,.05)}
            ${this.num(this.t("depth"),s.z1-s.z0,a=>this.setRect("d",a),.01,.05)}`:k}
        ${r?b`${e.kind==="veranda"?b`<label class="fp3d-field fp3d-wide"
                      >${this.t("outdoor_roof_style")}
                      <select ?disabled=${!n} @change=${a=>this.updateRoom({roof_style:a.target.value})}>
                        ${["solid","glass","tile"].map(a=>b`<option value=${a} ?selected=${a===(e.roof_style??"solid")}>${this.t(`outdoor_roof_${a}`)}</option>`)}
                      </select></label
                    >`:k}
              ${this.num(this.t("outdoor_height"),e.height??this.floor?.height??2.5,a=>this.updateRoom({height:Math.min(6,Math.max(.1,z(a)))}),.05,.1)}
              ${e.kind!=="balcony"?b`${this.num(this.t("outdoor_slope"),e.slope??0,a=>this.updateRoom({slope:Math.min(20,Math.max(0,z(a)))||null}),.05,0)}
                    <label class="fp3d-field"
                      >${this.t("outdoor_slope_dir")}
                      <select ?disabled=${!n} @change=${a=>this.updateRoom({slope_dir:a.target.value})}>
                        ${Bn.map(a=>b`<option value=${a} ?selected=${a===(e.slope_dir??"x")}>${this.t(`slope_${a.replace("-","n")}`)}</option>`)}
                      </select></label
                    >`:k}
              <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
                ><input type="checkbox" .checked=${e.open!==!1} ?disabled=${!n} @change=${a=>this.updateRoom({open:a.target.checked})} />
                ${this.t("outdoor_open")}</label
              >
              ${e.kind==="veranda"||e.kind==="balcony"||e.kind==="canopy"?b`<label class="fp3d-check fp3d-wide"
                      ><input type="checkbox" .checked=${e.railing!==!1} ?disabled=${!n} @change=${a=>this.updateRoom({railing:a.target.checked})} />
                      ${this.t(e.kind==="canopy"?"outdoor_yard_enclosure":"outdoor_railing")}</label
                    >
                    ${e.kind!=="canopy"?this.num(this.t("outdoor_columns"),e.columns??2,a=>this.updateRoom({columns:Math.min(12,Math.max(0,Math.round(a)))}),1,0):k}`:k}
              ${this.num(this.t("outdoor_column_size"),e.column_size??(e.kind==="canopy"?.12:.32),a=>this.updateRoom({column_size:Math.min(.8,Math.max(.08,z(a)))}),.02,.08)}`:k}
      </div>
      ${r?k:this.renderEdgeHeights(e)} ${this.renderRoomClimate(e)}
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${e.points.length})</summary>
        ${e.points.map((a,l)=>b`<div class="fp3d-point ${l===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${l+1}</span>
            ${this.num(this.t("x"),a[0],c=>this.setPoint(l,0,c))} ${this.num(this.t("z"),a[1],c=>this.setPoint(l,1,c))}
            ${n?b`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>this.deleteVertex(l)}>
                  ×
                </button>`:k}
          </div>`)}
      </details>
      ${n?b`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(e)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:k}
      ${this._spots?this.renderSpotForm(e):k}
      ${this._packages?b`<div class="fp3d-packages">
            ${ds.map(a=>b`<button class="fp3d-btn" @click=${()=>this.applyPackage(e,a)}>
                <b>${this.t(`pkg_${a}`)}</b><span>${this.t(`pkg_${a}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:k}
    </section>`}applyPackage(e,t){if(!this.isAdmin)return;let n=us(e,t,()=>G("furniture"),this.floor?.furniture??[]);this.change((r,i)=>i.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(e){let t=le(e.points),n=this.hass?Fe(this.hass,e.area_id).filter(r=>r.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((t.z1-t.z0)/1.2)),cols:Math.max(1,Math.round((t.x1-t.x0)/1.2)),entity:n[0]??null}}placeSpots(e){let t=this._spots;if(!t||!this.isAdmin)return;let[n,r,i]=re[t.type],s=Kn(e,t.rows,t.cols).map(([a,l])=>({id:G("furniture"),type:t.type,x:a,z:l,rotation:0,w:n,d:r,h:i,variant:null,entity:t.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(e){let t=this._spots,n=Kn(e,t.rows,t.cols).length,r=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),i=s=>this._spots={...t,...s};return b`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${s=>i({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>b`<option value=${s} ?selected=${s===t.type}>${this.t(`furn_${s}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),t.cols,s=>i({cols:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.num(this.t("spots_rows"),t.rows,s=>i({rows:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),t.entity,void 0,r,s=>i({entity:s==="none"?null:s}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(e)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}iconInput(e,t){let n=e?e.startsWith("mdi:")?e:`mdi:${e}`:"";return b`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!this.isAdmin} @change=${r=>t(r.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?Xr(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):k}
      </span></label
    >`}markerSelect(e,t){return b`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>t(n.target.value||null)}>
        <option value="" ?selected=${!e}>${this.t("marker_show_auto")}</option>
        ${di.map(n=>b`<option value=${n} ?selected=${n===e}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(e){let t=n=>{let r=this.hass?.entities?.[n],i=r?.area_id??(r?.device_id?this.hass?.devices?.[r.device_id]?.area_id:null);return i?this.hass?.areas?.[i]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(e).map(n=>({id:n,label:`${Q(this.hass,n)}${t(n)?` \xB7 ${t(n)}`:""}`})).sort((n,r)=>n.label.localeCompare(r.label))}entitySelect(e,t,n,r,i){let s=n===void 0?null:n?this.t("entity_auto",{name:Q(this.hass,n)}):this.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:this.t("entity_none")}];return b`<label class="fp3d-field fp3d-wide"
      >${e}
      <fp3d-entity-picker
        .options=${r}
        .fixed=${a}
        .value=${t===null?s!==null?"__auto":"none":t}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${c=>{c.stopPropagation(),i(c.detail.value==="__auto"?null:c.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(e){let t=this.floor,n=t?Je(e,t.rooms,t.walls??[]):null;if(!t||!n)return!1;let r=ae(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]);return ar(r.walls,e,n)?.wall.exterior??!1}renderSidelightFields(e){if(e.type!=="door")return k;let t=Zt(e,this.openingIsExterior(e));if(t!=="sidelight"&&t!=="sidelights")return k;let n=this.isAdmin,r=(i,s)=>b`<label class="fp3d-field"
      >${this.t(s)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${e[i]==null?"":String(e[i])}
        ?disabled=${!n}
        @change=${a=>{let l=Number(a.target.value);this.updateOpening({[i]:Number.isFinite(l)&&l>0?Math.min(3,Math.max(.1,Math.round(l*100)/100)):null})}}
      />
    </label>`;return t==="sidelight"?b`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!e.sidelight_hinge} ?disabled=${!n} @change=${i=>this.updateOpening({sidelight_hinge:i.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${r("sidelight_width","sidelight_width")}`:b`${r("sidelight_width","sidelight_width_left")} ${r("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(e){let t=e.type==="door"?Un:Gn,n=Zt({type:e.type,style:null},this.openingIsExterior(e)),r=e.style&&t.includes(e.style)?e.style:"";return b`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${i=>this.updateOpening({style:i.target.value||null})}>
        <option value="" ?selected=${!r}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${t.map(i=>b`<option value=${i} ?selected=${i===r}>${this.t(`style_${i}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(e){let t=this.isAdmin,n=e.type==="window",r=e.type==="garage",i=_=>{if(!this.hass)return null;let g=structuredClone(this._doc.floors);for(let y of g)for(let m of y.openings)m.id===e.id&&(m[_]=null);return Hi(this.hass,g).get(e.id)?.[_]??null},s=_=>this.hass?.states[_]?.attributes.device_class,a=this.entityOptions(_=>_.startsWith("cover.")),l=this.entityOptions(_=>/^(sensor|number|input_number)\./.test(_)&&Number.isFinite(Number(this.hass?.states[_]?.state))),c=this.entityOptions(_=>_.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(_)??"")||oe(_)&&tr(this.hass?.states[_])!==null),d=this.entityOptions(_=>{let g=this.hass?.states[_];return _.startsWith("binary_sensor.")?typeof g?.attributes.window_state=="string":oe(_)&&(tr(g)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${_} ${Q(this.hass,_)}`))}),u=this.entityOptions(_=>_.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(_)??"")),h=_=>{let g=_===1,y=g?e.tilt:e.tilt2??null,m=g?e.contact:e.contact2,v=(g?e.sensor:e.sensor2)??(y&&y!=="none"?"contact_tilt":"contact"),M=w=>this.updateOpening(g?{contact:w}:{contact2:w==="none"?null:w});return b`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!t}
            @change=${w=>{let A=w.target.value,P=A==="contact_tilt"?{}:g?{tilt:null}:{tilt2:null};this.updateOpening({...g?{sensor:A}:{sensor2:A},...P})}}
          >
            ${["contact","handle","contact_tilt"].map(w=>b`<option value=${w} ?selected=${w===v}>${this.t(`sensor_kind_${w}`)}</option>`)}
          </select></label
        >
        ${v==="handle"?this.entitySelect(this.t("handle_entity"),m,void 0,d,w=>M(w==="none"?g?"none":null:w)):this.entitySelect(this.t("contact_entity"),m,g?i("contact"):void 0,u,M)}
        ${v==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),y,void 0,c,w=>this.updateOpening(g?{tilt:w==="none"?null:w}:{tilt2:w==="none"?null:w})):k}
        ${g?b`${this.entitySelect(this.t("tilt_angle_entity"),e.tilt_angle??null,void 0,this.entityOptions(w=>oe(w)),w=>this.updateOpening({tilt_angle:w==="none"?null:w}))}
            ${e.tilt_angle&&e.tilt_angle!=="none"?b`${this.num(this.t("tilt_angle_max"),e.tilt_max??15,w=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,w))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),e.tilt_offset??0,w=>this.updateOpening({tilt_offset:w}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!e.tilt_invert} ?disabled=${!t} @change=${w=>this.updateOpening({tilt_invert:w.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:k}`:k}`},p=Zn(e),f=e.type==="door";return b`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${p}`)}</h3>${this.fixButton("opening",e.id)}</div>
      ${t?b`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(Yt).map(_=>b`<button class="fp3d-chip" aria-pressed=${_===p} @click=${()=>this.setOpeningPreset(e,_)}>${this.t(`preset_${_}`)}</button>`)}
          </div>`:k}
      ${t&&!r?b`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:e.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(e.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${f?b`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:e.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:k}
          </div>`:k}
      <div class="fp3d-form">
        ${this.num(this.t("width"),e.width,_=>this.updateOpening({width:Math.max(.3,_)}),.01,.3)}
        ${this.num(this.t("opening_position"),e.offset,_=>this.updateOpening({offset:Math.max(0,_)}),.01,0)}
        ${n?this.num(this.t("sill"),e.sill,_=>this.updateOpening({sill:Math.max(0,_)}),.01,0):k}
        ${this.num(this.t("opening_height"),e.height,_=>this.updateOpening({height:Math.max(.3,_)}),.01,.3)}
        ${r?k:this.renderStyleSelect(e)}
        ${this.renderSidelightFields(e)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${_=>this.updateOpening({mark:_.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${e.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${e.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${r?k:b`<label class="fp3d-field fp3d-wide"
          >${this.t(e.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!t} @change=${_=>this.updateOpening({hinge:_.target.value})}>
            <option value="left" ?selected=${e.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${e.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||r||f?this.entitySelect(this.t(n?"cover_entity":"door_cover"),e.cover,i("cover"),a,_=>this.updateOpening({cover:_})):k}
        ${(n||r||f)&&e.cover!=="none"&&(e.cover||i("cover"))?b`${this.entitySelect(this.t("cover_position_entity"),e.position??null,void 0,l,_=>this.updateOpening({position:_==="none"?null:_}))}
              ${e.position?b`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!t}
                      .checked=${!!e.position_inverted}
                      @change=${_=>this.updateOpening({position_inverted:_.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:k}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!t} .checked=${!!e.confirm} @change=${_=>this.updateOpening({confirm:_.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:k}
        ${n?b`${e.leaves===2?b`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:k}
              ${h(1)} ${e.leaves===2?b`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${h(2)}`:k}`:b`${this.entitySelect(this.t(e.leaves===2?"contact_main":"contact_entity"),e.contact,i("contact"),c,_=>this.updateOpening({contact:_}))}
              ${e.leaves===2&&!r?this.entitySelect(this.t("contact_second"),e.contact2,void 0,c,_=>this.updateOpening({contact2:_==="none"?null:_})):k}
              ${f?b`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!e.shut} ?disabled=${!t} @change=${_=>this.updateOpening({shut:_.target.checked})} />
                    ${this.t("door_shut")}</label
                  >`:k}`}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":r?"garage_hint":"door_hint")}</p>
      ${t?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:k}
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
            >`:k}
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!t} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${pn.map(n=>b`<option value=${n.id} ?selected=${n.id===e.type}>${this.t(n.nameKey)}</option>`)}
            ${(this.packs??[]).map(n=>b`<optgroup label=${n.name}>
                ${n.items.map(r=>{let i=Ye(n.id,r.id);return b`<option value=${i} ?selected=${i===e.type}>${Re(r,this.hass?.language??"en")}</option>`})}
              </optgroup>`)}
            ${e.type.startsWith("pack:")&&!(this.packs??[]).some(n=>e.type.startsWith(`pack:${n.id}:`))?b`<option value=${e.type} selected>${it(this.hass,e.type)}</option>`:k}
          </select></label
        >
        ${this.num(this.t("x"),e.x,n=>this.updateFurniture({x:n}))} ${this.num(this.t("z"),e.z,n=>this.updateFurniture({z:n}))}
        ${this.num(this.t("width"),e.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("depth"),e.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("height_m"),e.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),e.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${se(e.type)?k:b`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!e.mirror} ?disabled=${!t} @change=${n=>this.updateFurniture({mirror:n.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${e.type==="led_strip"?b`${this.num(this.t("strip_tilt"),e.tilt??0,n=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(n)))}),5)}
              <label class="fp3d-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!e.upright} ?disabled=${!t} @change=${n=>this.updateFurniture({upright:n.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:k}
        ${Nn(e)&&this.floor?b`${this.num(this.t("mount_height"),e.mount_y??Pn(this.floor,e),n=>this.updateFurniture({mount_y:Math.max(0,n)}),.01,0)}
              ${e.mount_y!=null?b`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!t} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:k}`:k}
      </div>
      ${ft.has(e.type)&&e.type!=="stairs_landing"?b`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:k}
      ${e.type==="stairs_landing"?b`<p class="fp3d-sub">${this.t("stairs_landing_hint")}</p>`:k}
      ${e.type==="stairwell"?b`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&fo(gt(e),n.points))?b`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:k}`:k}
      ${e.type==="inverter"||e.type==="home_battery"?b`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${(e.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(n=>b`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`${e.type==="inverter"?"inverter":"battery"}_${n||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:k}
      ${e.type==="lamp_pendant"?b`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>b`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:k}
      ${e.type==="fan_ceiling"||e.type==="fan_ceiling_light"?b`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("fan_blades")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["3","4","5"].map(n=>b`<option value=${n} ?selected=${(e.variant??"5")===n}>${this.t(`fan_blades_${n}`)}</option>`)}
              </select></label
            >
          </div>`:k}
      ${_t(e.type)?this.renderFurnitureLinks(e):k} ${e.type==="parking"?this.renderParkingForm(e):k}
      ${(qe.includes(e.type)||ne(e.type)?.vehicle)&&this.isAdmin?b`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this.vehicleToSpot(e)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:k}
      ${t?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            ${e.entity&&e.entity!=="none"&&e.type!=="parking"?b`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(e)}>${this.t("as_device")}</button>`:k}
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:k}
    </section>`}setEnergy(e){let t=structuredClone(this._doc);t.energy={...t.energy,...e},this.setDoc(t)}async importEnergyPrefs(){if(!this.hass)return;let e;try{e=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let t=ns(this.hass,e),n=0,r=s=>this._doc.floors.flatMap(a=>a.furniture).find(a=>a.type===s),i=(s,a,l)=>{if(!l)return;let c=r(s);if(!c&&this.floor&&(this.addEnergyDevice(s),c=r(s)),!c||c[a]&&c[a]!=="none")return;let d=c.id;this.change(u=>{let h=u.floors.flatMap(p=>p.furniture).find(p=>p.id===d);h&&(h[a]=l)}),n++};i("meter","power",t.grid),i("inverter","power",t.solar),i("home_battery","power",t.battery),i("home_battery","soc",t.battery_soc),this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let e=this._doc.energy,t=this.isAdmin,n=(f,_)=>this.hass?.states[f]?.attributes[_],r=this.entityOptions(f=>this.isPowerSensor(f)),i=this.entityOptions(f=>oe(f)&&n(f,"device_class")==="battery"),s=this.entityOptions(f=>oe(f)&&(n(f,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(f,"unit_of_measurement")??""))),a=f=>_=>this.setEnergy({[f]:_==="none"?null:_}),l=this.hass?$t(this.hass,this._doc.floors):new Map,c=yr(this._doc,f=>this.devicePower(f,l)),d=this.hass?rs(this.hass,this._doc,[],c):null,u=!!d&&(d.solar??0)<20,h=u&&d.grid!==null&&d.grid<-50,p=u&&d.battery!==null&&d.battery<-50&&(d.grid??0)<=0;return b`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${h?b`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.setEnergy({grid_invert:!e.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:k}
      ${p?b`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.setEnergy({battery_invert:!e.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:k}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),e.grid,c.grid,r,a("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.grid_invert} ?disabled=${!t} @change=${f=>this.setEnergy({grid_invert:f.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),e.solar,c.solar[0]??null,r,a("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),e.battery,c.battery[0]??null,r,a("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.battery_invert} ?disabled=${!t} @change=${f=>this.setEnergy({battery_invert:f.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),e.battery_soc,c.soc[0]??null,i,a("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),e.consumption,null,r,a("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),e.tariff,void 0,s,a("tariff"))}
      </div>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!t||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?b`<p class="fp3d-sub">${this._energyNote}</p>`:k}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderHeadroom(e){let t=e.elevation+e.height;if(!(this._doc.settings.roof.sections??[]).some(i=>!i.open&&i.base<t-.05))return k;let r={settings:this._doc.settings};return T`${[1.5,2].map(i=>Ro(r,e.elevation,i).map(([s,a])=>{let[l,c]=this.toScreen(s),[d,u]=this.toScreen(a);return T`<line class="fp3d-headroom" x1=${l} y1=${c} x2=${d} y2=${u} />
          <text class="fp3d-headroom-label" x=${(l+d)/2} y=${(c+u)/2-4}>${Y(this.hass,i,1)} m</text>`}))}`}renderFavorites(){let e=this._doc.settings.favorites??[],t=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(s=>t.includes(s.split(".")[0])&&!e.includes(s)),r=s=>this.change(a=>a.settings.favorites=s.length?s:void 0),i=(s,a)=>{let l=[...e],[c]=l.splice(s,1);l.splice(Math.max(0,Math.min(l.length,s+a)),0,c),r(l)};return b`<details class="fp3d-section">
      <summary>${this.t("favorites")}${e.length?b` <span class="fp3d-lib-count">${e.length}</span>`:k}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${e.map((s,a)=>b`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${Q(this.hass,s)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${a===0} @click=${()=>i(a,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${a===e.length-1} @click=${()=>i(a,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>r(e.filter(l=>l!==s))}>✕</button>
        </div>`)}
      ${e.length<40?b`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,s=>{s&&s!=="none"&&!e.includes(s)&&r([...e,s])})}
          </div>`:k}
      ${this.renderOwnButtons()} ${this.renderMediaPresets()}
    </details>`}renderMediaPresets(){let e=this._doc.settings.media_presets??[],t=r=>this.change(i=>i.settings.media_presets=r.length?r:void 0),n=(r,i)=>t(e.map((s,a)=>a===r?{...s,...i}:s));return b`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"].map(r=>b`<option value=${r}></option>`)}
      </datalist>
      ${e.map((r,i)=>b`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${r.label} @change=${s=>n(i,{label:s.target.value.trim()||"Radio"})}
          /></label>
          <label class="fp3d-field" title=${this.t("preset_type_hint")}
            >${this.t("preset_type")}
            <input type="text" list="fp3d-preset-types" .value=${r.type} @change=${s=>n(i,{type:s.target.value.trim()||"music"})}
          /></label>
          <label class="fp3d-field fp3d-wide" title=${this.t("preset_content_hint")}
            >${this.t("preset_content")}
            <input type="text" .value=${r.content} placeholder="https://… · spotify:playlist:… · Rock Antenne" @change=${s=>n(i,{content:s.target.value.trim()})}
          /></label>
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn fp3d-danger" @click=${()=>t(e.filter((s,a)=>a!==i))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${e.length<30?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>t([...e,{id:G("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:k}`}renderOwnButtons(){let e=this._doc.settings.buttons??[],t=i=>this.change(s=>s.settings.buttons=i.length?i:void 0),n=(i,s)=>t(e.map((a,l)=>l===i?{...a,...s}:a)),r={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""};return b`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${e.map((i,s)=>b`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${i.label} @change=${a=>n(s,{label:a.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${a=>n(s,{action:a.target.value})}>
              ${hi.map(a=>b`<option value=${a} ?selected=${a===i.action}>${this.t(`own_action_${a}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(i.icon??null,a=>n(s,{icon:a}))}
          ${i.action!=="fire_dom_event"?b`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${i.action}`)}
                <input type="text" .value=${i.target??""} placeholder=${r[i.action]} @change=${a=>n(s,{target:a.target.value.trim()||null})}
              /></label>`:k}
          ${i.action==="service"||i.action==="fire_dom_event"?b`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${i.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${i.data?JSON.stringify(i.data,null,1):""}
                  @change=${a=>{a.target.setCustomValidity("");let l=a.target.value.trim();if(!l)return n(s,{data:null});try{let c=JSON.parse(l);c&&typeof c=="object"&&!Array.isArray(c)&&n(s,{data:c})}catch{a.target.setCustomValidity(this.t("own_data_bad")),a.target.reportValidity()}}}
                ></textarea></label
              >`:k}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${s===0} @click=${()=>t([...e.slice(0,s-1),i,e[s-1],...e.slice(s+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>t(e.filter((a,l)=>l!==s))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${e.length<20?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>t([...e,{id:G("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:k}`}renderStartView(){let e=this._doc.settings.start_view??null,t=()=>{let r=this.renderRoot.querySelector("fp3d-view3d")?.currentView();r&&this.change(i=>i.settings.start_view={theta:z(r.theta),phi:z(r.phi),radius:z(r.radius)})};return b`<details class="fp3d-section">
      <summary>${this.t("start_view")}</summary>
      <p class="fp3d-sub">${this.t("start_view_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" @click=${t}>${this.t("start_view_set")}</button>
        ${e?b`<button class="fp3d-btn" @click=${()=>this.change(n=>n.settings.start_view=null)}>${this.t("start_view_reset")}</button>`:k}
      </div>
      ${e?b`<p class="fp3d-sub">${this.t("start_view_saved")}</p>
            <p class="fp3d-sub">${this.t("start_view_card")}</p>
            <code class="fp3d-code">start_view: { theta: ${e.theta}, phi: ${e.phi}, radius: ${e.radius} }</code>`:k}
    </details>`}renderPresenceSettings(){let e=Object.keys(this.hass?.states??{}).filter(r=>r.startsWith("person.")).sort(),t=r=>{let i=r.slice(7),s=this.entityOptions(l=>oe(l)),a=l=>l.includes(i)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...s.filter(l=>a(l.id)),...s.filter(l=>!a(l.id))]},n=(r,i)=>{let s=structuredClone(this._doc);s.presence=s.presence.filter(a=>a.person!==r),i&&i!=="none"&&s.presence.push({person:r,sensor:i}),this.setDoc(s)};return b`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${e.length?e.map(r=>this.entitySelect(`${Q(this.hass,r)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(i=>i.person===r)?.sensor??null,void 0,t(r),i=>n(r,i))):b`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderFurnitureLinks(e){if(!this.hass)return k;let t=this.hass,n=d=>{let u=structuredClone(this._doc.floors);for(let h of u)for(let p of h.furniture)p.id===e.id&&(d==="light"?p.light_entity=null:p[d]=null);return $t(t,u).get(e.id)?.[d]??null},r=en(e.type),i=se(e.type),s=e.type==="kitchen_display",a=this.entityOptions(d=>e.type==="fan_ceiling_light"?/^(fan|switch|input_boolean)\./.test(d):i||s?/^(light|switch|input_boolean)\./.test(d):r?/^(media_player|switch|input_boolean|light)\./.test(d):e.type==="security_camera"?d.startsWith("camera."):e.type==="smart_lock"?d.startsWith("lock."):e.type==="smart_curtain"?d.startsWith("cover."):e.type==="smart_speaker"?d.startsWith("media_player."):e.type==="air_purifier"?/^(fan|switch)\./.test(d):e.type==="radiator"||e.type==="air_conditioner"||e.type==="wall_thermostat"||e.type==="heat_pump_outdoor"?d.startsWith("climate."):e.type==="smoke_detector"?d.startsWith("binary_sensor.")&&t.states[d]?.attributes.device_class==="smoke":e.type==="siren_alarm"?/^(siren|alarm_control_panel|switch|binary_sensor)\./.test(d):e.type==="access_point"?/^(switch|sensor|binary_sensor|device_tracker)\./.test(d):e.type==="network_cabinet"||e.type==="nas_server"?/^(switch|sensor|binary_sensor)\./.test(d):e.type==="electrical_panel"||e.type==="ups_unit"?/^(switch|sensor|binary_sensor)\./.test(d):e.type==="modem_router"?/^(switch|sensor|binary_sensor|device_tracker)\./.test(d):e.type==="hot_water_tank"?/^(water_heater|climate|switch)\./.test(d):e.type==="ventilation_fan"?/^(fan|switch)\./.test(d):e.type==="humidifier"?/^(humidifier|fan|switch)\./.test(d):e.type==="wall_switch"?/^(switch|input_boolean|light)\./.test(d):e.type==="wall_outlet"||e.type==="smart_plug"?d.startsWith("switch."):e.type==="motion_sensor"?d.startsWith("binary_sensor.")&&["motion","occupancy","presence"].includes(String(t.states[d]?.attributes.device_class??"")):e.type==="contact_sensor"?d.startsWith("binary_sensor.")&&["door","window","opening"].includes(String(t.states[d]?.attributes.device_class??"")):e.type==="water_leak_sensor"?d.startsWith("binary_sensor.")&&t.states[d]?.attributes.device_class==="moisture":e.type==="temperature_humidity_sensor"?d.startsWith("sensor.")&&["temperature","humidity"].includes(String(t.states[d]?.attributes.device_class??"")):e.type==="video_doorbell"?/^(camera|binary_sensor)\./.test(d):e.type==="robot_vacuum"?d.startsWith("vacuum."):e.type==="robot_mower"?d.startsWith("lawn_mower."):/^(switch|media_player|fan|water_heater|input_boolean|climate)\./.test(d)||Di(t.states[d])),l=this.entityOptions(d=>this.isPowerSensor(d)),c=e.type==="fridge_smart"?this.entityOptions(d=>d.startsWith("binary_sensor.")):[];return b`<div class="fp3d-form fp3d-links">
        ${e.type==="grid_point"?b`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(e.type==="fan_ceiling_light"?"furn_entity_fan":i||s?"furn_entity_light":r?"furn_entity_tv":e.type==="radiator"||e.type==="air_conditioner"||e.type==="wall_thermostat"||e.type==="heat_pump_outdoor"?"furn_entity_climate":e.type==="robot_vacuum"?"furn_entity_vacuum":"furn_entity"),e.entity??null,n("entity"),a,d=>this.updateFurniture({entity:d}))}
        ${e.type==="fan_ceiling_light"?this.entitySelect(this.t("furn_entity_light"),e.light_entity??null,n("light"),this.entityOptions(d=>d.startsWith("light.")),d=>this.updateFurniture({light_entity:d})):k}
        ${!i&&!ve.includes(e.type)&&!wt(e.type)?b`${this.entitySelect(this.t("furn_state_entity"),e.state_entity??null,void 0,this.entityOptions(d=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(d)),d=>this.updateFurniture({state_entity:d==="none"?null:d}))}
              ${e.state_entity&&e.state_entity!=="none"?b`${this.entitySelect(this.t("furn_state_entity2"),e.state_entity2??null,void 0,this.entityOptions(d=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(d)),d=>this.updateFurniture({state_entity2:d==="none"?null:d}))}
                    ${e.state_entity2&&e.state_entity2!=="none"?b`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isAdmin} @change=${d=>this.updateFurniture({state_split:d.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${e.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${e.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:k}`:k}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`:k}
        ${i&&e.entity&&e.entity!=="none"?b`${this.entitySelect(this.t("furn_color_entity"),e.color_entity??null,void 0,this.entityOptions(d=>d.startsWith("light.")&&d!==e.entity),d=>this.updateFurniture({color_entity:d==="none"?null:d}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:k}
        ${i||e.type==="grid_point"?k:this.entitySelect(this.t(e.type==="meter"?"energy_grid":e.type==="inverter"?"energy_solar_sensor":e.type==="home_battery"?"energy_battery_sensor":"furn_power"),e.power??null,n("power"),l,d=>this.updateFurniture({power:d}))}
        ${ce("energy_pro")&&!i&&!["grid_point","meter","inverter","home_battery"].includes(e.type)?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!e.holo} ?disabled=${!this.isAdmin} @change=${d=>this.updateFurniture({holo:d.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:ce("energy_pro")&&e.type==="inverter"?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${e.plant_card!==!1} ?disabled=${!this.isAdmin} @change=${d=>this.updateFurniture({plant_card:d.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >`:k}
      </div>
      ${e.type==="meter"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),e.export??null,void 0,l,d=>this.updateFurniture({export:d==="none"?null:d}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:k}
      ${e.type==="home_battery"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),e.soc??null,void 0,this.entityOptions(d=>oe(d)&&(t.states[d]?.attributes.device_class==="battery"||t.states[d]?.attributes.unit_of_measurement==="%")),d=>this.updateFurniture({soc:d==="none"?null:d}))}
            ${this.entitySelect(this.t("furn_charge"),e.charge??null,void 0,l,d=>this.updateFurniture({charge:d==="none"?null:d}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:k}
      ${e.type==="wallbox"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),e.status??null,void 0,this.entityOptions(d=>zr(d)||oe(d)),d=>this.updateFurniture({status:d==="none"?null:d}))}
          </div>`:k}
      ${!i||e.entity?b`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!this.isAdmin} @change=${d=>this.updateFurniture({confirm:d.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(e.marker??null,d=>this.updateFurniture({marker:d}))}${this.iconInput(e.icon,d=>this.updateFurniture({icon:d}))}</div>`:k}
      ${e.type==="robot_vacuum"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),e.room_sensor??null,Ni(t,$t(t,this._doc.floors).get(e.id)?.entity??null,null),this.entityOptions(d=>oe(d)),d=>this.updateFurniture({room_sensor:d}))}
          </div>`:k}
      ${e.type==="fridge_smart"?b`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),e.door_left??null,void 0,c,d=>this.updateFurniture({door_left:d}))}
              ${this.entitySelect(this.t("furn_door_right"),e.door_right??null,void 0,c,d=>this.updateFurniture({door_right:d}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:k}
      ${wt(e.type)?this.renderPictureRules(e):k}
      <p class="fp3d-sub">${this.t(i?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":r?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(e){let t=this.isAdmin,n=this.hass?.language??"en",r=[...qe.map(m=>({id:m,label:it(this.hass,m)})),...(this.packs??[]).flatMap(m=>m.items.filter(v=>v.vehicle).map(v=>({id:Ye(m.id,v.id),label:`${Re(v,n)} \xB7 ${m.name}`})))],i=this.entityOptions(m=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(m)),s=this.entityOptions(m=>/^(sensor|input_select|select|input_text)\./.test(m)),a=e.type_entity?this.hass?.states[e.type_entity]:void 0,l=Array.isArray(a?.attributes.options)?a.attributes.options:[],c=e.types??[],d=m=>this.updateFurniture({types:m}),u=(m,v)=>b`<select ?disabled=${!t} @change=${M=>v(M.target.value||null)}>
        <option value="" ?selected=${!m}>${this.t("parking_vehicle_none")}</option>
        ${r.map(M=>b`<option value=${M.id} ?selected=${M.id===m}>${M.label}</option>`)}
      </select>`,h=this.floor,p=h?.rooms.find(m=>m.points.length>=3&&B([e.x,e.z],m.points)),f=e.vehicle?ne(e.vehicle):void 0,_=e.vehicle&&qe.includes(e.vehicle)?re[e.vehicle]:void 0,g=(f?.size[2]??_?.[2]??0)*(e.scale??1),y=!!p&&!!h&&g>h.height+1e-6;return b`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),e.entity??null,void 0,i,m=>this.updateFurniture({entity:m==="none"?null:m}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${u(e.vehicle??null,m=>this.updateFurniture({vehicle:m}))}</label>
        ${this.num(this.t("parking_scale"),Math.round((e.scale??1)*100),m=>this.updateFurniture({scale:Math.min(150,Math.max(30,m))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),e.type_entity??null,void 0,s,m=>this.updateFurniture({type_entity:m==="none"?null:m}))}
        ${e.type_entity?b`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${c.map((m,v)=>b`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${m.state}
                    ?disabled=${!t}
                    @change=${M=>d(c.map((w,A)=>A===v?{...w,state:M.target.value}:w))}
                  />
                  ${u(m.vehicle,M=>d(c.map((w,A)=>A===v?{...w,vehicle:M??""}:w)))}
                  <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>d(c.filter((M,w)=>w!==v))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${l.map(m=>b`<option value=${m}></option>`)}</datalist>
              ${t?b`<button class="fp3d-btn" @click=${()=>d([...c,{state:l[c.length]??"",vehicle:r[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:k}
            </div>`:k}
      </div>
      ${y?b`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:Y(this.hass,g,2),room:Y(this.hass,h.height,2)})}</p>`:k}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(e)}`}renderCarForm(e){let t=this.hass?.language;if(!ce("auto_pro"))return b`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🚗 ${this.t("pro_name_auto_pro")}</b><a class="fp3d-btn fp3d-primary" href=${xt(t)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
        <p class="fp3d-sub">${this.t("auto_pro_teaser")}</p>
      </section>`;if(!this.hass)return k;let n=this.hass,r=e.car??{},i=Vi(n,{entity:e.entity,car:{device:r.device}}),s=c=>this.updateFurniture({car:{...r,...c}}),a=this.entityOptions(c=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(c)),l=(c,d,u)=>this.entitySelect(this.t(d),r[c]??null,i[c],u,h=>s({[c]:h==="none"?"none":h}));return b`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),r.device??null,void 0,a,c=>s({device:c==="none"?null:c}))}
        ${l("soc","car_soc",this.entityOptions(c=>oe(c)))}
        ${l("range","car_range",this.entityOptions(c=>oe(c)))}
        ${l("charging","car_charging",this.entityOptions(c=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(c)))}
        ${l("plugged","car_plugged",this.entityOptions(c=>zr(c)))}
        ${l("lock","car_lock",this.entityOptions(c=>/^(lock|binary_sensor|input_boolean|switch)\./.test(c)))}
        ${l("climate","car_climate",this.entityOptions(c=>/^(climate|switch|binary_sensor|input_boolean)\./.test(c)))}
        ${l("tracker","car_tracker",this.entityOptions(c=>c.startsWith("device_tracker.")))}
      </div>
    </section>`}toggleLibrary(e){let t=new Set(this._libOpen);t.has(e)?t.delete(e):t.add(e),this._libOpen=t;try{localStorage.setItem("neonplan3d.library",JSON.stringify([...t]))}catch{}}librarySection(e,t,n,r){let i=fn(r).split(/\s+/).filter(Boolean),s=i.length?n.filter(l=>{let c=fn(`${l.label} ${l.search??""} ${l.type.replace(/[_:.]/g," ")} ${t}`);return i.every(d=>c.includes(d))}):n;if(r&&!s.length)return k;let a=r?!0:this._libOpen.has(e);return b`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${a} @click=${()=>this.toggleLibrary(e)}>
        <span class="fp3d-lib-caret">${a?"\u25BE":"\u25B8"}</span>${t} <span class="fp3d-lib-count">${s.length}</span>
      </button>
      ${a?b`<div class="fp3d-library">${s.map(l=>this.libraryButton(l.type,l.label))}</div>`:k}`}libraryHasHits(e){let t=fn(e).split(/\s+/).filter(Boolean),n=this.hass?.language??"en";return[...Object.entries(Mr).flatMap(([i,s])=>s.map(a=>`${this.t(`furn_${a}`)} ${Ae($s,`furn_${a}`)} ${a.replace(/_/g," ")} ${this.t(`furn_group_${i}`)}`)),...(this.packs??[]).flatMap(i=>i.items.map(s=>`${Re(s,n)} ${Object.values(s.name).join(" ")} ${s.id.replace(/_/g," ")} ${i.name}`))].some(i=>{let s=fn(i);return t.every(a=>s.includes(a))})}storedPictures(){let e=[];for(let t of this._doc.floors)for(let n of t.furniture)for(let r of n.pictures??[])r.image&&!/^https?:\/\//.test(r.image)&&!r.image.startsWith("camera:")&&!e.includes(r.image)&&e.push(r.image);return e}renderPictureRules(e){let t=this.isAdmin,n=e.pictures??[];if(!ce("screens"))return b`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${xt(this.hass?.language)} target="_blank" rel="noopener">${this.t("pro_shop")}</a> · <a href=${nn(this.hass?.language,"screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let r=y=>this.updateFurniture({pictures:y}),i=this.entityOptions(()=>!0),s=y=>["string","number","boolean"].includes(typeof y),a=y=>Object.entries(this.hass?.states[y]?.attributes??{}).filter(([m,v])=>s(v)&&m!=="friendly_name"&&m!=="icon").map(([m])=>m),l=(y,m)=>{let v=this.hass?.states[y];return v?String((m?v.attributes[m]:v.state)??""):""},c=(y,m)=>{let v=this.hass?.states[y],M=!m&&Array.isArray(v?.attributes.options)?v.attributes.options:[];return M.length?M:[l(y,m)]},d=y=>`${y.entity}\0${y.attribute??""}`,u=[];n.forEach((y,m)=>{let v=u.find(M=>d(M)===d(y));v?v.rows.push(m):u.push({entity:y.entity,attribute:y.attribute??null,rows:[m]})});let h=(y,m)=>r(n.map((v,M)=>y.rows.includes(M)?{...v,...m}:v)),p=(y,m)=>r(n.map((v,M)=>M===y?{...v,...m}:v)),f=this.storedPictures(),_=this.entityOptions(y=>y.startsWith("camera.")),g=y=>y.image.startsWith("camera:")?y.image.slice(7):null;return b`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?b`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!t} @change=${y=>this.updateFurniture({screen_bg:y.target.value})}>
              <option value="black" ?selected=${(e.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${e.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:k}
      ${u.map(y=>b`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${i}
            .value=${y.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!t}
            @change=${m=>{m.stopPropagation(),h(y,{entity:m.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!t}
            title=${this.t("picture_attribute")}
            @change=${m=>{let v=m.target.value||null,M=l(y.entity,v);r(n.map((w,A)=>y.rows.includes(A)?{...w,attribute:v,state:y.rows[0]===A?M:w.state}:w))}}
          >
            <option value="" ?selected=${!y.attribute}>${this.t("picture_state_of")}</option>
            ${a(y.entity).map(m=>b`<option value=${m} ?selected=${m===y.attribute}>${m}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(y.entity,y.attribute)||"\u2013"})}</span>
          ${y.rows.map(m=>{let v=n[m],M=!!this.hass&&Ci(this.hass,v);return b`<div class="fp3d-picture-row ${M?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${m}"
                placeholder=${this.t("picture_state")}
                .value=${v.state}
                ?disabled=${!t}
                @change=${w=>p(m,{state:w.target.value})}
              />
              <datalist id="fp3d-picture-states-${m}"><option value="*"></option>${c(y.entity,y.attribute).map(w=>b`<option value=${w}></option>`)}</datalist>
              ${this._images[v.image]?b`<img class="fp3d-picture-thumb" src=${this._images[v.image].url} alt="" /> `:k}
              ${g(v)&&this.hass?.states[g(v)]?.attributes.entity_picture?b`<img class="fp3d-picture-thumb" src=${String(this.hass.states[g(v)].attributes.entity_picture)} alt="" />`:k}
              <label class="fp3d-btn fp3d-picture-pick">
                ${v.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!t} @change=${w=>{this.uploadPicture(w,e,m)}} />
              </label>
              ${f.filter(w=>w!==v.image).length?b`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${f.filter(w=>w!==v.image&&this._images[w]).map(w=>b`<button class="fp3d-picture-reuse-btn" ?disabled=${!t} @click=${()=>p(m,{image:w})}><img src=${this._images[w].url} alt="" /></button>`)}
                  </div>`:k}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(v.image)?v.image:""}
                ?disabled=${!t}
                @change=${w=>{let A=w.target.value.trim();A&&p(m,{image:A})}}
              />
              ${_.length?b`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${_}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${g(v)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!t}
                    @change=${w=>{w.stopPropagation(),w.detail.value!=="none"?p(m,{image:`camera:${w.detail.value}`}):g(v)&&p(m,{image:""})}}
                  ></fp3d-entity-picker>`:k}
              <span class="fp3d-sub">${M?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>r(n.filter((w,A)=>A!==m))}>✕</button>
            </div>`})}
          ${t?b`<button class="fp3d-btn" @click=${()=>r([...n,{entity:y.entity,attribute:y.attribute,state:l(y.entity,y.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:k}
        </div>`)}
      ${t?b`<button class="fp3d-btn" @click=${()=>r([...n,{entity:i[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:k}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(e,t,n){let r=e.target,i=r.files?.[0];if(r.value="",!i)return;let s=await createImageBitmap(i),a=Math.min(1,512/Math.max(s.width,s.height)),l=document.createElement("canvas");l.width=Math.round(s.width*a),l.height=Math.round(s.height*a),l.getContext("2d").drawImage(s,0,0,l.width,l.height);let c=l.toDataURL(i.type==="image/png"?"image/png":"image/jpeg",.85),d=G("pic");await Kt(this.hass,d,c),this._images={...this._images,[d]:{url:c,aspect:l.height/l.width}};let u=this.furnitureItem?.id===t.id?this.furnitureItem.pictures??[]:t.pictures??[];this.updateFurniture({pictures:u.map((h,p)=>p===n?{...h,image:d}:h)})}renderFurnitureLibrary(){let e=this.room,t=this._furnQuery.trim().toLowerCase(),n=this.hass?.language??"en";return b`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${e?this.t("furniture_into",{room:e.name}):this.t("furniture_pick_room")}</p>
      <input
        class="fp3d-search"
        type="search"
        placeholder=${this.t("furniture_search")}
        .value=${this._furnQuery}
        @input=${r=>this._furnQuery=r.target.value}
        @keydown=${r=>{r.key==="Escape"&&(this._furnQuery="")}}
      />
      ${t&&!this.libraryHasHits(t)?b`<p class="fp3d-sub">${this.t("furniture_search_none")}</p>`:k}
      ${Object.entries(Mr).map(([r,i])=>this.librarySection(`group:${r}`,this.t(`furn_group_${r}`),[...i,...r==="kitchen"&&ce("fridge_smart")?["fridge_smart"]:[]].map(s=>({type:s,label:this.t(`furn_${s}`),search:Ae($s,`furn_${s}`)})),t))}
      ${(this.packs??[]).map(r=>this.librarySection(`pack:${r.id}`,r.name,r.items.map(i=>({type:Ye(r.id,i.id),label:Re(i,n),search:Object.values(i.name).join(" ")})),t))}
    </section>`}libraryButton(e,t){let n=s=>{this.showPreview(e,s.currentTarget)},r=/^(fan_|robot_|smart_curtain|bathroom_fan)/.test(e),i=[...se(e)?[{icon:"light",title:"lib_badge_light"}]:[],...wt(e)?[{icon:"media",title:"lib_badge_screen"}]:[],...r?[{icon:"fan",title:"lib_badge_motion"}]:[],..._t(e)&&!se(e)?[{icon:"switch",title:"lib_badge_power"}]:[]];return b`<button
      class="fp3d-btn ${i.length?"fp3d-lib-electric":""}"
      title=${i.length?i.map(s=>this.t(s.title)).join(" \xB7 "):t}
      @click=${()=>this.addFurniture(e)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${t}
      ${i.map(s=>b`<svg class="fp3d-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d=${Mt(s.icon)} />
      </svg>`)}
    </button>`}async showPreview(e,t){let n=t.getBoundingClientRect(),r={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:e,url:null,...r};try{let i=await fs(),[s,a,l]=Be(e),c=i.furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:$i[e]??null},180,this.packs??[]);this._preview?.type===e&&(this._preview={type:e,url:c,...r})}catch{this._preview=null}}renderPreview(){let e=this._preview;return e?b`<div class="fp3d-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
      ${e.url?b`<img src=${e.url} alt="" />`:b`<span class="fp3d-preview-wait"></span>`}
      <b>${it(this.hass,e.type)}</b>
    </div>`:k}renderDeviceForm(e){let t=this.isAdmin,n=N(e.entity_id),r=n==="light",i=e.mount??"ceiling",s=n?Jt(n,this.floor?.height??2.5,r?i:null):1;return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",e.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?Mt(n):""} />
        </svg>
        ${Q(this.hass,e.entity_id)}
      </p>
      <div class="fp3d-form">
        ${r?b`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>b`<option value=${a} ?selected=${a===i}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >`:n==="camera"?b`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                  <option value="wall" ?selected=${(e.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${e.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:k}
        ${this.num(this.t("x"),e.x,a=>this.updateDevice({x:a}))} ${this.num(this.t("z"),e.z,a=>this.updateDevice({z:a}))}
        ${this.num(this.t("marker_height"),e.y??s,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
        ${this.num(this.t("rotation"),e.rotation??0,a=>this.updateDevice({rotation:(a%360+360)%360}),1)}
        ${n==="camera"?b`${this.num(this.t("camera_fov"),e.fov??(e.mount==="ceiling"?360:90),a=>this.updateDevice({fov:Math.min(360,Math.max(10,a))}),5,10)}
            ${this.num(this.t("camera_reach"),e.reach??(e.mount==="ceiling"?3:4.5),a=>this.updateDevice({reach:Math.min(50,Math.max(.5,a))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),e.tilt??(e.mount==="ceiling"?65:20),a=>this.updateDevice({tilt:Math.min(90,Math.max(0,a))}),5,0)}
            <label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${e.cone!==!1} ?disabled=${!t} @change=${a=>this.updateDevice({cone:a.target.checked?null:!1})} />
              ${this.t("camera_cone")}</label
            >
            <p class="fp3d-sub fp3d-wide">${this.t("camera_aim_hint")}</p>
            ${this.renderCameraDetections(e.entity_id)}`:k}
        ${n&&Pi.has(n)?b`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!t} @change=${a=>this.updateDevice({confirm:a.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:k}
        ${this.markerSelect(e.marker??null,a=>this.updateDevice({marker:a}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${e.name??""} ?disabled=${!t} maxlength="60" placeholder=${Q(this.hass,e.entity_id)} @change=${a=>this.updateDevice({name:a.target.value.trim()||null})}
        /></label>
        ${e.name?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${a=>this.updateDevice({show_name:a.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:k}
        ${this.iconInput(e.icon,a=>this.updateDevice({icon:a}))}
      </div>
      ${t?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${e.y!==null?b`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:k}
            ${this.renderAsFurniture(e)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(e.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:k}
    </section>`}renderDeviceList(e){let t=this.isAdmin,n=this.hass,r=e.area_id?n?.areas?.[e.area_id]?.name:void 0,i=n?Fe(n,e.area_id).filter(w=>yt(N(w))):[],s=new Set([...this.floor?.placements.filter(w=>B([w.x,w.z],e.points)).map(w=>w.entity_id)??[],...this.floor?.furniture.filter(w=>se(w.type)&&w.entity&&B([w.x,w.z],e.points)).map(w=>w.entity)??[]]),a=n?nr(n,i):[],l=a.map(w=>w.primary).filter(w=>!s.has(w)),c=this._deviceQuery.trim().toLowerCase(),d=w=>!c||Q(n,w,r).toLowerCase().includes(c)||w.includes(c),u=this.floor?.placements.filter(w=>N(w.entity_id)==="light"&&(w.mount??"ceiling")==="ceiling"&&B([w.x,w.z],e.points)).length,h=new Set(e.panel??[]),p=new Set(e.hidden??[]),f=new Set(e.no_state??[]),_=new Map;for(let w of this._doc.floors)for(let A of[...w.placements.map(P=>[P.entity_id,P.x,P.z]),...w.furniture.filter(P=>se(P.type)&&P.entity).map(P=>[P.entity,P.x,P.z])]){let P=w.rooms.find(S=>B([A[1],A[2]],S.points));P&&P.id!==e.id&&_.set(A[0],P.name)}let g=(w,A=!1,P=r)=>{let S=s.has(w),I=S?void 0:_.get(w);return b`<div class="fp3d-row fp3d-dev-row ${A?"fp3d-dev-extra":""} ${p.has(w)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${S?"":"fp3d-muted"}" ?disabled=${!S} @click=${()=>this.selectItem("device",w)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Mt(N(w))} />
          </svg>
          <span>${Q(n,w,P)}${I?b`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:I})}</small>`:k}</span>
        </button>
        ${t&&!A?b`<button
              class="fp3d-pin ${p.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${p.has(w)}
              title=${this.t(p.has(w)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:p.has(w)?[...p].filter(E=>E!==w):[...p,w]})}
            >
              ${p.has(w)?"\u{1F648}":"\u{1F441}"}
            </button>`:k}
        ${t&&!A&&!p.has(w)?b`<button
              class="fp3d-pin ${f.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(w)}
              title=${this.t(f.has(w)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:f.has(w)?[...f].filter(E=>E!==w):[...f,w]})}
            >
              ${f.has(w)?"\u2205":"Aa"}
            </button>`:k}
        ${t&&!S?b`<button
              class="fp3d-pin ${h.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${h.has(w)}
              title=${this.t(h.has(w)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:h.has(w)?[...h].filter(E=>E!==w):[...h,w]})}
            >
              ${h.has(w)?"\u2605":"\u2606"}
            </button>`:k}
        ${t?S?b`<button class="fp3d-link" @click=${()=>this.removeDevice(w)}>${this.t("devices_remove")}</button>`:b`<button class="fp3d-link" @click=${()=>this.placeDevices([w])}>${this.t("devices_place")}</button>`:k}
      </div>`},y=t?this._devSource:"area",m=w=>{this._devSource=w,this._deviceQuery=""},v=b`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${w=>this._deviceQuery=w.target.value}
    />`,M=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return b`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${t?b`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${y==="area"} @click=${()=>m("area")}>${this.t("devices_src_area")}${i.length?` (${a.length})`:""}</button>
            <button aria-pressed=${y==="other"} @click=${()=>m("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${y==="none"} @click=${()=>m("none")}>${this.t("devices_src_none")}</button>
          </div>`:k}
      ${y!=="area"?b`${v}${this.renderDeviceExtras(e,g,y)}`:e.area_id?i.length?b`${t&&(u??0)>=2?b`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(e)}>${this.t("lights_spread")}</button>`:k}
              ${i.length>8?v:k}
              <div class="fp3d-room-list">
                ${a.map(w=>{let A=w.others.filter(d),P=this._expanded.has(w.primary)||!!c&&A.length>0;return!d(w.primary)&&!A.length?k:b`${g(w.primary)}
                  ${w.others.length?b`<button
                        class="fp3d-more"
                        @click=${()=>{let S=new Set(this._expanded);S.has(w.primary)?S.delete(w.primary):S.add(w.primary),this._expanded=S}}
                      >
                        ${P?this.t("devices_less"):this.t("devices_more",{n:w.others.length})}
                      </button>`:k}
                  ${P?(c?A:w.others).map(S=>g(S,!0)):k}`})}
              </div>
              ${t&&l.length>1?b`<button class="fp3d-link fp3d-place-all" @click=${M}>${this.t("devices_place_all_n",{n:l.length})}</button>`:k}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`:b`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(e,t,n){let r=this.hass;if(!r)return k;let i=50,s=this._deviceQuery.trim().toLowerCase(),a=(d,u)=>!s||`${Q(r,d,u)} ${d} ${u??""}`.toLowerCase().includes(s),l=d=>d>0?b`<p class="fp3d-sub">${this.t("devices_narrow",{n:d})}</p>`:k;if(n==="other"){let d=0,u=0,h=Ii(r,e.area_id).map(p=>{let f=p.ids.filter(g=>a(g,p.name)),_=f.slice(0,Math.max(0,i-d));return d+=_.length,u+=f.length-_.length,_.length?b`<div class="fp3d-dev-area">${p.name}</div>${_.map(g=>t(g,!1,p.name))}`:k});return d?b`<div class="fp3d-room-list">${h}</div>${l(u)}`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let c=Ti(r).filter(d=>a(d));return c.length?b`<div class="fp3d-room-list">${c.slice(0,i).map(d=>t(d))}</div>${l(c.length-Math.min(c.length,i))}`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(e){let t=this.hass;if(!t)return k;let n=(s,a)=>{let l={...e.climate??{},[s]:a},c=Object.values(l).every(d=>d==null);this.updateRoom({climate:c?null:l})},r=!!e.climate&&Object.values(e.climate).some(s=>s!=null),i=(s,a)=>{let l=Qn[s],c=Li(t,this.floor??null,{...e,climate:null},s),d=this.entityOptions(u=>oe(u)&&t.states[u]?.attributes.device_class===l).map(u=>({...u,rank:(vt(t,u.id)===e.area_id?0:1)+(Jn(t,u.id)?0:2)})).sort((u,h)=>u.rank-h.rank).map(({id:u,label:h})=>({id:u,label:h}));return this.entitySelect(a,e.climate?.[s]??null,c[0]??null,d,u=>n(s,u))};return b`<details class="fp3d-points" ?open=${r}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${i("temperature",this.t("climate_temperature"))} ${i("humidity",this.t("climate_humidity"))} ${i("co2",this.t("climate_co2"))}
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
                  <p class="fp3d-sub fp3d-wide">${this.t("background_edit_hint")}</p>`:k}
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
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:k}
      </div>
    </details>`}async loadHistory(){if(this.hass)try{this._history=await Qr(this.hass)}catch{this._history=[]}}async restoreFromHistory(e){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(e)}))||(await ei(this.hass,e.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let e=await ti(this.hass),t={};for(let r of Ei(e.building))try{t[r]=await Rn(this.hass,r)}catch{}let n=new Date().toISOString().slice(0,10);Yn(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...e,exported_at:new Date().toISOString(),images:t}))}catch(e){alert(this.t("backup_import_error",{error:String(e?.message??e)}))}finally{this._backupBusy=!1}}}async importBackup(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let r;try{r=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if(r?.format!=="neonplan3d-backup"||!r.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let i=await ni(this.hass,r.building,r.packs??[]),s=0;for(let[l,c]of Object.entries(r.images??{}))try{await Kt(this.hass,l,c),s++}catch{}this.setDoc(qt(i.building)),this._floorId=i.building.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let a=i.skipped.length?` ${this.t("backup_full_skipped",{packs:i.skipped.map(l=>l.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:i.packs,pictures:s})+a}catch(i){let{code:s,message:a}=i??{};alert(this.t("backup_import_error",{error:a??s??String(i)}))}finally{this._backupBusy=!1}}}exportPlan(e){let t=new Date().toISOString().slice(0,10);Yn(`neonplan3d-${this.t(e?"export_name_template":"export_name_backup")}-${t}.json`,JSON.stringify(Si(this._doc,e),null,2))}async importPlan(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let r;try{r=Mi(await n.text())}catch(i){let s=i.message;alert(s==="not_json"?this.t("import_error_not_json"):s==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:s}));return}confirm(this.t("backup_import_confirm"))&&(await Jr(this.hass).catch(()=>{}),this.setDoc(r),this._floorId=r.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(e){return new Date(e.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return b`<details
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
    </details>`}renderSettings(){let e=this._doc.settings,t=n=>{let r=structuredClone(this._doc);Object.assign(r.settings,n),this.setDoc(r)};return b`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.num(this.t("wall_exterior"),e.wall_exterior,n=>t({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("wall_interior"),e.wall_interior,n=>t({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("grid"),e.grid,n=>t({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        ${this.num(this.t("north"),e.north,n=>t({north:(Math.round(n)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select
            @change=${n=>{let r=n.target.value;r==="custom"?(this.useRoofSections(),this._tool="roof"):t({roof:{...e.roof,type:r}})}}
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
            >`:k}
        ${e.roof.type==="gable"?this.num(this.t("roof_pitch"),e.roof.pitch,n=>t({roof:{...e.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):k}
        ${e.roof.type!=="none"?this.num(this.t("roof_overhang"),e.roof.overhang,n=>t({roof:{...e.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):k}
        ${this.hass?this.entitySelect(this.t("weather_entity"),e.weather_entity??null,mo(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>t({weather_entity:n})):k}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${pi.map(n=>{let r=e.weather_effects??Dn;return b`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${r.includes(n)}
              @change=${i=>{let s=i.target.checked;t({weather_effects:s?[...new Set([...r,n])]:r.filter(a=>a!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.rain_warning!==!1} @change=${n=>t({rain_warning:n.target.checked})} />
          ${this.t("rain_warning")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("north_hint")} ${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[hn,ps,Ee`
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",Rr);function Fl(o,e,t){let n=t[0]-e[0],r=t[1]-e[1],i=n*n+r*r||1,s=Math.min(1,Math.max(0,((o[0]-e[0])*n+(o[1]-e[1])*r)/i));return Math.hypot(o[0]-e[0]-n*s,o[1]-e[1]-r*s)}function fn(o){return o.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var $s={language:"en"};function oe(o){return/^(sensor|input_number|number)\./.test(o)}function zr(o){return/^(binary_sensor|input_boolean)\./.test(o)}export{Rr as Fp3dEditor};
