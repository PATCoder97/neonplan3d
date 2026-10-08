var ef=0,Fc=1,nf=2;var Ls=1,rf=2,Gr=3,Ii=0,rn=1,Me=2,Gn=0,Pi=1,Fe=2,Dc=3,Fs=4,sf=5;var tr=100,of=101,af=102,lf=103,cf=104,uf=200,hf=201,ff=202,df=203,Uc=204,Nc=205,pf=206,mf=207,gf=208,_f=209,xf=210,bf=211,yf=212,vf=213,Mf=214,$o=0,Zo=1,Ko=2,Lr=3,Jo=4,Qo=5,jo=6,ta=7,Oc=0,Sf=1,Tf=2,Cn=0,Bc=1,zc=2,kc=3,Vc=4,Gc=5,Hc=6,Wc=7;var Xc=300,Li=301,er=302,Ra=303,Ca=304,Ds=306,$i=1e3,hn=1001,ea=1002,ke=1003,wf=1004;var Us=1005;var He=1006,Ia=1007;var Fi=1008;var pn=1009,Yc=1010,qc=1011,Hr=1012,Pa=1013,In=1014,Pn=1015,Ln=1016,La=1017,Fa=1018,Wr=1020,$c=35902,Zc=35899,Kc=1021,Jc=1022,vn=1023,zn=1026,Di=1027,Qc=1028,Da=1029,Ui=1030,Ua=1031;var Na=1033,Ns=33776,Os=33777,Bs=33778,zs=33779,Oa=35840,Ba=35841,za=35842,ka=35843,Va=36196,Ga=37492,Ha=37496,Wa=37488,Xa=37489,ks=37490,Ya=37491,qa=37808,$a=37809,Za=37810,Ka=37811,Ja=37812,Qa=37813,ja=37814,tl=37815,el=37816,nl=37817,il=37818,rl=37819,sl=37820,ol=37821,al=36492,ll=36494,cl=36495,ul=36283,hl=36284,Vs=36285,fl=36286;var fs=2300,na=2301,Xo=2302,Mc=2303,Sc=2400,Tc=2401,wc=2402;var Ef=3200;var jc=0,Af=1,oi="",Ce="srgb",ds="srgb-linear",ps="linear",de="srgb";var Yo=7680;var Rf=519,Cf=512,If=513,Pf=514,dl=515,Lf=516,Ff=517,pl=518,Df=519,Uf=35044,tu=35048;var eu="300 es",Rn=2e3,ms=2001;function Xp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nf(){let i=Fr("canvas");return i.style.display="block",i}var Th={},Dr=null;function nu(...i){let t="THREE."+i.shift();Dr?Dr("log",t,...i):console.log(t,...i)}function Of(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=Of(i);let t="THREE."+i.shift();if(Dr)Dr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function kt(...i){i=Of(i);let t="THREE."+i.shift();if(Dr)Dr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function qi(...i){let t=i.join(" ");t in Th||(Th[t]=!0,zt(...i))}function Bf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var zf={[$o]:Zo,[Ko]:jo,[Jo]:ta,[Lr]:Qo,[Zo]:$o,[jo]:Ko,[ta]:Jo,[Qo]:Lr},kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var jl=Math.PI/180,ia=180/Math.PI;function Gs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function qp(i,t){return(i%t+t)%t}function tc(i,t,e){return(1-e)*i+e*t}function ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var au=class au{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};au.prototype.isVector2=!0;var Jt=au,Vn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(f!==x||l!==h||c!==p||u!==g){let _=l*h+c*p+u*g+f*x;_<0&&(h=-h,p=-p,g=-g,x=-x,_=-_);let m=1-a;if(_<.9995){let y=Math.acos(_),M=Math.sin(y);m=Math.sin(m*y)/M,a=Math.sin(a*y)/M,l=l*m+h*a,c=c*m+p*a,u=u*m+g*a,f=f*m+x*a}else{l=l*m+h*a,c=c*m+p*a,u=u*m+g*a,f=f*m+x*a;let y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*p-c*h,t[e+1]=l*g+u*h+c*f-a*p,t[e+2]=c*g+u*p+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lu=class lu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ec.copy(this).projectOnVector(t),this.sub(ec)}reflect(t){return this.sub(ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lu.prototype.isVector3=!0;var H=lu,ec=new H,wh=new Vn,cu=class cu{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],x=r[0],_=r[3],m=r[6],y=r[1],M=r[4],v=r[7],S=r[2],w=r[5],A=r[8];return s[0]=o*x+a*y+l*S,s[3]=o*_+a*M+l*w,s[6]=o*m+a*v+l*A,s[1]=c*x+u*y+f*S,s[4]=c*_+u*M+f*w,s[7]=c*m+u*v+f*A,s[2]=h*x+p*y+g*S,s[5]=h*_+p*M+g*w,s[8]=h*m+p*v+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=e*f+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(r*c-u*n)*x,t[2]=(a*n-r*o)*x,t[3]=h*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nc.makeScale(t,e)),this}rotate(t){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nc.makeRotation(-t)),this}translate(t,e){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};cu.prototype.isMatrix3=!0;var Wt=cu,nc=new Wt,Eh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $p(){let i={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===de&&(r.r=ii(r.r),r.g=ii(r.g),r.b=ii(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(r.r=Pr(r.r),r.g=Pr(r.g),r.b=Pr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oi?ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ds]:{primaries:t,whitePoint:n,transfer:ps,toXYZ:Eh,fromXYZ:Ah,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Eh,fromXYZ:Ah,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var ee=$p();function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _r,ra=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_r===void 0&&(_r=Fr("canvas")),_r.width=t.width,_r.height=t.height;let r=_r.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=_r}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ii(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zp=0,Ur=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Gs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ic(r[o].image)):s.push(ic(r[o]))}else s=ic(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function ic(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Kp=0,rc=new H,Qe=class i extends kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=hn,r=hn,s=He,o=Fi,a=vn,l=pn,c=i.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Gs(),this.name="",this.source=new Ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rc).x}get height(){return this.source.getSize(rc).y}get depth(){return this.source.getSize(rc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $i:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $i:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Xc;Qe.DEFAULT_ANISOTROPY=1;var uu=class uu{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],x=l[2],_=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(p+1)/2,S=(m+1)/2,w=(u+h)/4,A=(f+x)/4,b=(g+_)/4;return M>v&&M>S?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=w/n,s=A/n):v>S?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=b/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=A/s,r=b/s),this.set(n,r,s,e),this}let y=Math.sqrt((_-g)*(_-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(_-g)/y,this.y=(f-x)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uu.prototype.isVector4=!0;var Ae=uu,sa=class extends kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new Qe(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ur(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},je=class extends sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},gs=class extends Qe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oa=class extends Qe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Aa=class Aa{constructor(t,e,n,r,s,o,a,l,c,u,f,h,p,g,x,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,f,h,p,g,x,_)}set(t,e,n,r,s,o,a,l,c,u,f,h,p,g,x,_){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=p,m[7]=g,m[11]=x,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Aa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/xr.setFromMatrixColumn(t,0).length(),s=1/xr.setFromMatrixColumn(t,1).length(),o=1/xr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let h=o*u,p=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*u,p=l*f,g=c*u,x=c*f;e[0]=h+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=x+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*u,p=l*f,g=c*u,x=c*f;e[0]=h-x*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*u,p=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=g*c-p,e[8]=h*c+x,e[1]=l*f,e[5]=x*c+h,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-h*f,e[8]=g*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*f+g,e[10]=h-x*f}else if(t.order==="XZY"){let h=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+x,e[5]=o*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jp,t,Qp)}lookAt(t,e,n){let r=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),gi.crossVectors(n,cn),gi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),gi.crossVectors(n,cn)),gi.normalize(),yo.crossVectors(cn,gi),r[0]=gi.x,r[4]=yo.x,r[8]=cn.x,r[1]=gi.y,r[5]=yo.y,r[9]=cn.y,r[2]=gi.z,r[6]=yo.z,r[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],x=n[6],_=n[10],m=n[14],y=n[3],M=n[7],v=n[11],S=n[15],w=r[0],A=r[4],b=r[8],T=r[12],C=r[1],I=r[5],L=r[9],P=r[13],E=r[2],D=r[6],U=r[10],N=r[14],k=r[3],z=r[7],G=r[11],V=r[15];return s[0]=o*w+a*C+l*E+c*k,s[4]=o*A+a*I+l*D+c*z,s[8]=o*b+a*L+l*U+c*G,s[12]=o*T+a*P+l*N+c*V,s[1]=u*w+f*C+h*E+p*k,s[5]=u*A+f*I+h*D+p*z,s[9]=u*b+f*L+h*U+p*G,s[13]=u*T+f*P+h*N+p*V,s[2]=g*w+x*C+_*E+m*k,s[6]=g*A+x*I+_*D+m*z,s[10]=g*b+x*L+_*U+m*G,s[14]=g*T+x*P+_*N+m*V,s[3]=y*w+M*C+v*E+S*k,s[7]=y*A+M*I+v*D+S*z,s[11]=y*b+M*L+v*U+S*G,s[15]=y*T+M*P+v*N+S*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],x=t[7],_=t[11],m=t[15],y=l*p-c*h,M=a*p-c*f,v=a*h-l*f,S=o*p-c*u,w=o*h-l*u,A=o*f-a*u;return e*(x*y-_*M+m*v)-n*(g*y-_*S+m*w)+r*(g*M-x*S+m*A)-s*(g*v-x*w+_*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],x=t[13],_=t[14],m=t[15],y=e*a-n*o,M=e*l-r*o,v=e*c-s*o,S=n*l-r*a,w=n*c-s*a,A=r*c-s*l,b=u*x-f*g,T=u*_-h*g,C=u*m-p*g,I=f*_-h*x,L=f*m-p*x,P=h*m-p*_,E=y*P-M*L+v*I+S*C-w*T+A*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/E;return t[0]=(a*P-l*L+c*I)*D,t[1]=(r*L-n*P-s*I)*D,t[2]=(x*A-_*w+m*S)*D,t[3]=(h*w-f*A-p*S)*D,t[4]=(l*C-o*P-c*T)*D,t[5]=(e*P-r*C+s*T)*D,t[6]=(_*v-g*A-m*M)*D,t[7]=(u*A-h*v+p*M)*D,t[8]=(o*L-a*C+c*b)*D,t[9]=(n*C-e*L-s*b)*D,t[10]=(g*w-x*v+m*y)*D,t[11]=(f*v-u*w-p*y)*D,t[12]=(a*T-o*I-l*b)*D,t[13]=(e*I-n*T+r*b)*D,t[14]=(x*M-g*S-_*y)*D,t[15]=(u*S-f*M+h*y)*D,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,x=o*u,_=o*f,m=a*f,y=l*c,M=l*u,v=l*f,S=n.x,w=n.y,A=n.z;return r[0]=(1-(x+m))*S,r[1]=(p+v)*S,r[2]=(g-M)*S,r[3]=0,r[4]=(p-v)*w,r[5]=(1-(h+m))*w,r[6]=(_+y)*w,r[7]=0,r[8]=(g+M)*A,r[9]=(_-y)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=xr.set(r[0],r[1],r[2]).length(),a=xr.set(r[4],r[5],r[6]).length(),l=xr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Tn.copy(this);let c=1/o,u=1/a,f=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,e.setFromRotationMatrix(Tn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Rn,l=!1){let c=this.elements,u=2*s/(e-t),f=2*s/(n-r),h=(e+t)/(e-t),p=(n+r)/(n-r),g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===Rn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ms)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Rn,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-r),h=-(e+t)/(e-t),p=-(n+r)/(n-r),g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===Rn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===ms)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Aa.prototype.isMatrix4=!0;var Te=Aa,xr=new H,Tn=new Te,Jp=new H(0,0,0),Qp=new H(1,1,1),gi=new H,yo=new H,cn=new H,Rh=new Te,Ch=new Vn,Mi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jp=0,Ih=new H,br=new Vn,Qn=new Te,vo=new H,os=new H,tm=new H,em=new Vn,Ph=new H(1,0,0),Lh=new H(0,1,0),Fh=new H(0,0,1),Dh={type:"added"},nm={type:"removed"},yr={type:"childadded",child:null},sc={type:"childremoved",child:null},an=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new Mi,n=new Vn,r=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Te},normalMatrix:{value:new Wt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(Ph,t)}rotateY(t){return this.rotateOnAxis(Lh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Ih.copy(t).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ph,t)}translateY(t){return this.translateOnAxis(Lh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vo.copy(t):vo.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(os,vo,this.up):Qn.lookAt(vo,os,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),br.setFromRotationMatrix(Qn),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dh),yr.child=t,this.dispatchEvent(yr),yr.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nm),sc.child=t,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dh),yr.child=t,this.dispatchEvent(yr),yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,tm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new H(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},im={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let _=e.getJointPose(x,n),m=this._getHandJoint(c,x);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(im)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function oc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var at=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ee.workingColorSpace){if(t=qp(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=oc(o,s,t+1/3),this.g=oc(o,s,t),this.b=oc(o,s,t-1/3)}return ee.colorSpaceToWorking(this,r),this}setStyle(t,e=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=kf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ee.workingToColorSpace(Ze.copy(this),t),Math.round(ne(Ze.r*255,0,255))*65536+Math.round(ne(Ze.g*255,0,255))*256+Math.round(ne(Ze.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ze.copy(this),e);let n=Ze.r,r=Ze.g,s=Ze.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Ce){ee.workingToColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,r=Ze.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Mo);let n=tc(_i.h,Mo.h,e),r=tc(_i.s,Mo.s,e),s=tc(_i.l,Mo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new at;at.NAMES=kf;var _s=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new at(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zi=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wn=new H,jn=new H,ac=new H,ti=new H,vr=new H,Mr=new H,Uh=new H,lc=new H,cc=new H,uc=new H,hc=new Ae,fc=new Ae,dc=new Ae,vi=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),wn.subVectors(t,e),r.cross(wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){wn.subVectors(r,e),jn.subVectors(n,e),ac.subVectors(t,e);let o=wn.dot(wn),a=wn.dot(jn),l=wn.dot(ac),c=jn.dot(jn),u=jn.dot(ac),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return hc.setScalar(0),fc.setScalar(0),dc.setScalar(0),hc.fromBufferAttribute(t,e),fc.fromBufferAttribute(t,n),dc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(hc,s.x),o.addScaledVector(fc,s.y),o.addScaledVector(dc,s.z),o}static isFrontFacing(t,e,n,r){return wn.subVectors(n,e),jn.subVectors(t,e),wn.cross(jn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),wn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;vr.subVectors(r,n),Mr.subVectors(s,n),lc.subVectors(t,n);let l=vr.dot(lc),c=Mr.dot(lc);if(l<=0&&c<=0)return e.copy(n);cc.subVectors(t,r);let u=vr.dot(cc),f=Mr.dot(cc);if(u>=0&&f<=u)return e.copy(r);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(vr,o);uc.subVectors(t,s);let p=vr.dot(uc),g=Mr.dot(uc);if(g>=0&&p<=g)return e.copy(s);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Mr,a);let _=u*g-p*f;if(_<=0&&f-u>=0&&p-g>=0)return Uh.subVectors(s,r),a=(f-u)/(f-u+(p-g)),e.copy(r).addScaledVector(Uh,a);let m=1/(_+x+h);return o=x*m,a=h*m,e.copy(n).addScaledVector(vr,o).addScaledVector(Mr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},tn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(s,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),To.subVectors(this.max,as),Sr.subVectors(t.a,as),Tr.subVectors(t.b,as),wr.subVectors(t.c,as),xi.subVectors(Tr,Sr),bi.subVectors(wr,Tr),Hi.subVectors(Sr,wr);let e=[0,-xi.z,xi.y,0,-bi.z,bi.y,0,-Hi.z,Hi.y,xi.z,0,-xi.x,bi.z,0,-bi.x,Hi.z,0,-Hi.x,-xi.y,xi.x,0,-bi.y,bi.x,0,-Hi.y,Hi.x,0];return!pc(e,Sr,Tr,wr,To)||(e=[1,0,0,0,1,0,0,0,1],!pc(e,Sr,Tr,wr,To))?!1:(wo.crossVectors(xi,bi),e=[wo.x,wo.y,wo.z],pc(e,Sr,Tr,wr,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ei=[new H,new H,new H,new H,new H,new H,new H,new H],En=new H,So=new tn,Sr=new H,Tr=new H,wr=new H,xi=new H,bi=new H,Hi=new H,as=new H,To=new H,wo=new H,Wi=new H;function pc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Wi.fromArray(i,s);let a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),u=n.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Le=new H,Eo=new Jt,rm=0,xn=class extends kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uf,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var xs=class extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ki=class extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}},sm=new tn,ls=new H,mc=new H,Si=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):sm.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);let e=ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ls,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(mc)),this.expandByPoint(ls.copy(t.center).sub(mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},om=0,_n=new Te,gc=new an,Er=new H,un=new tn,cs=new tn,ze=new H,Qt=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xp(t)?Ki:xs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return gc.lookAt(t),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(un.min,cs.min),un.expandByPoint(ze),ze.addVectors(un.max,cs.max),un.expandByPoint(ze)):(un.expandByPoint(cs.min),un.expandByPoint(cs.max))}un.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ze.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ze));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ze.fromBufferAttribute(a,c),l&&(Er.fromBufferAttribute(t,c),ze.add(Er)),r=Math.max(r,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new H,l[b]=new H;let c=new H,u=new H,f=new H,h=new Jt,p=new Jt,g=new Jt,x=new H,_=new H;function m(b,T,C){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,C),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,C),u.sub(c),f.sub(c),p.sub(h),g.sub(h);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),_.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[b].add(x),a[T].add(x),a[C].add(x),l[b].add(_),l[T].add(_),l[C].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let b=0,T=y.length;b<T;++b){let C=y[b],I=C.start,L=C.count;for(let P=I,E=I+L;P<E;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let M=new H,v=new H,S=new H,w=new H;function A(b){S.fromBufferAttribute(r,b),w.copy(S);let T=a[b];M.copy(T),M.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(w,T);let I=v.dot(l[b])<0?-1:1;o.setXYZW(b,M.x,M.y,M.z,I)}for(let b=0,T=y.length;b<T;++b){let C=y[b],I=C.start,L=C.count;for(let P=I,E=I+L;P<E;P+=3)A(t.getX(P+0)),A(t.getX(P+1)),A(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(t)for(let h=0,p=t.count;h<p;h+=3){let g=t.getX(h+0),x=t.getX(h+1),_=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,_),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),p=0,g=0;for(let x=0,_=l.length;x<_;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let m=0;m<u;m++)h[g++]=c[p++]}return new xn(h,u,f)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var _c=new H,am=new H,lm=new Wt,An=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=_c.subVectors(n,e).cross(am.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(_c),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lm.getNormalMatrix(t),r=this.coplanarPoint(_c).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},cm=0,ri=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=Pi,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Nc,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new at().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new An().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ni=new H,xc=new H,Ao=new H,Ro=new H,Ji=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){xc.copy(t).add(e).multiplyScalar(.5),Ao.copy(e).sub(t).normalize(),Ro.copy(this.origin).sub(xc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ao),a=Ro.dot(this.direction),l=-Ro.dot(Ao),c=Ro.lengthSq(),u=Math.abs(1-o*o),f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){let x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xc).addScaledVector(Ao,h),p}intersectSphere(t,e){if(t.radius<0)return null;ni.subVectors(t.center,this.origin);let n=ni.dot(this.direction),r=ni.dot(ni)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,p=t.z-o.z,g=e.x-o.x,x=e.y-o.y,_=e.z-o.z,m=n.x-o.x,y=n.y-o.y,M=n.z-o.z,v=Math.abs(l),S=Math.abs(c),w=Math.abs(u),A,b,T,C,I,L,P,E,D,U,N,k;if(v>=S&&v>=w?(T=l,L=f,D=g,k=m,l>=0?(A=c,b=u,C=h,I=p,P=x,E=_,U=y,N=M):(A=u,b=c,C=p,I=h,P=_,E=x,U=M,N=y)):S>=w?(T=c,L=h,D=x,k=y,c>=0?(A=u,b=l,C=p,I=f,P=_,E=g,U=M,N=m):(A=l,b=u,C=f,I=p,P=g,E=_,U=m,N=M)):(T=u,L=p,D=_,k=M,u>=0?(A=l,b=c,C=f,I=h,P=g,E=x,U=m,N=y):(A=c,b=l,C=h,I=f,P=x,E=g,U=y,N=m)),T===0)return null;let z=A/T,G=b/T,V=1/T,it=C-z*L,Z=I-G*L,ot=P-z*D,J=E-G*D,ht=U-z*k,X=N-G*k,Q=ht*J-X*ot,ft=it*X-Z*ht,mt=ot*Z-J*it;if(r){if(Q<0||ft<0||mt<0)return null}else if((Q<0||ft<0||mt<0)&&(Q>0||ft>0||mt>0))return null;let pt=Q+ft+mt;if(pt===0)return null;let At=V*(Q*L+ft*D+mt*k);return(pt>0?At<0:At>0)?null:this.at(At/pt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Nh=new Te,Xi=new Ji,Co=new Si,Oh=new H,Io=new H,Po=new H,Lo=new H,bc=new H,Fo=new H,Bh=new H,Do=new H,Yt=class extends an{constructor(t=new Qt,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(bc.fromBufferAttribute(f,t),o?Fo.addScaledVector(bc,u):Fo.addScaledVector(bc.sub(e),u))}e.add(Fo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),Xi.copy(t.ray).recast(t.near),!(Co.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Co,Oh)===null||Xi.origin.distanceToSquared(Oh)>(t.far-t.near)**2))&&(Nh.copy(s).invert(),Xi.copy(t.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let _=h[g],m=o[_.materialIndex],y=Math.max(_.start,p.start),M=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let v=y,S=M;v<S;v+=3){let w=a.getX(v),A=a.getX(v+1),b=a.getX(v+2);r=Uo(this,m,t,n,c,u,f,w,A,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let _=g,m=x;_<m;_+=3){let y=a.getX(_),M=a.getX(_+1),v=a.getX(_+2);r=Uo(this,o,t,n,c,u,f,y,M,v),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let _=h[g],m=o[_.materialIndex],y=Math.max(_.start,p.start),M=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let v=y,S=M;v<S;v+=3){let w=v,A=v+1,b=v+2;r=Uo(this,m,t,n,c,u,f,w,A,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let _=g,m=x;_<m;_+=3){let y=_,M=_+1,v=_+2;r=Uo(this,o,t,n,c,u,f,y,M,v),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}};function um(i,t,e,n,r,s,o,a){let l;if(t.side===rn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Ii,a),l===null)return null;Do.copy(a),Do.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Do);return c<e.near||c>e.far?null:{distance:c,point:Do.clone(),object:i}}function Uo(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Io),i.getVertexPosition(l,Po),i.getVertexPosition(c,Lo);let u=um(i,t,e,n,Io,Po,Lo,Bh);if(u){let f=new H;vi.getBarycoord(Bh,Io,Po,Lo,f),r&&(u.uv=vi.getInterpolatedAttribute(r,a,l,c,f,new Jt)),s&&(u.uv1=vi.getInterpolatedAttribute(s,a,l,c,f,new Jt)),o&&(u.normal=vi.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new H,materialIndex:0};vi.getNormal(Io,Po,Lo,h.normal),u.face=h,u.barycoord=f}return u}var aa=class extends Qe{constructor(t=null,e=1,n=1,r,s,o,a,l,c=ke,u=ke,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yi=new Si,hm=new Jt(.5,.5),No=new H,bs=class{constructor(t=new An,e=new An,n=new An,r=new An,s=new An,o=new An){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],g=s[8],x=s[9],_=s[10],m=s[11],y=s[12],M=s[13],v=s[14],S=s[15];if(r[0].setComponents(c-o,p-u,m-g,S-y).normalize(),r[1].setComponents(c+o,p+u,m+g,S+y).normalize(),r[2].setComponents(c+a,p+f,m+x,S+M).normalize(),r[3].setComponents(c-a,p-f,m-x,S-M).normalize(),n)r[4].setComponents(l,h,_,v).normalize(),r[5].setComponents(c-l,p-h,m-_,S-v).normalize();else if(r[4].setComponents(c-l,p-h,m-_,S-v).normalize(),e===Rn)r[5].setComponents(c+l,p+h,m+_,S+v).normalize();else if(e===ms)r[5].setComponents(l,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){Yi.center.set(0,0,0);let e=hm.distanceTo(t.center);return Yi.radius=.7071067811865476+e,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(No.x=r.normal.x>0?t.max.x:t.min.x,No.y=r.normal.y>0?t.max.y:t.min.y,No.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(No)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bn=class extends ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},la=new H,ca=new H,zh=new Te,us=new Ji,Oo=new Si,yc=new H,kh=new H,ua=class extends an{constructor(t=new Qt,e=new bn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)la.fromBufferAttribute(e,r-1),ca.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=la.distanceTo(ca);t.setAttribute("lineDistance",new Gt(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(r),Oo.radius+=s,t.ray.intersectsSphere(Oo)===!1)return;zh.copy(r).invert(),us.copy(t.ray).applyMatrix4(zh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,_=g-1;x<_;x+=c){let m=u.getX(x),y=u.getX(x+1),M=Bo(this,t,us,l,m,y,x);M&&e.push(M)}if(this.isLineLoop){let x=u.getX(g-1),_=u.getX(p),m=Bo(this,t,us,l,x,_,g-1);m&&e.push(m)}}else{let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,_=g-1;x<_;x+=c){let m=Bo(this,t,us,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=Bo(this,t,us,l,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Bo(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(la.fromBufferAttribute(a,r),ca.fromBufferAttribute(a,s),e.distanceSqToSegment(la,ca,yc,kh)>n)return;yc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(yc);if(!(c<t.near||c>t.far))return{distance:c,point:kh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Vh=new H,Gh=new H,yn=class extends ua{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Vh.fromBufferAttribute(e,r),Gh.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Vh.distanceTo(Gh);t.setAttribute("lineDistance",new Gt(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Qi=class extends ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hh=new Te,Ec=new Ji,zo=new Si,ko=new H,Br=class extends an{constructor(t=new Qt,e=new Qi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(r),zo.radius+=s,t.ray.intersectsSphere(zo)===!1)return;Hh.copy(r).invert(),Ec.copy(t.ray).applyMatrix4(Hh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,x=p;g<x;g++){let _=c.getX(g);ko.fromBufferAttribute(f,_),Wh(ko,_,l,r,t,e,this)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,x=p;g<x;g++)ko.fromBufferAttribute(f,g),Wh(ko,g,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Wh(i,t,e,n,r,s,o){let a=Ec.distanceSqToPoint(i);if(a<e){let l=new H;Ec.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ys=class extends Qe{constructor(t=[],e=Li,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ti=class extends Qe{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wi=class extends Qe{constructor(t,e,n=In,r,s,o,a=ke,l=ke,c,u=zn,f=1){if(u!==zn&&u!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ur(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ha=class extends wi{constructor(t,e=In,n=Li,r,s,o=ke,a=ke,l,c=zn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},vs=class extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},zr=class i extends Qt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2));function g(x,_,m,y,M,v,S,w,A,b,T){let C=v/A,I=S/b,L=v/2,P=S/2,E=w/2,D=A+1,U=b+1,N=0,k=0,z=new H;for(let G=0;G<U;G++){let V=G*I-P;for(let it=0;it<D;it++){let Z=it*C-L;z[x]=Z*y,z[_]=V*M,z[m]=E,c.push(z.x,z.y,z.z),z[x]=0,z[_]=0,z[m]=w>0?1:-1,u.push(z.x,z.y,z.z),f.push(it/A),f.push(1-G/b),N+=1}}for(let G=0;G<b;G++)for(let V=0;V<A;V++){let it=h+V+D*G,Z=h+V+D*(G+1),ot=h+(V+1)+D*(G+1),J=h+(V+1)+D*G;l.push(it,Z,J),l.push(Z,ot,J),k+=6}a.addGroup(p,k,T),p+=k,h+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ms=class i extends Qt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new H,u=new Jt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let p=n+f/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function fm(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Vf(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=_m(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let u=a,f=l;for(let h=e;h<r;h+=e){let p=i[h],g=i[h+1];p<a&&(a=p),g<l&&(l=g),p>u&&(u=p),g>f&&(f=g)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Ss(s,o,e,a,l,c,0),o}function Vf(i,t,e,n,r){let s;if(r===Rm(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Xh(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Xh(o/n|0,i[o],i[o+1],s);return s&&kr(s,s.next)&&(ws(s),s=s.next),s}function ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(kr(e,e.next)||Ee(e.prev,e,e.next)===0)){if(ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ss(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Mm(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?pm(i,n,r,s):dm(i)){t.push(l.i,i.i,c.i),ws(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=mm(ji(i),t),Ss(i,t,e,n,r,s,2)):o===2&&gm(i,t,e,n,r,s):Ss(ji(i),t,e,n,r,s,1);break}}}function dm(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),p=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=p&&hs(r,a,s,l,o,c,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function pm(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ee(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,p=Math.min(a,l,c),g=Math.min(u,f,h),x=Math.max(a,l,c),_=Math.max(u,f,h),m=Ac(p,g,t,e,n),y=Ac(x,_,t,e,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=m&&v&&v.z<=y;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=_&&M!==r&&M!==o&&hs(a,u,l,f,c,h,M.x,M.y)&&Ee(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=_&&v!==r&&v!==o&&hs(a,u,l,f,c,h,v.x,v.y)&&Ee(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=_&&M!==r&&M!==o&&hs(a,u,l,f,c,h,M.x,M.y)&&Ee(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=_&&v!==r&&v!==o&&hs(a,u,l,f,c,h,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function mm(i,t){let e=i;do{let n=e.prev,r=e.next.next;!kr(n,r)&&Hf(n,e,e.next,r)&&Ts(n,r)&&Ts(r,n)&&(t.push(n.i,e.i,r.i),ws(e),ws(e.next),e=i=r),e=e.next}while(e!==i);return ji(e)}function gm(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wm(o,a)){let l=Wf(o,a);o=ji(o,o.next),l=ji(l,l.next),Ss(o,t,e,n,r,s,0),Ss(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function _m(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Vf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Tm(c))}r.sort(xm);for(let s=0;s<r.length;s++)e=bm(r[s],e);return e}function xm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function bm(i,t){let e=ym(i,t);if(!e)return t;let n=Wf(e,i);return ji(n,n.next),ji(e,e.next)}function ym(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(kr(i,e))return e;do{if(kr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Gf(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let f=Math.abs(r-e.y)/(n-e.x);Ts(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&vm(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function vm(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Mm(i,t,e,n){let r=i;do r.z===0&&(r.z=Ac(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Sm(r)}function Sm(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Ac(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Tm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Gf(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function hs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Gf(i,t,e,n,r,s,o,a)}function wm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Em(i,t)&&(Ts(i,t)&&Ts(t,i)&&Am(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||kr(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function kr(i,t){return i.x===t.x&&i.y===t.y}function Hf(i,t,e,n){let r=Go(Ee(i,t,e)),s=Go(Ee(i,t,n)),o=Go(Ee(e,n,i)),a=Go(Ee(e,n,t));return!!(r!==s&&o!==a||r===0&&Vo(i,e,t)||s===0&&Vo(i,n,t)||o===0&&Vo(e,i,n)||a===0&&Vo(e,t,n))}function Vo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Go(i){return i>0?1:i<0?-1:0}function Em(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Hf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ts(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Am(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wf(i,t){let e=Rc(i.i,i.x,i.y),n=Rc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Xh(i,t,e,n){let r=Rc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ws(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rm(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Cc=class{static triangulate(t,e,n=2){return fm(t,e,n)}},Es=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Yh(t),qh(n,t);let o=t.length;e.forEach(Yh);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,qh(n,e[l]);let a=Cc.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Yh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function qh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ei=class i extends Qt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=t/a,h=e/l,p=[],g=[],x=[],_=[];for(let m=0;m<u;m++){let y=m*h-o;for(let M=0;M<c;M++){let v=M*f-s;g.push(v,-y,0),x.push(0,0,1),_.push(M/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let M=y+c*m,v=y+c*(m+1),S=y+1+c*(m+1),w=y+1+c*m;p.push(M,v,w),p.push(v,S,w)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},As=class i extends Qt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],f=t,h=(e-t)/r,p=new H,g=new Jt;for(let x=0;x<=r;x++){for(let _=0;_<=n;_++){let m=s+_/n*o;p.x=f*Math.cos(m),p.y=f*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<r;x++){let _=x*(n+1);for(let m=0;m<n;m++){let y=m+_,M=y,v=y+n+1,S=y+n+2,w=y+1;a.push(M,v,w),a.push(v,S,w)}}this.setIndex(a),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function nr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if($h(r))r.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if($h(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=nr(i[e]);for(let r in n)t[r]=n[r]}return t}function $h(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function iu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Xf={clone:nr,merge:en},Im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Im,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=Cm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new at().setHex(r.value);break;case"v2":this.uniforms[n].value=new Jt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new H().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Te().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fa=class extends fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var da=class extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pa=class extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ar(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ai=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ma=class extends Ai{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tc:s=t,a=2*e-n;break;case wc:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tc:o=t,l=2*n-e;break;case wc:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-e)/(r-e),x=g*g,_=x*g,m=-h*_+2*h*x-h*g,y=(1+h)*_+(-1.5-2*h)*x+(-.5+h)*g+1,M=(-1-p)*_+(1.5+p)*x+.5*g,v=p*_-p*x;for(let S=0;S!==a;++S)s[S]=m*o[u+S]+y*o[c+S]+M*o[l+S]+v*o[f+S];return s}},ga=class extends Ai{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},_a=class extends Ai{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},xa=class extends Ai{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(r-e),x=1-g;for(let _=0;_!==a;++_)s[_]=o[c+_]*x+o[l+_]*g;return s}let h=a*2,p=t-1;for(let g=0;g!==a;++g){let x=o[c+g],_=o[l+g],m=p*h+g*2,y=f[m],M=f[m+1],v=t*h+g*2,S=u[v],w=u[v+1],A=Fm(n,e,y,S,r);s[g]=Yf(A,x,M,w,_)}return s}};function Yf(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function Lm(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function Fm(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=Yf(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Lm(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var dn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ar(e,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ar(t.times,Array),values:Ar(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),vc(t.settings)&&(n.settings={inTangents:Ar(t.settings.inTangents,Array),outTangents:Ar(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case fs:e=this.InterpolantFactoryMethodDiscrete;break;case na:e=this.InterpolantFactoryMethodLinear;break;case Xo:e=this.InterpolantFactoryMethodSmooth;break;case Mc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return Xo;case this.InterpolantFactoryMethodBezier:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;vc(this.settings)&&(Zh(this.settings.inTangents,t),Zh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&Yp(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Xo,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let f=a*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[h+g]||x!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let p=0;p!==n;++p)e[h+p]=e[f+p]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,vc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Zh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=na;var Ri=class extends dn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=fs;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends dn{constructor(t,e,n,r){super(t,e,n,r)}};ba.prototype.ValueTypeName="color";var ya=class extends dn{constructor(t,e,n,r){super(t,e,n,r)}};ya.prototype.ValueTypeName="number";var va=class extends Ai{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)Vn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Rs=class extends dn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}};Rs.prototype.ValueTypeName="quaternion";Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends dn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=fs;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends dn{constructor(t,e,n,r){super(t,e,n,r)}};Ma.prototype.ValueTypeName="vector";var qo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Kh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Kh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Kh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Sa=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qf=new Sa,Vr=class{constructor(t){this.manager=t!==void 0?t:qf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Vr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=new WeakMap,Ta=class extends Vr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=qo.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let f=Rr.get(o);f===void 0&&(f=[],Rr.set(o,f)),f.push({onLoad:e,onError:r})}return o}let a=Fr("img");function l(){u(),e&&e(this);let f=Rr.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onLoad&&p.onLoad(this)}Rr.delete(this),s.manager.itemEnd(t)}function c(f){u(),r&&r(f),qo.remove(`image:${t}`);let h=Rr.get(this)||[];for(let p=0;p<h.length;p++){let g=h[p];g.onError&&g.onError(f)}Rr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),qo.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var Cs=class extends Vr{constructor(t){super(t)}load(t,e,n,r){let s=new Qe,o=new Ta(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Ho=new H,Wo=new Vn,Bn=new H,Is=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ho,Wo,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Wo,Bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ho,Wo,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Wo,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},yi=new H,Jh=new Jt,Qh=new Jt,Ke=class extends Is{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(jl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,Jh,Qh),e.subVectors(Qh,Jh)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(jl*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var si=class extends Is{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Cr=-90,Ir=1,wa=class extends an{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ke(Cr,Ir,t,e);r.layers=this.layers,this.add(r);let s=new Ke(Cr,Ir,t,e);s.layers=this.layers,this.add(s);let o=new Ke(Cr,Ir,t,e);o.layers=this.layers,this.add(o);let a=new Ke(Cr,Ir,t,e);a.layers=this.layers,this.add(a);let l=new Ke(Cr,Ir,t,e);l.layers=this.layers,this.add(l);let c=new Ke(Cr,Ir,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ea=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ru="\\[\\]\\.:\\/",Dm=new RegExp("["+ru+"]","g"),su="[^"+ru+"]",Um="[^"+ru.replace("\\.","")+"]",Nm=/((?:WC+[\/:])*)/.source.replace("WC",su),Om=/(WCOD+)?/.source.replace("WCOD",Um),Bm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",su),zm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",su),km=new RegExp("^"+Nm+Om+Bm+zm+"$"),Vm=["material","materials","bones","map"],Ic=class{constructor(t,e,n){let r=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dm,"")}static parseTrackName(t){let e=km.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Vm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Ic;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dS=new Float32Array(1);var jh=new Te,Ps=class{constructor(t,e,n=0,r=1/0){this.ray=new Ji(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jh),this}intersectObject(t,e=!0,n=[]){return Pc(t,this,n,e),n.sort(tf),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Pc(t[r],this,n,e);return n.sort(tf),n}};function tf(i,t){return i.distance-t.distance}function Pc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Pc(s[o],t,e,!0)}}var hu=class hu{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};hu.prototype.isMatrix2=!0;var Lc=hu;function ou(i,t,e,n){let r=Gm(n);switch(e){case Kc:return i*t;case Qc:return i*t/r.components*r.byteLength;case Da:return i*t/r.components*r.byteLength;case Ui:return i*t*2/r.components*r.byteLength;case Ua:return i*t*2/r.components*r.byteLength;case Jc:return i*t*3/r.components*r.byteLength;case vn:return i*t*4/r.components*r.byteLength;case Na:return i*t*4/r.components*r.byteLength;case Ns:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case ka:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case za:return Math.max(i,8)*Math.max(t,8)/2;case Va:case Ga:case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:case ks:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case tl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case al:case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ul:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vs:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gm(i){switch(i){case pn:case Yc:return{byteLength:1,components:1};case Hr:case qc:case Ln:return{byteLength:2,components:1};case La:case Fa:return{byteLength:2,components:4};case In:case Pa:case Pn:return{byteLength:4,components:1};case $c:case Zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function md(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Wm(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){let g=f[h],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){let x=f[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
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
#endif`,qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jm=`#ifdef USE_AOMAP
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
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jm=`#ifdef USE_BATCHING
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
#endif`,tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rg=`#ifdef USE_IRIDESCENCE
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
#endif`,sg=`#ifdef USE_BUMPMAP
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pg=`#define PI 3.141592653589793
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
} // validated`,mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gg=`vec3 transformedNormal = objectNormal;
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
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lg=`#ifdef USE_GRADIENTMAP
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
}`,Fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ng=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Og=`#ifdef USE_ENVMAP
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
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gg=`PhysicalMaterial material;
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
#endif`,Hg=`uniform sampler2D dfgLUT;
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
}`,Wg=`
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e_=`#if defined( USE_POINTS_UV )
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
#endif`,n_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a_=`#ifdef USE_MORPHTARGETS
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
#endif`,l_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,p_=`#ifdef USE_NORMALMAP
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
#endif`,m_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,__=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I_=`float getShadowMask() {
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
}`,P_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L_=`#ifdef USE_SKINNING
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
#endif`,F_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D_=`#ifdef USE_SKINNING
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
#endif`,U_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z_=`#ifdef USE_TRANSMISSION
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
#endif`,k_=`#ifdef USE_TRANSMISSION
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,X_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y_=`uniform sampler2D t2D;
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
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`#include <common>
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
}`,Q_=`#if DEPTH_PACKING == 3200
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
}`,j_=`#define DISTANCE
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
}`,tx=`#define DISTANCE
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`uniform float scale;
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
}`,rx=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,ox=`uniform vec3 diffuse;
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
}`,ax=`#define LAMBERT
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
}`,lx=`#define LAMBERT
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
}`,cx=`#define MATCAP
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
}`,ux=`#define MATCAP
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
}`,hx=`#define NORMAL
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
}`,fx=`#define NORMAL
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
}`,dx=`#define PHONG
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
}`,px=`#define PHONG
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
}`,mx=`#define STANDARD
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
}`,gx=`#define STANDARD
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
}`,_x=`#define TOON
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
}`,xx=`#define TOON
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
}`,bx=`uniform float size;
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
}`,yx=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,Mx=`uniform vec3 color;
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
}`,Sx=`uniform float rotation;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Xm,alphahash_pars_fragment:Ym,alphamap_fragment:qm,alphamap_pars_fragment:$m,alphatest_fragment:Zm,alphatest_pars_fragment:Km,aomap_fragment:Jm,aomap_pars_fragment:Qm,batching_pars_vertex:jm,batching_vertex:tg,begin_vertex:eg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:rg,bumpmap_pars_fragment:sg,clipping_planes_fragment:og,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:lg,clipping_planes_vertex:cg,color_fragment:ug,color_pars_fragment:hg,color_pars_vertex:fg,color_vertex:dg,common:pg,cube_uv_reflection_fragment:mg,defaultnormal_vertex:gg,displacementmap_pars_vertex:_g,displacementmap_vertex:xg,emissivemap_fragment:bg,emissivemap_pars_fragment:yg,colorspace_fragment:vg,colorspace_pars_fragment:Mg,envmap_fragment:Sg,envmap_common_pars_fragment:Tg,envmap_pars_fragment:wg,envmap_pars_vertex:Eg,envmap_physical_pars_fragment:Og,envmap_vertex:Ag,fog_vertex:Rg,fog_pars_vertex:Cg,fog_fragment:Ig,fog_pars_fragment:Pg,gradientmap_pars_fragment:Lg,lightmap_pars_fragment:Fg,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Ug,lights_pars_begin:Ng,lights_toon_fragment:Bg,lights_toon_pars_fragment:zg,lights_phong_fragment:kg,lights_phong_pars_fragment:Vg,lights_physical_fragment:Gg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Wg,lights_fragment_maps:Xg,lights_fragment_end:Yg,lightprobes_pars_fragment:qg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:Zg,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:Jg,map_fragment:Qg,map_pars_fragment:jg,map_particle_fragment:t_,map_particle_pars_fragment:e_,metalnessmap_fragment:n_,metalnessmap_pars_fragment:i_,morphinstance_vertex:r_,morphcolor_vertex:s_,morphnormal_vertex:o_,morphtarget_pars_vertex:a_,morphtarget_vertex:l_,normal_fragment_begin:c_,normal_fragment_maps:u_,normal_pars_fragment:h_,normal_pars_vertex:f_,normal_vertex:d_,normalmap_pars_fragment:p_,clearcoat_normal_fragment_begin:m_,clearcoat_normal_fragment_maps:g_,clearcoat_pars_fragment:__,iridescence_pars_fragment:x_,opaque_fragment:b_,packing:y_,premultiplied_alpha_fragment:v_,project_vertex:M_,dithering_fragment:S_,dithering_pars_fragment:T_,roughnessmap_fragment:w_,roughnessmap_pars_fragment:E_,shadowmap_pars_fragment:A_,shadowmap_pars_vertex:R_,shadowmap_vertex:C_,shadowmask_pars_fragment:I_,skinbase_vertex:P_,skinning_pars_vertex:L_,skinning_vertex:F_,skinnormal_vertex:D_,specularmap_fragment:U_,specularmap_pars_fragment:N_,tonemapping_fragment:O_,tonemapping_pars_fragment:B_,transmission_fragment:z_,transmission_pars_fragment:k_,uv_pars_fragment:V_,uv_pars_vertex:G_,uv_vertex:H_,worldpos_vertex:W_,background_vert:X_,background_frag:Y_,backgroundCube_vert:q_,backgroundCube_frag:$_,cube_vert:Z_,cube_frag:K_,depth_vert:J_,depth_frag:Q_,distance_vert:j_,distance_frag:tx,equirect_vert:ex,equirect_frag:nx,linedashed_vert:ix,linedashed_frag:rx,meshbasic_vert:sx,meshbasic_frag:ox,meshlambert_vert:ax,meshlambert_frag:lx,meshmatcap_vert:cx,meshmatcap_frag:ux,meshnormal_vert:hx,meshnormal_frag:fx,meshphong_vert:dx,meshphong_frag:px,meshphysical_vert:mx,meshphysical_frag:gx,meshtoon_vert:_x,meshtoon_frag:xx,points_vert:bx,points_frag:yx,shadow_vert:vx,shadow_frag:Mx,sprite_vert:Sx,sprite_frag:Tx},St={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Wn={basic:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:en([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:en([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new at(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:en([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:en([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:en([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:en([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:en([St.common,St.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:en([St.lights,St.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Wn.physical={uniforms:en([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var ml={r:0,b:0,g:0},wx=new Te,gd=new Wt;gd.set(-1,0,0,0,1,0,0,0,1);function Ex(i,t,e,n,r,s){let o=new at(0),a=r===!0?0:1,l,c,u=null,f=0,h=null;function p(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=t.get(M,v)}return M}function g(y){let M=!1,v=p(y);v===null?_(o,a):v&&v.isColor&&(_(v,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,M){let v=p(M);v&&(v.isCubeTexture||v.mapping===Ds)?(c===void 0&&(c=new Yt(new zr(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:nr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wx.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gd),c.material.toneMapped=ee.getTransfer(v.colorSpace)!==de,(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Yt(new Ei(2,2),new fn({name:"BackgroundMaterial",uniforms:nr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ee.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function _(y,M){y.getRGB(ml,iu(i)),e.buffers.color.setClear(ml.r,ml.g,ml.b,M,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,_(o,a)},render:g,addToRenderList:x,dispose:m}}function Ax(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(I,L,P,E,D){let U=!1,N=f(I,E,P,L);s!==N&&(s=N,c(s.object)),U=p(I,E,P,D),U&&g(I,E,P,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,v(I,L,P,E),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,L,P,E){let D=E.wireframe===!0,U=n[L.id];U===void 0&&(U={},n[L.id]=U);let N=I.isInstancedMesh===!0?I.id:0,k=U[N];k===void 0&&(k={},U[N]=k);let z=k[P.id];z===void 0&&(z={},k[P.id]=z);let G=z[D];return G===void 0&&(G=h(l()),z[D]=G),G}function h(I){let L=[],P=[],E=[];for(let D=0;D<e;D++)L[D]=0,P[D]=0,E[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:E,object:I,attributes:{},index:null}}function p(I,L,P,E){let D=s.attributes,U=L.attributes,N=0,k=P.getAttributes();for(let z in k)if(k[z].location>=0){let V=D[z],it=U[z];if(it===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(it=I.instanceColor)),V===void 0||V.attribute!==it||it&&V.data!==it.data)return!0;N++}return s.attributesNum!==N||s.index!==E}function g(I,L,P,E){let D={},U=L.attributes,N=0,k=P.getAttributes();for(let z in k)if(k[z].location>=0){let V=U[z];V===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(V=I.instanceColor));let it={};it.attribute=V,V&&V.data&&(it.data=V.data),D[z]=it,N++}s.attributes=D,s.attributesNum=N,s.index=E}function x(){let I=s.newAttributes;for(let L=0,P=I.length;L<P;L++)I[L]=0}function _(I){m(I,0)}function m(I,L){let P=s.newAttributes,E=s.enabledAttributes,D=s.attributeDivisors;P[I]=1,E[I]===0&&(i.enableVertexAttribArray(I),E[I]=1),D[I]!==L&&(i.vertexAttribDivisor(I,L),D[I]=L)}function y(){let I=s.newAttributes,L=s.enabledAttributes;for(let P=0,E=L.length;P<E;P++)L[P]!==I[P]&&(i.disableVertexAttribArray(P),L[P]=0)}function M(I,L,P,E,D,U,N){N===!0?i.vertexAttribIPointer(I,L,P,D,U):i.vertexAttribPointer(I,L,P,E,D,U)}function v(I,L,P,E){x();let D=E.attributes,U=P.getAttributes(),N=L.defaultAttributeValues;for(let k in U){let z=U[k];if(z.location>=0){let G=D[k];if(G===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let V=G.normalized,it=G.itemSize,Z=t.get(G);if(Z===void 0)continue;let ot=Z.buffer,J=Z.type,ht=Z.bytesPerElement,X=J===i.INT||J===i.UNSIGNED_INT||G.gpuType===Pa;if(G.isInterleavedBufferAttribute){let Q=G.data,ft=Q.stride,mt=G.offset;if(Q.isInstancedInterleavedBuffer){for(let pt=0;pt<z.locationSize;pt++)m(z.location+pt,Q.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let pt=0;pt<z.locationSize;pt++)_(z.location+pt);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let pt=0;pt<z.locationSize;pt++)M(z.location+pt,it/z.locationSize,J,V,ft*ht,(mt+it/z.locationSize*pt)*ht,X)}else{if(G.isInstancedBufferAttribute){for(let Q=0;Q<z.locationSize;Q++)m(z.location+Q,G.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Q=0;Q<z.locationSize;Q++)_(z.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let Q=0;Q<z.locationSize;Q++)M(z.location+Q,it/z.locationSize,J,V,it*ht,it/z.locationSize*Q*ht,X)}}else if(N!==void 0){let V=N[k];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(z.location,V);break;case 3:i.vertexAttrib3fv(z.location,V);break;case 4:i.vertexAttrib4fv(z.location,V);break;default:i.vertexAttrib1fv(z.location,V)}}}}y()}function S(){T();for(let I in n){let L=n[I];for(let P in L){let E=L[P];for(let D in E){let U=E[D];for(let N in U)u(U[N].object),delete U[N];delete E[D]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let P in L){let E=L[P];for(let D in E){let U=E[D];for(let N in U)u(U[N].object),delete U[N];delete E[D]}}delete n[I.id]}function A(I){for(let L in n){let P=n[L];for(let E in P){let D=P[E];if(D[I.id]===void 0)continue;let U=D[I.id];for(let N in U)u(U[N].object),delete U[N];delete D[I.id]}}}function b(I){for(let L in n){let P=n[L],E=I.isInstancedMesh===!0?I.id:0,D=P[E];if(D!==void 0){for(let U in D){let N=D[U];for(let k in N)u(N[k].object),delete N[k];delete D[U]}delete P[E],Object.keys(P).length===0&&delete n[L]}}}function T(){C(),o=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:_,disableUnusedAttributes:y}}function Rx(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Cx(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let b=A===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==pn&&A!==Pn&&!b&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:w}}function Ix(i){let t=this,e=null,n=0,r=!1,s=!1,o=new An,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){let g=f.clippingPlanes,x=f.clipIntersection,_=f.clipShadows,m=i.get(f);if(!r||g===null||g.length===0||s&&!_)s?u(null):c();else{let y=s?0:n,M=y*4,v=m.clippingState||null;l.value=v,v=u(g,h,M,p);for(let S=0;S!==M;++S)v[S]=e[S];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,p,g){let x=f!==null?f.length:0,_=null;if(x!==0){if(_=l.value,g!==!0||_===null){let m=p+x*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(_===null||_.length<m)&&(_=new Float32Array(m));for(let M=0,v=p;M!==x;++M,v+=4)o.copy(f[M]).applyMatrix4(y,a),o.normal.toArray(_,v),_[v+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,_}}var Yr=4,Px=6,Lx=20,Fx=256,Hs=new si,$f=new at,fu=null,du=0,pu=0,mu=!1,Dx=new H,ir=new H,_l=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=Dx}=s;fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(fu,du,pu),this._renderer.xr.enabled=mu,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Ln,format:vn,colorSpace:ds,depthBuffer:!1},r=Zf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zf(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ux(s)),this._blurMaterial=Ox(s,t,e),this._ggxMaterial=Nx(s,t,e)}return r}_compileMaterial(t){let e=new Yt(new Qt,t);this._renderer.compile(e,Hs)}_sceneToCubeUV(t,e,n,r,s){let l=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor($f),f.toneMapping=Cn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yt(new zr,new le({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,_=x.material,m=!1,y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,m=!0):(_.color.copy($f),m=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));let S=this._cubeSize;Xr(r,v*S,M>2?S:0,S,S),f.setRenderTarget(r),m&&f.render(x,l),f.render(t,l)}f.toneMapping=p,f.autoClear=h,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Li||t.mapping===er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Xr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Hs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:g}=this,x=this._sizeLods[n],_=3*x*(n>g-Yr?n-g+Yr:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,Xr(s,_,m,3*x,2*x),r.setRenderTarget(s),r.render(a,Hs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Xr(t,_,m,3*x,2*x),r.setRenderTarget(t),r.render(a,Hs)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],f=3*u*(r>this._lodMax-Yr?r-this._lodMax+Yr:0),h=4*(this._cubeSize-u);Xr(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(l,Hs)}};function Ux(i){let t=[],e=[],n=i,r=i-Yr+1+Px;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,g=new Float32Array(p*h*f),x=new Float32Array(p*h*f);for(let m=0;m<f;m++){let y=m%3*2/3-1,M=m>2?0:-1,v=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];g.set(v,p*h*m);for(let S=0;S<h;S++){let w=u[S*2]*2-1,A=u[S*2+1]*2-1;m===0?ir.set(1,A,w):m===1?ir.set(-w,1,-A):m===2?ir.set(-w,A,1):m===3?ir.set(-1,A,-w):m===4?ir.set(-w,-1,A):ir.set(w,A,-1),ir.toArray(x,(m*h+S)*p)}}let _=new Qt;_.setAttribute("position",new xn(g,p)),_.setAttribute("outputDirection",new xn(x,p)),e.push(new Yt(_,null)),n>Yr&&n--}return{lodMeshes:e,sizeLods:t}}function Zf(i,t,e){let n=new je(i,t,e);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Nx(i,t,e){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ox(i,t,e){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:Lx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Kf(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Jf(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xl=class extends je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ys(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zr(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Gn});s.uniforms.tEquirect.value=e;let o=new Yt(r,s),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=He),new wa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function Bx(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?o(h):s(h)}function s(h){if(h&&h.isTexture){let p=h.mapping;if(p===Ra||p===Ca)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new xl(g.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let p=h.mapping,g=p===Ra||p===Ca,x=p===Li||p===er;if(g||x){let _=e.get(h),m=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new _l(i)),_=g?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{let y=h.image;return g&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new _l(i)),_=g?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function a(h,p){return p===Ra?h.mapping=Li:p===Ca&&(h.mapping=er),h}function l(h){let p=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&p++;return p===g}function c(h){let p=h.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function zx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&qi("WebGLRenderer: "+n+" extension not supported."),r}}}function kx(i,t,e,n){let r={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];let p=s.get(h);p&&(t.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)t.update(h[p],i.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(p!==null){let y=p.array;x=p.version;for(let M=0,v=y.length;M<v;M+=3){let S=y[M+0],w=y[M+1],A=y[M+2];h.push(S,w,w,A,A,S)}}else{let y=g.array;x=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let S=M+0,w=M+1,A=M+2;h.push(S,w,w,A,A,S)}}let _=new(g.count>=65535?Ki:xs)(h,1);_.version=x;let m=s.get(f);m&&t.remove(m),s.set(f,_)}function u(f){let h=s.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Vx(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,s,f*o),e.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,s,f*o,p),e.update(h,n,p))}function u(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,p);let x=0;for(let _=0;_<p;_++)x+=h[_];e.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Gx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Hx(i,t,e){let n=new WeakMap,r=new Ae;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*S*4*f),A=new gs(w,v,S,f);A.type=Pn,A.needsUpdate=!0;let b=M*4;for(let C=0;C<f;C++){let I=_[C],L=m[C],P=y[C],E=v*S*4*C;for(let D=0;D<I.count;D++){let U=D*b;p===!0&&(r.fromBufferAttribute(I,D),w[E+U+0]=r.x,w[E+U+1]=r.y,w[E+U+2]=r.z,w[E+U+3]=0),g===!0&&(r.fromBufferAttribute(L,D),w[E+U+4]=r.x,w[E+U+5]=r.y,w[E+U+6]=r.z,w[E+U+7]=0),x===!0&&(r.fromBufferAttribute(P,D),w[E+U+8]=r.x,w[E+U+9]=r.y,w[E+U+10]=r.z,w[E+U+11]=P.itemSize===4?r.w:1)}}h={count:f,texture:A,size:new Jt(v,S)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Wx(i,t,e,n,r){let s=new WeakMap;function o(c){let u=r.render.frame,f=c.geometry,h=t.get(c,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Xx={[Bc]:"LINEAR_TONE_MAPPING",[zc]:"REINHARD_TONE_MAPPING",[kc]:"CINEON_TONE_MAPPING",[Vc]:"ACES_FILMIC_TONE_MAPPING",[Hc]:"AGX_TONE_MAPPING",[Wc]:"NEUTRAL_TONE_MAPPING",[Gc]:"CUSTOM_TONE_MAPPING"};function Yx(i,t,e,n,r,s){let o=new je(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Qt;c.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let u=new fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Yt(c,u),h=new si(-1,1,1,-1,0,1),p=null,g=null,x=!1,_,m=null,y=[],M=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let w=0;w<y.length;w++){let A=y[w];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){y=v,M=y.length>0&&y[0].isRenderPass===!0;let S=o.width,w=o.height;y.length>0&&a===null&&(a=new je(S,w,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new je(S,w,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let b=y[A];b.setSize&&b.setSize(S,w)}},this.begin=function(v,S){if(x||v.toneMapping===Cn&&y.length===0)return!1;if(m=S,S!==null){let w=S.width,A=S.height;(o.width!==w||o.height!==A)&&this.setSize(w,A)}return M===!1&&v.setRenderTarget(o),_=v.toneMapping,v.toneMapping=Cn,!0},this.hasRenderPass=function(){return M},this.end=function(v,S){v.toneMapping=_,x=!0;let w=o,A=a;for(let b=0;b<y.length;b++){let T=y[b];T.enabled!==!1&&(T.render(v,A,w,S),T.needsSwap!==!1&&(w=A,A=A===a?l:a))}if(p!==v.outputColorSpace||g!==v.toneMapping){p=v.outputColorSpace,g=v.toneMapping,u.defines={},ee.getTransfer(p)===de&&(u.defines.SRGB_TRANSFER="");let b=Xx[g];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(f,h),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var _d=new Qe,xu=new wi(1,1),xd=new gs,bd=new oa,yd=new ys,Qf=[],jf=[],td=new Float32Array(16),ed=new Float32Array(9),nd=new Float32Array(4);function Zr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Qf[r];if(s===void 0&&(s=new Float32Array(r),Qf[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yl(i,t){let e=jf[t];e===void 0&&(e=new Int32Array(t),jf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function Zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function Jx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;nd.set(n),i.uniformMatrix2fv(this.addr,!1,nd),Ne(e,n)}}function Qx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;ed.set(n),i.uniformMatrix3fv(this.addr,!1,ed),Ne(e,n)}}function jx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;td.set(n),i.uniformMatrix4fv(this.addr,!1,td),Ne(e,n)}}function tb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function eb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function nb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function ib(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function rb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function ob(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function ab(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function lb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(xu.compareFunction=e.isReversedDepthBuffer()?pl:dl,s=xu):s=_d,e.setTexture2D(t||s,r)}function cb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||bd,r)}function ub(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||yd,r)}function hb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||xd,r)}function fb(i){switch(i){case 5126:return qx;case 35664:return $x;case 35665:return Zx;case 35666:return Kx;case 35674:return Jx;case 35675:return Qx;case 35676:return jx;case 5124:case 35670:return tb;case 35667:case 35671:return eb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return rb;case 36294:return sb;case 36295:return ob;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return hb}}function db(i,t){i.uniform1fv(this.addr,t)}function pb(i,t){let e=Zr(t,this.size,2);i.uniform2fv(this.addr,e)}function mb(i,t){let e=Zr(t,this.size,3);i.uniform3fv(this.addr,e)}function gb(i,t){let e=Zr(t,this.size,4);i.uniform4fv(this.addr,e)}function _b(i,t){let e=Zr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xb(i,t){let e=Zr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bb(i,t){let e=Zr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yb(i,t){i.uniform1iv(this.addr,t)}function vb(i,t){i.uniform2iv(this.addr,t)}function Mb(i,t){i.uniform3iv(this.addr,t)}function Sb(i,t){i.uniform4iv(this.addr,t)}function Tb(i,t){i.uniform1uiv(this.addr,t)}function wb(i,t){i.uniform2uiv(this.addr,t)}function Eb(i,t){i.uniform3uiv(this.addr,t)}function Ab(i,t){i.uniform4uiv(this.addr,t)}function Rb(i,t,e){let n=this.cache,r=t.length,s=yl(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=xu:o=_d;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function Cb(i,t,e){let n=this.cache,r=t.length,s=yl(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||bd,s[o])}function Ib(i,t,e){let n=this.cache,r=t.length,s=yl(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||yd,s[o])}function Pb(i,t,e){let n=this.cache,r=t.length,s=yl(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||xd,s[o])}function Lb(i){switch(i){case 5126:return db;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return xb;case 35676:return bb;case 5124:case 35670:return yb;case 35667:case 35671:return vb;case 35668:case 35672:return Mb;case 35669:case 35673:return Sb;case 5125:return Tb;case 36294:return wb;case 36295:return Eb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Pb}}var bu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fb(e.type)}},yu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lb(e.type)}},vu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},gu=/(\w+)(\])?(\[|\.)?/g;function id(i,t){i.seq.push(t),i.map[t.id]=t}function Fb(i,t,e){let n=i.name,r=n.length;for(gu.lastIndex=0;;){let s=gu.exec(n),o=gu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){id(e,c===void 0?new bu(a,i,t):new yu(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new vu(a),id(e,f)),e=f}}}var qr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Fb(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function rd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Db=37297,Ub=0;function Nb(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var sd=new Wt;function Ob(i){ee._getMatrix(sd,ee.workingColorSpace,i);let t=`mat3( ${sd.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case ps:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function od(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Nb(i.getShaderSource(t),a)}else return s}function Bb(i,t){let e=Ob(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var zb={[Bc]:"Linear",[zc]:"Reinhard",[kc]:"Cineon",[Vc]:"ACESFilmic",[Hc]:"AgX",[Wc]:"Neutral",[Gc]:"Custom"};function kb(i,t){let e=zb[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var gl=new H;function Vb(){ee.getLuminanceCoefficients(gl);let i=gl.x.toFixed(4),t=gl.y.toFixed(4),e=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Hb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wb(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Xs(i){return i!==""}function ad(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ld(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(i){return i.replace(Xb,qb)}var Yb=new Map;function qb(i,t){let e=Zt[t];if(e===void 0){let n=Yb.get(t);if(n!==void 0)e=Zt[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Mu(e)}var $b=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(i){return i.replace($b,Zb)}function Zb(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ud(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Kb={[Ls]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function Jb(i){return Kb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qb={[Li]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE_UV"};function jb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Qb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ty={[er]:"ENVMAP_MODE_REFRACTION"};function ey(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ty[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ny={[Oc]:"ENVMAP_BLENDING_MULTIPLY",[Sf]:"ENVMAP_BLENDING_MIX",[Tf]:"ENVMAP_BLENDING_ADD"};function iy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ny[i.combine]||"ENVMAP_BLENDING_NONE"}function ry(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function sy(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Jb(e),c=jb(e),u=ey(e),f=iy(e),h=ry(e),p=Gb(e),g=Hb(s),x=r.createProgram(),_,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`)):(_=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),m=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?kb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Bb("linearToOutputTexel",e.outputColorSpace),Vb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Mu(o),o=ad(o,e),o=ld(o,e),a=Mu(a),a=ad(a,e),a=ld(a,e),o=cd(o),a=cd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=y+_+o,v=y+m+a,S=rd(r,r.VERTEX_SHADER,M),w=rd(r,r.FRAGMENT_SHADER,v);r.attachShader(x,S),r.attachShader(x,w),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(I){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(x)||"",P=r.getShaderInfoLog(S)||"",E=r.getShaderInfoLog(w)||"",D=L.trim(),U=P.trim(),N=E.trim(),k=!0,z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,S,w);else{let G=od(r,S,"vertex"),V=od(r,w,"fragment");kt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+G+`
`+V)}else D!==""?zt("WebGLProgram: Program Info Log:",D):(U===""||N==="")&&(z=!1);z&&(I.diagnostics={runnable:k,programLog:D,vertexShader:{log:U,prefix:_},fragmentShader:{log:N,prefix:m}})}r.deleteShader(S),r.deleteShader(w),b=new qr(r,x),T=Wb(r,x)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(x,Db)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ub++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}var oy=0,Su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Tu(t),e.set(t,n)),n}},Tu=class{constructor(t){this.id=oy++,this.code=t,this.usedTimes=0}};function ay(i){return i===Ui||i===ks||i===Vs}function ly(i,t,e,n,r,s){let o=new Nr,a=new Su,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,T,C,I,L,P){let E=I.fog,D=L.geometry,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,k=t.get(b.envMap||U,N),z=k&&k.mapping===Ds?k.image.height:null,G=p[b.type];b.precision!==null&&(h=n.getMaxPrecision(b.precision),h!==b.precision&&zt("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,it=V!==void 0?V.length:0,Z=0;D.morphAttributes.position!==void 0&&(Z=1),D.morphAttributes.normal!==void 0&&(Z=2),D.morphAttributes.color!==void 0&&(Z=3);let ot,J,ht,X;if(G){let xe=Wn[G];ot=xe.vertexShader,J=xe.fragmentShader}else{ot=b.vertexShader,J=b.fragmentShader;let xe=a.getVertexShaderStage(b),he=a.getFragmentShaderStage(b);a.update(b,xe,he),ht=xe.id,X=he.id}let Q=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),mt=L.isInstancedMesh===!0,pt=L.isBatchedMesh===!0,At=!!b.map,re=!!b.matcap,Vt=!!k,Kt=!!b.aoMap,se=!!b.lightMap,jt=!!b.bumpMap&&b.wireframe===!1,Se=!!b.normalMap,Be=!!b.displacementMap,sn=!!b.emissiveMap,we=!!b.metalnessMap,Ie=!!b.roughnessMap,q=b.anisotropy>0,Ye=b.clearcoat>0,pe=b.dispersion>0,B=b.retroreflectivity>0,R=b.iridescence>0,K=b.sheen>0,nt=b.transmission>0,st=q&&!!b.anisotropyMap,gt=Ye&&!!b.clearcoatMap,_t=Ye&&!!b.clearcoatNormalMap,lt=Ye&&!!b.clearcoatRoughnessMap,ut=R&&!!b.iridescenceMap,xt=R&&!!b.iridescenceThicknessMap,Dt=K&&!!b.sheenColorMap,Mt=K&&!!b.sheenRoughnessMap,bt=!!b.specularMap,Ut=!!b.specularColorMap,Bt=!!b.specularIntensityMap,qt=nt&&!!b.transmissionMap,Y=nt&&!!b.thicknessMap,yt=!!b.gradientMap,ct=!!b.alphaMap,vt=b.alphaTest>0,Et=!!b.alphaHash,dt=!!b.extensions,Nt=Cn;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let Lt={shaderID:G,shaderType:b.type,shaderName:b.name,vertexShader:ot,fragmentShader:J,defines:b.defines,customVertexShaderID:ht,customFragmentShaderID:X,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:pt,batchingColor:pt&&L._colorsTexture!==null,instancing:mt,instancingColor:mt&&L.instanceColor!==null,instancingMorph:mt&&L.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:At,matcap:re,envMap:Vt,envMapMode:Vt&&k.mapping,envMapCubeUVHeight:z,aoMap:Kt,lightMap:se,bumpMap:jt,normalMap:Se,displacementMap:Be,emissiveMap:sn,normalMapObjectSpace:Se&&b.normalMapType===Af,normalMapTangentSpace:Se&&b.normalMapType===jc,packedNormalMap:Se&&b.normalMapType===jc&&ay(b.normalMap.format),metalnessMap:we,roughnessMap:Ie,anisotropy:q,anisotropyMap:st,clearcoat:Ye,clearcoatMap:gt,clearcoatNormalMap:_t,clearcoatRoughnessMap:lt,dispersion:pe,retroreflection:B,iridescence:R,iridescenceMap:ut,iridescenceThicknessMap:xt,sheen:K,sheenColorMap:Dt,sheenRoughnessMap:Mt,specularMap:bt,specularColorMap:Ut,specularIntensityMap:Bt,transmission:nt,transmissionMap:qt,thicknessMap:Y,gradientMap:yt,opaque:b.transparent===!1&&b.blending===Pi&&b.alphaToCoverage===!1,alphaMap:ct,alphaTest:vt,alphaHash:Et,combine:b.combine,mapUv:At&&g(b.map.channel),aoMapUv:Kt&&g(b.aoMap.channel),lightMapUv:se&&g(b.lightMap.channel),bumpMapUv:jt&&g(b.bumpMap.channel),normalMapUv:Se&&g(b.normalMap.channel),displacementMapUv:Be&&g(b.displacementMap.channel),emissiveMapUv:sn&&g(b.emissiveMap.channel),metalnessMapUv:we&&g(b.metalnessMap.channel),roughnessMapUv:Ie&&g(b.roughnessMap.channel),anisotropyMapUv:st&&g(b.anisotropyMap.channel),clearcoatMapUv:gt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:_t&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(b.sheenRoughnessMap.channel),specularMapUv:bt&&g(b.specularMap.channel),specularColorMapUv:Ut&&g(b.specularColorMap.channel),specularIntensityMapUv:Bt&&g(b.specularIntensityMap.channel),transmissionMapUv:qt&&g(b.transmissionMap.channel),thicknessMapUv:Y&&g(b.thicknessMap.channel),alphaMapUv:ct&&g(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Se||q),vertexNormals:!!D.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(At||ct),fog:!!E,useFog:b.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||D.attributes.normal===void 0&&Se===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ft,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Z,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:At&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:sn&&b.emissiveMap.isVideoTexture===!0&&ee.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Me,flipSided:b.side===rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:dt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&b.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function _(b){let T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)T.push(C),T.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(m(T,b),y(T,b),T.push(i.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function m(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numSunLights),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numSunLightShadows),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function y(b,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function M(b){let T=p[b.type],C;if(T){let I=Wn[T];C=Xf.clone(I.uniforms)}else C=b.uniforms;return C}function v(b,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new sy(i,T,b,r),c.push(C),u.set(T,C)),C}function S(b){if(--b.usedTimes===0){let T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function w(b){a.remove(b)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:M,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:A}}function cy(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function uy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function hd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fd(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,g,x,_,m){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:p,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:_,group:m},i[t]=y):(y.id=h.id,y.object=h,y.geometry=p,y.material=g,y.materialVariant=o(h),y.groupOrder=x,y.renderOrder=h.renderOrder,y.z=_,y.group=m),t++,y}function l(h,p,g,x,_,m,y){y.reversedDepth===!0&&(_=-_);let M=a(h,p,g,x,_,m);g.transmission>0?n.push(M):g.transparent===!0?r.push(M):e.push(M)}function c(h,p,g,x,_,m){let y=a(h,p,g,x,_,m);g.transmission>0?n.unshift(y):g.transparent===!0?r.unshift(y):e.unshift(y)}function u(h,p){e.length>1&&e.sort(h||uy),n.length>1&&n.sort(p||hd),r.length>1&&r.sort(p||hd)}function f(){for(let h=t,p=i.length;h<p;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function hy(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new fd,i.set(n,[o])):r>=s.length?(o=new fd,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function fy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new at};break;case"SpotLight":e={position:new H,direction:new H,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new at,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new at,groundColor:new at};break;case"RectAreaLight":e={color:new at,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function dy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var py=0;function my(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gy(i){let t=new fy,e=dy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let r=new H,s=new Te,o=new Te;function a(c){let u=0,f=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,g=0,x=0,_=0,m=0,y=0,M=0,v=0,S=0,w=0,A=0,b=0,T=0,C=0;c.sort(my);for(let L=0,P=c.length;L<P;L++){let E=c[L],D=E.color,U=E.intensity,N=E.distance,k=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Ui?k=E.shadow.map.texture:k=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=D.r*U,f+=D.g*U,h+=D.b*U;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],U);C++}else if(E.isSunLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let G=E.shadow,V=e.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[g]=V,n.sunShadowMap[g]=k;let it=G.getViewportCount();for(let Z=0;Z<it;Z++)n.sunShadowMatrix[x+Z]=G.getMatrix(Z),n.sunShadowCascade[x+Z]=G._cascadeData[Z];x+=it,g++}n.sun[p]=z,p++}else if(E.isDirectionalLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let G=E.shadow,V=e.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.directionalShadow[_]=V,n.directionalShadowMap[_]=k,n.directionalShadowMatrix[_]=E.shadow.matrix,S++}n.directional[_]=z,_++}else if(E.isSpotLight){let z=t.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(D).multiplyScalar(U),z.distance=N,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[y]=z;let G=E.shadow;if(E.map&&(n.spotLightMap[b]=E.map,b++,G.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[y]=G.matrix,E.castShadow){let V=e.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=k,A++}y++}else if(E.isRectAreaLight){let z=t.get(E);z.color.copy(D).multiplyScalar(U),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[M]=z,M++}else if(E.isPointLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){let G=E.shadow,V=e.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=E.shadow.matrix,w++}n.point[m]=z,m++}else if(E.isHemisphereLight){let z=t.get(E);z.skyColor.copy(E.color).multiplyScalar(U),z.groundColor.copy(E.groundColor).multiplyScalar(U),n.hemi[v]=z,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let I=n.hash;(I.sunLength!==p||I.directionalLength!==_||I.pointLength!==m||I.spotLength!==y||I.rectAreaLength!==M||I.hemiLength!==v||I.numSunShadows!==g||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==b||I.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=_,n.spot.length=y,n.rectArea.length=M,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.sunLength=p,I.directionalLength=_,I.pointLength=m,I.spotLength=y,I.rectAreaLength=M,I.hemiLength=v,I.numSunShadows=g,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=b,I.numLightProbes=C,n.version=py++)}function l(c,u){let f=0,h=0,p=0,g=0,x=0,_=0,m=u.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),f++}else if(v.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(v.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){let S=n.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function dd(i){let t=new gy(i),e=[],n=[],r=[];function s(h){f.camera=h,e.length=0,n.length=0,r.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function _y(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new dd(i),t.set(r,[a])):s>=o.length?(a=new dd(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,by=`uniform sampler2D shadow_pass;
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
}`,yy=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],vy=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],pd=new Te,Ws=new H,_u=new H;function My(i,t,e){let n=new bs,r=new Jt,s=new Jt,o=new Ae,a=new da,l=new pa,c={},u=e.maxTextureSize,f={[Ii]:rn,[rn]:Ii,[Me]:Me},h=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:xy,fragmentShader:by}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new Qt;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Yt(g,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ls;let m=this.type;this.render=function(w,A,b){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===rf&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ls);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Gn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let P=m!==this.type;P&&A.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(D=>D.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,D=w.length;E<D;E++){let U=w[E],N=U.shadow;if(N===void 0){zt("WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let k=N.getFrameExtents();r.multiply(k),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,N.mapSize.y=s.y));let z=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=z,N.map===null||P===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Gr){if(U.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new je(r.x,r.y,{format:Ui,type:Ln,minFilter:He,magFilter:He,generateMipmaps:!1}),N.map.texture.name=U.name+".shadowMap",N.map.depthTexture=new wi(r.x,r.y,Pn),N.map.depthTexture.name=U.name+".shadowMapDepth",N.map.depthTexture.format=zn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ke,N.map.depthTexture.magFilter=ke}else U.isPointLight?(N.map=new xl(r.x),N.map.depthTexture=new ha(r.x,In)):(N.map=new je(r.x,r.y),N.map.depthTexture=new wi(r.x,r.y,In)),N.map.depthTexture.name=U.name+".shadowMap",N.map.depthTexture.format=zn,this.type===Ls?(N.map.depthTexture.compareFunction=z?pl:dl,N.map.depthTexture.minFilter=He,N.map.depthTexture.magFilter=He):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ke,N.map.depthTexture.magFilter=ke);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y)&&N.map.setSize(r.x,r.y);let G=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();U.isPointLight!==!0&&N.updateMatrices(U,b);for(let V=0;V<G;V++){let it=N.getCamera(V);if(U.isPointLight){let Z=N.camera,ot=N.matrix,J=U.distance||Z.far;J!==Z.far&&(Z.far=J,Z.updateProjectionMatrix()),Ws.setFromMatrixPosition(U.matrixWorld),Z.position.copy(Ws),_u.copy(Z.position),_u.add(yy[V]),Z.up.copy(vy[V]),Z.lookAt(_u),Z.updateMatrixWorld(),ot.makeTranslation(-Ws.x,-Ws.y,-Ws.z),pd.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),N._frustum.setFromProjectionMatrix(pd,Z.coordinateSystem,Z.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,V),i.clear();else{V===0&&(i.setRenderTarget(N.map),i.clear());let Z=N.getViewport(V);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),L.viewport(o)}n=N.getFrustum(V),v(A,b,it,U,this.type)}N.isPointLightShadow!==!0&&this.type===Gr&&y(N,b),N.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(T,C,I)};function y(w,A){let b=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new je(r.x,r.y,{format:Ui,type:Ln}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,b,h,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,b,p,x,null)}function M(w,A,b,T){let C=null,I=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)C=I;else if(C=b.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=C.uuid,P=A.uuid,E=c[L];E===void 0&&(E={},c[L]=E);let D=E[P];D===void 0&&(D=C.clone(),E[P]=D,A.addEventListener("dispose",S)),C=D}if(C.visible=A.visible,C.wireframe=A.wireframe,T===Gr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:f[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=i.properties.get(C);L.light=b}return C}function v(w,A,b,T,C){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Gr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let P=t.update(w),E=w.material;if(Array.isArray(E)){let D=P.groups;for(let U=0,N=D.length;U<N;U++){let k=D[U],z=E[k.materialIndex];if(z&&z.visible){let G=M(w,z,T,C);w.onBeforeShadow(i,w,A,b,P,G,k),i.renderBufferDirect(b,null,P,G,w,k),w.onAfterShadow(i,w,A,b,P,G,k)}}}else if(E.visible){let D=M(w,E,T,C);w.onBeforeShadow(i,w,A,b,P,D,null),i.renderBufferDirect(b,null,P,D,w,null),w.onAfterShadow(i,w,A,b,P,D,null)}}let L=w.children;for(let P=0,E=L.length;P<E;P++)v(L[P],A,b,T,C)}function S(w){w.target.removeEventListener("dispose",S);for(let b in c){let T=c[b],C=w.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Sy(i,t){function e(){let Y=!1,yt=new Ae,ct=null,vt=new Ae(0,0,0,0);return{setMask:function(Et){ct!==Et&&!Y&&(i.colorMask(Et,Et,Et,Et),ct=Et)},setLocked:function(Et){Y=Et},setClear:function(Et,dt,Nt,Lt,xe){xe===!0&&(Et*=Lt,dt*=Lt,Nt*=Lt),yt.set(Et,dt,Nt,Lt),vt.equals(yt)===!1&&(i.clearColor(Et,dt,Nt,Lt),vt.copy(yt))},reset:function(){Y=!1,ct=null,vt.set(-1,0,0,0)}}}function n(){let Y=!1,yt=!1,ct=null,vt=null,Et=null;return{setReversed:function(dt){if(yt!==dt){let Nt=t.get("EXT_clip_control");dt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),yt=dt;let Lt=Et;Et=null,this.setClear(Lt)}},getReversed:function(){return yt},setTest:function(dt){dt?Q(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(dt){ct!==dt&&!Y&&(i.depthMask(dt),ct=dt)},setFunc:function(dt){if(yt&&(dt=zf[dt]),vt!==dt){switch(dt){case $o:i.depthFunc(i.NEVER);break;case Zo:i.depthFunc(i.ALWAYS);break;case Ko:i.depthFunc(i.LESS);break;case Lr:i.depthFunc(i.LEQUAL);break;case Jo:i.depthFunc(i.EQUAL);break;case Qo:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=dt}},setLocked:function(dt){Y=dt},setClear:function(dt){Et!==dt&&(Et=dt,yt&&(dt=1-dt),i.clearDepth(dt))},reset:function(){Y=!1,ct=null,vt=null,Et=null,yt=!1}}}function r(){let Y=!1,yt=null,ct=null,vt=null,Et=null,dt=null,Nt=null,Lt=null,xe=null;return{setTest:function(he){Y||(he?Q(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(he){yt!==he&&!Y&&(i.stencilMask(he),yt=he)},setFunc:function(he,Sn,Nn){(ct!==he||vt!==Sn||Et!==Nn)&&(i.stencilFunc(he,Sn,Nn),ct=he,vt=Sn,Et=Nn)},setOp:function(he,Sn,Nn){(dt!==he||Nt!==Sn||Lt!==Nn)&&(i.stencilOp(he,Sn,Nn),dt=he,Nt=Sn,Lt=Nn)},setLocked:function(he){Y=he},setClear:function(he){xe!==he&&(i.clearStencil(he),xe=he)},reset:function(){Y=!1,yt=null,ct=null,vt=null,Et=null,dt=null,Nt=null,Lt=null,xe=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},f={},h={},p=new WeakMap,g=[],x=null,_=!1,m=null,y=null,M=null,v=null,S=null,w=null,A=null,b=new at(0,0,0),T=0,C=!1,I=null,L=null,P=null,E=null,D=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,k=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=k>=2);let G=null,V={},it=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),ot=new Ae().fromArray(it),J=new Ae().fromArray(Z);function ht(Y,yt,ct,vt){let Et=new Uint8Array(4),dt=i.createTexture();i.bindTexture(Y,dt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<ct;Nt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(yt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return dt}let X={};X[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(Lr),jt(!1),Se(Fc),Q(i.CULL_FACE),Kt(Gn);function Q(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function ft(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function mt(Y,yt){return h[Y]!==yt?(i.bindFramebuffer(Y,yt),h[Y]=yt,Y===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=yt),Y===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function pt(Y,yt){let ct=g,vt=!1;if(Y){ct=p.get(yt),ct===void 0&&(ct=[],p.set(yt,ct));let Et=Y.textures;if(ct.length!==Et.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Nt=Et.length;dt<Nt;dt++)ct[dt]=i.COLOR_ATTACHMENT0+dt;ct.length=Et.length,vt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,vt=!0);vt&&i.drawBuffers(ct)}function At(Y){return x!==Y?(i.useProgram(Y),x=Y,!0):!1}let re={[tr]:i.FUNC_ADD,[of]:i.FUNC_SUBTRACT,[af]:i.FUNC_REVERSE_SUBTRACT};re[lf]=i.MIN,re[cf]=i.MAX;let Vt={[uf]:i.ZERO,[hf]:i.ONE,[ff]:i.SRC_COLOR,[Uc]:i.SRC_ALPHA,[xf]:i.SRC_ALPHA_SATURATE,[gf]:i.DST_COLOR,[pf]:i.DST_ALPHA,[df]:i.ONE_MINUS_SRC_COLOR,[Nc]:i.ONE_MINUS_SRC_ALPHA,[_f]:i.ONE_MINUS_DST_COLOR,[mf]:i.ONE_MINUS_DST_ALPHA,[bf]:i.CONSTANT_COLOR,[yf]:i.ONE_MINUS_CONSTANT_COLOR,[vf]:i.CONSTANT_ALPHA,[Mf]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(Y,yt,ct,vt,Et,dt,Nt,Lt,xe,he){if(Y===Gn){_===!0&&(ft(i.BLEND),_=!1);return}if(_===!1&&(Q(i.BLEND),_=!0),Y!==sf){if(Y!==m||he!==C){if((y!==tr||S!==tr)&&(i.blendEquation(i.FUNC_ADD),y=tr,S=tr),he)switch(Y){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.ONE,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:kt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dc:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fs:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",Y);break}M=null,v=null,w=null,A=null,b.set(0,0,0),T=0,m=Y,C=he}return}Et=Et||yt,dt=dt||ct,Nt=Nt||vt,(yt!==y||Et!==S)&&(i.blendEquationSeparate(re[yt],re[Et]),y=yt,S=Et),(ct!==M||vt!==v||dt!==w||Nt!==A)&&(i.blendFuncSeparate(Vt[ct],Vt[vt],Vt[dt],Vt[Nt]),M=ct,v=vt,w=dt,A=Nt),(Lt.equals(b)===!1||xe!==T)&&(i.blendColor(Lt.r,Lt.g,Lt.b,xe),b.copy(Lt),T=xe),m=Y,C=!1}function se(Y,yt){Y.side===Me?ft(i.CULL_FACE):Q(i.CULL_FACE);let ct=Y.side===rn;yt&&(ct=!ct),jt(ct),Y.blending===Pi&&Y.transparent===!1?Kt(Gn):Kt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),s.setMask(Y.colorWrite);let vt=Y.stencilWrite;a.setTest(vt),vt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),sn(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(Y){I!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),I=Y)}function Se(Y){Y!==ef?(Q(i.CULL_FACE),Y!==L&&(Y===Fc?i.cullFace(i.BACK):Y===nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),L=Y}function Be(Y){Y!==P&&(N&&i.lineWidth(Y),P=Y)}function sn(Y,yt,ct){Y?(Q(i.POLYGON_OFFSET_FILL),(E!==yt||D!==ct)&&(E=yt,D=ct,o.getReversed()&&(yt=-yt),i.polygonOffset(yt,ct))):ft(i.POLYGON_OFFSET_FILL)}function we(Y){Y?Q(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function Ie(Y){Y===void 0&&(Y=i.TEXTURE0+U-1),G!==Y&&(i.activeTexture(Y),G=Y)}function q(Y,yt,ct){ct===void 0&&(G===null?ct=i.TEXTURE0+U-1:ct=G);let vt=V[ct];vt===void 0&&(vt={type:void 0,texture:void 0},V[ct]=vt),(vt.type!==Y||vt.texture!==yt)&&(G!==ct&&(i.activeTexture(ct),G=ct),i.bindTexture(Y,yt||X[Y]),vt.type=Y,vt.texture=yt)}function Ye(){let Y=V[G];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function R(){try{i.texSubImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function K(){try{i.texSubImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function nt(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function st(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function gt(){try{i.texStorage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function _t(){try{i.texStorage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function lt(){try{i.texImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function ut(){try{i.texImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function xt(Y){return f[Y]!==void 0?f[Y]:i.getParameter(Y)}function Dt(Y,yt){f[Y]!==yt&&(i.pixelStorei(Y,yt),f[Y]=yt)}function Mt(Y){ot.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),ot.copy(Y))}function bt(Y){J.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),J.copy(Y))}function Ut(Y,yt){let ct=c.get(yt);ct===void 0&&(ct=new WeakMap,c.set(yt,ct));let vt=ct.get(Y);vt===void 0&&(vt=i.getUniformBlockIndex(yt,Y.name),ct.set(Y,vt))}function Bt(Y,yt){let vt=c.get(yt).get(Y);l.get(yt)!==vt&&(i.uniformBlockBinding(yt,vt,Y.__bindingPointIndex),l.set(yt,vt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},G=null,V={},h={},p=new WeakMap,g=[],x=null,_=!1,m=null,y=null,M=null,v=null,S=null,w=null,A=null,b=new at(0,0,0),T=0,C=!1,I=null,L=null,P=null,E=null,D=null,ot.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:ft,bindFramebuffer:mt,drawBuffers:pt,useProgram:At,setBlending:Kt,setMaterial:se,setFlipSided:jt,setCullFace:Se,setLineWidth:Be,setPolygonOffset:sn,setScissorTest:we,activeTexture:Ie,bindTexture:q,unbindTexture:Ye,compressedTexImage2D:pe,compressedTexImage3D:B,texImage2D:lt,texImage3D:ut,pixelStorei:Dt,getParameter:xt,updateUBOMapping:Ut,uniformBlockBinding:Bt,texStorage2D:gt,texStorage3D:_t,texSubImage2D:R,texSubImage3D:K,compressedTexSubImage2D:nt,compressedTexSubImage3D:st,scissor:Mt,viewport:bt,reset:qt}}function Ty(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Jt,u=new WeakMap,f=new Set,h,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(B,R){return g?new OffscreenCanvas(B,R):Fr("canvas")}function _(B,R,K){let nt=1,st=pe(B);if((st.width>K||st.height>K)&&(nt=K/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let gt=Math.floor(nt*st.width),_t=Math.floor(nt*st.height);h===void 0&&(h=x(gt,_t));let lt=R?x(gt,_t):h;return lt.width=gt,lt.height=_t,lt.getContext("2d").drawImage(B,0,0,gt,_t),zt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+gt+"x"+_t+")."),lt}else return"data"in B&&zt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),B;return B}function m(B){return B.generateMipmaps}function y(B){i.generateMipmap(B)}function M(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(B,R,K,nt,st,gt=!1){if(B!==null){if(i[B]!==void 0)return i[B];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let _t;nt&&(_t=t.get("EXT_texture_norm16"),_t||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=R;if(R===i.RED&&(K===i.FLOAT&&(lt=i.R32F),K===i.HALF_FLOAT&&(lt=i.R16F),K===i.UNSIGNED_BYTE&&(lt=i.R8),K===i.UNSIGNED_SHORT&&_t&&(lt=_t.R16_EXT),K===i.SHORT&&_t&&(lt=_t.R16_SNORM_EXT)),R===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.R8UI),K===i.UNSIGNED_SHORT&&(lt=i.R16UI),K===i.UNSIGNED_INT&&(lt=i.R32UI),K===i.BYTE&&(lt=i.R8I),K===i.SHORT&&(lt=i.R16I),K===i.INT&&(lt=i.R32I)),R===i.RG&&(K===i.FLOAT&&(lt=i.RG32F),K===i.HALF_FLOAT&&(lt=i.RG16F),K===i.UNSIGNED_BYTE&&(lt=i.RG8),K===i.UNSIGNED_SHORT&&_t&&(lt=_t.RG16_EXT),K===i.SHORT&&_t&&(lt=_t.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RG8UI),K===i.UNSIGNED_SHORT&&(lt=i.RG16UI),K===i.UNSIGNED_INT&&(lt=i.RG32UI),K===i.BYTE&&(lt=i.RG8I),K===i.SHORT&&(lt=i.RG16I),K===i.INT&&(lt=i.RG32I)),R===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),K===i.UNSIGNED_INT&&(lt=i.RGB32UI),K===i.BYTE&&(lt=i.RGB8I),K===i.SHORT&&(lt=i.RGB16I),K===i.INT&&(lt=i.RGB32I)),R===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),K===i.UNSIGNED_INT&&(lt=i.RGBA32UI),K===i.BYTE&&(lt=i.RGBA8I),K===i.SHORT&&(lt=i.RGBA16I),K===i.INT&&(lt=i.RGBA32I)),R===i.RGB&&(K===i.UNSIGNED_SHORT&&_t&&(lt=_t.RGB16_EXT),K===i.SHORT&&_t&&(lt=_t.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(lt=i.R11F_G11F_B10F)),R===i.RGBA){let ut=gt?ps:ee.getTransfer(st);K===i.FLOAT&&(lt=i.RGBA32F),K===i.HALF_FLOAT&&(lt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(lt=ut===de?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&_t&&(lt=_t.RGBA16_EXT),K===i.SHORT&&_t&&(lt=_t.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function S(B,R){let K;return B?R===null||R===In||R===Wr?K=i.DEPTH24_STENCIL8:R===Pn?K=i.DEPTH32F_STENCIL8:R===Hr&&(K=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===In||R===Wr?K=i.DEPTH_COMPONENT24:R===Pn?K=i.DEPTH_COMPONENT32F:R===Hr&&(K=i.DEPTH_COMPONENT16),K}function w(B,R){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==ke&&B.minFilter!==He?Math.log2(Math.max(R.width,R.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?R.mipmaps.length:1}function A(B){let R=B.target;R.removeEventListener("dispose",A),T(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&f.delete(R)}function b(B){let R=B.target;R.removeEventListener("dispose",b),I(R)}function T(B){let R=n.get(B);if(R.__webglInit===void 0)return;let K=B.source,nt=p.get(K);if(nt){let st=nt[R.__cacheKey];st.usedTimes--,st.usedTimes===0&&C(B),Object.keys(nt).length===0&&p.delete(K)}n.remove(B)}function C(B){let R=n.get(B);i.deleteTexture(R.__webglTexture);let K=B.source,nt=p.get(K);delete nt[R.__cacheKey],o.memory.textures--}function I(B){let R=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(R.__webglFramebuffer[nt]))for(let st=0;st<R.__webglFramebuffer[nt].length;st++)i.deleteFramebuffer(R.__webglFramebuffer[nt][st]);else i.deleteFramebuffer(R.__webglFramebuffer[nt]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[nt])}else{if(Array.isArray(R.__webglFramebuffer))for(let nt=0;nt<R.__webglFramebuffer.length;nt++)i.deleteFramebuffer(R.__webglFramebuffer[nt]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let nt=0;nt<R.__webglColorRenderbuffer.length;nt++)R.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[nt]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let K=B.textures;for(let nt=0,st=K.length;nt<st;nt++){let gt=n.get(K[nt]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(K[nt])}n.remove(B)}let L=0;function P(){L=0}function E(){return L}function D(B){L=B}function U(){let B=L;return B>=r.maxTextures&&zt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+r.maxTextures),L+=1,B}function N(B){let R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function k(B,R){let K=n.get(B);if(B.isVideoTexture&&q(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&K.__version!==B.version){let nt=B.image;if(nt===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(K,B,R);return}}else B.isExternalTexture&&(K.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+R)}function z(B,R){let K=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){ft(K,B,R);return}else B.isExternalTexture&&(K.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+R)}function G(B,R){let K=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){ft(K,B,R);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+R)}function V(B,R){let K=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&K.__version!==B.version){mt(K,B,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+R)}let it={[$i]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},Z={[ke]:i.NEAREST,[wf]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[Ia]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},ot={[Cf]:i.NEVER,[Df]:i.ALWAYS,[If]:i.LESS,[dl]:i.LEQUAL,[Pf]:i.EQUAL,[pl]:i.GEQUAL,[Lf]:i.GREATER,[Ff]:i.NOTEQUAL};function J(B,R){if(R.type===Pn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===He||R.magFilter===Ia||R.magFilter===Us||R.magFilter===Fi||R.minFilter===He||R.minFilter===Ia||R.minFilter===Us||R.minFilter===Fi)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,it[R.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,it[R.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,it[R.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,Z[R.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,Z[R.minFilter]),R.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,ot[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ke||R.minFilter!==Us&&R.minFilter!==Fi||R.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ht(B,R){let K=!1;B.__webglInit===void 0&&(B.__webglInit=!0,R.addEventListener("dispose",A));let nt=R.source,st=p.get(nt);st===void 0&&(st={},p.set(nt,st));let gt=N(R);if(gt!==B.__cacheKey){st[gt]===void 0&&(st[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),st[gt].usedTimes++;let _t=st[B.__cacheKey];_t!==void 0&&(st[B.__cacheKey].usedTimes--,_t.usedTimes===0&&C(R)),B.__cacheKey=gt,B.__webglTexture=st[gt].texture}return K}function X(B,R,K){return Math.floor(Math.floor(B/K)/R)}function Q(B,R,K,nt){let gt=B.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,K,nt,R.data);else{gt.sort((Dt,Mt)=>Dt.start-Mt.start);let _t=0;for(let Dt=1;Dt<gt.length;Dt++){let Mt=gt[_t],bt=gt[Dt],Ut=Mt.start+Mt.count,Bt=X(bt.start,R.width,4),qt=X(Mt.start,R.width,4);bt.start<=Ut+1&&Bt===qt&&X(bt.start+bt.count-1,R.width,4)===Bt?Mt.count=Math.max(Mt.count,bt.start+bt.count-Mt.start):(++_t,gt[_t]=bt)}gt.length=_t+1;let lt=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let Dt=0,Mt=gt.length;Dt<Mt;Dt++){let bt=gt[Dt],Ut=Math.floor(bt.start/4),Bt=Math.ceil(bt.count/4),qt=Ut%R.width,Y=Math.floor(Ut/R.width),yt=Bt,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(i.TEXTURE_2D,0,qt,Y,yt,ct,K,nt,R.data)}B.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function ft(B,R,K){let nt=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(nt=i.TEXTURE_3D);let st=ht(B,R),gt=R.source;e.bindTexture(nt,B.__webglTexture,i.TEXTURE0+K);let _t=n.get(gt);if(gt.version!==_t.__version||st===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let ct=ee.getPrimaries(ee.workingColorSpace),vt=R.colorSpace===oi?null:ee.getPrimaries(R.colorSpace),Et=R.colorSpace===oi||ct===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let ut=_(R.image,!1,r.maxTextureSize);ut=Ye(R,ut);let xt=s.convert(R.format,R.colorSpace),Dt=s.convert(R.type),Mt=v(R.internalFormat,xt,Dt,R.normalized,R.colorSpace,R.isVideoTexture);J(nt,R);let bt,Ut=R.mipmaps,Bt=R.isVideoTexture!==!0,qt=_t.__version===void 0||st===!0,Y=gt.dataReady,yt=w(R,ut);if(R.isDepthTexture)Mt=S(R.format===Di,R.type),qt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Mt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Mt,ut.width,ut.height,0,xt,Dt,null));else if(R.isDataTexture)if(Ut.length>0){Bt&&qt&&e.texStorage2D(i.TEXTURE_2D,yt,Mt,Ut[0].width,Ut[0].height);for(let ct=0,vt=Ut.length;ct<vt;ct++)bt=Ut[ct],Bt?Y&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,bt.width,bt.height,xt,Dt,bt.data):e.texImage2D(i.TEXTURE_2D,ct,Mt,bt.width,bt.height,0,xt,Dt,bt.data);R.generateMipmaps=!1}else Bt?(qt&&e.texStorage2D(i.TEXTURE_2D,yt,Mt,ut.width,ut.height),Y&&Q(R,ut,xt,Dt)):e.texImage2D(i.TEXTURE_2D,0,Mt,ut.width,ut.height,0,xt,Dt,ut.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Bt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Mt,Ut[0].width,Ut[0].height,ut.depth);for(let ct=0,vt=Ut.length;ct<vt;ct++)if(bt=Ut[ct],R.format!==vn)if(xt!==null)if(Bt){if(Y)if(R.layerUpdates.size>0){let Et=ou(bt.width,bt.height,R.format,R.type);for(let dt of R.layerUpdates){let Nt=bt.data.subarray(dt*Et/bt.data.BYTES_PER_ELEMENT,(dt+1)*Et/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,dt,bt.width,bt.height,1,xt,Nt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,bt.width,bt.height,ut.depth,xt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,Mt,bt.width,bt.height,ut.depth,0,bt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,bt.width,bt.height,ut.depth,xt,Dt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,Mt,bt.width,bt.height,ut.depth,0,xt,Dt,bt.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{Bt&&qt&&e.texStorage2D(i.TEXTURE_2D,yt,Mt,Ut[0].width,Ut[0].height);for(let ct=0,vt=Ut.length;ct<vt;ct++)bt=Ut[ct],R.format!==vn?xt!==null?Bt?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,bt.width,bt.height,xt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,Mt,bt.width,bt.height,0,bt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?Y&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,bt.width,bt.height,xt,Dt,bt.data):e.texImage2D(i.TEXTURE_2D,ct,Mt,bt.width,bt.height,0,xt,Dt,bt.data)}else if(R.isDataArrayTexture)if(Bt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Mt,ut.width,ut.height,ut.depth),Y)if(R.layerUpdates.size>0){let ct=ou(ut.width,ut.height,R.format,R.type);for(let vt of R.layerUpdates){let Et=ut.data.subarray(vt*ct/ut.data.BYTES_PER_ELEMENT,(vt+1)*ct/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,ut.width,ut.height,1,xt,Dt,Et)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,xt,Dt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,ut.width,ut.height,ut.depth,0,xt,Dt,ut.data);else if(R.isData3DTexture)Bt?(qt&&e.texStorage3D(i.TEXTURE_3D,yt,Mt,ut.width,ut.height,ut.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,xt,Dt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,ut.width,ut.height,ut.depth,0,xt,Dt,ut.data);else if(R.isFramebufferTexture){if(qt)if(Bt)e.texStorage2D(i.TEXTURE_2D,yt,Mt,ut.width,ut.height);else{let ct=ut.width,vt=ut.height;for(let Et=0;Et<yt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Mt,ct,vt,0,xt,Dt,null),ct>>=1,vt>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),ut.parentNode!==ct){ct.appendChild(ut),f.add(R),ct.onpaint=vt=>{let Et=vt.changedElements;for(let dt of f)Et.includes(dt.image)&&(dt.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let Et=i.RGBA,dt=i.RGBA,Nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,dt,Nt,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Bt&&qt){let ct=pe(Ut[0]);e.texStorage2D(i.TEXTURE_2D,yt,Mt,ct.width,ct.height)}for(let ct=0,vt=Ut.length;ct<vt;ct++)bt=Ut[ct],Bt?Y&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,xt,Dt,bt):e.texImage2D(i.TEXTURE_2D,ct,Mt,xt,Dt,bt);R.generateMipmaps=!1}else if(Bt){if(qt){let ct=pe(ut);e.texStorage2D(i.TEXTURE_2D,yt,Mt,ct.width,ct.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Dt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Mt,xt,Dt,ut);m(R)&&y(nt),_t.__version=gt.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function mt(B,R,K){if(R.image.length!==6)return;let nt=ht(B,R),st=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+K);let gt=n.get(st);if(st.version!==gt.__version||nt===!0){e.activeTexture(i.TEXTURE0+K);let _t=ee.getPrimaries(ee.workingColorSpace),lt=R.colorSpace===oi?null:ee.getPrimaries(R.colorSpace),ut=R.colorSpace===oi||_t===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let xt=R.isCompressedTexture||R.image[0].isCompressedTexture,Dt=R.image[0]&&R.image[0].isDataTexture,Mt=[];for(let dt=0;dt<6;dt++)!xt&&!Dt?Mt[dt]=_(R.image[dt],!0,r.maxCubemapSize):Mt[dt]=Dt?R.image[dt].image:R.image[dt],Mt[dt]=Ye(R,Mt[dt]);let bt=Mt[0],Ut=s.convert(R.format,R.colorSpace),Bt=s.convert(R.type),qt=v(R.internalFormat,Ut,Bt,R.normalized,R.colorSpace),Y=R.isVideoTexture!==!0,yt=gt.__version===void 0||nt===!0,ct=st.dataReady,vt=w(R,bt);J(i.TEXTURE_CUBE_MAP,R);let Et;if(xt){Y&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,qt,bt.width,bt.height);for(let dt=0;dt<6;dt++){Et=Mt[dt].mipmaps;for(let Nt=0;Nt<Et.length;Nt++){let Lt=Et[Nt];R.format!==vn?Ut!==null?Y?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt,0,0,Lt.width,Lt.height,Ut,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt,qt,Lt.width,Lt.height,0,Lt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt,0,0,Lt.width,Lt.height,Ut,Bt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt,qt,Lt.width,Lt.height,0,Ut,Bt,Lt.data)}}}else{if(Et=R.mipmaps,Y&&yt){Et.length>0&&vt++;let dt=pe(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,qt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Dt){Y?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Mt[dt].width,Mt[dt].height,Ut,Bt,Mt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,qt,Mt[dt].width,Mt[dt].height,0,Ut,Bt,Mt[dt].data);for(let Nt=0;Nt<Et.length;Nt++){let xe=Et[Nt].image[dt].image;Y?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt+1,0,0,xe.width,xe.height,Ut,Bt,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt+1,qt,xe.width,xe.height,0,Ut,Bt,xe.data)}}else{Y?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Ut,Bt,Mt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,qt,Ut,Bt,Mt[dt]);for(let Nt=0;Nt<Et.length;Nt++){let Lt=Et[Nt];Y?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt+1,0,0,Ut,Bt,Lt.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Nt+1,qt,Ut,Bt,Lt.image[dt])}}}m(R)&&y(i.TEXTURE_CUBE_MAP),gt.__version=st.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function pt(B,R,K,nt,st,gt){let _t=s.convert(K.format,K.colorSpace),lt=s.convert(K.type),ut=v(K.internalFormat,_t,lt,K.normalized,K.colorSpace),xt=n.get(R),Dt=n.get(K);if(Dt.__renderTarget=R,!xt.__hasExternalTextures){let Mt=Math.max(1,R.width>>gt),bt=Math.max(1,R.height>>gt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,gt,ut,Mt,bt,R.depth,0,_t,lt,null):e.texImage2D(st,gt,ut,Mt,bt,0,_t,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),Ie(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,st,Dt.__webglTexture,0,we(R)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,st,Dt.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(B,R,K){if(i.bindRenderbuffer(i.RENDERBUFFER,B),R.depthBuffer){let nt=R.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,gt=S(R.stencilBuffer,st),_t=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(R),gt,R.width,R.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(R),gt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,gt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,B)}else{let nt=R.textures;for(let st=0;st<nt.length;st++){let gt=nt[st],_t=s.convert(gt.format,gt.colorSpace),lt=s.convert(gt.type),ut=v(gt.internalFormat,_t,lt,gt.normalized,gt.colorSpace);Ie(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(R),ut,R.width,R.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(R),ut,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ut,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function re(B,R,K){let nt=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(R.depthTexture);if(st.__renderTarget=R,(!st.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),nt){if(st.__webglInit===void 0&&(st.__webglInit=!0,R.depthTexture.addEventListener("dispose",A)),st.__webglTexture===void 0){st.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),J(i.TEXTURE_CUBE_MAP,R.depthTexture);let xt=s.convert(R.depthTexture.format),Dt=s.convert(R.depthTexture.type),Mt;R.depthTexture.format===zn?Mt=i.DEPTH_COMPONENT24:R.depthTexture.format===Di&&(Mt=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Mt,R.width,R.height,0,xt,Dt,null)}}else k(R.depthTexture,0);let gt=st.__webglTexture,_t=we(R),lt=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,ut=R.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===zn)Ie(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,lt,gt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,ut,lt,gt,0);else if(R.depthTexture.format===Di)Ie(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,lt,gt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,ut,lt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(B){let R=n.get(B),K=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){let nt=B.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),nt){let st=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,nt.removeEventListener("dispose",st)};nt.addEventListener("dispose",st),R.__depthDisposeCallback=st}R.__boundDepthTexture=nt}if(B.depthTexture&&!R.__autoAllocateDepthBuffer)if(K)for(let nt=0;nt<6;nt++)re(R.__webglFramebuffer[nt],B,nt);else{let nt=B.texture.mipmaps;nt&&nt.length>0?re(R.__webglFramebuffer[0],B,0):re(R.__webglFramebuffer,B,0)}else if(K){R.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[nt]),R.__webglDepthbuffer[nt]===void 0)R.__webglDepthbuffer[nt]=i.createRenderbuffer(),At(R.__webglDepthbuffer[nt],B,!1);else{let st=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=R.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,gt)}}else{let nt=B.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),At(R.__webglDepthbuffer,B,!1);else{let st=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(B,R,K){let nt=n.get(B);R!==void 0&&pt(nt.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Vt(B)}function se(B){let R=B.texture,K=n.get(B),nt=n.get(R);B.addEventListener("dispose",b);let st=B.textures,gt=B.isWebGLCubeRenderTarget===!0,_t=st.length>1;if(_t||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=R.version,o.memory.textures++),gt){K.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer[lt]=[];for(let ut=0;ut<R.mipmaps.length;ut++)K.__webglFramebuffer[lt][ut]=i.createFramebuffer()}else K.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer=[];for(let lt=0;lt<R.mipmaps.length;lt++)K.__webglFramebuffer[lt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(_t)for(let lt=0,ut=st.length;lt<ut;lt++){let xt=n.get(st[lt]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&Ie(B)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let lt=0;lt<st.length;lt++){let ut=st[lt];K.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[lt]);let xt=s.convert(ut.format,ut.colorSpace),Dt=s.convert(ut.type),Mt=v(ut.internalFormat,xt,Dt,ut.normalized,ut.colorSpace,B.isXRRenderTarget===!0),bt=we(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,Mt,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,K.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),At(K.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),J(i.TEXTURE_CUBE_MAP,R);for(let lt=0;lt<6;lt++)if(R.mipmaps&&R.mipmaps.length>0)for(let ut=0;ut<R.mipmaps.length;ut++)pt(K.__webglFramebuffer[lt][ut],B,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut);else pt(K.__webglFramebuffer[lt],B,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(R)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let lt=0,ut=st.length;lt<ut;lt++){let xt=st[lt],Dt=n.get(xt),Mt=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Mt=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Dt.__webglTexture),J(Mt,xt),pt(K.__webglFramebuffer,B,xt,i.COLOR_ATTACHMENT0+lt,Mt,0),m(xt)&&y(Mt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(lt=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,nt.__webglTexture),J(lt,R),R.mipmaps&&R.mipmaps.length>0)for(let ut=0;ut<R.mipmaps.length;ut++)pt(K.__webglFramebuffer[ut],B,R,i.COLOR_ATTACHMENT0,lt,ut);else pt(K.__webglFramebuffer,B,R,i.COLOR_ATTACHMENT0,lt,0);m(R)&&y(lt),e.unbindTexture()}B.depthBuffer&&Vt(B)}function jt(B){let R=B.textures;for(let K=0,nt=R.length;K<nt;K++){let st=R[K];if(m(st)){let gt=M(B),_t=n.get(st).__webglTexture;e.bindTexture(gt,_t),y(gt),e.unbindTexture()}}}let Se=[],Be=[];function sn(B){if(B.samples>0){if(Ie(B)===!1){let R=B.textures,K=B.width,nt=B.height,st=i.COLOR_BUFFER_BIT,gt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(B),lt=R.length>1;if(lt)for(let xt=0;xt<R.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let ut=B.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let xt=0;xt<R.length;xt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[xt]);let Dt=n.get(R[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,K,nt,0,0,K,nt,st,i.NEAREST),l===!0&&(Se.length=0,Be.length=0,Se.push(i.COLOR_ATTACHMENT0+xt),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Se.push(gt),Be.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let xt=0;xt<R.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[xt]);let Dt=n.get(R[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&l){let R=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function we(B){return Math.min(r.maxSamples,B.samples)}function Ie(B){let R=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function q(B){let R=o.render.frame;u.get(B)!==R&&(u.set(B,R),B.update())}function Ye(B,R){let K=B.colorSpace,nt=B.format,st=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||K!==ds&&K!==oi&&(ee.getTransfer(K)===de?(nt!==vn||st!==pn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",K)),R}function pe(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.getTextureUnits=E,this.setTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=V,this.rebindTextures=Kt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function wy(i,t){function e(n,r=oi){let s,o=ee.getTransfer(r);if(n===pn)return i.UNSIGNED_BYTE;if(n===La)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yc)return i.BYTE;if(n===qc)return i.SHORT;if(n===Hr)return i.UNSIGNED_SHORT;if(n===Pa)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Kc)return i.ALPHA;if(n===Jc)return i.RGB;if(n===vn)return i.RGBA;if(n===zn)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Qc)return i.RED;if(n===Da)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===Ua)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===Ns||n===Os||n===Bs||n===zs)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ba||n===za||n===ka)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ga||n===Ha||n===Wa||n===Xa||n===ks||n===Ya)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Va||n===Ga)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ha)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wa)return s.COMPRESSED_R11_EAC;if(n===Xa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ks)return s.COMPRESSED_RG11_EAC;if(n===Ya)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qa||n===$a||n===Za||n===Ka||n===Ja||n===Qa||n===ja||n===tl||n===el||n===nl||n===il||n===rl||n===sl||n===ol)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===el)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===il)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ol)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===al||n===ll||n===cl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===al)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===hl||n===Vs||n===fl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ul)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ay=`
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

}`,wu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new vs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fn({vertexShader:Ey,fragmentShader:Ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eu=class extends kn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null,x=typeof XRWebGLBinding<"u",_=new wu,m={},y=e.getContextAttributes(),M=null,v=null,S=[],w=[],A=new Jt,b=null,T=null,C=new Ke;C.viewport=new Ae;let I=new Ke;I.viewport=new Ae;let L=[C,I],P=new Ea,E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=S[X];return Q===void 0&&(Q=new Or,S[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=S[X];return Q===void 0&&(Q=new Or,S[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=S[X];return Q===void 0&&(Q=new Or,S[X]=Q),Q.getHandSpace()};function U(X){let Q=w.indexOf(X.inputSource);if(Q===-1)return;let ft=S[Q];ft!==void 0&&(ft.update(X.inputSource,X.frame,c||o),ft.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",k);for(let X=0;X<S.length;X++){let Q=w[X];Q!==null&&(w[X]=null,S[X].disconnect(Q))}E=null,D=null,_.reset();for(let X in m)delete m[X];if(t.setRenderTarget(M),p=null,h=null,f=null,r=null,v=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),T!==null){let X=T.camera;X.fov=T.fov,X.zoom=T.zoom,X.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(M=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",N),r.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,mt=null,pt=null;y.depth&&(pt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=y.stencil?Di:zn,mt=y.stencil?Wr:In);let At={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(At),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new je(h.textureWidth,h.textureHeight,{format:vn,type:pn,depthTexture:new wi(h.textureWidth,h.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ft={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,ft),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new je(p.framebufferWidth,p.framebufferHeight,{format:vn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(X){for(let Q=0;Q<X.removed.length;Q++){let ft=X.removed[Q],mt=w.indexOf(ft);mt>=0&&(w[mt]=null,S[mt].disconnect(ft))}for(let Q=0;Q<X.added.length;Q++){let ft=X.added[Q],mt=w.indexOf(ft);if(mt===-1){for(let At=0;At<S.length;At++)if(At>=w.length){w.push(ft),mt=At;break}else if(w[At]===null){w[At]=ft,mt=At;break}if(mt===-1)break}let pt=S[mt];pt&&pt.connect(ft)}}let z=new H,G=new H;function V(X,Q,ft){z.setFromMatrixPosition(Q.matrixWorld),G.setFromMatrixPosition(ft.matrixWorld);let mt=z.distanceTo(G),pt=Q.projectionMatrix.elements,At=ft.projectionMatrix.elements,re=pt[14]/(pt[10]-1),Vt=pt[14]/(pt[10]+1),Kt=(pt[9]+1)/pt[5],se=(pt[9]-1)/pt[5],jt=(pt[8]-1)/pt[0],Se=(At[8]+1)/At[0],Be=re*jt,sn=re*Se,we=mt/(-jt+Se),Ie=we*-jt;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ie),X.translateZ(we),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),pt[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let q=re+we,Ye=Vt+we,pe=Be-Ie,B=sn+(mt-Ie),R=Kt*Vt/Ye*q,K=se*Vt/Ye*q;X.projectionMatrix.makePerspective(pe,B,R,K,q,Ye),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function it(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Q=X.near,ft=X.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(ft=_.depthFar)),P.near=I.near=C.near=Q,P.far=I.far=C.far=ft,(E!==P.near||D!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),E=P.near,D=P.far),P.layers.mask=X.layers.mask|6,C.layers.mask=P.layers.mask&-5,I.layers.mask=P.layers.mask&-3;let mt=X.parent,pt=P.cameras;it(P,mt);for(let At=0;At<pt.length;At++)it(pt[At],mt);pt.length===2?V(P,C,I):P.projectionMatrix.copy(C.projectionMatrix),T===null&&X.isPerspectiveCamera&&(T={camera:X,fov:X.fov,zoom:X.zoom}),Z(X,P,mt)};function Z(X,Q,ft){ft===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(ft.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ia*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(X){return m[X]};let ot=null;function J(X,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){let ft=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let mt=!1;ft.length!==P.cameras.length&&(P.cameras.length=0,mt=!0);for(let Vt=0;Vt<ft.length;Vt++){let Kt=ft[Vt],se=null;if(p!==null)se=p.getViewport(Kt);else{let Se=f.getViewSubImage(h,Kt);se=Se.viewport,Vt===0&&(t.setRenderTargetTextures(v,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(v))}let jt=L[Vt];jt===void 0&&(jt=new Ke,jt.layers.enable(Vt),jt.viewport=new Ae,L[Vt]=jt),jt.matrix.fromArray(Kt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Kt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(se.x,se.y,se.width,se.height),Vt===0&&(P.matrix.copy(jt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),mt===!0&&P.cameras.push(jt)}let pt=r.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Vt=f.getDepthInformation(ft[0]);Vt&&Vt.isValid&&Vt.texture&&_.init(Vt,r.renderState)}if(pt&&pt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let Vt=0;Vt<ft.length;Vt++){let Kt=ft[Vt].camera;if(Kt){let se=m[Kt];se||(se=new vs,m[Kt]=se);let jt=f.getCameraImage(Kt);se.sourceTexture=jt}}}}for(let ft=0;ft<S.length;ft++){let mt=w[ft],pt=S[ft];mt!==null&&pt!==void 0&&pt.update(mt,Q,c||o)}ot&&ot(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ht=new md;ht.setAnimationLoop(J),this.setAnimationLoop=function(X){ot=X},this.dispose=function(){}}},Ry=new Te,vd=new Wt;vd.set(-1,0,0,0,1,0,0,0,1);function Cy(i,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,iu(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,y,M,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(_,m):m.isMeshLambertMaterial?(s(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(_,m),f(_,m)):m.isMeshPhongMaterial?(s(_,m),u(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(_,m),h(_,m),m.isMeshPhysicalMaterial&&p(_,m,v)):m.isMeshMatcapMaterial?(s(_,m),g(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),x(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,y,M):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===rn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===rn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let y=t.get(m),M=y.envMap,v=y.envMapRotation;M&&(_.envMap.value=M,_.envMapRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(vd),_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,y,M){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*y,_.scale.value=M*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function h(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,y){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.retroreflectivity>0&&(_.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function x(_,m){let y=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Iy(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let w=S.program;n.uniformBlockBinding(v,w)}function c(v,S){let w=r[v.id];w===void 0&&(_(v),w=u(v),r[v.id]=w,v.addEventListener("dispose",y));let A=S.program;n.updateUBOMapping(v,A);let b=t.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function u(v){let S=f();v.__bindingPointIndex=S;let w=i.createBuffer(),A=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let S=r[v.id],w=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,T=w.length;b<T;b++){let C=w[b];if(Array.isArray(C))for(let I=0,L=C.length;I<L;I++)p(C[I],b,I,A);else p(C,b,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,S,w,A){if(x(v,S,w,A)===!0){let b=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){let L=T[I],P=m(L);g(L,v.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function g(v,S,w){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,w)}function x(v,S,w,A){let b=v.value,T=S+"_"+w;if(A[T]===void 0)return typeof b=="number"||typeof b=="boolean"?A[T]=b:ArrayBuffer.isView(b)?A[T]=b.slice():A[T]=b.clone(),!0;{let C=A[T];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return A[T]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(C.equals(b)===!1)return C.copy(b),!0}}return!1}function _(v){let S=v.uniforms,w=0,A=16;for(let T=0,C=S.length;T<C;T++){let I=Array.isArray(S[T])?S[T]:[S[T]];for(let L=0,P=I.length;L<P;L++){let E=I[L],D=Array.isArray(E.value)?E.value:[E.value];for(let U=0,N=D.length;U<N;U++){let k=D[U],z=m(k),G=w%A,V=G%z.boundary,it=G+V;w+=V,it!==0&&A-it<z.storage&&(w+=A-it),E.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=w,w+=z.storage}}}let b=w%A;return b>0&&(w+=A-b),v.__size=w,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",v),S}function y(v){let S=v.target;S.removeEventListener("dispose",y);let w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function M(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:M}}var Py=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function Ly(){return Hn===null&&(Hn=new aa(Py,16,16,Ui,Ln),Hn.name="DFG_LUT",Hn.minFilter=He,Hn.magFilter=He,Hn.wrapS=hn,Hn.wrapT=hn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var $r=class{constructor(t={}){let{canvas:e=Nf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=pn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=p,_=new Set([Na,Ua,Da]),m=new Set([pn,In,Hr,Wr,La,Fa]),y=new Uint32Array(4),M=new Int32Array(4),v=new H,S=null,w=null,A=[],b=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,L=null,P=null,E=null,D=null;this._outputColorSpace=Ce;let U=0,N=0,k=null,z=-1,G=null,V=new Ae,it=new Ae,Z=null,ot=new at(0),J=0,ht=e.width,X=e.height,Q=1,ft=null,mt=null,pt=new Ae(0,0,ht,X),At=new Ae(0,0,ht,X),re=!1,Vt=new bs,Kt=!1,se=!1,jt=new Te,Se=new H,Be=new Ae,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Ie(){return k===null?Q:1}let q=n;function Ye(F,W){return e.getContext(F,W)}let pe,B,R,K,nt,st,gt,_t,lt,ut,xt,Dt,Mt,bt,Ut,Bt,qt,Y,yt,ct,vt,Et,dt;try{let F={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Sn,!1),q===null){let W="webgl2";if(q=Ye(W,F),q===null)throw Ye(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(F){throw e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),kt("WebGLRenderer: "+F.message),F}function Nt(){pe=new zx(q),pe.init(),vt=new wy(q,pe),B=new Cx(q,pe,t,vt),R=new Sy(q,pe),B.reversedDepthBuffer&&h&&R.buffers.depth.setReversed(!0),P=q.createFramebuffer(),E=q.createFramebuffer(),D=q.createFramebuffer(),K=new Gx(q),nt=new cy,st=new Ty(q,pe,R,nt,B,vt,K),gt=new Bx(C),_t=new Wm(q),Et=new Ax(q,_t),lt=new kx(q,_t,K,Et),ut=new Wx(q,lt,_t,Et,K),Y=new Hx(q,B,st),Ut=new Ix(nt),xt=new ly(C,gt,pe,B,Et,Ut),Dt=new Cy(C,nt),Mt=new hy,bt=new _y(pe),qt=new Ex(C,gt,R,ut,g,l),Bt=new My(C,ut,B),dt=new Iy(q,K,B,R),yt=new Rx(q,pe,K),ct=new Vx(q,pe,K),K.programs=xt.programs,C.capabilities=B,C.extensions=pe,C.properties=nt,C.renderLists=Mt,C.shadowMap=Bt,C.state=R,C.info=K}x!==pn&&(T=new Yx(x,e.width,e.height,a,r,s));let Lt=new Eu(C,q);this.xr=Lt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let F=pe.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=pe.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(F){F!==void 0&&(Q=F,this.setSize(ht,X,!1))},this.getSize=function(F){return F.set(ht,X)},this.setSize=function(F,W,rt=!0){if(Lt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}ht=F,X=W,e.width=Math.floor(F*Q),e.height=Math.floor(W*Q),rt===!0&&(e.style.width=F+"px",e.style.height=W+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,F,W)},this.getDrawingBufferSize=function(F){return F.set(ht*Q,X*Q).floor()},this.setDrawingBufferSize=function(F,W,rt){ht=F,X=W,Q=rt,e.width=Math.floor(F*rt),e.height=Math.floor(W*rt),this.setViewport(0,0,F,W)},this.setEffects=function(F){if(x===pn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let W=0;W<F.length;W++)if(F[W].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(V)},this.getViewport=function(F){return F.copy(pt)},this.setViewport=function(F,W,rt,j){F.isVector4?pt.set(F.x,F.y,F.z,F.w):pt.set(F,W,rt,j),R.viewport(V.copy(pt).multiplyScalar(Q).round())},this.getScissor=function(F){return F.copy(At)},this.setScissor=function(F,W,rt,j){F.isVector4?At.set(F.x,F.y,F.z,F.w):At.set(F,W,rt,j),R.scissor(it.copy(At).multiplyScalar(Q).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(F){R.setScissorTest(re=F)},this.setOpaqueSort=function(F){ft=F},this.setTransparentSort=function(F){mt=F},this.getClearColor=function(F){return F.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(F=!0,W=!0,rt=!0){let j=0;if(F){let tt=!1;if(k!==null){let wt=k.texture.format;tt=_.has(wt)}if(tt){let wt=k.texture.type,Ct=m.has(wt),Tt=qt.getClearColor(),It=qt.getClearAlpha(),Ft=Tt.r,$t=Tt.g,te=Tt.b;Ct?(y[0]=Ft,y[1]=$t,y[2]=te,y[3]=It,q.clearBufferuiv(q.COLOR,0,y)):(M[0]=Ft,M[1]=$t,M[2]=te,M[3]=It,q.clearBufferiv(q.COLOR,0,M))}else j|=q.COLOR_BUFFER_BIT}W&&(j|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(j|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&q.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),L=F},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),qt.dispose(),Mt.dispose(),bt.dispose(),nt.dispose(),gt.dispose(),ut.dispose(),Et.dispose(),dt.dispose(),xt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",mh),Lt.removeEventListener("sessionend",gh),Gi.stop()};function xe(F){F.preventDefault(),nu("WebGLRenderer: Context Lost."),I=!0}function he(){nu("WebGLRenderer: Context Restored."),I=!1;let F=K.autoReset,W=Bt.enabled,rt=Bt.autoUpdate,j=Bt.needsUpdate,tt=Bt.type;Nt(),K.autoReset=F,Bt.enabled=W,Bt.autoUpdate=rt,Bt.needsUpdate=j,Bt.type=tt}function Sn(F){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Nn(F){let W=F.target;W.removeEventListener("dispose",Nn),Bp(W)}function Bp(F){zp(F),nt.remove(F)}function zp(F){let W=nt.get(F).programs;W!==void 0&&(W.forEach(function(rt){xt.releaseProgram(rt)}),F.isShaderMaterial&&xt.releaseShaderCache(F))}this.renderBufferDirect=function(F,W,rt,j,tt,wt){W===null&&(W=sn);let Ct=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,Tt=Gp(F,W,rt,j,tt);R.setMaterial(j,Ct);let It=rt.index,Ft=1;if(j.wireframe===!0){if(It=lt.getWireframeAttribute(rt),It===void 0)return;Ft=2}let $t=rt.drawRange,te=rt.attributes.position,Pt=$t.start*Ft,fe=($t.start+$t.count)*Ft;wt!==null&&(Pt=Math.max(Pt,wt.start*Ft),fe=Math.min(fe,(wt.start+wt.count)*Ft)),It!==null?(Pt=Math.max(Pt,0),fe=Math.min(fe,It.count)):te!=null&&(Pt=Math.max(Pt,0),fe=Math.min(fe,te.count));let Pe=fe-Pt;if(Pe<0||Pe===1/0)return;Et.setup(tt,j,Tt,rt,It);let ye,_e=yt;if(It!==null&&(ye=_t.get(It),_e=ct,_e.setIndex(ye)),tt.isMesh)j.wireframe===!0?(R.setLineWidth(j.wireframeLinewidth*Ie()),_e.setMode(q.LINES)):_e.setMode(q.TRIANGLES);else if(tt.isLine){let qe=j.linewidth;qe===void 0&&(qe=1),R.setLineWidth(qe*Ie()),tt.isLineSegments?_e.setMode(q.LINES):tt.isLineLoop?_e.setMode(q.LINE_LOOP):_e.setMode(q.LINE_STRIP)}else tt.isPoints?_e.setMode(q.POINTS):tt.isSprite&&_e.setMode(q.TRIANGLES);if(tt.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))_e.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let qe=tt._multiDrawStarts,Rt=tt._multiDrawCounts,nn=tt._multiDrawCount,oe=It?_t.get(It).bytesPerElement:1,gn=nt.get(j).currentProgram.getUniforms();for(let On=0;On<nn;On++)gn.setValue(q,"_gl_DrawID",On),_e.render(qe[On]/oe,Rt[On])}else if(tt.isInstancedMesh)_e.renderInstances(Pt,Pe,tt.count);else if(rt.isInstancedBufferGeometry){let qe=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Rt=Math.min(rt.instanceCount,qe);_e.renderInstances(Pt,Pe,Rt)}else _e.render(Pt,Pe)};function ph(F,W,rt,j){L!==null&&F.isNodeMaterial&&L.setObject(j,F),Kt===!0&&Ut.setState(F,rt,!1),F.transparent===!0&&F.side===Me&&F.forceSinglePass===!1?(F.side=rn,F.needsUpdate=!0,bo(F,W,j),F.side=Ii,F.needsUpdate=!0,bo(F,W,j),F.side=Me):bo(F,W,j)}this.compile=function(F,W,rt=null){rt===null&&(rt=F),L!==null&&L.renderStart(F,W,rt),w=bt.get(rt),w.init(W),b.push(w),rt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(w.pushLight(tt),tt.castShadow&&w.pushShadow(tt))}),F!==rt&&F.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(w.pushLight(tt),tt.castShadow&&w.pushShadow(tt))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),se=this.localClippingEnabled,Kt=Ut.init(this.clippingPlanes,se),Kt===!0&&Ut.setGlobalState(this.clippingPlanes,W),L!==null&&Bt.render(w.state.shadowsArray,rt,W);let j=new Set;return F.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let wt=tt.material;if(wt)if(Array.isArray(wt))for(let Ct=0;Ct<wt.length;Ct++){let Tt=wt[Ct];ph(Tt,rt,W,tt),j.add(Tt)}else ph(wt,rt,W,tt),j.add(wt)}),w=b.pop(),L!==null&&L.renderEnd(),j},this.compileAsync=function(F,W,rt=null){let j=this.compile(F,W,rt);return new Promise(tt=>{function wt(){if(j.forEach(function(Ct){let It=nt.get(Ct).currentProgram;(It===void 0||It.isReady())&&j.delete(Ct)}),j.size===0){tt(F);return}setTimeout(wt,10)}pe.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Jl=null;function kp(F){Jl&&Jl(F)}function mh(){Gi.stop()}function gh(){Gi.start()}let Gi=new md;Gi.setAnimationLoop(kp),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(F){Jl=F,Lt.setAnimationLoop(F),F===null?Gi.stop():Gi.start()},Lt.addEventListener("sessionstart",mh),Lt.addEventListener("sessionend",gh),this.render=function(F,W){if(W!==void 0&&W.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(F,W);let rt=Lt.enabled===!0&&Lt.isPresenting===!0,j=T!==null&&(k===null||rt)&&T.begin(C,k);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(W),W=Lt.getCamera()),F.isScene===!0&&F.onBeforeRender(C,F,W,k),w=bt.get(F,b.length),w.init(W),w.state.textureUnits=st.getTextureUnits(),b.push(w),jt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Vt.setFromProjectionMatrix(jt,Rn,W.reversedDepth),se=this.localClippingEnabled,Kt=Ut.init(this.clippingPlanes,se),S=Mt.get(F,A.length),S.init(),A.push(S),Lt.enabled===!0&&Lt.isPresenting===!0){let Ct=C.xr.getDepthSensingMesh();Ct!==null&&Ql(Ct,W,-1/0,C.sortObjects)}Ql(F,W,0,C.sortObjects),S.finish(),L!==null&&L.updateLights(w.state.lightsArray),C.sortObjects===!0&&S.sort(ft,mt),we=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,we&&qt.addToRenderList(S,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&Ut.beginShadows();let tt=w.state.shadowsArray;if(Bt.render(tt,F,W),Kt===!0&&Ut.endShadows(),(j&&T.hasRenderPass())===!1){let Ct=S.opaque,Tt=S.transmissive;if(w.setupLights(),W.isArrayCamera){let It=W.cameras;if(Tt.length>0)for(let Ft=0,$t=It.length;Ft<$t;Ft++){let te=It[Ft];xh(Ct,Tt,F,te)}we&&qt.render(F);for(let Ft=0,$t=It.length;Ft<$t;Ft++){let te=It[Ft];_h(S,F,te,te.viewport)}}else Tt.length>0&&xh(Ct,Tt,F,W),we&&qt.render(F),_h(S,F,W)}k!==null&&N===0&&(st.updateMultisampleRenderTarget(k),st.updateRenderTargetMipmap(k)),j&&T.end(C),F.isScene===!0&&F.onAfterRender(C,F,W),Et.resetDefaultState(),z=-1,G=null,b.pop(),b.length>0?(w=b[b.length-1],st.setTextureUnits(w.state.textureUnits),Kt===!0&&Ut.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,L!==null&&L.renderEnd()};function Ql(F,W,rt,j){if(F.visible===!1)return;if(F.layers.test(W.layers)){if(F.isGroup)rt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(W);else if(F.isLightProbeGrid)w.pushLightProbeGrid(F);else if(F.isLight)w.pushLight(F),F.castShadow&&w.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(Vt)){j&&Be.setFromMatrixPosition(F.matrixWorld).applyMatrix4(jt);let Ct=ut.update(F),Tt=F.material;Tt.visible&&S.push(F,Ct,Tt,rt,Be.z,null,W)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(Vt))){let Ct=ut.update(F),Tt=F.material;if(j&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Be.copy(F.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Be.copy(Ct.boundingSphere.center)),Be.applyMatrix4(F.matrixWorld).applyMatrix4(jt)),Array.isArray(Tt)){let It=Ct.groups;for(let Ft=0,$t=It.length;Ft<$t;Ft++){let te=It[Ft],Pt=Tt[te.materialIndex];Pt&&Pt.visible&&S.push(F,Ct,Pt,rt,Be.z,te,W)}}else Tt.visible&&S.push(F,Ct,Tt,rt,Be.z,null,W)}}let wt=F.children;for(let Ct=0,Tt=wt.length;Ct<Tt;Ct++)Ql(wt[Ct],W,rt,j)}function _h(F,W,rt,j){let{opaque:tt,transmissive:wt,transparent:Ct}=F;w.setupLightsView(rt),Kt===!0&&Ut.setGlobalState(C.clippingPlanes,rt),j&&R.viewport(V.copy(j)),tt.length>0&&xo(tt,W,rt),wt.length>0&&xo(wt,W,rt),Ct.length>0&&xo(Ct,W,rt),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function xh(F,W,rt,j){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[j.id]===void 0){let Pt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[j.id]=new je(1,1,{generateMipmaps:!0,type:Pt?Ln:pn,minFilter:Fi,samples:Math.max(4,B.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let wt=w.state.transmissionRenderTarget[j.id],Ct=j.viewport||V;wt.setSize(Ct.z*C.transmissionResolutionScale,Ct.w*C.transmissionResolutionScale);let Tt=C.getRenderTarget(),It=C.getActiveCubeFace(),Ft=C.getActiveMipmapLevel();C.setRenderTarget(wt),C.getClearColor(ot),J=C.getClearAlpha(),J<1&&C.setClearColor(16777215,.5),C.clear(),we&&qt.render(rt);let $t=C.toneMapping;C.toneMapping=Cn;let te=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),w.setupLightsView(j),Kt===!0&&Ut.setGlobalState(C.clippingPlanes,j),xo(F,rt,j),st.updateMultisampleRenderTarget(wt),st.updateRenderTargetMipmap(wt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let fe=0,Pe=W.length;fe<Pe;fe++){let ye=W[fe],{object:_e,geometry:qe,material:Rt,group:nn}=ye;if(Rt.side===Me&&_e.layers.test(j.layers)){let oe=Rt.side;Rt.side=rn,Rt.needsUpdate=!0,bh(_e,rt,j,qe,Rt,nn),Rt.side=oe,Rt.needsUpdate=!0,Pt=!0}}Pt===!0&&(st.updateMultisampleRenderTarget(wt),st.updateRenderTargetMipmap(wt))}C.setRenderTarget(Tt,It,Ft),C.setClearColor(ot,J),te!==void 0&&(j.viewport=te),C.toneMapping=$t}function xo(F,W,rt){let j=W.isScene===!0?W.overrideMaterial:null;for(let tt=0,wt=F.length;tt<wt;tt++){let Ct=F[tt],{object:Tt,geometry:It,group:Ft}=Ct,$t=Ct.material;$t.allowOverride===!0&&j!==null&&($t=j),Tt.layers.test(rt.layers)&&bh(Tt,W,rt,It,$t,Ft)}}function bh(F,W,rt,j,tt,wt){L!==null&&tt.isNodeMaterial&&L.setObject(F,tt),F.onBeforeRender(C,W,rt,j,tt,wt),F.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),tt.onBeforeRender(C,W,rt,j,F,wt),tt.transparent===!0&&tt.side===Me&&tt.forceSinglePass===!1?(tt.side=rn,tt.needsUpdate=!0,C.renderBufferDirect(rt,W,j,tt,F,wt),tt.side=Ii,tt.needsUpdate=!0,C.renderBufferDirect(rt,W,j,tt,F,wt),tt.side=Me):C.renderBufferDirect(rt,W,j,tt,F,wt),F.onAfterRender(C,W,rt,j,tt,wt)}function bo(F,W,rt){W.isScene!==!0&&(W=sn);let j=nt.get(F),tt=w.state.lights,wt=w.state.shadowsArray,Ct=tt.state.version,Tt=xt.getParameters(F,tt.state,wt,W,rt,w.state.lightProbeGridArray),It=xt.getProgramCacheKey(Tt),Ft=j.programs;j.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?W.environment:null,j.fog=W.fog;let $t=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;j.envMap=gt.get(F.envMap||j.environment,$t),j.envMapRotation=j.environment!==null&&F.envMap===null?W.environmentRotation:F.envMapRotation,Ft===void 0&&(F.addEventListener("dispose",Nn),Ft=new Map,j.programs=Ft);let te=Ft.get(It);if(te!==void 0){if(j.currentProgram===te&&j.lightsStateVersion===Ct)return vh(F,Tt),te}else Tt.uniforms=xt.getUniforms(F),L!==null&&F.isNodeMaterial&&L.build(F,rt,Tt),F.onBeforeCompile(Tt,C),te=xt.acquireProgram(Tt,It),Ft.set(It,te),j.uniforms=Tt.uniforms;let Pt=j.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Pt.clippingPlanes=Ut.uniform),vh(F,Tt),j.needsLights=Wp(F),j.lightsStateVersion=Ct,j.needsLights&&(Pt.ambientLightColor.value=tt.state.ambient,Pt.lightProbe.value=tt.state.probe,Pt.sunLights.value=tt.state.sun,Pt.sunLightShadows.value=tt.state.sunShadow,Pt.directionalLights.value=tt.state.directional,Pt.directionalLightShadows.value=tt.state.directionalShadow,Pt.spotLights.value=tt.state.spot,Pt.spotLightShadows.value=tt.state.spotShadow,Pt.rectAreaLights.value=tt.state.rectArea,Pt.ltc_1.value=tt.state.rectAreaLTC1,Pt.ltc_2.value=tt.state.rectAreaLTC2,Pt.pointLights.value=tt.state.point,Pt.pointLightShadows.value=tt.state.pointShadow,Pt.hemisphereLights.value=tt.state.hemi,Pt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Pt.sunShadowCascade.value=tt.state.sunShadowCascade,Pt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Pt.spotLightMatrix.value=tt.state.spotLightMatrix,Pt.spotLightMap.value=tt.state.spotLightMap,Pt.pointShadowMatrix.value=tt.state.pointShadowMatrix),j.lightProbeGrid=w.state.lightProbeGridArray.length>0,j.currentProgram=te,j.uniformsList=null,te}function yh(F){if(F.uniformsList===null){let W=F.currentProgram.getUniforms();F.uniformsList=qr.seqWithValue(W.seq,F.uniforms)}return F.uniformsList}function vh(F,W){let rt=nt.get(F);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function Vp(F,W){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;v.setFromMatrixPosition(W.matrixWorld);for(let rt=0,j=F.length;rt<j;rt++){let tt=F[rt];if(tt.texture!==null&&tt.boundingBox.containsPoint(v))return tt}return null}function Gp(F,W,rt,j,tt){W.isScene!==!0&&(W=sn),st.resetTextureUnits();let wt=W.fog,Ct=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?W.environment:null,Tt=k===null?C.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ee.workingColorSpace,It=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ft=gt.get(j.envMap||Ct,It),$t=j.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,te=!!rt.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Pt=!!rt.morphAttributes.position,fe=!!rt.morphAttributes.normal,Pe=!!rt.morphAttributes.color,ye=Cn;j.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ye=C.toneMapping);let _e=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,qe=_e!==void 0?_e.length:0,Rt=nt.get(j),nn=w.state.lights;if(Kt===!0&&(se===!0||F!==G)){let be=F===G&&j.id===z;Ut.setState(j,F,be)}let oe=!1;j.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==nn.state.version||Rt.outputColorSpace!==Tt||tt.isBatchedMesh&&Rt.batching===!1||!tt.isBatchedMesh&&Rt.batching===!0||tt.isBatchedMesh&&Rt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&Rt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&Rt.instancing===!1||!tt.isInstancedMesh&&Rt.instancing===!0||tt.isSkinnedMesh&&Rt.skinning===!1||!tt.isSkinnedMesh&&Rt.skinning===!0||tt.isInstancedMesh&&Rt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Rt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Rt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Rt.instancingMorph===!1&&tt.morphTexture!==null||Rt.envMap!==Ft||j.fog===!0&&Rt.fog!==wt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ut.numPlanes||Rt.numIntersection!==Ut.numIntersection)||Rt.vertexAlphas!==$t||Rt.vertexTangents!==te||Rt.morphTargets!==Pt||Rt.morphNormals!==fe||Rt.morphColors!==Pe||Rt.toneMapping!==ye||Rt.morphTargetsCount!==qe||!!Rt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Rt.__version=j.version);let gn=Rt.currentProgram;oe===!0&&(gn=bo(j,W,tt),L&&j.isNodeMaterial&&L.onUpdateProgram(j,gn,Rt));let On=!1,di=!1,mr=!1,ge=gn.getUniforms(),Re=Rt.uniforms;if(R.useProgram(gn.program)&&(On=!0,di=!0,mr=!0),j.id!==z&&(z=j.id,di=!0),Rt.needsLights){let be=Vp(w.state.lightProbeGridArray,tt);Rt.lightProbeGrid!==be&&(Rt.lightProbeGrid=be,di=!0)}if(On||G!==F){R.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),ge.setValue(q,"projectionMatrix",F.projectionMatrix),ge.setValue(q,"viewMatrix",F.matrixWorldInverse);let mi=ge.map.cameraPosition;mi!==void 0&&mi.setValue(q,Se.setFromMatrixPosition(F.matrixWorld)),B.logarithmicDepthBuffer&&ge.setValue(q,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ge.setValue(q,"isOrthographic",F.isOrthographicCamera===!0),G!==F&&(G=F,di=!0,mr=!0)}if(Rt.needsLights&&(nn.state.sunShadowMap.length>0&&ge.setValue(q,"sunShadowMap",nn.state.sunShadowMap,st),nn.state.directionalShadowMap.length>0&&ge.setValue(q,"directionalShadowMap",nn.state.directionalShadowMap,st),nn.state.spotShadowMap.length>0&&ge.setValue(q,"spotShadowMap",nn.state.spotShadowMap,st),nn.state.pointShadowMap.length>0&&ge.setValue(q,"pointShadowMap",nn.state.pointShadowMap,st)),tt.isSkinnedMesh){ge.setOptional(q,tt,"bindMatrix"),ge.setOptional(q,tt,"bindMatrixInverse");let be=tt.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ge.setValue(q,"boneTexture",be.boneTexture,st))}tt.isBatchedMesh&&(ge.setOptional(q,tt,"batchingTexture"),ge.setValue(q,"batchingTexture",tt._matricesTexture,st),ge.setOptional(q,tt,"batchingIdTexture"),ge.setValue(q,"batchingIdTexture",tt._indirectTexture,st),ge.setOptional(q,tt,"batchingColorTexture"),tt._colorsTexture!==null&&ge.setValue(q,"batchingColorTexture",tt._colorsTexture,st));let pi=rt.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&Y.update(tt,rt,gn),(di||Rt.receiveShadow!==tt.receiveShadow)&&(Rt.receiveShadow=tt.receiveShadow,ge.setValue(q,"receiveShadow",tt.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&W.environment!==null&&(Re.envMapIntensity.value=W.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=Ly()),di){if(ge.setValue(q,"toneMappingExposure",C.toneMappingExposure),Rt.needsLights&&Hp(Re,mr),wt&&j.fog===!0&&Dt.refreshFogUniforms(Re,wt),Dt.refreshMaterialUniforms(Re,j,Q,X,w.state.transmissionRenderTarget[F.id]),Rt.needsLights&&Rt.lightProbeGrid){let be=Rt.lightProbeGrid;Re.probesSH.value=be.texture,Re.probesMin.value.copy(be.boundingBox.min),Re.probesMax.value.copy(be.boundingBox.max),Re.probesResolution.value.copy(be.resolution)}qr.upload(q,yh(Rt),Re,st)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(qr.upload(q,yh(Rt),Re,st),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ge.setValue(q,"center",tt.center),ge.setValue(q,"modelViewMatrix",tt.modelViewMatrix),ge.setValue(q,"normalMatrix",tt.normalMatrix),ge.setValue(q,"modelMatrix",tt.matrixWorld),j.uniformsGroups!==void 0){let be=j.uniformsGroups;for(let mi=0,gr=be.length;mi<gr;mi++){let Sh=be[mi];dt.update(Sh,gn),dt.bind(Sh,gn)}}return gn}function Hp(F,W){F.ambientLightColor.needsUpdate=W,F.lightProbe.needsUpdate=W,F.sunLights.needsUpdate=W,F.sunLightShadows.needsUpdate=W,F.directionalLights.needsUpdate=W,F.directionalLightShadows.needsUpdate=W,F.pointLights.needsUpdate=W,F.pointLightShadows.needsUpdate=W,F.spotLights.needsUpdate=W,F.spotLightShadows.needsUpdate=W,F.rectAreaLights.needsUpdate=W,F.hemisphereLights.needsUpdate=W}function Wp(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(F,W,rt){let j=nt.get(F);j.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),nt.get(F.texture).__webglTexture=W,nt.get(F.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:rt,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,W){let rt=nt.get(F);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(F,W=0,rt=0){k=F,U=W,N=rt;let j=null,tt=!1,wt=!1;if(F){let Tt=nt.get(F);if(Tt.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(q.FRAMEBUFFER,Tt.__webglFramebuffer),V.copy(F.viewport),it.copy(F.scissor),Z=F.scissorTest,R.viewport(V),R.scissor(it),R.setScissorTest(Z),z=-1;return}else if(Tt.__webglFramebuffer===void 0)st.setupRenderTarget(F);else if(Tt.__hasExternalTextures)st.rebindTextures(F,nt.get(F.texture).__webglTexture,nt.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let $t=F.depthTexture;if(Tt.__boundDepthTexture!==$t){if($t!==null&&nt.has($t)&&(F.width!==$t.image.width||F.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(F)}}let It=F.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(wt=!0);let Ft=nt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Ft[W])?j=Ft[W][rt]:j=Ft[W],tt=!0):F.samples>0&&st.useMultisampledRTT(F)===!1?j=nt.get(F).__webglMultisampledFramebuffer:Array.isArray(Ft)?j=Ft[rt]:j=Ft,V.copy(F.viewport),it.copy(F.scissor),Z=F.scissorTest}else V.copy(pt).multiplyScalar(Q).floor(),it.copy(At).multiplyScalar(Q).floor(),Z=re;if(rt!==0&&(j=P),R.bindFramebuffer(q.FRAMEBUFFER,j)&&R.drawBuffers(F,j),R.viewport(V),R.scissor(it),R.setScissorTest(Z),tt){let Tt=nt.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,Tt.__webglTexture,rt)}else if(wt){let Tt=W;for(let It=0;It<F.textures.length;It++){let Ft=nt.get(F.textures[It]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+It,Ft.__webglTexture,rt,Tt)}}else if(F!==null&&rt!==0){let Tt=nt.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Tt.__webglTexture,rt)}z=-1};function Mh(F){let W=nt.get(F);return(W.__readFormat!==F.format||W.__readType!==F.type)&&(W.__readFormat=F.format,W.__readType=F.type,W.__formatReadable=B.textureFormatReadable(F.format),W.__typeReadable=B.textureTypeReadable(F.type)),W}this.readRenderTargetPixels=function(F,W,rt,j,tt,wt,Ct,Tt=0){if(!(F&&F.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=nt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){R.bindFramebuffer(q.FRAMEBUFFER,It);try{let Ft=F.textures[Tt],$t=Ft.format,te=Ft.type;F.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Tt);let Pt=Mh(Ft);if(Pt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=F.width-j&&rt>=0&&rt<=F.height-tt&&q.readPixels(W,rt,j,tt,vt.convert($t),vt.convert(te),wt)}finally{let Ft=k!==null?nt.get(k).__webglFramebuffer:null;R.bindFramebuffer(q.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(F,W,rt,j,tt,wt,Ct,Tt=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=nt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It)if(W>=0&&W<=F.width-j&&rt>=0&&rt<=F.height-tt){R.bindFramebuffer(q.FRAMEBUFFER,It);let Ft=F.textures[Tt],$t=Ft.format,te=Ft.type;F.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Tt);let Pt=Mh(Ft);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,fe),q.bufferData(q.PIXEL_PACK_BUFFER,wt.byteLength,q.STREAM_READ),q.readPixels(W,rt,j,tt,vt.convert($t),vt.convert(te),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Pe=k!==null?nt.get(k).__webglFramebuffer:null;R.bindFramebuffer(q.FRAMEBUFFER,Pe);let ye=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Bf(q,ye,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,fe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,wt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(fe),q.deleteSync(ye),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,W=null,rt=0){let j=Math.pow(2,-rt),tt=Math.floor(F.image.width*j),wt=Math.floor(F.image.height*j),Ct=W!==null?W.x:0,Tt=W!==null?W.y:0;st.setTexture2D(F,0),q.copyTexSubImage2D(q.TEXTURE_2D,rt,0,0,Ct,Tt,tt,wt),R.unbindTexture()},this.copyTextureToTexture=function(F,W,rt=null,j=null,tt=0,wt=0){let Ct,Tt,It,Ft,$t,te,Pt,fe,Pe,ye=F.isCompressedTexture?F.mipmaps[wt]:F.image;if(rt!==null)Ct=rt.max.x-rt.min.x,Tt=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,Ft=rt.min.x,$t=rt.min.y,te=rt.isBox3?rt.min.z:0;else{let Re=Math.pow(2,-tt);Ct=Math.floor(ye.width*Re),Tt=Math.floor(ye.height*Re),F.isDataArrayTexture?It=ye.depth:F.isData3DTexture?It=Math.floor(ye.depth*Re):It=1,Ft=0,$t=0,te=0}j!==null?(Pt=j.x,fe=j.y,Pe=j.z):(Pt=0,fe=0,Pe=0);let _e=vt.convert(W.format),qe=vt.convert(W.type),Rt;W.isData3DTexture?(st.setTexture3D(W,0),Rt=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(st.setTexture2DArray(W,0),Rt=q.TEXTURE_2D_ARRAY):(st.setTexture2D(W,0),Rt=q.TEXTURE_2D),R.activeTexture(q.TEXTURE0),R.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),R.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),R.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);let nn=R.getParameter(q.UNPACK_ROW_LENGTH),oe=R.getParameter(q.UNPACK_IMAGE_HEIGHT),gn=R.getParameter(q.UNPACK_SKIP_PIXELS),On=R.getParameter(q.UNPACK_SKIP_ROWS),di=R.getParameter(q.UNPACK_SKIP_IMAGES);R.pixelStorei(q.UNPACK_ROW_LENGTH,ye.width),R.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ye.height),R.pixelStorei(q.UNPACK_SKIP_PIXELS,Ft),R.pixelStorei(q.UNPACK_SKIP_ROWS,$t),R.pixelStorei(q.UNPACK_SKIP_IMAGES,te);let mr=F.isDataArrayTexture||F.isData3DTexture,ge=W.isDataArrayTexture||W.isData3DTexture;if(F.isDepthTexture){let Re=nt.get(F),pi=nt.get(W),be=nt.get(Re.__renderTarget),mi=nt.get(pi.__renderTarget);R.bindFramebuffer(q.READ_FRAMEBUFFER,be.__webglFramebuffer),R.bindFramebuffer(q.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let gr=0;gr<It;gr++)mr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,nt.get(F).__webglTexture,tt,te+gr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,nt.get(W).__webglTexture,wt,Pe+gr)),q.blitFramebuffer(Ft,$t,Ct,Tt,Pt,fe,Ct,Tt,q.DEPTH_BUFFER_BIT,q.NEAREST);R.bindFramebuffer(q.READ_FRAMEBUFFER,null),R.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(tt!==0||F.isRenderTargetTexture||nt.has(F)){let Re=nt.get(F),pi=nt.get(W);R.bindFramebuffer(q.READ_FRAMEBUFFER,E),R.bindFramebuffer(q.DRAW_FRAMEBUFFER,D);for(let be=0;be<It;be++)mr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Re.__webglTexture,tt,te+be):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Re.__webglTexture,tt),ge?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,pi.__webglTexture,wt,Pe+be):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,pi.__webglTexture,wt),tt!==0?q.blitFramebuffer(Ft,$t,Ct,Tt,Pt,fe,Ct,Tt,q.COLOR_BUFFER_BIT,q.NEAREST):ge?q.copyTexSubImage3D(Rt,wt,Pt,fe,Pe+be,Ft,$t,Ct,Tt):q.copyTexSubImage2D(Rt,wt,Pt,fe,Ft,$t,Ct,Tt);R.bindFramebuffer(q.READ_FRAMEBUFFER,null),R.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else ge?F.isDataTexture||F.isData3DTexture?q.texSubImage3D(Rt,wt,Pt,fe,Pe,Ct,Tt,It,_e,qe,ye.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(Rt,wt,Pt,fe,Pe,Ct,Tt,It,_e,ye.data):q.texSubImage3D(Rt,wt,Pt,fe,Pe,Ct,Tt,It,_e,qe,ye):F.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,wt,Pt,fe,Ct,Tt,_e,qe,ye.data):F.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,wt,Pt,fe,ye.width,ye.height,_e,ye.data):q.texSubImage2D(q.TEXTURE_2D,wt,Pt,fe,Ct,Tt,_e,qe,ye);R.pixelStorei(q.UNPACK_ROW_LENGTH,nn),R.pixelStorei(q.UNPACK_IMAGE_HEIGHT,oe),R.pixelStorei(q.UNPACK_SKIP_PIXELS,gn),R.pixelStorei(q.UNPACK_SKIP_ROWS,On),R.pixelStorei(q.UNPACK_SKIP_IMAGES,di),wt===0&&W.generateMipmaps&&q.generateMipmap(Rt),R.unbindTexture()},this.initRenderTarget=function(F){nt.get(F).__webglFramebuffer===void 0&&st.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?st.setTextureCube(F,0):F.isData3DTexture?st.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?st.setTexture2DArray(F,0):st.setTexture2D(F,0),R.unbindTexture()},this.resetState=function(){U=0,N=0,k=null,R.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};function Md(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function Sd(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}var Fy=[],Au=new Map,Dy=0;function Ml(i){Fy=i,Au=new Map(i.flatMap(t=>t.items.map(e=>[Uy(t.id,e.id),e]))),Dy++}function Uy(i,t){return`pack:${i}:${t}`}function Ny(i){return i.startsWith("pack:")}var Oy={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Td(i){return De(i)?.parts.find(t=>t.screen)}function De(i){if(!Ny(i))return;let t=Au.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=Oy[e];return r?Au.get(`pack:${r}:${n.join(":")}`):void 0}function mn(i,t){let e=De(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall"||t.type==="lamp_wall_updown")return Ys;if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));if(t.type==="fan_ceiling"||t.type==="fan_ceiling_light")return Math.max(0,i.height-Math.max(.05,t.h));if(t.type==="access_point"||t.type==="smoke_detector")return Math.max(0,i.height-Math.max(.02,t.h));if(t.type==="fan_wall")return 1.55;if(t.type==="altar_wall")return 1.45;if(t.type==="floating_shelf")return 1.35;if(t.type==="nightstand_floating")return .48;if(t.type==="water_heater")return 1.7;if(t.type==="range_hood")return 1.35;if(t.type==="microwave")return vl(i,t.x,t.z);if(t.type==="modem_router"||t.type==="smart_display")return vl(i,t.x,t.z);if((t.type==="water_pump"||t.type==="heat_pump_outdoor")&&!i.rooms.some(n=>n.points.length>=3&&ue([t.x,t.z],n.points)))return Sl(i,t.x,t.z);switch(e?.mount){case"surface":return vl(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:qs(t)}}var Ru=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden","lamp_column","lamp_tv_bars","lamp_orb_table","lamp_portable","lamp_ambient_spot","lamp_cube","lamp_panel_round","lamp_garden_spots","lamp_wall_updown"]),wd=new Set([...Ru,"radiator","air_conditioner","water_pump","fan_ceiling","fan_ceiling_light","fan_wall","fan_floor","water_heater","range_hood","microwave","water_purifier","air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","network_cabinet","nas_server","access_point","wall_thermostat","smoke_detector","siren_alarm","electrical_panel","ups_unit","modem_router","heat_pump_outdoor","hot_water_tank","ventilation_fan","humidifier","smart_display","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","temperature_humidity_sensor","video_doorbell","robot_vacuum","robot_mower","inverter","home_battery","wallbox","meter","tv_board","tv_wall","tv_stand","media_wall_tv","fireplace_wall_electric","bed_ambient_180","wardrobe_light","alarm_sunrise","vanity_light","desk","fridge","fridge_smart","stove","kitchen_tall","kitchen_display","dishwasher","washer","dryer","washer_dryer_tower","balcony_solar","kitchen","island","sink"]);function Xn(i){return i.kind==="veranda"||i.kind==="balcony"||i.kind==="canopy"}function Tl(i,t){if(i.length<2)return 0;if(t<0){let f=0,h=-1;for(let p=0;p<i.length;p++){let g=i[p],x=i[(p+1)%i.length],_=Math.hypot(x[0]-g[0],x[1]-g[1]);_>h&&([f,h]=[p,_])}return f}let e=i[t],n=i[(t+1)%i.length],r=n[0]-e[0],s=n[1]-e[1],o=Math.hypot(r,s)||1,a=(e[0]+n[0])/2,l=(e[1]+n[1])/2,c=0,u=-1;for(let f=0;f<i.length;f++){if(f===t)continue;let h=i[f],p=i[(f+1)%i.length],g=p[0]-h[0],x=p[1]-h[1],_=Math.hypot(g,x)||1,m=Math.abs((g*r+x*s)/(_*o)),M=Math.abs(r*((h[1]+p[1])/2-l)-s*((h[0]+p[0])/2-a))/o*m;M>u&&([c,u]=[f,M])}return c}var Kr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2},zy={canopy:.02,veranda:.12,balcony:.12};function $s(i){return zy[i]}function ai(i){return i==="hedge"||i==="fence"||i==="pergola"}function Zs(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let f=s(c,u);o=Math.min(o,f),a=Math.max(a,f)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function ky(i,t,e,n){return li(i)+(t.offset??0)+Kr[t.type]-Zs(t,e,n)}function li(i){return i.elevation>.3?0:-.2}function Sl(i,t,e){let n=(i.outdoor??[]).filter(s=>!ai(s.type)&&s.type!=="pool"&&ue([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?ky(i,r,t,e):li(i)}var Vy={type:"none",pitch:35,overhang:.4},jE={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Vy}};var Ys=1.75;function Ed(i){return Ru.has(i)||!!De(i)?.light}var Gy=new Set(["table","table_round","coffee_table","coffee_table_round","coffee_table_glass","nesting_tables","side_table_round","console_table","lowboard_120","lowboard_160","lowboard_200","table_120","table_160","table_200","table_solid_220","tv_console","desk","nightstand","nightstand_drawer","nightstand_slim","nightstand_floating","vanity_mirror","vanity_light","changing_table","vanity_60","vanity_80","vanity_100","double_vanity_120","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function qs(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"floating_shelf":return 1.35;case"nightstand_floating":return .48;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"air_conditioner":return 1.9;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;case"security_camera":return 1.85;case"smart_lock":return .95;case"wall_thermostat":return 1.35;case"siren_alarm":return 1.85;case"electrical_panel":return .85;case"ventilation_fan":return 1.8;case"wall_switch":return 1.05;case"wall_outlet":case"smart_plug":return .3;case"motion_sensor":return 1.9;case"contact_sensor":return 1.1;case"temperature_humidity_sensor":return 1.35;case"video_doorbell":return 1.25;default:return 0}}function vl(i,t,e){let n=0;for(let r of i.furniture)!(Gy.has(r.type)||De(r.type)?.surface)||!ue([t,e],wl(r))||(n=Math.max(n,r.h));return n}var Hy=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Wy=["standard","bars","glass_wall"];function rr(i,t){return i.type==="door"?i.style&&Hy.includes(i.style)?i.style:t?"front":"interior":i.style&&Wy.includes(i.style)?i.style:"standard"}function Ad(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=s-.5;if(l+c>u){let h=Math.max(0,u)/(l+c);l*=h,c*=h}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Rd(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function sr(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function Ks(i){return Math.abs(sr(i))}function Cd(i){let t=sr(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function Id(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function Pd(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function wl(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function ue(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}var We=(i,t)=>[i[0]-t[0],i[1]-t[1]],Ni=(i,t)=>[i[0]+t[0],i[1]+t[1]],ci=(i,t)=>[i[0]*t,i[1]*t],js=(i,t)=>i[0]*t[0]+i[1]*t[1],Js=(i,t)=>i[0]*t[1]-i[1]*t[0],Qs=i=>Math.hypot(i[0],i[1]),ui=i=>{let t=Qs(i)||1;return[i[0]/t,i[1]/t]},Ld=i=>[-i[1],i[0]],Fd=i=>[i[1],-i[0]];function to(i,t,e=[]){let n=t.eps??.005,r=[],s=i.filter(b=>!Xn(b)),o=e.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),a=[],l=b=>{for(let T=0;T<a.length;T++)if(Math.abs(a[T][0]-b[0])<=n&&Math.abs(a[T][1]-b[1])<=n)return T;return a.push([b[0],b[1]]),a.length-1},c=[];for(let b of s){let T=b.points;if(T.length<3||Math.abs(sr(T))<1e-6)continue;let C=sr(T)>0,I=T.map(l);for(let L=0;L<T.length;L++){let P=I[L],E=I[(L+1)%T.length];P!==E&&c.push(C?{u:P,v:E,room:b.id,edge:L,forward:!0}:{u:E,v:P,room:b.id,edge:L,forward:!1})}}let u=o.map(b=>[l(b.a),l(b.b)]),f=new Set;for(let b of s){let T=b.points;T.length<3||(b.wall_splits??[]).forEach((C,I)=>{if(!C||I>=T.length)return;let L=T[I],P=We(T[(I+1)%T.length],L),E=Qs(P);for(let D of C)D>n&&D<E-n&&f.add(l(Ni(L,ci(P,D/E))))})}let h=[];for(let b of c){let T=a[b.u],C=a[b.v],I=We(C,T),L=Qs(I),P=ci(I,1/L),E=[];for(let U=0;U<a.length;U++){if(U===b.u||U===b.v)continue;let N=We(a[U],T),k=js(N,P);k<=n||k>=L-n||Math.abs(Js(P,N))<=n&&E.push({t:k,id:U})}E.sort((U,N)=>U.t-N.t);let D=[{t:0,id:b.u},...E,{t:L,id:b.v}];for(let U=0;U+1<D.length;U++){let N=D[U],k=D[U+1],z=b.forward?N.t:L-k.t,G=b.forward?k.t:L-N.t;h.push({u:N.id,v:k.id,room:b.room,edge:b.edge,t0:z,t1:G})}}let p=new Map;for(let b of h){let T=b.u<b.v?`${b.u}-${b.v}`:`${b.v}-${b.u}`,C=p.get(T);C||p.set(T,C=[]),C.push(b)}let g=b=>({room_id:b.room,edge:b.edge,t0:b.t0,t1:b.t1}),x=new Map;for(let b of h){let T=`${b.room}:${b.edge}`;x.set(T,[...x.get(T)??[],b.t0].sort((C,I)=>C-I))}let _=b=>{let T=s.find(I=>I.id===b.room)?.wall_heights?.[b.edge];if(!Array.isArray(T))return T;let C=x.get(`${b.room}:${b.edge}`)??[];return T[C.indexOf(b.t0)]??null},m=b=>{let T=b.map(_).filter(C=>typeof C=="number"&&C>0);return T.length?Math.min(...T):void 0},y=b=>{let T=b.map(C=>s.find(I=>I.id===C.room)?.wall_thickness?.[C.edge]).filter(C=>typeof C=="number"&&C>0);return T.length?Math.max(...T):void 0},M=b=>b.some(T=>_(T)===0),v=[],S=[];for(let b of p.values()){let T=b[0],C=b.find(I=>I!==T&&I.u===T.v&&I.v===T.u&&I.room!==T.room);for(let I of b)I!==T&&I!==C&&I.room!==T.room&&r.push(`overlap:${T.room}:${I.room}`);if(M(C?[T,C]:[T])){C&&v.push([T.room,C.room]);continue}if(C){let I=y([T,C])??t.interior;S.push({a:T.u,b:T.v,left:I/2,right:I/2,exterior:!1,roomLeft:T.room,roomRight:C.room,sources:[g(T),g(C)],height:m([T,C])})}else S.push({a:T.u,b:T.v,left:0,right:y([T])??t.exterior,exterior:!0,roomLeft:T.room,roomRight:null,sources:[g(T)],height:m([T])})}o.forEach((b,T)=>{let[C,I]=u[T];if(C===I)return;let L=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],P=i.find(U=>U.points.length>=3&&ue(L,U.points))?.id??null,E=(b.thickness??t.interior)/2,D=typeof b.height=="number"&&b.height>0?b.height:void 0;S.push({free:b.id,a:C,b:I,left:E,right:E,exterior:!1,roomLeft:P,roomRight:P,sources:[],height:D})}),S=Yy(S,a,f);let w=$y(S,a);return{walls:S.map((b,T)=>{let C=a[b.a],I=a[b.b],L=w.get(`${T}:a`),P=w.get(`${T}:b`),E=Zy([L.right,P.left,I,P.right,L.left,C],1e-6);return{id:Xy(C,I),a:[C[0],C[1]],b:[I[0],I[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:E,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(r)],open:v}}function Xy(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function Dd(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function Yy(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=Dd(l)),c.a!==o&&(c=Dd(c)),l.a===c.b)continue;let u=ui(We(t[l.b],t[l.a])),f=ui(We(t[c.b],t[c.a]));if(Math.abs(Js(u,f))>1e-6||js(u,f)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:qy(l.sources,c.sources)},p=n.filter((g,x)=>x!==a[0]&&x!==a[1]);p.push(h),n.length=0,n.push(...p),r=!0;break}}return n}function qy(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function $y(i,t){let e=new Map;i.forEach((r,s)=>{let o=ui(We(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:ci(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Ni(o,ci(Ld(c.d),c.left)),right:Ni(o,ci(Fd(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let u=s[c],f=s[(c+1)%s.length],h=Ni(o,ci(Ld(u.d),u.left)),p=Ni(o,ci(Fd(f.d),f.right)),g=Js(u.d,f.d);if(Math.abs(g)<1e-4)continue;let x=Js(We(p,h),f.d)/g,_=Ni(h,ci(u.d,x));Qs(We(_,o))>l||(n.get(u.key).left=_,n.get(f.key).right=_)}}return n}function Zy(i,t){let e=i.filter((r,s)=>Qs(We(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=We(o,s),c=We(a,o);if(Math.abs(Js(ui(l),ui(c)))<1e-7&&js(l,c)>0){e=e.filter((u,f)=>f!==r),n=!0;break}}}return e}function Ud(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=ui(We(r,n));return Ni(n,ci(s,e))}function Nd(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=ui(We(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Ni(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Od(i,t,e){if(!t.wall)return Ky(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=Ud(e.room,0,t.offset);return{wall:n,s:js(We(r,n.a),ui(We(n.b,n.a)))}}function Ky(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Ud(t,e,n);return{wall:r,s:js(We(o,r.a),ui(We(r.b,r.a)))}}return null}var no=Math.PI/180;function Yn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function Fn(i){let t=Yn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*no),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*no);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=Vd(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}var Jy=.14;function zd(i,t,e){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let s of i.settings.roof.sections??[]){if(s.open)continue;let o=Math.min(s.x0,s.x1),a=Math.max(s.x0,s.x1),l=Math.min(s.z0,s.z1),c=Math.max(s.z0,s.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||s.points&&s.points.length>=3&&!ue([t,e],s.points))continue;let[u,f]=Oi(s,t,e),h=s.shape==="flat"||s.shape==="parapet",p=Math.max(0,s.overhang??r),x=((h?null:ro(Qr(s,{u0:p,u1:p,a:p,b:p}),u,f))??Fn(s).y(f))-Jy;n=n===null?x:Math.max(n,x)}return n}function io(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=Ks(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=Bd([a[0]-o[0],a[1]-o[1]]),u=Bd([l[0]-a[0],l[1]-a[1]]),f=[c[1]*n,-c[0]*n],h=[u[1]*n,-u[0]*n],p=f[0]+h[0],g=f[1]+h[1],x=Math.hypot(p,g);if(x<1e-6){r.push([a[0]+f[0]*t,a[1]+f[1]*t]);continue}let _=(p*f[0]+g*f[1])/x,m=Math.min(4,1/Math.max(.25,_));r.push([a[0]+p/x*t*m,a[1]+g/x*t*m])}return r}function Bd(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function kd(i,t){if(i.points&&i.points.length>=3)return io(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}var eo=Math.tan(30*no);function Vd(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+eo*(i-o+s))/(2*eo))),u=a+(c-s)*eo;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:h=>h<=s?t+h*n:h<=c?a+(h-s)*eo:h<=i-o?l+(i-o-h)*eo:e+(i-h)*r}}function Qr(i,t){let e=Yn(i),n=Fn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(y,M)=>[y,M,n.y(M)],u=c(a,-s),f=c(l,-s),h=c(l,r+o),p=c(a,r+o),g=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*no),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*no);if(i.shape==="pent"){let y=[u,f,h,p];return{faces:[y],rim:y,ridges:[[h,p]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let y=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,r-n.vr)||r/2),M=[e.u0+y,n.vr,n.rh],v=[e.u1-y,n.vr,n.rh],S=i.shape==="pyramid"?[[u,f,M],[f,h,M],[h,p,M],[p,u,M]]:[[u,f,v,M],[M,v,h,p],[p,u,M],[f,h,v]],w=i.shape==="pyramid"?[[u,M],[p,M],[f,M],[h,M]]:[[M,v],[u,M],[p,M],[f,v],[h,v]];return{faces:S,rim:[u,f,h,p],ridges:w,gable:null}}if(i.shape==="halfhip"){let y=Math.min(n.y(0),n.y(r)),M=y+(n.rh-y)*.55,v=g>1e-6?Math.min(n.vr,(M-i.eave_a)/g):n.vr,S=x>1e-6?Math.max(n.vr,r-(M-i.eave_b)/x):n.vr,w=Math.min((e.u1-e.u0)/2-.1,(n.rh-M)/Math.max(.2,g)),A=[e.u0+w,n.vr,n.rh],b=[e.u1-w,n.vr,n.rh],T=[a,v,M],C=[a,S,M],I=[l,v,M],L=[l,S,M];return{faces:[[u,f,I,b,A,T],[A,b,L,h,p,C],[C,T,A],[I,L,b]],rim:[u,f,I,L,h,p,C,T],ridges:[[A,b],[T,A],[C,A],[I,b],[L,b]],gable:[[0,n.y(0)],[v,M],[S,M],[r,n.y(r)]]}}if(i.shape==="mansard"){let y=Vd(r,i.eave_a,i.eave_b,g,x),M=[a,y.vla,y.yla],v=[l,y.vla,y.yla],S=[a,r-y.vlb,y.ylb],w=[l,r-y.vlb,y.ylb],A=[a,y.vr,y.rh],b=[l,y.vr,y.rh];return{faces:[[u,f,v,M],[M,v,b,A],[A,b,w,S],[S,w,h,p]],rim:[u,f,v,b,w,h,p,S,A,M],ridges:[[A,b],[M,v],[S,w]],gable:[[0,n.y(0)],[y.vla,y.yla],[y.vr,y.rh],[r-y.vlb,y.ylb],[r,n.y(r)]]}}let _=[a,n.vr,n.rh],m=[l,n.vr,n.rh];return{faces:[[u,f,m,_],[_,m,h,p]],rim:[u,f,m,h,p,_],ridges:[[_,m]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function ro(i,t,e){let n=null;for(let r of i.faces){if(!ue([t,e],r.map(y=>[y[0],y[1]])))continue;let[s,o]=r,a=r.slice(2).find(y=>Math.abs((o[0]-s[0])*(y[1]-s[1])-(o[1]-s[1])*(y[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],u=o[1]-s[1],f=a[0]-s[0],h=a[2]-s[2],p=a[1]-s[1],g=c*p-u*h,x=u*f-l*p,_=l*h-c*f;if(Math.abs(x)<1e-9)continue;let m=s[2]-(g*(t-s[0])+_*(e-s[1]))/x;n=n===null?m:Math.min(n,m)}return n}function Oi(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function Qy(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Cu(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=Qy(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function Iu(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Yn(t),n=Fn(t).rh,r=Qr(i,{u0:0,u1:0,a:0,b:0}),s=Fn(i),o=g=>{let[x,_]=e.at(g,e.w/2),[m,y]=Oi(i,x,_);return ro(r,m,y)??s.y(y)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,u=a?1:-1,f=Math.abs(c-l),h=c;for(let g=.5;g<f;g+=.05)if(o(l+u*g)>=n-.02){h=l+u*g;break}if(Math.abs(h-c)<.05)return t;let p={...t};return t.axis==="x"?c===e.u1?p.x1=h:p.x0=h:c===e.u1?p.z1=h:p.z0=h,p}function Gd(i,t){let e=Iu(i,t),n=Yn(e),r=Fn(e),s=Qr(i,{u0:0,u1:0,a:0,b:0}),o=Fn(i),a=h=>{let[p,g]=n.at(h,n.w/2),[x,_]=Oi(i,p,g);return ro(s,x,_)??o.y(_)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],f=Math.max(1,Math.ceil(c/.15));for(let h=0;h<f;h++){let p=c*h/f,g=c*(h+1)/f,x=l?n.u0+p:n.u1-p,_=l?n.u0+g:n.u1-g,m=a(_),y=1/0,M=-1/0;for(let b=0;b<=40;b++){let T=n.w*b/40;r.y(T)>m+.02&&(y=Math.min(y,T),M=Math.max(M,T))}if(!(M-y>.05))continue;let v=n.at(x,y),S=n.at(_,M),w=Oi(i,v[0],v[1]),A=Oi(i,S[0],S[1]);u.push({u0:Math.min(w[0],A[0]),u1:Math.max(w[0],A[0]),v0:Math.min(w[1],A[1]),v1:Math.max(w[1],A[1])})}return u}function Jr(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),u=r(l);if(c&&s.push(a),c!==u){let f=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*f,a[1]+(l[1]-a[1])*f,a[2]+(l[2]-a[2])*f])}}return s}function Hd(i,t){let e=Jr(i,0,t.u0,!0),n=Jr(i,0,t.u1,!1),r=Jr(Jr(i,0,t.u0,!1),0,t.u1,!0),s=Jr(r,1,t.v0,!0),o=Jr(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(Ks(a.map(l=>[l[0],l[1]])))>1e-6)}function El(i,t,e){let n=Yn(t),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(u=>r.some(f=>ue(u,f.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function Wd(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}var Dn=1e-4;function Pu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function Xd(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>Dn&&a<1-Dn&&l>-Dn&&l<1+Dn?a:null}function Lu(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=Dn||o>=1-Dn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<Dn?o:null}function jy(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(Xd(n,r,o,a)!==null||Lu(o,n,r)!==null||Lu(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Dn)return!0}}return ue(i[0],t)||ue(t[0],i)}function tv(i){let t=i.map(s=>Pu(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],u=[0,1];t.forEach((f,h)=>{if(h!==o)for(let p=0;p<f.length;p++){let g=f[p],x=f[(p+1)%f.length],_=Xd(l,c,g,x)??Lu(g,l,c);_!==null&&u.push(_)}}),u.sort((f,h)=>f-h);for(let f=1;f<u.length;f++){if(u[f]-u[f-1]<Dn)continue;let h=[l[0]+(c[0]-l[0])*u[f-1],l[1]+(c[1]-l[1])*u[f-1]],p=[l[0]+(c[0]-l[0])*u[f],l[1]+(c[1]-l[1])*u[f]],g=Math.hypot(p[0]-h[0],p[1]-h[1]),x=[(h[0]+p[0])/2+(p[1]-h[1])/g*.001,(h[1]+p[1])/2-(p[0]-h[0])/g*.001];t.some((_,m)=>m!==o&&ue(x,_))||e.some(([_,m])=>Math.hypot(_[0]-h[0],_[1]-h[1])<Dn&&Math.hypot(m[0]-p[0],m[1]-p[1])<Dn)||e.push([h,p])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([u],f)=>!r.has(f)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&Pu(o)>1e-6&&n.push(o)}return n}function Fu(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&jy(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:tv(s))}function ev(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function Yd(i,t,e=.03){return i.every(n=>ue(n,t)||t.some((r,s)=>ev(n,r,t[(s+1)%t.length])<=e))}function qd(i,t){let e=Pu(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}var or=Ht(3662079,.95),Du=Ht(3662079,1),Bi=Ht(5995775,.34),$d=Ht(5995775,.22),Al=[-.55,.83],Xt=-1,Rl=16,ar=32,Zd=48,Uu=64,ce=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=Xt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Qt;return t.setAttribute("position",new Gt(this.p,3)),t.setAttribute("color",new Gt(this.c,3)),t.setAttribute("fold",new Gt(this.f,1)),this.uv&&t.setAttribute("uv",new Gt(this.uv,2)),this.tile&&t.setAttribute("tile",new Gt(this.tile,2)),t.computeBoundingSphere(),t}},Ve=class{p=[];c=[];f=[];seg(t,e,n=or,r=Xt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Xt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Xt),this.seg(c,a,n,s)}geometry(){let t=new Qt;return t.setAttribute("position",new Gt(this.p,3)),t.setAttribute("color",new Gt(this.c,3)),t.setAttribute("fold",new Gt(this.f,1)),t}};function Kd(i,t,e,n){let s=i.uv?2:0,o=(f,h)=>{let p=f*3+h;return{p:i.p.slice(p*3,p*3+3),c:i.c.slice(p*3,p*3+3),uv:i.uv?i.uv.slice(p*2,p*2+2):null,tile:i.tile?i.tile.slice(p*2,p*2+2):null}},a=(f,h,p)=>({p:f.p.map((g,x)=>g+(h.p[x]-g)*p),c:f.c.map((g,x)=>g+(h.c[x]-g)*p),uv:f.uv&&h.uv?f.uv.map((g,x)=>g+(h.uv[x]-g)*p):null,tile:f.tile}),l=(f,h,p)=>{for(let g=0;g<3;g++){let x=f*3+g;for(let _=0;_<3;_++)i.p[x*3+_]=h[g].p[_],i.c[x*3+_]=h[g].c[_];if(i.uv&&h[g].uv)for(let _=0;_<s;_++)i.uv[x*2+_]=h[g].uv[_];if(i.tile&&h[g].tile)for(let _=0;_<2;_++)i.tile[x*2+_]=h[g].tile[_];i.f[x]=p}},c=(f,h)=>{let p=i.p.length/9;for(let g of f)i.p.push(...g.p),i.c.push(...g.c),i.f.push(h),i.uv?.push(...g.uv??[.5,.5]),i.tile?.push(...g.tile??[0,1]);return p},u=i.p.length/9;for(let f=t;f<u;f++){let h=[o(f,0),o(f,1),o(f,2)],p=h.map(b=>b.p[1]>e+1e-6),g=h.map(b=>b.p[1]<e-1e-6);if(!p.some(Boolean))continue;if(!g.some(Boolean)){for(let b=0;b<3;b++)i.f[f*3+b]=n;continue}let x=i.f[f*3],_=(b,T)=>a(b,T,(e-b.p[1])/(T.p[1]-b.p[1])),m=p.filter(Boolean).length,y=m===1?p.indexOf(!0):p.indexOf(!1),M=h[y],v=h[(y+1)%3],S=h[(y+2)%3],w=_(M,v),A=_(S,M);m===1?(l(f,[M,w,A],n),c([w,v,S],x),c([w,S,A],x)):(l(f,[M,w,A],x),c([w,v,S],n),c([w,S,A],n))}}function Jd(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let u=(e-l[1])/(c[1]-l[1]),f=[l[0]+(c[0]-l[0])*u,e,l[2]+(c[2]-l[2])*u];for(let p=0;p<3;p++)i.p[s*6+p]=l[p],i.p[s*6+3+p]=f[p];let h=i.c.slice(s*6,s*6+3);i.p.push(...f,...c),i.c.push(...h,...h),i.f.push(n,n)}}var ie=Math.PI/180;function Ht(i,t){let e=new at(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function nv(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function jr(i,t=[]){let e=i.map(([n,r])=>new Jt(n,r));return Es.triangulateShape(e,t.map(n=>n.map(([r,s])=>new Jt(r,s))))}function Qd(i,t,e,n,r,s,o){let a=new at(o),l=p=>.5+.5*Math.min(1,Math.max(0,p/1.6));for(let p=0;p<4;p++){let g=t[p],x=t[(p+1)%4],_=e[p],m=e[(p+1)%4],y=x[0]-g[0],M=x[1]-g[1],v=Math.hypot(y,M);if(v<1e-6)continue;let w=.8+.28*((M/v*Al[0]-y/v*Al[1]+1)/2),A=(_[0]+m[0]-g[0]-x[0])/2*(-M/v)+(_[1]+m[1]-g[1]-x[1])/2*(y/v),b=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),T=Ht(s,l(n)*w).lerp(a,b),C=Ht(s,l(r)*w).lerp(a,b);i.tri([g[0],n,g[1]],[_[0],r,_[1]],[m[0],r,m[1]],T,C,C),i.tri([g[0],n,g[1]],[m[0],r,m[1]],[x[0],n,x[1]],T,C,T)}let[c,u,f,h]=e;Math.hypot(f[0]-c[0],f[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[h[0],r,h[1]],[f[0],r,f[1]],a))}function jd(i,t,e,n,r,s,o,a,l,c){let u=new at(l),f=[];for(let p=0;p<c;p++){let g=p/c*Math.PI*2;f.push({y:s+Math.cos(g)*o,s:r+Math.sin(g)*o})}let h=(p,g)=>{let x=t(p,f[g%c].s);return[x[0],f[g%c].y,x[1]]};for(let p=0;p<c;p++){let g=(p+.5)/c*Math.PI*2,x=Ht(a,.62+.4*Math.max(0,Math.cos(g)));i.tri(h(e,p),h(n,p+1),h(n,p),x),i.tri(h(e,p),h(e,p+1),h(n,p+1),x)}for(let p of[e,n]){let g=t(p,r),x=[g[0],s,g[1]];for(let _=0;_<c;_++)i.tri(x,h(p,_),h(p,_+1),u)}}function me(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:g=>Math.max(e+.002,n(g[0],g[1])),l=o.aoFrom??e,c=o.fold??Xt,u=g=>.5+.5*Math.min(1,Math.max(0,(g-l)/1.6)),f=(o.holes??[]).map(g=>nv(g)>0?[...g].reverse():g),h=f.length?[...t,...f.flat()]:t,p=o.topFace===!1&&!o.bottom?[]:jr(t,f);if(o.topFace!==!1){let g=new at(s);for(let[x,_,m]of p){let y=h[x],M=h[_],v=h[m];i.tri([y[0],a(y),y[1]],[v[0],a(v),v[1]],[M[0],a(M),M[1]],g,g,g,void 0,o.topFold??c)}}if(o.bottom){let g=Ht(r,.55);for(let[x,_,m]of p){let y=h[x],M=h[_],v=h[m];i.tri([y[0],e,y[1]],[M[0],e,M[1]],[v[0],e,v[1]],g,g,g,void 0,c)}}for(let g of[t,...f])for(let x=0;x<g.length;x++){let _=g[x],m=g[(x+1)%g.length],y=m[0]-_[0],M=m[1]-_[1],v=Math.hypot(y,M);if(v<1e-6)continue;let w=.8+.28*((M/v*Al[0]-y/v*Al[1]+1)/2),A=a(_),b=a(m),T=Ht(r,u(e)*w),C=Ht(r,u(A)*w),I=Ht(r,u(b)*w);i.tri([_[0],e,_[1]],[_[0],A,_[1]],[m[0],b,m[1]],T,C,I,void 0,c),i.tri([_[0],e,_[1]],[m[0],b,m[1]],[m[0],e,m[1]],T,I,T,void 0,c)}}var d={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},O=Ht(5995775,.3),$=Ht(5995775,.17),et=Ht(3662079,.45),qn=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Ou(n)}rotated(t,e,n){let r=n*ie,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let u=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];me(this.buf,Nu(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Nu(l)&&(l.reverse(),c.reverse()),Qd(this.buf,l,c,n,r,s,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,u);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,u),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,u=12,f=null){let h=Math.min(a,s-r)/2;if(h<1e-4||o<1e-4)return;let p=(r+s)/2,g=t==="x"?e:n,x=t==="x"?n:e,_=(y,M)=>t==="x"?this.tf(y,M):this.tf(M,y),m=this.buf.p.length;if(jd(this.buf,_,g-o/2,g+o/2,x,p,h,l,c,u),this.mirrored&&lr(this.buf,m),f)for(let y of[g-o/2,g+o/2])for(let M=0;M<u;M++){let v=M/u*Math.PI*2,S=(M+1)/u*Math.PI*2;this.line(_(y,x+Math.sin(v)*h),_(y,x+Math.sin(S)*h),p+Math.cos(v)*h,p+Math.cos(S)*h,f)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let u=[];for(let f=0;f<l;f++){let h=f/l*Math.PI*2;u.push(this.tf(t+Math.cos(h)*n,e+Math.sin(h)*n))}if(me(this.buf,Nu(u),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let f=0;f<l;f++)this.line(u[f],u[(f+1)%l],s,s,c)}tubeYZ(t,e,n,r,s=8,o=null){if(e.length<2||n<1e-4)return;let a=e.map(([f,h],p)=>{let g=e[Math.max(0,p-1)],x=e[Math.min(e.length-1,p+1)],_=x[0]-g[0],m=x[1]-g[1],y=Math.hypot(_,m)||1;return Array.from({length:s},(M,v)=>{let S=v/s*Math.PI*2,w=this.tf(t+Math.cos(S)*n,h+_/y*Math.sin(S)*n);return[w[0],f-m/y*Math.sin(S)*n,w[1]]})}),l=this.buf.p.length,c=new at(r);for(let f=0;f<a.length-1;f++)for(let h=0;h<s;h++){let p=(h+1)%s;this.buf.tri(a[f][h],a[f+1][h],a[f+1][p],c),this.buf.tri(a[f][h],a[f+1][p],a[f][p],c)}let u=(f,h)=>{let p=this.tf(t,e[f][1]),g=[p[0],e[f][0],p[1]];for(let x=0;x<s;x++){let _=(x+1)%s;this.buf.tri(g,a[f][h?_:x],a[f][h?x:_],c)}};if(u(0,!0),u(e.length-1,!1),this.mirrored&&lr(this.buf,l),o)for(let f=0;f<e.length-1;f++)this.seg(t,e[f][0],e[f][1],t,e[f+1][0],e[f+1][1],o)}seg(t,e,n,r,s,o,a=O){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,Xt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s];this.line(o,t[(s+1)%4],n,n,r),this.line(o,o,e,n,r)}}};function Ou(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Nu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function lr(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o;[n[a],n[l]]=[n[l],n[a]]}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function Ge(i,t,e,n,r,s,o=d.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let u of[-1,1])for(let f of[-1,1]){let h=u*l,p=f*c;a?i.loft([h-r*.3,h+r*.3,p-r*.3,p+r*.3],[h-r/2,h+r/2,p-r/2,p+r/2],0,n,o):i.box(h-r/2,h+r/2,0,n,p-r/2,p+r/2,o)}}function cr(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let u=1;u<o;u++){let f=t+c*u;i.seg(f,n,s,f,r,s,$)}for(let u=0;u<o;u++){let f=t+c*(u+.5),h=a??r-.08;if(l)i.seg(f-Math.min(.1,c/4),h,s+.012,f+Math.min(.1,c/4),h,s+.012,et);else{let p=o>1?f+(u%2?-c/2+.06:c/2-.06):f+c/2-.06;i.seg(p,h-.08,s+.012,p,h+.08,s+.012,et)}}}function ln(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,d.body,d.bodyTop,O),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,d.dark),cr(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function $n(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,et)}}var Cl=.12,Il=1.9;function iv(i,t,e,n){let r=Cl;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,d.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,d.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,d.white,d.whiteTop,O);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,$)}}function rv(i,t,e,n){let r=Il,s=e/2;i.box(-t*.34,-t*.27,r+n*.2,r+n*.75,-e/2-.015,-e/2+.025,d.metal),i.box(t*.27,t*.34,r+n*.2,r+n*.75,-e/2-.015,-e/2+.025,d.metal),i.box(-t/2,t/2,r,r+n,-e/2,s,d.white,d.whiteTop,O),i.seg(-t*.42,r+n*.82,s+.003,t*.42,r+n*.82,s+.003,$);let o=r+n*.08,a=r+n*.27;i.box(-t*.43,t*.43,o,a,s-.018,s+.006,d.dark,d.dark,$),i.seg(-t*.42,o+n*.04,s+.009,t*.42,a-n*.025,s+.009,et);for(let l=1;l<8;l++){let c=-t*.4+t*.8*(l/8);i.seg(c,o+n*.025,s+.011,c+t*.018,a-n*.025,s+.011,$)}i.seg(t*.37,r+n*.67,s+.006,t*.4,r+n*.67,s+.006,et)}function sv(i,t,e,n){let r=Math.min(.045,n*.12),s=Math.min(t*.42,n*.48),o=r+n*.13,a=o+s;for(let p of[-t*.32,t*.32])i.box(p-t*.055,p+t*.055,0,r,-e*.34,e*.3,d.dark);i.box(-t*.43,t*.43,r,r+n*.06,-e*.4,e*.36,d.metal,d.metal,O),i.lyingCyl("z",0,-e*.13,o,a,e*.46,s,d.body,d.bodyTop,14,O),i.lyingCyl("z",0,-e*.39,o+s*.08,a-s*.08,e*.1,s*.84,d.dark,d.metal,12,$);for(let p=-2;p<=2;p++){let g=-e*.23+p*e*.055;i.box(-s*.54,s*.54,o+s*.43,o+s*.57,g-e*.012,g+e*.012,d.metal,d.metal)}let l=Math.min(t*.55,n*.65),c=r+n*.08;i.lyingCyl("z",0,e*.17,c,c+l,e*.22,l,d.accent,d.bodyTop,16,O),i.lyingCyl("z",0,e*.39,c+l*.34,c+l*.66,e*.22,l*.32,d.metal,d.dark,12,et);let u=t*.16,f=e*.13,h=Math.min(t,e)*.075;i.cyl(u,f,h*1.35,c+l*.72,c+l*.82,d.accent,d.accent,12,O),i.cyl(u,f,h,c+l*.82,n,d.metal,d.metal,12,et),i.box(-t*.11,t*.11,c+l*.58,c+l*.72,e*.285,e*.3,d.dark,d.dark,et)}function t0(i,t,e,n){let r=n*.18,s=Math.min(t,e);i.cyl(0,0,s*.105,r,n*.34,d.dark,d.bodyTop,18,et),i.cyl(0,0,s*.035,n*.3,n*.76,d.metal,d.bodyTop,10,O),i.cyl(0,0,s*.075,n*.74,n*.94,d.body,d.bodyTop,16,O),i.cyl(0,0,s*.095,n*.92,n,d.body,d.bodyTop,16,$)}function ov(i,t,e,n){i.loft([-t*.4,t*.4,-e*.33,e*.33],[-t*.34,t*.34,-e*.28,e*.28],0,n*.045,d.body,d.metal,O),i.cyl(0,0,Math.min(t,e)*.055,n*.04,n*.62,d.metal,d.metal,10),i.box(-t*.13,t*.13,n*.06,n*.14,-e*.2,e*.2,d.body,d.bodyTop,$);for(let a of[-t*.07,0,t*.07])i.cyl(a,e*.12,t*.018,n*.14,n*.155,d.accent,d.accent,8,et);let r=n*.78,s=Math.min(t,n*.42)*.46,o=e*.075;i.box(-t*.085,t*.085,n*.58,r-s*.18,-e*.1,e*.015,d.body,d.bodyTop,O),i.lyingCyl("z",0,-e*.11,r-s*.3,r+s*.3,e*.24,s*.6,d.body,d.bodyTop,16,O);for(let a of[-o,o]){for(let l=0;l<16;l++){let c=l/16*Math.PI*2;i.seg(Math.cos(c)*s*.18,r+Math.sin(c)*s*.18,a,Math.cos(c)*s,r+Math.sin(c)*s,a,$)}$n(i,0,r,s,a,32),$n(i,0,r,s*.86,a,32),$n(i,0,r,s*.18,a,18)}for(let a of[0,Math.PI/2,Math.PI,Math.PI*3/2]){let l=Math.cos(a)*s,c=r+Math.sin(a)*s;i.seg(l,c,-o,l,c,o,O)}}function av(i,t,e,n){let r=n*.5,s=Math.min(t,n)*.46,o=e*.16;i.box(-t*.15,t*.15,n*.28,n*.72,-e/2,-e*.4,d.body,d.bodyTop,O),i.box(-t*.06,t*.06,r-n*.06,r+n*.06,-e*.42,-e*.18,d.metal,d.metal,O),i.lyingCyl("z",0,-e*.12,r-s*.3,r+s*.3,e*.24,s*.6,d.body,d.bodyTop,16,O);for(let a of[-o,o]){for(let l=0;l<16;l++){let c=l/16*Math.PI*2;i.seg(Math.cos(c)*s*.18,r+Math.sin(c)*s*.18,a,Math.cos(c)*s,r+Math.sin(c)*s,a,$)}$n(i,0,r,s,a,32),$n(i,0,r,s*.86,a,32),$n(i,0,r,s*.18,a,18)}for(let a of[0,Math.PI/2,Math.PI,Math.PI*3/2]){let l=Math.cos(a)*s,c=r+Math.sin(a)*s;i.seg(l,c,-o,l,c,o,O)}}function so(i,t,e,n,r,s,o=null){if(e==="fan_ceiling"||e==="fan_ceiling_light"){let g=new qn(i,t,(y,M)=>[y,M]),x=Math.min(n,r),_=x*.115,m=o==="3"?3:o==="4"?4:5;for(let y=0;y<m;y++){let M=y/m*360;g.rotated(0,0,M).loft([x*.08,x*.48,-_*.42,_*.42],[x*.105,x*.465,-_*.52,_*.52],0,s*.06,d.fabric,d.fabricTop,O)}g.cyl(0,0,x*.115,-s*.025,s*.07,d.dark,d.bodyTop,18,et);return}let a=Math.min(n,s*.42)*.46,l=-Math.max(.006,r*.012),c=-l,u=new at(d.bodyTop),f=new at(d.body),h=(g,x)=>[Math.cos(x)*g,Math.sin(x)*g];for(let g=0;g<3;g++){let x=g/3*Math.PI*2,_=[h(a*.14,x-.12),h(a*.46,x-.34),h(a*.84,x-.16),h(a*.72,x+.22),h(a*.24,x+.34)],m=(y,M)=>[y[0],y[1],M];for(let y=1;y<_.length-1;y++)i.tri(m(_[0],c),m(_[y],c),m(_[y+1],c),u),i.tri(m(_[0],l),m(_[y+1],l),m(_[y],l),f);for(let y=0;y<_.length;y++){let M=(y+1)%_.length;i.tri(m(_[y],l),m(_[M],c),m(_[M],l),f),i.tri(m(_[y],l),m(_[y],c),m(_[M],c),f),t.seg(m(_[y],c),m(_[M],c),O,Xt)}}new qn(i,t,(g,x)=>[g,x]).lyingCyl("z",0,0,-a*.14,a*.14,r*.1,a*.28,d.body,d.bodyTop,14,et)}function lv(i,t,e,n){let r=Math.min(e*.88,n*.92),s=(n-r)/2;i.lyingCyl("x",0,0,s,s+r,t*.9,r,d.white,d.whiteTop,22,O);for(let o of[-t*.46,t*.46])i.lyingCyl("x",o,0,s+r*.04,s+r*.96,t*.035,r*.92,d.white,d.whiteTop,18,$);for(let o of[-t*.28,t*.28])i.box(o-.025,o+.025,0,s+r*.25,-e*.42,-e*.28,d.metal,d.metal);for(let[o,a]of[[-t*.2,d.accent],[t*.2,d.fabricTop]])i.cyl(o,e*.05,Math.min(t,e)*.025,0,s+r*.18,a,a,10,$),i.cyl(o,e*.05,Math.min(t,e)*.04,s+r*.14,s+r*.2,d.metal,d.metal,10);i.box(t*.18,t*.4,s+r*.38,s+r*.68,e*.43,e*.48,d.body,d.glass,et),i.seg(t*.24,s+r*.53,e*.485,t*.35,s+r*.53,e*.485,et)}function cv(i,t,e,n){let r=Math.min(.035,t*.025),s=t/2-r;for(let o of[-1,1]){i.box(o*s-r,o*s+r,0,n,-e/2,-e/2+r*2,d.metal,d.metal,O),i.box(o*s-r,o*s+r,0,n,e/2-r*2,e/2,d.metal,d.metal,O);for(let a of[-e/2+r,e/2-r])i.box(o*s-r*2.2,o*s+r*2.2,0,r*1.2,a-r*2.5,a+r*2.5,d.dark,d.dark)}for(let o=0;o<7;o++){let a=-e/2+r+(e-2*r)*o/6;i.box(-t/2+r,t/2-r,n-r*2,n,a-r/2,a+r/2,d.metal,d.metal,$)}i.seg(-t/2,.05,-e/2,t/2,n-.05,-e/2,$),i.seg(t/2,.05,-e/2,-t/2,n-.05,-e/2,$),i.seg(-t/2,.05,e/2,t/2,n-.05,e/2,$),i.seg(t/2,.05,e/2,-t/2,n-.05,e/2,$)}var e0={air_conditioner:({b:i,w:t,d:e,h:n})=>(rv(i,t,e,n),!1),drying_rack:({b:i,w:t,d:e,h:n})=>(cv(i,t,e,n),.5),fan_ceiling:({b:i,w:t,d:e,h:n})=>(t0(i,t,e,n),!1),fan_ceiling_light:({b:i,w:t,d:e,h:n})=>(t0(i,t,e,n),!1),fan_floor:({b:i,w:t,d:e,h:n})=>(ov(i,t,e,n),.5),fan_wall:({b:i,w:t,d:e,h:n})=>(av(i,t,e,n),!1),radiator:({b:i,w:t,d:e,h:n})=>(iv(i,t,e,n),!1),water_heater:({b:i,w:t,d:e,h:n})=>(lv(i,t,e,n),!1),water_pump:({b:i,w:t,d:e,h:n})=>(sv(i,t,e,n),.5)};function uv(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let u=0;u<r;u++){let f=e/2-o*u,h=f-o,p=s*(u+1);i.box(-t/2,t/2,0,p,h,f,d.wood,d.woodTop),i.seg(-t/2,p,f,t/2,p,f,O)}i.seg(-t/2,0,e/2,-t/2,s,e/2,O);for(let u of[-t/2,t/2])i.seg(u,s,e/2,u,n,-e/2+o,$);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),et);for(let u=0;u<c;u+=3){let f=e/2-o*(u+.5),h=s*(u+1);i.seg(l,h,f,l,h+a,f,$)}}function hv(i,t,e,n){let r=Math.max(6,Math.round(n/.18)),s=Math.floor(r/2),o=r-s,a=n/r,l=a*s,c=Math.min(.16,t*.12),u=(t-c)/2,f=Math.min(e*.34,Math.max(e*.22,u)),h=-e/2+f,p=e-f,g=p/s,x=p/o,_=-t/2,m=-c/2,y=c/2,M=t/2;for(let P=0;P<s;P++){let E=e/2-g*P,D=E-g,U=a*(P+1);i.box(_,m,0,U,D,E,d.white,d.whiteTop),i.seg(_,U,E,m,U,E,O)}i.box(-t/2,t/2,0,l,-e/2,h,d.white,d.whiteTop,O);for(let P=0;P<o;P++){let E=h+x*P,D=E+x,U=l+a*(P+1);i.box(y,M,0,U,E,D,d.white,d.whiteTop),i.seg(y,U,E,M,U,E,O)}let v=Math.min(.9,Math.max(.55,n*.32)),S=[_+.03,m-.03],w=[y+.03,M-.03];for(let P of S){i.seg(P,a+v,e/2-g/2,P,l+v,h,et);for(let E=0;E<s;E+=3){let D=e/2-g*(E+.5),U=a*(E+1);i.seg(P,U,D,P,U+v,D,$)}}let A=Math.max(1,o-3);for(let P of w){i.seg(P,l+v,h,P,l+a*A+v,h+x*(A-.5),et);for(let E=0;E<A;E+=3){let D=h+x*(E+.5),U=l+a*(E+1);i.seg(P,U,D,P,U+v,D,$)}}let b=S[0],T=S[1],C=w[0],I=w[1],L=-e/2+.03;i.seg(T,l+v,h,C,l+v,h,et),i.seg(b,l+v,h,b,l+v,L,et),i.seg(b,l+v,L,I,l+v,L,et),i.seg(I,l+v,L,I,l+v,h,et);for(let[P,E]of[[T,h],[C,h],[b,h],[b,L],[I,L],[I,h]])i.seg(P,l,E,P,l+v,E,$)}function fv(i,t,e,n){let r=Math.min(t*.58,e*.22,n*.42),s=t*.66,o=e*.34,a=-e*.34;for(let l of[a,o])i.lyingCyl("x",0,l,0,r,s,r,d.dark,d.metal,14,O),i.lyingCyl("x",0,l,r*.16,r*.84,s+.012,r*.46,d.metal,d.metal,12,$);i.loft([-t*.3,t*.3,a,e*.12],[-t*.2,t*.2,-e*.18,e*.06],r*.45,n*.58,d.body,d.bodyTop,O),i.box(-t*.3,t*.3,r*.37,r*.44,-e*.08,e*.22,d.dark,d.metal,$),i.lyingCyl("z",t*.24,a-e*.04,r*.2,r*.47,e*.4,r*.25,d.metal,d.dark,10,$),i.pad(-t*.3,t*.3,n*.52,n*.62,-e*.25,e*.05,d.dark,d.fabricTop,.025,O),i.seg(-t*.18,n*.48,e*.02,-t*.08,n*.86,o,O),i.seg(t*.18,n*.48,e*.02,t*.08,n*.86,o,O),i.seg(-t*.19,r*.63,a,-t*.21,n*.54,-e*.12,$),i.seg(t*.19,r*.63,a,t*.21,n*.54,-e*.12,$),i.seg(-t*.36,n*.9,o,t*.36,n*.9,o,et),i.box(-t*.23,t*.23,n*.72,n*.98,o-e*.07,o+e*.07,d.body,d.bodyTop,O),i.cyl(0,o+e*.075,Math.min(t,e)*.07,n*.82,n*.94,d.white,d.accent,12,et);for(let l of[-1,1])i.seg(l*t*.22,n*.9,o,l*t*.39,n,o-e*.04,O),i.cyl(l*t*.39,o-e*.04,t*.045,n*.97,n,d.glass,d.metal,10,et);i.seg(-t*.31,n*.66,-e*.31,t*.31,n*.66,-e*.31,O)}function dv(i,t,e,n){let r=Math.min(.07,t*.035);for(let a of[-t/2+r,t/2-r])i.box(a-r/2,a+r/2,0,n,-r,r,d.metal,d.metal,O),i.box(a-e*.25,a+e*.25,0,r,-e*.36,e*.36,d.metal,d.metal,O);let s=-t/2+r,o=t/2-r;i.loft([s,-t*.14,-e*.34,e*.34],[s+.08,-t*.14,-e*.3,e*.3],n*.36,n*.42,d.fabric,d.fabricTop,$),i.loft([-t*.14,t*.14,-e*.34,e*.34],[-t*.13,t*.13,-e*.3,e*.3],n*.25,n*.31,d.fabric,d.fabricTop,$),i.loft([t*.14,o,-e*.34,e*.34],[t*.14,o-.08,-e*.3,e*.3],n*.36,n*.42,d.fabric,d.fabricTop,$),i.seg(s,n*.8,0,-t*.14,n*.42,0,O),i.seg(t*.14,n*.42,0,o,n*.8,0,O)}function pv(i,t,e,n){let r=Math.min(t,e);i.cyl(0,0,r*.08,0,n-.07,d.metal,d.metal,12),i.cyl(0,0,r*.22,n-.07,n,d.body,d.bodyTop,16,O);for(let[s,o]of[[0,-.38],[.38,0],[0,.38],[-.38,0]])i.cyl(s*t,o*e,r*.065,0,n*.52,d.metal,d.metal,10),i.cyl(s*t,o*e,r*.105,n*.52,n*.61,d.body,d.bodyTop,12,$)}function mv(i,t,e,n){let r=Math.min(t,e)*.46;i.cyl(0,0,r*.84,0,n*.08,d.metal,d.metal,12,O),i.cyl(0,0,r,n*.08,n*.92,d.metal,d.whiteTop,20,O);for(let s of[n*.28,n*.5,n*.72])for(let o=0;o<24;o++){let a=o/24*Math.PI*2,l=(o+1)/24*Math.PI*2;i.seg(Math.cos(a)*r,s,Math.sin(a)*r,Math.cos(l)*r,s,Math.sin(l)*r,$)}i.cyl(0,0,r*.18,n*.92,n,d.dark,d.bodyTop,12,$)}function n0(i,t,e,n,r){let s=Math.min(.12,t*.05);for(let l of[-t/2+s/2,t/2-s/2])i.box(l-s/2,l+s/2,0,n,-e/2,e/2,d.body,d.bodyTop,O);let o=r?2:Math.max(3,Math.round(t/.4)),a=t-2*s;for(let l=0;l<o;l++){let c=-a/2+a*l/o+s*.25,u=-a/2+a*(l+1)/o-s*.25;i.box(c,u,n*.08,n*.92,-e*.18,e*.18,r?d.metal:d.wood,r?d.metal:d.woodTop,$),r&&i.seg(l===0?u:c,n*.46,e*.2,l===0?u-.08:c+.08,n*.46,e*.2,et)}if(!r)for(let l of[n*.22,n*.76])i.box(-a/2,a/2,l-.025,l+.025,-e/2,e/2,d.wood,d.woodTop,O)}var i0={fence:({b:i,w:t,d:e,h:n})=>(n0(i,t,e,n,!1),.5),gate:({b:i,w:t,d:e,h:n})=>(n0(i,t,e,n,!0),.5),hammock:({b:i,w:t,d:e,h:n})=>(dv(i,t,e,n),.5),motorbike:({b:i,w:t,d:e,h:n})=>(fv(i,t,e,n),.5),stairs:({b:i,w:t,d:e,h:n})=>(uv(i,t,e,n),.5),stairs_landing:({b:i,w:t,d:e,h:n})=>(hv(i,t,e,n),.5),stone_table_set:({b:i,w:t,d:e,h:n})=>(pv(i,t,e,n),.5),water_tank:({b:i,w:t,d:e,h:n})=>(mv(i,t,e,n),.5)};function Zn(i,t,e,n,r){let s=r==="futon"?n*.72:n,o=r==="boxspring"?n*.42:r==="futon"?n*.22:n*.3,a=r==="boxspring"?n*.34:Math.min(.24,n*.3),l=r==="upholstered"?d.fabric:d.wood;i.box(-t/2,t/2,.08,o,-e/2,e/2,l,r==="upholstered"?d.fabricTop:d.woodTop,O),r==="boxspring"&&i.pad(-t/2,t/2,.08,o,-e/2,e/2,d.fabric,d.fabricTop,.04,O),i.pad(-t*.48,t*.48,o,o+a,-e*.47,e*.47,d.white,d.whiteTop,.035,$);let c=r==="upholstered"?.12:.075;r==="upholstered"?i.pad(-t/2,t/2,.08,s,-e/2,-e/2+c,d.fabric,d.cushion,.045,O):i.box(-t/2,t/2,.08,s,-e/2,-e/2+c,l,r==="futon"?d.woodTop:d.wood,O);let u=t<1.2?1:2,f=t*.84/u;for(let h=0;h<u;h++){let p=-t*.42+f*h+.035;i.pad(p,p+f-.07,o+a,o+a+.08,-e*.4,-e*.22,d.cushion,d.whiteTop,.025,$)}if(r==="upholstered")for(let h of[-t*.24,0,t*.24])i.seg(h,n*.48,-e/2-.002,h,n*.92,-e/2-.002,et)}function oo(i,t,e,n,r,s=!1){i.box(-t/2,t/2,0,n,-e/2,e/2,d.wood,d.woodTop,O);let o=e/2+.004;for(let a=1;a<r;a++){let l=-t/2+t*a/r;i.seg(l,.04,o,l,n-.04,o,$)}for(let a=0;a<r;a++){let l=-t/2+t*(a+.5)/r,c=a<r/2?1:-1;i.seg(l+c*t/r*.3,n*.45,o,l+c*t/r*.3,n*.58,o,et)}s&&i.box(-t*.14,t*.14,n*.08,n*.92,e/2+.006,e/2+.012,d.glass,d.glass,et)}function gv(i,t,e,n){let r=Math.min(t,e)*.48;i.box(-t/2,-t/2+r,0,n,-e/2,e/2,d.wood,d.woodTop,O),i.box(-t/2+r,t/2,0,n,-e/2,-e/2+r,d.wood,d.woodTop,O),i.seg(-t/2+r,.04,e/2,-t/2+r,n-.04,e/2,$),i.seg(t/2,.04,-e/2+r,t/2,n-.04,-e/2+r,$)}function ur(i,t,e,n,r,s=1){i.box(-t/2,t/2,0,n,-e/2,e/2,d.wood,d.woodTop,O);let o=e/2+.004;for(let a=1;a<r;a++)i.seg(-t/2+.025,n*a/r,o,t/2-.025,n*a/r,o,$);for(let a=1;a<s;a++)i.seg(-t/2+t*a/s,.03,o,-t/2+t*a/s,n-.03,o,$);for(let a=0;a<r;a++)for(let l=0;l<s;l++){let c=-t/2+t*(l+.5)/s,u=n*(a+.5)/r;i.seg(c-Math.min(.06,t/s*.16),u,o,c+Math.min(.06,t/s*.16),u,o,et)}for(let a of[-t*.4,t*.4])i.box(a-.02,a+.02,0,.06,-e*.4,e*.4,d.dark,d.dark)}function _v(i,t,e,n){i.box(-t/2,t/2,.48,.48+n,-e/2,e/2,d.wood,d.woodTop,O),i.seg(-t/2+.025,.48+n*.55,e/2+.004,t/2-.025,.48+n*.55,e/2+.004,$),i.seg(-t*.08,.48+n*.28,e/2+.006,t*.08,.48+n*.28,e/2+.006,et)}function xv(i,t,e,n){for(let r of[-t*.44,t*.44])i.box(r-.025,r+.025,0,n,-.025,.025,d.metal,d.metal,O);i.box(-t*.46,t*.46,n*.82,n*.86,-.025,.025,d.metal,d.metal,et),i.box(-t/2,t/2,0,.045,-e/2,e/2,d.wood,d.woodTop,$)}function bv(i,t,e,n){Zn(i,t,e,n*.46,"frame");for(let r of[-t*.47,t*.47])for(let s of[-e*.47,e*.47])i.box(r-.025,r+.025,0,n,s-.025,s+.025,d.wood,d.wood,O);i.box(-t*.48,t*.48,n*.94,n,-e*.48,-e*.45,d.wood,d.wood,$),i.box(-t*.48,t*.48,n*.94,n,e*.45,e*.48,d.wood,d.wood,$)}function r0(i,t,e,n,r=!1){i.box(-t/2,t/2,0,n,-e/2,e/2,d.wood,d.woodTop,O);let s=e/2+.005;i.seg(0,.04,s,0,n-.04,s,O),i.seg(-t*.46,n*.04,s,t*.46,n*.04,s,$),i.seg(-t*.46,n*.96,s,t*.46,n*.96,s,$),r&&i.box(-t*.42,t*.42,n*.86,n*.89,s,s+.012,d.accent,d.accent,et)}function yv(i,t,e,n){let r=Math.min(.38,Math.min(t,e)*.24);i.box(-t/2,-t/2+r,0,n,-e/2,e/2,d.wood,d.woodTop,O),i.box(-t/2+r,t/2,0,n,-e/2,-e/2+r,d.wood,d.woodTop,O);for(let s of[n*.32,n*.65])i.seg(-t/2,s,e/2,-t/2+r,s,e/2,$),i.seg(t/2,s,-e/2,t/2,s,-e/2+r,$)}function s0(i,t,e,n,r){let s=n*.48;i.box(-t/2,t/2,s-.06,s,-e/2,e/2,d.wood,d.woodTop,O);for(let o of[-t*.43,t*.43])i.box(o-.025,o+.025,0,s,-e*.38,e*.38,d.wood,d.wood);i.box(-t*.32,t*.32,s+.08,n,-e/2,-e/2+.035,d.glass,d.glass,r?et:O)}function vv(i,t,e,n){for(let r of[-t*.4,t*.4])i.box(r-.025,r+.025,0,n*.72,-e*.35,e*.35,d.wood,d.wood);i.pad(-t/2,t/2,n*.68,n,-e/2,e/2,d.fabric,d.cushion,.035,O)}function Mv(i,t,e,n){ur(i,t,e,n*.78,3),i.pad(-t/2,t/2,n*.78,n,-e/2,e/2,d.white,d.whiteTop,.04,O)}function Sv(i,t,e,n){i.box(-t*.46,t*.46,.08,n,-.035,.035,d.glass,d.glass,et),i.box(-t/2,t/2,0,.06,-e/2,e/2,d.wood,d.woodTop,O)}function Tv(i,t,e,n){i.pad(-t*.42,t*.42,.12,n*.45,-e*.3,e*.42,d.fabric,d.fabricTop,.05,O),i.pad(-t*.38,t*.38,n*.42,n,-e*.42,-e*.25,d.fabric,d.cushion,.04,O),i.box(t*.38,t/2,0,n*.52,-e/2,e/2,d.wood,d.woodTop,$)}function wv(i,t,e,n){i.box(-t/2,t/2,0,n*.28,-e/2,e/2,d.dark,d.dark,O),i.cyl(0,0,Math.min(t,e)*.42,n*.28,n,d.white,d.whiteTop,18,et)}var Ev=(i,t,e)=>({x0:-i*.44,x1:i*.44,y0:e*.22,y1:e*.27,z:t/2+.006}),Av=(i,t,e)=>({x0:-i*.42,x1:i*.42,y0:e*.86,y1:e*.89,z:t/2+.018}),Rv=(i,t,e)=>({x0:-i*.3,x1:i*.3,y0:e*.42,y1:e*.8,z:t*.43}),Cv=(i,t,e)=>({x0:-i*.33,x1:i*.33,y0:e*.55,y1:e*.96,z:-t/2-.004}),o0={bed_90:({b:i,w:t,d:e,h:n})=>(Zn(i,t,e,n,"frame"),.5),bed_140:({b:i,w:t,d:e,h:n})=>(Zn(i,t,e,n,"frame"),.5),bed_160:({b:i,w:t,d:e,h:n})=>(Zn(i,t,e,n,"frame"),.5),bed_180:({b:i,w:t,d:e,h:n})=>(Zn(i,t,e,n,"frame"),.5),bed_200:({b:i,w:t,d:e,h:n})=>(Zn(i,t,e,n,"frame"),.5),bed_upholstered_180:({b:i,w:t,d:e,h:n})=>(Zn(i,t,e,n,"upholstered"),.5),bed_boxspring_180:({b:i,w:t,d:e,h:n})=>(Zn(i,t,e,n,"boxspring"),.5),bed_futon_160:({b:i,w:t,d:e,h:n})=>(Zn(i,t,e,n,"futon"),.5),wardrobe_2door:({b:i,w:t,d:e,h:n})=>(oo(i,t,e,n,2),.5),wardrobe_3door:({b:i,w:t,d:e,h:n})=>(oo(i,t,e,n,3),.5),wardrobe_4door:({b:i,w:t,d:e,h:n})=>(oo(i,t,e,n,4),.5),wardrobe_6door:({b:i,w:t,d:e,h:n})=>(oo(i,t,e,n,6),.5),wardrobe_mirror:({b:i,w:t,d:e,h:n})=>(oo(i,t,e,n,3,!0),.5),wardrobe_corner:({b:i,w:t,d:e,h:n})=>(gv(i,t,e,n),.5),nightstand_drawer:({b:i,w:t,d:e,h:n})=>(ur(i,t,e,n,1),.5),nightstand_slim:({b:i,w:t,d:e,h:n})=>(ur(i,t,e,n,2),.5),nightstand_floating:({b:i,w:t,d:e,h:n})=>(_v(i,t,e,n),!1),dresser_80_3:({b:i,w:t,d:e,h:n})=>(ur(i,t,e,n,3),.5),dresser_140_6:({b:i,w:t,d:e,h:n})=>(ur(i,t,e,n,3,2),.5),chest_tall_5:({b:i,w:t,d:e,h:n})=>(ur(i,t,e,n,5),.5),clothes_rail:({b:i,w:t,d:e,h:n})=>(xv(i,t,e,n),.35),bed_canopy:({b:i,w:t,d:e,h:n})=>(bv(i,t,e,n),.5),wardrobe_sliding:({b:i,w:t,d:e,h:n})=>(r0(i,t,e,n),.5),closet_walkin:({b:i,w:t,d:e,h:n})=>(yv(i,t,e,n),.5),vanity_mirror:({b:i,w:t,d:e,h:n})=>(s0(i,t,e,n,!1),.5),bed_bench:({b:i,w:t,d:e,h:n})=>(vv(i,t,e,n),.5),changing_table:({b:i,w:t,d:e,h:n})=>(Mv(i,t,e,n),.5),mirror_floor:({b:i,w:t,d:e,h:n})=>(Sv(i,t,e,n),.35),chest_tall:({b:i,w:t,d:e,h:n})=>(ur(i,t,e,n,4),.5),reading_nook:({b:i,w:t,d:e,h:n})=>(Tv(i,t,e,n),.5),bed_ambient_180:({b:i,w:t,d:e,h:n})=>(Zn(i,t,e,n,"upholstered"),.5),wardrobe_light:({b:i,w:t,d:e,h:n})=>(r0(i,t,e,n,!0),.5),alarm_sunrise:({b:i,w:t,d:e,h:n})=>(wv(i,t,e,n),.35),vanity_light:({b:i,w:t,d:e,h:n})=>(s0(i,t,e,n,!0),.5)},a0={bed_ambient_180:Ev,wardrobe_light:Av,alarm_sunrise:Rv,vanity_light:Cv};function ao(i,t,e,n,r){ln(i,t,e-.02,n-.12,Math.max(1,Math.round(t/.48)),n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,d.white,d.whiteTop,O);for(let s=0;s<r;s++){let o=-t/2+t*(s+.5)/r,a=Math.min(t/r*.34,.24);i.cyl(o,.03,a,n-.006,n+.004,d.glass,d.glass,18,et),i.cyl(o,-e*.3,.018,n,n+.2,d.metal,d.metal,8),i.box(o-.015,o+.015,n+.16,n+.2,-e*.3,-e*.08,d.metal,d.metal)}}function Iv(i,t,e,n){i.loft([-t*.18,t*.18,-e*.2,e*.18],[-t*.28,t*.28,-e*.36,e*.36],0,n*.78,d.white,d.whiteTop,O),i.box(-t/2,t/2,n*.76,n,-e/2,e/2,d.white,d.whiteTop,O),i.cyl(0,.04,Math.min(t,e)*.3,n-.006,n+.004,d.glass,d.glass,18,et),i.cyl(0,-e*.3,.018,n,n+.2,d.metal,d.metal,8)}function l0(i,t,e,n,r){let s=r?.09:.07;i.box(-t/2,t/2,0,n-.02,-e/2,e/2,d.white,d.whiteTop,O),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+s,d.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-s,e/2,d.whiteTop),i.box(-t/2,-t/2+s,n-.02,n,-e/2+s,e/2-s,d.whiteTop),i.box(t/2-s,t/2,n-.02,n,-e/2+s,e/2-s,d.whiteTop),i.box(-t/2+s,t/2-s,n-.03,n-.02,-e/2+s,e/2-s,d.glass,d.glass,et),i.cyl(-t/2+s*.7,0,.02,n,n+.12,d.metal,d.metal,8)}function Pv(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,d.white,d.whiteTop,O),i.cyl(t*.08,e*.08,Math.min(t,e)*.38,n-.018,n+.003,d.glass,d.glass,24,et),i.box(-t*.42,t*.42,n-.02,n+.004,-e/2,-e*.34,d.whiteTop,d.whiteTop),i.box(-t/2,-t*.34,n-.02,n+.004,-e*.42,e*.42,d.whiteTop,d.whiteTop)}function Pl(i,t,e,n,r){i.box(-t/2,t/2,0,.045,-e/2,e/2,d.whiteTop,d.whiteTop,O),i.cyl(0,0,.04,.045,.05,d.metal,d.metal,10);let s=r==="corner"?[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]]:r==="niche"?[[-t/2,e/2,t/2,e/2]]:[[-t*.05,e/2,t/2,e/2],[t*.12,-e/2,t*.12,e/2]];for(let[o,a,l,c]of s)i.seg(o,.05,a,l,.05,c,et),i.seg(o,n,a,l,n,c,et),i.seg(o,.05,a,o,n,a,$),i.seg(l,.05,c,l,n,c,et);i.cyl(-t/2+.07,-e/2+.07,.015,.05,n-.08,d.metal,d.metal,7),i.cyl(-t/2+.2,-e/2+.2,.1,n-.1,n-.07,d.metal,d.metal,14,et)}function Lv(i,t,e,n){let r=Math.min(.025,Math.max(.01,e*.35));i.box(-t/2,t/2,0,.025,-r,r,d.metal,d.metal,et);for(let s of[-t/2,0,t/2])i.box(s-r,s+r,0,n,-r,r,d.metal,d.metal,et);i.seg(-t/2,n,0,t/2,n,0,et),i.seg(t*.32,n*.42,r+.003,t*.32,n*.62,r+.003,O)}function Fv(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,d.white,d.whiteTop,O),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,d.white,d.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,d.white,d.whiteTop,12,O)}var c0={bathtub:({b:i,w:t,d:e,h:n})=>(l0(i,t,e,n,!0),.5),bathtub_builtin:({b:i,w:t,d:e,h:n})=>(l0(i,t,e,n,!1),.5),bathtub_corner:({b:i,w:t,d:e,h:n})=>(Pv(i,t,e,n),.5),shower:({b:i,w:t,d:e,h:n})=>(Pl(i,t,e,n,"corner"),.5),shower_corner_90:({b:i,w:t,d:e,h:n})=>(Pl(i,t,e,n,"corner"),.5),shower_niche_120:({b:i,w:t,d:e,h:n})=>(Pl(i,t,e,n,"niche"),.5),shower_walkin_140:({b:i,w:t,d:e,h:n})=>(Pl(i,t,e,n,"walkin"),.5),shower_screen:({b:i,w:t,d:e,h:n})=>(Lv(i,t,e,n),.5),wc:({b:i,w:t,d:e,h:n})=>(Fv(i,t,e,n),.5),washbasin:({b:i,w:t,d:e,h:n})=>(ao(i,t,e,n,1),.5),vanity_60:({b:i,w:t,d:e,h:n})=>(ao(i,t,e,n,1),.5),vanity_80:({b:i,w:t,d:e,h:n})=>(ao(i,t,e,n,1),.5),vanity_100:({b:i,w:t,d:e,h:n})=>(ao(i,t,e,n,1),.5),double_vanity_120:({b:i,w:t,d:e,h:n})=>(ao(i,t,e,n,2),.5),pedestal_basin:({b:i,w:t,d:e,h:n})=>(Iv(i,t,e,n),.5)};function Dv(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,d.dark,d.body,O),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,et),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,d.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,d.white,d.whiteTop,O),$n(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,et);for(let a of[-1,1])$n(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,d.white,d.whiteTop,O),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,d.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,et);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,$)}function Uv(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,d.dark,d.body,O),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,d.dark,d.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,et),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,$)}function Nv(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,d.dark,d.body,O);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(u)*s,o+Math.sin(u)*s,e/2+.003,et)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,d.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,d.dark,d.body)}function Ov(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,d.white,d.whiteTop,O),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,$),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,$),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,d.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,d.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,et)}function Bv(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,d.white,d.whiteTop,O),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,et),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,$);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,d.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,d.dark,d.body,O),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,et),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,d.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,d.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,d.white,d.whiteTop,O);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,et)}}var u0={grid_point:({b:i,w:t,d:e,h:n})=>(Uv(i,t,e,n),.5),home_battery:({b:i,w:t,d:e,h:n,variant:r})=>(Bv(i,t,e,n,r),r==="wall"?!1:.5),inverter:({b:i,w:t,d:e,h:n,variant:r})=>(Dv(i,t,e,n,r),!1),meter:({b:i,w:t,d:e,h:n})=>(Ov(i,t,e,n),!1),wallbox:({b:i,w:t,d:e,h:n})=>(Nv(i,t,e,n),!1)};function hr(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),u=n*.5,f=Math.min(.24,e*.28);Ge(i,t,e,.07,.05,.05,d.wood,!0),i.pad(s,o,.07,u-.08,a+.02,l,d.fabric,d.fabricTop,.04,O),i.loft([s,o,a,a+f],[s+.01,o-.01,a,a+f*.5],u-.08,n,d.fabric,d.fabricTop,O),i.pad(s,s+c,u-.08,n*.72,a+.02,l-.02,d.fabric,d.fabricTop,.04,O),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,d.fabric,d.fabricTop,.04,O);let p=(o-c-(s+c))/r;for(let g=0;g<r;g++){let x=s+c+p*g+.02,_=x+p-.04;i.pad(x,_,u-.08,u+.05,a+f+.02,l-.06,d.cushion,d.cushion,.04),i.loft([x+.01,_-.01,a+f*.55,a+f+.14],[x+.03,_-.03,a+f*.4,a+f*.4+.06],u+.03,n*.93,d.cushion)}}function Bu(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);Ge(i,t,e,.08,.06,.03,d.wood,!0),i.box(o,a,.08,l,r+.06,s,d.wood,d.woodTop,O),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,d.white,d.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,d.wood,d.woodTop,O),i.box(o,a,n-.05,n,r,r+.09,d.wood,d.woodTop,$);let c=l+.2,u=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,s-.01,d.cushion,d.fabricTop,.025,$),i.lyingCyl("x",0,u+.05,c-.02,c+.09,t-.02,.1,d.cushion,d.fabricTop,8);let f=t>1.2?2:1,h=(t-.2)/f;for(let p=0;p<f;p++){let g=o+.1+h*p,x=r+.12,_=Math.min(.42,e*.2),m=.1;i.loft([g+.03+m,g+h-.03-m,x+m*.5,x+_-m*.5],[g+.03,g+h-.03,x,x+_],c,c+.06,d.whiteTop),i.loft([g+.03,g+h-.03,x,x+_],[g+.03+m,g+h-.03-m,x+m*.5,x+_-m*.5],c+.06,c+.12,d.whiteTop,d.whiteTop,$)}}function Vu(i,t,e,n){let r=Math.min(.46,n*.52);Ge(i,t,e,r-.04,.035,.02,d.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,d.wood,d.woodTop,O),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,d.cushion,d.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,d.wood,d.woodTop,O)}function zv(i,t,e,n){Ge(i,t,e,n-.04,.06,.05,d.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,d.wood,d.woodTop,et),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,d.body)}function kv(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,d.wood,d.woodTop,O),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,d.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,d.body,d.bodyTop,O);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,$);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,et);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,d.dark,d.dark,et),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,d.metal)}function h0(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,d.wood,d.woodTop,O),i.box(t/2-.025,t/2,0,n,-e/2,e/2,d.wood,d.woodTop,O),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,d.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,d.wood,d.woodTop,$),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let u=.03+c*7%5*.008,f=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+f,-e/2+.04,e/2-.05,c%3?d.fabric:d.cushion,d.fabricTop),l+=u+.006,c++}}}}function Vv(i,t,e,n){ln(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,d.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,d.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,d.dark,d.dark,et)}function f0(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,d.pot,d.pot,10,O),i.cyl(0,0,r*.08,s,n*.55,d.wood,d.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),u=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-s)*.16,d.plant,d.plantTop,8,a===o-1?$:null)}}function Gv(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,d.fabric,d.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,O)}function Hv(i,t,e,n){Ge(i,t,e,.12,.03,.04,d.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,d.wood,d.woodTop,O),cr(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function d0(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,d.wood,d.woodTop,O),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,d.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,$)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,et)}}function Wv(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,d.wood,d.woodTop,O),cr(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,d.body,d.bodyTop,O),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,d.wood,d.woodTop,O);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,d.metal,d.metal)}}function p0(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,d.wood,d.woodTop,O),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,d.wood,d.woodTop,O),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,d.cushion,d.cushion,$),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,d.wood,d.woodTop,O),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,d.wood,d.woodTop,O),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,d.cushion,d.cushion,$))}function Xv(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,d.metal,d.metal,12),i.cyl(0,0,.025,.02,n-.05,d.metal,d.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,d.metal,d.metal,12,$),i.cyl(0,0,r,n-.05,n,d.cushion,d.fabricTop,14,O)}function Yv(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,d.metal),i.box(-.03,.03,.04,.08,-r,r,d.metal),i.cyl(0,0,.06,.02,.1,d.dark,d.dark,8),i.cyl(0,0,.025,.1,.44,d.metal,d.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,d.fabric,d.cushion,O),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,d.fabric,d.fabricTop,O),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,d.metal)}function qv(i,t,e,n){Ge(i,t,e,.08,.04,.05,d.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,d.fabric,d.cushion,O)}function $v(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),d.wood,d.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,d.wood,d.woodTop,O),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,d.white,d.whiteTop,$),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,d.whiteTop,d.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,d.wood,d.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,O);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,$)}function Zv(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,d.metal,d.metal,12),i.cyl(0,0,.05,.03,n-.04,d.wood,d.wood,8),i.cyl(0,0,r,n-.04,n,d.wood,d.woodTop,20,O)}function Kv(i,t,e,n){Ge(i,t,e,n-.03,.04,.03,d.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,d.wood,d.woodTop,O),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,d.body,d.bodyTop,$)}function m0(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.42,0,.035,d.dark,d.dark,14),i.cyl(0,0,Math.min(.075,r*.18),.03,n-.045,d.metal,d.metal,10),i.cyl(0,0,r,n-.045,n,d.wood,d.woodTop,24,O)}function Jv(i,t,e,n){let r=Math.min(.1,Math.min(t,e)*.15);Ge(i,t-r,e-r,n-.035,.025,.03,d.metal),i.box(-t/2,t/2,n-.035,n,-e/2,e/2,d.glass,d.glass,et),i.box(-t/2+r,t/2-r,n*.28,n*.31,-e/2+r,e/2-r,d.glass,d.glass,$)}function Qv(i,t,e,n){let r=[[-t*.22,-e*.12,t*.58,e*.72,n],[t*.22,e*.12,t*.48,e*.62,n*.82]];for(let[s,o,a,l,c]of r){for(let f of[s-a/2+.025,s+a/2-.025])for(let h of[o-l/2+.025,o+l/2-.025])i.box(f-.025,f+.025,0,c-.03,h-.025,h+.025,d.metal);i.box(s-a/2,s+a/2,c-.03,c,o-l/2,o+l/2,d.wood,d.woodTop,O)}}function Fl(i,t,e,n,r,s){let o=Math.min(.035,Math.min(t/r,n/s)*.12);for(let a=0;a<=r;a++){let l=-t/2+t*a/r;i.box(l-o/2,l+o/2,0,n,-e/2,e/2,d.wood,d.woodTop,a===0||a===r?O:$)}for(let a=0;a<=s;a++){let l=n*a/s;i.box(-t/2,t/2,Math.max(0,l-o/2),Math.min(n,l+o/2),-e/2,e/2,d.wood,d.woodTop,a===0||a===s?O:$)}}function jv(i,t,e,n){i.box(-t/2,t/2,1.35,1.35+n,-e/2,e/2,d.wood,d.woodTop,O);for(let s of[-t*.34,t*.34])i.box(s-.018,s+.018,1.35,1.35+n,-e/2-.012,-e*.12,d.metal,d.metal,$)}function t1(i,t,e,n){let r=n*.72;Ge(i,t,e,r-.06,.055,.04,d.wood,!0),i.box(-t/2,t/2,r-.07,r,-e/2,e/2,d.wood,d.woodTop,O),i.box(-t*.43,t*.43,r-n*.22,r-.07,e/2-.045,e/2,d.wood,d.woodTop,$),i.cyl(0,e*.06,Math.min(t,e)*.085,r,r+n*.07,d.accent,d.woodTop,12,et),i.box(-t*.2,t*.2,r+n*.04,n,-e*.35,-e*.29,d.wood,d.woodTop,O)}function e1(i,t,e,n){let r=n*.7;ln(i,t,e,r,3,r*.58,!0);let s=e/2+.006;for(let o of[-t*.27,0,t*.27])i.seg(o,r*.18,s,o,r*.82,s,$);i.cyl(0,e*.08,Math.min(t,e)*.08,r,r+n*.06,d.accent,d.woodTop,12,et),i.box(-t*.19,t*.19,r+n*.04,n*.9,-e*.36,-e*.3,d.wood,d.woodTop,O),i.loft([-t*.28,t*.28,-e*.4,-e*.25],[-t*.22,t*.22,-e*.37,-e*.28],n*.9,n,d.wood,d.woodTop,O)}function n1(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,d.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,d.dark,d.dark,et)}function i1(i,t,e,n){let r=n*.68,s=Math.min(.09,t*.08);for(let o of[-t/2+s,t/2-s])for(let a of[-e/2+s,e/2-s])i.loft([o-s*.36,o+s*.36,a-s*.36,a+s*.36],[o-s/2,o+s/2,a-s/2,a+s/2],0,r-.03,d.wood,d.woodTop);i.box(-t/2,t/2,r-.08,r,-e/2,e/2,d.wood,d.woodTop,O),i.box(-t*.43,t*.43,n*.18,r-.1,e/2-.065,e/2,d.wood,d.woodTop,O);for(let o of[-t*.28,0,t*.28])i.seg(o,n*.23,e/2+.004,o,r-.16,e/2+.004,$);i.seg(-t*.12,n*.4,e/2+.006,0,n*.52,e/2+.006,et),i.seg(0,n*.52,e/2+.006,t*.12,n*.4,e/2+.006,et),i.seg(t*.12,n*.4,e/2+.006,0,n*.28,e/2+.006,et),i.seg(0,n*.28,e/2+.006,-t*.12,n*.4,e/2+.006,et),i.cyl(0,e*.06,Math.min(t,e)*.09,r,r+n*.075,d.accent,d.woodTop,14,et);for(let o of[-t*.035,0,t*.035])i.box(o-.006,o+.006,r+n*.06,r+n*.2,e*.05,e*.065,d.accent);for(let o of[-t*.28,t*.28])i.cyl(o,e*.02,Math.min(t,e)*.035,r,r+n*.035,d.metal,d.metal,10),i.cyl(o,e*.02,Math.min(t,e)*.017,r+n*.035,r+n*.15,d.metal,d.metal,8);i.box(-t*.18,t*.18,r+n*.04,n*.85,-e*.33,-e*.27,d.wood,d.woodTop,et),i.box(-t*.46,t*.46,n*.875,n*.92,-e*.42,e*.36,d.wood,d.woodTop,O);for(let o of[-t*.4,t*.4])i.box(o-s/2,o+s/2,r,n*.92,-e*.36,-e*.26,d.wood,d.woodTop,O);i.loft([-t/2,t/2,-e/2,e*.42],[-t*.42,t*.42,-e*.42,e*.31],n*.92,n,d.wood,d.woodTop,O)}function r1(i,t,e,n){let r=n*.18;i.box(-t/2,t/2,r,r+n*.14,-e/2,e/2,d.wood,d.woodTop,O),i.box(-t*.43,t*.43,r+n*.14,n*.86,-e/2,-e/2+Math.min(.05,e*.18),d.wood,d.woodTop,O);for(let s of[-t*.36,t*.36])i.box(s-.025,s+.025,0,r,-e/2,-e*.18,d.wood,d.woodTop,O),i.seg(s,n*.02,-e*.18,s,r,e*.34,O);i.loft([-t/2,t/2,-e/2,e/2],[-t*.42,t*.42,-e*.42,e*.36],n*.86,n,d.wood,d.woodTop,O),i.cyl(0,e*.08,Math.min(t,e)*.09,r+n*.14,r+n*.28,d.accent,d.woodTop,12,et);for(let s of[-t*.03,0,t*.03])i.box(s-.005,s+.005,r+n*.25,r+n*.5,e*.075,e*.09,d.accent)}function s1(i,t,e,n){i.box(-t*.43,t*.43,0,n*.06,-e*.34,e*.34,d.dark),ln(i,t,e,n-.025,Math.max(2,Math.round(t/.45)),n*.55,!0);for(let r of[n*.32,n*.63])i.seg(-t/2+.03,r,e/2+.003,t/2-.03,r,e/2+.003,$);for(let r of[-t*.25,t*.25])for(let s=-1;s<=1;s++)i.seg(r-t*.07,n*(.32+s*.018),e/2+.006,r+t*.07,n*(.32+s*.018),e/2+.006,$);i.box(-t/2,t/2,n-.025,n,-e/2,e/2,d.woodTop,d.woodTop,et)}function o1(i,t,e,n){let r=Math.min(.045,t*.04);for(let o of[-t/2+r,t/2-r])i.box(o-r,o+r,0,n*.64,-e/2+r,e/2-r,d.wood,d.woodTop,O);for(let o of[n*.18,n*.4])i.box(-t/2+r,t/2-r,o-r/2,o+r/2,-e/2+r,e/2-r,d.wood,d.woodTop,$);let s=Math.max(2,Math.round(t/.35));for(let o=1;o<s;o++)i.seg(-t/2+t*o/s,n*.08,e/2+.003,-t/2+t*o/s,n*.58,e/2+.003,$);i.pad(-t/2,t/2,n*.62,n,-e/2,e/2,d.cushion,d.fabricTop,.025,O)}function a1(i,t,e,n){let r=Math.min(.05,t*.035);i.box(-t/2,t/2,0,r,-e/2,e/2,d.wood,d.woodTop,O),i.box(-t/2,t/2,n-r,n,-e/2,e/2,d.wood,d.woodTop,O);let s=Math.max(5,Math.round(t/.22));for(let o=0;o<s;o++){let a=-t/2+t*(o+.5)/s;i.box(a-r/2,a+r/2,r,n-r,-e/2,e/2,o%2?d.wood:d.body,d.woodTop,$)}}function l1(i,t,e,n){let r=Math.min(.76,n*.52);i.box(-t/2,t/2,r-.06,r,-e/2,e/2,d.wood,d.woodTop,O);for(let s of[-t/2+.05,t/2-.05])i.box(s-.025,s+.025,0,r-.06,-e/2+.04,e/2-.04,d.wood);i.box(-t*.32,t*.32,r+.12,n,-e/2,-e/2+.025,d.glass,d.glass,et),i.box(-t*.2,t*.2,r-.01,r+.09,-e*.1,e*.18,d.body,d.bodyTop,O)}function c1(i,t,e,n){let r=Math.min(.045,t*.06);i.box(-t/2,t/2,n*.24,n*.32,-e/2,e/2,d.wood,d.woodTop,O),i.pad(-t/2+r,t/2-r,n*.32,n*.42,-e/2+r,e/2-r,d.white,d.whiteTop,.025);for(let s of[-e/2,e/2]){for(let o=0;o<7;o++){let a=-t/2+r+(t-2*r)*o/6;i.box(a-r/2,a+r/2,n*.3,n,s-r/2,s+r/2,d.wood,d.woodTop,$)}i.box(-t/2,t/2,n-r,n,s-r,s+r,d.wood,d.woodTop,O)}for(let s of[-t/2,t/2])i.box(s-r,s+r,0,n,-e/2,e/2,d.wood,d.woodTop,O)}function zu(i,t,e,n,r="left"){let s=Math.min(.9,e*.53),o=Math.min(.9,t*.38),a=n*.52,l=r==="left"?-t/2:t/2-o,c=r==="left"?-t/2+o:t/2,u=r==="left"?-t/2:t/2-Math.min(.2,o*.25),f=r==="left"?-t/2+Math.min(.2,o*.25):t/2,h=r==="left"?c:l;i.pad(-t/2,t/2,.08,a,-e/2,-e/2+s,d.fabric,d.fabricTop,.04,O),i.pad(l,c,.08,a,-e/2+s,e/2,d.fabric,d.fabricTop,.04,O),i.box(-t/2,t/2,a,n,-e/2,-e/2+Math.min(.2,s*.25),d.fabric,d.fabricTop,O),i.box(u,f,a,n,-e/2+s,e/2,d.fabric,d.fabricTop,O),i.seg(h,a+.01,-e/2+s*.1,h,a+.01,-e/2+s*.9,$)}function u1(i,t,e,n){hr(i,t,e,n,3);let r=n*.73,s=-e/2+Math.min(.22,e*.28)+.006;for(let o=0;o<2;o++)for(let a=0;a<7;a++){let l=-t*.34+t*.68*a/6+(o?t*.035:0);i.seg(l-.012,r+o*n*.12,s,l+.012,r+o*n*.12,s,et)}}function h1(i,t,e,n){let r=n*.5;Ge(i,t,e,.08,.045,.035,d.wood,!0),i.pad(-t/2,t/2,.08,r,-e/2+e*.18,e/2,d.fabric,d.fabricTop,.04,O),i.loft([-t/2,t/2,-e/2,-e/2+e*.22],[-t/2+.03,t/2-.03,-e/2,-e/2+e*.1],r,n,d.fabric,d.fabricTop,O);for(let s=1;s<3;s++)i.seg(-t/2+t*s/3,r+.006,-e*.18,-t/2+t*s/3,r+.006,e/2-.04,$)}function f1(i,t,e,n){let r=n*.5,s=Math.min(t*.36,.88),o=Math.min(e*.52,.82);i.pad(-t/2,t/2,.08,r,-e/2,-e/2+o,d.fabric,d.fabricTop,.04,O),i.pad(-t/2,-t/2+s,.08,r,-e/2+o,e/2,d.fabric,d.fabricTop,.04,O),i.box(-t/2,t/2,r,n,-e/2,-e/2+.18,d.fabric,d.fabricTop,O),i.pad(-t/2,-t/2+.18,r,n*.72,-e/2+.03,e/2,d.fabric,d.fabricTop,.035,O),i.pad(t/2-.18,t/2,r,n*.72,-e/2+.03,-e/2+o,d.fabric,d.fabricTop,.035,O)}function d1(i,t,e,n){let r=n*.5,s=Math.min(t*.27,.82),o=Math.min(e*.48,.82);i.pad(-t/2,t/2,.08,r,-e/2,-e/2+o,d.fabric,d.fabricTop,.04,O);for(let[a,l]of[[-t/2,-t/2+s],[t/2-s,t/2]])i.pad(a,l,.08,r,-e/2+o,e/2,d.fabric,d.fabricTop,.04,O);i.box(-t/2,t/2,r,n,-e/2,-e/2+.18,d.fabric,d.fabricTop,O);for(let a of[-t/2,t/2-.18])i.box(a,a+.18,r,n*.76,-e/2+.18,e/2,d.fabric,d.fabricTop,O)}function g0(i,t,e,n){let r=n*.48;i.pad(-t/2,t/2,.06,r,-e/2,e/2,d.fabric,d.fabricTop,.06,O),i.pad(-t/2,-t*.28,r,n*.78,-e/2,e/2,d.fabric,d.cushion,.05,O),i.pad(t*.28,t/2,r,n*.78,-e/2,e/2,d.fabric,d.cushion,.05,O),i.loft([-t/2,t/2,-e/2,-e*.2],[-t*.42,t*.42,-e/2,-e*.34],r,n,d.fabric,d.cushion,O)}function p1(i,t,e,n){g0(i,t,e,n*.72),i.loft([-t*.42,t*.42,-e/2,-e*.3],[-t/2,t/2,-e/2,-e*.34],n*.48,n,d.fabric,d.cushion,O);for(let r of[-t/2,t/2-t*.14])i.pad(r,r+t*.14,n*.68,n,-e/2,-e*.02,d.fabric,d.cushion,.04,O)}function m1(i,t,e,n){Vu(i,t*.86,e*.72,n);let r=.035;for(let s of[-t*.38,t*.38])i.seg(s,r,-e/2,s,.005,e*.3,O),i.seg(s,.005,e*.3,s,r,e/2,O);for(let s of[-e*.25,e*.25])i.seg(-t*.38,.05,s,t*.38,.05,s,$)}function g1(i,t,e,n){Fl(i,t,e,n,5,4);let r=t/5,s=n/4;for(let[o,a]of[[0,0],[2,0],[4,0],[1,1],[3,1],[0,2],[2,2],[4,2]]){let l=-t/2+r*(o+.5);i.box(l-r*.28,l+r*.28,s*a+.04,s*(a+1)-.05,-e*.18,e*.18,d.body,d.bodyTop,$)}}function _1(i,t,e,n){Ge(i,t,e,n-.12,.035,.035,d.wood,!0),i.box(-t/2,t/2,n-.12,n-.035,-e/2,e/2,d.wood,d.woodTop,O),i.box(-t/2,t/2,n-.035,n,-e/2,e/2,d.woodTop,d.woodTop,et),i.seg(0,n-.115,e/2+.004,0,n-.04,e/2+.004,$);for(let r of[-t*.25,t*.25])i.seg(r-.045,n-.077,e/2+.008,r+.045,n-.077,e/2+.008,et)}function x1(i,t,e,n){let r=n*.42;Ge(i,t,e,.09,.04,.04,d.wood,!0),i.pad(-t/2,t/2,.09,r,-e/2+e*.28,e/2,d.fabric,d.fabricTop,.05,O),i.loft([-t/2,t/2,-e/2,-e/2+e*.4],[-t*.44,t*.44,-e/2,-e/2+e*.2],r*.85,n,d.fabric,d.cushion,O),i.pad(-t/2,-t/2+t*.13,r,n*.62,-e/2+e*.22,e/2-.04,d.fabric,d.cushion,.035,$)}function b1(i,t,e,n){let r=n*.46;i.cyl(0,0,Math.min(t,e)*.42,.04,r,d.fabric,d.cushion,14,O),i.loft([-t/2,t/2,-e/2,e*.08],[-t*.38,t*.38,-e*.44,-e*.18],r*.7,n,d.fabric,d.cushion,O),i.pad(-t*.34,t*.34,r,r+n*.08,-e*.12,e*.34,d.cushion,d.fabricTop,.03,$)}function y1(i,t,e,n){let r=e*.58,s=n*.43,o=-e/2;i.pad(-t/2,t/2,.08,s,o,o+r,d.fabric,d.cushion,.05,O),i.loft([-t*.46,t*.46,o,o+r*.32],[-t*.4,t*.4,o,o+r*.16],s,n,d.fabric,d.cushion,O);for(let l of[-t/2,t/2-t*.14])i.pad(l,l+t*.14,s,n*.64,o+.03,o+r,d.fabric,d.cushion,.04,O);let a=e*.31;i.box(-t*.34,t*.34,0,s*.55,a-e*.14,a+e*.14,d.dark,d.dark),i.pad(-t*.4,t*.4,s*.5,s*.72,a-e*.16,a+e*.16,d.fabric,d.cushion,.04,O)}function v1(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.92,0,n*.28,d.fabric,d.cushion,16,O),i.loft([-r*.92,r*.92,-r*.92,r*.92],[-r*.58,r*.58,-r*.62,r*.62],n*.28,n*.78,d.fabric,d.cushion,$),i.loft([-r*.58,r*.58,-r*.62,r*.62],[-r*.18,r*.18,-r*.2,r*.2],n*.78,n,d.cushion,d.cushion,O)}function M1(i,t,e,n){Vu(i,t,e,n);let r=Math.min(.46,n*.52);i.pad(-t/2+.035,t/2-.035,r,r+.055,-e/2+.08,e/2-.025,d.fabric,d.cushion,.018,$),i.pad(-t/2+.04,t/2-.04,r+.08,n-.04,-e/2,-e/2+.065,d.fabric,d.cushion,.025,O)}function S1(i,t,e,n){let r=n*.5;i.cyl(0,0,Math.min(t,e)*.34,0,.025,d.metal,d.metal,12),i.cyl(0,0,.035,.025,r,d.metal,d.metal,8),i.loft([-t*.46,t*.46,-e*.38,e*.4],[-t*.4,t*.4,-e*.46,e*.2],r,n*.66,d.body,d.bodyTop,O),i.loft([-t*.4,t*.4,-e*.46,-e*.18],[-t*.3,t*.3,-e*.42,-e*.28],n*.66,n,d.body,d.bodyTop,O)}function ku(i,t,e,n){let r=Math.min(.1,n*.2);Ge(i,t,e,r,.025,.04,d.metal),i.box(-t/2,t/2,r,n,-e/2,e/2,d.wood,d.woodTop,O);let s=Math.max(2,Math.round(t/.55)),o=e/2+.005;for(let a=1;a<s;a++){let l=-t/2+t*a/s;i.seg(l,r+.03,o,l,n-.03,o,$)}i.seg(-t/2+.03,r+(n-r)*.52,o,t/2-.03,r+(n-r)*.52,o,$);for(let a=0;a<s;a++){let l=-t/2+t*(a+.5)/s;i.seg(l-.045,n*.58,o+.004,l+.045,n*.58,o+.004,et)}}function T1(i,t,e,n){ln(i,t,e,n,3,n*.58,!0);let r=e/2+.005;for(let s of[n*.34,n*.68])i.seg(-t/2+.03,s,r,t/2-.03,s,r,$)}function w1(i,t,e,n){hr(i,t,e,n,3);let r=-e/2+Math.min(.24,e*.28)+.008;for(let s=1;s<6;s++){let o=-t*.4+t*.8*s/6;i.seg(o,n*.56,r,o,n*.9,r,$)}}function E1(i,t,e,n){let r=Math.min(.025,t*.01),s=(t-r*2)/3,o=e*.58,a=n*.52;for(let l=0;l<3;l++){let c=-t/2+l*(s+r),u=c+s;i.pad(c,u,.07,a,-e/2,-e/2+o,d.fabric,d.fabricTop,.045,O),i.pad(c,u,a,n,-e/2,-e/2+e*.14,d.fabric,d.cushion,.04,O)}for(let l of[0,2]){let c=-t/2+l*(s+r);i.pad(c,c+s,.07,a,-e/2+o+r,e/2,d.fabric,d.fabricTop,.045,O)}}function Ll(i,t,e,n,r){let s=r?.075:.045;Ge(i,t,e,n-s,r?.085:.055,.05,d.wood,!0),i.box(-t/2,t/2,n-s,n,-e/2,e/2,d.wood,d.woodTop,O),r&&(i.box(-t*.38,t*.38,n-s-.1,n-s,-e*.36,e*.36,d.wood,d.woodTop,$),i.seg(-t*.38,n+.003,-e*.05,t*.38,n+.003,e*.04,et))}function A1(i,t,e,n){Ge(i,t,e,n-.08,.055,.045,d.wood,!0),i.pad(-t/2,t/2,n-.08,n,-e/2,e/2,d.fabric,d.cushion,.025,O)}function R1(i,t,e,n){let r=t*.9,s=Math.min(n*.56,r*.56),o=n-s;i.box(-t*.32,t*.32,0,.035,-e*.34,e*.34,d.metal,d.metal,O),i.box(-.045,.045,.035,o+s*.45,-e*.08,e*.08,d.metal,d.metal),i.box(-r/2,r/2,o,n,-.035,.035,d.dark,d.dark,et)}var C1=(i,t,e)=>{let n=i*.9,r=Math.min(e*.56,n*.56);return{x0:-n/2+.02,x1:n/2-.02,y0:e-r+.02,y1:e-.02,z:.039}};function I1(i,t,e,n){let r=n*.75;Ge(i,t,e,n*.1,.035,.035,d.dark),i.box(-t/2,t/2,n*.1,r,-e/2,e/2,d.dark,d.metal,O),i.box(-t*.34,t*.34,n*.25,n*.62,e/2,e/2+.012,d.glass,d.glass,et),i.box(-t*.25,t*.25,n*.28,n*.35,e/2+.014,e/2+.02,d.accent,d.accent,et),i.cyl(0,0,Math.min(t,e)*.13,r,n,d.dark,d.dark,12,$)}function P1(i,t,e,n){i.box(-t*.42,t*.42,0,n*.14,-e*.4,e*.4,d.dark,d.dark),i.pad(-t/2,t/2,n*.12,n,-e/2,e/2,d.fabric,d.cushion,.06,O),i.seg(0,n+.002,-e*.42,0,n+.002,e*.42,$),i.seg(-t*.42,n+.002,0,t*.42,n+.002,0,$)}function L1(i,t,e,n){let r=Math.min(.12,n*.22);Ge(i,t,e,r,.025,.04,d.metal),i.box(-t/2,t/2,r,n,-e/2,e/2,d.wood,d.woodTop,O);let s=Math.min(t*.38,.72),o=e/2+.004;i.box(-s/2,s/2,r+n*.13,n-n*.1,-e/2+.04,e/2+.008,d.dark,d.dark,$),i.seg(-s/2,r+(n-r)*.52,o,s/2,r+(n-r)*.52,o,$);for(let a of[-s/2,s/2])i.seg(a,r+.03,o,a,n-.03,o,O);for(let a of[-t*.34,t*.34])i.seg(a-.055,n*.53,o,a+.055,n*.53,o,et)}function F1(i,t,e,n){let r=Math.min(.055,t*.06),s=e/2;i.box(-t/2,t/2,0,r,-e/2,s,d.wood,d.woodTop,O),i.box(-t/2,t/2,n-r,n,-e/2,s,d.wood,d.woodTop,O);for(let a of[-t/2,t/2-r])i.box(a,a+r,r,n-r,-e/2,s,d.wood,d.woodTop,O);i.box(-t/2+r,t/2-r,r,n-r,-e/2,-e/2+.025,d.body,d.bodyTop);let o=Math.max(3,Math.round(n/.45));for(let a=1;a<o;a++){let l=n*a/o;i.box(-t/2+r,t/2-r,l-.018,l+.018,-e/2+.025,s-.025,d.glass,d.glass,$)}i.box(-t/2+r,-.012,r,n-r,s-.025,s,d.glass,d.glass,et),i.box(.012,t/2-r,r,n-r,s-.025,s,d.glass,d.glass,et);for(let a of[-.035,.035])i.box(a-.008,a+.008,n*.46,n*.59,s,s+.018,d.metal,d.metal)}function D1(i,t,e,n){let r=n*.5;i.pad(-t/2,t/2,.08,r,-e/2+e*.12,e/2,d.fabric,d.fabricTop,.04,O),i.pad(-t/2+.05,t/2-.05,r,r+.1,-e/2+e*.3,e/2-.04,d.cushion,d.fabricTop,.03,$),i.loft([-t/2,t/2,-e/2,-e/2+e*.22],[-t/2+.03,t/2-.03,-e/2,-e/2+e*.1],r,n,d.fabric,d.fabricTop,O),i.seg(0,r+.105,-e*.05,0,r+.105,e/2-.06,$)}var _0={altar:({b:i,w:t,d:e,h:n})=>(i1(i,t,e,n),.5),altar_table:({b:i,w:t,d:e,h:n})=>(t1(i,t,e,n),.5),altar_cabinet:({b:i,w:t,d:e,h:n})=>(e1(i,t,e,n),.5),altar_wall:({b:i,w:t,d:e,h:n})=>(r1(i,t,e,n),!1),armchair:({b:i,w:t,d:e,h:n})=>(hr(i,t,e,n,1),.5),club_chair:({b:i,w:t,d:e,h:n})=>(g0(i,t,e,n),.5),cocktail_chair:({b:i,w:t,d:e,h:n})=>(b1(i,t,e,n),.5),wingback_chair:({b:i,w:t,d:e,h:n})=>(p1(i,t,e,n),.5),recliner:({b:i,w:t,d:e,h:n})=>(y1(i,t,e,n),.5),rocking_chair:({b:i,w:t,d:e,h:n})=>(m1(i,t,e,n),.5),chaise_longue:({b:i,w:t,d:e,h:n})=>(x1(i,t,e,n),.5),bean_bag:({b:i,w:t,d:e,h:n})=>(v1(i,t,e,n),.5),chair_upholstered:({b:i,w:t,d:e,h:n})=>(M1(i,t,e,n),.5),chair_shell:({b:i,w:t,d:e,h:n})=>(S1(i,t,e,n),.5),bar_stool:({b:i,w:t,d:e,h:n})=>(Xv(i,t,e,n),.5),bed:({b:i,w:t,d:e,h:n})=>(Bu(i,t,e,n),.5),bed_double:({b:i,w:t,d:e,h:n})=>(Bu(i,t,e,n),.5),bed_single:({b:i,w:t,d:e,h:n})=>(Bu(i,t,e,n),.5),bench:({b:i,w:t,d:e,h:n})=>(p0(i,t,e,n,!1),.5),bunk_bed:({b:i,w:t,d:e,h:n})=>($v(i,t,e,n),.5),chair:({b:i,w:t,d:e,h:n})=>(Vu(i,t,e,n),.5),coat_rack:({b:i,w:t,d:e,h:n})=>(Wv(i,t,e,n),.5),coffee_table:({b:i,w:t,d:e,h:n})=>(Kv(i,t,e,n),.5),coffee_table_round:({b:i,w:t,d:e,h:n})=>(m0(i,t,e,n),.5),coffee_table_glass:({b:i,w:t,d:e,h:n})=>(Jv(i,t,e,n),.5),nesting_tables:({b:i,w:t,d:e,h:n})=>(Qv(i,t,e,n),.5),side_table_round:({b:i,w:t,d:e,h:n})=>(m0(i,t,e,n),.5),console_table:({b:i,w:t,d:e,h:n})=>(_1(i,t,e,n),.5),lowboard_120:({b:i,w:t,d:e,h:n})=>(ku(i,t,e,n),.5),lowboard_160:({b:i,w:t,d:e,h:n})=>(ku(i,t,e,n),.5),lowboard_200:({b:i,w:t,d:e,h:n})=>(ku(i,t,e,n),.5),highboard:({b:i,w:t,d:e,h:n})=>(T1(i,t,e,n),.5),chest_drawers_3:({b:i,w:t,d:e,h:n})=>(d0(i,t,e,n),.5),corner_bench:({b:i,w:t,d:e,h:n})=>(p0(i,t,e,n,!0),.5),crib:({b:i,w:t,d:e,h:n})=>(c1(i,t,e,n),.5),desk:({b:i,w:t,d:e,h:n})=>(kv(i,t,e,n),.5),dresser:({b:i,w:t,d:e,h:n})=>(d0(i,t,e,n),.5),nightstand:({b:i,w:t,d:e,h:n})=>(ln(i,t,e,n,1,n*.72,!0),i.seg(-t/2,n*.5,e/2-.02,t/2,n*.5,e/2-.02,$),.5),office_chair:({b:i,w:t,d:e,h:n})=>(Yv(i,t,e,n),.5),plant:({b:i,w:t,d:e,h:n})=>(f0(i,t,e,n),.35),planter_large:({b:i,w:t,d:e,h:n})=>(f0(i,t,e,n),.5),room_divider:({b:i,w:t,d:e,h:n})=>(a1(i,t,e,n),.5),rug:({b:i,w:t,d:e})=>(Gv(i,t,e),!1),shelf:({b:i,w:t,d:e,h:n})=>(h0(i,t,e,n),.5),bookshelf_wide:({b:i,w:t,d:e,h:n})=>(h0(i,t,e,n),.5),cube_shelf_2x2:({b:i,w:t,d:e,h:n})=>(Fl(i,t,e,n,2,2),.5),cube_shelf_4x2:({b:i,w:t,d:e,h:n})=>(Fl(i,t,e,n,4,2),.5),cube_shelf_4x4:({b:i,w:t,d:e,h:n})=>(Fl(i,t,e,n,4,4),.5),room_divider_shelf:({b:i,w:t,d:e,h:n})=>(g1(i,t,e,n),.5),floating_shelf:({b:i,w:t,d:e,h:n})=>(jv(i,t,e,n),!1),shoe_bench:({b:i,w:t,d:e,h:n})=>(o1(i,t,e,n),.5),shoe_cabinet:({b:i,w:t,d:e,h:n})=>(s1(i,t,e,n),.5),sideboard:({b:i,w:t,d:e,h:n})=>(Hv(i,t,e,n),.5),sofa:({b:i,w:t,d:e,h:n})=>(hr(i,t,e,n,Math.max(1,Math.round((t-.4)/.62))),.5),sofa_2:({b:i,w:t,d:e,h:n})=>(hr(i,t,e,n,2),.5),sofa_3:({b:i,w:t,d:e,h:n})=>(hr(i,t,e,n,3),.5),sofa_4:({b:i,w:t,d:e,h:n})=>(hr(i,t,e,n,4),.5),sofa_bed:({b:i,w:t,d:e,h:n})=>(D1(i,t,e,n),.5),sofa_l:({b:i,w:t,d:e,h:n})=>(zu(i,t,e,n),.5),sofa_corner_left:({b:i,w:t,d:e,h:n})=>(zu(i,t,e,n,"left"),.5),sofa_corner_right:({b:i,w:t,d:e,h:n})=>(zu(i,t,e,n,"right"),.5),sofa_chesterfield:({b:i,w:t,d:e,h:n})=>(u1(i,t,e,n),.5),sofa_velvet_3:({b:i,w:t,d:e,h:n})=>(w1(i,t,e,n),.5),sofa_modular_5:({b:i,w:t,d:e,h:n})=>(E1(i,t,e,n),.5),sofa_armless:({b:i,w:t,d:e,h:n})=>(h1(i,t,e,n),.5),sofa_chaise:({b:i,w:t,d:e,h:n})=>(f1(i,t,e,n),.5),sofa_u:({b:i,w:t,d:e,h:n})=>(d1(i,t,e,n),.5),ottoman:({b:i,w:t,d:e,h:n})=>(P1(i,t,e,n),.5),tv_console:({b:i,w:t,d:e,h:n})=>(L1(i,t,e,n),.5),display_cabinet:({b:i,w:t,d:e,h:n})=>(F1(i,t,e,n),.5),stool:({b:i,w:t,d:e,h:n})=>(qv(i,t,e,n),.5),table:({b:i,w:t,d:e,h:n})=>(zv(i,t,e,n),.5),table_120:({b:i,w:t,d:e,h:n})=>(Ll(i,t,e,n,!1),.5),table_160:({b:i,w:t,d:e,h:n})=>(Ll(i,t,e,n,!1),.5),table_200:({b:i,w:t,d:e,h:n})=>(Ll(i,t,e,n,!1),.5),table_solid_220:({b:i,w:t,d:e,h:n})=>(Ll(i,t,e,n,!0),.5),bench_dining_160:({b:i,w:t,d:e,h:n})=>(A1(i,t,e,n),.5),table_round:({b:i,w:t,d:e,h:n})=>(Zv(i,t,e,n),.5),tall_cabinet:({b:i,w:t,d:e,h:n})=>(ln(i,t,e,n,1,n*.5),.5),tv_board:({b:i,w:t,d:e,h:n})=>(Vv(i,t,e,n),.5),tv_stand:({b:i,w:t,d:e,h:n})=>(R1(i,t,e,n),.5),tv_wall:({b:i,w:t,d:e,h:n})=>(n1(i,t,e,n),!1),wood_stove:({b:i,w:t,d:e,h:n})=>(I1(i,t,e,n),.5),vanity:({b:i,w:t,d:e,h:n})=>(l1(i,t,e,n),.5),wardrobe:({b:i,w:t,d:e,h:n})=>(ln(i,t,e,n,Math.max(2,Math.round(t/.5)),n*.5),.5)},x0={tv_stand:C1};var b0=.06;function U1(i,t,e,n){let r=Math.max(1,Math.round(t/.6));ln(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,d.whiteTop,d.whiteTop,O)}function N1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,d.white,d.whiteTop,O);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,$);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,et),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,et)}function O1(i,t,e,n){let r=e/2-b0;i.box(-t/2,t/2,.02,n,-e/2,r,d.body,d.bodyTop,O),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,d.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,$),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,$))}function Gu(i,t,e,n,r){let s=i.p.length;B1(i,t,e,n,r),t.mirror&&lr(i,s)}function B1(i,t,e,n,r){let s=t.rotation*ie,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,S)=>[t.x+l*v*o-S*a,t.z+l*v*a+S*o],u=e+.05,f=e+t.h-.02,h=new at(.75,.1,.14),p=new at(d.dark),g=new at(d.accent),x=t.w/2-.006,_=(v,S,w)=>{let A=w/m,b=new at(2043212).lerp(h,A),T=new at(d.body).lerp(h,A*.8),C=Math.cos(w),I=Math.sin(w),L=(D,U)=>c(v+S*(D*C-U*I),t.d/2+D*I+U*C),P=(D,U,N,k)=>{let[z,G,V,it]=D;i.tri([z[0],U,z[1]],[G[0],U,G[1]],[V[0],N,V[1]],k),i.tri([z[0],U,z[1]],[V[0],N,V[1]],[it[0],N,it[1]],k)},E=(D,U,N,k,z,G,V,it=V)=>{let Z=[L(D,G),L(U,G),L(U,z),L(D,z)];P([Z[0],Z[1],Z[1],Z[0]],N,k,it),P([Z[3],Z[2],Z[2],Z[3]],N,k,V),P([Z[0],Z[3],Z[3],Z[0]],N,k,V),P([Z[1],Z[2],Z[2],Z[1]],N,k,V),P([Z[0],Z[1],Z[2],Z[3]],k,k,V),P([Z[3],Z[2],Z[1],Z[0]],N,N,V)};return E(0,x,u,f,-b0,0,T,b),E(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,g),E},m=1.83;_(-t.w/2,1,n*m)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,p),_(t.w/2,-1,r*m)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,p)}function z1(i,t,e,n){ln(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,d.dark,d.dark,O);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,d.dark,1451583,12,et)}}function k1(i,t,e,n){ln(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,d.whiteTop,d.whiteTop,O),i.box(r/2,t/2,n-.04,n,-e/2,e/2,d.whiteTop,d.whiteTop,O),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,d.whiteTop,d.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,d.whiteTop,d.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,d.metal,d.metal,et),i.cyl(0,-e/2+.05,.02,n,n+.28,d.metal,d.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,d.metal)}function V1(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,d.body,d.bodyTop,O),cr(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function G1(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,d.body,d.bodyTop,O),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,d.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,d.dark,d.dark,et),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,et);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,$);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,et),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,et)}function H1(i,t,e,n){let r=Math.min(.055,t*.075),s=e/2,o=-e/2,a=Math.min(.62,n*.3);i.box(-t/2,t/2,.02,n,o,o+.035,d.body,d.bodyTop,O),i.box(-t/2,-t/2+r,.02,n,o,s,d.body,d.bodyTop,O),i.box(t/2-r,t/2,.02,n,o,s,d.body,d.bodyTop,O),i.box(-t/2,t/2,n-r,n,o,s,d.body,d.bodyTop,O),i.box(-t/2,t/2,.02,a,o,s-.015,d.body,d.bodyTop,O),i.box(-t/2+.02,t/2-.02,0,.08,o+.02,s-.04,d.dark),i.box(-t/2+r,t/2-r,a,n-r,o+.036,o+.05,d.dark,d.dark);for(let l of[a+(n-a)*.25,a+(n-a)*.5,a+(n-a)*.75])i.box(-t/2+r,t/2-r,l-.012,l+.012,o+.05,s-.025,d.glass,d.glass,et);i.box(-t/2+r,-r*.35,a+r,n-r*1.5,s-.012,s,d.glass,d.glass,$),i.box(r*.35,t/2-r,a+r,n-r*1.5,s-.012,s,d.glass,d.glass,$),i.box(-r*.35,r*.35,a,n-r,s-.02,s+.005,d.metal,d.metal,O),i.box(-t/2,t/2,a-r*.5,a+r*.5,s-.02,s+.005,d.body,d.bodyTop,O),i.seg(-r*1.4,a+(n-a)*.46,s+.012,-r*1.4,a+(n-a)*.62,s+.012,et),i.seg(r*1.4,a+(n-a)*.46,s+.012,r*1.4,a+(n-a)*.62,s+.012,et),i.seg(0,.12,s+.012,0,a-.12,s+.012,$)}function W1(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,d.body,d.bodyTop,O),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,d.dark),cr(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,d.whiteTop,d.whiteTop,O)}function X1(i,t,e,n){i.box(-t*.16,t*.16,n*.42,n,-e/2,-e*.18,d.metal,d.metal,O),i.loft([-t/2,t/2,-e/2,e/2],[-t*.18,t*.18,-e/2,-e*.1],0,n*.48,d.metal,d.whiteTop,O),i.box(-t*.4,t*.4,0,n*.06,e*.18,e/2,d.dark,d.dark,et)}function Y1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,d.body,d.bodyTop,O),i.box(-t*.4,t*.18,n*.17,n*.82,e/2,e/2+.006,d.dark,d.glass,et),i.cyl(t*.34,e/2+.008,Math.min(t,n)*.055,n*.58,n*.69,d.accent,d.accent,10,et),i.seg(t*.28,n*.34,e/2+.009,t*.4,n*.34,e/2+.009,$)}function q1(i,t,e,n){let r=n*.8,s=e/2;i.box(-t*.46,t*.46,.025,r,-e/2,s,d.white,d.whiteTop,O),i.box(-t*.48,t*.48,0,.035,-e*.44,e*.44,d.dark,d.dark),i.box(-t*.42,t*.42,.055,r-.035,s,s+.012,d.white,d.whiteTop,O),i.seg(-t*.4,r*.28,s+.014,t*.4,r*.28,s+.014,$),i.seg(-t*.28,r*.58,s+.015,t*.28,r*.58,s+.015,et),i.seg(-t*.2,r*.62,s+.015,t*.2,r*.62,s+.015,$),i.box(-t/2,t/2,r-.025,r,-e/2,e/2,d.white,d.whiteTop,O);let o=Math.min(.012,t*.03),a=t*.1,l=-e*.16,c=e*.08,u=6718637;i.cyl(a,l,o*1.55,r,r+o*1.8,u,u,12,O),i.cyl(a,c,t*.16,r,r+.01,d.whiteTop,d.whiteTop,18,$),i.seg(a-t*.1,r+.012,c,a+t*.1,r+.012,c,$),i.seg(a,r+.012,c-e*.11,a,r+.012,c+e*.11,$);let f=n*.925,h=n*.055,p=(l+c)/2,g=(c-l)/2,x=[[r+o,l],[f,l]];for(let _=1;_<=8;_++){let m=Math.PI-Math.PI*_/8;x.push([f+Math.sin(m)*h,p+Math.cos(m)*g])}x.push([n*.89,c]),i.tubeYZ(a,x,o,u,10),i.cyl(a,c,o*1.25,n*.89-o,n*.905,d.dark,u,10,$),i.lyingCyl("x",a+t*.055,l,r+o*1.6,r+o*2.5,t*.15,o*.9,d.dark,u,8)}function $1(i,t,e,n){let r=Math.max(.42,Math.min(t,e)*.46);i.box(-t/2,t/2,0,n-.04,-e/2,-e/2+r,d.body,d.bodyTop,O),i.box(-t/2,-t/2+r,0,n-.04,-e/2+r,e/2,d.body,d.bodyTop,O),i.box(-t/2,t/2,n-.04,n,-e/2,-e/2+r,d.whiteTop,d.whiteTop,et),i.box(-t/2,-t/2+r,n-.04,n,-e/2+r,e/2,d.whiteTop,d.whiteTop,et),i.seg(-t/2+r,.08,-e/2+r,-t/2+r,n-.08,-e/2+r,$);let s=-e/2+r+.006,o=-t/2+r+.006;for(let a=1;a<3;a++){let l=-t/2+r+(t-r)*a/3;i.seg(l,.08,s,l,n-.08,s,$);let c=-e/2+r+(e-r)*a/3;i.seg(o,.08,c,o,n-.08,c,$)}i.seg(-t/2+r+.08,n*.72,s+.004,-t/2+r+.22,n*.72,s+.004,et),i.seg(o+.004,n*.72,-e/2+r+.08,o+.004,n*.72,-e/2+r+.22,et)}var y0={fridge:({b:i,w:t,d:e,h:n})=>(N1(i,t,e,n),.5),fridge_smart:({b:i,w:t,d:e,h:n})=>(O1(i,t,e,n),.5),island:({b:i,w:t,d:e,h:n})=>(W1(i,t,e,n),.5),kitchen:({b:i,w:t,d:e,h:n})=>(U1(i,t,e,n),.5),kitchen_corner:({b:i,w:t,d:e,h:n})=>($1(i,t,e,n),.5),kitchen_display:({b:i,w:t,d:e,h:n})=>(H1(i,t,e,n),.5),kitchen_tall:({b:i,w:t,d:e,h:n})=>(G1(i,t,e,n),.5),kitchen_wall:({b:i,w:t,d:e,h:n})=>(V1(i,t,e,n),!1),microwave:({b:i,w:t,d:e,h:n,base:r})=>(Y1(i,t,e,n),r>.05?!1:.5),range_hood:({b:i,w:t,d:e,h:n})=>(X1(i,t,e,n),!1),sink:({b:i,w:t,d:e,h:n})=>(k1(i,t,e,n),.5),stove:({b:i,w:t,d:e,h:n})=>(z1(i,t,e,n),.5),water_purifier:({b:i,w:t,d:e,h:n})=>(q1(i,t,e,n),.5)};function Z1(i,t,e,n){let r=t*.56,s=n*.45,o=n*.38;i.box(-t/2,t/2,0,n,-e/2,-e/2+.06,d.wood,d.woodTop,O),i.box(-r/2,r/2,o,o+s,e/2-.045,e/2,d.dark,d.dark,et),i.box(-t/2,t/2,.04,n*.2,-e/2,e/2,d.wood,d.woodTop,O);for(let a of[-1,1]){let l=a<0?-t/2:t*.37,c=a<0?-t*.37:t/2;i.box(l,c,n*.23,n*.92,-e/2+.04,e*.22,d.wood,d.woodTop,O);for(let u of[n*.45,n*.68])i.seg(l+.025,u,e*.225,c-.025,u,e*.225,$)}}var K1=(i,t,e)=>({x0:-i*.28+.02,x1:i*.28-.02,y0:e*.38+.02,y1:e*.83-.02,z:t/2+.004});function J1(i,t,e,n){let r=e*.48;i.box(-t/2,t/2,0,n,-e/2,-e/2+r,d.wood,d.woodTop,O);let s=n*.58;i.box(-t*.43,t*.43,s,s+.055,-e/2+r,e*.05,d.white,d.whiteTop,O);for(let o=1;o<14;o++){let a=-t*.43+t*.86*o/14;i.seg(a,s+.057,-e/2+r,a,s+.057,e*.05,$)}i.box(-t*.32,t*.32,0,n*.36,e*.16,e/2,d.wood,d.woodTop,O),i.box(-t*.38,t*.38,n*.36,n*.43,e*.12,e/2,d.fabric,d.cushion,O)}function Q1(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.44,0,n*.35,d.pot,d.pot,12,O);for(let s=0;s<7;s++){let o=s/7*Math.PI*2,a=Math.cos(o)*r*.2,l=Math.sin(o)*r*.2;i.seg(0,n*.3,0,a,n*.87,l,$),i.cyl(a,l,r*.08,n*.72,n,d.wood,d.woodTop,7,s<3?et:null)}}function j1(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.38,0,n*.25,d.pot,d.pot,12,O),i.cyl(0,0,r*.07,n*.2,n*.8,d.wood,d.wood,7);for(let s=0;s<8;s++){let o=s/8*Math.PI*2,a=Math.cos(o)*r*.38,l=Math.sin(o)*r*.38,c=n*(.42+s%3*.14);i.rotated(a,l,o*180/Math.PI).loft([-r*.28,r*.28,-.03,.03],[-r*.08,r*.08,-.02,.02],c,c+n*.12,d.plant,d.plantTop,$)}}function t2(i,t,e,n){i.cyl(0,0,Math.min(t,e)/2,0,n,d.fabric,d.fabricTop,28,$)}function e2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,d.dark,d.metal,O),i.box(-t*.42,t*.42,n*.14,n*.82,e/2,e/2+.012,d.glass,d.glass,et);for(let r=0;r<6;r++){let s=-t*.34+t*.68*r/5;i.loft([s-.045,s+.045,e/2+.014,e/2+.024],[s-.012,s+.012,e/2+.014,e/2+.024],n*.18,n*(.43+r%2*.1),d.accent,d.accent,et)}}var v0={media_wall_tv:({b:i,w:t,d:e,h:n})=>(Z1(i,t,e,n),.5),piano_upright:({b:i,w:t,d:e,h:n})=>(J1(i,t,e,n),.5),vase_pampas:({b:i,w:t,d:e,h:n})=>(Q1(i,t,e,n),.35),plant_monstera:({b:i,w:t,d:e,h:n})=>(j1(i,t,e,n),.4),rug_round:({b:i,w:t,d:e,h:n})=>(t2(i,t,e,n),!1),fireplace_wall_electric:({b:i,w:t,d:e,h:n})=>(e2(i,t,e,n),.25)},M0={media_wall_tv:K1};function n2(i,t,e,n){i.box(-t/2,t/2,Math.max(0,n-.04),n,-e/2,e/2,d.whiteTop,d.whiteTop,O)}function i2(i,t,e){let r=[[-t/2,-e/2],[t/2,-e/2],[t/2,e/2],[-t/2,e/2]];for(let s=0;s<4;s++)i.seg(r[s][0],.012,r[s][1],r[(s+1)%4][0],.012,r[(s+1)%4][1],$);i.seg(-t*.15,.012,e/2-.45,0,.012,e/2-.2,O),i.seg(0,.012,e/2-.2,t*.15,.012,e/2-.45,O)}function r2(i,t,e,n){i.box(-t*.38,t*.38,0,n*.05,-e/2-e*.02,-e*.1,d.dark,d.body,$),i.box(-t*.32,t*.32,n*.04,n*.92,-e/2,-e*.18,d.body,d.bodyTop,O),i.box(-t*.34,t*.34,n*.9,n,-e/2-e*.01,-e*.17,d.metal,d.bodyTop,O),i.box(-t*.23,t*.23,n*.75,n*.82,-e*.175,-e*.15,d.accent,d.accent,et),i.box(-t*.22,t*.22,n*.02,n*.055,-e*.18,e*.17,d.dark,d.bodyTop,$)}function s2(i,t,e,n){let r=Math.min(.055,t*.07);i.box(-t*.48,t*.48,0,n*.045,-e*.48,e*.4,d.dark,d.bodyTop,$);for(let s of[-t*.43,t*.43])i.box(s-r/2,s+r/2,n*.04,n*.7,-e*.44,e*.28,d.body,d.bodyTop,O);i.box(-t*.45,t*.45,n*.06,n*.52,-e*.48,-e*.42,d.body,d.bodyTop,$),i.box(-t/2,t/2,n*.69,n*.84,-e/2,e*.42,d.body,d.metal,O),i.loft([-t*.33,t*.33,-e*.17,e*.34],[-t*.27,t*.27,-e*.12,e*.27],n*.05,n*.31,d.white,d.whiteTop,O),i.box(-t*.23,t*.23,n*.16,n*.22,e*.325,e*.345,d.accent,d.accent,et);for(let s of[-t*.29,t*.29])i.lyingCyl("x",s,e*.08,n*.015,n*.145,r*2,n*.13,d.dark,d.metal,10,$)}var S0={parking:({b:i,w:t,d:e})=>(i2(i,t,e),!1),robot_mower:({b:i,w:t,d:e,h:n})=>(s2(i,t,e,n),!1),robot_vacuum:({b:i,w:t,d:e,h:n})=>(r2(i,t,e,n),!1),stairwell:()=>!1,worktop:({b:i,w:t,d:e,h:n})=>(n2(i,t,e,n),!1)};function o2(i,t,e,n){i.pad(-t/2,t/2,0,n,-e/2,e/2,d.white,d.whiteTop,Math.min(.04,t*.1),O);let r=e/2+.006;i.cyl(0,e/2,t*.095,n*.69,n*.705,d.dark,d.dark,18,et);for(let s=0;s<7;s++){let o=n*(.16+s*.055);i.seg(-t*.34,o,r,t*.34,o,r,$)}for(let s=-3;s<=3;s++)i.seg(s*t*.085,n+.003,-e*.27,s*t*.085,n+.003,e*.22,$)}function a2(i,t,e,n){let r=Math.min(t,e)*.46;i.cyl(0,0,r,n*.06,n*.9,d.dark,d.fabricTop,18,O),i.cyl(0,0,r*.94,n*.9,n,d.dark,d.dark,18,et),i.cyl(0,0,r*.72,n,n+.006,d.dark,d.dark,18,$);for(let s of[-t*.12,t*.12])i.cyl(s,0,t*.014,n+.007,n+.01,d.white,d.white,8)}function l2(i,t,e,n){i.box(-t*.28,t*.28,1.85,1.85+n*.7,-e/2,-e/2+e*.12,d.white,d.whiteTop,O),i.box(-t*.08,t*.08,1.85+n*.3,1.85+n*.45,-e/2+e*.1,0,d.metal,d.metal,$),i.lyingCyl("z",0,e*.16,1.85+n*.17,1.85+n*.78,e*.58,n*.58,d.white,d.whiteTop,14,O),i.lyingCyl("z",0,e*.47,1.85+n*.28,1.85+n*.67,e*.08,n*.38,d.dark,d.dark,16,et),i.lyingCyl("z",0,e*.515,1.85+n*.38,1.85+n*.57,e*.025,n*.18,d.accent,d.dark,14)}function c2(i,t,e,n){let s=e/2;i.pad(-t/2,t/2,.95,.95+n,-e/2,s,d.dark,d.metal,Math.min(.018,t*.12),O);for(let o=0;o<3;o++)for(let a=0;a<3;a++){let l=(a-1)*t*.22,c=.95+n*(.7-o*.105);i.seg(l-t*.025,c,s+.005,l+t*.025,c,s+.005,et)}i.cyl(0,s,t*.12,.95+n*.22,.95+n*.235,d.accent,d.dark,14,et),i.lyingCyl("x",t*.22,s+e*.12,.95+n*.31,.95+n*.4,t*.75,n*.085,d.metal,d.metal,10,O)}function u2(i,t,e,n){let r=n*.96;i.lyingCyl("x",0,-e*.18,r,n,t,e*.16,d.metal,d.metal,10,O),i.box(-t*.06,t*.06,r-n*.055,r+n*.015,-e*.28,e*.02,d.dark,d.dark,et);let s=t*.12,o=6;for(let a of[-1,1]){let l=a<0?-t/2:s,u=((a<0?-s:t/2)-l)/o;for(let f=0;f<o;f++){let h=l+f*u,p=f%2?e*.12:-e*.04;i.box(h,h+u*.82,n*.04,r,p-e*.18,p+e*.18,d.fabric,d.fabricTop,f===0||f===o-1?O:null)}}}function h2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,d.dark,d.bodyTop,O),i.box(-t*.42,t*.42,n*.06,n*.94,e*.48,e*.515,d.glass,d.glass,$);for(let r=0;r<7;r++){let s=n*(.16+r*.105);i.box(-t*.34,t*.34,s,s+n*.035,e*.505,e*.535,r%3===1?d.metal:d.bodyTop,d.bodyTop,$)}i.box(-t*.22,t*.22,n*.82,n*.86,e*.525,e*.545,d.accent,d.accent,et),i.cyl(t*.38,e*.525,t*.018,n*.48,n*.5,d.metal,d.metal,8,$)}function f2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,d.dark,d.bodyTop,O);let r=t*.035,s=(t*.72-r*3)/4;for(let o=0;o<4;o++){let a=-t*.36+o*(s+r);i.box(a,a+s,n*.13,n*.86,e*.49,e*.525,d.body,d.metal,$),i.box(a+s*.18,a+s*.82,n*.18,n*.205,e*.52,e*.54,d.accent,d.accent,et)}i.cyl(t*.41,e*.52,t*.025,n*.7,n*.73,d.accent,d.accent,10,et)}function d2(i,t,e,n){let r=Math.min(t,e)*.47;i.cyl(0,0,r,0,n*.58,d.white,d.whiteTop,16,O),i.cyl(0,0,r*.82,n*.58,n,d.white,d.whiteTop,16,$),i.seg(-t*.16,n*.18,e*.455,t*.16,n*.18,e*.455,et)}function p2(i,t,e,n){i.pad(-t/2,t/2,1.35,1.35+n,-e/2,e/2,d.body,d.bodyTop,Math.min(.018,t*.1),O),i.box(-t*.37,t*.37,1.35+n*.34,1.35+n*.82,e*.48,e*.54,d.glass,d.glass,et),i.box(-t*.28,t*.28,1.35+n*.12,1.35+n*.22,e*.5,e*.55,d.metal,d.metal,$)}function m2(i,t,e,n){let r=Math.min(t,e)*.47;i.cyl(0,0,r,0,n*.7,d.white,d.whiteTop,16,O),i.cyl(0,0,r*.78,n*.7,n,d.white,d.whiteTop,16,$);for(let s=0;s<8;s++){let o=s/8*Math.PI*2,a=Math.cos(o)*r*.62,l=Math.sin(o)*r*.62;i.cyl(a,l,r*.055,n*.12,n*.16,d.dark,d.dark,6)}i.seg(-t*.1,n*.12,e*.46,t*.1,n*.12,e*.46,et)}function g2(i,t,e,n){i.box(-t/2,t/2,1.85,1.85+n,-e/2,e/2,d.body,d.bodyTop,O),i.loft([-t*.32,t*.32,e*.42,e*.56],[-t*.25,t*.25,e*.45,e*.58],1.85+n*.48,1.85+n*.82,8003636,16725592,et),i.box(-t*.23,t*.23,1.85+n*.13,1.85+n*.25,e*.48,e*.56,d.accent,d.accent,$)}function _2(i,t,e,n){i.box(-t/2,t/2,.85,.85+n,-e/2,e/2,d.body,d.bodyTop,O),i.box(-t*.43,t*.43,.85+n*.07,.85+n*.93,e*.47,e*.54,d.glass,d.glass,$);for(let s=0;s<3;s++)for(let o=0;o<5;o++){let a=(o-2)*t*.145,l=.85+n*(.22+s*.25);i.box(a-t*.045,a+t*.045,l,l+n*.075,e*.51,e*.56,s===0?d.accent:d.metal,d.metal,$)}}function x2(i,t,e,n){i.pad(-t/2,t/2,0,n,-e/2,e/2,d.dark,d.bodyTop,Math.min(.025,t*.06),O),i.box(-t*.32,t*.32,n*.58,n*.78,e*.49,e*.54,d.glass,d.glass,et),i.cyl(0,e*.51,t*.045,n*.4,n*.43,d.accent,d.accent,10,$);for(let r=0;r<4;r++)i.seg(-t*.28,n*(.12+r*.06),e*.51,t*.28,n*(.12+r*.06),e*.51,$)}function b2(i,t,e,n){i.pad(-t/2,t/2,0,n*.62,-e/2,e/2,d.body,d.bodyTop,Math.min(.018,n*.12),O);for(let r of[-t*.38,t*.38])i.cyl(r,-e*.35,t*.025,n*.2,n,d.dark,d.metal,8,$);for(let r=-2;r<=2;r++)i.cyl(r*t*.095,e*.48,t*.012,n*.2,n*.23,r===0?d.accent:d.metal,r===0?d.accent:d.metal,6,et)}function y2(i,t,e,n){i.box(-t/2,t/2,n*.04,n,-e/2,e/2,d.white,d.whiteTop,O),i.box(-t*.42,t*.2,n*.17,n*.82,e*.5,e*.54,d.dark,d.dark,$);for(let r=0;r<6;r++){let s=n*(.23+r*.09);i.box(-t*.4,t*.18,s,s+n*.025,e*.535,e*.555,d.bodyTop,d.bodyTop,$)}i.box(t*.29,t*.43,n*.2,n*.8,e*.5,e*.54,d.body,d.bodyTop,$),i.box(t*.32,t*.41,n*.62,n*.69,e*.53,e*.56,d.accent,d.accent,et)}function v2(i,t,e,n){let r=Math.min(t,e)*.45;i.cyl(0,0,r,n*.035,n*.94,d.white,d.whiteTop,18,O),i.cyl(0,0,r*.88,n*.94,n,d.white,d.whiteTop,18,$),i.box(-t*.12,t*.12,n*.57,n*.66,e*.44,e*.49,d.glass,d.glass,et);for(let s of[-t*.18,t*.18])i.cyl(s,0,t*.035,0,n*.05,d.metal,d.metal,8,$)}function M2(i,t,e,n){i.box(-t/2,t/2,1.8,1.8+n,-e/2,-e*.18,d.white,d.whiteTop,O);let s=Math.min(t,n)*.38;i.lyingCyl("z",0,e*.12,1.8+n*.12,1.8+n*.12+s*2,e*.52,s*2,d.dark,d.bodyTop,16,O);for(let o=0;o<6;o++){let a=1.8+n*(.24+o*.09);i.seg(-t*.34,a,e*.42,t*.34,a,e*.42,$)}}function S2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,d.body,d.bodyTop,O),i.box(-t*.34,t*.34,n*.12,n*.56,e*.49,e*.54,d.dark,d.dark,$),i.box(-t*.35,t*.35,n*.61,n*.69,e*.49,e*.55,d.accent,d.accent,et),i.box(t*.12,t*.31,n*.78,n*.84,e*.5,e*.55,d.accent,d.accent,$);for(let r=-2;r<=2;r++)i.seg(r*t*.11,n+.003,-e*.22,r*t*.11,n+.003,e*.18,$)}function T2(i,t,e,n){i.box(-t*.48,t*.48,n*.18,n,-e*.2,e*.2,d.dark,d.bodyTop,O),i.box(-t*.39,t*.39,n*.35,n*.89,e*.19,e*.24,d.glass,d.glass,et),i.box(-t*.28,t*.28,n*.03,n*.17,-e*.03,e*.25,d.body,d.bodyTop,O)}function w2(i,t,e,n){i.pad(-t/2,t/2,1.05,1.05+n,-e/2,e/2,d.white,d.whiteTop,Math.min(.012,t*.12),O),i.box(-t*.32,t*.32,1.05+n*.14,1.05+n*.82,e*.42,e*.55,d.body,d.bodyTop,$),i.seg(-t*.16,1.05+n*.2,e*.56,t*.16,1.05+n*.2,e*.56,et)}function E2(i,t,e,n){i.pad(-t/2,t/2,.3,.3+n,-e/2,e/2,d.white,d.whiteTop,Math.min(.012,t*.12),O);for(let s of[-t*.17,t*.17])i.cyl(s,e*.51,t*.065,.3+n*.38,.3+n*.43,d.dark,d.dark,8,$);i.seg(-t*.12,.3+n*.18,e*.55,t*.12,.3+n*.18,e*.55,et)}function A2(i,t,e,n){i.pad(-t/2,t/2,.3,.3+n,-e/2,e/2,d.body,d.bodyTop,Math.min(.014,t*.12),O),i.cyl(0,e*.49,t*.27,.3+n*.28,.3+n*.34,d.dark,d.dark,14,$),i.box(-t*.25,t*.25,.3+n*.1,.3+n*.17,e*.48,e*.56,d.accent,d.accent,et)}function R2(i,t,e,n){i.pad(-t/2,t/2,1.9,1.9+n,-e/2,e/2,d.white,d.whiteTop,Math.min(.014,t*.13),O),i.loft([-t*.38,t*.38,e*.4,e*.55],[-t*.27,t*.27,e*.43,e*.58],1.9+n*.3,1.9+n*.78,d.glass,d.glass,et);for(let s=0;s<3;s++)i.seg(-t*.23,1.9+n*(.39+s*.1),e*.59,t*.23,1.9+n*(.39+s*.1),e*.59,$)}function C2(i,t,e,n){i.pad(-t/2,t*.12,1.1,1.1+n,-e/2,e/2,d.white,d.whiteTop,Math.min(.008,n*.14),O),i.pad(t*.24,t/2,1.1+n*.12,1.1+n*.88,-e*.42,e*.42,d.metal,d.metal,Math.min(.006,n*.1),$),i.seg(-t*.28,1.1+n*.16,e*.54,-t*.03,1.1+n*.16,e*.54,et)}function I2(i,t,e,n){let r=Math.min(t,e)*.47;i.cyl(0,0,r,0,n,d.white,d.whiteTop,12,O),i.cyl(0,e*.12,r*.2,n,n*1.08,d.accent,d.accent,8,et);for(let s of[-t*.24,t*.24])i.box(s-t*.055,s+t*.055,0,n*.12,-e*.18,e*.18,d.metal,d.metal,$)}function P2(i,t,e,n){i.pad(-t/2,t/2,1.35,1.35+n,-e/2,e/2,d.white,d.whiteTop,Math.min(.012,t*.12),O),i.box(-t*.35,t*.35,1.35+n*.3,1.35+n*.78,e*.46,e*.55,d.glass,d.glass,et),i.seg(-t*.22,1.35+n*.18,e*.56,t*.22,1.35+n*.18,e*.56,$)}function L2(i,t,e,n){i.pad(-t/2,t/2,1.25,1.25+n,-e/2,e/2,d.dark,d.bodyTop,Math.min(.012,t*.18),O),i.cyl(0,e*.48,t*.25,1.25+n*.67,1.25+n*.7,d.glass,d.glass,12,et),i.cyl(0,e*.49,t*.2,1.25+n*.18,1.25+n*.21,d.body,d.bodyTop,12,$),i.seg(-t*.18,1.25+n*.1,e*.56,t*.18,1.25+n*.1,e*.56,et)}var T0={air_purifier:({b:i,w:t,d:e,h:n})=>(o2(i,t,e,n),.5),smart_speaker:({b:i,w:t,d:e,h:n})=>(a2(i,t,e,n),.5),security_camera:({b:i,w:t,d:e,h:n})=>(l2(i,t,e,n),!1),smart_lock:({b:i,w:t,d:e,h:n})=>(c2(i,t,e,n),!1),smart_curtain:({b:i,w:t,d:e,h:n})=>(u2(i,t,e,n),!1),network_cabinet:({b:i,w:t,d:e,h:n})=>(h2(i,t,e,n),.5),nas_server:({b:i,w:t,d:e,h:n})=>(f2(i,t,e,n),.5),access_point:({b:i,w:t,d:e,h:n})=>(d2(i,t,e,n),!1),wall_thermostat:({b:i,w:t,d:e,h:n})=>(p2(i,t,e,n),!1),smoke_detector:({b:i,w:t,d:e,h:n})=>(m2(i,t,e,n),!1),siren_alarm:({b:i,w:t,d:e,h:n})=>(g2(i,t,e,n),!1),electrical_panel:({b:i,w:t,d:e,h:n})=>(_2(i,t,e,n),!1),ups_unit:({b:i,w:t,d:e,h:n})=>(x2(i,t,e,n),.5),heat_pump_outdoor:({b:i,w:t,d:e,h:n})=>(y2(i,t,e,n),.5),hot_water_tank:({b:i,w:t,d:e,h:n})=>(v2(i,t,e,n),.5),ventilation_fan:({b:i,w:t,d:e,h:n})=>(M2(i,t,e,n),!1),humidifier:({b:i,w:t,d:e,h:n})=>(S2(i,t,e,n),.5),wall_switch:({b:i,w:t,d:e,h:n})=>(w2(i,t,e,n),!1),wall_outlet:({b:i,w:t,d:e,h:n})=>(E2(i,t,e,n),!1),smart_plug:({b:i,w:t,d:e,h:n})=>(A2(i,t,e,n),!1),motion_sensor:({b:i,w:t,d:e,h:n})=>(R2(i,t,e,n),!1),contact_sensor:({b:i,w:t,d:e,h:n})=>(C2(i,t,e,n),!1),water_leak_sensor:({b:i,w:t,d:e,h:n})=>(I2(i,t,e,n),.5),temperature_humidity_sensor:({b:i,w:t,d:e,h:n})=>(P2(i,t,e,n),!1),video_doorbell:({b:i,w:t,d:e,h:n})=>(L2(i,t,e,n),!1),modem_router:({b:i,w:t,d:e,h:n,base:r})=>(b2(i,t,e,n),r>.05?!1:.5),smart_display:({b:i,w:t,d:e,h:n,base:r})=>(T2(i,t,e,n),r>.05?!1:.5)};function Dl(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,et)}}function F2(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,d.body,d.bodyTop,O),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,d.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,et),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,d.whiteTop,d.whiteTop,O)}function w0(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,d.white,d.whiteTop,O);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,$),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,et);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42);Dl(i,0,o,a,s),r||Dl(i,0,o,a*.72,s)}function D2(i,t,e,n){let r=Math.min(.035,n*.025),s=(n-r)/2,o=e/2-.012;for(let a=0;a<2;a++){let l=a*(s+r);i.box(-t/2,t/2,l,l+s,-e/2,e/2-.02,d.white,d.whiteTop,O),i.seg(-t/2,l+s-.14,o,t/2,l+s-.14,o,$),i.seg(t/2-.16,l+s-.07,o,t/2-.08,l+s-.07,o,et);let c=l+(s-.14)/2+.04,u=Math.min(t*.34,(s-.2)*.42);Dl(i,0,c,u,o),a===0&&Dl(i,0,c,u*.72,o+.002)}i.box(-t*.46,t*.46,s,s+r,-e*.46,e*.46,d.dark,d.metal,$)}function U2(i,t,e,n){let r=Math.min(.045,t*.035);for(let o of[-t*.4,t*.4])i.box(o-r,o+r,0,n*.88,-e*.32,-e*.23,d.metal,d.metal,O),i.box(o-r,o+r,0,n*.62,e*.23,e*.32,d.metal,d.metal,O);i.loft([-t/2,t/2,-e*.43,e*.43],[-t/2,t/2,-e*.38,e*.48],n*.88,n*.98,d.dark,d.glass,et);let s=n*.985;for(let o=1;o<6;o++)i.seg(-t/2+t*o/6,s,-e*.37,-t/2+t*o/6,s,e*.47,$);for(let o=1;o<3;o++)i.seg(-t/2,s,-e*.37+e*.84*o/3,t/2,s,-e*.37+e*.84*o/3,$);i.box(-t*.16,t*.16,n*.34,n*.48,e*.2,e*.34,d.body,d.bodyTop,O),i.seg(-t*.1,n*.43,e*.345,t*.1,n*.43,e*.345,et)}var A0={dishwasher:({b:i,w:t,d:e,h:n})=>(F2(i,t,e,n),.5),washer:({b:i,w:t,d:e,h:n})=>(w0(i,t,e,n,!1),.5),dryer:({b:i,w:t,d:e,h:n})=>(w0(i,t,e,n,!0),.5),washer_dryer_tower:({b:i,w:t,d:e,h:n})=>(D2(i,t,e,n),.5),balcony_solar:({b:i,w:t,d:e,h:n})=>(U2(i,t,e,n),.5)},E0=(i,t,e)=>{let n=(e-.14)/2+.04,r=Math.min(i*.36,(e-.2)*.42)*.8;return{x0:-r,x1:r,y0:n-r,y1:n+r,z:t/2-.004}},R0={dishwasher:(i,t,e)=>({x0:-i/2+.06,x1:i/2-.06,y0:e-.16,y1:e-.08,z:t/2-.004}),washer:E0,dryer:E0,washer_dryer_tower:(i,t,e)=>({x0:i*.22,x1:i*.39,y0:e*.91,y1:e*.96,z:t/2-.004}),balcony_solar:(i,t,e)=>({x0:-i*.1,x1:i*.1,y0:e*.4,y1:e*.46,z:t*.35})};var N2={..._0,...o0,...v0,...y0,...c0,...i0,...e0,...T0,...u0,...S0,...A0},O2={...a0,...x0,...M0,...R0};function C0(i,t){let e=N2[i];return e?e(t):null}function I0(i,t,e,n){let r=O2[i];return r?r(t,e,n):void 0}function Xu(i,t){let e=B2(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function B2(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=Td(i.type);if(s){let l=t?mn(t,i):0,c=(s.x-s.w/2)*e,u=(s.x+s.w/2)*e,f=Math.min(.02,(u-c)*.05);return{x0:c+f,x1:u-f,y0:l+s.y*r+f,y1:l+(s.y+s.h)*r-f,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?mn(t,i)-qs(i):0,a=z2(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function z2(i,t,e,n,r){let s=I0(i.type,t,e,n);if(s!==void 0)return s;if(i.type==="tv_board"){let o=Math.min(t*.8,1.45),a=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+a,z:-e/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:o+.02,y1:o+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let o=r?mn(r,i):0;return{x0:.06,x1:t/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:Cl+.02,y1:Cl+n-.02,z:e/2+.004};if(i.type==="air_conditioner")return{x0:-t*.43,x1:t*.43,y0:Il+n*.08,y1:Il+n*.27,z:e/2+.008};if(i.type==="water_pump")return{x0:-t*.1,x1:t*.1,y0:n*.56,y1:n*.65,z:e*.3+.004};if(i.type==="water_heater"){let o=Math.min(e*.88,n*.92),a=(n-o)/2;return{x0:t*.18,x1:t*.4,y0:a+o*.38,y1:a+o*.68,z:e*.48+.006}}return i.type==="range_hood"?{x0:-t*.4,x1:t*.4,y0:.005,y1:n*.06,z:e/2+.003}:i.type==="microwave"?{x0:-t*.4,x1:t*.18,y0:n*.17,y1:n*.82,z:e/2+.008}:i.type==="water_purifier"?{x0:-t*.28,x1:t*.28,y0:n*.8*.56,y1:n*.8*.64,z:e/2+.016}:i.type==="air_purifier"?{x0:-t*.11,x1:t*.11,y0:n*.66,y1:n*.74,z:e/2+.008}:i.type==="robot_mower"?{x0:-t*.22,x1:t*.22,y0:n*.16,y1:n*.24,z:e*.31+.008}:i.type==="smart_speaker"?{x0:-t*.42,x1:t*.42,y0:n*.9,y1:n+.008,z:e*.05}:i.type==="security_camera"?{x0:-t*.12,x1:t*.12,y0:1.85+n*.37,y1:1.85+n*.58,z:e*.53}:i.type==="smart_lock"?{x0:-t*.36,x1:t*.36,y0:.95+n*.43,y1:.95+n*.78,z:e/2+.006}:i.type==="network_cabinet"?{x0:-t*.22,x1:t*.22,y0:n*.82,y1:n*.86,z:e*.545}:i.type==="nas_server"?{x0:-t*.34,x1:t*.34,y0:n*.18,y1:n*.205,z:e*.54}:i.type==="access_point"?{x0:-t*.16,x1:t*.16,y0:n*.12,y1:n*.24,z:e*.47}:i.type==="wall_thermostat"?{x0:-t*.37,x1:t*.37,y0:1.35+n*.34,y1:1.35+n*.82,z:e*.54}:i.type==="smoke_detector"?{x0:-t*.1,x1:t*.1,y0:n*.05,y1:n*.22,z:e*.47}:i.type==="siren_alarm"?{x0:-t*.32,x1:t*.32,y0:1.85+n*.48,y1:1.85+n*.82,z:e*.58}:i.type==="electrical_panel"?{x0:-t*.34,x1:t*.34,y0:.85+n*.2,y1:.85+n*.8,z:e*.56}:i.type==="ups_unit"?{x0:-t*.32,x1:t*.32,y0:n*.58,y1:n*.78,z:e*.54}:i.type==="modem_router"?{x0:-t*.25,x1:t*.25,y0:n*.16,y1:n*.3,z:e*.54}:i.type==="heat_pump_outdoor"?{x0:t*.32,x1:t*.41,y0:n*.62,y1:n*.69,z:e*.56}:i.type==="hot_water_tank"?{x0:-t*.12,x1:t*.12,y0:n*.57,y1:n*.66,z:e*.49}:i.type==="ventilation_fan"?{x0:-t*.12,x1:t*.12,y0:1.8+n*.44,y1:1.8+n*.58,z:e*.45}:i.type==="humidifier"?{x0:-t*.35,x1:t*.35,y0:n*.61,y1:n*.69,z:e*.55}:i.type==="smart_display"?{x0:-t*.39,x1:t*.39,y0:n*.35,y1:n*.89,z:e*.24}:i.type==="wall_switch"?{x0:-t*.2,x1:t*.2,y0:1.05+n*.13,y1:1.05+n*.25,z:e*.56}:i.type==="wall_outlet"?{x0:-t*.16,x1:t*.16,y0:.3+n*.12,y1:.3+n*.24,z:e*.56}:i.type==="smart_plug"?{x0:-t*.25,x1:t*.25,y0:.3+n*.1,y1:.3+n*.17,z:e*.56}:i.type==="motion_sensor"?{x0:-t*.27,x1:t*.27,y0:1.9+n*.3,y1:1.9+n*.78,z:e*.59}:i.type==="contact_sensor"?{x0:-t*.28,x1:-t*.03,y0:1.1+n*.1,y1:1.1+n*.24,z:e*.54}:i.type==="water_leak_sensor"?{x0:-t*.2,x1:t*.2,y0:n*.72,y1:n*1.08,z:e*.12}:i.type==="temperature_humidity_sensor"?{x0:-t*.35,x1:t*.35,y0:1.35+n*.3,y1:1.35+n*.78,z:e*.55}:i.type==="video_doorbell"?{x0:-t*.2,x1:t*.2,y0:1.25+n*.06,y1:1.25+n*.18,z:e*.56}:null}function Hu(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new at(1-r,1-r,1-r),a=new at(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],u=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],f=p=>[p[0],l,p[1]],h=i.p.length;i.tri(f(c[0]),f(c[1]),f(c[2]),o),i.tri(f(c[0]),f(c[2]),f(c[3]),o);for(let p=0;p<4;p++){let g=(p+1)%4;i.tri(f(c[p]),f(u[p]),f(u[g]),o,a,a),i.tri(f(c[p]),f(u[g]),f(c[g]),o,a,o)}Ou(t)&&lr(i,h)}function Ul(i,t,e,n,r=0){k2(i,t,e,n,r)}function k2(i,t,e,n,r){let s=De(n.type)?0:r-qs(n);if(De(n.type)||Math.abs(s)<.001)return P0(i,t,e,n,r);let o=i.p.length,a=t.p.length,l=e.p.length;P0(i,t,r<.05?e:new ce,n,0);for(let c=o+1;c<i.p.length;c+=3)i.p[c]+=s;for(let c=a+1;c<t.p.length;c+=3)t.p[c]+=s;for(let c=l+1;c<e.p.length;c+=3)e.p[c]+=s}function P0(i,t,e,n,r){let s=n.rotation*ie,o=Math.cos(s),a=Math.sin(s),l=n.mirror?-1:1,c=(_,m)=>[n.x+l*_*o-m*a,n.z+l*_*a+m*o],u=new qn(i,t,c),f=Math.max(.05,n.w),h=Math.max(.05,n.d),p=Math.max(.005,n.h),g=C0(n.type,{b:u,w:f,d:h,h:p,base:r,variant:n.variant??null});if(g!==null){g!==!1&&Hu(e,c,f,h,g);return}let x=De(n.type);if(x){Yu(u,x,f,h,p,r,null),r<=.05&&Hu(e,c,f,h,.5);return}u.box(-f/2,f/2,0,p,-h/2,h/2,d.body,d.bodyTop,O),Hu(e,c,f,h,.5)}function Wu(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=d;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Yu(i,t,e,n,r,s,o,a=null){let l=!!a;for(let c of t.parts){if(a&&!a(c))continue;let u=l?{...c,glow:!0,w:c.w+.006/e,d:c.d+.006/n,y:Math.max(0,c.y-.002/r),h:c.h+.004/r}:c,f=u.glow&&o!==null,h=f?o:Wu(u.color,!1)??d.body,p=f?o:Wu(u.top,!1)??Wu(u.color,!0)??Ht(h,1.25).getHex(),g=s+u.y*r,x=s+Math.min(r,(u.y+u.h)*r),_=u.edges==="glow"?or:u.edges==="faint"?$:u.edges?O:null,m=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))m.lyingCyl(u.axis,u.x*e,u.z*n,g,x,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,h,p,14,_);else if(u.shape==="cyl")m.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,g,x,h,p,14,_);else if(u.shape==="loft"){let y=u.tx??u.x,M=u.tz??u.z,v=u.tw??u.w,S=u.td??u.d;m.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(y-v/2)*e,(y+v/2)*e,(M-S/2)*n,(M+S/2)*n],g,x,h,p,_)}else m.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,g,x,(u.z-u.d/2)*n,(u.z+u.d/2)*n,h,p,_)}}function L0(i,t,e,n,r,s){let o=s*ie,a=Math.cos(o),l=Math.sin(o),c=(g,x)=>[e+g*a-x*l,r+g*l+x*a],u=new qn(i,new Ve,c),f=1713728,h=2373216,p=725279;if(t==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,f,h,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,p,f),u.cyl(0,0,.012,n-.075,n-.06,d.accent,d.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,f,h),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,f,h),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,f,h),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,p,d.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function qu(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*ie,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,u=(f,h)=>[e.x+c*f*a-h*l,e.z+c*f*l+h*a];Yu(new qn(i,new Ve,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function Nl(i,t,e,n,r){let s=e.rotation*ie,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(u,f)=>[e.x+l*u*o-f*a,e.z+l*u*a+f*o];Yu(new qn(i,new Ve,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var Xe={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},ts={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}};var V2={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5}},G2={canopy:{color:Xe.wallTop,side:Xe.wall,edge:Xe.edge,edgeAlpha:.5},veranda:{color:Xe.wallTop,side:Xe.wall,edge:Xe.edge,edgeAlpha:.58},balcony:{color:Xe.wallTop,side:Xe.wall,edge:Xe.edge,edgeAlpha:.58}},H2=.35,N0=3232102,W2=5404812,X2=5,Y2=i=>i.type==="canopy"||i.type==="veranda"||i.type==="balcony";function F0(i,t){let e=i.roof_style==="glass"?3234418:i.roomColor??t.color,n=i.roof_style==="glass"?2112592:t.side;return{roof:e,under:n}}function O0(i,t){return li(i)+(t.offset??0)+(ai(t.type)?.01:Kr[t.type])}function Kn(i){return sr(i)>=0?i:[...i].reverse()}function q2(i,t){let e=i[t];if(ai(e.type)||e.type==="pool")return[];let n=[];for(let r=t+1;r<i.length;r++){let s=i[r];!s.cut||s.points.length<3||s.points.every(o=>ue(o,e.points))&&n.push(Kn(s.points))}return n}function Mn(i,t,e,n,r,s,o,a){let l=e[0]-t[0],c=e[1]-t[1],u=Math.hypot(l,c);if(u<1e-6)return;let f=-c/u*n*.5,h=l/u*n*.5;me(i,Kn([[t[0]+f,t[1]+h],[e[0]+f,e[1]+h],[e[0]-f,e[1]-h],[t[0]-f,t[1]-h]]),r,s,o,a,{aoFrom:r-1})}function Jn(i,t,e,n,r){i.seg([t[0],n+.004,t[1]],[e[0],n+.004,e[1]],r,Xt)}function D0(i,t,e,n,r,s,o){for(let[a,l]of[[-n,-n],[n,-n],[n,n],[-n,n]])i.seg([t+a,r,e+l],[t+a,s,e+l],o,Xt)}function Ol(i,t,e,n,r,s,o,a,l){let c=Math.hypot(n[0]-e[0],n[1]-e[1]);if(c<.04||s<.2)return;Mn(i,e,n,.14,r,r+Math.min(.24,s*.24),o,a),Mn(i,e,n,.07,r+s*.5,r+s*.57,o,a),Mn(i,e,n,.1,r+s-.1,r+s,o,a),Jn(t,e,n,r+Math.min(.24,s*.24),l),Jn(t,e,n,r+s*.57,l),Jn(t,e,n,r+s,l);let u=Math.max(2,Math.ceil(c/.22));for(let f=0;f<=u;f++){let h=f/u,p=e[0]+(n[0]-e[0])*h,g=e[1]+(n[1]-e[1])*h;me(i,Kn([[p-.018,g-.018],[p+.018,g-.018],[p+.018,g+.018],[p-.018,g+.018]]),r+.12,r+s-.07,o,a),t.seg([p,r+.12,g],[p,r+s-.07,g],l,Xt)}}function $2(i,t,e,n,r,s,o,a,l){let c=n[0]-e[0],u=n[1]-e[1],f=Math.hypot(c,u);if(f<.3)return;let h=c/f,p=u/f,g=M=>[e[0]+h*M,e[1]+p*M],x=(M,v,S,w)=>{let[A,b]=g(M);me(i,Kn([[A-v,b-v],[A+v,b-v],[A+v,b+v],[A-v,b+v]]),S,w,o,a)},_=Math.min(.45,s*.32),m=M=>r+s+_*Math.sin(Math.PI*M),y=Math.max(8,Math.ceil(f/.18));Mn(i,e,n,.11,r+.06,r+.16,o,a),Mn(i,e,n,.08,r+s*.47,r+s*.54,o,a),Jn(t,e,n,r+.16,l),Jn(t,e,n,r+s*.54,l);for(let M=0;M<=y;M++){let v=M/y,S=M===0||M===y||Math.abs(v-.5)<.5/y;x(f*v,S?.038:.016,r+.08,m(v)-.04);let[w,A]=g(f*v);if(t.seg([w,r+.08,A],[w,m(v)-.04,A],l,Xt),M<y){let b=g(f*v),T=g(f*(M+1)/y),C=(m(v)+m((M+1)/y))/2;Mn(i,b,T,.075,C-.045,C+.02,o,a),Jn(t,b,T,C+.02,l)}}}function U0(i,t,e,n,r,s,o=Xt){let a=new at(s),l=new at(Ht(r,.72)),c=new at(r);for(let[u,f,h]of jr(t)){let p=t[u],g=t[f],x=t[h],_=[p[0],e(p[0],p[1]),p[1]],m=[g[0],e(g[0],g[1]),g[1]],y=[x[0],e(x[0],x[1]),x[1]],M=[_[0],_[1]-n,_[2]],v=[m[0],m[1]-n,m[2]],S=[y[0],y[1]-n,y[2]];i.tri(_,y,m,a,a,a,void 0,o),i.tri(M,v,S,l,l,l,void 0,o)}for(let u=0;u<t.length;u++){let f=t[u],h=t[(u+1)%t.length],p=[f[0],e(f[0],f[1]),f[1]],g=[h[0],e(h[0],h[1]),h[1]],x=[p[0],p[1]-n,p[2]],_=[g[0],g[1]-n,g[2]];i.tri(x,p,g,c,c,c,void 0,o),i.tri(x,g,_,c,c,c,void 0,o)}}function Z2(i,t,e){let n=Tl(i,t),r=io(i,e),s=r[n],o=r[(n+1)%r.length],a=o[0]-s[0],l=o[1]-s[1],c=Math.hypot(a,l);if(c<1e-6)return r;let u=Math.max(0,H2-e),f=l/c*u,h=-a/c*u;return r.map(([p,g],x)=>x===n||x===(n+1)%r.length?[p+f,g+h]:[p,g])}function K2(i,t,e,n,r){let s=[];for(let a=0;a<i.length;a++){let l=i[a],c=i[(a+1)%i.length],u=l[0]-t[0],f=l[1]-t[1],h=c[0]-t[0],p=c[1]-t[1],g=u*n[0]+f*n[1],x=h*n[0]+p*n[1];if(!(g<=r&&x>r||x<=r&&g>r))continue;let _=(r-g)/(x-g),m=u*e[0]+f*e[1],y=h*e[0]+p*e[1];s.push(m+(y-m)*_)}s.sort((a,l)=>a-l);let o=[];for(let a=0;a+1<s.length;a+=2)s[a+1]-s[a]>.05&&o.push([s[a],s[a+1]]);return o}function J2(i,t,e,n,r){let s=t[n],o=t[(n+1)%t.length],a=o[0]-s[0],l=o[1]-s[1],c=Math.hypot(a,l);if(c<1e-6)return;let u=s,f=[a/c,l/c],h=[f[1],-f[0]],p=t.map(([M,v])=>(M-u[0])*f[0]+(v-u[1])*f[1]),g=Math.min(...p),x=Math.max(...p),_=Math.max(1,Math.ceil((x-g)/.18)),m=new at(N0),y=new at(W2);for(let M=0;M<_;M++){let v=g+(M+.5)*(x-g)/_;for(let[S,w]of K2(t,u,h,f,v)){let A=[u[0]+h[0]*S+f[0]*v,u[1]+h[1]*S+f[1]*v],b=[u[0]+h[0]*w+f[0]*v,u[1]+h[1]*w+f[1]*v],T=b[0]-A[0],C=b[1]-A[1],I=Math.hypot(T,C),L=-C/I*.018,P=T/I*.018,E=-C/I*.007,D=T/I*.007,U=(J,ht)=>[J[0],e(J[0],J[1])+ht,J[1]],N=U([A[0]+L,A[1]+P],.004),k=U([A[0]-L,A[1]-P],.004),z=U([b[0]+L,b[1]+P],.004),G=U([b[0]-L,b[1]-P],.004),V=U([A[0]+E,A[1]+D],.03),it=U([A[0]-E,A[1]-D],.03),Z=U([b[0]+E,b[1]+D],.03),ot=U([b[0]-E,b[1]-D],.03);i.tri(V,Z,ot,y,y,y,void 0,r),i.tri(V,ot,it,y,y,y,void 0,r),i.tri(N,z,Z,m,m,m,void 0,r),i.tri(N,Z,V,m,m,m,void 0,r),i.tri(it,ot,G,m,m,m,void 0,r),i.tri(it,G,k,m,m,m,void 0,r)}}}function B0(i,t,e,n,r){let s=li(e),o=[];return n.forEach((a,l)=>{if(a.points.length<3)return;let c=i.count,u,f,h=s+(a.offset??0),p=(w,A)=>h-Zs(a,w,A),g=h-(a.type==="pool"?0:a.slope??0),x=Y2(a),_=x?a.height??2.4:ai(a.type)&&a.height?a.height:Kr[a.type],m={...x?G2[a.type]:V2[a.type],top:_},y=Kn(a.points),M=Ht(m.edge,m.edgeAlpha),v=a.open&&(a.type==="fence"||a.type==="pergola"||x)?y.length-1:-1,S=(w,A=Xt)=>{if(a.outline!==!1)for(let b=0;b<y.length;b++){if(b===v)continue;let T=y[b],C=y[(b+1)%y.length];t.seg([T[0],w(T[0],T[1]),T[1]],[C[0],w(C[0],C[1]),C[1]],M,A)}};switch(a.type){case"pool":{let w=new at(m.color);for(let[b,T,C]of jr(y)){let I=y[b],L=y[T],P=y[C];i.tri([I[0],h+m.top,I[1]],[P[0],h+m.top,P[1]],[L[0],h+m.top,L[1]],w,w,w,void 0,Xt)}let A=new at(m.side);for(let b=0;b<y.length;b++){let T=y[b],C=y[(b+1)%y.length];i.tri([C[0],h+m.top,C[1]],[C[0],h+.06,C[1]],[T[0],h+.06,T[1]],A,A,A,void 0,Xt),i.tri([C[0],h+m.top,C[1]],[T[0],h+.06,T[1]],[T[0],h+m.top,T[1]],A,A,A,void 0,Xt)}S(()=>h+.06),S(()=>h+m.top+.005);break}case"fence":{for(let w=0;w<y.length;w++){if(w===v)continue;let A=y[w],b=y[(w+1)%y.length],T=Math.hypot(b[0]-A[0],b[1]-A[1]),C=Math.max(1,Math.round(T/2)),I=v>=0&&w===v-1?C:C-1;for(let L=0;L<=I;L++){let P=L/C,E=A[0]+(b[0]-A[0])*P,D=A[1]+(b[1]-A[1])*P,U=p(E,D);me(i,Kn([[E-.04,D-.04],[E+.04,D-.04],[E+.04,D+.04],[E-.04,D+.04]]),U,U+m.top,m.side,m.color)}for(let L of[.35,.85])t.seg([A[0],p(A[0],A[1])+L*m.top,A[1]],[b[0],p(b[0],b[1])+L*m.top,b[1]],M,Xt)}break}case"pergola":{let w=m.top;for(let[A,b]of y){let T=p(A,b);me(i,Kn([[A-.06,b-.06],[A+.06,b-.06],[A+.06,b+.06],[A-.06,b+.06]]),T,T+w,m.side,m.color)}for(let A=0;A<y.length;A++){if(A===v)continue;let b=y[A],T=y[(A+1)%y.length],C=p(b[0],b[1])+w;if(Mn(i,b,T,.12,C-.16,C,m.side,m.color),a.bracing){let I=p(b[0],b[1]),L=p(T[0],T[1]);t.seg([b[0],I+.25,b[1]],[T[0],L+w-.25,T[1]],M,Xt),t.seg([T[0],L+.25,T[1]],[b[0],I+w-.25,b[1]],M,Xt)}}if(Id(y)){let A=Pd(y),b=A.x1-A.x0,T=A.z1-A.z0,C=b>=T,I=C?b:T,L=Math.max(1,Math.round(I/.6));for(let P=1;P<L;P++){let E=(C?A.x0:A.z0)+I*P/L,D=C?[E,A.z0+.06]:[A.x0+.06,E],U=C?[E,A.z1-.06]:[A.x1-.06,E],N=p(D[0],D[1])+w;Mn(i,D,U,.06,N-.04,N+.08,m.side,m.color)}}S((A,b)=>p(A,b)+w+.004);break}case"canopy":{let w=m.top,A=F0(a,m),b=h+$s(a.type),T=(D,U)=>b+w-Zs(a,D,U),C=Tl(y,v),I=r===Xt?Xt:r+X2*16,L=Math.min(.4,Math.max(.04,(a.column_size??.12)/2)),P=Math.max(L,(a.wallThickness??.24)/2);for(let[D,U]of y){let N=T(D,U)-.08;me(i,Kn([[D-L,U-L],[D+L,U-L],[D+L,U+L],[D-L,U+L]]),b,N,A.under,A.roof),D0(t,D,U,L,b,N,M)}if(a.railing!==!1&&w>=.4){let D=Math.min(1.45,w*.62);for(let U=0;U<y.length;U++){if(U===v)continue;let N=y[U],k=y[(U+1)%y.length];if(U!==C){Ol(i,t,N,k,b,D,A.under,A.roof,M);continue}let z=Math.hypot(k[0]-N[0],k[1]-N[1]);if(z<.6){Ol(i,t,N,k,b,D,A.under,A.roof,M);continue}let G=Math.min(2.4,Math.max(.9,z*.45),Math.max(.3,z-.3)),V=Math.max(0,(z-G)/(2*z)),it=Math.min(1,1-V),Z=[N[0]+(k[0]-N[0])*V,N[1]+(k[1]-N[1])*V],ot=[N[0]+(k[0]-N[0])*it,N[1]+(k[1]-N[1])*it];Ol(i,t,N,Z,b,D,A.under,A.roof,M),Ol(i,t,ot,k,b,D,A.under,A.roof,M),$2(i,t,Z,ot,b,D,A.under,A.roof,M)}}for(let D=0;D<y.length;D++){if(D===v)continue;let U=y[D],N=y[(D+1)%y.length],k=(T(U[0],U[1])+T(N[0],N[1]))/2;Mn(i,U,N,.12,k-.18,k-.08,A.under,A.roof),Jn(t,U,N,k-.08,M)}let E=Z2(y,v,P);if(u=i.count,U0(i,E,T,.045,A.under,N0,I),J2(i,E,T,C,I),f=i.count,a.outline!==!1)for(let D=0;D<E.length;D++){if(D===v)continue;let U=E[D],N=E[(D+1)%E.length];t.seg([U[0],T(U[0],U[1])+.034,U[1]],[N[0],T(N[0],N[1])+.034,N[1]],M,I)}break}case"balcony":case"veranda":{let w=m.top,A=a.type==="veranda",b=F0(a,m),T=h+$s(a.type),C=(V,it)=>T,I=(V,it)=>T+w-Zs(a,V,it),L=A?I:(V,it)=>T+w,P=Math.min(1.1,w*.48),E=(V,it,Z,ot,J,ht=m.side,X=m.color)=>{me(i,Kn([[V-Z,it-Z],[V+Z,it-Z],[V+Z,it+Z],[V-Z,it+Z]]),ot,J,ht,X),D0(t,V,it,Z,ot,J,M)};if(a.railing!==!1)for(let V=0;V<y.length;V++){if(V===v)continue;let it=y[V],Z=y[(V+1)%y.length],ot=Math.hypot(Z[0]-it[0],Z[1]-it[1]),J=Math.max(1,Math.ceil(ot/.36)),ht=T;Mn(i,it,Z,.07,ht+.3,ht+.38,b.under,b.roof),Mn(i,it,Z,.09,ht+P-.09,ht+P,b.under,b.roof),Jn(t,it,Z,ht+.38,M),Jn(t,it,Z,ht+P,M);for(let X=0;X<=J;X++){let Q=X/J,ft=it[0]+(Z[0]-it[0])*Q,mt=it[1]+(Z[1]-it[1])*Q,pt=C(ft,mt),At=.012;me(i,Kn([[ft-At,mt-At],[ft+At,mt-At],[ft+At,mt+At],[ft-At,mt+At]]),pt+.08,pt+P-.07,b.under,b.roof),t.seg([ft,pt+.08,mt],[ft,pt+P-.07,mt],M,Xt)}}let D=Tl(y,v),U=y[D],N=y[(D+1)%y.length],k=Math.min(12,Math.max(0,Math.round(a.columns??2))),z=Math.min(.4,Math.max(.04,(a.column_size??.32)/2));for(let V=0;V<k;V++){let it=k===1?.5:V/(k-1),Z=U[0]+(N[0]-U[0])*it,ot=U[1]+(N[1]-U[1])*it,J=C(Z,ot);E(Z,ot,z*1.375,J,J+.28,b.under,b.roof),E(Z,ot,z,J+.2,L(Z,ot)-.2,b.under,b.roof),E(Z,ot,z*1.375,L(Z,ot)-.28,L(Z,ot),b.under,b.roof),t.seg([Z,J+.28,ot],[Z,L(Z,ot)-.28,ot],M,Xt)}let G=(L(U[0],U[1])+L(N[0],N[1]))/2;Mn(i,U,N,Math.max(.2,z*2.6),G-.28,G,b.under,b.roof),Jn(t,U,N,G,M),A&&(u=i.count,U0(i,y,I,.1,b.under,b.roof,r),f=i.count,S((V,it)=>I(V,it)+.004,r)),S((V,it)=>C(V,it)+(a.railing===!1?.004:P+.004));break}default:{let w=(b,T)=>p(b,T)+m.top,A=q2(n,l);if(me(i,y,g,a.slope?w:h+m.top,m.side,m.color,{aoFrom:g,holes:A}),S((b,T)=>w(b,T)+.004),a.type==="hedge"&&S((b,T)=>p(b,T)+.004),a.outline!==!1)for(let b of A)for(let T=0;T<b.length;T++){let C=b[T],I=b[(T+1)%b.length];t.seg([C[0],w(C[0],C[1])+.004,C[1]],[I[0],w(I[0],I[1])+.004,I[1]],M,Xt)}}}i.count>c&&o.push({id:a.id,start:c,end:i.count,...u!==void 0&&f!==void 0?{roofStart:u,roofEnd:f}:{}})}),o}function z0(i,t,e){return B0(i,t,e,e.outdoor??[],Xt)}function k0(i,t,e,n,r=Xt){return B0(i,t,e,n,r)}var zl=Math.PI/180,Q2=1.13,j2=1.72,$u=.025,fr=.07,V0=.25;function G0(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=to(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<1.2)continue;let c=a/l,u=-o/l,f=Math.min(n.height,s.height??n.height),h=(p,g,x,_)=>e.push({key:p,section:null,side:"top",flat:!1,o:g,eu:x,es:[0,1,0],n:_,lu:l,ls:f,pitch:90,span:()=>[0,l],facing:[_[0],_[2]],wall:{floorId:n.id}});h(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+u*s.right],[o/l,0,a/l],[c,0,u]),s.free&&h(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-u*s.left],[-o/l,0,-a/l],[-c,0,-u])}}return e}var Zu="ground";function Ku(i){return[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation)[0]??i.floors[0]??null}function H0(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=Ku(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:Sl(s,o,a)):t.base??0;return{key:Zu,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function tM(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function es(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(y=>eM(y,El(i,y,y.overhang??t.overhang)));let e=tM(i);if(!e)return[];let n=e.rooms.flatMap(y=>y.points.map(M=>M[0])),r=e.rooms.flatMap(y=>y.points.map(M=>M[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=e.elevation+e.height;if(t.type==="flat")return[W0("main",null,o,l,a,c,u+V0)];let f=a-o>=c-l,h=t.ridge==="short"?!f:f,p=(h?c-l:a-o)/2,g=p*Math.tan(t.pitch*zl),x=(y,M,v)=>h?[y,u+v,(l+c)/2+M]:[(o+a)/2+M,u+v,y],[_,m]=h?[o,a]:[l,c];return[-1,1].map(y=>Bl(`main:${y<0?"a":"b"}`,null,y<0?"a":"b",x(_,y*p,0),x(m,y*p,0),x(_,0,g),t.pitch,()=>[0,m-_]))}function eM(i,t){let e=Yn(i),n=Fn(i),r=(x,_,m)=>{let[y,M]=e.at(x,_);return[y,m,M]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=e.at(a,-s),_=e.at(l,e.w+o);return[W0(i.id,i.id,Math.min(x[0],_[0]),Math.min(x[1],_[1]),Math.max(x[0],_[0]),Math.max(x[1],_[1]),i.eave_a+V0)]}if(i.shape==="pent")return[Bl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",f=i.shape==="pyramid"?(e.u1-e.u0)/2:u?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,h=u?e.u0+f-a:0,p=u?l-(e.u1-f):0,g=[];if(n.vr>.3){let x=Math.hypot(n.vr+s,n.rh-n.y(-s));g.push(Bl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,_=>[h*(_/x),c-p*(_/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));g.push(Bl(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,_=>[p*(_/x),c-h*(_/x)]))}if(u){let x=n.y(-s),_=n.y(e.w+o),m=[[`${i.id}:c`,"c",r(a,e.w+o,_),r(a,-s,x),r(e.u0+f,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-s,x),r(l,e.w+o,_),r(e.u1-f,n.vr,n.rh)]];for(let[y,M,v,S,w]of m){let A=nM(y,i.id,M,v,S,w);A&&g.push(A)}}return g}function nM(i,t,e,n,r,s){let o=lo(dr(r,n));if(o<.3)return null;let a=zi(dr(r,n)),l=dr(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],f=lo(u);if(f<.3)return null;let h=zi(u),p=zi(q0(a,h));p[1]<0&&(p=[-p[0],-p[1],-p[2]]);let g=zi([-h[0],0,-h[2]]),x=Math.atan2(h[1],Math.hypot(h[0],h[2]))/zl;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:h,n:p,lu:o,ls:f,pitch:x,span:m=>{let y=Math.min(1,Math.max(0,m/f));return[c*y,o-(o-c)*y]},facing:[g[0],g[2]]}}function Bl(i,t,e,n,r,s,o,a){let l=zi(dr(r,n)),c=zi(dr(s,n)),u=zi(q0(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let f=zi([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:lo(dr(r,n)),ls:lo(dr(s,n)),pitch:o,span:a,facing:[f[0],f[2]]}}function W0(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function X0(i){let t=i.module_w||Q2,e=i.module_h||j2;return i.portrait===!1?[e,t]:[t,e]}function iM(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Y0(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*zl:i.wall?Math.min(90,Math.max(0,t.tilt??0))*zl:0}function rM(i,t){let[,e]=X0(t),n=Y0(i,t);return i.wall?e*Math.cos(n)+$u:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+$u}function co(i,t,e=!1){let[n,r]=X0(t),s=[],o=Y0(i,t),a=r*Math.cos(o),l=rM(i,t),c=iM(t),u=Math.max(1,...c),f=new Set(t.skip??[]),h=(g,x,_)=>[i.o[0]+i.eu[0]*g+i.es[0]*x+i.n[0]*_,i.o[1]+i.eu[1]*g+i.es[1]*x+i.n[1]*_,i.o[2]+i.eu[2]*g+i.es[2]*x+i.n[2]*_],p=(g,x)=>{if(i.unbounded)return!0;if(x<-1e-6||x>i.ls+1e-6)return!1;let[_,m]=i.span(x);return g>=_-1e-6&&g<=m+1e-6};return c.forEach((g,x)=>{let _=t.align==="right"?u-g:t.align==="center"?(u-g)/2:0;for(let m=0;m<g;m++){let y=`${x}:${m}`,M=f.has(y);if(M&&!e)continue;let v=t.u+(m+_)*(n+$u),S=t.v+x*l,w=v+n,A=S+(i.flat||i.wall?a:r);if(![[v,S],[w,S],[w,A],[v,A]].every(([P,E])=>p(P,E)))continue;if(i.wall&&o>.001){let P=fr+r*Math.sin(o),[E,D]=t.flip?[P,fr]:[fr,P],U=[h(v,S,E),h(w,S,E),h(w,A,D),h(v,A,D)],N=t.flip?S:A,k=[v+.05,w-.05].map(z=>[h(z,N,0),h(z,N,P)]);s.push({corners:U,posts:k,cell:y,skipped:M});continue}if(!i.flat){s.push({corners:[h(v,S,fr),h(w,S,fr),h(w,A,fr),h(v,A,fr)],posts:[],cell:y,skipped:M});continue}let b=.15,T=b+r*Math.sin(o),[C,I]=t.flip?[A,S]:[S,A],L=[h(v,C,b),h(w,C,b),h(w,I,T),h(v,I,T)];s.push({corners:L,posts:[v+.05,w-.05].flatMap(P=>[[h(P,C,0),h(P,C,b)],[h(P,I,0),h(P,I,T)]]),cell:y,skipped:M})}}),s}function dr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function lo(i){return Math.hypot(i[0],i[1],i[2])}function zi(i){let t=lo(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function q0(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var sM=.78,oM=1.18;function aM(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||sM,module_h:i.h||oM}}function Ju(i,t){let e=co(i,aM(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}var uo=1712952,ho=2239816,K0=1318193,pr=Ht(3662079,.9),ns=Ht(5995775,.45),Oe=.14,lM=9427199,cM=13226982,uM=14936565,hM={black:{glass:new at(329483),edge:Ht(9082544,.32),cells:Ht(2766160,.22)},blue:{glass:new at(1386842),edge:Ht(10467583,.55),cells:Ht(4025599,.35)}},fM=Ht(13226982,.5),dM=Ht(13226982,.85),pM=Ht(16757575,.95),$0=new at(2845583),Z0=new at(3818072);function mM(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function J0(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:xM(i),r=e?.type==="custom"?bM(i,e.sections??[],e.overhang):n?[n]:[];return _M(i,r),gM(i,r,t),r}function gM(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(es(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?Ju(o,s):null;if(!o||!a)continue;let l=o.section?t.find(I=>I.sections?.includes(o.section)):t[0];if(!l)continue;let c=l.floor.elevation+l.base,u=I=>[I[0],I[1]-c,I[2]],[f,h,p,g]=a.map(u),x=e.get(s.id)??{open:0,tilt:0,cover:0},_=(I,L)=>[I[0]+o.n[0]*L,I[1]+o.n[1]*L,I[2]+o.n[2]*L],m=(I,L,P)=>[I[0]+(L[0]-I[0])*P,I[1]+(L[1]-I[1])*P,I[2]+(L[2]-I[2])*P],y=x.open>.02||x.tilt>.02?pM:dM,M=[f,h,p,g].map(I=>_(I,.06));for(let I=0;I<4;I++)l.lines.seg(M[I],M[(I+1)%4],y);let v=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*ie,S=Math.hypot(p[0]-h[0],p[1]-h[1],p[2]-h[2]),w=I=>{let L=o.es;return[I[0]-L[0]*S*Math.cos(v)+o.n[0]*S*Math.sin(v),I[1]-L[1]*S*Math.cos(v)+o.n[1]*S*Math.sin(v),I[2]-L[2]*S*Math.cos(v)+o.n[2]*S*Math.sin(v)]},A=_(g,.065),b=_(p,.065),T=w(A),C=w(b);l.solid.tri(T,C,b,$0),l.solid.tri(T,b,A,$0);for(let[I,L]of[[T,C],[C,b],[b,A],[A,T]])l.lines.seg(I,L,y);if(x.cover>.02){let I=Math.min(1,x.cover),L=_(m(A,T,I),.01),P=_(m(b,C,I),.01),E=_(A,.01),D=_(b,.01);l.solid.tri(L,P,D,Z0),l.solid.tri(L,D,E,Z0)}}}function _M(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(es(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];o&&Qu(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}function Qu(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=hM[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of co(e,n)){let[u,f,h,p]=c.corners.map(s);i.tri(u,f,h,o.glass),i.tri(u,h,p,o.glass),i.tri(u,h,f,o.glass),i.tri(u,p,h,o.glass);let g=(m,y=.004)=>[m[0]+e.n[0]*y,m[1]+e.n[1]*y,m[2]+e.n[2]*y],x=(m,y,M)=>[m[0]+(y[0]-m[0])*M,m[1]+(y[1]-m[1])*M,m[2]+(y[2]-m[2])*M],_=[u,f,h,p].map(m=>g(m));for(let m=0;m<4;m++)t.seg(_[m],_[(m+1)%4],o.edge);for(let m=1;m<a;m++)t.seg(g(x(u,f,m/a)),g(x(p,h,m/a)),o.cells);for(let m=1;m<l;m++)t.seg(g(x(u,p,m/l)),g(x(f,h,m/l)),o.cells);for(let[m,y]of c.posts)t.seg(s(m),s(y),fM)}}function xM(i){let t=i.settings.roof,e=mM(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(C=>C.points.map(I=>I[0])),r=e.rooms.flatMap(C=>C.points.map(I=>I[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=new ce,f=new Ve;if(t.type==="flat"){me(u,[[o,l],[a,l],[a,c],[o,c]],0,.25,uo,ho,{bottom:!0});let C=.252;for(let[I,L]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])f.seg([I[0],C,I[1]],[L[0],C,L[1]],pr),f.seg([I[0],0,I[1]],[L[0],0,L[1]],ns);return{floor:e,base:e.height,solid:u,lines:f,glass:new ce}}let h=a-o>=c-l,p=t.ridge==="short"?!h:h,g=(p?c-l:a-o)/2,x=g*Math.tan(t.pitch*ie),_=(C,I,L)=>p?[C,L,(l+c)/2+I]:[(o+a)/2+I,L,C],[m,y]=p?[o,a]:[l,c],M=new at(ho),v=new at(uo),S=(C,I,L,P,E)=>{u.tri(C,I,L,E),u.tri(C,L,P,E)};for(let C of[-1,1]){S(_(m,C*g,0),_(y,C*g,0),_(y,0,x),_(m,0,x),M),S(_(m,C*g,-Oe),_(m,0,x-Oe),_(y,0,x-Oe),_(y,C*g,-Oe),v),S(_(m,C*g,-Oe),_(y,C*g,-Oe),_(y,C*g,0),_(m,C*g,0),v);for(let I of[m,y])S(_(I,C*g,-Oe),_(I,C*g,0),_(I,0,x),_(I,0,x-Oe),v);f.seg(_(m,C*g,0),_(y,C*g,0),ns);for(let I of[m,y])f.seg(_(I,C*g,0),_(I,0,x),ns)}let w=t.overhang,A=new at(K0),b=g-w,T=b*Math.tan(t.pitch*ie);for(let C of[m+w,y-w])u.tri(_(C,-b,-Oe),_(C,b,-Oe),_(C,0,T-Oe),A),u.tri(_(C,b,-Oe),_(C,-b,-Oe),_(C,0,T-Oe),A);return f.seg(_(m,0,x+.004),_(y,0,x+.004),pr),{floor:e,base:e.height,solid:u,lines:f,glass:new ce}}function bM(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let r=new Map,s=new Map(es(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=Wd(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new ce,lines:new Ve,glass:new ce,sections:[],lift:!o.open}),c.sections.push(o.id);let u=Cu(t,o),f=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,h=t.filter(x=>x!==o&&Cu(t,x)===o).flatMap(x=>Gd(o,x));for(let x of i.settings.roof.windows??[]){let _=s.get(x.face),m=_&&_.section===o.id?Ju(_,x):null;if(!m)continue;let y=m.map(M=>Oi(o,M[0],M[2]));h.push({u0:Math.min(...y.map(M=>M[0])),u1:Math.max(...y.map(M=>M[0])),v0:Math.min(...y.map(M=>M[1])),v1:Math.max(...y.map(M=>M[1]))})}let p=u?Iu(u,o):o,g=null;if(u){let x=Yn(p),_=Qr(u,{u0:0,u1:0,a:0,b:0}),m=y=>{let[M,v]=x.at(y,x.w/2),[S,w]=Oi(u,M,v);return ro(_,S,w)??Fn(u).y(w)};g=m(x.u0)<=m(x.u1)?0:1}yM(c.solid,c.lines,p,El(i,p,p.overhang??e),a.elevation,c.glass,f,h,g)}return[...r.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function yM(i,t,e,n,r,s=i,o=!1,a=[],l=null){let c=Yn(e),u=Fn(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,h=Math.max(0,f.a),p=Math.max(0,f.b),g=c.w,x=c.u0-Math.max(0,f.u0),_=c.u1+Math.max(0,f.u1),m=(P,E,D)=>{let[U,N]=c.at(P,E);return[U,D-r,N]},y=new at(ho),M=new at(uo),v=new at(K0),S=(P,E)=>{for(let D=1;D+1<P.length;D++)i.tri(P[0],P[D],P[D+1],E)},w=[],A=[],b=[],T=null;if(e.shape==="flat"||e.shape==="parapet"){let P=e.eave_a,E=e.shape==="parapet",D=e.points&&e.points.length>=3?kd(e,E?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):E?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,g),c.at(c.u0,g)]:[c.at(x,-h),c.at(_,-h),c.at(_,g+p),c.at(x,g+p)];me(i,D,P-r,P-r+.25,uo,ho,{bottom:!0});for(let U=0;U<D.length;U++){let N=D[U],k=D[(U+1)%D.length];t.seg([N[0],P-r+.252,N[1]],[k[0],P-r+.252,k[1]],pr),t.seg([N[0],P-r,N[1]],[k[0],P-r,k[1]],ns)}if(E){let U=G=>Ks(G)>=0?G:[...G].reverse(),N=U(D),k=io(N,-.2),z=N.length;for(let G=0;G<z;G++){let V=U([N[G],N[(G+1)%z],k[(G+1)%z],k[G]]);me(i,V,P-r+.25,P-r+.65,uo,ho),t.seg([N[G][0],P-r+.652,N[G][1]],[N[(G+1)%z][0],P-r+.652,N[(G+1)%z][1]],pr),t.seg([k[G][0],P-r+.652,k[G][1]],[k[(G+1)%z][0],P-r+.652,k[(G+1)%z][1]],pr)}}}else{let P=Qr(e,f);w=P.faces;for(let E of a)w=w.flatMap(D=>Hd(D,E));A=P.rim,b=P.ridges,T=P.gable}let C=!!e.open,I=new at(lM);for(let P of w){if(C){for(let E=1;E+1<P.length;E++)s.tri(m(P[0][0],P[0][1],P[0][2]),m(P[E][0],P[E][1],P[E][2]),m(P[E+1][0],P[E+1][1],P[E+1][2]),I);continue}S(P.map(([E,D,U])=>m(E,D,U)),y),S(P.map(([E,D,U])=>m(E,D,U-Oe)),M)}for(let P=0;P<A.length;P++){let[E,D,U]=A[P],[N,k,z]=A[(P+1)%A.length];C||S([m(E,D,U),m(N,k,z),m(N,k,z-Oe),m(E,D,U-Oe)],M),t.seg(m(E,D,U),m(N,k,z),C?pr:ns)}if(C){vM(i,t,c,u,f,m,r);return}for(let[[P,E,D],[U,N,k]]of b)t.seg(m(P,E,D+.004),m(U,N,k+.004),pr);let L=e.base;if(!o){if(T){let P=MM(T,L-Oe),E=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(P.length>=3)for(let D of E)S(P.map(([U,N])=>m(D,U,N)),v)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let P of[0,g]){let E=u.y(P)-Oe;E>L+.02&&S([m(c.u0,P,L),m(c.u1,P,L),m(c.u1,P,E),m(c.u0,P,E)],v)}else if(e.eave_a>L+.02)for(let[P,E,D,U]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,g],[c.u1,g,c.u0,g],[c.u0,g,c.u0,0]])S([m(P,E,L),m(D,U,L),m(D,U,e.eave_a),m(P,E,e.eave_a)],v)}}function vM(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,u=r.a>0,f=r.b>0,h=r.u0>0,p=r.u1>0,g=(m,y,M,v,S,w)=>{let A=[e.at(m,M),e.at(y,M),e.at(y,v),e.at(m,v)],b=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);me(i,b<0?[...A].reverse():A,S-o,w-o,cM,uM,{bottom:!0})},x=o;for(let[m,y]of[[0,u],[a,f]]){if(!y)continue;let M=n.y(m)-.03,v=m===0?0:a-l;g(e.u0,e.u1,v,v+l,M-c,M),t.seg(s(e.u0,m,M-c),s(e.u1,m,M-c),ns)}for(let[m,y]of[[e.u0,h],[e.u1-l,p]])if(y)for(let M=0;M<6;M++){let v=a*M/6,S=a*(M+1)/6,w=Math.min(n.y(v),n.y(S))-.03;g(m,m+l,v,S,w-c,w)}let _=[];for(let[m,y]of[[0,u],[a-l,f]]){if(!y)continue;let M=e.u1-e.u0-l,v=Math.max(1,Math.ceil(M/3.5));for(let S=0;S<=v;S++){let w=e.u0+M*S/v;S===0&&!h||S===v&&!p||_.push([w,m])}}if(!u&&!f)for(let m of[e.u0,e.u1-l])(m===e.u0&&h||m!==e.u0&&p)&&_.push([m,a/2-l/2]);for(let[m,y]of _){let M=n.y(y+l/2)-.03-c;g(m,m+l,y,y+l,x,M)}}function MM(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var ki=.2,np=15;function ip(i){return i?65535&~(1<<np):65535}var fo=8,kl=.42,ju=.42;function rp(i,t,e,n=[],r=[],s){let{walls:o,open:a}=to(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(E,D,U)=>{let N=s?s(E,D):null;return N===null?U:Math.max(.05,Math.min(U,N))},c=(E,D,U,N,k)=>{if(!s)return k;let z=k,G=Math.max(2,Math.ceil((N-U)/.25)+1);for(let V=0;V<G;V++){let it=U+(N-U)*V/(G-1);z=Math.min(z,l(E[0]+D[0]*it,E[1]+D[1]*it,k))}return z},u=new ce(!0,!0),f=[],h=new Ve,p=[];for(let E of i.rooms){if(E.points.length<3)continue;let D=ep(Xn(E)?RM(E):E.points),U=ts[E.floor_material]??ts.wood,N=new at(U.color),k=n.filter(Z=>Yd(Z,D)).map(Z=>qd(Z,.003));p.push(...k);let z=[...D,...k.flat()],G=u.count;for(let[Z,ot,J]of jr(D,k)){let ht=z[Z],X=z[ot],Q=z[J];u.tri([ht[0],0,ht[1]],[Q[0],0,Q[1]],[X[0],0,X[1]],N,N,N,[ht[0],ht[1],Q[0],Q[1],X[0],X[1]],Xt,U.tile)}f.push({roomId:E.id,start:G,end:u.count,color:U.color});let V=new at(Xe.slab),it=Z=>{for(let ot=0;ot<Z.length;ot++){let J=Z[ot],ht=Z[(ot+1)%Z.length];u.tri([J[0],-ki,J[1]],[J[0],0,J[1]],[ht[0],0,ht[1]],V),u.tri([J[0],-ki,J[1]],[ht[0],0,ht[1]],[ht[0],-ki,ht[1]],V)}};it(D);for(let Z of k){it([...ep(Z)].reverse());for(let ot=0;ot<Z.length;ot++){let J=Z[ot],ht=Z[(ot+1)%Z.length];h.seg([J[0],.006,J[1]],[ht[0],.006,ht[1]],or),h.seg([J[0],-ki,J[1]],[ht[0],-ki,ht[1]],Bi)}}}let g=new Map,x=[],_=new Map;for(let E of o){let D="interior",U=null;if(E.exterior){let k=E.b[0]-E.a[0],z=E.b[1]-E.a[1],G=Math.hypot(k,z)||1,V=[z/G,-k/G],it=(Math.round(Math.atan2(V[1],V[0])/(2*Math.PI)*fo)%fo+fo)%fo;D=`s${it}`;let Z=it/fo*2*Math.PI;U=[Math.cos(Z),Math.sin(Z)]}let N=g.get(D);N===void 0&&(N=x.length,g.set(D,N),x.push(U)),_.set(E,N)}let m=new Map,y=[];for(let E of i.openings){let D=Nd(E,i.rooms,i.walls??[]);if(!D)continue;let U=Od(o,E,D);if(!U)continue;let{wall:N,s:k}=U,z=Hl([N.b[0]-N.a[0],N.b[1]-N.a[1]]),G=Math.hypot(N.b[0]-N.a[0],N.b[1]-N.a[1]),V=Math.min(E.width,G),it=Math.max(0,Math.min(G-V,k-V/2)),Z=D.room.points,ot=N.free?z[0]*(Z[1][0]-Z[0][0])+z[1]*(Z[1][1]-Z[0][1])>0:N.roomLeft===E.room_id,J=[-z[1],z[0]],ht=ot?J:[-J[0],-J[1]],X=Math.min(c(N.a,z,it,it+V,Vl(N,i.height))-.02,E.sill+E.height),Q=Math.max(0,Math.min(E.sill,X-.1)),ft=[ht[1],-ht[0]],mt=z[0]*ft[0]+z[1]*ft[1]>0,pt={opening:E,bucket:_.get(N),start:[N.a[0]+z[0]*it,N.a[1]+z[1]*it],axis:z,width:V,toRoom:ht,faceRoom:ot?N.left:N.right,faceOut:ot?N.right:N.left,sill:Q,top:X,hingeAtStart:E.hinge==="left"===mt,exterior:N.exterior};y.push(pt);let At=m.get(N);At||m.set(N,At=[]),At.push({s0:it,s1:it+V,sill:Q,top:X,info:pt})}let M=Math.min(i.cut_height,i.height),v=new ce;for(let E of o){let D=_.get(E),U=Hl([E.b[0]-E.a[0],E.b[1]-E.a[1]]),N=(m.get(E)??[]).sort((ot,J)=>ot.s0-J.s0),k=Vl(E,i.height),z=[],G=[-1/0,...new Set(N.flatMap(ot=>[ot.s0,ot.s1])).values(),1/0].sort((ot,J)=>ot-J);for(let ot=0;ot+1<G.length;ot++){let J=G[ot],ht=G[ot+1];if(ht-J<1e-6)continue;let X=Number.isFinite(J)&&Number.isFinite(ht)?(J+ht)/2:Number.isFinite(J)?J+1:ht-1,Q=N.filter(pt=>pt.s0<X&&pt.s1>X).map(pt=>[pt.sill,pt.top]).sort((pt,At)=>pt[0]-At[0]),ft=[],mt=-ki;for(let[pt,At]of Q)pt>mt+1e-4&&ft.push([mt,pt]),mt=Math.max(mt,At);k>mt+1e-4&&ft.push([mt,k]),z.push({t0:J,t1:ht,ranges:ft})}let V=Math.hypot(E.b[0]-E.a[0],E.b[1]-E.a[1]),it=s&&c(E.a,U,0,V,k)<k-.001,Z=it?z.flatMap(ot=>{let J=Math.max(ot.t0,-.5),ht=Math.min(ot.t1,V+.5),X=Math.max(1,Math.ceil((ht-J)/.3));return Array.from({length:X},(Q,ft)=>({t0:ft===0?ot.t0:J+(ht-J)*ft/X,t1:ft===X-1?ot.t1:J+(ht-J)*(ft+1)/X,ranges:ot.ranges}))}):z;for(let ot of Z){let J=TM(E.footprint,E.a,U,ot.t0,ot.t1);if(J.length<3)continue;let ht=it?Math.min(...J.map(([X,Q])=>l(X,Q,k))):k;for(let[X,Q]of ot.ranges){let ft=Math.min(Q,it?Math.max(...J.map(([re,Vt])=>l(re,Vt,k))):Q);if(ft-X<1e-4||ht-X<.01)continue;let mt=X>.01,pt=it&&Q>ht,At=(re,Vt)=>Math.min(Q,l(re,Vt,k));if(X<M-1e-6){let re=ft>M+1e-6?Zd+D:ar+D,Vt=pt&&ht<M?(Kt,se)=>Math.min(M,At(Kt,se)):Math.min(ft,M);me(v,J,X,Vt,Xe.wall,Xe.wallTop,{aoFrom:0,bottom:mt,fold:ar+D,topFold:re})}ft>M+1e-6&&ht>M+1e-6&&me(v,J,Math.max(X,M),pt?At:ft,Xe.wall,Xe.wallTop,{aoFrom:0,fold:D,bottom:mt&&X>=M})}}}let S=o.flatMap(E=>E.footprint),w=EM(o,S),A=new Ve;A.p.push(...h.p),A.c.push(...h.c),A.f.push(...h.f);let b=(E,D)=>(m.get(E)??[]).filter(D);for(let E of w.edges){let D=_.get(E.wall);for(let[N,k]of Gl(E,b(E.wall,z=>z.sill<=.005)))A.seg([N[0],.004,N[1]],[k[0],.004,k[1]],$d);for(let[N,k]of Gl(E,b(E.wall,z=>z.sill<M&&z.top>M)))A.seg([N[0],M,N[1]],[k[0],M,k[1]],Du,Rl+D);let U=Vl(E.wall,i.height);for(let[N,k]of Gl(E,b(E.wall,z=>z.top>=U-.021))){if(!s){A.seg([N[0],U,N[1]],[k[0],U,k[1]],or,U<=M+1e-6?ar+D:D);continue}let z=Math.max(1,Math.ceil(Math.hypot(k[0]-N[0],k[1]-N[1])/.3));for(let G=0;G<z;G++){let V=[N[0]+(k[0]-N[0])*G/z,N[1]+(k[1]-N[1])*G/z],it=[N[0]+(k[0]-N[0])*(G+1)/z,N[1]+(k[1]-N[1])*(G+1)/z],Z=l(V[0],V[1],U),ot=l(it[0],it[1],U);A.seg([V[0],Z,V[1]],[it[0],ot,it[1]],or,Math.max(Z,ot)<=M+1e-6?ar+D:D)}}}for(let E of w.corners){let D=l(E.p[0],E.p[1],Vl(E.wall,i.height));A.segSplit([E.p[0],.004,E.p[1]],[E.p[0],D,E.p[1]],Bi,Math.min(M,D),_.get(E.wall))}for(let E of m.values())for(let D of E)SM(A,D,M);let T=AM(w.edges,i.rooms,m),C=i.rooms.filter(Xn).map(E=>({id:E.id,type:E.kind,points:E.points,roof_style:E.roof_style,railing:E.railing,columns:E.columns,column_size:E.column_size,height:E.height??i.height,slope:E.slope,slope_dir:E.slope_dir,open:E.open??!0,roomColor:(ts[E.floor_material]??ts.wood).color,wallThickness:t,offset:-li(i)-$s(E.kind)})),I=k0(v,A,i,C,np),L=z0(v,A,i);for(let E of r)Qu(v,A,E.face,E.field,i.elevation);let P=[];for(let E of i.furniture){if(Ed(E.type))continue;let D=v.count,U=A.p.length/6,N=mn(i,E);Ul(v,A,T,E,N),N+E.h>M+.05&&(Kd(v,D,M,Uu),Jd(A,U,M,Uu)),P.push({id:E.id,start:D,end:v.count})}return{floor:u.geometry(),roomTris:f,holes:p,walls:v.geometry(),lines:A.geometry(),shadow:T.geometry(),buckets:x,openings:y,walls2d:o,openRooms:a,wallBuckets:o.map(E=>_.get(E)),furnitureTris:P,outdoorTris:L,coveredRoomTris:I}}function SM(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,u)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:Xt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Bi,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Bi,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Bi,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Bi,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Bi,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),Du,Rl+r)}function TM(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=Q0(o,a=>s(a)-n)),Number.isFinite(r)&&(o=Q0(o,a=>r-s(a))),o}function Q0(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var j0=i=>Math.round(i*1e3),po=i=>`${j0(i[0])},${j0(i[1])}`,tp=(i,t)=>{let e=po(i),n=po(t);return e<n?`${e}|${n}`:`${n}|${e}`};function wM(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let f of t){let h=((f[0]-r[0])*o+(f[1]-r[1])*a)/l;if(h<=1e-6||h>=1-1e-6)continue;Math.abs((f[0]-r[0])*a-(f[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(h)}c.sort((f,h)=>f-h);let u=r;for(let f of c){let h=[r[0]+o*f,r[1]+a*f];po(h)!==po(u)&&e.push([u,h]),u=h}e.push([u,s])}return e}function EM(i,t){let e=i.map(l=>({wall:l,edges:wM(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,u]of l){let f=tp(c,u);n.set(f,(n.get(f)??0)+1)}let r=[],s=new Map,o=(l,c,u)=>{let f=po(l),h=s.get(f);h||s.set(f,h={p:l,wall:c,d:[]}),h.d.push(u)};for(let{wall:l,edges:c}of e)for(let[u,f]of c){if(n.get(tp(u,f))!==1)continue;let h=Math.hypot(f[0]-u[0],f[1]-u[1]);if(h<1e-4)continue;r.push({a:u,b:f,wall:l});let p=[(f[0]-u[0])/h,(f[1]-u[1])/h];o(u,l,p),o(f,l,p)}let a=[];for(let{p:l,wall:c,d:u}of s.values())u.some(f=>u.some(h=>Math.abs(f[0]*h[1]-f[1]*h[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function Gl(i,t){if(!t.length)return[[i.a,i.b]];let e=Hl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Hl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=f=>(f[0]-i.wall.a[0])*e[0]+(f[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let f of t)c=c.flatMap(([h,p])=>{if(f.s1<=h||f.s0>=p)return[[h,p]];let g=[];return f.s0>h&&g.push([h,f.s0]),f.s1<p&&g.push([f.s1,p]),g});let u=f=>{let h=(f-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*h,i.a[1]+(i.b[1]-i.a[1])*h]};return c.filter(([f,h])=>h-f>1e-4).map(([f,h])=>s<=o?[u(f),u(h)]:[u(h),u(f)])}function AM(i,t,e){let n=new ce,r=new at(ju,ju,ju),s=new at(1,1,1),o=.002;for(let a of i)for(let[l,c]of Gl(a,(e.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],f=c[1]-l[1],h=Math.hypot(u,f);if(h<.05)continue;let p=[f/h,-u/h],g=[(l[0]+c[0])/2+p[0]*.05,(l[1]+c[1])/2+p[1]*.05];if(!t.some(m=>m.points.length>=3&&ue(g,m.points)))continue;let x=[l[0]+p[0]*kl,l[1]+p[1]*kl],_=[c[0]+p[0]*kl,c[1]+p[1]*kl];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[_[0],o,_[1]],r,s,s),n.tri([l[0],o,l[1]],[_[0],o,_[1]],[c[0],o,c[1]],r,s,r)}return n}function sp(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(wl),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return Fu(e);let r=n.furniture.filter(s=>(s.type==="stairs"||s.type==="stairs_landing"||De(s.type)?.hole)&&n.elevation+s.h>=t.elevation-.3).map(wl);return Fu([...e,...r])}function Vl(i,t){return Math.min(t,i.height??t)}function Hl(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function ep(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function RM(i){let t=i.points,e=t.length;if(e<3)return t;let n=0;for(let c=0;c<e;c++)n+=t[c][0]*t[(c+1)%e][1]-t[(c+1)%e][0]*t[c][1];let r=n>=0?1:-1,s=(i.column_size??(i.kind==="canopy"?.12:.32))/2,o=i.kind==="canopy"?s:s*1.375,a=i.open!==!1?e-1:-1,l=t.map((c,u)=>{let f=t[(u+1)%e],h=f[0]-c[0],p=f[1]-c[1],g=Math.hypot(h,p)||1,x=u===a?0:o,_=[p/g*r,-h/g*r];return{p:[c[0]+_[0]*x,c[1]+_[1]*x],d:[h/g,p/g],normal:_,offset:x}});return t.map((c,u)=>{let f=l[(u-1+e)%e],h=l[u],p=f.d[0]*h.d[1]-f.d[1]*h.d[0];if(Math.abs(p)<1e-6)return[c[0]+h.normal[0]*h.offset,c[1]+h.normal[1]*h.offset];let g=((h.p[0]-f.p[0])*h.d[1]-(h.p[1]-f.p[1])*h.d[0])/p;return[f.p[0]+f.d[0]*g,f.p[1]+f.d[1]*g]})}var CM=500,op=.12,ap=1.35,IM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Wl=class{view={target:new H,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,f=Math.min(1,(t-c)/u),h=IM(f);this.view.target.lerpVectors(a.target,l.target,h),this.view.radius=a.radius+(l.radius-a.radius)*h,this.view.theta=a.theta+(l.theta-a.theta)*h,this.view.phi=a.phi+(l.phi-a.phi)*h,f>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=th(this.view.phi+this.velocity.phi,op,ap),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},r=t.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let s={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:r,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:n,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab?.(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},CM)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag?.(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}if(e.button===1||e.button===2||t.shiftKey)this.pan(n,r);else{let o=this.el.clientHeight||1,a=-n/o*3.2,l=-r/o*2.4;this.view.theta+=a,this.view.phi=th(this.view.phi+l,op,ap),this.velocity={theta:a,phi:l}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,s=performance.now();s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=s,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=th(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new H(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new H(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function th(i,t,e){return Math.min(e,Math.max(t,i))}function hi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= mix(${.78.toFixed(2)}, ${.42.toFixed(2)}, vFp3dCanopy);`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var mo=(i,t,e,n,r)=>{i.expandByPoint(new H(t,n,e)),i.expandByPoint(new H(t,r,e))};function lp(i){let t=new tn;for(let{floor:e,ty:n}of i){let r=e.elevation+n;for(let s of e.rooms)for(let[o,a]of s.points)mo(t,o,a,r,r+e.height);for(let s of e.outdoor??[]){let o=r+li(e)+(s.offset??0),a=o-(s.type==="pool"?0:s.slope??0),l=ai(s.type)&&s.height?s.height:Kr[s.type],c=o+(s.type==="pool"?.06:l);for(let[u,f]of s.points)mo(t,u,f,a,c)}for(let s of e.walls??[]){let o=r+Math.min(e.height,s.height??e.height);mo(t,s.a[0],s.a[1],r,o),mo(t,s.b[0],s.b[1],r,o)}}return t}function cp(i,t,e){let n=new tn,r=i.elevation+e;for(let[s,o]of t.points)mo(n,s,o,r,r+(Xn(t)?t.height??i.height:i.height));return n}function eh(i,t,e,n,r,s=1){if(i.isEmpty())return 0;let o=i.getCenter(new H),a=new H(Math.sin(e)*Math.sin(t),Math.cos(e),Math.sin(e)*Math.cos(t)),l=new H(Math.cos(t),0,-Math.sin(t)),c=new H(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)),u=Math.tan(r/2),f=u*Math.max(.01,n),h=0;for(let p of[i.min.x,i.max.x])for(let g of[i.min.y,i.max.y])for(let x of[i.min.z,i.max.z]){let _=new H(p,g,x).sub(o),m=_.dot(a);h=Math.max(h,m+Math.abs(_.dot(l))*s/f,m+Math.abs(_.dot(c))*s/u)}return h}function up(i,t,e,n,r=1){let s=i.getSize(new H),o=Math.max(.01,Math.min(s.x,s.z)),a=Math.max(s.x,s.z)/o>=2,l=-.6;return a&&e>=1.2&&(l=s.z>=s.x?-.95:-.35),{theta:l,radius:eh(i,l,t,e,n,r)}}function nh(i,t,e,n,r,s,o=8){if(i.isEmpty())return{radius:0,offset:new H};let a=Math.max(1,s.width),l=Math.max(1,s.height),c=-1+2*Math.max(0,s.left)/a,u=1-2*Math.max(0,s.right)/a,f=-1+2*Math.max(0,s.bottom)/l,h=1-2*Math.max(0,s.top)/l;if(c>=u||f>=h)return{radius:eh(i,t,e,n,r),offset:new H};let p=i.getCenter(new H),g=new H(Math.sin(e)*Math.sin(t),Math.cos(e),Math.sin(e)*Math.cos(t)),x=new H(Math.cos(t),0,-Math.sin(t)),_=new H(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)),m=Math.tan(r/2),y=m*Math.max(.01,n),M=[];for(let L of[i.min.x,i.max.x])for(let P of[i.min.y,i.max.y])for(let E of[i.min.z,i.max.z]){let D=new H(L,P,E).sub(p);M.push({x:D.dot(x),y:D.dot(_),near:D.dot(g)})}let v=L=>{let P=-1/0,E=1/0,D=-1/0,U=1/0;for(let N of M){let k=L-N.near;P=Math.max(P,N.x-u*y*k),E=Math.min(E,N.x-c*y*k),D=Math.max(D,N.y-h*m*k),U=Math.min(U,N.y-f*m*k)}return{x0:P,x1:E,y0:D,y1:U}},S=Math.max(...M.map(L=>L.near))+.1,w=L=>{let P=v(L);return P.x0<=P.x1&&P.y0<=P.y1},A=Math.max(S,o),b=Math.max(A,eh(i,t,e,n,r));for(;!w(b);)b*=2;for(let L=0;L<60;L++){let P=(A+b)/2;w(P)?b=P:A=P}let T=v(b),C=(T.x0+T.x1)/2,I=(T.y0+T.y1)/2;return{radius:b,offset:x.multiplyScalar(C).add(_.multiplyScalar(I))}}function PM(i,t){let e=De(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function ih(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?PM(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function rh(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let u=e.length/3,f=c.portrait===!1?10:6,h=c.portrait===!1?6:10,p=LM(c.id)%1e3/1e3;for(let x of co(l,c)){let[_,m,y,M]=x.corners.map(S=>[S[0]+l.n[0]*.006,S[1]+l.n[1]*.006-t,S[2]+l.n[2]*.006]),v=[[_,0,0],[m,1,0],[y,1,1],[M,0,1]];for(let S of[0,1,2,0,2,3]){let[w,A,b]=v[S];e.push(w[0],w[1],w[2]),n.push(A,b),r.push(f,h),s.push(p)}}let g=e.length/3-u;g&&o.push({id:c.id,start:u,count:g})}if(!e.length)return null;let a=new Qt;return a.setAttribute("position",new Gt(e,3)),a.setAttribute("uv",new Gt(n,2)),a.setAttribute("aCells",new Gt(r,2)),a.setAttribute("aPhase",new Gt(s,1)),a.setAttribute("aLevel",new Gt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function go(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function sh(i){let t=new le({transparent:!0,blending:Fe,depthWrite:!1,side:Me});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function LM(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var hp=["neon","blueprint","day"];function fp(i){return hp.indexOf(i)}var Xl={value:new H(.22,.88,1)},Yl={value:0};function dp(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var FM=`
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
`;function Un(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=Xl,s.uniforms.uAccentOn=Yl,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${FM}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function ql(i){return i==="day"?Pi:Fe}var _o=.012,DM=.012;function mp(i,t,e,n,r,s=[]){let o=[],a=[],l=[],c=[],u=(g,x,_,m,y,M,v)=>{for(let S of[g,x,_,g,_,m])o.push(S[0],S[1],S[2]),a.push(y[0],y[1],y[2]),l.push(M),c.push(v)};i.rooms.forEach((g,x)=>{if(g.points.length<3)return;let _=g.points.map(w=>w[0]),m=g.points.map(w=>w[1]),y=Math.min(..._),M=Math.min(...m),v=Math.max(1,Math.ceil((Math.max(..._)-y)/r)),S=Math.max(1,Math.ceil((Math.max(...m)-M)/r));for(let w=0;w<v;w++)for(let A=0;A<S;A++){let b=y+(w+.5)*r,T=M+(A+.5)*r;if(!ue([b,T],g.points)||s.some(L=>ue([b,T],L)))continue;let C=y+w*r,I=M+A*r;u([C,_o,I],[C,_o,I+r],[C+r,_o,I+r],[C+r,_o,I],[0,1,0],x,-1)}});let f=i.rooms.length;for(let g of i.outdoor??[]){if(g.points.length<3||ai(g.type))continue;let x=O0(i,g)+_o,_=g.points.map(w=>w[0]),m=g.points.map(w=>w[1]),y=Math.min(..._),M=Math.min(...m),v=Math.max(1,Math.ceil((Math.max(..._)-y)/r)),S=Math.max(1,Math.ceil((Math.max(...m)-M)/r));for(let w=0;w<v;w++)for(let A=0;A<S;A++){if(!ue([y+(w+.5)*r,M+(A+.5)*r],g.points))continue;let b=y+w*r,T=M+A*r;u([b,x,T],[b,x,T+r],[b+r,x,T+r],[b+r,x,T],[0,1,0],f,-1)}}let h=Math.min(i.cut_height,i.height);t.forEach((g,x)=>{let _=Math.min(i.height,g.height??i.height),m=Math.min(h,_-.02),y=g.b[0]-g.a[0],M=g.b[1]-g.a[1],v=Math.hypot(y,M);if(v<.05)return;let S=[y/v,M/v],w=[-S[1],S[0]],A=e[x],b=UM(g,S,v,n),T=(L,P,E)=>[P,E,...L.filter(D=>D>P+.005&&D<E-.005)].sort((D,U)=>D-U).filter((D,U,N)=>U===0||D>N[U-1]+.005),C=T([m,(m+_)/2,...b.flatMap(L=>[L.y0+.01,L.y1-.01])],.02,_-.02),I=T(b.flatMap(L=>[L.s0,L.s1]),0,v);for(let L of[1,-1]){let P=L>0?g.roomLeft:g.roomRight,E=P?i.rooms.findIndex(k=>k.id===P):g.exterior?f:-1;if(E<0)continue;let D=(L>0?g.left:g.right)+DM,U=[w[0]*L,w[1]*L],N=(k,z)=>[g.a[0]+S[0]*k+U[0]*D,z,g.a[1]+S[1]*k+U[1]*D];for(let k=0;k<I.length-1;k++){let z=I[k+1]-I[k],G=Math.max(1,Math.ceil(z/r));for(let V=0;V<G;V++){let it=I[k]+z/G*V,Z=I[k]+z/G*(V+1),ot=(it+Z)/2;for(let J=0;J<C.length-1;J++){let ht=C[J],X=C[J+1];if(X-ht<.01)continue;let Q=(ht+X)/2;if(b.some(mt=>ot>mt.s0&&ot<mt.s1&&Q>mt.y0&&Q<mt.y1))continue;let ft=ht>=h-1e-6?A:ar+A;u(N(it,ht),N(Z,ht),N(Z,X),N(it,X),[U[0],0,U[1]],E,ft)}}}}});let p=[];for(let g of n){if(g.opening.type!=="door")continue;let x=t.find(y=>gp(y,g));if(!x||!x.roomLeft||!x.roomRight)continue;let _=i.rooms.findIndex(y=>y.id===x.roomLeft),m=i.rooms.findIndex(y=>y.id===x.roomRight);_<0||m<0||p.push({id:g.opening.id,a:_,b:m,x:g.start[0]+g.axis[0]*(g.width/2),y:Math.min(1.1,g.top*.55),z:g.start[1]+g.axis[1]*(g.width/2)})}return{pos:new Float32Array(o),normal:new Float32Array(a),room:Int16Array.from(l),fold:new Float32Array(c),doors:p}}function gp(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function UM(i,t,e,n){let r=[];for(let s of n){if(!gp(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function NM(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function OM(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function pp(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,u=a*a+l*l+c*c,f=Math.sqrt(u)||1e-6,h=OM(i),p=1/(1+u/(h*h)),g=p*Math.sqrt(p),x=Math.max(0,-(a*r+l*s+c*o)/f);return i.level*g*(.2+.8*x)*NM(i.kind,l/f)}function _p(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,f)=>{let h=n[f]??.5;if(!(h<=.01))for(let[p,g]of[[u.a,u.b],[u.b,u.a]]){let x=[0,0,0];for(let m of t){if(m.room!==p)continue;let y=m.x-u.x,M=m.y-u.y,v=m.z-u.z,S=Math.hypot(y,M,v)||1,w=pp(m,u.x,u.y,u.z,y/S,M/S,v/S);x[0]+=m.color[0]*w,x[1]+=m.color[1]*w,x[2]+=m.color[2]*w}let _=Math.max(x[0],x[1],x[2]);_<.01||r.push({x:u.x,y:u.y,z:u.z,color:[x[0]/_,x[1]/_,x[2]/_],level:Math.min(1,_*.9*(.35+.65*h)),kind:"wall",room:g})}});let s=new Map;for(let u of r){let f={...u,color:u.color.map(h=>Math.pow(h,1.5))};s.set(u.room,[...s.get(u.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let u=0;u<l.length;u++){let f=s.get(l[u]);if(!f)continue;let h=u*3,p=0,g=0,x=0;for(let _ of f){let m=pp(_,o[h],o[h+1],o[h+2],a[h],a[h+1],a[h+2]);p+=_.color[0]*m,g+=_.color[1]*m,x+=_.color[2]*m}c[h]=1-Math.exp(-p*e*1.6),c[h+1]=1-Math.exp(-g*e*1.6),c[h+2]=1-Math.exp(-x*e*1.6)}return c}function xp(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&ue([t,e],r.points));return n<0?i.rooms.length:n}function bp(i,t){return i&&t>=0&&t<i.length?i[t]:t}var Zl={open:0,open2:0,tilt:0,tilt2:0,cover:null},yp=2043986,vp=2769520,BM=2242399,oh=1845831,zM=1450554,fi=16758087,kM=1.2,VM=1.5,GM=1846349,HM=2572395,WM=1120816,XM=1845831,Mp=5995775,Sp=9085695,is=Ht(3662079,.08),YM=.2;function $l(i,t,e,n,r,s,o,a,l,c,u){let f=(p,g,x)=>t(p,g,x),h=[[f(e,r,a),f(n,r,a),f(n,s,a),f(e,s,a),c],[f(e,r,o),f(n,r,o),f(n,s,o),f(e,s,o),Ht(l.getHex(),.6)],[f(e,s,o),f(n,s,o),f(n,s,a),f(e,s,a),l],[f(e,r,o),f(n,r,o),f(n,r,a),f(e,r,a),Ht(l.getHex(),.85)],[f(e,r,o),f(e,s,o),f(e,s,a),f(e,r,a),Ht(l.getHex(),.92)],[f(n,r,o),f(n,s,o),f(n,s,a),f(n,r,a),Ht(l.getHex(),.92)]];for(let[p,g,x,_,m]of h)i.tri(p,g,x,m,m,m,void 0,u),i.tri(p,x,_,m,m,m,void 0,u)}function ae(i,t,e,n,r,s,o,a,l,c,u,f){if(a<=u+1e-6)return $l(i,t,e,n,r,s,o,a,l,c,Xt);if(o>=u-1e-6)return $l(i,t,e,n,r,s,o,a,l,c,f);$l(i,t,e,n,r,s,o,u,l,c,Xt),$l(i,t,e,n,r,s,u,a,l,c,f)}function Vi(i,t,e,n,r,s,o,a,l,c,u=0){let f=(h,p,g)=>{let x=v=>u?(o-v)/u:.5,_=t(e,r,h),m=t(n,r,h),y=t(n,r,p),M=t(e,r,p);i.tri(_,m,y,a,a,a,[0,x(h),1,x(h),1,x(p)],g),i.tri(_,y,M,a,a,a,[0,x(h),1,x(p),0,x(p)],g)};o<=l+1e-6?f(s,o,Xt):s>=l-1e-6?f(s,o,c):(f(s,l,Xt),f(l,o,c))}function qM(i,t,e,n,r,s,o,a,l,c){let u=t(e,r,o),f=t(n,r,o),h=t(n,s,o),p=t(e,s,o),g=0,x=(s-r)/c;i.tri(u,f,h,a,a,a,[0,g,1,g,1,x],l),i.tri(u,h,p,a,a,a,[0,g,1,x,0,x],l)}function Tp(i,t,e){let n=new ce,r=new ce,s=new ce(!0),o=new at(yp),a=new at(vp),l=[],c=[],u=[];for(let f of i){let h=n.count,p=r.count,g=s.count,x=t.get(f.opening.id)??Zl,_=f.width,{sill:m,top:y,bucket:M}=f,v=(b,T,C)=>[f.start[0]+f.axis[0]*b+f.toRoom[0]*T,C,f.start[1]+f.axis[1]*b+f.toRoom[1]*T],S=(f.faceRoom-f.faceOut)/2,w=f.opening.mark==="closed",A=f.opening.type==="door"&&rr(f.opening,f.exterior)==="passage";if(f.opening.type==="door"&&!A||f.opening.type==="garage"){let b=-f.faceOut-.012,T=f.faceRoom+.012,C=f.opening.type==="garage"&&(w?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),I=C?Ht(fi,.8):new at(yp),L=C?Ht(fi,1):new at(vp);ae(n,v,-.045,.02,b,T,0,y+.045,I,L,e,M),ae(n,v,_-.02,_+.045,b,T,0,y+.045,I,L,e,M),ae(n,v,.02,_-.02,b,T,y-.02,y+.045,I,L,e,M)}if(f.opening.type==="door"){let b=rr(f.opening,f.exterior),T=Rd(b),C=f.opening.swing==="out"?-1:1,I=C>0?f.faceRoom:-f.faceOut,L=f.opening.leaves===2,P=.02,E=_-.02,D=Ad(_,b,f.hingeAtStart,f.opening);if(D){for(let[z,G]of D.panels)ae(n,v,z,z+.04,S-.03,S+.03,.02,y-.02,o,a,e,M),ae(n,v,G-.04,G,S-.03,S+.03,.02,y-.02,o,a,e,M),ae(n,v,z,G,S-.03,S+.03,.02,.1,o,a,e,M),Vi(r,v,z+.04,G-.04,S,.1,y-.02,is,e,M);P=D.x0,E=D.x1}let U=L?(E-P)/2-.004:E-P,N=T?.06:.04;T&&(ae(n,v,.02,_-.02,-f.faceOut-.02,f.faceRoom,0,.02,new at(oh),a,e,M),f.exterior&&ae(n,v,_/2-.08,_/2+.08,-f.faceOut-.1,-f.faceOut,y+.1,y+.17,Ht(fi,.55),Ht(fi,.85),e,Xt));let k=A?[]:[[f.hingeAtStart,x.open]];L&&!A&&k.push([!f.hingeAtStart,x.open2??0]);for(let[z,G]of k){let V=Math.min(1,Math.max(0,G)),it=b==="sliding"?0:V*VM,Z=b==="sliding"?V*U:0,ot=(re,Vt,Kt)=>{let se=re*Math.cos(it)-Vt*Math.sin(it)-Z,jt=I+C*(Vt*Math.cos(it)+re*Math.sin(it)+(Z?.05:0));return v(z?P+se:E-se,jt,Kt)},J=V>.05?Xt:M,ht=w?!!x.sensed&&V<.05:V>.9,X=ht?Ht(fi,.7):new at(T?WM:GM),Q=ht?Ht(fi,.9):new at(T?XM:HM);b==="glass"?(ae(n,ot,0,.05,-N,0,.01,y-.01,X,Q,e,J),ae(n,ot,U-.05,U,-N,0,.01,y-.01,X,Q,e,J),ae(n,ot,.05,U-.05,-N,0,.01,.12,X,Q,e,J),ae(n,ot,.05,U-.05,-N,0,y-.08,y-.01,X,Q,e,J),Vi(r,ot,.05,U-.05,-N/2,.12,y-.08,is,e,J)):ae(n,ot,0,U,-N,0,.01,y-.01,X,Q,e,J),b==="front_glass"?Vi(r,ot,.12,U-.12,.001,y*.55,y-.18,is,e,J):T&&Vi(r,ot,.1,.18,.001,.3,y-.3,is,e,J);let ft=Math.min(1.05,y*.5),mt=T?.3:.012,pt=T?U-.11:U-.16,At=T?U-.08:U-.05;ae(n,ot,pt,At,.004,.05,ft-mt,ft+mt,new at(Mp),new at(Sp),e,J),ae(n,ot,pt,At,-N-.05,-N-.004,ft-mt,ft+mt,new at(Mp),new at(Sp),e,J)}}else if(f.opening.type==="garage"){let b=Math.min(1,Math.max(0,x.cover??1)),T=new at(13951231),C=f.faceRoom-.03,I=y*(1-b);b>.01&&Vi(s,v,.02,_-.02,C,I,y,T,e,M,.5);let L=(1-b)*y;L>.01&&qM(s,v,.02,_-.02,C,C+L,y+.03,T,M,.5)}else if(rr(f.opening,f.exterior)==="glass_wall"){ae(n,v,0,.04,S-.025,S+.025,m,y,o,a,e,M),ae(n,v,_-.04,_,S-.025,S+.025,m,y,o,a,e,M),ae(n,v,.04,_-.04,S-.025,S+.025,m,m+.03,o,a,e,M),ae(n,v,.04,_-.04,S-.025,S+.025,y-.04,y,o,a,e,M);let C=Math.max(1,Math.round((_-2*.04)/.9)),I=(_-2*.04)/C;for(let L=1;L<C;L++){let P=.04+L*I;ae(n,v,P-.02,P+.02,S-.025,S+.025,m+.03,y-.04,o,a,e,M)}for(let L=0;L<C;L++){let P=.04+L*I+(L?.02:0),E=.04+(L+1)*I-(L<C-1?.02:0);Vi(r,v,P,E,S,m+.03,y-.04,is,e,M)}}else{ae(n,v,0,.06,S-.035,S+.035,m,y,o,a,e,M),ae(n,v,_-.06,_,S-.035,S+.035,m,y,o,a,e,M),ae(n,v,.06,_-.06,S-.035,S+.035,m,m+(m>.05?.06:.03),o,a,e,M),ae(n,v,.06,_-.06,S-.035,S+.035,y-.06,y,o,a,e,M),m>.3&&(ae(n,v,-.04,_+.04,S+.035,f.faceRoom+.07,m-.03,m,new at(oh),a,e,M),f.exterior&&ae(n,v,-.03,_+.03,-f.faceOut-.06,S-.035,m-.04,m-.02,new at(oh),a,e,M));let C=.055,I=m+(m>.05?.06:.03),L=y-.06,P=S+.035,E=S+.035+.06,U=f.opening.leaves===2?[{atStart:f.hingeAtStart,x0:f.hingeAtStart?.06:_/2,x1:f.hingeAtStart?_/2:_-.06,open:x.open,tilt:x.tilt},{atStart:!f.hingeAtStart,x0:f.hingeAtStart?_/2:.06,x1:f.hingeAtStart?_-.06:_/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:f.hingeAtStart,x0:.06,x1:_-.06,open:x.open,tilt:x.tilt}];for(let N of U){let k=N.open>.02||N.tilt>.02,z=w?!!x.sensed&&!k:k,G=z?Ht(fi,.75):new at(BM),V=z?Ht(fi,.95):a,it=N.x0,Z=N.x1,ot=Z-it,J=N.open*kM,ht=N.tilt*YM,X=(ft,mt,pt)=>{let At=pt-I,re=mt+At*Math.sin(ht),Vt=I+At*Math.cos(ht),Kt=ft*Math.cos(J)-(re-P)*Math.sin(J);re=P+(re-P)*Math.cos(J)+ft*Math.sin(J);let se=N.atStart?it+Kt:Z-Kt;return v(se,re,Vt)},Q=J>.05?Xt:M;if(ae(n,X,0,C,P,E,I,L,G,V,e,Q),ae(n,X,ot-C,ot,P,E,I,L,G,V,e,Q),ae(n,X,C,ot-C,P,E,I,I+C,G,V,e,Q),ae(n,X,C,ot-C,P,E,L-C,L,G,V,e,Q),Vi(r,X,C,ot-C,(P+E)/2,I+C,L-C,z?Ht(fi,.16):is,e,Q),rr(f.opening,f.exterior)==="bars"){let ft=(I+L)/2,mt=(P+E)/2;ae(n,X,C,ot-C,mt-.012,mt+.012,ft-.012,ft+.012,G,V,e,Q),ae(n,X,ot/2-.012,ot/2+.012,mt-.012,mt+.012,I+C,L-C,G,V,e,Q)}}}if(x.cover!==null){let b=-f.faceOut,T=y+.2;ae(n,v,-.05,_+.05,b-.15,b,y,T,new at(zM),a,e,M);let C=Math.min(1,Math.max(0,x.cover));if(C>.01){let I=y-C*(y-m);Vi(s,v,0,_,b-.07,I,y,new at(16777215),e,M,.045)}}l.push({id:f.opening.id,start:h,end:n.count}),c.push({id:f.opening.id,start:p,end:r.count}),u.push({id:f.opening.id,start:g,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:u}}var $M=.3,wp=2.6;function Ep(i,t=.32,e=.22,n=[]){let r=i.map(S=>S[0]),s=i.map(S=>S[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),u=c-l>=a-o,f=e*.7071,h=S=>{let w=[S,[S[0]+e,S[1]],[S[0]-e,S[1]],[S[0],S[1]+e],[S[0],S[1]-e]],A=[...w,[S[0]+f,S[1]+f],[S[0]-f,S[1]+f],[S[0]+f,S[1]-f],[S[0]-f,S[1]-f]];return w.every(b=>ue(b,i))&&!n.some(b=>A.some(T=>ue(T,b)))},p=(S,w)=>h(u?[S,w]:[w,S]),g=(S,w)=>{let A=Math.ceil(Math.hypot(w[0]-S[0],w[1]-S[1])/.05);for(let b=1;b<A;b++)if(!h([S[0]+(w[0]-S[0])*b/A,S[1]+(w[1]-S[1])*b/A]))return!1;return!0},[x,_,m,y]=u?[o,a,l,c]:[l,c,o,a],M=[],v=!0;for(let S=x+e;S<=_-e+1e-6;S+=t){let w=null,A=null,b=.05;for(let L=m;L<=y+1e-6;L+=b)if(p(S,L)&&(A??=L),(!p(S,L)||L+b>y+1e-6)&&A!==null){let P=p(S,L)?L:L-b;(!w||P-A>w[1]-w[0])&&(w=[A,P]),A=null}if(!w||w[1]-w[0]<.2)continue;let T=L=>{let[P,E]=L?w:[w[1],w[0]];return[u?[S,P]:[P,S],u?[S,E]:[E,S]]},C=T(v),I=M[M.length-1];if(I&&n.length&&!g(I,C[0])){let L=T(!v);if(!g(I,L[0]))continue;C=L,v=!v}M.push(C[0],C[1]),v=!v}return M}function lh(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var ah=i=>Math.atan2(Math.sin(i),Math.cos(i));function Ap(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=ah(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),wp*e),!0)}let a=Math.atan2(r,s),l=ah(a-i.heading);if(i.heading=ah(i.heading+Math.sign(l)*Math.min(Math.abs(l),wp*e)),Math.abs(l)<.35){let c=Math.min(o,$M*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}var rs=null,Rp=new Map;function ZM(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=Rp.get(r);if(s)return s;e&&Ml(e),rs??=new $r({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),rs.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),rs.setSize(t,t,!1),rs.setClearColor(0,0);let o=new ce,a=new Ve,l=De(i.type);if(l?.light)Nl(o,l,{x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Kl(o,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let y={id:"preview",type:i.type,x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};if(Ul(o,a,new ce,y),i.type==="robot_vacuum"){let M=(w,A,b,T,C,I,L)=>{let P=Array.from({length:20},(E,D)=>{let U=D/20*Math.PI*2;return[w+Math.cos(U)*b,A+Math.sin(U)*b]});me(o,P,T,C,I,L,{aoFrom:0,bottom:!1})},v=i.d*.28,S=Math.min(i.w*.4,i.d*.27);M(0,v,S,.012,.08,2371657,3424863),M(0,v,S*.32,.08,.1,3820138,5070726)}if(i.type==="fan_ceiling"||i.type==="fan_ceiling_light"||i.type==="fan_wall"||i.type==="fan_floor"){let M=o.p.length,v=a.p.length;so(o,a,i.type,i.w,i.d,i.h,i.variant??null);let S=i.type==="fan_ceiling"||i.type==="fan_ceiling_light"?i.h*.18:i.type==="fan_wall"?i.h*.5:i.h*.78,w=0;for(let A=M+1;A<o.p.length;A+=3)o.p[A]+=S;for(let A=M+2;A<o.p.length;A+=3)o.p[A]+=w;for(let A=v+1;A<a.p.length;A+=3)a.p[A]+=S;for(let A=v+2;A<a.p.length;A+=3)a.p[A]+=w;i.type==="fan_ceiling_light"&&Kl(o,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:null,lamp:"fan"},i.h,16758087)}}let c=new Zi,u=new Yt(o.geometry(),new le({vertexColors:!0,color:new at(n,n,n)})),f=new yn(a.geometry(),new bn({vertexColors:!0,color:new at(n*1.8,n*1.8,n*1.8)}));c.add(u,f);let h=new tn().setFromObject(c),p=h.getCenter(new H),g=new si(-1,1,1,-1,.01,100);g.position.copy(p).add(new H(.9,.75,1.3).normalize().multiplyScalar(20)),g.lookAt(p),g.updateMatrixWorld();let x=.05;for(let y of[h.min.x,h.max.x])for(let M of[h.min.y,h.max.y])for(let v of[h.min.z,h.max.z]){let S=new H(y,M,v).applyMatrix4(g.matrixWorldInverse);x=Math.max(x,Math.abs(S.x),Math.abs(S.y))}let _=x*1.12;g.left=-_,g.right=_,g.top=_,g.bottom=-_,g.updateProjectionMatrix(),rs.render(c,g);let m=rs.domElement.toDataURL("image/png");return u.geometry.dispose(),u.material.dispose(),f.geometry.dispose(),f.material.dispose(),Rp.set(r,m),m}var Ip={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},KM=2.4,JM=1.4,QM=.22,Pp=140,hh=32,jM=500,Lp=160,Fp=33,Dp=.028,tS=.09,Ot=2767456,eS=1911110,nS=1,Up=new Set(["ceiling","downlight","spot","panel","round_panel","pendant","strip","fan"]),ch=450,Np=125,iS=.08,fh={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03],fan:[1.4,1.4,.4],column:[.12,.12,1.45],tv_bars:[.65,.16,.38],orb_table:[.28,.28,.24],portable:[.24,.24,.26],ambient:[.2,.2,.2],cube:[.26,.26,.24],round_panel:[.42,.42,.045],garden_set:[.65,.18,.32],wall_updown:[.14,.12,.32]},rS=new at(1714765);function sS(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var dh=class{host;options;renderer;scene=new Zi;camera=new Ke(38,1,.1,400);controls;labels;root=new Je;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];fanRotors=new Map;devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new yn(new Qt,new bn({color:10471679,transparent:!0,opacity:.4,blending:Fe,depthWrite:!1}));snow=new Br(new Qt,new Qi({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Yt(new Ms(1,28),new le({color:16767370,transparent:!0,opacity:0,blending:Fe,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=oS(),this.blindTexture=lS(),this.haloTexture=hS(),this.ground=new Yt(new Ei(1,1),new le({transparent:!0,blending:Fe,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.building&&this.fit(350),this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){Ml(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,this.rebuild(),e&&this.fit(0),this.invalidate()}setFloor(t,e=!0){this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(l=>l.floor.rooms.some(c=>c.id===t)),n=e?.floor.rooms.find(l=>l.id===t);if(!e||!n)return;let r=cp(e.floor,n,e.ty),s=.72,o=this.controls.view.theta,a=nh(r,o,s,this.camera.aspect,this.camera.fov*ie,this.cameraFrame(),4);this.controls.flyTo({target:r.getCenter(new H).add(a.offset),radius:a.radius,phi:s})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t;let e=new Set(t.filter(r=>r.active&&r.fanMotor!==!1&&r.furnitureId&&this.fanRotors.has(r.furnitureId)).map(r=>r.furnitureId));for(let[r,s]of this.fanRotors)s.active=e.has(r);this.labelsDirty=!0,this.effectFloors=new Set(t.filter(r=>r.effect&&r.glow).map(r=>r.floorId)),this.deviceFloor=new Map(t.map(r=>[r.id,r.floorId]));let n=new Set;for(let r of t){n.add(r.id);let s=this.devicePins.get(r.id);s||(s={el:this.makeDevicePin(r.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(r.id,s),this.labels.append(s.el));let o=s.el;s.icon!==r.icon&&(s.icon=r.icon,o.querySelector(".fp3d-dev-icon").innerHTML=r.icon),s.text!==r.text&&(s.text=r.text,o.querySelector(".fp3d-dev-text").textContent=r.text);let a=r.caption??"";s.caption!==a&&(s.caption=a,o.querySelector(".fp3d-dev-name").textContent=a);let l=r.power!==null&&r.power!==void 0&&r.power>=1?r.powerText??`${Math.round(r.power)} W`:"";s.watt!==l&&(s.watt=l,o.querySelector(".fp3d-dev-watt").textContent=l);let c=`${r.name}: ${r.text}`;s.label!==c&&(s.label=c,o.title=r.name,o.setAttribute("aria-label",c)),s.active!==r.active&&(s.active=r.active,o.classList.toggle("fp3d-dev-on",r.active)),s.unavailable!==r.unavailable&&(s.unavailable=r.unavailable,o.classList.toggle("fp3d-dev-na",r.unavailable));let u=r.glow?`rgb(${r.glow.color.map(f=>Math.round(f*255)).join(", ")})`:"";s.glow!==u&&(s.glow=u,u?o.style.setProperty("--fp3d-glow",u):o.style.removeProperty("--fp3d-glow"))}for(let[r,s]of this.devicePins)n.has(r)||(s.el.remove(),this.devicePins.delete(r));for(let r of this.floors)this.buildGlow(r),this.buildLamps(r);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);e!==this.roofWindowsKey&&(this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh(),this.invalidate())}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])go(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&go(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Je;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=n.floor.elevation+.03;for(let c of s)if(c.playing)for(let u=0;u<3;u++){let f=new Yt(new As(.92,1,48),new le({color:3662079,transparent:!0,opacity:0,blending:Fe,depthWrite:!1,side:Me}));f.rotation.x=-Math.PI/2,f.position.set(c.x,o+u*.002,c.z),f.userData={sound:!0,phase:u/3,level:c.level},f.frustumCulled=!1,r.add(f)}let a=[],l=new Set;for(let c of s)for(let u of c.members){let f=s.find(p=>p.id===u);if(!f||f===c)continue;let h=[c.id,f.id].sort().join("|");l.has(h)||(l.add(h),a.push(c.x,o+.02,c.z,f.x,o+.02,f.z))}if(a.length){let c=new Qt;c.setAttribute("position",new Gt(a,3));let u=new yn(c,new bn({color:3662079,transparent:!0,opacity:.45,blending:Fe,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=uh(r),o=Op(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let s=document.createElement("img");s.src=n.picture,s.alt="",s.addEventListener("error",()=>s.replaceWith(document.createTextNode(n.initials))),r.append(s)}else r.textContent=n.initials}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=dp(t),n=e?1:0;n===Yl.value&&(!e||Xl.value.equals(new H(...e)))||(Yl.value=n,e&&Xl.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=fp(t);let e=ql(t),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines]:[]];for(let r of n)r.blending=e,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new at(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new _s(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let u=s.x0+Math.random()*(s.x1-s.x0),f=s.y0+Math.random()*(s.y1-s.y0),h=s.z0+Math.random()*(s.z1-s.z0);o.set([u,f,h],c*3),n&&o.set([u,f-.45,h],c*3+3)}t.geometry.dispose();let l=new Qt;l.setAttribute("position",new Gt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let u=0;u<l.length;u+=6){let f=l[u+1]-c,h=l[u]+o*n;f<r.y0&&(f+=s,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[u]=h,l[u+1]=f,l[u+3]=h-o*.05,l[u+4]=f-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let u=0;u<l.length;u+=3){let f=l[u+1]-(.9+.6*e.snow)*n,h=l[u]+(o+Math.sin(c+u)*.4)*n;f<r.y0&&(f+=s,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[u]=h,l[u+1]=f}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*ie,o=(r?t.azimuth+180:t.azimuth)*ie,a=Math.max(10,Math.abs(t.elevation))*ie,l=this.weatherBox,c=new H((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),f=new H(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(f,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let h=this.skyDisc.material;h.color.set(r?13621486:16767370),h.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t){this.openingTargets=t,this.invalidate()}setFridgeDoors(t){for(let[e,n]of t){let r=this.fridges.get(e)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(e,r)}for(let e of[...this.fridges.keys()])t.has(e)||this.fridges.delete(e);this.invalidate()}stepFridges(t){let e=1-Math.exp(-t/Lp),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}stepFans(t){let e=!1;for(let n of this.fanRotors.values()){if(!n.active)continue;let r=n.type==="fan_ceiling"||n.type==="fan_ceiling_light",s=t*(r?.0048:.009);r?n.rotor.rotation.y=(n.rotor.rotation.y-s)%(Math.PI*2):n.rotor.rotation.z=(n.rotor.rotation.z-s)%(Math.PI*2),e=!0}return e}buildFridges(t){let e=new ce;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Gu(e,n,mn(t.floor,n),r?.l??0,r?.r??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view;return{theta:t.theta,phi:t.phi,radius:t.radius}}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values())t.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&sS();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new $r({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ce,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Wl(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&"roomId"in n&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))e.dispose();this.root.remove(t.group)}this.floors=[],this.floorMap=new Map,this.fanRotors=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let f=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-h.left,f.top+f.height/2-h.top)},jM)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",u=>u.preventDefault()),e.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let f=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,f.left+f.width/2-h.left,f.top+f.height/2-h.top)}),e.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let f=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-h.left,f.top+f.height/2-h.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=mp(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes),r=uS(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b])}t.lightSurface=n;let s=new Qt;s.setAttribute("position",new Gt(n.pos,3)),s.setAttribute("color",new Gt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Gt(n.fold,1));let o=new Ki(new Uint32Array(n.pos.length/3),1);o.setUsage(tu),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=t.floor.height,n=[];for(let r of this.devices){let s=this.glowOf(r);if(r.floorId!==t.floor.id||!s)continue;let o=xp(t.floor,r.x,r.z),a=bp(t.lightZones,o),[l,,c]=r.size??(r.lamp?fh[r.lamp]:[.3,.3,.3]),u=r.base??0,f={ceiling:[e-.12,"ceiling"],downlight:[e-.03,"spot"],spot:[e-c,"spot"],panel:[e-.05,"ceiling"],pendant:[Math.max(.5,e-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<nS?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"],fan:[u+c*.08,"ceiling"],column:[u+c*.55,"omni"],tv_bars:[u+c*.55,"omni"],orb_table:[u+c*.55,"omni"],portable:[u+c*.55,"omni"],ambient:[u+c,"up"],cube:[u+c*.55,"omni"],round_panel:[e-.05,"ceiling"],garden_set:[u+c,"up"],wall_updown:[u+c/2,"wall"]},[h,p]=r.lamp?f[r.lamp]:[r.y,"omni"],g=r.lightY??h,x=s.color;if(r.lamp==="strip"){let _=(r.rotation??0)*ie,m=!!r.upright||Math.abs(r.roll??0)>45;for(let y of[-1/3,0,1/3])r.upright?n.push({x:r.x,y:u+l*(.5+y),z:r.z,color:x,level:s.level*.55,kind:"omni",room:a}):n.push({x:r.x+Math.cos(_)*l*y,y:g,z:r.z+Math.sin(_)*l*y,color:x,level:s.level*.55,kind:m?"omni":p,room:a})}else n.push({x:r.x,y:g,z:r.z,color:x,level:s.level,kind:p,room:a})}return n}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(f=>{let h=t.geo.openings.find(g=>g.opening.id===f.id);if(h&&rr(h.opening,h.exterior)==="passage")return 1;let p=t.openings.get(f.id);return p?Math.max(p.open,p.open2??0):.5}),s=n.map(f=>`${f.x.toFixed(2)},${f.y.toFixed(2)},${f.z.toFixed(2)},${f.kind},${f.level.toFixed(3)},${f.color.map(h=>h.toFixed(3)).join("/")}`).join(";")+"|"+r.map(f=>f.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length||this.roomTint){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=_p(e,n,.42,r);a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let f=0;f<l.length/18;f++){let h=!1;for(let p=f*18;p<f*18+18&&!h;p++)h=l[p]>.004;if(h)for(let p=0;p<6;p++)c[u++]=f*6+p}o.index.needsUpdate=!0,o.setDrawRange(0,u),t.glowMesh.visible=u>0}makeMaterials(t){return{floor:Un(new le({vertexColors:!0}),this.themeUniform),pattern:aS(this.patternTexture),wall:Un(hi(new le({vertexColors:!0}),t,"solid"),this.themeUniform),glassWall:hi(new le({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),coveredRoof:Un(hi(new le({vertexColors:!0,transparent:!0,depthWrite:!1,side:Me}),t,"roof"),this.themeUniform),shadow:new le({vertexColors:!0,blending:Fs,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:Me,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Un(hi(new bn({vertexColors:!0,transparent:!0,blending:ql(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:hi(new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:Un(hi(new le({vertexColors:!0,side:Me}),t),this.themeUniform),glass:hi(new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me}),t),blinds:Un(hi(new le({map:this.blindTexture,vertexColors:!0,side:Me}),t),this.themeUniform),flow:cS(this.flowTime),solarLive:sh(this.flowTime),lamps:Un(new le({vertexColors:!0}),this.themeUniform),halos:new Qi({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1}),cones:new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me}),screens:new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me})}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=Ku(n)?.id===s.id?o.filter(J=>J.face===Zu).map(J=>({field:J,face:H0(n,J)})):[],l=o.filter(J=>J.face.startsWith(`wall:${s.id}:`));if(l.length){let J=new Map(G0(n,s.id).map(ht=>[ht.key,ht]));for(let ht of l){let X=J.get(ht.face);X&&a.push({field:ht,face:X})}}let u=(n.settings.roof.sections??[]).some(J=>!J.open&&J.base<s.elevation+s.height-.05)?(J,ht)=>{let X=zd(n,J,ht);return X===null?null:X-s.elevation}:void 0,f=rp(ih(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,sp(n.floors,s),a,u),h={standing:{value:65535},glass:{value:0}},p=this.makeMaterials(h),g=new Je,x=new Yt(f.floor,p.floor),_=new Yt(f.shadow,p.shadow);_.renderOrder=1;let m=new Yt(f.floor,p.pattern);m.renderOrder=2;let y=new Yt(new Qt,p.glow);y.renderOrder=3,y.visible=!1;let M=new Yt(new Qt,p.frames),v=new Yt(new Qt,p.blinds),S=new Yt(new Qt,p.glass);S.renderOrder=4;let w=new Yt(new Qt,p.lamps);w.visible=!1;let A=new Yt(new Qt,p.cones);A.visible=!1,A.renderOrder=3;let b=new Br(new Qt,p.halos);b.visible=!1,b.renderOrder=7;let T=new Yt(new Qt,p.cones);T.visible=!1,T.renderOrder=7;let C=new Yt(new Qt,p.cones);C.visible=!1,C.renderOrder=7;let I=new Yt(new Qt,p.lamps);I.visible=!1;let L=new Yt(new Qt,p.screens);L.visible=!1,L.renderOrder=5;let P=new Yt(new Qt,p.flow);P.renderOrder=5,P.frustumCulled=!1;let E=rh(a,s.elevation),D=E?new Yt(E.geometry,p.solarLive):null;D&&(D.renderOrder=6,go(E,this.solarLevels));for(let J of[M,v,S])J.frustumCulled=!1;let U=new Yt(f.walls,p.glassWall),N=new Yt(f.walls,p.coveredRoof),k=new Yt(f.walls,p.wall);U.renderOrder=6,N.renderOrder=5,g.add(x,_,m,y,k,new yn(f.lines,p.lines),M,v,S,P,w,A,b,T,C,I,L,N,U,...D?[D]:[]);for(let J of s.furniture){if(J.type!=="fan_ceiling"&&J.type!=="fan_ceiling_light"&&J.type!=="fan_wall"&&J.type!=="fan_floor")continue;let ht=new ce,X=new Ve;so(ht,X,J.type,J.w,J.d,J.h,J.variant);let Q=new Je;Q.add(new Yt(ht.geometry(),p.wall),new yn(X.geometry(),p.lines));let ft=new Je,mt=J.rotation*ie;ft.position.set(J.x,mn(s,J),J.z),ft.rotation.y=-mt,Q.position.set(0,J.type==="fan_ceiling"||J.type==="fan_ceiling_light"?J.h*.18:J.type==="fan_wall"?J.h*.5:J.h*.78,0),ft.add(Q),g.add(ft);let pt=this.devices.some(At=>At.furnitureId===J.id&&At.active);this.fanRotors.set(J.id,{rotor:Q,type:J.type,active:pt})}this.root.add(g);let z=document.createElement("button");z.className="fp3d-pin fp3d-pin-floor",z.dataset.floor=s.id;let G=document.createElement("b");G.textContent=s.name||"\u2013";let V=document.createElement("span");V.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",z.append(G,V),z.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(z);let it=t.get(s.id),Z=[],ot=null;for(let J of s.rooms){let ht=document.createElement("button");ht.className="fp3d-pin",ht.dataset.room=J.id,ht.dataset.floor=s.id,this.fillRoomPin(ht,J.name,this.roomInfo.get(J.id)),ht.addEventListener("click",()=>this.options.onRoomTap?.(s.id,J.id)),this.labels.append(ht);let[X,Q]=Cd(J.points);Z.push({pin:ht,room:J,cx:X,cz:Q});for(let[ft,mt]of J.points)ot??={x0:ft,x1:ft,z0:mt,z1:mt},ot.x0=Math.min(ot.x0,ft),ot.x1=Math.max(ot.x1,ft),ot.z0=Math.min(ot.z0,mt),ot.z1=Math.max(ot.z1,mt)}this.floors.push({floor:s,rank:r.indexOf(s),group:g,geo:f,floorMesh:x,shadowMesh:_,patternMesh:m,glowMesh:y,lightSurface:null,lightZones:null,framesMesh:M,glassMesh:S,blindsMesh:v,flowMesh:P,solarMesh:D,solarLive:E,lampMesh:w,sunMesh:A,sunSig:"",haloMesh:b,coneMesh:T,trailMesh:C,fridgeMesh:I,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:k,screenMesh:L,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:ot,roomPins:Z,labelSize:null,materials:p,mask:h,openings:new Map,y:it?.y??0,o:it?.o??1,ty:0,to:1,appliedO:-1,label:z})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Zl);this.buildOpenings(s),this.buildFlows(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(f=>f.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?J0(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(es(this.building).map(f=>[f.key,f])),n=this.building.settings.roof?.solar??[],r=sh(this.flowTime),s=[],o=new Je,a=Un(new le({vertexColors:!0,transparent:!0,side:Me}),this.themeUniform),l=Un(new bn({vertexColors:!0,transparent:!0,blending:ql(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Un(new le({vertexColors:!0,transparent:!0,side:Me,depthWrite:!1}),this.themeUniform),u=t.map(f=>{let h=new Je;h.add(new Yt(f.solid.geometry(),a),new yn(f.lines.geometry(),l)),f.glass.count&&h.add(new Yt(f.glass.geometry(),c));let p=n.flatMap(x=>{let _=e.get(x.face);return _&&(_.section?f.sections?.includes(_.section):f===t[0])?[{face:_,field:x}]:[]}),g=rh(p,f.floor.elevation+f.base);if(g){let x=new Yt(g.geometry,r);x.renderOrder=9,h.add(x),s.push(g),go(g,this.solarLevels)}return h.renderOrder=8,o.add(h),{group:h,floorId:f.floor.id,base:f.base,lift:f.lift!==!1}});o.renderOrder=8,this.scene.add(o),this.roof={group:o,parts:u,solid:a,lines:l,glass:c,live:r,lives:s},this.placeRoof()}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=this.floorId===null&&this.wallMode!=="cut"?.94*n:0,s=1-Math.exp(-t/Pp),o=this.roofO;this.roofO+=(r-this.roofO)*s,Math.abs(r-this.roofO)<.004&&(this.roofO=r),e.group.visible=this.roofO>.02;for(let a of e.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=l.ty>0?Math.min(1,l.y/l.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+l.y+a.base+(1-this.roofO)*2.2+(a.lift?c*JM:0)}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==o&&this.roofO!==r}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:QM)):r=this.explode?n.rank*KM:0,n.ty=r,n.to=s,t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.coveredRoof.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Pp);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Lp);for(let r of this.floors){let s=!1;for(let[o,a]of r.openings){let l=this.openingTargets.get(o)??Zl,c=(h,p)=>(h??null)===(p??null)||typeof h=="number"&&typeof p=="number"&&Math.abs(h-p)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},f=!1;for(let h of["open","open2","tilt","tilt2"]){let p=l[h]??0,g=a[h]??0,x=p-g;Math.abs(x)<.003?u[h]=p:(u[h]=g+x*n,f=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let h=l.cover-a.cover;Math.abs(h)<.003?u.cover=l.cover:(u.cover=a.cover+h*n,f=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(o,u),s=!0),e||=f}s&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new at(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*iS+r)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let f=this.flashes.get(u);if(!f||f<=e)return 0;let h=f-e,p=h>ch?.5+.5*Math.sin(h/140):h/ch;return Math.round(p*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=r.map(u=>this.glowOf(u)),a=r.map((u,f)=>`${n(u.id)},${o[f]?`${o[f].level.toFixed(3)},${o[f].color.map(h=>h.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let u=new ce,f=[],h=[],p=new Map,g=t.floor.height;for(let x of r){let _=x.lamp==="strip"?(x.base??g)>Math.min(t.floor.cut_height,g):x.lamp?Up.has(x.lamp):x.model==="camera_ceiling";if(!x.lamp&&!x.model||_&&this.wallMode==="cut")continue;let m=u.count,y=x.pack?De(x.pack):void 0,[M,v,S]=x.size??[.3,.3,.3];x.model?L0(u,x.model,x.x,x.model==="camera_ceiling"?g:x.y,x.z,x.rotation??0):y?Nl(u,y,{x:x.x,z:x.z,rotation:x.rotation??0,w:M,d:v,h:S,mirror:x.mirror},x.base??0,65280):Kl(u,{...x,lamp:x.lamp},g,65280),p.set(x.furnitureId??x.id,{start:m,end:u.count}),x.pickable!==!1&&f.push({id:x.id,start:m,end:u.count}),x.furnitureId&&h.push({id:x.furnitureId,start:m,end:u.count})}t.lampTris=f,t.lampFurnTris=h,t.lampRanges=p,t.lampShade=Md(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,f)=>{let h=t.lampRanges.get(u.furnitureId??u.id);if(!h)return;let p=o[f],g=p?.55+.45*p.level:0,x=p?new at(...p.color.map(y=>Math.min(1,y*g))):new at(eS),_=n(u.id);_>0&&x.lerp(new at(1,1,1),.7*_);let m=new at(x.getHex());Sd(c,t.lampShade,h,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.sun,n=(this.building?.settings.north??0)*ie,r=this.weather?.cloud??0,s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(s===t.sunSig)return;t.sunSig=s;let o=new ce;if(e&&e.elevation>2&&r<.97){let a=Math.min(1,e.elevation/12)*(1-.8*r),l=e.elevation*ie,c=e.azimuth*ie,u=[Math.sin(n+c),-Math.cos(n+c)],f=1/Math.tan(l);for(let h of t.geo.openings){if(h.opening.type!=="window"||!h.exterior)continue;let p=[-h.toRoom[0],-h.toRoom[1]],g=p[0]*u[0]+p[1]*u[1];if(g<.05)continue;let x=t.openings.get(h.opening.id),_=h.top-(x?.cover??0)*(h.top-h.sill);if(_-h.sill<.05)continue;let m=(b,T)=>{let C=Math.min(7,T*f);return[h.start[0]+h.axis[0]*b+h.toRoom[0]*h.faceRoom-u[0]*C,.02,h.start[1]+h.axis[1]*b+h.toRoom[1]*h.faceRoom-u[1]*C]},y=.14*a*Math.min(1,g*1.5),M=new at(1*y,.82*y,.55*y),v=M.clone().multiplyScalar(.45),S=t.floor.rooms.find(b=>b.id===h.opening.room_id);if(!S||S.points.length<3)continue;let w=Math.max(1,Math.ceil(Math.min(7,_*f)/.25)),A=Math.max(1,Math.ceil(h.width/.3));for(let b=0;b<w;b++){let T=h.sill+(_-h.sill)*b/w,C=h.sill+(_-h.sill)*(b+1)/w,I=b/w,L=(b+1)/w,P=M.clone().lerp(v,I),E=M.clone().lerp(v,L);for(let D=0;D<A;D++){let U=h.width*D/A,N=h.width*(D+1)/A,k=m((U+N)/2,(T+C)/2);if(!ue([k[0],k[2]],S.points))continue;let z=m(U,T),G=m(N,T),V=m(N,C),it=m(U,C);o.tri(z,G,V,P,P,E),o.tri(z,V,it,P,E,E)}}}}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=o.geometry(),t.sunMesh.visible=o.count>0}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new ce,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let m=(l.rotation??0)*ie,y=[-Math.sin(m),Math.cos(m)],M=l.model==="camera_ceiling",v=l.reach??(M?3:4.5),S=(l.fov??(M?360:90))*ie/2,w=l.motion?new at(.9,.12,.16):new at(.04,.22,.28),A=new at(0,0,0),b=Math.max(4,Math.round(S/.15)),T=.015,C=t.geo.walls2d,I=E=>{let D=y[0]*Math.cos(E)-y[1]*Math.sin(E),U=y[1]*Math.cos(E)+y[0]*Math.sin(E),N=v;for(let k of C){let z=k.b[0]-k.a[0],G=k.b[1]-k.a[1],V=D*G-U*z;if(Math.abs(V)<1e-9)continue;let it=((k.a[0]-l.x)*G-(k.a[1]-l.z)*z)/V,Z=((k.a[0]-l.x)*U-(k.a[1]-l.z)*D)/V;it>.45&&it<N&&Z>=0&&Z<=1&&(N=it)}return N},L=E=>{let D=I(E);return[l.x+(y[0]*Math.cos(E)-y[1]*Math.sin(E))*D,T,l.z+(y[1]*Math.cos(E)+y[0]*Math.sin(E))*D]},P=s.count;for(let E=0;E<b;E++)s.tri([l.x,T,l.z],L(-S+2*S*(E+1)/b),L(-S+2*S*E/b),w,A,A);o.push({id:l.id,start:P,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Up.has(l.lamp)&&this.wallMode==="cut")continue;let[u,f,h]=l.size??fh[l.lamp],p=l.base??0,g=(l.rotation??0)*ie,x={ceiling:e-.07,downlight:e-.03,spot:e-h,panel:e-.03,pendant:Math.max(.4,e-h)+.08,floor:p+h-.15,uplight:p+h,table:p+h-.09,wall:p+h/2,strip:p+Math.max(.02,h)-.01,bollard:p+h-.08,garden:p+h-.03,fan:p+h*.08,column:p+h*.55,tv_bars:p+h*.55,orb_table:p+h*.55,portable:p+h*.55,ambient:p+h,cube:p+h*.55,round_panel:e-.03,garden_set:p+h-.03,wall_updown:p+h/2}[l.lamp],_=(m,y,M=1)=>{n.push(m,x,y),r.push(...c.color.map(v=>v*c.level*.7*M))};if(l.lamp==="strip")for(let m of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,p+u*(.5+m),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6))):_(l.x+Math.cos(g)*u*m,l.z+Math.sin(g)*u*m,.6);else l.lamp==="wall"||l.lamp==="wall_updown"?_(l.x-Math.sin(g)*(f/2+.05),l.z+Math.cos(g)*(f/2+.05)):_(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let m=new at(...c.color.map(w=>w*.09*c.level)),y=new at(0,0,0),M=Math.max(.03,u/2),v=.45+.35*c.level,S=16;for(let w=0;w<S;w++){let A=w/S*Math.PI*2,b=(w+1)/S*Math.PI*2,T=[l.x+Math.cos(A)*M,x,l.z+Math.sin(A)*M],C=[l.x+Math.cos(b)*M,x,l.z+Math.sin(b)*M],I=[l.x+Math.cos(A)*v,.02,l.z+Math.sin(A)*v],L=[l.x+Math.cos(b)*v,.02,l.z+Math.sin(b)*v];s.tri(T,I,L,m,y,y),s.tri(T,L,C,m,y,m)}}}let a=new Qt;a.setAttribute("position",new Gt(n,3)),a.setAttribute("color",new Gt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=ih(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),n=e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let r=new ce;for(let s of e){let o=this.screens.get(s.id),a=s.rotation*ie,l=Math.cos(a),c=Math.sin(a),u=(v,S,w)=>[s.x+v*l-w*c,S,s.z+v*c+w*l];if(o.faces){let v=Math.max(.05,s.w)*(s.mirror?-1:1),S=Math.max(.05,s.d),w=Math.max(.005,s.h),A=mn(t.floor,s);for(let b of o.faces){if(b.part==="cabin"){let z=De(s.type),G=V=>V.color.toLowerCase()==="#13283a"||V.color==="glass";if(z&&z.parts.some(G)){let V=new at(...b.color.map(it=>Math.min(1,it*(.3+.5*b.level))));qu(r,z,s,A,V.getHex(),G);continue}}if(b.part==="band"||b.part==="cabin"){let z=b.part==="cabin",G=A+w*(z?.6:.42),V=z?A+w*.86:G+.07,it=new at(...b.color.map(ht=>Math.min(1,ht*(.3+.45*b.level)))),Z=Math.abs(v)/2+(z?.012:.02),ot=S/2+(z?.012:.02),J=[[-Z,-ot],[Z,-ot],[Z,ot],[-Z,ot]];for(let ht=0;ht<4;ht++){let X=J[ht],Q=J[(ht+1)%4],ft=u(X[0]*Math.sign(v),G,X[1]),mt=u(Q[0]*Math.sign(v),G,Q[1]),pt=u(Q[0]*Math.sign(v),V,Q[1]),At=u(X[0]*Math.sign(v),V,X[1]);r.tri(ft,mt,pt,it),r.tri(ft,pt,At,it)}continue}let T=b.part==="right"?.03:-Math.abs(v)/2+.03,C=b.part==="left"?-.03:Math.abs(v)/2-.03,I=A+(b.part==="bottom"?w*.45:w)+.006,L=new at(...b.color.map(z=>Math.min(1,z*(.35+.65*b.level)))),P=new at(0,0,0),E=(z,G,V=I)=>u(z*Math.sign(v),V,G),D=[E(T,-S/2+.03),E(C,-S/2+.03),E(C,S/2-.03),E(T,S/2-.03)];r.tri(D[0],D[2],D[1],L),r.tri(D[0],D[3],D[2],L);let U=.12+.1*b.level,N=L.clone().multiplyScalar(.5),k=[E(T-U,-S/2-U,I+.004),E(C+U,-S/2-U,I+.004),E(C+U,S/2+U,I+.004),E(T-U,S/2+U,I+.004)];for(let z=0;z<4;z++){let G=(z+1)%4;r.tri(D[z],k[G],k[z],N,P,P),r.tri(D[z],D[G],k[G],N,N,P)}}continue}let f=De(s.type);if(f&&!f.light&&o.ring&&f.parts.some(v=>v.glow)){let v=new at(...o.color.map(S=>Math.min(1,S*(.45+.55*o.level))));qu(r,f,s,mn(t.floor,s),v.getHex())}let h=Xu(s,t.floor);if(!h)continue;let p=new at(...o.color.map(v=>Math.min(1,v*(.35+.65*o.level)))),g=new at(0,0,0),x=h.z+.004;if(r.tri(u(h.x0,h.y0,x),u(h.x1,h.y0,x),u(h.x1,h.y1,x),p),r.tri(u(h.x0,h.y0,x),u(h.x1,h.y1,x),u(h.x0,h.y1,x),p),o.plain)continue;let _=.18+.12*o.level,m=p.clone().multiplyScalar(.5),y=[u(h.x0,h.y0,x),u(h.x1,h.y0,x),u(h.x1,h.y1,x),u(h.x0,h.y1,x)],M=[u(h.x0-_,h.y0-_,x+.01),u(h.x1+_,h.y0-_,x+.01),u(h.x1+_,h.y1+_,x+.01),u(h.x0-_,h.y1+_,x+.01)];for(let v=0;v<4;v++){let S=(v+1)%4;r.tri(y[v],M[v],M[S],m,g,g),r.tri(y[v],M[S],y[S],m,g,m)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=r.geometry(),t.screenMesh.visible=r.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=Xu(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new Yt(new Ei(1,1),new le({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let u=l;new Cs().load(o.picture,f=>{if(t.screenPics.get(r)!==u){f.dispose();return}f.colorSpace=Ce,u.texture=f;let h=u.mesh.material;h.map=f,h.needsUpdate=!0,this.placeScreenPicture(u.mesh,s,a,f),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s?.width&&s?.height?s.width/s.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),u=c/o,f=e.rotation*ie,h=(n.x0+n.x1)/2,p=n.z+.008;t.scale.set(c,u,1),t.rotation.set(0,-f,0),t.position.set(e.x+h*Math.cos(f)-p*Math.sin(f),(n.y0+n.y1)/2,e.z+h*Math.sin(f)+p*Math.cos(f))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){let e=this.flows.filter(u=>u.floorId===t.floor.id).map(uh).join(";"),n=[],r=[],s=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id)continue;let f=this.flowPhase.get(uh(u))??{speed:Op(u.power),offset:0},h=u.power>.5?Math.min(1,.5+u.power/2500):.22,p=u.color.map(y=>y*h),g=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(g<1e-4)continue;let x=[(u.b[0]-u.a[0])/g,(u.b[1]-u.a[1])/g,(u.b[2]-u.a[2])/g],_=[];if(Math.abs(x[1])<.5){let y=Math.hypot(x[0],x[2])||1;_.push([-x[2]/y,0,x[0]/y])}else _.push([1,0,0],[0,0,1]);let m=this.lowQuality?[[Dp*1.4,1]]:[[tS,.25],[Dp,1]];for(let[y,M]of m)for(let v of _){let S=y/2,w=(b,T)=>[b[0]+v[0]*S*T,b[1]+v[1]*S*T,b[2]+v[2]*S*T],A=[[w(u.a,-1),u.dist,0],[w(u.b,-1),u.dist+g,0],[w(u.b,1),u.dist+g,1],[w(u.a,1),u.dist,1]];for(let b of[0,1,2,0,2,3]){let[T,C,I]=A[b];n.push(T[0],T[1],T[2]),r.push(p[0]*M,p[1]*M,p[2]*M),s.push(C,I),o.push(f.speed),a.push(f.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,f]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let h=l.getAttribute(u);h.array.set(f),h.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Qt;c.setAttribute("position",new Gt(n,3)),c.setAttribute("color",new Gt(r,3)),c.setAttribute("uv",new Gt(s,2)),c.setAttribute("flowSpeed",new Gt(o,1)),c.setAttribute("flowOffset",new Gt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=Tp(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let r=new at(n.color),s=this.roomTint?.get(n.roomId);s&&r.lerp(new at(...s).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(rS,s?.3:.75);for(let o=n.start*3;o<n.end*3;o++)e.setXYZ(o,r.r,r.g,r.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=lp(this.activeFloors());e.isEmpty()&&e.set(new H(-4,0,-4),new H(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new H),r=e.getSize(new H),s=this.startView,o=this.floorId===null,a=s?s.phi:.85,l=this.cameraFrame(),c=Math.max(.1,(this.size.w-l.left-l.right)/Math.max(1,this.size.h-l.top-l.bottom)),u=c<1?1.12:1.06,f=up(e,a,c,this.camera.fov*ie,u),h=s?s.theta:f.theta,p=nh(e,h,a,this.camera.aspect,this.camera.fov*ie,l),g=Math.max(8,p.radius);this.controls.maxRadius=Math.max(40,g*3),s&&o?n.y=e.min.y+r.y*(this.houseView?.45:.3):n.add(p.offset),this.floorId===null&&(this.houseRadius=g),s&&o&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,s.radius*1.5)),this.controls.flyTo({target:n,radius:s&&o?s.radius:g,phi:a,theta:h},t)}cameraFrame(){let t=this.size.w<700?12:18,e=Math.min(this.size.w*.4,this.labelInset?this.labelInset+8:t);return{width:this.size.w,height:this.size.h,left:e,right:t,top:t,bottom:t}}placeGround(){let t=new tn,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new H(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new H(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=fS();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new H),r=t.getSize(new H),s=hh*Math.ceil((Math.max(r.x,r.z)+16)/hh);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-ki-.02,n.z)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new Ps;return r.setFromCamera(new Jt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let h=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Xt;if(h!==Xt&&Math.floor(h/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),f=u?this.pickOpenings.get(u):void 0;if(f)return{entity:f}}else if(a.object===c.wallMesh){let u=c.geo.coveredRoomTris.find(g=>l>=g.start&&l<g.end);if(u){if(this.roomId!==null&&c.floor.rooms.some(x=>x.id===this.roomId&&Xn(x))&&u.roofStart!==void 0&&u.roofEnd!==void 0&&l>=u.roofStart&&l<u.roofEnd)continue;return{floorId:c.floor.id,roomId:u.id}}let f=o(c.geo.outdoorTris,l);if(f)return{floorId:c.floor.id,outdoorId:f};let h=o(c.geo.furnitureTris,l),p=h?this.pickFurniture.get(h):void 0;if(p)return{entity:p};if(a.face&&!h){let g=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,x=Math.floor(g/16),_=g%16,m=this.wallMode==="cut"&&x===0,y=(c.mask.glass.value&1<<_)!==0;if(!m){let M=n.ray.direction,v=Math.hypot(M.x,M.z)||1,S=[a.point.x-M.x/v*.3,a.point.z-M.z/v*.3],w=c.floor.rooms.find(A=>A.points.length>=3&&ue(S,A.points))?.id??null;if(this.roomId!==null){if(w===this.roomId)return{floorId:c.floor.id,roomId:w}}else if(!y&&w)return{floorId:c.floor.id,roomId:w}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+ch),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}if(n&&"outdoorId"in n){this.options.onOutdoorTap?this.options.onOutdoorTap(n.floorId,n.outdoorId):this.options.onRoomTap?.(n.floorId,null);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(o=>[o.lampMesh,o.wallMesh].filter(a=>a.visible));for(let o of n.intersectObjects(s,!1)){if(o.faceIndex==null)continue;let a=r.find(u=>u.group===o.object.parent),c=(o.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(u=>o.faceIndex>=u.start&&o.faceIndex<u.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(t,e,n){let r=this.rayAt(e,n),s=t.floor.elevation+t.y,o=r.ray.direction;if(Math.abs(o.y)<1e-4)return null;let a=(s-r.ray.origin.y)/o.y;return a<=0?null:[r.ray.origin.x+o.x*a,r.ray.origin.z+o.z*a]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(f=>f.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(f=>f.floor.furniture.some(h=>h.id===l)):void 0,u=c?.floor.furniture.find(f=>f.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let s=this.furnitureAt(t,e);if(!s){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e)}grabItem(t,e,n,r){let s=t.floor.furniture.find(a=>a.id===e),o=this.floorPoint(t,n,r);return!s||!o?!1:s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(h=>h.id===n.id),u=l&&this.floorPoint(l,t,e);if(!l||!c||!u)return;let f=this.building?.settings.grid??.05;n.x=c.x=Math.round((u[0]+n.offset[0])/f)*f,n.z=c.z=Math.round((u[1]+n.offset[1])/f)*f,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=this.floorPoint(s,t,e);if(!o)return;let a=this.building?.settings.grid??.05;r.x=Math.round((o[0]+r.offset[0])/a)*a,r.z=Math.round((o[1]+r.offset[1])/a)*a,r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=this.selectedFurniture,e=t?this.floors.find(m=>m.floor.furniture.some(y=>y.id===t)):void 0,n=e?.floor.furniture.find(m=>m.id===t);if(!e||!n)return;let r=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,o=e.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=De(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?mn(e.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:mn(e.floor,n),u=n.rotation*ie,f=Math.cos(u),h=Math.sin(u),p=(m,y,M)=>[r+m*f-y*h,M,s+m*h+y*f],g=new Ve,x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],_=new at(.25,.9,1);for(let m=0;m<4;m++){let[y,M]=x[m],[v,S]=x[(m+1)%4];g.seg(p(y,M,c+.01),p(v,S,c+.01),_),g.seg(p(y,M,c+l),p(v,S,c+l),_),g.seg(p(y,M,c+.01),p(y,M,c+l),_)}g.seg(p(-n.w/2,n.d/2+.03,c+.02),p(n.w/2,n.d/2+.03,c+.02),new at(1,1,1)),this.ghost=new yn(g.geometry(),new bn({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=e.floor.elevation+e.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(m=>m.floor.rooms.some(y=>y.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new je(s,o);a.texture.colorSpace=Ce;let l=new si(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),u=this.roof?.group.visible??!1,f=this.ghost?.visible??!1,h=this.renderer.getClearAlpha(),p=new Uint8Array(s*o*4),g=document.createElement("canvas");g.width=s,g.height=o;let x=g.getContext("2d"),_=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let P of this.floors)P.group.visible=P===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let y=m.floor.rooms.flatMap(P=>P.points),M=m.floor.elevation,v=new tn(new H(Math.min(...y.map(P=>P[0]))-.3,M,Math.min(...y.map(P=>P[1]))-.3),new H(Math.max(...y.map(P=>P[0]))+.3,M+Math.min(m.floor.cut_height,m.floor.height),Math.max(...y.map(P=>P[1]))+.3)),S=v.getCenter(new H),w=-.6,A=.8,b=new H(Math.sin(A)*Math.sin(w),Math.cos(A),Math.sin(A)*Math.cos(w));l.position.copy(S).addScaledVector(b,100),l.lookAt(S),l.updateMatrixWorld();let T=.5,C=.5;for(let P of[v.min.x,v.max.x])for(let E of[v.min.y,v.max.y])for(let D of[v.min.z,v.max.z]){let U=new H(P,E,D).applyMatrix4(l.matrixWorldInverse);T=Math.max(T,Math.abs(U.x)),C=Math.max(C,Math.abs(U.y))}let I=s/o;T/C>I?C=T/I:T=C*I,l.left=-T*1.05,l.right=T*1.05,l.top=C*1.05,l.bottom=-C*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,p);let L=x.createImageData(s,o);for(let P=0;P<o;P++)L.data.set(p.subarray((o-1-P)*s*4,(o-P)*s*4),P*s*4);x.putImageData(L,0,0),_.push({floorId:m.floor.id,url:g.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(h);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=u),this.ghost&&(this.ghost.visible=f),a.dispose(),this.invalidate()}return _}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?Ep(n.room,void 0,void 0,n.obstacles):lh(n.rest),l=a.length?a:lh(n.rest),c=0;l.forEach((u,f)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=f)}),r.motion.path=l,r.motion.next=c,n.room&&!ue(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Ip[n.mode])}for(let[n,r]of this.robots)e.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let r=new ce,s=(a,l,c,u,f)=>{let h=[];for(let p=0;p<20;p++)h.push([Math.cos(p/20*Math.PI*2)*a,Math.sin(p/20*Math.PI*2)*a]);me(r,h,l,c,u,f,{aoFrom:0,bottom:!1})};s(.17,.012,.08,2371657,3424863),s(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new le({vertexColors:!0});let o=new ce;me(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new Je,n=new le({color:Ip[t.mode]});return e.add(new Yt(this.robotGeo,this.robotMat),new Yt(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Ap(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t){let e=s=>new at(.25-.2*s,.95-.83*s,1-.7*s),n=new at(0,0,0),r=.02;for(let s of this.floors){let o=new ce,a=null;for(let l of t){if(l.floorId!==s.floor.id)continue;let c=e(l.age);if(a){let u=Math.hypot(l.x-a.x,l.z-a.z)||1,f=-(l.z-a.z)/u*.06,h=(l.x-a.x)/u*.06,p=e(a.age);o.tri([a.x+f,r,a.z+h],[l.x+f,r,l.z+h],[l.x-f,r,l.z-h],p,c,c),o.tri([a.x+f,r,a.z+h],[l.x-f,r,l.z-h],[a.x-f,r,a.z-h],p,c,p)}for(let u=0;u<12;u++){let f=u/12*Math.PI*2,h=(u+1)/12*Math.PI*2;o.tri([l.x,r,l.z],[l.x+Math.cos(h)*.22,r,l.z+Math.sin(h)*.22],[l.x+Math.cos(f)*.22,r,l.z+Math.sin(f)*.22],c,n,n)}a=l}s.trailMesh.geometry.dispose(),s.trailMesh.geometry=o.geometry(),s.trailMesh.visible=o.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ie,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*ie)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new H(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new H(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}focus(t,e,n,r,s){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new H(e,o.floor.elevation+o.ty+r,n),radius:5.5,phi:.78},900),s){this.flashes.set(s,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=this.stepFans(e),l=!1;if(this.flashes.size){let g=new Set;for(let[x,_]of this.flashes){let m=this.deviceFloor.get(x);m&&g.add(m),_<=t&&this.flashes.delete(x)}l=this.flashes.size>0;for(let x of this.floors)g.has(x.floor.id)&&this.buildLamps(x)}let c=this.placeRoof(e),u=this.stepRobots(t),f=this.stepWeather(t),h=r||s||o||a||l||c,p=[];if(r&&p.push("camera"),s&&p.push("floors"),o&&p.push("openings"),a&&p.push("fans"),l&&p.push("flash"),c&&p.push("roof"),this.flowActive&&p.push("flow"),this.soundActive&&p.push("sound"),this.solarActive&&p.push("solar"),this.effectTick&&p.push("effect"),u&&p.push("robot"),n&&p.push("orbit"),this.tintTick&&p.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=h?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,p),h&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let g=this.lowQuality?2*Np:Np;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=g/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.invalidate()},g)}!h&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&f&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!h&&u&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&(this.flowActive||this.solarActive||this.soundActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*Fp:Fp))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(f=>f.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((f,h)=>{let p=f?f[0]*n/s+f[1]*r/s>=.25:a;!l&&p&&(c|=1<<h)});let u=this.roomId!==null&&o.floor.rooms.some(f=>f.id===this.roomId&&Xn(f));o.mask.standing.value=l?0:ip(this.floorId!==null||u),o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new H,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let _ of[a.z0,a.z1]){n.set(x,u,_).project(this.camera);let m=(n.x+1)/2*t,y=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y}),(!c||m>c.x)&&(c={x:m,y})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let f=o.labelSize.w,h=8+this.labelInset,p=l.x-f-14,g=l.y;p<h&&this.labelInset&&(p=c.x+14,g=c.y),s.push({fv:o,left:Math.max(h,Math.min(t-f-8,p)),y:g,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.floorId!==null&&(o.views!=="all"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new H(o.p[0],o.p[1]+(l?.y??0)+(o.roof?(1-this.roofO)*2.2:0),o.p[2]),u=this.camera.position.clone().sub(c),f=u.length(),h=u.normalize().dot(new H(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let p=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,g=Math.min(1.6,Math.max(.25,15/Math.max(1,f)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!p,g,h)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new H,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(s.x,a.floor.elevation+a.y+.9,s.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("fp3d-dev-full",u==="full"),o.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function oS(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,u)=>{e.strokeStyle=`rgba(55,224,255,${u})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let f of[u,u+256/2])n(o+f+.75,c,o+f+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new Ti(t);return s.flipY=!1,s.wrapS=hn,s.wrapT=hn,s.anisotropy=4,s.colorSpace=Ce,s}function aS(i){let t=new le({map:i,transparent:!0,blending:Fe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function lS(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new Ti(i);return e.wrapS=$i,e.wrapT=$i,e.colorSpace=Ce,e}function uh(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function Op(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function cS(i){let t=new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function uS(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function hS(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new Ti(t);return r.colorSpace=Ce,r}function fS(){let t=hh,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new Ti(e);return s.anisotropy=4,s.colorSpace=Ce,s}function XR(i,t){return new dh(i,t)}function Kl(i,t,e,n){let[r,s,o]=t.size??fh[t.lamp],a=t.base??0,l=(t.rotation??0)*ie,c=Math.cos(l),u=Math.sin(l),f=(x,_)=>[t.x+x*c-_*u,t.z+x*u+_*c],h=(x,_,m,y,M,v=14)=>{let S=[];for(let w=0;w<v;w++){let A=w/v*Math.PI*2;S.push([t.x+Math.cos(A)*x,t.z+Math.sin(A)*x])}me(i,S,_,m,y,M,{aoFrom:0,bottom:!0})},p=(x,_,m,y,M,v,S,w=S)=>me(i,[f(x,m),f(_,m),f(_,y),f(x,y)],M,v,S,w,{aoFrom:0,bottom:!0}),g=Math.max(.05,Math.min(r,s)/2);switch(t.lamp){case"ceiling":h(g*.25,e-.04,e,Ot,Ot,8),h(g,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"fan":{let x=Math.min(r,s)*.105;h(x*1.18,a,a+o*.05,Ot,Ot,12),h(x,a-o*.065,a,n,n,6);break}case"pendant":{let x=Math.max(.4,e-o);h(.06,e-.02,e,Ot,Ot,8);let _=t.variant==="globe"?x+2*g:t.variant==="drum"?x+.24:x+.2;if(h(.008,_,e-.02,Ot,Ot,5),t.variant==="globe")for(let y=0;y<7;y++){let M=Math.PI*(y/7),v=Math.PI*((y+1)/7);h(g*Math.max(.2,Math.sin((M+v)/2)),x+g-g*Math.cos(M),x+g-g*Math.cos(v),n,n,14)}else if(t.variant==="cone")for(let y=0;y<4;y++)h(g*(.25+.75*(4-y)/4),x+.06*y,x+.06*(y+1),n,n,16);else t.variant==="drum"?h(g,x,x+.24,n,n,18):(h(g*.35,x+.14,x+.2,n,n,12),h(g,x,x+.14,n,n,16));break}case"downlight":h(g,e-.012,e,Ot,Ot,12),h(g*.7,e-.02,e-.012,n,n,12);break;case"spot":h(g*.6,e-.02,e,Ot,Ot,10),h(g,e-Math.max(.06,o),e-.02,Ot,Ot,12),h(g*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":p(-r/2,r/2,-s/2,s/2,e-Math.max(.015,o),e,Ot,Ot),p(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"round_panel":h(g,e-Math.max(.025,o),e,Ot,Ot,18),h(g*.92,e-Math.max(.025,o)-.006,e-Math.max(.025,o),n,n,18);break;case"uplight":h(Math.max(.1,g*.6),a,a+.03,Ot,Ot),h(.014,a+.03,a+o-.12,Ot,Ot,6),h(g,a+o-.14,a+o-.02,Ot,Ot),h(g*.92,a+o-.02,a+o,n,n);break;case"bollard":h(g,a,a+o-.14,Ot,Ot,10),h(g*.9,a+o-.14,a+o-.03,n,n,10),h(g*1.1,a+o-.03,a+o,Ot,Ot,10);break;case"garden":h(.012,a,a+o-.08,Ot,Ot,5),h(g,a+o-.08,a+o-.01,Ot,Ot,10),h(g*.8,a+o-.01,a+o,n,n,10);break;case"floor":h(Math.max(.1,g*.7),a,a+.03,Ot,Ot),h(.014,a+.03,a+o-.28,Ot,Ot,6),h(g,a+o-.3,a+o,n,n);break;case"table":h(Math.max(.05,g*.55),a,a+.03,Ot,Ot),h(.012,a+.03,a+o-.16,Ot,Ot,6),h(g,a+o-.18,a+o,n,n);break;case"column":p(-r*.42,r*.42,-s*.42,s*.42,a,a+o*.035,Ot),p(-r*.18,r*.18,-s*.18,s*.18,a+o*.035,a+o,n);break;case"tv_bars":for(let x of[-r*.31,r*.31])p(x-r*.13,x+r*.13,-s*.42,s*.42,a,a+o*.06,Ot),p(x-r*.065,x+r*.065,-s*.18,s*.18,a+o*.06,a+o,n);break;case"orb_table":{h(g*.52,a,a+o*.08,Ot,Ot,14);let x=[.55,.82,1,.92,.66];for(let _=0;_<x.length;_++)h(g*x[_],a+o*(.08+_*.18),a+o*(.08+(_+1)*.18),n,n,12);break}case"portable":{p(-r*.42,r*.42,-s*.42,s*.42,a,a+o*.06,Ot);for(let x=0;x<4;x++){let _=.48-x*.07;p(-r*_,r*_,-s*_,s*_,a+o*(.06+x*.2),a+o*(.06+(x+1)*.2),n)}p(-r*.18,r*.18,-s*.18,s*.18,a+o*.86,a+o,Ot);break}case"ambient":h(g*.92,a,a+o*.22,Ot,Ot,14),p(-r*.42,r*.42,-s*.42,s*.42,a+o*.22,a+o,n);break;case"cube":p(-r/2,r/2,-s/2,s/2,a,a+o*.08,Ot),p(-r*.46,r*.46,-s*.46,s*.46,a+o*.08,a+o,n);break;case"garden_set":for(let x of[-r*.34,0,r*.34])p(x-r*.012,x+r*.012,-s*.06,s*.06,a,a+o*.68,Ot),p(x-r*.065,x+r*.065,-s*.25,s*.25,a+o*.68,a+o*.92,Ot),p(x-r*.052,x+r*.052,-s*.2,s*.2,a+o*.92,a+o,n);break;case"wall":{let x=t.base??Ys;p(-r/2+.03,r/2-.03,-s/2,-s/2+.02,x,x+o,Ot),p(-r/2,r/2,-s/2+.02,s/2,x+o*.15,x+o*.85,n);break}case"wall_updown":{let x=t.base??Ys;p(-r*.42,r*.42,-s/2,-s*.25,x+o*.08,x+o*.92,Ot),p(-r/2,r/2,-s*.24,s/2,x,x+o*.18,n),p(-r/2,r/2,-s*.24,s/2,x+o*.82,x+o,n);break}case"strip":{let x=Math.max(.02,o),_=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright){p(-r/2,r/2,-s/2,s/2,_-x,_,n);break}let m=(t.roll??0)*ie,y=Math.cos(m),M=Math.sin(m),v=t.upright?a+r/2:_-x/2,S=(C,I,L)=>{let P=C,E=I*y-L*M,D=I*M+L*y;return t.upright&&([P,E]=[-E,P]),[t.x+P*c-D*u,v+E,t.z+P*u+D*c]},w=[S(-r/2,-x/2,-s/2),S(r/2,-x/2,-s/2),S(r/2,-x/2,s/2),S(-r/2,-x/2,s/2),S(-r/2,x/2,-s/2),S(r/2,x/2,-s/2),S(r/2,x/2,s/2),S(-r/2,x/2,s/2)],A=new at(n),b=[t.x,v,t.z],T=(C,I,L,P)=>{let[E,D,U]=[w[C],w[I],w[L]],N=[(D[1]-E[1])*(U[2]-E[2])-(D[2]-E[2])*(U[1]-E[1]),(D[2]-E[2])*(U[0]-E[0])-(D[0]-E[0])*(U[2]-E[2]),(D[0]-E[0])*(U[1]-E[1])-(D[1]-E[1])*(U[0]-E[0])],k=[E[0]-b[0],E[1]-b[1],E[2]-b[2]],z=N[0]*k[0]+N[1]*k[1]+N[2]*k[2]<0,[G,V,it,Z]=z?[w[P],w[L],w[I],w[C]]:[w[C],w[I],w[L],w[P]];i.tri(G,V,it,A,A,A),i.tri(G,it,Z,A,A,A)};T(0,1,2,3),T(4,5,6,7),T(0,1,5,4),T(1,2,6,5),T(2,3,7,6),T(3,0,4,7);break}}}export{dh as FloorplanViewer,XR as createViewer,ZM as furniturePreview,sS as isLowEnd,Kl as pushLampModel};
