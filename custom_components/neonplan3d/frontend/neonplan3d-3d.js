var Zh=0,Ac=1,Kh=2;var Is=1,Jh=2,zr=3,Ci=0,nn=1,Me=2,Gn=0,Ii=1,Fe=2,Rc=3,Ps=4,Qh=5;var ji=100,jh=101,tf=102,ef=103,nf=104,rf=200,sf=201,of=202,af=203,Cc=204,Ic=205,lf=206,cf=207,uf=208,hf=209,ff=210,df=211,pf=212,mf=213,gf=214,Wo=0,Xo=1,Yo=2,Cr=3,qo=4,$o=5,Zo=6,Ko=7,Pc=0,xf=1,bf=2,Cn=0,Lc=1,Fc=2,Dc=3,Uc=4,Nc=5,Oc=6,Bc=7;var zc=300,Pi=301,tr=302,Ta=303,wa=304,Ls=306,qi=1e3,un=1001,Jo=1002,ke=1003,_f=1004;var Fs=1005;var Ge=1006,Ea=1007;var Li=1008;var dn=1009,kc=1010,Vc=1011,kr=1012,Aa=1013,In=1014,Pn=1015,Ln=1016,Ra=1017,Ca=1018,Vr=1020,Gc=35902,Hc=35899,Wc=1021,Xc=1022,vn=1023,zn=1026,Fi=1027,Yc=1028,Ia=1029,Di=1030,Pa=1031;var La=1033,Ds=33776,Us=33777,Ns=33778,Os=33779,Fa=35840,Da=35841,Ua=35842,Na=35843,Oa=36196,Ba=37492,za=37496,ka=37488,Va=37489,Bs=37490,Ga=37491,Ha=37808,Wa=37809,Xa=37810,Ya=37811,qa=37812,$a=37813,Za=37814,Ka=37815,Ja=37816,Qa=37817,ja=37818,tl=37819,el=37820,nl=37821,il=36492,rl=36494,sl=36495,ol=36283,al=36284,zs=36285,ll=36286;var us=2300,Qo=2301,Vo=2302,gc=2303,xc=2400,bc=2401,_c=2402;var yf=3200;var qc=0,vf=1,si="",Ce="srgb",hs="srgb-linear",fs="linear",de="srgb";var Go=7680;var Mf=519,Sf=512,Tf=513,wf=514,cl=515,Ef=516,Af=517,ul=518,Rf=519,Cf=35044,$c=35048;var Zc="300 es",Rn=2e3,ds=2001;function C0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function I0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function If(){let i=Ir("canvas");return i.style.display="block",i}var bh={},Pr=null;function Kc(...i){let t="THREE."+i.shift();Pr?Pr("log",t,...i):console.log(t,...i)}function Pf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=Pf(i);let t="THREE."+i.shift();if(Pr)Pr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function kt(...i){i=Pf(i);let t="THREE."+i.shift();if(Pr)Pr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Yi(...i){let t=i.join(" ");t in bh||(bh[t]=!0,zt(...i))}function Lf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Ff={[Wo]:Xo,[Yo]:Zo,[qo]:Ko,[Cr]:$o,[Xo]:Wo,[Zo]:Yo,[Ko]:qo,[$o]:Cr},kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ql=Math.PI/180,jo=180/Math.PI;function ks(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function P0(i,t){return(i%t+t)%t}function $l(i,t,e){return(1-e)*i+e*t}function is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var eu=class eu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};eu.prototype.isVector2=!0;var Jt=eu,Vn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],h=s[o+0],d=s[o+1],g=s[o+2],b=s[o+3];if(f!==b||l!==h||c!==d||u!==g){let x=l*h+c*d+u*g+f*b;x<0&&(h=-h,d=-d,g=-g,b=-b,x=-x);let p=1-a;if(x<.9995){let y=Math.acos(x),M=Math.sin(y);p=Math.sin(p*y)/M,a=Math.sin(a*y)/M,l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+b*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+b*a;let y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nu=class nu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nu.prototype.isVector3=!0;var H=nu,Zl=new H,_h=new Vn,iu=class iu{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],b=r[0],x=r[3],p=r[6],y=r[1],M=r[4],v=r[7],S=r[2],w=r[5],A=r[8];return s[0]=o*b+a*y+l*S,s[3]=o*x+a*M+l*w,s[6]=o*p+a*v+l*A,s[1]=c*b+u*y+f*S,s[4]=c*x+u*M+f*w,s[7]=c*p+u*v+f*A,s[2]=h*b+d*y+g*S,s[5]=h*x+d*M+g*w,s[8]=h*p+d*v+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=e*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=f*b,t[1]=(r*c-u*n)*b,t[2]=(a*n-r*o)*b,t[3]=h*b,t[4]=(u*e-r*l)*b,t[5]=(r*s-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(t,e)),this}rotate(t){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-t)),this}translate(t,e){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};iu.prototype.isMatrix3=!0;var Wt=iu,Kl=new Wt,yh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L0(){let i={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===de&&(r.r=ni(r.r),r.g=ni(r.g),r.b=ni(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===si?fs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hs]:{primaries:t,whitePoint:n,transfer:fs,toXYZ:yh,fromXYZ:vh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:de,toXYZ:yh,fromXYZ:vh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var ee=L0();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pr,ta=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{pr===void 0&&(pr=Ir("canvas")),pr.width=t.width,pr.height=t.height;let r=pr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=pr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ni(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},F0=0,Lr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=ks(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jl(r[o].image)):s.push(Jl(r[o]))}else s=Jl(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var D0=0,Ql=new H,Je=class i extends kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=un,r=un,s=Ge,o=Li,a=vn,l=dn,c=i.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=ks(),this.name="",this.source=new Lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qi:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qi:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=zc;Je.DEFAULT_ANISOTROPY=1;var ru=class ru{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],b=l[2],x=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-b)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+b)<.1&&Math.abs(g+x)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(d+1)/2,S=(p+1)/2,w=(u+h)/4,A=(f+b)/4,_=(g+x)/4;return M>v&&M>S?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=w/n,s=A/n):v>S?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=_/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=A/s,r=_/s),this.set(n,r,s,e),this}let y=Math.sqrt((x-g)*(x-g)+(f-b)*(f-b)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(x-g)/y,this.y=(f-b)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ru.prototype.isVector4=!0;var Ae=ru,ea=class extends kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new Je(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Lr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends ea{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ps=class extends Je{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var na=class extends Je{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Sa=class Sa{constructor(t,e,n,r,s,o,a,l,c,u,f,h,d,g,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,f,h,d,g,b,x)}set(t,e,n,r,s,o,a,l,c,u,f,h,d,g,b,x){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=b,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/mr.setFromMatrixColumn(t,0).length(),s=1/mr.setFromMatrixColumn(t,1).length(),o=1/mr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let h=o*u,d=o*f,g=a*u,b=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-b*c,e[9]=-a*l,e[2]=b-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*u,d=l*f,g=c*u,b=c*f;e[0]=h+b*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=b+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*u,d=l*f,g=c*u,b=c*f;e[0]=h-b*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=b-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*u,d=o*f,g=a*u,b=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+b,e[1]=l*f,e[5]=b*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,d=o*c,g=a*l,b=a*c;e[0]=l*u,e[4]=b-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-b*f}else if(t.order==="XZY"){let h=o*l,d=o*c,g=a*l,b=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+b,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=b*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(U0,t,N0)}lookAt(t,e,n){let r=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),mi.crossVectors(n,ln),mi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),mi.crossVectors(n,ln)),mi.normalize(),go.crossVectors(ln,mi),r[0]=mi.x,r[4]=go.x,r[8]=ln.x,r[1]=mi.y,r[5]=go.y,r[9]=ln.y,r[2]=mi.z,r[6]=go.z,r[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],b=n[6],x=n[10],p=n[14],y=n[3],M=n[7],v=n[11],S=n[15],w=r[0],A=r[4],_=r[8],T=r[12],C=r[1],I=r[5],L=r[9],P=r[13],E=r[2],D=r[6],U=r[10],N=r[14],k=r[3],B=r[7],G=r[11],V=r[15];return s[0]=o*w+a*C+l*E+c*k,s[4]=o*A+a*I+l*D+c*B,s[8]=o*_+a*L+l*U+c*G,s[12]=o*T+a*P+l*N+c*V,s[1]=u*w+f*C+h*E+d*k,s[5]=u*A+f*I+h*D+d*B,s[9]=u*_+f*L+h*U+d*G,s[13]=u*T+f*P+h*N+d*V,s[2]=g*w+b*C+x*E+p*k,s[6]=g*A+b*I+x*D+p*B,s[10]=g*_+b*L+x*U+p*G,s[14]=g*T+b*P+x*N+p*V,s[3]=y*w+M*C+v*E+S*k,s[7]=y*A+M*I+v*D+S*B,s[11]=y*_+M*L+v*U+S*G,s[15]=y*T+M*P+v*N+S*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],b=t[7],x=t[11],p=t[15],y=l*d-c*h,M=a*d-c*f,v=a*h-l*f,S=o*d-c*u,w=o*h-l*u,A=o*f-a*u;return e*(b*y-x*M+p*v)-n*(g*y-x*S+p*w)+r*(g*M-b*S+p*A)-s*(g*v-b*w+x*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],b=t[13],x=t[14],p=t[15],y=e*a-n*o,M=e*l-r*o,v=e*c-s*o,S=n*l-r*a,w=n*c-s*a,A=r*c-s*l,_=u*b-f*g,T=u*x-h*g,C=u*p-d*g,I=f*x-h*b,L=f*p-d*b,P=h*p-d*x,E=y*P-M*L+v*I+S*C-w*T+A*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/E;return t[0]=(a*P-l*L+c*I)*D,t[1]=(r*L-n*P-s*I)*D,t[2]=(b*A-x*w+p*S)*D,t[3]=(h*w-f*A-d*S)*D,t[4]=(l*C-o*P-c*T)*D,t[5]=(e*P-r*C+s*T)*D,t[6]=(x*v-g*A-p*M)*D,t[7]=(u*A-h*v+d*M)*D,t[8]=(o*L-a*C+c*_)*D,t[9]=(n*C-e*L-s*_)*D,t[10]=(g*w-b*v+p*y)*D,t[11]=(f*v-u*w-d*y)*D,t[12]=(a*T-o*I-l*_)*D,t[13]=(e*I-n*T+r*_)*D,t[14]=(b*M-g*S-x*y)*D,t[15]=(u*S-f*M+h*y)*D,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,b=o*u,x=o*f,p=a*f,y=l*c,M=l*u,v=l*f,S=n.x,w=n.y,A=n.z;return r[0]=(1-(b+p))*S,r[1]=(d+v)*S,r[2]=(g-M)*S,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(h+p))*w,r[6]=(x+y)*w,r[7]=0,r[8]=(g+M)*A,r[9]=(x-y)*A,r[10]=(1-(h+b))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=mr.set(r[0],r[1],r[2]).length(),a=mr.set(r[4],r[5],r[6]).length(),l=mr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Tn.copy(this);let c=1/o,u=1/a,f=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,e.setFromRotationMatrix(Tn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Rn,l=!1){let c=this.elements,u=2*s/(e-t),f=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r),g,b;if(l)g=s/(o-s),b=o*s/(o-s);else if(a===Rn)g=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===ds)g=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Rn,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-r),h=-(e+t)/(e-t),d=-(n+r)/(n-r),g,b;if(l)g=1/(o-s),b=o/(o-s);else if(a===Rn)g=-2/(o-s),b=-(o+s)/(o-s);else if(a===ds)g=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Sa.prototype.isMatrix4=!0;var Te=Sa,mr=new H,Tn=new Te,U0=new H(0,0,0),N0=new H(1,1,1),mi=new H,go=new H,ln=new H,Mh=new Te,Sh=new Vn,vi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},O0=0,Th=new H,gr=new Vn,Jn=new Te,xo=new H,rs=new H,B0=new H,z0=new Vn,wh=new H(1,0,0),Eh=new H(0,1,0),Ah=new H(0,0,1),Rh={type:"added"},k0={type:"removed"},xr={type:"childadded",child:null},jl={type:"childremoved",child:null},an=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new vi,n=new Vn,r=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Te},normalMatrix:{value:new Wt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gr.setFromAxisAngle(t,e),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,e){return gr.setFromAxisAngle(t,e),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(wh,t)}rotateY(t){return this.rotateOnAxis(Eh,t)}rotateZ(t){return this.rotateOnAxis(Ah,t)}translateOnAxis(t,e){return Th.copy(t).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wh,t)}translateY(t){return this.translateOnAxis(Eh,t)}translateZ(t){return this.translateOnAxis(Ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xo.copy(t):xo.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(rs,xo,this.up):Jn.lookAt(xo,rs,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(Jn),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rh),xr.child=t,this.dispatchEvent(xr),xr.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(k0),jl.child=t,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rh),xr.child=t,this.dispatchEvent(xr),xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,B0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new H(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},V0={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let x=e.getJointPose(b,n),p=this._getHandJoint(c,b);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},bo={h:0,s:0,l:0};function tc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var at=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ee.workingColorSpace){if(t=P0(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=tc(o,s,t+1/3),this.g=tc(o,s,t),this.b=tc(o,s,t-1/3)}return ee.colorSpaceToWorking(this,r),this}setStyle(t,e=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Df[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ee.workingToColorSpace($e.copy(this),t),Math.round(ne($e.r*255,0,255))*65536+Math.round(ne($e.g*255,0,255))*256+Math.round(ne($e.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace($e.copy(this),e);let n=$e.r,r=$e.g,s=$e.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ce){ee.workingToColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,r=$e.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(bo);let n=$l(gi.h,bo.h,e),r=$l(gi.s,bo.s,e),s=$l(gi.l,bo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new at;at.NAMES=Df;var ms=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new at(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var $i=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wn=new H,Qn=new H,ec=new H,jn=new H,br=new H,_r=new H,Ch=new H,nc=new H,ic=new H,rc=new H,sc=new Ae,oc=new Ae,ac=new Ae,yi=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),wn.subVectors(t,e),r.cross(wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){wn.subVectors(r,e),Qn.subVectors(n,e),ec.subVectors(t,e);let o=wn.dot(wn),a=wn.dot(Qn),l=wn.dot(ec),c=Qn.dot(Qn),u=Qn.dot(ec),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return sc.setScalar(0),oc.setScalar(0),ac.setScalar(0),sc.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,n),ac.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(sc,s.x),o.addScaledVector(oc,s.y),o.addScaledVector(ac,s.z),o}static isFrontFacing(t,e,n,r){return wn.subVectors(n,e),Qn.subVectors(t,e),wn.cross(Qn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),wn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;br.subVectors(r,n),_r.subVectors(s,n),nc.subVectors(t,n);let l=br.dot(nc),c=_r.dot(nc);if(l<=0&&c<=0)return e.copy(n);ic.subVectors(t,r);let u=br.dot(ic),f=_r.dot(ic);if(u>=0&&f<=u)return e.copy(r);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(br,o);rc.subVectors(t,s);let d=br.dot(rc),g=_r.dot(rc);if(g>=0&&d<=g)return e.copy(s);let b=d*c-l*g;if(b<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(_r,a);let x=u*g-d*f;if(x<=0&&f-u>=0&&d-g>=0)return Ch.subVectors(s,r),a=(f-u)/(f-u+(d-g)),e.copy(r).addScaledVector(Ch,a);let p=1/(x+b+h);return o=b*p,a=h*p,e.copy(n).addScaledVector(br,o).addScaledVector(_r,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},je=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(s,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_o.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(t.matrixWorld),this.union(_o)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),yo.subVectors(this.max,ss),yr.subVectors(t.a,ss),vr.subVectors(t.b,ss),Mr.subVectors(t.c,ss),xi.subVectors(vr,yr),bi.subVectors(Mr,vr),Gi.subVectors(yr,Mr);let e=[0,-xi.z,xi.y,0,-bi.z,bi.y,0,-Gi.z,Gi.y,xi.z,0,-xi.x,bi.z,0,-bi.x,Gi.z,0,-Gi.x,-xi.y,xi.x,0,-bi.y,bi.x,0,-Gi.y,Gi.x,0];return!lc(e,yr,vr,Mr,yo)||(e=[1,0,0,0,1,0,0,0,1],!lc(e,yr,vr,Mr,yo))?!1:(vo.crossVectors(xi,bi),e=[vo.x,vo.y,vo.z],lc(e,yr,vr,Mr,yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ti=[new H,new H,new H,new H,new H,new H,new H,new H],En=new H,_o=new je,yr=new H,vr=new H,Mr=new H,xi=new H,bi=new H,Gi=new H,ss=new H,yo=new H,vo=new H,Hi=new H;function lc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Hi.fromArray(i,s);let a=r.x*Math.abs(Hi.x)+r.y*Math.abs(Hi.y)+r.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),u=n.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Le=new H,Mo=new Jt,G0=0,bn=class extends kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:G0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cf,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var gs=class extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Zi=class extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}},H0=new je,os=new H,cc=new H,Mi=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):H0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);let e=os.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(os,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(cc)),this.expandByPoint(os.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},W0=0,xn=new Te,uc=new an,Sr=new H,cn=new je,as=new je,ze=new H,Qt=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(C0(t)?Zi:gs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new je);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];as.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(cn.min,as.min),cn.expandByPoint(ze),ze.addVectors(cn.max,as.max),cn.expandByPoint(ze)):(cn.expandByPoint(as.min),cn.expandByPoint(as.max))}cn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ze.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ze));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ze.fromBufferAttribute(a,c),l&&(Sr.fromBufferAttribute(t,c),ze.add(Sr)),r=Math.max(r,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new H,l[_]=new H;let c=new H,u=new H,f=new H,h=new Jt,d=new Jt,g=new Jt,b=new H,x=new H;function p(_,T,C){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,C),h.fromBufferAttribute(s,_),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,C),u.sub(c),f.sub(c),d.sub(h),g.sub(h);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),x.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),a[_].add(b),a[T].add(b),a[C].add(b),l[_].add(x),l[T].add(x),l[C].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,T=y.length;_<T;++_){let C=y[_],I=C.start,L=C.count;for(let P=I,E=I+L;P<E;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let M=new H,v=new H,S=new H,w=new H;function A(_){S.fromBufferAttribute(r,_),w.copy(S);let T=a[_];M.copy(T),M.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(w,T);let I=v.dot(l[_])<0?-1:1;o.setXYZW(_,M.x,M.y,M.z,I)}for(let _=0,T=y.length;_<T;++_){let C=y[_],I=C.start,L=C.count;for(let P=I,E=I+L;P<E;P+=3)A(t.getX(P+0)),A(t.getX(P+1)),A(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),b=t.getX(h+1),x=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,x),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,x),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let b=0,x=l.length;b<x;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new bn(h,u,f)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var hc=new H,X0=new H,Y0=new Wt,An=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=hc.subVectors(n,e).cross(X0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(hc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Y0.getNormalMatrix(t),r=this.coplanarPoint(hc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},q0=0,ii=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Ii,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cc,this.blendDst=Ic,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new at().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new An().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ei=new H,fc=new H,So=new H,To=new H,Ki=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){fc.copy(t).add(e).multiplyScalar(.5),So.copy(e).sub(t).normalize(),To.copy(this.origin).sub(fc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(So),a=To.dot(this.direction),l=-To.dot(So),c=To.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){let b=1/u;f*=b,h*=b,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(fc).addScaledVector(So,h),d}intersectSphere(t,e){if(t.radius<0)return null;ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),r=ei.dot(ei)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,g=e.x-o.x,b=e.y-o.y,x=e.z-o.z,p=n.x-o.x,y=n.y-o.y,M=n.z-o.z,v=Math.abs(l),S=Math.abs(c),w=Math.abs(u),A,_,T,C,I,L,P,E,D,U,N,k;if(v>=S&&v>=w?(T=l,L=f,D=g,k=p,l>=0?(A=c,_=u,C=h,I=d,P=b,E=x,U=y,N=M):(A=u,_=c,C=d,I=h,P=x,E=b,U=M,N=y)):S>=w?(T=c,L=h,D=b,k=y,c>=0?(A=u,_=l,C=d,I=f,P=x,E=g,U=M,N=p):(A=l,_=u,C=f,I=d,P=g,E=x,U=p,N=M)):(T=u,L=d,D=x,k=M,u>=0?(A=l,_=c,C=f,I=h,P=g,E=b,U=p,N=y):(A=c,_=l,C=h,I=f,P=b,E=g,U=y,N=p)),T===0)return null;let B=A/T,G=_/T,V=1/T,nt=C-B*L,$=I-G*L,ot=P-B*D,K=E-G*D,ht=U-B*k,X=N-G*k,J=ht*K-X*ot,ft=nt*X-$*ht,mt=ot*$-K*nt;if(r){if(J<0||ft<0||mt<0)return null}else if((J<0||ft<0||mt<0)&&(J>0||ft>0||mt>0))return null;let pt=J+ft+mt;if(pt===0)return null;let At=V*(J*L+ft*D+mt*k);return(pt>0?At<0:At>0)?null:this.at(At/pt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ih=new Te,Wi=new Ki,wo=new Mi,Ph=new H,Eo=new H,Ao=new H,Ro=new H,dc=new H,Co=new H,Lh=new H,Io=new H,Yt=class extends an{constructor(t=new Qt,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Co.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(dc.fromBufferAttribute(f,t),o?Co.addScaledVector(dc,u):Co.addScaledVector(dc.sub(e),u))}e.add(Co)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),Wi.copy(t.ray).recast(t.near),!(wo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(wo,Ph)===null||Wi.origin.distanceToSquared(Ph)>(t.far-t.near)**2))&&(Ih.copy(s).invert(),Wi.copy(t.ray).applyMatrix4(Ih),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=h.length;g<b;g++){let x=h[g],p=o[x.materialIndex],y=Math.max(x.start,d.start),M=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,S=M;v<S;v+=3){let w=a.getX(v),A=a.getX(v+1),_=a.getX(v+2);r=Po(this,p,t,n,c,u,f,w,A,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let x=g,p=b;x<p;x+=3){let y=a.getX(x),M=a.getX(x+1),v=a.getX(x+2);r=Po(this,o,t,n,c,u,f,y,M,v),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,b=h.length;g<b;g++){let x=h[g],p=o[x.materialIndex],y=Math.max(x.start,d.start),M=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,S=M;v<S;v+=3){let w=v,A=v+1,_=v+2;r=Po(this,p,t,n,c,u,f,w,A,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let x=g,p=b;x<p;x+=3){let y=x,M=x+1,v=x+2;r=Po(this,o,t,n,c,u,f,y,M,v),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}};function $0(i,t,e,n,r,s,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Ci,a),l===null)return null;Io.copy(a),Io.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Io);return c<e.near||c>e.far?null:{distance:c,point:Io.clone(),object:i}}function Po(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Eo),i.getVertexPosition(l,Ao),i.getVertexPosition(c,Ro);let u=$0(i,t,e,n,Eo,Ao,Ro,Lh);if(u){let f=new H;yi.getBarycoord(Lh,Eo,Ao,Ro,f),r&&(u.uv=yi.getInterpolatedAttribute(r,a,l,c,f,new Jt)),s&&(u.uv1=yi.getInterpolatedAttribute(s,a,l,c,f,new Jt)),o&&(u.normal=yi.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new H,materialIndex:0};yi.getNormal(Eo,Ao,Ro,h.normal),u.face=h,u.barycoord=f}return u}var ia=class extends Je{constructor(t=null,e=1,n=1,r,s,o,a,l,c=ke,u=ke,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xi=new Mi,Z0=new Jt(.5,.5),Lo=new H,xs=class{constructor(t=new An,e=new An,n=new An,r=new An,s=new An,o=new An){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],b=s[9],x=s[10],p=s[11],y=s[12],M=s[13],v=s[14],S=s[15];if(r[0].setComponents(c-o,d-u,p-g,S-y).normalize(),r[1].setComponents(c+o,d+u,p+g,S+y).normalize(),r[2].setComponents(c+a,d+f,p+b,S+M).normalize(),r[3].setComponents(c-a,d-f,p-b,S-M).normalize(),n)r[4].setComponents(l,h,x,v).normalize(),r[5].setComponents(c-l,d-h,p-x,S-v).normalize();else if(r[4].setComponents(c-l,d-h,p-x,S-v).normalize(),e===Rn)r[5].setComponents(c+l,d+h,p+x,S+v).normalize();else if(e===ds)r[5].setComponents(l,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);let e=Z0.distanceTo(t.center);return Xi.radius=.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Lo.x=r.normal.x>0?t.max.x:t.min.x,Lo.y=r.normal.y>0?t.max.y:t.min.y,Lo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _n=class extends ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ra=new H,sa=new H,Fh=new Te,ls=new Ki,Fo=new Mi,pc=new H,Dh=new H,oa=class extends an{constructor(t=new Qt,e=new _n){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ra.fromBufferAttribute(e,r-1),sa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ra.distanceTo(sa);t.setAttribute("lineDistance",new Gt(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),Fo.radius+=s,t.ray.intersectsSphere(Fo)===!1)return;Fh.copy(r).invert(),ls.copy(t.ray).applyMatrix4(Fh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let b=d,x=g-1;b<x;b+=c){let p=u.getX(b),y=u.getX(b+1),M=Do(this,t,ls,l,p,y,b);M&&e.push(M)}if(this.isLineLoop){let b=u.getX(g-1),x=u.getX(d),p=Do(this,t,ls,l,b,x,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let b=d,x=g-1;b<x;b+=c){let p=Do(this,t,ls,l,b,b+1,b);p&&e.push(p)}if(this.isLineLoop){let b=Do(this,t,ls,l,g-1,d,g-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Do(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(ra.fromBufferAttribute(a,r),sa.fromBufferAttribute(a,s),e.distanceSqToSegment(ra,sa,pc,Dh)>n)return;pc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(pc);if(!(c<t.near||c>t.far))return{distance:c,point:Dh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Uh=new H,Nh=new H,yn=class extends oa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Uh.fromBufferAttribute(e,r),Nh.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Uh.distanceTo(Nh);t.setAttribute("lineDistance",new Gt(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ji=class extends ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Oh=new Te,yc=new Ki,Uo=new Mi,No=new H,Ur=class extends an{constructor(t=new Qt,e=new Ji){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,t.ray.intersectsSphere(Uo)===!1)return;Oh.copy(r).invert(),yc.copy(t.ray).applyMatrix4(Oh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,b=d;g<b;g++){let x=c.getX(g);No.fromBufferAttribute(f,x),Bh(No,x,l,r,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,b=d;g<b;g++)No.fromBufferAttribute(f,g),Bh(No,g,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Bh(i,t,e,n,r,s,o){let a=yc.distanceSqToPoint(i);if(a<e){let l=new H;yc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var bs=class extends Je{constructor(t=[],e=Pi,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Si=class extends Je{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ti=class extends Je{constructor(t,e,n=In,r,s,o,a=ke,l=ke,c,u=zn,f=1){if(u!==zn&&u!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},aa=class extends Ti{constructor(t,e=In,n=Pi,r,s,o=ke,a=ke,l,c=zn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},_s=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Nr=class i extends Qt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2));function g(b,x,p,y,M,v,S,w,A,_,T){let C=v/A,I=S/_,L=v/2,P=S/2,E=w/2,D=A+1,U=_+1,N=0,k=0,B=new H;for(let G=0;G<U;G++){let V=G*I-P;for(let nt=0;nt<D;nt++){let $=nt*C-L;B[b]=$*y,B[x]=V*M,B[p]=E,c.push(B.x,B.y,B.z),B[b]=0,B[x]=0,B[p]=w>0?1:-1,u.push(B.x,B.y,B.z),f.push(nt/A),f.push(1-G/_),N+=1}}for(let G=0;G<_;G++)for(let V=0;V<A;V++){let nt=h+V+D*G,$=h+V+D*(G+1),ot=h+(V+1)+D*(G+1),K=h+(V+1)+D*G;l.push(nt,$,K),l.push($,ot,K),k+=6}a.addGroup(d,k,T),d+=k,h+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ys=class i extends Qt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new H,u=new Jt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=n+f/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function K0(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Uf(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=em(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let u=a,f=l;for(let h=e;h<r;h+=e){let d=i[h],g=i[h+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>f&&(f=g)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return vs(s,o,e,a,l,c,0),o}function Uf(i,t,e,n,r){let s;if(r===fm(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=zh(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=zh(o/n|0,i[o],i[o+1],s);return s&&Or(s,s.next)&&(Ss(s),s=s.next),s}function Qi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Or(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Ss(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vs(i,t,e,n,r,s,o){if(!i)return;!o&&s&&om(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Q0(i,n,r,s):J0(i)){t.push(l.i,i.i,c.i),Ss(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=j0(Qi(i),t),vs(i,t,e,n,r,s,2)):o===2&&tm(i,t,e,n,r,s):vs(Qi(i),t,e,n,r,s,1);break}}}function J0(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&cs(r,a,s,l,o,c,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Q0(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ee(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=Math.min(a,l,c),g=Math.min(u,f,h),b=Math.max(a,l,c),x=Math.max(u,f,h),p=vc(d,g,t,e,n),y=vc(b,x,t,e,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=y;){if(M.x>=d&&M.x<=b&&M.y>=g&&M.y<=x&&M!==r&&M!==o&&cs(a,u,l,f,c,h,M.x,M.y)&&Ee(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=b&&v.y>=g&&v.y<=x&&v!==r&&v!==o&&cs(a,u,l,f,c,h,v.x,v.y)&&Ee(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=b&&M.y>=g&&M.y<=x&&M!==r&&M!==o&&cs(a,u,l,f,c,h,M.x,M.y)&&Ee(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=b&&v.y>=g&&v.y<=x&&v!==r&&v!==o&&cs(a,u,l,f,c,h,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function j0(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Or(n,r)&&Of(n,e,e.next,r)&&Ms(n,r)&&Ms(r,n)&&(t.push(n.i,e.i,r.i),Ss(e),Ss(e.next),e=i=r),e=e.next}while(e!==i);return Qi(e)}function tm(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cm(o,a)){let l=Bf(o,a);o=Qi(o,o.next),l=Qi(l,l.next),vs(o,t,e,n,r,s,0),vs(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function em(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Uf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(lm(c))}r.sort(nm);for(let s=0;s<r.length;s++)e=im(r[s],e);return e}function nm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function im(i,t){let e=rm(i,t);if(!e)return t;let n=Bf(e,i);return Qi(n,n.next),Qi(e,e.next)}function rm(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Or(i,e))return e;do{if(Or(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Nf(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let f=Math.abs(r-e.y)/(n-e.x);Ms(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&sm(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function sm(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function om(i,t,e,n){let r=i;do r.z===0&&(r.z=vc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,am(r)}function am(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function vc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function lm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Nf(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function cs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Nf(i,t,e,n,r,s,o,a)}function cm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!um(i,t)&&(Ms(i,t)&&Ms(t,i)&&hm(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Or(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Or(i,t){return i.x===t.x&&i.y===t.y}function Of(i,t,e,n){let r=Bo(Ee(i,t,e)),s=Bo(Ee(i,t,n)),o=Bo(Ee(e,n,i)),a=Bo(Ee(e,n,t));return!!(r!==s&&o!==a||r===0&&Oo(i,e,t)||s===0&&Oo(i,n,t)||o===0&&Oo(e,i,n)||a===0&&Oo(e,t,n))}function Oo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Bo(i){return i>0?1:i<0?-1:0}function um(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Of(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ms(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function hm(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bf(i,t){let e=Mc(i.i,i.x,i.y),n=Mc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function zh(i,t,e,n){let r=Mc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ss(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Mc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fm(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Sc=class{static triangulate(t,e,n=2){return K0(t,e,n)}},Ts=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];kh(t),Vh(n,t);let o=t.length;e.forEach(kh);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Vh(n,e[l]);let a=Sc.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function kh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var wi=class i extends Qt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],b=[],x=[];for(let p=0;p<u;p++){let y=p*h-o;for(let M=0;M<c;M++){let v=M*f-s;g.push(v,-y,0),b.push(0,0,1),x.push(M/a),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let M=y+c*p,v=y+c*(p+1),S=y+1+c*(p+1),w=y+1+c*p;d.push(M,v,w),d.push(v,S,w)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(b,3)),this.setAttribute("uv",new Gt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ws=class i extends Qt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],f=t,h=(e-t)/r,d=new H,g=new Jt;for(let b=0;b<=r;b++){for(let x=0;x<=n;x++){let p=s+x/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let b=0;b<r;b++){let x=b*(n+1);for(let p=0;p<n;p++){let y=p+x,M=y,v=y+n+1,S=y+n+2,w=y+1;a.push(M,v,w),a.push(v,S,w)}}this.setIndex(a),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function er(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Gh(r))r.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Gh(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=er(i[e]);for(let r in n)t[r]=n[r]}return t}function Gh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function dm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var zf={clone:er,merge:tn},pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pm,this.fragmentShader=mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=dm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new at().setHex(r.value);break;case"v2":this.uniforms[n].value=new Jt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new H().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Te().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},la=class extends hn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ca=class extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ua=class extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Tr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function mc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ei=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ha=class extends Ei{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xc,endingEnd:xc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case bc:s=t,a=2*e-n;break;case _c:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:o=t,l=2*n-e;break;case _c:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(r-e),b=g*g,x=b*g,p=-h*x+2*h*b-h*g,y=(1+h)*x+(-1.5-2*h)*b+(-.5+h)*g+1,M=(-1-d)*x+(1.5+d)*b+.5*g,v=d*x-d*b;for(let S=0;S!==a;++S)s[S]=p*o[u+S]+y*o[c+S]+M*o[l+S]+v*o[f+S];return s}},fa=class extends Ei{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},da=class extends Ei{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},pa=class extends Ei{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(r-e),b=1-g;for(let x=0;x!==a;++x)s[x]=o[c+x]*b+o[l+x]*g;return s}let h=a*2,d=t-1;for(let g=0;g!==a;++g){let b=o[c+g],x=o[l+g],p=d*h+g*2,y=f[p],M=f[p+1],v=t*h+g*2,S=u[v],w=u[v+1],A=xm(n,e,y,S,r);s[g]=kf(A,b,M,w,x)}return s}};function kf(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function gm(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function xm(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=kf(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=gm(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var fn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Tr(e,this.TimeBufferType),this.values=Tr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Tr(t.times,Array),values:Tr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),mc(t.settings)&&(n.settings={inTangents:Tr(t.settings.inTangents,Array),outTangents:Tr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case us:e=this.InterpolantFactoryMethodDiscrete;break;case Qo:e=this.InterpolantFactoryMethodLinear;break;case Vo:e=this.InterpolantFactoryMethodSmooth;break;case gc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return Qo;case this.InterpolantFactoryMethodSmooth:return Vo;case this.InterpolantFactoryMethodBezier:return gc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;mc(this.settings)&&(Hh(this.settings.inTangents,t),Hh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&I0(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Vo,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let b=e[f+g];if(b!==e[h+g]||b!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,mc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Hh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Qo;var Ai=class extends fn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=us;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends fn{constructor(t,e,n,r){super(t,e,n,r)}};ma.prototype.ValueTypeName="color";var ga=class extends fn{constructor(t,e,n,r){super(t,e,n,r)}};ga.prototype.ValueTypeName="number";var xa=class extends Ei{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)Vn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Es=class extends fn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new xa(this.times,this.values,this.getValueSize(),t)}};Es.prototype.ValueTypeName="quaternion";Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends fn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=us;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends fn{constructor(t,e,n,r){super(t,e,n,r)}};ba.prototype.ValueTypeName="vector";var Ho={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Wh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Wh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Wh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var _a=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vf=new _a,Br=class{constructor(t){this.manager=t!==void 0?t:Vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Br.DEFAULT_MATERIAL_NAME="__DEFAULT";var wr=new WeakMap,ya=class extends Br{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Ho.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let f=wr.get(o);f===void 0&&(f=[],wr.set(o,f)),f.push({onLoad:e,onError:r})}return o}let a=Ir("img");function l(){u(),e&&e(this);let f=wr.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}wr.delete(this),s.manager.itemEnd(t)}function c(f){u(),r&&r(f),Ho.remove(`image:${t}`);let h=wr.get(this)||[];for(let d=0;d<h.length;d++){let g=h[d];g.onError&&g.onError(f)}wr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ho.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var As=class extends Br{constructor(t){super(t)}load(t,e,n,r){let s=new Je,o=new ya(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var zo=new H,ko=new Vn,Bn=new H,Rs=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zo,ko,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,ko,Bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(zo,ko,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,ko,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_i=new H,Xh=new Jt,Yh=new Jt,Ze=class extends Rs{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ql*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,Xh,Yh),e.subVectors(Yh,Xh)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ql*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ri=class extends Rs{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Er=-90,Ar=1,va=class extends an{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ze(Er,Ar,t,e);r.layers=this.layers,this.add(r);let s=new Ze(Er,Ar,t,e);s.layers=this.layers,this.add(s);let o=new Ze(Er,Ar,t,e);o.layers=this.layers,this.add(o);let a=new Ze(Er,Ar,t,e);a.layers=this.layers,this.add(a);let l=new Ze(Er,Ar,t,e);l.layers=this.layers,this.add(l);let c=new Ze(Er,Ar,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ma=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Qc="\\[\\]\\.:\\/",bm=new RegExp("["+Qc+"]","g"),jc="[^"+Qc+"]",_m="[^"+Qc.replace("\\.","")+"]",ym=/((?:WC+[\/:])*)/.source.replace("WC",jc),vm=/(WCOD+)?/.source.replace("WCOD",_m),Mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jc),Sm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jc),Tm=new RegExp("^"+ym+vm+Mm+Sm+"$"),wm=["material","materials","bones","map"],Tc=class{constructor(t,e,n){let r=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bm,"")}static parseTrackName(t){let e=Tm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);wm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Tc;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E2=new Float32Array(1);var qh=new Te,Cs=class{constructor(t,e,n=0,r=1/0){this.ray=new Ki(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qh),this}intersectObject(t,e=!0,n=[]){return wc(t,this,n,e),n.sort($h),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)wc(t[r],this,n,e);return n.sort($h),n}};function $h(i,t){return i.distance-t.distance}function wc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)wc(s[o],t,e,!0)}}var su=class su{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};su.prototype.isMatrix2=!0;var Ec=su;function tu(i,t,e,n){let r=Em(n);switch(e){case Wc:return i*t;case Yc:return i*t/r.components*r.byteLength;case Ia:return i*t/r.components*r.byteLength;case Di:return i*t*2/r.components*r.byteLength;case Pa:return i*t*2/r.components*r.byteLength;case Xc:return i*t*3/r.components*r.byteLength;case vn:return i*t*4/r.components*r.byteLength;case La:return i*t*4/r.components*r.byteLength;case Ds:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ns:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:case Na:return Math.max(i,16)*Math.max(t,8)/4;case Fa:case Ua:return Math.max(i,8)*Math.max(t,8)/2;case Oa:case Ba:case ka:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case za:case Bs:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case il:case rl:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ol:case al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zs:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Em(i){switch(i){case dn:case kc:return{byteLength:1,components:1};case kr:case Vc:case Ln:return{byteLength:2,components:1};case Ra:case Ca:return{byteLength:2,components:4};case In:case Aa:case Pn:return{byteLength:4,components:1};case Gc:case Hc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function cd(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Rm(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],b=f[d];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++h,f[h]=b)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let b=f[d];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Im=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Um=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Om=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ag=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ix=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,px=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ix=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ox=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$x=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ab=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Cm,alphahash_pars_fragment:Im,alphamap_fragment:Pm,alphamap_pars_fragment:Lm,alphatest_fragment:Fm,alphatest_pars_fragment:Dm,aomap_fragment:Um,aomap_pars_fragment:Nm,batching_pars_vertex:Om,batching_vertex:Bm,begin_vertex:zm,beginnormal_vertex:km,bsdfs:Vm,iridescence_fragment:Gm,bumpmap_pars_fragment:Hm,clipping_planes_fragment:Wm,clipping_planes_pars_fragment:Xm,clipping_planes_pars_vertex:Ym,clipping_planes_vertex:qm,color_fragment:$m,color_pars_fragment:Zm,color_pars_vertex:Km,color_vertex:Jm,common:Qm,cube_uv_reflection_fragment:jm,defaultnormal_vertex:tg,displacementmap_pars_vertex:eg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:rg,colorspace_fragment:sg,colorspace_pars_fragment:og,envmap_fragment:ag,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:vg,envmap_vertex:hg,fog_vertex:fg,fog_pars_vertex:dg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_pars_fragment:xg,lights_lambert_fragment:bg,lights_lambert_pars_fragment:_g,lights_pars_begin:yg,lights_toon_fragment:Mg,lights_toon_pars_fragment:Sg,lights_phong_fragment:Tg,lights_phong_pars_fragment:wg,lights_physical_fragment:Eg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Rg,lights_fragment_maps:Cg,lights_fragment_end:Ig,lightprobes_pars_fragment:Pg,logdepthbuf_fragment:Lg,logdepthbuf_pars_fragment:Fg,logdepthbuf_pars_vertex:Dg,logdepthbuf_vertex:Ug,map_fragment:Ng,map_pars_fragment:Og,map_particle_fragment:Bg,map_particle_pars_fragment:zg,metalnessmap_fragment:kg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Gg,morphcolor_vertex:Hg,morphnormal_vertex:Wg,morphtarget_pars_vertex:Xg,morphtarget_vertex:Yg,normal_fragment_begin:qg,normal_fragment_maps:$g,normal_pars_fragment:Zg,normal_pars_vertex:Kg,normal_vertex:Jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:jg,clearcoat_normal_fragment_maps:tx,clearcoat_pars_fragment:ex,iridescence_pars_fragment:nx,opaque_fragment:ix,packing:rx,premultiplied_alpha_fragment:sx,project_vertex:ox,dithering_fragment:ax,dithering_pars_fragment:lx,roughnessmap_fragment:cx,roughnessmap_pars_fragment:ux,shadowmap_pars_fragment:hx,shadowmap_pars_vertex:fx,shadowmap_vertex:dx,shadowmask_pars_fragment:px,skinbase_vertex:mx,skinning_pars_vertex:gx,skinning_vertex:xx,skinnormal_vertex:bx,specularmap_fragment:_x,specularmap_pars_fragment:yx,tonemapping_fragment:vx,tonemapping_pars_fragment:Mx,transmission_fragment:Sx,transmission_pars_fragment:Tx,uv_pars_fragment:wx,uv_pars_vertex:Ex,uv_vertex:Ax,worldpos_vertex:Rx,background_vert:Cx,background_frag:Ix,backgroundCube_vert:Px,backgroundCube_frag:Lx,cube_vert:Fx,cube_frag:Dx,depth_vert:Ux,depth_frag:Nx,distance_vert:Ox,distance_frag:Bx,equirect_vert:zx,equirect_frag:kx,linedashed_vert:Vx,linedashed_frag:Gx,meshbasic_vert:Hx,meshbasic_frag:Wx,meshlambert_vert:Xx,meshlambert_frag:Yx,meshmatcap_vert:qx,meshmatcap_frag:$x,meshnormal_vert:Zx,meshnormal_frag:Kx,meshphong_vert:Jx,meshphong_frag:Qx,meshphysical_vert:jx,meshphysical_frag:tb,meshtoon_vert:eb,meshtoon_frag:nb,points_vert:ib,points_frag:rb,shadow_vert:sb,shadow_frag:ob,sprite_vert:ab,sprite_frag:lb},St={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Wn={basic:{uniforms:tn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:tn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:tn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:tn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:tn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new at(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:tn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:tn([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:tn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:tn([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:tn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:tn([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:tn([St.common,St.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:tn([St.lights,St.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Wn.physical={uniforms:tn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var hl={r:0,b:0,g:0},cb=new Te,ud=new Wt;ud.set(-1,0,0,0,1,0,0,0,1);function ub(i,t,e,n,r,s){let o=new at(0),a=r===!0?0:1,l,c,u=null,f=0,h=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=t.get(M,v)}return M}function g(y){let M=!1,v=d(y);v===null?x(o,a):v&&v.isColor&&(x(v,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,M){let v=d(M);v&&(v.isCubeTexture||v.mapping===Ls)?(c===void 0&&(c=new Yt(new Nr(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:er(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cb.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ud),c.material.toneMapped=ee.getTransfer(v.colorSpace)!==de,(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Yt(new wi(2,2),new hn({name:"BackgroundMaterial",uniforms:er(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ee.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function x(y,M){y.getRGB(hl,Jc(i)),e.buffers.color.setClear(hl.r,hl.g,hl.b,M,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,x(o,a)},render:g,addToRenderList:b,dispose:p}}function hb(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(I,L,P,E,D){let U=!1,N=f(I,E,P,L);s!==N&&(s=N,c(s.object)),U=d(I,E,P,D),U&&g(I,E,P,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,v(I,L,P,E),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,L,P,E){let D=E.wireframe===!0,U=n[L.id];U===void 0&&(U={},n[L.id]=U);let N=I.isInstancedMesh===!0?I.id:0,k=U[N];k===void 0&&(k={},U[N]=k);let B=k[P.id];B===void 0&&(B={},k[P.id]=B);let G=B[D];return G===void 0&&(G=h(l()),B[D]=G),G}function h(I){let L=[],P=[],E=[];for(let D=0;D<e;D++)L[D]=0,P[D]=0,E[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:E,object:I,attributes:{},index:null}}function d(I,L,P,E){let D=s.attributes,U=L.attributes,N=0,k=P.getAttributes();for(let B in k)if(k[B].location>=0){let V=D[B],nt=U[B];if(nt===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor)),V===void 0||V.attribute!==nt||nt&&V.data!==nt.data)return!0;N++}return s.attributesNum!==N||s.index!==E}function g(I,L,P,E){let D={},U=L.attributes,N=0,k=P.getAttributes();for(let B in k)if(k[B].location>=0){let V=U[B];V===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(V=I.instanceColor));let nt={};nt.attribute=V,V&&V.data&&(nt.data=V.data),D[B]=nt,N++}s.attributes=D,s.attributesNum=N,s.index=E}function b(){let I=s.newAttributes;for(let L=0,P=I.length;L<P;L++)I[L]=0}function x(I){p(I,0)}function p(I,L){let P=s.newAttributes,E=s.enabledAttributes,D=s.attributeDivisors;P[I]=1,E[I]===0&&(i.enableVertexAttribArray(I),E[I]=1),D[I]!==L&&(i.vertexAttribDivisor(I,L),D[I]=L)}function y(){let I=s.newAttributes,L=s.enabledAttributes;for(let P=0,E=L.length;P<E;P++)L[P]!==I[P]&&(i.disableVertexAttribArray(P),L[P]=0)}function M(I,L,P,E,D,U,N){N===!0?i.vertexAttribIPointer(I,L,P,D,U):i.vertexAttribPointer(I,L,P,E,D,U)}function v(I,L,P,E){b();let D=E.attributes,U=P.getAttributes(),N=L.defaultAttributeValues;for(let k in U){let B=U[k];if(B.location>=0){let G=D[k];if(G===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let V=G.normalized,nt=G.itemSize,$=t.get(G);if($===void 0)continue;let ot=$.buffer,K=$.type,ht=$.bytesPerElement,X=K===i.INT||K===i.UNSIGNED_INT||G.gpuType===Aa;if(G.isInterleavedBufferAttribute){let J=G.data,ft=J.stride,mt=G.offset;if(J.isInstancedInterleavedBuffer){for(let pt=0;pt<B.locationSize;pt++)p(B.location+pt,J.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let pt=0;pt<B.locationSize;pt++)x(B.location+pt);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let pt=0;pt<B.locationSize;pt++)M(B.location+pt,nt/B.locationSize,K,V,ft*ht,(mt+nt/B.locationSize*pt)*ht,X)}else{if(G.isInstancedBufferAttribute){for(let J=0;J<B.locationSize;J++)p(B.location+J,G.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let J=0;J<B.locationSize;J++)x(B.location+J);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let J=0;J<B.locationSize;J++)M(B.location+J,nt/B.locationSize,K,V,nt*ht,nt/B.locationSize*J*ht,X)}}else if(N!==void 0){let V=N[k];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(B.location,V);break;case 3:i.vertexAttrib3fv(B.location,V);break;case 4:i.vertexAttrib4fv(B.location,V);break;default:i.vertexAttrib1fv(B.location,V)}}}}y()}function S(){T();for(let I in n){let L=n[I];for(let P in L){let E=L[P];for(let D in E){let U=E[D];for(let N in U)u(U[N].object),delete U[N];delete E[D]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let P in L){let E=L[P];for(let D in E){let U=E[D];for(let N in U)u(U[N].object),delete U[N];delete E[D]}}delete n[I.id]}function A(I){for(let L in n){let P=n[L];for(let E in P){let D=P[E];if(D[I.id]===void 0)continue;let U=D[I.id];for(let N in U)u(U[N].object),delete U[N];delete D[I.id]}}}function _(I){for(let L in n){let P=n[L],E=I.isInstancedMesh===!0?I.id:0,D=P[E];if(D!==void 0){for(let U in D){let N=D[U];for(let k in N)u(N[k].object),delete N[k];delete D[U]}delete P[E],Object.keys(P).length===0&&delete n[L]}}}function T(){C(),o=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:x,disableUnusedAttributes:y}}function fb(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function db(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let _=A===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==dn&&A!==Pn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:w}}function pb(i){let t=this,e=null,n=0,r=!1,s=!1,o=new An,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,b=f.clipIntersection,x=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!x)s?u(null):c();else{let y=s?0:n,M=y*4,v=p.clippingState||null;l.value=v,v=u(g,h,M,d);for(let S=0;S!==M;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let b=f!==null?f.length:0,x=null;if(b!==0){if(x=l.value,g!==!0||x===null){let p=d+b*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let M=0,v=d;M!==b;++M,v+=4)o.copy(f[M]).applyMatrix4(y,a),o.normal.toArray(x,v),x[v+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}var Hr=4,mb=6,gb=20,xb=256,Vs=new ri,Gf=new at,ou=null,au=0,lu=0,cu=!1,bb=new H,nr=new H,dl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=bb}=s;ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ou,au,lu),this._renderer.xr.enabled=cu,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Ln,format:vn,colorSpace:hs,depthBuffer:!1},r=Hf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hf(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_b(s)),this._blurMaterial=vb(s,t,e),this._ggxMaterial=yb(s,t,e)}return r}_compileMaterial(t){let e=new Yt(new Qt,t);this._renderer.compile(e,Vs)}_sceneToCubeUV(t,e,n,r,s){let l=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Gf),f.toneMapping=Cn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yt(new Nr,new le({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,x=b.material,p=!1,y=t.background;y?y.isColor&&(x.color.copy(y),t.background=null,p=!0):(x.color.copy(Gf),p=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));let S=this._cubeSize;Gr(r,v*S,M>2?S:0,S,S),f.setRenderTarget(r),p&&f.render(b,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Pi||t.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Vs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:g}=this,b=this._sizeLods[n],x=3*b*(n>g-Hr?n-g+Hr:0),p=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Gr(s,x,p,3*b,2*b),r.setRenderTarget(s),r.render(a,Vs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Gr(t,x,p,3*b,2*b),r.setRenderTarget(t),r.render(a,Vs)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],f=3*u*(r>this._lodMax-Hr?r-this._lodMax+Hr:0),h=4*(this._cubeSize-u);Gr(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(l,Vs)}};function _b(i){let t=[],e=[],n=i,r=i-Hr+1+mb;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,g=new Float32Array(d*h*f),b=new Float32Array(d*h*f);for(let p=0;p<f;p++){let y=p%3*2/3-1,M=p>2?0:-1,v=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];g.set(v,d*h*p);for(let S=0;S<h;S++){let w=u[S*2]*2-1,A=u[S*2+1]*2-1;p===0?nr.set(1,A,w):p===1?nr.set(-w,1,-A):p===2?nr.set(-w,A,1):p===3?nr.set(-1,A,-w):p===4?nr.set(-w,-1,A):nr.set(w,A,-1),nr.toArray(b,(p*h+S)*d)}}let x=new Qt;x.setAttribute("position",new bn(g,d)),x.setAttribute("outputDirection",new bn(b,d)),e.push(new Yt(x,null)),n>Hr&&n--}return{lodMeshes:e,sizeLods:t}}function Hf(i,t,e){let n=new Qe(i,t,e);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function yb(i,t,e){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ml(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function vb(i,t,e){return new hn({name:"SphericalGaussianBlur",defines:{SAMPLES:gb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ml(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Wf(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Xf(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ml(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pl=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new bs(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Nr(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Gn});s.uniforms.tEquirect.value=e;let o=new Yt(r,s),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=Ge),new va(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function Mb(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===Ta||d===wa)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let b=new pl(g.height);return b.fromEquirectangularTexture(i,h),t.set(h,b),h.addEventListener("dispose",c),a(b.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===Ta||d===wa,b=d===Pi||d===tr;if(g||b){let x=e.get(h),p=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new dl(i)),x=g?n.fromEquirectangular(h,x):n.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{let y=h.image;return g&&y&&y.height>0||b&&y&&l(y)?(n===null&&(n=new dl(i)),x=g?n.fromEquirectangular(h):n.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function a(h,d){return d===Ta?h.mapping=Pi:d===wa&&(h.mapping=tr),h}function l(h){let d=0,g=6;for(let b=0;b<g;b++)h[b]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Sb(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Yi("WebGLRenderer: "+n+" extension not supported."),r}}}function Tb(i,t,e,n){let r={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];let d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,g=f.attributes.position,b=0;if(g===void 0)return;if(d!==null){let y=d.array;b=d.version;for(let M=0,v=y.length;M<v;M+=3){let S=y[M+0],w=y[M+1],A=y[M+2];h.push(S,w,w,A,A,S)}}else{let y=g.array;b=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let S=M+0,w=M+1,A=M+2;h.push(S,w,w,A,A,S)}}let x=new(g.count>=65535?Zi:gs)(h,1);x.version=b;let p=s.get(f);p&&t.remove(p),s.set(f,x)}function u(f){let h=s.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function wb(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,s,f*o),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,s,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let b=0;for(let x=0;x<d;x++)b+=h[x];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Eb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ab(i,t,e){let n=new WeakMap,r=new Ae;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),b===!0&&(M=3);let v=a.attributes.position.count*M,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*S*4*f),A=new ps(w,v,S,f);A.type=Pn,A.needsUpdate=!0;let _=M*4;for(let C=0;C<f;C++){let I=x[C],L=p[C],P=y[C],E=v*S*4*C;for(let D=0;D<I.count;D++){let U=D*_;d===!0&&(r.fromBufferAttribute(I,D),w[E+U+0]=r.x,w[E+U+1]=r.y,w[E+U+2]=r.z,w[E+U+3]=0),g===!0&&(r.fromBufferAttribute(L,D),w[E+U+4]=r.x,w[E+U+5]=r.y,w[E+U+6]=r.z,w[E+U+7]=0),b===!0&&(r.fromBufferAttribute(P,D),w[E+U+8]=r.x,w[E+U+9]=r.y,w[E+U+10]=r.z,w[E+U+11]=P.itemSize===4?r.w:1)}}h={count:f,texture:A,size:new Jt(v,S)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Rb(i,t,e,n,r){let s=new WeakMap;function o(c){let u=r.render.frame,f=c.geometry,h=t.get(c,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Cb={[Lc]:"LINEAR_TONE_MAPPING",[Fc]:"REINHARD_TONE_MAPPING",[Dc]:"CINEON_TONE_MAPPING",[Uc]:"ACES_FILMIC_TONE_MAPPING",[Oc]:"AGX_TONE_MAPPING",[Bc]:"NEUTRAL_TONE_MAPPING",[Nc]:"CUSTOM_TONE_MAPPING"};function Ib(i,t,e,n,r,s){let o=new Qe(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Qt;c.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let u=new la({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Yt(c,u),h=new ri(-1,1,1,-1,0,1),d=null,g=null,b=!1,x,p=null,y=[],M=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let w=0;w<y.length;w++){let A=y[w];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){y=v,M=y.length>0&&y[0].isRenderPass===!0;let S=o.width,w=o.height;y.length>0&&a===null&&(a=new Qe(S,w,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new Qe(S,w,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let _=y[A];_.setSize&&_.setSize(S,w)}},this.begin=function(v,S){if(b||v.toneMapping===Cn&&y.length===0)return!1;if(p=S,S!==null){let w=S.width,A=S.height;(o.width!==w||o.height!==A)&&this.setSize(w,A)}return M===!1&&v.setRenderTarget(o),x=v.toneMapping,v.toneMapping=Cn,!0},this.hasRenderPass=function(){return M},this.end=function(v,S){v.toneMapping=x,b=!0;let w=o,A=a;for(let _=0;_<y.length;_++){let T=y[_];T.enabled!==!1&&(T.render(v,A,w,S),T.needsSwap!==!1&&(w=A,A=A===a?l:a))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,u.defines={},ee.getTransfer(d)===de&&(u.defines.SRGB_TRANSFER="");let _=Cb[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(f,h),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var hd=new Je,fu=new Ti(1,1),fd=new ps,dd=new na,pd=new bs,Yf=[],qf=[],$f=new Float32Array(16),Zf=new Float32Array(9),Kf=new Float32Array(4);function Yr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Yf[r];if(s===void 0&&(s=new Float32Array(r),Yf[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function gl(i,t){let e=qf[t];e===void 0&&(e=new Int32Array(t),qf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function Fb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Db(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function Ub(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Kf.set(n),i.uniformMatrix2fv(this.addr,!1,Kf),Ne(e,n)}}function Nb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Zf.set(n),i.uniformMatrix3fv(this.addr,!1,Zf),Ne(e,n)}}function Ob(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;$f.set(n),i.uniformMatrix4fv(this.addr,!1,$f),Ne(e,n)}}function Bb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function kb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function Vb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function Gb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function Wb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function Xb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function Yb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(fu.compareFunction=e.isReversedDepthBuffer()?ul:cl,s=fu):s=hd,e.setTexture2D(t||s,r)}function qb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||dd,r)}function $b(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||pd,r)}function Zb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||fd,r)}function Kb(i){switch(i){case 5126:return Pb;case 35664:return Lb;case 35665:return Fb;case 35666:return Db;case 35674:return Ub;case 35675:return Nb;case 35676:return Ob;case 5124:case 35670:return Bb;case 35667:case 35671:return zb;case 35668:case 35672:return kb;case 35669:case 35673:return Vb;case 5125:return Gb;case 36294:return Hb;case 36295:return Wb;case 36296:return Xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Yb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return Zb}}function Jb(i,t){i.uniform1fv(this.addr,t)}function Qb(i,t){let e=Yr(t,this.size,2);i.uniform2fv(this.addr,e)}function jb(i,t){let e=Yr(t,this.size,3);i.uniform3fv(this.addr,e)}function t_(i,t){let e=Yr(t,this.size,4);i.uniform4fv(this.addr,e)}function e_(i,t){let e=Yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function n_(i,t){let e=Yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function i_(i,t){let e=Yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function r_(i,t){i.uniform1iv(this.addr,t)}function s_(i,t){i.uniform2iv(this.addr,t)}function o_(i,t){i.uniform3iv(this.addr,t)}function a_(i,t){i.uniform4iv(this.addr,t)}function l_(i,t){i.uniform1uiv(this.addr,t)}function c_(i,t){i.uniform2uiv(this.addr,t)}function u_(i,t){i.uniform3uiv(this.addr,t)}function h_(i,t){i.uniform4uiv(this.addr,t)}function f_(i,t,e){let n=this.cache,r=t.length,s=gl(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=fu:o=hd;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function d_(i,t,e){let n=this.cache,r=t.length,s=gl(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||dd,s[o])}function p_(i,t,e){let n=this.cache,r=t.length,s=gl(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||pd,s[o])}function m_(i,t,e){let n=this.cache,r=t.length,s=gl(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||fd,s[o])}function g_(i){switch(i){case 5126:return Jb;case 35664:return Qb;case 35665:return jb;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return r_;case 35667:case 35671:return s_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return l_;case 36294:return c_;case 36295:return u_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}var du=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kb(e.type)}},pu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g_(e.type)}},mu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},uu=/(\w+)(\])?(\[|\.)?/g;function Jf(i,t){i.seq.push(t),i.map[t.id]=t}function x_(i,t,e){let n=i.name,r=n.length;for(uu.lastIndex=0;;){let s=uu.exec(n),o=uu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Jf(e,c===void 0?new du(a,i,t):new pu(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new mu(a),Jf(e,f)),e=f}}}var Wr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);x_(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Qf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var b_=37297,__=0;function y_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var jf=new Wt;function v_(i){ee._getMatrix(jf,ee.workingColorSpace,i);let t=`mat3( ${jf.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case fs:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function td(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+y_(i.getShaderSource(t),a)}else return s}function M_(i,t){let e=v_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var S_={[Lc]:"Linear",[Fc]:"Reinhard",[Dc]:"Cineon",[Uc]:"ACESFilmic",[Oc]:"AgX",[Bc]:"Neutral",[Nc]:"Custom"};function T_(i,t){let e=S_[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fl=new H;function w_(){ee.getLuminanceCoefficients(fl);let i=fl.x.toFixed(4),t=fl.y.toFixed(4),e=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function A_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hs(i){return i!==""}function ed(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(i){return i.replace(C_,P_)}var I_=new Map;function P_(i,t){let e=Zt[t];if(e===void 0){let n=I_.get(t);if(n!==void 0)e=Zt[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gu(e)}var L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(L_,F_)}function F_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var D_={[Is]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function U_(i){return D_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var N_={[Pi]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE_UV"};function O_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":N_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var B_={[tr]:"ENVMAP_MODE_REFRACTION"};function z_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":B_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var k_={[Pc]:"ENVMAP_BLENDING_MULTIPLY",[xf]:"ENVMAP_BLENDING_MIX",[bf]:"ENVMAP_BLENDING_ADD"};function V_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":k_[i.combine]||"ENVMAP_BLENDING_NONE"}function G_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function H_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=U_(e),c=O_(e),u=z_(e),f=V_(e),h=G_(e),d=E_(e),g=A_(s),b=r.createProgram(),x,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),p.length>0&&(p+=`
`)):(x=[rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),p=[rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?T_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,M_("linearToOutputTexel",e.outputColorSpace),w_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),o=gu(o),o=ed(o,e),o=nd(o,e),a=gu(a),a=ed(a,e),a=nd(a,e),o=id(o),a=id(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+x+o,v=y+p+a,S=Qf(r,r.VERTEX_SHADER,M),w=Qf(r,r.FRAGMENT_SHADER,v);r.attachShader(b,S),r.attachShader(b,w),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function A(I){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(b)||"",P=r.getShaderInfoLog(S)||"",E=r.getShaderInfoLog(w)||"",D=L.trim(),U=P.trim(),N=E.trim(),k=!0,B=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,S,w);else{let G=td(r,S,"vertex"),V=td(r,w,"fragment");kt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+G+`
`+V)}else D!==""?zt("WebGLProgram: Program Info Log:",D):(U===""||N==="")&&(B=!1);B&&(I.diagnostics={runnable:k,programLog:D,vertexShader:{log:U,prefix:x},fragmentShader:{log:N,prefix:p}})}r.deleteShader(S),r.deleteShader(w),_=new Wr(r,b),T=R_(r,b)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(b,b_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=__++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=S,this.fragmentShader=w,this}var W_=0,xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bu(t),e.set(t,n)),n}},bu=class{constructor(t){this.id=W_++,this.code=t,this.usedTimes=0}};function X_(i){return i===Di||i===Bs||i===zs}function Y_(i,t,e,n,r,s){let o=new Fr,a=new xu,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,T,C,I,L,P){let E=I.fog,D=L.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=t.get(_.envMap||U,N),B=k&&k.mapping===Ls?k.image.height:null,G=d[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&zt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,nt=V!==void 0?V.length:0,$=0;D.morphAttributes.position!==void 0&&($=1),D.morphAttributes.normal!==void 0&&($=2),D.morphAttributes.color!==void 0&&($=3);let ot,K,ht,X;if(G){let be=Wn[G];ot=be.vertexShader,K=be.fragmentShader}else{ot=_.vertexShader,K=_.fragmentShader;let be=a.getVertexShaderStage(_),he=a.getFragmentShaderStage(_);a.update(_,be,he),ht=be.id,X=he.id}let J=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),mt=L.isInstancedMesh===!0,pt=L.isBatchedMesh===!0,At=!!_.map,re=!!_.matcap,Vt=!!k,Kt=!!_.aoMap,se=!!_.lightMap,jt=!!_.bumpMap&&_.wireframe===!1,Se=!!_.normalMap,Be=!!_.displacementMap,sn=!!_.emissiveMap,we=!!_.metalnessMap,Ie=!!_.roughnessMap,q=_.anisotropy>0,Xe=_.clearcoat>0,pe=_.dispersion>0,O=_.retroreflectivity>0,R=_.iridescence>0,Z=_.sheen>0,et=_.transmission>0,st=q&&!!_.anisotropyMap,gt=Xe&&!!_.clearcoatMap,xt=Xe&&!!_.clearcoatNormalMap,lt=Xe&&!!_.clearcoatRoughnessMap,ut=R&&!!_.iridescenceMap,bt=R&&!!_.iridescenceThicknessMap,Dt=Z&&!!_.sheenColorMap,Mt=Z&&!!_.sheenRoughnessMap,_t=!!_.specularMap,Ut=!!_.specularColorMap,Bt=!!_.specularIntensityMap,qt=et&&!!_.transmissionMap,Y=et&&!!_.thicknessMap,yt=!!_.gradientMap,ct=!!_.alphaMap,vt=_.alphaTest>0,Et=!!_.alphaHash,dt=!!_.extensions,Nt=Cn;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let Lt={shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:ot,fragmentShader:K,defines:_.defines,customVertexShaderID:ht,customFragmentShaderID:X,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:pt,batchingColor:pt&&L._colorsTexture!==null,instancing:mt,instancingColor:mt&&L.instanceColor!==null,instancingMorph:mt&&L.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:At,matcap:re,envMap:Vt,envMapMode:Vt&&k.mapping,envMapCubeUVHeight:B,aoMap:Kt,lightMap:se,bumpMap:jt,normalMap:Se,displacementMap:Be,emissiveMap:sn,normalMapObjectSpace:Se&&_.normalMapType===vf,normalMapTangentSpace:Se&&_.normalMapType===qc,packedNormalMap:Se&&_.normalMapType===qc&&X_(_.normalMap.format),metalnessMap:we,roughnessMap:Ie,anisotropy:q,anisotropyMap:st,clearcoat:Xe,clearcoatMap:gt,clearcoatNormalMap:xt,clearcoatRoughnessMap:lt,dispersion:pe,retroreflection:O,iridescence:R,iridescenceMap:ut,iridescenceThicknessMap:bt,sheen:Z,sheenColorMap:Dt,sheenRoughnessMap:Mt,specularMap:_t,specularColorMap:Ut,specularIntensityMap:Bt,transmission:et,transmissionMap:qt,thicknessMap:Y,gradientMap:yt,opaque:_.transparent===!1&&_.blending===Ii&&_.alphaToCoverage===!1,alphaMap:ct,alphaTest:vt,alphaHash:Et,combine:_.combine,mapUv:At&&g(_.map.channel),aoMapUv:Kt&&g(_.aoMap.channel),lightMapUv:se&&g(_.lightMap.channel),bumpMapUv:jt&&g(_.bumpMap.channel),normalMapUv:Se&&g(_.normalMap.channel),displacementMapUv:Be&&g(_.displacementMap.channel),emissiveMapUv:sn&&g(_.emissiveMap.channel),metalnessMapUv:we&&g(_.metalnessMap.channel),roughnessMapUv:Ie&&g(_.roughnessMap.channel),anisotropyMapUv:st&&g(_.anisotropyMap.channel),clearcoatMapUv:gt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(_.sheenRoughnessMap.channel),specularMapUv:_t&&g(_.specularMap.channel),specularColorMapUv:Ut&&g(_.specularColorMap.channel),specularIntensityMapUv:Bt&&g(_.specularIntensityMap.channel),transmissionMapUv:qt&&g(_.transmissionMap.channel),thicknessMapUv:Y&&g(_.thicknessMap.channel),alphaMapUv:ct&&g(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Se||q),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(At||ct),fog:!!E,useFog:_.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&Se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ft,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:$,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:At&&_.map.isVideoTexture===!0&&ee.getTransfer(_.map.colorSpace)===de,decodeVideoTextureEmissive:sn&&_.emissiveMap.isVideoTexture===!0&&ee.getTransfer(_.emissiveMap.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Me,flipSided:_.side===nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:dt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&_.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function x(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(T,_),y(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){let T=d[_.type],C;if(T){let I=Wn[T];C=zf.clone(I.uniforms)}else C=_.uniforms;return C}function v(_,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new H_(i,T,_,r),c.push(C),u.set(T,C)),C}function S(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function A(){a.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:M,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:A}}function q_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function $_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function od(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,b,x,p){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:b,renderOrder:h.renderOrder,z:x,group:p},i[t]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=g,y.materialVariant=o(h),y.groupOrder=b,y.renderOrder=h.renderOrder,y.z=x,y.group=p),t++,y}function l(h,d,g,b,x,p,y){y.reversedDepth===!0&&(x=-x);let M=a(h,d,g,b,x,p);g.transmission>0?n.push(M):g.transparent===!0?r.push(M):e.push(M)}function c(h,d,g,b,x,p){let y=a(h,d,g,b,x,p);g.transmission>0?n.unshift(y):g.transparent===!0?r.unshift(y):e.unshift(y)}function u(h,d){e.length>1&&e.sort(h||$_),n.length>1&&n.sort(d||sd),r.length>1&&r.sort(d||sd)}function f(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function Z_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new od,i.set(n,[o])):r>=s.length?(o=new od,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function K_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new at};break;case"SpotLight":e={position:new H,direction:new H,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new at,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new at,groundColor:new at};break;case"RectAreaLight":e={color:new at,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function J_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Q_=0;function j_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ty(i){let t=new K_,e=J_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let r=new H,s=new Te,o=new Te;function a(c){let u=0,f=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,g=0,b=0,x=0,p=0,y=0,M=0,v=0,S=0,w=0,A=0,_=0,T=0,C=0;c.sort(j_);for(let L=0,P=c.length;L<P;L++){let E=c[L],D=E.color,U=E.intensity,N=E.distance,k=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Di?k=E.shadow.map.texture:k=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=D.r*U,f+=D.g*U,h+=D.b*U;else if(E.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(E.sh.coefficients[B],U);C++}else if(E.isSunLight){let B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let G=E.shadow,V=e.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[g]=V,n.sunShadowMap[g]=k;let nt=G.getViewportCount();for(let $=0;$<nt;$++)n.sunShadowMatrix[b+$]=G.getMatrix($),n.sunShadowCascade[b+$]=G._cascadeData[$];b+=nt,g++}n.sun[d]=B,d++}else if(E.isDirectionalLight){let B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let G=E.shadow,V=e.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.directionalShadow[x]=V,n.directionalShadowMap[x]=k,n.directionalShadowMatrix[x]=E.shadow.matrix,S++}n.directional[x]=B,x++}else if(E.isSpotLight){let B=t.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(D).multiplyScalar(U),B.distance=N,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,n.spot[y]=B;let G=E.shadow;if(E.map&&(n.spotLightMap[_]=E.map,_++,G.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[y]=G.matrix,E.castShadow){let V=e.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=k,A++}y++}else if(E.isRectAreaLight){let B=t.get(E);B.color.copy(D).multiplyScalar(U),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),n.rectArea[M]=B,M++}else if(E.isPointLight){let B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){let G=E.shadow,V=e.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=E.shadow.matrix,w++}n.point[p]=B,p++}else if(E.isHemisphereLight){let B=t.get(E);B.skyColor.copy(E.color).multiplyScalar(U),B.groundColor.copy(E.groundColor).multiplyScalar(U),n.hemi[v]=B,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let I=n.hash;(I.sunLength!==d||I.directionalLength!==x||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==M||I.hemiLength!==v||I.numSunShadows!==g||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==_||I.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=x,n.spot.length=y,n.rectArea.length=M,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.sunLength=d,I.directionalLength=x,I.pointLength=p,I.spotLength=y,I.rectAreaLength=M,I.hemiLength=v,I.numSunShadows=g,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=_,I.numLightProbes=C,n.version=Q_++)}function l(c,u){let f=0,h=0,d=0,g=0,b=0,x=0,p=u.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),f++}else if(v.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(v.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let S=n.rectArea[b];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function ad(i){let t=new ty(i),e=[],n=[],r=[];function s(h){f.camera=h,e.length=0,n.length=0,r.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function ey(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new ad(i),t.set(r,[a])):s>=o.length?(a=new ad(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ry=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],sy=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],ld=new Te,Gs=new H,hu=new H;function oy(i,t,e){let n=new xs,r=new Jt,s=new Jt,o=new Ae,a=new ca,l=new ua,c={},u=e.maxTextureSize,f={[Ci]:nn,[nn]:Ci,[Me]:Me},h=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:ny,fragmentShader:iy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new Qt;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Yt(g,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let p=this.type;this.render=function(w,A,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;this.type===Jh&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Gn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let P=p!==this.type;P&&A.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(D=>D.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,D=w.length;E<D;E++){let U=w[E],N=U.shadow;if(N===void 0){zt("WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let k=N.getFrameExtents();r.multiply(k),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,N.mapSize.y=s.y));let B=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=B,N.map===null||P===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===zr){if(U.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Qe(r.x,r.y,{format:Di,type:Ln,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),N.map.texture.name=U.name+".shadowMap",N.map.depthTexture=new Ti(r.x,r.y,Pn),N.map.depthTexture.name=U.name+".shadowMapDepth",N.map.depthTexture.format=zn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ke,N.map.depthTexture.magFilter=ke}else U.isPointLight?(N.map=new pl(r.x),N.map.depthTexture=new aa(r.x,In)):(N.map=new Qe(r.x,r.y),N.map.depthTexture=new Ti(r.x,r.y,In)),N.map.depthTexture.name=U.name+".shadowMap",N.map.depthTexture.format=zn,this.type===Is?(N.map.depthTexture.compareFunction=B?ul:cl,N.map.depthTexture.minFilter=Ge,N.map.depthTexture.magFilter=Ge):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ke,N.map.depthTexture.magFilter=ke);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y)&&N.map.setSize(r.x,r.y);let G=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();U.isPointLight!==!0&&N.updateMatrices(U,_);for(let V=0;V<G;V++){let nt=N.getCamera(V);if(U.isPointLight){let $=N.camera,ot=N.matrix,K=U.distance||$.far;K!==$.far&&($.far=K,$.updateProjectionMatrix()),Gs.setFromMatrixPosition(U.matrixWorld),$.position.copy(Gs),hu.copy($.position),hu.add(ry[V]),$.up.copy(sy[V]),$.lookAt(hu),$.updateMatrixWorld(),ot.makeTranslation(-Gs.x,-Gs.y,-Gs.z),ld.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),N._frustum.setFromProjectionMatrix(ld,$.coordinateSystem,$.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,V),i.clear();else{V===0&&(i.setRenderTarget(N.map),i.clear());let $=N.getViewport(V);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),L.viewport(o)}n=N.getFrustum(V),v(A,_,nt,U,this.type)}N.isPointLightShadow!==!0&&this.type===zr&&y(N,_),N.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(T,C,I)};function y(w,A){let _=t.update(b);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Qe(r.x,r.y,{format:Di,type:Ln}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,_,h,b,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,_,d,b,null)}function M(w,A,_,T){let C=null,I=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)C=I;else if(C=_.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=C.uuid,P=A.uuid,E=c[L];E===void 0&&(E={},c[L]=E);let D=E[P];D===void 0&&(D=C.clone(),E[P]=D,A.addEventListener("dispose",S)),C=D}if(C.visible=A.visible,C.wireframe=A.wireframe,T===zr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:f[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=i.properties.get(C);L.light=_}return C}function v(w,A,_,T,C){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===zr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let P=t.update(w),E=w.material;if(Array.isArray(E)){let D=P.groups;for(let U=0,N=D.length;U<N;U++){let k=D[U],B=E[k.materialIndex];if(B&&B.visible){let G=M(w,B,T,C);w.onBeforeShadow(i,w,A,_,P,G,k),i.renderBufferDirect(_,null,P,G,w,k),w.onAfterShadow(i,w,A,_,P,G,k)}}}else if(E.visible){let D=M(w,E,T,C);w.onBeforeShadow(i,w,A,_,P,D,null),i.renderBufferDirect(_,null,P,D,w,null),w.onAfterShadow(i,w,A,_,P,D,null)}}let L=w.children;for(let P=0,E=L.length;P<E;P++)v(L[P],A,_,T,C)}function S(w){w.target.removeEventListener("dispose",S);for(let _ in c){let T=c[_],C=w.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function ay(i,t){function e(){let Y=!1,yt=new Ae,ct=null,vt=new Ae(0,0,0,0);return{setMask:function(Et){ct!==Et&&!Y&&(i.colorMask(Et,Et,Et,Et),ct=Et)},setLocked:function(Et){Y=Et},setClear:function(Et,dt,Nt,Lt,be){be===!0&&(Et*=Lt,dt*=Lt,Nt*=Lt),yt.set(Et,dt,Nt,Lt),vt.equals(yt)===!1&&(i.clearColor(Et,dt,Nt,Lt),vt.copy(yt))},reset:function(){Y=!1,ct=null,vt.set(-1,0,0,0)}}}function n(){let Y=!1,yt=!1,ct=null,vt=null,Et=null;return{setReversed:function(dt){if(yt!==dt){let Nt=t.get("EXT_clip_control");dt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),yt=dt;let Lt=Et;Et=null,this.setClear(Lt)}},getReversed:function(){return yt},setTest:function(dt){dt?J(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(dt){ct!==dt&&!Y&&(i.depthMask(dt),ct=dt)},setFunc:function(dt){if(yt&&(dt=Ff[dt]),vt!==dt){switch(dt){case Wo:i.depthFunc(i.NEVER);break;case Xo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case Cr:i.depthFunc(i.LEQUAL);break;case qo:i.depthFunc(i.EQUAL);break;case $o:i.depthFunc(i.GEQUAL);break;case Zo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=dt}},setLocked:function(dt){Y=dt},setClear:function(dt){Et!==dt&&(Et=dt,yt&&(dt=1-dt),i.clearDepth(dt))},reset:function(){Y=!1,ct=null,vt=null,Et=null,yt=!1}}}function r(){let Y=!1,yt=null,ct=null,vt=null,Et=null,dt=null,Nt=null,Lt=null,be=null;return{setTest:function(he){Y||(he?J(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(he){yt!==he&&!Y&&(i.stencilMask(he),yt=he)},setFunc:function(he,Sn,Nn){(ct!==he||vt!==Sn||Et!==Nn)&&(i.stencilFunc(he,Sn,Nn),ct=he,vt=Sn,Et=Nn)},setOp:function(he,Sn,Nn){(dt!==he||Nt!==Sn||Lt!==Nn)&&(i.stencilOp(he,Sn,Nn),dt=he,Nt=Sn,Lt=Nn)},setLocked:function(he){Y=he},setClear:function(he){be!==he&&(i.clearStencil(he),be=he)},reset:function(){Y=!1,yt=null,ct=null,vt=null,Et=null,dt=null,Nt=null,Lt=null,be=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],b=null,x=!1,p=null,y=null,M=null,v=null,S=null,w=null,A=null,_=new at(0,0,0),T=0,C=!1,I=null,L=null,P=null,E=null,D=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,k=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=k>=2);let G=null,V={},nt=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),ot=new Ae().fromArray(nt),K=new Ae().fromArray($);function ht(Y,yt,ct,vt){let Et=new Uint8Array(4),dt=i.createTexture();i.bindTexture(Y,dt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<ct;Nt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(yt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return dt}let X={};X[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(Cr),jt(!1),Se(Ac),J(i.CULL_FACE),Kt(Gn);function J(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function ft(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function mt(Y,yt){return h[Y]!==yt?(i.bindFramebuffer(Y,yt),h[Y]=yt,Y===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=yt),Y===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function pt(Y,yt){let ct=g,vt=!1;if(Y){ct=d.get(yt),ct===void 0&&(ct=[],d.set(yt,ct));let Et=Y.textures;if(ct.length!==Et.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Nt=Et.length;dt<Nt;dt++)ct[dt]=i.COLOR_ATTACHMENT0+dt;ct.length=Et.length,vt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,vt=!0);vt&&i.drawBuffers(ct)}function At(Y){return b!==Y?(i.useProgram(Y),b=Y,!0):!1}let re={[ji]:i.FUNC_ADD,[jh]:i.FUNC_SUBTRACT,[tf]:i.FUNC_REVERSE_SUBTRACT};re[ef]=i.MIN,re[nf]=i.MAX;let Vt={[rf]:i.ZERO,[sf]:i.ONE,[of]:i.SRC_COLOR,[Cc]:i.SRC_ALPHA,[ff]:i.SRC_ALPHA_SATURATE,[uf]:i.DST_COLOR,[lf]:i.DST_ALPHA,[af]:i.ONE_MINUS_SRC_COLOR,[Ic]:i.ONE_MINUS_SRC_ALPHA,[hf]:i.ONE_MINUS_DST_COLOR,[cf]:i.ONE_MINUS_DST_ALPHA,[df]:i.CONSTANT_COLOR,[pf]:i.ONE_MINUS_CONSTANT_COLOR,[mf]:i.CONSTANT_ALPHA,[gf]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(Y,yt,ct,vt,Et,dt,Nt,Lt,be,he){if(Y===Gn){x===!0&&(ft(i.BLEND),x=!1);return}if(x===!1&&(J(i.BLEND),x=!0),Y!==Qh){if(Y!==p||he!==C){if((y!==ji||S!==ji)&&(i.blendEquation(i.FUNC_ADD),y=ji,S=ji),he)switch(Y){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.ONE,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ps:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:kt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rc:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ps:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",Y);break}M=null,v=null,w=null,A=null,_.set(0,0,0),T=0,p=Y,C=he}return}Et=Et||yt,dt=dt||ct,Nt=Nt||vt,(yt!==y||Et!==S)&&(i.blendEquationSeparate(re[yt],re[Et]),y=yt,S=Et),(ct!==M||vt!==v||dt!==w||Nt!==A)&&(i.blendFuncSeparate(Vt[ct],Vt[vt],Vt[dt],Vt[Nt]),M=ct,v=vt,w=dt,A=Nt),(Lt.equals(_)===!1||be!==T)&&(i.blendColor(Lt.r,Lt.g,Lt.b,be),_.copy(Lt),T=be),p=Y,C=!1}function se(Y,yt){Y.side===Me?ft(i.CULL_FACE):J(i.CULL_FACE);let ct=Y.side===nn;yt&&(ct=!ct),jt(ct),Y.blending===Ii&&Y.transparent===!1?Kt(Gn):Kt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),s.setMask(Y.colorWrite);let vt=Y.stencilWrite;a.setTest(vt),vt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),sn(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(Y){I!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),I=Y)}function Se(Y){Y!==Zh?(J(i.CULL_FACE),Y!==L&&(Y===Ac?i.cullFace(i.BACK):Y===Kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),L=Y}function Be(Y){Y!==P&&(N&&i.lineWidth(Y),P=Y)}function sn(Y,yt,ct){Y?(J(i.POLYGON_OFFSET_FILL),(E!==yt||D!==ct)&&(E=yt,D=ct,o.getReversed()&&(yt=-yt),i.polygonOffset(yt,ct))):ft(i.POLYGON_OFFSET_FILL)}function we(Y){Y?J(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function Ie(Y){Y===void 0&&(Y=i.TEXTURE0+U-1),G!==Y&&(i.activeTexture(Y),G=Y)}function q(Y,yt,ct){ct===void 0&&(G===null?ct=i.TEXTURE0+U-1:ct=G);let vt=V[ct];vt===void 0&&(vt={type:void 0,texture:void 0},V[ct]=vt),(vt.type!==Y||vt.texture!==yt)&&(G!==ct&&(i.activeTexture(ct),G=ct),i.bindTexture(Y,yt||X[Y]),vt.type=Y,vt.texture=yt)}function Xe(){let Y=V[G];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function R(){try{i.texSubImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function Z(){try{i.texSubImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function st(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function gt(){try{i.texStorage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function xt(){try{i.texStorage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function lt(){try{i.texImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function ut(){try{i.texImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function bt(Y){return f[Y]!==void 0?f[Y]:i.getParameter(Y)}function Dt(Y,yt){f[Y]!==yt&&(i.pixelStorei(Y,yt),f[Y]=yt)}function Mt(Y){ot.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),ot.copy(Y))}function _t(Y){K.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),K.copy(Y))}function Ut(Y,yt){let ct=c.get(yt);ct===void 0&&(ct=new WeakMap,c.set(yt,ct));let vt=ct.get(Y);vt===void 0&&(vt=i.getUniformBlockIndex(yt,Y.name),ct.set(Y,vt))}function Bt(Y,yt){let vt=c.get(yt).get(Y);l.get(yt)!==vt&&(i.uniformBlockBinding(yt,vt,Y.__bindingPointIndex),l.set(yt,vt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},G=null,V={},h={},d=new WeakMap,g=[],b=null,x=!1,p=null,y=null,M=null,v=null,S=null,w=null,A=null,_=new at(0,0,0),T=0,C=!1,I=null,L=null,P=null,E=null,D=null,ot.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:ft,bindFramebuffer:mt,drawBuffers:pt,useProgram:At,setBlending:Kt,setMaterial:se,setFlipSided:jt,setCullFace:Se,setLineWidth:Be,setPolygonOffset:sn,setScissorTest:we,activeTexture:Ie,bindTexture:q,unbindTexture:Xe,compressedTexImage2D:pe,compressedTexImage3D:O,texImage2D:lt,texImage3D:ut,pixelStorei:Dt,getParameter:bt,updateUBOMapping:Ut,uniformBlockBinding:Bt,texStorage2D:gt,texStorage3D:xt,texSubImage2D:R,texSubImage3D:Z,compressedTexSubImage2D:et,compressedTexSubImage3D:st,scissor:Mt,viewport:_t,reset:qt}}function ly(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Jt,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,R){return g?new OffscreenCanvas(O,R):Ir("canvas")}function x(O,R,Z){let et=1,st=pe(O);if((st.width>Z||st.height>Z)&&(et=Z/Math.max(st.width,st.height)),et<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let gt=Math.floor(et*st.width),xt=Math.floor(et*st.height);h===void 0&&(h=b(gt,xt));let lt=R?b(gt,xt):h;return lt.width=gt,lt.height=xt,lt.getContext("2d").drawImage(O,0,0,gt,xt),zt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+gt+"x"+xt+")."),lt}else return"data"in O&&zt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),O;return O}function p(O){return O.generateMipmaps}function y(O){i.generateMipmap(O)}function M(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(O,R,Z,et,st,gt=!1){if(O!==null){if(i[O]!==void 0)return i[O];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let xt;et&&(xt=t.get("EXT_texture_norm16"),xt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=R;if(R===i.RED&&(Z===i.FLOAT&&(lt=i.R32F),Z===i.HALF_FLOAT&&(lt=i.R16F),Z===i.UNSIGNED_BYTE&&(lt=i.R8),Z===i.UNSIGNED_SHORT&&xt&&(lt=xt.R16_EXT),Z===i.SHORT&&xt&&(lt=xt.R16_SNORM_EXT)),R===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(lt=i.R8UI),Z===i.UNSIGNED_SHORT&&(lt=i.R16UI),Z===i.UNSIGNED_INT&&(lt=i.R32UI),Z===i.BYTE&&(lt=i.R8I),Z===i.SHORT&&(lt=i.R16I),Z===i.INT&&(lt=i.R32I)),R===i.RG&&(Z===i.FLOAT&&(lt=i.RG32F),Z===i.HALF_FLOAT&&(lt=i.RG16F),Z===i.UNSIGNED_BYTE&&(lt=i.RG8),Z===i.UNSIGNED_SHORT&&xt&&(lt=xt.RG16_EXT),Z===i.SHORT&&xt&&(lt=xt.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(lt=i.RG8UI),Z===i.UNSIGNED_SHORT&&(lt=i.RG16UI),Z===i.UNSIGNED_INT&&(lt=i.RG32UI),Z===i.BYTE&&(lt=i.RG8I),Z===i.SHORT&&(lt=i.RG16I),Z===i.INT&&(lt=i.RG32I)),R===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),Z===i.UNSIGNED_INT&&(lt=i.RGB32UI),Z===i.BYTE&&(lt=i.RGB8I),Z===i.SHORT&&(lt=i.RGB16I),Z===i.INT&&(lt=i.RGB32I)),R===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),Z===i.UNSIGNED_INT&&(lt=i.RGBA32UI),Z===i.BYTE&&(lt=i.RGBA8I),Z===i.SHORT&&(lt=i.RGBA16I),Z===i.INT&&(lt=i.RGBA32I)),R===i.RGB&&(Z===i.UNSIGNED_SHORT&&xt&&(lt=xt.RGB16_EXT),Z===i.SHORT&&xt&&(lt=xt.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(lt=i.R11F_G11F_B10F)),R===i.RGBA){let ut=gt?fs:ee.getTransfer(st);Z===i.FLOAT&&(lt=i.RGBA32F),Z===i.HALF_FLOAT&&(lt=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(lt=ut===de?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&xt&&(lt=xt.RGBA16_EXT),Z===i.SHORT&&xt&&(lt=xt.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function S(O,R){let Z;return O?R===null||R===In||R===Vr?Z=i.DEPTH24_STENCIL8:R===Pn?Z=i.DEPTH32F_STENCIL8:R===kr&&(Z=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===In||R===Vr?Z=i.DEPTH_COMPONENT24:R===Pn?Z=i.DEPTH_COMPONENT32F:R===kr&&(Z=i.DEPTH_COMPONENT16),Z}function w(O,R){return p(O)===!0||O.isFramebufferTexture&&O.minFilter!==ke&&O.minFilter!==Ge?Math.log2(Math.max(R.width,R.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?R.mipmaps.length:1}function A(O){let R=O.target;R.removeEventListener("dispose",A),T(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&f.delete(R)}function _(O){let R=O.target;R.removeEventListener("dispose",_),I(R)}function T(O){let R=n.get(O);if(R.__webglInit===void 0)return;let Z=O.source,et=d.get(Z);if(et){let st=et[R.__cacheKey];st.usedTimes--,st.usedTimes===0&&C(O),Object.keys(et).length===0&&d.delete(Z)}n.remove(O)}function C(O){let R=n.get(O);i.deleteTexture(R.__webglTexture);let Z=O.source,et=d.get(Z);delete et[R.__cacheKey],o.memory.textures--}function I(O){let R=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(R.__webglFramebuffer[et]))for(let st=0;st<R.__webglFramebuffer[et].length;st++)i.deleteFramebuffer(R.__webglFramebuffer[et][st]);else i.deleteFramebuffer(R.__webglFramebuffer[et]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[et])}else{if(Array.isArray(R.__webglFramebuffer))for(let et=0;et<R.__webglFramebuffer.length;et++)i.deleteFramebuffer(R.__webglFramebuffer[et]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let et=0;et<R.__webglColorRenderbuffer.length;et++)R.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[et]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let Z=O.textures;for(let et=0,st=Z.length;et<st;et++){let gt=n.get(Z[et]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(Z[et])}n.remove(O)}let L=0;function P(){L=0}function E(){return L}function D(O){L=O}function U(){let O=L;return O>=r.maxTextures&&zt("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+r.maxTextures),L+=1,O}function N(O){let R=[];return R.push(O.wrapS),R.push(O.wrapT),R.push(O.wrapR||0),R.push(O.magFilter),R.push(O.minFilter),R.push(O.anisotropy),R.push(O.internalFormat),R.push(O.format),R.push(O.type),R.push(O.generateMipmaps),R.push(O.premultiplyAlpha),R.push(O.flipY),R.push(O.unpackAlignment),R.push(O.colorSpace),R.join()}function k(O,R){let Z=n.get(O);if(O.isVideoTexture&&q(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Z.__version!==O.version){let et=O.image;if(et===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(Z,O,R);return}}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+R)}function B(O,R){let Z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){ft(Z,O,R);return}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+R)}function G(O,R){let Z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){ft(Z,O,R);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+R)}function V(O,R){let Z=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Z.__version!==O.version){mt(Z,O,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+R)}let nt={[qi]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},$={[ke]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},ot={[Sf]:i.NEVER,[Rf]:i.ALWAYS,[Tf]:i.LESS,[cl]:i.LEQUAL,[wf]:i.EQUAL,[ul]:i.GEQUAL,[Ef]:i.GREATER,[Af]:i.NOTEQUAL};function K(O,R){if(R.type===Pn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Ge||R.magFilter===Ea||R.magFilter===Fs||R.magFilter===Li||R.minFilter===Ge||R.minFilter===Ea||R.minFilter===Fs||R.minFilter===Li)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,nt[R.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,nt[R.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,nt[R.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,$[R.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,$[R.minFilter]),R.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,ot[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ke||R.minFilter!==Fs&&R.minFilter!==Li||R.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ht(O,R){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,R.addEventListener("dispose",A));let et=R.source,st=d.get(et);st===void 0&&(st={},d.set(et,st));let gt=N(R);if(gt!==O.__cacheKey){st[gt]===void 0&&(st[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),st[gt].usedTimes++;let xt=st[O.__cacheKey];xt!==void 0&&(st[O.__cacheKey].usedTimes--,xt.usedTimes===0&&C(R)),O.__cacheKey=gt,O.__webglTexture=st[gt].texture}return Z}function X(O,R,Z){return Math.floor(Math.floor(O/Z)/R)}function J(O,R,Z,et){let gt=O.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,Z,et,R.data);else{gt.sort((Dt,Mt)=>Dt.start-Mt.start);let xt=0;for(let Dt=1;Dt<gt.length;Dt++){let Mt=gt[xt],_t=gt[Dt],Ut=Mt.start+Mt.count,Bt=X(_t.start,R.width,4),qt=X(Mt.start,R.width,4);_t.start<=Ut+1&&Bt===qt&&X(_t.start+_t.count-1,R.width,4)===Bt?Mt.count=Math.max(Mt.count,_t.start+_t.count-Mt.start):(++xt,gt[xt]=_t)}gt.length=xt+1;let lt=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let Dt=0,Mt=gt.length;Dt<Mt;Dt++){let _t=gt[Dt],Ut=Math.floor(_t.start/4),Bt=Math.ceil(_t.count/4),qt=Ut%R.width,Y=Math.floor(Ut/R.width),yt=Bt,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(i.TEXTURE_2D,0,qt,Y,yt,ct,Z,et,R.data)}O.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function ft(O,R,Z){let et=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(et=i.TEXTURE_3D);let st=ht(O,R),gt=R.source;e.bindTexture(et,O.__webglTexture,i.TEXTURE0+Z);let xt=n.get(gt);if(gt.version!==xt.__version||st===!0){if(e.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let ct=ee.getPrimaries(ee.workingColorSpace),vt=R.colorSpace===si?null:ee.getPrimaries(R.colorSpace),Et=R.colorSpace===si||ct===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let ut=x(R.image,!1,r.maxTextureSize);ut=Xe(R,ut);let bt=s.convert(R.format,R.colorSpace),Dt=s.convert(R.type),Mt=v(R.internalFormat,bt,Dt,R.normalized,R.colorSpace,R.isVideoTexture);K(et,R);let _t,Ut=R.mipmaps,Bt=R.isVideoTexture!==!0,qt=xt.__version===void 0||st===!0,Y=gt.dataReady,yt=w(R,ut);if(R.isDepthTexture)Mt=S(R.format===Fi,R.type),qt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Mt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Mt,ut.width,ut.height,0,bt,Dt,null));else if(R.isDataTexture)if(Ut.length>0){Bt&&qt&&e.texStorage2D(i.TEXTURE_2D,yt,Mt,Ut[0].width,Ut[0].height);for(let ct=0,vt=Ut.length;ct<vt;ct++)_t=Ut[ct],Bt?Y&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,_t.width,_t.height,bt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,ct,Mt,_t.width,_t.height,0,bt,Dt,_t.data);R.generateMipmaps=!1}else Bt?(qt&&e.texStorage2D(i.TEXTURE_2D,yt,Mt,ut.width,ut.height),Y&&J(R,ut,bt,Dt)):e.texImage2D(i.TEXTURE_2D,0,Mt,ut.width,ut.height,0,bt,Dt,ut.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Bt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Mt,Ut[0].width,Ut[0].height,ut.depth);for(let ct=0,vt=Ut.length;ct<vt;ct++)if(_t=Ut[ct],R.format!==vn)if(bt!==null)if(Bt){if(Y)if(R.layerUpdates.size>0){let Et=tu(_t.width,_t.height,R.format,R.type);for(let dt of R.layerUpdates){let Nt=_t.data.subarray(dt*Et/_t.data.BYTES_PER_ELEMENT,(dt+1)*Et/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,dt,_t.width,_t.height,1,bt,Nt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,_t.width,_t.height,ut.depth,bt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,Mt,_t.width,_t.height,ut.depth,0,_t.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,_t.width,_t.height,ut.depth,bt,Dt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,Mt,_t.width,_t.height,ut.depth,0,bt,Dt,_t.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{Bt&&qt&&e.texStorage2D(i.TEXTURE_2D,yt,Mt,Ut[0].width,Ut[0].height);for(let ct=0,vt=Ut.length;ct<vt;ct++)_t=Ut[ct],R.format!==vn?bt!==null?Bt?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,_t.width,_t.height,bt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,Mt,_t.width,_t.height,0,_t.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?Y&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,_t.width,_t.height,bt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,ct,Mt,_t.width,_t.height,0,bt,Dt,_t.data)}else if(R.isDataArrayTexture)if(Bt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Mt,ut.width,ut.height,ut.depth),Y)if(R.layerUpdates.size>0){let ct=tu(ut.width,ut.height,R.format,R.type);for(let vt of R.layerUpdates){let Et=ut.data.subarray(vt*ct/ut.data.BYTES_PER_ELEMENT,(vt+1)*ct/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,ut.width,ut.height,1,bt,Dt,Et)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,bt,Dt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,ut.width,ut.height,ut.depth,0,bt,Dt,ut.data);else if(R.isData3DTexture)Bt?(qt&&e.texStorage3D(i.TEXTURE_3D,yt,Mt,ut.width,ut.height,ut.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,bt,Dt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,ut.width,ut.height,ut.depth,0,bt,Dt,ut.data);else if(R.isFramebufferTexture){if(qt)if(Bt)e.texStorage2D(i.TEXTURE_2D,yt,Mt,ut.width,ut.height);else{let ct=ut.width,vt=ut.height;for(let Et=0;Et<yt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Mt,ct,vt,0,bt,Dt,null),ct>>=1,vt>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),ut.parentNode!==ct){ct.appendChild(ut),f.add(R),ct.onpaint=vt=>{let Et=vt.changedElements;for(let dt of f)Et.includes(dt.image)&&(dt.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let Et=i.RGBA,dt=i.RGBA,Nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,dt,Nt,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Bt&&qt){let ct=pe(Ut[0]);e.texStorage2D(i.TEXTURE_2D,yt,Mt,ct.width,ct.height)}for(let ct=0,vt=Ut.length;ct<vt;ct++)_t=Ut[ct],Bt?Y&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,bt,Dt,_t):e.texImage2D(i.TEXTURE_2D,ct,Mt,bt,Dt,_t);R.generateMipmaps=!1}else if(Bt){if(qt){let ct=pe(ut);e.texStorage2D(i.TEXTURE_2D,yt,Mt,ct.width,ct.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Dt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Mt,bt,Dt,ut);p(R)&&y(et),xt.__version=gt.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function mt(O,R,Z){if(R.image.length!==6)return;let et=ht(O,R),st=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Z);let gt=n.get(st);if(st.version!==gt.__version||et===!0){e.activeTexture(i.TEXTURE0+Z);let xt=ee.getPrimaries(ee.workingColorSpace),lt=R.colorSpace===si?null:ee.getPrimaries(R.colorSpace),ut=R.colorSpace===si||xt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let bt=R.isCompressedTexture||R.image[0].isCompressedTexture,Dt=R.image[0]&&R.image[0].isDataTexture,Mt=[];for(let dt=0;dt<6;dt++)!bt&&!Dt?Mt[dt]=x(R.image[dt],!0,r.maxCubemapSize):Mt[dt]=Dt?R.image[dt].image:R.image[dt],Mt[dt]=Xe(R,Mt[dt]);let _t=Mt[0],Ut=s.convert(R.format,R.colorSpace),Bt=s.convert(R.type),qt=v(R.internalFormat,Ut,Bt,R.normalized,R.colorSpace),Y=R.isVideoTexture!==!0,yt=gt.__version===void 0||et===!0,ct=st.dataReady,vt=w(R,_t);K(i.TEXTURE_CUBE_MAP,R);let Et;if(bt){Y&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,qt,_t.width,_t.height);for(let dt=0;dt<6;dt++){Et=Mt[dt].mipmaps;for(let Nt=0;Nt<Et.length;Nt++){let Lt=Et[Nt];R.format!==vn?Ut!==null?Y?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt,0,0,Lt.width,Lt.height,Ut,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt,qt,Lt.width,Lt.height,0,Lt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt,0,0,Lt.width,Lt.height,Ut,Bt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt,qt,Lt.width,Lt.height,0,Ut,Bt,Lt.data)}}}else{if(Et=R.mipmaps,Y&&yt){Et.length>0&&vt++;let dt=pe(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,qt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Dt){Y?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Mt[dt].width,Mt[dt].height,Ut,Bt,Mt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,qt,Mt[dt].width,Mt[dt].height,0,Ut,Bt,Mt[dt].data);for(let Nt=0;Nt<Et.length;Nt++){let be=Et[Nt].image[dt].image;Y?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt+1,0,0,be.width,be.height,Ut,Bt,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt+1,qt,be.width,be.height,0,Ut,Bt,be.data)}}else{Y?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Ut,Bt,Mt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,qt,Ut,Bt,Mt[dt]);for(let Nt=0;Nt<Et.length;Nt++){let Lt=Et[Nt];Y?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt+1,0,0,Ut,Bt,Lt.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt+1,qt,Ut,Bt,Lt.image[dt])}}}p(R)&&y(i.TEXTURE_CUBE_MAP),gt.__version=st.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function pt(O,R,Z,et,st,gt){let xt=s.convert(Z.format,Z.colorSpace),lt=s.convert(Z.type),ut=v(Z.internalFormat,xt,lt,Z.normalized,Z.colorSpace),bt=n.get(R),Dt=n.get(Z);if(Dt.__renderTarget=R,!bt.__hasExternalTextures){let Mt=Math.max(1,R.width>>gt),_t=Math.max(1,R.height>>gt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,gt,ut,Mt,_t,R.depth,0,xt,lt,null):e.texImage2D(st,gt,ut,Mt,_t,0,xt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),Ie(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,st,Dt.__webglTexture,0,we(R)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,st,Dt.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(O,R,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,O),R.depthBuffer){let et=R.depthTexture,st=et&&et.isDepthTexture?et.type:null,gt=S(R.stencilBuffer,st),xt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(R),gt,R.width,R.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(R),gt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,gt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,O)}else{let et=R.textures;for(let st=0;st<et.length;st++){let gt=et[st],xt=s.convert(gt.format,gt.colorSpace),lt=s.convert(gt.type),ut=v(gt.internalFormat,xt,lt,gt.normalized,gt.colorSpace);Ie(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(R),ut,R.width,R.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(R),ut,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ut,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function re(O,R,Z){let et=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(R.depthTexture);if(st.__renderTarget=R,(!st.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),et){if(st.__webglInit===void 0&&(st.__webglInit=!0,R.depthTexture.addEventListener("dispose",A)),st.__webglTexture===void 0){st.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),K(i.TEXTURE_CUBE_MAP,R.depthTexture);let bt=s.convert(R.depthTexture.format),Dt=s.convert(R.depthTexture.type),Mt;R.depthTexture.format===zn?Mt=i.DEPTH_COMPONENT24:R.depthTexture.format===Fi&&(Mt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Mt,R.width,R.height,0,bt,Dt,null)}}else k(R.depthTexture,0);let gt=st.__webglTexture,xt=we(R),lt=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,ut=R.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===zn)Ie(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,lt,gt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,lt,gt,0);else if(R.depthTexture.format===Fi)Ie(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,lt,gt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,lt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(O){let R=n.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==O.depthTexture){let et=O.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),et){let st=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,et.removeEventListener("dispose",st)};et.addEventListener("dispose",st),R.__depthDisposeCallback=st}R.__boundDepthTexture=et}if(O.depthTexture&&!R.__autoAllocateDepthBuffer)if(Z)for(let et=0;et<6;et++)re(R.__webglFramebuffer[et],O,et);else{let et=O.texture.mipmaps;et&&et.length>0?re(R.__webglFramebuffer[0],O,0):re(R.__webglFramebuffer,O,0)}else if(Z){R.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[et]),R.__webglDepthbuffer[et]===void 0)R.__webglDepthbuffer[et]=i.createRenderbuffer(),At(R.__webglDepthbuffer[et],O,!1);else{let st=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=R.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,gt)}}else{let et=O.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),At(R.__webglDepthbuffer,O,!1);else{let st=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(O,R,Z){let et=n.get(O);R!==void 0&&pt(et.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Vt(O)}function se(O){let R=O.texture,Z=n.get(O),et=n.get(R);O.addEventListener("dispose",_);let st=O.textures,gt=O.isWebGLCubeRenderTarget===!0,xt=st.length>1;if(xt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=R.version,o.memory.textures++),gt){Z.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer[lt]=[];for(let ut=0;ut<R.mipmaps.length;ut++)Z.__webglFramebuffer[lt][ut]=i.createFramebuffer()}else Z.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer=[];for(let lt=0;lt<R.mipmaps.length;lt++)Z.__webglFramebuffer[lt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(xt)for(let lt=0,ut=st.length;lt<ut;lt++){let bt=n.get(st[lt]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&Ie(O)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let lt=0;lt<st.length;lt++){let ut=st[lt];Z.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[lt]);let bt=s.convert(ut.format,ut.colorSpace),Dt=s.convert(ut.type),Mt=v(ut.internalFormat,bt,Dt,ut.normalized,ut.colorSpace,O.isXRRenderTarget===!0),_t=we(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Mt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,Z.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),At(Z.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),K(i.TEXTURE_CUBE_MAP,R);for(let lt=0;lt<6;lt++)if(R.mipmaps&&R.mipmaps.length>0)for(let ut=0;ut<R.mipmaps.length;ut++)pt(Z.__webglFramebuffer[lt][ut],O,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut);else pt(Z.__webglFramebuffer[lt],O,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(R)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let lt=0,ut=st.length;lt<ut;lt++){let bt=st[lt],Dt=n.get(bt),Mt=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Mt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Dt.__webglTexture),K(Mt,bt),pt(Z.__webglFramebuffer,O,bt,i.COLOR_ATTACHMENT0+lt,Mt,0),p(bt)&&y(Mt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(lt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,et.__webglTexture),K(lt,R),R.mipmaps&&R.mipmaps.length>0)for(let ut=0;ut<R.mipmaps.length;ut++)pt(Z.__webglFramebuffer[ut],O,R,i.COLOR_ATTACHMENT0,lt,ut);else pt(Z.__webglFramebuffer,O,R,i.COLOR_ATTACHMENT0,lt,0);p(R)&&y(lt),e.unbindTexture()}O.depthBuffer&&Vt(O)}function jt(O){let R=O.textures;for(let Z=0,et=R.length;Z<et;Z++){let st=R[Z];if(p(st)){let gt=M(O),xt=n.get(st).__webglTexture;e.bindTexture(gt,xt),y(gt),e.unbindTexture()}}}let Se=[],Be=[];function sn(O){if(O.samples>0){if(Ie(O)===!1){let R=O.textures,Z=O.width,et=O.height,st=i.COLOR_BUFFER_BIT,gt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(O),lt=R.length>1;if(lt)for(let bt=0;bt<R.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let ut=O.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let bt=0;bt<R.length;bt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);let Dt=n.get(R[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,Z,et,0,0,Z,et,st,i.NEAREST),l===!0&&(Se.length=0,Be.length=0,Se.push(i.COLOR_ATTACHMENT0+bt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(Se.push(gt),Be.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let bt=0;bt<R.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);let Dt=n.get(R[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&l){let R=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function we(O){return Math.min(r.maxSamples,O.samples)}function Ie(O){let R=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function q(O){let R=o.render.frame;u.get(O)!==R&&(u.set(O,R),O.update())}function Xe(O,R){let Z=O.colorSpace,et=O.format,st=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Z!==hs&&Z!==si&&(ee.getTransfer(Z)===de?(et!==vn||st!==dn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",Z)),R}function pe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.getTextureUnits=E,this.setTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=V,this.rebindTextures=Kt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function cy(i,t){function e(n,r=si){let s,o=ee.getTransfer(r);if(n===dn)return i.UNSIGNED_BYTE;if(n===Ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===kr)return i.UNSIGNED_SHORT;if(n===Aa)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Wc)return i.ALPHA;if(n===Xc)return i.RGB;if(n===vn)return i.RGBA;if(n===zn)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===Yc)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===Di)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===Ds||n===Us||n===Ns||n===Os)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ds)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ds)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Os)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Da||n===Ua||n===Na)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===za||n===ka||n===Va||n===Bs||n===Ga)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oa||n===Ba)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===za)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ka)return s.COMPRESSED_R11_EAC;if(n===Va)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Bs)return s.COMPRESSED_RG11_EAC;if(n===Ga)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ha||n===Wa||n===Xa||n===Ya||n===qa||n===$a||n===Za||n===Ka||n===Ja||n===Qa||n===ja||n===tl||n===el||n===nl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ha)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===rl||n===sl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===il)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===al||n===zs||n===ll)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ol)return s.COMPRESSED_RED_RGTC1_EXT;if(n===al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new _s(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:uy,fragmentShader:hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends kn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null,b=typeof XRWebGLBinding<"u",x=new _u,p={},y=e.getContextAttributes(),M=null,v=null,S=[],w=[],A=new Jt,_=null,T=null,C=new Ze;C.viewport=new Ae;let I=new Ze;I.viewport=new Ae;let L=[C,I],P=new Ma,E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=S[X];return J===void 0&&(J=new Dr,S[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=S[X];return J===void 0&&(J=new Dr,S[X]=J),J.getGripSpace()},this.getHand=function(X){let J=S[X];return J===void 0&&(J=new Dr,S[X]=J),J.getHandSpace()};function U(X){let J=w.indexOf(X.inputSource);if(J===-1)return;let ft=S[J];ft!==void 0&&(ft.update(X.inputSource,X.frame,c||o),ft.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",k);for(let X=0;X<S.length;X++){let J=w[X];J!==null&&(w[X]=null,S[X].disconnect(J))}E=null,D=null,x.reset();for(let X in p)delete p[X];if(t.setRenderTarget(M),d=null,h=null,f=null,r=null,v=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),T!==null){let X=T.camera;X.fov=T.fov,X.zoom=T.zoom,X.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(M=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",N),r.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,mt=null,pt=null;y.depth&&(pt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=y.stencil?Fi:zn,mt=y.stencil?Vr:In);let At={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(At),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Qe(h.textureWidth,h.textureHeight,{format:vn,type:dn,depthTexture:new Ti(h.textureWidth,h.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ft={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ft),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Qe(d.framebufferWidth,d.framebufferHeight,{format:vn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(X){for(let J=0;J<X.removed.length;J++){let ft=X.removed[J],mt=w.indexOf(ft);mt>=0&&(w[mt]=null,S[mt].disconnect(ft))}for(let J=0;J<X.added.length;J++){let ft=X.added[J],mt=w.indexOf(ft);if(mt===-1){for(let At=0;At<S.length;At++)if(At>=w.length){w.push(ft),mt=At;break}else if(w[At]===null){w[At]=ft,mt=At;break}if(mt===-1)break}let pt=S[mt];pt&&pt.connect(ft)}}let B=new H,G=new H;function V(X,J,ft){B.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(ft.matrixWorld);let mt=B.distanceTo(G),pt=J.projectionMatrix.elements,At=ft.projectionMatrix.elements,re=pt[14]/(pt[10]-1),Vt=pt[14]/(pt[10]+1),Kt=(pt[9]+1)/pt[5],se=(pt[9]-1)/pt[5],jt=(pt[8]-1)/pt[0],Se=(At[8]+1)/At[0],Be=re*jt,sn=re*Se,we=mt/(-jt+Se),Ie=we*-jt;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ie),X.translateZ(we),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),pt[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let q=re+we,Xe=Vt+we,pe=Be-Ie,O=sn+(mt-Ie),R=Kt*Vt/Xe*q,Z=se*Vt/Xe*q;X.projectionMatrix.makePerspective(pe,O,R,Z,q,Xe),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function nt(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let J=X.near,ft=X.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(ft=x.depthFar)),P.near=I.near=C.near=J,P.far=I.far=C.far=ft,(E!==P.near||D!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),E=P.near,D=P.far),P.layers.mask=X.layers.mask|6,C.layers.mask=P.layers.mask&-5,I.layers.mask=P.layers.mask&-3;let mt=X.parent,pt=P.cameras;nt(P,mt);for(let At=0;At<pt.length;At++)nt(pt[At],mt);pt.length===2?V(P,C,I):P.projectionMatrix.copy(C.projectionMatrix),T===null&&X.isPerspectiveCamera&&(T={camera:X,fov:X.fov,zoom:X.zoom}),$(X,P,mt)};function $(X,J,ft){ft===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ft.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=jo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(P)},this.getCameraTexture=function(X){return p[X]};let ot=null;function K(X,J){if(u=J.getViewerPose(c||o),g=J,u!==null){let ft=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let mt=!1;ft.length!==P.cameras.length&&(P.cameras.length=0,mt=!0);for(let Vt=0;Vt<ft.length;Vt++){let Kt=ft[Vt],se=null;if(d!==null)se=d.getViewport(Kt);else{let Se=f.getViewSubImage(h,Kt);se=Se.viewport,Vt===0&&(t.setRenderTargetTextures(v,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(v))}let jt=L[Vt];jt===void 0&&(jt=new Ze,jt.layers.enable(Vt),jt.viewport=new Ae,L[Vt]=jt),jt.matrix.fromArray(Kt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Kt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(se.x,se.y,se.width,se.height),Vt===0&&(P.matrix.copy(jt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),mt===!0&&P.cameras.push(jt)}let pt=r.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=n.getBinding();let Vt=f.getDepthInformation(ft[0]);Vt&&Vt.isValid&&Vt.texture&&x.init(Vt,r.renderState)}if(pt&&pt.includes("camera-access")&&b){t.state.unbindTexture(),f=n.getBinding();for(let Vt=0;Vt<ft.length;Vt++){let Kt=ft[Vt].camera;if(Kt){let se=p[Kt];se||(se=new _s,p[Kt]=se);let jt=f.getCameraImage(Kt);se.sourceTexture=jt}}}}for(let ft=0;ft<S.length;ft++){let mt=w[ft],pt=S[ft];mt!==null&&pt!==void 0&&pt.update(mt,J,c||o)}ot&&ot(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let ht=new cd;ht.setAnimationLoop(K),this.setAnimationLoop=function(X){ot=X},this.dispose=function(){}}},fy=new Te,md=new Wt;md.set(-1,0,0,0,1,0,0,0,1);function dy(i,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,Jc(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function r(x,p,y,M,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(x,p):p.isMeshLambertMaterial?(s(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(x,p),f(x,p)):p.isMeshPhongMaterial?(s(x,p),u(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(x,p),h(x,p),p.isMeshPhysicalMaterial&&d(x,p,v)):p.isMeshMatcapMaterial?(s(x,p),g(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),b(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?l(x,p,y,M):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===nn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===nn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let y=t.get(p),M=y.envMap,v=y.envMapRotation;M&&(x.envMap.value=M,x.envMapRotation.value.setFromMatrix4(fy.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(md),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,y,M){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=M*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function f(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function h(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,y){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,p){p.matcap&&(x.matcap.value=p.matcap)}function b(x,p){let y=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function py(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let w=S.program;n.uniformBlockBinding(v,w)}function c(v,S){let w=r[v.id];w===void 0&&(x(v),w=u(v),r[v.id]=w,v.addEventListener("dispose",y));let A=S.program;n.updateUBOMapping(v,A);let _=t.render.frame;s[v.id]!==_&&(h(v),s[v.id]=_)}function u(v){let S=f();v.__bindingPointIndex=S;let w=i.createBuffer(),A=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let S=r[v.id],w=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,T=w.length;_<T;_++){let C=w[_];if(Array.isArray(C))for(let I=0,L=C.length;I<L;I++)d(C[I],_,I,A);else d(C,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,S,w,A){if(b(v,S,w,A)===!0){let _=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){let L=T[I],P=p(L);g(L,v.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,S,w){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,w)}function b(v,S,w,A){let _=v.value,T=S+"_"+w;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let C=A[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function x(v){let S=v.uniforms,w=0,A=16;for(let T=0,C=S.length;T<C;T++){let I=Array.isArray(S[T])?S[T]:[S[T]];for(let L=0,P=I.length;L<P;L++){let E=I[L],D=Array.isArray(E.value)?E.value:[E.value];for(let U=0,N=D.length;U<N;U++){let k=D[U],B=p(k),G=w%A,V=G%B.boundary,nt=G+V;w+=V,nt!==0&&A-nt<B.storage&&(w+=A-nt),E.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=w,w+=B.storage}}}let _=w%A;return _>0&&(w+=A-_),v.__size=w,v.__cache={},this}function p(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",v),S}function y(v){let S=v.target;S.removeEventListener("dispose",y);let w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function M(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:M}}var my=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function gy(){return Hn===null&&(Hn=new ia(my,16,16,Di,Ln),Hn.name="DFG_LUT",Hn.minFilter=Ge,Hn.magFilter=Ge,Hn.wrapS=un,Hn.wrapT=un,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var Xr=class{constructor(t={}){let{canvas:e=If(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=dn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let b=d,x=new Set([La,Pa,Ia]),p=new Set([dn,In,kr,Vr,Ra,Ca]),y=new Uint32Array(4),M=new Int32Array(4),v=new H,S=null,w=null,A=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,L=null,P=null,E=null,D=null;this._outputColorSpace=Ce;let U=0,N=0,k=null,B=-1,G=null,V=new Ae,nt=new Ae,$=null,ot=new at(0),K=0,ht=e.width,X=e.height,J=1,ft=null,mt=null,pt=new Ae(0,0,ht,X),At=new Ae(0,0,ht,X),re=!1,Vt=new xs,Kt=!1,se=!1,jt=new Te,Se=new H,Be=new Ae,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Ie(){return k===null?J:1}let q=n;function Xe(F,W){return e.getContext(F,W)}let pe,O,R,Z,et,st,gt,xt,lt,ut,bt,Dt,Mt,_t,Ut,Bt,qt,Y,yt,ct,vt,Et,dt;try{let F={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Sn,!1),q===null){let W="webgl2";if(q=Xe(W,F),q===null)throw Xe(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(F){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),kt("WebGLRenderer: "+F.message),F}function Nt(){pe=new Sb(q),pe.init(),vt=new cy(q,pe),O=new db(q,pe,t,vt),R=new ay(q,pe),O.reversedDepthBuffer&&h&&R.buffers.depth.setReversed(!0),P=q.createFramebuffer(),E=q.createFramebuffer(),D=q.createFramebuffer(),Z=new Eb(q),et=new q_,st=new ly(q,pe,R,et,O,vt,Z),gt=new Mb(C),xt=new Rm(q),Et=new hb(q,xt),lt=new Tb(q,xt,Z,Et),ut=new Rb(q,lt,xt,Et,Z),Y=new Ab(q,O,st),Ut=new pb(et),bt=new Y_(C,gt,pe,O,Et,Ut),Dt=new dy(C,et),Mt=new Z_,_t=new ey(pe),qt=new ub(C,gt,R,ut,g,l),Bt=new oy(C,ut,O),dt=new py(q,Z,O,R),yt=new fb(q,pe,Z),ct=new wb(q,pe,Z),Z.programs=bt.programs,C.capabilities=O,C.extensions=pe,C.properties=et,C.renderLists=Mt,C.shadowMap=Bt,C.state=R,C.info=Z}b!==dn&&(T=new Ib(b,e.width,e.height,a,r,s));let Lt=new yu(C,q);this.xr=Lt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let F=pe.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=pe.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(F){F!==void 0&&(J=F,this.setSize(ht,X,!1))},this.getSize=function(F){return F.set(ht,X)},this.setSize=function(F,W,it=!0){if(Lt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}ht=F,X=W,e.width=Math.floor(F*J),e.height=Math.floor(W*J),it===!0&&(e.style.width=F+"px",e.style.height=W+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,F,W)},this.getDrawingBufferSize=function(F){return F.set(ht*J,X*J).floor()},this.setDrawingBufferSize=function(F,W,it){ht=F,X=W,J=it,e.width=Math.floor(F*it),e.height=Math.floor(W*it),this.setViewport(0,0,F,W)},this.setEffects=function(F){if(b===dn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let W=0;W<F.length;W++)if(F[W].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(V)},this.getViewport=function(F){return F.copy(pt)},this.setViewport=function(F,W,it,Q){F.isVector4?pt.set(F.x,F.y,F.z,F.w):pt.set(F,W,it,Q),R.viewport(V.copy(pt).multiplyScalar(J).round())},this.getScissor=function(F){return F.copy(At)},this.setScissor=function(F,W,it,Q){F.isVector4?At.set(F.x,F.y,F.z,F.w):At.set(F,W,it,Q),R.scissor(nt.copy(At).multiplyScalar(J).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(F){R.setScissorTest(re=F)},this.setOpaqueSort=function(F){ft=F},this.setTransparentSort=function(F){mt=F},this.getClearColor=function(F){return F.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(F=!0,W=!0,it=!0){let Q=0;if(F){let j=!1;if(k!==null){let wt=k.texture.format;j=x.has(wt)}if(j){let wt=k.texture.type,Ct=p.has(wt),Tt=qt.getClearColor(),It=qt.getClearAlpha(),Ft=Tt.r,$t=Tt.g,te=Tt.b;Ct?(y[0]=Ft,y[1]=$t,y[2]=te,y[3]=It,q.clearBufferuiv(q.COLOR,0,y)):(M[0]=Ft,M[1]=$t,M[2]=te,M[3]=It,q.clearBufferiv(q.COLOR,0,M))}else Q|=q.COLOR_BUFFER_BIT}W&&(Q|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(Q|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&q.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),L=F},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),qt.dispose(),Mt.dispose(),_t.dispose(),et.dispose(),gt.dispose(),ut.dispose(),Et.dispose(),dt.dispose(),bt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",ch),Lt.removeEventListener("sessionend",uh),Vi.stop()};function be(F){F.preventDefault(),Kc("WebGLRenderer: Context Lost."),I=!0}function he(){Kc("WebGLRenderer: Context Restored."),I=!1;let F=Z.autoReset,W=Bt.enabled,it=Bt.autoUpdate,Q=Bt.needsUpdate,j=Bt.type;Nt(),Z.autoReset=F,Bt.enabled=W,Bt.autoUpdate=it,Bt.needsUpdate=Q,Bt.type=j}function Sn(F){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Nn(F){let W=F.target;W.removeEventListener("dispose",Nn),M0(W)}function M0(F){S0(F),et.remove(F)}function S0(F){let W=et.get(F).programs;W!==void 0&&(W.forEach(function(it){bt.releaseProgram(it)}),F.isShaderMaterial&&bt.releaseShaderCache(F))}this.renderBufferDirect=function(F,W,it,Q,j,wt){W===null&&(W=sn);let Ct=j.isMesh&&j.matrixWorld.determinantAffine()<0,Tt=E0(F,W,it,Q,j);R.setMaterial(Q,Ct);let It=it.index,Ft=1;if(Q.wireframe===!0){if(It=lt.getWireframeAttribute(it),It===void 0)return;Ft=2}let $t=it.drawRange,te=it.attributes.position,Pt=$t.start*Ft,fe=($t.start+$t.count)*Ft;wt!==null&&(Pt=Math.max(Pt,wt.start*Ft),fe=Math.min(fe,(wt.start+wt.count)*Ft)),It!==null?(Pt=Math.max(Pt,0),fe=Math.min(fe,It.count)):te!=null&&(Pt=Math.max(Pt,0),fe=Math.min(fe,te.count));let Pe=fe-Pt;if(Pe<0||Pe===1/0)return;Et.setup(j,Q,Tt,it,It);let ye,xe=yt;if(It!==null&&(ye=xt.get(It),xe=ct,xe.setIndex(ye)),j.isMesh)Q.wireframe===!0?(R.setLineWidth(Q.wireframeLinewidth*Ie()),xe.setMode(q.LINES)):xe.setMode(q.TRIANGLES);else if(j.isLine){let Ye=Q.linewidth;Ye===void 0&&(Ye=1),R.setLineWidth(Ye*Ie()),j.isLineSegments?xe.setMode(q.LINES):j.isLineLoop?xe.setMode(q.LINE_LOOP):xe.setMode(q.LINE_STRIP)}else j.isPoints?xe.setMode(q.POINTS):j.isSprite&&xe.setMode(q.TRIANGLES);if(j.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))xe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Ye=j._multiDrawStarts,Rt=j._multiDrawCounts,en=j._multiDrawCount,oe=It?xt.get(It).bytesPerElement:1,gn=et.get(Q).currentProgram.getUniforms();for(let On=0;On<en;On++)gn.setValue(q,"_gl_DrawID",On),xe.render(Ye[On]/oe,Rt[On])}else if(j.isInstancedMesh)xe.renderInstances(Pt,Pe,j.count);else if(it.isInstancedBufferGeometry){let Ye=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Rt=Math.min(it.instanceCount,Ye);xe.renderInstances(Pt,Pe,Rt)}else xe.render(Pt,Pe)};function lh(F,W,it,Q){L!==null&&F.isNodeMaterial&&L.setObject(Q,F),Kt===!0&&Ut.setState(F,it,!1),F.transparent===!0&&F.side===Me&&F.forceSinglePass===!1?(F.side=nn,F.needsUpdate=!0,mo(F,W,Q),F.side=Ci,F.needsUpdate=!0,mo(F,W,Q),F.side=Me):mo(F,W,Q)}this.compile=function(F,W,it=null){it===null&&(it=F),L!==null&&L.renderStart(F,W,it),w=_t.get(it),w.init(W),_.push(w),it.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),F!==it&&F.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),se=this.localClippingEnabled,Kt=Ut.init(this.clippingPlanes,se),Kt===!0&&Ut.setGlobalState(this.clippingPlanes,W),L!==null&&Bt.render(w.state.shadowsArray,it,W);let Q=new Set;return F.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let wt=j.material;if(wt)if(Array.isArray(wt))for(let Ct=0;Ct<wt.length;Ct++){let Tt=wt[Ct];lh(Tt,it,W,j),Q.add(Tt)}else lh(wt,it,W,j),Q.add(wt)}),w=_.pop(),L!==null&&L.renderEnd(),Q},this.compileAsync=function(F,W,it=null){let Q=this.compile(F,W,it);return new Promise(j=>{function wt(){if(Q.forEach(function(Ct){let It=et.get(Ct).currentProgram;(It===void 0||It.isReady())&&Q.delete(Ct)}),Q.size===0){j(F);return}setTimeout(wt,10)}pe.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Xl=null;function T0(F){Xl&&Xl(F)}function ch(){Vi.stop()}function uh(){Vi.start()}let Vi=new cd;Vi.setAnimationLoop(T0),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(F){Xl=F,Lt.setAnimationLoop(F),F===null?Vi.stop():Vi.start()},Lt.addEventListener("sessionstart",ch),Lt.addEventListener("sessionend",uh),this.render=function(F,W){if(W!==void 0&&W.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(F,W);let it=Lt.enabled===!0&&Lt.isPresenting===!0,Q=T!==null&&(k===null||it)&&T.begin(C,k);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(W),W=Lt.getCamera()),F.isScene===!0&&F.onBeforeRender(C,F,W,k),w=_t.get(F,_.length),w.init(W),w.state.textureUnits=st.getTextureUnits(),_.push(w),jt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Vt.setFromProjectionMatrix(jt,Rn,W.reversedDepth),se=this.localClippingEnabled,Kt=Ut.init(this.clippingPlanes,se),S=Mt.get(F,A.length),S.init(),A.push(S),Lt.enabled===!0&&Lt.isPresenting===!0){let Ct=C.xr.getDepthSensingMesh();Ct!==null&&Yl(Ct,W,-1/0,C.sortObjects)}Yl(F,W,0,C.sortObjects),S.finish(),L!==null&&L.updateLights(w.state.lightsArray),C.sortObjects===!0&&S.sort(ft,mt),we=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,we&&qt.addToRenderList(S,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&Ut.beginShadows();let j=w.state.shadowsArray;if(Bt.render(j,F,W),Kt===!0&&Ut.endShadows(),(Q&&T.hasRenderPass())===!1){let Ct=S.opaque,Tt=S.transmissive;if(w.setupLights(),W.isArrayCamera){let It=W.cameras;if(Tt.length>0)for(let Ft=0,$t=It.length;Ft<$t;Ft++){let te=It[Ft];fh(Ct,Tt,F,te)}we&&qt.render(F);for(let Ft=0,$t=It.length;Ft<$t;Ft++){let te=It[Ft];hh(S,F,te,te.viewport)}}else Tt.length>0&&fh(Ct,Tt,F,W),we&&qt.render(F),hh(S,F,W)}k!==null&&N===0&&(st.updateMultisampleRenderTarget(k),st.updateRenderTargetMipmap(k)),Q&&T.end(C),F.isScene===!0&&F.onAfterRender(C,F,W),Et.resetDefaultState(),B=-1,G=null,_.pop(),_.length>0?(w=_[_.length-1],st.setTextureUnits(w.state.textureUnits),Kt===!0&&Ut.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,L!==null&&L.renderEnd()};function Yl(F,W,it,Q){if(F.visible===!1)return;if(F.layers.test(W.layers)){if(F.isGroup)it=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(W);else if(F.isLightProbeGrid)w.pushLightProbeGrid(F);else if(F.isLight)w.pushLight(F),F.castShadow&&w.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(Vt)){Q&&Be.setFromMatrixPosition(F.matrixWorld).applyMatrix4(jt);let Ct=ut.update(F),Tt=F.material;Tt.visible&&S.push(F,Ct,Tt,it,Be.z,null,W)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(Vt))){let Ct=ut.update(F),Tt=F.material;if(Q&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Be.copy(F.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Be.copy(Ct.boundingSphere.center)),Be.applyMatrix4(F.matrixWorld).applyMatrix4(jt)),Array.isArray(Tt)){let It=Ct.groups;for(let Ft=0,$t=It.length;Ft<$t;Ft++){let te=It[Ft],Pt=Tt[te.materialIndex];Pt&&Pt.visible&&S.push(F,Ct,Pt,it,Be.z,te,W)}}else Tt.visible&&S.push(F,Ct,Tt,it,Be.z,null,W)}}let wt=F.children;for(let Ct=0,Tt=wt.length;Ct<Tt;Ct++)Yl(wt[Ct],W,it,Q)}function hh(F,W,it,Q){let{opaque:j,transmissive:wt,transparent:Ct}=F;w.setupLightsView(it),Kt===!0&&Ut.setGlobalState(C.clippingPlanes,it),Q&&R.viewport(V.copy(Q)),j.length>0&&po(j,W,it),wt.length>0&&po(wt,W,it),Ct.length>0&&po(Ct,W,it),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function fh(F,W,it,Q){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Q.id]===void 0){let Pt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Q.id]=new Qe(1,1,{generateMipmaps:!0,type:Pt?Ln:dn,minFilter:Li,samples:Math.max(4,O.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let wt=w.state.transmissionRenderTarget[Q.id],Ct=Q.viewport||V;wt.setSize(Ct.z*C.transmissionResolutionScale,Ct.w*C.transmissionResolutionScale);let Tt=C.getRenderTarget(),It=C.getActiveCubeFace(),Ft=C.getActiveMipmapLevel();C.setRenderTarget(wt),C.getClearColor(ot),K=C.getClearAlpha(),K<1&&C.setClearColor(16777215,.5),C.clear(),we&&qt.render(it);let $t=C.toneMapping;C.toneMapping=Cn;let te=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),w.setupLightsView(Q),Kt===!0&&Ut.setGlobalState(C.clippingPlanes,Q),po(F,it,Q),st.updateMultisampleRenderTarget(wt),st.updateRenderTargetMipmap(wt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let fe=0,Pe=W.length;fe<Pe;fe++){let ye=W[fe],{object:xe,geometry:Ye,material:Rt,group:en}=ye;if(Rt.side===Me&&xe.layers.test(Q.layers)){let oe=Rt.side;Rt.side=nn,Rt.needsUpdate=!0,dh(xe,it,Q,Ye,Rt,en),Rt.side=oe,Rt.needsUpdate=!0,Pt=!0}}Pt===!0&&(st.updateMultisampleRenderTarget(wt),st.updateRenderTargetMipmap(wt))}C.setRenderTarget(Tt,It,Ft),C.setClearColor(ot,K),te!==void 0&&(Q.viewport=te),C.toneMapping=$t}function po(F,W,it){let Q=W.isScene===!0?W.overrideMaterial:null;for(let j=0,wt=F.length;j<wt;j++){let Ct=F[j],{object:Tt,geometry:It,group:Ft}=Ct,$t=Ct.material;$t.allowOverride===!0&&Q!==null&&($t=Q),Tt.layers.test(it.layers)&&dh(Tt,W,it,It,$t,Ft)}}function dh(F,W,it,Q,j,wt){L!==null&&j.isNodeMaterial&&L.setObject(F,j),F.onBeforeRender(C,W,it,Q,j,wt),F.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),j.onBeforeRender(C,W,it,Q,F,wt),j.transparent===!0&&j.side===Me&&j.forceSinglePass===!1?(j.side=nn,j.needsUpdate=!0,C.renderBufferDirect(it,W,Q,j,F,wt),j.side=Ci,j.needsUpdate=!0,C.renderBufferDirect(it,W,Q,j,F,wt),j.side=Me):C.renderBufferDirect(it,W,Q,j,F,wt),F.onAfterRender(C,W,it,Q,j,wt)}function mo(F,W,it){W.isScene!==!0&&(W=sn);let Q=et.get(F),j=w.state.lights,wt=w.state.shadowsArray,Ct=j.state.version,Tt=bt.getParameters(F,j.state,wt,W,it,w.state.lightProbeGridArray),It=bt.getProgramCacheKey(Tt),Ft=Q.programs;Q.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?W.environment:null,Q.fog=W.fog;let $t=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;Q.envMap=gt.get(F.envMap||Q.environment,$t),Q.envMapRotation=Q.environment!==null&&F.envMap===null?W.environmentRotation:F.envMapRotation,Ft===void 0&&(F.addEventListener("dispose",Nn),Ft=new Map,Q.programs=Ft);let te=Ft.get(It);if(te!==void 0){if(Q.currentProgram===te&&Q.lightsStateVersion===Ct)return mh(F,Tt),te}else Tt.uniforms=bt.getUniforms(F),L!==null&&F.isNodeMaterial&&L.build(F,it,Tt),F.onBeforeCompile(Tt,C),te=bt.acquireProgram(Tt,It),Ft.set(It,te),Q.uniforms=Tt.uniforms;let Pt=Q.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Pt.clippingPlanes=Ut.uniform),mh(F,Tt),Q.needsLights=R0(F),Q.lightsStateVersion=Ct,Q.needsLights&&(Pt.ambientLightColor.value=j.state.ambient,Pt.lightProbe.value=j.state.probe,Pt.sunLights.value=j.state.sun,Pt.sunLightShadows.value=j.state.sunShadow,Pt.directionalLights.value=j.state.directional,Pt.directionalLightShadows.value=j.state.directionalShadow,Pt.spotLights.value=j.state.spot,Pt.spotLightShadows.value=j.state.spotShadow,Pt.rectAreaLights.value=j.state.rectArea,Pt.ltc_1.value=j.state.rectAreaLTC1,Pt.ltc_2.value=j.state.rectAreaLTC2,Pt.pointLights.value=j.state.point,Pt.pointLightShadows.value=j.state.pointShadow,Pt.hemisphereLights.value=j.state.hemi,Pt.sunShadowMatrix.value=j.state.sunShadowMatrix,Pt.sunShadowCascade.value=j.state.sunShadowCascade,Pt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pt.spotLightMatrix.value=j.state.spotLightMatrix,Pt.spotLightMap.value=j.state.spotLightMap,Pt.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.lightProbeGrid=w.state.lightProbeGridArray.length>0,Q.currentProgram=te,Q.uniformsList=null,te}function ph(F){if(F.uniformsList===null){let W=F.currentProgram.getUniforms();F.uniformsList=Wr.seqWithValue(W.seq,F.uniforms)}return F.uniformsList}function mh(F,W){let it=et.get(F);it.outputColorSpace=W.outputColorSpace,it.batching=W.batching,it.batchingColor=W.batchingColor,it.instancing=W.instancing,it.instancingColor=W.instancingColor,it.instancingMorph=W.instancingMorph,it.skinning=W.skinning,it.morphTargets=W.morphTargets,it.morphNormals=W.morphNormals,it.morphColors=W.morphColors,it.morphTargetsCount=W.morphTargetsCount,it.numClippingPlanes=W.numClippingPlanes,it.numIntersection=W.numClipIntersection,it.vertexAlphas=W.vertexAlphas,it.vertexTangents=W.vertexTangents,it.toneMapping=W.toneMapping}function w0(F,W){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;v.setFromMatrixPosition(W.matrixWorld);for(let it=0,Q=F.length;it<Q;it++){let j=F[it];if(j.texture!==null&&j.boundingBox.containsPoint(v))return j}return null}function E0(F,W,it,Q,j){W.isScene!==!0&&(W=sn),st.resetTextureUnits();let wt=W.fog,Ct=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?W.environment:null,Tt=k===null?C.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ee.workingColorSpace,It=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ft=gt.get(Q.envMap||Ct,It),$t=Q.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,te=!!it.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Pt=!!it.morphAttributes.position,fe=!!it.morphAttributes.normal,Pe=!!it.morphAttributes.color,ye=Cn;Q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ye=C.toneMapping);let xe=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Ye=xe!==void 0?xe.length:0,Rt=et.get(Q),en=w.state.lights;if(Kt===!0&&(se===!0||F!==G)){let _e=F===G&&Q.id===B;Ut.setState(Q,F,_e)}let oe=!1;Q.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==en.state.version||Rt.outputColorSpace!==Tt||j.isBatchedMesh&&Rt.batching===!1||!j.isBatchedMesh&&Rt.batching===!0||j.isBatchedMesh&&Rt.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Rt.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Rt.instancing===!1||!j.isInstancedMesh&&Rt.instancing===!0||j.isSkinnedMesh&&Rt.skinning===!1||!j.isSkinnedMesh&&Rt.skinning===!0||j.isInstancedMesh&&Rt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Rt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Rt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Rt.instancingMorph===!1&&j.morphTexture!==null||Rt.envMap!==Ft||Q.fog===!0&&Rt.fog!==wt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ut.numPlanes||Rt.numIntersection!==Ut.numIntersection)||Rt.vertexAlphas!==$t||Rt.vertexTangents!==te||Rt.morphTargets!==Pt||Rt.morphNormals!==fe||Rt.morphColors!==Pe||Rt.toneMapping!==ye||Rt.morphTargetsCount!==Ye||!!Rt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Rt.__version=Q.version);let gn=Rt.currentProgram;oe===!0&&(gn=mo(Q,W,j),L&&Q.isNodeMaterial&&L.onUpdateProgram(Q,gn,Rt));let On=!1,fi=!1,fr=!1,ge=gn.getUniforms(),Re=Rt.uniforms;if(R.useProgram(gn.program)&&(On=!0,fi=!0,fr=!0),Q.id!==B&&(B=Q.id,fi=!0),Rt.needsLights){let _e=w0(w.state.lightProbeGridArray,j);Rt.lightProbeGrid!==_e&&(Rt.lightProbeGrid=_e,fi=!0)}if(On||G!==F){R.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),ge.setValue(q,"projectionMatrix",F.projectionMatrix),ge.setValue(q,"viewMatrix",F.matrixWorldInverse);let pi=ge.map.cameraPosition;pi!==void 0&&pi.setValue(q,Se.setFromMatrixPosition(F.matrixWorld)),O.logarithmicDepthBuffer&&ge.setValue(q,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ge.setValue(q,"isOrthographic",F.isOrthographicCamera===!0),G!==F&&(G=F,fi=!0,fr=!0)}if(Rt.needsLights&&(en.state.sunShadowMap.length>0&&ge.setValue(q,"sunShadowMap",en.state.sunShadowMap,st),en.state.directionalShadowMap.length>0&&ge.setValue(q,"directionalShadowMap",en.state.directionalShadowMap,st),en.state.spotShadowMap.length>0&&ge.setValue(q,"spotShadowMap",en.state.spotShadowMap,st),en.state.pointShadowMap.length>0&&ge.setValue(q,"pointShadowMap",en.state.pointShadowMap,st)),j.isSkinnedMesh){ge.setOptional(q,j,"bindMatrix"),ge.setOptional(q,j,"bindMatrixInverse");let _e=j.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),ge.setValue(q,"boneTexture",_e.boneTexture,st))}j.isBatchedMesh&&(ge.setOptional(q,j,"batchingTexture"),ge.setValue(q,"batchingTexture",j._matricesTexture,st),ge.setOptional(q,j,"batchingIdTexture"),ge.setValue(q,"batchingIdTexture",j._indirectTexture,st),ge.setOptional(q,j,"batchingColorTexture"),j._colorsTexture!==null&&ge.setValue(q,"batchingColorTexture",j._colorsTexture,st));let di=it.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&Y.update(j,it,gn),(fi||Rt.receiveShadow!==j.receiveShadow)&&(Rt.receiveShadow=j.receiveShadow,ge.setValue(q,"receiveShadow",j.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&W.environment!==null&&(Re.envMapIntensity.value=W.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=gy()),fi){if(ge.setValue(q,"toneMappingExposure",C.toneMappingExposure),Rt.needsLights&&A0(Re,fr),wt&&Q.fog===!0&&Dt.refreshFogUniforms(Re,wt),Dt.refreshMaterialUniforms(Re,Q,J,X,w.state.transmissionRenderTarget[F.id]),Rt.needsLights&&Rt.lightProbeGrid){let _e=Rt.lightProbeGrid;Re.probesSH.value=_e.texture,Re.probesMin.value.copy(_e.boundingBox.min),Re.probesMax.value.copy(_e.boundingBox.max),Re.probesResolution.value.copy(_e.resolution)}Wr.upload(q,ph(Rt),Re,st)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Wr.upload(q,ph(Rt),Re,st),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ge.setValue(q,"center",j.center),ge.setValue(q,"modelViewMatrix",j.modelViewMatrix),ge.setValue(q,"normalMatrix",j.normalMatrix),ge.setValue(q,"modelMatrix",j.matrixWorld),Q.uniformsGroups!==void 0){let _e=Q.uniformsGroups;for(let pi=0,dr=_e.length;pi<dr;pi++){let xh=_e[pi];dt.update(xh,gn),dt.bind(xh,gn)}}return gn}function A0(F,W){F.ambientLightColor.needsUpdate=W,F.lightProbe.needsUpdate=W,F.sunLights.needsUpdate=W,F.sunLightShadows.needsUpdate=W,F.directionalLights.needsUpdate=W,F.directionalLightShadows.needsUpdate=W,F.pointLights.needsUpdate=W,F.pointLightShadows.needsUpdate=W,F.spotLights.needsUpdate=W,F.spotLightShadows.needsUpdate=W,F.rectAreaLights.needsUpdate=W,F.hemisphereLights.needsUpdate=W}function R0(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(F,W,it){let Q=et.get(F);Q.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),et.get(F.texture).__webglTexture=W,et.get(F.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:it,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,W){let it=et.get(F);it.__webglFramebuffer=W,it.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(F,W=0,it=0){k=F,U=W,N=it;let Q=null,j=!1,wt=!1;if(F){let Tt=et.get(F);if(Tt.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(q.FRAMEBUFFER,Tt.__webglFramebuffer),V.copy(F.viewport),nt.copy(F.scissor),$=F.scissorTest,R.viewport(V),R.scissor(nt),R.setScissorTest($),B=-1;return}else if(Tt.__webglFramebuffer===void 0)st.setupRenderTarget(F);else if(Tt.__hasExternalTextures)st.rebindTextures(F,et.get(F.texture).__webglTexture,et.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let $t=F.depthTexture;if(Tt.__boundDepthTexture!==$t){if($t!==null&&et.has($t)&&(F.width!==$t.image.width||F.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(F)}}let It=F.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(wt=!0);let Ft=et.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Ft[W])?Q=Ft[W][it]:Q=Ft[W],j=!0):F.samples>0&&st.useMultisampledRTT(F)===!1?Q=et.get(F).__webglMultisampledFramebuffer:Array.isArray(Ft)?Q=Ft[it]:Q=Ft,V.copy(F.viewport),nt.copy(F.scissor),$=F.scissorTest}else V.copy(pt).multiplyScalar(J).floor(),nt.copy(At).multiplyScalar(J).floor(),$=re;if(it!==0&&(Q=P),R.bindFramebuffer(q.FRAMEBUFFER,Q)&&R.drawBuffers(F,Q),R.viewport(V),R.scissor(nt),R.setScissorTest($),j){let Tt=et.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,Tt.__webglTexture,it)}else if(wt){let Tt=W;for(let It=0;It<F.textures.length;It++){let Ft=et.get(F.textures[It]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+It,Ft.__webglTexture,it,Tt)}}else if(F!==null&&it!==0){let Tt=et.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Tt.__webglTexture,it)}B=-1};function gh(F){let W=et.get(F);return(W.__readFormat!==F.format||W.__readType!==F.type)&&(W.__readFormat=F.format,W.__readType=F.type,W.__formatReadable=O.textureFormatReadable(F.format),W.__typeReadable=O.textureTypeReadable(F.type)),W}this.readRenderTargetPixels=function(F,W,it,Q,j,wt,Ct,Tt=0){if(!(F&&F.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=et.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){R.bindFramebuffer(q.FRAMEBUFFER,It);try{let Ft=F.textures[Tt],$t=Ft.format,te=Ft.type;F.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Tt);let Pt=gh(Ft);if(Pt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=F.width-Q&&it>=0&&it<=F.height-j&&q.readPixels(W,it,Q,j,vt.convert($t),vt.convert(te),wt)}finally{let Ft=k!==null?et.get(k).__webglFramebuffer:null;R.bindFramebuffer(q.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(F,W,it,Q,j,wt,Ct,Tt=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=et.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It)if(W>=0&&W<=F.width-Q&&it>=0&&it<=F.height-j){R.bindFramebuffer(q.FRAMEBUFFER,It);let Ft=F.textures[Tt],$t=Ft.format,te=Ft.type;F.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Tt);let Pt=gh(Ft);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,fe),q.bufferData(q.PIXEL_PACK_BUFFER,wt.byteLength,q.STREAM_READ),q.readPixels(W,it,Q,j,vt.convert($t),vt.convert(te),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Pe=k!==null?et.get(k).__webglFramebuffer:null;R.bindFramebuffer(q.FRAMEBUFFER,Pe);let ye=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Lf(q,ye,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,fe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,wt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(fe),q.deleteSync(ye),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,W=null,it=0){let Q=Math.pow(2,-it),j=Math.floor(F.image.width*Q),wt=Math.floor(F.image.height*Q),Ct=W!==null?W.x:0,Tt=W!==null?W.y:0;st.setTexture2D(F,0),q.copyTexSubImage2D(q.TEXTURE_2D,it,0,0,Ct,Tt,j,wt),R.unbindTexture()},this.copyTextureToTexture=function(F,W,it=null,Q=null,j=0,wt=0){let Ct,Tt,It,Ft,$t,te,Pt,fe,Pe,ye=F.isCompressedTexture?F.mipmaps[wt]:F.image;if(it!==null)Ct=it.max.x-it.min.x,Tt=it.max.y-it.min.y,It=it.isBox3?it.max.z-it.min.z:1,Ft=it.min.x,$t=it.min.y,te=it.isBox3?it.min.z:0;else{let Re=Math.pow(2,-j);Ct=Math.floor(ye.width*Re),Tt=Math.floor(ye.height*Re),F.isDataArrayTexture?It=ye.depth:F.isData3DTexture?It=Math.floor(ye.depth*Re):It=1,Ft=0,$t=0,te=0}Q!==null?(Pt=Q.x,fe=Q.y,Pe=Q.z):(Pt=0,fe=0,Pe=0);let xe=vt.convert(W.format),Ye=vt.convert(W.type),Rt;W.isData3DTexture?(st.setTexture3D(W,0),Rt=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(st.setTexture2DArray(W,0),Rt=q.TEXTURE_2D_ARRAY):(st.setTexture2D(W,0),Rt=q.TEXTURE_2D),R.activeTexture(q.TEXTURE0),R.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),R.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),R.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);let en=R.getParameter(q.UNPACK_ROW_LENGTH),oe=R.getParameter(q.UNPACK_IMAGE_HEIGHT),gn=R.getParameter(q.UNPACK_SKIP_PIXELS),On=R.getParameter(q.UNPACK_SKIP_ROWS),fi=R.getParameter(q.UNPACK_SKIP_IMAGES);R.pixelStorei(q.UNPACK_ROW_LENGTH,ye.width),R.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ye.height),R.pixelStorei(q.UNPACK_SKIP_PIXELS,Ft),R.pixelStorei(q.UNPACK_SKIP_ROWS,$t),R.pixelStorei(q.UNPACK_SKIP_IMAGES,te);let fr=F.isDataArrayTexture||F.isData3DTexture,ge=W.isDataArrayTexture||W.isData3DTexture;if(F.isDepthTexture){let Re=et.get(F),di=et.get(W),_e=et.get(Re.__renderTarget),pi=et.get(di.__renderTarget);R.bindFramebuffer(q.READ_FRAMEBUFFER,_e.__webglFramebuffer),R.bindFramebuffer(q.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let dr=0;dr<It;dr++)fr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,et.get(F).__webglTexture,j,te+dr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,et.get(W).__webglTexture,wt,Pe+dr)),q.blitFramebuffer(Ft,$t,Ct,Tt,Pt,fe,Ct,Tt,q.DEPTH_BUFFER_BIT,q.NEAREST);R.bindFramebuffer(q.READ_FRAMEBUFFER,null),R.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(j!==0||F.isRenderTargetTexture||et.has(F)){let Re=et.get(F),di=et.get(W);R.bindFramebuffer(q.READ_FRAMEBUFFER,E),R.bindFramebuffer(q.DRAW_FRAMEBUFFER,D);for(let _e=0;_e<It;_e++)fr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Re.__webglTexture,j,te+_e):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Re.__webglTexture,j),ge?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,di.__webglTexture,wt,Pe+_e):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,di.__webglTexture,wt),j!==0?q.blitFramebuffer(Ft,$t,Ct,Tt,Pt,fe,Ct,Tt,q.COLOR_BUFFER_BIT,q.NEAREST):ge?q.copyTexSubImage3D(Rt,wt,Pt,fe,Pe+_e,Ft,$t,Ct,Tt):q.copyTexSubImage2D(Rt,wt,Pt,fe,Ft,$t,Ct,Tt);R.bindFramebuffer(q.READ_FRAMEBUFFER,null),R.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else ge?F.isDataTexture||F.isData3DTexture?q.texSubImage3D(Rt,wt,Pt,fe,Pe,Ct,Tt,It,xe,Ye,ye.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(Rt,wt,Pt,fe,Pe,Ct,Tt,It,xe,ye.data):q.texSubImage3D(Rt,wt,Pt,fe,Pe,Ct,Tt,It,xe,Ye,ye):F.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,wt,Pt,fe,Ct,Tt,xe,Ye,ye.data):F.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,wt,Pt,fe,ye.width,ye.height,xe,ye.data):q.texSubImage2D(q.TEXTURE_2D,wt,Pt,fe,Ct,Tt,xe,Ye,ye);R.pixelStorei(q.UNPACK_ROW_LENGTH,en),R.pixelStorei(q.UNPACK_IMAGE_HEIGHT,oe),R.pixelStorei(q.UNPACK_SKIP_PIXELS,gn),R.pixelStorei(q.UNPACK_SKIP_ROWS,On),R.pixelStorei(q.UNPACK_SKIP_IMAGES,fi),wt===0&&W.generateMipmaps&&q.generateMipmap(Rt),R.unbindTexture()},this.initRenderTarget=function(F){et.get(F).__webglFramebuffer===void 0&&st.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?st.setTextureCube(F,0):F.isData3DTexture?st.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?st.setTexture2DArray(F,0):st.setTexture2D(F,0),R.unbindTexture()},this.resetState=function(){U=0,N=0,k=null,R.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};function gd(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function xd(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}var xy=[],vu=new Map,by=0;function bl(i){xy=i,vu=new Map(i.flatMap(t=>t.items.map(e=>[_y(t.id,e.id),e]))),by++}function _y(i,t){return`pack:${i}:${t}`}function yy(i){return i.startsWith("pack:")}var vy={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function bd(i){return De(i)?.parts.find(t=>t.screen)}function De(i){if(!yy(i))return;let t=vu.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=vy[e];return r?vu.get(`pack:${r}:${n.join(":")}`):void 0}function pn(i,t){let e=De(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall"||t.type==="lamp_wall_updown")return Ws;if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));if(t.type==="fan_ceiling"||t.type==="fan_ceiling_light")return Math.max(0,i.height-Math.max(.05,t.h));if(t.type==="access_point"||t.type==="smoke_detector")return Math.max(0,i.height-Math.max(.02,t.h));if(t.type==="fan_wall")return 1.55;if(t.type==="altar_wall")return 1.45;if(t.type==="floating_shelf")return 1.35;if(t.type==="water_heater")return 1.7;if(t.type==="range_hood")return 1.35;if(t.type==="microwave")return xl(i,t.x,t.z);if(t.type==="modem_router"||t.type==="smart_display")return xl(i,t.x,t.z);if((t.type==="water_pump"||t.type==="heat_pump_outdoor")&&!i.rooms.some(n=>n.points.length>=3&&ue([t.x,t.z],n.points)))return _l(i,t.x,t.z);switch(e?.mount){case"surface":return xl(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:Xs(t)}}var Mu=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden","lamp_column","lamp_tv_bars","lamp_orb_table","lamp_portable","lamp_ambient_spot","lamp_cube","lamp_panel_round","lamp_garden_spots","lamp_wall_updown"]),_d=new Set([...Mu,"radiator","air_conditioner","water_pump","fan_ceiling","fan_ceiling_light","fan_wall","fan_floor","water_heater","range_hood","microwave","water_purifier","air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","network_cabinet","nas_server","access_point","wall_thermostat","smoke_detector","siren_alarm","electrical_panel","ups_unit","modem_router","heat_pump_outdoor","hot_water_tank","ventilation_fan","humidifier","smart_display","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","temperature_humidity_sensor","video_doorbell","robot_vacuum","robot_mower","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","kitchen_display","dishwasher","washer","dryer","washer_dryer_tower","balcony_solar","kitchen","island","sink"]);function Xn(i){return i.kind==="veranda"||i.kind==="balcony"||i.kind==="canopy"}function yl(i,t){if(i.length<2)return 0;if(t<0){let f=0,h=-1;for(let d=0;d<i.length;d++){let g=i[d],b=i[(d+1)%i.length],x=Math.hypot(b[0]-g[0],b[1]-g[1]);x>h&&([f,h]=[d,x])}return f}let e=i[t],n=i[(t+1)%i.length],r=n[0]-e[0],s=n[1]-e[1],o=Math.hypot(r,s)||1,a=(e[0]+n[0])/2,l=(e[1]+n[1])/2,c=0,u=-1;for(let f=0;f<i.length;f++){if(f===t)continue;let h=i[f],d=i[(f+1)%i.length],g=d[0]-h[0],b=d[1]-h[1],x=Math.hypot(g,b)||1,p=Math.abs((g*r+b*s)/(x*o)),M=Math.abs(r*((h[1]+d[1])/2-l)-s*((h[0]+d[0])/2-a))/o*p;M>u&&([c,u]=[f,M])}return c}var qr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2},Sy={canopy:.02,veranda:.12,balcony:.12};function Ys(i){return Sy[i]}function oi(i){return i==="hedge"||i==="fence"||i==="pergola"}function qs(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let f=s(c,u);o=Math.min(o,f),a=Math.max(a,f)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function Ty(i,t,e,n){return ai(i)+(t.offset??0)+qr[t.type]-qs(t,e,n)}function ai(i){return i.elevation>.3?0:-.2}function _l(i,t,e){let n=(i.outdoor??[]).filter(s=>!oi(s.type)&&s.type!=="pool"&&ue([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?Ty(i,r,t,e):ai(i)}var wy={type:"none",pitch:35,overhang:.4},fE={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...wy}};var Ws=1.75;function yd(i){return Mu.has(i)||!!De(i)?.light}var Ey=new Set(["table","table_round","coffee_table","coffee_table_round","coffee_table_glass","nesting_tables","side_table_round","console_table","lowboard_120","lowboard_160","lowboard_200","tv_console","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Xs(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"floating_shelf":return 1.35;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"air_conditioner":return 1.9;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;case"security_camera":return 1.85;case"smart_lock":return .95;case"wall_thermostat":return 1.35;case"siren_alarm":return 1.85;case"electrical_panel":return .85;case"ventilation_fan":return 1.8;case"wall_switch":return 1.05;case"wall_outlet":case"smart_plug":return .3;case"motion_sensor":return 1.9;case"contact_sensor":return 1.1;case"temperature_humidity_sensor":return 1.35;case"video_doorbell":return 1.25;default:return 0}}function xl(i,t,e){let n=0;for(let r of i.furniture)!(Ey.has(r.type)||De(r.type)?.surface)||!ue([t,e],vl(r))||(n=Math.max(n,r.h));return n}var Ay=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Ry=["standard","bars","glass_wall"];function ir(i,t){return i.type==="door"?i.style&&Ay.includes(i.style)?i.style:t?"front":"interior":i.style&&Ry.includes(i.style)?i.style:"standard"}function vd(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=s-.5;if(l+c>u){let h=Math.max(0,u)/(l+c);l*=h,c*=h}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Md(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function rr(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function $s(i){return Math.abs(rr(i))}function Sd(i){let t=rr(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function Td(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function wd(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function vl(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function ue(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}var He=(i,t)=>[i[0]-t[0],i[1]-t[1]],Ui=(i,t)=>[i[0]+t[0],i[1]+t[1]],li=(i,t)=>[i[0]*t,i[1]*t],Js=(i,t)=>i[0]*t[0]+i[1]*t[1],Zs=(i,t)=>i[0]*t[1]-i[1]*t[0],Ks=i=>Math.hypot(i[0],i[1]),ci=i=>{let t=Ks(i)||1;return[i[0]/t,i[1]/t]},Ed=i=>[-i[1],i[0]],Ad=i=>[i[1],-i[0]];function Qs(i,t,e=[]){let n=t.eps??.005,r=[],s=i.filter(_=>!Xn(_)),o=e.filter(_=>Math.hypot(_.b[0]-_.a[0],_.b[1]-_.a[1])>.05),a=[],l=_=>{for(let T=0;T<a.length;T++)if(Math.abs(a[T][0]-_[0])<=n&&Math.abs(a[T][1]-_[1])<=n)return T;return a.push([_[0],_[1]]),a.length-1},c=[];for(let _ of s){let T=_.points;if(T.length<3||Math.abs(rr(T))<1e-6)continue;let C=rr(T)>0,I=T.map(l);for(let L=0;L<T.length;L++){let P=I[L],E=I[(L+1)%T.length];P!==E&&c.push(C?{u:P,v:E,room:_.id,edge:L,forward:!0}:{u:E,v:P,room:_.id,edge:L,forward:!1})}}let u=o.map(_=>[l(_.a),l(_.b)]),f=new Set;for(let _ of s){let T=_.points;T.length<3||(_.wall_splits??[]).forEach((C,I)=>{if(!C||I>=T.length)return;let L=T[I],P=He(T[(I+1)%T.length],L),E=Ks(P);for(let D of C)D>n&&D<E-n&&f.add(l(Ui(L,li(P,D/E))))})}let h=[];for(let _ of c){let T=a[_.u],C=a[_.v],I=He(C,T),L=Ks(I),P=li(I,1/L),E=[];for(let U=0;U<a.length;U++){if(U===_.u||U===_.v)continue;let N=He(a[U],T),k=Js(N,P);k<=n||k>=L-n||Math.abs(Zs(P,N))<=n&&E.push({t:k,id:U})}E.sort((U,N)=>U.t-N.t);let D=[{t:0,id:_.u},...E,{t:L,id:_.v}];for(let U=0;U+1<D.length;U++){let N=D[U],k=D[U+1],B=_.forward?N.t:L-k.t,G=_.forward?k.t:L-N.t;h.push({u:N.id,v:k.id,room:_.room,edge:_.edge,t0:B,t1:G})}}let d=new Map;for(let _ of h){let T=_.u<_.v?`${_.u}-${_.v}`:`${_.v}-${_.u}`,C=d.get(T);C||d.set(T,C=[]),C.push(_)}let g=_=>({room_id:_.room,edge:_.edge,t0:_.t0,t1:_.t1}),b=new Map;for(let _ of h){let T=`${_.room}:${_.edge}`;b.set(T,[...b.get(T)??[],_.t0].sort((C,I)=>C-I))}let x=_=>{let T=s.find(I=>I.id===_.room)?.wall_heights?.[_.edge];if(!Array.isArray(T))return T;let C=b.get(`${_.room}:${_.edge}`)??[];return T[C.indexOf(_.t0)]??null},p=_=>{let T=_.map(x).filter(C=>typeof C=="number"&&C>0);return T.length?Math.min(...T):void 0},y=_=>{let T=_.map(C=>s.find(I=>I.id===C.room)?.wall_thickness?.[C.edge]).filter(C=>typeof C=="number"&&C>0);return T.length?Math.max(...T):void 0},M=_=>_.some(T=>x(T)===0),v=[],S=[];for(let _ of d.values()){let T=_[0],C=_.find(I=>I!==T&&I.u===T.v&&I.v===T.u&&I.room!==T.room);for(let I of _)I!==T&&I!==C&&I.room!==T.room&&r.push(`overlap:${T.room}:${I.room}`);if(M(C?[T,C]:[T])){C&&v.push([T.room,C.room]);continue}if(C){let I=y([T,C])??t.interior;S.push({a:T.u,b:T.v,left:I/2,right:I/2,exterior:!1,roomLeft:T.room,roomRight:C.room,sources:[g(T),g(C)],height:p([T,C])})}else S.push({a:T.u,b:T.v,left:0,right:y([T])??t.exterior,exterior:!0,roomLeft:T.room,roomRight:null,sources:[g(T)],height:p([T])})}o.forEach((_,T)=>{let[C,I]=u[T];if(C===I)return;let L=[(_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2],P=i.find(U=>U.points.length>=3&&ue(L,U.points))?.id??null,E=(_.thickness??t.interior)/2,D=typeof _.height=="number"&&_.height>0?_.height:void 0;S.push({free:_.id,a:C,b:I,left:E,right:E,exterior:!1,roomLeft:P,roomRight:P,sources:[],height:D})}),S=Iy(S,a,f);let w=Ly(S,a);return{walls:S.map((_,T)=>{let C=a[_.a],I=a[_.b],L=w.get(`${T}:a`),P=w.get(`${T}:b`),E=Fy([L.right,P.left,I,P.right,L.left,C],1e-6);return{id:Cy(C,I),a:[C[0],C[1]],b:[I[0],I[1]],left:_.left,right:_.right,exterior:_.exterior,roomLeft:_.roomLeft,roomRight:_.roomRight,sources:_.sources,footprint:E,..._.free?{free:_.free}:{},..._.height!==void 0?{height:_.height}:{}}}),warnings:[...new Set(r)],open:v}}function Cy(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function Rd(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function Iy(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=Rd(l)),c.a!==o&&(c=Rd(c)),l.a===c.b)continue;let u=ci(He(t[l.b],t[l.a])),f=ci(He(t[c.b],t[c.a]));if(Math.abs(Zs(u,f))>1e-6||Js(u,f)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:Py(l.sources,c.sources)},d=n.filter((g,b)=>b!==a[0]&&b!==a[1]);d.push(h),n.length=0,n.push(...d),r=!0;break}}return n}function Py(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function Ly(i,t){let e=new Map;i.forEach((r,s)=>{let o=ci(He(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:li(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Ui(o,li(Ed(c.d),c.left)),right:Ui(o,li(Ad(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let u=s[c],f=s[(c+1)%s.length],h=Ui(o,li(Ed(u.d),u.left)),d=Ui(o,li(Ad(f.d),f.right)),g=Zs(u.d,f.d);if(Math.abs(g)<1e-4)continue;let b=Zs(He(d,h),f.d)/g,x=Ui(h,li(u.d,b));Ks(He(x,o))>l||(n.get(u.key).left=x,n.get(f.key).right=x)}}return n}function Fy(i,t){let e=i.filter((r,s)=>Ks(He(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=He(o,s),c=He(a,o);if(Math.abs(Zs(ci(l),ci(c)))<1e-7&&Js(l,c)>0){e=e.filter((u,f)=>f!==r),n=!0;break}}}return e}function Cd(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=ci(He(r,n));return Ui(n,li(s,e))}function Id(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=ci(He(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Ui(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Pd(i,t,e){if(!t.wall)return Dy(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=Cd(e.room,0,t.offset);return{wall:n,s:Js(He(r,n.a),ci(He(n.b,n.a)))}}function Dy(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Cd(t,e,n);return{wall:r,s:Js(He(o,r.a),ci(He(r.b,r.a)))}}return null}var to=Math.PI/180;function Yn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function Fn(i){let t=Yn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*to),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*to);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=Ud(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}var Uy=.14;function Fd(i,t,e){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let s of i.settings.roof.sections??[]){if(s.open)continue;let o=Math.min(s.x0,s.x1),a=Math.max(s.x0,s.x1),l=Math.min(s.z0,s.z1),c=Math.max(s.z0,s.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||s.points&&s.points.length>=3&&!ue([t,e],s.points))continue;let[u,f]=Ni(s,t,e),h=s.shape==="flat"||s.shape==="parapet",d=Math.max(0,s.overhang??r),b=((h?null:no(Zr(s,{u0:d,u1:d,a:d,b:d}),u,f))??Fn(s).y(f))-Uy;n=n===null?b:Math.max(n,b)}return n}function eo(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=$s(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=Ld([a[0]-o[0],a[1]-o[1]]),u=Ld([l[0]-a[0],l[1]-a[1]]),f=[c[1]*n,-c[0]*n],h=[u[1]*n,-u[0]*n],d=f[0]+h[0],g=f[1]+h[1],b=Math.hypot(d,g);if(b<1e-6){r.push([a[0]+f[0]*t,a[1]+f[1]*t]);continue}let x=(d*f[0]+g*f[1])/b,p=Math.min(4,1/Math.max(.25,x));r.push([a[0]+d/b*t*p,a[1]+g/b*t*p])}return r}function Ld(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Dd(i,t){if(i.points&&i.points.length>=3)return eo(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}var js=Math.tan(30*to);function Ud(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+js*(i-o+s))/(2*js))),u=a+(c-s)*js;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:h=>h<=s?t+h*n:h<=c?a+(h-s)*js:h<=i-o?l+(i-o-h)*js:e+(i-h)*r}}function Zr(i,t){let e=Yn(i),n=Fn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(y,M)=>[y,M,n.y(M)],u=c(a,-s),f=c(l,-s),h=c(l,r+o),d=c(a,r+o),g=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*to),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*to);if(i.shape==="pent"){let y=[u,f,h,d];return{faces:[y],rim:y,ridges:[[h,d]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let y=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,r-n.vr)||r/2),M=[e.u0+y,n.vr,n.rh],v=[e.u1-y,n.vr,n.rh],S=i.shape==="pyramid"?[[u,f,M],[f,h,M],[h,d,M],[d,u,M]]:[[u,f,v,M],[M,v,h,d],[d,u,M],[f,h,v]],w=i.shape==="pyramid"?[[u,M],[d,M],[f,M],[h,M]]:[[M,v],[u,M],[d,M],[f,v],[h,v]];return{faces:S,rim:[u,f,h,d],ridges:w,gable:null}}if(i.shape==="halfhip"){let y=Math.min(n.y(0),n.y(r)),M=y+(n.rh-y)*.55,v=g>1e-6?Math.min(n.vr,(M-i.eave_a)/g):n.vr,S=b>1e-6?Math.max(n.vr,r-(M-i.eave_b)/b):n.vr,w=Math.min((e.u1-e.u0)/2-.1,(n.rh-M)/Math.max(.2,g)),A=[e.u0+w,n.vr,n.rh],_=[e.u1-w,n.vr,n.rh],T=[a,v,M],C=[a,S,M],I=[l,v,M],L=[l,S,M];return{faces:[[u,f,I,_,A,T],[A,_,L,h,d,C],[C,T,A],[I,L,_]],rim:[u,f,I,L,h,d,C,T],ridges:[[A,_],[T,A],[C,A],[I,_],[L,_]],gable:[[0,n.y(0)],[v,M],[S,M],[r,n.y(r)]]}}if(i.shape==="mansard"){let y=Ud(r,i.eave_a,i.eave_b,g,b),M=[a,y.vla,y.yla],v=[l,y.vla,y.yla],S=[a,r-y.vlb,y.ylb],w=[l,r-y.vlb,y.ylb],A=[a,y.vr,y.rh],_=[l,y.vr,y.rh];return{faces:[[u,f,v,M],[M,v,_,A],[A,_,w,S],[S,w,h,d]],rim:[u,f,v,_,w,h,d,S,A,M],ridges:[[A,_],[M,v],[S,w]],gable:[[0,n.y(0)],[y.vla,y.yla],[y.vr,y.rh],[r-y.vlb,y.ylb],[r,n.y(r)]]}}let x=[a,n.vr,n.rh],p=[l,n.vr,n.rh];return{faces:[[u,f,p,x],[x,p,h,d]],rim:[u,f,p,h,d,x],ridges:[[x,p]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function no(i,t,e){let n=null;for(let r of i.faces){if(!ue([t,e],r.map(y=>[y[0],y[1]])))continue;let[s,o]=r,a=r.slice(2).find(y=>Math.abs((o[0]-s[0])*(y[1]-s[1])-(o[1]-s[1])*(y[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],u=o[1]-s[1],f=a[0]-s[0],h=a[2]-s[2],d=a[1]-s[1],g=c*d-u*h,b=u*f-l*d,x=l*h-c*f;if(Math.abs(b)<1e-9)continue;let p=s[2]-(g*(t-s[0])+x*(e-s[1]))/b;n=n===null?p:Math.min(n,p)}return n}function Ni(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function Ny(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Su(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=Ny(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function Tu(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Yn(t),n=Fn(t).rh,r=Zr(i,{u0:0,u1:0,a:0,b:0}),s=Fn(i),o=g=>{let[b,x]=e.at(g,e.w/2),[p,y]=Ni(i,b,x);return no(r,p,y)??s.y(y)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,u=a?1:-1,f=Math.abs(c-l),h=c;for(let g=.5;g<f;g+=.05)if(o(l+u*g)>=n-.02){h=l+u*g;break}if(Math.abs(h-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=h:d.x0=h:c===e.u1?d.z1=h:d.z0=h,d}function Nd(i,t){let e=Tu(i,t),n=Yn(e),r=Fn(e),s=Zr(i,{u0:0,u1:0,a:0,b:0}),o=Fn(i),a=h=>{let[d,g]=n.at(h,n.w/2),[b,x]=Ni(i,d,g);return no(s,b,x)??o.y(x)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],f=Math.max(1,Math.ceil(c/.15));for(let h=0;h<f;h++){let d=c*h/f,g=c*(h+1)/f,b=l?n.u0+d:n.u1-d,x=l?n.u0+g:n.u1-g,p=a(x),y=1/0,M=-1/0;for(let _=0;_<=40;_++){let T=n.w*_/40;r.y(T)>p+.02&&(y=Math.min(y,T),M=Math.max(M,T))}if(!(M-y>.05))continue;let v=n.at(b,y),S=n.at(x,M),w=Ni(i,v[0],v[1]),A=Ni(i,S[0],S[1]);u.push({u0:Math.min(w[0],A[0]),u1:Math.max(w[0],A[0]),v0:Math.min(w[1],A[1]),v1:Math.max(w[1],A[1])})}return u}function $r(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),u=r(l);if(c&&s.push(a),c!==u){let f=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*f,a[1]+(l[1]-a[1])*f,a[2]+(l[2]-a[2])*f])}}return s}function Od(i,t){let e=$r(i,0,t.u0,!0),n=$r(i,0,t.u1,!1),r=$r($r(i,0,t.u0,!1),0,t.u1,!0),s=$r(r,1,t.v0,!0),o=$r(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs($s(a.map(l=>[l[0],l[1]])))>1e-6)}function Ml(i,t,e){let n=Yn(t),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(u=>r.some(f=>ue(u,f.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function Bd(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}var Dn=1e-4;function wu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function zd(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>Dn&&a<1-Dn&&l>-Dn&&l<1+Dn?a:null}function Eu(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=Dn||o>=1-Dn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<Dn?o:null}function Oy(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(zd(n,r,o,a)!==null||Eu(o,n,r)!==null||Eu(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Dn)return!0}}return ue(i[0],t)||ue(t[0],i)}function By(i){let t=i.map(s=>wu(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],u=[0,1];t.forEach((f,h)=>{if(h!==o)for(let d=0;d<f.length;d++){let g=f[d],b=f[(d+1)%f.length],x=zd(l,c,g,b)??Eu(g,l,c);x!==null&&u.push(x)}}),u.sort((f,h)=>f-h);for(let f=1;f<u.length;f++){if(u[f]-u[f-1]<Dn)continue;let h=[l[0]+(c[0]-l[0])*u[f-1],l[1]+(c[1]-l[1])*u[f-1]],d=[l[0]+(c[0]-l[0])*u[f],l[1]+(c[1]-l[1])*u[f]],g=Math.hypot(d[0]-h[0],d[1]-h[1]),b=[(h[0]+d[0])/2+(d[1]-h[1])/g*.001,(h[1]+d[1])/2-(d[0]-h[0])/g*.001];t.some((x,p)=>p!==o&&ue(b,x))||e.some(([x,p])=>Math.hypot(x[0]-h[0],x[1]-h[1])<Dn&&Math.hypot(p[0]-d[0],p[1]-d[1])<Dn)||e.push([h,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([u],f)=>!r.has(f)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&wu(o)>1e-6&&n.push(o)}return n}function Au(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&Oy(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:By(s))}function zy(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function kd(i,t,e=.03){return i.every(n=>ue(n,t)||t.some((r,s)=>zy(n,r,t[(s+1)%t.length])<=e))}function Vd(i,t){let e=wu(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}var sr=Ht(3662079,.95),Ru=Ht(3662079,1),Oi=Ht(5995775,.34),Gd=Ht(5995775,.22),Sl=[-.55,.83],Xt=-1,Tl=16,or=32,Hd=48,Cu=64,ce=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=Xt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Qt;return t.setAttribute("position",new Gt(this.p,3)),t.setAttribute("color",new Gt(this.c,3)),t.setAttribute("fold",new Gt(this.f,1)),this.uv&&t.setAttribute("uv",new Gt(this.uv,2)),this.tile&&t.setAttribute("tile",new Gt(this.tile,2)),t.computeBoundingSphere(),t}},Ve=class{p=[];c=[];f=[];seg(t,e,n=sr,r=Xt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Xt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Xt),this.seg(c,a,n,s)}geometry(){let t=new Qt;return t.setAttribute("position",new Gt(this.p,3)),t.setAttribute("color",new Gt(this.c,3)),t.setAttribute("fold",new Gt(this.f,1)),t}};function Wd(i,t,e,n){let s=i.uv?2:0,o=(f,h)=>{let d=f*3+h;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(f,h,d)=>({p:f.p.map((g,b)=>g+(h.p[b]-g)*d),c:f.c.map((g,b)=>g+(h.c[b]-g)*d),uv:f.uv&&h.uv?f.uv.map((g,b)=>g+(h.uv[b]-g)*d):null,tile:f.tile}),l=(f,h,d)=>{for(let g=0;g<3;g++){let b=f*3+g;for(let x=0;x<3;x++)i.p[b*3+x]=h[g].p[x],i.c[b*3+x]=h[g].c[x];if(i.uv&&h[g].uv)for(let x=0;x<s;x++)i.uv[b*2+x]=h[g].uv[x];if(i.tile&&h[g].tile)for(let x=0;x<2;x++)i.tile[b*2+x]=h[g].tile[x];i.f[b]=d}},c=(f,h)=>{let d=i.p.length/9;for(let g of f)i.p.push(...g.p),i.c.push(...g.c),i.f.push(h),i.uv?.push(...g.uv??[.5,.5]),i.tile?.push(...g.tile??[0,1]);return d},u=i.p.length/9;for(let f=t;f<u;f++){let h=[o(f,0),o(f,1),o(f,2)],d=h.map(_=>_.p[1]>e+1e-6),g=h.map(_=>_.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!g.some(Boolean)){for(let _=0;_<3;_++)i.f[f*3+_]=n;continue}let b=i.f[f*3],x=(_,T)=>a(_,T,(e-_.p[1])/(T.p[1]-_.p[1])),p=d.filter(Boolean).length,y=p===1?d.indexOf(!0):d.indexOf(!1),M=h[y],v=h[(y+1)%3],S=h[(y+2)%3],w=x(M,v),A=x(S,M);p===1?(l(f,[M,w,A],n),c([w,v,S],b),c([w,S,A],b)):(l(f,[M,w,A],b),c([w,v,S],n),c([w,S,A],n))}}function Xd(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let u=(e-l[1])/(c[1]-l[1]),f=[l[0]+(c[0]-l[0])*u,e,l[2]+(c[2]-l[2])*u];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=f[d];let h=i.c.slice(s*6,s*6+3);i.p.push(...f,...c),i.c.push(...h,...h),i.f.push(n,n)}}var ie=Math.PI/180;function Ht(i,t){let e=new at(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function ky(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function Kr(i,t=[]){let e=i.map(([n,r])=>new Jt(n,r));return Ts.triangulateShape(e,t.map(n=>n.map(([r,s])=>new Jt(r,s))))}function Yd(i,t,e,n,r,s,o){let a=new at(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let g=t[d],b=t[(d+1)%4],x=e[d],p=e[(d+1)%4],y=b[0]-g[0],M=b[1]-g[1],v=Math.hypot(y,M);if(v<1e-6)continue;let w=.8+.28*((M/v*Sl[0]-y/v*Sl[1]+1)/2),A=(x[0]+p[0]-g[0]-b[0])/2*(-M/v)+(x[1]+p[1]-g[1]-b[1])/2*(y/v),_=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),T=Ht(s,l(n)*w).lerp(a,_),C=Ht(s,l(r)*w).lerp(a,_);i.tri([g[0],n,g[1]],[x[0],r,x[1]],[p[0],r,p[1]],T,C,C),i.tri([g[0],n,g[1]],[p[0],r,p[1]],[b[0],n,b[1]],T,C,T)}let[c,u,f,h]=e;Math.hypot(f[0]-c[0],f[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[h[0],r,h[1]],[f[0],r,f[1]],a))}function qd(i,t,e,n,r,s,o,a,l,c){let u=new at(l),f=[];for(let d=0;d<c;d++){let g=d/c*Math.PI*2;f.push({y:s+Math.cos(g)*o,s:r+Math.sin(g)*o})}let h=(d,g)=>{let b=t(d,f[g%c].s);return[b[0],f[g%c].y,b[1]]};for(let d=0;d<c;d++){let g=(d+.5)/c*Math.PI*2,b=Ht(a,.62+.4*Math.max(0,Math.cos(g)));i.tri(h(e,d),h(n,d+1),h(n,d),b),i.tri(h(e,d),h(e,d+1),h(n,d+1),b)}for(let d of[e,n]){let g=t(d,r),b=[g[0],s,g[1]];for(let x=0;x<c;x++)i.tri(b,h(d,x),h(d,x+1),u)}}function me(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:g=>Math.max(e+.002,n(g[0],g[1])),l=o.aoFrom??e,c=o.fold??Xt,u=g=>.5+.5*Math.min(1,Math.max(0,(g-l)/1.6)),f=(o.holes??[]).map(g=>ky(g)>0?[...g].reverse():g),h=f.length?[...t,...f.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:Kr(t,f);if(o.topFace!==!1){let g=new at(s);for(let[b,x,p]of d){let y=h[b],M=h[x],v=h[p];i.tri([y[0],a(y),y[1]],[v[0],a(v),v[1]],[M[0],a(M),M[1]],g,g,g,void 0,o.topFold??c)}}if(o.bottom){let g=Ht(r,.55);for(let[b,x,p]of d){let y=h[b],M=h[x],v=h[p];i.tri([y[0],e,y[1]],[M[0],e,M[1]],[v[0],e,v[1]],g,g,g,void 0,c)}}for(let g of[t,...f])for(let b=0;b<g.length;b++){let x=g[b],p=g[(b+1)%g.length],y=p[0]-x[0],M=p[1]-x[1],v=Math.hypot(y,M);if(v<1e-6)continue;let w=.8+.28*((M/v*Sl[0]-y/v*Sl[1]+1)/2),A=a(x),_=a(p),T=Ht(r,u(e)*w),C=Ht(r,u(A)*w),I=Ht(r,u(_)*w);i.tri([x[0],e,x[1]],[x[0],A,x[1]],[p[0],_,p[1]],T,C,I,void 0,c),i.tri([x[0],e,x[1]],[p[0],_,p[1]],[p[0],e,p[1]],T,I,T,void 0,c)}}var m={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},z=Ht(5995775,.3),tt=Ht(5995775,.17),rt=Ht(3662079,.45),qn=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Pu(n)}rotated(t,e,n){let r=n*ie,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let u=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];me(this.buf,Iu(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Iu(l)&&(l.reverse(),c.reverse()),Yd(this.buf,l,c,n,r,s,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,u);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,u),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,u=12,f=null){let h=Math.min(a,s-r)/2;if(h<1e-4||o<1e-4)return;let d=(r+s)/2,g=t==="x"?e:n,b=t==="x"?n:e,x=(y,M)=>t==="x"?this.tf(y,M):this.tf(M,y),p=this.buf.p.length;if(qd(this.buf,x,g-o/2,g+o/2,b,d,h,l,c,u),this.mirrored&&ar(this.buf,p),f)for(let y of[g-o/2,g+o/2])for(let M=0;M<u;M++){let v=M/u*Math.PI*2,S=(M+1)/u*Math.PI*2;this.line(x(y,b+Math.sin(v)*h),x(y,b+Math.sin(S)*h),d+Math.cos(v)*h,d+Math.cos(S)*h,f)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let u=[];for(let f=0;f<l;f++){let h=f/l*Math.PI*2;u.push(this.tf(t+Math.cos(h)*n,e+Math.sin(h)*n))}if(me(this.buf,Iu(u),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let f=0;f<l;f++)this.line(u[f],u[(f+1)%l],s,s,c)}tubeYZ(t,e,n,r,s=8,o=null){if(e.length<2||n<1e-4)return;let a=e.map(([f,h],d)=>{let g=e[Math.max(0,d-1)],b=e[Math.min(e.length-1,d+1)],x=b[0]-g[0],p=b[1]-g[1],y=Math.hypot(x,p)||1;return Array.from({length:s},(M,v)=>{let S=v/s*Math.PI*2,w=this.tf(t+Math.cos(S)*n,h+x/y*Math.sin(S)*n);return[w[0],f-p/y*Math.sin(S)*n,w[1]]})}),l=this.buf.p.length,c=new at(r);for(let f=0;f<a.length-1;f++)for(let h=0;h<s;h++){let d=(h+1)%s;this.buf.tri(a[f][h],a[f+1][h],a[f+1][d],c),this.buf.tri(a[f][h],a[f+1][d],a[f][d],c)}let u=(f,h)=>{let d=this.tf(t,e[f][1]),g=[d[0],e[f][0],d[1]];for(let b=0;b<s;b++){let x=(b+1)%s;this.buf.tri(g,a[f][h?x:b],a[f][h?b:x],c)}};if(u(0,!0),u(e.length-1,!1),this.mirrored&&ar(this.buf,l),o)for(let f=0;f<e.length-1;f++)this.seg(t,e[f][0],e[f][1],t,e[f+1][0],e[f+1][1],o)}seg(t,e,n,r,s,o,a=z){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,Xt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s];this.line(o,t[(s+1)%4],n,n,r),this.line(o,o,e,n,r)}}};function Pu(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Iu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function ar(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o;[n[a],n[l]]=[n[l],n[a]]}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function rn(i,t,e,n,r,s,o=m.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let u of[-1,1])for(let f of[-1,1]){let h=u*l,d=f*c;a?i.loft([h-r*.3,h+r*.3,d-r*.3,d+r*.3],[h-r/2,h+r/2,d-r/2,d+r/2],0,n,o):i.box(h-r/2,h+r/2,0,n,d-r/2,d+r/2,o)}}function lr(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let u=1;u<o;u++){let f=t+c*u;i.seg(f,n,s,f,r,s,tt)}for(let u=0;u<o;u++){let f=t+c*(u+.5),h=a??r-.08;if(l)i.seg(f-Math.min(.1,c/4),h,s+.012,f+Math.min(.1,c/4),h,s+.012,rt);else{let d=o>1?f+(u%2?-c/2+.06:c/2-.06):f+c/2-.06;i.seg(d,h-.08,s+.012,d,h+.08,s+.012,rt)}}}function mn(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,m.body,m.bodyTop,z),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,m.dark),lr(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function $n(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,rt)}}var wl=.12,El=1.9;function Vy(i,t,e,n){let r=wl;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,m.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,m.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,m.white,m.whiteTop,z);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,tt)}}function Gy(i,t,e,n){let r=El,s=e/2;i.box(-t*.34,-t*.27,r+n*.2,r+n*.75,-e/2-.015,-e/2+.025,m.metal),i.box(t*.27,t*.34,r+n*.2,r+n*.75,-e/2-.015,-e/2+.025,m.metal),i.box(-t/2,t/2,r,r+n,-e/2,s,m.white,m.whiteTop,z),i.seg(-t*.42,r+n*.82,s+.003,t*.42,r+n*.82,s+.003,tt);let o=r+n*.08,a=r+n*.27;i.box(-t*.43,t*.43,o,a,s-.018,s+.006,m.dark,m.dark,tt),i.seg(-t*.42,o+n*.04,s+.009,t*.42,a-n*.025,s+.009,rt);for(let l=1;l<8;l++){let c=-t*.4+t*.8*(l/8);i.seg(c,o+n*.025,s+.011,c+t*.018,a-n*.025,s+.011,tt)}i.seg(t*.37,r+n*.67,s+.006,t*.4,r+n*.67,s+.006,rt)}function Hy(i,t,e,n){let r=Math.min(.045,n*.12),s=Math.min(t*.42,n*.48),o=r+n*.13,a=o+s;for(let d of[-t*.32,t*.32])i.box(d-t*.055,d+t*.055,0,r,-e*.34,e*.3,m.dark);i.box(-t*.43,t*.43,r,r+n*.06,-e*.4,e*.36,m.metal,m.metal,z),i.lyingCyl("z",0,-e*.13,o,a,e*.46,s,m.body,m.bodyTop,14,z),i.lyingCyl("z",0,-e*.39,o+s*.08,a-s*.08,e*.1,s*.84,m.dark,m.metal,12,tt);for(let d=-2;d<=2;d++){let g=-e*.23+d*e*.055;i.box(-s*.54,s*.54,o+s*.43,o+s*.57,g-e*.012,g+e*.012,m.metal,m.metal)}let l=Math.min(t*.55,n*.65),c=r+n*.08;i.lyingCyl("z",0,e*.17,c,c+l,e*.22,l,m.accent,m.bodyTop,16,z),i.lyingCyl("z",0,e*.39,c+l*.34,c+l*.66,e*.22,l*.32,m.metal,m.dark,12,rt);let u=t*.16,f=e*.13,h=Math.min(t,e)*.075;i.cyl(u,f,h*1.35,c+l*.72,c+l*.82,m.accent,m.accent,12,z),i.cyl(u,f,h,c+l*.82,n,m.metal,m.metal,12,rt),i.box(-t*.11,t*.11,c+l*.58,c+l*.72,e*.285,e*.3,m.dark,m.dark,rt)}function $d(i,t,e,n){let r=n*.18,s=Math.min(t,e);i.cyl(0,0,s*.105,r,n*.34,m.dark,m.bodyTop,18,rt),i.cyl(0,0,s*.035,n*.3,n*.76,m.metal,m.bodyTop,10,z),i.cyl(0,0,s*.075,n*.74,n*.94,m.body,m.bodyTop,16,z),i.cyl(0,0,s*.095,n*.92,n,m.body,m.bodyTop,16,tt)}function Wy(i,t,e,n){i.loft([-t*.4,t*.4,-e*.33,e*.33],[-t*.34,t*.34,-e*.28,e*.28],0,n*.045,m.body,m.metal,z),i.cyl(0,0,Math.min(t,e)*.055,n*.04,n*.62,m.metal,m.metal,10),i.box(-t*.13,t*.13,n*.06,n*.14,-e*.2,e*.2,m.body,m.bodyTop,tt);for(let a of[-t*.07,0,t*.07])i.cyl(a,e*.12,t*.018,n*.14,n*.155,m.accent,m.accent,8,rt);let r=n*.78,s=Math.min(t,n*.42)*.46,o=e*.075;i.box(-t*.085,t*.085,n*.58,r-s*.18,-e*.1,e*.015,m.body,m.bodyTop,z),i.lyingCyl("z",0,-e*.11,r-s*.3,r+s*.3,e*.24,s*.6,m.body,m.bodyTop,16,z);for(let a of[-o,o]){for(let l=0;l<16;l++){let c=l/16*Math.PI*2;i.seg(Math.cos(c)*s*.18,r+Math.sin(c)*s*.18,a,Math.cos(c)*s,r+Math.sin(c)*s,a,tt)}$n(i,0,r,s,a,32),$n(i,0,r,s*.86,a,32),$n(i,0,r,s*.18,a,18)}for(let a of[0,Math.PI/2,Math.PI,Math.PI*3/2]){let l=Math.cos(a)*s,c=r+Math.sin(a)*s;i.seg(l,c,-o,l,c,o,z)}}function Xy(i,t,e,n){let r=n*.5,s=Math.min(t,n)*.46,o=e*.16;i.box(-t*.15,t*.15,n*.28,n*.72,-e/2,-e*.4,m.body,m.bodyTop,z),i.box(-t*.06,t*.06,r-n*.06,r+n*.06,-e*.42,-e*.18,m.metal,m.metal,z),i.lyingCyl("z",0,-e*.12,r-s*.3,r+s*.3,e*.24,s*.6,m.body,m.bodyTop,16,z);for(let a of[-o,o]){for(let l=0;l<16;l++){let c=l/16*Math.PI*2;i.seg(Math.cos(c)*s*.18,r+Math.sin(c)*s*.18,a,Math.cos(c)*s,r+Math.sin(c)*s,a,tt)}$n(i,0,r,s,a,32),$n(i,0,r,s*.86,a,32),$n(i,0,r,s*.18,a,18)}for(let a of[0,Math.PI/2,Math.PI,Math.PI*3/2]){let l=Math.cos(a)*s,c=r+Math.sin(a)*s;i.seg(l,c,-o,l,c,o,z)}}function io(i,t,e,n,r,s,o=null){if(e==="fan_ceiling"||e==="fan_ceiling_light"){let g=new qn(i,t,(y,M)=>[y,M]),b=Math.min(n,r),x=b*.115,p=o==="3"?3:o==="4"?4:5;for(let y=0;y<p;y++){let M=y/p*360;g.rotated(0,0,M).loft([b*.08,b*.48,-x*.42,x*.42],[b*.105,b*.465,-x*.52,x*.52],0,s*.06,m.fabric,m.fabricTop,z)}g.cyl(0,0,b*.115,-s*.025,s*.07,m.dark,m.bodyTop,18,rt);return}let a=Math.min(n,s*.42)*.46,l=-Math.max(.006,r*.012),c=-l,u=new at(m.bodyTop),f=new at(m.body),h=(g,b)=>[Math.cos(b)*g,Math.sin(b)*g];for(let g=0;g<3;g++){let b=g/3*Math.PI*2,x=[h(a*.14,b-.12),h(a*.46,b-.34),h(a*.84,b-.16),h(a*.72,b+.22),h(a*.24,b+.34)],p=(y,M)=>[y[0],y[1],M];for(let y=1;y<x.length-1;y++)i.tri(p(x[0],c),p(x[y],c),p(x[y+1],c),u),i.tri(p(x[0],l),p(x[y+1],l),p(x[y],l),f);for(let y=0;y<x.length;y++){let M=(y+1)%x.length;i.tri(p(x[y],l),p(x[M],c),p(x[M],l),f),i.tri(p(x[y],l),p(x[y],c),p(x[M],c),f),t.seg(p(x[y],c),p(x[M],c),z,Xt)}}new qn(i,t,(g,b)=>[g,b]).lyingCyl("z",0,0,-a*.14,a*.14,r*.1,a*.28,m.body,m.bodyTop,14,rt)}function Yy(i,t,e,n){let r=Math.min(e*.88,n*.92),s=(n-r)/2;i.lyingCyl("x",0,0,s,s+r,t*.9,r,m.white,m.whiteTop,22,z);for(let o of[-t*.46,t*.46])i.lyingCyl("x",o,0,s+r*.04,s+r*.96,t*.035,r*.92,m.white,m.whiteTop,18,tt);for(let o of[-t*.28,t*.28])i.box(o-.025,o+.025,0,s+r*.25,-e*.42,-e*.28,m.metal,m.metal);for(let[o,a]of[[-t*.2,m.accent],[t*.2,m.fabricTop]])i.cyl(o,e*.05,Math.min(t,e)*.025,0,s+r*.18,a,a,10,tt),i.cyl(o,e*.05,Math.min(t,e)*.04,s+r*.14,s+r*.2,m.metal,m.metal,10);i.box(t*.18,t*.4,s+r*.38,s+r*.68,e*.43,e*.48,m.body,m.glass,rt),i.seg(t*.24,s+r*.53,e*.485,t*.35,s+r*.53,e*.485,rt)}function qy(i,t,e,n){let r=Math.min(.035,t*.025),s=t/2-r;for(let o of[-1,1]){i.box(o*s-r,o*s+r,0,n,-e/2,-e/2+r*2,m.metal,m.metal,z),i.box(o*s-r,o*s+r,0,n,e/2-r*2,e/2,m.metal,m.metal,z);for(let a of[-e/2+r,e/2-r])i.box(o*s-r*2.2,o*s+r*2.2,0,r*1.2,a-r*2.5,a+r*2.5,m.dark,m.dark)}for(let o=0;o<7;o++){let a=-e/2+r+(e-2*r)*o/6;i.box(-t/2+r,t/2-r,n-r*2,n,a-r/2,a+r/2,m.metal,m.metal,tt)}i.seg(-t/2,.05,-e/2,t/2,n-.05,-e/2,tt),i.seg(t/2,.05,-e/2,-t/2,n-.05,-e/2,tt),i.seg(-t/2,.05,e/2,t/2,n-.05,e/2,tt),i.seg(t/2,.05,e/2,-t/2,n-.05,e/2,tt)}var Zd={air_conditioner:({b:i,w:t,d:e,h:n})=>(Gy(i,t,e,n),!1),drying_rack:({b:i,w:t,d:e,h:n})=>(qy(i,t,e,n),.5),fan_ceiling:({b:i,w:t,d:e,h:n})=>($d(i,t,e,n),!1),fan_ceiling_light:({b:i,w:t,d:e,h:n})=>($d(i,t,e,n),!1),fan_floor:({b:i,w:t,d:e,h:n})=>(Wy(i,t,e,n),.5),fan_wall:({b:i,w:t,d:e,h:n})=>(Xy(i,t,e,n),!1),radiator:({b:i,w:t,d:e,h:n})=>(Vy(i,t,e,n),!1),water_heater:({b:i,w:t,d:e,h:n})=>(Yy(i,t,e,n),!1),water_pump:({b:i,w:t,d:e,h:n})=>(Hy(i,t,e,n),.5)};function $y(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let u=0;u<r;u++){let f=e/2-o*u,h=f-o,d=s*(u+1);i.box(-t/2,t/2,0,d,h,f,m.wood,m.woodTop),i.seg(-t/2,d,f,t/2,d,f,z)}i.seg(-t/2,0,e/2,-t/2,s,e/2,z);for(let u of[-t/2,t/2])i.seg(u,s,e/2,u,n,-e/2+o,tt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),rt);for(let u=0;u<c;u+=3){let f=e/2-o*(u+.5),h=s*(u+1);i.seg(l,h,f,l,h+a,f,tt)}}function Zy(i,t,e,n){let r=Math.max(6,Math.round(n/.18)),s=Math.floor(r/2),o=r-s,a=n/r,l=a*s,c=Math.min(.16,t*.12),u=(t-c)/2,f=Math.min(e*.34,Math.max(e*.22,u)),h=-e/2+f,d=e-f,g=d/s,b=d/o,x=-t/2,p=-c/2,y=c/2,M=t/2;for(let P=0;P<s;P++){let E=e/2-g*P,D=E-g,U=a*(P+1);i.box(x,p,0,U,D,E,m.white,m.whiteTop),i.seg(x,U,E,p,U,E,z)}i.box(-t/2,t/2,0,l,-e/2,h,m.white,m.whiteTop,z);for(let P=0;P<o;P++){let E=h+b*P,D=E+b,U=l+a*(P+1);i.box(y,M,0,U,E,D,m.white,m.whiteTop),i.seg(y,U,E,M,U,E,z)}let v=Math.min(.9,Math.max(.55,n*.32)),S=[x+.03,p-.03],w=[y+.03,M-.03];for(let P of S){i.seg(P,a+v,e/2-g/2,P,l+v,h,rt);for(let E=0;E<s;E+=3){let D=e/2-g*(E+.5),U=a*(E+1);i.seg(P,U,D,P,U+v,D,tt)}}let A=Math.max(1,o-3);for(let P of w){i.seg(P,l+v,h,P,l+a*A+v,h+b*(A-.5),rt);for(let E=0;E<A;E+=3){let D=h+b*(E+.5),U=l+a*(E+1);i.seg(P,U,D,P,U+v,D,tt)}}let _=S[0],T=S[1],C=w[0],I=w[1],L=-e/2+.03;i.seg(T,l+v,h,C,l+v,h,rt),i.seg(_,l+v,h,_,l+v,L,rt),i.seg(_,l+v,L,I,l+v,L,rt),i.seg(I,l+v,L,I,l+v,h,rt);for(let[P,E]of[[T,h],[C,h],[_,h],[_,L],[I,L],[I,h]])i.seg(P,l,E,P,l+v,E,tt)}function Ky(i,t,e,n){let r=Math.min(t*.58,e*.22,n*.42),s=t*.66,o=e*.34,a=-e*.34;for(let l of[a,o])i.lyingCyl("x",0,l,0,r,s,r,m.dark,m.metal,14,z),i.lyingCyl("x",0,l,r*.16,r*.84,s+.012,r*.46,m.metal,m.metal,12,tt);i.loft([-t*.3,t*.3,a,e*.12],[-t*.2,t*.2,-e*.18,e*.06],r*.45,n*.58,m.body,m.bodyTop,z),i.box(-t*.3,t*.3,r*.37,r*.44,-e*.08,e*.22,m.dark,m.metal,tt),i.lyingCyl("z",t*.24,a-e*.04,r*.2,r*.47,e*.4,r*.25,m.metal,m.dark,10,tt),i.pad(-t*.3,t*.3,n*.52,n*.62,-e*.25,e*.05,m.dark,m.fabricTop,.025,z),i.seg(-t*.18,n*.48,e*.02,-t*.08,n*.86,o,z),i.seg(t*.18,n*.48,e*.02,t*.08,n*.86,o,z),i.seg(-t*.19,r*.63,a,-t*.21,n*.54,-e*.12,tt),i.seg(t*.19,r*.63,a,t*.21,n*.54,-e*.12,tt),i.seg(-t*.36,n*.9,o,t*.36,n*.9,o,rt),i.box(-t*.23,t*.23,n*.72,n*.98,o-e*.07,o+e*.07,m.body,m.bodyTop,z),i.cyl(0,o+e*.075,Math.min(t,e)*.07,n*.82,n*.94,m.white,m.accent,12,rt);for(let l of[-1,1])i.seg(l*t*.22,n*.9,o,l*t*.39,n,o-e*.04,z),i.cyl(l*t*.39,o-e*.04,t*.045,n*.97,n,m.glass,m.metal,10,rt);i.seg(-t*.31,n*.66,-e*.31,t*.31,n*.66,-e*.31,z)}function Jy(i,t,e,n){let r=Math.min(.07,t*.035);for(let a of[-t/2+r,t/2-r])i.box(a-r/2,a+r/2,0,n,-r,r,m.metal,m.metal,z),i.box(a-e*.25,a+e*.25,0,r,-e*.36,e*.36,m.metal,m.metal,z);let s=-t/2+r,o=t/2-r;i.loft([s,-t*.14,-e*.34,e*.34],[s+.08,-t*.14,-e*.3,e*.3],n*.36,n*.42,m.fabric,m.fabricTop,tt),i.loft([-t*.14,t*.14,-e*.34,e*.34],[-t*.13,t*.13,-e*.3,e*.3],n*.25,n*.31,m.fabric,m.fabricTop,tt),i.loft([t*.14,o,-e*.34,e*.34],[t*.14,o-.08,-e*.3,e*.3],n*.36,n*.42,m.fabric,m.fabricTop,tt),i.seg(s,n*.8,0,-t*.14,n*.42,0,z),i.seg(t*.14,n*.42,0,o,n*.8,0,z)}function Qy(i,t,e,n){let r=Math.min(t,e);i.cyl(0,0,r*.08,0,n-.07,m.metal,m.metal,12),i.cyl(0,0,r*.22,n-.07,n,m.body,m.bodyTop,16,z);for(let[s,o]of[[0,-.38],[.38,0],[0,.38],[-.38,0]])i.cyl(s*t,o*e,r*.065,0,n*.52,m.metal,m.metal,10),i.cyl(s*t,o*e,r*.105,n*.52,n*.61,m.body,m.bodyTop,12,tt)}function jy(i,t,e,n){let r=Math.min(t,e)*.46;i.cyl(0,0,r*.84,0,n*.08,m.metal,m.metal,12,z),i.cyl(0,0,r,n*.08,n*.92,m.metal,m.whiteTop,20,z);for(let s of[n*.28,n*.5,n*.72])for(let o=0;o<24;o++){let a=o/24*Math.PI*2,l=(o+1)/24*Math.PI*2;i.seg(Math.cos(a)*r,s,Math.sin(a)*r,Math.cos(l)*r,s,Math.sin(l)*r,tt)}i.cyl(0,0,r*.18,n*.92,n,m.dark,m.bodyTop,12,tt)}function Kd(i,t,e,n,r){let s=Math.min(.12,t*.05);for(let l of[-t/2+s/2,t/2-s/2])i.box(l-s/2,l+s/2,0,n,-e/2,e/2,m.body,m.bodyTop,z);let o=r?2:Math.max(3,Math.round(t/.4)),a=t-2*s;for(let l=0;l<o;l++){let c=-a/2+a*l/o+s*.25,u=-a/2+a*(l+1)/o-s*.25;i.box(c,u,n*.08,n*.92,-e*.18,e*.18,r?m.metal:m.wood,r?m.metal:m.woodTop,tt),r&&i.seg(l===0?u:c,n*.46,e*.2,l===0?u-.08:c+.08,n*.46,e*.2,rt)}if(!r)for(let l of[n*.22,n*.76])i.box(-a/2,a/2,l-.025,l+.025,-e/2,e/2,m.wood,m.woodTop,z)}var Jd={fence:({b:i,w:t,d:e,h:n})=>(Kd(i,t,e,n,!1),.5),gate:({b:i,w:t,d:e,h:n})=>(Kd(i,t,e,n,!0),.5),hammock:({b:i,w:t,d:e,h:n})=>(Jy(i,t,e,n),.5),motorbike:({b:i,w:t,d:e,h:n})=>(Ky(i,t,e,n),.5),stairs:({b:i,w:t,d:e,h:n})=>($y(i,t,e,n),.5),stairs_landing:({b:i,w:t,d:e,h:n})=>(Zy(i,t,e,n),.5),stone_table_set:({b:i,w:t,d:e,h:n})=>(Qy(i,t,e,n),.5),water_tank:({b:i,w:t,d:e,h:n})=>(jy(i,t,e,n),.5)};function tv(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,m.dark,m.body,z),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,rt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,m.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,m.white,m.whiteTop,z),$n(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,rt);for(let a of[-1,1])$n(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,m.white,m.whiteTop,z),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,m.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,rt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,tt)}function ev(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,m.dark,m.body,z),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,m.dark,m.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,rt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,tt)}function nv(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,m.dark,m.body,z);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(u)*s,o+Math.sin(u)*s,e/2+.003,rt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,m.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,m.dark,m.body)}function iv(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,m.white,m.whiteTop,z),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,tt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,tt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,m.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,m.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,rt)}function rv(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,m.white,m.whiteTop,z),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,rt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,tt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,m.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,m.dark,m.body,z),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,rt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,m.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,m.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,m.white,m.whiteTop,z);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,rt)}}var Qd={grid_point:({b:i,w:t,d:e,h:n})=>(ev(i,t,e,n),.5),home_battery:({b:i,w:t,d:e,h:n,variant:r})=>(rv(i,t,e,n,r),r==="wall"?!1:.5),inverter:({b:i,w:t,d:e,h:n,variant:r})=>(tv(i,t,e,n,r),!1),meter:({b:i,w:t,d:e,h:n})=>(iv(i,t,e,n),!1),wallbox:({b:i,w:t,d:e,h:n})=>(nv(i,t,e,n),!1)};function Jr(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),u=n*.5,f=Math.min(.24,e*.28);rn(i,t,e,.07,.05,.05,m.wood,!0),i.pad(s,o,.07,u-.08,a+.02,l,m.fabric,m.fabricTop,.04,z),i.loft([s,o,a,a+f],[s+.01,o-.01,a,a+f*.5],u-.08,n,m.fabric,m.fabricTop,z),i.pad(s,s+c,u-.08,n*.72,a+.02,l-.02,m.fabric,m.fabricTop,.04,z),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,m.fabric,m.fabricTop,.04,z);let d=(o-c-(s+c))/r;for(let g=0;g<r;g++){let b=s+c+d*g+.02,x=b+d-.04;i.pad(b,x,u-.08,u+.05,a+f+.02,l-.06,m.cushion,m.cushion,.04),i.loft([b+.01,x-.01,a+f*.55,a+f+.14],[b+.03,x-.03,a+f*.4,a+f*.4+.06],u+.03,n*.93,m.cushion)}}function Lu(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);rn(i,t,e,.08,.06,.03,m.wood,!0),i.box(o,a,.08,l,r+.06,s,m.wood,m.woodTop,z),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,m.white,m.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,m.wood,m.woodTop,z),i.box(o,a,n-.05,n,r,r+.09,m.wood,m.woodTop,tt);let c=l+.2,u=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,s-.01,m.cushion,m.fabricTop,.025,tt),i.lyingCyl("x",0,u+.05,c-.02,c+.09,t-.02,.1,m.cushion,m.fabricTop,8);let f=t>1.2?2:1,h=(t-.2)/f;for(let d=0;d<f;d++){let g=o+.1+h*d,b=r+.12,x=Math.min(.42,e*.2),p=.1;i.loft([g+.03+p,g+h-.03-p,b+p*.5,b+x-p*.5],[g+.03,g+h-.03,b,b+x],c,c+.06,m.whiteTop),i.loft([g+.03,g+h-.03,b,b+x],[g+.03+p,g+h-.03-p,b+p*.5,b+x-p*.5],c+.06,c+.12,m.whiteTop,m.whiteTop,tt)}}function Uu(i,t,e,n){let r=Math.min(.46,n*.52);rn(i,t,e,r-.04,.035,.02,m.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,m.wood,m.woodTop,z),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,m.cushion,m.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,m.wood,m.woodTop,z)}function sv(i,t,e,n){rn(i,t,e,n-.04,.06,.05,m.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,m.wood,m.woodTop,rt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,m.body)}function ov(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,m.wood,m.woodTop,z),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,m.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,m.body,m.bodyTop,z);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,tt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,rt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,m.dark,m.dark,rt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,m.metal)}function jd(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,m.wood,m.woodTop,z),i.box(t/2-.025,t/2,0,n,-e/2,e/2,m.wood,m.woodTop,z),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,m.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,m.wood,m.woodTop,tt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let u=.03+c*7%5*.008,f=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+f,-e/2+.04,e/2-.05,c%3?m.fabric:m.cushion,m.fabricTop),l+=u+.006,c++}}}}function av(i,t,e,n){mn(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,m.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,m.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,m.dark,m.dark,rt)}function tp(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,m.pot,m.pot,10,z),i.cyl(0,0,r*.08,s,n*.55,m.wood,m.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),u=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-s)*.16,m.plant,m.plantTop,8,a===o-1?tt:null)}}function lv(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,m.fabric,m.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,z)}function cv(i,t,e,n){rn(i,t,e,.12,.03,.04,m.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,m.wood,m.woodTop,z),lr(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function uv(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,m.wood,m.woodTop,z),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,m.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,tt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,rt)}}function hv(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,m.wood,m.woodTop,z),lr(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,m.body,m.bodyTop,z),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,m.wood,m.woodTop,z);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,m.metal,m.metal)}}function ep(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,m.wood,m.woodTop,z),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,m.wood,m.woodTop,z),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,m.cushion,m.cushion,tt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,m.wood,m.woodTop,z),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,m.wood,m.woodTop,z),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,m.cushion,m.cushion,tt))}function fv(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,m.metal,m.metal,12),i.cyl(0,0,.025,.02,n-.05,m.metal,m.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,m.metal,m.metal,12,tt),i.cyl(0,0,r,n-.05,n,m.cushion,m.fabricTop,14,z)}function dv(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,m.metal),i.box(-.03,.03,.04,.08,-r,r,m.metal),i.cyl(0,0,.06,.02,.1,m.dark,m.dark,8),i.cyl(0,0,.025,.1,.44,m.metal,m.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,m.fabric,m.cushion,z),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,m.fabric,m.fabricTop,z),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,m.metal)}function pv(i,t,e,n){rn(i,t,e,.08,.04,.05,m.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,m.fabric,m.cushion,z)}function mv(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),m.wood,m.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,m.wood,m.woodTop,z),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,m.white,m.whiteTop,tt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,m.whiteTop,m.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,m.wood,m.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,z);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,tt)}function gv(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,m.metal,m.metal,12),i.cyl(0,0,.05,.03,n-.04,m.wood,m.wood,8),i.cyl(0,0,r,n-.04,n,m.wood,m.woodTop,20,z)}function xv(i,t,e,n){rn(i,t,e,n-.03,.04,.03,m.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,m.wood,m.woodTop,z),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,m.body,m.bodyTop,tt)}function np(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.42,0,.035,m.dark,m.dark,14),i.cyl(0,0,Math.min(.075,r*.18),.03,n-.045,m.metal,m.metal,10),i.cyl(0,0,r,n-.045,n,m.wood,m.woodTop,24,z)}function bv(i,t,e,n){let r=Math.min(.1,Math.min(t,e)*.15);rn(i,t-r,e-r,n-.035,.025,.03,m.metal),i.box(-t/2,t/2,n-.035,n,-e/2,e/2,m.glass,m.glass,rt),i.box(-t/2+r,t/2-r,n*.28,n*.31,-e/2+r,e/2-r,m.glass,m.glass,tt)}function _v(i,t,e,n){let r=[[-t*.22,-e*.12,t*.58,e*.72,n],[t*.22,e*.12,t*.48,e*.62,n*.82]];for(let[s,o,a,l,c]of r){for(let f of[s-a/2+.025,s+a/2-.025])for(let h of[o-l/2+.025,o+l/2-.025])i.box(f-.025,f+.025,0,c-.03,h-.025,h+.025,m.metal);i.box(s-a/2,s+a/2,c-.03,c,o-l/2,o+l/2,m.wood,m.woodTop,z)}}function Al(i,t,e,n,r,s){let o=Math.min(.035,Math.min(t/r,n/s)*.12);for(let a=0;a<=r;a++){let l=-t/2+t*a/r;i.box(l-o/2,l+o/2,0,n,-e/2,e/2,m.wood,m.woodTop,a===0||a===r?z:tt)}for(let a=0;a<=s;a++){let l=n*a/s;i.box(-t/2,t/2,Math.max(0,l-o/2),Math.min(n,l+o/2),-e/2,e/2,m.wood,m.woodTop,a===0||a===s?z:tt)}}function yv(i,t,e,n){i.box(-t/2,t/2,1.35,1.35+n,-e/2,e/2,m.wood,m.woodTop,z);for(let s of[-t*.34,t*.34])i.box(s-.018,s+.018,1.35,1.35+n,-e/2-.012,-e*.12,m.metal,m.metal,tt)}function vv(i,t,e,n){let r=n*.72;rn(i,t,e,r-.06,.055,.04,m.wood,!0),i.box(-t/2,t/2,r-.07,r,-e/2,e/2,m.wood,m.woodTop,z),i.box(-t*.43,t*.43,r-n*.22,r-.07,e/2-.045,e/2,m.wood,m.woodTop,tt),i.cyl(0,e*.06,Math.min(t,e)*.085,r,r+n*.07,m.accent,m.woodTop,12,rt),i.box(-t*.2,t*.2,r+n*.04,n,-e*.35,-e*.29,m.wood,m.woodTop,z)}function Mv(i,t,e,n){let r=n*.7;mn(i,t,e,r,3,r*.58,!0);let s=e/2+.006;for(let o of[-t*.27,0,t*.27])i.seg(o,r*.18,s,o,r*.82,s,tt);i.cyl(0,e*.08,Math.min(t,e)*.08,r,r+n*.06,m.accent,m.woodTop,12,rt),i.box(-t*.19,t*.19,r+n*.04,n*.9,-e*.36,-e*.3,m.wood,m.woodTop,z),i.loft([-t*.28,t*.28,-e*.4,-e*.25],[-t*.22,t*.22,-e*.37,-e*.28],n*.9,n,m.wood,m.woodTop,z)}function Sv(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,m.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,m.dark,m.dark,rt)}function Tv(i,t,e,n){let r=n*.68,s=Math.min(.09,t*.08);for(let o of[-t/2+s,t/2-s])for(let a of[-e/2+s,e/2-s])i.loft([o-s*.36,o+s*.36,a-s*.36,a+s*.36],[o-s/2,o+s/2,a-s/2,a+s/2],0,r-.03,m.wood,m.woodTop);i.box(-t/2,t/2,r-.08,r,-e/2,e/2,m.wood,m.woodTop,z),i.box(-t*.43,t*.43,n*.18,r-.1,e/2-.065,e/2,m.wood,m.woodTop,z);for(let o of[-t*.28,0,t*.28])i.seg(o,n*.23,e/2+.004,o,r-.16,e/2+.004,tt);i.seg(-t*.12,n*.4,e/2+.006,0,n*.52,e/2+.006,rt),i.seg(0,n*.52,e/2+.006,t*.12,n*.4,e/2+.006,rt),i.seg(t*.12,n*.4,e/2+.006,0,n*.28,e/2+.006,rt),i.seg(0,n*.28,e/2+.006,-t*.12,n*.4,e/2+.006,rt),i.cyl(0,e*.06,Math.min(t,e)*.09,r,r+n*.075,m.accent,m.woodTop,14,rt);for(let o of[-t*.035,0,t*.035])i.box(o-.006,o+.006,r+n*.06,r+n*.2,e*.05,e*.065,m.accent);for(let o of[-t*.28,t*.28])i.cyl(o,e*.02,Math.min(t,e)*.035,r,r+n*.035,m.metal,m.metal,10),i.cyl(o,e*.02,Math.min(t,e)*.017,r+n*.035,r+n*.15,m.metal,m.metal,8);i.box(-t*.18,t*.18,r+n*.04,n*.85,-e*.33,-e*.27,m.wood,m.woodTop,rt),i.box(-t*.46,t*.46,n*.875,n*.92,-e*.42,e*.36,m.wood,m.woodTop,z);for(let o of[-t*.4,t*.4])i.box(o-s/2,o+s/2,r,n*.92,-e*.36,-e*.26,m.wood,m.woodTop,z);i.loft([-t/2,t/2,-e/2,e*.42],[-t*.42,t*.42,-e*.42,e*.31],n*.92,n,m.wood,m.woodTop,z)}function wv(i,t,e,n){let r=n*.18;i.box(-t/2,t/2,r,r+n*.14,-e/2,e/2,m.wood,m.woodTop,z),i.box(-t*.43,t*.43,r+n*.14,n*.86,-e/2,-e/2+Math.min(.05,e*.18),m.wood,m.woodTop,z);for(let s of[-t*.36,t*.36])i.box(s-.025,s+.025,0,r,-e/2,-e*.18,m.wood,m.woodTop,z),i.seg(s,n*.02,-e*.18,s,r,e*.34,z);i.loft([-t/2,t/2,-e/2,e/2],[-t*.42,t*.42,-e*.42,e*.36],n*.86,n,m.wood,m.woodTop,z),i.cyl(0,e*.08,Math.min(t,e)*.09,r+n*.14,r+n*.28,m.accent,m.woodTop,12,rt);for(let s of[-t*.03,0,t*.03])i.box(s-.005,s+.005,r+n*.25,r+n*.5,e*.075,e*.09,m.accent)}function Ev(i,t,e,n){i.box(-t*.43,t*.43,0,n*.06,-e*.34,e*.34,m.dark),mn(i,t,e,n-.025,Math.max(2,Math.round(t/.45)),n*.55,!0);for(let r of[n*.32,n*.63])i.seg(-t/2+.03,r,e/2+.003,t/2-.03,r,e/2+.003,tt);for(let r of[-t*.25,t*.25])for(let s=-1;s<=1;s++)i.seg(r-t*.07,n*(.32+s*.018),e/2+.006,r+t*.07,n*(.32+s*.018),e/2+.006,tt);i.box(-t/2,t/2,n-.025,n,-e/2,e/2,m.woodTop,m.woodTop,rt)}function Av(i,t,e,n){let r=Math.min(.045,t*.04);for(let o of[-t/2+r,t/2-r])i.box(o-r,o+r,0,n*.64,-e/2+r,e/2-r,m.wood,m.woodTop,z);for(let o of[n*.18,n*.4])i.box(-t/2+r,t/2-r,o-r/2,o+r/2,-e/2+r,e/2-r,m.wood,m.woodTop,tt);let s=Math.max(2,Math.round(t/.35));for(let o=1;o<s;o++)i.seg(-t/2+t*o/s,n*.08,e/2+.003,-t/2+t*o/s,n*.58,e/2+.003,tt);i.pad(-t/2,t/2,n*.62,n,-e/2,e/2,m.cushion,m.fabricTop,.025,z)}function Rv(i,t,e,n){let r=Math.min(.05,t*.035);i.box(-t/2,t/2,0,r,-e/2,e/2,m.wood,m.woodTop,z),i.box(-t/2,t/2,n-r,n,-e/2,e/2,m.wood,m.woodTop,z);let s=Math.max(5,Math.round(t/.22));for(let o=0;o<s;o++){let a=-t/2+t*(o+.5)/s;i.box(a-r/2,a+r/2,r,n-r,-e/2,e/2,o%2?m.wood:m.body,m.woodTop,tt)}}function Cv(i,t,e,n){let r=Math.min(.76,n*.52);i.box(-t/2,t/2,r-.06,r,-e/2,e/2,m.wood,m.woodTop,z);for(let s of[-t/2+.05,t/2-.05])i.box(s-.025,s+.025,0,r-.06,-e/2+.04,e/2-.04,m.wood);i.box(-t*.32,t*.32,r+.12,n,-e/2,-e/2+.025,m.glass,m.glass,rt),i.box(-t*.2,t*.2,r-.01,r+.09,-e*.1,e*.18,m.body,m.bodyTop,z)}function Iv(i,t,e,n){let r=Math.min(.045,t*.06);i.box(-t/2,t/2,n*.24,n*.32,-e/2,e/2,m.wood,m.woodTop,z),i.pad(-t/2+r,t/2-r,n*.32,n*.42,-e/2+r,e/2-r,m.white,m.whiteTop,.025);for(let s of[-e/2,e/2]){for(let o=0;o<7;o++){let a=-t/2+r+(t-2*r)*o/6;i.box(a-r/2,a+r/2,n*.3,n,s-r/2,s+r/2,m.wood,m.woodTop,tt)}i.box(-t/2,t/2,n-r,n,s-r,s+r,m.wood,m.woodTop,z)}for(let s of[-t/2,t/2])i.box(s-r,s+r,0,n,-e/2,e/2,m.wood,m.woodTop,z)}function Fu(i,t,e,n,r="left"){let s=Math.min(.9,e*.53),o=Math.min(.9,t*.38),a=n*.52,l=r==="left"?-t/2:t/2-o,c=r==="left"?-t/2+o:t/2,u=r==="left"?-t/2:t/2-Math.min(.2,o*.25),f=r==="left"?-t/2+Math.min(.2,o*.25):t/2,h=r==="left"?c:l;i.pad(-t/2,t/2,.08,a,-e/2,-e/2+s,m.fabric,m.fabricTop,.04,z),i.pad(l,c,.08,a,-e/2+s,e/2,m.fabric,m.fabricTop,.04,z),i.box(-t/2,t/2,a,n,-e/2,-e/2+Math.min(.2,s*.25),m.fabric,m.fabricTop,z),i.box(u,f,a,n,-e/2+s,e/2,m.fabric,m.fabricTop,z),i.seg(h,a+.01,-e/2+s*.1,h,a+.01,-e/2+s*.9,tt)}function Pv(i,t,e,n){Jr(i,t,e,n,3);let r=n*.73,s=-e/2+Math.min(.22,e*.28)+.006;for(let o=0;o<2;o++)for(let a=0;a<7;a++){let l=-t*.34+t*.68*a/6+(o?t*.035:0);i.seg(l-.012,r+o*n*.12,s,l+.012,r+o*n*.12,s,rt)}}function Lv(i,t,e,n){let r=n*.5;rn(i,t,e,.08,.045,.035,m.wood,!0),i.pad(-t/2,t/2,.08,r,-e/2+e*.18,e/2,m.fabric,m.fabricTop,.04,z),i.loft([-t/2,t/2,-e/2,-e/2+e*.22],[-t/2+.03,t/2-.03,-e/2,-e/2+e*.1],r,n,m.fabric,m.fabricTop,z);for(let s=1;s<3;s++)i.seg(-t/2+t*s/3,r+.006,-e*.18,-t/2+t*s/3,r+.006,e/2-.04,tt)}function Fv(i,t,e,n){let r=n*.5,s=Math.min(t*.36,.88),o=Math.min(e*.52,.82);i.pad(-t/2,t/2,.08,r,-e/2,-e/2+o,m.fabric,m.fabricTop,.04,z),i.pad(-t/2,-t/2+s,.08,r,-e/2+o,e/2,m.fabric,m.fabricTop,.04,z),i.box(-t/2,t/2,r,n,-e/2,-e/2+.18,m.fabric,m.fabricTop,z),i.pad(-t/2,-t/2+.18,r,n*.72,-e/2+.03,e/2,m.fabric,m.fabricTop,.035,z),i.pad(t/2-.18,t/2,r,n*.72,-e/2+.03,-e/2+o,m.fabric,m.fabricTop,.035,z)}function Dv(i,t,e,n){let r=n*.5,s=Math.min(t*.27,.82),o=Math.min(e*.48,.82);i.pad(-t/2,t/2,.08,r,-e/2,-e/2+o,m.fabric,m.fabricTop,.04,z);for(let[a,l]of[[-t/2,-t/2+s],[t/2-s,t/2]])i.pad(a,l,.08,r,-e/2+o,e/2,m.fabric,m.fabricTop,.04,z);i.box(-t/2,t/2,r,n,-e/2,-e/2+.18,m.fabric,m.fabricTop,z);for(let a of[-t/2,t/2-.18])i.box(a,a+.18,r,n*.76,-e/2+.18,e/2,m.fabric,m.fabricTop,z)}function ip(i,t,e,n){let r=n*.48;i.pad(-t/2,t/2,.06,r,-e/2,e/2,m.fabric,m.fabricTop,.06,z),i.pad(-t/2,-t*.28,r,n*.78,-e/2,e/2,m.fabric,m.cushion,.05,z),i.pad(t*.28,t/2,r,n*.78,-e/2,e/2,m.fabric,m.cushion,.05,z),i.loft([-t/2,t/2,-e/2,-e*.2],[-t*.42,t*.42,-e/2,-e*.34],r,n,m.fabric,m.cushion,z)}function Uv(i,t,e,n){ip(i,t,e,n*.72),i.loft([-t*.42,t*.42,-e/2,-e*.3],[-t/2,t/2,-e/2,-e*.34],n*.48,n,m.fabric,m.cushion,z);for(let r of[-t/2,t/2-t*.14])i.pad(r,r+t*.14,n*.68,n,-e/2,-e*.02,m.fabric,m.cushion,.04,z)}function Nv(i,t,e,n){Uu(i,t*.86,e*.72,n);let r=.035;for(let s of[-t*.38,t*.38])i.seg(s,r,-e/2,s,.005,e*.3,z),i.seg(s,.005,e*.3,s,r,e/2,z);for(let s of[-e*.25,e*.25])i.seg(-t*.38,.05,s,t*.38,.05,s,tt)}function Ov(i,t,e,n){Al(i,t,e,n,5,4);let r=t/5,s=n/4;for(let[o,a]of[[0,0],[2,0],[4,0],[1,1],[3,1],[0,2],[2,2],[4,2]]){let l=-t/2+r*(o+.5);i.box(l-r*.28,l+r*.28,s*a+.04,s*(a+1)-.05,-e*.18,e*.18,m.body,m.bodyTop,tt)}}function Bv(i,t,e,n){rn(i,t,e,n-.12,.035,.035,m.wood,!0),i.box(-t/2,t/2,n-.12,n-.035,-e/2,e/2,m.wood,m.woodTop,z),i.box(-t/2,t/2,n-.035,n,-e/2,e/2,m.woodTop,m.woodTop,rt),i.seg(0,n-.115,e/2+.004,0,n-.04,e/2+.004,tt);for(let r of[-t*.25,t*.25])i.seg(r-.045,n-.077,e/2+.008,r+.045,n-.077,e/2+.008,rt)}function zv(i,t,e,n){let r=n*.42;rn(i,t,e,.09,.04,.04,m.wood,!0),i.pad(-t/2,t/2,.09,r,-e/2+e*.28,e/2,m.fabric,m.fabricTop,.05,z),i.loft([-t/2,t/2,-e/2,-e/2+e*.4],[-t*.44,t*.44,-e/2,-e/2+e*.2],r*.85,n,m.fabric,m.cushion,z),i.pad(-t/2,-t/2+t*.13,r,n*.62,-e/2+e*.22,e/2-.04,m.fabric,m.cushion,.035,tt)}function kv(i,t,e,n){let r=n*.46;i.cyl(0,0,Math.min(t,e)*.42,.04,r,m.fabric,m.cushion,14,z),i.loft([-t/2,t/2,-e/2,e*.08],[-t*.38,t*.38,-e*.44,-e*.18],r*.7,n,m.fabric,m.cushion,z),i.pad(-t*.34,t*.34,r,r+n*.08,-e*.12,e*.34,m.cushion,m.fabricTop,.03,tt)}function Vv(i,t,e,n){let r=e*.58,s=n*.43,o=-e/2;i.pad(-t/2,t/2,.08,s,o,o+r,m.fabric,m.cushion,.05,z),i.loft([-t*.46,t*.46,o,o+r*.32],[-t*.4,t*.4,o,o+r*.16],s,n,m.fabric,m.cushion,z);for(let l of[-t/2,t/2-t*.14])i.pad(l,l+t*.14,s,n*.64,o+.03,o+r,m.fabric,m.cushion,.04,z);let a=e*.31;i.box(-t*.34,t*.34,0,s*.55,a-e*.14,a+e*.14,m.dark,m.dark),i.pad(-t*.4,t*.4,s*.5,s*.72,a-e*.16,a+e*.16,m.fabric,m.cushion,.04,z)}function Gv(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.92,0,n*.28,m.fabric,m.cushion,16,z),i.loft([-r*.92,r*.92,-r*.92,r*.92],[-r*.58,r*.58,-r*.62,r*.62],n*.28,n*.78,m.fabric,m.cushion,tt),i.loft([-r*.58,r*.58,-r*.62,r*.62],[-r*.18,r*.18,-r*.2,r*.2],n*.78,n,m.cushion,m.cushion,z)}function Hv(i,t,e,n){Uu(i,t,e,n);let r=Math.min(.46,n*.52);i.pad(-t/2+.035,t/2-.035,r,r+.055,-e/2+.08,e/2-.025,m.fabric,m.cushion,.018,tt),i.pad(-t/2+.04,t/2-.04,r+.08,n-.04,-e/2,-e/2+.065,m.fabric,m.cushion,.025,z)}function Wv(i,t,e,n){let r=n*.5;i.cyl(0,0,Math.min(t,e)*.34,0,.025,m.metal,m.metal,12),i.cyl(0,0,.035,.025,r,m.metal,m.metal,8),i.loft([-t*.46,t*.46,-e*.38,e*.4],[-t*.4,t*.4,-e*.46,e*.2],r,n*.66,m.body,m.bodyTop,z),i.loft([-t*.4,t*.4,-e*.46,-e*.18],[-t*.3,t*.3,-e*.42,-e*.28],n*.66,n,m.body,m.bodyTop,z)}function Du(i,t,e,n){let r=Math.min(.1,n*.2);rn(i,t,e,r,.025,.04,m.metal),i.box(-t/2,t/2,r,n,-e/2,e/2,m.wood,m.woodTop,z);let s=Math.max(2,Math.round(t/.55)),o=e/2+.005;for(let a=1;a<s;a++){let l=-t/2+t*a/s;i.seg(l,r+.03,o,l,n-.03,o,tt)}i.seg(-t/2+.03,r+(n-r)*.52,o,t/2-.03,r+(n-r)*.52,o,tt);for(let a=0;a<s;a++){let l=-t/2+t*(a+.5)/s;i.seg(l-.045,n*.58,o+.004,l+.045,n*.58,o+.004,rt)}}function Xv(i,t,e,n){mn(i,t,e,n,3,n*.58,!0);let r=e/2+.005;for(let s of[n*.34,n*.68])i.seg(-t/2+.03,s,r,t/2-.03,s,r,tt)}function Yv(i,t,e,n){i.box(-t*.42,t*.42,0,n*.14,-e*.4,e*.4,m.dark,m.dark),i.pad(-t/2,t/2,n*.12,n,-e/2,e/2,m.fabric,m.cushion,.06,z),i.seg(0,n+.002,-e*.42,0,n+.002,e*.42,tt),i.seg(-t*.42,n+.002,0,t*.42,n+.002,0,tt)}function qv(i,t,e,n){let r=Math.min(.12,n*.22);rn(i,t,e,r,.025,.04,m.metal),i.box(-t/2,t/2,r,n,-e/2,e/2,m.wood,m.woodTop,z);let s=Math.min(t*.38,.72),o=e/2+.004;i.box(-s/2,s/2,r+n*.13,n-n*.1,-e/2+.04,e/2+.008,m.dark,m.dark,tt),i.seg(-s/2,r+(n-r)*.52,o,s/2,r+(n-r)*.52,o,tt);for(let a of[-s/2,s/2])i.seg(a,r+.03,o,a,n-.03,o,z);for(let a of[-t*.34,t*.34])i.seg(a-.055,n*.53,o,a+.055,n*.53,o,rt)}function $v(i,t,e,n){let r=Math.min(.055,t*.06),s=e/2;i.box(-t/2,t/2,0,r,-e/2,s,m.wood,m.woodTop,z),i.box(-t/2,t/2,n-r,n,-e/2,s,m.wood,m.woodTop,z);for(let a of[-t/2,t/2-r])i.box(a,a+r,r,n-r,-e/2,s,m.wood,m.woodTop,z);i.box(-t/2+r,t/2-r,r,n-r,-e/2,-e/2+.025,m.body,m.bodyTop);let o=Math.max(3,Math.round(n/.45));for(let a=1;a<o;a++){let l=n*a/o;i.box(-t/2+r,t/2-r,l-.018,l+.018,-e/2+.025,s-.025,m.glass,m.glass,tt)}i.box(-t/2+r,-.012,r,n-r,s-.025,s,m.glass,m.glass,rt),i.box(.012,t/2-r,r,n-r,s-.025,s,m.glass,m.glass,rt);for(let a of[-.035,.035])i.box(a-.008,a+.008,n*.46,n*.59,s,s+.018,m.metal,m.metal)}function Zv(i,t,e,n){let r=n*.5;i.pad(-t/2,t/2,.08,r,-e/2+e*.12,e/2,m.fabric,m.fabricTop,.04,z),i.pad(-t/2+.05,t/2-.05,r,r+.1,-e/2+e*.3,e/2-.04,m.cushion,m.fabricTop,.03,tt),i.loft([-t/2,t/2,-e/2,-e/2+e*.22],[-t/2+.03,t/2-.03,-e/2,-e/2+e*.1],r,n,m.fabric,m.fabricTop,z),i.seg(0,r+.105,-e*.05,0,r+.105,e/2-.06,tt)}var rp={altar:({b:i,w:t,d:e,h:n})=>(Tv(i,t,e,n),.5),altar_table:({b:i,w:t,d:e,h:n})=>(vv(i,t,e,n),.5),altar_cabinet:({b:i,w:t,d:e,h:n})=>(Mv(i,t,e,n),.5),altar_wall:({b:i,w:t,d:e,h:n})=>(wv(i,t,e,n),!1),armchair:({b:i,w:t,d:e,h:n})=>(Jr(i,t,e,n,1),.5),club_chair:({b:i,w:t,d:e,h:n})=>(ip(i,t,e,n),.5),cocktail_chair:({b:i,w:t,d:e,h:n})=>(kv(i,t,e,n),.5),wingback_chair:({b:i,w:t,d:e,h:n})=>(Uv(i,t,e,n),.5),recliner:({b:i,w:t,d:e,h:n})=>(Vv(i,t,e,n),.5),rocking_chair:({b:i,w:t,d:e,h:n})=>(Nv(i,t,e,n),.5),chaise_longue:({b:i,w:t,d:e,h:n})=>(zv(i,t,e,n),.5),bean_bag:({b:i,w:t,d:e,h:n})=>(Gv(i,t,e,n),.5),chair_upholstered:({b:i,w:t,d:e,h:n})=>(Hv(i,t,e,n),.5),chair_shell:({b:i,w:t,d:e,h:n})=>(Wv(i,t,e,n),.5),bar_stool:({b:i,w:t,d:e,h:n})=>(fv(i,t,e,n),.5),bed:({b:i,w:t,d:e,h:n})=>(Lu(i,t,e,n),.5),bed_double:({b:i,w:t,d:e,h:n})=>(Lu(i,t,e,n),.5),bed_single:({b:i,w:t,d:e,h:n})=>(Lu(i,t,e,n),.5),bench:({b:i,w:t,d:e,h:n})=>(ep(i,t,e,n,!1),.5),bunk_bed:({b:i,w:t,d:e,h:n})=>(mv(i,t,e,n),.5),chair:({b:i,w:t,d:e,h:n})=>(Uu(i,t,e,n),.5),coat_rack:({b:i,w:t,d:e,h:n})=>(hv(i,t,e,n),.5),coffee_table:({b:i,w:t,d:e,h:n})=>(xv(i,t,e,n),.5),coffee_table_round:({b:i,w:t,d:e,h:n})=>(np(i,t,e,n),.5),coffee_table_glass:({b:i,w:t,d:e,h:n})=>(bv(i,t,e,n),.5),nesting_tables:({b:i,w:t,d:e,h:n})=>(_v(i,t,e,n),.5),side_table_round:({b:i,w:t,d:e,h:n})=>(np(i,t,e,n),.5),console_table:({b:i,w:t,d:e,h:n})=>(Bv(i,t,e,n),.5),lowboard_120:({b:i,w:t,d:e,h:n})=>(Du(i,t,e,n),.5),lowboard_160:({b:i,w:t,d:e,h:n})=>(Du(i,t,e,n),.5),lowboard_200:({b:i,w:t,d:e,h:n})=>(Du(i,t,e,n),.5),highboard:({b:i,w:t,d:e,h:n})=>(Xv(i,t,e,n),.5),corner_bench:({b:i,w:t,d:e,h:n})=>(ep(i,t,e,n,!0),.5),crib:({b:i,w:t,d:e,h:n})=>(Iv(i,t,e,n),.5),desk:({b:i,w:t,d:e,h:n})=>(ov(i,t,e,n),.5),dresser:({b:i,w:t,d:e,h:n})=>(uv(i,t,e,n),.5),nightstand:({b:i,w:t,d:e,h:n})=>(mn(i,t,e,n,1,n*.72,!0),i.seg(-t/2,n*.5,e/2-.02,t/2,n*.5,e/2-.02,tt),.5),office_chair:({b:i,w:t,d:e,h:n})=>(dv(i,t,e,n),.5),plant:({b:i,w:t,d:e,h:n})=>(tp(i,t,e,n),.35),planter_large:({b:i,w:t,d:e,h:n})=>(tp(i,t,e,n),.5),room_divider:({b:i,w:t,d:e,h:n})=>(Rv(i,t,e,n),.5),rug:({b:i,w:t,d:e})=>(lv(i,t,e),!1),shelf:({b:i,w:t,d:e,h:n})=>(jd(i,t,e,n),.5),bookshelf_wide:({b:i,w:t,d:e,h:n})=>(jd(i,t,e,n),.5),cube_shelf_2x2:({b:i,w:t,d:e,h:n})=>(Al(i,t,e,n,2,2),.5),cube_shelf_4x2:({b:i,w:t,d:e,h:n})=>(Al(i,t,e,n,4,2),.5),cube_shelf_4x4:({b:i,w:t,d:e,h:n})=>(Al(i,t,e,n,4,4),.5),room_divider_shelf:({b:i,w:t,d:e,h:n})=>(Ov(i,t,e,n),.5),floating_shelf:({b:i,w:t,d:e,h:n})=>(yv(i,t,e,n),!1),shoe_bench:({b:i,w:t,d:e,h:n})=>(Av(i,t,e,n),.5),shoe_cabinet:({b:i,w:t,d:e,h:n})=>(Ev(i,t,e,n),.5),sideboard:({b:i,w:t,d:e,h:n})=>(cv(i,t,e,n),.5),sofa:({b:i,w:t,d:e,h:n})=>(Jr(i,t,e,n,Math.max(1,Math.round((t-.4)/.62))),.5),sofa_2:({b:i,w:t,d:e,h:n})=>(Jr(i,t,e,n,2),.5),sofa_3:({b:i,w:t,d:e,h:n})=>(Jr(i,t,e,n,3),.5),sofa_4:({b:i,w:t,d:e,h:n})=>(Jr(i,t,e,n,4),.5),sofa_bed:({b:i,w:t,d:e,h:n})=>(Zv(i,t,e,n),.5),sofa_l:({b:i,w:t,d:e,h:n})=>(Fu(i,t,e,n),.5),sofa_corner_left:({b:i,w:t,d:e,h:n})=>(Fu(i,t,e,n,"left"),.5),sofa_corner_right:({b:i,w:t,d:e,h:n})=>(Fu(i,t,e,n,"right"),.5),sofa_chesterfield:({b:i,w:t,d:e,h:n})=>(Pv(i,t,e,n),.5),sofa_armless:({b:i,w:t,d:e,h:n})=>(Lv(i,t,e,n),.5),sofa_chaise:({b:i,w:t,d:e,h:n})=>(Fv(i,t,e,n),.5),sofa_u:({b:i,w:t,d:e,h:n})=>(Dv(i,t,e,n),.5),ottoman:({b:i,w:t,d:e,h:n})=>(Yv(i,t,e,n),.5),tv_console:({b:i,w:t,d:e,h:n})=>(qv(i,t,e,n),.5),display_cabinet:({b:i,w:t,d:e,h:n})=>($v(i,t,e,n),.5),stool:({b:i,w:t,d:e,h:n})=>(pv(i,t,e,n),.5),table:({b:i,w:t,d:e,h:n})=>(sv(i,t,e,n),.5),table_round:({b:i,w:t,d:e,h:n})=>(gv(i,t,e,n),.5),tall_cabinet:({b:i,w:t,d:e,h:n})=>(mn(i,t,e,n,1,n*.5),.5),tv_board:({b:i,w:t,d:e,h:n})=>(av(i,t,e,n),.5),tv_wall:({b:i,w:t,d:e,h:n})=>(Sv(i,t,e,n),!1),vanity:({b:i,w:t,d:e,h:n})=>(Cv(i,t,e,n),.5),wardrobe:({b:i,w:t,d:e,h:n})=>(mn(i,t,e,n,Math.max(2,Math.round(t/.5)),n*.5),.5)};var sp=.06;function Kv(i,t,e,n){let r=Math.max(1,Math.round(t/.6));mn(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,m.whiteTop,m.whiteTop,z)}function Jv(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,m.white,m.whiteTop,z);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,tt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,rt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,rt)}function Qv(i,t,e,n){let r=e/2-sp;i.box(-t/2,t/2,.02,n,-e/2,r,m.body,m.bodyTop,z),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,m.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,tt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,tt))}function Nu(i,t,e,n,r){let s=i.p.length;jv(i,t,e,n,r),t.mirror&&ar(i,s)}function jv(i,t,e,n,r){let s=t.rotation*ie,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,S)=>[t.x+l*v*o-S*a,t.z+l*v*a+S*o],u=e+.05,f=e+t.h-.02,h=new at(.75,.1,.14),d=new at(m.dark),g=new at(m.accent),b=t.w/2-.006,x=(v,S,w)=>{let A=w/p,_=new at(2043212).lerp(h,A),T=new at(m.body).lerp(h,A*.8),C=Math.cos(w),I=Math.sin(w),L=(D,U)=>c(v+S*(D*C-U*I),t.d/2+D*I+U*C),P=(D,U,N,k)=>{let[B,G,V,nt]=D;i.tri([B[0],U,B[1]],[G[0],U,G[1]],[V[0],N,V[1]],k),i.tri([B[0],U,B[1]],[V[0],N,V[1]],[nt[0],N,nt[1]],k)},E=(D,U,N,k,B,G,V,nt=V)=>{let $=[L(D,G),L(U,G),L(U,B),L(D,B)];P([$[0],$[1],$[1],$[0]],N,k,nt),P([$[3],$[2],$[2],$[3]],N,k,V),P([$[0],$[3],$[3],$[0]],N,k,V),P([$[1],$[2],$[2],$[1]],N,k,V),P([$[0],$[1],$[2],$[3]],k,k,V),P([$[3],$[2],$[1],$[0]],N,N,V)};return E(0,b,u,f,-sp,0,T,_),E(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,g),E},p=1.83;x(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),x(t.w/2,-1,r*p)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function t1(i,t,e,n){mn(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,m.dark,m.dark,z);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,m.dark,1451583,12,rt)}}function e1(i,t,e,n){mn(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,m.whiteTop,m.whiteTop,z),i.box(r/2,t/2,n-.04,n,-e/2,e/2,m.whiteTop,m.whiteTop,z),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,m.whiteTop,m.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,m.whiteTop,m.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,m.metal,m.metal,rt),i.cyl(0,-e/2+.05,.02,n,n+.28,m.metal,m.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,m.metal)}function n1(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,m.white,m.whiteTop,z),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,m.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,m.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,m.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,m.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,m.glass,m.glass,rt),i.cyl(-t/2+.04,0,.02,n,n+.12,m.metal,m.metal,8)}function i1(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,m.whiteTop,m.whiteTop,z),i.cyl(0,0,.04,.05,.052,m.metal,m.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,rt),i.seg(r,n,s,o,n,a,rt),i.seg(o,.05,a,o,n,a,rt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,m.metal,m.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,m.metal,m.metal,12,rt)}function r1(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,m.white,m.whiteTop,z),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,m.white,m.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,m.white,m.whiteTop,12,z),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,m.whiteTop)}function s1(i,t,e,n){mn(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,m.white,m.whiteTop,z),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,m.glass,m.glass,rt),i.cyl(0,-e/2+.06,.018,n,n+.2,m.metal,m.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,m.glass,m.glass,rt)}function o1(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,m.body,m.bodyTop,z),lr(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function a1(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,m.body,m.bodyTop,z),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,m.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,m.dark,m.dark,rt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,rt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,tt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,rt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,rt)}function l1(i,t,e,n){let r=Math.min(.055,t*.075),s=e/2,o=-e/2,a=Math.min(.62,n*.3);i.box(-t/2,t/2,.02,n,o,o+.035,m.body,m.bodyTop,z),i.box(-t/2,-t/2+r,.02,n,o,s,m.body,m.bodyTop,z),i.box(t/2-r,t/2,.02,n,o,s,m.body,m.bodyTop,z),i.box(-t/2,t/2,n-r,n,o,s,m.body,m.bodyTop,z),i.box(-t/2,t/2,.02,a,o,s-.015,m.body,m.bodyTop,z),i.box(-t/2+.02,t/2-.02,0,.08,o+.02,s-.04,m.dark),i.box(-t/2+r,t/2-r,a,n-r,o+.036,o+.05,m.dark,m.dark);for(let l of[a+(n-a)*.25,a+(n-a)*.5,a+(n-a)*.75])i.box(-t/2+r,t/2-r,l-.012,l+.012,o+.05,s-.025,m.glass,m.glass,rt);i.box(-t/2+r,-r*.35,a+r,n-r*1.5,s-.012,s,m.glass,m.glass,tt),i.box(r*.35,t/2-r,a+r,n-r*1.5,s-.012,s,m.glass,m.glass,tt),i.box(-r*.35,r*.35,a,n-r,s-.02,s+.005,m.metal,m.metal,z),i.box(-t/2,t/2,a-r*.5,a+r*.5,s-.02,s+.005,m.body,m.bodyTop,z),i.seg(-r*1.4,a+(n-a)*.46,s+.012,-r*1.4,a+(n-a)*.62,s+.012,rt),i.seg(r*1.4,a+(n-a)*.46,s+.012,r*1.4,a+(n-a)*.62,s+.012,rt),i.seg(0,.12,s+.012,0,a-.12,s+.012,tt)}function c1(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,m.body,m.bodyTop,z),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,m.dark),lr(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,m.whiteTop,m.whiteTop,z)}function u1(i,t,e,n){i.box(-t*.16,t*.16,n*.42,n,-e/2,-e*.18,m.metal,m.metal,z),i.loft([-t/2,t/2,-e/2,e/2],[-t*.18,t*.18,-e/2,-e*.1],0,n*.48,m.metal,m.whiteTop,z),i.box(-t*.4,t*.4,0,n*.06,e*.18,e/2,m.dark,m.dark,rt)}function h1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,m.body,m.bodyTop,z),i.box(-t*.4,t*.18,n*.17,n*.82,e/2,e/2+.006,m.dark,m.glass,rt),i.cyl(t*.34,e/2+.008,Math.min(t,n)*.055,n*.58,n*.69,m.accent,m.accent,10,rt),i.seg(t*.28,n*.34,e/2+.009,t*.4,n*.34,e/2+.009,tt)}function f1(i,t,e,n){let r=n*.8,s=e/2;i.box(-t*.46,t*.46,.025,r,-e/2,s,m.white,m.whiteTop,z),i.box(-t*.48,t*.48,0,.035,-e*.44,e*.44,m.dark,m.dark),i.box(-t*.42,t*.42,.055,r-.035,s,s+.012,m.white,m.whiteTop,z),i.seg(-t*.4,r*.28,s+.014,t*.4,r*.28,s+.014,tt),i.seg(-t*.28,r*.58,s+.015,t*.28,r*.58,s+.015,rt),i.seg(-t*.2,r*.62,s+.015,t*.2,r*.62,s+.015,tt),i.box(-t/2,t/2,r-.025,r,-e/2,e/2,m.white,m.whiteTop,z);let o=Math.min(.012,t*.03),a=t*.1,l=-e*.16,c=e*.08,u=6718637;i.cyl(a,l,o*1.55,r,r+o*1.8,u,u,12,z),i.cyl(a,c,t*.16,r,r+.01,m.whiteTop,m.whiteTop,18,tt),i.seg(a-t*.1,r+.012,c,a+t*.1,r+.012,c,tt),i.seg(a,r+.012,c-e*.11,a,r+.012,c+e*.11,tt);let f=n*.925,h=n*.055,d=(l+c)/2,g=(c-l)/2,b=[[r+o,l],[f,l]];for(let x=1;x<=8;x++){let p=Math.PI-Math.PI*x/8;b.push([f+Math.sin(p)*h,d+Math.cos(p)*g])}b.push([n*.89,c]),i.tubeYZ(a,b,o,u,10),i.cyl(a,c,o*1.25,n*.89-o,n*.905,m.dark,u,10,tt),i.lyingCyl("x",a+t*.055,l,r+o*1.6,r+o*2.5,t*.15,o*.9,m.dark,u,8)}function d1(i,t,e,n){let r=Math.max(.42,Math.min(t,e)*.46);i.box(-t/2,t/2,0,n-.04,-e/2,-e/2+r,m.body,m.bodyTop,z),i.box(-t/2,-t/2+r,0,n-.04,-e/2+r,e/2,m.body,m.bodyTop,z),i.box(-t/2,t/2,n-.04,n,-e/2,-e/2+r,m.whiteTop,m.whiteTop,rt),i.box(-t/2,-t/2+r,n-.04,n,-e/2+r,e/2,m.whiteTop,m.whiteTop,rt),i.seg(-t/2+r,.08,-e/2+r,-t/2+r,n-.08,-e/2+r,tt);let s=-e/2+r+.006,o=-t/2+r+.006;for(let a=1;a<3;a++){let l=-t/2+r+(t-r)*a/3;i.seg(l,.08,s,l,n-.08,s,tt);let c=-e/2+r+(e-r)*a/3;i.seg(o,.08,c,o,n-.08,c,tt)}i.seg(-t/2+r+.08,n*.72,s+.004,-t/2+r+.22,n*.72,s+.004,rt),i.seg(o+.004,n*.72,-e/2+r+.08,o+.004,n*.72,-e/2+r+.22,rt)}function p1(i,t,e,n){let r=Math.min(.025,Math.max(.01,e*.35));i.box(-t/2,t/2,0,.025,-r,r,m.metal,m.metal,rt);for(let s of[-t/2,0,t/2])i.box(s-r,s+r,0,n,-r,r,m.metal,m.metal,rt);i.seg(-t/2,n,0,t/2,n,0,rt),i.seg(t*.32,n*.42,r+.003,t*.32,n*.62,r+.003,z)}var op={bathtub:({b:i,w:t,d:e,h:n})=>(n1(i,t,e,n),.5),fridge:({b:i,w:t,d:e,h:n})=>(Jv(i,t,e,n),.5),fridge_smart:({b:i,w:t,d:e,h:n})=>(Qv(i,t,e,n),.5),island:({b:i,w:t,d:e,h:n})=>(c1(i,t,e,n),.5),kitchen:({b:i,w:t,d:e,h:n})=>(Kv(i,t,e,n),.5),kitchen_corner:({b:i,w:t,d:e,h:n})=>(d1(i,t,e,n),.5),kitchen_display:({b:i,w:t,d:e,h:n})=>(l1(i,t,e,n),.5),kitchen_tall:({b:i,w:t,d:e,h:n})=>(a1(i,t,e,n),.5),kitchen_wall:({b:i,w:t,d:e,h:n})=>(o1(i,t,e,n),!1),microwave:({b:i,w:t,d:e,h:n,base:r})=>(h1(i,t,e,n),r>.05?!1:.5),range_hood:({b:i,w:t,d:e,h:n})=>(u1(i,t,e,n),!1),shower:({b:i,w:t,d:e,h:n})=>(i1(i,t,e,n),.5),shower_screen:({b:i,w:t,d:e,h:n})=>(p1(i,t,e,n),.5),sink:({b:i,w:t,d:e,h:n})=>(e1(i,t,e,n),.5),stove:({b:i,w:t,d:e,h:n})=>(t1(i,t,e,n),.5),washbasin:({b:i,w:t,d:e,h:n})=>(s1(i,t,e,n),.5),water_purifier:({b:i,w:t,d:e,h:n})=>(f1(i,t,e,n),.5),wc:({b:i,w:t,d:e,h:n})=>(r1(i,t,e,n),.5)};function m1(i,t,e,n){i.box(-t/2,t/2,Math.max(0,n-.04),n,-e/2,e/2,m.whiteTop,m.whiteTop,z)}function g1(i,t,e){let r=[[-t/2,-e/2],[t/2,-e/2],[t/2,e/2],[-t/2,e/2]];for(let s=0;s<4;s++)i.seg(r[s][0],.012,r[s][1],r[(s+1)%4][0],.012,r[(s+1)%4][1],tt);i.seg(-t*.15,.012,e/2-.45,0,.012,e/2-.2,z),i.seg(0,.012,e/2-.2,t*.15,.012,e/2-.45,z)}function x1(i,t,e,n){i.box(-t*.38,t*.38,0,n*.05,-e/2-e*.02,-e*.1,m.dark,m.body,tt),i.box(-t*.32,t*.32,n*.04,n*.92,-e/2,-e*.18,m.body,m.bodyTop,z),i.box(-t*.34,t*.34,n*.9,n,-e/2-e*.01,-e*.17,m.metal,m.bodyTop,z),i.box(-t*.23,t*.23,n*.75,n*.82,-e*.175,-e*.15,m.accent,m.accent,rt),i.box(-t*.22,t*.22,n*.02,n*.055,-e*.18,e*.17,m.dark,m.bodyTop,tt)}function b1(i,t,e,n){let r=Math.min(.055,t*.07);i.box(-t*.48,t*.48,0,n*.045,-e*.48,e*.4,m.dark,m.bodyTop,tt);for(let s of[-t*.43,t*.43])i.box(s-r/2,s+r/2,n*.04,n*.7,-e*.44,e*.28,m.body,m.bodyTop,z);i.box(-t*.45,t*.45,n*.06,n*.52,-e*.48,-e*.42,m.body,m.bodyTop,tt),i.box(-t/2,t/2,n*.69,n*.84,-e/2,e*.42,m.body,m.metal,z),i.loft([-t*.33,t*.33,-e*.17,e*.34],[-t*.27,t*.27,-e*.12,e*.27],n*.05,n*.31,m.white,m.whiteTop,z),i.box(-t*.23,t*.23,n*.16,n*.22,e*.325,e*.345,m.accent,m.accent,rt);for(let s of[-t*.29,t*.29])i.lyingCyl("x",s,e*.08,n*.015,n*.145,r*2,n*.13,m.dark,m.metal,10,tt)}var ap={parking:({b:i,w:t,d:e})=>(g1(i,t,e),!1),robot_mower:({b:i,w:t,d:e,h:n})=>(b1(i,t,e,n),!1),robot_vacuum:({b:i,w:t,d:e,h:n})=>(x1(i,t,e,n),!1),stairwell:()=>!1,worktop:({b:i,w:t,d:e,h:n})=>(m1(i,t,e,n),!1)};function _1(i,t,e,n){i.pad(-t/2,t/2,0,n,-e/2,e/2,m.white,m.whiteTop,Math.min(.04,t*.1),z);let r=e/2+.006;i.cyl(0,e/2,t*.095,n*.69,n*.705,m.dark,m.dark,18,rt);for(let s=0;s<7;s++){let o=n*(.16+s*.055);i.seg(-t*.34,o,r,t*.34,o,r,tt)}for(let s=-3;s<=3;s++)i.seg(s*t*.085,n+.003,-e*.27,s*t*.085,n+.003,e*.22,tt)}function y1(i,t,e,n){let r=Math.min(t,e)*.46;i.cyl(0,0,r,n*.06,n*.9,m.dark,m.fabricTop,18,z),i.cyl(0,0,r*.94,n*.9,n,m.dark,m.dark,18,rt),i.cyl(0,0,r*.72,n,n+.006,m.dark,m.dark,18,tt);for(let s of[-t*.12,t*.12])i.cyl(s,0,t*.014,n+.007,n+.01,m.white,m.white,8)}function v1(i,t,e,n){i.box(-t*.28,t*.28,1.85,1.85+n*.7,-e/2,-e/2+e*.12,m.white,m.whiteTop,z),i.box(-t*.08,t*.08,1.85+n*.3,1.85+n*.45,-e/2+e*.1,0,m.metal,m.metal,tt),i.lyingCyl("z",0,e*.16,1.85+n*.17,1.85+n*.78,e*.58,n*.58,m.white,m.whiteTop,14,z),i.lyingCyl("z",0,e*.47,1.85+n*.28,1.85+n*.67,e*.08,n*.38,m.dark,m.dark,16,rt),i.lyingCyl("z",0,e*.515,1.85+n*.38,1.85+n*.57,e*.025,n*.18,m.accent,m.dark,14)}function M1(i,t,e,n){let s=e/2;i.pad(-t/2,t/2,.95,.95+n,-e/2,s,m.dark,m.metal,Math.min(.018,t*.12),z);for(let o=0;o<3;o++)for(let a=0;a<3;a++){let l=(a-1)*t*.22,c=.95+n*(.7-o*.105);i.seg(l-t*.025,c,s+.005,l+t*.025,c,s+.005,rt)}i.cyl(0,s,t*.12,.95+n*.22,.95+n*.235,m.accent,m.dark,14,rt),i.lyingCyl("x",t*.22,s+e*.12,.95+n*.31,.95+n*.4,t*.75,n*.085,m.metal,m.metal,10,z)}function S1(i,t,e,n){let r=n*.96;i.lyingCyl("x",0,-e*.18,r,n,t,e*.16,m.metal,m.metal,10,z),i.box(-t*.06,t*.06,r-n*.055,r+n*.015,-e*.28,e*.02,m.dark,m.dark,rt);let s=t*.12,o=6;for(let a of[-1,1]){let l=a<0?-t/2:s,u=((a<0?-s:t/2)-l)/o;for(let f=0;f<o;f++){let h=l+f*u,d=f%2?e*.12:-e*.04;i.box(h,h+u*.82,n*.04,r,d-e*.18,d+e*.18,m.fabric,m.fabricTop,f===0||f===o-1?z:null)}}}function T1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,m.dark,m.bodyTop,z),i.box(-t*.42,t*.42,n*.06,n*.94,e*.48,e*.515,m.glass,m.glass,tt);for(let r=0;r<7;r++){let s=n*(.16+r*.105);i.box(-t*.34,t*.34,s,s+n*.035,e*.505,e*.535,r%3===1?m.metal:m.bodyTop,m.bodyTop,tt)}i.box(-t*.22,t*.22,n*.82,n*.86,e*.525,e*.545,m.accent,m.accent,rt),i.cyl(t*.38,e*.525,t*.018,n*.48,n*.5,m.metal,m.metal,8,tt)}function w1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,m.dark,m.bodyTop,z);let r=t*.035,s=(t*.72-r*3)/4;for(let o=0;o<4;o++){let a=-t*.36+o*(s+r);i.box(a,a+s,n*.13,n*.86,e*.49,e*.525,m.body,m.metal,tt),i.box(a+s*.18,a+s*.82,n*.18,n*.205,e*.52,e*.54,m.accent,m.accent,rt)}i.cyl(t*.41,e*.52,t*.025,n*.7,n*.73,m.accent,m.accent,10,rt)}function E1(i,t,e,n){let r=Math.min(t,e)*.47;i.cyl(0,0,r,0,n*.58,m.white,m.whiteTop,16,z),i.cyl(0,0,r*.82,n*.58,n,m.white,m.whiteTop,16,tt),i.seg(-t*.16,n*.18,e*.455,t*.16,n*.18,e*.455,rt)}function A1(i,t,e,n){i.pad(-t/2,t/2,1.35,1.35+n,-e/2,e/2,m.body,m.bodyTop,Math.min(.018,t*.1),z),i.box(-t*.37,t*.37,1.35+n*.34,1.35+n*.82,e*.48,e*.54,m.glass,m.glass,rt),i.box(-t*.28,t*.28,1.35+n*.12,1.35+n*.22,e*.5,e*.55,m.metal,m.metal,tt)}function R1(i,t,e,n){let r=Math.min(t,e)*.47;i.cyl(0,0,r,0,n*.7,m.white,m.whiteTop,16,z),i.cyl(0,0,r*.78,n*.7,n,m.white,m.whiteTop,16,tt);for(let s=0;s<8;s++){let o=s/8*Math.PI*2,a=Math.cos(o)*r*.62,l=Math.sin(o)*r*.62;i.cyl(a,l,r*.055,n*.12,n*.16,m.dark,m.dark,6)}i.seg(-t*.1,n*.12,e*.46,t*.1,n*.12,e*.46,rt)}function C1(i,t,e,n){i.box(-t/2,t/2,1.85,1.85+n,-e/2,e/2,m.body,m.bodyTop,z),i.loft([-t*.32,t*.32,e*.42,e*.56],[-t*.25,t*.25,e*.45,e*.58],1.85+n*.48,1.85+n*.82,8003636,16725592,rt),i.box(-t*.23,t*.23,1.85+n*.13,1.85+n*.25,e*.48,e*.56,m.accent,m.accent,tt)}function I1(i,t,e,n){i.box(-t/2,t/2,.85,.85+n,-e/2,e/2,m.body,m.bodyTop,z),i.box(-t*.43,t*.43,.85+n*.07,.85+n*.93,e*.47,e*.54,m.glass,m.glass,tt);for(let s=0;s<3;s++)for(let o=0;o<5;o++){let a=(o-2)*t*.145,l=.85+n*(.22+s*.25);i.box(a-t*.045,a+t*.045,l,l+n*.075,e*.51,e*.56,s===0?m.accent:m.metal,m.metal,tt)}}function P1(i,t,e,n){i.pad(-t/2,t/2,0,n,-e/2,e/2,m.dark,m.bodyTop,Math.min(.025,t*.06),z),i.box(-t*.32,t*.32,n*.58,n*.78,e*.49,e*.54,m.glass,m.glass,rt),i.cyl(0,e*.51,t*.045,n*.4,n*.43,m.accent,m.accent,10,tt);for(let r=0;r<4;r++)i.seg(-t*.28,n*(.12+r*.06),e*.51,t*.28,n*(.12+r*.06),e*.51,tt)}function L1(i,t,e,n){i.pad(-t/2,t/2,0,n*.62,-e/2,e/2,m.body,m.bodyTop,Math.min(.018,n*.12),z);for(let r of[-t*.38,t*.38])i.cyl(r,-e*.35,t*.025,n*.2,n,m.dark,m.metal,8,tt);for(let r=-2;r<=2;r++)i.cyl(r*t*.095,e*.48,t*.012,n*.2,n*.23,r===0?m.accent:m.metal,r===0?m.accent:m.metal,6,rt)}function F1(i,t,e,n){i.box(-t/2,t/2,n*.04,n,-e/2,e/2,m.white,m.whiteTop,z),i.box(-t*.42,t*.2,n*.17,n*.82,e*.5,e*.54,m.dark,m.dark,tt);for(let r=0;r<6;r++){let s=n*(.23+r*.09);i.box(-t*.4,t*.18,s,s+n*.025,e*.535,e*.555,m.bodyTop,m.bodyTop,tt)}i.box(t*.29,t*.43,n*.2,n*.8,e*.5,e*.54,m.body,m.bodyTop,tt),i.box(t*.32,t*.41,n*.62,n*.69,e*.53,e*.56,m.accent,m.accent,rt)}function D1(i,t,e,n){let r=Math.min(t,e)*.45;i.cyl(0,0,r,n*.035,n*.94,m.white,m.whiteTop,18,z),i.cyl(0,0,r*.88,n*.94,n,m.white,m.whiteTop,18,tt),i.box(-t*.12,t*.12,n*.57,n*.66,e*.44,e*.49,m.glass,m.glass,rt);for(let s of[-t*.18,t*.18])i.cyl(s,0,t*.035,0,n*.05,m.metal,m.metal,8,tt)}function U1(i,t,e,n){i.box(-t/2,t/2,1.8,1.8+n,-e/2,-e*.18,m.white,m.whiteTop,z);let s=Math.min(t,n)*.38;i.lyingCyl("z",0,e*.12,1.8+n*.12,1.8+n*.12+s*2,e*.52,s*2,m.dark,m.bodyTop,16,z);for(let o=0;o<6;o++){let a=1.8+n*(.24+o*.09);i.seg(-t*.34,a,e*.42,t*.34,a,e*.42,tt)}}function N1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,m.body,m.bodyTop,z),i.box(-t*.34,t*.34,n*.12,n*.56,e*.49,e*.54,m.dark,m.dark,tt),i.box(-t*.35,t*.35,n*.61,n*.69,e*.49,e*.55,m.accent,m.accent,rt),i.box(t*.12,t*.31,n*.78,n*.84,e*.5,e*.55,m.accent,m.accent,tt);for(let r=-2;r<=2;r++)i.seg(r*t*.11,n+.003,-e*.22,r*t*.11,n+.003,e*.18,tt)}function O1(i,t,e,n){i.box(-t*.48,t*.48,n*.18,n,-e*.2,e*.2,m.dark,m.bodyTop,z),i.box(-t*.39,t*.39,n*.35,n*.89,e*.19,e*.24,m.glass,m.glass,rt),i.box(-t*.28,t*.28,n*.03,n*.17,-e*.03,e*.25,m.body,m.bodyTop,z)}function B1(i,t,e,n){i.pad(-t/2,t/2,1.05,1.05+n,-e/2,e/2,m.white,m.whiteTop,Math.min(.012,t*.12),z),i.box(-t*.32,t*.32,1.05+n*.14,1.05+n*.82,e*.42,e*.55,m.body,m.bodyTop,tt),i.seg(-t*.16,1.05+n*.2,e*.56,t*.16,1.05+n*.2,e*.56,rt)}function z1(i,t,e,n){i.pad(-t/2,t/2,.3,.3+n,-e/2,e/2,m.white,m.whiteTop,Math.min(.012,t*.12),z);for(let s of[-t*.17,t*.17])i.cyl(s,e*.51,t*.065,.3+n*.38,.3+n*.43,m.dark,m.dark,8,tt);i.seg(-t*.12,.3+n*.18,e*.55,t*.12,.3+n*.18,e*.55,rt)}function k1(i,t,e,n){i.pad(-t/2,t/2,.3,.3+n,-e/2,e/2,m.body,m.bodyTop,Math.min(.014,t*.12),z),i.cyl(0,e*.49,t*.27,.3+n*.28,.3+n*.34,m.dark,m.dark,14,tt),i.box(-t*.25,t*.25,.3+n*.1,.3+n*.17,e*.48,e*.56,m.accent,m.accent,rt)}function V1(i,t,e,n){i.pad(-t/2,t/2,1.9,1.9+n,-e/2,e/2,m.white,m.whiteTop,Math.min(.014,t*.13),z),i.loft([-t*.38,t*.38,e*.4,e*.55],[-t*.27,t*.27,e*.43,e*.58],1.9+n*.3,1.9+n*.78,m.glass,m.glass,rt);for(let s=0;s<3;s++)i.seg(-t*.23,1.9+n*(.39+s*.1),e*.59,t*.23,1.9+n*(.39+s*.1),e*.59,tt)}function G1(i,t,e,n){i.pad(-t/2,t*.12,1.1,1.1+n,-e/2,e/2,m.white,m.whiteTop,Math.min(.008,n*.14),z),i.pad(t*.24,t/2,1.1+n*.12,1.1+n*.88,-e*.42,e*.42,m.metal,m.metal,Math.min(.006,n*.1),tt),i.seg(-t*.28,1.1+n*.16,e*.54,-t*.03,1.1+n*.16,e*.54,rt)}function H1(i,t,e,n){let r=Math.min(t,e)*.47;i.cyl(0,0,r,0,n,m.white,m.whiteTop,12,z),i.cyl(0,e*.12,r*.2,n,n*1.08,m.accent,m.accent,8,rt);for(let s of[-t*.24,t*.24])i.box(s-t*.055,s+t*.055,0,n*.12,-e*.18,e*.18,m.metal,m.metal,tt)}function W1(i,t,e,n){i.pad(-t/2,t/2,1.35,1.35+n,-e/2,e/2,m.white,m.whiteTop,Math.min(.012,t*.12),z),i.box(-t*.35,t*.35,1.35+n*.3,1.35+n*.78,e*.46,e*.55,m.glass,m.glass,rt),i.seg(-t*.22,1.35+n*.18,e*.56,t*.22,1.35+n*.18,e*.56,tt)}function X1(i,t,e,n){i.pad(-t/2,t/2,1.25,1.25+n,-e/2,e/2,m.dark,m.bodyTop,Math.min(.012,t*.18),z),i.cyl(0,e*.48,t*.25,1.25+n*.67,1.25+n*.7,m.glass,m.glass,12,rt),i.cyl(0,e*.49,t*.2,1.25+n*.18,1.25+n*.21,m.body,m.bodyTop,12,tt),i.seg(-t*.18,1.25+n*.1,e*.56,t*.18,1.25+n*.1,e*.56,rt)}var lp={air_purifier:({b:i,w:t,d:e,h:n})=>(_1(i,t,e,n),.5),smart_speaker:({b:i,w:t,d:e,h:n})=>(y1(i,t,e,n),.5),security_camera:({b:i,w:t,d:e,h:n})=>(v1(i,t,e,n),!1),smart_lock:({b:i,w:t,d:e,h:n})=>(M1(i,t,e,n),!1),smart_curtain:({b:i,w:t,d:e,h:n})=>(S1(i,t,e,n),!1),network_cabinet:({b:i,w:t,d:e,h:n})=>(T1(i,t,e,n),.5),nas_server:({b:i,w:t,d:e,h:n})=>(w1(i,t,e,n),.5),access_point:({b:i,w:t,d:e,h:n})=>(E1(i,t,e,n),!1),wall_thermostat:({b:i,w:t,d:e,h:n})=>(A1(i,t,e,n),!1),smoke_detector:({b:i,w:t,d:e,h:n})=>(R1(i,t,e,n),!1),siren_alarm:({b:i,w:t,d:e,h:n})=>(C1(i,t,e,n),!1),electrical_panel:({b:i,w:t,d:e,h:n})=>(I1(i,t,e,n),!1),ups_unit:({b:i,w:t,d:e,h:n})=>(P1(i,t,e,n),.5),heat_pump_outdoor:({b:i,w:t,d:e,h:n})=>(F1(i,t,e,n),.5),hot_water_tank:({b:i,w:t,d:e,h:n})=>(D1(i,t,e,n),.5),ventilation_fan:({b:i,w:t,d:e,h:n})=>(U1(i,t,e,n),!1),humidifier:({b:i,w:t,d:e,h:n})=>(N1(i,t,e,n),.5),wall_switch:({b:i,w:t,d:e,h:n})=>(B1(i,t,e,n),!1),wall_outlet:({b:i,w:t,d:e,h:n})=>(z1(i,t,e,n),!1),smart_plug:({b:i,w:t,d:e,h:n})=>(k1(i,t,e,n),!1),motion_sensor:({b:i,w:t,d:e,h:n})=>(V1(i,t,e,n),!1),contact_sensor:({b:i,w:t,d:e,h:n})=>(G1(i,t,e,n),!1),water_leak_sensor:({b:i,w:t,d:e,h:n})=>(H1(i,t,e,n),.5),temperature_humidity_sensor:({b:i,w:t,d:e,h:n})=>(W1(i,t,e,n),!1),video_doorbell:({b:i,w:t,d:e,h:n})=>(X1(i,t,e,n),!1),modem_router:({b:i,w:t,d:e,h:n,base:r})=>(L1(i,t,e,n),r>.05?!1:.5),smart_display:({b:i,w:t,d:e,h:n,base:r})=>(O1(i,t,e,n),r>.05?!1:.5)};function Rl(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,rt)}}function Y1(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,m.body,m.bodyTop,z),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,m.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,rt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,m.whiteTop,m.whiteTop,z)}function cp(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,m.white,m.whiteTop,z);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,tt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,rt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42);Rl(i,0,o,a,s),r||Rl(i,0,o,a*.72,s)}function q1(i,t,e,n){let r=Math.min(.035,n*.025),s=(n-r)/2,o=e/2-.012;for(let a=0;a<2;a++){let l=a*(s+r);i.box(-t/2,t/2,l,l+s,-e/2,e/2-.02,m.white,m.whiteTop,z),i.seg(-t/2,l+s-.14,o,t/2,l+s-.14,o,tt),i.seg(t/2-.16,l+s-.07,o,t/2-.08,l+s-.07,o,rt);let c=l+(s-.14)/2+.04,u=Math.min(t*.34,(s-.2)*.42);Rl(i,0,c,u,o),a===0&&Rl(i,0,c,u*.72,o+.002)}i.box(-t*.46,t*.46,s,s+r,-e*.46,e*.46,m.dark,m.metal,tt)}function $1(i,t,e,n){let r=Math.min(.045,t*.035);for(let o of[-t*.4,t*.4])i.box(o-r,o+r,0,n*.88,-e*.32,-e*.23,m.metal,m.metal,z),i.box(o-r,o+r,0,n*.62,e*.23,e*.32,m.metal,m.metal,z);i.loft([-t/2,t/2,-e*.43,e*.43],[-t/2,t/2,-e*.38,e*.48],n*.88,n*.98,m.dark,m.glass,rt);let s=n*.985;for(let o=1;o<6;o++)i.seg(-t/2+t*o/6,s,-e*.37,-t/2+t*o/6,s,e*.47,tt);for(let o=1;o<3;o++)i.seg(-t/2,s,-e*.37+e*.84*o/3,t/2,s,-e*.37+e*.84*o/3,tt);i.box(-t*.16,t*.16,n*.34,n*.48,e*.2,e*.34,m.body,m.bodyTop,z),i.seg(-t*.1,n*.43,e*.345,t*.1,n*.43,e*.345,rt)}var hp={dishwasher:({b:i,w:t,d:e,h:n})=>(Y1(i,t,e,n),.5),washer:({b:i,w:t,d:e,h:n})=>(cp(i,t,e,n,!1),.5),dryer:({b:i,w:t,d:e,h:n})=>(cp(i,t,e,n,!0),.5),washer_dryer_tower:({b:i,w:t,d:e,h:n})=>(q1(i,t,e,n),.5),balcony_solar:({b:i,w:t,d:e,h:n})=>($1(i,t,e,n),.5)},up=(i,t,e)=>{let n=(e-.14)/2+.04,r=Math.min(i*.36,(e-.2)*.42)*.8;return{x0:-r,x1:r,y0:n-r,y1:n+r,z:t/2-.004}},fp={dishwasher:(i,t,e)=>({x0:-i/2+.06,x1:i/2-.06,y0:e-.16,y1:e-.08,z:t/2-.004}),washer:up,dryer:up,washer_dryer_tower:(i,t,e)=>({x0:i*.22,x1:i*.39,y0:e*.91,y1:e*.96,z:t/2-.004}),balcony_solar:(i,t,e)=>({x0:-i*.1,x1:i*.1,y0:e*.4,y1:e*.46,z:t*.35})};var Z1={...rp,...op,...Jd,...Zd,...lp,...Qd,...ap,...hp},K1={...fp};function dp(i,t){let e=Z1[i];return e?e(t):null}function pp(i,t,e,n){let r=K1[i];return r?r(t,e,n):void 0}function zu(i,t){let e=J1(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function J1(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=bd(i.type);if(s){let l=t?pn(t,i):0,c=(s.x-s.w/2)*e,u=(s.x+s.w/2)*e,f=Math.min(.02,(u-c)*.05);return{x0:c+f,x1:u-f,y0:l+s.y*r+f,y1:l+(s.y+s.h)*r-f,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?pn(t,i)-Xs(i):0,a=Q1(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function Q1(i,t,e,n,r){let s=pp(i.type,t,e,n);if(s!==void 0)return s;if(i.type==="tv_board"){let o=Math.min(t*.8,1.45),a=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+a,z:-e/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:o+.02,y1:o+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let o=r?pn(r,i):0;return{x0:.06,x1:t/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:wl+.02,y1:wl+n-.02,z:e/2+.004};if(i.type==="air_conditioner")return{x0:-t*.43,x1:t*.43,y0:El+n*.08,y1:El+n*.27,z:e/2+.008};if(i.type==="water_pump")return{x0:-t*.1,x1:t*.1,y0:n*.56,y1:n*.65,z:e*.3+.004};if(i.type==="water_heater"){let o=Math.min(e*.88,n*.92),a=(n-o)/2;return{x0:t*.18,x1:t*.4,y0:a+o*.38,y1:a+o*.68,z:e*.48+.006}}return i.type==="range_hood"?{x0:-t*.4,x1:t*.4,y0:.005,y1:n*.06,z:e/2+.003}:i.type==="microwave"?{x0:-t*.4,x1:t*.18,y0:n*.17,y1:n*.82,z:e/2+.008}:i.type==="water_purifier"?{x0:-t*.28,x1:t*.28,y0:n*.8*.56,y1:n*.8*.64,z:e/2+.016}:i.type==="air_purifier"?{x0:-t*.11,x1:t*.11,y0:n*.66,y1:n*.74,z:e/2+.008}:i.type==="robot_mower"?{x0:-t*.22,x1:t*.22,y0:n*.16,y1:n*.24,z:e*.31+.008}:i.type==="smart_speaker"?{x0:-t*.42,x1:t*.42,y0:n*.9,y1:n+.008,z:e*.05}:i.type==="security_camera"?{x0:-t*.12,x1:t*.12,y0:1.85+n*.37,y1:1.85+n*.58,z:e*.53}:i.type==="smart_lock"?{x0:-t*.36,x1:t*.36,y0:.95+n*.43,y1:.95+n*.78,z:e/2+.006}:i.type==="network_cabinet"?{x0:-t*.22,x1:t*.22,y0:n*.82,y1:n*.86,z:e*.545}:i.type==="nas_server"?{x0:-t*.34,x1:t*.34,y0:n*.18,y1:n*.205,z:e*.54}:i.type==="access_point"?{x0:-t*.16,x1:t*.16,y0:n*.12,y1:n*.24,z:e*.47}:i.type==="wall_thermostat"?{x0:-t*.37,x1:t*.37,y0:1.35+n*.34,y1:1.35+n*.82,z:e*.54}:i.type==="smoke_detector"?{x0:-t*.1,x1:t*.1,y0:n*.05,y1:n*.22,z:e*.47}:i.type==="siren_alarm"?{x0:-t*.32,x1:t*.32,y0:1.85+n*.48,y1:1.85+n*.82,z:e*.58}:i.type==="electrical_panel"?{x0:-t*.34,x1:t*.34,y0:.85+n*.2,y1:.85+n*.8,z:e*.56}:i.type==="ups_unit"?{x0:-t*.32,x1:t*.32,y0:n*.58,y1:n*.78,z:e*.54}:i.type==="modem_router"?{x0:-t*.25,x1:t*.25,y0:n*.16,y1:n*.3,z:e*.54}:i.type==="heat_pump_outdoor"?{x0:t*.32,x1:t*.41,y0:n*.62,y1:n*.69,z:e*.56}:i.type==="hot_water_tank"?{x0:-t*.12,x1:t*.12,y0:n*.57,y1:n*.66,z:e*.49}:i.type==="ventilation_fan"?{x0:-t*.12,x1:t*.12,y0:1.8+n*.44,y1:1.8+n*.58,z:e*.45}:i.type==="humidifier"?{x0:-t*.35,x1:t*.35,y0:n*.61,y1:n*.69,z:e*.55}:i.type==="smart_display"?{x0:-t*.39,x1:t*.39,y0:n*.35,y1:n*.89,z:e*.24}:i.type==="wall_switch"?{x0:-t*.2,x1:t*.2,y0:1.05+n*.13,y1:1.05+n*.25,z:e*.56}:i.type==="wall_outlet"?{x0:-t*.16,x1:t*.16,y0:.3+n*.12,y1:.3+n*.24,z:e*.56}:i.type==="smart_plug"?{x0:-t*.25,x1:t*.25,y0:.3+n*.1,y1:.3+n*.17,z:e*.56}:i.type==="motion_sensor"?{x0:-t*.27,x1:t*.27,y0:1.9+n*.3,y1:1.9+n*.78,z:e*.59}:i.type==="contact_sensor"?{x0:-t*.28,x1:-t*.03,y0:1.1+n*.1,y1:1.1+n*.24,z:e*.54}:i.type==="water_leak_sensor"?{x0:-t*.2,x1:t*.2,y0:n*.72,y1:n*1.08,z:e*.12}:i.type==="temperature_humidity_sensor"?{x0:-t*.35,x1:t*.35,y0:1.35+n*.3,y1:1.35+n*.78,z:e*.55}:i.type==="video_doorbell"?{x0:-t*.2,x1:t*.2,y0:1.25+n*.06,y1:1.25+n*.18,z:e*.56}:null}function Ou(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new at(1-r,1-r,1-r),a=new at(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],u=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],f=d=>[d[0],l,d[1]],h=i.p.length;i.tri(f(c[0]),f(c[1]),f(c[2]),o),i.tri(f(c[0]),f(c[2]),f(c[3]),o);for(let d=0;d<4;d++){let g=(d+1)%4;i.tri(f(c[d]),f(u[d]),f(u[g]),o,a,a),i.tri(f(c[d]),f(u[g]),f(c[g]),o,a,o)}Pu(t)&&ar(i,h)}function Cl(i,t,e,n,r=0){j1(i,t,e,n,r)}function j1(i,t,e,n,r){let s=De(n.type)?0:r-Xs(n);if(De(n.type)||Math.abs(s)<.001)return mp(i,t,e,n,r);let o=i.p.length,a=t.p.length,l=e.p.length;mp(i,t,r<.05?e:new ce,n,0);for(let c=o+1;c<i.p.length;c+=3)i.p[c]+=s;for(let c=a+1;c<t.p.length;c+=3)t.p[c]+=s;for(let c=l+1;c<e.p.length;c+=3)e.p[c]+=s}function mp(i,t,e,n,r){let s=n.rotation*ie,o=Math.cos(s),a=Math.sin(s),l=n.mirror?-1:1,c=(x,p)=>[n.x+l*x*o-p*a,n.z+l*x*a+p*o],u=new qn(i,t,c),f=Math.max(.05,n.w),h=Math.max(.05,n.d),d=Math.max(.005,n.h),g=dp(n.type,{b:u,w:f,d:h,h:d,base:r,variant:n.variant??null});if(g!==null){g!==!1&&Ou(e,c,f,h,g);return}let b=De(n.type);if(b){ku(u,b,f,h,d,r,null),r<=.05&&Ou(e,c,f,h,.5);return}u.box(-f/2,f/2,0,d,-h/2,h/2,m.body,m.bodyTop,z),Ou(e,c,f,h,.5)}function Bu(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=m;return(t?e[`${i}Top`]:void 0)??e[i]??null}function ku(i,t,e,n,r,s,o,a=null){let l=!!a;for(let c of t.parts){if(a&&!a(c))continue;let u=l?{...c,glow:!0,w:c.w+.006/e,d:c.d+.006/n,y:Math.max(0,c.y-.002/r),h:c.h+.004/r}:c,f=u.glow&&o!==null,h=f?o:Bu(u.color,!1)??m.body,d=f?o:Bu(u.top,!1)??Bu(u.color,!0)??Ht(h,1.25).getHex(),g=s+u.y*r,b=s+Math.min(r,(u.y+u.h)*r),x=u.edges==="glow"?sr:u.edges==="faint"?tt:u.edges?z:null,p=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))p.lyingCyl(u.axis,u.x*e,u.z*n,g,b,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,h,d,14,x);else if(u.shape==="cyl")p.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,g,b,h,d,14,x);else if(u.shape==="loft"){let y=u.tx??u.x,M=u.tz??u.z,v=u.tw??u.w,S=u.td??u.d;p.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(y-v/2)*e,(y+v/2)*e,(M-S/2)*n,(M+S/2)*n],g,b,h,d,x)}else p.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,g,b,(u.z-u.d/2)*n,(u.z+u.d/2)*n,h,d,x)}}function gp(i,t,e,n,r,s){let o=s*ie,a=Math.cos(o),l=Math.sin(o),c=(g,b)=>[e+g*a-b*l,r+g*l+b*a],u=new qn(i,new Ve,c),f=1713728,h=2373216,d=725279;if(t==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,f,h,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,f),u.cyl(0,0,.012,n-.075,n-.06,m.accent,m.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,f,h),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,f,h),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,f,h),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,m.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Vu(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*ie,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,u=(f,h)=>[e.x+c*f*a-h*l,e.z+c*f*l+h*a];ku(new qn(i,new Ve,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function Il(i,t,e,n,r){let s=e.rotation*ie,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(u,f)=>[e.x+l*u*o-f*a,e.z+l*u*a+f*o];ku(new qn(i,new Ve,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var We={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Qr={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}};var tM={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5}},eM={canopy:{color:We.wallTop,side:We.wall,edge:We.edge,edgeAlpha:.5},veranda:{color:We.wallTop,side:We.wall,edge:We.edge,edgeAlpha:.58},balcony:{color:We.wallTop,side:We.wall,edge:We.edge,edgeAlpha:.58}},nM=.35,yp=3232102,iM=5404812,rM=5,sM=i=>i.type==="canopy"||i.type==="veranda"||i.type==="balcony";function xp(i,t){let e=i.roof_style==="glass"?3234418:i.roomColor??t.color,n=i.roof_style==="glass"?2112592:t.side;return{roof:e,under:n}}function vp(i,t){return ai(i)+(t.offset??0)+(oi(t.type)?.01:qr[t.type])}function Zn(i){return rr(i)>=0?i:[...i].reverse()}function oM(i,t){let e=i[t];if(oi(e.type)||e.type==="pool")return[];let n=[];for(let r=t+1;r<i.length;r++){let s=i[r];!s.cut||s.points.length<3||s.points.every(o=>ue(o,e.points))&&n.push(Zn(s.points))}return n}function Mn(i,t,e,n,r,s,o,a){let l=e[0]-t[0],c=e[1]-t[1],u=Math.hypot(l,c);if(u<1e-6)return;let f=-c/u*n*.5,h=l/u*n*.5;me(i,Zn([[t[0]+f,t[1]+h],[e[0]+f,e[1]+h],[e[0]-f,e[1]-h],[t[0]-f,t[1]-h]]),r,s,o,a,{aoFrom:r-1})}function Kn(i,t,e,n,r){i.seg([t[0],n+.004,t[1]],[e[0],n+.004,e[1]],r,Xt)}function bp(i,t,e,n,r,s,o){for(let[a,l]of[[-n,-n],[n,-n],[n,n],[-n,n]])i.seg([t+a,r,e+l],[t+a,s,e+l],o,Xt)}function Pl(i,t,e,n,r,s,o,a,l){let c=Math.hypot(n[0]-e[0],n[1]-e[1]);if(c<.04||s<.2)return;Mn(i,e,n,.14,r,r+Math.min(.24,s*.24),o,a),Mn(i,e,n,.07,r+s*.5,r+s*.57,o,a),Mn(i,e,n,.1,r+s-.1,r+s,o,a),Kn(t,e,n,r+Math.min(.24,s*.24),l),Kn(t,e,n,r+s*.57,l),Kn(t,e,n,r+s,l);let u=Math.max(2,Math.ceil(c/.22));for(let f=0;f<=u;f++){let h=f/u,d=e[0]+(n[0]-e[0])*h,g=e[1]+(n[1]-e[1])*h;me(i,Zn([[d-.018,g-.018],[d+.018,g-.018],[d+.018,g+.018],[d-.018,g+.018]]),r+.12,r+s-.07,o,a),t.seg([d,r+.12,g],[d,r+s-.07,g],l,Xt)}}function aM(i,t,e,n,r,s,o,a,l){let c=n[0]-e[0],u=n[1]-e[1],f=Math.hypot(c,u);if(f<.3)return;let h=c/f,d=u/f,g=M=>[e[0]+h*M,e[1]+d*M],b=(M,v,S,w)=>{let[A,_]=g(M);me(i,Zn([[A-v,_-v],[A+v,_-v],[A+v,_+v],[A-v,_+v]]),S,w,o,a)},x=Math.min(.45,s*.32),p=M=>r+s+x*Math.sin(Math.PI*M),y=Math.max(8,Math.ceil(f/.18));Mn(i,e,n,.11,r+.06,r+.16,o,a),Mn(i,e,n,.08,r+s*.47,r+s*.54,o,a),Kn(t,e,n,r+.16,l),Kn(t,e,n,r+s*.54,l);for(let M=0;M<=y;M++){let v=M/y,S=M===0||M===y||Math.abs(v-.5)<.5/y;b(f*v,S?.038:.016,r+.08,p(v)-.04);let[w,A]=g(f*v);if(t.seg([w,r+.08,A],[w,p(v)-.04,A],l,Xt),M<y){let _=g(f*v),T=g(f*(M+1)/y),C=(p(v)+p((M+1)/y))/2;Mn(i,_,T,.075,C-.045,C+.02,o,a),Kn(t,_,T,C+.02,l)}}}function _p(i,t,e,n,r,s,o=Xt){let a=new at(s),l=new at(Ht(r,.72)),c=new at(r);for(let[u,f,h]of Kr(t)){let d=t[u],g=t[f],b=t[h],x=[d[0],e(d[0],d[1]),d[1]],p=[g[0],e(g[0],g[1]),g[1]],y=[b[0],e(b[0],b[1]),b[1]],M=[x[0],x[1]-n,x[2]],v=[p[0],p[1]-n,p[2]],S=[y[0],y[1]-n,y[2]];i.tri(x,y,p,a,a,a,void 0,o),i.tri(M,v,S,l,l,l,void 0,o)}for(let u=0;u<t.length;u++){let f=t[u],h=t[(u+1)%t.length],d=[f[0],e(f[0],f[1]),f[1]],g=[h[0],e(h[0],h[1]),h[1]],b=[d[0],d[1]-n,d[2]],x=[g[0],g[1]-n,g[2]];i.tri(b,d,g,c,c,c,void 0,o),i.tri(b,g,x,c,c,c,void 0,o)}}function lM(i,t,e){let n=yl(i,t),r=eo(i,e),s=r[n],o=r[(n+1)%r.length],a=o[0]-s[0],l=o[1]-s[1],c=Math.hypot(a,l);if(c<1e-6)return r;let u=Math.max(0,nM-e),f=l/c*u,h=-a/c*u;return r.map(([d,g],b)=>b===n||b===(n+1)%r.length?[d+f,g+h]:[d,g])}function cM(i,t,e,n,r){let s=[];for(let a=0;a<i.length;a++){let l=i[a],c=i[(a+1)%i.length],u=l[0]-t[0],f=l[1]-t[1],h=c[0]-t[0],d=c[1]-t[1],g=u*n[0]+f*n[1],b=h*n[0]+d*n[1];if(!(g<=r&&b>r||b<=r&&g>r))continue;let x=(r-g)/(b-g),p=u*e[0]+f*e[1],y=h*e[0]+d*e[1];s.push(p+(y-p)*x)}s.sort((a,l)=>a-l);let o=[];for(let a=0;a+1<s.length;a+=2)s[a+1]-s[a]>.05&&o.push([s[a],s[a+1]]);return o}function uM(i,t,e,n,r){let s=t[n],o=t[(n+1)%t.length],a=o[0]-s[0],l=o[1]-s[1],c=Math.hypot(a,l);if(c<1e-6)return;let u=s,f=[a/c,l/c],h=[f[1],-f[0]],d=t.map(([M,v])=>(M-u[0])*f[0]+(v-u[1])*f[1]),g=Math.min(...d),b=Math.max(...d),x=Math.max(1,Math.ceil((b-g)/.18)),p=new at(yp),y=new at(iM);for(let M=0;M<x;M++){let v=g+(M+.5)*(b-g)/x;for(let[S,w]of cM(t,u,h,f,v)){let A=[u[0]+h[0]*S+f[0]*v,u[1]+h[1]*S+f[1]*v],_=[u[0]+h[0]*w+f[0]*v,u[1]+h[1]*w+f[1]*v],T=_[0]-A[0],C=_[1]-A[1],I=Math.hypot(T,C),L=-C/I*.018,P=T/I*.018,E=-C/I*.007,D=T/I*.007,U=(K,ht)=>[K[0],e(K[0],K[1])+ht,K[1]],N=U([A[0]+L,A[1]+P],.004),k=U([A[0]-L,A[1]-P],.004),B=U([_[0]+L,_[1]+P],.004),G=U([_[0]-L,_[1]-P],.004),V=U([A[0]+E,A[1]+D],.03),nt=U([A[0]-E,A[1]-D],.03),$=U([_[0]+E,_[1]+D],.03),ot=U([_[0]-E,_[1]-D],.03);i.tri(V,$,ot,y,y,y,void 0,r),i.tri(V,ot,nt,y,y,y,void 0,r),i.tri(N,B,$,p,p,p,void 0,r),i.tri(N,$,V,p,p,p,void 0,r),i.tri(nt,ot,G,p,p,p,void 0,r),i.tri(nt,G,k,p,p,p,void 0,r)}}}function Mp(i,t,e,n,r){let s=ai(e),o=[];return n.forEach((a,l)=>{if(a.points.length<3)return;let c=i.count,u,f,h=s+(a.offset??0),d=(w,A)=>h-qs(a,w,A),g=h-(a.type==="pool"?0:a.slope??0),b=sM(a),x=b?a.height??2.4:oi(a.type)&&a.height?a.height:qr[a.type],p={...b?eM[a.type]:tM[a.type],top:x},y=Zn(a.points),M=Ht(p.edge,p.edgeAlpha),v=a.open&&(a.type==="fence"||a.type==="pergola"||b)?y.length-1:-1,S=(w,A=Xt)=>{if(a.outline!==!1)for(let _=0;_<y.length;_++){if(_===v)continue;let T=y[_],C=y[(_+1)%y.length];t.seg([T[0],w(T[0],T[1]),T[1]],[C[0],w(C[0],C[1]),C[1]],M,A)}};switch(a.type){case"pool":{let w=new at(p.color);for(let[_,T,C]of Kr(y)){let I=y[_],L=y[T],P=y[C];i.tri([I[0],h+p.top,I[1]],[P[0],h+p.top,P[1]],[L[0],h+p.top,L[1]],w,w,w,void 0,Xt)}let A=new at(p.side);for(let _=0;_<y.length;_++){let T=y[_],C=y[(_+1)%y.length];i.tri([C[0],h+p.top,C[1]],[C[0],h+.06,C[1]],[T[0],h+.06,T[1]],A,A,A,void 0,Xt),i.tri([C[0],h+p.top,C[1]],[T[0],h+.06,T[1]],[T[0],h+p.top,T[1]],A,A,A,void 0,Xt)}S(()=>h+.06),S(()=>h+p.top+.005);break}case"fence":{for(let w=0;w<y.length;w++){if(w===v)continue;let A=y[w],_=y[(w+1)%y.length],T=Math.hypot(_[0]-A[0],_[1]-A[1]),C=Math.max(1,Math.round(T/2)),I=v>=0&&w===v-1?C:C-1;for(let L=0;L<=I;L++){let P=L/C,E=A[0]+(_[0]-A[0])*P,D=A[1]+(_[1]-A[1])*P,U=d(E,D);me(i,Zn([[E-.04,D-.04],[E+.04,D-.04],[E+.04,D+.04],[E-.04,D+.04]]),U,U+p.top,p.side,p.color)}for(let L of[.35,.85])t.seg([A[0],d(A[0],A[1])+L*p.top,A[1]],[_[0],d(_[0],_[1])+L*p.top,_[1]],M,Xt)}break}case"pergola":{let w=p.top;for(let[A,_]of y){let T=d(A,_);me(i,Zn([[A-.06,_-.06],[A+.06,_-.06],[A+.06,_+.06],[A-.06,_+.06]]),T,T+w,p.side,p.color)}for(let A=0;A<y.length;A++){if(A===v)continue;let _=y[A],T=y[(A+1)%y.length],C=d(_[0],_[1])+w;if(Mn(i,_,T,.12,C-.16,C,p.side,p.color),a.bracing){let I=d(_[0],_[1]),L=d(T[0],T[1]);t.seg([_[0],I+.25,_[1]],[T[0],L+w-.25,T[1]],M,Xt),t.seg([T[0],L+.25,T[1]],[_[0],I+w-.25,_[1]],M,Xt)}}if(Td(y)){let A=wd(y),_=A.x1-A.x0,T=A.z1-A.z0,C=_>=T,I=C?_:T,L=Math.max(1,Math.round(I/.6));for(let P=1;P<L;P++){let E=(C?A.x0:A.z0)+I*P/L,D=C?[E,A.z0+.06]:[A.x0+.06,E],U=C?[E,A.z1-.06]:[A.x1-.06,E],N=d(D[0],D[1])+w;Mn(i,D,U,.06,N-.04,N+.08,p.side,p.color)}}S((A,_)=>d(A,_)+w+.004);break}case"canopy":{let w=p.top,A=xp(a,p),_=h+Ys(a.type),T=(D,U)=>_+w-qs(a,D,U),C=yl(y,v),I=r===Xt?Xt:r+rM*16,L=Math.min(.4,Math.max(.04,(a.column_size??.12)/2)),P=Math.max(L,(a.wallThickness??.24)/2);for(let[D,U]of y){let N=T(D,U)-.08;me(i,Zn([[D-L,U-L],[D+L,U-L],[D+L,U+L],[D-L,U+L]]),_,N,A.under,A.roof),bp(t,D,U,L,_,N,M)}if(a.railing!==!1&&w>=.4){let D=Math.min(1.45,w*.62);for(let U=0;U<y.length;U++){if(U===v)continue;let N=y[U],k=y[(U+1)%y.length];if(U!==C){Pl(i,t,N,k,_,D,A.under,A.roof,M);continue}let B=Math.hypot(k[0]-N[0],k[1]-N[1]);if(B<.6){Pl(i,t,N,k,_,D,A.under,A.roof,M);continue}let G=Math.min(2.4,Math.max(.9,B*.45),Math.max(.3,B-.3)),V=Math.max(0,(B-G)/(2*B)),nt=Math.min(1,1-V),$=[N[0]+(k[0]-N[0])*V,N[1]+(k[1]-N[1])*V],ot=[N[0]+(k[0]-N[0])*nt,N[1]+(k[1]-N[1])*nt];Pl(i,t,N,$,_,D,A.under,A.roof,M),Pl(i,t,ot,k,_,D,A.under,A.roof,M),aM(i,t,$,ot,_,D,A.under,A.roof,M)}}for(let D=0;D<y.length;D++){if(D===v)continue;let U=y[D],N=y[(D+1)%y.length],k=(T(U[0],U[1])+T(N[0],N[1]))/2;Mn(i,U,N,.12,k-.18,k-.08,A.under,A.roof),Kn(t,U,N,k-.08,M)}let E=lM(y,v,P);if(u=i.count,_p(i,E,T,.045,A.under,yp,I),uM(i,E,T,C,I),f=i.count,a.outline!==!1)for(let D=0;D<E.length;D++){if(D===v)continue;let U=E[D],N=E[(D+1)%E.length];t.seg([U[0],T(U[0],U[1])+.034,U[1]],[N[0],T(N[0],N[1])+.034,N[1]],M,I)}break}case"balcony":case"veranda":{let w=p.top,A=a.type==="veranda",_=xp(a,p),T=h+Ys(a.type),C=(V,nt)=>T,I=(V,nt)=>T+w-qs(a,V,nt),L=A?I:(V,nt)=>T+w,P=Math.min(1.1,w*.48),E=(V,nt,$,ot,K,ht=p.side,X=p.color)=>{me(i,Zn([[V-$,nt-$],[V+$,nt-$],[V+$,nt+$],[V-$,nt+$]]),ot,K,ht,X),bp(t,V,nt,$,ot,K,M)};if(a.railing!==!1)for(let V=0;V<y.length;V++){if(V===v)continue;let nt=y[V],$=y[(V+1)%y.length],ot=Math.hypot($[0]-nt[0],$[1]-nt[1]),K=Math.max(1,Math.ceil(ot/.36)),ht=T;Mn(i,nt,$,.07,ht+.3,ht+.38,_.under,_.roof),Mn(i,nt,$,.09,ht+P-.09,ht+P,_.under,_.roof),Kn(t,nt,$,ht+.38,M),Kn(t,nt,$,ht+P,M);for(let X=0;X<=K;X++){let J=X/K,ft=nt[0]+($[0]-nt[0])*J,mt=nt[1]+($[1]-nt[1])*J,pt=C(ft,mt),At=.012;me(i,Zn([[ft-At,mt-At],[ft+At,mt-At],[ft+At,mt+At],[ft-At,mt+At]]),pt+.08,pt+P-.07,_.under,_.roof),t.seg([ft,pt+.08,mt],[ft,pt+P-.07,mt],M,Xt)}}let D=yl(y,v),U=y[D],N=y[(D+1)%y.length],k=Math.min(12,Math.max(0,Math.round(a.columns??2))),B=Math.min(.4,Math.max(.04,(a.column_size??.32)/2));for(let V=0;V<k;V++){let nt=k===1?.5:V/(k-1),$=U[0]+(N[0]-U[0])*nt,ot=U[1]+(N[1]-U[1])*nt,K=C($,ot);E($,ot,B*1.375,K,K+.28,_.under,_.roof),E($,ot,B,K+.2,L($,ot)-.2,_.under,_.roof),E($,ot,B*1.375,L($,ot)-.28,L($,ot),_.under,_.roof),t.seg([$,K+.28,ot],[$,L($,ot)-.28,ot],M,Xt)}let G=(L(U[0],U[1])+L(N[0],N[1]))/2;Mn(i,U,N,Math.max(.2,B*2.6),G-.28,G,_.under,_.roof),Kn(t,U,N,G,M),A&&(u=i.count,_p(i,y,I,.1,_.under,_.roof,r),f=i.count,S((V,nt)=>I(V,nt)+.004,r)),S((V,nt)=>C(V,nt)+(a.railing===!1?.004:P+.004));break}default:{let w=(_,T)=>d(_,T)+p.top,A=oM(n,l);if(me(i,y,g,a.slope?w:h+p.top,p.side,p.color,{aoFrom:g,holes:A}),S((_,T)=>w(_,T)+.004),a.type==="hedge"&&S((_,T)=>d(_,T)+.004),a.outline!==!1)for(let _ of A)for(let T=0;T<_.length;T++){let C=_[T],I=_[(T+1)%_.length];t.seg([C[0],w(C[0],C[1])+.004,C[1]],[I[0],w(I[0],I[1])+.004,I[1]],M,Xt)}}}i.count>c&&o.push({id:a.id,start:c,end:i.count,...u!==void 0&&f!==void 0?{roofStart:u,roofEnd:f}:{}})}),o}function Sp(i,t,e){return Mp(i,t,e,e.outdoor??[],Xt)}function Tp(i,t,e,n,r=Xt){return Mp(i,t,e,n,r)}var Fl=Math.PI/180,hM=1.13,fM=1.72,Gu=.025,cr=.07,wp=.25;function Ep(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=Qs(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<1.2)continue;let c=a/l,u=-o/l,f=Math.min(n.height,s.height??n.height),h=(d,g,b,x)=>e.push({key:d,section:null,side:"top",flat:!1,o:g,eu:b,es:[0,1,0],n:x,lu:l,ls:f,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:{floorId:n.id}});h(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+u*s.right],[o/l,0,a/l],[c,0,u]),s.free&&h(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-u*s.left],[-o/l,0,-a/l],[-c,0,-u])}}return e}var Hu="ground";function Wu(i){return[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation)[0]??i.floors[0]??null}function Ap(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=Wu(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:_l(s,o,a)):t.base??0;return{key:Hu,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function dM(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function jr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(y=>pM(y,Ml(i,y,y.overhang??t.overhang)));let e=dM(i);if(!e)return[];let n=e.rooms.flatMap(y=>y.points.map(M=>M[0])),r=e.rooms.flatMap(y=>y.points.map(M=>M[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=e.elevation+e.height;if(t.type==="flat")return[Rp("main",null,o,l,a,c,u+wp)];let f=a-o>=c-l,h=t.ridge==="short"?!f:f,d=(h?c-l:a-o)/2,g=d*Math.tan(t.pitch*Fl),b=(y,M,v)=>h?[y,u+v,(l+c)/2+M]:[(o+a)/2+M,u+v,y],[x,p]=h?[o,a]:[l,c];return[-1,1].map(y=>Ll(`main:${y<0?"a":"b"}`,null,y<0?"a":"b",b(x,y*d,0),b(p,y*d,0),b(x,0,g),t.pitch,()=>[0,p-x]))}function pM(i,t){let e=Yn(i),n=Fn(i),r=(b,x,p)=>{let[y,M]=e.at(b,x);return[y,p,M]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let b=e.at(a,-s),x=e.at(l,e.w+o);return[Rp(i.id,i.id,Math.min(b[0],x[0]),Math.min(b[1],x[1]),Math.max(b[0],x[0]),Math.max(b[1],x[1]),i.eave_a+wp)]}if(i.shape==="pent")return[Ll(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",f=i.shape==="pyramid"?(e.u1-e.u0)/2:u?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,h=u?e.u0+f-a:0,d=u?l-(e.u1-f):0,g=[];if(n.vr>.3){let b=Math.hypot(n.vr+s,n.rh-n.y(-s));g.push(Ll(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,x=>[h*(x/b),c-d*(x/b)]))}if(e.w-n.vr>.3){let b=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));g.push(Ll(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,x=>[d*(x/b),c-h*(x/b)]))}if(u){let b=n.y(-s),x=n.y(e.w+o),p=[[`${i.id}:c`,"c",r(a,e.w+o,x),r(a,-s,b),r(e.u0+f,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-s,b),r(l,e.w+o,x),r(e.u1-f,n.vr,n.rh)]];for(let[y,M,v,S,w]of p){let A=mM(y,i.id,M,v,S,w);A&&g.push(A)}}return g}function mM(i,t,e,n,r,s){let o=ro(ur(r,n));if(o<.3)return null;let a=Bi(ur(r,n)),l=ur(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],f=ro(u);if(f<.3)return null;let h=Bi(u),d=Bi(Pp(a,h));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let g=Bi([-h[0],0,-h[2]]),b=Math.atan2(h[1],Math.hypot(h[0],h[2]))/Fl;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:h,n:d,lu:o,ls:f,pitch:b,span:p=>{let y=Math.min(1,Math.max(0,p/f));return[c*y,o-(o-c)*y]},facing:[g[0],g[2]]}}function Ll(i,t,e,n,r,s,o,a){let l=Bi(ur(r,n)),c=Bi(ur(s,n)),u=Bi(Pp(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let f=Bi([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:ro(ur(r,n)),ls:ro(ur(s,n)),pitch:o,span:a,facing:[f[0],f[2]]}}function Rp(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Cp(i){let t=i.module_w||hM,e=i.module_h||fM;return i.portrait===!1?[e,t]:[t,e]}function gM(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Ip(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Fl:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Fl:0}function xM(i,t){let[,e]=Cp(t),n=Ip(i,t);return i.wall?e*Math.cos(n)+Gu:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Gu}function so(i,t,e=!1){let[n,r]=Cp(t),s=[],o=Ip(i,t),a=r*Math.cos(o),l=xM(i,t),c=gM(t),u=Math.max(1,...c),f=new Set(t.skip??[]),h=(g,b,x)=>[i.o[0]+i.eu[0]*g+i.es[0]*b+i.n[0]*x,i.o[1]+i.eu[1]*g+i.es[1]*b+i.n[1]*x,i.o[2]+i.eu[2]*g+i.es[2]*b+i.n[2]*x],d=(g,b)=>{if(i.unbounded)return!0;if(b<-1e-6||b>i.ls+1e-6)return!1;let[x,p]=i.span(b);return g>=x-1e-6&&g<=p+1e-6};return c.forEach((g,b)=>{let x=t.align==="right"?u-g:t.align==="center"?(u-g)/2:0;for(let p=0;p<g;p++){let y=`${b}:${p}`,M=f.has(y);if(M&&!e)continue;let v=t.u+(p+x)*(n+Gu),S=t.v+b*l,w=v+n,A=S+(i.flat||i.wall?a:r);if(![[v,S],[w,S],[w,A],[v,A]].every(([P,E])=>d(P,E)))continue;if(i.wall&&o>.001){let P=cr+r*Math.sin(o),[E,D]=t.flip?[P,cr]:[cr,P],U=[h(v,S,E),h(w,S,E),h(w,A,D),h(v,A,D)],N=t.flip?S:A,k=[v+.05,w-.05].map(B=>[h(B,N,0),h(B,N,P)]);s.push({corners:U,posts:k,cell:y,skipped:M});continue}if(!i.flat){s.push({corners:[h(v,S,cr),h(w,S,cr),h(w,A,cr),h(v,A,cr)],posts:[],cell:y,skipped:M});continue}let _=.15,T=_+r*Math.sin(o),[C,I]=t.flip?[A,S]:[S,A],L=[h(v,C,_),h(w,C,_),h(w,I,T),h(v,I,T)];s.push({corners:L,posts:[v+.05,w-.05].flatMap(P=>[[h(P,C,0),h(P,C,_)],[h(P,I,0),h(P,I,T)]]),cell:y,skipped:M})}}),s}function ur(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function ro(i){return Math.hypot(i[0],i[1],i[2])}function Bi(i){let t=ro(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function Pp(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var bM=.78,_M=1.18;function yM(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||bM,module_h:i.h||_M}}function Xu(i,t){let e=so(i,yM(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}var oo=1712952,ao=2239816,Dp=1318193,hr=Ht(3662079,.9),ts=Ht(5995775,.45),Oe=.14,vM=9427199,MM=13226982,SM=14936565,TM={black:{glass:new at(329483),edge:Ht(9082544,.32),cells:Ht(2766160,.22)},blue:{glass:new at(1386842),edge:Ht(10467583,.55),cells:Ht(4025599,.35)}},wM=Ht(13226982,.5),EM=Ht(13226982,.85),AM=Ht(16757575,.95),Lp=new at(2845583),Fp=new at(3818072);function RM(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Up(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:PM(i),r=e?.type==="custom"?LM(i,e.sections??[],e.overhang):n?[n]:[];return IM(i,r),CM(i,r,t),r}function CM(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(jr(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?Xu(o,s):null;if(!o||!a)continue;let l=o.section?t.find(I=>I.sections?.includes(o.section)):t[0];if(!l)continue;let c=l.floor.elevation+l.base,u=I=>[I[0],I[1]-c,I[2]],[f,h,d,g]=a.map(u),b=e.get(s.id)??{open:0,tilt:0,cover:0},x=(I,L)=>[I[0]+o.n[0]*L,I[1]+o.n[1]*L,I[2]+o.n[2]*L],p=(I,L,P)=>[I[0]+(L[0]-I[0])*P,I[1]+(L[1]-I[1])*P,I[2]+(L[2]-I[2])*P],y=b.open>.02||b.tilt>.02?AM:EM,M=[f,h,d,g].map(I=>x(I,.06));for(let I=0;I<4;I++)l.lines.seg(M[I],M[(I+1)%4],y);let v=(b.open>.02?30*Math.min(1,b.open):b.tilt>.5?12:0)*ie,S=Math.hypot(d[0]-h[0],d[1]-h[1],d[2]-h[2]),w=I=>{let L=o.es;return[I[0]-L[0]*S*Math.cos(v)+o.n[0]*S*Math.sin(v),I[1]-L[1]*S*Math.cos(v)+o.n[1]*S*Math.sin(v),I[2]-L[2]*S*Math.cos(v)+o.n[2]*S*Math.sin(v)]},A=x(g,.065),_=x(d,.065),T=w(A),C=w(_);l.solid.tri(T,C,_,Lp),l.solid.tri(T,_,A,Lp);for(let[I,L]of[[T,C],[C,_],[_,A],[A,T]])l.lines.seg(I,L,y);if(b.cover>.02){let I=Math.min(1,b.cover),L=x(p(A,T,I),.01),P=x(p(_,C,I),.01),E=x(A,.01),D=x(_,.01);l.solid.tri(L,P,D,Fp),l.solid.tri(L,D,E,Fp)}}}function IM(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(jr(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];o&&Yu(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}function Yu(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=TM[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of so(e,n)){let[u,f,h,d]=c.corners.map(s);i.tri(u,f,h,o.glass),i.tri(u,h,d,o.glass),i.tri(u,h,f,o.glass),i.tri(u,d,h,o.glass);let g=(p,y=.004)=>[p[0]+e.n[0]*y,p[1]+e.n[1]*y,p[2]+e.n[2]*y],b=(p,y,M)=>[p[0]+(y[0]-p[0])*M,p[1]+(y[1]-p[1])*M,p[2]+(y[2]-p[2])*M],x=[u,f,h,d].map(p=>g(p));for(let p=0;p<4;p++)t.seg(x[p],x[(p+1)%4],o.edge);for(let p=1;p<a;p++)t.seg(g(b(u,f,p/a)),g(b(d,h,p/a)),o.cells);for(let p=1;p<l;p++)t.seg(g(b(u,d,p/l)),g(b(f,h,p/l)),o.cells);for(let[p,y]of c.posts)t.seg(s(p),s(y),wM)}}function PM(i){let t=i.settings.roof,e=RM(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(C=>C.points.map(I=>I[0])),r=e.rooms.flatMap(C=>C.points.map(I=>I[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=new ce,f=new Ve;if(t.type==="flat"){me(u,[[o,l],[a,l],[a,c],[o,c]],0,.25,oo,ao,{bottom:!0});let C=.252;for(let[I,L]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])f.seg([I[0],C,I[1]],[L[0],C,L[1]],hr),f.seg([I[0],0,I[1]],[L[0],0,L[1]],ts);return{floor:e,base:e.height,solid:u,lines:f,glass:new ce}}let h=a-o>=c-l,d=t.ridge==="short"?!h:h,g=(d?c-l:a-o)/2,b=g*Math.tan(t.pitch*ie),x=(C,I,L)=>d?[C,L,(l+c)/2+I]:[(o+a)/2+I,L,C],[p,y]=d?[o,a]:[l,c],M=new at(ao),v=new at(oo),S=(C,I,L,P,E)=>{u.tri(C,I,L,E),u.tri(C,L,P,E)};for(let C of[-1,1]){S(x(p,C*g,0),x(y,C*g,0),x(y,0,b),x(p,0,b),M),S(x(p,C*g,-Oe),x(p,0,b-Oe),x(y,0,b-Oe),x(y,C*g,-Oe),v),S(x(p,C*g,-Oe),x(y,C*g,-Oe),x(y,C*g,0),x(p,C*g,0),v);for(let I of[p,y])S(x(I,C*g,-Oe),x(I,C*g,0),x(I,0,b),x(I,0,b-Oe),v);f.seg(x(p,C*g,0),x(y,C*g,0),ts);for(let I of[p,y])f.seg(x(I,C*g,0),x(I,0,b),ts)}let w=t.overhang,A=new at(Dp),_=g-w,T=_*Math.tan(t.pitch*ie);for(let C of[p+w,y-w])u.tri(x(C,-_,-Oe),x(C,_,-Oe),x(C,0,T-Oe),A),u.tri(x(C,_,-Oe),x(C,-_,-Oe),x(C,0,T-Oe),A);return f.seg(x(p,0,b+.004),x(y,0,b+.004),hr),{floor:e,base:e.height,solid:u,lines:f,glass:new ce}}function LM(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let r=new Map,s=new Map(jr(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=Bd(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new ce,lines:new Ve,glass:new ce,sections:[],lift:!o.open}),c.sections.push(o.id);let u=Su(t,o),f=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,h=t.filter(b=>b!==o&&Su(t,b)===o).flatMap(b=>Nd(o,b));for(let b of i.settings.roof.windows??[]){let x=s.get(b.face),p=x&&x.section===o.id?Xu(x,b):null;if(!p)continue;let y=p.map(M=>Ni(o,M[0],M[2]));h.push({u0:Math.min(...y.map(M=>M[0])),u1:Math.max(...y.map(M=>M[0])),v0:Math.min(...y.map(M=>M[1])),v1:Math.max(...y.map(M=>M[1]))})}let d=u?Tu(u,o):o,g=null;if(u){let b=Yn(d),x=Zr(u,{u0:0,u1:0,a:0,b:0}),p=y=>{let[M,v]=b.at(y,b.w/2),[S,w]=Ni(u,M,v);return no(x,S,w)??Fn(u).y(w)};g=p(b.u0)<=p(b.u1)?0:1}FM(c.solid,c.lines,d,Ml(i,d,d.overhang??e),a.elevation,c.glass,f,h,g)}return[...r.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function FM(i,t,e,n,r,s=i,o=!1,a=[],l=null){let c=Yn(e),u=Fn(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,h=Math.max(0,f.a),d=Math.max(0,f.b),g=c.w,b=c.u0-Math.max(0,f.u0),x=c.u1+Math.max(0,f.u1),p=(P,E,D)=>{let[U,N]=c.at(P,E);return[U,D-r,N]},y=new at(ao),M=new at(oo),v=new at(Dp),S=(P,E)=>{for(let D=1;D+1<P.length;D++)i.tri(P[0],P[D],P[D+1],E)},w=[],A=[],_=[],T=null;if(e.shape==="flat"||e.shape==="parapet"){let P=e.eave_a,E=e.shape==="parapet",D=e.points&&e.points.length>=3?Dd(e,E?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):E?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,g),c.at(c.u0,g)]:[c.at(b,-h),c.at(x,-h),c.at(x,g+d),c.at(b,g+d)];me(i,D,P-r,P-r+.25,oo,ao,{bottom:!0});for(let U=0;U<D.length;U++){let N=D[U],k=D[(U+1)%D.length];t.seg([N[0],P-r+.252,N[1]],[k[0],P-r+.252,k[1]],hr),t.seg([N[0],P-r,N[1]],[k[0],P-r,k[1]],ts)}if(E){let U=G=>$s(G)>=0?G:[...G].reverse(),N=U(D),k=eo(N,-.2),B=N.length;for(let G=0;G<B;G++){let V=U([N[G],N[(G+1)%B],k[(G+1)%B],k[G]]);me(i,V,P-r+.25,P-r+.65,oo,ao),t.seg([N[G][0],P-r+.652,N[G][1]],[N[(G+1)%B][0],P-r+.652,N[(G+1)%B][1]],hr),t.seg([k[G][0],P-r+.652,k[G][1]],[k[(G+1)%B][0],P-r+.652,k[(G+1)%B][1]],hr)}}}else{let P=Zr(e,f);w=P.faces;for(let E of a)w=w.flatMap(D=>Od(D,E));A=P.rim,_=P.ridges,T=P.gable}let C=!!e.open,I=new at(vM);for(let P of w){if(C){for(let E=1;E+1<P.length;E++)s.tri(p(P[0][0],P[0][1],P[0][2]),p(P[E][0],P[E][1],P[E][2]),p(P[E+1][0],P[E+1][1],P[E+1][2]),I);continue}S(P.map(([E,D,U])=>p(E,D,U)),y),S(P.map(([E,D,U])=>p(E,D,U-Oe)),M)}for(let P=0;P<A.length;P++){let[E,D,U]=A[P],[N,k,B]=A[(P+1)%A.length];C||S([p(E,D,U),p(N,k,B),p(N,k,B-Oe),p(E,D,U-Oe)],M),t.seg(p(E,D,U),p(N,k,B),C?hr:ts)}if(C){DM(i,t,c,u,f,p,r);return}for(let[[P,E,D],[U,N,k]]of _)t.seg(p(P,E,D+.004),p(U,N,k+.004),hr);let L=e.base;if(!o){if(T){let P=UM(T,L-Oe),E=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(P.length>=3)for(let D of E)S(P.map(([U,N])=>p(D,U,N)),v)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let P of[0,g]){let E=u.y(P)-Oe;E>L+.02&&S([p(c.u0,P,L),p(c.u1,P,L),p(c.u1,P,E),p(c.u0,P,E)],v)}else if(e.eave_a>L+.02)for(let[P,E,D,U]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,g],[c.u1,g,c.u0,g],[c.u0,g,c.u0,0]])S([p(P,E,L),p(D,U,L),p(D,U,e.eave_a),p(P,E,e.eave_a)],v)}}function DM(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,u=r.a>0,f=r.b>0,h=r.u0>0,d=r.u1>0,g=(p,y,M,v,S,w)=>{let A=[e.at(p,M),e.at(y,M),e.at(y,v),e.at(p,v)],_=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);me(i,_<0?[...A].reverse():A,S-o,w-o,MM,SM,{bottom:!0})},b=o;for(let[p,y]of[[0,u],[a,f]]){if(!y)continue;let M=n.y(p)-.03,v=p===0?0:a-l;g(e.u0,e.u1,v,v+l,M-c,M),t.seg(s(e.u0,p,M-c),s(e.u1,p,M-c),ts)}for(let[p,y]of[[e.u0,h],[e.u1-l,d]])if(y)for(let M=0;M<6;M++){let v=a*M/6,S=a*(M+1)/6,w=Math.min(n.y(v),n.y(S))-.03;g(p,p+l,v,S,w-c,w)}let x=[];for(let[p,y]of[[0,u],[a-l,f]]){if(!y)continue;let M=e.u1-e.u0-l,v=Math.max(1,Math.ceil(M/3.5));for(let S=0;S<=v;S++){let w=e.u0+M*S/v;S===0&&!h||S===v&&!d||x.push([w,p])}}if(!u&&!f)for(let p of[e.u0,e.u1-l])(p===e.u0&&h||p!==e.u0&&d)&&x.push([p,a/2-l/2]);for(let[p,y]of x){let M=n.y(y+l/2)-.03-c;g(p,p+l,y,y+l,b,M)}}function UM(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var zi=.2,kp=15;function Vp(i){return i?65535&~(1<<kp):65535}var lo=8,Dl=.42,qu=.42;function Gp(i,t,e,n=[],r=[],s){let{walls:o,open:a}=Qs(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(E,D,U)=>{let N=s?s(E,D):null;return N===null?U:Math.max(.05,Math.min(U,N))},c=(E,D,U,N,k)=>{if(!s)return k;let B=k,G=Math.max(2,Math.ceil((N-U)/.25)+1);for(let V=0;V<G;V++){let nt=U+(N-U)*V/(G-1);B=Math.min(B,l(E[0]+D[0]*nt,E[1]+D[1]*nt,k))}return B},u=new ce(!0,!0),f=[],h=new Ve,d=[];for(let E of i.rooms){if(E.points.length<3)continue;let D=zp(Xn(E)?VM(E):E.points),U=Qr[E.floor_material]??Qr.wood,N=new at(U.color),k=n.filter($=>kd($,D)).map($=>Vd($,.003));d.push(...k);let B=[...D,...k.flat()],G=u.count;for(let[$,ot,K]of Kr(D,k)){let ht=B[$],X=B[ot],J=B[K];u.tri([ht[0],0,ht[1]],[J[0],0,J[1]],[X[0],0,X[1]],N,N,N,[ht[0],ht[1],J[0],J[1],X[0],X[1]],Xt,U.tile)}f.push({roomId:E.id,start:G,end:u.count,color:U.color});let V=new at(We.slab),nt=$=>{for(let ot=0;ot<$.length;ot++){let K=$[ot],ht=$[(ot+1)%$.length];u.tri([K[0],-zi,K[1]],[K[0],0,K[1]],[ht[0],0,ht[1]],V),u.tri([K[0],-zi,K[1]],[ht[0],0,ht[1]],[ht[0],-zi,ht[1]],V)}};nt(D);for(let $ of k){nt([...zp($)].reverse());for(let ot=0;ot<$.length;ot++){let K=$[ot],ht=$[(ot+1)%$.length];h.seg([K[0],.006,K[1]],[ht[0],.006,ht[1]],sr),h.seg([K[0],-zi,K[1]],[ht[0],-zi,ht[1]],Oi)}}}let g=new Map,b=[],x=new Map;for(let E of o){let D="interior",U=null;if(E.exterior){let k=E.b[0]-E.a[0],B=E.b[1]-E.a[1],G=Math.hypot(k,B)||1,V=[B/G,-k/G],nt=(Math.round(Math.atan2(V[1],V[0])/(2*Math.PI)*lo)%lo+lo)%lo;D=`s${nt}`;let $=nt/lo*2*Math.PI;U=[Math.cos($),Math.sin($)]}let N=g.get(D);N===void 0&&(N=b.length,g.set(D,N),b.push(U)),x.set(E,N)}let p=new Map,y=[];for(let E of i.openings){let D=Id(E,i.rooms,i.walls??[]);if(!D)continue;let U=Pd(o,E,D);if(!U)continue;let{wall:N,s:k}=U,B=Ol([N.b[0]-N.a[0],N.b[1]-N.a[1]]),G=Math.hypot(N.b[0]-N.a[0],N.b[1]-N.a[1]),V=Math.min(E.width,G),nt=Math.max(0,Math.min(G-V,k-V/2)),$=D.room.points,ot=N.free?B[0]*($[1][0]-$[0][0])+B[1]*($[1][1]-$[0][1])>0:N.roomLeft===E.room_id,K=[-B[1],B[0]],ht=ot?K:[-K[0],-K[1]],X=Math.min(c(N.a,B,nt,nt+V,Ul(N,i.height))-.02,E.sill+E.height),J=Math.max(0,Math.min(E.sill,X-.1)),ft=[ht[1],-ht[0]],mt=B[0]*ft[0]+B[1]*ft[1]>0,pt={opening:E,bucket:x.get(N),start:[N.a[0]+B[0]*nt,N.a[1]+B[1]*nt],axis:B,width:V,toRoom:ht,faceRoom:ot?N.left:N.right,faceOut:ot?N.right:N.left,sill:J,top:X,hingeAtStart:E.hinge==="left"===mt,exterior:N.exterior};y.push(pt);let At=p.get(N);At||p.set(N,At=[]),At.push({s0:nt,s1:nt+V,sill:J,top:X,info:pt})}let M=Math.min(i.cut_height,i.height),v=new ce;for(let E of o){let D=x.get(E),U=Ol([E.b[0]-E.a[0],E.b[1]-E.a[1]]),N=(p.get(E)??[]).sort((ot,K)=>ot.s0-K.s0),k=Ul(E,i.height),B=[],G=[-1/0,...new Set(N.flatMap(ot=>[ot.s0,ot.s1])).values(),1/0].sort((ot,K)=>ot-K);for(let ot=0;ot+1<G.length;ot++){let K=G[ot],ht=G[ot+1];if(ht-K<1e-6)continue;let X=Number.isFinite(K)&&Number.isFinite(ht)?(K+ht)/2:Number.isFinite(K)?K+1:ht-1,J=N.filter(pt=>pt.s0<X&&pt.s1>X).map(pt=>[pt.sill,pt.top]).sort((pt,At)=>pt[0]-At[0]),ft=[],mt=-zi;for(let[pt,At]of J)pt>mt+1e-4&&ft.push([mt,pt]),mt=Math.max(mt,At);k>mt+1e-4&&ft.push([mt,k]),B.push({t0:K,t1:ht,ranges:ft})}let V=Math.hypot(E.b[0]-E.a[0],E.b[1]-E.a[1]),nt=s&&c(E.a,U,0,V,k)<k-.001,$=nt?B.flatMap(ot=>{let K=Math.max(ot.t0,-.5),ht=Math.min(ot.t1,V+.5),X=Math.max(1,Math.ceil((ht-K)/.3));return Array.from({length:X},(J,ft)=>({t0:ft===0?ot.t0:K+(ht-K)*ft/X,t1:ft===X-1?ot.t1:K+(ht-K)*(ft+1)/X,ranges:ot.ranges}))}):B;for(let ot of $){let K=OM(E.footprint,E.a,U,ot.t0,ot.t1);if(K.length<3)continue;let ht=nt?Math.min(...K.map(([X,J])=>l(X,J,k))):k;for(let[X,J]of ot.ranges){let ft=Math.min(J,nt?Math.max(...K.map(([re,Vt])=>l(re,Vt,k))):J);if(ft-X<1e-4||ht-X<.01)continue;let mt=X>.01,pt=nt&&J>ht,At=(re,Vt)=>Math.min(J,l(re,Vt,k));if(X<M-1e-6){let re=ft>M+1e-6?Hd+D:or+D,Vt=pt&&ht<M?(Kt,se)=>Math.min(M,At(Kt,se)):Math.min(ft,M);me(v,K,X,Vt,We.wall,We.wallTop,{aoFrom:0,bottom:mt,fold:or+D,topFold:re})}ft>M+1e-6&&ht>M+1e-6&&me(v,K,Math.max(X,M),pt?At:ft,We.wall,We.wallTop,{aoFrom:0,fold:D,bottom:mt&&X>=M})}}}let S=o.flatMap(E=>E.footprint),w=zM(o,S),A=new Ve;A.p.push(...h.p),A.c.push(...h.c),A.f.push(...h.f);let _=(E,D)=>(p.get(E)??[]).filter(D);for(let E of w.edges){let D=x.get(E.wall);for(let[N,k]of Nl(E,_(E.wall,B=>B.sill<=.005)))A.seg([N[0],.004,N[1]],[k[0],.004,k[1]],Gd);for(let[N,k]of Nl(E,_(E.wall,B=>B.sill<M&&B.top>M)))A.seg([N[0],M,N[1]],[k[0],M,k[1]],Ru,Tl+D);let U=Ul(E.wall,i.height);for(let[N,k]of Nl(E,_(E.wall,B=>B.top>=U-.021))){if(!s){A.seg([N[0],U,N[1]],[k[0],U,k[1]],sr,U<=M+1e-6?or+D:D);continue}let B=Math.max(1,Math.ceil(Math.hypot(k[0]-N[0],k[1]-N[1])/.3));for(let G=0;G<B;G++){let V=[N[0]+(k[0]-N[0])*G/B,N[1]+(k[1]-N[1])*G/B],nt=[N[0]+(k[0]-N[0])*(G+1)/B,N[1]+(k[1]-N[1])*(G+1)/B],$=l(V[0],V[1],U),ot=l(nt[0],nt[1],U);A.seg([V[0],$,V[1]],[nt[0],ot,nt[1]],sr,Math.max($,ot)<=M+1e-6?or+D:D)}}}for(let E of w.corners){let D=l(E.p[0],E.p[1],Ul(E.wall,i.height));A.segSplit([E.p[0],.004,E.p[1]],[E.p[0],D,E.p[1]],Oi,Math.min(M,D),x.get(E.wall))}for(let E of p.values())for(let D of E)NM(A,D,M);let T=kM(w.edges,i.rooms,p),C=i.rooms.filter(Xn).map(E=>({id:E.id,type:E.kind,points:E.points,roof_style:E.roof_style,railing:E.railing,columns:E.columns,column_size:E.column_size,height:E.height??i.height,slope:E.slope,slope_dir:E.slope_dir,open:E.open??!0,roomColor:(Qr[E.floor_material]??Qr.wood).color,wallThickness:t,offset:-ai(i)-Ys(E.kind)})),I=Tp(v,A,i,C,kp),L=Sp(v,A,i);for(let E of r)Yu(v,A,E.face,E.field,i.elevation);let P=[];for(let E of i.furniture){if(yd(E.type))continue;let D=v.count,U=A.p.length/6,N=pn(i,E);Cl(v,A,T,E,N),N+E.h>M+.05&&(Wd(v,D,M,Cu),Xd(A,U,M,Cu)),P.push({id:E.id,start:D,end:v.count})}return{floor:u.geometry(),roomTris:f,holes:d,walls:v.geometry(),lines:A.geometry(),shadow:T.geometry(),buckets:b,openings:y,walls2d:o,openRooms:a,wallBuckets:o.map(E=>x.get(E)),furnitureTris:P,outdoorTris:L,coveredRoomTris:I}}function NM(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,u)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:Xt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Oi,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Oi,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Oi,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Oi,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Oi,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),Ru,Tl+r)}function OM(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=Np(o,a=>s(a)-n)),Number.isFinite(r)&&(o=Np(o,a=>r-s(a))),o}function Np(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var Op=i=>Math.round(i*1e3),co=i=>`${Op(i[0])},${Op(i[1])}`,Bp=(i,t)=>{let e=co(i),n=co(t);return e<n?`${e}|${n}`:`${n}|${e}`};function BM(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let f of t){let h=((f[0]-r[0])*o+(f[1]-r[1])*a)/l;if(h<=1e-6||h>=1-1e-6)continue;Math.abs((f[0]-r[0])*a-(f[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(h)}c.sort((f,h)=>f-h);let u=r;for(let f of c){let h=[r[0]+o*f,r[1]+a*f];co(h)!==co(u)&&e.push([u,h]),u=h}e.push([u,s])}return e}function zM(i,t){let e=i.map(l=>({wall:l,edges:BM(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,u]of l){let f=Bp(c,u);n.set(f,(n.get(f)??0)+1)}let r=[],s=new Map,o=(l,c,u)=>{let f=co(l),h=s.get(f);h||s.set(f,h={p:l,wall:c,d:[]}),h.d.push(u)};for(let{wall:l,edges:c}of e)for(let[u,f]of c){if(n.get(Bp(u,f))!==1)continue;let h=Math.hypot(f[0]-u[0],f[1]-u[1]);if(h<1e-4)continue;r.push({a:u,b:f,wall:l});let d=[(f[0]-u[0])/h,(f[1]-u[1])/h];o(u,l,d),o(f,l,d)}let a=[];for(let{p:l,wall:c,d:u}of s.values())u.some(f=>u.some(h=>Math.abs(f[0]*h[1]-f[1]*h[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function Nl(i,t){if(!t.length)return[[i.a,i.b]];let e=Ol([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Ol([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=f=>(f[0]-i.wall.a[0])*e[0]+(f[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let f of t)c=c.flatMap(([h,d])=>{if(f.s1<=h||f.s0>=d)return[[h,d]];let g=[];return f.s0>h&&g.push([h,f.s0]),f.s1<d&&g.push([f.s1,d]),g});let u=f=>{let h=(f-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*h,i.a[1]+(i.b[1]-i.a[1])*h]};return c.filter(([f,h])=>h-f>1e-4).map(([f,h])=>s<=o?[u(f),u(h)]:[u(h),u(f)])}function kM(i,t,e){let n=new ce,r=new at(qu,qu,qu),s=new at(1,1,1),o=.002;for(let a of i)for(let[l,c]of Nl(a,(e.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],f=c[1]-l[1],h=Math.hypot(u,f);if(h<.05)continue;let d=[f/h,-u/h],g=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&ue(g,p.points)))continue;let b=[l[0]+d[0]*Dl,l[1]+d[1]*Dl],x=[c[0]+d[0]*Dl,c[1]+d[1]*Dl];n.tri([l[0],o,l[1]],[b[0],o,b[1]],[x[0],o,x[1]],r,s,s),n.tri([l[0],o,l[1]],[x[0],o,x[1]],[c[0],o,c[1]],r,s,r)}return n}function Hp(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(vl),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return Au(e);let r=n.furniture.filter(s=>(s.type==="stairs"||s.type==="stairs_landing"||De(s.type)?.hole)&&n.elevation+s.h>=t.elevation-.3).map(vl);return Au([...e,...r])}function Ul(i,t){return Math.min(t,i.height??t)}function Ol(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function zp(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function VM(i){let t=i.points,e=t.length;if(e<3)return t;let n=0;for(let c=0;c<e;c++)n+=t[c][0]*t[(c+1)%e][1]-t[(c+1)%e][0]*t[c][1];let r=n>=0?1:-1,s=(i.column_size??(i.kind==="canopy"?.12:.32))/2,o=i.kind==="canopy"?s:s*1.375,a=i.open!==!1?e-1:-1,l=t.map((c,u)=>{let f=t[(u+1)%e],h=f[0]-c[0],d=f[1]-c[1],g=Math.hypot(h,d)||1,b=u===a?0:o,x=[d/g*r,-h/g*r];return{p:[c[0]+x[0]*b,c[1]+x[1]*b],d:[h/g,d/g],normal:x,offset:b}});return t.map((c,u)=>{let f=l[(u-1+e)%e],h=l[u],d=f.d[0]*h.d[1]-f.d[1]*h.d[0];if(Math.abs(d)<1e-6)return[c[0]+h.normal[0]*h.offset,c[1]+h.normal[1]*h.offset];let g=((h.p[0]-f.p[0])*h.d[1]-(h.p[1]-f.p[1])*h.d[0])/d;return[f.p[0]+f.d[0]*g,f.p[1]+f.d[1]*g]})}var GM=500,Wp=.12,Xp=1.35,HM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Bl=class{view={target:new H,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,f=Math.min(1,(t-c)/u),h=HM(f);this.view.target.lerpVectors(a.target,l.target,h),this.view.radius=a.radius+(l.radius-a.radius)*h,this.view.theta=a.theta+(l.theta-a.theta)*h,this.view.phi=a.phi+(l.phi-a.phi)*h,f>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=$u(this.view.phi+this.velocity.phi,Wp,Xp),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},r=t.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let s={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:r,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:n,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab?.(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},GM)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag?.(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}if(e.button===1||e.button===2||t.shiftKey)this.pan(n,r);else{let o=this.el.clientHeight||1,a=-n/o*3.2,l=-r/o*2.4;this.view.theta+=a,this.view.phi=$u(this.view.phi+l,Wp,Xp),this.velocity={theta:a,phi:l}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,s=performance.now();s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=s,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=$u(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new H(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new H(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function $u(i,t,e){return Math.min(e,Math.max(t,i))}function ui(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;
varying float vFp3dCanopy;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        vFp3dCanopy = 0.0;
        bool fp3dShow = ${e==="glass"||e==="roof"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          vFp3dCanopy = fp3dKind == 5 ? 1.0 : 0.0;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap, 4 upper furniture, 5 canopy roof
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 || fp3dKind == 5 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if ((fp3dGlass && fp3dWall) || (fp3dBucket == 15 && (fp3dKind == 0 || fp3dKind == 5))) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
          ${e==="roof"?"fp3dShow = fp3dShow && fp3dBucket == 15 && (fp3dKind == 0 || fp3dKind == 5);":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"?n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`):e==="roof"&&(n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vFp3dCanopy;`).replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb *= ${1.35.toFixed(2)};
        diffuseColor.a *= mix(${.78.toFixed(2)}, ${.42.toFixed(2)}, vFp3dCanopy);`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var uo=(i,t,e,n,r)=>{i.expandByPoint(new H(t,n,e)),i.expandByPoint(new H(t,r,e))};function Yp(i){let t=new je;for(let{floor:e,ty:n}of i){let r=e.elevation+n;for(let s of e.rooms)for(let[o,a]of s.points)uo(t,o,a,r,r+e.height);for(let s of e.outdoor??[]){let o=r+ai(e)+(s.offset??0),a=o-(s.type==="pool"?0:s.slope??0),l=oi(s.type)&&s.height?s.height:qr[s.type],c=o+(s.type==="pool"?.06:l);for(let[u,f]of s.points)uo(t,u,f,a,c)}for(let s of e.walls??[]){let o=r+Math.min(e.height,s.height??e.height);uo(t,s.a[0],s.a[1],r,o),uo(t,s.b[0],s.b[1],r,o)}}return t}function qp(i,t,e){let n=new je,r=i.elevation+e;for(let[s,o]of t.points)uo(n,s,o,r,r+(Xn(t)?t.height??i.height:i.height));return n}function Zu(i,t,e,n,r,s=1){if(i.isEmpty())return 0;let o=i.getCenter(new H),a=new H(Math.sin(e)*Math.sin(t),Math.cos(e),Math.sin(e)*Math.cos(t)),l=new H(Math.cos(t),0,-Math.sin(t)),c=new H(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)),u=Math.tan(r/2),f=u*Math.max(.01,n),h=0;for(let d of[i.min.x,i.max.x])for(let g of[i.min.y,i.max.y])for(let b of[i.min.z,i.max.z]){let x=new H(d,g,b).sub(o),p=x.dot(a);h=Math.max(h,p+Math.abs(x.dot(l))*s/f,p+Math.abs(x.dot(c))*s/u)}return h}function $p(i,t,e,n,r=1){let s=i.getSize(new H),o=Math.max(.01,Math.min(s.x,s.z)),a=Math.max(s.x,s.z)/o>=2,l=-.6;return a&&e>=1.2&&(l=s.z>=s.x?-.95:-.35),{theta:l,radius:Zu(i,l,t,e,n,r)}}function Ku(i,t,e,n,r,s,o=8){if(i.isEmpty())return{radius:0,offset:new H};let a=Math.max(1,s.width),l=Math.max(1,s.height),c=-1+2*Math.max(0,s.left)/a,u=1-2*Math.max(0,s.right)/a,f=-1+2*Math.max(0,s.bottom)/l,h=1-2*Math.max(0,s.top)/l;if(c>=u||f>=h)return{radius:Zu(i,t,e,n,r),offset:new H};let d=i.getCenter(new H),g=new H(Math.sin(e)*Math.sin(t),Math.cos(e),Math.sin(e)*Math.cos(t)),b=new H(Math.cos(t),0,-Math.sin(t)),x=new H(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)),p=Math.tan(r/2),y=p*Math.max(.01,n),M=[];for(let L of[i.min.x,i.max.x])for(let P of[i.min.y,i.max.y])for(let E of[i.min.z,i.max.z]){let D=new H(L,P,E).sub(d);M.push({x:D.dot(b),y:D.dot(x),near:D.dot(g)})}let v=L=>{let P=-1/0,E=1/0,D=-1/0,U=1/0;for(let N of M){let k=L-N.near;P=Math.max(P,N.x-u*y*k),E=Math.min(E,N.x-c*y*k),D=Math.max(D,N.y-h*p*k),U=Math.min(U,N.y-f*p*k)}return{x0:P,x1:E,y0:D,y1:U}},S=Math.max(...M.map(L=>L.near))+.1,w=L=>{let P=v(L);return P.x0<=P.x1&&P.y0<=P.y1},A=Math.max(S,o),_=Math.max(A,Zu(i,t,e,n,r));for(;!w(_);)_*=2;for(let L=0;L<60;L++){let P=(A+_)/2;w(P)?_=P:A=P}let T=v(_),C=(T.x0+T.x1)/2,I=(T.y0+T.y1)/2;return{radius:_,offset:b.multiplyScalar(C).add(x.multiplyScalar(I))}}function WM(i,t){let e=De(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Ju(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?WM(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function Qu(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let u=e.length/3,f=c.portrait===!1?10:6,h=c.portrait===!1?6:10,d=XM(c.id)%1e3/1e3;for(let b of so(l,c)){let[x,p,y,M]=b.corners.map(S=>[S[0]+l.n[0]*.006,S[1]+l.n[1]*.006-t,S[2]+l.n[2]*.006]),v=[[x,0,0],[p,1,0],[y,1,1],[M,0,1]];for(let S of[0,1,2,0,2,3]){let[w,A,_]=v[S];e.push(w[0],w[1],w[2]),n.push(A,_),r.push(f,h),s.push(d)}}let g=e.length/3-u;g&&o.push({id:c.id,start:u,count:g})}if(!e.length)return null;let a=new Qt;return a.setAttribute("position",new Gt(e,3)),a.setAttribute("uv",new Gt(n,2)),a.setAttribute("aCells",new Gt(r,2)),a.setAttribute("aPhase",new Gt(s,1)),a.setAttribute("aLevel",new Gt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function ho(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function ju(i){let t=new le({transparent:!0,blending:Fe,depthWrite:!1,side:Me});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function XM(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var Zp=["neon","blueprint","day"];function Kp(i){return Zp.indexOf(i)}var zl={value:new H(.22,.88,1)},kl={value:0};function Jp(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var YM=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces with a hint of their hue, dark blue lines
  if (line) return vec3(0.08, 0.17, 0.38) * clamp(mx * 1.4, 0.4, 1.0);
  vec3 g = vec3(clamp(0.66 + l * 2.6, 0.0, 0.96));
  return mix(g, g * (c / max(mx, 0.001)), 0.1);
}
`;function Un(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=zl,s.uniforms.uAccentOn=kl,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${YM}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function Vl(i){return i==="day"?Ii:Fe}var fo=.012,qM=.012;function jp(i,t,e,n,r,s=[]){let o=[],a=[],l=[],c=[],u=(g,b,x,p,y,M,v)=>{for(let S of[g,b,x,g,x,p])o.push(S[0],S[1],S[2]),a.push(y[0],y[1],y[2]),l.push(M),c.push(v)};i.rooms.forEach((g,b)=>{if(g.points.length<3)return;let x=g.points.map(w=>w[0]),p=g.points.map(w=>w[1]),y=Math.min(...x),M=Math.min(...p),v=Math.max(1,Math.ceil((Math.max(...x)-y)/r)),S=Math.max(1,Math.ceil((Math.max(...p)-M)/r));for(let w=0;w<v;w++)for(let A=0;A<S;A++){let _=y+(w+.5)*r,T=M+(A+.5)*r;if(!ue([_,T],g.points)||s.some(L=>ue([_,T],L)))continue;let C=y+w*r,I=M+A*r;u([C,fo,I],[C,fo,I+r],[C+r,fo,I+r],[C+r,fo,I],[0,1,0],b,-1)}});let f=i.rooms.length;for(let g of i.outdoor??[]){if(g.points.length<3||oi(g.type))continue;let b=vp(i,g)+fo,x=g.points.map(w=>w[0]),p=g.points.map(w=>w[1]),y=Math.min(...x),M=Math.min(...p),v=Math.max(1,Math.ceil((Math.max(...x)-y)/r)),S=Math.max(1,Math.ceil((Math.max(...p)-M)/r));for(let w=0;w<v;w++)for(let A=0;A<S;A++){if(!ue([y+(w+.5)*r,M+(A+.5)*r],g.points))continue;let _=y+w*r,T=M+A*r;u([_,b,T],[_,b,T+r],[_+r,b,T+r],[_+r,b,T],[0,1,0],f,-1)}}let h=Math.min(i.cut_height,i.height);t.forEach((g,b)=>{let x=Math.min(i.height,g.height??i.height),p=Math.min(h,x-.02),y=g.b[0]-g.a[0],M=g.b[1]-g.a[1],v=Math.hypot(y,M);if(v<.05)return;let S=[y/v,M/v],w=[-S[1],S[0]],A=e[b],_=$M(g,S,v,n),T=(L,P,E)=>[P,E,...L.filter(D=>D>P+.005&&D<E-.005)].sort((D,U)=>D-U).filter((D,U,N)=>U===0||D>N[U-1]+.005),C=T([p,(p+x)/2,..._.flatMap(L=>[L.y0+.01,L.y1-.01])],.02,x-.02),I=T(_.flatMap(L=>[L.s0,L.s1]),0,v);for(let L of[1,-1]){let P=L>0?g.roomLeft:g.roomRight,E=P?i.rooms.findIndex(k=>k.id===P):g.exterior?f:-1;if(E<0)continue;let D=(L>0?g.left:g.right)+qM,U=[w[0]*L,w[1]*L],N=(k,B)=>[g.a[0]+S[0]*k+U[0]*D,B,g.a[1]+S[1]*k+U[1]*D];for(let k=0;k<I.length-1;k++){let B=I[k+1]-I[k],G=Math.max(1,Math.ceil(B/r));for(let V=0;V<G;V++){let nt=I[k]+B/G*V,$=I[k]+B/G*(V+1),ot=(nt+$)/2;for(let K=0;K<C.length-1;K++){let ht=C[K],X=C[K+1];if(X-ht<.01)continue;let J=(ht+X)/2;if(_.some(mt=>ot>mt.s0&&ot<mt.s1&&J>mt.y0&&J<mt.y1))continue;let ft=ht>=h-1e-6?A:or+A;u(N(nt,ht),N($,ht),N($,X),N(nt,X),[U[0],0,U[1]],E,ft)}}}}});let d=[];for(let g of n){if(g.opening.type!=="door")continue;let b=t.find(y=>t0(y,g));if(!b||!b.roomLeft||!b.roomRight)continue;let x=i.rooms.findIndex(y=>y.id===b.roomLeft),p=i.rooms.findIndex(y=>y.id===b.roomRight);x<0||p<0||d.push({id:g.opening.id,a:x,b:p,x:g.start[0]+g.axis[0]*(g.width/2),y:Math.min(1.1,g.top*.55),z:g.start[1]+g.axis[1]*(g.width/2)})}return{pos:new Float32Array(o),normal:new Float32Array(a),room:Int16Array.from(l),fold:new Float32Array(c),doors:d}}function t0(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function $M(i,t,e,n){let r=[];for(let s of n){if(!t0(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function ZM(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function KM(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Qp(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,u=a*a+l*l+c*c,f=Math.sqrt(u)||1e-6,h=KM(i),d=1/(1+u/(h*h)),g=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*s+c*o)/f);return i.level*g*(.2+.8*b)*ZM(i.kind,l/f)}function e0(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,f)=>{let h=n[f]??.5;if(!(h<=.01))for(let[d,g]of[[u.a,u.b],[u.b,u.a]]){let b=[0,0,0];for(let p of t){if(p.room!==d)continue;let y=p.x-u.x,M=p.y-u.y,v=p.z-u.z,S=Math.hypot(y,M,v)||1,w=Qp(p,u.x,u.y,u.z,y/S,M/S,v/S);b[0]+=p.color[0]*w,b[1]+=p.color[1]*w,b[2]+=p.color[2]*w}let x=Math.max(b[0],b[1],b[2]);x<.01||r.push({x:u.x,y:u.y,z:u.z,color:[b[0]/x,b[1]/x,b[2]/x],level:Math.min(1,x*.9*(.35+.65*h)),kind:"wall",room:g})}});let s=new Map;for(let u of r){let f={...u,color:u.color.map(h=>Math.pow(h,1.5))};s.set(u.room,[...s.get(u.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let u=0;u<l.length;u++){let f=s.get(l[u]);if(!f)continue;let h=u*3,d=0,g=0,b=0;for(let x of f){let p=Qp(x,o[h],o[h+1],o[h+2],a[h],a[h+1],a[h+2]);d+=x.color[0]*p,g+=x.color[1]*p,b+=x.color[2]*p}c[h]=1-Math.exp(-d*e*1.6),c[h+1]=1-Math.exp(-g*e*1.6),c[h+2]=1-Math.exp(-b*e*1.6)}return c}function n0(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&ue([t,e],r.points));return n<0?i.rooms.length:n}function i0(i,t){return i&&t>=0&&t<i.length?i[t]:t}var Hl={open:0,open2:0,tilt:0,tilt2:0,cover:null},r0=2043986,s0=2769520,JM=2242399,th=1845831,QM=1450554,hi=16758087,jM=1.2,t2=1.5,e2=1846349,n2=2572395,i2=1120816,r2=1845831,o0=5995775,a0=9085695,es=Ht(3662079,.08),s2=.2;function Gl(i,t,e,n,r,s,o,a,l,c,u){let f=(d,g,b)=>t(d,g,b),h=[[f(e,r,a),f(n,r,a),f(n,s,a),f(e,s,a),c],[f(e,r,o),f(n,r,o),f(n,s,o),f(e,s,o),Ht(l.getHex(),.6)],[f(e,s,o),f(n,s,o),f(n,s,a),f(e,s,a),l],[f(e,r,o),f(n,r,o),f(n,r,a),f(e,r,a),Ht(l.getHex(),.85)],[f(e,r,o),f(e,s,o),f(e,s,a),f(e,r,a),Ht(l.getHex(),.92)],[f(n,r,o),f(n,s,o),f(n,s,a),f(n,r,a),Ht(l.getHex(),.92)]];for(let[d,g,b,x,p]of h)i.tri(d,g,b,p,p,p,void 0,u),i.tri(d,b,x,p,p,p,void 0,u)}function ae(i,t,e,n,r,s,o,a,l,c,u,f){if(a<=u+1e-6)return Gl(i,t,e,n,r,s,o,a,l,c,Xt);if(o>=u-1e-6)return Gl(i,t,e,n,r,s,o,a,l,c,f);Gl(i,t,e,n,r,s,o,u,l,c,Xt),Gl(i,t,e,n,r,s,u,a,l,c,f)}function ki(i,t,e,n,r,s,o,a,l,c,u=0){let f=(h,d,g)=>{let b=v=>u?(o-v)/u:.5,x=t(e,r,h),p=t(n,r,h),y=t(n,r,d),M=t(e,r,d);i.tri(x,p,y,a,a,a,[0,b(h),1,b(h),1,b(d)],g),i.tri(x,y,M,a,a,a,[0,b(h),1,b(d),0,b(d)],g)};o<=l+1e-6?f(s,o,Xt):s>=l-1e-6?f(s,o,c):(f(s,l,Xt),f(l,o,c))}function o2(i,t,e,n,r,s,o,a,l,c){let u=t(e,r,o),f=t(n,r,o),h=t(n,s,o),d=t(e,s,o),g=0,b=(s-r)/c;i.tri(u,f,h,a,a,a,[0,g,1,g,1,b],l),i.tri(u,h,d,a,a,a,[0,g,1,b,0,b],l)}function l0(i,t,e){let n=new ce,r=new ce,s=new ce(!0),o=new at(r0),a=new at(s0),l=[],c=[],u=[];for(let f of i){let h=n.count,d=r.count,g=s.count,b=t.get(f.opening.id)??Hl,x=f.width,{sill:p,top:y,bucket:M}=f,v=(_,T,C)=>[f.start[0]+f.axis[0]*_+f.toRoom[0]*T,C,f.start[1]+f.axis[1]*_+f.toRoom[1]*T],S=(f.faceRoom-f.faceOut)/2,w=f.opening.mark==="closed",A=f.opening.type==="door"&&ir(f.opening,f.exterior)==="passage";if(f.opening.type==="door"&&!A||f.opening.type==="garage"){let _=-f.faceOut-.012,T=f.faceRoom+.012,C=f.opening.type==="garage"&&(w?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),I=C?Ht(hi,.8):new at(r0),L=C?Ht(hi,1):new at(s0);ae(n,v,-.045,.02,_,T,0,y+.045,I,L,e,M),ae(n,v,x-.02,x+.045,_,T,0,y+.045,I,L,e,M),ae(n,v,.02,x-.02,_,T,y-.02,y+.045,I,L,e,M)}if(f.opening.type==="door"){let _=ir(f.opening,f.exterior),T=Md(_),C=f.opening.swing==="out"?-1:1,I=C>0?f.faceRoom:-f.faceOut,L=f.opening.leaves===2,P=.02,E=x-.02,D=vd(x,_,f.hingeAtStart,f.opening);if(D){for(let[B,G]of D.panels)ae(n,v,B,B+.04,S-.03,S+.03,.02,y-.02,o,a,e,M),ae(n,v,G-.04,G,S-.03,S+.03,.02,y-.02,o,a,e,M),ae(n,v,B,G,S-.03,S+.03,.02,.1,o,a,e,M),ki(r,v,B+.04,G-.04,S,.1,y-.02,es,e,M);P=D.x0,E=D.x1}let U=L?(E-P)/2-.004:E-P,N=T?.06:.04;T&&(ae(n,v,.02,x-.02,-f.faceOut-.02,f.faceRoom,0,.02,new at(th),a,e,M),f.exterior&&ae(n,v,x/2-.08,x/2+.08,-f.faceOut-.1,-f.faceOut,y+.1,y+.17,Ht(hi,.55),Ht(hi,.85),e,Xt));let k=A?[]:[[f.hingeAtStart,b.open]];L&&!A&&k.push([!f.hingeAtStart,b.open2??0]);for(let[B,G]of k){let V=Math.min(1,Math.max(0,G)),nt=_==="sliding"?0:V*t2,$=_==="sliding"?V*U:0,ot=(re,Vt,Kt)=>{let se=re*Math.cos(nt)-Vt*Math.sin(nt)-$,jt=I+C*(Vt*Math.cos(nt)+re*Math.sin(nt)+($?.05:0));return v(B?P+se:E-se,jt,Kt)},K=V>.05?Xt:M,ht=w?!!b.sensed&&V<.05:V>.9,X=ht?Ht(hi,.7):new at(T?i2:e2),J=ht?Ht(hi,.9):new at(T?r2:n2);_==="glass"?(ae(n,ot,0,.05,-N,0,.01,y-.01,X,J,e,K),ae(n,ot,U-.05,U,-N,0,.01,y-.01,X,J,e,K),ae(n,ot,.05,U-.05,-N,0,.01,.12,X,J,e,K),ae(n,ot,.05,U-.05,-N,0,y-.08,y-.01,X,J,e,K),ki(r,ot,.05,U-.05,-N/2,.12,y-.08,es,e,K)):ae(n,ot,0,U,-N,0,.01,y-.01,X,J,e,K),_==="front_glass"?ki(r,ot,.12,U-.12,.001,y*.55,y-.18,es,e,K):T&&ki(r,ot,.1,.18,.001,.3,y-.3,es,e,K);let ft=Math.min(1.05,y*.5),mt=T?.3:.012,pt=T?U-.11:U-.16,At=T?U-.08:U-.05;ae(n,ot,pt,At,.004,.05,ft-mt,ft+mt,new at(o0),new at(a0),e,K),ae(n,ot,pt,At,-N-.05,-N-.004,ft-mt,ft+mt,new at(o0),new at(a0),e,K)}}else if(f.opening.type==="garage"){let _=Math.min(1,Math.max(0,b.cover??1)),T=new at(13951231),C=f.faceRoom-.03,I=y*(1-_);_>.01&&ki(s,v,.02,x-.02,C,I,y,T,e,M,.5);let L=(1-_)*y;L>.01&&o2(s,v,.02,x-.02,C,C+L,y+.03,T,M,.5)}else if(ir(f.opening,f.exterior)==="glass_wall"){ae(n,v,0,.04,S-.025,S+.025,p,y,o,a,e,M),ae(n,v,x-.04,x,S-.025,S+.025,p,y,o,a,e,M),ae(n,v,.04,x-.04,S-.025,S+.025,p,p+.03,o,a,e,M),ae(n,v,.04,x-.04,S-.025,S+.025,y-.04,y,o,a,e,M);let C=Math.max(1,Math.round((x-2*.04)/.9)),I=(x-2*.04)/C;for(let L=1;L<C;L++){let P=.04+L*I;ae(n,v,P-.02,P+.02,S-.025,S+.025,p+.03,y-.04,o,a,e,M)}for(let L=0;L<C;L++){let P=.04+L*I+(L?.02:0),E=.04+(L+1)*I-(L<C-1?.02:0);ki(r,v,P,E,S,p+.03,y-.04,es,e,M)}}else{ae(n,v,0,.06,S-.035,S+.035,p,y,o,a,e,M),ae(n,v,x-.06,x,S-.035,S+.035,p,y,o,a,e,M),ae(n,v,.06,x-.06,S-.035,S+.035,p,p+(p>.05?.06:.03),o,a,e,M),ae(n,v,.06,x-.06,S-.035,S+.035,y-.06,y,o,a,e,M),p>.3&&(ae(n,v,-.04,x+.04,S+.035,f.faceRoom+.07,p-.03,p,new at(th),a,e,M),f.exterior&&ae(n,v,-.03,x+.03,-f.faceOut-.06,S-.035,p-.04,p-.02,new at(th),a,e,M));let C=.055,I=p+(p>.05?.06:.03),L=y-.06,P=S+.035,E=S+.035+.06,U=f.opening.leaves===2?[{atStart:f.hingeAtStart,x0:f.hingeAtStart?.06:x/2,x1:f.hingeAtStart?x/2:x-.06,open:b.open,tilt:b.tilt},{atStart:!f.hingeAtStart,x0:f.hingeAtStart?x/2:.06,x1:f.hingeAtStart?x-.06:x/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:f.hingeAtStart,x0:.06,x1:x-.06,open:b.open,tilt:b.tilt}];for(let N of U){let k=N.open>.02||N.tilt>.02,B=w?!!b.sensed&&!k:k,G=B?Ht(hi,.75):new at(JM),V=B?Ht(hi,.95):a,nt=N.x0,$=N.x1,ot=$-nt,K=N.open*jM,ht=N.tilt*s2,X=(ft,mt,pt)=>{let At=pt-I,re=mt+At*Math.sin(ht),Vt=I+At*Math.cos(ht),Kt=ft*Math.cos(K)-(re-P)*Math.sin(K);re=P+(re-P)*Math.cos(K)+ft*Math.sin(K);let se=N.atStart?nt+Kt:$-Kt;return v(se,re,Vt)},J=K>.05?Xt:M;if(ae(n,X,0,C,P,E,I,L,G,V,e,J),ae(n,X,ot-C,ot,P,E,I,L,G,V,e,J),ae(n,X,C,ot-C,P,E,I,I+C,G,V,e,J),ae(n,X,C,ot-C,P,E,L-C,L,G,V,e,J),ki(r,X,C,ot-C,(P+E)/2,I+C,L-C,B?Ht(hi,.16):es,e,J),ir(f.opening,f.exterior)==="bars"){let ft=(I+L)/2,mt=(P+E)/2;ae(n,X,C,ot-C,mt-.012,mt+.012,ft-.012,ft+.012,G,V,e,J),ae(n,X,ot/2-.012,ot/2+.012,mt-.012,mt+.012,I+C,L-C,G,V,e,J)}}}if(b.cover!==null){let _=-f.faceOut,T=y+.2;ae(n,v,-.05,x+.05,_-.15,_,y,T,new at(QM),a,e,M);let C=Math.min(1,Math.max(0,b.cover));if(C>.01){let I=y-C*(y-p);ki(s,v,0,x,_-.07,I,y,new at(16777215),e,M,.045)}}l.push({id:f.opening.id,start:h,end:n.count}),c.push({id:f.opening.id,start:d,end:r.count}),u.push({id:f.opening.id,start:g,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:u}}var a2=.3,c0=2.6;function u0(i,t=.32,e=.22,n=[]){let r=i.map(S=>S[0]),s=i.map(S=>S[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),u=c-l>=a-o,f=e*.7071,h=S=>{let w=[S,[S[0]+e,S[1]],[S[0]-e,S[1]],[S[0],S[1]+e],[S[0],S[1]-e]],A=[...w,[S[0]+f,S[1]+f],[S[0]-f,S[1]+f],[S[0]+f,S[1]-f],[S[0]-f,S[1]-f]];return w.every(_=>ue(_,i))&&!n.some(_=>A.some(T=>ue(T,_)))},d=(S,w)=>h(u?[S,w]:[w,S]),g=(S,w)=>{let A=Math.ceil(Math.hypot(w[0]-S[0],w[1]-S[1])/.05);for(let _=1;_<A;_++)if(!h([S[0]+(w[0]-S[0])*_/A,S[1]+(w[1]-S[1])*_/A]))return!1;return!0},[b,x,p,y]=u?[o,a,l,c]:[l,c,o,a],M=[],v=!0;for(let S=b+e;S<=x-e+1e-6;S+=t){let w=null,A=null,_=.05;for(let L=p;L<=y+1e-6;L+=_)if(d(S,L)&&(A??=L),(!d(S,L)||L+_>y+1e-6)&&A!==null){let P=d(S,L)?L:L-_;(!w||P-A>w[1]-w[0])&&(w=[A,P]),A=null}if(!w||w[1]-w[0]<.2)continue;let T=L=>{let[P,E]=L?w:[w[1],w[0]];return[u?[S,P]:[P,S],u?[S,E]:[E,S]]},C=T(v),I=M[M.length-1];if(I&&n.length&&!g(I,C[0])){let L=T(!v);if(!g(I,L[0]))continue;C=L,v=!v}M.push(C[0],C[1]),v=!v}return M}function nh(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var eh=i=>Math.atan2(Math.sin(i),Math.cos(i));function h0(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=eh(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),c0*e),!0)}let a=Math.atan2(r,s),l=eh(a-i.heading);if(i.heading=eh(i.heading+Math.sign(l)*Math.min(Math.abs(l),c0*e)),Math.abs(l)<.35){let c=Math.min(o,a2*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}var ns=null,f0=new Map;function l2(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=f0.get(r);if(s)return s;e&&bl(e),ns??=new Xr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),ns.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),ns.setSize(t,t,!1),ns.setClearColor(0,0);let o=new ce,a=new Ve,l=De(i.type);if(l?.light)Il(o,l,{x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Wl(o,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let y={id:"preview",type:i.type,x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};if(Cl(o,a,new ce,y),i.type==="robot_vacuum"){let M=(w,A,_,T,C,I,L)=>{let P=Array.from({length:20},(E,D)=>{let U=D/20*Math.PI*2;return[w+Math.cos(U)*_,A+Math.sin(U)*_]});me(o,P,T,C,I,L,{aoFrom:0,bottom:!1})},v=i.d*.28,S=Math.min(i.w*.4,i.d*.27);M(0,v,S,.012,.08,2371657,3424863),M(0,v,S*.32,.08,.1,3820138,5070726)}if(i.type==="fan_ceiling"||i.type==="fan_ceiling_light"||i.type==="fan_wall"||i.type==="fan_floor"){let M=o.p.length,v=a.p.length;io(o,a,i.type,i.w,i.d,i.h,i.variant??null);let S=i.type==="fan_ceiling"||i.type==="fan_ceiling_light"?i.h*.18:i.type==="fan_wall"?i.h*.5:i.h*.78,w=0;for(let A=M+1;A<o.p.length;A+=3)o.p[A]+=S;for(let A=M+2;A<o.p.length;A+=3)o.p[A]+=w;for(let A=v+1;A<a.p.length;A+=3)a.p[A]+=S;for(let A=v+2;A<a.p.length;A+=3)a.p[A]+=w;i.type==="fan_ceiling_light"&&Wl(o,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:null,lamp:"fan"},i.h,16758087)}}let c=new $i,u=new Yt(o.geometry(),new le({vertexColors:!0,color:new at(n,n,n)})),f=new yn(a.geometry(),new _n({vertexColors:!0,color:new at(n*1.8,n*1.8,n*1.8)}));c.add(u,f);let h=new je().setFromObject(c),d=h.getCenter(new H),g=new ri(-1,1,1,-1,.01,100);g.position.copy(d).add(new H(.9,.75,1.3).normalize().multiplyScalar(20)),g.lookAt(d),g.updateMatrixWorld();let b=.05;for(let y of[h.min.x,h.max.x])for(let M of[h.min.y,h.max.y])for(let v of[h.min.z,h.max.z]){let S=new H(y,M,v).applyMatrix4(g.matrixWorldInverse);b=Math.max(b,Math.abs(S.x),Math.abs(S.y))}let x=b*1.12;g.left=-x,g.right=x,g.top=x,g.bottom=-x,g.updateProjectionMatrix(),ns.render(c,g);let p=ns.domElement.toDataURL("image/png");return u.geometry.dispose(),u.material.dispose(),f.geometry.dispose(),f.material.dispose(),f0.set(r,p),p}var p0={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},c2=2.4,u2=1.4,h2=.22,m0=140,sh=32,f2=500,g0=160,x0=33,b0=.028,d2=.09,Ot=2767456,p2=1911110,m2=1,_0=new Set(["ceiling","downlight","spot","panel","round_panel","pendant","strip","fan"]),ih=450,y0=125,g2=.08,oh={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03],fan:[1.4,1.4,.4],column:[.12,.12,1.45],tv_bars:[.65,.16,.38],orb_table:[.28,.28,.24],portable:[.24,.24,.26],ambient:[.2,.2,.2],cube:[.26,.26,.24],round_panel:[.42,.42,.045],garden_set:[.65,.18,.32],wall_updown:[.14,.12,.32]},x2=new at(1714765);function b2(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var ah=class{host;options;renderer;scene=new $i;camera=new Ze(38,1,.1,400);controls;labels;root=new Ke;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];fanRotors=new Map;devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new yn(new Qt,new _n({color:10471679,transparent:!0,opacity:.4,blending:Fe,depthWrite:!1}));snow=new Ur(new Qt,new Ji({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Yt(new ys(1,28),new le({color:16767370,transparent:!0,opacity:0,blending:Fe,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=_2(),this.blindTexture=v2(),this.haloTexture=T2(),this.ground=new Yt(new wi(1,1),new le({transparent:!0,blending:Fe,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.building&&this.fit(350),this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){bl(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,this.rebuild(),e&&this.fit(0),this.invalidate()}setFloor(t,e=!0){this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(l=>l.floor.rooms.some(c=>c.id===t)),n=e?.floor.rooms.find(l=>l.id===t);if(!e||!n)return;let r=qp(e.floor,n,e.ty),s=.72,o=this.controls.view.theta,a=Ku(r,o,s,this.camera.aspect,this.camera.fov*ie,this.cameraFrame(),4);this.controls.flyTo({target:r.getCenter(new H).add(a.offset),radius:a.radius,phi:s})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t;let e=new Set(t.filter(r=>r.active&&r.fanMotor!==!1&&r.furnitureId&&this.fanRotors.has(r.furnitureId)).map(r=>r.furnitureId));for(let[r,s]of this.fanRotors)s.active=e.has(r);this.labelsDirty=!0,this.effectFloors=new Set(t.filter(r=>r.effect&&r.glow).map(r=>r.floorId)),this.deviceFloor=new Map(t.map(r=>[r.id,r.floorId]));let n=new Set;for(let r of t){n.add(r.id);let s=this.devicePins.get(r.id);s||(s={el:this.makeDevicePin(r.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(r.id,s),this.labels.append(s.el));let o=s.el;s.icon!==r.icon&&(s.icon=r.icon,o.querySelector(".fp3d-dev-icon").innerHTML=r.icon),s.text!==r.text&&(s.text=r.text,o.querySelector(".fp3d-dev-text").textContent=r.text);let a=r.caption??"";s.caption!==a&&(s.caption=a,o.querySelector(".fp3d-dev-name").textContent=a);let l=r.power!==null&&r.power!==void 0&&r.power>=1?r.powerText??`${Math.round(r.power)} W`:"";s.watt!==l&&(s.watt=l,o.querySelector(".fp3d-dev-watt").textContent=l);let c=`${r.name}: ${r.text}`;s.label!==c&&(s.label=c,o.title=r.name,o.setAttribute("aria-label",c)),s.active!==r.active&&(s.active=r.active,o.classList.toggle("fp3d-dev-on",r.active)),s.unavailable!==r.unavailable&&(s.unavailable=r.unavailable,o.classList.toggle("fp3d-dev-na",r.unavailable));let u=r.glow?`rgb(${r.glow.color.map(f=>Math.round(f*255)).join(", ")})`:"";s.glow!==u&&(s.glow=u,u?o.style.setProperty("--fp3d-glow",u):o.style.removeProperty("--fp3d-glow"))}for(let[r,s]of this.devicePins)n.has(r)||(s.el.remove(),this.devicePins.delete(r));for(let r of this.floors)this.buildGlow(r),this.buildLamps(r);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);e!==this.roofWindowsKey&&(this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh(),this.invalidate())}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])ho(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&ho(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Ke;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=n.floor.elevation+.03;for(let c of s)if(c.playing)for(let u=0;u<3;u++){let f=new Yt(new ws(.92,1,48),new le({color:3662079,transparent:!0,opacity:0,blending:Fe,depthWrite:!1,side:Me}));f.rotation.x=-Math.PI/2,f.position.set(c.x,o+u*.002,c.z),f.userData={sound:!0,phase:u/3,level:c.level},f.frustumCulled=!1,r.add(f)}let a=[],l=new Set;for(let c of s)for(let u of c.members){let f=s.find(d=>d.id===u);if(!f||f===c)continue;let h=[c.id,f.id].sort().join("|");l.has(h)||(l.add(h),a.push(c.x,o+.02,c.z,f.x,o+.02,f.z))}if(a.length){let c=new Qt;c.setAttribute("position",new Gt(a,3));let u=new yn(c,new _n({color:3662079,transparent:!0,opacity:.45,blending:Fe,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=rh(r),o=v0(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let s=document.createElement("img");s.src=n.picture,s.alt="",s.addEventListener("error",()=>s.replaceWith(document.createTextNode(n.initials))),r.append(s)}else r.textContent=n.initials}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=Jp(t),n=e?1:0;n===kl.value&&(!e||zl.value.equals(new H(...e)))||(kl.value=n,e&&zl.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Kp(t);let e=Vl(t),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines]:[]];for(let r of n)r.blending=e,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new at(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new ms(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let u=s.x0+Math.random()*(s.x1-s.x0),f=s.y0+Math.random()*(s.y1-s.y0),h=s.z0+Math.random()*(s.z1-s.z0);o.set([u,f,h],c*3),n&&o.set([u,f-.45,h],c*3+3)}t.geometry.dispose();let l=new Qt;l.setAttribute("position",new Gt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let u=0;u<l.length;u+=6){let f=l[u+1]-c,h=l[u]+o*n;f<r.y0&&(f+=s,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[u]=h,l[u+1]=f,l[u+3]=h-o*.05,l[u+4]=f-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let u=0;u<l.length;u+=3){let f=l[u+1]-(.9+.6*e.snow)*n,h=l[u]+(o+Math.sin(c+u)*.4)*n;f<r.y0&&(f+=s,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[u]=h,l[u+1]=f}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*ie,o=(r?t.azimuth+180:t.azimuth)*ie,a=Math.max(10,Math.abs(t.elevation))*ie,l=this.weatherBox,c=new H((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),f=new H(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(f,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let h=this.skyDisc.material;h.color.set(r?13621486:16767370),h.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t){this.openingTargets=t,this.invalidate()}setFridgeDoors(t){for(let[e,n]of t){let r=this.fridges.get(e)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(e,r)}for(let e of[...this.fridges.keys()])t.has(e)||this.fridges.delete(e);this.invalidate()}stepFridges(t){let e=1-Math.exp(-t/g0),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}stepFans(t){let e=!1;for(let n of this.fanRotors.values()){if(!n.active)continue;let r=n.type==="fan_ceiling"||n.type==="fan_ceiling_light",s=t*(r?.0048:.009);r?n.rotor.rotation.y=(n.rotor.rotation.y-s)%(Math.PI*2):n.rotor.rotation.z=(n.rotor.rotation.z-s)%(Math.PI*2),e=!0}return e}buildFridges(t){let e=new ce;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Nu(e,n,pn(t.floor,n),r?.l??0,r?.r??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view;return{theta:t.theta,phi:t.phi,radius:t.radius}}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values())t.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&b2();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new Xr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ce,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Bl(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&"roomId"in n&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))e.dispose();this.root.remove(t.group)}this.floors=[],this.floorMap=new Map,this.fanRotors=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let f=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-h.left,f.top+f.height/2-h.top)},f2)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",u=>u.preventDefault()),e.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let f=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,f.left+f.width/2-h.left,f.top+f.height/2-h.top)}),e.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let f=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-h.left,f.top+f.height/2-h.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=jp(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes),r=S2(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b])}t.lightSurface=n;let s=new Qt;s.setAttribute("position",new Gt(n.pos,3)),s.setAttribute("color",new Gt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Gt(n.fold,1));let o=new Zi(new Uint32Array(n.pos.length/3),1);o.setUsage($c),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=t.floor.height,n=[];for(let r of this.devices){let s=this.glowOf(r);if(r.floorId!==t.floor.id||!s)continue;let o=n0(t.floor,r.x,r.z),a=i0(t.lightZones,o),[l,,c]=r.size??(r.lamp?oh[r.lamp]:[.3,.3,.3]),u=r.base??0,f={ceiling:[e-.12,"ceiling"],downlight:[e-.03,"spot"],spot:[e-c,"spot"],panel:[e-.05,"ceiling"],pendant:[Math.max(.5,e-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<m2?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"],fan:[u+c*.08,"ceiling"],column:[u+c*.55,"omni"],tv_bars:[u+c*.55,"omni"],orb_table:[u+c*.55,"omni"],portable:[u+c*.55,"omni"],ambient:[u+c,"up"],cube:[u+c*.55,"omni"],round_panel:[e-.05,"ceiling"],garden_set:[u+c,"up"],wall_updown:[u+c/2,"wall"]},[h,d]=r.lamp?f[r.lamp]:[r.y,"omni"],g=r.lightY??h,b=s.color;if(r.lamp==="strip"){let x=(r.rotation??0)*ie,p=!!r.upright||Math.abs(r.roll??0)>45;for(let y of[-1/3,0,1/3])r.upright?n.push({x:r.x,y:u+l*(.5+y),z:r.z,color:b,level:s.level*.55,kind:"omni",room:a}):n.push({x:r.x+Math.cos(x)*l*y,y:g,z:r.z+Math.sin(x)*l*y,color:b,level:s.level*.55,kind:p?"omni":d,room:a})}else n.push({x:r.x,y:g,z:r.z,color:b,level:s.level,kind:d,room:a})}return n}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(f=>{let h=t.geo.openings.find(g=>g.opening.id===f.id);if(h&&ir(h.opening,h.exterior)==="passage")return 1;let d=t.openings.get(f.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(f=>`${f.x.toFixed(2)},${f.y.toFixed(2)},${f.z.toFixed(2)},${f.kind},${f.level.toFixed(3)},${f.color.map(h=>h.toFixed(3)).join("/")}`).join(";")+"|"+r.map(f=>f.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length||this.roomTint){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=e0(e,n,.42,r);a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let f=0;f<l.length/18;f++){let h=!1;for(let d=f*18;d<f*18+18&&!h;d++)h=l[d]>.004;if(h)for(let d=0;d<6;d++)c[u++]=f*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),t.glowMesh.visible=u>0}makeMaterials(t){return{floor:Un(new le({vertexColors:!0}),this.themeUniform),pattern:y2(this.patternTexture),wall:Un(ui(new le({vertexColors:!0}),t,"solid"),this.themeUniform),glassWall:ui(new le({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),coveredRoof:Un(ui(new le({vertexColors:!0,transparent:!0,depthWrite:!1,side:Me}),t,"roof"),this.themeUniform),shadow:new le({vertexColors:!0,blending:Ps,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:Me,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Un(ui(new _n({vertexColors:!0,transparent:!0,blending:Vl(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:ui(new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:Un(ui(new le({vertexColors:!0,side:Me}),t),this.themeUniform),glass:ui(new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me}),t),blinds:Un(ui(new le({map:this.blindTexture,vertexColors:!0,side:Me}),t),this.themeUniform),flow:M2(this.flowTime),solarLive:ju(this.flowTime),lamps:Un(new le({vertexColors:!0}),this.themeUniform),halos:new Ji({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1}),cones:new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me}),screens:new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me})}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=Wu(n)?.id===s.id?o.filter(K=>K.face===Hu).map(K=>({field:K,face:Ap(n,K)})):[],l=o.filter(K=>K.face.startsWith(`wall:${s.id}:`));if(l.length){let K=new Map(Ep(n,s.id).map(ht=>[ht.key,ht]));for(let ht of l){let X=K.get(ht.face);X&&a.push({field:ht,face:X})}}let u=(n.settings.roof.sections??[]).some(K=>!K.open&&K.base<s.elevation+s.height-.05)?(K,ht)=>{let X=Fd(n,K,ht);return X===null?null:X-s.elevation}:void 0,f=Gp(Ju(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Hp(n.floors,s),a,u),h={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(h),g=new Ke,b=new Yt(f.floor,d.floor),x=new Yt(f.shadow,d.shadow);x.renderOrder=1;let p=new Yt(f.floor,d.pattern);p.renderOrder=2;let y=new Yt(new Qt,d.glow);y.renderOrder=3,y.visible=!1;let M=new Yt(new Qt,d.frames),v=new Yt(new Qt,d.blinds),S=new Yt(new Qt,d.glass);S.renderOrder=4;let w=new Yt(new Qt,d.lamps);w.visible=!1;let A=new Yt(new Qt,d.cones);A.visible=!1,A.renderOrder=3;let _=new Ur(new Qt,d.halos);_.visible=!1,_.renderOrder=7;let T=new Yt(new Qt,d.cones);T.visible=!1,T.renderOrder=7;let C=new Yt(new Qt,d.cones);C.visible=!1,C.renderOrder=7;let I=new Yt(new Qt,d.lamps);I.visible=!1;let L=new Yt(new Qt,d.screens);L.visible=!1,L.renderOrder=5;let P=new Yt(new Qt,d.flow);P.renderOrder=5,P.frustumCulled=!1;let E=Qu(a,s.elevation),D=E?new Yt(E.geometry,d.solarLive):null;D&&(D.renderOrder=6,ho(E,this.solarLevels));for(let K of[M,v,S])K.frustumCulled=!1;let U=new Yt(f.walls,d.glassWall),N=new Yt(f.walls,d.coveredRoof),k=new Yt(f.walls,d.wall);U.renderOrder=6,N.renderOrder=5,g.add(b,x,p,y,k,new yn(f.lines,d.lines),M,v,S,P,w,A,_,T,C,I,L,N,U,...D?[D]:[]);for(let K of s.furniture){if(K.type!=="fan_ceiling"&&K.type!=="fan_ceiling_light"&&K.type!=="fan_wall"&&K.type!=="fan_floor")continue;let ht=new ce,X=new Ve;io(ht,X,K.type,K.w,K.d,K.h,K.variant);let J=new Ke;J.add(new Yt(ht.geometry(),d.wall),new yn(X.geometry(),d.lines));let ft=new Ke,mt=K.rotation*ie;ft.position.set(K.x,pn(s,K),K.z),ft.rotation.y=-mt,J.position.set(0,K.type==="fan_ceiling"||K.type==="fan_ceiling_light"?K.h*.18:K.type==="fan_wall"?K.h*.5:K.h*.78,0),ft.add(J),g.add(ft);let pt=this.devices.some(At=>At.furnitureId===K.id&&At.active);this.fanRotors.set(K.id,{rotor:J,type:K.type,active:pt})}this.root.add(g);let B=document.createElement("button");B.className="fp3d-pin fp3d-pin-floor",B.dataset.floor=s.id;let G=document.createElement("b");G.textContent=s.name||"\u2013";let V=document.createElement("span");V.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",B.append(G,V),B.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(B);let nt=t.get(s.id),$=[],ot=null;for(let K of s.rooms){let ht=document.createElement("button");ht.className="fp3d-pin",ht.dataset.room=K.id,ht.dataset.floor=s.id,this.fillRoomPin(ht,K.name,this.roomInfo.get(K.id)),ht.addEventListener("click",()=>this.options.onRoomTap?.(s.id,K.id)),this.labels.append(ht);let[X,J]=Sd(K.points);$.push({pin:ht,room:K,cx:X,cz:J});for(let[ft,mt]of K.points)ot??={x0:ft,x1:ft,z0:mt,z1:mt},ot.x0=Math.min(ot.x0,ft),ot.x1=Math.max(ot.x1,ft),ot.z0=Math.min(ot.z0,mt),ot.z1=Math.max(ot.z1,mt)}this.floors.push({floor:s,rank:r.indexOf(s),group:g,geo:f,floorMesh:b,shadowMesh:x,patternMesh:p,glowMesh:y,lightSurface:null,lightZones:null,framesMesh:M,glassMesh:S,blindsMesh:v,flowMesh:P,solarMesh:D,solarLive:E,lampMesh:w,sunMesh:A,sunSig:"",haloMesh:_,coneMesh:T,trailMesh:C,fridgeMesh:I,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:k,screenMesh:L,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:ot,roomPins:$,labelSize:null,materials:d,mask:h,openings:new Map,y:nt?.y??0,o:nt?.o??1,ty:0,to:1,appliedO:-1,label:B})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Hl);this.buildOpenings(s),this.buildFlows(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(f=>f.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?Up(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(jr(this.building).map(f=>[f.key,f])),n=this.building.settings.roof?.solar??[],r=ju(this.flowTime),s=[],o=new Ke,a=Un(new le({vertexColors:!0,transparent:!0,side:Me}),this.themeUniform),l=Un(new _n({vertexColors:!0,transparent:!0,blending:Vl(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Un(new le({vertexColors:!0,transparent:!0,side:Me,depthWrite:!1}),this.themeUniform),u=t.map(f=>{let h=new Ke;h.add(new Yt(f.solid.geometry(),a),new yn(f.lines.geometry(),l)),f.glass.count&&h.add(new Yt(f.glass.geometry(),c));let d=n.flatMap(b=>{let x=e.get(b.face);return x&&(x.section?f.sections?.includes(x.section):f===t[0])?[{face:x,field:b}]:[]}),g=Qu(d,f.floor.elevation+f.base);if(g){let b=new Yt(g.geometry,r);b.renderOrder=9,h.add(b),s.push(g),ho(g,this.solarLevels)}return h.renderOrder=8,o.add(h),{group:h,floorId:f.floor.id,base:f.base,lift:f.lift!==!1}});o.renderOrder=8,this.scene.add(o),this.roof={group:o,parts:u,solid:a,lines:l,glass:c,live:r,lives:s},this.placeRoof()}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=this.floorId===null&&this.wallMode!=="cut"?.94*n:0,s=1-Math.exp(-t/m0),o=this.roofO;this.roofO+=(r-this.roofO)*s,Math.abs(r-this.roofO)<.004&&(this.roofO=r),e.group.visible=this.roofO>.02;for(let a of e.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=l.ty>0?Math.min(1,l.y/l.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+l.y+a.base+(1-this.roofO)*2.2+(a.lift?c*u2:0)}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==o&&this.roofO!==r}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:h2)):r=this.explode?n.rank*c2:0,n.ty=r,n.to=s,t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.coveredRoof.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/m0);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/g0);for(let r of this.floors){let s=!1;for(let[o,a]of r.openings){let l=this.openingTargets.get(o)??Hl,c=(h,d)=>(h??null)===(d??null)||typeof h=="number"&&typeof d=="number"&&Math.abs(h-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},f=!1;for(let h of["open","open2","tilt","tilt2"]){let d=l[h]??0,g=a[h]??0,b=d-g;Math.abs(b)<.003?u[h]=d:(u[h]=g+b*n,f=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let h=l.cover-a.cover;Math.abs(h)<.003?u.cover=l.cover:(u.cover=a.cover+h*n,f=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(o,u),s=!0),e||=f}s&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new at(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*g2+r)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let f=this.flashes.get(u);if(!f||f<=e)return 0;let h=f-e,d=h>ih?.5+.5*Math.sin(h/140):h/ih;return Math.round(d*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=r.map(u=>this.glowOf(u)),a=r.map((u,f)=>`${n(u.id)},${o[f]?`${o[f].level.toFixed(3)},${o[f].color.map(h=>h.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let u=new ce,f=[],h=[],d=new Map,g=t.floor.height;for(let b of r){let x=b.lamp==="strip"?(b.base??g)>Math.min(t.floor.cut_height,g):b.lamp?_0.has(b.lamp):b.model==="camera_ceiling";if(!b.lamp&&!b.model||x&&this.wallMode==="cut")continue;let p=u.count,y=b.pack?De(b.pack):void 0,[M,v,S]=b.size??[.3,.3,.3];b.model?gp(u,b.model,b.x,b.model==="camera_ceiling"?g:b.y,b.z,b.rotation??0):y?Il(u,y,{x:b.x,z:b.z,rotation:b.rotation??0,w:M,d:v,h:S,mirror:b.mirror},b.base??0,65280):Wl(u,{...b,lamp:b.lamp},g,65280),d.set(b.furnitureId??b.id,{start:p,end:u.count}),b.pickable!==!1&&f.push({id:b.id,start:p,end:u.count}),b.furnitureId&&h.push({id:b.furnitureId,start:p,end:u.count})}t.lampTris=f,t.lampFurnTris=h,t.lampRanges=d,t.lampShade=gd(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,f)=>{let h=t.lampRanges.get(u.furnitureId??u.id);if(!h)return;let d=o[f],g=d?.55+.45*d.level:0,b=d?new at(...d.color.map(y=>Math.min(1,y*g))):new at(p2),x=n(u.id);x>0&&b.lerp(new at(1,1,1),.7*x);let p=new at(b.getHex());xd(c,t.lampShade,h,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.sun,n=(this.building?.settings.north??0)*ie,r=this.weather?.cloud??0,s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(s===t.sunSig)return;t.sunSig=s;let o=new ce;if(e&&e.elevation>2&&r<.97){let a=Math.min(1,e.elevation/12)*(1-.8*r),l=e.elevation*ie,c=e.azimuth*ie,u=[Math.sin(n+c),-Math.cos(n+c)],f=1/Math.tan(l);for(let h of t.geo.openings){if(h.opening.type!=="window"||!h.exterior)continue;let d=[-h.toRoom[0],-h.toRoom[1]],g=d[0]*u[0]+d[1]*u[1];if(g<.05)continue;let b=t.openings.get(h.opening.id),x=h.top-(b?.cover??0)*(h.top-h.sill);if(x-h.sill<.05)continue;let p=(_,T)=>{let C=Math.min(7,T*f);return[h.start[0]+h.axis[0]*_+h.toRoom[0]*h.faceRoom-u[0]*C,.02,h.start[1]+h.axis[1]*_+h.toRoom[1]*h.faceRoom-u[1]*C]},y=.14*a*Math.min(1,g*1.5),M=new at(1*y,.82*y,.55*y),v=M.clone().multiplyScalar(.45),S=t.floor.rooms.find(_=>_.id===h.opening.room_id);if(!S||S.points.length<3)continue;let w=Math.max(1,Math.ceil(Math.min(7,x*f)/.25)),A=Math.max(1,Math.ceil(h.width/.3));for(let _=0;_<w;_++){let T=h.sill+(x-h.sill)*_/w,C=h.sill+(x-h.sill)*(_+1)/w,I=_/w,L=(_+1)/w,P=M.clone().lerp(v,I),E=M.clone().lerp(v,L);for(let D=0;D<A;D++){let U=h.width*D/A,N=h.width*(D+1)/A,k=p((U+N)/2,(T+C)/2);if(!ue([k[0],k[2]],S.points))continue;let B=p(U,T),G=p(N,T),V=p(N,C),nt=p(U,C);o.tri(B,G,V,P,P,E),o.tri(B,V,nt,P,E,E)}}}}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=o.geometry(),t.sunMesh.visible=o.count>0}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new ce,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let p=(l.rotation??0)*ie,y=[-Math.sin(p),Math.cos(p)],M=l.model==="camera_ceiling",v=l.reach??(M?3:4.5),S=(l.fov??(M?360:90))*ie/2,w=l.motion?new at(.9,.12,.16):new at(.04,.22,.28),A=new at(0,0,0),_=Math.max(4,Math.round(S/.15)),T=.015,C=t.geo.walls2d,I=E=>{let D=y[0]*Math.cos(E)-y[1]*Math.sin(E),U=y[1]*Math.cos(E)+y[0]*Math.sin(E),N=v;for(let k of C){let B=k.b[0]-k.a[0],G=k.b[1]-k.a[1],V=D*G-U*B;if(Math.abs(V)<1e-9)continue;let nt=((k.a[0]-l.x)*G-(k.a[1]-l.z)*B)/V,$=((k.a[0]-l.x)*U-(k.a[1]-l.z)*D)/V;nt>.45&&nt<N&&$>=0&&$<=1&&(N=nt)}return N},L=E=>{let D=I(E);return[l.x+(y[0]*Math.cos(E)-y[1]*Math.sin(E))*D,T,l.z+(y[1]*Math.cos(E)+y[0]*Math.sin(E))*D]},P=s.count;for(let E=0;E<_;E++)s.tri([l.x,T,l.z],L(-S+2*S*(E+1)/_),L(-S+2*S*E/_),w,A,A);o.push({id:l.id,start:P,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||_0.has(l.lamp)&&this.wallMode==="cut")continue;let[u,f,h]=l.size??oh[l.lamp],d=l.base??0,g=(l.rotation??0)*ie,b={ceiling:e-.07,downlight:e-.03,spot:e-h,panel:e-.03,pendant:Math.max(.4,e-h)+.08,floor:d+h-.15,uplight:d+h,table:d+h-.09,wall:d+h/2,strip:d+Math.max(.02,h)-.01,bollard:d+h-.08,garden:d+h-.03,fan:d+h*.08,column:d+h*.55,tv_bars:d+h*.55,orb_table:d+h*.55,portable:d+h*.55,ambient:d+h,cube:d+h*.55,round_panel:e-.03,garden_set:d+h-.03,wall_updown:d+h/2}[l.lamp],x=(p,y,M=1)=>{n.push(p,b,y),r.push(...c.color.map(v=>v*c.level*.7*M))};if(l.lamp==="strip")for(let p of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,d+u*(.5+p),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6))):x(l.x+Math.cos(g)*u*p,l.z+Math.sin(g)*u*p,.6);else l.lamp==="wall"||l.lamp==="wall_updown"?x(l.x-Math.sin(g)*(f/2+.05),l.z+Math.cos(g)*(f/2+.05)):x(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let p=new at(...c.color.map(w=>w*.09*c.level)),y=new at(0,0,0),M=Math.max(.03,u/2),v=.45+.35*c.level,S=16;for(let w=0;w<S;w++){let A=w/S*Math.PI*2,_=(w+1)/S*Math.PI*2,T=[l.x+Math.cos(A)*M,b,l.z+Math.sin(A)*M],C=[l.x+Math.cos(_)*M,b,l.z+Math.sin(_)*M],I=[l.x+Math.cos(A)*v,.02,l.z+Math.sin(A)*v],L=[l.x+Math.cos(_)*v,.02,l.z+Math.sin(_)*v];s.tri(T,I,L,p,y,y),s.tri(T,L,C,p,y,p)}}}let a=new Qt;a.setAttribute("position",new Gt(n,3)),a.setAttribute("color",new Gt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=Ju(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),n=e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let r=new ce;for(let s of e){let o=this.screens.get(s.id),a=s.rotation*ie,l=Math.cos(a),c=Math.sin(a),u=(v,S,w)=>[s.x+v*l-w*c,S,s.z+v*c+w*l];if(o.faces){let v=Math.max(.05,s.w)*(s.mirror?-1:1),S=Math.max(.05,s.d),w=Math.max(.005,s.h),A=pn(t.floor,s);for(let _ of o.faces){if(_.part==="cabin"){let B=De(s.type),G=V=>V.color.toLowerCase()==="#13283a"||V.color==="glass";if(B&&B.parts.some(G)){let V=new at(..._.color.map(nt=>Math.min(1,nt*(.3+.5*_.level))));Vu(r,B,s,A,V.getHex(),G);continue}}if(_.part==="band"||_.part==="cabin"){let B=_.part==="cabin",G=A+w*(B?.6:.42),V=B?A+w*.86:G+.07,nt=new at(..._.color.map(ht=>Math.min(1,ht*(.3+.45*_.level)))),$=Math.abs(v)/2+(B?.012:.02),ot=S/2+(B?.012:.02),K=[[-$,-ot],[$,-ot],[$,ot],[-$,ot]];for(let ht=0;ht<4;ht++){let X=K[ht],J=K[(ht+1)%4],ft=u(X[0]*Math.sign(v),G,X[1]),mt=u(J[0]*Math.sign(v),G,J[1]),pt=u(J[0]*Math.sign(v),V,J[1]),At=u(X[0]*Math.sign(v),V,X[1]);r.tri(ft,mt,pt,nt),r.tri(ft,pt,At,nt)}continue}let T=_.part==="right"?.03:-Math.abs(v)/2+.03,C=_.part==="left"?-.03:Math.abs(v)/2-.03,I=A+(_.part==="bottom"?w*.45:w)+.006,L=new at(..._.color.map(B=>Math.min(1,B*(.35+.65*_.level)))),P=new at(0,0,0),E=(B,G,V=I)=>u(B*Math.sign(v),V,G),D=[E(T,-S/2+.03),E(C,-S/2+.03),E(C,S/2-.03),E(T,S/2-.03)];r.tri(D[0],D[2],D[1],L),r.tri(D[0],D[3],D[2],L);let U=.12+.1*_.level,N=L.clone().multiplyScalar(.5),k=[E(T-U,-S/2-U,I+.004),E(C+U,-S/2-U,I+.004),E(C+U,S/2+U,I+.004),E(T-U,S/2+U,I+.004)];for(let B=0;B<4;B++){let G=(B+1)%4;r.tri(D[B],k[G],k[B],N,P,P),r.tri(D[B],D[G],k[G],N,N,P)}}continue}let f=De(s.type);if(f&&!f.light&&o.ring&&f.parts.some(v=>v.glow)){let v=new at(...o.color.map(S=>Math.min(1,S*(.45+.55*o.level))));Vu(r,f,s,pn(t.floor,s),v.getHex())}let h=zu(s,t.floor);if(!h)continue;let d=new at(...o.color.map(v=>Math.min(1,v*(.35+.65*o.level)))),g=new at(0,0,0),b=h.z+.004;if(r.tri(u(h.x0,h.y0,b),u(h.x1,h.y0,b),u(h.x1,h.y1,b),d),r.tri(u(h.x0,h.y0,b),u(h.x1,h.y1,b),u(h.x0,h.y1,b),d),o.plain)continue;let x=.18+.12*o.level,p=d.clone().multiplyScalar(.5),y=[u(h.x0,h.y0,b),u(h.x1,h.y0,b),u(h.x1,h.y1,b),u(h.x0,h.y1,b)],M=[u(h.x0-x,h.y0-x,b+.01),u(h.x1+x,h.y0-x,b+.01),u(h.x1+x,h.y1+x,b+.01),u(h.x0-x,h.y1+x,b+.01)];for(let v=0;v<4;v++){let S=(v+1)%4;r.tri(y[v],M[v],M[S],p,g,g),r.tri(y[v],M[S],y[S],p,g,p)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=r.geometry(),t.screenMesh.visible=r.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=zu(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new Yt(new wi(1,1),new le({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let u=l;new As().load(o.picture,f=>{if(t.screenPics.get(r)!==u){f.dispose();return}f.colorSpace=Ce,u.texture=f;let h=u.mesh.material;h.map=f,h.needsUpdate=!0,this.placeScreenPicture(u.mesh,s,a,f),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s?.width&&s?.height?s.width/s.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),u=c/o,f=e.rotation*ie,h=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,u,1),t.rotation.set(0,-f,0),t.position.set(e.x+h*Math.cos(f)-d*Math.sin(f),(n.y0+n.y1)/2,e.z+h*Math.sin(f)+d*Math.cos(f))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){let e=this.flows.filter(u=>u.floorId===t.floor.id).map(rh).join(";"),n=[],r=[],s=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id)continue;let f=this.flowPhase.get(rh(u))??{speed:v0(u.power),offset:0},h=u.power>.5?Math.min(1,.5+u.power/2500):.22,d=u.color.map(y=>y*h),g=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(g<1e-4)continue;let b=[(u.b[0]-u.a[0])/g,(u.b[1]-u.a[1])/g,(u.b[2]-u.a[2])/g],x=[];if(Math.abs(b[1])<.5){let y=Math.hypot(b[0],b[2])||1;x.push([-b[2]/y,0,b[0]/y])}else x.push([1,0,0],[0,0,1]);let p=this.lowQuality?[[b0*1.4,1]]:[[d2,.25],[b0,1]];for(let[y,M]of p)for(let v of x){let S=y/2,w=(_,T)=>[_[0]+v[0]*S*T,_[1]+v[1]*S*T,_[2]+v[2]*S*T],A=[[w(u.a,-1),u.dist,0],[w(u.b,-1),u.dist+g,0],[w(u.b,1),u.dist+g,1],[w(u.a,1),u.dist,1]];for(let _ of[0,1,2,0,2,3]){let[T,C,I]=A[_];n.push(T[0],T[1],T[2]),r.push(d[0]*M,d[1]*M,d[2]*M),s.push(C,I),o.push(f.speed),a.push(f.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,f]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let h=l.getAttribute(u);h.array.set(f),h.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Qt;c.setAttribute("position",new Gt(n,3)),c.setAttribute("color",new Gt(r,3)),c.setAttribute("uv",new Gt(s,2)),c.setAttribute("flowSpeed",new Gt(o,1)),c.setAttribute("flowOffset",new Gt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=l0(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let r=new at(n.color),s=this.roomTint?.get(n.roomId);s&&r.lerp(new at(...s).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(x2,s?.3:.75);for(let o=n.start*3;o<n.end*3;o++)e.setXYZ(o,r.r,r.g,r.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=Yp(this.activeFloors());e.isEmpty()&&e.set(new H(-4,0,-4),new H(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new H),r=e.getSize(new H),s=this.startView,o=this.floorId===null,a=s?s.phi:.85,l=this.cameraFrame(),c=Math.max(.1,(this.size.w-l.left-l.right)/Math.max(1,this.size.h-l.top-l.bottom)),u=c<1?1.12:1.06,f=$p(e,a,c,this.camera.fov*ie,u),h=s?s.theta:f.theta,d=Ku(e,h,a,this.camera.aspect,this.camera.fov*ie,l),g=Math.max(8,d.radius);this.controls.maxRadius=Math.max(40,g*3),s&&o?n.y=e.min.y+r.y*(this.houseView?.45:.3):n.add(d.offset),this.floorId===null&&(this.houseRadius=g),s&&o&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,s.radius*1.5)),this.controls.flyTo({target:n,radius:s&&o?s.radius:g,phi:a,theta:h},t)}cameraFrame(){let t=this.size.w<700?12:18,e=Math.min(this.size.w*.4,this.labelInset?this.labelInset+8:t);return{width:this.size.w,height:this.size.h,left:e,right:t,top:t,bottom:t}}placeGround(){let t=new je,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new H(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new H(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=w2();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new H),r=t.getSize(new H),s=sh*Math.ceil((Math.max(r.x,r.z)+16)/sh);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-zi-.02,n.z)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new Cs;return r.setFromCamera(new Jt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let h=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Xt;if(h!==Xt&&Math.floor(h/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),f=u?this.pickOpenings.get(u):void 0;if(f)return{entity:f}}else if(a.object===c.wallMesh){let u=c.geo.coveredRoomTris.find(g=>l>=g.start&&l<g.end);if(u){if(this.roomId!==null&&c.floor.rooms.some(b=>b.id===this.roomId&&Xn(b))&&u.roofStart!==void 0&&u.roofEnd!==void 0&&l>=u.roofStart&&l<u.roofEnd)continue;return{floorId:c.floor.id,roomId:u.id}}let f=o(c.geo.outdoorTris,l);if(f)return{floorId:c.floor.id,outdoorId:f};let h=o(c.geo.furnitureTris,l),d=h?this.pickFurniture.get(h):void 0;if(d)return{entity:d};if(a.face&&!h){let g=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,b=Math.floor(g/16),x=g%16,p=this.wallMode==="cut"&&b===0,y=(c.mask.glass.value&1<<x)!==0;if(!p){let M=n.ray.direction,v=Math.hypot(M.x,M.z)||1,S=[a.point.x-M.x/v*.3,a.point.z-M.z/v*.3],w=c.floor.rooms.find(A=>A.points.length>=3&&ue(S,A.points))?.id??null;if(this.roomId!==null){if(w===this.roomId)return{floorId:c.floor.id,roomId:w}}else if(!y&&w)return{floorId:c.floor.id,roomId:w}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+ih),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}if(n&&"outdoorId"in n){this.options.onOutdoorTap?this.options.onOutdoorTap(n.floorId,n.outdoorId):this.options.onRoomTap?.(n.floorId,null);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(o=>[o.lampMesh,o.wallMesh].filter(a=>a.visible));for(let o of n.intersectObjects(s,!1)){if(o.faceIndex==null)continue;let a=r.find(u=>u.group===o.object.parent),c=(o.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(u=>o.faceIndex>=u.start&&o.faceIndex<u.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(t,e,n){let r=this.rayAt(e,n),s=t.floor.elevation+t.y,o=r.ray.direction;if(Math.abs(o.y)<1e-4)return null;let a=(s-r.ray.origin.y)/o.y;return a<=0?null:[r.ray.origin.x+o.x*a,r.ray.origin.z+o.z*a]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(f=>f.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(f=>f.floor.furniture.some(h=>h.id===l)):void 0,u=c?.floor.furniture.find(f=>f.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let s=this.furnitureAt(t,e);if(!s){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e)}grabItem(t,e,n,r){let s=t.floor.furniture.find(a=>a.id===e),o=this.floorPoint(t,n,r);return!s||!o?!1:s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(h=>h.id===n.id),u=l&&this.floorPoint(l,t,e);if(!l||!c||!u)return;let f=this.building?.settings.grid??.05;n.x=c.x=Math.round((u[0]+n.offset[0])/f)*f,n.z=c.z=Math.round((u[1]+n.offset[1])/f)*f,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=this.floorPoint(s,t,e);if(!o)return;let a=this.building?.settings.grid??.05;r.x=Math.round((o[0]+r.offset[0])/a)*a,r.z=Math.round((o[1]+r.offset[1])/a)*a,r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=this.selectedFurniture,e=t?this.floors.find(p=>p.floor.furniture.some(y=>y.id===t)):void 0,n=e?.floor.furniture.find(p=>p.id===t);if(!e||!n)return;let r=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,o=e.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=De(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?pn(e.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:pn(e.floor,n),u=n.rotation*ie,f=Math.cos(u),h=Math.sin(u),d=(p,y,M)=>[r+p*f-y*h,M,s+p*h+y*f],g=new Ve,b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],x=new at(.25,.9,1);for(let p=0;p<4;p++){let[y,M]=b[p],[v,S]=b[(p+1)%4];g.seg(d(y,M,c+.01),d(v,S,c+.01),x),g.seg(d(y,M,c+l),d(v,S,c+l),x),g.seg(d(y,M,c+.01),d(y,M,c+l),x)}g.seg(d(-n.w/2,n.d/2+.03,c+.02),d(n.w/2,n.d/2+.03,c+.02),new at(1,1,1)),this.ghost=new yn(g.geometry(),new _n({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=e.floor.elevation+e.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(p=>p.floor.rooms.some(y=>y.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new Qe(s,o);a.texture.colorSpace=Ce;let l=new ri(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),u=this.roof?.group.visible??!1,f=this.ghost?.visible??!1,h=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),g=document.createElement("canvas");g.width=s,g.height=o;let b=g.getContext("2d"),x=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let P of this.floors)P.group.visible=P===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let y=p.floor.rooms.flatMap(P=>P.points),M=p.floor.elevation,v=new je(new H(Math.min(...y.map(P=>P[0]))-.3,M,Math.min(...y.map(P=>P[1]))-.3),new H(Math.max(...y.map(P=>P[0]))+.3,M+Math.min(p.floor.cut_height,p.floor.height),Math.max(...y.map(P=>P[1]))+.3)),S=v.getCenter(new H),w=-.6,A=.8,_=new H(Math.sin(A)*Math.sin(w),Math.cos(A),Math.sin(A)*Math.cos(w));l.position.copy(S).addScaledVector(_,100),l.lookAt(S),l.updateMatrixWorld();let T=.5,C=.5;for(let P of[v.min.x,v.max.x])for(let E of[v.min.y,v.max.y])for(let D of[v.min.z,v.max.z]){let U=new H(P,E,D).applyMatrix4(l.matrixWorldInverse);T=Math.max(T,Math.abs(U.x)),C=Math.max(C,Math.abs(U.y))}let I=s/o;T/C>I?C=T/I:T=C*I,l.left=-T*1.05,l.right=T*1.05,l.top=C*1.05,l.bottom=-C*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let L=b.createImageData(s,o);for(let P=0;P<o;P++)L.data.set(d.subarray((o-1-P)*s*4,(o-P)*s*4),P*s*4);b.putImageData(L,0,0),x.push({floorId:p.floor.id,url:g.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(h);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=u),this.ghost&&(this.ghost.visible=f),a.dispose(),this.invalidate()}return x}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?u0(n.room,void 0,void 0,n.obstacles):nh(n.rest),l=a.length?a:nh(n.rest),c=0;l.forEach((u,f)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=f)}),r.motion.path=l,r.motion.next=c,n.room&&!ue(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(p0[n.mode])}for(let[n,r]of this.robots)e.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let r=new ce,s=(a,l,c,u,f)=>{let h=[];for(let d=0;d<20;d++)h.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);me(r,h,l,c,u,f,{aoFrom:0,bottom:!1})};s(.17,.012,.08,2371657,3424863),s(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new le({vertexColors:!0});let o=new ce;me(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new Ke,n=new le({color:p0[t.mode]});return e.add(new Yt(this.robotGeo,this.robotMat),new Yt(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=h0(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t){let e=s=>new at(.25-.2*s,.95-.83*s,1-.7*s),n=new at(0,0,0),r=.02;for(let s of this.floors){let o=new ce,a=null;for(let l of t){if(l.floorId!==s.floor.id)continue;let c=e(l.age);if(a){let u=Math.hypot(l.x-a.x,l.z-a.z)||1,f=-(l.z-a.z)/u*.06,h=(l.x-a.x)/u*.06,d=e(a.age);o.tri([a.x+f,r,a.z+h],[l.x+f,r,l.z+h],[l.x-f,r,l.z-h],d,c,c),o.tri([a.x+f,r,a.z+h],[l.x-f,r,l.z-h],[a.x-f,r,a.z-h],d,c,d)}for(let u=0;u<12;u++){let f=u/12*Math.PI*2,h=(u+1)/12*Math.PI*2;o.tri([l.x,r,l.z],[l.x+Math.cos(h)*.22,r,l.z+Math.sin(h)*.22],[l.x+Math.cos(f)*.22,r,l.z+Math.sin(f)*.22],c,n,n)}a=l}s.trailMesh.geometry.dispose(),s.trailMesh.geometry=o.geometry(),s.trailMesh.visible=o.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ie,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*ie)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new H(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new H(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}focus(t,e,n,r,s){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new H(e,o.floor.elevation+o.ty+r,n),radius:5.5,phi:.78},900),s){this.flashes.set(s,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=this.stepFans(e),l=!1;if(this.flashes.size){let g=new Set;for(let[b,x]of this.flashes){let p=this.deviceFloor.get(b);p&&g.add(p),x<=t&&this.flashes.delete(b)}l=this.flashes.size>0;for(let b of this.floors)g.has(b.floor.id)&&this.buildLamps(b)}let c=this.placeRoof(e),u=this.stepRobots(t),f=this.stepWeather(t),h=r||s||o||a||l||c,d=[];if(r&&d.push("camera"),s&&d.push("floors"),o&&d.push("openings"),a&&d.push("fans"),l&&d.push("flash"),c&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),u&&d.push("robot"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=h?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),h&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let g=this.lowQuality?2*y0:y0;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=g/1e3,this.effectTick=!0;for(let b of this.floors)b.o<.02||!this.effectFloors.has(b.floor.id)||(this.buildLamps(b),this.buildGlow(b));this.invalidate()},g)}!h&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&f&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!h&&u&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&(this.flowActive||this.solarActive||this.soundActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*x0:x0))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(f=>f.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((f,h)=>{let d=f?f[0]*n/s+f[1]*r/s>=.25:a;!l&&d&&(c|=1<<h)});let u=this.roomId!==null&&o.floor.rooms.some(f=>f.id===this.roomId&&Xn(f));o.mask.standing.value=l?0:Vp(this.floorId!==null||u),o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new H,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let x of[a.z0,a.z1]){n.set(b,u,x).project(this.camera);let p=(n.x+1)/2*t,y=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y}),(!c||p>c.x)&&(c={x:p,y})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let f=o.labelSize.w,h=8+this.labelInset,d=l.x-f-14,g=l.y;d<h&&this.labelInset&&(d=c.x+14,g=c.y),s.push({fv:o,left:Math.max(h,Math.min(t-f-8,d)),y:g,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.floorId!==null&&(o.views!=="all"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new H(o.p[0],o.p[1]+(l?.y??0)+(o.roof?(1-this.roofO)*2.2:0),o.p[2]),u=this.camera.position.clone().sub(c),f=u.length(),h=u.normalize().dot(new H(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,g=Math.min(1.6,Math.max(.25,15/Math.max(1,f)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,g,h)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new H,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(s.x,a.floor.elevation+a.y+.9,s.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("fp3d-dev-full",u==="full"),o.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function _2(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,u)=>{e.strokeStyle=`rgba(55,224,255,${u})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let f of[u,u+256/2])n(o+f+.75,c,o+f+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new Si(t);return s.flipY=!1,s.wrapS=un,s.wrapT=un,s.anisotropy=4,s.colorSpace=Ce,s}function y2(i){let t=new le({map:i,transparent:!0,blending:Fe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function v2(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new Si(i);return e.wrapS=qi,e.wrapT=qi,e.colorSpace=Ce,e}function rh(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function v0(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function M2(i){let t=new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function S2(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function T2(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new Si(t);return r.colorSpace=Ce,r}function w2(){let t=sh,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new Si(e);return s.anisotropy=4,s.colorSpace=Ce,s}function $3(i,t){return new ah(i,t)}function Wl(i,t,e,n){let[r,s,o]=t.size??oh[t.lamp],a=t.base??0,l=(t.rotation??0)*ie,c=Math.cos(l),u=Math.sin(l),f=(b,x)=>[t.x+b*c-x*u,t.z+b*u+x*c],h=(b,x,p,y,M,v=14)=>{let S=[];for(let w=0;w<v;w++){let A=w/v*Math.PI*2;S.push([t.x+Math.cos(A)*b,t.z+Math.sin(A)*b])}me(i,S,x,p,y,M,{aoFrom:0,bottom:!0})},d=(b,x,p,y,M,v,S,w=S)=>me(i,[f(b,p),f(x,p),f(x,y),f(b,y)],M,v,S,w,{aoFrom:0,bottom:!0}),g=Math.max(.05,Math.min(r,s)/2);switch(t.lamp){case"ceiling":h(g*.25,e-.04,e,Ot,Ot,8),h(g,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"fan":{let b=Math.min(r,s)*.105;h(b*1.18,a,a+o*.05,Ot,Ot,12),h(b,a-o*.065,a,n,n,6);break}case"pendant":{let b=Math.max(.4,e-o);h(.06,e-.02,e,Ot,Ot,8);let x=t.variant==="globe"?b+2*g:t.variant==="drum"?b+.24:b+.2;if(h(.008,x,e-.02,Ot,Ot,5),t.variant==="globe")for(let y=0;y<7;y++){let M=Math.PI*(y/7),v=Math.PI*((y+1)/7);h(g*Math.max(.2,Math.sin((M+v)/2)),b+g-g*Math.cos(M),b+g-g*Math.cos(v),n,n,14)}else if(t.variant==="cone")for(let y=0;y<4;y++)h(g*(.25+.75*(4-y)/4),b+.06*y,b+.06*(y+1),n,n,16);else t.variant==="drum"?h(g,b,b+.24,n,n,18):(h(g*.35,b+.14,b+.2,n,n,12),h(g,b,b+.14,n,n,16));break}case"downlight":h(g,e-.012,e,Ot,Ot,12),h(g*.7,e-.02,e-.012,n,n,12);break;case"spot":h(g*.6,e-.02,e,Ot,Ot,10),h(g,e-Math.max(.06,o),e-.02,Ot,Ot,12),h(g*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-r/2,r/2,-s/2,s/2,e-Math.max(.015,o),e,Ot,Ot),d(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"round_panel":h(g,e-Math.max(.025,o),e,Ot,Ot,18),h(g*.92,e-Math.max(.025,o)-.006,e-Math.max(.025,o),n,n,18);break;case"uplight":h(Math.max(.1,g*.6),a,a+.03,Ot,Ot),h(.014,a+.03,a+o-.12,Ot,Ot,6),h(g,a+o-.14,a+o-.02,Ot,Ot),h(g*.92,a+o-.02,a+o,n,n);break;case"bollard":h(g,a,a+o-.14,Ot,Ot,10),h(g*.9,a+o-.14,a+o-.03,n,n,10),h(g*1.1,a+o-.03,a+o,Ot,Ot,10);break;case"garden":h(.012,a,a+o-.08,Ot,Ot,5),h(g,a+o-.08,a+o-.01,Ot,Ot,10),h(g*.8,a+o-.01,a+o,n,n,10);break;case"floor":h(Math.max(.1,g*.7),a,a+.03,Ot,Ot),h(.014,a+.03,a+o-.28,Ot,Ot,6),h(g,a+o-.3,a+o,n,n);break;case"table":h(Math.max(.05,g*.55),a,a+.03,Ot,Ot),h(.012,a+.03,a+o-.16,Ot,Ot,6),h(g,a+o-.18,a+o,n,n);break;case"column":d(-r*.42,r*.42,-s*.42,s*.42,a,a+o*.035,Ot),d(-r*.18,r*.18,-s*.18,s*.18,a+o*.035,a+o,n);break;case"tv_bars":for(let b of[-r*.31,r*.31])d(b-r*.13,b+r*.13,-s*.42,s*.42,a,a+o*.06,Ot),d(b-r*.065,b+r*.065,-s*.18,s*.18,a+o*.06,a+o,n);break;case"orb_table":{h(g*.52,a,a+o*.08,Ot,Ot,14);let b=[.55,.82,1,.92,.66];for(let x=0;x<b.length;x++)h(g*b[x],a+o*(.08+x*.18),a+o*(.08+(x+1)*.18),n,n,12);break}case"portable":{d(-r*.42,r*.42,-s*.42,s*.42,a,a+o*.06,Ot);for(let b=0;b<4;b++){let x=.48-b*.07;d(-r*x,r*x,-s*x,s*x,a+o*(.06+b*.2),a+o*(.06+(b+1)*.2),n)}d(-r*.18,r*.18,-s*.18,s*.18,a+o*.86,a+o,Ot);break}case"ambient":h(g*.92,a,a+o*.22,Ot,Ot,14),d(-r*.42,r*.42,-s*.42,s*.42,a+o*.22,a+o,n);break;case"cube":d(-r/2,r/2,-s/2,s/2,a,a+o*.08,Ot),d(-r*.46,r*.46,-s*.46,s*.46,a+o*.08,a+o,n);break;case"garden_set":for(let b of[-r*.34,0,r*.34])d(b-r*.012,b+r*.012,-s*.06,s*.06,a,a+o*.68,Ot),d(b-r*.065,b+r*.065,-s*.25,s*.25,a+o*.68,a+o*.92,Ot),d(b-r*.052,b+r*.052,-s*.2,s*.2,a+o*.92,a+o,n);break;case"wall":{let b=t.base??Ws;d(-r/2+.03,r/2-.03,-s/2,-s/2+.02,b,b+o,Ot),d(-r/2,r/2,-s/2+.02,s/2,b+o*.15,b+o*.85,n);break}case"wall_updown":{let b=t.base??Ws;d(-r*.42,r*.42,-s/2,-s*.25,b+o*.08,b+o*.92,Ot),d(-r/2,r/2,-s*.24,s/2,b,b+o*.18,n),d(-r/2,r/2,-s*.24,s/2,b+o*.82,b+o,n);break}case"strip":{let b=Math.max(.02,o),x=t.base!=null?t.base+b:e-.04;if(!t.roll&&!t.upright){d(-r/2,r/2,-s/2,s/2,x-b,x,n);break}let p=(t.roll??0)*ie,y=Math.cos(p),M=Math.sin(p),v=t.upright?a+r/2:x-b/2,S=(C,I,L)=>{let P=C,E=I*y-L*M,D=I*M+L*y;return t.upright&&([P,E]=[-E,P]),[t.x+P*c-D*u,v+E,t.z+P*u+D*c]},w=[S(-r/2,-b/2,-s/2),S(r/2,-b/2,-s/2),S(r/2,-b/2,s/2),S(-r/2,-b/2,s/2),S(-r/2,b/2,-s/2),S(r/2,b/2,-s/2),S(r/2,b/2,s/2),S(-r/2,b/2,s/2)],A=new at(n),_=[t.x,v,t.z],T=(C,I,L,P)=>{let[E,D,U]=[w[C],w[I],w[L]],N=[(D[1]-E[1])*(U[2]-E[2])-(D[2]-E[2])*(U[1]-E[1]),(D[2]-E[2])*(U[0]-E[0])-(D[0]-E[0])*(U[2]-E[2]),(D[0]-E[0])*(U[1]-E[1])-(D[1]-E[1])*(U[0]-E[0])],k=[E[0]-_[0],E[1]-_[1],E[2]-_[2]],B=N[0]*k[0]+N[1]*k[1]+N[2]*k[2]<0,[G,V,nt,$]=B?[w[P],w[L],w[I],w[C]]:[w[C],w[I],w[L],w[P]];i.tri(G,V,nt,A,A,A),i.tri(G,nt,$,A,A,A)};T(0,1,2,3),T(4,5,6,7),T(0,1,5,4),T(1,2,6,5),T(2,3,7,6),T(3,0,4,7);break}}}export{ah as FloorplanViewer,$3 as createViewer,l2 as furniturePreview,b2 as isLowEnd,Wl as pushLampModel};
