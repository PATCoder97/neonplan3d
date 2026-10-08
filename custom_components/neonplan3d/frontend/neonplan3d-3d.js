var Bh=0,xc=1,zh=2;var Ts=1,kh=2,Nr=3,Ti=0,en=1,Me=2,kn=0,Ei=1,Fe=2,bc=3,Es=4,Vh=5;var Ji=100,Gh=101,Hh=102,Wh=103,Xh=104,qh=200,Yh=201,$h=202,Zh=203,_c=204,vc=205,Jh=206,Kh=207,Qh=208,jh=209,tf=210,ef=211,nf=212,rf=213,sf=214,Bo=0,zo=1,ko=2,Tr=3,Vo=4,Go=5,Ho=6,Wo=7,yc=0,of=1,af=2,An=0,Mc=1,Sc=2,wc=3,Tc=4,Ec=5,Ac=6,Rc=7;var Cc=300,Ai=301,Ki=302,ba=303,_a=304,As=306,Wi=1e3,cn=1001,Xo=1002,ke=1003,lf=1004;var Rs=1005;var Ge=1006,va=1007;var Ri=1008;var fn=1009,Ic=1010,Pc=1011,Ur=1012,ya=1013,Rn=1014,Cn=1015,In=1016,Ma=1017,Sa=1018,Or=1020,Lc=35902,Fc=35899,Dc=1021,Nc=1022,_n=1023,On=1026,Ci=1027,Uc=1028,wa=1029,Ii=1030,Ta=1031;var Ea=1033,Cs=33776,Is=33777,Ps=33778,Ls=33779,Aa=35840,Ra=35841,Ca=35842,Ia=35843,Pa=36196,La=37492,Fa=37496,Da=37488,Na=37489,Fs=37490,Ua=37491,Oa=37808,Ba=37809,za=37810,ka=37811,Va=37812,Ga=37813,Ha=37814,Wa=37815,Xa=37816,qa=37817,Ya=37818,$a=37819,Za=37820,Ja=37821,Ka=36492,Qa=36494,ja=36495,tl=36283,el=36284,Ds=36285,nl=36286;var ss=2300,qo=2301,No=2302,oc=2303,ac=2400,lc=2401,cc=2402;var cf=3200;var Oc=0,uf=1,jn="",Ce="srgb",os="srgb-linear",as="linear",de="srgb";var Uo=7680;var hf=519,ff=512,df=513,pf=514,il=515,mf=516,gf=517,rl=518,xf=519,bf=35044,Bc=35048;var zc="300 es",En=2e3,ls=2001;function n0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function i0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _f(){let i=Er("canvas");return i.style.display="block",i}var ah={},Ar=null;function kc(...i){let t="THREE."+i.shift();Ar?Ar("log",t,...i):console.log(t,...i)}function vf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=vf(i);let t="THREE."+i.shift();if(Ar)Ar("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function zt(...i){i=vf(i);let t="THREE."+i.shift();if(Ar)Ar("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Hi(...i){let t=i.join(" ");t in ah||(ah[t]=!0,Bt(...i))}function yf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Mf={[Bo]:zo,[ko]:Ho,[Vo]:Wo,[Tr]:Go,[zo]:Bo,[Ho]:ko,[Wo]:Vo,[Go]:Tr},Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ol=Math.PI/180,Yo=180/Math.PI;function Ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function r0(i,t){return(i%t+t)%t}function Bl(i,t,e){return(1-e)*i+e*t}function Qr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xc=class Xc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xc.prototype.isVector2=!0;var Zt=Xc,zn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],h=s[o+0],d=s[o+1],m=s[o+2],x=s[o+3];if(f!==x||l!==h||c!==d||u!==m){let g=l*h+c*d+u*m+f*x;g<0&&(h=-h,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let _=Math.acos(g),S=Math.sin(_);p=Math.sin(p*_)/S,a=Math.sin(a*_)/S,l=l*p+h*a,c=c*p+d*a,u=u*p+m*a,f=f*p+x*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+m*a,f=f*p+x*a;let _=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=_,c*=_,u*=_,f*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+u*f+l*d-c*h,t[e+1]=l*m+u*h+c*f-a*d,t[e+2]=c*m+u*d+a*h-l*f,t[e+3]=u*m-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},qc=class qc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zl.copy(this).projectOnVector(t),this.sub(zl)}reflect(t){return this.sub(zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qc.prototype.isVector3=!0;var G=qc,zl=new G,lh=new zn,Yc=class Yc{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],x=r[0],g=r[3],p=r[6],_=r[1],S=r[4],v=r[7],M=r[2],w=r[5],A=r[8];return s[0]=o*x+a*_+l*M,s[3]=o*g+a*S+l*w,s[6]=o*p+a*v+l*A,s[1]=c*x+u*_+f*M,s[4]=c*g+u*S+f*w,s[7]=c*p+u*v+f*A,s[2]=h*x+d*_+m*M,s[5]=h*g+d*S+m*w,s[8]=h*p+d*v+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,m=e*f+n*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=f*x,t[1]=(r*c-u*n)*x,t[2]=(a*n-r*o)*x,t[3]=h*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kl.makeScale(t,e)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kl.makeRotation(-t)),this}translate(t,e){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Yc.prototype.isMatrix3=!0;var Gt=Yc,kl=new Gt,ch=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uh=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s0(){let i={enabled:!0,workingColorSpace:os,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===de&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?as:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[os]:{primaries:t,whitePoint:n,transfer:as,toXYZ:ch,fromXYZ:uh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:de,toXYZ:ch,fromXYZ:uh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var te=s0();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ur,$o=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ur===void 0&&(ur=Er("canvas")),ur.width=t.width,ur.height=t.height;let r=ur.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=ur}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Jn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},o0=0,Rr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vl(r[o].image)):s.push(Vl(r[o]))}else s=Vl(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Vl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$o.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var a0=0,Gl=new G,Je=class i extends Bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=cn,r=cn,s=Ge,o=Ri,a=_n,l=fn,c=i.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Ns(),this.name="",this.source=new Rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wi:t.x=t.x-Math.floor(t.x);break;case cn:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wi:t.y=t.y-Math.floor(t.y);break;case cn:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Cc;Je.DEFAULT_ANISOTROPY=1;var $c=class $c{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(d+1)/2,M=(p+1)/2,w=(u+h)/4,A=(f+x)/4,b=(m+g)/4;return S>v&&S>M?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=w/n,s=A/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=b/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=A/s,r=b/s),this.set(n,r,s,e),this}let _=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(f-x)/_,this.z=(h-u)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$c.prototype.isVector4=!0;var Ae=$c,Zo=class extends Bn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new Je(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Rr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends Zo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},cs=class extends Je{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jo=class extends Je{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xa=class xa{constructor(t,e,n,r,s,o,a,l,c,u,f,h,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,f,h,d,m,x,g)}set(t,e,n,r,s,o,a,l,c,u,f,h,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/hr.setFromMatrixColumn(t,0).length(),s=1/hr.setFromMatrixColumn(t,1).length(),o=1/hr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let h=o*u,d=o*f,m=a*u,x=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*u,d=l*f,m=c*u,x=c*f;e[0]=h+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=x+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*u,d=l*f,m=c*u,x=c*f;e[0]=h-x*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*u,d=o*f,m=a*u,x=a*f;e[0]=l*u,e[4]=m*c-d,e[8]=h*c+x,e[1]=l*f,e[5]=x*c+h,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*u,e[4]=x-h*f,e[8]=m*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+m,e[10]=h-x*f}else if(t.order==="XZY"){let h=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+x,e[5]=o*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(l0,t,c0)}lookAt(t,e,n){let r=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),hi.crossVectors(n,an),hi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),hi.crossVectors(n,an)),hi.normalize(),co.crossVectors(an,hi),r[0]=hi.x,r[4]=co.x,r[8]=an.x,r[1]=hi.y,r[5]=co.y,r[9]=an.y,r[2]=hi.z,r[6]=co.z,r[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],S=n[7],v=n[11],M=n[15],w=r[0],A=r[4],b=r[8],T=r[12],C=r[1],I=r[5],F=r[9],P=r[13],E=r[2],D=r[6],U=r[10],N=r[14],z=r[3],O=r[7],k=r[11],V=r[15];return s[0]=o*w+a*C+l*E+c*z,s[4]=o*A+a*I+l*D+c*O,s[8]=o*b+a*F+l*U+c*k,s[12]=o*T+a*P+l*N+c*V,s[1]=u*w+f*C+h*E+d*z,s[5]=u*A+f*I+h*D+d*O,s[9]=u*b+f*F+h*U+d*k,s[13]=u*T+f*P+h*N+d*V,s[2]=m*w+x*C+g*E+p*z,s[6]=m*A+x*I+g*D+p*O,s[10]=m*b+x*F+g*U+p*k,s[14]=m*T+x*P+g*N+p*V,s[3]=_*w+S*C+v*E+M*z,s[7]=_*A+S*I+v*D+M*O,s[11]=_*b+S*F+v*U+M*k,s[15]=_*T+S*P+v*N+M*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15],_=l*d-c*h,S=a*d-c*f,v=a*h-l*f,M=o*d-c*u,w=o*h-l*u,A=o*f-a*u;return e*(x*_-g*S+p*v)-n*(m*_-g*M+p*w)+r*(m*S-x*M+p*A)-s*(m*v-x*w+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],_=e*a-n*o,S=e*l-r*o,v=e*c-s*o,M=n*l-r*a,w=n*c-s*a,A=r*c-s*l,b=u*x-f*m,T=u*g-h*m,C=u*p-d*m,I=f*g-h*x,F=f*p-d*x,P=h*p-d*g,E=_*P-S*F+v*I+M*C-w*T+A*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/E;return t[0]=(a*P-l*F+c*I)*D,t[1]=(r*F-n*P-s*I)*D,t[2]=(x*A-g*w+p*M)*D,t[3]=(h*w-f*A-d*M)*D,t[4]=(l*C-o*P-c*T)*D,t[5]=(e*P-r*C+s*T)*D,t[6]=(g*v-m*A-p*S)*D,t[7]=(u*A-h*v+d*S)*D,t[8]=(o*F-a*C+c*b)*D,t[9]=(n*C-e*F-s*b)*D,t[10]=(m*w-x*v+p*_)*D,t[11]=(f*v-u*w-d*_)*D,t[12]=(a*T-o*I-l*b)*D,t[13]=(e*I-n*T+r*b)*D,t[14]=(x*S-m*M-g*_)*D,t[15]=(u*M-f*S+h*_)*D,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,m=s*f,x=o*u,g=o*f,p=a*f,_=l*c,S=l*u,v=l*f,M=n.x,w=n.y,A=n.z;return r[0]=(1-(x+p))*M,r[1]=(d+v)*M,r[2]=(m-S)*M,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(h+p))*w,r[6]=(g+_)*w,r[7]=0,r[8]=(m+S)*A,r[9]=(g-_)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=hr.set(r[0],r[1],r[2]).length(),a=hr.set(r[4],r[5],r[6]).length(),l=hr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Mn.copy(this);let c=1/o,u=1/a,f=1/l;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,e.setFromRotationMatrix(Mn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=En,l=!1){let c=this.elements,u=2*s/(e-t),f=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r),m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===En)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ls)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=En,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-r),h=-(e+t)/(e-t),d=-(n+r)/(n-r),m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===En)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===ls)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};xa.prototype.isMatrix4=!0;var we=xa,hr=new G,Mn=new we,l0=new G(0,0,0),c0=new G(1,1,1),hi=new G,co=new G,an=new G,hh=new we,fh=new zn,xi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fh.setFromEuler(this),this.setFromQuaternion(fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},u0=0,dh=new G,fr=new zn,Xn=new we,uo=new G,jr=new G,h0=new G,f0=new zn,ph=new G(1,0,0),mh=new G(0,1,0),gh=new G(0,0,1),xh={type:"added"},d0={type:"removed"},dr={type:"childadded",child:null},Hl={type:"childremoved",child:null},sn=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new xi,n=new zn,r=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new Gt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fr.setFromAxisAngle(t,e),this.quaternion.multiply(fr),this}rotateOnWorldAxis(t,e){return fr.setFromAxisAngle(t,e),this.quaternion.premultiply(fr),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return dh.copy(t).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(jr,uo,this.up):Xn.lookAt(uo,jr,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),fr.setFromRotationMatrix(Xn),this.quaternion.premultiply(fr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xh),dr.child=t,this.dispatchEvent(dr),dr.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(d0),Hl.child=t,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xh),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,h0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,f0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new G(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},p0={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Wl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var st=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=te.workingColorSpace){if(t=r0(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Wl(o,s,t+1/3),this.g=Wl(o,s,t),this.b=Wl(o,s,t-1/3)}return te.colorSpaceToWorking(this,r),this}setStyle(t,e=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Sf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return te.workingToColorSpace(Ye.copy(this),t),Math.round(ne(Ye.r*255,0,255))*65536+Math.round(ne(Ye.g*255,0,255))*256+Math.round(ne(Ye.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ye.copy(this),e);let n=Ye.r,r=Ye.g,s=Ye.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Ce){te.workingToColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,r=Ye.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(ho);let n=Bl(fi.h,ho.h,e),r=Bl(fi.s,ho.s,e),s=Bl(fi.l,ho.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new st;st.NAMES=Sf;var us=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Xi=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Sn=new G,qn=new G,Xl=new G,Yn=new G,pr=new G,mr=new G,bh=new G,ql=new G,Yl=new G,$l=new G,Zl=new Ae,Jl=new Ae,Kl=new Ae,gi=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Sn.subVectors(t,e),r.cross(Sn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Sn.subVectors(r,e),qn.subVectors(n,e),Xl.subVectors(t,e);let o=Sn.dot(Sn),a=Sn.dot(qn),l=Sn.dot(Xl),c=qn.dot(qn),u=qn.dot(Xl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,m=(o*u-a*l)*h;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Zl.setScalar(0),Jl.setScalar(0),Kl.setScalar(0),Zl.fromBufferAttribute(t,e),Jl.fromBufferAttribute(t,n),Kl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Zl,s.x),o.addScaledVector(Jl,s.y),o.addScaledVector(Kl,s.z),o}static isFrontFacing(t,e,n,r){return Sn.subVectors(n,e),qn.subVectors(t,e),Sn.cross(qn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Sn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;pr.subVectors(r,n),mr.subVectors(s,n),ql.subVectors(t,n);let l=pr.dot(ql),c=mr.dot(ql);if(l<=0&&c<=0)return e.copy(n);Yl.subVectors(t,r);let u=pr.dot(Yl),f=mr.dot(Yl);if(u>=0&&f<=u)return e.copy(r);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(pr,o);$l.subVectors(t,s);let d=pr.dot($l),m=mr.dot($l);if(m>=0&&d<=m)return e.copy(s);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(mr,a);let g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return bh.subVectors(s,r),a=(f-u)/(f-u+(d-m)),e.copy(r).addScaledVector(bh,a);let p=1/(g+x+h);return o=x*p,a=h*p,e.copy(n).addScaledVector(pr,o).addScaledVector(mr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qe=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fo.copy(n.boundingBox)),fo.applyMatrix4(t.matrixWorld),this.union(fo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ts),po.subVectors(this.max,ts),gr.subVectors(t.a,ts),xr.subVectors(t.b,ts),br.subVectors(t.c,ts),di.subVectors(xr,gr),pi.subVectors(br,xr),zi.subVectors(gr,br);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-zi.z,zi.y,di.z,0,-di.x,pi.z,0,-pi.x,zi.z,0,-zi.x,-di.y,di.x,0,-pi.y,pi.x,0,-zi.y,zi.x,0];return!Ql(e,gr,xr,br,po)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,gr,xr,br,po))?!1:(mo.crossVectors(di,pi),e=[mo.x,mo.y,mo.z],Ql(e,gr,xr,br,po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$n=[new G,new G,new G,new G,new G,new G,new G,new G],wn=new G,fo=new Qe,gr=new G,xr=new G,br=new G,di=new G,pi=new G,zi=new G,ts=new G,po=new G,mo=new G,ki=new G;function Ql(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ki.fromArray(i,s);let a=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),u=n.dot(ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Le=new G,go=new Zt,m0=0,gn=class extends Bn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bf,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)go.fromBufferAttribute(this,e),go.applyMatrix3(t),this.setXY(e,go.x,go.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qr(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qr(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qr(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var hs=class extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var qi=class extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Vt=class extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}},g0=new Qe,es=new G,jl=new G,bi=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):g0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;es.subVectors(t,this.center);let e=es.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(es,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(es.copy(t.center).add(jl)),this.expandByPoint(es.copy(t.center).sub(jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},x0=0,mn=new we,tc=new sn,_r=new G,ln=new Qe,ns=new Qe,ze=new G,Jt=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(n0(t)?qi:hs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return tc.lookAt(t),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(ln.min,ns.min),ln.expandByPoint(ze),ze.addVectors(ln.max,ns.max),ln.expandByPoint(ze)):(ln.expandByPoint(ns.min),ln.expandByPoint(ns.max))}ln.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ze.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ze));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ze.fromBufferAttribute(a,c),l&&(_r.fromBufferAttribute(t,c),ze.add(_r)),r=Math.max(r,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new G,l[b]=new G;let c=new G,u=new G,f=new G,h=new Zt,d=new Zt,m=new Zt,x=new G,g=new G;function p(b,T,C){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,C),h.fromBufferAttribute(s,b),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),u.sub(c),f.sub(c),d.sub(h),m.sub(h);let I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(I),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(I),a[b].add(x),a[T].add(x),a[C].add(x),l[b].add(g),l[T].add(g),l[C].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let b=0,T=_.length;b<T;++b){let C=_[b],I=C.start,F=C.count;for(let P=I,E=I+F;P<E;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let S=new G,v=new G,M=new G,w=new G;function A(b){M.fromBufferAttribute(r,b),w.copy(M);let T=a[b];S.copy(T),S.sub(M.multiplyScalar(M.dot(T))).normalize(),v.crossVectors(w,T);let I=v.dot(l[b])<0?-1:1;o.setXYZW(b,S.x,S.y,S.z,I)}for(let b=0,T=_.length;b<T;++b){let C=_[b],I=C.start,F=C.count;for(let P=I,E=I+F;P<E;P+=3)A(t.getX(P+0)),A(t.getX(P+1)),A(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,f=new G;if(t)for(let h=0,d=t.count;h<d;h+=3){let m=t.getX(h+0),x=t.getX(h+1),g=t.getX(h+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)h[m++]=c[d++]}return new gn(h,u,f)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ec=new G,b0=new G,_0=new Gt,Tn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=ec.subVectors(n,e).cross(b0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(ec),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_0.getNormalMatrix(t),r=this.coplanarPoint(ec).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},v0=0,Kn=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Ei,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=vc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new st().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Zn=new G,nc=new G,xo=new G,bo=new G,Yi=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){nc.copy(t).add(e).multiplyScalar(.5),xo.copy(e).sub(t).normalize(),bo.copy(this.origin).sub(nc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(xo),a=bo.dot(this.direction),l=-bo.dot(xo),c=bo.lengthSq(),u=Math.abs(1-o*o),f,h,d,m;if(u>0)if(f=o*l-a,h=o*a-l,m=s*u,f>=0)if(h>=-m)if(h<=m){let x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(nc).addScaledVector(xo,h),d}intersectSphere(t,e){if(t.radius<0)return null;Zn.subVectors(t.center,this.origin);let n=Zn.dot(this.direction),r=Zn.dot(Zn)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,_=n.y-o.y,S=n.z-o.z,v=Math.abs(l),M=Math.abs(c),w=Math.abs(u),A,b,T,C,I,F,P,E,D,U,N,z;if(v>=M&&v>=w?(T=l,F=f,D=m,z=p,l>=0?(A=c,b=u,C=h,I=d,P=x,E=g,U=_,N=S):(A=u,b=c,C=d,I=h,P=g,E=x,U=S,N=_)):M>=w?(T=c,F=h,D=x,z=_,c>=0?(A=u,b=l,C=d,I=f,P=g,E=m,U=S,N=p):(A=l,b=u,C=f,I=d,P=m,E=g,U=p,N=S)):(T=u,F=d,D=g,z=S,u>=0?(A=l,b=c,C=f,I=h,P=m,E=x,U=p,N=_):(A=c,b=l,C=h,I=f,P=x,E=m,U=_,N=p)),T===0)return null;let O=A/T,k=b/T,V=1/T,it=C-O*F,et=I-k*F,lt=P-O*D,j=E-k*D,ut=U-O*z,X=N-k*z,$=ut*j-X*lt,ct=it*X-et*ut,gt=lt*et-j*it;if(r){if($<0||ct<0||gt<0)return null}else if(($<0||ct<0||gt<0)&&($>0||ct>0||gt>0))return null;let ft=$+ct+gt;if(ft===0)return null;let Pt=V*($*F+ct*D+gt*z);return(ft>0?Pt<0:Pt>0)?null:this.at(Pt/ft,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_h=new we,Vi=new Yi,_o=new bi,vh=new G,vo=new G,yo=new G,Mo=new G,ic=new G,So=new G,yh=new G,wo=new G,Wt=class extends sn{constructor(t=new Jt,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){So.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(ic.fromBufferAttribute(f,t),o?So.addScaledVector(ic,u):So.addScaledVector(ic.sub(e),u))}e.add(So)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),Vi.copy(t.ray).recast(t.near),!(_o.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(_o,vh)===null||Vi.origin.distanceToSquared(vh)>(t.far-t.near)**2))&&(_h.copy(s).invert(),Vi.copy(t.ray).applyMatrix4(_h),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=h.length;m<x;m++){let g=h[m],p=o[g.materialIndex],_=Math.max(g.start,d.start),S=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,M=S;v<M;v+=3){let w=a.getX(v),A=a.getX(v+1),b=a.getX(v+2);r=To(this,p,t,n,c,u,f,w,A,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);r=To(this,o,t,n,c,u,f,_,S,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=h.length;m<x;m++){let g=h[m],p=o[g.materialIndex],_=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,M=S;v<M;v+=3){let w=v,A=v+1,b=v+2;r=To(this,p,t,n,c,u,f,w,A,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=g,S=g+1,v=g+2;r=To(this,o,t,n,c,u,f,_,S,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function y0(i,t,e,n,r,s,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Ti,a),l===null)return null;wo.copy(a),wo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wo);return c<e.near||c>e.far?null:{distance:c,point:wo.clone(),object:i}}function To(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,vo),i.getVertexPosition(l,yo),i.getVertexPosition(c,Mo);let u=y0(i,t,e,n,vo,yo,Mo,yh);if(u){let f=new G;gi.getBarycoord(yh,vo,yo,Mo,f),r&&(u.uv=gi.getInterpolatedAttribute(r,a,l,c,f,new Zt)),s&&(u.uv1=gi.getInterpolatedAttribute(s,a,l,c,f,new Zt)),o&&(u.normal=gi.getInterpolatedAttribute(o,a,l,c,f,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new G,materialIndex:0};gi.getNormal(vo,yo,Mo,h.normal),u.face=h,u.barycoord=f}return u}var Ko=class extends Je{constructor(t=null,e=1,n=1,r,s,o,a,l,c=ke,u=ke,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gi=new bi,M0=new Zt(.5,.5),Eo=new G,fs=class{constructor(t=new Tn,e=new Tn,n=new Tn,r=new Tn,s=new Tn,o=new Tn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],m=s[8],x=s[9],g=s[10],p=s[11],_=s[12],S=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-u,p-m,M-_).normalize(),r[1].setComponents(c+o,d+u,p+m,M+_).normalize(),r[2].setComponents(c+a,d+f,p+x,M+S).normalize(),r[3].setComponents(c-a,d-f,p-x,M-S).normalize(),n)r[4].setComponents(l,h,g,v).normalize(),r[5].setComponents(c-l,d-h,p-g,M-v).normalize();else if(r[4].setComponents(c-l,d-h,p-g,M-v).normalize(),e===En)r[5].setComponents(c+l,d+h,p+g,M+v).normalize();else if(e===ls)r[5].setComponents(l,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=M0.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Eo.x=r.normal.x>0?t.max.x:t.min.x,Eo.y=r.normal.y>0?t.max.y:t.min.y,Eo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xn=class extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Qo=new G,jo=new G,Mh=new we,is=new Yi,Ao=new bi,rc=new G,Sh=new G,ta=class extends sn{constructor(t=new Jt,e=new xn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Qo.fromBufferAttribute(e,r-1),jo.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Qo.distanceTo(jo);t.setAttribute("lineDistance",new Vt(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(r),Ao.radius+=s,t.ray.intersectsSphere(Ao)===!1)return;Mh.copy(r).invert(),is.copy(t.ray).applyMatrix4(Mh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=u.getX(x),_=u.getX(x+1),S=Ro(this,t,is,l,p,_,x);S&&e.push(S)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),p=Ro(this,t,is,l,x,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=Ro(this,t,is,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Ro(this,t,is,l,m-1,d,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ro(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(Qo.fromBufferAttribute(a,r),jo.fromBufferAttribute(a,s),e.distanceSqToSegment(Qo,jo,rc,Sh)>n)return;rc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(rc);if(!(c<t.near||c>t.far))return{distance:c,point:Sh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var wh=new G,Th=new G,bn=class extends ta{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)wh.fromBufferAttribute(e,r),Th.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+wh.distanceTo(Th);t.setAttribute("lineDistance",new Vt(n,1))}else Bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var $i=class extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Eh=new we,uc=new Yi,Co=new bi,Io=new G,Pr=class extends sn{constructor(t=new Jt,e=new $i){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),Co.radius+=s,t.ray.intersectsSphere(Co)===!1)return;Eh.copy(r).invert(),uc.copy(t.ray).applyMatrix4(Eh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=h,x=d;m<x;m++){let g=c.getX(m);Io.fromBufferAttribute(f,g),Ah(Io,g,l,r,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,x=d;m<x;m++)Io.fromBufferAttribute(f,m),Ah(Io,m,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ah(i,t,e,n,r,s,o){let a=uc.distanceSqToPoint(i);if(a<e){let l=new G;uc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ds=class extends Je{constructor(t=[],e=Ai,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_i=class extends Je{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var vi=class extends Je{constructor(t,e,n=Rn,r,s,o,a=ke,l=ke,c,u=On,f=1){if(u!==On&&u!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ea=class extends vi{constructor(t,e=Rn,n=Ai,r,s,o=ke,a=ke,l,c=On){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ps=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Lr=class i extends Jt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,r,o,2),m("x","z","y",1,-1,t,n,-e,r,o,3),m("x","y","z",1,-1,t,e,n,r,s,4),m("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2));function m(x,g,p,_,S,v,M,w,A,b,T){let C=v/A,I=M/b,F=v/2,P=M/2,E=w/2,D=A+1,U=b+1,N=0,z=0,O=new G;for(let k=0;k<U;k++){let V=k*I-P;for(let it=0;it<D;it++){let et=it*C-F;O[x]=et*_,O[g]=V*S,O[p]=E,c.push(O.x,O.y,O.z),O[x]=0,O[g]=0,O[p]=w>0?1:-1,u.push(O.x,O.y,O.z),f.push(it/A),f.push(1-k/b),N+=1}}for(let k=0;k<b;k++)for(let V=0;V<A;V++){let it=h+V+D*k,et=h+V+D*(k+1),lt=h+(V+1)+D*(k+1),j=h+(V+1)+D*k;l.push(it,et,j),l.push(et,lt,j),z+=6}a.addGroup(d,z,T),d+=z,h+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ms=class i extends Jt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new G,u=new Zt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=n+f/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function S0(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=wf(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=R0(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let u=a,f=l;for(let h=e;h<r;h+=e){let d=i[h],m=i[h+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>f&&(f=m)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return gs(s,o,e,a,l,c,0),o}function wf(i,t,e,n,r){let s;if(r===z0(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Rh(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Rh(o/n|0,i[o],i[o+1],s);return s&&Fr(s,s.next)&&(bs(s),s=s.next),s}function Zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Fr(e,e.next)||Ee(e.prev,e,e.next)===0)){if(bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function gs(i,t,e,n,r,s,o){if(!i)return;!o&&s&&F0(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?T0(i,n,r,s):w0(i)){t.push(l.i,i.i,c.i),bs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=E0(Zi(i),t),gs(i,t,e,n,r,s,2)):o===2&&A0(i,t,e,n,r,s):gs(Zi(i),t,e,n,r,s,1);break}}}function w0(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&rs(r,a,s,l,o,c,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function T0(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ee(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=Math.min(a,l,c),m=Math.min(u,f,h),x=Math.max(a,l,c),g=Math.max(u,f,h),p=hc(d,m,t,e,n),_=hc(x,g,t,e,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=p&&v&&v.z<=_;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=g&&S!==r&&S!==o&&rs(a,u,l,f,c,h,S.x,S.y)&&Ee(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&rs(a,u,l,f,c,h,v.x,v.y)&&Ee(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=g&&S!==r&&S!==o&&rs(a,u,l,f,c,h,S.x,S.y)&&Ee(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&rs(a,u,l,f,c,h,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function E0(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Fr(n,r)&&Ef(n,e,e.next,r)&&xs(n,r)&&xs(r,n)&&(t.push(n.i,e.i,r.i),bs(e),bs(e.next),e=i=r),e=e.next}while(e!==i);return Zi(e)}function A0(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&U0(o,a)){let l=Af(o,a);o=Zi(o,o.next),l=Zi(l,l.next),gs(o,t,e,n,r,s,0),gs(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function R0(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=wf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(N0(c))}r.sort(C0);for(let s=0;s<r.length;s++)e=I0(r[s],e);return e}function C0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function I0(i,t){let e=P0(i,t);if(!e)return t;let n=Af(e,i);return Zi(n,n.next),Zi(e,e.next)}function P0(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Fr(i,e))return e;do{if(Fr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Tf(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let f=Math.abs(r-e.y)/(n-e.x);xs(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&L0(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function L0(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function F0(i,t,e,n){let r=i;do r.z===0&&(r.z=hc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,D0(r)}function D0(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function hc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function N0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Tf(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function rs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Tf(i,t,e,n,r,s,o,a)}function U0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!O0(i,t)&&(xs(i,t)&&xs(t,i)&&B0(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Fr(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Fr(i,t){return i.x===t.x&&i.y===t.y}function Ef(i,t,e,n){let r=Lo(Ee(i,t,e)),s=Lo(Ee(i,t,n)),o=Lo(Ee(e,n,i)),a=Lo(Ee(e,n,t));return!!(r!==s&&o!==a||r===0&&Po(i,e,t)||s===0&&Po(i,n,t)||o===0&&Po(e,i,n)||a===0&&Po(e,t,n))}function Po(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Lo(i){return i>0?1:i<0?-1:0}function O0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ef(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function xs(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function B0(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Af(i,t){let e=fc(i.i,i.x,i.y),n=fc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Rh(i,t,e,n){let r=fc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function z0(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var dc=class{static triangulate(t,e,n=2){return S0(t,e,n)}},_s=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Ch(t),Ih(n,t);let o=t.length;e.forEach(Ch);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Ih(n,e[l]);let a=dc.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Ch(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ih(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var yi=class i extends Jt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=t/a,h=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let _=p*h-o;for(let S=0;S<c;S++){let v=S*f-s;m.push(v,-_,0),x.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let S=_+c*p,v=_+c*(p+1),M=_+1+c*(p+1),w=_+1+c*p;d.push(S,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},vs=class i extends Jt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],f=t,h=(e-t)/r,d=new G,m=new Zt;for(let x=0;x<=r;x++){for(let g=0;g<=n;g++){let p=s+g/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}f+=h}for(let x=0;x<r;x++){let g=x*(n+1);for(let p=0;p<n;p++){let _=p+g,S=_,v=_+n+1,M=_+n+2,w=_+1;a.push(S,v,w),a.push(v,M,w)}}this.setIndex(a),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Qi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Ph(r))r.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Ph(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=Qi(i[e]);for(let r in n)t[r]=n[r]}return t}function Ph(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function k0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Rf={clone:Qi,merge:je},V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=k0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new st().setHex(r.value);break;case"v2":this.uniforms[n].value=new Zt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new G().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new we().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},na=class extends un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ia=class extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ra=class extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function vr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function sc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Mi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sa=class extends Mi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case lc:s=t,a=2*e-n;break;case cc:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lc:o=t,l=2*n-e;break;case cc:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-e)/(r-e),x=m*m,g=x*m,p=-h*g+2*h*x-h*m,_=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*m+1,S=(-1-d)*g+(1.5+d)*x+.5*m,v=d*g-d*x;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+_*o[c+M]+S*o[l+M]+v*o[f+M];return s}},oa=class extends Mi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},aa=class extends Mi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},la=class extends Mi{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(n-e)/(r-e),x=1-m;for(let g=0;g!==a;++g)s[g]=o[c+g]*x+o[l+g]*m;return s}let h=a*2,d=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=d*h+m*2,_=f[p],S=f[p+1],v=t*h+m*2,M=u[v],w=u[v+1],A=W0(n,e,_,M,r);s[m]=Cf(A,x,S,w,g)}return s}};function Cf(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function H0(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function W0(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=Cf(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=H0(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var hn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vr(e,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vr(t.times,Array),values:vr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),sc(t.settings)&&(n.settings={inTangents:vr(t.settings.inTangents,Array),outTangents:vr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new la(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ss:e=this.InterpolantFactoryMethodDiscrete;break;case qo:e=this.InterpolantFactoryMethodLinear;break;case No:e=this.InterpolantFactoryMethodSmooth;break;case oc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return No;case this.InterpolantFactoryMethodBezier:return oc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;sc(this.settings)&&(Lh(this.settings.inTangents,t),Lh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&i0(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===No,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){let x=e[f+m];if(x!==e[h+m]||x!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,sc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Lh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=qo;var Si=class extends hn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=ss;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}};ca.prototype.ValueTypeName="color";var ua=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}};ua.prototype.ValueTypeName="number";var ha=class extends Mi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)zn.slerpFlat(s,0,o,c-a,o,c,l);return s}},ys=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}};ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends hn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=ss;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}};fa.prototype.ValueTypeName="vector";var Oo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Fh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Fh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Fh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var da=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},If=new da,Dr=class{constructor(t){this.manager=t!==void 0?t:If,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Dr.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=new WeakMap,pa=class extends Dr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Oo.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let f=yr.get(o);f===void 0&&(f=[],yr.set(o,f)),f.push({onLoad:e,onError:r})}return o}let a=Er("img");function l(){u(),e&&e(this);let f=yr.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}yr.delete(this),s.manager.itemEnd(t)}function c(f){u(),r&&r(f),Oo.remove(`image:${t}`);let h=yr.get(this)||[];for(let d=0;d<h.length;d++){let m=h[d];m.onError&&m.onError(f)}yr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Oo.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var Ms=class extends Dr{constructor(t){super(t)}load(t,e,n,r){let s=new Je,o=new pa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Fo=new G,Do=new zn,Un=new G,Ss=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fo,Do,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Do,Un.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fo,Do,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Do,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new G,Dh=new Zt,Nh=new Zt,$e=class extends Ss{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,Dh,Nh),e.subVectors(Nh,Dh)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ol*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Qn=class extends Ss{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Mr=-90,Sr=1,ma=class extends sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $e(Mr,Sr,t,e);r.layers=this.layers,this.add(r);let s=new $e(Mr,Sr,t,e);s.layers=this.layers,this.add(s);let o=new $e(Mr,Sr,t,e);o.layers=this.layers,this.add(o);let a=new $e(Mr,Sr,t,e);a.layers=this.layers,this.add(a);let l=new $e(Mr,Sr,t,e);l.layers=this.layers,this.add(l);let c=new $e(Mr,Sr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ga=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Gc="\\[\\]\\.:\\/",X0=new RegExp("["+Gc+"]","g"),Hc="[^"+Gc+"]",q0="[^"+Gc.replace("\\.","")+"]",Y0=/((?:WC+[\/:])*)/.source.replace("WC",Hc),$0=/(WCOD+)?/.source.replace("WCOD",q0),Z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc),J0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc),K0=new RegExp("^"+Y0+$0+Z0+J0+"$"),Q0=["material","materials","bones","map"],pc=class{constructor(t,e,n){let r=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(X0,"")}static parseTrackName(t){let e=K0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Q0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=pc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Q1=new Float32Array(1);var Uh=new we,ws=class{constructor(t,e,n=0,r=1/0){this.ray=new Yi(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uh),this}intersectObject(t,e=!0,n=[]){return mc(t,this,n,e),n.sort(Oh),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)mc(t[r],this,n,e);return n.sort(Oh),n}};function Oh(i,t){return i.distance-t.distance}function mc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)mc(s[o],t,e,!0)}}var Zc=class Zc{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Zc.prototype.isMatrix2=!0;var gc=Zc;function Wc(i,t,e,n){let r=j0(n);switch(e){case Dc:return i*t;case Uc:return i*t/r.components*r.byteLength;case wa:return i*t/r.components*r.byteLength;case Ii:return i*t*2/r.components*r.byteLength;case Ta:return i*t*2/r.components*r.byteLength;case Nc:return i*t*3/r.components*r.byteLength;case _n:return i*t*4/r.components*r.byteLength;case Ea:return i*t*4/r.components*r.byteLength;case Cs:case Is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ps:case Ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:case Ia:return Math.max(i,16)*Math.max(t,8)/4;case Aa:case Ca:return Math.max(i,8)*Math.max(t,8)/2;case Pa:case La:case Da:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fa:case Fs:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ka:case Qa:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ds:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function j0(i){switch(i){case fn:case Ic:return{byteLength:1,components:1};case Ur:case Pc:case In:return{byteLength:2,components:1};case Ma:case Sa:return{byteLength:2,components:4};case Rn:case ya:case Cn:return{byteLength:4,components:1};case Lc:case Fc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Qf(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function em(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){let m=f[h],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){let x=f[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
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
#endif`,hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tm=`#define PI 3.141592653589793
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
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Am=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hm=`#ifdef USE_GRADIENTMAP
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
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$m=`#ifdef USE_ENVMAP
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
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jm=`PhysicalMaterial material;
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
#endif`,tg=`uniform sampler2D dfgLUT;
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
}`,eg=`
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fg=`#if defined( USE_POINTS_UV )
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
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
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
#endif`,_g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tg=`#ifdef USE_NORMALMAP
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
#endif`,Eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ix=`uniform sampler2D t2D;
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`#include <common>
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
}`,cx=`#if DEPTH_PACKING == 3200
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
}`,ux=`#define DISTANCE
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
}`,hx=`#define DISTANCE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`uniform float scale;
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,xx=`uniform vec3 diffuse;
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
}`,bx=`#define LAMBERT
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
}`,_x=`#define LAMBERT
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
}`,vx=`#define MATCAP
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
}`,yx=`#define MATCAP
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
}`,Mx=`#define NORMAL
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
}`,Sx=`#define NORMAL
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
}`,wx=`#define PHONG
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
}`,Tx=`#define PHONG
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
}`,Ex=`#define STANDARD
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
}`,Ax=`#define STANDARD
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
}`,Rx=`#define TOON
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
}`,Cx=`#define TOON
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
}`,Ix=`uniform float size;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Fx=`uniform vec3 color;
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
}`,Dx=`uniform float rotation;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:rm,alphamap_pars_fragment:sm,alphatest_fragment:om,alphatest_pars_fragment:am,aomap_fragment:lm,aomap_pars_fragment:cm,batching_pars_vertex:um,batching_vertex:hm,begin_vertex:fm,beginnormal_vertex:dm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:xm,clipping_planes_pars_fragment:bm,clipping_planes_pars_vertex:_m,clipping_planes_vertex:vm,color_fragment:ym,color_pars_fragment:Mm,color_pars_vertex:Sm,color_vertex:wm,common:Tm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Im,emissivemap_pars_fragment:Pm,colorspace_fragment:Lm,colorspace_pars_fragment:Fm,envmap_fragment:Dm,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Um,envmap_pars_vertex:Om,envmap_physical_pars_fragment:$m,envmap_vertex:Bm,fog_vertex:zm,fog_pars_vertex:km,fog_fragment:Vm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Hm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:Zm,lights_toon_pars_fragment:Jm,lights_phong_fragment:Km,lights_phong_pars_fragment:Qm,lights_physical_fragment:jm,lights_physical_pars_fragment:tg,lights_fragment_begin:eg,lights_fragment_maps:ng,lights_fragment_end:ig,lightprobes_pars_fragment:rg,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:lg,map_fragment:cg,map_pars_fragment:ug,map_particle_fragment:hg,map_particle_pars_fragment:fg,metalnessmap_fragment:dg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:xg,morphtarget_pars_vertex:bg,morphtarget_vertex:_g,normal_fragment_begin:vg,normal_fragment_maps:yg,normal_pars_fragment:Mg,normal_pars_vertex:Sg,normal_vertex:wg,normalmap_pars_fragment:Tg,clearcoat_normal_fragment_begin:Eg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Cg,opaque_fragment:Ig,packing:Pg,premultiplied_alpha_fragment:Lg,project_vertex:Fg,dithering_fragment:Dg,dithering_pars_fragment:Ng,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Og,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:zg,shadowmap_vertex:kg,shadowmask_pars_fragment:Vg,skinbase_vertex:Gg,skinning_pars_vertex:Hg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:$g,tonemapping_pars_fragment:Zg,transmission_fragment:Jg,transmission_pars_fragment:Kg,uv_pars_fragment:Qg,uv_pars_vertex:jg,uv_vertex:tx,worldpos_vertex:ex,background_vert:nx,background_frag:ix,backgroundCube_vert:rx,backgroundCube_frag:sx,cube_vert:ox,cube_frag:ax,depth_vert:lx,depth_frag:cx,distance_vert:ux,distance_frag:hx,equirect_vert:fx,equirect_frag:dx,linedashed_vert:px,linedashed_frag:mx,meshbasic_vert:gx,meshbasic_frag:xx,meshlambert_vert:bx,meshlambert_frag:_x,meshmatcap_vert:vx,meshmatcap_frag:yx,meshnormal_vert:Mx,meshnormal_frag:Sx,meshphong_vert:wx,meshphong_frag:Tx,meshphysical_vert:Ex,meshphysical_frag:Ax,meshtoon_vert:Rx,meshtoon_frag:Cx,points_vert:Ix,points_frag:Px,shadow_vert:Lx,shadow_frag:Fx,sprite_vert:Dx,sprite_frag:Nx},St={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Gn={basic:{uniforms:je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:je([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:je([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new st(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:je([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:je([St.points,St.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:je([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:je([St.common,St.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:je([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:je([St.sprite,St.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:je([St.common,St.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:je([St.lights,St.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Gn.physical={uniforms:je([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var sl={r:0,b:0,g:0},Ux=new we,jf=new Gt;jf.set(-1,0,0,0,1,0,0,0,1);function Ox(i,t,e,n,r,s){let o=new st(0),a=r===!0?0:1,l,c,u=null,f=0,h=null;function d(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let v=_.backgroundBlurriness>0;S=t.get(S,v)}return S}function m(_){let S=!1,v=d(_);v===null?g(o,a):v&&v.isColor&&(g(v,1),S=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,S){let v=d(S);v&&(v.isCubeTexture||v.mapping===As)?(c===void 0&&(c=new Wt(new Lr(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Qi(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jf),c.material.toneMapped=te.getTransfer(v.colorSpace)!==de,(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Wt(new yi(2,2),new un({name:"BackgroundMaterial",uniforms:Qi(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=te.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,S){_.getRGB(sl,Vc(i)),e.buffers.color.setClear(sl.r,sl.g,sl.b,S,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Bx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(I,F,P,E,D){let U=!1,N=f(I,E,P,F);s!==N&&(s=N,c(s.object)),U=d(I,E,P,D),U&&m(I,E,P,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,v(I,F,P,E),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,F,P,E){let D=E.wireframe===!0,U=n[F.id];U===void 0&&(U={},n[F.id]=U);let N=I.isInstancedMesh===!0?I.id:0,z=U[N];z===void 0&&(z={},U[N]=z);let O=z[P.id];O===void 0&&(O={},z[P.id]=O);let k=O[D];return k===void 0&&(k=h(l()),O[D]=k),k}function h(I){let F=[],P=[],E=[];for(let D=0;D<e;D++)F[D]=0,P[D]=0,E[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:P,attributeDivisors:E,object:I,attributes:{},index:null}}function d(I,F,P,E){let D=s.attributes,U=F.attributes,N=0,z=P.getAttributes();for(let O in z)if(z[O].location>=0){let V=D[O],it=U[O];if(it===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(it=I.instanceColor)),V===void 0||V.attribute!==it||it&&V.data!==it.data)return!0;N++}return s.attributesNum!==N||s.index!==E}function m(I,F,P,E){let D={},U=F.attributes,N=0,z=P.getAttributes();for(let O in z)if(z[O].location>=0){let V=U[O];V===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(V=I.instanceColor));let it={};it.attribute=V,V&&V.data&&(it.data=V.data),D[O]=it,N++}s.attributes=D,s.attributesNum=N,s.index=E}function x(){let I=s.newAttributes;for(let F=0,P=I.length;F<P;F++)I[F]=0}function g(I){p(I,0)}function p(I,F){let P=s.newAttributes,E=s.enabledAttributes,D=s.attributeDivisors;P[I]=1,E[I]===0&&(i.enableVertexAttribArray(I),E[I]=1),D[I]!==F&&(i.vertexAttribDivisor(I,F),D[I]=F)}function _(){let I=s.newAttributes,F=s.enabledAttributes;for(let P=0,E=F.length;P<E;P++)F[P]!==I[P]&&(i.disableVertexAttribArray(P),F[P]=0)}function S(I,F,P,E,D,U,N){N===!0?i.vertexAttribIPointer(I,F,P,D,U):i.vertexAttribPointer(I,F,P,E,D,U)}function v(I,F,P,E){x();let D=E.attributes,U=P.getAttributes(),N=F.defaultAttributeValues;for(let z in U){let O=U[z];if(O.location>=0){let k=D[z];if(k===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){let V=k.normalized,it=k.itemSize,et=t.get(k);if(et===void 0)continue;let lt=et.buffer,j=et.type,ut=et.bytesPerElement,X=j===i.INT||j===i.UNSIGNED_INT||k.gpuType===ya;if(k.isInterleavedBufferAttribute){let $=k.data,ct=$.stride,gt=k.offset;if($.isInstancedInterleavedBuffer){for(let ft=0;ft<O.locationSize;ft++)p(O.location+ft,$.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ft=0;ft<O.locationSize;ft++)g(O.location+ft);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let ft=0;ft<O.locationSize;ft++)S(O.location+ft,it/O.locationSize,j,V,ct*ut,(gt+it/O.locationSize*ft)*ut,X)}else{if(k.isInstancedBufferAttribute){for(let $=0;$<O.locationSize;$++)p(O.location+$,k.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let $=0;$<O.locationSize;$++)g(O.location+$);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let $=0;$<O.locationSize;$++)S(O.location+$,it/O.locationSize,j,V,it*ut,it/O.locationSize*$*ut,X)}}else if(N!==void 0){let V=N[z];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(O.location,V);break;case 3:i.vertexAttrib3fv(O.location,V);break;case 4:i.vertexAttrib4fv(O.location,V);break;default:i.vertexAttrib1fv(O.location,V)}}}}_()}function M(){T();for(let I in n){let F=n[I];for(let P in F){let E=F[P];for(let D in E){let U=E[D];for(let N in U)u(U[N].object),delete U[N];delete E[D]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let P in F){let E=F[P];for(let D in E){let U=E[D];for(let N in U)u(U[N].object),delete U[N];delete E[D]}}delete n[I.id]}function A(I){for(let F in n){let P=n[F];for(let E in P){let D=P[E];if(D[I.id]===void 0)continue;let U=D[I.id];for(let N in U)u(U[N].object),delete U[N];delete D[I.id]}}}function b(I){for(let F in n){let P=n[F],E=I.isInstancedMesh===!0?I.id:0,D=P[E];if(D!==void 0){for(let U in D){let N=D[U];for(let z in N)u(N[z].object),delete N[z];delete D[U]}delete P[E],Object.keys(P).length===0&&delete n[F]}}}function T(){C(),o=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function zx(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function kx(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==_n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let b=A===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==fn&&A!==Cn&&!b&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Bt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:v,maxSamples:M,samples:w}}function Vx(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Tn,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{let _=s?0:n,S=_*4,v=p.clippingState||null;l.value=v,v=u(m,h,S,d);for(let M=0;M!==S;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,m){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,v=d;S!==x;++S,v+=4)o.copy(f[S]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var zr=4,Gx=6,Hx=20,Wx=256,Us=new Qn,Pf=new st,Jc=null,Kc=0,Qc=0,jc=!1,Xx=new G,ji=new G,al=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=Xx}=s;Jc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jc,Kc,Qc),this._renderer.xr.enabled=jc,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:In,format:_n,colorSpace:os,depthBuffer:!1},r=Lf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lf(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qx(s)),this._blurMaterial=$x(s,t,e),this._ggxMaterial=Yx(s,t,e)}return r}_compileMaterial(t){let e=new Wt(new Jt,t);this._renderer.compile(e,Us)}_sceneToCubeUV(t,e,n,r,s){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Pf),f.toneMapping=An,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new Lr,new le({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,_=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,p=!0):(g.color.copy(Pf),p=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));let M=this._cubeSize;Br(r,v*M,S>2?M:0,M,M),f.setRenderTarget(r),p&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Ai||t.mapping===Ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Df()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ff());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Br(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Us)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-zr?n-m+zr:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Br(s,g,p,3*x,2*x),r.setRenderTarget(s),r.render(a,Us),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Br(t,g,p,3*x,2*x),r.setRenderTarget(t),r.render(a,Us)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],f=3*u*(r>this._lodMax-zr?r-this._lodMax+zr:0),h=4*(this._cubeSize-u);Br(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(l,Us)}};function qx(i){let t=[],e=[],n=i,r=i-zr+1+Gx;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,m=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let p=0;p<f;p++){let _=p%3*2/3-1,S=p>2?0:-1,v=[_,S,0,_+2/3,S,0,_+2/3,S+1,0,_,S,0,_+2/3,S+1,0,_,S+1,0];m.set(v,d*h*p);for(let M=0;M<h;M++){let w=u[M*2]*2-1,A=u[M*2+1]*2-1;p===0?ji.set(1,A,w):p===1?ji.set(-w,1,-A):p===2?ji.set(-w,A,1):p===3?ji.set(-1,A,-w):p===4?ji.set(-w,-1,A):ji.set(w,A,-1),ji.toArray(x,(p*h+M)*d)}}let g=new Jt;g.setAttribute("position",new gn(m,d)),g.setAttribute("outputDirection",new gn(x,d)),e.push(new Wt(g,null)),n>zr&&n--}return{lodMeshes:e,sizeLods:t}}function Lf(i,t,e){let n=new Ke(i,t,e);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Yx(i,t,e){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function $x(i,t,e){return new un({name:"SphericalGaussianBlur",defines:{SAMPLES:Hx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ff(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Df(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function cl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ll=class extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ds(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lr(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:kn});s.uniforms.tEquirect.value=e;let o=new Wt(r,s),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Ge),new ma(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function Zx(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===ba||d===_a)if(t.has(h)){let m=t.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let x=new ll(m.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,m=d===ba||d===_a,x=d===Ai||d===Ki;if(m||x){let g=e.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new al(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let _=h.image;return m&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new al(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,d){return d===ba?h.mapping=Ai:d===_a&&(h.mapping=Ki),h}function l(h){let d=0,m=6;for(let x=0;x<m;x++)h[x]!==void 0&&d++;return d===m}function c(h){let d=h.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Jx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Hi("WebGLRenderer: "+n+" extension not supported."),r}}}function Kx(i,t,e,n){let r={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];let d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,m=f.attributes.position,x=0;if(m===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let S=0,v=_.length;S<v;S+=3){let M=_[S+0],w=_[S+1],A=_[S+2];h.push(M,w,w,A,A,M)}}else{let _=m.array;x=m.version;for(let S=0,v=_.length/3-1;S<v;S+=3){let M=S+0,w=S+1,A=S+2;h.push(M,w,w,A,A,M)}}let g=new(m.count>=65535?qi:hs)(h,1);g.version=x;let p=s.get(f);p&&t.remove(p),s.set(f,g)}function u(f){let h=s.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Qx(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,s,f*o),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,s,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let x=0;for(let g=0;g<d;g++)x+=h[g];e.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function jx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:zt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function tb(i,t,e){let n=new WeakMap,r=new Ae;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],S=0;d===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*M*4*f),A=new cs(w,v,M,f);A.type=Cn,A.needsUpdate=!0;let b=S*4;for(let C=0;C<f;C++){let I=g[C],F=p[C],P=_[C],E=v*M*4*C;for(let D=0;D<I.count;D++){let U=D*b;d===!0&&(r.fromBufferAttribute(I,D),w[E+U+0]=r.x,w[E+U+1]=r.y,w[E+U+2]=r.z,w[E+U+3]=0),m===!0&&(r.fromBufferAttribute(F,D),w[E+U+4]=r.x,w[E+U+5]=r.y,w[E+U+6]=r.z,w[E+U+7]=0),x===!0&&(r.fromBufferAttribute(P,D),w[E+U+8]=r.x,w[E+U+9]=r.y,w[E+U+10]=r.z,w[E+U+11]=P.itemSize===4?r.w:1)}}h={count:f,texture:A,size:new Zt(v,M)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function eb(i,t,e,n,r){let s=new WeakMap;function o(c){let u=r.render.frame,f=c.geometry,h=t.get(c,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var nb={[Mc]:"LINEAR_TONE_MAPPING",[Sc]:"REINHARD_TONE_MAPPING",[wc]:"CINEON_TONE_MAPPING",[Tc]:"ACES_FILMIC_TONE_MAPPING",[Ac]:"AGX_TONE_MAPPING",[Rc]:"NEUTRAL_TONE_MAPPING",[Ec]:"CUSTOM_TONE_MAPPING"};function ib(i,t,e,n,r,s){let o=new Ke(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Jt;c.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Vt([0,2,0,0,2,0],2));let u=new na({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Wt(c,u),h=new Qn(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,_=[],S=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let w=0;w<_.length;w++){let A=_[w];A.setSize&&A.setSize(v,M)}},this.setEffects=function(v){_=v,S=_.length>0&&_[0].isRenderPass===!0;let M=o.width,w=o.height;_.length>0&&a===null&&(a=new Ke(M,w,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new Ke(M,w,{type:In,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){let b=_[A];b.setSize&&b.setSize(M,w)}},this.begin=function(v,M){if(x||v.toneMapping===An&&_.length===0)return!1;if(p=M,M!==null){let w=M.width,A=M.height;(o.width!==w||o.height!==A)&&this.setSize(w,A)}return S===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=An,!0},this.hasRenderPass=function(){return S},this.end=function(v,M){v.toneMapping=g,x=!0;let w=o,A=a;for(let b=0;b<_.length;b++){let T=_[b];T.enabled!==!1&&(T.render(v,A,w,M),T.needsSwap!==!1&&(w=A,A=A===a?l:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,u.defines={},te.getTransfer(d)===de&&(u.defines.SRGB_TRANSFER="");let b=nb[m];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(f,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var td=new Je,nu=new vi(1,1),ed=new cs,nd=new Jo,id=new ds,Nf=[],Uf=[],Of=new Float32Array(16),Bf=new Float32Array(9),zf=new Float32Array(4);function Gr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Nf[r];if(s===void 0&&(s=new Float32Array(r),Nf[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ul(i,t){let e=Uf[t];e===void 0&&(e=new Int32Array(t),Uf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function ob(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function ab(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function lb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;zf.set(n),i.uniformMatrix2fv(this.addr,!1,zf),Ue(e,n)}}function cb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Bf.set(n),i.uniformMatrix3fv(this.addr,!1,Bf),Ue(e,n)}}function ub(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Of.set(n),i.uniformMatrix4fv(this.addr,!1,Of),Ue(e,n)}}function hb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function db(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function pb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function mb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function xb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function bb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function _b(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(nu.compareFunction=e.isReversedDepthBuffer()?rl:il,s=nu):s=td,e.setTexture2D(t||s,r)}function vb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||nd,r)}function yb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||id,r)}function Mb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ed,r)}function Sb(i){switch(i){case 5126:return rb;case 35664:return sb;case 35665:return ob;case 35666:return ab;case 35674:return lb;case 35675:return cb;case 35676:return ub;case 5124:case 35670:return hb;case 35667:case 35671:return fb;case 35668:case 35672:return db;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return xb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Mb}}function wb(i,t){i.uniform1fv(this.addr,t)}function Tb(i,t){let e=Gr(t,this.size,2);i.uniform2fv(this.addr,e)}function Eb(i,t){let e=Gr(t,this.size,3);i.uniform3fv(this.addr,e)}function Ab(i,t){let e=Gr(t,this.size,4);i.uniform4fv(this.addr,e)}function Rb(i,t){let e=Gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cb(i,t){let e=Gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ib(i,t){let e=Gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pb(i,t){i.uniform1iv(this.addr,t)}function Lb(i,t){i.uniform2iv(this.addr,t)}function Fb(i,t){i.uniform3iv(this.addr,t)}function Db(i,t){i.uniform4iv(this.addr,t)}function Nb(i,t){i.uniform1uiv(this.addr,t)}function Ub(i,t){i.uniform2uiv(this.addr,t)}function Ob(i,t){i.uniform3uiv(this.addr,t)}function Bb(i,t){i.uniform4uiv(this.addr,t)}function zb(i,t,e){let n=this.cache,r=t.length,s=ul(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=nu:o=td;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function kb(i,t,e){let n=this.cache,r=t.length,s=ul(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||nd,s[o])}function Vb(i,t,e){let n=this.cache,r=t.length,s=ul(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||id,s[o])}function Gb(i,t,e){let n=this.cache,r=t.length,s=ul(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||ed,s[o])}function Hb(i){switch(i){case 5126:return wb;case 35664:return Tb;case 35665:return Eb;case 35666:return Ab;case 35674:return Rb;case 35675:return Cb;case 35676:return Ib;case 5124:case 35670:return Pb;case 35667:case 35671:return Lb;case 35668:case 35672:return Fb;case 35669:case 35673:return Db;case 5125:return Nb;case 36294:return Ub;case 36295:return Ob;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Gb}}var iu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sb(e.type)}},ru=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hb(e.type)}},su=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},tu=/(\w+)(\])?(\[|\.)?/g;function kf(i,t){i.seq.push(t),i.map[t.id]=t}function Wb(i,t,e){let n=i.name,r=n.length;for(tu.lastIndex=0;;){let s=tu.exec(n),o=tu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){kf(e,c===void 0?new iu(a,i,t):new ru(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new su(a),kf(e,f)),e=f}}}var kr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Wb(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Vf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Xb=37297,qb=0;function Yb(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Gf=new Gt;function $b(i){te._getMatrix(Gf,te.workingColorSpace,i);let t=`mat3( ${Gf.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case as:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Yb(i.getShaderSource(t),a)}else return s}function Zb(i,t){let e=$b(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Jb={[Mc]:"Linear",[Sc]:"Reinhard",[wc]:"Cineon",[Tc]:"ACESFilmic",[Ac]:"AgX",[Rc]:"Neutral",[Ec]:"Custom"};function Kb(i,t){let e=Jb[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ol=new G;function Qb(){te.getLuminanceCoefficients(ol);let i=ol.x.toFixed(4),t=ol.y.toFixed(4),e=ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function t_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function e_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Bs(i){return i!==""}function Wf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var n_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(i){return i.replace(n_,r_)}var i_=new Map;function r_(i,t){let e=Yt[t];if(e===void 0){let n=i_.get(t);if(n!==void 0)e=Yt[n],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ou(e)}var s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(i){return i.replace(s_,o_)}function o_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var a_={[Ts]:"SHADOWMAP_TYPE_PCF",[Nr]:"SHADOWMAP_TYPE_VSM"};function l_(i){return a_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var c_={[Ai]:"ENVMAP_TYPE_CUBE",[Ki]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE_UV"};function u_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":c_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var h_={[Ki]:"ENVMAP_MODE_REFRACTION"};function f_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":h_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var d_={[yc]:"ENVMAP_BLENDING_MULTIPLY",[of]:"ENVMAP_BLENDING_MIX",[af]:"ENVMAP_BLENDING_ADD"};function p_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":d_[i.combine]||"ENVMAP_BLENDING_NONE"}function m_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function g_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=l_(e),c=u_(e),u=f_(e),f=p_(e),h=m_(e),d=jb(e),m=t_(s),x=r.createProgram(),g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Bs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(g=[Yf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[Yf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Yt.tonemapping_pars_fragment:"",e.toneMapping!==An?Kb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Zb("linearToOutputTexel",e.outputColorSpace),Qb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),o=ou(o),o=Wf(o,e),o=Xf(o,e),a=ou(a),a=Wf(a,e),a=Xf(a,e),o=qf(o),a=qf(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=_+g+o,v=_+p+a,M=Vf(r,r.VERTEX_SHADER,S),w=Vf(r,r.FRAGMENT_SHADER,v);r.attachShader(x,M),r.attachShader(x,w),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(I){if(i.debug.checkShaderErrors){let F=r.getProgramInfoLog(x)||"",P=r.getShaderInfoLog(M)||"",E=r.getShaderInfoLog(w)||"",D=F.trim(),U=P.trim(),N=E.trim(),z=!0,O=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,M,w);else{let k=Hf(r,M,"vertex"),V=Hf(r,w,"fragment");zt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+k+`
`+V)}else D!==""?Bt("WebGLProgram: Program Info Log:",D):(U===""||N==="")&&(O=!1);O&&(I.diagnostics={runnable:z,programLog:D,vertexShader:{log:U,prefix:g},fragmentShader:{log:N,prefix:p}})}r.deleteShader(M),r.deleteShader(w),b=new kr(r,x),T=e_(r,x)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(x,Xb)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qb++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=w,this}var x_=0,au=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lu(t),e.set(t,n)),n}},lu=class{constructor(t){this.id=x_++,this.code=t,this.usedTimes=0}};function b_(i){return i===Ii||i===Fs||i===Ds}function __(i,t,e,n,r,s){let o=new Cr,a=new au,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,T,C,I,F,P){let E=I.fog,D=F.geometry,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,z=t.get(b.envMap||U,N),O=z&&z.mapping===As?z.image.height:null,k=d[b.type];b.precision!==null&&(h=n.getMaxPrecision(b.precision),h!==b.precision&&Bt("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,it=V!==void 0?V.length:0,et=0;D.morphAttributes.position!==void 0&&(et=1),D.morphAttributes.normal!==void 0&&(et=2),D.morphAttributes.color!==void 0&&(et=3);let lt,j,ut,X;if(k){let xe=Gn[k];lt=xe.vertexShader,j=xe.fragmentShader}else{lt=b.vertexShader,j=b.fragmentShader;let xe=a.getVertexShaderStage(b),he=a.getFragmentShaderStage(b);a.update(b,xe,he),ut=xe.id,X=he.id}let $=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),gt=F.isInstancedMesh===!0,ft=F.isBatchedMesh===!0,Pt=!!b.map,ie=!!b.matcap,kt=!!z,$t=!!b.aoMap,re=!!b.lightMap,Kt=!!b.bumpMap&&b.wireframe===!1,Se=!!b.normalMap,Be=!!b.displacementMap,nn=!!b.emissiveMap,Te=!!b.metalnessMap,Ie=!!b.roughnessMap,q=b.anisotropy>0,We=b.clearcoat>0,pe=b.dispersion>0,B=b.retroreflectivity>0,R=b.iridescence>0,Y=b.sheen>0,Q=b.transmission>0,nt=q&&!!b.anisotropyMap,mt=We&&!!b.clearcoatMap,xt=We&&!!b.clearcoatNormalMap,rt=We&&!!b.clearcoatRoughnessMap,at=R&&!!b.iridescenceMap,bt=R&&!!b.iridescenceThicknessMap,Dt=Y&&!!b.sheenColorMap,Mt=Y&&!!b.sheenRoughnessMap,_t=!!b.specularMap,Nt=!!b.specularColorMap,Ot=!!b.specularIntensityMap,Xt=Q&&!!b.transmissionMap,W=Q&&!!b.thicknessMap,vt=!!b.gradientMap,ot=!!b.alphaMap,yt=b.alphaTest>0,Et=!!b.alphaHash,ht=!!b.extensions,Ut=An;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ut=i.toneMapping);let Lt={shaderID:k,shaderType:b.type,shaderName:b.name,vertexShader:lt,fragmentShader:j,defines:b.defines,customVertexShaderID:ut,customFragmentShaderID:X,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:ft,batchingColor:ft&&F._colorsTexture!==null,instancing:gt,instancingColor:gt&&F.instanceColor!==null,instancingMorph:gt&&F.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Pt,matcap:ie,envMap:kt,envMapMode:kt&&z.mapping,envMapCubeUVHeight:O,aoMap:$t,lightMap:re,bumpMap:Kt,normalMap:Se,displacementMap:Be,emissiveMap:nn,normalMapObjectSpace:Se&&b.normalMapType===uf,normalMapTangentSpace:Se&&b.normalMapType===Oc,packedNormalMap:Se&&b.normalMapType===Oc&&b_(b.normalMap.format),metalnessMap:Te,roughnessMap:Ie,anisotropy:q,anisotropyMap:nt,clearcoat:We,clearcoatMap:mt,clearcoatNormalMap:xt,clearcoatRoughnessMap:rt,dispersion:pe,retroreflection:B,iridescence:R,iridescenceMap:at,iridescenceThicknessMap:bt,sheen:Y,sheenColorMap:Dt,sheenRoughnessMap:Mt,specularMap:_t,specularColorMap:Nt,specularIntensityMap:Ot,transmission:Q,transmissionMap:Xt,thicknessMap:W,gradientMap:vt,opaque:b.transparent===!1&&b.blending===Ei&&b.alphaToCoverage===!1,alphaMap:ot,alphaTest:yt,alphaHash:Et,combine:b.combine,mapUv:Pt&&m(b.map.channel),aoMapUv:$t&&m(b.aoMap.channel),lightMapUv:re&&m(b.lightMap.channel),bumpMapUv:Kt&&m(b.bumpMap.channel),normalMapUv:Se&&m(b.normalMap.channel),displacementMapUv:Be&&m(b.displacementMap.channel),emissiveMapUv:nn&&m(b.emissiveMap.channel),metalnessMapUv:Te&&m(b.metalnessMap.channel),roughnessMapUv:Ie&&m(b.roughnessMap.channel),anisotropyMapUv:nt&&m(b.anisotropyMap.channel),clearcoatMapUv:mt&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:xt&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&m(b.sheenRoughnessMap.channel),specularMapUv:_t&&m(b.specularMap.channel),specularColorMapUv:Nt&&m(b.specularColorMap.channel),specularIntensityMapUv:Ot&&m(b.specularIntensityMap.channel),transmissionMapUv:Xt&&m(b.transmissionMap.channel),thicknessMapUv:W&&m(b.thicknessMap.channel),alphaMapUv:ot&&m(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Se||q),vertexNormals:!!D.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(Pt||ot),fog:!!E,useFog:b.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||D.attributes.normal===void 0&&Se===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ct,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:et,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Pt&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:nn&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Me,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ht&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&b.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function g(b){let T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)T.push(C),T.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(p(T,b),_(T,b),T.push(i.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function p(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numSunLights),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numSunLightShadows),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function _(b,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function S(b){let T=d[b.type],C;if(T){let I=Gn[T];C=Rf.clone(I.uniforms)}else C=b.uniforms;return C}function v(b,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new g_(i,T,b,r),c.push(C),u.set(T,C)),C}function M(b){if(--b.usedTimes===0){let T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function w(b){a.remove(b)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:A}}function v_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function y_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function $f(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zf(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,m,x,g,p){let _=i[t];return _===void 0?(_={id:h.id,object:h,geometry:d,material:m,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:g,group:p},i[t]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=m,_.materialVariant=o(h),_.groupOrder=x,_.renderOrder=h.renderOrder,_.z=g,_.group=p),t++,_}function l(h,d,m,x,g,p,_){_.reversedDepth===!0&&(g=-g);let S=a(h,d,m,x,g,p);m.transmission>0?n.push(S):m.transparent===!0?r.push(S):e.push(S)}function c(h,d,m,x,g,p){let _=a(h,d,m,x,g,p);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function u(h,d){e.length>1&&e.sort(h||y_),n.length>1&&n.sort(d||$f),r.length>1&&r.sort(d||$f)}function f(){for(let h=t,d=i.length;h<d;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function M_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Zf,i.set(n,[o])):r>=s.length?(o=new Zf,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function S_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new st};break;case"SpotLight":e={position:new G,direction:new G,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function w_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var T_=0;function E_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function A_(i){let t=new S_,e=w_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let r=new G,s=new we,o=new we;function a(c){let u=0,f=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,_=0,S=0,v=0,M=0,w=0,A=0,b=0,T=0,C=0;c.sort(E_);for(let F=0,P=c.length;F<P;F++){let E=c[F],D=E.color,U=E.intensity,N=E.distance,z=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Ii?z=E.shadow.map.texture:z=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=D.r*U,f+=D.g*U,h+=D.b*U;else if(E.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(E.sh.coefficients[O],U);C++}else if(E.isSunLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let k=E.shadow,V=e.get(E);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[m]=V,n.sunShadowMap[m]=z;let it=k.getViewportCount();for(let et=0;et<it;et++)n.sunShadowMatrix[x+et]=k.getMatrix(et),n.sunShadowCascade[x+et]=k._cascadeData[et];x+=it,m++}n.sun[d]=O,d++}else if(E.isDirectionalLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let k=E.shadow,V=e.get(E);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=z,n.directionalShadowMatrix[g]=E.shadow.matrix,M++}n.directional[g]=O,g++}else if(E.isSpotLight){let O=t.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(D).multiplyScalar(U),O.distance=N,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,n.spot[_]=O;let k=E.shadow;if(E.map&&(n.spotLightMap[b]=E.map,b++,k.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[_]=k.matrix,E.castShadow){let V=e.get(E);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=z,A++}_++}else if(E.isRectAreaLight){let O=t.get(E);O.color.copy(D).multiplyScalar(U),O.halfWidth.set(E.width*.5,0,0),O.halfHeight.set(0,E.height*.5,0),n.rectArea[S]=O,S++}else if(E.isPointLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),O.distance=E.distance,O.decay=E.decay,E.castShadow){let k=E.shadow,V=e.get(E);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,V.shadowCameraNear=k.camera.near,V.shadowCameraFar=k.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=E.shadow.matrix,w++}n.point[p]=O,p++}else if(E.isHemisphereLight){let O=t.get(E);O.skyColor.copy(E.color).multiplyScalar(U),O.groundColor.copy(E.groundColor).multiplyScalar(U),n.hemi[v]=O,v++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let I=n.hash;(I.sunLength!==d||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==S||I.hemiLength!==v||I.numSunShadows!==m||I.numDirectionalShadows!==M||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==b||I.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=g,n.spot.length=_,n.rectArea.length=S,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.sunLength=d,I.directionalLength=g,I.pointLength=p,I.spotLength=_,I.rectAreaLength=S,I.hemiLength=v,I.numSunShadows=m,I.numDirectionalShadows=M,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=b,I.numLightProbes=C,n.version=T_++)}function l(c,u){let f=0,h=0,d=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let v=c[_];if(v.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),f++}else if(v.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(v.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Jf(i){let t=new A_(i),e=[],n=[],r=[];function s(h){f.camera=h,e.length=0,n.length=0,r.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function R_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Jf(i),t.set(r,[a])):s>=o.length?(a=new Jf(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I_=`uniform sampler2D shadow_pass;
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
}`,P_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],L_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Kf=new we,Os=new G,eu=new G;function F_(i,t,e){let n=new fs,r=new Zt,s=new Zt,o=new Ae,a=new ia,l=new ra,c={},u=e.maxTextureSize,f={[Ti]:en,[en]:Ti,[Me]:Me},h=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:C_,fragmentShader:I_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new Jt;m.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Wt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let p=this.type;this.render=function(w,A,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===kh&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ts);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(kn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let P=p!==this.type;P&&A.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(D=>D.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,D=w.length;E<D;E++){let U=w[E],N=U.shadow;if(N===void 0){Bt("WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let z=N.getFrameExtents();r.multiply(z),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,N.mapSize.y=s.y));let O=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=O,N.map===null||P===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Nr){if(U.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Ke(r.x,r.y,{format:Ii,type:In,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),N.map.texture.name=U.name+".shadowMap",N.map.depthTexture=new vi(r.x,r.y,Cn),N.map.depthTexture.name=U.name+".shadowMapDepth",N.map.depthTexture.format=On,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ke,N.map.depthTexture.magFilter=ke}else U.isPointLight?(N.map=new ll(r.x),N.map.depthTexture=new ea(r.x,Rn)):(N.map=new Ke(r.x,r.y),N.map.depthTexture=new vi(r.x,r.y,Rn)),N.map.depthTexture.name=U.name+".shadowMap",N.map.depthTexture.format=On,this.type===Ts?(N.map.depthTexture.compareFunction=O?rl:il,N.map.depthTexture.minFilter=Ge,N.map.depthTexture.magFilter=Ge):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ke,N.map.depthTexture.magFilter=ke);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y)&&N.map.setSize(r.x,r.y);let k=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();U.isPointLight!==!0&&N.updateMatrices(U,b);for(let V=0;V<k;V++){let it=N.getCamera(V);if(U.isPointLight){let et=N.camera,lt=N.matrix,j=U.distance||et.far;j!==et.far&&(et.far=j,et.updateProjectionMatrix()),Os.setFromMatrixPosition(U.matrixWorld),et.position.copy(Os),eu.copy(et.position),eu.add(P_[V]),et.up.copy(L_[V]),et.lookAt(eu),et.updateMatrixWorld(),lt.makeTranslation(-Os.x,-Os.y,-Os.z),Kf.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Kf,et.coordinateSystem,et.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,V),i.clear();else{V===0&&(i.setRenderTarget(N.map),i.clear());let et=N.getViewport(V);o.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),F.viewport(o)}n=N.getFrustum(V),v(A,b,it,U,this.type)}N.isPointLightShadow!==!0&&this.type===Nr&&_(N,b),N.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,C,I)};function _(w,A){let b=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ke(r.x,r.y,{format:Ii,type:In}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,b,h,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,b,d,x,null)}function S(w,A,b,T){let C=null,I=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)C=I;else if(C=b.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=C.uuid,P=A.uuid,E=c[F];E===void 0&&(E={},c[F]=E);let D=E[P];D===void 0&&(D=C.clone(),E[P]=D,A.addEventListener("dispose",M)),C=D}if(C.visible=A.visible,C.wireframe=A.wireframe,T===Nr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:f[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=b}return C}function v(w,A,b,T,C){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Nr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let P=t.update(w),E=w.material;if(Array.isArray(E)){let D=P.groups;for(let U=0,N=D.length;U<N;U++){let z=D[U],O=E[z.materialIndex];if(O&&O.visible){let k=S(w,O,T,C);w.onBeforeShadow(i,w,A,b,P,k,z),i.renderBufferDirect(b,null,P,k,w,z),w.onAfterShadow(i,w,A,b,P,k,z)}}}else if(E.visible){let D=S(w,E,T,C);w.onBeforeShadow(i,w,A,b,P,D,null),i.renderBufferDirect(b,null,P,D,w,null),w.onAfterShadow(i,w,A,b,P,D,null)}}let F=w.children;for(let P=0,E=F.length;P<E;P++)v(F[P],A,b,T,C)}function M(w){w.target.removeEventListener("dispose",M);for(let b in c){let T=c[b],C=w.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function D_(i,t){function e(){let W=!1,vt=new Ae,ot=null,yt=new Ae(0,0,0,0);return{setMask:function(Et){ot!==Et&&!W&&(i.colorMask(Et,Et,Et,Et),ot=Et)},setLocked:function(Et){W=Et},setClear:function(Et,ht,Ut,Lt,xe){xe===!0&&(Et*=Lt,ht*=Lt,Ut*=Lt),vt.set(Et,ht,Ut,Lt),yt.equals(vt)===!1&&(i.clearColor(Et,ht,Ut,Lt),yt.copy(vt))},reset:function(){W=!1,ot=null,yt.set(-1,0,0,0)}}}function n(){let W=!1,vt=!1,ot=null,yt=null,Et=null;return{setReversed:function(ht){if(vt!==ht){let Ut=t.get("EXT_clip_control");ht?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),vt=ht;let Lt=Et;Et=null,this.setClear(Lt)}},getReversed:function(){return vt},setTest:function(ht){ht?$(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(ht){ot!==ht&&!W&&(i.depthMask(ht),ot=ht)},setFunc:function(ht){if(vt&&(ht=Mf[ht]),yt!==ht){switch(ht){case Bo:i.depthFunc(i.NEVER);break;case zo:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Go:i.depthFunc(i.GEQUAL);break;case Ho:i.depthFunc(i.GREATER);break;case Wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=ht}},setLocked:function(ht){W=ht},setClear:function(ht){Et!==ht&&(Et=ht,vt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){W=!1,ot=null,yt=null,Et=null,vt=!1}}}function r(){let W=!1,vt=null,ot=null,yt=null,Et=null,ht=null,Ut=null,Lt=null,xe=null;return{setTest:function(he){W||(he?$(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(he){vt!==he&&!W&&(i.stencilMask(he),vt=he)},setFunc:function(he,yn,Dn){(ot!==he||yt!==yn||Et!==Dn)&&(i.stencilFunc(he,yn,Dn),ot=he,yt=yn,Et=Dn)},setOp:function(he,yn,Dn){(ht!==he||Ut!==yn||Lt!==Dn)&&(i.stencilOp(he,yn,Dn),ht=he,Ut=yn,Lt=Dn)},setLocked:function(he){W=he},setClear:function(he){xe!==he&&(i.clearStencil(he),xe=he)},reset:function(){W=!1,vt=null,ot=null,yt=null,Et=null,ht=null,Ut=null,Lt=null,xe=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,m=[],x=null,g=!1,p=null,_=null,S=null,v=null,M=null,w=null,A=null,b=new st(0,0,0),T=0,C=!1,I=null,F=null,P=null,E=null,D=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,z=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),N=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),N=z>=2);let k=null,V={},it=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),lt=new Ae().fromArray(it),j=new Ae().fromArray(et);function ut(W,vt,ot,yt){let Et=new Uint8Array(4),ht=i.createTexture();i.bindTexture(W,ht),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<ot;Ut++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(vt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return ht}let X={};X[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(Tr),Kt(!1),Se(xc),$(i.CULL_FACE),$t(kn);function $(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function ct(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function gt(W,vt){return h[W]!==vt?(i.bindFramebuffer(W,vt),h[W]=vt,W===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=vt),W===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function ft(W,vt){let ot=m,yt=!1;if(W){ot=d.get(vt),ot===void 0&&(ot=[],d.set(vt,ot));let Et=W.textures;if(ot.length!==Et.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ut=Et.length;ht<Ut;ht++)ot[ht]=i.COLOR_ATTACHMENT0+ht;ot.length=Et.length,yt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ot)}function Pt(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let ie={[Ji]:i.FUNC_ADD,[Gh]:i.FUNC_SUBTRACT,[Hh]:i.FUNC_REVERSE_SUBTRACT};ie[Wh]=i.MIN,ie[Xh]=i.MAX;let kt={[qh]:i.ZERO,[Yh]:i.ONE,[$h]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[tf]:i.SRC_ALPHA_SATURATE,[Qh]:i.DST_COLOR,[Jh]:i.DST_ALPHA,[Zh]:i.ONE_MINUS_SRC_COLOR,[vc]:i.ONE_MINUS_SRC_ALPHA,[jh]:i.ONE_MINUS_DST_COLOR,[Kh]:i.ONE_MINUS_DST_ALPHA,[ef]:i.CONSTANT_COLOR,[nf]:i.ONE_MINUS_CONSTANT_COLOR,[rf]:i.CONSTANT_ALPHA,[sf]:i.ONE_MINUS_CONSTANT_ALPHA};function $t(W,vt,ot,yt,Et,ht,Ut,Lt,xe,he){if(W===kn){g===!0&&(ct(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),W!==Vh){if(W!==p||he!==C){if((_!==Ji||M!==Ji)&&(i.blendEquation(i.FUNC_ADD),_=Ji,M=Ji),he)switch(W){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.ONE,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Es:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:zt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bc:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Es:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",W);break}S=null,v=null,w=null,A=null,b.set(0,0,0),T=0,p=W,C=he}return}Et=Et||vt,ht=ht||ot,Ut=Ut||yt,(vt!==_||Et!==M)&&(i.blendEquationSeparate(ie[vt],ie[Et]),_=vt,M=Et),(ot!==S||yt!==v||ht!==w||Ut!==A)&&(i.blendFuncSeparate(kt[ot],kt[yt],kt[ht],kt[Ut]),S=ot,v=yt,w=ht,A=Ut),(Lt.equals(b)===!1||xe!==T)&&(i.blendColor(Lt.r,Lt.g,Lt.b,xe),b.copy(Lt),T=xe),p=W,C=!1}function re(W,vt){W.side===Me?ct(i.CULL_FACE):$(i.CULL_FACE);let ot=W.side===en;vt&&(ot=!ot),Kt(ot),W.blending===Ei&&W.transparent===!1?$t(kn):$t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);let yt=W.stencilWrite;a.setTest(yt),yt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),nn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(W){I!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),I=W)}function Se(W){W!==Bh?($(i.CULL_FACE),W!==F&&(W===xc?i.cullFace(i.BACK):W===zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),F=W}function Be(W){W!==P&&(N&&i.lineWidth(W),P=W)}function nn(W,vt,ot){W?($(i.POLYGON_OFFSET_FILL),(E!==vt||D!==ot)&&(E=vt,D=ot,o.getReversed()&&(vt=-vt),i.polygonOffset(vt,ot))):ct(i.POLYGON_OFFSET_FILL)}function Te(W){W?$(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function Ie(W){W===void 0&&(W=i.TEXTURE0+U-1),k!==W&&(i.activeTexture(W),k=W)}function q(W,vt,ot){ot===void 0&&(k===null?ot=i.TEXTURE0+U-1:ot=k);let yt=V[ot];yt===void 0&&(yt={type:void 0,texture:void 0},V[ot]=yt),(yt.type!==W||yt.texture!==vt)&&(k!==ot&&(i.activeTexture(ot),k=ot),i.bindTexture(W,vt||X[W]),yt.type=W,yt.texture=vt)}function We(){let W=V[k];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function R(){try{i.texSubImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function Y(){try{i.texSubImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function nt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function mt(){try{i.texStorage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function xt(){try{i.texStorage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function rt(){try{i.texImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function at(){try{i.texImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function bt(W){return f[W]!==void 0?f[W]:i.getParameter(W)}function Dt(W,vt){f[W]!==vt&&(i.pixelStorei(W,vt),f[W]=vt)}function Mt(W){lt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),lt.copy(W))}function _t(W){j.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),j.copy(W))}function Nt(W,vt){let ot=c.get(vt);ot===void 0&&(ot=new WeakMap,c.set(vt,ot));let yt=ot.get(W);yt===void 0&&(yt=i.getUniformBlockIndex(vt,W.name),ot.set(W,yt))}function Ot(W,vt){let yt=c.get(vt).get(W);l.get(vt)!==yt&&(i.uniformBlockBinding(vt,yt,W.__bindingPointIndex),l.set(vt,yt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},k=null,V={},h={},d=new WeakMap,m=[],x=null,g=!1,p=null,_=null,S=null,v=null,M=null,w=null,A=null,b=new st(0,0,0),T=0,C=!1,I=null,F=null,P=null,E=null,D=null,lt.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:$,disable:ct,bindFramebuffer:gt,drawBuffers:ft,useProgram:Pt,setBlending:$t,setMaterial:re,setFlipSided:Kt,setCullFace:Se,setLineWidth:Be,setPolygonOffset:nn,setScissorTest:Te,activeTexture:Ie,bindTexture:q,unbindTexture:We,compressedTexImage2D:pe,compressedTexImage3D:B,texImage2D:rt,texImage3D:at,pixelStorei:Dt,getParameter:bt,updateUBOMapping:Nt,uniformBlockBinding:Ot,texStorage2D:mt,texStorage3D:xt,texSubImage2D:R,texSubImage3D:Y,compressedTexSubImage2D:Q,compressedTexSubImage3D:nt,scissor:Mt,viewport:_t,reset:Xt}}function N_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,u=new WeakMap,f=new Set,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(B,R){return m?new OffscreenCanvas(B,R):Er("canvas")}function g(B,R,Y){let Q=1,nt=pe(B);if((nt.width>Y||nt.height>Y)&&(Q=Y/Math.max(nt.width,nt.height)),Q<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let mt=Math.floor(Q*nt.width),xt=Math.floor(Q*nt.height);h===void 0&&(h=x(mt,xt));let rt=R?x(mt,xt):h;return rt.width=mt,rt.height=xt,rt.getContext("2d").drawImage(B,0,0,mt,xt),Bt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+mt+"x"+xt+")."),rt}else return"data"in B&&Bt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),B;return B}function p(B){return B.generateMipmaps}function _(B){i.generateMipmap(B)}function S(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(B,R,Y,Q,nt,mt=!1){if(B!==null){if(i[B]!==void 0)return i[B];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let xt;Q&&(xt=t.get("EXT_texture_norm16"),xt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=R;if(R===i.RED&&(Y===i.FLOAT&&(rt=i.R32F),Y===i.HALF_FLOAT&&(rt=i.R16F),Y===i.UNSIGNED_BYTE&&(rt=i.R8),Y===i.UNSIGNED_SHORT&&xt&&(rt=xt.R16_EXT),Y===i.SHORT&&xt&&(rt=xt.R16_SNORM_EXT)),R===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.R8UI),Y===i.UNSIGNED_SHORT&&(rt=i.R16UI),Y===i.UNSIGNED_INT&&(rt=i.R32UI),Y===i.BYTE&&(rt=i.R8I),Y===i.SHORT&&(rt=i.R16I),Y===i.INT&&(rt=i.R32I)),R===i.RG&&(Y===i.FLOAT&&(rt=i.RG32F),Y===i.HALF_FLOAT&&(rt=i.RG16F),Y===i.UNSIGNED_BYTE&&(rt=i.RG8),Y===i.UNSIGNED_SHORT&&xt&&(rt=xt.RG16_EXT),Y===i.SHORT&&xt&&(rt=xt.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RG16UI),Y===i.UNSIGNED_INT&&(rt=i.RG32UI),Y===i.BYTE&&(rt=i.RG8I),Y===i.SHORT&&(rt=i.RG16I),Y===i.INT&&(rt=i.RG32I)),R===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),Y===i.UNSIGNED_INT&&(rt=i.RGB32UI),Y===i.BYTE&&(rt=i.RGB8I),Y===i.SHORT&&(rt=i.RGB16I),Y===i.INT&&(rt=i.RGB32I)),R===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),Y===i.UNSIGNED_INT&&(rt=i.RGBA32UI),Y===i.BYTE&&(rt=i.RGBA8I),Y===i.SHORT&&(rt=i.RGBA16I),Y===i.INT&&(rt=i.RGBA32I)),R===i.RGB&&(Y===i.UNSIGNED_SHORT&&xt&&(rt=xt.RGB16_EXT),Y===i.SHORT&&xt&&(rt=xt.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),R===i.RGBA){let at=mt?as:te.getTransfer(nt);Y===i.FLOAT&&(rt=i.RGBA32F),Y===i.HALF_FLOAT&&(rt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(rt=at===de?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&xt&&(rt=xt.RGBA16_EXT),Y===i.SHORT&&xt&&(rt=xt.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function M(B,R){let Y;return B?R===null||R===Rn||R===Or?Y=i.DEPTH24_STENCIL8:R===Cn?Y=i.DEPTH32F_STENCIL8:R===Ur&&(Y=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Rn||R===Or?Y=i.DEPTH_COMPONENT24:R===Cn?Y=i.DEPTH_COMPONENT32F:R===Ur&&(Y=i.DEPTH_COMPONENT16),Y}function w(B,R){return p(B)===!0||B.isFramebufferTexture&&B.minFilter!==ke&&B.minFilter!==Ge?Math.log2(Math.max(R.width,R.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?R.mipmaps.length:1}function A(B){let R=B.target;R.removeEventListener("dispose",A),T(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&f.delete(R)}function b(B){let R=B.target;R.removeEventListener("dispose",b),I(R)}function T(B){let R=n.get(B);if(R.__webglInit===void 0)return;let Y=B.source,Q=d.get(Y);if(Q){let nt=Q[R.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&C(B),Object.keys(Q).length===0&&d.delete(Y)}n.remove(B)}function C(B){let R=n.get(B);i.deleteTexture(R.__webglTexture);let Y=B.source,Q=d.get(Y);delete Q[R.__cacheKey],o.memory.textures--}function I(B){let R=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(R.__webglFramebuffer[Q]))for(let nt=0;nt<R.__webglFramebuffer[Q].length;nt++)i.deleteFramebuffer(R.__webglFramebuffer[Q][nt]);else i.deleteFramebuffer(R.__webglFramebuffer[Q]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[Q])}else{if(Array.isArray(R.__webglFramebuffer))for(let Q=0;Q<R.__webglFramebuffer.length;Q++)i.deleteFramebuffer(R.__webglFramebuffer[Q]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Q=0;Q<R.__webglColorRenderbuffer.length;Q++)R.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[Q]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let Y=B.textures;for(let Q=0,nt=Y.length;Q<nt;Q++){let mt=n.get(Y[Q]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(Y[Q])}n.remove(B)}let F=0;function P(){F=0}function E(){return F}function D(B){F=B}function U(){let B=F;return B>=r.maxTextures&&Bt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,B}function N(B){let R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function z(B,R){let Y=n.get(B);if(B.isVideoTexture&&q(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&Y.__version!==B.version){let Q=B.image;if(Q===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(Y,B,R);return}}else B.isExternalTexture&&(Y.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+R)}function O(B,R){let Y=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Y.__version!==B.version){ct(Y,B,R);return}else B.isExternalTexture&&(Y.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+R)}function k(B,R){let Y=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Y.__version!==B.version){ct(Y,B,R);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+R)}function V(B,R){let Y=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&Y.__version!==B.version){gt(Y,B,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+R)}let it={[Wi]:i.REPEAT,[cn]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},et={[ke]:i.NEAREST,[lf]:i.NEAREST_MIPMAP_NEAREST,[Rs]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[va]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},lt={[ff]:i.NEVER,[xf]:i.ALWAYS,[df]:i.LESS,[il]:i.LEQUAL,[pf]:i.EQUAL,[rl]:i.GEQUAL,[mf]:i.GREATER,[gf]:i.NOTEQUAL};function j(B,R){if(R.type===Cn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Ge||R.magFilter===va||R.magFilter===Rs||R.magFilter===Ri||R.minFilter===Ge||R.minFilter===va||R.minFilter===Rs||R.minFilter===Ri)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,it[R.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,it[R.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,it[R.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,et[R.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,et[R.minFilter]),R.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,lt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ke||R.minFilter!==Rs&&R.minFilter!==Ri||R.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ut(B,R){let Y=!1;B.__webglInit===void 0&&(B.__webglInit=!0,R.addEventListener("dispose",A));let Q=R.source,nt=d.get(Q);nt===void 0&&(nt={},d.set(Q,nt));let mt=N(R);if(mt!==B.__cacheKey){nt[mt]===void 0&&(nt[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),nt[mt].usedTimes++;let xt=nt[B.__cacheKey];xt!==void 0&&(nt[B.__cacheKey].usedTimes--,xt.usedTimes===0&&C(R)),B.__cacheKey=mt,B.__webglTexture=nt[mt].texture}return Y}function X(B,R,Y){return Math.floor(Math.floor(B/Y)/R)}function $(B,R,Y,Q){let mt=B.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,Y,Q,R.data);else{mt.sort((Dt,Mt)=>Dt.start-Mt.start);let xt=0;for(let Dt=1;Dt<mt.length;Dt++){let Mt=mt[xt],_t=mt[Dt],Nt=Mt.start+Mt.count,Ot=X(_t.start,R.width,4),Xt=X(Mt.start,R.width,4);_t.start<=Nt+1&&Ot===Xt&&X(_t.start+_t.count-1,R.width,4)===Ot?Mt.count=Math.max(Mt.count,_t.start+_t.count-Mt.start):(++xt,mt[xt]=_t)}mt.length=xt+1;let rt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let Dt=0,Mt=mt.length;Dt<Mt;Dt++){let _t=mt[Dt],Nt=Math.floor(_t.start/4),Ot=Math.ceil(_t.count/4),Xt=Nt%R.width,W=Math.floor(Nt/R.width),vt=Ot,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,Xt,W,vt,ot,Y,Q,R.data)}B.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function ct(B,R,Y){let Q=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Q=i.TEXTURE_3D);let nt=ut(B,R),mt=R.source;e.bindTexture(Q,B.__webglTexture,i.TEXTURE0+Y);let xt=n.get(mt);if(mt.version!==xt.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let ot=te.getPrimaries(te.workingColorSpace),yt=R.colorSpace===jn?null:te.getPrimaries(R.colorSpace),Et=R.colorSpace===jn||ot===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let at=g(R.image,!1,r.maxTextureSize);at=We(R,at);let bt=s.convert(R.format,R.colorSpace),Dt=s.convert(R.type),Mt=v(R.internalFormat,bt,Dt,R.normalized,R.colorSpace,R.isVideoTexture);j(Q,R);let _t,Nt=R.mipmaps,Ot=R.isVideoTexture!==!0,Xt=xt.__version===void 0||nt===!0,W=mt.dataReady,vt=w(R,at);if(R.isDepthTexture)Mt=M(R.format===Ci,R.type),Xt&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Mt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Mt,at.width,at.height,0,bt,Dt,null));else if(R.isDataTexture)if(Nt.length>0){Ot&&Xt&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,Nt[0].width,Nt[0].height);for(let ot=0,yt=Nt.length;ot<yt;ot++)_t=Nt[ot],Ot?W&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,_t.width,_t.height,bt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,ot,Mt,_t.width,_t.height,0,bt,Dt,_t.data);R.generateMipmaps=!1}else Ot?(Xt&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,at.width,at.height),W&&$(R,at,bt,Dt)):e.texImage2D(i.TEXTURE_2D,0,Mt,at.width,at.height,0,bt,Dt,at.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ot&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Mt,Nt[0].width,Nt[0].height,at.depth);for(let ot=0,yt=Nt.length;ot<yt;ot++)if(_t=Nt[ot],R.format!==_n)if(bt!==null)if(Ot){if(W)if(R.layerUpdates.size>0){let Et=Wc(_t.width,_t.height,R.format,R.type);for(let ht of R.layerUpdates){let Ut=_t.data.subarray(ht*Et/_t.data.BYTES_PER_ELEMENT,(ht+1)*Et/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,ht,_t.width,_t.height,1,bt,Ut)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,_t.width,_t.height,at.depth,bt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Mt,_t.width,_t.height,at.depth,0,_t.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,_t.width,_t.height,at.depth,bt,Dt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Mt,_t.width,_t.height,at.depth,0,bt,Dt,_t.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{Ot&&Xt&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,Nt[0].width,Nt[0].height);for(let ot=0,yt=Nt.length;ot<yt;ot++)_t=Nt[ot],R.format!==_n?bt!==null?Ot?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,_t.width,_t.height,bt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Mt,_t.width,_t.height,0,_t.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?W&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,_t.width,_t.height,bt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,ot,Mt,_t.width,_t.height,0,bt,Dt,_t.data)}else if(R.isDataArrayTexture)if(Ot){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Mt,at.width,at.height,at.depth),W)if(R.layerUpdates.size>0){let ot=Wc(at.width,at.height,R.format,R.type);for(let yt of R.layerUpdates){let Et=at.data.subarray(yt*ot/at.data.BYTES_PER_ELEMENT,(yt+1)*ot/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,at.width,at.height,1,bt,Dt,Et)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,bt,Dt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,at.width,at.height,at.depth,0,bt,Dt,at.data);else if(R.isData3DTexture)Ot?(Xt&&e.texStorage3D(i.TEXTURE_3D,vt,Mt,at.width,at.height,at.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,bt,Dt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,at.width,at.height,at.depth,0,bt,Dt,at.data);else if(R.isFramebufferTexture){if(Xt)if(Ot)e.texStorage2D(i.TEXTURE_2D,vt,Mt,at.width,at.height);else{let ot=at.width,yt=at.height;for(let Et=0;Et<vt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Mt,ot,yt,0,bt,Dt,null),ot>>=1,yt>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),at.parentNode!==ot){ot.appendChild(at),f.add(R),ot.onpaint=yt=>{let Et=yt.changedElements;for(let ht of f)Et.includes(ht.image)&&(ht.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let Et=i.RGBA,ht=i.RGBA,Ut=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,ht,Ut,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Ot&&Xt){let ot=pe(Nt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Mt,ot.width,ot.height)}for(let ot=0,yt=Nt.length;ot<yt;ot++)_t=Nt[ot],Ot?W&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,bt,Dt,_t):e.texImage2D(i.TEXTURE_2D,ot,Mt,bt,Dt,_t);R.generateMipmaps=!1}else if(Ot){if(Xt){let ot=pe(at);e.texStorage2D(i.TEXTURE_2D,vt,Mt,ot.width,ot.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Dt,at)}else e.texImage2D(i.TEXTURE_2D,0,Mt,bt,Dt,at);p(R)&&_(Q),xt.__version=mt.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function gt(B,R,Y){if(R.image.length!==6)return;let Q=ut(B,R),nt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+Y);let mt=n.get(nt);if(nt.version!==mt.__version||Q===!0){e.activeTexture(i.TEXTURE0+Y);let xt=te.getPrimaries(te.workingColorSpace),rt=R.colorSpace===jn?null:te.getPrimaries(R.colorSpace),at=R.colorSpace===jn||xt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let bt=R.isCompressedTexture||R.image[0].isCompressedTexture,Dt=R.image[0]&&R.image[0].isDataTexture,Mt=[];for(let ht=0;ht<6;ht++)!bt&&!Dt?Mt[ht]=g(R.image[ht],!0,r.maxCubemapSize):Mt[ht]=Dt?R.image[ht].image:R.image[ht],Mt[ht]=We(R,Mt[ht]);let _t=Mt[0],Nt=s.convert(R.format,R.colorSpace),Ot=s.convert(R.type),Xt=v(R.internalFormat,Nt,Ot,R.normalized,R.colorSpace),W=R.isVideoTexture!==!0,vt=mt.__version===void 0||Q===!0,ot=nt.dataReady,yt=w(R,_t);j(i.TEXTURE_CUBE_MAP,R);let Et;if(bt){W&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Xt,_t.width,_t.height);for(let ht=0;ht<6;ht++){Et=Mt[ht].mipmaps;for(let Ut=0;Ut<Et.length;Ut++){let Lt=Et[Ut];R.format!==_n?Nt!==null?W?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,0,0,Lt.width,Lt.height,Nt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,Xt,Lt.width,Lt.height,0,Lt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,0,0,Lt.width,Lt.height,Nt,Ot,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,Xt,Lt.width,Lt.height,0,Nt,Ot,Lt.data)}}}else{if(Et=R.mipmaps,W&&vt){Et.length>0&&yt++;let ht=pe(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Xt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Dt){W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Mt[ht].width,Mt[ht].height,Nt,Ot,Mt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Xt,Mt[ht].width,Mt[ht].height,0,Nt,Ot,Mt[ht].data);for(let Ut=0;Ut<Et.length;Ut++){let xe=Et[Ut].image[ht].image;W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,0,0,xe.width,xe.height,Nt,Ot,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,Xt,xe.width,xe.height,0,Nt,Ot,xe.data)}}else{W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Nt,Ot,Mt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Xt,Nt,Ot,Mt[ht]);for(let Ut=0;Ut<Et.length;Ut++){let Lt=Et[Ut];W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,0,0,Nt,Ot,Lt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,Xt,Nt,Ot,Lt.image[ht])}}}p(R)&&_(i.TEXTURE_CUBE_MAP),mt.__version=nt.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function ft(B,R,Y,Q,nt,mt){let xt=s.convert(Y.format,Y.colorSpace),rt=s.convert(Y.type),at=v(Y.internalFormat,xt,rt,Y.normalized,Y.colorSpace),bt=n.get(R),Dt=n.get(Y);if(Dt.__renderTarget=R,!bt.__hasExternalTextures){let Mt=Math.max(1,R.width>>mt),_t=Math.max(1,R.height>>mt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,mt,at,Mt,_t,R.depth,0,xt,rt,null):e.texImage2D(nt,mt,at,Mt,_t,0,xt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),Ie(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,nt,Dt.__webglTexture,0,Te(R)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,nt,Dt.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(B,R,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,B),R.depthBuffer){let Q=R.depthTexture,nt=Q&&Q.isDepthTexture?Q.type:null,mt=M(R.stencilBuffer,nt),xt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(R),mt,R.width,R.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(R),mt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,B)}else{let Q=R.textures;for(let nt=0;nt<Q.length;nt++){let mt=Q[nt],xt=s.convert(mt.format,mt.colorSpace),rt=s.convert(mt.type),at=v(mt.internalFormat,xt,rt,mt.normalized,mt.colorSpace);Ie(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(R),at,R.width,R.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(R),at,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,at,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ie(B,R,Y){let Q=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(R.depthTexture);if(nt.__renderTarget=R,(!nt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Q){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,R.depthTexture.addEventListener("dispose",A)),nt.__webglTexture===void 0){nt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),j(i.TEXTURE_CUBE_MAP,R.depthTexture);let bt=s.convert(R.depthTexture.format),Dt=s.convert(R.depthTexture.type),Mt;R.depthTexture.format===On?Mt=i.DEPTH_COMPONENT24:R.depthTexture.format===Ci&&(Mt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Mt,R.width,R.height,0,bt,Dt,null)}}else z(R.depthTexture,0);let mt=nt.__webglTexture,xt=Te(R),rt=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,at=R.depthTexture.format===Ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===On)Ie(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,rt,mt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,at,rt,mt,0);else if(R.depthTexture.format===Ci)Ie(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,rt,mt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,at,rt,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(B){let R=n.get(B),Y=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){let Q=B.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Q){let nt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Q.removeEventListener("dispose",nt)};Q.addEventListener("dispose",nt),R.__depthDisposeCallback=nt}R.__boundDepthTexture=Q}if(B.depthTexture&&!R.__autoAllocateDepthBuffer)if(Y)for(let Q=0;Q<6;Q++)ie(R.__webglFramebuffer[Q],B,Q);else{let Q=B.texture.mipmaps;Q&&Q.length>0?ie(R.__webglFramebuffer[0],B,0):ie(R.__webglFramebuffer,B,0)}else if(Y){R.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[Q]),R.__webglDepthbuffer[Q]===void 0)R.__webglDepthbuffer[Q]=i.createRenderbuffer(),Pt(R.__webglDepthbuffer[Q],B,!1);else{let nt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=R.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,mt)}}else{let Q=B.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Pt(R.__webglDepthbuffer,B,!1);else{let nt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(B,R,Y){let Q=n.get(B);R!==void 0&&ft(Q.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&kt(B)}function re(B){let R=B.texture,Y=n.get(B),Q=n.get(R);B.addEventListener("dispose",b);let nt=B.textures,mt=B.isWebGLCubeRenderTarget===!0,xt=nt.length>1;if(xt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=R.version,o.memory.textures++),mt){Y.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(R.mipmaps&&R.mipmaps.length>0){Y.__webglFramebuffer[rt]=[];for(let at=0;at<R.mipmaps.length;at++)Y.__webglFramebuffer[rt][at]=i.createFramebuffer()}else Y.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Y.__webglFramebuffer=[];for(let rt=0;rt<R.mipmaps.length;rt++)Y.__webglFramebuffer[rt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(xt)for(let rt=0,at=nt.length;rt<at;rt++){let bt=n.get(nt[rt]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&Ie(B)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let rt=0;rt<nt.length;rt++){let at=nt[rt];Y.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[rt]);let bt=s.convert(at.format,at.colorSpace),Dt=s.convert(at.type),Mt=v(at.internalFormat,bt,Dt,at.normalized,at.colorSpace,B.isXRRenderTarget===!0),_t=Te(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Mt,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(Y.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),j(i.TEXTURE_CUBE_MAP,R);for(let rt=0;rt<6;rt++)if(R.mipmaps&&R.mipmaps.length>0)for(let at=0;at<R.mipmaps.length;at++)ft(Y.__webglFramebuffer[rt][at],B,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,at);else ft(Y.__webglFramebuffer[rt],B,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(R)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let rt=0,at=nt.length;rt<at;rt++){let bt=nt[rt],Dt=n.get(bt),Mt=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Mt=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Dt.__webglTexture),j(Mt,bt),ft(Y.__webglFramebuffer,B,bt,i.COLOR_ATTACHMENT0+rt,Mt,0),p(bt)&&_(Mt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(rt=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Q.__webglTexture),j(rt,R),R.mipmaps&&R.mipmaps.length>0)for(let at=0;at<R.mipmaps.length;at++)ft(Y.__webglFramebuffer[at],B,R,i.COLOR_ATTACHMENT0,rt,at);else ft(Y.__webglFramebuffer,B,R,i.COLOR_ATTACHMENT0,rt,0);p(R)&&_(rt),e.unbindTexture()}B.depthBuffer&&kt(B)}function Kt(B){let R=B.textures;for(let Y=0,Q=R.length;Y<Q;Y++){let nt=R[Y];if(p(nt)){let mt=S(B),xt=n.get(nt).__webglTexture;e.bindTexture(mt,xt),_(mt),e.unbindTexture()}}}let Se=[],Be=[];function nn(B){if(B.samples>0){if(Ie(B)===!1){let R=B.textures,Y=B.width,Q=B.height,nt=i.COLOR_BUFFER_BIT,mt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(B),rt=R.length>1;if(rt)for(let bt=0;bt<R.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let at=B.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let bt=0;bt<R.length;bt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);let Dt=n.get(R[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,nt,i.NEAREST),l===!0&&(Se.length=0,Be.length=0,Se.push(i.COLOR_ATTACHMENT0+bt),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Se.push(mt),Be.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let bt=0;bt<R.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);let Dt=n.get(R[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&l){let R=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Te(B){return Math.min(r.maxSamples,B.samples)}function Ie(B){let R=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function q(B){let R=o.render.frame;u.get(B)!==R&&(u.set(B,R),B.update())}function We(B,R){let Y=B.colorSpace,Q=B.format,nt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||Y!==os&&Y!==jn&&(te.getTransfer(Y)===de?(Q!==_n||nt!==fn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",Y)),R}function pe(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.getTextureUnits=E,this.setTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=$t,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function U_(i,t){function e(n,r=jn){let s,o=te.getTransfer(r);if(n===fn)return i.UNSIGNED_BYTE;if(n===Ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ic)return i.BYTE;if(n===Pc)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===ya)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===Dc)return i.ALPHA;if(n===Nc)return i.RGB;if(n===_n)return i.RGBA;if(n===On)return i.DEPTH_COMPONENT;if(n===Ci)return i.DEPTH_STENCIL;if(n===Uc)return i.RED;if(n===wa)return i.RED_INTEGER;if(n===Ii)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===Ea)return i.RGBA_INTEGER;if(n===Cs||n===Is||n===Ps||n===Ls)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ra||n===Ca||n===Ia)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Aa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===La||n===Fa||n===Da||n===Na||n===Fs||n===Ua)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pa||n===La)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Da)return s.COMPRESSED_R11_EAC;if(n===Na)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Fs)return s.COMPRESSED_RG11_EAC;if(n===Ua)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oa||n===Ba||n===za||n===ka||n===Va||n===Ga||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Oa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===za)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Za)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===Qa||n===ja)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ka)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===el||n===Ds||n===nl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===tl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===el)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ds)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B_=`
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

}`,cu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ps(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new un({vertexShader:O_,fragmentShader:B_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uu=class extends Bn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new cu,p={},_=e.getContextAttributes(),S=null,v=null,M=[],w=[],A=new Zt,b=null,T=null,C=new $e;C.viewport=new Ae;let I=new $e;I.viewport=new Ae;let F=[C,I],P=new ga,E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=M[X];return $===void 0&&($=new Ir,M[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=M[X];return $===void 0&&($=new Ir,M[X]=$),$.getGripSpace()},this.getHand=function(X){let $=M[X];return $===void 0&&($=new Ir,M[X]=$),$.getHandSpace()};function U(X){let $=w.indexOf(X.inputSource);if($===-1)return;let ct=M[$];ct!==void 0&&(ct.update(X.inputSource,X.frame,c||o),ct.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",z);for(let X=0;X<M.length;X++){let $=w[X];$!==null&&(w[X]=null,M[X].disconnect($))}E=null,D=null,g.reset();for(let X in p)delete p[X];if(t.setRenderTarget(S),d=null,h=null,f=null,r=null,v=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),T!==null){let X=T.camera;X.fov=T.fov,X.zoom=T.zoom,X.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(S=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",N),r.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,gt=null,ft=null;_.depth&&(ft=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=_.stencil?Ci:On,gt=_.stencil?Or:Rn);let Pt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Pt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Ke(h.textureWidth,h.textureHeight,{format:_n,type:fn,depthTexture:new vi(h.textureWidth,h.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ct={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ke(d.framebufferWidth,d.framebufferHeight,{format:_n,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ut.setContext(r),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(X){for(let $=0;$<X.removed.length;$++){let ct=X.removed[$],gt=w.indexOf(ct);gt>=0&&(w[gt]=null,M[gt].disconnect(ct))}for(let $=0;$<X.added.length;$++){let ct=X.added[$],gt=w.indexOf(ct);if(gt===-1){for(let Pt=0;Pt<M.length;Pt++)if(Pt>=w.length){w.push(ct),gt=Pt;break}else if(w[Pt]===null){w[Pt]=ct,gt=Pt;break}if(gt===-1)break}let ft=M[gt];ft&&ft.connect(ct)}}let O=new G,k=new G;function V(X,$,ct){O.setFromMatrixPosition($.matrixWorld),k.setFromMatrixPosition(ct.matrixWorld);let gt=O.distanceTo(k),ft=$.projectionMatrix.elements,Pt=ct.projectionMatrix.elements,ie=ft[14]/(ft[10]-1),kt=ft[14]/(ft[10]+1),$t=(ft[9]+1)/ft[5],re=(ft[9]-1)/ft[5],Kt=(ft[8]-1)/ft[0],Se=(Pt[8]+1)/Pt[0],Be=ie*Kt,nn=ie*Se,Te=gt/(-Kt+Se),Ie=Te*-Kt;if($.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ie),X.translateZ(Te),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ft[10]===-1)X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let q=ie+Te,We=kt+Te,pe=Be-Ie,B=nn+(gt-Ie),R=$t*kt/We*q,Y=re*kt/We*q;X.projectionMatrix.makePerspective(pe,B,R,Y,q,We),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function it(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let $=X.near,ct=X.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(ct=g.depthFar)),P.near=I.near=C.near=$,P.far=I.far=C.far=ct,(E!==P.near||D!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),E=P.near,D=P.far),P.layers.mask=X.layers.mask|6,C.layers.mask=P.layers.mask&-5,I.layers.mask=P.layers.mask&-3;let gt=X.parent,ft=P.cameras;it(P,gt);for(let Pt=0;Pt<ft.length;Pt++)it(ft[Pt],gt);ft.length===2?V(P,C,I):P.projectionMatrix.copy(C.projectionMatrix),T===null&&X.isPerspectiveCamera&&(T={camera:X,fov:X.fov,zoom:X.zoom}),et(X,P,gt)};function et(X,$,ct){ct===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(ct.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Yo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(X){return p[X]};let lt=null;function j(X,$){if(u=$.getViewerPose(c||o),m=$,u!==null){let ct=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let gt=!1;ct.length!==P.cameras.length&&(P.cameras.length=0,gt=!0);for(let kt=0;kt<ct.length;kt++){let $t=ct[kt],re=null;if(d!==null)re=d.getViewport($t);else{let Se=f.getViewSubImage(h,$t);re=Se.viewport,kt===0&&(t.setRenderTargetTextures(v,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(v))}let Kt=F[kt];Kt===void 0&&(Kt=new $e,Kt.layers.enable(kt),Kt.viewport=new Ae,F[kt]=Kt),Kt.matrix.fromArray($t.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray($t.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(re.x,re.y,re.width,re.height),kt===0&&(P.matrix.copy(Kt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),gt===!0&&P.cameras.push(Kt)}let ft=r.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let kt=f.getDepthInformation(ct[0]);kt&&kt.isValid&&kt.texture&&g.init(kt,r.renderState)}if(ft&&ft.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let kt=0;kt<ct.length;kt++){let $t=ct[kt].camera;if($t){let re=p[$t];re||(re=new ps,p[$t]=re);let Kt=f.getCameraImage($t);re.sourceTexture=Kt}}}}for(let ct=0;ct<M.length;ct++){let gt=w[ct],ft=M[ct];gt!==null&&ft!==void 0&&ft.update(gt,$,c||o)}lt&&lt(X,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),m=null}let ut=new Qf;ut.setAnimationLoop(j),this.setAnimationLoop=function(X){lt=X},this.dispose=function(){}}},z_=new we,rd=new Gt;rd.set(-1,0,0,0,1,0,0,0,1);function k_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Vc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,_,S,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===en&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===en&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),S=_.envMap,v=_.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(rd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function V_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let w=M.program;n.uniformBlockBinding(v,w)}function c(v,M){let w=r[v.id];w===void 0&&(g(v),w=u(v),r[v.id]=w,v.addEventListener("dispose",_));let A=M.program;n.updateUBOMapping(v,A);let b=t.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function u(v){let M=f();v.__bindingPointIndex=M;let w=i.createBuffer(),A=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let M=r[v.id],w=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,T=w.length;b<T;b++){let C=w[b];if(Array.isArray(C))for(let I=0,F=C.length;I<F;I++)d(C[I],b,I,A);else d(C,b,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,w,A){if(x(v,M,w,A)===!0){let b=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){let F=T[I],P=p(F);m(F,v.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function m(v,M,w){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,w)}function x(v,M,w,A){let b=v.value,T=M+"_"+w;if(A[T]===void 0)return typeof b=="number"||typeof b=="boolean"?A[T]=b:ArrayBuffer.isView(b)?A[T]=b.slice():A[T]=b.clone(),!0;{let C=A[T];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return A[T]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(C.equals(b)===!1)return C.copy(b),!0}}return!1}function g(v){let M=v.uniforms,w=0,A=16;for(let T=0,C=M.length;T<C;T++){let I=Array.isArray(M[T])?M[T]:[M[T]];for(let F=0,P=I.length;F<P;F++){let E=I[F],D=Array.isArray(E.value)?E.value:[E.value];for(let U=0,N=D.length;U<N;U++){let z=D[U],O=p(z),k=w%A,V=k%O.boundary,it=k+V;w+=V,it!==0&&A-it<O.storage&&(w+=A-it),E.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=w,w+=O.storage}}}let b=w%A;return b>0&&(w+=A-b),v.__size=w,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",v),M}function _(v){let M=v.target;M.removeEventListener("dispose",_);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function S(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:S}}var G_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vn=null;function H_(){return Vn===null&&(Vn=new Ko(G_,16,16,Ii,In),Vn.name="DFG_LUT",Vn.minFilter=Ge,Vn.magFilter=Ge,Vn.wrapS=cn,Vn.wrapT=cn,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}var Vr=class{constructor(t={}){let{canvas:e=_f(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=fn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,g=new Set([Ea,Ta,wa]),p=new Set([fn,Rn,Ur,Or,Ma,Sa]),_=new Uint32Array(4),S=new Int32Array(4),v=new G,M=null,w=null,A=[],b=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,F=null,P=null,E=null,D=null;this._outputColorSpace=Ce;let U=0,N=0,z=null,O=-1,k=null,V=new Ae,it=new Ae,et=null,lt=new st(0),j=0,ut=e.width,X=e.height,$=1,ct=null,gt=null,ft=new Ae(0,0,ut,X),Pt=new Ae(0,0,ut,X),ie=!1,kt=new fs,$t=!1,re=!1,Kt=new we,Se=new G,Be=new Ae,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ie(){return z===null?$:1}let q=n;function We(L,H){return e.getContext(L,H)}let pe,B,R,Y,Q,nt,mt,xt,rt,at,bt,Dt,Mt,_t,Nt,Ot,Xt,W,vt,ot,yt,Et,ht;try{let L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",yn,!1),q===null){let H="webgl2";if(q=We(H,L),q===null)throw We(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(L){throw e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),zt("WebGLRenderer: "+L.message),L}function Ut(){pe=new Jx(q),pe.init(),yt=new U_(q,pe),B=new kx(q,pe,t,yt),R=new D_(q,pe),B.reversedDepthBuffer&&h&&R.buffers.depth.setReversed(!0),P=q.createFramebuffer(),E=q.createFramebuffer(),D=q.createFramebuffer(),Y=new jx(q),Q=new v_,nt=new N_(q,pe,R,Q,B,yt,Y),mt=new Zx(C),xt=new em(q),Et=new Bx(q,xt),rt=new Kx(q,xt,Y,Et),at=new eb(q,rt,xt,Et,Y),W=new tb(q,B,nt),Nt=new Vx(Q),bt=new __(C,mt,pe,B,Et,Nt),Dt=new k_(C,Q),Mt=new M_,_t=new R_(pe),Xt=new Ox(C,mt,R,at,m,l),Ot=new F_(C,at,B),ht=new V_(q,Y,B,R),vt=new zx(q,pe,Y),ot=new Qx(q,pe,Y),Y.programs=bt.programs,C.capabilities=B,C.extensions=pe,C.properties=Q,C.renderLists=Mt,C.shadowMap=Ot,C.state=R,C.info=Y}x!==fn&&(T=new ib(x,e.width,e.height,a,r,s));let Lt=new uu(C,q);this.xr=Lt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let L=pe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=pe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(L){L!==void 0&&($=L,this.setSize(ut,X,!1))},this.getSize=function(L){return L.set(ut,X)},this.setSize=function(L,H,tt=!0){if(Lt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=L,X=H,e.width=Math.floor(L*$),e.height=Math.floor(H*$),tt===!0&&(e.style.width=L+"px",e.style.height=H+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,L,H)},this.getDrawingBufferSize=function(L){return L.set(ut*$,X*$).floor()},this.setDrawingBufferSize=function(L,H,tt){ut=L,X=H,$=tt,e.width=Math.floor(L*tt),e.height=Math.floor(H*tt),this.setViewport(0,0,L,H)},this.setEffects=function(L){if(x===fn){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let H=0;H<L.length;H++)if(L[H].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(V)},this.getViewport=function(L){return L.copy(ft)},this.setViewport=function(L,H,tt,Z){L.isVector4?ft.set(L.x,L.y,L.z,L.w):ft.set(L,H,tt,Z),R.viewport(V.copy(ft).multiplyScalar($).round())},this.getScissor=function(L){return L.copy(Pt)},this.setScissor=function(L,H,tt,Z){L.isVector4?Pt.set(L.x,L.y,L.z,L.w):Pt.set(L,H,tt,Z),R.scissor(it.copy(Pt).multiplyScalar($).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(L){R.setScissorTest(ie=L)},this.setOpaqueSort=function(L){ct=L},this.setTransparentSort=function(L){gt=L},this.getClearColor=function(L){return L.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(L=!0,H=!0,tt=!0){let Z=0;if(L){let J=!1;if(z!==null){let Tt=z.texture.format;J=g.has(Tt)}if(J){let Tt=z.texture.type,Rt=p.has(Tt),wt=Xt.getClearColor(),Ct=Xt.getClearAlpha(),Ft=wt.r,qt=wt.g,Qt=wt.b;Rt?(_[0]=Ft,_[1]=qt,_[2]=Qt,_[3]=Ct,q.clearBufferuiv(q.COLOR,0,_)):(S[0]=Ft,S[1]=qt,S[2]=Qt,S[3]=Ct,q.clearBufferiv(q.COLOR,0,S))}else Z|=q.COLOR_BUFFER_BIT}H&&(Z|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(Z|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&q.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),F=L},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),Xt.dispose(),Mt.dispose(),_t.dispose(),Q.dispose(),mt.dispose(),at.dispose(),Et.dispose(),ht.dispose(),bt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Qu),Lt.removeEventListener("sessionend",ju),Bi.stop()};function xe(L){L.preventDefault(),kc("WebGLRenderer: Context Lost."),I=!0}function he(){kc("WebGLRenderer: Context Restored."),I=!1;let L=Y.autoReset,H=Ot.enabled,tt=Ot.autoUpdate,Z=Ot.needsUpdate,J=Ot.type;Ut(),Y.autoReset=L,Ot.enabled=H,Ot.autoUpdate=tt,Ot.needsUpdate=Z,Ot.type=J}function yn(L){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Dn(L){let H=L.target;H.removeEventListener("dispose",Dn),Zp(H)}function Zp(L){Jp(L),Q.remove(L)}function Jp(L){let H=Q.get(L).programs;H!==void 0&&(H.forEach(function(tt){bt.releaseProgram(tt)}),L.isShaderMaterial&&bt.releaseShaderCache(L))}this.renderBufferDirect=function(L,H,tt,Z,J,Tt){H===null&&(H=nn);let Rt=J.isMesh&&J.matrixWorld.determinantAffine()<0,wt=jp(L,H,tt,Z,J);R.setMaterial(Z,Rt);let Ct=tt.index,Ft=1;if(Z.wireframe===!0){if(Ct=rt.getWireframeAttribute(tt),Ct===void 0)return;Ft=2}let qt=tt.drawRange,Qt=tt.attributes.position,It=qt.start*Ft,fe=(qt.start+qt.count)*Ft;Tt!==null&&(It=Math.max(It,Tt.start*Ft),fe=Math.min(fe,(Tt.start+Tt.count)*Ft)),Ct!==null?(It=Math.max(It,0),fe=Math.min(fe,Ct.count)):Qt!=null&&(It=Math.max(It,0),fe=Math.min(fe,Qt.count));let Pe=fe-It;if(Pe<0||Pe===1/0)return;Et.setup(J,Z,wt,tt,Ct);let ve,ge=vt;if(Ct!==null&&(ve=xt.get(Ct),ge=ot,ge.setIndex(ve)),J.isMesh)Z.wireframe===!0?(R.setLineWidth(Z.wireframeLinewidth*Ie()),ge.setMode(q.LINES)):ge.setMode(q.TRIANGLES);else if(J.isLine){let Xe=Z.linewidth;Xe===void 0&&(Xe=1),R.setLineWidth(Xe*Ie()),J.isLineSegments?ge.setMode(q.LINES):J.isLineLoop?ge.setMode(q.LINE_LOOP):ge.setMode(q.LINE_STRIP)}else J.isPoints?ge.setMode(q.POINTS):J.isSprite&&ge.setMode(q.TRIANGLES);if(J.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))ge.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Xe=J._multiDrawStarts,At=J._multiDrawCounts,tn=J._multiDrawCount,se=Ct?xt.get(Ct).bytesPerElement:1,pn=Q.get(Z).currentProgram.getUniforms();for(let Nn=0;Nn<tn;Nn++)pn.setValue(q,"_gl_DrawID",Nn),ge.render(Xe[Nn]/se,At[Nn])}else if(J.isInstancedMesh)ge.renderInstances(It,Pe,J.count);else if(tt.isInstancedBufferGeometry){let Xe=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,At=Math.min(tt.instanceCount,Xe);ge.renderInstances(It,Pe,At)}else ge.render(It,Pe)};function Ku(L,H,tt,Z){F!==null&&L.isNodeMaterial&&F.setObject(Z,L),$t===!0&&Nt.setState(L,tt,!1),L.transparent===!0&&L.side===Me&&L.forceSinglePass===!1?(L.side=en,L.needsUpdate=!0,lo(L,H,Z),L.side=Ti,L.needsUpdate=!0,lo(L,H,Z),L.side=Me):lo(L,H,Z)}this.compile=function(L,H,tt=null){tt===null&&(tt=L),F!==null&&F.renderStart(L,H,tt),w=_t.get(tt),w.init(H),b.push(w),tt.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),L!==tt&&L.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),re=this.localClippingEnabled,$t=Nt.init(this.clippingPlanes,re),$t===!0&&Nt.setGlobalState(this.clippingPlanes,H),F!==null&&Ot.render(w.state.shadowsArray,tt,H);let Z=new Set;return L.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Tt=J.material;if(Tt)if(Array.isArray(Tt))for(let Rt=0;Rt<Tt.length;Rt++){let wt=Tt[Rt];Ku(wt,tt,H,J),Z.add(wt)}else Ku(Tt,tt,H,J),Z.add(Tt)}),w=b.pop(),F!==null&&F.renderEnd(),Z},this.compileAsync=function(L,H,tt=null){let Z=this.compile(L,H,tt);return new Promise(J=>{function Tt(){if(Z.forEach(function(Rt){let Ct=Q.get(Rt).currentProgram;(Ct===void 0||Ct.isReady())&&Z.delete(Rt)}),Z.size===0){J(L);return}setTimeout(Tt,10)}pe.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Nl=null;function Kp(L){Nl&&Nl(L)}function Qu(){Bi.stop()}function ju(){Bi.start()}let Bi=new Qf;Bi.setAnimationLoop(Kp),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(L){Nl=L,Lt.setAnimationLoop(L),L===null?Bi.stop():Bi.start()},Lt.addEventListener("sessionstart",Qu),Lt.addEventListener("sessionend",ju),this.render=function(L,H){if(H!==void 0&&H.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(L,H);let tt=Lt.enabled===!0&&Lt.isPresenting===!0,Z=T!==null&&(z===null||tt)&&T.begin(C,z);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(H),H=Lt.getCamera()),L.isScene===!0&&L.onBeforeRender(C,L,H,z),w=_t.get(L,b.length),w.init(H),w.state.textureUnits=nt.getTextureUnits(),b.push(w),Kt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),kt.setFromProjectionMatrix(Kt,En,H.reversedDepth),re=this.localClippingEnabled,$t=Nt.init(this.clippingPlanes,re),M=Mt.get(L,A.length),M.init(),A.push(M),Lt.enabled===!0&&Lt.isPresenting===!0){let Rt=C.xr.getDepthSensingMesh();Rt!==null&&Ul(Rt,H,-1/0,C.sortObjects)}Ul(L,H,0,C.sortObjects),M.finish(),F!==null&&F.updateLights(w.state.lightsArray),C.sortObjects===!0&&M.sort(ct,gt),Te=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Te&&Xt.addToRenderList(M,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$t===!0&&Nt.beginShadows();let J=w.state.shadowsArray;if(Ot.render(J,L,H),$t===!0&&Nt.endShadows(),(Z&&T.hasRenderPass())===!1){let Rt=M.opaque,wt=M.transmissive;if(w.setupLights(),H.isArrayCamera){let Ct=H.cameras;if(wt.length>0)for(let Ft=0,qt=Ct.length;Ft<qt;Ft++){let Qt=Ct[Ft];eh(Rt,wt,L,Qt)}Te&&Xt.render(L);for(let Ft=0,qt=Ct.length;Ft<qt;Ft++){let Qt=Ct[Ft];th(M,L,Qt,Qt.viewport)}}else wt.length>0&&eh(Rt,wt,L,H),Te&&Xt.render(L),th(M,L,H)}z!==null&&N===0&&(nt.updateMultisampleRenderTarget(z),nt.updateRenderTargetMipmap(z)),Z&&T.end(C),L.isScene===!0&&L.onAfterRender(C,L,H),Et.resetDefaultState(),O=-1,k=null,b.pop(),b.length>0?(w=b[b.length-1],nt.setTextureUnits(w.state.textureUnits),$t===!0&&Nt.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,F!==null&&F.renderEnd()};function Ul(L,H,tt,Z){if(L.visible===!1)return;if(L.layers.test(H.layers)){if(L.isGroup)tt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(H);else if(L.isLightProbeGrid)w.pushLightProbeGrid(L);else if(L.isLight)w.pushLight(L),L.castShadow&&w.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(kt)){Z&&Be.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Kt);let Rt=at.update(L),wt=L.material;wt.visible&&M.push(L,Rt,wt,tt,Be.z,null,H)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(kt))){let Rt=at.update(L),wt=L.material;if(Z&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Be.copy(L.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Be.copy(Rt.boundingSphere.center)),Be.applyMatrix4(L.matrixWorld).applyMatrix4(Kt)),Array.isArray(wt)){let Ct=Rt.groups;for(let Ft=0,qt=Ct.length;Ft<qt;Ft++){let Qt=Ct[Ft],It=wt[Qt.materialIndex];It&&It.visible&&M.push(L,Rt,It,tt,Be.z,Qt,H)}}else wt.visible&&M.push(L,Rt,wt,tt,Be.z,null,H)}}let Tt=L.children;for(let Rt=0,wt=Tt.length;Rt<wt;Rt++)Ul(Tt[Rt],H,tt,Z)}function th(L,H,tt,Z){let{opaque:J,transmissive:Tt,transparent:Rt}=L;w.setupLightsView(tt),$t===!0&&Nt.setGlobalState(C.clippingPlanes,tt),Z&&R.viewport(V.copy(Z)),J.length>0&&ao(J,H,tt),Tt.length>0&&ao(Tt,H,tt),Rt.length>0&&ao(Rt,H,tt),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function eh(L,H,tt,Z){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Z.id]===void 0){let It=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Z.id]=new Ke(1,1,{generateMipmaps:!0,type:It?In:fn,minFilter:Ri,samples:Math.max(4,B.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let Tt=w.state.transmissionRenderTarget[Z.id],Rt=Z.viewport||V;Tt.setSize(Rt.z*C.transmissionResolutionScale,Rt.w*C.transmissionResolutionScale);let wt=C.getRenderTarget(),Ct=C.getActiveCubeFace(),Ft=C.getActiveMipmapLevel();C.setRenderTarget(Tt),C.getClearColor(lt),j=C.getClearAlpha(),j<1&&C.setClearColor(16777215,.5),C.clear(),Te&&Xt.render(tt);let qt=C.toneMapping;C.toneMapping=An;let Qt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),w.setupLightsView(Z),$t===!0&&Nt.setGlobalState(C.clippingPlanes,Z),ao(L,tt,Z),nt.updateMultisampleRenderTarget(Tt),nt.updateRenderTargetMipmap(Tt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let fe=0,Pe=H.length;fe<Pe;fe++){let ve=H[fe],{object:ge,geometry:Xe,material:At,group:tn}=ve;if(At.side===Me&&ge.layers.test(Z.layers)){let se=At.side;At.side=en,At.needsUpdate=!0,nh(ge,tt,Z,Xe,At,tn),At.side=se,At.needsUpdate=!0,It=!0}}It===!0&&(nt.updateMultisampleRenderTarget(Tt),nt.updateRenderTargetMipmap(Tt))}C.setRenderTarget(wt,Ct,Ft),C.setClearColor(lt,j),Qt!==void 0&&(Z.viewport=Qt),C.toneMapping=qt}function ao(L,H,tt){let Z=H.isScene===!0?H.overrideMaterial:null;for(let J=0,Tt=L.length;J<Tt;J++){let Rt=L[J],{object:wt,geometry:Ct,group:Ft}=Rt,qt=Rt.material;qt.allowOverride===!0&&Z!==null&&(qt=Z),wt.layers.test(tt.layers)&&nh(wt,H,tt,Ct,qt,Ft)}}function nh(L,H,tt,Z,J,Tt){F!==null&&J.isNodeMaterial&&F.setObject(L,J),L.onBeforeRender(C,H,tt,Z,J,Tt),L.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),J.onBeforeRender(C,H,tt,Z,L,Tt),J.transparent===!0&&J.side===Me&&J.forceSinglePass===!1?(J.side=en,J.needsUpdate=!0,C.renderBufferDirect(tt,H,Z,J,L,Tt),J.side=Ti,J.needsUpdate=!0,C.renderBufferDirect(tt,H,Z,J,L,Tt),J.side=Me):C.renderBufferDirect(tt,H,Z,J,L,Tt),L.onAfterRender(C,H,tt,Z,J,Tt)}function lo(L,H,tt){H.isScene!==!0&&(H=nn);let Z=Q.get(L),J=w.state.lights,Tt=w.state.shadowsArray,Rt=J.state.version,wt=bt.getParameters(L,J.state,Tt,H,tt,w.state.lightProbeGridArray),Ct=bt.getProgramCacheKey(wt),Ft=Z.programs;Z.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?H.environment:null,Z.fog=H.fog;let qt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;Z.envMap=mt.get(L.envMap||Z.environment,qt),Z.envMapRotation=Z.environment!==null&&L.envMap===null?H.environmentRotation:L.envMapRotation,Ft===void 0&&(L.addEventListener("dispose",Dn),Ft=new Map,Z.programs=Ft);let Qt=Ft.get(Ct);if(Qt!==void 0){if(Z.currentProgram===Qt&&Z.lightsStateVersion===Rt)return rh(L,wt),Qt}else wt.uniforms=bt.getUniforms(L),F!==null&&L.isNodeMaterial&&F.build(L,tt,wt),L.onBeforeCompile(wt,C),Qt=bt.acquireProgram(wt,Ct),Ft.set(Ct,Qt),Z.uniforms=wt.uniforms;let It=Z.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(It.clippingPlanes=Nt.uniform),rh(L,wt),Z.needsLights=e0(L),Z.lightsStateVersion=Rt,Z.needsLights&&(It.ambientLightColor.value=J.state.ambient,It.lightProbe.value=J.state.probe,It.sunLights.value=J.state.sun,It.sunLightShadows.value=J.state.sunShadow,It.directionalLights.value=J.state.directional,It.directionalLightShadows.value=J.state.directionalShadow,It.spotLights.value=J.state.spot,It.spotLightShadows.value=J.state.spotShadow,It.rectAreaLights.value=J.state.rectArea,It.ltc_1.value=J.state.rectAreaLTC1,It.ltc_2.value=J.state.rectAreaLTC2,It.pointLights.value=J.state.point,It.pointLightShadows.value=J.state.pointShadow,It.hemisphereLights.value=J.state.hemi,It.sunShadowMatrix.value=J.state.sunShadowMatrix,It.sunShadowCascade.value=J.state.sunShadowCascade,It.directionalShadowMatrix.value=J.state.directionalShadowMatrix,It.spotLightMatrix.value=J.state.spotLightMatrix,It.spotLightMap.value=J.state.spotLightMap,It.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.lightProbeGrid=w.state.lightProbeGridArray.length>0,Z.currentProgram=Qt,Z.uniformsList=null,Qt}function ih(L){if(L.uniformsList===null){let H=L.currentProgram.getUniforms();L.uniformsList=kr.seqWithValue(H.seq,L.uniforms)}return L.uniformsList}function rh(L,H){let tt=Q.get(L);tt.outputColorSpace=H.outputColorSpace,tt.batching=H.batching,tt.batchingColor=H.batchingColor,tt.instancing=H.instancing,tt.instancingColor=H.instancingColor,tt.instancingMorph=H.instancingMorph,tt.skinning=H.skinning,tt.morphTargets=H.morphTargets,tt.morphNormals=H.morphNormals,tt.morphColors=H.morphColors,tt.morphTargetsCount=H.morphTargetsCount,tt.numClippingPlanes=H.numClippingPlanes,tt.numIntersection=H.numClipIntersection,tt.vertexAlphas=H.vertexAlphas,tt.vertexTangents=H.vertexTangents,tt.toneMapping=H.toneMapping}function Qp(L,H){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;v.setFromMatrixPosition(H.matrixWorld);for(let tt=0,Z=L.length;tt<Z;tt++){let J=L[tt];if(J.texture!==null&&J.boundingBox.containsPoint(v))return J}return null}function jp(L,H,tt,Z,J){H.isScene!==!0&&(H=nn),nt.resetTextureUnits();let Tt=H.fog,Rt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?H.environment:null,wt=z===null?C.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:te.workingColorSpace,Ct=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ft=mt.get(Z.envMap||Rt,Ct),qt=Z.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Qt=!!tt.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),It=!!tt.morphAttributes.position,fe=!!tt.morphAttributes.normal,Pe=!!tt.morphAttributes.color,ve=An;Z.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ve=C.toneMapping);let ge=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Xe=ge!==void 0?ge.length:0,At=Q.get(Z),tn=w.state.lights;if($t===!0&&(re===!0||L!==k)){let be=L===k&&Z.id===O;Nt.setState(Z,L,be)}let se=!1;Z.version===At.__version?(At.needsLights&&At.lightsStateVersion!==tn.state.version||At.outputColorSpace!==wt||J.isBatchedMesh&&At.batching===!1||!J.isBatchedMesh&&At.batching===!0||J.isBatchedMesh&&At.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&At.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&At.instancing===!1||!J.isInstancedMesh&&At.instancing===!0||J.isSkinnedMesh&&At.skinning===!1||!J.isSkinnedMesh&&At.skinning===!0||J.isInstancedMesh&&At.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&At.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&At.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&At.instancingMorph===!1&&J.morphTexture!==null||At.envMap!==Ft||Z.fog===!0&&At.fog!==Tt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Nt.numPlanes||At.numIntersection!==Nt.numIntersection)||At.vertexAlphas!==qt||At.vertexTangents!==Qt||At.morphTargets!==It||At.morphNormals!==fe||At.morphColors!==Pe||At.toneMapping!==ve||At.morphTargetsCount!==Xe||!!At.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,At.__version=Z.version);let pn=At.currentProgram;se===!0&&(pn=lo(Z,H,J),F&&Z.isNodeMaterial&&F.onUpdateProgram(Z,pn,At));let Nn=!1,li=!1,lr=!1,me=pn.getUniforms(),Re=At.uniforms;if(R.useProgram(pn.program)&&(Nn=!0,li=!0,lr=!0),Z.id!==O&&(O=Z.id,li=!0),At.needsLights){let be=Qp(w.state.lightProbeGridArray,J);At.lightProbeGrid!==be&&(At.lightProbeGrid=be,li=!0)}if(Nn||k!==L){R.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),me.setValue(q,"projectionMatrix",L.projectionMatrix),me.setValue(q,"viewMatrix",L.matrixWorldInverse);let ui=me.map.cameraPosition;ui!==void 0&&ui.setValue(q,Se.setFromMatrixPosition(L.matrixWorld)),B.logarithmicDepthBuffer&&me.setValue(q,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&me.setValue(q,"isOrthographic",L.isOrthographicCamera===!0),k!==L&&(k=L,li=!0,lr=!0)}if(At.needsLights&&(tn.state.sunShadowMap.length>0&&me.setValue(q,"sunShadowMap",tn.state.sunShadowMap,nt),tn.state.directionalShadowMap.length>0&&me.setValue(q,"directionalShadowMap",tn.state.directionalShadowMap,nt),tn.state.spotShadowMap.length>0&&me.setValue(q,"spotShadowMap",tn.state.spotShadowMap,nt),tn.state.pointShadowMap.length>0&&me.setValue(q,"pointShadowMap",tn.state.pointShadowMap,nt)),J.isSkinnedMesh){me.setOptional(q,J,"bindMatrix"),me.setOptional(q,J,"bindMatrixInverse");let be=J.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),me.setValue(q,"boneTexture",be.boneTexture,nt))}J.isBatchedMesh&&(me.setOptional(q,J,"batchingTexture"),me.setValue(q,"batchingTexture",J._matricesTexture,nt),me.setOptional(q,J,"batchingIdTexture"),me.setValue(q,"batchingIdTexture",J._indirectTexture,nt),me.setOptional(q,J,"batchingColorTexture"),J._colorsTexture!==null&&me.setValue(q,"batchingColorTexture",J._colorsTexture,nt));let ci=tt.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&W.update(J,tt,pn),(li||At.receiveShadow!==J.receiveShadow)&&(At.receiveShadow=J.receiveShadow,me.setValue(q,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&H.environment!==null&&(Re.envMapIntensity.value=H.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=H_()),li){if(me.setValue(q,"toneMappingExposure",C.toneMappingExposure),At.needsLights&&t0(Re,lr),Tt&&Z.fog===!0&&Dt.refreshFogUniforms(Re,Tt),Dt.refreshMaterialUniforms(Re,Z,$,X,w.state.transmissionRenderTarget[L.id]),At.needsLights&&At.lightProbeGrid){let be=At.lightProbeGrid;Re.probesSH.value=be.texture,Re.probesMin.value.copy(be.boundingBox.min),Re.probesMax.value.copy(be.boundingBox.max),Re.probesResolution.value.copy(be.resolution)}kr.upload(q,ih(At),Re,nt)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(kr.upload(q,ih(At),Re,nt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&me.setValue(q,"center",J.center),me.setValue(q,"modelViewMatrix",J.modelViewMatrix),me.setValue(q,"normalMatrix",J.normalMatrix),me.setValue(q,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){let be=Z.uniformsGroups;for(let ui=0,cr=be.length;ui<cr;ui++){let oh=be[ui];ht.update(oh,pn),ht.bind(oh,pn)}}return pn}function t0(L,H){L.ambientLightColor.needsUpdate=H,L.lightProbe.needsUpdate=H,L.sunLights.needsUpdate=H,L.sunLightShadows.needsUpdate=H,L.directionalLights.needsUpdate=H,L.directionalLightShadows.needsUpdate=H,L.pointLights.needsUpdate=H,L.pointLightShadows.needsUpdate=H,L.spotLights.needsUpdate=H,L.spotLightShadows.needsUpdate=H,L.rectAreaLights.needsUpdate=H,L.hemisphereLights.needsUpdate=H}function e0(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(L,H,tt){let Z=Q.get(L);Z.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Q.get(L.texture).__webglTexture=H,Q.get(L.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:tt,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,H){let tt=Q.get(L);tt.__webglFramebuffer=H,tt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(L,H=0,tt=0){z=L,U=H,N=tt;let Z=null,J=!1,Tt=!1;if(L){let wt=Q.get(L);if(wt.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(q.FRAMEBUFFER,wt.__webglFramebuffer),V.copy(L.viewport),it.copy(L.scissor),et=L.scissorTest,R.viewport(V),R.scissor(it),R.setScissorTest(et),O=-1;return}else if(wt.__webglFramebuffer===void 0)nt.setupRenderTarget(L);else if(wt.__hasExternalTextures)nt.rebindTextures(L,Q.get(L.texture).__webglTexture,Q.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let qt=L.depthTexture;if(wt.__boundDepthTexture!==qt){if(qt!==null&&Q.has(qt)&&(L.width!==qt.image.width||L.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(L)}}let Ct=L.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(Tt=!0);let Ft=Q.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ft[H])?Z=Ft[H][tt]:Z=Ft[H],J=!0):L.samples>0&&nt.useMultisampledRTT(L)===!1?Z=Q.get(L).__webglMultisampledFramebuffer:Array.isArray(Ft)?Z=Ft[tt]:Z=Ft,V.copy(L.viewport),it.copy(L.scissor),et=L.scissorTest}else V.copy(ft).multiplyScalar($).floor(),it.copy(Pt).multiplyScalar($).floor(),et=ie;if(tt!==0&&(Z=P),R.bindFramebuffer(q.FRAMEBUFFER,Z)&&R.drawBuffers(L,Z),R.viewport(V),R.scissor(it),R.setScissorTest(et),J){let wt=Q.get(L.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+H,wt.__webglTexture,tt)}else if(Tt){let wt=H;for(let Ct=0;Ct<L.textures.length;Ct++){let Ft=Q.get(L.textures[Ct]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ct,Ft.__webglTexture,tt,wt)}}else if(L!==null&&tt!==0){let wt=Q.get(L.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,wt.__webglTexture,tt)}O=-1};function sh(L){let H=Q.get(L);return(H.__readFormat!==L.format||H.__readType!==L.type)&&(H.__readFormat=L.format,H.__readType=L.type,H.__formatReadable=B.textureFormatReadable(L.format),H.__typeReadable=B.textureTypeReadable(L.type)),H}this.readRenderTargetPixels=function(L,H,tt,Z,J,Tt,Rt,wt=0){if(!(L&&L.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Q.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct){R.bindFramebuffer(q.FRAMEBUFFER,Ct);try{let Ft=L.textures[wt],qt=Ft.format,Qt=Ft.type;L.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+wt);let It=sh(Ft);if(It.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=L.width-Z&&tt>=0&&tt<=L.height-J&&q.readPixels(H,tt,Z,J,yt.convert(qt),yt.convert(Qt),Tt)}finally{let Ft=z!==null?Q.get(z).__webglFramebuffer:null;R.bindFramebuffer(q.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(L,H,tt,Z,J,Tt,Rt,wt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Q.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct)if(H>=0&&H<=L.width-Z&&tt>=0&&tt<=L.height-J){R.bindFramebuffer(q.FRAMEBUFFER,Ct);let Ft=L.textures[wt],qt=Ft.format,Qt=Ft.type;L.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+wt);let It=sh(Ft);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,fe),q.bufferData(q.PIXEL_PACK_BUFFER,Tt.byteLength,q.STREAM_READ),q.readPixels(H,tt,Z,J,yt.convert(qt),yt.convert(Qt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Pe=z!==null?Q.get(z).__webglFramebuffer:null;R.bindFramebuffer(q.FRAMEBUFFER,Pe);let ve=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await yf(q,ve,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,fe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Tt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(fe),q.deleteSync(ve),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,H=null,tt=0){let Z=Math.pow(2,-tt),J=Math.floor(L.image.width*Z),Tt=Math.floor(L.image.height*Z),Rt=H!==null?H.x:0,wt=H!==null?H.y:0;nt.setTexture2D(L,0),q.copyTexSubImage2D(q.TEXTURE_2D,tt,0,0,Rt,wt,J,Tt),R.unbindTexture()},this.copyTextureToTexture=function(L,H,tt=null,Z=null,J=0,Tt=0){let Rt,wt,Ct,Ft,qt,Qt,It,fe,Pe,ve=L.isCompressedTexture?L.mipmaps[Tt]:L.image;if(tt!==null)Rt=tt.max.x-tt.min.x,wt=tt.max.y-tt.min.y,Ct=tt.isBox3?tt.max.z-tt.min.z:1,Ft=tt.min.x,qt=tt.min.y,Qt=tt.isBox3?tt.min.z:0;else{let Re=Math.pow(2,-J);Rt=Math.floor(ve.width*Re),wt=Math.floor(ve.height*Re),L.isDataArrayTexture?Ct=ve.depth:L.isData3DTexture?Ct=Math.floor(ve.depth*Re):Ct=1,Ft=0,qt=0,Qt=0}Z!==null?(It=Z.x,fe=Z.y,Pe=Z.z):(It=0,fe=0,Pe=0);let ge=yt.convert(H.format),Xe=yt.convert(H.type),At;H.isData3DTexture?(nt.setTexture3D(H,0),At=q.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(nt.setTexture2DArray(H,0),At=q.TEXTURE_2D_ARRAY):(nt.setTexture2D(H,0),At=q.TEXTURE_2D),R.activeTexture(q.TEXTURE0),R.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(q.UNPACK_ALIGNMENT,H.unpackAlignment);let tn=R.getParameter(q.UNPACK_ROW_LENGTH),se=R.getParameter(q.UNPACK_IMAGE_HEIGHT),pn=R.getParameter(q.UNPACK_SKIP_PIXELS),Nn=R.getParameter(q.UNPACK_SKIP_ROWS),li=R.getParameter(q.UNPACK_SKIP_IMAGES);R.pixelStorei(q.UNPACK_ROW_LENGTH,ve.width),R.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ve.height),R.pixelStorei(q.UNPACK_SKIP_PIXELS,Ft),R.pixelStorei(q.UNPACK_SKIP_ROWS,qt),R.pixelStorei(q.UNPACK_SKIP_IMAGES,Qt);let lr=L.isDataArrayTexture||L.isData3DTexture,me=H.isDataArrayTexture||H.isData3DTexture;if(L.isDepthTexture){let Re=Q.get(L),ci=Q.get(H),be=Q.get(Re.__renderTarget),ui=Q.get(ci.__renderTarget);R.bindFramebuffer(q.READ_FRAMEBUFFER,be.__webglFramebuffer),R.bindFramebuffer(q.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let cr=0;cr<Ct;cr++)lr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Q.get(L).__webglTexture,J,Qt+cr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Q.get(H).__webglTexture,Tt,Pe+cr)),q.blitFramebuffer(Ft,qt,Rt,wt,It,fe,Rt,wt,q.DEPTH_BUFFER_BIT,q.NEAREST);R.bindFramebuffer(q.READ_FRAMEBUFFER,null),R.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(J!==0||L.isRenderTargetTexture||Q.has(L)){let Re=Q.get(L),ci=Q.get(H);R.bindFramebuffer(q.READ_FRAMEBUFFER,E),R.bindFramebuffer(q.DRAW_FRAMEBUFFER,D);for(let be=0;be<Ct;be++)lr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Re.__webglTexture,J,Qt+be):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Re.__webglTexture,J),me?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ci.__webglTexture,Tt,Pe+be):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ci.__webglTexture,Tt),J!==0?q.blitFramebuffer(Ft,qt,Rt,wt,It,fe,Rt,wt,q.COLOR_BUFFER_BIT,q.NEAREST):me?q.copyTexSubImage3D(At,Tt,It,fe,Pe+be,Ft,qt,Rt,wt):q.copyTexSubImage2D(At,Tt,It,fe,Ft,qt,Rt,wt);R.bindFramebuffer(q.READ_FRAMEBUFFER,null),R.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else me?L.isDataTexture||L.isData3DTexture?q.texSubImage3D(At,Tt,It,fe,Pe,Rt,wt,Ct,ge,Xe,ve.data):H.isCompressedArrayTexture?q.compressedTexSubImage3D(At,Tt,It,fe,Pe,Rt,wt,Ct,ge,ve.data):q.texSubImage3D(At,Tt,It,fe,Pe,Rt,wt,Ct,ge,Xe,ve):L.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Tt,It,fe,Rt,wt,ge,Xe,ve.data):L.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Tt,It,fe,ve.width,ve.height,ge,ve.data):q.texSubImage2D(q.TEXTURE_2D,Tt,It,fe,Rt,wt,ge,Xe,ve);R.pixelStorei(q.UNPACK_ROW_LENGTH,tn),R.pixelStorei(q.UNPACK_IMAGE_HEIGHT,se),R.pixelStorei(q.UNPACK_SKIP_PIXELS,pn),R.pixelStorei(q.UNPACK_SKIP_ROWS,Nn),R.pixelStorei(q.UNPACK_SKIP_IMAGES,li),Tt===0&&H.generateMipmaps&&q.generateMipmap(At),R.unbindTexture()},this.initRenderTarget=function(L){Q.get(L).__webglFramebuffer===void 0&&nt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?nt.setTextureCube(L,0):L.isData3DTexture?nt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?nt.setTexture2DArray(L,0):nt.setTexture2D(L,0),R.unbindTexture()},this.resetState=function(){U=0,N=0,z=null,R.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};function sd(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function od(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}var W_=[],hu=new Map,X_=0;function hl(i){W_=i,hu=new Map(i.flatMap(t=>t.items.map(e=>[q_(t.id,e.id),e]))),X_++}function q_(i,t){return`pack:${i}:${t}`}function Y_(i){return i.startsWith("pack:")}var $_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function ad(i){return De(i)?.parts.find(t=>t.screen)}function De(i){if(!Y_(i))return;let t=hu.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=$_[e];return r?hu.get(`pack:${r}:${n.join(":")}`):void 0}function dn(i,t){let e=De(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return dl;if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));if(t.type==="fan_ceiling")return Math.max(0,i.height-Math.max(.05,t.h));if(t.type==="altar_wall")return 1.45;if(t.type==="water_heater")return 1.7;if(t.type==="range_hood")return 1.35;if(t.type==="microwave")return fu(i,t.x,t.z);if(t.type==="water_pump"&&!i.rooms.some(n=>n.points.length>=3&&ue([t.x,t.z],n.points)))return fl(i,t.x,t.z);switch(e?.mount){case"surface":return fu(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:zs(t)}}function Hn(i){return i.kind==="veranda"||i.kind==="canopy"}function du(i,t){if(i.length<2)return 0;if(t<0){let f=0,h=-1;for(let d=0;d<i.length;d++){let m=i[d],x=i[(d+1)%i.length],g=Math.hypot(x[0]-m[0],x[1]-m[1]);g>h&&([f,h]=[d,g])}return f}let e=i[t],n=i[(t+1)%i.length],r=n[0]-e[0],s=n[1]-e[1],o=Math.hypot(r,s)||1,a=(e[0]+n[0])/2,l=(e[1]+n[1])/2,c=0,u=-1;for(let f=0;f<i.length;f++){if(f===t)continue;let h=i[f],d=i[(f+1)%i.length],m=d[0]-h[0],x=d[1]-h[1],g=Math.hypot(m,x)||1,p=Math.abs((m*r+x*s)/(g*o)),S=Math.abs(r*((h[1]+d[1])/2-l)-s*((h[0]+d[0])/2-a))/o*p;S>u&&([c,u]=[f,S])}return c}var Hr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2},J_={canopy:.02,veranda:.12};function ks(i){return J_[i]}function ti(i){return i==="hedge"||i==="fence"||i==="pergola"}function Vs(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let f=s(c,u);o=Math.min(o,f),a=Math.max(a,f)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function K_(i,t,e,n){return ei(i)+(t.offset??0)+Hr[t.type]-Vs(t,e,n)}function ei(i){return i.elevation>.3?0:-.2}function fl(i,t,e){let n=(i.outdoor??[]).filter(s=>!ti(s.type)&&s.type!=="pool"&&ue([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?K_(i,r,t,e):ei(i)}var Q_={type:"none",pitch:35,overhang:.4},Dw={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Q_}};var ld=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),dl=1.75;function cd(i){return ld.has(i)||!!De(i)?.light}var j_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function zs(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"air_conditioner":return 1.9;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;case"security_camera":return 1.85;case"smart_lock":return .95;default:return 0}}function fu(i,t,e){let n=0;for(let r of i.furniture)!(j_.has(r.type)||De(r.type)?.surface)||!ue([t,e],pl(r))||(n=Math.max(n,r.h));return n}var Z_=new Set([...ld,"radiator","air_conditioner","water_pump","fan_ceiling","fan_floor","water_heater","range_hood","microwave","water_purifier","air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","kitchen_display","dishwasher","washer","dryer","kitchen","island","sink"]);var tv=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],ev=["standard","bars","glass_wall"];function tr(i,t){return i.type==="door"?i.style&&tv.includes(i.style)?i.style:t?"front":"interior":i.style&&ev.includes(i.style)?i.style:"standard"}function ud(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=s-.5;if(l+c>u){let h=Math.max(0,u)/(l+c);l*=h,c*=h}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function hd(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function er(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function Gs(i){return Math.abs(er(i))}function fd(i){let t=er(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function dd(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function pd(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function pl(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function ue(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}var He=(i,t)=>[i[0]-t[0],i[1]-t[1]],Pi=(i,t)=>[i[0]+t[0],i[1]+t[1]],ni=(i,t)=>[i[0]*t,i[1]*t],Xs=(i,t)=>i[0]*t[0]+i[1]*t[1],Hs=(i,t)=>i[0]*t[1]-i[1]*t[0],Ws=i=>Math.hypot(i[0],i[1]),ii=i=>{let t=Ws(i)||1;return[i[0]/t,i[1]/t]},md=i=>[-i[1],i[0]],gd=i=>[i[1],-i[0]];function qs(i,t,e=[]){let n=t.eps??.005,r=[],s=i.filter(b=>!Hn(b)),o=e.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),a=[],l=b=>{for(let T=0;T<a.length;T++)if(Math.abs(a[T][0]-b[0])<=n&&Math.abs(a[T][1]-b[1])<=n)return T;return a.push([b[0],b[1]]),a.length-1},c=[];for(let b of s){let T=b.points;if(T.length<3||Math.abs(er(T))<1e-6)continue;let C=er(T)>0,I=T.map(l);for(let F=0;F<T.length;F++){let P=I[F],E=I[(F+1)%T.length];P!==E&&c.push(C?{u:P,v:E,room:b.id,edge:F,forward:!0}:{u:E,v:P,room:b.id,edge:F,forward:!1})}}let u=o.map(b=>[l(b.a),l(b.b)]),f=new Set;for(let b of s){let T=b.points;T.length<3||(b.wall_splits??[]).forEach((C,I)=>{if(!C||I>=T.length)return;let F=T[I],P=He(T[(I+1)%T.length],F),E=Ws(P);for(let D of C)D>n&&D<E-n&&f.add(l(Pi(F,ni(P,D/E))))})}let h=[];for(let b of c){let T=a[b.u],C=a[b.v],I=He(C,T),F=Ws(I),P=ni(I,1/F),E=[];for(let U=0;U<a.length;U++){if(U===b.u||U===b.v)continue;let N=He(a[U],T),z=Xs(N,P);z<=n||z>=F-n||Math.abs(Hs(P,N))<=n&&E.push({t:z,id:U})}E.sort((U,N)=>U.t-N.t);let D=[{t:0,id:b.u},...E,{t:F,id:b.v}];for(let U=0;U+1<D.length;U++){let N=D[U],z=D[U+1],O=b.forward?N.t:F-z.t,k=b.forward?z.t:F-N.t;h.push({u:N.id,v:z.id,room:b.room,edge:b.edge,t0:O,t1:k})}}let d=new Map;for(let b of h){let T=b.u<b.v?`${b.u}-${b.v}`:`${b.v}-${b.u}`,C=d.get(T);C||d.set(T,C=[]),C.push(b)}let m=b=>({room_id:b.room,edge:b.edge,t0:b.t0,t1:b.t1}),x=new Map;for(let b of h){let T=`${b.room}:${b.edge}`;x.set(T,[...x.get(T)??[],b.t0].sort((C,I)=>C-I))}let g=b=>{let T=s.find(I=>I.id===b.room)?.wall_heights?.[b.edge];if(!Array.isArray(T))return T;let C=x.get(`${b.room}:${b.edge}`)??[];return T[C.indexOf(b.t0)]??null},p=b=>{let T=b.map(g).filter(C=>typeof C=="number"&&C>0);return T.length?Math.min(...T):void 0},_=b=>{let T=b.map(C=>s.find(I=>I.id===C.room)?.wall_thickness?.[C.edge]).filter(C=>typeof C=="number"&&C>0);return T.length?Math.max(...T):void 0},S=b=>b.some(T=>g(T)===0),v=[],M=[];for(let b of d.values()){let T=b[0],C=b.find(I=>I!==T&&I.u===T.v&&I.v===T.u&&I.room!==T.room);for(let I of b)I!==T&&I!==C&&I.room!==T.room&&r.push(`overlap:${T.room}:${I.room}`);if(S(C?[T,C]:[T])){C&&v.push([T.room,C.room]);continue}if(C){let I=_([T,C])??t.interior;M.push({a:T.u,b:T.v,left:I/2,right:I/2,exterior:!1,roomLeft:T.room,roomRight:C.room,sources:[m(T),m(C)],height:p([T,C])})}else M.push({a:T.u,b:T.v,left:0,right:_([T])??t.exterior,exterior:!0,roomLeft:T.room,roomRight:null,sources:[m(T)],height:p([T])})}o.forEach((b,T)=>{let[C,I]=u[T];if(C===I)return;let F=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],P=i.find(U=>U.points.length>=3&&ue(F,U.points))?.id??null,E=(b.thickness??t.interior)/2,D=typeof b.height=="number"&&b.height>0?b.height:void 0;M.push({free:b.id,a:C,b:I,left:E,right:E,exterior:!1,roomLeft:P,roomRight:P,sources:[],height:D})}),M=iv(M,a,f);let w=sv(M,a);return{walls:M.map((b,T)=>{let C=a[b.a],I=a[b.b],F=w.get(`${T}:a`),P=w.get(`${T}:b`),E=ov([F.right,P.left,I,P.right,F.left,C],1e-6);return{id:nv(C,I),a:[C[0],C[1]],b:[I[0],I[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:E,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(r)],open:v}}function nv(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function xd(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function iv(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=xd(l)),c.a!==o&&(c=xd(c)),l.a===c.b)continue;let u=ii(He(t[l.b],t[l.a])),f=ii(He(t[c.b],t[c.a]));if(Math.abs(Hs(u,f))>1e-6||Xs(u,f)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:rv(l.sources,c.sources)},d=n.filter((m,x)=>x!==a[0]&&x!==a[1]);d.push(h),n.length=0,n.push(...d),r=!0;break}}return n}function rv(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function sv(i,t){let e=new Map;i.forEach((r,s)=>{let o=ii(He(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:ni(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Pi(o,ni(md(c.d),c.left)),right:Pi(o,ni(gd(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let u=s[c],f=s[(c+1)%s.length],h=Pi(o,ni(md(u.d),u.left)),d=Pi(o,ni(gd(f.d),f.right)),m=Hs(u.d,f.d);if(Math.abs(m)<1e-4)continue;let x=Hs(He(d,h),f.d)/m,g=Pi(h,ni(u.d,x));Ws(He(g,o))>l||(n.get(u.key).left=g,n.get(f.key).right=g)}}return n}function ov(i,t){let e=i.filter((r,s)=>Ws(He(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=He(o,s),c=He(a,o);if(Math.abs(Hs(ii(l),ii(c)))<1e-7&&Xs(l,c)>0){e=e.filter((u,f)=>f!==r),n=!0;break}}}return e}function bd(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=ii(He(r,n));return Pi(n,ni(s,e))}function _d(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=ii(He(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Pi(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function vd(i,t,e){if(!t.wall)return av(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=bd(e.room,0,t.offset);return{wall:n,s:Xs(He(r,n.a),ii(He(n.b,n.a)))}}function av(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=bd(t,e,n);return{wall:r,s:Xs(He(o,r.a),ii(He(r.b,r.a)))}}return null}var $s=Math.PI/180;function Wn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function Pn(i){let t=Wn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*$s),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*$s);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=wd(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}var lv=.14;function Md(i,t,e){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let s of i.settings.roof.sections??[]){if(s.open)continue;let o=Math.min(s.x0,s.x1),a=Math.max(s.x0,s.x1),l=Math.min(s.z0,s.z1),c=Math.max(s.z0,s.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||s.points&&s.points.length>=3&&!ue([t,e],s.points))continue;let[u,f]=Li(s,t,e),h=s.shape==="flat"||s.shape==="parapet",d=Math.max(0,s.overhang??r),x=((h?null:Zs(Xr(s,{u0:d,u1:d,a:d,b:d}),u,f))??Pn(s).y(f))-lv;n=n===null?x:Math.max(n,x)}return n}function pu(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=Gs(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=yd([a[0]-o[0],a[1]-o[1]]),u=yd([l[0]-a[0],l[1]-a[1]]),f=[c[1]*n,-c[0]*n],h=[u[1]*n,-u[0]*n],d=f[0]+h[0],m=f[1]+h[1],x=Math.hypot(d,m);if(x<1e-6){r.push([a[0]+f[0]*t,a[1]+f[1]*t]);continue}let g=(d*f[0]+m*f[1])/x,p=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/x*t*p,a[1]+m/x*t*p])}return r}function yd(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Sd(i,t){if(i.points&&i.points.length>=3)return pu(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}var Ys=Math.tan(30*$s);function wd(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+Ys*(i-o+s))/(2*Ys))),u=a+(c-s)*Ys;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:h=>h<=s?t+h*n:h<=c?a+(h-s)*Ys:h<=i-o?l+(i-o-h)*Ys:e+(i-h)*r}}function Xr(i,t){let e=Wn(i),n=Pn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(_,S)=>[_,S,n.y(S)],u=c(a,-s),f=c(l,-s),h=c(l,r+o),d=c(a,r+o),m=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*$s),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*$s);if(i.shape==="pent"){let _=[u,f,h,d];return{faces:[_],rim:_,ridges:[[h,d]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let _=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,r-n.vr)||r/2),S=[e.u0+_,n.vr,n.rh],v=[e.u1-_,n.vr,n.rh],M=i.shape==="pyramid"?[[u,f,S],[f,h,S],[h,d,S],[d,u,S]]:[[u,f,v,S],[S,v,h,d],[d,u,S],[f,h,v]],w=i.shape==="pyramid"?[[u,S],[d,S],[f,S],[h,S]]:[[S,v],[u,S],[d,S],[f,v],[h,v]];return{faces:M,rim:[u,f,h,d],ridges:w,gable:null}}if(i.shape==="halfhip"){let _=Math.min(n.y(0),n.y(r)),S=_+(n.rh-_)*.55,v=m>1e-6?Math.min(n.vr,(S-i.eave_a)/m):n.vr,M=x>1e-6?Math.max(n.vr,r-(S-i.eave_b)/x):n.vr,w=Math.min((e.u1-e.u0)/2-.1,(n.rh-S)/Math.max(.2,m)),A=[e.u0+w,n.vr,n.rh],b=[e.u1-w,n.vr,n.rh],T=[a,v,S],C=[a,M,S],I=[l,v,S],F=[l,M,S];return{faces:[[u,f,I,b,A,T],[A,b,F,h,d,C],[C,T,A],[I,F,b]],rim:[u,f,I,F,h,d,C,T],ridges:[[A,b],[T,A],[C,A],[I,b],[F,b]],gable:[[0,n.y(0)],[v,S],[M,S],[r,n.y(r)]]}}if(i.shape==="mansard"){let _=wd(r,i.eave_a,i.eave_b,m,x),S=[a,_.vla,_.yla],v=[l,_.vla,_.yla],M=[a,r-_.vlb,_.ylb],w=[l,r-_.vlb,_.ylb],A=[a,_.vr,_.rh],b=[l,_.vr,_.rh];return{faces:[[u,f,v,S],[S,v,b,A],[A,b,w,M],[M,w,h,d]],rim:[u,f,v,b,w,h,d,M,A,S],ridges:[[A,b],[S,v],[M,w]],gable:[[0,n.y(0)],[_.vla,_.yla],[_.vr,_.rh],[r-_.vlb,_.ylb],[r,n.y(r)]]}}let g=[a,n.vr,n.rh],p=[l,n.vr,n.rh];return{faces:[[u,f,p,g],[g,p,h,d]],rim:[u,f,p,h,d,g],ridges:[[g,p]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function Zs(i,t,e){let n=null;for(let r of i.faces){if(!ue([t,e],r.map(_=>[_[0],_[1]])))continue;let[s,o]=r,a=r.slice(2).find(_=>Math.abs((o[0]-s[0])*(_[1]-s[1])-(o[1]-s[1])*(_[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],u=o[1]-s[1],f=a[0]-s[0],h=a[2]-s[2],d=a[1]-s[1],m=c*d-u*h,x=u*f-l*d,g=l*h-c*f;if(Math.abs(x)<1e-9)continue;let p=s[2]-(m*(t-s[0])+g*(e-s[1]))/x;n=n===null?p:Math.min(n,p)}return n}function Li(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function cv(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function mu(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=cv(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function gu(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Wn(t),n=Pn(t).rh,r=Xr(i,{u0:0,u1:0,a:0,b:0}),s=Pn(i),o=m=>{let[x,g]=e.at(m,e.w/2),[p,_]=Li(i,x,g);return Zs(r,p,_)??s.y(_)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,u=a?1:-1,f=Math.abs(c-l),h=c;for(let m=.5;m<f;m+=.05)if(o(l+u*m)>=n-.02){h=l+u*m;break}if(Math.abs(h-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=h:d.x0=h:c===e.u1?d.z1=h:d.z0=h,d}function Td(i,t){let e=gu(i,t),n=Wn(e),r=Pn(e),s=Xr(i,{u0:0,u1:0,a:0,b:0}),o=Pn(i),a=h=>{let[d,m]=n.at(h,n.w/2),[x,g]=Li(i,d,m);return Zs(s,x,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],f=Math.max(1,Math.ceil(c/.15));for(let h=0;h<f;h++){let d=c*h/f,m=c*(h+1)/f,x=l?n.u0+d:n.u1-d,g=l?n.u0+m:n.u1-m,p=a(g),_=1/0,S=-1/0;for(let b=0;b<=40;b++){let T=n.w*b/40;r.y(T)>p+.02&&(_=Math.min(_,T),S=Math.max(S,T))}if(!(S-_>.05))continue;let v=n.at(x,_),M=n.at(g,S),w=Li(i,v[0],v[1]),A=Li(i,M[0],M[1]);u.push({u0:Math.min(w[0],A[0]),u1:Math.max(w[0],A[0]),v0:Math.min(w[1],A[1]),v1:Math.max(w[1],A[1])})}return u}function Wr(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),u=r(l);if(c&&s.push(a),c!==u){let f=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*f,a[1]+(l[1]-a[1])*f,a[2]+(l[2]-a[2])*f])}}return s}function Ed(i,t){let e=Wr(i,0,t.u0,!0),n=Wr(i,0,t.u1,!1),r=Wr(Wr(i,0,t.u0,!1),0,t.u1,!0),s=Wr(r,1,t.v0,!0),o=Wr(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(Gs(a.map(l=>[l[0],l[1]])))>1e-6)}function ml(i,t,e){let n=Wn(t),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(u=>r.some(f=>ue(u,f.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function Ad(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}var Ln=1e-4;function xu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function Rd(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>Ln&&a<1-Ln&&l>-Ln&&l<1+Ln?a:null}function bu(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=Ln||o>=1-Ln?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<Ln?o:null}function uv(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(Rd(n,r,o,a)!==null||bu(o,n,r)!==null||bu(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Ln)return!0}}return ue(i[0],t)||ue(t[0],i)}function hv(i){let t=i.map(s=>xu(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],u=[0,1];t.forEach((f,h)=>{if(h!==o)for(let d=0;d<f.length;d++){let m=f[d],x=f[(d+1)%f.length],g=Rd(l,c,m,x)??bu(m,l,c);g!==null&&u.push(g)}}),u.sort((f,h)=>f-h);for(let f=1;f<u.length;f++){if(u[f]-u[f-1]<Ln)continue;let h=[l[0]+(c[0]-l[0])*u[f-1],l[1]+(c[1]-l[1])*u[f-1]],d=[l[0]+(c[0]-l[0])*u[f],l[1]+(c[1]-l[1])*u[f]],m=Math.hypot(d[0]-h[0],d[1]-h[1]),x=[(h[0]+d[0])/2+(d[1]-h[1])/m*.001,(h[1]+d[1])/2-(d[0]-h[0])/m*.001];t.some((g,p)=>p!==o&&ue(x,g))||e.some(([g,p])=>Math.hypot(g[0]-h[0],g[1]-h[1])<Ln&&Math.hypot(p[0]-d[0],p[1]-d[1])<Ln)||e.push([h,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([u],f)=>!r.has(f)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&xu(o)>1e-6&&n.push(o)}return n}function _u(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&uv(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:hv(s))}function fv(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function Cd(i,t,e=.03){return i.every(n=>ue(n,t)||t.some((r,s)=>fv(n,r,t[(s+1)%t.length])<=e))}function Id(i,t){let e=xu(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}var nr=Ht(3662079,.95),vu=Ht(3662079,1),Fi=Ht(5995775,.34),Pd=Ht(5995775,.22),gl=[-.55,.83],ee=-1,xl=16,ir=32,Ld=48,yu=64,ce=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=ee,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Jt;return t.setAttribute("position",new Vt(this.p,3)),t.setAttribute("color",new Vt(this.c,3)),t.setAttribute("fold",new Vt(this.f,1)),this.uv&&t.setAttribute("uv",new Vt(this.uv,2)),this.tile&&t.setAttribute("tile",new Vt(this.tile,2)),t.computeBoundingSphere(),t}},Ve=class{p=[];c=[];f=[];seg(t,e,n=nr,r=ee){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,ee);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,ee),this.seg(c,a,n,s)}geometry(){let t=new Jt;return t.setAttribute("position",new Vt(this.p,3)),t.setAttribute("color",new Vt(this.c,3)),t.setAttribute("fold",new Vt(this.f,1)),t}};function Fd(i,t,e,n){let s=i.uv?2:0,o=(f,h)=>{let d=f*3+h;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(f,h,d)=>({p:f.p.map((m,x)=>m+(h.p[x]-m)*d),c:f.c.map((m,x)=>m+(h.c[x]-m)*d),uv:f.uv&&h.uv?f.uv.map((m,x)=>m+(h.uv[x]-m)*d):null,tile:f.tile}),l=(f,h,d)=>{for(let m=0;m<3;m++){let x=f*3+m;for(let g=0;g<3;g++)i.p[x*3+g]=h[m].p[g],i.c[x*3+g]=h[m].c[g];if(i.uv&&h[m].uv)for(let g=0;g<s;g++)i.uv[x*2+g]=h[m].uv[g];if(i.tile&&h[m].tile)for(let g=0;g<2;g++)i.tile[x*2+g]=h[m].tile[g];i.f[x]=d}},c=(f,h)=>{let d=i.p.length/9;for(let m of f)i.p.push(...m.p),i.c.push(...m.c),i.f.push(h),i.uv?.push(...m.uv??[.5,.5]),i.tile?.push(...m.tile??[0,1]);return d},u=i.p.length/9;for(let f=t;f<u;f++){let h=[o(f,0),o(f,1),o(f,2)],d=h.map(b=>b.p[1]>e+1e-6),m=h.map(b=>b.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!m.some(Boolean)){for(let b=0;b<3;b++)i.f[f*3+b]=n;continue}let x=i.f[f*3],g=(b,T)=>a(b,T,(e-b.p[1])/(T.p[1]-b.p[1])),p=d.filter(Boolean).length,_=p===1?d.indexOf(!0):d.indexOf(!1),S=h[_],v=h[(_+1)%3],M=h[(_+2)%3],w=g(S,v),A=g(M,S);p===1?(l(f,[S,w,A],n),c([w,v,M],x),c([w,M,A],x)):(l(f,[S,w,A],x),c([w,v,M],n),c([w,M,A],n))}}function Dd(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let u=(e-l[1])/(c[1]-l[1]),f=[l[0]+(c[0]-l[0])*u,e,l[2]+(c[2]-l[2])*u];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=f[d];let h=i.c.slice(s*6,s*6+3);i.p.push(...f,...c),i.c.push(...h,...h),i.f.push(n,n)}}var oe=Math.PI/180;function Ht(i,t){let e=new st(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function dv(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function qr(i,t=[]){let e=i.map(([n,r])=>new Zt(n,r));return _s.triangulateShape(e,t.map(n=>n.map(([r,s])=>new Zt(r,s))))}function Nd(i,t,e,n,r,s,o){let a=new st(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let m=t[d],x=t[(d+1)%4],g=e[d],p=e[(d+1)%4],_=x[0]-m[0],S=x[1]-m[1],v=Math.hypot(_,S);if(v<1e-6)continue;let w=.8+.28*((S/v*gl[0]-_/v*gl[1]+1)/2),A=(g[0]+p[0]-m[0]-x[0])/2*(-S/v)+(g[1]+p[1]-m[1]-x[1])/2*(_/v),b=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),T=Ht(s,l(n)*w).lerp(a,b),C=Ht(s,l(r)*w).lerp(a,b);i.tri([m[0],n,m[1]],[g[0],r,g[1]],[p[0],r,p[1]],T,C,C),i.tri([m[0],n,m[1]],[p[0],r,p[1]],[x[0],n,x[1]],T,C,T)}let[c,u,f,h]=e;Math.hypot(f[0]-c[0],f[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[h[0],r,h[1]],[f[0],r,f[1]],a))}function Ud(i,t,e,n,r,s,o,a,l,c){let u=new st(l),f=[];for(let d=0;d<c;d++){let m=d/c*Math.PI*2;f.push({y:s+Math.cos(m)*o,s:r+Math.sin(m)*o})}let h=(d,m)=>{let x=t(d,f[m%c].s);return[x[0],f[m%c].y,x[1]]};for(let d=0;d<c;d++){let m=(d+.5)/c*Math.PI*2,x=Ht(a,.62+.4*Math.max(0,Math.cos(m)));i.tri(h(e,d),h(n,d+1),h(n,d),x),i.tri(h(e,d),h(e,d+1),h(n,d+1),x)}for(let d of[e,n]){let m=t(d,r),x=[m[0],s,m[1]];for(let g=0;g<c;g++)i.tri(x,h(d,g),h(d,g+1),u)}}function _e(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:m=>Math.max(e+.002,n(m[0],m[1])),l=o.aoFrom??e,c=o.fold??ee,u=m=>.5+.5*Math.min(1,Math.max(0,(m-l)/1.6)),f=(o.holes??[]).map(m=>dv(m)>0?[...m].reverse():m),h=f.length?[...t,...f.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:qr(t,f);if(o.topFace!==!1){let m=new st(s);for(let[x,g,p]of d){let _=h[x],S=h[g],v=h[p];i.tri([_[0],a(_),_[1]],[v[0],a(v),v[1]],[S[0],a(S),S[1]],m,m,m,void 0,o.topFold??c)}}if(o.bottom){let m=Ht(r,.55);for(let[x,g,p]of d){let _=h[x],S=h[g],v=h[p];i.tri([_[0],e,_[1]],[S[0],e,S[1]],[v[0],e,v[1]],m,m,m,void 0,c)}}for(let m of[t,...f])for(let x=0;x<m.length;x++){let g=m[x],p=m[(x+1)%m.length],_=p[0]-g[0],S=p[1]-g[1],v=Math.hypot(_,S);if(v<1e-6)continue;let w=.8+.28*((S/v*gl[0]-_/v*gl[1]+1)/2),A=a(g),b=a(p),T=Ht(r,u(e)*w),C=Ht(r,u(A)*w),I=Ht(r,u(b)*w);i.tri([g[0],e,g[1]],[g[0],A,g[1]],[p[0],b,p[1]],T,C,I,void 0,c),i.tri([g[0],e,g[1]],[p[0],b,p[1]],[p[0],e,p[1]],T,I,T,void 0,c)}}var y={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},K=Ht(5995775,.3),dt=Ht(5995775,.17),pt=Ht(3662079,.45),Di=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Wd(n)}rotated(t,e,n){let r=n*oe,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let u=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];_e(this.buf,Mu(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Mu(l)&&(l.reverse(),c.reverse()),Nd(this.buf,l,c,n,r,s,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,u);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,u),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,u=12,f=null){let h=Math.min(a,s-r)/2;if(h<1e-4||o<1e-4)return;let d=(r+s)/2,m=t==="x"?e:n,x=t==="x"?n:e,g=(_,S)=>t==="x"?this.tf(_,S):this.tf(S,_),p=this.buf.p.length;if(Ud(this.buf,g,m-o/2,m+o/2,x,d,h,l,c,u),this.mirrored&&bl(this.buf,p),f)for(let _ of[m-o/2,m+o/2])for(let S=0;S<u;S++){let v=S/u*Math.PI*2,M=(S+1)/u*Math.PI*2;this.line(g(_,x+Math.sin(v)*h),g(_,x+Math.sin(M)*h),d+Math.cos(v)*h,d+Math.cos(M)*h,f)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let u=[];for(let f=0;f<l;f++){let h=f/l*Math.PI*2;u.push(this.tf(t+Math.cos(h)*n,e+Math.sin(h)*n))}if(_e(this.buf,Mu(u),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let f=0;f<l;f++)this.line(u[f],u[(f+1)%l],s,s,c)}tubeYZ(t,e,n,r,s=8,o=null){if(e.length<2||n<1e-4)return;let a=e.map(([f,h],d)=>{let m=e[Math.max(0,d-1)],x=e[Math.min(e.length-1,d+1)],g=x[0]-m[0],p=x[1]-m[1],_=Math.hypot(g,p)||1;return Array.from({length:s},(S,v)=>{let M=v/s*Math.PI*2,w=t+Math.cos(M)*n,A=f-p/_*Math.sin(M)*n,b=h+g/_*Math.sin(M)*n,T=this.tf(w,b);return[T[0],A,T[1]]})}),l=this.buf.p.length,c=new st(r);for(let f=0;f<a.length-1;f++)for(let h=0;h<s;h++){let d=(h+1)%s;this.buf.tri(a[f][h],a[f+1][h],a[f+1][d],c),this.buf.tri(a[f][h],a[f+1][d],a[f][d],c)}let u=(f,h)=>{let d=this.tf(t,e[f][1]),m=[d[0],e[f][0],d[1]];for(let x=0;x<s;x++){let g=(x+1)%s;this.buf.tri(m,a[f][h?g:x],a[f][h?x:g],c)}};if(u(0,!0),u(e.length-1,!1),this.mirrored&&bl(this.buf,l),o)for(let f=0;f<e.length-1;f++)this.seg(t,e[f][0],e[f][1],t,e[f+1][0],e[f+1][1],o)}seg(t,e,n,r,s,o,a=K){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,ee)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function Wd(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Mu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function rr(i,t,e,n,r,s,o=y.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let u of[-1,1])for(let f of[-1,1]){let h=u*l,d=f*c;a?i.loft([h-r*.3,h+r*.3,d-r*.3,d+r*.3],[h-r/2,h+r/2,d-r/2,d+r/2],0,n,o):i.box(h-r/2,h+r/2,0,n,d-r/2,d+r/2,o)}}function Ks(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let u=1;u<o;u++){let f=t+c*u;i.seg(f,n,s,f,r,s,dt)}for(let u=0;u<o;u++){let f=t+c*(u+.5),h=a??r-.08;if(l)i.seg(f-Math.min(.1,c/4),h,s+.012,f+Math.min(.1,c/4),h,s+.012,pt);else{let d=o>1?f+(u%2?-c/2+.06:c/2-.06):f+c/2-.06;i.seg(d,h-.08,s+.012,d,h+.08,s+.012,pt)}}}function Od(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),u=n*.5,f=Math.min(.24,e*.28);rr(i,t,e,.07,.05,.05,y.wood,!0),i.pad(s,o,.07,u-.08,a+.02,l,y.fabric,y.fabricTop,.04,K),i.loft([s,o,a,a+f],[s+.01,o-.01,a,a+f*.5],u-.08,n,y.fabric,y.fabricTop,K),i.pad(s,s+c,u-.08,n*.72,a+.02,l-.02,y.fabric,y.fabricTop,.04,K),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,y.fabric,y.fabricTop,.04,K);let d=(o-c-(s+c))/r;for(let m=0;m<r;m++){let x=s+c+d*m+.02,g=x+d-.04;i.pad(x,g,u-.08,u+.05,a+f+.02,l-.06,y.cushion,y.cushion,.04),i.loft([x+.01,g-.01,a+f*.55,a+f+.14],[x+.03,g-.03,a+f*.4,a+f*.4+.06],u+.03,n*.93,y.cushion)}}function Bd(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);rr(i,t,e,.08,.06,.03,y.wood,!0),i.box(o,a,.08,l,r+.06,s,y.wood,y.woodTop,K),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,y.white,y.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,y.wood,y.woodTop,K),i.box(o,a,n-.05,n,r,r+.09,y.wood,y.woodTop,dt);let c=l+.2,u=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,s-.01,y.cushion,y.fabricTop,.025,dt),i.lyingCyl("x",0,u+.05,c-.02,c+.09,t-.02,.1,y.cushion,y.fabricTop,8);let f=t>1.2?2:1,h=(t-.2)/f;for(let d=0;d<f;d++){let m=o+.1+h*d,x=r+.12,g=Math.min(.42,e*.2),p=.1;i.loft([m+.03+p,m+h-.03-p,x+p*.5,x+g-p*.5],[m+.03,m+h-.03,x,x+g],c,c+.06,y.whiteTop),i.loft([m+.03,m+h-.03,x,x+g],[m+.03+p,m+h-.03-p,x+p*.5,x+g-p*.5],c+.06,c+.12,y.whiteTop,y.whiteTop,dt)}}function pv(i,t,e,n){let r=Math.min(.46,n*.52);rr(i,t,e,r-.04,.035,.02,y.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,y.wood,y.woodTop,K),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,y.cushion,y.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,y.wood,y.woodTop,K)}function mv(i,t,e,n){rr(i,t,e,n-.04,.06,.05,y.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,y.wood,y.woodTop,pt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,y.body)}function gv(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,y.wood,y.woodTop,K),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,y.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,y.body,y.bodyTop,K);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,dt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,pt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,y.dark,y.dark,pt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,y.metal)}function ri(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,y.body,y.bodyTop,K),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,y.dark),Ks(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function xv(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,y.wood,y.woodTop,K),i.box(t/2-.025,t/2,0,n,-e/2,e/2,y.wood,y.woodTop,K),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,y.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,y.wood,y.woodTop,dt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let u=.03+c*7%5*.008,f=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+f,-e/2+.04,e/2-.05,c%3?y.fabric:y.cushion,y.fabricTop),l+=u+.006,c++}}}}function bv(i,t,e,n){let r=Math.max(1,Math.round(t/.6));ri(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,y.whiteTop,y.whiteTop,K)}function _v(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,y.white,y.whiteTop,K);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,dt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,pt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,pt)}function vv(i,t,e,n){let r=e/2-Xd;i.box(-t/2,t/2,.02,n,-e/2,r,y.body,y.bodyTop,K),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,y.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,dt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,dt))}var Xd=.06;function qd(i,t,e,n,r){let s=i.p.length;yv(i,t,e,n,r),t.mirror&&bl(i,s)}function yv(i,t,e,n,r){let s=t.rotation*oe,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*o-M*a,t.z+l*v*a+M*o],u=e+.05,f=e+t.h-.02,h=new st(.75,.1,.14),d=new st(y.dark),m=new st(y.accent),x=t.w/2-.006,g=(v,M,w)=>{let A=w/p,b=new st(2043212).lerp(h,A),T=new st(y.body).lerp(h,A*.8),C=Math.cos(w),I=Math.sin(w),F=(D,U)=>c(v+M*(D*C-U*I),t.d/2+D*I+U*C),P=(D,U,N,z)=>{let[O,k,V,it]=D;i.tri([O[0],U,O[1]],[k[0],U,k[1]],[V[0],N,V[1]],z),i.tri([O[0],U,O[1]],[V[0],N,V[1]],[it[0],N,it[1]],z)},E=(D,U,N,z,O,k,V,it=V)=>{let et=[F(D,k),F(U,k),F(U,O),F(D,O)];P([et[0],et[1],et[1],et[0]],N,z,it),P([et[3],et[2],et[2],et[3]],N,z,V),P([et[0],et[3],et[3],et[0]],N,z,V),P([et[1],et[2],et[2],et[1]],N,z,V),P([et[0],et[1],et[2],et[3]],z,z,V),P([et[3],et[2],et[1],et[0]],N,N,V)};return E(0,x,u,f,-Xd,0,T,b),E(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,m),E},p=1.83;g(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*p)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function Mv(i,t,e,n){ri(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,y.dark,y.dark,K);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,y.dark,1451583,12,pt)}}function Sv(i,t,e,n){ri(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,y.whiteTop,y.whiteTop,K),i.box(r/2,t/2,n-.04,n,-e/2,e/2,y.whiteTop,y.whiteTop,K),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,y.whiteTop,y.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,y.whiteTop,y.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,y.metal,y.metal,pt),i.cyl(0,-e/2+.05,.02,n,n+.28,y.metal,y.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,y.metal)}function wv(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,y.white,y.whiteTop,K),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,y.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,y.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,y.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,y.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,y.glass,y.glass,pt),i.cyl(-t/2+.04,0,.02,n,n+.12,y.metal,y.metal,8)}function Tv(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,y.whiteTop,y.whiteTop,K),i.cyl(0,0,.04,.05,.052,y.metal,y.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,pt),i.seg(r,n,s,o,n,a,pt),i.seg(o,.05,a,o,n,a,pt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,y.metal,y.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,y.metal,y.metal,12,pt)}function Ev(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,y.white,y.whiteTop,K),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,y.white,y.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,y.white,y.whiteTop,12,K),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,y.whiteTop)}function Av(i,t,e,n){ri(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,y.white,y.whiteTop,K),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,y.glass,y.glass,pt),i.cyl(0,-e/2+.06,.018,n,n+.2,y.metal,y.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,y.glass,y.glass,pt)}function Rv(i,t,e,n){ri(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,y.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,y.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,y.dark,y.dark,pt)}function zd(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,y.pot,y.pot,10,K),i.cyl(0,0,r*.08,s,n*.55,y.wood,y.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),u=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-s)*.16,y.plant,y.plantTop,8,a===o-1?dt:null)}}function Cv(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,y.fabric,y.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,K)}function Iv(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let u=0;u<r;u++){let f=e/2-o*u,h=f-o,d=s*(u+1);i.box(-t/2,t/2,0,d,h,f,y.wood,y.woodTop),i.seg(-t/2,d,f,t/2,d,f,K)}i.seg(-t/2,0,e/2,-t/2,s,e/2,K);for(let u of[-t/2,t/2])i.seg(u,s,e/2,u,n,-e/2+o,dt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),pt);for(let u=0;u<c;u+=3){let f=e/2-o*(u+.5),h=s*(u+1);i.seg(l,h,f,l,h+a,f,dt)}}function Pv(i,t,e,n){let r=Math.max(6,Math.round(n/.18)),s=Math.floor(r/2),o=r-s,a=n/r,l=a*s,c=Math.min(.16,t*.12),u=(t-c)/2,f=Math.min(e*.34,Math.max(e*.22,u)),h=-e/2+f,d=e-f,m=d/s,x=d/o,g=-t/2,p=-c/2,_=c/2,S=t/2;for(let P=0;P<s;P++){let E=e/2-m*P,D=E-m,U=a*(P+1);i.box(g,p,0,U,D,E,y.white,y.whiteTop),i.seg(g,U,E,p,U,E,K)}i.box(-t/2,t/2,0,l,-e/2,h,y.white,y.whiteTop,K);for(let P=0;P<o;P++){let E=h+x*P,D=E+x,U=l+a*(P+1);i.box(_,S,0,U,E,D,y.white,y.whiteTop),i.seg(_,U,E,S,U,E,K)}let v=Math.min(.9,Math.max(.55,n*.32)),M=[g+.03,p-.03],w=[_+.03,S-.03];for(let P of M){i.seg(P,a+v,e/2-m/2,P,l+v,h,pt);for(let E=0;E<s;E+=3){let D=e/2-m*(E+.5),U=a*(E+1);i.seg(P,U,D,P,U+v,D,dt)}}let A=Math.max(1,o-3);for(let P of w){i.seg(P,l+v,h,P,l+a*A+v,h+x*(A-.5),pt);for(let E=0;E<A;E+=3){let D=h+x*(E+.5),U=l+a*(E+1);i.seg(P,U,D,P,U+v,D,dt)}}let b=M[0],T=M[1],C=w[0],I=w[1],F=-e/2+.03;i.seg(T,l+v,h,C,l+v,h,pt),i.seg(b,l+v,h,b,l+v,F,pt),i.seg(b,l+v,F,I,l+v,F,pt),i.seg(I,l+v,F,I,l+v,h,pt);for(let[P,E]of[[T,h],[C,h],[b,h],[b,F],[I,F],[I,h]])i.seg(P,l,E,P,l+v,E,dt)}function Lv(i,t,e,n){rr(i,t,e,.12,.03,.04,y.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,y.wood,y.woodTop,K),Ks(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function Fv(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,y.wood,y.woodTop,K),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,y.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,dt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,pt)}}function Dv(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,y.wood,y.woodTop,K),Ks(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,y.body,y.bodyTop,K),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,y.wood,y.woodTop,K);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,y.metal,y.metal)}}function kd(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,y.wood,y.woodTop,K),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,y.wood,y.woodTop,K),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,y.cushion,y.cushion,dt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,y.wood,y.woodTop,K),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,y.wood,y.woodTop,K),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,y.cushion,y.cushion,dt))}function Nv(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,y.metal,y.metal,12),i.cyl(0,0,.025,.02,n-.05,y.metal,y.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,y.metal,y.metal,12,dt),i.cyl(0,0,r,n-.05,n,y.cushion,y.fabricTop,14,K)}function Uv(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,y.metal),i.box(-.03,.03,.04,.08,-r,r,y.metal),i.cyl(0,0,.06,.02,.1,y.dark,y.dark,8),i.cyl(0,0,.025,.1,.44,y.metal,y.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,y.fabric,y.cushion,K),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,y.fabric,y.fabricTop,K),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,y.metal)}function Ov(i,t,e,n){rr(i,t,e,.08,.04,.05,y.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,y.fabric,y.cushion,K)}function Bv(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,y.body,y.bodyTop,K),Ks(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function zv(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,y.body,y.bodyTop,K),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,y.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,y.dark,y.dark,pt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,pt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,dt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,pt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,pt)}function kv(i,t,e,n){let r=Math.min(.055,t*.075),s=e/2,o=-e/2,a=Math.min(.62,n*.3);i.box(-t/2,t/2,.02,n,o,o+.035,y.body,y.bodyTop,K),i.box(-t/2,-t/2+r,.02,n,o,s,y.body,y.bodyTop,K),i.box(t/2-r,t/2,.02,n,o,s,y.body,y.bodyTop,K),i.box(-t/2,t/2,n-r,n,o,s,y.body,y.bodyTop,K),i.box(-t/2,t/2,.02,a,o,s-.015,y.body,y.bodyTop,K),i.box(-t/2+.02,t/2-.02,0,.08,o+.02,s-.04,y.dark),i.box(-t/2+r,t/2-r,a,n-r,o+.036,o+.05,y.dark,y.dark);for(let l of[a+(n-a)*.25,a+(n-a)*.5,a+(n-a)*.75])i.box(-t/2+r,t/2-r,l-.012,l+.012,o+.05,s-.025,y.glass,y.glass,pt);i.box(-t/2+r,-r*.35,a+r,n-r*1.5,s-.012,s,y.glass,y.glass,dt),i.box(r*.35,t/2-r,a+r,n-r*1.5,s-.012,s,y.glass,y.glass,dt),i.box(-r*.35,r*.35,a,n-r,s-.02,s+.005,y.metal,y.metal,K),i.box(-t/2,t/2,a-r*.5,a+r*.5,s-.02,s+.005,y.body,y.bodyTop,K),i.seg(-r*1.4,a+(n-a)*.46,s+.012,-r*1.4,a+(n-a)*.62,s+.012,pt),i.seg(r*1.4,a+(n-a)*.46,s+.012,r*1.4,a+(n-a)*.62,s+.012,pt),i.seg(0,.12,s+.012,0,a-.12,s+.012,dt)}function Vv(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,y.body,y.bodyTop,K),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,y.dark),Ks(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,y.whiteTop,y.whiteTop,K)}function Gv(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,y.body,y.bodyTop,K),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,y.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,pt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,y.whiteTop,y.whiteTop,K)}function Vd(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,y.white,y.whiteTop,K);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,dt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,pt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,f=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,o+Math.sin(u)*a,s,Math.cos(f)*a,o+Math.sin(f)*a,s,pt),r||i.seg(Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Math.cos(f)*a*.72,o+Math.sin(f)*a*.72,s,dt)}}function Hv(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),y.wood,y.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,y.wood,y.woodTop,K),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,y.white,y.whiteTop,dt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,y.whiteTop,y.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,y.wood,y.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,K);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,dt)}function Wv(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,y.metal,y.metal,12),i.cyl(0,0,.05,.03,n-.04,y.wood,y.wood,8),i.cyl(0,0,r,n-.04,n,y.wood,y.woodTop,20,K)}function Xv(i,t,e,n){rr(i,t,e,n-.03,.04,.03,y.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,y.wood,y.woodTop,K),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,y.body,y.bodyTop,dt)}function qv(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,y.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,y.dark,y.dark,pt)}function Yv(i,t,e,n){let r=wu;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,y.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,y.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,y.white,y.whiteTop,K);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,dt)}}function $v(i,t,e,n){let r=Tu,s=e/2;i.box(-t*.34,-t*.27,r+n*.2,r+n*.75,-e/2-.015,-e/2+.025,y.metal),i.box(t*.27,t*.34,r+n*.2,r+n*.75,-e/2-.015,-e/2+.025,y.metal),i.box(-t/2,t/2,r,r+n,-e/2,s,y.white,y.whiteTop,K),i.seg(-t*.42,r+n*.82,s+.003,t*.42,r+n*.82,s+.003,dt);let o=r+n*.08,a=r+n*.27;i.box(-t*.43,t*.43,o,a,s-.018,s+.006,y.dark,y.dark,dt),i.seg(-t*.42,o+n*.04,s+.009,t*.42,a-n*.025,s+.009,pt);for(let l=1;l<8;l++){let c=-t*.4+t*.8*(l/8);i.seg(c,o+n*.025,s+.011,c+t*.018,a-n*.025,s+.011,dt)}i.seg(t*.37,r+n*.67,s+.006,t*.4,r+n*.67,s+.006,pt)}function Zv(i,t,e,n){let r=Math.min(.045,n*.12),s=Math.min(t*.42,n*.48),o=r+n*.13,a=o+s;for(let d of[-t*.32,t*.32])i.box(d-t*.055,d+t*.055,0,r,-e*.34,e*.3,y.dark);i.box(-t*.43,t*.43,r,r+n*.06,-e*.4,e*.36,y.metal,y.metal,K),i.lyingCyl("z",0,-e*.13,o,a,e*.46,s,y.body,y.bodyTop,14,K),i.lyingCyl("z",0,-e*.39,o+s*.08,a-s*.08,e*.1,s*.84,y.dark,y.metal,12,dt);for(let d=-2;d<=2;d++){let m=-e*.23+d*e*.055;i.box(-s*.54,s*.54,o+s*.43,o+s*.57,m-e*.012,m+e*.012,y.metal,y.metal)}let l=Math.min(t*.55,n*.65),c=r+n*.08;i.lyingCyl("z",0,e*.17,c,c+l,e*.22,l,y.accent,y.bodyTop,16,K),i.lyingCyl("z",0,e*.39,c+l*.34,c+l*.66,e*.22,l*.32,y.metal,y.dark,12,pt);let u=t*.16,f=e*.13,h=Math.min(t,e)*.075;i.cyl(u,f,h*1.35,c+l*.72,c+l*.82,y.accent,y.accent,12,K),i.cyl(u,f,h,c+l*.82,n,y.metal,y.metal,12,pt),i.box(-t*.11,t*.11,c+l*.58,c+l*.72,e*.285,e*.3,y.dark,y.dark,pt)}function Jv(i,t,e,n){let r=n*.68,s=Math.min(.09,t*.08);for(let o of[-t/2+s,t/2-s])for(let a of[-e/2+s,e/2-s])i.loft([o-s*.36,o+s*.36,a-s*.36,a+s*.36],[o-s/2,o+s/2,a-s/2,a+s/2],0,r-.03,y.wood,y.woodTop);i.box(-t/2,t/2,r-.08,r,-e/2,e/2,y.wood,y.woodTop,K),i.box(-t*.43,t*.43,n*.18,r-.1,e/2-.065,e/2,y.wood,y.woodTop,K);for(let o of[-t*.28,0,t*.28])i.seg(o,n*.23,e/2+.004,o,r-.16,e/2+.004,dt);i.seg(-t*.12,n*.4,e/2+.006,0,n*.52,e/2+.006,pt),i.seg(0,n*.52,e/2+.006,t*.12,n*.4,e/2+.006,pt),i.seg(t*.12,n*.4,e/2+.006,0,n*.28,e/2+.006,pt),i.seg(0,n*.28,e/2+.006,-t*.12,n*.4,e/2+.006,pt),i.cyl(0,e*.06,Math.min(t,e)*.09,r,r+n*.075,y.accent,y.woodTop,14,pt);for(let o of[-t*.035,0,t*.035])i.box(o-.006,o+.006,r+n*.06,r+n*.2,e*.05,e*.065,y.accent);for(let o of[-t*.28,t*.28])i.cyl(o,e*.02,Math.min(t,e)*.035,r,r+n*.035,y.metal,y.metal,10),i.cyl(o,e*.02,Math.min(t,e)*.017,r+n*.035,r+n*.15,y.metal,y.metal,8);i.box(-t*.18,t*.18,r+n*.04,n*.85,-e*.33,-e*.27,y.wood,y.woodTop,pt),i.box(-t*.46,t*.46,n*.875,n*.92,-e*.42,e*.36,y.wood,y.woodTop,K);for(let o of[-t*.4,t*.4])i.box(o-s/2,o+s/2,r,n*.92,-e*.36,-e*.26,y.wood,y.woodTop,K);i.loft([-t/2,t/2,-e/2,e*.42],[-t*.42,t*.42,-e*.42,e*.31],n*.92,n,y.wood,y.woodTop,K)}function Kv(i,t,e,n){let r=n*.18;i.box(-t/2,t/2,r,r+n*.14,-e/2,e/2,y.wood,y.woodTop,K),i.box(-t*.43,t*.43,r+n*.14,n*.86,-e/2,-e/2+Math.min(.05,e*.18),y.wood,y.woodTop,K);for(let s of[-t*.36,t*.36])i.box(s-.025,s+.025,0,r,-e/2,-e*.18,y.wood,y.woodTop,K),i.seg(s,n*.02,-e*.18,s,r,e*.34,K);i.loft([-t/2,t/2,-e/2,e/2],[-t*.42,t*.42,-e*.42,e*.36],n*.86,n,y.wood,y.woodTop,K),i.cyl(0,e*.08,Math.min(t,e)*.09,r+n*.14,r+n*.28,y.accent,y.woodTop,12,pt);for(let s of[-t*.03,0,t*.03])i.box(s-.005,s+.005,r+n*.25,r+n*.5,e*.075,e*.09,y.accent)}function Qv(i,t,e,n){i.box(-t*.43,t*.43,0,n*.06,-e*.34,e*.34,y.dark),ri(i,t,e,n-.025,Math.max(2,Math.round(t/.45)),n*.55,!0);for(let r of[n*.32,n*.63])i.seg(-t/2+.03,r,e/2+.003,t/2-.03,r,e/2+.003,dt);for(let r of[-t*.25,t*.25])for(let s=-1;s<=1;s++)i.seg(r-t*.07,n*(.32+s*.018),e/2+.006,r+t*.07,n*(.32+s*.018),e/2+.006,dt);i.box(-t/2,t/2,n-.025,n,-e/2,e/2,y.woodTop,y.woodTop,pt)}function jv(i,t,e,n){let r=Math.min(t*.58,e*.22,n*.42),s=t*.66,o=e*.34,a=-e*.34;for(let l of[a,o])i.lyingCyl("x",0,l,0,r,s,r,y.dark,y.metal,14,K),i.lyingCyl("x",0,l,r*.16,r*.84,s+.012,r*.46,y.metal,y.metal,12,dt);i.loft([-t*.3,t*.3,a,e*.12],[-t*.2,t*.2,-e*.18,e*.06],r*.45,n*.58,y.body,y.bodyTop,K),i.box(-t*.3,t*.3,r*.37,r*.44,-e*.08,e*.22,y.dark,y.metal,dt),i.lyingCyl("z",t*.24,a-e*.04,r*.2,r*.47,e*.4,r*.25,y.metal,y.dark,10,dt),i.pad(-t*.3,t*.3,n*.52,n*.62,-e*.25,e*.05,y.dark,y.fabricTop,.025,K),i.seg(-t*.18,n*.48,e*.02,-t*.08,n*.86,o,K),i.seg(t*.18,n*.48,e*.02,t*.08,n*.86,o,K),i.seg(-t*.19,r*.63,a,-t*.21,n*.54,-e*.12,dt),i.seg(t*.19,r*.63,a,t*.21,n*.54,-e*.12,dt),i.seg(-t*.36,n*.9,o,t*.36,n*.9,o,pt),i.box(-t*.23,t*.23,n*.72,n*.98,o-e*.07,o+e*.07,y.body,y.bodyTop,K),i.cyl(0,o+e*.075,Math.min(t,e)*.07,n*.82,n*.94,y.white,y.accent,12,pt);for(let l of[-1,1])i.seg(l*t*.22,n*.9,o,l*t*.39,n,o-e*.04,K),i.cyl(l*t*.39,o-e*.04,t*.045,n*.97,n,y.glass,y.metal,10,pt);i.seg(-t*.31,n*.66,-e*.31,t*.31,n*.66,-e*.31,K)}function ty(i,t,e,n){let r=n*.18;i.cyl(0,0,Math.min(t,e)*.115,r,n*.62,y.body,y.bodyTop,16,K),i.cyl(0,0,Math.min(t,e)*.025,n*.7,n,y.metal,y.metal,8)}function ey(i,t,e,n){i.loft([-t*.4,t*.4,-e*.33,e*.33],[-t*.34,t*.34,-e*.28,e*.28],0,n*.045,y.body,y.metal,K),i.cyl(0,0,Math.min(t,e)*.055,n*.04,n*.62,y.metal,y.metal,10),i.box(-t*.13,t*.13,n*.06,n*.14,-e*.2,e*.2,y.body,y.bodyTop,dt);for(let a of[-t*.07,0,t*.07])i.cyl(a,e*.12,t*.018,n*.14,n*.155,y.accent,y.accent,8,pt);let r=n*.78,s=Math.min(t,n*.42)*.46,o=e*.075;i.box(-t*.085,t*.085,n*.58,r-s*.18,-e*.1,e*.015,y.body,y.bodyTop,K),i.lyingCyl("z",0,-e*.11,r-s*.3,r+s*.3,e*.24,s*.6,y.body,y.bodyTop,16,K);for(let a of[-o,o]){for(let l=0;l<16;l++){let c=l/16*Math.PI*2;i.seg(Math.cos(c)*s*.18,r+Math.sin(c)*s*.18,a,Math.cos(c)*s,r+Math.sin(c)*s,a,dt)}Js(i,0,r,s,a,32),Js(i,0,r,s*.86,a,32),Js(i,0,r,s*.18,a,18)}for(let a of[0,Math.PI/2,Math.PI,Math.PI*3/2]){let l=Math.cos(a)*s,c=r+Math.sin(a)*s;i.seg(l,c,-o,l,c,o,K)}}function _l(i,t,e,n,r,s){if(e==="fan_ceiling"){let d=new Di(i,t,(x,g)=>[x,g]),m=Math.min(n,r)*.13;for(let x of[0,120,240])d.rotated(0,0,x).loft([n*.08,n*.48,-m*.52,m*.52],[n*.12,n*.46,-m*.32,m*.32],0,s*.07,y.wood,y.woodTop,K);d.cyl(0,0,Math.min(n,r)*.14,-s*.035,s*.08,y.body,y.bodyTop,18,pt);return}let o=Math.min(n,s*.42)*.46,a=-Math.max(.006,r*.012),l=-a,c=new st(y.bodyTop),u=new st(y.body),f=(d,m)=>[Math.cos(m)*d,Math.sin(m)*d];for(let d=0;d<3;d++){let m=d/3*Math.PI*2,x=[f(o*.14,m-.12),f(o*.46,m-.34),f(o*.84,m-.16),f(o*.72,m+.22),f(o*.24,m+.34)],g=(p,_)=>[p[0],p[1],_];for(let p=1;p<x.length-1;p++)i.tri(g(x[0],l),g(x[p],l),g(x[p+1],l),c),i.tri(g(x[0],a),g(x[p+1],a),g(x[p],a),u);for(let p=0;p<x.length;p++){let _=(p+1)%x.length;i.tri(g(x[p],a),g(x[_],l),g(x[_],a),u),i.tri(g(x[p],a),g(x[p],l),g(x[_],l),u),t.seg(g(x[p],l),g(x[_],l),K,ee)}}new Di(i,t,(d,m)=>[d,m]).lyingCyl("z",0,0,-o*.14,o*.14,r*.1,o*.28,y.body,y.bodyTop,14,pt)}function ny(i,t,e,n){let r=Math.min(e*.88,n*.92),s=(n-r)/2;i.lyingCyl("x",0,0,s,s+r,t*.9,r,y.white,y.whiteTop,22,K);for(let o of[-t*.46,t*.46])i.lyingCyl("x",o,0,s+r*.04,s+r*.96,t*.035,r*.92,y.white,y.whiteTop,18,dt);for(let o of[-t*.28,t*.28])i.box(o-.025,o+.025,0,s+r*.25,-e*.42,-e*.28,y.metal,y.metal);for(let[o,a]of[[-t*.2,y.accent],[t*.2,y.fabricTop]])i.cyl(o,e*.05,Math.min(t,e)*.025,0,s+r*.18,a,a,10,dt),i.cyl(o,e*.05,Math.min(t,e)*.04,s+r*.14,s+r*.2,y.metal,y.metal,10);i.box(t*.18,t*.4,s+r*.38,s+r*.68,e*.43,e*.48,y.body,y.glass,pt),i.seg(t*.24,s+r*.53,e*.485,t*.35,s+r*.53,e*.485,pt)}function iy(i,t,e,n){let r=Math.min(.035,t*.025),s=t/2-r;for(let o of[-1,1]){i.box(o*s-r,o*s+r,0,n,-e/2,-e/2+r*2,y.metal,y.metal,K),i.box(o*s-r,o*s+r,0,n,e/2-r*2,e/2,y.metal,y.metal,K);for(let a of[-e/2+r,e/2-r])i.box(o*s-r*2.2,o*s+r*2.2,0,r*1.2,a-r*2.5,a+r*2.5,y.dark,y.dark)}for(let o=0;o<7;o++){let a=-e/2+r+(e-2*r)*o/6;i.box(-t/2+r,t/2-r,n-r*2,n,a-r/2,a+r/2,y.metal,y.metal,dt)}i.seg(-t/2,.05,-e/2,t/2,n-.05,-e/2,dt),i.seg(t/2,.05,-e/2,-t/2,n-.05,-e/2,dt),i.seg(-t/2,.05,e/2,t/2,n-.05,e/2,dt),i.seg(t/2,.05,e/2,-t/2,n-.05,e/2,dt)}function ry(i,t,e,n){let r=Math.min(.045,t*.04);for(let o of[-t/2+r,t/2-r])i.box(o-r,o+r,0,n*.64,-e/2+r,e/2-r,y.wood,y.woodTop,K);for(let o of[n*.18,n*.4])i.box(-t/2+r,t/2-r,o-r/2,o+r/2,-e/2+r,e/2-r,y.wood,y.woodTop,dt);let s=Math.max(2,Math.round(t/.35));for(let o=1;o<s;o++)i.seg(-t/2+t*o/s,n*.08,e/2+.003,-t/2+t*o/s,n*.58,e/2+.003,dt);i.pad(-t/2,t/2,n*.62,n,-e/2,e/2,y.cushion,y.fabricTop,.025,K)}function sy(i,t,e,n){let r=Math.min(.05,t*.035);i.box(-t/2,t/2,0,r,-e/2,e/2,y.wood,y.woodTop,K),i.box(-t/2,t/2,n-r,n,-e/2,e/2,y.wood,y.woodTop,K);let s=Math.max(5,Math.round(t/.22));for(let o=0;o<s;o++){let a=-t/2+t*(o+.5)/s;i.box(a-r/2,a+r/2,r,n-r,-e/2,e/2,o%2?y.wood:y.body,y.woodTop,dt)}}function oy(i,t,e,n){i.box(-t*.16,t*.16,n*.42,n,-e/2,-e*.18,y.metal,y.metal,K),i.loft([-t/2,t/2,-e/2,e/2],[-t*.18,t*.18,-e/2,-e*.1],0,n*.48,y.metal,y.whiteTop,K),i.box(-t*.4,t*.4,0,n*.06,e*.18,e/2,y.dark,y.dark,pt)}function ay(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,y.body,y.bodyTop,K),i.box(-t*.4,t*.18,n*.17,n*.82,e/2,e/2+.006,y.dark,y.glass,pt),i.cyl(t*.34,e/2+.008,Math.min(t,n)*.055,n*.58,n*.69,y.accent,y.accent,10,pt),i.seg(t*.28,n*.34,e/2+.009,t*.4,n*.34,e/2+.009,dt)}function ly(i,t,e,n){let r=n*.8,s=e/2;i.box(-t*.46,t*.46,.025,r,-e/2,s,y.white,y.whiteTop,K),i.box(-t*.48,t*.48,0,.035,-e*.44,e*.44,y.dark,y.dark),i.box(-t*.42,t*.42,.055,r-.035,s,s+.012,y.white,y.whiteTop,K),i.seg(-t*.4,r*.28,s+.014,t*.4,r*.28,s+.014,dt),i.seg(-t*.28,r*.58,s+.015,t*.28,r*.58,s+.015,pt),i.seg(-t*.2,r*.62,s+.015,t*.2,r*.62,s+.015,dt),i.box(-t/2,t/2,r-.025,r,-e/2,e/2,y.white,y.whiteTop,K);let o=Math.min(.012,t*.03),a=t*.1,l=-e*.16,c=e*.08,u=6718637;i.cyl(a,l,o*1.55,r,r+o*1.8,u,u,12,K),i.cyl(a,c,t*.16,r,r+.01,y.whiteTop,y.whiteTop,18,dt),i.seg(a-t*.1,r+.012,c,a+t*.1,r+.012,c,dt),i.seg(a,r+.012,c-e*.11,a,r+.012,c+e*.11,dt);let f=n*.925,h=n*.055,d=(l+c)/2,m=(c-l)/2,x=[[r+o,l],[f,l]];for(let g=1;g<=8;g++){let p=Math.PI-Math.PI*g/8;x.push([f+Math.sin(p)*h,d+Math.cos(p)*m])}x.push([n*.89,c]),i.tubeYZ(a,x,o,u,10),i.cyl(a,c,o*1.25,n*.89-o,n*.905,y.dark,u,10,dt),i.lyingCyl("x",a+t*.055,l,r+o*1.6,r+o*2.5,t*.15,o*.9,y.dark,u,8)}function cy(i,t,e,n){i.pad(-t/2,t/2,0,n,-e/2,e/2,y.white,y.whiteTop,Math.min(.04,t*.1),K);let r=e/2+.006;i.cyl(0,e/2,t*.095,n*.69,n*.705,y.dark,y.dark,18,pt);for(let s=0;s<7;s++){let o=n*(.16+s*.055);i.seg(-t*.34,o,r,t*.34,o,r,dt)}for(let s=-3;s<=3;s++)i.seg(s*t*.085,n+.003,-e*.27,s*t*.085,n+.003,e*.22,dt)}function uy(i,t,e,n){let r=Math.min(t,e)*.46;i.cyl(0,0,r,n*.06,n*.9,y.dark,y.fabricTop,18,K),i.cyl(0,0,r*.94,n*.9,n,y.dark,y.dark,18,pt),i.cyl(0,0,r*.72,n,n+.006,y.dark,y.dark,18,dt);for(let s of[-t*.12,t*.12])i.cyl(s,0,t*.014,n+.007,n+.01,y.white,y.white,8)}function hy(i,t,e,n){i.box(-t*.28,t*.28,1.85,1.85+n*.7,-e/2,-e/2+e*.12,y.white,y.whiteTop,K),i.box(-t*.08,t*.08,1.85+n*.3,1.85+n*.45,-e/2+e*.1,0,y.metal,y.metal,dt),i.lyingCyl("z",0,e*.16,1.85+n*.17,1.85+n*.78,e*.58,n*.58,y.white,y.whiteTop,14,K),i.lyingCyl("z",0,e*.47,1.85+n*.28,1.85+n*.67,e*.08,n*.38,y.dark,y.dark,16,pt),i.lyingCyl("z",0,e*.515,1.85+n*.38,1.85+n*.57,e*.025,n*.18,y.accent,y.dark,14)}function fy(i,t,e,n){let s=e/2;i.pad(-t/2,t/2,.95,.95+n,-e/2,s,y.dark,y.metal,Math.min(.018,t*.12),K);for(let o=0;o<3;o++)for(let a=0;a<3;a++){let l=(a-1)*t*.22,c=.95+n*(.7-o*.105);i.seg(l-t*.025,c,s+.005,l+t*.025,c,s+.005,pt)}i.cyl(0,s,t*.12,.95+n*.22,.95+n*.235,y.accent,y.dark,14,pt),i.lyingCyl("x",t*.22,s+e*.12,.95+n*.31,.95+n*.4,t*.75,n*.085,y.metal,y.metal,10,K)}function dy(i,t,e,n){let r=n*.96;i.lyingCyl("x",0,-e*.18,r,n,t,e*.16,y.metal,y.metal,10,K),i.box(-t*.06,t*.06,r-n*.055,r+n*.015,-e*.28,e*.02,y.dark,y.dark,pt);let s=t*.12,o=6;for(let a of[-1,1]){let l=a<0?-t/2:s,u=((a<0?-s:t/2)-l)/o;for(let f=0;f<o;f++){let h=l+f*u,d=f%2?e*.12:-e*.04;i.box(h,h+u*.82,n*.04,r,d-e*.18,d+e*.18,y.fabric,y.fabricTop,f===0||f===o-1?K:null)}}}function py(i,t,e,n){let r=Math.max(.42,Math.min(t,e)*.46);i.box(-t/2,t/2,0,n-.04,-e/2,-e/2+r,y.body,y.bodyTop,K),i.box(-t/2,-t/2+r,0,n-.04,-e/2+r,e/2,y.body,y.bodyTop,K),i.box(-t/2,t/2,n-.04,n,-e/2,-e/2+r,y.whiteTop,y.whiteTop,pt),i.box(-t/2,-t/2+r,n-.04,n,-e/2+r,e/2,y.whiteTop,y.whiteTop,pt),i.seg(-t/2+r,.08,-e/2+r,-t/2+r,n-.08,-e/2+r,dt);let s=-e/2+r+.006,o=-t/2+r+.006;for(let a=1;a<3;a++){let l=-t/2+r+(t-r)*a/3;i.seg(l,.08,s,l,n-.08,s,dt);let c=-e/2+r+(e-r)*a/3;i.seg(o,.08,c,o,n-.08,c,dt)}i.seg(-t/2+r+.08,n*.72,s+.004,-t/2+r+.22,n*.72,s+.004,pt),i.seg(o+.004,n*.72,-e/2+r+.08,o+.004,n*.72,-e/2+r+.22,pt)}function my(i,t,e,n){let r=Math.min(.76,n*.52);i.box(-t/2,t/2,r-.06,r,-e/2,e/2,y.wood,y.woodTop,K);for(let s of[-t/2+.05,t/2-.05])i.box(s-.025,s+.025,0,r-.06,-e/2+.04,e/2-.04,y.wood);i.box(-t*.32,t*.32,r+.12,n,-e/2,-e/2+.025,y.glass,y.glass,pt),i.box(-t*.2,t*.2,r-.01,r+.09,-e*.1,e*.18,y.body,y.bodyTop,K)}function gy(i,t,e,n){let r=Math.min(.045,t*.06);i.box(-t/2,t/2,n*.24,n*.32,-e/2,e/2,y.wood,y.woodTop,K),i.pad(-t/2+r,t/2-r,n*.32,n*.42,-e/2+r,e/2-r,y.white,y.whiteTop,.025);for(let s of[-e/2,e/2]){for(let o=0;o<7;o++){let a=-t/2+r+(t-2*r)*o/6;i.box(a-r/2,a+r/2,n*.3,n,s-r/2,s+r/2,y.wood,y.woodTop,dt)}i.box(-t/2,t/2,n-r,n,s-r,s+r,y.wood,y.woodTop,K)}for(let s of[-t/2,t/2])i.box(s-r,s+r,0,n,-e/2,e/2,y.wood,y.woodTop,K)}function xy(i,t,e,n){let r=Math.min(.9,e*.53),s=Math.min(.9,t*.38),o=n*.52;i.pad(-t/2,t/2,.08,o,-e/2,-e/2+r,y.fabric,y.fabricTop,.04,K),i.pad(-t/2,-t/2+s,.08,o,-e/2+r,e/2,y.fabric,y.fabricTop,.04,K),i.box(-t/2,t/2,o,n,-e/2,-e/2+Math.min(.2,r*.25),y.fabric,y.fabricTop,K),i.box(-t/2,-t/2+Math.min(.2,s*.25),o,n,-e/2+r,e/2,y.fabric,y.fabricTop,K),i.seg(-t/2+s,o+.01,-e/2+r*.1,-t/2+s,o+.01,-e/2+r*.9,dt)}function by(i,t,e,n){let r=n*.5;i.pad(-t/2,t/2,.08,r,-e/2+e*.12,e/2,y.fabric,y.fabricTop,.04,K),i.pad(-t/2+.05,t/2-.05,r,r+.1,-e/2+e*.3,e/2-.04,y.cushion,y.fabricTop,.03,dt),i.loft([-t/2,t/2,-e/2,-e/2+e*.22],[-t/2+.03,t/2-.03,-e/2,-e/2+e*.1],r,n,y.fabric,y.fabricTop,K),i.seg(0,r+.105,-e*.05,0,r+.105,e/2-.06,dt)}function _y(i,t,e,n){let r=Math.min(.025,Math.max(.01,e*.35));i.box(-t/2,t/2,0,.025,-r,r,y.metal,y.metal,pt);for(let s of[-t/2,0,t/2])i.box(s-r,s+r,0,n,-r,r,y.metal,y.metal,pt);i.seg(-t/2,n,0,t/2,n,0,pt),i.seg(t*.32,n*.42,r+.003,t*.32,n*.62,r+.003,K)}function vy(i,t,e,n){let r=Math.min(.07,t*.035);for(let a of[-t/2+r,t/2-r])i.box(a-r/2,a+r/2,0,n,-r,r,y.metal,y.metal,K),i.box(a-e*.25,a+e*.25,0,r,-e*.36,e*.36,y.metal,y.metal,K);let s=-t/2+r,o=t/2-r;i.loft([s,-t*.14,-e*.34,e*.34],[s+.08,-t*.14,-e*.3,e*.3],n*.36,n*.42,y.fabric,y.fabricTop,dt),i.loft([-t*.14,t*.14,-e*.34,e*.34],[-t*.13,t*.13,-e*.3,e*.3],n*.25,n*.31,y.fabric,y.fabricTop,dt),i.loft([t*.14,o,-e*.34,e*.34],[t*.14,o-.08,-e*.3,e*.3],n*.36,n*.42,y.fabric,y.fabricTop,dt),i.seg(s,n*.8,0,-t*.14,n*.42,0,K),i.seg(t*.14,n*.42,0,o,n*.8,0,K)}function yy(i,t,e,n){let r=Math.min(t,e);i.cyl(0,0,r*.08,0,n-.07,y.metal,y.metal,12),i.cyl(0,0,r*.22,n-.07,n,y.body,y.bodyTop,16,K);for(let[s,o]of[[0,-.38],[.38,0],[0,.38],[-.38,0]])i.cyl(s*t,o*e,r*.065,0,n*.52,y.metal,y.metal,10),i.cyl(s*t,o*e,r*.105,n*.52,n*.61,y.body,y.bodyTop,12,dt)}function My(i,t,e,n){let r=Math.min(t,e)*.46;i.cyl(0,0,r*.84,0,n*.08,y.metal,y.metal,12,K),i.cyl(0,0,r,n*.08,n*.92,y.metal,y.whiteTop,20,K);for(let s of[n*.28,n*.5,n*.72])for(let o=0;o<24;o++){let a=o/24*Math.PI*2,l=(o+1)/24*Math.PI*2;i.seg(Math.cos(a)*r,s,Math.sin(a)*r,Math.cos(l)*r,s,Math.sin(l)*r,dt)}i.cyl(0,0,r*.18,n*.92,n,y.dark,y.bodyTop,12,dt)}function Gd(i,t,e,n,r){let s=Math.min(.12,t*.05);for(let l of[-t/2+s/2,t/2-s/2])i.box(l-s/2,l+s/2,0,n,-e/2,e/2,y.body,y.bodyTop,K);let o=r?2:Math.max(3,Math.round(t/.4)),a=t-2*s;for(let l=0;l<o;l++){let c=-a/2+a*l/o+s*.25,u=-a/2+a*(l+1)/o-s*.25;i.box(c,u,n*.08,n*.92,-e*.18,e*.18,r?y.metal:y.wood,r?y.metal:y.woodTop,dt),r&&i.seg(l===0?u:c,n*.46,e*.2,l===0?u-.08:c+.08,n*.46,e*.2,pt)}if(!r)for(let l of[n*.22,n*.76])i.box(-a/2,a/2,l-.025,l+.025,-e/2,e/2,y.wood,y.woodTop,K)}function Js(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,pt)}}function Sy(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,y.dark,y.body,K),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,pt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,y.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,y.white,y.whiteTop,K),Js(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,pt);for(let a of[-1,1])Js(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,y.white,y.whiteTop,K),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,y.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,pt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,dt)}function wy(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,y.dark,y.body,K),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,y.dark,y.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,pt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,dt)}function Ty(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,y.dark,y.body,K);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(u)*s,o+Math.sin(u)*s,e/2+.003,pt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,y.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,y.dark,y.body)}function Ey(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,y.white,y.whiteTop,K),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,dt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,dt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,y.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,y.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,pt)}function Ay(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,y.white,y.whiteTop,K),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,pt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,dt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,y.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,y.dark,y.body,K),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,pt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,y.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,y.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,y.white,y.whiteTop,K);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,pt)}}var wu=.12,Tu=1.9;function Eu(i,t){let e=Ry(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function Ry(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=ad(i.type);if(s){let l=t?dn(t,i):0,c=(s.x-s.w/2)*e,u=(s.x+s.w/2)*e,f=Math.min(.02,(u-c)*.05);return{x0:c+f,x1:u-f,y0:l+s.y*r+f,y1:l+(s.y+s.h)*r-f,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?dn(t,i)-zs(i):0,a=Cy(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function Cy(i,t,e,n,r){if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?dn(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:wu+.02,y1:wu+n-.02,z:e/2+.004};if(i.type==="air_conditioner")return{x0:-t*.43,x1:t*.43,y0:Tu+n*.08,y1:Tu+n*.27,z:e/2+.008};if(i.type==="water_pump")return{x0:-t*.1,x1:t*.1,y0:n*.56,y1:n*.65,z:e*.3+.004};if(i.type==="water_heater"){let s=Math.min(e*.88,n*.92),o=(n-s)/2;return{x0:t*.18,x1:t*.4,y0:o+s*.38,y1:o+s*.68,z:e*.48+.006}}if(i.type==="range_hood")return{x0:-t*.4,x1:t*.4,y0:.005,y1:n*.06,z:e/2+.003};if(i.type==="microwave")return{x0:-t*.4,x1:t*.18,y0:n*.17,y1:n*.82,z:e/2+.008};if(i.type==="water_purifier")return{x0:-t*.28,x1:t*.28,y0:n*.8*.56,y1:n*.8*.64,z:e/2+.016};if(i.type==="air_purifier")return{x0:-t*.11,x1:t*.11,y0:n*.66,y1:n*.74,z:e/2+.008};if(i.type==="smart_speaker")return{x0:-t*.42,x1:t*.42,y0:n*.9,y1:n+.008,z:e*.05};if(i.type==="security_camera")return{x0:-t*.12,x1:t*.12,y0:1.85+n*.37,y1:1.85+n*.58,z:e*.53};if(i.type==="smart_lock")return{x0:-t*.36,x1:t*.36,y0:.95+n*.43,y1:.95+n*.78,z:e/2+.006};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function Iy(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new st(1-r,1-r,1-r),a=new st(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],u=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],f=d=>[d[0],l,d[1]],h=i.p.length;i.tri(f(c[0]),f(c[1]),f(c[2]),o),i.tri(f(c[0]),f(c[2]),f(c[3]),o);for(let d=0;d<4;d++){let m=(d+1)%4;i.tri(f(c[d]),f(u[d]),f(u[m]),o,a,a),i.tri(f(c[d]),f(u[m]),f(c[m]),o,a,o)}Wd(t)&&bl(i,h)}function vl(i,t,e,n,r=0){Py(i,t,e,n,r)}function bl(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function Py(i,t,e,n,r){let s=De(n.type)?0:r-zs(n);if(De(n.type)||Math.abs(s)<.001)return Hd(i,t,e,n,r);let o=i.p.length,a=t.p.length,l=e.p.length;Hd(i,t,r<.05?e:new ce,n,0);for(let c=o+1;c<i.p.length;c+=3)i.p[c]+=s;for(let c=a+1;c<t.p.length;c+=3)t.p[c]+=s;for(let c=l+1;c<e.p.length;c+=3)e.p[c]+=s}function Hd(i,t,e,n,r){let s=n.rotation*oe,o=Math.cos(s),a=Math.sin(s),l=n.mirror?-1:1,c=(m,x)=>[n.x+l*m*o-x*a,n.z+l*m*a+x*o],u=new Di(i,t,c),f=Math.max(.05,n.w),h=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"altar":Jv(u,f,h,d);break;case"altar_wall":Kv(u,f,h,d);return;case"shoe_cabinet":Qv(u,f,h,d);break;case"motorbike":jv(u,f,h,d);break;case"fan_ceiling":ty(u,f,h,d);return;case"fan_floor":ey(u,f,h,d);break;case"water_heater":ny(u,f,h,d);return;case"drying_rack":iy(u,f,h,d);break;case"shoe_bench":ry(u,f,h,d);break;case"room_divider":sy(u,f,h,d);break;case"range_hood":oy(u,f,h,d);return;case"microwave":if(ay(u,f,h,d),r>.05)return;break;case"water_purifier":ly(u,f,h,d);break;case"air_purifier":cy(u,f,h,d);break;case"smart_speaker":uy(u,f,h,d);break;case"security_camera":hy(u,f,h,d);return;case"smart_lock":fy(u,f,h,d);return;case"smart_curtain":dy(u,f,h,d);return;case"kitchen_corner":py(u,f,h,d);break;case"kitchen_display":kv(u,f,h,d);break;case"vanity":my(u,f,h,d);break;case"crib":gy(u,f,h,d);break;case"bed_single":case"bed_double":Bd(u,f,h,d);break;case"sofa_l":xy(u,f,h,d);break;case"sofa_bed":by(u,f,h,d);break;case"shower_screen":_y(u,f,h,d);break;case"hammock":vy(u,f,h,d);break;case"stone_table_set":yy(u,f,h,d);break;case"planter_large":zd(u,f,h,d);break;case"water_tank":My(u,f,h,d);break;case"gate":Gd(u,f,h,d,!0);break;case"fence":Gd(u,f,h,d,!1);break;case"sofa":Od(u,f,h,d,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":Od(u,f,h,d,1);break;case"bed":Bd(u,f,h,d);break;case"chair":pv(u,f,h,d);break;case"table":mv(u,f,h,d);break;case"desk":gv(u,f,h,d);break;case"nightstand":ri(u,f,h,d,1,d*.72,!0),u.seg(-f/2,d*.5,h/2-.02,f/2,d*.5,h/2-.02,dt);break;case"wardrobe":ri(u,f,h,d,Math.max(2,Math.round(f/.5)),d*.5);break;case"shelf":xv(u,f,h,d);break;case"kitchen":bv(u,f,h,d);break;case"fridge":_v(u,f,h,d);break;case"fridge_smart":vv(u,f,h,d);break;case"stove":Mv(u,f,h,d);break;case"sink":Sv(u,f,h,d);break;case"bathtub":wv(u,f,h,d);break;case"shower":Tv(u,f,h,d);break;case"wc":Ev(u,f,h,d);break;case"washbasin":Av(u,f,h,d);break;case"tv_board":Rv(u,f,h,d);break;case"plant":zd(u,f,h,d);break;case"rug":Cv(u,f,h);return;case"stairs":Iv(u,f,h,d);break;case"stairs_landing":Pv(u,f,h,d);break;case"stairwell":return;case"sideboard":Lv(u,f,h,d);break;case"dresser":Fv(u,f,h,d);break;case"tall_cabinet":ri(u,f,h,d,1,d*.5);break;case"coat_rack":Dv(u,f,h,d);break;case"bench":kd(u,f,h,d,!1);break;case"corner_bench":kd(u,f,h,d,!0);break;case"bar_stool":Nv(u,f,h,d);break;case"office_chair":Uv(u,f,h,d);break;case"stool":Ov(u,f,h,d);break;case"kitchen_wall":Bv(u,f,h,d);return;case"kitchen_tall":zv(u,f,h,d);break;case"island":Vv(u,f,h,d);break;case"worktop":u.box(-f/2,f/2,Math.max(0,d-.04),d,-h/2,h/2,y.whiteTop,y.whiteTop,K);return;case"dishwasher":Gv(u,f,h,d);break;case"washer":Vd(u,f,h,d,!1);break;case"dryer":Vd(u,f,h,d,!0);break;case"bunk_bed":Hv(u,f,h,d);break;case"table_round":Wv(u,f,h,d);break;case"coffee_table":Xv(u,f,h,d);break;case"tv_wall":qv(u,f,h,d);return;case"parking":{let x=[[-f/2,-h/2],[f/2,-h/2],[f/2,h/2],[-f/2,h/2]];for(let g=0;g<4;g++)u.seg(x[g][0],.012,x[g][1],x[(g+1)%4][0],.012,x[(g+1)%4][1],dt);u.seg(-f*.15,.012,h/2-.45,0,.012,h/2-.2,K),u.seg(0,.012,h/2-.2,f*.15,.012,h/2-.45,K);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,d,-h/2,-h/2+h*.3,y.white,y.whiteTop,K),u.box(-f*.2,f*.2,d*.5,d*.62,-h/2+h*.3,-h/2+h*.31,y.accent);return;case"radiator":Yv(u,f,h,d);return;case"air_conditioner":$v(u,f,h,d);return;case"water_pump":Zv(u,f,h,d);break;case"inverter":Sy(u,f,h,d,n.variant??null);return;case"grid_point":wy(u,f,h,d);break;case"wallbox":Ty(u,f,h,d);return;case"meter":Ey(u,f,h,d);return;case"home_battery":if(Ay(u,f,h,d,n.variant??null),n.variant==="wall")return;break;default:{let m=De(n.type);if(m){if(Au(u,m,f,h,d,r,null),r>.05)return}else u.box(-f/2,f/2,0,d,-h/2,h/2,y.body,y.bodyTop,K)}}Iy(e,c,f,h,n.type==="plant"?.35:.5)}function Su(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=y;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Au(i,t,e,n,r,s,o,a=null){let l=!!a;for(let c of t.parts){if(a&&!a(c))continue;let u=l?{...c,glow:!0,w:c.w+.006/e,d:c.d+.006/n,y:Math.max(0,c.y-.002/r),h:c.h+.004/r}:c,f=u.glow&&o!==null,h=f?o:Su(u.color,!1)??y.body,d=f?o:Su(u.top,!1)??Su(u.color,!0)??Ht(h,1.25).getHex(),m=s+u.y*r,x=s+Math.min(r,(u.y+u.h)*r),g=u.edges==="glow"?nr:u.edges==="faint"?dt:u.edges?K:null,p=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))p.lyingCyl(u.axis,u.x*e,u.z*n,m,x,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,h,d,14,g);else if(u.shape==="cyl")p.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,m,x,h,d,14,g);else if(u.shape==="loft"){let _=u.tx??u.x,S=u.tz??u.z,v=u.tw??u.w,M=u.td??u.d;p.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(_-v/2)*e,(_+v/2)*e,(S-M/2)*n,(S+M/2)*n],m,x,h,d,g)}else p.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,m,x,(u.z-u.d/2)*n,(u.z+u.d/2)*n,h,d,g)}}function Yd(i,t,e,n,r,s){let o=s*oe,a=Math.cos(o),l=Math.sin(o),c=(m,x)=>[e+m*a-x*l,r+m*l+x*a],u=new Di(i,new Ve,c),f=1713728,h=2373216,d=725279;if(t==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,f,h,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,f),u.cyl(0,0,.012,n-.075,n-.06,y.accent,y.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,f,h),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,f,h),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,f,h),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,y.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Ru(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*oe,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,u=(f,h)=>[e.x+c*f*a-h*l,e.z+c*f*l+h*a];Au(new Di(i,new Ve,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function yl(i,t,e,n,r){let s=e.rotation*oe,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(u,f)=>[e.x+l*u*o-f*a,e.z+l*u*a+f*o];Au(new Di(i,new Ve,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var on={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Yr={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}};var Ly={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5}},Fy={canopy:{color:on.wallTop,side:on.wall,edge:on.edge,edgeAlpha:.5},veranda:{color:on.wallTop,side:on.wall,edge:on.edge,edgeAlpha:.58}},Dy=i=>i.type==="canopy"||i.type==="veranda";function $d(i,t){let e=i.roof_style==="glass"?3234418:i.roomColor??t.color,n=i.roof_style==="glass"?2112592:t.side;return{roof:e,under:n}}function Jd(i,t){return ei(i)+(t.offset??0)+(ti(t.type)?.01:Hr[t.type])}function si(i){return er(i)>=0?i:[...i].reverse()}function Ny(i,t){let e=i[t];if(ti(e.type)||e.type==="pool")return[];let n=[];for(let r=t+1;r<i.length;r++){let s=i[r];!s.cut||s.points.length<3||s.points.every(o=>ue(o,e.points))&&n.push(si(s.points))}return n}function vn(i,t,e,n,r,s,o,a){let l=e[0]-t[0],c=e[1]-t[1],u=Math.hypot(l,c);if(u<1e-6)return;let f=-c/u*n*.5,h=l/u*n*.5;_e(i,si([[t[0]+f,t[1]+h],[e[0]+f,e[1]+h],[e[0]-f,e[1]-h],[t[0]-f,t[1]-h]]),r,s,o,a,{aoFrom:r-1})}function Ml(i,t,e,n,r,s,o){let a=Math.hypot(e[0]-t[0],e[1]-t[1]);if(a<.04||r<.2)return;vn(i,t,e,.14,n,n+Math.min(.24,r*.24),s,o),vn(i,t,e,.07,n+r*.5,n+r*.57,s,o),vn(i,t,e,.1,n+r-.1,n+r,s,o);let l=Math.max(2,Math.ceil(a/.22));for(let c=0;c<=l;c++){let u=c/l,f=t[0]+(e[0]-t[0])*u,h=t[1]+(e[1]-t[1])*u;_e(i,si([[f-.018,h-.018],[f+.018,h-.018],[f+.018,h+.018],[f-.018,h+.018]]),n+.12,n+r-.07,s,o)}}function Uy(i,t,e,n,r,s,o){let a=e[0]-t[0],l=e[1]-t[1],c=Math.hypot(a,l);if(c<.3)return;let u=a/c,f=l/c,h=p=>[t[0]+u*p,t[1]+f*p],d=(p,_,S,v)=>{let[M,w]=h(p);_e(i,si([[M-_,w-_],[M+_,w-_],[M+_,w+_],[M-_,w+_]]),S,v,s,o)},m=Math.min(.45,r*.32),x=p=>n+r+m*Math.sin(Math.PI*p),g=Math.max(8,Math.ceil(c/.18));vn(i,t,e,.11,n+.06,n+.16,s,o),vn(i,t,e,.08,n+r*.47,n+r*.54,s,o);for(let p=0;p<=g;p++){let _=p/g,S=p===0||p===g||Math.abs(_-.5)<.5/g;if(d(c*_,S?.038:.016,n+.08,x(_)-.04),p<g){let v=h(c*_),M=h(c*(p+1)/g),w=(x(_)+x((p+1)/g))/2;vn(i,v,M,.075,w-.045,w+.02,s,o)}}}function Zd(i,t,e,n,r,s,o=ee){let a=new st(s),l=new st(Ht(r,.72)),c=new st(r);for(let[u,f,h]of qr(t)){let d=t[u],m=t[f],x=t[h],g=[d[0],e(d[0],d[1]),d[1]],p=[m[0],e(m[0],m[1]),m[1]],_=[x[0],e(x[0],x[1]),x[1]],S=[g[0],g[1]-n,g[2]],v=[p[0],p[1]-n,p[2]],M=[_[0],_[1]-n,_[2]];i.tri(g,_,p,a,a,a,void 0,o),i.tri(S,v,M,l,l,l,void 0,o)}for(let u=0;u<t.length;u++){let f=t[u],h=t[(u+1)%t.length],d=[f[0],e(f[0],f[1]),f[1]],m=[h[0],e(h[0],h[1]),h[1]],x=[d[0],d[1]-n,d[2]],g=[m[0],m[1]-n,m[2]];i.tri(x,d,m,c,c,c,void 0,o),i.tri(x,m,g,c,c,c,void 0,o)}}function Kd(i,t,e,n,r){let s=ei(e),o=[];return n.forEach((a,l)=>{if(a.points.length<3)return;let c=i.count,u,f,h=s+(a.offset??0),d=(w,A)=>h-Vs(a,w,A),m=h-(a.type==="pool"?0:a.slope??0),x=Dy(a),g=x?a.height??2.4:ti(a.type)&&a.height?a.height:Hr[a.type],p={...x?Fy[a.type]:Ly[a.type],top:g},_=si(a.points),S=Ht(p.edge,p.edgeAlpha),v=a.open&&(a.type==="fence"||a.type==="pergola"||x)?_.length-1:-1,M=(w,A=ee)=>{if(a.outline!==!1)for(let b=0;b<_.length;b++){if(b===v)continue;let T=_[b],C=_[(b+1)%_.length];t.seg([T[0],w(T[0],T[1]),T[1]],[C[0],w(C[0],C[1]),C[1]],S,A)}};switch(a.type){case"pool":{let w=new st(p.color);for(let[b,T,C]of qr(_)){let I=_[b],F=_[T],P=_[C];i.tri([I[0],h+p.top,I[1]],[P[0],h+p.top,P[1]],[F[0],h+p.top,F[1]],w,w,w,void 0,ee)}let A=new st(p.side);for(let b=0;b<_.length;b++){let T=_[b],C=_[(b+1)%_.length];i.tri([C[0],h+p.top,C[1]],[C[0],h+.06,C[1]],[T[0],h+.06,T[1]],A,A,A,void 0,ee),i.tri([C[0],h+p.top,C[1]],[T[0],h+.06,T[1]],[T[0],h+p.top,T[1]],A,A,A,void 0,ee)}M(()=>h+.06),M(()=>h+p.top+.005);break}case"fence":{for(let w=0;w<_.length;w++){if(w===v)continue;let A=_[w],b=_[(w+1)%_.length],T=Math.hypot(b[0]-A[0],b[1]-A[1]),C=Math.max(1,Math.round(T/2)),I=v>=0&&w===v-1?C:C-1;for(let F=0;F<=I;F++){let P=F/C,E=A[0]+(b[0]-A[0])*P,D=A[1]+(b[1]-A[1])*P,U=d(E,D);_e(i,si([[E-.04,D-.04],[E+.04,D-.04],[E+.04,D+.04],[E-.04,D+.04]]),U,U+p.top,p.side,p.color)}for(let F of[.35,.85])t.seg([A[0],d(A[0],A[1])+F*p.top,A[1]],[b[0],d(b[0],b[1])+F*p.top,b[1]],S,ee)}break}case"pergola":{let w=p.top;for(let[A,b]of _){let T=d(A,b);_e(i,si([[A-.06,b-.06],[A+.06,b-.06],[A+.06,b+.06],[A-.06,b+.06]]),T,T+w,p.side,p.color)}for(let A=0;A<_.length;A++){if(A===v)continue;let b=_[A],T=_[(A+1)%_.length],C=d(b[0],b[1])+w;if(vn(i,b,T,.12,C-.16,C,p.side,p.color),a.bracing){let I=d(b[0],b[1]),F=d(T[0],T[1]);t.seg([b[0],I+.25,b[1]],[T[0],F+w-.25,T[1]],S,ee),t.seg([T[0],F+.25,T[1]],[b[0],I+w-.25,b[1]],S,ee)}}if(dd(_)){let A=pd(_),b=A.x1-A.x0,T=A.z1-A.z0,C=b>=T,I=C?b:T,F=Math.max(1,Math.round(I/.6));for(let P=1;P<F;P++){let E=(C?A.x0:A.z0)+I*P/F,D=C?[E,A.z0+.06]:[A.x0+.06,E],U=C?[E,A.z1-.06]:[A.x1-.06,E],N=d(D[0],D[1])+w;vn(i,D,U,.06,N-.04,N+.08,p.side,p.color)}}M((A,b)=>d(A,b)+w+.004);break}case"canopy":{let w=p.top,A=$d(a,p),b=h+ks(a.type),T=(I,F)=>b+w-Vs(a,I,F),C=Math.min(.4,Math.max(.04,(a.column_size??.12)/2));for(let[I,F]of _){let P=T(I,F)-.08;_e(i,si([[I-C,F-C],[I+C,F-C],[I+C,F+C],[I-C,F+C]]),b,P,A.under,A.roof)}if(a.railing!==!1&&w>=.4){let I=Math.min(1.45,w*.62),F=du(_,v);for(let P=0;P<_.length;P++){if(P===v)continue;let E=_[P],D=_[(P+1)%_.length];if(P!==F){Ml(i,E,D,b,I,A.under,A.roof);continue}let U=Math.hypot(D[0]-E[0],D[1]-E[1]);if(U<.6){Ml(i,E,D,b,I,A.under,A.roof);continue}let N=Math.min(2.4,Math.max(.9,U*.45),Math.max(.3,U-.3)),z=Math.max(0,(U-N)/(2*U)),O=Math.min(1,1-z),k=[E[0]+(D[0]-E[0])*z,E[1]+(D[1]-E[1])*z],V=[E[0]+(D[0]-E[0])*O,E[1]+(D[1]-E[1])*O];Ml(i,E,k,b,I,A.under,A.roof),Ml(i,V,D,b,I,A.under,A.roof),Uy(i,k,V,b,I,A.under,A.roof)}}for(let I=0;I<_.length;I++){if(I===v)continue;let F=_[I],P=_[(I+1)%_.length],E=(T(F[0],F[1])+T(P[0],P[1]))/2;vn(i,F,P,.12,E-.18,E-.08,A.under,A.roof)}u=i.count,Zd(i,_,T,.08,A.under,A.roof,r),f=i.count,M((I,F)=>T(I,F)+.004,r);break}case"veranda":{let w=p.top,A=$d(a,p),b=h+ks(a.type),T=(O,k)=>b,C=(O,k)=>b+w-Vs(a,O,k),I=Math.min(1.1,w*.48),F=(O,k,V,it,et,lt=p.side,j=p.color)=>_e(i,si([[O-V,k-V],[O+V,k-V],[O+V,k+V],[O-V,k+V]]),it,et,lt,j);if(a.railing!==!1)for(let O=0;O<_.length;O++){if(O===v)continue;let k=_[O],V=_[(O+1)%_.length],it=Math.hypot(V[0]-k[0],V[1]-k[1]),et=Math.max(1,Math.ceil(it/.22)),lt=b;vn(i,k,V,.07,lt+.3,lt+.38,A.under,A.roof),vn(i,k,V,.09,lt+I-.09,lt+I,A.under,A.roof);for(let j=0;j<=et;j++){let ut=j/et,X=k[0]+(V[0]-k[0])*ut,$=k[1]+(V[1]-k[1])*ut,ct=T(X,$);F(X,$,.018,ct+.08,ct+I-.07,A.under,A.roof)}}let P=du(_,v),E=_[P],D=_[(P+1)%_.length],U=Math.min(12,Math.max(0,Math.round(a.columns??2))),N=Math.min(.4,Math.max(.04,(a.column_size??.32)/2));for(let O=0;O<U;O++){let k=U===1?.5:O/(U-1),V=E[0]+(D[0]-E[0])*k,it=E[1]+(D[1]-E[1])*k,et=T(V,it);F(V,it,N*1.375,et,et+.28,A.under,A.roof),F(V,it,N,et+.2,C(V,it)-.2,A.under,A.roof),F(V,it,N*1.375,C(V,it)-.28,C(V,it),A.under,A.roof),t.seg([V,et+.28,it],[V,C(V,it)-.28,it],S,ee)}let z=(C(E[0],E[1])+C(D[0],D[1]))/2;vn(i,E,D,Math.max(.2,N*2.6),z-.28,z,A.under,A.roof),u=i.count,Zd(i,_,C,.1,A.under,A.roof,r),f=i.count,M((O,k)=>T(O,k)+(a.railing===!1?.004:I+.004));break}default:{let w=(b,T)=>d(b,T)+p.top,A=Ny(n,l);if(_e(i,_,m,a.slope?w:h+p.top,p.side,p.color,{aoFrom:m,holes:A}),M((b,T)=>w(b,T)+.004),a.type==="hedge"&&M((b,T)=>d(b,T)+.004),a.outline!==!1)for(let b of A)for(let T=0;T<b.length;T++){let C=b[T],I=b[(T+1)%b.length];t.seg([C[0],w(C[0],C[1])+.004,C[1]],[I[0],w(I[0],I[1])+.004,I[1]],S,ee)}}}i.count>c&&o.push({id:a.id,start:c,end:i.count,...u!==void 0&&f!==void 0?{roofStart:u,roofEnd:f}:{}})}),o}function Qd(i,t,e){return Kd(i,t,e,e.outdoor??[],ee)}function jd(i,t,e,n,r=ee){return Kd(i,t,e,n,r)}var wl=Math.PI/180,Oy=1.13,By=1.72,Cu=.025,sr=.07,tp=.25;function ep(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=qs(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<1.2)continue;let c=a/l,u=-o/l,f=Math.min(n.height,s.height??n.height),h=(d,m,x,g)=>e.push({key:d,section:null,side:"top",flat:!1,o:m,eu:x,es:[0,1,0],n:g,lu:l,ls:f,pitch:90,span:()=>[0,l],facing:[g[0],g[2]],wall:{floorId:n.id}});h(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+u*s.right],[o/l,0,a/l],[c,0,u]),s.free&&h(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-u*s.left],[-o/l,0,-a/l],[-c,0,-u])}}return e}var Iu="ground";function Pu(i){return[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation)[0]??i.floors[0]??null}function np(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=Pu(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:fl(s,o,a)):t.base??0;return{key:Iu,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function zy(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function $r(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(_=>ky(_,ml(i,_,_.overhang??t.overhang)));let e=zy(i);if(!e)return[];let n=e.rooms.flatMap(_=>_.points.map(S=>S[0])),r=e.rooms.flatMap(_=>_.points.map(S=>S[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=e.elevation+e.height;if(t.type==="flat")return[ip("main",null,o,l,a,c,u+tp)];let f=a-o>=c-l,h=t.ridge==="short"?!f:f,d=(h?c-l:a-o)/2,m=d*Math.tan(t.pitch*wl),x=(_,S,v)=>h?[_,u+v,(l+c)/2+S]:[(o+a)/2+S,u+v,_],[g,p]=h?[o,a]:[l,c];return[-1,1].map(_=>Sl(`main:${_<0?"a":"b"}`,null,_<0?"a":"b",x(g,_*d,0),x(p,_*d,0),x(g,0,m),t.pitch,()=>[0,p-g]))}function ky(i,t){let e=Wn(i),n=Pn(i),r=(x,g,p)=>{let[_,S]=e.at(x,g);return[_,p,S]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=e.at(a,-s),g=e.at(l,e.w+o);return[ip(i.id,i.id,Math.min(x[0],g[0]),Math.min(x[1],g[1]),Math.max(x[0],g[0]),Math.max(x[1],g[1]),i.eave_a+tp)]}if(i.shape==="pent")return[Sl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",f=i.shape==="pyramid"?(e.u1-e.u0)/2:u?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,h=u?e.u0+f-a:0,d=u?l-(e.u1-f):0,m=[];if(n.vr>.3){let x=Math.hypot(n.vr+s,n.rh-n.y(-s));m.push(Sl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,g=>[h*(g/x),c-d*(g/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));m.push(Sl(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,g=>[d*(g/x),c-h*(g/x)]))}if(u){let x=n.y(-s),g=n.y(e.w+o),p=[[`${i.id}:c`,"c",r(a,e.w+o,g),r(a,-s,x),r(e.u0+f,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-s,x),r(l,e.w+o,g),r(e.u1-f,n.vr,n.rh)]];for(let[_,S,v,M,w]of p){let A=Vy(_,i.id,S,v,M,w);A&&m.push(A)}}return m}function Vy(i,t,e,n,r,s){let o=Qs(or(r,n));if(o<.3)return null;let a=Ni(or(r,n)),l=or(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],f=Qs(u);if(f<.3)return null;let h=Ni(u),d=Ni(op(a,h));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let m=Ni([-h[0],0,-h[2]]),x=Math.atan2(h[1],Math.hypot(h[0],h[2]))/wl;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:h,n:d,lu:o,ls:f,pitch:x,span:p=>{let _=Math.min(1,Math.max(0,p/f));return[c*_,o-(o-c)*_]},facing:[m[0],m[2]]}}function Sl(i,t,e,n,r,s,o,a){let l=Ni(or(r,n)),c=Ni(or(s,n)),u=Ni(op(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let f=Ni([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:Qs(or(r,n)),ls:Qs(or(s,n)),pitch:o,span:a,facing:[f[0],f[2]]}}function ip(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function rp(i){let t=i.module_w||Oy,e=i.module_h||By;return i.portrait===!1?[e,t]:[t,e]}function Gy(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function sp(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*wl:i.wall?Math.min(90,Math.max(0,t.tilt??0))*wl:0}function Hy(i,t){let[,e]=rp(t),n=sp(i,t);return i.wall?e*Math.cos(n)+Cu:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Cu}function js(i,t,e=!1){let[n,r]=rp(t),s=[],o=sp(i,t),a=r*Math.cos(o),l=Hy(i,t),c=Gy(t),u=Math.max(1,...c),f=new Set(t.skip??[]),h=(m,x,g)=>[i.o[0]+i.eu[0]*m+i.es[0]*x+i.n[0]*g,i.o[1]+i.eu[1]*m+i.es[1]*x+i.n[1]*g,i.o[2]+i.eu[2]*m+i.es[2]*x+i.n[2]*g],d=(m,x)=>{if(i.unbounded)return!0;if(x<-1e-6||x>i.ls+1e-6)return!1;let[g,p]=i.span(x);return m>=g-1e-6&&m<=p+1e-6};return c.forEach((m,x)=>{let g=t.align==="right"?u-m:t.align==="center"?(u-m)/2:0;for(let p=0;p<m;p++){let _=`${x}:${p}`,S=f.has(_);if(S&&!e)continue;let v=t.u+(p+g)*(n+Cu),M=t.v+x*l,w=v+n,A=M+(i.flat||i.wall?a:r);if(![[v,M],[w,M],[w,A],[v,A]].every(([P,E])=>d(P,E)))continue;if(i.wall&&o>.001){let P=sr+r*Math.sin(o),[E,D]=t.flip?[P,sr]:[sr,P],U=[h(v,M,E),h(w,M,E),h(w,A,D),h(v,A,D)],N=t.flip?M:A,z=[v+.05,w-.05].map(O=>[h(O,N,0),h(O,N,P)]);s.push({corners:U,posts:z,cell:_,skipped:S});continue}if(!i.flat){s.push({corners:[h(v,M,sr),h(w,M,sr),h(w,A,sr),h(v,A,sr)],posts:[],cell:_,skipped:S});continue}let b=.15,T=b+r*Math.sin(o),[C,I]=t.flip?[A,M]:[M,A],F=[h(v,C,b),h(w,C,b),h(w,I,T),h(v,I,T)];s.push({corners:F,posts:[v+.05,w-.05].flatMap(P=>[[h(P,C,0),h(P,C,b)],[h(P,I,0),h(P,I,T)]]),cell:_,skipped:S})}}),s}function or(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function Qs(i){return Math.hypot(i[0],i[1],i[2])}function Ni(i){let t=Qs(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function op(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var Wy=.78,Xy=1.18;function qy(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||Wy,module_h:i.h||Xy}}function Lu(i,t){let e=js(i,qy(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}var to=1712952,eo=2239816,cp=1318193,ar=Ht(3662079,.9),Zr=Ht(5995775,.45),Oe=.14,Yy=9427199,$y=13226982,Zy=14936565,Jy={black:{glass:new st(329483),edge:Ht(9082544,.32),cells:Ht(2766160,.22)},blue:{glass:new st(1386842),edge:Ht(10467583,.55),cells:Ht(4025599,.35)}},Ky=Ht(13226982,.5),Qy=Ht(13226982,.85),jy=Ht(16757575,.95),ap=new st(2845583),lp=new st(3818072);function t1(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function up(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:i1(i),r=e?.type==="custom"?r1(i,e.sections??[],e.overhang):n?[n]:[];return n1(i,r),e1(i,r,t),r}function e1(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map($r(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?Lu(o,s):null;if(!o||!a)continue;let l=o.section?t.find(I=>I.sections?.includes(o.section)):t[0];if(!l)continue;let c=l.floor.elevation+l.base,u=I=>[I[0],I[1]-c,I[2]],[f,h,d,m]=a.map(u),x=e.get(s.id)??{open:0,tilt:0,cover:0},g=(I,F)=>[I[0]+o.n[0]*F,I[1]+o.n[1]*F,I[2]+o.n[2]*F],p=(I,F,P)=>[I[0]+(F[0]-I[0])*P,I[1]+(F[1]-I[1])*P,I[2]+(F[2]-I[2])*P],_=x.open>.02||x.tilt>.02?jy:Qy,S=[f,h,d,m].map(I=>g(I,.06));for(let I=0;I<4;I++)l.lines.seg(S[I],S[(I+1)%4],_);let v=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*oe,M=Math.hypot(d[0]-h[0],d[1]-h[1],d[2]-h[2]),w=I=>{let F=o.es;return[I[0]-F[0]*M*Math.cos(v)+o.n[0]*M*Math.sin(v),I[1]-F[1]*M*Math.cos(v)+o.n[1]*M*Math.sin(v),I[2]-F[2]*M*Math.cos(v)+o.n[2]*M*Math.sin(v)]},A=g(m,.065),b=g(d,.065),T=w(A),C=w(b);l.solid.tri(T,C,b,ap),l.solid.tri(T,b,A,ap);for(let[I,F]of[[T,C],[C,b],[b,A],[A,T]])l.lines.seg(I,F,_);if(x.cover>.02){let I=Math.min(1,x.cover),F=g(p(A,T,I),.01),P=g(p(b,C,I),.01),E=g(A,.01),D=g(b,.01);l.solid.tri(F,P,D,lp),l.solid.tri(F,D,E,lp)}}}function n1(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map($r(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];o&&Fu(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}function Fu(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=Jy[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of js(e,n)){let[u,f,h,d]=c.corners.map(s);i.tri(u,f,h,o.glass),i.tri(u,h,d,o.glass),i.tri(u,h,f,o.glass),i.tri(u,d,h,o.glass);let m=(p,_=.004)=>[p[0]+e.n[0]*_,p[1]+e.n[1]*_,p[2]+e.n[2]*_],x=(p,_,S)=>[p[0]+(_[0]-p[0])*S,p[1]+(_[1]-p[1])*S,p[2]+(_[2]-p[2])*S],g=[u,f,h,d].map(p=>m(p));for(let p=0;p<4;p++)t.seg(g[p],g[(p+1)%4],o.edge);for(let p=1;p<a;p++)t.seg(m(x(u,f,p/a)),m(x(d,h,p/a)),o.cells);for(let p=1;p<l;p++)t.seg(m(x(u,d,p/l)),m(x(f,h,p/l)),o.cells);for(let[p,_]of c.posts)t.seg(s(p),s(_),Ky)}}function i1(i){let t=i.settings.roof,e=t1(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(C=>C.points.map(I=>I[0])),r=e.rooms.flatMap(C=>C.points.map(I=>I[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=new ce,f=new Ve;if(t.type==="flat"){_e(u,[[o,l],[a,l],[a,c],[o,c]],0,.25,to,eo,{bottom:!0});let C=.252;for(let[I,F]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])f.seg([I[0],C,I[1]],[F[0],C,F[1]],ar),f.seg([I[0],0,I[1]],[F[0],0,F[1]],Zr);return{floor:e,base:e.height,solid:u,lines:f,glass:new ce}}let h=a-o>=c-l,d=t.ridge==="short"?!h:h,m=(d?c-l:a-o)/2,x=m*Math.tan(t.pitch*oe),g=(C,I,F)=>d?[C,F,(l+c)/2+I]:[(o+a)/2+I,F,C],[p,_]=d?[o,a]:[l,c],S=new st(eo),v=new st(to),M=(C,I,F,P,E)=>{u.tri(C,I,F,E),u.tri(C,F,P,E)};for(let C of[-1,1]){M(g(p,C*m,0),g(_,C*m,0),g(_,0,x),g(p,0,x),S),M(g(p,C*m,-Oe),g(p,0,x-Oe),g(_,0,x-Oe),g(_,C*m,-Oe),v),M(g(p,C*m,-Oe),g(_,C*m,-Oe),g(_,C*m,0),g(p,C*m,0),v);for(let I of[p,_])M(g(I,C*m,-Oe),g(I,C*m,0),g(I,0,x),g(I,0,x-Oe),v);f.seg(g(p,C*m,0),g(_,C*m,0),Zr);for(let I of[p,_])f.seg(g(I,C*m,0),g(I,0,x),Zr)}let w=t.overhang,A=new st(cp),b=m-w,T=b*Math.tan(t.pitch*oe);for(let C of[p+w,_-w])u.tri(g(C,-b,-Oe),g(C,b,-Oe),g(C,0,T-Oe),A),u.tri(g(C,b,-Oe),g(C,-b,-Oe),g(C,0,T-Oe),A);return f.seg(g(p,0,x+.004),g(_,0,x+.004),ar),{floor:e,base:e.height,solid:u,lines:f,glass:new ce}}function r1(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let r=new Map,s=new Map($r(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=Ad(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new ce,lines:new Ve,glass:new ce,sections:[],lift:!o.open}),c.sections.push(o.id);let u=mu(t,o),f=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,h=t.filter(x=>x!==o&&mu(t,x)===o).flatMap(x=>Td(o,x));for(let x of i.settings.roof.windows??[]){let g=s.get(x.face),p=g&&g.section===o.id?Lu(g,x):null;if(!p)continue;let _=p.map(S=>Li(o,S[0],S[2]));h.push({u0:Math.min(..._.map(S=>S[0])),u1:Math.max(..._.map(S=>S[0])),v0:Math.min(..._.map(S=>S[1])),v1:Math.max(..._.map(S=>S[1]))})}let d=u?gu(u,o):o,m=null;if(u){let x=Wn(d),g=Xr(u,{u0:0,u1:0,a:0,b:0}),p=_=>{let[S,v]=x.at(_,x.w/2),[M,w]=Li(u,S,v);return Zs(g,M,w)??Pn(u).y(w)};m=p(x.u0)<=p(x.u1)?0:1}s1(c.solid,c.lines,d,ml(i,d,d.overhang??e),a.elevation,c.glass,f,h,m)}return[...r.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function s1(i,t,e,n,r,s=i,o=!1,a=[],l=null){let c=Wn(e),u=Pn(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,h=Math.max(0,f.a),d=Math.max(0,f.b),m=c.w,x=c.u0-Math.max(0,f.u0),g=c.u1+Math.max(0,f.u1),p=(P,E,D)=>{let[U,N]=c.at(P,E);return[U,D-r,N]},_=new st(eo),S=new st(to),v=new st(cp),M=(P,E)=>{for(let D=1;D+1<P.length;D++)i.tri(P[0],P[D],P[D+1],E)},w=[],A=[],b=[],T=null;if(e.shape==="flat"||e.shape==="parapet"){let P=e.eave_a,E=e.shape==="parapet",D=e.points&&e.points.length>=3?Sd(e,E?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):E?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,m),c.at(c.u0,m)]:[c.at(x,-h),c.at(g,-h),c.at(g,m+d),c.at(x,m+d)];_e(i,D,P-r,P-r+.25,to,eo,{bottom:!0});for(let U=0;U<D.length;U++){let N=D[U],z=D[(U+1)%D.length];t.seg([N[0],P-r+.252,N[1]],[z[0],P-r+.252,z[1]],ar),t.seg([N[0],P-r,N[1]],[z[0],P-r,z[1]],Zr)}if(E){let U=k=>Gs(k)>=0?k:[...k].reverse(),N=U(D),z=pu(N,-.2),O=N.length;for(let k=0;k<O;k++){let V=U([N[k],N[(k+1)%O],z[(k+1)%O],z[k]]);_e(i,V,P-r+.25,P-r+.65,to,eo),t.seg([N[k][0],P-r+.652,N[k][1]],[N[(k+1)%O][0],P-r+.652,N[(k+1)%O][1]],ar),t.seg([z[k][0],P-r+.652,z[k][1]],[z[(k+1)%O][0],P-r+.652,z[(k+1)%O][1]],ar)}}}else{let P=Xr(e,f);w=P.faces;for(let E of a)w=w.flatMap(D=>Ed(D,E));A=P.rim,b=P.ridges,T=P.gable}let C=!!e.open,I=new st(Yy);for(let P of w){if(C){for(let E=1;E+1<P.length;E++)s.tri(p(P[0][0],P[0][1],P[0][2]),p(P[E][0],P[E][1],P[E][2]),p(P[E+1][0],P[E+1][1],P[E+1][2]),I);continue}M(P.map(([E,D,U])=>p(E,D,U)),_),M(P.map(([E,D,U])=>p(E,D,U-Oe)),S)}for(let P=0;P<A.length;P++){let[E,D,U]=A[P],[N,z,O]=A[(P+1)%A.length];C||M([p(E,D,U),p(N,z,O),p(N,z,O-Oe),p(E,D,U-Oe)],S),t.seg(p(E,D,U),p(N,z,O),C?ar:Zr)}if(C){o1(i,t,c,u,f,p,r);return}for(let[[P,E,D],[U,N,z]]of b)t.seg(p(P,E,D+.004),p(U,N,z+.004),ar);let F=e.base;if(!o){if(T){let P=a1(T,F-Oe),E=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(P.length>=3)for(let D of E)M(P.map(([U,N])=>p(D,U,N)),v)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let P of[0,m]){let E=u.y(P)-Oe;E>F+.02&&M([p(c.u0,P,F),p(c.u1,P,F),p(c.u1,P,E),p(c.u0,P,E)],v)}else if(e.eave_a>F+.02)for(let[P,E,D,U]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,m],[c.u1,m,c.u0,m],[c.u0,m,c.u0,0]])M([p(P,E,F),p(D,U,F),p(D,U,e.eave_a),p(P,E,e.eave_a)],v)}}function o1(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,u=r.a>0,f=r.b>0,h=r.u0>0,d=r.u1>0,m=(p,_,S,v,M,w)=>{let A=[e.at(p,S),e.at(_,S),e.at(_,v),e.at(p,v)],b=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);_e(i,b<0?[...A].reverse():A,M-o,w-o,$y,Zy,{bottom:!0})},x=o;for(let[p,_]of[[0,u],[a,f]]){if(!_)continue;let S=n.y(p)-.03,v=p===0?0:a-l;m(e.u0,e.u1,v,v+l,S-c,S),t.seg(s(e.u0,p,S-c),s(e.u1,p,S-c),Zr)}for(let[p,_]of[[e.u0,h],[e.u1-l,d]])if(_)for(let S=0;S<6;S++){let v=a*S/6,M=a*(S+1)/6,w=Math.min(n.y(v),n.y(M))-.03;m(p,p+l,v,M,w-c,w)}let g=[];for(let[p,_]of[[0,u],[a-l,f]]){if(!_)continue;let S=e.u1-e.u0-l,v=Math.max(1,Math.ceil(S/3.5));for(let M=0;M<=v;M++){let w=e.u0+S*M/v;M===0&&!h||M===v&&!d||g.push([w,p])}}if(!u&&!f)for(let p of[e.u0,e.u1-l])(p===e.u0&&h||p!==e.u0&&d)&&g.push([p,a/2-l/2]);for(let[p,_]of g){let S=n.y(_+l/2)-.03-c;m(p,p+l,_,_+l,x,S)}}function a1(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var Ui=.2,Nu=15,no=8,Tl=.42,Du=.42;function mp(i,t,e,n=[],r=[],s){let{walls:o,open:a}=qs(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(E,D,U)=>{let N=s?s(E,D):null;return N===null?U:Math.max(.05,Math.min(U,N))},c=(E,D,U,N,z)=>{if(!s)return z;let O=z,k=Math.max(2,Math.ceil((N-U)/.25)+1);for(let V=0;V<k;V++){let it=U+(N-U)*V/(k-1);O=Math.min(O,l(E[0]+D[0]*it,E[1]+D[1]*it,z))}return O},u=new ce(!0,!0),f=[],h=new Ve,d=[];for(let E of i.rooms){if(E.points.length<3)continue;let D=pp(Hn(E)?d1(E):E.points),U=Yr[E.floor_material]??Yr.wood,N=new st(U.color),z=n.filter(et=>Cd(et,D)).map(et=>Id(et,.003));d.push(...z);let O=[...D,...z.flat()],k=u.count;for(let[et,lt,j]of qr(D,z)){let ut=O[et],X=O[lt],$=O[j];u.tri([ut[0],0,ut[1]],[$[0],0,$[1]],[X[0],0,X[1]],N,N,N,[ut[0],ut[1],$[0],$[1],X[0],X[1]],ee,U.tile)}f.push({roomId:E.id,start:k,end:u.count,color:U.color});let V=new st(on.slab),it=et=>{for(let lt=0;lt<et.length;lt++){let j=et[lt],ut=et[(lt+1)%et.length];u.tri([j[0],-Ui,j[1]],[j[0],0,j[1]],[ut[0],0,ut[1]],V),u.tri([j[0],-Ui,j[1]],[ut[0],0,ut[1]],[ut[0],-Ui,ut[1]],V)}};it(D);for(let et of z){it([...pp(et)].reverse());for(let lt=0;lt<et.length;lt++){let j=et[lt],ut=et[(lt+1)%et.length];h.seg([j[0],.006,j[1]],[ut[0],.006,ut[1]],nr),h.seg([j[0],-Ui,j[1]],[ut[0],-Ui,ut[1]],Fi)}}}let m=new Map,x=[],g=new Map;for(let E of o){let D="interior",U=null;if(E.exterior){let z=E.b[0]-E.a[0],O=E.b[1]-E.a[1],k=Math.hypot(z,O)||1,V=[O/k,-z/k],it=(Math.round(Math.atan2(V[1],V[0])/(2*Math.PI)*no)%no+no)%no;D=`s${it}`;let et=it/no*2*Math.PI;U=[Math.cos(et),Math.sin(et)]}let N=m.get(D);N===void 0&&(N=x.length,m.set(D,N),x.push(U)),g.set(E,N)}let p=new Map,_=[];for(let E of i.openings){let D=_d(E,i.rooms,i.walls??[]);if(!D)continue;let U=vd(o,E,D);if(!U)continue;let{wall:N,s:z}=U,O=Rl([N.b[0]-N.a[0],N.b[1]-N.a[1]]),k=Math.hypot(N.b[0]-N.a[0],N.b[1]-N.a[1]),V=Math.min(E.width,k),it=Math.max(0,Math.min(k-V,z-V/2)),et=D.room.points,lt=N.free?O[0]*(et[1][0]-et[0][0])+O[1]*(et[1][1]-et[0][1])>0:N.roomLeft===E.room_id,j=[-O[1],O[0]],ut=lt?j:[-j[0],-j[1]],X=Math.min(c(N.a,O,it,it+V,El(N,i.height))-.02,E.sill+E.height),$=Math.max(0,Math.min(E.sill,X-.1)),ct=[ut[1],-ut[0]],gt=O[0]*ct[0]+O[1]*ct[1]>0,ft={opening:E,bucket:g.get(N),start:[N.a[0]+O[0]*it,N.a[1]+O[1]*it],axis:O,width:V,toRoom:ut,faceRoom:lt?N.left:N.right,faceOut:lt?N.right:N.left,sill:$,top:X,hingeAtStart:E.hinge==="left"===gt,exterior:N.exterior};_.push(ft);let Pt=p.get(N);Pt||p.set(N,Pt=[]),Pt.push({s0:it,s1:it+V,sill:$,top:X,info:ft})}let S=Math.min(i.cut_height,i.height),v=new ce;for(let E of o){let D=g.get(E),U=Rl([E.b[0]-E.a[0],E.b[1]-E.a[1]]),N=(p.get(E)??[]).sort((lt,j)=>lt.s0-j.s0),z=El(E,i.height),O=[],k=[-1/0,...new Set(N.flatMap(lt=>[lt.s0,lt.s1])).values(),1/0].sort((lt,j)=>lt-j);for(let lt=0;lt+1<k.length;lt++){let j=k[lt],ut=k[lt+1];if(ut-j<1e-6)continue;let X=Number.isFinite(j)&&Number.isFinite(ut)?(j+ut)/2:Number.isFinite(j)?j+1:ut-1,$=N.filter(ft=>ft.s0<X&&ft.s1>X).map(ft=>[ft.sill,ft.top]).sort((ft,Pt)=>ft[0]-Pt[0]),ct=[],gt=-Ui;for(let[ft,Pt]of $)ft>gt+1e-4&&ct.push([gt,ft]),gt=Math.max(gt,Pt);z>gt+1e-4&&ct.push([gt,z]),O.push({t0:j,t1:ut,ranges:ct})}let V=Math.hypot(E.b[0]-E.a[0],E.b[1]-E.a[1]),it=s&&c(E.a,U,0,V,z)<z-.001,et=it?O.flatMap(lt=>{let j=Math.max(lt.t0,-.5),ut=Math.min(lt.t1,V+.5),X=Math.max(1,Math.ceil((ut-j)/.3));return Array.from({length:X},($,ct)=>({t0:ct===0?lt.t0:j+(ut-j)*ct/X,t1:ct===X-1?lt.t1:j+(ut-j)*(ct+1)/X,ranges:lt.ranges}))}):O;for(let lt of et){let j=c1(E.footprint,E.a,U,lt.t0,lt.t1);if(j.length<3)continue;let ut=it?Math.min(...j.map(([X,$])=>l(X,$,z))):z;for(let[X,$]of lt.ranges){let ct=Math.min($,it?Math.max(...j.map(([ie,kt])=>l(ie,kt,z))):$);if(ct-X<1e-4||ut-X<.01)continue;let gt=X>.01,ft=it&&$>ut,Pt=(ie,kt)=>Math.min($,l(ie,kt,z));if(X<S-1e-6){let ie=ct>S+1e-6?Ld+D:ir+D,kt=ft&&ut<S?($t,re)=>Math.min(S,Pt($t,re)):Math.min(ct,S);_e(v,j,X,kt,on.wall,on.wallTop,{aoFrom:0,bottom:gt,fold:ir+D,topFold:ie})}ct>S+1e-6&&ut>S+1e-6&&_e(v,j,Math.max(X,S),ft?Pt:ct,on.wall,on.wallTop,{aoFrom:0,fold:D,bottom:gt&&X>=S})}}}let M=o.flatMap(E=>E.footprint),w=h1(o,M),A=new Ve;A.p.push(...h.p),A.c.push(...h.c),A.f.push(...h.f);let b=(E,D)=>(p.get(E)??[]).filter(D);for(let E of w.edges){let D=g.get(E.wall);for(let[N,z]of Al(E,b(E.wall,O=>O.sill<=.005)))A.seg([N[0],.004,N[1]],[z[0],.004,z[1]],Pd);for(let[N,z]of Al(E,b(E.wall,O=>O.sill<S&&O.top>S)))A.seg([N[0],S,N[1]],[z[0],S,z[1]],vu,xl+D);let U=El(E.wall,i.height);for(let[N,z]of Al(E,b(E.wall,O=>O.top>=U-.021))){if(!s){A.seg([N[0],U,N[1]],[z[0],U,z[1]],nr,U<=S+1e-6?ir+D:D);continue}let O=Math.max(1,Math.ceil(Math.hypot(z[0]-N[0],z[1]-N[1])/.3));for(let k=0;k<O;k++){let V=[N[0]+(z[0]-N[0])*k/O,N[1]+(z[1]-N[1])*k/O],it=[N[0]+(z[0]-N[0])*(k+1)/O,N[1]+(z[1]-N[1])*(k+1)/O],et=l(V[0],V[1],U),lt=l(it[0],it[1],U);A.seg([V[0],et,V[1]],[it[0],lt,it[1]],nr,Math.max(et,lt)<=S+1e-6?ir+D:D)}}}for(let E of w.corners){let D=l(E.p[0],E.p[1],El(E.wall,i.height));A.segSplit([E.p[0],.004,E.p[1]],[E.p[0],D,E.p[1]],Fi,Math.min(S,D),g.get(E.wall))}for(let E of p.values())for(let D of E)l1(A,D,S);let T=f1(w.edges,i.rooms,p),C=i.rooms.filter(Hn).map(E=>({id:E.id,type:E.kind,points:E.points,roof_style:E.roof_style,railing:E.railing,columns:E.columns,column_size:E.column_size,height:E.height??i.height,slope:E.slope,slope_dir:E.slope_dir,open:E.open??!0,roomColor:(Yr[E.floor_material]??Yr.wood).color,offset:-ei(i)-ks(E.kind)})),I=jd(v,A,i,C,Nu),F=Qd(v,A,i);for(let E of r)Fu(v,A,E.face,E.field,i.elevation);let P=[];for(let E of i.furniture){if(cd(E.type))continue;let D=v.count,U=A.p.length/6,N=dn(i,E);vl(v,A,T,E,N),N+E.h>S+.05&&(Fd(v,D,S,yu),Dd(A,U,S,yu)),P.push({id:E.id,start:D,end:v.count})}return{floor:u.geometry(),roomTris:f,holes:d,walls:v.geometry(),lines:A.geometry(),shadow:T.geometry(),buckets:x,openings:_,walls2d:o,openRooms:a,wallBuckets:o.map(E=>g.get(E)),furnitureTris:P,outdoorTris:F,coveredRoomTris:I}}function l1(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,u)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:ee,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Fi,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Fi,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Fi,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Fi,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Fi,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),vu,xl+r)}function c1(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=hp(o,a=>s(a)-n)),Number.isFinite(r)&&(o=hp(o,a=>r-s(a))),o}function hp(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var fp=i=>Math.round(i*1e3),io=i=>`${fp(i[0])},${fp(i[1])}`,dp=(i,t)=>{let e=io(i),n=io(t);return e<n?`${e}|${n}`:`${n}|${e}`};function u1(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let f of t){let h=((f[0]-r[0])*o+(f[1]-r[1])*a)/l;if(h<=1e-6||h>=1-1e-6)continue;Math.abs((f[0]-r[0])*a-(f[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(h)}c.sort((f,h)=>f-h);let u=r;for(let f of c){let h=[r[0]+o*f,r[1]+a*f];io(h)!==io(u)&&e.push([u,h]),u=h}e.push([u,s])}return e}function h1(i,t){let e=i.map(l=>({wall:l,edges:u1(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,u]of l){let f=dp(c,u);n.set(f,(n.get(f)??0)+1)}let r=[],s=new Map,o=(l,c,u)=>{let f=io(l),h=s.get(f);h||s.set(f,h={p:l,wall:c,d:[]}),h.d.push(u)};for(let{wall:l,edges:c}of e)for(let[u,f]of c){if(n.get(dp(u,f))!==1)continue;let h=Math.hypot(f[0]-u[0],f[1]-u[1]);if(h<1e-4)continue;r.push({a:u,b:f,wall:l});let d=[(f[0]-u[0])/h,(f[1]-u[1])/h];o(u,l,d),o(f,l,d)}let a=[];for(let{p:l,wall:c,d:u}of s.values())u.some(f=>u.some(h=>Math.abs(f[0]*h[1]-f[1]*h[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function Al(i,t){if(!t.length)return[[i.a,i.b]];let e=Rl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Rl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=f=>(f[0]-i.wall.a[0])*e[0]+(f[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let f of t)c=c.flatMap(([h,d])=>{if(f.s1<=h||f.s0>=d)return[[h,d]];let m=[];return f.s0>h&&m.push([h,f.s0]),f.s1<d&&m.push([f.s1,d]),m});let u=f=>{let h=(f-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*h,i.a[1]+(i.b[1]-i.a[1])*h]};return c.filter(([f,h])=>h-f>1e-4).map(([f,h])=>s<=o?[u(f),u(h)]:[u(h),u(f)])}function f1(i,t,e){let n=new ce,r=new st(Du,Du,Du),s=new st(1,1,1),o=.002;for(let a of i)for(let[l,c]of Al(a,(e.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],f=c[1]-l[1],h=Math.hypot(u,f);if(h<.05)continue;let d=[f/h,-u/h],m=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&ue(m,p.points)))continue;let x=[l[0]+d[0]*Tl,l[1]+d[1]*Tl],g=[c[0]+d[0]*Tl,c[1]+d[1]*Tl];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[g[0],o,g[1]],r,s,s),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],r,s,r)}return n}function gp(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(pl),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return _u(e);let r=n.furniture.filter(s=>(s.type==="stairs"||s.type==="stairs_landing"||De(s.type)?.hole)&&n.elevation+s.h>=t.elevation-.3).map(pl);return _u([...e,...r])}function El(i,t){return Math.min(t,i.height??t)}function Rl(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function pp(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function d1(i){let t=i.points,e=t.length;if(e<3)return t;let n=0;for(let c=0;c<e;c++)n+=t[c][0]*t[(c+1)%e][1]-t[(c+1)%e][0]*t[c][1];let r=n>=0?1:-1,s=(i.column_size??(i.kind==="veranda"?.32:.12))/2,o=i.kind==="veranda"?s*1.375:s,a=i.open!==!1?e-1:-1,l=t.map((c,u)=>{let f=t[(u+1)%e],h=f[0]-c[0],d=f[1]-c[1],m=Math.hypot(h,d)||1,x=u===a?0:o,g=[d/m*r,-h/m*r];return{p:[c[0]+g[0]*x,c[1]+g[1]*x],d:[h/m,d/m],normal:g,offset:x}});return t.map((c,u)=>{let f=l[(u-1+e)%e],h=l[u],d=f.d[0]*h.d[1]-f.d[1]*h.d[0];if(Math.abs(d)<1e-6)return[c[0]+h.normal[0]*h.offset,c[1]+h.normal[1]*h.offset];let m=((h.p[0]-f.p[0])*h.d[1]-(h.p[1]-f.p[1])*h.d[0])/d;return[f.p[0]+f.d[0]*m,f.p[1]+f.d[1]*m]})}var p1=500,xp=.12,bp=1.35,m1=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Cl=class{view={target:new G,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,f=Math.min(1,(t-c)/u),h=m1(f);this.view.target.lerpVectors(a.target,l.target,h),this.view.radius=a.radius+(l.radius-a.radius)*h,this.view.theta=a.theta+(l.theta-a.theta)*h,this.view.phi=a.phi+(l.phi-a.phi)*h,f>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Uu(this.view.phi+this.velocity.phi,xp,bp),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},r=t.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let s={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:r,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:n,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab?.(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},p1)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag?.(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}if(e.button===1||e.button===2||t.shiftKey)this.pan(n,r);else{let o=this.el.clientHeight||1,a=-n/o*3.2,l=-r/o*2.4;this.view.theta+=a,this.view.phi=Uu(this.view.phi+l,xp,bp),this.velocity={theta:a,phi:l}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,s=performance.now();s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=s,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=Uu(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new G(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new G(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Uu(i,t,e){return Math.min(e,Math.max(t,i))}function oi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"||e==="roof"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if ((fp3dGlass && fp3dWall) || (fp3dBucket == 15 && fp3dKind == 0)) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
          ${e==="roof"?"fp3dShow = fp3dShow && fp3dBucket == 15 && fp3dKind == 0;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"?n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`):e==="roof"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= 0.48;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var ro=(i,t,e,n,r)=>{i.expandByPoint(new G(t,n,e)),i.expandByPoint(new G(t,r,e))};function _p(i){let t=new Qe;for(let{floor:e,ty:n}of i){let r=e.elevation+n;for(let s of e.rooms)for(let[o,a]of s.points)ro(t,o,a,r,r+e.height);for(let s of e.outdoor??[]){let o=r+ei(e)+(s.offset??0),a=o-(s.type==="pool"?0:s.slope??0),l=ti(s.type)&&s.height?s.height:Hr[s.type],c=o+(s.type==="pool"?.06:l);for(let[u,f]of s.points)ro(t,u,f,a,c)}for(let s of e.walls??[]){let o=r+Math.min(e.height,s.height??e.height);ro(t,s.a[0],s.a[1],r,o),ro(t,s.b[0],s.b[1],r,o)}}return t}function vp(i,t,e){let n=new Qe,r=i.elevation+e;for(let[s,o]of t.points)ro(n,s,o,r,r+(Hn(t)?t.height??i.height:i.height));return n}function Ou(i,t,e,n,r,s=1){if(i.isEmpty())return 0;let o=i.getCenter(new G),a=new G(Math.sin(e)*Math.sin(t),Math.cos(e),Math.sin(e)*Math.cos(t)),l=new G(Math.cos(t),0,-Math.sin(t)),c=new G(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)),u=Math.tan(r/2),f=u*Math.max(.01,n),h=0;for(let d of[i.min.x,i.max.x])for(let m of[i.min.y,i.max.y])for(let x of[i.min.z,i.max.z]){let g=new G(d,m,x).sub(o),p=g.dot(a);h=Math.max(h,p+Math.abs(g.dot(l))*s/f,p+Math.abs(g.dot(c))*s/u)}return h}function yp(i,t,e,n,r=1){let s=i.getSize(new G),o=Math.max(.01,Math.min(s.x,s.z)),a=Math.max(s.x,s.z)/o>=2,l=-.6;return a&&e>=1.2&&(l=s.z>=s.x?-.95:-.35),{theta:l,radius:Ou(i,l,t,e,n,r)}}function Bu(i,t,e,n,r,s,o=8){if(i.isEmpty())return{radius:0,offset:new G};let a=Math.max(1,s.width),l=Math.max(1,s.height),c=-1+2*Math.max(0,s.left)/a,u=1-2*Math.max(0,s.right)/a,f=-1+2*Math.max(0,s.bottom)/l,h=1-2*Math.max(0,s.top)/l;if(c>=u||f>=h)return{radius:Ou(i,t,e,n,r),offset:new G};let d=i.getCenter(new G),m=new G(Math.sin(e)*Math.sin(t),Math.cos(e),Math.sin(e)*Math.cos(t)),x=new G(Math.cos(t),0,-Math.sin(t)),g=new G(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)),p=Math.tan(r/2),_=p*Math.max(.01,n),S=[];for(let F of[i.min.x,i.max.x])for(let P of[i.min.y,i.max.y])for(let E of[i.min.z,i.max.z]){let D=new G(F,P,E).sub(d);S.push({x:D.dot(x),y:D.dot(g),near:D.dot(m)})}let v=F=>{let P=-1/0,E=1/0,D=-1/0,U=1/0;for(let N of S){let z=F-N.near;P=Math.max(P,N.x-u*_*z),E=Math.min(E,N.x-c*_*z),D=Math.max(D,N.y-h*p*z),U=Math.min(U,N.y-f*p*z)}return{x0:P,x1:E,y0:D,y1:U}},M=Math.max(...S.map(F=>F.near))+.1,w=F=>{let P=v(F);return P.x0<=P.x1&&P.y0<=P.y1},A=Math.max(M,o),b=Math.max(A,Ou(i,t,e,n,r));for(;!w(b);)b*=2;for(let F=0;F<60;F++){let P=(A+b)/2;w(P)?b=P:A=P}let T=v(b),C=(T.x0+T.x1)/2,I=(T.y0+T.y1)/2;return{radius:b,offset:x.multiplyScalar(C).add(g.multiplyScalar(I))}}function g1(i,t){let e=De(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function zu(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?g1(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function ku(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let u=e.length/3,f=c.portrait===!1?10:6,h=c.portrait===!1?6:10,d=x1(c.id)%1e3/1e3;for(let x of js(l,c)){let[g,p,_,S]=x.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[g,0,0],[p,1,0],[_,1,1],[S,0,1]];for(let M of[0,1,2,0,2,3]){let[w,A,b]=v[M];e.push(w[0],w[1],w[2]),n.push(A,b),r.push(f,h),s.push(d)}}let m=e.length/3-u;m&&o.push({id:c.id,start:u,count:m})}if(!e.length)return null;let a=new Jt;return a.setAttribute("position",new Vt(e,3)),a.setAttribute("uv",new Vt(n,2)),a.setAttribute("aCells",new Vt(r,2)),a.setAttribute("aPhase",new Vt(s,1)),a.setAttribute("aLevel",new Vt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function so(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function Vu(i){let t=new le({transparent:!0,blending:Fe,depthWrite:!1,side:Me});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function x1(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var Mp=["neon","blueprint","day"];function Sp(i){return Mp.indexOf(i)}var Il={value:new G(.22,.88,1)},Pl={value:0};function wp(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var b1=`
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
`;function Fn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=Il,s.uniforms.uAccentOn=Pl,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${b1}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function Ll(i){return i==="day"?Ei:Fe}var oo=.012,_1=.012;function Ep(i,t,e,n,r,s=[]){let o=[],a=[],l=[],c=[],u=(m,x,g,p,_,S,v)=>{for(let M of[m,x,g,m,g,p])o.push(M[0],M[1],M[2]),a.push(_[0],_[1],_[2]),l.push(S),c.push(v)};i.rooms.forEach((m,x)=>{if(m.points.length<3)return;let g=m.points.map(w=>w[0]),p=m.points.map(w=>w[1]),_=Math.min(...g),S=Math.min(...p),v=Math.max(1,Math.ceil((Math.max(...g)-_)/r)),M=Math.max(1,Math.ceil((Math.max(...p)-S)/r));for(let w=0;w<v;w++)for(let A=0;A<M;A++){let b=_+(w+.5)*r,T=S+(A+.5)*r;if(!ue([b,T],m.points)||s.some(F=>ue([b,T],F)))continue;let C=_+w*r,I=S+A*r;u([C,oo,I],[C,oo,I+r],[C+r,oo,I+r],[C+r,oo,I],[0,1,0],x,-1)}});let f=i.rooms.length;for(let m of i.outdoor??[]){if(m.points.length<3||ti(m.type))continue;let x=Jd(i,m)+oo,g=m.points.map(w=>w[0]),p=m.points.map(w=>w[1]),_=Math.min(...g),S=Math.min(...p),v=Math.max(1,Math.ceil((Math.max(...g)-_)/r)),M=Math.max(1,Math.ceil((Math.max(...p)-S)/r));for(let w=0;w<v;w++)for(let A=0;A<M;A++){if(!ue([_+(w+.5)*r,S+(A+.5)*r],m.points))continue;let b=_+w*r,T=S+A*r;u([b,x,T],[b,x,T+r],[b+r,x,T+r],[b+r,x,T],[0,1,0],f,-1)}}let h=Math.min(i.cut_height,i.height);t.forEach((m,x)=>{let g=Math.min(i.height,m.height??i.height),p=Math.min(h,g-.02),_=m.b[0]-m.a[0],S=m.b[1]-m.a[1],v=Math.hypot(_,S);if(v<.05)return;let M=[_/v,S/v],w=[-M[1],M[0]],A=e[x],b=v1(m,M,v,n),T=(F,P,E)=>[P,E,...F.filter(D=>D>P+.005&&D<E-.005)].sort((D,U)=>D-U).filter((D,U,N)=>U===0||D>N[U-1]+.005),C=T([p,(p+g)/2,...b.flatMap(F=>[F.y0+.01,F.y1-.01])],.02,g-.02),I=T(b.flatMap(F=>[F.s0,F.s1]),0,v);for(let F of[1,-1]){let P=F>0?m.roomLeft:m.roomRight,E=P?i.rooms.findIndex(z=>z.id===P):m.exterior?f:-1;if(E<0)continue;let D=(F>0?m.left:m.right)+_1,U=[w[0]*F,w[1]*F],N=(z,O)=>[m.a[0]+M[0]*z+U[0]*D,O,m.a[1]+M[1]*z+U[1]*D];for(let z=0;z<I.length-1;z++){let O=I[z+1]-I[z],k=Math.max(1,Math.ceil(O/r));for(let V=0;V<k;V++){let it=I[z]+O/k*V,et=I[z]+O/k*(V+1),lt=(it+et)/2;for(let j=0;j<C.length-1;j++){let ut=C[j],X=C[j+1];if(X-ut<.01)continue;let $=(ut+X)/2;if(b.some(gt=>lt>gt.s0&&lt<gt.s1&&$>gt.y0&&$<gt.y1))continue;let ct=ut>=h-1e-6?A:ir+A;u(N(it,ut),N(et,ut),N(et,X),N(it,X),[U[0],0,U[1]],E,ct)}}}}});let d=[];for(let m of n){if(m.opening.type!=="door")continue;let x=t.find(_=>Ap(_,m));if(!x||!x.roomLeft||!x.roomRight)continue;let g=i.rooms.findIndex(_=>_.id===x.roomLeft),p=i.rooms.findIndex(_=>_.id===x.roomRight);g<0||p<0||d.push({id:m.opening.id,a:g,b:p,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(o),normal:new Float32Array(a),room:Int16Array.from(l),fold:new Float32Array(c),doors:d}}function Ap(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function v1(i,t,e,n){let r=[];for(let s of n){if(!Ap(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function y1(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function M1(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Tp(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,u=a*a+l*l+c*c,f=Math.sqrt(u)||1e-6,h=M1(i),d=1/(1+u/(h*h)),m=d*Math.sqrt(d),x=Math.max(0,-(a*r+l*s+c*o)/f);return i.level*m*(.2+.8*x)*y1(i.kind,l/f)}function Rp(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,f)=>{let h=n[f]??.5;if(!(h<=.01))for(let[d,m]of[[u.a,u.b],[u.b,u.a]]){let x=[0,0,0];for(let p of t){if(p.room!==d)continue;let _=p.x-u.x,S=p.y-u.y,v=p.z-u.z,M=Math.hypot(_,S,v)||1,w=Tp(p,u.x,u.y,u.z,_/M,S/M,v/M);x[0]+=p.color[0]*w,x[1]+=p.color[1]*w,x[2]+=p.color[2]*w}let g=Math.max(x[0],x[1],x[2]);g<.01||r.push({x:u.x,y:u.y,z:u.z,color:[x[0]/g,x[1]/g,x[2]/g],level:Math.min(1,g*.9*(.35+.65*h)),kind:"wall",room:m})}});let s=new Map;for(let u of r){let f={...u,color:u.color.map(h=>Math.pow(h,1.5))};s.set(u.room,[...s.get(u.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let u=0;u<l.length;u++){let f=s.get(l[u]);if(!f)continue;let h=u*3,d=0,m=0,x=0;for(let g of f){let p=Tp(g,o[h],o[h+1],o[h+2],a[h],a[h+1],a[h+2]);d+=g.color[0]*p,m+=g.color[1]*p,x+=g.color[2]*p}c[h]=1-Math.exp(-d*e*1.6),c[h+1]=1-Math.exp(-m*e*1.6),c[h+2]=1-Math.exp(-x*e*1.6)}return c}function Cp(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&ue([t,e],r.points));return n<0?i.rooms.length:n}function Ip(i,t){return i&&t>=0&&t<i.length?i[t]:t}var Dl={open:0,open2:0,tilt:0,tilt2:0,cover:null},Pp=2043986,Lp=2769520,S1=2242399,Gu=1845831,w1=1450554,ai=16758087,T1=1.2,E1=1.5,A1=1846349,R1=2572395,C1=1120816,I1=1845831,Fp=5995775,Dp=9085695,Jr=Ht(3662079,.08),P1=.2;function Fl(i,t,e,n,r,s,o,a,l,c,u){let f=(d,m,x)=>t(d,m,x),h=[[f(e,r,a),f(n,r,a),f(n,s,a),f(e,s,a),c],[f(e,r,o),f(n,r,o),f(n,s,o),f(e,s,o),Ht(l.getHex(),.6)],[f(e,s,o),f(n,s,o),f(n,s,a),f(e,s,a),l],[f(e,r,o),f(n,r,o),f(n,r,a),f(e,r,a),Ht(l.getHex(),.85)],[f(e,r,o),f(e,s,o),f(e,s,a),f(e,r,a),Ht(l.getHex(),.92)],[f(n,r,o),f(n,s,o),f(n,s,a),f(n,r,a),Ht(l.getHex(),.92)]];for(let[d,m,x,g,p]of h)i.tri(d,m,x,p,p,p,void 0,u),i.tri(d,x,g,p,p,p,void 0,u)}function ae(i,t,e,n,r,s,o,a,l,c,u,f){if(a<=u+1e-6)return Fl(i,t,e,n,r,s,o,a,l,c,ee);if(o>=u-1e-6)return Fl(i,t,e,n,r,s,o,a,l,c,f);Fl(i,t,e,n,r,s,o,u,l,c,ee),Fl(i,t,e,n,r,s,u,a,l,c,f)}function Oi(i,t,e,n,r,s,o,a,l,c,u=0){let f=(h,d,m)=>{let x=v=>u?(o-v)/u:.5,g=t(e,r,h),p=t(n,r,h),_=t(n,r,d),S=t(e,r,d);i.tri(g,p,_,a,a,a,[0,x(h),1,x(h),1,x(d)],m),i.tri(g,_,S,a,a,a,[0,x(h),1,x(d),0,x(d)],m)};o<=l+1e-6?f(s,o,ee):s>=l-1e-6?f(s,o,c):(f(s,l,ee),f(l,o,c))}function L1(i,t,e,n,r,s,o,a,l,c){let u=t(e,r,o),f=t(n,r,o),h=t(n,s,o),d=t(e,s,o),m=0,x=(s-r)/c;i.tri(u,f,h,a,a,a,[0,m,1,m,1,x],l),i.tri(u,h,d,a,a,a,[0,m,1,x,0,x],l)}function Np(i,t,e){let n=new ce,r=new ce,s=new ce(!0),o=new st(Pp),a=new st(Lp),l=[],c=[],u=[];for(let f of i){let h=n.count,d=r.count,m=s.count,x=t.get(f.opening.id)??Dl,g=f.width,{sill:p,top:_,bucket:S}=f,v=(b,T,C)=>[f.start[0]+f.axis[0]*b+f.toRoom[0]*T,C,f.start[1]+f.axis[1]*b+f.toRoom[1]*T],M=(f.faceRoom-f.faceOut)/2,w=f.opening.mark==="closed",A=f.opening.type==="door"&&tr(f.opening,f.exterior)==="passage";if(f.opening.type==="door"&&!A||f.opening.type==="garage"){let b=-f.faceOut-.012,T=f.faceRoom+.012,C=f.opening.type==="garage"&&(w?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),I=C?Ht(ai,.8):new st(Pp),F=C?Ht(ai,1):new st(Lp);ae(n,v,-.045,.02,b,T,0,_+.045,I,F,e,S),ae(n,v,g-.02,g+.045,b,T,0,_+.045,I,F,e,S),ae(n,v,.02,g-.02,b,T,_-.02,_+.045,I,F,e,S)}if(f.opening.type==="door"){let b=tr(f.opening,f.exterior),T=hd(b),C=f.opening.swing==="out"?-1:1,I=C>0?f.faceRoom:-f.faceOut,F=f.opening.leaves===2,P=.02,E=g-.02,D=ud(g,b,f.hingeAtStart,f.opening);if(D){for(let[O,k]of D.panels)ae(n,v,O,O+.04,M-.03,M+.03,.02,_-.02,o,a,e,S),ae(n,v,k-.04,k,M-.03,M+.03,.02,_-.02,o,a,e,S),ae(n,v,O,k,M-.03,M+.03,.02,.1,o,a,e,S),Oi(r,v,O+.04,k-.04,M,.1,_-.02,Jr,e,S);P=D.x0,E=D.x1}let U=F?(E-P)/2-.004:E-P,N=T?.06:.04;T&&(ae(n,v,.02,g-.02,-f.faceOut-.02,f.faceRoom,0,.02,new st(Gu),a,e,S),f.exterior&&ae(n,v,g/2-.08,g/2+.08,-f.faceOut-.1,-f.faceOut,_+.1,_+.17,Ht(ai,.55),Ht(ai,.85),e,ee));let z=A?[]:[[f.hingeAtStart,x.open]];F&&!A&&z.push([!f.hingeAtStart,x.open2??0]);for(let[O,k]of z){let V=Math.min(1,Math.max(0,k)),it=b==="sliding"?0:V*E1,et=b==="sliding"?V*U:0,lt=(ie,kt,$t)=>{let re=ie*Math.cos(it)-kt*Math.sin(it)-et,Kt=I+C*(kt*Math.cos(it)+ie*Math.sin(it)+(et?.05:0));return v(O?P+re:E-re,Kt,$t)},j=V>.05?ee:S,ut=w?!!x.sensed&&V<.05:V>.9,X=ut?Ht(ai,.7):new st(T?C1:A1),$=ut?Ht(ai,.9):new st(T?I1:R1);b==="glass"?(ae(n,lt,0,.05,-N,0,.01,_-.01,X,$,e,j),ae(n,lt,U-.05,U,-N,0,.01,_-.01,X,$,e,j),ae(n,lt,.05,U-.05,-N,0,.01,.12,X,$,e,j),ae(n,lt,.05,U-.05,-N,0,_-.08,_-.01,X,$,e,j),Oi(r,lt,.05,U-.05,-N/2,.12,_-.08,Jr,e,j)):ae(n,lt,0,U,-N,0,.01,_-.01,X,$,e,j),b==="front_glass"?Oi(r,lt,.12,U-.12,.001,_*.55,_-.18,Jr,e,j):T&&Oi(r,lt,.1,.18,.001,.3,_-.3,Jr,e,j);let ct=Math.min(1.05,_*.5),gt=T?.3:.012,ft=T?U-.11:U-.16,Pt=T?U-.08:U-.05;ae(n,lt,ft,Pt,.004,.05,ct-gt,ct+gt,new st(Fp),new st(Dp),e,j),ae(n,lt,ft,Pt,-N-.05,-N-.004,ct-gt,ct+gt,new st(Fp),new st(Dp),e,j)}}else if(f.opening.type==="garage"){let b=Math.min(1,Math.max(0,x.cover??1)),T=new st(13951231),C=f.faceRoom-.03,I=_*(1-b);b>.01&&Oi(s,v,.02,g-.02,C,I,_,T,e,S,.5);let F=(1-b)*_;F>.01&&L1(s,v,.02,g-.02,C,C+F,_+.03,T,S,.5)}else if(tr(f.opening,f.exterior)==="glass_wall"){ae(n,v,0,.04,M-.025,M+.025,p,_,o,a,e,S),ae(n,v,g-.04,g,M-.025,M+.025,p,_,o,a,e,S),ae(n,v,.04,g-.04,M-.025,M+.025,p,p+.03,o,a,e,S),ae(n,v,.04,g-.04,M-.025,M+.025,_-.04,_,o,a,e,S);let C=Math.max(1,Math.round((g-2*.04)/.9)),I=(g-2*.04)/C;for(let F=1;F<C;F++){let P=.04+F*I;ae(n,v,P-.02,P+.02,M-.025,M+.025,p+.03,_-.04,o,a,e,S)}for(let F=0;F<C;F++){let P=.04+F*I+(F?.02:0),E=.04+(F+1)*I-(F<C-1?.02:0);Oi(r,v,P,E,M,p+.03,_-.04,Jr,e,S)}}else{ae(n,v,0,.06,M-.035,M+.035,p,_,o,a,e,S),ae(n,v,g-.06,g,M-.035,M+.035,p,_,o,a,e,S),ae(n,v,.06,g-.06,M-.035,M+.035,p,p+(p>.05?.06:.03),o,a,e,S),ae(n,v,.06,g-.06,M-.035,M+.035,_-.06,_,o,a,e,S),p>.3&&(ae(n,v,-.04,g+.04,M+.035,f.faceRoom+.07,p-.03,p,new st(Gu),a,e,S),f.exterior&&ae(n,v,-.03,g+.03,-f.faceOut-.06,M-.035,p-.04,p-.02,new st(Gu),a,e,S));let C=.055,I=p+(p>.05?.06:.03),F=_-.06,P=M+.035,E=M+.035+.06,U=f.opening.leaves===2?[{atStart:f.hingeAtStart,x0:f.hingeAtStart?.06:g/2,x1:f.hingeAtStart?g/2:g-.06,open:x.open,tilt:x.tilt},{atStart:!f.hingeAtStart,x0:f.hingeAtStart?g/2:.06,x1:f.hingeAtStart?g-.06:g/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:f.hingeAtStart,x0:.06,x1:g-.06,open:x.open,tilt:x.tilt}];for(let N of U){let z=N.open>.02||N.tilt>.02,O=w?!!x.sensed&&!z:z,k=O?Ht(ai,.75):new st(S1),V=O?Ht(ai,.95):a,it=N.x0,et=N.x1,lt=et-it,j=N.open*T1,ut=N.tilt*P1,X=(ct,gt,ft)=>{let Pt=ft-I,ie=gt+Pt*Math.sin(ut),kt=I+Pt*Math.cos(ut),$t=ct*Math.cos(j)-(ie-P)*Math.sin(j);ie=P+(ie-P)*Math.cos(j)+ct*Math.sin(j);let re=N.atStart?it+$t:et-$t;return v(re,ie,kt)},$=j>.05?ee:S;if(ae(n,X,0,C,P,E,I,F,k,V,e,$),ae(n,X,lt-C,lt,P,E,I,F,k,V,e,$),ae(n,X,C,lt-C,P,E,I,I+C,k,V,e,$),ae(n,X,C,lt-C,P,E,F-C,F,k,V,e,$),Oi(r,X,C,lt-C,(P+E)/2,I+C,F-C,O?Ht(ai,.16):Jr,e,$),tr(f.opening,f.exterior)==="bars"){let ct=(I+F)/2,gt=(P+E)/2;ae(n,X,C,lt-C,gt-.012,gt+.012,ct-.012,ct+.012,k,V,e,$),ae(n,X,lt/2-.012,lt/2+.012,gt-.012,gt+.012,I+C,F-C,k,V,e,$)}}}if(x.cover!==null){let b=-f.faceOut,T=_+.2;ae(n,v,-.05,g+.05,b-.15,b,_,T,new st(w1),a,e,S);let C=Math.min(1,Math.max(0,x.cover));if(C>.01){let I=_-C*(_-p);Oi(s,v,0,g,b-.07,I,_,new st(16777215),e,S,.045)}}l.push({id:f.opening.id,start:h,end:n.count}),c.push({id:f.opening.id,start:d,end:r.count}),u.push({id:f.opening.id,start:m,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:u}}var F1=.3,Up=2.6;function Op(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),s=i.map(M=>M[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),u=c-l>=a-o,f=e*.7071,h=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],A=[...w,[M[0]+f,M[1]+f],[M[0]-f,M[1]+f],[M[0]+f,M[1]-f],[M[0]-f,M[1]-f]];return w.every(b=>ue(b,i))&&!n.some(b=>A.some(T=>ue(T,b)))},d=(M,w)=>h(u?[M,w]:[w,M]),m=(M,w)=>{let A=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let b=1;b<A;b++)if(!h([M[0]+(w[0]-M[0])*b/A,M[1]+(w[1]-M[1])*b/A]))return!1;return!0},[x,g,p,_]=u?[o,a,l,c]:[l,c,o,a],S=[],v=!0;for(let M=x+e;M<=g-e+1e-6;M+=t){let w=null,A=null,b=.05;for(let F=p;F<=_+1e-6;F+=b)if(d(M,F)&&(A??=F),(!d(M,F)||F+b>_+1e-6)&&A!==null){let P=d(M,F)?F:F-b;(!w||P-A>w[1]-w[0])&&(w=[A,P]),A=null}if(!w||w[1]-w[0]<.2)continue;let T=F=>{let[P,E]=F?w:[w[1],w[0]];return[u?[M,P]:[P,M],u?[M,E]:[E,M]]},C=T(v),I=S[S.length-1];if(I&&n.length&&!m(I,C[0])){let F=T(!v);if(!m(I,F[0]))continue;C=F,v=!v}S.push(C[0],C[1]),v=!v}return S}function Wu(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var Hu=i=>Math.atan2(Math.sin(i),Math.cos(i));function Bp(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Hu(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Up*e),!0)}let a=Math.atan2(r,s),l=Hu(a-i.heading);if(i.heading=Hu(i.heading+Math.sign(l)*Math.min(Math.abs(l),Up*e)),Math.abs(l)<.35){let c=Math.min(o,F1*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}var Kr=null,zp=new Map;function D1(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=zp.get(r);if(s)return s;e&&hl(e),Kr??=new Vr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Kr.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Kr.setSize(t,t,!1),Kr.setClearColor(0,0);let o=new ce,a=new Ve,l=De(i.type);if(l?.light)yl(o,l,{x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Xu(o,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let _={id:"preview",type:i.type,x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};if(vl(o,a,new ce,_),i.type==="fan_ceiling"||i.type==="fan_floor"){let S=o.p.length,v=a.p.length;_l(o,a,i.type,i.w,i.d,i.h);let M=i.type==="fan_ceiling"?i.h*.18:i.h*.78,w=0;for(let A=S+1;A<o.p.length;A+=3)o.p[A]+=M;for(let A=S+2;A<o.p.length;A+=3)o.p[A]+=w;for(let A=v+1;A<a.p.length;A+=3)a.p[A]+=M;for(let A=v+2;A<a.p.length;A+=3)a.p[A]+=w}}let c=new Xi,u=new Wt(o.geometry(),new le({vertexColors:!0,color:new st(n,n,n)})),f=new bn(a.geometry(),new xn({vertexColors:!0,color:new st(n*1.8,n*1.8,n*1.8)}));c.add(u,f);let h=new Qe().setFromObject(u),d=h.getCenter(new G),m=new Qn(-1,1,1,-1,.01,100);m.position.copy(d).add(new G(.9,.75,1.3).normalize().multiplyScalar(20)),m.lookAt(d),m.updateMatrixWorld();let x=.05;for(let _ of[h.min.x,h.max.x])for(let S of[h.min.y,h.max.y])for(let v of[h.min.z,h.max.z]){let M=new G(_,S,v).applyMatrix4(m.matrixWorldInverse);x=Math.max(x,Math.abs(M.x),Math.abs(M.y))}let g=x*1.12;m.left=-g,m.right=g,m.top=g,m.bottom=-g,m.updateProjectionMatrix(),Kr.render(c,m);let p=Kr.domElement.toDataURL("image/png");return u.geometry.dispose(),u.material.dispose(),f.geometry.dispose(),f.material.dispose(),zp.set(r,p),p}var Vp={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},N1=2.4,U1=1.4,O1=.22,Gp=140,$u=32,B1=500,Hp=160,Wp=33,Xp=.028,z1=.09,jt=2767456,k1=1911110,V1=1,qp=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),qu=450,Yp=125,G1=.08,Zu={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},H1=new st(1714765);function W1(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Ju=class{host;options;renderer;scene=new Xi;camera=new $e(38,1,.1,400);controls;labels;root=new Ze;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];fanRotors=new Map;devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new bn(new Jt,new xn({color:10471679,transparent:!0,opacity:.4,blending:Fe,depthWrite:!1}));snow=new Pr(new Jt,new $i({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Wt(new ms(1,28),new le({color:16767370,transparent:!0,opacity:0,blending:Fe,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=X1(),this.blindTexture=Y1(),this.haloTexture=J1(),this.ground=new Wt(new yi(1,1),new le({transparent:!0,blending:Fe,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.building&&this.fit(350),this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){hl(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,this.rebuild(),e&&this.fit(0),this.invalidate()}setFloor(t,e=!0){this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(l=>l.floor.rooms.some(c=>c.id===t)),n=e?.floor.rooms.find(l=>l.id===t);if(!e||!n)return;let r=vp(e.floor,n,e.ty),s=.72,o=this.controls.view.theta,a=Bu(r,o,s,this.camera.aspect,this.camera.fov*oe,this.cameraFrame(),4);this.controls.flyTo({target:r.getCenter(new G).add(a.offset),radius:a.radius,phi:s})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t;let e=new Set(t.filter(r=>r.active&&r.furnitureId&&this.fanRotors.has(r.furnitureId)).map(r=>r.furnitureId));for(let[r,s]of this.fanRotors)s.active=e.has(r);this.labelsDirty=!0,this.effectFloors=new Set(t.filter(r=>r.effect&&r.glow).map(r=>r.floorId)),this.deviceFloor=new Map(t.map(r=>[r.id,r.floorId]));let n=new Set;for(let r of t){n.add(r.id);let s=this.devicePins.get(r.id);s||(s={el:this.makeDevicePin(r.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(r.id,s),this.labels.append(s.el));let o=s.el;s.icon!==r.icon&&(s.icon=r.icon,o.querySelector(".fp3d-dev-icon").innerHTML=r.icon),s.text!==r.text&&(s.text=r.text,o.querySelector(".fp3d-dev-text").textContent=r.text);let a=r.caption??"";s.caption!==a&&(s.caption=a,o.querySelector(".fp3d-dev-name").textContent=a);let l=r.power!==null&&r.power!==void 0&&r.power>=1?r.powerText??`${Math.round(r.power)} W`:"";s.watt!==l&&(s.watt=l,o.querySelector(".fp3d-dev-watt").textContent=l);let c=`${r.name}: ${r.text}`;s.label!==c&&(s.label=c,o.title=r.name,o.setAttribute("aria-label",c)),s.active!==r.active&&(s.active=r.active,o.classList.toggle("fp3d-dev-on",r.active)),s.unavailable!==r.unavailable&&(s.unavailable=r.unavailable,o.classList.toggle("fp3d-dev-na",r.unavailable));let u=r.glow?`rgb(${r.glow.color.map(f=>Math.round(f*255)).join(", ")})`:"";s.glow!==u&&(s.glow=u,u?o.style.setProperty("--fp3d-glow",u):o.style.removeProperty("--fp3d-glow"))}for(let[r,s]of this.devicePins)n.has(r)||(s.el.remove(),this.devicePins.delete(r));for(let r of this.floors)this.buildGlow(r),this.buildLamps(r);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);e!==this.roofWindowsKey&&(this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh(),this.invalidate())}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])so(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&so(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Ze;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=n.floor.elevation+.03;for(let c of s)if(c.playing)for(let u=0;u<3;u++){let f=new Wt(new vs(.92,1,48),new le({color:3662079,transparent:!0,opacity:0,blending:Fe,depthWrite:!1,side:Me}));f.rotation.x=-Math.PI/2,f.position.set(c.x,o+u*.002,c.z),f.userData={sound:!0,phase:u/3,level:c.level},f.frustumCulled=!1,r.add(f)}let a=[],l=new Set;for(let c of s)for(let u of c.members){let f=s.find(d=>d.id===u);if(!f||f===c)continue;let h=[c.id,f.id].sort().join("|");l.has(h)||(l.add(h),a.push(c.x,o+.02,c.z,f.x,o+.02,f.z))}if(a.length){let c=new Jt;c.setAttribute("position",new Vt(a,3));let u=new bn(c,new xn({color:3662079,transparent:!0,opacity:.45,blending:Fe,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=Yu(r),o=$p(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let s=document.createElement("img");s.src=n.picture,s.alt="",s.addEventListener("error",()=>s.replaceWith(document.createTextNode(n.initials))),r.append(s)}else r.textContent=n.initials}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=wp(t),n=e?1:0;n===Pl.value&&(!e||Il.value.equals(new G(...e)))||(Pl.value=n,e&&Il.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Sp(t);let e=Ll(t),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines]:[]];for(let r of n)r.blending=e,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new st(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new us(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let u=s.x0+Math.random()*(s.x1-s.x0),f=s.y0+Math.random()*(s.y1-s.y0),h=s.z0+Math.random()*(s.z1-s.z0);o.set([u,f,h],c*3),n&&o.set([u,f-.45,h],c*3+3)}t.geometry.dispose();let l=new Jt;l.setAttribute("position",new Vt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let u=0;u<l.length;u+=6){let f=l[u+1]-c,h=l[u]+o*n;f<r.y0&&(f+=s,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[u]=h,l[u+1]=f,l[u+3]=h-o*.05,l[u+4]=f-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let u=0;u<l.length;u+=3){let f=l[u+1]-(.9+.6*e.snow)*n,h=l[u]+(o+Math.sin(c+u)*.4)*n;f<r.y0&&(f+=s,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[u]=h,l[u+1]=f}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*oe,o=(r?t.azimuth+180:t.azimuth)*oe,a=Math.max(10,Math.abs(t.elevation))*oe,l=this.weatherBox,c=new G((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),f=new G(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(f,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let h=this.skyDisc.material;h.color.set(r?13621486:16767370),h.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t){this.openingTargets=t,this.invalidate()}setFridgeDoors(t){for(let[e,n]of t){let r=this.fridges.get(e)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(e,r)}for(let e of[...this.fridges.keys()])t.has(e)||this.fridges.delete(e);this.invalidate()}stepFridges(t){let e=1-Math.exp(-t/Hp),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}stepFans(t){let e=!1;for(let n of this.fanRotors.values()){if(!n.active)continue;let r=t*(n.type==="fan_ceiling"?.0048:.009);n.type==="fan_ceiling"?n.rotor.rotation.y=(n.rotor.rotation.y-r)%(Math.PI*2):n.rotor.rotation.z=(n.rotor.rotation.z-r)%(Math.PI*2),e=!0}return e}buildFridges(t){let e=new ce;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);qd(e,n,dn(t.floor,n),r?.l??0,r?.r??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view;return{theta:t.theta,phi:t.phi,radius:t.radius}}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values())t.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&W1();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new Vr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ce,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Cl(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&"roomId"in n&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))e.dispose();this.root.remove(t.group)}this.floors=[],this.floorMap=new Map,this.fanRotors=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let f=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-h.left,f.top+f.height/2-h.top)},B1)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",u=>u.preventDefault()),e.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let f=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,f.left+f.width/2-h.left,f.top+f.height/2-h.top)}),e.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let f=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-h.left,f.top+f.height/2-h.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Ep(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes),r=Z1(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b])}t.lightSurface=n;let s=new Jt;s.setAttribute("position",new Vt(n.pos,3)),s.setAttribute("color",new Vt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Vt(n.fold,1));let o=new qi(new Uint32Array(n.pos.length/3),1);o.setUsage(Bc),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=t.floor.height,n=[];for(let r of this.devices){let s=this.glowOf(r);if(r.floorId!==t.floor.id||!s)continue;let o=Cp(t.floor,r.x,r.z),a=Ip(t.lightZones,o),[l,,c]=r.size??(r.lamp?Zu[r.lamp]:[.3,.3,.3]),u=r.base??0,f={ceiling:[e-.12,"ceiling"],downlight:[e-.03,"spot"],spot:[e-c,"spot"],panel:[e-.05,"ceiling"],pendant:[Math.max(.5,e-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<V1?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[h,d]=r.lamp?f[r.lamp]:[r.y,"omni"],m=r.lightY??h,x=s.color;if(r.lamp==="strip"){let g=(r.rotation??0)*oe,p=!!r.upright||Math.abs(r.roll??0)>45;for(let _ of[-1/3,0,1/3])r.upright?n.push({x:r.x,y:u+l*(.5+_),z:r.z,color:x,level:s.level*.55,kind:"omni",room:a}):n.push({x:r.x+Math.cos(g)*l*_,y:m,z:r.z+Math.sin(g)*l*_,color:x,level:s.level*.55,kind:p?"omni":d,room:a})}else n.push({x:r.x,y:m,z:r.z,color:x,level:s.level,kind:d,room:a})}return n}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(f=>{let h=t.geo.openings.find(m=>m.opening.id===f.id);if(h&&tr(h.opening,h.exterior)==="passage")return 1;let d=t.openings.get(f.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(f=>`${f.x.toFixed(2)},${f.y.toFixed(2)},${f.z.toFixed(2)},${f.kind},${f.level.toFixed(3)},${f.color.map(h=>h.toFixed(3)).join("/")}`).join(";")+"|"+r.map(f=>f.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length||this.roomTint){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=Rp(e,n,.42,r);a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let f=0;f<l.length/18;f++){let h=!1;for(let d=f*18;d<f*18+18&&!h;d++)h=l[d]>.004;if(h)for(let d=0;d<6;d++)c[u++]=f*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),t.glowMesh.visible=u>0}makeMaterials(t){return{floor:Fn(new le({vertexColors:!0}),this.themeUniform),pattern:q1(this.patternTexture),wall:Fn(oi(new le({vertexColors:!0}),t,"solid"),this.themeUniform),glassWall:oi(new le({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),coveredRoof:Fn(oi(new le({vertexColors:!0,transparent:!0,depthWrite:!1,side:Me}),t,"roof"),this.themeUniform),shadow:new le({vertexColors:!0,blending:Es,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:Me,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Fn(oi(new xn({vertexColors:!0,transparent:!0,blending:Ll(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:oi(new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:Fn(oi(new le({vertexColors:!0,side:Me}),t),this.themeUniform),glass:oi(new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me}),t),blinds:Fn(oi(new le({map:this.blindTexture,vertexColors:!0,side:Me}),t),this.themeUniform),flow:$1(this.flowTime),solarLive:Vu(this.flowTime),lamps:Fn(new le({vertexColors:!0}),this.themeUniform),halos:new $i({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1}),cones:new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me}),screens:new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me})}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=Pu(n)?.id===s.id?o.filter(j=>j.face===Iu).map(j=>({field:j,face:np(n,j)})):[],l=o.filter(j=>j.face.startsWith(`wall:${s.id}:`));if(l.length){let j=new Map(ep(n,s.id).map(ut=>[ut.key,ut]));for(let ut of l){let X=j.get(ut.face);X&&a.push({field:ut,face:X})}}let u=(n.settings.roof.sections??[]).some(j=>!j.open&&j.base<s.elevation+s.height-.05)?(j,ut)=>{let X=Md(n,j,ut);return X===null?null:X-s.elevation}:void 0,f=mp(zu(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,gp(n.floors,s),a,u),h={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(h),m=new Ze,x=new Wt(f.floor,d.floor),g=new Wt(f.shadow,d.shadow);g.renderOrder=1;let p=new Wt(f.floor,d.pattern);p.renderOrder=2;let _=new Wt(new Jt,d.glow);_.renderOrder=3,_.visible=!1;let S=new Wt(new Jt,d.frames),v=new Wt(new Jt,d.blinds),M=new Wt(new Jt,d.glass);M.renderOrder=4;let w=new Wt(new Jt,d.lamps);w.visible=!1;let A=new Wt(new Jt,d.cones);A.visible=!1,A.renderOrder=3;let b=new Pr(new Jt,d.halos);b.visible=!1,b.renderOrder=7;let T=new Wt(new Jt,d.cones);T.visible=!1,T.renderOrder=7;let C=new Wt(new Jt,d.cones);C.visible=!1,C.renderOrder=7;let I=new Wt(new Jt,d.lamps);I.visible=!1;let F=new Wt(new Jt,d.screens);F.visible=!1,F.renderOrder=5;let P=new Wt(new Jt,d.flow);P.renderOrder=5,P.frustumCulled=!1;let E=ku(a,s.elevation),D=E?new Wt(E.geometry,d.solarLive):null;D&&(D.renderOrder=6,so(E,this.solarLevels));for(let j of[S,v,M])j.frustumCulled=!1;let U=new Wt(f.walls,d.glassWall),N=new Wt(f.walls,d.coveredRoof),z=new Wt(f.walls,d.wall);U.renderOrder=6,N.renderOrder=5,m.add(x,g,p,_,z,new bn(f.lines,d.lines),S,v,M,P,w,A,b,T,C,I,F,N,U,...D?[D]:[]);for(let j of s.furniture){if(j.type!=="fan_ceiling"&&j.type!=="fan_floor")continue;let ut=new ce,X=new Ve;_l(ut,X,j.type,j.w,j.d,j.h);let $=new Ze;$.add(new Wt(ut.geometry(),d.wall),new bn(X.geometry(),d.lines));let ct=new Ze,gt=j.rotation*oe;ct.position.set(j.x,dn(s,j),j.z),ct.rotation.y=-gt,$.position.set(0,j.type==="fan_ceiling"?j.h*.18:j.h*.78,0),ct.add($),m.add(ct);let ft=this.devices.some(Pt=>Pt.furnitureId===j.id&&Pt.active);this.fanRotors.set(j.id,{rotor:$,type:j.type,active:ft})}this.root.add(m);let O=document.createElement("button");O.className="fp3d-pin fp3d-pin-floor",O.dataset.floor=s.id;let k=document.createElement("b");k.textContent=s.name||"\u2013";let V=document.createElement("span");V.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",O.append(k,V),O.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(O);let it=t.get(s.id),et=[],lt=null;for(let j of s.rooms){let ut=document.createElement("button");ut.className="fp3d-pin",ut.dataset.room=j.id,ut.dataset.floor=s.id,this.fillRoomPin(ut,j.name,this.roomInfo.get(j.id)),ut.addEventListener("click",()=>this.options.onRoomTap?.(s.id,j.id)),this.labels.append(ut);let[X,$]=fd(j.points);et.push({pin:ut,room:j,cx:X,cz:$});for(let[ct,gt]of j.points)lt??={x0:ct,x1:ct,z0:gt,z1:gt},lt.x0=Math.min(lt.x0,ct),lt.x1=Math.max(lt.x1,ct),lt.z0=Math.min(lt.z0,gt),lt.z1=Math.max(lt.z1,gt)}this.floors.push({floor:s,rank:r.indexOf(s),group:m,geo:f,floorMesh:x,shadowMesh:g,patternMesh:p,glowMesh:_,lightSurface:null,lightZones:null,framesMesh:S,glassMesh:M,blindsMesh:v,flowMesh:P,solarMesh:D,solarLive:E,lampMesh:w,sunMesh:A,sunSig:"",haloMesh:b,coneMesh:T,trailMesh:C,fridgeMesh:I,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:z,screenMesh:F,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:lt,roomPins:et,labelSize:null,materials:d,mask:h,openings:new Map,y:it?.y??0,o:it?.o??1,ty:0,to:1,appliedO:-1,label:O})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Dl);this.buildOpenings(s),this.buildFlows(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(f=>f.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?up(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map($r(this.building).map(f=>[f.key,f])),n=this.building.settings.roof?.solar??[],r=Vu(this.flowTime),s=[],o=new Ze,a=Fn(new le({vertexColors:!0,transparent:!0,side:Me}),this.themeUniform),l=Fn(new xn({vertexColors:!0,transparent:!0,blending:Ll(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Fn(new le({vertexColors:!0,transparent:!0,side:Me,depthWrite:!1}),this.themeUniform),u=t.map(f=>{let h=new Ze;h.add(new Wt(f.solid.geometry(),a),new bn(f.lines.geometry(),l)),f.glass.count&&h.add(new Wt(f.glass.geometry(),c));let d=n.flatMap(x=>{let g=e.get(x.face);return g&&(g.section?f.sections?.includes(g.section):f===t[0])?[{face:g,field:x}]:[]}),m=ku(d,f.floor.elevation+f.base);if(m){let x=new Wt(m.geometry,r);x.renderOrder=9,h.add(x),s.push(m),so(m,this.solarLevels)}return h.renderOrder=8,o.add(h),{group:h,floorId:f.floor.id,base:f.base,lift:f.lift!==!1}});o.renderOrder=8,this.scene.add(o),this.roof={group:o,parts:u,solid:a,lines:l,glass:c,live:r,lives:s},this.placeRoof()}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=this.floorId===null&&this.wallMode!=="cut"?.94*n:0,s=1-Math.exp(-t/Gp),o=this.roofO;this.roofO+=(r-this.roofO)*s,Math.abs(r-this.roofO)<.004&&(this.roofO=r),e.group.visible=this.roofO>.02;for(let a of e.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=l.ty>0?Math.min(1,l.y/l.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+l.y+a.base+(1-this.roofO)*2.2+(a.lift?c*U1:0)}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==o&&this.roofO!==r}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:O1)):r=this.explode?n.rank*N1:0,n.ty=r,n.to=s,t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.coveredRoof.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Gp);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Hp);for(let r of this.floors){let s=!1;for(let[o,a]of r.openings){let l=this.openingTargets.get(o)??Dl,c=(h,d)=>(h??null)===(d??null)||typeof h=="number"&&typeof d=="number"&&Math.abs(h-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},f=!1;for(let h of["open","open2","tilt","tilt2"]){let d=l[h]??0,m=a[h]??0,x=d-m;Math.abs(x)<.003?u[h]=d:(u[h]=m+x*n,f=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let h=l.cover-a.cover;Math.abs(h)<.003?u.cover=l.cover:(u.cover=a.cover+h*n,f=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(o,u),s=!0),e||=f}s&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new st(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*G1+r)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let f=this.flashes.get(u);if(!f||f<=e)return 0;let h=f-e,d=h>qu?.5+.5*Math.sin(h/140):h/qu;return Math.round(d*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=r.map(u=>this.glowOf(u)),a=r.map((u,f)=>`${n(u.id)},${o[f]?`${o[f].level.toFixed(3)},${o[f].color.map(h=>h.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let u=new ce,f=[],h=[],d=new Map,m=t.floor.height;for(let x of r){let g=x.lamp==="strip"?(x.base??m)>Math.min(t.floor.cut_height,m):x.lamp?qp.has(x.lamp):x.model==="camera_ceiling";if(!x.lamp&&!x.model||g&&this.wallMode==="cut")continue;let p=u.count,_=x.pack?De(x.pack):void 0,[S,v,M]=x.size??[.3,.3,.3];x.model?Yd(u,x.model,x.x,x.model==="camera_ceiling"?m:x.y,x.z,x.rotation??0):_?yl(u,_,{x:x.x,z:x.z,rotation:x.rotation??0,w:S,d:v,h:M,mirror:x.mirror},x.base??0,65280):Xu(u,{...x,lamp:x.lamp},m,65280),d.set(x.furnitureId??x.id,{start:p,end:u.count}),x.pickable!==!1&&f.push({id:x.id,start:p,end:u.count}),x.furnitureId&&h.push({id:x.furnitureId,start:p,end:u.count})}t.lampTris=f,t.lampFurnTris=h,t.lampRanges=d,t.lampShade=sd(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,f)=>{let h=t.lampRanges.get(u.furnitureId??u.id);if(!h)return;let d=o[f],m=d?.55+.45*d.level:0,x=d?new st(...d.color.map(_=>Math.min(1,_*m))):new st(k1),g=n(u.id);g>0&&x.lerp(new st(1,1,1),.7*g);let p=new st(x.getHex());od(c,t.lampShade,h,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.sun,n=(this.building?.settings.north??0)*oe,r=this.weather?.cloud??0,s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(s===t.sunSig)return;t.sunSig=s;let o=new ce;if(e&&e.elevation>2&&r<.97){let a=Math.min(1,e.elevation/12)*(1-.8*r),l=e.elevation*oe,c=e.azimuth*oe,u=[Math.sin(n+c),-Math.cos(n+c)],f=1/Math.tan(l);for(let h of t.geo.openings){if(h.opening.type!=="window"||!h.exterior)continue;let d=[-h.toRoom[0],-h.toRoom[1]],m=d[0]*u[0]+d[1]*u[1];if(m<.05)continue;let x=t.openings.get(h.opening.id),g=h.top-(x?.cover??0)*(h.top-h.sill);if(g-h.sill<.05)continue;let p=(b,T)=>{let C=Math.min(7,T*f);return[h.start[0]+h.axis[0]*b+h.toRoom[0]*h.faceRoom-u[0]*C,.02,h.start[1]+h.axis[1]*b+h.toRoom[1]*h.faceRoom-u[1]*C]},_=.14*a*Math.min(1,m*1.5),S=new st(1*_,.82*_,.55*_),v=S.clone().multiplyScalar(.45),M=t.floor.rooms.find(b=>b.id===h.opening.room_id);if(!M||M.points.length<3)continue;let w=Math.max(1,Math.ceil(Math.min(7,g*f)/.25)),A=Math.max(1,Math.ceil(h.width/.3));for(let b=0;b<w;b++){let T=h.sill+(g-h.sill)*b/w,C=h.sill+(g-h.sill)*(b+1)/w,I=b/w,F=(b+1)/w,P=S.clone().lerp(v,I),E=S.clone().lerp(v,F);for(let D=0;D<A;D++){let U=h.width*D/A,N=h.width*(D+1)/A,z=p((U+N)/2,(T+C)/2);if(!ue([z[0],z[2]],M.points))continue;let O=p(U,T),k=p(N,T),V=p(N,C),it=p(U,C);o.tri(O,k,V,P,P,E),o.tri(O,V,it,P,E,E)}}}}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=o.geometry(),t.sunMesh.visible=o.count>0}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new ce,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let p=(l.rotation??0)*oe,_=[-Math.sin(p),Math.cos(p)],S=l.model==="camera_ceiling",v=l.reach??(S?3:4.5),M=(l.fov??(S?360:90))*oe/2,w=l.motion?new st(.9,.12,.16):new st(.04,.22,.28),A=new st(0,0,0),b=Math.max(4,Math.round(M/.15)),T=.015,C=t.geo.walls2d,I=E=>{let D=_[0]*Math.cos(E)-_[1]*Math.sin(E),U=_[1]*Math.cos(E)+_[0]*Math.sin(E),N=v;for(let z of C){let O=z.b[0]-z.a[0],k=z.b[1]-z.a[1],V=D*k-U*O;if(Math.abs(V)<1e-9)continue;let it=((z.a[0]-l.x)*k-(z.a[1]-l.z)*O)/V,et=((z.a[0]-l.x)*U-(z.a[1]-l.z)*D)/V;it>.45&&it<N&&et>=0&&et<=1&&(N=it)}return N},F=E=>{let D=I(E);return[l.x+(_[0]*Math.cos(E)-_[1]*Math.sin(E))*D,T,l.z+(_[1]*Math.cos(E)+_[0]*Math.sin(E))*D]},P=s.count;for(let E=0;E<b;E++)s.tri([l.x,T,l.z],F(-M+2*M*(E+1)/b),F(-M+2*M*E/b),w,A,A);o.push({id:l.id,start:P,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||qp.has(l.lamp)&&this.wallMode==="cut")continue;let[u,f,h]=l.size??Zu[l.lamp],d=l.base??0,m=(l.rotation??0)*oe,x={ceiling:e-.07,downlight:e-.03,spot:e-h,panel:e-.03,pendant:Math.max(.4,e-h)+.08,floor:d+h-.15,uplight:d+h,table:d+h-.09,wall:d+h/2,strip:d+Math.max(.02,h)-.01,bollard:d+h-.08,garden:d+h-.03}[l.lamp],g=(p,_,S=1)=>{n.push(p,x,_),r.push(...c.color.map(v=>v*c.level*.7*S))};if(l.lamp==="strip")for(let p of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,d+u*(.5+p),l.z),r.push(...c.color.map(_=>_*c.level*.7*.6))):g(l.x+Math.cos(m)*u*p,l.z+Math.sin(m)*u*p,.6);else l.lamp==="wall"?g(l.x-Math.sin(m)*(f/2+.05),l.z+Math.cos(m)*(f/2+.05)):g(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let p=new st(...c.color.map(w=>w*.09*c.level)),_=new st(0,0,0),S=Math.max(.03,u/2),v=.45+.35*c.level,M=16;for(let w=0;w<M;w++){let A=w/M*Math.PI*2,b=(w+1)/M*Math.PI*2,T=[l.x+Math.cos(A)*S,x,l.z+Math.sin(A)*S],C=[l.x+Math.cos(b)*S,x,l.z+Math.sin(b)*S],I=[l.x+Math.cos(A)*v,.02,l.z+Math.sin(A)*v],F=[l.x+Math.cos(b)*v,.02,l.z+Math.sin(b)*v];s.tri(T,I,F,p,_,_),s.tri(T,F,C,p,_,p)}}}let a=new Jt;a.setAttribute("position",new Vt(n,3)),a.setAttribute("color",new Vt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=zu(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),n=e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let r=new ce;for(let s of e){let o=this.screens.get(s.id),a=s.rotation*oe,l=Math.cos(a),c=Math.sin(a),u=(v,M,w)=>[s.x+v*l-w*c,M,s.z+v*c+w*l];if(o.faces){let v=Math.max(.05,s.w)*(s.mirror?-1:1),M=Math.max(.05,s.d),w=Math.max(.005,s.h),A=dn(t.floor,s);for(let b of o.faces){if(b.part==="cabin"){let O=De(s.type),k=V=>V.color.toLowerCase()==="#13283a"||V.color==="glass";if(O&&O.parts.some(k)){let V=new st(...b.color.map(it=>Math.min(1,it*(.3+.5*b.level))));Ru(r,O,s,A,V.getHex(),k);continue}}if(b.part==="band"||b.part==="cabin"){let O=b.part==="cabin",k=A+w*(O?.6:.42),V=O?A+w*.86:k+.07,it=new st(...b.color.map(ut=>Math.min(1,ut*(.3+.45*b.level)))),et=Math.abs(v)/2+(O?.012:.02),lt=M/2+(O?.012:.02),j=[[-et,-lt],[et,-lt],[et,lt],[-et,lt]];for(let ut=0;ut<4;ut++){let X=j[ut],$=j[(ut+1)%4],ct=u(X[0]*Math.sign(v),k,X[1]),gt=u($[0]*Math.sign(v),k,$[1]),ft=u($[0]*Math.sign(v),V,$[1]),Pt=u(X[0]*Math.sign(v),V,X[1]);r.tri(ct,gt,ft,it),r.tri(ct,ft,Pt,it)}continue}let T=b.part==="right"?.03:-Math.abs(v)/2+.03,C=b.part==="left"?-.03:Math.abs(v)/2-.03,I=A+(b.part==="bottom"?w*.45:w)+.006,F=new st(...b.color.map(O=>Math.min(1,O*(.35+.65*b.level)))),P=new st(0,0,0),E=(O,k,V=I)=>u(O*Math.sign(v),V,k),D=[E(T,-M/2+.03),E(C,-M/2+.03),E(C,M/2-.03),E(T,M/2-.03)];r.tri(D[0],D[2],D[1],F),r.tri(D[0],D[3],D[2],F);let U=.12+.1*b.level,N=F.clone().multiplyScalar(.5),z=[E(T-U,-M/2-U,I+.004),E(C+U,-M/2-U,I+.004),E(C+U,M/2+U,I+.004),E(T-U,M/2+U,I+.004)];for(let O=0;O<4;O++){let k=(O+1)%4;r.tri(D[O],z[k],z[O],N,P,P),r.tri(D[O],D[k],z[k],N,N,P)}}continue}let f=De(s.type);if(f&&!f.light&&o.ring&&f.parts.some(v=>v.glow)){let v=new st(...o.color.map(M=>Math.min(1,M*(.45+.55*o.level))));Ru(r,f,s,dn(t.floor,s),v.getHex())}let h=Eu(s,t.floor);if(!h)continue;let d=new st(...o.color.map(v=>Math.min(1,v*(.35+.65*o.level)))),m=new st(0,0,0),x=h.z+.004;if(r.tri(u(h.x0,h.y0,x),u(h.x1,h.y0,x),u(h.x1,h.y1,x),d),r.tri(u(h.x0,h.y0,x),u(h.x1,h.y1,x),u(h.x0,h.y1,x),d),o.plain)continue;let g=.18+.12*o.level,p=d.clone().multiplyScalar(.5),_=[u(h.x0,h.y0,x),u(h.x1,h.y0,x),u(h.x1,h.y1,x),u(h.x0,h.y1,x)],S=[u(h.x0-g,h.y0-g,x+.01),u(h.x1+g,h.y0-g,x+.01),u(h.x1+g,h.y1+g,x+.01),u(h.x0-g,h.y1+g,x+.01)];for(let v=0;v<4;v++){let M=(v+1)%4;r.tri(_[v],S[v],S[M],p,m,m),r.tri(_[v],S[M],_[M],p,m,p)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=r.geometry(),t.screenMesh.visible=r.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=Eu(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new Wt(new yi(1,1),new le({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let u=l;new Ms().load(o.picture,f=>{if(t.screenPics.get(r)!==u){f.dispose();return}f.colorSpace=Ce,u.texture=f;let h=u.mesh.material;h.map=f,h.needsUpdate=!0,this.placeScreenPicture(u.mesh,s,a,f),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s?.width&&s?.height?s.width/s.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),u=c/o,f=e.rotation*oe,h=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,u,1),t.rotation.set(0,-f,0),t.position.set(e.x+h*Math.cos(f)-d*Math.sin(f),(n.y0+n.y1)/2,e.z+h*Math.sin(f)+d*Math.cos(f))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){let e=this.flows.filter(u=>u.floorId===t.floor.id).map(Yu).join(";"),n=[],r=[],s=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id)continue;let f=this.flowPhase.get(Yu(u))??{speed:$p(u.power),offset:0},h=u.power>.5?Math.min(1,.5+u.power/2500):.22,d=u.color.map(_=>_*h),m=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(m<1e-4)continue;let x=[(u.b[0]-u.a[0])/m,(u.b[1]-u.a[1])/m,(u.b[2]-u.a[2])/m],g=[];if(Math.abs(x[1])<.5){let _=Math.hypot(x[0],x[2])||1;g.push([-x[2]/_,0,x[0]/_])}else g.push([1,0,0],[0,0,1]);let p=this.lowQuality?[[Xp*1.4,1]]:[[z1,.25],[Xp,1]];for(let[_,S]of p)for(let v of g){let M=_/2,w=(b,T)=>[b[0]+v[0]*M*T,b[1]+v[1]*M*T,b[2]+v[2]*M*T],A=[[w(u.a,-1),u.dist,0],[w(u.b,-1),u.dist+m,0],[w(u.b,1),u.dist+m,1],[w(u.a,1),u.dist,1]];for(let b of[0,1,2,0,2,3]){let[T,C,I]=A[b];n.push(T[0],T[1],T[2]),r.push(d[0]*S,d[1]*S,d[2]*S),s.push(C,I),o.push(f.speed),a.push(f.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,f]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let h=l.getAttribute(u);h.array.set(f),h.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Jt;c.setAttribute("position",new Vt(n,3)),c.setAttribute("color",new Vt(r,3)),c.setAttribute("uv",new Vt(s,2)),c.setAttribute("flowSpeed",new Vt(o,1)),c.setAttribute("flowOffset",new Vt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=Np(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let r=new st(n.color),s=this.roomTint?.get(n.roomId);s&&r.lerp(new st(...s).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(H1,s?.3:.75);for(let o=n.start*3;o<n.end*3;o++)e.setXYZ(o,r.r,r.g,r.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=_p(this.activeFloors());e.isEmpty()&&e.set(new G(-4,0,-4),new G(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new G),r=e.getSize(new G),s=this.startView,o=this.floorId===null,a=s?s.phi:.85,l=this.cameraFrame(),c=Math.max(.1,(this.size.w-l.left-l.right)/Math.max(1,this.size.h-l.top-l.bottom)),u=c<1?1.12:1.06,f=yp(e,a,c,this.camera.fov*oe,u),h=s?s.theta:f.theta,d=Bu(e,h,a,this.camera.aspect,this.camera.fov*oe,l),m=Math.max(8,d.radius);this.controls.maxRadius=Math.max(40,m*3),s&&o?n.y=e.min.y+r.y*(this.houseView?.45:.3):n.add(d.offset),this.floorId===null&&(this.houseRadius=m),s&&o&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,s.radius*1.5)),this.controls.flyTo({target:n,radius:s&&o?s.radius:m,phi:a,theta:h},t)}cameraFrame(){let t=this.size.w<700?12:18,e=Math.min(this.size.w*.4,this.labelInset?this.labelInset+8:t);return{width:this.size.w,height:this.size.h,left:e,right:t,top:t,bottom:t}}placeGround(){let t=new Qe,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new G(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new G(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=K1();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new G),r=t.getSize(new G),s=$u*Math.ceil((Math.max(r.x,r.z)+16)/$u);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-Ui-.02,n.z)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new ws;return r.setFromCamera(new Zt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let h=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??ee;if(h!==ee&&Math.floor(h/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),f=u?this.pickOpenings.get(u):void 0;if(f)return{entity:f}}else if(a.object===c.wallMesh){let u=c.geo.coveredRoomTris.find(m=>l>=m.start&&l<m.end);if(u){if(this.roomId!==null&&c.floor.rooms.some(x=>x.id===this.roomId&&Hn(x))&&u.roofStart!==void 0&&u.roofEnd!==void 0&&l>=u.roofStart&&l<u.roofEnd)continue;return{floorId:c.floor.id,roomId:u.id}}let f=o(c.geo.outdoorTris,l);if(f)return{floorId:c.floor.id,outdoorId:f};let h=o(c.geo.furnitureTris,l),d=h?this.pickFurniture.get(h):void 0;if(d)return{entity:d};if(a.face&&!h){let m=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,x=Math.floor(m/16),g=m%16,p=this.wallMode==="cut"&&x===0,_=(c.mask.glass.value&1<<g)!==0;if(!p){let S=n.ray.direction,v=Math.hypot(S.x,S.z)||1,M=[a.point.x-S.x/v*.3,a.point.z-S.z/v*.3],w=c.floor.rooms.find(A=>A.points.length>=3&&ue(M,A.points))?.id??null;if(this.roomId!==null){if(w===this.roomId)return{floorId:c.floor.id,roomId:w}}else if(!_&&w)return{floorId:c.floor.id,roomId:w}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+qu),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}if(n&&"outdoorId"in n){this.options.onOutdoorTap?this.options.onOutdoorTap(n.floorId,n.outdoorId):this.options.onRoomTap?.(n.floorId,null);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(o=>[o.lampMesh,o.wallMesh].filter(a=>a.visible));for(let o of n.intersectObjects(s,!1)){if(o.faceIndex==null)continue;let a=r.find(u=>u.group===o.object.parent),c=(o.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(u=>o.faceIndex>=u.start&&o.faceIndex<u.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(t,e,n){let r=this.rayAt(e,n),s=t.floor.elevation+t.y,o=r.ray.direction;if(Math.abs(o.y)<1e-4)return null;let a=(s-r.ray.origin.y)/o.y;return a<=0?null:[r.ray.origin.x+o.x*a,r.ray.origin.z+o.z*a]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(f=>f.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(f=>f.floor.furniture.some(h=>h.id===l)):void 0,u=c?.floor.furniture.find(f=>f.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let s=this.furnitureAt(t,e);if(!s){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e)}grabItem(t,e,n,r){let s=t.floor.furniture.find(a=>a.id===e),o=this.floorPoint(t,n,r);return!s||!o?!1:s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(h=>h.id===n.id),u=l&&this.floorPoint(l,t,e);if(!l||!c||!u)return;let f=this.building?.settings.grid??.05;n.x=c.x=Math.round((u[0]+n.offset[0])/f)*f,n.z=c.z=Math.round((u[1]+n.offset[1])/f)*f,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=this.floorPoint(s,t,e);if(!o)return;let a=this.building?.settings.grid??.05;r.x=Math.round((o[0]+r.offset[0])/a)*a,r.z=Math.round((o[1]+r.offset[1])/a)*a,r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=this.selectedFurniture,e=t?this.floors.find(p=>p.floor.furniture.some(_=>_.id===t)):void 0,n=e?.floor.furniture.find(p=>p.id===t);if(!e||!n)return;let r=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,o=e.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=De(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?dn(e.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:dn(e.floor,n),u=n.rotation*oe,f=Math.cos(u),h=Math.sin(u),d=(p,_,S)=>[r+p*f-_*h,S,s+p*h+_*f],m=new Ve,x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],g=new st(.25,.9,1);for(let p=0;p<4;p++){let[_,S]=x[p],[v,M]=x[(p+1)%4];m.seg(d(_,S,c+.01),d(v,M,c+.01),g),m.seg(d(_,S,c+l),d(v,M,c+l),g),m.seg(d(_,S,c+.01),d(_,S,c+l),g)}m.seg(d(-n.w/2,n.d/2+.03,c+.02),d(n.w/2,n.d/2+.03,c+.02),new st(1,1,1)),this.ghost=new bn(m.geometry(),new xn({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=e.floor.elevation+e.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(p=>p.floor.rooms.some(_=>_.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new Ke(s,o);a.texture.colorSpace=Ce;let l=new Qn(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),u=this.roof?.group.visible??!1,f=this.ghost?.visible??!1,h=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),m=document.createElement("canvas");m.width=s,m.height=o;let x=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let P of this.floors)P.group.visible=P===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let _=p.floor.rooms.flatMap(P=>P.points),S=p.floor.elevation,v=new Qe(new G(Math.min(..._.map(P=>P[0]))-.3,S,Math.min(..._.map(P=>P[1]))-.3),new G(Math.max(..._.map(P=>P[0]))+.3,S+Math.min(p.floor.cut_height,p.floor.height),Math.max(..._.map(P=>P[1]))+.3)),M=v.getCenter(new G),w=-.6,A=.8,b=new G(Math.sin(A)*Math.sin(w),Math.cos(A),Math.sin(A)*Math.cos(w));l.position.copy(M).addScaledVector(b,100),l.lookAt(M),l.updateMatrixWorld();let T=.5,C=.5;for(let P of[v.min.x,v.max.x])for(let E of[v.min.y,v.max.y])for(let D of[v.min.z,v.max.z]){let U=new G(P,E,D).applyMatrix4(l.matrixWorldInverse);T=Math.max(T,Math.abs(U.x)),C=Math.max(C,Math.abs(U.y))}let I=s/o;T/C>I?C=T/I:T=C*I,l.left=-T*1.05,l.right=T*1.05,l.top=C*1.05,l.bottom=-C*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let F=x.createImageData(s,o);for(let P=0;P<o;P++)F.data.set(d.subarray((o-1-P)*s*4,(o-P)*s*4),P*s*4);x.putImageData(F,0,0),g.push({floorId:p.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(h);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=u),this.ghost&&(this.ghost.visible=f),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?Op(n.room,void 0,void 0,n.obstacles):Wu(n.rest),l=a.length?a:Wu(n.rest),c=0;l.forEach((u,f)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=f)}),r.motion.path=l,r.motion.next=c,n.room&&!ue(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Vp[n.mode])}for(let[n,r]of this.robots)e.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let r=new ce,s=(a,l,c,u,f)=>{let h=[];for(let d=0;d<20;d++)h.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);_e(r,h,l,c,u,f,{aoFrom:0,bottom:!1})};s(.17,.012,.08,2371657,3424863),s(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new le({vertexColors:!0});let o=new ce;_e(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new Ze,n=new le({color:Vp[t.mode]});return e.add(new Wt(this.robotGeo,this.robotMat),new Wt(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Bp(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t){let e=s=>new st(.25-.2*s,.95-.83*s,1-.7*s),n=new st(0,0,0),r=.02;for(let s of this.floors){let o=new ce,a=null;for(let l of t){if(l.floorId!==s.floor.id)continue;let c=e(l.age);if(a){let u=Math.hypot(l.x-a.x,l.z-a.z)||1,f=-(l.z-a.z)/u*.06,h=(l.x-a.x)/u*.06,d=e(a.age);o.tri([a.x+f,r,a.z+h],[l.x+f,r,l.z+h],[l.x-f,r,l.z-h],d,c,c),o.tri([a.x+f,r,a.z+h],[l.x-f,r,l.z-h],[a.x-f,r,a.z-h],d,c,d)}for(let u=0;u<12;u++){let f=u/12*Math.PI*2,h=(u+1)/12*Math.PI*2;o.tri([l.x,r,l.z],[l.x+Math.cos(h)*.22,r,l.z+Math.sin(h)*.22],[l.x+Math.cos(f)*.22,r,l.z+Math.sin(f)*.22],c,n,n)}a=l}s.trailMesh.geometry.dispose(),s.trailMesh.geometry=o.geometry(),s.trailMesh.visible=o.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*oe,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*oe)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new G(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new G(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}focus(t,e,n,r,s){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new G(e,o.floor.elevation+o.ty+r,n),radius:5.5,phi:.78},900),s){this.flashes.set(s,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=this.stepFans(e),l=!1;if(this.flashes.size){let m=new Set;for(let[x,g]of this.flashes){let p=this.deviceFloor.get(x);p&&m.add(p),g<=t&&this.flashes.delete(x)}l=this.flashes.size>0;for(let x of this.floors)m.has(x.floor.id)&&this.buildLamps(x)}let c=this.placeRoof(e),u=this.stepRobots(t),f=this.stepWeather(t),h=r||s||o||a||l||c,d=[];if(r&&d.push("camera"),s&&d.push("floors"),o&&d.push("openings"),a&&d.push("fans"),l&&d.push("flash"),c&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),u&&d.push("robot"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=h?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),h&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let m=this.lowQuality?2*Yp:Yp;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.invalidate()},m)}!h&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&f&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!h&&u&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&(this.flowActive||this.solarActive||this.soundActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*Wp:Wp))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(f=>f.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((f,h)=>{let d=f?f[0]*n/s+f[1]*r/s>=.25:a;!l&&d&&(c|=1<<h)});let u=this.roomId!==null&&o.floor.rooms.some(f=>f.id===this.roomId&&Hn(f));o.mask.standing.value=l?0:u?65535&~(1<<Nu):65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new G,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,u,g).project(this.camera);let p=(n.x+1)/2*t,_=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y:_}),(!c||p>c.x)&&(c={x:p,y:_})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let f=o.labelSize.w,h=8+this.labelInset,d=l.x-f-14,m=l.y;d<h&&this.labelInset&&(d=c.x+14,m=c.y),s.push({fv:o,left:Math.max(h,Math.min(t-f-8,d)),y:m,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.floorId!==null&&(o.views!=="all"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new G(o.p[0],o.p[1]+(l?.y??0)+(o.roof?(1-this.roofO)*2.2:0),o.p[2]),u=this.camera.position.clone().sub(c),f=u.length(),h=u.normalize().dot(new G(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,m=Math.min(1.6,Math.max(.25,15/Math.max(1,f)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,m,h)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new G,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(s.x,a.floor.elevation+a.y+.9,s.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("fp3d-dev-full",u==="full"),o.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function X1(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,u)=>{e.strokeStyle=`rgba(55,224,255,${u})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let f of[u,u+256/2])n(o+f+.75,c,o+f+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new _i(t);return s.flipY=!1,s.wrapS=cn,s.wrapT=cn,s.anisotropy=4,s.colorSpace=Ce,s}function q1(i){let t=new le({map:i,transparent:!0,blending:Fe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function Y1(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new _i(i);return e.wrapS=Wi,e.wrapT=Wi,e.colorSpace=Ce,e}function Yu(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function $p(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function $1(i){let t=new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Z1(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function J1(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new _i(t);return r.colorSpace=Ce,r}function K1(){let t=$u,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new _i(e);return s.anisotropy=4,s.colorSpace=Ce,s}function ME(i,t){return new Ju(i,t)}function Xu(i,t,e,n){let[r,s,o]=t.size??Zu[t.lamp],a=t.base??0,l=(t.rotation??0)*oe,c=Math.cos(l),u=Math.sin(l),f=(x,g)=>[t.x+x*c-g*u,t.z+x*u+g*c],h=(x,g,p,_,S,v=14)=>{let M=[];for(let w=0;w<v;w++){let A=w/v*Math.PI*2;M.push([t.x+Math.cos(A)*x,t.z+Math.sin(A)*x])}_e(i,M,g,p,_,S,{aoFrom:0,bottom:!0})},d=(x,g,p,_,S,v,M,w=M)=>_e(i,[f(x,p),f(g,p),f(g,_),f(x,_)],S,v,M,w,{aoFrom:0,bottom:!0}),m=Math.max(.05,Math.min(r,s)/2);switch(t.lamp){case"ceiling":h(m*.25,e-.04,e,jt,jt,8),h(m,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"pendant":{let x=Math.max(.4,e-o);h(.06,e-.02,e,jt,jt,8);let g=t.variant==="globe"?x+2*m:t.variant==="drum"?x+.24:x+.2;if(h(.008,g,e-.02,jt,jt,5),t.variant==="globe")for(let _=0;_<7;_++){let S=Math.PI*(_/7),v=Math.PI*((_+1)/7);h(m*Math.max(.2,Math.sin((S+v)/2)),x+m-m*Math.cos(S),x+m-m*Math.cos(v),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)h(m*(.25+.75*(4-_)/4),x+.06*_,x+.06*(_+1),n,n,16);else t.variant==="drum"?h(m,x,x+.24,n,n,18):(h(m*.35,x+.14,x+.2,n,n,12),h(m,x,x+.14,n,n,16));break}case"downlight":h(m,e-.012,e,jt,jt,12),h(m*.7,e-.02,e-.012,n,n,12);break;case"spot":h(m*.6,e-.02,e,jt,jt,10),h(m,e-Math.max(.06,o),e-.02,jt,jt,12),h(m*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-r/2,r/2,-s/2,s/2,e-Math.max(.015,o),e,jt,jt),d(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":h(Math.max(.1,m*.6),a,a+.03,jt,jt),h(.014,a+.03,a+o-.12,jt,jt,6),h(m,a+o-.14,a+o-.02,jt,jt),h(m*.92,a+o-.02,a+o,n,n);break;case"bollard":h(m,a,a+o-.14,jt,jt,10),h(m*.9,a+o-.14,a+o-.03,n,n,10),h(m*1.1,a+o-.03,a+o,jt,jt,10);break;case"garden":h(.012,a,a+o-.08,jt,jt,5),h(m,a+o-.08,a+o-.01,jt,jt,10),h(m*.8,a+o-.01,a+o,n,n,10);break;case"floor":h(Math.max(.1,m*.7),a,a+.03,jt,jt),h(.014,a+.03,a+o-.28,jt,jt,6),h(m,a+o-.3,a+o,n,n);break;case"table":h(Math.max(.05,m*.55),a,a+.03,jt,jt),h(.012,a+.03,a+o-.16,jt,jt,6),h(m,a+o-.18,a+o,n,n);break;case"wall":{let x=t.base??dl;d(-r/2+.03,r/2-.03,-s/2,-s/2+.02,x,x+o,jt),d(-r/2,r/2,-s/2+.02,s/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright){d(-r/2,r/2,-s/2,s/2,g-x,g,n);break}let p=(t.roll??0)*oe,_=Math.cos(p),S=Math.sin(p),v=t.upright?a+r/2:g-x/2,M=(C,I,F)=>{let P=C,E=I*_-F*S,D=I*S+F*_;return t.upright&&([P,E]=[-E,P]),[t.x+P*c-D*u,v+E,t.z+P*u+D*c]},w=[M(-r/2,-x/2,-s/2),M(r/2,-x/2,-s/2),M(r/2,-x/2,s/2),M(-r/2,-x/2,s/2),M(-r/2,x/2,-s/2),M(r/2,x/2,-s/2),M(r/2,x/2,s/2),M(-r/2,x/2,s/2)],A=new st(n),b=[t.x,v,t.z],T=(C,I,F,P)=>{let[E,D,U]=[w[C],w[I],w[F]],N=[(D[1]-E[1])*(U[2]-E[2])-(D[2]-E[2])*(U[1]-E[1]),(D[2]-E[2])*(U[0]-E[0])-(D[0]-E[0])*(U[2]-E[2]),(D[0]-E[0])*(U[1]-E[1])-(D[1]-E[1])*(U[0]-E[0])],z=[E[0]-b[0],E[1]-b[1],E[2]-b[2]],O=N[0]*z[0]+N[1]*z[1]+N[2]*z[2]<0,[k,V,it,et]=O?[w[P],w[F],w[I],w[C]]:[w[C],w[I],w[F],w[P]];i.tri(k,V,it,A,A,A),i.tri(k,it,et,A,A,A)};T(0,1,2,3),T(4,5,6,7),T(0,1,5,4),T(1,2,6,5),T(2,3,7,6),T(3,0,4,7);break}}}export{Ju as FloorplanViewer,ME as createViewer,D1 as furniturePreview,W1 as isLowEnd,Xu as pushLampModel};
